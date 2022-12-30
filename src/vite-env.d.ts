/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_ENDPOINT: string;
  // その他の環境変数...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
