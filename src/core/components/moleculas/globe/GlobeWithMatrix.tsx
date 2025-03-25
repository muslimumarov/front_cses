import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { useCallback, useEffect, useRef } from "react";
// @ts-expect-error module exists
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// @ts-expect-error module exists
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
// @ts-expect-error module exists
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// @ts-expect-error module exists
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
// @ts-expect-error module exists
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";

interface BinaryLine {
  group: THREE.Group;
  speed: number;
}

const binaryMaterial1 = new THREE.MeshBasicMaterial({
  color: 0xabececff,
  transparent: true,
  opacity: 0.6,
});
const binaryMaterial2 = new THREE.MeshBasicMaterial({
  color: 0xabecec,
  transparent: true,
  opacity: 0.6,
});

const GlobeWithMatrix = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const createBloomComposer = (
    renderer: THREE.WebGLRenderer,
    renderScene: RenderPass,
  ) => {
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85,
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 0.3;
    bloomPass.radius = 0.02;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    return bloomComposer;
  };

  const createMixPass = (bloomComposer: UnrealBloomPass) => {
    const mixPass = new ShaderPass(
      new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: bloomComposer.renderTarget2.texture },
        },
        vertexShader: `
                varying vec2 vUv;
                
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }`,
        fragmentShader: `
                uniform sampler2D baseTexture;
                uniform sampler2D bloomTexture;

                varying vec2 vUv;

                void main() {
                    gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
                }`,
        defines: {},
      }),
      "baseTexture",
    );
    mixPass.needsSwap = true;

    return mixPass;
  };

  const createText = useCallback(
    (font: Font, numPerLine: number, j: number, fontScale: number) => {
      const character = Math.random() < 0.5 ? "0" : "1";

      const textGeometry = new TextGeometry(character, {
        font: font,
        size: 2.5,
        depth: 0.05,
      });

      const textMesh = new THREE.Mesh(
        textGeometry,
        Math.random() < 0.6 ? binaryMaterial1 : binaryMaterial2,
      );
      textMesh.position.set(0, -numPerLine * 0.5 + j * 0.5, 0);
      textMesh.scale.set(fontScale, fontScale, fontScale);

      if (Math.random() < 0.3) {
        textMesh.layers.disable(0);
      }
      return textMesh;
    },
    [],
  );

  const createLine = useCallback(
    (font: Font) => {
      const group = new THREE.Group();

      const xPos = (Math.random() - 0.5) * 80;
      const zPos = (Math.random() - 2.3) * 10;
      const fontScale = zPos > 10 ? 0.1 : 0.16;
      const numPerLine = Math.floor(Math.random() * 61) + 20;

      for (let j = 0; j < numPerLine; j++) {
        group.add(createText(font, numPerLine, j, fontScale));
      }

      group.position.set(xPos, -15, zPos);

      return group;
    },
    [createText],
  );

  const init = useCallback(
    (canvas: HTMLCanvasElement) => {
      const numLines = 10;
      const binaryLines: BinaryLine[] = [];

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x01010110, 0.05);
      // scene.background = new THREE.Color('#02172c');
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      camera.position.z = 10;
      camera.rotation.x = -Math.PI / 12;

      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ReinhardToneMapping;

      const renderScene = new RenderPass(scene, camera);
      const bloomComposer = createBloomComposer(renderer, renderScene);

      const mixPass = createMixPass(bloomComposer);

      const outputPass = new OutputPass();

      const finalComposer = new EffectComposer(renderer);
      finalComposer.addPass(renderScene);
      finalComposer.addPass(renderScene);
      finalComposer.addPass(mixPass);
      finalComposer.addPass(outputPass);

      const loader = new FontLoader();
      loader.load(
        "/fonts/matrix-code/matrix-code-regular.json",
        (font: Font) => {
          for (let i = 0; i < numLines; i++) {
            const group = createLine(font);
            scene.add(group);
            binaryLines.push({
              group,
              speed: 0.05 + Math.random() * 0.07,
            });
          }

          let frame = 0;

          function animate() {
            requestAnimationFrame(animate);

            if (frame % 2 === 0) {
              binaryLines.forEach(({ group, speed }) => {
                group.position.y += speed;

                if (group.position.y > 30) {
                  group.position.y = -15;
                }
              });
            }

            bloomComposer.render();
            finalComposer.render();
            frame++;
          }

          animate();

          window.addEventListener("resize", () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
          });
        },
      );

      return renderer;
    },
    [createLine],
  );

  useEffect(() => {
    let renderer: THREE.WebGLRenderer | null = null;
    if (ref.current) {
      renderer = init(ref.current);
    }

    return () => {
      if (renderer) {
        renderer.dispose();
      }
      window.removeEventListener("resize", () => {});
    };
  }, [init]);

  return (
    <div className="relative min-h-screen">
      <canvas ref={ref} />
    </div>
  );
};

export default GlobeWithMatrix;
