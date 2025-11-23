export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "My Extension Entrypoint",
    alias: "MyExtension.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint.js"),
  },
];
