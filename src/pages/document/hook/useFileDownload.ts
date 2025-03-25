import { useApi } from "../../../core/hooks/api/useApi";

const useDownloadFiles = (id: number) => {
  const { get } = useApi([`document`, id, `download`]);

  const download = async () => {
    try {
      const response = await get<Blob>({
        options: { responseType: "blob" },
      });

      const blobUrl = window.URL.createObjectURL(response);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.click();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return { download };
};

export default useDownloadFiles;
