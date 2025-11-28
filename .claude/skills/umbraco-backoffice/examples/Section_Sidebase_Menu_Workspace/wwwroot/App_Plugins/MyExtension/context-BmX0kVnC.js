import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as o } from "@umbraco-cms/backoffice/class-api";
import { UmbNumberState as r } from "@umbraco-cms/backoffice/observable-api";
class s extends o {
  constructor(t) {
    super(t), this.#t = new r(0), this.counter = this.#t.asObservable(), this.provideContext(n, this);
  }
  #t;
  increment() {
    this.#t.setValue(this.#t.value + 1);
  }
  reset() {
    this.#t.setValue(0);
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
const a = s, n = new e(
  "Blueprint.WorkspaceContext.Counter",
  void 0
);
export {
  n as BLUEPRINT_COUNTER_CONTEXT,
  s as BlueprintCounterContext,
  a as api
};
//# sourceMappingURL=context-BmX0kVnC.js.map
