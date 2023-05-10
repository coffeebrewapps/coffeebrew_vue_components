import { ref as m, computed as u, onMounted as W, openBlock as n, createElementBlock as o, normalizeClass as p, unref as s, createElementVNode as t, renderSlot as I, createTextVNode as K, toDisplayString as f, createBlock as se, isRef as de, withCtx as Q, createCommentVNode as L, createVNode as ae, Fragment as F, renderList as z, pushScopeId as X, popScopeId as Z, normalizeProps as P, guardReactiveProps as A } from "vue";
const Y = (e, d) => {
  const l = e.__vccOpts || e;
  for (const [a, i] of d)
    l[a] = i;
  return l;
}, ve = { class: "menu-bar" }, fe = { class: "container" }, pe = { class: "heading" }, he = { class: "body" }, _e = { class: "actions" }, ge = {
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
    const l = e, a = m("dialog"), i = u(() => l.modelValue ? "dialog show" : "dialog hide");
    function $() {
      d("update:modelValue", !1);
    }
    return W(() => {
      a.value.style.width = `${l.width}px`, a.value.style.height = `${l.height}px`, a.value.style.top = `calc((100vh - ${a.value.style.height}) / 2)`, a.value.style.left = `calc((100vw - ${a.value.style.width}) / 2)`;
    }), (h, k) => (n(), o("div", {
      class: p(s(i)),
      ref_key: "dialog",
      ref: a
    }, [
      t("div", ve, [
        I(h.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: k[0] || (k[0] = (b) => $())
          })
        ], !0)
      ]),
      t("div", fe, [
        t("div", pe, [
          I(h.$slots, "heading", {}, () => [
            K(f(e.title), 1)
          ], !0)
        ]),
        t("div", he, [
          I(h.$slots, "body", {}, void 0, !0)
        ]),
        t("div", _e, [
          I(h.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, ue = /* @__PURE__ */ Y(ge, [["__scopeId", "data-v-295738d8"]]), me = { class: "text" }, bl = {
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
    const l = e, a = m("dialog"), i = u({
      get: () => l.modelValue,
      set: ($) => {
        d("update:modelValue", $);
      }
    });
    return ($, h) => (n(), se(ue, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(i),
      "onUpdate:modelValue": h[0] || (h[0] = (k) => de(i) ? i.value = k : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: Q(() => [
        t("div", me, f(e.content), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
};
const ye = { key: 0 }, $e = {
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
    const l = e, a = u(() => `button ${l.buttonType} ${l.size}`.trim()), i = u(() => `${l.icon} fa-lg`.trim());
    return ($, h) => (n(), o("div", {
      class: p(s(a)),
      onClick: h[0] || (h[0] = (k) => $.$emit("click"))
    }, [
      e.buttonType === "text" ? (n(), o("span", ye, f(e.value), 1)) : L("", !0),
      t("i", {
        class: p(s(i))
      }, null, 2)
    ], 2));
  }
}, ce = /* @__PURE__ */ Y($e, [["__scopeId", "data-v-c26a9562"]]);
const be = { class: "primary-text" }, ke = { class: "secondary-text" }, Se = {
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
    const l = e, a = m("dialog"), i = u({
      get: () => l.modelValue,
      set: (k) => {
        d("update:modelValue", k);
      }
    });
    function $() {
      d("update:modelValue", !1), d("confirm");
    }
    function h() {
      d("update:modelValue", !1), d("cancel");
    }
    return (k, b) => (n(), se(ue, {
      ref_key: "dialog",
      ref: a,
      modelValue: s(i),
      "onUpdate:modelValue": b[2] || (b[2] = (_) => de(i) ? i.value = _ : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: Q(() => [
        t("div", be, f(e.primaryText), 1),
        t("div", ke, f(e.secondaryText), 1)
      ]),
      actions: Q(() => [
        ae(ce, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: b[0] || (b[0] = (_) => $())
        }),
        ae(ce, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: b[1] || (b[1] = (_) => h())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, kl = /* @__PURE__ */ Y(Se, [["__scopeId", "data-v-87937dbc"]]);
const Ce = { class: "input-label" }, we = {
  key: 0,
  class: "input-error"
}, De = {
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
    const l = e, a = m(l.modelValue), i = u(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), $ = u(() => a.value ? "input-field checked" : "input-field");
    function h() {
      a.value = !a.value, d("update:modelValue", a.value);
    }
    return (k, b) => (n(), o(F, null, [
      t("div", {
        class: p(s(i)),
        onClick: h
      }, [
        t("div", {
          class: p(s($))
        }, null, 2),
        t("div", Ce, f(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", we, f(e.errorMessage), 1)) : L("", !0)
    ], 64));
  }
}, Sl = /* @__PURE__ */ Y(De, [["__scopeId", "data-v-5ea6b79c"]]);
const U = (e) => (X("data-v-d86d3630"), e = e(), Z(), e), Te = { class: "input-label" }, Ve = { class: "selected" }, Me = ["value"], Ie = ["value"], xe = ["value"], Be = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Pe = { class: "year picker" }, Ae = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Le = { class: "options" }, Fe = ["value", "onClick"], Oe = { class: "value" }, ze = /* @__PURE__ */ U(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ne = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Ye = { class: "options" }, je = ["value", "onClick"], He = { class: "value" }, Re = /* @__PURE__ */ U(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), We = /* @__PURE__ */ U(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Ue = { class: "options" }, Je = ["value", "onClick"], Ee = { class: "value" }, qe = {
  key: 0,
  class: "input-error"
}, Ge = {
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
    const l = e, a = /* @__PURE__ */ new Date(), i = new Date(a.getFullYear() - 10, 1, 1), $ = new Date(a.getFullYear() + 9, 12, 31), h = [
      ...Array($.getFullYear() - i.getFullYear()).keys()
    ].map((T) => T + i.getFullYear()), k = [
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
    ], b = m([]), _ = m("collapsed"), D = m(), c = m(), x = m();
    m();
    const C = m(!1), g = m(!1), y = u(() => "input-control"), r = u(() => `input-field ${_.value}`.trim()), V = u(() => C.value ? "month picker show" : "month picker hide"), S = u(() => g.value ? "day picker show" : "day picker hide"), B = u(() => !D.value || !c.value || !x.value ? null : new Date(D.value, c.value, x.value)), N = u(() => D.value ? q(D.value, 1, 1).split("-")[0] : E(/* @__PURE__ */ new Date()).split("-")[0]), R = u(() => c.value ? q(1900, c.value, 1).split("-")[1] : E(/* @__PURE__ */ new Date()).split("-")[1]), ne = u(() => x.value ? q(1900, 1, x.value).split("-")[2] : E(/* @__PURE__ */ new Date()).split("-")[2]);
    function oe(T, j) {
      const w = new Date(T, j, 1);
      return w.setMonth(w.getMonth() + 1), w.setDate(w.getDate() - 1), w.getDate();
    }
    function E(T) {
      const j = T.toLocaleString("default", { year: "numeric" }), w = T.toLocaleString("default", { month: "2-digit" }), H = T.toLocaleString("default", { day: "2-digit" });
      return [j, w, H].join("-");
    }
    function q(T, j, w) {
      const H = new Date(T, j, w);
      return T = H.toLocaleString("default", { year: "numeric" }), j = H.toLocaleString("default", { month: "2-digit" }), w = H.toLocaleString("default", { day: "2-digit" }), [T, j, w].join("-");
    }
    function ee() {
      _.value === "collapsed" ? (_.value = "expanded", D.value && (C.value = !0), c.value && (g.value = !0)) : (_.value = "collapsed", C.value = !1, g.value = !1);
    }
    function te(T) {
      return T === D.value ? "option selected" : "option";
    }
    function le(T) {
      return T === c.value ? "option selected" : "option";
    }
    function ie(T) {
      return T === x.value ? "option selected" : "option";
    }
    function v(T) {
      D.value = T, c.value = 0, x.value = 1, C.value = !0, g.value = !1;
    }
    function O(T) {
      c.value = T, x.value = 1, g.value = !0, b.value = oe(D.value, c.value);
    }
    function M(T) {
      _.value = "collapsed", x.value = T, C.value = !1, g.value = !1, d("update:modelValue", B);
    }
    function G() {
      l.modelValue && (v(l.modelValue.getFullYear()), O(l.modelValue.getMonth()), M(l.modelValue.getDate()));
    }
    return W(() => {
      G();
    }), (T, j) => (n(), o("div", {
      class: p(s(y))
    }, [
      t("div", Te, f(e.label), 1),
      t("div", {
        class: p(s(r))
      }, [
        t("div", {
          class: "select",
          onClick: ee
        }, [
          t("div", Ve, [
            t("input", {
              disabled: "",
              value: s(N)
            }, null, 8, Me),
            t("input", {
              disabled: "",
              value: s(R)
            }, null, 8, Ie),
            t("input", {
              disabled: "",
              value: s(ne)
            }, null, 8, xe)
          ]),
          Be
        ]),
        t("div", Pe, [
          Ae,
          t("div", Le, [
            (n(!0), o(F, null, z(s(h), (w) => (n(), o("div", {
              class: p(te(w)),
              value: w,
              onClick: (H) => v(w)
            }, [
              t("div", Oe, f(w), 1),
              ze
            ], 10, Fe))), 256))
          ])
        ]),
        t("div", {
          class: p(s(V))
        }, [
          Ne,
          t("div", Ye, [
            (n(!0), o(F, null, z(Object.keys(k), (w) => (n(), o("div", {
              class: p(le(w)),
              value: w,
              onClick: (H) => O(w)
            }, [
              t("div", He, f(k[w]), 1),
              Re
            ], 10, je))), 256))
          ])
        ], 2),
        t("div", {
          class: p(s(S))
        }, [
          We,
          t("div", Ue, [
            (n(!0), o(F, null, z(b.value, (w) => (n(), o("div", {
              class: p(ie(w)),
              value: w,
              onClick: (H) => M(w)
            }, [
              t("div", Ee, f(w), 1)
            ], 10, Je))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", qe, f(e.errorMessage), 1)) : L("", !0)
    ], 2));
  }
}, Cl = /* @__PURE__ */ Y(Ge, [["__scopeId", "data-v-d86d3630"]]);
const Ke = { class: "input-control" }, Qe = { class: "input-label" }, Xe = { class: "input-field" }, Ze = ["type", "value"], et = {
  key: 0,
  class: "input-error"
}, tt = {
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
    return (d, l) => (n(), o("div", Ke, [
      t("div", Qe, f(e.label), 1),
      t("div", Xe, [
        t("input", {
          type: e.type,
          class: p(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (a) => d.$emit("update:modelValue", a.target.value))
        }, null, 42, Ze)
      ]),
      e.errorMessage.length > 0 ? (n(), o("div", et, f(e.errorMessage), 1)) : L("", !0)
    ]));
  }
}, wl = /* @__PURE__ */ Y(tt, [["__scopeId", "data-v-c182bf09"]]);
const lt = ["value"], at = {
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
    const l = e, a = u(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (i, $) => (n(), o("div", {
      class: p(s(a)),
      value: e.value,
      onClick: $[0] || ($[0] = (h) => i.$emit("select", e.value))
    }, f(e.label), 11, lt));
  }
}, st = /* @__PURE__ */ Y(at, [["__scopeId", "data-v-1fa7fb5e"]]);
const nt = (e) => (X("data-v-386634d6"), e = e(), Z(), e), ot = { class: "input-label" }, it = ["name"], ut = { class: "selected" }, ct = /* @__PURE__ */ nt(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), dt = { class: "options" }, rt = {
  key: 0,
  class: "input-error"
}, vt = {
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
    const l = e, a = m("collapsed"), i = m(""), $ = u(() => `input-control ${l.size}`.trim()), h = u(() => `input-field ${a.value}`.trim()), k = u(() => {
      const c = l.options.find((x) => x.value === i.value);
      return c ? c.label : "";
    });
    function b() {
      a.value === "collapsed" ? a.value = "expanded" : a.value = "collapsed";
    }
    function _(c) {
      return c === i.value;
    }
    function D(c) {
      a.value = "collapsed", i.value = c, d("update:modelValue", c);
    }
    return W(() => {
      D(l.modelValue);
    }), (c, x) => (n(), o("div", {
      class: p(s($))
    }, [
      t("div", ot, f(e.label), 1),
      t("div", {
        class: p(s(h))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: b
        }, [
          t("div", ut, f(s(k)), 1),
          ct
        ], 8, it),
        t("div", dt, [
          (n(!0), o(F, null, z(e.options, (C) => (n(), se(st, {
            value: C.value,
            label: C.label,
            size: e.size,
            selected: _(C.value),
            onSelect: (g) => D(C.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", rt, f(e.errorMessage), 1)) : L("", !0)
    ], 2));
  }
}, Dl = /* @__PURE__ */ Y(vt, [["__scopeId", "data-v-386634d6"]]);
const ft = { class: "progress-bar" }, pt = {
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
    const d = e, l = m("forward"), a = m(null), i = m(null), $ = m(), h = u(() => `bar forward-bar ${l.value}`), k = u(() => d.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    W(() => {
      $.value = setInterval(_, d.speed);
    });
    function b(g) {
      return parseInt(g.style.width.split("%")[0]);
    }
    function _() {
      d.bidirection ? c() : D();
    }
    function D() {
      const g = b(a.value);
      g === 100 ? d.indefinite ? x(a.value) : clearInterval($.value) : C(a.value, "forward", g);
    }
    function c() {
      const g = b(a.value), y = b(i.value);
      l.value === "forward" && g === 100 ? (l.value = "reverse", C(a.value, "reverse", g), C(i.value, "forward", y)) : l.value === "reverse" && y === 100 ? (l.value = "forward", C(a.value, "forward", g), C(i.value, "reverse", y)) : l.value === "forward" ? (C(a.value, "forward", g), C(i.value, "reverse", y)) : l.value === "reverse" && (C(a.value, "reverse", g), C(i.value, "forward", y));
    }
    function x(g) {
      g.style.width = "0%";
    }
    function C(g, y, r) {
      y === "forward" ? g.style.width = [(r + d.step).toString(), "%"].join("") : g.style.width = [(r - d.step).toString(), "%"].join("");
    }
    return (g, y) => (n(), o("div", ft, [
      t("div", {
        class: p(s(h)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: a
      }, null, 2),
      t("div", {
        class: p(s(k)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: i
      }, null, 2)
    ]));
  }
}, ht = /* @__PURE__ */ Y(pt, [["__scopeId", "data-v-554f77de"]]);
const re = (e) => (X("data-v-7832a2e2"), e = e(), Z(), e), _t = { class: "table-container" }, gt = { class: "table-actions" }, mt = { class: "actions" }, yt = ["onClick"], $t = { class: "tooltip" }, bt = { class: "header" }, kt = { class: "row" }, St = { class: "col" }, Ct = {
  key: 0,
  class: "col"
}, wt = {
  key: 0,
  class: "loading"
}, Dt = ["colspan"], Tt = { class: "body" }, Vt = { class: "row" }, Mt = { class: "col" }, It = {
  key: 0,
  class: "col"
}, xt = { class: "actions" }, Bt = ["onClick"], Pt = { class: "tooltip" }, At = { class: "pagination" }, Lt = /* @__PURE__ */ re(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Ft = { class: "page-number" }, Ot = {
  key: 0,
  class: "current"
}, zt = { class: "current" }, Nt = /* @__PURE__ */ re(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Yt = {
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
    const l = e, a = m(0), i = m(l.pagination.limit), $ = u(() => l.pagination.client ? !1 : l.loading), h = u(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), k = u(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), b = u(() => l.dense ? "table dense" : "table"), _ = u(() => l.pagination.client ? l.data.length : l.totalData), D = u(() => l.pagination.client ? l.data.slice(a.value, a.value + i.value) : l.data), c = u(() => a.value + i.value > _.value ? {
      start: a.value + 1,
      end: _.value
    } : {
      start: a.value + 1,
      end: a.value + i.value
    }), x = u(() => c.value.start === 1 ? "pager left" : "pager left show"), C = u(() => c.value.end === _.value ? "pager right" : "pager right show");
    function g() {
      c.value.start === 1 || (a.value - i.value < 0 ? a.value = 0 : a.value = a.value - i.value), d("offsetChange", a.value);
    }
    function y() {
      c.value.end === _.value || (a.value = a.value + i.value), d("offsetChange", a.value);
    }
    return (r, V) => (n(), o("div", _t, [
      t("div", gt, [
        I(r.$slots, "table-actions", P(A({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: p(s(k))
          }, [
            I(r.$slots, "table-name", P(A({ name: e.name })), () => [
              K(f(e.name), 1)
            ], !0)
          ], 2),
          t("div", mt, [
            (n(!0), o(F, null, z(e.tableActions, (S) => (n(), o("div", {
              class: "action",
              onClick: (B) => S.click(e.data)
            }, [
              I(r.$slots, "table-action", P(A({ action: S, data: e.data })), () => [
                t("i", {
                  class: p(S.icon)
                }, null, 2),
                t("span", $t, f(S.name), 1)
              ], !0)
            ], 8, yt))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: p(s(b))
      }, [
        t("thead", bt, [
          t("tr", kt, [
            I(r.$slots, "header-row", P(A({ headers: e.headers, actions: e.actions })), () => [
              (n(!0), o(F, null, z(e.headers, (S, B) => (n(), o("th", St, [
                I(r.$slots, `header-col.${S.key}`, P(A({ header: S, i: B })), () => [
                  K(f(S.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (n(), o("th", Ct, [
                I(r.$slots, "header-actions", P(A({ actions: e.actions })), void 0, !0)
              ])) : L("", !0)
            ], !0)
          ]),
          s($) ? (n(), o("tr", wt, [
            I(r.$slots, "progress-bar", P(A({ headers: e.headers, actions: e.actions, span: s(h) })), () => [
              t("th", { colspan: s(h) }, [
                ae(ht)
              ], 8, Dt)
            ], !0)
          ])) : L("", !0)
        ]),
        t("tbody", Tt, [
          s($) ? L("", !0) : (n(!0), o(F, { key: 0 }, z(s(D), (S, B) => (n(), o("tr", Vt, [
            I(r.$slots, "data-row", P(A({ headers: e.headers, row: S, actions: e.actions, i: B })), () => [
              I(r.$slots, "data-content", P(A({ headers: e.headers, row: S, i: B })), () => [
                (n(!0), o(F, null, z(e.headers, (N) => (n(), o("td", Mt, [
                  I(r.$slots, `data-col.${N.key}`, P(A({ header: N, row: S, i: B })), () => [
                    K(f(S[N.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (n(), o("td", It, [
                I(r.$slots, "data-actions", P(A({ row: S, actions: e.actions, i: B })), () => [
                  t("div", xt, [
                    (n(!0), o(F, null, z(e.actions, (N) => (n(), o("div", {
                      class: "action",
                      onClick: (R) => N.click(S, B)
                    }, [
                      I(r.$slots, "data-action", P(A({ row: S, action: N, i: B })), () => [
                        t("i", {
                          class: p(N.icon)
                        }, null, 2),
                        t("span", Pt, f(N.name), 1)
                      ], !0)
                    ], 8, Bt))), 256))
                  ])
                ], !0)
              ])) : L("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", At, [
        I(r.$slots, "pagination", P(A({ pageLeft: g, pageRight: y, start: s(c).start, end: s(c).end, total: s(_) })), () => [
          t("div", {
            class: p(s(x)),
            onClick: V[0] || (V[0] = (S) => g())
          }, [
            I(r.$slots, "pager-left", {}, () => [
              Lt
            ], !0)
          ], 2),
          t("div", Ft, [
            I(r.$slots, "page-number", P(A({ start: s(c).start, end: s(c).end, total: s(_) })), () => [
              s(c).start !== s(c).end ? (n(), o("span", Ot, f(s(c).start) + " - ", 1)) : L("", !0),
              t("span", zt, f(s(c).end), 1),
              K(" / " + f(s(_)), 1)
            ], !0)
          ]),
          t("div", {
            class: p(s(C)),
            onClick: V[1] || (V[1] = (S) => y())
          }, [
            I(r.$slots, "pager-right", {}, () => [
              Nt
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, jt = /* @__PURE__ */ Y(Yt, [["__scopeId", "data-v-7832a2e2"]]);
const Ht = (e) => (X("data-v-4b4a798c"), e = e(), Z(), e), Rt = { class: "input-label" }, Wt = { class: "select" }, Ut = { class: "selected" }, Jt = { class: "tag" }, Et = /* @__PURE__ */ Ht(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), qt = {
  key: 0,
  class: "input-error"
}, Gt = {
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
    const l = e, a = m(!1), i = m(""), $ = u(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), h = m([
      {
        name: "Select",
        icon: "",
        click: function(y, r) {
          C(y);
        }
      }
    ]), k = u(() => `input-control ${l.size}`);
    function b(y) {
      return _.value.find((V) => V === y.value) ? "checkbox checked" : "checkbox";
    }
    const _ = u(() => l.modelValue), D = m({}), c = u(() => _.value.map((y) => {
      if (D[y])
        return D[y];
      {
        const V = ((l.options || []).find((S) => S.value === y) || {}).label;
        return D[y] = V, V;
      }
    }));
    function x() {
      a.value = !a.value;
    }
    function C(y) {
      const r = Array.from(_.value), V = r.findIndex((S) => S === y.value);
      V < 0 ? r.push(y.value) : r.splice(V, 1), d("update:modelValue", r);
    }
    function g(y) {
      d("offsetChange", y);
    }
    return W(() => {
    }), (y, r) => (n(), o("div", {
      class: p(s(k))
    }, [
      t("div", Rt, f(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: x
      }, [
        t("div", Wt, [
          (n(!0), o(F, null, z(s(c), (V) => (n(), o("div", Ut, [
            t("div", Jt, f(V), 1)
          ]))), 256))
        ]),
        Et
      ]),
      i.value.length > 0 ? (n(), o("div", qt, f(i.value), 1)) : L("", !0),
      a.value ? (n(), se(ue, {
        key: 1,
        modelValue: a.value,
        "onUpdate:modelValue": r[0] || (r[0] = (V) => a.value = V),
        title: "Select",
        width: 800,
        height: 600,
        class: "options-dialog"
      }, {
        body: Q(() => [
          ae(jt, {
            name: e.name,
            headers: s($),
            data: e.options,
            actions: h.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: g
          }, {
            "data-action": Q(({ row: V, action: S, i: B }) => [
              t("div", {
                class: p(b(V))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : L("", !0)
    ], 2));
  }
}, Tl = /* @__PURE__ */ Y(Gt, [["__scopeId", "data-v-4b4a798c"]]);
const J = (e) => (X("data-v-8a55f258"), e = e(), Z(), e), Kt = { class: "input-label" }, Qt = { class: "selected" }, Xt = ["value"], Zt = ["value"], el = ["value"], tl = ["value"], ll = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-clock" })
], -1)), al = { class: "hour picker" }, sl = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), nl = { class: "options" }, ol = ["value", "onClick"], il = { class: "value" }, ul = /* @__PURE__ */ J(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), cl = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), dl = { class: "options" }, rl = ["value", "onClick"], vl = { class: "value" }, fl = /* @__PURE__ */ J(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), pl = /* @__PURE__ */ J(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), hl = { class: "options" }, _l = ["value", "onClick"], gl = { class: "value" }, ml = {
  key: 0,
  class: "input-error"
}, yl = {
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
    const l = e, a = Array.from(Array(24)).map((v, O) => O), i = Array.from(Array(60)).map((v, O) => O), $ = Array.from(Array(60)).map((v, O) => O), h = m("collapsed"), k = m(), b = m(), _ = m();
    m();
    const D = m(!1), c = m(!1), x = u(() => l.hour12 ? "input-control hour12" : "input-control hour24"), C = u(() => `input-field ${h.value}`.trim()), g = u(() => D.value ? "minute picker show" : "minute picker hide"), y = u(() => c.value ? "second picker show" : "second picker hide"), r = u(() => {
      const v = k.value || 0, O = b.value || 0, M = _.value || 0;
      return new Date(1900, 0, 1, v, O, M);
    }), V = u(() => {
      const v = k.value || 0;
      return R(v, 0, 0).split(" ")[0].split(":")[0];
    }), S = u(() => {
      const v = b.value || 0;
      return R(0, v, 0).split(" ")[0].split(":")[1];
    }), B = u(() => {
      const v = _.value || 0;
      return R(0, 0, v).split(" ")[0].split(":")[2];
    }), N = u(() => {
      const v = k.value || 0;
      return R(v, 0, 0).split(" ")[1];
    });
    function R(v, O, M) {
      return new Date(1900, 1, 1, v, O, M).toLocaleTimeString("en-US", { hour12: l.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    }
    function ne() {
      h.value === "collapsed" ? (h.value = "expanded", k.value && (D.value = !0), b.value && (c.value = !0)) : (h.value = "collapsed", D.value = !1, c.value = !1);
    }
    function oe(v) {
      return v === k.value ? "option selected" : "option";
    }
    function E(v) {
      return v === b.value ? "option selected" : "option";
    }
    function q(v) {
      return v === _.value ? "option selected" : "option";
    }
    function ee(v) {
      k.value = v, b.value = 0, _.value = 0, D.value = !0, c.value = !1;
    }
    function te(v) {
      b.value = v, _.value = 0, c.value = !0, $.value = 0;
    }
    function le(v) {
      h.value = "collapsed", _.value = v, D.value = !1, c.value = !1, d("update:modelValue", r);
    }
    function ie() {
      const v = l.modelValue || /* @__PURE__ */ new Date();
      ee(v.getHours()), te(v.getMinutes()), le(v.getSeconds());
    }
    return W(() => {
      ie();
    }), (v, O) => (n(), o("div", {
      class: p(s(x))
    }, [
      t("div", Kt, f(e.label), 1),
      t("div", {
        class: p(s(C))
      }, [
        t("div", {
          class: "select",
          onClick: ne
        }, [
          t("div", Qt, [
            t("input", {
              disabled: "",
              value: s(V)
            }, null, 8, Xt),
            t("input", {
              disabled: "",
              value: s(S)
            }, null, 8, Zt),
            t("input", {
              disabled: "",
              value: s(B)
            }, null, 8, el),
            e.hour12 ? (n(), o("input", {
              key: 0,
              disabled: "",
              value: s(N)
            }, null, 8, tl)) : L("", !0)
          ]),
          ll
        ]),
        t("div", al, [
          sl,
          t("div", nl, [
            (n(!0), o(F, null, z(s(a), (M) => (n(), o("div", {
              class: p(oe(M)),
              value: M,
              onClick: (G) => ee(M)
            }, [
              t("div", il, f(M), 1),
              ul
            ], 10, ol))), 256))
          ])
        ]),
        t("div", {
          class: p(s(g))
        }, [
          cl,
          t("div", dl, [
            (n(!0), o(F, null, z(s(i), (M) => (n(), o("div", {
              class: p(E(M)),
              value: M,
              onClick: (G) => te(M)
            }, [
              t("div", vl, f(M), 1),
              fl
            ], 10, rl))), 256))
          ])
        ], 2),
        t("div", {
          class: p(s(y))
        }, [
          pl,
          t("div", hl, [
            (n(!0), o(F, null, z(s($), (M) => (n(), o("div", {
              class: p(q(M)),
              value: M,
              onClick: (G) => le(M)
            }, [
              t("div", gl, f(M), 1)
            ], 10, _l))), 256))
          ])
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (n(), o("div", ml, f(e.errorMessage), 1)) : L("", !0)
    ], 2));
  }
}, Vl = /* @__PURE__ */ Y(yl, [["__scopeId", "data-v-8a55f258"]]);
export {
  bl as TAlert,
  ce as TButton,
  Sl as TCheckbox,
  kl as TConfirmDialog,
  Cl as TDatePicker,
  ue as TDialog,
  wl as TInput,
  st as TOption,
  ht as TProgressBar,
  Dl as TSelect,
  Tl as TSelectTable,
  jt as TTable,
  Vl as TTimePicker
};
