var w = (e) => {
  throw TypeError(e);
};
var T = (e, t, s) => t.has(e) || w("Cannot " + s);
var r = (e, t, s) => (T(e, t, "read from private field"), s ? s.call(e) : t.get(e)), _ = (e, t, s) => t.has(e) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), m = (e, t, s, i) => (T(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s);
import { O as W } from "./bundle.manifests-DUiJ2ggB.js";
import { O as b } from "./ourtree-workspace.context-token-P34Z4-fz.js";
import { html as R, css as x, state as g, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbWorkspaceRouteManager as P } from "@umbraco-cms/backoffice/workspace";
import { UmbStringState as l } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as A } from "@umbraco-cms/backoffice/class-api";
var q = Object.defineProperty, I = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, E = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? I(t, s) : t, u = e.length - 1, d; u >= 0; u--)
    (d = e[u]) && (o = (i ? d(t, s, o) : d(o)) || o);
  return i && o && q(t, s, o), o;
}, O = (e, t, s) => t.has(e) || k("Cannot " + s), v = (e, t, s) => (O(e, t, "read from private field"), t.get(e)), y = (e, t, s) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), M = (e, t, s, i) => (O(e, t, "write to private field"), t.set(e, s), s), z = (e, t, s) => (O(e, t, "access private method"), s), h, f, C;
let c = class extends U {
  constructor() {
    super(), y(this, f), y(this, h), this._name = "", this._icon = "icon-bug", this.consumeContext(b, (e) => {
      M(this, h, e), z(this, f, C).call(this);
    });
  }
  render() {
    return R`
      <umb-workspace-editor alias="Our.Tree.Workspace">
        <div id="header" slot="header">
          <uui-icon name=${this._icon ?? "icon-bug"}></uui-icon>
          <span>${this._name}</span>
        </div>
      </umb-workspace-editor>
    `;
  }
};
h = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
C = function() {
  v(this, h) && (this.observe(v(this, h).name, (e) => {
    this._name = e;
  }), this.observe(v(this, h).icon, (e) => {
    this._icon = e;
  }));
};
c.styles = [
  x`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      #header {
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-3);
        font-size: 1.2rem;
        font-weight: bold;
      }

      uui-icon {
        font-size: 1.5rem;
      }
    `
];
E([
  g()
], c.prototype, "_name", 2);
E([
  g()
], c.prototype, "_icon", 2);
c = E([
  S("our-tree-workspace-editor")
], c);
const D = "Our.Tree.Workspace";
var a, n, p;
class X extends A {
  constructor(s) {
    super(s, b);
    _(this, a);
    _(this, n);
    _(this, p);
    this.workspaceAlias = D, m(this, a, new l(void 0)), this.unique = r(this, a).asObservable(), m(this, n, new l(void 0)), this.name = r(this, n).asObservable(), m(this, p, new l("icon-bug")), this.icon = r(this, p).asObservable(), this.routes = new P(this), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: c,
        setup: (i, o) => {
          const u = o.match.params.unique;
          this.load(u);
        }
      }
    ]);
  }
  async load(s) {
    r(this, a).setValue(s), r(this, n).setValue(`Tree Item ${s}`);
  }
  getUnique() {
    return r(this, a).getValue();
  }
  getEntityType() {
    return W;
  }
  destroy() {
    r(this, a).destroy(), r(this, n).destroy(), r(this, p).destroy(), super.destroy();
  }
}
a = new WeakMap(), n = new WeakMap(), p = new WeakMap();
export {
  D as OUR_TREE_WORKSPACE_ALIAS,
  X as OurTreeWorkspaceContext,
  X as api
};
//# sourceMappingURL=ourtree-workspace.context-BUHte_sK.js.map
