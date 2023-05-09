import { ref as k, computed as c, onMounted as W, openBlock as n, createElementBlock as u, normalizeClass as _, unref as s, createElementVNode as t, renderSlot as w, createTextVNode as j, toDisplayString as f, createBlock as U, isRef as le, withCtx as R, createCommentVNode as O, createVNode as J, Fragment as L, renderList as N, pushScopeId as E, popScopeId as H, normalizeProps as x, guardReactiveProps as M } from "vue";
const F = (e, r) => {
  const l = e.__vccOpts || e;
  for (const [a, o] of r)
    l[a] = o;
  return l;
}, ce = { class: "menu-bar" }, ve = { class: "container" }, fe = { class: "heading" }, pe = { class: "body" }, ge = { class: "actions" }, he = {
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
    const l = e, a = k("dialog"), o = c(() => l.modelValue ? "dialog show" : "dialog hide");
    function y() {
      r("update:modelValue", !1);
    }
    return W(() => {
      a.value.style.width = `${l.width}px`, a.value.style.height = `${l.height}px`, a.value.style.top = `calc((100vh - ${a.value.style.height}) / 2)`, a.value.style.left = `calc((100vw - ${a.value.style.width}) / 2)`;
    }), (h, C) => (n(), u("div", {
      class: _(s(o)),
      ref_key: "dialog",
      ref: a
    }, [
      t("div", ce, [
        w(h.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: C[0] || (C[0] = (S) => y())
          })
        ], !0)
      ]),
      t("div", ve, [
        t("div", fe, [
          w(h.$slots, "heading", {}, () => [
            j(f(e.title), 1)
          ], !0)
        ]),
        t("div", pe, [
          w(h.$slots, "body", {}, void 0, !0)
        ]),
        t("div", ge, [
          w(h.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, K = /* @__PURE__ */ F(he, [["__scopeId", "data-v-295738d8"]]), me = { class: "text" }, Kt = {
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
    const l = e, a = k("dialog"), o = c({
      get: () => l.modelValue,
      set: (y) => {
        r("update:modelValue", y);
      }
    });
    return (y, h) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": h[0] || (h[0] = (C) => le(o) ? o.value = C : null),
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
  setup(e, { emit: r }) {
    const l = e, a = c(() => `button ${l.buttonType} ${l.size}`.trim()), o = c(() => `${l.icon} fa-lg`.trim());
    return (y, h) => (n(), u("div", {
      class: _(s(a)),
      onClick: h[0] || (h[0] = (C) => y.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), u("span", _e, f(e.value), 1)) : O("", !0),
      t("i", {
        class: _(s(o))
      }, null, 2)
    ], 2));
  }
}, te = /* @__PURE__ */ F(ye, [["__scopeId", "data-v-c26a9562"]]);
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
  setup(e, { emit: r }) {
    const l = e, a = k("dialog"), o = c({
      get: () => l.modelValue,
      set: (C) => {
        r("update:modelValue", C);
      }
    });
    function y() {
      r("update:modelValue", !1), r("confirm");
    }
    function h() {
      r("update:modelValue", !1), r("cancel");
    }
    return (C, S) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": S[2] || (S[2] = (p) => le(o) ? o.value = p : null),
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
          onClick: S[0] || (S[0] = (p) => y())
        }),
        J(te, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: S[1] || (S[1] = (p) => h())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, Qt = /* @__PURE__ */ F(ke, [["__scopeId", "data-v-87937dbc"]]);
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
  setup(e, { emit: r }) {
    const l = e, a = k(l.modelValue), o = c(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), y = c(() => a.value ? "input-field checked" : "input-field");
    function h() {
      a.value = !a.value, r("update:modelValue", a.value);
    }
    return (C, S) => (n(), u(L, null, [
      t("div", {
        class: _(s(o)),
        onClick: h
      }, [
        t("div", {
          class: _(s(y))
        }, null, 2),
        t("div", Se, f(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", Ce, f(e.errorMessage), 1)) : O("", !0)
    ], 64));
  }
}, Xt = /* @__PURE__ */ F(we, [["__scopeId", "data-v-5ea6b79c"]]);
const Y = (e) => (E("data-v-d86d3630"), e = e(), H(), e), De = { class: "input-label" }, Ve = { class: "selected" }, Te = ["value"], Ie = ["value"], xe = ["value"], Me = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Be = { class: "year picker" }, Oe = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Le = { class: "options" }, ze = ["value", "onClick"], Fe = { class: "value" }, Ne = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Pe = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Ae = { class: "options" }, Ye = ["value", "onClick"], je = { class: "value" }, Re = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), We = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Je = { class: "options" }, Ue = ["value", "onClick"], Ee = { class: "value" }, He = {
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
  setup(e, { emit: r }) {
    const l = e, a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear() - 10, 1, 1), y = new Date(a.getFullYear() + 9, 12, 31), h = [
      ...Array(y.getFullYear() - o.getFullYear()).keys()
    ].map(($) => $ + o.getFullYear()), C = [
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
    ], S = k([]), p = k("collapsed"), D = k(), d = k(), V = k();
    k();
    const b = k(!1), v = k(!1), I = c(() => "input-control"), i = c(() => `input-field ${p.value}`.trim()), T = c(() => b.value ? "month picker show" : "month picker hide"), g = c(() => v.value ? "day picker show" : "day picker hide"), B = c(() => !D.value || !d.value || !V.value ? null : new Date(D.value, d.value, V.value)), z = c(() => D.value ? G(D.value, 1, 1).split("-")[0] : q(/* @__PURE__ */ new Date()).split("-")[0]), Q = c(() => d.value ? G(1900, d.value, 1).split("-")[1] : q(/* @__PURE__ */ new Date()).split("-")[1]), se = c(() => V.value ? G(1900, 1, V.value).split("-")[2] : q(/* @__PURE__ */ new Date()).split("-")[2]);
    function ne($, P) {
      const m = new Date($, P, 1);
      return m.setMonth(m.getMonth() + 1), m.setDate(m.getDate() - 1), m.getDate();
    }
    function q($) {
      const P = $.toLocaleString("default", { year: "numeric" }), m = $.toLocaleString("default", { month: "2-digit" }), A = $.toLocaleString("default", { day: "2-digit" });
      return [P, m, A].join("-");
    }
    function G($, P, m) {
      const A = new Date($, P, m);
      return $ = A.toLocaleString("default", { year: "numeric" }), P = A.toLocaleString("default", { month: "2-digit" }), m = A.toLocaleString("default", { day: "2-digit" }), [$, P, m].join("-");
    }
    function oe() {
      p.value === "collapsed" ? (p.value = "expanded", D.value && (b.value = !0), d.value && (v.value = !0)) : (p.value = "collapsed", b.value = !1, v.value = !1);
    }
    function ie($) {
      return $ === D.value ? "option selected" : "option";
    }
    function ue($) {
      return $ === d.value ? "option selected" : "option";
    }
    function de($) {
      return $ === V.value ? "option selected" : "option";
    }
    function X($) {
      D.value = $, d.value = 0, V.value = 1, b.value = !0, v.value = !1;
    }
    function Z($) {
      d.value = $, V.value = 1, v.value = !0, S.value = ne(D.value, d.value);
    }
    function ee($) {
      p.value = "collapsed", V.value = $, b.value = !1, v.value = !1, r("update:modelValue", B);
    }
    function re() {
      l.modelValue && (X(l.modelValue.getFullYear()), Z(l.modelValue.getMonth()), ee(l.modelValue.getDate()));
    }
    return W(() => {
      re();
    }), ($, P) => (n(), u("div", {
      class: _(s(I))
    }, [
      t("div", De, f(e.label), 1),
      t("div", {
        class: _(s(i))
      }, [
        t("div", {
          class: "select",
          onClick: oe
        }, [
          t("div", Ve, [
            t("input", {
              disabled: "",
              value: s(z)
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
          Oe,
          t("div", Le, [
            (n(!0), u(L, null, N(s(h), (m) => (n(), u("div", {
              class: _(ie(m)),
              value: m,
              onClick: (A) => X(m)
            }, [
              t("div", Fe, f(m), 1),
              Ne
            ], 10, ze))), 256))
          ])
        ]),
        t("div", {
          class: _(s(T))
        }, [
          Pe,
          t("div", Ae, [
            (n(!0), u(L, null, N(Object.keys(C), (m) => (n(), u("div", {
              class: _(ue(m)),
              value: m,
              onClick: (A) => Z(m)
            }, [
              t("div", je, f(C[m]), 1),
              Re
            ], 10, Ye))), 256))
          ])
        ], 2),
        t("div", {
          class: _(s(g))
        }, [
          We,
          t("div", Je, [
            (n(!0), u(L, null, N(S.value, (m) => (n(), u("div", {
              class: _(de(m)),
              value: m,
              onClick: (A) => ee(m)
            }, [
              t("div", Ee, f(m), 1)
            ], 10, Ue))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", He, f(e.errorMessage), 1)) : O("", !0)
    ], 2));
  }
}, Zt = /* @__PURE__ */ F(qe, [["__scopeId", "data-v-d86d3630"]]);
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
    return (r, l) => (n(), u("div", Ge, [
      t("div", Ke, f(e.label), 1),
      t("div", Qe, [
        t("input", {
          type: e.type,
          class: _(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (a) => r.$emit("update:modelValue", a.target.value))
        }, null, 42, Xe)
      ]),
      e.errorMessage.length > 0 ? (n(), u("div", Ze, f(e.errorMessage), 1)) : O("", !0)
    ]));
  }
}, el = /* @__PURE__ */ F(et, [["__scopeId", "data-v-c182bf09"]]);
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
  setup(e, { emit: r }) {
    const l = e, a = c(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (o, y) => (n(), u("div", {
      class: _(s(a)),
      value: e.value,
      onClick: y[0] || (y[0] = (h) => o.$emit("select", e.value))
    }, f(e.label), 11, tt));
  }
}, at = /* @__PURE__ */ F(lt, [["__scopeId", "data-v-1fa7fb5e"]]);
const st = (e) => (E("data-v-386634d6"), e = e(), H(), e), nt = { class: "input-label" }, ot = ["name"], it = { class: "selected" }, ut = /* @__PURE__ */ st(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), dt = { class: "options" }, rt = {
  key: 0,
  class: "input-error"
}, ct = {
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
    const l = e, a = k("collapsed"), o = k(""), y = c(() => `input-control ${l.size}`.trim()), h = c(() => `input-field ${a.value}`.trim()), C = c(() => {
      const d = l.options.find((V) => V.value === o.value);
      return d ? d.label : "";
    });
    function S() {
      a.value === "collapsed" ? a.value = "expanded" : a.value = "collapsed";
    }
    function p(d) {
      return d === o.value;
    }
    function D(d) {
      a.value = "collapsed", o.value = d, r("update:modelValue", d);
    }
    return W(() => {
      D(l.modelValue);
    }), (d, V) => (n(), u("div", {
      class: _(s(y))
    }, [
      t("div", nt, f(e.label), 1),
      t("div", {
        class: _(s(h))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: S
        }, [
          t("div", it, f(s(C)), 1),
          ut
        ], 8, ot),
        t("div", dt, [
          (n(!0), u(L, null, N(e.options, (b) => (n(), U(at, {
            value: b.value,
            label: b.label,
            size: e.size,
            selected: p(b.value),
            onSelect: (v) => D(b.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", rt, f(e.errorMessage), 1)) : O("", !0)
    ], 2));
  }
}, tl = /* @__PURE__ */ F(ct, [["__scopeId", "data-v-386634d6"]]);
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
    const r = e, l = k("forward"), a = k(null), o = k(null), y = k(), h = c(() => `bar forward-bar ${l.value}`), C = c(() => r.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    W(() => {
      y.value = setInterval(p, r.speed);
    });
    function S(v) {
      return parseInt(v.style.width.split("%")[0]);
    }
    function p() {
      r.bidirection ? d() : D();
    }
    function D() {
      const v = S(a.value);
      v === 100 ? r.indefinite ? V(a.value) : clearInterval(y.value) : b(a.value, "forward", v);
    }
    function d() {
      const v = S(a.value), I = S(o.value);
      l.value === "forward" && v === 100 ? (l.value = "reverse", b(a.value, "reverse", v), b(o.value, "forward", I)) : l.value === "reverse" && I === 100 ? (l.value = "forward", b(a.value, "forward", v), b(o.value, "reverse", I)) : l.value === "forward" ? (b(a.value, "forward", v), b(o.value, "reverse", I)) : l.value === "reverse" && (b(a.value, "reverse", v), b(o.value, "forward", I));
    }
    function V(v) {
      v.style.width = "0%";
    }
    function b(v, I, i) {
      I === "forward" ? v.style.width = [(i + r.step).toString(), "%"].join("") : v.style.width = [(i - r.step).toString(), "%"].join("");
    }
    return (v, I) => (n(), u("div", vt, [
      t("div", {
        class: _(s(h)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: a
      }, null, 2),
      t("div", {
        class: _(s(C)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: o
      }, null, 2)
    ]));
  }
}, pt = /* @__PURE__ */ F(ft, [["__scopeId", "data-v-554f77de"]]);
const ae = (e) => (E("data-v-7832a2e2"), e = e(), H(), e), gt = { class: "table-container" }, ht = { class: "table-actions" }, mt = { class: "actions" }, _t = ["onClick"], yt = { class: "tooltip" }, bt = { class: "header" }, $t = { class: "row" }, kt = { class: "col" }, St = {
  key: 0,
  class: "col"
}, Ct = {
  key: 0,
  class: "loading"
}, wt = ["colspan"], Dt = { class: "body" }, Vt = { class: "row" }, Tt = { class: "col" }, It = {
  key: 0,
  class: "col"
}, xt = { class: "actions" }, Mt = ["onClick"], Bt = { class: "tooltip" }, Ot = { class: "pagination" }, Lt = /* @__PURE__ */ ae(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), zt = { class: "page-number" }, Ft = {
  key: 0,
  class: "current"
}, Nt = { class: "current" }, Pt = /* @__PURE__ */ ae(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), At = {
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
    const l = e, a = k(0), o = k(l.pagination.limit), y = c(() => l.pagination.client ? !1 : l.loading), h = c(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), C = c(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), S = c(() => l.dense ? "table dense" : "table"), p = c(() => l.pagination.client ? l.data.length : l.totalData), D = c(() => l.pagination.client ? l.data.slice(a.value, a.value + o.value) : l.data), d = c(() => a.value + o.value > p.value ? {
      start: a.value + 1,
      end: p.value
    } : {
      start: a.value + 1,
      end: a.value + o.value
    }), V = c(() => d.value.start === 1 ? "pager left" : "pager left show"), b = c(() => d.value.end === p.value ? "pager right" : "pager right show");
    function v() {
      d.value.start === 1 || (a.value - o.value < 0 ? a.value = 0 : a.value = a.value - o.value), r("offsetChange", a.value);
    }
    function I() {
      d.value.end === p.value || (a.value = a.value + o.value), r("offsetChange", a.value);
    }
    return (i, T) => (n(), u("div", gt, [
      t("div", ht, [
        w(i.$slots, "table-actions", x(M({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: _(s(C))
          }, [
            w(i.$slots, "table-name", x(M({ name: e.name })), () => [
              j(f(e.name), 1)
            ], !0)
          ], 2),
          t("div", mt, [
            (n(!0), u(L, null, N(e.tableActions, (g) => (n(), u("div", {
              class: "action",
              onClick: (B) => g.click(e.data)
            }, [
              w(i.$slots, "table-action", x(M({ action: g, data: e.data })), () => [
                t("i", {
                  class: _(g.icon)
                }, null, 2),
                t("span", yt, f(g.name), 1)
              ], !0)
            ], 8, _t))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: _(s(S))
      }, [
        t("thead", bt, [
          t("tr", $t, [
            w(i.$slots, "header-row", x(M({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), u(L, null, N(e.headers, (g, B) => (n(), u("th", kt, [
                w(i.$slots, `header-col.${g.key}`, x(M({ header: g, i: B })), () => [
                  j(f(g.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), u("th", St, [
                w(i.$slots, "header-actions", x(M({ actions: e.actions })), void 0, !0)
              ])) : O("", !0)
            ], !0)
          ]),
          s(y) ? (n(), u("tr", Ct, [
            w(i.$slots, "progress-bar", x(M({ headers: e.headers, actions: e.actions, span: s(h) })), () => [
              t("th", { colspan: s(h) }, [
                J(pt)
              ], 8, wt)
            ], !0)
          ])) : O("", !0)
        ]),
        t("tbody", Dt, [
          s(y) ? O("", !0) : (n(!0), u(L, { key: 0 }, N(s(D), (g, B) => (n(), u("tr", Vt, [
            w(i.$slots, "data-row", x(M({ headers: e.headers, row: g, actions: e.actions, i: B })), () => [
              w(i.$slots, "data-content", x(M({ headers: e.headers, row: g, i: B })), () => [
                (n(!0), u(L, null, N(e.headers, (z) => (n(), u("td", Tt, [
                  w(i.$slots, `data-col.${z.key}`, x(M({ header: z, row: g, i: B })), () => [
                    j(f(g[z.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), u("td", It, [
                w(i.$slots, "data-actions", x(M({ row: g, actions: e.actions, i: B })), () => [
                  t("div", xt, [
                    (n(!0), u(L, null, N(e.actions, (z) => (n(), u("div", {
                      class: "action",
                      onClick: (Q) => z.click(g, B)
                    }, [
                      w(i.$slots, "data-action", x(M({ row: g, action: z, i: B })), () => [
                        t("i", {
                          class: _(z.icon)
                        }, null, 2),
                        t("span", Bt, f(z.name), 1)
                      ], !0)
                    ], 8, Mt))), 256))
                  ])
                ], !0)
              ])) : O("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", Ot, [
        w(i.$slots, "pagination", x(M({ pageLeft: v, pageRight: I, start: s(d).start, end: s(d).end, total: s(p) })), () => [
          t("div", {
            class: _(s(V)),
            onClick: T[0] || (T[0] = (g) => v())
          }, [
            w(i.$slots, "pager-left", {}, () => [
              Lt
            ], !0)
          ], 2),
          t("div", zt, [
            w(i.$slots, "page-number", x(M({ start: s(d).start, end: s(d).end, total: s(p) })), () => [
              s(d).start !== s(d).end ? (n(), u("span", Ft, f(s(d).start) + " - ", 1)) : O("", !0),
              t("span", Nt, f(s(d).end), 1),
              j(" / " + f(s(p)), 1)
            ], !0)
          ]),
          t("div", {
            class: _(s(b)),
            onClick: T[1] || (T[1] = (g) => I())
          }, [
            w(i.$slots, "pager-right", {}, () => [
              Pt
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Yt = /* @__PURE__ */ F(At, [["__scopeId", "data-v-7832a2e2"]]);
const jt = (e) => (E("data-v-ebe065de"), e = e(), H(), e), Rt = { class: "input-label" }, Wt = { class: "select" }, Jt = { class: "selected" }, Ut = { class: "tag" }, Et = /* @__PURE__ */ jt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
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
  setup(e, { emit: r }) {
    const l = e, a = k(!1), o = k(""), y = c(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), h = k([
      {
        name: "Select",
        icon: "",
        click: function(i, T) {
          v(i);
        }
      }
    ]), C = c(() => `input-control ${l.size}`);
    function S(i) {
      return p.value[i.value] ? "checkbox checked" : "checkbox";
    }
    const p = k({});
    function D() {
      return l.options.reduce((i, T) => (l.modelValue ? i[T.value] = !!l.modelValue.find((g) => g === T.value) : i[T.value] = !1, i), {});
    }
    const d = c(() => Object.keys(p.value).filter((i) => p.value[i])), V = c(() => d.value.map((i) => l.options.find((T) => T.value === i).label));
    function b() {
      a.value = !a.value;
    }
    function v(i) {
      p.value[i.value] = !p.value[i.value], r("update:modelValue", d.value);
    }
    function I(i) {
      r("offsetChange", i);
    }
    return W(() => {
      p.value = D();
    }), (i, T) => (n(), u(L, null, [
      t("div", {
        class: _(s(C))
      }, [
        t("div", Rt, f(e.label), 1),
        t("div", {
          class: "input-field",
          onClick: b
        }, [
          t("div", Wt, [
            (n(!0), u(L, null, N(s(V), (g) => (n(), u("div", Jt, [
              t("div", Ut, f(g), 1)
            ]))), 256))
          ]),
          Et
        ]),
        o.value.length > 0 ? (n(), u("div", Ht, f(o.value), 1)) : O("", !0)
      ], 2),
      a.value ? (n(), U(K, {
        key: 0,
        modelValue: a.value,
        "onUpdate:modelValue": T[0] || (T[0] = (g) => a.value = g),
        title: "Select",
        width: 800,
        height: 600,
        class: "options-dialog"
      }, {
        body: R(() => [
          J(Yt, {
            name: e.name,
            headers: s(y),
            data: e.options,
            actions: h.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: I
          }, {
            "data-action": R(({ row: g, action: B, i: z }) => [
              t("div", {
                class: _(S(g))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : O("", !0)
    ], 64));
  }
}, ll = /* @__PURE__ */ F(qt, [["__scopeId", "data-v-ebe065de"]]);
export {
  Kt as TAlert,
  te as TButton,
  Xt as TCheckbox,
  Qt as TConfirmDialog,
  Zt as TDatePicker,
  K as TDialog,
  el as TInput,
  at as TOption,
  pt as TProgressBar,
  tl as TSelect,
  ll as TSelectTable,
  Yt as TTable
};
