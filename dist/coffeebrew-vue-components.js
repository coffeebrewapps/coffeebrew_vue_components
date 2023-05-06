import { ref as S, computed as c, onMounted as Q, openBlock as n, createElementBlock as i, normalizeClass as g, unref as s, createElementVNode as t, renderSlot as w, createTextVNode as j, toDisplayString as v, createBlock as U, isRef as X, withCtx as J, createCommentVNode as P, createVNode as E, Fragment as N, renderList as F, pushScopeId as q, popScopeId as G, normalizeProps as T, guardReactiveProps as V } from "vue";
const z = (e, r) => {
  const a = e.__vccOpts || e;
  for (const [l, o] of r)
    a[l] = o;
  return a;
}, re = { class: "menu-bar" }, ce = { class: "container" }, de = { class: "heading" }, ve = { class: "body" }, fe = { class: "actions" }, pe = {
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
  setup(e, { emit: r }) {
    const a = e, l = S("dialog"), o = c(() => a.modelValue ? "dialog show" : "dialog hide");
    function _() {
      r("update:modelValue", !1);
    }
    return Q(() => {
      l.value.style.width = `${a.width}px`, l.value.style.height = `${a.height}px`, l.value.style.top = `calc((100vh - ${l.value.style.height}) / 2)`, l.value.style.left = `calc((100vw - ${l.value.style.width}) / 2)`;
    }), (f, C) => (n(), i("div", {
      class: g(s(o)),
      ref_key: "dialog",
      ref: l
    }, [
      t("div", re, [
        w(f.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: C[0] || (C[0] = (y) => _())
          })
        ], !0)
      ]),
      t("div", ce, [
        t("div", de, [
          w(f.$slots, "heading", {}, () => [
            j(v(e.title), 1)
          ], !0)
        ]),
        t("div", ve, [
          w(f.$slots, "body", {}, void 0, !0)
        ]),
        t("div", fe, [
          w(f.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, Z = /* @__PURE__ */ z(pe, [["__scopeId", "data-v-295738d8"]]), he = { class: "text" }, Lt = {
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
  setup(e, { emit: r }) {
    const a = e, l = S("dialog"), o = c({
      get: () => a.modelValue,
      set: (_) => {
        r("update:modelValue", _);
      }
    });
    return (_, f) => (n(), U(Z, {
      ref_key: "dialog",
      ref: l,
      modelValue: s(o),
      "onUpdate:modelValue": f[0] || (f[0] = (C) => X(o) ? o.value = C : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: J(() => [
        t("div", he, v(e.content), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
};
const ge = { key: 0 }, _e = {
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
  setup(e, { emit: r }) {
    const a = e, l = c(() => `button ${a.buttonType} ${a.size}`.trim()), o = c(() => `${a.icon} fa-lg`.trim());
    return (_, f) => (n(), i("div", {
      class: g(s(l)),
      onClick: f[0] || (f[0] = (C) => _.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), i("span", ge, v(e.value), 1)) : P("", !0),
      t("i", {
        class: g(s(o))
      }, null, 2)
    ], 2));
  }
}, K = /* @__PURE__ */ z(_e, [["__scopeId", "data-v-c26a9562"]]);
const me = { class: "primary-text" }, ye = { class: "secondary-text" }, $e = {
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
  setup(e, { emit: r }) {
    const a = e, l = S("dialog"), o = c({
      get: () => a.modelValue,
      set: (C) => {
        r("update:modelValue", C);
      }
    });
    function _() {
      r("update:modelValue", !1), r("confirm");
    }
    function f() {
      r("update:modelValue", !1), r("cancel");
    }
    return (C, y) => (n(), U(Z, {
      ref_key: "dialog",
      ref: l,
      modelValue: s(o),
      "onUpdate:modelValue": y[2] || (y[2] = (p) => X(o) ? o.value = p : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: J(() => [
        t("div", me, v(e.primaryText), 1),
        t("div", ye, v(e.secondaryText), 1)
      ]),
      actions: J(() => [
        E(K, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: y[0] || (y[0] = (p) => _())
        }),
        E(K, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: y[1] || (y[1] = (p) => f())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, Yt = /* @__PURE__ */ z($e, [["__scopeId", "data-v-87937dbc"]]);
const be = { class: "input-label" }, ke = {
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
  setup(e, { emit: r }) {
    const a = e, l = S(!1), o = c(() => a.label.length <= 10 ? "input-control sm" : a.label.length > 10 && a.label.length <= 30 ? "input-control md" : "input-control lg"), _ = c(() => l.value ? "input-field checked" : "input-field");
    function f() {
      l.value = !l.value, r("update:modelValue", l.value);
    }
    return (C, y) => (n(), i(N, null, [
      t("div", {
        class: g(s(o)),
        onClick: f
      }, [
        t("div", {
          class: g(s(_))
        }, null, 2),
        t("div", be, v(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", ke, v(e.errorMessage), 1)) : P("", !0)
    ], 64));
  }
}, jt = /* @__PURE__ */ z(we, [["__scopeId", "data-v-12000660"]]);
const Y = (e) => (q("data-v-eec5eff6"), e = e(), G(), e), Se = { class: "input-label" }, Ce = { class: "selected" }, De = ["value"], Te = ["value"], Ve = ["value"], Ie = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Me = { class: "year picker" }, Be = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), xe = { class: "options" }, Pe = ["value", "onClick"], Ne = { class: "value" }, ze = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Fe = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Oe = { class: "options" }, Ae = ["value", "onClick"], Le = { class: "value" }, Ye = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), je = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Re = { class: "options" }, We = ["value", "onClick"], Je = { class: "value" }, Ee = {
  key: 0,
  class: "input-error"
}, Ue = {
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
  setup(e, { emit: r }) {
    const a = /* @__PURE__ */ new Date(), l = new Date(a.getFullYear() - 10, 1, 1), o = new Date(a.getFullYear() + 9, 12, 31), _ = [
      ...Array(o.getFullYear() - l.getFullYear()).keys()
    ].map((h) => h + l.getFullYear()), f = [
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
    ], C = S([]), y = S("collapsed"), p = S(), D = S(), u = S();
    S();
    const M = S(!1), m = S(!1), $ = c(() => "input-control"), I = c(() => `input-field ${y.value}`.trim()), b = c(() => M.value ? "month picker show" : "month picker hide"), L = c(() => m.value ? "day picker show" : "day picker hide"), k = c(() => !p.value || !D.value || !u.value ? null : new Date(p.value, D.value, u.value)), B = c(() => p.value ? W(p.value, 1, 1).split("-")[0] : R(/* @__PURE__ */ new Date()).split("-")[0]), x = c(() => D.value ? W(1900, D.value, 1).split("-")[1] : R(/* @__PURE__ */ new Date()).split("-")[1]), H = c(() => u.value ? W(1900, 1, u.value).split("-")[2] : R(/* @__PURE__ */ new Date()).split("-")[2]);
    function te(h, O) {
      const d = new Date(h, O, 1);
      return d.setMonth(d.getMonth() + 1), d.setDate(d.getDate() - 1), d.getDate();
    }
    function R(h) {
      const O = h.toLocaleString("default", { year: "numeric" }), d = h.toLocaleString("default", { month: "2-digit" }), A = h.toLocaleString("default", { day: "2-digit" });
      return [O, d, A].join("-");
    }
    function W(h, O, d) {
      const A = new Date(h, O, d);
      return h = A.toLocaleString("default", { year: "numeric" }), O = A.toLocaleString("default", { month: "2-digit" }), d = A.toLocaleString("default", { day: "2-digit" }), [h, O, d].join("-");
    }
    function le() {
      y.value === "collapsed" ? (y.value = "expanded", p.value && (M.value = !0), D.value && (m.value = !0)) : (y.value = "collapsed", M.value = !1, m.value = !1);
    }
    function ae(h) {
      return h === p.value ? "option selected" : "option";
    }
    function se(h) {
      return h === D.value ? "option selected" : "option";
    }
    function ne(h) {
      return h === u.value ? "option selected" : "option";
    }
    function oe(h) {
      p.value = h, D.value = 0, u.value = 1, M.value = !0, m.value = !1;
    }
    function ie(h) {
      D.value = h, u.value = 1, m.value = !0, C.value = te(p.value, D.value);
    }
    function ue(h) {
      y.value = "collapsed", u.value = h, M.value = !1, m.value = !1, r("update:modelValue", k);
    }
    return (h, O) => (n(), i("div", {
      class: g(s($))
    }, [
      t("div", Se, v(e.label), 1),
      t("div", {
        class: g(s(I))
      }, [
        t("div", {
          class: "select",
          onClick: le
        }, [
          t("div", Ce, [
            t("input", {
              disabled: "",
              value: s(B)
            }, null, 8, De),
            t("input", {
              disabled: "",
              value: s(x)
            }, null, 8, Te),
            t("input", {
              disabled: "",
              value: s(H)
            }, null, 8, Ve)
          ]),
          Ie
        ]),
        t("div", Me, [
          Be,
          t("div", xe, [
            (n(!0), i(N, null, F(s(_), (d) => (n(), i("div", {
              class: g(ae(d)),
              value: d,
              onClick: (A) => oe(d)
            }, [
              t("div", Ne, v(d), 1),
              ze
            ], 10, Pe))), 256))
          ])
        ]),
        t("div", {
          class: g(s(b))
        }, [
          Fe,
          t("div", Oe, [
            (n(!0), i(N, null, F(Object.keys(f), (d) => (n(), i("div", {
              class: g(se(d)),
              value: d,
              onClick: (A) => ie(d)
            }, [
              t("div", Le, v(f[d]), 1),
              Ye
            ], 10, Ae))), 256))
          ])
        ], 2),
        t("div", {
          class: g(s(L))
        }, [
          je,
          t("div", Re, [
            (n(!0), i(N, null, F(C.value, (d) => (n(), i("div", {
              class: g(ne(d)),
              value: d,
              onClick: (A) => ue(d)
            }, [
              t("div", Je, v(d), 1)
            ], 10, We))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", Ee, v(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, Rt = /* @__PURE__ */ z(Ue, [["__scopeId", "data-v-eec5eff6"]]);
const qe = { class: "input-control" }, Ge = { class: "input-label" }, He = { class: "input-field" }, Ke = ["type", "value"], Qe = {
  key: 0,
  class: "input-error"
}, Xe = {
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
    return (r, a) => (n(), i("div", qe, [
      t("div", Ge, v(e.label), 1),
      t("div", He, [
        t("input", {
          type: e.type,
          class: g(e.size),
          value: e.modelValue,
          onInput: a[0] || (a[0] = (l) => r.$emit("update:modelValue", l.target.value))
        }, null, 42, Ke)
      ]),
      e.errorMessage.length > 0 ? (n(), i("div", Qe, v(e.errorMessage), 1)) : P("", !0)
    ]));
  }
}, Wt = /* @__PURE__ */ z(Xe, [["__scopeId", "data-v-c182bf09"]]);
const Ze = ["value"], et = {
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
  setup(e, { emit: r }) {
    const a = e, l = c(() => a.selected ? `option selected ${a.size}`.trim() : `option ${a.size}`.trim());
    return (o, _) => (n(), i("div", {
      class: g(s(l)),
      value: e.value,
      onClick: _[0] || (_[0] = (f) => o.$emit("select", e.value))
    }, v(e.label), 11, Ze));
  }
}, tt = /* @__PURE__ */ z(et, [["__scopeId", "data-v-1fa7fb5e"]]);
const lt = (e) => (q("data-v-17f3b43e"), e = e(), G(), e), at = { class: "input-label" }, st = ["name"], nt = { class: "selected" }, ot = /* @__PURE__ */ lt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), it = { class: "options" }, ut = {
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
  setup(e, { emit: r }) {
    const a = e, l = S("collapsed"), o = S(""), _ = c(() => `input-control ${a.size}`.trim()), f = c(() => `input-field ${l.value}`.trim()), C = c(() => {
      const u = a.options.find((M) => M.value === o.value);
      return u ? u.label : "";
    });
    function y() {
      l.value === "collapsed" ? l.value = "expanded" : l.value = "collapsed";
    }
    function p(u) {
      return u === o.value;
    }
    function D(u) {
      l.value = "collapsed", o.value = u, r("update:modelValue", u);
    }
    return (u, M) => (n(), i("div", {
      class: g(s(_))
    }, [
      t("div", at, v(e.label), 1),
      t("div", {
        class: g(s(f))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: y
        }, [
          t("div", nt, v(s(C)), 1),
          ot
        ], 8, st),
        t("div", it, [
          (n(!0), i(N, null, F(e.options, (m) => (n(), U(tt, {
            value: m.value,
            label: m.label,
            size: e.size,
            selected: p(m.value),
            onSelect: ($) => D(m.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", ut, v(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, Jt = /* @__PURE__ */ z(rt, [["__scopeId", "data-v-17f3b43e"]]);
const ct = { class: "progress-bar" }, dt = {
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
    const r = e, a = S("forward"), l = S(null), o = S(null), _ = S(), f = c(() => `bar forward-bar ${a.value}`), C = c(() => r.bidirection ? `bar reverse-bar ${a.value}` : "bar reverse-bar hide");
    Q(() => {
      _.value = setInterval(p, r.speed);
    });
    function y($) {
      return parseInt($.style.width.split("%")[0]);
    }
    function p() {
      r.bidirection ? u() : D();
    }
    function D() {
      const $ = y(l.value);
      $ === 100 ? r.indefinite ? M(l.value) : clearInterval(_.value) : m(l.value, "forward", $);
    }
    function u() {
      const $ = y(l.value), I = y(o.value);
      a.value === "forward" && $ === 100 ? (a.value = "reverse", m(l.value, "reverse", $), m(o.value, "forward", I)) : a.value === "reverse" && I === 100 ? (a.value = "forward", m(l.value, "forward", $), m(o.value, "reverse", I)) : a.value === "forward" ? (m(l.value, "forward", $), m(o.value, "reverse", I)) : a.value === "reverse" && (m(l.value, "reverse", $), m(o.value, "forward", I));
    }
    function M($) {
      $.style.width = "0%";
    }
    function m($, I, b) {
      I === "forward" ? $.style.width = [(b + r.step).toString(), "%"].join("") : $.style.width = [(b - r.step).toString(), "%"].join("");
    }
    return ($, I) => (n(), i("div", ct, [
      t("div", {
        class: g(s(f)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: l
      }, null, 2),
      t("div", {
        class: g(s(C)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: o
      }, null, 2)
    ]));
  }
}, vt = /* @__PURE__ */ z(dt, [["__scopeId", "data-v-554f77de"]]);
const ee = (e) => (q("data-v-7832a2e2"), e = e(), G(), e), ft = { class: "table-container" }, pt = { class: "table-actions" }, ht = { class: "actions" }, gt = ["onClick"], _t = { class: "tooltip" }, mt = { class: "header" }, yt = { class: "row" }, $t = { class: "col" }, bt = {
  key: 0,
  class: "col"
}, kt = {
  key: 0,
  class: "loading"
}, wt = ["colspan"], St = { class: "body" }, Ct = { class: "row" }, Dt = { class: "col" }, Tt = {
  key: 0,
  class: "col"
}, Vt = { class: "actions" }, It = ["onClick"], Mt = { class: "tooltip" }, Bt = { class: "pagination" }, xt = /* @__PURE__ */ ee(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Pt = { class: "page-number" }, Nt = {
  key: 0,
  class: "current"
}, zt = { class: "current" }, Ft = /* @__PURE__ */ ee(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Ot = {
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
  setup(e, { emit: r }) {
    const a = e, l = S(0), o = S(a.pagination.limit), _ = c(() => a.pagination.client ? !1 : a.loading), f = c(() => a.headers.length + (a.actions.length > 0 ? 1 : 0)), C = c(() => a.name && a.name.length > 0 ? "table-name show" : "table-name hide"), y = c(() => a.dense ? "table dense" : "table"), p = c(() => a.pagination.client ? a.data.length : a.totalData), D = c(() => a.pagination.client ? a.data.slice(l.value, l.value + o.value) : a.data), u = c(() => l.value + o.value > p.value ? {
      start: l.value + 1,
      end: p.value
    } : {
      start: l.value + 1,
      end: l.value + o.value
    }), M = c(() => u.value.start === 1 ? "pager left" : "pager left show"), m = c(() => u.value.end === p.value ? "pager right" : "pager right show");
    function $() {
      u.value.start === 1 || (l.value - o.value < 0 ? l.value = 0 : l.value = l.value - o.value), r("offsetChange", l.value);
    }
    function I() {
      u.value.end === p.value || (l.value = l.value + o.value), r("offsetChange", l.value);
    }
    return (b, L) => (n(), i("div", ft, [
      t("div", pt, [
        w(b.$slots, "table-actions", T(V({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: g(s(C))
          }, [
            w(b.$slots, "table-name", T(V({ name: e.name })), () => [
              j(v(e.name), 1)
            ], !0)
          ], 2),
          t("div", ht, [
            (n(!0), i(N, null, F(e.tableActions, (k) => (n(), i("div", {
              class: "action",
              onClick: (B) => k.click(e.data)
            }, [
              w(b.$slots, "table-action", T(V({ action: k, data: e.data })), () => [
                t("i", {
                  class: g(k.icon)
                }, null, 2),
                t("span", _t, v(k.name), 1)
              ], !0)
            ], 8, gt))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: g(s(y))
      }, [
        t("thead", mt, [
          t("tr", yt, [
            w(b.$slots, "header-row", T(V({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), i(N, null, F(e.headers, (k, B) => (n(), i("th", $t, [
                w(b.$slots, `header-col.${k.key}`, T(V({ header: k, i: B })), () => [
                  j(v(k.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), i("th", bt, [
                w(b.$slots, "header-actions", T(V({ actions: e.actions })), void 0, !0)
              ])) : P("", !0)
            ], !0)
          ]),
          s(_) ? (n(), i("tr", kt, [
            w(b.$slots, "progress-bar", T(V({ headers: e.headers, actions: e.actions, span: s(f) })), () => [
              t("th", { colspan: s(f) }, [
                E(vt)
              ], 8, wt)
            ], !0)
          ])) : P("", !0)
        ]),
        t("tbody", St, [
          s(_) ? P("", !0) : (n(!0), i(N, { key: 0 }, F(s(D), (k, B) => (n(), i("tr", Ct, [
            w(b.$slots, "data-row", T(V({ headers: e.headers, row: k, actions: e.actions, i: B })), () => [
              w(b.$slots, "data-content", T(V({ headers: e.headers, row: k, i: B })), () => [
                (n(!0), i(N, null, F(e.headers, (x) => (n(), i("td", Dt, [
                  w(b.$slots, `data-col.${x.key}`, T(V({ header: x, row: k, i: B })), () => [
                    j(v(k[x.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), i("td", Tt, [
                w(b.$slots, "data-actions", T(V({ row: k, actions: e.actions, i: B })), () => [
                  t("div", Vt, [
                    (n(!0), i(N, null, F(e.actions, (x) => (n(), i("div", {
                      class: "action",
                      onClick: (H) => x.click(k, B)
                    }, [
                      w(b.$slots, "data-action", T(V({ row: k, action: x, i: B })), () => [
                        t("i", {
                          class: g(x.icon)
                        }, null, 2),
                        t("span", Mt, v(x.name), 1)
                      ], !0)
                    ], 8, It))), 256))
                  ])
                ], !0)
              ])) : P("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", Bt, [
        w(b.$slots, "pagination", T(V({ pageLeft: $, pageRight: I, start: s(u).start, end: s(u).end, total: s(p) })), () => [
          t("div", {
            class: g(s(M)),
            onClick: L[0] || (L[0] = (k) => $())
          }, [
            w(b.$slots, "pager-left", {}, () => [
              xt
            ], !0)
          ], 2),
          t("div", Pt, [
            w(b.$slots, "page-number", T(V({ start: s(u).start, end: s(u).end, total: s(p) })), () => [
              s(u).start !== s(u).end ? (n(), i("span", Nt, v(s(u).start) + " - ", 1)) : P("", !0),
              t("span", zt, v(s(u).end), 1),
              j(" / " + v(s(p)), 1)
            ], !0)
          ]),
          t("div", {
            class: g(s(m)),
            onClick: L[1] || (L[1] = (k) => I())
          }, [
            w(b.$slots, "pager-right", {}, () => [
              Ft
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Et = /* @__PURE__ */ z(Ot, [["__scopeId", "data-v-7832a2e2"]]);
export {
  Lt as TAlert,
  K as TButton,
  jt as TCheckbox,
  Yt as TConfirmDialog,
  Rt as TDatePicker,
  Z as TDialog,
  Wt as TInput,
  tt as TOption,
  vt as TProgressBar,
  Jt as TSelect,
  Et as TTable
};
