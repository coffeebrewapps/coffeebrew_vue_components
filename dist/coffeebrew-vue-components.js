import { ref as d, computed as i, onMounted as oe, openBlock as o, createBlock as ie, Transition as Ne, withCtx as Q, unref as n, createElementBlock as u, normalizeStyle as ut, createElementVNode as t, renderSlot as T, createTextVNode as de, toDisplayString as g, createCommentVNode as w, isRef as ye, normalizeClass as p, createVNode as ne, watch as rt, Fragment as A, renderList as R, pushScopeId as fe, popScopeId as ve, normalizeProps as M, guardReactiveProps as O } from "vue";
const U = (e, f) => {
  const a = e.__vccOpts || e;
  for (const [s, r] of f)
    a[s] = r;
  return a;
}, dt = { class: "menu-bar" }, ct = { class: "container" }, ft = { class: "heading" }, vt = { class: "body" }, pt = { class: "actions" }, mt = {
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
    const a = e, s = d("dialog");
    i(() => a.modelValue ? "dialog show" : "dialog hide");
    const r = i(() => a.modelValue);
    function m() {
      f("update:modelValue", !1);
    }
    const v = i(() => {
      if (s.value) {
        const _ = `${a.width}px`, $ = `${a.height}px`, V = `calc((100vh - ${$}) / 2)`, I = `calc((100vw - ${_}) / 2)`;
        return `width:${_}; height:${$}; top:${V}; left:${I};`;
      } else
        return "";
    });
    return oe(() => {
    }), (_, $) => (o(), ie(Ne, { name: "dialog" }, {
      default: Q(() => [
        n(r) ? (o(), u("div", {
          key: 0,
          class: "dialog",
          ref_key: "dialog",
          ref: s,
          style: ut(n(v))
        }, [
          t("div", dt, [
            T(_.$slots, "menu-bar", {}, () => [
              t("div", {
                class: "menu-button close",
                onClick: $[0] || ($[0] = (V) => m())
              })
            ], !0)
          ]),
          t("div", ct, [
            t("div", ft, [
              T(_.$slots, "heading", {}, () => [
                de(g(e.title), 1)
              ], !0)
            ]),
            t("div", vt, [
              T(_.$slots, "body", {}, void 0, !0)
            ]),
            t("div", pt, [
              T(_.$slots, "actions", {}, void 0, !0)
            ])
          ])
        ], 4)) : w("", !0)
      ]),
      _: 3
    }));
  }
}, ge = /* @__PURE__ */ U(mt, [["__scopeId", "data-v-3ffd1ae7"]]), ht = { class: "text" }, cl = {
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
    const a = e, s = d("dialog"), r = i({
      get: () => a.modelValue,
      set: (m) => {
        f("update:modelValue", m);
      }
    });
    return (m, v) => (o(), ie(ge, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": v[0] || (v[0] = (_) => ye(r) ? r.value = _ : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: Q(() => [
        t("div", ht, g(e.content), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
};
const yt = { key: 0 }, gt = {
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
    const a = e, s = i(() => `button ${a.buttonType} ${a.size}`.trim()), r = i(() => `${a.icon} fa-lg`.trim());
    return (m, v) => (o(), u("div", {
      class: p(n(s)),
      onClick: v[0] || (v[0] = (_) => m.$emit("click"))
    }, [
      e.buttonType === "text" ? (o(), u("span", yt, g(e.value), 1)) : w("", !0),
      t("i", {
        class: p(n(r))
      }, null, 2)
    ], 2));
  }
}, he = /* @__PURE__ */ U(gt, [["__scopeId", "data-v-ba63b772"]]);
const _t = { class: "primary-text" }, bt = { class: "secondary-text" }, kt = {
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
    const a = e, s = d("dialog"), r = i({
      get: () => a.modelValue,
      set: (_) => {
        f("update:modelValue", _);
      }
    });
    function m() {
      f("update:modelValue", !1), f("confirm");
    }
    function v() {
      f("update:modelValue", !1), f("cancel");
    }
    return (_, $) => (o(), ie(ge, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": $[2] || ($[2] = (V) => ye(r) ? r.value = V : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: Q(() => [
        t("div", _t, g(e.primaryText), 1),
        t("div", bt, g(e.secondaryText), 1)
      ]),
      actions: Q(() => [
        ne(he, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: $[0] || ($[0] = (V) => m())
        }),
        ne(he, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: $[1] || ($[1] = (V) => v())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, fl = /* @__PURE__ */ U(kt, [["__scopeId", "data-v-87937dbc"]]);
const $t = { class: "input-field" }, St = { class: "input-label" }, Ct = {
  key: 0,
  class: "input-error"
}, Tt = {
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
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const a = e, s = d(a.modelValue), r = i(() => {
      const _ = [];
      return _.push("input-control"), a.label.length <= 10 ? _.push("sm") : a.label.length > 10 && a.label.length <= 30 ? _.push("md") : _.push("lg"), a.disabled && _.push("disabled"), _.join(" ");
    }), m = i(() => s.value ? "checkbox checked" : "checkbox");
    function v() {
      a.disabled || (s.value = !s.value, f("update:modelValue", s.value));
    }
    return (_, $) => (o(), u("div", {
      class: p(n(r)),
      onClick: v
    }, [
      t("div", $t, [
        t("div", {
          class: p(n(m))
        }, null, 2),
        t("div", St, g(e.label), 1)
      ]),
      e.errorMessage.length > 0 ? (o(), u("div", Ct, g(e.errorMessage), 1)) : w("", !0)
    ], 2));
  }
}, vl = /* @__PURE__ */ U(Tt, [["__scopeId", "data-v-9bdc9ae5"]]);
const N = (e) => (fe("data-v-f0bec40b"), e = e(), ve(), e), wt = { class: "input-label" }, Vt = { class: "selected" }, Dt = ["value"], xt = ["value"], Pt = ["value"], Mt = ["value"], Ot = ["value"], It = ["value"], Bt = ["value"], At = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Rt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-xmark" }, null, -1)), Nt = [
  Rt
], zt = { class: "pickers" }, Ft = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Yt = ["value", "onClick"], Lt = { class: "value" }, jt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ht = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Ut = ["value", "onClick"], Wt = { class: "value" }, Et = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Jt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), qt = ["value", "onClick"], Gt = { class: "value" }, Kt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Qt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), Xt = ["value", "onClick"], Zt = { class: "value" }, ea = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), ta = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), aa = ["value", "onClick"], la = { class: "value" }, sa = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), na = /* @__PURE__ */ N(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), oa = ["value", "onClick"], ia = { class: "value" }, ua = {
  key: 0,
  class: "input-error"
}, ra = {
  __name: "TDateTimePicker",
  props: {
    modelValue: {
      type: Date,
      default: null
    },
    min: {
      type: Date,
      default: null
    },
    max: {
      type: Date,
      default: null
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
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const a = e;
    function s(l) {
      return typeof l < "u" && l !== null;
    }
    const r = /* @__PURE__ */ new Date(), m = i(() => a.modelValue ? a.modelValue : r < _.value ? r : v.value), v = i(() => a.min ? a.min : new Date(r.getFullYear() - 10, 0, 1)), _ = i(() => a.max ? a.max : new Date(r.getFullYear() + 9, 11, 31)), $ = i(() => [
      ...Array(_.value.getFullYear() - v.value.getFullYear()).keys()
    ].map((l) => l + v.value.getFullYear())), V = [
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
    ], I = i(() => {
      const l = q.value || v.value.getFullYear(), x = E.value || v.value.getMonth(), c = new Date(l, x, 1);
      return c.setMonth(c.getMonth() + 1), c.setDate(c.getDate() - 1), Array.from(Array(c.getDate())).map((L, te) => te + 1);
    }), k = Array.from(Array(24)).map((l, x) => x), j = Array.from(Array(60)).map((l, x) => x), b = Array.from(Array(60)).map((l, x) => x), S = d("yearPicker"), P = d("monthPicker"), h = d("dayPicker"), D = d("hourPicker"), y = d("minutePicker"), W = d("secondPicker"), C = d("yearOptions"), B = d("monthOptions"), H = d("dayOptions"), pe = d("hourOptions"), _e = d("minuteOptions"), be = d("secondOptions"), ke = d([]), $e = d([]), Se = d([]), Ce = d([]), Te = d([]), we = d([]), ae = d("collapsed"), q = d(), E = d(), J = d(), z = d(), F = d(), Y = d();
    d();
    const ue = d(!1), le = d(!1), X = d(!1), Z = d(!1), K = d(!1), G = d(!1), Fe = i(() => {
      const l = [];
      return l.push("input-control"), a.displayTime && (l.push("display-time"), a.hour12 ? l.push("hour12") : l.push("hour24")), a.disabled && l.push("disabled"), l.join(" ");
    }), Ye = i(() => `input-field ${ae.value}`.trim()), Le = i(() => ue.value ? "year picker show" : "year picker hide"), je = i(() => le.value ? "month picker show" : "month picker hide"), He = i(() => X.value ? "day picker show" : "day picker hide"), Ue = i(() => a.displayTime && Z.value ? "hour picker show" : "hour picker hide"), We = i(() => a.displayTime && K.value ? "minute picker show" : "minute picker hide"), Ee = i(() => a.displayTime && G.value ? "second picker show" : "second picker hide"), Ve = i(() => {
      const l = q.value || v.value.getFullYear(), x = E.value || v.value.getMonth(), c = J.value || v.value.getDate(), L = z.value || 0, te = F.value || 0, re = Y.value || 0;
      return new Date(l, x, c, L, te, re);
    }), Je = i(() => {
      const l = q.value || v.value.getFullYear();
      return ee(l, 0, 1, 0, 0, 0).date.year;
    }), qe = i(() => {
      const l = E.value || v.value.getMonth();
      return ee(1900, l, 1, 0, 0, 0).date.month;
    }), Ge = i(() => {
      const l = J.value || v.value.getDate();
      return ee(1900, 0, l, 0, 0, 0).date.day;
    }), Ke = i(() => {
      const l = z.value || 0;
      return ee(1900, 0, 1, l, 0, 0).time.hour;
    }), Qe = i(() => {
      const l = F.value || 0;
      return ee(1900, 0, 1, 0, l, 0).time.minute;
    }), Xe = i(() => {
      const l = Y.value || 0;
      return ee(1900, 0, 1, 0, 0, l).time.second;
    }), Ze = i(() => {
      const l = z.value || 0;
      return ee(1900, 0, 1, l, 0, 0).time.amPm;
    });
    function ee(l, x, c, L, te, re) {
      const ce = new Date(l, x, c, L, te, re);
      l = ce.toLocaleString("default", { year: "numeric" }), x = ce.toLocaleString("default", { month: "2-digit" }), c = ce.toLocaleString("default", { day: "2-digit" });
      const Re = ce.toLocaleTimeString("en-US", { hour12: a.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" }), me = Re.split(" ")[0].split(":");
      L = me[0], te = me[1], re = me[2];
      const it = Re.split(" ")[1];
      return {
        date: { year: l, month: x, day: c },
        time: { hour: L, minute: te, second: re, amPm: it }
      };
    }
    function De() {
      a.disabled || (ae.value === "collapsed" ? (ae.value = "expanded", ue.value = !0, s(q.value) && (le.value = !0), s(E.value) && (X.value = !0), s(J.value) && (Z.value = !0), s(z.value) && (K.value = !0), s(F.value) && (G.value = !0)) : (ae.value = "collapsed", ue.value = !1, le.value = !1, X.value = !1, Z.value = !1, K.value = !1, G.value = !1));
    }
    function et(l) {
      return l === q.value ? "option selected" : "option";
    }
    function tt(l) {
      return parseInt(l) === parseInt(E.value) ? "option selected" : "option";
    }
    function at(l) {
      return l === J.value ? "option selected" : "option";
    }
    function lt(l) {
      return l === z.value ? "option selected" : "option";
    }
    function st(l) {
      return l === F.value ? "option selected" : "option";
    }
    function nt(l) {
      return l === Y.value ? "option selected" : "option";
    }
    function xe() {
      if (q.value) {
        const l = ke.value[$.value.indexOf(q.value)];
        C.value.scrollTop = l.offsetTop;
      }
      if (E.value) {
        const l = $e.value[E.value];
        B.value.scrollTop = l.offsetTop;
      }
      if (J.value) {
        const l = Se.value[I.value.indexOf(J.value)];
        H.value.scrollTop = l.offsetTop;
      }
      if (z.value) {
        const l = Ce.value[k.indexOf(z.value)];
        pe.value.scrollTop = l.offsetTop;
      }
      if (F.value) {
        const l = Te.value[j.indexOf(F.value)];
        _e.value.scrollTop = l.offsetTop;
      }
      if (Y.value) {
        const l = we.value[b.indexOf(Y.value)];
        be.value.scrollTop = l.offsetTop;
      }
    }
    rt([q, E, J, z, F, Y], () => {
      xe();
    });
    function Pe(l) {
      q.value = l, E.value = 0, J.value = 1, z.value = 0, F.value = 0, Y.value = 0, le.value = !0, X.value = !1, Z.value = !1, K.value = !1, G.value = !1;
    }
    function Me(l) {
      E.value = l, J.value = 1, z.value = 0, F.value = 0, Y.value = 0, X.value = !0, Z.value = !1, K.value = !1, G.value = !1;
    }
    function Oe(l) {
      J.value = l, z.value = 0, F.value = 0, Y.value = 0, a.displayTime ? (Z.value = !0, K.value = !1, G.value = !1) : (ae.value = "collapsed", ue.value = !1, le.value = !1, X.value = !1, f("update:modelValue", Ve));
    }
    function Ie(l) {
      z.value = l, F.value = 0, Y.value = 0, K.value = !0, G.value = !1;
    }
    function Be(l) {
      F.value = l, Y.value = 0, G.value = !0;
    }
    function Ae(l) {
      ae.value = "collapsed", Y.value = l, ue.value = !1, le.value = !1, X.value = !1, Z.value = !1, K.value = !1, G.value = !1, f("update:modelValue", Ve);
    }
    function ot() {
      Pe(m.value.getFullYear()), Me(m.value.getMonth()), Oe(m.value.getDate()), a.displayTime && (Ie(m.value.getHours()), Be(m.value.getMinutes()), Ae(m.value.getSeconds()));
    }
    const se = new IntersectionObserver((l) => {
      l.forEach((x) => {
        x.isIntersecting === !0 && xe();
      });
    }, { threshold: [0] });
    return oe(() => {
      se.observe(S.value), se.observe(P.value), se.observe(h.value), a.displayTime && (se.observe(D.value), se.observe(y.value), se.observe(W.value)), ot();
    }), (l, x) => (o(), u("div", {
      class: p(n(Fe))
    }, [
      t("div", wt, g(e.label), 1),
      t("div", {
        class: p(n(Ye))
      }, [
        t("div", {
          class: "select",
          onClick: De
        }, [
          t("div", Vt, [
            t("input", {
              disabled: "",
              value: n(Je)
            }, null, 8, Dt),
            t("input", {
              disabled: "",
              value: n(qe)
            }, null, 8, xt),
            t("input", {
              disabled: "",
              value: n(Ge)
            }, null, 8, Pt),
            e.displayTime ? (o(), u("input", {
              key: 0,
              disabled: "",
              value: n(Ke)
            }, null, 8, Mt)) : w("", !0),
            e.displayTime ? (o(), u("input", {
              key: 1,
              disabled: "",
              value: n(Qe)
            }, null, 8, Ot)) : w("", !0),
            e.displayTime ? (o(), u("input", {
              key: 2,
              disabled: "",
              value: n(Xe)
            }, null, 8, It)) : w("", !0),
            e.displayTime && e.hour12 ? (o(), u("input", {
              key: 3,
              disabled: "",
              value: n(Ze)
            }, null, 8, Bt)) : w("", !0)
          ]),
          At
        ]),
        t("div", {
          class: "close-toggle",
          onClick: De
        }, Nt),
        t("div", zt, [
          t("div", {
            class: p(n(Le)),
            ref_key: "yearPicker",
            ref: S
          }, [
            Ft,
            t("div", {
              class: "options",
              ref_key: "yearOptions",
              ref: C
            }, [
              (o(!0), u(A, null, R(n($), (c) => (o(), u("div", {
                class: p(et(c)),
                value: c,
                ref_for: !0,
                ref_key: "yearRefs",
                ref: ke,
                onClick: (L) => Pe(c)
              }, [
                t("div", Lt, g(c), 1),
                jt
              ], 10, Yt))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: p(n(je)),
            ref_key: "monthPicker",
            ref: P
          }, [
            Ht,
            t("div", {
              class: "options",
              ref_key: "monthOptions",
              ref: B
            }, [
              (o(!0), u(A, null, R(Object.keys(V), (c) => (o(), u("div", {
                class: p(tt(c)),
                value: c,
                ref_for: !0,
                ref_key: "monthRefs",
                ref: $e,
                onClick: (L) => Me(c)
              }, [
                t("div", Wt, g(V[c]), 1),
                Et
              ], 10, Ut))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: p(n(He)),
            ref_key: "dayPicker",
            ref: h
          }, [
            Jt,
            t("div", {
              class: "options",
              ref_key: "dayOptions",
              ref: H
            }, [
              (o(!0), u(A, null, R(n(I), (c) => (o(), u("div", {
                class: p(at(c)),
                value: c,
                ref_for: !0,
                ref_key: "dayRefs",
                ref: Se,
                onClick: (L) => Oe(c)
              }, [
                t("div", Gt, g(c), 1),
                Kt
              ], 10, qt))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: p(n(Ue)),
            ref_key: "hourPicker",
            ref: D
          }, [
            Qt,
            t("div", {
              class: "options",
              ref_key: "hourOptions",
              ref: pe
            }, [
              (o(!0), u(A, null, R(n(k), (c) => (o(), u("div", {
                class: p(lt(c)),
                value: c,
                ref_for: !0,
                ref_key: "hourRefs",
                ref: Ce,
                onClick: (L) => Ie(c)
              }, [
                t("div", Zt, g(c), 1),
                ea
              ], 10, Xt))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: p(n(We)),
            ref_key: "minutePicker",
            ref: y
          }, [
            ta,
            t("div", {
              class: "options",
              ref_key: "minuteOptions",
              ref: _e
            }, [
              (o(!0), u(A, null, R(n(j), (c) => (o(), u("div", {
                class: p(st(c)),
                value: c,
                ref_for: !0,
                ref_key: "minuteRefs",
                ref: Te,
                onClick: (L) => Be(c)
              }, [
                t("div", la, g(c), 1),
                sa
              ], 10, aa))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: p(n(Ee)),
            ref_key: "secondPicker",
            ref: W
          }, [
            na,
            t("div", {
              class: "options",
              ref_key: "secondOptions",
              ref: be
            }, [
              (o(!0), u(A, null, R(n(b), (c) => (o(), u("div", {
                class: p(nt(c)),
                value: c,
                ref_for: !0,
                ref_key: "secondRefs",
                ref: we,
                onClick: (L) => Ae(c)
              }, [
                t("div", ia, g(c), 1)
              ], 10, oa))), 256))
            ], 512)
          ], 2)
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), u("div", ua, g(e.errorMessage), 1)) : w("", !0)
    ], 2));
  }
}, da = /* @__PURE__ */ U(ra, [["__scopeId", "data-v-f0bec40b"]]), pl = {
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
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const a = e, s = i({
      get: () => a.modelValue,
      set: (r) => {
        f("update:modelValue", r);
      }
    });
    return oe(() => {
    }), (r, m) => (o(), ie(da, {
      modelValue: n(s),
      "onUpdate:modelValue": m[0] || (m[0] = (v) => ye(s) ? s.value = v : null),
      min: e.min,
      max: e.max,
      label: e.label,
      "display-time": !1,
      disabled: e.disabled,
      "error-message": e.errorMessage
    }, null, 8, ["modelValue", "min", "max", "label", "disabled", "error-message"]));
  }
};
const ca = { class: "input-label" }, fa = { class: "input-field" }, va = ["type", "value", "disabled"], pa = {
  key: 0,
  class: "input-error"
}, ma = {
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
    disabled: {
      type: Boolean,
      default: !1
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const f = e, a = i(() => {
      const s = [];
      return s.push("input-control"), f.disabled && s.push("disabled"), s.join(" ");
    });
    return (s, r) => (o(), u("div", {
      class: p(n(a))
    }, [
      t("div", ca, g(e.label), 1),
      t("div", fa, [
        t("input", {
          type: e.type,
          class: p(e.size),
          value: e.modelValue,
          disabled: e.disabled,
          onInput: r[0] || (r[0] = (m) => s.$emit("update:modelValue", m.target.value))
        }, null, 42, va)
      ]),
      e.errorMessage.length > 0 ? (o(), u("div", pa, g(e.errorMessage), 1)) : w("", !0)
    ], 2));
  }
}, ml = /* @__PURE__ */ U(ma, [["__scopeId", "data-v-56a1e413"]]);
const ha = ["value"], ya = {
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
    const a = e, s = i(() => a.selected ? `option selected ${a.size}`.trim() : `option ${a.size}`.trim());
    return (r, m) => (o(), u("div", {
      class: p(n(s)),
      value: e.value,
      onClick: m[0] || (m[0] = (v) => r.$emit("select", e.value))
    }, g(e.label), 11, ha));
  }
}, ga = /* @__PURE__ */ U(ya, [["__scopeId", "data-v-1fa7fb5e"]]);
const _a = (e) => (fe("data-v-b1367cdb"), e = e(), ve(), e), ba = { class: "input-label" }, ka = ["name"], $a = { class: "selected" }, Sa = /* @__PURE__ */ _a(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), Ca = { class: "options" }, Ta = {
  key: 0,
  class: "input-error"
}, wa = {
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
    disabled: {
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
    const a = e, s = d("collapsed"), r = d(""), m = i(() => {
      const k = [];
      return k.push("input-control"), a.size && k.push(a.size), a.disabled && k.push("disabled"), k.join(" ");
    }), v = i(() => `input-field ${s.value}`.trim()), _ = i(() => {
      const k = a.options.find((j) => j.value === r.value);
      return k ? k.label : "";
    });
    function $() {
      a.disabled || (s.value === "collapsed" ? s.value = "expanded" : s.value = "collapsed");
    }
    function V(k) {
      return k === r.value;
    }
    function I(k) {
      s.value = "collapsed", r.value = k, f("update:modelValue", k);
    }
    return oe(() => {
      I(a.modelValue);
    }), (k, j) => (o(), u("div", {
      class: p(n(m))
    }, [
      t("div", ba, g(e.label), 1),
      t("div", {
        class: p(n(v))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: $
        }, [
          t("div", $a, g(n(_)), 1),
          Sa
        ], 8, ka),
        t("div", Ca, [
          (o(!0), u(A, null, R(e.options, (b) => (o(), ie(ga, {
            value: b.value,
            label: b.label,
            size: e.size,
            selected: V(b.value),
            onSelect: (S) => I(b.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), u("div", Ta, g(e.errorMessage), 1)) : w("", !0)
    ], 2));
  }
}, hl = /* @__PURE__ */ U(wa, [["__scopeId", "data-v-b1367cdb"]]);
const Va = { class: "progress-bar" }, Da = {
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
    const f = e, a = d("forward"), s = d("forwardBar"), r = d("reverseBar"), m = d(), v = i(() => `bar forward-bar ${a.value}`), _ = i(() => f.bidirection ? `bar reverse-bar ${a.value}` : "bar reverse-bar hide");
    oe(() => {
      m.value = setInterval(V, f.speed);
    });
    function $(S) {
      return S ? parseInt(S.style.width.split("%")[0]) : 0;
    }
    function V() {
      f.bidirection ? k() : I();
    }
    function I() {
      const S = $(s.value);
      S === 100 ? f.indefinite ? j(s.value) : clearInterval(m.value) : b(s.value, "forward", S);
    }
    function k() {
      const S = $(s.value), P = $(r.value);
      a.value === "forward" && S === 100 ? (a.value = "reverse", b(s.value, "reverse", S), b(r.value, "forward", P)) : a.value === "reverse" && P === 100 ? (a.value = "forward", b(s.value, "forward", S), b(r.value, "reverse", P)) : a.value === "forward" ? (b(s.value, "forward", S), b(r.value, "reverse", P)) : a.value === "reverse" && (b(s.value, "reverse", S), b(r.value, "forward", P));
    }
    function j(S) {
      S.style.width = "0%";
    }
    function b(S, P, h) {
      S && (P === "forward" ? S.style.width = [(h + f.step).toString(), "%"].join("") : S.style.width = [(h - f.step).toString(), "%"].join(""));
    }
    return (S, P) => (o(), u("div", Va, [
      t("div", {
        class: p(n(v)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: s
      }, null, 2),
      t("div", {
        class: p(n(_)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: r
      }, null, 2)
    ]));
  }
}, xa = /* @__PURE__ */ U(Da, [["__scopeId", "data-v-8639eecf"]]);
const ze = (e) => (fe("data-v-f6e7fef8"), e = e(), ve(), e), Pa = { class: "table-container" }, Ma = { class: "table-actions" }, Oa = { class: "actions" }, Ia = ["onClick"], Ba = { class: "tooltip" }, Aa = { class: "header" }, Ra = { class: "row" }, Na = { class: "col" }, za = {
  key: 0,
  class: "col"
}, Fa = {
  key: 0,
  class: "loading"
}, Ya = ["colspan"], La = {
  key: 0,
  class: "body"
}, ja = ["colspan"], Ha = {
  key: 1,
  class: "body"
}, Ua = { class: "col" }, Wa = {
  key: 0,
  class: "col"
}, Ea = { class: "actions" }, Ja = ["onClick"], qa = { class: "tooltip" }, Ga = /* @__PURE__ */ ze(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Ka = { class: "page-number" }, Qa = {
  key: 0,
  class: "current"
}, Xa = { class: "current" }, Za = /* @__PURE__ */ ze(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), el = {
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
    },
    noDataText: {
      type: String,
      default: "No data"
    }
  },
  emits: [
    "offsetChange"
  ],
  setup(e, { emit: f }) {
    const a = e, s = d(0), r = d(a.pagination.limit), m = i(() => a.pagination.client ? !1 : a.loading), v = i(() => a.headers.length + (a.actions.length > 0 ? 1 : 0)), _ = i(() => a.name && a.name.length > 0 ? "table-name show" : "table-name hide"), $ = i(() => a.dense ? "table dense" : "table");
    function V(y) {
      return y % 2 === 0 ? "row even" : "row odd";
    }
    const I = i(() => k.value > 0 ? "pagination show" : "pagination hide"), k = i(() => a.pagination.client ? a.data.length : a.totalData), j = i(() => a.pagination.client ? a.data.slice(s.value, s.value + r.value) : a.data), b = i(() => s.value + r.value > k.value ? {
      start: s.value + 1,
      end: k.value
    } : {
      start: s.value + 1,
      end: s.value + r.value
    }), S = i(() => b.value.start === 1 ? "pager left" : "pager left show"), P = i(() => b.value.end === k.value ? "pager right" : "pager right show");
    function h() {
      b.value.start === 1 || (s.value - r.value < 0 ? s.value = 0 : s.value = s.value - r.value), f("offsetChange", s.value);
    }
    function D() {
      b.value.end === k.value || (s.value = s.value + r.value), f("offsetChange", s.value);
    }
    return (y, W) => (o(), u("div", Pa, [
      t("div", Ma, [
        T(y.$slots, "table-actions", M(O({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: p(n(_))
          }, [
            T(y.$slots, "table-name", M(O({ name: e.name })), () => [
              de(g(e.name), 1)
            ], !0)
          ], 2),
          t("div", Oa, [
            (o(!0), u(A, null, R(e.tableActions, (C) => (o(), u("div", {
              class: "action",
              onClick: (B) => C.click(e.data)
            }, [
              T(y.$slots, "table-action", M(O({ action: C, data: e.data })), () => [
                t("i", {
                  class: p(C.icon)
                }, null, 2),
                t("span", Ba, g(C.name), 1)
              ], !0)
            ], 8, Ia))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: p(n($))
      }, [
        t("thead", Aa, [
          t("tr", Ra, [
            T(y.$slots, "header-row", M(O({ headers: e.headers, actions: e.actions })), () => [
              (o(!0), u(A, null, R(e.headers, (C, B) => (o(), u("th", Na, [
                T(y.$slots, `header-col.${C.key}`, M(O({ header: C, i: B })), () => [
                  de(g(C.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (o(), u("th", za, [
                T(y.$slots, "header-actions", M(O({ actions: e.actions })), void 0, !0)
              ])) : w("", !0)
            ], !0)
          ]),
          n(m) ? (o(), u("tr", Fa, [
            T(y.$slots, "progress-bar", M(O({ headers: e.headers, actions: e.actions, span: n(v) })), () => [
              t("th", { colspan: n(v) }, [
                ne(xa)
              ], 8, Ya)
            ], !0)
          ])) : w("", !0)
        ]),
        n(k) === 0 ? (o(), u("tbody", La, [
          t("tr", {
            class: p(V(0))
          }, [
            t("td", {
              class: "col center",
              colspan: n(v)
            }, g(e.noDataText), 9, ja)
          ], 2)
        ])) : w("", !0),
        n(k) > 0 ? (o(), u("tbody", Ha, [
          n(m) ? w("", !0) : (o(!0), u(A, { key: 0 }, R(n(j), (C, B) => (o(), u("tr", {
            class: p(V(B))
          }, [
            T(y.$slots, "data-row", M(O({ headers: e.headers, row: C, actions: e.actions, i: B })), () => [
              T(y.$slots, "data-content", M(O({ headers: e.headers, row: C, i: B })), () => [
                (o(!0), u(A, null, R(e.headers, (H) => (o(), u("td", Ua, [
                  T(y.$slots, `data-col.${H.key}`, M(O({ header: H, row: C, i: B })), () => [
                    de(g(C[H.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (o(), u("td", Wa, [
                T(y.$slots, "data-actions", M(O({ row: C, actions: e.actions, i: B })), () => [
                  t("div", Ea, [
                    (o(!0), u(A, null, R(e.actions, (H) => (o(), u("div", {
                      class: "action",
                      onClick: (pe) => H.click(C, B)
                    }, [
                      T(y.$slots, "data-action", M(O({ row: C, action: H, i: B })), () => [
                        t("i", {
                          class: p(H.icon)
                        }, null, 2),
                        t("span", qa, g(H.name), 1)
                      ], !0)
                    ], 8, Ja))), 256))
                  ])
                ], !0)
              ])) : w("", !0)
            ], !0)
          ], 2))), 256))
        ])) : w("", !0)
      ], 2),
      t("div", {
        class: p(n(I))
      }, [
        T(y.$slots, "pagination", M(O({ pageLeft: h, pageRight: D, start: n(b).start, end: n(b).end, total: n(k) })), () => [
          t("div", {
            class: p(n(S)),
            onClick: W[0] || (W[0] = (C) => h())
          }, [
            T(y.$slots, "pager-left", {}, () => [
              Ga
            ], !0)
          ], 2),
          t("div", Ka, [
            T(y.$slots, "page-number", M(O({ start: n(b).start, end: n(b).end, total: n(k) })), () => [
              n(b).start !== n(b).end ? (o(), u("span", Qa, g(n(b).start) + " - ", 1)) : w("", !0),
              t("span", Xa, g(n(b).end), 1),
              de(" / " + g(n(k)), 1)
            ], !0)
          ]),
          t("div", {
            class: p(n(P)),
            onClick: W[1] || (W[1] = (C) => D())
          }, [
            T(y.$slots, "pager-right", {}, () => [
              Za
            ], !0)
          ], 2)
        ], !0)
      ], 2)
    ]));
  }
}, tl = /* @__PURE__ */ U(el, [["__scopeId", "data-v-f6e7fef8"]]);
const al = (e) => (fe("data-v-a74dd1fd"), e = e(), ve(), e), ll = { class: "input-label" }, sl = { class: "select" }, nl = { class: "selected" }, ol = { class: "tag" }, il = /* @__PURE__ */ al(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), ul = {
  key: 0,
  class: "input-error"
}, rl = {
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
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "offsetChange"],
  setup(e, { emit: f }) {
    const a = e, s = d(!1), r = i(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), m = d([
      {
        name: "Select",
        icon: "",
        click: function(h, D) {
          j(h);
        }
      }
    ]), v = i(() => {
      const h = [];
      return h.push("input-control"), a.size && h.push(a.size), a.disabled && h.push("disabled"), h.join(" ");
    });
    function _(h) {
      return $.value.find((y) => y === h.value) ? "checkbox checked" : "checkbox";
    }
    const $ = i(() => a.modelValue ? a.modelValue.map((h) => h.value) : []);
    d({});
    const V = i(() => a.modelValue ? a.modelValue.map((h) => h.label) : []);
    function I() {
      a.disabled || (s.value = !s.value);
    }
    function k() {
      s.value = !1;
    }
    function j(h) {
      a.multiple ? f("update:modelValue", b(h)) : f("update:modelValue", S(h));
    }
    function b(h) {
      const D = Array.from(a.modelValue || []), y = $.value.findIndex((W) => W === h.value);
      return y < 0 ? D.push({ value: h.value, label: h.label }) : D.splice(y, 1), D;
    }
    function S(h) {
      return Array.from(a.modelValue || []), $.value.findIndex((y) => y === h.value) < 0 ? [{ value: h.value, label: h.label }] : [];
    }
    function P(h) {
      f("offsetChange", h);
    }
    return oe(() => {
    }), (h, D) => (o(), u("div", {
      class: p(n(v))
    }, [
      t("div", ll, g(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: I
      }, [
        t("div", sl, [
          (o(!0), u(A, null, R(n(V), (y) => (o(), u("div", nl, [
            t("div", ol, g(y), 1)
          ]))), 256))
        ]),
        il
      ]),
      e.errorMessage.length > 0 ? (o(), u("div", ul, g(e.errorMessage), 1)) : w("", !0),
      ne(Ne, { name: "dialog" }, {
        default: Q(() => [
          s.value ? (o(), ie(ge, {
            key: 0,
            modelValue: s.value,
            "onUpdate:modelValue": D[1] || (D[1] = (y) => s.value = y),
            title: "Select",
            width: 800,
            height: 600,
            class: "options-dialog"
          }, {
            body: Q(() => [
              ne(tl, {
                name: e.name,
                headers: n(r),
                data: e.options,
                actions: m.value,
                loading: e.optionsLoading,
                "total-data": e.optionsLength,
                pagination: e.pagination,
                onOffsetChange: P
              }, {
                "data-action": Q(({ row: y, action: W, i: C }) => [
                  t("div", {
                    class: p(_(y))
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
            ]),
            actions: Q(() => [
              ne(he, {
                "button-type": "text",
                value: "Done",
                icon: "fa-solid fa-check",
                onClick: D[0] || (D[0] = (y) => k())
              })
            ]),
            _: 1
          }, 8, ["modelValue"])) : w("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}, yl = /* @__PURE__ */ U(rl, [["__scopeId", "data-v-a74dd1fd"]]);
export {
  cl as TAlert,
  he as TButton,
  vl as TCheckbox,
  fl as TConfirmDialog,
  pl as TDatePicker,
  da as TDateTimePicker,
  ge as TDialog,
  ml as TInput,
  ga as TOption,
  xa as TProgressBar,
  hl as TSelect,
  yl as TSelectTable,
  tl as TTable
};
