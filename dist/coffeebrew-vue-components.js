import { ref as b, computed as v, onMounted as W, openBlock as n, createElementBlock as u, normalizeClass as m, unref as s, createElementVNode as t, renderSlot as D, createTextVNode as j, toDisplayString as f, createBlock as U, isRef as ae, withCtx as R, createCommentVNode as M, createVNode as J, Fragment as B, renderList as z, pushScopeId as E, popScopeId as H, normalizeProps as I, guardReactiveProps as x } from "vue";
const L = (e, r) => {
  const l = e.__vccOpts || e;
  for (const [a, o] of r)
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
  setup(e, { emit: r }) {
    const l = e, a = b("dialog"), o = v(() => l.modelValue ? "dialog show" : "dialog hide");
    function _() {
      r("update:modelValue", !1);
    }
    return W(() => {
      a.value.style.width = `${l.width}px`, a.value.style.height = `${l.height}px`, a.value.style.top = `calc((100vh - ${a.value.style.height}) / 2)`, a.value.style.left = `calc((100vw - ${a.value.style.width}) / 2)`;
    }), (g, w) => (n(), u("div", {
      class: m(s(o)),
      ref_key: "dialog",
      ref: a
    }, [
      t("div", re, [
        D(g.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: w[0] || (w[0] = (S) => _())
          })
        ], !0)
      ]),
      t("div", ve, [
        t("div", fe, [
          D(g.$slots, "heading", {}, () => [
            j(f(e.title), 1)
          ], !0)
        ]),
        t("div", pe, [
          D(g.$slots, "body", {}, void 0, !0)
        ]),
        t("div", ge, [
          D(g.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, K = /* @__PURE__ */ L(he, [["__scopeId", "data-v-295738d8"]]), me = { class: "text" }, Kt = {
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
    const l = e, a = b("dialog"), o = v({
      get: () => l.modelValue,
      set: (_) => {
        r("update:modelValue", _);
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
  setup(e, { emit: r }) {
    const l = e, a = v(() => `button ${l.buttonType} ${l.size}`.trim()), o = v(() => `${l.icon} fa-lg`.trim());
    return (_, g) => (n(), u("div", {
      class: m(s(a)),
      onClick: g[0] || (g[0] = (w) => _.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), u("span", _e, f(e.value), 1)) : M("", !0),
      t("i", {
        class: m(s(o))
      }, null, 2)
    ], 2));
  }
}, te = /* @__PURE__ */ L(ye, [["__scopeId", "data-v-c26a9562"]]);
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
  setup(e, { emit: r }) {
    const l = e, a = b("dialog"), o = v({
      get: () => l.modelValue,
      set: (w) => {
        r("update:modelValue", w);
      }
    });
    function _() {
      r("update:modelValue", !1), r("confirm");
    }
    function g() {
      r("update:modelValue", !1), r("cancel");
    }
    return (w, S) => (n(), U(K, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(o),
      "onUpdate:modelValue": S[2] || (S[2] = (p) => ae(o) ? o.value = p : null),
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
          onClick: S[0] || (S[0] = (p) => _())
        }),
        J(te, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: S[1] || (S[1] = (p) => g())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, Qt = /* @__PURE__ */ L(ke, [["__scopeId", "data-v-87937dbc"]]);
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
    const l = e, a = b(l.modelValue), o = v(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), _ = v(() => a.value ? "input-field checked" : "input-field");
    function g() {
      a.value = !a.value, r("update:modelValue", a.value);
    }
    return (w, S) => (n(), u(B, null, [
      t("div", {
        class: m(s(o)),
        onClick: g
      }, [
        t("div", {
          class: m(s(_))
        }, null, 2),
        t("div", Se, f(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", Ce, f(e.errorMessage), 1)) : M("", !0)
    ], 64));
  }
}, Xt = /* @__PURE__ */ L(we, [["__scopeId", "data-v-5ea6b79c"]]);
const Y = (e) => (E("data-v-d86d3630"), e = e(), H(), e), De = { class: "input-label" }, Ve = { class: "selected" }, Te = ["value"], Ie = ["value"], xe = ["value"], Me = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Be = { class: "year picker" }, Ae = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Le = { class: "options" }, Oe = ["value", "onClick"], ze = { class: "value" }, Fe = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ne = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Pe = { class: "options" }, Ye = ["value", "onClick"], je = { class: "value" }, Re = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), We = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Je = { class: "options" }, Ue = ["value", "onClick"], Ee = { class: "value" }, He = {
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
    const l = e, a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear() - 10, 1, 1), _ = new Date(a.getFullYear() + 9, 12, 31), g = [
      ...Array(_.getFullYear() - o.getFullYear()).keys()
    ].map(($) => $ + o.getFullYear()), w = [
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
    ], S = b([]), p = b("collapsed"), V = b(), d = b(), T = b();
    b();
    const y = b(!1), i = b(!1), k = v(() => "input-control"), c = v(() => `input-field ${p.value}`.trim()), F = v(() => y.value ? "month picker show" : "month picker hide"), C = v(() => i.value ? "day picker show" : "day picker hide"), A = v(() => !V.value || !d.value || !T.value ? null : new Date(V.value, d.value, T.value)), O = v(() => V.value ? G(V.value, 1, 1).split("-")[0] : q(/* @__PURE__ */ new Date()).split("-")[0]), Q = v(() => d.value ? G(1900, d.value, 1).split("-")[1] : q(/* @__PURE__ */ new Date()).split("-")[1]), se = v(() => T.value ? G(1900, 1, T.value).split("-")[2] : q(/* @__PURE__ */ new Date()).split("-")[2]);
    function ne($, N) {
      const h = new Date($, N, 1);
      return h.setMonth(h.getMonth() + 1), h.setDate(h.getDate() - 1), h.getDate();
    }
    function q($) {
      const N = $.toLocaleString("default", { year: "numeric" }), h = $.toLocaleString("default", { month: "2-digit" }), P = $.toLocaleString("default", { day: "2-digit" });
      return [N, h, P].join("-");
    }
    function G($, N, h) {
      const P = new Date($, N, h);
      return $ = P.toLocaleString("default", { year: "numeric" }), N = P.toLocaleString("default", { month: "2-digit" }), h = P.toLocaleString("default", { day: "2-digit" }), [$, N, h].join("-");
    }
    function oe() {
      p.value === "collapsed" ? (p.value = "expanded", V.value && (y.value = !0), d.value && (i.value = !0)) : (p.value = "collapsed", y.value = !1, i.value = !1);
    }
    function ie($) {
      return $ === V.value ? "option selected" : "option";
    }
    function ue($) {
      return $ === d.value ? "option selected" : "option";
    }
    function de($) {
      return $ === T.value ? "option selected" : "option";
    }
    function X($) {
      V.value = $, d.value = 0, T.value = 1, y.value = !0, i.value = !1;
    }
    function Z($) {
      d.value = $, T.value = 1, i.value = !0, S.value = ne(V.value, d.value);
    }
    function ee($) {
      p.value = "collapsed", T.value = $, y.value = !1, i.value = !1, r("update:modelValue", A);
    }
    function ce() {
      l.modelValue && (X(l.modelValue.getFullYear()), Z(l.modelValue.getMonth()), ee(l.modelValue.getDate()));
    }
    return W(() => {
      ce();
    }), ($, N) => (n(), u("div", {
      class: m(s(k))
    }, [
      t("div", De, f(e.label), 1),
      t("div", {
        class: m(s(c))
      }, [
        t("div", {
          class: "select",
          onClick: oe
        }, [
          t("div", Ve, [
            t("input", {
              disabled: "",
              value: s(O)
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
          Ae,
          t("div", Le, [
            (n(!0), u(B, null, z(s(g), (h) => (n(), u("div", {
              class: m(ie(h)),
              value: h,
              onClick: (P) => X(h)
            }, [
              t("div", ze, f(h), 1),
              Fe
            ], 10, Oe))), 256))
          ])
        ]),
        t("div", {
          class: m(s(F))
        }, [
          Ne,
          t("div", Pe, [
            (n(!0), u(B, null, z(Object.keys(w), (h) => (n(), u("div", {
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
          class: m(s(C))
        }, [
          We,
          t("div", Je, [
            (n(!0), u(B, null, z(S.value, (h) => (n(), u("div", {
              class: m(de(h)),
              value: h,
              onClick: (P) => ee(h)
            }, [
              t("div", Ee, f(h), 1)
            ], 10, Ue))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", He, f(e.errorMessage), 1)) : M("", !0)
    ], 2));
  }
}, Zt = /* @__PURE__ */ L(qe, [["__scopeId", "data-v-d86d3630"]]);
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
          class: m(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (a) => r.$emit("update:modelValue", a.target.value))
        }, null, 42, Xe)
      ]),
      e.errorMessage.length > 0 ? (n(), u("div", Ze, f(e.errorMessage), 1)) : M("", !0)
    ]));
  }
}, ea = /* @__PURE__ */ L(et, [["__scopeId", "data-v-c182bf09"]]);
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
  setup(e, { emit: r }) {
    const l = e, a = v(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (o, _) => (n(), u("div", {
      class: m(s(a)),
      value: e.value,
      onClick: _[0] || (_[0] = (g) => o.$emit("select", e.value))
    }, f(e.label), 11, tt));
  }
}, lt = /* @__PURE__ */ L(at, [["__scopeId", "data-v-1fa7fb5e"]]);
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
  setup(e, { emit: r }) {
    const l = e, a = b("collapsed"), o = b(""), _ = v(() => `input-control ${l.size}`.trim()), g = v(() => `input-field ${a.value}`.trim()), w = v(() => {
      const d = l.options.find((T) => T.value === o.value);
      return d ? d.label : "";
    });
    function S() {
      a.value === "collapsed" ? a.value = "expanded" : a.value = "collapsed";
    }
    function p(d) {
      return d === o.value;
    }
    function V(d) {
      a.value = "collapsed", o.value = d, r("update:modelValue", d);
    }
    return W(() => {
      V(l.modelValue);
    }), (d, T) => (n(), u("div", {
      class: m(s(_))
    }, [
      t("div", nt, f(e.label), 1),
      t("div", {
        class: m(s(g))
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
          (n(!0), u(B, null, z(e.options, (y) => (n(), U(lt, {
            value: y.value,
            label: y.label,
            size: e.size,
            selected: p(y.value),
            onSelect: (i) => V(y.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), u("div", ct, f(e.errorMessage), 1)) : M("", !0)
    ], 2));
  }
}, ta = /* @__PURE__ */ L(rt, [["__scopeId", "data-v-386634d6"]]);
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
    const r = e, l = b("forward"), a = b(null), o = b(null), _ = b(), g = v(() => `bar forward-bar ${l.value}`), w = v(() => r.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    W(() => {
      _.value = setInterval(p, r.speed);
    });
    function S(i) {
      return parseInt(i.style.width.split("%")[0]);
    }
    function p() {
      r.bidirection ? d() : V();
    }
    function V() {
      const i = S(a.value);
      i === 100 ? r.indefinite ? T(a.value) : clearInterval(_.value) : y(a.value, "forward", i);
    }
    function d() {
      const i = S(a.value), k = S(o.value);
      l.value === "forward" && i === 100 ? (l.value = "reverse", y(a.value, "reverse", i), y(o.value, "forward", k)) : l.value === "reverse" && k === 100 ? (l.value = "forward", y(a.value, "forward", i), y(o.value, "reverse", k)) : l.value === "forward" ? (y(a.value, "forward", i), y(o.value, "reverse", k)) : l.value === "reverse" && (y(a.value, "reverse", i), y(o.value, "forward", k));
    }
    function T(i) {
      i.style.width = "0%";
    }
    function y(i, k, c) {
      k === "forward" ? i.style.width = [(c + r.step).toString(), "%"].join("") : i.style.width = [(c - r.step).toString(), "%"].join("");
    }
    return (i, k) => (n(), u("div", vt, [
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
}, pt = /* @__PURE__ */ L(ft, [["__scopeId", "data-v-554f77de"]]);
const le = (e) => (E("data-v-7832a2e2"), e = e(), H(), e), gt = { class: "table-container" }, ht = { class: "table-actions" }, mt = { class: "actions" }, _t = ["onClick"], yt = { class: "tooltip" }, $t = { class: "header" }, bt = { class: "row" }, kt = { class: "col" }, St = {
  key: 0,
  class: "col"
}, Ct = {
  key: 0,
  class: "loading"
}, wt = ["colspan"], Dt = { class: "body" }, Vt = { class: "row" }, Tt = { class: "col" }, It = {
  key: 0,
  class: "col"
}, xt = { class: "actions" }, Mt = ["onClick"], Bt = { class: "tooltip" }, At = { class: "pagination" }, Lt = /* @__PURE__ */ le(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Ot = { class: "page-number" }, zt = {
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
  setup(e, { emit: r }) {
    const l = e, a = b(0), o = b(l.pagination.limit), _ = v(() => l.pagination.client ? !1 : l.loading), g = v(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), w = v(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), S = v(() => l.dense ? "table dense" : "table"), p = v(() => l.pagination.client ? l.data.length : l.totalData), V = v(() => l.pagination.client ? l.data.slice(a.value, a.value + o.value) : l.data), d = v(() => a.value + o.value > p.value ? {
      start: a.value + 1,
      end: p.value
    } : {
      start: a.value + 1,
      end: a.value + o.value
    }), T = v(() => d.value.start === 1 ? "pager left" : "pager left show"), y = v(() => d.value.end === p.value ? "pager right" : "pager right show");
    function i() {
      d.value.start === 1 || (a.value - o.value < 0 ? a.value = 0 : a.value = a.value - o.value), r("offsetChange", a.value);
    }
    function k() {
      d.value.end === p.value || (a.value = a.value + o.value), r("offsetChange", a.value);
    }
    return (c, F) => (n(), u("div", gt, [
      t("div", ht, [
        D(c.$slots, "table-actions", I(x({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: m(s(w))
          }, [
            D(c.$slots, "table-name", I(x({ name: e.name })), () => [
              j(f(e.name), 1)
            ], !0)
          ], 2),
          t("div", mt, [
            (n(!0), u(B, null, z(e.tableActions, (C) => (n(), u("div", {
              class: "action",
              onClick: (A) => C.click(e.data)
            }, [
              D(c.$slots, "table-action", I(x({ action: C, data: e.data })), () => [
                t("i", {
                  class: m(C.icon)
                }, null, 2),
                t("span", yt, f(C.name), 1)
              ], !0)
            ], 8, _t))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: m(s(S))
      }, [
        t("thead", $t, [
          t("tr", bt, [
            D(c.$slots, "header-row", I(x({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), u(B, null, z(e.headers, (C, A) => (n(), u("th", kt, [
                D(c.$slots, `header-col.${C.key}`, I(x({ header: C, i: A })), () => [
                  j(f(C.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), u("th", St, [
                D(c.$slots, "header-actions", I(x({ actions: e.actions })), void 0, !0)
              ])) : M("", !0)
            ], !0)
          ]),
          s(_) ? (n(), u("tr", Ct, [
            D(c.$slots, "progress-bar", I(x({ headers: e.headers, actions: e.actions, span: s(g) })), () => [
              t("th", { colspan: s(g) }, [
                J(pt)
              ], 8, wt)
            ], !0)
          ])) : M("", !0)
        ]),
        t("tbody", Dt, [
          s(_) ? M("", !0) : (n(!0), u(B, { key: 0 }, z(s(V), (C, A) => (n(), u("tr", Vt, [
            D(c.$slots, "data-row", I(x({ headers: e.headers, row: C, actions: e.actions, i: A })), () => [
              D(c.$slots, "data-content", I(x({ headers: e.headers, row: C, i: A })), () => [
                (n(!0), u(B, null, z(e.headers, (O) => (n(), u("td", Tt, [
                  D(c.$slots, `data-col.${O.key}`, I(x({ header: O, row: C, i: A })), () => [
                    j(f(C[O.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), u("td", It, [
                D(c.$slots, "data-actions", I(x({ row: C, actions: e.actions, i: A })), () => [
                  t("div", xt, [
                    (n(!0), u(B, null, z(e.actions, (O) => (n(), u("div", {
                      class: "action",
                      onClick: (Q) => O.click(C, A)
                    }, [
                      D(c.$slots, "data-action", I(x({ row: C, action: O, i: A })), () => [
                        t("i", {
                          class: m(O.icon)
                        }, null, 2),
                        t("span", Bt, f(O.name), 1)
                      ], !0)
                    ], 8, Mt))), 256))
                  ])
                ], !0)
              ])) : M("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", At, [
        D(c.$slots, "pagination", I(x({ pageLeft: i, pageRight: k, start: s(d).start, end: s(d).end, total: s(p) })), () => [
          t("div", {
            class: m(s(T)),
            onClick: F[0] || (F[0] = (C) => i())
          }, [
            D(c.$slots, "pager-left", {}, () => [
              Lt
            ], !0)
          ], 2),
          t("div", Ot, [
            D(c.$slots, "page-number", I(x({ start: s(d).start, end: s(d).end, total: s(p) })), () => [
              s(d).start !== s(d).end ? (n(), u("span", zt, f(s(d).start) + " - ", 1)) : M("", !0),
              t("span", Ft, f(s(d).end), 1),
              j(" / " + f(s(p)), 1)
            ], !0)
          ]),
          t("div", {
            class: m(s(y)),
            onClick: F[1] || (F[1] = (C) => k())
          }, [
            D(c.$slots, "pager-right", {}, () => [
              Nt
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Yt = /* @__PURE__ */ L(Pt, [["__scopeId", "data-v-7832a2e2"]]);
const jt = (e) => (E("data-v-c77633f9"), e = e(), H(), e), Rt = { class: "input-label" }, Wt = { class: "select" }, Jt = { class: "selected" }, Ut = { class: "tag" }, Et = /* @__PURE__ */ jt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
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
    const l = e, a = b(!1), o = b(""), _ = v(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), g = b([
      {
        name: "Select",
        icon: "",
        click: function(i, k) {
          T(i);
        }
      }
    ]), w = v(() => `input-control ${l.size}`);
    function S(i) {
      return p.value.find((c) => c === i.value) ? "checkbox checked" : "checkbox";
    }
    const p = v(() => l.modelValue), V = v(() => p.value.map((i) => ((l.options || []).find((c) => c.value === i) || {}).label));
    function d() {
      a.value = !a.value;
    }
    function T(i) {
      const k = p.value.findIndex((F) => F === i.value);
      let c = [];
      k ? c = Array.from(p.value).splice(k, 1) : c = Array.from(p.value).push(i.value), r("update:modelValue", c);
    }
    function y(i) {
      r("offsetChange", i);
    }
    return W(() => {
    }), (i, k) => (n(), u(B, null, [
      t("div", {
        class: m(s(w))
      }, [
        t("div", Rt, f(e.label), 1),
        t("div", {
          class: "input-field",
          onClick: d
        }, [
          t("div", Wt, [
            (n(!0), u(B, null, z(s(V), (c) => (n(), u("div", Jt, [
              t("div", Ut, f(c), 1)
            ]))), 256))
          ]),
          Et
        ]),
        o.value.length > 0 ? (n(), u("div", Ht, f(o.value), 1)) : M("", !0)
      ], 2),
      a.value ? (n(), U(K, {
        key: 0,
        modelValue: a.value,
        "onUpdate:modelValue": k[0] || (k[0] = (c) => a.value = c),
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
            onOffsetChange: y
          }, {
            "data-action": R(({ row: c, action: F, i: C }) => [
              t("div", {
                class: m(S(c))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : M("", !0)
    ], 64));
  }
}, aa = /* @__PURE__ */ L(qt, [["__scopeId", "data-v-c77633f9"]]);
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
