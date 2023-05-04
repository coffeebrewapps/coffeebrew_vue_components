(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // tmp/assets/DemoForm-f3d72e82.js
  var DemoForm_f3d72e82_exports = {};
  __export(DemoForm_f3d72e82_exports, {
    default: () => Ta
  });
  var he, _e2, ye2, be, $e, Te, ve, ke, De, ee, Ce, we, Ve2, Se, Ie, xe, Me, ue, Q, Be, Oe, Le, Re, ze, Ae, Fe, Ne, Pe, Ue, We, Ye, je, qe, Ee, Je, He, Ge, Ke, Qe, Xe, Ze, et, le2, tt, at, lt, st, nt, ot, se, it, dt, rt, ut, ct, vt, mt, ft, pt, gt, ht, de, _t2, yt, Z, me, bt, $t, Tt, kt, Dt, Ct, wt, Vt, St, It, xt, Mt, Bt, Ot, Lt, Rt, zt, At, Ft, Nt, Pt, Ut, Wt, Yt, jt, K, X, qt, Et, Jt, Ht, Gt, Kt, Qt, Xt, Zt, ea, ta, aa, la, sa, na, oa, ia, da, ra, ua, ca, va, ma, fa, pa, ga, ha, _a, ya, ba, Ta;
  var init_DemoForm_f3d72e82 = __esm({
    "tmp/assets/DemoForm-f3d72e82.js"() {
      init_index_2b14c3c3();
      he = { class: "menu-bar" };
      _e2 = { class: "container" };
      ye2 = { class: "heading" };
      be = { class: "body" };
      $e = { class: "actions" };
      Te = { __name: "TDialog", props: { modelValue: { type: Boolean, default: false }, width: { type: Number, default: 800 }, height: { type: Number, default: 600 }, title: { type: String, default: "" } }, emits: ["update:modelValue"], setup(t, { emit: n }) {
        const o = t, a = di("dialog"), c = ye(() => o.modelValue ? "dialog show" : "dialog hide");
        function V() {
          n("update:modelValue", false);
        }
        return Li(() => {
          a.value.style.width = `${o.width}px`, a.value.style.height = `${o.height}px`, a.value.style.top = `calc((100vh - ${a.value.style.height}) / 2)`, a.value.style.left = `calc((100vw - ${a.value.style.width}) / 2)`;
        }), ($2, M) => (_t(), Kn("div", { class: an(Ve(c)), ref_key: "dialog", ref: a }, [as("div", he, [ru($2.$slots, "menu-bar", {}, () => [as("div", { class: "menu-button close", onClick: M[0] || (M[0] = (_) => V()) })], true)]), as("div", _e2, [as("div", ye2, [ru($2.$slots, "heading", {}, () => [no(Co(t.title), 1)], true)]), as("div", be, [ru($2.$slots, "body", {}, void 0, true)]), as("div", $e, [ru($2.$slots, "actions", {}, void 0, true)])])], 2));
      } };
      ve = qc(Te, [["__scopeId", "data-v-6f83c4ae"]]);
      ke = { key: 0 };
      De = { __name: "TButton", props: { buttonType: { type: String, default: "text" }, size: { type: String, default: "md" }, value: { type: String, default: "Button" }, icon: { type: String, default: "" } }, emits: { click: null }, setup(t, { emit: n }) {
        const o = t, a = ye(() => `button ${o.buttonType} ${o.size}`.trim()), c = ye(() => `${o.icon} fa-lg`.trim());
        return (V, $2) => (_t(), Kn("div", { class: an(Ve(a)), onClick: $2[0] || ($2[0] = (M) => V.$emit("click")) }, [t.buttonType === "text" ? (_t(), Kn("span", ke, Co(t.value), 1)) : iu("", true), as("i", { class: an(Ve(c)) }, null, 2)], 2));
      } };
      ee = qc(De, [["__scopeId", "data-v-e7faa3f9"]]);
      Ce = { class: "primary-text" };
      we = { class: "secondary-text" };
      Ve2 = { __name: "TConfirmDialog", props: { modelValue: { type: Boolean, default: false }, width: { type: Number, default: 800 }, height: { type: Number, default: 600 }, title: { type: String, default: "" }, primaryText: { type: String, default: "" }, secondaryText: { type: String, default: "" } }, emits: ["update:modelValue", "confirm", "cancel"], setup(t, { emit: n }) {
        const o = t, a = di("dialog"), c = ye({ get: () => o.modelValue, set: (M) => {
          n("update:modelValue", M);
        } });
        function V() {
          n("update:modelValue", false), n("confirm");
        }
        function $2() {
          n("update:modelValue", false), n("cancel");
        }
        return (M, _) => (_t(), fs(ve, { ref_key: "dialog", ref: a, modelValue: Ve(c), "onUpdate:modelValue": _[2] || (_[2] = (h) => le(c) ? c.value = h : null), width: t.width, height: t.height, title: t.title }, { body: Hr(() => [as("div", Ce, Co(t.primaryText), 1), as("div", we, Co(t.secondaryText), 1)]), actions: Hr(() => [re(ee, { class: "confirm-button", "button-type": "text", value: "Confirm", icon: "fa-solid fa-check", onClick: _[0] || (_[0] = (h) => V()) }), re(ee, { "button-type": "text", value: "Cancel", icon: "fa-solid fa-xmark", onClick: _[1] || (_[1] = (h) => $2()) })]), _: 1 }, 8, ["modelValue", "width", "height", "title"]));
      } };
      Se = qc(Ve2, [["__scopeId", "data-v-701be463"]]);
      Ie = { class: "input-label" };
      xe = { key: 0, class: "input-error" };
      Me = { __name: "TCheckbox", props: { modelValue: { type: Boolean, default: false }, label: { type: String, default: "Input" }, errorMessage: { type: String, default: "" } }, emits: ["update:modelValue"], setup(t, { emit: n }) {
        const o = t, a = di(false), c = ye(() => o.label.length <= 10 ? "input-control sm" : o.label.length > 10 && o.label.length <= 30 ? "input-control md" : "input-control lg"), V = ye(() => a.value ? "input-field checked" : "input-field");
        function $2() {
          a.value = !a.value, n("update:modelValue", a.value);
        }
        return (M, _) => (_t(), Kn(_e, null, [as("div", { class: an(Ve(c)), onClick: $2 }, [as("div", { class: an(Ve(V)) }, null, 2), as("div", Ie, Co(t.label), 1)], 2), t.errorMessage.length > 0 ? (_t(), Kn("div", xe, Co(t.errorMessage), 1)) : iu("", true)], 64));
      } };
      ue = qc(Me, [["__scopeId", "data-v-d84ec430"]]);
      Q = (t) => (nu("data-v-c185fee2"), t = t(), su(), t);
      Be = { class: "input-label" };
      Oe = { class: "selected" };
      Le = ["value"];
      Re = ["value"];
      ze = ["value"];
      Ae = Q(() => as("div", { class: "toggle" }, [as("i", { class: "fa-solid fa-calendar-days" })], -1));
      Fe = { class: "year picker" };
      Ne = Q(() => as("div", { class: "title" }, "Year", -1));
      Pe = { class: "options" };
      Ue = ["value", "onClick"];
      We = { class: "value" };
      Ye = Q(() => as("i", { class: "fa-solid fa-caret-right" }, null, -1));
      je = Q(() => as("div", { class: "title" }, "Month", -1));
      qe = { class: "options" };
      Ee = ["value", "onClick"];
      Je = { class: "value" };
      He = Q(() => as("i", { class: "fa-solid fa-caret-right" }, null, -1));
      Ge = Q(() => as("div", { class: "title" }, "Day", -1));
      Ke = { class: "options" };
      Qe = ["value", "onClick"];
      Xe = { class: "value" };
      Ze = { key: 0, class: "input-error" };
      et = { __name: "TDatePicker", props: { modelValue: { type: Date, default: /* @__PURE__ */ new Date() }, min: { type: Date, default: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 1, 1) }, max: { type: Date, default: new Date((/* @__PURE__ */ new Date()).getFullYear() + 9, 12, 31) }, label: { type: String, default: "Input" }, errorMessage: { type: String, default: "" } }, emits: ["update:modelValue"], setup(t, { emit: n }) {
        const o = /* @__PURE__ */ new Date(), a = new Date(o.getFullYear() - 10, 1, 1), c = new Date(o.getFullYear() + 9, 12, 31), V = [...Array(c.getFullYear() - a.getFullYear()).keys()].map((k) => k + a.getFullYear()), $2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], M = di([]), _ = di("collapsed"), h = di(), x = di(), v = di();
        di();
        const L = di(false), y = di(false), T = ye(() => "input-control"), R = ye(() => `input-field ${_.value}`.trim()), C = ye(() => L.value ? "month picker show" : "month picker hide"), Y = ye(() => y.value ? "day picker show" : "day picker hide"), w = ye(() => !h.value || !x.value || !v.value ? null : new Date(h.value, x.value, v.value)), P = ye(() => h.value ? i(h.value, 1, 1).split("-")[0] : f(/* @__PURE__ */ new Date()).split("-")[0]), j = ye(() => x.value ? i(1900, x.value, 1).split("-")[1] : f(/* @__PURE__ */ new Date()).split("-")[1]), te = ye(() => v.value ? i(1900, 1, v.value).split("-")[2] : f(/* @__PURE__ */ new Date()).split("-")[2]);
        function ie2(k, J) {
          const b = new Date(k, J, 1);
          return b.setMonth(b.getMonth() + 1), b.setDate(b.getDate() - 1), b.getDate();
        }
        function f(k) {
          const J = k.toLocaleString("default", { year: "numeric" }), b = k.toLocaleString("default", { month: "2-digit" }), H = k.toLocaleString("default", { day: "2-digit" });
          return [J, b, H].join("-");
        }
        function i(k, J, b) {
          const H = new Date(k, J, b);
          return k = H.toLocaleString("default", { year: "numeric" }), J = H.toLocaleString("default", { month: "2-digit" }), b = H.toLocaleString("default", { day: "2-digit" }), [k, J, b].join("-");
        }
        function s() {
          _.value === "collapsed" ? (_.value = "expanded", h.value && (L.value = true), x.value && (y.value = true)) : (_.value = "collapsed", L.value = false, y.value = false);
        }
        function S(k) {
          return k === h.value ? "option selected" : "option";
        }
        function z2(k) {
          return k === x.value ? "option selected" : "option";
        }
        function G(k) {
          return k === v.value ? "option selected" : "option";
        }
        function E(k) {
          h.value = k, x.value = 0, v.value = 1, L.value = true, y.value = false;
        }
        function ae(k) {
          x.value = k, v.value = 1, y.value = true, M.value = ie2(h.value, x.value);
        }
        function fe2(k) {
          _.value = "collapsed", v.value = k, L.value = false, y.value = false, n("update:modelValue", w);
        }
        return (k, J) => (_t(), Kn("div", { class: an(Ve(T)) }, [as("div", Be, Co(t.label), 1), as("div", { class: an(Ve(R)) }, [as("div", { class: "select", onClick: s }, [as("div", Oe, [as("input", { disabled: "", value: Ve(P) }, null, 8, Le), as("input", { disabled: "", value: Ve(j) }, null, 8, Re), as("input", { disabled: "", value: Ve(te) }, null, 8, ze)]), Ae]), as("div", Fe, [Ne, as("div", Pe, [(_t(true), Kn(_e, null, zi(Ve(V), (b) => (_t(), Kn("div", { class: an(S(b)), value: b, onClick: (H) => E(b) }, [as("div", We, Co(b), 1), Ye], 10, Ue))), 256))])]), as("div", { class: an(Ve(C)) }, [je, as("div", qe, [(_t(true), Kn(_e, null, zi(Object.keys($2), (b) => (_t(), Kn("div", { class: an(z2(b)), value: b, onClick: (H) => ae(b) }, [as("div", Je, Co($2[b]), 1), He], 10, Ee))), 256))])], 2), as("div", { class: an(Ve(Y)) }, [Ge, as("div", Ke, [(_t(true), Kn(_e, null, zi(M.value, (b) => (_t(), Kn("div", { class: an(G(b)), value: b, onClick: (H) => fe2(b) }, [as("div", Xe, Co(b), 1)], 10, Qe))), 256))])], 2)], 2), t.errorMessage.length > 0 ? (_t(), Kn("div", Ze, Co(t.errorMessage), 1)) : iu("", true)], 2));
      } };
      le2 = qc(et, [["__scopeId", "data-v-c185fee2"]]);
      tt = { class: "input-control" };
      at = { class: "input-label" };
      lt = { class: "input-field" };
      st = ["type", "value"];
      nt = { key: 0, class: "input-error" };
      ot = { __name: "TInput", props: { modelValue: { type: String, default: "" }, type: { type: String, default: "text" }, size: { type: String, default: "md" }, label: { type: String, default: "Input" }, errorMessage: { type: String, default: "" } }, emits: ["update:modelValue"], setup(t) {
        return (n, o) => (_t(), Kn("div", tt, [as("div", at, Co(t.label), 1), as("div", lt, [as("input", { type: t.type, class: an(t.size), value: t.modelValue, onInput: o[0] || (o[0] = (a) => n.$emit("update:modelValue", a.target.value)) }, null, 42, st)]), t.errorMessage.length > 0 ? (_t(), Kn("div", nt, Co(t.errorMessage), 1)) : iu("", true)]));
      } };
      se = qc(ot, [["__scopeId", "data-v-b20c5982"]]);
      it = ["value"];
      dt = { __name: "TOption", props: { size: { type: String, default: "md" }, value: { type: String, default: "" }, label: { type: String, default: "Select" }, selected: { type: Boolean, default: false } }, emits: ["select"], setup(t, { emit: n }) {
        const o = t, a = ye(() => o.selected ? `option selected ${o.size}`.trim() : `option ${o.size}`.trim());
        return (c, V) => (_t(), Kn("div", { class: an(Ve(a)), value: t.value, onClick: V[0] || (V[0] = ($2) => c.$emit("select", t.value)) }, Co(t.label), 11, it));
      } };
      rt = qc(dt, [["__scopeId", "data-v-88a53eff"]]);
      ut = (t) => (nu("data-v-2f88cb3e"), t = t(), su(), t);
      ct = { class: "input-label" };
      vt = ["name"];
      mt = { class: "selected" };
      ft = ut(() => as("div", { class: "toggle" }, [as("i", { class: "fa-solid fa-caret-down" }), as("i", { class: "fa-solid fa-caret-up" })], -1));
      pt = { class: "options" };
      gt = { key: 0, class: "input-error" };
      ht = { __name: "TSelect", props: { modelValue: { type: String, default: "" }, name: { type: String, default: "" }, size: { type: String, default: "md" }, label: { type: String, default: "Input" }, options: { type: Array, default: [] }, errorMessage: { type: String, default: "" } }, emits: ["update:modelValue"], setup(t, { emit: n }) {
        const o = t, a = di("collapsed"), c = di(""), V = ye(() => `input-control ${o.size}`.trim()), $2 = ye(() => `input-field ${a.value}`.trim()), M = ye(() => {
          const v = o.options.find((L) => L.value === c.value);
          return v ? v.label : "";
        });
        function _() {
          a.value === "collapsed" ? a.value = "expanded" : a.value = "collapsed";
        }
        function h(v) {
          return v === c.value;
        }
        function x(v) {
          a.value = "collapsed", c.value = v, n("update:modelValue", v);
        }
        return (v, L) => (_t(), Kn("div", { class: an(Ve(V)) }, [as("div", ct, Co(t.label), 1), as("div", { class: an(Ve($2)) }, [as("div", { class: "select", name: t.name, onClick: _ }, [as("div", mt, Co(Ve(M)), 1), ft], 8, vt), as("div", pt, [(_t(true), Kn(_e, null, zi(t.options, (y) => (_t(), fs(rt, { value: y.value, label: y.label, size: t.size, selected: h(y.value), onSelect: (T) => x(y.value) }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))])], 2), t.errorMessage.length > 0 ? (_t(), Kn("div", gt, Co(t.errorMessage), 1)) : iu("", true)], 2));
      } };
      de = qc(ht, [["__scopeId", "data-v-2f88cb3e"]]);
      _t2 = { class: "progress-bar" };
      yt = { __name: "TProgressBar", props: { step: { type: Number, default: 10 }, speed: { type: Number, default: 10 }, bidirection: { type: Boolean, default: true }, indefinite: { type: Boolean, default: true } }, setup(t) {
        const n = t, o = di("forward"), a = di(null), c = di(null), V = di(), $2 = ye(() => `bar forward-bar ${o.value}`), M = ye(() => n.bidirection ? `bar reverse-bar ${o.value}` : "bar reverse-bar hide");
        Li(() => {
          V.value = setInterval(h, n.speed);
        });
        function _(T) {
          return parseInt(T.style.width.split("%")[0]);
        }
        function h() {
          n.bidirection ? v() : x();
        }
        function x() {
          const T = _(a.value);
          T === 100 ? n.indefinite ? L(a.value) : clearInterval(V.value) : y(a.value, "forward", T);
        }
        function v() {
          const T = _(a.value), R = _(c.value);
          o.value === "forward" && T === 100 ? (o.value = "reverse", y(a.value, "reverse", T), y(c.value, "forward", R)) : o.value === "reverse" && R === 100 ? (o.value = "forward", y(a.value, "forward", T), y(c.value, "reverse", R)) : o.value === "forward" ? (y(a.value, "forward", T), y(c.value, "reverse", R)) : o.value === "reverse" && (y(a.value, "reverse", T), y(c.value, "forward", R));
        }
        function L(T) {
          T.style.width = "0%";
        }
        function y(T, R, C) {
          R === "forward" ? T.style.width = [(C + n.step).toString(), "%"].join("") : T.style.width = [(C - n.step).toString(), "%"].join("");
        }
        return (T, R) => (_t(), Kn("div", _t2, [as("div", { class: an(Ve($2)), style: { width: "0%" }, ref_key: "forwardBar", ref: a }, null, 2), as("div", { class: an(Ve(M)), style: { width: "100%" }, ref_key: "reverseBar", ref: c }, null, 2)]));
      } };
      Z = qc(yt, [["__scopeId", "data-v-85f65b5a"]]);
      me = (t) => (nu("data-v-c84e9478"), t = t(), su(), t);
      bt = { class: "table-container" };
      $t = { class: "table-actions" };
      Tt = { class: "actions" };
      kt = ["onClick"];
      Dt = { class: "tooltip" };
      Ct = { class: "header" };
      wt = { class: "row" };
      Vt = { class: "col" };
      St = { key: 0, class: "col" };
      It = { key: 0, class: "loading" };
      xt = ["colspan"];
      Mt = { class: "body" };
      Bt = { class: "row" };
      Ot = { class: "col" };
      Lt = { key: 0, class: "col" };
      Rt = { class: "actions" };
      zt = ["onClick"];
      At = { class: "tooltip" };
      Ft = { class: "pagination" };
      Nt = me(() => as("i", { class: "fa-solid fa-chevron-left" }, null, -1));
      Pt = { class: "page-number" };
      Ut = { key: 0, class: "current" };
      Wt = { class: "current" };
      Yt = me(() => as("i", { class: "fa-solid fa-chevron-right" }, null, -1));
      jt = { __name: "TTable", props: { name: { type: String, default: "" }, headers: { type: Array, default: [] }, data: { type: Array, default: [] }, totalData: { type: Number, default: 0 }, actions: { type: Array, default: [] }, tableActions: { type: Object, default: {} }, pagination: { type: Object, default: { limit: 5, client: true } }, loading: { type: Boolean, default: true }, dense: { type: Boolean, default: true } }, emits: ["offsetChange"], setup(t, { emit: n }) {
        const o = t, a = di(0), c = di(o.pagination.limit), V = ye(() => o.pagination.client ? false : o.loading), $2 = ye(() => o.headers.length + (o.actions.length > 0 ? 1 : 0)), M = ye(() => o.name && o.name.length > 0 ? "table-name show" : "table-name hide"), _ = ye(() => o.dense ? "table dense" : "table"), h = ye(() => o.pagination.client ? o.data.length : o.totalData), x = ye(() => o.pagination.client ? o.data.slice(a.value, a.value + c.value) : o.data), v = ye(() => a.value + c.value > h.value ? { start: a.value + 1, end: h.value } : { start: a.value + 1, end: a.value + c.value }), L = ye(() => v.value.start === 1 ? "pager left" : "pager left show"), y = ye(() => v.value.end === h.value ? "pager right" : "pager right show");
        function T() {
          v.value.start === 1 || (a.value - c.value < 0 ? a.value = 0 : a.value = a.value - c.value), n("offsetChange", a.value);
        }
        function R() {
          v.value.end === h.value || (a.value = a.value + c.value), n("offsetChange", a.value);
        }
        return (C, Y) => (_t(), Kn("div", bt, [as("div", $t, [ru(C.$slots, "table-actions", tu(fl({ name: t.name, actions: t.tableActions })), () => [as("div", { class: an(Ve(M)) }, [ru(C.$slots, "table-name", tu(fl({ name: t.name })), () => [no(Co(t.name), 1)], true)], 2), as("div", Tt, [(_t(true), Kn(_e, null, zi(t.tableActions, (w) => (_t(), Kn("div", { class: "action", onClick: (P) => w.click(t.data) }, [ru(C.$slots, "table-action", tu(fl({ action: w, data: t.data })), () => [as("i", { class: an(w.icon) }, null, 2), as("span", Dt, Co(w.name), 1)], true)], 8, kt))), 256))])], true)]), as("table", { class: an(Ve(_)) }, [as("thead", Ct, [as("tr", wt, [ru(C.$slots, "header-row", tu(fl({ headers: t.headers, actions: t.actions })), () => [(_t(true), Kn(_e, null, zi(t.headers, (w, P) => (_t(), Kn("th", Vt, [ru(C.$slots, "header-col", tu(fl({ header: w, i: P })), () => [no(Co(w.label), 1)], true)]))), 256)), t.actions.length > 0 ? (_t(), Kn("th", St, [ru(C.$slots, "header-actions", tu(fl({ actions: t.actions })), void 0, true)])) : iu("", true)], true)]), Ve(V) ? (_t(), Kn("tr", It, [ru(C.$slots, "progress-bar", tu(fl({ headers: t.headers, actions: t.actions, span: Ve($2) })), () => [as("th", { colspan: Ve($2) }, [re(Z)], 8, xt)], true)])) : iu("", true)]), as("tbody", Mt, [Ve(V) ? iu("", true) : (_t(true), Kn(_e, { key: 0 }, zi(Ve(x), (w, P) => (_t(), Kn("tr", Bt, [ru(C.$slots, "data-row", tu(fl({ headers: t.headers, row: w, actions: t.actions, i: P })), () => [ru(C.$slots, "data-content", tu(fl({ headers: t.headers, row: w, i: P })), () => [(_t(true), Kn(_e, null, zi(t.headers, (j) => (_t(), Kn("td", Ot, [ru(C.$slots, "data-col", tu(fl({ header: j, row: w, i: P })), () => [no(Co(w[j.key]), 1)], true)]))), 256))], true), t.actions.length > 0 ? (_t(), Kn("td", Lt, [ru(C.$slots, "data-actions", tu(fl({ row: w, actions: t.actions, i: P })), () => [as("div", Rt, [(_t(true), Kn(_e, null, zi(t.actions, (j) => (_t(), Kn("div", { class: "action", onClick: (te) => j.click(w, P) }, [ru(C.$slots, "data-action", tu(fl({ row: w, action: j, i: P })), () => [as("i", { class: an(j.icon) }, null, 2), as("span", At, Co(j.name), 1)], true)], 8, zt))), 256))])], true)])) : iu("", true)], true)]))), 256))])], 2), as("div", Ft, [ru(C.$slots, "pagination", tu(fl({ pageLeft: T, pageRight: R, start: Ve(v).start, end: Ve(v).end, total: Ve(h) })), () => [as("div", { class: an(Ve(L)), onClick: Y[0] || (Y[0] = (w) => T()) }, [ru(C.$slots, "pager-left", {}, () => [Nt], true)], 2), as("div", Pt, [ru(C.$slots, "page-number", tu(fl({ start: Ve(v).start, end: Ve(v).end, total: Ve(h) })), () => [Ve(v).start !== Ve(v).end ? (_t(), Kn("span", Ut, Co(Ve(v).start) + " - ", 1)) : iu("", true), as("span", Wt, Co(Ve(v).end), 1), no(" / " + Co(Ve(h)), 1)], true)]), as("div", { class: an(Ve(y)), onClick: Y[1] || (Y[1] = (w) => R()) }, [ru(C.$slots, "pager-right", {}, () => [Yt], true)], 2)], true)])]));
      } };
      K = qc(jt, [["__scopeId", "data-v-c84e9478"]]);
      X = (t) => (nu("data-v-001e44f0"), t = t(), su(), t);
      qt = X(() => as("h1", null, "Demo Form Elements", -1));
      Et = { class: "form-container" };
      Jt = { class: "form" };
      Ht = { class: "progress-bars" };
      Gt = ou('<div class="tags" data-v-001e44f0><div class="tag" data-v-001e44f0><div class="category" data-v-001e44f0>tag</div><div class="divider" data-v-001e44f0>:</div><div class="name" data-v-001e44f0>default</div></div><div class="tag sm" data-v-001e44f0><div class="category" data-v-001e44f0>tag</div><div class="divider" data-v-001e44f0>:</div><div class="name" data-v-001e44f0>small</div></div><div class="tag md" data-v-001e44f0><div class="category" data-v-001e44f0>tag</div><div class="divider" data-v-001e44f0>:</div><div class="name" data-v-001e44f0>medium</div></div><div class="tag lg" data-v-001e44f0><div class="category" data-v-001e44f0>tag</div><div class="divider" data-v-001e44f0>:</div><div class="name" data-v-001e44f0>large</div></div></div>', 1);
      Kt = { class: "hyperlink" };
      Qt = { class: "hyperlink" };
      Xt = { class: "data-row" };
      Zt = { class: "data-col" };
      ea = { class: "date-range" };
      ta = X(() => as("div", { class: "to" }, "to", -1));
      aa = ["colspan"];
      la = X(() => as("th", { style: { width: "30px" }, class: "col" }, " # ", -1));
      sa = { class: "col" };
      na = { class: "col" };
      oa = { key: 0 };
      ia = { class: "col" };
      da = { class: "col" };
      ra = { key: 0, class: "col" };
      ua = { class: "data-actions" };
      ca = ["onClick"];
      va = ["onClick"];
      ma = { class: "page-number" };
      fa = ["onClick"];
      pa = { class: "data-action" };
      ga = X(() => as("i", { class: "fa-solid fa-circle-arrow-left" }, null, -1));
      ha = X(() => as("i", { class: "fa-solid fa-circle-arrow-right" }, null, -1));
      _a = { class: "result" };
      ya = X(() => as("h2", null, "Output", -1));
      ba = { __name: "DemoForm", setup(t) {
        const n = di({ username: "", name: "", description: "", password: "", country1: "", country2: "", country3: "", subscribe: false, agree: false, startDate: null, endDate: null, dateRange: { start: null, end: null } }), o = di([{ value: "sg", label: "Singapore" }, { value: "my", label: "Malaysia" }, { value: "th", label: "Thailand" }, { value: "vn", label: "Vietnam" }]), a = di({ headers: [{ key: "startTime", label: "Start Time" }, { key: "endTime", label: "End Time" }, { key: "description", label: "Description" }], data: [{ startTime: "2023-01-23 12:42:14", endTime: "2023-01-23 18:34:29", description: "Requirements" }, { startTime: "2023-01-24 08:23:57", endTime: "2023-01-24 16:27:18", description: "Implementation" }, { startTime: "2023-01-25 10:32:19", endTime: "2023-01-25 12:23:53", description: "Documentation" }, { startTime: "2023-01-25 13:32:58", endTime: "2023-01-25 19:28:43", description: "Implementation" }, { startTime: "2023-01-26 17:28:47", endTime: "2023-01-26 22:13:02", description: "Testing" }, { startTime: "2023-01-27 09:31:48", endTime: null, description: "Implemention" }], tableActions: [{ name: "Add", icon: "fa-solid fa-circle-plus fa-xl", click: function(f) {
          alert(`Adding data to count: ${f.length}`);
        } }, { name: "Export", icon: "fa-solid fa-file-arrow-down fa-xl", click: function(f) {
          alert(`Export data count: ${f.length}`);
        } }], actions: [{ name: "View", icon: "fa-solid fa-magnifying-glass", click: function(f, i) {
          ie2(f, i);
        } }, { name: "Edit", icon: "fa-solid fa-pen-to-square", click: function(f, i) {
          alert(`Row[${i}]: editing ${JSON.stringify(f)}`);
        } }, { name: "Delete", icon: "fa-solid fa-trash-can", click: function(f, i) {
          alert(`Row[${i}]: deleting ${JSON.stringify(f)}`);
        } }] }), c = di({ headers: [{ key: "startTime", label: "Start Time" }, { key: "endTime", label: "End Time" }, { key: "description", label: "Description" }], data: [{ startTime: "2023-01-23 12:42:14", endTime: "2023-01-23 18:34:29", description: "Requirements" }, { startTime: "2023-01-24 08:23:57", endTime: "2023-01-24 16:27:18", description: "Implementation" }, { startTime: "2023-01-25 10:32:19", endTime: "2023-01-25 12:23:53", description: "Documentation" }, { startTime: "2023-01-25 13:32:58", endTime: "2023-01-25 19:28:43", description: "Implementation" }, { startTime: "2023-01-26 17:28:47", endTime: "2023-01-26 22:13:02", description: "Testing" }, { startTime: "2023-01-23 12:42:14", endTime: "2023-01-23 18:34:29", description: "Requirements" }, { startTime: "2023-01-24 08:23:57", endTime: "2023-01-24 16:27:18", description: "Implementation" }, { startTime: "2023-01-25 10:32:19", endTime: "2023-01-25 12:23:53", description: "Documentation" }, { startTime: "2023-01-25 13:32:58", endTime: "2023-01-25 19:28:43", description: "Implementation" }, { startTime: "2023-01-26 17:28:47", endTime: "2023-01-26 22:13:02", description: "Testing" }, { startTime: "2023-01-23 12:42:14", endTime: "2023-01-23 18:34:29", description: "Requirements" }, { startTime: "2023-01-24 08:23:57", endTime: "2023-01-24 16:27:18", description: "Implementation" }, { startTime: "2023-01-25 10:32:19", endTime: "2023-01-25 12:23:53", description: "Documentation" }, { startTime: "2023-01-25 13:32:58", endTime: "2023-01-25 19:28:43", description: "Implementation" }, { startTime: "2023-01-26 17:28:47", endTime: "2023-01-26 22:13:02", description: "Testing" }, { startTime: "2023-01-23 12:42:14", endTime: "2023-01-23 18:34:29", description: "Requirements" }, { startTime: "2023-01-24 08:23:57", endTime: "2023-01-24 16:27:18", description: "Implementation" }, { startTime: "2023-01-25 10:32:19", endTime: "2023-01-25 12:23:53", description: "Documentation" }, { startTime: "2023-01-25 13:32:58", endTime: "2023-01-25 19:28:43", description: "Implementation" }, { startTime: "2023-01-26 17:28:47", endTime: "2023-01-26 22:13:02", description: "Testing" }, { startTime: "2023-01-23 12:42:14", endTime: "2023-01-23 18:34:29", description: "Requirements" }, { startTime: "2023-01-24 08:23:57", endTime: "2023-01-24 16:27:18", description: "Implementation" }, { startTime: "2023-01-25 10:32:19", endTime: "2023-01-25 12:23:53", description: "Documentation" }, { startTime: "2023-01-25 13:32:58", endTime: "2023-01-25 19:28:43", description: "Implementation" }, { startTime: "2023-01-26 17:28:47", endTime: "2023-01-26 22:13:02", description: "Testing" }, { startTime: "2023-01-27 09:31:48", endTime: null, description: "Implemention" }] }), V = { async fetch(f, i) {
          return new Promise((s) => {
            setTimeout(() => {
              const S = c.value.data.slice(f, i + f);
              s({ data: S, total: c.value.length });
            }, 500);
          });
        } }, $2 = di(0), M = di(3), _ = di([]), h = di(true), x = di(false), v = di(false), L = di(), y = di(), T = ye(() => `View row ${y.value + 1}`);
        function R() {
          h.value = true, V.fetch($2.value, M.value).then(({ data: f, total: i }) => {
            _.value = f, h.value = false;
          });
        }
        function C(f) {
          alert(f);
        }
        function Y(f) {
          $2.value = f;
        }
        function w(f) {
          Y(f), R();
        }
        function P() {
          x.value = true;
        }
        function j(f) {
          alert(`confirm ${f}`);
        }
        function te(f) {
          alert(`cancel ${f}`);
        }
        function ie2(f, i) {
          v.value = true, L.value = f, y.value = i;
        }
        return Li(() => {
          w(0);
        }), (f, i) => (_t(), Kn(_e, null, [qt, as("div", Et, [as("div", Jt, [as("div", Ht, [re(Ve(Z)), re(Ve(Z), { speed: 500, bidirection: false }), re(Ve(Z), { speed: 500, bidirection: false, indefinite: false })]), Gt, as("div", Kt, [as("a", { href: "#", onClick: i[0] || (i[0] = (s) => P()) }, "This is a Hyperlink to open Confirm Dialog"), re(Ve(Se), { title: "Delete Chart", "primary-text": "Are you sure you want to delete this chart?", "secondary-text": "Monthly working hours by company (2023)", modelValue: x.value, "onUpdate:modelValue": i[1] || (i[1] = (s) => x.value = s), height: 300, width: 500, onConfirm: i[2] || (i[2] = (s) => j("delete chart")), onCancel: i[3] || (i[3] = (s) => te("delete chart")) }, null, 8, ["modelValue"])]), as("div", Qt, [re(Ve(ve), { modelValue: v.value, "onUpdate:modelValue": i[4] || (i[4] = (s) => v.value = s), title: Ve(T) }, { body: Hr(() => [as("div", Xt, [(_t(true), Kn(_e, null, zi(L.value, (s) => (_t(), Kn("div", Zt, Co(s), 1))), 256))])]), _: 1 }, 8, ["modelValue", "title"])]), re(Ve(se), { modelValue: n.value.username, "onUpdate:modelValue": i[5] || (i[5] = (s) => n.value.username = s), type: "text", label: "Username" }, null, 8, ["modelValue"]), re(Ve(se), { modelValue: n.value.name, "onUpdate:modelValue": i[6] || (i[6] = (s) => n.value.name = s), type: "text", size: "md", label: "Name" }, null, 8, ["modelValue"]), re(Ve(se), { modelValue: n.value.description, "onUpdate:modelValue": i[7] || (i[7] = (s) => n.value.description = s), type: "text", size: "lg", label: "Description" }, null, 8, ["modelValue"]), re(Ve(se), { modelValue: n.value.password, "onUpdate:modelValue": i[8] || (i[8] = (s) => n.value.password = s), type: "password", label: "Password", "error-message": "Min 8 characters" }, null, 8, ["modelValue"]), re(Ve(ee), { "button-type": "text", value: "Very Long Button", icon: "fa-sharp fa-solid fa-circle-down", onClick: i[9] || (i[9] = (s) => C("Hello World!")) }), re(Ve(ee), { "button-type": "text", size: "lg", value: "Very Long Long Button with Icon", icon: "fa-sharp fa-solid fa-circle-down" }), re(Ve(ee), { "button-type": "icon", icon: "fa-sharp fa-solid fa-circle-down" }), re(Ve(de), { modelValue: n.value.country1, "onUpdate:modelValue": i[10] || (i[10] = (s) => n.value.country1 = s), label: "Country", name: "country", id: "country-1", options: o.value }, null, 8, ["modelValue", "options"]), re(Ve(de), { modelValue: n.value.country2, "onUpdate:modelValue": i[11] || (i[11] = (s) => n.value.country2 = s), size: "sm", label: "Country", name: "country", id: "country-2", options: o.value }, null, 8, ["modelValue", "options"]), re(Ve(de), { modelValue: n.value.country3, "onUpdate:modelValue": i[12] || (i[12] = (s) => n.value.country3 = s), size: "lg", label: "Country", name: "country", id: "country-3", options: o.value, "error-message": "Min 8 characters" }, null, 8, ["modelValue", "options"]), re(Ve(ue), { modelValue: n.value.subscribe, "onUpdate:modelValue": i[13] || (i[13] = (s) => n.value.subscribe = s), label: "Subscribe newsletter" }, null, 8, ["modelValue"]), re(Ve(ue), { modelValue: n.value.agree, "onUpdate:modelValue": i[14] || (i[14] = (s) => n.value.agree = s), label: "Agree T&C", "error-message": "Required!" }, null, 8, ["modelValue"]), re(Ve(le2), { modelValue: n.value.startDate, "onUpdate:modelValue": i[15] || (i[15] = (s) => n.value.startDate = s), label: "Start Date" }, null, 8, ["modelValue"]), re(Ve(le2), { modelValue: n.value.endDate, "onUpdate:modelValue": i[16] || (i[16] = (s) => n.value.endDate = s), label: "End Date", "error-message": "Cannot be earlier than start date!" }, null, 8, ["modelValue"]), as("div", ea, [re(Ve(le2), { modelValue: n.value.dateRange.start, "onUpdate:modelValue": i[17] || (i[17] = (s) => n.value.dateRange.start = s), label: "Start Date" }, null, 8, ["modelValue"]), ta, re(Ve(le2), { modelValue: n.value.dateRange.end, "onUpdate:modelValue": i[18] || (i[18] = (s) => n.value.dateRange.end = s), label: "End Date", "error-message": "Cannot be earlier than start date!" }, null, 8, ["modelValue"])]), re(Ve(K), { headers: a.value.headers, data: a.value.data }, null, 8, ["headers", "data"]), re(Ve(K), { name: "Work Logs", headers: a.value.headers, data: a.value.data, actions: a.value.actions, "table-actions": a.value.tableActions, onOffsetChange: Y }, null, 8, ["headers", "data", "actions", "table-actions"]), re(Ve(K), { name: "Work Logs (out of bound)", headers: a.value.headers, data: a.value.data, pagination: { limit: 3, client: true } }, null, 8, ["headers", "data"]), re(Ve(K), { name: "Work Logs (server pagination)", loading: h.value, headers: c.value.headers, data: _.value, pagination: { limit: 3, client: false }, "total-data": c.value.data.length, onOffsetChange: w }, null, 8, ["loading", "headers", "data", "total-data"]), re(Ve(K), { name: "Work Logs (server pagination custom loading bar)", loading: h.value, headers: c.value.headers, data: _.value, pagination: { limit: 3, client: false }, "total-data": c.value.data.length, onOffsetChange: w }, { "progress-bar": Hr(({ headers: s, actions: S, span: z2 }) => [as("th", { colspan: z2 }, [re(Ve(Z), { speed: 100, bidrection: false })], 8, aa)]), _: 1 }, 8, ["loading", "headers", "data", "total-data"]), re(Ve(K), { name: "Work Logs (custom templates)", headers: a.value.headers, data: a.value.data, actions: a.value.actions, "table-actions": a.value.tableActions, onOffsetChange: Y }, { "table-name": Hr(({ name: s }) => [no(" Table: " + Co(s), 1)]), "table-action": Hr(({ action: s, data: S }) => [no(Co(s.name), 1)]), "header-row": Hr(({ headers: s, actions: S }) => [la, (_t(true), Kn(_e, null, zi(s, (z2, G) => (_t(), Kn("th", sa, Co(z2.label), 1))), 256)), as("th", na, [S.length === 0 ? (_t(), Kn("span", oa, " No action ")) : iu("", true)])]), "data-row": Hr(({ headers: s, row: S, actions: z2, i: G }) => [as("td", ia, Co(G + 1), 1), (_t(true), Kn(_e, null, zi(s, (E) => (_t(), Kn("td", da, Co(S[E.key]), 1))), 256)), z2.length > 0 ? (_t(), Kn("td", ra, [as("div", ua, [(_t(true), Kn(_e, null, zi(z2, (E) => (_t(), Kn("div", { class: "data-action", onClick: (ae) => E.click(S, G) }, Co(E.name), 9, ca))), 256))])])) : iu("", true)]), pagination: Hr(({ pageLeft: s, pageRight: S, start: z2, end: G, total: E }) => [as("div", { class: "pager-left", onClick: (ae) => s() }, " Left ", 8, va), as("div", ma, Co(z2) + " - " + Co(G) + " of " + Co(E), 1), as("div", { class: "pager-right", onClick: (ae) => S() }, " Right ", 8, fa)]), _: 1 }, 8, ["headers", "data", "actions", "table-actions"]), re(Ve(K), { name: "Work Logs (custom templates 2)", headers: a.value.headers, data: a.value.data, actions: a.value.actions, "table-actions": a.value.tableActions, onOffsetChange: Y }, { "table-name": Hr(({ name: s }) => [no(" Table: " + Co(s), 1)]), "table-action": Hr(({ action: s, data: S }) => [no(Co(s.name), 1)]), "header-col": Hr(({ header: s, i: S }) => [no(Co(S) + " | " + Co(s.label), 1)]), "header-actions": Hr(({ actions: s }) => [no(" No action ")]), "data-col": Hr(({ header: s, row: S, i: z2 }) => [no(Co(z2) + " | " + Co(S[s.key]), 1)]), "data-action": Hr(({ row: s, action: S, i: z2 }) => [as("div", pa, Co(S.name), 1)]), "pager-left": Hr(() => [ga]), "page-number": Hr(({ start: s, end: S, total: z2 }) => [no(Co(s) + " - " + Co(S) + " of " + Co(z2), 1)]), "pager-right": Hr(() => [ha]), _: 1 }, 8, ["headers", "data", "actions", "table-actions"])]), as("div", _a, [ya, (_t(true), Kn(_e, null, zi(Object.keys(n.value), (s) => (_t(), Kn("div", null, Co(s) + ": " + Co(n.value[s]), 1))), 256))])])], 64));
      } };
      Ta = qc(ba, [["__scopeId", "data-v-001e44f0"]]);
    }
  });

  // tmp/assets/index-2b14c3c3.js
  function Qn(e, t) {
    const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
    for (let r = 0; r < s.length; r++)
      n[s[r]] = true;
    return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
  }
  function fn(e) {
    if ($(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const s = e[n], r = ne(s) ? Ro(s) : fn(s);
        if (r)
          for (const o in r)
            t[o] = r[o];
      }
      return t;
    } else {
      if (ne(e))
        return e;
      if (Z2(e))
        return e;
    }
  }
  function Ro(e) {
    const t = {};
    return e.replace(wo, "").split(vo).forEach((n) => {
      if (n) {
        const s = n.split(xo);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }), t;
  }
  function an(e) {
    let t = "";
    if (ne(e))
      t = e;
    else if ($(e))
      for (let n = 0; n < e.length; n++) {
        const s = an(e[n]);
        s && (t += s + " ");
      }
    else if (Z2(e))
      for (const n in e)
        e[n] && (t += n + " ");
    return t.trim();
  }
  function tu(e) {
    if (!e)
      return null;
    let { class: t, style: n } = e;
    return t && !ne(t) && (e.class = an(t)), n && (e.style = fn(n)), e;
  }
  function lr(e) {
    return !!e || e === "";
  }
  function jo(e, t = xe2) {
    t && t.active && t.effects.push(e);
  }
  function Ho() {
    return xe2;
  }
  function bs(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++)
        t[n].delete(e);
      t.length = 0;
    }
  }
  function Pt2() {
    gr.push(qe2), qe2 = false;
  }
  function Ot2() {
    const e = gr.pop();
    qe2 = e === void 0 ? true : e;
  }
  function pe(e, t, n) {
    if (qe2 && we2) {
      let s = Nn.get(e);
      s || Nn.set(e, s = /* @__PURE__ */ new Map());
      let r = s.get(n);
      r || s.set(n, r = Gn()), _r(r);
    }
  }
  function _r(e, t) {
    let n = false;
    Mt2 <= Fn ? mr(e) || (e.n |= Ye2, n = !pr(e)) : n = !e.has(we2), n && (e.add(we2), we2.deps.push(e));
  }
  function De2(e, t, n, s, r, o) {
    const i = Nn.get(e);
    if (!i)
      return;
    let l = [];
    if (t === "clear")
      l = [...i.values()];
    else if (n === "length" && $(e)) {
      const u = Number(s);
      i.forEach((d, f) => {
        (f === "length" || f >= u) && l.push(d);
      });
    } else
      switch (n !== void 0 && l.push(i.get(n)), t) {
        case "add":
          $(e) ? Zn(n) && l.push(i.get("length")) : (l.push(i.get(rt2)), pt2(e) && l.push(i.get(Ln)));
          break;
        case "delete":
          $(e) || (l.push(i.get(rt2)), pt2(e) && l.push(i.get(Ln)));
          break;
        case "set":
          pt2(e) && l.push(i.get(rt2));
          break;
      }
    if (l.length === 1)
      l[0] && $n(l[0]);
    else {
      const u = [];
      for (const d of l)
        d && u.push(...d);
      $n(Gn(u));
    }
  }
  function $n(e, t) {
    const n = $(e) ? e : [...e];
    for (const s of n)
      s.computed && Es(s);
    for (const s of n)
      s.computed || Es(s);
  }
  function Es(e, t) {
    (e !== we2 || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
  }
  function Wo() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function(...n) {
        const s = z(this);
        for (let o = 0, i = this.length; o < i; o++)
          pe(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === false ? s[t](...n.map(z)) : r;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function(...n) {
        Pt2();
        const s = z(this)[t].apply(this, n);
        return Ot2(), s;
      };
    }), e;
  }
  function qo(e) {
    const t = z(this);
    return pe(t, "has", e), t.hasOwnProperty(e);
  }
  function ts(e = false, t = false) {
    return function(s, r, o) {
      if (r === "__v_isReactive")
        return !e;
      if (r === "__v_isReadonly")
        return e;
      if (r === "__v_isShallow")
        return t;
      if (r === "__v_raw" && o === (e ? t ? ci : wr : t ? xr : vr).get(s))
        return s;
      const i = $(s);
      if (!e) {
        if (i && K2(vs, r))
          return Reflect.get(vs, r, o);
        if (r === "hasOwnProperty")
          return qo;
      }
      const l = Reflect.get(s, r, o);
      return (Xn(r) ? yr.has(r) : ko(r)) || (e || pe(s, "get", r), t) ? l : le(l) ? i && Zn(r) ? l : l.value : Z2(l) ? e ? Rr(l) : Ct2(l) : l;
    };
  }
  function br(e = false) {
    return function(n, s, r, o) {
      let i = n[s];
      if (bt2(i) && le(i) && !le(r))
        return false;
      if (!e && (!rn(r) && !bt2(r) && (i = z(i), r = z(r)), !$(n) && le(i) && !le(r)))
        return i.value = r, true;
      const l = $(n) && Zn(s) ? Number(s) < n.length : K2(n, s), u = Reflect.set(n, s, r, o);
      return n === z(o) && (l ? Ht2(r, i) && De2(n, "set", s, r) : De2(n, "add", s, r)), u;
    };
  }
  function Yo(e, t) {
    const n = K2(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && De2(e, "delete", t, void 0), s;
  }
  function Jo(e, t) {
    const n = Reflect.has(e, t);
    return (!Xn(t) || !yr.has(t)) && pe(e, "has", t), n;
  }
  function Xo(e) {
    return pe(e, "iterate", $(e) ? "length" : rt2), Reflect.ownKeys(e);
  }
  function qt2(e, t, n = false, s = false) {
    e = e.__v_raw;
    const r = z(e), o = z(t);
    n || (t !== o && pe(r, "get", t), pe(r, "get", o));
    const { has: i } = mn(r), l = s ? ns : n ? os : Dt2;
    if (i.call(r, t))
      return l(e.get(t));
    if (i.call(r, o))
      return l(e.get(o));
    e !== r && e.get(t);
  }
  function Vt2(e, t = false) {
    const n = this.__v_raw, s = z(n), r = z(e);
    return t || (e !== r && pe(s, "has", e), pe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
  }
  function Qt2(e, t = false) {
    return e = e.__v_raw, !t && pe(z(e), "iterate", rt2), Reflect.get(e, "size", e);
  }
  function xs(e) {
    e = z(e);
    const t = z(this);
    return mn(t).has.call(t, e) || (t.add(e), De2(t, "add", e, e)), this;
  }
  function ws(e, t) {
    t = z(t);
    const n = z(this), { has: s, get: r } = mn(n);
    let o = s.call(n, e);
    o || (e = z(e), o = s.call(n, e));
    const i = r.call(n, e);
    return n.set(e, t), o ? Ht2(t, i) && De2(n, "set", e, t) : De2(n, "add", e, t), this;
  }
  function Rs(e) {
    const t = z(this), { has: n, get: s } = mn(t);
    let r = n.call(t, e);
    r || (e = z(e), r = n.call(t, e)), s && s.call(t, e);
    const o = t.delete(e);
    return r && De2(t, "delete", e, void 0), o;
  }
  function Ps() {
    const e = z(this), t = e.size !== 0, n = e.clear();
    return t && De2(e, "clear", void 0, void 0), n;
  }
  function Yt2(e, t) {
    return function(s, r) {
      const o = this, i = o.__v_raw, l = z(i), u = t ? ns : e ? os : Dt2;
      return !e && pe(l, "iterate", rt2), i.forEach((d, f) => s.call(r, u(d), u(f), o));
    };
  }
  function Jt2(e, t, n) {
    return function(...s) {
      const r = this.__v_raw, o = z(r), i = pt2(o), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = r[e](...s), f = n ? ns : t ? os : Dt2;
      return !t && pe(o, "iterate", u ? Ln : rt2), { next() {
        const { value: h, done: p } = d.next();
        return p ? { value: h, done: p } : { value: l ? [f(h[0]), f(h[1])] : f(h), done: p };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }
  function Ue2(e) {
    return function(...t) {
      return e === "delete" ? false : this;
    };
  }
  function ei() {
    const e = { get(o) {
      return qt2(this, o);
    }, get size() {
      return Qt2(this);
    }, has: Vt2, add: xs, set: ws, delete: Rs, clear: Ps, forEach: Yt2(false, false) }, t = { get(o) {
      return qt2(this, o, false, true);
    }, get size() {
      return Qt2(this);
    }, has: Vt2, add: xs, set: ws, delete: Rs, clear: Ps, forEach: Yt2(false, true) }, n = { get(o) {
      return qt2(this, o, true);
    }, get size() {
      return Qt2(this, true);
    }, has(o) {
      return Vt2.call(this, o, true);
    }, add: Ue2("add"), set: Ue2("set"), delete: Ue2("delete"), clear: Ue2("clear"), forEach: Yt2(true, false) }, s = { get(o) {
      return qt2(this, o, true, true);
    }, get size() {
      return Qt2(this, true);
    }, has(o) {
      return Vt2.call(this, o, true);
    }, add: Ue2("add"), set: Ue2("set"), delete: Ue2("delete"), clear: Ue2("clear"), forEach: Yt2(true, true) };
    return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      e[o] = Jt2(o, false, false), n[o] = Jt2(o, true, false), t[o] = Jt2(o, false, true), s[o] = Jt2(o, true, true);
    }), [e, n, t, s];
  }
  function ss(e, t) {
    const n = t ? e ? ri : si : e ? ni : ti;
    return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(K2(n, r) && r in s ? n : s, r, o);
  }
  function ui(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function fi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ui(So(e));
  }
  function Ct2(e) {
    return bt2(e) ? e : rs(e, false, Er, oi, vr);
  }
  function ai(e) {
    return rs(e, false, Go, ii, xr);
  }
  function Rr(e) {
    return rs(e, true, Zo, li, wr);
  }
  function rs(e, t, n, s, r) {
    if (!Z2(e) || e.__v_raw && !(t && e.__v_isReactive))
      return e;
    const o = r.get(e);
    if (o)
      return o;
    const i = fi(e);
    if (i === 0)
      return e;
    const l = new Proxy(e, i === 2 ? s : n);
    return r.set(e, l), l;
  }
  function mt2(e) {
    return bt2(e) ? mt2(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function bt2(e) {
    return !!(e && e.__v_isReadonly);
  }
  function rn(e) {
    return !!(e && e.__v_isShallow);
  }
  function Pr(e) {
    return mt2(e) || bt2(e);
  }
  function z(e) {
    const t = e && e.__v_raw;
    return t ? z(t) : e;
  }
  function Or(e) {
    return sn(e, "__v_skip", true), e;
  }
  function Cr(e) {
    qe2 && we2 && (e = z(e), _r(e.dep || (e.dep = Gn())));
  }
  function Ar(e, t) {
    e = z(e);
    const n = e.dep;
    n && $n(n);
  }
  function le(e) {
    return !!(e && e.__v_isRef === true);
  }
  function di(e) {
    return Tr(e, false);
  }
  function hi(e) {
    return Tr(e, true);
  }
  function Tr(e, t) {
    return le(e) ? e : new pi(e, t);
  }
  function Ve(e) {
    return le(e) ? e.value : e;
  }
  function Ir(e) {
    return mt2(e) ? e : new Proxy(e, mi);
  }
  function _i(e, t, n = false) {
    let s, r;
    const o = D(e);
    return o ? (s = e, r = Pe2) : (s = e.get, r = e.set), new gi(s, r, o || !r, n);
  }
  function Qe2(e, t, n, s) {
    let r;
    try {
      r = s ? e(...s) : e();
    } catch (o) {
      gn(o, t, n);
    }
    return r;
  }
  function Oe2(e, t, n, s) {
    if (D(e)) {
      const o = Qe2(e, t, n, s);
      return o && fr(o) && o.catch((i) => {
        gn(i, t, n);
      }), o;
    }
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Oe2(e[o], t, n, s));
    return r;
  }
  function gn(e, t, n, s = true) {
    const r = t ? t.vnode : null;
    if (t) {
      let o = t.parent;
      const i = t.proxy, l = n;
      for (; o; ) {
        const d = o.ec;
        if (d) {
          for (let f = 0; f < d.length; f++)
            if (d[f](e, i, l) === false)
              return;
        }
        o = o.parent;
      }
      const u = t.appContext.config.errorHandler;
      if (u) {
        Qe2(u, null, 10, [e, i, l]);
        return;
      }
    }
    yi(e, n, r, s);
  }
  function yi(e, t, n, s = true) {
    console.error(e);
  }
  function Nr(e) {
    const t = is || Mr;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function bi(e) {
    let t = Fe2 + 1, n = ie.length;
    for (; t < n; ) {
      const s = t + n >>> 1;
      kt2(ie[s]) < e ? t = s + 1 : n = s;
    }
    return t;
  }
  function ls(e) {
    (!ie.length || !ie.includes(e, Bt2 && e.allowRecurse ? Fe2 + 1 : Fe2)) && (e.id == null ? ie.push(e) : ie.splice(bi(e.id), 0, e), Fr());
  }
  function Fr() {
    !Bt2 && !jn && (jn = true, is = Mr.then($r));
  }
  function Ei(e) {
    const t = ie.indexOf(e);
    t > Fe2 && ie.splice(t, 1);
  }
  function vi(e) {
    $(e) ? gt2.push(...e) : (!He2 || !He2.includes(e, e.allowRecurse ? nt2 + 1 : nt2)) && gt2.push(e), Fr();
  }
  function Os(e, t = Bt2 ? Fe2 + 1 : 0) {
    for (; t < ie.length; t++) {
      const n = ie[t];
      n && n.pre && (ie.splice(t, 1), t--, n());
    }
  }
  function Lr(e) {
    if (gt2.length) {
      const t = [...new Set(gt2)];
      if (gt2.length = 0, He2) {
        He2.push(...t);
        return;
      }
      for (He2 = t, He2.sort((n, s) => kt2(n) - kt2(s)), nt2 = 0; nt2 < He2.length; nt2++)
        He2[nt2]();
      He2 = null, nt2 = 0;
    }
  }
  function $r(e) {
    jn = false, Bt2 = true, ie.sort(xi);
    const t = Pe2;
    try {
      for (Fe2 = 0; Fe2 < ie.length; Fe2++) {
        const n = ie[Fe2];
        n && n.active !== false && Qe2(n, null, 14);
      }
    } finally {
      Fe2 = 0, ie.length = 0, Lr(), Bt2 = false, is = null, (ie.length || gt2.length) && $r();
    }
  }
  function wi(e, t, ...n) {
    if (e.isUnmounted)
      return;
    const s = e.vnode.props || X2;
    let r = n;
    const o = t.startsWith("update:"), i = o && t.slice(7);
    if (i && i in s) {
      const f = `${i === "modelValue" ? "model" : i}Modifiers`, { number: h, trim: p } = s[f] || X2;
      p && (r = n.map((E) => ne(E) ? E.trim() : E)), h && (r = n.map(Fo));
    }
    let l, u = s[l = Rn(t)] || s[l = Rn(yt2(t))];
    !u && o && (u = s[l = Rn(Rt2(t))]), u && Oe2(u, e, 6, r);
    const d = s[l + "Once"];
    if (d) {
      if (!e.emitted)
        e.emitted = {};
      else if (e.emitted[l])
        return;
      e.emitted[l] = true, Oe2(d, e, 6, r);
    }
  }
  function jr(e, t, n = false) {
    const s = t.emitsCache, r = s.get(e);
    if (r !== void 0)
      return r;
    const o = e.emits;
    let i = {}, l = false;
    if (!D(e)) {
      const u = (d) => {
        const f = jr(d, t, true);
        f && (l = true, fe(i, f));
      };
      !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
    }
    return !o && !l ? (Z2(e) && s.set(e, null), null) : ($(o) ? o.forEach((u) => i[u] = null) : fe(i, o), Z2(e) && s.set(e, i), i);
  }
  function _n(e, t) {
    return !e || !dn(t) ? false : (t = t.slice(2).replace(/Once$/, ""), K2(e, t[0].toLowerCase() + t.slice(1)) || K2(e, Rt2(t)) || K2(e, t));
  }
  function on(e) {
    const t = he2;
    return he2 = e, yn = e && e.type.__scopeId || null, t;
  }
  function nu(e) {
    yn = e;
  }
  function su() {
    yn = null;
  }
  function Hr(e, t = he2, n) {
    if (!t || e._n)
      return e;
    const s = (...r) => {
      s._d && Fs(-1);
      const o = on(t);
      let i;
      try {
        i = e(...r);
      } finally {
        on(o), s._d && Fs(1);
      }
      return i;
    };
    return s._n = true, s._c = true, s._d = true, s;
  }
  function On(e) {
    const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: l, attrs: u, emit: d, render: f, renderCache: h, data: p, setupState: E, ctx: C, inheritAttrs: I } = e;
    let H, T;
    const j = on(e);
    try {
      if (n.shapeFlag & 4) {
        const W = r || s;
        H = Ne2(f.call(W, W, h, o, E, p, C)), T = u;
      } else {
        const W = t;
        H = Ne2(W.length > 1 ? W(o, { attrs: u, slots: l, emit: d }) : W(o, null)), T = t.props ? u : Ri(u);
      }
    } catch (W) {
      Lt2.length = 0, gn(W, e, 1), H = re(Je2);
    }
    let F = H;
    if (T && I !== false) {
      const W = Object.keys(T), { shapeFlag: oe } = F;
      W.length && oe & 7 && (i && W.some(Yn) && (T = Pi(T, i)), F = Et2(F, T));
    }
    return n.dirs && (F = Et2(F), F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs), n.transition && (F.transition = n.transition), H = F, on(j), H;
  }
  function Oi(e, t, n) {
    const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: u } = t, d = o.emitsOptions;
    if (t.dirs || t.transition)
      return true;
    if (n && u >= 0) {
      if (u & 1024)
        return true;
      if (u & 16)
        return s ? Cs(s, i, d) : !!i;
      if (u & 8) {
        const f = t.dynamicProps;
        for (let h = 0; h < f.length; h++) {
          const p = f[h];
          if (i[p] !== s[p] && !_n(d, p))
            return true;
        }
      }
    } else
      return (r || l) && (!l || !l.$stable) ? true : s === i ? false : s ? i ? Cs(s, i, d) : true : !!i;
    return false;
  }
  function Cs(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
      return true;
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      if (t[o] !== e[o] && !_n(n, o))
        return true;
    }
    return false;
  }
  function Ci({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; )
      (e = t.vnode).el = n, t = t.parent;
  }
  function Ti(e, t) {
    t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : vi(e);
  }
  function Gt2(e, t) {
    if (se2) {
      let n = se2.provides;
      const s = se2.parent && se2.parent.provides;
      s === n && (n = se2.provides = Object.create(s)), n[e] = t;
    }
  }
  function Le2(e, t, n = false) {
    const s = se2 || he2;
    if (s) {
      const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
      if (r && e in r)
        return r[e];
      if (arguments.length > 1)
        return n && D(t) ? t.call(s.proxy) : t;
    }
  }
  function en(e, t, n) {
    return Dr(e, t, n);
  }
  function Dr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = X2) {
    const l = Ho() === (se2 == null ? void 0 : se2.scope) ? se2 : null;
    let u, d = false, f = false;
    if (le(e) ? (u = () => e.value, d = rn(e)) : mt2(e) ? (u = () => e, s = true) : $(e) ? (f = true, d = e.some((F) => mt2(F) || rn(F)), u = () => e.map((F) => {
      if (le(F))
        return F.value;
      if (mt2(F))
        return dt2(F);
      if (D(F))
        return Qe2(F, l, 2);
    })) : D(e) ? t ? u = () => Qe2(e, l, 2) : u = () => {
      if (!(l && l.isUnmounted))
        return h && h(), Oe2(e, l, 3, [p]);
    } : u = Pe2, t && s) {
      const F = u;
      u = () => dt2(F());
    }
    let h, p = (F) => {
      h = T.onStop = () => {
        Qe2(F, l, 4);
      };
    }, E;
    if (Kt2)
      if (p = Pe2, t ? n && Oe2(t, l, 3, [u(), f ? [] : void 0, p]) : u(), r === "sync") {
        const F = vl();
        E = F.__watcherHandles || (F.__watcherHandles = []);
      } else
        return Pe2;
    let C = f ? new Array(e.length).fill(Xt2) : Xt2;
    const I = () => {
      if (T.active)
        if (t) {
          const F = T.run();
          (s || d || (f ? F.some((W, oe) => Ht2(W, C[oe])) : Ht2(F, C))) && (h && h(), Oe2(t, l, 3, [F, C === Xt2 ? void 0 : f && C[0] === Xt2 ? [] : C, p]), C = F);
        } else
          T.run();
    };
    I.allowRecurse = !!t;
    let H;
    r === "sync" ? H = I : r === "post" ? H = () => de2(I, l && l.suspense) : (I.pre = true, l && (I.id = l.uid), H = () => ls(I));
    const T = new es(u, H);
    t ? n ? I() : C = T.run() : r === "post" ? de2(T.run.bind(T), l && l.suspense) : T.run();
    const j = () => {
      T.stop(), l && l.scope && Jn(l.scope.effects, T);
    };
    return E && E.push(j), j;
  }
  function Ii(e, t, n) {
    const s = this.proxy, r = ne(e) ? e.includes(".") ? Br(s, e) : () => s[e] : e.bind(s, s);
    let o;
    D(t) ? o = t : (o = t.handler, n = t);
    const i = se2;
    vt2(this);
    const l = Dr(r, o.bind(s), n);
    return i ? vt2(i) : ot2(), l;
  }
  function Br(e, t) {
    const n = t.split(".");
    return () => {
      let s = e;
      for (let r = 0; r < n.length && s; r++)
        s = s[n[r]];
      return s;
    };
  }
  function dt2(e, t) {
    if (!Z2(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
      return e;
    if (t.add(e), le(e))
      dt2(e.value, t);
    else if ($(e))
      for (let n = 0; n < e.length; n++)
        dt2(e[n], t);
    else if (ur(e) || pt2(e))
      e.forEach((n) => {
        dt2(n, t);
      });
    else if (dr(e))
      for (const n in e)
        dt2(e[n], t);
    return e;
  }
  function kr(e) {
    return D(e) ? { setup: e, name: e.name } : e;
  }
  function Si(e, t) {
    Kr(e, "a", t);
  }
  function Mi(e, t) {
    Kr(e, "da", t);
  }
  function Kr(e, t, n = se2) {
    const s = e.__wdc || (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated)
          return;
        r = r.parent;
      }
      return e();
    });
    if (bn(t, s, n), n) {
      let r = n.parent;
      for (; r && r.parent; )
        Ur(r.parent.vnode) && Ni(s, t, n, r), r = r.parent;
    }
  }
  function Ni(e, t, n, s) {
    const r = bn(t, e, s, true);
    zr(() => {
      Jn(s[t], r);
    }, n);
  }
  function bn(e, t, n = se2, s = false) {
    if (n) {
      const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
        if (n.isUnmounted)
          return;
        Pt2(), vt2(n);
        const l = Oe2(t, n, e, i);
        return ot2(), Ot2(), l;
      });
      return s ? r.unshift(o) : r.push(o), o;
    }
  }
  function Ui(e, t = se2) {
    bn("ec", e, t);
  }
  function Ge2(e, t, n, s) {
    const r = e.dirs, o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
      const l = r[i];
      o && (l.oldValue = o[i].value);
      let u = l.dir[s];
      u && (Pt2(), Oe2(u, n, 8, [e.el, l, e, t]), Ot2());
    }
  }
  function zi(e, t, n, s) {
    let r;
    const o = n && n[s];
    if ($(e) || ne(e)) {
      r = new Array(e.length);
      for (let i = 0, l = e.length; i < l; i++)
        r[i] = t(e[i], i, void 0, o && o[i]);
    } else if (typeof e == "number") {
      r = new Array(e);
      for (let i = 0; i < e; i++)
        r[i] = t(i + 1, i, void 0, o && o[i]);
    } else if (Z2(e))
      if (e[Symbol.iterator])
        r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
      else {
        const i = Object.keys(e);
        r = new Array(i.length);
        for (let l = 0, u = i.length; l < u; l++) {
          const d = i[l];
          r[l] = t(e[d], d, l, o && o[l]);
        }
      }
    else
      r = [];
    return n && (n[s] = r), r;
  }
  function ru(e, t, n = {}, s, r) {
    if (he2.isCE || he2.parent && Nt2(he2.parent) && he2.parent.isCE)
      return t !== "default" && (n.name = t), re("slot", n, s && s());
    let o = e[t];
    o && o._c && (o._d = false), _t();
    const i = o && Wr(o(n)), l = fs(_e, { key: n.key || i && i.key || `_${t}` }, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
    return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = true), l;
  }
  function Wr(e) {
    return e.some((t) => cn(t) ? !(t.type === Je2 || t.type === _e && !Wr(t.children)) : true) ? e : null;
  }
  function qi(e) {
    const t = cs(e), n = e.proxy, s = e.ctx;
    Dn = false, t.beforeCreate && As(t.beforeCreate, e, "bc");
    const { data: r, computed: o, methods: i, watch: l, provide: u, inject: d, created: f, beforeMount: h, mounted: p, beforeUpdate: E, updated: C, activated: I, deactivated: H, beforeDestroy: T, beforeUnmount: j, destroyed: F, unmounted: W, render: oe, renderTracked: me2, renderTriggered: Ae2, errorCaptured: $e2, serverPrefetch: it2, expose: Te2, inheritAttrs: ke2, components: Ie2, directives: lt2, filters: Xe2 } = t;
    if (d && Vi(d, s, null, e.appContext.config.unwrapInjectedRef), i)
      for (const Y in i) {
        const V = i[Y];
        D(V) && (s[Y] = V.bind(n));
      }
    if (r) {
      const Y = r.call(n, n);
      Z2(Y) && (e.data = Ct2(Y));
    }
    if (Dn = true, o)
      for (const Y in o) {
        const V = o[Y], be2 = D(V) ? V.bind(n, n) : D(V.get) ? V.get.bind(n, n) : Pe2, Ze2 = !D(V) && D(V.set) ? V.set.bind(n) : Pe2, Ee2 = ye({ get: be2, set: Ze2 });
        Object.defineProperty(s, Y, { enumerable: true, configurable: true, get: () => Ee2.value, set: (ae) => Ee2.value = ae });
      }
    if (l)
      for (const Y in l)
        qr(l[Y], s, n, Y);
    if (u) {
      const Y = D(u) ? u.call(n) : u;
      Reflect.ownKeys(Y).forEach((V) => {
        Gt2(V, Y[V]);
      });
    }
    f && As(f, e, "c");
    function ee2(Y, V) {
      $(V) ? V.forEach((be2) => Y(be2.bind(n))) : V && Y(V.bind(n));
    }
    if (ee2(Fi, h), ee2(Li, p), ee2($i, E), ee2(ji, C), ee2(Si, I), ee2(Mi, H), ee2(Ui, $e2), ee2(ki, me2), ee2(Bi, Ae2), ee2(Hi, j), ee2(zr, W), ee2(Di, it2), $(Te2))
      if (Te2.length) {
        const Y = e.exposed || (e.exposed = {});
        Te2.forEach((V) => {
          Object.defineProperty(Y, V, { get: () => n[V], set: (be2) => n[V] = be2 });
        });
      } else
        e.exposed || (e.exposed = {});
    oe && e.render === Pe2 && (e.render = oe), ke2 != null && (e.inheritAttrs = ke2), Ie2 && (e.components = Ie2), lt2 && (e.directives = lt2);
  }
  function Vi(e, t, n = Pe2, s = false) {
    $(e) && (e = Bn(e));
    for (const r in e) {
      const o = e[r];
      let i;
      Z2(o) ? "default" in o ? i = Le2(o.from || r, o.default, true) : i = Le2(o.from || r) : i = Le2(o), le(i) && s ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => i.value, set: (l) => i.value = l }) : t[r] = i;
    }
  }
  function As(e, t, n) {
    Oe2($(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function qr(e, t, n, s) {
    const r = s.includes(".") ? Br(n, s) : () => n[s];
    if (ne(e)) {
      const o = t[e];
      D(o) && en(r, o);
    } else if (D(e))
      en(r, e.bind(n));
    else if (Z2(e))
      if ($(e))
        e.forEach((o) => qr(o, t, n, s));
      else {
        const o = D(e.handler) ? e.handler.bind(n) : t[e.handler];
        D(o) && en(r, o, e);
      }
  }
  function cs(e) {
    const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
    let u;
    return l ? u = l : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((d) => ln(u, d, i, true)), ln(u, t, i)), Z2(t) && o.set(t, u), u;
  }
  function ln(e, t, n, s = false) {
    const { mixins: r, extends: o } = t;
    o && ln(e, o, n, true), r && r.forEach((i) => ln(e, i, n, true));
    for (const i in t)
      if (!(s && i === "expose")) {
        const l = Qi[i] || n && n[i];
        e[i] = l ? l(e[i], t[i]) : t[i];
      }
    return e;
  }
  function Ts(e, t) {
    return t ? e ? function() {
      return fe(D(e) ? e.call(this, this) : e, D(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Yi(e, t) {
    return tt2(Bn(e), Bn(t));
  }
  function Bn(e) {
    if ($(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++)
        t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function ue2(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function tt2(e, t) {
    return e ? fe(fe(/* @__PURE__ */ Object.create(null), e), t) : t;
  }
  function Ji(e, t) {
    if (!e)
      return t;
    if (!t)
      return e;
    const n = fe(/* @__PURE__ */ Object.create(null), e);
    for (const s in t)
      n[s] = ue2(e[s], t[s]);
    return n;
  }
  function Xi(e, t, n, s = false) {
    const r = {}, o = {};
    sn(o, vn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Vr(e, t, r, o);
    for (const i in e.propsOptions[0])
      i in r || (r[i] = void 0);
    n ? e.props = s ? r : ai(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
  }
  function Zi(e, t, n, s) {
    const { props: r, attrs: o, vnode: { patchFlag: i } } = e, l = z(r), [u] = e.propsOptions;
    let d = false;
    if ((s || i > 0) && !(i & 16)) {
      if (i & 8) {
        const f = e.vnode.dynamicProps;
        for (let h = 0; h < f.length; h++) {
          let p = f[h];
          if (_n(e.emitsOptions, p))
            continue;
          const E = t[p];
          if (u)
            if (K2(o, p))
              E !== o[p] && (o[p] = E, d = true);
            else {
              const C = yt2(p);
              r[C] = kn(u, l, C, E, e, false);
            }
          else
            E !== o[p] && (o[p] = E, d = true);
        }
      }
    } else {
      Vr(e, t, r, o) && (d = true);
      let f;
      for (const h in l)
        (!t || !K2(t, h) && ((f = Rt2(h)) === h || !K2(t, f))) && (u ? n && (n[h] !== void 0 || n[f] !== void 0) && (r[h] = kn(u, l, h, void 0, e, true)) : delete r[h]);
      if (o !== l)
        for (const h in o)
          (!t || !K2(t, h)) && (delete o[h], d = true);
    }
    d && De2(e, "set", "$attrs");
  }
  function Vr(e, t, n, s) {
    const [r, o] = e.propsOptions;
    let i = false, l;
    if (t)
      for (let u in t) {
        if (Zt2(u))
          continue;
        const d = t[u];
        let f;
        r && K2(r, f = yt2(u)) ? !o || !o.includes(f) ? n[f] = d : (l || (l = {}))[f] = d : _n(e.emitsOptions, u) || (!(u in s) || d !== s[u]) && (s[u] = d, i = true);
      }
    if (o) {
      const u = z(n), d = l || X2;
      for (let f = 0; f < o.length; f++) {
        const h = o[f];
        n[h] = kn(r, u, h, d[h], e, !K2(d, h));
      }
    }
    return i;
  }
  function kn(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
      const l = K2(i, "default");
      if (l && s === void 0) {
        const u = i.default;
        if (i.type !== Function && D(u)) {
          const { propsDefaults: d } = r;
          n in d ? s = d[n] : (vt2(r), s = d[n] = u.call(null, t), ot2());
        } else
          s = u;
      }
      i[0] && (o && !l ? s = false : i[1] && (s === "" || s === Rt2(n)) && (s = true));
    }
    return s;
  }
  function Qr(e, t, n = false) {
    const s = t.propsCache, r = s.get(e);
    if (r)
      return r;
    const o = e.props, i = {}, l = [];
    let u = false;
    if (!D(e)) {
      const f = (h) => {
        u = true;
        const [p, E] = Qr(h, t, true);
        fe(i, p), E && l.push(...E);
      };
      !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
    }
    if (!o && !u)
      return Z2(e) && s.set(e, ht2), ht2;
    if ($(o))
      for (let f = 0; f < o.length; f++) {
        const h = yt2(o[f]);
        Is(h) && (i[h] = X2);
      }
    else if (o)
      for (const f in o) {
        const h = yt2(f);
        if (Is(h)) {
          const p = o[f], E = i[h] = $(p) || D(p) ? { type: p } : Object.assign({}, p);
          if (E) {
            const C = Ns(Boolean, E.type), I = Ns(String, E.type);
            E[0] = C > -1, E[1] = I < 0 || C < I, (C > -1 || K2(E, "default")) && l.push(h);
          }
        }
      }
    const d = [i, l];
    return Z2(e) && s.set(e, d), d;
  }
  function Is(e) {
    return e[0] !== "$";
  }
  function Ss(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : "";
  }
  function Ms(e, t) {
    return Ss(e) === Ss(t);
  }
  function Ns(e, t) {
    return $(t) ? t.findIndex((n) => Ms(n, e)) : D(t) && Ms(t, e) ? 0 : -1;
  }
  function Zr() {
    return { app: null, config: { isNativeTag: Ao, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
  }
  function sl(e, t) {
    return function(s, r = null) {
      D(s) || (s = Object.assign({}, s)), r != null && !Z2(r) && (r = null);
      const o = Zr(), i = /* @__PURE__ */ new Set();
      let l = false;
      const u = o.app = { _uid: nl++, _component: s, _props: r, _container: null, _context: o, _instance: null, version: xl, get config() {
        return o.config;
      }, set config(d) {
      }, use(d, ...f) {
        return i.has(d) || (d && D(d.install) ? (i.add(d), d.install(u, ...f)) : D(d) && (i.add(d), d(u, ...f))), u;
      }, mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u;
      }, component(d, f) {
        return f ? (o.components[d] = f, u) : o.components[d];
      }, directive(d, f) {
        return f ? (o.directives[d] = f, u) : o.directives[d];
      }, mount(d, f, h) {
        if (!l) {
          const p = re(s, r);
          return p.appContext = o, f && t ? t(p, d) : e(p, d, h), l = true, u._container = d, d.__vue_app__ = u, hs(p.component) || p.component.proxy;
        }
      }, unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      }, provide(d, f) {
        return o.provides[d] = f, u;
      } };
      return u;
    };
  }
  function Un(e, t, n, s, r = false) {
    if ($(e)) {
      e.forEach((p, E) => Un(p, t && ($(t) ? t[E] : t), n, s, r));
      return;
    }
    if (Nt2(s) && !r)
      return;
    const o = s.shapeFlag & 4 ? hs(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: l, r: u } = e, d = t && t.r, f = l.refs === X2 ? l.refs = {} : l.refs, h = l.setupState;
    if (d != null && d !== u && (ne(d) ? (f[d] = null, K2(h, d) && (h[d] = null)) : le(d) && (d.value = null)), D(u))
      Qe2(u, l, 12, [i, f]);
    else {
      const p = ne(u), E = le(u);
      if (p || E) {
        const C = () => {
          if (e.f) {
            const I = p ? K2(h, u) ? h[u] : f[u] : u.value;
            r ? $(I) && Jn(I, o) : $(I) ? I.includes(o) || I.push(o) : p ? (f[u] = [o], K2(h, u) && (h[u] = f[u])) : (u.value = [o], e.k && (f[e.k] = u.value));
          } else
            p ? (f[u] = i, K2(h, u) && (h[u] = i)) : E && (u.value = i, e.k && (f[e.k] = i));
        };
        i ? (C.id = -1, de2(C, n)) : C();
      }
    }
  }
  function rl(e) {
    return ol(e);
  }
  function ol(e, t) {
    const n = Lo();
    n.__VUE__ = true;
    const { insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: u, setText: d, setElementText: f, parentNode: h, nextSibling: p, setScopeId: E = Pe2, insertStaticContent: C } = e, I = (c, a, m, g = null, y = null, x = null, P = false, v = null, w = !!a.dynamicChildren) => {
      if (c === a)
        return;
      c && !It2(c, a) && (g = R(c), ae(c, y, x, true), c = null), a.patchFlag === -2 && (w = false, a.dynamicChildren = null);
      const { type: b, ref: M, shapeFlag: A } = a;
      switch (b) {
        case En:
          H(c, a, m, g);
          break;
        case Je2:
          T(c, a, m, g);
          break;
        case tn:
          c == null && j(a, m, g, P);
          break;
        case _e:
          Ie2(c, a, m, g, y, x, P, v, w);
          break;
        default:
          A & 1 ? oe(c, a, m, g, y, x, P, v, w) : A & 6 ? lt2(c, a, m, g, y, x, P, v, w) : (A & 64 || A & 128) && b.process(c, a, m, g, y, x, P, v, w, U);
      }
      M != null && y && Un(M, c && c.ref, x, a || c, !a);
    }, H = (c, a, m, g) => {
      if (c == null)
        s(a.el = l(a.children), m, g);
      else {
        const y = a.el = c.el;
        a.children !== c.children && d(y, a.children);
      }
    }, T = (c, a, m, g) => {
      c == null ? s(a.el = u(a.children || ""), m, g) : a.el = c.el;
    }, j = (c, a, m, g) => {
      [c.el, c.anchor] = C(c.children, a, m, g, c.el, c.anchor);
    }, F = ({ el: c, anchor: a }, m, g) => {
      let y;
      for (; c && c !== a; )
        y = p(c), s(c, m, g), c = y;
      s(a, m, g);
    }, W = ({ el: c, anchor: a }) => {
      let m;
      for (; c && c !== a; )
        m = p(c), r(c), c = m;
      r(a);
    }, oe = (c, a, m, g, y, x, P, v, w) => {
      P = P || a.type === "svg", c == null ? me2(a, m, g, y, x, P, v, w) : it2(c, a, y, x, P, v, w);
    }, me2 = (c, a, m, g, y, x, P, v) => {
      let w, b;
      const { type: M, props: A, shapeFlag: N, transition: L, dirs: k } = c;
      if (w = c.el = i(c.type, x, A && A.is, A), N & 8 ? f(w, c.children) : N & 16 && $e2(c.children, w, null, g, y, x && M !== "foreignObject", P, v), k && Ge2(c, null, g, "created"), Ae2(w, c, c.scopeId, P, g), A) {
        for (const Q2 in A)
          Q2 !== "value" && !Zt2(Q2) && o(w, Q2, null, A[Q2], x, c.children, g, y, O);
        "value" in A && o(w, "value", null, A.value), (b = A.onVnodeBeforeMount) && Me2(b, g, c);
      }
      k && Ge2(c, null, g, "beforeMount");
      const J = (!y || y && !y.pendingBranch) && L && !L.persisted;
      J && L.beforeEnter(w), s(w, a, m), ((b = A && A.onVnodeMounted) || J || k) && de2(() => {
        b && Me2(b, g, c), J && L.enter(w), k && Ge2(c, null, g, "mounted");
      }, y);
    }, Ae2 = (c, a, m, g, y) => {
      if (m && E(c, m), g)
        for (let x = 0; x < g.length; x++)
          E(c, g[x]);
      if (y) {
        let x = y.subTree;
        if (a === x) {
          const P = y.vnode;
          Ae2(c, P, P.scopeId, P.slotScopeIds, y.parent);
        }
      }
    }, $e2 = (c, a, m, g, y, x, P, v, w = 0) => {
      for (let b = w; b < c.length; b++) {
        const M = c[b] = v ? ze2(c[b]) : Ne2(c[b]);
        I(null, M, a, m, g, y, x, P, v);
      }
    }, it2 = (c, a, m, g, y, x, P) => {
      const v = a.el = c.el;
      let { patchFlag: w, dynamicChildren: b, dirs: M } = a;
      w |= c.patchFlag & 16;
      const A = c.props || X2, N = a.props || X2;
      let L;
      m && et2(m, false), (L = N.onVnodeBeforeUpdate) && Me2(L, m, a, c), M && Ge2(a, c, m, "beforeUpdate"), m && et2(m, true);
      const k = y && a.type !== "foreignObject";
      if (b ? Te2(c.dynamicChildren, b, v, m, g, k, x) : P || V(c, a, v, null, m, g, k, x, false), w > 0) {
        if (w & 16)
          ke2(v, a, A, N, m, g, y);
        else if (w & 2 && A.class !== N.class && o(v, "class", null, N.class, y), w & 4 && o(v, "style", A.style, N.style, y), w & 8) {
          const J = a.dynamicProps;
          for (let Q2 = 0; Q2 < J.length; Q2++) {
            const te = J[Q2], ve2 = A[te], ut2 = N[te];
            (ut2 !== ve2 || te === "value") && o(v, te, ve2, ut2, y, c.children, m, g, O);
          }
        }
        w & 1 && c.children !== a.children && f(v, a.children);
      } else
        !P && b == null && ke2(v, a, A, N, m, g, y);
      ((L = N.onVnodeUpdated) || M) && de2(() => {
        L && Me2(L, m, a, c), M && Ge2(a, c, m, "updated");
      }, g);
    }, Te2 = (c, a, m, g, y, x, P) => {
      for (let v = 0; v < a.length; v++) {
        const w = c[v], b = a[v], M = w.el && (w.type === _e || !It2(w, b) || w.shapeFlag & 70) ? h(w.el) : m;
        I(w, b, M, null, g, y, x, P, true);
      }
    }, ke2 = (c, a, m, g, y, x, P) => {
      if (m !== g) {
        if (m !== X2)
          for (const v in m)
            !Zt2(v) && !(v in g) && o(c, v, m[v], null, P, a.children, y, x, O);
        for (const v in g) {
          if (Zt2(v))
            continue;
          const w = g[v], b = m[v];
          w !== b && v !== "value" && o(c, v, b, w, P, a.children, y, x, O);
        }
        "value" in g && o(c, "value", m.value, g.value);
      }
    }, Ie2 = (c, a, m, g, y, x, P, v, w) => {
      const b = a.el = c ? c.el : l(""), M = a.anchor = c ? c.anchor : l("");
      let { patchFlag: A, dynamicChildren: N, slotScopeIds: L } = a;
      L && (v = v ? v.concat(L) : L), c == null ? (s(b, m, g), s(M, m, g), $e2(a.children, m, M, y, x, P, v, w)) : A > 0 && A & 64 && N && c.dynamicChildren ? (Te2(c.dynamicChildren, N, m, y, x, P, v), (a.key != null || y && a === y.subTree) && Gr(c, a, true)) : V(c, a, m, M, y, x, P, v, w);
    }, lt2 = (c, a, m, g, y, x, P, v, w) => {
      a.slotScopeIds = v, c == null ? a.shapeFlag & 512 ? y.ctx.activate(a, m, g, P, w) : Xe2(a, m, g, y, x, P, w) : At2(c, a, w);
    }, Xe2 = (c, a, m, g, y, x, P) => {
      const v = c.component = pl(c, g, y);
      if (Ur(c) && (v.ctx.renderer = U), ml(v), v.asyncDep) {
        if (y && y.registerDep(v, ee2), !c.el) {
          const w = v.subTree = re(Je2);
          T(null, w, a, m);
        }
        return;
      }
      ee2(v, c, a, m, y, x, P);
    }, At2 = (c, a, m) => {
      const g = a.component = c.component;
      if (Oi(c, a, m))
        if (g.asyncDep && !g.asyncResolved) {
          Y(g, a, m);
          return;
        } else
          g.next = a, Ei(g.update), g.update();
      else
        a.el = c.el, g.vnode = a;
    }, ee2 = (c, a, m, g, y, x, P) => {
      const v = () => {
        if (c.isMounted) {
          let { next: M, bu: A, u: N, parent: L, vnode: k } = c, J = M, Q2;
          et2(c, false), M ? (M.el = k.el, Y(c, M, P)) : M = k, A && Pn(A), (Q2 = M.props && M.props.onVnodeBeforeUpdate) && Me2(Q2, L, M, k), et2(c, true);
          const te = On(c), ve2 = c.subTree;
          c.subTree = te, I(ve2, te, h(ve2.el), R(ve2), c, y, x), M.el = te.el, J === null && Ci(c, te.el), N && de2(N, y), (Q2 = M.props && M.props.onVnodeUpdated) && de2(() => Me2(Q2, L, M, k), y);
        } else {
          let M;
          const { el: A, props: N } = a, { bm: L, m: k, parent: J } = c, Q2 = Nt2(a);
          if (et2(c, false), L && Pn(L), !Q2 && (M = N && N.onVnodeBeforeMount) && Me2(M, J, a), et2(c, true), A && B) {
            const te = () => {
              c.subTree = On(c), B(A, c.subTree, c, y, null);
            };
            Q2 ? a.type.__asyncLoader().then(() => !c.isUnmounted && te()) : te();
          } else {
            const te = c.subTree = On(c);
            I(null, te, m, g, c, y, x), a.el = te.el;
          }
          if (k && de2(k, y), !Q2 && (M = N && N.onVnodeMounted)) {
            const te = a;
            de2(() => Me2(M, J, te), y);
          }
          (a.shapeFlag & 256 || J && Nt2(J.vnode) && J.vnode.shapeFlag & 256) && c.a && de2(c.a, y), c.isMounted = true, a = m = g = null;
        }
      }, w = c.effect = new es(v, () => ls(b), c.scope), b = c.update = () => w.run();
      b.id = c.uid, et2(c, true), b();
    }, Y = (c, a, m) => {
      a.component = c;
      const g = c.vnode.props;
      c.vnode = a, c.next = null, Zi(c, a.props, g, m), tl(c, a.children, m), Pt2(), Os(), Ot2();
    }, V = (c, a, m, g, y, x, P, v, w = false) => {
      const b = c && c.children, M = c ? c.shapeFlag : 0, A = a.children, { patchFlag: N, shapeFlag: L } = a;
      if (N > 0) {
        if (N & 128) {
          Ze2(b, A, m, g, y, x, P, v, w);
          return;
        } else if (N & 256) {
          be2(b, A, m, g, y, x, P, v, w);
          return;
        }
      }
      L & 8 ? (M & 16 && O(b, y, x), A !== b && f(m, A)) : M & 16 ? L & 16 ? Ze2(b, A, m, g, y, x, P, v, w) : O(b, y, x, true) : (M & 8 && f(m, ""), L & 16 && $e2(A, m, g, y, x, P, v, w));
    }, be2 = (c, a, m, g, y, x, P, v, w) => {
      c = c || ht2, a = a || ht2;
      const b = c.length, M = a.length, A = Math.min(b, M);
      let N;
      for (N = 0; N < A; N++) {
        const L = a[N] = w ? ze2(a[N]) : Ne2(a[N]);
        I(c[N], L, m, null, y, x, P, v, w);
      }
      b > M ? O(c, y, x, true, false, A) : $e2(a, m, g, y, x, P, v, w, A);
    }, Ze2 = (c, a, m, g, y, x, P, v, w) => {
      let b = 0;
      const M = a.length;
      let A = c.length - 1, N = M - 1;
      for (; b <= A && b <= N; ) {
        const L = c[b], k = a[b] = w ? ze2(a[b]) : Ne2(a[b]);
        if (It2(L, k))
          I(L, k, m, null, y, x, P, v, w);
        else
          break;
        b++;
      }
      for (; b <= A && b <= N; ) {
        const L = c[A], k = a[N] = w ? ze2(a[N]) : Ne2(a[N]);
        if (It2(L, k))
          I(L, k, m, null, y, x, P, v, w);
        else
          break;
        A--, N--;
      }
      if (b > A) {
        if (b <= N) {
          const L = N + 1, k = L < M ? a[L].el : g;
          for (; b <= N; )
            I(null, a[b] = w ? ze2(a[b]) : Ne2(a[b]), m, k, y, x, P, v, w), b++;
        }
      } else if (b > N)
        for (; b <= A; )
          ae(c[b], y, x, true), b++;
      else {
        const L = b, k = b, J = /* @__PURE__ */ new Map();
        for (b = k; b <= N; b++) {
          const ge = a[b] = w ? ze2(a[b]) : Ne2(a[b]);
          ge.key != null && J.set(ge.key, b);
        }
        let Q2, te = 0;
        const ve2 = N - k + 1;
        let ut2 = false, ms = 0;
        const Tt2 = new Array(ve2);
        for (b = 0; b < ve2; b++)
          Tt2[b] = 0;
        for (b = L; b <= A; b++) {
          const ge = c[b];
          if (te >= ve2) {
            ae(ge, y, x, true);
            continue;
          }
          let Se2;
          if (ge.key != null)
            Se2 = J.get(ge.key);
          else
            for (Q2 = k; Q2 <= N; Q2++)
              if (Tt2[Q2 - k] === 0 && It2(ge, a[Q2])) {
                Se2 = Q2;
                break;
              }
          Se2 === void 0 ? ae(ge, y, x, true) : (Tt2[Se2 - k] = b + 1, Se2 >= ms ? ms = Se2 : ut2 = true, I(ge, a[Se2], m, null, y, x, P, v, w), te++);
        }
        const gs = ut2 ? il(Tt2) : ht2;
        for (Q2 = gs.length - 1, b = ve2 - 1; b >= 0; b--) {
          const ge = k + b, Se2 = a[ge], _s = ge + 1 < M ? a[ge + 1].el : g;
          Tt2[b] === 0 ? I(null, Se2, m, _s, y, x, P, v, w) : ut2 && (Q2 < 0 || b !== gs[Q2] ? Ee2(Se2, m, _s, 2) : Q2--);
        }
      }
    }, Ee2 = (c, a, m, g, y = null) => {
      const { el: x, type: P, transition: v, children: w, shapeFlag: b } = c;
      if (b & 6) {
        Ee2(c.component.subTree, a, m, g);
        return;
      }
      if (b & 128) {
        c.suspense.move(a, m, g);
        return;
      }
      if (b & 64) {
        P.move(c, a, m, U);
        return;
      }
      if (P === _e) {
        s(x, a, m);
        for (let A = 0; A < w.length; A++)
          Ee2(w[A], a, m, g);
        s(c.anchor, a, m);
        return;
      }
      if (P === tn) {
        F(c, a, m);
        return;
      }
      if (g !== 2 && b & 1 && v)
        if (g === 0)
          v.beforeEnter(x), s(x, a, m), de2(() => v.enter(x), y);
        else {
          const { leave: A, delayLeave: N, afterLeave: L } = v, k = () => s(x, a, m), J = () => {
            A(x, () => {
              k(), L && L();
            });
          };
          N ? N(x, k, J) : J();
        }
      else
        s(x, a, m);
    }, ae = (c, a, m, g = false, y = false) => {
      const { type: x, props: P, ref: v, children: w, dynamicChildren: b, shapeFlag: M, patchFlag: A, dirs: N } = c;
      if (v != null && Un(v, null, m, c, true), M & 256) {
        a.ctx.deactivate(c);
        return;
      }
      const L = M & 1 && N, k = !Nt2(c);
      let J;
      if (k && (J = P && P.onVnodeBeforeUnmount) && Me2(J, a, c), M & 6)
        _(c.component, m, g);
      else {
        if (M & 128) {
          c.suspense.unmount(m, g);
          return;
        }
        L && Ge2(c, null, a, "beforeUnmount"), M & 64 ? c.type.remove(c, a, m, y, U, g) : b && (x !== _e || A > 0 && A & 64) ? O(b, a, m, false, true) : (x === _e && A & 384 || !y && M & 16) && O(w, a, m), g && ct2(c);
      }
      (k && (J = P && P.onVnodeUnmounted) || L) && de2(() => {
        J && Me2(J, a, c), L && Ge2(c, null, a, "unmounted");
      }, m);
    }, ct2 = (c) => {
      const { type: a, el: m, anchor: g, transition: y } = c;
      if (a === _e) {
        Wt2(m, g);
        return;
      }
      if (a === tn) {
        W(c);
        return;
      }
      const x = () => {
        r(m), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (c.shapeFlag & 1 && y && !y.persisted) {
        const { leave: P, delayLeave: v } = y, w = () => P(m, x);
        v ? v(c.el, x, w) : w();
      } else
        x();
    }, Wt2 = (c, a) => {
      let m;
      for (; c !== a; )
        m = p(c), r(c), c = m;
      r(a);
    }, _ = (c, a, m) => {
      const { bum: g, scope: y, update: x, subTree: P, um: v } = c;
      g && Pn(g), y.stop(), x && (x.active = false, ae(P, c, a, m)), v && de2(v, a), de2(() => {
        c.isUnmounted = true;
      }, a), a && a.pendingBranch && !a.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve());
    }, O = (c, a, m, g = false, y = false, x = 0) => {
      for (let P = x; P < c.length; P++)
        ae(c[P], a, m, g, y);
    }, R = (c) => c.shapeFlag & 6 ? R(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : p(c.anchor || c.el), S = (c, a, m) => {
      c == null ? a._vnode && ae(a._vnode, null, null, true) : I(a._vnode || null, c, a, null, null, null, m), Os(), Lr(), a._vnode = c;
    }, U = { p: I, um: ae, m: Ee2, r: ct2, mt: Xe2, mc: $e2, pc: V, pbc: Te2, n: R, o: e };
    let G, B;
    return t && ([G, B] = t(U)), { render: S, hydrate: G, createApp: sl(S, G) };
  }
  function et2({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function Gr(e, t, n = false) {
    const s = e.children, r = t.children;
    if ($(s) && $(r))
      for (let o = 0; o < s.length; o++) {
        const i = s[o];
        let l = r[o];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = ze2(r[o]), l.el = i.el), n || Gr(i, l)), l.type === En && (l.el = i.el);
      }
  }
  function il(e) {
    const t = e.slice(), n = [0];
    let s, r, o, i, l;
    const u = e.length;
    for (s = 0; s < u; s++) {
      const d = e[s];
      if (d !== 0) {
        if (r = n[n.length - 1], e[r] < d) {
          t[s] = r, n.push(s);
          continue;
        }
        for (o = 0, i = n.length - 1; o < i; )
          l = o + i >> 1, e[n[l]] < d ? o = l + 1 : i = l;
        d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
      }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0; )
      n[o] = i, i = t[i];
    return n;
  }
  function _t(e = false) {
    Lt2.push(Re2 = e ? null : []);
  }
  function cl() {
    Lt2.pop(), Re2 = Lt2[Lt2.length - 1] || null;
  }
  function Fs(e) {
    Ut2 += e;
  }
  function eo(e) {
    return e.dynamicChildren = Ut2 > 0 ? Re2 || ht2 : null, cl(), Ut2 > 0 && Re2 && Re2.push(e), e;
  }
  function Kn(e, t, n, s, r, o) {
    return eo(as(e, t, n, s, r, o, true));
  }
  function fs(e, t, n, s, r) {
    return eo(re(e, t, n, s, r, true));
  }
  function cn(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function It2(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  function as(e, t = null, n = null, s = 0, r = null, o = e === _e ? 0 : 1, i = false, l = false) {
    const u = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && to(t), ref: t && nn(t), scopeId: yn, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: s, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: he2 };
    return l ? (ds(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= ne(n) ? 8 : 16), Ut2 > 0 && !i && Re2 && (u.patchFlag > 0 || o & 6) && u.patchFlag !== 32 && Re2.push(u), u;
  }
  function ul(e, t = null, n = null, s = 0, r = null, o = false) {
    if ((!e || e === Ki) && (e = Je2), cn(e)) {
      const l = Et2(e, t, true);
      return n && ds(l, n), Ut2 > 0 && !o && Re2 && (l.shapeFlag & 6 ? Re2[Re2.indexOf(e)] = l : Re2.push(l)), l.patchFlag |= -2, l;
    }
    if (bl(e) && (e = e.__vccOpts), t) {
      t = fl(t);
      let { class: l, style: u } = t;
      l && !ne(l) && (t.class = an(l)), Z2(u) && (Pr(u) && !$(u) && (u = fe({}, u)), t.style = fn(u));
    }
    const i = ne(e) ? 1 : Ai(e) ? 128 : ll(e) ? 64 : Z2(e) ? 4 : D(e) ? 2 : 0;
    return as(e, t, n, s, r, i, o, true);
  }
  function fl(e) {
    return e ? Pr(e) || vn in e ? fe({}, e) : e : null;
  }
  function Et2(e, t, n = false) {
    const { props: s, ref: r, patchFlag: o, children: i } = e, l = t ? al(s || {}, t) : s;
    return { __v_isVNode: true, __v_skip: true, type: e.type, props: l, key: l && to(l), ref: t && t.ref ? n && r ? $(r) ? r.concat(nn(t)) : [r, nn(t)] : nn(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: i, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Et2(e.ssContent), ssFallback: e.ssFallback && Et2(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  }
  function no(e = " ", t = 0) {
    return re(En, null, e, t);
  }
  function ou(e, t) {
    const n = re(tn, null, e);
    return n.staticCount = t, n;
  }
  function iu(e = "", t = false) {
    return t ? (_t(), fs(Je2, null, e)) : re(Je2, null, e);
  }
  function Ne2(e) {
    return e == null || typeof e == "boolean" ? re(Je2) : $(e) ? re(_e, null, e.slice()) : typeof e == "object" ? ze2(e) : re(En, null, String(e));
  }
  function ze2(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et2(e);
  }
  function ds(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null)
      t = null;
    else if ($(t))
      n = 16;
    else if (typeof t == "object")
      if (s & 65) {
        const r = t.default;
        r && (r._c && (r._d = false), ds(e, r()), r._c && (r._d = true));
        return;
      } else {
        n = 32;
        const r = t._;
        !r && !(vn in t) ? t._ctx = he2 : r === 3 && he2 && (he2.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
      }
    else
      D(t) ? (t = { default: t, _ctx: he2 }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [no(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function al(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      for (const r in s)
        if (r === "class")
          t.class !== s.class && (t.class = an([t.class, s.class]));
        else if (r === "style")
          t.style = fn([t.style, s.style]);
        else if (dn(r)) {
          const o = t[r], i = s[r];
          i && o !== i && !($(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
        } else
          r !== "" && (t[r] = s[r]);
    }
    return t;
  }
  function Me2(e, t, n, s = null) {
    Oe2(e, t, 7, [n, s]);
  }
  function pl(e, t, n) {
    const s = e.type, r = (t ? t.appContext : e.appContext) || dl, o = { uid: hl++, vnode: e, type: s, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, scope: new $o(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Qr(s, r), emitsOptions: jr(s, r), emit: null, emitted: null, propsDefaults: X2, inheritAttrs: s.inheritAttrs, ctx: X2, data: X2, props: X2, attrs: X2, slots: X2, refs: X2, setupState: X2, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = wi.bind(null, o), e.ce && e.ce(o), o;
  }
  function so(e) {
    return e.vnode.shapeFlag & 4;
  }
  function ml(e, t = false) {
    Kt2 = t;
    const { props: n, children: s } = e.vnode, r = so(e);
    Xi(e, n, r, t), el(e, s);
    const o = r ? gl(e, t) : void 0;
    return Kt2 = false, o;
  }
  function gl(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Or(new Proxy(e.ctx, Wi));
    const { setup: s } = n;
    if (s) {
      const r = e.setupContext = s.length > 1 ? yl(e) : null;
      vt2(e), Pt2();
      const o = Qe2(s, e, 0, [e.props, r]);
      if (Ot2(), ot2(), fr(o)) {
        if (o.then(ot2, ot2), t)
          return o.then((i) => {
            Ls(e, i, t);
          }).catch((i) => {
            gn(i, e, 0);
          });
        e.asyncDep = o;
      } else
        Ls(e, o, t);
    } else
      ro(e, t);
  }
  function Ls(e, t, n) {
    D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z2(t) && (e.setupState = Ir(t)), ro(e, n);
  }
  function ro(e, t, n) {
    const s = e.type;
    if (!e.render) {
      if (!t && $s && !s.render) {
        const r = s.template || cs(e).template;
        if (r) {
          const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = s, d = fe(fe({ isCustomElement: o, delimiters: l }, i), u);
          s.render = $s(r, d);
        }
      }
      e.render = s.render || Pe2;
    }
    vt2(e), Pt2(), qi(e), Ot2(), ot2();
  }
  function _l(e) {
    return new Proxy(e.attrs, { get(t, n) {
      return pe(e, "get", "$attrs"), t[n];
    } });
  }
  function yl(e) {
    const t = (s) => {
      e.exposed = s || {};
    };
    let n;
    return { get attrs() {
      return n || (n = _l(e));
    }, slots: e.slots, emit: e.emit, expose: t };
  }
  function hs(e) {
    if (e.exposed)
      return e.exposeProxy || (e.exposeProxy = new Proxy(Ir(Or(e.exposed)), { get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ft2)
          return Ft2[n](e);
      }, has(t, n) {
        return n in t || n in Ft2;
      } }));
  }
  function bl(e) {
    return D(e) && "__vccOpts" in e;
  }
  function oo(e, t, n) {
    const s = arguments.length;
    return s === 2 ? Z2(t) && !$(t) ? cn(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && cn(n) && (n = [n]), re(e, t, n));
  }
  function Pl(e, t, n) {
    const s = e._vtc;
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  function Ol(e, t, n) {
    const s = e.style, r = ne(n);
    if (n && !r) {
      if (t && !ne(t))
        for (const o in t)
          n[o] == null && zn(s, o, "");
      for (const o in n)
        zn(s, o, n[o]);
    } else {
      const o = s.display;
      r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
    }
  }
  function zn(e, t, n) {
    if ($(n))
      n.forEach((s) => zn(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--"))
      e.setProperty(t, n);
    else {
      const s = Cl(e, t);
      Hs.test(n) ? e.setProperty(Rt2(s), n.replace(Hs, ""), "important") : e[s] = n;
    }
  }
  function Cl(e, t) {
    const n = An[t];
    if (n)
      return n;
    let s = yt2(t);
    if (s !== "filter" && s in e)
      return An[t] = s;
    s = hr(s);
    for (let r = 0; r < Ds.length; r++) {
      const o = Ds[r] + s;
      if (o in e)
        return An[t] = o;
    }
    return t;
  }
  function Al(e, t, n, s, r) {
    if (s && t.startsWith("xlink:"))
      n == null ? e.removeAttributeNS(Bs, t.slice(6, t.length)) : e.setAttributeNS(Bs, t, n);
    else {
      const o = Oo(t);
      n == null || o && !lr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
    }
  }
  function Tl(e, t, n, s, r, o, i) {
    if (t === "innerHTML" || t === "textContent") {
      s && i(s, r, o), e[t] = n ?? "";
      return;
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
      e._value = n;
      const u = n ?? "";
      (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
      return;
    }
    let l = false;
    if (n === "" || n == null) {
      const u = typeof e[t];
      u === "boolean" ? n = lr(n) : n == null && u === "string" ? (n = "", l = true) : u === "number" && (n = 0, l = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    l && e.removeAttribute(t);
  }
  function Il(e, t, n, s) {
    e.addEventListener(t, n, s);
  }
  function Sl(e, t, n, s) {
    e.removeEventListener(t, n, s);
  }
  function Ml(e, t, n, s, r = null) {
    const o = e._vei || (e._vei = {}), i = o[t];
    if (s && i)
      i.value = s;
    else {
      const [l, u] = Nl(t);
      if (s) {
        const d = o[t] = $l(s, r);
        Il(e, l, d, u);
      } else
        i && (Sl(e, l, i, u), o[t] = void 0);
    }
  }
  function Nl(e) {
    let t;
    if (ks.test(e)) {
      t = {};
      let s;
      for (; s = e.match(ks); )
        e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = true;
    }
    return [e[2] === ":" ? e.slice(3) : Rt2(e.slice(2)), t];
  }
  function $l(e, t) {
    const n = (s) => {
      if (!s._vts)
        s._vts = Date.now();
      else if (s._vts <= n.attached)
        return;
      Oe2(jl(s, n.value), t, 5, [s]);
    };
    return n.value = e, n.attached = Ll(), n;
  }
  function jl(e, t) {
    if ($(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((s) => (r) => !r._stopped && s && s(r));
    } else
      return t;
  }
  function Dl(e, t, n, s) {
    return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Us.test(t) && D(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Us.test(t) && ne(n) ? false : t in e;
  }
  function kl() {
    return Ks || (Ks = rl(Bl));
  }
  function Kl(e) {
    return ne(e) ? document.querySelector(e) : e;
  }
  function zl(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module";
  }
  function In(e, t) {
    const n = {};
    for (const s in t) {
      const r = t[s];
      n[s] = Ce2(r) ? r.map(e) : e(r);
    }
    return n;
  }
  function Sn(e, t, n = "/") {
    let s, r = {}, o = "", i = "";
    const l = t.indexOf("#");
    let u = t.indexOf("?");
    return l < u && l >= 0 && (u = -1), u > -1 && (s = t.slice(0, u), o = t.slice(u + 1, l > -1 ? l : t.length), r = e(o)), l > -1 && (s = s || t.slice(0, l), i = t.slice(l, t.length)), s = Jl(s ?? t, n), { fullPath: s + (o && "?") + o + i, path: s, query: r, hash: i };
  }
  function Vl(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function zs(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Ql(e, t, n) {
    const s = t.matched.length - 1, r = n.matched.length - 1;
    return s > -1 && s === r && xt2(t.matched[s], n.matched[r]) && io(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function xt2(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function io(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return false;
    for (const n in e)
      if (!Yl(e[n], t[n]))
        return false;
    return true;
  }
  function Yl(e, t) {
    return Ce2(e) ? Ws(e, t) : Ce2(t) ? Ws(t, e) : e === t;
  }
  function Ws(e, t) {
    return Ce2(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
  }
  function Jl(e, t) {
    if (e.startsWith("/"))
      return e;
    if (!e)
      return t;
    const n = t.split("/"), s = e.split("/");
    let r = n.length - 1, o, i;
    for (o = 0; o < s.length; o++)
      if (i = s[o], i !== ".")
        if (i === "..")
          r > 1 && r--;
        else
          break;
    return n.slice(0, r).join("/") + "/" + s.slice(o - (o === s.length ? 1 : 0)).join("/");
  }
  function Xl(e) {
    if (!e)
      if (at2) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ql(e);
  }
  function Gl(e, t) {
    return e.replace(Zl, "#") + t;
  }
  function ec(e, t) {
    const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
    return { behavior: t.behavior, left: s.left - n.left - (t.left || 0), top: s.top - n.top - (t.top || 0) };
  }
  function tc(e) {
    let t;
    if ("el" in e) {
      const n = e.el, s = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!r)
        return;
      t = ec(r, e);
    } else
      t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
  }
  function qs(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  function nc(e, t) {
    Wn.set(e, t);
  }
  function sc(e) {
    const t = Wn.get(e);
    return Wn.delete(e), t;
  }
  function lo(e, t) {
    const { pathname: n, search: s, hash: r } = t, o = e.indexOf("#");
    if (o > -1) {
      let l = r.includes(e.slice(o)) ? e.slice(o).length : 1, u = r.slice(l);
      return u[0] !== "/" && (u = "/" + u), zs(u, "");
    }
    return zs(n, e) + s + r;
  }
  function oc(e, t, n, s) {
    let r = [], o = [], i = null;
    const l = ({ state: p }) => {
      const E = lo(e, location), C = n.value, I = t.value;
      let H = 0;
      if (p) {
        if (n.value = E, t.value = p, i && i === C) {
          i = null;
          return;
        }
        H = I ? p.position - I.position : 0;
      } else
        s(E);
      r.forEach((T) => {
        T(n.value, C, { delta: H, type: zt2.pop, direction: H ? H > 0 ? jt2.forward : jt2.back : jt2.unknown });
      });
    };
    function u() {
      i = n.value;
    }
    function d(p) {
      r.push(p);
      const E = () => {
        const C = r.indexOf(p);
        C > -1 && r.splice(C, 1);
      };
      return o.push(E), E;
    }
    function f() {
      const { history: p } = window;
      p.state && p.replaceState(q({}, p.state, { scroll: xn() }), "");
    }
    function h() {
      for (const p of o)
        p();
      o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", f);
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", f), { pauseListeners: u, listen: d, destroy: h };
  }
  function Vs(e, t, n, s = false, r = false) {
    return { back: e, current: t, forward: n, replaced: s, position: window.history.length, scroll: r ? xn() : null };
  }
  function ic(e) {
    const { history: t, location: n } = window, s = { value: lo(e, n) }, r = { value: t.state };
    r.value || o(s.value, { back: null, current: s.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
    function o(u, d, f) {
      const h = e.indexOf("#"), p = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + u : rc() + e + u;
      try {
        t[f ? "replaceState" : "pushState"](d, "", p), r.value = d;
      } catch (E) {
        console.error(E), n[f ? "replace" : "assign"](p);
      }
    }
    function i(u, d) {
      const f = q({}, t.state, Vs(r.value.back, u, r.value.forward, true), d, { position: r.value.position });
      o(u, f, true), s.value = u;
    }
    function l(u, d) {
      const f = q({}, r.value, t.state, { forward: u, scroll: xn() });
      o(f.current, f, true);
      const h = q({}, Vs(s.value, u, null), { position: f.position + 1 }, d);
      o(u, h, false), s.value = u;
    }
    return { location: s, state: r, push: l, replace: i };
  }
  function lc(e) {
    e = Xl(e);
    const t = ic(e), n = oc(e, t.state, t.location, t.replace);
    function s(o, i = true) {
      i || n.pauseListeners(), history.go(o);
    }
    const r = q({ location: "", base: e, go: s, createHref: Gl.bind(null, e) }, t, n);
    return Object.defineProperty(r, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(r, "state", { enumerable: true, get: () => t.state.value }), r;
  }
  function cc(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function co(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  function wt2(e, t) {
    return q(new Error(), { type: e, [uo]: true }, t);
  }
  function je2(e, t) {
    return e instanceof Error && uo in e && (t == null || !!(e.type & t));
  }
  function ac(e, t) {
    const n = q({}, uc, t), s = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const d of e) {
      const f = d.length ? [] : [90];
      n.strict && !d.length && (r += "/");
      for (let h = 0; h < d.length; h++) {
        const p = d[h];
        let E = 40 + (n.sensitive ? 0.25 : 0);
        if (p.type === 0)
          h || (r += "/"), r += p.value.replace(fc, "\\$&"), E += 40;
        else if (p.type === 1) {
          const { value: C, repeatable: I, optional: H, regexp: T } = p;
          o.push({ name: C, repeatable: I, optional: H });
          const j = T || Ys;
          if (j !== Ys) {
            E += 10;
            try {
              new RegExp(`(${j})`);
            } catch (W) {
              throw new Error(`Invalid custom RegExp for param "${C}" (${j}): ` + W.message);
            }
          }
          let F = I ? `((?:${j})(?:/(?:${j}))*)` : `(${j})`;
          h || (F = H && d.length < 2 ? `(?:/${F})` : "/" + F), H && (F += "?"), r += F, E += 20, H && (E += -8), I && (E += -20), j === ".*" && (E += -50);
        }
        f.push(E);
      }
      s.push(f);
    }
    if (n.strict && n.end) {
      const d = s.length - 1;
      s[d][s[d].length - 1] += 0.7000000000000001;
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const i = new RegExp(r, n.sensitive ? "" : "i");
    function l(d) {
      const f = d.match(i), h = {};
      if (!f)
        return null;
      for (let p = 1; p < f.length; p++) {
        const E = f[p] || "", C = o[p - 1];
        h[C.name] = E && C.repeatable ? E.split("/") : E;
      }
      return h;
    }
    function u(d) {
      let f = "", h = false;
      for (const p of e) {
        (!h || !f.endsWith("/")) && (f += "/"), h = false;
        for (const E of p)
          if (E.type === 0)
            f += E.value;
          else if (E.type === 1) {
            const { value: C, repeatable: I, optional: H } = E, T = C in d ? d[C] : "";
            if (Ce2(T) && !I)
              throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);
            const j = Ce2(T) ? T.join("/") : T;
            if (!j)
              if (H)
                p.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : h = true);
              else
                throw new Error(`Missing required param "${C}"`);
            f += j;
          }
      }
      return f || "/";
    }
    return { re: i, score: s, keys: o, parse: l, stringify: u };
  }
  function dc(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const s = t[n] - e[n];
      if (s)
        return s;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
  }
  function hc(e, t) {
    let n = 0;
    const s = e.score, r = t.score;
    for (; n < s.length && n < r.length; ) {
      const o = dc(s[n], r[n]);
      if (o)
        return o;
      n++;
    }
    if (Math.abs(r.length - s.length) === 1) {
      if (Js(s))
        return 1;
      if (Js(r))
        return -1;
    }
    return r.length - s.length;
  }
  function Js(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  function gc(e) {
    if (!e)
      return [[]];
    if (e === "/")
      return [[pc]];
    if (!e.startsWith("/"))
      throw new Error(`Invalid path "${e}"`);
    function t(E) {
      throw new Error(`ERR (${n})/"${d}": ${E}`);
    }
    let n = 0, s = n;
    const r = [];
    let o;
    function i() {
      o && r.push(o), o = [];
    }
    let l = 0, u, d = "", f = "";
    function h() {
      d && (n === 0 ? o.push({ type: 0, value: d }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), o.push({ type: 1, value: d, regexp: f, repeatable: u === "*" || u === "+", optional: u === "*" || u === "?" })) : t("Invalid state to consume buffer"), d = "");
    }
    function p() {
      d += u;
    }
    for (; l < e.length; ) {
      if (u = e[l++], u === "\\" && n !== 2) {
        s = n, n = 4;
        continue;
      }
      switch (n) {
        case 0:
          u === "/" ? (d && h(), i()) : u === ":" ? (h(), n = 1) : p();
          break;
        case 4:
          p(), n = s;
          break;
        case 1:
          u === "(" ? n = 2 : mc.test(u) ? p() : (h(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
          break;
        case 2:
          u === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + u : n = 3 : f += u;
          break;
        case 3:
          h(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--, f = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), h(), i(), r;
  }
  function _c(e, t, n) {
    const s = ac(gc(e.path), n), r = q(s, { record: e, parent: t, children: [], alias: [] });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
  }
  function yc(e, t) {
    const n = [], s = /* @__PURE__ */ new Map();
    t = Gs({ strict: false, end: true, sensitive: false }, t);
    function r(f) {
      return s.get(f);
    }
    function o(f, h, p) {
      const E = !p, C = bc(f);
      C.aliasOf = p && p.record;
      const I = Gs(t, f), H = [C];
      if ("alias" in f) {
        const F = typeof f.alias == "string" ? [f.alias] : f.alias;
        for (const W of F)
          H.push(q({}, C, { components: p ? p.record.components : C.components, path: W, aliasOf: p ? p.record : C }));
      }
      let T, j;
      for (const F of H) {
        const { path: W } = F;
        if (h && W[0] !== "/") {
          const oe = h.record.path, me2 = oe[oe.length - 1] === "/" ? "" : "/";
          F.path = h.record.path + (W && me2 + W);
        }
        if (T = _c(F, h, I), p ? p.alias.push(T) : (j = j || T, j !== T && j.alias.push(T), E && f.name && !Zs(T) && i(f.name)), C.children) {
          const oe = C.children;
          for (let me2 = 0; me2 < oe.length; me2++)
            o(oe[me2], T, p && p.children[me2]);
        }
        p = p || T, (T.record.components && Object.keys(T.record.components).length || T.record.name || T.record.redirect) && u(T);
      }
      return j ? () => {
        i(j);
      } : $t2;
    }
    function i(f) {
      if (co(f)) {
        const h = s.get(f);
        h && (s.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
      } else {
        const h = n.indexOf(f);
        h > -1 && (n.splice(h, 1), f.record.name && s.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i));
      }
    }
    function l() {
      return n;
    }
    function u(f) {
      let h = 0;
      for (; h < n.length && hc(f, n[h]) >= 0 && (f.record.path !== n[h].record.path || !fo(f, n[h])); )
        h++;
      n.splice(h, 0, f), f.record.name && !Zs(f) && s.set(f.record.name, f);
    }
    function d(f, h) {
      let p, E = {}, C, I;
      if ("name" in f && f.name) {
        if (p = s.get(f.name), !p)
          throw wt2(1, { location: f });
        I = p.record.name, E = q(Xs(h.params, p.keys.filter((j) => !j.optional).map((j) => j.name)), f.params && Xs(f.params, p.keys.map((j) => j.name))), C = p.stringify(E);
      } else if ("path" in f)
        C = f.path, p = n.find((j) => j.re.test(C)), p && (E = p.parse(C), I = p.record.name);
      else {
        if (p = h.name ? s.get(h.name) : n.find((j) => j.re.test(h.path)), !p)
          throw wt2(1, { location: f, currentLocation: h });
        I = p.record.name, E = q({}, h.params, f.params), C = p.stringify(E);
      }
      const H = [];
      let T = p;
      for (; T; )
        H.unshift(T.record), T = T.parent;
      return { name: I, path: C, params: E, matched: H, meta: vc(H) };
    }
    return e.forEach((f) => o(f)), { addRoute: o, resolve: d, removeRoute: i, getRoutes: l, getRecordMatcher: r };
  }
  function Xs(e, t) {
    const n = {};
    for (const s of t)
      s in e && (n[s] = e[s]);
    return n;
  }
  function bc(e) {
    return { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: void 0, beforeEnter: e.beforeEnter, props: Ec(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  }
  function Ec(e) {
    const t = {}, n = e.props || false;
    if ("component" in e)
      t.default = n;
    else
      for (const s in e.components)
        t[s] = typeof n == "boolean" ? n : n[s];
    return t;
  }
  function Zs(e) {
    for (; e; ) {
      if (e.record.aliasOf)
        return true;
      e = e.parent;
    }
    return false;
  }
  function vc(e) {
    return e.reduce((t, n) => q(t, n.meta), {});
  }
  function Gs(e, t) {
    const n = {};
    for (const s in e)
      n[s] = s in t ? t[s] : e[s];
    return n;
  }
  function fo(e, t) {
    return t.children.some((n) => n === e || fo(e, n));
  }
  function ps(e) {
    return encodeURI("" + e).replace(Tc, "|").replace(Oc, "[").replace(Cc, "]");
  }
  function Sc(e) {
    return ps(e).replace(mo, "{").replace(go, "}").replace(po, "^");
  }
  function qn(e) {
    return ps(e).replace(ho, "%2B").replace(Ic, "+").replace(ao, "%23").replace(xc, "%26").replace(Ac, "`").replace(mo, "{").replace(go, "}").replace(po, "^");
  }
  function Mc(e) {
    return qn(e).replace(Rc, "%3D");
  }
  function Nc(e) {
    return ps(e).replace(ao, "%23").replace(Pc, "%3F");
  }
  function Fc(e) {
    return e == null ? "" : Nc(e).replace(wc, "%2F");
  }
  function un(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  function Lc(e) {
    const t = {};
    if (e === "" || e === "?")
      return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < s.length; ++r) {
      const o = s[r].replace(ho, " "), i = o.indexOf("="), l = un(i < 0 ? o : o.slice(0, i)), u = i < 0 ? null : un(o.slice(i + 1));
      if (l in t) {
        let d = t[l];
        Ce2(d) || (d = t[l] = [d]), d.push(u);
      } else
        t[l] = u;
    }
    return t;
  }
  function er(e) {
    let t = "";
    for (let n in e) {
      const s = e[n];
      if (n = Mc(n), s == null) {
        s !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (Ce2(s) ? s.map((o) => o && qn(o)) : [s && qn(s)]).forEach((o) => {
        o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
      });
    }
    return t;
  }
  function $c(e) {
    const t = {};
    for (const n in e) {
      const s = e[n];
      s !== void 0 && (t[n] = Ce2(s) ? s.map((r) => r == null ? null : "" + r) : s == null ? s : "" + s);
    }
    return t;
  }
  function St2() {
    let e = [];
    function t(s) {
      return e.push(s), () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      };
    }
    function n() {
      e = [];
    }
    return { add: t, list: () => e, reset: n };
  }
  function We2(e, t, n, s, r) {
    const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((i, l) => {
      const u = (h) => {
        h === false ? l(wt2(4, { from: n, to: t })) : h instanceof Error ? l(h) : cc(h) ? l(wt2(2, { from: t, to: h })) : (o && s.enterCallbacks[r] === o && typeof h == "function" && o.push(h), i());
      }, d = e.call(s && s.instances[r], t, n, u);
      let f = Promise.resolve(d);
      e.length < 3 && (f = f.then(u)), f.catch((h) => l(h));
    });
  }
  function Mn(e, t, n, s) {
    const r = [];
    for (const o of e)
      for (const i in o.components) {
        let l = o.components[i];
        if (!(t !== "beforeRouteEnter" && !o.instances[i]))
          if (Hc(l)) {
            const d = (l.__vccOpts || l)[t];
            d && r.push(We2(d, n, s, o, i));
          } else {
            let u = l();
            r.push(() => u.then((d) => {
              if (!d)
                return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));
              const f = zl(d) ? d.default : d;
              o.components[i] = f;
              const p = (f.__vccOpts || f)[t];
              return p && We2(p, n, s, o, i)();
            }));
          }
      }
    return r;
  }
  function Hc(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function nr(e) {
    const t = Le2(wn), n = Le2(_o), s = ye(() => t.resolve(Ve(e.to))), r = ye(() => {
      const { matched: u } = s.value, { length: d } = u, f = u[d - 1], h = n.matched;
      if (!f || !h.length)
        return -1;
      const p = h.findIndex(xt2.bind(null, f));
      if (p > -1)
        return p;
      const E = sr(u[d - 2]);
      return d > 1 && sr(f) === E && h[h.length - 1].path !== E ? h.findIndex(xt2.bind(null, u[d - 2])) : p;
    }), o = ye(() => r.value > -1 && kc(n.params, s.value.params)), i = ye(() => r.value > -1 && r.value === n.matched.length - 1 && io(n.params, s.value.params));
    function l(u = {}) {
      return Bc(u) ? t[Ve(e.replace) ? "replace" : "push"](Ve(e.to)).catch($t2) : Promise.resolve();
    }
    return { route: s, href: ye(() => s.value.href), isActive: o, isExactActive: i, navigate: l };
  }
  function Bc(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t))
          return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function kc(e, t) {
    for (const n in t) {
      const s = t[n], r = e[n];
      if (typeof s == "string") {
        if (s !== r)
          return false;
      } else if (!Ce2(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
        return false;
    }
    return true;
  }
  function sr(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  function or(e, t) {
    if (!e)
      return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  function Kc(e) {
    const t = yc(e.routes, e), n = e.parseQuery || Lc, s = e.stringifyQuery || er, r = e.history, o = St2(), i = St2(), l = St2(), u = hi(Ke2);
    let d = Ke2;
    at2 && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const f = In.bind(null, (_) => "" + _), h = In.bind(null, Fc), p = In.bind(null, un);
    function E(_, O) {
      let R, S;
      return co(_) ? (R = t.getRecordMatcher(_), S = O) : S = _, t.addRoute(S, R);
    }
    function C(_) {
      const O = t.getRecordMatcher(_);
      O && t.removeRoute(O);
    }
    function I() {
      return t.getRoutes().map((_) => _.record);
    }
    function H(_) {
      return !!t.getRecordMatcher(_);
    }
    function T(_, O) {
      if (O = q({}, O || u.value), typeof _ == "string") {
        const c = Sn(n, _, O.path), a = t.resolve({ path: c.path }, O), m = r.createHref(c.fullPath);
        return q(c, a, { params: p(a.params), hash: un(c.hash), redirectedFrom: void 0, href: m });
      }
      let R;
      if ("path" in _)
        R = q({}, _, { path: Sn(n, _.path, O.path).path });
      else {
        const c = q({}, _.params);
        for (const a in c)
          c[a] == null && delete c[a];
        R = q({}, _, { params: h(_.params) }), O.params = h(O.params);
      }
      const S = t.resolve(R, O), U = _.hash || "";
      S.params = f(p(S.params));
      const G = Vl(s, q({}, _, { hash: Sc(U), path: S.path })), B = r.createHref(G);
      return q({ fullPath: G, hash: U, query: s === er ? $c(_.query) : _.query || {} }, S, { redirectedFrom: void 0, href: B });
    }
    function j(_) {
      return typeof _ == "string" ? Sn(n, _, u.value.path) : q({}, _);
    }
    function F(_, O) {
      if (d !== _)
        return wt2(8, { from: O, to: _ });
    }
    function W(_) {
      return Ae2(_);
    }
    function oe(_) {
      return W(q(j(_), { replace: true }));
    }
    function me2(_) {
      const O = _.matched[_.matched.length - 1];
      if (O && O.redirect) {
        const { redirect: R } = O;
        let S = typeof R == "function" ? R(_) : R;
        return typeof S == "string" && (S = S.includes("?") || S.includes("#") ? S = j(S) : { path: S }, S.params = {}), q({ query: _.query, hash: _.hash, params: "path" in S ? {} : _.params }, S);
      }
    }
    function Ae2(_, O) {
      const R = d = T(_), S = u.value, U = _.state, G = _.force, B = _.replace === true, c = me2(R);
      if (c)
        return Ae2(q(j(c), { state: typeof c == "object" ? q({}, U, c.state) : U, force: G, replace: B }), O || R);
      const a = R;
      a.redirectedFrom = O;
      let m;
      return !G && Ql(s, S, R) && (m = wt2(16, { to: a, from: S }), Ze2(S, S, true, false)), (m ? Promise.resolve(m) : it2(a, S)).catch((g) => je2(g) ? je2(g, 2) ? g : be2(g) : Y(g, a, S)).then((g) => {
        if (g) {
          if (je2(g, 2))
            return Ae2(q({ replace: B }, j(g.to), { state: typeof g.to == "object" ? q({}, U, g.to.state) : U, force: G }), O || a);
        } else
          g = ke2(a, S, true, B, U);
        return Te2(a, S, g), g;
      });
    }
    function $e2(_, O) {
      const R = F(_, O);
      return R ? Promise.reject(R) : Promise.resolve();
    }
    function it2(_, O) {
      let R;
      const [S, U, G] = zc(_, O);
      R = Mn(S.reverse(), "beforeRouteLeave", _, O);
      for (const c of S)
        c.leaveGuards.forEach((a) => {
          R.push(We2(a, _, O));
        });
      const B = $e2.bind(null, _, O);
      return R.push(B), ft2(R).then(() => {
        R = [];
        for (const c of o.list())
          R.push(We2(c, _, O));
        return R.push(B), ft2(R);
      }).then(() => {
        R = Mn(U, "beforeRouteUpdate", _, O);
        for (const c of U)
          c.updateGuards.forEach((a) => {
            R.push(We2(a, _, O));
          });
        return R.push(B), ft2(R);
      }).then(() => {
        R = [];
        for (const c of _.matched)
          if (c.beforeEnter && !O.matched.includes(c))
            if (Ce2(c.beforeEnter))
              for (const a of c.beforeEnter)
                R.push(We2(a, _, O));
            else
              R.push(We2(c.beforeEnter, _, O));
        return R.push(B), ft2(R);
      }).then(() => (_.matched.forEach((c) => c.enterCallbacks = {}), R = Mn(G, "beforeRouteEnter", _, O), R.push(B), ft2(R))).then(() => {
        R = [];
        for (const c of i.list())
          R.push(We2(c, _, O));
        return R.push(B), ft2(R);
      }).catch((c) => je2(c, 8) ? c : Promise.reject(c));
    }
    function Te2(_, O, R) {
      for (const S of l.list())
        S(_, O, R);
    }
    function ke2(_, O, R, S, U) {
      const G = F(_, O);
      if (G)
        return G;
      const B = O === Ke2, c = at2 ? history.state : {};
      R && (S || B ? r.replace(_.fullPath, q({ scroll: B && c && c.scroll }, U)) : r.push(_.fullPath, U)), u.value = _, Ze2(_, O, R, B), be2();
    }
    let Ie2;
    function lt2() {
      Ie2 || (Ie2 = r.listen((_, O, R) => {
        if (!Wt2.listening)
          return;
        const S = T(_), U = me2(S);
        if (U) {
          Ae2(q(U, { replace: true }), S).catch($t2);
          return;
        }
        d = S;
        const G = u.value;
        at2 && nc(qs(G.fullPath, R.delta), xn()), it2(S, G).catch((B) => je2(B, 12) ? B : je2(B, 2) ? (Ae2(B.to, S).then((c) => {
          je2(c, 20) && !R.delta && R.type === zt2.pop && r.go(-1, false);
        }).catch($t2), Promise.reject()) : (R.delta && r.go(-R.delta, false), Y(B, S, G))).then((B) => {
          B = B || ke2(S, G, false), B && (R.delta && !je2(B, 8) ? r.go(-R.delta, false) : R.type === zt2.pop && je2(B, 20) && r.go(-1, false)), Te2(S, G, B);
        }).catch($t2);
      }));
    }
    let Xe2 = St2(), At2 = St2(), ee2;
    function Y(_, O, R) {
      be2(_);
      const S = At2.list();
      return S.length ? S.forEach((U) => U(_, O, R)) : console.error(_), Promise.reject(_);
    }
    function V() {
      return ee2 && u.value !== Ke2 ? Promise.resolve() : new Promise((_, O) => {
        Xe2.add([_, O]);
      });
    }
    function be2(_) {
      return ee2 || (ee2 = !_, lt2(), Xe2.list().forEach(([O, R]) => _ ? R(_) : O()), Xe2.reset()), _;
    }
    function Ze2(_, O, R, S) {
      const { scrollBehavior: U } = e;
      if (!at2 || !U)
        return Promise.resolve();
      const G = !R && sc(qs(_.fullPath, 0)) || (S || !R) && history.state && history.state.scroll || null;
      return Nr().then(() => U(_, O, G)).then((B) => B && tc(B)).catch((B) => Y(B, _, O));
    }
    const Ee2 = (_) => r.go(_);
    let ae;
    const ct2 = /* @__PURE__ */ new Set(), Wt2 = { currentRoute: u, listening: true, addRoute: E, removeRoute: C, hasRoute: H, getRoutes: I, resolve: T, options: e, push: W, replace: oe, go: Ee2, back: () => Ee2(-1), forward: () => Ee2(1), beforeEach: o.add, beforeResolve: i.add, afterEach: l.add, onError: At2.add, isReady: V, install(_) {
      const O = this;
      _.component("RouterLink", yo), _.component("RouterView", bo), _.config.globalProperties.$router = O, Object.defineProperty(_.config.globalProperties, "$route", { enumerable: true, get: () => Ve(u) }), at2 && !ae && u.value === Ke2 && (ae = true, W(r.location).catch((U) => {
      }));
      const R = {};
      for (const U in Ke2)
        R[U] = ye(() => u.value[U]);
      _.provide(wn, O), _.provide(_o, Ct2(R)), _.provide(Vn, u);
      const S = _.unmount;
      ct2.add(_), _.unmount = function() {
        ct2.delete(_), ct2.size < 1 && (d = Ke2, Ie2 && Ie2(), Ie2 = null, u.value = Ke2, ae = false, ee2 = false), S();
      };
    } };
    return Wt2;
  }
  function ft2(e) {
    return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
  }
  function zc(e, t) {
    const n = [], s = [], r = [], o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
      const l = t.matched[i];
      l && (e.matched.find((d) => xt2(d, l)) ? s.push(l) : n.push(l));
      const u = e.matched[i];
      u && (t.matched.find((d) => xt2(d, u)) || r.push(u));
    }
    return [n, s, r];
  }
  function Wc() {
    return Le2(wn);
  }
  var vo, xo, wo, Po, Oo, Co, cr, X2, ht2, Pe2, Ao, To, dn, Yn, fe, Jn, Io, K2, $, pt2, ur, D, ne, Xn, Z2, fr, ar, hn, So, dr, Zn, Zt2, pn, Mo, yt2, No, Rt2, hr, Rn, Ht2, Pn, sn, Fo, ys, Lo, xe2, $o, Gn, pr, mr, Do, Bo, Nn, Mt2, Ye2, Fn, we2, rt2, Ln, es, qe2, gr, ko, yr, Uo, Ko, zo, vs, Vo, Qo, Er, Zo, Go, ns, mn, ti, ni, si, ri, oi, ii, li, vr, xr, wr, ci, Dt2, os, pi, mi, Sr, gi, Bt2, jn, ie, Fe2, gt2, He2, nt2, Mr, is, kt2, xi, he2, yn, Ri, Pi, Ai, Xt2, Nt2, Ur, Be2, Fi, Li, $i, ji, Hi, zr, Di, Bi, ki, Ki, Hn, Ft2, Cn, Wi, Dn, Qi, Yr, us, Gi, Jr, Xr, el, tl, nl, de2, ll, _e, En, Je2, tn, Lt2, Re2, Ut2, vn, to, nn, re, dl, hl, se2, vt2, ot2, Kt2, $s, ye, El, vl, xl, wl, st2, js, Rl, Hs, Ds, An, Bs, ks, Tn, Fl, Ll, Us, Hl, Bl, Ks, Ul, at2, q, $t2, Ce2, Wl, ql, zt2, jt2, Zl, xn, Wn, rc, Ke2, uo, Qs, Ys, uc, fc, pc, mc, ao, xc, wc, Rc, Pc, ho, Oc, Cc, po, Ac, mo, Tc, go, Ic, jc, tr, wn, _o, Vn, Dc, yo, rr, Uc, bo, qc, Vc, Qc, Yc, Jc, Xc, Zc, Gc, ir, ce, eu, Eo;
  var init_index_2b14c3c3 = __esm({
    "tmp/assets/index-2b14c3c3.js"() {
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload"))
          return;
        for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
          s(r);
        new MutationObserver((r) => {
          for (const o of r)
            if (o.type === "childList")
              for (const i of o.addedNodes)
                i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
        }).observe(document, { childList: true, subtree: true });
        function n(r) {
          const o = {};
          return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function s(r) {
          if (r.ep)
            return;
          r.ep = true;
          const o = n(r);
          fetch(r.href, o);
        }
      })();
      vo = /;(?![^(]*\))/g;
      xo = /:([^]+)/;
      wo = /\/\*.*?\*\//gs;
      Po = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
      Oo = Qn(Po);
      Co = (e) => ne(e) ? e : e == null ? "" : $(e) || Z2(e) && (e.toString === ar || !D(e.toString)) ? JSON.stringify(e, cr, 2) : String(e);
      cr = (e, t) => t && t.__v_isRef ? cr(e, t.value) : pt2(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {}) } : ur(t) ? { [`Set(${t.size})`]: [...t.values()] } : Z2(t) && !$(t) && !dr(t) ? String(t) : t;
      X2 = {};
      ht2 = [];
      Pe2 = () => {
      };
      Ao = () => false;
      To = /^on[^a-z]/;
      dn = (e) => To.test(e);
      Yn = (e) => e.startsWith("onUpdate:");
      fe = Object.assign;
      Jn = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      };
      Io = Object.prototype.hasOwnProperty;
      K2 = (e, t) => Io.call(e, t);
      $ = Array.isArray;
      pt2 = (e) => hn(e) === "[object Map]";
      ur = (e) => hn(e) === "[object Set]";
      D = (e) => typeof e == "function";
      ne = (e) => typeof e == "string";
      Xn = (e) => typeof e == "symbol";
      Z2 = (e) => e !== null && typeof e == "object";
      fr = (e) => Z2(e) && D(e.then) && D(e.catch);
      ar = Object.prototype.toString;
      hn = (e) => ar.call(e);
      So = (e) => hn(e).slice(8, -1);
      dr = (e) => hn(e) === "[object Object]";
      Zn = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
      Zt2 = Qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
      pn = (e) => {
        const t = /* @__PURE__ */ Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      };
      Mo = /-(\w)/g;
      yt2 = pn((e) => e.replace(Mo, (t, n) => n ? n.toUpperCase() : ""));
      No = /\B([A-Z])/g;
      Rt2 = pn((e) => e.replace(No, "-$1").toLowerCase());
      hr = pn((e) => e.charAt(0).toUpperCase() + e.slice(1));
      Rn = pn((e) => e ? `on${hr(e)}` : "");
      Ht2 = (e, t) => !Object.is(e, t);
      Pn = (e, t) => {
        for (let n = 0; n < e.length; n++)
          e[n](t);
      };
      sn = (e, t, n) => {
        Object.defineProperty(e, t, { configurable: true, enumerable: false, value: n });
      };
      Fo = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };
      Lo = () => ys || (ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
      $o = class {
        constructor(t = false) {
          this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this.parent = xe2, !t && xe2 && (this.index = (xe2.scopes || (xe2.scopes = [])).push(this) - 1);
        }
        get active() {
          return this._active;
        }
        run(t) {
          if (this._active) {
            const n = xe2;
            try {
              return xe2 = this, t();
            } finally {
              xe2 = n;
            }
          }
        }
        on() {
          xe2 = this;
        }
        off() {
          xe2 = this.parent;
        }
        stop(t) {
          if (this._active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++)
              this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++)
              this.cleanups[n]();
            if (this.scopes)
              for (n = 0, s = this.scopes.length; n < s; n++)
                this.scopes[n].stop(true);
            if (!this.detached && this.parent && !t) {
              const r = this.parent.scopes.pop();
              r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
            }
            this.parent = void 0, this._active = false;
          }
        }
      };
      Gn = (e) => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t;
      };
      pr = (e) => (e.w & Ye2) > 0;
      mr = (e) => (e.n & Ye2) > 0;
      Do = ({ deps: e }) => {
        if (e.length)
          for (let t = 0; t < e.length; t++)
            e[t].w |= Ye2;
      };
      Bo = (e) => {
        const { deps: t } = e;
        if (t.length) {
          let n = 0;
          for (let s = 0; s < t.length; s++) {
            const r = t[s];
            pr(r) && !mr(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ye2, r.n &= ~Ye2;
          }
          t.length = n;
        }
      };
      Nn = /* @__PURE__ */ new WeakMap();
      Mt2 = 0;
      Ye2 = 1;
      Fn = 30;
      rt2 = Symbol("");
      Ln = Symbol("");
      es = class {
        constructor(t, n = null, s) {
          this.fn = t, this.scheduler = n, this.active = true, this.deps = [], this.parent = void 0, jo(this, s);
        }
        run() {
          if (!this.active)
            return this.fn();
          let t = we2, n = qe2;
          for (; t; ) {
            if (t === this)
              return;
            t = t.parent;
          }
          try {
            return this.parent = we2, we2 = this, qe2 = true, Ye2 = 1 << ++Mt2, Mt2 <= Fn ? Do(this) : bs(this), this.fn();
          } finally {
            Mt2 <= Fn && Bo(this), Ye2 = 1 << --Mt2, we2 = this.parent, qe2 = n, this.parent = void 0, this.deferStop && this.stop();
          }
        }
        stop() {
          we2 === this ? this.deferStop = true : this.active && (bs(this), this.onStop && this.onStop(), this.active = false);
        }
      };
      qe2 = true;
      gr = [];
      ko = Qn("__proto__,__v_isRef,__isVue");
      yr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xn));
      Uo = ts();
      Ko = ts(false, true);
      zo = ts(true);
      vs = Wo();
      Vo = br();
      Qo = br(true);
      Er = { get: Uo, set: Vo, deleteProperty: Yo, has: Jo, ownKeys: Xo };
      Zo = { get: zo, set(e, t) {
        return true;
      }, deleteProperty(e, t) {
        return true;
      } };
      Go = fe({}, Er, { get: Ko, set: Qo });
      ns = (e) => e;
      mn = (e) => Reflect.getPrototypeOf(e);
      [ti, ni, si, ri] = ei();
      oi = { get: ss(false, false) };
      ii = { get: ss(false, true) };
      li = { get: ss(true, false) };
      vr = /* @__PURE__ */ new WeakMap();
      xr = /* @__PURE__ */ new WeakMap();
      wr = /* @__PURE__ */ new WeakMap();
      ci = /* @__PURE__ */ new WeakMap();
      Dt2 = (e) => Z2(e) ? Ct2(e) : e;
      os = (e) => Z2(e) ? Rr(e) : e;
      pi = class {
        constructor(t, n) {
          this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = true, this._rawValue = n ? t : z(t), this._value = n ? t : Dt2(t);
        }
        get value() {
          return Cr(this), this._value;
        }
        set value(t) {
          const n = this.__v_isShallow || rn(t) || bt2(t);
          t = n ? t : z(t), Ht2(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Dt2(t), Ar(this));
        }
      };
      mi = { get: (e, t, n) => Ve(Reflect.get(e, t, n)), set: (e, t, n, s) => {
        const r = e[t];
        return le(r) && !le(n) ? (r.value = n, true) : Reflect.set(e, t, n, s);
      } };
      gi = class {
        constructor(t, n, s, r) {
          this._setter = n, this.dep = void 0, this.__v_isRef = true, this[Sr] = false, this._dirty = true, this.effect = new es(t, () => {
            this._dirty || (this._dirty = true, Ar(this));
          }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
        }
        get value() {
          const t = z(this);
          return Cr(t), (t._dirty || !t._cacheable) && (t._dirty = false, t._value = t.effect.run()), t._value;
        }
        set value(t) {
          this._setter(t);
        }
      };
      Sr = "__v_isReadonly";
      Bt2 = false;
      jn = false;
      ie = [];
      Fe2 = 0;
      gt2 = [];
      He2 = null;
      nt2 = 0;
      Mr = Promise.resolve();
      is = null;
      kt2 = (e) => e.id == null ? 1 / 0 : e.id;
      xi = (e, t) => {
        const n = kt2(e) - kt2(t);
        if (n === 0) {
          if (e.pre && !t.pre)
            return -1;
          if (t.pre && !e.pre)
            return 1;
        }
        return n;
      };
      he2 = null;
      yn = null;
      Ri = (e) => {
        let t;
        for (const n in e)
          (n === "class" || n === "style" || dn(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
      };
      Pi = (e, t) => {
        const n = {};
        for (const s in e)
          (!Yn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
        return n;
      };
      Ai = (e) => e.__isSuspense;
      Xt2 = {};
      Nt2 = (e) => !!e.type.__asyncLoader;
      Ur = (e) => e.type.__isKeepAlive;
      Be2 = (e) => (t, n = se2) => (!Kt2 || e === "sp") && bn(e, (...s) => t(...s), n);
      Fi = Be2("bm");
      Li = Be2("m");
      $i = Be2("bu");
      ji = Be2("u");
      Hi = Be2("bum");
      zr = Be2("um");
      Di = Be2("sp");
      Bi = Be2("rtg");
      ki = Be2("rtc");
      Ki = Symbol();
      Hn = (e) => e ? so(e) ? hs(e) || e.proxy : Hn(e.parent) : null;
      Ft2 = fe(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Hn(e.parent), $root: (e) => Hn(e.root), $emit: (e) => e.emit, $options: (e) => cs(e), $forceUpdate: (e) => e.f || (e.f = () => ls(e.update)), $nextTick: (e) => e.n || (e.n = Nr.bind(e.proxy)), $watch: (e) => Ii.bind(e) });
      Cn = (e, t) => e !== X2 && !e.__isScriptSetup && K2(e, t);
      Wi = { get({ _: e }, t) {
        const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: u } = e;
        let d;
        if (t[0] !== "$") {
          const E = i[t];
          if (E !== void 0)
            switch (E) {
              case 1:
                return s[t];
              case 2:
                return r[t];
              case 4:
                return n[t];
              case 3:
                return o[t];
            }
          else {
            if (Cn(s, t))
              return i[t] = 1, s[t];
            if (r !== X2 && K2(r, t))
              return i[t] = 2, r[t];
            if ((d = e.propsOptions[0]) && K2(d, t))
              return i[t] = 3, o[t];
            if (n !== X2 && K2(n, t))
              return i[t] = 4, n[t];
            Dn && (i[t] = 0);
          }
        }
        const f = Ft2[t];
        let h, p;
        if (f)
          return t === "$attrs" && pe(e, "get", t), f(e);
        if ((h = l.__cssModules) && (h = h[t]))
          return h;
        if (n !== X2 && K2(n, t))
          return i[t] = 4, n[t];
        if (p = u.config.globalProperties, K2(p, t))
          return p[t];
      }, set({ _: e }, t, n) {
        const { data: s, setupState: r, ctx: o } = e;
        return Cn(r, t) ? (r[t] = n, true) : s !== X2 && K2(s, t) ? (s[t] = n, true) : K2(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
      }, has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
        let l;
        return !!n[i] || e !== X2 && K2(e, i) || Cn(t, i) || (l = o[0]) && K2(l, i) || K2(s, i) || K2(Ft2, i) || K2(r.config.globalProperties, i);
      }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : K2(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
      } };
      Dn = true;
      Qi = { data: Ts, props: tt2, emits: tt2, methods: tt2, computed: tt2, beforeCreate: ue2, created: ue2, beforeMount: ue2, mounted: ue2, beforeUpdate: ue2, updated: ue2, beforeDestroy: ue2, beforeUnmount: ue2, destroyed: ue2, unmounted: ue2, activated: ue2, deactivated: ue2, errorCaptured: ue2, serverPrefetch: ue2, components: tt2, directives: tt2, watch: Ji, provide: Ts, inject: Yi };
      Yr = (e) => e[0] === "_" || e === "$stable";
      us = (e) => $(e) ? e.map(Ne2) : [Ne2(e)];
      Gi = (e, t, n) => {
        if (t._n)
          return t;
        const s = Hr((...r) => us(t(...r)), n);
        return s._c = false, s;
      };
      Jr = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
          if (Yr(r))
            continue;
          const o = e[r];
          if (D(o))
            t[r] = Gi(r, o, s);
          else if (o != null) {
            const i = us(o);
            t[r] = () => i;
          }
        }
      };
      Xr = (e, t) => {
        const n = us(t);
        e.slots.default = () => n;
      };
      el = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
          const n = t._;
          n ? (e.slots = z(t), sn(t, "_", n)) : Jr(t, e.slots = {});
        } else
          e.slots = {}, t && Xr(e, t);
        sn(e.slots, vn, 1);
      };
      tl = (e, t, n) => {
        const { vnode: s, slots: r } = e;
        let o = true, i = X2;
        if (s.shapeFlag & 32) {
          const l = t._;
          l ? n && l === 1 ? o = false : (fe(r, t), !n && l === 1 && delete r._) : (o = !t.$stable, Jr(t, r)), i = t;
        } else
          t && (Xr(e, t), i = { default: 1 });
        if (o)
          for (const l in r)
            !Yr(l) && !(l in i) && delete r[l];
      };
      nl = 0;
      de2 = Ti;
      ll = (e) => e.__isTeleport;
      _e = Symbol(void 0);
      En = Symbol(void 0);
      Je2 = Symbol(void 0);
      tn = Symbol(void 0);
      Lt2 = [];
      Re2 = null;
      Ut2 = 1;
      vn = "__vInternal";
      to = ({ key: e }) => e ?? null;
      nn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ne(e) || le(e) || D(e) ? { i: he2, r: e, k: t, f: !!n } : e : null;
      re = ul;
      dl = Zr();
      hl = 0;
      se2 = null;
      vt2 = (e) => {
        se2 = e, e.scope.on();
      };
      ot2 = () => {
        se2 && se2.scope.off(), se2 = null;
      };
      Kt2 = false;
      ye = (e, t) => _i(e, t, Kt2);
      El = Symbol("");
      vl = () => Le2(El);
      xl = "3.2.47";
      wl = "http://www.w3.org/2000/svg";
      st2 = typeof document < "u" ? document : null;
      js = st2 && st2.createElement("template");
      Rl = { insert: (e, t, n) => {
        t.insertBefore(e, n || null);
      }, remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      }, createElement: (e, t, n, s) => {
        const r = t ? st2.createElementNS(wl, e) : st2.createElement(e, n ? { is: n } : void 0);
        return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
      }, createText: (e) => st2.createTextNode(e), createComment: (e) => st2.createComment(e), setText: (e, t) => {
        e.nodeValue = t;
      }, setElementText: (e, t) => {
        e.textContent = t;
      }, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => st2.querySelector(e), setScopeId(e, t) {
        e.setAttribute(t, "");
      }, insertStaticContent(e, t, n, s, r, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (r && (r === o || r.nextSibling))
          for (; t.insertBefore(r.cloneNode(true), n), !(r === o || !(r = r.nextSibling)); )
            ;
        else {
          js.innerHTML = s ? `<svg>${e}</svg>` : e;
          const l = js.content;
          if (s) {
            const u = l.firstChild;
            for (; u.firstChild; )
              l.appendChild(u.firstChild);
            l.removeChild(u);
          }
          t.insertBefore(l, n);
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
      } };
      Hs = /\s*!important$/;
      Ds = ["Webkit", "Moz", "ms"];
      An = {};
      Bs = "http://www.w3.org/1999/xlink";
      ks = /(?:Once|Passive|Capture)$/;
      Tn = 0;
      Fl = Promise.resolve();
      Ll = () => Tn || (Fl.then(() => Tn = 0), Tn = Date.now());
      Us = /^on[a-z]/;
      Hl = (e, t, n, s, r = false, o, i, l, u) => {
        t === "class" ? Pl(e, s, r) : t === "style" ? Ol(e, n, s) : dn(t) ? Yn(t) || Ml(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Dl(e, t, s, r)) ? Tl(e, t, s, o, i, l, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Al(e, t, s, r));
      };
      Bl = fe({ patchProp: Hl }, Rl);
      Ul = (...e) => {
        const t = kl().createApp(...e), { mount: n } = t;
        return t.mount = (s) => {
          const r = Kl(s);
          if (!r)
            return;
          const o = t._component;
          !D(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
          const i = n(r, false, r instanceof SVGElement);
          return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
        }, t;
      };
      at2 = typeof window < "u";
      q = Object.assign;
      $t2 = () => {
      };
      Ce2 = Array.isArray;
      Wl = /\/$/;
      ql = (e) => e.replace(Wl, "");
      (function(e) {
        e.pop = "pop", e.push = "push";
      })(zt2 || (zt2 = {}));
      (function(e) {
        e.back = "back", e.forward = "forward", e.unknown = "";
      })(jt2 || (jt2 = {}));
      Zl = /^[^#]+#/;
      xn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
      Wn = /* @__PURE__ */ new Map();
      rc = () => location.protocol + "//" + location.host;
      Ke2 = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
      uo = Symbol("");
      (function(e) {
        e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
      })(Qs || (Qs = {}));
      Ys = "[^/]+?";
      uc = { sensitive: false, strict: false, start: true, end: true };
      fc = /[.+*?^${}()[\]/\\]/g;
      pc = { type: 0, value: "" };
      mc = /[a-zA-Z0-9_]/;
      ao = /#/g;
      xc = /&/g;
      wc = /\//g;
      Rc = /=/g;
      Pc = /\?/g;
      ho = /\+/g;
      Oc = /%5B/g;
      Cc = /%5D/g;
      po = /%5E/g;
      Ac = /%60/g;
      mo = /%7B/g;
      Tc = /%7C/g;
      go = /%7D/g;
      Ic = /%20/g;
      jc = Symbol("");
      tr = Symbol("");
      wn = Symbol("");
      _o = Symbol("");
      Vn = Symbol("");
      Dc = kr({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: nr, setup(e, { slots: t }) {
        const n = Ct2(nr(e)), { options: s } = Le2(wn), r = ye(() => ({ [rr(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive, [rr(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
        return () => {
          const o = t.default && t.default(n);
          return e.custom ? o : oo("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: r.value }, o);
        };
      } });
      yo = Dc;
      rr = (e, t, n) => e ?? t ?? n;
      Uc = kr({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
        const s = Le2(Vn), r = ye(() => e.route || s.value), o = Le2(tr, 0), i = ye(() => {
          let d = Ve(o);
          const { matched: f } = r.value;
          let h;
          for (; (h = f[d]) && !h.components; )
            d++;
          return d;
        }), l = ye(() => r.value.matched[i.value]);
        Gt2(tr, ye(() => i.value + 1)), Gt2(jc, l), Gt2(Vn, r);
        const u = di();
        return en(() => [u.value, l.value, e.name], ([d, f, h], [p, E, C]) => {
          f && (f.instances[h] = d, E && E !== f && d && d === p && (f.leaveGuards.size || (f.leaveGuards = E.leaveGuards), f.updateGuards.size || (f.updateGuards = E.updateGuards))), d && f && (!E || !xt2(f, E) || !p) && (f.enterCallbacks[h] || []).forEach((I) => I(d));
        }, { flush: "post" }), () => {
          const d = r.value, f = e.name, h = l.value, p = h && h.components[f];
          if (!p)
            return or(n.default, { Component: p, route: d });
          const E = h.props[f], C = E ? E === true ? d.params : typeof E == "function" ? E(d) : E : null, H = oo(p, q({}, C, t, { onVnodeUnmounted: (T) => {
            T.component.isUnmounted && (h.instances[f] = null);
          }, ref: u }));
          return or(n.default, { Component: H, route: d }) || H;
        };
      } });
      bo = Uc;
      qc = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [s, r] of t)
          n[s] = r;
        return n;
      };
      Vc = { class: "nav" };
      Qc = { __name: "NavMenu", setup(e) {
        const t = Wc(), n = Ct2(t.getRoutes());
        return (s, r) => (_t(), Kn("div", Vc, [(_t(true), Kn(_e, null, zi(n, (o) => (_t(), fs(Ve(yo), { class: "nav-item", key: o.name, to: o.path, "active-class": "active" }, { default: Hr(() => [no(Co(o.name), 1)]), _: 2 }, 1032, ["to"]))), 128))]));
      } };
      Yc = qc(Qc, [["__scopeId", "data-v-f66a8343"]]);
      Jc = { class: "content-container" };
      Xc = { __name: "App", setup(e) {
        return (t, n) => (_t(), Kn(_e, null, [re(Yc), as("div", Jc, [re(Ve(bo))])], 64));
      } };
      Zc = "modulepreload";
      Gc = function(e) {
        return "/" + e;
      };
      ir = {};
      ce = function(t, n, s) {
        if (!n || n.length === 0)
          return t();
        const r = document.getElementsByTagName("link");
        return Promise.all(n.map((o) => {
          if (o = Gc(o), o in ir)
            return;
          ir[o] = true;
          const i = o.endsWith(".css"), l = i ? '[rel="stylesheet"]' : "";
          if (!!s)
            for (let f = r.length - 1; f >= 0; f--) {
              const h = r[f];
              if (h.href === o && (!i || h.rel === "stylesheet"))
                return;
            }
          else if (document.querySelector(`link[href="${o}"]${l}`))
            return;
          const d = document.createElement("link");
          if (d.rel = i ? "stylesheet" : Zc, i || (d.as = "script", d.crossOrigin = ""), d.href = o, document.head.appendChild(d), i)
            return new Promise((f, h) => {
              d.addEventListener("load", f), d.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${o}`)));
            });
        })).then(() => t());
      };
      eu = Kc({ history: lc("/"), routes: [{ path: "/", name: "home", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/form", name: "form", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu1", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu2", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu3", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu4", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu5", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu6", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu7", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu8", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu9", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu10", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu11", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu12", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }, { path: "/", name: "menu13", component: () => ce(() => Promise.resolve().then(() => (init_DemoForm_f3d72e82(), DemoForm_f3d72e82_exports)), ["assets/DemoForm-f3d72e82.js", "assets/DemoForm-502525d7.css"]) }] });
      Eo = Ul(Xc);
      Eo.use(eu);
      Eo.mount("#app");
    }
  });
  init_index_2b14c3c3();
})();
/*!
* vue-router v4.1.6
* (c) 2022 Eduardo San Martin Morote
* @license MIT
*/
