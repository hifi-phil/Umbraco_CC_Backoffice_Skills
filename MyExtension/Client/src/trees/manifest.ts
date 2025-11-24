import { manifests as menuManifests } from "./menu-item-manifest.js";

const repositoryAlias = "My.Repository.Demo.Tree";

export const manifests: Array<UmbExtensionManifest> = [
  ...menuManifests,
  {
    type: "repository",
    alias: repositoryAlias,
    name: "Demo Tree Repository",
    api: () => import("./demo-tree-repository.js"),
  },
  {
    type: "tree",
    kind: "default",
    alias: "My.Tree.Demo",
    name: "Demo Tree",
    meta: {
      repositoryAlias: repositoryAlias,
    },
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "My.TreeItem.Demo",
    name: "Demo Tree Item",
    forEntityTypes: ["demo-workspace", "demo-tree-root"],
  },
];
