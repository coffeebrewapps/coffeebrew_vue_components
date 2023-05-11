import { ref as u, computed as c, onMounted as ee, openBlock as o, createElementBlock as i, normalizeClass as m, unref as n, createElementVNode as t, renderSlot as C, createTextVNode as se, toDisplayString as h, createBlock as oe, isRef as ve, withCtx as ne, createCommentVNode as V, createVNode as ue, Fragment as O, watch as lt, renderList as M, pushScopeId as re, popScopeId as ce, normalizeProps as P, guardReactiveProps as x } from "vue";
const H = (e, v) => {
  const l = e.__vccOpts || e;
  for (const [s, r] of v)
    l[s] = r;
  return l;
}, st = { class: "menu-bar" }, nt = { class: "container" }, ot = { class: "heading" }, it = { class: "body" }, ut = { class: "actions" }, rt = {
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
  setup(e, { emit: v }) {
    const l = e, s = u("dialog"), r = c(() => l.modelValue ? "dialog show" : "dialog hide");
    function g() {
      v("update:modelValue", !1);
    }
    return ee(() => {
      s.value.style.width = `${l.width}px`, s.value.style.height = `${l.height}px`, s.value.style.top = `calc((100vh - ${s.value.style.height}) / 2)`, s.value.style.left = `calc((100vw - ${s.value.style.width}) / 2)`;
    }), (y, S) => (o(), i("div", {
      class: m(n(r)),
      ref_key: "dialog",
      ref: s
    }, [
      t("div", st, [
        C(y.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: S[0] || (S[0] = ($) => g())
          })
        ], !0)
      ]),
      t("div", nt, [
        t("div", ot, [
          C(y.$slots, "heading", {}, () => [
            se(h(e.title), 1)
          ], !0)
        ]),
        t("div", it, [
          C(y.$slots, "body", {}, void 0, !0)
        ]),
        t("div", ut, [
          C(y.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, pe = /* @__PURE__ */ H(rt, [["__scopeId", "data-v-295738d8"]]), ct = { class: "text" }, al = {
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
  setup(e, { emit: v }) {
    const l = e, s = u("dialog"), r = c({
      get: () => l.modelValue,
      set: (g) => {
        v("update:modelValue", g);
      }
    });
    return (g, y) => (o(), oe(pe, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": y[0] || (y[0] = (S) => ve(r) ? r.value = S : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: ne(() => [
        t("div", ct, h(e.content), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
};
const dt = { key: 0 }, ft = {
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
  setup(e, { emit: v }) {
    const l = e, s = c(() => `button ${l.buttonType} ${l.size}`.trim()), r = c(() => `${l.icon} fa-lg`.trim());
    return (g, y) => (o(), i("div", {
      class: m(n(s)),
      onClick: y[0] || (y[0] = (S) => g.$emit("click"))
    }, [
      e.buttonType === "text" ? (o(), i("span", dt, h(e.value), 1)) : V("", !0),
      t("i", {
        class: m(n(r))
      }, null, 2)
    ], 2));
  }
}, Oe = /* @__PURE__ */ H(ft, [["__scopeId", "data-v-c26a9562"]]);
const vt = { class: "primary-text" }, pt = { class: "secondary-text" }, mt = {
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
  setup(e, { emit: v }) {
    const l = e, s = u("dialog"), r = c({
      get: () => l.modelValue,
      set: (S) => {
        v("update:modelValue", S);
      }
    });
    function g() {
      v("update:modelValue", !1), v("confirm");
    }
    function y() {
      v("update:modelValue", !1), v("cancel");
    }
    return (S, $) => (o(), oe(pe, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": $[2] || ($[2] = (w) => ve(r) ? r.value = w : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: ne(() => [
        t("div", vt, h(e.primaryText), 1),
        t("div", pt, h(e.secondaryText), 1)
      ]),
      actions: ne(() => [
        ue(Oe, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: $[0] || ($[0] = (w) => g())
        }),
        ue(Oe, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: $[1] || ($[1] = (w) => y())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, ll = /* @__PURE__ */ H(mt, [["__scopeId", "data-v-87937dbc"]]);
const ht = { class: "input-label" }, yt = {
  key: 0,
  class: "input-error"
}, gt = {
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
  setup(e, { emit: v }) {
    const l = e, s = u(l.modelValue), r = c(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), g = c(() => s.value ? "input-field checked" : "input-field");
    function y() {
      s.value = !s.value, v("update:modelValue", s.value);
    }
    return (S, $) => (o(), i(O, null, [
      t("div", {
        class: m(n(r)),
        onClick: y
      }, [
        t("div", {
          class: m(n(g))
        }, null, 2),
        t("div", ht, h(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", yt, h(e.errorMessage), 1)) : V("", !0)
    ], 64));
  }
}, sl = /* @__PURE__ */ H(gt, [["__scopeId", "data-v-5ea6b79c"]]);
const Y = (e) => (re("data-v-78a68418"), e = e(), ce(), e), _t = { class: "input-label" }, kt = { class: "selected" }, bt = ["value"], $t = ["value"], wt = ["value"], Tt = ["value"], St = ["value"], Ct = ["value"], Dt = ["value"], Vt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Pt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), xt = ["value", "onClick"], Ot = { class: "value" }, Mt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), It = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Bt = ["value", "onClick"], At = { class: "value" }, Rt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ft = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Yt = ["value", "onClick"], zt = { class: "value" }, Nt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Lt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), Ht = ["value", "onClick"], jt = { class: "value" }, Ut = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Wt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), Et = ["value", "onClick"], Jt = { class: "value" }, qt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Gt = /* @__PURE__ */ Y(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), Kt = ["value", "onClick"], Qt = { class: "value" }, Xt = {
  key: 0,
  class: "input-error"
}, Zt = {
  __name: "TDateTimePicker",
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
    displayTime: {
      type: Boolean,
      default: !0
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
  setup(e, { emit: v }) {
    const l = e, s = /* @__PURE__ */ new Date(), r = new Date(s.getFullYear() - 10, 1, 1), g = new Date(s.getFullYear() + 9, 12, 31), y = [
      ...Array(g.getFullYear() - r.getFullYear()).keys()
    ].map((a) => a + r.getFullYear()), S = [
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
    ], $ = c(() => {
      const a = E.value, D = U.value;
      if (a && D) {
        const d = new Date(a, D, 1);
        return d.setMonth(d.getMonth() + 1), d.setDate(d.getDate() - 1), Array.from(Array(d.getDate())).map((F, le) => le + 1);
      } else
        return Array.from(Array(30)).map((d, F) => F + 1);
    }), w = Array.from(Array(24)).map((a, D) => D), z = Array.from(Array(60)).map((a, D) => D), _ = Array.from(Array(60)).map((a, D) => D), N = u("yearPicker"), T = u("monthPicker"), f = u("dayPicker"), k = u("hourPicker"), p = u("minutePicker"), j = u("secondPicker"), b = u("yearOptions"), I = u("monthOptions"), L = u("dayOptions"), de = u("hourOptions"), me = u("minuteOptions"), he = u("secondOptions"), ye = u([]), ge = u([]), _e = u([]), ke = u([]), be = u([]), $e = u([]), te = u("collapsed"), E = u(), U = u(), W = u(), B = u(), A = u(), R = u();
    u();
    const ae = u(!1), X = u(!1), G = u(!1), K = u(!1), q = u(!1), J = u(!1), Ie = c(() => l.displayTime ? l.hour12 ? "input-control display-time hour12" : "input-control display-time hour24" : "input-control"), Be = c(() => `input-field ${te.value}`.trim()), Ae = c(() => ae.value ? "year picker show" : "year picker hide"), Re = c(() => X.value ? "month picker show" : "month picker hide"), Fe = c(() => G.value ? "day picker show" : "day picker hide"), Ye = c(() => l.displayTime && K.value ? "hour picker show" : "hour picker hide"), ze = c(() => l.displayTime && q.value ? "minute picker show" : "minute picker hide"), Ne = c(() => l.displayTime && J.value ? "second picker show" : "second picker hide"), we = c(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear(), D = U.value || (/* @__PURE__ */ new Date()).getMonth(), d = W.value || (/* @__PURE__ */ new Date()).getDate(), F = B.value || 0, le = A.value || 0, fe = R.value || 0;
      return new Date(a, D, d, F, le, fe);
    }), Le = c(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear();
      return Q(a, 1, 1, 0, 0, 0).date.split("-")[0];
    }), He = c(() => {
      const a = U.value || (/* @__PURE__ */ new Date()).getMonth();
      return Q(1900, a, 1, 0, 0, 0).date.split("-")[1];
    }), je = c(() => {
      const a = W.value || (/* @__PURE__ */ new Date()).getDate();
      return Q(1900, 1, a, 0, 0, 0).date.split("-")[2];
    }), Ue = c(() => {
      const a = B.value || 0;
      return Q(1900, 1, 1, a, 0, 0).time.split(" ")[0].split(":")[0];
    }), We = c(() => {
      const a = A.value || 0;
      return Q(1900, 1, 1, 0, a, 0).time.split(" ")[0].split(":")[1];
    }), Ee = c(() => {
      const a = R.value || 0;
      return Q(1900, 1, 1, 0, 0, a).time.split(" ")[0].split(":")[2];
    }), Je = c(() => {
      const a = B.value || 0;
      return Q(1900, 1, 1, a, 0, 0).time.split(" ")[1];
    });
    function Q(a, D, d, F, le, fe) {
      const ie = new Date(a, D, d, F, le, fe);
      a = ie.toLocaleString("default", { year: "numeric" }), D = ie.toLocaleString("default", { month: "2-digit" }), d = ie.toLocaleString("default", { day: "2-digit" });
      const at = ie.toLocaleTimeString("en-US", { hour12: l.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      return {
        date: [a, D, d].join("-"),
        time: at
      };
    }
    function qe() {
      te.value === "collapsed" ? (te.value = "expanded", ae.value = !0, E.value && (X.value = !0), U.value && (G.value = !0), W.value && (K.value = !0), B.value && (q.value = !0), A.value && (J.value = !0)) : (te.value = "collapsed", ae.value = !1, X.value = !1, G.value = !1, K.value = !1, q.value = !1, J.value = !1);
    }
    function Ge(a) {
      return a === E.value ? "option selected" : "option";
    }
    function Ke(a) {
      return parseInt(a) === parseInt(U.value) ? "option selected" : "option";
    }
    function Qe(a) {
      return a === W.value ? "option selected" : "option";
    }
    function Xe(a) {
      return a === B.value ? "option selected" : "option";
    }
    function Ze(a) {
      return a === A.value ? "option selected" : "option";
    }
    function et(a) {
      return a === R.value ? "option selected" : "option";
    }
    function Te() {
      if (E.value) {
        const a = ye.value[y.indexOf(E.value)];
        b.value.scrollTop = a.offsetTop;
      }
      if (U.value) {
        const a = ge.value[U.value];
        I.value.scrollTop = a.offsetTop;
      }
      if (W.value) {
        const a = _e.value[$.value.indexOf(W.value)];
        L.value.scrollTop = a.offsetTop;
      }
      if (B.value) {
        const a = ke.value[w.indexOf(B.value)];
        de.value.scrollTop = a.offsetTop;
      }
      if (A.value) {
        const a = be.value[z.indexOf(A.value)];
        me.value.scrollTop = a.offsetTop;
      }
      if (R.value) {
        const a = $e.value[_.indexOf(R.value)];
        he.value.scrollTop = a.offsetTop;
      }
    }
    lt([E, U, W, B, A, R], () => {
      Te();
    });
    function Se(a) {
      E.value = a, U.value = 0, W.value = 1, B.value = 0, A.value = 0, R.value = 0, X.value = !0, G.value = !1, K.value = !1, q.value = !1, J.value = !1;
    }
    function Ce(a) {
      U.value = a, W.value = 1, B.value = 0, A.value = 0, R.value = 0, G.value = !0, K.value = !1, q.value = !1, J.value = !1;
    }
    function De(a) {
      W.value = a, B.value = 0, A.value = 0, R.value = 0, l.displayTime ? (K.value = !0, q.value = !1, J.value = !1) : (ae.value = !1, X.value = !1, G.value = !1, v("update:modelValue", we));
    }
    function Ve(a) {
      B.value = a, A.value = 0, R.value = 0, q.value = !0, J.value = !1;
    }
    function Pe(a) {
      A.value = a, R.value = 0, J.value = !0;
    }
    function xe(a) {
      te.value = "collapsed", R.value = a, ae.value = !1, X.value = !1, G.value = !1, K.value = !1, q.value = !1, J.value = !1, v("update:modelValue", we);
    }
    function tt() {
      const a = l.modelValue || /* @__PURE__ */ new Date();
      Se(a.getFullYear()), Ce(a.getMonth()), De(a.getDate()), l.displayTime && (Ve(a.getHours()), Pe(a.getMinutes()), xe(a.getSeconds()));
    }
    const Z = new IntersectionObserver((a) => {
      a.forEach((D) => {
        D.isIntersecting === !0 && Te();
      });
    }, { threshold: [0] });
    return ee(() => {
      Z.observe(N.value), Z.observe(T.value), Z.observe(f.value), l.displayTime && (Z.observe(k.value), Z.observe(p.value), Z.observe(j.value)), tt();
    }), (a, D) => (o(), i("div", {
      class: m(n(Ie))
    }, [
      t("div", _t, h(e.label), 1),
      t("div", {
        class: m(n(Be))
      }, [
        t("div", {
          class: "select",
          onClick: qe
        }, [
          t("div", kt, [
            t("input", {
              disabled: "",
              value: n(Le)
            }, null, 8, bt),
            t("input", {
              disabled: "",
              value: n(He)
            }, null, 8, $t),
            t("input", {
              disabled: "",
              value: n(je)
            }, null, 8, wt),
            e.displayTime ? (o(), i("input", {
              key: 0,
              disabled: "",
              value: n(Ue)
            }, null, 8, Tt)) : V("", !0),
            e.displayTime ? (o(), i("input", {
              key: 1,
              disabled: "",
              value: n(We)
            }, null, 8, St)) : V("", !0),
            e.displayTime ? (o(), i("input", {
              key: 2,
              disabled: "",
              value: n(Ee)
            }, null, 8, Ct)) : V("", !0),
            e.displayTime && e.hour12 ? (o(), i("input", {
              key: 3,
              disabled: "",
              value: n(Je)
            }, null, 8, Dt)) : V("", !0)
          ]),
          Vt
        ]),
        t("div", {
          class: m(n(Ae)),
          ref_key: "yearPicker",
          ref: N
        }, [
          Pt,
          t("div", {
            class: "options",
            ref_key: "yearOptions",
            ref: b
          }, [
            (o(!0), i(O, null, M(n(y), (d) => (o(), i("div", {
              class: m(Ge(d)),
              value: d,
              ref_for: !0,
              ref_key: "yearRefs",
              ref: ye,
              onClick: (F) => Se(d)
            }, [
              t("div", Ot, h(d), 1),
              Mt
            ], 10, xt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Re)),
          ref_key: "monthPicker",
          ref: T
        }, [
          It,
          t("div", {
            class: "options",
            ref_key: "monthOptions",
            ref: I
          }, [
            (o(!0), i(O, null, M(Object.keys(S), (d) => (o(), i("div", {
              class: m(Ke(d)),
              value: d,
              ref_for: !0,
              ref_key: "monthRefs",
              ref: ge,
              onClick: (F) => Ce(d)
            }, [
              t("div", At, h(S[d]), 1),
              Rt
            ], 10, Bt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Fe)),
          ref_key: "dayPicker",
          ref: f
        }, [
          Ft,
          t("div", {
            class: "options",
            ref_key: "dayOptions",
            ref: L
          }, [
            (o(!0), i(O, null, M(n($), (d) => (o(), i("div", {
              class: m(Qe(d)),
              value: d,
              ref_for: !0,
              ref_key: "dayRefs",
              ref: _e,
              onClick: (F) => De(d)
            }, [
              t("div", zt, h(d), 1),
              Nt
            ], 10, Yt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Ye)),
          ref_key: "hourPicker",
          ref: k
        }, [
          Lt,
          t("div", {
            class: "options",
            ref_key: "hourOptions",
            ref: de
          }, [
            (o(!0), i(O, null, M(n(w), (d) => (o(), i("div", {
              class: m(Xe(d)),
              value: d,
              ref_for: !0,
              ref_key: "hourRefs",
              ref: ke,
              onClick: (F) => Ve(d)
            }, [
              t("div", jt, h(d), 1),
              Ut
            ], 10, Ht))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(ze)),
          ref_key: "minutePicker",
          ref: p
        }, [
          Wt,
          t("div", {
            class: "options",
            ref_key: "minuteOptions",
            ref: me
          }, [
            (o(!0), i(O, null, M(n(z), (d) => (o(), i("div", {
              class: m(Ze(d)),
              value: d,
              ref_for: !0,
              ref_key: "minuteRefs",
              ref: be,
              onClick: (F) => Pe(d)
            }, [
              t("div", Jt, h(d), 1),
              qt
            ], 10, Et))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Ne)),
          ref_key: "secondPicker",
          ref: j
        }, [
          Gt,
          t("div", {
            class: "options",
            ref_key: "secondOptions",
            ref: he
          }, [
            (o(!0), i(O, null, M(n(_), (d) => (o(), i("div", {
              class: m(et(d)),
              value: d,
              ref_for: !0,
              ref_key: "secondRefs",
              ref: $e,
              onClick: (F) => xe(d)
            }, [
              t("div", Qt, h(d), 1)
            ], 10, Kt))), 256))
          ], 512)
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", Xt, h(e.errorMessage), 1)) : V("", !0)
    ], 2));
  }
}, ea = /* @__PURE__ */ H(Zt, [["__scopeId", "data-v-78a68418"]]), nl = {
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
  setup(e, { emit: v }) {
    const l = e, s = c({
      get: () => l.modelValue,
      set: (r) => {
        v("update:modelValue", r);
      }
    });
    return ee(() => {
    }), (r, g) => (o(), oe(ea, {
      modelValue: n(s),
      "onUpdate:modelValue": g[0] || (g[0] = (y) => ve(s) ? s.value = y : null),
      min: e.min,
      max: e.max,
      label: e.label,
      "display-time": !1,
      "error-message": e.errorMessage
    }, null, 8, ["modelValue", "min", "max", "label", "error-message"]));
  }
};
const ta = { class: "input-control" }, aa = { class: "input-label" }, la = { class: "input-field" }, sa = ["type", "value"], na = {
  key: 0,
  class: "input-error"
}, oa = {
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
    return (v, l) => (o(), i("div", ta, [
      t("div", aa, h(e.label), 1),
      t("div", la, [
        t("input", {
          type: e.type,
          class: m(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (s) => v.$emit("update:modelValue", s.target.value))
        }, null, 42, sa)
      ]),
      e.errorMessage.length > 0 ? (o(), i("div", na, h(e.errorMessage), 1)) : V("", !0)
    ]));
  }
}, ol = /* @__PURE__ */ H(oa, [["__scopeId", "data-v-c182bf09"]]);
const ia = ["value"], ua = {
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
  setup(e, { emit: v }) {
    const l = e, s = c(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (r, g) => (o(), i("div", {
      class: m(n(s)),
      value: e.value,
      onClick: g[0] || (g[0] = (y) => r.$emit("select", e.value))
    }, h(e.label), 11, ia));
  }
}, ra = /* @__PURE__ */ H(ua, [["__scopeId", "data-v-1fa7fb5e"]]);
const ca = (e) => (re("data-v-386634d6"), e = e(), ce(), e), da = { class: "input-label" }, fa = ["name"], va = { class: "selected" }, pa = /* @__PURE__ */ ca(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), ma = { class: "options" }, ha = {
  key: 0,
  class: "input-error"
}, ya = {
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
  setup(e, { emit: v }) {
    const l = e, s = u("collapsed"), r = u(""), g = c(() => `input-control ${l.size}`.trim()), y = c(() => `input-field ${s.value}`.trim()), S = c(() => {
      const _ = l.options.find((N) => N.value === r.value);
      return _ ? _.label : "";
    });
    function $() {
      s.value === "collapsed" ? s.value = "expanded" : s.value = "collapsed";
    }
    function w(_) {
      return _ === r.value;
    }
    function z(_) {
      s.value = "collapsed", r.value = _, v("update:modelValue", _);
    }
    return ee(() => {
      z(l.modelValue);
    }), (_, N) => (o(), i("div", {
      class: m(n(g))
    }, [
      t("div", da, h(e.label), 1),
      t("div", {
        class: m(n(y))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: $
        }, [
          t("div", va, h(n(S)), 1),
          pa
        ], 8, fa),
        t("div", ma, [
          (o(!0), i(O, null, M(e.options, (T) => (o(), oe(ra, {
            value: T.value,
            label: T.label,
            size: e.size,
            selected: w(T.value),
            onSelect: (f) => z(T.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", ha, h(e.errorMessage), 1)) : V("", !0)
    ], 2));
  }
}, il = /* @__PURE__ */ H(ya, [["__scopeId", "data-v-386634d6"]]);
const ga = { class: "progress-bar" }, _a = {
  __name: "TProgressBar",
  props: {
    step: {
      type: Number,
      default: 10
    },
    speed: {
      type: Number,
      default: 100
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
    const v = e, l = u("forward"), s = u("forwardBar"), r = u("reverseBar"), g = u(), y = c(() => `bar forward-bar ${l.value}`), S = c(() => v.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    ee(() => {
      g.value = setInterval(w, v.speed);
    });
    function $(f) {
      return f ? parseInt(f.style.width.split("%")[0]) : 0;
    }
    function w() {
      v.bidirection ? _() : z();
    }
    function z() {
      const f = $(s.value);
      f === 100 ? v.indefinite ? N(s.value) : clearInterval(g.value) : T(s.value, "forward", f);
    }
    function _() {
      const f = $(s.value), k = $(r.value);
      l.value === "forward" && f === 100 ? (l.value = "reverse", T(s.value, "reverse", f), T(r.value, "forward", k)) : l.value === "reverse" && k === 100 ? (l.value = "forward", T(s.value, "forward", f), T(r.value, "reverse", k)) : l.value === "forward" ? (T(s.value, "forward", f), T(r.value, "reverse", k)) : l.value === "reverse" && (T(s.value, "reverse", f), T(r.value, "forward", k));
    }
    function N(f) {
      f.style.width = "0%";
    }
    function T(f, k, p) {
      f && (k === "forward" ? f.style.width = [(p + v.step).toString(), "%"].join("") : f.style.width = [(p - v.step).toString(), "%"].join(""));
    }
    return (f, k) => (o(), i("div", ga, [
      t("div", {
        class: m(n(y)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: s
      }, null, 2),
      t("div", {
        class: m(n(S)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: r
      }, null, 2)
    ]));
  }
}, ka = /* @__PURE__ */ H(_a, [["__scopeId", "data-v-8639eecf"]]);
const Me = (e) => (re("data-v-7832a2e2"), e = e(), ce(), e), ba = { class: "table-container" }, $a = { class: "table-actions" }, wa = { class: "actions" }, Ta = ["onClick"], Sa = { class: "tooltip" }, Ca = { class: "header" }, Da = { class: "row" }, Va = { class: "col" }, Pa = {
  key: 0,
  class: "col"
}, xa = {
  key: 0,
  class: "loading"
}, Oa = ["colspan"], Ma = { class: "body" }, Ia = { class: "row" }, Ba = { class: "col" }, Aa = {
  key: 0,
  class: "col"
}, Ra = { class: "actions" }, Fa = ["onClick"], Ya = { class: "tooltip" }, za = { class: "pagination" }, Na = /* @__PURE__ */ Me(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), La = { class: "page-number" }, Ha = {
  key: 0,
  class: "current"
}, ja = { class: "current" }, Ua = /* @__PURE__ */ Me(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Wa = {
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
  setup(e, { emit: v }) {
    const l = e, s = u(0), r = u(l.pagination.limit), g = c(() => l.pagination.client ? !1 : l.loading), y = c(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), S = c(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), $ = c(() => l.dense ? "table dense" : "table"), w = c(() => l.pagination.client ? l.data.length : l.totalData), z = c(() => l.pagination.client ? l.data.slice(s.value, s.value + r.value) : l.data), _ = c(() => s.value + r.value > w.value ? {
      start: s.value + 1,
      end: w.value
    } : {
      start: s.value + 1,
      end: s.value + r.value
    }), N = c(() => _.value.start === 1 ? "pager left" : "pager left show"), T = c(() => _.value.end === w.value ? "pager right" : "pager right show");
    function f() {
      _.value.start === 1 || (s.value - r.value < 0 ? s.value = 0 : s.value = s.value - r.value), v("offsetChange", s.value);
    }
    function k() {
      _.value.end === w.value || (s.value = s.value + r.value), v("offsetChange", s.value);
    }
    return (p, j) => (o(), i("div", ba, [
      t("div", $a, [
        C(p.$slots, "table-actions", P(x({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: m(n(S))
          }, [
            C(p.$slots, "table-name", P(x({ name: e.name })), () => [
              se(h(e.name), 1)
            ], !0)
          ], 2),
          t("div", wa, [
            (o(!0), i(O, null, M(e.tableActions, (b) => (o(), i("div", {
              class: "action",
              onClick: (I) => b.click(e.data)
            }, [
              C(p.$slots, "table-action", P(x({ action: b, data: e.data })), () => [
                t("i", {
                  class: m(b.icon)
                }, null, 2),
                t("span", Sa, h(b.name), 1)
              ], !0)
            ], 8, Ta))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: m(n($))
      }, [
        t("thead", Ca, [
          t("tr", Da, [
            C(p.$slots, "header-row", P(x({ headers: e.headers, actions: e.actions })), () => [
              (o(!0), i(O, null, M(e.headers, (b, I) => (o(), i("th", Va, [
                C(p.$slots, `header-col.${b.key}`, P(x({ header: b, i: I })), () => [
                  se(h(b.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (o(), i("th", Pa, [
                C(p.$slots, "header-actions", P(x({ actions: e.actions })), void 0, !0)
              ])) : V("", !0)
            ], !0)
          ]),
          n(g) ? (o(), i("tr", xa, [
            C(p.$slots, "progress-bar", P(x({ headers: e.headers, actions: e.actions, span: n(y) })), () => [
              t("th", { colspan: n(y) }, [
                ue(ka)
              ], 8, Oa)
            ], !0)
          ])) : V("", !0)
        ]),
        t("tbody", Ma, [
          n(g) ? V("", !0) : (o(!0), i(O, { key: 0 }, M(n(z), (b, I) => (o(), i("tr", Ia, [
            C(p.$slots, "data-row", P(x({ headers: e.headers, row: b, actions: e.actions, i: I })), () => [
              C(p.$slots, "data-content", P(x({ headers: e.headers, row: b, i: I })), () => [
                (o(!0), i(O, null, M(e.headers, (L) => (o(), i("td", Ba, [
                  C(p.$slots, `data-col.${L.key}`, P(x({ header: L, row: b, i: I })), () => [
                    se(h(b[L.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (o(), i("td", Aa, [
                C(p.$slots, "data-actions", P(x({ row: b, actions: e.actions, i: I })), () => [
                  t("div", Ra, [
                    (o(!0), i(O, null, M(e.actions, (L) => (o(), i("div", {
                      class: "action",
                      onClick: (de) => L.click(b, I)
                    }, [
                      C(p.$slots, "data-action", P(x({ row: b, action: L, i: I })), () => [
                        t("i", {
                          class: m(L.icon)
                        }, null, 2),
                        t("span", Ya, h(L.name), 1)
                      ], !0)
                    ], 8, Fa))), 256))
                  ])
                ], !0)
              ])) : V("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", za, [
        C(p.$slots, "pagination", P(x({ pageLeft: f, pageRight: k, start: n(_).start, end: n(_).end, total: n(w) })), () => [
          t("div", {
            class: m(n(N)),
            onClick: j[0] || (j[0] = (b) => f())
          }, [
            C(p.$slots, "pager-left", {}, () => [
              Na
            ], !0)
          ], 2),
          t("div", La, [
            C(p.$slots, "page-number", P(x({ start: n(_).start, end: n(_).end, total: n(w) })), () => [
              n(_).start !== n(_).end ? (o(), i("span", Ha, h(n(_).start) + " - ", 1)) : V("", !0),
              t("span", ja, h(n(_).end), 1),
              se(" / " + h(n(w)), 1)
            ], !0)
          ]),
          t("div", {
            class: m(n(T)),
            onClick: j[1] || (j[1] = (b) => k())
          }, [
            C(p.$slots, "pager-right", {}, () => [
              Ua
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Ea = /* @__PURE__ */ H(Wa, [["__scopeId", "data-v-7832a2e2"]]);
const Ja = (e) => (re("data-v-35af7676"), e = e(), ce(), e), qa = { class: "input-label" }, Ga = { class: "select" }, Ka = { class: "selected" }, Qa = { class: "tag" }, Xa = /* @__PURE__ */ Ja(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), Za = {
  key: 0,
  class: "input-error"
}, el = {
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
  setup(e, { emit: v }) {
    const l = e, s = u(!1), r = u(""), g = c(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), y = u([
      {
        name: "Select",
        icon: "",
        click: function(f, k) {
          N(f);
        }
      }
    ]), S = c(() => `input-control ${l.size}`);
    function $(f) {
      return w.value.find((p) => p === f.value) ? "checkbox checked" : "checkbox";
    }
    const w = c(() => l.modelValue.map((f) => f.value));
    u({});
    const z = c(() => l.modelValue.map((f) => f.label));
    function _() {
      s.value = !s.value;
    }
    function N(f) {
      const k = Array.from(l.modelValue), p = w.value.findIndex((j) => j === f.value);
      p < 0 ? k.push({ value: f.value, label: f.label }) : k.splice(p, 1), v("update:modelValue", k);
    }
    function T(f) {
      v("offsetChange", f);
    }
    return ee(() => {
    }), (f, k) => (o(), i("div", {
      class: m(n(S))
    }, [
      t("div", qa, h(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: _
      }, [
        t("div", Ga, [
          (o(!0), i(O, null, M(n(z), (p) => (o(), i("div", Ka, [
            t("div", Qa, h(p), 1)
          ]))), 256))
        ]),
        Xa
      ]),
      r.value.length > 0 ? (o(), i("div", Za, h(r.value), 1)) : V("", !0),
      s.value ? (o(), oe(pe, {
        key: 1,
        modelValue: s.value,
        "onUpdate:modelValue": k[0] || (k[0] = (p) => s.value = p),
        title: "Select",
        width: 800,
        height: 600,
        class: "options-dialog"
      }, {
        body: ne(() => [
          ue(Ea, {
            name: e.name,
            headers: n(g),
            data: e.options,
            actions: y.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: T
          }, {
            "data-action": ne(({ row: p, action: j, i: b }) => [
              t("div", {
                class: m($(p))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : V("", !0)
    ], 2));
  }
}, ul = /* @__PURE__ */ H(el, [["__scopeId", "data-v-35af7676"]]);
export {
  al as TAlert,
  Oe as TButton,
  sl as TCheckbox,
  ll as TConfirmDialog,
  nl as TDatePicker,
  ea as TDateTimePicker,
  pe as TDialog,
  ol as TInput,
  ra as TOption,
  ka as TProgressBar,
  il as TSelect,
  ul as TSelectTable,
  Ea as TTable
};
