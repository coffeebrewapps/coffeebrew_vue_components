import { ref as y, computed as u, onMounted as W, openBlock as n, createElementBlock as o, normalizeClass as h, unref as s, createElementVNode as t, renderSlot as I, createTextVNode as q, toDisplayString as p, createBlock as ae, isRef as ce, withCtx as G, createCommentVNode as F, createVNode as le, Fragment as O, renderList as L, pushScopeId as K, popScopeId as Q, normalizeProps as P, guardReactiveProps as A } from "vue";
const Y = (e, d) => {
  const a = e.__vccOpts || e;
  for (const [l, i] of d)
    a[l] = i;
  return a;
}, re = { class: "menu-bar" }, ve = { class: "container" }, fe = { class: "heading" }, pe = { class: "body" }, he = { class: "actions" }, _e = {
  __name: "TDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    },
    title: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const a = e, l = y("dialog"), i = u(() => a.modelValue ? "dialog show" : "dialog hide");
    function b() {
      d("update:modelValue", !1);
    }
    return W(() => {
      l.value.style.width = `${a.width}px`, l.value.style.height = `${a.height}px`, l.value.style.top = `calc((100vh - ${l.value.style.height}) / 2)`, l.value.style.left = `calc((100vw - ${l.value.style.width}) / 2)`;
    }), (_, S) => (n(), o("div", {
      class: h(s(i)),
      ref_key: "dialog",
      ref: l
    }, [
      t("div", re, [
        I(_.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: S[0] || (S[0] = (k) => b())
          })
        ], !0)
      ]),
      t("div", ve, [
        t("div", fe, [
          I(_.$slots, "heading", {}, () => [
            q(p(e.title), 1)
          ], !0)
        ]),
        t("div", pe, [
          I(_.$slots, "body", {}, void 0, !0)
        ]),
        t("div", he, [
          I(_.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, ie = /* @__PURE__ */ Y(_e, [["__scopeId", "data-v-295738d8"]]), ge = { class: "text" }, $l = {
  __name: "TAlert",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const a = e, l = y("dialog"), i = u({
      get: () => a.modelValue,
      set: (b) => {
        d("update:modelValue", b);
      }
    });
    return (b, _) => (n(), ae(ie, {
      ref_key: "dialog",
      ref: l,
      modelValue: s(i),
      "onUpdate:modelValue": _[0] || (_[0] = (S) => ce(i) ? i.value = S : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: G(() => [
        t("div", ge, p(e.content), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
};
const me = { key: 0 }, ye = {
  __name: "TButton",
  props: {
    buttonType: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "md"
    },
    value: {
      type: String,
      default: "Button"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: {
    click: null
  },
  setup(e, { emit: d }) {
    const a = e, l = u(() => `button ${a.buttonType} ${a.size}`.trim()), i = u(() => `${a.icon} fa-lg`.trim());
    return (b, _) => (n(), o("div", {
      class: h(s(l)),
      onClick: _[0] || (_[0] = (S) => b.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), o("span", me, p(e.value), 1)) : F("", !0),
      t("i", {
        class: h(s(i))
      }, null, 2)
    ], 2));
  }
}, ue = /* @__PURE__ */ Y(ye, [["__scopeId", "data-v-c26a9562"]]);
const $e = { class: "primary-text" }, be = { class: "secondary-text" }, ke = {
  __name: "TConfirmDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    },
    title: {
      type: String,
      default: ""
    },
    primaryText: {
      type: String,
      default: ""
    },
    secondaryText: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup(e, { emit: d }) {
    const a = e, l = y("dialog"), i = u({
      get: () => a.modelValue,
      set: (S) => {
        d("update:modelValue", S);
      }
    });
    function b() {
      d("update:modelValue", !1), d("confirm");
    }
    function _() {
      d("update:modelValue", !1), d("cancel");
    }
    return (S, k) => (n(), ae(ie, {
      ref_key: "dialog",
      ref: l,
      modelValue: s(i),
      "onUpdate:modelValue": k[2] || (k[2] = (g) => ce(i) ? i.value = g : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: G(() => [
        t("div", $e, p(e.primaryText), 1),
        t("div", be, p(e.secondaryText), 1)
      ]),
      actions: G(() => [
        le(ue, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: k[0] || (k[0] = (g) => b())
        }),
        le(ue, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: k[1] || (k[1] = (g) => _())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, bl = /* @__PURE__ */ Y(ke, [["__scopeId", "data-v-87937dbc"]]);
const Se = { class: "input-label" }, Ce = {
  key: 0,
  class: "input-error"
}, we = {
  __name: "TCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: "Input"
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const a = e, l = y(a.modelValue), i = u(() => a.label.length <= 10 ? "input-control sm" : a.label.length > 10 && a.label.length <= 30 ? "input-control md" : "input-control lg"), b = u(() => l.value ? "input-field checked" : "input-field");
    function _() {
      l.value = !l.value, d("update:modelValue", l.value);
    }
    return (S, k) => (n(), o(O, null, [
      t("div", {
        class: h(s(i)),
        onClick: _
      }, [
        t("div", {
          class: h(s(b))
        }, null, 2),
        t("div", Se, p(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", Ce, p(e.errorMessage), 1)) : F("", !0)
    ], 64));
  }
}, kl = /* @__PURE__ */ Y(we, [["__scopeId", "data-v-5ea6b79c"]]);
const U = (e) => (K("data-v-e553aa85"), e = e(), Q(), e), De = { class: "input-label" }, Te = { class: "selected" }, Ve = ["value"], Me = ["value"], Ie = ["value"], xe = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Be = { class: "year picker" }, Pe = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Ae = { class: "options" }, Fe = ["value", "onClick"], Oe = { class: "value" }, ze = /* @__PURE__ */ U(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Le = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Ne = { class: "options" }, Ye = ["value", "onClick"], je = { class: "value" }, He = /* @__PURE__ */ U(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Re = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), We = { class: "options" }, Ue = ["value", "onClick"], Je = { class: "value" }, Ee = {
  key: 0,
  class: "input-error"
}, qe = {
  __name: "TDatePicker",
  props: {
    modelValue: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    min: {
      type: Date,
      default: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 1, 1)
    },
    max: {
      type: Date,
      default: new Date((/* @__PURE__ */ new Date()).getFullYear() + 9, 12, 31)
    },
    label: {
      type: String,
      default: "Input"
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const a = e, l = /* @__PURE__ */ new Date(), i = new Date(l.getFullYear() - 10, 1, 1), b = new Date(l.getFullYear() + 9, 12, 31), _ = [
      ...Array(b.getFullYear() - i.getFullYear()).keys()
    ].map((r) => r + i.getFullYear()), S = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], k = y([]), g = y("collapsed"), T = y(), c = y(), x = y();
    y();
    const w = y(!1), m = y(!1), $ = u(() => "input-control"), v = u(() => `input-field ${g.value}`.trim()), V = u(() => w.value ? "month picker show" : "month picker hide"), C = u(() => m.value ? "day picker show" : "day picker hide"), B = u(() => {
      const r = T.value || (/* @__PURE__ */ new Date()).getFullYear(), j = c.value || (/* @__PURE__ */ new Date()).getMonth(), D = x.value || (/* @__PURE__ */ new Date()).getDate();
      return new Date(r, j, D);
    }), N = u(() => {
      const r = T.value || (/* @__PURE__ */ new Date()).getFullYear();
      return E(r, 1, 1).split("-")[0];
    }), H = u(() => {
      const r = c.value || (/* @__PURE__ */ new Date()).getMonth();
      return E(1900, r, 1).split("-")[1];
    }), se = u(() => {
      const r = x.value || (/* @__PURE__ */ new Date()).getDate();
      return E(1900, 1, r).split("-")[2];
    });
    function ne(r, j) {
      const D = new Date(r, j, 1);
      return D.setMonth(D.getMonth() + 1), D.setDate(D.getDate() - 1), D.getDate();
    }
    function E(r, j, D) {
      const R = new Date(r, j, D);
      return r = R.toLocaleString("default", { year: "numeric" }), j = R.toLocaleString("default", { month: "2-digit" }), D = R.toLocaleString("default", { day: "2-digit" }), [r, j, D].join("-");
    }
    function oe() {
      g.value === "collapsed" ? (g.value = "expanded", T.value && (w.value = !0), c.value && (m.value = !0)) : (g.value = "collapsed", w.value = !1, m.value = !1);
    }
    function X(r) {
      return r === T.value ? "option selected" : "option";
    }
    function Z(r) {
      return parseInt(r) === c.value ? "option selected" : "option";
    }
    function ee(r) {
      return r === x.value ? "option selected" : "option";
    }
    function te(r) {
      T.value = r, c.value = 0, x.value = 1, w.value = !0, m.value = !1;
    }
    function f(r) {
      c.value = r, x.value = 1, m.value = !0, k.value = ne(T.value, c.value);
    }
    function z(r) {
      g.value = "collapsed", x.value = r, w.value = !1, m.value = !1, d("update:modelValue", B);
    }
    function M() {
      const r = a.modelValue || /* @__PURE__ */ new Date();
      te(r.getFullYear()), f(r.getMonth()), z(r.getDate());
    }
    return W(() => {
      M();
    }), (r, j) => (n(), o("div", {
      class: h(s($))
    }, [
      t("div", De, p(e.label), 1),
      t("div", {
        class: h(s(v))
      }, [
        t("div", {
          class: "select",
          onClick: oe
        }, [
          t("div", Te, [
            t("input", {
              disabled: "",
              value: s(N)
            }, null, 8, Ve),
            t("input", {
              disabled: "",
              value: s(H)
            }, null, 8, Me),
            t("input", {
              disabled: "",
              value: s(se)
            }, null, 8, Ie)
          ]),
          xe
        ]),
        t("div", Be, [
          Pe,
          t("div", Ae, [
            (n(!0), o(O, null, L(s(_), (D) => (n(), o("div", {
              class: h(X(D)),
              value: D,
              onClick: (R) => te(D)
            }, [
              t("div", Oe, p(D), 1),
              ze
            ], 10, Fe))), 256))
          ])
        ]),
        t("div", {
          class: h(s(V))
        }, [
          Le,
          t("div", Ne, [
            (n(!0), o(O, null, L(Object.keys(S), (D) => (n(), o("div", {
              class: h(Z(D)),
              value: D,
              onClick: (R) => f(D)
            }, [
              t("div", je, p(S[D]), 1),
              He
            ], 10, Ye))), 256))
          ])
        ], 2),
        t("div", {
          class: h(s(C))
        }, [
          Re,
          t("div", We, [
            (n(!0), o(O, null, L(k.value, (D) => (n(), o("div", {
              class: h(ee(D)),
              value: D,
              onClick: (R) => z(D)
            }, [
              t("div", Je, p(D), 1)
            ], 10, Ue))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", Ee, p(e.errorMessage), 1)) : F("", !0)
    ], 2));
  }
}, Sl = /* @__PURE__ */ Y(qe, [["__scopeId", "data-v-e553aa85"]]);
const Ge = { class: "input-control" }, Ke = { class: "input-label" }, Qe = { class: "input-field" }, Xe = ["type", "value"], Ze = {
  key: 0,
  class: "input-error"
}, et = {
  __name: "TInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "md"
    },
    label: {
      type: String,
      default: "Input"
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (d, a) => (n(), o("div", Ge, [
      t("div", Ke, p(e.label), 1),
      t("div", Qe, [
        t("input", {
          type: e.type,
          class: h(e.size),
          value: e.modelValue,
          onInput: a[0] || (a[0] = (l) => d.$emit("update:modelValue", l.target.value))
        }, null, 42, Xe)
      ]),
      e.errorMessage.length > 0 ? (n(), o("div", Ze, p(e.errorMessage), 1)) : F("", !0)
    ]));
  }
}, Cl = /* @__PURE__ */ Y(et, [["__scopeId", "data-v-c182bf09"]]);
const tt = ["value"], lt = {
  __name: "TOption",
  props: {
    size: {
      type: String,
      default: "md"
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Select"
    },
    selected: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: d }) {
    const a = e, l = u(() => a.selected ? `option selected ${a.size}`.trim() : `option ${a.size}`.trim());
    return (i, b) => (n(), o("div", {
      class: h(s(l)),
      value: e.value,
      onClick: b[0] || (b[0] = (_) => i.$emit("select", e.value))
    }, p(e.label), 11, tt));
  }
}, at = /* @__PURE__ */ Y(lt, [["__scopeId", "data-v-1fa7fb5e"]]);
const st = (e) => (K("data-v-386634d6"), e = e(), Q(), e), nt = { class: "input-label" }, ot = ["name"], it = { class: "selected" }, ut = /* @__PURE__ */ st(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), ct = { class: "options" }, dt = {
  key: 0,
  class: "input-error"
}, rt = {
  __name: "TSelect",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    label: {
      type: String,
      default: "Input"
    },
    options: {
      type: Array,
      default: []
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const a = e, l = y("collapsed"), i = y(""), b = u(() => `input-control ${a.size}`.trim()), _ = u(() => `input-field ${l.value}`.trim()), S = u(() => {
      const c = a.options.find((x) => x.value === i.value);
      return c ? c.label : "";
    });
    function k() {
      l.value === "collapsed" ? l.value = "expanded" : l.value = "collapsed";
    }
    function g(c) {
      return c === i.value;
    }
    function T(c) {
      l.value = "collapsed", i.value = c, d("update:modelValue", c);
    }
    return W(() => {
      T(a.modelValue);
    }), (c, x) => (n(), o("div", {
      class: h(s(b))
    }, [
      t("div", nt, p(e.label), 1),
      t("div", {
        class: h(s(_))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: k
        }, [
          t("div", it, p(s(S)), 1),
          ut
        ], 8, ot),
        t("div", ct, [
          (n(!0), o(O, null, L(e.options, (w) => (n(), ae(at, {
            value: w.value,
            label: w.label,
            size: e.size,
            selected: g(w.value),
            onSelect: (m) => T(w.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", dt, p(e.errorMessage), 1)) : F("", !0)
    ], 2));
  }
}, wl = /* @__PURE__ */ Y(rt, [["__scopeId", "data-v-386634d6"]]);
const vt = { class: "progress-bar" }, ft = {
  __name: "TProgressBar",
  props: {
    step: {
      type: Number,
      default: 10
    },
    speed: {
      type: Number,
      default: 10
    },
    bidirection: {
      type: Boolean,
      default: !0
    },
    indefinite: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const d = e, a = y("forward"), l = y(null), i = y(null), b = y(), _ = u(() => `bar forward-bar ${a.value}`), S = u(() => d.bidirection ? `bar reverse-bar ${a.value}` : "bar reverse-bar hide");
    W(() => {
      b.value = setInterval(g, d.speed);
    });
    function k(m) {
      return parseInt(m.style.width.split("%")[0]);
    }
    function g() {
      d.bidirection ? c() : T();
    }
    function T() {
      const m = k(l.value);
      m === 100 ? d.indefinite ? x(l.value) : clearInterval(b.value) : w(l.value, "forward", m);
    }
    function c() {
      const m = k(l.value), $ = k(i.value);
      a.value === "forward" && m === 100 ? (a.value = "reverse", w(l.value, "reverse", m), w(i.value, "forward", $)) : a.value === "reverse" && $ === 100 ? (a.value = "forward", w(l.value, "forward", m), w(i.value, "reverse", $)) : a.value === "forward" ? (w(l.value, "forward", m), w(i.value, "reverse", $)) : a.value === "reverse" && (w(l.value, "reverse", m), w(i.value, "forward", $));
    }
    function x(m) {
      m.style.width = "0%";
    }
    function w(m, $, v) {
      $ === "forward" ? m.style.width = [(v + d.step).toString(), "%"].join("") : m.style.width = [(v - d.step).toString(), "%"].join("");
    }
    return (m, $) => (n(), o("div", vt, [
      t("div", {
        class: h(s(_)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: l
      }, null, 2),
      t("div", {
        class: h(s(S)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: i
      }, null, 2)
    ]));
  }
}, pt = /* @__PURE__ */ Y(ft, [["__scopeId", "data-v-554f77de"]]);
const de = (e) => (K("data-v-7832a2e2"), e = e(), Q(), e), ht = { class: "table-container" }, _t = { class: "table-actions" }, gt = { class: "actions" }, mt = ["onClick"], yt = { class: "tooltip" }, $t = { class: "header" }, bt = { class: "row" }, kt = { class: "col" }, St = {
  key: 0,
  class: "col"
}, Ct = {
  key: 0,
  class: "loading"
}, wt = ["colspan"], Dt = { class: "body" }, Tt = { class: "row" }, Vt = { class: "col" }, Mt = {
  key: 0,
  class: "col"
}, It = { class: "actions" }, xt = ["onClick"], Bt = { class: "tooltip" }, Pt = { class: "pagination" }, At = /* @__PURE__ */ de(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Ft = { class: "page-number" }, Ot = {
  key: 0,
  class: "current"
}, zt = { class: "current" }, Lt = /* @__PURE__ */ de(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Nt = {
  __name: "TTable",
  props: {
    name: {
      type: String,
      default: ""
    },
    headers: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    },
    totalData: {
      type: Number,
      default: 0
    },
    actions: {
      type: Array,
      default: []
    },
    tableActions: {
      type: Object,
      default: {}
    },
    pagination: {
      type: Object,
      default: {
        limit: 5,
        client: !0
      }
    },
    loading: {
      type: Boolean,
      default: !0
    },
    dense: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "offsetChange"
  ],
  setup(e, { emit: d }) {
    const a = e, l = y(0), i = y(a.pagination.limit), b = u(() => a.pagination.client ? !1 : a.loading), _ = u(() => a.headers.length + (a.actions.length > 0 ? 1 : 0)), S = u(() => a.name && a.name.length > 0 ? "table-name show" : "table-name hide"), k = u(() => a.dense ? "table dense" : "table"), g = u(() => a.pagination.client ? a.data.length : a.totalData), T = u(() => a.pagination.client ? a.data.slice(l.value, l.value + i.value) : a.data), c = u(() => l.value + i.value > g.value ? {
      start: l.value + 1,
      end: g.value
    } : {
      start: l.value + 1,
      end: l.value + i.value
    }), x = u(() => c.value.start === 1 ? "pager left" : "pager left show"), w = u(() => c.value.end === g.value ? "pager right" : "pager right show");
    function m() {
      c.value.start === 1 || (l.value - i.value < 0 ? l.value = 0 : l.value = l.value - i.value), d("offsetChange", l.value);
    }
    function $() {
      c.value.end === g.value || (l.value = l.value + i.value), d("offsetChange", l.value);
    }
    return (v, V) => (n(), o("div", ht, [
      t("div", _t, [
        I(v.$slots, "table-actions", P(A({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: h(s(S))
          }, [
            I(v.$slots, "table-name", P(A({ name: e.name })), () => [
              q(p(e.name), 1)
            ], !0)
          ], 2),
          t("div", gt, [
            (n(!0), o(O, null, L(e.tableActions, (C) => (n(), o("div", {
              class: "action",
              onClick: (B) => C.click(e.data)
            }, [
              I(v.$slots, "table-action", P(A({ action: C, data: e.data })), () => [
                t("i", {
                  class: h(C.icon)
                }, null, 2),
                t("span", yt, p(C.name), 1)
              ], !0)
            ], 8, mt))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: h(s(k))
      }, [
        t("thead", $t, [
          t("tr", bt, [
            I(v.$slots, "header-row", P(A({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), o(O, null, L(e.headers, (C, B) => (n(), o("th", kt, [
                I(v.$slots, `header-col.${C.key}`, P(A({ header: C, i: B })), () => [
                  q(p(C.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), o("th", St, [
                I(v.$slots, "header-actions", P(A({ actions: e.actions })), void 0, !0)
              ])) : F("", !0)
            ], !0)
          ]),
          s(b) ? (n(), o("tr", Ct, [
            I(v.$slots, "progress-bar", P(A({ headers: e.headers, actions: e.actions, span: s(_) })), () => [
              t("th", { colspan: s(_) }, [
                le(pt)
              ], 8, wt)
            ], !0)
          ])) : F("", !0)
        ]),
        t("tbody", Dt, [
          s(b) ? F("", !0) : (n(!0), o(O, { key: 0 }, L(s(T), (C, B) => (n(), o("tr", Tt, [
            I(v.$slots, "data-row", P(A({ headers: e.headers, row: C, actions: e.actions, i: B })), () => [
              I(v.$slots, "data-content", P(A({ headers: e.headers, row: C, i: B })), () => [
                (n(!0), o(O, null, L(e.headers, (N) => (n(), o("td", Vt, [
                  I(v.$slots, `data-col.${N.key}`, P(A({ header: N, row: C, i: B })), () => [
                    q(p(C[N.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), o("td", Mt, [
                I(v.$slots, "data-actions", P(A({ row: C, actions: e.actions, i: B })), () => [
                  t("div", It, [
                    (n(!0), o(O, null, L(e.actions, (N) => (n(), o("div", {
                      class: "action",
                      onClick: (H) => N.click(C, B)
                    }, [
                      I(v.$slots, "data-action", P(A({ row: C, action: N, i: B })), () => [
                        t("i", {
                          class: h(N.icon)
                        }, null, 2),
                        t("span", Bt, p(N.name), 1)
                      ], !0)
                    ], 8, xt))), 256))
                  ])
                ], !0)
              ])) : F("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", Pt, [
        I(v.$slots, "pagination", P(A({ pageLeft: m, pageRight: $, start: s(c).start, end: s(c).end, total: s(g) })), () => [
          t("div", {
            class: h(s(x)),
            onClick: V[0] || (V[0] = (C) => m())
          }, [
            I(v.$slots, "pager-left", {}, () => [
              At
            ], !0)
          ], 2),
          t("div", Ft, [
            I(v.$slots, "page-number", P(A({ start: s(c).start, end: s(c).end, total: s(g) })), () => [
              s(c).start !== s(c).end ? (n(), o("span", Ot, p(s(c).start) + " - ", 1)) : F("", !0),
              t("span", zt, p(s(c).end), 1),
              q(" / " + p(s(g)), 1)
            ], !0)
          ]),
          t("div", {
            class: h(s(w)),
            onClick: V[1] || (V[1] = (C) => $())
          }, [
            I(v.$slots, "pager-right", {}, () => [
              Lt
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Yt = /* @__PURE__ */ Y(Nt, [["__scopeId", "data-v-7832a2e2"]]);
const jt = (e) => (K("data-v-4b4a798c"), e = e(), Q(), e), Ht = { class: "input-label" }, Rt = { class: "select" }, Wt = { class: "selected" }, Ut = { class: "tag" }, Jt = /* @__PURE__ */ jt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), Et = {
  key: 0,
  class: "input-error"
}, qt = {
  __name: "TSelectTable",
  props: {
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    label: {
      type: String,
      default: "Input"
    },
    optionsLoading: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    optionsLength: {
      type: Number,
      default: 0
    },
    pagination: {
      type: Object,
      default() {
        return {
          limit: 5,
          client: !0
        };
      }
    }
  },
  emits: ["update:modelValue", "offsetChange"],
  setup(e, { emit: d }) {
    const a = e, l = y(!1), i = y(""), b = u(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), _ = y([
      {
        name: "Select",
        icon: "",
        click: function($, v) {
          w($);
        }
      }
    ]), S = u(() => `input-control ${a.size}`);
    function k($) {
      return g.value.find((V) => V === $.value) ? "checkbox checked" : "checkbox";
    }
    const g = u(() => a.modelValue), T = y({}), c = u(() => g.value.map(($) => {
      if (T[$])
        return T[$];
      {
        const V = ((a.options || []).find((C) => C.value === $) || {}).label;
        return T[$] = V, V;
      }
    }));
    function x() {
      l.value = !l.value;
    }
    function w($) {
      const v = Array.from(g.value), V = v.findIndex((C) => C === $.value);
      V < 0 ? v.push($.value) : v.splice(V, 1), d("update:modelValue", v);
    }
    function m($) {
      d("offsetChange", $);
    }
    return W(() => {
    }), ($, v) => (n(), o("div", {
      class: h(s(S))
    }, [
      t("div", Ht, p(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: x
      }, [
        t("div", Rt, [
          (n(!0), o(O, null, L(s(c), (V) => (n(), o("div", Wt, [
            t("div", Ut, p(V), 1)
          ]))), 256))
        ]),
        Jt
      ]),
      i.value.length > 0 ? (n(), o("div", Et, p(i.value), 1)) : F("", !0),
      l.value ? (n(), ae(ie, {
        key: 1,
        modelValue: l.value,
        "onUpdate:modelValue": v[0] || (v[0] = (V) => l.value = V),
        title: "Select",
        width: 800,
        height: 600,
        class: "options-dialog"
      }, {
        body: G(() => [
          le(Yt, {
            name: e.name,
            headers: s(b),
            data: e.options,
            actions: _.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: m
          }, {
            "data-action": G(({ row: V, action: C, i: B }) => [
              t("div", {
                class: h(k(V))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : F("", !0)
    ], 2));
  }
}, Dl = /* @__PURE__ */ Y(qt, [["__scopeId", "data-v-4b4a798c"]]);
const J = (e) => (K("data-v-8a55f258"), e = e(), Q(), e), Gt = { class: "input-label" }, Kt = { class: "selected" }, Qt = ["value"], Xt = ["value"], Zt = ["value"], el = ["value"], tl = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-clock" })
], -1)), ll = { class: "hour picker" }, al = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), sl = { class: "options" }, nl = ["value", "onClick"], ol = { class: "value" }, il = /* @__PURE__ */ J(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), ul = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), cl = { class: "options" }, dl = ["value", "onClick"], rl = { class: "value" }, vl = /* @__PURE__ */ J(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), fl = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), pl = { class: "options" }, hl = ["value", "onClick"], _l = { class: "value" }, gl = {
  key: 0,
  class: "input-error"
}, ml = {
  __name: "TTimePicker",
  props: {
    modelValue: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    label: {
      type: String,
      default: "Input"
    },
    hour12: {
      type: Boolean,
      default: !1
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const a = e, l = Array.from(Array(24)).map((f, z) => z), i = Array.from(Array(60)).map((f, z) => z), b = Array.from(Array(60)).map((f, z) => z), _ = y("collapsed"), S = y(), k = y(), g = y();
    y();
    const T = y(!1), c = y(!1), x = u(() => a.hour12 ? "input-control hour12" : "input-control hour24"), w = u(() => `input-field ${_.value}`.trim()), m = u(() => T.value ? "minute picker show" : "minute picker hide"), $ = u(() => c.value ? "second picker show" : "second picker hide"), v = u(() => {
      const f = S.value || 0, z = k.value || 0, M = g.value || 0;
      return new Date(1900, 0, 1, f, z, M);
    }), V = u(() => {
      const f = S.value || 0;
      return H(f, 0, 0).split(" ")[0].split(":")[0];
    }), C = u(() => {
      const f = k.value || 0;
      return H(0, f, 0).split(" ")[0].split(":")[1];
    }), B = u(() => {
      const f = g.value || 0;
      return H(0, 0, f).split(" ")[0].split(":")[2];
    }), N = u(() => {
      const f = S.value || 0;
      return H(f, 0, 0).split(" ")[1];
    });
    function H(f, z, M) {
      return new Date(1900, 1, 1, f, z, M).toLocaleTimeString("en-US", { hour12: a.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    }
    function se() {
      _.value === "collapsed" ? (_.value = "expanded", S.value && (T.value = !0), k.value && (c.value = !0)) : (_.value = "collapsed", T.value = !1, c.value = !1);
    }
    function ne(f) {
      return f === S.value ? "option selected" : "option";
    }
    function E(f) {
      return f === k.value ? "option selected" : "option";
    }
    function oe(f) {
      return f === g.value ? "option selected" : "option";
    }
    function X(f) {
      S.value = f, k.value = 0, g.value = 0, T.value = !0, c.value = !1;
    }
    function Z(f) {
      k.value = f, g.value = 0, c.value = !0, b.value = 0;
    }
    function ee(f) {
      _.value = "collapsed", g.value = f, T.value = !1, c.value = !1, d("update:modelValue", v);
    }
    function te() {
      const f = a.modelValue || /* @__PURE__ */ new Date();
      X(f.getHours()), Z(f.getMinutes()), ee(f.getSeconds());
    }
    return W(() => {
      te();
    }), (f, z) => (n(), o("div", {
      class: h(s(x))
    }, [
      t("div", Gt, p(e.label), 1),
      t("div", {
        class: h(s(w))
      }, [
        t("div", {
          class: "select",
          onClick: se
        }, [
          t("div", Kt, [
            t("input", {
              disabled: "",
              value: s(V)
            }, null, 8, Qt),
            t("input", {
              disabled: "",
              value: s(C)
            }, null, 8, Xt),
            t("input", {
              disabled: "",
              value: s(B)
            }, null, 8, Zt),
            e.hour12 ? (n(), o("input", {
              key: 0,
              disabled: "",
              value: s(N)
            }, null, 8, el)) : F("", !0)
          ]),
          tl
        ]),
        t("div", ll, [
          al,
          t("div", sl, [
            (n(!0), o(O, null, L(s(l), (M) => (n(), o("div", {
              class: h(ne(M)),
              value: M,
              onClick: (r) => X(M)
            }, [
              t("div", ol, p(M), 1),
              il
            ], 10, nl))), 256))
          ])
        ]),
        t("div", {
          class: h(s(m))
        }, [
          ul,
          t("div", cl, [
            (n(!0), o(O, null, L(s(i), (M) => (n(), o("div", {
              class: h(E(M)),
              value: M,
              onClick: (r) => Z(M)
            }, [
              t("div", rl, p(M), 1),
              vl
            ], 10, dl))), 256))
          ])
        ], 2),
        t("div", {
          class: h(s($))
        }, [
          fl,
          t("div", pl, [
            (n(!0), o(O, null, L(s(b), (M) => (n(), o("div", {
              class: h(oe(M)),
              value: M,
              onClick: (r) => ee(M)
            }, [
              t("div", _l, p(M), 1)
            ], 10, hl))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", gl, p(e.errorMessage), 1)) : F("", !0)
    ], 2));
  }
}, Tl = /* @__PURE__ */ Y(ml, [["__scopeId", "data-v-8a55f258"]]);
export {
  $l as TAlert,
  ue as TButton,
  kl as TCheckbox,
  bl as TConfirmDialog,
  Sl as TDatePicker,
  ie as TDialog,
  Cl as TInput,
  at as TOption,
  pt as TProgressBar,
  wl as TSelect,
  Dl as TSelectTable,
  Yt as TTable,
  Tl as TTimePicker
};
