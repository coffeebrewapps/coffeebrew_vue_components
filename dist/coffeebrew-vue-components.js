import { ref as $, computed as r, onMounted as W, openBlock as n, createElementBlock as i, normalizeClass as _, unref as s, createElementVNode as t, renderSlot as V, createTextVNode as j, toDisplayString as f, createBlock as U, isRef as le, withCtx as R, createCommentVNode as O, createVNode as J, Fragment as F, renderList as A, pushScopeId as E, popScopeId as H, normalizeProps as x, guardReactiveProps as M } from "vue";
const P = (e, c) => {
  const l = e.__vccOpts || e;
  for (const [a, o] of c)
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
  setup(e, { emit: c }) {
    const l = e, a = $("dialog"), o = r(() => l.modelValue ? "dialog show" : "dialog hide");
    function m() {
      c("update:modelValue", !1);
    }
    return W(() => {
      a.value.style.width = `${l.width}px`, a.value.style.height = `${l.height}px`, a.value.style.top = `calc((100vh - ${a.value.style.height}) / 2)`, a.value.style.left = `calc((100vw - ${a.value.style.width}) / 2)`;
    }), (g, w) => (n(), i("div", {
      class: _(s(o)),
      ref_key: "dialog",
      ref: a
    }, [
      t("div", ce, [
        V(g.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: w[0] || (w[0] = (S) => m())
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
}, K = /* @__PURE__ */ P(he, [["__scopeId", "data-v-295738d8"]]), _e = { class: "text" }, Kt = {
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
  setup(e, { emit: c }) {
    const l = e, a = $("dialog"), o = r({
      get: () => l.modelValue,
      set: (m) => {
        c("update:modelValue", m);
      }
    });
    return (m, g) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": g[0] || (g[0] = (w) => le(o) ? o.value = w : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: R(() => [
        t("div", _e, f(e.content), 1)
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
  setup(e, { emit: c }) {
    const l = e, a = r(() => `button ${l.buttonType} ${l.size}`.trim()), o = r(() => `${l.icon} fa-lg`.trim());
    return (m, g) => (n(), i("div", {
      class: _(s(a)),
      onClick: g[0] || (g[0] = (w) => m.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), i("span", me, f(e.value), 1)) : O("", !0),
      t("i", {
        class: _(s(o))
      }, null, 2)
    ], 2));
  }
}, te = /* @__PURE__ */ P(ye, [["__scopeId", "data-v-c26a9562"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = $("dialog"), o = r({
      get: () => l.modelValue,
      set: (w) => {
        c("update:modelValue", w);
      }
    });
    function m() {
      c("update:modelValue", !1), c("confirm");
    }
    function g() {
      c("update:modelValue", !1), c("cancel");
    }
    return (w, S) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": S[2] || (S[2] = (k) => le(o) ? o.value = k : null),
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
          onClick: S[0] || (S[0] = (k) => m())
        }),
        J(te, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: S[1] || (S[1] = (k) => g())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, Qt = /* @__PURE__ */ P(ke, [["__scopeId", "data-v-87937dbc"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = $(l.modelValue), o = r(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), m = r(() => a.value ? "input-field checked" : "input-field");
    function g() {
      a.value = !a.value, c("update:modelValue", a.value);
    }
    return (w, S) => (n(), i(F, null, [
      t("div", {
        class: _(s(o)),
        onClick: g
      }, [
        t("div", {
          class: _(s(m))
        }, null, 2),
        t("div", Se, f(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", Ce, f(e.errorMessage), 1)) : O("", !0)
    ], 64));
  }
}, Xt = /* @__PURE__ */ P(we, [["__scopeId", "data-v-5ea6b79c"]]);
const Y = (e) => (E("data-v-d86d3630"), e = e(), H(), e), Ve = { class: "input-label" }, De = { class: "selected" }, Te = ["value"], Ie = ["value"], xe = ["value"], Me = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Be = { class: "year picker" }, Oe = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Fe = { class: "options" }, ze = ["value", "onClick"], Pe = { class: "value" }, Ae = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ne = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Le = { class: "options" }, Ye = ["value", "onClick"], je = { class: "value" }, Re = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), We = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Je = { class: "options" }, Ue = ["value", "onClick"], Ee = { class: "value" }, He = {
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
  setup(e, { emit: c }) {
    const l = e, a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear() - 10, 1, 1), m = new Date(a.getFullYear() + 9, 12, 31), g = [
      ...Array(m.getFullYear() - o.getFullYear()).keys()
    ].map((b) => b + o.getFullYear()), w = [
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
    ], S = $([]), k = $("collapsed"), C = $(), d = $(), D = $();
    $();
    const y = $(!1), v = $(!1), I = r(() => "input-control"), u = r(() => `input-field ${k.value}`.trim()), T = r(() => y.value ? "month picker show" : "month picker hide"), p = r(() => v.value ? "day picker show" : "day picker hide"), B = r(() => !C.value || !d.value || !D.value ? null : new Date(C.value, d.value, D.value)), z = r(() => C.value ? G(C.value, 1, 1).split("-")[0] : q(/* @__PURE__ */ new Date()).split("-")[0]), Q = r(() => d.value ? G(1900, d.value, 1).split("-")[1] : q(/* @__PURE__ */ new Date()).split("-")[1]), se = r(() => D.value ? G(1900, 1, D.value).split("-")[2] : q(/* @__PURE__ */ new Date()).split("-")[2]);
    function ne(b, N) {
      const h = new Date(b, N, 1);
      return h.setMonth(h.getMonth() + 1), h.setDate(h.getDate() - 1), h.getDate();
    }
    function q(b) {
      const N = b.toLocaleString("default", { year: "numeric" }), h = b.toLocaleString("default", { month: "2-digit" }), L = b.toLocaleString("default", { day: "2-digit" });
      return [N, h, L].join("-");
    }
    function G(b, N, h) {
      const L = new Date(b, N, h);
      return b = L.toLocaleString("default", { year: "numeric" }), N = L.toLocaleString("default", { month: "2-digit" }), h = L.toLocaleString("default", { day: "2-digit" }), [b, N, h].join("-");
    }
    function oe() {
      k.value === "collapsed" ? (k.value = "expanded", C.value && (y.value = !0), d.value && (v.value = !0)) : (k.value = "collapsed", y.value = !1, v.value = !1);
    }
    function ie(b) {
      return b === C.value ? "option selected" : "option";
    }
    function ue(b) {
      return b === d.value ? "option selected" : "option";
    }
    function de(b) {
      return b === D.value ? "option selected" : "option";
    }
    function X(b) {
      C.value = b, d.value = 0, D.value = 1, y.value = !0, v.value = !1;
    }
    function Z(b) {
      d.value = b, D.value = 1, v.value = !0, S.value = ne(C.value, d.value);
    }
    function ee(b) {
      k.value = "collapsed", D.value = b, y.value = !1, v.value = !1, c("update:modelValue", B);
    }
    function re() {
      l.modelValue && (X(l.modelValue.getFullYear()), Z(l.modelValue.getMonth()), ee(l.modelValue.getDate()));
    }
    return W(() => {
      re();
    }), (b, N) => (n(), i("div", {
      class: _(s(I))
    }, [
      t("div", Ve, f(e.label), 1),
      t("div", {
        class: _(s(u))
      }, [
        t("div", {
          class: "select",
          onClick: oe
        }, [
          t("div", De, [
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
          t("div", Fe, [
            (n(!0), i(F, null, A(s(g), (h) => (n(), i("div", {
              class: _(ie(h)),
              value: h,
              onClick: (L) => X(h)
            }, [
              t("div", Pe, f(h), 1),
              Ae
            ], 10, ze))), 256))
          ])
        ]),
        t("div", {
          class: _(s(T))
        }, [
          Ne,
          t("div", Le, [
            (n(!0), i(F, null, A(Object.keys(w), (h) => (n(), i("div", {
              class: _(ue(h)),
              value: h,
              onClick: (L) => Z(h)
            }, [
              t("div", je, f(w[h]), 1),
              Re
            ], 10, Ye))), 256))
          ])
        ], 2),
        t("div", {
          class: _(s(p))
        }, [
          We,
          t("div", Je, [
            (n(!0), i(F, null, A(S.value, (h) => (n(), i("div", {
              class: _(de(h)),
              value: h,
              onClick: (L) => ee(h)
            }, [
              t("div", Ee, f(h), 1)
            ], 10, Ue))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", He, f(e.errorMessage), 1)) : O("", !0)
    ], 2));
  }
}, Zt = /* @__PURE__ */ P(qe, [["__scopeId", "data-v-d86d3630"]]);
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
    return (c, l) => (n(), i("div", Ge, [
      t("div", Ke, f(e.label), 1),
      t("div", Qe, [
        t("input", {
          type: e.type,
          class: _(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (a) => c.$emit("update:modelValue", a.target.value))
        }, null, 42, Xe)
      ]),
      e.errorMessage.length > 0 ? (n(), i("div", Ze, f(e.errorMessage), 1)) : O("", !0)
    ]));
  }
}, el = /* @__PURE__ */ P(et, [["__scopeId", "data-v-c182bf09"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = r(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (o, m) => (n(), i("div", {
      class: _(s(a)),
      value: e.value,
      onClick: m[0] || (m[0] = (g) => o.$emit("select", e.value))
    }, f(e.label), 11, tt));
  }
}, at = /* @__PURE__ */ P(lt, [["__scopeId", "data-v-1fa7fb5e"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = $("collapsed"), o = $(""), m = r(() => `input-control ${l.size}`.trim()), g = r(() => `input-field ${a.value}`.trim()), w = r(() => {
      const d = l.options.find((D) => D.value === o.value);
      return d ? d.label : "";
    });
    function S() {
      a.value === "collapsed" ? a.value = "expanded" : a.value = "collapsed";
    }
    function k(d) {
      return d === o.value;
    }
    function C(d) {
      a.value = "collapsed", o.value = d, c("update:modelValue", d);
    }
    return W(() => {
      C(l.modelValue);
    }), (d, D) => (n(), i("div", {
      class: _(s(m))
    }, [
      t("div", nt, f(e.label), 1),
      t("div", {
        class: _(s(g))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: S
        }, [
          t("div", it, f(s(w)), 1),
          ut
        ], 8, ot),
        t("div", dt, [
          (n(!0), i(F, null, A(e.options, (y) => (n(), U(at, {
            value: y.value,
            label: y.label,
            size: e.size,
            selected: k(y.value),
            onSelect: (v) => C(y.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), i("div", rt, f(e.errorMessage), 1)) : O("", !0)
    ], 2));
  }
}, tl = /* @__PURE__ */ P(ct, [["__scopeId", "data-v-386634d6"]]);
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
    const c = e, l = $("forward"), a = $(null), o = $(null), m = $(), g = r(() => `bar forward-bar ${l.value}`), w = r(() => c.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    W(() => {
      m.value = setInterval(k, c.speed);
    });
    function S(v) {
      return parseInt(v.style.width.split("%")[0]);
    }
    function k() {
      c.bidirection ? d() : C();
    }
    function C() {
      const v = S(a.value);
      v === 100 ? c.indefinite ? D(a.value) : clearInterval(m.value) : y(a.value, "forward", v);
    }
    function d() {
      const v = S(a.value), I = S(o.value);
      l.value === "forward" && v === 100 ? (l.value = "reverse", y(a.value, "reverse", v), y(o.value, "forward", I)) : l.value === "reverse" && I === 100 ? (l.value = "forward", y(a.value, "forward", v), y(o.value, "reverse", I)) : l.value === "forward" ? (y(a.value, "forward", v), y(o.value, "reverse", I)) : l.value === "reverse" && (y(a.value, "reverse", v), y(o.value, "forward", I));
    }
    function D(v) {
      v.style.width = "0%";
    }
    function y(v, I, u) {
      I === "forward" ? v.style.width = [(u + c.step).toString(), "%"].join("") : v.style.width = [(u - c.step).toString(), "%"].join("");
    }
    return (v, I) => (n(), i("div", vt, [
      t("div", {
        class: _(s(g)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: a
      }, null, 2),
      t("div", {
        class: _(s(w)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: o
      }, null, 2)
    ]));
  }
}, pt = /* @__PURE__ */ P(ft, [["__scopeId", "data-v-554f77de"]]);
const ae = (e) => (E("data-v-7832a2e2"), e = e(), H(), e), gt = { class: "table-container" }, ht = { class: "table-actions" }, _t = { class: "actions" }, mt = ["onClick"], yt = { class: "tooltip" }, bt = { class: "header" }, $t = { class: "row" }, kt = { class: "col" }, St = {
  key: 0,
  class: "col"
}, Ct = {
  key: 0,
  class: "loading"
}, wt = ["colspan"], Vt = { class: "body" }, Dt = { class: "row" }, Tt = { class: "col" }, It = {
  key: 0,
  class: "col"
}, xt = { class: "actions" }, Mt = ["onClick"], Bt = { class: "tooltip" }, Ot = { class: "pagination" }, Ft = /* @__PURE__ */ ae(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), zt = { class: "page-number" }, Pt = {
  key: 0,
  class: "current"
}, At = { class: "current" }, Nt = /* @__PURE__ */ ae(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Lt = {
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
  setup(e, { emit: c }) {
    const l = e, a = $(0), o = $(l.pagination.limit), m = r(() => l.pagination.client ? !1 : l.loading), g = r(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), w = r(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), S = r(() => l.dense ? "table dense" : "table"), k = r(() => l.pagination.client ? l.data.length : l.totalData), C = r(() => l.pagination.client ? l.data.slice(a.value, a.value + o.value) : l.data), d = r(() => a.value + o.value > k.value ? {
      start: a.value + 1,
      end: k.value
    } : {
      start: a.value + 1,
      end: a.value + o.value
    }), D = r(() => d.value.start === 1 ? "pager left" : "pager left show"), y = r(() => d.value.end === k.value ? "pager right" : "pager right show");
    function v() {
      d.value.start === 1 || (a.value - o.value < 0 ? a.value = 0 : a.value = a.value - o.value), c("offsetChange", a.value);
    }
    function I() {
      d.value.end === k.value || (a.value = a.value + o.value), c("offsetChange", a.value);
    }
    return (u, T) => (n(), i("div", gt, [
      t("div", ht, [
        V(u.$slots, "table-actions", x(M({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: _(s(w))
          }, [
            V(u.$slots, "table-name", x(M({ name: e.name })), () => [
              j(f(e.name), 1)
            ], !0)
          ], 2),
          t("div", _t, [
            (n(!0), i(F, null, A(e.tableActions, (p) => (n(), i("div", {
              class: "action",
              onClick: (B) => p.click(e.data)
            }, [
              V(u.$slots, "table-action", x(M({ action: p, data: e.data })), () => [
                t("i", {
                  class: _(p.icon)
                }, null, 2),
                t("span", yt, f(p.name), 1)
              ], !0)
            ], 8, mt))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: _(s(S))
      }, [
        t("thead", bt, [
          t("tr", $t, [
            V(u.$slots, "header-row", x(M({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), i(F, null, A(e.headers, (p, B) => (n(), i("th", kt, [
                V(u.$slots, `header-col.${p.key}`, x(M({ header: p, i: B })), () => [
                  j(f(p.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), i("th", St, [
                V(u.$slots, "header-actions", x(M({ actions: e.actions })), void 0, !0)
              ])) : O("", !0)
            ], !0)
          ]),
          s(m) ? (n(), i("tr", Ct, [
            V(u.$slots, "progress-bar", x(M({ headers: e.headers, actions: e.actions, span: s(g) })), () => [
              t("th", { colspan: s(g) }, [
                J(pt)
              ], 8, wt)
            ], !0)
          ])) : O("", !0)
        ]),
        t("tbody", Vt, [
          s(m) ? O("", !0) : (n(!0), i(F, { key: 0 }, A(s(C), (p, B) => (n(), i("tr", Dt, [
            V(u.$slots, "data-row", x(M({ headers: e.headers, row: p, actions: e.actions, i: B })), () => [
              V(u.$slots, "data-content", x(M({ headers: e.headers, row: p, i: B })), () => [
                (n(!0), i(F, null, A(e.headers, (z) => (n(), i("td", Tt, [
                  V(u.$slots, `data-col.${z.key}`, x(M({ header: z, row: p, i: B })), () => [
                    j(f(p[z.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), i("td", It, [
                V(u.$slots, "data-actions", x(M({ row: p, actions: e.actions, i: B })), () => [
                  t("div", xt, [
                    (n(!0), i(F, null, A(e.actions, (z) => (n(), i("div", {
                      class: "action",
                      onClick: (Q) => z.click(p, B)
                    }, [
                      V(u.$slots, "data-action", x(M({ row: p, action: z, i: B })), () => [
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
        V(u.$slots, "pagination", x(M({ pageLeft: v, pageRight: I, start: s(d).start, end: s(d).end, total: s(k) })), () => [
          t("div", {
            class: _(s(D)),
            onClick: T[0] || (T[0] = (p) => v())
          }, [
            V(u.$slots, "pager-left", {}, () => [
              Ft
            ], !0)
          ], 2),
          t("div", zt, [
            V(u.$slots, "page-number", x(M({ start: s(d).start, end: s(d).end, total: s(k) })), () => [
              s(d).start !== s(d).end ? (n(), i("span", Pt, f(s(d).start) + " - ", 1)) : O("", !0),
              t("span", At, f(s(d).end), 1),
              j(" / " + f(s(k)), 1)
            ], !0)
          ]),
          t("div", {
            class: _(s(y)),
            onClick: T[1] || (T[1] = (p) => I())
          }, [
            V(u.$slots, "pager-right", {}, () => [
              Nt
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Yt = /* @__PURE__ */ P(Lt, [["__scopeId", "data-v-7832a2e2"]]);
const jt = (e) => (E("data-v-09bcb4e4"), e = e(), H(), e), Rt = { class: "input-label" }, Wt = { class: "select" }, Jt = { class: "selected" }, Ut = { class: "tag" }, Et = /* @__PURE__ */ jt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
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
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: c }) {
    const l = e, a = $(!1), o = $(""), m = r(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), g = $([
      {
        name: "Select",
        icon: "",
        click: function(u, T) {
          v(u);
        }
      }
    ]), w = r(() => `input-control ${l.size}`);
    function S(u) {
      return C.value[u.value] ? "checkbox checked" : "checkbox";
    }
    function k() {
      return l.options.reduce((u, T) => (l.modelValue && typeof l.modelValue != "String" ? u[T.value] = !!l.modelValue.find((p) => p === T.value) : u[T.value] = l.modelValue === T.value, u), {});
    }
    const C = $(k()), d = r(() => Object.keys(C.value).filter((u) => C.value[u])), D = r(() => d.value.map((u) => l.options.find((T) => T.value === u).label));
    function y() {
      a.value = !a.value;
    }
    function v(u) {
      C.value[u.value] = !C.value[u.value], c("update:modelValue", d.value);
    }
    function I() {
    }
    return W(() => {
    }), (u, T) => (n(), i(F, null, [
      t("div", {
        class: _(s(w))
      }, [
        t("div", Rt, f(e.label), 1),
        t("div", {
          class: "input-field",
          onClick: y
        }, [
          t("div", Wt, [
            (n(!0), i(F, null, A(s(D), (p) => (n(), i("div", Jt, [
              t("div", Ut, f(p), 1)
            ]))), 256))
          ]),
          Et
        ]),
        o.value.length > 0 ? (n(), i("div", Ht, f(o.value), 1)) : O("", !0)
      ], 2),
      a.value ? (n(), U(K, {
        key: 0,
        modelValue: a.value,
        "onUpdate:modelValue": T[0] || (T[0] = (p) => a.value = p),
        title: "Select",
        width: 800,
        height: 600,
        class: "options-dialog"
      }, {
        body: R(() => [
          J(Yt, {
            name: e.name,
            headers: s(m),
            data: e.options,
            actions: g.value,
            loading: !1,
            "total-data": e.options.length,
            pagination: { limit: 5, client: !0 },
            onOffsetChange: I
          }, {
            "data-action": R(({ row: p, action: B, i: z }) => [
              t("div", {
                class: _(S(p))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "total-data"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : O("", !0)
    ], 64));
  }
}, ll = /* @__PURE__ */ P(qt, [["__scopeId", "data-v-09bcb4e4"]]);
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
