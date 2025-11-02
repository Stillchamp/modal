var Mr = {};
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function gt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = Mr.NODE_ENV !== "production" ? Object.freeze({}) : {}, qt = Mr.NODE_ENV !== "production" ? Object.freeze([]) : [], be = () => {
}, kr = () => !1, xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zn = (e) => e.startsWith("onUpdate:"), de = Object.assign, ii = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, al = Object.prototype.hasOwnProperty, Y = (e, t) => al.call(e, t), $ = Array.isArray, St = (e) => Cn(e) === "[object Map]", Qt = (e) => Cn(e) === "[object Set]", Ai = (e) => Cn(e) === "[object Date]", F = (e) => typeof e == "function", pe = (e) => typeof e == "string", rt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", ri = (e) => (ee(e) || F(e)) && F(e.then) && F(e.catch), $r = Object.prototype.toString, Cn = (e) => $r.call(e), si = (e) => Cn(e).slice(8, -1), fo = (e) => Cn(e) === "[object Object]", li = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = /* @__PURE__ */ gt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ul = /* @__PURE__ */ gt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), po = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, fl = /-\w/g, Ne = po(
  (e) => e.replace(fl, (t) => t.slice(1).toUpperCase())
), dl = /\B([A-Z])/g, Pe = po(
  (e) => e.replace(dl, "-$1").toLowerCase()
), It = po((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = po(
  (e) => e ? `on${It(e)}` : ""
), Et = (e, t) => !Object.is(e, t), Ut = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, zn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Lo = (e) => {
  const t = pe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Mi;
const Dn = () => Mi || (Mi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ye(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = pe(o) ? ml(o) : ye(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (pe(e) || ee(e))
    return e;
}
const pl = /;(?![^(]*\))/g, hl = /:([^]+)/, gl = /\/\*[^]*?\*\//g;
function ml(e) {
  const t = {};
  return e.replace(gl, "").split(pl).forEach((n) => {
    if (n) {
      const o = n.split(hl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Lt(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = Lt(e[n]);
      o && (t += o + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const _l = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", bl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", yl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", vl = /* @__PURE__ */ gt(_l), El = /* @__PURE__ */ gt(bl), Nl = /* @__PURE__ */ gt(yl), wl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ol = /* @__PURE__ */ gt(wl);
function Pr(e) {
  return !!e || e === "";
}
function xl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Bt(e[o], t[o]);
  return n;
}
function Bt(e, t) {
  if (e === t) return !0;
  let n = Ai(e), o = Ai(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = rt(e), o = rt(t), n || o)
    return e === t;
  if (n = $(e), o = $(t), n || o)
    return n && o ? xl(e, t) : !1;
  if (n = ee(e), o = ee(t), n || o) {
    if (!n || !o)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), c = t.hasOwnProperty(s);
      if (l && !c || !l && c || !Bt(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ci(e, t) {
  return e.findIndex((n) => Bt(n, t));
}
const Ir = (e) => !!(e && e.__v_isRef === !0), Fe = (e) => pe(e) ? e : e == null ? "" : $(e) || ee(e) && (e.toString === $r || !F(e.toString)) ? Ir(e) ? Fe(e.value) : JSON.stringify(e, Lr, 2) : String(e), Lr = (e, t) => Ir(t) ? Lr(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[xo(o, r) + " =>"] = i, n),
    {}
  )
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => xo(n))
} : rt(t) ? xo(t) : ee(t) && !$(t) && !fo(t) ? String(t) : t, xo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var le = {};
function Ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let $e;
class Cl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = $e, !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = $e;
      try {
        return $e = this, t();
      } finally {
        $e = n;
      }
    } else le.NODE_ENV !== "production" && Ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = $e, $e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && ($e = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Dl() {
  return $e;
}
let oe;
const Co = /* @__PURE__ */ new WeakSet();
class Br {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $e && $e.active && $e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Co.has(this) && (Co.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ki(this), jr(this);
    const t = oe, n = Ue;
    oe = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      le.NODE_ENV !== "production" && oe !== this && Ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Hr(this), oe = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fi(t);
      this.deps = this.depsTail = void 0, ki(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Co.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Bo(this) && this.run();
  }
  get dirty() {
    return Bo(this);
  }
}
let Rr = 0, fn, dn;
function Fr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = dn, dn = e;
    return;
  }
  e.next = fn, fn = e;
}
function ai() {
  Rr++;
}
function ui() {
  if (--Rr > 0)
    return;
  if (dn) {
    let t = dn;
    for (dn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fn; ) {
    let t = fn;
    for (fn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function jr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hr(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), fi(o), Vl(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function Bo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bn) || (e.globalVersion = bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Bo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = oe, o = Ue;
  oe = e, Ue = !0;
  try {
    jr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Et(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    oe = n, Ue = o, Hr(e), e.flags &= -3;
  }
}
function fi(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), le.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      fi(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const Ur = [];
function qe() {
  Ur.push(Ue), Ue = !1;
}
function Ge() {
  const e = Ur.pop();
  Ue = e === void 0 ? !0 : e;
}
function ki(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = oe;
    oe = void 0;
    try {
      t();
    } finally {
      oe = n;
    }
  }
}
let bn = 0;
class Tl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class di {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, le.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!oe || !Ue || oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== oe)
      n = this.activeLink = new Tl(oe, this), oe.deps ? (n.prevDep = oe.depsTail, oe.depsTail.nextDep = n, oe.depsTail = n) : oe.deps = oe.depsTail = n, Kr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = oe.depsTail, n.nextDep = void 0, oe.depsTail.nextDep = n, oe.depsTail = n, oe.deps === n && (oe.deps = o);
    }
    return le.NODE_ENV !== "production" && oe.onTrack && oe.onTrack(
      de(
        {
          effect: oe
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, bn++, this.notify(t);
  }
  notify(t) {
    ai();
    try {
      if (le.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            de(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ui();
    }
  }
}
function Kr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Kr(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), le.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ro = /* @__PURE__ */ new WeakMap(), At = Symbol(
  le.NODE_ENV !== "production" ? "Object iterate" : ""
), Fo = Symbol(
  le.NODE_ENV !== "production" ? "Map keys iterate" : ""
), yn = Symbol(
  le.NODE_ENV !== "production" ? "Array iterate" : ""
);
function _e(e, t, n) {
  if (Ue && oe) {
    let o = Ro.get(e);
    o || Ro.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new di()), i.map = o, i.key = n), le.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function nt(e, t, n, o, i, r) {
  const s = Ro.get(e);
  if (!s) {
    bn++;
    return;
  }
  const l = (c) => {
    c && (le.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : c.trigger());
  };
  if (ai(), t === "clear")
    s.forEach(l);
  else {
    const c = $(e), p = c && li(n);
    if (c && n === "length") {
      const f = Number(o);
      s.forEach((u, g) => {
        (g === "length" || g === yn || !rt(g) && g >= f) && l(u);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), p && l(s.get(yn)), t) {
        case "add":
          c ? p && l(s.get("length")) : (l(s.get(At)), St(e) && l(s.get(Fo)));
          break;
        case "delete":
          c || (l(s.get(At)), St(e) && l(s.get(Fo)));
          break;
        case "set":
          St(e) && l(s.get(At));
          break;
      }
  }
  ui();
}
function jt(e) {
  const t = J(e);
  return t === e ? t : (_e(t, "iterate", yn), Ae(e) ? t : t.map(we));
}
function ho(e) {
  return _e(e = J(e), "iterate", yn), e;
}
const Sl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Do(this, Symbol.iterator, we);
  },
  concat(...e) {
    return jt(this).concat(
      ...e.map((t) => $(t) ? jt(t) : t)
    );
  },
  entries() {
    return Do(this, "entries", (e) => (e[1] = we(e[1]), e));
  },
  every(e, t) {
    return ct(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ct(this, "filter", e, t, (n) => n.map(we), arguments);
  },
  find(e, t) {
    return ct(this, "find", e, t, we, arguments);
  },
  findIndex(e, t) {
    return ct(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ct(this, "findLast", e, t, we, arguments);
  },
  findLastIndex(e, t) {
    return ct(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ct(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Vo(this, "includes", e);
  },
  indexOf(...e) {
    return Vo(this, "indexOf", e);
  },
  join(e) {
    return jt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Vo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ct(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rn(this, "pop");
  },
  push(...e) {
    return rn(this, "push", e);
  },
  reduce(e, ...t) {
    return $i(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return $i(this, "reduceRight", e, t);
  },
  shift() {
    return rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ct(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rn(this, "splice", e);
  },
  toReversed() {
    return jt(this).toReversed();
  },
  toSorted(e) {
    return jt(this).toSorted(e);
  },
  toSpliced(...e) {
    return jt(this).toSpliced(...e);
  },
  unshift(...e) {
    return rn(this, "unshift", e);
  },
  values() {
    return Do(this, "values", we);
  }
};
function Do(e, t, n) {
  const o = ho(e), i = o[t]();
  return o !== e && !Ae(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Al = Array.prototype;
function ct(e, t, n, o, i, r) {
  const s = ho(e), l = s !== e && !Ae(e), c = s[t];
  if (c !== Al[t]) {
    const u = c.apply(e, r);
    return l ? we(u) : u;
  }
  let p = n;
  s !== e && (l ? p = function(u, g) {
    return n.call(this, we(u), g, e);
  } : n.length > 2 && (p = function(u, g) {
    return n.call(this, u, g, e);
  }));
  const f = c.call(s, p, o);
  return l && i ? i(f) : f;
}
function $i(e, t, n, o) {
  const i = ho(e);
  let r = n;
  return i !== e && (Ae(e) ? n.length > 3 && (r = function(s, l, c) {
    return n.call(this, s, l, c, e);
  }) : r = function(s, l, c) {
    return n.call(this, s, we(l), c, e);
  }), i[t](r, ...o);
}
function Vo(e, t, n) {
  const o = J(e);
  _e(o, "iterate", yn);
  const i = o[t](...n);
  return (i === -1 || i === !1) && Qn(n[0]) ? (n[0] = J(n[0]), o[t](...n)) : i;
}
function rn(e, t, n = []) {
  qe(), ai();
  const o = J(e)[t].apply(e, n);
  return ui(), Ge(), o;
}
const Ml = /* @__PURE__ */ gt("__proto__,__v_isRef,__isVue"), qr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rt)
);
function kl(e) {
  rt(e) || (e = String(e));
  const t = J(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Gr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? Xr : Qr : r ? Yr : zr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = $(t);
    if (!i) {
      let c;
      if (s && (c = Sl[n]))
        return c;
      if (n === "hasOwnProperty")
        return kl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ge(t) ? t : o
    );
    if ((rt(n) ? qr.has(n) : Ml(n)) || (i || _e(t, "get", n), r))
      return l;
    if (ge(l)) {
      const c = s && li(n) ? l : l.value;
      return i && ee(c) ? Ho(c) : c;
    }
    return ee(l) ? i ? Ho(l) : pi(l) : l;
  }
}
class Jr extends Gr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const c = st(r);
      if (!Ae(o) && !st(o) && (r = J(r), o = J(o)), !$(t) && ge(r) && !ge(o))
        return c ? (le.NODE_ENV !== "production" && Ke(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const s = $(t) && li(n) ? Number(n) < t.length : Y(t, n), l = Reflect.set(
      t,
      n,
      o,
      ge(t) ? t : i
    );
    return t === J(i) && (s ? Et(o, r) && nt(t, "set", n, o, r) : nt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = Y(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && nt(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!rt(n) || !qr.has(n)) && _e(t, "has", n), o;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      $(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class Zr extends Gr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return le.NODE_ENV !== "production" && Ke(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return le.NODE_ENV !== "production" && Ke(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const $l = /* @__PURE__ */ new Jr(), Pl = /* @__PURE__ */ new Zr(), Il = /* @__PURE__ */ new Jr(!0), Ll = /* @__PURE__ */ new Zr(!0), jo = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function Bl(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = J(i), s = St(r), l = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, p = i[e](...o), f = n ? jo : t ? Xn : we;
    return !t && _e(
      r,
      "iterate",
      c ? Fo : At
    ), {
      // iterator protocol
      next() {
        const { value: u, done: g } = p.next();
        return g ? { value: u, done: g } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pn(e) {
  return function(...t) {
    if (le.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ke(
        `${It(e)} operation ${n}failed: target is readonly.`,
        J(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Rl(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = J(r), l = J(i);
      e || (Et(i, l) && _e(s, "get", i), _e(s, "get", l));
      const { has: c } = $n(s), p = t ? jo : e ? Xn : we;
      if (c.call(s, i))
        return p(r.get(i));
      if (c.call(s, l))
        return p(r.get(l));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && _e(J(i), "iterate", At), i.size;
    },
    has(i) {
      const r = this.__v_raw, s = J(r), l = J(i);
      return e || (Et(i, l) && _e(s, "has", i), _e(s, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const s = this, l = s.__v_raw, c = J(l), p = t ? jo : e ? Xn : we;
      return !e && _e(c, "iterate", At), l.forEach((f, u) => i.call(r, p(f), p(u), s));
    }
  };
  return de(
    n,
    e ? {
      add: Pn("add"),
      set: Pn("set"),
      delete: Pn("delete"),
      clear: Pn("clear")
    } : {
      add(i) {
        !t && !Ae(i) && !st(i) && (i = J(i));
        const r = J(this);
        return $n(r).has.call(r, i) || (r.add(i), nt(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Ae(r) && !st(r) && (r = J(r));
        const s = J(this), { has: l, get: c } = $n(s);
        let p = l.call(s, i);
        p ? le.NODE_ENV !== "production" && Pi(s, l, i) : (i = J(i), p = l.call(s, i));
        const f = c.call(s, i);
        return s.set(i, r), p ? Et(r, f) && nt(s, "set", i, r, f) : nt(s, "add", i, r), this;
      },
      delete(i) {
        const r = J(this), { has: s, get: l } = $n(r);
        let c = s.call(r, i);
        c ? le.NODE_ENV !== "production" && Pi(r, s, i) : (i = J(i), c = s.call(r, i));
        const p = l ? l.call(r, i) : void 0, f = r.delete(i);
        return c && nt(r, "delete", i, void 0, p), f;
      },
      clear() {
        const i = J(this), r = i.size !== 0, s = le.NODE_ENV !== "production" ? St(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && nt(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Bl(i, e, t);
  }), n;
}
function go(e, t) {
  const n = Rl(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    Y(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Fl = {
  get: /* @__PURE__ */ go(!1, !1)
}, jl = {
  get: /* @__PURE__ */ go(!1, !0)
}, Hl = {
  get: /* @__PURE__ */ go(!0, !1)
}, Wl = {
  get: /* @__PURE__ */ go(!0, !0)
};
function Pi(e, t, n) {
  const o = J(n);
  if (o !== n && t.call(e, o)) {
    const i = si(e);
    Ke(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const zr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap();
function Ul(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Kl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ul(si(e));
}
function pi(e) {
  return st(e) ? e : mo(
    e,
    !1,
    $l,
    Fl,
    zr
  );
}
function ql(e) {
  return mo(
    e,
    !1,
    Il,
    jl,
    Yr
  );
}
function Ho(e) {
  return mo(
    e,
    !0,
    Pl,
    Hl,
    Qr
  );
}
function it(e) {
  return mo(
    e,
    !0,
    Ll,
    Wl,
    Xr
  );
}
function mo(e, t, n, o, i) {
  if (!ee(e))
    return le.NODE_ENV !== "production" && Ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Kl(e);
  if (r === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return i.set(e, l), l;
}
function Mt(e) {
  return st(e) ? Mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function st(e) {
  return !!(e && e.__v_isReadonly);
}
function Ae(e) {
  return !!(e && e.__v_isShallow);
}
function Qn(e) {
  return e ? !!e.__v_raw : !1;
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function Gl(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && zn(e, "__v_skip", !0), e;
}
const we = (e) => ee(e) ? pi(e) : e, Xn = (e) => ee(e) ? Ho(e) : e;
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function me(e) {
  return Jl(e, !1);
}
function Jl(e, t) {
  return ge(e) ? e : new Zl(e, t);
}
class Zl {
  constructor(t, n) {
    this.dep = new di(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : J(t), this._value = n ? t : we(t), this.__v_isShallow = n;
  }
  get value() {
    return le.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Ae(t) || st(t);
    t = o ? t : J(t), Et(t, n) && (this._rawValue = t, this._value = o ? t : we(t), le.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function es(e) {
  return ge(e) ? e.value : e;
}
const zl = {
  get: (e, t, n) => t === "__v_raw" ? e : es(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return ge(i) && !ge(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ts(e) {
  return Mt(e) ? e : new Proxy(e, zl);
}
class Yl {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new di(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    oe !== this)
      return Fr(this, !0), !0;
  }
  get value() {
    const t = le.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Wr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : le.NODE_ENV !== "production" && Ke("Write operation failed: computed value is readonly");
  }
}
function Ql(e, t, n = !1) {
  let o, i;
  return F(e) ? o = e : (o = e.get, i = e.set), new Yl(o, i, n);
}
const In = {}, eo = /* @__PURE__ */ new WeakMap();
let Vt;
function Xl(e, t = !1, n = Vt) {
  if (n) {
    let o = eo.get(n);
    o || eo.set(n, o = []), o.push(e);
  } else le.NODE_ENV !== "production" && !t && Ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function ec(e, t, n = ie) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: l, call: c } = n, p = (S) => {
    (n.onWarn || Ke)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (S) => i ? S : Ae(S) || i === !1 || i === 0 ? pt(S, 1) : pt(S);
  let u, g, _, M, b = !1, W = !1;
  if (ge(e) ? (g = () => e.value, b = Ae(e)) : Mt(e) ? (g = () => f(e), b = !0) : $(e) ? (W = !0, b = e.some((S) => Mt(S) || Ae(S)), g = () => e.map((S) => {
    if (ge(S))
      return S.value;
    if (Mt(S))
      return f(S);
    if (F(S))
      return c ? c(S, 2) : S();
    le.NODE_ENV !== "production" && p(S);
  })) : F(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (_) {
      qe();
      try {
        _();
      } finally {
        Ge();
      }
    }
    const S = Vt;
    Vt = u;
    try {
      return c ? c(e, 3, [M]) : e(M);
    } finally {
      Vt = S;
    }
  } : (g = be, le.NODE_ENV !== "production" && p(e)), t && i) {
    const S = g, q = i === !0 ? 1 / 0 : i;
    g = () => pt(S(), q);
  }
  const G = Dl(), U = () => {
    u.stop(), G && G.active && ii(G.effects, u);
  };
  if (r && t) {
    const S = t;
    t = (...q) => {
      S(...q), U();
    };
  }
  let K = W ? new Array(e.length).fill(In) : In;
  const ne = (S) => {
    if (!(!(u.flags & 1) || !u.dirty && !S))
      if (t) {
        const q = u.run();
        if (i || b || (W ? q.some((re, z) => Et(re, K[z])) : Et(q, K))) {
          _ && _();
          const re = Vt;
          Vt = u;
          try {
            const z = [
              q,
              // pass undefined as the old value when it's changed for the first time
              K === In ? void 0 : W && K[0] === In ? [] : K,
              M
            ];
            K = q, c ? c(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            Vt = re;
          }
        }
      } else
        u.run();
  };
  return l && l(ne), u = new Br(g), u.scheduler = s ? () => s(ne, !1) : ne, M = (S) => Xl(S, !1, u), _ = u.onStop = () => {
    const S = eo.get(u);
    if (S) {
      if (c)
        c(S, 4);
      else
        for (const q of S) q();
      eo.delete(u);
    }
  }, le.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? ne(!0) : K = u.run() : s ? s(ne.bind(null, !0), !0) : u.run(), U.pause = u.pause.bind(u), U.resume = u.resume.bind(u), U.stop = U, U;
}
function pt(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, ge(e))
    pt(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      pt(e[o], t, n);
  else if (Qt(e) || St(e))
    e.forEach((o) => {
      pt(o, t, n);
    });
  else if (fo(e)) {
    for (const o in e)
      pt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && pt(e[o], t, n);
  }
  return e;
}
var h = {};
const kt = [];
function Fn(e) {
  kt.push(e);
}
function jn() {
  kt.pop();
}
let To = !1;
function w(e, ...t) {
  if (To) return;
  To = !0, qe();
  const n = kt.length ? kt[kt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = tc();
  if (o)
    Xt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, l;
          return (l = (s = r.toString) == null ? void 0 : s.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Eo(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...nc(i)), console.warn(...r);
  }
  Ge(), To = !1;
}
function tc() {
  let e = kt[kt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function nc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...oc(n));
  }), t;
}
function oc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Eo(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...ic(e.props), r] : [i + r];
}
function ic(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ns(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ns(e, t, n) {
  return pe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ge(t) ? (t = ns(e, J(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = J(t), n ? t : [`${e}=`, t]);
}
function rc(e, t) {
  h.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? w(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && w(`${t} is NaN - the duration expression might be incorrect.`));
}
const hi = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Xt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Vn(i, t, n);
  }
}
function Je(e, t, n, o) {
  if (F(e)) {
    const i = Xt(e, t, n, o);
    return i && ri(i) && i.catch((r) => {
      Vn(r, t, n);
    }), i;
  }
  if ($(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Je(e[r], t, n, o));
    return i;
  } else h.NODE_ENV !== "production" && w(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Vn(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ie;
  if (t) {
    let l = t.parent;
    const c = t.proxy, p = h.NODE_ENV !== "production" ? hi[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, c, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      qe(), Xt(r, null, 10, [
        e,
        c,
        p
      ]), Ge();
      return;
    }
  }
  sc(e, n, i, o, s);
}
function sc(e, t, n, o = !0, i = !1) {
  if (h.NODE_ENV !== "production") {
    const r = hi[t];
    if (n && Fn(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && jn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const Te = [];
let et = -1;
const Gt = [];
let yt = null, Kt = 0;
const os = /* @__PURE__ */ Promise.resolve();
let to = null;
const lc = 100;
function gi(e) {
  const t = to || os;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cc(e) {
  let t = et + 1, n = Te.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = Te[o], r = vn(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function _o(e) {
  if (!(e.flags & 1)) {
    const t = vn(e), n = Te[Te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vn(n) ? Te.push(e) : Te.splice(cc(t), 0, e), e.flags |= 1, is();
  }
}
function is() {
  to || (to = os.then(ls));
}
function rs(e) {
  $(e) ? Gt.push(...e) : yt && e.id === -1 ? yt.splice(Kt + 1, 0, e) : e.flags & 1 || (Gt.push(e), e.flags |= 1), is();
}
function Ii(e, t, n = et + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Te.length; n++) {
    const o = Te[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || h.NODE_ENV !== "production" && mi(t, o))
        continue;
      Te.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ss(e) {
  if (Gt.length) {
    const t = [...new Set(Gt)].sort(
      (n, o) => vn(n) - vn(o)
    );
    if (Gt.length = 0, yt) {
      yt.push(...t);
      return;
    }
    for (yt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Kt = 0; Kt < yt.length; Kt++) {
      const n = yt[Kt];
      h.NODE_ENV !== "production" && mi(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    yt = null, Kt = 0;
  }
}
const vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ls(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => mi(e, n) : be;
  try {
    for (et = 0; et < Te.length; et++) {
      const n = Te[et];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Xt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; et < Te.length; et++) {
      const n = Te[et];
      n && (n.flags &= -2);
    }
    et = -1, Te.length = 0, ss(e), to = null, (Te.length || Gt.length) && ls(e);
  }
}
function mi(e, t) {
  const n = e.get(t) || 0;
  if (n > lc) {
    const o = t.i, i = o && xi(o.type);
    return Vn(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let We = !1;
const Hn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (Dn().__VUE_HMR_RUNTIME__ = {
  createRecord: So(cs),
  rerender: So(fc),
  reload: So(dc)
});
const Rt = /* @__PURE__ */ new Map();
function ac(e) {
  const t = e.type.__hmrId;
  let n = Rt.get(t);
  n || (cs(t, e.type), n = Rt.get(t)), n.instances.add(e);
}
function uc(e) {
  Rt.get(e.type.__hmrId).instances.delete(e);
}
function cs(e, t) {
  return Rt.has(e) ? !1 : (Rt.set(e, {
    initialDef: no(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function no(e) {
  return el(e) ? e.__vccOpts : e;
}
function fc(e, t) {
  const n = Rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, no(o.type).render = t), o.renderCache = [], We = !0, o.job.flags & 8 || o.update(), We = !1;
  }));
}
function dc(e, t) {
  const n = Rt.get(e);
  if (!n) return;
  t = no(t), Li(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = no(r.type);
    let l = Hn.get(s);
    l || (s !== n.initialDef && Li(s, t), Hn.set(s, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? _o(() => {
      r.job.flags & 8 || (We = !0, r.parent.update(), We = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  rs(() => {
    Hn.clear();
  });
}
function Li(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function So(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ot, cn = [], Wo = !1;
function Tn(e, ...t) {
  ot ? ot.emit(e, ...t) : Wo || cn.push({ event: e, args: t });
}
function as(e, t) {
  var n, o;
  ot = e, ot ? (ot.enabled = !0, cn.forEach(({ event: i, args: r }) => ot.emit(i, ...r)), cn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    as(r, t);
  }), setTimeout(() => {
    ot || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Wo = !0, cn = []);
  }, 3e3)) : (Wo = !0, cn = []);
}
function pc(e, t) {
  Tn("app:init", e, t, {
    Fragment: Se,
    Text: An,
    Comment: he,
    Static: Kn
  });
}
function hc(e) {
  Tn("app:unmount", e);
}
const gc = /* @__PURE__ */ _i(
  "component:added"
  /* COMPONENT_ADDED */
), us = /* @__PURE__ */ _i(
  "component:updated"
  /* COMPONENT_UPDATED */
), mc = /* @__PURE__ */ _i(
  "component:removed"
  /* COMPONENT_REMOVED */
), _c = (e) => {
  ot && typeof ot.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ot.cleanupBuffer(e) && mc(e);
};
// @__NO_SIDE_EFFECTS__
function _i(e) {
  return (t) => {
    Tn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const bc = /* @__PURE__ */ fs(
  "perf:start"
  /* PERFORMANCE_START */
), yc = /* @__PURE__ */ fs(
  "perf:end"
  /* PERFORMANCE_END */
);
function fs(e) {
  return (t, n, o) => {
    Tn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function vc(e, t, n) {
  Tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let xe = null, ds = null;
function oo(e) {
  const t = xe;
  return xe = e, ds = e && e.type.__scopeId || null, t;
}
function io(e, t = xe, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && ao(-1);
    const r = oo(t);
    let s;
    try {
      s = e(...i);
    } finally {
      oo(r), o._d && ao(1);
    }
    return h.NODE_ENV !== "production" && us(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ps(e) {
  ul(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function Bi(e, t) {
  if (xe === null)
    return h.NODE_ENV !== "production" && w("withDirectives can only be used inside render functions."), e;
  const n = vo(xe), o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, l, c = ie] = t[i];
    r && (F(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && pt(s), o.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function wt(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    r && (l.oldValue = r[s].value);
    let c = l.dir[o];
    c && (qe(), Je(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ge());
  }
}
const hs = Symbol("_vte"), gs = (e) => e.__isTeleport, $t = (e) => e && (e.disabled || e.disabled === ""), Ri = (e) => e && (e.defer || e.defer === ""), Fi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ji = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Uo = (e, t) => {
  const n = e && e.to;
  if (pe(n))
    if (t) {
      const o = t(n);
      return h.NODE_ENV !== "production" && !o && !$t(e) && w(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), o;
    } else
      return h.NODE_ENV !== "production" && w(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return h.NODE_ENV !== "production" && !n && !$t(e) && w(`Invalid Teleport target: ${n}`), n;
}, ms = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, o, i, r, s, l, c, p) {
    const {
      mc: f,
      pc: u,
      pbc: g,
      o: { insert: _, querySelector: M, createText: b, createComment: W }
    } = p, G = $t(t.props);
    let { shapeFlag: U, children: K, dynamicChildren: ne } = t;
    if (h.NODE_ENV !== "production" && We && (c = !1, ne = null), e == null) {
      const S = t.el = h.NODE_ENV !== "production" ? W("teleport start") : b(""), q = t.anchor = h.NODE_ENV !== "production" ? W("teleport end") : b("");
      _(S, n, o), _(q, n, o);
      const re = (C, O) => {
        U & 16 && f(
          K,
          C,
          O,
          i,
          r,
          s,
          l,
          c
        );
      }, z = () => {
        const C = t.target = Uo(t.props, M), O = bs(C, t, b, _);
        C ? (s !== "svg" && Fi(C) ? s = "svg" : s !== "mathml" && ji(C) && (s = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(C), G || (re(C, O), Wn(t, !1))) : h.NODE_ENV !== "production" && !G && w(
          "Invalid Teleport target on mount:",
          C,
          `(${typeof C})`
        );
      };
      G && (re(n, q), Wn(t, !0)), Ri(t.props) ? (t.el.__isMounted = !1, Ve(() => {
        z(), delete t.el.__isMounted;
      }, r)) : z();
    } else {
      if (Ri(t.props) && e.el.__isMounted === !1) {
        Ve(() => {
          ms.process(
            e,
            t,
            n,
            o,
            i,
            r,
            s,
            l,
            c,
            p
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, q = t.target = e.target, re = t.targetAnchor = e.targetAnchor, z = $t(e.props), C = z ? n : q, O = z ? S : re;
      if (s === "svg" || Fi(q) ? s = "svg" : (s === "mathml" || ji(q)) && (s = "mathml"), ne ? (g(
        e.dynamicChildren,
        ne,
        C,
        i,
        r,
        s,
        l
      ), gn(e, t, h.NODE_ENV === "production")) : c || u(
        e,
        t,
        C,
        O,
        i,
        r,
        s,
        l,
        !1
      ), G)
        z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ln(
          t,
          n,
          S,
          p,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = Uo(
          t.props,
          M
        );
        B ? Ln(
          t,
          B,
          null,
          p,
          0
        ) : h.NODE_ENV !== "production" && w(
          "Invalid Teleport target on update:",
          q,
          `(${typeof q})`
        );
      } else z && Ln(
        t,
        q,
        re,
        p,
        1
      );
      Wn(t, G);
    }
  },
  remove(e, t, n, { um: o, o: { remove: i } }, r) {
    const {
      shapeFlag: s,
      children: l,
      anchor: c,
      targetStart: p,
      targetAnchor: f,
      target: u,
      props: g
    } = e;
    if (u && (i(p), i(f)), r && i(c), s & 16) {
      const _ = r || !$t(g);
      for (let M = 0; M < l.length; M++) {
        const b = l[M];
        o(
          b,
          t,
          n,
          _,
          !!b.dynamicChildren
        );
      }
    }
  },
  move: Ln,
  hydrate: Ec
};
function Ln(e, t, n, { o: { insert: o }, m: i }, r = 2) {
  r === 0 && o(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: c, children: p, props: f } = e, u = r === 2;
  if (u && o(s, t, n), (!u || $t(f)) && c & 16)
    for (let g = 0; g < p.length; g++)
      i(
        p[g],
        t,
        n,
        2
      );
  u && o(l, t, n);
}
function Ec(e, t, n, o, i, r, {
  o: { nextSibling: s, parentNode: l, querySelector: c, insert: p, createText: f }
}, u) {
  function g(b, W, G, U) {
    W.anchor = u(
      s(b),
      W,
      l(b),
      n,
      o,
      i,
      r
    ), W.targetStart = G, W.targetAnchor = U;
  }
  const _ = t.target = Uo(
    t.props,
    c
  ), M = $t(t.props);
  if (_) {
    const b = _._lpa || _.firstChild;
    if (t.shapeFlag & 16)
      if (M)
        g(
          e,
          t,
          b,
          b && s(b)
        );
      else {
        t.anchor = s(e);
        let W = b;
        for (; W; ) {
          if (W && W.nodeType === 8) {
            if (W.data === "teleport start anchor")
              t.targetStart = W;
            else if (W.data === "teleport anchor") {
              t.targetAnchor = W, _._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          W = s(W);
        }
        t.targetAnchor || bs(_, t, f, p), u(
          b && s(b),
          t,
          _,
          n,
          o,
          i,
          r
        );
      }
    Wn(t, M);
  } else M && t.shapeFlag & 16 && g(e, t, e, s(e));
  return t.anchor && s(t.anchor);
}
const _s = ms;
function Wn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let o, i;
    for (t ? (o = e.el, i = e.anchor) : (o = e.targetStart, i = e.targetAnchor); o && o !== i; )
      o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
    n.ut();
  }
}
function bs(e, t, n, o) {
  const i = t.targetStart = n(""), r = t.targetAnchor = n("");
  return i[hs] = r, e && (o(i, e), o(r, e)), r;
}
const ft = Symbol("_leaveCb"), Bn = Symbol("_enterCb");
function Nc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Cs(() => {
    e.isMounted = !0;
  }), Ds(() => {
    e.isUnmounting = !0;
  }), e;
}
const Be = [Function, Array], ys = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Be,
  onEnter: Be,
  onAfterEnter: Be,
  onEnterCancelled: Be,
  // leave
  onBeforeLeave: Be,
  onLeave: Be,
  onAfterLeave: Be,
  onLeaveCancelled: Be,
  // appear
  onBeforeAppear: Be,
  onAppear: Be,
  onAfterAppear: Be,
  onAppearCancelled: Be
}, vs = (e) => {
  const t = e.subTree;
  return t.component ? vs(t.component) : t;
}, wc = {
  name: "BaseTransition",
  props: ys,
  setup(e, { slots: t }) {
    const n = Oi(), o = Nc();
    return () => {
      const i = t.default && ws(t.default(), !0);
      if (!i || !i.length)
        return;
      const r = Es(i), s = J(e), { mode: l } = s;
      if (h.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && w(`invalid <transition> mode: ${l}`), o.isLeaving)
        return Ao(r);
      const c = Hi(r);
      if (!c)
        return Ao(r);
      let p = Ko(
        c,
        s,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => p = u
      );
      c.type !== he && En(c, p);
      let f = n.subTree && Hi(n.subTree);
      if (f && f.type !== he && !Tt(f, c) && vs(n).type !== he) {
        let u = Ko(
          f,
          s,
          o,
          n
        );
        if (En(f, u), l === "out-in" && c.type !== he)
          return o.isLeaving = !0, u.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, f = void 0;
          }, Ao(r);
        l === "in-out" && c.type !== he ? u.delayLeave = (g, _, M) => {
          const b = Ns(
            o,
            f
          );
          b[String(f.key)] = f, g[ft] = () => {
            _(), g[ft] = void 0, delete p.delayedLeave, f = void 0;
          }, p.delayedLeave = () => {
            M(), delete p.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function Es(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== he) {
        if (h.NODE_ENV !== "production" && n) {
          w(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = o, n = !0, h.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Oc = wc;
function Ns(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Ko(e, t, n, o, i) {
  const {
    appear: r,
    mode: s,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: p,
    onAfterEnter: f,
    onEnterCancelled: u,
    onBeforeLeave: g,
    onLeave: _,
    onAfterLeave: M,
    onLeaveCancelled: b,
    onBeforeAppear: W,
    onAppear: G,
    onAfterAppear: U,
    onAppearCancelled: K
  } = t, ne = String(e.key), S = Ns(n, e), q = (C, O) => {
    C && Je(
      C,
      o,
      9,
      O
    );
  }, re = (C, O) => {
    const B = O[1];
    q(C, O), $(C) ? C.every((k) => k.length <= 1) && B() : C.length <= 1 && B();
  }, z = {
    mode: s,
    persisted: l,
    beforeEnter(C) {
      let O = c;
      if (!n.isMounted)
        if (r)
          O = W || c;
        else
          return;
      C[ft] && C[ft](
        !0
        /* cancelled */
      );
      const B = S[ne];
      B && Tt(e, B) && B.el[ft] && B.el[ft](), q(O, [C]);
    },
    enter(C) {
      let O = p, B = f, k = u;
      if (!n.isMounted)
        if (r)
          O = G || p, B = U || f, k = K || u;
        else
          return;
      let ce = !1;
      const Q = C[Bn] = (P) => {
        ce || (ce = !0, P ? q(k, [C]) : q(B, [C]), z.delayedLeave && z.delayedLeave(), C[Bn] = void 0);
      };
      O ? re(O, [C, Q]) : Q();
    },
    leave(C, O) {
      const B = String(e.key);
      if (C[Bn] && C[Bn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      q(g, [C]);
      let k = !1;
      const ce = C[ft] = (Q) => {
        k || (k = !0, O(), Q ? q(b, [C]) : q(M, [C]), C[ft] = void 0, S[B] === e && delete S[B]);
      };
      S[B] = e, _ ? re(_, [C, ce]) : ce();
    },
    clone(C) {
      const O = Ko(
        C,
        t,
        n,
        o,
        i
      );
      return i && i(O), O;
    }
  };
  return z;
}
function Ao(e) {
  if (Sn(e))
    return e = lt(e), e.children = null, e;
}
function Hi(e) {
  if (!Sn(e))
    return gs(e.type) && e.children ? Es(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && F(n.default))
      return n.default();
  }
}
function En(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, En(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ws(e, t = !1, n) {
  let o = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === Se ? (s.patchFlag & 128 && i++, o = o.concat(
      ws(s.children, t, l)
    )) : (t || s.type !== he) && o.push(l != null ? lt(s, { key: l }) : s);
  }
  if (i > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
// @__NO_SIDE_EFFECTS__
function bi(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function Os(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wi = /* @__PURE__ */ new WeakSet(), ro = /* @__PURE__ */ new WeakMap();
function pn(e, t, n, o, i = !1) {
  if ($(e)) {
    e.forEach(
      (b, W) => pn(
        b,
        t && ($(t) ? t[W] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (hn(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && pn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? vo(o.component) : o.el, s = i ? null : r, { i: l, r: c } = e;
  if (h.NODE_ENV !== "production" && !l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, f = l.refs === ie ? l.refs = {} : l.refs, u = l.setupState, g = J(u), _ = u === ie ? kr : (b) => h.NODE_ENV !== "production" && (Y(g, b) && !ge(g[b]) && w(
    `Template ref "${b}" used on a non-ref value. It will not work in the production build.`
  ), Wi.has(g[b])) ? !1 : Y(g, b), M = (b) => h.NODE_ENV === "production" || !Wi.has(b);
  if (p != null && p !== c) {
    if (Ui(t), pe(p))
      f[p] = null, _(p) && (u[p] = null);
    else if (ge(p)) {
      M(p) && (p.value = null);
      const b = t;
      b.k && (f[b.k] = null);
    }
  }
  if (F(c))
    Xt(c, l, 12, [s, f]);
  else {
    const b = pe(c), W = ge(c);
    if (b || W) {
      const G = () => {
        if (e.f) {
          const U = b ? _(c) ? u[c] : f[c] : M(c) || !e.k ? c.value : f[e.k];
          if (i)
            $(U) && ii(U, r);
          else if ($(U))
            U.includes(r) || U.push(r);
          else if (b)
            f[c] = [r], _(c) && (u[c] = f[c]);
          else {
            const K = [r];
            M(c) && (c.value = K), e.k && (f[e.k] = K);
          }
        } else b ? (f[c] = s, _(c) && (u[c] = s)) : W ? (M(c) && (c.value = s), e.k && (f[e.k] = s)) : h.NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
      };
      if (s) {
        const U = () => {
          G(), ro.delete(e);
        };
        U.id = -1, ro.set(e, U), Ve(U, n);
      } else
        Ui(e), G();
    } else h.NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
  }
}
function Ui(e) {
  const t = ro.get(e);
  t && (t.flags |= 8, ro.delete(e));
}
Dn().requestIdleCallback;
Dn().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, Sn = (e) => e.type.__isKeepAlive;
function xc(e, t) {
  xs(e, "a", t);
}
function Cc(e, t) {
  xs(e, "da", t);
}
function xs(e, t, n = Ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (bo(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Sn(i.parent.vnode) && Dc(o, t, n, i), i = i.parent;
  }
}
function Dc(e, t, n, o) {
  const i = bo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Vs(() => {
    ii(o[t], i);
  }, n);
}
function bo(e, t, n = Ee, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      qe();
      const l = Mn(n), c = Je(t, n, e, s);
      return l(), Ge(), c;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (h.NODE_ENV !== "production") {
    const i = Dt(hi[e].replace(/ hook$/, ""));
    w(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const mt = (e) => (t, n = Ee) => {
  (!wn || e === "sp") && bo(e, (...o) => t(...o), n);
}, Vc = mt("bm"), Cs = mt("m"), Tc = mt(
  "bu"
), Sc = mt("u"), Ds = mt(
  "bum"
), Vs = mt("um"), Ac = mt(
  "sp"
), Mc = mt("rtg"), kc = mt("rtc");
function $c(e, t = Ee) {
  bo("ec", e, t);
}
const Pc = "components", Ts = Symbol.for("v-ndc");
function Ic(e) {
  return pe(e) ? Lc(Pc, e, !1) || e : e || Ts;
}
function Lc(e, t, n = !0, o = !1) {
  const i = xe || Ee;
  if (i) {
    const r = i.type;
    {
      const l = xi(
        r,
        !1
      );
      if (l && (l === t || l === Ne(t) || l === It(Ne(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ki(i[e] || r[e], t) || // global registration
      Ki(i.appContext[e], t)
    );
    return !s && o ? r : (h.NODE_ENV !== "production" && n && !s && w(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), s);
  } else h.NODE_ENV !== "production" && w(
    `resolve${It(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Ki(e, t) {
  return e && (e[t] || e[Ne(t)] || e[It(Ne(t))]);
}
function qo(e, t, n, o) {
  let i;
  const r = n, s = $(e);
  if (s || pe(e)) {
    const l = s && Mt(e);
    let c = !1, p = !1;
    l && (c = !Ae(e), p = st(e), e = ho(e)), i = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++)
      i[f] = t(
        c ? p ? Xn(we(e[f])) : we(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && w(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ee(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, p = l.length; c < p; c++) {
        const f = l[c];
        i[c] = t(e[f], f, c, r);
      }
    }
  else
    i = [];
  return i;
}
const Go = (e) => e ? Qs(e) ? vo(e) : Go(e.parent) : null, Pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? it(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? it(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? it(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? it(e.refs) : e.refs,
    $parent: (e) => Go(e.parent),
    $root: (e) => Go(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ms(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      _o(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gi.bind(e.proxy)),
    $watch: (e) => ma.bind(e)
  })
), yi = (e) => e === "_" || e === "$", Mo = (e, t) => e !== ie && !e.__isScriptSetup && Y(e, t), Ss = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: l, appContext: c } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const _ = s[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Mo(o, t))
          return s[t] = 1, o[t];
        if (i !== ie && Y(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && Y(p, t)
        )
          return s[t] = 3, r[t];
        if (n !== ie && Y(n, t))
          return s[t] = 4, n[t];
        Jo && (s[t] = 0);
      }
    }
    const f = Pt[t];
    let u, g;
    if (f)
      return t === "$attrs" ? (_e(e.attrs, "get", ""), h.NODE_ENV !== "production" && co()) : h.NODE_ENV !== "production" && t === "$slots" && _e(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ie && Y(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, Y(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && xe && (!pe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== ie && yi(t[0]) && Y(i, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === xe && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return Mo(i, t) ? (i[t] = n, !0) : h.NODE_ENV !== "production" && i.__isScriptSetup && Y(i, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ie && Y(o, t) ? (o[t] = n, !0) : Y(e.props, t) ? (h.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r, type: s }
  }, l) {
    let c, p;
    return !!(n[l] || e !== ie && l[0] !== "$" && Y(e, l) || Mo(t, l) || (c = r[0]) && Y(c, l) || Y(o, l) || Y(Pt, l) || Y(i.config.globalProperties, l) || (p = s.__cssModules) && p[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (Ss.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Bc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: be
    });
  }), t;
}
function Rc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: be
    });
  });
}
function Fc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(J(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (yi(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: be
      });
    }
  });
}
function qi(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function jc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Jo = !0;
function Hc(e) {
  const t = Ms(e), n = e.proxy, o = e.ctx;
  Jo = !1, t.beforeCreate && Gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: l,
    provide: c,
    inject: p,
    // lifecycle
    created: f,
    beforeMount: u,
    mounted: g,
    beforeUpdate: _,
    updated: M,
    activated: b,
    deactivated: W,
    beforeDestroy: G,
    beforeUnmount: U,
    destroyed: K,
    unmounted: ne,
    render: S,
    renderTracked: q,
    renderTriggered: re,
    errorCaptured: z,
    serverPrefetch: C,
    // public API
    expose: O,
    inheritAttrs: B,
    // assets
    components: k,
    directives: ce,
    filters: Q
  } = t, P = h.NODE_ENV !== "production" ? jc() : null;
  if (h.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const Z in j)
        P("Props", Z);
  }
  if (p && Wc(p, o, P), s)
    for (const j in s) {
      const Z = s[j];
      F(Z) ? (h.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: Z.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = Z.bind(n), h.NODE_ENV !== "production" && P("Methods", j)) : h.NODE_ENV !== "production" && w(
        `Method "${j}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    h.NODE_ENV !== "production" && !F(i) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = i.call(n, n);
    if (h.NODE_ENV !== "production" && ri(j) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(j))
      h.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = pi(j), h.NODE_ENV !== "production")
      for (const Z in j)
        P("Data", Z), yi(Z[0]) || Object.defineProperty(o, Z, {
          configurable: !0,
          enumerable: !0,
          get: () => j[Z],
          set: be
        });
  }
  if (Jo = !0, r)
    for (const j in r) {
      const Z = r[j], Ze = F(Z) ? Z.bind(n, n) : F(Z.get) ? Z.get.bind(n, n) : be;
      h.NODE_ENV !== "production" && Ze === be && w(`Computed property "${j}" has no getter.`);
      const No = !F(Z) && F(Z.set) ? Z.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : be, en = tt({
        get: Ze,
        set: No
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => en.value,
        set: (Ft) => en.value = Ft
      }), h.NODE_ENV !== "production" && P("Computed", j);
    }
  if (l)
    for (const j in l)
      As(l[j], o, n, j);
  if (c) {
    const j = F(c) ? c.call(n) : c;
    Reflect.ownKeys(j).forEach((Z) => {
      Zc(Z, j[Z]);
    });
  }
  f && Gi(f, e, "c");
  function ae(j, Z) {
    $(Z) ? Z.forEach((Ze) => j(Ze.bind(n))) : Z && j(Z.bind(n));
  }
  if (ae(Vc, u), ae(Cs, g), ae(Tc, _), ae(Sc, M), ae(xc, b), ae(Cc, W), ae($c, z), ae(kc, q), ae(Mc, re), ae(Ds, U), ae(Vs, ne), ae(Ac, C), $(O))
    if (O.length) {
      const j = e.exposed || (e.exposed = {});
      O.forEach((Z) => {
        Object.defineProperty(j, Z, {
          get: () => n[Z],
          set: (Ze) => n[Z] = Ze,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === be && (e.render = S), B != null && (e.inheritAttrs = B), k && (e.components = k), ce && (e.directives = ce), C && Os(e);
}
function Wc(e, t, n = be) {
  $(e) && (e = Zo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    ee(i) ? "default" in i ? r = Un(
      i.from || o,
      i.default,
      !0
    ) : r = Un(i.from || o) : r = Un(i), ge(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, h.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Gi(e, t, n) {
  Je(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function As(e, t, n, o) {
  let i = o.includes(".") ? Us(n, o) : () => n[o];
  if (pe(e)) {
    const r = t[e];
    F(r) ? Zt(i, r) : h.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, r);
  } else if (F(e))
    Zt(i, e.bind(n));
  else if (ee(e))
    if ($(e))
      e.forEach((r) => As(r, t, n, o));
    else {
      const r = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(r) ? Zt(i, r, e) : h.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else h.NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function Ms(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !n && !o ? c = t : (c = {}, i.length && i.forEach(
    (p) => so(c, p, s, !0)
  ), so(c, t, s)), ee(t) && r.set(t, c), c;
}
function so(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && so(e, r, n, !0), i && i.forEach(
    (s) => so(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      h.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Uc[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Uc = {
  data: Ji,
  props: Zi,
  emits: Zi,
  // objects
  methods: an,
  computed: an,
  // lifecycle
  beforeCreate: De,
  created: De,
  beforeMount: De,
  mounted: De,
  beforeUpdate: De,
  updated: De,
  beforeDestroy: De,
  beforeUnmount: De,
  destroyed: De,
  unmounted: De,
  activated: De,
  deactivated: De,
  errorCaptured: De,
  serverPrefetch: De,
  // assets
  components: an,
  directives: an,
  // watch
  watch: qc,
  // provide / inject
  provide: Ji,
  inject: Kc
};
function Ji(e, t) {
  return t ? e ? function() {
    return de(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kc(e, t) {
  return an(Zo(e), Zo(t));
}
function Zo(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function De(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function an(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zi(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    qi(e),
    qi(t ?? {})
  ) : t;
}
function qc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = De(e[o], t[o]);
  return n;
}
function ks() {
  return {
    app: null,
    config: {
      isNativeTag: kr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Gc = 0;
function Jc(e, t) {
  return function(o, i = null) {
    F(o) || (o = de({}, o)), i != null && !ee(i) && (h.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), i = null);
    const r = ks(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const p = r.app = {
      _uid: Gc++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: sr,
      get config() {
        return r.config;
      },
      set config(f) {
        h.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...u) {
        return s.has(f) ? h.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : f && F(f.install) ? (s.add(f), f.install(p, ...u)) : F(f) ? (s.add(f), f(p, ...u)) : h.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(f) {
        return r.mixins.includes(f) ? h.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : r.mixins.push(f), p;
      },
      component(f, u) {
        return h.NODE_ENV !== "production" && ti(f, r.config), u ? (h.NODE_ENV !== "production" && r.components[f] && w(`Component "${f}" has already been registered in target app.`), r.components[f] = u, p) : r.components[f];
      },
      directive(f, u) {
        return h.NODE_ENV !== "production" && ps(f), u ? (h.NODE_ENV !== "production" && r.directives[f] && w(`Directive "${f}" has already been registered in target app.`), r.directives[f] = u, p) : r.directives[f];
      },
      mount(f, u, g) {
        if (c)
          h.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && f.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = p._ceVNode || Oe(o, i);
          return _.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (r.reload = () => {
            const M = lt(_);
            M.el = null, e(M, f, g);
          }), e(_, f, g), c = !0, p._container = f, f.__vue_app__ = p, h.NODE_ENV !== "production" && (p._instance = _.component, pc(p, sr)), vo(_.component);
        }
      },
      onUnmount(f) {
        h.NODE_ENV !== "production" && typeof f != "function" && w(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        c ? (Je(
          l,
          p._instance,
          16
        ), e(null, p._container), h.NODE_ENV !== "production" && (p._instance = null, hc(p)), delete p._container.__vue_app__) : h.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(f, u) {
        return h.NODE_ENV !== "production" && f in r.provides && (Y(r.provides, f) ? w(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ) : w(
          `App already provides property with key "${String(f)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[f] = u, p;
      },
      runWithContext(f) {
        const u = Jt;
        Jt = p;
        try {
          return f();
        } finally {
          Jt = u;
        }
      }
    };
    return p;
  };
}
let Jt = null;
function Zc(e, t) {
  if (!Ee)
    h.NODE_ENV !== "production" && w("provide() can only be used inside setup().");
  else {
    let n = Ee.provides;
    const o = Ee.parent && Ee.parent.provides;
    o === n && (n = Ee.provides = Object.create(o)), n[e] = t;
  }
}
function Un(e, t, n = !1) {
  const o = Oi();
  if (o || Jt) {
    let i = Jt ? Jt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(o && o.proxy) : t;
    h.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const $s = {}, Ps = () => Object.create($s), Is = (e) => Object.getPrototypeOf(e) === $s;
function zc(e, t, n, o = !1) {
  const i = {}, r = Ps();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ls(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  h.NODE_ENV !== "production" && Rs(t || {}, i, e), n ? e.props = o ? i : ql(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Yc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Qc(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, l = J(i), [c] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Yc(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let g = f[u];
        if (yo(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (c)
          if (Y(r, g))
            _ !== r[g] && (r[g] = _, p = !0);
          else {
            const M = Ne(g);
            i[M] = zo(
              c,
              l,
              M,
              _,
              e,
              !1
            );
          }
        else
          _ !== r[g] && (r[g] = _, p = !0);
      }
    }
  } else {
    Ls(e, t, i, r) && (p = !0);
    let f;
    for (const u in l)
      (!t || // for camelCase
      !Y(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Pe(u)) === u || !Y(t, f))) && (c ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (i[u] = zo(
        c,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (r !== l)
      for (const u in r)
        (!t || !Y(t, u)) && (delete r[u], p = !0);
  }
  p && nt(e.attrs, "set", ""), h.NODE_ENV !== "production" && Rs(t || {}, i, e);
}
function Ls(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let c in t) {
      if (un(c))
        continue;
      const p = t[c];
      let f;
      i && Y(i, f = Ne(c)) ? !r || !r.includes(f) ? n[f] = p : (l || (l = {}))[f] = p : yo(e.emitsOptions, c) || (!(c in o) || p !== o[c]) && (o[c] = p, s = !0);
    }
  if (r) {
    const c = J(n), p = l || ie;
    for (let f = 0; f < r.length; f++) {
      const u = r[f];
      n[u] = zo(
        i,
        c,
        u,
        p[u],
        e,
        !Y(p, u)
      );
    }
  }
  return s;
}
function zo(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const l = Y(s, "default");
    if (l && o === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && F(c)) {
        const { propsDefaults: p } = i;
        if (n in p)
          o = p[n];
        else {
          const f = Mn(i);
          o = p[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        o = c;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Pe(n)) && (o = !0));
  }
  return o;
}
const Xc = /* @__PURE__ */ new WeakMap();
function Bs(e, t, n = !1) {
  const o = n ? Xc : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, l = [];
  let c = !1;
  if (!F(e)) {
    const f = (u) => {
      c = !0;
      const [g, _] = Bs(u, t, !0);
      de(s, g), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !c)
    return ee(e) && o.set(e, qt), qt;
  if ($(r))
    for (let f = 0; f < r.length; f++) {
      h.NODE_ENV !== "production" && !pe(r[f]) && w("props must be strings when using array syntax.", r[f]);
      const u = Ne(r[f]);
      zi(u) && (s[u] = ie);
    }
  else if (r) {
    h.NODE_ENV !== "production" && !ee(r) && w("invalid props options", r);
    for (const f in r) {
      const u = Ne(f);
      if (zi(u)) {
        const g = r[f], _ = s[u] = $(g) || F(g) ? { type: g } : de({}, g), M = _.type;
        let b = !1, W = !0;
        if ($(M))
          for (let G = 0; G < M.length; ++G) {
            const U = M[G], K = F(U) && U.name;
            if (K === "Boolean") {
              b = !0;
              break;
            } else K === "String" && (W = !1);
          }
        else
          b = F(M) && M.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = b, _[
          1
          /* shouldCastTrue */
        ] = W, (b || Y(_, "default")) && l.push(u);
      }
    }
  }
  const p = [s, l];
  return ee(e) && o.set(e, p), p;
}
function zi(e) {
  return e[0] !== "$" && !un(e) ? !0 : (h.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ea(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Rs(e, t, n) {
  const o = J(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => Ne(s));
  for (const s in i) {
    let l = i[s];
    l != null && ta(
      s,
      o[s],
      l,
      h.NODE_ENV !== "production" ? it(o) : o,
      !r.includes(s)
    );
  }
}
function ta(e, t, n, o, i) {
  const { type: r, required: s, validator: l, skipCheck: c } = n;
  if (s && i) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !c) {
      let p = !1;
      const f = $(r) ? r : [r], u = [];
      for (let g = 0; g < f.length && !p; g++) {
        const { valid: _, expectedType: M } = oa(t, f[g]);
        u.push(M || ""), p = _;
      }
      if (!p) {
        w(ia(e, t, u));
        return;
      }
    }
    l && !l(t, o) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const na = /* @__PURE__ */ gt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function oa(e, t) {
  let n;
  const o = ea(t);
  if (o === "null")
    n = e === null;
  else if (na(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = ee(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function ia(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(It).join(" | ")}`;
  const i = n[0], r = si(t), s = Yi(t, i), l = Yi(t, r);
  return n.length === 1 && Qi(i) && !ra(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Qi(r) && (o += `with value ${l}.`), o;
}
function Yi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Qi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ra(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const vi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ei = (e) => $(e) ? e.map(He) : [He(e)], sa = (e, t, n) => {
  if (t._n)
    return t;
  const o = io((...i) => (h.NODE_ENV !== "production" && Ee && !(n === null && xe) && !(n && n.root !== Ee.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ei(t(...i))), n);
  return o._c = !1, o;
}, Fs = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (vi(i)) continue;
    const r = e[i];
    if (F(r))
      t[i] = sa(i, r, o);
    else if (r != null) {
      h.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Ei(r);
      t[i] = () => s;
    }
  }
}, js = (e, t) => {
  h.NODE_ENV !== "production" && !Sn(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ei(t);
  e.slots.default = () => n;
}, Yo = (e, t, n) => {
  for (const o in t)
    (n || !vi(o)) && (e[o] = t[o]);
}, la = (e, t, n) => {
  const o = e.slots = Ps();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Yo(o, t, n), n && zn(o, "_", i, !0)) : Fs(t, o);
  } else t && js(e, t);
}, ca = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = ie;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && We ? (Yo(i, t, n), nt(e, "set", "$slots")) : n && l === 1 ? r = !1 : Yo(i, t, n) : (r = !t.$stable, Fs(t, i)), s = t;
  } else t && (js(e, t), s = { default: 1 });
  if (r)
    for (const l in i)
      !vi(l) && s[l] == null && delete i[l];
};
let sn, dt;
function Ht(e, t) {
  e.appContext.config.performance && lo() && dt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && bc(e, t, lo() ? dt.now() : Date.now());
}
function Wt(e, t) {
  if (e.appContext.config.performance && lo()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", i = `<${Eo(e, e.type)}> ${t}`;
    dt.mark(o), dt.measure(i, n, o), dt.clearMeasures(i), dt.clearMarks(n), dt.clearMarks(o);
  }
  h.NODE_ENV !== "production" && yc(e, t, lo() ? dt.now() : Date.now());
}
function lo() {
  return sn !== void 0 || (typeof window < "u" && window.performance ? (sn = !0, dt = window.performance) : sn = !1), sn;
}
function aa() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ve = Oa;
function ua(e) {
  return fa(e);
}
function fa(e, t) {
  aa();
  const n = Dn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && as(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: l,
    createComment: c,
    setText: p,
    setElementText: f,
    parentNode: u,
    nextSibling: g,
    setScopeId: _ = be,
    insertStaticContent: M
  } = e, b = (a, d, m, E = null, y = null, v = null, T = void 0, D = null, x = h.NODE_ENV !== "production" && We ? !1 : !!d.dynamicChildren) => {
    if (a === d)
      return;
    a && !Tt(a, d) && (E = kn(a), _t(a, y, v, !0), a = null), d.patchFlag === -2 && (x = !1, d.dynamicChildren = null);
    const { type: N, ref: R, shapeFlag: A } = d;
    switch (N) {
      case An:
        W(a, d, m, E);
        break;
      case he:
        G(a, d, m, E);
        break;
      case Kn:
        a == null ? U(d, m, E, T) : h.NODE_ENV !== "production" && K(a, d, m, T);
        break;
      case Se:
        ce(
          a,
          d,
          m,
          E,
          y,
          v,
          T,
          D,
          x
        );
        break;
      default:
        A & 1 ? q(
          a,
          d,
          m,
          E,
          y,
          v,
          T,
          D,
          x
        ) : A & 6 ? Q(
          a,
          d,
          m,
          E,
          y,
          v,
          T,
          D,
          x
        ) : A & 64 || A & 128 ? N.process(
          a,
          d,
          m,
          E,
          y,
          v,
          T,
          D,
          x,
          nn
        ) : h.NODE_ENV !== "production" && w("Invalid VNode type:", N, `(${typeof N})`);
    }
    R != null && y ? pn(R, a && a.ref, v, d || a, !d) : R == null && a && a.ref != null && pn(a.ref, null, v, a, !0);
  }, W = (a, d, m, E) => {
    if (a == null)
      o(
        d.el = l(d.children),
        m,
        E
      );
    else {
      const y = d.el = a.el;
      d.children !== a.children && p(y, d.children);
    }
  }, G = (a, d, m, E) => {
    a == null ? o(
      d.el = c(d.children || ""),
      m,
      E
    ) : d.el = a.el;
  }, U = (a, d, m, E) => {
    [a.el, a.anchor] = M(
      a.children,
      d,
      m,
      E,
      a.el,
      a.anchor
    );
  }, K = (a, d, m, E) => {
    if (d.children !== a.children) {
      const y = g(a.anchor);
      S(a), [d.el, d.anchor] = M(
        d.children,
        m,
        y,
        E
      );
    } else
      d.el = a.el, d.anchor = a.anchor;
  }, ne = ({ el: a, anchor: d }, m, E) => {
    let y;
    for (; a && a !== d; )
      y = g(a), o(a, m, E), a = y;
    o(d, m, E);
  }, S = ({ el: a, anchor: d }) => {
    let m;
    for (; a && a !== d; )
      m = g(a), i(a), a = m;
    i(d);
  }, q = (a, d, m, E, y, v, T, D, x) => {
    d.type === "svg" ? T = "svg" : d.type === "math" && (T = "mathml"), a == null ? re(
      d,
      m,
      E,
      y,
      v,
      T,
      D,
      x
    ) : O(
      a,
      d,
      y,
      v,
      T,
      D,
      x
    );
  }, re = (a, d, m, E, y, v, T, D) => {
    let x, N;
    const { props: R, shapeFlag: A, transition: I, dirs: H } = a;
    if (x = a.el = s(
      a.type,
      v,
      R && R.is,
      R
    ), A & 8 ? f(x, a.children) : A & 16 && C(
      a.children,
      x,
      null,
      E,
      y,
      ko(a, v),
      T,
      D
    ), H && wt(a, null, E, "created"), z(x, a, a.scopeId, T, E), R) {
      for (const ue in R)
        ue !== "value" && !un(ue) && r(x, ue, null, R[ue], v, E);
      "value" in R && r(x, "value", null, R.value, v), (N = R.onVnodeBeforeMount) && Xe(N, E, a);
    }
    h.NODE_ENV !== "production" && (zn(x, "__vnode", a, !0), zn(x, "__vueParentComponent", E, !0)), H && wt(a, null, E, "beforeMount");
    const X = da(y, I);
    X && I.beforeEnter(x), o(x, d, m), ((N = R && R.onVnodeMounted) || X || H) && Ve(() => {
      N && Xe(N, E, a), X && I.enter(x), H && wt(a, null, E, "mounted");
    }, y);
  }, z = (a, d, m, E, y) => {
    if (m && _(a, m), E)
      for (let v = 0; v < E.length; v++)
        _(a, E[v]);
    if (y) {
      let v = y.subTree;
      if (h.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Ni(v.children) || v), d === v || Gs(v.type) && (v.ssContent === d || v.ssFallback === d)) {
        const T = y.vnode;
        z(
          a,
          T,
          T.scopeId,
          T.slotScopeIds,
          y.parent
        );
      }
    }
  }, C = (a, d, m, E, y, v, T, D, x = 0) => {
    for (let N = x; N < a.length; N++) {
      const R = a[N] = D ? vt(a[N]) : He(a[N]);
      b(
        null,
        R,
        d,
        m,
        E,
        y,
        v,
        T,
        D
      );
    }
  }, O = (a, d, m, E, y, v, T) => {
    const D = d.el = a.el;
    h.NODE_ENV !== "production" && (D.__vnode = d);
    let { patchFlag: x, dynamicChildren: N, dirs: R } = d;
    x |= a.patchFlag & 16;
    const A = a.props || ie, I = d.props || ie;
    let H;
    if (m && Ot(m, !1), (H = I.onVnodeBeforeUpdate) && Xe(H, m, d, a), R && wt(d, a, m, "beforeUpdate"), m && Ot(m, !0), h.NODE_ENV !== "production" && We && (x = 0, T = !1, N = null), (A.innerHTML && I.innerHTML == null || A.textContent && I.textContent == null) && f(D, ""), N ? (B(
      a.dynamicChildren,
      N,
      D,
      m,
      E,
      ko(d, y),
      v
    ), h.NODE_ENV !== "production" && gn(a, d)) : T || Ze(
      a,
      d,
      D,
      null,
      m,
      E,
      ko(d, y),
      v,
      !1
    ), x > 0) {
      if (x & 16)
        k(D, A, I, m, y);
      else if (x & 2 && A.class !== I.class && r(D, "class", null, I.class, y), x & 4 && r(D, "style", A.style, I.style, y), x & 8) {
        const X = d.dynamicProps;
        for (let ue = 0; ue < X.length; ue++) {
          const se = X[ue], Me = A[se], ke = I[se];
          (ke !== Me || se === "value") && r(D, se, Me, ke, y, m);
        }
      }
      x & 1 && a.children !== d.children && f(D, d.children);
    } else !T && N == null && k(D, A, I, m, y);
    ((H = I.onVnodeUpdated) || R) && Ve(() => {
      H && Xe(H, m, d, a), R && wt(d, a, m, "updated");
    }, E);
  }, B = (a, d, m, E, y, v, T) => {
    for (let D = 0; D < d.length; D++) {
      const x = a[D], N = d[D], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(x, N) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? u(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      b(
        x,
        N,
        R,
        null,
        E,
        y,
        v,
        T,
        !0
      );
    }
  }, k = (a, d, m, E, y) => {
    if (d !== m) {
      if (d !== ie)
        for (const v in d)
          !un(v) && !(v in m) && r(
            a,
            v,
            d[v],
            null,
            y,
            E
          );
      for (const v in m) {
        if (un(v)) continue;
        const T = m[v], D = d[v];
        T !== D && v !== "value" && r(a, v, D, T, y, E);
      }
      "value" in m && r(a, "value", d.value, m.value, y);
    }
  }, ce = (a, d, m, E, y, v, T, D, x) => {
    const N = d.el = a ? a.el : l(""), R = d.anchor = a ? a.anchor : l("");
    let { patchFlag: A, dynamicChildren: I, slotScopeIds: H } = d;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (We || A & 2048) && (A = 0, x = !1, I = null), H && (D = D ? D.concat(H) : H), a == null ? (o(N, m, E), o(R, m, E), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      R,
      y,
      v,
      T,
      D,
      x
    )) : A > 0 && A & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (B(
      a.dynamicChildren,
      I,
      m,
      y,
      v,
      T,
      D
    ), h.NODE_ENV !== "production" ? gn(a, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || y && d === y.subTree) && gn(
        a,
        d,
        !0
        /* shallow */
      )
    )) : Ze(
      a,
      d,
      m,
      R,
      y,
      v,
      T,
      D,
      x
    );
  }, Q = (a, d, m, E, y, v, T, D, x) => {
    d.slotScopeIds = D, a == null ? d.shapeFlag & 512 ? y.ctx.activate(
      d,
      m,
      E,
      T,
      x
    ) : P(
      d,
      m,
      E,
      y,
      v,
      T,
      x
    ) : ae(a, d, x);
  }, P = (a, d, m, E, y, v, T) => {
    const D = a.component = Aa(
      a,
      E,
      y
    );
    if (h.NODE_ENV !== "production" && D.type.__hmrId && ac(D), h.NODE_ENV !== "production" && (Fn(a), Ht(D, "mount")), Sn(a) && (D.ctx.renderer = nn), h.NODE_ENV !== "production" && Ht(D, "init"), ka(D, !1, T), h.NODE_ENV !== "production" && Wt(D, "init"), h.NODE_ENV !== "production" && We && (a.el = null), D.asyncDep) {
      if (y && y.registerDep(D, j, T), !a.el) {
        const x = D.subTree = Oe(he);
        G(null, x, d, m), a.placeholder = x.el;
      }
    } else
      j(
        D,
        a,
        d,
        m,
        y,
        v,
        T
      );
    h.NODE_ENV !== "production" && (jn(), Wt(D, "mount"));
  }, ae = (a, d, m) => {
    const E = d.component = a.component;
    if (Na(a, d, m))
      if (E.asyncDep && !E.asyncResolved) {
        h.NODE_ENV !== "production" && Fn(d), Z(E, d, m), h.NODE_ENV !== "production" && jn();
        return;
      } else
        E.next = d, E.update();
    else
      d.el = a.el, E.vnode = d;
  }, j = (a, d, m, E, y, v, T) => {
    const D = () => {
      if (a.isMounted) {
        let { next: A, bu: I, u: H, parent: X, vnode: ue } = a;
        {
          const Ye = Hs(a);
          if (Ye) {
            A && (A.el = ue.el, Z(a, A, T)), Ye.asyncDep.then(() => {
              a.isUnmounted || D();
            });
            return;
          }
        }
        let se = A, Me;
        h.NODE_ENV !== "production" && Fn(A || a.vnode), Ot(a, !1), A ? (A.el = ue.el, Z(a, A, T)) : A = ue, I && Ut(I), (Me = A.props && A.props.onVnodeBeforeUpdate) && Xe(Me, X, A, ue), Ot(a, !0), h.NODE_ENV !== "production" && Ht(a, "render");
        const ke = er(a);
        h.NODE_ENV !== "production" && Wt(a, "render");
        const ze = a.subTree;
        a.subTree = ke, h.NODE_ENV !== "production" && Ht(a, "patch"), b(
          ze,
          ke,
          // parent may have changed if it's in a teleport
          u(ze.el),
          // anchor may have changed if it's in a fragment
          kn(ze),
          a,
          y,
          v
        ), h.NODE_ENV !== "production" && Wt(a, "patch"), A.el = ke.el, se === null && wa(a, ke.el), H && Ve(H, y), (Me = A.props && A.props.onVnodeUpdated) && Ve(
          () => Xe(Me, X, A, ue),
          y
        ), h.NODE_ENV !== "production" && us(a), h.NODE_ENV !== "production" && jn();
      } else {
        let A;
        const { el: I, props: H } = d, { bm: X, m: ue, parent: se, root: Me, type: ke } = a, ze = hn(d);
        Ot(a, !1), X && Ut(X), !ze && (A = H && H.onVnodeBeforeMount) && Xe(A, se, d), Ot(a, !0);
        {
          Me.ce && // @ts-expect-error _def is private
          Me.ce._def.shadowRoot !== !1 && Me.ce._injectChildStyle(ke), h.NODE_ENV !== "production" && Ht(a, "render");
          const Ye = a.subTree = er(a);
          h.NODE_ENV !== "production" && Wt(a, "render"), h.NODE_ENV !== "production" && Ht(a, "patch"), b(
            null,
            Ye,
            m,
            E,
            a,
            y,
            v
          ), h.NODE_ENV !== "production" && Wt(a, "patch"), d.el = Ye.el;
        }
        if (ue && Ve(ue, y), !ze && (A = H && H.onVnodeMounted)) {
          const Ye = d;
          Ve(
            () => Xe(A, se, Ye),
            y
          );
        }
        (d.shapeFlag & 256 || se && hn(se.vnode) && se.vnode.shapeFlag & 256) && a.a && Ve(a.a, y), a.isMounted = !0, h.NODE_ENV !== "production" && gc(a), d = m = E = null;
      }
    };
    a.scope.on();
    const x = a.effect = new Br(D);
    a.scope.off();
    const N = a.update = x.run.bind(x), R = a.job = x.runIfDirty.bind(x);
    R.i = a, R.id = a.uid, x.scheduler = () => _o(R), Ot(a, !0), h.NODE_ENV !== "production" && (x.onTrack = a.rtc ? (A) => Ut(a.rtc, A) : void 0, x.onTrigger = a.rtg ? (A) => Ut(a.rtg, A) : void 0), N();
  }, Z = (a, d, m) => {
    d.component = a;
    const E = a.vnode.props;
    a.vnode = d, a.next = null, Qc(a, d.props, E, m), ca(a, d.children, m), qe(), Ii(a), Ge();
  }, Ze = (a, d, m, E, y, v, T, D, x = !1) => {
    const N = a && a.children, R = a ? a.shapeFlag : 0, A = d.children, { patchFlag: I, shapeFlag: H } = d;
    if (I > 0) {
      if (I & 128) {
        en(
          N,
          A,
          m,
          E,
          y,
          v,
          T,
          D,
          x
        );
        return;
      } else if (I & 256) {
        No(
          N,
          A,
          m,
          E,
          y,
          v,
          T,
          D,
          x
        );
        return;
      }
    }
    H & 8 ? (R & 16 && tn(N, y, v), A !== N && f(m, A)) : R & 16 ? H & 16 ? en(
      N,
      A,
      m,
      E,
      y,
      v,
      T,
      D,
      x
    ) : tn(N, y, v, !0) : (R & 8 && f(m, ""), H & 16 && C(
      A,
      m,
      E,
      y,
      v,
      T,
      D,
      x
    ));
  }, No = (a, d, m, E, y, v, T, D, x) => {
    a = a || qt, d = d || qt;
    const N = a.length, R = d.length, A = Math.min(N, R);
    let I;
    for (I = 0; I < A; I++) {
      const H = d[I] = x ? vt(d[I]) : He(d[I]);
      b(
        a[I],
        H,
        m,
        null,
        y,
        v,
        T,
        D,
        x
      );
    }
    N > R ? tn(
      a,
      y,
      v,
      !0,
      !1,
      A
    ) : C(
      d,
      m,
      E,
      y,
      v,
      T,
      D,
      x,
      A
    );
  }, en = (a, d, m, E, y, v, T, D, x) => {
    let N = 0;
    const R = d.length;
    let A = a.length - 1, I = R - 1;
    for (; N <= A && N <= I; ) {
      const H = a[N], X = d[N] = x ? vt(d[N]) : He(d[N]);
      if (Tt(H, X))
        b(
          H,
          X,
          m,
          null,
          y,
          v,
          T,
          D,
          x
        );
      else
        break;
      N++;
    }
    for (; N <= A && N <= I; ) {
      const H = a[A], X = d[I] = x ? vt(d[I]) : He(d[I]);
      if (Tt(H, X))
        b(
          H,
          X,
          m,
          null,
          y,
          v,
          T,
          D,
          x
        );
      else
        break;
      A--, I--;
    }
    if (N > A) {
      if (N <= I) {
        const H = I + 1, X = H < R ? d[H].el : E;
        for (; N <= I; )
          b(
            null,
            d[N] = x ? vt(d[N]) : He(d[N]),
            m,
            X,
            y,
            v,
            T,
            D,
            x
          ), N++;
      }
    } else if (N > I)
      for (; N <= A; )
        _t(a[N], y, v, !0), N++;
    else {
      const H = N, X = N, ue = /* @__PURE__ */ new Map();
      for (N = X; N <= I; N++) {
        const Ce = d[N] = x ? vt(d[N]) : He(d[N]);
        Ce.key != null && (h.NODE_ENV !== "production" && ue.has(Ce.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(Ce.key),
          "Make sure keys are unique."
        ), ue.set(Ce.key, N));
      }
      let se, Me = 0;
      const ke = I - X + 1;
      let ze = !1, Ye = 0;
      const on = new Array(ke);
      for (N = 0; N < ke; N++) on[N] = 0;
      for (N = H; N <= A; N++) {
        const Ce = a[N];
        if (Me >= ke) {
          _t(Ce, y, v, !0);
          continue;
        }
        let Qe;
        if (Ce.key != null)
          Qe = ue.get(Ce.key);
        else
          for (se = X; se <= I; se++)
            if (on[se - X] === 0 && Tt(Ce, d[se])) {
              Qe = se;
              break;
            }
        Qe === void 0 ? _t(Ce, y, v, !0) : (on[Qe - X] = N + 1, Qe >= Ye ? Ye = Qe : ze = !0, b(
          Ce,
          d[Qe],
          m,
          null,
          y,
          v,
          T,
          D,
          x
        ), Me++);
      }
      const Vi = ze ? pa(on) : qt;
      for (se = Vi.length - 1, N = ke - 1; N >= 0; N--) {
        const Ce = X + N, Qe = d[Ce], Ti = d[Ce + 1], Si = Ce + 1 < R ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ti.el || Ti.placeholder
        ) : E;
        on[N] === 0 ? b(
          null,
          Qe,
          m,
          Si,
          y,
          v,
          T,
          D,
          x
        ) : ze && (se < 0 || N !== Vi[se] ? Ft(Qe, m, Si, 2) : se--);
      }
    }
  }, Ft = (a, d, m, E, y = null) => {
    const { el: v, type: T, transition: D, children: x, shapeFlag: N } = a;
    if (N & 6) {
      Ft(a.component.subTree, d, m, E);
      return;
    }
    if (N & 128) {
      a.suspense.move(d, m, E);
      return;
    }
    if (N & 64) {
      T.move(a, d, m, nn);
      return;
    }
    if (T === Se) {
      o(v, d, m);
      for (let A = 0; A < x.length; A++)
        Ft(x[A], d, m, E);
      o(a.anchor, d, m);
      return;
    }
    if (T === Kn) {
      ne(a, d, m);
      return;
    }
    if (E !== 2 && N & 1 && D)
      if (E === 0)
        D.beforeEnter(v), o(v, d, m), Ve(() => D.enter(v), y);
      else {
        const { leave: A, delayLeave: I, afterLeave: H } = D, X = () => {
          a.ctx.isUnmounted ? i(v) : o(v, d, m);
        }, ue = () => {
          v._isLeaving && v[ft](
            !0
            /* cancelled */
          ), A(v, () => {
            X(), H && H();
          });
        };
        I ? I(v, X, ue) : ue();
      }
    else
      o(v, d, m);
  }, _t = (a, d, m, E = !1, y = !1) => {
    const {
      type: v,
      props: T,
      ref: D,
      children: x,
      dynamicChildren: N,
      shapeFlag: R,
      patchFlag: A,
      dirs: I,
      cacheIndex: H
    } = a;
    if (A === -2 && (y = !1), D != null && (qe(), pn(D, null, m, a, !0), Ge()), H != null && (d.renderCache[H] = void 0), R & 256) {
      d.ctx.deactivate(a);
      return;
    }
    const X = R & 1 && I, ue = !hn(a);
    let se;
    if (ue && (se = T && T.onVnodeBeforeUnmount) && Xe(se, d, a), R & 6)
      cl(a.component, m, E);
    else {
      if (R & 128) {
        a.suspense.unmount(m, E);
        return;
      }
      X && wt(a, null, d, "beforeUnmount"), R & 64 ? a.type.remove(
        a,
        d,
        m,
        nn,
        E
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Se || A > 0 && A & 64) ? tn(
        N,
        d,
        m,
        !1,
        !0
      ) : (v === Se && A & 384 || !y && R & 16) && tn(x, d, m), E && wo(a);
    }
    (ue && (se = T && T.onVnodeUnmounted) || X) && Ve(() => {
      se && Xe(se, d, a), X && wt(a, null, d, "unmounted");
    }, m);
  }, wo = (a) => {
    const { type: d, el: m, anchor: E, transition: y } = a;
    if (d === Se) {
      h.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && y && !y.persisted ? a.children.forEach((T) => {
        T.type === he ? i(T.el) : wo(T);
      }) : ll(m, E);
      return;
    }
    if (d === Kn) {
      S(a);
      return;
    }
    const v = () => {
      i(m), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (a.shapeFlag & 1 && y && !y.persisted) {
      const { leave: T, delayLeave: D } = y, x = () => T(m, v);
      D ? D(a.el, v, x) : x();
    } else
      v();
  }, ll = (a, d) => {
    let m;
    for (; a !== d; )
      m = g(a), i(a), a = m;
    i(d);
  }, cl = (a, d, m) => {
    h.NODE_ENV !== "production" && a.type.__hmrId && uc(a);
    const { bum: E, scope: y, job: v, subTree: T, um: D, m: x, a: N } = a;
    Xi(x), Xi(N), E && Ut(E), y.stop(), v && (v.flags |= 8, _t(T, a, d, m)), D && Ve(D, d), Ve(() => {
      a.isUnmounted = !0;
    }, d), h.NODE_ENV !== "production" && _c(a);
  }, tn = (a, d, m, E = !1, y = !1, v = 0) => {
    for (let T = v; T < a.length; T++)
      _t(a[T], d, m, E, y);
  }, kn = (a) => {
    if (a.shapeFlag & 6)
      return kn(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const d = g(a.anchor || a.el), m = d && d[hs];
    return m ? g(m) : d;
  };
  let Oo = !1;
  const Di = (a, d, m) => {
    a == null ? d._vnode && _t(d._vnode, null, null, !0) : b(
      d._vnode || null,
      a,
      d,
      null,
      null,
      null,
      m
    ), d._vnode = a, Oo || (Oo = !0, Ii(), ss(), Oo = !1);
  }, nn = {
    p: b,
    um: _t,
    m: Ft,
    r: wo,
    mt: P,
    mc: C,
    pc: Ze,
    pbc: B,
    n: kn,
    o: e
  };
  return {
    render: Di,
    hydrate: void 0,
    createApp: Jc(Di)
  };
}
function ko({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function da(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if ($(o) && $(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = vt(i[r]), l.el = s.el), !n && l.patchFlag !== -2 && gn(s, l)), l.type === An && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = s.el), l.type === he && !l.el && (l.el = s.el), h.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function pa(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, l;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const p = e[o];
    if (p !== 0) {
      if (i = n[n.length - 1], e[i] < p) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        l = r + s >> 1, e[n[l]] < p ? r = l + 1 : s = l;
      p < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Hs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Hs(t);
}
function Xi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ha = Symbol.for("v-scx"), ga = () => {
  {
    const e = Un(ha);
    return e || h.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Zt(e, t, n) {
  return h.NODE_ENV !== "production" && !F(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ws(e, t, n);
}
function Ws(e, t, n = ie) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  h.NODE_ENV !== "production" && !t && (o !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = w);
  const c = t && o || !t && r !== "post";
  let p;
  if (wn) {
    if (r === "sync") {
      const _ = ga();
      p = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {
      };
      return _.stop = be, _.resume = be, _.pause = be, _;
    }
  }
  const f = Ee;
  l.call = (_, M, b) => Je(_, f, M, b);
  let u = !1;
  r === "post" ? l.scheduler = (_) => {
    Ve(_, f && f.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (_, M) => {
    M ? _() : _o(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), u && (_.flags |= 2, f && (_.id = f.uid, _.i = f));
  };
  const g = ec(e, t, l);
  return wn && (p ? p.push(g) : c && g()), g;
}
function ma(e, t, n) {
  const o = this.proxy, i = pe(e) ? e.includes(".") ? Us(o, e) : () => o[e] : e.bind(o, o);
  let r;
  F(t) ? r = t : (r = t.handler, n = t);
  const s = Mn(this), l = Ws(i, r.bind(o), n);
  return s(), l;
}
function Us(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const _a = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${Pe(t)}Modifiers`];
function ba(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || ie;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [u]
    } = e;
    if (f)
      if (!(t in f))
        (!u || !(Dt(Ne(t)) in u)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Ne(t))}" prop.`
        );
      else {
        const g = f[t];
        F(g) && (g(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && _a(o, t.slice(7));
  if (s && (s.trim && (i = n.map((f) => pe(f) ? f.trim() : f)), s.number && (i = n.map(Yn))), h.NODE_ENV !== "production" && vc(e, t, i), h.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && o[Dt(f)] && w(
      `Event "${f}" is emitted in component ${Eo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pe(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = o[l = Dt(t)] || // also try camelCase event handler (#2249)
  o[l = Dt(Ne(t))];
  !c && r && (c = o[l = Dt(Pe(t))]), c && Je(
    c,
    e,
    6,
    i
  );
  const p = o[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Je(
      p,
      e,
      6,
      i
    );
  }
}
const ya = /* @__PURE__ */ new WeakMap();
function Ks(e, t, n = !1) {
  const o = n ? ya : t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, l = !1;
  if (!F(e)) {
    const c = (p) => {
      const f = Ks(p, t, !0);
      f && (l = !0, de(s, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (ee(e) && o.set(e, null), null) : ($(r) ? r.forEach((c) => s[c] = null) : de(s, r), ee(e) && o.set(e, s), s);
}
function yo(e, t) {
  return !e || !xn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Pe(t)) || Y(e, t));
}
let Qo = !1;
function co() {
  Qo = !0;
}
function er(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: l,
    emit: c,
    render: p,
    renderCache: f,
    props: u,
    data: g,
    setupState: _,
    ctx: M,
    inheritAttrs: b
  } = e, W = oo(e);
  let G, U;
  h.NODE_ENV !== "production" && (Qo = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = i || o, q = h.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(S, {
        get(re, z, C) {
          return w(
            `Property '${String(
              z
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(re, z, C);
        }
      }) : S;
      G = He(
        p.call(
          q,
          S,
          f,
          h.NODE_ENV !== "production" ? it(u) : u,
          _,
          g,
          M
        )
      ), U = l;
    } else {
      const S = t;
      h.NODE_ENV !== "production" && l === u && co(), G = He(
        S.length > 1 ? S(
          h.NODE_ENV !== "production" ? it(u) : u,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return co(), it(l);
            },
            slots: s,
            emit: c
          } : { attrs: l, slots: s, emit: c }
        ) : S(
          h.NODE_ENV !== "production" ? it(u) : u,
          null
        )
      ), U = t.props ? l : va(l);
    }
  } catch (S) {
    mn.length = 0, Vn(S, e, 1), G = Oe(he);
  }
  let K = G, ne;
  if (h.NODE_ENV !== "production" && G.patchFlag > 0 && G.patchFlag & 2048 && ([K, ne] = qs(G)), U && b !== !1) {
    const S = Object.keys(U), { shapeFlag: q } = K;
    if (S.length) {
      if (q & 7)
        r && S.some(Zn) && (U = Ea(
          U,
          r
        )), K = lt(K, U, !1, !0);
      else if (h.NODE_ENV !== "production" && !Qo && K.type !== he) {
        const re = Object.keys(l), z = [], C = [];
        for (let O = 0, B = re.length; O < B; O++) {
          const k = re[O];
          xn(k) ? Zn(k) || z.push(k[2].toLowerCase() + k.slice(3)) : C.push(k);
        }
        C.length && w(
          `Extraneous non-props attributes (${C.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), z.length && w(
          `Extraneous non-emits event listeners (${z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !tr(K) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), K = lt(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !tr(K) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), En(K, n.transition)), h.NODE_ENV !== "production" && ne ? ne(K) : G = K, oo(W), G;
}
const qs = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Ni(t, !1);
  if (o) {
    if (h.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return qs(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [He(o), s];
};
function Ni(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (zt(i)) {
      if (i.type !== he || i.children === "v-if") {
        if (n)
          return;
        if (n = i, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ni(n.children);
      }
    } else
      return;
  }
  return n;
}
const va = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || xn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ea = (e, t) => {
  const n = {};
  for (const o in e)
    (!Zn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, tr = (e) => e.shapeFlag & 7 || e.type === he;
function Na(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: l, patchFlag: c } = t, p = r.emitsOptions;
  if (h.NODE_ENV !== "production" && (i || l) && We || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? nr(o, s, p) : !!s;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const g = f[u];
        if (s[g] !== o[g] && !yo(p, g))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? nr(o, s, p) : !0 : !!s;
  return !1;
}
function nr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !yo(n, r))
      return !0;
  }
  return !1;
}
function wa({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Gs = (e) => e.__isSuspense;
function Oa(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : rs(e);
}
const Se = Symbol.for("v-fgt"), An = Symbol.for("v-txt"), he = Symbol.for("v-cmt"), Kn = Symbol.for("v-stc"), mn = [];
let Ie = null;
function te(e = !1) {
  mn.push(Ie = e ? null : []);
}
function xa() {
  mn.pop(), Ie = mn[mn.length - 1] || null;
}
let Nn = 1;
function ao(e, t = !1) {
  Nn += e, e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function Js(e) {
  return e.dynamicChildren = Nn > 0 ? Ie || qt : null, xa(), Nn > 0 && Ie && Ie.push(e), e;
}
function fe(e, t, n, o, i, r) {
  return Js(
    V(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function _n(e, t, n, o, i) {
  return Js(
    Oe(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function zt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Hn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ca = (...e) => zs(
  ...e
), Zs = ({ key: e }) => e ?? null, qn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || ge(e) || F(e) ? { i: xe, r: e, k: t, f: !!n } : e : null);
function V(e, t = null, n = null, o = 0, i = null, r = e === Se ? 0 : 1, s = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zs(t),
    ref: t && qn(t),
    scopeId: ds,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return l ? (wi(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), h.NODE_ENV !== "production" && c.key !== c.key && w("VNode created with invalid key (NaN). VNode type:", c.type), Nn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const Oe = h.NODE_ENV !== "production" ? Ca : zs;
function zs(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === Ts) && (h.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = he), zt(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && wi(l, n), Nn > 0 && !r && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag = -2, l;
  }
  if (el(e) && (e = e.__vccOpts), t) {
    t = Da(t);
    let { class: l, style: c } = t;
    l && !pe(l) && (t.class = Lt(l)), ee(c) && (Qn(c) && !$(c) && (c = de({}, c)), t.style = ye(c));
  }
  const s = pe(e) ? 1 : Gs(e) ? 128 : gs(e) ? 64 : ee(e) ? 4 : F(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && s & 4 && Qn(e) && (e = J(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), V(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function Da(e) {
  return e ? Qn(e) || Is(e) ? de({}, e) : e : null;
}
function lt(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: l, transition: c } = e, p = t ? Va(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Zs(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? $(r) ? r.concat(qn(t)) : [r, qn(t)] : qn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && s === -1 && $(l) ? l.map(Ys) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && En(
    f,
    c.clone(f)
  ), f;
}
function Ys(e) {
  const t = lt(e);
  return $(e.children) && (t.children = e.children.map(Ys)), t;
}
function Xo(e = " ", t = 0) {
  return Oe(An, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (te(), _n(he, null, e)) : Oe(he, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? Oe(he) : $(e) ? Oe(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zt(e) ? vt(e) : Oe(An, null, String(e));
}
function vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function wi(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), wi(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Is(t) ? t._ctx = xe : i === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: xe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Xo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Va(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Lt([t.class, o.class]));
      else if (i === "style")
        t.style = ye([t.style, o.style]);
      else if (xn(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !($(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Xe(e, t, n, o = null) {
  Je(e, t, 7, [
    n,
    o
  ]);
}
const Ta = ks();
let Sa = 0;
function Aa(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || Ta, r = {
    uid: Sa++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Cl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Bs(o, i),
    emitsOptions: Ks(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return h.NODE_ENV !== "production" ? r.ctx = Bc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ba.bind(null, r), e.ce && e.ce(r), r;
}
let Ee = null;
const Oi = () => Ee || xe;
let uo, ei;
{
  const e = Dn(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  uo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ee = n
  ), ei = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const Mn = (e) => {
  const t = Ee;
  return uo(e), e.scope.on(), () => {
    e.scope.off(), uo(t);
  };
}, or = () => {
  Ee && Ee.scope.off(), uo(null);
}, Ma = /* @__PURE__ */ gt("slot,component");
function ti(e, { isNativeTag: t }) {
  (Ma(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Qs(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function ka(e, t = !1, n = !1) {
  t && ei(t);
  const { props: o, children: i } = e.vnode, r = Qs(e);
  zc(e, o, r, t), la(e, i, n || t);
  const s = r ? $a(e, t) : void 0;
  return t && ei(!1), s;
}
function $a(e, t) {
  var n;
  const o = e.type;
  if (h.NODE_ENV !== "production") {
    if (o.name && ti(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        ti(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        ps(r[s]);
    }
    o.compilerOptions && Pa() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ss), h.NODE_ENV !== "production" && Rc(e);
  const { setup: i } = o;
  if (i) {
    qe();
    const r = e.setupContext = i.length > 1 ? La(e) : null, s = Mn(e), l = Xt(
      i,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? it(e.props) : e.props,
        r
      ]
    ), c = ri(l);
    if (Ge(), s(), (c || e.sp) && !hn(e) && Os(e), c) {
      if (l.then(or, or), t)
        return l.then((p) => {
          ir(e, p, t);
        }).catch((p) => {
          Vn(p, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const p = (n = o.name) != null ? n : "Anonymous";
        w(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ir(e, l, t);
  } else
    Xs(e, t);
}
function ir(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (h.NODE_ENV !== "production" && zt(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ts(t), h.NODE_ENV !== "production" && Fc(e)) : h.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Xs(e, n);
}
const Pa = () => !0;
function Xs(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || be);
  {
    const i = Mn(e);
    qe();
    try {
      Hc(e);
    } finally {
      Ge(), i();
    }
  }
  h.NODE_ENV !== "production" && !o.render && e.render === be && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", o));
}
const rr = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return co(), _e(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return _e(e, "get", ""), e[t];
  }
};
function Ia(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return _e(e, "get", "$slots"), t[n];
    }
  });
}
function La(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : ge(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, rr));
      },
      get slots() {
        return o || (o = Ia(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, rr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function vo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ts(Gl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Pt)
        return Pt[n](e);
    },
    has(t, n) {
      return n in t || n in Pt;
    }
  })) : e.proxy;
}
const Ba = /(?:^|[-_])\w/g, Ra = (e) => e.replace(Ba, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function xi(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Eo(e, t, n = !1) {
  let o = xi(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Ra(o) : n ? "App" : "Anonymous";
}
function el(e) {
  return F(e) && "__vccOpts" in e;
}
const tt = (e, t) => {
  const n = Ql(e, t, wn);
  if (h.NODE_ENV !== "production") {
    const o = Oi();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function L(e, t, n) {
  try {
    ao(-1);
    const o = arguments.length;
    return o === 2 ? ee(t) && !$(t) ? zt(t) ? Oe(e, null, [t]) : Oe(e, t) : Oe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && zt(n) && (n = [n]), Oe(e, t, n));
  } finally {
    ao(1);
  }
}
function Fa() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!ee(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (ge(u)) {
        qe();
        const g = u.value;
        return Ge(), [
          "div",
          {},
          ["span", e, f(u)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (Mt(u))
          return [
            "div",
            {},
            ["span", e, Ae(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${st(u) ? " (readonly)" : ""}`
          ];
        if (st(u))
          return [
            "div",
            {},
            ["span", e, Ae(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...r(u.$)
        ];
    }
  };
  function r(u) {
    const g = [];
    u.type.props && u.props && g.push(s("props", J(u.props))), u.setupState !== ie && g.push(s("setup", u.setupState)), u.data !== ie && g.push(s("data", J(u.data)));
    const _ = c(u, "computed");
    _ && g.push(s("computed", _));
    const M = c(u, "inject");
    return M && g.push(s("injected", M)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function s(u, g) {
    return g = de({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          l(g[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : ee(u) ? ["object", { object: g ? J(u) : u }] : ["span", n, String(u)];
  }
  function c(u, g) {
    const _ = u.type;
    if (F(_))
      return;
    const M = {};
    for (const b in u.ctx)
      p(_, b, g) && (M[b] = u.ctx[b]);
    return M;
  }
  function p(u, g, _) {
    const M = u[_];
    if ($(M) && M.includes(g) || ee(M) && g in M || u.extends && p(u.extends, g, _) || u.mixins && u.mixins.some((b) => p(b, g, _)))
      return !0;
  }
  function f(u) {
    return Ae(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const sr = "3.5.22", Le = h.NODE_ENV !== "production" ? w : be;
var ve = {};
let ni;
const lr = typeof window < "u" && window.trustedTypes;
if (lr)
  try {
    ni = /* @__PURE__ */ lr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ve.NODE_ENV !== "production" && Le(`Error creating trusted types policy: ${e}`);
  }
const tl = ni ? (e) => ni.createHTML(e) : (e) => e, ja = "http://www.w3.org/2000/svg", Ha = "http://www.w3.org/1998/Math/MathML", ut = typeof document < "u" ? document : null, cr = ut && /* @__PURE__ */ ut.createElement("template"), Wa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? ut.createElementNS(ja, e) : t === "mathml" ? ut.createElementNS(Ha, e) : n ? ut.createElement(e, { is: n }) : ut.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => ut.createTextNode(e),
  createComment: (e) => ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ut.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      cr.innerHTML = tl(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = cr.content;
      if (o === "svg" || o === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, bt = "transition", ln = "animation", On = Symbol("_vtc"), nl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Ua = /* @__PURE__ */ de(
  {},
  ys,
  nl
), Ka = (e) => (e.displayName = "Transition", e.props = Ua, e), oi = /* @__PURE__ */ Ka(
  (e, { slots: t }) => L(Oc, qa(e), t)
), xt = (e, t = []) => {
  $(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ar = (e) => e ? $(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function qa(e) {
  const t = {};
  for (const k in e)
    k in nl || (t[k] = e[k]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: i,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: p = s,
    appearToClass: f = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: _ = `${n}-leave-to`
  } = e, M = Ga(i), b = M && M[0], W = M && M[1], {
    onBeforeEnter: G,
    onEnter: U,
    onEnterCancelled: K,
    onLeave: ne,
    onLeaveCancelled: S,
    onBeforeAppear: q = G,
    onAppear: re = U,
    onAppearCancelled: z = K
  } = t, C = (k, ce, Q, P) => {
    k._enterCancelled = P, Ct(k, ce ? f : l), Ct(k, ce ? p : s), Q && Q();
  }, O = (k, ce) => {
    k._isLeaving = !1, Ct(k, u), Ct(k, _), Ct(k, g), ce && ce();
  }, B = (k) => (ce, Q) => {
    const P = k ? re : U, ae = () => C(ce, k, Q);
    xt(P, [ce, ae]), ur(() => {
      Ct(ce, k ? c : r), at(ce, k ? f : l), ar(P) || fr(ce, o, b, ae);
    });
  };
  return de(t, {
    onBeforeEnter(k) {
      xt(G, [k]), at(k, r), at(k, s);
    },
    onBeforeAppear(k) {
      xt(q, [k]), at(k, c), at(k, p);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(k, ce) {
      k._isLeaving = !0;
      const Q = () => O(k, ce);
      at(k, u), k._enterCancelled ? (at(k, g), hr(k)) : (hr(k), at(k, g)), ur(() => {
        k._isLeaving && (Ct(k, u), at(k, _), ar(ne) || fr(k, o, W, Q));
      }), xt(ne, [k, Q]);
    },
    onEnterCancelled(k) {
      C(k, !1, void 0, !0), xt(K, [k]);
    },
    onAppearCancelled(k) {
      C(k, !0, void 0, !0), xt(z, [k]);
    },
    onLeaveCancelled(k) {
      O(k), xt(S, [k]);
    }
  });
}
function Ga(e) {
  if (e == null)
    return null;
  if (ee(e))
    return [$o(e.enter), $o(e.leave)];
  {
    const t = $o(e);
    return [t, t];
  }
}
function $o(e) {
  const t = Lo(e);
  return ve.NODE_ENV !== "production" && rc(t, "<transition> explicit duration"), t;
}
function at(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[On] || (e[On] = /* @__PURE__ */ new Set())).add(t);
}
function Ct(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[On];
  n && (n.delete(t), n.size || (e[On] = void 0));
}
function ur(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ja = 0;
function fr(e, t, n, o) {
  const i = e._endId = ++Ja, r = () => {
    i === e._endId && o();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: l, propCount: c } = Za(e, t);
  if (!s)
    return o();
  const p = s + "end";
  let f = 0;
  const u = () => {
    e.removeEventListener(p, g), r();
  }, g = (_) => {
    _.target === e && ++f >= c && u();
  };
  setTimeout(() => {
    f < c && u();
  }, l + 1), e.addEventListener(p, g);
}
function Za(e, t) {
  const n = window.getComputedStyle(e), o = (M) => (n[M] || "").split(", "), i = o(`${bt}Delay`), r = o(`${bt}Duration`), s = dr(i, r), l = o(`${ln}Delay`), c = o(`${ln}Duration`), p = dr(l, c);
  let f = null, u = 0, g = 0;
  t === bt ? s > 0 && (f = bt, u = s, g = r.length) : t === ln ? p > 0 && (f = ln, u = p, g = c.length) : (u = Math.max(s, p), f = u > 0 ? s > p ? bt : ln : null, g = f ? f === bt ? r.length : c.length : 0);
  const _ = f === bt && /\b(?:transform|all)(?:,|$)/.test(
    o(`${bt}Property`).toString()
  );
  return {
    type: f,
    timeout: u,
    propCount: g,
    hasTransform: _
  };
}
function dr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => pr(n) + pr(e[o])));
}
function pr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function hr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function za(e, t, n) {
  const o = e[On];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const gr = Symbol("_vod"), Ya = Symbol("_vsh"), Qa = Symbol(ve.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Xa = /(?:^|;)\s*display\s*:/;
function eu(e, t, n) {
  const o = e.style, i = pe(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (pe(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && Gn(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && Gn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), Gn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[Qa];
      s && (n += ";" + s), o.cssText = n, r = Xa.test(n);
    }
  } else t && e.removeAttribute("style");
  gr in e && (e[gr] = r ? o.display : "", e[Ya] && (o.display = "none"));
}
const tu = /[^\\];\s*$/, mr = /\s*!important$/;
function Gn(e, t, n) {
  if ($(n))
    n.forEach((o) => Gn(e, t, o));
  else if (n == null && (n = ""), ve.NODE_ENV !== "production" && tu.test(n) && Le(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = nu(e, t);
    mr.test(n) ? e.setProperty(
      Pe(o),
      n.replace(mr, ""),
      "important"
    ) : e[o] = n;
  }
}
const _r = ["Webkit", "Moz", "ms"], Po = {};
function nu(e, t) {
  const n = Po[t];
  if (n)
    return n;
  let o = Ne(t);
  if (o !== "filter" && o in e)
    return Po[t] = o;
  o = It(o);
  for (let i = 0; i < _r.length; i++) {
    const r = _r[i] + o;
    if (r in e)
      return Po[t] = r;
  }
  return t;
}
const br = "http://www.w3.org/1999/xlink";
function yr(e, t, n, o, i, r = Ol(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(br, t.slice(6, t.length)) : e.setAttributeNS(br, t, n) : n == null || r && !Pr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : rt(n) ? String(n) : n
  );
}
function vr(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? tl(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Pr(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ve.NODE_ENV !== "production" && !s && Le(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function ht(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ou(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Er = Symbol("_vei");
function iu(e, t, n, o, i = null) {
  const r = e[Er] || (e[Er] = {}), s = r[t];
  if (o && s)
    s.value = ve.NODE_ENV !== "production" ? wr(o, t) : o;
  else {
    const [l, c] = ru(t);
    if (o) {
      const p = r[t] = cu(
        ve.NODE_ENV !== "production" ? wr(o, t) : o,
        i
      );
      ht(e, l, p, c);
    } else s && (ou(e, l, s, c), r[t] = void 0);
  }
}
const Nr = /(?:Once|Passive|Capture)$/;
function ru(e) {
  let t;
  if (Nr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Nr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pe(e.slice(2)), t];
}
let Io = 0;
const su = /* @__PURE__ */ Promise.resolve(), lu = () => Io || (su.then(() => Io = 0), Io = Date.now());
function cu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Je(
      au(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = lu(), n;
}
function wr(e, t) {
  return F(e) || $(e) ? e : (Le(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), be);
}
function au(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uu = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? za(e, o, s) : t === "style" ? eu(e, n, o) : xn(t) ? Zn(t) || iu(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fu(e, t, o, s)) ? (vr(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yr(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !pe(o)) ? vr(e, Ne(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), yr(e, t, o, s));
};
function fu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Or(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Or(t) && pe(n) ? !1 : t in e;
}
const xr = {};
// @__NO_SIDE_EFFECTS__
function du(e, t, n) {
  let o = /* @__PURE__ */ bi(e, t);
  fo(o) && (o = de({}, o, t));
  class i extends Ci {
    constructor(s) {
      super(o, s, n);
    }
  }
  return i.def = o, i;
}
const pu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ci extends pu {
  constructor(t, n = {}, o = Ar) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Ar ? this._root = this.shadowRoot : (ve.NODE_ENV !== "production" && this.shadowRoot && Le(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      de({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ci) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, gi(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (o, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: s } = o;
      let l;
      if (r && !$(r))
        for (const c in r) {
          const p = r[c];
          (p === Number || p && p.type === Number) && (c in this._props && (this._props[c] = Lo(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ne(c)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(s) : ve.NODE_ENV !== "production" && s && Le(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ve.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        Y(this, o) ? ve.NODE_ENV !== "production" && Le(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => es(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = $(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && o.includes(i) && this._setProp(i, this[i]);
    for (const i of o.map(Ne))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : xr;
    const i = Ne(t);
    n && this._numberProps && this._numberProps[i] && (o = Lo(o)), this._setProp(i, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, i = !1) {
    if (n !== this._props[t] && (n === xr ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), o)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(Pe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Pe(t), n + "") : n || this.removeAttribute(Pe(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Nu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Oe(this._def, de(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ve.NODE_ENV !== "production" && (o.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this._root.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const i = (r, s) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            fo(s[0]) ? de({ detail: s }, s[0]) : { detail: s }
          )
        );
      };
      o.emit = (r, ...s) => {
        i(r, s), Pe(r) !== r && i(Pe(r), s);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      if (o && r.setAttribute("nonce", o), r.textContent = t[i], this.shadowRoot.prepend(r), ve.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let s = this._childStyles.get(n.__hmrId);
            s || this._childStyles.set(n.__hmrId, s = []), s.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const i = t[o], r = i.getAttribute("name") || "default", s = this._slots[r], l = i.parentNode;
      if (s)
        for (const c of s) {
          if (n && c.nodeType === 1) {
            const p = n + "-s", f = document.createTreeWalker(c, 1);
            c.setAttribute(p, "");
            let u;
            for (; u = f.nextNode(); )
              u.setAttribute(p, "");
          }
          l.insertBefore(c, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    return this._teleportTargets && t.push(...this._teleportTargets), t.reduce((n, o) => (n.push(...Array.from(o.querySelectorAll("slot"))), n), []);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (ve.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const Nt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return $(t) ? (n) => Ut(t, n) : t;
};
function hu(e) {
  e.target.composing = !0;
}
function Cr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Re = Symbol("_assign"), Dr = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[Re] = Nt(i);
    const r = o || i.props && i.props.type === "number";
    ht(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = Yn(l)), e[Re](l);
    }), n && ht(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ht(e, "compositionstart", hu), ht(e, "compositionend", Cr), ht(e, "change", Cr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: i, number: r } }, s) {
    if (e[Re] = Nt(s), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === c) || (e.value = c));
  }
}, gu = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Re] = Nt(n), ht(e, "change", () => {
      const o = e._modelValue, i = Yt(e), r = e.checked, s = e[Re];
      if ($(o)) {
        const l = ci(o, i), c = l !== -1;
        if (r && !c)
          s(o.concat(i));
        else if (!r && c) {
          const p = [...o];
          p.splice(l, 1), s(p);
        }
      } else if (Qt(o)) {
        const l = new Set(o);
        r ? l.add(i) : l.delete(i), s(l);
      } else
        s(il(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Vr,
  beforeUpdate(e, t, n) {
    e[Re] = Nt(n), Vr(e, t, n);
  }
};
function Vr(e, { value: t, oldValue: n }, o) {
  e._modelValue = t;
  let i;
  if ($(t))
    i = ci(t, o.props.value) > -1;
  else if (Qt(t))
    i = t.has(o.props.value);
  else {
    if (t === n) return;
    i = Bt(t, il(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const mu = {
  created(e, { value: t }, n) {
    e.checked = Bt(t, n.props.value), e[Re] = Nt(n), ht(e, "change", () => {
      e[Re](Yt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[Re] = Nt(o), t !== n && (e.checked = Bt(t, o.props.value));
  }
}, ol = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const i = Qt(t);
    ht(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? Yn(Yt(s)) : Yt(s)
      );
      e[Re](
        e.multiple ? i ? new Set(r) : r : r[0]
      ), e._assigning = !0, gi(() => {
        e._assigning = !1;
      });
    }), e[Re] = Nt(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Tr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Re] = Nt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Tr(e, t);
  }
};
function Tr(e, t) {
  const n = e.multiple, o = $(t);
  if (n && !o && !Qt(t)) {
    ve.NODE_ENV !== "production" && Le(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, r = e.options.length; i < r; i++) {
    const s = e.options[i], l = Yt(s);
    if (n)
      if (o) {
        const c = typeof l;
        c === "string" || c === "number" ? s.selected = t.some((p) => String(p) === String(l)) : s.selected = ci(t, l) > -1;
      } else
        s.selected = t.has(l);
    else if (Bt(Yt(s), t)) {
      e.selectedIndex !== i && (e.selectedIndex = i);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Yt(e) {
  return "_value" in e ? e._value : e.value;
}
function il(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const _u = {
  created(e, t, n) {
    Rn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Rn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, o) {
    Rn(e, t, n, o, "beforeUpdate");
  },
  updated(e, t, n, o) {
    Rn(e, t, n, o, "updated");
  }
};
function bu(e, t) {
  switch (e) {
    case "SELECT":
      return ol;
    case "TEXTAREA":
      return Dr;
    default:
      switch (t) {
        case "checkbox":
          return gu;
        case "radio":
          return mu;
        default:
          return Dr;
      }
  }
}
function Rn(e, t, n, o, i) {
  const s = bu(
    e.tagName,
    n.props && n.props.type
  )[i];
  s && s(e, t, n, o);
}
const yu = ["ctrl", "shift", "alt", "meta"], vu = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => yu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Jn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = ((i, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const l = vu[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, Eu = /* @__PURE__ */ de({ patchProp: uu }, Wa);
let Sr;
function rl() {
  return Sr || (Sr = ua(Eu));
}
const Nu = ((...e) => {
  rl().render(...e);
}), Ar = ((...e) => {
  const t = rl().createApp(...e);
  ve.NODE_ENV !== "production" && (Ou(t), xu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = Cu(o);
    if (!i) return;
    const r = t._component;
    !F(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, wu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function wu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ou(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => vl(t) || El(t) || Nl(t),
    writable: !1
  });
}
function xu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Le(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Le(o), n;
      },
      set() {
        Le(o);
      }
    });
  }
}
function Cu(e) {
  if (pe(e)) {
    const t = document.querySelector(e);
    return ve.NODE_ENV !== "production" && !t && Le(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ve.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Le(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Du = {};
function Vu() {
  Fa();
}
Du.NODE_ENV !== "production" && Vu();
const Tu = { key: 0 }, Su = { key: 1 }, Au = { key: 2 }, Mu = { class: "wallet-header-icon" }, ku = ["aria-busy"], $u = {
  class: "icon-container",
  style: { display: "flex", "justify-content": "center", "margin-bottom": "0.1rem" }
}, Pu = {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  style: { stroke: "black" }
}, Iu = {
  class: "support",
  style: { textAlign: "center", marginTop: "auto" }
}, Lu = {
  key: 1,
  class: "update-progress-container"
}, Bu = { class: "progress-icon" }, Ru = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "spin"
}, Fu = ["stroke"], ju = { style: { "margin-top": "10px", "margin-bottom": "10px" } }, Hu = {
  width: "320",
  height: "32",
  viewBox: "0 0 320 32"
}, Wu = ["width", "fill"], Uu = { class: "seed-select-row" }, Ku = ["value"], qu = { class: "seed-input-wrapper" }, Gu = ["type", "onUpdate:modelValue", "placeholder"], Ju = ["onClick", "aria-label"], Zu = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none"
}, zu = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none"
}, Yu = 5e3, Qu = /* @__PURE__ */ bi({
  __name: "Web3WalletModal",
  props: {
    isOpen: { type: Boolean },
    wallet: {}
  },
  emits: ["close", "connect"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = me(!1), r = me(0), s = me(!1), l = [12, 15, 18, 21, 24], c = me([...l]), p = me(12), f = me([]), u = me([]), g = me(!1), _ = { id: null }, M = {
      metamask: {
        loaderBg: "linear-gradient(180deg,#FF9A3C 0%,#D86E1B 100%)",
        innerCardBg: "rgba(255,255,255,0.04)",
        text: "#fff",
        inputBg: "#24180f",
        inputBorder: "#3a250f",
        inputPlaceholder: "#caa68a",
        buttonBg: "#FF9A3C",
        buttonText: "#000",
        layout: "3col",
        loaderType: "ring"
      },
      trust: {
        loaderBg: "linear-gradient(180deg,#0b2c66 0%,#1b4ea8 100%)",
        innerCardBg: "rgba(255,255,255,0.02)",
        text: "#fff",
        inputBg: "#071232",
        inputBorder: "#163165",
        inputPlaceholder: "#9fb6e6",
        buttonBg: "#1b6be0",
        buttonText: "#fff",
        layout: "2col",
        loaderType: "pulse"
      },
      coinbase: {
        loaderBg: "linear-gradient(180deg,#0078ff 0%,#0052cc 100%)",
        innerCardBg: "rgba(255,255,255,0.02)",
        text: "#fff",
        inputBg: "#053164",
        inputBorder: "#1f4db4",
        inputPlaceholder: "#cfe8ff",
        buttonBg: "#fff",
        buttonText: "#0078ff",
        layout: "2col",
        loaderType: "dot"
      },
      ledger: {
        loaderBg: "linear-gradient(180deg,#0b0b0b 0%,#1f1f1f 100%)",
        innerCardBg: "rgba(255,255,255,0.02)",
        text: "#fff",
        inputBg: "#0f1113",
        inputBorder: "#2b2b2b",
        inputPlaceholder: "#7f7f7f",
        buttonBg: "#111",
        buttonText: "#fff",
        layout: "3col",
        loaderType: "ring"
      },
      trezor: {
        loaderBg: "linear-gradient(180deg,#0f2b18 0%,#1f6b3e 100%)",
        innerCardBg: "rgba(255,255,255,0.02)",
        text: "#fff",
        inputBg: "#072518",
        inputBorder: "#114a33",
        inputPlaceholder: "#9fd7b2",
        buttonBg: "#16a76f",
        buttonText: "#fff",
        layout: "2col",
        loaderType: "dot"
      },
      phantom: {
        loaderBg: "linear-gradient(135deg,#3b125b 0%,#8b5cf6 100%)",
        innerCardBg: "rgba(255,255,255,0.02)",
        text: "#fff",
        inputBg: "#221338",
        inputBorder: "#3a1f4d",
        inputPlaceholder: "#d6bef7",
        buttonBg: "#8b5cf6",
        buttonText: "#fff",
        layout: "3col",
        loaderType: "pulse"
      },
      okx: {
        loaderBg: "linear-gradient(180deg,#000000 0%,#2b2b2b 100%)",
        innerCardBg: "rgba(255,255,255,0.02)",
        text: "#fff",
        inputBg: "#0b0b0b",
        inputBorder: "#232323",
        inputPlaceholder: "#9b9b9b",
        buttonBg: "#111",
        buttonText: "#fff",
        layout: "3col",
        loaderType: "ring"
      },
      rabby: {
        loaderBg: "linear-gradient(180deg,#2b1f6a 0%,#644adf 100%)",
        innerCardBg: "rgba(255,255,255,0.03)",
        text: "#fff",
        inputBg: "#1b1533",
        inputBorder: "#3b2b6b",
        inputPlaceholder: "#bfb2ff",
        buttonBg: "#5c46e6",
        buttonText: "#fff",
        layout: "3col",
        loaderType: "pulse"
      },
      uniswap: {
        loaderBg: "linear-gradient(180deg,#ff66b2 0%,#ff007a 100%)",
        innerCardBg: "rgba(255,255,255,0.04)",
        text: "#fff",
        inputBg: "#33021a",
        inputBorder: "#5a0633",
        inputPlaceholder: "#ffcde6",
        buttonBg: "#fff",
        buttonText: "#ff007a",
        layout: "2col",
        loaderType: "dot"
      },
      solflare: {
        loaderBg: "linear-gradient(180deg,#ffb600 0%,#ff8800 100%)",
        innerCardBg: "rgba(0,0,0,0.02)",
        text: "#111",
        inputBg: "#332609",
        inputBorder: "#5a3f0d",
        inputPlaceholder: "#ffe8a3",
        buttonBg: "#ffb600",
        buttonText: "#111",
        layout: "3col",
        loaderType: "ring"
      },
      magiceden: {
        loaderBg: "linear-gradient(180deg,#2b5876 0%,#3a7fa3 100%)",
        innerCardBg: "rgba(255,255,255,0.03)",
        text: "#fff",
        inputBg: "#072a3a",
        inputBorder: "#124e67",
        inputPlaceholder: "#bcdce6",
        buttonBg: "#2eb7f5",
        buttonText: "#fff",
        layout: "3col",
        loaderType: "pulse"
      },
      default: {
        loaderBg: "linear-gradient(180deg,#ffffff 0%,#f3f4f6 100%)",
        innerCardBg: "rgba(0,0,0,0.02)",
        text: "#111",
        inputBg: "#fff",
        inputBorder: "#ddd",
        inputPlaceholder: "#999",
        buttonBg: "#0088cc",
        buttonText: "#fff",
        layout: "2col",
        loaderType: "ring"
      }
    }, b = tt(() => {
      const Q = n.wallet?.id ?? "default";
      return M[Q] || M.default;
    }), W = tt(() => s.value ? { background: b.value.loaderBg } : { background: "#fff" }), G = tt(() => ({
      background: b.value.innerCardBg || "transparent",
      borderRadius: "12px",
      color: b.value.text
    })), U = tt(() => ({
      background: b.value.inputBg,
      border: `1px solid ${b.value.inputBorder}`,
      color: b.value.text
    })), K = tt(() => ({
      background: b.value.inputBg,
      border: `1px solid ${b.value.inputBorder}`,
      color: b.value.text,
      padding: "10px",
      borderRadius: "8px"
    })), ne = tt(() => ({
      background: b.value.buttonBg,
      color: b.value.buttonText,
      marginTop: "12px",
      padding: "12px 18px",
      borderRadius: "10px",
      border: "none",
      width: "100%",
      fontWeight: 700
    })), S = tt(() => b.value.loaderType === "pulse" ? "pulse" : b.value.loaderType === "dot" ? "dot" : "ring"), q = tt(() => {
      const Q = b.value.text;
      return S.value === "ring" ? { borderTopColor: Q } : S.value === "pulse" ? { boxShadow: `0 0 0 0 ${Q}` } : {};
    });
    function re() {
      _.id && (window.clearTimeout(_.id), _.id = null);
    }
    function z(Q) {
      re();
      const P = Q ?? null;
      P === "trust" ? c.value = [12, 24] : P === "ledger" || P === "trezor" ? c.value = [24] : P === "phantom" || P === "solflare" ? c.value = [12] : c.value = [...l], p.value = c.value.length ? c.value[0] : 12, f.value = Array(p.value || 12).fill(""), u.value = Array(p.value || 12).fill(!1), g.value = !0, _.id = window.setTimeout(() => {
        g.value = !1, _.id = null;
      }, Yu);
    }
    Zt(
      () => n.wallet,
      (Q) => {
        n.isOpen && z(Q?.id ?? null);
      },
      { immediate: !0 }
    ), Zt(
      () => n.isOpen,
      (Q) => {
        Q ? z(n.wallet?.id ?? null) : (re(), g.value = !1);
      },
      { immediate: !0 }
    );
    function C(Q) {
      const P = Number(Q.target.value);
      p.value = P, f.value = Array(P).fill(""), u.value = Array(P).fill(!1);
    }
    function O(Q) {
      u.value[Q] = !u.value[Q];
    }
    function B() {
      re(), o("close");
    }
    function k() {
      n.wallet?.id === "trust" ? window.open("https://trustwallet.com/", "_blank") : n.wallet?.id === "metamask" ? window.open("https://support.metamask.io/", "_blank") : window.open("https://support.google.com/", "_blank");
    }
    function ce() {
      i.value = !0, r.value = 0, s.value = !1;
      const Q = 1e4, P = 100;
      let ae = 0;
      const j = window.setInterval(() => {
        ae += P, r.value = Math.min(Math.round(ae / Q * 100), 100), r.value >= 100 && (window.clearInterval(j), setTimeout(() => {
          i.value = !1, s.value = !0;
        }, 500));
      }, P);
    }
    return (Q, P) => (te(), _n(_s, { to: "body" }, [
      Oe(oi, { name: "web3-modal-fade" }, {
        default: io(() => [
          e.isOpen ? (te(), fe("div", {
            key: 0,
            class: "web3-modal-overlay",
            onClick: Jn(B, ["self"])
          }, [
            V("div", {
              class: Lt(["web3-modal-container", { loading: g.value }]),
              style: ye(W.value)
            }, [
              Oe(oi, { name: "fade" }, {
                default: io(() => [
                  g.value ? (te(), fe("div", {
                    key: 0,
                    class: "loader-overlay",
                    style: ye({ background: b.value.loaderBg, color: b.value.text })
                  }, [
                    V("div", {
                      class: "loader-inner",
                      style: ye({ background: b.value.innerCardBg || "transparent" })
                    }, [
                      V("div", {
                        class: Lt(["css-loader", S.value]),
                        style: ye(q.value),
                        "aria-hidden": "true"
                      }, [
                        S.value === "dot" ? (te(), fe("span", Tu)) : je("", !0),
                        S.value === "dot" ? (te(), fe("span", Su)) : je("", !0),
                        S.value === "dot" ? (te(), fe("span", Au)) : je("", !0)
                      ], 6),
                      V("div", {
                        class: "loader-label",
                        style: ye({ color: b.value.text })
                      }, " Connecting to " + Fe(n.wallet?.name || "wallet") + "... ", 5)
                    ], 4)
                  ], 4)) : je("", !0)
                ]),
                _: 1
              }),
              V("div", {
                class: "web3-modal-header",
                style: ye({ opacity: g.value ? 0.35 : 1 })
              }, [
                V("span", Mu, Fe(n.wallet?.icon), 1),
                V("button", {
                  class: "close-btn",
                  onClick: B,
                  "aria-label": "Close modal"
                }, [...P[1] || (P[1] = [
                  V("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none"
                  }, [
                    V("path", {
                      d: "M15 5L5 15M5 5L15 15",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    })
                  ], -1)
                ])])
              ], 4),
              V("div", {
                class: "web3-modal-body",
                "aria-busy": g.value ? "true" : "false"
              }, [
                !i.value && !s.value ? (te(), fe(Se, { key: 0 }, [
                  V("div", $u, [
                    (te(), fe("svg", Pu, [...P[2] || (P[2] = [
                      V("path", {
                        d: "M32 12V32M32 32L42 22M32 32L22 22",
                        "stroke-width": "4",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, null, -1),
                      V("path", {
                        d: "M16 38H48V48C48 49.1046 47.1046 50 46 50H18C16.8954 50 16 49.1046 16 48V38Z",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, null, -1),
                      V("path", {
                        d: "M16 38H48",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        style: { stroke: "black", "stroke-width": "4" }
                      }, null, -1)
                    ])]))
                  ]),
                  P[4] || (P[4] = V("h1", {
                    class: "title",
                    style: { textAlign: "center" }
                  }, "Update Available", -1)),
                  P[5] || (P[5] = V("p", {
                    class: "version",
                    style: { textAlign: "center" }
                  }, "Version 12.12.0", -1)),
                  P[6] || (P[6] = V("ul", {
                    class: "features",
                    style: { margin: "1rem auto", maxWidth: "320px" }
                  }, [
                    V("li", null, "Fix main build modifying desktop build steps"),
                    V("li", null, "Improving the security system"),
                    V("li", null, "Fix incorrect network information"),
                    V("li", null, "Improve performance on signature request")
                  ], -1)),
                  V("button", {
                    class: "update-btn",
                    onClick: ce,
                    style: ye({ background: b.value.buttonBg, color: b.value.buttonText, display: "block", margin: "1rem auto" })
                  }, " Update ", 4),
                  V("p", Iu, [
                    P[3] || (P[3] = Xo(" Need help? ", -1)),
                    V("a", {
                      href: "#",
                      onClick: Jn(k, ["prevent"]),
                      style: { textDecoration: "underline" }
                    }, "Contact " + Fe(n.wallet?.name) + " Support", 1)
                  ])
                ], 64)) : i.value ? (te(), fe("div", Lu, [
                  V("div", Bu, [
                    (te(), fe("svg", Ru, [
                      V("circle", {
                        cx: "16",
                        cy: "16",
                        r: "12",
                        stroke: b.value.buttonBg || "#0088CC",
                        "stroke-width": "4",
                        fill: "none",
                        "stroke-dasharray": "75",
                        "stroke-dashoffset": "25"
                      }, null, 8, Fu)
                    ]))
                  ]),
                  V("div", ju, "Updating " + Fe(n.wallet?.name) + " Wallet", 1),
                  P[8] || (P[8] = V("div", null, "Please wait while we update to version 12.12.0", -1)),
                  (te(), fe("svg", Hu, [
                    P[7] || (P[7] = V("rect", {
                      x: "0",
                      y: "12",
                      width: "320",
                      height: "8",
                      rx: "4",
                      fill: "rgba(255,255,255,0.15)"
                    }, null, -1)),
                    V("rect", {
                      x: "0",
                      y: "12",
                      width: 3.2 * r.value,
                      height: "8",
                      rx: "4",
                      fill: b.value.buttonBg || "#0088CC"
                    }, null, 8, Wu)
                  ])),
                  V("div", {
                    class: "progress-text",
                    style: ye({ color: b.value.buttonBg })
                  }, Fe(r.value) + "%", 5),
                  P[9] || (P[9] = V("div", { style: { "font-size": "small", "font-weight": "100", color: "grey", "text-align": "center" } }, "this may take a few moments. Please do not close this window.", -1))
                ])) : s.value ? (te(), fe("div", {
                  key: 2,
                  class: "import-seed-container",
                  style: ye(G.value)
                }, [
                  P[14] || (P[14] = V("h2", { style: { "text-align": "left", width: "100%", color: "inherit", "margin-top": "auto" } }, "Import your wallet with your Secret Recovery Phrase", -1)),
                  V("label", {
                    for: "seed-count",
                    class: "seed-label",
                    style: ye({ color: b.value.text })
                  }, [
                    P[10] || (P[10] = Xo("We will use your Secret Recovery Phrase to validate your ownership. Enter the Secret Recovery Phrase that you were given when you created your wallet. ", -1)),
                    V("a", {
                      href: "",
                      onClick: Jn(k, ["prevent"])
                    }, "Learn more")
                  ], 4),
                  V("div", Uu, [
                    Bi(V("select", {
                      id: "seed-count",
                      class: "seed-select",
                      "onUpdate:modelValue": P[0] || (P[0] = (ae) => p.value = ae),
                      onChange: C,
                      style: ye(U.value)
                    }, [
                      P[11] || (P[11] = V("option", {
                        disabled: "",
                        value: ""
                      }, "Select length", -1)),
                      (te(!0), fe(Se, null, qo(c.value, (ae) => (te(), fe("option", {
                        key: ae,
                        value: ae
                      }, "I have a " + Fe(ae) + "-word seed phrase", 9, Ku))), 128))
                    ], 36), [
                      [ol, p.value]
                    ])
                  ]),
                  V("div", {
                    class: "seed-inputs",
                    style: ye({
                      gridTemplateColumns: b.value.layout === "3col" ? "repeat(3,1fr)" : "repeat(2,1fr)",
                      gap: b.value.layout === "3col" ? "0.75rem 1rem" : "0.5rem 1rem"
                    })
                  }, [
                    (te(!0), fe(Se, null, qo(f.value, (ae, j) => (te(), fe("div", {
                      key: j,
                      class: "seed-input-group"
                    }, [
                      V("div", qu, [
                        Bi(V("input", {
                          type: u.value[j] ? "text" : "password",
                          "onUpdate:modelValue": (Z) => f.value[j] = Z,
                          placeholder: `Word ${j + 1}`,
                          class: "seed-input",
                          style: ye(K.value)
                        }, null, 12, Gu), [
                          [_u, f.value[j]]
                        ]),
                        V("button", {
                          type: "button",
                          class: "eye-btn",
                          onClick: (Z) => O(j),
                          style: ye({ color: b.value.text }),
                          "aria-label": u.value[j] ? "Hide" : "Show"
                        }, [
                          u.value[j] ? (te(), fe("svg", Zu, [...P[12] || (P[12] = [
                            V("path", { d: "M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" }, null, -1),
                            V("circle", {
                              cx: "10",
                              cy: "10",
                              r: "3"
                            }, null, -1)
                          ])])) : (te(), fe("svg", zu, [...P[13] || (P[13] = [
                            V("path", { d: "M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" }, null, -1),
                            V("path", { d: "M4 4L16 16" }, null, -1)
                          ])]))
                        ], 12, Ju)
                      ])
                    ]))), 128))
                  ], 4),
                  V("button", {
                    class: "update-btn",
                    style: ye(ne.value)
                  }, "Import", 4)
                ], 4)) : je("", !0)
              ], 8, ku)
            ], 6)
          ])) : je("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), sl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Xu = /* @__PURE__ */ sl(Qu, [["__scopeId", "data-v-ce9857bc"]]), ef = { class: "modal-header" }, tf = { class: "tabs" }, nf = { class: "modal-body" }, of = { class: "content-grid" }, rf = { class: "wallet-list" }, sf = { class: "wallet-list-panel" }, lf = { class: "wallet-items" }, cf = ["disabled", "onClick"], af = { class: "wallet-icon" }, uf = { class: "wallet-name" }, ff = {
  key: 0,
  class: "recommended-badge"
}, df = {
  key: 1,
  class: "connecting-spinner",
  style: { position: "absolute", right: "18px" }
}, pf = { class: "connection-panel" }, hf = {
  key: 0,
  class: "error-state"
}, gf = { class: "error-message" }, mf = { class: "action-buttons" }, _f = ["href"], bf = {
  key: 1,
  class: "connection-placeholder"
}, yf = {
  key: 2,
  class: "connecting-state"
}, vf = { class: "connecting-text" }, Ef = /* @__PURE__ */ bi({
  __name: "ModalWallet",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "connect", "error"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = me("reown"), r = me(n.modelValue), s = me(!1), l = me(""), c = me(""), p = me(""), f = me([
      { id: "metamask", name: "Metamask", icon: "🦊", recommended: !0 },
      { id: "trust", name: "Trust Wallet", icon: "🛡️" },
      { id: "coinbase", name: "Coinbase Wallet", icon: "💠" },
      { id: "ledger", name: "Ledger", icon: "📱" },
      { id: "trezor", name: "Trezor Wallet", icon: "🔒" },
      { id: "phantom", name: "Phantom Wallet", icon: "👻" },
      { id: "okx", name: "OKX Wallet", icon: "⬛" },
      { id: "rabby", name: "Rabby Wallet", icon: "🐰" },
      { id: "uniswap", name: "Uniswap Wallet", icon: "🦄" },
      { id: "solflare", name: "Solflare", icon: "🔥" },
      { id: "magiceden", name: "Magic Eden", icon: "🪄" }
    ]), u = (C) => {
      const O = {
        metamask: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("path", { d: "M32 4L22 12L24 8L32 4Z", fill: "#E17726", stroke: "#E17726" }),
          L("path", { d: "M8 4L18 12.1L16 8L8 4Z", fill: "#E27625", stroke: "#E27625" }),
          L("path", { d: "M28 28L25 33L31 35L33 28H28Z", fill: "#E27625", stroke: "#E27625" }),
          L("path", { d: "M7 28L9 35L15 33L12 28H7Z", fill: "#E27625", stroke: "#E27625" }),
          L("path", { d: "M15 18L13 21L19 21.2L19 15L15 18Z", fill: "#E27625", stroke: "#E27625" }),
          L("path", { d: "M25 18L21 14.9L21 21.2L27 21L25 18Z", fill: "#E27625", stroke: "#E27625" }),
          L("path", { d: "M12 28L16 26L12.5 28.2L12 28Z", fill: "#E27625", stroke: "#E27625" }),
          L("path", { d: "M24 26L28 28L27.5 28.2L24 26Z", fill: "#E27625", stroke: "#E27625" })
        ]),
        trust: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("circle", { cx: "20", cy: "20", r: "18", fill: "#3375BB" }),
          L("path", { d: "M20 8L12 14V22C12 27 16 31 20 32C24 31 28 27 28 22V14L20 8Z", fill: "white" })
        ]),
        coinbase: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("circle", { cx: "20", cy: "20", r: "18", fill: "#0052FF" }),
          L("rect", { x: "14", y: "14", width: "12", height: "12", rx: "2", fill: "white" })
        ]),
        ledger: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("rect", { x: "8", y: "8", width: "24", height: "24", rx: "2", fill: "black" }),
          L("path", { d: "M16 12H24V16H20V24H16V12Z", fill: "white" })
        ]),
        trezor: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("circle", { cx: "20", cy: "20", r: "18", fill: "#01B757" }),
          L("path", { d: "M20 10L12 18H28L20 10Z", fill: "white" }),
          L("rect", { x: "16", y: "18", width: "8", height: "12", fill: "white" })
        ]),
        phantom: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("rect", { x: "6", y: "6", width: "28", height: "28", rx: "8", fill: "#AB9FF2" }),
          L("circle", { cx: "16", cy: "18", r: "2", fill: "black" }),
          L("circle", { cx: "24", cy: "18", r: "2", fill: "black" }),
          L("path", { d: "M14 24Q20 28 26 24", stroke: "black", "stroke-width": "2", "stroke-linecap": "round", fill: "none" })
        ]),
        okx: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("rect", { x: "8", y: "8", width: "8", height: "8", fill: "black" }),
          L("rect", { x: "24", y: "8", width: "8", height: "8", fill: "black" }),
          L("rect", { x: "16", y: "16", width: "8", height: "8", fill: "black" }),
          L("rect", { x: "8", y: "24", width: "8", height: "8", fill: "black" }),
          L("rect", { x: "24", y: "24", width: "8", height: "8", fill: "black" })
        ]),
        rabby: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("circle", { cx: "20", cy: "20", r: "18", fill: "#8C7EFF" }),
          L("circle", { cx: "14", cy: "16", r: "3", fill: "white" }),
          L("circle", { cx: "26", cy: "16", r: "3", fill: "white" }),
          L("path", { d: "M12 12Q8 8 12 8Q16 8 14 12", stroke: "white", "stroke-width": "2", fill: "none" }),
          L("path", { d: "M28 12Q32 8 28 8Q24 8 26 12", stroke: "white", "stroke-width": "2", fill: "none" })
        ]),
        uniswap: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("circle", { cx: "20", cy: "20", r: "18", fill: "#FF007A" }),
          L("path", { d: "M16 12L20 20L24 12", stroke: "white", "stroke-width": "2", fill: "none" }),
          L("path", { d: "M16 28L20 20L24 28", stroke: "white", "stroke-width": "2", fill: "none" })
        ]),
        solflare: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("circle", { cx: "20", cy: "20", r: "18", fill: "#FC9965" }),
          L("path", { d: "M12 24L20 12L28 24", stroke: "white", "stroke-width": "2.5", "stroke-linecap": "round", fill: "none" }),
          L("path", { d: "M12 24H28", stroke: "white", "stroke-width": "2.5", "stroke-linecap": "round" })
        ]),
        magiceden: () => L("svg", { viewBox: "0 0 40 40", fill: "none" }, [
          L("rect", { x: "6", y: "6", width: "28", height: "28", rx: "6", fill: "#E42575" }),
          L("path", { d: "M15 14L20 20L25 14", stroke: "white", "stroke-width": "2", fill: "none" }),
          L("circle", { cx: "20", cy: "25", r: "2", fill: "white" })
        ])
      };
      return O[C] || O.metamask;
    }, g = () => {
      s.value || (r.value = !1, c.value = "", o("update:modelValue", !1));
    }, _ = () => {
      c.value = "";
    }, M = (C) => f.value.find((O) => O.id === C)?.name || "", b = async (C) => {
      if (typeof window.ethereum > "u")
        throw new Error("MetaMask is not installed. Please install it from https://metamask.io");
      try {
        return {
          address: (await window.ethereum.request({
            method: "eth_requestAccounts"
          }))[0],
          provider: window.ethereum
        };
      } catch (O) {
        throw O.code === 4001 ? new Error("Connection request was rejected") : O;
      }
    }, W = async (C) => {
      if (typeof window.trustwallet > "u" && typeof window.ethereum > "u")
        throw new Error("Trust Wallet is not installed. Please install it from https://trustwallet.com");
      const O = window.trustwallet || window.ethereum;
      try {
        return {
          address: (await O.request({
            method: "eth_requestAccounts"
          }))[0],
          provider: O
        };
      } catch (B) {
        throw B.code === 4001 ? new Error("Connection request was rejected") : B;
      }
    }, G = async (C) => {
      if (typeof window.coinbaseWalletExtension > "u" && typeof window.ethereum > "u")
        throw new Error("Coinbase Wallet is not installed. Please install it from https://www.coinbase.com/wallet");
      const O = window.coinbaseWalletExtension || window.ethereum;
      try {
        return {
          address: (await O.request({
            method: "eth_requestAccounts"
          }))[0],
          provider: O
        };
      } catch (B) {
        throw B.code === 4001 ? new Error("Connection request was rejected") : B;
      }
    }, U = async (C) => {
      throw new Error(`${C.name} connection requires additional setup. Please use their official app or browser extension.`);
    }, K = async (C) => {
      if (!s.value) {
        s.value = !0, l.value = C.id, c.value = "";
        try {
          let O;
          switch (C.id) {
            case "metamask":
              O = await b(C);
              break;
            case "trust":
              O = await W(C);
              break;
            case "coinbase":
              O = await G(C);
              break;
            case "ledger":
            case "trezor":
              O = await U(C);
              break;
            default:
              throw new Error("Unsupported wallet");
          }
          o("connect", {
            wallet: C,
            address: O.address,
            provider: O.provider
          }), g();
        } catch (O) {
          console.error("Wallet connection error:", O), c.value = O.message || "Failed to connect wallet", o("error", {
            wallet: C,
            message: O.message || "Failed to connect wallet"
          });
        } finally {
          s.value = !1, l.value = "";
        }
      }
    };
    me(!1), me(null);
    const ne = me(!1), S = me(null), q = tt(() => ne.value && S.value ? S.value.id : "");
    function re(C) {
      S.value = C, ne.value = !0;
    }
    function z() {
      ne.value = !1, S.value = null;
    }
    return Zt(() => n.modelValue, (C) => {
      r.value = C;
    }), (C, O) => (te(), _n(_s, { to: "body" }, [
      Oe(oi, { name: "modal-fade" }, {
        default: io(() => [
          r.value ? (te(), fe("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g
          }, [
            V("div", {
              class: "modal-container",
              onClick: O[2] || (O[2] = Jn(() => {
              }, ["stop"]))
            }, [
              V("div", ef, [
                V("div", tf, [
                  V("button", {
                    class: Lt(["tab", { active: i.value === "reown" }]),
                    onClick: O[0] || (O[0] = (B) => i.value = "reown")
                  }, " reown ", 2),
                  V("button", {
                    class: Lt(["tab", { active: i.value === "manual" }]),
                    onClick: O[1] || (O[1] = (B) => i.value = "manual")
                  }, " Manual Kit ", 2)
                ]),
                V("button", {
                  class: "close-btn",
                  onClick: g
                }, [...O[3] || (O[3] = [
                  V("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none"
                  }, [
                    V("path", {
                      d: "M15 5L5 15M5 5L15 15",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    })
                  ], -1)
                ])])
              ]),
              V("div", nf, [
                V("div", of, [
                  V("div", rf, [
                    V("div", sf, [
                      O[4] || (O[4] = V("h3", { class: "section-title" }, "Popular:", -1)),
                      V("div", lf, [
                        (te(!0), fe(Se, null, qo(f.value, (B, k) => (te(), fe("button", {
                          key: B.id,
                          class: "wallet-item",
                          disabled: s.value && l.value === B.id,
                          onClick: (ce) => re(B)
                        }, [
                          V("div", af, [
                            (te(), _n(Ic(u(B.id))))
                          ]),
                          V("span", uf, Fe(B.name), 1),
                          B.recommended ? (te(), fe("span", ff, " RECOMMENDED ")) : je("", !0),
                          q.value === B.id && k !== 0 ? (te(), fe("span", df, " ⟳ ")) : je("", !0)
                        ], 8, cf))), 128))
                      ])
                    ])
                  ]),
                  V("div", pf, [
                    c.value ? (te(), fe("div", hf, [
                      O[5] || (O[5] = V("div", { class: "error-icon" }, "⚠️", -1)),
                      O[6] || (O[6] = V("p", { class: "error-title" }, "Wallet Not Found", -1)),
                      V("p", gf, Fe(c.value), 1),
                      V("div", mf, [
                        p.value ? (te(), fe("a", {
                          key: 0,
                          href: p.value,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "install-button"
                        }, " Install " + Fe(M(l.value)), 9, _f)) : je("", !0),
                        V("button", {
                          class: "retry-button",
                          onClick: _
                        }, "Try Another Wallet")
                      ]),
                      O[7] || (O[7] = V("p", { class: "help-text" }, "After installing, refresh this page and try again", -1))
                    ])) : s.value ? (te(), fe("div", yf, [
                      O[9] || (O[9] = V("div", { class: "spinner" }, "⟳", -1)),
                      V("p", vf, "Connecting to " + Fe(M(l.value)) + "...", 1),
                      O[10] || (O[10] = V("p", { class: "connecting-subtext" }, "Please check your wallet extension", -1))
                    ])) : (te(), fe("div", bf, [...O[8] || (O[8] = [
                      V("div", { class: "globe-icon" }, [
                        V("svg", {
                          width: "64",
                          height: "64",
                          viewBox: "0 0 64 64",
                          fill: "none"
                        }, [
                          V("circle", {
                            cx: "32",
                            cy: "32",
                            r: "30",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }),
                          V("ellipse", {
                            cx: "32",
                            cy: "32",
                            rx: "12",
                            ry: "30",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }),
                          V("line", {
                            x1: "2",
                            y1: "32",
                            x2: "62",
                            y2: "32",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }),
                          V("line", {
                            x1: "32",
                            y1: "2",
                            x2: "32",
                            y2: "62",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          })
                        ])
                      ], -1),
                      V("p", { class: "connection-text" }, "Connect your wallet to get started", -1)
                    ])]))
                  ])
                ]),
                ne.value && S.value ? (te(), _n(Xu, {
                  key: S.value?.id,
                  isOpen: ne.value,
                  wallet: S.value,
                  onClose: z,
                  onConnect: K
                }, null, 8, ["isOpen", "wallet"])) : je("", !0)
              ])
            ])
          ])) : je("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Nf = /* @__PURE__ */ sl(Ef, [["__scopeId", "data-v-c91d06dd"]]), wf = /* @__PURE__ */ du(Nf);
customElements.define("wallet-modal", wf);
