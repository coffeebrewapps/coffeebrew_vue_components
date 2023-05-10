import { ref as S, computed as c, onMounted as W, openBlock as n, createElementBlock as i, normalizeClass as m, unref as s, createElementVNode as t, renderSlot as V, createTextVNode as j, toDisplayString as f, createBlock as U, isRef as ae, withCtx as R, createCommentVNode as L, createVNode as J, Fragment as O, renderList as F, pushScopeId as E, popScopeId as H, normalizeProps as x, guardReactiveProps as M } from "vue";
const z = (e, d) => {
  const l = e.__vccOpts || e;
  for (const [a, o] of d)
    l[a] = o;
  return l;
}, re = { class: "menu-bar" }, ve = { class: "container" }, fe = { class: "heading" }, pe = { class: "body" }, ge = { class: "actions" }, he = {
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
    const l = e, a = S("dialog"), o = c(() => l.modelValue ? "dialog show" : "dialog hide");
    function _() {
      d("update:modelValue", !1);
    }
    return W(() => {
      a.value.style.width = `${l.width}px`, a.value.style.height = `${l.height}px`, a.value.style.top = `calc((100vh - ${a.value.style.height}) / 2)`, a.value.style.left = `calc((100vw - ${a.value.style.width}) / 2)`;
    }), (g, w) => (n(), i("div", {
      class: m(s(o)),
      ref_key: "dialog",
      ref: a
    }, [
      t("div", re, [
        V(g.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: w[0] || (w[0] = (C) => _())
          })
        ], !0)
      ]),
      t("div", ve, [
        t("div", fe, [
          V(g.$slots, "heading", {}, () => [
            j(f(e.title), 1)
          ], !0)
        ]),
        t("div", pe, [
          V(g.$slots, "body", {}, void 0, !0)
        ]),
        t("div", ge, [
          V(g.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, K = /* @__PURE__ */ z(he, [["__scopeId", "data-v-295738d8"]]), me = { class: "text" }, Kt = {
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
    const l = e, a = S("dialog"), o = c({
      get: () => l.modelValue,
      set: (_) => {
        d("update:modelValue", _);
      }
    });
    return (_, g) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": g[0] || (g[0] = (w) => ae(o) ? o.value = w : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: R(() => [
        t("div", me, f(e.content), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
};
const _e = { key: 0 }, ye = {
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
    const l = e, a = c(() => `button ${l.buttonType} ${l.size}`.trim()), o = c(() => `${l.icon} fa-lg`.trim());
    return (_, g) => (n(), i("div", {
      class: m(s(a)),
      onClick: g[0] || (g[0] = (w) => _.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), i("span", _e, f(e.value), 1)) : L("", !0),
      t("i", {
        class: m(s(o))
      }, null, 2)
    ], 2));
  }
}, te = /* @__PURE__ */ z(ye, [["__scopeId", "data-v-c26a9562"]]);
const be = { class: "primary-text" }, $e = { class: "secondary-text" }, ke = {
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
    const l = e, a = S("dialog"), o = c({
      get: () => l.modelValue,
      set: (w) => {
        d("update:modelValue", w);
      }
    });
    function _() {
      d("update:modelValue", !1), d("confirm");
    }
    function g() {
      d("update:modelValue", !1), d("cancel");
    }
    return (w, C) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": C[2] || (C[2] = (y) => ae(o) ? o.value = y : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: R(() => [
        t("div", be, f(e.primaryText), 1),
        t("div", $e, f(e.secondaryText), 1)
      ]),
      actions: R(() => [
        J(te, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: C[0] || (C[0] = (y) => _())
        }),
        J(te, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: C[1] || (C[1] = (y) => g())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, Qt = /* @__PURE__ */ z(ke, [["__scopeId", "data-v-87937dbc"]]);
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
    const l = e, a = S(l.modelValue), o = c(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), _ = c(() => a.value ? "input-field checked" : "input-field");
    function g() {
      a.value = !a.value, d("update:modelValue", a.value);
    }
    return (w, C) => (n(), i(O, null, [
      t("div", {
        class: m(s(o)),
        onClick: g
      }, [
        t("div", {
          class: m(s(_))
        }, null, 2),
        t("div", Se, f(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", Ce, f(e.errorMessage), 1)) : L("", !0)
    ], 64));
  }
}, Xt = /* @__PURE__ */ z(we, [["__scopeId", "data-v-5ea6b79c"]]);
const Y = (e) => (E("data-v-d86d3630"), e = e(), H(), e), De = { class: "input-label" }, Ve = { class: "selected" }, Te = ["value"], Ie = ["value"], xe = ["value"], Me = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Be = { class: "year picker" }, Le = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Oe = { class: "options" }, ze = ["value", "onClick"], Ae = { class: "value" }, Fe = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ne = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Pe = { class: "options" }, Ye = ["value", "onClick"], je = { class: "value" }, Re = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), We = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Je = { class: "options" }, Ue = ["value", "onClick"], Ee = { class: "value" }, He = {
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
    const l = e, a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear() - 10, 1, 1), _ = new Date(a.getFullYear() + 9, 12, 31), g = [
      ...Array(_.getFullYear() - o.getFullYear()).keys()
    ].map((k) => k + o.getFullYear()), w = [
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
    ], C = S([]), y = S("collapsed"), T = S(), u = S(), I = S();
    S();
    const $ = S(!1), v = S(!1), p = c(() => "input-control"), r = c(() => `input-field ${y.value}`.trim()), D = c(() => $.value ? "month picker show" : "month picker hide"), b = c(() => v.value ? "day picker show" : "day picker hide"), B = c(() => !T.value || !u.value || !I.value ? null : new Date(T.value, u.value, I.value)), A = c(() => T.value ? G(T.value, 1, 1).split("-")[0] : q(/* @__PURE__ */ new Date()).split("-")[0]), Q = c(() => u.value ? G(1900, u.value, 1).split("-")[1] : q(/* @__PURE__ */ new Date()).split("-")[1]), se = c(() => I.value ? G(1900, 1, I.value).split("-")[2] : q(/* @__PURE__ */ new Date()).split("-")[2]);
    function ne(k, N) {
      const h = new Date(k, N, 1);
      return h.setMonth(h.getMonth() + 1), h.setDate(h.getDate() - 1), h.getDate();
    }
    function q(k) {
      const N = k.toLocaleString("default", { year: "numeric" }), h = k.toLocaleString("default", { month: "2-digit" }), P = k.toLocaleString("default", { day: "2-digit" });
      return [N, h, P].join("-");
    }
    function G(k, N, h) {
      const P = new Date(k, N, h);
      return k = P.toLocaleString("default", { year: "numeric" }), N = P.toLocaleString("default", { month: "2-digit" }), h = P.toLocaleString("default", { day: "2-digit" }), [k, N, h].join("-");
    }
    function oe() {
      y.value === "collapsed" ? (y.value = "expanded", T.value && ($.value = !0), u.value && (v.value = !0)) : (y.value = "collapsed", $.value = !1, v.value = !1);
    }
    function ie(k) {
      return k === T.value ? "option selected" : "option";
    }
    function ue(k) {
      return k === u.value ? "option selected" : "option";
    }
    function de(k) {
      return k === I.value ? "option selected" : "option";
    }
    function X(k) {
      T.value = k, u.value = 0, I.value = 1, $.value = !0, v.value = !1;
    }
    function Z(k) {
      u.value = k, I.value = 1, v.value = !0, C.value = ne(T.value, u.value);
    }
    function ee(k) {
      y.value = "collapsed", I.value = k, $.value = !1, v.value = !1, d("update:modelValue", B);
    }
    function ce() {
      l.modelValue && (X(l.modelValue.getFullYear()), Z(l.modelValue.getMonth()), ee(l.modelValue.getDate()));
    }
    return W(() => {
      ce();
    }), (k, N) => (n(), i("div", {
      class: m(s(p))
    }, [
      t("div", De, f(e.label), 1),
      t("div", {
        class: m(s(r))
      }, [
        t("div", {
          class: "select",
          onClick: oe
        }, [
          t("div", Ve, [
            t("input", {
              disabled: "",
              value: s(A)
            }, null, 8, Te),
            t("input", {
              disabled: "",
              value: s(Q)
            }, null, 8, Ie),
            t("input", {
              disabled: "",
              value: s(se)
            }, null, 8, xe)
          ]),
          Me
        ]),
        t("div", Be, [
          Le,
          t("div", Oe, [
            (n(!0), i(O, null, F(s(g), (h) => (n(), i("div", {
              class: m(ie(h)),
              value: h,
              onClick: (P) => X(h)
            }, [
              t("div", Ae, f(h), 1),
              Fe
            ], 10, ze))), 256))
          ])
        ]),
        t("div", {
          class: m(s(D))
        }, [
          Ne,
          t("div", Pe, [
            (n(!0), i(O, null, F(Object.keys(w), (h) => (n(), i("div", {
              class: m(ue(h)),
              value: h,
              onClick: (P) => Z(h)
            }, [
              t("div", je, f(w[h]), 1),
              Re
            ], 10, Ye))), 256))
          ])
        ], 2),
        t("div", {
          class: m(s(b))
        }, [
          We,
          t("div", Je, [
            (n(!0), i(O, null, F(C.value, (h) => (n(), i("div", {
              class: m(de(h)),
              value: h,
              onClick: (P) => ee(h)
            }, [
              t("div", Ee, f(h), 1)
            ], 10, Ue))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", He, f(e.errorMessage), 1)) : L("", !0)
    ], 2));
  }
}, Zt = /* @__PURE__ */ z(qe, [["__scopeId", "data-v-d86d3630"]]);
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
    return (d, l) => (n(), i("div", Ge, [
      t("div", Ke, f(e.label), 1),
      t("div", Qe, [
        t("input", {
          type: e.type,
          class: m(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (a) => d.$emit("update:modelValue", a.target.value))
        }, null, 42, Xe)
      ]),
      e.errorMessage.length > 0 ? (n(), i("div", Ze, f(e.errorMessage), 1)) : L("", !0)
    ]));
  }
}, ea = /* @__PURE__ */ z(et, [["__scopeId", "data-v-c182bf09"]]);
const tt = ["value"], at = {
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
    const l = e, a = c(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (o, _) => (n(), i("div", {
      class: m(s(a)),
      value: e.value,
      onClick: _[0] || (_[0] = (g) => o.$emit("select", e.value))
    }, f(e.label), 11, tt));
  }
}, lt = /* @__PURE__ */ z(at, [["__scopeId", "data-v-1fa7fb5e"]]);
const st = (e) => (E("data-v-386634d6"), e = e(), H(), e), nt = { class: "input-label" }, ot = ["name"], it = { class: "selected" }, ut = /* @__PURE__ */ st(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), dt = { class: "options" }, ct = {
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
    const l = e, a = S("collapsed"), o = S(""), _ = c(() => `input-control ${l.size}`.trim()), g = c(() => `input-field ${a.value}`.trim()), w = c(() => {
      const u = l.options.find((I) => I.value === o.value);
      return u ? u.label : "";
    });
    function C() {
      a.value === "collapsed" ? a.value = "expanded" : a.value = "collapsed";
    }
    function y(u) {
      return u === o.value;
    }
    function T(u) {
      a.value = "collapsed", o.value = u, d("update:modelValue", u);
    }
    return W(() => {
      T(l.modelValue);
    }), (u, I) => (n(), i("div", {
      class: m(s(_))
    }, [
      t("div", nt, f(e.label), 1),
      t("div", {
        class: m(s(g))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: C
        }, [
          t("div", it, f(s(w)), 1),
          ut
        ], 8, ot),
        t("div", dt, [
          (n(!0), i(O, null, F(e.options, ($) => (n(), U(lt, {
            value: $.value,
            label: $.label,
            size: e.size,
            selected: y($.value),
            onSelect: (v) => T($.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", ct, f(e.errorMessage), 1)) : L("", !0)
    ], 2));
  }
}, ta = /* @__PURE__ */ z(rt, [["__scopeId", "data-v-386634d6"]]);
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
    const d = e, l = S("forward"), a = S(null), o = S(null), _ = S(), g = c(() => `bar forward-bar ${l.value}`), w = c(() => d.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    W(() => {
      _.value = setInterval(y, d.speed);
    });
    function C(v) {
      return parseInt(v.style.width.split("%")[0]);
    }
    function y() {
      d.bidirection ? u() : T();
    }
    function T() {
      const v = C(a.value);
      v === 100 ? d.indefinite ? I(a.value) : clearInterval(_.value) : $(a.value, "forward", v);
    }
    function u() {
      const v = C(a.value), p = C(o.value);
      l.value === "forward" && v === 100 ? (l.value = "reverse", $(a.value, "reverse", v), $(o.value, "forward", p)) : l.value === "reverse" && p === 100 ? (l.value = "forward", $(a.value, "forward", v), $(o.value, "reverse", p)) : l.value === "forward" ? ($(a.value, "forward", v), $(o.value, "reverse", p)) : l.value === "reverse" && ($(a.value, "reverse", v), $(o.value, "forward", p));
    }
    function I(v) {
      v.style.width = "0%";
    }
    function $(v, p, r) {
      p === "forward" ? v.style.width = [(r + d.step).toString(), "%"].join("") : v.style.width = [(r - d.step).toString(), "%"].join("");
    }
    return (v, p) => (n(), i("div", vt, [
      t("div", {
        class: m(s(g)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: a
      }, null, 2),
      t("div", {
        class: m(s(w)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: o
      }, null, 2)
    ]));
  }
}, pt = /* @__PURE__ */ z(ft, [["__scopeId", "data-v-554f77de"]]);
const le = (e) => (E("data-v-7832a2e2"), e = e(), H(), e), gt = { class: "table-container" }, ht = { class: "table-actions" }, mt = { class: "actions" }, _t = ["onClick"], yt = { class: "tooltip" }, bt = { class: "header" }, $t = { class: "row" }, kt = { class: "col" }, St = {
  key: 0,
  class: "col"
}, Ct = {
  key: 0,
  class: "loading"
}, wt = ["colspan"], Dt = { class: "body" }, Vt = { class: "row" }, Tt = { class: "col" }, It = {
  key: 0,
  class: "col"
}, xt = { class: "actions" }, Mt = ["onClick"], Bt = { class: "tooltip" }, Lt = { class: "pagination" }, Ot = /* @__PURE__ */ le(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), zt = { class: "page-number" }, At = {
  key: 0,
  class: "current"
}, Ft = { class: "current" }, Nt = /* @__PURE__ */ le(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Pt = {
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
    const l = e, a = S(0), o = S(l.pagination.limit), _ = c(() => l.pagination.client ? !1 : l.loading), g = c(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), w = c(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), C = c(() => l.dense ? "table dense" : "table"), y = c(() => l.pagination.client ? l.data.length : l.totalData), T = c(() => l.pagination.client ? l.data.slice(a.value, a.value + o.value) : l.data), u = c(() => a.value + o.value > y.value ? {
      start: a.value + 1,
      end: y.value
    } : {
      start: a.value + 1,
      end: a.value + o.value
    }), I = c(() => u.value.start === 1 ? "pager left" : "pager left show"), $ = c(() => u.value.end === y.value ? "pager right" : "pager right show");
    function v() {
      u.value.start === 1 || (a.value - o.value < 0 ? a.value = 0 : a.value = a.value - o.value), d("offsetChange", a.value);
    }
    function p() {
      u.value.end === y.value || (a.value = a.value + o.value), d("offsetChange", a.value);
    }
    return (r, D) => (n(), i("div", gt, [
      t("div", ht, [
        V(r.$slots, "table-actions", x(M({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: m(s(w))
          }, [
            V(r.$slots, "table-name", x(M({ name: e.name })), () => [
              j(f(e.name), 1)
            ], !0)
          ], 2),
          t("div", mt, [
            (n(!0), i(O, null, F(e.tableActions, (b) => (n(), i("div", {
              class: "action",
              onClick: (B) => b.click(e.data)
            }, [
              V(r.$slots, "table-action", x(M({ action: b, data: e.data })), () => [
                t("i", {
                  class: m(b.icon)
                }, null, 2),
                t("span", yt, f(b.name), 1)
              ], !0)
            ], 8, _t))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: m(s(C))
      }, [
        t("thead", bt, [
          t("tr", $t, [
            V(r.$slots, "header-row", x(M({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), i(O, null, F(e.headers, (b, B) => (n(), i("th", kt, [
                V(r.$slots, `header-col.${b.key}`, x(M({ header: b, i: B })), () => [
                  j(f(b.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), i("th", St, [
                V(r.$slots, "header-actions", x(M({ actions: e.actions })), void 0, !0)
              ])) : L("", !0)
            ], !0)
          ]),
          s(_) ? (n(), i("tr", Ct, [
            V(r.$slots, "progress-bar", x(M({ headers: e.headers, actions: e.actions, span: s(g) })), () => [
              t("th", { colspan: s(g) }, [
                J(pt)
              ], 8, wt)
            ], !0)
          ])) : L("", !0)
        ]),
        t("tbody", Dt, [
          s(_) ? L("", !0) : (n(!0), i(O, { key: 0 }, F(s(T), (b, B) => (n(), i("tr", Vt, [
            V(r.$slots, "data-row", x(M({ headers: e.headers, row: b, actions: e.actions, i: B })), () => [
              V(r.$slots, "data-content", x(M({ headers: e.headers, row: b, i: B })), () => [
                (n(!0), i(O, null, F(e.headers, (A) => (n(), i("td", Tt, [
                  V(r.$slots, `data-col.${A.key}`, x(M({ header: A, row: b, i: B })), () => [
                    j(f(b[A.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), i("td", It, [
                V(r.$slots, "data-actions", x(M({ row: b, actions: e.actions, i: B })), () => [
                  t("div", xt, [
                    (n(!0), i(O, null, F(e.actions, (A) => (n(), i("div", {
                      class: "action",
                      onClick: (Q) => A.click(b, B)
                    }, [
                      V(r.$slots, "data-action", x(M({ row: b, action: A, i: B })), () => [
                        t("i", {
                          class: m(A.icon)
                        }, null, 2),
                        t("span", Bt, f(A.name), 1)
                      ], !0)
                    ], 8, Mt))), 256))
                  ])
                ], !0)
              ])) : L("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", Lt, [
        V(r.$slots, "pagination", x(M({ pageLeft: v, pageRight: p, start: s(u).start, end: s(u).end, total: s(y) })), () => [
          t("div", {
            class: m(s(I)),
            onClick: D[0] || (D[0] = (b) => v())
          }, [
            V(r.$slots, "pager-left", {}, () => [
              Ot
            ], !0)
          ], 2),
          t("div", zt, [
            V(r.$slots, "page-number", x(M({ start: s(u).start, end: s(u).end, total: s(y) })), () => [
              s(u).start !== s(u).end ? (n(), i("span", At, f(s(u).start) + " - ", 1)) : L("", !0),
              t("span", Ft, f(s(u).end), 1),
              j(" / " + f(s(y)), 1)
            ], !0)
          ]),
          t("div", {
            class: m(s($)),
            onClick: D[1] || (D[1] = (b) => p())
          }, [
            V(r.$slots, "pager-right", {}, () => [
              Nt
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Yt = /* @__PURE__ */ z(Pt, [["__scopeId", "data-v-7832a2e2"]]);
const jt = (e) => (E("data-v-4b4a798c"), e = e(), H(), e), Rt = { class: "input-label" }, Wt = { class: "select" }, Jt = { class: "selected" }, Ut = { class: "tag" }, Et = /* @__PURE__ */ jt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), Ht = {
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
    const l = e, a = S(!1), o = S(""), _ = c(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), g = S([
      {
        name: "Select",
        icon: "",
        click: function(p, r) {
          $(p);
        }
      }
    ]), w = c(() => `input-control ${l.size}`);
    function C(p) {
      return y.value.find((D) => D === p.value) ? "checkbox checked" : "checkbox";
    }
    const y = c(() => l.modelValue), T = S({}), u = c(() => y.value.map((p) => {
      if (T[p])
        return T[p];
      {
        const D = ((l.options || []).find((b) => b.value === p) || {}).label;
        return T[p] = D, D;
      }
    }));
    function I() {
      a.value = !a.value;
    }
    function $(p) {
      const r = Array.from(y.value), D = r.findIndex((b) => b === p.value);
      D < 0 ? r.push(p.value) : r.splice(D, 1), d("update:modelValue", r);
    }
    function v(p) {
      d("offsetChange", p);
    }
    return W(() => {
    }), (p, r) => (n(), i("div", {
      class: m(s(w))
    }, [
      t("div", Rt, f(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: I
      }, [
        t("div", Wt, [
          (n(!0), i(O, null, F(s(u), (D) => (n(), i("div", Jt, [
            t("div", Ut, f(D), 1)
          ]))), 256))
        ]),
        Et
      ]),
      o.value.length > 0 ? (n(), i("div", Ht, f(o.value), 1)) : L("", !0),
      a.value ? (n(), U(K, {
        key: 1,
        modelValue: a.value,
        "onUpdate:modelValue": r[0] || (r[0] = (D) => a.value = D),
        title: "Select",
        width: 800,
        height: 600,
        class: "options-dialog"
      }, {
        body: R(() => [
          J(Yt, {
            name: e.name,
            headers: s(_),
            data: e.options,
            actions: g.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: v
          }, {
            "data-action": R(({ row: D, action: b, i: B }) => [
              t("div", {
                class: m(C(D))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : L("", !0)
    ], 2));
  }
}, aa = /* @__PURE__ */ z(qt, [["__scopeId", "data-v-4b4a798c"]]);
export {
  Kt as TAlert,
  te as TButton,
  Xt as TCheckbox,
  Qt as TConfirmDialog,
  Zt as TDatePicker,
  K as TDialog,
  ea as TInput,
  lt as TOption,
  pt as TProgressBar,
  ta as TSelect,
  aa as TSelectTable,
  Yt as TTable
};
