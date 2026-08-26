export const OFFLINE_DOCS_MANIFEST_URL = "/offline-docs-manifest.json";
export const OFFLINE_DOCS_REVISION_KEY = "shark-offline-docs-revision";
export const OFFLINE_DOCS_ENABLED_KEY = "shark-offline-docs-enabled";

export interface OfflineDocsManifest {
  revision: string;
  urls: string[];
}
