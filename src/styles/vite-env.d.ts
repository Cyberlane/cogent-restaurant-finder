/// <reference types="vite/client" />

// biome-ignore lint/suspicious/noEmptyInterface: This type file needs empty interfaces to enforce strict on ImportMetaEnv
interface ViteTypeOptions {}

interface ImportMetaEnv {
  readonly VITE_FOURSQUARE_API_KEY: string;
  readonly VITE_OFFICE_LAT: string;
  readonly VITE_OFFICE_LNG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
