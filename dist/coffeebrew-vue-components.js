import { ref as c, computed as i, onMounted as ne, openBlock as o, createBlock as oe, Transition as Ne, withCtx as K, unref as n, createElementBlock as u, normalizeStyle as ut, createElementVNode as t, renderSlot as V, createTextVNode as re, toDisplayString as _, createCommentVNode as P, isRef as he, normalizeClass as h, createVNode as se, watch as rt, Fragment as R, renderList as N, pushScopeId as de, popScopeId as fe, normalizeProps as B, guardReactiveProps as A } from "vue";
const U = (e, f) => {
  const l = e.__vccOpts || e;
  for (const [s, r] of f)
    l[s] = r;
  return l;
}, ct = { class: "menu-bar" }, dt = { class: "container" }, ft = { class: "heading" }, vt = { class: "body" }, pt = { class: "actions" }, mt = {
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
    const l = e, s = c("dialog");
    i(() => l.modelValue ? "dialog show" : "dialog hide");
    const r = i(() => l.modelValue);
    function v() {
      f("update:modelValue", !1);
    }
    const p = i(() => {
      if (s.value) {
        const g = `${l.width}px`, b = `${l.height}px`, x = `calc((100vh - ${b}) / 2)`, D = `calc((100vw - ${g}) / 2)`;
        return `width:${g}; height:${b}; top:${x}; left:${D};`;
      } else
        return "";
    });
    return ne(() => {
    }), (g, b) => (o(), oe(Ne, { name: "dialog" }, {
      default: K(() => [
        n(r) ? (o(), u("div", {
          key: 0,
          class: "dialog",
          ref_key: "dialog",
          ref: s,
          style: ut(n(p))
        }, [
          t("div", ct, [
            V(g.$slots, "menu-bar", {}, () => [
              t("div", {
                class: "menu-button close",
                onClick: b[0] || (b[0] = (x) => v())
              })
            ], !0)
          ]),
          t("div", dt, [
            t("div", ft, [
              V(g.$slots, "heading", {}, () => [
                re(_(e.title), 1)
              ], !0)
            ]),
            t("div", vt, [
              V(g.$slots, "body", {}, void 0, !0)
            ]),
            t("div", pt, [
              V(g.$slots, "actions", {}, void 0, !0)
            ])
          ])
        ], 4)) : P("", !0)
      ]),
      _: 3
    }));
  }
}, ye = /* @__PURE__ */ U(mt, [["__scopeId", "data-v-a00ad7f0"]]), ht = { class: "text" }, ca = {
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
    const l = e, s = c("dialog"), r = i({
      get: () => l.modelValue,
      set: (v) => {
        f("update:modelValue", v);
      }
    });
    return (v, p) => (o(), oe(ye, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": p[0] || (p[0] = (g) => he(r) ? r.value = g : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: K(() => [
        t("div", ht, _(e.content), 1)
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
    const l = e, s = i(() => `button ${l.buttonType} ${l.size}`.trim()), r = i(() => `${l.icon} fa-lg`.trim());
    return (v, p) => (o(), u("div", {
      class: h(n(s)),
      onClick: p[0] || (p[0] = (g) => v.$emit("click"))
    }, [
      e.buttonType === "text" ? (o(), u("span", yt, _(e.value), 1)) : P("", !0),
      t("i", {
        class: h(n(r))
      }, null, 2)
    ], 2));
  }
}, me = /* @__PURE__ */ U(gt, [["__scopeId", "data-v-ba63b772"]]);
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
    const l = e, s = c("dialog"), r = i({
      get: () => l.modelValue,
      set: (g) => {
        f("update:modelValue", g);
      }
    });
    function v() {
      f("update:modelValue", !1), f("confirm");
    }
    function p() {
      f("update:modelValue", !1), f("cancel");
    }
    return (g, b) => (o(), oe(ye, {
      ref_key: "dialog",
      ref: s,
      modelValue: n(r),
      "onUpdate:modelValue": b[2] || (b[2] = (x) => he(r) ? r.value = x : null),
      width: e.width,
      height: e.height,
      title: e.title
    }, {
      body: K(() => [
        t("div", _t, _(e.primaryText), 1),
        t("div", bt, _(e.secondaryText), 1)
      ]),
      actions: K(() => [
        se(me, {
          class: "confirm-button",
          "button-type": "text",
          value: "Confirm",
          icon: "fa-solid fa-check",
          onClick: b[0] || (b[0] = (x) => v())
        }),
        se(me, {
          "button-type": "text",
          value: "Cancel",
          icon: "fa-solid fa-xmark",
          onClick: b[1] || (b[1] = (x) => p())
        })
      ]),
      _: 1
    }, 8, ["modelValue", "width", "height", "title"]));
  }
}, da = /* @__PURE__ */ U(kt, [["__scopeId", "data-v-87937dbc"]]);
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
    const l = e, s = c(l.modelValue), r = i(() => {
      const g = [];
      return g.push("input-control"), l.label.length <= 10 ? g.push("sm") : l.label.length > 10 && l.label.length <= 30 ? g.push("md") : g.push("lg"), l.disabled && g.push("disabled"), g.join(" ");
    }), v = i(() => s.value ? "checkbox checked" : "checkbox");
    function p() {
      l.disabled || (s.value = !s.value, f("update:modelValue", s.value));
    }
    return (g, b) => (o(), u("div", {
      class: h(n(r)),
      onClick: p
    }, [
      t("div", $t, [
        t("div", {
          class: h(n(v))
        }, null, 2),
        t("div", St, _(e.label), 1)
      ]),
      e.errorMessage.length > 0 ? (o(), u("div", Ct, _(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, fa = /* @__PURE__ */ U(Tt, [["__scopeId", "data-v-9bdc9ae5"]]);
const z = (e) => (de("data-v-f0bec40b"), e = e(), fe(), e), wt = { class: "input-label" }, Vt = { class: "selected" }, Dt = ["value"], xt = ["value"], Pt = ["value"], Mt = ["value"], Ot = ["value"], It = ["value"], Bt = ["value"], At = /* @__PURE__ */ z(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-calendar-days" })
], -1)), Rt = /* @__PURE__ */ z(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-xmark" }, null, -1)), Nt = [
  Rt
], zt = { class: "pickers" }, Ft = /* @__PURE__ */ z(() => /* @__PURE__ */ t("div", { class: "title" }, "Year", -1)), Yt = ["value", "onClick"], Lt = { class: "value" }, jt = /* @__PURE__ */ z(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Ht = /* @__PURE__ */ z(() => /* @__PURE__ */ t("div", { class: "title" }, "Month", -1)), Ut = ["value", "onClick"], Wt = { class: "value" }, Et = /* @__PURE__ */ z(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Jt = /* @__PURE__ */ z(() => /* @__PURE__ */ t("div", { class: "title" }, "Day", -1)), qt = ["value", "onClick"], Gt = { class: "value" }, Kt = /* @__PURE__ */ z(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), Qt = /* @__PURE__ */ z(() => /* @__PURE__ */ t("div", { class: "title" }, "Hour", -1)), Xt = ["value", "onClick"], Zt = { class: "value" }, el = /* @__PURE__ */ z(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), tl = /* @__PURE__ */ z(() => /* @__PURE__ */ t("div", { class: "title" }, "Minute", -1)), ll = ["value", "onClick"], al = { class: "value" }, sl = /* @__PURE__ */ z(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-right" }, null, -1)), nl = /* @__PURE__ */ z(() => /* @__PURE__ */ t("div", { class: "title" }, "Second", -1)), ol = ["value", "onClick"], il = { class: "value" }, ul = {
  key: 0,
  class: "input-error"
}, rl = {
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
    const l = e;
    function s(a) {
      return typeof a < "u" && a !== null;
    }
    const r = /* @__PURE__ */ new Date(), v = i(() => l.modelValue ? l.modelValue : r < g.value ? r : p.value), p = i(() => l.min ? l.min : new Date(r.getFullYear() - 10, 0, 1)), g = i(() => l.max ? l.max : new Date(r.getFullYear() + 9, 11, 31)), b = i(() => [
      ...Array(g.value.getFullYear() - p.value.getFullYear()).keys()
    ].map((a) => a + p.value.getFullYear())), x = [
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
    ], D = i(() => {
      const a = J.value || p.value.getFullYear(), O = W.value || p.value.getMonth(), d = new Date(a, O, 1);
      return d.setMonth(d.getMonth() + 1), d.setDate(d.getDate() - 1), Array.from(Array(d.getDate())).map((j, ee) => ee + 1);
    }), S = Array.from(Array(24)).map((a, O) => O), C = Array.from(Array(60)).map((a, O) => O), T = Array.from(Array(60)).map((a, O) => O), k = c("yearPicker"), M = c("monthPicker"), m = c("dayPicker"), y = c("hourPicker"), w = c("minutePicker"), $ = c("secondPicker"), I = c("yearOptions"), H = c("monthOptions"), ve = c("dayOptions"), ge = c("hourOptions"), _e = c("minuteOptions"), be = c("secondOptions"), ke = c([]), $e = c([]), Se = c([]), Ce = c([]), Te = c([]), we = c([]), te = c("collapsed"), J = c(), W = c(), E = c(), F = c(), Y = c(), L = c();
    c();
    const ie = c(!1), le = c(!1), Q = c(!1), X = c(!1), G = c(!1), q = c(!1), Fe = i(() => {
      const a = [];
      return a.push("input-control"), l.displayTime && (a.push("display-time"), l.hour12 ? a.push("hour12") : a.push("hour24")), l.disabled && a.push("disabled"), a.join(" ");
    }), Ye = i(() => `input-field ${te.value}`.trim()), Le = i(() => ie.value ? "year picker show" : "year picker hide"), je = i(() => le.value ? "month picker show" : "month picker hide"), He = i(() => Q.value ? "day picker show" : "day picker hide"), Ue = i(() => l.displayTime && X.value ? "hour picker show" : "hour picker hide"), We = i(() => l.displayTime && G.value ? "minute picker show" : "minute picker hide"), Ee = i(() => l.displayTime && q.value ? "second picker show" : "second picker hide"), Ve = i(() => {
      const a = J.value || p.value.getFullYear(), O = W.value || p.value.getMonth(), d = E.value || p.value.getDate(), j = F.value || 0, ee = Y.value || 0, ue = L.value || 0;
      return new Date(a, O, d, j, ee, ue);
    }), Je = i(() => {
      const a = J.value || p.value.getFullYear();
      return Z(a, 0, 1, 0, 0, 0).date.year;
    }), qe = i(() => {
      const a = W.value || p.value.getMonth();
      return Z(1900, a, 1, 0, 0, 0).date.month;
    }), Ge = i(() => {
      const a = E.value || p.value.getDate();
      return Z(1900, 0, a, 0, 0, 0).date.day;
    }), Ke = i(() => {
      const a = F.value || 0;
      return Z(1900, 0, 1, a, 0, 0).time.hour;
    }), Qe = i(() => {
      const a = Y.value || 0;
      return Z(1900, 0, 1, 0, a, 0).time.minute;
    }), Xe = i(() => {
      const a = L.value || 0;
      return Z(1900, 0, 1, 0, 0, a).time.second;
    }), Ze = i(() => {
      const a = F.value || 0;
      return Z(1900, 0, 1, a, 0, 0).time.amPm;
    });
    function Z(a, O, d, j, ee, ue) {
      const ce = new Date(a, O, d, j, ee, ue);
      a = ce.toLocaleString("default", { year: "numeric" }), O = ce.toLocaleString("default", { month: "2-digit" }), d = ce.toLocaleString("default", { day: "2-digit" });
      const Re = ce.toLocaleTimeString("en-US", { hour12: l.hour12, hour: "2-digit", minute: "2-digit", second: "2-digit" }), pe = Re.split(" ")[0].split(":");
      j = pe[0], ee = pe[1], ue = pe[2];
      const it = Re.split(" ")[1];
      return {
        date: { year: a, month: O, day: d },
        time: { hour: j, minute: ee, second: ue, amPm: it }
      };
    }
    function De() {
      l.disabled || (te.value === "collapsed" ? (te.value = "expanded", ie.value = !0, s(J.value) && (le.value = !0), s(W.value) && (Q.value = !0), s(E.value) && (X.value = !0), s(F.value) && (G.value = !0), s(Y.value) && (q.value = !0)) : (te.value = "collapsed", ie.value = !1, le.value = !1, Q.value = !1, X.value = !1, G.value = !1, q.value = !1));
    }
    function et(a) {
      return a === J.value ? "option selected" : "option";
    }
    function tt(a) {
      return parseInt(a) === parseInt(W.value) ? "option selected" : "option";
    }
    function lt(a) {
      return a === E.value ? "option selected" : "option";
    }
    function at(a) {
      return a === F.value ? "option selected" : "option";
    }
    function st(a) {
      return a === Y.value ? "option selected" : "option";
    }
    function nt(a) {
      return a === L.value ? "option selected" : "option";
    }
    function xe() {
      if (J.value) {
        const a = ke.value[b.value.indexOf(J.value)];
        I.value.scrollTop = a.offsetTop;
      }
      if (W.value) {
        const a = $e.value[W.value];
        H.value.scrollTop = a.offsetTop;
      }
      if (E.value) {
        const a = Se.value[D.value.indexOf(E.value)];
        ve.value.scrollTop = a.offsetTop;
      }
      if (F.value) {
        const a = Ce.value[S.indexOf(F.value)];
        ge.value.scrollTop = a.offsetTop;
      }
      if (Y.value) {
        const a = Te.value[C.indexOf(Y.value)];
        _e.value.scrollTop = a.offsetTop;
      }
      if (L.value) {
        const a = we.value[T.indexOf(L.value)];
        be.value.scrollTop = a.offsetTop;
      }
    }
    rt([J, W, E, F, Y, L], () => {
      xe();
    });
    function Pe(a) {
      J.value = a, W.value = 0, E.value = 1, F.value = 0, Y.value = 0, L.value = 0, le.value = !0, Q.value = !1, X.value = !1, G.value = !1, q.value = !1;
    }
    function Me(a) {
      W.value = a, E.value = 1, F.value = 0, Y.value = 0, L.value = 0, Q.value = !0, X.value = !1, G.value = !1, q.value = !1;
    }
    function Oe(a) {
      E.value = a, F.value = 0, Y.value = 0, L.value = 0, l.displayTime ? (X.value = !0, G.value = !1, q.value = !1) : (te.value = "collapsed", ie.value = !1, le.value = !1, Q.value = !1, f("update:modelValue", Ve));
    }
    function Ie(a) {
      F.value = a, Y.value = 0, L.value = 0, G.value = !0, q.value = !1;
    }
    function Be(a) {
      Y.value = a, L.value = 0, q.value = !0;
    }
    function Ae(a) {
      te.value = "collapsed", L.value = a, ie.value = !1, le.value = !1, Q.value = !1, X.value = !1, G.value = !1, q.value = !1, f("update:modelValue", Ve);
    }
    function ot() {
      Pe(v.value.getFullYear()), Me(v.value.getMonth()), Oe(v.value.getDate()), l.displayTime && (Ie(v.value.getHours()), Be(v.value.getMinutes()), Ae(v.value.getSeconds()));
    }
    const ae = new IntersectionObserver((a) => {
      a.forEach((O) => {
        O.isIntersecting === !0 && xe();
      });
    }, { threshold: [0] });
    return ne(() => {
      ae.observe(k.value), ae.observe(M.value), ae.observe(m.value), l.displayTime && (ae.observe(y.value), ae.observe(w.value), ae.observe($.value)), ot();
    }), (a, O) => (o(), u("div", {
      class: h(n(Fe))
    }, [
      t("div", wt, _(e.label), 1),
      t("div", {
        class: h(n(Ye))
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
            }, null, 8, Mt)) : P("", !0),
            e.displayTime ? (o(), u("input", {
              key: 1,
              disabled: "",
              value: n(Qe)
            }, null, 8, Ot)) : P("", !0),
            e.displayTime ? (o(), u("input", {
              key: 2,
              disabled: "",
              value: n(Xe)
            }, null, 8, It)) : P("", !0),
            e.displayTime && e.hour12 ? (o(), u("input", {
              key: 3,
              disabled: "",
              value: n(Ze)
            }, null, 8, Bt)) : P("", !0)
          ]),
          At
        ]),
        t("div", {
          class: "close-toggle",
          onClick: De
        }, Nt),
        t("div", zt, [
          t("div", {
            class: h(n(Le)),
            ref_key: "yearPicker",
            ref: k
          }, [
            Ft,
            t("div", {
              class: "options",
              ref_key: "yearOptions",
              ref: I
            }, [
              (o(!0), u(R, null, N(n(b), (d) => (o(), u("div", {
                class: h(et(d)),
                value: d,
                ref_for: !0,
                ref_key: "yearRefs",
                ref: ke,
                onClick: (j) => Pe(d)
              }, [
                t("div", Lt, _(d), 1),
                jt
              ], 10, Yt))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: h(n(je)),
            ref_key: "monthPicker",
            ref: M
          }, [
            Ht,
            t("div", {
              class: "options",
              ref_key: "monthOptions",
              ref: H
            }, [
              (o(!0), u(R, null, N(Object.keys(x), (d) => (o(), u("div", {
                class: h(tt(d)),
                value: d,
                ref_for: !0,
                ref_key: "monthRefs",
                ref: $e,
                onClick: (j) => Me(d)
              }, [
                t("div", Wt, _(x[d]), 1),
                Et
              ], 10, Ut))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: h(n(He)),
            ref_key: "dayPicker",
            ref: m
          }, [
            Jt,
            t("div", {
              class: "options",
              ref_key: "dayOptions",
              ref: ve
            }, [
              (o(!0), u(R, null, N(n(D), (d) => (o(), u("div", {
                class: h(lt(d)),
                value: d,
                ref_for: !0,
                ref_key: "dayRefs",
                ref: Se,
                onClick: (j) => Oe(d)
              }, [
                t("div", Gt, _(d), 1),
                Kt
              ], 10, qt))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: h(n(Ue)),
            ref_key: "hourPicker",
            ref: y
          }, [
            Qt,
            t("div", {
              class: "options",
              ref_key: "hourOptions",
              ref: ge
            }, [
              (o(!0), u(R, null, N(n(S), (d) => (o(), u("div", {
                class: h(at(d)),
                value: d,
                ref_for: !0,
                ref_key: "hourRefs",
                ref: Ce,
                onClick: (j) => Ie(d)
              }, [
                t("div", Zt, _(d), 1),
                el
              ], 10, Xt))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: h(n(We)),
            ref_key: "minutePicker",
            ref: w
          }, [
            tl,
            t("div", {
              class: "options",
              ref_key: "minuteOptions",
              ref: _e
            }, [
              (o(!0), u(R, null, N(n(C), (d) => (o(), u("div", {
                class: h(st(d)),
                value: d,
                ref_for: !0,
                ref_key: "minuteRefs",
                ref: Te,
                onClick: (j) => Be(d)
              }, [
                t("div", al, _(d), 1),
                sl
              ], 10, ll))), 256))
            ], 512)
          ], 2),
          t("div", {
            class: h(n(Ee)),
            ref_key: "secondPicker",
            ref: $
          }, [
            nl,
            t("div", {
              class: "options",
              ref_key: "secondOptions",
              ref: be
            }, [
              (o(!0), u(R, null, N(n(T), (d) => (o(), u("div", {
                class: h(nt(d)),
                value: d,
                ref_for: !0,
                ref_key: "secondRefs",
                ref: we,
                onClick: (j) => Ae(d)
              }, [
                t("div", il, _(d), 1)
              ], 10, ol))), 256))
            ], 512)
          ], 2)
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), u("div", ul, _(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, cl = /* @__PURE__ */ U(rl, [["__scopeId", "data-v-f0bec40b"]]), va = {
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
    const l = e, s = i({
      get: () => l.modelValue,
      set: (r) => {
        f("update:modelValue", r);
      }
    });
    return ne(() => {
    }), (r, v) => (o(), oe(cl, {
      modelValue: n(s),
      "onUpdate:modelValue": v[0] || (v[0] = (p) => he(s) ? s.value = p : null),
      min: e.min,
      max: e.max,
      label: e.label,
      "display-time": !1,
      disabled: e.disabled,
      "error-message": e.errorMessage
    }, null, 8, ["modelValue", "min", "max", "label", "disabled", "error-message"]));
  }
};
const dl = { class: "input-label" }, fl = { class: "input-field" }, vl = ["type", "value", "disabled"], pl = {
  key: 0,
  class: "input-error"
}, ml = {
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
    const f = e, l = i(() => {
      const s = [];
      return s.push("input-control"), f.disabled && s.push("disabled"), s.join(" ");
    });
    return (s, r) => (o(), u("div", {
      class: h(n(l))
    }, [
      t("div", dl, _(e.label), 1),
      t("div", fl, [
        t("input", {
          type: e.type,
          class: h(e.size),
          value: e.modelValue,
          disabled: e.disabled,
          onInput: r[0] || (r[0] = (v) => s.$emit("update:modelValue", v.target.value))
        }, null, 42, vl)
      ]),
      e.errorMessage.length > 0 ? (o(), u("div", pl, _(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, pa = /* @__PURE__ */ U(ml, [["__scopeId", "data-v-56a1e413"]]);
const hl = ["value"], yl = {
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
    const l = e, s = i(() => l.selected ? `option selected ${l.size}`.trim() : `option ${l.size}`.trim());
    return (r, v) => (o(), u("div", {
      class: h(n(s)),
      value: e.value,
      onClick: v[0] || (v[0] = (p) => r.$emit("select", e.value))
    }, _(e.label), 11, hl));
  }
}, gl = /* @__PURE__ */ U(yl, [["__scopeId", "data-v-1fa7fb5e"]]);
const _l = (e) => (de("data-v-b1367cdb"), e = e(), fe(), e), bl = { class: "input-label" }, kl = ["name"], $l = { class: "selected" }, Sl = /* @__PURE__ */ _l(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-down" }),
  /* @__PURE__ */ t("i", { class: "fa-solid fa-caret-up" })
], -1)), Cl = { class: "options" }, Tl = {
  key: 0,
  class: "input-error"
}, wl = {
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
    const l = e, s = c("collapsed"), r = c(""), v = i(() => {
      const S = [];
      return S.push("input-control"), l.size && S.push(l.size), l.disabled && S.push("disabled"), S.join(" ");
    }), p = i(() => `input-field ${s.value}`.trim()), g = i(() => {
      const S = l.options.find((C) => C.value === r.value);
      return S ? S.label : "";
    });
    function b() {
      l.disabled || (s.value === "collapsed" ? s.value = "expanded" : s.value = "collapsed");
    }
    function x(S) {
      return S === r.value;
    }
    function D(S) {
      s.value = "collapsed", r.value = S, f("update:modelValue", S);
    }
    return ne(() => {
      D(l.modelValue);
    }), (S, C) => (o(), u("div", {
      class: h(n(v))
    }, [
      t("div", bl, _(e.label), 1),
      t("div", {
        class: h(n(p))
      }, [
        t("div", {
          class: "select",
          name: e.name,
          onClick: b
        }, [
          t("div", $l, _(n(g)), 1),
          Sl
        ], 8, kl),
        t("div", Cl, [
          (o(!0), u(R, null, N(e.options, (T) => (o(), oe(gl, {
            value: T.value,
            label: T.label,
            size: e.size,
            selected: x(T.value),
            onSelect: (k) => D(T.value)
          }, null, 8, ["value", "label", "size", "selected", "onSelect"]))), 256))
        ])
      ], 2),
      e.errorMessage.length > 0 ? (o(), u("div", Tl, _(e.errorMessage), 1)) : P("", !0)
    ], 2));
  }
}, ma = /* @__PURE__ */ U(wl, [["__scopeId", "data-v-b1367cdb"]]);
const Vl = { class: "progress-bar" }, Dl = {
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
    const f = e, l = c("forward"), s = c("forwardBar"), r = c("reverseBar"), v = c(), p = i(() => `bar forward-bar ${l.value}`), g = i(() => f.bidirection ? `bar reverse-bar ${l.value}` : "bar reverse-bar hide");
    ne(() => {
      v.value = setInterval(x, f.speed);
    });
    function b(k) {
      return k ? parseInt(k.style.width.split("%")[0]) : 0;
    }
    function x() {
      f.bidirection ? S() : D();
    }
    function D() {
      const k = b(s.value);
      k === 100 ? f.indefinite ? C(s.value) : clearInterval(v.value) : T(s.value, "forward", k);
    }
    function S() {
      const k = b(s.value), M = b(r.value);
      l.value === "forward" && k === 100 ? (l.value = "reverse", T(s.value, "reverse", k), T(r.value, "forward", M)) : l.value === "reverse" && M === 100 ? (l.value = "forward", T(s.value, "forward", k), T(r.value, "reverse", M)) : l.value === "forward" ? (T(s.value, "forward", k), T(r.value, "reverse", M)) : l.value === "reverse" && (T(s.value, "reverse", k), T(r.value, "forward", M));
    }
    function C(k) {
      k.style.width = "0%";
    }
    function T(k, M, m) {
      k && (M === "forward" ? k.style.width = [(m + f.step).toString(), "%"].join("") : k.style.width = [(m - f.step).toString(), "%"].join(""));
    }
    return (k, M) => (o(), u("div", Vl, [
      t("div", {
        class: h(n(p)),
        style: { width: "0%" },
        ref_key: "forwardBar",
        ref: s
      }, null, 2),
      t("div", {
        class: h(n(g)),
        style: { width: "100%" },
        ref_key: "reverseBar",
        ref: r
      }, null, 2)
    ]));
  }
}, xl = /* @__PURE__ */ U(Dl, [["__scopeId", "data-v-8639eecf"]]);
const ze = (e) => (de("data-v-ca5707e4"), e = e(), fe(), e), Pl = { class: "table-container" }, Ml = { class: "table-actions" }, Ol = { class: "actions" }, Il = ["onClick"], Bl = { class: "tooltip" }, Al = { class: "header" }, Rl = { class: "row" }, Nl = { class: "col" }, zl = {
  key: 0,
  class: "col"
}, Fl = {
  key: 0,
  class: "loading"
}, Yl = ["colspan"], Ll = { class: "body" }, jl = { class: "col" }, Hl = {
  key: 0,
  class: "col"
}, Ul = { class: "actions" }, Wl = ["onClick"], El = { class: "tooltip" }, Jl = { class: "pagination" }, ql = /* @__PURE__ */ ze(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-left" }, null, -1)), Gl = { class: "page-number" }, Kl = {
  key: 0,
  class: "current"
}, Ql = { class: "current" }, Xl = /* @__PURE__ */ ze(() => /* @__PURE__ */ t("i", { class: "fa-solid fa-chevron-right" }, null, -1)), Zl = {
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
    const l = e, s = c(0), r = c(l.pagination.limit), v = i(() => l.pagination.client ? !1 : l.loading), p = i(() => l.headers.length + (l.actions.length > 0 ? 1 : 0)), g = i(() => l.name && l.name.length > 0 ? "table-name show" : "table-name hide"), b = i(() => l.dense ? "table dense" : "table");
    function x(y) {
      return y % 2 === 0 ? "row even" : "row odd";
    }
    const D = i(() => l.pagination.client ? l.data.length : l.totalData), S = i(() => l.pagination.client ? l.data.slice(s.value, s.value + r.value) : l.data), C = i(() => s.value + r.value > D.value ? {
      start: s.value + 1,
      end: D.value
    } : {
      start: s.value + 1,
      end: s.value + r.value
    }), T = i(() => C.value.start === 1 ? "pager left" : "pager left show"), k = i(() => C.value.end === D.value ? "pager right" : "pager right show");
    function M() {
      C.value.start === 1 || (s.value - r.value < 0 ? s.value = 0 : s.value = s.value - r.value), f("offsetChange", s.value);
    }
    function m() {
      C.value.end === D.value || (s.value = s.value + r.value), f("offsetChange", s.value);
    }
    return (y, w) => (o(), u("div", Pl, [
      t("div", Ml, [
        V(y.$slots, "table-actions", B(A({ name: e.name, actions: e.tableActions })), () => [
          t("div", {
            class: h(n(g))
          }, [
            V(y.$slots, "table-name", B(A({ name: e.name })), () => [
              re(_(e.name), 1)
            ], !0)
          ], 2),
          t("div", Ol, [
            (o(!0), u(R, null, N(e.tableActions, ($) => (o(), u("div", {
              class: "action",
              onClick: (I) => $.click(e.data)
            }, [
              V(y.$slots, "table-action", B(A({ action: $, data: e.data })), () => [
                t("i", {
                  class: h($.icon)
                }, null, 2),
                t("span", Bl, _($.name), 1)
              ], !0)
            ], 8, Il))), 256))
          ])
        ], !0)
      ]),
      t("table", {
        class: h(n(b))
      }, [
        t("thead", Al, [
          t("tr", Rl, [
            V(y.$slots, "header-row", B(A({ headers: e.headers, actions: e.actions })), () => [
              (o(!0), u(R, null, N(e.headers, ($, I) => (o(), u("th", Nl, [
                V(y.$slots, `header-col.${$.key}`, B(A({ header: $, i: I })), () => [
                  re(_($.label), 1)
                ], !0)
              ]))), 256)),
              e.actions.length > 0 ? (o(), u("th", zl, [
                V(y.$slots, "header-actions", B(A({ actions: e.actions })), void 0, !0)
              ])) : P("", !0)
            ], !0)
          ]),
          n(v) ? (o(), u("tr", Fl, [
            V(y.$slots, "progress-bar", B(A({ headers: e.headers, actions: e.actions, span: n(p) })), () => [
              t("th", { colspan: n(p) }, [
                se(xl)
              ], 8, Yl)
            ], !0)
          ])) : P("", !0)
        ]),
        t("tbody", Ll, [
          n(v) ? P("", !0) : (o(!0), u(R, { key: 0 }, N(n(S), ($, I) => (o(), u("tr", {
            class: h(x(I))
          }, [
            V(y.$slots, "data-row", B(A({ headers: e.headers, row: $, actions: e.actions, i: I })), () => [
              V(y.$slots, "data-content", B(A({ headers: e.headers, row: $, i: I })), () => [
                (o(!0), u(R, null, N(e.headers, (H) => (o(), u("td", jl, [
                  V(y.$slots, `data-col.${H.key}`, B(A({ header: H, row: $, i: I })), () => [
                    re(_($[H.key]), 1)
                  ], !0)
                ]))), 256))
              ], !0),
              e.actions.length > 0 ? (o(), u("td", Hl, [
                V(y.$slots, "data-actions", B(A({ row: $, actions: e.actions, i: I })), () => [
                  t("div", Ul, [
                    (o(!0), u(R, null, N(e.actions, (H) => (o(), u("div", {
                      class: "action",
                      onClick: (ve) => H.click($, I)
                    }, [
                      V(y.$slots, "data-action", B(A({ row: $, action: H, i: I })), () => [
                        t("i", {
                          class: h(H.icon)
                        }, null, 2),
                        t("span", El, _(H.name), 1)
                      ], !0)
                    ], 8, Wl))), 256))
                  ])
                ], !0)
              ])) : P("", !0)
            ], !0)
          ], 2))), 256))
        ])
      ], 2),
      t("div", Jl, [
        V(y.$slots, "pagination", B(A({ pageLeft: M, pageRight: m, start: n(C).start, end: n(C).end, total: n(D) })), () => [
          t("div", {
            class: h(n(T)),
            onClick: w[0] || (w[0] = ($) => M())
          }, [
            V(y.$slots, "pager-left", {}, () => [
              ql
            ], !0)
          ], 2),
          t("div", Gl, [
            V(y.$slots, "page-number", B(A({ start: n(C).start, end: n(C).end, total: n(D) })), () => [
              n(C).start !== n(C).end ? (o(), u("span", Kl, _(n(C).start) + " - ", 1)) : P("", !0),
              t("span", Ql, _(n(C).end), 1),
              re(" / " + _(n(D)), 1)
            ], !0)
          ]),
          t("div", {
            class: h(n(k)),
            onClick: w[1] || (w[1] = ($) => m())
          }, [
            V(y.$slots, "pager-right", {}, () => [
              Xl
            ], !0)
          ], 2)
        ], !0)
      ])
    ]));
  }
}, ea = /* @__PURE__ */ U(Zl, [["__scopeId", "data-v-ca5707e4"]]);
const ta = (e) => (de("data-v-a74dd1fd"), e = e(), fe(), e), la = { class: "input-label" }, aa = { class: "select" }, sa = { class: "selected" }, na = { class: "tag" }, oa = /* @__PURE__ */ ta(() => /* @__PURE__ */ t("div", { class: "toggle" }, [
  /* @__PURE__ */ t("i", { class: "fa-solid fa-magnifying-glass" })
], -1)), ia = {
  key: 0,
  class: "input-error"
}, ua = {
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
    const l = e, s = c(!1), r = i(() => [
      { key: "value", type: "text", label: "Value" },
      { key: "label", type: "text", label: "Label" }
    ]), v = c([
      {
        name: "Select",
        icon: "",
        click: function(m, y) {
          C(m);
        }
      }
    ]), p = i(() => {
      const m = [];
      return m.push("input-control"), l.size && m.push(l.size), l.disabled && m.push("disabled"), m.join(" ");
    });
    function g(m) {
      return b.value.find((w) => w === m.value) ? "checkbox checked" : "checkbox";
    }
    const b = i(() => l.modelValue ? l.modelValue.map((m) => m.value) : []);
    c({});
    const x = i(() => l.modelValue ? l.modelValue.map((m) => m.label) : []);
    function D() {
      l.disabled || (s.value = !s.value);
    }
    function S() {
      s.value = !1;
    }
    function C(m) {
      l.multiple ? f("update:modelValue", T(m)) : f("update:modelValue", k(m));
    }
    function T(m) {
      const y = Array.from(l.modelValue || []), w = b.value.findIndex(($) => $ === m.value);
      return w < 0 ? y.push({ value: m.value, label: m.label }) : y.splice(w, 1), y;
    }
    function k(m) {
      return Array.from(l.modelValue || []), b.value.findIndex((w) => w === m.value) < 0 ? [{ value: m.value, label: m.label }] : [];
    }
    function M(m) {
      f("offsetChange", m);
    }
    return ne(() => {
    }), (m, y) => (o(), u("div", {
      class: h(n(p))
    }, [
      t("div", la, _(e.label), 1),
      t("div", {
        class: "input-field",
        onClick: D
      }, [
        t("div", aa, [
          (o(!0), u(R, null, N(n(x), (w) => (o(), u("div", sa, [
            t("div", na, _(w), 1)
          ]))), 256))
        ]),
        oa
      ]),
      e.errorMessage.length > 0 ? (o(), u("div", ia, _(e.errorMessage), 1)) : P("", !0),
      se(Ne, { name: "dialog" }, {
        default: K(() => [
          s.value ? (o(), oe(ye, {
            key: 0,
            modelValue: s.value,
            "onUpdate:modelValue": y[1] || (y[1] = (w) => s.value = w),
            title: "Select",
            width: 800,
            height: 600,
            class: "options-dialog"
          }, {
            body: K(() => [
              se(ea, {
                name: e.name,
                headers: n(r),
                data: e.options,
                actions: v.value,
                loading: e.optionsLoading,
                "total-data": e.optionsLength,
                pagination: e.pagination,
                onOffsetChange: M
              }, {
                "data-action": K(({ row: w, action: $, i: I }) => [
                  t("div", {
                    class: h(g(w))
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["name", "headers", "data", "actions", "loading", "total-data", "pagination"])
            ]),
            actions: K(() => [
              se(me, {
                "button-type": "text",
                value: "Done",
                icon: "fa-solid fa-check",
                onClick: y[0] || (y[0] = (w) => S())
              })
            ]),
            _: 1
          }, 8, ["modelValue"])) : P("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}, ha = /* @__PURE__ */ U(ua, [["__scopeId", "data-v-a74dd1fd"]]);
export {
  ca as TAlert,
  me as TButton,
  fa as TCheckbox,
  da as TConfirmDialog,
  va as TDatePicker,
  cl as TDateTimePicker,
  ye as TDialog,
  pa as TInput,
  gl as TOption,
  xl as TProgressBar,
  ma as TSelect,
  ha as TSelectTable,
  ea as TTable
};
