import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbApi } from "@umbraco-cms/backoffice/extension-api";
import { UmbTreeRepositoryBase } from "@umbraco-cms/backoffice/tree";
import { OUR_TREE_STORE_CONTEXT } from "./ourtree.store";
import {
  OUR_TREE_ROOT_ENTITY_TYPE,
  OurTreeItemModel,
  OurTreeRootModel,
} from "./types";
import { OurTreeDataSource } from "./ourtree.data-source";

export class OurTreeRepository
  extends UmbTreeRepositoryBase<OurTreeItemModel, OurTreeRootModel>
  implements UmbApi
{
  constructor(host: UmbControllerHost) {
    super(host, OurTreeDataSource, OUR_TREE_STORE_CONTEXT);
  }

  async requestTreeRoot() {
    var data: OurTreeRootModel = {
      unique: null,
      entityType: OUR_TREE_ROOT_ENTITY_TYPE,
      name: "Our Tree Root",
      icon: "icon-star",
      hasChildren: true,
      isFolder: true,
    };

    return { data };
  }
}

export { OurTreeRepository as api };
