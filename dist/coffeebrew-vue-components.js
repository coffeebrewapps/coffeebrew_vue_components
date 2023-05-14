import { ref as u, computed as r, onMounted as ee, unref as n, openBlock as o, createElementBlock as i, createElementVNode as t, renderSlot as w, createTextVNode as se, toDisplayString as h, createCommentVNode as V, createBlock as oe, isRef as ve, withCtx as ne, normalizeClass as m, createVNode as ue, Fragment as I, watch as at, renderList as B, pushScopeId as re, popScopeId as ce, normalizeProps as M, guardReactiveProps as O } from "vue";
const j = (e, v) => {
  const l = e.__vccOpts || e;
  for (const [s, c] of v)
    l[s] = c;
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
    const l = e, s = u("dialog");
    r(() => l.modelValue ? "dialog show" : "dialog hide");
    const c = r(() => l.modelValue);
    function g() {
      v("update:modelValue", !1);
    }
    return ee(() => {
      s.value.style.width = `${l.width}px`, s.value.style.height = `${l.height}px`, s.value.style.top = `calc((100vh - ${s.value.style.height}) / 2)`, s.value.style.left = `calc((100vw - ${s.value.style.width}) / 2)`;
    }), (y, T) => n(c) ? (o(), i("div", {
      key: 0,
      class: "dialog",
      ref_key: "dialog",
      ref: s
    }, [
      t("div", st, [
        w(y.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: T[0] || (T[0] = ($) => g())
          })
        ], !0)
      ]),
      t("div", nt, [
        t("div", ot, [
          w(y.$slots, "heading", {}, () => [
            se(h(e.title), 1)
          ], !0)
        ]),
        t("div", it, [
          w(y.$slots, "body", {}, void 0, !0)
        ]),
        t("div", ut, [
          w(y.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 512)) : V("", !0);
  }
}, pe = /* @__PURE__ */ j(rt, [["__scopeId", "data-v-17eaea67"]]), ct = { class: "text" }, la = {
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
    const l = e, s = u("dialog"), c = r({
      get: () => l.modelValue,
      set: (g) => {
        v("update:modelValue", g);
      }
    });
    return (g, y) => (o(), oe(pe, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(c),
      "onUpdate:modelValue": y[0] || (y[0] = (T) => ve(c) ? c.value = T : null),
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
    const l = e, s = r(() => `button ${l.buttonType} ${l.size}`.trim()), c = r(() => `${l.icon} fa-lg`.trim());
    return (g, y) => (o(), i("div", {
      class: m(n(s)),
      onClick: y[0] || (y[0] = (T) => g.$emit("click"))
    }, [
      e.buttonType === "text" ? (o(), i("span", dt, h(e.value), 1)) : V("", !0),
      t("i", {
        class: m(n(c))
      }, null, 2)
    ], 2));
  }
}, Me = /* @__PURE__ */ j(ft, [["__scopeId", "data-v-c26a9562"]]);
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
    const l = e, s = u("dialog"), c = r({
      get: () => l.modelValue,
      set: (T) => {
        v("update:modelValue", T);
      }
    });
    function g() {
      v("update:modelValue", !1), v("confirm");
    }
    function y() {
      v("update:modelValue", !1), v("cancel");
    }
    return (T, $) => (o(), oe(pe, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(c),
      "onUpdate:modelValue": $[2] || ($[2] = (b) => ve(c) ? c.value = b : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: ne(() => [
        t("div", vt, h(e.primaryText), 1),
        t("div", pt, h(e.secondaryText), 1)
      ]),
      actions: ne(() => [
        ue(Me, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: $[0] || ($[0] = (b) => g())
        }),
        ue(Me, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: $[1] || ($[1] = (b) => y())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, aa = /* @__PURE__ */ j(mt, [["__scopeId", "data-v-87937dbc"]]);
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
    const l = e, s = u(l.modelValue), c = r(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), g = r(() => s.value ? "input-field checked" : "input-field");
    function y() {
      s.value = !s.value, v("update:modelValue", s.value);
    }
    return (T, $) => (o(), i(I, null, [
      t("div", {
        class: m(n(c)),
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
}, sa = /* @__PURE__ */ j(gt, [["__scopeId", "data-v-5ea6b79c"]]);
const N = (e) => (re("data-v-78a68418"), e = e(), ce(), e), _t = { class: "input-label" }, kt = { class: "selected" }, bt = ["value"], $t = ["value"], St = ["value"], Tt = ["value"], wt = ["value"], Ct = ["value"], Dt = ["value"], Vt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), xt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Pt = ["value", "onClick"], Mt = { class: "value" }, Ot = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), It = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Bt = ["value", "onClick"], At = { class: "value" }, Rt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ft = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Yt = ["value", "onClick"], zt = { class: "value" }, Nt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Lt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), Ht = ["value", "onClick"], jt = { class: "value" }, Ut = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Wt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), Et = ["value", "onClick"], Jt = { class: "value" }, qt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Gt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), Kt = ["value", "onClick"], Qt = { class: "value" }, Xt = {
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
    const l = e, s = /* @__PURE__ */ new Date(), c = new Date(s.getFullYear() - 10, 1, 1), g = new Date(s.getFullYear() + 9, 12, 31), y = [
      ...Array(g.getFullYear() - c.getFullYear()).keys()
    ].map((a) => a + c.getFullYear()), T = [
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
    ], $ = r(() => {
      const a = E.value, D = U.value;
      if (a && D) {
        const f = new Date(a, D, 1);
        return f.setMonth(f.getMonth() + 1), f.setDate(f.getDate() - 1), Array.from(Array(f.getDate())).map((z, ae) => ae + 1);
      } else
        return Array.from(Array(30)).map((f, z) => z + 1);
    }), b = Array.from(Array(24)).map((a, D) => D), L = Array.from(Array(60)).map((a, D) => D), _ = Array.from(Array(60)).map((a, D) => D), H = u("yearPicker"), S = u("monthPicker"), k = u("dayPicker"), x = u("hourPicker"), d = u("minutePicker"), C = u("secondPicker"), p = u("yearOptions"), P = u("monthOptions"), A = u("dayOptions"), de = u("hourOptions"), me = u("minuteOptions"), he = u("secondOptions"), ye = u([]), ge = u([]), _e = u([]), ke = u([]), be = u([]), $e = u([]), te = u("collapsed"), E = u(), U = u(), W = u(), R = u(), F = u(), Y = u();
    u();
    const le = u(!1), X = u(!1), G = u(!1), K = u(!1), q = u(!1), J = u(!1), Ie = r(() => l.displayTime ? l.hour12 ? "input-control display-time hour12" : "input-control display-time hour24" : "input-control"), Be = r(() => `input-field ${te.value}`.trim()), Ae = r(() => le.value ? "year picker show" : "year picker hide"), Re = r(() => X.value ? "month picker show" : "month picker hide"), Fe = r(() => G.value ? "day picker show" : "day picker hide"), Ye = r(() => l.displayTime && K.value ? "hour picker show" : "hour picker hide"), ze = r(() => l.displayTime && q.value ? "minute picker show" : "minute picker hide"), Ne = r(() => l.displayTime && J.value ? "second picker show" : "second picker hide"), Se = r(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear(), D = U.value || (/* @__PURE__ */ new Date()).getMonth(), f = W.value || (/* @__PURE__ */ new Date()).getDate(), z = R.value || 0, ae = F.value || 0, fe = Y.value || 0;
      return new Date(a, D, f, z, ae, fe);
    }), Le = r(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear();
      return Q(a, 1, 1, 0, 0, 0).date.split("-")[0];
    }), He = r(() => {
      const a = U.value || (/* @__PURE__ */ new Date()).getMonth();
      return Q(1900, a, 1, 0, 0, 0).date.split("-")[1];
    }), je = r(() => {
      const a = W.value || (/* @__PURE__ */ new Date()).getDate();
      return Q(1900, 1, a, 0, 0, 0).date.split("-")[2];
    }), Ue = r(() => {
      const a = R.value || 0;
      return Q(1900, 1, 1, a, 0, 0).time.split(" ")[0].split(":")[0];
    }), We = r(() => {
      const a = F.value || 0;
      return Q(1900, 1, 1, 0, a, 0).time.split(" ")[0].split(":")[1];
    }), Ee = r(() => {
      const a = Y.value || 0;
      return Q(1900, 1, 1, 0, 0, a).time.split(" ")[0].split(":")[2];
    }), Je = r(() => {
      const a = R.value || 0;
      return Q(1900, 1, 1, a, 0, 0).time.split(" ")[1];
    });
    function Q(a, D, f, z, ae, fe) {
      const ie = new Date(a, D, f, z, ae, fe);
      a = ie.toLocaleString("default", { year: "numeric" }), D = ie.toLocaleString("default", { month: "2-digit" }), f = ie.toLocaleString("default", { day: "2-digit" });
      const lt = ie.toLocaleTimeString("en-US", { hour12: l.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      return {
        date: [a, D, f].join("-"),
        time: lt
      };
    }
    function qe() {
      te.value === "collapsed" ? (te.value = "expanded", le.value = !0, E.value && (X.value = !0), U.value && (G.value = !0), W.value && (K.value = !0), R.value && (q.value = !0), F.value && (J.value = !0)) : (te.value = "collapsed", le.value = !1, X.value = !1, G.value = !1, K.value = !1, q.value = !1, J.value = !1);
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
      return a === R.value ? "option selected" : "option";
    }
    function Ze(a) {
      return a === F.value ? "option selected" : "option";
    }
    function et(a) {
      return a === Y.value ? "option selected" : "option";
    }
    function Te() {
      if (E.value) {
        const a = ye.value[y.indexOf(E.value)];
        p.value.scrollTop = a.offsetTop;
      }
      if (U.value) {
        const a = ge.value[U.value];
        P.value.scrollTop = a.offsetTop;
      }
      if (W.value) {
        const a = _e.value[$.value.indexOf(W.value)];
        A.value.scrollTop = a.offsetTop;
      }
      if (R.value) {
        const a = ke.value[b.indexOf(R.value)];
        de.value.scrollTop = a.offsetTop;
      }
      if (F.value) {
        const a = be.value[L.indexOf(F.value)];
        me.value.scrollTop = a.offsetTop;
      }
      if (Y.value) {
        const a = $e.value[_.indexOf(Y.value)];
        he.value.scrollTop = a.offsetTop;
      }
    }
    at([E, U, W, R, F, Y], () => {
      Te();
    });
    function we(a) {
      E.value = a, U.value = 0, W.value = 1, R.value = 0, F.value = 0, Y.value = 0, X.value = !0, G.value = !1, K.value = !1, q.value = !1, J.value = !1;
    }
    function Ce(a) {
      U.value = a, W.value = 1, R.value = 0, F.value = 0, Y.value = 0, G.value = !0, K.value = !1, q.value = !1, J.value = !1;
    }
    function De(a) {
      W.value = a, R.value = 0, F.value = 0, Y.value = 0, l.displayTime ? (K.value = !0, q.value = !1, J.value = !1) : (le.value = !1, X.value = !1, G.value = !1, v("update:modelValue", Se));
    }
    function Ve(a) {
      R.value = a, F.value = 0, Y.value = 0, q.value = !0, J.value = !1;
    }
    function xe(a) {
      F.value = a, Y.value = 0, J.value = !0;
    }
    function Pe(a) {
      te.value = "collapsed", Y.value = a, le.value = !1, X.value = !1, G.value = !1, K.value = !1, q.value = !1, J.value = !1, v("update:modelValue", Se);
    }
    function tt() {
      const a = l.modelValue || /* @__PURE__ */ new Date();
      we(a.getFullYear()), Ce(a.getMonth()), De(a.getDate()), l.displayTime && (Ve(a.getHours()), xe(a.getMinutes()), Pe(a.getSeconds()));
    }
    const Z = new IntersectionObserver((a) => {
      a.forEach((D) => {
        D.isIntersecting === !0 && Te();
      });
    }, { threshold: [0] });
    return ee(() => {
      Z.observe(H.value), Z.observe(S.value), Z.observe(k.value), l.displayTime && (Z.observe(x.value), Z.observe(d.value), Z.observe(C.value)), tt();
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
            }, null, 8, St),
            e.displayTime ? (o(), i("input", {
              key: 0,
              disabled: "",
              value: n(Ue)
            }, null, 8, Tt)) : V("", !0),
            e.displayTime ? (o(), i("input", {
              key: 1,
              disabled: "",
              value: n(We)
            }, null, 8, wt)) : V("", !0),
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
          ref: H
        }, [
          xt,
          t("div", {
            class: "options",
            ref_key: "yearOptions",
            ref: p
          }, [
            (o(!0), i(I, null, B(n(y), (f) => (o(), i("div", {
              class: m(Ge(f)),
              value: f,
              ref_for: !0,
              ref_key: "yearRefs",
              ref: ye,
              onClick: (z) => we(f)
            }, [
              t("div", Mt, h(f), 1),
              Ot
            ], 10, Pt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Re)),
          ref_key: "monthPicker",
          ref: S
        }, [
          It,
          t("div", {
            class: "options",
            ref_key: "monthOptions",
            ref: P
          }, [
            (o(!0), i(I, null, B(Object.keys(T), (f) => (o(), i("div", {
              class: m(Ke(f)),
              value: f,
              ref_for: !0,
              ref_key: "monthRefs",
              ref: ge,
              onClick: (z) => Ce(f)
            }, [
              t("div", At, h(T[f]), 1),
              Rt
            ], 10, Bt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Fe)),
          ref_key: "dayPicker",
          ref: k
        }, [
          Ft,
          t("div", {
            class: "options",
            ref_key: "dayOptions",
            ref: A
          }, [
            (o(!0), i(I, null, B(n($), (f) => (o(), i("div", {
              class: m(Qe(f)),
              value: f,
              ref_for: !0,
              ref_key: "dayRefs",
              ref: _e,
              onClick: (z) => De(f)
            }, [
              t("div", zt, h(f), 1),
              Nt
            ], 10, Yt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Ye)),
          ref_key: "hourPicker",
          ref: x
        }, [
          Lt,
          t("div", {
            class: "options",
            ref_key: "hourOptions",
            ref: de
          }, [
            (o(!0), i(I, null, B(n(b), (f) => (o(), i("div", {
              class: m(Xe(f)),
              value: f,
              ref_for: !0,
              ref_key: "hourRefs",
              ref: ke,
              onClick: (z) => Ve(f)
            }, [
              t("div", jt, h(f), 1),
              Ut
            ], 10, Ht))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(ze)),
          ref_key: "minutePicker",
          ref: d
        }, [
          Wt,
          t("div", {
            class: "options",
            ref_key: "minuteOptions",
            ref: me
          }, [
            (o(!0), i(I, null, B(n(L), (f) => (o(), i("div", {
              class: m(Ze(f)),
              value: f,
              ref_for: !0,
              ref_key: "minuteRefs",
              ref: be,
              onClick: (z) => xe(f)
            }, [
              t("div", Jt, h(f), 1),
              qt
            ], 10, Et))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: m(n(Ne)),
          ref_key: "secondPicker",
          ref: C
        }, [
          Gt,
          t("div", {
            class: "options",
            ref_key: "secondOptions",
            ref: he
          }, [
            (o(!0), i(I, null, B(n(_), (f) => (o(), i("div", {
              class: m(et(f)),
              value: f,
              ref_for: !0,
              ref_key: "secondRefs",
              ref: $e,
              onClick: (z) => Pe(f)
            }, [
              t("div", Qt, h(f), 1)
            ], 10, Kt))), 256))
          ], 512)
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", Xt, h(e.errorMessage), 1)) : V("", !0)
    ], 2));
  }
}, el = /* @__PURE__ */ j(Zt, [["__scopeId", "data-v-78a68418"]]), na = {
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
    const l = e, s = r({
      get: () => l.modelValue,
      set: (c) => {
        v("update:modelValue", c);
      }
    });
    return ee(() => {
    }), (c, g) => (o(), oe(el, {
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
const tl = { class: "input-control" }, ll = { class: "input-label" }, al = { class: "input-field" }, sl = ["type", "value"], nl = {
  key: 0,
  class: "input-error"
}, ol = {
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
    return (v, l) => (o(), i("div", tl, [
      t("div", ll, h(e.label), 1),
      t("div", al, [
        t("input", {
          type: e.type,
          class: m(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (s) => v.$emit("update:modelValue", s.target.value))
        }, null, 42, sl)
      ]),
      e.errorMessage.length > 0 ? (o(), i("div", nl, h(e.errorMessage), 1)) : V("", !0)
    ]));
  }
}, oa = /* @__PURE__ */ j(ol, [["__scopeId", "data-v-c182bf09"]]);
const il = ["value"], ul = {
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
    const l = e, s = r(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (c, g) => (o(), i("div", {
      class: m(n(s)),
      value: e.value,
      onClick: g[0] || (g[0] = (y) => c.$emit("select", e.value))
    }, h(e.label), 11, il));
  }
}, rl = /* @__PURE__ */ j(ul, [["__scopeId", "data-v-1fa7fb5e"]]);
const cl = (e) => (re("data-v-386634d6"), e = e(), ce(), e), dl = { class: "input-label" }, fl = ["name"], vl = { class: "selected" }, pl = /* @__PURE__ */ cl(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), ml = { class: "options" }, hl = {
  key: 0,
  class: "input-error"
}, yl = {
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
    const l = e, s = u("collapsed"), c = u(""), g = r(() => `input-control ${l.size}`.trim()), y = r(() => `input-field ${s.value}`.trim()), T = r(() => {
      const _ = l.options.find((H) => H.value === c.value);
      return _ ? _.label : "";
    });
    function $() {
      s.value === "collapsed" ? s.value = "expanded" : s.value = "collapsed";
    }
    function b(_) {
      return _ === c.value;
    }
    function L(_) {
      s.value = "collapsed", c.value = _, v("update:modelValue", _);
    }
    return ee(() => {
      L(l.modelValue);
    }), (_, H) => (o(), i("div", {
      class: m(n(g))
    }, [
      t("div", dl, h(e.label), 1),
      t("div", {
        class: m(n(y))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: $
        }, [
          t("div", vl, h(n(T)), 1),
          pl
        ], 8, fl),
        t("div", ml, [
          (o(!0), i(I, null, B(e.options, (S) => (o(), oe(rl, {
            value: S.value,
            label: S.label,
            size: e.size,
            selected: b(S.value),
            onSelect: (k) => L(S.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", hl, h(e.errorMessage), 1)) : V("", !0)
    ], 2));
  }
}, ia = /* @__PURE__ */ j(yl, [["__scopeId", "data-v-386634d6"]]);
const gl = { class: "progress-bar" }, _l = {
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
    const v = e, l = u("forward"), s = u("forwardBar"), c = u("reverseBar"), g = u(), y = r(() => `bar forward-bar ${l.value}`), T = r(() => v.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    ee(() => {
      g.value = setInterval(b, v.speed);
    });
    function $(k) {
      return k ? parseInt(k.style.width.split("%")[0]) : 0;
    }
    function b() {
      v.bidirection ? _() : L();
    }
    function L() {
      const k = $(s.value);
      k === 100 ? v.indefinite ? H(s.value) : clearInterval(g.value) : S(s.value, "forward", k);
    }
    function _() {
      const k = $(s.value), x = $(c.value);
      l.value === "forward" && k === 100 ? (l.value = "reverse", S(s.value, "reverse", k), S(c.value, "forward", x)) : l.value === "reverse" && x === 100 ? (l.value = "forward", S(s.value, "forward", k), S(c.value, "reverse", x)) : l.value === "forward" ? (S(s.value, "forward", k), S(c.value, "reverse", x)) : l.value === "reverse" && (S(s.value, "reverse", k), S(c.value, "forward", x));
    }
    function H(k) {
      k.style.width = "0%";
    }
    function S(k, x, d) {
      k && (x === "forward" ? k.style.width = [(d + v.step).toString(), "%"].join("") : k.style.width = [(d - v.step).toString(), "%"].join(""));
    }
    return (k, x) => (o(), i("div", gl, [
      t("div", {
        class: m(n(y)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: s
      }, null, 2),
      t("div", {
        class: m(n(T)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: c
      }, null, 2)
    ]));
  }
}, kl = /* @__PURE__ */ j(_l, [["__scopeId", "data-v-8639eecf"]]);
const Oe = (e) => (re("data-v-7832a2e2"), e = e(), ce(), e), bl = { class: "table-container" }, $l = { class: "table-actions" }, Sl = { class: "actions" }, Tl = ["onClick"], wl = { class: "tooltip" }, Cl = { class: "header" }, Dl = { class: "row" }, Vl = { class: "col" }, xl = {
  key: 0,
  class: "col"
}, Pl = {
  key: 0,
  class: "loading"
}, Ml = ["colspan"], Ol = { class: "body" }, Il = { class: "row" }, Bl = { class: "col" }, Al = {
  key: 0,
  class: "col"
}, Rl = { class: "actions" }, Fl = ["onClick"], Yl = { class: "tooltip" }, zl = { class: "pagination" }, Nl = /* @__PURE__ */ Oe(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Ll = { class: "page-number" }, Hl = {
  key: 0,
  class: "current"
}, jl = { class: "current" }, Ul = /* @__PURE__ */ Oe(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Wl = {
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
    const l = e, s = u(0), c = u(l.pagination.limit), g = r(() => l.pagination.client ? !1 : l.loading), y = r(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), T = r(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), $ = r(() => l.dense ? "table dense" : "table"), b = r(() => l.pagination.client ? l.data.length : l.totalData), L = r(() => l.pagination.client ? l.data.slice(s.value, s.value + c.value) : l.data), _ = r(() => s.value + c.value > b.value ? {
      start: s.value + 1,
      end: b.value
    } : {
      start: s.value + 1,
      end: s.value + c.value
    }), H = r(() => _.value.start === 1 ? "pager left" : "pager left show"), S = r(() => _.value.end === b.value ? "pager right" : "pager right show");
    function k() {
      _.value.start === 1 || (s.value - c.value < 0 ? s.value = 0 : s.value = s.value - c.value), v("offsetChange", s.value);
    }
    function x() {
      _.value.end === b.value || (s.value = s.value + c.value), v("offsetChange", s.value);
    }
    return (d, C) => (o(), i("div", bl, [
      t("div", $l, [
        w(d.$slots, "table-actions", M(O({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: m(n(T))
          }, [
            w(d.$slots, "table-name", M(O({ name: e.name })), () => [
              se(h(e.name), 1)
            ], !0)
          ], 2),
          t("div", Sl, [
            (o(!0), i(I, null, B(e.tableActions, (p) => (o(), i("div", {
              class: "action",
              onClick: (P) => p.click(e.data)
            }, [
              w(d.$slots, "table-action", M(O({ action: p, data: e.data })), () => [
                t("i", {
                  class: m(p.icon)
                }, null, 2),
                t("span", wl, h(p.name), 1)
              ], !0)
            ], 8, Tl))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: m(n($))
      }, [
        t("thead", Cl, [
          t("tr", Dl, [
            w(d.$slots, "header-row", M(O({ headers: e.headers, actions: e.actions })), () => [
              (o(!0), i(I, null, B(e.headers, (p, P) => (o(), i("th", Vl, [
                w(d.$slots, `header-col.${p.key}`, M(O({ header: p, i: P })), () => [
                  se(h(p.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (o(), i("th", xl, [
                w(d.$slots, "header-actions", M(O({ actions: e.actions })), void 0, !0)
              ])) : V("", !0)
            ], !0)
          ]),
          n(g) ? (o(), i("tr", Pl, [
            w(d.$slots, "progress-bar", M(O({ headers: e.headers, actions: e.actions, span: n(y) })), () => [
              t("th", { colspan: n(y) }, [
                ue(kl)
              ], 8, Ml)
            ], !0)
          ])) : V("", !0)
        ]),
        t("tbody", Ol, [
          n(g) ? V("", !0) : (o(!0), i(I, { key: 0 }, B(n(L), (p, P) => (o(), i("tr", Il, [
            w(d.$slots, "data-row", M(O({ headers: e.headers, row: p, actions: e.actions, i: P })), () => [
              w(d.$slots, "data-content", M(O({ headers: e.headers, row: p, i: P })), () => [
                (o(!0), i(I, null, B(e.headers, (A) => (o(), i("td", Bl, [
                  w(d.$slots, `data-col.${A.key}`, M(O({ header: A, row: p, i: P })), () => [
                    se(h(p[A.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (o(), i("td", Al, [
                w(d.$slots, "data-actions", M(O({ row: p, actions: e.actions, i: P })), () => [
                  t("div", Rl, [
                    (o(!0), i(I, null, B(e.actions, (A) => (o(), i("div", {
                      class: "action",
                      onClick: (de) => A.click(p, P)
                    }, [
                      w(d.$slots, "data-action", M(O({ row: p, action: A, i: P })), () => [
                        t("i", {
                          class: m(A.icon)
                        }, null, 2),
                        t("span", Yl, h(A.name), 1)
                      ], !0)
                    ], 8, Fl))), 256))
                  ])
                ], !0)
              ])) : V("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", zl, [
        w(d.$slots, "pagination", M(O({ pageLeft: k, pageRight: x, start: n(_).start, end: n(_).end, total: n(b) })), () => [
          t("div", {
            class: m(n(H)),
            onClick: C[0] || (C[0] = (p) => k())
          }, [
            w(d.$slots, "pager-left", {}, () => [
              Nl
            ], !0)
          ], 2),
          t("div", Ll, [
            w(d.$slots, "page-number", M(O({ start: n(_).start, end: n(_).end, total: n(b) })), () => [
              n(_).start !== n(_).end ? (o(), i("span", Hl, h(n(_).start) + " - ", 1)) : V("", !0),
              t("span", jl, h(n(_).end), 1),
              se(" / " + h(n(b)), 1)
            ], !0)
          ]),
          t("div", {
            class: m(n(S)),
            onClick: C[1] || (C[1] = (p) => x())
          }, [
            w(d.$slots, "pager-right", {}, () => [
              Ul
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, El = /* @__PURE__ */ j(Wl, [["__scopeId", "data-v-7832a2e2"]]);
const Jl = (e) => (re("data-v-3d6072c3"), e = e(), ce(), e), ql = { class: "input-label" }, Gl = { class: "select" }, Kl = { class: "selected" }, Ql = { class: "tag" }, Xl = /* @__PURE__ */ Jl(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), Zl = {
  key: 0,
  class: "input-error"
}, ea = {
  __name: "TSelectTable",
  props: {
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: !0
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
    const l = e, s = u(!1), c = u(""), g = r(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), y = u([
      {
        name: "Select",
        icon: "",
        click: function(d, C) {
          H(d);
        }
      }
    ]), T = r(() => `input-control ${l.size}`);
    function $(d) {
      return b.value.find((p) => p === d.value) ? "checkbox checked" : "checkbox";
    }
    const b = r(() => l.modelValue ? l.modelValue.map((d) => d.value) : []);
    u({});
    const L = r(() => l.modelValue ? l.modelValue.map((d) => d.label) : []);
    function _() {
      s.value = !s.value;
    }
    function H(d) {
      l.multiple ? v("update:modelValue", S(d)) : v("update:modelValue", k(d));
    }
    function S(d) {
      const C = Array.from(l.modelValue || []), p = b.value.findIndex((P) => P === d.value);
      return p < 0 ? C.push({ value: d.value, label: d.label }) : C.splice(p, 1), C;
    }
    function k(d) {
      return Array.from(l.modelValue || []), b.value.findIndex((p) => p === d.value) < 0 ? [{ value: d.value, label: d.label }] : [];
    }
    function x(d) {
      v("offsetChange", d);
    }
    return ee(() => {
    }), (d, C) => (o(), i("div", {
      class: m(n(T))
    }, [
      t("div", ql, h(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: _
      }, [
        t("div", Gl, [
          (o(!0), i(I, null, B(n(L), (p) => (o(), i("div", Kl, [
            t("div", Ql, h(p), 1)
          ]))), 256))
        ]),
        Xl
      ]),
      c.value.length > 0 ? (o(), i("div", Zl, h(c.value), 1)) : V("", !0),
      s.value ? (o(), oe(pe, {
        key: 1,
        modelValue: s.value,
        "onUpdate:modelValue": C[0] || (C[0] = (p) => s.value = p),
        title: "Select",
        width: 800,
        height: 600,
        class: "options-dialog"
      }, {
        body: ne(() => [
          ue(El, {
            name: e.name,
            headers: n(g),
            data: e.options,
            actions: y.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: x
          }, {
            "data-action": ne(({ row: p, action: P, i: A }) => [
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
}, ua = /* @__PURE__ */ j(ea, [["__scopeId", "data-v-3d6072c3"]]);
export {
  la as TAlert,
  Me as TButton,
  sa as TCheckbox,
  aa as TConfirmDialog,
  na as TDatePicker,
  el as TDateTimePicker,
  pe as TDialog,
  oa as TInput,
  rl as TOption,
  kl as TProgressBar,
  ia as TSelect,
  ua as TSelectTable,
  El as TTable
};
