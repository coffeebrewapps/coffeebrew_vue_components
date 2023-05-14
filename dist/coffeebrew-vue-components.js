import { ref as u, computed as r, onMounted as le, openBlock as o, createBlock as ae, Transition as Oe, withCtx as G, unref as n, createElementBlock as i, normalizeStyle as st, createElementVNode as t, renderSlot as D, createTextVNode as ie, toDisplayString as m, createCommentVNode as x, isRef as pe, normalizeClass as p, createVNode as te, Fragment as B, watch as nt, renderList as R, pushScopeId as ce, popScopeId as de, normalizeProps as O, guardReactiveProps as I } from "vue";
const j = (e, f) => {
  const l = e.__vccOpts || e;
  for (const [s, c] of f)
    l[s] = c;
  return l;
}, ot = { class: "menu-bar" }, it = { class: "container" }, ut = { class: "heading" }, rt = { class: "body" }, ct = { class: "actions" }, dt = {
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
    const l = e, s = u("dialog");
    r(() => l.modelValue ? "dialog show" : "dialog hide");
    const c = r(() => l.modelValue);
    function y() {
      f("update:modelValue", !1);
    }
    const k = r(() => {
      if (s.value) {
        const S = `${l.width}px`, b = `${l.height}px`, T = `calc((100vh - ${b}) / 2)`, A = `calc((100vw - ${S}) / 2)`;
        return `width:${S}; height:${b}; top:${T}; left:${A};`;
      } else
        return "";
    });
    return le(() => {
    }), (S, b) => (o(), ae(Oe, { name: "dialog" }, {
      default: G(() => [
        n(c) ? (o(), i("div", {
          key: 0,
          class: "dialog",
          ref_key: "dialog",
          ref: s,
          style: st(n(k))
        }, [
          t("div", ot, [
            D(S.$slots, "menu-bar", {}, () => [
              t("div", {
                class: "menu-button close",
                onClick: b[0] || (b[0] = (T) => y())
              })
            ], !0)
          ]),
          t("div", it, [
            t("div", ut, [
              D(S.$slots, "heading", {}, () => [
                ie(m(e.title), 1)
              ], !0)
            ]),
            t("div", rt, [
              D(S.$slots, "body", {}, void 0, !0)
            ]),
            t("div", ct, [
              D(S.$slots, "actions", {}, void 0, !0)
            ])
          ])
        ], 4)) : x("", !0)
      ]),
      _: 3
    }));
  }
}, me = /* @__PURE__ */ j(dt, [["__scopeId", "data-v-06f37367"]]), ft = { class: "text" }, sa = {
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
    const l = e, s = u("dialog"), c = r({
      get: () => l.modelValue,
      set: (y) => {
        f("update:modelValue", y);
      }
    });
    return (y, k) => (o(), ae(me, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(c),
      "onUpdate:modelValue": k[0] || (k[0] = (S) => pe(c) ? c.value = S : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: G(() => [
        t("div", ft, m(e.content), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
};
const vt = { key: 0 }, pt = {
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
    const l = e, s = r(() => `button ${l.buttonType} ${l.size}`.trim()), c = r(() => `${l.icon} fa-lg`.trim());
    return (y, k) => (o(), i("div", {
      class: p(n(s)),
      onClick: k[0] || (k[0] = (S) => y.$emit("click"))
    }, [
      e.buttonType === "text" ? (o(), i("span", vt, m(e.value), 1)) : x("", !0),
      t("i", {
        class: p(n(c))
      }, null, 2)
    ], 2));
  }
}, ve = /* @__PURE__ */ j(pt, [["__scopeId", "data-v-c26a9562"]]);
const mt = { class: "primary-text" }, ht = { class: "secondary-text" }, yt = {
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
    const l = e, s = u("dialog"), c = r({
      get: () => l.modelValue,
      set: (S) => {
        f("update:modelValue", S);
      }
    });
    function y() {
      f("update:modelValue", !1), f("confirm");
    }
    function k() {
      f("update:modelValue", !1), f("cancel");
    }
    return (S, b) => (o(), ae(me, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(c),
      "onUpdate:modelValue": b[2] || (b[2] = (T) => pe(c) ? c.value = T : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: G(() => [
        t("div", mt, m(e.primaryText), 1),
        t("div", ht, m(e.secondaryText), 1)
      ]),
      actions: G(() => [
        te(ve, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: b[0] || (b[0] = (T) => y())
        }),
        te(ve, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: b[1] || (b[1] = (T) => k())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, na = /* @__PURE__ */ j(yt, [["__scopeId", "data-v-87937dbc"]]);
const gt = { class: "input-label" }, _t = {
  key: 0,
  class: "input-error"
}, kt = {
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
    const l = e, s = u(l.modelValue), c = r(() => l.label.length <= 10 ? "input-control sm" : l.label.length > 10 && l.label.length <= 30 ? "input-control md" : "input-control lg"), y = r(() => s.value ? "input-field checked" : "input-field");
    function k() {
      s.value = !s.value, f("update:modelValue", s.value);
    }
    return (S, b) => (o(), i(B, null, [
      t("div", {
        class: p(n(c)),
        onClick: k
      }, [
        t("div", {
          class: p(n(y))
        }, null, 2),
        t("div", gt, m(e.label), 1)
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", _t, m(e.errorMessage), 1)) : x("", !0)
    ], 64));
  }
}, oa = /* @__PURE__ */ j(kt, [["__scopeId", "data-v-5ea6b79c"]]);
const L = (e) => (ce("data-v-67735e93"), e = e(), de(), e), bt = { class: "input-label" }, $t = { class: "selected" }, St = ["value"], Tt = ["value"], wt = ["value"], Ct = ["value"], Dt = ["value"], Vt = ["value"], xt = ["value"], Pt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Mt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Ot = ["value", "onClick"], It = { class: "value" }, Bt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), At = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Rt = ["value", "onClick"], Ft = { class: "value" }, Yt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), zt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), Nt = ["value", "onClick"], Lt = { class: "value" }, Ht = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), jt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), Ut = ["value", "onClick"], Wt = { class: "value" }, Et = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Jt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), qt = ["value", "onClick"], Gt = { class: "value" }, Kt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Qt = /* @__PURE__ */ L(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), Xt = ["value", "onClick"], Zt = { class: "value" }, el = {
  key: 0,
  class: "input-error"
}, tl = {
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
    const l = e, s = /* @__PURE__ */ new Date(), c = new Date(s.getFullYear() - 10, 1, 1), y = new Date(s.getFullYear() + 9, 12, 31), k = [
      ...Array(y.getFullYear() - c.getFullYear()).keys()
    ].map((a) => a + c.getFullYear()), S = [
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
    ], b = r(() => {
      const a = E.value, V = U.value;
      if (a && V) {
        const d = new Date(a, V, 1);
        return d.setMonth(d.getMonth() + 1), d.setDate(d.getDate() - 1), Array.from(Array(d.getDate())).map((N, oe) => oe + 1);
      } else
        return Array.from(Array(30)).map((d, N) => N + 1);
    }), T = Array.from(Array(24)).map((a, V) => V), A = Array.from(Array(60)).map((a, V) => V), g = Array.from(Array(60)).map((a, V) => V), H = u("yearPicker"), C = u("monthPicker"), _ = u("dayPicker"), P = u("hourPicker"), w = u("minutePicker"), h = u("secondPicker"), v = u("yearOptions"), $ = u("monthOptions"), M = u("dayOptions"), ue = u("hourOptions"), he = u("minuteOptions"), ye = u("secondOptions"), ge = u([]), _e = u([]), ke = u([]), be = u([]), $e = u([]), Se = u([]), se = u("collapsed"), E = u(), U = u(), W = u(), F = u(), Y = u(), z = u();
    u();
    const ne = u(!1), Z = u(!1), K = u(!1), Q = u(!1), q = u(!1), J = u(!1), Be = r(() => l.displayTime ? l.hour12 ? "input-control display-time hour12" : "input-control display-time hour24" : "input-control"), Ae = r(() => `input-field ${se.value}`.trim()), Re = r(() => ne.value ? "year picker show" : "year picker hide"), Fe = r(() => Z.value ? "month picker show" : "month picker hide"), Ye = r(() => K.value ? "day picker show" : "day picker hide"), ze = r(() => l.displayTime && Q.value ? "hour picker show" : "hour picker hide"), Ne = r(() => l.displayTime && q.value ? "minute picker show" : "minute picker hide"), Le = r(() => l.displayTime && J.value ? "second picker show" : "second picker hide"), Te = r(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear(), V = U.value || (/* @__PURE__ */ new Date()).getMonth(), d = W.value || (/* @__PURE__ */ new Date()).getDate(), N = F.value || 0, oe = Y.value || 0, fe = z.value || 0;
      return new Date(a, V, d, N, oe, fe);
    }), He = r(() => {
      const a = E.value || (/* @__PURE__ */ new Date()).getFullYear();
      return X(a, 1, 1, 0, 0, 0).date.split("-")[0];
    }), je = r(() => {
      const a = U.value || (/* @__PURE__ */ new Date()).getMonth();
      return X(1900, a, 1, 0, 0, 0).date.split("-")[1];
    }), Ue = r(() => {
      const a = W.value || (/* @__PURE__ */ new Date()).getDate();
      return X(1900, 1, a, 0, 0, 0).date.split("-")[2];
    }), We = r(() => {
      const a = F.value || 0;
      return X(1900, 1, 1, a, 0, 0).time.split(" ")[0].split(":")[0];
    }), Ee = r(() => {
      const a = Y.value || 0;
      return X(1900, 1, 1, 0, a, 0).time.split(" ")[0].split(":")[1];
    }), Je = r(() => {
      const a = z.value || 0;
      return X(1900, 1, 1, 0, 0, a).time.split(" ")[0].split(":")[2];
    }), qe = r(() => {
      const a = F.value || 0;
      return X(1900, 1, 1, a, 0, 0).time.split(" ")[1];
    });
    function X(a, V, d, N, oe, fe) {
      const re = new Date(a, V, d, N, oe, fe);
      a = re.toLocaleString("default", { year: "numeric" }), V = re.toLocaleString("default", { month: "2-digit" }), d = re.toLocaleString("default", { day: "2-digit" });
      const at = re.toLocaleTimeString("en-US", { hour12: l.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      return {
        date: [a, V, d].join("-"),
        time: at
      };
    }
    function Ge() {
      se.value === "collapsed" ? (se.value = "expanded", ne.value = !0, E.value && (Z.value = !0), U.value && (K.value = !0), W.value && (Q.value = !0), F.value && (q.value = !0), Y.value && (J.value = !0)) : (se.value = "collapsed", ne.value = !1, Z.value = !1, K.value = !1, Q.value = !1, q.value = !1, J.value = !1);
    }
    function Ke(a) {
      return a === E.value ? "option selected" : "option";
    }
    function Qe(a) {
      return parseInt(a) === parseInt(U.value) ? "option selected" : "option";
    }
    function Xe(a) {
      return a === W.value ? "option selected" : "option";
    }
    function Ze(a) {
      return a === F.value ? "option selected" : "option";
    }
    function et(a) {
      return a === Y.value ? "option selected" : "option";
    }
    function tt(a) {
      return a === z.value ? "option selected" : "option";
    }
    function we() {
      if (E.value) {
        const a = ge.value[k.indexOf(E.value)];
        v.value.scrollTop = a.offsetTop;
      }
      if (U.value) {
        const a = _e.value[U.value];
        $.value.scrollTop = a.offsetTop;
      }
      if (W.value) {
        const a = ke.value[b.value.indexOf(W.value)];
        M.value.scrollTop = a.offsetTop;
      }
      if (F.value) {
        const a = be.value[T.indexOf(F.value)];
        ue.value.scrollTop = a.offsetTop;
      }
      if (Y.value) {
        const a = $e.value[A.indexOf(Y.value)];
        he.value.scrollTop = a.offsetTop;
      }
      if (z.value) {
        const a = Se.value[g.indexOf(z.value)];
        ye.value.scrollTop = a.offsetTop;
      }
    }
    nt([E, U, W, F, Y, z], () => {
      we();
    });
    function Ce(a) {
      E.value = a, U.value = 0, W.value = 1, F.value = 0, Y.value = 0, z.value = 0, Z.value = !0, K.value = !1, Q.value = !1, q.value = !1, J.value = !1;
    }
    function De(a) {
      U.value = a, W.value = 1, F.value = 0, Y.value = 0, z.value = 0, K.value = !0, Q.value = !1, q.value = !1, J.value = !1;
    }
    function Ve(a) {
      W.value = a, F.value = 0, Y.value = 0, z.value = 0, l.displayTime ? (Q.value = !0, q.value = !1, J.value = !1) : (ne.value = !1, Z.value = !1, K.value = !1, f("update:modelValue", Te));
    }
    function xe(a) {
      F.value = a, Y.value = 0, z.value = 0, q.value = !0, J.value = !1;
    }
    function Pe(a) {
      Y.value = a, z.value = 0, J.value = !0;
    }
    function Me(a) {
      se.value = "collapsed", z.value = a, ne.value = !1, Z.value = !1, K.value = !1, Q.value = !1, q.value = !1, J.value = !1, f("update:modelValue", Te);
    }
    function lt() {
      const a = l.modelValue || /* @__PURE__ */ new Date();
      Ce(a.getFullYear()), De(a.getMonth()), Ve(a.getDate()), l.displayTime && (xe(a.getHours()), Pe(a.getMinutes()), Me(a.getSeconds()));
    }
    const ee = new IntersectionObserver((a) => {
      a.forEach((V) => {
        V.isIntersecting === !0 && we();
      });
    }, { threshold: [0] });
    return le(() => {
      ee.observe(H.value), ee.observe(C.value), ee.observe(_.value), l.displayTime && (ee.observe(P.value), ee.observe(w.value), ee.observe(h.value)), lt();
    }), (a, V) => (o(), i("div", {
      class: p(n(Be))
    }, [
      t("div", bt, m(e.label), 1),
      t("div", {
        class: p(n(Ae))
      }, [
        t("div", {
          class: "select",
          onClick: Ge
        }, [
          t("div", $t, [
            t("input", {
              disabled: "",
              value: n(He)
            }, null, 8, St),
            t("input", {
              disabled: "",
              value: n(je)
            }, null, 8, Tt),
            t("input", {
              disabled: "",
              value: n(Ue)
            }, null, 8, wt),
            e.displayTime ? (o(), i("input", {
              key: 0,
              disabled: "",
              value: n(We)
            }, null, 8, Ct)) : x("", !0),
            e.displayTime ? (o(), i("input", {
              key: 1,
              disabled: "",
              value: n(Ee)
            }, null, 8, Dt)) : x("", !0),
            e.displayTime ? (o(), i("input", {
              key: 2,
              disabled: "",
              value: n(Je)
            }, null, 8, Vt)) : x("", !0),
            e.displayTime && e.hour12 ? (o(), i("input", {
              key: 3,
              disabled: "",
              value: n(qe)
            }, null, 8, xt)) : x("", !0)
          ]),
          Pt
        ]),
        t("div", {
          class: p(n(Re)),
          ref_key: "yearPicker",
          ref: H
        }, [
          Mt,
          t("div", {
            class: "options",
            ref_key: "yearOptions",
            ref: v
          }, [
            (o(!0), i(B, null, R(n(k), (d) => (o(), i("div", {
              class: p(Ke(d)),
              value: d,
              ref_for: !0,
              ref_key: "yearRefs",
              ref: ge,
              onClick: (N) => Ce(d)
            }, [
              t("div", It, m(d), 1),
              Bt
            ], 10, Ot))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Fe)),
          ref_key: "monthPicker",
          ref: C
        }, [
          At,
          t("div", {
            class: "options",
            ref_key: "monthOptions",
            ref: $
          }, [
            (o(!0), i(B, null, R(Object.keys(S), (d) => (o(), i("div", {
              class: p(Qe(d)),
              value: d,
              ref_for: !0,
              ref_key: "monthRefs",
              ref: _e,
              onClick: (N) => De(d)
            }, [
              t("div", Ft, m(S[d]), 1),
              Yt
            ], 10, Rt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Ye)),
          ref_key: "dayPicker",
          ref: _
        }, [
          zt,
          t("div", {
            class: "options",
            ref_key: "dayOptions",
            ref: M
          }, [
            (o(!0), i(B, null, R(n(b), (d) => (o(), i("div", {
              class: p(Xe(d)),
              value: d,
              ref_for: !0,
              ref_key: "dayRefs",
              ref: ke,
              onClick: (N) => Ve(d)
            }, [
              t("div", Lt, m(d), 1),
              Ht
            ], 10, Nt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(ze)),
          ref_key: "hourPicker",
          ref: P
        }, [
          jt,
          t("div", {
            class: "options",
            ref_key: "hourOptions",
            ref: ue
          }, [
            (o(!0), i(B, null, R(n(T), (d) => (o(), i("div", {
              class: p(Ze(d)),
              value: d,
              ref_for: !0,
              ref_key: "hourRefs",
              ref: be,
              onClick: (N) => xe(d)
            }, [
              t("div", Wt, m(d), 1),
              Et
            ], 10, Ut))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Ne)),
          ref_key: "minutePicker",
          ref: w
        }, [
          Jt,
          t("div", {
            class: "options",
            ref_key: "minuteOptions",
            ref: he
          }, [
            (o(!0), i(B, null, R(n(A), (d) => (o(), i("div", {
              class: p(et(d)),
              value: d,
              ref_for: !0,
              ref_key: "minuteRefs",
              ref: $e,
              onClick: (N) => Pe(d)
            }, [
              t("div", Gt, m(d), 1),
              Kt
            ], 10, qt))), 256))
          ], 512)
        ], 2),
        t("div", {
          class: p(n(Le)),
          ref_key: "secondPicker",
          ref: h
        }, [
          Qt,
          t("div", {
            class: "options",
            ref_key: "secondOptions",
            ref: ye
          }, [
            (o(!0), i(B, null, R(n(g), (d) => (o(), i("div", {
              class: p(tt(d)),
              value: d,
              ref_for: !0,
              ref_key: "secondRefs",
              ref: Se,
              onClick: (N) => Me(d)
            }, [
              t("div", Zt, m(d), 1)
            ], 10, Xt))), 256))
          ], 512)
        ], 2)
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", el, m(e.errorMessage), 1)) : x("", !0)
    ], 2));
  }
}, ll = /* @__PURE__ */ j(tl, [["__scopeId", "data-v-67735e93"]]), ia = {
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
    const l = e, s = r({
      get: () => l.modelValue,
      set: (c) => {
        f("update:modelValue", c);
      }
    });
    return le(() => {
    }), (c, y) => (o(), ae(ll, {
      modelValue: n(s),
      "onUpdate:modelValue": y[0] || (y[0] = (k) => pe(s) ? s.value = k : null),
      min: e.min,
      max: e.max,
      label: e.label,
      "display-time": !1,
      "error-message": e.errorMessage
    }, null, 8, ["modelValue", "min", "max", "label", "error-message"]));
  }
};
const al = { class: "input-control" }, sl = { class: "input-label" }, nl = { class: "input-field" }, ol = ["type", "value"], il = {
  key: 0,
  class: "input-error"
}, ul = {
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
    return (f, l) => (o(), i("div", al, [
      t("div", sl, m(e.label), 1),
      t("div", nl, [
        t("input", {
          type: e.type,
          class: p(e.size),
          value: e.modelValue,
          onInput: l[0] || (l[0] = (s) => f.$emit("update:modelValue", s.target.value))
        }, null, 42, ol)
      ]),
      e.errorMessage.length > 0 ? (o(), i("div", il, m(e.errorMessage), 1)) : x("", !0)
    ]));
  }
}, ua = /* @__PURE__ */ j(ul, [["__scopeId", "data-v-c182bf09"]]);
const rl = ["value"], cl = {
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
    const l = e, s = r(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (c, y) => (o(), i("div", {
      class: p(n(s)),
      value: e.value,
      onClick: y[0] || (y[0] = (k) => c.$emit("select", e.value))
    }, m(e.label), 11, rl));
  }
}, dl = /* @__PURE__ */ j(cl, [["__scopeId", "data-v-1fa7fb5e"]]);
const fl = (e) => (ce("data-v-386634d6"), e = e(), de(), e), vl = { class: "input-label" }, pl = ["name"], ml = { class: "selected" }, hl = /* @__PURE__ */ fl(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), yl = { class: "options" }, gl = {
  key: 0,
  class: "input-error"
}, _l = {
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
    const l = e, s = u("collapsed"), c = u(""), y = r(() => `input-control ${l.size}`.trim()), k = r(() => `input-field ${s.value}`.trim()), S = r(() => {
      const g = l.options.find((H) => H.value === c.value);
      return g ? g.label : "";
    });
    function b() {
      s.value === "collapsed" ? s.value = "expanded" : s.value = "collapsed";
    }
    function T(g) {
      return g === c.value;
    }
    function A(g) {
      s.value = "collapsed", c.value = g, f("update:modelValue", g);
    }
    return le(() => {
      A(l.modelValue);
    }), (g, H) => (o(), i("div", {
      class: p(n(y))
    }, [
      t("div", vl, m(e.label), 1),
      t("div", {
        class: p(n(k))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: b
        }, [
          t("div", ml, m(n(S)), 1),
          hl
        ], 8, pl),
        t("div", yl, [
          (o(!0), i(B, null, R(e.options, (C) => (o(), ae(dl, {
            value: C.value,
            label: C.label,
            size: e.size,
            selected: T(C.value),
            onSelect: (_) => A(C.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), i("div", gl, m(e.errorMessage), 1)) : x("", !0)
    ], 2));
  }
}, ra = /* @__PURE__ */ j(_l, [["__scopeId", "data-v-386634d6"]]);
const kl = { class: "progress-bar" }, bl = {
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
    const f = e, l = u("forward"), s = u("forwardBar"), c = u("reverseBar"), y = u(), k = r(() => `bar forward-bar ${l.value}`), S = r(() => f.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    le(() => {
      y.value = setInterval(T, f.speed);
    });
    function b(_) {
      return _ ? parseInt(_.style.width.split("%")[0]) : 0;
    }
    function T() {
      f.bidirection ? g() : A();
    }
    function A() {
      const _ = b(s.value);
      _ === 100 ? f.indefinite ? H(s.value) : clearInterval(y.value) : C(s.value, "forward", _);
    }
    function g() {
      const _ = b(s.value), P = b(c.value);
      l.value === "forward" && _ === 100 ? (l.value = "reverse", C(s.value, "reverse", _), C(c.value, "forward", P)) : l.value === "reverse" && P === 100 ? (l.value = "forward", C(s.value, "forward", _), C(c.value, "reverse", P)) : l.value === "forward" ? (C(s.value, "forward", _), C(c.value, "reverse", P)) : l.value === "reverse" && (C(s.value, "reverse", _), C(c.value, "forward", P));
    }
    function H(_) {
      _.style.width = "0%";
    }
    function C(_, P, w) {
      _ && (P === "forward" ? _.style.width = [(w + f.step).toString(), "%"].join("") : _.style.width = [(w - f.step).toString(), "%"].join(""));
    }
    return (_, P) => (o(), i("div", kl, [
      t("div", {
        class: p(n(k)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: s
      }, null, 2),
      t("div", {
        class: p(n(S)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: c
      }, null, 2)
    ]));
  }
}, $l = /* @__PURE__ */ j(bl, [["__scopeId", "data-v-8639eecf"]]);
const Ie = (e) => (ce("data-v-7832a2e2"), e = e(), de(), e), Sl = { class: "table-container" }, Tl = { class: "table-actions" }, wl = { class: "actions" }, Cl = ["onClick"], Dl = { class: "tooltip" }, Vl = { class: "header" }, xl = { class: "row" }, Pl = { class: "col" }, Ml = {
  key: 0,
  class: "col"
}, Ol = {
  key: 0,
  class: "loading"
}, Il = ["colspan"], Bl = { class: "body" }, Al = { class: "row" }, Rl = { class: "col" }, Fl = {
  key: 0,
  class: "col"
}, Yl = { class: "actions" }, zl = ["onClick"], Nl = { class: "tooltip" }, Ll = { class: "pagination" }, Hl = /* @__PURE__ */ Ie(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), jl = { class: "page-number" }, Ul = {
  key: 0,
  class: "current"
}, Wl = { class: "current" }, El = /* @__PURE__ */ Ie(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Jl = {
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
    const l = e, s = u(0), c = u(l.pagination.limit), y = r(() => l.pagination.client ? !1 : l.loading), k = r(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), S = r(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), b = r(() => l.dense ? "table dense" : "table"), T = r(() => l.pagination.client ? l.data.length : l.totalData), A = r(() => l.pagination.client ? l.data.slice(s.value, s.value + c.value) : l.data), g = r(() => s.value + c.value > T.value ? {
      start: s.value + 1,
      end: T.value
    } : {
      start: s.value + 1,
      end: s.value + c.value
    }), H = r(() => g.value.start === 1 ? "pager left" : "pager left show"), C = r(() => g.value.end === T.value ? "pager right" : "pager right show");
    function _() {
      g.value.start === 1 || (s.value - c.value < 0 ? s.value = 0 : s.value = s.value - c.value), f("offsetChange", s.value);
    }
    function P() {
      g.value.end === T.value || (s.value = s.value + c.value), f("offsetChange", s.value);
    }
    return (w, h) => (o(), i("div", Sl, [
      t("div", Tl, [
        D(w.$slots, "table-actions", O(I({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: p(n(S))
          }, [
            D(w.$slots, "table-name", O(I({ name: e.name })), () => [
              ie(m(e.name), 1)
            ], !0)
          ], 2),
          t("div", wl, [
            (o(!0), i(B, null, R(e.tableActions, (v) => (o(), i("div", {
              class: "action",
              onClick: ($) => v.click(e.data)
            }, [
              D(w.$slots, "table-action", O(I({ action: v, data: e.data })), () => [
                t("i", {
                  class: p(v.icon)
                }, null, 2),
                t("span", Dl, m(v.name), 1)
              ], !0)
            ], 8, Cl))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: p(n(b))
      }, [
        t("thead", Vl, [
          t("tr", xl, [
            D(w.$slots, "header-row", O(I({ headers: e.headers, actions: e.actions })), () => [
              (o(!0), i(B, null, R(e.headers, (v, $) => (o(), i("th", Pl, [
                D(w.$slots, `header-col.${v.key}`, O(I({ header: v, i: $ })), () => [
                  ie(m(v.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (o(), i("th", Ml, [
                D(w.$slots, "header-actions", O(I({ actions: e.actions })), void 0, !0)
              ])) : x("", !0)
            ], !0)
          ]),
          n(y) ? (o(), i("tr", Ol, [
            D(w.$slots, "progress-bar", O(I({ headers: e.headers, actions: e.actions, span: n(k) })), () => [
              t("th", { colspan: n(k) }, [
                te($l)
              ], 8, Il)
            ], !0)
          ])) : x("", !0)
        ]),
        t("tbody", Bl, [
          n(y) ? x("", !0) : (o(!0), i(B, { key: 0 }, R(n(A), (v, $) => (o(), i("tr", Al, [
            D(w.$slots, "data-row", O(I({ headers: e.headers, row: v, actions: e.actions, i: $ })), () => [
              D(w.$slots, "data-content", O(I({ headers: e.headers, row: v, i: $ })), () => [
                (o(!0), i(B, null, R(e.headers, (M) => (o(), i("td", Rl, [
                  D(w.$slots, `data-col.${M.key}`, O(I({ header: M, row: v, i: $ })), () => [
                    ie(m(v[M.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (o(), i("td", Fl, [
                D(w.$slots, "data-actions", O(I({ row: v, actions: e.actions, i: $ })), () => [
                  t("div", Yl, [
                    (o(!0), i(B, null, R(e.actions, (M) => (o(), i("div", {
                      class: "action",
                      onClick: (ue) => M.click(v, $)
                    }, [
                      D(w.$slots, "data-action", O(I({ row: v, action: M, i: $ })), () => [
                        t("i", {
                          class: p(M.icon)
                        }, null, 2),
                        t("span", Nl, m(M.name), 1)
                      ], !0)
                    ], 8, zl))), 256))
                  ])
                ], !0)
              ])) : x("", !0)
            ], !0)
          ]))), 256))
        ])
      ], 2),
      t("div", Ll, [
        D(w.$slots, "pagination", O(I({ pageLeft: _, pageRight: P, start: n(g).start, end: n(g).end, total: n(T) })), () => [
          t("div", {
            class: p(n(H)),
            onClick: h[0] || (h[0] = (v) => _())
          }, [
            D(w.$slots, "pager-left", {}, () => [
              Hl
            ], !0)
          ], 2),
          t("div", jl, [
            D(w.$slots, "page-number", O(I({ start: n(g).start, end: n(g).end, total: n(T) })), () => [
              n(g).start !== n(g).end ? (o(), i("span", Ul, m(n(g).start) + " - ", 1)) : x("", !0),
              t("span", Wl, m(n(g).end), 1),
              ie(" / " + m(n(T)), 1)
            ], !0)
          ]),
          t("div", {
            class: p(n(C)),
            onClick: h[1] || (h[1] = (v) => P())
          }, [
            D(w.$slots, "pager-right", {}, () => [
              El
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, ql = /* @__PURE__ */ j(Jl, [["__scopeId", "data-v-7832a2e2"]]);
const Gl = (e) => (ce("data-v-8c115db1"), e = e(), de(), e), Kl = { class: "input-label" }, Ql = { class: "select" }, Xl = { class: "selected" }, Zl = { class: "tag" }, ea = /* @__PURE__ */ Gl(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), ta = {
  key: 0,
  class: "input-error"
}, la = {
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
  setup(e, { emit: f }) {
    const l = e, s = u(!1), c = u(""), y = r(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), k = u([
      {
        name: "Select",
        icon: "",
        click: function(h, v) {
          C(h);
        }
      }
    ]), S = r(() => `input-control ${l.size}`);
    function b(h) {
      return T.value.find(($) => $ === h.value) ? "checkbox checked" : "checkbox";
    }
    const T = r(() => l.modelValue ? l.modelValue.map((h) => h.value) : []);
    u({});
    const A = r(() => l.modelValue ? l.modelValue.map((h) => h.label) : []);
    function g() {
      s.value = !s.value;
    }
    function H() {
      s.value = !1;
    }
    function C(h) {
      l.multiple ? f("update:modelValue", _(h)) : f("update:modelValue", P(h));
    }
    function _(h) {
      const v = Array.from(l.modelValue || []), $ = T.value.findIndex((M) => M === h.value);
      return $ < 0 ? v.push({ value: h.value, label: h.label }) : v.splice($, 1), v;
    }
    function P(h) {
      return Array.from(l.modelValue || []), T.value.findIndex(($) => $ === h.value) < 0 ? [{ value: h.value, label: h.label }] : [];
    }
    function w(h) {
      f("offsetChange", h);
    }
    return le(() => {
    }), (h, v) => (o(), i("div", {
      class: p(n(S))
    }, [
      t("div", Kl, m(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: g
      }, [
        t("div", Ql, [
          (o(!0), i(B, null, R(n(A), ($) => (o(), i("div", Xl, [
            t("div", Zl, m($), 1)
          ]))), 256))
        ]),
        ea
      ]),
      c.value.length > 0 ? (o(), i("div", ta, m(c.value), 1)) : x("", !0),
      te(Oe, { name: "dialog" }, {
        default: G(() => [
          s.value ? (o(), ae(me, {
            key: 0,
            modelValue: s.value,
            "onUpdate:modelValue": v[1] || (v[1] = ($) => s.value = $),
            title: "Select",
            width: 800,
            height: 600,
            class: "options-dialog"
          }, {
            body: G(() => [
              te(ql, {
                name: e.name,
                headers: n(y),
                data: e.options,
                actions: k.value,
                loading: e.optionsLoading,
                "total-data": e.optionsLength,
                pagination: e.pagination,
                onOffsetChange: w
              }, {
                "data-action": G(({ row: $, action: M, i: ue }) => [
                  t("div", {
                    class: p(b($))
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
            ]),
            actions: G(() => [
              te(ve, {
                "button-type": "text",
                value: "Done",
                icon: "fa-solid fa-check",
                onClick: v[0] || (v[0] = ($) => H())
              })
            ]),
            _: 1
          }, 8, ["modelValue"])) : x("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}, ca = /* @__PURE__ */ j(la, [["__scopeId", "data-v-8c115db1"]]);
export {
  sa as TAlert,
  ve as TButton,
  oa as TCheckbox,
  na as TConfirmDialog,
  ia as TDatePicker,
  ll as TDateTimePicker,
  me as TDialog,
  ua as TInput,
  dl as TOption,
  $l as TProgressBar,
  ra as TSelect,
  ca as TSelectTable,
  ql as TTable
};
