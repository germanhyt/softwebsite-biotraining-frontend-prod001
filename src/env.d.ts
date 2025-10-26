/// <reference path="../.astro/types.d.ts" />
/// <reference path="./types/swiper.d.ts" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly PUBLIC_SITE_URL: string;
  readonly EMAIL_FROM: string;
  readonly EMAIL_TO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
