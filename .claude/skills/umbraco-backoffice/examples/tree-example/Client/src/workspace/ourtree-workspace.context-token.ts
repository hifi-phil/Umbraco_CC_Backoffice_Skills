import type { OurTreeWorkspaceContext } from "./ourtree-workspace.context.js";
import { OUR_TREE_ITEM_ENTITY_TYPE } from "../settingsTree/types.js";
import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";

export const OUR_TREE_WORKSPACE_CONTEXT = new UmbContextToken<any, OurTreeWorkspaceContext>(
  "UmbWorkspaceContext",
  undefined,
  (context): context is OurTreeWorkspaceContext =>
    context.getEntityType?.() === OUR_TREE_ITEM_ENTITY_TYPE
);
