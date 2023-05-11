import { ref as u, computed as c, onMounted as ee, openBlock as o, createElementBlock as i, normalizeClass as p, unref as n, createElementVNode as t, renderSlot as D, createTextVNode as se, toDisplayString as h, createBlock as oe, isRef as ve, withCtx as ne, createCommentVNode as P, createVNode as ue, Fragment as M, watch as lt, renderList as A, pushScopeId as re, popScopeId as ce, normalizeProps as x, guardReactiveProps as O } from "vue";
const j = (e, f) => {
  const l = e.__vccOpts || e;
  for (const [s, r] of f)
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
  setup(e, { emit: f }) {
    const l = e, s = u("dialog"), r = c(() => l.modelValue ? "dialog show" : "dialog hide");
    function g() {
      f("update:modelValue", !1);
    }
    return ee(() => {
      s.value.style.width = `${l.width}px`, s.value.style.height = `${l.height}px`, s.value.style.top = `calc((100vh - ${s.value.style.height}) / 2)`, s.value.style.left = `calc((100vw - ${s.value.style.width}) / 2)`;
    }), (m, C) => (o(), i("div", {
      class: p(n(r)),
      ref_key: "dialog",
      ref: s
    }, [
      t("div", st, [
        D(m.$slots, "menu-bar", {}, () => [
          t("div", {
            class: "menu-button close",
            onClick: C[0] || (C[0] = (w) => g())
          })
        ], !0)
      ]),
      t("div", nt, [
        t("div", ot, [
          D(m.$slots, "heading", {}, () => [
            se(h(e.title), 1)
          ], !0)
        ]),
        t("div", it, [
          D(m.$slots, "body", {}, void 0, !0)
        ]),
        t("div", ut, [
          D(m.$slots, "actions", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, pe = /* @__PURE__ */ j(rt, [["__scopeId", "data-v-295738d8"]]), ct = { class: "text" }, al = {
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
  setup(e, { emit: f }) {
    const l = e, s = u("dialog"), r = c({
      get: () => l.modelValue,
      set: (g) => {
        f("update:modelValue", g);
      }
    });
    return (g, m) => (o(), oe(pe, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": m[0] || (m[0] = (C) => ve(r) ? r.value = C : null),
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
  setup(e, { emit: f }) {
    const l = e, s = c(() => `button ${l.buttonType} ${l.size}`.trim()), r = c(() => `${l.icon} fa-lg`.trim());
    return (g, m) => (o(), i("div", {
      class: p(n(s)),
      onClick: m[0] || (m[0] = (C) => g.$emit("click"))
    }, [
      e.buttonType === "text" ? (o(), i("span", dt, h(e.value), 1)) : P("", !0),
      t("i", {
        class: p(n(r))
      }, null, 2)
    ], 2));
  }
}, Oe = /* @__PURE__ */ j(ft, [["__scopeId", "data-v-c26a9562"]]);
const vt = { class: "primary-text" }, pt = { class: "secondary-text" }, ht = {
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
  setup(e, { emit: f }) {
    const l = e, s = u("dialog"), r = c({
      get: () => l.modelValue,
      set: (C) => {
        f("update:modelValue", C);
      }
    });
    function g() {
      f("update:modelValue", !1), f("confirm");
    }
    function m() {
      f("update:modelValue", !1), f("cancel");
    }
    return (C, w) => (o(), oe(pe, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": w[2] || (w[2] = ($) => ve(r) ? r.value = $ : null),
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
          onClick: w[0] || (w[0] = ($) => g())
        }),
        ue(Oe, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: w[1] || (w[1] = ($) => m())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, ll = /* @__PURE__ */ j(ht, [["__scopeId", "data-v-87937dbc"]]);
const mt = { class: "input-label" }, yt = {
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
  setup(e, { emit: f }) {
    const l = e, s = u(l.modelValue), r = c(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), g = c(() => s.value ? "input-field checked" : "input-field");
    function m() {
      s.value = !s.value, f("update:modelValue", s.value);
    }
    return (C, w) => (o(), i(M, null, [
      t("div", {
        class: p(n(r)),
        onClick: m
      }, [
        t("div", {
          class: p(n(g))
        }, null, 2),
        t("div", mt, h(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", yt, h(e.errorMessage), 1)) : P("", !0)
    ], 64));
  }
}, sl = /* @__PURE__ */ j(gt, [["__scopeId", "data-v-5ea6b79c"]]);
const L = (e) => (re("data-v-78a68418"), e = e(), ce(), e), _t = { class: "input-label" }, kt = { class: "selected" }, bt = ["value"], $t = ["value"], wt = ["value"], Tt = ["value"], St = ["value"], Ct = ["value"], Dt = ["value"], Vt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Pt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), xt = ["value", "onClick"], Ot = { class: "value" }, Mt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), It = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Bt = ["value", "onClick"], At = { class: "value" }, Rt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ft = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Yt = ["value", "onClick"], zt = { class: "value" }, Lt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Nt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), Ht = ["value", "onClick"], jt = { class: "value" }, Ut = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Wt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), Et = ["value", "onClick"], Jt = { class: "value" }, qt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Gt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), Kt = ["value", "onClick"], Qt = { class: "value" }, Xt = {
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
  setup(e, { emit: f }) {
    const l = e, s = /* @__PURE__ */ new Date(), r = new Date(s.getFullYear() - 10, 1, 1), g = new Date(s.getFullYear() + 9, 12, 31), m = [
      ...Array(g.getFullYear() - r.getFullYear()).keys()
    ].map((a) => a + r.getFullYear()), C = [
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
    ], w = c(() => {
      const a = E.value, V = U.value;
      if (a && V) {
        const d = new Date(a, V, 1);
        return d.setMonth(d.getMonth() + 1), d.setDate(d.getDate() - 1), Array.from(Array(d.getDate())).map((z, le) => le + 1);
      } else
        return Array.from(Array(30)).map((d, z) => z + 1);
    }), $ = Array.from(Array(24)).map((a, V) => V), I = Array.from(Array(60)).map((a, V) => V), _ = Array.from(Array(60)).map((a, V) => V), N = u("yearPicker"), T = u("monthPicker"), k = u("dayPicker"), y = u("hourPicker"), v = u("minutePicker"), S = u("secondPicker"), b = u("yearOptions"), B = u("monthOptions"), H = u("dayOptions"), de = u("hourOptions"), he = u("minuteOptions"), me = u("secondOptions"), ye = u([]), ge = u([]), _e = u([]), ke = u([]), be = u([]), $e = u([]), te = u("collapsed"), E = u(), U = u(), W = u(), R = u(), F = u(), Y = u();
    u();
    const ae = u(!1), X = u(!1), G = u(!1), K = u(!1), q = u(!1), J = u(!1), Ie = c(() => l.displayTime ? l.hour12 ? "input-control display-time hour12" : "input-control display-time hour24" : "input-control"), Be = c(() => `input-field ${te.value}`.trim()), Ae = c(() => ae.value ? "year picker show" : "year picker hide"), Re = c(() => X.value ? "month picker show" : "month picker hide"), Fe = c(() => G.value ? "day picker show" : "day picker hide"), Ye = c(() => l.displayTime && K.value ? "hour picker show" : "hour picker hide"), ze = c(() => l.displayTime && q.value ? "minute picker show" : "minute picker hide"), Le = c(() => l.displayTime && J.value ? "second picker show" : "second picker hide"), we = c(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear(), V = U.value || (/* @__PURE__ */ new Date()).getMonth(), d = W.value || (/* @__PURE__ */ new Date()).getDate(), z = R.value || 0, le = F.value || 0, fe = Y.value || 0;
      return new Date(a, V, d, z, le, fe);
    }), Ne = c(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear();
      return Q(a, 1, 1, 0, 0, 0).date.split("-")[0];
    }), He = c(() => {
      const a = U.value || (/* @__PURE__ */ new Date()).getMonth();
      return Q(1900, a, 1, 0, 0, 0).date.split("-")[1];
    }), je = c(() => {
      const a = W.value || (/* @__PURE__ */ new Date()).getDate();
      return Q(1900, 1, a, 0, 0, 0).date.split("-")[2];
    }), Ue = c(() => {
      const a = R.value || 0;
      return Q(1900, 1, 1, a, 0, 0).time.split(" ")[0].split(":")[0];
    }), We = c(() => {
      const a = F.value || 0;
      return Q(1900, 1, 1, 0, a, 0).time.split(" ")[0].split(":")[1];
    }), Ee = c(() => {
      const a = Y.value || 0;
      return Q(1900, 1, 1, 0, 0, a).time.split(" ")[0].split(":")[2];
    }), Je = c(() => {
      const a = R.value || 0;
      return Q(1900, 1, 1, a, 0, 0).time.split(" ")[1];
    });
    function Q(a, V, d, z, le, fe) {
      const ie = new Date(a, V, d, z, le, fe);
      a = ie.toLocaleString("default", { year: "numeric" }), V = ie.toLocaleString("default", { month: "2-digit" }), d = ie.toLocaleString("default", { day: "2-digit" });
      const at = ie.toLocaleTimeString("en-US", { hour12: l.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      return {
        date: [a, V, d].join("-"),
        time: at
      };
    }
    function qe() {
      te.value === "collapsed" ? (te.value = "expanded", ae.value = !0, E.value && (X.value = !0), U.value && (G.value = !0), W.value && (K.value = !0), R.value && (q.value = !0), F.value && (J.value = !0)) : (te.value = "collapsed", ae.value = !1, X.value = !1, G.value = !1, K.value = !1, q.value = !1, J.value = !1);
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
        const a = ye.value[m.indexOf(E.value)];
        b.value.scrollTop = a.offsetTop;
      }
      if (U.value) {
        const a = ge.value[U.value];
        B.value.scrollTop = a.offsetTop;
      }
      if (W.value) {
        const a = _e.value[w.value.indexOf(W.value)];
        H.value.scrollTop = a.offsetTop;
      }
      if (R.value) {
        const a = ke.value[$.indexOf(R.value)];
        de.value.scrollTop = a.offsetTop;
      }
      if (F.value) {
        const a = be.value[I.indexOf(F.value)];
        he.value.scrollTop = a.offsetTop;
      }
      if (Y.value) {
        const a = $e.value[_.indexOf(Y.value)];
        me.value.scrollTop = a.offsetTop;
      }
    }
    lt([E, U, W, R, F, Y], () => {
      Te();
    });
    function Se(a) {
      E.value = a, U.value = 0, W.value = 1, R.value = 0, F.value = 0, Y.value = 0, X.value = !0, G.value = !1, K.value = !1, q.value = !1, J.value = !1;
    }
    function Ce(a) {
      U.value = a, W.value = 1, R.value = 0, F.value = 0, Y.value = 0, G.value = !0, K.value = !1, q.value = !1, J.value = !1;
    }
    function De(a) {
      W.value = a, R.value = 0, F.value = 0, Y.value = 0, l.displayTime ? (K.value = !0, q.value = !1, J.value = !1) : (ae.value = !1, X.value = !1, G.value = !1, f("update:modelValue", we));
    }
    function Ve(a) {
      R.value = a, F.value = 0, Y.value = 0, q.value = !0, J.value = !1;
    }
    function Pe(a) {
      F.value = a, Y.value = 0, J.value = !0;
    }
    function xe(a) {
      te.value = "collapsed", Y.value = a, ae.value = !1, X.value = !1, G.value = !1, K.value = !1, q.value = !1, J.value = !1, f("update:modelValue", we);
    }
    function tt() {
      const a = l.modelValue || /* @__PURE__ */ new Date();
      Se(a.getFullYear()), Ce(a.getMonth()), De(a.getDate()), l.displayTime && (Ve(a.getHours()), Pe(a.getMinutes()), xe(a.getSeconds()));
    }
    const Z = new IntersectionObserver((a) => {
      a.forEach((V) => {
        V.isIntersecting === !0 && Te();
      });
    }, { threshold: [0] });
    return ee(() => {
      Z.observe(N.value), Z.observe(T.value), Z.observe(k.value), l.displayTime && (Z.observe(y.value), Z.observe(v.value), Z.observe(S.value)), tt();
    }), (a, V) => (o(), i("div", {
      class: p(n(Ie))
    }, [
      t("div", _t, h(e.label), 1),
      t("div", {
        class: p(n(Be))
      }, [
        t("div", {
          class: "select",
          onClick: qe
        }, [
          t("div", kt, [
            t("input", {
              disabled: "",
              value: n(Ne)
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
            }, null, 8, Tt)) : P("", !0),
            e.displayTime ? (o(), i("input", {
              key: 1,
              disabled: "",
              value: n(We)
            }, null, 8, St)) : P("", !0),
            e.displayTime ? (o(), i("input", {
              key: 2,
              disabled: "",
              value: n(Ee)
            }, null, 8, Ct)) : P("", !0),
            e.displayTime && e.hour12 ? (o(), i("input", {
              key: 3,
              disabled: "",
              value: n(Je)
            }, null, 8, Dt)) : P("", !0)
          ]),
          Vt
        ]),
        t("div", {
          class: p(n(Ae)),
          ref_key: "yearPicker",
          ref: N
        }, [
          Pt,
          t("div", {
            class: "options",
            ref_key: "yearOptions",
            ref: b
          }, [
            (o(!0), i(M, null, A(n(m), (d) => (o(), i("div", {
              class: p(Ge(d)),
              value: d,
              ref_for: !0,
              ref_key: "yearRefs",
              ref: ye,
              onClick: (z) => Se(d)
            }, [
              t("div", Ot, h(d), 1),
              Mt
            ], 10, xt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Re)),
          ref_key: "monthPicker",
          ref: T
        }, [
          It,
          t("div", {
            class: "options",
            ref_key: "monthOptions",
            ref: B
          }, [
            (o(!0), i(M, null, A(Object.keys(C), (d) => (o(), i("div", {
              class: p(Ke(d)),
              value: d,
              ref_for: !0,
              ref_key: "monthRefs",
              ref: ge,
              onClick: (z) => Ce(d)
            }, [
              t("div", At, h(C[d]), 1),
              Rt
            ], 10, Bt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Fe)),
          ref_key: "dayPicker",
          ref: k
        }, [
          Ft,
          t("div", {
            class: "options",
            ref_key: "dayOptions",
            ref: H
          }, [
            (o(!0), i(M, null, A(n(w), (d) => (o(), i("div", {
              class: p(Qe(d)),
              value: d,
              ref_for: !0,
              ref_key: "dayRefs",
              ref: _e,
              onClick: (z) => De(d)
            }, [
              t("div", zt, h(d), 1),
              Lt
            ], 10, Yt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Ye)),
          ref_key: "hourPicker",
          ref: y
        }, [
          Nt,
          t("div", {
            class: "options",
            ref_key: "hourOptions",
            ref: de
          }, [
            (o(!0), i(M, null, A(n($), (d) => (o(), i("div", {
              class: p(Xe(d)),
              value: d,
              ref_for: !0,
              ref_key: "hourRefs",
              ref: ke,
              onClick: (z) => Ve(d)
            }, [
              t("div", jt, h(d), 1),
              Ut
            ], 10, Ht))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(ze)),
          ref_key: "minutePicker",
          ref: v
        }, [
          Wt,
          t("div", {
            class: "options",
            ref_key: "minuteOptions",
            ref: he
          }, [
            (o(!0), i(M, null, A(n(I), (d) => (o(), i("div", {
              class: p(Ze(d)),
              value: d,
              ref_for: !0,
              ref_key: "minuteRefs",
              ref: be,
              onClick: (z) => Pe(d)
            }, [
              t("div", Jt, h(d), 1),
              qt
            ], 10, Et))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Le)),
          ref_key: "secondPicker",
          ref: S
        }, [
          Gt,
          t("div", {
            class: "options",
            ref_key: "secondOptions",
            ref: me
          }, [
            (o(!0), i(M, null, A(n(_), (d) => (o(), i("div", {
              class: p(et(d)),
              value: d,
              ref_for: !0,
              ref_key: "secondRefs",
              ref: $e,
              onClick: (z) => xe(d)
            }, [
              t("div", Qt, h(d), 1)
            ], 10, Kt))), 256))
          ], 512)
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", Xt, h(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, ea = /* @__PURE__ */ j(Zt, [["__scopeId", "data-v-78a68418"]]), nl = {
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
  setup(e, { emit: f }) {
    const l = e, s = c({
      get: () => l.modelValue,
      set: (r) => {
        f("update:modelValue", r);
      }
    });
    return ee(() => {
    }), (r, g) => (o(), oe(ea, {
      modelValue: n(s),
      "onUpdate:modelValue": g[0] || (g[0] = (m) => ve(s) ? s.value = m : null),
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
    return (f, l) => (o(), i("div", ta, [
      t("div", aa, h(e.label), 1),
      t("div", la, [
        t("input", {
          type: e.type,
          class: p(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (s) => f.$emit("update:modelValue", s.target.value))
        }, null, 42, sa)
      ]),
      e.errorMessage.length > 0 ? (o(), i("div", na, h(e.errorMessage), 1)) : P("", !0)
    ]));
  }
}, ol = /* @__PURE__ */ j(oa, [["__scopeId", "data-v-c182bf09"]]);
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
  setup(e, { emit: f }) {
    const l = e, s = c(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (r, g) => (o(), i("div", {
      class: p(n(s)),
      value: e.value,
      onClick: g[0] || (g[0] = (m) => r.$emit("select", e.value))
    }, h(e.label), 11, ia));
  }
}, ra = /* @__PURE__ */ j(ua, [["__scopeId", "data-v-1fa7fb5e"]]);
const ca = (e) => (re("data-v-386634d6"), e = e(), ce(), e), da = { class: "input-label" }, fa = ["name"], va = { class: "selected" }, pa = /* @__PURE__ */ ca(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), ha = { class: "options" }, ma = {
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
  setup(e, { emit: f }) {
    const l = e, s = u("collapsed"), r = u(""), g = c(() => `input-control ${l.size}`.trim()), m = c(() => `input-field ${s.value}`.trim()), C = c(() => {
      const _ = l.options.find((N) => N.value === r.value);
      return _ ? _.label : "";
    });
    function w() {
      s.value === "collapsed" ? s.value = "expanded" : s.value = "collapsed";
    }
    function $(_) {
      return _ === r.value;
    }
    function I(_) {
      s.value = "collapsed", r.value = _, f("update:modelValue", _);
    }
    return ee(() => {
      I(l.modelValue);
    }), (_, N) => (o(), i("div", {
      class: p(n(g))
    }, [
      t("div", da, h(e.label), 1),
      t("div", {
        class: p(n(m))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: w
        }, [
          t("div", va, h(n(C)), 1),
          pa
        ], 8, fa),
        t("div", ha, [
          (o(!0), i(M, null, A(e.options, (T) => (o(), oe(ra, {
            value: T.value,
            label: T.label,
            size: e.size,
            selected: $(T.value),
            onSelect: (k) => I(T.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", ma, h(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, il = /* @__PURE__ */ j(ya, [["__scopeId", "data-v-386634d6"]]);
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
    const f = e, l = u("forward"), s = u("forwardBar"), r = u("reverseBar"), g = u(), m = c(() => `bar forward-bar ${l.value}`), C = c(() => f.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    ee(() => {
      g.value = setInterval($, f.speed);
    });
    function w(k) {
      return k ? parseInt(k.style.width.split("%")[0]) : 0;
    }
    function $() {
      f.bidirection ? _() : I();
    }
    function I() {
      const k = w(s.value);
      k === 100 ? f.indefinite ? N(s.value) : clearInterval(g.value) : T(s.value, "forward", k);
    }
    function _() {
      const k = w(s.value), y = w(r.value);
      l.value === "forward" && k === 100 ? (l.value = "reverse", T(s.value, "reverse", k), T(r.value, "forward", y)) : l.value === "reverse" && y === 100 ? (l.value = "forward", T(s.value, "forward", k), T(r.value, "reverse", y)) : l.value === "forward" ? (T(s.value, "forward", k), T(r.value, "reverse", y)) : l.value === "reverse" && (T(s.value, "reverse", k), T(r.value, "forward", y));
    }
    function N(k) {
      k.style.width = "0%";
    }
    function T(k, y, v) {
      k && (y === "forward" ? k.style.width = [(v + f.step).toString(), "%"].join("") : k.style.width = [(v - f.step).toString(), "%"].join(""));
    }
    return (k, y) => (o(), i("div", ga, [
      t("div", {
        class: p(n(m)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: s
      }, null, 2),
      t("div", {
        class: p(n(C)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: r
      }, null, 2)
    ]));
  }
}, ka = /* @__PURE__ */ j(_a, [["__scopeId", "data-v-8639eecf"]]);
const Me = (e) => (re("data-v-7832a2e2"), e = e(), ce(), e), ba = { class: "table-container" }, $a = { class: "table-actions" }, wa = { class: "actions" }, Ta = ["onClick"], Sa = { class: "tooltip" }, Ca = { class: "header" }, Da = { class: "row" }, Va = { class: "col" }, Pa = {
  key: 0,
  class: "col"
}, xa = {
  key: 0,
  class: "loading"
}, Oa = ["colspan"], Ma = { class: "body" }, Ia = { class: "row" }, Ba = { class: "col" }, Aa = {
  key: 0,
  class: "col"
}, Ra = { class: "actions" }, Fa = ["onClick"], Ya = { class: "tooltip" }, za = { class: "pagination" }, La = /* @__PURE__ */ Me(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Na = { class: "page-number" }, Ha = {
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
  setup(e, { emit: f }) {
    const l = e, s = u(0), r = u(l.pagination.limit), g = c(() => l.pagination.client ? !1 : l.loading), m = c(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), C = c(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), w = c(() => l.dense ? "table dense" : "table"), $ = c(() => l.pagination.client ? l.data.length : l.totalData), I = c(() => l.pagination.client ? l.data.slice(s.value, s.value + r.value) : l.data), _ = c(() => s.value + r.value > $.value ? {
      start: s.value + 1,
      end: $.value
    } : {
      start: s.value + 1,
      end: s.value + r.value
    }), N = c(() => _.value.start === 1 ? "pager left" : "pager left show"), T = c(() => _.value.end === $.value ? "pager right" : "pager right show");
    function k() {
      _.value.start === 1 || (s.value - r.value < 0 ? s.value = 0 : s.value = s.value - r.value), f("offsetChange", s.value);
    }
    function y() {
      _.value.end === $.value || (s.value = s.value + r.value), f("offsetChange", s.value);
    }
    return (v, S) => (o(), i("div", ba, [
      t("div", $a, [
        D(v.$slots, "table-actions", x(O({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: p(n(C))
          }, [
            D(v.$slots, "table-name", x(O({ name: e.name })), () => [
              se(h(e.name), 1)
            ], !0)
          ], 2),
          t("div", wa, [
            (o(!0), i(M, null, A(e.tableActions, (b) => (o(), i("div", {
              class: "action",
              onClick: (B) => b.click(e.data)
            }, [
              D(v.$slots, "table-action", x(O({ action: b, data: e.data })), () => [
                t("i", {
                  class: p(b.icon)
                }, null, 2),
                t("span", Sa, h(b.name), 1)
              ], !0)
            ], 8, Ta))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: p(n(w))
      }, [
        t("thead", Ca, [
          t("tr", Da, [
            D(v.$slots, "header-row", x(O({ headers: e.headers, actions: e.actions })), () => [
              (o(!0), i(M, null, A(e.headers, (b, B) => (o(), i("th", Va, [
                D(v.$slots, `header-col.${b.key}`, x(O({ header: b, i: B })), () => [
                  se(h(b.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (o(), i("th", Pa, [
                D(v.$slots, "header-actions", x(O({ actions: e.actions })), void 0, !0)
              ])) : P("", !0)
            ], !0)
          ]),
          n(g) ? (o(), i("tr", xa, [
            D(v.$slots, "progress-bar", x(O({ headers: e.headers, actions: e.actions, span: n(m) })), () => [
              t("th", { colspan: n(m) }, [
                ue(ka)
              ], 8, Oa)
            ], !0)
          ])) : P("", !0)
        ]),
        t("tbody", Ma, [
          n(g) ? P("", !0) : (o(!0), i(M, { key: 0 }, A(n(I), (b, B) => (o(), i("tr", Ia, [
            D(v.$slots, "data-row", x(O({ headers: e.headers, row: b, actions: e.actions, i: B })), () => [
              D(v.$slots, "data-content", x(O({ headers: e.headers, row: b, i: B })), () => [
                (o(!0), i(M, null, A(e.headers, (H) => (o(), i("td", Ba, [
                  D(v.$slots, `data-col.${H.key}`, x(O({ header: H, row: b, i: B })), () => [
                    se(h(b[H.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (o(), i("td", Aa, [
                D(v.$slots, "data-actions", x(O({ row: b, actions: e.actions, i: B })), () => [
                  t("div", Ra, [
                    (o(!0), i(M, null, A(e.actions, (H) => (o(), i("div", {
                      class: "action",
                      onClick: (de) => H.click(b, B)
                    }, [
                      D(v.$slots, "data-action", x(O({ row: b, action: H, i: B })), () => [
                        t("i", {
                          class: p(H.icon)
                        }, null, 2),
                        t("span", Ya, h(H.name), 1)
                      ], !0)
                    ], 8, Fa))), 256))
                  ])
                ], !0)
              ])) : P("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", za, [
        D(v.$slots, "pagination", x(O({ pageLeft: k, pageRight: y, start: n(_).start, end: n(_).end, total: n($) })), () => [
          t("div", {
            class: p(n(N)),
            onClick: S[0] || (S[0] = (b) => k())
          }, [
            D(v.$slots, "pager-left", {}, () => [
              La
            ], !0)
          ], 2),
          t("div", Na, [
            D(v.$slots, "page-number", x(O({ start: n(_).start, end: n(_).end, total: n($) })), () => [
              n(_).start !== n(_).end ? (o(), i("span", Ha, h(n(_).start) + " - ", 1)) : P("", !0),
              t("span", ja, h(n(_).end), 1),
              se(" / " + h(n($)), 1)
            ], !0)
          ]),
          t("div", {
            class: p(n(T)),
            onClick: S[1] || (S[1] = (b) => y())
          }, [
            D(v.$slots, "pager-right", {}, () => [
              Ua
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, Ea = /* @__PURE__ */ j(Wa, [["__scopeId", "data-v-7832a2e2"]]);
const Ja = (e) => (re("data-v-4b4a798c"), e = e(), ce(), e), qa = { class: "input-label" }, Ga = { class: "select" }, Ka = { class: "selected" }, Qa = { class: "tag" }, Xa = /* @__PURE__ */ Ja(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
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
  setup(e, { emit: f }) {
    const l = e, s = u(!1), r = u(""), g = c(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), m = u([
      {
        name: "Select",
        icon: "",
        click: function(y, v) {
          T(y);
        }
      }
    ]), C = c(() => `input-control ${l.size}`);
    function w(y) {
      return $.value.find((S) => S === y.value) ? "checkbox checked" : "checkbox";
    }
    const $ = c(() => l.modelValue), I = u({}), _ = c(() => $.value.map((y) => {
      if (I[y])
        return I[y];
      {
        const S = ((l.options || []).find((b) => b.value === y) || {}).label;
        return I[y] = S, S;
      }
    }));
    function N() {
      s.value = !s.value;
    }
    function T(y) {
      const v = Array.from($.value), S = v.findIndex((b) => b === y.value);
      S < 0 ? v.push(y.value) : v.splice(S, 1), f("update:modelValue", v);
    }
    function k(y) {
      f("offsetChange", y);
    }
    return ee(() => {
    }), (y, v) => (o(), i("div", {
      class: p(n(C))
    }, [
      t("div", qa, h(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: N
      }, [
        t("div", Ga, [
          (o(!0), i(M, null, A(n(_), (S) => (o(), i("div", Ka, [
            t("div", Qa, h(S), 1)
          ]))), 256))
        ]),
        Xa
      ]),
      r.value.length > 0 ? (o(), i("div", Za, h(r.value), 1)) : P("", !0),
      s.value ? (o(), oe(pe, {
        key: 1,
        modelValue: s.value,
        "onUpdate:modelValue": v[0] || (v[0] = (S) => s.value = S),
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
            actions: m.value,
            loading: e.optionsLoading,
            "total-data": e.optionsLength,
            pagination: e.pagination,
            onOffsetChange: k
          }, {
            "data-action": ne(({ row: S, action: b, i: B }) => [
              t("div", {
                class: p(w(S))
              }, null, 2)
            ]),
            _: 1
          }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : P("", !0)
    ], 2));
  }
}, ul = /* @__PURE__ */ j(el, [["__scopeId", "data-v-4b4a798c"]]);
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
