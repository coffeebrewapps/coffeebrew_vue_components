import { ref as k, computed as v, onMounted as W, openBlock as n, createElementBlock as u, normalizeClass as h, unref as s, createElementVNode as t, renderSlot as D, createTextVNode as j, toDisplayString as f, createBlock as U, isRef as ae, withCtx as R, createCommentVNode as M, createVNode as J, Fragment as L, renderList as A, pushScopeId as E, popScopeId as H, normalizeProps as I, guardReactiveProps as x } from "vue";
const O = (e, c) => {
  const l = e.__vccOpts || e;
  for (const [a, o] of c)
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
  setup(e, { emit: c }) {
    const l = e, a = k("dialog"), o = v(() => l.modelValue ? "dialog show" : "dialog hide");
    function m() {
      c("update:modelValue", !1);
    }
    return W(() => {
      a.value.style.width = `${l.width}px`, a.value.style.height = `${l.height}px`, a.value.style.top = `calc((100vh - ${a.value.style.height}) / 2)`, a.value.style.left = `calc((100vw - ${a.value.style.width}) / 2)`;
    }), (p, w) => (n(), u("div", {
      class: h(s(o)),
      ref_key: "dialog",
      ref: a
    }, [
      t("div", re, [
        D(p.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: w[0] || (w[0] = (S) => m())
          })
        ], !0)
      ]),
      t("div", ve, [
        t("div", fe, [
          D(p.$slots, "heading", {}, () => [
            j(f(e.title), 1)
          ], !0)
        ]),
        t("div", pe, [
          D(p.$slots, "body", {}, void 0, !0)
        ]),
        t("div", ge, [
          D(p.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, K = /* @__PURE__ */ O(he, [["__scopeId", "data-v-295738d8"]]), me = { class: "text" }, Kt = {
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
    const l = e, a = k("dialog"), o = v({
      get: () => l.modelValue,
      set: (m) => {
        c("update:modelValue", m);
      }
    });
    return (m, p) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": p[0] || (p[0] = (w) => ae(o) ? o.value = w : null),
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
  setup(e, { emit: c }) {
    const l = e, a = v(() => `button ${l.buttonType} ${l.size}`.trim()), o = v(() => `${l.icon} fa-lg`.trim());
    return (m, p) => (n(), u("div", {
      class: h(s(a)),
      onClick: p[0] || (p[0] = (w) => m.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), u("span", _e, f(e.value), 1)) : M("", !0),
      t("i", {
        class: h(s(o))
      }, null, 2)
    ], 2));
  }
}, te = /* @__PURE__ */ O(ye, [["__scopeId", "data-v-c26a9562"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = k("dialog"), o = v({
      get: () => l.modelValue,
      set: (w) => {
        c("update:modelValue", w);
      }
    });
    function m() {
      c("update:modelValue", !1), c("confirm");
    }
    function p() {
      c("update:modelValue", !1), c("cancel");
    }
    return (w, S) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": S[2] || (S[2] = (_) => ae(o) ? o.value = _ : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: R(() => [
        t("div", $e, f(e.primaryText), 1),
        t("div", be, f(e.secondaryText), 1)
      ]),
      actions: R(() => [
        J(te, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: S[0] || (S[0] = (_) => m())
        }),
        J(te, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: S[1] || (S[1] = (_) => p())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, Qt = /* @__PURE__ */ O(ke, [["__scopeId", "data-v-87937dbc"]]);
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
    const l = e, a = k(l.modelValue), o = v(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), m = v(() => a.value ? "input-field checked" : "input-field");
    function p() {
      a.value = !a.value, c("update:modelValue", a.value);
    }
    return (w, S) => (n(), u(L, null, [
      t("div", {
        class: h(s(o)),
        onClick: p
      }, [
        t("div", {
          class: h(s(m))
        }, null, 2),
        t("div", Se, f(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", Ce, f(e.errorMessage), 1)) : M("", !0)
    ], 64));
  }
}, Xt = /* @__PURE__ */ O(we, [["__scopeId", "data-v-5ea6b79c"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear() - 10, 1, 1), m = new Date(a.getFullYear() + 9, 12, 31), p = [
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
    ], S = k([]), _ = k("collapsed"), V = k(), d = k(), T = k();
    k();
    const y = k(!1), i = k(!1), $ = v(() => "input-control"), r = v(() => `input-field ${_.value}`.trim()), F = v(() => y.value ? "month picker show" : "month picker hide"), C = v(() => i.value ? "day picker show" : "day picker hide"), B = v(() => !V.value || !d.value || !T.value ? null : new Date(V.value, d.value, T.value)), z = v(() => V.value ? G(V.value, 1, 1).split("-")[0] : q(/* @__PURE__ */ new Date()).split("-")[0]), Q = v(() => d.value ? G(1900, d.value, 1).split("-")[1] : q(/* @__PURE__ */ new Date()).split("-")[1]), se = v(() => T.value ? G(1900, 1, T.value).split("-")[2] : q(/* @__PURE__ */ new Date()).split("-")[2]);
    function ne(b, N) {
      const g = new Date(b, N, 1);
      return g.setMonth(g.getMonth() + 1), g.setDate(g.getDate() - 1), g.getDate();
    }
    function q(b) {
      const N = b.toLocaleString("default", { year: "numeric" }), g = b.toLocaleString("default", { month: "2-digit" }), P = b.toLocaleString("default", { day: "2-digit" });
      return [N, g, P].join("-");
    }
    function G(b, N, g) {
      const P = new Date(b, N, g);
      return b = P.toLocaleString("default", { year: "numeric" }), N = P.toLocaleString("default", { month: "2-digit" }), g = P.toLocaleString("default", { day: "2-digit" }), [b, N, g].join("-");
    }
    function oe() {
      _.value === "collapsed" ? (_.value = "expanded", V.value && (y.value = !0), d.value && (i.value = !0)) : (_.value = "collapsed", y.value = !1, i.value = !1);
    }
    function ie(b) {
      return b === V.value ? "option selected" : "option";
    }
    function ue(b) {
      return b === d.value ? "option selected" : "option";
    }
    function de(b) {
      return b === T.value ? "option selected" : "option";
    }
    function X(b) {
      V.value = b, d.value = 0, T.value = 1, y.value = !0, i.value = !1;
    }
    function Z(b) {
      d.value = b, T.value = 1, i.value = !0, S.value = ne(V.value, d.value);
    }
    function ee(b) {
      _.value = "collapsed", T.value = b, y.value = !1, i.value = !1, c("update:modelValue", B);
    }
    function ce() {
      l.modelValue && (X(l.modelValue.getFullYear()), Z(l.modelValue.getMonth()), ee(l.modelValue.getDate()));
    }
    return W(() => {
      ce();
    }), (b, N) => (n(), u("div", {
      class: h(s($))
    }, [
      t("div", De, f(e.label), 1),
      t("div", {
        class: h(s(r))
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
          Le,
          t("div", Oe, [
            (n(!0), u(L, null, A(s(p), (g) => (n(), u("div", {
              class: h(ie(g)),
              value: g,
              onClick: (P) => X(g)
            }, [
              t("div", Ae, f(g), 1),
              Fe
            ], 10, ze))), 256))
          ])
        ]),
        t("div", {
          class: h(s(F))
        }, [
          Ne,
          t("div", Pe, [
            (n(!0), u(L, null, A(Object.keys(w), (g) => (n(), u("div", {
              class: h(ue(g)),
              value: g,
              onClick: (P) => Z(g)
            }, [
              t("div", je, f(w[g]), 1),
              Re
            ], 10, Ye))), 256))
          ])
        ], 2),
        t("div", {
          class: h(s(C))
        }, [
          We,
          t("div", Je, [
            (n(!0), u(L, null, A(S.value, (g) => (n(), u("div", {
              class: h(de(g)),
              value: g,
              onClick: (P) => ee(g)
            }, [
              t("div", Ee, f(g), 1)
            ], 10, Ue))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", He, f(e.errorMessage), 1)) : M("", !0)
    ], 2));
  }
}, Zt = /* @__PURE__ */ O(qe, [["__scopeId", "data-v-d86d3630"]]);
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
    return (c, l) => (n(), u("div", Ge, [
      t("div", Ke, f(e.label), 1),
      t("div", Qe, [
        t("input", {
          type: e.type,
          class: h(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (a) => c.$emit("update:modelValue", a.target.value))
        }, null, 42, Xe)
      ]),
      e.errorMessage.length > 0 ? (n(), u("div", Ze, f(e.errorMessage), 1)) : M("", !0)
    ]));
  }
}, ea = /* @__PURE__ */ O(et, [["__scopeId", "data-v-c182bf09"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = v(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (o, m) => (n(), u("div", {
      class: h(s(a)),
      value: e.value,
      onClick: m[0] || (m[0] = (p) => o.$emit("select", e.value))
    }, f(e.label), 11, tt));
  }
}, lt = /* @__PURE__ */ O(at, [["__scopeId", "data-v-1fa7fb5e"]]);
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
  setup(e, { emit: c }) {
    const l = e, a = k("collapsed"), o = k(""), m = v(() => `input-control ${l.size}`.trim()), p = v(() => `input-field ${a.value}`.trim()), w = v(() => {
      const d = l.options.find((T) => T.value === o.value);
      return d ? d.label : "";
    });
    function S() {
      a.value === "collapsed" ? a.value = "expanded" : a.value = "collapsed";
    }
    function _(d) {
      return d === o.value;
    }
    function V(d) {
      a.value = "collapsed", o.value = d, c("update:modelValue", d);
    }
    return W(() => {
      V(l.modelValue);
    }), (d, T) => (n(), u("div", {
      class: h(s(m))
    }, [
      t("div", nt, f(e.label), 1),
      t("div", {
        class: h(s(p))
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
          (n(!0), u(L, null, A(e.options, (y) => (n(), U(lt, {
            value: y.value,
            label: y.label,
            size: e.size,
            selected: _(y.value),
            onSelect: (i) => V(y.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", ct, f(e.errorMessage), 1)) : M("", !0)
    ], 2));
  }
}, ta = /* @__PURE__ */ O(rt, [["__scopeId", "data-v-386634d6"]]);
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
    const c = e, l = k("forward"), a = k(null), o = k(null), m = k(), p = v(() => `bar forward-bar ${l.value}`), w = v(() => c.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    W(() => {
      m.value = setInterval(_, c.speed);
    });
    function S(i) {
      return parseInt(i.style.width.split("%")[0]);
    }
    function _() {
      c.bidirection ? d() : V();
    }
    function V() {
      const i = S(a.value);
      i === 100 ? c.indefinite ? T(a.value) : clearInterval(m.value) : y(a.value, "forward", i);
    }
    function d() {
      const i = S(a.value), $ = S(o.value);
      l.value === "forward" && i === 100 ? (l.value = "reverse", y(a.value, "reverse", i), y(o.value, "forward", $)) : l.value === "reverse" && $ === 100 ? (l.value = "forward", y(a.value, "forward", i), y(o.value, "reverse", $)) : l.value === "forward" ? (y(a.value, "forward", i), y(o.value, "reverse", $)) : l.value === "reverse" && (y(a.value, "reverse", i), y(o.value, "forward", $));
    }
    function T(i) {
      i.style.width = "0%";
    }
    function y(i, $, r) {
      $ === "forward" ? i.style.width = [(r + c.step).toString(), "%"].join("") : i.style.width = [(r - c.step).toString(), "%"].join("");
    }
    return (i, $) => (n(), u("div", vt, [
      t("div", {
        class: h(s(p)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: a
      }, null, 2),
      t("div", {
        class: h(s(w)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: o
      }, null, 2)
    ]));
  }
}, pt = /* @__PURE__ */ O(ft, [["__scopeId", "data-v-554f77de"]]);
const le = (e) => (E("data-v-7832a2e2"), e = e(), H(), e), gt = { class: "table-container" }, ht = { class: "table-actions" }, mt = { class: "actions" }, _t = ["onClick"], yt = { class: "tooltip" }, $t = { class: "header" }, bt = { class: "row" }, kt = { class: "col" }, St = {
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
  setup(e, { emit: c }) {
    const l = e, a = k(0), o = k(l.pagination.limit), m = v(() => l.pagination.client ? !1 : l.loading), p = v(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), w = v(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), S = v(() => l.dense ? "table dense" : "table"), _ = v(() => l.pagination.client ? l.data.length : l.totalData), V = v(() => l.pagination.client ? l.data.slice(a.value, a.value + o.value) : l.data), d = v(() => a.value + o.value > _.value ? {
      start: a.value + 1,
      end: _.value
    } : {
      start: a.value + 1,
      end: a.value + o.value
    }), T = v(() => d.value.start === 1 ? "pager left" : "pager left show"), y = v(() => d.value.end === _.value ? "pager right" : "pager right show");
    function i() {
      d.value.start === 1 || (a.value - o.value < 0 ? a.value = 0 : a.value = a.value - o.value), c("offsetChange", a.value);
    }
    function $() {
      d.value.end === _.value || (a.value = a.value + o.value), c("offsetChange", a.value);
    }
    return (r, F) => (n(), u("div", gt, [
      t("div", ht, [
        D(r.$slots, "table-actions", I(x({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: h(s(w))
          }, [
            D(r.$slots, "table-name", I(x({ name: e.name })), () => [
              j(f(e.name), 1)
            ], !0)
          ], 2),
          t("div", mt, [
            (n(!0), u(L, null, A(e.tableActions, (C) => (n(), u("div", {
              class: "action",
              onClick: (B) => C.click(e.data)
            }, [
              D(r.$slots, "table-action", I(x({ action: C, data: e.data })), () => [
                t("i", {
                  class: h(C.icon)
                }, null, 2),
                t("span", yt, f(C.name), 1)
              ], !0)
            ], 8, _t))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: h(s(S))
      }, [
        t("thead", $t, [
          t("tr", bt, [
            D(r.$slots, "header-row", I(x({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), u(L, null, A(e.headers, (C, B) => (n(), u("th", kt, [
                D(r.$slots, `header-col.${C.key}`, I(x({ header: C, i: B })), () => [
                  j(f(C.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), u("th", St, [
                D(r.$slots, "header-actions", I(x({ actions: e.actions })), void 0, !0)
              ])) : M("", !0)
            ], !0)
          ]),
          s(m) ? (n(), u("tr", Ct, [
            D(r.$slots, "progress-bar", I(x({ headers: e.headers, actions: e.actions, span: s(p) })), () => [
              t("th", { colspan: s(p) }, [
                J(pt)
              ], 8, wt)
            ], !0)
          ])) : M("", !0)
        ]),
        t("tbody", Dt, [
          s(m) ? M("", !0) : (n(!0), u(L, { key: 0 }, A(s(V), (C, B) => (n(), u("tr", Vt, [
            D(r.$slots, "data-row", I(x({ headers: e.headers, row: C, actions: e.actions, i: B })), () => [
              D(r.$slots, "data-content", I(x({ headers: e.headers, row: C, i: B })), () => [
                (n(!0), u(L, null, A(e.headers, (z) => (n(), u("td", Tt, [
                  D(r.$slots, `data-col.${z.key}`, I(x({ header: z, row: C, i: B })), () => [
                    j(f(C[z.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), u("td", It, [
                D(r.$slots, "data-actions", I(x({ row: C, actions: e.actions, i: B })), () => [
                  t("div", xt, [
                    (n(!0), u(L, null, A(e.actions, (z) => (n(), u("div", {
                      class: "action",
                      onClick: (Q) => z.click(C, B)
                    }, [
                      D(r.$slots, "data-action", I(x({ row: C, action: z, i: B })), () => [
                        t("i", {
                          class: h(z.icon)
                        }, null, 2),
                        t("span", Bt, f(z.name), 1)
                      ], !0)
                    ], 8, Mt))), 256))
                  ])
                ], !0)
              ])) : M("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", Lt, [
        D(r.$slots, "pagination", I(x({ pageLeft: i, pageRight: $, start: s(d).start, end: s(d).end, total: s(_) })), () => [
          t("div", {
            class: h(s(T)),
            onClick: F[0] || (F[0] = (C) => i())
          }, [
            D(r.$slots, "pager-left", {}, () => [
              Ot
            ], !0)
          ], 2),
          t("div", zt, [
            D(r.$slots, "page-number", I(x({ start: s(d).start, end: s(d).end, total: s(_) })), () => [
              s(d).start !== s(d).end ? (n(), u("span", At, f(s(d).start) + " - ", 1)) : M("", !0),
              t("span", Ft, f(s(d).end), 1),
              j(" / " + f(s(_)), 1)
            ], !0)
          ]),
          t("div", {
            class: h(s(y)),
            onClick: F[1] || (F[1] = (C) => $())
          }, [
            D(r.$slots, "pager-right", {}, () => [
              Nt
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Yt = /* @__PURE__ */ O(Pt, [["__scopeId", "data-v-7832a2e2"]]);
const jt = (e) => (E("data-v-917532cc"), e = e(), H(), e), Rt = { class: "input-label" }, Wt = { class: "select" }, Jt = { class: "selected" }, Ut = { class: "tag" }, Et = /* @__PURE__ */ jt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
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
  setup(e, { emit: c }) {
    const l = e, a = k(!1), o = k(""), m = v(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), p = k([
      {
        name: "Select",
        icon: "",
        click: function(i, $) {
          T(i);
        }
      }
    ]), w = v(() => `input-control ${l.size}`);
    function S(i) {
      return _.value.find((r) => r === i.value) ? "checkbox checked" : "checkbox";
    }
    const _ = v(() => l.modelValue), V = v(() => _.value.map((i) => ((l.options || []).find((r) => r.value === i) || {}).label));
    function d() {
      a.value = !a.value;
    }
    function T(i) {
      const $ = Array.from(_.value), r = $.findIndex((F) => F === i.value);
      r < 0 ? $.push(i.value) : $.splice(r, 1), c("update:modelValue", $);
    }
    function y(i) {
      c("offsetChange", i);
    }
    return W(() => {
    }), (i, $) => (n(), u("div", {
      class: h(s(w))
    }, [
      t("div", Rt, f(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: d
      }, [
        t("div", Wt, [
          (n(!0), u(L, null, A(s(V), (r) => (n(), u("div", Jt, [
            t("div", Ut, f(r), 1)
          ]))), 256))
        ]),
        Et
      ]),
      o.value.length > 0 ? (n(), u("div", Ht, f(o.value), 1)) : M("", !0),
      a.value ? (n(), U(K, {
        key: 1,
        modelValue: a.value,
        "onUpdate:modelValue": $[0] || ($[0] = (r) => a.value = r),
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
            actions: p.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: y
          }, {
            "data-action": R(({ row: r, action: F, i: C }) => [
              t("div", {
                class: h(S(r))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : M("", !0)
    ], 2));
  }
}, aa = /* @__PURE__ */ O(qt, [["__scopeId", "data-v-917532cc"]]);
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
