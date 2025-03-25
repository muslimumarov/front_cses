import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./i18n.ts";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import MainLoader from "./core/components/moleculas/loader/MainLoader.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<MainLoader />}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
