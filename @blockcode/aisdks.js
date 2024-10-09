var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node:crypto
var exports_crypto = {};
__export(exports_crypto, {
  webcrypto: () => cw,
  timingSafeEqual: () => x0,
  scryptSync: () => Id,
  scrypt: () => Td,
  randomUUID: () => lw,
  getRandomValues: () => uw,
  getCurves: () => dw,
  default: () => Wq,
  DEFAULT_ENCODING: () => Ga
});
function dw() {
  return Hq;
}
var pw, Xa, vw, bw, mw, gw, R0 = (t, e) => () => (t && (e = t(t = 0)), e), T = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), Ja = (t, e) => {
  for (var r in e)
    Xa(t, r, { get: e[r], enumerable: true });
}, Ya = (t, e, r, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let f of bw(e))
      !gw.call(t, f) && f !== r && Xa(t, f, { get: () => e[f], enumerable: !(o = vw(e, f)) || o.enumerable });
  return t;
}, ot = (t, e, r) => (Ya(t, e, "default"), r && Ya(r, e, "default")), rn = (t, e, r) => (r = t != null ? pw(mw(t)) : {}, Ya(e || !t || !t.__esModule ? Xa(r, "default", { value: t, enumerable: true }) : r, t)), ur = (t) => Ya(Xa({}, "__esModule", { value: true }), t), Nd, Dd, Ut, Te, on, Ie, ki, W0, $f, pc, Z0, sn, V0, G0, J0, hn, co, Jf, po, Qf, vo, Pc, Oc, th, ph, Qc, np, ap, bh, Ao, Bo, pn, _p, Ep, gh, qp, yh, Op, ko, Tt, Gr, No, Jt, pa, Rh, pr, Y_, Oi, Fi, Ui, k1, yn, Vo, Go, Z1, Xo, Fh, ba, Jh, Dv, Qr, fu, ou, os, eb, cu, lb, bu, vf, S7, db, yi, bf, wb, mu, wu, Mu, Eb, _u, xu, Eu, Au, Ub, Iu, Tu, ar, vs, ku, Yb, Qb, em, im, nm, yf, om, um, dm, pm, bm, Pu, Ou, Fu, ws, Aa, Em, Wu, ju, Ba, Dm, Fm, Es, Hm, Vm, ji, Yu, Ym, Xm, As, tl, ol, rg, ag, hg, hl, pg, dl, kn, cl, bl, Ln, Ds, Lg, Dg, yl, Il, Yg, t2, i2, Ws, Ks, s2, ri, Nl, or, Oa, b2, y2, _2, Pl, Cr, Tf, Cl, N2, Fl, F2, Wl, Z2, V2, Q2, ty, e0, ny, t0, uy, dy, vy, yy, xy, Ey, Iy, o0, td, h0, u0, Kf, d0, c0, nd, Hy, od, hd, Jy, dd, r3, n3, o3, cd, d3, p3, v3, m3, Ha, bd, _3, A3, k3, N3, P3, _d, xd, w0, Ed, j3, Y3, X3, ow, qd, Xt, zq, Ga = "buffer", uw = (t) => crypto.getRandomValues(t), lw = () => crypto.randomUUID(), Hq, x0, Id, Td, cw, Wq;
var init_crypto = __esm(() => {
  pw = Object.create;
  Xa = Object.defineProperty;
  vw = Object.getOwnPropertyDescriptor;
  bw = Object.getOwnPropertyNames;
  mw = Object.getPrototypeOf;
  gw = Object.prototype.hasOwnProperty;
  Nd = T((Qa) => {
    Qa.byteLength = ww;
    Qa.toByteArray = _w;
    Qa.fromByteArray = Ew;
    var jr = [], lr = [], yw = typeof Uint8Array < "u" ? Uint8Array : Array, B0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (nn = 0, kd = B0.length;nn < kd; ++nn)
      jr[nn] = B0[nn], lr[B0.charCodeAt(nn)] = nn;
    var nn, kd;
    lr["-".charCodeAt(0)] = 62;
    lr["_".charCodeAt(0)] = 63;
    function Ld(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      r === -1 && (r = e);
      var o = r === e ? 0 : 4 - r % 4;
      return [r, o];
    }
    function ww(t) {
      var e = Ld(t), r = e[0], o = e[1];
      return (r + o) * 3 / 4 - o;
    }
    function Mw(t, e, r) {
      return (e + r) * 3 / 4 - r;
    }
    function _w(t) {
      var e, r = Ld(t), o = r[0], f = r[1], p = new yw(Mw(t, o, f)), m = 0, y = f > 0 ? o - 4 : o, M;
      for (M = 0;M < y; M += 4)
        e = lr[t.charCodeAt(M)] << 18 | lr[t.charCodeAt(M + 1)] << 12 | lr[t.charCodeAt(M + 2)] << 6 | lr[t.charCodeAt(M + 3)], p[m++] = e >> 16 & 255, p[m++] = e >> 8 & 255, p[m++] = e & 255;
      return f === 2 && (e = lr[t.charCodeAt(M)] << 2 | lr[t.charCodeAt(M + 1)] >> 4, p[m++] = e & 255), f === 1 && (e = lr[t.charCodeAt(M)] << 10 | lr[t.charCodeAt(M + 1)] << 4 | lr[t.charCodeAt(M + 2)] >> 2, p[m++] = e >> 8 & 255, p[m++] = e & 255), p;
    }
    function xw(t) {
      return jr[t >> 18 & 63] + jr[t >> 12 & 63] + jr[t >> 6 & 63] + jr[t & 63];
    }
    function Sw(t, e, r) {
      for (var o, f = [], p = e;p < r; p += 3)
        o = (t[p] << 16 & 16711680) + (t[p + 1] << 8 & 65280) + (t[p + 2] & 255), f.push(xw(o));
      return f.join("");
    }
    function Ew(t) {
      for (var e, r = t.length, o = r % 3, f = [], p = 16383, m = 0, y = r - o;m < y; m += p)
        f.push(Sw(t, m, m + p > y ? y : m + p));
      return o === 1 ? (e = t[r - 1], f.push(jr[e >> 2] + jr[e << 4 & 63] + "==")) : o === 2 && (e = (t[r - 2] << 8) + t[r - 1], f.push(jr[e >> 10] + jr[e >> 4 & 63] + jr[e << 2 & 63] + "=")), f.join("");
    }
  });
  Dd = T((q0) => {
    q0.read = function(t, e, r, o, f) {
      var p, m, y = f * 8 - o - 1, M = (1 << y) - 1, x = M >> 1, S = -7, E = r ? f - 1 : 0, B = r ? -1 : 1, q = t[e + E];
      for (E += B, p = q & (1 << -S) - 1, q >>= -S, S += y;S > 0; p = p * 256 + t[e + E], E += B, S -= 8)
        ;
      for (m = p & (1 << -S) - 1, p >>= -S, S += o;S > 0; m = m * 256 + t[e + E], E += B, S -= 8)
        ;
      if (p === 0)
        p = 1 - x;
      else {
        if (p === M)
          return m ? NaN : (q ? -1 : 1) * (1 / 0);
        m = m + Math.pow(2, o), p = p - x;
      }
      return (q ? -1 : 1) * m * Math.pow(2, p - o);
    };
    q0.write = function(t, e, r, o, f, p) {
      var m, y, M, x = p * 8 - f - 1, S = (1 << x) - 1, E = S >> 1, B = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, q = o ? 0 : p - 1, L = o ? 1 : -1, ge = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (y = isNaN(e) ? 1 : 0, m = S) : (m = Math.floor(Math.log(e) / Math.LN2), e * (M = Math.pow(2, -m)) < 1 && (m--, M *= 2), m + E >= 1 ? e += B / M : e += B * Math.pow(2, 1 - E), e * M >= 2 && (m++, M /= 2), m + E >= S ? (y = 0, m = S) : m + E >= 1 ? (y = (e * M - 1) * Math.pow(2, f), m = m + E) : (y = e * Math.pow(2, E - 1) * Math.pow(2, f), m = 0));f >= 8; t[r + q] = y & 255, q += L, y /= 256, f -= 8)
        ;
      for (m = m << f | y, x += f;x > 0; t[r + q] = m & 255, q += L, m /= 256, x -= 8)
        ;
      t[r + q - L] |= ge * 128;
    };
  });
  Ut = T((Xn) => {
    var I0 = Nd(), Gn = Dd(), Pd = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Xn.Buffer = me;
    Xn.SlowBuffer = Tw;
    Xn.INSPECT_MAX_BYTES = 50;
    var eo = 2147483647;
    Xn.kMaxLength = eo;
    me.TYPED_ARRAY_SUPPORT = Aw();
    !me.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Aw() {
      try {
        let t = new Uint8Array(1), e = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), t.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(me.prototype, "parent", { enumerable: true, get: function() {
      if (!!me.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(me.prototype, "offset", { enumerable: true, get: function() {
      if (!!me.isBuffer(this))
        return this.byteOffset;
    } });
    function li(t) {
      if (t > eo)
        throw new RangeError('The value "' + t + '" is invalid for option "size"');
      let e = new Uint8Array(t);
      return Object.setPrototypeOf(e, me.prototype), e;
    }
    function me(t, e, r) {
      if (typeof t == "number") {
        if (typeof e == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return N0(t);
      }
      return Ud(t, e, r);
    }
    me.poolSize = 8192;
    function Ud(t, e, r) {
      if (typeof t == "string")
        return Bw(t, e);
      if (ArrayBuffer.isView(t))
        return qw(t);
      if (t == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
      if (Zr(t, ArrayBuffer) || t && Zr(t.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Zr(t, SharedArrayBuffer) || t && Zr(t.buffer, SharedArrayBuffer)))
        return k0(t, e, r);
      if (typeof t == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let o = t.valueOf && t.valueOf();
      if (o != null && o !== t)
        return me.from(o, e, r);
      let f = Iw(t);
      if (f)
        return f;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t[Symbol.toPrimitive] == "function")
        return me.from(t[Symbol.toPrimitive]("string"), e, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
    }
    me.from = function(t, e, r) {
      return Ud(t, e, r);
    };
    Object.setPrototypeOf(me.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(me, Uint8Array);
    function zd(t) {
      if (typeof t != "number")
        throw new TypeError('"size" argument must be of type number');
      if (t < 0)
        throw new RangeError('The value "' + t + '" is invalid for option "size"');
    }
    function Rw(t, e, r) {
      return zd(t), t <= 0 ? li(t) : e !== undefined ? typeof r == "string" ? li(t).fill(e, r) : li(t).fill(e) : li(t);
    }
    me.alloc = function(t, e, r) {
      return Rw(t, e, r);
    };
    function N0(t) {
      return zd(t), li(t < 0 ? 0 : D0(t) | 0);
    }
    me.allocUnsafe = function(t) {
      return N0(t);
    };
    me.allocUnsafeSlow = function(t) {
      return N0(t);
    };
    function Bw(t, e) {
      if ((typeof e != "string" || e === "") && (e = "utf8"), !me.isEncoding(e))
        throw new TypeError("Unknown encoding: " + e);
      let r = Hd(t, e) | 0, o = li(r), f = o.write(t, e);
      return f !== r && (o = o.slice(0, f)), o;
    }
    function T0(t) {
      let e = t.length < 0 ? 0 : D0(t.length) | 0, r = li(e);
      for (let o = 0;o < e; o += 1)
        r[o] = t[o] & 255;
      return r;
    }
    function qw(t) {
      if (Zr(t, Uint8Array)) {
        let e = new Uint8Array(t);
        return k0(e.buffer, e.byteOffset, e.byteLength);
      }
      return T0(t);
    }
    function k0(t, e, r) {
      if (e < 0 || t.byteLength < e)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (t.byteLength < e + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let o;
      return e === undefined && r === undefined ? o = new Uint8Array(t) : r === undefined ? o = new Uint8Array(t, e) : o = new Uint8Array(t, e, r), Object.setPrototypeOf(o, me.prototype), o;
    }
    function Iw(t) {
      if (me.isBuffer(t)) {
        let e = D0(t.length) | 0, r = li(e);
        return r.length === 0 || t.copy(r, 0, 0, e), r;
      }
      if (t.length !== undefined)
        return typeof t.length != "number" || C0(t.length) ? li(0) : T0(t);
      if (t.type === "Buffer" && Array.isArray(t.data))
        return T0(t.data);
    }
    function D0(t) {
      if (t >= eo)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + eo.toString(16) + " bytes");
      return t | 0;
    }
    function Tw(t) {
      return +t != t && (t = 0), me.alloc(+t);
    }
    me.isBuffer = function(e) {
      return e != null && e._isBuffer === true && e !== me.prototype;
    };
    me.compare = function(e, r) {
      if (Zr(e, Uint8Array) && (e = me.from(e, e.offset, e.byteLength)), Zr(r, Uint8Array) && (r = me.from(r, r.offset, r.byteLength)), !me.isBuffer(e) || !me.isBuffer(r))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e === r)
        return 0;
      let o = e.length, f = r.length;
      for (let p = 0, m = Math.min(o, f);p < m; ++p)
        if (e[p] !== r[p]) {
          o = e[p], f = r[p];
          break;
        }
      return o < f ? -1 : f < o ? 1 : 0;
    };
    me.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    me.concat = function(e, r) {
      if (!Array.isArray(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (e.length === 0)
        return me.alloc(0);
      let o;
      if (r === undefined)
        for (r = 0, o = 0;o < e.length; ++o)
          r += e[o].length;
      let f = me.allocUnsafe(r), p = 0;
      for (o = 0;o < e.length; ++o) {
        let m = e[o];
        if (Zr(m, Uint8Array))
          p + m.length > f.length ? (me.isBuffer(m) || (m = me.from(m)), m.copy(f, p)) : Uint8Array.prototype.set.call(f, m, p);
        else if (me.isBuffer(m))
          m.copy(f, p);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        p += m.length;
      }
      return f;
    };
    function Hd(t, e) {
      if (me.isBuffer(t))
        return t.length;
      if (ArrayBuffer.isView(t) || Zr(t, ArrayBuffer))
        return t.byteLength;
      if (typeof t != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
      let r = t.length, o = arguments.length > 2 && arguments[2] === true;
      if (!o && r === 0)
        return 0;
      let f = false;
      for (;; )
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return L0(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return Xd(t).length;
          default:
            if (f)
              return o ? -1 : L0(t).length;
            e = ("" + e).toLowerCase(), f = true;
        }
    }
    me.byteLength = Hd;
    function kw(t, e, r) {
      let o = false;
      if ((e === undefined || e < 0) && (e = 0), e > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, e >>>= 0, r <= e))
        return "";
      for (t || (t = "utf8");; )
        switch (t) {
          case "hex":
            return Hw(this, e, r);
          case "utf8":
          case "utf-8":
            return Kd(this, e, r);
          case "ascii":
            return Uw(this, e, r);
          case "latin1":
          case "binary":
            return zw(this, e, r);
          case "base64":
            return Ow(this, e, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Ww(this, e, r);
          default:
            if (o)
              throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), o = true;
        }
    }
    me.prototype._isBuffer = true;
    function fn(t, e, r) {
      let o = t[e];
      t[e] = t[r], t[r] = o;
    }
    me.prototype.swap16 = function() {
      let e = this.length;
      if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0;r < e; r += 2)
        fn(this, r, r + 1);
      return this;
    };
    me.prototype.swap32 = function() {
      let e = this.length;
      if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let r = 0;r < e; r += 4)
        fn(this, r, r + 3), fn(this, r + 1, r + 2);
      return this;
    };
    me.prototype.swap64 = function() {
      let e = this.length;
      if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let r = 0;r < e; r += 8)
        fn(this, r, r + 7), fn(this, r + 1, r + 6), fn(this, r + 2, r + 5), fn(this, r + 3, r + 4);
      return this;
    };
    me.prototype.toString = function() {
      let e = this.length;
      return e === 0 ? "" : arguments.length === 0 ? Kd(this, 0, e) : kw.apply(this, arguments);
    };
    me.prototype.toLocaleString = me.prototype.toString;
    me.prototype.equals = function(e) {
      if (!me.isBuffer(e))
        throw new TypeError("Argument must be a Buffer");
      return this === e ? true : me.compare(this, e) === 0;
    };
    me.prototype.inspect = function() {
      let e = "", r = Xn.INSPECT_MAX_BYTES;
      return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">";
    };
    Pd && (me.prototype[Pd] = me.prototype.inspect);
    me.prototype.compare = function(e, r, o, f, p) {
      if (Zr(e, Uint8Array) && (e = me.from(e, e.offset, e.byteLength)), !me.isBuffer(e))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
      if (r === undefined && (r = 0), o === undefined && (o = e ? e.length : 0), f === undefined && (f = 0), p === undefined && (p = this.length), r < 0 || o > e.length || f < 0 || p > this.length)
        throw new RangeError("out of range index");
      if (f >= p && r >= o)
        return 0;
      if (f >= p)
        return -1;
      if (r >= o)
        return 1;
      if (r >>>= 0, o >>>= 0, f >>>= 0, p >>>= 0, this === e)
        return 0;
      let m = p - f, y = o - r, M = Math.min(m, y), x = this.slice(f, p), S = e.slice(r, o);
      for (let E = 0;E < M; ++E)
        if (x[E] !== S[E]) {
          m = x[E], y = S[E];
          break;
        }
      return m < y ? -1 : y < m ? 1 : 0;
    };
    function Wd(t, e, r, o, f) {
      if (t.length === 0)
        return -1;
      if (typeof r == "string" ? (o = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, C0(r) && (r = f ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
        if (f)
          return -1;
        r = t.length - 1;
      } else if (r < 0)
        if (f)
          r = 0;
        else
          return -1;
      if (typeof e == "string" && (e = me.from(e, o)), me.isBuffer(e))
        return e.length === 0 ? -1 : Cd(t, e, r, o, f);
      if (typeof e == "number")
        return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? f ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : Cd(t, [e], r, o, f);
      throw new TypeError("val must be string, number or Buffer");
    }
    function Cd(t, e, r, o, f) {
      let p = 1, m = t.length, y = e.length;
      if (o !== undefined && (o = String(o).toLowerCase(), o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le")) {
        if (t.length < 2 || e.length < 2)
          return -1;
        p = 2, m /= 2, y /= 2, r /= 2;
      }
      function M(S, E) {
        return p === 1 ? S[E] : S.readUInt16BE(E * p);
      }
      let x;
      if (f) {
        let S = -1;
        for (x = r;x < m; x++)
          if (M(t, x) === M(e, S === -1 ? 0 : x - S)) {
            if (S === -1 && (S = x), x - S + 1 === y)
              return S * p;
          } else
            S !== -1 && (x -= x - S), S = -1;
      } else
        for (r + y > m && (r = m - y), x = r;x >= 0; x--) {
          let S = true;
          for (let E = 0;E < y; E++)
            if (M(t, x + E) !== M(e, E)) {
              S = false;
              break;
            }
          if (S)
            return x;
        }
      return -1;
    }
    me.prototype.includes = function(e, r, o) {
      return this.indexOf(e, r, o) !== -1;
    };
    me.prototype.indexOf = function(e, r, o) {
      return Wd(this, e, r, o, true);
    };
    me.prototype.lastIndexOf = function(e, r, o) {
      return Wd(this, e, r, o, false);
    };
    function Lw(t, e, r, o) {
      r = Number(r) || 0;
      let f = t.length - r;
      o ? (o = Number(o), o > f && (o = f)) : o = f;
      let p = e.length;
      o > p / 2 && (o = p / 2);
      let m;
      for (m = 0;m < o; ++m) {
        let y = parseInt(e.substr(m * 2, 2), 16);
        if (C0(y))
          return m;
        t[r + m] = y;
      }
      return m;
    }
    function Nw(t, e, r, o) {
      return to(L0(e, t.length - r), t, r, o);
    }
    function Dw(t, e, r, o) {
      return to(Vw(e), t, r, o);
    }
    function Pw(t, e, r, o) {
      return to(Xd(e), t, r, o);
    }
    function Cw(t, e, r, o) {
      return to($w(e, t.length - r), t, r, o);
    }
    me.prototype.write = function(e, r, o, f) {
      if (r === undefined)
        f = "utf8", o = this.length, r = 0;
      else if (o === undefined && typeof r == "string")
        f = r, o = this.length, r = 0;
      else if (isFinite(r))
        r = r >>> 0, isFinite(o) ? (o = o >>> 0, f === undefined && (f = "utf8")) : (f = o, o = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let p = this.length - r;
      if ((o === undefined || o > p) && (o = p), e.length > 0 && (o < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      f || (f = "utf8");
      let m = false;
      for (;; )
        switch (f) {
          case "hex":
            return Lw(this, e, r, o);
          case "utf8":
          case "utf-8":
            return Nw(this, e, r, o);
          case "ascii":
          case "latin1":
          case "binary":
            return Dw(this, e, r, o);
          case "base64":
            return Pw(this, e, r, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Cw(this, e, r, o);
          default:
            if (m)
              throw new TypeError("Unknown encoding: " + f);
            f = ("" + f).toLowerCase(), m = true;
        }
    };
    me.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function Ow(t, e, r) {
      return e === 0 && r === t.length ? I0.fromByteArray(t) : I0.fromByteArray(t.slice(e, r));
    }
    function Kd(t, e, r) {
      r = Math.min(t.length, r);
      let o = [], f = e;
      for (;f < r; ) {
        let p = t[f], m = null, y = p > 239 ? 4 : p > 223 ? 3 : p > 191 ? 2 : 1;
        if (f + y <= r) {
          let M, x, S, E;
          switch (y) {
            case 1:
              p < 128 && (m = p);
              break;
            case 2:
              M = t[f + 1], (M & 192) === 128 && (E = (p & 31) << 6 | M & 63, E > 127 && (m = E));
              break;
            case 3:
              M = t[f + 1], x = t[f + 2], (M & 192) === 128 && (x & 192) === 128 && (E = (p & 15) << 12 | (M & 63) << 6 | x & 63, E > 2047 && (E < 55296 || E > 57343) && (m = E));
              break;
            case 4:
              M = t[f + 1], x = t[f + 2], S = t[f + 3], (M & 192) === 128 && (x & 192) === 128 && (S & 192) === 128 && (E = (p & 15) << 18 | (M & 63) << 12 | (x & 63) << 6 | S & 63, E > 65535 && E < 1114112 && (m = E));
          }
        }
        m === null ? (m = 65533, y = 1) : m > 65535 && (m -= 65536, o.push(m >>> 10 & 1023 | 55296), m = 56320 | m & 1023), o.push(m), f += y;
      }
      return Fw(o);
    }
    var Od = 4096;
    function Fw(t) {
      let e = t.length;
      if (e <= Od)
        return String.fromCharCode.apply(String, t);
      let r = "", o = 0;
      for (;o < e; )
        r += String.fromCharCode.apply(String, t.slice(o, o += Od));
      return r;
    }
    function Uw(t, e, r) {
      let o = "";
      r = Math.min(t.length, r);
      for (let f = e;f < r; ++f)
        o += String.fromCharCode(t[f] & 127);
      return o;
    }
    function zw(t, e, r) {
      let o = "";
      r = Math.min(t.length, r);
      for (let f = e;f < r; ++f)
        o += String.fromCharCode(t[f]);
      return o;
    }
    function Hw(t, e, r) {
      let o = t.length;
      (!e || e < 0) && (e = 0), (!r || r < 0 || r > o) && (r = o);
      let f = "";
      for (let p = e;p < r; ++p)
        f += Gw[t[p]];
      return f;
    }
    function Ww(t, e, r) {
      let o = t.slice(e, r), f = "";
      for (let p = 0;p < o.length - 1; p += 2)
        f += String.fromCharCode(o[p] + o[p + 1] * 256);
      return f;
    }
    me.prototype.slice = function(e, r) {
      let o = this.length;
      e = ~~e, r = r === undefined ? o : ~~r, e < 0 ? (e += o, e < 0 && (e = 0)) : e > o && (e = o), r < 0 ? (r += o, r < 0 && (r = 0)) : r > o && (r = o), r < e && (r = e);
      let f = this.subarray(e, r);
      return Object.setPrototypeOf(f, me.prototype), f;
    };
    function Dt(t, e, r) {
      if (t % 1 !== 0 || t < 0)
        throw new RangeError("offset is not uint");
      if (t + e > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    me.prototype.readUintLE = me.prototype.readUIntLE = function(e, r, o) {
      e = e >>> 0, r = r >>> 0, o || Dt(e, r, this.length);
      let f = this[e], p = 1, m = 0;
      for (;++m < r && (p *= 256); )
        f += this[e + m] * p;
      return f;
    };
    me.prototype.readUintBE = me.prototype.readUIntBE = function(e, r, o) {
      e = e >>> 0, r = r >>> 0, o || Dt(e, r, this.length);
      let f = this[e + --r], p = 1;
      for (;r > 0 && (p *= 256); )
        f += this[e + --r] * p;
      return f;
    };
    me.prototype.readUint8 = me.prototype.readUInt8 = function(e, r) {
      return e = e >>> 0, r || Dt(e, 1, this.length), this[e];
    };
    me.prototype.readUint16LE = me.prototype.readUInt16LE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 2, this.length), this[e] | this[e + 1] << 8;
    };
    me.prototype.readUint16BE = me.prototype.readUInt16BE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 2, this.length), this[e] << 8 | this[e + 1];
    };
    me.prototype.readUint32LE = me.prototype.readUInt32LE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    };
    me.prototype.readUint32BE = me.prototype.readUInt32BE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    };
    me.prototype.readBigUInt64LE = Ti(function(e) {
      e = e >>> 0, Yn(e, "offset");
      let r = this[e], o = this[e + 7];
      (r === undefined || o === undefined) && Vf(e, this.length - 8);
      let f = r + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, p = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + o * 2 ** 24;
      return BigInt(f) + (BigInt(p) << BigInt(32));
    });
    me.prototype.readBigUInt64BE = Ti(function(e) {
      e = e >>> 0, Yn(e, "offset");
      let r = this[e], o = this[e + 7];
      (r === undefined || o === undefined) && Vf(e, this.length - 8);
      let f = r * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], p = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + o;
      return (BigInt(f) << BigInt(32)) + BigInt(p);
    });
    me.prototype.readIntLE = function(e, r, o) {
      e = e >>> 0, r = r >>> 0, o || Dt(e, r, this.length);
      let f = this[e], p = 1, m = 0;
      for (;++m < r && (p *= 256); )
        f += this[e + m] * p;
      return p *= 128, f >= p && (f -= Math.pow(2, 8 * r)), f;
    };
    me.prototype.readIntBE = function(e, r, o) {
      e = e >>> 0, r = r >>> 0, o || Dt(e, r, this.length);
      let f = r, p = 1, m = this[e + --f];
      for (;f > 0 && (p *= 256); )
        m += this[e + --f] * p;
      return p *= 128, m >= p && (m -= Math.pow(2, 8 * r)), m;
    };
    me.prototype.readInt8 = function(e, r) {
      return e = e >>> 0, r || Dt(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
    };
    me.prototype.readInt16LE = function(e, r) {
      e = e >>> 0, r || Dt(e, 2, this.length);
      let o = this[e] | this[e + 1] << 8;
      return o & 32768 ? o | 4294901760 : o;
    };
    me.prototype.readInt16BE = function(e, r) {
      e = e >>> 0, r || Dt(e, 2, this.length);
      let o = this[e + 1] | this[e] << 8;
      return o & 32768 ? o | 4294901760 : o;
    };
    me.prototype.readInt32LE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    };
    me.prototype.readInt32BE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    };
    me.prototype.readBigInt64LE = Ti(function(e) {
      e = e >>> 0, Yn(e, "offset");
      let r = this[e], o = this[e + 7];
      (r === undefined || o === undefined) && Vf(e, this.length - 8);
      let f = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (o << 24);
      return (BigInt(f) << BigInt(32)) + BigInt(r + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
    });
    me.prototype.readBigInt64BE = Ti(function(e) {
      e = e >>> 0, Yn(e, "offset");
      let r = this[e], o = this[e + 7];
      (r === undefined || o === undefined) && Vf(e, this.length - 8);
      let f = (r << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
      return (BigInt(f) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + o);
    });
    me.prototype.readFloatLE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 4, this.length), Gn.read(this, e, true, 23, 4);
    };
    me.prototype.readFloatBE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 4, this.length), Gn.read(this, e, false, 23, 4);
    };
    me.prototype.readDoubleLE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 8, this.length), Gn.read(this, e, true, 52, 8);
    };
    me.prototype.readDoubleBE = function(e, r) {
      return e = e >>> 0, r || Dt(e, 8, this.length), Gn.read(this, e, false, 52, 8);
    };
    function er(t, e, r, o, f, p) {
      if (!me.isBuffer(t))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > f || e < p)
        throw new RangeError('"value" argument is out of bounds');
      if (r + o > t.length)
        throw new RangeError("Index out of range");
    }
    me.prototype.writeUintLE = me.prototype.writeUIntLE = function(e, r, o, f) {
      if (e = +e, r = r >>> 0, o = o >>> 0, !f) {
        let y = Math.pow(2, 8 * o) - 1;
        er(this, e, r, o, y, 0);
      }
      let p = 1, m = 0;
      for (this[r] = e & 255;++m < o && (p *= 256); )
        this[r + m] = e / p & 255;
      return r + o;
    };
    me.prototype.writeUintBE = me.prototype.writeUIntBE = function(e, r, o, f) {
      if (e = +e, r = r >>> 0, o = o >>> 0, !f) {
        let y = Math.pow(2, 8 * o) - 1;
        er(this, e, r, o, y, 0);
      }
      let p = o - 1, m = 1;
      for (this[r + p] = e & 255;--p >= 0 && (m *= 256); )
        this[r + p] = e / m & 255;
      return r + o;
    };
    me.prototype.writeUint8 = me.prototype.writeUInt8 = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 1, 255, 0), this[r] = e & 255, r + 1;
    };
    me.prototype.writeUint16LE = me.prototype.writeUInt16LE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 2, 65535, 0), this[r] = e & 255, this[r + 1] = e >>> 8, r + 2;
    };
    me.prototype.writeUint16BE = me.prototype.writeUInt16BE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 2, 65535, 0), this[r] = e >>> 8, this[r + 1] = e & 255, r + 2;
    };
    me.prototype.writeUint32LE = me.prototype.writeUInt32LE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 4, 4294967295, 0), this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = e & 255, r + 4;
    };
    me.prototype.writeUint32BE = me.prototype.writeUInt32BE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 4, 4294967295, 0), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255, r + 4;
    };
    function jd(t, e, r, o, f) {
      Yd(e, o, f, t, r, 7);
      let p = Number(e & BigInt(4294967295));
      t[r++] = p, p = p >> 8, t[r++] = p, p = p >> 8, t[r++] = p, p = p >> 8, t[r++] = p;
      let m = Number(e >> BigInt(32) & BigInt(4294967295));
      return t[r++] = m, m = m >> 8, t[r++] = m, m = m >> 8, t[r++] = m, m = m >> 8, t[r++] = m, r;
    }
    function Zd(t, e, r, o, f) {
      Yd(e, o, f, t, r, 7);
      let p = Number(e & BigInt(4294967295));
      t[r + 7] = p, p = p >> 8, t[r + 6] = p, p = p >> 8, t[r + 5] = p, p = p >> 8, t[r + 4] = p;
      let m = Number(e >> BigInt(32) & BigInt(4294967295));
      return t[r + 3] = m, m = m >> 8, t[r + 2] = m, m = m >> 8, t[r + 1] = m, m = m >> 8, t[r] = m, r + 8;
    }
    me.prototype.writeBigUInt64LE = Ti(function(e, r = 0) {
      return jd(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    me.prototype.writeBigUInt64BE = Ti(function(e, r = 0) {
      return Zd(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    me.prototype.writeIntLE = function(e, r, o, f) {
      if (e = +e, r = r >>> 0, !f) {
        let M = Math.pow(2, 8 * o - 1);
        er(this, e, r, o, M - 1, -M);
      }
      let p = 0, m = 1, y = 0;
      for (this[r] = e & 255;++p < o && (m *= 256); )
        e < 0 && y === 0 && this[r + p - 1] !== 0 && (y = 1), this[r + p] = (e / m >> 0) - y & 255;
      return r + o;
    };
    me.prototype.writeIntBE = function(e, r, o, f) {
      if (e = +e, r = r >>> 0, !f) {
        let M = Math.pow(2, 8 * o - 1);
        er(this, e, r, o, M - 1, -M);
      }
      let p = o - 1, m = 1, y = 0;
      for (this[r + p] = e & 255;--p >= 0 && (m *= 256); )
        e < 0 && y === 0 && this[r + p + 1] !== 0 && (y = 1), this[r + p] = (e / m >> 0) - y & 255;
      return r + o;
    };
    me.prototype.writeInt8 = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[r] = e & 255, r + 1;
    };
    me.prototype.writeInt16LE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 2, 32767, -32768), this[r] = e & 255, this[r + 1] = e >>> 8, r + 2;
    };
    me.prototype.writeInt16BE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 2, 32767, -32768), this[r] = e >>> 8, this[r + 1] = e & 255, r + 2;
    };
    me.prototype.writeInt32LE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 4, 2147483647, -2147483648), this[r] = e & 255, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24, r + 4;
    };
    me.prototype.writeInt32BE = function(e, r, o) {
      return e = +e, r = r >>> 0, o || er(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255, r + 4;
    };
    me.prototype.writeBigInt64LE = Ti(function(e, r = 0) {
      return jd(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    me.prototype.writeBigInt64BE = Ti(function(e, r = 0) {
      return Zd(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function Vd(t, e, r, o, f, p) {
      if (r + o > t.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function $d(t, e, r, o, f) {
      return e = +e, r = r >>> 0, f || Vd(t, e, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), Gn.write(t, e, r, o, 23, 4), r + 4;
    }
    me.prototype.writeFloatLE = function(e, r, o) {
      return $d(this, e, r, true, o);
    };
    me.prototype.writeFloatBE = function(e, r, o) {
      return $d(this, e, r, false, o);
    };
    function Gd(t, e, r, o, f) {
      return e = +e, r = r >>> 0, f || Vd(t, e, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), Gn.write(t, e, r, o, 52, 8), r + 8;
    }
    me.prototype.writeDoubleLE = function(e, r, o) {
      return Gd(this, e, r, true, o);
    };
    me.prototype.writeDoubleBE = function(e, r, o) {
      return Gd(this, e, r, false, o);
    };
    me.prototype.copy = function(e, r, o, f) {
      if (!me.isBuffer(e))
        throw new TypeError("argument should be a Buffer");
      if (o || (o = 0), !f && f !== 0 && (f = this.length), r >= e.length && (r = e.length), r || (r = 0), f > 0 && f < o && (f = o), f === o || e.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (o < 0 || o >= this.length)
        throw new RangeError("Index out of range");
      if (f < 0)
        throw new RangeError("sourceEnd out of bounds");
      f > this.length && (f = this.length), e.length - r < f - o && (f = e.length - r + o);
      let p = f - o;
      return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, o, f) : Uint8Array.prototype.set.call(e, this.subarray(o, f), r), p;
    };
    me.prototype.fill = function(e, r, o, f) {
      if (typeof e == "string") {
        if (typeof r == "string" ? (f = r, r = 0, o = this.length) : typeof o == "string" && (f = o, o = this.length), f !== undefined && typeof f != "string")
          throw new TypeError("encoding must be a string");
        if (typeof f == "string" && !me.isEncoding(f))
          throw new TypeError("Unknown encoding: " + f);
        if (e.length === 1) {
          let m = e.charCodeAt(0);
          (f === "utf8" && m < 128 || f === "latin1") && (e = m);
        }
      } else
        typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
      if (r < 0 || this.length < r || this.length < o)
        throw new RangeError("Out of range index");
      if (o <= r)
        return this;
      r = r >>> 0, o = o === undefined ? this.length : o >>> 0, e || (e = 0);
      let p;
      if (typeof e == "number")
        for (p = r;p < o; ++p)
          this[p] = e;
      else {
        let m = me.isBuffer(e) ? e : me.from(e, f), y = m.length;
        if (y === 0)
          throw new TypeError('The value "' + e + '" is invalid for argument "value"');
        for (p = 0;p < o - r; ++p)
          this[p + r] = m[p % y];
      }
      return this;
    };
    var $n = {};
    function P0(t, e, r) {
      $n[t] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t}]`, this.stack, delete this.name;
        }
        get code() {
          return t;
        }
        set code(f) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: f, writable: true });
        }
        toString() {
          return `${this.name} [${t}]: ${this.message}`;
        }
      };
    }
    P0("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
      return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    P0("ERR_INVALID_ARG_TYPE", function(t, e) {
      return `The "${t}" argument must be of type number. Received type ${typeof e}`;
    }, TypeError);
    P0("ERR_OUT_OF_RANGE", function(t, e, r) {
      let o = `The value of "${t}" is out of range.`, f = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? f = Fd(String(r)) : typeof r == "bigint" && (f = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (f = Fd(f)), f += "n"), o += ` It must be ${e}. Received ${f}`, o;
    }, RangeError);
    function Fd(t) {
      let e = "", r = t.length, o = t[0] === "-" ? 1 : 0;
      for (;r >= o + 4; r -= 3)
        e = `_${t.slice(r - 3, r)}${e}`;
      return `${t.slice(0, r)}${e}`;
    }
    function Kw(t, e, r) {
      Yn(e, "offset"), (t[e] === undefined || t[e + r] === undefined) && Vf(e, t.length - (r + 1));
    }
    function Yd(t, e, r, o, f, p) {
      if (t > r || t < e) {
        let m = typeof e == "bigint" ? "n" : "", y;
        throw p > 3 ? e === 0 || e === BigInt(0) ? y = `>= 0${m} and < 2${m} ** ${(p + 1) * 8}${m}` : y = `>= -(2${m} ** ${(p + 1) * 8 - 1}${m}) and < 2 ** ${(p + 1) * 8 - 1}${m}` : y = `>= ${e}${m} and <= ${r}${m}`, new $n.ERR_OUT_OF_RANGE("value", y, t);
      }
      Kw(o, f, p);
    }
    function Yn(t, e) {
      if (typeof t != "number")
        throw new $n.ERR_INVALID_ARG_TYPE(e, "number", t);
    }
    function Vf(t, e, r) {
      throw Math.floor(t) !== t ? (Yn(t, r), new $n.ERR_OUT_OF_RANGE(r || "offset", "an integer", t)) : e < 0 ? new $n.ERR_BUFFER_OUT_OF_BOUNDS : new $n.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t);
    }
    var jw = /[^+/0-9A-Za-z-_]/g;
    function Zw(t) {
      if (t = t.split("=")[0], t = t.trim().replace(jw, ""), t.length < 2)
        return "";
      for (;t.length % 4 !== 0; )
        t = t + "=";
      return t;
    }
    function L0(t, e) {
      e = e || 1 / 0;
      let r, o = t.length, f = null, p = [];
      for (let m = 0;m < o; ++m) {
        if (r = t.charCodeAt(m), r > 55295 && r < 57344) {
          if (!f) {
            if (r > 56319) {
              (e -= 3) > -1 && p.push(239, 191, 189);
              continue;
            } else if (m + 1 === o) {
              (e -= 3) > -1 && p.push(239, 191, 189);
              continue;
            }
            f = r;
            continue;
          }
          if (r < 56320) {
            (e -= 3) > -1 && p.push(239, 191, 189), f = r;
            continue;
          }
          r = (f - 55296 << 10 | r - 56320) + 65536;
        } else
          f && (e -= 3) > -1 && p.push(239, 191, 189);
        if (f = null, r < 128) {
          if ((e -= 1) < 0)
            break;
          p.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0)
            break;
          p.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0)
            break;
          p.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((e -= 4) < 0)
            break;
          p.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return p;
    }
    function Vw(t) {
      let e = [];
      for (let r = 0;r < t.length; ++r)
        e.push(t.charCodeAt(r) & 255);
      return e;
    }
    function $w(t, e) {
      let r, o, f, p = [];
      for (let m = 0;m < t.length && !((e -= 2) < 0); ++m)
        r = t.charCodeAt(m), o = r >> 8, f = r % 256, p.push(f), p.push(o);
      return p;
    }
    function Xd(t) {
      return I0.toByteArray(Zw(t));
    }
    function to(t, e, r, o) {
      let f;
      for (f = 0;f < o && !(f + r >= e.length || f >= t.length); ++f)
        e[f + r] = t[f];
      return f;
    }
    function Zr(t, e) {
      return t instanceof e || t != null && t.constructor != null && t.constructor.name != null && t.constructor.name === e.name;
    }
    function C0(t) {
      return t !== t;
    }
    var Gw = function() {
      let t = "0123456789abcdef", e = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let o = r * 16;
        for (let f = 0;f < 16; ++f)
          e[o + f] = t[r] + t[f];
      }
      return e;
    }();
    function Ti(t) {
      return typeof BigInt > "u" ? Yw : t;
    }
    function Yw() {
      throw new Error("BigInt not supported");
    }
  });
  Te = T((O0, Qd) => {
    var ro = Ut(), Vr = ro.Buffer;
    function Jd(t, e) {
      for (var r in t)
        e[r] = t[r];
    }
    Vr.from && Vr.alloc && Vr.allocUnsafe && Vr.allocUnsafeSlow ? Qd.exports = ro : (Jd(ro, O0), O0.Buffer = an);
    function an(t, e, r) {
      return Vr(t, e, r);
    }
    an.prototype = Object.create(Vr.prototype);
    Jd(Vr, an);
    an.from = function(t, e, r) {
      if (typeof t == "number")
        throw new TypeError("Argument must not be a number");
      return Vr(t, e, r);
    };
    an.alloc = function(t, e, r) {
      if (typeof t != "number")
        throw new TypeError("Argument must be a number");
      var o = Vr(t);
      return e !== undefined ? typeof r == "string" ? o.fill(e, r) : o.fill(e) : o.fill(0), o;
    };
    an.allocUnsafe = function(t) {
      if (typeof t != "number")
        throw new TypeError("Argument must be a number");
      return Vr(t);
    };
    an.allocUnsafeSlow = function(t) {
      if (typeof t != "number")
        throw new TypeError("Argument must be a number");
      return ro.SlowBuffer(t);
    };
  });
  on = T((Gq, U0) => {
    var F0 = 65536, Xw = 4294967295;
    function Jw() {
      throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`);
    }
    var Qw = Te().Buffer, io = global.crypto || global.msCrypto;
    io && io.getRandomValues ? U0.exports = e6 : U0.exports = Jw;
    function e6(t, e) {
      if (t > Xw)
        throw new RangeError("requested too many random bytes");
      var r = Qw.allocUnsafe(t);
      if (t > 0)
        if (t > F0)
          for (var o = 0;o < t; o += F0)
            io.getRandomValues(r.slice(o, o + F0));
        else
          io.getRandomValues(r);
      return typeof e == "function" ? process.nextTick(function() {
        e(null, r);
      }) : r;
    }
  });
  Ie = T((Yq, z0) => {
    typeof Object.create == "function" ? z0.exports = function(e, r) {
      r && (e.super_ = r, e.prototype = Object.create(r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
    } : z0.exports = function(e, r) {
      if (r) {
        e.super_ = r;
        var o = function() {
        };
        o.prototype = r.prototype, e.prototype = new o, e.prototype.constructor = e;
      }
    };
  });
  ki = T((Xq, H0) => {
    var Jn = typeof Reflect == "object" ? Reflect : null, ec = Jn && typeof Jn.apply == "function" ? Jn.apply : function(e, r, o) {
      return Function.prototype.apply.call(e, r, o);
    }, no;
    Jn && typeof Jn.ownKeys == "function" ? no = Jn.ownKeys : Object.getOwnPropertySymbols ? no = function(e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : no = function(e) {
      return Object.getOwnPropertyNames(e);
    };
    function t6(t) {
      console && console.warn && console.warn(t);
    }
    var rc = Number.isNaN || function(e) {
      return e !== e;
    };
    function Fe() {
      Fe.init.call(this);
    }
    H0.exports = Fe;
    H0.exports.once = f6;
    Fe.EventEmitter = Fe;
    Fe.prototype._events = undefined;
    Fe.prototype._eventsCount = 0;
    Fe.prototype._maxListeners = undefined;
    var tc = 10;
    function fo(t) {
      if (typeof t != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    Object.defineProperty(Fe, "defaultMaxListeners", { enumerable: true, get: function() {
      return tc;
    }, set: function(t) {
      if (typeof t != "number" || t < 0 || rc(t))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
      tc = t;
    } });
    Fe.init = function() {
      (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    };
    Fe.prototype.setMaxListeners = function(e) {
      if (typeof e != "number" || e < 0 || rc(e))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
      return this._maxListeners = e, this;
    };
    function ic(t) {
      return t._maxListeners === undefined ? Fe.defaultMaxListeners : t._maxListeners;
    }
    Fe.prototype.getMaxListeners = function() {
      return ic(this);
    };
    Fe.prototype.emit = function(e) {
      for (var r = [], o = 1;o < arguments.length; o++)
        r.push(arguments[o]);
      var f = e === "error", p = this._events;
      if (p !== undefined)
        f = f && p.error === undefined;
      else if (!f)
        return false;
      if (f) {
        var m;
        if (r.length > 0 && (m = r[0]), m instanceof Error)
          throw m;
        var y = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw y.context = m, y;
      }
      var M = p[e];
      if (M === undefined)
        return false;
      if (typeof M == "function")
        ec(M, this, r);
      else
        for (var x = M.length, S = sc(M, x), o = 0;o < x; ++o)
          ec(S[o], this, r);
      return true;
    };
    function nc(t, e, r, o) {
      var f, p, m;
      if (fo(r), p = t._events, p === undefined ? (p = t._events = Object.create(null), t._eventsCount = 0) : (p.newListener !== undefined && (t.emit("newListener", e, r.listener ? r.listener : r), p = t._events), m = p[e]), m === undefined)
        m = p[e] = r, ++t._eventsCount;
      else if (typeof m == "function" ? m = p[e] = o ? [r, m] : [m, r] : o ? m.unshift(r) : m.push(r), f = ic(t), f > 0 && m.length > f && !m.warned) {
        m.warned = true;
        var y = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        y.name = "MaxListenersExceededWarning", y.emitter = t, y.type = e, y.count = m.length, t6(y);
      }
      return t;
    }
    Fe.prototype.addListener = function(e, r) {
      return nc(this, e, r, false);
    };
    Fe.prototype.on = Fe.prototype.addListener;
    Fe.prototype.prependListener = function(e, r) {
      return nc(this, e, r, true);
    };
    function r6() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function fc(t, e, r) {
      var o = { fired: false, wrapFn: undefined, target: t, type: e, listener: r }, f = r6.bind(o);
      return f.listener = r, o.wrapFn = f, f;
    }
    Fe.prototype.once = function(e, r) {
      return fo(r), this.on(e, fc(this, e, r)), this;
    };
    Fe.prototype.prependOnceListener = function(e, r) {
      return fo(r), this.prependListener(e, fc(this, e, r)), this;
    };
    Fe.prototype.removeListener = function(e, r) {
      var o, f, p, m, y;
      if (fo(r), f = this._events, f === undefined)
        return this;
      if (o = f[e], o === undefined)
        return this;
      if (o === r || o.listener === r)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete f[e], f.removeListener && this.emit("removeListener", e, o.listener || r));
      else if (typeof o != "function") {
        for (p = -1, m = o.length - 1;m >= 0; m--)
          if (o[m] === r || o[m].listener === r) {
            y = o[m].listener, p = m;
            break;
          }
        if (p < 0)
          return this;
        p === 0 ? o.shift() : i6(o, p), o.length === 1 && (f[e] = o[0]), f.removeListener !== undefined && this.emit("removeListener", e, y || r);
      }
      return this;
    };
    Fe.prototype.off = Fe.prototype.removeListener;
    Fe.prototype.removeAllListeners = function(e) {
      var r, o, f;
      if (o = this._events, o === undefined)
        return this;
      if (o.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : o[e] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete o[e]), this;
      if (arguments.length === 0) {
        var p = Object.keys(o), m;
        for (f = 0;f < p.length; ++f)
          m = p[f], m !== "removeListener" && this.removeAllListeners(m);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (r = o[e], typeof r == "function")
        this.removeListener(e, r);
      else if (r !== undefined)
        for (f = r.length - 1;f >= 0; f--)
          this.removeListener(e, r[f]);
      return this;
    };
    function ac(t, e, r) {
      var o = t._events;
      if (o === undefined)
        return [];
      var f = o[e];
      return f === undefined ? [] : typeof f == "function" ? r ? [f.listener || f] : [f] : r ? n6(f) : sc(f, f.length);
    }
    Fe.prototype.listeners = function(e) {
      return ac(this, e, true);
    };
    Fe.prototype.rawListeners = function(e) {
      return ac(this, e, false);
    };
    Fe.listenerCount = function(t, e) {
      return typeof t.listenerCount == "function" ? t.listenerCount(e) : oc.call(t, e);
    };
    Fe.prototype.listenerCount = oc;
    function oc(t) {
      var e = this._events;
      if (e !== undefined) {
        var r = e[t];
        if (typeof r == "function")
          return 1;
        if (r !== undefined)
          return r.length;
      }
      return 0;
    }
    Fe.prototype.eventNames = function() {
      return this._eventsCount > 0 ? no(this._events) : [];
    };
    function sc(t, e) {
      for (var r = new Array(e), o = 0;o < e; ++o)
        r[o] = t[o];
      return r;
    }
    function i6(t, e) {
      for (;e + 1 < t.length; e++)
        t[e] = t[e + 1];
      t.pop();
    }
    function n6(t) {
      for (var e = new Array(t.length), r = 0;r < e.length; ++r)
        e[r] = t[r].listener || t[r];
      return e;
    }
    function f6(t, e) {
      return new Promise(function(r, o) {
        function f(m) {
          t.removeListener(e, p), o(m);
        }
        function p() {
          typeof t.removeListener == "function" && t.removeListener("error", f), r([].slice.call(arguments));
        }
        hc(t, e, p, { once: true }), e !== "error" && a6(t, f, { once: true });
      });
    }
    function a6(t, e, r) {
      typeof t.on == "function" && hc(t, "error", e, r);
    }
    function hc(t, e, r, o) {
      if (typeof t.on == "function")
        o.once ? t.once(e, r) : t.on(e, r);
      else if (typeof t.addEventListener == "function")
        t.addEventListener(e, function f(p) {
          o.once && t.removeEventListener(e, f), r(p);
        });
      else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
    }
  });
  W0 = T((Jq, uc) => {
    uc.exports = ki().EventEmitter;
  });
  $f = T(() => {
  });
  pc = T((tI, cc) => {
    function lc(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function(f) {
          return Object.getOwnPropertyDescriptor(t, f).enumerable;
        })), r.push.apply(r, o);
      }
      return r;
    }
    function o6(t) {
      for (var e = 1;e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? lc(Object(r), true).forEach(function(o) {
          s6(t, o, r[o]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lc(Object(r)).forEach(function(o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
        });
      }
      return t;
    }
    function s6(t, e, r) {
      return e in t ? Object.defineProperty(t, e, { value: r, enumerable: true, configurable: true, writable: true }) : t[e] = r, t;
    }
    function h6(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function dc(t, e) {
      for (var r = 0;r < e.length; r++) {
        var o = e[r];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(t, o.key, o);
      }
    }
    function u6(t, e, r) {
      return e && dc(t.prototype, e), r && dc(t, r), t;
    }
    var l6 = Ut(), ao = l6.Buffer, d6 = $f(), K0 = d6.inspect, c6 = K0 && K0.custom || "inspect";
    function p6(t, e, r) {
      ao.prototype.copy.call(t, e, r);
    }
    cc.exports = function() {
      function t() {
        h6(this, t), this.head = null, this.tail = null, this.length = 0;
      }
      return u6(t, [{ key: "push", value: function(r) {
        var o = { data: r, next: null };
        this.length > 0 ? this.tail.next = o : this.head = o, this.tail = o, ++this.length;
      } }, { key: "unshift", value: function(r) {
        var o = { data: r, next: this.head };
        this.length === 0 && (this.tail = o), this.head = o, ++this.length;
      } }, { key: "shift", value: function() {
        if (this.length !== 0) {
          var r = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
        }
      } }, { key: "clear", value: function() {
        this.head = this.tail = null, this.length = 0;
      } }, { key: "join", value: function(r) {
        if (this.length === 0)
          return "";
        for (var o = this.head, f = "" + o.data;o = o.next; )
          f += r + o.data;
        return f;
      } }, { key: "concat", value: function(r) {
        if (this.length === 0)
          return ao.alloc(0);
        for (var o = ao.allocUnsafe(r >>> 0), f = this.head, p = 0;f; )
          p6(f.data, o, p), p += f.data.length, f = f.next;
        return o;
      } }, { key: "consume", value: function(r, o) {
        var f;
        return r < this.head.data.length ? (f = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : r === this.head.data.length ? f = this.shift() : f = o ? this._getString(r) : this._getBuffer(r), f;
      } }, { key: "first", value: function() {
        return this.head.data;
      } }, { key: "_getString", value: function(r) {
        var o = this.head, f = 1, p = o.data;
        for (r -= p.length;o = o.next; ) {
          var m = o.data, y = r > m.length ? m.length : r;
          if (y === m.length ? p += m : p += m.slice(0, r), r -= y, r === 0) {
            y === m.length ? (++f, o.next ? this.head = o.next : this.head = this.tail = null) : (this.head = o, o.data = m.slice(y));
            break;
          }
          ++f;
        }
        return this.length -= f, p;
      } }, { key: "_getBuffer", value: function(r) {
        var o = ao.allocUnsafe(r), f = this.head, p = 1;
        for (f.data.copy(o), r -= f.data.length;f = f.next; ) {
          var m = f.data, y = r > m.length ? m.length : r;
          if (m.copy(o, o.length - r, 0, y), r -= y, r === 0) {
            y === m.length ? (++p, f.next ? this.head = f.next : this.head = this.tail = null) : (this.head = f, f.data = m.slice(y));
            break;
          }
          ++p;
        }
        return this.length -= p, o;
      } }, { key: c6, value: function(r, o) {
        return K0(this, o6({}, o, { depth: 0, customInspect: false }));
      } }]), t;
    }();
  });
  Z0 = T((rI, bc) => {
    function v6(t, e) {
      var r = this, o = this._readableState && this._readableState.destroyed, f = this._writableState && this._writableState.destroyed;
      return o || f ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, process.nextTick(j0, this, t)) : process.nextTick(j0, this, t)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t || null, function(p) {
        !e && p ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(oo, r) : (r._writableState.errorEmitted = true, process.nextTick(vc, r, p)) : process.nextTick(vc, r, p) : e ? (process.nextTick(oo, r), e(p)) : process.nextTick(oo, r);
      }), this);
    }
    function vc(t, e) {
      j0(t, e), oo(t);
    }
    function oo(t) {
      t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
    }
    function b6() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
    function j0(t, e) {
      t.emit("error", e);
    }
    function m6(t, e) {
      var { _readableState: r, _writableState: o } = t;
      r && r.autoDestroy || o && o.autoDestroy ? t.destroy(e) : t.emit("error", e);
    }
    bc.exports = { destroy: v6, undestroy: b6, errorOrDestroy: m6 };
  });
  sn = T((iI, yc) => {
    function g6(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
    }
    var gc = {};
    function dr(t, e, r) {
      r || (r = Error);
      function o(p, m, y) {
        return typeof e == "string" ? e : e(p, m, y);
      }
      var f = function(p) {
        g6(m, p);
        function m(y, M, x) {
          return p.call(this, o(y, M, x)) || this;
        }
        return m;
      }(r);
      f.prototype.name = r.name, f.prototype.code = t, gc[t] = f;
    }
    function mc(t, e) {
      if (Array.isArray(t)) {
        var r = t.length;
        return t = t.map(function(o) {
          return String(o);
        }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
      } else
        return "of ".concat(e, " ").concat(String(t));
    }
    function y6(t, e, r) {
      return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
    }
    function w6(t, e, r) {
      return (r === undefined || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
    }
    function M6(t, e, r) {
      return typeof r != "number" && (r = 0), r + e.length > t.length ? false : t.indexOf(e, r) !== -1;
    }
    dr("ERR_INVALID_OPT_VALUE", function(t, e) {
      return 'The value "' + e + '" is invalid for option "' + t + '"';
    }, TypeError);
    dr("ERR_INVALID_ARG_TYPE", function(t, e, r) {
      var o;
      typeof e == "string" && y6(e, "not ") ? (o = "must not be", e = e.replace(/^not /, "")) : o = "must be";
      var f;
      if (w6(t, " argument"))
        f = "The ".concat(t, " ").concat(o, " ").concat(mc(e, "type"));
      else {
        var p = M6(t, ".") ? "property" : "argument";
        f = 'The "'.concat(t, '" ').concat(p, " ").concat(o, " ").concat(mc(e, "type"));
      }
      return f += ". Received type ".concat(typeof r), f;
    }, TypeError);
    dr("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    dr("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
      return "The " + t + " method is not implemented";
    });
    dr("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    dr("ERR_STREAM_DESTROYED", function(t) {
      return "Cannot call " + t + " after a stream was destroyed";
    });
    dr("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    dr("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    dr("ERR_STREAM_WRITE_AFTER_END", "write after end");
    dr("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    dr("ERR_UNKNOWN_ENCODING", function(t) {
      return "Unknown encoding: " + t;
    }, TypeError);
    dr("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    yc.exports.codes = gc;
  });
  V0 = T((nI, wc) => {
    var _6 = sn().codes.ERR_INVALID_OPT_VALUE;
    function x6(t, e, r) {
      return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
    }
    function S6(t, e, r, o) {
      var f = x6(e, o, r);
      if (f != null) {
        if (!(isFinite(f) && Math.floor(f) === f) || f < 0) {
          var p = o ? r : "highWaterMark";
          throw new _6(p, f);
        }
        return Math.floor(f);
      }
      return t.objectMode ? 16 : 16 * 1024;
    }
    wc.exports = { getHighWaterMark: S6 };
  });
  G0 = T((fI, Mc) => {
    Mc.exports = E6;
    function E6(t, e) {
      if ($0("noDeprecation"))
        return t;
      var r = false;
      function o() {
        if (!r) {
          if ($0("throwDeprecation"))
            throw new Error(e);
          $0("traceDeprecation") ? console.trace(e) : console.warn(e), r = true;
        }
        return t.apply(this, arguments);
      }
      return o;
    }
    function $0(t) {
      try {
        if (!global.localStorage)
          return false;
      } catch {
        return false;
      }
      var e = global.localStorage[t];
      return e == null ? false : String(e).toLowerCase() === "true";
    }
  });
  J0 = T((aI, Rc) => {
    Rc.exports = ht;
    function xc(t) {
      var e = this;
      this.next = null, this.entry = null, this.finish = function() {
        J6(e, t);
      };
    }
    var Qn;
    ht.WritableState = Yf;
    var A6 = { deprecate: G0() }, Sc = W0(), ho = Ut().Buffer, R6 = global.Uint8Array || function() {
    };
    function B6(t) {
      return ho.from(t);
    }
    function q6(t) {
      return ho.isBuffer(t) || t instanceof R6;
    }
    var X0 = Z0(), I6 = V0(), T6 = I6.getHighWaterMark, Li = sn().codes, k6 = Li.ERR_INVALID_ARG_TYPE, L6 = Li.ERR_METHOD_NOT_IMPLEMENTED, N6 = Li.ERR_MULTIPLE_CALLBACK, D6 = Li.ERR_STREAM_CANNOT_PIPE, P6 = Li.ERR_STREAM_DESTROYED, C6 = Li.ERR_STREAM_NULL_VALUES, O6 = Li.ERR_STREAM_WRITE_AFTER_END, F6 = Li.ERR_UNKNOWN_ENCODING, ef = X0.errorOrDestroy;
    Ie()(ht, Sc);
    function U6() {
    }
    function Yf(t, e, r) {
      Qn = Qn || hn(), t = t || {}, typeof r != "boolean" && (r = e instanceof Qn), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = T6(this, t, "writableHighWaterMark", r), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var o = t.decodeStrings === false;
      this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(f) {
        V6(e, f);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = t.emitClose !== false, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new xc(this);
    }
    Yf.prototype.getBuffer = function() {
      for (var e = this.bufferedRequest, r = [];e; )
        r.push(e), e = e.next;
      return r;
    };
    (function() {
      try {
        Object.defineProperty(Yf.prototype, "buffer", { get: A6.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
      } catch {
      }
    })();
    var so;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (so = Function.prototype[Symbol.hasInstance], Object.defineProperty(ht, Symbol.hasInstance, { value: function(e) {
      return so.call(this, e) ? true : this !== ht ? false : e && e._writableState instanceof Yf;
    } })) : so = function(e) {
      return e instanceof this;
    };
    function ht(t) {
      Qn = Qn || hn();
      var e = this instanceof Qn;
      if (!e && !so.call(ht, this))
        return new ht(t);
      this._writableState = new Yf(t, this, e), this.writable = true, t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.final == "function" && (this._final = t.final)), Sc.call(this);
    }
    ht.prototype.pipe = function() {
      ef(this, new D6);
    };
    function z6(t, e) {
      var r = new O6;
      ef(t, r), process.nextTick(e, r);
    }
    function H6(t, e, r, o) {
      var f;
      return r === null ? f = new C6 : typeof r != "string" && !e.objectMode && (f = new k6("chunk", ["string", "Buffer"], r)), f ? (ef(t, f), process.nextTick(o, f), false) : true;
    }
    ht.prototype.write = function(t, e, r) {
      var o = this._writableState, f = false, p = !o.objectMode && q6(t);
      return p && !ho.isBuffer(t) && (t = B6(t)), typeof e == "function" && (r = e, e = null), p ? e = "buffer" : e || (e = o.defaultEncoding), typeof r != "function" && (r = U6), o.ending ? z6(this, r) : (p || H6(this, o, t, r)) && (o.pendingcb++, f = K6(this, o, p, t, e, r)), f;
    };
    ht.prototype.cork = function() {
      this._writableState.corked++;
    };
    ht.prototype.uncork = function() {
      var t = this._writableState;
      t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && Ec(this, t));
    };
    ht.prototype.setDefaultEncoding = function(e) {
      if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
        throw new F6(e);
      return this._writableState.defaultEncoding = e, this;
    };
    Object.defineProperty(ht.prototype, "writableBuffer", { enumerable: false, get: function() {
      return this._writableState && this._writableState.getBuffer();
    } });
    function W6(t, e, r) {
      return !t.objectMode && t.decodeStrings !== false && typeof e == "string" && (e = ho.from(e, r)), e;
    }
    Object.defineProperty(ht.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } });
    function K6(t, e, r, o, f, p) {
      if (!r) {
        var m = W6(e, o, f);
        o !== m && (r = true, f = "buffer", o = m);
      }
      var y = e.objectMode ? 1 : o.length;
      e.length += y;
      var M = e.length < e.highWaterMark;
      if (M || (e.needDrain = true), e.writing || e.corked) {
        var x = e.lastBufferedRequest;
        e.lastBufferedRequest = { chunk: o, encoding: f, isBuf: r, callback: p, next: null }, x ? x.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
      } else
        Y0(t, e, false, y, o, f, p);
      return M;
    }
    function Y0(t, e, r, o, f, p, m) {
      e.writelen = o, e.writecb = m, e.writing = true, e.sync = true, e.destroyed ? e.onwrite(new P6("write")) : r ? t._writev(f, e.onwrite) : t._write(f, p, e.onwrite), e.sync = false;
    }
    function j6(t, e, r, o, f) {
      --e.pendingcb, r ? (process.nextTick(f, o), process.nextTick(Gf, t, e), t._writableState.errorEmitted = true, ef(t, o)) : (f(o), t._writableState.errorEmitted = true, ef(t, o), Gf(t, e));
    }
    function Z6(t) {
      t.writing = false, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
    }
    function V6(t, e) {
      var r = t._writableState, o = r.sync, f = r.writecb;
      if (typeof f != "function")
        throw new N6;
      if (Z6(r), e)
        j6(t, r, o, e, f);
      else {
        var p = Ac(r) || t.destroyed;
        !p && !r.corked && !r.bufferProcessing && r.bufferedRequest && Ec(t, r), o ? process.nextTick(_c, t, r, p, f) : _c(t, r, p, f);
      }
    }
    function _c(t, e, r, o) {
      r || $6(t, e), e.pendingcb--, o(), Gf(t, e);
    }
    function $6(t, e) {
      e.length === 0 && e.needDrain && (e.needDrain = false, t.emit("drain"));
    }
    function Ec(t, e) {
      e.bufferProcessing = true;
      var r = e.bufferedRequest;
      if (t._writev && r && r.next) {
        var o = e.bufferedRequestCount, f = new Array(o), p = e.corkedRequestsFree;
        p.entry = r;
        for (var m = 0, y = true;r; )
          f[m] = r, r.isBuf || (y = false), r = r.next, m += 1;
        f.allBuffers = y, Y0(t, e, true, e.length, f, "", p.finish), e.pendingcb++, e.lastBufferedRequest = null, p.next ? (e.corkedRequestsFree = p.next, p.next = null) : e.corkedRequestsFree = new xc(e), e.bufferedRequestCount = 0;
      } else {
        for (;r; ) {
          var { chunk: M, encoding: x, callback: S } = r, E = e.objectMode ? 1 : M.length;
          if (Y0(t, e, false, E, M, x, S), r = r.next, e.bufferedRequestCount--, e.writing)
            break;
        }
        r === null && (e.lastBufferedRequest = null);
      }
      e.bufferedRequest = r, e.bufferProcessing = false;
    }
    ht.prototype._write = function(t, e, r) {
      r(new L6("_write()"));
    };
    ht.prototype._writev = null;
    ht.prototype.end = function(t, e, r) {
      var o = this._writableState;
      return typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null), t != null && this.write(t, e), o.corked && (o.corked = 1, this.uncork()), o.ending || X6(this, o, r), this;
    };
    Object.defineProperty(ht.prototype, "writableLength", { enumerable: false, get: function() {
      return this._writableState.length;
    } });
    function Ac(t) {
      return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
    }
    function G6(t, e) {
      t._final(function(r) {
        e.pendingcb--, r && ef(t, r), e.prefinished = true, t.emit("prefinish"), Gf(t, e);
      });
    }
    function Y6(t, e) {
      !e.prefinished && !e.finalCalled && (typeof t._final == "function" && !e.destroyed ? (e.pendingcb++, e.finalCalled = true, process.nextTick(G6, t, e)) : (e.prefinished = true, t.emit("prefinish")));
    }
    function Gf(t, e) {
      var r = Ac(e);
      if (r && (Y6(t, e), e.pendingcb === 0 && (e.finished = true, t.emit("finish"), e.autoDestroy))) {
        var o = t._readableState;
        (!o || o.autoDestroy && o.endEmitted) && t.destroy();
      }
      return r;
    }
    function X6(t, e, r) {
      e.ending = true, Gf(t, e), r && (e.finished ? process.nextTick(r) : t.once("finish", r)), e.ended = true, t.writable = false;
    }
    function J6(t, e, r) {
      var o = t.entry;
      for (t.entry = null;o; ) {
        var f = o.callback;
        e.pendingcb--, f(r), o = o.next;
      }
      e.corkedRequestsFree.next = t;
    }
    Object.defineProperty(ht.prototype, "destroyed", { enumerable: false, get: function() {
      return this._writableState === undefined ? false : this._writableState.destroyed;
    }, set: function(e) {
      !this._writableState || (this._writableState.destroyed = e);
    } });
    ht.prototype.destroy = X0.destroy;
    ht.prototype._undestroy = X0.undestroy;
    ht.prototype._destroy = function(t, e) {
      e(t);
    };
  });
  hn = T((oI, qc) => {
    var Q6 = Object.keys || function(t) {
      var e = [];
      for (var r in t)
        e.push(r);
      return e;
    };
    qc.exports = $r;
    var Bc = th(), eh = J0();
    Ie()($r, Bc);
    for (Q0 = Q6(eh.prototype), uo = 0;uo < Q0.length; uo++)
      lo = Q0[uo], $r.prototype[lo] || ($r.prototype[lo] = eh.prototype[lo]);
    var Q0, lo, uo;
    function $r(t) {
      if (!(this instanceof $r))
        return new $r(t);
      Bc.call(this, t), eh.call(this, t), this.allowHalfOpen = true, t && (t.readable === false && (this.readable = false), t.writable === false && (this.writable = false), t.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", eM)));
    }
    Object.defineProperty($r.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } });
    Object.defineProperty($r.prototype, "writableBuffer", { enumerable: false, get: function() {
      return this._writableState && this._writableState.getBuffer();
    } });
    Object.defineProperty($r.prototype, "writableLength", { enumerable: false, get: function() {
      return this._writableState.length;
    } });
    function eM() {
      this._writableState.ended || process.nextTick(tM, this);
    }
    function tM(t) {
      t.end();
    }
    Object.defineProperty($r.prototype, "destroyed", { enumerable: false, get: function() {
      return this._readableState === undefined || this._writableState === undefined ? false : this._readableState.destroyed && this._writableState.destroyed;
    }, set: function(e) {
      this._readableState === undefined || this._writableState === undefined || (this._readableState.destroyed = e, this._writableState.destroyed = e);
    } });
  });
  co = T((Tc) => {
    var ih = Te().Buffer, Ic = ih.isEncoding || function(t) {
      switch (t = "" + t, t && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function rM(t) {
      if (!t)
        return "utf8";
      for (var e;; )
        switch (t) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return t;
          default:
            if (e)
              return;
            t = ("" + t).toLowerCase(), e = true;
        }
    }
    function iM(t) {
      var e = rM(t);
      if (typeof e != "string" && (ih.isEncoding === Ic || !Ic(t)))
        throw new Error("Unknown encoding: " + t);
      return e || t;
    }
    Tc.StringDecoder = Xf;
    function Xf(t) {
      this.encoding = iM(t);
      var e;
      switch (this.encoding) {
        case "utf16le":
          this.text = hM, this.end = uM, e = 4;
          break;
        case "utf8":
          this.fillLast = aM, e = 4;
          break;
        case "base64":
          this.text = lM, this.end = dM, e = 3;
          break;
        default:
          this.write = cM, this.end = pM;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = ih.allocUnsafe(e);
    }
    Xf.prototype.write = function(t) {
      if (t.length === 0)
        return "";
      var e, r;
      if (this.lastNeed) {
        if (e = this.fillLast(t), e === undefined)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
    };
    Xf.prototype.end = sM;
    Xf.prototype.text = oM;
    Xf.prototype.fillLast = function(t) {
      if (this.lastNeed <= t.length)
        return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
    };
    function rh(t) {
      return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
    }
    function nM(t, e, r) {
      var o = e.length - 1;
      if (o < r)
        return 0;
      var f = rh(e[o]);
      return f >= 0 ? (f > 0 && (t.lastNeed = f - 1), f) : --o < r || f === -2 ? 0 : (f = rh(e[o]), f >= 0 ? (f > 0 && (t.lastNeed = f - 2), f) : --o < r || f === -2 ? 0 : (f = rh(e[o]), f >= 0 ? (f > 0 && (f === 2 ? f = 0 : t.lastNeed = f - 3), f) : 0));
    }
    function fM(t, e, r) {
      if ((e[0] & 192) !== 128)
        return t.lastNeed = 0, "\uFFFD";
      if (t.lastNeed > 1 && e.length > 1) {
        if ((e[1] & 192) !== 128)
          return t.lastNeed = 1, "\uFFFD";
        if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128)
          return t.lastNeed = 2, "\uFFFD";
      }
    }
    function aM(t) {
      var e = this.lastTotal - this.lastNeed, r = fM(this, t, e);
      if (r !== undefined)
        return r;
      if (this.lastNeed <= t.length)
        return t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length;
    }
    function oM(t, e) {
      var r = nM(this, t, e);
      if (!this.lastNeed)
        return t.toString("utf8", e);
      this.lastTotal = r;
      var o = t.length - (r - this.lastNeed);
      return t.copy(this.lastChar, 0, o), t.toString("utf8", e, o);
    }
    function sM(t) {
      var e = t && t.length ? this.write(t) : "";
      return this.lastNeed ? e + "\uFFFD" : e;
    }
    function hM(t, e) {
      if ((t.length - e) % 2 === 0) {
        var r = t.toString("utf16le", e);
        if (r) {
          var o = r.charCodeAt(r.length - 1);
          if (o >= 55296 && o <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
    }
    function uM(t) {
      var e = t && t.length ? this.write(t) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return e + this.lastChar.toString("utf16le", 0, r);
      }
      return e;
    }
    function lM(t, e) {
      var r = (t.length - e) % 3;
      return r === 0 ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
    }
    function dM(t) {
      var e = t && t.length ? this.write(t) : "";
      return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
    }
    function cM(t) {
      return t.toString(this.encoding);
    }
    function pM(t) {
      return t && t.length ? this.write(t) : "";
    }
  });
  Jf = {};
  Ja(Jf, { StringDecoder: () => po.StringDecoder, default: () => po.StringDecoder });
  Qf = R0(() => {
    po = rn(co());
  });
  vo = T((hI, Nc) => {
    var kc = sn().codes.ERR_STREAM_PREMATURE_CLOSE;
    function vM(t) {
      var e = false;
      return function() {
        if (!e) {
          e = true;
          for (var r = arguments.length, o = new Array(r), f = 0;f < r; f++)
            o[f] = arguments[f];
          t.apply(this, o);
        }
      };
    }
    function bM() {
    }
    function mM(t) {
      return t.setHeader && typeof t.abort == "function";
    }
    function Lc(t, e, r) {
      if (typeof e == "function")
        return Lc(t, null, e);
      e || (e = {}), r = vM(r || bM);
      var o = e.readable || e.readable !== false && t.readable, f = e.writable || e.writable !== false && t.writable, p = function() {
        t.writable || y();
      }, m = t._writableState && t._writableState.finished, y = function() {
        f = false, m = true, o || r.call(t);
      }, M = t._readableState && t._readableState.endEmitted, x = function() {
        o = false, M = true, f || r.call(t);
      }, S = function(L) {
        r.call(t, L);
      }, E = function() {
        var L;
        if (o && !M)
          return (!t._readableState || !t._readableState.ended) && (L = new kc), r.call(t, L);
        if (f && !m)
          return (!t._writableState || !t._writableState.ended) && (L = new kc), r.call(t, L);
      }, B = function() {
        t.req.on("finish", y);
      };
      return mM(t) ? (t.on("complete", y), t.on("abort", E), t.req ? B() : t.on("request", B)) : f && !t._writableState && (t.on("end", p), t.on("close", p)), t.on("end", x), t.on("finish", y), e.error !== false && t.on("error", S), t.on("close", E), function() {
        t.removeListener("complete", y), t.removeListener("abort", E), t.removeListener("request", B), t.req && t.req.removeListener("finish", y), t.removeListener("end", p), t.removeListener("close", p), t.removeListener("finish", y), t.removeListener("end", x), t.removeListener("error", S), t.removeListener("close", E);
      };
    }
    Nc.exports = Lc;
  });
  Pc = T((uI, Dc) => {
    var bo;
    function Ni(t, e, r) {
      return e in t ? Object.defineProperty(t, e, { value: r, enumerable: true, configurable: true, writable: true }) : t[e] = r, t;
    }
    var gM = vo(), Di = Symbol("lastResolve"), un = Symbol("lastReject"), ea = Symbol("error"), mo = Symbol("ended"), ln = Symbol("lastPromise"), nh = Symbol("handlePromise"), dn = Symbol("stream");
    function Pi(t, e) {
      return { value: t, done: e };
    }
    function yM(t) {
      var e = t[Di];
      if (e !== null) {
        var r = t[dn].read();
        r !== null && (t[ln] = null, t[Di] = null, t[un] = null, e(Pi(r, false)));
      }
    }
    function wM(t) {
      process.nextTick(yM, t);
    }
    function MM(t, e) {
      return function(r, o) {
        t.then(function() {
          if (e[mo]) {
            r(Pi(undefined, true));
            return;
          }
          e[nh](r, o);
        }, o);
      };
    }
    var _M = Object.getPrototypeOf(function() {
    }), xM = Object.setPrototypeOf((bo = { get stream() {
      return this[dn];
    }, next: function() {
      var e = this, r = this[ea];
      if (r !== null)
        return Promise.reject(r);
      if (this[mo])
        return Promise.resolve(Pi(undefined, true));
      if (this[dn].destroyed)
        return new Promise(function(m, y) {
          process.nextTick(function() {
            e[ea] ? y(e[ea]) : m(Pi(undefined, true));
          });
        });
      var o = this[ln], f;
      if (o)
        f = new Promise(MM(o, this));
      else {
        var p = this[dn].read();
        if (p !== null)
          return Promise.resolve(Pi(p, false));
        f = new Promise(this[nh]);
      }
      return this[ln] = f, f;
    } }, Ni(bo, Symbol.asyncIterator, function() {
      return this;
    }), Ni(bo, "return", function() {
      var e = this;
      return new Promise(function(r, o) {
        e[dn].destroy(null, function(f) {
          if (f) {
            o(f);
            return;
          }
          r(Pi(undefined, true));
        });
      });
    }), bo), _M), SM = function(e) {
      var r, o = Object.create(xM, (r = {}, Ni(r, dn, { value: e, writable: true }), Ni(r, Di, { value: null, writable: true }), Ni(r, un, { value: null, writable: true }), Ni(r, ea, { value: null, writable: true }), Ni(r, mo, { value: e._readableState.endEmitted, writable: true }), Ni(r, nh, { value: function(p, m) {
        var y = o[dn].read();
        y ? (o[ln] = null, o[Di] = null, o[un] = null, p(Pi(y, false))) : (o[Di] = p, o[un] = m);
      }, writable: true }), r));
      return o[ln] = null, gM(e, function(f) {
        if (f && f.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var p = o[un];
          p !== null && (o[ln] = null, o[Di] = null, o[un] = null, p(f)), o[ea] = f;
          return;
        }
        var m = o[Di];
        m !== null && (o[ln] = null, o[Di] = null, o[un] = null, m(Pi(undefined, true))), o[mo] = true;
      }), e.on("readable", wM.bind(null, o)), o;
    };
    Dc.exports = SM;
  });
  Oc = T((lI, Cc) => {
    Cc.exports = function() {
      throw new Error("Readable.from is not available in the browser");
    };
  });
  th = T((cI, $c) => {
    $c.exports = Ce;
    var tf;
    Ce.ReadableState = Hc;
    var dI = ki().EventEmitter, zc = function(e, r) {
      return e.listeners(r).length;
    }, ra = W0(), go = Ut().Buffer, EM = global.Uint8Array || function() {
    };
    function AM(t) {
      return go.from(t);
    }
    function RM(t) {
      return go.isBuffer(t) || t instanceof EM;
    }
    var fh = $f(), Ne;
    fh && fh.debuglog ? Ne = fh.debuglog("stream") : Ne = function() {
    };
    var BM = pc(), dh = Z0(), qM = V0(), IM = qM.getHighWaterMark, yo = sn().codes, TM = yo.ERR_INVALID_ARG_TYPE, kM = yo.ERR_STREAM_PUSH_AFTER_EOF, LM = yo.ERR_METHOD_NOT_IMPLEMENTED, NM = yo.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, rf, ah, oh;
    Ie()(Ce, ra);
    var ta = dh.errorOrDestroy, sh = ["error", "close", "destroy", "pause", "resume"];
    function DM(t, e, r) {
      if (typeof t.prependListener == "function")
        return t.prependListener(e, r);
      !t._events || !t._events[e] ? t.on(e, r) : Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
    }
    function Hc(t, e, r) {
      tf = tf || hn(), t = t || {}, typeof r != "boolean" && (r = e instanceof tf), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = IM(this, t, "readableHighWaterMark", r), this.buffer = new BM, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = t.emitClose !== false, this.autoDestroy = !!t.autoDestroy, this.destroyed = false, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t.encoding && (rf || (rf = (Qf(), ur(Jf)).StringDecoder), this.decoder = new rf(t.encoding), this.encoding = t.encoding);
    }
    function Ce(t) {
      if (tf = tf || hn(), !(this instanceof Ce))
        return new Ce(t);
      var e = this instanceof tf;
      this._readableState = new Hc(t, this, e), this.readable = true, t && (typeof t.read == "function" && (this._read = t.read), typeof t.destroy == "function" && (this._destroy = t.destroy)), ra.call(this);
    }
    Object.defineProperty(Ce.prototype, "destroyed", { enumerable: false, get: function() {
      return this._readableState === undefined ? false : this._readableState.destroyed;
    }, set: function(e) {
      !this._readableState || (this._readableState.destroyed = e);
    } });
    Ce.prototype.destroy = dh.destroy;
    Ce.prototype._undestroy = dh.undestroy;
    Ce.prototype._destroy = function(t, e) {
      e(t);
    };
    Ce.prototype.push = function(t, e) {
      var r = this._readableState, o;
      return r.objectMode ? o = true : typeof t == "string" && (e = e || r.defaultEncoding, e !== r.encoding && (t = go.from(t, e), e = ""), o = true), Wc(this, t, e, false, o);
    };
    Ce.prototype.unshift = function(t) {
      return Wc(this, t, null, true, false);
    };
    function Wc(t, e, r, o, f) {
      Ne("readableAddChunk", e);
      var p = t._readableState;
      if (e === null)
        p.reading = false, OM(t, p);
      else {
        var m;
        if (f || (m = PM(p, e)), m)
          ta(t, m);
        else if (p.objectMode || e && e.length > 0)
          if (typeof e != "string" && !p.objectMode && Object.getPrototypeOf(e) !== go.prototype && (e = AM(e)), o)
            p.endEmitted ? ta(t, new NM) : hh(t, p, e, true);
          else if (p.ended)
            ta(t, new kM);
          else {
            if (p.destroyed)
              return false;
            p.reading = false, p.decoder && !r ? (e = p.decoder.write(e), p.objectMode || e.length !== 0 ? hh(t, p, e, false) : lh(t, p)) : hh(t, p, e, false);
          }
        else
          o || (p.reading = false, lh(t, p));
      }
      return !p.ended && (p.length < p.highWaterMark || p.length === 0);
    }
    function hh(t, e, r, o) {
      e.flowing && e.length === 0 && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, o ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && wo(t)), lh(t, e);
    }
    function PM(t, e) {
      var r;
      return !RM(e) && typeof e != "string" && e !== undefined && !t.objectMode && (r = new TM("chunk", ["string", "Buffer", "Uint8Array"], e)), r;
    }
    Ce.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Ce.prototype.setEncoding = function(t) {
      rf || (rf = (Qf(), ur(Jf)).StringDecoder);
      var e = new rf(t);
      this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
      for (var r = this._readableState.buffer.head, o = "";r !== null; )
        o += e.write(r.data), r = r.next;
      return this._readableState.buffer.clear(), o !== "" && this._readableState.buffer.push(o), this._readableState.length = o.length, this;
    };
    var Fc = 1073741824;
    function CM(t) {
      return t >= Fc ? t = Fc : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
    }
    function Uc(t, e) {
      return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = CM(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = true, 0));
    }
    Ce.prototype.read = function(t) {
      Ne("read", t), t = parseInt(t, 10);
      var e = this._readableState, r = t;
      if (t !== 0 && (e.emittedReadable = false), t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
        return Ne("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? uh(this) : wo(this), null;
      if (t = Uc(t, e), t === 0 && e.ended)
        return e.length === 0 && uh(this), null;
      var o = e.needReadable;
      Ne("need readable", o), (e.length === 0 || e.length - t < e.highWaterMark) && (o = true, Ne("length less than watermark", o)), e.ended || e.reading ? (o = false, Ne("reading or ended", o)) : o && (Ne("do read"), e.reading = true, e.sync = true, e.length === 0 && (e.needReadable = true), this._read(e.highWaterMark), e.sync = false, e.reading || (t = Uc(r, e)));
      var f;
      return t > 0 ? f = Zc(t, e) : f = null, f === null ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), e.length === 0 && (e.ended || (e.needReadable = true), r !== t && e.ended && uh(this)), f !== null && this.emit("data", f), f;
    };
    function OM(t, e) {
      if (Ne("onEofChunk"), !e.ended) {
        if (e.decoder) {
          var r = e.decoder.end();
          r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
        }
        e.ended = true, e.sync ? wo(t) : (e.needReadable = false, e.emittedReadable || (e.emittedReadable = true, Kc(t)));
      }
    }
    function wo(t) {
      var e = t._readableState;
      Ne("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = false, e.emittedReadable || (Ne("emitReadable", e.flowing), e.emittedReadable = true, process.nextTick(Kc, t));
    }
    function Kc(t) {
      var e = t._readableState;
      Ne("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = false), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, ch(t);
    }
    function lh(t, e) {
      e.readingMore || (e.readingMore = true, process.nextTick(FM, t, e));
    }
    function FM(t, e) {
      for (;!e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0); ) {
        var r = e.length;
        if (Ne("maybeReadMore read 0"), t.read(0), r === e.length)
          break;
      }
      e.readingMore = false;
    }
    Ce.prototype._read = function(t) {
      ta(this, new LM("_read()"));
    };
    Ce.prototype.pipe = function(t, e) {
      var r = this, o = this._readableState;
      switch (o.pipesCount) {
        case 0:
          o.pipes = t;
          break;
        case 1:
          o.pipes = [o.pipes, t];
          break;
        default:
          o.pipes.push(t);
          break;
      }
      o.pipesCount += 1, Ne("pipe count=%d opts=%j", o.pipesCount, e);
      var f = (!e || e.end !== false) && t !== process.stdout && t !== process.stderr, p = f ? y : ge;
      o.endEmitted ? process.nextTick(p) : r.once("end", p), t.on("unpipe", m);
      function m(_e, N) {
        Ne("onunpipe"), _e === r && N && N.hasUnpiped === false && (N.hasUnpiped = true, S());
      }
      function y() {
        Ne("onend"), t.end();
      }
      var M = UM(r);
      t.on("drain", M);
      var x = false;
      function S() {
        Ne("cleanup"), t.removeListener("close", q), t.removeListener("finish", L), t.removeListener("drain", M), t.removeListener("error", B), t.removeListener("unpipe", m), r.removeListener("end", y), r.removeListener("end", ge), r.removeListener("data", E), x = true, o.awaitDrain && (!t._writableState || t._writableState.needDrain) && M();
      }
      r.on("data", E);
      function E(_e) {
        Ne("ondata");
        var N = t.write(_e);
        Ne("dest.write", N), N === false && ((o.pipesCount === 1 && o.pipes === t || o.pipesCount > 1 && Vc(o.pipes, t) !== -1) && !x && (Ne("false write response, pause", o.awaitDrain), o.awaitDrain++), r.pause());
      }
      function B(_e) {
        Ne("onerror", _e), ge(), t.removeListener("error", B), zc(t, "error") === 0 && ta(t, _e);
      }
      DM(t, "error", B);
      function q() {
        t.removeListener("finish", L), ge();
      }
      t.once("close", q);
      function L() {
        Ne("onfinish"), t.removeListener("close", q), ge();
      }
      t.once("finish", L);
      function ge() {
        Ne("unpipe"), r.unpipe(t);
      }
      return t.emit("pipe", r), o.flowing || (Ne("pipe resume"), r.resume()), t;
    };
    function UM(t) {
      return function() {
        var r = t._readableState;
        Ne("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && zc(t, "data") && (r.flowing = true, ch(t));
      };
    }
    Ce.prototype.unpipe = function(t) {
      var e = this._readableState, r = { hasUnpiped: false };
      if (e.pipesCount === 0)
        return this;
      if (e.pipesCount === 1)
        return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = false, t && t.emit("unpipe", this, r), this);
      if (!t) {
        var { pipes: o, pipesCount: f } = e;
        e.pipes = null, e.pipesCount = 0, e.flowing = false;
        for (var p = 0;p < f; p++)
          o[p].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      var m = Vc(e.pipes, t);
      return m === -1 ? this : (e.pipes.splice(m, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this);
    };
    Ce.prototype.on = function(t, e) {
      var r = ra.prototype.on.call(this, t, e), o = this._readableState;
      return t === "data" ? (o.readableListening = this.listenerCount("readable") > 0, o.flowing !== false && this.resume()) : t === "readable" && !o.endEmitted && !o.readableListening && (o.readableListening = o.needReadable = true, o.flowing = false, o.emittedReadable = false, Ne("on readable", o.length, o.reading), o.length ? wo(this) : o.reading || process.nextTick(zM, this)), r;
    };
    Ce.prototype.addListener = Ce.prototype.on;
    Ce.prototype.removeListener = function(t, e) {
      var r = ra.prototype.removeListener.call(this, t, e);
      return t === "readable" && process.nextTick(jc, this), r;
    };
    Ce.prototype.removeAllListeners = function(t) {
      var e = ra.prototype.removeAllListeners.apply(this, arguments);
      return (t === "readable" || t === undefined) && process.nextTick(jc, this), e;
    };
    function jc(t) {
      var e = t._readableState;
      e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = true : t.listenerCount("data") > 0 && t.resume();
    }
    function zM(t) {
      Ne("readable nexttick read 0"), t.read(0);
    }
    Ce.prototype.resume = function() {
      var t = this._readableState;
      return t.flowing || (Ne("resume"), t.flowing = !t.readableListening, HM(this, t)), t.paused = false, this;
    };
    function HM(t, e) {
      e.resumeScheduled || (e.resumeScheduled = true, process.nextTick(WM, t, e));
    }
    function WM(t, e) {
      Ne("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = false, t.emit("resume"), ch(t), e.flowing && !e.reading && t.read(0);
    }
    Ce.prototype.pause = function() {
      return Ne("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (Ne("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
    };
    function ch(t) {
      var e = t._readableState;
      for (Ne("flow", e.flowing);e.flowing && t.read() !== null; )
        ;
    }
    Ce.prototype.wrap = function(t) {
      var e = this, r = this._readableState, o = false;
      t.on("end", function() {
        if (Ne("wrapped end"), r.decoder && !r.ended) {
          var m = r.decoder.end();
          m && m.length && e.push(m);
        }
        e.push(null);
      }), t.on("data", function(m) {
        if (Ne("wrapped data"), r.decoder && (m = r.decoder.write(m)), !(r.objectMode && m == null) && !(!r.objectMode && (!m || !m.length))) {
          var y = e.push(m);
          y || (o = true, t.pause());
        }
      });
      for (var f in t)
        this[f] === undefined && typeof t[f] == "function" && (this[f] = function(y) {
          return function() {
            return t[y].apply(t, arguments);
          };
        }(f));
      for (var p = 0;p < sh.length; p++)
        t.on(sh[p], this.emit.bind(this, sh[p]));
      return this._read = function(m) {
        Ne("wrapped _read", m), o && (o = false, t.resume());
      }, this;
    };
    typeof Symbol == "function" && (Ce.prototype[Symbol.asyncIterator] = function() {
      return ah === undefined && (ah = Pc()), ah(this);
    });
    Object.defineProperty(Ce.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } });
    Object.defineProperty(Ce.prototype, "readableBuffer", { enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } });
    Object.defineProperty(Ce.prototype, "readableFlowing", { enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(e) {
      this._readableState && (this._readableState.flowing = e);
    } });
    Ce._fromList = Zc;
    Object.defineProperty(Ce.prototype, "readableLength", { enumerable: false, get: function() {
      return this._readableState.length;
    } });
    function Zc(t, e) {
      if (e.length === 0)
        return null;
      var r;
      return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.first() : r = e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r;
    }
    function uh(t) {
      var e = t._readableState;
      Ne("endReadable", e.endEmitted), e.endEmitted || (e.ended = true, process.nextTick(KM, e, t));
    }
    function KM(t, e) {
      if (Ne("endReadableNT", t.endEmitted, t.length), !t.endEmitted && t.length === 0 && (t.endEmitted = true, e.readable = false, e.emit("end"), t.autoDestroy)) {
        var r = e._writableState;
        (!r || r.autoDestroy && r.finished) && e.destroy();
      }
    }
    typeof Symbol == "function" && (Ce.from = function(t, e) {
      return oh === undefined && (oh = Oc()), oh(Ce, t, e);
    });
    function Vc(t, e) {
      for (var r = 0, o = t.length;r < o; r++)
        if (t[r] === e)
          return r;
      return -1;
    }
  });
  ph = T((pI, Yc) => {
    Yc.exports = di;
    var Mo = sn().codes, jM = Mo.ERR_METHOD_NOT_IMPLEMENTED, ZM = Mo.ERR_MULTIPLE_CALLBACK, VM = Mo.ERR_TRANSFORM_ALREADY_TRANSFORMING, $M = Mo.ERR_TRANSFORM_WITH_LENGTH_0, _o = hn();
    Ie()(di, _o);
    function GM(t, e) {
      var r = this._transformState;
      r.transforming = false;
      var o = r.writecb;
      if (o === null)
        return this.emit("error", new ZM);
      r.writechunk = null, r.writecb = null, e != null && this.push(e), o(t);
      var f = this._readableState;
      f.reading = false, (f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark);
    }
    function di(t) {
      if (!(this instanceof di))
        return new di(t);
      _o.call(this, t), this._transformState = { afterTransform: GM.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", YM);
    }
    function YM() {
      var t = this;
      typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(e, r) {
        Gc(t, e, r);
      }) : Gc(this, null, null);
    }
    di.prototype.push = function(t, e) {
      return this._transformState.needTransform = false, _o.prototype.push.call(this, t, e);
    };
    di.prototype._transform = function(t, e, r) {
      r(new jM("_transform()"));
    };
    di.prototype._write = function(t, e, r) {
      var o = this._transformState;
      if (o.writecb = r, o.writechunk = t, o.writeencoding = e, !o.transforming) {
        var f = this._readableState;
        (o.needTransform || f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark);
      }
    };
    di.prototype._read = function(t) {
      var e = this._transformState;
      e.writechunk !== null && !e.transforming ? (e.transforming = true, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = true;
    };
    di.prototype._destroy = function(t, e) {
      _o.prototype._destroy.call(this, t, function(r) {
        e(r);
      });
    };
    function Gc(t, e, r) {
      if (e)
        return t.emit("error", e);
      if (r != null && t.push(r), t._writableState.length)
        throw new $M;
      if (t._transformState.transforming)
        throw new VM;
      return t.push(null);
    }
  });
  Qc = T((vI, Jc) => {
    Jc.exports = ia;
    var Xc = ph();
    Ie()(ia, Xc);
    function ia(t) {
      if (!(this instanceof ia))
        return new ia(t);
      Xc.call(this, t);
    }
    ia.prototype._transform = function(t, e, r) {
      r(null, t);
    };
  });
  np = T((bI, ip) => {
    var vh;
    function XM(t) {
      var e = false;
      return function() {
        e || (e = true, t.apply(undefined, arguments));
      };
    }
    var rp = sn().codes, JM = rp.ERR_MISSING_ARGS, QM = rp.ERR_STREAM_DESTROYED;
    function ep(t) {
      if (t)
        throw t;
    }
    function e4(t) {
      return t.setHeader && typeof t.abort == "function";
    }
    function t4(t, e, r, o) {
      o = XM(o);
      var f = false;
      t.on("close", function() {
        f = true;
      }), vh === undefined && (vh = vo()), vh(t, { readable: e, writable: r }, function(m) {
        if (m)
          return o(m);
        f = true, o();
      });
      var p = false;
      return function(m) {
        if (!f && !p) {
          if (p = true, e4(t))
            return t.abort();
          if (typeof t.destroy == "function")
            return t.destroy();
          o(m || new QM("pipe"));
        }
      };
    }
    function tp(t) {
      t();
    }
    function r4(t, e) {
      return t.pipe(e);
    }
    function i4(t) {
      return !t.length || typeof t[t.length - 1] != "function" ? ep : t.pop();
    }
    function n4() {
      for (var t = arguments.length, e = new Array(t), r = 0;r < t; r++)
        e[r] = arguments[r];
      var o = i4(e);
      if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
        throw new JM("streams");
      var f, p = e.map(function(m, y) {
        var M = y < e.length - 1, x = y > 0;
        return t4(m, M, x, function(S) {
          f || (f = S), S && p.forEach(tp), !M && (p.forEach(tp), o(f));
        });
      });
      return e.reduce(r4);
    }
    ip.exports = n4;
  });
  ap = T((cr, fp) => {
    cr = fp.exports = th();
    cr.Stream = cr;
    cr.Readable = cr;
    cr.Writable = J0();
    cr.Duplex = hn();
    cr.Transform = ph();
    cr.PassThrough = Qc();
    cr.finished = vo();
    cr.pipeline = np();
  });
  bh = T((mI, sp) => {
    var xo = Te().Buffer, op = ap().Transform, f4 = Ie();
    function a4(t, e) {
      if (!xo.isBuffer(t) && typeof t != "string")
        throw new TypeError(e + " must be a string or a buffer");
    }
    function Ci(t) {
      op.call(this), this._block = xo.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = false;
    }
    f4(Ci, op);
    Ci.prototype._transform = function(t, e, r) {
      var o = null;
      try {
        this.update(t, e);
      } catch (f) {
        o = f;
      }
      r(o);
    };
    Ci.prototype._flush = function(t) {
      var e = null;
      try {
        this.push(this.digest());
      } catch (r) {
        e = r;
      }
      t(e);
    };
    Ci.prototype.update = function(t, e) {
      if (a4(t, "Data"), this._finalized)
        throw new Error("Digest already called");
      xo.isBuffer(t) || (t = xo.from(t, e));
      for (var r = this._block, o = 0;this._blockOffset + t.length - o >= this._blockSize; ) {
        for (var f = this._blockOffset;f < this._blockSize; )
          r[f++] = t[o++];
        this._update(), this._blockOffset = 0;
      }
      for (;o < t.length; )
        r[this._blockOffset++] = t[o++];
      for (var p = 0, m = t.length * 8;m > 0; ++p)
        this._length[p] += m, m = this._length[p] / 4294967296 | 0, m > 0 && (this._length[p] -= 4294967296 * m);
      return this;
    };
    Ci.prototype._update = function() {
      throw new Error("_update is not implemented");
    };
    Ci.prototype.digest = function(t) {
      if (this._finalized)
        throw new Error("Digest already called");
      this._finalized = true;
      var e = this._digest();
      t !== undefined && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
      for (var r = 0;r < 4; ++r)
        this._length[r] = 0;
      return e;
    };
    Ci.prototype._digest = function() {
      throw new Error("_digest is not implemented");
    };
    sp.exports = Ci;
  });
  Ao = T((gI, up) => {
    var o4 = Ie(), hp = bh(), s4 = Te().Buffer, h4 = new Array(16);
    function So() {
      hp.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
    }
    o4(So, hp);
    So.prototype._update = function() {
      for (var t = h4, e = 0;e < 16; ++e)
        t[e] = this._block.readInt32LE(e * 4);
      var r = this._a, o = this._b, f = this._c, p = this._d;
      r = jt(r, o, f, p, t[0], 3614090360, 7), p = jt(p, r, o, f, t[1], 3905402710, 12), f = jt(f, p, r, o, t[2], 606105819, 17), o = jt(o, f, p, r, t[3], 3250441966, 22), r = jt(r, o, f, p, t[4], 4118548399, 7), p = jt(p, r, o, f, t[5], 1200080426, 12), f = jt(f, p, r, o, t[6], 2821735955, 17), o = jt(o, f, p, r, t[7], 4249261313, 22), r = jt(r, o, f, p, t[8], 1770035416, 7), p = jt(p, r, o, f, t[9], 2336552879, 12), f = jt(f, p, r, o, t[10], 4294925233, 17), o = jt(o, f, p, r, t[11], 2304563134, 22), r = jt(r, o, f, p, t[12], 1804603682, 7), p = jt(p, r, o, f, t[13], 4254626195, 12), f = jt(f, p, r, o, t[14], 2792965006, 17), o = jt(o, f, p, r, t[15], 1236535329, 22), r = Zt(r, o, f, p, t[1], 4129170786, 5), p = Zt(p, r, o, f, t[6], 3225465664, 9), f = Zt(f, p, r, o, t[11], 643717713, 14), o = Zt(o, f, p, r, t[0], 3921069994, 20), r = Zt(r, o, f, p, t[5], 3593408605, 5), p = Zt(p, r, o, f, t[10], 38016083, 9), f = Zt(f, p, r, o, t[15], 3634488961, 14), o = Zt(o, f, p, r, t[4], 3889429448, 20), r = Zt(r, o, f, p, t[9], 568446438, 5), p = Zt(p, r, o, f, t[14], 3275163606, 9), f = Zt(f, p, r, o, t[3], 4107603335, 14), o = Zt(o, f, p, r, t[8], 1163531501, 20), r = Zt(r, o, f, p, t[13], 2850285829, 5), p = Zt(p, r, o, f, t[2], 4243563512, 9), f = Zt(f, p, r, o, t[7], 1735328473, 14), o = Zt(o, f, p, r, t[12], 2368359562, 20), r = Vt(r, o, f, p, t[5], 4294588738, 4), p = Vt(p, r, o, f, t[8], 2272392833, 11), f = Vt(f, p, r, o, t[11], 1839030562, 16), o = Vt(o, f, p, r, t[14], 4259657740, 23), r = Vt(r, o, f, p, t[1], 2763975236, 4), p = Vt(p, r, o, f, t[4], 1272893353, 11), f = Vt(f, p, r, o, t[7], 4139469664, 16), o = Vt(o, f, p, r, t[10], 3200236656, 23), r = Vt(r, o, f, p, t[13], 681279174, 4), p = Vt(p, r, o, f, t[0], 3936430074, 11), f = Vt(f, p, r, o, t[3], 3572445317, 16), o = Vt(o, f, p, r, t[6], 76029189, 23), r = Vt(r, o, f, p, t[9], 3654602809, 4), p = Vt(p, r, o, f, t[12], 3873151461, 11), f = Vt(f, p, r, o, t[15], 530742520, 16), o = Vt(o, f, p, r, t[2], 3299628645, 23), r = $t(r, o, f, p, t[0], 4096336452, 6), p = $t(p, r, o, f, t[7], 1126891415, 10), f = $t(f, p, r, o, t[14], 2878612391, 15), o = $t(o, f, p, r, t[5], 4237533241, 21), r = $t(r, o, f, p, t[12], 1700485571, 6), p = $t(p, r, o, f, t[3], 2399980690, 10), f = $t(f, p, r, o, t[10], 4293915773, 15), o = $t(o, f, p, r, t[1], 2240044497, 21), r = $t(r, o, f, p, t[8], 1873313359, 6), p = $t(p, r, o, f, t[15], 4264355552, 10), f = $t(f, p, r, o, t[6], 2734768916, 15), o = $t(o, f, p, r, t[13], 1309151649, 21), r = $t(r, o, f, p, t[4], 4149444226, 6), p = $t(p, r, o, f, t[11], 3174756917, 10), f = $t(f, p, r, o, t[2], 718787259, 15), o = $t(o, f, p, r, t[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + o | 0, this._c = this._c + f | 0, this._d = this._d + p | 0;
    };
    So.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var t = s4.allocUnsafe(16);
      return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t;
    };
    function Eo(t, e) {
      return t << e | t >>> 32 - e;
    }
    function jt(t, e, r, o, f, p, m) {
      return Eo(t + (e & r | ~e & o) + f + p | 0, m) + e | 0;
    }
    function Zt(t, e, r, o, f, p, m) {
      return Eo(t + (e & o | r & ~o) + f + p | 0, m) + e | 0;
    }
    function Vt(t, e, r, o, f, p, m) {
      return Eo(t + (e ^ r ^ o) + f + p | 0, m) + e | 0;
    }
    function $t(t, e, r, o, f, p, m) {
      return Eo(t + (r ^ (e | ~o)) + f + p | 0, m) + e | 0;
    }
    up.exports = So;
  });
  Bo = T((yI, mp) => {
    var mh = Ut().Buffer, u4 = Ie(), bp = bh(), l4 = new Array(16), na = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], fa = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], aa = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], oa = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], sa = [0, 1518500249, 1859775393, 2400959708, 2840853838], ha = [1352829926, 1548603684, 1836072691, 2053994217, 0];
    function Ro() {
      bp.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
    }
    u4(Ro, bp);
    Ro.prototype._update = function() {
      for (var t = l4, e = 0;e < 16; ++e)
        t[e] = this._block.readInt32LE(e * 4);
      for (var r = this._a | 0, o = this._b | 0, f = this._c | 0, p = this._d | 0, m = this._e | 0, y = this._a | 0, M = this._b | 0, x = this._c | 0, S = this._d | 0, E = this._e | 0, B = 0;B < 80; B += 1) {
        var q, L;
        B < 16 ? (q = lp(r, o, f, p, m, t[na[B]], sa[0], aa[B]), L = vp(y, M, x, S, E, t[fa[B]], ha[0], oa[B])) : B < 32 ? (q = dp(r, o, f, p, m, t[na[B]], sa[1], aa[B]), L = pp(y, M, x, S, E, t[fa[B]], ha[1], oa[B])) : B < 48 ? (q = cp(r, o, f, p, m, t[na[B]], sa[2], aa[B]), L = cp(y, M, x, S, E, t[fa[B]], ha[2], oa[B])) : B < 64 ? (q = pp(r, o, f, p, m, t[na[B]], sa[3], aa[B]), L = dp(y, M, x, S, E, t[fa[B]], ha[3], oa[B])) : (q = vp(r, o, f, p, m, t[na[B]], sa[4], aa[B]), L = lp(y, M, x, S, E, t[fa[B]], ha[4], oa[B])), r = m, m = p, p = cn(f, 10), f = o, o = q, y = E, E = S, S = cn(x, 10), x = M, M = L;
      }
      var ge = this._b + f + S | 0;
      this._b = this._c + p + E | 0, this._c = this._d + m + y | 0, this._d = this._e + r + M | 0, this._e = this._a + o + x | 0, this._a = ge;
    };
    Ro.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var t = mh.alloc ? mh.alloc(20) : new mh(20);
      return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t;
    };
    function cn(t, e) {
      return t << e | t >>> 32 - e;
    }
    function lp(t, e, r, o, f, p, m, y) {
      return cn(t + (e ^ r ^ o) + p + m | 0, y) + f | 0;
    }
    function dp(t, e, r, o, f, p, m, y) {
      return cn(t + (e & r | ~e & o) + p + m | 0, y) + f | 0;
    }
    function cp(t, e, r, o, f, p, m, y) {
      return cn(t + ((e | ~r) ^ o) + p + m | 0, y) + f | 0;
    }
    function pp(t, e, r, o, f, p, m, y) {
      return cn(t + (e & o | r & ~o) + p + m | 0, y) + f | 0;
    }
    function vp(t, e, r, o, f, p, m, y) {
      return cn(t + (e ^ (r | ~o)) + p + m | 0, y) + f | 0;
    }
    mp.exports = Ro;
  });
  pn = T((wI, yp) => {
    var gp = Te().Buffer;
    function qo(t, e) {
      this._block = gp.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0;
    }
    qo.prototype.update = function(t, e) {
      typeof t == "string" && (e = e || "utf8", t = gp.from(t, e));
      for (var r = this._block, o = this._blockSize, f = t.length, p = this._len, m = 0;m < f; ) {
        for (var y = p % o, M = Math.min(f - m, o - y), x = 0;x < M; x++)
          r[y + x] = t[m + x];
        p += M, m += M, p % o === 0 && this._update(r);
      }
      return this._len += f, this;
    };
    qo.prototype.digest = function(t) {
      var e = this._len % this._blockSize;
      this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
      var r = this._len * 8;
      if (r <= 4294967295)
        this._block.writeUInt32BE(r, this._blockSize - 4);
      else {
        var o = (r & 4294967295) >>> 0, f = (r - o) / 4294967296;
        this._block.writeUInt32BE(f, this._blockSize - 8), this._block.writeUInt32BE(o, this._blockSize - 4);
      }
      this._update(this._block);
      var p = this._hash();
      return t ? p.toString(t) : p;
    };
    qo.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    };
    yp.exports = qo;
  });
  _p = T((MI, Mp) => {
    var d4 = Ie(), wp = pn(), c4 = Te().Buffer, p4 = [1518500249, 1859775393, -1894007588, -899497514], v4 = new Array(80);
    function ua() {
      this.init(), this._w = v4, wp.call(this, 64, 56);
    }
    d4(ua, wp);
    ua.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function b4(t) {
      return t << 5 | t >>> 27;
    }
    function m4(t) {
      return t << 30 | t >>> 2;
    }
    function g4(t, e, r, o) {
      return t === 0 ? e & r | ~e & o : t === 2 ? e & r | e & o | r & o : e ^ r ^ o;
    }
    ua.prototype._update = function(t) {
      for (var e = this._w, r = this._a | 0, o = this._b | 0, f = this._c | 0, p = this._d | 0, m = this._e | 0, y = 0;y < 16; ++y)
        e[y] = t.readInt32BE(y * 4);
      for (;y < 80; ++y)
        e[y] = e[y - 3] ^ e[y - 8] ^ e[y - 14] ^ e[y - 16];
      for (var M = 0;M < 80; ++M) {
        var x = ~~(M / 20), S = b4(r) + g4(x, o, f, p) + m + e[M] + p4[x] | 0;
        m = p, p = f, f = m4(o), o = r, r = S;
      }
      this._a = r + this._a | 0, this._b = o + this._b | 0, this._c = f + this._c | 0, this._d = p + this._d | 0, this._e = m + this._e | 0;
    };
    ua.prototype._hash = function() {
      var t = c4.allocUnsafe(20);
      return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
    };
    Mp.exports = ua;
  });
  Ep = T((_I, Sp) => {
    var y4 = Ie(), xp = pn(), w4 = Te().Buffer, M4 = [1518500249, 1859775393, -1894007588, -899497514], _4 = new Array(80);
    function la() {
      this.init(), this._w = _4, xp.call(this, 64, 56);
    }
    y4(la, xp);
    la.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function x4(t) {
      return t << 1 | t >>> 31;
    }
    function S4(t) {
      return t << 5 | t >>> 27;
    }
    function E4(t) {
      return t << 30 | t >>> 2;
    }
    function A4(t, e, r, o) {
      return t === 0 ? e & r | ~e & o : t === 2 ? e & r | e & o | r & o : e ^ r ^ o;
    }
    la.prototype._update = function(t) {
      for (var e = this._w, r = this._a | 0, o = this._b | 0, f = this._c | 0, p = this._d | 0, m = this._e | 0, y = 0;y < 16; ++y)
        e[y] = t.readInt32BE(y * 4);
      for (;y < 80; ++y)
        e[y] = x4(e[y - 3] ^ e[y - 8] ^ e[y - 14] ^ e[y - 16]);
      for (var M = 0;M < 80; ++M) {
        var x = ~~(M / 20), S = S4(r) + A4(x, o, f, p) + m + e[M] + M4[x] | 0;
        m = p, p = f, f = E4(o), o = r, r = S;
      }
      this._a = r + this._a | 0, this._b = o + this._b | 0, this._c = f + this._c | 0, this._d = p + this._d | 0, this._e = m + this._e | 0;
    };
    la.prototype._hash = function() {
      var t = w4.allocUnsafe(20);
      return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
    };
    Sp.exports = la;
  });
  gh = T((xI, Rp) => {
    var R4 = Ie(), Ap = pn(), B4 = Te().Buffer, q4 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], I4 = new Array(64);
    function da() {
      this.init(), this._w = I4, Ap.call(this, 64, 56);
    }
    R4(da, Ap);
    da.prototype.init = function() {
      return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
    };
    function T4(t, e, r) {
      return r ^ t & (e ^ r);
    }
    function k4(t, e, r) {
      return t & e | r & (t | e);
    }
    function L4(t) {
      return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
    }
    function N4(t) {
      return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
    }
    function D4(t) {
      return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
    }
    function P4(t) {
      return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
    }
    da.prototype._update = function(t) {
      for (var e = this._w, r = this._a | 0, o = this._b | 0, f = this._c | 0, p = this._d | 0, m = this._e | 0, y = this._f | 0, M = this._g | 0, x = this._h | 0, S = 0;S < 16; ++S)
        e[S] = t.readInt32BE(S * 4);
      for (;S < 64; ++S)
        e[S] = P4(e[S - 2]) + e[S - 7] + D4(e[S - 15]) + e[S - 16] | 0;
      for (var E = 0;E < 64; ++E) {
        var B = x + N4(m) + T4(m, y, M) + q4[E] + e[E] | 0, q = L4(r) + k4(r, o, f) | 0;
        x = M, M = y, y = m, m = p + B | 0, p = f, f = o, o = r, r = B + q | 0;
      }
      this._a = r + this._a | 0, this._b = o + this._b | 0, this._c = f + this._c | 0, this._d = p + this._d | 0, this._e = m + this._e | 0, this._f = y + this._f | 0, this._g = M + this._g | 0, this._h = x + this._h | 0;
    };
    da.prototype._hash = function() {
      var t = B4.allocUnsafe(32);
      return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
    };
    Rp.exports = da;
  });
  qp = T((SI, Bp) => {
    var C4 = Ie(), O4 = gh(), F4 = pn(), U4 = Te().Buffer, z4 = new Array(64);
    function Io() {
      this.init(), this._w = z4, F4.call(this, 64, 56);
    }
    C4(Io, O4);
    Io.prototype.init = function() {
      return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
    };
    Io.prototype._hash = function() {
      var t = U4.allocUnsafe(28);
      return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t;
    };
    Bp.exports = Io;
  });
  yh = T((EI, Pp) => {
    var H4 = Ie(), Dp = pn(), W4 = Te().Buffer, Ip = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591], K4 = new Array(160);
    function ca() {
      this.init(), this._w = K4, Dp.call(this, 128, 112);
    }
    H4(ca, Dp);
    ca.prototype.init = function() {
      return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
    };
    function Tp(t, e, r) {
      return r ^ t & (e ^ r);
    }
    function kp(t, e, r) {
      return t & e | r & (t | e);
    }
    function Lp(t, e) {
      return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25);
    }
    function Np(t, e) {
      return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23);
    }
    function j4(t, e) {
      return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7;
    }
    function Z4(t, e) {
      return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25);
    }
    function V4(t, e) {
      return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6;
    }
    function $4(t, e) {
      return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26);
    }
    function Pt(t, e) {
      return t >>> 0 < e >>> 0 ? 1 : 0;
    }
    ca.prototype._update = function(t) {
      for (var e = this._w, r = this._ah | 0, o = this._bh | 0, f = this._ch | 0, p = this._dh | 0, m = this._eh | 0, y = this._fh | 0, M = this._gh | 0, x = this._hh | 0, S = this._al | 0, E = this._bl | 0, B = this._cl | 0, q = this._dl | 0, L = this._el | 0, ge = this._fl | 0, _e = this._gl | 0, N = this._hl | 0, we = 0;we < 32; we += 2)
        e[we] = t.readInt32BE(we * 4), e[we + 1] = t.readInt32BE(we * 4 + 4);
      for (;we < 160; we += 2) {
        var ye = e[we - 30], xe = e[we - 15 * 2 + 1], Re = j4(ye, xe), Ee = Z4(xe, ye);
        ye = e[we - 2 * 2], xe = e[we - 2 * 2 + 1];
        var Ae = V4(ye, xe), P = $4(xe, ye), Se = e[we - 7 * 2], v = e[we - 7 * 2 + 1], i = e[we - 16 * 2], a = e[we - 16 * 2 + 1], h = Ee + v | 0, s = Re + Se + Pt(h, Ee) | 0;
        h = h + P | 0, s = s + Ae + Pt(h, P) | 0, h = h + a | 0, s = s + i + Pt(h, a) | 0, e[we] = s, e[we + 1] = h;
      }
      for (var u = 0;u < 160; u += 2) {
        s = e[u], h = e[u + 1];
        var c = kp(r, o, f), b = kp(S, E, B), l = Lp(r, S), n = Lp(S, r), d = Np(m, L), w = Np(L, m), g = Ip[u], _ = Ip[u + 1], A = Tp(m, y, M), R = Tp(L, ge, _e), I = N + w | 0, Me = x + d + Pt(I, N) | 0;
        I = I + R | 0, Me = Me + A + Pt(I, R) | 0, I = I + _ | 0, Me = Me + g + Pt(I, _) | 0, I = I + h | 0, Me = Me + s + Pt(I, h) | 0;
        var k = n + b | 0, D = l + c + Pt(k, n) | 0;
        x = M, N = _e, M = y, _e = ge, y = m, ge = L, L = q + I | 0, m = p + Me + Pt(L, q) | 0, p = f, q = B, f = o, B = E, o = r, E = S, S = I + k | 0, r = Me + D + Pt(S, I) | 0;
      }
      this._al = this._al + S | 0, this._bl = this._bl + E | 0, this._cl = this._cl + B | 0, this._dl = this._dl + q | 0, this._el = this._el + L | 0, this._fl = this._fl + ge | 0, this._gl = this._gl + _e | 0, this._hl = this._hl + N | 0, this._ah = this._ah + r + Pt(this._al, S) | 0, this._bh = this._bh + o + Pt(this._bl, E) | 0, this._ch = this._ch + f + Pt(this._cl, B) | 0, this._dh = this._dh + p + Pt(this._dl, q) | 0, this._eh = this._eh + m + Pt(this._el, L) | 0, this._fh = this._fh + y + Pt(this._fl, ge) | 0, this._gh = this._gh + M + Pt(this._gl, _e) | 0, this._hh = this._hh + x + Pt(this._hl, N) | 0;
    };
    ca.prototype._hash = function() {
      var t = W4.allocUnsafe(64);
      function e(r, o, f) {
        t.writeInt32BE(r, f), t.writeInt32BE(o, f + 4);
      }
      return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t;
    };
    Pp.exports = ca;
  });
  Op = T((AI, Cp) => {
    var G4 = Ie(), Y4 = yh(), X4 = pn(), J4 = Te().Buffer, Q4 = new Array(160);
    function To() {
      this.init(), this._w = Q4, X4.call(this, 128, 112);
    }
    G4(To, Y4);
    To.prototype.init = function() {
      return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
    };
    To.prototype._hash = function() {
      var t = J4.allocUnsafe(48);
      function e(r, o, f) {
        t.writeInt32BE(r, f), t.writeInt32BE(o, f + 4);
      }
      return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t;
    };
    Cp.exports = To;
  });
  ko = T((ci, Fp) => {
    var ci = Fp.exports = function(e) {
      e = e.toLowerCase();
      var r = ci[e];
      if (!r)
        throw new Error(e + " is not supported (we accept pull requests)");
      return new r;
    };
    ci.sha = _p();
    ci.sha1 = Ep();
    ci.sha224 = qp();
    ci.sha256 = gh();
    ci.sha384 = Op();
    ci.sha512 = yh();
  });
  Tt = T((RI, Up) => {
    Up.exports = { ArrayIsArray(t) {
      return Array.isArray(t);
    }, ArrayPrototypeIncludes(t, e) {
      return t.includes(e);
    }, ArrayPrototypeIndexOf(t, e) {
      return t.indexOf(e);
    }, ArrayPrototypeJoin(t, e) {
      return t.join(e);
    }, ArrayPrototypeMap(t, e) {
      return t.map(e);
    }, ArrayPrototypePop(t, e) {
      return t.pop(e);
    }, ArrayPrototypePush(t, e) {
      return t.push(e);
    }, ArrayPrototypeSlice(t, e, r) {
      return t.slice(e, r);
    }, Error, FunctionPrototypeCall(t, e, ...r) {
      return t.call(e, ...r);
    }, FunctionPrototypeSymbolHasInstance(t, e) {
      return Function.prototype[Symbol.hasInstance].call(t, e);
    }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(t, e) {
      return Object.defineProperties(t, e);
    }, ObjectDefineProperty(t, e, r) {
      return Object.defineProperty(t, e, r);
    }, ObjectGetOwnPropertyDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }, ObjectKeys(t) {
      return Object.keys(t);
    }, ObjectSetPrototypeOf(t, e) {
      return Object.setPrototypeOf(t, e);
    }, Promise, PromisePrototypeCatch(t, e) {
      return t.catch(e);
    }, PromisePrototypeThen(t, e, r) {
      return t.then(e, r);
    }, PromiseReject(t) {
      return Promise.reject(t);
    }, ReflectApply: Reflect.apply, RegExpPrototypeTest(t, e) {
      return t.test(e);
    }, SafeSet: Set, String, StringPrototypeSlice(t, e, r) {
      return t.slice(e, r);
    }, StringPrototypeToLowerCase(t) {
      return t.toLowerCase();
    }, StringPrototypeToUpperCase(t) {
      return t.toUpperCase();
    }, StringPrototypeTrim(t) {
      return t.trim();
    }, Symbol, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, TypedArrayPrototypeSet(t, e, r) {
      return t.set(e, r);
    }, Uint8Array };
  });
  Gr = T((BI, Mh) => {
    var e_ = Ut(), t_ = Object.getPrototypeOf(async function() {
    }).constructor, zp = globalThis.Blob || e_.Blob, r_ = typeof zp < "u" ? function(e) {
      return e instanceof zp;
    } : function(e) {
      return false;
    }, wh = class extends Error {
      constructor(e) {
        if (!Array.isArray(e))
          throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
        let r = "";
        for (let o = 0;o < e.length; o++)
          r += `    ${e[o].stack}
`;
        super(r), this.name = "AggregateError", this.errors = e;
      }
    };
    Mh.exports = { AggregateError: wh, kEmptyObject: Object.freeze({}), once(t) {
      let e = false;
      return function(...r) {
        e || (e = true, t.apply(this, r));
      };
    }, createDeferredPromise: function() {
      let t, e;
      return { promise: new Promise((o, f) => {
        t = o, e = f;
      }), resolve: t, reject: e };
    }, promisify(t) {
      return new Promise((e, r) => {
        t((o, ...f) => o ? r(o) : e(...f));
      });
    }, debuglog() {
      return function() {
      };
    }, format(t, ...e) {
      return t.replace(/%([sdifj])/g, function(...[r, o]) {
        let f = e.shift();
        return o === "f" ? f.toFixed(6) : o === "j" ? JSON.stringify(f) : o === "s" && typeof f == "object" ? `${f.constructor !== Object ? f.constructor.name : ""} {}`.trim() : f.toString();
      });
    }, inspect(t) {
      switch (typeof t) {
        case "string":
          if (t.includes("'"))
            if (t.includes('"')) {
              if (!t.includes("`") && !t.includes("${"))
                return `\`${t}\``;
            } else
              return `"${t}"`;
          return `'${t}'`;
        case "number":
          return isNaN(t) ? "NaN" : Object.is(t, -0) ? String(t) : t;
        case "bigint":
          return `${String(t)}n`;
        case "boolean":
        case "undefined":
          return String(t);
        case "object":
          return "{}";
      }
    }, types: { isAsyncFunction(t) {
      return t instanceof t_;
    }, isArrayBufferView(t) {
      return ArrayBuffer.isView(t);
    } }, isBlob: r_ };
    Mh.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  });
  No = T((qI, Lo) => {
    var { AbortController: Hp, AbortSignal: i_ } = typeof self < "u" ? self : typeof window < "u" ? window : undefined;
    Lo.exports = Hp;
    Lo.exports.AbortSignal = i_;
    Lo.exports.default = Hp;
  });
  Jt = T((II, jp) => {
    var { format: n_, inspect: Do, AggregateError: f_ } = Gr(), a_ = globalThis.AggregateError || f_, o_ = Symbol("kIsNodeError"), s_ = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], h_ = /^([A-Z][a-z0-9]*)+$/, u_ = "__node_internal_", Po = {};
    function vn(t, e) {
      if (!t)
        throw new Po.ERR_INTERNAL_ASSERTION(e);
    }
    function Wp(t) {
      let e = "", r = t.length, o = t[0] === "-" ? 1 : 0;
      for (;r >= o + 4; r -= 3)
        e = `_${t.slice(r - 3, r)}${e}`;
      return `${t.slice(0, r)}${e}`;
    }
    function l_(t, e, r) {
      if (typeof e == "function")
        return vn(e.length <= r.length, `Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${e.length}).`), e(...r);
      let o = (e.match(/%[dfijoOs]/g) || []).length;
      return vn(o === r.length, `Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${o}).`), r.length === 0 ? e : n_(e, ...r);
    }
    function zt(t, e, r) {
      r || (r = Error);

      class o extends r {
        constructor(...p) {
          super(l_(t, e, p));
        }
        toString() {
          return `${this.name} [${t}]: ${this.message}`;
        }
      }
      Object.defineProperties(o.prototype, { name: { value: r.name, writable: true, enumerable: false, configurable: true }, toString: { value() {
        return `${this.name} [${t}]: ${this.message}`;
      }, writable: true, enumerable: false, configurable: true } }), o.prototype.code = t, o.prototype[o_] = true, Po[t] = o;
    }
    function Kp(t) {
      let e = u_ + t.name;
      return Object.defineProperty(t, "name", { value: e }), t;
    }
    function d_(t, e) {
      if (t && e && t !== e) {
        if (Array.isArray(e.errors))
          return e.errors.push(t), e;
        let r = new a_([e, t], e.message);
        return r.code = e.code, r;
      }
      return t || e;
    }
    var _h = class extends Error {
      constructor(e = "The operation was aborted", r = undefined) {
        if (r !== undefined && typeof r != "object")
          throw new Po.ERR_INVALID_ARG_TYPE("options", "Object", r);
        super(e, r), this.code = "ABORT_ERR", this.name = "AbortError";
      }
    };
    zt("ERR_ASSERTION", "%s", Error);
    zt("ERR_INVALID_ARG_TYPE", (t, e, r) => {
      vn(typeof t == "string", "'name' must be a string"), Array.isArray(e) || (e = [e]);
      let o = "The ";
      t.endsWith(" argument") ? o += `${t} ` : o += `"${t}" ${t.includes(".") ? "property" : "argument"} `, o += "must be ";
      let f = [], p = [], m = [];
      for (let M of e)
        vn(typeof M == "string", "All expected entries have to be of type string"), s_.includes(M) ? f.push(M.toLowerCase()) : h_.test(M) ? p.push(M) : (vn(M !== "object", 'The value "object" should be written as "Object"'), m.push(M));
      if (p.length > 0) {
        let M = f.indexOf("object");
        M !== -1 && (f.splice(f, M, 1), p.push("Object"));
      }
      if (f.length > 0) {
        switch (f.length) {
          case 1:
            o += `of type ${f[0]}`;
            break;
          case 2:
            o += `one of type ${f[0]} or ${f[1]}`;
            break;
          default: {
            let M = f.pop();
            o += `one of type ${f.join(", ")}, or ${M}`;
          }
        }
        (p.length > 0 || m.length > 0) && (o += " or ");
      }
      if (p.length > 0) {
        switch (p.length) {
          case 1:
            o += `an instance of ${p[0]}`;
            break;
          case 2:
            o += `an instance of ${p[0]} or ${p[1]}`;
            break;
          default: {
            let M = p.pop();
            o += `an instance of ${p.join(", ")}, or ${M}`;
          }
        }
        m.length > 0 && (o += " or ");
      }
      switch (m.length) {
        case 0:
          break;
        case 1:
          m[0].toLowerCase() !== m[0] && (o += "an "), o += `${m[0]}`;
          break;
        case 2:
          o += `one of ${m[0]} or ${m[1]}`;
          break;
        default: {
          let M = m.pop();
          o += `one of ${m.join(", ")}, or ${M}`;
        }
      }
      if (r == null)
        o += `. Received ${r}`;
      else if (typeof r == "function" && r.name)
        o += `. Received function ${r.name}`;
      else if (typeof r == "object") {
        var y;
        (y = r.constructor) !== null && y !== undefined && y.name ? o += `. Received an instance of ${r.constructor.name}` : o += `. Received ${Do(r, { depth: -1 })}`;
      } else {
        let M = Do(r, { colors: false });
        M.length > 25 && (M = `${M.slice(0, 25)}...`), o += `. Received type ${typeof r} (${M})`;
      }
      return o;
    }, TypeError);
    zt("ERR_INVALID_ARG_VALUE", (t, e, r = "is invalid") => {
      let o = Do(e);
      return o.length > 128 && (o = o.slice(0, 128) + "..."), `The ${t.includes(".") ? "property" : "argument"} '${t}' ${r}. Received ${o}`;
    }, TypeError);
    zt("ERR_INVALID_RETURN_VALUE", (t, e, r) => {
      var o;
      let f = r != null && (o = r.constructor) !== null && o !== undefined && o.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
      return `Expected ${t} to be returned from the "${e}" function but got ${f}.`;
    }, TypeError);
    zt("ERR_MISSING_ARGS", (...t) => {
      vn(t.length > 0, "At least one arg needs to be specified");
      let e, r = t.length;
      switch (t = (Array.isArray(t) ? t : [t]).map((o) => `"${o}"`).join(" or "), r) {
        case 1:
          e += `The ${t[0]} argument`;
          break;
        case 2:
          e += `The ${t[0]} and ${t[1]} arguments`;
          break;
        default:
          {
            let o = t.pop();
            e += `The ${t.join(", ")}, and ${o} arguments`;
          }
          break;
      }
      return `${e} must be specified`;
    }, TypeError);
    zt("ERR_OUT_OF_RANGE", (t, e, r) => {
      vn(e, 'Missing "range" argument');
      let o;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = Wp(String(r)) : typeof r == "bigint" ? (o = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (o = Wp(o)), o += "n") : o = Do(r), `The value of "${t}" is out of range. It must be ${e}. Received ${o}`;
    }, RangeError);
    zt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    zt("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    zt("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    zt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    zt("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    zt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    zt("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    zt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    zt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    zt("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    zt("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    jp.exports = { AbortError: _h, aggregateTwoErrors: Kp(d_), hideStackFrames: Kp, codes: Po };
  });
  pa = T((TI, Qp) => {
    var { ArrayIsArray: $p, ArrayPrototypeIncludes: Gp, ArrayPrototypeJoin: Yp, ArrayPrototypeMap: c_, NumberIsInteger: Sh, NumberIsNaN: p_, NumberMAX_SAFE_INTEGER: v_, NumberMIN_SAFE_INTEGER: b_, NumberParseInt: m_, ObjectPrototypeHasOwnProperty: g_, RegExpPrototypeExec: y_, String: w_, StringPrototypeToUpperCase: M_, StringPrototypeTrim: __ } = Tt(), { hideStackFrames: Ir, codes: { ERR_SOCKET_BAD_PORT: x_, ERR_INVALID_ARG_TYPE: tr, ERR_INVALID_ARG_VALUE: Co, ERR_OUT_OF_RANGE: bn, ERR_UNKNOWN_SIGNAL: Zp } } = Jt(), { normalizeEncoding: S_ } = Gr(), { isAsyncFunction: E_, isArrayBufferView: A_ } = Gr().types, Vp = {};
    function R_(t) {
      return t === (t | 0);
    }
    function B_(t) {
      return t === t >>> 0;
    }
    var q_ = /^[0-7]+$/, I_ = "must be a 32-bit unsigned integer or an octal string";
    function T_(t, e, r) {
      if (typeof t > "u" && (t = r), typeof t == "string") {
        if (y_(q_, t) === null)
          throw new Co(e, t, I_);
        t = m_(t, 8);
      }
      return Xp(t, e), t;
    }
    var k_ = Ir((t, e, r = b_, o = v_) => {
      if (typeof t != "number")
        throw new tr(e, "number", t);
      if (!Sh(t))
        throw new bn(e, "an integer", t);
      if (t < r || t > o)
        throw new bn(e, `>= ${r} && <= ${o}`, t);
    }), L_ = Ir((t, e, r = -2147483648, o = 2147483647) => {
      if (typeof t != "number")
        throw new tr(e, "number", t);
      if (!Sh(t))
        throw new bn(e, "an integer", t);
      if (t < r || t > o)
        throw new bn(e, `>= ${r} && <= ${o}`, t);
    }), Xp = Ir((t, e, r = false) => {
      if (typeof t != "number")
        throw new tr(e, "number", t);
      if (!Sh(t))
        throw new bn(e, "an integer", t);
      let o = r ? 1 : 0, f = 4294967295;
      if (t < o || t > f)
        throw new bn(e, `>= ${o} && <= ${f}`, t);
    });
    function Jp(t, e) {
      if (typeof t != "string")
        throw new tr(e, "string", t);
    }
    function N_(t, e, r = undefined, o) {
      if (typeof t != "number")
        throw new tr(e, "number", t);
      if (r != null && t < r || o != null && t > o || (r != null || o != null) && p_(t))
        throw new bn(e, `${r != null ? `>= ${r}` : ""}${r != null && o != null ? " && " : ""}${o != null ? `<= ${o}` : ""}`, t);
    }
    var D_ = Ir((t, e, r) => {
      if (!Gp(r, t)) {
        let o = Yp(c_(r, (p) => typeof p == "string" ? `'${p}'` : w_(p)), ", "), f = "must be one of: " + o;
        throw new Co(e, t, f);
      }
    });
    function P_(t, e) {
      if (typeof t != "boolean")
        throw new tr(e, "boolean", t);
    }
    function xh(t, e, r) {
      return t == null || !g_(t, e) ? r : t[e];
    }
    var C_ = Ir((t, e, r = null) => {
      let o = xh(r, "allowArray", false), f = xh(r, "allowFunction", false);
      if (!xh(r, "nullable", false) && t === null || !o && $p(t) || typeof t != "object" && (!f || typeof t != "function"))
        throw new tr(e, "Object", t);
    }), O_ = Ir((t, e, r = 0) => {
      if (!$p(t))
        throw new tr(e, "Array", t);
      if (t.length < r) {
        let o = `must be longer than ${r}`;
        throw new Co(e, t, o);
      }
    });
    function F_(t, e = "signal") {
      if (Jp(t, e), Vp[t] === undefined)
        throw Vp[M_(t)] !== undefined ? new Zp(t + " (signals must use all capital letters)") : new Zp(t);
    }
    var U_ = Ir((t, e = "buffer") => {
      if (!A_(t))
        throw new tr(e, ["Buffer", "TypedArray", "DataView"], t);
    });
    function z_(t, e) {
      let r = S_(e), o = t.length;
      if (r === "hex" && o % 2 !== 0)
        throw new Co("encoding", e, `is invalid for data of length ${o}`);
    }
    function H_(t, e = "Port", r = true) {
      if (typeof t != "number" && typeof t != "string" || typeof t == "string" && __(t).length === 0 || +t !== +t >>> 0 || t > 65535 || t === 0 && !r)
        throw new x_(e, t, r);
      return t | 0;
    }
    var W_ = Ir((t, e) => {
      if (t !== undefined && (t === null || typeof t != "object" || !("aborted" in t)))
        throw new tr(e, "AbortSignal", t);
    }), K_ = Ir((t, e) => {
      if (typeof t != "function")
        throw new tr(e, "Function", t);
    }), j_ = Ir((t, e) => {
      if (typeof t != "function" || E_(t))
        throw new tr(e, "Function", t);
    }), Z_ = Ir((t, e) => {
      if (t !== undefined)
        throw new tr(e, "undefined", t);
    });
    function V_(t, e, r) {
      if (!Gp(r, t))
        throw new tr(e, `('${Yp(r, "|")}')`, t);
    }
    Qp.exports = { isInt32: R_, isUint32: B_, parseFileMode: T_, validateArray: O_, validateBoolean: P_, validateBuffer: U_, validateEncoding: z_, validateFunction: K_, validateInt32: L_, validateInteger: k_, validateNumber: N_, validateObject: C_, validateOneOf: D_, validatePlainFunction: j_, validatePort: H_, validateSignalName: F_, validateString: Jp, validateUint32: Xp, validateUndefined: Z_, validateUnion: V_, validateAbortSignal: W_ };
  });
  Rh = T((kI, i1) => {
    var dt = i1.exports = {}, Yr, Xr;
    function Eh() {
      throw new Error("setTimeout has not been defined");
    }
    function Ah() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        typeof setTimeout == "function" ? Yr = setTimeout : Yr = Eh;
      } catch {
        Yr = Eh;
      }
      try {
        typeof clearTimeout == "function" ? Xr = clearTimeout : Xr = Ah;
      } catch {
        Xr = Ah;
      }
    })();
    function e1(t) {
      if (Yr === setTimeout)
        return setTimeout(t, 0);
      if ((Yr === Eh || !Yr) && setTimeout)
        return Yr = setTimeout, setTimeout(t, 0);
      try {
        return Yr(t, 0);
      } catch {
        try {
          return Yr.call(null, t, 0);
        } catch {
          return Yr.call(this, t, 0);
        }
      }
    }
    function $_(t) {
      if (Xr === clearTimeout)
        return clearTimeout(t);
      if ((Xr === Ah || !Xr) && clearTimeout)
        return Xr = clearTimeout, clearTimeout(t);
      try {
        return Xr(t);
      } catch {
        try {
          return Xr.call(null, t);
        } catch {
          return Xr.call(this, t);
        }
      }
    }
    var pi = [], nf = false, mn, Oo = -1;
    function G_() {
      !nf || !mn || (nf = false, mn.length ? pi = mn.concat(pi) : Oo = -1, pi.length && t1());
    }
    function t1() {
      if (!nf) {
        var t = e1(G_);
        nf = true;
        for (var e = pi.length;e; ) {
          for (mn = pi, pi = [];++Oo < e; )
            mn && mn[Oo].run();
          Oo = -1, e = pi.length;
        }
        mn = null, nf = false, $_(t);
      }
    }
    dt.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1;r < arguments.length; r++)
          e[r - 1] = arguments[r];
      pi.push(new r1(t, e)), pi.length === 1 && !nf && e1(t1);
    };
    function r1(t, e) {
      this.fun = t, this.array = e;
    }
    r1.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    dt.title = "browser";
    dt.browser = true;
    dt.env = {};
    dt.argv = [];
    dt.version = "";
    dt.versions = {};
    function vi() {
    }
    dt.on = vi;
    dt.addListener = vi;
    dt.once = vi;
    dt.off = vi;
    dt.removeListener = vi;
    dt.removeAllListeners = vi;
    dt.emit = vi;
    dt.prependListener = vi;
    dt.prependOnceListener = vi;
    dt.listeners = function(t) {
      return [];
    };
    dt.binding = function(t) {
      throw new Error("process.binding is not supported");
    };
    dt.cwd = function() {
      return "/";
    };
    dt.chdir = function(t) {
      throw new Error("process.chdir is not supported");
    };
    dt.umask = function() {
      return 0;
    };
  });
  pr = {};
  Ja(pr, { default: () => Y_ });
  Oi = R0(() => {
    ot(pr, rn(Rh()));
    Y_ = rn(Rh());
  });
  Fi = T((NI, v1) => {
    var { Symbol: Fo, SymbolAsyncIterator: n1, SymbolIterator: f1 } = Tt(), a1 = Fo("kDestroyed"), o1 = Fo("kIsErrored"), Bh = Fo("kIsReadable"), s1 = Fo("kIsDisturbed");
    function Uo(t, e = false) {
      var r;
      return !!(t && typeof t.pipe == "function" && typeof t.on == "function" && (!e || typeof t.pause == "function" && typeof t.resume == "function") && (!t._writableState || ((r = t._readableState) === null || r === undefined ? undefined : r.readable) !== false) && (!t._writableState || t._readableState));
    }
    function zo(t) {
      var e;
      return !!(t && typeof t.write == "function" && typeof t.on == "function" && (!t._readableState || ((e = t._writableState) === null || e === undefined ? undefined : e.writable) !== false));
    }
    function X_(t) {
      return !!(t && typeof t.pipe == "function" && t._readableState && typeof t.on == "function" && typeof t.write == "function");
    }
    function gn(t) {
      return t && (t._readableState || t._writableState || typeof t.write == "function" && typeof t.on == "function" || typeof t.pipe == "function" && typeof t.on == "function");
    }
    function J_(t, e) {
      return t == null ? false : e === true ? typeof t[n1] == "function" : e === false ? typeof t[f1] == "function" : typeof t[n1] == "function" || typeof t[f1] == "function";
    }
    function Ho(t) {
      if (!gn(t))
        return null;
      let { _writableState: e, _readableState: r } = t, o = e || r;
      return !!(t.destroyed || t[a1] || o != null && o.destroyed);
    }
    function h1(t) {
      if (!zo(t))
        return null;
      if (t.writableEnded === true)
        return true;
      let e = t._writableState;
      return e != null && e.errored ? false : typeof e?.ended != "boolean" ? null : e.ended;
    }
    function Q_(t, e) {
      if (!zo(t))
        return null;
      if (t.writableFinished === true)
        return true;
      let r = t._writableState;
      return r != null && r.errored ? false : typeof r?.finished != "boolean" ? null : !!(r.finished || e === false && r.ended === true && r.length === 0);
    }
    function e8(t) {
      if (!Uo(t))
        return null;
      if (t.readableEnded === true)
        return true;
      let e = t._readableState;
      return !e || e.errored ? false : typeof e?.ended != "boolean" ? null : e.ended;
    }
    function u1(t, e) {
      if (!Uo(t))
        return null;
      let r = t._readableState;
      return r != null && r.errored ? false : typeof r?.endEmitted != "boolean" ? null : !!(r.endEmitted || e === false && r.ended === true && r.length === 0);
    }
    function l1(t) {
      return t && t[Bh] != null ? t[Bh] : typeof t?.readable != "boolean" ? null : Ho(t) ? false : Uo(t) && t.readable && !u1(t);
    }
    function d1(t) {
      return typeof t?.writable != "boolean" ? null : Ho(t) ? false : zo(t) && t.writable && !h1(t);
    }
    function t8(t, e) {
      return gn(t) ? Ho(t) ? true : !(e?.readable !== false && l1(t) || e?.writable !== false && d1(t)) : null;
    }
    function r8(t) {
      var e, r;
      return gn(t) ? t.writableErrored ? t.writableErrored : (e = (r = t._writableState) === null || r === undefined ? undefined : r.errored) !== null && e !== undefined ? e : null : null;
    }
    function i8(t) {
      var e, r;
      return gn(t) ? t.readableErrored ? t.readableErrored : (e = (r = t._readableState) === null || r === undefined ? undefined : r.errored) !== null && e !== undefined ? e : null : null;
    }
    function n8(t) {
      if (!gn(t))
        return null;
      if (typeof t.closed == "boolean")
        return t.closed;
      let { _writableState: e, _readableState: r } = t;
      return typeof e?.closed == "boolean" || typeof r?.closed == "boolean" ? e?.closed || r?.closed : typeof t._closed == "boolean" && c1(t) ? t._closed : null;
    }
    function c1(t) {
      return typeof t._closed == "boolean" && typeof t._defaultKeepAlive == "boolean" && typeof t._removedConnection == "boolean" && typeof t._removedContLen == "boolean";
    }
    function p1(t) {
      return typeof t._sent100 == "boolean" && c1(t);
    }
    function f8(t) {
      var e;
      return typeof t._consuming == "boolean" && typeof t._dumped == "boolean" && ((e = t.req) === null || e === undefined ? undefined : e.upgradeOrConnect) === undefined;
    }
    function a8(t) {
      if (!gn(t))
        return null;
      let { _writableState: e, _readableState: r } = t, o = e || r;
      return !o && p1(t) || !!(o && o.autoDestroy && o.emitClose && o.closed === false);
    }
    function o8(t) {
      var e;
      return !!(t && ((e = t[s1]) !== null && e !== undefined ? e : t.readableDidRead || t.readableAborted));
    }
    function s8(t) {
      var e, r, o, f, p, m, y, M, x, S;
      return !!(t && ((e = (r = (o = (f = (p = (m = t[o1]) !== null && m !== undefined ? m : t.readableErrored) !== null && p !== undefined ? p : t.writableErrored) !== null && f !== undefined ? f : (y = t._readableState) === null || y === undefined ? undefined : y.errorEmitted) !== null && o !== undefined ? o : (M = t._writableState) === null || M === undefined ? undefined : M.errorEmitted) !== null && r !== undefined ? r : (x = t._readableState) === null || x === undefined ? undefined : x.errored) !== null && e !== undefined ? e : (S = t._writableState) === null || S === undefined ? undefined : S.errored));
    }
    v1.exports = { kDestroyed: a1, isDisturbed: o8, kIsDisturbed: s1, isErrored: s8, kIsErrored: o1, isReadable: l1, kIsReadable: Bh, isClosed: n8, isDestroyed: Ho, isDuplexNodeStream: X_, isFinished: t8, isIterable: J_, isReadableNodeStream: Uo, isReadableEnded: e8, isReadableFinished: u1, isReadableErrored: i8, isNodeStream: gn, isWritable: d1, isWritableNodeStream: zo, isWritableEnded: h1, isWritableFinished: Q_, isWritableErrored: r8, isServerRequest: f8, isServerResponse: p1, willEmitClose: a8 };
  });
  Ui = T((DI, Ih) => {
    var ff = (Oi(), ur(pr)), { AbortError: h8, codes: u8 } = Jt(), { ERR_INVALID_ARG_TYPE: l8, ERR_STREAM_PREMATURE_CLOSE: b1 } = u8, { kEmptyObject: m1, once: g1 } = Gr(), { validateAbortSignal: d8, validateFunction: c8, validateObject: p8 } = pa(), { Promise: v8 } = Tt(), { isClosed: b8, isReadable: y1, isReadableNodeStream: qh, isReadableFinished: w1, isReadableErrored: m8, isWritable: M1, isWritableNodeStream: _1, isWritableFinished: x1, isWritableErrored: g8, isNodeStream: y8, willEmitClose: w8 } = Fi();
    function M8(t) {
      return t.setHeader && typeof t.abort == "function";
    }
    var _8 = () => {
    };
    function S1(t, e, r) {
      var o, f;
      arguments.length === 2 ? (r = e, e = m1) : e == null ? e = m1 : p8(e, "options"), c8(r, "callback"), d8(e.signal, "options.signal"), r = g1(r);
      let p = (o = e.readable) !== null && o !== undefined ? o : qh(t), m = (f = e.writable) !== null && f !== undefined ? f : _1(t);
      if (!y8(t))
        throw new l8("stream", "Stream", t);
      let { _writableState: y, _readableState: M } = t, x = () => {
        t.writable || B();
      }, S = w8(t) && qh(t) === p && _1(t) === m, E = x1(t, false), B = () => {
        E = true, t.destroyed && (S = false), !(S && (!t.readable || p)) && (!p || q) && r.call(t);
      }, q = w1(t, false), L = () => {
        q = true, t.destroyed && (S = false), !(S && (!t.writable || m)) && (!m || E) && r.call(t);
      }, ge = (xe) => {
        r.call(t, xe);
      }, _e = b8(t), N = () => {
        _e = true;
        let xe = g8(t) || m8(t);
        if (xe && typeof xe != "boolean")
          return r.call(t, xe);
        if (p && !q && qh(t, true) && !w1(t, false))
          return r.call(t, new b1);
        if (m && !E && !x1(t, false))
          return r.call(t, new b1);
        r.call(t);
      }, we = () => {
        t.req.on("finish", B);
      };
      M8(t) ? (t.on("complete", B), S || t.on("abort", N), t.req ? we() : t.on("request", we)) : m && !y && (t.on("end", x), t.on("close", x)), !S && typeof t.aborted == "boolean" && t.on("aborted", N), t.on("end", L), t.on("finish", B), e.error !== false && t.on("error", ge), t.on("close", N), _e ? ff.nextTick(N) : y != null && y.errorEmitted || M != null && M.errorEmitted ? S || ff.nextTick(N) : (!p && (!S || y1(t)) && (E || M1(t) === false) || !m && (!S || M1(t)) && (q || y1(t) === false) || M && t.req && t.aborted) && ff.nextTick(N);
      let ye = () => {
        r = _8, t.removeListener("aborted", N), t.removeListener("complete", B), t.removeListener("abort", N), t.removeListener("request", we), t.req && t.req.removeListener("finish", B), t.removeListener("end", x), t.removeListener("close", x), t.removeListener("finish", B), t.removeListener("end", L), t.removeListener("error", ge), t.removeListener("close", N);
      };
      if (e.signal && !_e) {
        let xe = () => {
          let Re = r;
          ye(), Re.call(t, new h8(undefined, { cause: e.signal.reason }));
        };
        if (e.signal.aborted)
          ff.nextTick(xe);
        else {
          let Re = r;
          r = g1((...Ee) => {
            e.signal.removeEventListener("abort", xe), Re.apply(t, Ee);
          }), e.signal.addEventListener("abort", xe);
        }
      }
      return ye;
    }
    function x8(t, e) {
      return new v8((r, o) => {
        S1(t, e, (f) => {
          f ? o(f) : r();
        });
      });
    }
    Ih.exports = S1;
    Ih.exports.finished = x8;
  });
  k1 = T((PI, Lh) => {
    var B1 = globalThis.AbortController || No().AbortController, { codes: { ERR_INVALID_ARG_TYPE: va, ERR_MISSING_ARGS: S8, ERR_OUT_OF_RANGE: E8 }, AbortError: Jr } = Jt(), { validateAbortSignal: af, validateInteger: A8, validateObject: of } = pa(), R8 = Tt().Symbol("kWeak"), { finished: B8 } = Ui(), { ArrayPrototypePush: q8, MathFloor: I8, Number: T8, NumberIsNaN: k8, Promise: E1, PromiseReject: A1, PromisePrototypeThen: L8, Symbol: q1 } = Tt(), Wo = q1("kEmpty"), R1 = q1("kEof");
    function Ko(t, e) {
      if (typeof t != "function")
        throw new va("fn", ["Function", "AsyncFunction"], t);
      e != null && of(e, "options"), e?.signal != null && af(e.signal, "options.signal");
      let r = 1;
      return e?.concurrency != null && (r = I8(e.concurrency)), A8(r, "concurrency", 1), async function* () {
        var f, p;
        let m = new B1, y = this, M = [], x = m.signal, S = { signal: x }, E = () => m.abort();
        e != null && (f = e.signal) !== null && f !== undefined && f.aborted && E(), e == null || (p = e.signal) === null || p === undefined || p.addEventListener("abort", E);
        let B, q, L = false;
        function ge() {
          L = true;
        }
        async function _e() {
          try {
            for await (let ye of y) {
              var N;
              if (L)
                return;
              if (x.aborted)
                throw new Jr;
              try {
                ye = t(ye, S);
              } catch (xe) {
                ye = A1(xe);
              }
              ye !== Wo && (typeof ((N = ye) === null || N === undefined ? undefined : N.catch) == "function" && ye.catch(ge), M.push(ye), B && (B(), B = null), !L && M.length && M.length >= r && await new E1((xe) => {
                q = xe;
              }));
            }
            M.push(R1);
          } catch (ye) {
            let xe = A1(ye);
            L8(xe, undefined, ge), M.push(xe);
          } finally {
            var we;
            L = true, B && (B(), B = null), e == null || (we = e.signal) === null || we === undefined || we.removeEventListener("abort", E);
          }
        }
        _e();
        try {
          for (;; ) {
            for (;M.length > 0; ) {
              let N = await M[0];
              if (N === R1)
                return;
              if (x.aborted)
                throw new Jr;
              N !== Wo && (yield N), M.shift(), q && (q(), q = null);
            }
            await new E1((N) => {
              B = N;
            });
          }
        } finally {
          m.abort(), L = true, q && (q(), q = null);
        }
      }.call(this);
    }
    function N8(t = undefined) {
      return t != null && of(t, "options"), t?.signal != null && af(t.signal, "options.signal"), async function* () {
        let r = 0;
        for await (let f of this) {
          var o;
          if (t != null && (o = t.signal) !== null && o !== undefined && o.aborted)
            throw new Jr({ cause: t.signal.reason });
          yield [r++, f];
        }
      }.call(this);
    }
    async function I1(t, e = undefined) {
      for await (let r of kh.call(this, t, e))
        return true;
      return false;
    }
    async function D8(t, e = undefined) {
      if (typeof t != "function")
        throw new va("fn", ["Function", "AsyncFunction"], t);
      return !await I1.call(this, async (...r) => !await t(...r), e);
    }
    async function P8(t, e) {
      for await (let r of kh.call(this, t, e))
        return r;
    }
    async function C8(t, e) {
      if (typeof t != "function")
        throw new va("fn", ["Function", "AsyncFunction"], t);
      async function r(o, f) {
        return await t(o, f), Wo;
      }
      for await (let o of Ko.call(this, r, e))
        ;
    }
    function kh(t, e) {
      if (typeof t != "function")
        throw new va("fn", ["Function", "AsyncFunction"], t);
      async function r(o, f) {
        return await t(o, f) ? o : Wo;
      }
      return Ko.call(this, r, e);
    }
    var Th = class extends S8 {
      constructor() {
        super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
      }
    };
    async function O8(t, e, r) {
      var o;
      if (typeof t != "function")
        throw new va("reducer", ["Function", "AsyncFunction"], t);
      r != null && of(r, "options"), r?.signal != null && af(r.signal, "options.signal");
      let f = arguments.length > 1;
      if (r != null && (o = r.signal) !== null && o !== undefined && o.aborted) {
        let x = new Jr(undefined, { cause: r.signal.reason });
        throw this.once("error", () => {
        }), await B8(this.destroy(x)), x;
      }
      let p = new B1, m = p.signal;
      if (r != null && r.signal) {
        let x = { once: true, [R8]: this };
        r.signal.addEventListener("abort", () => p.abort(), x);
      }
      let y = false;
      try {
        for await (let x of this) {
          var M;
          if (y = true, r != null && (M = r.signal) !== null && M !== undefined && M.aborted)
            throw new Jr;
          f ? e = await t(e, x, { signal: m }) : (e = x, f = true);
        }
        if (!y && !f)
          throw new Th;
      } finally {
        p.abort();
      }
      return e;
    }
    async function F8(t) {
      t != null && of(t, "options"), t?.signal != null && af(t.signal, "options.signal");
      let e = [];
      for await (let o of this) {
        var r;
        if (t != null && (r = t.signal) !== null && r !== undefined && r.aborted)
          throw new Jr(undefined, { cause: t.signal.reason });
        q8(e, o);
      }
      return e;
    }
    function U8(t, e) {
      let r = Ko.call(this, t, e);
      return async function* () {
        for await (let f of r)
          yield* f;
      }.call(this);
    }
    function T1(t) {
      if (t = T8(t), k8(t))
        return 0;
      if (t < 0)
        throw new E8("number", ">= 0", t);
      return t;
    }
    function z8(t, e = undefined) {
      return e != null && of(e, "options"), e?.signal != null && af(e.signal, "options.signal"), t = T1(t), async function* () {
        var o;
        if (e != null && (o = e.signal) !== null && o !== undefined && o.aborted)
          throw new Jr;
        for await (let p of this) {
          var f;
          if (e != null && (f = e.signal) !== null && f !== undefined && f.aborted)
            throw new Jr;
          t-- <= 0 && (yield p);
        }
      }.call(this);
    }
    function H8(t, e = undefined) {
      return e != null && of(e, "options"), e?.signal != null && af(e.signal, "options.signal"), t = T1(t), async function* () {
        var o;
        if (e != null && (o = e.signal) !== null && o !== undefined && o.aborted)
          throw new Jr;
        for await (let p of this) {
          var f;
          if (e != null && (f = e.signal) !== null && f !== undefined && f.aborted)
            throw new Jr;
          if (t-- > 0)
            yield p;
          else
            return;
        }
      }.call(this);
    }
    Lh.exports.streamReturningOperators = { asIndexedPairs: N8, drop: z8, filter: kh, flatMap: U8, map: Ko, take: H8 };
    Lh.exports.promiseReturningOperators = { every: D8, forEach: C8, reduce: O8, toArray: F8, some: I1, find: P8 };
  });
  yn = T((CI, U1) => {
    var zi = (Oi(), ur(pr)), { aggregateTwoErrors: W8, codes: { ERR_MULTIPLE_CALLBACK: K8 }, AbortError: j8 } = Jt(), { Symbol: D1 } = Tt(), { kDestroyed: Z8, isDestroyed: V8, isFinished: $8, isServerRequest: G8 } = Fi(), P1 = D1("kDestroy"), Nh = D1("kConstruct");
    function C1(t, e, r) {
      t && (t.stack, e && !e.errored && (e.errored = t), r && !r.errored && (r.errored = t));
    }
    function Y8(t, e) {
      let r = this._readableState, o = this._writableState, f = o || r;
      return o && o.destroyed || r && r.destroyed ? (typeof e == "function" && e(), this) : (C1(t, o, r), o && (o.destroyed = true), r && (r.destroyed = true), f.constructed ? L1(this, t, e) : this.once(P1, function(p) {
        L1(this, W8(p, t), e);
      }), this);
    }
    function L1(t, e, r) {
      let o = false;
      function f(p) {
        if (o)
          return;
        o = true;
        let { _readableState: m, _writableState: y } = t;
        C1(p, y, m), y && (y.closed = true), m && (m.closed = true), typeof r == "function" && r(p), p ? zi.nextTick(X8, t, p) : zi.nextTick(O1, t);
      }
      try {
        t._destroy(e || null, f);
      } catch (p) {
        f(p);
      }
    }
    function X8(t, e) {
      Dh(t, e), O1(t);
    }
    function O1(t) {
      let { _readableState: e, _writableState: r } = t;
      r && (r.closeEmitted = true), e && (e.closeEmitted = true), (r && r.emitClose || e && e.emitClose) && t.emit("close");
    }
    function Dh(t, e) {
      let { _readableState: r, _writableState: o } = t;
      o && o.errorEmitted || r && r.errorEmitted || (o && (o.errorEmitted = true), r && (r.errorEmitted = true), t.emit("error", e));
    }
    function J8() {
      let t = this._readableState, e = this._writableState;
      t && (t.constructed = true, t.closed = false, t.closeEmitted = false, t.destroyed = false, t.errored = null, t.errorEmitted = false, t.reading = false, t.ended = t.readable === false, t.endEmitted = t.readable === false), e && (e.constructed = true, e.destroyed = false, e.closed = false, e.closeEmitted = false, e.errored = null, e.errorEmitted = false, e.finalCalled = false, e.prefinished = false, e.ended = e.writable === false, e.ending = e.writable === false, e.finished = e.writable === false);
    }
    function Ph(t, e, r) {
      let { _readableState: o, _writableState: f } = t;
      if (f && f.destroyed || o && o.destroyed)
        return this;
      o && o.autoDestroy || f && f.autoDestroy ? t.destroy(e) : e && (e.stack, f && !f.errored && (f.errored = e), o && !o.errored && (o.errored = e), r ? zi.nextTick(Dh, t, e) : Dh(t, e));
    }
    function Q8(t, e) {
      if (typeof t._construct != "function")
        return;
      let { _readableState: r, _writableState: o } = t;
      r && (r.constructed = false), o && (o.constructed = false), t.once(Nh, e), !(t.listenerCount(Nh) > 1) && zi.nextTick(e5, t);
    }
    function e5(t) {
      let e = false;
      function r(o) {
        if (e) {
          Ph(t, o ?? new K8);
          return;
        }
        e = true;
        let { _readableState: f, _writableState: p } = t, m = p || f;
        f && (f.constructed = true), p && (p.constructed = true), m.destroyed ? t.emit(P1, o) : o ? Ph(t, o, true) : zi.nextTick(t5, t);
      }
      try {
        t._construct(r);
      } catch (o) {
        r(o);
      }
    }
    function t5(t) {
      t.emit(Nh);
    }
    function N1(t) {
      return t && t.setHeader && typeof t.abort == "function";
    }
    function F1(t) {
      t.emit("close");
    }
    function r5(t, e) {
      t.emit("error", e), zi.nextTick(F1, t);
    }
    function i5(t, e) {
      !t || V8(t) || (!e && !$8(t) && (e = new j8), G8(t) ? (t.socket = null, t.destroy(e)) : N1(t) ? t.abort() : N1(t.req) ? t.req.abort() : typeof t.destroy == "function" ? t.destroy(e) : typeof t.close == "function" ? t.close() : e ? zi.nextTick(r5, t, e) : zi.nextTick(F1, t), t.destroyed || (t[Z8] = true));
    }
    U1.exports = { construct: Q8, destroyer: i5, destroy: Y8, undestroy: J8, errorOrDestroy: Ph };
  });
  Vo = T((OI, H1) => {
    var { ArrayIsArray: n5, ObjectSetPrototypeOf: z1 } = Tt(), { EventEmitter: jo } = ki();
    function Zo(t) {
      jo.call(this, t);
    }
    z1(Zo.prototype, jo.prototype);
    z1(Zo, jo);
    Zo.prototype.pipe = function(t, e) {
      let r = this;
      function o(S) {
        t.writable && t.write(S) === false && r.pause && r.pause();
      }
      r.on("data", o);
      function f() {
        r.readable && r.resume && r.resume();
      }
      t.on("drain", f), !t._isStdio && (!e || e.end !== false) && (r.on("end", m), r.on("close", y));
      let p = false;
      function m() {
        p || (p = true, t.end());
      }
      function y() {
        p || (p = true, typeof t.destroy == "function" && t.destroy());
      }
      function M(S) {
        x(), jo.listenerCount(this, "error") === 0 && this.emit("error", S);
      }
      Ch(r, "error", M), Ch(t, "error", M);
      function x() {
        r.removeListener("data", o), t.removeListener("drain", f), r.removeListener("end", m), r.removeListener("close", y), r.removeListener("error", M), t.removeListener("error", M), r.removeListener("end", x), r.removeListener("close", x), t.removeListener("close", x);
      }
      return r.on("end", x), r.on("close", x), t.on("close", x), t.emit("pipe", r), t;
    };
    function Ch(t, e, r) {
      if (typeof t.prependListener == "function")
        return t.prependListener(e, r);
      !t._events || !t._events[e] ? t.on(e, r) : n5(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
    }
    H1.exports = { Stream: Zo, prependListener: Ch };
  });
  Go = T((FI, $o) => {
    var { AbortError: f5, codes: a5 } = Jt(), o5 = Ui(), { ERR_INVALID_ARG_TYPE: W1 } = a5, s5 = (t, e) => {
      if (typeof t != "object" || !("aborted" in t))
        throw new W1(e, "AbortSignal", t);
    };
    function h5(t) {
      return !!(t && typeof t.pipe == "function");
    }
    $o.exports.addAbortSignal = function(e, r) {
      if (s5(e, "signal"), !h5(r))
        throw new W1("stream", "stream.Stream", r);
      return $o.exports.addAbortSignalNoValidate(e, r);
    };
    $o.exports.addAbortSignalNoValidate = function(t, e) {
      if (typeof t != "object" || !("aborted" in t))
        return e;
      let r = () => {
        e.destroy(new f5(undefined, { cause: t.reason }));
      };
      return t.aborted ? r() : (t.addEventListener("abort", r), o5(e, () => t.removeEventListener("abort", r))), e;
    };
  });
  Z1 = T((zI, j1) => {
    var { StringPrototypeSlice: K1, SymbolIterator: u5, TypedArrayPrototypeSet: Yo, Uint8Array: l5 } = Tt(), { Buffer: Oh } = Ut(), { inspect: d5 } = Gr();
    j1.exports = class {
      constructor() {
        this.head = null, this.tail = null, this.length = 0;
      }
      push(e) {
        let r = { data: e, next: null };
        this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
      }
      unshift(e) {
        let r = { data: e, next: this.head };
        this.length === 0 && (this.tail = r), this.head = r, ++this.length;
      }
      shift() {
        if (this.length === 0)
          return;
        let e = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
      }
      clear() {
        this.head = this.tail = null, this.length = 0;
      }
      join(e) {
        if (this.length === 0)
          return "";
        let r = this.head, o = "" + r.data;
        for (;(r = r.next) !== null; )
          o += e + r.data;
        return o;
      }
      concat(e) {
        if (this.length === 0)
          return Oh.alloc(0);
        let r = Oh.allocUnsafe(e >>> 0), o = this.head, f = 0;
        for (;o; )
          Yo(r, o.data, f), f += o.data.length, o = o.next;
        return r;
      }
      consume(e, r) {
        let o = this.head.data;
        if (e < o.length) {
          let f = o.slice(0, e);
          return this.head.data = o.slice(e), f;
        }
        return e === o.length ? this.shift() : r ? this._getString(e) : this._getBuffer(e);
      }
      first() {
        return this.head.data;
      }
      *[u5]() {
        for (let e = this.head;e; e = e.next)
          yield e.data;
      }
      _getString(e) {
        let r = "", o = this.head, f = 0;
        do {
          let p = o.data;
          if (e > p.length)
            r += p, e -= p.length;
          else {
            e === p.length ? (r += p, ++f, o.next ? this.head = o.next : this.head = this.tail = null) : (r += K1(p, 0, e), this.head = o, o.data = K1(p, e));
            break;
          }
          ++f;
        } while ((o = o.next) !== null);
        return this.length -= f, r;
      }
      _getBuffer(e) {
        let r = Oh.allocUnsafe(e), o = e, f = this.head, p = 0;
        do {
          let m = f.data;
          if (e > m.length)
            Yo(r, m, o - e), e -= m.length;
          else {
            e === m.length ? (Yo(r, m, o - e), ++p, f.next ? this.head = f.next : this.head = this.tail = null) : (Yo(r, new l5(m.buffer, m.byteOffset, e), o - e), this.head = f, f.data = m.slice(e));
            break;
          }
          ++p;
        } while ((f = f.next) !== null);
        return this.length -= p, r;
      }
      [Symbol.for("nodejs.util.inspect.custom")](e, r) {
        return d5(this, { ...r, depth: 0, customInspect: false });
      }
    };
  });
  Xo = T((HI, $1) => {
    var { MathFloor: c5, NumberIsInteger: p5 } = Tt(), { ERR_INVALID_ARG_VALUE: v5 } = Jt().codes;
    function b5(t, e, r) {
      return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
    }
    function V1(t) {
      return t ? 16 : 16 * 1024;
    }
    function m5(t, e, r, o) {
      let f = b5(e, o, r);
      if (f != null) {
        if (!p5(f) || f < 0) {
          let p = o ? `options.${r}` : "options.highWaterMark";
          throw new v5(p, f);
        }
        return c5(f);
      }
      return V1(t.objectMode);
    }
    $1.exports = { getHighWaterMark: m5, getDefaultHighWaterMark: V1 };
  });
  Fh = T((WI, J1) => {
    var G1 = (Oi(), ur(pr)), { PromisePrototypeThen: g5, SymbolAsyncIterator: Y1, SymbolIterator: X1 } = Tt(), { Buffer: y5 } = Ut(), { ERR_INVALID_ARG_TYPE: w5, ERR_STREAM_NULL_VALUES: M5 } = Jt().codes;
    function _5(t, e, r) {
      let o;
      if (typeof e == "string" || e instanceof y5)
        return new t({ objectMode: true, ...r, read() {
          this.push(e), this.push(null);
        } });
      let f;
      if (e && e[Y1])
        f = true, o = e[Y1]();
      else if (e && e[X1])
        f = false, o = e[X1]();
      else
        throw new w5("iterable", ["Iterable"], e);
      let p = new t({ objectMode: true, highWaterMark: 1, ...r }), m = false;
      p._read = function() {
        m || (m = true, M());
      }, p._destroy = function(x, S) {
        g5(y(x), () => G1.nextTick(S, x), (E) => G1.nextTick(S, E || x));
      };
      async function y(x) {
        let S = x != null, E = typeof o.throw == "function";
        if (S && E) {
          let { value: B, done: q } = await o.throw(x);
          if (await B, q)
            return;
        }
        if (typeof o.return == "function") {
          let { value: B } = await o.return();
          await B;
        }
      }
      async function M() {
        for (;; ) {
          try {
            let { value: x, done: S } = f ? await o.next() : o.next();
            if (S)
              p.push(null);
            else {
              let E = x && typeof x.then == "function" ? await x : x;
              if (E === null)
                throw m = false, new M5;
              if (p.push(E))
                continue;
              m = false;
            }
          } catch (x) {
            p.destroy(x);
          }
          break;
        }
      }
      return p;
    }
    J1.exports = _5;
  });
  ba = T((KI, lv) => {
    var Tr = (Oi(), ur(pr)), { ArrayPrototypeIndexOf: x5, NumberIsInteger: S5, NumberIsNaN: E5, NumberParseInt: A5, ObjectDefineProperties: tv, ObjectKeys: R5, ObjectSetPrototypeOf: rv, Promise: B5, SafeSet: q5, SymbolAsyncIterator: I5, Symbol: T5 } = Tt();
    lv.exports = Le;
    Le.ReadableState = jh;
    var { EventEmitter: k5 } = ki(), { Stream: Hi, prependListener: L5 } = Vo(), { Buffer: Uh } = Ut(), { addAbortSignal: N5 } = Go(), D5 = Ui(), Pe = Gr().debuglog("stream", (t) => {
      Pe = t;
    }), P5 = Z1(), hf = yn(), { getHighWaterMark: C5, getDefaultHighWaterMark: O5 } = Xo(), { aggregateTwoErrors: Q1, codes: { ERR_INVALID_ARG_TYPE: F5, ERR_METHOD_NOT_IMPLEMENTED: U5, ERR_OUT_OF_RANGE: z5, ERR_STREAM_PUSH_AFTER_EOF: H5, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: W5 } } = Jt(), { validateObject: K5 } = pa(), wn = T5("kPaused"), { StringDecoder: iv } = co(), j5 = Fh();
    rv(Le.prototype, Hi.prototype);
    rv(Le, Hi);
    var zh = () => {
    }, { errorOrDestroy: sf } = hf;
    function jh(t, e, r) {
      typeof r != "boolean" && (r = e instanceof Qr()), this.objectMode = !!(t && t.objectMode), r && (this.objectMode = this.objectMode || !!(t && t.readableObjectMode)), this.highWaterMark = t ? C5(this, t, "readableHighWaterMark", r) : O5(false), this.buffer = new P5, this.length = 0, this.pipes = [], this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.constructed = true, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this[wn] = null, this.errorEmitted = false, this.emitClose = !t || t.emitClose !== false, this.autoDestroy = !t || t.autoDestroy !== false, this.destroyed = false, this.errored = null, this.closed = false, this.closeEmitted = false, this.defaultEncoding = t && t.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = false, this.readingMore = false, this.dataEmitted = false, this.decoder = null, this.encoding = null, t && t.encoding && (this.decoder = new iv(t.encoding), this.encoding = t.encoding);
    }
    function Le(t) {
      if (!(this instanceof Le))
        return new Le(t);
      let e = this instanceof Qr();
      this._readableState = new jh(t, this, e), t && (typeof t.read == "function" && (this._read = t.read), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.construct == "function" && (this._construct = t.construct), t.signal && !e && N5(t.signal, this)), Hi.call(this, t), hf.construct(this, () => {
        this._readableState.needReadable && Jo(this, this._readableState);
      });
    }
    Le.prototype.destroy = hf.destroy;
    Le.prototype._undestroy = hf.undestroy;
    Le.prototype._destroy = function(t, e) {
      e(t);
    };
    Le.prototype[k5.captureRejectionSymbol] = function(t) {
      this.destroy(t);
    };
    Le.prototype.push = function(t, e) {
      return nv(this, t, e, false);
    };
    Le.prototype.unshift = function(t, e) {
      return nv(this, t, e, true);
    };
    function nv(t, e, r, o) {
      Pe("readableAddChunk", e);
      let f = t._readableState, p;
      if (f.objectMode || (typeof e == "string" ? (r = r || f.defaultEncoding, f.encoding !== r && (o && f.encoding ? e = Uh.from(e, r).toString(f.encoding) : (e = Uh.from(e, r), r = ""))) : e instanceof Uh ? r = "" : Hi._isUint8Array(e) ? (e = Hi._uint8ArrayToBuffer(e), r = "") : e != null && (p = new F5("chunk", ["string", "Buffer", "Uint8Array"], e))), p)
        sf(t, p);
      else if (e === null)
        f.reading = false, $5(t, f);
      else if (f.objectMode || e && e.length > 0)
        if (o)
          if (f.endEmitted)
            sf(t, new W5);
          else {
            if (f.destroyed || f.errored)
              return false;
            Hh(t, f, e, true);
          }
        else if (f.ended)
          sf(t, new H5);
        else {
          if (f.destroyed || f.errored)
            return false;
          f.reading = false, f.decoder && !r ? (e = f.decoder.write(e), f.objectMode || e.length !== 0 ? Hh(t, f, e, false) : Jo(t, f)) : Hh(t, f, e, false);
        }
      else
        o || (f.reading = false, Jo(t, f));
      return !f.ended && (f.length < f.highWaterMark || f.length === 0);
    }
    function Hh(t, e, r, o) {
      e.flowing && e.length === 0 && !e.sync && t.listenerCount("data") > 0 ? (e.multiAwaitDrain ? e.awaitDrainWriters.clear() : e.awaitDrainWriters = null, e.dataEmitted = true, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, o ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && Qo(t)), Jo(t, e);
    }
    Le.prototype.isPaused = function() {
      let t = this._readableState;
      return t[wn] === true || t.flowing === false;
    };
    Le.prototype.setEncoding = function(t) {
      let e = new iv(t);
      this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
      let r = this._readableState.buffer, o = "";
      for (let f of r)
        o += e.write(f);
      return r.clear(), o !== "" && r.push(o), this._readableState.length = o.length, this;
    };
    var Z5 = 1073741824;
    function V5(t) {
      if (t > Z5)
        throw new z5("size", "<= 1GiB", t);
      return t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++, t;
    }
    function ev(t, e) {
      return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : E5(t) ? e.flowing && e.length ? e.buffer.first().length : e.length : t <= e.length ? t : e.ended ? e.length : 0;
    }
    Le.prototype.read = function(t) {
      Pe("read", t), t === undefined ? t = NaN : S5(t) || (t = A5(t, 10));
      let e = this._readableState, r = t;
      if (t > e.highWaterMark && (e.highWaterMark = V5(t)), t !== 0 && (e.emittedReadable = false), t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
        return Pe("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? Wh(this) : Qo(this), null;
      if (t = ev(t, e), t === 0 && e.ended)
        return e.length === 0 && Wh(this), null;
      let o = e.needReadable;
      if (Pe("need readable", o), (e.length === 0 || e.length - t < e.highWaterMark) && (o = true, Pe("length less than watermark", o)), e.ended || e.reading || e.destroyed || e.errored || !e.constructed)
        o = false, Pe("reading, ended or constructing", o);
      else if (o) {
        Pe("do read"), e.reading = true, e.sync = true, e.length === 0 && (e.needReadable = true);
        try {
          this._read(e.highWaterMark);
        } catch (p) {
          sf(this, p);
        }
        e.sync = false, e.reading || (t = ev(r, e));
      }
      let f;
      return t > 0 ? f = hv(t, e) : f = null, f === null ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.multiAwaitDrain ? e.awaitDrainWriters.clear() : e.awaitDrainWriters = null), e.length === 0 && (e.ended || (e.needReadable = true), r !== t && e.ended && Wh(this)), f !== null && !e.errorEmitted && !e.closeEmitted && (e.dataEmitted = true, this.emit("data", f)), f;
    };
    function $5(t, e) {
      if (Pe("onEofChunk"), !e.ended) {
        if (e.decoder) {
          let r = e.decoder.end();
          r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
        }
        e.ended = true, e.sync ? Qo(t) : (e.needReadable = false, e.emittedReadable = true, fv(t));
      }
    }
    function Qo(t) {
      let e = t._readableState;
      Pe("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = false, e.emittedReadable || (Pe("emitReadable", e.flowing), e.emittedReadable = true, Tr.nextTick(fv, t));
    }
    function fv(t) {
      let e = t._readableState;
      Pe("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && !e.errored && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = false), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, ov(t);
    }
    function Jo(t, e) {
      !e.readingMore && e.constructed && (e.readingMore = true, Tr.nextTick(G5, t, e));
    }
    function G5(t, e) {
      for (;!e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0); ) {
        let r = e.length;
        if (Pe("maybeReadMore read 0"), t.read(0), r === e.length)
          break;
      }
      e.readingMore = false;
    }
    Le.prototype._read = function(t) {
      throw new U5("_read()");
    };
    Le.prototype.pipe = function(t, e) {
      let r = this, o = this._readableState;
      o.pipes.length === 1 && (o.multiAwaitDrain || (o.multiAwaitDrain = true, o.awaitDrainWriters = new q5(o.awaitDrainWriters ? [o.awaitDrainWriters] : []))), o.pipes.push(t), Pe("pipe count=%d opts=%j", o.pipes.length, e);
      let p = (!e || e.end !== false) && t !== Tr.stdout && t !== Tr.stderr ? y : _e;
      o.endEmitted ? Tr.nextTick(p) : r.once("end", p), t.on("unpipe", m);
      function m(N, we) {
        Pe("onunpipe"), N === r && we && we.hasUnpiped === false && (we.hasUnpiped = true, S());
      }
      function y() {
        Pe("onend"), t.end();
      }
      let M, x = false;
      function S() {
        Pe("cleanup"), t.removeListener("close", L), t.removeListener("finish", ge), M && t.removeListener("drain", M), t.removeListener("error", q), t.removeListener("unpipe", m), r.removeListener("end", y), r.removeListener("end", _e), r.removeListener("data", B), x = true, M && o.awaitDrainWriters && (!t._writableState || t._writableState.needDrain) && M();
      }
      function E() {
        x || (o.pipes.length === 1 && o.pipes[0] === t ? (Pe("false write response, pause", 0), o.awaitDrainWriters = t, o.multiAwaitDrain = false) : o.pipes.length > 1 && o.pipes.includes(t) && (Pe("false write response, pause", o.awaitDrainWriters.size), o.awaitDrainWriters.add(t)), r.pause()), M || (M = Y5(r, t), t.on("drain", M));
      }
      r.on("data", B);
      function B(N) {
        Pe("ondata");
        let we = t.write(N);
        Pe("dest.write", we), we === false && E();
      }
      function q(N) {
        if (Pe("onerror", N), _e(), t.removeListener("error", q), t.listenerCount("error") === 0) {
          let we = t._writableState || t._readableState;
          we && !we.errorEmitted ? sf(t, N) : t.emit("error", N);
        }
      }
      L5(t, "error", q);
      function L() {
        t.removeListener("finish", ge), _e();
      }
      t.once("close", L);
      function ge() {
        Pe("onfinish"), t.removeListener("close", L), _e();
      }
      t.once("finish", ge);
      function _e() {
        Pe("unpipe"), r.unpipe(t);
      }
      return t.emit("pipe", r), t.writableNeedDrain === true ? o.flowing && E() : o.flowing || (Pe("pipe resume"), r.resume()), t;
    };
    function Y5(t, e) {
      return function() {
        let o = t._readableState;
        o.awaitDrainWriters === e ? (Pe("pipeOnDrain", 1), o.awaitDrainWriters = null) : o.multiAwaitDrain && (Pe("pipeOnDrain", o.awaitDrainWriters.size), o.awaitDrainWriters.delete(e)), (!o.awaitDrainWriters || o.awaitDrainWriters.size === 0) && t.listenerCount("data") && t.resume();
      };
    }
    Le.prototype.unpipe = function(t) {
      let e = this._readableState, r = { hasUnpiped: false };
      if (e.pipes.length === 0)
        return this;
      if (!t) {
        let f = e.pipes;
        e.pipes = [], this.pause();
        for (let p = 0;p < f.length; p++)
          f[p].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      let o = x5(e.pipes, t);
      return o === -1 ? this : (e.pipes.splice(o, 1), e.pipes.length === 0 && this.pause(), t.emit("unpipe", this, r), this);
    };
    Le.prototype.on = function(t, e) {
      let r = Hi.prototype.on.call(this, t, e), o = this._readableState;
      return t === "data" ? (o.readableListening = this.listenerCount("readable") > 0, o.flowing !== false && this.resume()) : t === "readable" && !o.endEmitted && !o.readableListening && (o.readableListening = o.needReadable = true, o.flowing = false, o.emittedReadable = false, Pe("on readable", o.length, o.reading), o.length ? Qo(this) : o.reading || Tr.nextTick(X5, this)), r;
    };
    Le.prototype.addListener = Le.prototype.on;
    Le.prototype.removeListener = function(t, e) {
      let r = Hi.prototype.removeListener.call(this, t, e);
      return t === "readable" && Tr.nextTick(av, this), r;
    };
    Le.prototype.off = Le.prototype.removeListener;
    Le.prototype.removeAllListeners = function(t) {
      let e = Hi.prototype.removeAllListeners.apply(this, arguments);
      return (t === "readable" || t === undefined) && Tr.nextTick(av, this), e;
    };
    function av(t) {
      let e = t._readableState;
      e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && e[wn] === false ? e.flowing = true : t.listenerCount("data") > 0 ? t.resume() : e.readableListening || (e.flowing = null);
    }
    function X5(t) {
      Pe("readable nexttick read 0"), t.read(0);
    }
    Le.prototype.resume = function() {
      let t = this._readableState;
      return t.flowing || (Pe("resume"), t.flowing = !t.readableListening, J5(this, t)), t[wn] = false, this;
    };
    function J5(t, e) {
      e.resumeScheduled || (e.resumeScheduled = true, Tr.nextTick(Q5, t, e));
    }
    function Q5(t, e) {
      Pe("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = false, t.emit("resume"), ov(t), e.flowing && !e.reading && t.read(0);
    }
    Le.prototype.pause = function() {
      return Pe("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (Pe("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[wn] = true, this;
    };
    function ov(t) {
      let e = t._readableState;
      for (Pe("flow", e.flowing);e.flowing && t.read() !== null; )
        ;
    }
    Le.prototype.wrap = function(t) {
      let e = false;
      t.on("data", (o) => {
        !this.push(o) && t.pause && (e = true, t.pause());
      }), t.on("end", () => {
        this.push(null);
      }), t.on("error", (o) => {
        sf(this, o);
      }), t.on("close", () => {
        this.destroy();
      }), t.on("destroy", () => {
        this.destroy();
      }), this._read = () => {
        e && t.resume && (e = false, t.resume());
      };
      let r = R5(t);
      for (let o = 1;o < r.length; o++) {
        let f = r[o];
        this[f] === undefined && typeof t[f] == "function" && (this[f] = t[f].bind(t));
      }
      return this;
    };
    Le.prototype[I5] = function() {
      return sv(this);
    };
    Le.prototype.iterator = function(t) {
      return t !== undefined && K5(t, "options"), sv(this, t);
    };
    function sv(t, e) {
      typeof t.read != "function" && (t = Le.wrap(t, { objectMode: true }));
      let r = ex(t, e);
      return r.stream = t, r;
    }
    async function* ex(t, e) {
      let r = zh;
      function o(m) {
        this === t ? (r(), r = zh) : r = m;
      }
      t.on("readable", o);
      let f, p = D5(t, { writable: false }, (m) => {
        f = m ? Q1(f, m) : null, r(), r = zh;
      });
      try {
        for (;; ) {
          let m = t.destroyed ? null : t.read();
          if (m !== null)
            yield m;
          else {
            if (f)
              throw f;
            if (f === null)
              return;
            await new B5(o);
          }
        }
      } catch (m) {
        throw f = Q1(f, m), f;
      } finally {
        (f || e?.destroyOnReturn !== false) && (f === undefined || t._readableState.autoDestroy) ? hf.destroyer(t, null) : (t.off("readable", o), p());
      }
    }
    tv(Le.prototype, { readable: { __proto__: null, get() {
      let t = this._readableState;
      return !!t && t.readable !== false && !t.destroyed && !t.errorEmitted && !t.endEmitted;
    }, set(t) {
      this._readableState && (this._readableState.readable = !!t);
    } }, readableDidRead: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.dataEmitted;
    } }, readableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
    } }, readableHighWaterMark: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } }, readableBuffer: { __proto__: null, enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } }, readableFlowing: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(t) {
      this._readableState && (this._readableState.flowing = t);
    } }, readableLength: { __proto__: null, enumerable: false, get() {
      return this._readableState.length;
    } }, readableObjectMode: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.objectMode : false;
    } }, readableEncoding: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.encoding : null;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.errored : null;
    } }, closed: { __proto__: null, get() {
      return this._readableState ? this._readableState.closed : false;
    } }, destroyed: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.destroyed : false;
    }, set(t) {
      !this._readableState || (this._readableState.destroyed = t);
    } }, readableEnded: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.endEmitted : false;
    } } });
    tv(jh.prototype, { pipesCount: { __proto__: null, get() {
      return this.pipes.length;
    } }, paused: { __proto__: null, get() {
      return this[wn] !== false;
    }, set(t) {
      this[wn] = !!t;
    } } });
    Le._fromList = hv;
    function hv(t, e) {
      if (e.length === 0)
        return null;
      let r;
      return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.first() : r = e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r;
    }
    function Wh(t) {
      let e = t._readableState;
      Pe("endReadable", e.endEmitted), e.endEmitted || (e.ended = true, Tr.nextTick(tx, e, t));
    }
    function tx(t, e) {
      if (Pe("endReadableNT", t.endEmitted, t.length), !t.errored && !t.closeEmitted && !t.endEmitted && t.length === 0) {
        if (t.endEmitted = true, e.emit("end"), e.writable && e.allowHalfOpen === false)
          Tr.nextTick(rx, e);
        else if (t.autoDestroy) {
          let r = e._writableState;
          (!r || r.autoDestroy && (r.finished || r.writable === false)) && e.destroy();
        }
      }
    }
    function rx(t) {
      t.writable && !t.writableEnded && !t.destroyed && t.end();
    }
    Le.from = function(t, e) {
      return j5(Le, t, e);
    };
    var Kh;
    function uv() {
      return Kh === undefined && (Kh = {}), Kh;
    }
    Le.fromWeb = function(t, e) {
      return uv().newStreamReadableFromReadableStream(t, e);
    };
    Le.toWeb = function(t, e) {
      return uv().newReadableStreamFromStreamReadable(t, e);
    };
    Le.wrap = function(t, e) {
      var r, o;
      return new Le({ objectMode: (r = (o = t.readableObjectMode) !== null && o !== undefined ? o : t.objectMode) !== null && r !== undefined ? r : true, ...e, destroy(f, p) {
        hf.destroyer(t, f), p(f);
      } }).wrap(t);
    };
  });
  Jh = T((jI, xv) => {
    var Mn = (Oi(), ur(pr)), { ArrayPrototypeSlice: pv, Error: ix, FunctionPrototypeSymbolHasInstance: vv, ObjectDefineProperty: bv, ObjectDefineProperties: nx, ObjectSetPrototypeOf: mv, StringPrototypeToLowerCase: fx, Symbol: ax, SymbolHasInstance: ox } = Tt();
    xv.exports = st;
    st.WritableState = ya;
    var { EventEmitter: sx } = ki(), ma = Vo().Stream, { Buffer: es } = Ut(), is = yn(), { addAbortSignal: hx } = Go(), { getHighWaterMark: ux, getDefaultHighWaterMark: lx } = Xo(), { ERR_INVALID_ARG_TYPE: dx, ERR_METHOD_NOT_IMPLEMENTED: cx, ERR_MULTIPLE_CALLBACK: gv, ERR_STREAM_CANNOT_PIPE: px, ERR_STREAM_DESTROYED: ga, ERR_STREAM_ALREADY_FINISHED: vx, ERR_STREAM_NULL_VALUES: bx, ERR_STREAM_WRITE_AFTER_END: mx, ERR_UNKNOWN_ENCODING: yv } = Jt().codes, { errorOrDestroy: uf } = is;
    mv(st.prototype, ma.prototype);
    mv(st, ma);
    function $h() {
    }
    var lf = ax("kOnFinished");
    function ya(t, e, r) {
      typeof r != "boolean" && (r = e instanceof Qr()), this.objectMode = !!(t && t.objectMode), r && (this.objectMode = this.objectMode || !!(t && t.writableObjectMode)), this.highWaterMark = t ? ux(this, t, "writableHighWaterMark", r) : lx(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      let o = !!(t && t.decodeStrings === false);
      this.decodeStrings = !o, this.defaultEncoding = t && t.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = yx.bind(undefined, e), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, rs(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !t || t.emitClose !== false, this.autoDestroy = !t || t.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[lf] = [];
    }
    function rs(t) {
      t.buffered = [], t.bufferedIndex = 0, t.allBuffers = true, t.allNoop = true;
    }
    ya.prototype.getBuffer = function() {
      return pv(this.buffered, this.bufferedIndex);
    };
    bv(ya.prototype, "bufferedRequestCount", { __proto__: null, get() {
      return this.buffered.length - this.bufferedIndex;
    } });
    function st(t) {
      let e = this instanceof Qr();
      if (!e && !vv(st, this))
        return new st(t);
      this._writableState = new ya(t, this, e), t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.final == "function" && (this._final = t.final), typeof t.construct == "function" && (this._construct = t.construct), t.signal && hx(t.signal, this)), ma.call(this, t), is.construct(this, () => {
        let r = this._writableState;
        r.writing || Yh(this, r), Xh(this, r);
      });
    }
    bv(st, ox, { __proto__: null, value: function(t) {
      return vv(this, t) ? true : this !== st ? false : t && t._writableState instanceof ya;
    } });
    st.prototype.pipe = function() {
      uf(this, new px);
    };
    function wv(t, e, r, o) {
      let f = t._writableState;
      if (typeof r == "function")
        o = r, r = f.defaultEncoding;
      else {
        if (!r)
          r = f.defaultEncoding;
        else if (r !== "buffer" && !es.isEncoding(r))
          throw new yv(r);
        typeof o != "function" && (o = $h);
      }
      if (e === null)
        throw new bx;
      if (!f.objectMode)
        if (typeof e == "string")
          f.decodeStrings !== false && (e = es.from(e, r), r = "buffer");
        else if (e instanceof es)
          r = "buffer";
        else if (ma._isUint8Array(e))
          e = ma._uint8ArrayToBuffer(e), r = "buffer";
        else
          throw new dx("chunk", ["string", "Buffer", "Uint8Array"], e);
      let p;
      return f.ending ? p = new mx : f.destroyed && (p = new ga("write")), p ? (Mn.nextTick(o, p), uf(t, p, true), p) : (f.pendingcb++, gx(t, f, e, r, o));
    }
    st.prototype.write = function(t, e, r) {
      return wv(this, t, e, r) === true;
    };
    st.prototype.cork = function() {
      this._writableState.corked++;
    };
    st.prototype.uncork = function() {
      let t = this._writableState;
      t.corked && (t.corked--, t.writing || Yh(this, t));
    };
    st.prototype.setDefaultEncoding = function(e) {
      if (typeof e == "string" && (e = fx(e)), !es.isEncoding(e))
        throw new yv(e);
      return this._writableState.defaultEncoding = e, this;
    };
    function gx(t, e, r, o, f) {
      let p = e.objectMode ? 1 : r.length;
      e.length += p;
      let m = e.length < e.highWaterMark;
      return m || (e.needDrain = true), e.writing || e.corked || e.errored || !e.constructed ? (e.buffered.push({ chunk: r, encoding: o, callback: f }), e.allBuffers && o !== "buffer" && (e.allBuffers = false), e.allNoop && f !== $h && (e.allNoop = false)) : (e.writelen = p, e.writecb = f, e.writing = true, e.sync = true, t._write(r, o, e.onwrite), e.sync = false), m && !e.errored && !e.destroyed;
    }
    function dv(t, e, r, o, f, p, m) {
      e.writelen = o, e.writecb = m, e.writing = true, e.sync = true, e.destroyed ? e.onwrite(new ga("write")) : r ? t._writev(f, e.onwrite) : t._write(f, p, e.onwrite), e.sync = false;
    }
    function cv(t, e, r, o) {
      --e.pendingcb, o(r), Gh(e), uf(t, r);
    }
    function yx(t, e) {
      let r = t._writableState, o = r.sync, f = r.writecb;
      if (typeof f != "function") {
        uf(t, new gv);
        return;
      }
      r.writing = false, r.writecb = null, r.length -= r.writelen, r.writelen = 0, e ? (e.stack, r.errored || (r.errored = e), t._readableState && !t._readableState.errored && (t._readableState.errored = e), o ? Mn.nextTick(cv, t, r, e, f) : cv(t, r, e, f)) : (r.buffered.length > r.bufferedIndex && Yh(t, r), o ? r.afterWriteTickInfo !== null && r.afterWriteTickInfo.cb === f ? r.afterWriteTickInfo.count++ : (r.afterWriteTickInfo = { count: 1, cb: f, stream: t, state: r }, Mn.nextTick(wx, r.afterWriteTickInfo)) : Mv(t, r, 1, f));
    }
    function wx({ stream: t, state: e, count: r, cb: o }) {
      return e.afterWriteTickInfo = null, Mv(t, e, r, o);
    }
    function Mv(t, e, r, o) {
      for (!e.ending && !t.destroyed && e.length === 0 && e.needDrain && (e.needDrain = false, t.emit("drain"));r-- > 0; )
        e.pendingcb--, o();
      e.destroyed && Gh(e), Xh(t, e);
    }
    function Gh(t) {
      if (t.writing)
        return;
      for (let f = t.bufferedIndex;f < t.buffered.length; ++f) {
        var e;
        let { chunk: p, callback: m } = t.buffered[f], y = t.objectMode ? 1 : p.length;
        t.length -= y, m((e = t.errored) !== null && e !== undefined ? e : new ga("write"));
      }
      let r = t[lf].splice(0);
      for (let f = 0;f < r.length; f++) {
        var o;
        r[f]((o = t.errored) !== null && o !== undefined ? o : new ga("end"));
      }
      rs(t);
    }
    function Yh(t, e) {
      if (e.corked || e.bufferProcessing || e.destroyed || !e.constructed)
        return;
      let { buffered: r, bufferedIndex: o, objectMode: f } = e, p = r.length - o;
      if (!p)
        return;
      let m = o;
      if (e.bufferProcessing = true, p > 1 && t._writev) {
        e.pendingcb -= p - 1;
        let y = e.allNoop ? $h : (x) => {
          for (let S = m;S < r.length; ++S)
            r[S].callback(x);
        }, M = e.allNoop && m === 0 ? r : pv(r, m);
        M.allBuffers = e.allBuffers, dv(t, e, true, e.length, M, "", y), rs(e);
      } else {
        do {
          let { chunk: y, encoding: M, callback: x } = r[m];
          r[m++] = null;
          let S = f ? 1 : y.length;
          dv(t, e, false, S, y, M, x);
        } while (m < r.length && !e.writing);
        m === r.length ? rs(e) : m > 256 ? (r.splice(0, m), e.bufferedIndex = 0) : e.bufferedIndex = m;
      }
      e.bufferProcessing = false;
    }
    st.prototype._write = function(t, e, r) {
      if (this._writev)
        this._writev([{ chunk: t, encoding: e }], r);
      else
        throw new cx("_write()");
    };
    st.prototype._writev = null;
    st.prototype.end = function(t, e, r) {
      let o = this._writableState;
      typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null);
      let f;
      if (t != null) {
        let p = wv(this, t, e);
        p instanceof ix && (f = p);
      }
      return o.corked && (o.corked = 1, this.uncork()), f || (!o.errored && !o.ending ? (o.ending = true, Xh(this, o, true), o.ended = true) : o.finished ? f = new vx("end") : o.destroyed && (f = new ga("end"))), typeof r == "function" && (f || o.finished ? Mn.nextTick(r, f) : o[lf].push(r)), this;
    };
    function ts(t) {
      return t.ending && !t.destroyed && t.constructed && t.length === 0 && !t.errored && t.buffered.length === 0 && !t.finished && !t.writing && !t.errorEmitted && !t.closeEmitted;
    }
    function Mx(t, e) {
      let r = false;
      function o(f) {
        if (r) {
          uf(t, f ?? gv());
          return;
        }
        if (r = true, e.pendingcb--, f) {
          let p = e[lf].splice(0);
          for (let m = 0;m < p.length; m++)
            p[m](f);
          uf(t, f, e.sync);
        } else
          ts(e) && (e.prefinished = true, t.emit("prefinish"), e.pendingcb++, Mn.nextTick(Vh, t, e));
      }
      e.sync = true, e.pendingcb++;
      try {
        t._final(o);
      } catch (f) {
        o(f);
      }
      e.sync = false;
    }
    function _x(t, e) {
      !e.prefinished && !e.finalCalled && (typeof t._final == "function" && !e.destroyed ? (e.finalCalled = true, Mx(t, e)) : (e.prefinished = true, t.emit("prefinish")));
    }
    function Xh(t, e, r) {
      ts(e) && (_x(t, e), e.pendingcb === 0 && (r ? (e.pendingcb++, Mn.nextTick((o, f) => {
        ts(f) ? Vh(o, f) : f.pendingcb--;
      }, t, e)) : ts(e) && (e.pendingcb++, Vh(t, e))));
    }
    function Vh(t, e) {
      e.pendingcb--, e.finished = true;
      let r = e[lf].splice(0);
      for (let o = 0;o < r.length; o++)
        r[o]();
      if (t.emit("finish"), e.autoDestroy) {
        let o = t._readableState;
        (!o || o.autoDestroy && (o.endEmitted || o.readable === false)) && t.destroy();
      }
    }
    nx(st.prototype, { closed: { __proto__: null, get() {
      return this._writableState ? this._writableState.closed : false;
    } }, destroyed: { __proto__: null, get() {
      return this._writableState ? this._writableState.destroyed : false;
    }, set(t) {
      this._writableState && (this._writableState.destroyed = t);
    } }, writable: { __proto__: null, get() {
      let t = this._writableState;
      return !!t && t.writable !== false && !t.destroyed && !t.errored && !t.ending && !t.ended;
    }, set(t) {
      this._writableState && (this._writableState.writable = !!t);
    } }, writableFinished: { __proto__: null, get() {
      return this._writableState ? this._writableState.finished : false;
    } }, writableObjectMode: { __proto__: null, get() {
      return this._writableState ? this._writableState.objectMode : false;
    } }, writableBuffer: { __proto__: null, get() {
      return this._writableState && this._writableState.getBuffer();
    } }, writableEnded: { __proto__: null, get() {
      return this._writableState ? this._writableState.ending : false;
    } }, writableNeedDrain: { __proto__: null, get() {
      let t = this._writableState;
      return t ? !t.destroyed && !t.ending && t.needDrain : false;
    } }, writableHighWaterMark: { __proto__: null, get() {
      return this._writableState && this._writableState.highWaterMark;
    } }, writableCorked: { __proto__: null, get() {
      return this._writableState ? this._writableState.corked : 0;
    } }, writableLength: { __proto__: null, get() {
      return this._writableState && this._writableState.length;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._writableState ? this._writableState.errored : null;
    } }, writableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
    } } });
    var xx = is.destroy;
    st.prototype.destroy = function(t, e) {
      let r = this._writableState;
      return !r.destroyed && (r.bufferedIndex < r.buffered.length || r[lf].length) && Mn.nextTick(Gh, r), xx.call(this, t, e), this;
    };
    st.prototype._undestroy = is.undestroy;
    st.prototype._destroy = function(t, e) {
      e(t);
    };
    st.prototype[sx.captureRejectionSymbol] = function(t) {
      this.destroy(t);
    };
    var Zh;
    function _v() {
      return Zh === undefined && (Zh = {}), Zh;
    }
    st.fromWeb = function(t, e) {
      return _v().newStreamWritableFromWritableStream(t, e);
    };
    st.toWeb = function(t) {
      return _v().newWritableStreamFromStreamWritable(t);
    };
  });
  Dv = T((ZI, Nv) => {
    var Qh = (Oi(), ur(pr)), Sx = Ut(), { isReadable: Ex, isWritable: Ax, isIterable: Sv, isNodeStream: Rx, isReadableNodeStream: Ev, isWritableNodeStream: Av, isDuplexNodeStream: Bx } = Fi(), Rv = Ui(), { AbortError: Lv, codes: { ERR_INVALID_ARG_TYPE: qx, ERR_INVALID_RETURN_VALUE: Bv } } = Jt(), { destroyer: df } = yn(), Ix = Qr(), Tx = ba(), { createDeferredPromise: qv } = Gr(), Iv = Fh(), Tv = globalThis.Blob || Sx.Blob, kx = typeof Tv < "u" ? function(e) {
      return e instanceof Tv;
    } : function(e) {
      return false;
    }, Lx = globalThis.AbortController || No().AbortController, { FunctionPrototypeCall: kv } = Tt(), _n = class extends Ix {
      constructor(e) {
        super(e), e?.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), e?.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
      }
    };
    Nv.exports = function t(e, r) {
      if (Bx(e))
        return e;
      if (Ev(e))
        return ns({ readable: e });
      if (Av(e))
        return ns({ writable: e });
      if (Rx(e))
        return ns({ writable: false, readable: false });
      if (typeof e == "function") {
        let { value: f, write: p, final: m, destroy: y } = Nx(e);
        if (Sv(f))
          return Iv(_n, f, { objectMode: true, write: p, final: m, destroy: y });
        let M = f?.then;
        if (typeof M == "function") {
          let x, S = kv(M, f, (E) => {
            if (E != null)
              throw new Bv("nully", "body", E);
          }, (E) => {
            df(x, E);
          });
          return x = new _n({ objectMode: true, readable: false, write: p, final(E) {
            m(async () => {
              try {
                await S, Qh.nextTick(E, null);
              } catch (B) {
                Qh.nextTick(E, B);
              }
            });
          }, destroy: y });
        }
        throw new Bv("Iterable, AsyncIterable or AsyncFunction", r, f);
      }
      if (kx(e))
        return t(e.arrayBuffer());
      if (Sv(e))
        return Iv(_n, e, { objectMode: true, writable: false });
      if (typeof e?.writable == "object" || typeof e?.readable == "object") {
        let f = e != null && e.readable ? Ev(e?.readable) ? e?.readable : t(e.readable) : undefined, p = e != null && e.writable ? Av(e?.writable) ? e?.writable : t(e.writable) : undefined;
        return ns({ readable: f, writable: p });
      }
      let o = e?.then;
      if (typeof o == "function") {
        let f;
        return kv(o, e, (p) => {
          p != null && f.push(p), f.push(null);
        }, (p) => {
          df(f, p);
        }), f = new _n({ objectMode: true, writable: false, read() {
        } });
      }
      throw new qx(r, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], e);
    };
    function Nx(t) {
      let { promise: e, resolve: r } = qv(), o = new Lx, f = o.signal;
      return { value: t(async function* () {
        for (;; ) {
          let m = e;
          e = null;
          let { chunk: y, done: M, cb: x } = await m;
          if (Qh.nextTick(x), M)
            return;
          if (f.aborted)
            throw new Lv(undefined, { cause: f.reason });
          ({ promise: e, resolve: r } = qv()), yield y;
        }
      }(), { signal: f }), write(m, y, M) {
        let x = r;
        r = null, x({ chunk: m, done: false, cb: M });
      }, final(m) {
        let y = r;
        r = null, y({ done: true, cb: m });
      }, destroy(m, y) {
        o.abort(), y(m);
      } };
    }
    function ns(t) {
      let e = t.readable && typeof t.readable.read != "function" ? Tx.wrap(t.readable) : t.readable, r = t.writable, o = !!Ex(e), f = !!Ax(r), p, m, y, M, x;
      function S(E) {
        let B = M;
        M = null, B ? B(E) : E ? x.destroy(E) : !o && !f && x.destroy();
      }
      return x = new _n({ readableObjectMode: !!(e != null && e.readableObjectMode), writableObjectMode: !!(r != null && r.writableObjectMode), readable: o, writable: f }), f && (Rv(r, (E) => {
        f = false, E && df(e, E), S(E);
      }), x._write = function(E, B, q) {
        r.write(E, B) ? q() : p = q;
      }, x._final = function(E) {
        r.end(), m = E;
      }, r.on("drain", function() {
        if (p) {
          let E = p;
          p = null, E();
        }
      }), r.on("finish", function() {
        if (m) {
          let E = m;
          m = null, E();
        }
      })), o && (Rv(e, (E) => {
        o = false, E && df(e, E), S(E);
      }), e.on("readable", function() {
        if (y) {
          let E = y;
          y = null, E();
        }
      }), e.on("end", function() {
        x.push(null);
      }), x._read = function() {
        for (;; ) {
          let E = e.read();
          if (E === null) {
            y = x._read;
            return;
          }
          if (!x.push(E))
            return;
        }
      }), x._destroy = function(E, B) {
        !E && M !== null && (E = new Lv), y = null, p = null, m = null, M === null ? B(E) : (M = B, df(r, E), df(e, E));
      }, x;
    }
  });
  Qr = T((VI, Ov) => {
    var { ObjectDefineProperties: Dx, ObjectGetOwnPropertyDescriptor: bi, ObjectKeys: Px, ObjectSetPrototypeOf: Pv } = Tt();
    Ov.exports = kr;
    var ru = ba(), vr = Jh();
    Pv(kr.prototype, ru.prototype);
    Pv(kr, ru);
    {
      let t = Px(vr.prototype);
      for (let e = 0;e < t.length; e++) {
        let r = t[e];
        kr.prototype[r] || (kr.prototype[r] = vr.prototype[r]);
      }
    }
    function kr(t) {
      if (!(this instanceof kr))
        return new kr(t);
      ru.call(this, t), vr.call(this, t), t ? (this.allowHalfOpen = t.allowHalfOpen !== false, t.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), t.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
    }
    Dx(kr.prototype, { writable: { __proto__: null, ...bi(vr.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...bi(vr.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...bi(vr.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...bi(vr.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...bi(vr.prototype, "writableLength") }, writableFinished: { __proto__: null, ...bi(vr.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...bi(vr.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...bi(vr.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...bi(vr.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
      return this._readableState === undefined || this._writableState === undefined ? false : this._readableState.destroyed && this._writableState.destroyed;
    }, set(t) {
      this._readableState && this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
    } } });
    var eu;
    function Cv() {
      return eu === undefined && (eu = {}), eu;
    }
    kr.fromWeb = function(t, e) {
      return Cv().newStreamDuplexFromReadableWritablePair(t, e);
    };
    kr.toWeb = function(t) {
      return Cv().newReadableWritablePairFromDuplex(t);
    };
    var tu;
    kr.from = function(t) {
      return tu || (tu = Dv()), tu(t, "body");
    };
  });
  fu = T(($I, Uv) => {
    var { ObjectSetPrototypeOf: Fv, Symbol: Cx } = Tt();
    Uv.exports = mi;
    var { ERR_METHOD_NOT_IMPLEMENTED: Ox } = Jt().codes, nu = Qr(), { getHighWaterMark: Fx } = Xo();
    Fv(mi.prototype, nu.prototype);
    Fv(mi, nu);
    var wa = Cx("kCallback");
    function mi(t) {
      if (!(this instanceof mi))
        return new mi(t);
      let e = t ? Fx(this, t, "readableHighWaterMark", true) : null;
      e === 0 && (t = { ...t, highWaterMark: null, readableHighWaterMark: e, writableHighWaterMark: t.writableHighWaterMark || 0 }), nu.call(this, t), this._readableState.sync = false, this[wa] = null, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", Ux);
    }
    function iu(t) {
      typeof this._flush == "function" && !this.destroyed ? this._flush((e, r) => {
        if (e) {
          t ? t(e) : this.destroy(e);
          return;
        }
        r != null && this.push(r), this.push(null), t && t();
      }) : (this.push(null), t && t());
    }
    function Ux() {
      this._final !== iu && iu.call(this);
    }
    mi.prototype._final = iu;
    mi.prototype._transform = function(t, e, r) {
      throw new Ox("_transform()");
    };
    mi.prototype._write = function(t, e, r) {
      let o = this._readableState, f = this._writableState, p = o.length;
      this._transform(t, e, (m, y) => {
        if (m) {
          r(m);
          return;
        }
        y != null && this.push(y), f.ended || p === o.length || o.length < o.highWaterMark ? r() : this[wa] = r;
      });
    };
    mi.prototype._read = function() {
      if (this[wa]) {
        let t = this[wa];
        this[wa] = null, t();
      }
    };
  });
  ou = T((GI, Hv) => {
    var { ObjectSetPrototypeOf: zv } = Tt();
    Hv.exports = cf;
    var au = fu();
    zv(cf.prototype, au.prototype);
    zv(cf, au);
    function cf(t) {
      if (!(this instanceof cf))
        return new cf(t);
      au.call(this, t);
    }
    cf.prototype._transform = function(t, e, r) {
      r(null, t);
    };
  });
  os = T((YI, Gv) => {
    var fs = (Oi(), ur(pr)), { ArrayIsArray: zx, Promise: Hx, SymbolAsyncIterator: Wx } = Tt(), as = Ui(), { once: Kx } = Gr(), jx = yn(), Wv = Qr(), { aggregateTwoErrors: Zx, codes: { ERR_INVALID_ARG_TYPE: Vv, ERR_INVALID_RETURN_VALUE: su, ERR_MISSING_ARGS: Vx, ERR_STREAM_DESTROYED: $x, ERR_STREAM_PREMATURE_CLOSE: Gx }, AbortError: Yx } = Jt(), { validateFunction: Xx, validateAbortSignal: Jx } = pa(), { isIterable: pf, isReadable: hu, isReadableNodeStream: du, isNodeStream: Kv } = Fi(), Qx = globalThis.AbortController || No().AbortController, uu, lu;
    function jv(t, e, r) {
      let o = false;
      t.on("close", () => {
        o = true;
      });
      let f = as(t, { readable: e, writable: r }, (p) => {
        o = !p;
      });
      return { destroy: (p) => {
        o || (o = true, jx.destroyer(t, p || new $x("pipe")));
      }, cleanup: f };
    }
    function e7(t) {
      return Xx(t[t.length - 1], "streams[stream.length - 1]"), t.pop();
    }
    function t7(t) {
      if (pf(t))
        return t;
      if (du(t))
        return r7(t);
      throw new Vv("val", ["Readable", "Iterable", "AsyncIterable"], t);
    }
    async function* r7(t) {
      lu || (lu = ba()), yield* lu.prototype[Wx].call(t);
    }
    async function Zv(t, e, r, { end: o }) {
      let f, p = null, m = (x) => {
        if (x && (f = x), p) {
          let S = p;
          p = null, S();
        }
      }, y = () => new Hx((x, S) => {
        f ? S(f) : p = () => {
          f ? S(f) : x();
        };
      });
      e.on("drain", m);
      let M = as(e, { readable: false }, m);
      try {
        e.writableNeedDrain && await y();
        for await (let x of t)
          e.write(x) || await y();
        o && e.end(), await y(), r();
      } catch (x) {
        r(f !== x ? Zx(f, x) : x);
      } finally {
        M(), e.off("drain", m);
      }
    }
    function i7(...t) {
      return $v(t, Kx(e7(t)));
    }
    function $v(t, e, r) {
      if (t.length === 1 && zx(t[0]) && (t = t[0]), t.length < 2)
        throw new Vx("streams");
      let o = new Qx, f = o.signal, p = r?.signal, m = [];
      Jx(p, "options.signal");
      function y() {
        q(new Yx);
      }
      p?.addEventListener("abort", y);
      let M, x, S = [], E = 0;
      function B(N) {
        q(N, --E === 0);
      }
      function q(N, we) {
        if (N && (!M || M.code === "ERR_STREAM_PREMATURE_CLOSE") && (M = N), !(!M && !we)) {
          for (;S.length; )
            S.shift()(M);
          p?.removeEventListener("abort", y), o.abort(), we && (M || m.forEach((ye) => ye()), fs.nextTick(e, M, x));
        }
      }
      let L;
      for (let N = 0;N < t.length; N++) {
        let we = t[N], ye = N < t.length - 1, xe = N > 0, Re = ye || r?.end !== false, Ee = N === t.length - 1;
        if (Kv(we)) {
          let Ae = function(P) {
            P && P.name !== "AbortError" && P.code !== "ERR_STREAM_PREMATURE_CLOSE" && B(P);
          };
          var _e = Ae;
          if (Re) {
            let { destroy: P, cleanup: Se } = jv(we, ye, xe);
            S.push(P), hu(we) && Ee && m.push(Se);
          }
          we.on("error", Ae), hu(we) && Ee && m.push(() => {
            we.removeListener("error", Ae);
          });
        }
        if (N === 0)
          if (typeof we == "function") {
            if (L = we({ signal: f }), !pf(L))
              throw new su("Iterable, AsyncIterable or Stream", "source", L);
          } else
            pf(we) || du(we) ? L = we : L = Wv.from(we);
        else if (typeof we == "function")
          if (L = t7(L), L = we(L, { signal: f }), ye) {
            if (!pf(L, true))
              throw new su("AsyncIterable", `transform[${N - 1}]`, L);
          } else {
            var ge;
            uu || (uu = ou());
            let Ae = new uu({ objectMode: true }), P = (ge = L) === null || ge === undefined ? undefined : ge.then;
            if (typeof P == "function")
              E++, P.call(L, (i) => {
                x = i, i != null && Ae.write(i), Re && Ae.end(), fs.nextTick(B);
              }, (i) => {
                Ae.destroy(i), fs.nextTick(B, i);
              });
            else if (pf(L, true))
              E++, Zv(L, Ae, B, { end: Re });
            else
              throw new su("AsyncIterable or Promise", "destination", L);
            L = Ae;
            let { destroy: Se, cleanup: v } = jv(L, false, true);
            S.push(Se), Ee && m.push(v);
          }
        else if (Kv(we)) {
          if (du(L)) {
            E += 2;
            let Ae = n7(L, we, B, { end: Re });
            hu(we) && Ee && m.push(Ae);
          } else if (pf(L))
            E++, Zv(L, we, B, { end: Re });
          else
            throw new Vv("val", ["Readable", "Iterable", "AsyncIterable"], L);
          L = we;
        } else
          L = Wv.from(we);
      }
      return (f != null && f.aborted || p != null && p.aborted) && fs.nextTick(y), L;
    }
    function n7(t, e, r, { end: o }) {
      let f = false;
      return e.on("close", () => {
        f || r(new Gx);
      }), t.pipe(e, { end: o }), o ? t.once("end", () => {
        f = true, e.end();
      }) : r(), as(t, { readable: true, writable: false }, (p) => {
        let m = t._readableState;
        p && p.code === "ERR_STREAM_PREMATURE_CLOSE" && m && m.ended && !m.errored && !m.errorEmitted ? t.once("end", r).once("error", r) : r(p);
      }), as(e, { readable: false, writable: true }, r);
    }
    Gv.exports = { pipelineImpl: $v, pipeline: i7 };
  });
  eb = T((XI, Qv) => {
    var { pipeline: f7 } = os(), ss = Qr(), { destroyer: a7 } = yn(), { isNodeStream: o7, isReadable: Yv, isWritable: Xv } = Fi(), { AbortError: s7, codes: { ERR_INVALID_ARG_VALUE: Jv, ERR_MISSING_ARGS: h7 } } = Jt();
    Qv.exports = function(...e) {
      if (e.length === 0)
        throw new h7("streams");
      if (e.length === 1)
        return ss.from(e[0]);
      let r = [...e];
      if (typeof e[0] == "function" && (e[0] = ss.from(e[0])), typeof e[e.length - 1] == "function") {
        let q = e.length - 1;
        e[q] = ss.from(e[q]);
      }
      for (let q = 0;q < e.length; ++q)
        if (!!o7(e[q])) {
          if (q < e.length - 1 && !Yv(e[q]))
            throw new Jv(`streams[${q}]`, r[q], "must be readable");
          if (q > 0 && !Xv(e[q]))
            throw new Jv(`streams[${q}]`, r[q], "must be writable");
        }
      let o, f, p, m, y;
      function M(q) {
        let L = m;
        m = null, L ? L(q) : q ? y.destroy(q) : !B && !E && y.destroy();
      }
      let x = e[0], S = f7(e, M), E = !!Xv(x), B = !!Yv(S);
      return y = new ss({ writableObjectMode: !!(x != null && x.writableObjectMode), readableObjectMode: !!(S != null && S.writableObjectMode), writable: E, readable: B }), E && (y._write = function(q, L, ge) {
        x.write(q, L) ? ge() : o = ge;
      }, y._final = function(q) {
        x.end(), f = q;
      }, x.on("drain", function() {
        if (o) {
          let q = o;
          o = null, q();
        }
      }), S.on("finish", function() {
        if (f) {
          let q = f;
          f = null, q();
        }
      })), B && (S.on("readable", function() {
        if (p) {
          let q = p;
          p = null, q();
        }
      }), S.on("end", function() {
        y.push(null);
      }), y._read = function() {
        for (;; ) {
          let q = S.read();
          if (q === null) {
            p = y._read;
            return;
          }
          if (!y.push(q))
            return;
        }
      }), y._destroy = function(q, L) {
        !q && m !== null && (q = new s7), p = null, o = null, f = null, m === null ? L(q) : (m = L, a7(S, q));
      }, y;
    };
  });
  cu = T((JI, tb) => {
    var { ArrayPrototypePop: u7, Promise: l7 } = Tt(), { isIterable: d7, isNodeStream: c7 } = Fi(), { pipelineImpl: p7 } = os(), { finished: v7 } = Ui();
    function b7(...t) {
      return new l7((e, r) => {
        let o, f, p = t[t.length - 1];
        if (p && typeof p == "object" && !c7(p) && !d7(p)) {
          let m = u7(t);
          o = m.signal, f = m.end;
        }
        p7(t, (m, y) => {
          m ? r(m) : e(y);
        }, { signal: o, end: f });
      });
    }
    tb.exports = { finished: v7, pipeline: b7 };
  });
  lb = T((QI, ub) => {
    var { Buffer: m7 } = Ut(), { ObjectDefineProperty: gi, ObjectKeys: nb, ReflectApply: fb } = Tt(), { promisify: { custom: ab } } = Gr(), { streamReturningOperators: rb, promiseReturningOperators: ib } = k1(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: ob } } = Jt(), g7 = eb(), { pipeline: sb } = os(), { destroyer: y7 } = yn(), hb = Ui(), pu = cu(), vu = Fi(), ct = ub.exports = Vo().Stream;
    ct.isDisturbed = vu.isDisturbed;
    ct.isErrored = vu.isErrored;
    ct.isReadable = vu.isReadable;
    ct.Readable = ba();
    for (let t of nb(rb)) {
      let r = function(...o) {
        if (new.target)
          throw ob();
        return ct.Readable.from(fb(e, this, o));
      };
      M7 = r;
      let e = rb[t];
      gi(r, "name", { __proto__: null, value: e.name }), gi(r, "length", { __proto__: null, value: e.length }), gi(ct.Readable.prototype, t, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var M7;
    for (let t of nb(ib)) {
      let r = function(...f) {
        if (new.target)
          throw ob();
        return fb(e, this, f);
      };
      M7 = r;
      let e = ib[t];
      gi(r, "name", { __proto__: null, value: e.name }), gi(r, "length", { __proto__: null, value: e.length }), gi(ct.Readable.prototype, t, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var M7;
    ct.Writable = Jh();
    ct.Duplex = Qr();
    ct.Transform = fu();
    ct.PassThrough = ou();
    ct.pipeline = sb;
    var { addAbortSignal: w7 } = Go();
    ct.addAbortSignal = w7;
    ct.finished = hb;
    ct.destroy = y7;
    ct.compose = g7;
    gi(ct, "promises", { __proto__: null, configurable: true, enumerable: true, get() {
      return pu;
    } });
    gi(sb, ab, { __proto__: null, enumerable: true, get() {
      return pu.pipeline;
    } });
    gi(hb, ab, { __proto__: null, enumerable: true, get() {
      return pu.finished;
    } });
    ct.Stream = ct;
    ct._isUint8Array = function(e) {
      return e instanceof Uint8Array;
    };
    ct._uint8ArrayToBuffer = function(e) {
      return m7.from(e.buffer, e.byteOffset, e.byteLength);
    };
  });
  bu = T((eT, pt) => {
    var Lt = lb(), _7 = cu(), x7 = Lt.Readable.destroy;
    pt.exports = Lt.Readable;
    pt.exports._uint8ArrayToBuffer = Lt._uint8ArrayToBuffer;
    pt.exports._isUint8Array = Lt._isUint8Array;
    pt.exports.isDisturbed = Lt.isDisturbed;
    pt.exports.isErrored = Lt.isErrored;
    pt.exports.isReadable = Lt.isReadable;
    pt.exports.Readable = Lt.Readable;
    pt.exports.Writable = Lt.Writable;
    pt.exports.Duplex = Lt.Duplex;
    pt.exports.Transform = Lt.Transform;
    pt.exports.PassThrough = Lt.PassThrough;
    pt.exports.addAbortSignal = Lt.addAbortSignal;
    pt.exports.finished = Lt.finished;
    pt.exports.destroy = Lt.destroy;
    pt.exports.destroy = x7;
    pt.exports.pipeline = Lt.pipeline;
    pt.exports.compose = Lt.compose;
    Object.defineProperty(Lt, "promises", { configurable: true, enumerable: true, get() {
      return _7;
    } });
    pt.exports.Stream = Lt.Stream;
    pt.exports.default = pt.exports;
  });
  vf = {};
  Ja(vf, { default: () => S7 });
  db = R0(() => {
    ot(vf, rn(bu()));
    S7 = rn(bu());
  });
  yi = T((rT, vb) => {
    var cb = Te().Buffer, pb = (db(), ur(vf)).Transform, E7 = co().StringDecoder, A7 = Ie();
    function Lr(t) {
      pb.call(this), this.hashMode = typeof t == "string", this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
    }
    A7(Lr, pb);
    Lr.prototype.update = function(t, e, r) {
      typeof t == "string" && (t = cb.from(t, e));
      var o = this._update(t);
      return this.hashMode ? this : (r && (o = this._toString(o, r)), o);
    };
    Lr.prototype.setAutoPadding = function() {
    };
    Lr.prototype.getAuthTag = function() {
      throw new Error("trying to get auth tag in unsupported state");
    };
    Lr.prototype.setAuthTag = function() {
      throw new Error("trying to set auth tag in unsupported state");
    };
    Lr.prototype.setAAD = function() {
      throw new Error("trying to set aad in unsupported state");
    };
    Lr.prototype._transform = function(t, e, r) {
      var o;
      try {
        this.hashMode ? this._update(t) : this.push(this._update(t));
      } catch (f) {
        o = f;
      } finally {
        r(o);
      }
    };
    Lr.prototype._flush = function(t) {
      var e;
      try {
        this.push(this.__final());
      } catch (r) {
        e = r;
      }
      t(e);
    };
    Lr.prototype._finalOrDigest = function(t) {
      var e = this.__final() || cb.alloc(0);
      return t && (e = this._toString(e, t, true)), e;
    };
    Lr.prototype._toString = function(t, e, r) {
      if (this._decoder || (this._decoder = new E7(e), this._encoding = e), this._encoding !== e)
        throw new Error("can't switch encodings");
      var o = this._decoder.write(t);
      return r && (o += this._decoder.end()), o;
    };
    vb.exports = Lr;
  });
  bf = T((iT, mb) => {
    var R7 = Ie(), B7 = Ao(), q7 = Bo(), I7 = ko(), bb = yi();
    function hs(t) {
      bb.call(this, "digest"), this._hash = t;
    }
    R7(hs, bb);
    hs.prototype._update = function(t) {
      this._hash.update(t);
    };
    hs.prototype._final = function() {
      return this._hash.digest();
    };
    mb.exports = function(e) {
      return e = e.toLowerCase(), e === "md5" ? new B7 : e === "rmd160" || e === "ripemd160" ? new q7 : new hs(I7(e));
    };
  });
  wb = T((nT, yb) => {
    var T7 = Ie(), xn = Te().Buffer, gb = yi(), k7 = xn.alloc(128), mf = 64;
    function us(t, e) {
      gb.call(this, "digest"), typeof e == "string" && (e = xn.from(e)), this._alg = t, this._key = e, e.length > mf ? e = t(e) : e.length < mf && (e = xn.concat([e, k7], mf));
      for (var r = this._ipad = xn.allocUnsafe(mf), o = this._opad = xn.allocUnsafe(mf), f = 0;f < mf; f++)
        r[f] = e[f] ^ 54, o[f] = e[f] ^ 92;
      this._hash = [r];
    }
    T7(us, gb);
    us.prototype._update = function(t) {
      this._hash.push(t);
    };
    us.prototype._final = function() {
      var t = this._alg(xn.concat(this._hash));
      return this._alg(xn.concat([this._opad, t]));
    };
    yb.exports = us;
  });
  mu = T((fT, Mb) => {
    var L7 = Ao();
    Mb.exports = function(t) {
      return new L7().update(t).digest();
    };
  });
  wu = T((aT, xb) => {
    var N7 = Ie(), D7 = wb(), _b = yi(), Ma = Te().Buffer, P7 = mu(), gu = Bo(), yu = ko(), C7 = Ma.alloc(128);
    function _a(t, e) {
      _b.call(this, "digest"), typeof e == "string" && (e = Ma.from(e));
      var r = t === "sha512" || t === "sha384" ? 128 : 64;
      if (this._alg = t, this._key = e, e.length > r) {
        var o = t === "rmd160" ? new gu : yu(t);
        e = o.update(e).digest();
      } else
        e.length < r && (e = Ma.concat([e, C7], r));
      for (var f = this._ipad = Ma.allocUnsafe(r), p = this._opad = Ma.allocUnsafe(r), m = 0;m < r; m++)
        f[m] = e[m] ^ 54, p[m] = e[m] ^ 92;
      this._hash = t === "rmd160" ? new gu : yu(t), this._hash.update(f);
    }
    N7(_a, _b);
    _a.prototype._update = function(t) {
      this._hash.update(t);
    };
    _a.prototype._final = function() {
      var t = this._hash.digest(), e = this._alg === "rmd160" ? new gu : yu(this._alg);
      return e.update(this._opad).update(t).digest();
    };
    xb.exports = function(e, r) {
      return e = e.toLowerCase(), e === "rmd160" || e === "ripemd160" ? new _a("rmd160", r) : e === "md5" ? new D7(P7, r) : new _a(e, r);
    };
  });
  Mu = T((oT, O7) => {
    O7.exports = { sha224WithRSAEncryption: { sign: "rsa", hash: "sha224", id: "302d300d06096086480165030402040500041c" }, "RSA-SHA224": { sign: "ecdsa/rsa", hash: "sha224", id: "302d300d06096086480165030402040500041c" }, sha256WithRSAEncryption: { sign: "rsa", hash: "sha256", id: "3031300d060960864801650304020105000420" }, "RSA-SHA256": { sign: "ecdsa/rsa", hash: "sha256", id: "3031300d060960864801650304020105000420" }, sha384WithRSAEncryption: { sign: "rsa", hash: "sha384", id: "3041300d060960864801650304020205000430" }, "RSA-SHA384": { sign: "ecdsa/rsa", hash: "sha384", id: "3041300d060960864801650304020205000430" }, sha512WithRSAEncryption: { sign: "rsa", hash: "sha512", id: "3051300d060960864801650304020305000440" }, "RSA-SHA512": { sign: "ecdsa/rsa", hash: "sha512", id: "3051300d060960864801650304020305000440" }, "RSA-SHA1": { sign: "rsa", hash: "sha1", id: "3021300906052b0e03021a05000414" }, "ecdsa-with-SHA1": { sign: "ecdsa", hash: "sha1", id: "" }, sha256: { sign: "ecdsa", hash: "sha256", id: "" }, sha224: { sign: "ecdsa", hash: "sha224", id: "" }, sha384: { sign: "ecdsa", hash: "sha384", id: "" }, sha512: { sign: "ecdsa", hash: "sha512", id: "" }, "DSA-SHA": { sign: "dsa", hash: "sha1", id: "" }, "DSA-SHA1": { sign: "dsa", hash: "sha1", id: "" }, DSA: { sign: "dsa", hash: "sha1", id: "" }, "DSA-WITH-SHA224": { sign: "dsa", hash: "sha224", id: "" }, "DSA-SHA224": { sign: "dsa", hash: "sha224", id: "" }, "DSA-WITH-SHA256": { sign: "dsa", hash: "sha256", id: "" }, "DSA-SHA256": { sign: "dsa", hash: "sha256", id: "" }, "DSA-WITH-SHA384": { sign: "dsa", hash: "sha384", id: "" }, "DSA-SHA384": { sign: "dsa", hash: "sha384", id: "" }, "DSA-WITH-SHA512": { sign: "dsa", hash: "sha512", id: "" }, "DSA-SHA512": { sign: "dsa", hash: "sha512", id: "" }, "DSA-RIPEMD160": { sign: "dsa", hash: "rmd160", id: "" }, ripemd160WithRSA: { sign: "rsa", hash: "rmd160", id: "3021300906052b2403020105000414" }, "RSA-RIPEMD160": { sign: "rsa", hash: "rmd160", id: "3021300906052b2403020105000414" }, md5WithRSAEncryption: { sign: "rsa", hash: "md5", id: "3020300c06082a864886f70d020505000410" }, "RSA-MD5": { sign: "rsa", hash: "md5", id: "3020300c06082a864886f70d020505000410" } };
  });
  Eb = T((sT, Sb) => {
    Sb.exports = Mu();
  });
  _u = T((hT, Ab) => {
    var F7 = Math.pow(2, 30) - 1;
    Ab.exports = function(t, e) {
      if (typeof t != "number")
        throw new TypeError("Iterations not a number");
      if (t < 0)
        throw new TypeError("Bad iterations");
      if (typeof e != "number")
        throw new TypeError("Key length not a number");
      if (e < 0 || e > F7 || e !== e)
        throw new TypeError("Bad key length");
    };
  });
  xu = T((uT, Bb) => {
    var ls;
    global.process && global.process.browser ? ls = "utf-8" : global.process && global.process.version ? (Rb = parseInt(process.version.split(".")[0].slice(1), 10), ls = Rb >= 6 ? "utf-8" : "binary") : ls = "utf-8";
    var Rb;
    Bb.exports = ls;
  });
  Eu = T((lT, qb) => {
    var Su = Te().Buffer;
    qb.exports = function(t, e, r) {
      if (Su.isBuffer(t))
        return t;
      if (typeof t == "string")
        return Su.from(t, e);
      if (ArrayBuffer.isView(t))
        return Su.from(t.buffer);
      throw new TypeError(r + " must be a string, a Buffer, a typed array or a DataView");
    };
  });
  Au = T((dT, Lb) => {
    var U7 = mu(), z7 = Bo(), H7 = ko(), Sn = Te().Buffer, W7 = _u(), Ib = xu(), Tb = Eu(), K7 = Sn.alloc(128), ds = { md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, rmd160: 20, ripemd160: 20 };
    function kb(t, e, r) {
      var o = j7(t), f = t === "sha512" || t === "sha384" ? 128 : 64;
      e.length > f ? e = o(e) : e.length < f && (e = Sn.concat([e, K7], f));
      for (var p = Sn.allocUnsafe(f + ds[t]), m = Sn.allocUnsafe(f + ds[t]), y = 0;y < f; y++)
        p[y] = e[y] ^ 54, m[y] = e[y] ^ 92;
      var M = Sn.allocUnsafe(f + r + 4);
      p.copy(M, 0, 0, f), this.ipad1 = M, this.ipad2 = p, this.opad = m, this.alg = t, this.blocksize = f, this.hash = o, this.size = ds[t];
    }
    kb.prototype.run = function(t, e) {
      t.copy(e, this.blocksize);
      var r = this.hash(e);
      return r.copy(this.opad, this.blocksize), this.hash(this.opad);
    };
    function j7(t) {
      function e(o) {
        return H7(t).update(o).digest();
      }
      function r(o) {
        return new z7().update(o).digest();
      }
      return t === "rmd160" || t === "ripemd160" ? r : t === "md5" ? U7 : e;
    }
    function Z7(t, e, r, o, f) {
      W7(r, o), t = Tb(t, Ib, "Password"), e = Tb(e, Ib, "Salt"), f = f || "sha1";
      var p = new kb(f, t, e.length), m = Sn.allocUnsafe(o), y = Sn.allocUnsafe(e.length + 4);
      e.copy(y, 0, 0, e.length);
      for (var M = 0, x = ds[f], S = Math.ceil(o / x), E = 1;E <= S; E++) {
        y.writeUInt32BE(E, e.length);
        for (var B = p.run(y, p.ipad1), q = B, L = 1;L < r; L++) {
          q = p.run(q, p.ipad2);
          for (var ge = 0;ge < x; ge++)
            B[ge] ^= q[ge];
        }
        B.copy(m, M), M += x;
      }
      return m;
    }
    Lb.exports = Z7;
  });
  Ub = T((cT, Fb) => {
    var Cb = Te().Buffer, V7 = _u(), Nb = xu(), Db = Au(), Pb = Eu(), cs, xa = global.crypto && global.crypto.subtle, $7 = { sha: "SHA-1", "sha-1": "SHA-1", sha1: "SHA-1", sha256: "SHA-256", "sha-256": "SHA-256", sha384: "SHA-384", "sha-384": "SHA-384", "sha-512": "SHA-512", sha512: "SHA-512" }, Ru = [];
    function G7(t) {
      if (global.process && !global.process.browser || !xa || !xa.importKey || !xa.deriveBits)
        return Promise.resolve(false);
      if (Ru[t] !== undefined)
        return Ru[t];
      cs = cs || Cb.alloc(8);
      var e = Ob(cs, cs, 10, 128, t).then(function() {
        return true;
      }).catch(function() {
        return false;
      });
      return Ru[t] = e, e;
    }
    var En;
    function Bu() {
      return En || (global.process && global.process.nextTick ? En = global.process.nextTick : global.queueMicrotask ? En = global.queueMicrotask : global.setImmediate ? En = global.setImmediate : En = global.setTimeout, En);
    }
    function Ob(t, e, r, o, f) {
      return xa.importKey("raw", t, { name: "PBKDF2" }, false, ["deriveBits"]).then(function(p) {
        return xa.deriveBits({ name: "PBKDF2", salt: e, iterations: r, hash: { name: f } }, p, o << 3);
      }).then(function(p) {
        return Cb.from(p);
      });
    }
    function Y7(t, e) {
      t.then(function(r) {
        Bu()(function() {
          e(null, r);
        });
      }, function(r) {
        Bu()(function() {
          e(r);
        });
      });
    }
    Fb.exports = function(t, e, r, o, f, p) {
      typeof f == "function" && (p = f, f = undefined), f = f || "sha1";
      var m = $7[f.toLowerCase()];
      if (!m || typeof global.Promise != "function") {
        Bu()(function() {
          var y;
          try {
            y = Db(t, e, r, o, f);
          } catch (M) {
            return p(M);
          }
          p(null, y);
        });
        return;
      }
      if (V7(r, o), t = Pb(t, Nb, "Password"), e = Pb(e, Nb, "Salt"), typeof p != "function")
        throw new Error("No callback provided to pbkdf2");
      Y7(G7(m).then(function(y) {
        return y ? Ob(t, e, r, o, m) : Db(t, e, r, o, f);
      }), p);
    };
  });
  Iu = T((qu) => {
    qu.pbkdf2 = Ub();
    qu.pbkdf2Sync = Au();
  });
  Tu = T((br) => {
    br.readUInt32BE = function(e, r) {
      var o = e[0 + r] << 24 | e[1 + r] << 16 | e[2 + r] << 8 | e[3 + r];
      return o >>> 0;
    };
    br.writeUInt32BE = function(e, r, o) {
      e[0 + o] = r >>> 24, e[1 + o] = r >>> 16 & 255, e[2 + o] = r >>> 8 & 255, e[3 + o] = r & 255;
    };
    br.ip = function(e, r, o, f) {
      for (var p = 0, m = 0, y = 6;y >= 0; y -= 2) {
        for (var M = 0;M <= 24; M += 8)
          p <<= 1, p |= r >>> M + y & 1;
        for (var M = 0;M <= 24; M += 8)
          p <<= 1, p |= e >>> M + y & 1;
      }
      for (var y = 6;y >= 0; y -= 2) {
        for (var M = 1;M <= 25; M += 8)
          m <<= 1, m |= r >>> M + y & 1;
        for (var M = 1;M <= 25; M += 8)
          m <<= 1, m |= e >>> M + y & 1;
      }
      o[f + 0] = p >>> 0, o[f + 1] = m >>> 0;
    };
    br.rip = function(e, r, o, f) {
      for (var p = 0, m = 0, y = 0;y < 4; y++)
        for (var M = 24;M >= 0; M -= 8)
          p <<= 1, p |= r >>> M + y & 1, p <<= 1, p |= e >>> M + y & 1;
      for (var y = 4;y < 8; y++)
        for (var M = 24;M >= 0; M -= 8)
          m <<= 1, m |= r >>> M + y & 1, m <<= 1, m |= e >>> M + y & 1;
      o[f + 0] = p >>> 0, o[f + 1] = m >>> 0;
    };
    br.pc1 = function(e, r, o, f) {
      for (var p = 0, m = 0, y = 7;y >= 5; y--) {
        for (var M = 0;M <= 24; M += 8)
          p <<= 1, p |= r >> M + y & 1;
        for (var M = 0;M <= 24; M += 8)
          p <<= 1, p |= e >> M + y & 1;
      }
      for (var M = 0;M <= 24; M += 8)
        p <<= 1, p |= r >> M + y & 1;
      for (var y = 1;y <= 3; y++) {
        for (var M = 0;M <= 24; M += 8)
          m <<= 1, m |= r >> M + y & 1;
        for (var M = 0;M <= 24; M += 8)
          m <<= 1, m |= e >> M + y & 1;
      }
      for (var M = 0;M <= 24; M += 8)
        m <<= 1, m |= e >> M + y & 1;
      o[f + 0] = p >>> 0, o[f + 1] = m >>> 0;
    };
    br.r28shl = function(e, r) {
      return e << r & 268435455 | e >>> 28 - r;
    };
    var ps = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    br.pc2 = function(e, r, o, f) {
      for (var p = 0, m = 0, y = ps.length >>> 1, M = 0;M < y; M++)
        p <<= 1, p |= e >>> ps[M] & 1;
      for (var M = y;M < ps.length; M++)
        m <<= 1, m |= r >>> ps[M] & 1;
      o[f + 0] = p >>> 0, o[f + 1] = m >>> 0;
    };
    br.expand = function(e, r, o) {
      var f = 0, p = 0;
      f = (e & 1) << 5 | e >>> 27;
      for (var m = 23;m >= 15; m -= 4)
        f <<= 6, f |= e >>> m & 63;
      for (var m = 11;m >= 3; m -= 4)
        p |= e >>> m & 63, p <<= 6;
      p |= (e & 31) << 1 | e >>> 31, r[o + 0] = f >>> 0, r[o + 1] = p >>> 0;
    };
    var zb = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    br.substitute = function(e, r) {
      for (var o = 0, f = 0;f < 4; f++) {
        var p = e >>> 18 - f * 6 & 63, m = zb[f * 64 + p];
        o <<= 4, o |= m;
      }
      for (var f = 0;f < 4; f++) {
        var p = r >>> 18 - f * 6 & 63, m = zb[4 * 64 + f * 64 + p];
        o <<= 4, o |= m;
      }
      return o >>> 0;
    };
    var Hb = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    br.permute = function(e) {
      for (var r = 0, o = 0;o < Hb.length; o++)
        r <<= 1, r |= e >>> Hb[o] & 1;
      return r >>> 0;
    };
    br.padSplit = function(e, r, o) {
      for (var f = e.toString(2);f.length < r; )
        f = "0" + f;
      for (var p = [], m = 0;m < r; m += o)
        p.push(f.slice(m, m + o));
      return p.join(" ");
    };
  });
  ar = T((bT, Kb) => {
    Kb.exports = Wb;
    function Wb(t, e) {
      if (!t)
        throw new Error(e || "Assertion failed");
    }
    Wb.equal = function(e, r, o) {
      if (e != r)
        throw new Error(o || "Assertion failed: " + e + " != " + r);
    };
  });
  vs = T((mT, jb) => {
    var X7 = ar();
    function mr(t) {
      this.options = t, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0;
    }
    jb.exports = mr;
    mr.prototype._init = function() {
    };
    mr.prototype.update = function(e) {
      return e.length === 0 ? [] : this.type === "decrypt" ? this._updateDecrypt(e) : this._updateEncrypt(e);
    };
    mr.prototype._buffer = function(e, r) {
      for (var o = Math.min(this.buffer.length - this.bufferOff, e.length - r), f = 0;f < o; f++)
        this.buffer[this.bufferOff + f] = e[r + f];
      return this.bufferOff += o, o;
    };
    mr.prototype._flushBuffer = function(e, r) {
      return this._update(this.buffer, 0, e, r), this.bufferOff = 0, this.blockSize;
    };
    mr.prototype._updateEncrypt = function(e) {
      var r = 0, o = 0, f = (this.bufferOff + e.length) / this.blockSize | 0, p = new Array(f * this.blockSize);
      this.bufferOff !== 0 && (r += this._buffer(e, r), this.bufferOff === this.buffer.length && (o += this._flushBuffer(p, o)));
      for (var m = e.length - (e.length - r) % this.blockSize;r < m; r += this.blockSize)
        this._update(e, r, p, o), o += this.blockSize;
      for (;r < e.length; r++, this.bufferOff++)
        this.buffer[this.bufferOff] = e[r];
      return p;
    };
    mr.prototype._updateDecrypt = function(e) {
      for (var r = 0, o = 0, f = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, p = new Array(f * this.blockSize);f > 0; f--)
        r += this._buffer(e, r), o += this._flushBuffer(p, o);
      return r += this._buffer(e, r), p;
    };
    mr.prototype.final = function(e) {
      var r;
      e && (r = this.update(e));
      var o;
      return this.type === "encrypt" ? o = this._finalEncrypt() : o = this._finalDecrypt(), r ? r.concat(o) : o;
    };
    mr.prototype._pad = function(e, r) {
      if (r === 0)
        return false;
      for (;r < e.length; )
        e[r++] = 0;
      return true;
    };
    mr.prototype._finalEncrypt = function() {
      if (!this._pad(this.buffer, this.bufferOff))
        return [];
      var e = new Array(this.blockSize);
      return this._update(this.buffer, 0, e, 0), e;
    };
    mr.prototype._unpad = function(e) {
      return e;
    };
    mr.prototype._finalDecrypt = function() {
      X7.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
      var e = new Array(this.blockSize);
      return this._flushBuffer(e, 0), this._unpad(e);
    };
  });
  ku = T((gT, $b) => {
    var Zb = ar(), J7 = Ie(), Nt = Tu(), Vb = vs();
    function Q7() {
      this.tmp = new Array(2), this.keys = null;
    }
    function ei(t) {
      Vb.call(this, t);
      var e = new Q7;
      this._desState = e, this.deriveKeys(e, t.key);
    }
    J7(ei, Vb);
    $b.exports = ei;
    ei.create = function(e) {
      return new ei(e);
    };
    var e9 = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    ei.prototype.deriveKeys = function(e, r) {
      e.keys = new Array(16 * 2), Zb.equal(r.length, this.blockSize, "Invalid key length");
      var o = Nt.readUInt32BE(r, 0), f = Nt.readUInt32BE(r, 4);
      Nt.pc1(o, f, e.tmp, 0), o = e.tmp[0], f = e.tmp[1];
      for (var p = 0;p < e.keys.length; p += 2) {
        var m = e9[p >>> 1];
        o = Nt.r28shl(o, m), f = Nt.r28shl(f, m), Nt.pc2(o, f, e.keys, p);
      }
    };
    ei.prototype._update = function(e, r, o, f) {
      var p = this._desState, m = Nt.readUInt32BE(e, r), y = Nt.readUInt32BE(e, r + 4);
      Nt.ip(m, y, p.tmp, 0), m = p.tmp[0], y = p.tmp[1], this.type === "encrypt" ? this._encrypt(p, m, y, p.tmp, 0) : this._decrypt(p, m, y, p.tmp, 0), m = p.tmp[0], y = p.tmp[1], Nt.writeUInt32BE(o, m, f), Nt.writeUInt32BE(o, y, f + 4);
    };
    ei.prototype._pad = function(e, r) {
      for (var o = e.length - r, f = r;f < e.length; f++)
        e[f] = o;
      return true;
    };
    ei.prototype._unpad = function(e) {
      for (var r = e[e.length - 1], o = e.length - r;o < e.length; o++)
        Zb.equal(e[o], r);
      return e.slice(0, e.length - r);
    };
    ei.prototype._encrypt = function(e, r, o, f, p) {
      for (var m = r, y = o, M = 0;M < e.keys.length; M += 2) {
        var x = e.keys[M], S = e.keys[M + 1];
        Nt.expand(y, e.tmp, 0), x ^= e.tmp[0], S ^= e.tmp[1];
        var E = Nt.substitute(x, S), B = Nt.permute(E), q = y;
        y = (m ^ B) >>> 0, m = q;
      }
      Nt.rip(y, m, f, p);
    };
    ei.prototype._decrypt = function(e, r, o, f, p) {
      for (var m = o, y = r, M = e.keys.length - 2;M >= 0; M -= 2) {
        var x = e.keys[M], S = e.keys[M + 1];
        Nt.expand(m, e.tmp, 0), x ^= e.tmp[0], S ^= e.tmp[1];
        var E = Nt.substitute(x, S), B = Nt.permute(E), q = m;
        m = (y ^ B) >>> 0, y = q;
      }
      Nt.rip(m, y, f, p);
    };
  });
  Yb = T((Gb) => {
    var t9 = ar(), r9 = Ie(), bs = {};
    function i9(t) {
      t9.equal(t.length, 8, "Invalid IV length"), this.iv = new Array(8);
      for (var e = 0;e < this.iv.length; e++)
        this.iv[e] = t[e];
    }
    function n9(t) {
      function e(p) {
        t.call(this, p), this._cbcInit();
      }
      r9(e, t);
      for (var r = Object.keys(bs), o = 0;o < r.length; o++) {
        var f = r[o];
        e.prototype[f] = bs[f];
      }
      return e.create = function(m) {
        return new e(m);
      }, e;
    }
    Gb.instantiate = n9;
    bs._cbcInit = function() {
      var e = new i9(this.options.iv);
      this._cbcState = e;
    };
    bs._update = function(e, r, o, f) {
      var p = this._cbcState, m = this.constructor.super_.prototype, y = p.iv;
      if (this.type === "encrypt") {
        for (var M = 0;M < this.blockSize; M++)
          y[M] ^= e[r + M];
        m._update.call(this, y, 0, o, f);
        for (var M = 0;M < this.blockSize; M++)
          y[M] = o[f + M];
      } else {
        m._update.call(this, e, r, o, f);
        for (var M = 0;M < this.blockSize; M++)
          o[f + M] ^= y[M];
        for (var M = 0;M < this.blockSize; M++)
          y[M] = e[r + M];
      }
    };
  });
  Qb = T((wT, Jb) => {
    var f9 = ar(), a9 = Ie(), Xb = vs(), Wi = ku();
    function o9(t, e) {
      f9.equal(e.length, 24, "Invalid key length");
      var r = e.slice(0, 8), o = e.slice(8, 16), f = e.slice(16, 24);
      t === "encrypt" ? this.ciphers = [Wi.create({ type: "encrypt", key: r }), Wi.create({ type: "decrypt", key: o }), Wi.create({ type: "encrypt", key: f })] : this.ciphers = [Wi.create({ type: "decrypt", key: f }), Wi.create({ type: "encrypt", key: o }), Wi.create({ type: "decrypt", key: r })];
    }
    function An(t) {
      Xb.call(this, t);
      var e = new o9(this.type, this.options.key);
      this._edeState = e;
    }
    a9(An, Xb);
    Jb.exports = An;
    An.create = function(e) {
      return new An(e);
    };
    An.prototype._update = function(e, r, o, f) {
      var p = this._edeState;
      p.ciphers[0]._update(e, r, o, f), p.ciphers[1]._update(o, f, o, f), p.ciphers[2]._update(o, f, o, f);
    };
    An.prototype._pad = Wi.prototype._pad;
    An.prototype._unpad = Wi.prototype._unpad;
  });
  em = T((gf) => {
    gf.utils = Tu();
    gf.Cipher = vs();
    gf.DES = ku();
    gf.CBC = Yb();
    gf.EDE = Qb();
  });
  im = T((_T, rm) => {
    var tm = yi(), wi = em(), s9 = Ie(), Rn = Te().Buffer, Sa = { "des-ede3-cbc": wi.CBC.instantiate(wi.EDE), "des-ede3": wi.EDE, "des-ede-cbc": wi.CBC.instantiate(wi.EDE), "des-ede": wi.EDE, "des-cbc": wi.CBC.instantiate(wi.DES), "des-ecb": wi.DES };
    Sa.des = Sa["des-cbc"];
    Sa.des3 = Sa["des-ede3-cbc"];
    rm.exports = ms;
    s9(ms, tm);
    function ms(t) {
      tm.call(this);
      var e = t.mode.toLowerCase(), r = Sa[e], o;
      t.decrypt ? o = "decrypt" : o = "encrypt";
      var f = t.key;
      Rn.isBuffer(f) || (f = Rn.from(f)), (e === "des-ede" || e === "des-ede-cbc") && (f = Rn.concat([f, f.slice(0, 8)]));
      var p = t.iv;
      Rn.isBuffer(p) || (p = Rn.from(p)), this._des = r.create({ key: f, iv: p, type: o });
    }
    ms.prototype._update = function(t) {
      return Rn.from(this._des.update(t));
    };
    ms.prototype._final = function() {
      return Rn.from(this._des.final());
    };
  });
  nm = T((Lu) => {
    Lu.encrypt = function(t, e) {
      return t._cipher.encryptBlock(e);
    };
    Lu.decrypt = function(t, e) {
      return t._cipher.decryptBlock(e);
    };
  });
  yf = T((ST, fm) => {
    fm.exports = function(e, r) {
      for (var o = Math.min(e.length, r.length), f = new Buffer(o), p = 0;p < o; ++p)
        f[p] = e[p] ^ r[p];
      return f;
    };
  });
  om = T((Nu) => {
    var am = yf();
    Nu.encrypt = function(t, e) {
      var r = am(e, t._prev);
      return t._prev = t._cipher.encryptBlock(r), t._prev;
    };
    Nu.decrypt = function(t, e) {
      var r = t._prev;
      t._prev = e;
      var o = t._cipher.decryptBlock(e);
      return am(o, r);
    };
  });
  um = T((hm) => {
    var Ea = Te().Buffer, h9 = yf();
    function sm(t, e, r) {
      var o = e.length, f = h9(e, t._cache);
      return t._cache = t._cache.slice(o), t._prev = Ea.concat([t._prev, r ? e : f]), f;
    }
    hm.encrypt = function(t, e, r) {
      for (var o = Ea.allocUnsafe(0), f;e.length; )
        if (t._cache.length === 0 && (t._cache = t._cipher.encryptBlock(t._prev), t._prev = Ea.allocUnsafe(0)), t._cache.length <= e.length)
          f = t._cache.length, o = Ea.concat([o, sm(t, e.slice(0, f), r)]), e = e.slice(f);
        else {
          o = Ea.concat([o, sm(t, e, r)]);
          break;
        }
      return o;
    };
  });
  dm = T((lm) => {
    var Du = Te().Buffer;
    function u9(t, e, r) {
      var o = t._cipher.encryptBlock(t._prev), f = o[0] ^ e;
      return t._prev = Du.concat([t._prev.slice(1), Du.from([r ? e : f])]), f;
    }
    lm.encrypt = function(t, e, r) {
      for (var o = e.length, f = Du.allocUnsafe(o), p = -1;++p < o; )
        f[p] = u9(t, e[p], r);
      return f;
    };
  });
  pm = T((cm) => {
    var gs = Te().Buffer;
    function l9(t, e, r) {
      for (var o, f = -1, p = 8, m = 0, y, M;++f < p; )
        o = t._cipher.encryptBlock(t._prev), y = e & 1 << 7 - f ? 128 : 0, M = o[0] ^ y, m += (M & 128) >> f % 8, t._prev = d9(t._prev, r ? y : M);
      return m;
    }
    function d9(t, e) {
      var r = t.length, o = -1, f = gs.allocUnsafe(t.length);
      for (t = gs.concat([t, gs.from([e])]);++o < r; )
        f[o] = t[o] << 1 | t[o + 1] >> 7;
      return f;
    }
    cm.encrypt = function(t, e, r) {
      for (var o = e.length, f = gs.allocUnsafe(o), p = -1;++p < o; )
        f[p] = l9(t, e[p], r);
      return f;
    };
  });
  bm = T((vm) => {
    var c9 = yf();
    function p9(t) {
      return t._prev = t._cipher.encryptBlock(t._prev), t._prev;
    }
    vm.encrypt = function(t, e) {
      for (;t._cache.length < e.length; )
        t._cache = Buffer.concat([t._cache, p9(t)]);
      var r = t._cache.slice(0, e.length);
      return t._cache = t._cache.slice(e.length), c9(e, r);
    };
  });
  Pu = T((IT, mm) => {
    function v9(t) {
      for (var e = t.length, r;e--; )
        if (r = t.readUInt8(e), r === 255)
          t.writeUInt8(0, e);
        else {
          r++, t.writeUInt8(r, e);
          break;
        }
    }
    mm.exports = v9;
  });
  Ou = T((ym) => {
    var b9 = yf(), gm = Te().Buffer, m9 = Pu();
    function g9(t) {
      var e = t._cipher.encryptBlockRaw(t._prev);
      return m9(t._prev), e;
    }
    var Cu = 16;
    ym.encrypt = function(t, e) {
      var r = Math.ceil(e.length / Cu), o = t._cache.length;
      t._cache = gm.concat([t._cache, gm.allocUnsafe(r * Cu)]);
      for (var f = 0;f < r; f++) {
        var p = g9(t), m = o + f * Cu;
        t._cache.writeUInt32BE(p[0], m + 0), t._cache.writeUInt32BE(p[1], m + 4), t._cache.writeUInt32BE(p[2], m + 8), t._cache.writeUInt32BE(p[3], m + 12);
      }
      var y = t._cache.slice(0, e.length);
      return t._cache = t._cache.slice(e.length), b9(e, y);
    };
  });
  Fu = T((kT, y9) => {
    y9.exports = { "aes-128-ecb": { cipher: "AES", key: 128, iv: 0, mode: "ECB", type: "block" }, "aes-192-ecb": { cipher: "AES", key: 192, iv: 0, mode: "ECB", type: "block" }, "aes-256-ecb": { cipher: "AES", key: 256, iv: 0, mode: "ECB", type: "block" }, "aes-128-cbc": { cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block" }, "aes-192-cbc": { cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block" }, "aes-256-cbc": { cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block" }, aes128: { cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block" }, aes192: { cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block" }, aes256: { cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block" }, "aes-128-cfb": { cipher: "AES", key: 128, iv: 16, mode: "CFB", type: "stream" }, "aes-192-cfb": { cipher: "AES", key: 192, iv: 16, mode: "CFB", type: "stream" }, "aes-256-cfb": { cipher: "AES", key: 256, iv: 16, mode: "CFB", type: "stream" }, "aes-128-cfb8": { cipher: "AES", key: 128, iv: 16, mode: "CFB8", type: "stream" }, "aes-192-cfb8": { cipher: "AES", key: 192, iv: 16, mode: "CFB8", type: "stream" }, "aes-256-cfb8": { cipher: "AES", key: 256, iv: 16, mode: "CFB8", type: "stream" }, "aes-128-cfb1": { cipher: "AES", key: 128, iv: 16, mode: "CFB1", type: "stream" }, "aes-192-cfb1": { cipher: "AES", key: 192, iv: 16, mode: "CFB1", type: "stream" }, "aes-256-cfb1": { cipher: "AES", key: 256, iv: 16, mode: "CFB1", type: "stream" }, "aes-128-ofb": { cipher: "AES", key: 128, iv: 16, mode: "OFB", type: "stream" }, "aes-192-ofb": { cipher: "AES", key: 192, iv: 16, mode: "OFB", type: "stream" }, "aes-256-ofb": { cipher: "AES", key: 256, iv: 16, mode: "OFB", type: "stream" }, "aes-128-ctr": { cipher: "AES", key: 128, iv: 16, mode: "CTR", type: "stream" }, "aes-192-ctr": { cipher: "AES", key: 192, iv: 16, mode: "CTR", type: "stream" }, "aes-256-ctr": { cipher: "AES", key: 256, iv: 16, mode: "CTR", type: "stream" }, "aes-128-gcm": { cipher: "AES", key: 128, iv: 12, mode: "GCM", type: "auth" }, "aes-192-gcm": { cipher: "AES", key: 192, iv: 12, mode: "GCM", type: "auth" }, "aes-256-gcm": { cipher: "AES", key: 256, iv: 12, mode: "GCM", type: "auth" } };
  });
  ws = T((LT, wm) => {
    var w9 = { ECB: nm(), CBC: om(), CFB: um(), CFB8: dm(), CFB1: pm(), OFB: bm(), CTR: Ou(), GCM: Ou() }, ys = Fu();
    for (Uu in ys)
      ys[Uu].module = w9[ys[Uu].mode];
    var Uu;
    wm.exports = ys;
  });
  Aa = T((NT, _m) => {
    var Ms = Te().Buffer;
    function Hu(t) {
      Ms.isBuffer(t) || (t = Ms.from(t));
      for (var e = t.length / 4 | 0, r = new Array(e), o = 0;o < e; o++)
        r[o] = t.readUInt32BE(o * 4);
      return r;
    }
    function zu(t) {
      for (var e = 0;e < t.length; t++)
        t[e] = 0;
    }
    function Mm(t, e, r, o, f) {
      for (var p = r[0], m = r[1], y = r[2], M = r[3], x = t[0] ^ e[0], S = t[1] ^ e[1], E = t[2] ^ e[2], B = t[3] ^ e[3], q, L, ge, _e, N = 4, we = 1;we < f; we++)
        q = p[x >>> 24] ^ m[S >>> 16 & 255] ^ y[E >>> 8 & 255] ^ M[B & 255] ^ e[N++], L = p[S >>> 24] ^ m[E >>> 16 & 255] ^ y[B >>> 8 & 255] ^ M[x & 255] ^ e[N++], ge = p[E >>> 24] ^ m[B >>> 16 & 255] ^ y[x >>> 8 & 255] ^ M[S & 255] ^ e[N++], _e = p[B >>> 24] ^ m[x >>> 16 & 255] ^ y[S >>> 8 & 255] ^ M[E & 255] ^ e[N++], x = q, S = L, E = ge, B = _e;
      return q = (o[x >>> 24] << 24 | o[S >>> 16 & 255] << 16 | o[E >>> 8 & 255] << 8 | o[B & 255]) ^ e[N++], L = (o[S >>> 24] << 24 | o[E >>> 16 & 255] << 16 | o[B >>> 8 & 255] << 8 | o[x & 255]) ^ e[N++], ge = (o[E >>> 24] << 24 | o[B >>> 16 & 255] << 16 | o[x >>> 8 & 255] << 8 | o[S & 255]) ^ e[N++], _e = (o[B >>> 24] << 24 | o[x >>> 16 & 255] << 16 | o[S >>> 8 & 255] << 8 | o[E & 255]) ^ e[N++], q = q >>> 0, L = L >>> 0, ge = ge >>> 0, _e = _e >>> 0, [q, L, ge, _e];
    }
    var M9 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], kt = function() {
      for (var t = new Array(256), e = 0;e < 256; e++)
        e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283;
      for (var r = [], o = [], f = [[], [], [], []], p = [[], [], [], []], m = 0, y = 0, M = 0;M < 256; ++M) {
        var x = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4;
        x = x >>> 8 ^ x & 255 ^ 99, r[m] = x, o[x] = m;
        var S = t[m], E = t[S], B = t[E], q = t[x] * 257 ^ x * 16843008;
        f[0][m] = q << 24 | q >>> 8, f[1][m] = q << 16 | q >>> 16, f[2][m] = q << 8 | q >>> 24, f[3][m] = q, q = B * 16843009 ^ E * 65537 ^ S * 257 ^ m * 16843008, p[0][x] = q << 24 | q >>> 8, p[1][x] = q << 16 | q >>> 16, p[2][x] = q << 8 | q >>> 24, p[3][x] = q, m === 0 ? m = y = 1 : (m = S ^ t[t[t[B ^ S]]], y ^= t[t[y]]);
      }
      return { SBOX: r, INV_SBOX: o, SUB_MIX: f, INV_SUB_MIX: p };
    }();
    function gr(t) {
      this._key = Hu(t), this._reset();
    }
    gr.blockSize = 4 * 4;
    gr.keySize = 256 / 8;
    gr.prototype.blockSize = gr.blockSize;
    gr.prototype.keySize = gr.keySize;
    gr.prototype._reset = function() {
      for (var t = this._key, e = t.length, r = e + 6, o = (r + 1) * 4, f = [], p = 0;p < e; p++)
        f[p] = t[p];
      for (p = e;p < o; p++) {
        var m = f[p - 1];
        p % e === 0 ? (m = m << 8 | m >>> 24, m = kt.SBOX[m >>> 24] << 24 | kt.SBOX[m >>> 16 & 255] << 16 | kt.SBOX[m >>> 8 & 255] << 8 | kt.SBOX[m & 255], m ^= M9[p / e | 0] << 24) : e > 6 && p % e === 4 && (m = kt.SBOX[m >>> 24] << 24 | kt.SBOX[m >>> 16 & 255] << 16 | kt.SBOX[m >>> 8 & 255] << 8 | kt.SBOX[m & 255]), f[p] = f[p - e] ^ m;
      }
      for (var y = [], M = 0;M < o; M++) {
        var x = o - M, S = f[x - (M % 4 ? 0 : 4)];
        M < 4 || x <= 4 ? y[M] = S : y[M] = kt.INV_SUB_MIX[0][kt.SBOX[S >>> 24]] ^ kt.INV_SUB_MIX[1][kt.SBOX[S >>> 16 & 255]] ^ kt.INV_SUB_MIX[2][kt.SBOX[S >>> 8 & 255]] ^ kt.INV_SUB_MIX[3][kt.SBOX[S & 255]];
      }
      this._nRounds = r, this._keySchedule = f, this._invKeySchedule = y;
    };
    gr.prototype.encryptBlockRaw = function(t) {
      return t = Hu(t), Mm(t, this._keySchedule, kt.SUB_MIX, kt.SBOX, this._nRounds);
    };
    gr.prototype.encryptBlock = function(t) {
      var e = this.encryptBlockRaw(t), r = Ms.allocUnsafe(16);
      return r.writeUInt32BE(e[0], 0), r.writeUInt32BE(e[1], 4), r.writeUInt32BE(e[2], 8), r.writeUInt32BE(e[3], 12), r;
    };
    gr.prototype.decryptBlock = function(t) {
      t = Hu(t);
      var e = t[1];
      t[1] = t[3], t[3] = e;
      var r = Mm(t, this._invKeySchedule, kt.INV_SUB_MIX, kt.INV_SBOX, this._nRounds), o = Ms.allocUnsafe(16);
      return o.writeUInt32BE(r[0], 0), o.writeUInt32BE(r[3], 4), o.writeUInt32BE(r[2], 8), o.writeUInt32BE(r[1], 12), o;
    };
    gr.prototype.scrub = function() {
      zu(this._keySchedule), zu(this._invKeySchedule), zu(this._key);
    };
    _m.exports.AES = gr;
  });
  Em = T((DT, Sm) => {
    var wf = Te().Buffer, _9 = wf.alloc(16, 0);
    function x9(t) {
      return [t.readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)];
    }
    function xm(t) {
      var e = wf.allocUnsafe(16);
      return e.writeUInt32BE(t[0] >>> 0, 0), e.writeUInt32BE(t[1] >>> 0, 4), e.writeUInt32BE(t[2] >>> 0, 8), e.writeUInt32BE(t[3] >>> 0, 12), e;
    }
    function Ra(t) {
      this.h = t, this.state = wf.alloc(16, 0), this.cache = wf.allocUnsafe(0);
    }
    Ra.prototype.ghash = function(t) {
      for (var e = -1;++e < t.length; )
        this.state[e] ^= t[e];
      this._multiply();
    };
    Ra.prototype._multiply = function() {
      for (var t = x9(this.h), e = [0, 0, 0, 0], r, o, f, p = -1;++p < 128; ) {
        for (o = (this.state[~~(p / 8)] & 1 << 7 - p % 8) !== 0, o && (e[0] ^= t[0], e[1] ^= t[1], e[2] ^= t[2], e[3] ^= t[3]), f = (t[3] & 1) !== 0, r = 3;r > 0; r--)
          t[r] = t[r] >>> 1 | (t[r - 1] & 1) << 31;
        t[0] = t[0] >>> 1, f && (t[0] = t[0] ^ 225 << 24);
      }
      this.state = xm(e);
    };
    Ra.prototype.update = function(t) {
      this.cache = wf.concat([this.cache, t]);
      for (var e;this.cache.length >= 16; )
        e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(e);
    };
    Ra.prototype.final = function(t, e) {
      return this.cache.length && this.ghash(wf.concat([this.cache, _9], 16)), this.ghash(xm([0, t, 0, e])), this.state;
    };
    Sm.exports = Ra;
  });
  Wu = T((PT, Bm) => {
    var S9 = Aa(), rr = Te().Buffer, Am = yi(), E9 = Ie(), Rm = Em(), A9 = yf(), R9 = Pu();
    function B9(t, e) {
      var r = 0;
      t.length !== e.length && r++;
      for (var o = Math.min(t.length, e.length), f = 0;f < o; ++f)
        r += t[f] ^ e[f];
      return r;
    }
    function q9(t, e, r) {
      if (e.length === 12)
        return t._finID = rr.concat([e, rr.from([0, 0, 0, 1])]), rr.concat([e, rr.from([0, 0, 0, 2])]);
      var o = new Rm(r), f = e.length, p = f % 16;
      o.update(e), p && (p = 16 - p, o.update(rr.alloc(p, 0))), o.update(rr.alloc(8, 0));
      var m = f * 8, y = rr.alloc(8);
      y.writeUIntBE(m, 0, 8), o.update(y), t._finID = o.state;
      var M = rr.from(t._finID);
      return R9(M), M;
    }
    function Bn(t, e, r, o) {
      Am.call(this);
      var f = rr.alloc(4, 0);
      this._cipher = new S9.AES(e);
      var p = this._cipher.encryptBlock(f);
      this._ghash = new Rm(p), r = q9(this, r, p), this._prev = rr.from(r), this._cache = rr.allocUnsafe(0), this._secCache = rr.allocUnsafe(0), this._decrypt = o, this._alen = 0, this._len = 0, this._mode = t, this._authTag = null, this._called = false;
    }
    E9(Bn, Am);
    Bn.prototype._update = function(t) {
      if (!this._called && this._alen) {
        var e = 16 - this._alen % 16;
        e < 16 && (e = rr.alloc(e, 0), this._ghash.update(e));
      }
      this._called = true;
      var r = this._mode.encrypt(this, t);
      return this._decrypt ? this._ghash.update(t) : this._ghash.update(r), this._len += t.length, r;
    };
    Bn.prototype._final = function() {
      if (this._decrypt && !this._authTag)
        throw new Error("Unsupported state or unable to authenticate data");
      var t = A9(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
      if (this._decrypt && B9(t, this._authTag))
        throw new Error("Unsupported state or unable to authenticate data");
      this._authTag = t, this._cipher.scrub();
    };
    Bn.prototype.getAuthTag = function() {
      if (this._decrypt || !rr.isBuffer(this._authTag))
        throw new Error("Attempting to get auth tag in unsupported state");
      return this._authTag;
    };
    Bn.prototype.setAuthTag = function(e) {
      if (!this._decrypt)
        throw new Error("Attempting to set auth tag in unsupported state");
      this._authTag = e;
    };
    Bn.prototype.setAAD = function(e) {
      if (this._called)
        throw new Error("Attempting to set AAD in unsupported state");
      this._ghash.update(e), this._alen += e.length;
    };
    Bm.exports = Bn;
  });
  ju = T((CT, Im) => {
    var I9 = Aa(), Ku = Te().Buffer, qm = yi(), T9 = Ie();
    function _s(t, e, r, o) {
      qm.call(this), this._cipher = new I9.AES(e), this._prev = Ku.from(r), this._cache = Ku.allocUnsafe(0), this._secCache = Ku.allocUnsafe(0), this._decrypt = o, this._mode = t;
    }
    T9(_s, qm);
    _s.prototype._update = function(t) {
      return this._mode.encrypt(this, t, this._decrypt);
    };
    _s.prototype._final = function() {
      this._cipher.scrub();
    };
    Im.exports = _s;
  });
  Ba = T((OT, Tm) => {
    var qn = Te().Buffer, k9 = Ao();
    function L9(t, e, r, o) {
      if (qn.isBuffer(t) || (t = qn.from(t, "binary")), e && (qn.isBuffer(e) || (e = qn.from(e, "binary")), e.length !== 8))
        throw new RangeError("salt should be Buffer with 8 byte length");
      for (var f = r / 8, p = qn.alloc(f), m = qn.alloc(o || 0), y = qn.alloc(0);f > 0 || o > 0; ) {
        var M = new k9;
        M.update(y), M.update(t), e && M.update(e), y = M.digest();
        var x = 0;
        if (f > 0) {
          var S = p.length - f;
          x = Math.min(f, y.length), y.copy(p, S, 0, x), f -= x;
        }
        if (x < y.length && o > 0) {
          var E = m.length - o, B = Math.min(o, y.length - x);
          y.copy(m, E, x, x + B), o -= B;
        }
      }
      return y.fill(0), { key: p, iv: m };
    }
    Tm.exports = L9;
  });
  Dm = T((Zu) => {
    var km = ws(), N9 = Wu(), Mi = Te().Buffer, D9 = ju(), Lm = yi(), P9 = Aa(), C9 = Ba(), O9 = Ie();
    function qa(t, e, r) {
      Lm.call(this), this._cache = new xs, this._cipher = new P9.AES(e), this._prev = Mi.from(r), this._mode = t, this._autopadding = true;
    }
    O9(qa, Lm);
    qa.prototype._update = function(t) {
      this._cache.add(t);
      for (var e, r, o = [];e = this._cache.get(); )
        r = this._mode.encrypt(this, e), o.push(r);
      return Mi.concat(o);
    };
    var F9 = Mi.alloc(16, 16);
    qa.prototype._final = function() {
      var t = this._cache.flush();
      if (this._autopadding)
        return t = this._mode.encrypt(this, t), this._cipher.scrub(), t;
      if (!t.equals(F9))
        throw this._cipher.scrub(), new Error("data not multiple of block length");
    };
    qa.prototype.setAutoPadding = function(t) {
      return this._autopadding = !!t, this;
    };
    function xs() {
      this.cache = Mi.allocUnsafe(0);
    }
    xs.prototype.add = function(t) {
      this.cache = Mi.concat([this.cache, t]);
    };
    xs.prototype.get = function() {
      if (this.cache.length > 15) {
        var t = this.cache.slice(0, 16);
        return this.cache = this.cache.slice(16), t;
      }
      return null;
    };
    xs.prototype.flush = function() {
      for (var t = 16 - this.cache.length, e = Mi.allocUnsafe(t), r = -1;++r < t; )
        e.writeUInt8(t, r);
      return Mi.concat([this.cache, e]);
    };
    function Nm(t, e, r) {
      var o = km[t.toLowerCase()];
      if (!o)
        throw new TypeError("invalid suite type");
      if (typeof e == "string" && (e = Mi.from(e)), e.length !== o.key / 8)
        throw new TypeError("invalid key length " + e.length);
      if (typeof r == "string" && (r = Mi.from(r)), o.mode !== "GCM" && r.length !== o.iv)
        throw new TypeError("invalid iv length " + r.length);
      return o.type === "stream" ? new D9(o.module, e, r) : o.type === "auth" ? new N9(o.module, e, r) : new qa(o.module, e, r);
    }
    function U9(t, e) {
      var r = km[t.toLowerCase()];
      if (!r)
        throw new TypeError("invalid suite type");
      var o = C9(e, false, r.key, r.iv);
      return Nm(t, o.key, o.iv);
    }
    Zu.createCipheriv = Nm;
    Zu.createCipher = U9;
  });
  Fm = T((Vu) => {
    var z9 = Wu(), Mf = Te().Buffer, Pm = ws(), H9 = ju(), Cm = yi(), W9 = Aa(), K9 = Ba(), j9 = Ie();
    function Ia(t, e, r) {
      Cm.call(this), this._cache = new Ss, this._last = undefined, this._cipher = new W9.AES(e), this._prev = Mf.from(r), this._mode = t, this._autopadding = true;
    }
    j9(Ia, Cm);
    Ia.prototype._update = function(t) {
      this._cache.add(t);
      for (var e, r, o = [];e = this._cache.get(this._autopadding); )
        r = this._mode.decrypt(this, e), o.push(r);
      return Mf.concat(o);
    };
    Ia.prototype._final = function() {
      var t = this._cache.flush();
      if (this._autopadding)
        return Z9(this._mode.decrypt(this, t));
      if (t)
        throw new Error("data not multiple of block length");
    };
    Ia.prototype.setAutoPadding = function(t) {
      return this._autopadding = !!t, this;
    };
    function Ss() {
      this.cache = Mf.allocUnsafe(0);
    }
    Ss.prototype.add = function(t) {
      this.cache = Mf.concat([this.cache, t]);
    };
    Ss.prototype.get = function(t) {
      var e;
      if (t) {
        if (this.cache.length > 16)
          return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e;
      } else if (this.cache.length >= 16)
        return e = this.cache.slice(0, 16), this.cache = this.cache.slice(16), e;
      return null;
    };
    Ss.prototype.flush = function() {
      if (this.cache.length)
        return this.cache;
    };
    function Z9(t) {
      var e = t[15];
      if (e < 1 || e > 16)
        throw new Error("unable to decrypt data");
      for (var r = -1;++r < e; )
        if (t[r + (16 - e)] !== e)
          throw new Error("unable to decrypt data");
      if (e !== 16)
        return t.slice(0, 16 - e);
    }
    function Om(t, e, r) {
      var o = Pm[t.toLowerCase()];
      if (!o)
        throw new TypeError("invalid suite type");
      if (typeof r == "string" && (r = Mf.from(r)), o.mode !== "GCM" && r.length !== o.iv)
        throw new TypeError("invalid iv length " + r.length);
      if (typeof e == "string" && (e = Mf.from(e)), e.length !== o.key / 8)
        throw new TypeError("invalid key length " + e.length);
      return o.type === "stream" ? new H9(o.module, e, r, true) : o.type === "auth" ? new z9(o.module, e, r, true) : new Ia(o.module, e, r);
    }
    function V9(t, e) {
      var r = Pm[t.toLowerCase()];
      if (!r)
        throw new TypeError("invalid suite type");
      var o = K9(e, false, r.key, r.iv);
      return Om(t, o.key, o.iv);
    }
    Vu.createDecipher = V9;
    Vu.createDecipheriv = Om;
  });
  Es = T((Nr) => {
    var Um = Dm(), zm = Fm(), $9 = Fu();
    function G9() {
      return Object.keys($9);
    }
    Nr.createCipher = Nr.Cipher = Um.createCipher;
    Nr.createCipheriv = Nr.Cipheriv = Um.createCipheriv;
    Nr.createDecipher = Nr.Decipher = zm.createDecipher;
    Nr.createDecipheriv = Nr.Decipheriv = zm.createDecipheriv;
    Nr.listCiphers = Nr.getCiphers = G9;
  });
  Hm = T((_i) => {
    _i["des-ecb"] = { key: 8, iv: 0 };
    _i["des-cbc"] = _i.des = { key: 8, iv: 8 };
    _i["des-ede3-cbc"] = _i.des3 = { key: 24, iv: 8 };
    _i["des-ede3"] = { key: 24, iv: 0 };
    _i["des-ede-cbc"] = { key: 16, iv: 8 };
    _i["des-ede"] = { key: 16, iv: 0 };
  });
  Vm = T((Dr) => {
    var Wm = im(), $u = Es(), Ki = ws(), xi = Hm(), Km = Ba();
    function Y9(t, e) {
      t = t.toLowerCase();
      var r, o;
      if (Ki[t])
        r = Ki[t].key, o = Ki[t].iv;
      else if (xi[t])
        r = xi[t].key * 8, o = xi[t].iv;
      else
        throw new TypeError("invalid suite type");
      var f = Km(e, false, r, o);
      return jm(t, f.key, f.iv);
    }
    function X9(t, e) {
      t = t.toLowerCase();
      var r, o;
      if (Ki[t])
        r = Ki[t].key, o = Ki[t].iv;
      else if (xi[t])
        r = xi[t].key * 8, o = xi[t].iv;
      else
        throw new TypeError("invalid suite type");
      var f = Km(e, false, r, o);
      return Zm(t, f.key, f.iv);
    }
    function jm(t, e, r) {
      if (t = t.toLowerCase(), Ki[t])
        return $u.createCipheriv(t, e, r);
      if (xi[t])
        return new Wm({ key: e, iv: r, mode: t });
      throw new TypeError("invalid suite type");
    }
    function Zm(t, e, r) {
      if (t = t.toLowerCase(), Ki[t])
        return $u.createDecipheriv(t, e, r);
      if (xi[t])
        return new Wm({ key: e, iv: r, mode: t, decrypt: true });
      throw new TypeError("invalid suite type");
    }
    function J9() {
      return Object.keys(xi).concat($u.getCiphers());
    }
    Dr.createCipher = Dr.Cipher = Y9;
    Dr.createCipheriv = Dr.Cipheriv = jm;
    Dr.createDecipher = Dr.Decipher = X9;
    Dr.createDecipheriv = Dr.Decipheriv = Zm;
    Dr.listCiphers = Dr.getCiphers = J9;
  });
  ji = T(() => {
  });
  Yu = T(($m, Gu) => {
    (function(t, e) {
      function r(v, i) {
        if (!v)
          throw new Error(i || "Assertion failed");
      }
      function o(v, i) {
        v.super_ = i;
        var a = function() {
        };
        a.prototype = i.prototype, v.prototype = new a, v.prototype.constructor = v;
      }
      function f(v, i, a) {
        if (f.isBN(v))
          return v;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((i === "le" || i === "be") && (a = i, i = 10), this._init(v || 0, i || 10, a || "be"));
      }
      typeof t == "object" ? t.exports = f : e.BN = f, f.BN = f, f.wordSize = 26;
      var p;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? p = window.Buffer : p = ji().Buffer;
      } catch {
      }
      f.isBN = function(i) {
        return i instanceof f ? true : i !== null && typeof i == "object" && i.constructor.wordSize === f.wordSize && Array.isArray(i.words);
      }, f.max = function(i, a) {
        return i.cmp(a) > 0 ? i : a;
      }, f.min = function(i, a) {
        return i.cmp(a) < 0 ? i : a;
      }, f.prototype._init = function(i, a, h) {
        if (typeof i == "number")
          return this._initNumber(i, a, h);
        if (typeof i == "object")
          return this._initArray(i, a, h);
        a === "hex" && (a = 16), r(a === (a | 0) && a >= 2 && a <= 36), i = i.toString().replace(/\s+/g, "");
        var s = 0;
        i[0] === "-" && (s++, this.negative = 1), s < i.length && (a === 16 ? this._parseHex(i, s, h) : (this._parseBase(i, a, s), h === "le" && this._initArray(this.toArray(), a, h)));
      }, f.prototype._initNumber = function(i, a, h) {
        i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [i & 67108863, i / 67108864 & 67108863], this.length = 2) : (r(i < 9007199254740992), this.words = [i & 67108863, i / 67108864 & 67108863, 1], this.length = 3), h === "le" && this._initArray(this.toArray(), a, h);
      }, f.prototype._initArray = function(i, a, h) {
        if (r(typeof i.length == "number"), i.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u, c, b = 0;
        if (h === "be")
          for (s = i.length - 1, u = 0;s >= 0; s -= 3)
            c = i[s] | i[s - 1] << 8 | i[s - 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        else if (h === "le")
          for (s = 0, u = 0;s < i.length; s += 3)
            c = i[s] | i[s + 1] << 8 | i[s + 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        return this.strip();
      };
      function m(v, i) {
        var a = v.charCodeAt(i);
        return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
      }
      function y(v, i, a) {
        var h = m(v, a);
        return a - 1 >= i && (h |= m(v, a - 1) << 4), h;
      }
      f.prototype._parseHex = function(i, a, h) {
        this.length = Math.ceil((i.length - a) / 6), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u = 0, c = 0, b;
        if (h === "be")
          for (s = i.length - 1;s >= a; s -= 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        else {
          var l = i.length - a;
          for (s = l % 2 === 0 ? a + 1 : a;s < i.length; s += 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        }
        this.strip();
      };
      function M(v, i, a, h) {
        for (var s = 0, u = Math.min(v.length, a), c = i;c < u; c++) {
          var b = v.charCodeAt(c) - 48;
          s *= h, b >= 49 ? s += b - 49 + 10 : b >= 17 ? s += b - 17 + 10 : s += b;
        }
        return s;
      }
      f.prototype._parseBase = function(i, a, h) {
        this.words = [0], this.length = 1;
        for (var s = 0, u = 1;u <= 67108863; u *= a)
          s++;
        s--, u = u / a | 0;
        for (var c = i.length - h, b = c % s, l = Math.min(c, c - b) + h, n = 0, d = h;d < l; d += s)
          n = M(i, d, d + s, a), this.imuln(u), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        if (b !== 0) {
          var w = 1;
          for (n = M(i, d, i.length, a), d = 0;d < b; d++)
            w *= a;
          this.imuln(w), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        }
        this.strip();
      }, f.prototype.copy = function(i) {
        i.words = new Array(this.length);
        for (var a = 0;a < this.length; a++)
          i.words[a] = this.words[a];
        i.length = this.length, i.negative = this.negative, i.red = this.red;
      }, f.prototype.clone = function() {
        var i = new f(null);
        return this.copy(i), i;
      }, f.prototype._expand = function(i) {
        for (;this.length < i; )
          this.words[this.length++] = 0;
        return this;
      }, f.prototype.strip = function() {
        for (;this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, f.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, f.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      f.prototype.toString = function(i, a) {
        i = i || 10, a = a | 0 || 1;
        var h;
        if (i === 16 || i === "hex") {
          h = "";
          for (var s = 0, u = 0, c = 0;c < this.length; c++) {
            var b = this.words[c], l = ((b << s | u) & 16777215).toString(16);
            u = b >>> 24 - s & 16777215, u !== 0 || c !== this.length - 1 ? h = x[6 - l.length] + l + h : h = l + h, s += 2, s >= 26 && (s -= 26, c--);
          }
          for (u !== 0 && (h = u.toString(16) + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        if (i === (i | 0) && i >= 2 && i <= 36) {
          var n = S[i], d = E[i];
          h = "";
          var w = this.clone();
          for (w.negative = 0;!w.isZero(); ) {
            var g = w.modn(d).toString(i);
            w = w.idivn(d), w.isZero() ? h = g + h : h = x[n - g.length] + g + h;
          }
          for (this.isZero() && (h = "0" + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        r(false, "Base should be between 2 and 36");
      }, f.prototype.toNumber = function() {
        var i = this.words[0];
        return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
      }, f.prototype.toJSON = function() {
        return this.toString(16);
      }, f.prototype.toBuffer = function(i, a) {
        return r(typeof p < "u"), this.toArrayLike(p, i, a);
      }, f.prototype.toArray = function(i, a) {
        return this.toArrayLike(Array, i, a);
      }, f.prototype.toArrayLike = function(i, a, h) {
        var s = this.byteLength(), u = h || Math.max(1, s);
        r(s <= u, "byte array longer than desired length"), r(u > 0, "Requested array length <= 0"), this.strip();
        var c = a === "le", b = new i(u), l, n, d = this.clone();
        if (c) {
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[n] = l;
          for (;n < u; n++)
            b[n] = 0;
        } else {
          for (n = 0;n < u - s; n++)
            b[n] = 0;
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[u - n - 1] = l;
        }
        return b;
      }, Math.clz32 ? f.prototype._countBits = function(i) {
        return 32 - Math.clz32(i);
      } : f.prototype._countBits = function(i) {
        var a = i, h = 0;
        return a >= 4096 && (h += 13, a >>>= 13), a >= 64 && (h += 7, a >>>= 7), a >= 8 && (h += 4, a >>>= 4), a >= 2 && (h += 2, a >>>= 2), h + a;
      }, f.prototype._zeroBits = function(i) {
        if (i === 0)
          return 26;
        var a = i, h = 0;
        return (a & 8191) === 0 && (h += 13, a >>>= 13), (a & 127) === 0 && (h += 7, a >>>= 7), (a & 15) === 0 && (h += 4, a >>>= 4), (a & 3) === 0 && (h += 2, a >>>= 2), (a & 1) === 0 && h++, h;
      }, f.prototype.bitLength = function() {
        var i = this.words[this.length - 1], a = this._countBits(i);
        return (this.length - 1) * 26 + a;
      };
      function B(v) {
        for (var i = new Array(v.bitLength()), a = 0;a < i.length; a++) {
          var h = a / 26 | 0, s = a % 26;
          i[a] = (v.words[h] & 1 << s) >>> s;
        }
        return i;
      }
      f.prototype.zeroBits = function() {
        if (this.isZero())
          return 0;
        for (var i = 0, a = 0;a < this.length; a++) {
          var h = this._zeroBits(this.words[a]);
          if (i += h, h !== 26)
            break;
        }
        return i;
      }, f.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, f.prototype.toTwos = function(i) {
        return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
      }, f.prototype.fromTwos = function(i) {
        return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
      }, f.prototype.isNeg = function() {
        return this.negative !== 0;
      }, f.prototype.neg = function() {
        return this.clone().ineg();
      }, f.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, f.prototype.iuor = function(i) {
        for (;this.length < i.length; )
          this.words[this.length++] = 0;
        for (var a = 0;a < i.length; a++)
          this.words[a] = this.words[a] | i.words[a];
        return this.strip();
      }, f.prototype.ior = function(i) {
        return r((this.negative | i.negative) === 0), this.iuor(i);
      }, f.prototype.or = function(i) {
        return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
      }, f.prototype.uor = function(i) {
        return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
      }, f.prototype.iuand = function(i) {
        var a;
        this.length > i.length ? a = i : a = this;
        for (var h = 0;h < a.length; h++)
          this.words[h] = this.words[h] & i.words[h];
        return this.length = a.length, this.strip();
      }, f.prototype.iand = function(i) {
        return r((this.negative | i.negative) === 0), this.iuand(i);
      }, f.prototype.and = function(i) {
        return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
      }, f.prototype.uand = function(i) {
        return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
      }, f.prototype.iuxor = function(i) {
        var a, h;
        this.length > i.length ? (a = this, h = i) : (a = i, h = this);
        for (var s = 0;s < h.length; s++)
          this.words[s] = a.words[s] ^ h.words[s];
        if (this !== a)
          for (;s < a.length; s++)
            this.words[s] = a.words[s];
        return this.length = a.length, this.strip();
      }, f.prototype.ixor = function(i) {
        return r((this.negative | i.negative) === 0), this.iuxor(i);
      }, f.prototype.xor = function(i) {
        return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
      }, f.prototype.uxor = function(i) {
        return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
      }, f.prototype.inotn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = Math.ceil(i / 26) | 0, h = i % 26;
        this._expand(a), h > 0 && a--;
        for (var s = 0;s < a; s++)
          this.words[s] = ~this.words[s] & 67108863;
        return h > 0 && (this.words[s] = ~this.words[s] & 67108863 >> 26 - h), this.strip();
      }, f.prototype.notn = function(i) {
        return this.clone().inotn(i);
      }, f.prototype.setn = function(i, a) {
        r(typeof i == "number" && i >= 0);
        var h = i / 26 | 0, s = i % 26;
        return this._expand(h + 1), a ? this.words[h] = this.words[h] | 1 << s : this.words[h] = this.words[h] & ~(1 << s), this.strip();
      }, f.prototype.iadd = function(i) {
        var a;
        if (this.negative !== 0 && i.negative === 0)
          return this.negative = 0, a = this.isub(i), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && i.negative !== 0)
          return i.negative = 0, a = this.isub(i), i.negative = 1, a._normSign();
        var h, s;
        this.length > i.length ? (h = this, s = i) : (h = i, s = this);
        for (var u = 0, c = 0;c < s.length; c++)
          a = (h.words[c] | 0) + (s.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        for (;u !== 0 && c < h.length; c++)
          a = (h.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        if (this.length = h.length, u !== 0)
          this.words[this.length] = u, this.length++;
        else if (h !== this)
          for (;c < h.length; c++)
            this.words[c] = h.words[c];
        return this;
      }, f.prototype.add = function(i) {
        var a;
        return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, a = this.sub(i), i.negative ^= 1, a) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = i.sub(this), this.negative = 1, a) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
      }, f.prototype.isub = function(i) {
        if (i.negative !== 0) {
          i.negative = 0;
          var a = this.iadd(i);
          return i.negative = 1, a._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
        var h = this.cmp(i);
        if (h === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var s, u;
        h > 0 ? (s = this, u = i) : (s = i, u = this);
        for (var c = 0, b = 0;b < u.length; b++)
          a = (s.words[b] | 0) - (u.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        for (;c !== 0 && b < s.length; b++)
          a = (s.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        if (c === 0 && b < s.length && s !== this)
          for (;b < s.length; b++)
            this.words[b] = s.words[b];
        return this.length = Math.max(this.length, b), s !== this && (this.negative = 1), this.strip();
      }, f.prototype.sub = function(i) {
        return this.clone().isub(i);
      };
      function q(v, i, a) {
        a.negative = i.negative ^ v.negative;
        var h = v.length + i.length | 0;
        a.length = h, h = h - 1 | 0;
        var s = v.words[0] | 0, u = i.words[0] | 0, c = s * u, b = c & 67108863, l = c / 67108864 | 0;
        a.words[0] = b;
        for (var n = 1;n < h; n++) {
          for (var d = l >>> 26, w = l & 67108863, g = Math.min(n, i.length - 1), _ = Math.max(0, n - v.length + 1);_ <= g; _++) {
            var A = n - _ | 0;
            s = v.words[A] | 0, u = i.words[_] | 0, c = s * u + w, d += c / 67108864 | 0, w = c & 67108863;
          }
          a.words[n] = w | 0, l = d | 0;
        }
        return l !== 0 ? a.words[n] = l | 0 : a.length--, a.strip();
      }
      var L = function(i, a, h) {
        var s = i.words, u = a.words, c = h.words, b = 0, l, n, d, w = s[0] | 0, g = w & 8191, _ = w >>> 13, A = s[1] | 0, R = A & 8191, I = A >>> 13, Me = s[2] | 0, k = Me & 8191, D = Me >>> 13, nt = s[3] | 0, C = nt & 8191, O = nt >>> 13, vt = s[4] | 0, F = vt & 8191, U = vt >>> 13, bt = s[5] | 0, z = bt & 8191, H = bt >>> 13, mt = s[6] | 0, W = mt & 8191, K = mt >>> 13, gt = s[7] | 0, j = gt & 8191, Z = gt >>> 13, yt = s[8] | 0, V = yt & 8191, $ = yt >>> 13, wt = s[9] | 0, G = wt & 8191, Y = wt >>> 13, Mt = u[0] | 0, X = Mt & 8191, J = Mt >>> 13, _t = u[1] | 0, Q = _t & 8191, ee = _t >>> 13, xt = u[2] | 0, te = xt & 8191, re = xt >>> 13, St = u[3] | 0, ie = St & 8191, ne = St >>> 13, Et = u[4] | 0, fe = Et & 8191, ae = Et >>> 13, At = u[5] | 0, oe = At & 8191, se = At >>> 13, Rt = u[6] | 0, he = Rt & 8191, ue = Rt >>> 13, Bt = u[7] | 0, le = Bt & 8191, de = Bt >>> 13, qt = u[8] | 0, ce = qt & 8191, pe = qt >>> 13, It = u[9] | 0, ve = It & 8191, be = It >>> 13;
        h.negative = i.negative ^ a.negative, h.length = 19, l = Math.imul(g, X), n = Math.imul(g, J), n = n + Math.imul(_, X) | 0, d = Math.imul(_, J);
        var ft = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, l = Math.imul(R, X), n = Math.imul(R, J), n = n + Math.imul(I, X) | 0, d = Math.imul(I, J), l = l + Math.imul(g, Q) | 0, n = n + Math.imul(g, ee) | 0, n = n + Math.imul(_, Q) | 0, d = d + Math.imul(_, ee) | 0;
        var Be = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, l = Math.imul(k, X), n = Math.imul(k, J), n = n + Math.imul(D, X) | 0, d = Math.imul(D, J), l = l + Math.imul(R, Q) | 0, n = n + Math.imul(R, ee) | 0, n = n + Math.imul(I, Q) | 0, d = d + Math.imul(I, ee) | 0, l = l + Math.imul(g, te) | 0, n = n + Math.imul(g, re) | 0, n = n + Math.imul(_, te) | 0, d = d + Math.imul(_, re) | 0;
        var qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, l = Math.imul(C, X), n = Math.imul(C, J), n = n + Math.imul(O, X) | 0, d = Math.imul(O, J), l = l + Math.imul(k, Q) | 0, n = n + Math.imul(k, ee) | 0, n = n + Math.imul(D, Q) | 0, d = d + Math.imul(D, ee) | 0, l = l + Math.imul(R, te) | 0, n = n + Math.imul(R, re) | 0, n = n + Math.imul(I, te) | 0, d = d + Math.imul(I, re) | 0, l = l + Math.imul(g, ie) | 0, n = n + Math.imul(g, ne) | 0, n = n + Math.imul(_, ie) | 0, d = d + Math.imul(_, ne) | 0;
        var ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, l = Math.imul(F, X), n = Math.imul(F, J), n = n + Math.imul(U, X) | 0, d = Math.imul(U, J), l = l + Math.imul(C, Q) | 0, n = n + Math.imul(C, ee) | 0, n = n + Math.imul(O, Q) | 0, d = d + Math.imul(O, ee) | 0, l = l + Math.imul(k, te) | 0, n = n + Math.imul(k, re) | 0, n = n + Math.imul(D, te) | 0, d = d + Math.imul(D, re) | 0, l = l + Math.imul(R, ie) | 0, n = n + Math.imul(R, ne) | 0, n = n + Math.imul(I, ie) | 0, d = d + Math.imul(I, ne) | 0, l = l + Math.imul(g, fe) | 0, n = n + Math.imul(g, ae) | 0, n = n + Math.imul(_, fe) | 0, d = d + Math.imul(_, ae) | 0;
        var He = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, l = Math.imul(z, X), n = Math.imul(z, J), n = n + Math.imul(H, X) | 0, d = Math.imul(H, J), l = l + Math.imul(F, Q) | 0, n = n + Math.imul(F, ee) | 0, n = n + Math.imul(U, Q) | 0, d = d + Math.imul(U, ee) | 0, l = l + Math.imul(C, te) | 0, n = n + Math.imul(C, re) | 0, n = n + Math.imul(O, te) | 0, d = d + Math.imul(O, re) | 0, l = l + Math.imul(k, ie) | 0, n = n + Math.imul(k, ne) | 0, n = n + Math.imul(D, ie) | 0, d = d + Math.imul(D, ne) | 0, l = l + Math.imul(R, fe) | 0, n = n + Math.imul(R, ae) | 0, n = n + Math.imul(I, fe) | 0, d = d + Math.imul(I, ae) | 0, l = l + Math.imul(g, oe) | 0, n = n + Math.imul(g, se) | 0, n = n + Math.imul(_, oe) | 0, d = d + Math.imul(_, se) | 0;
        var We = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, l = Math.imul(W, X), n = Math.imul(W, J), n = n + Math.imul(K, X) | 0, d = Math.imul(K, J), l = l + Math.imul(z, Q) | 0, n = n + Math.imul(z, ee) | 0, n = n + Math.imul(H, Q) | 0, d = d + Math.imul(H, ee) | 0, l = l + Math.imul(F, te) | 0, n = n + Math.imul(F, re) | 0, n = n + Math.imul(U, te) | 0, d = d + Math.imul(U, re) | 0, l = l + Math.imul(C, ie) | 0, n = n + Math.imul(C, ne) | 0, n = n + Math.imul(O, ie) | 0, d = d + Math.imul(O, ne) | 0, l = l + Math.imul(k, fe) | 0, n = n + Math.imul(k, ae) | 0, n = n + Math.imul(D, fe) | 0, d = d + Math.imul(D, ae) | 0, l = l + Math.imul(R, oe) | 0, n = n + Math.imul(R, se) | 0, n = n + Math.imul(I, oe) | 0, d = d + Math.imul(I, se) | 0, l = l + Math.imul(g, he) | 0, n = n + Math.imul(g, ue) | 0, n = n + Math.imul(_, he) | 0, d = d + Math.imul(_, ue) | 0;
        var Ke = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, l = Math.imul(j, X), n = Math.imul(j, J), n = n + Math.imul(Z, X) | 0, d = Math.imul(Z, J), l = l + Math.imul(W, Q) | 0, n = n + Math.imul(W, ee) | 0, n = n + Math.imul(K, Q) | 0, d = d + Math.imul(K, ee) | 0, l = l + Math.imul(z, te) | 0, n = n + Math.imul(z, re) | 0, n = n + Math.imul(H, te) | 0, d = d + Math.imul(H, re) | 0, l = l + Math.imul(F, ie) | 0, n = n + Math.imul(F, ne) | 0, n = n + Math.imul(U, ie) | 0, d = d + Math.imul(U, ne) | 0, l = l + Math.imul(C, fe) | 0, n = n + Math.imul(C, ae) | 0, n = n + Math.imul(O, fe) | 0, d = d + Math.imul(O, ae) | 0, l = l + Math.imul(k, oe) | 0, n = n + Math.imul(k, se) | 0, n = n + Math.imul(D, oe) | 0, d = d + Math.imul(D, se) | 0, l = l + Math.imul(R, he) | 0, n = n + Math.imul(R, ue) | 0, n = n + Math.imul(I, he) | 0, d = d + Math.imul(I, ue) | 0, l = l + Math.imul(g, le) | 0, n = n + Math.imul(g, de) | 0, n = n + Math.imul(_, le) | 0, d = d + Math.imul(_, de) | 0;
        var je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, l = Math.imul(V, X), n = Math.imul(V, J), n = n + Math.imul($, X) | 0, d = Math.imul($, J), l = l + Math.imul(j, Q) | 0, n = n + Math.imul(j, ee) | 0, n = n + Math.imul(Z, Q) | 0, d = d + Math.imul(Z, ee) | 0, l = l + Math.imul(W, te) | 0, n = n + Math.imul(W, re) | 0, n = n + Math.imul(K, te) | 0, d = d + Math.imul(K, re) | 0, l = l + Math.imul(z, ie) | 0, n = n + Math.imul(z, ne) | 0, n = n + Math.imul(H, ie) | 0, d = d + Math.imul(H, ne) | 0, l = l + Math.imul(F, fe) | 0, n = n + Math.imul(F, ae) | 0, n = n + Math.imul(U, fe) | 0, d = d + Math.imul(U, ae) | 0, l = l + Math.imul(C, oe) | 0, n = n + Math.imul(C, se) | 0, n = n + Math.imul(O, oe) | 0, d = d + Math.imul(O, se) | 0, l = l + Math.imul(k, he) | 0, n = n + Math.imul(k, ue) | 0, n = n + Math.imul(D, he) | 0, d = d + Math.imul(D, ue) | 0, l = l + Math.imul(R, le) | 0, n = n + Math.imul(R, de) | 0, n = n + Math.imul(I, le) | 0, d = d + Math.imul(I, de) | 0, l = l + Math.imul(g, ce) | 0, n = n + Math.imul(g, pe) | 0, n = n + Math.imul(_, ce) | 0, d = d + Math.imul(_, pe) | 0;
        var Ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, X), n = Math.imul(G, J), n = n + Math.imul(Y, X) | 0, d = Math.imul(Y, J), l = l + Math.imul(V, Q) | 0, n = n + Math.imul(V, ee) | 0, n = n + Math.imul($, Q) | 0, d = d + Math.imul($, ee) | 0, l = l + Math.imul(j, te) | 0, n = n + Math.imul(j, re) | 0, n = n + Math.imul(Z, te) | 0, d = d + Math.imul(Z, re) | 0, l = l + Math.imul(W, ie) | 0, n = n + Math.imul(W, ne) | 0, n = n + Math.imul(K, ie) | 0, d = d + Math.imul(K, ne) | 0, l = l + Math.imul(z, fe) | 0, n = n + Math.imul(z, ae) | 0, n = n + Math.imul(H, fe) | 0, d = d + Math.imul(H, ae) | 0, l = l + Math.imul(F, oe) | 0, n = n + Math.imul(F, se) | 0, n = n + Math.imul(U, oe) | 0, d = d + Math.imul(U, se) | 0, l = l + Math.imul(C, he) | 0, n = n + Math.imul(C, ue) | 0, n = n + Math.imul(O, he) | 0, d = d + Math.imul(O, ue) | 0, l = l + Math.imul(k, le) | 0, n = n + Math.imul(k, de) | 0, n = n + Math.imul(D, le) | 0, d = d + Math.imul(D, de) | 0, l = l + Math.imul(R, ce) | 0, n = n + Math.imul(R, pe) | 0, n = n + Math.imul(I, ce) | 0, d = d + Math.imul(I, pe) | 0, l = l + Math.imul(g, ve) | 0, n = n + Math.imul(g, be) | 0, n = n + Math.imul(_, ve) | 0, d = d + Math.imul(_, be) | 0;
        var Ve = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, l = Math.imul(G, Q), n = Math.imul(G, ee), n = n + Math.imul(Y, Q) | 0, d = Math.imul(Y, ee), l = l + Math.imul(V, te) | 0, n = n + Math.imul(V, re) | 0, n = n + Math.imul($, te) | 0, d = d + Math.imul($, re) | 0, l = l + Math.imul(j, ie) | 0, n = n + Math.imul(j, ne) | 0, n = n + Math.imul(Z, ie) | 0, d = d + Math.imul(Z, ne) | 0, l = l + Math.imul(W, fe) | 0, n = n + Math.imul(W, ae) | 0, n = n + Math.imul(K, fe) | 0, d = d + Math.imul(K, ae) | 0, l = l + Math.imul(z, oe) | 0, n = n + Math.imul(z, se) | 0, n = n + Math.imul(H, oe) | 0, d = d + Math.imul(H, se) | 0, l = l + Math.imul(F, he) | 0, n = n + Math.imul(F, ue) | 0, n = n + Math.imul(U, he) | 0, d = d + Math.imul(U, ue) | 0, l = l + Math.imul(C, le) | 0, n = n + Math.imul(C, de) | 0, n = n + Math.imul(O, le) | 0, d = d + Math.imul(O, de) | 0, l = l + Math.imul(k, ce) | 0, n = n + Math.imul(k, pe) | 0, n = n + Math.imul(D, ce) | 0, d = d + Math.imul(D, pe) | 0, l = l + Math.imul(R, ve) | 0, n = n + Math.imul(R, be) | 0, n = n + Math.imul(I, ve) | 0, d = d + Math.imul(I, be) | 0;
        var $e = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, l = Math.imul(G, te), n = Math.imul(G, re), n = n + Math.imul(Y, te) | 0, d = Math.imul(Y, re), l = l + Math.imul(V, ie) | 0, n = n + Math.imul(V, ne) | 0, n = n + Math.imul($, ie) | 0, d = d + Math.imul($, ne) | 0, l = l + Math.imul(j, fe) | 0, n = n + Math.imul(j, ae) | 0, n = n + Math.imul(Z, fe) | 0, d = d + Math.imul(Z, ae) | 0, l = l + Math.imul(W, oe) | 0, n = n + Math.imul(W, se) | 0, n = n + Math.imul(K, oe) | 0, d = d + Math.imul(K, se) | 0, l = l + Math.imul(z, he) | 0, n = n + Math.imul(z, ue) | 0, n = n + Math.imul(H, he) | 0, d = d + Math.imul(H, ue) | 0, l = l + Math.imul(F, le) | 0, n = n + Math.imul(F, de) | 0, n = n + Math.imul(U, le) | 0, d = d + Math.imul(U, de) | 0, l = l + Math.imul(C, ce) | 0, n = n + Math.imul(C, pe) | 0, n = n + Math.imul(O, ce) | 0, d = d + Math.imul(O, pe) | 0, l = l + Math.imul(k, ve) | 0, n = n + Math.imul(k, be) | 0, n = n + Math.imul(D, ve) | 0, d = d + Math.imul(D, be) | 0;
        var Ge = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, l = Math.imul(G, ie), n = Math.imul(G, ne), n = n + Math.imul(Y, ie) | 0, d = Math.imul(Y, ne), l = l + Math.imul(V, fe) | 0, n = n + Math.imul(V, ae) | 0, n = n + Math.imul($, fe) | 0, d = d + Math.imul($, ae) | 0, l = l + Math.imul(j, oe) | 0, n = n + Math.imul(j, se) | 0, n = n + Math.imul(Z, oe) | 0, d = d + Math.imul(Z, se) | 0, l = l + Math.imul(W, he) | 0, n = n + Math.imul(W, ue) | 0, n = n + Math.imul(K, he) | 0, d = d + Math.imul(K, ue) | 0, l = l + Math.imul(z, le) | 0, n = n + Math.imul(z, de) | 0, n = n + Math.imul(H, le) | 0, d = d + Math.imul(H, de) | 0, l = l + Math.imul(F, ce) | 0, n = n + Math.imul(F, pe) | 0, n = n + Math.imul(U, ce) | 0, d = d + Math.imul(U, pe) | 0, l = l + Math.imul(C, ve) | 0, n = n + Math.imul(C, be) | 0, n = n + Math.imul(O, ve) | 0, d = d + Math.imul(O, be) | 0;
        var Ye = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(G, fe), n = Math.imul(G, ae), n = n + Math.imul(Y, fe) | 0, d = Math.imul(Y, ae), l = l + Math.imul(V, oe) | 0, n = n + Math.imul(V, se) | 0, n = n + Math.imul($, oe) | 0, d = d + Math.imul($, se) | 0, l = l + Math.imul(j, he) | 0, n = n + Math.imul(j, ue) | 0, n = n + Math.imul(Z, he) | 0, d = d + Math.imul(Z, ue) | 0, l = l + Math.imul(W, le) | 0, n = n + Math.imul(W, de) | 0, n = n + Math.imul(K, le) | 0, d = d + Math.imul(K, de) | 0, l = l + Math.imul(z, ce) | 0, n = n + Math.imul(z, pe) | 0, n = n + Math.imul(H, ce) | 0, d = d + Math.imul(H, pe) | 0, l = l + Math.imul(F, ve) | 0, n = n + Math.imul(F, be) | 0, n = n + Math.imul(U, ve) | 0, d = d + Math.imul(U, be) | 0;
        var Xe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, l = Math.imul(G, oe), n = Math.imul(G, se), n = n + Math.imul(Y, oe) | 0, d = Math.imul(Y, se), l = l + Math.imul(V, he) | 0, n = n + Math.imul(V, ue) | 0, n = n + Math.imul($, he) | 0, d = d + Math.imul($, ue) | 0, l = l + Math.imul(j, le) | 0, n = n + Math.imul(j, de) | 0, n = n + Math.imul(Z, le) | 0, d = d + Math.imul(Z, de) | 0, l = l + Math.imul(W, ce) | 0, n = n + Math.imul(W, pe) | 0, n = n + Math.imul(K, ce) | 0, d = d + Math.imul(K, pe) | 0, l = l + Math.imul(z, ve) | 0, n = n + Math.imul(z, be) | 0, n = n + Math.imul(H, ve) | 0, d = d + Math.imul(H, be) | 0;
        var Je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, l = Math.imul(G, he), n = Math.imul(G, ue), n = n + Math.imul(Y, he) | 0, d = Math.imul(Y, ue), l = l + Math.imul(V, le) | 0, n = n + Math.imul(V, de) | 0, n = n + Math.imul($, le) | 0, d = d + Math.imul($, de) | 0, l = l + Math.imul(j, ce) | 0, n = n + Math.imul(j, pe) | 0, n = n + Math.imul(Z, ce) | 0, d = d + Math.imul(Z, pe) | 0, l = l + Math.imul(W, ve) | 0, n = n + Math.imul(W, be) | 0, n = n + Math.imul(K, ve) | 0, d = d + Math.imul(K, be) | 0;
        var Qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, l = Math.imul(G, le), n = Math.imul(G, de), n = n + Math.imul(Y, le) | 0, d = Math.imul(Y, de), l = l + Math.imul(V, ce) | 0, n = n + Math.imul(V, pe) | 0, n = n + Math.imul($, ce) | 0, d = d + Math.imul($, pe) | 0, l = l + Math.imul(j, ve) | 0, n = n + Math.imul(j, be) | 0, n = n + Math.imul(Z, ve) | 0, d = d + Math.imul(Z, be) | 0;
        var et = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(G, ce), n = Math.imul(G, pe), n = n + Math.imul(Y, ce) | 0, d = Math.imul(Y, pe), l = l + Math.imul(V, ve) | 0, n = n + Math.imul(V, be) | 0, n = n + Math.imul($, ve) | 0, d = d + Math.imul($, be) | 0;
        var tt = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, l = Math.imul(G, ve), n = Math.imul(G, be), n = n + Math.imul(Y, ve) | 0, d = Math.imul(Y, be);
        var rt = (b + l | 0) + ((n & 8191) << 13) | 0;
        return b = (d + (n >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, c[0] = ft, c[1] = Be, c[2] = qe, c[3] = ze, c[4] = He, c[5] = We, c[6] = Ke, c[7] = je, c[8] = Ze, c[9] = Ve, c[10] = $e, c[11] = Ge, c[12] = Ye, c[13] = Xe, c[14] = Je, c[15] = Qe, c[16] = et, c[17] = tt, c[18] = rt, b !== 0 && (c[19] = b, h.length++), h;
      };
      Math.imul || (L = q);
      function ge(v, i, a) {
        a.negative = i.negative ^ v.negative, a.length = v.length + i.length;
        for (var h = 0, s = 0, u = 0;u < a.length - 1; u++) {
          var c = s;
          s = 0;
          for (var b = h & 67108863, l = Math.min(u, i.length - 1), n = Math.max(0, u - v.length + 1);n <= l; n++) {
            var d = u - n, w = v.words[d] | 0, g = i.words[n] | 0, _ = w * g, A = _ & 67108863;
            c = c + (_ / 67108864 | 0) | 0, A = A + b | 0, b = A & 67108863, c = c + (A >>> 26) | 0, s += c >>> 26, c &= 67108863;
          }
          a.words[u] = b, h = c, c = s;
        }
        return h !== 0 ? a.words[u] = h : a.length--, a.strip();
      }
      function _e(v, i, a) {
        var h = new N;
        return h.mulp(v, i, a);
      }
      f.prototype.mulTo = function(i, a) {
        var h, s = this.length + i.length;
        return this.length === 10 && i.length === 10 ? h = L(this, i, a) : s < 63 ? h = q(this, i, a) : s < 1024 ? h = ge(this, i, a) : h = _e(this, i, a), h;
      };
      function N(v, i) {
        this.x = v, this.y = i;
      }
      N.prototype.makeRBT = function(i) {
        for (var a = new Array(i), h = f.prototype._countBits(i) - 1, s = 0;s < i; s++)
          a[s] = this.revBin(s, h, i);
        return a;
      }, N.prototype.revBin = function(i, a, h) {
        if (i === 0 || i === h - 1)
          return i;
        for (var s = 0, u = 0;u < a; u++)
          s |= (i & 1) << a - u - 1, i >>= 1;
        return s;
      }, N.prototype.permute = function(i, a, h, s, u, c) {
        for (var b = 0;b < c; b++)
          s[b] = a[i[b]], u[b] = h[i[b]];
      }, N.prototype.transform = function(i, a, h, s, u, c) {
        this.permute(c, i, a, h, s, u);
        for (var b = 1;b < u; b <<= 1)
          for (var l = b << 1, n = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), w = 0;w < u; w += l)
            for (var g = n, _ = d, A = 0;A < b; A++) {
              var R = h[w + A], I = s[w + A], Me = h[w + A + b], k = s[w + A + b], D = g * Me - _ * k;
              k = g * k + _ * Me, Me = D, h[w + A] = R + Me, s[w + A] = I + k, h[w + A + b] = R - Me, s[w + A + b] = I - k, A !== l && (D = n * g - d * _, _ = n * _ + d * g, g = D);
            }
      }, N.prototype.guessLen13b = function(i, a) {
        var h = Math.max(a, i) | 1, s = h & 1, u = 0;
        for (h = h / 2 | 0;h; h = h >>> 1)
          u++;
        return 1 << u + 1 + s;
      }, N.prototype.conjugate = function(i, a, h) {
        if (!(h <= 1))
          for (var s = 0;s < h / 2; s++) {
            var u = i[s];
            i[s] = i[h - s - 1], i[h - s - 1] = u, u = a[s], a[s] = -a[h - s - 1], a[h - s - 1] = -u;
          }
      }, N.prototype.normalize13b = function(i, a) {
        for (var h = 0, s = 0;s < a / 2; s++) {
          var u = Math.round(i[2 * s + 1] / a) * 8192 + Math.round(i[2 * s] / a) + h;
          i[s] = u & 67108863, u < 67108864 ? h = 0 : h = u / 67108864 | 0;
        }
        return i;
      }, N.prototype.convert13b = function(i, a, h, s) {
        for (var u = 0, c = 0;c < a; c++)
          u = u + (i[c] | 0), h[2 * c] = u & 8191, u = u >>> 13, h[2 * c + 1] = u & 8191, u = u >>> 13;
        for (c = 2 * a;c < s; ++c)
          h[c] = 0;
        r(u === 0), r((u & -8192) === 0);
      }, N.prototype.stub = function(i) {
        for (var a = new Array(i), h = 0;h < i; h++)
          a[h] = 0;
        return a;
      }, N.prototype.mulp = function(i, a, h) {
        var s = 2 * this.guessLen13b(i.length, a.length), u = this.makeRBT(s), c = this.stub(s), b = new Array(s), l = new Array(s), n = new Array(s), d = new Array(s), w = new Array(s), g = new Array(s), _ = h.words;
        _.length = s, this.convert13b(i.words, i.length, b, s), this.convert13b(a.words, a.length, d, s), this.transform(b, c, l, n, s, u), this.transform(d, c, w, g, s, u);
        for (var A = 0;A < s; A++) {
          var R = l[A] * w[A] - n[A] * g[A];
          n[A] = l[A] * g[A] + n[A] * w[A], l[A] = R;
        }
        return this.conjugate(l, n, s), this.transform(l, n, _, c, s, u), this.conjugate(_, c, s), this.normalize13b(_, s), h.negative = i.negative ^ a.negative, h.length = i.length + a.length, h.strip();
      }, f.prototype.mul = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), this.mulTo(i, a);
      }, f.prototype.mulf = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), _e(this, i, a);
      }, f.prototype.imul = function(i) {
        return this.clone().mulTo(i, this);
      }, f.prototype.imuln = function(i) {
        r(typeof i == "number"), r(i < 67108864);
        for (var a = 0, h = 0;h < this.length; h++) {
          var s = (this.words[h] | 0) * i, u = (s & 67108863) + (a & 67108863);
          a >>= 26, a += s / 67108864 | 0, a += u >>> 26, this.words[h] = u & 67108863;
        }
        return a !== 0 && (this.words[h] = a, this.length++), this;
      }, f.prototype.muln = function(i) {
        return this.clone().imuln(i);
      }, f.prototype.sqr = function() {
        return this.mul(this);
      }, f.prototype.isqr = function() {
        return this.imul(this.clone());
      }, f.prototype.pow = function(i) {
        var a = B(i);
        if (a.length === 0)
          return new f(1);
        for (var h = this, s = 0;s < a.length && a[s] === 0; s++, h = h.sqr())
          ;
        if (++s < a.length)
          for (var u = h.sqr();s < a.length; s++, u = u.sqr())
            a[s] !== 0 && (h = h.mul(u));
        return h;
      }, f.prototype.iushln = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 67108863 >>> 26 - a << 26 - a, u;
        if (a !== 0) {
          var c = 0;
          for (u = 0;u < this.length; u++) {
            var b = this.words[u] & s, l = (this.words[u] | 0) - b << a;
            this.words[u] = l | c, c = b >>> 26 - a;
          }
          c && (this.words[u] = c, this.length++);
        }
        if (h !== 0) {
          for (u = this.length - 1;u >= 0; u--)
            this.words[u + h] = this.words[u];
          for (u = 0;u < h; u++)
            this.words[u] = 0;
          this.length += h;
        }
        return this.strip();
      }, f.prototype.ishln = function(i) {
        return r(this.negative === 0), this.iushln(i);
      }, f.prototype.iushrn = function(i, a, h) {
        r(typeof i == "number" && i >= 0);
        var s;
        a ? s = (a - a % 26) / 26 : s = 0;
        var u = i % 26, c = Math.min((i - u) / 26, this.length), b = 67108863 ^ 67108863 >>> u << u, l = h;
        if (s -= c, s = Math.max(0, s), l) {
          for (var n = 0;n < c; n++)
            l.words[n] = this.words[n];
          l.length = c;
        }
        if (c !== 0)
          if (this.length > c)
            for (this.length -= c, n = 0;n < this.length; n++)
              this.words[n] = this.words[n + c];
          else
            this.words[0] = 0, this.length = 1;
        var d = 0;
        for (n = this.length - 1;n >= 0 && (d !== 0 || n >= s); n--) {
          var w = this.words[n] | 0;
          this.words[n] = d << 26 - u | w >>> u, d = w & b;
        }
        return l && d !== 0 && (l.words[l.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, f.prototype.ishrn = function(i, a, h) {
        return r(this.negative === 0), this.iushrn(i, a, h);
      }, f.prototype.shln = function(i) {
        return this.clone().ishln(i);
      }, f.prototype.ushln = function(i) {
        return this.clone().iushln(i);
      }, f.prototype.shrn = function(i) {
        return this.clone().ishrn(i);
      }, f.prototype.ushrn = function(i) {
        return this.clone().iushrn(i);
      }, f.prototype.testn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return false;
        var u = this.words[h];
        return !!(u & s);
      }, f.prototype.imaskn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26;
        if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h)
          return this;
        if (a !== 0 && h++, this.length = Math.min(h, this.length), a !== 0) {
          var s = 67108863 ^ 67108863 >>> a << a;
          this.words[this.length - 1] &= s;
        }
        return this.strip();
      }, f.prototype.maskn = function(i) {
        return this.clone().imaskn(i);
      }, f.prototype.iaddn = function(i) {
        return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
      }, f.prototype._iaddn = function(i) {
        this.words[0] += i;
        for (var a = 0;a < this.length && this.words[a] >= 67108864; a++)
          this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
        return this.length = Math.max(this.length, a + 1), this;
      }, f.prototype.isubn = function(i) {
        if (r(typeof i == "number"), r(i < 67108864), i < 0)
          return this.iaddn(-i);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(i), this.negative = 1, this;
        if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var a = 0;a < this.length && this.words[a] < 0; a++)
            this.words[a] += 67108864, this.words[a + 1] -= 1;
        return this.strip();
      }, f.prototype.addn = function(i) {
        return this.clone().iaddn(i);
      }, f.prototype.subn = function(i) {
        return this.clone().isubn(i);
      }, f.prototype.iabs = function() {
        return this.negative = 0, this;
      }, f.prototype.abs = function() {
        return this.clone().iabs();
      }, f.prototype._ishlnsubmul = function(i, a, h) {
        var s = i.length + h, u;
        this._expand(s);
        var c, b = 0;
        for (u = 0;u < i.length; u++) {
          c = (this.words[u + h] | 0) + b;
          var l = (i.words[u] | 0) * a;
          c -= l & 67108863, b = (c >> 26) - (l / 67108864 | 0), this.words[u + h] = c & 67108863;
        }
        for (;u < this.length - h; u++)
          c = (this.words[u + h] | 0) + b, b = c >> 26, this.words[u + h] = c & 67108863;
        if (b === 0)
          return this.strip();
        for (r(b === -1), b = 0, u = 0;u < this.length; u++)
          c = -(this.words[u] | 0) + b, b = c >> 26, this.words[u] = c & 67108863;
        return this.negative = 1, this.strip();
      }, f.prototype._wordDiv = function(i, a) {
        var h = this.length - i.length, s = this.clone(), u = i, c = u.words[u.length - 1] | 0, b = this._countBits(c);
        h = 26 - b, h !== 0 && (u = u.ushln(h), s.iushln(h), c = u.words[u.length - 1] | 0);
        var l = s.length - u.length, n;
        if (a !== "mod") {
          n = new f(null), n.length = l + 1, n.words = new Array(n.length);
          for (var d = 0;d < n.length; d++)
            n.words[d] = 0;
        }
        var w = s.clone()._ishlnsubmul(u, 1, l);
        w.negative === 0 && (s = w, n && (n.words[l] = 1));
        for (var g = l - 1;g >= 0; g--) {
          var _ = (s.words[u.length + g] | 0) * 67108864 + (s.words[u.length + g - 1] | 0);
          for (_ = Math.min(_ / c | 0, 67108863), s._ishlnsubmul(u, _, g);s.negative !== 0; )
            _--, s.negative = 0, s._ishlnsubmul(u, 1, g), s.isZero() || (s.negative ^= 1);
          n && (n.words[g] = _);
        }
        return n && n.strip(), s.strip(), a !== "div" && h !== 0 && s.iushrn(h), { div: n || null, mod: s };
      }, f.prototype.divmod = function(i, a, h) {
        if (r(!i.isZero()), this.isZero())
          return { div: new f(0), mod: new f(0) };
        var s, u, c;
        return this.negative !== 0 && i.negative === 0 ? (c = this.neg().divmod(i, a), a !== "mod" && (s = c.div.neg()), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.iadd(i)), { div: s, mod: u }) : this.negative === 0 && i.negative !== 0 ? (c = this.divmod(i.neg(), a), a !== "mod" && (s = c.div.neg()), { div: s, mod: c.mod }) : (this.negative & i.negative) !== 0 ? (c = this.neg().divmod(i.neg(), a), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.isub(i)), { div: c.div, mod: u }) : i.length > this.length || this.cmp(i) < 0 ? { div: new f(0), mod: this } : i.length === 1 ? a === "div" ? { div: this.divn(i.words[0]), mod: null } : a === "mod" ? { div: null, mod: new f(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new f(this.modn(i.words[0])) } : this._wordDiv(i, a);
      }, f.prototype.div = function(i) {
        return this.divmod(i, "div", false).div;
      }, f.prototype.mod = function(i) {
        return this.divmod(i, "mod", false).mod;
      }, f.prototype.umod = function(i) {
        return this.divmod(i, "mod", true).mod;
      }, f.prototype.divRound = function(i) {
        var a = this.divmod(i);
        if (a.mod.isZero())
          return a.div;
        var h = a.div.negative !== 0 ? a.mod.isub(i) : a.mod, s = i.ushrn(1), u = i.andln(1), c = h.cmp(s);
        return c < 0 || u === 1 && c === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
      }, f.prototype.modn = function(i) {
        r(i <= 67108863);
        for (var a = (1 << 26) % i, h = 0, s = this.length - 1;s >= 0; s--)
          h = (a * h + (this.words[s] | 0)) % i;
        return h;
      }, f.prototype.idivn = function(i) {
        r(i <= 67108863);
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = (this.words[h] | 0) + a * 67108864;
          this.words[h] = s / i | 0, a = s % i;
        }
        return this.strip();
      }, f.prototype.divn = function(i) {
        return this.clone().idivn(i);
      }, f.prototype.egcd = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = new f(0), b = new f(1), l = 0;a.isEven() && h.isEven(); )
          a.iushrn(1), h.iushrn(1), ++l;
        for (var n = h.clone(), d = a.clone();!a.isZero(); ) {
          for (var w = 0, g = 1;(a.words[0] & g) === 0 && w < 26; ++w, g <<= 1)
            ;
          if (w > 0)
            for (a.iushrn(w);w-- > 0; )
              (s.isOdd() || u.isOdd()) && (s.iadd(n), u.isub(d)), s.iushrn(1), u.iushrn(1);
          for (var _ = 0, A = 1;(h.words[0] & A) === 0 && _ < 26; ++_, A <<= 1)
            ;
          if (_ > 0)
            for (h.iushrn(_);_-- > 0; )
              (c.isOdd() || b.isOdd()) && (c.iadd(n), b.isub(d)), c.iushrn(1), b.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(c), u.isub(b)) : (h.isub(a), c.isub(s), b.isub(u));
        }
        return { a: c, b, gcd: h.iushln(l) };
      }, f.prototype._invmp = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = h.clone();a.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var b = 0, l = 1;(a.words[0] & l) === 0 && b < 26; ++b, l <<= 1)
            ;
          if (b > 0)
            for (a.iushrn(b);b-- > 0; )
              s.isOdd() && s.iadd(c), s.iushrn(1);
          for (var n = 0, d = 1;(h.words[0] & d) === 0 && n < 26; ++n, d <<= 1)
            ;
          if (n > 0)
            for (h.iushrn(n);n-- > 0; )
              u.isOdd() && u.iadd(c), u.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(u)) : (h.isub(a), u.isub(s));
        }
        var w;
        return a.cmpn(1) === 0 ? w = s : w = u, w.cmpn(0) < 0 && w.iadd(i), w;
      }, f.prototype.gcd = function(i) {
        if (this.isZero())
          return i.abs();
        if (i.isZero())
          return this.abs();
        var a = this.clone(), h = i.clone();
        a.negative = 0, h.negative = 0;
        for (var s = 0;a.isEven() && h.isEven(); s++)
          a.iushrn(1), h.iushrn(1);
        do {
          for (;a.isEven(); )
            a.iushrn(1);
          for (;h.isEven(); )
            h.iushrn(1);
          var u = a.cmp(h);
          if (u < 0) {
            var c = a;
            a = h, h = c;
          } else if (u === 0 || h.cmpn(1) === 0)
            break;
          a.isub(h);
        } while (true);
        return h.iushln(s);
      }, f.prototype.invm = function(i) {
        return this.egcd(i).a.umod(i);
      }, f.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, f.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, f.prototype.andln = function(i) {
        return this.words[0] & i;
      }, f.prototype.bincn = function(i) {
        r(typeof i == "number");
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return this._expand(h + 1), this.words[h] |= s, this;
        for (var u = s, c = h;u !== 0 && c < this.length; c++) {
          var b = this.words[c] | 0;
          b += u, u = b >>> 26, b &= 67108863, this.words[c] = b;
        }
        return u !== 0 && (this.words[c] = u, this.length++), this;
      }, f.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, f.prototype.cmpn = function(i) {
        var a = i < 0;
        if (this.negative !== 0 && !a)
          return -1;
        if (this.negative === 0 && a)
          return 1;
        this.strip();
        var h;
        if (this.length > 1)
          h = 1;
        else {
          a && (i = -i), r(i <= 67108863, "Number is too big");
          var s = this.words[0] | 0;
          h = s === i ? 0 : s < i ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }, f.prototype.cmp = function(i) {
        if (this.negative !== 0 && i.negative === 0)
          return -1;
        if (this.negative === 0 && i.negative !== 0)
          return 1;
        var a = this.ucmp(i);
        return this.negative !== 0 ? -a | 0 : a;
      }, f.prototype.ucmp = function(i) {
        if (this.length > i.length)
          return 1;
        if (this.length < i.length)
          return -1;
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = this.words[h] | 0, u = i.words[h] | 0;
          if (s !== u) {
            s < u ? a = -1 : s > u && (a = 1);
            break;
          }
        }
        return a;
      }, f.prototype.gtn = function(i) {
        return this.cmpn(i) === 1;
      }, f.prototype.gt = function(i) {
        return this.cmp(i) === 1;
      }, f.prototype.gten = function(i) {
        return this.cmpn(i) >= 0;
      }, f.prototype.gte = function(i) {
        return this.cmp(i) >= 0;
      }, f.prototype.ltn = function(i) {
        return this.cmpn(i) === -1;
      }, f.prototype.lt = function(i) {
        return this.cmp(i) === -1;
      }, f.prototype.lten = function(i) {
        return this.cmpn(i) <= 0;
      }, f.prototype.lte = function(i) {
        return this.cmp(i) <= 0;
      }, f.prototype.eqn = function(i) {
        return this.cmpn(i) === 0;
      }, f.prototype.eq = function(i) {
        return this.cmp(i) === 0;
      }, f.red = function(i) {
        return new P(i);
      }, f.prototype.toRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
      }, f.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, f.prototype._forceRed = function(i) {
        return this.red = i, this;
      }, f.prototype.forceRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
      }, f.prototype.redAdd = function(i) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
      }, f.prototype.redIAdd = function(i) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
      }, f.prototype.redSub = function(i) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
      }, f.prototype.redISub = function(i) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
      }, f.prototype.redShl = function(i) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
      }, f.prototype.redMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
      }, f.prototype.redIMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
      }, f.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, f.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, f.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, f.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, f.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, f.prototype.redPow = function(i) {
        return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
      };
      var we = { k256: null, p224: null, p192: null, p25519: null };
      function ye(v, i) {
        this.name = v, this.p = new f(i, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      ye.prototype._tmp = function() {
        var i = new f(null);
        return i.words = new Array(Math.ceil(this.n / 13)), i;
      }, ye.prototype.ireduce = function(i) {
        var a = i, h;
        do
          this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), h = a.bitLength();
        while (h > this.n);
        var s = h < this.n ? -1 : a.ucmp(this.p);
        return s === 0 ? (a.words[0] = 0, a.length = 1) : s > 0 ? a.isub(this.p) : a.strip !== undefined ? a.strip() : a._strip(), a;
      }, ye.prototype.split = function(i, a) {
        i.iushrn(this.n, 0, a);
      }, ye.prototype.imulK = function(i) {
        return i.imul(this.k);
      };
      function xe() {
        ye.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      o(xe, ye), xe.prototype.split = function(i, a) {
        for (var h = 4194303, s = Math.min(i.length, 9), u = 0;u < s; u++)
          a.words[u] = i.words[u];
        if (a.length = s, i.length <= 9) {
          i.words[0] = 0, i.length = 1;
          return;
        }
        var c = i.words[9];
        for (a.words[a.length++] = c & h, u = 10;u < i.length; u++) {
          var b = i.words[u] | 0;
          i.words[u - 10] = (b & h) << 4 | c >>> 22, c = b;
        }
        c >>>= 22, i.words[u - 10] = c, c === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
      }, xe.prototype.imulK = function(i) {
        i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = i.words[h] | 0;
          a += s * 977, i.words[h] = a & 67108863, a = s * 64 + (a / 67108864 | 0);
        }
        return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
      };
      function Re() {
        ye.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      o(Re, ye);
      function Ee() {
        ye.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      o(Ee, ye);
      function Ae() {
        ye.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      o(Ae, ye), Ae.prototype.imulK = function(i) {
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = (i.words[h] | 0) * 19 + a, u = s & 67108863;
          s >>>= 26, i.words[h] = u, a = s;
        }
        return a !== 0 && (i.words[i.length++] = a), i;
      }, f._prime = function(i) {
        if (we[i])
          return we[i];
        var a;
        if (i === "k256")
          a = new xe;
        else if (i === "p224")
          a = new Re;
        else if (i === "p192")
          a = new Ee;
        else if (i === "p25519")
          a = new Ae;
        else
          throw new Error("Unknown prime " + i);
        return we[i] = a, a;
      };
      function P(v) {
        if (typeof v == "string") {
          var i = f._prime(v);
          this.m = i.p, this.prime = i;
        } else
          r(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
      }
      P.prototype._verify1 = function(i) {
        r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
      }, P.prototype._verify2 = function(i, a) {
        r((i.negative | a.negative) === 0, "red works only with positives"), r(i.red && i.red === a.red, "red works only with red numbers");
      }, P.prototype.imod = function(i) {
        return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
      }, P.prototype.neg = function(i) {
        return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
      }, P.prototype.add = function(i, a) {
        this._verify2(i, a);
        var h = i.add(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }, P.prototype.iadd = function(i, a) {
        this._verify2(i, a);
        var h = i.iadd(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }, P.prototype.sub = function(i, a) {
        this._verify2(i, a);
        var h = i.sub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }, P.prototype.isub = function(i, a) {
        this._verify2(i, a);
        var h = i.isub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }, P.prototype.shl = function(i, a) {
        return this._verify1(i), this.imod(i.ushln(a));
      }, P.prototype.imul = function(i, a) {
        return this._verify2(i, a), this.imod(i.imul(a));
      }, P.prototype.mul = function(i, a) {
        return this._verify2(i, a), this.imod(i.mul(a));
      }, P.prototype.isqr = function(i) {
        return this.imul(i, i.clone());
      }, P.prototype.sqr = function(i) {
        return this.mul(i, i);
      }, P.prototype.sqrt = function(i) {
        if (i.isZero())
          return i.clone();
        var a = this.m.andln(3);
        if (r(a % 2 === 1), a === 3) {
          var h = this.m.add(new f(1)).iushrn(2);
          return this.pow(i, h);
        }
        for (var s = this.m.subn(1), u = 0;!s.isZero() && s.andln(1) === 0; )
          u++, s.iushrn(1);
        r(!s.isZero());
        var c = new f(1).toRed(this), b = c.redNeg(), l = this.m.subn(1).iushrn(1), n = this.m.bitLength();
        for (n = new f(2 * n * n).toRed(this);this.pow(n, l).cmp(b) !== 0; )
          n.redIAdd(b);
        for (var d = this.pow(n, s), w = this.pow(i, s.addn(1).iushrn(1)), g = this.pow(i, s), _ = u;g.cmp(c) !== 0; ) {
          for (var A = g, R = 0;A.cmp(c) !== 0; R++)
            A = A.redSqr();
          r(R < _);
          var I = this.pow(d, new f(1).iushln(_ - R - 1));
          w = w.redMul(I), d = I.redSqr(), g = g.redMul(d), _ = R;
        }
        return w;
      }, P.prototype.invm = function(i) {
        var a = i._invmp(this.m);
        return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
      }, P.prototype.pow = function(i, a) {
        if (a.isZero())
          return new f(1).toRed(this);
        if (a.cmpn(1) === 0)
          return i.clone();
        var h = 4, s = new Array(1 << h);
        s[0] = new f(1).toRed(this), s[1] = i;
        for (var u = 2;u < s.length; u++)
          s[u] = this.mul(s[u - 1], i);
        var c = s[0], b = 0, l = 0, n = a.bitLength() % 26;
        for (n === 0 && (n = 26), u = a.length - 1;u >= 0; u--) {
          for (var d = a.words[u], w = n - 1;w >= 0; w--) {
            var g = d >> w & 1;
            if (c !== s[0] && (c = this.sqr(c)), g === 0 && b === 0) {
              l = 0;
              continue;
            }
            b <<= 1, b |= g, l++, !(l !== h && (u !== 0 || w !== 0)) && (c = this.mul(c, s[b]), l = 0, b = 0);
          }
          n = 26;
        }
        return c;
      }, P.prototype.convertTo = function(i) {
        var a = i.umod(this.m);
        return a === i ? a.clone() : a;
      }, P.prototype.convertFrom = function(i) {
        var a = i.clone();
        return a.red = null, a;
      }, f.mont = function(i) {
        return new Se(i);
      };
      function Se(v) {
        P.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      o(Se, P), Se.prototype.convertTo = function(i) {
        return this.imod(i.ushln(this.shift));
      }, Se.prototype.convertFrom = function(i) {
        var a = this.imod(i.mul(this.rinv));
        return a.red = null, a;
      }, Se.prototype.imul = function(i, a) {
        if (i.isZero() || a.isZero())
          return i.words[0] = 0, i.length = 1, i;
        var h = i.imul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.mul = function(i, a) {
        if (i.isZero() || a.isZero())
          return new f(0)._forceRed(this);
        var h = i.mul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.invm = function(i) {
        var a = this.imod(i._invmp(this.m).mul(this.r2));
        return a._forceRed(this);
      };
    })(typeof Gu > "u" || Gu, $m);
  });
  Ym = T((Gm, Xu) => {
    (function(t, e) {
      function r(v, i) {
        if (!v)
          throw new Error(i || "Assertion failed");
      }
      function o(v, i) {
        v.super_ = i;
        var a = function() {
        };
        a.prototype = i.prototype, v.prototype = new a, v.prototype.constructor = v;
      }
      function f(v, i, a) {
        if (f.isBN(v))
          return v;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((i === "le" || i === "be") && (a = i, i = 10), this._init(v || 0, i || 10, a || "be"));
      }
      typeof t == "object" ? t.exports = f : e.BN = f, f.BN = f, f.wordSize = 26;
      var p;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? p = window.Buffer : p = ji().Buffer;
      } catch {
      }
      f.isBN = function(i) {
        return i instanceof f ? true : i !== null && typeof i == "object" && i.constructor.wordSize === f.wordSize && Array.isArray(i.words);
      }, f.max = function(i, a) {
        return i.cmp(a) > 0 ? i : a;
      }, f.min = function(i, a) {
        return i.cmp(a) < 0 ? i : a;
      }, f.prototype._init = function(i, a, h) {
        if (typeof i == "number")
          return this._initNumber(i, a, h);
        if (typeof i == "object")
          return this._initArray(i, a, h);
        a === "hex" && (a = 16), r(a === (a | 0) && a >= 2 && a <= 36), i = i.toString().replace(/\s+/g, "");
        var s = 0;
        i[0] === "-" && (s++, this.negative = 1), s < i.length && (a === 16 ? this._parseHex(i, s, h) : (this._parseBase(i, a, s), h === "le" && this._initArray(this.toArray(), a, h)));
      }, f.prototype._initNumber = function(i, a, h) {
        i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [i & 67108863, i / 67108864 & 67108863], this.length = 2) : (r(i < 9007199254740992), this.words = [i & 67108863, i / 67108864 & 67108863, 1], this.length = 3), h === "le" && this._initArray(this.toArray(), a, h);
      }, f.prototype._initArray = function(i, a, h) {
        if (r(typeof i.length == "number"), i.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u, c, b = 0;
        if (h === "be")
          for (s = i.length - 1, u = 0;s >= 0; s -= 3)
            c = i[s] | i[s - 1] << 8 | i[s - 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        else if (h === "le")
          for (s = 0, u = 0;s < i.length; s += 3)
            c = i[s] | i[s + 1] << 8 | i[s + 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        return this.strip();
      };
      function m(v, i) {
        var a = v.charCodeAt(i);
        return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
      }
      function y(v, i, a) {
        var h = m(v, a);
        return a - 1 >= i && (h |= m(v, a - 1) << 4), h;
      }
      f.prototype._parseHex = function(i, a, h) {
        this.length = Math.ceil((i.length - a) / 6), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u = 0, c = 0, b;
        if (h === "be")
          for (s = i.length - 1;s >= a; s -= 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        else {
          var l = i.length - a;
          for (s = l % 2 === 0 ? a + 1 : a;s < i.length; s += 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        }
        this.strip();
      };
      function M(v, i, a, h) {
        for (var s = 0, u = Math.min(v.length, a), c = i;c < u; c++) {
          var b = v.charCodeAt(c) - 48;
          s *= h, b >= 49 ? s += b - 49 + 10 : b >= 17 ? s += b - 17 + 10 : s += b;
        }
        return s;
      }
      f.prototype._parseBase = function(i, a, h) {
        this.words = [0], this.length = 1;
        for (var s = 0, u = 1;u <= 67108863; u *= a)
          s++;
        s--, u = u / a | 0;
        for (var c = i.length - h, b = c % s, l = Math.min(c, c - b) + h, n = 0, d = h;d < l; d += s)
          n = M(i, d, d + s, a), this.imuln(u), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        if (b !== 0) {
          var w = 1;
          for (n = M(i, d, i.length, a), d = 0;d < b; d++)
            w *= a;
          this.imuln(w), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        }
        this.strip();
      }, f.prototype.copy = function(i) {
        i.words = new Array(this.length);
        for (var a = 0;a < this.length; a++)
          i.words[a] = this.words[a];
        i.length = this.length, i.negative = this.negative, i.red = this.red;
      }, f.prototype.clone = function() {
        var i = new f(null);
        return this.copy(i), i;
      }, f.prototype._expand = function(i) {
        for (;this.length < i; )
          this.words[this.length++] = 0;
        return this;
      }, f.prototype.strip = function() {
        for (;this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, f.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, f.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      f.prototype.toString = function(i, a) {
        i = i || 10, a = a | 0 || 1;
        var h;
        if (i === 16 || i === "hex") {
          h = "";
          for (var s = 0, u = 0, c = 0;c < this.length; c++) {
            var b = this.words[c], l = ((b << s | u) & 16777215).toString(16);
            u = b >>> 24 - s & 16777215, u !== 0 || c !== this.length - 1 ? h = x[6 - l.length] + l + h : h = l + h, s += 2, s >= 26 && (s -= 26, c--);
          }
          for (u !== 0 && (h = u.toString(16) + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        if (i === (i | 0) && i >= 2 && i <= 36) {
          var n = S[i], d = E[i];
          h = "";
          var w = this.clone();
          for (w.negative = 0;!w.isZero(); ) {
            var g = w.modn(d).toString(i);
            w = w.idivn(d), w.isZero() ? h = g + h : h = x[n - g.length] + g + h;
          }
          for (this.isZero() && (h = "0" + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        r(false, "Base should be between 2 and 36");
      }, f.prototype.toNumber = function() {
        var i = this.words[0];
        return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
      }, f.prototype.toJSON = function() {
        return this.toString(16);
      }, f.prototype.toBuffer = function(i, a) {
        return r(typeof p < "u"), this.toArrayLike(p, i, a);
      }, f.prototype.toArray = function(i, a) {
        return this.toArrayLike(Array, i, a);
      }, f.prototype.toArrayLike = function(i, a, h) {
        var s = this.byteLength(), u = h || Math.max(1, s);
        r(s <= u, "byte array longer than desired length"), r(u > 0, "Requested array length <= 0"), this.strip();
        var c = a === "le", b = new i(u), l, n, d = this.clone();
        if (c) {
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[n] = l;
          for (;n < u; n++)
            b[n] = 0;
        } else {
          for (n = 0;n < u - s; n++)
            b[n] = 0;
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[u - n - 1] = l;
        }
        return b;
      }, Math.clz32 ? f.prototype._countBits = function(i) {
        return 32 - Math.clz32(i);
      } : f.prototype._countBits = function(i) {
        var a = i, h = 0;
        return a >= 4096 && (h += 13, a >>>= 13), a >= 64 && (h += 7, a >>>= 7), a >= 8 && (h += 4, a >>>= 4), a >= 2 && (h += 2, a >>>= 2), h + a;
      }, f.prototype._zeroBits = function(i) {
        if (i === 0)
          return 26;
        var a = i, h = 0;
        return (a & 8191) === 0 && (h += 13, a >>>= 13), (a & 127) === 0 && (h += 7, a >>>= 7), (a & 15) === 0 && (h += 4, a >>>= 4), (a & 3) === 0 && (h += 2, a >>>= 2), (a & 1) === 0 && h++, h;
      }, f.prototype.bitLength = function() {
        var i = this.words[this.length - 1], a = this._countBits(i);
        return (this.length - 1) * 26 + a;
      };
      function B(v) {
        for (var i = new Array(v.bitLength()), a = 0;a < i.length; a++) {
          var h = a / 26 | 0, s = a % 26;
          i[a] = (v.words[h] & 1 << s) >>> s;
        }
        return i;
      }
      f.prototype.zeroBits = function() {
        if (this.isZero())
          return 0;
        for (var i = 0, a = 0;a < this.length; a++) {
          var h = this._zeroBits(this.words[a]);
          if (i += h, h !== 26)
            break;
        }
        return i;
      }, f.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, f.prototype.toTwos = function(i) {
        return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
      }, f.prototype.fromTwos = function(i) {
        return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
      }, f.prototype.isNeg = function() {
        return this.negative !== 0;
      }, f.prototype.neg = function() {
        return this.clone().ineg();
      }, f.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, f.prototype.iuor = function(i) {
        for (;this.length < i.length; )
          this.words[this.length++] = 0;
        for (var a = 0;a < i.length; a++)
          this.words[a] = this.words[a] | i.words[a];
        return this.strip();
      }, f.prototype.ior = function(i) {
        return r((this.negative | i.negative) === 0), this.iuor(i);
      }, f.prototype.or = function(i) {
        return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
      }, f.prototype.uor = function(i) {
        return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
      }, f.prototype.iuand = function(i) {
        var a;
        this.length > i.length ? a = i : a = this;
        for (var h = 0;h < a.length; h++)
          this.words[h] = this.words[h] & i.words[h];
        return this.length = a.length, this.strip();
      }, f.prototype.iand = function(i) {
        return r((this.negative | i.negative) === 0), this.iuand(i);
      }, f.prototype.and = function(i) {
        return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
      }, f.prototype.uand = function(i) {
        return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
      }, f.prototype.iuxor = function(i) {
        var a, h;
        this.length > i.length ? (a = this, h = i) : (a = i, h = this);
        for (var s = 0;s < h.length; s++)
          this.words[s] = a.words[s] ^ h.words[s];
        if (this !== a)
          for (;s < a.length; s++)
            this.words[s] = a.words[s];
        return this.length = a.length, this.strip();
      }, f.prototype.ixor = function(i) {
        return r((this.negative | i.negative) === 0), this.iuxor(i);
      }, f.prototype.xor = function(i) {
        return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
      }, f.prototype.uxor = function(i) {
        return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
      }, f.prototype.inotn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = Math.ceil(i / 26) | 0, h = i % 26;
        this._expand(a), h > 0 && a--;
        for (var s = 0;s < a; s++)
          this.words[s] = ~this.words[s] & 67108863;
        return h > 0 && (this.words[s] = ~this.words[s] & 67108863 >> 26 - h), this.strip();
      }, f.prototype.notn = function(i) {
        return this.clone().inotn(i);
      }, f.prototype.setn = function(i, a) {
        r(typeof i == "number" && i >= 0);
        var h = i / 26 | 0, s = i % 26;
        return this._expand(h + 1), a ? this.words[h] = this.words[h] | 1 << s : this.words[h] = this.words[h] & ~(1 << s), this.strip();
      }, f.prototype.iadd = function(i) {
        var a;
        if (this.negative !== 0 && i.negative === 0)
          return this.negative = 0, a = this.isub(i), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && i.negative !== 0)
          return i.negative = 0, a = this.isub(i), i.negative = 1, a._normSign();
        var h, s;
        this.length > i.length ? (h = this, s = i) : (h = i, s = this);
        for (var u = 0, c = 0;c < s.length; c++)
          a = (h.words[c] | 0) + (s.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        for (;u !== 0 && c < h.length; c++)
          a = (h.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        if (this.length = h.length, u !== 0)
          this.words[this.length] = u, this.length++;
        else if (h !== this)
          for (;c < h.length; c++)
            this.words[c] = h.words[c];
        return this;
      }, f.prototype.add = function(i) {
        var a;
        return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, a = this.sub(i), i.negative ^= 1, a) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = i.sub(this), this.negative = 1, a) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
      }, f.prototype.isub = function(i) {
        if (i.negative !== 0) {
          i.negative = 0;
          var a = this.iadd(i);
          return i.negative = 1, a._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
        var h = this.cmp(i);
        if (h === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var s, u;
        h > 0 ? (s = this, u = i) : (s = i, u = this);
        for (var c = 0, b = 0;b < u.length; b++)
          a = (s.words[b] | 0) - (u.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        for (;c !== 0 && b < s.length; b++)
          a = (s.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        if (c === 0 && b < s.length && s !== this)
          for (;b < s.length; b++)
            this.words[b] = s.words[b];
        return this.length = Math.max(this.length, b), s !== this && (this.negative = 1), this.strip();
      }, f.prototype.sub = function(i) {
        return this.clone().isub(i);
      };
      function q(v, i, a) {
        a.negative = i.negative ^ v.negative;
        var h = v.length + i.length | 0;
        a.length = h, h = h - 1 | 0;
        var s = v.words[0] | 0, u = i.words[0] | 0, c = s * u, b = c & 67108863, l = c / 67108864 | 0;
        a.words[0] = b;
        for (var n = 1;n < h; n++) {
          for (var d = l >>> 26, w = l & 67108863, g = Math.min(n, i.length - 1), _ = Math.max(0, n - v.length + 1);_ <= g; _++) {
            var A = n - _ | 0;
            s = v.words[A] | 0, u = i.words[_] | 0, c = s * u + w, d += c / 67108864 | 0, w = c & 67108863;
          }
          a.words[n] = w | 0, l = d | 0;
        }
        return l !== 0 ? a.words[n] = l | 0 : a.length--, a.strip();
      }
      var L = function(i, a, h) {
        var s = i.words, u = a.words, c = h.words, b = 0, l, n, d, w = s[0] | 0, g = w & 8191, _ = w >>> 13, A = s[1] | 0, R = A & 8191, I = A >>> 13, Me = s[2] | 0, k = Me & 8191, D = Me >>> 13, nt = s[3] | 0, C = nt & 8191, O = nt >>> 13, vt = s[4] | 0, F = vt & 8191, U = vt >>> 13, bt = s[5] | 0, z = bt & 8191, H = bt >>> 13, mt = s[6] | 0, W = mt & 8191, K = mt >>> 13, gt = s[7] | 0, j = gt & 8191, Z = gt >>> 13, yt = s[8] | 0, V = yt & 8191, $ = yt >>> 13, wt = s[9] | 0, G = wt & 8191, Y = wt >>> 13, Mt = u[0] | 0, X = Mt & 8191, J = Mt >>> 13, _t = u[1] | 0, Q = _t & 8191, ee = _t >>> 13, xt = u[2] | 0, te = xt & 8191, re = xt >>> 13, St = u[3] | 0, ie = St & 8191, ne = St >>> 13, Et = u[4] | 0, fe = Et & 8191, ae = Et >>> 13, At = u[5] | 0, oe = At & 8191, se = At >>> 13, Rt = u[6] | 0, he = Rt & 8191, ue = Rt >>> 13, Bt = u[7] | 0, le = Bt & 8191, de = Bt >>> 13, qt = u[8] | 0, ce = qt & 8191, pe = qt >>> 13, It = u[9] | 0, ve = It & 8191, be = It >>> 13;
        h.negative = i.negative ^ a.negative, h.length = 19, l = Math.imul(g, X), n = Math.imul(g, J), n = n + Math.imul(_, X) | 0, d = Math.imul(_, J);
        var ft = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, l = Math.imul(R, X), n = Math.imul(R, J), n = n + Math.imul(I, X) | 0, d = Math.imul(I, J), l = l + Math.imul(g, Q) | 0, n = n + Math.imul(g, ee) | 0, n = n + Math.imul(_, Q) | 0, d = d + Math.imul(_, ee) | 0;
        var Be = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, l = Math.imul(k, X), n = Math.imul(k, J), n = n + Math.imul(D, X) | 0, d = Math.imul(D, J), l = l + Math.imul(R, Q) | 0, n = n + Math.imul(R, ee) | 0, n = n + Math.imul(I, Q) | 0, d = d + Math.imul(I, ee) | 0, l = l + Math.imul(g, te) | 0, n = n + Math.imul(g, re) | 0, n = n + Math.imul(_, te) | 0, d = d + Math.imul(_, re) | 0;
        var qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, l = Math.imul(C, X), n = Math.imul(C, J), n = n + Math.imul(O, X) | 0, d = Math.imul(O, J), l = l + Math.imul(k, Q) | 0, n = n + Math.imul(k, ee) | 0, n = n + Math.imul(D, Q) | 0, d = d + Math.imul(D, ee) | 0, l = l + Math.imul(R, te) | 0, n = n + Math.imul(R, re) | 0, n = n + Math.imul(I, te) | 0, d = d + Math.imul(I, re) | 0, l = l + Math.imul(g, ie) | 0, n = n + Math.imul(g, ne) | 0, n = n + Math.imul(_, ie) | 0, d = d + Math.imul(_, ne) | 0;
        var ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, l = Math.imul(F, X), n = Math.imul(F, J), n = n + Math.imul(U, X) | 0, d = Math.imul(U, J), l = l + Math.imul(C, Q) | 0, n = n + Math.imul(C, ee) | 0, n = n + Math.imul(O, Q) | 0, d = d + Math.imul(O, ee) | 0, l = l + Math.imul(k, te) | 0, n = n + Math.imul(k, re) | 0, n = n + Math.imul(D, te) | 0, d = d + Math.imul(D, re) | 0, l = l + Math.imul(R, ie) | 0, n = n + Math.imul(R, ne) | 0, n = n + Math.imul(I, ie) | 0, d = d + Math.imul(I, ne) | 0, l = l + Math.imul(g, fe) | 0, n = n + Math.imul(g, ae) | 0, n = n + Math.imul(_, fe) | 0, d = d + Math.imul(_, ae) | 0;
        var He = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, l = Math.imul(z, X), n = Math.imul(z, J), n = n + Math.imul(H, X) | 0, d = Math.imul(H, J), l = l + Math.imul(F, Q) | 0, n = n + Math.imul(F, ee) | 0, n = n + Math.imul(U, Q) | 0, d = d + Math.imul(U, ee) | 0, l = l + Math.imul(C, te) | 0, n = n + Math.imul(C, re) | 0, n = n + Math.imul(O, te) | 0, d = d + Math.imul(O, re) | 0, l = l + Math.imul(k, ie) | 0, n = n + Math.imul(k, ne) | 0, n = n + Math.imul(D, ie) | 0, d = d + Math.imul(D, ne) | 0, l = l + Math.imul(R, fe) | 0, n = n + Math.imul(R, ae) | 0, n = n + Math.imul(I, fe) | 0, d = d + Math.imul(I, ae) | 0, l = l + Math.imul(g, oe) | 0, n = n + Math.imul(g, se) | 0, n = n + Math.imul(_, oe) | 0, d = d + Math.imul(_, se) | 0;
        var We = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, l = Math.imul(W, X), n = Math.imul(W, J), n = n + Math.imul(K, X) | 0, d = Math.imul(K, J), l = l + Math.imul(z, Q) | 0, n = n + Math.imul(z, ee) | 0, n = n + Math.imul(H, Q) | 0, d = d + Math.imul(H, ee) | 0, l = l + Math.imul(F, te) | 0, n = n + Math.imul(F, re) | 0, n = n + Math.imul(U, te) | 0, d = d + Math.imul(U, re) | 0, l = l + Math.imul(C, ie) | 0, n = n + Math.imul(C, ne) | 0, n = n + Math.imul(O, ie) | 0, d = d + Math.imul(O, ne) | 0, l = l + Math.imul(k, fe) | 0, n = n + Math.imul(k, ae) | 0, n = n + Math.imul(D, fe) | 0, d = d + Math.imul(D, ae) | 0, l = l + Math.imul(R, oe) | 0, n = n + Math.imul(R, se) | 0, n = n + Math.imul(I, oe) | 0, d = d + Math.imul(I, se) | 0, l = l + Math.imul(g, he) | 0, n = n + Math.imul(g, ue) | 0, n = n + Math.imul(_, he) | 0, d = d + Math.imul(_, ue) | 0;
        var Ke = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, l = Math.imul(j, X), n = Math.imul(j, J), n = n + Math.imul(Z, X) | 0, d = Math.imul(Z, J), l = l + Math.imul(W, Q) | 0, n = n + Math.imul(W, ee) | 0, n = n + Math.imul(K, Q) | 0, d = d + Math.imul(K, ee) | 0, l = l + Math.imul(z, te) | 0, n = n + Math.imul(z, re) | 0, n = n + Math.imul(H, te) | 0, d = d + Math.imul(H, re) | 0, l = l + Math.imul(F, ie) | 0, n = n + Math.imul(F, ne) | 0, n = n + Math.imul(U, ie) | 0, d = d + Math.imul(U, ne) | 0, l = l + Math.imul(C, fe) | 0, n = n + Math.imul(C, ae) | 0, n = n + Math.imul(O, fe) | 0, d = d + Math.imul(O, ae) | 0, l = l + Math.imul(k, oe) | 0, n = n + Math.imul(k, se) | 0, n = n + Math.imul(D, oe) | 0, d = d + Math.imul(D, se) | 0, l = l + Math.imul(R, he) | 0, n = n + Math.imul(R, ue) | 0, n = n + Math.imul(I, he) | 0, d = d + Math.imul(I, ue) | 0, l = l + Math.imul(g, le) | 0, n = n + Math.imul(g, de) | 0, n = n + Math.imul(_, le) | 0, d = d + Math.imul(_, de) | 0;
        var je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, l = Math.imul(V, X), n = Math.imul(V, J), n = n + Math.imul($, X) | 0, d = Math.imul($, J), l = l + Math.imul(j, Q) | 0, n = n + Math.imul(j, ee) | 0, n = n + Math.imul(Z, Q) | 0, d = d + Math.imul(Z, ee) | 0, l = l + Math.imul(W, te) | 0, n = n + Math.imul(W, re) | 0, n = n + Math.imul(K, te) | 0, d = d + Math.imul(K, re) | 0, l = l + Math.imul(z, ie) | 0, n = n + Math.imul(z, ne) | 0, n = n + Math.imul(H, ie) | 0, d = d + Math.imul(H, ne) | 0, l = l + Math.imul(F, fe) | 0, n = n + Math.imul(F, ae) | 0, n = n + Math.imul(U, fe) | 0, d = d + Math.imul(U, ae) | 0, l = l + Math.imul(C, oe) | 0, n = n + Math.imul(C, se) | 0, n = n + Math.imul(O, oe) | 0, d = d + Math.imul(O, se) | 0, l = l + Math.imul(k, he) | 0, n = n + Math.imul(k, ue) | 0, n = n + Math.imul(D, he) | 0, d = d + Math.imul(D, ue) | 0, l = l + Math.imul(R, le) | 0, n = n + Math.imul(R, de) | 0, n = n + Math.imul(I, le) | 0, d = d + Math.imul(I, de) | 0, l = l + Math.imul(g, ce) | 0, n = n + Math.imul(g, pe) | 0, n = n + Math.imul(_, ce) | 0, d = d + Math.imul(_, pe) | 0;
        var Ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, X), n = Math.imul(G, J), n = n + Math.imul(Y, X) | 0, d = Math.imul(Y, J), l = l + Math.imul(V, Q) | 0, n = n + Math.imul(V, ee) | 0, n = n + Math.imul($, Q) | 0, d = d + Math.imul($, ee) | 0, l = l + Math.imul(j, te) | 0, n = n + Math.imul(j, re) | 0, n = n + Math.imul(Z, te) | 0, d = d + Math.imul(Z, re) | 0, l = l + Math.imul(W, ie) | 0, n = n + Math.imul(W, ne) | 0, n = n + Math.imul(K, ie) | 0, d = d + Math.imul(K, ne) | 0, l = l + Math.imul(z, fe) | 0, n = n + Math.imul(z, ae) | 0, n = n + Math.imul(H, fe) | 0, d = d + Math.imul(H, ae) | 0, l = l + Math.imul(F, oe) | 0, n = n + Math.imul(F, se) | 0, n = n + Math.imul(U, oe) | 0, d = d + Math.imul(U, se) | 0, l = l + Math.imul(C, he) | 0, n = n + Math.imul(C, ue) | 0, n = n + Math.imul(O, he) | 0, d = d + Math.imul(O, ue) | 0, l = l + Math.imul(k, le) | 0, n = n + Math.imul(k, de) | 0, n = n + Math.imul(D, le) | 0, d = d + Math.imul(D, de) | 0, l = l + Math.imul(R, ce) | 0, n = n + Math.imul(R, pe) | 0, n = n + Math.imul(I, ce) | 0, d = d + Math.imul(I, pe) | 0, l = l + Math.imul(g, ve) | 0, n = n + Math.imul(g, be) | 0, n = n + Math.imul(_, ve) | 0, d = d + Math.imul(_, be) | 0;
        var Ve = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, l = Math.imul(G, Q), n = Math.imul(G, ee), n = n + Math.imul(Y, Q) | 0, d = Math.imul(Y, ee), l = l + Math.imul(V, te) | 0, n = n + Math.imul(V, re) | 0, n = n + Math.imul($, te) | 0, d = d + Math.imul($, re) | 0, l = l + Math.imul(j, ie) | 0, n = n + Math.imul(j, ne) | 0, n = n + Math.imul(Z, ie) | 0, d = d + Math.imul(Z, ne) | 0, l = l + Math.imul(W, fe) | 0, n = n + Math.imul(W, ae) | 0, n = n + Math.imul(K, fe) | 0, d = d + Math.imul(K, ae) | 0, l = l + Math.imul(z, oe) | 0, n = n + Math.imul(z, se) | 0, n = n + Math.imul(H, oe) | 0, d = d + Math.imul(H, se) | 0, l = l + Math.imul(F, he) | 0, n = n + Math.imul(F, ue) | 0, n = n + Math.imul(U, he) | 0, d = d + Math.imul(U, ue) | 0, l = l + Math.imul(C, le) | 0, n = n + Math.imul(C, de) | 0, n = n + Math.imul(O, le) | 0, d = d + Math.imul(O, de) | 0, l = l + Math.imul(k, ce) | 0, n = n + Math.imul(k, pe) | 0, n = n + Math.imul(D, ce) | 0, d = d + Math.imul(D, pe) | 0, l = l + Math.imul(R, ve) | 0, n = n + Math.imul(R, be) | 0, n = n + Math.imul(I, ve) | 0, d = d + Math.imul(I, be) | 0;
        var $e = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, l = Math.imul(G, te), n = Math.imul(G, re), n = n + Math.imul(Y, te) | 0, d = Math.imul(Y, re), l = l + Math.imul(V, ie) | 0, n = n + Math.imul(V, ne) | 0, n = n + Math.imul($, ie) | 0, d = d + Math.imul($, ne) | 0, l = l + Math.imul(j, fe) | 0, n = n + Math.imul(j, ae) | 0, n = n + Math.imul(Z, fe) | 0, d = d + Math.imul(Z, ae) | 0, l = l + Math.imul(W, oe) | 0, n = n + Math.imul(W, se) | 0, n = n + Math.imul(K, oe) | 0, d = d + Math.imul(K, se) | 0, l = l + Math.imul(z, he) | 0, n = n + Math.imul(z, ue) | 0, n = n + Math.imul(H, he) | 0, d = d + Math.imul(H, ue) | 0, l = l + Math.imul(F, le) | 0, n = n + Math.imul(F, de) | 0, n = n + Math.imul(U, le) | 0, d = d + Math.imul(U, de) | 0, l = l + Math.imul(C, ce) | 0, n = n + Math.imul(C, pe) | 0, n = n + Math.imul(O, ce) | 0, d = d + Math.imul(O, pe) | 0, l = l + Math.imul(k, ve) | 0, n = n + Math.imul(k, be) | 0, n = n + Math.imul(D, ve) | 0, d = d + Math.imul(D, be) | 0;
        var Ge = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, l = Math.imul(G, ie), n = Math.imul(G, ne), n = n + Math.imul(Y, ie) | 0, d = Math.imul(Y, ne), l = l + Math.imul(V, fe) | 0, n = n + Math.imul(V, ae) | 0, n = n + Math.imul($, fe) | 0, d = d + Math.imul($, ae) | 0, l = l + Math.imul(j, oe) | 0, n = n + Math.imul(j, se) | 0, n = n + Math.imul(Z, oe) | 0, d = d + Math.imul(Z, se) | 0, l = l + Math.imul(W, he) | 0, n = n + Math.imul(W, ue) | 0, n = n + Math.imul(K, he) | 0, d = d + Math.imul(K, ue) | 0, l = l + Math.imul(z, le) | 0, n = n + Math.imul(z, de) | 0, n = n + Math.imul(H, le) | 0, d = d + Math.imul(H, de) | 0, l = l + Math.imul(F, ce) | 0, n = n + Math.imul(F, pe) | 0, n = n + Math.imul(U, ce) | 0, d = d + Math.imul(U, pe) | 0, l = l + Math.imul(C, ve) | 0, n = n + Math.imul(C, be) | 0, n = n + Math.imul(O, ve) | 0, d = d + Math.imul(O, be) | 0;
        var Ye = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(G, fe), n = Math.imul(G, ae), n = n + Math.imul(Y, fe) | 0, d = Math.imul(Y, ae), l = l + Math.imul(V, oe) | 0, n = n + Math.imul(V, se) | 0, n = n + Math.imul($, oe) | 0, d = d + Math.imul($, se) | 0, l = l + Math.imul(j, he) | 0, n = n + Math.imul(j, ue) | 0, n = n + Math.imul(Z, he) | 0, d = d + Math.imul(Z, ue) | 0, l = l + Math.imul(W, le) | 0, n = n + Math.imul(W, de) | 0, n = n + Math.imul(K, le) | 0, d = d + Math.imul(K, de) | 0, l = l + Math.imul(z, ce) | 0, n = n + Math.imul(z, pe) | 0, n = n + Math.imul(H, ce) | 0, d = d + Math.imul(H, pe) | 0, l = l + Math.imul(F, ve) | 0, n = n + Math.imul(F, be) | 0, n = n + Math.imul(U, ve) | 0, d = d + Math.imul(U, be) | 0;
        var Xe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, l = Math.imul(G, oe), n = Math.imul(G, se), n = n + Math.imul(Y, oe) | 0, d = Math.imul(Y, se), l = l + Math.imul(V, he) | 0, n = n + Math.imul(V, ue) | 0, n = n + Math.imul($, he) | 0, d = d + Math.imul($, ue) | 0, l = l + Math.imul(j, le) | 0, n = n + Math.imul(j, de) | 0, n = n + Math.imul(Z, le) | 0, d = d + Math.imul(Z, de) | 0, l = l + Math.imul(W, ce) | 0, n = n + Math.imul(W, pe) | 0, n = n + Math.imul(K, ce) | 0, d = d + Math.imul(K, pe) | 0, l = l + Math.imul(z, ve) | 0, n = n + Math.imul(z, be) | 0, n = n + Math.imul(H, ve) | 0, d = d + Math.imul(H, be) | 0;
        var Je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, l = Math.imul(G, he), n = Math.imul(G, ue), n = n + Math.imul(Y, he) | 0, d = Math.imul(Y, ue), l = l + Math.imul(V, le) | 0, n = n + Math.imul(V, de) | 0, n = n + Math.imul($, le) | 0, d = d + Math.imul($, de) | 0, l = l + Math.imul(j, ce) | 0, n = n + Math.imul(j, pe) | 0, n = n + Math.imul(Z, ce) | 0, d = d + Math.imul(Z, pe) | 0, l = l + Math.imul(W, ve) | 0, n = n + Math.imul(W, be) | 0, n = n + Math.imul(K, ve) | 0, d = d + Math.imul(K, be) | 0;
        var Qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, l = Math.imul(G, le), n = Math.imul(G, de), n = n + Math.imul(Y, le) | 0, d = Math.imul(Y, de), l = l + Math.imul(V, ce) | 0, n = n + Math.imul(V, pe) | 0, n = n + Math.imul($, ce) | 0, d = d + Math.imul($, pe) | 0, l = l + Math.imul(j, ve) | 0, n = n + Math.imul(j, be) | 0, n = n + Math.imul(Z, ve) | 0, d = d + Math.imul(Z, be) | 0;
        var et = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(G, ce), n = Math.imul(G, pe), n = n + Math.imul(Y, ce) | 0, d = Math.imul(Y, pe), l = l + Math.imul(V, ve) | 0, n = n + Math.imul(V, be) | 0, n = n + Math.imul($, ve) | 0, d = d + Math.imul($, be) | 0;
        var tt = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, l = Math.imul(G, ve), n = Math.imul(G, be), n = n + Math.imul(Y, ve) | 0, d = Math.imul(Y, be);
        var rt = (b + l | 0) + ((n & 8191) << 13) | 0;
        return b = (d + (n >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, c[0] = ft, c[1] = Be, c[2] = qe, c[3] = ze, c[4] = He, c[5] = We, c[6] = Ke, c[7] = je, c[8] = Ze, c[9] = Ve, c[10] = $e, c[11] = Ge, c[12] = Ye, c[13] = Xe, c[14] = Je, c[15] = Qe, c[16] = et, c[17] = tt, c[18] = rt, b !== 0 && (c[19] = b, h.length++), h;
      };
      Math.imul || (L = q);
      function ge(v, i, a) {
        a.negative = i.negative ^ v.negative, a.length = v.length + i.length;
        for (var h = 0, s = 0, u = 0;u < a.length - 1; u++) {
          var c = s;
          s = 0;
          for (var b = h & 67108863, l = Math.min(u, i.length - 1), n = Math.max(0, u - v.length + 1);n <= l; n++) {
            var d = u - n, w = v.words[d] | 0, g = i.words[n] | 0, _ = w * g, A = _ & 67108863;
            c = c + (_ / 67108864 | 0) | 0, A = A + b | 0, b = A & 67108863, c = c + (A >>> 26) | 0, s += c >>> 26, c &= 67108863;
          }
          a.words[u] = b, h = c, c = s;
        }
        return h !== 0 ? a.words[u] = h : a.length--, a.strip();
      }
      function _e(v, i, a) {
        var h = new N;
        return h.mulp(v, i, a);
      }
      f.prototype.mulTo = function(i, a) {
        var h, s = this.length + i.length;
        return this.length === 10 && i.length === 10 ? h = L(this, i, a) : s < 63 ? h = q(this, i, a) : s < 1024 ? h = ge(this, i, a) : h = _e(this, i, a), h;
      };
      function N(v, i) {
        this.x = v, this.y = i;
      }
      N.prototype.makeRBT = function(i) {
        for (var a = new Array(i), h = f.prototype._countBits(i) - 1, s = 0;s < i; s++)
          a[s] = this.revBin(s, h, i);
        return a;
      }, N.prototype.revBin = function(i, a, h) {
        if (i === 0 || i === h - 1)
          return i;
        for (var s = 0, u = 0;u < a; u++)
          s |= (i & 1) << a - u - 1, i >>= 1;
        return s;
      }, N.prototype.permute = function(i, a, h, s, u, c) {
        for (var b = 0;b < c; b++)
          s[b] = a[i[b]], u[b] = h[i[b]];
      }, N.prototype.transform = function(i, a, h, s, u, c) {
        this.permute(c, i, a, h, s, u);
        for (var b = 1;b < u; b <<= 1)
          for (var l = b << 1, n = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), w = 0;w < u; w += l)
            for (var g = n, _ = d, A = 0;A < b; A++) {
              var R = h[w + A], I = s[w + A], Me = h[w + A + b], k = s[w + A + b], D = g * Me - _ * k;
              k = g * k + _ * Me, Me = D, h[w + A] = R + Me, s[w + A] = I + k, h[w + A + b] = R - Me, s[w + A + b] = I - k, A !== l && (D = n * g - d * _, _ = n * _ + d * g, g = D);
            }
      }, N.prototype.guessLen13b = function(i, a) {
        var h = Math.max(a, i) | 1, s = h & 1, u = 0;
        for (h = h / 2 | 0;h; h = h >>> 1)
          u++;
        return 1 << u + 1 + s;
      }, N.prototype.conjugate = function(i, a, h) {
        if (!(h <= 1))
          for (var s = 0;s < h / 2; s++) {
            var u = i[s];
            i[s] = i[h - s - 1], i[h - s - 1] = u, u = a[s], a[s] = -a[h - s - 1], a[h - s - 1] = -u;
          }
      }, N.prototype.normalize13b = function(i, a) {
        for (var h = 0, s = 0;s < a / 2; s++) {
          var u = Math.round(i[2 * s + 1] / a) * 8192 + Math.round(i[2 * s] / a) + h;
          i[s] = u & 67108863, u < 67108864 ? h = 0 : h = u / 67108864 | 0;
        }
        return i;
      }, N.prototype.convert13b = function(i, a, h, s) {
        for (var u = 0, c = 0;c < a; c++)
          u = u + (i[c] | 0), h[2 * c] = u & 8191, u = u >>> 13, h[2 * c + 1] = u & 8191, u = u >>> 13;
        for (c = 2 * a;c < s; ++c)
          h[c] = 0;
        r(u === 0), r((u & -8192) === 0);
      }, N.prototype.stub = function(i) {
        for (var a = new Array(i), h = 0;h < i; h++)
          a[h] = 0;
        return a;
      }, N.prototype.mulp = function(i, a, h) {
        var s = 2 * this.guessLen13b(i.length, a.length), u = this.makeRBT(s), c = this.stub(s), b = new Array(s), l = new Array(s), n = new Array(s), d = new Array(s), w = new Array(s), g = new Array(s), _ = h.words;
        _.length = s, this.convert13b(i.words, i.length, b, s), this.convert13b(a.words, a.length, d, s), this.transform(b, c, l, n, s, u), this.transform(d, c, w, g, s, u);
        for (var A = 0;A < s; A++) {
          var R = l[A] * w[A] - n[A] * g[A];
          n[A] = l[A] * g[A] + n[A] * w[A], l[A] = R;
        }
        return this.conjugate(l, n, s), this.transform(l, n, _, c, s, u), this.conjugate(_, c, s), this.normalize13b(_, s), h.negative = i.negative ^ a.negative, h.length = i.length + a.length, h.strip();
      }, f.prototype.mul = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), this.mulTo(i, a);
      }, f.prototype.mulf = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), _e(this, i, a);
      }, f.prototype.imul = function(i) {
        return this.clone().mulTo(i, this);
      }, f.prototype.imuln = function(i) {
        r(typeof i == "number"), r(i < 67108864);
        for (var a = 0, h = 0;h < this.length; h++) {
          var s = (this.words[h] | 0) * i, u = (s & 67108863) + (a & 67108863);
          a >>= 26, a += s / 67108864 | 0, a += u >>> 26, this.words[h] = u & 67108863;
        }
        return a !== 0 && (this.words[h] = a, this.length++), this;
      }, f.prototype.muln = function(i) {
        return this.clone().imuln(i);
      }, f.prototype.sqr = function() {
        return this.mul(this);
      }, f.prototype.isqr = function() {
        return this.imul(this.clone());
      }, f.prototype.pow = function(i) {
        var a = B(i);
        if (a.length === 0)
          return new f(1);
        for (var h = this, s = 0;s < a.length && a[s] === 0; s++, h = h.sqr())
          ;
        if (++s < a.length)
          for (var u = h.sqr();s < a.length; s++, u = u.sqr())
            a[s] !== 0 && (h = h.mul(u));
        return h;
      }, f.prototype.iushln = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 67108863 >>> 26 - a << 26 - a, u;
        if (a !== 0) {
          var c = 0;
          for (u = 0;u < this.length; u++) {
            var b = this.words[u] & s, l = (this.words[u] | 0) - b << a;
            this.words[u] = l | c, c = b >>> 26 - a;
          }
          c && (this.words[u] = c, this.length++);
        }
        if (h !== 0) {
          for (u = this.length - 1;u >= 0; u--)
            this.words[u + h] = this.words[u];
          for (u = 0;u < h; u++)
            this.words[u] = 0;
          this.length += h;
        }
        return this.strip();
      }, f.prototype.ishln = function(i) {
        return r(this.negative === 0), this.iushln(i);
      }, f.prototype.iushrn = function(i, a, h) {
        r(typeof i == "number" && i >= 0);
        var s;
        a ? s = (a - a % 26) / 26 : s = 0;
        var u = i % 26, c = Math.min((i - u) / 26, this.length), b = 67108863 ^ 67108863 >>> u << u, l = h;
        if (s -= c, s = Math.max(0, s), l) {
          for (var n = 0;n < c; n++)
            l.words[n] = this.words[n];
          l.length = c;
        }
        if (c !== 0)
          if (this.length > c)
            for (this.length -= c, n = 0;n < this.length; n++)
              this.words[n] = this.words[n + c];
          else
            this.words[0] = 0, this.length = 1;
        var d = 0;
        for (n = this.length - 1;n >= 0 && (d !== 0 || n >= s); n--) {
          var w = this.words[n] | 0;
          this.words[n] = d << 26 - u | w >>> u, d = w & b;
        }
        return l && d !== 0 && (l.words[l.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, f.prototype.ishrn = function(i, a, h) {
        return r(this.negative === 0), this.iushrn(i, a, h);
      }, f.prototype.shln = function(i) {
        return this.clone().ishln(i);
      }, f.prototype.ushln = function(i) {
        return this.clone().iushln(i);
      }, f.prototype.shrn = function(i) {
        return this.clone().ishrn(i);
      }, f.prototype.ushrn = function(i) {
        return this.clone().iushrn(i);
      }, f.prototype.testn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return false;
        var u = this.words[h];
        return !!(u & s);
      }, f.prototype.imaskn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26;
        if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h)
          return this;
        if (a !== 0 && h++, this.length = Math.min(h, this.length), a !== 0) {
          var s = 67108863 ^ 67108863 >>> a << a;
          this.words[this.length - 1] &= s;
        }
        return this.strip();
      }, f.prototype.maskn = function(i) {
        return this.clone().imaskn(i);
      }, f.prototype.iaddn = function(i) {
        return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
      }, f.prototype._iaddn = function(i) {
        this.words[0] += i;
        for (var a = 0;a < this.length && this.words[a] >= 67108864; a++)
          this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
        return this.length = Math.max(this.length, a + 1), this;
      }, f.prototype.isubn = function(i) {
        if (r(typeof i == "number"), r(i < 67108864), i < 0)
          return this.iaddn(-i);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(i), this.negative = 1, this;
        if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var a = 0;a < this.length && this.words[a] < 0; a++)
            this.words[a] += 67108864, this.words[a + 1] -= 1;
        return this.strip();
      }, f.prototype.addn = function(i) {
        return this.clone().iaddn(i);
      }, f.prototype.subn = function(i) {
        return this.clone().isubn(i);
      }, f.prototype.iabs = function() {
        return this.negative = 0, this;
      }, f.prototype.abs = function() {
        return this.clone().iabs();
      }, f.prototype._ishlnsubmul = function(i, a, h) {
        var s = i.length + h, u;
        this._expand(s);
        var c, b = 0;
        for (u = 0;u < i.length; u++) {
          c = (this.words[u + h] | 0) + b;
          var l = (i.words[u] | 0) * a;
          c -= l & 67108863, b = (c >> 26) - (l / 67108864 | 0), this.words[u + h] = c & 67108863;
        }
        for (;u < this.length - h; u++)
          c = (this.words[u + h] | 0) + b, b = c >> 26, this.words[u + h] = c & 67108863;
        if (b === 0)
          return this.strip();
        for (r(b === -1), b = 0, u = 0;u < this.length; u++)
          c = -(this.words[u] | 0) + b, b = c >> 26, this.words[u] = c & 67108863;
        return this.negative = 1, this.strip();
      }, f.prototype._wordDiv = function(i, a) {
        var h = this.length - i.length, s = this.clone(), u = i, c = u.words[u.length - 1] | 0, b = this._countBits(c);
        h = 26 - b, h !== 0 && (u = u.ushln(h), s.iushln(h), c = u.words[u.length - 1] | 0);
        var l = s.length - u.length, n;
        if (a !== "mod") {
          n = new f(null), n.length = l + 1, n.words = new Array(n.length);
          for (var d = 0;d < n.length; d++)
            n.words[d] = 0;
        }
        var w = s.clone()._ishlnsubmul(u, 1, l);
        w.negative === 0 && (s = w, n && (n.words[l] = 1));
        for (var g = l - 1;g >= 0; g--) {
          var _ = (s.words[u.length + g] | 0) * 67108864 + (s.words[u.length + g - 1] | 0);
          for (_ = Math.min(_ / c | 0, 67108863), s._ishlnsubmul(u, _, g);s.negative !== 0; )
            _--, s.negative = 0, s._ishlnsubmul(u, 1, g), s.isZero() || (s.negative ^= 1);
          n && (n.words[g] = _);
        }
        return n && n.strip(), s.strip(), a !== "div" && h !== 0 && s.iushrn(h), { div: n || null, mod: s };
      }, f.prototype.divmod = function(i, a, h) {
        if (r(!i.isZero()), this.isZero())
          return { div: new f(0), mod: new f(0) };
        var s, u, c;
        return this.negative !== 0 && i.negative === 0 ? (c = this.neg().divmod(i, a), a !== "mod" && (s = c.div.neg()), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.iadd(i)), { div: s, mod: u }) : this.negative === 0 && i.negative !== 0 ? (c = this.divmod(i.neg(), a), a !== "mod" && (s = c.div.neg()), { div: s, mod: c.mod }) : (this.negative & i.negative) !== 0 ? (c = this.neg().divmod(i.neg(), a), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.isub(i)), { div: c.div, mod: u }) : i.length > this.length || this.cmp(i) < 0 ? { div: new f(0), mod: this } : i.length === 1 ? a === "div" ? { div: this.divn(i.words[0]), mod: null } : a === "mod" ? { div: null, mod: new f(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new f(this.modn(i.words[0])) } : this._wordDiv(i, a);
      }, f.prototype.div = function(i) {
        return this.divmod(i, "div", false).div;
      }, f.prototype.mod = function(i) {
        return this.divmod(i, "mod", false).mod;
      }, f.prototype.umod = function(i) {
        return this.divmod(i, "mod", true).mod;
      }, f.prototype.divRound = function(i) {
        var a = this.divmod(i);
        if (a.mod.isZero())
          return a.div;
        var h = a.div.negative !== 0 ? a.mod.isub(i) : a.mod, s = i.ushrn(1), u = i.andln(1), c = h.cmp(s);
        return c < 0 || u === 1 && c === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
      }, f.prototype.modn = function(i) {
        r(i <= 67108863);
        for (var a = (1 << 26) % i, h = 0, s = this.length - 1;s >= 0; s--)
          h = (a * h + (this.words[s] | 0)) % i;
        return h;
      }, f.prototype.idivn = function(i) {
        r(i <= 67108863);
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = (this.words[h] | 0) + a * 67108864;
          this.words[h] = s / i | 0, a = s % i;
        }
        return this.strip();
      }, f.prototype.divn = function(i) {
        return this.clone().idivn(i);
      }, f.prototype.egcd = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = new f(0), b = new f(1), l = 0;a.isEven() && h.isEven(); )
          a.iushrn(1), h.iushrn(1), ++l;
        for (var n = h.clone(), d = a.clone();!a.isZero(); ) {
          for (var w = 0, g = 1;(a.words[0] & g) === 0 && w < 26; ++w, g <<= 1)
            ;
          if (w > 0)
            for (a.iushrn(w);w-- > 0; )
              (s.isOdd() || u.isOdd()) && (s.iadd(n), u.isub(d)), s.iushrn(1), u.iushrn(1);
          for (var _ = 0, A = 1;(h.words[0] & A) === 0 && _ < 26; ++_, A <<= 1)
            ;
          if (_ > 0)
            for (h.iushrn(_);_-- > 0; )
              (c.isOdd() || b.isOdd()) && (c.iadd(n), b.isub(d)), c.iushrn(1), b.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(c), u.isub(b)) : (h.isub(a), c.isub(s), b.isub(u));
        }
        return { a: c, b, gcd: h.iushln(l) };
      }, f.prototype._invmp = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = h.clone();a.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var b = 0, l = 1;(a.words[0] & l) === 0 && b < 26; ++b, l <<= 1)
            ;
          if (b > 0)
            for (a.iushrn(b);b-- > 0; )
              s.isOdd() && s.iadd(c), s.iushrn(1);
          for (var n = 0, d = 1;(h.words[0] & d) === 0 && n < 26; ++n, d <<= 1)
            ;
          if (n > 0)
            for (h.iushrn(n);n-- > 0; )
              u.isOdd() && u.iadd(c), u.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(u)) : (h.isub(a), u.isub(s));
        }
        var w;
        return a.cmpn(1) === 0 ? w = s : w = u, w.cmpn(0) < 0 && w.iadd(i), w;
      }, f.prototype.gcd = function(i) {
        if (this.isZero())
          return i.abs();
        if (i.isZero())
          return this.abs();
        var a = this.clone(), h = i.clone();
        a.negative = 0, h.negative = 0;
        for (var s = 0;a.isEven() && h.isEven(); s++)
          a.iushrn(1), h.iushrn(1);
        do {
          for (;a.isEven(); )
            a.iushrn(1);
          for (;h.isEven(); )
            h.iushrn(1);
          var u = a.cmp(h);
          if (u < 0) {
            var c = a;
            a = h, h = c;
          } else if (u === 0 || h.cmpn(1) === 0)
            break;
          a.isub(h);
        } while (true);
        return h.iushln(s);
      }, f.prototype.invm = function(i) {
        return this.egcd(i).a.umod(i);
      }, f.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, f.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, f.prototype.andln = function(i) {
        return this.words[0] & i;
      }, f.prototype.bincn = function(i) {
        r(typeof i == "number");
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return this._expand(h + 1), this.words[h] |= s, this;
        for (var u = s, c = h;u !== 0 && c < this.length; c++) {
          var b = this.words[c] | 0;
          b += u, u = b >>> 26, b &= 67108863, this.words[c] = b;
        }
        return u !== 0 && (this.words[c] = u, this.length++), this;
      }, f.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, f.prototype.cmpn = function(i) {
        var a = i < 0;
        if (this.negative !== 0 && !a)
          return -1;
        if (this.negative === 0 && a)
          return 1;
        this.strip();
        var h;
        if (this.length > 1)
          h = 1;
        else {
          a && (i = -i), r(i <= 67108863, "Number is too big");
          var s = this.words[0] | 0;
          h = s === i ? 0 : s < i ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }, f.prototype.cmp = function(i) {
        if (this.negative !== 0 && i.negative === 0)
          return -1;
        if (this.negative === 0 && i.negative !== 0)
          return 1;
        var a = this.ucmp(i);
        return this.negative !== 0 ? -a | 0 : a;
      }, f.prototype.ucmp = function(i) {
        if (this.length > i.length)
          return 1;
        if (this.length < i.length)
          return -1;
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = this.words[h] | 0, u = i.words[h] | 0;
          if (s !== u) {
            s < u ? a = -1 : s > u && (a = 1);
            break;
          }
        }
        return a;
      }, f.prototype.gtn = function(i) {
        return this.cmpn(i) === 1;
      }, f.prototype.gt = function(i) {
        return this.cmp(i) === 1;
      }, f.prototype.gten = function(i) {
        return this.cmpn(i) >= 0;
      }, f.prototype.gte = function(i) {
        return this.cmp(i) >= 0;
      }, f.prototype.ltn = function(i) {
        return this.cmpn(i) === -1;
      }, f.prototype.lt = function(i) {
        return this.cmp(i) === -1;
      }, f.prototype.lten = function(i) {
        return this.cmpn(i) <= 0;
      }, f.prototype.lte = function(i) {
        return this.cmp(i) <= 0;
      }, f.prototype.eqn = function(i) {
        return this.cmpn(i) === 0;
      }, f.prototype.eq = function(i) {
        return this.cmp(i) === 0;
      }, f.red = function(i) {
        return new P(i);
      }, f.prototype.toRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
      }, f.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, f.prototype._forceRed = function(i) {
        return this.red = i, this;
      }, f.prototype.forceRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
      }, f.prototype.redAdd = function(i) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
      }, f.prototype.redIAdd = function(i) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
      }, f.prototype.redSub = function(i) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
      }, f.prototype.redISub = function(i) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
      }, f.prototype.redShl = function(i) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
      }, f.prototype.redMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
      }, f.prototype.redIMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
      }, f.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, f.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, f.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, f.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, f.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, f.prototype.redPow = function(i) {
        return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
      };
      var we = { k256: null, p224: null, p192: null, p25519: null };
      function ye(v, i) {
        this.name = v, this.p = new f(i, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      ye.prototype._tmp = function() {
        var i = new f(null);
        return i.words = new Array(Math.ceil(this.n / 13)), i;
      }, ye.prototype.ireduce = function(i) {
        var a = i, h;
        do
          this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), h = a.bitLength();
        while (h > this.n);
        var s = h < this.n ? -1 : a.ucmp(this.p);
        return s === 0 ? (a.words[0] = 0, a.length = 1) : s > 0 ? a.isub(this.p) : a.strip !== undefined ? a.strip() : a._strip(), a;
      }, ye.prototype.split = function(i, a) {
        i.iushrn(this.n, 0, a);
      }, ye.prototype.imulK = function(i) {
        return i.imul(this.k);
      };
      function xe() {
        ye.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      o(xe, ye), xe.prototype.split = function(i, a) {
        for (var h = 4194303, s = Math.min(i.length, 9), u = 0;u < s; u++)
          a.words[u] = i.words[u];
        if (a.length = s, i.length <= 9) {
          i.words[0] = 0, i.length = 1;
          return;
        }
        var c = i.words[9];
        for (a.words[a.length++] = c & h, u = 10;u < i.length; u++) {
          var b = i.words[u] | 0;
          i.words[u - 10] = (b & h) << 4 | c >>> 22, c = b;
        }
        c >>>= 22, i.words[u - 10] = c, c === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
      }, xe.prototype.imulK = function(i) {
        i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = i.words[h] | 0;
          a += s * 977, i.words[h] = a & 67108863, a = s * 64 + (a / 67108864 | 0);
        }
        return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
      };
      function Re() {
        ye.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      o(Re, ye);
      function Ee() {
        ye.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      o(Ee, ye);
      function Ae() {
        ye.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      o(Ae, ye), Ae.prototype.imulK = function(i) {
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = (i.words[h] | 0) * 19 + a, u = s & 67108863;
          s >>>= 26, i.words[h] = u, a = s;
        }
        return a !== 0 && (i.words[i.length++] = a), i;
      }, f._prime = function(i) {
        if (we[i])
          return we[i];
        var a;
        if (i === "k256")
          a = new xe;
        else if (i === "p224")
          a = new Re;
        else if (i === "p192")
          a = new Ee;
        else if (i === "p25519")
          a = new Ae;
        else
          throw new Error("Unknown prime " + i);
        return we[i] = a, a;
      };
      function P(v) {
        if (typeof v == "string") {
          var i = f._prime(v);
          this.m = i.p, this.prime = i;
        } else
          r(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
      }
      P.prototype._verify1 = function(i) {
        r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
      }, P.prototype._verify2 = function(i, a) {
        r((i.negative | a.negative) === 0, "red works only with positives"), r(i.red && i.red === a.red, "red works only with red numbers");
      }, P.prototype.imod = function(i) {
        return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
      }, P.prototype.neg = function(i) {
        return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
      }, P.prototype.add = function(i, a) {
        this._verify2(i, a);
        var h = i.add(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }, P.prototype.iadd = function(i, a) {
        this._verify2(i, a);
        var h = i.iadd(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }, P.prototype.sub = function(i, a) {
        this._verify2(i, a);
        var h = i.sub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }, P.prototype.isub = function(i, a) {
        this._verify2(i, a);
        var h = i.isub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }, P.prototype.shl = function(i, a) {
        return this._verify1(i), this.imod(i.ushln(a));
      }, P.prototype.imul = function(i, a) {
        return this._verify2(i, a), this.imod(i.imul(a));
      }, P.prototype.mul = function(i, a) {
        return this._verify2(i, a), this.imod(i.mul(a));
      }, P.prototype.isqr = function(i) {
        return this.imul(i, i.clone());
      }, P.prototype.sqr = function(i) {
        return this.mul(i, i);
      }, P.prototype.sqrt = function(i) {
        if (i.isZero())
          return i.clone();
        var a = this.m.andln(3);
        if (r(a % 2 === 1), a === 3) {
          var h = this.m.add(new f(1)).iushrn(2);
          return this.pow(i, h);
        }
        for (var s = this.m.subn(1), u = 0;!s.isZero() && s.andln(1) === 0; )
          u++, s.iushrn(1);
        r(!s.isZero());
        var c = new f(1).toRed(this), b = c.redNeg(), l = this.m.subn(1).iushrn(1), n = this.m.bitLength();
        for (n = new f(2 * n * n).toRed(this);this.pow(n, l).cmp(b) !== 0; )
          n.redIAdd(b);
        for (var d = this.pow(n, s), w = this.pow(i, s.addn(1).iushrn(1)), g = this.pow(i, s), _ = u;g.cmp(c) !== 0; ) {
          for (var A = g, R = 0;A.cmp(c) !== 0; R++)
            A = A.redSqr();
          r(R < _);
          var I = this.pow(d, new f(1).iushln(_ - R - 1));
          w = w.redMul(I), d = I.redSqr(), g = g.redMul(d), _ = R;
        }
        return w;
      }, P.prototype.invm = function(i) {
        var a = i._invmp(this.m);
        return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
      }, P.prototype.pow = function(i, a) {
        if (a.isZero())
          return new f(1).toRed(this);
        if (a.cmpn(1) === 0)
          return i.clone();
        var h = 4, s = new Array(1 << h);
        s[0] = new f(1).toRed(this), s[1] = i;
        for (var u = 2;u < s.length; u++)
          s[u] = this.mul(s[u - 1], i);
        var c = s[0], b = 0, l = 0, n = a.bitLength() % 26;
        for (n === 0 && (n = 26), u = a.length - 1;u >= 0; u--) {
          for (var d = a.words[u], w = n - 1;w >= 0; w--) {
            var g = d >> w & 1;
            if (c !== s[0] && (c = this.sqr(c)), g === 0 && b === 0) {
              l = 0;
              continue;
            }
            b <<= 1, b |= g, l++, !(l !== h && (u !== 0 || w !== 0)) && (c = this.mul(c, s[b]), l = 0, b = 0);
          }
          n = 26;
        }
        return c;
      }, P.prototype.convertTo = function(i) {
        var a = i.umod(this.m);
        return a === i ? a.clone() : a;
      }, P.prototype.convertFrom = function(i) {
        var a = i.clone();
        return a.red = null, a;
      }, f.mont = function(i) {
        return new Se(i);
      };
      function Se(v) {
        P.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      o(Se, P), Se.prototype.convertTo = function(i) {
        return this.imod(i.ushln(this.shift));
      }, Se.prototype.convertFrom = function(i) {
        var a = this.imod(i.mul(this.rinv));
        return a.red = null, a;
      }, Se.prototype.imul = function(i, a) {
        if (i.isZero() || a.isZero())
          return i.words[0] = 0, i.length = 1, i;
        var h = i.imul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.mul = function(i, a) {
        if (i.isZero() || a.isZero())
          return new f(0)._forceRed(this);
        var h = i.mul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.invm = function(i) {
        var a = this.imod(i._invmp(this.m).mul(this.r2));
        return a._forceRed(this);
      };
    })(typeof Xu > "u" || Xu, Gm);
  });
  Xm = T(() => {
  });
  As = T(($T, el) => {
    var Ju;
    el.exports = function(e) {
      return Ju || (Ju = new Zi(null)), Ju.generate(e);
    };
    function Zi(t) {
      this.rand = t;
    }
    el.exports.Rand = Zi;
    Zi.prototype.generate = function(e) {
      return this._rand(e);
    };
    Zi.prototype._rand = function(e) {
      if (this.rand.getBytes)
        return this.rand.getBytes(e);
      for (var r = new Uint8Array(e), o = 0;o < r.length; o++)
        r[o] = this.rand.getByte();
      return r;
    };
    if (typeof self == "object")
      self.crypto && self.crypto.getRandomValues ? Zi.prototype._rand = function(e) {
        var r = new Uint8Array(e);
        return self.crypto.getRandomValues(r), r;
      } : self.msCrypto && self.msCrypto.getRandomValues ? Zi.prototype._rand = function(e) {
        var r = new Uint8Array(e);
        return self.msCrypto.getRandomValues(r), r;
      } : typeof window == "object" && (Zi.prototype._rand = function() {
        throw new Error("Not implemented yet");
      });
    else
      try {
        if (Qu = Xm(), typeof Qu.randomBytes != "function")
          throw new Error("Not supported");
        Zi.prototype._rand = function(e) {
          return Qu.randomBytes(e);
        };
      } catch {
      }
    var Qu;
  });
  tl = T((GT, Jm) => {
    var In = Ym(), Q9 = As();
    function Tn(t) {
      this.rand = t || new Q9.Rand;
    }
    Jm.exports = Tn;
    Tn.create = function(e) {
      return new Tn(e);
    };
    Tn.prototype._randbelow = function(e) {
      var r = e.bitLength(), o = Math.ceil(r / 8);
      do
        var f = new In(this.rand.generate(o));
      while (f.cmp(e) >= 0);
      return f;
    };
    Tn.prototype._randrange = function(e, r) {
      var o = r.sub(e);
      return e.add(this._randbelow(o));
    };
    Tn.prototype.test = function(e, r, o) {
      var f = e.bitLength(), p = In.mont(e), m = new In(1).toRed(p);
      r || (r = Math.max(1, f / 48 | 0));
      for (var y = e.subn(1), M = 0;!y.testn(M); M++)
        ;
      for (var x = e.shrn(M), S = y.toRed(p), E = true;r > 0; r--) {
        var B = this._randrange(new In(2), y);
        o && o(B);
        var q = B.toRed(p).redPow(x);
        if (!(q.cmp(m) === 0 || q.cmp(S) === 0)) {
          for (var L = 1;L < M; L++) {
            if (q = q.redSqr(), q.cmp(m) === 0)
              return false;
            if (q.cmp(S) === 0)
              break;
          }
          if (L === M)
            return false;
        }
      }
      return E;
    };
    Tn.prototype.getDivisor = function(e, r) {
      var o = e.bitLength(), f = In.mont(e), p = new In(1).toRed(f);
      r || (r = Math.max(1, o / 48 | 0));
      for (var m = e.subn(1), y = 0;!m.testn(y); y++)
        ;
      for (var M = e.shrn(y), x = m.toRed(f);r > 0; r--) {
        var S = this._randrange(new In(2), m), E = e.gcd(S);
        if (E.cmpn(1) !== 0)
          return E;
        var B = S.toRed(f).redPow(M);
        if (!(B.cmp(p) === 0 || B.cmp(x) === 0)) {
          for (var q = 1;q < y; q++) {
            if (B = B.redSqr(), B.cmp(p) === 0)
              return B.fromRed().subn(1).gcd(e);
            if (B.cmp(x) === 0)
              break;
          }
          if (q === y)
            return B = B.redSqr(), B.fromRed().subn(1).gcd(e);
        }
      }
      return false;
    };
  });
  ol = T((ek, tg) => {
    var eS = on();
    tg.exports = al;
    al.simpleSieve = nl;
    al.fermatTest = fl;
    var Ht = Yu(), tS = new Ht(24), rS = tl(), Qm = new rS, iS = new Ht(1), il = new Ht(2), nS = new Ht(5), YT = new Ht(16), XT = new Ht(8), fS = new Ht(10), aS = new Ht(3), JT = new Ht(7), oS = new Ht(11), eg = new Ht(4), QT = new Ht(12), rl = null;
    function sS() {
      if (rl !== null)
        return rl;
      var t = 1048576, e = [];
      e[0] = 2;
      for (var r = 1, o = 3;o < t; o += 2) {
        for (var f = Math.ceil(Math.sqrt(o)), p = 0;p < r && e[p] <= f && o % e[p] !== 0; p++)
          ;
        r !== p && e[p] <= f || (e[r++] = o);
      }
      return rl = e, e;
    }
    function nl(t) {
      for (var e = sS(), r = 0;r < e.length; r++)
        if (t.modn(e[r]) === 0)
          return t.cmpn(e[r]) === 0;
      return true;
    }
    function fl(t) {
      var e = Ht.mont(t);
      return il.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1) === 0;
    }
    function al(t, e) {
      if (t < 16)
        return e === 2 || e === 5 ? new Ht([140, 123]) : new Ht([140, 39]);
      e = new Ht(e);
      for (var r, o;; ) {
        for (r = new Ht(eS(Math.ceil(t / 8)));r.bitLength() > t; )
          r.ishrn(1);
        if (r.isEven() && r.iadd(iS), r.testn(1) || r.iadd(il), e.cmp(il)) {
          if (!e.cmp(nS))
            for (;r.mod(fS).cmp(aS); )
              r.iadd(eg);
        } else
          for (;r.mod(tS).cmp(oS); )
            r.iadd(eg);
        if (o = r.shrn(1), nl(o) && nl(r) && fl(o) && fl(r) && Qm.test(o) && Qm.test(r))
          return r;
      }
    }
  });
  rg = T((tk, hS) => {
    hS.exports = { modp1: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff" }, modp2: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff" }, modp5: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff" }, modp14: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff" }, modp15: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff" }, modp16: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff" }, modp17: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff" }, modp18: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff" } };
  });
  ag = T((rk, fg) => {
    var yr = Yu(), uS = tl(), ig = new uS, lS = new yr(24), dS = new yr(11), cS = new yr(10), pS = new yr(3), vS = new yr(7), ng = ol(), bS = on();
    fg.exports = Si;
    function mS(t, e) {
      return e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e)), this._pub = new yr(t), this;
    }
    function gS(t, e) {
      return e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e)), this._priv = new yr(t), this;
    }
    var Rs = {};
    function yS(t, e) {
      var r = e.toString("hex"), o = [r, t.toString(16)].join("_");
      if (o in Rs)
        return Rs[o];
      var f = 0;
      if (t.isEven() || !ng.simpleSieve || !ng.fermatTest(t) || !ig.test(t))
        return f += 1, r === "02" || r === "05" ? f += 8 : f += 4, Rs[o] = f, f;
      ig.test(t.shrn(1)) || (f += 2);
      var p;
      switch (r) {
        case "02":
          t.mod(lS).cmp(dS) && (f += 8);
          break;
        case "05":
          p = t.mod(cS), p.cmp(pS) && p.cmp(vS) && (f += 8);
          break;
        default:
          f += 4;
      }
      return Rs[o] = f, f;
    }
    function Si(t, e, r) {
      this.setGenerator(e), this.__prime = new yr(t), this._prime = yr.mont(this.__prime), this._primeLen = t.length, this._pub = undefined, this._priv = undefined, this._primeCode = undefined, r ? (this.setPublicKey = mS, this.setPrivateKey = gS) : this._primeCode = 8;
    }
    Object.defineProperty(Si.prototype, "verifyError", { enumerable: true, get: function() {
      return typeof this._primeCode != "number" && (this._primeCode = yS(this.__prime, this.__gen)), this._primeCode;
    } });
    Si.prototype.generateKeys = function() {
      return this._priv || (this._priv = new yr(bS(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey();
    };
    Si.prototype.computeSecret = function(t) {
      t = new yr(t), t = t.toRed(this._prime);
      var e = t.redPow(this._priv).fromRed(), r = new Buffer(e.toArray()), o = this.getPrime();
      if (r.length < o.length) {
        var f = new Buffer(o.length - r.length);
        f.fill(0), r = Buffer.concat([f, r]);
      }
      return r;
    };
    Si.prototype.getPublicKey = function(e) {
      return Bs(this._pub, e);
    };
    Si.prototype.getPrivateKey = function(e) {
      return Bs(this._priv, e);
    };
    Si.prototype.getPrime = function(t) {
      return Bs(this.__prime, t);
    };
    Si.prototype.getGenerator = function(t) {
      return Bs(this._gen, t);
    };
    Si.prototype.setGenerator = function(t, e) {
      return e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e)), this.__gen = t, this._gen = new yr(t), this;
    };
    function Bs(t, e) {
      var r = new Buffer(t.toArray());
      return e ? r.toString(e) : r;
    }
  });
  hg = T((_f) => {
    var wS = ol(), og = rg(), sl = ag();
    function MS(t) {
      var e = new Buffer(og[t].prime, "hex"), r = new Buffer(og[t].gen, "hex");
      return new sl(e, r);
    }
    var _S = { binary: true, hex: true, base64: true };
    function sg(t, e, r, o) {
      return Buffer.isBuffer(e) || _S[e] === undefined ? sg(t, "binary", e, r) : (e = e || "binary", o = o || "binary", r = r || new Buffer([2]), Buffer.isBuffer(r) || (r = new Buffer(r, o)), typeof t == "number" ? new sl(wS(t, r), r, true) : (Buffer.isBuffer(t) || (t = new Buffer(t, e)), new sl(t, r, true)));
    }
    _f.DiffieHellmanGroup = _f.createDiffieHellmanGroup = _f.getDiffieHellman = MS;
    _f.createDiffieHellman = _f.DiffieHellman = sg;
  });
  hl = T((nk, ug) => {
    ug.exports = ki().EventEmitter;
  });
  pg = T((fk, cg) => {
    function lg(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function(f) {
          return Object.getOwnPropertyDescriptor(t, f).enumerable;
        })), r.push.apply(r, o);
      }
      return r;
    }
    function xS(t) {
      for (var e = 1;e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? lg(Object(r), true).forEach(function(o) {
          SS(t, o, r[o]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(o) {
          Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
        });
      }
      return t;
    }
    function SS(t, e, r) {
      return e in t ? Object.defineProperty(t, e, { value: r, enumerable: true, configurable: true, writable: true }) : t[e] = r, t;
    }
    function ES(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function dg(t, e) {
      for (var r = 0;r < e.length; r++) {
        var o = e[r];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(t, o.key, o);
      }
    }
    function AS(t, e, r) {
      return e && dg(t.prototype, e), r && dg(t, r), t;
    }
    var RS = Ut(), qs = RS.Buffer, BS = $f(), ul = BS.inspect, qS = ul && ul.custom || "inspect";
    function IS(t, e, r) {
      qs.prototype.copy.call(t, e, r);
    }
    cg.exports = function() {
      function t() {
        ES(this, t), this.head = null, this.tail = null, this.length = 0;
      }
      return AS(t, [{ key: "push", value: function(r) {
        var o = { data: r, next: null };
        this.length > 0 ? this.tail.next = o : this.head = o, this.tail = o, ++this.length;
      } }, { key: "unshift", value: function(r) {
        var o = { data: r, next: this.head };
        this.length === 0 && (this.tail = o), this.head = o, ++this.length;
      } }, { key: "shift", value: function() {
        if (this.length !== 0) {
          var r = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
        }
      } }, { key: "clear", value: function() {
        this.head = this.tail = null, this.length = 0;
      } }, { key: "join", value: function(r) {
        if (this.length === 0)
          return "";
        for (var o = this.head, f = "" + o.data;o = o.next; )
          f += r + o.data;
        return f;
      } }, { key: "concat", value: function(r) {
        if (this.length === 0)
          return qs.alloc(0);
        for (var o = qs.allocUnsafe(r >>> 0), f = this.head, p = 0;f; )
          IS(f.data, o, p), p += f.data.length, f = f.next;
        return o;
      } }, { key: "consume", value: function(r, o) {
        var f;
        return r < this.head.data.length ? (f = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : r === this.head.data.length ? f = this.shift() : f = o ? this._getString(r) : this._getBuffer(r), f;
      } }, { key: "first", value: function() {
        return this.head.data;
      } }, { key: "_getString", value: function(r) {
        var o = this.head, f = 1, p = o.data;
        for (r -= p.length;o = o.next; ) {
          var m = o.data, y = r > m.length ? m.length : r;
          if (y === m.length ? p += m : p += m.slice(0, r), r -= y, r === 0) {
            y === m.length ? (++f, o.next ? this.head = o.next : this.head = this.tail = null) : (this.head = o, o.data = m.slice(y));
            break;
          }
          ++f;
        }
        return this.length -= f, p;
      } }, { key: "_getBuffer", value: function(r) {
        var o = qs.allocUnsafe(r), f = this.head, p = 1;
        for (f.data.copy(o), r -= f.data.length;f = f.next; ) {
          var m = f.data, y = r > m.length ? m.length : r;
          if (m.copy(o, o.length - r, 0, y), r -= y, r === 0) {
            y === m.length ? (++p, f.next ? this.head = f.next : this.head = this.tail = null) : (this.head = f, f.data = m.slice(y));
            break;
          }
          ++p;
        }
        return this.length -= p, o;
      } }, { key: qS, value: function(r, o) {
        return ul(this, xS({}, o, { depth: 0, customInspect: false }));
      } }]), t;
    }();
  });
  dl = T((ak, bg) => {
    function TS(t, e) {
      var r = this, o = this._readableState && this._readableState.destroyed, f = this._writableState && this._writableState.destroyed;
      return o || f ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, process.nextTick(ll, this, t)) : process.nextTick(ll, this, t)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t || null, function(p) {
        !e && p ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(Is, r) : (r._writableState.errorEmitted = true, process.nextTick(vg, r, p)) : process.nextTick(vg, r, p) : e ? (process.nextTick(Is, r), e(p)) : process.nextTick(Is, r);
      }), this);
    }
    function vg(t, e) {
      ll(t, e), Is(t);
    }
    function Is(t) {
      t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
    }
    function kS() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
    function ll(t, e) {
      t.emit("error", e);
    }
    function LS(t, e) {
      var { _readableState: r, _writableState: o } = t;
      r && r.autoDestroy || o && o.autoDestroy ? t.destroy(e) : t.emit("error", e);
    }
    bg.exports = { destroy: TS, undestroy: kS, errorOrDestroy: LS };
  });
  kn = T((ok, yg) => {
    function NS(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
    }
    var gg = {};
    function wr(t, e, r) {
      r || (r = Error);
      function o(p, m, y) {
        return typeof e == "string" ? e : e(p, m, y);
      }
      var f = function(p) {
        NS(m, p);
        function m(y, M, x) {
          return p.call(this, o(y, M, x)) || this;
        }
        return m;
      }(r);
      f.prototype.name = r.name, f.prototype.code = t, gg[t] = f;
    }
    function mg(t, e) {
      if (Array.isArray(t)) {
        var r = t.length;
        return t = t.map(function(o) {
          return String(o);
        }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
      } else
        return "of ".concat(e, " ").concat(String(t));
    }
    function DS(t, e, r) {
      return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
    }
    function PS(t, e, r) {
      return (r === undefined || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
    }
    function CS(t, e, r) {
      return typeof r != "number" && (r = 0), r + e.length > t.length ? false : t.indexOf(e, r) !== -1;
    }
    wr("ERR_INVALID_OPT_VALUE", function(t, e) {
      return 'The value "' + e + '" is invalid for option "' + t + '"';
    }, TypeError);
    wr("ERR_INVALID_ARG_TYPE", function(t, e, r) {
      var o;
      typeof e == "string" && DS(e, "not ") ? (o = "must not be", e = e.replace(/^not /, "")) : o = "must be";
      var f;
      if (PS(t, " argument"))
        f = "The ".concat(t, " ").concat(o, " ").concat(mg(e, "type"));
      else {
        var p = CS(t, ".") ? "property" : "argument";
        f = 'The "'.concat(t, '" ').concat(p, " ").concat(o, " ").concat(mg(e, "type"));
      }
      return f += ". Received type ".concat(typeof r), f;
    }, TypeError);
    wr("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    wr("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
      return "The " + t + " method is not implemented";
    });
    wr("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    wr("ERR_STREAM_DESTROYED", function(t) {
      return "Cannot call " + t + " after a stream was destroyed";
    });
    wr("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    wr("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    wr("ERR_STREAM_WRITE_AFTER_END", "write after end");
    wr("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    wr("ERR_UNKNOWN_ENCODING", function(t) {
      return "Unknown encoding: " + t;
    }, TypeError);
    wr("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    yg.exports.codes = gg;
  });
  cl = T((sk, wg) => {
    var OS = kn().codes.ERR_INVALID_OPT_VALUE;
    function FS(t, e, r) {
      return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
    }
    function US(t, e, r, o) {
      var f = FS(e, o, r);
      if (f != null) {
        if (!(isFinite(f) && Math.floor(f) === f) || f < 0) {
          var p = o ? r : "highWaterMark";
          throw new OS(p, f);
        }
        return Math.floor(f);
      }
      return t.objectMode ? 16 : 16 * 1024;
    }
    wg.exports = { getHighWaterMark: US };
  });
  bl = T((hk, Ag) => {
    Ag.exports = ut;
    function _g(t) {
      var e = this;
      this.next = null, this.entry = null, this.finish = function() {
        cE(e, t);
      };
    }
    var xf;
    ut.WritableState = ka;
    var zS = { deprecate: G0() }, xg = hl(), ks = Ut().Buffer, HS = global.Uint8Array || function() {
    };
    function WS(t) {
      return ks.from(t);
    }
    function KS(t) {
      return ks.isBuffer(t) || t instanceof HS;
    }
    var vl = dl(), jS = cl(), ZS = jS.getHighWaterMark, Vi = kn().codes, VS = Vi.ERR_INVALID_ARG_TYPE, $S = Vi.ERR_METHOD_NOT_IMPLEMENTED, GS = Vi.ERR_MULTIPLE_CALLBACK, YS = Vi.ERR_STREAM_CANNOT_PIPE, XS = Vi.ERR_STREAM_DESTROYED, JS = Vi.ERR_STREAM_NULL_VALUES, QS = Vi.ERR_STREAM_WRITE_AFTER_END, eE = Vi.ERR_UNKNOWN_ENCODING, Sf = vl.errorOrDestroy;
    Ie()(ut, xg);
    function tE() {
    }
    function ka(t, e, r) {
      xf = xf || Ln(), t = t || {}, typeof r != "boolean" && (r = e instanceof xf), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = ZS(this, t, "writableHighWaterMark", r), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var o = t.decodeStrings === false;
      this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(f) {
        sE(e, f);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = t.emitClose !== false, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new _g(this);
    }
    ka.prototype.getBuffer = function() {
      for (var e = this.bufferedRequest, r = [];e; )
        r.push(e), e = e.next;
      return r;
    };
    (function() {
      try {
        Object.defineProperty(ka.prototype, "buffer", { get: zS.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
      } catch {
      }
    })();
    var Ts;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (Ts = Function.prototype[Symbol.hasInstance], Object.defineProperty(ut, Symbol.hasInstance, { value: function(e) {
      return Ts.call(this, e) ? true : this !== ut ? false : e && e._writableState instanceof ka;
    } })) : Ts = function(e) {
      return e instanceof this;
    };
    function ut(t) {
      xf = xf || Ln();
      var e = this instanceof xf;
      if (!e && !Ts.call(ut, this))
        return new ut(t);
      this._writableState = new ka(t, this, e), this.writable = true, t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.final == "function" && (this._final = t.final)), xg.call(this);
    }
    ut.prototype.pipe = function() {
      Sf(this, new YS);
    };
    function rE(t, e) {
      var r = new QS;
      Sf(t, r), process.nextTick(e, r);
    }
    function iE(t, e, r, o) {
      var f;
      return r === null ? f = new JS : typeof r != "string" && !e.objectMode && (f = new VS("chunk", ["string", "Buffer"], r)), f ? (Sf(t, f), process.nextTick(o, f), false) : true;
    }
    ut.prototype.write = function(t, e, r) {
      var o = this._writableState, f = false, p = !o.objectMode && KS(t);
      return p && !ks.isBuffer(t) && (t = WS(t)), typeof e == "function" && (r = e, e = null), p ? e = "buffer" : e || (e = o.defaultEncoding), typeof r != "function" && (r = tE), o.ending ? rE(this, r) : (p || iE(this, o, t, r)) && (o.pendingcb++, f = fE(this, o, p, t, e, r)), f;
    };
    ut.prototype.cork = function() {
      this._writableState.corked++;
    };
    ut.prototype.uncork = function() {
      var t = this._writableState;
      t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && Sg(this, t));
    };
    ut.prototype.setDefaultEncoding = function(e) {
      if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
        throw new eE(e);
      return this._writableState.defaultEncoding = e, this;
    };
    Object.defineProperty(ut.prototype, "writableBuffer", { enumerable: false, get: function() {
      return this._writableState && this._writableState.getBuffer();
    } });
    function nE(t, e, r) {
      return !t.objectMode && t.decodeStrings !== false && typeof e == "string" && (e = ks.from(e, r)), e;
    }
    Object.defineProperty(ut.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } });
    function fE(t, e, r, o, f, p) {
      if (!r) {
        var m = nE(e, o, f);
        o !== m && (r = true, f = "buffer", o = m);
      }
      var y = e.objectMode ? 1 : o.length;
      e.length += y;
      var M = e.length < e.highWaterMark;
      if (M || (e.needDrain = true), e.writing || e.corked) {
        var x = e.lastBufferedRequest;
        e.lastBufferedRequest = { chunk: o, encoding: f, isBuf: r, callback: p, next: null }, x ? x.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
      } else
        pl(t, e, false, y, o, f, p);
      return M;
    }
    function pl(t, e, r, o, f, p, m) {
      e.writelen = o, e.writecb = m, e.writing = true, e.sync = true, e.destroyed ? e.onwrite(new XS("write")) : r ? t._writev(f, e.onwrite) : t._write(f, p, e.onwrite), e.sync = false;
    }
    function aE(t, e, r, o, f) {
      --e.pendingcb, r ? (process.nextTick(f, o), process.nextTick(Ta, t, e), t._writableState.errorEmitted = true, Sf(t, o)) : (f(o), t._writableState.errorEmitted = true, Sf(t, o), Ta(t, e));
    }
    function oE(t) {
      t.writing = false, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
    }
    function sE(t, e) {
      var r = t._writableState, o = r.sync, f = r.writecb;
      if (typeof f != "function")
        throw new GS;
      if (oE(r), e)
        aE(t, r, o, e, f);
      else {
        var p = Eg(r) || t.destroyed;
        !p && !r.corked && !r.bufferProcessing && r.bufferedRequest && Sg(t, r), o ? process.nextTick(Mg, t, r, p, f) : Mg(t, r, p, f);
      }
    }
    function Mg(t, e, r, o) {
      r || hE(t, e), e.pendingcb--, o(), Ta(t, e);
    }
    function hE(t, e) {
      e.length === 0 && e.needDrain && (e.needDrain = false, t.emit("drain"));
    }
    function Sg(t, e) {
      e.bufferProcessing = true;
      var r = e.bufferedRequest;
      if (t._writev && r && r.next) {
        var o = e.bufferedRequestCount, f = new Array(o), p = e.corkedRequestsFree;
        p.entry = r;
        for (var m = 0, y = true;r; )
          f[m] = r, r.isBuf || (y = false), r = r.next, m += 1;
        f.allBuffers = y, pl(t, e, true, e.length, f, "", p.finish), e.pendingcb++, e.lastBufferedRequest = null, p.next ? (e.corkedRequestsFree = p.next, p.next = null) : e.corkedRequestsFree = new _g(e), e.bufferedRequestCount = 0;
      } else {
        for (;r; ) {
          var { chunk: M, encoding: x, callback: S } = r, E = e.objectMode ? 1 : M.length;
          if (pl(t, e, false, E, M, x, S), r = r.next, e.bufferedRequestCount--, e.writing)
            break;
        }
        r === null && (e.lastBufferedRequest = null);
      }
      e.bufferedRequest = r, e.bufferProcessing = false;
    }
    ut.prototype._write = function(t, e, r) {
      r(new $S("_write()"));
    };
    ut.prototype._writev = null;
    ut.prototype.end = function(t, e, r) {
      var o = this._writableState;
      return typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null), t != null && this.write(t, e), o.corked && (o.corked = 1, this.uncork()), o.ending || dE(this, o, r), this;
    };
    Object.defineProperty(ut.prototype, "writableLength", { enumerable: false, get: function() {
      return this._writableState.length;
    } });
    function Eg(t) {
      return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
    }
    function uE(t, e) {
      t._final(function(r) {
        e.pendingcb--, r && Sf(t, r), e.prefinished = true, t.emit("prefinish"), Ta(t, e);
      });
    }
    function lE(t, e) {
      !e.prefinished && !e.finalCalled && (typeof t._final == "function" && !e.destroyed ? (e.pendingcb++, e.finalCalled = true, process.nextTick(uE, t, e)) : (e.prefinished = true, t.emit("prefinish")));
    }
    function Ta(t, e) {
      var r = Eg(e);
      if (r && (lE(t, e), e.pendingcb === 0 && (e.finished = true, t.emit("finish"), e.autoDestroy))) {
        var o = t._readableState;
        (!o || o.autoDestroy && o.endEmitted) && t.destroy();
      }
      return r;
    }
    function dE(t, e, r) {
      e.ending = true, Ta(t, e), r && (e.finished ? process.nextTick(r) : t.once("finish", r)), e.ended = true, t.writable = false;
    }
    function cE(t, e, r) {
      var o = t.entry;
      for (t.entry = null;o; ) {
        var f = o.callback;
        e.pendingcb--, f(r), o = o.next;
      }
      e.corkedRequestsFree.next = t;
    }
    Object.defineProperty(ut.prototype, "destroyed", { enumerable: false, get: function() {
      return this._writableState === undefined ? false : this._writableState.destroyed;
    }, set: function(e) {
      !this._writableState || (this._writableState.destroyed = e);
    } });
    ut.prototype.destroy = vl.destroy;
    ut.prototype._undestroy = vl.undestroy;
    ut.prototype._destroy = function(t, e) {
      e(t);
    };
  });
  Ln = T((uk, Bg) => {
    var pE = Object.keys || function(t) {
      var e = [];
      for (var r in t)
        e.push(r);
      return e;
    };
    Bg.exports = ti;
    var Rg = yl(), gl = bl();
    Ie()(ti, Rg);
    for (ml = pE(gl.prototype), Ls = 0;Ls < ml.length; Ls++)
      Ns = ml[Ls], ti.prototype[Ns] || (ti.prototype[Ns] = gl.prototype[Ns]);
    var ml, Ns, Ls;
    function ti(t) {
      if (!(this instanceof ti))
        return new ti(t);
      Rg.call(this, t), gl.call(this, t), this.allowHalfOpen = true, t && (t.readable === false && (this.readable = false), t.writable === false && (this.writable = false), t.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", vE)));
    }
    Object.defineProperty(ti.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } });
    Object.defineProperty(ti.prototype, "writableBuffer", { enumerable: false, get: function() {
      return this._writableState && this._writableState.getBuffer();
    } });
    Object.defineProperty(ti.prototype, "writableLength", { enumerable: false, get: function() {
      return this._writableState.length;
    } });
    function vE() {
      this._writableState.ended || process.nextTick(bE, this);
    }
    function bE(t) {
      t.end();
    }
    Object.defineProperty(ti.prototype, "destroyed", { enumerable: false, get: function() {
      return this._readableState === undefined || this._writableState === undefined ? false : this._readableState.destroyed && this._writableState.destroyed;
    }, set: function(e) {
      this._readableState === undefined || this._writableState === undefined || (this._readableState.destroyed = e, this._writableState.destroyed = e);
    } });
  });
  Ds = T((lk, Tg) => {
    var qg = kn().codes.ERR_STREAM_PREMATURE_CLOSE;
    function mE(t) {
      var e = false;
      return function() {
        if (!e) {
          e = true;
          for (var r = arguments.length, o = new Array(r), f = 0;f < r; f++)
            o[f] = arguments[f];
          t.apply(this, o);
        }
      };
    }
    function gE() {
    }
    function yE(t) {
      return t.setHeader && typeof t.abort == "function";
    }
    function Ig(t, e, r) {
      if (typeof e == "function")
        return Ig(t, null, e);
      e || (e = {}), r = mE(r || gE);
      var o = e.readable || e.readable !== false && t.readable, f = e.writable || e.writable !== false && t.writable, p = function() {
        t.writable || y();
      }, m = t._writableState && t._writableState.finished, y = function() {
        f = false, m = true, o || r.call(t);
      }, M = t._readableState && t._readableState.endEmitted, x = function() {
        o = false, M = true, f || r.call(t);
      }, S = function(L) {
        r.call(t, L);
      }, E = function() {
        var L;
        if (o && !M)
          return (!t._readableState || !t._readableState.ended) && (L = new qg), r.call(t, L);
        if (f && !m)
          return (!t._writableState || !t._writableState.ended) && (L = new qg), r.call(t, L);
      }, B = function() {
        t.req.on("finish", y);
      };
      return yE(t) ? (t.on("complete", y), t.on("abort", E), t.req ? B() : t.on("request", B)) : f && !t._writableState && (t.on("end", p), t.on("close", p)), t.on("end", x), t.on("finish", y), e.error !== false && t.on("error", S), t.on("close", E), function() {
        t.removeListener("complete", y), t.removeListener("abort", E), t.removeListener("request", B), t.req && t.req.removeListener("finish", y), t.removeListener("end", p), t.removeListener("close", p), t.removeListener("finish", y), t.removeListener("end", x), t.removeListener("error", S), t.removeListener("close", E);
      };
    }
    Tg.exports = Ig;
  });
  Lg = T((dk, kg) => {
    var Ps;
    function $i(t, e, r) {
      return e in t ? Object.defineProperty(t, e, { value: r, enumerable: true, configurable: true, writable: true }) : t[e] = r, t;
    }
    var wE = Ds(), Gi = Symbol("lastResolve"), Nn = Symbol("lastReject"), La = Symbol("error"), Cs = Symbol("ended"), Dn = Symbol("lastPromise"), wl = Symbol("handlePromise"), Pn = Symbol("stream");
    function Yi(t, e) {
      return { value: t, done: e };
    }
    function ME(t) {
      var e = t[Gi];
      if (e !== null) {
        var r = t[Pn].read();
        r !== null && (t[Dn] = null, t[Gi] = null, t[Nn] = null, e(Yi(r, false)));
      }
    }
    function _E(t) {
      process.nextTick(ME, t);
    }
    function xE(t, e) {
      return function(r, o) {
        t.then(function() {
          if (e[Cs]) {
            r(Yi(undefined, true));
            return;
          }
          e[wl](r, o);
        }, o);
      };
    }
    var SE = Object.getPrototypeOf(function() {
    }), EE = Object.setPrototypeOf((Ps = { get stream() {
      return this[Pn];
    }, next: function() {
      var e = this, r = this[La];
      if (r !== null)
        return Promise.reject(r);
      if (this[Cs])
        return Promise.resolve(Yi(undefined, true));
      if (this[Pn].destroyed)
        return new Promise(function(m, y) {
          process.nextTick(function() {
            e[La] ? y(e[La]) : m(Yi(undefined, true));
          });
        });
      var o = this[Dn], f;
      if (o)
        f = new Promise(xE(o, this));
      else {
        var p = this[Pn].read();
        if (p !== null)
          return Promise.resolve(Yi(p, false));
        f = new Promise(this[wl]);
      }
      return this[Dn] = f, f;
    } }, $i(Ps, Symbol.asyncIterator, function() {
      return this;
    }), $i(Ps, "return", function() {
      var e = this;
      return new Promise(function(r, o) {
        e[Pn].destroy(null, function(f) {
          if (f) {
            o(f);
            return;
          }
          r(Yi(undefined, true));
        });
      });
    }), Ps), SE), AE = function(e) {
      var r, o = Object.create(EE, (r = {}, $i(r, Pn, { value: e, writable: true }), $i(r, Gi, { value: null, writable: true }), $i(r, Nn, { value: null, writable: true }), $i(r, La, { value: null, writable: true }), $i(r, Cs, { value: e._readableState.endEmitted, writable: true }), $i(r, wl, { value: function(p, m) {
        var y = o[Pn].read();
        y ? (o[Dn] = null, o[Gi] = null, o[Nn] = null, p(Yi(y, false))) : (o[Gi] = p, o[Nn] = m);
      }, writable: true }), r));
      return o[Dn] = null, wE(e, function(f) {
        if (f && f.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var p = o[Nn];
          p !== null && (o[Dn] = null, o[Gi] = null, o[Nn] = null, p(f)), o[La] = f;
          return;
        }
        var m = o[Gi];
        m !== null && (o[Dn] = null, o[Gi] = null, o[Nn] = null, m(Yi(undefined, true))), o[Cs] = true;
      }), e.on("readable", _E.bind(null, o)), o;
    };
    kg.exports = AE;
  });
  Dg = T((ck, Ng) => {
    Ng.exports = function() {
      throw new Error("Readable.from is not available in the browser");
    };
  });
  yl = T((vk, jg) => {
    jg.exports = Oe;
    var Ef;
    Oe.ReadableState = Fg;
    var pk = ki().EventEmitter, Og = function(e, r) {
      return e.listeners(r).length;
    }, Da = hl(), Os = Ut().Buffer, RE = global.Uint8Array || function() {
    };
    function BE(t) {
      return Os.from(t);
    }
    function qE(t) {
      return Os.isBuffer(t) || t instanceof RE;
    }
    var Ml = $f(), De;
    Ml && Ml.debuglog ? De = Ml.debuglog("stream") : De = function() {
    };
    var IE = pg(), Bl = dl(), TE = cl(), kE = TE.getHighWaterMark, Fs = kn().codes, LE = Fs.ERR_INVALID_ARG_TYPE, NE = Fs.ERR_STREAM_PUSH_AFTER_EOF, DE = Fs.ERR_METHOD_NOT_IMPLEMENTED, PE = Fs.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, Af, _l, xl;
    Ie()(Oe, Da);
    var Na = Bl.errorOrDestroy, Sl = ["error", "close", "destroy", "pause", "resume"];
    function CE(t, e, r) {
      if (typeof t.prependListener == "function")
        return t.prependListener(e, r);
      !t._events || !t._events[e] ? t.on(e, r) : Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
    }
    function Fg(t, e, r) {
      Ef = Ef || Ln(), t = t || {}, typeof r != "boolean" && (r = e instanceof Ef), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = kE(this, t, "readableHighWaterMark", r), this.buffer = new IE, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = t.emitClose !== false, this.autoDestroy = !!t.autoDestroy, this.destroyed = false, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t.encoding && (Af || (Af = (Qf(), ur(Jf)).StringDecoder), this.decoder = new Af(t.encoding), this.encoding = t.encoding);
    }
    function Oe(t) {
      if (Ef = Ef || Ln(), !(this instanceof Oe))
        return new Oe(t);
      var e = this instanceof Ef;
      this._readableState = new Fg(t, this, e), this.readable = true, t && (typeof t.read == "function" && (this._read = t.read), typeof t.destroy == "function" && (this._destroy = t.destroy)), Da.call(this);
    }
    Object.defineProperty(Oe.prototype, "destroyed", { enumerable: false, get: function() {
      return this._readableState === undefined ? false : this._readableState.destroyed;
    }, set: function(e) {
      !this._readableState || (this._readableState.destroyed = e);
    } });
    Oe.prototype.destroy = Bl.destroy;
    Oe.prototype._undestroy = Bl.undestroy;
    Oe.prototype._destroy = function(t, e) {
      e(t);
    };
    Oe.prototype.push = function(t, e) {
      var r = this._readableState, o;
      return r.objectMode ? o = true : typeof t == "string" && (e = e || r.defaultEncoding, e !== r.encoding && (t = Os.from(t, e), e = ""), o = true), Ug(this, t, e, false, o);
    };
    Oe.prototype.unshift = function(t) {
      return Ug(this, t, null, true, false);
    };
    function Ug(t, e, r, o, f) {
      De("readableAddChunk", e);
      var p = t._readableState;
      if (e === null)
        p.reading = false, UE(t, p);
      else {
        var m;
        if (f || (m = OE(p, e)), m)
          Na(t, m);
        else if (p.objectMode || e && e.length > 0)
          if (typeof e != "string" && !p.objectMode && Object.getPrototypeOf(e) !== Os.prototype && (e = BE(e)), o)
            p.endEmitted ? Na(t, new PE) : El(t, p, e, true);
          else if (p.ended)
            Na(t, new NE);
          else {
            if (p.destroyed)
              return false;
            p.reading = false, p.decoder && !r ? (e = p.decoder.write(e), p.objectMode || e.length !== 0 ? El(t, p, e, false) : Rl(t, p)) : El(t, p, e, false);
          }
        else
          o || (p.reading = false, Rl(t, p));
      }
      return !p.ended && (p.length < p.highWaterMark || p.length === 0);
    }
    function El(t, e, r, o) {
      e.flowing && e.length === 0 && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, o ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && Us(t)), Rl(t, e);
    }
    function OE(t, e) {
      var r;
      return !qE(e) && typeof e != "string" && e !== undefined && !t.objectMode && (r = new LE("chunk", ["string", "Buffer", "Uint8Array"], e)), r;
    }
    Oe.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Oe.prototype.setEncoding = function(t) {
      Af || (Af = (Qf(), ur(Jf)).StringDecoder);
      var e = new Af(t);
      this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
      for (var r = this._readableState.buffer.head, o = "";r !== null; )
        o += e.write(r.data), r = r.next;
      return this._readableState.buffer.clear(), o !== "" && this._readableState.buffer.push(o), this._readableState.length = o.length, this;
    };
    var Pg = 1073741824;
    function FE(t) {
      return t >= Pg ? t = Pg : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
    }
    function Cg(t, e) {
      return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = FE(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = true, 0));
    }
    Oe.prototype.read = function(t) {
      De("read", t), t = parseInt(t, 10);
      var e = this._readableState, r = t;
      if (t !== 0 && (e.emittedReadable = false), t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
        return De("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? Al(this) : Us(this), null;
      if (t = Cg(t, e), t === 0 && e.ended)
        return e.length === 0 && Al(this), null;
      var o = e.needReadable;
      De("need readable", o), (e.length === 0 || e.length - t < e.highWaterMark) && (o = true, De("length less than watermark", o)), e.ended || e.reading ? (o = false, De("reading or ended", o)) : o && (De("do read"), e.reading = true, e.sync = true, e.length === 0 && (e.needReadable = true), this._read(e.highWaterMark), e.sync = false, e.reading || (t = Cg(r, e)));
      var f;
      return t > 0 ? f = Wg(t, e) : f = null, f === null ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), e.length === 0 && (e.ended || (e.needReadable = true), r !== t && e.ended && Al(this)), f !== null && this.emit("data", f), f;
    };
    function UE(t, e) {
      if (De("onEofChunk"), !e.ended) {
        if (e.decoder) {
          var r = e.decoder.end();
          r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
        }
        e.ended = true, e.sync ? Us(t) : (e.needReadable = false, e.emittedReadable || (e.emittedReadable = true, zg(t)));
      }
    }
    function Us(t) {
      var e = t._readableState;
      De("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = false, e.emittedReadable || (De("emitReadable", e.flowing), e.emittedReadable = true, process.nextTick(zg, t));
    }
    function zg(t) {
      var e = t._readableState;
      De("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = false), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, ql(t);
    }
    function Rl(t, e) {
      e.readingMore || (e.readingMore = true, process.nextTick(zE, t, e));
    }
    function zE(t, e) {
      for (;!e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0); ) {
        var r = e.length;
        if (De("maybeReadMore read 0"), t.read(0), r === e.length)
          break;
      }
      e.readingMore = false;
    }
    Oe.prototype._read = function(t) {
      Na(this, new DE("_read()"));
    };
    Oe.prototype.pipe = function(t, e) {
      var r = this, o = this._readableState;
      switch (o.pipesCount) {
        case 0:
          o.pipes = t;
          break;
        case 1:
          o.pipes = [o.pipes, t];
          break;
        default:
          o.pipes.push(t);
          break;
      }
      o.pipesCount += 1, De("pipe count=%d opts=%j", o.pipesCount, e);
      var f = (!e || e.end !== false) && t !== process.stdout && t !== process.stderr, p = f ? y : ge;
      o.endEmitted ? process.nextTick(p) : r.once("end", p), t.on("unpipe", m);
      function m(_e, N) {
        De("onunpipe"), _e === r && N && N.hasUnpiped === false && (N.hasUnpiped = true, S());
      }
      function y() {
        De("onend"), t.end();
      }
      var M = HE(r);
      t.on("drain", M);
      var x = false;
      function S() {
        De("cleanup"), t.removeListener("close", q), t.removeListener("finish", L), t.removeListener("drain", M), t.removeListener("error", B), t.removeListener("unpipe", m), r.removeListener("end", y), r.removeListener("end", ge), r.removeListener("data", E), x = true, o.awaitDrain && (!t._writableState || t._writableState.needDrain) && M();
      }
      r.on("data", E);
      function E(_e) {
        De("ondata");
        var N = t.write(_e);
        De("dest.write", N), N === false && ((o.pipesCount === 1 && o.pipes === t || o.pipesCount > 1 && Kg(o.pipes, t) !== -1) && !x && (De("false write response, pause", o.awaitDrain), o.awaitDrain++), r.pause());
      }
      function B(_e) {
        De("onerror", _e), ge(), t.removeListener("error", B), Og(t, "error") === 0 && Na(t, _e);
      }
      CE(t, "error", B);
      function q() {
        t.removeListener("finish", L), ge();
      }
      t.once("close", q);
      function L() {
        De("onfinish"), t.removeListener("close", q), ge();
      }
      t.once("finish", L);
      function ge() {
        De("unpipe"), r.unpipe(t);
      }
      return t.emit("pipe", r), o.flowing || (De("pipe resume"), r.resume()), t;
    };
    function HE(t) {
      return function() {
        var r = t._readableState;
        De("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && Og(t, "data") && (r.flowing = true, ql(t));
      };
    }
    Oe.prototype.unpipe = function(t) {
      var e = this._readableState, r = { hasUnpiped: false };
      if (e.pipesCount === 0)
        return this;
      if (e.pipesCount === 1)
        return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = false, t && t.emit("unpipe", this, r), this);
      if (!t) {
        var { pipes: o, pipesCount: f } = e;
        e.pipes = null, e.pipesCount = 0, e.flowing = false;
        for (var p = 0;p < f; p++)
          o[p].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      var m = Kg(e.pipes, t);
      return m === -1 ? this : (e.pipes.splice(m, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this);
    };
    Oe.prototype.on = function(t, e) {
      var r = Da.prototype.on.call(this, t, e), o = this._readableState;
      return t === "data" ? (o.readableListening = this.listenerCount("readable") > 0, o.flowing !== false && this.resume()) : t === "readable" && !o.endEmitted && !o.readableListening && (o.readableListening = o.needReadable = true, o.flowing = false, o.emittedReadable = false, De("on readable", o.length, o.reading), o.length ? Us(this) : o.reading || process.nextTick(WE, this)), r;
    };
    Oe.prototype.addListener = Oe.prototype.on;
    Oe.prototype.removeListener = function(t, e) {
      var r = Da.prototype.removeListener.call(this, t, e);
      return t === "readable" && process.nextTick(Hg, this), r;
    };
    Oe.prototype.removeAllListeners = function(t) {
      var e = Da.prototype.removeAllListeners.apply(this, arguments);
      return (t === "readable" || t === undefined) && process.nextTick(Hg, this), e;
    };
    function Hg(t) {
      var e = t._readableState;
      e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = true : t.listenerCount("data") > 0 && t.resume();
    }
    function WE(t) {
      De("readable nexttick read 0"), t.read(0);
    }
    Oe.prototype.resume = function() {
      var t = this._readableState;
      return t.flowing || (De("resume"), t.flowing = !t.readableListening, KE(this, t)), t.paused = false, this;
    };
    function KE(t, e) {
      e.resumeScheduled || (e.resumeScheduled = true, process.nextTick(jE, t, e));
    }
    function jE(t, e) {
      De("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = false, t.emit("resume"), ql(t), e.flowing && !e.reading && t.read(0);
    }
    Oe.prototype.pause = function() {
      return De("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (De("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
    };
    function ql(t) {
      var e = t._readableState;
      for (De("flow", e.flowing);e.flowing && t.read() !== null; )
        ;
    }
    Oe.prototype.wrap = function(t) {
      var e = this, r = this._readableState, o = false;
      t.on("end", function() {
        if (De("wrapped end"), r.decoder && !r.ended) {
          var m = r.decoder.end();
          m && m.length && e.push(m);
        }
        e.push(null);
      }), t.on("data", function(m) {
        if (De("wrapped data"), r.decoder && (m = r.decoder.write(m)), !(r.objectMode && m == null) && !(!r.objectMode && (!m || !m.length))) {
          var y = e.push(m);
          y || (o = true, t.pause());
        }
      });
      for (var f in t)
        this[f] === undefined && typeof t[f] == "function" && (this[f] = function(y) {
          return function() {
            return t[y].apply(t, arguments);
          };
        }(f));
      for (var p = 0;p < Sl.length; p++)
        t.on(Sl[p], this.emit.bind(this, Sl[p]));
      return this._read = function(m) {
        De("wrapped _read", m), o && (o = false, t.resume());
      }, this;
    };
    typeof Symbol == "function" && (Oe.prototype[Symbol.asyncIterator] = function() {
      return _l === undefined && (_l = Lg()), _l(this);
    });
    Object.defineProperty(Oe.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } });
    Object.defineProperty(Oe.prototype, "readableBuffer", { enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } });
    Object.defineProperty(Oe.prototype, "readableFlowing", { enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(e) {
      this._readableState && (this._readableState.flowing = e);
    } });
    Oe._fromList = Wg;
    Object.defineProperty(Oe.prototype, "readableLength", { enumerable: false, get: function() {
      return this._readableState.length;
    } });
    function Wg(t, e) {
      if (e.length === 0)
        return null;
      var r;
      return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.first() : r = e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r;
    }
    function Al(t) {
      var e = t._readableState;
      De("endReadable", e.endEmitted), e.endEmitted || (e.ended = true, process.nextTick(ZE, e, t));
    }
    function ZE(t, e) {
      if (De("endReadableNT", t.endEmitted, t.length), !t.endEmitted && t.length === 0 && (t.endEmitted = true, e.readable = false, e.emit("end"), t.autoDestroy)) {
        var r = e._writableState;
        (!r || r.autoDestroy && r.finished) && e.destroy();
      }
    }
    typeof Symbol == "function" && (Oe.from = function(t, e) {
      return xl === undefined && (xl = Dg()), xl(Oe, t, e);
    });
    function Kg(t, e) {
      for (var r = 0, o = t.length;r < o; r++)
        if (t[r] === e)
          return r;
      return -1;
    }
  });
  Il = T((bk, Vg) => {
    Vg.exports = Ei;
    var zs = kn().codes, VE = zs.ERR_METHOD_NOT_IMPLEMENTED, $E = zs.ERR_MULTIPLE_CALLBACK, GE = zs.ERR_TRANSFORM_ALREADY_TRANSFORMING, YE = zs.ERR_TRANSFORM_WITH_LENGTH_0, Hs = Ln();
    Ie()(Ei, Hs);
    function XE(t, e) {
      var r = this._transformState;
      r.transforming = false;
      var o = r.writecb;
      if (o === null)
        return this.emit("error", new $E);
      r.writechunk = null, r.writecb = null, e != null && this.push(e), o(t);
      var f = this._readableState;
      f.reading = false, (f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark);
    }
    function Ei(t) {
      if (!(this instanceof Ei))
        return new Ei(t);
      Hs.call(this, t), this._transformState = { afterTransform: XE.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", JE);
    }
    function JE() {
      var t = this;
      typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(e, r) {
        Zg(t, e, r);
      }) : Zg(this, null, null);
    }
    Ei.prototype.push = function(t, e) {
      return this._transformState.needTransform = false, Hs.prototype.push.call(this, t, e);
    };
    Ei.prototype._transform = function(t, e, r) {
      r(new VE("_transform()"));
    };
    Ei.prototype._write = function(t, e, r) {
      var o = this._transformState;
      if (o.writecb = r, o.writechunk = t, o.writeencoding = e, !o.transforming) {
        var f = this._readableState;
        (o.needTransform || f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark);
      }
    };
    Ei.prototype._read = function(t) {
      var e = this._transformState;
      e.writechunk !== null && !e.transforming ? (e.transforming = true, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = true;
    };
    Ei.prototype._destroy = function(t, e) {
      Hs.prototype._destroy.call(this, t, function(r) {
        e(r);
      });
    };
    function Zg(t, e, r) {
      if (e)
        return t.emit("error", e);
      if (r != null && t.push(r), t._writableState.length)
        throw new YE;
      if (t._transformState.transforming)
        throw new GE;
      return t.push(null);
    }
  });
  Yg = T((mk, Gg) => {
    Gg.exports = Pa;
    var $g = Il();
    Ie()(Pa, $g);
    function Pa(t) {
      if (!(this instanceof Pa))
        return new Pa(t);
      $g.call(this, t);
    }
    Pa.prototype._transform = function(t, e, r) {
      r(null, t);
    };
  });
  t2 = T((gk, e2) => {
    var Tl;
    function QE(t) {
      var e = false;
      return function() {
        e || (e = true, t.apply(undefined, arguments));
      };
    }
    var Qg = kn().codes, eA = Qg.ERR_MISSING_ARGS, tA = Qg.ERR_STREAM_DESTROYED;
    function Xg(t) {
      if (t)
        throw t;
    }
    function rA(t) {
      return t.setHeader && typeof t.abort == "function";
    }
    function iA(t, e, r, o) {
      o = QE(o);
      var f = false;
      t.on("close", function() {
        f = true;
      }), Tl === undefined && (Tl = Ds()), Tl(t, { readable: e, writable: r }, function(m) {
        if (m)
          return o(m);
        f = true, o();
      });
      var p = false;
      return function(m) {
        if (!f && !p) {
          if (p = true, rA(t))
            return t.abort();
          if (typeof t.destroy == "function")
            return t.destroy();
          o(m || new tA("pipe"));
        }
      };
    }
    function Jg(t) {
      t();
    }
    function nA(t, e) {
      return t.pipe(e);
    }
    function fA(t) {
      return !t.length || typeof t[t.length - 1] != "function" ? Xg : t.pop();
    }
    function aA() {
      for (var t = arguments.length, e = new Array(t), r = 0;r < t; r++)
        e[r] = arguments[r];
      var o = fA(e);
      if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
        throw new eA("streams");
      var f, p = e.map(function(m, y) {
        var M = y < e.length - 1, x = y > 0;
        return iA(m, M, x, function(S) {
          f || (f = S), S && p.forEach(Jg), !M && (p.forEach(Jg), o(f));
        });
      });
      return e.reduce(nA);
    }
    e2.exports = aA;
  });
  i2 = T((Mr, r2) => {
    Mr = r2.exports = yl();
    Mr.Stream = Mr;
    Mr.Readable = Mr;
    Mr.Writable = bl();
    Mr.Duplex = Ln();
    Mr.Transform = Il();
    Mr.PassThrough = Yg();
    Mr.finished = Ds();
    Mr.pipeline = t2();
  });
  Ws = T((n2, kl) => {
    (function(t, e) {
      function r(h, s) {
        if (!h)
          throw new Error(s || "Assertion failed");
      }
      function o(h, s) {
        h.super_ = s;
        var u = function() {
        };
        u.prototype = s.prototype, h.prototype = new u, h.prototype.constructor = h;
      }
      function f(h, s, u) {
        if (f.isBN(h))
          return h;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, h !== null && ((s === "le" || s === "be") && (u = s, s = 10), this._init(h || 0, s || 10, u || "be"));
      }
      typeof t == "object" ? t.exports = f : e.BN = f, f.BN = f, f.wordSize = 26;
      var p;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? p = window.Buffer : p = ji().Buffer;
      } catch {
      }
      f.isBN = function(s) {
        return s instanceof f ? true : s !== null && typeof s == "object" && s.constructor.wordSize === f.wordSize && Array.isArray(s.words);
      }, f.max = function(s, u) {
        return s.cmp(u) > 0 ? s : u;
      }, f.min = function(s, u) {
        return s.cmp(u) < 0 ? s : u;
      }, f.prototype._init = function(s, u, c) {
        if (typeof s == "number")
          return this._initNumber(s, u, c);
        if (typeof s == "object")
          return this._initArray(s, u, c);
        u === "hex" && (u = 16), r(u === (u | 0) && u >= 2 && u <= 36), s = s.toString().replace(/\s+/g, "");
        var b = 0;
        s[0] === "-" && (b++, this.negative = 1), b < s.length && (u === 16 ? this._parseHex(s, b, c) : (this._parseBase(s, u, b), c === "le" && this._initArray(this.toArray(), u, c)));
      }, f.prototype._initNumber = function(s, u, c) {
        s < 0 && (this.negative = 1, s = -s), s < 67108864 ? (this.words = [s & 67108863], this.length = 1) : s < 4503599627370496 ? (this.words = [s & 67108863, s / 67108864 & 67108863], this.length = 2) : (r(s < 9007199254740992), this.words = [s & 67108863, s / 67108864 & 67108863, 1], this.length = 3), c === "le" && this._initArray(this.toArray(), u, c);
      }, f.prototype._initArray = function(s, u, c) {
        if (r(typeof s.length == "number"), s.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(s.length / 3), this.words = new Array(this.length);
        for (var b = 0;b < this.length; b++)
          this.words[b] = 0;
        var l, n, d = 0;
        if (c === "be")
          for (b = s.length - 1, l = 0;b >= 0; b -= 3)
            n = s[b] | s[b - 1] << 8 | s[b - 2] << 16, this.words[l] |= n << d & 67108863, this.words[l + 1] = n >>> 26 - d & 67108863, d += 24, d >= 26 && (d -= 26, l++);
        else if (c === "le")
          for (b = 0, l = 0;b < s.length; b += 3)
            n = s[b] | s[b + 1] << 8 | s[b + 2] << 16, this.words[l] |= n << d & 67108863, this.words[l + 1] = n >>> 26 - d & 67108863, d += 24, d >= 26 && (d -= 26, l++);
        return this._strip();
      };
      function m(h, s) {
        var u = h.charCodeAt(s);
        if (u >= 48 && u <= 57)
          return u - 48;
        if (u >= 65 && u <= 70)
          return u - 55;
        if (u >= 97 && u <= 102)
          return u - 87;
        r(false, "Invalid character in " + h);
      }
      function y(h, s, u) {
        var c = m(h, u);
        return u - 1 >= s && (c |= m(h, u - 1) << 4), c;
      }
      f.prototype._parseHex = function(s, u, c) {
        this.length = Math.ceil((s.length - u) / 6), this.words = new Array(this.length);
        for (var b = 0;b < this.length; b++)
          this.words[b] = 0;
        var l = 0, n = 0, d;
        if (c === "be")
          for (b = s.length - 1;b >= u; b -= 2)
            d = y(s, u, b) << l, this.words[n] |= d & 67108863, l >= 18 ? (l -= 18, n += 1, this.words[n] |= d >>> 26) : l += 8;
        else {
          var w = s.length - u;
          for (b = w % 2 === 0 ? u + 1 : u;b < s.length; b += 2)
            d = y(s, u, b) << l, this.words[n] |= d & 67108863, l >= 18 ? (l -= 18, n += 1, this.words[n] |= d >>> 26) : l += 8;
        }
        this._strip();
      };
      function M(h, s, u, c) {
        for (var b = 0, l = 0, n = Math.min(h.length, u), d = s;d < n; d++) {
          var w = h.charCodeAt(d) - 48;
          b *= c, w >= 49 ? l = w - 49 + 10 : w >= 17 ? l = w - 17 + 10 : l = w, r(w >= 0 && l < c, "Invalid character"), b += l;
        }
        return b;
      }
      f.prototype._parseBase = function(s, u, c) {
        this.words = [0], this.length = 1;
        for (var b = 0, l = 1;l <= 67108863; l *= u)
          b++;
        b--, l = l / u | 0;
        for (var n = s.length - c, d = n % b, w = Math.min(n, n - d) + c, g = 0, _ = c;_ < w; _ += b)
          g = M(s, _, _ + b, u), this.imuln(l), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g);
        if (d !== 0) {
          var A = 1;
          for (g = M(s, _, s.length, u), _ = 0;_ < d; _++)
            A *= u;
          this.imuln(A), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g);
        }
        this._strip();
      }, f.prototype.copy = function(s) {
        s.words = new Array(this.length);
        for (var u = 0;u < this.length; u++)
          s.words[u] = this.words[u];
        s.length = this.length, s.negative = this.negative, s.red = this.red;
      };
      function x(h, s) {
        h.words = s.words, h.length = s.length, h.negative = s.negative, h.red = s.red;
      }
      if (f.prototype._move = function(s) {
        x(s, this);
      }, f.prototype.clone = function() {
        var s = new f(null);
        return this.copy(s), s;
      }, f.prototype._expand = function(s) {
        for (;this.length < s; )
          this.words[this.length++] = 0;
        return this;
      }, f.prototype._strip = function() {
        for (;this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, f.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, typeof Symbol < "u" && typeof Symbol.for == "function")
        try {
          f.prototype[Symbol.for("nodejs.util.inspect.custom")] = S;
        } catch {
          f.prototype.inspect = S;
        }
      else
        f.prototype.inspect = S;
      function S() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var E = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], B = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], q = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      f.prototype.toString = function(s, u) {
        s = s || 10, u = u | 0 || 1;
        var c;
        if (s === 16 || s === "hex") {
          c = "";
          for (var b = 0, l = 0, n = 0;n < this.length; n++) {
            var d = this.words[n], w = ((d << b | l) & 16777215).toString(16);
            l = d >>> 24 - b & 16777215, b += 2, b >= 26 && (b -= 26, n--), l !== 0 || n !== this.length - 1 ? c = E[6 - w.length] + w + c : c = w + c;
          }
          for (l !== 0 && (c = l.toString(16) + c);c.length % u !== 0; )
            c = "0" + c;
          return this.negative !== 0 && (c = "-" + c), c;
        }
        if (s === (s | 0) && s >= 2 && s <= 36) {
          var g = B[s], _ = q[s];
          c = "";
          var A = this.clone();
          for (A.negative = 0;!A.isZero(); ) {
            var R = A.modrn(_).toString(s);
            A = A.idivn(_), A.isZero() ? c = R + c : c = E[g - R.length] + R + c;
          }
          for (this.isZero() && (c = "0" + c);c.length % u !== 0; )
            c = "0" + c;
          return this.negative !== 0 && (c = "-" + c), c;
        }
        r(false, "Base should be between 2 and 36");
      }, f.prototype.toNumber = function() {
        var s = this.words[0];
        return this.length === 2 ? s += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? s += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -s : s;
      }, f.prototype.toJSON = function() {
        return this.toString(16, 2);
      }, p && (f.prototype.toBuffer = function(s, u) {
        return this.toArrayLike(p, s, u);
      }), f.prototype.toArray = function(s, u) {
        return this.toArrayLike(Array, s, u);
      };
      var L = function(s, u) {
        return s.allocUnsafe ? s.allocUnsafe(u) : new s(u);
      };
      f.prototype.toArrayLike = function(s, u, c) {
        this._strip();
        var b = this.byteLength(), l = c || Math.max(1, b);
        r(b <= l, "byte array longer than desired length"), r(l > 0, "Requested array length <= 0");
        var n = L(s, l), d = u === "le" ? "LE" : "BE";
        return this["_toArrayLike" + d](n, b), n;
      }, f.prototype._toArrayLikeLE = function(s, u) {
        for (var c = 0, b = 0, l = 0, n = 0;l < this.length; l++) {
          var d = this.words[l] << n | b;
          s[c++] = d & 255, c < s.length && (s[c++] = d >> 8 & 255), c < s.length && (s[c++] = d >> 16 & 255), n === 6 ? (c < s.length && (s[c++] = d >> 24 & 255), b = 0, n = 0) : (b = d >>> 24, n += 2);
        }
        if (c < s.length)
          for (s[c++] = b;c < s.length; )
            s[c++] = 0;
      }, f.prototype._toArrayLikeBE = function(s, u) {
        for (var c = s.length - 1, b = 0, l = 0, n = 0;l < this.length; l++) {
          var d = this.words[l] << n | b;
          s[c--] = d & 255, c >= 0 && (s[c--] = d >> 8 & 255), c >= 0 && (s[c--] = d >> 16 & 255), n === 6 ? (c >= 0 && (s[c--] = d >> 24 & 255), b = 0, n = 0) : (b = d >>> 24, n += 2);
        }
        if (c >= 0)
          for (s[c--] = b;c >= 0; )
            s[c--] = 0;
      }, Math.clz32 ? f.prototype._countBits = function(s) {
        return 32 - Math.clz32(s);
      } : f.prototype._countBits = function(s) {
        var u = s, c = 0;
        return u >= 4096 && (c += 13, u >>>= 13), u >= 64 && (c += 7, u >>>= 7), u >= 8 && (c += 4, u >>>= 4), u >= 2 && (c += 2, u >>>= 2), c + u;
      }, f.prototype._zeroBits = function(s) {
        if (s === 0)
          return 26;
        var u = s, c = 0;
        return (u & 8191) === 0 && (c += 13, u >>>= 13), (u & 127) === 0 && (c += 7, u >>>= 7), (u & 15) === 0 && (c += 4, u >>>= 4), (u & 3) === 0 && (c += 2, u >>>= 2), (u & 1) === 0 && c++, c;
      }, f.prototype.bitLength = function() {
        var s = this.words[this.length - 1], u = this._countBits(s);
        return (this.length - 1) * 26 + u;
      };
      function ge(h) {
        for (var s = new Array(h.bitLength()), u = 0;u < s.length; u++) {
          var c = u / 26 | 0, b = u % 26;
          s[u] = h.words[c] >>> b & 1;
        }
        return s;
      }
      f.prototype.zeroBits = function() {
        if (this.isZero())
          return 0;
        for (var s = 0, u = 0;u < this.length; u++) {
          var c = this._zeroBits(this.words[u]);
          if (s += c, c !== 26)
            break;
        }
        return s;
      }, f.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, f.prototype.toTwos = function(s) {
        return this.negative !== 0 ? this.abs().inotn(s).iaddn(1) : this.clone();
      }, f.prototype.fromTwos = function(s) {
        return this.testn(s - 1) ? this.notn(s).iaddn(1).ineg() : this.clone();
      }, f.prototype.isNeg = function() {
        return this.negative !== 0;
      }, f.prototype.neg = function() {
        return this.clone().ineg();
      }, f.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, f.prototype.iuor = function(s) {
        for (;this.length < s.length; )
          this.words[this.length++] = 0;
        for (var u = 0;u < s.length; u++)
          this.words[u] = this.words[u] | s.words[u];
        return this._strip();
      }, f.prototype.ior = function(s) {
        return r((this.negative | s.negative) === 0), this.iuor(s);
      }, f.prototype.or = function(s) {
        return this.length > s.length ? this.clone().ior(s) : s.clone().ior(this);
      }, f.prototype.uor = function(s) {
        return this.length > s.length ? this.clone().iuor(s) : s.clone().iuor(this);
      }, f.prototype.iuand = function(s) {
        var u;
        this.length > s.length ? u = s : u = this;
        for (var c = 0;c < u.length; c++)
          this.words[c] = this.words[c] & s.words[c];
        return this.length = u.length, this._strip();
      }, f.prototype.iand = function(s) {
        return r((this.negative | s.negative) === 0), this.iuand(s);
      }, f.prototype.and = function(s) {
        return this.length > s.length ? this.clone().iand(s) : s.clone().iand(this);
      }, f.prototype.uand = function(s) {
        return this.length > s.length ? this.clone().iuand(s) : s.clone().iuand(this);
      }, f.prototype.iuxor = function(s) {
        var u, c;
        this.length > s.length ? (u = this, c = s) : (u = s, c = this);
        for (var b = 0;b < c.length; b++)
          this.words[b] = u.words[b] ^ c.words[b];
        if (this !== u)
          for (;b < u.length; b++)
            this.words[b] = u.words[b];
        return this.length = u.length, this._strip();
      }, f.prototype.ixor = function(s) {
        return r((this.negative | s.negative) === 0), this.iuxor(s);
      }, f.prototype.xor = function(s) {
        return this.length > s.length ? this.clone().ixor(s) : s.clone().ixor(this);
      }, f.prototype.uxor = function(s) {
        return this.length > s.length ? this.clone().iuxor(s) : s.clone().iuxor(this);
      }, f.prototype.inotn = function(s) {
        r(typeof s == "number" && s >= 0);
        var u = Math.ceil(s / 26) | 0, c = s % 26;
        this._expand(u), c > 0 && u--;
        for (var b = 0;b < u; b++)
          this.words[b] = ~this.words[b] & 67108863;
        return c > 0 && (this.words[b] = ~this.words[b] & 67108863 >> 26 - c), this._strip();
      }, f.prototype.notn = function(s) {
        return this.clone().inotn(s);
      }, f.prototype.setn = function(s, u) {
        r(typeof s == "number" && s >= 0);
        var c = s / 26 | 0, b = s % 26;
        return this._expand(c + 1), u ? this.words[c] = this.words[c] | 1 << b : this.words[c] = this.words[c] & ~(1 << b), this._strip();
      }, f.prototype.iadd = function(s) {
        var u;
        if (this.negative !== 0 && s.negative === 0)
          return this.negative = 0, u = this.isub(s), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && s.negative !== 0)
          return s.negative = 0, u = this.isub(s), s.negative = 1, u._normSign();
        var c, b;
        this.length > s.length ? (c = this, b = s) : (c = s, b = this);
        for (var l = 0, n = 0;n < b.length; n++)
          u = (c.words[n] | 0) + (b.words[n] | 0) + l, this.words[n] = u & 67108863, l = u >>> 26;
        for (;l !== 0 && n < c.length; n++)
          u = (c.words[n] | 0) + l, this.words[n] = u & 67108863, l = u >>> 26;
        if (this.length = c.length, l !== 0)
          this.words[this.length] = l, this.length++;
        else if (c !== this)
          for (;n < c.length; n++)
            this.words[n] = c.words[n];
        return this;
      }, f.prototype.add = function(s) {
        var u;
        return s.negative !== 0 && this.negative === 0 ? (s.negative = 0, u = this.sub(s), s.negative ^= 1, u) : s.negative === 0 && this.negative !== 0 ? (this.negative = 0, u = s.sub(this), this.negative = 1, u) : this.length > s.length ? this.clone().iadd(s) : s.clone().iadd(this);
      }, f.prototype.isub = function(s) {
        if (s.negative !== 0) {
          s.negative = 0;
          var u = this.iadd(s);
          return s.negative = 1, u._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(s), this.negative = 1, this._normSign();
        var c = this.cmp(s);
        if (c === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var b, l;
        c > 0 ? (b = this, l = s) : (b = s, l = this);
        for (var n = 0, d = 0;d < l.length; d++)
          u = (b.words[d] | 0) - (l.words[d] | 0) + n, n = u >> 26, this.words[d] = u & 67108863;
        for (;n !== 0 && d < b.length; d++)
          u = (b.words[d] | 0) + n, n = u >> 26, this.words[d] = u & 67108863;
        if (n === 0 && d < b.length && b !== this)
          for (;d < b.length; d++)
            this.words[d] = b.words[d];
        return this.length = Math.max(this.length, d), b !== this && (this.negative = 1), this._strip();
      }, f.prototype.sub = function(s) {
        return this.clone().isub(s);
      };
      function _e(h, s, u) {
        u.negative = s.negative ^ h.negative;
        var c = h.length + s.length | 0;
        u.length = c, c = c - 1 | 0;
        var b = h.words[0] | 0, l = s.words[0] | 0, n = b * l, d = n & 67108863, w = n / 67108864 | 0;
        u.words[0] = d;
        for (var g = 1;g < c; g++) {
          for (var _ = w >>> 26, A = w & 67108863, R = Math.min(g, s.length - 1), I = Math.max(0, g - h.length + 1);I <= R; I++) {
            var Me = g - I | 0;
            b = h.words[Me] | 0, l = s.words[I] | 0, n = b * l + A, _ += n / 67108864 | 0, A = n & 67108863;
          }
          u.words[g] = A | 0, w = _ | 0;
        }
        return w !== 0 ? u.words[g] = w | 0 : u.length--, u._strip();
      }
      var N = function(s, u, c) {
        var b = s.words, l = u.words, n = c.words, d = 0, w, g, _, A = b[0] | 0, R = A & 8191, I = A >>> 13, Me = b[1] | 0, k = Me & 8191, D = Me >>> 13, nt = b[2] | 0, C = nt & 8191, O = nt >>> 13, vt = b[3] | 0, F = vt & 8191, U = vt >>> 13, bt = b[4] | 0, z = bt & 8191, H = bt >>> 13, mt = b[5] | 0, W = mt & 8191, K = mt >>> 13, gt = b[6] | 0, j = gt & 8191, Z = gt >>> 13, yt = b[7] | 0, V = yt & 8191, $ = yt >>> 13, wt = b[8] | 0, G = wt & 8191, Y = wt >>> 13, Mt = b[9] | 0, X = Mt & 8191, J = Mt >>> 13, _t = l[0] | 0, Q = _t & 8191, ee = _t >>> 13, xt = l[1] | 0, te = xt & 8191, re = xt >>> 13, St = l[2] | 0, ie = St & 8191, ne = St >>> 13, Et = l[3] | 0, fe = Et & 8191, ae = Et >>> 13, At = l[4] | 0, oe = At & 8191, se = At >>> 13, Rt = l[5] | 0, he = Rt & 8191, ue = Rt >>> 13, Bt = l[6] | 0, le = Bt & 8191, de = Bt >>> 13, qt = l[7] | 0, ce = qt & 8191, pe = qt >>> 13, It = l[8] | 0, ve = It & 8191, be = It >>> 13, ft = l[9] | 0, Be = ft & 8191, qe = ft >>> 13;
        c.negative = s.negative ^ u.negative, c.length = 19, w = Math.imul(R, Q), g = Math.imul(R, ee), g = g + Math.imul(I, Q) | 0, _ = Math.imul(I, ee);
        var ze = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, w = Math.imul(k, Q), g = Math.imul(k, ee), g = g + Math.imul(D, Q) | 0, _ = Math.imul(D, ee), w = w + Math.imul(R, te) | 0, g = g + Math.imul(R, re) | 0, g = g + Math.imul(I, te) | 0, _ = _ + Math.imul(I, re) | 0;
        var He = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, w = Math.imul(C, Q), g = Math.imul(C, ee), g = g + Math.imul(O, Q) | 0, _ = Math.imul(O, ee), w = w + Math.imul(k, te) | 0, g = g + Math.imul(k, re) | 0, g = g + Math.imul(D, te) | 0, _ = _ + Math.imul(D, re) | 0, w = w + Math.imul(R, ie) | 0, g = g + Math.imul(R, ne) | 0, g = g + Math.imul(I, ie) | 0, _ = _ + Math.imul(I, ne) | 0;
        var We = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, w = Math.imul(F, Q), g = Math.imul(F, ee), g = g + Math.imul(U, Q) | 0, _ = Math.imul(U, ee), w = w + Math.imul(C, te) | 0, g = g + Math.imul(C, re) | 0, g = g + Math.imul(O, te) | 0, _ = _ + Math.imul(O, re) | 0, w = w + Math.imul(k, ie) | 0, g = g + Math.imul(k, ne) | 0, g = g + Math.imul(D, ie) | 0, _ = _ + Math.imul(D, ne) | 0, w = w + Math.imul(R, fe) | 0, g = g + Math.imul(R, ae) | 0, g = g + Math.imul(I, fe) | 0, _ = _ + Math.imul(I, ae) | 0;
        var Ke = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, w = Math.imul(z, Q), g = Math.imul(z, ee), g = g + Math.imul(H, Q) | 0, _ = Math.imul(H, ee), w = w + Math.imul(F, te) | 0, g = g + Math.imul(F, re) | 0, g = g + Math.imul(U, te) | 0, _ = _ + Math.imul(U, re) | 0, w = w + Math.imul(C, ie) | 0, g = g + Math.imul(C, ne) | 0, g = g + Math.imul(O, ie) | 0, _ = _ + Math.imul(O, ne) | 0, w = w + Math.imul(k, fe) | 0, g = g + Math.imul(k, ae) | 0, g = g + Math.imul(D, fe) | 0, _ = _ + Math.imul(D, ae) | 0, w = w + Math.imul(R, oe) | 0, g = g + Math.imul(R, se) | 0, g = g + Math.imul(I, oe) | 0, _ = _ + Math.imul(I, se) | 0;
        var je = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, w = Math.imul(W, Q), g = Math.imul(W, ee), g = g + Math.imul(K, Q) | 0, _ = Math.imul(K, ee), w = w + Math.imul(z, te) | 0, g = g + Math.imul(z, re) | 0, g = g + Math.imul(H, te) | 0, _ = _ + Math.imul(H, re) | 0, w = w + Math.imul(F, ie) | 0, g = g + Math.imul(F, ne) | 0, g = g + Math.imul(U, ie) | 0, _ = _ + Math.imul(U, ne) | 0, w = w + Math.imul(C, fe) | 0, g = g + Math.imul(C, ae) | 0, g = g + Math.imul(O, fe) | 0, _ = _ + Math.imul(O, ae) | 0, w = w + Math.imul(k, oe) | 0, g = g + Math.imul(k, se) | 0, g = g + Math.imul(D, oe) | 0, _ = _ + Math.imul(D, se) | 0, w = w + Math.imul(R, he) | 0, g = g + Math.imul(R, ue) | 0, g = g + Math.imul(I, he) | 0, _ = _ + Math.imul(I, ue) | 0;
        var Ze = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, w = Math.imul(j, Q), g = Math.imul(j, ee), g = g + Math.imul(Z, Q) | 0, _ = Math.imul(Z, ee), w = w + Math.imul(W, te) | 0, g = g + Math.imul(W, re) | 0, g = g + Math.imul(K, te) | 0, _ = _ + Math.imul(K, re) | 0, w = w + Math.imul(z, ie) | 0, g = g + Math.imul(z, ne) | 0, g = g + Math.imul(H, ie) | 0, _ = _ + Math.imul(H, ne) | 0, w = w + Math.imul(F, fe) | 0, g = g + Math.imul(F, ae) | 0, g = g + Math.imul(U, fe) | 0, _ = _ + Math.imul(U, ae) | 0, w = w + Math.imul(C, oe) | 0, g = g + Math.imul(C, se) | 0, g = g + Math.imul(O, oe) | 0, _ = _ + Math.imul(O, se) | 0, w = w + Math.imul(k, he) | 0, g = g + Math.imul(k, ue) | 0, g = g + Math.imul(D, he) | 0, _ = _ + Math.imul(D, ue) | 0, w = w + Math.imul(R, le) | 0, g = g + Math.imul(R, de) | 0, g = g + Math.imul(I, le) | 0, _ = _ + Math.imul(I, de) | 0;
        var Ve = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, w = Math.imul(V, Q), g = Math.imul(V, ee), g = g + Math.imul($, Q) | 0, _ = Math.imul($, ee), w = w + Math.imul(j, te) | 0, g = g + Math.imul(j, re) | 0, g = g + Math.imul(Z, te) | 0, _ = _ + Math.imul(Z, re) | 0, w = w + Math.imul(W, ie) | 0, g = g + Math.imul(W, ne) | 0, g = g + Math.imul(K, ie) | 0, _ = _ + Math.imul(K, ne) | 0, w = w + Math.imul(z, fe) | 0, g = g + Math.imul(z, ae) | 0, g = g + Math.imul(H, fe) | 0, _ = _ + Math.imul(H, ae) | 0, w = w + Math.imul(F, oe) | 0, g = g + Math.imul(F, se) | 0, g = g + Math.imul(U, oe) | 0, _ = _ + Math.imul(U, se) | 0, w = w + Math.imul(C, he) | 0, g = g + Math.imul(C, ue) | 0, g = g + Math.imul(O, he) | 0, _ = _ + Math.imul(O, ue) | 0, w = w + Math.imul(k, le) | 0, g = g + Math.imul(k, de) | 0, g = g + Math.imul(D, le) | 0, _ = _ + Math.imul(D, de) | 0, w = w + Math.imul(R, ce) | 0, g = g + Math.imul(R, pe) | 0, g = g + Math.imul(I, ce) | 0, _ = _ + Math.imul(I, pe) | 0;
        var $e = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, w = Math.imul(G, Q), g = Math.imul(G, ee), g = g + Math.imul(Y, Q) | 0, _ = Math.imul(Y, ee), w = w + Math.imul(V, te) | 0, g = g + Math.imul(V, re) | 0, g = g + Math.imul($, te) | 0, _ = _ + Math.imul($, re) | 0, w = w + Math.imul(j, ie) | 0, g = g + Math.imul(j, ne) | 0, g = g + Math.imul(Z, ie) | 0, _ = _ + Math.imul(Z, ne) | 0, w = w + Math.imul(W, fe) | 0, g = g + Math.imul(W, ae) | 0, g = g + Math.imul(K, fe) | 0, _ = _ + Math.imul(K, ae) | 0, w = w + Math.imul(z, oe) | 0, g = g + Math.imul(z, se) | 0, g = g + Math.imul(H, oe) | 0, _ = _ + Math.imul(H, se) | 0, w = w + Math.imul(F, he) | 0, g = g + Math.imul(F, ue) | 0, g = g + Math.imul(U, he) | 0, _ = _ + Math.imul(U, ue) | 0, w = w + Math.imul(C, le) | 0, g = g + Math.imul(C, de) | 0, g = g + Math.imul(O, le) | 0, _ = _ + Math.imul(O, de) | 0, w = w + Math.imul(k, ce) | 0, g = g + Math.imul(k, pe) | 0, g = g + Math.imul(D, ce) | 0, _ = _ + Math.imul(D, pe) | 0, w = w + Math.imul(R, ve) | 0, g = g + Math.imul(R, be) | 0, g = g + Math.imul(I, ve) | 0, _ = _ + Math.imul(I, be) | 0;
        var Ge = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, w = Math.imul(X, Q), g = Math.imul(X, ee), g = g + Math.imul(J, Q) | 0, _ = Math.imul(J, ee), w = w + Math.imul(G, te) | 0, g = g + Math.imul(G, re) | 0, g = g + Math.imul(Y, te) | 0, _ = _ + Math.imul(Y, re) | 0, w = w + Math.imul(V, ie) | 0, g = g + Math.imul(V, ne) | 0, g = g + Math.imul($, ie) | 0, _ = _ + Math.imul($, ne) | 0, w = w + Math.imul(j, fe) | 0, g = g + Math.imul(j, ae) | 0, g = g + Math.imul(Z, fe) | 0, _ = _ + Math.imul(Z, ae) | 0, w = w + Math.imul(W, oe) | 0, g = g + Math.imul(W, se) | 0, g = g + Math.imul(K, oe) | 0, _ = _ + Math.imul(K, se) | 0, w = w + Math.imul(z, he) | 0, g = g + Math.imul(z, ue) | 0, g = g + Math.imul(H, he) | 0, _ = _ + Math.imul(H, ue) | 0, w = w + Math.imul(F, le) | 0, g = g + Math.imul(F, de) | 0, g = g + Math.imul(U, le) | 0, _ = _ + Math.imul(U, de) | 0, w = w + Math.imul(C, ce) | 0, g = g + Math.imul(C, pe) | 0, g = g + Math.imul(O, ce) | 0, _ = _ + Math.imul(O, pe) | 0, w = w + Math.imul(k, ve) | 0, g = g + Math.imul(k, be) | 0, g = g + Math.imul(D, ve) | 0, _ = _ + Math.imul(D, be) | 0, w = w + Math.imul(R, Be) | 0, g = g + Math.imul(R, qe) | 0, g = g + Math.imul(I, Be) | 0, _ = _ + Math.imul(I, qe) | 0;
        var Ye = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, w = Math.imul(X, te), g = Math.imul(X, re), g = g + Math.imul(J, te) | 0, _ = Math.imul(J, re), w = w + Math.imul(G, ie) | 0, g = g + Math.imul(G, ne) | 0, g = g + Math.imul(Y, ie) | 0, _ = _ + Math.imul(Y, ne) | 0, w = w + Math.imul(V, fe) | 0, g = g + Math.imul(V, ae) | 0, g = g + Math.imul($, fe) | 0, _ = _ + Math.imul($, ae) | 0, w = w + Math.imul(j, oe) | 0, g = g + Math.imul(j, se) | 0, g = g + Math.imul(Z, oe) | 0, _ = _ + Math.imul(Z, se) | 0, w = w + Math.imul(W, he) | 0, g = g + Math.imul(W, ue) | 0, g = g + Math.imul(K, he) | 0, _ = _ + Math.imul(K, ue) | 0, w = w + Math.imul(z, le) | 0, g = g + Math.imul(z, de) | 0, g = g + Math.imul(H, le) | 0, _ = _ + Math.imul(H, de) | 0, w = w + Math.imul(F, ce) | 0, g = g + Math.imul(F, pe) | 0, g = g + Math.imul(U, ce) | 0, _ = _ + Math.imul(U, pe) | 0, w = w + Math.imul(C, ve) | 0, g = g + Math.imul(C, be) | 0, g = g + Math.imul(O, ve) | 0, _ = _ + Math.imul(O, be) | 0, w = w + Math.imul(k, Be) | 0, g = g + Math.imul(k, qe) | 0, g = g + Math.imul(D, Be) | 0, _ = _ + Math.imul(D, qe) | 0;
        var Xe = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, w = Math.imul(X, ie), g = Math.imul(X, ne), g = g + Math.imul(J, ie) | 0, _ = Math.imul(J, ne), w = w + Math.imul(G, fe) | 0, g = g + Math.imul(G, ae) | 0, g = g + Math.imul(Y, fe) | 0, _ = _ + Math.imul(Y, ae) | 0, w = w + Math.imul(V, oe) | 0, g = g + Math.imul(V, se) | 0, g = g + Math.imul($, oe) | 0, _ = _ + Math.imul($, se) | 0, w = w + Math.imul(j, he) | 0, g = g + Math.imul(j, ue) | 0, g = g + Math.imul(Z, he) | 0, _ = _ + Math.imul(Z, ue) | 0, w = w + Math.imul(W, le) | 0, g = g + Math.imul(W, de) | 0, g = g + Math.imul(K, le) | 0, _ = _ + Math.imul(K, de) | 0, w = w + Math.imul(z, ce) | 0, g = g + Math.imul(z, pe) | 0, g = g + Math.imul(H, ce) | 0, _ = _ + Math.imul(H, pe) | 0, w = w + Math.imul(F, ve) | 0, g = g + Math.imul(F, be) | 0, g = g + Math.imul(U, ve) | 0, _ = _ + Math.imul(U, be) | 0, w = w + Math.imul(C, Be) | 0, g = g + Math.imul(C, qe) | 0, g = g + Math.imul(O, Be) | 0, _ = _ + Math.imul(O, qe) | 0;
        var Je = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, w = Math.imul(X, fe), g = Math.imul(X, ae), g = g + Math.imul(J, fe) | 0, _ = Math.imul(J, ae), w = w + Math.imul(G, oe) | 0, g = g + Math.imul(G, se) | 0, g = g + Math.imul(Y, oe) | 0, _ = _ + Math.imul(Y, se) | 0, w = w + Math.imul(V, he) | 0, g = g + Math.imul(V, ue) | 0, g = g + Math.imul($, he) | 0, _ = _ + Math.imul($, ue) | 0, w = w + Math.imul(j, le) | 0, g = g + Math.imul(j, de) | 0, g = g + Math.imul(Z, le) | 0, _ = _ + Math.imul(Z, de) | 0, w = w + Math.imul(W, ce) | 0, g = g + Math.imul(W, pe) | 0, g = g + Math.imul(K, ce) | 0, _ = _ + Math.imul(K, pe) | 0, w = w + Math.imul(z, ve) | 0, g = g + Math.imul(z, be) | 0, g = g + Math.imul(H, ve) | 0, _ = _ + Math.imul(H, be) | 0, w = w + Math.imul(F, Be) | 0, g = g + Math.imul(F, qe) | 0, g = g + Math.imul(U, Be) | 0, _ = _ + Math.imul(U, qe) | 0;
        var Qe = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, w = Math.imul(X, oe), g = Math.imul(X, se), g = g + Math.imul(J, oe) | 0, _ = Math.imul(J, se), w = w + Math.imul(G, he) | 0, g = g + Math.imul(G, ue) | 0, g = g + Math.imul(Y, he) | 0, _ = _ + Math.imul(Y, ue) | 0, w = w + Math.imul(V, le) | 0, g = g + Math.imul(V, de) | 0, g = g + Math.imul($, le) | 0, _ = _ + Math.imul($, de) | 0, w = w + Math.imul(j, ce) | 0, g = g + Math.imul(j, pe) | 0, g = g + Math.imul(Z, ce) | 0, _ = _ + Math.imul(Z, pe) | 0, w = w + Math.imul(W, ve) | 0, g = g + Math.imul(W, be) | 0, g = g + Math.imul(K, ve) | 0, _ = _ + Math.imul(K, be) | 0, w = w + Math.imul(z, Be) | 0, g = g + Math.imul(z, qe) | 0, g = g + Math.imul(H, Be) | 0, _ = _ + Math.imul(H, qe) | 0;
        var et = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, w = Math.imul(X, he), g = Math.imul(X, ue), g = g + Math.imul(J, he) | 0, _ = Math.imul(J, ue), w = w + Math.imul(G, le) | 0, g = g + Math.imul(G, de) | 0, g = g + Math.imul(Y, le) | 0, _ = _ + Math.imul(Y, de) | 0, w = w + Math.imul(V, ce) | 0, g = g + Math.imul(V, pe) | 0, g = g + Math.imul($, ce) | 0, _ = _ + Math.imul($, pe) | 0, w = w + Math.imul(j, ve) | 0, g = g + Math.imul(j, be) | 0, g = g + Math.imul(Z, ve) | 0, _ = _ + Math.imul(Z, be) | 0, w = w + Math.imul(W, Be) | 0, g = g + Math.imul(W, qe) | 0, g = g + Math.imul(K, Be) | 0, _ = _ + Math.imul(K, qe) | 0;
        var tt = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, w = Math.imul(X, le), g = Math.imul(X, de), g = g + Math.imul(J, le) | 0, _ = Math.imul(J, de), w = w + Math.imul(G, ce) | 0, g = g + Math.imul(G, pe) | 0, g = g + Math.imul(Y, ce) | 0, _ = _ + Math.imul(Y, pe) | 0, w = w + Math.imul(V, ve) | 0, g = g + Math.imul(V, be) | 0, g = g + Math.imul($, ve) | 0, _ = _ + Math.imul($, be) | 0, w = w + Math.imul(j, Be) | 0, g = g + Math.imul(j, qe) | 0, g = g + Math.imul(Z, Be) | 0, _ = _ + Math.imul(Z, qe) | 0;
        var rt = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, w = Math.imul(X, ce), g = Math.imul(X, pe), g = g + Math.imul(J, ce) | 0, _ = Math.imul(J, pe), w = w + Math.imul(G, ve) | 0, g = g + Math.imul(G, be) | 0, g = g + Math.imul(Y, ve) | 0, _ = _ + Math.imul(Y, be) | 0, w = w + Math.imul(V, Be) | 0, g = g + Math.imul(V, qe) | 0, g = g + Math.imul($, Be) | 0, _ = _ + Math.imul($, qe) | 0;
        var S0 = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (S0 >>> 26) | 0, S0 &= 67108863, w = Math.imul(X, ve), g = Math.imul(X, be), g = g + Math.imul(J, ve) | 0, _ = Math.imul(J, be), w = w + Math.imul(G, Be) | 0, g = g + Math.imul(G, qe) | 0, g = g + Math.imul(Y, Be) | 0, _ = _ + Math.imul(Y, qe) | 0;
        var E0 = (d + w | 0) + ((g & 8191) << 13) | 0;
        d = (_ + (g >>> 13) | 0) + (E0 >>> 26) | 0, E0 &= 67108863, w = Math.imul(X, Be), g = Math.imul(X, qe), g = g + Math.imul(J, Be) | 0, _ = Math.imul(J, qe);
        var A0 = (d + w | 0) + ((g & 8191) << 13) | 0;
        return d = (_ + (g >>> 13) | 0) + (A0 >>> 26) | 0, A0 &= 67108863, n[0] = ze, n[1] = He, n[2] = We, n[3] = Ke, n[4] = je, n[5] = Ze, n[6] = Ve, n[7] = $e, n[8] = Ge, n[9] = Ye, n[10] = Xe, n[11] = Je, n[12] = Qe, n[13] = et, n[14] = tt, n[15] = rt, n[16] = S0, n[17] = E0, n[18] = A0, d !== 0 && (n[19] = d, c.length++), c;
      };
      Math.imul || (N = _e);
      function we(h, s, u) {
        u.negative = s.negative ^ h.negative, u.length = h.length + s.length;
        for (var c = 0, b = 0, l = 0;l < u.length - 1; l++) {
          var n = b;
          b = 0;
          for (var d = c & 67108863, w = Math.min(l, s.length - 1), g = Math.max(0, l - h.length + 1);g <= w; g++) {
            var _ = l - g, A = h.words[_] | 0, R = s.words[g] | 0, I = A * R, Me = I & 67108863;
            n = n + (I / 67108864 | 0) | 0, Me = Me + d | 0, d = Me & 67108863, n = n + (Me >>> 26) | 0, b += n >>> 26, n &= 67108863;
          }
          u.words[l] = d, c = n, n = b;
        }
        return c !== 0 ? u.words[l] = c : u.length--, u._strip();
      }
      function ye(h, s, u) {
        return we(h, s, u);
      }
      f.prototype.mulTo = function(s, u) {
        var c, b = this.length + s.length;
        return this.length === 10 && s.length === 10 ? c = N(this, s, u) : b < 63 ? c = _e(this, s, u) : b < 1024 ? c = we(this, s, u) : c = ye(this, s, u), c;
      };
      function xe(h, s) {
        this.x = h, this.y = s;
      }
      xe.prototype.makeRBT = function(s) {
        for (var u = new Array(s), c = f.prototype._countBits(s) - 1, b = 0;b < s; b++)
          u[b] = this.revBin(b, c, s);
        return u;
      }, xe.prototype.revBin = function(s, u, c) {
        if (s === 0 || s === c - 1)
          return s;
        for (var b = 0, l = 0;l < u; l++)
          b |= (s & 1) << u - l - 1, s >>= 1;
        return b;
      }, xe.prototype.permute = function(s, u, c, b, l, n) {
        for (var d = 0;d < n; d++)
          b[d] = u[s[d]], l[d] = c[s[d]];
      }, xe.prototype.transform = function(s, u, c, b, l, n) {
        this.permute(n, s, u, c, b, l);
        for (var d = 1;d < l; d <<= 1)
          for (var w = d << 1, g = Math.cos(2 * Math.PI / w), _ = Math.sin(2 * Math.PI / w), A = 0;A < l; A += w)
            for (var R = g, I = _, Me = 0;Me < d; Me++) {
              var k = c[A + Me], D = b[A + Me], nt = c[A + Me + d], C = b[A + Me + d], O = R * nt - I * C;
              C = R * C + I * nt, nt = O, c[A + Me] = k + nt, b[A + Me] = D + C, c[A + Me + d] = k - nt, b[A + Me + d] = D - C, Me !== w && (O = g * R - _ * I, I = g * I + _ * R, R = O);
            }
      }, xe.prototype.guessLen13b = function(s, u) {
        var c = Math.max(u, s) | 1, b = c & 1, l = 0;
        for (c = c / 2 | 0;c; c = c >>> 1)
          l++;
        return 1 << l + 1 + b;
      }, xe.prototype.conjugate = function(s, u, c) {
        if (!(c <= 1))
          for (var b = 0;b < c / 2; b++) {
            var l = s[b];
            s[b] = s[c - b - 1], s[c - b - 1] = l, l = u[b], u[b] = -u[c - b - 1], u[c - b - 1] = -l;
          }
      }, xe.prototype.normalize13b = function(s, u) {
        for (var c = 0, b = 0;b < u / 2; b++) {
          var l = Math.round(s[2 * b + 1] / u) * 8192 + Math.round(s[2 * b] / u) + c;
          s[b] = l & 67108863, l < 67108864 ? c = 0 : c = l / 67108864 | 0;
        }
        return s;
      }, xe.prototype.convert13b = function(s, u, c, b) {
        for (var l = 0, n = 0;n < u; n++)
          l = l + (s[n] | 0), c[2 * n] = l & 8191, l = l >>> 13, c[2 * n + 1] = l & 8191, l = l >>> 13;
        for (n = 2 * u;n < b; ++n)
          c[n] = 0;
        r(l === 0), r((l & -8192) === 0);
      }, xe.prototype.stub = function(s) {
        for (var u = new Array(s), c = 0;c < s; c++)
          u[c] = 0;
        return u;
      }, xe.prototype.mulp = function(s, u, c) {
        var b = 2 * this.guessLen13b(s.length, u.length), l = this.makeRBT(b), n = this.stub(b), d = new Array(b), w = new Array(b), g = new Array(b), _ = new Array(b), A = new Array(b), R = new Array(b), I = c.words;
        I.length = b, this.convert13b(s.words, s.length, d, b), this.convert13b(u.words, u.length, _, b), this.transform(d, n, w, g, b, l), this.transform(_, n, A, R, b, l);
        for (var Me = 0;Me < b; Me++) {
          var k = w[Me] * A[Me] - g[Me] * R[Me];
          g[Me] = w[Me] * R[Me] + g[Me] * A[Me], w[Me] = k;
        }
        return this.conjugate(w, g, b), this.transform(w, g, I, n, b, l), this.conjugate(I, n, b), this.normalize13b(I, b), c.negative = s.negative ^ u.negative, c.length = s.length + u.length, c._strip();
      }, f.prototype.mul = function(s) {
        var u = new f(null);
        return u.words = new Array(this.length + s.length), this.mulTo(s, u);
      }, f.prototype.mulf = function(s) {
        var u = new f(null);
        return u.words = new Array(this.length + s.length), ye(this, s, u);
      }, f.prototype.imul = function(s) {
        return this.clone().mulTo(s, this);
      }, f.prototype.imuln = function(s) {
        var u = s < 0;
        u && (s = -s), r(typeof s == "number"), r(s < 67108864);
        for (var c = 0, b = 0;b < this.length; b++) {
          var l = (this.words[b] | 0) * s, n = (l & 67108863) + (c & 67108863);
          c >>= 26, c += l / 67108864 | 0, c += n >>> 26, this.words[b] = n & 67108863;
        }
        return c !== 0 && (this.words[b] = c, this.length++), u ? this.ineg() : this;
      }, f.prototype.muln = function(s) {
        return this.clone().imuln(s);
      }, f.prototype.sqr = function() {
        return this.mul(this);
      }, f.prototype.isqr = function() {
        return this.imul(this.clone());
      }, f.prototype.pow = function(s) {
        var u = ge(s);
        if (u.length === 0)
          return new f(1);
        for (var c = this, b = 0;b < u.length && u[b] === 0; b++, c = c.sqr())
          ;
        if (++b < u.length)
          for (var l = c.sqr();b < u.length; b++, l = l.sqr())
            u[b] !== 0 && (c = c.mul(l));
        return c;
      }, f.prototype.iushln = function(s) {
        r(typeof s == "number" && s >= 0);
        var u = s % 26, c = (s - u) / 26, b = 67108863 >>> 26 - u << 26 - u, l;
        if (u !== 0) {
          var n = 0;
          for (l = 0;l < this.length; l++) {
            var d = this.words[l] & b, w = (this.words[l] | 0) - d << u;
            this.words[l] = w | n, n = d >>> 26 - u;
          }
          n && (this.words[l] = n, this.length++);
        }
        if (c !== 0) {
          for (l = this.length - 1;l >= 0; l--)
            this.words[l + c] = this.words[l];
          for (l = 0;l < c; l++)
            this.words[l] = 0;
          this.length += c;
        }
        return this._strip();
      }, f.prototype.ishln = function(s) {
        return r(this.negative === 0), this.iushln(s);
      }, f.prototype.iushrn = function(s, u, c) {
        r(typeof s == "number" && s >= 0);
        var b;
        u ? b = (u - u % 26) / 26 : b = 0;
        var l = s % 26, n = Math.min((s - l) / 26, this.length), d = 67108863 ^ 67108863 >>> l << l, w = c;
        if (b -= n, b = Math.max(0, b), w) {
          for (var g = 0;g < n; g++)
            w.words[g] = this.words[g];
          w.length = n;
        }
        if (n !== 0)
          if (this.length > n)
            for (this.length -= n, g = 0;g < this.length; g++)
              this.words[g] = this.words[g + n];
          else
            this.words[0] = 0, this.length = 1;
        var _ = 0;
        for (g = this.length - 1;g >= 0 && (_ !== 0 || g >= b); g--) {
          var A = this.words[g] | 0;
          this.words[g] = _ << 26 - l | A >>> l, _ = A & d;
        }
        return w && _ !== 0 && (w.words[w.length++] = _), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
      }, f.prototype.ishrn = function(s, u, c) {
        return r(this.negative === 0), this.iushrn(s, u, c);
      }, f.prototype.shln = function(s) {
        return this.clone().ishln(s);
      }, f.prototype.ushln = function(s) {
        return this.clone().iushln(s);
      }, f.prototype.shrn = function(s) {
        return this.clone().ishrn(s);
      }, f.prototype.ushrn = function(s) {
        return this.clone().iushrn(s);
      }, f.prototype.testn = function(s) {
        r(typeof s == "number" && s >= 0);
        var u = s % 26, c = (s - u) / 26, b = 1 << u;
        if (this.length <= c)
          return false;
        var l = this.words[c];
        return !!(l & b);
      }, f.prototype.imaskn = function(s) {
        r(typeof s == "number" && s >= 0);
        var u = s % 26, c = (s - u) / 26;
        if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c)
          return this;
        if (u !== 0 && c++, this.length = Math.min(c, this.length), u !== 0) {
          var b = 67108863 ^ 67108863 >>> u << u;
          this.words[this.length - 1] &= b;
        }
        return this._strip();
      }, f.prototype.maskn = function(s) {
        return this.clone().imaskn(s);
      }, f.prototype.iaddn = function(s) {
        return r(typeof s == "number"), r(s < 67108864), s < 0 ? this.isubn(-s) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= s ? (this.words[0] = s - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(s), this.negative = 1, this) : this._iaddn(s);
      }, f.prototype._iaddn = function(s) {
        this.words[0] += s;
        for (var u = 0;u < this.length && this.words[u] >= 67108864; u++)
          this.words[u] -= 67108864, u === this.length - 1 ? this.words[u + 1] = 1 : this.words[u + 1]++;
        return this.length = Math.max(this.length, u + 1), this;
      }, f.prototype.isubn = function(s) {
        if (r(typeof s == "number"), r(s < 67108864), s < 0)
          return this.iaddn(-s);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(s), this.negative = 1, this;
        if (this.words[0] -= s, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var u = 0;u < this.length && this.words[u] < 0; u++)
            this.words[u] += 67108864, this.words[u + 1] -= 1;
        return this._strip();
      }, f.prototype.addn = function(s) {
        return this.clone().iaddn(s);
      }, f.prototype.subn = function(s) {
        return this.clone().isubn(s);
      }, f.prototype.iabs = function() {
        return this.negative = 0, this;
      }, f.prototype.abs = function() {
        return this.clone().iabs();
      }, f.prototype._ishlnsubmul = function(s, u, c) {
        var b = s.length + c, l;
        this._expand(b);
        var n, d = 0;
        for (l = 0;l < s.length; l++) {
          n = (this.words[l + c] | 0) + d;
          var w = (s.words[l] | 0) * u;
          n -= w & 67108863, d = (n >> 26) - (w / 67108864 | 0), this.words[l + c] = n & 67108863;
        }
        for (;l < this.length - c; l++)
          n = (this.words[l + c] | 0) + d, d = n >> 26, this.words[l + c] = n & 67108863;
        if (d === 0)
          return this._strip();
        for (r(d === -1), d = 0, l = 0;l < this.length; l++)
          n = -(this.words[l] | 0) + d, d = n >> 26, this.words[l] = n & 67108863;
        return this.negative = 1, this._strip();
      }, f.prototype._wordDiv = function(s, u) {
        var c = this.length - s.length, b = this.clone(), l = s, n = l.words[l.length - 1] | 0, d = this._countBits(n);
        c = 26 - d, c !== 0 && (l = l.ushln(c), b.iushln(c), n = l.words[l.length - 1] | 0);
        var w = b.length - l.length, g;
        if (u !== "mod") {
          g = new f(null), g.length = w + 1, g.words = new Array(g.length);
          for (var _ = 0;_ < g.length; _++)
            g.words[_] = 0;
        }
        var A = b.clone()._ishlnsubmul(l, 1, w);
        A.negative === 0 && (b = A, g && (g.words[w] = 1));
        for (var R = w - 1;R >= 0; R--) {
          var I = (b.words[l.length + R] | 0) * 67108864 + (b.words[l.length + R - 1] | 0);
          for (I = Math.min(I / n | 0, 67108863), b._ishlnsubmul(l, I, R);b.negative !== 0; )
            I--, b.negative = 0, b._ishlnsubmul(l, 1, R), b.isZero() || (b.negative ^= 1);
          g && (g.words[R] = I);
        }
        return g && g._strip(), b._strip(), u !== "div" && c !== 0 && b.iushrn(c), { div: g || null, mod: b };
      }, f.prototype.divmod = function(s, u, c) {
        if (r(!s.isZero()), this.isZero())
          return { div: new f(0), mod: new f(0) };
        var b, l, n;
        return this.negative !== 0 && s.negative === 0 ? (n = this.neg().divmod(s, u), u !== "mod" && (b = n.div.neg()), u !== "div" && (l = n.mod.neg(), c && l.negative !== 0 && l.iadd(s)), { div: b, mod: l }) : this.negative === 0 && s.negative !== 0 ? (n = this.divmod(s.neg(), u), u !== "mod" && (b = n.div.neg()), { div: b, mod: n.mod }) : (this.negative & s.negative) !== 0 ? (n = this.neg().divmod(s.neg(), u), u !== "div" && (l = n.mod.neg(), c && l.negative !== 0 && l.isub(s)), { div: n.div, mod: l }) : s.length > this.length || this.cmp(s) < 0 ? { div: new f(0), mod: this } : s.length === 1 ? u === "div" ? { div: this.divn(s.words[0]), mod: null } : u === "mod" ? { div: null, mod: new f(this.modrn(s.words[0])) } : { div: this.divn(s.words[0]), mod: new f(this.modrn(s.words[0])) } : this._wordDiv(s, u);
      }, f.prototype.div = function(s) {
        return this.divmod(s, "div", false).div;
      }, f.prototype.mod = function(s) {
        return this.divmod(s, "mod", false).mod;
      }, f.prototype.umod = function(s) {
        return this.divmod(s, "mod", true).mod;
      }, f.prototype.divRound = function(s) {
        var u = this.divmod(s);
        if (u.mod.isZero())
          return u.div;
        var c = u.div.negative !== 0 ? u.mod.isub(s) : u.mod, b = s.ushrn(1), l = s.andln(1), n = c.cmp(b);
        return n < 0 || l === 1 && n === 0 ? u.div : u.div.negative !== 0 ? u.div.isubn(1) : u.div.iaddn(1);
      }, f.prototype.modrn = function(s) {
        var u = s < 0;
        u && (s = -s), r(s <= 67108863);
        for (var c = (1 << 26) % s, b = 0, l = this.length - 1;l >= 0; l--)
          b = (c * b + (this.words[l] | 0)) % s;
        return u ? -b : b;
      }, f.prototype.modn = function(s) {
        return this.modrn(s);
      }, f.prototype.idivn = function(s) {
        var u = s < 0;
        u && (s = -s), r(s <= 67108863);
        for (var c = 0, b = this.length - 1;b >= 0; b--) {
          var l = (this.words[b] | 0) + c * 67108864;
          this.words[b] = l / s | 0, c = l % s;
        }
        return this._strip(), u ? this.ineg() : this;
      }, f.prototype.divn = function(s) {
        return this.clone().idivn(s);
      }, f.prototype.egcd = function(s) {
        r(s.negative === 0), r(!s.isZero());
        var u = this, c = s.clone();
        u.negative !== 0 ? u = u.umod(s) : u = u.clone();
        for (var b = new f(1), l = new f(0), n = new f(0), d = new f(1), w = 0;u.isEven() && c.isEven(); )
          u.iushrn(1), c.iushrn(1), ++w;
        for (var g = c.clone(), _ = u.clone();!u.isZero(); ) {
          for (var A = 0, R = 1;(u.words[0] & R) === 0 && A < 26; ++A, R <<= 1)
            ;
          if (A > 0)
            for (u.iushrn(A);A-- > 0; )
              (b.isOdd() || l.isOdd()) && (b.iadd(g), l.isub(_)), b.iushrn(1), l.iushrn(1);
          for (var I = 0, Me = 1;(c.words[0] & Me) === 0 && I < 26; ++I, Me <<= 1)
            ;
          if (I > 0)
            for (c.iushrn(I);I-- > 0; )
              (n.isOdd() || d.isOdd()) && (n.iadd(g), d.isub(_)), n.iushrn(1), d.iushrn(1);
          u.cmp(c) >= 0 ? (u.isub(c), b.isub(n), l.isub(d)) : (c.isub(u), n.isub(b), d.isub(l));
        }
        return { a: n, b: d, gcd: c.iushln(w) };
      }, f.prototype._invmp = function(s) {
        r(s.negative === 0), r(!s.isZero());
        var u = this, c = s.clone();
        u.negative !== 0 ? u = u.umod(s) : u = u.clone();
        for (var b = new f(1), l = new f(0), n = c.clone();u.cmpn(1) > 0 && c.cmpn(1) > 0; ) {
          for (var d = 0, w = 1;(u.words[0] & w) === 0 && d < 26; ++d, w <<= 1)
            ;
          if (d > 0)
            for (u.iushrn(d);d-- > 0; )
              b.isOdd() && b.iadd(n), b.iushrn(1);
          for (var g = 0, _ = 1;(c.words[0] & _) === 0 && g < 26; ++g, _ <<= 1)
            ;
          if (g > 0)
            for (c.iushrn(g);g-- > 0; )
              l.isOdd() && l.iadd(n), l.iushrn(1);
          u.cmp(c) >= 0 ? (u.isub(c), b.isub(l)) : (c.isub(u), l.isub(b));
        }
        var A;
        return u.cmpn(1) === 0 ? A = b : A = l, A.cmpn(0) < 0 && A.iadd(s), A;
      }, f.prototype.gcd = function(s) {
        if (this.isZero())
          return s.abs();
        if (s.isZero())
          return this.abs();
        var u = this.clone(), c = s.clone();
        u.negative = 0, c.negative = 0;
        for (var b = 0;u.isEven() && c.isEven(); b++)
          u.iushrn(1), c.iushrn(1);
        do {
          for (;u.isEven(); )
            u.iushrn(1);
          for (;c.isEven(); )
            c.iushrn(1);
          var l = u.cmp(c);
          if (l < 0) {
            var n = u;
            u = c, c = n;
          } else if (l === 0 || c.cmpn(1) === 0)
            break;
          u.isub(c);
        } while (true);
        return c.iushln(b);
      }, f.prototype.invm = function(s) {
        return this.egcd(s).a.umod(s);
      }, f.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, f.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, f.prototype.andln = function(s) {
        return this.words[0] & s;
      }, f.prototype.bincn = function(s) {
        r(typeof s == "number");
        var u = s % 26, c = (s - u) / 26, b = 1 << u;
        if (this.length <= c)
          return this._expand(c + 1), this.words[c] |= b, this;
        for (var l = b, n = c;l !== 0 && n < this.length; n++) {
          var d = this.words[n] | 0;
          d += l, l = d >>> 26, d &= 67108863, this.words[n] = d;
        }
        return l !== 0 && (this.words[n] = l, this.length++), this;
      }, f.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, f.prototype.cmpn = function(s) {
        var u = s < 0;
        if (this.negative !== 0 && !u)
          return -1;
        if (this.negative === 0 && u)
          return 1;
        this._strip();
        var c;
        if (this.length > 1)
          c = 1;
        else {
          u && (s = -s), r(s <= 67108863, "Number is too big");
          var b = this.words[0] | 0;
          c = b === s ? 0 : b < s ? -1 : 1;
        }
        return this.negative !== 0 ? -c | 0 : c;
      }, f.prototype.cmp = function(s) {
        if (this.negative !== 0 && s.negative === 0)
          return -1;
        if (this.negative === 0 && s.negative !== 0)
          return 1;
        var u = this.ucmp(s);
        return this.negative !== 0 ? -u | 0 : u;
      }, f.prototype.ucmp = function(s) {
        if (this.length > s.length)
          return 1;
        if (this.length < s.length)
          return -1;
        for (var u = 0, c = this.length - 1;c >= 0; c--) {
          var b = this.words[c] | 0, l = s.words[c] | 0;
          if (b !== l) {
            b < l ? u = -1 : b > l && (u = 1);
            break;
          }
        }
        return u;
      }, f.prototype.gtn = function(s) {
        return this.cmpn(s) === 1;
      }, f.prototype.gt = function(s) {
        return this.cmp(s) === 1;
      }, f.prototype.gten = function(s) {
        return this.cmpn(s) >= 0;
      }, f.prototype.gte = function(s) {
        return this.cmp(s) >= 0;
      }, f.prototype.ltn = function(s) {
        return this.cmpn(s) === -1;
      }, f.prototype.lt = function(s) {
        return this.cmp(s) === -1;
      }, f.prototype.lten = function(s) {
        return this.cmpn(s) <= 0;
      }, f.prototype.lte = function(s) {
        return this.cmp(s) <= 0;
      }, f.prototype.eqn = function(s) {
        return this.cmpn(s) === 0;
      }, f.prototype.eq = function(s) {
        return this.cmp(s) === 0;
      }, f.red = function(s) {
        return new i(s);
      }, f.prototype.toRed = function(s) {
        return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), s.convertTo(this)._forceRed(s);
      }, f.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, f.prototype._forceRed = function(s) {
        return this.red = s, this;
      }, f.prototype.forceRed = function(s) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(s);
      }, f.prototype.redAdd = function(s) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, s);
      }, f.prototype.redIAdd = function(s) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, s);
      }, f.prototype.redSub = function(s) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, s);
      }, f.prototype.redISub = function(s) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, s);
      }, f.prototype.redShl = function(s) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, s);
      }, f.prototype.redMul = function(s) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.mul(this, s);
      }, f.prototype.redIMul = function(s) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.imul(this, s);
      }, f.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, f.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, f.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, f.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, f.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, f.prototype.redPow = function(s) {
        return r(this.red && !s.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, s);
      };
      var Re = { k256: null, p224: null, p192: null, p25519: null };
      function Ee(h, s) {
        this.name = h, this.p = new f(s, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      Ee.prototype._tmp = function() {
        var s = new f(null);
        return s.words = new Array(Math.ceil(this.n / 13)), s;
      }, Ee.prototype.ireduce = function(s) {
        var u = s, c;
        do
          this.split(u, this.tmp), u = this.imulK(u), u = u.iadd(this.tmp), c = u.bitLength();
        while (c > this.n);
        var b = c < this.n ? -1 : u.ucmp(this.p);
        return b === 0 ? (u.words[0] = 0, u.length = 1) : b > 0 ? u.isub(this.p) : u.strip !== undefined ? u.strip() : u._strip(), u;
      }, Ee.prototype.split = function(s, u) {
        s.iushrn(this.n, 0, u);
      }, Ee.prototype.imulK = function(s) {
        return s.imul(this.k);
      };
      function Ae() {
        Ee.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      o(Ae, Ee), Ae.prototype.split = function(s, u) {
        for (var c = 4194303, b = Math.min(s.length, 9), l = 0;l < b; l++)
          u.words[l] = s.words[l];
        if (u.length = b, s.length <= 9) {
          s.words[0] = 0, s.length = 1;
          return;
        }
        var n = s.words[9];
        for (u.words[u.length++] = n & c, l = 10;l < s.length; l++) {
          var d = s.words[l] | 0;
          s.words[l - 10] = (d & c) << 4 | n >>> 22, n = d;
        }
        n >>>= 22, s.words[l - 10] = n, n === 0 && s.length > 10 ? s.length -= 10 : s.length -= 9;
      }, Ae.prototype.imulK = function(s) {
        s.words[s.length] = 0, s.words[s.length + 1] = 0, s.length += 2;
        for (var u = 0, c = 0;c < s.length; c++) {
          var b = s.words[c] | 0;
          u += b * 977, s.words[c] = u & 67108863, u = b * 64 + (u / 67108864 | 0);
        }
        return s.words[s.length - 1] === 0 && (s.length--, s.words[s.length - 1] === 0 && s.length--), s;
      };
      function P() {
        Ee.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      o(P, Ee);
      function Se() {
        Ee.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      o(Se, Ee);
      function v() {
        Ee.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      o(v, Ee), v.prototype.imulK = function(s) {
        for (var u = 0, c = 0;c < s.length; c++) {
          var b = (s.words[c] | 0) * 19 + u, l = b & 67108863;
          b >>>= 26, s.words[c] = l, u = b;
        }
        return u !== 0 && (s.words[s.length++] = u), s;
      }, f._prime = function(s) {
        if (Re[s])
          return Re[s];
        var u;
        if (s === "k256")
          u = new Ae;
        else if (s === "p224")
          u = new P;
        else if (s === "p192")
          u = new Se;
        else if (s === "p25519")
          u = new v;
        else
          throw new Error("Unknown prime " + s);
        return Re[s] = u, u;
      };
      function i(h) {
        if (typeof h == "string") {
          var s = f._prime(h);
          this.m = s.p, this.prime = s;
        } else
          r(h.gtn(1), "modulus must be greater than 1"), this.m = h, this.prime = null;
      }
      i.prototype._verify1 = function(s) {
        r(s.negative === 0, "red works only with positives"), r(s.red, "red works only with red numbers");
      }, i.prototype._verify2 = function(s, u) {
        r((s.negative | u.negative) === 0, "red works only with positives"), r(s.red && s.red === u.red, "red works only with red numbers");
      }, i.prototype.imod = function(s) {
        return this.prime ? this.prime.ireduce(s)._forceRed(this) : (x(s, s.umod(this.m)._forceRed(this)), s);
      }, i.prototype.neg = function(s) {
        return s.isZero() ? s.clone() : this.m.sub(s)._forceRed(this);
      }, i.prototype.add = function(s, u) {
        this._verify2(s, u);
        var c = s.add(u);
        return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this);
      }, i.prototype.iadd = function(s, u) {
        this._verify2(s, u);
        var c = s.iadd(u);
        return c.cmp(this.m) >= 0 && c.isub(this.m), c;
      }, i.prototype.sub = function(s, u) {
        this._verify2(s, u);
        var c = s.sub(u);
        return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this);
      }, i.prototype.isub = function(s, u) {
        this._verify2(s, u);
        var c = s.isub(u);
        return c.cmpn(0) < 0 && c.iadd(this.m), c;
      }, i.prototype.shl = function(s, u) {
        return this._verify1(s), this.imod(s.ushln(u));
      }, i.prototype.imul = function(s, u) {
        return this._verify2(s, u), this.imod(s.imul(u));
      }, i.prototype.mul = function(s, u) {
        return this._verify2(s, u), this.imod(s.mul(u));
      }, i.prototype.isqr = function(s) {
        return this.imul(s, s.clone());
      }, i.prototype.sqr = function(s) {
        return this.mul(s, s);
      }, i.prototype.sqrt = function(s) {
        if (s.isZero())
          return s.clone();
        var u = this.m.andln(3);
        if (r(u % 2 === 1), u === 3) {
          var c = this.m.add(new f(1)).iushrn(2);
          return this.pow(s, c);
        }
        for (var b = this.m.subn(1), l = 0;!b.isZero() && b.andln(1) === 0; )
          l++, b.iushrn(1);
        r(!b.isZero());
        var n = new f(1).toRed(this), d = n.redNeg(), w = this.m.subn(1).iushrn(1), g = this.m.bitLength();
        for (g = new f(2 * g * g).toRed(this);this.pow(g, w).cmp(d) !== 0; )
          g.redIAdd(d);
        for (var _ = this.pow(g, b), A = this.pow(s, b.addn(1).iushrn(1)), R = this.pow(s, b), I = l;R.cmp(n) !== 0; ) {
          for (var Me = R, k = 0;Me.cmp(n) !== 0; k++)
            Me = Me.redSqr();
          r(k < I);
          var D = this.pow(_, new f(1).iushln(I - k - 1));
          A = A.redMul(D), _ = D.redSqr(), R = R.redMul(_), I = k;
        }
        return A;
      }, i.prototype.invm = function(s) {
        var u = s._invmp(this.m);
        return u.negative !== 0 ? (u.negative = 0, this.imod(u).redNeg()) : this.imod(u);
      }, i.prototype.pow = function(s, u) {
        if (u.isZero())
          return new f(1).toRed(this);
        if (u.cmpn(1) === 0)
          return s.clone();
        var c = 4, b = new Array(1 << c);
        b[0] = new f(1).toRed(this), b[1] = s;
        for (var l = 2;l < b.length; l++)
          b[l] = this.mul(b[l - 1], s);
        var n = b[0], d = 0, w = 0, g = u.bitLength() % 26;
        for (g === 0 && (g = 26), l = u.length - 1;l >= 0; l--) {
          for (var _ = u.words[l], A = g - 1;A >= 0; A--) {
            var R = _ >> A & 1;
            if (n !== b[0] && (n = this.sqr(n)), R === 0 && d === 0) {
              w = 0;
              continue;
            }
            d <<= 1, d |= R, w++, !(w !== c && (l !== 0 || A !== 0)) && (n = this.mul(n, b[d]), w = 0, d = 0);
          }
          g = 26;
        }
        return n;
      }, i.prototype.convertTo = function(s) {
        var u = s.umod(this.m);
        return u === s ? u.clone() : u;
      }, i.prototype.convertFrom = function(s) {
        var u = s.clone();
        return u.red = null, u;
      }, f.mont = function(s) {
        return new a(s);
      };
      function a(h) {
        i.call(this, h), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      o(a, i), a.prototype.convertTo = function(s) {
        return this.imod(s.ushln(this.shift));
      }, a.prototype.convertFrom = function(s) {
        var u = this.imod(s.mul(this.rinv));
        return u.red = null, u;
      }, a.prototype.imul = function(s, u) {
        if (s.isZero() || u.isZero())
          return s.words[0] = 0, s.length = 1, s;
        var c = s.imul(u), b = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), l = c.isub(b).iushrn(this.shift), n = l;
        return l.cmp(this.m) >= 0 ? n = l.isub(this.m) : l.cmpn(0) < 0 && (n = l.iadd(this.m)), n._forceRed(this);
      }, a.prototype.mul = function(s, u) {
        if (s.isZero() || u.isZero())
          return new f(0)._forceRed(this);
        var c = s.mul(u), b = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), l = c.isub(b).iushrn(this.shift), n = l;
        return l.cmp(this.m) >= 0 ? n = l.isub(this.m) : l.cmpn(0) < 0 && (n = l.iadd(this.m)), n._forceRed(this);
      }, a.prototype.invm = function(s) {
        var u = this.imod(s._invmp(this.m).mul(this.r2));
        return u._forceRed(this);
      };
    })(typeof kl > "u" || kl, n2);
  });
  Ks = T((yk, o2) => {
    var Rf = Ws(), oA = on();
    function sA(t) {
      var e = f2(t), r = e.toRed(Rf.mont(t.modulus)).redPow(new Rf(t.publicExponent)).fromRed();
      return { blinder: r, unblinder: e.invm(t.modulus) };
    }
    function f2(t) {
      var e = t.modulus.byteLength(), r;
      do
        r = new Rf(oA(e));
      while (r.cmp(t.modulus) >= 0 || !r.umod(t.prime1) || !r.umod(t.prime2));
      return r;
    }
    function a2(t, e) {
      var r = sA(e), o = e.modulus.byteLength(), f = new Rf(t).mul(r.blinder).umod(e.modulus), p = f.toRed(Rf.mont(e.prime1)), m = f.toRed(Rf.mont(e.prime2)), y = e.coefficient, M = e.prime1, x = e.prime2, S = p.redPow(e.exponent1).fromRed(), E = m.redPow(e.exponent2).fromRed(), B = S.isub(E).imul(y).umod(M).imul(x);
      return E.iadd(B).imul(r.unblinder).umod(e.modulus).toArrayLike(Buffer, "be", o);
    }
    a2.getr = f2;
    o2.exports = a2;
  });
  s2 = T((wk, hA) => {
    hA.exports = { name: "elliptic", version: "6.5.4", description: "EC cryptography", main: "lib/elliptic.js", files: ["lib"], scripts: { lint: "eslint lib test", "lint:fix": "npm run lint -- --fix", unit: "istanbul test _mocha --reporter=spec test/index.js", test: "npm run lint && npm run unit", version: "grunt dist && git add dist/" }, repository: { type: "git", url: "git@github.com:indutny/elliptic" }, keywords: ["EC", "Elliptic", "curve", "Cryptography"], author: "Fedor Indutny <fedor@indutny.com>", license: "MIT", bugs: { url: "https://github.com/indutny/elliptic/issues" }, homepage: "https://github.com/indutny/elliptic", devDependencies: { brfs: "^2.0.2", coveralls: "^3.1.0", eslint: "^7.6.0", grunt: "^1.2.1", "grunt-browserify": "^5.3.0", "grunt-cli": "^1.3.2", "grunt-contrib-connect": "^3.0.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^5.0.0", "grunt-mocha-istanbul": "^5.0.2", "grunt-saucelabs": "^9.0.1", istanbul: "^0.4.5", mocha: "^8.0.1" }, dependencies: { "bn.js": "^4.11.9", brorand: "^1.1.0", "hash.js": "^1.0.0", "hmac-drbg": "^1.0.1", inherits: "^2.0.4", "minimalistic-assert": "^1.0.1", "minimalistic-crypto-utils": "^1.0.1" } };
  });
  ri = T((h2, Ll) => {
    (function(t, e) {
      function r(v, i) {
        if (!v)
          throw new Error(i || "Assertion failed");
      }
      function o(v, i) {
        v.super_ = i;
        var a = function() {
        };
        a.prototype = i.prototype, v.prototype = new a, v.prototype.constructor = v;
      }
      function f(v, i, a) {
        if (f.isBN(v))
          return v;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((i === "le" || i === "be") && (a = i, i = 10), this._init(v || 0, i || 10, a || "be"));
      }
      typeof t == "object" ? t.exports = f : e.BN = f, f.BN = f, f.wordSize = 26;
      var p;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? p = window.Buffer : p = ji().Buffer;
      } catch {
      }
      f.isBN = function(i) {
        return i instanceof f ? true : i !== null && typeof i == "object" && i.constructor.wordSize === f.wordSize && Array.isArray(i.words);
      }, f.max = function(i, a) {
        return i.cmp(a) > 0 ? i : a;
      }, f.min = function(i, a) {
        return i.cmp(a) < 0 ? i : a;
      }, f.prototype._init = function(i, a, h) {
        if (typeof i == "number")
          return this._initNumber(i, a, h);
        if (typeof i == "object")
          return this._initArray(i, a, h);
        a === "hex" && (a = 16), r(a === (a | 0) && a >= 2 && a <= 36), i = i.toString().replace(/\s+/g, "");
        var s = 0;
        i[0] === "-" && (s++, this.negative = 1), s < i.length && (a === 16 ? this._parseHex(i, s, h) : (this._parseBase(i, a, s), h === "le" && this._initArray(this.toArray(), a, h)));
      }, f.prototype._initNumber = function(i, a, h) {
        i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [i & 67108863, i / 67108864 & 67108863], this.length = 2) : (r(i < 9007199254740992), this.words = [i & 67108863, i / 67108864 & 67108863, 1], this.length = 3), h === "le" && this._initArray(this.toArray(), a, h);
      }, f.prototype._initArray = function(i, a, h) {
        if (r(typeof i.length == "number"), i.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u, c, b = 0;
        if (h === "be")
          for (s = i.length - 1, u = 0;s >= 0; s -= 3)
            c = i[s] | i[s - 1] << 8 | i[s - 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        else if (h === "le")
          for (s = 0, u = 0;s < i.length; s += 3)
            c = i[s] | i[s + 1] << 8 | i[s + 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        return this.strip();
      };
      function m(v, i) {
        var a = v.charCodeAt(i);
        return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
      }
      function y(v, i, a) {
        var h = m(v, a);
        return a - 1 >= i && (h |= m(v, a - 1) << 4), h;
      }
      f.prototype._parseHex = function(i, a, h) {
        this.length = Math.ceil((i.length - a) / 6), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u = 0, c = 0, b;
        if (h === "be")
          for (s = i.length - 1;s >= a; s -= 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        else {
          var l = i.length - a;
          for (s = l % 2 === 0 ? a + 1 : a;s < i.length; s += 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        }
        this.strip();
      };
      function M(v, i, a, h) {
        for (var s = 0, u = Math.min(v.length, a), c = i;c < u; c++) {
          var b = v.charCodeAt(c) - 48;
          s *= h, b >= 49 ? s += b - 49 + 10 : b >= 17 ? s += b - 17 + 10 : s += b;
        }
        return s;
      }
      f.prototype._parseBase = function(i, a, h) {
        this.words = [0], this.length = 1;
        for (var s = 0, u = 1;u <= 67108863; u *= a)
          s++;
        s--, u = u / a | 0;
        for (var c = i.length - h, b = c % s, l = Math.min(c, c - b) + h, n = 0, d = h;d < l; d += s)
          n = M(i, d, d + s, a), this.imuln(u), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        if (b !== 0) {
          var w = 1;
          for (n = M(i, d, i.length, a), d = 0;d < b; d++)
            w *= a;
          this.imuln(w), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        }
        this.strip();
      }, f.prototype.copy = function(i) {
        i.words = new Array(this.length);
        for (var a = 0;a < this.length; a++)
          i.words[a] = this.words[a];
        i.length = this.length, i.negative = this.negative, i.red = this.red;
      }, f.prototype.clone = function() {
        var i = new f(null);
        return this.copy(i), i;
      }, f.prototype._expand = function(i) {
        for (;this.length < i; )
          this.words[this.length++] = 0;
        return this;
      }, f.prototype.strip = function() {
        for (;this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, f.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, f.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      f.prototype.toString = function(i, a) {
        i = i || 10, a = a | 0 || 1;
        var h;
        if (i === 16 || i === "hex") {
          h = "";
          for (var s = 0, u = 0, c = 0;c < this.length; c++) {
            var b = this.words[c], l = ((b << s | u) & 16777215).toString(16);
            u = b >>> 24 - s & 16777215, u !== 0 || c !== this.length - 1 ? h = x[6 - l.length] + l + h : h = l + h, s += 2, s >= 26 && (s -= 26, c--);
          }
          for (u !== 0 && (h = u.toString(16) + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        if (i === (i | 0) && i >= 2 && i <= 36) {
          var n = S[i], d = E[i];
          h = "";
          var w = this.clone();
          for (w.negative = 0;!w.isZero(); ) {
            var g = w.modn(d).toString(i);
            w = w.idivn(d), w.isZero() ? h = g + h : h = x[n - g.length] + g + h;
          }
          for (this.isZero() && (h = "0" + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        r(false, "Base should be between 2 and 36");
      }, f.prototype.toNumber = function() {
        var i = this.words[0];
        return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
      }, f.prototype.toJSON = function() {
        return this.toString(16);
      }, f.prototype.toBuffer = function(i, a) {
        return r(typeof p < "u"), this.toArrayLike(p, i, a);
      }, f.prototype.toArray = function(i, a) {
        return this.toArrayLike(Array, i, a);
      }, f.prototype.toArrayLike = function(i, a, h) {
        var s = this.byteLength(), u = h || Math.max(1, s);
        r(s <= u, "byte array longer than desired length"), r(u > 0, "Requested array length <= 0"), this.strip();
        var c = a === "le", b = new i(u), l, n, d = this.clone();
        if (c) {
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[n] = l;
          for (;n < u; n++)
            b[n] = 0;
        } else {
          for (n = 0;n < u - s; n++)
            b[n] = 0;
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[u - n - 1] = l;
        }
        return b;
      }, Math.clz32 ? f.prototype._countBits = function(i) {
        return 32 - Math.clz32(i);
      } : f.prototype._countBits = function(i) {
        var a = i, h = 0;
        return a >= 4096 && (h += 13, a >>>= 13), a >= 64 && (h += 7, a >>>= 7), a >= 8 && (h += 4, a >>>= 4), a >= 2 && (h += 2, a >>>= 2), h + a;
      }, f.prototype._zeroBits = function(i) {
        if (i === 0)
          return 26;
        var a = i, h = 0;
        return (a & 8191) === 0 && (h += 13, a >>>= 13), (a & 127) === 0 && (h += 7, a >>>= 7), (a & 15) === 0 && (h += 4, a >>>= 4), (a & 3) === 0 && (h += 2, a >>>= 2), (a & 1) === 0 && h++, h;
      }, f.prototype.bitLength = function() {
        var i = this.words[this.length - 1], a = this._countBits(i);
        return (this.length - 1) * 26 + a;
      };
      function B(v) {
        for (var i = new Array(v.bitLength()), a = 0;a < i.length; a++) {
          var h = a / 26 | 0, s = a % 26;
          i[a] = (v.words[h] & 1 << s) >>> s;
        }
        return i;
      }
      f.prototype.zeroBits = function() {
        if (this.isZero())
          return 0;
        for (var i = 0, a = 0;a < this.length; a++) {
          var h = this._zeroBits(this.words[a]);
          if (i += h, h !== 26)
            break;
        }
        return i;
      }, f.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, f.prototype.toTwos = function(i) {
        return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
      }, f.prototype.fromTwos = function(i) {
        return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
      }, f.prototype.isNeg = function() {
        return this.negative !== 0;
      }, f.prototype.neg = function() {
        return this.clone().ineg();
      }, f.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, f.prototype.iuor = function(i) {
        for (;this.length < i.length; )
          this.words[this.length++] = 0;
        for (var a = 0;a < i.length; a++)
          this.words[a] = this.words[a] | i.words[a];
        return this.strip();
      }, f.prototype.ior = function(i) {
        return r((this.negative | i.negative) === 0), this.iuor(i);
      }, f.prototype.or = function(i) {
        return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
      }, f.prototype.uor = function(i) {
        return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
      }, f.prototype.iuand = function(i) {
        var a;
        this.length > i.length ? a = i : a = this;
        for (var h = 0;h < a.length; h++)
          this.words[h] = this.words[h] & i.words[h];
        return this.length = a.length, this.strip();
      }, f.prototype.iand = function(i) {
        return r((this.negative | i.negative) === 0), this.iuand(i);
      }, f.prototype.and = function(i) {
        return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
      }, f.prototype.uand = function(i) {
        return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
      }, f.prototype.iuxor = function(i) {
        var a, h;
        this.length > i.length ? (a = this, h = i) : (a = i, h = this);
        for (var s = 0;s < h.length; s++)
          this.words[s] = a.words[s] ^ h.words[s];
        if (this !== a)
          for (;s < a.length; s++)
            this.words[s] = a.words[s];
        return this.length = a.length, this.strip();
      }, f.prototype.ixor = function(i) {
        return r((this.negative | i.negative) === 0), this.iuxor(i);
      }, f.prototype.xor = function(i) {
        return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
      }, f.prototype.uxor = function(i) {
        return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
      }, f.prototype.inotn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = Math.ceil(i / 26) | 0, h = i % 26;
        this._expand(a), h > 0 && a--;
        for (var s = 0;s < a; s++)
          this.words[s] = ~this.words[s] & 67108863;
        return h > 0 && (this.words[s] = ~this.words[s] & 67108863 >> 26 - h), this.strip();
      }, f.prototype.notn = function(i) {
        return this.clone().inotn(i);
      }, f.prototype.setn = function(i, a) {
        r(typeof i == "number" && i >= 0);
        var h = i / 26 | 0, s = i % 26;
        return this._expand(h + 1), a ? this.words[h] = this.words[h] | 1 << s : this.words[h] = this.words[h] & ~(1 << s), this.strip();
      }, f.prototype.iadd = function(i) {
        var a;
        if (this.negative !== 0 && i.negative === 0)
          return this.negative = 0, a = this.isub(i), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && i.negative !== 0)
          return i.negative = 0, a = this.isub(i), i.negative = 1, a._normSign();
        var h, s;
        this.length > i.length ? (h = this, s = i) : (h = i, s = this);
        for (var u = 0, c = 0;c < s.length; c++)
          a = (h.words[c] | 0) + (s.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        for (;u !== 0 && c < h.length; c++)
          a = (h.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        if (this.length = h.length, u !== 0)
          this.words[this.length] = u, this.length++;
        else if (h !== this)
          for (;c < h.length; c++)
            this.words[c] = h.words[c];
        return this;
      }, f.prototype.add = function(i) {
        var a;
        return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, a = this.sub(i), i.negative ^= 1, a) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = i.sub(this), this.negative = 1, a) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
      }, f.prototype.isub = function(i) {
        if (i.negative !== 0) {
          i.negative = 0;
          var a = this.iadd(i);
          return i.negative = 1, a._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
        var h = this.cmp(i);
        if (h === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var s, u;
        h > 0 ? (s = this, u = i) : (s = i, u = this);
        for (var c = 0, b = 0;b < u.length; b++)
          a = (s.words[b] | 0) - (u.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        for (;c !== 0 && b < s.length; b++)
          a = (s.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        if (c === 0 && b < s.length && s !== this)
          for (;b < s.length; b++)
            this.words[b] = s.words[b];
        return this.length = Math.max(this.length, b), s !== this && (this.negative = 1), this.strip();
      }, f.prototype.sub = function(i) {
        return this.clone().isub(i);
      };
      function q(v, i, a) {
        a.negative = i.negative ^ v.negative;
        var h = v.length + i.length | 0;
        a.length = h, h = h - 1 | 0;
        var s = v.words[0] | 0, u = i.words[0] | 0, c = s * u, b = c & 67108863, l = c / 67108864 | 0;
        a.words[0] = b;
        for (var n = 1;n < h; n++) {
          for (var d = l >>> 26, w = l & 67108863, g = Math.min(n, i.length - 1), _ = Math.max(0, n - v.length + 1);_ <= g; _++) {
            var A = n - _ | 0;
            s = v.words[A] | 0, u = i.words[_] | 0, c = s * u + w, d += c / 67108864 | 0, w = c & 67108863;
          }
          a.words[n] = w | 0, l = d | 0;
        }
        return l !== 0 ? a.words[n] = l | 0 : a.length--, a.strip();
      }
      var L = function(i, a, h) {
        var s = i.words, u = a.words, c = h.words, b = 0, l, n, d, w = s[0] | 0, g = w & 8191, _ = w >>> 13, A = s[1] | 0, R = A & 8191, I = A >>> 13, Me = s[2] | 0, k = Me & 8191, D = Me >>> 13, nt = s[3] | 0, C = nt & 8191, O = nt >>> 13, vt = s[4] | 0, F = vt & 8191, U = vt >>> 13, bt = s[5] | 0, z = bt & 8191, H = bt >>> 13, mt = s[6] | 0, W = mt & 8191, K = mt >>> 13, gt = s[7] | 0, j = gt & 8191, Z = gt >>> 13, yt = s[8] | 0, V = yt & 8191, $ = yt >>> 13, wt = s[9] | 0, G = wt & 8191, Y = wt >>> 13, Mt = u[0] | 0, X = Mt & 8191, J = Mt >>> 13, _t = u[1] | 0, Q = _t & 8191, ee = _t >>> 13, xt = u[2] | 0, te = xt & 8191, re = xt >>> 13, St = u[3] | 0, ie = St & 8191, ne = St >>> 13, Et = u[4] | 0, fe = Et & 8191, ae = Et >>> 13, At = u[5] | 0, oe = At & 8191, se = At >>> 13, Rt = u[6] | 0, he = Rt & 8191, ue = Rt >>> 13, Bt = u[7] | 0, le = Bt & 8191, de = Bt >>> 13, qt = u[8] | 0, ce = qt & 8191, pe = qt >>> 13, It = u[9] | 0, ve = It & 8191, be = It >>> 13;
        h.negative = i.negative ^ a.negative, h.length = 19, l = Math.imul(g, X), n = Math.imul(g, J), n = n + Math.imul(_, X) | 0, d = Math.imul(_, J);
        var ft = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, l = Math.imul(R, X), n = Math.imul(R, J), n = n + Math.imul(I, X) | 0, d = Math.imul(I, J), l = l + Math.imul(g, Q) | 0, n = n + Math.imul(g, ee) | 0, n = n + Math.imul(_, Q) | 0, d = d + Math.imul(_, ee) | 0;
        var Be = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, l = Math.imul(k, X), n = Math.imul(k, J), n = n + Math.imul(D, X) | 0, d = Math.imul(D, J), l = l + Math.imul(R, Q) | 0, n = n + Math.imul(R, ee) | 0, n = n + Math.imul(I, Q) | 0, d = d + Math.imul(I, ee) | 0, l = l + Math.imul(g, te) | 0, n = n + Math.imul(g, re) | 0, n = n + Math.imul(_, te) | 0, d = d + Math.imul(_, re) | 0;
        var qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, l = Math.imul(C, X), n = Math.imul(C, J), n = n + Math.imul(O, X) | 0, d = Math.imul(O, J), l = l + Math.imul(k, Q) | 0, n = n + Math.imul(k, ee) | 0, n = n + Math.imul(D, Q) | 0, d = d + Math.imul(D, ee) | 0, l = l + Math.imul(R, te) | 0, n = n + Math.imul(R, re) | 0, n = n + Math.imul(I, te) | 0, d = d + Math.imul(I, re) | 0, l = l + Math.imul(g, ie) | 0, n = n + Math.imul(g, ne) | 0, n = n + Math.imul(_, ie) | 0, d = d + Math.imul(_, ne) | 0;
        var ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, l = Math.imul(F, X), n = Math.imul(F, J), n = n + Math.imul(U, X) | 0, d = Math.imul(U, J), l = l + Math.imul(C, Q) | 0, n = n + Math.imul(C, ee) | 0, n = n + Math.imul(O, Q) | 0, d = d + Math.imul(O, ee) | 0, l = l + Math.imul(k, te) | 0, n = n + Math.imul(k, re) | 0, n = n + Math.imul(D, te) | 0, d = d + Math.imul(D, re) | 0, l = l + Math.imul(R, ie) | 0, n = n + Math.imul(R, ne) | 0, n = n + Math.imul(I, ie) | 0, d = d + Math.imul(I, ne) | 0, l = l + Math.imul(g, fe) | 0, n = n + Math.imul(g, ae) | 0, n = n + Math.imul(_, fe) | 0, d = d + Math.imul(_, ae) | 0;
        var He = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, l = Math.imul(z, X), n = Math.imul(z, J), n = n + Math.imul(H, X) | 0, d = Math.imul(H, J), l = l + Math.imul(F, Q) | 0, n = n + Math.imul(F, ee) | 0, n = n + Math.imul(U, Q) | 0, d = d + Math.imul(U, ee) | 0, l = l + Math.imul(C, te) | 0, n = n + Math.imul(C, re) | 0, n = n + Math.imul(O, te) | 0, d = d + Math.imul(O, re) | 0, l = l + Math.imul(k, ie) | 0, n = n + Math.imul(k, ne) | 0, n = n + Math.imul(D, ie) | 0, d = d + Math.imul(D, ne) | 0, l = l + Math.imul(R, fe) | 0, n = n + Math.imul(R, ae) | 0, n = n + Math.imul(I, fe) | 0, d = d + Math.imul(I, ae) | 0, l = l + Math.imul(g, oe) | 0, n = n + Math.imul(g, se) | 0, n = n + Math.imul(_, oe) | 0, d = d + Math.imul(_, se) | 0;
        var We = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, l = Math.imul(W, X), n = Math.imul(W, J), n = n + Math.imul(K, X) | 0, d = Math.imul(K, J), l = l + Math.imul(z, Q) | 0, n = n + Math.imul(z, ee) | 0, n = n + Math.imul(H, Q) | 0, d = d + Math.imul(H, ee) | 0, l = l + Math.imul(F, te) | 0, n = n + Math.imul(F, re) | 0, n = n + Math.imul(U, te) | 0, d = d + Math.imul(U, re) | 0, l = l + Math.imul(C, ie) | 0, n = n + Math.imul(C, ne) | 0, n = n + Math.imul(O, ie) | 0, d = d + Math.imul(O, ne) | 0, l = l + Math.imul(k, fe) | 0, n = n + Math.imul(k, ae) | 0, n = n + Math.imul(D, fe) | 0, d = d + Math.imul(D, ae) | 0, l = l + Math.imul(R, oe) | 0, n = n + Math.imul(R, se) | 0, n = n + Math.imul(I, oe) | 0, d = d + Math.imul(I, se) | 0, l = l + Math.imul(g, he) | 0, n = n + Math.imul(g, ue) | 0, n = n + Math.imul(_, he) | 0, d = d + Math.imul(_, ue) | 0;
        var Ke = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, l = Math.imul(j, X), n = Math.imul(j, J), n = n + Math.imul(Z, X) | 0, d = Math.imul(Z, J), l = l + Math.imul(W, Q) | 0, n = n + Math.imul(W, ee) | 0, n = n + Math.imul(K, Q) | 0, d = d + Math.imul(K, ee) | 0, l = l + Math.imul(z, te) | 0, n = n + Math.imul(z, re) | 0, n = n + Math.imul(H, te) | 0, d = d + Math.imul(H, re) | 0, l = l + Math.imul(F, ie) | 0, n = n + Math.imul(F, ne) | 0, n = n + Math.imul(U, ie) | 0, d = d + Math.imul(U, ne) | 0, l = l + Math.imul(C, fe) | 0, n = n + Math.imul(C, ae) | 0, n = n + Math.imul(O, fe) | 0, d = d + Math.imul(O, ae) | 0, l = l + Math.imul(k, oe) | 0, n = n + Math.imul(k, se) | 0, n = n + Math.imul(D, oe) | 0, d = d + Math.imul(D, se) | 0, l = l + Math.imul(R, he) | 0, n = n + Math.imul(R, ue) | 0, n = n + Math.imul(I, he) | 0, d = d + Math.imul(I, ue) | 0, l = l + Math.imul(g, le) | 0, n = n + Math.imul(g, de) | 0, n = n + Math.imul(_, le) | 0, d = d + Math.imul(_, de) | 0;
        var je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, l = Math.imul(V, X), n = Math.imul(V, J), n = n + Math.imul($, X) | 0, d = Math.imul($, J), l = l + Math.imul(j, Q) | 0, n = n + Math.imul(j, ee) | 0, n = n + Math.imul(Z, Q) | 0, d = d + Math.imul(Z, ee) | 0, l = l + Math.imul(W, te) | 0, n = n + Math.imul(W, re) | 0, n = n + Math.imul(K, te) | 0, d = d + Math.imul(K, re) | 0, l = l + Math.imul(z, ie) | 0, n = n + Math.imul(z, ne) | 0, n = n + Math.imul(H, ie) | 0, d = d + Math.imul(H, ne) | 0, l = l + Math.imul(F, fe) | 0, n = n + Math.imul(F, ae) | 0, n = n + Math.imul(U, fe) | 0, d = d + Math.imul(U, ae) | 0, l = l + Math.imul(C, oe) | 0, n = n + Math.imul(C, se) | 0, n = n + Math.imul(O, oe) | 0, d = d + Math.imul(O, se) | 0, l = l + Math.imul(k, he) | 0, n = n + Math.imul(k, ue) | 0, n = n + Math.imul(D, he) | 0, d = d + Math.imul(D, ue) | 0, l = l + Math.imul(R, le) | 0, n = n + Math.imul(R, de) | 0, n = n + Math.imul(I, le) | 0, d = d + Math.imul(I, de) | 0, l = l + Math.imul(g, ce) | 0, n = n + Math.imul(g, pe) | 0, n = n + Math.imul(_, ce) | 0, d = d + Math.imul(_, pe) | 0;
        var Ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, X), n = Math.imul(G, J), n = n + Math.imul(Y, X) | 0, d = Math.imul(Y, J), l = l + Math.imul(V, Q) | 0, n = n + Math.imul(V, ee) | 0, n = n + Math.imul($, Q) | 0, d = d + Math.imul($, ee) | 0, l = l + Math.imul(j, te) | 0, n = n + Math.imul(j, re) | 0, n = n + Math.imul(Z, te) | 0, d = d + Math.imul(Z, re) | 0, l = l + Math.imul(W, ie) | 0, n = n + Math.imul(W, ne) | 0, n = n + Math.imul(K, ie) | 0, d = d + Math.imul(K, ne) | 0, l = l + Math.imul(z, fe) | 0, n = n + Math.imul(z, ae) | 0, n = n + Math.imul(H, fe) | 0, d = d + Math.imul(H, ae) | 0, l = l + Math.imul(F, oe) | 0, n = n + Math.imul(F, se) | 0, n = n + Math.imul(U, oe) | 0, d = d + Math.imul(U, se) | 0, l = l + Math.imul(C, he) | 0, n = n + Math.imul(C, ue) | 0, n = n + Math.imul(O, he) | 0, d = d + Math.imul(O, ue) | 0, l = l + Math.imul(k, le) | 0, n = n + Math.imul(k, de) | 0, n = n + Math.imul(D, le) | 0, d = d + Math.imul(D, de) | 0, l = l + Math.imul(R, ce) | 0, n = n + Math.imul(R, pe) | 0, n = n + Math.imul(I, ce) | 0, d = d + Math.imul(I, pe) | 0, l = l + Math.imul(g, ve) | 0, n = n + Math.imul(g, be) | 0, n = n + Math.imul(_, ve) | 0, d = d + Math.imul(_, be) | 0;
        var Ve = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, l = Math.imul(G, Q), n = Math.imul(G, ee), n = n + Math.imul(Y, Q) | 0, d = Math.imul(Y, ee), l = l + Math.imul(V, te) | 0, n = n + Math.imul(V, re) | 0, n = n + Math.imul($, te) | 0, d = d + Math.imul($, re) | 0, l = l + Math.imul(j, ie) | 0, n = n + Math.imul(j, ne) | 0, n = n + Math.imul(Z, ie) | 0, d = d + Math.imul(Z, ne) | 0, l = l + Math.imul(W, fe) | 0, n = n + Math.imul(W, ae) | 0, n = n + Math.imul(K, fe) | 0, d = d + Math.imul(K, ae) | 0, l = l + Math.imul(z, oe) | 0, n = n + Math.imul(z, se) | 0, n = n + Math.imul(H, oe) | 0, d = d + Math.imul(H, se) | 0, l = l + Math.imul(F, he) | 0, n = n + Math.imul(F, ue) | 0, n = n + Math.imul(U, he) | 0, d = d + Math.imul(U, ue) | 0, l = l + Math.imul(C, le) | 0, n = n + Math.imul(C, de) | 0, n = n + Math.imul(O, le) | 0, d = d + Math.imul(O, de) | 0, l = l + Math.imul(k, ce) | 0, n = n + Math.imul(k, pe) | 0, n = n + Math.imul(D, ce) | 0, d = d + Math.imul(D, pe) | 0, l = l + Math.imul(R, ve) | 0, n = n + Math.imul(R, be) | 0, n = n + Math.imul(I, ve) | 0, d = d + Math.imul(I, be) | 0;
        var $e = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, l = Math.imul(G, te), n = Math.imul(G, re), n = n + Math.imul(Y, te) | 0, d = Math.imul(Y, re), l = l + Math.imul(V, ie) | 0, n = n + Math.imul(V, ne) | 0, n = n + Math.imul($, ie) | 0, d = d + Math.imul($, ne) | 0, l = l + Math.imul(j, fe) | 0, n = n + Math.imul(j, ae) | 0, n = n + Math.imul(Z, fe) | 0, d = d + Math.imul(Z, ae) | 0, l = l + Math.imul(W, oe) | 0, n = n + Math.imul(W, se) | 0, n = n + Math.imul(K, oe) | 0, d = d + Math.imul(K, se) | 0, l = l + Math.imul(z, he) | 0, n = n + Math.imul(z, ue) | 0, n = n + Math.imul(H, he) | 0, d = d + Math.imul(H, ue) | 0, l = l + Math.imul(F, le) | 0, n = n + Math.imul(F, de) | 0, n = n + Math.imul(U, le) | 0, d = d + Math.imul(U, de) | 0, l = l + Math.imul(C, ce) | 0, n = n + Math.imul(C, pe) | 0, n = n + Math.imul(O, ce) | 0, d = d + Math.imul(O, pe) | 0, l = l + Math.imul(k, ve) | 0, n = n + Math.imul(k, be) | 0, n = n + Math.imul(D, ve) | 0, d = d + Math.imul(D, be) | 0;
        var Ge = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, l = Math.imul(G, ie), n = Math.imul(G, ne), n = n + Math.imul(Y, ie) | 0, d = Math.imul(Y, ne), l = l + Math.imul(V, fe) | 0, n = n + Math.imul(V, ae) | 0, n = n + Math.imul($, fe) | 0, d = d + Math.imul($, ae) | 0, l = l + Math.imul(j, oe) | 0, n = n + Math.imul(j, se) | 0, n = n + Math.imul(Z, oe) | 0, d = d + Math.imul(Z, se) | 0, l = l + Math.imul(W, he) | 0, n = n + Math.imul(W, ue) | 0, n = n + Math.imul(K, he) | 0, d = d + Math.imul(K, ue) | 0, l = l + Math.imul(z, le) | 0, n = n + Math.imul(z, de) | 0, n = n + Math.imul(H, le) | 0, d = d + Math.imul(H, de) | 0, l = l + Math.imul(F, ce) | 0, n = n + Math.imul(F, pe) | 0, n = n + Math.imul(U, ce) | 0, d = d + Math.imul(U, pe) | 0, l = l + Math.imul(C, ve) | 0, n = n + Math.imul(C, be) | 0, n = n + Math.imul(O, ve) | 0, d = d + Math.imul(O, be) | 0;
        var Ye = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(G, fe), n = Math.imul(G, ae), n = n + Math.imul(Y, fe) | 0, d = Math.imul(Y, ae), l = l + Math.imul(V, oe) | 0, n = n + Math.imul(V, se) | 0, n = n + Math.imul($, oe) | 0, d = d + Math.imul($, se) | 0, l = l + Math.imul(j, he) | 0, n = n + Math.imul(j, ue) | 0, n = n + Math.imul(Z, he) | 0, d = d + Math.imul(Z, ue) | 0, l = l + Math.imul(W, le) | 0, n = n + Math.imul(W, de) | 0, n = n + Math.imul(K, le) | 0, d = d + Math.imul(K, de) | 0, l = l + Math.imul(z, ce) | 0, n = n + Math.imul(z, pe) | 0, n = n + Math.imul(H, ce) | 0, d = d + Math.imul(H, pe) | 0, l = l + Math.imul(F, ve) | 0, n = n + Math.imul(F, be) | 0, n = n + Math.imul(U, ve) | 0, d = d + Math.imul(U, be) | 0;
        var Xe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, l = Math.imul(G, oe), n = Math.imul(G, se), n = n + Math.imul(Y, oe) | 0, d = Math.imul(Y, se), l = l + Math.imul(V, he) | 0, n = n + Math.imul(V, ue) | 0, n = n + Math.imul($, he) | 0, d = d + Math.imul($, ue) | 0, l = l + Math.imul(j, le) | 0, n = n + Math.imul(j, de) | 0, n = n + Math.imul(Z, le) | 0, d = d + Math.imul(Z, de) | 0, l = l + Math.imul(W, ce) | 0, n = n + Math.imul(W, pe) | 0, n = n + Math.imul(K, ce) | 0, d = d + Math.imul(K, pe) | 0, l = l + Math.imul(z, ve) | 0, n = n + Math.imul(z, be) | 0, n = n + Math.imul(H, ve) | 0, d = d + Math.imul(H, be) | 0;
        var Je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, l = Math.imul(G, he), n = Math.imul(G, ue), n = n + Math.imul(Y, he) | 0, d = Math.imul(Y, ue), l = l + Math.imul(V, le) | 0, n = n + Math.imul(V, de) | 0, n = n + Math.imul($, le) | 0, d = d + Math.imul($, de) | 0, l = l + Math.imul(j, ce) | 0, n = n + Math.imul(j, pe) | 0, n = n + Math.imul(Z, ce) | 0, d = d + Math.imul(Z, pe) | 0, l = l + Math.imul(W, ve) | 0, n = n + Math.imul(W, be) | 0, n = n + Math.imul(K, ve) | 0, d = d + Math.imul(K, be) | 0;
        var Qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, l = Math.imul(G, le), n = Math.imul(G, de), n = n + Math.imul(Y, le) | 0, d = Math.imul(Y, de), l = l + Math.imul(V, ce) | 0, n = n + Math.imul(V, pe) | 0, n = n + Math.imul($, ce) | 0, d = d + Math.imul($, pe) | 0, l = l + Math.imul(j, ve) | 0, n = n + Math.imul(j, be) | 0, n = n + Math.imul(Z, ve) | 0, d = d + Math.imul(Z, be) | 0;
        var et = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(G, ce), n = Math.imul(G, pe), n = n + Math.imul(Y, ce) | 0, d = Math.imul(Y, pe), l = l + Math.imul(V, ve) | 0, n = n + Math.imul(V, be) | 0, n = n + Math.imul($, ve) | 0, d = d + Math.imul($, be) | 0;
        var tt = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, l = Math.imul(G, ve), n = Math.imul(G, be), n = n + Math.imul(Y, ve) | 0, d = Math.imul(Y, be);
        var rt = (b + l | 0) + ((n & 8191) << 13) | 0;
        return b = (d + (n >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, c[0] = ft, c[1] = Be, c[2] = qe, c[3] = ze, c[4] = He, c[5] = We, c[6] = Ke, c[7] = je, c[8] = Ze, c[9] = Ve, c[10] = $e, c[11] = Ge, c[12] = Ye, c[13] = Xe, c[14] = Je, c[15] = Qe, c[16] = et, c[17] = tt, c[18] = rt, b !== 0 && (c[19] = b, h.length++), h;
      };
      Math.imul || (L = q);
      function ge(v, i, a) {
        a.negative = i.negative ^ v.negative, a.length = v.length + i.length;
        for (var h = 0, s = 0, u = 0;u < a.length - 1; u++) {
          var c = s;
          s = 0;
          for (var b = h & 67108863, l = Math.min(u, i.length - 1), n = Math.max(0, u - v.length + 1);n <= l; n++) {
            var d = u - n, w = v.words[d] | 0, g = i.words[n] | 0, _ = w * g, A = _ & 67108863;
            c = c + (_ / 67108864 | 0) | 0, A = A + b | 0, b = A & 67108863, c = c + (A >>> 26) | 0, s += c >>> 26, c &= 67108863;
          }
          a.words[u] = b, h = c, c = s;
        }
        return h !== 0 ? a.words[u] = h : a.length--, a.strip();
      }
      function _e(v, i, a) {
        var h = new N;
        return h.mulp(v, i, a);
      }
      f.prototype.mulTo = function(i, a) {
        var h, s = this.length + i.length;
        return this.length === 10 && i.length === 10 ? h = L(this, i, a) : s < 63 ? h = q(this, i, a) : s < 1024 ? h = ge(this, i, a) : h = _e(this, i, a), h;
      };
      function N(v, i) {
        this.x = v, this.y = i;
      }
      N.prototype.makeRBT = function(i) {
        for (var a = new Array(i), h = f.prototype._countBits(i) - 1, s = 0;s < i; s++)
          a[s] = this.revBin(s, h, i);
        return a;
      }, N.prototype.revBin = function(i, a, h) {
        if (i === 0 || i === h - 1)
          return i;
        for (var s = 0, u = 0;u < a; u++)
          s |= (i & 1) << a - u - 1, i >>= 1;
        return s;
      }, N.prototype.permute = function(i, a, h, s, u, c) {
        for (var b = 0;b < c; b++)
          s[b] = a[i[b]], u[b] = h[i[b]];
      }, N.prototype.transform = function(i, a, h, s, u, c) {
        this.permute(c, i, a, h, s, u);
        for (var b = 1;b < u; b <<= 1)
          for (var l = b << 1, n = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), w = 0;w < u; w += l)
            for (var g = n, _ = d, A = 0;A < b; A++) {
              var R = h[w + A], I = s[w + A], Me = h[w + A + b], k = s[w + A + b], D = g * Me - _ * k;
              k = g * k + _ * Me, Me = D, h[w + A] = R + Me, s[w + A] = I + k, h[w + A + b] = R - Me, s[w + A + b] = I - k, A !== l && (D = n * g - d * _, _ = n * _ + d * g, g = D);
            }
      }, N.prototype.guessLen13b = function(i, a) {
        var h = Math.max(a, i) | 1, s = h & 1, u = 0;
        for (h = h / 2 | 0;h; h = h >>> 1)
          u++;
        return 1 << u + 1 + s;
      }, N.prototype.conjugate = function(i, a, h) {
        if (!(h <= 1))
          for (var s = 0;s < h / 2; s++) {
            var u = i[s];
            i[s] = i[h - s - 1], i[h - s - 1] = u, u = a[s], a[s] = -a[h - s - 1], a[h - s - 1] = -u;
          }
      }, N.prototype.normalize13b = function(i, a) {
        for (var h = 0, s = 0;s < a / 2; s++) {
          var u = Math.round(i[2 * s + 1] / a) * 8192 + Math.round(i[2 * s] / a) + h;
          i[s] = u & 67108863, u < 67108864 ? h = 0 : h = u / 67108864 | 0;
        }
        return i;
      }, N.prototype.convert13b = function(i, a, h, s) {
        for (var u = 0, c = 0;c < a; c++)
          u = u + (i[c] | 0), h[2 * c] = u & 8191, u = u >>> 13, h[2 * c + 1] = u & 8191, u = u >>> 13;
        for (c = 2 * a;c < s; ++c)
          h[c] = 0;
        r(u === 0), r((u & -8192) === 0);
      }, N.prototype.stub = function(i) {
        for (var a = new Array(i), h = 0;h < i; h++)
          a[h] = 0;
        return a;
      }, N.prototype.mulp = function(i, a, h) {
        var s = 2 * this.guessLen13b(i.length, a.length), u = this.makeRBT(s), c = this.stub(s), b = new Array(s), l = new Array(s), n = new Array(s), d = new Array(s), w = new Array(s), g = new Array(s), _ = h.words;
        _.length = s, this.convert13b(i.words, i.length, b, s), this.convert13b(a.words, a.length, d, s), this.transform(b, c, l, n, s, u), this.transform(d, c, w, g, s, u);
        for (var A = 0;A < s; A++) {
          var R = l[A] * w[A] - n[A] * g[A];
          n[A] = l[A] * g[A] + n[A] * w[A], l[A] = R;
        }
        return this.conjugate(l, n, s), this.transform(l, n, _, c, s, u), this.conjugate(_, c, s), this.normalize13b(_, s), h.negative = i.negative ^ a.negative, h.length = i.length + a.length, h.strip();
      }, f.prototype.mul = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), this.mulTo(i, a);
      }, f.prototype.mulf = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), _e(this, i, a);
      }, f.prototype.imul = function(i) {
        return this.clone().mulTo(i, this);
      }, f.prototype.imuln = function(i) {
        r(typeof i == "number"), r(i < 67108864);
        for (var a = 0, h = 0;h < this.length; h++) {
          var s = (this.words[h] | 0) * i, u = (s & 67108863) + (a & 67108863);
          a >>= 26, a += s / 67108864 | 0, a += u >>> 26, this.words[h] = u & 67108863;
        }
        return a !== 0 && (this.words[h] = a, this.length++), this;
      }, f.prototype.muln = function(i) {
        return this.clone().imuln(i);
      }, f.prototype.sqr = function() {
        return this.mul(this);
      }, f.prototype.isqr = function() {
        return this.imul(this.clone());
      }, f.prototype.pow = function(i) {
        var a = B(i);
        if (a.length === 0)
          return new f(1);
        for (var h = this, s = 0;s < a.length && a[s] === 0; s++, h = h.sqr())
          ;
        if (++s < a.length)
          for (var u = h.sqr();s < a.length; s++, u = u.sqr())
            a[s] !== 0 && (h = h.mul(u));
        return h;
      }, f.prototype.iushln = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 67108863 >>> 26 - a << 26 - a, u;
        if (a !== 0) {
          var c = 0;
          for (u = 0;u < this.length; u++) {
            var b = this.words[u] & s, l = (this.words[u] | 0) - b << a;
            this.words[u] = l | c, c = b >>> 26 - a;
          }
          c && (this.words[u] = c, this.length++);
        }
        if (h !== 0) {
          for (u = this.length - 1;u >= 0; u--)
            this.words[u + h] = this.words[u];
          for (u = 0;u < h; u++)
            this.words[u] = 0;
          this.length += h;
        }
        return this.strip();
      }, f.prototype.ishln = function(i) {
        return r(this.negative === 0), this.iushln(i);
      }, f.prototype.iushrn = function(i, a, h) {
        r(typeof i == "number" && i >= 0);
        var s;
        a ? s = (a - a % 26) / 26 : s = 0;
        var u = i % 26, c = Math.min((i - u) / 26, this.length), b = 67108863 ^ 67108863 >>> u << u, l = h;
        if (s -= c, s = Math.max(0, s), l) {
          for (var n = 0;n < c; n++)
            l.words[n] = this.words[n];
          l.length = c;
        }
        if (c !== 0)
          if (this.length > c)
            for (this.length -= c, n = 0;n < this.length; n++)
              this.words[n] = this.words[n + c];
          else
            this.words[0] = 0, this.length = 1;
        var d = 0;
        for (n = this.length - 1;n >= 0 && (d !== 0 || n >= s); n--) {
          var w = this.words[n] | 0;
          this.words[n] = d << 26 - u | w >>> u, d = w & b;
        }
        return l && d !== 0 && (l.words[l.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, f.prototype.ishrn = function(i, a, h) {
        return r(this.negative === 0), this.iushrn(i, a, h);
      }, f.prototype.shln = function(i) {
        return this.clone().ishln(i);
      }, f.prototype.ushln = function(i) {
        return this.clone().iushln(i);
      }, f.prototype.shrn = function(i) {
        return this.clone().ishrn(i);
      }, f.prototype.ushrn = function(i) {
        return this.clone().iushrn(i);
      }, f.prototype.testn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return false;
        var u = this.words[h];
        return !!(u & s);
      }, f.prototype.imaskn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26;
        if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h)
          return this;
        if (a !== 0 && h++, this.length = Math.min(h, this.length), a !== 0) {
          var s = 67108863 ^ 67108863 >>> a << a;
          this.words[this.length - 1] &= s;
        }
        return this.strip();
      }, f.prototype.maskn = function(i) {
        return this.clone().imaskn(i);
      }, f.prototype.iaddn = function(i) {
        return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
      }, f.prototype._iaddn = function(i) {
        this.words[0] += i;
        for (var a = 0;a < this.length && this.words[a] >= 67108864; a++)
          this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
        return this.length = Math.max(this.length, a + 1), this;
      }, f.prototype.isubn = function(i) {
        if (r(typeof i == "number"), r(i < 67108864), i < 0)
          return this.iaddn(-i);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(i), this.negative = 1, this;
        if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var a = 0;a < this.length && this.words[a] < 0; a++)
            this.words[a] += 67108864, this.words[a + 1] -= 1;
        return this.strip();
      }, f.prototype.addn = function(i) {
        return this.clone().iaddn(i);
      }, f.prototype.subn = function(i) {
        return this.clone().isubn(i);
      }, f.prototype.iabs = function() {
        return this.negative = 0, this;
      }, f.prototype.abs = function() {
        return this.clone().iabs();
      }, f.prototype._ishlnsubmul = function(i, a, h) {
        var s = i.length + h, u;
        this._expand(s);
        var c, b = 0;
        for (u = 0;u < i.length; u++) {
          c = (this.words[u + h] | 0) + b;
          var l = (i.words[u] | 0) * a;
          c -= l & 67108863, b = (c >> 26) - (l / 67108864 | 0), this.words[u + h] = c & 67108863;
        }
        for (;u < this.length - h; u++)
          c = (this.words[u + h] | 0) + b, b = c >> 26, this.words[u + h] = c & 67108863;
        if (b === 0)
          return this.strip();
        for (r(b === -1), b = 0, u = 0;u < this.length; u++)
          c = -(this.words[u] | 0) + b, b = c >> 26, this.words[u] = c & 67108863;
        return this.negative = 1, this.strip();
      }, f.prototype._wordDiv = function(i, a) {
        var h = this.length - i.length, s = this.clone(), u = i, c = u.words[u.length - 1] | 0, b = this._countBits(c);
        h = 26 - b, h !== 0 && (u = u.ushln(h), s.iushln(h), c = u.words[u.length - 1] | 0);
        var l = s.length - u.length, n;
        if (a !== "mod") {
          n = new f(null), n.length = l + 1, n.words = new Array(n.length);
          for (var d = 0;d < n.length; d++)
            n.words[d] = 0;
        }
        var w = s.clone()._ishlnsubmul(u, 1, l);
        w.negative === 0 && (s = w, n && (n.words[l] = 1));
        for (var g = l - 1;g >= 0; g--) {
          var _ = (s.words[u.length + g] | 0) * 67108864 + (s.words[u.length + g - 1] | 0);
          for (_ = Math.min(_ / c | 0, 67108863), s._ishlnsubmul(u, _, g);s.negative !== 0; )
            _--, s.negative = 0, s._ishlnsubmul(u, 1, g), s.isZero() || (s.negative ^= 1);
          n && (n.words[g] = _);
        }
        return n && n.strip(), s.strip(), a !== "div" && h !== 0 && s.iushrn(h), { div: n || null, mod: s };
      }, f.prototype.divmod = function(i, a, h) {
        if (r(!i.isZero()), this.isZero())
          return { div: new f(0), mod: new f(0) };
        var s, u, c;
        return this.negative !== 0 && i.negative === 0 ? (c = this.neg().divmod(i, a), a !== "mod" && (s = c.div.neg()), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.iadd(i)), { div: s, mod: u }) : this.negative === 0 && i.negative !== 0 ? (c = this.divmod(i.neg(), a), a !== "mod" && (s = c.div.neg()), { div: s, mod: c.mod }) : (this.negative & i.negative) !== 0 ? (c = this.neg().divmod(i.neg(), a), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.isub(i)), { div: c.div, mod: u }) : i.length > this.length || this.cmp(i) < 0 ? { div: new f(0), mod: this } : i.length === 1 ? a === "div" ? { div: this.divn(i.words[0]), mod: null } : a === "mod" ? { div: null, mod: new f(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new f(this.modn(i.words[0])) } : this._wordDiv(i, a);
      }, f.prototype.div = function(i) {
        return this.divmod(i, "div", false).div;
      }, f.prototype.mod = function(i) {
        return this.divmod(i, "mod", false).mod;
      }, f.prototype.umod = function(i) {
        return this.divmod(i, "mod", true).mod;
      }, f.prototype.divRound = function(i) {
        var a = this.divmod(i);
        if (a.mod.isZero())
          return a.div;
        var h = a.div.negative !== 0 ? a.mod.isub(i) : a.mod, s = i.ushrn(1), u = i.andln(1), c = h.cmp(s);
        return c < 0 || u === 1 && c === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
      }, f.prototype.modn = function(i) {
        r(i <= 67108863);
        for (var a = (1 << 26) % i, h = 0, s = this.length - 1;s >= 0; s--)
          h = (a * h + (this.words[s] | 0)) % i;
        return h;
      }, f.prototype.idivn = function(i) {
        r(i <= 67108863);
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = (this.words[h] | 0) + a * 67108864;
          this.words[h] = s / i | 0, a = s % i;
        }
        return this.strip();
      }, f.prototype.divn = function(i) {
        return this.clone().idivn(i);
      }, f.prototype.egcd = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = new f(0), b = new f(1), l = 0;a.isEven() && h.isEven(); )
          a.iushrn(1), h.iushrn(1), ++l;
        for (var n = h.clone(), d = a.clone();!a.isZero(); ) {
          for (var w = 0, g = 1;(a.words[0] & g) === 0 && w < 26; ++w, g <<= 1)
            ;
          if (w > 0)
            for (a.iushrn(w);w-- > 0; )
              (s.isOdd() || u.isOdd()) && (s.iadd(n), u.isub(d)), s.iushrn(1), u.iushrn(1);
          for (var _ = 0, A = 1;(h.words[0] & A) === 0 && _ < 26; ++_, A <<= 1)
            ;
          if (_ > 0)
            for (h.iushrn(_);_-- > 0; )
              (c.isOdd() || b.isOdd()) && (c.iadd(n), b.isub(d)), c.iushrn(1), b.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(c), u.isub(b)) : (h.isub(a), c.isub(s), b.isub(u));
        }
        return { a: c, b, gcd: h.iushln(l) };
      }, f.prototype._invmp = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = h.clone();a.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var b = 0, l = 1;(a.words[0] & l) === 0 && b < 26; ++b, l <<= 1)
            ;
          if (b > 0)
            for (a.iushrn(b);b-- > 0; )
              s.isOdd() && s.iadd(c), s.iushrn(1);
          for (var n = 0, d = 1;(h.words[0] & d) === 0 && n < 26; ++n, d <<= 1)
            ;
          if (n > 0)
            for (h.iushrn(n);n-- > 0; )
              u.isOdd() && u.iadd(c), u.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(u)) : (h.isub(a), u.isub(s));
        }
        var w;
        return a.cmpn(1) === 0 ? w = s : w = u, w.cmpn(0) < 0 && w.iadd(i), w;
      }, f.prototype.gcd = function(i) {
        if (this.isZero())
          return i.abs();
        if (i.isZero())
          return this.abs();
        var a = this.clone(), h = i.clone();
        a.negative = 0, h.negative = 0;
        for (var s = 0;a.isEven() && h.isEven(); s++)
          a.iushrn(1), h.iushrn(1);
        do {
          for (;a.isEven(); )
            a.iushrn(1);
          for (;h.isEven(); )
            h.iushrn(1);
          var u = a.cmp(h);
          if (u < 0) {
            var c = a;
            a = h, h = c;
          } else if (u === 0 || h.cmpn(1) === 0)
            break;
          a.isub(h);
        } while (true);
        return h.iushln(s);
      }, f.prototype.invm = function(i) {
        return this.egcd(i).a.umod(i);
      }, f.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, f.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, f.prototype.andln = function(i) {
        return this.words[0] & i;
      }, f.prototype.bincn = function(i) {
        r(typeof i == "number");
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return this._expand(h + 1), this.words[h] |= s, this;
        for (var u = s, c = h;u !== 0 && c < this.length; c++) {
          var b = this.words[c] | 0;
          b += u, u = b >>> 26, b &= 67108863, this.words[c] = b;
        }
        return u !== 0 && (this.words[c] = u, this.length++), this;
      }, f.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, f.prototype.cmpn = function(i) {
        var a = i < 0;
        if (this.negative !== 0 && !a)
          return -1;
        if (this.negative === 0 && a)
          return 1;
        this.strip();
        var h;
        if (this.length > 1)
          h = 1;
        else {
          a && (i = -i), r(i <= 67108863, "Number is too big");
          var s = this.words[0] | 0;
          h = s === i ? 0 : s < i ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }, f.prototype.cmp = function(i) {
        if (this.negative !== 0 && i.negative === 0)
          return -1;
        if (this.negative === 0 && i.negative !== 0)
          return 1;
        var a = this.ucmp(i);
        return this.negative !== 0 ? -a | 0 : a;
      }, f.prototype.ucmp = function(i) {
        if (this.length > i.length)
          return 1;
        if (this.length < i.length)
          return -1;
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = this.words[h] | 0, u = i.words[h] | 0;
          if (s !== u) {
            s < u ? a = -1 : s > u && (a = 1);
            break;
          }
        }
        return a;
      }, f.prototype.gtn = function(i) {
        return this.cmpn(i) === 1;
      }, f.prototype.gt = function(i) {
        return this.cmp(i) === 1;
      }, f.prototype.gten = function(i) {
        return this.cmpn(i) >= 0;
      }, f.prototype.gte = function(i) {
        return this.cmp(i) >= 0;
      }, f.prototype.ltn = function(i) {
        return this.cmpn(i) === -1;
      }, f.prototype.lt = function(i) {
        return this.cmp(i) === -1;
      }, f.prototype.lten = function(i) {
        return this.cmpn(i) <= 0;
      }, f.prototype.lte = function(i) {
        return this.cmp(i) <= 0;
      }, f.prototype.eqn = function(i) {
        return this.cmpn(i) === 0;
      }, f.prototype.eq = function(i) {
        return this.cmp(i) === 0;
      }, f.red = function(i) {
        return new P(i);
      }, f.prototype.toRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
      }, f.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, f.prototype._forceRed = function(i) {
        return this.red = i, this;
      }, f.prototype.forceRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
      }, f.prototype.redAdd = function(i) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
      }, f.prototype.redIAdd = function(i) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
      }, f.prototype.redSub = function(i) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
      }, f.prototype.redISub = function(i) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
      }, f.prototype.redShl = function(i) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
      }, f.prototype.redMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
      }, f.prototype.redIMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
      }, f.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, f.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, f.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, f.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, f.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, f.prototype.redPow = function(i) {
        return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
      };
      var we = { k256: null, p224: null, p192: null, p25519: null };
      function ye(v, i) {
        this.name = v, this.p = new f(i, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      ye.prototype._tmp = function() {
        var i = new f(null);
        return i.words = new Array(Math.ceil(this.n / 13)), i;
      }, ye.prototype.ireduce = function(i) {
        var a = i, h;
        do
          this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), h = a.bitLength();
        while (h > this.n);
        var s = h < this.n ? -1 : a.ucmp(this.p);
        return s === 0 ? (a.words[0] = 0, a.length = 1) : s > 0 ? a.isub(this.p) : a.strip !== undefined ? a.strip() : a._strip(), a;
      }, ye.prototype.split = function(i, a) {
        i.iushrn(this.n, 0, a);
      }, ye.prototype.imulK = function(i) {
        return i.imul(this.k);
      };
      function xe() {
        ye.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      o(xe, ye), xe.prototype.split = function(i, a) {
        for (var h = 4194303, s = Math.min(i.length, 9), u = 0;u < s; u++)
          a.words[u] = i.words[u];
        if (a.length = s, i.length <= 9) {
          i.words[0] = 0, i.length = 1;
          return;
        }
        var c = i.words[9];
        for (a.words[a.length++] = c & h, u = 10;u < i.length; u++) {
          var b = i.words[u] | 0;
          i.words[u - 10] = (b & h) << 4 | c >>> 22, c = b;
        }
        c >>>= 22, i.words[u - 10] = c, c === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
      }, xe.prototype.imulK = function(i) {
        i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = i.words[h] | 0;
          a += s * 977, i.words[h] = a & 67108863, a = s * 64 + (a / 67108864 | 0);
        }
        return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
      };
      function Re() {
        ye.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      o(Re, ye);
      function Ee() {
        ye.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      o(Ee, ye);
      function Ae() {
        ye.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      o(Ae, ye), Ae.prototype.imulK = function(i) {
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = (i.words[h] | 0) * 19 + a, u = s & 67108863;
          s >>>= 26, i.words[h] = u, a = s;
        }
        return a !== 0 && (i.words[i.length++] = a), i;
      }, f._prime = function(i) {
        if (we[i])
          return we[i];
        var a;
        if (i === "k256")
          a = new xe;
        else if (i === "p224")
          a = new Re;
        else if (i === "p192")
          a = new Ee;
        else if (i === "p25519")
          a = new Ae;
        else
          throw new Error("Unknown prime " + i);
        return we[i] = a, a;
      };
      function P(v) {
        if (typeof v == "string") {
          var i = f._prime(v);
          this.m = i.p, this.prime = i;
        } else
          r(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
      }
      P.prototype._verify1 = function(i) {
        r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
      }, P.prototype._verify2 = function(i, a) {
        r((i.negative | a.negative) === 0, "red works only with positives"), r(i.red && i.red === a.red, "red works only with red numbers");
      }, P.prototype.imod = function(i) {
        return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
      }, P.prototype.neg = function(i) {
        return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
      }, P.prototype.add = function(i, a) {
        this._verify2(i, a);
        var h = i.add(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }, P.prototype.iadd = function(i, a) {
        this._verify2(i, a);
        var h = i.iadd(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }, P.prototype.sub = function(i, a) {
        this._verify2(i, a);
        var h = i.sub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }, P.prototype.isub = function(i, a) {
        this._verify2(i, a);
        var h = i.isub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }, P.prototype.shl = function(i, a) {
        return this._verify1(i), this.imod(i.ushln(a));
      }, P.prototype.imul = function(i, a) {
        return this._verify2(i, a), this.imod(i.imul(a));
      }, P.prototype.mul = function(i, a) {
        return this._verify2(i, a), this.imod(i.mul(a));
      }, P.prototype.isqr = function(i) {
        return this.imul(i, i.clone());
      }, P.prototype.sqr = function(i) {
        return this.mul(i, i);
      }, P.prototype.sqrt = function(i) {
        if (i.isZero())
          return i.clone();
        var a = this.m.andln(3);
        if (r(a % 2 === 1), a === 3) {
          var h = this.m.add(new f(1)).iushrn(2);
          return this.pow(i, h);
        }
        for (var s = this.m.subn(1), u = 0;!s.isZero() && s.andln(1) === 0; )
          u++, s.iushrn(1);
        r(!s.isZero());
        var c = new f(1).toRed(this), b = c.redNeg(), l = this.m.subn(1).iushrn(1), n = this.m.bitLength();
        for (n = new f(2 * n * n).toRed(this);this.pow(n, l).cmp(b) !== 0; )
          n.redIAdd(b);
        for (var d = this.pow(n, s), w = this.pow(i, s.addn(1).iushrn(1)), g = this.pow(i, s), _ = u;g.cmp(c) !== 0; ) {
          for (var A = g, R = 0;A.cmp(c) !== 0; R++)
            A = A.redSqr();
          r(R < _);
          var I = this.pow(d, new f(1).iushln(_ - R - 1));
          w = w.redMul(I), d = I.redSqr(), g = g.redMul(d), _ = R;
        }
        return w;
      }, P.prototype.invm = function(i) {
        var a = i._invmp(this.m);
        return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
      }, P.prototype.pow = function(i, a) {
        if (a.isZero())
          return new f(1).toRed(this);
        if (a.cmpn(1) === 0)
          return i.clone();
        var h = 4, s = new Array(1 << h);
        s[0] = new f(1).toRed(this), s[1] = i;
        for (var u = 2;u < s.length; u++)
          s[u] = this.mul(s[u - 1], i);
        var c = s[0], b = 0, l = 0, n = a.bitLength() % 26;
        for (n === 0 && (n = 26), u = a.length - 1;u >= 0; u--) {
          for (var d = a.words[u], w = n - 1;w >= 0; w--) {
            var g = d >> w & 1;
            if (c !== s[0] && (c = this.sqr(c)), g === 0 && b === 0) {
              l = 0;
              continue;
            }
            b <<= 1, b |= g, l++, !(l !== h && (u !== 0 || w !== 0)) && (c = this.mul(c, s[b]), l = 0, b = 0);
          }
          n = 26;
        }
        return c;
      }, P.prototype.convertTo = function(i) {
        var a = i.umod(this.m);
        return a === i ? a.clone() : a;
      }, P.prototype.convertFrom = function(i) {
        var a = i.clone();
        return a.red = null, a;
      }, f.mont = function(i) {
        return new Se(i);
      };
      function Se(v) {
        P.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      o(Se, P), Se.prototype.convertTo = function(i) {
        return this.imod(i.ushln(this.shift));
      }, Se.prototype.convertFrom = function(i) {
        var a = this.imod(i.mul(this.rinv));
        return a.red = null, a;
      }, Se.prototype.imul = function(i, a) {
        if (i.isZero() || a.isZero())
          return i.words[0] = 0, i.length = 1, i;
        var h = i.imul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.mul = function(i, a) {
        if (i.isZero() || a.isZero())
          return new f(0)._forceRed(this);
        var h = i.mul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.invm = function(i) {
        var a = this.imod(i._invmp(this.m).mul(this.r2));
        return a._forceRed(this);
      };
    })(typeof Ll > "u" || Ll, h2);
  });
  Nl = T((d2) => {
    var js = d2;
    function uA(t, e) {
      if (Array.isArray(t))
        return t.slice();
      if (!t)
        return [];
      var r = [];
      if (typeof t != "string") {
        for (var o = 0;o < t.length; o++)
          r[o] = t[o] | 0;
        return r;
      }
      if (e === "hex") {
        t = t.replace(/[^a-z0-9]+/ig, ""), t.length % 2 !== 0 && (t = "0" + t);
        for (var o = 0;o < t.length; o += 2)
          r.push(parseInt(t[o] + t[o + 1], 16));
      } else
        for (var o = 0;o < t.length; o++) {
          var f = t.charCodeAt(o), p = f >> 8, m = f & 255;
          p ? r.push(p, m) : r.push(m);
        }
      return r;
    }
    js.toArray = uA;
    function u2(t) {
      return t.length === 1 ? "0" + t : t;
    }
    js.zero2 = u2;
    function l2(t) {
      for (var e = "", r = 0;r < t.length; r++)
        e += u2(t[r].toString(16));
      return e;
    }
    js.toHex = l2;
    js.encode = function(e, r) {
      return r === "hex" ? l2(e) : e;
    };
  });
  or = T((c2) => {
    var Pr = c2, lA = ri(), dA = ar(), Zs = Nl();
    Pr.assert = dA;
    Pr.toArray = Zs.toArray;
    Pr.zero2 = Zs.zero2;
    Pr.toHex = Zs.toHex;
    Pr.encode = Zs.encode;
    function cA(t, e, r) {
      var o = new Array(Math.max(t.bitLength(), r) + 1);
      o.fill(0);
      for (var f = 1 << e + 1, p = t.clone(), m = 0;m < o.length; m++) {
        var y, M = p.andln(f - 1);
        p.isOdd() ? (M > (f >> 1) - 1 ? y = (f >> 1) - M : y = M, p.isubn(y)) : y = 0, o[m] = y, p.iushrn(1);
      }
      return o;
    }
    Pr.getNAF = cA;
    function pA(t, e) {
      var r = [[], []];
      t = t.clone(), e = e.clone();
      for (var o = 0, f = 0, p;t.cmpn(-o) > 0 || e.cmpn(-f) > 0; ) {
        var m = t.andln(3) + o & 3, y = e.andln(3) + f & 3;
        m === 3 && (m = -1), y === 3 && (y = -1);
        var M;
        (m & 1) === 0 ? M = 0 : (p = t.andln(7) + o & 7, (p === 3 || p === 5) && y === 2 ? M = -m : M = m), r[0].push(M);
        var x;
        (y & 1) === 0 ? x = 0 : (p = e.andln(7) + f & 7, (p === 3 || p === 5) && m === 2 ? x = -y : x = y), r[1].push(x), 2 * o === M + 1 && (o = 1 - o), 2 * f === x + 1 && (f = 1 - f), t.iushrn(1), e.iushrn(1);
      }
      return r;
    }
    Pr.getJSF = pA;
    function vA(t, e, r) {
      var o = "_" + e;
      t.prototype[e] = function() {
        return this[o] !== undefined ? this[o] : this[o] = r.call(this);
      };
    }
    Pr.cachedProperty = vA;
    function bA(t) {
      return typeof t == "string" ? Pr.toArray(t, "hex") : t;
    }
    Pr.parseBytes = bA;
    function mA(t) {
      return new lA(t, "hex", "le");
    }
    Pr.intFromLE = mA;
  });
  Oa = T((xk, p2) => {
    var Cn = ri(), Ca = or(), Vs = Ca.getNAF, gA = Ca.getJSF, $s = Ca.assert;
    function Xi(t, e) {
      this.type = t, this.p = new Cn(e.p, 16), this.red = e.prime ? Cn.red(e.prime) : Cn.mont(this.p), this.zero = new Cn(0).toRed(this.red), this.one = new Cn(1).toRed(this.red), this.two = new Cn(2).toRed(this.red), this.n = e.n && new Cn(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
      var r = this.n && this.p.div(this.n);
      !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
    }
    p2.exports = Xi;
    Xi.prototype.point = function() {
      throw new Error("Not implemented");
    };
    Xi.prototype.validate = function() {
      throw new Error("Not implemented");
    };
    Xi.prototype._fixedNafMul = function(e, r) {
      $s(e.precomputed);
      var o = e._getDoubles(), f = Vs(r, 1, this._bitLength), p = (1 << o.step + 1) - (o.step % 2 === 0 ? 2 : 1);
      p /= 3;
      var m = [], y, M;
      for (y = 0;y < f.length; y += o.step) {
        M = 0;
        for (var x = y + o.step - 1;x >= y; x--)
          M = (M << 1) + f[x];
        m.push(M);
      }
      for (var S = this.jpoint(null, null, null), E = this.jpoint(null, null, null), B = p;B > 0; B--) {
        for (y = 0;y < m.length; y++)
          M = m[y], M === B ? E = E.mixedAdd(o.points[y]) : M === -B && (E = E.mixedAdd(o.points[y].neg()));
        S = S.add(E);
      }
      return S.toP();
    };
    Xi.prototype._wnafMul = function(e, r) {
      var o = 4, f = e._getNAFPoints(o);
      o = f.wnd;
      for (var p = f.points, m = Vs(r, o, this._bitLength), y = this.jpoint(null, null, null), M = m.length - 1;M >= 0; M--) {
        for (var x = 0;M >= 0 && m[M] === 0; M--)
          x++;
        if (M >= 0 && x++, y = y.dblp(x), M < 0)
          break;
        var S = m[M];
        $s(S !== 0), e.type === "affine" ? S > 0 ? y = y.mixedAdd(p[S - 1 >> 1]) : y = y.mixedAdd(p[-S - 1 >> 1].neg()) : S > 0 ? y = y.add(p[S - 1 >> 1]) : y = y.add(p[-S - 1 >> 1].neg());
      }
      return e.type === "affine" ? y.toP() : y;
    };
    Xi.prototype._wnafMulAdd = function(e, r, o, f, p) {
      var m = this._wnafT1, y = this._wnafT2, M = this._wnafT3, x = 0, S, E, B;
      for (S = 0;S < f; S++) {
        B = r[S];
        var q = B._getNAFPoints(e);
        m[S] = q.wnd, y[S] = q.points;
      }
      for (S = f - 1;S >= 1; S -= 2) {
        var L = S - 1, ge = S;
        if (m[L] !== 1 || m[ge] !== 1) {
          M[L] = Vs(o[L], m[L], this._bitLength), M[ge] = Vs(o[ge], m[ge], this._bitLength), x = Math.max(M[L].length, x), x = Math.max(M[ge].length, x);
          continue;
        }
        var _e = [r[L], null, null, r[ge]];
        r[L].y.cmp(r[ge].y) === 0 ? (_e[1] = r[L].add(r[ge]), _e[2] = r[L].toJ().mixedAdd(r[ge].neg())) : r[L].y.cmp(r[ge].y.redNeg()) === 0 ? (_e[1] = r[L].toJ().mixedAdd(r[ge]), _e[2] = r[L].add(r[ge].neg())) : (_e[1] = r[L].toJ().mixedAdd(r[ge]), _e[2] = r[L].toJ().mixedAdd(r[ge].neg()));
        var N = [-3, -1, -5, -7, 0, 7, 5, 1, 3], we = gA(o[L], o[ge]);
        for (x = Math.max(we[0].length, x), M[L] = new Array(x), M[ge] = new Array(x), E = 0;E < x; E++) {
          var ye = we[0][E] | 0, xe = we[1][E] | 0;
          M[L][E] = N[(ye + 1) * 3 + (xe + 1)], M[ge][E] = 0, y[L] = _e;
        }
      }
      var Re = this.jpoint(null, null, null), Ee = this._wnafT4;
      for (S = x;S >= 0; S--) {
        for (var Ae = 0;S >= 0; ) {
          var P = true;
          for (E = 0;E < f; E++)
            Ee[E] = M[E][S] | 0, Ee[E] !== 0 && (P = false);
          if (!P)
            break;
          Ae++, S--;
        }
        if (S >= 0 && Ae++, Re = Re.dblp(Ae), S < 0)
          break;
        for (E = 0;E < f; E++) {
          var Se = Ee[E];
          Se !== 0 && (Se > 0 ? B = y[E][Se - 1 >> 1] : Se < 0 && (B = y[E][-Se - 1 >> 1].neg()), B.type === "affine" ? Re = Re.mixedAdd(B) : Re = Re.add(B));
        }
      }
      for (S = 0;S < f; S++)
        y[S] = null;
      return p ? Re : Re.toP();
    };
    function _r(t, e) {
      this.curve = t, this.type = e, this.precomputed = null;
    }
    Xi.BasePoint = _r;
    _r.prototype.eq = function() {
      throw new Error("Not implemented");
    };
    _r.prototype.validate = function() {
      return this.curve.validate(this);
    };
    Xi.prototype.decodePoint = function(e, r) {
      e = Ca.toArray(e, r);
      var o = this.p.byteLength();
      if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * o) {
        e[0] === 6 ? $s(e[e.length - 1] % 2 === 0) : e[0] === 7 && $s(e[e.length - 1] % 2 === 1);
        var f = this.point(e.slice(1, 1 + o), e.slice(1 + o, 1 + 2 * o));
        return f;
      } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === o)
        return this.pointFromX(e.slice(1, 1 + o), e[0] === 3);
      throw new Error("Unknown point format");
    };
    _r.prototype.encodeCompressed = function(e) {
      return this.encode(e, true);
    };
    _r.prototype._encode = function(e) {
      var r = this.curve.p.byteLength(), o = this.getX().toArray("be", r);
      return e ? [this.getY().isEven() ? 2 : 3].concat(o) : [4].concat(o, this.getY().toArray("be", r));
    };
    _r.prototype.encode = function(e, r) {
      return Ca.encode(this._encode(r), e);
    };
    _r.prototype.precompute = function(e) {
      if (this.precomputed)
        return this;
      var r = { doubles: null, naf: null, beta: null };
      return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, e), r.beta = this._getBeta(), this.precomputed = r, this;
    };
    _r.prototype._hasDoubles = function(e) {
      if (!this.precomputed)
        return false;
      var r = this.precomputed.doubles;
      return r ? r.points.length >= Math.ceil((e.bitLength() + 1) / r.step) : false;
    };
    _r.prototype._getDoubles = function(e, r) {
      if (this.precomputed && this.precomputed.doubles)
        return this.precomputed.doubles;
      for (var o = [this], f = this, p = 0;p < r; p += e) {
        for (var m = 0;m < e; m++)
          f = f.dbl();
        o.push(f);
      }
      return { step: e, points: o };
    };
    _r.prototype._getNAFPoints = function(e) {
      if (this.precomputed && this.precomputed.naf)
        return this.precomputed.naf;
      for (var r = [this], o = (1 << e) - 1, f = o === 1 ? null : this.dbl(), p = 1;p < o; p++)
        r[p] = r[p - 1].add(f);
      return { wnd: e, points: r };
    };
    _r.prototype._getBeta = function() {
      return null;
    };
    _r.prototype.dblp = function(e) {
      for (var r = this, o = 0;o < e; o++)
        r = r.dbl();
      return r;
    };
  });
  b2 = T((Sk, v2) => {
    var yA = or(), lt = ri(), Dl = Ie(), Bf = Oa(), wA = yA.assert;
    function xr(t) {
      Bf.call(this, "short", t), this.a = new lt(t.a, 16).toRed(this.red), this.b = new lt(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
    }
    Dl(xr, Bf);
    v2.exports = xr;
    xr.prototype._getEndomorphism = function(e) {
      if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
        var r, o;
        if (e.beta)
          r = new lt(e.beta, 16).toRed(this.red);
        else {
          var f = this._getEndoRoots(this.p);
          r = f[0].cmp(f[1]) < 0 ? f[0] : f[1], r = r.toRed(this.red);
        }
        if (e.lambda)
          o = new lt(e.lambda, 16);
        else {
          var p = this._getEndoRoots(this.n);
          this.g.mul(p[0]).x.cmp(this.g.x.redMul(r)) === 0 ? o = p[0] : (o = p[1], wA(this.g.mul(o).x.cmp(this.g.x.redMul(r)) === 0));
        }
        var m;
        return e.basis ? m = e.basis.map(function(y) {
          return { a: new lt(y.a, 16), b: new lt(y.b, 16) };
        }) : m = this._getEndoBasis(o), { beta: r, lambda: o, basis: m };
      }
    };
    xr.prototype._getEndoRoots = function(e) {
      var r = e === this.p ? this.red : lt.mont(e), o = new lt(2).toRed(r).redInvm(), f = o.redNeg(), p = new lt(3).toRed(r).redNeg().redSqrt().redMul(o), m = f.redAdd(p).fromRed(), y = f.redSub(p).fromRed();
      return [m, y];
    };
    xr.prototype._getEndoBasis = function(e) {
      for (var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), o = e, f = this.n.clone(), p = new lt(1), m = new lt(0), y = new lt(0), M = new lt(1), x, S, E, B, q, L, ge, _e = 0, N, we;o.cmpn(0) !== 0; ) {
        var ye = f.div(o);
        N = f.sub(ye.mul(o)), we = y.sub(ye.mul(p));
        var xe = M.sub(ye.mul(m));
        if (!E && N.cmp(r) < 0)
          x = ge.neg(), S = p, E = N.neg(), B = we;
        else if (E && ++_e === 2)
          break;
        ge = N, f = o, o = N, y = p, p = we, M = m, m = xe;
      }
      q = N.neg(), L = we;
      var Re = E.sqr().add(B.sqr()), Ee = q.sqr().add(L.sqr());
      return Ee.cmp(Re) >= 0 && (q = x, L = S), E.negative && (E = E.neg(), B = B.neg()), q.negative && (q = q.neg(), L = L.neg()), [{ a: E, b: B }, { a: q, b: L }];
    };
    xr.prototype._endoSplit = function(e) {
      var r = this.endo.basis, o = r[0], f = r[1], p = f.b.mul(e).divRound(this.n), m = o.b.neg().mul(e).divRound(this.n), y = p.mul(o.a), M = m.mul(f.a), x = p.mul(o.b), S = m.mul(f.b), E = e.sub(y).sub(M), B = x.add(S).neg();
      return { k1: E, k2: B };
    };
    xr.prototype.pointFromX = function(e, r) {
      e = new lt(e, 16), e.red || (e = e.toRed(this.red));
      var o = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), f = o.redSqrt();
      if (f.redSqr().redSub(o).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var p = f.fromRed().isOdd();
      return (r && !p || !r && p) && (f = f.redNeg()), this.point(e, f);
    };
    xr.prototype.validate = function(e) {
      if (e.inf)
        return true;
      var { x: r, y: o } = e, f = this.a.redMul(r), p = r.redSqr().redMul(r).redIAdd(f).redIAdd(this.b);
      return o.redSqr().redISub(p).cmpn(0) === 0;
    };
    xr.prototype._endoWnafMulAdd = function(e, r, o) {
      for (var f = this._endoWnafT1, p = this._endoWnafT2, m = 0;m < e.length; m++) {
        var y = this._endoSplit(r[m]), M = e[m], x = M._getBeta();
        y.k1.negative && (y.k1.ineg(), M = M.neg(true)), y.k2.negative && (y.k2.ineg(), x = x.neg(true)), f[m * 2] = M, f[m * 2 + 1] = x, p[m * 2] = y.k1, p[m * 2 + 1] = y.k2;
      }
      for (var S = this._wnafMulAdd(1, f, p, m * 2, o), E = 0;E < m * 2; E++)
        f[E] = null, p[E] = null;
      return S;
    };
    function Ct(t, e, r, o) {
      Bf.BasePoint.call(this, t, "affine"), e === null && r === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new lt(e, 16), this.y = new lt(r, 16), o && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
    }
    Dl(Ct, Bf.BasePoint);
    xr.prototype.point = function(e, r, o) {
      return new Ct(this, e, r, o);
    };
    xr.prototype.pointFromJSON = function(e, r) {
      return Ct.fromJSON(this, e, r);
    };
    Ct.prototype._getBeta = function() {
      if (!!this.curve.endo) {
        var e = this.precomputed;
        if (e && e.beta)
          return e.beta;
        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (e) {
          var o = this.curve, f = function(p) {
            return o.point(p.x.redMul(o.endo.beta), p.y);
          };
          e.beta = r, r.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(f) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(f) } };
        }
        return r;
      }
    };
    Ct.prototype.toJSON = function() {
      return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
    };
    Ct.fromJSON = function(e, r, o) {
      typeof r == "string" && (r = JSON.parse(r));
      var f = e.point(r[0], r[1], o);
      if (!r[2])
        return f;
      function p(y) {
        return e.point(y[0], y[1], o);
      }
      var m = r[2];
      return f.precomputed = { beta: null, doubles: m.doubles && { step: m.doubles.step, points: [f].concat(m.doubles.points.map(p)) }, naf: m.naf && { wnd: m.naf.wnd, points: [f].concat(m.naf.points.map(p)) } }, f;
    };
    Ct.prototype.inspect = function() {
      return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
    };
    Ct.prototype.isInfinity = function() {
      return this.inf;
    };
    Ct.prototype.add = function(e) {
      if (this.inf)
        return e;
      if (e.inf)
        return this;
      if (this.eq(e))
        return this.dbl();
      if (this.neg().eq(e))
        return this.curve.point(null, null);
      if (this.x.cmp(e.x) === 0)
        return this.curve.point(null, null);
      var r = this.y.redSub(e.y);
      r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(e.x).redInvm()));
      var o = r.redSqr().redISub(this.x).redISub(e.x), f = r.redMul(this.x.redSub(o)).redISub(this.y);
      return this.curve.point(o, f);
    };
    Ct.prototype.dbl = function() {
      if (this.inf)
        return this;
      var e = this.y.redAdd(this.y);
      if (e.cmpn(0) === 0)
        return this.curve.point(null, null);
      var r = this.curve.a, o = this.x.redSqr(), f = e.redInvm(), p = o.redAdd(o).redIAdd(o).redIAdd(r).redMul(f), m = p.redSqr().redISub(this.x.redAdd(this.x)), y = p.redMul(this.x.redSub(m)).redISub(this.y);
      return this.curve.point(m, y);
    };
    Ct.prototype.getX = function() {
      return this.x.fromRed();
    };
    Ct.prototype.getY = function() {
      return this.y.fromRed();
    };
    Ct.prototype.mul = function(e) {
      return e = new lt(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
    };
    Ct.prototype.mulAdd = function(e, r, o) {
      var f = [this, r], p = [e, o];
      return this.curve.endo ? this.curve._endoWnafMulAdd(f, p) : this.curve._wnafMulAdd(1, f, p, 2);
    };
    Ct.prototype.jmulAdd = function(e, r, o) {
      var f = [this, r], p = [e, o];
      return this.curve.endo ? this.curve._endoWnafMulAdd(f, p, true) : this.curve._wnafMulAdd(1, f, p, 2, true);
    };
    Ct.prototype.eq = function(e) {
      return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
    };
    Ct.prototype.neg = function(e) {
      if (this.inf)
        return this;
      var r = this.curve.point(this.x, this.y.redNeg());
      if (e && this.precomputed) {
        var o = this.precomputed, f = function(p) {
          return p.neg();
        };
        r.precomputed = { naf: o.naf && { wnd: o.naf.wnd, points: o.naf.points.map(f) }, doubles: o.doubles && { step: o.doubles.step, points: o.doubles.points.map(f) } };
      }
      return r;
    };
    Ct.prototype.toJ = function() {
      if (this.inf)
        return this.curve.jpoint(null, null, null);
      var e = this.curve.jpoint(this.x, this.y, this.curve.one);
      return e;
    };
    function Wt(t, e, r, o) {
      Bf.BasePoint.call(this, t, "jacobian"), e === null && r === null && o === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new lt(0)) : (this.x = new lt(e, 16), this.y = new lt(r, 16), this.z = new lt(o, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
    }
    Dl(Wt, Bf.BasePoint);
    xr.prototype.jpoint = function(e, r, o) {
      return new Wt(this, e, r, o);
    };
    Wt.prototype.toP = function() {
      if (this.isInfinity())
        return this.curve.point(null, null);
      var e = this.z.redInvm(), r = e.redSqr(), o = this.x.redMul(r), f = this.y.redMul(r).redMul(e);
      return this.curve.point(o, f);
    };
    Wt.prototype.neg = function() {
      return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    };
    Wt.prototype.add = function(e) {
      if (this.isInfinity())
        return e;
      if (e.isInfinity())
        return this;
      var r = e.z.redSqr(), o = this.z.redSqr(), f = this.x.redMul(r), p = e.x.redMul(o), m = this.y.redMul(r.redMul(e.z)), y = e.y.redMul(o.redMul(this.z)), M = f.redSub(p), x = m.redSub(y);
      if (M.cmpn(0) === 0)
        return x.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
      var S = M.redSqr(), E = S.redMul(M), B = f.redMul(S), q = x.redSqr().redIAdd(E).redISub(B).redISub(B), L = x.redMul(B.redISub(q)).redISub(m.redMul(E)), ge = this.z.redMul(e.z).redMul(M);
      return this.curve.jpoint(q, L, ge);
    };
    Wt.prototype.mixedAdd = function(e) {
      if (this.isInfinity())
        return e.toJ();
      if (e.isInfinity())
        return this;
      var r = this.z.redSqr(), o = this.x, f = e.x.redMul(r), p = this.y, m = e.y.redMul(r).redMul(this.z), y = o.redSub(f), M = p.redSub(m);
      if (y.cmpn(0) === 0)
        return M.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
      var x = y.redSqr(), S = x.redMul(y), E = o.redMul(x), B = M.redSqr().redIAdd(S).redISub(E).redISub(E), q = M.redMul(E.redISub(B)).redISub(p.redMul(S)), L = this.z.redMul(y);
      return this.curve.jpoint(B, q, L);
    };
    Wt.prototype.dblp = function(e) {
      if (e === 0)
        return this;
      if (this.isInfinity())
        return this;
      if (!e)
        return this.dbl();
      var r;
      if (this.curve.zeroA || this.curve.threeA) {
        var o = this;
        for (r = 0;r < e; r++)
          o = o.dbl();
        return o;
      }
      var f = this.curve.a, p = this.curve.tinv, m = this.x, y = this.y, M = this.z, x = M.redSqr().redSqr(), S = y.redAdd(y);
      for (r = 0;r < e; r++) {
        var E = m.redSqr(), B = S.redSqr(), q = B.redSqr(), L = E.redAdd(E).redIAdd(E).redIAdd(f.redMul(x)), ge = m.redMul(B), _e = L.redSqr().redISub(ge.redAdd(ge)), N = ge.redISub(_e), we = L.redMul(N);
        we = we.redIAdd(we).redISub(q);
        var ye = S.redMul(M);
        r + 1 < e && (x = x.redMul(q)), m = _e, M = ye, S = we;
      }
      return this.curve.jpoint(m, S.redMul(p), M);
    };
    Wt.prototype.dbl = function() {
      return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    };
    Wt.prototype._zeroDbl = function() {
      var e, r, o;
      if (this.zOne) {
        var f = this.x.redSqr(), p = this.y.redSqr(), m = p.redSqr(), y = this.x.redAdd(p).redSqr().redISub(f).redISub(m);
        y = y.redIAdd(y);
        var M = f.redAdd(f).redIAdd(f), x = M.redSqr().redISub(y).redISub(y), S = m.redIAdd(m);
        S = S.redIAdd(S), S = S.redIAdd(S), e = x, r = M.redMul(y.redISub(x)).redISub(S), o = this.y.redAdd(this.y);
      } else {
        var E = this.x.redSqr(), B = this.y.redSqr(), q = B.redSqr(), L = this.x.redAdd(B).redSqr().redISub(E).redISub(q);
        L = L.redIAdd(L);
        var ge = E.redAdd(E).redIAdd(E), _e = ge.redSqr(), N = q.redIAdd(q);
        N = N.redIAdd(N), N = N.redIAdd(N), e = _e.redISub(L).redISub(L), r = ge.redMul(L.redISub(e)).redISub(N), o = this.y.redMul(this.z), o = o.redIAdd(o);
      }
      return this.curve.jpoint(e, r, o);
    };
    Wt.prototype._threeDbl = function() {
      var e, r, o;
      if (this.zOne) {
        var f = this.x.redSqr(), p = this.y.redSqr(), m = p.redSqr(), y = this.x.redAdd(p).redSqr().redISub(f).redISub(m);
        y = y.redIAdd(y);
        var M = f.redAdd(f).redIAdd(f).redIAdd(this.curve.a), x = M.redSqr().redISub(y).redISub(y);
        e = x;
        var S = m.redIAdd(m);
        S = S.redIAdd(S), S = S.redIAdd(S), r = M.redMul(y.redISub(x)).redISub(S), o = this.y.redAdd(this.y);
      } else {
        var E = this.z.redSqr(), B = this.y.redSqr(), q = this.x.redMul(B), L = this.x.redSub(E).redMul(this.x.redAdd(E));
        L = L.redAdd(L).redIAdd(L);
        var ge = q.redIAdd(q);
        ge = ge.redIAdd(ge);
        var _e = ge.redAdd(ge);
        e = L.redSqr().redISub(_e), o = this.y.redAdd(this.z).redSqr().redISub(B).redISub(E);
        var N = B.redSqr();
        N = N.redIAdd(N), N = N.redIAdd(N), N = N.redIAdd(N), r = L.redMul(ge.redISub(e)).redISub(N);
      }
      return this.curve.jpoint(e, r, o);
    };
    Wt.prototype._dbl = function() {
      var e = this.curve.a, r = this.x, o = this.y, f = this.z, p = f.redSqr().redSqr(), m = r.redSqr(), y = o.redSqr(), M = m.redAdd(m).redIAdd(m).redIAdd(e.redMul(p)), x = r.redAdd(r);
      x = x.redIAdd(x);
      var S = x.redMul(y), E = M.redSqr().redISub(S.redAdd(S)), B = S.redISub(E), q = y.redSqr();
      q = q.redIAdd(q), q = q.redIAdd(q), q = q.redIAdd(q);
      var L = M.redMul(B).redISub(q), ge = o.redAdd(o).redMul(f);
      return this.curve.jpoint(E, L, ge);
    };
    Wt.prototype.trpl = function() {
      if (!this.curve.zeroA)
        return this.dbl().add(this);
      var e = this.x.redSqr(), r = this.y.redSqr(), o = this.z.redSqr(), f = r.redSqr(), p = e.redAdd(e).redIAdd(e), m = p.redSqr(), y = this.x.redAdd(r).redSqr().redISub(e).redISub(f);
      y = y.redIAdd(y), y = y.redAdd(y).redIAdd(y), y = y.redISub(m);
      var M = y.redSqr(), x = f.redIAdd(f);
      x = x.redIAdd(x), x = x.redIAdd(x), x = x.redIAdd(x);
      var S = p.redIAdd(y).redSqr().redISub(m).redISub(M).redISub(x), E = r.redMul(S);
      E = E.redIAdd(E), E = E.redIAdd(E);
      var B = this.x.redMul(M).redISub(E);
      B = B.redIAdd(B), B = B.redIAdd(B);
      var q = this.y.redMul(S.redMul(x.redISub(S)).redISub(y.redMul(M)));
      q = q.redIAdd(q), q = q.redIAdd(q), q = q.redIAdd(q);
      var L = this.z.redAdd(y).redSqr().redISub(o).redISub(M);
      return this.curve.jpoint(B, q, L);
    };
    Wt.prototype.mul = function(e, r) {
      return e = new lt(e, r), this.curve._wnafMul(this, e);
    };
    Wt.prototype.eq = function(e) {
      if (e.type === "affine")
        return this.eq(e.toJ());
      if (this === e)
        return true;
      var r = this.z.redSqr(), o = e.z.redSqr();
      if (this.x.redMul(o).redISub(e.x.redMul(r)).cmpn(0) !== 0)
        return false;
      var f = r.redMul(this.z), p = o.redMul(e.z);
      return this.y.redMul(p).redISub(e.y.redMul(f)).cmpn(0) === 0;
    };
    Wt.prototype.eqXToP = function(e) {
      var r = this.z.redSqr(), o = e.toRed(this.curve.red).redMul(r);
      if (this.x.cmp(o) === 0)
        return true;
      for (var f = e.clone(), p = this.curve.redN.redMul(r);; ) {
        if (f.iadd(this.curve.n), f.cmp(this.curve.p) >= 0)
          return false;
        if (o.redIAdd(p), this.x.cmp(o) === 0)
          return true;
      }
    };
    Wt.prototype.inspect = function() {
      return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
    };
    Wt.prototype.isInfinity = function() {
      return this.z.cmpn(0) === 0;
    };
  });
  y2 = T((Ek, g2) => {
    var qf = ri(), m2 = Ie(), Gs = Oa(), MA = or();
    function If(t) {
      Gs.call(this, "mont", t), this.a = new qf(t.a, 16).toRed(this.red), this.b = new qf(t.b, 16).toRed(this.red), this.i4 = new qf(4).toRed(this.red).redInvm(), this.two = new qf(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }
    m2(If, Gs);
    g2.exports = If;
    If.prototype.validate = function(e) {
      var r = e.normalize().x, o = r.redSqr(), f = o.redMul(r).redAdd(o.redMul(this.a)).redAdd(r), p = f.redSqrt();
      return p.redSqr().cmp(f) === 0;
    };
    function Ot(t, e, r) {
      Gs.BasePoint.call(this, t, "projective"), e === null && r === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new qf(e, 16), this.z = new qf(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
    }
    m2(Ot, Gs.BasePoint);
    If.prototype.decodePoint = function(e, r) {
      return this.point(MA.toArray(e, r), 1);
    };
    If.prototype.point = function(e, r) {
      return new Ot(this, e, r);
    };
    If.prototype.pointFromJSON = function(e) {
      return Ot.fromJSON(this, e);
    };
    Ot.prototype.precompute = function() {
    };
    Ot.prototype._encode = function() {
      return this.getX().toArray("be", this.curve.p.byteLength());
    };
    Ot.fromJSON = function(e, r) {
      return new Ot(e, r[0], r[1] || e.one);
    };
    Ot.prototype.inspect = function() {
      return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    };
    Ot.prototype.isInfinity = function() {
      return this.z.cmpn(0) === 0;
    };
    Ot.prototype.dbl = function() {
      var e = this.x.redAdd(this.z), r = e.redSqr(), o = this.x.redSub(this.z), f = o.redSqr(), p = r.redSub(f), m = r.redMul(f), y = p.redMul(f.redAdd(this.curve.a24.redMul(p)));
      return this.curve.point(m, y);
    };
    Ot.prototype.add = function() {
      throw new Error("Not supported on Montgomery curve");
    };
    Ot.prototype.diffAdd = function(e, r) {
      var o = this.x.redAdd(this.z), f = this.x.redSub(this.z), p = e.x.redAdd(e.z), m = e.x.redSub(e.z), y = m.redMul(o), M = p.redMul(f), x = r.z.redMul(y.redAdd(M).redSqr()), S = r.x.redMul(y.redISub(M).redSqr());
      return this.curve.point(x, S);
    };
    Ot.prototype.mul = function(e) {
      for (var r = e.clone(), o = this, f = this.curve.point(null, null), p = this, m = [];r.cmpn(0) !== 0; r.iushrn(1))
        m.push(r.andln(1));
      for (var y = m.length - 1;y >= 0; y--)
        m[y] === 0 ? (o = o.diffAdd(f, p), f = f.dbl()) : (f = o.diffAdd(f, p), o = o.dbl());
      return f;
    };
    Ot.prototype.mulAdd = function() {
      throw new Error("Not supported on Montgomery curve");
    };
    Ot.prototype.jumlAdd = function() {
      throw new Error("Not supported on Montgomery curve");
    };
    Ot.prototype.eq = function(e) {
      return this.getX().cmp(e.getX()) === 0;
    };
    Ot.prototype.normalize = function() {
      return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
    };
    Ot.prototype.getX = function() {
      return this.normalize(), this.x.fromRed();
    };
  });
  _2 = T((Ak, M2) => {
    var _A = or(), Ai = ri(), w2 = Ie(), Ys = Oa(), xA = _A.assert;
    function ii(t) {
      this.twisted = (t.a | 0) !== 1, this.mOneA = this.twisted && (t.a | 0) === -1, this.extended = this.mOneA, Ys.call(this, "edwards", t), this.a = new Ai(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new Ai(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new Ai(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), xA(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (t.c | 0) === 1;
    }
    w2(ii, Ys);
    M2.exports = ii;
    ii.prototype._mulA = function(e) {
      return this.mOneA ? e.redNeg() : this.a.redMul(e);
    };
    ii.prototype._mulC = function(e) {
      return this.oneC ? e : this.c.redMul(e);
    };
    ii.prototype.jpoint = function(e, r, o, f) {
      return this.point(e, r, o, f);
    };
    ii.prototype.pointFromX = function(e, r) {
      e = new Ai(e, 16), e.red || (e = e.toRed(this.red));
      var o = e.redSqr(), f = this.c2.redSub(this.a.redMul(o)), p = this.one.redSub(this.c2.redMul(this.d).redMul(o)), m = f.redMul(p.redInvm()), y = m.redSqrt();
      if (y.redSqr().redSub(m).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var M = y.fromRed().isOdd();
      return (r && !M || !r && M) && (y = y.redNeg()), this.point(e, y);
    };
    ii.prototype.pointFromY = function(e, r) {
      e = new Ai(e, 16), e.red || (e = e.toRed(this.red));
      var o = e.redSqr(), f = o.redSub(this.c2), p = o.redMul(this.d).redMul(this.c2).redSub(this.a), m = f.redMul(p.redInvm());
      if (m.cmp(this.zero) === 0) {
        if (r)
          throw new Error("invalid point");
        return this.point(this.zero, e);
      }
      var y = m.redSqrt();
      if (y.redSqr().redSub(m).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      return y.fromRed().isOdd() !== r && (y = y.redNeg()), this.point(y, e);
    };
    ii.prototype.validate = function(e) {
      if (e.isInfinity())
        return true;
      e.normalize();
      var r = e.x.redSqr(), o = e.y.redSqr(), f = r.redMul(this.a).redAdd(o), p = this.c2.redMul(this.one.redAdd(this.d.redMul(r).redMul(o)));
      return f.cmp(p) === 0;
    };
    function at(t, e, r, o, f) {
      Ys.BasePoint.call(this, t, "projective"), e === null && r === null && o === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = true) : (this.x = new Ai(e, 16), this.y = new Ai(r, 16), this.z = o ? new Ai(o, 16) : this.curve.one, this.t = f && new Ai(f, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
    }
    w2(at, Ys.BasePoint);
    ii.prototype.pointFromJSON = function(e) {
      return at.fromJSON(this, e);
    };
    ii.prototype.point = function(e, r, o, f) {
      return new at(this, e, r, o, f);
    };
    at.fromJSON = function(e, r) {
      return new at(e, r[0], r[1], r[2]);
    };
    at.prototype.inspect = function() {
      return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    };
    at.prototype.isInfinity = function() {
      return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
    };
    at.prototype._extDbl = function() {
      var e = this.x.redSqr(), r = this.y.redSqr(), o = this.z.redSqr();
      o = o.redIAdd(o);
      var f = this.curve._mulA(e), p = this.x.redAdd(this.y).redSqr().redISub(e).redISub(r), m = f.redAdd(r), y = m.redSub(o), M = f.redSub(r), x = p.redMul(y), S = m.redMul(M), E = p.redMul(M), B = y.redMul(m);
      return this.curve.point(x, S, B, E);
    };
    at.prototype._projDbl = function() {
      var e = this.x.redAdd(this.y).redSqr(), r = this.x.redSqr(), o = this.y.redSqr(), f, p, m, y, M, x;
      if (this.curve.twisted) {
        y = this.curve._mulA(r);
        var S = y.redAdd(o);
        this.zOne ? (f = e.redSub(r).redSub(o).redMul(S.redSub(this.curve.two)), p = S.redMul(y.redSub(o)), m = S.redSqr().redSub(S).redSub(S)) : (M = this.z.redSqr(), x = S.redSub(M).redISub(M), f = e.redSub(r).redISub(o).redMul(x), p = S.redMul(y.redSub(o)), m = S.redMul(x));
      } else
        y = r.redAdd(o), M = this.curve._mulC(this.z).redSqr(), x = y.redSub(M).redSub(M), f = this.curve._mulC(e.redISub(y)).redMul(x), p = this.curve._mulC(y).redMul(r.redISub(o)), m = y.redMul(x);
      return this.curve.point(f, p, m);
    };
    at.prototype.dbl = function() {
      return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    };
    at.prototype._extAdd = function(e) {
      var r = this.y.redSub(this.x).redMul(e.y.redSub(e.x)), o = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)), f = this.t.redMul(this.curve.dd).redMul(e.t), p = this.z.redMul(e.z.redAdd(e.z)), m = o.redSub(r), y = p.redSub(f), M = p.redAdd(f), x = o.redAdd(r), S = m.redMul(y), E = M.redMul(x), B = m.redMul(x), q = y.redMul(M);
      return this.curve.point(S, E, q, B);
    };
    at.prototype._projAdd = function(e) {
      var r = this.z.redMul(e.z), o = r.redSqr(), f = this.x.redMul(e.x), p = this.y.redMul(e.y), m = this.curve.d.redMul(f).redMul(p), y = o.redSub(m), M = o.redAdd(m), x = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(f).redISub(p), S = r.redMul(y).redMul(x), E, B;
      return this.curve.twisted ? (E = r.redMul(M).redMul(p.redSub(this.curve._mulA(f))), B = y.redMul(M)) : (E = r.redMul(M).redMul(p.redSub(f)), B = this.curve._mulC(y).redMul(M)), this.curve.point(S, E, B);
    };
    at.prototype.add = function(e) {
      return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
    };
    at.prototype.mul = function(e) {
      return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
    };
    at.prototype.mulAdd = function(e, r, o) {
      return this.curve._wnafMulAdd(1, [this, r], [e, o], 2, false);
    };
    at.prototype.jmulAdd = function(e, r, o) {
      return this.curve._wnafMulAdd(1, [this, r], [e, o], 2, true);
    };
    at.prototype.normalize = function() {
      if (this.zOne)
        return this;
      var e = this.z.redInvm();
      return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = true, this;
    };
    at.prototype.neg = function() {
      return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    };
    at.prototype.getX = function() {
      return this.normalize(), this.x.fromRed();
    };
    at.prototype.getY = function() {
      return this.normalize(), this.y.fromRed();
    };
    at.prototype.eq = function(e) {
      return this === e || this.getX().cmp(e.getX()) === 0 && this.getY().cmp(e.getY()) === 0;
    };
    at.prototype.eqXToP = function(e) {
      var r = e.toRed(this.curve.red).redMul(this.z);
      if (this.x.cmp(r) === 0)
        return true;
      for (var o = e.clone(), f = this.curve.redN.redMul(this.z);; ) {
        if (o.iadd(this.curve.n), o.cmp(this.curve.p) >= 0)
          return false;
        if (r.redIAdd(f), this.x.cmp(r) === 0)
          return true;
      }
    };
    at.prototype.toP = at.prototype.normalize;
    at.prototype.mixedAdd = at.prototype.add;
  });
  Pl = T((x2) => {
    var Xs = x2;
    Xs.base = Oa();
    Xs.short = b2();
    Xs.mont = y2();
    Xs.edwards = _2();
  });
  Cr = T((it) => {
    var SA = ar(), EA = Ie();
    it.inherits = EA;
    function AA(t, e) {
      return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length ? false : (t.charCodeAt(e + 1) & 64512) === 56320;
    }
    function RA(t, e) {
      if (Array.isArray(t))
        return t.slice();
      if (!t)
        return [];
      var r = [];
      if (typeof t == "string")
        if (e) {
          if (e === "hex")
            for (t = t.replace(/[^a-z0-9]+/ig, ""), t.length % 2 !== 0 && (t = "0" + t), f = 0;f < t.length; f += 2)
              r.push(parseInt(t[f] + t[f + 1], 16));
        } else
          for (var o = 0, f = 0;f < t.length; f++) {
            var p = t.charCodeAt(f);
            p < 128 ? r[o++] = p : p < 2048 ? (r[o++] = p >> 6 | 192, r[o++] = p & 63 | 128) : AA(t, f) ? (p = 65536 + ((p & 1023) << 10) + (t.charCodeAt(++f) & 1023), r[o++] = p >> 18 | 240, r[o++] = p >> 12 & 63 | 128, r[o++] = p >> 6 & 63 | 128, r[o++] = p & 63 | 128) : (r[o++] = p >> 12 | 224, r[o++] = p >> 6 & 63 | 128, r[o++] = p & 63 | 128);
          }
      else
        for (f = 0;f < t.length; f++)
          r[f] = t[f] | 0;
      return r;
    }
    it.toArray = RA;
    function BA(t) {
      for (var e = "", r = 0;r < t.length; r++)
        e += E2(t[r].toString(16));
      return e;
    }
    it.toHex = BA;
    function S2(t) {
      var e = t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24;
      return e >>> 0;
    }
    it.htonl = S2;
    function qA(t, e) {
      for (var r = "", o = 0;o < t.length; o++) {
        var f = t[o];
        e === "little" && (f = S2(f)), r += A2(f.toString(16));
      }
      return r;
    }
    it.toHex32 = qA;
    function E2(t) {
      return t.length === 1 ? "0" + t : t;
    }
    it.zero2 = E2;
    function A2(t) {
      return t.length === 7 ? "0" + t : t.length === 6 ? "00" + t : t.length === 5 ? "000" + t : t.length === 4 ? "0000" + t : t.length === 3 ? "00000" + t : t.length === 2 ? "000000" + t : t.length === 1 ? "0000000" + t : t;
    }
    it.zero8 = A2;
    function IA(t, e, r, o) {
      var f = r - e;
      SA(f % 4 === 0);
      for (var p = new Array(f / 4), m = 0, y = e;m < p.length; m++, y += 4) {
        var M;
        o === "big" ? M = t[y] << 24 | t[y + 1] << 16 | t[y + 2] << 8 | t[y + 3] : M = t[y + 3] << 24 | t[y + 2] << 16 | t[y + 1] << 8 | t[y], p[m] = M >>> 0;
      }
      return p;
    }
    it.join32 = IA;
    function TA(t, e) {
      for (var r = new Array(t.length * 4), o = 0, f = 0;o < t.length; o++, f += 4) {
        var p = t[o];
        e === "big" ? (r[f] = p >>> 24, r[f + 1] = p >>> 16 & 255, r[f + 2] = p >>> 8 & 255, r[f + 3] = p & 255) : (r[f + 3] = p >>> 24, r[f + 2] = p >>> 16 & 255, r[f + 1] = p >>> 8 & 255, r[f] = p & 255);
      }
      return r;
    }
    it.split32 = TA;
    function kA(t, e) {
      return t >>> e | t << 32 - e;
    }
    it.rotr32 = kA;
    function LA(t, e) {
      return t << e | t >>> 32 - e;
    }
    it.rotl32 = LA;
    function NA(t, e) {
      return t + e >>> 0;
    }
    it.sum32 = NA;
    function DA(t, e, r) {
      return t + e + r >>> 0;
    }
    it.sum32_3 = DA;
    function PA(t, e, r, o) {
      return t + e + r + o >>> 0;
    }
    it.sum32_4 = PA;
    function CA(t, e, r, o, f) {
      return t + e + r + o + f >>> 0;
    }
    it.sum32_5 = CA;
    function OA(t, e, r, o) {
      var f = t[e], p = t[e + 1], m = o + p >>> 0, y = (m < o ? 1 : 0) + r + f;
      t[e] = y >>> 0, t[e + 1] = m;
    }
    it.sum64 = OA;
    function FA(t, e, r, o) {
      var f = e + o >>> 0, p = (f < e ? 1 : 0) + t + r;
      return p >>> 0;
    }
    it.sum64_hi = FA;
    function UA(t, e, r, o) {
      var f = e + o;
      return f >>> 0;
    }
    it.sum64_lo = UA;
    function zA(t, e, r, o, f, p, m, y) {
      var M = 0, x = e;
      x = x + o >>> 0, M += x < e ? 1 : 0, x = x + p >>> 0, M += x < p ? 1 : 0, x = x + y >>> 0, M += x < y ? 1 : 0;
      var S = t + r + f + m + M;
      return S >>> 0;
    }
    it.sum64_4_hi = zA;
    function HA(t, e, r, o, f, p, m, y) {
      var M = e + o + p + y;
      return M >>> 0;
    }
    it.sum64_4_lo = HA;
    function WA(t, e, r, o, f, p, m, y, M, x) {
      var S = 0, E = e;
      E = E + o >>> 0, S += E < e ? 1 : 0, E = E + p >>> 0, S += E < p ? 1 : 0, E = E + y >>> 0, S += E < y ? 1 : 0, E = E + x >>> 0, S += E < x ? 1 : 0;
      var B = t + r + f + m + M + S;
      return B >>> 0;
    }
    it.sum64_5_hi = WA;
    function KA(t, e, r, o, f, p, m, y, M, x) {
      var S = e + o + p + y + x;
      return S >>> 0;
    }
    it.sum64_5_lo = KA;
    function jA(t, e, r) {
      var o = e << 32 - r | t >>> r;
      return o >>> 0;
    }
    it.rotr64_hi = jA;
    function ZA(t, e, r) {
      var o = t << 32 - r | e >>> r;
      return o >>> 0;
    }
    it.rotr64_lo = ZA;
    function VA(t, e, r) {
      return t >>> r;
    }
    it.shr64_hi = VA;
    function $A(t, e, r) {
      var o = t << 32 - r | e >>> r;
      return o >>> 0;
    }
    it.shr64_lo = $A;
  });
  Tf = T((B2) => {
    var R2 = Cr(), GA = ar();
    function Js() {
      this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
    }
    B2.BlockHash = Js;
    Js.prototype.update = function(e, r) {
      if (e = R2.toArray(e, r), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
        e = this.pending;
        var o = e.length % this._delta8;
        this.pending = e.slice(e.length - o, e.length), this.pending.length === 0 && (this.pending = null), e = R2.join32(e, 0, e.length - o, this.endian);
        for (var f = 0;f < e.length; f += this._delta32)
          this._update(e, f, f + this._delta32);
      }
      return this;
    };
    Js.prototype.digest = function(e) {
      return this.update(this._pad()), GA(this.pending === null), this._digest(e);
    };
    Js.prototype._pad = function() {
      var e = this.pendingTotal, r = this._delta8, o = r - (e + this.padLength) % r, f = new Array(o + this.padLength);
      f[0] = 128;
      for (var p = 1;p < o; p++)
        f[p] = 0;
      if (e <<= 3, this.endian === "big") {
        for (var m = 8;m < this.padLength; m++)
          f[p++] = 0;
        f[p++] = 0, f[p++] = 0, f[p++] = 0, f[p++] = 0, f[p++] = e >>> 24 & 255, f[p++] = e >>> 16 & 255, f[p++] = e >>> 8 & 255, f[p++] = e & 255;
      } else
        for (f[p++] = e & 255, f[p++] = e >>> 8 & 255, f[p++] = e >>> 16 & 255, f[p++] = e >>> 24 & 255, f[p++] = 0, f[p++] = 0, f[p++] = 0, f[p++] = 0, m = 8;m < this.padLength; m++)
          f[p++] = 0;
      return f;
    };
  });
  Cl = T((Ri) => {
    var YA = Cr(), ni = YA.rotr32;
    function XA(t, e, r, o) {
      if (t === 0)
        return q2(e, r, o);
      if (t === 1 || t === 3)
        return T2(e, r, o);
      if (t === 2)
        return I2(e, r, o);
    }
    Ri.ft_1 = XA;
    function q2(t, e, r) {
      return t & e ^ ~t & r;
    }
    Ri.ch32 = q2;
    function I2(t, e, r) {
      return t & e ^ t & r ^ e & r;
    }
    Ri.maj32 = I2;
    function T2(t, e, r) {
      return t ^ e ^ r;
    }
    Ri.p32 = T2;
    function JA(t) {
      return ni(t, 2) ^ ni(t, 13) ^ ni(t, 22);
    }
    Ri.s0_256 = JA;
    function QA(t) {
      return ni(t, 6) ^ ni(t, 11) ^ ni(t, 25);
    }
    Ri.s1_256 = QA;
    function eR(t) {
      return ni(t, 7) ^ ni(t, 18) ^ t >>> 3;
    }
    Ri.g0_256 = eR;
    function tR(t) {
      return ni(t, 17) ^ ni(t, 19) ^ t >>> 10;
    }
    Ri.g1_256 = tR;
  });
  N2 = T((Tk, L2) => {
    var kf = Cr(), rR = Tf(), iR = Cl(), Ol = kf.rotl32, Fa = kf.sum32, nR = kf.sum32_5, fR = iR.ft_1, k2 = rR.BlockHash, aR = [1518500249, 1859775393, 2400959708, 3395469782];
    function fi() {
      if (!(this instanceof fi))
        return new fi;
      k2.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
    }
    kf.inherits(fi, k2);
    L2.exports = fi;
    fi.blockSize = 512;
    fi.outSize = 160;
    fi.hmacStrength = 80;
    fi.padLength = 64;
    fi.prototype._update = function(e, r) {
      for (var o = this.W, f = 0;f < 16; f++)
        o[f] = e[r + f];
      for (;f < o.length; f++)
        o[f] = Ol(o[f - 3] ^ o[f - 8] ^ o[f - 14] ^ o[f - 16], 1);
      var p = this.h[0], m = this.h[1], y = this.h[2], M = this.h[3], x = this.h[4];
      for (f = 0;f < o.length; f++) {
        var S = ~~(f / 20), E = nR(Ol(p, 5), fR(S, m, y, M), x, o[f], aR[S]);
        x = M, M = y, y = Ol(m, 30), m = p, p = E;
      }
      this.h[0] = Fa(this.h[0], p), this.h[1] = Fa(this.h[1], m), this.h[2] = Fa(this.h[2], y), this.h[3] = Fa(this.h[3], M), this.h[4] = Fa(this.h[4], x);
    };
    fi.prototype._digest = function(e) {
      return e === "hex" ? kf.toHex32(this.h, "big") : kf.split32(this.h, "big");
    };
  });
  Fl = T((kk, P2) => {
    var Lf = Cr(), oR = Tf(), Nf = Cl(), sR = ar(), Or = Lf.sum32, hR = Lf.sum32_4, uR = Lf.sum32_5, lR = Nf.ch32, dR = Nf.maj32, cR = Nf.s0_256, pR = Nf.s1_256, vR = Nf.g0_256, bR = Nf.g1_256, D2 = oR.BlockHash, mR = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    function ai() {
      if (!(this instanceof ai))
        return new ai;
      D2.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = mR, this.W = new Array(64);
    }
    Lf.inherits(ai, D2);
    P2.exports = ai;
    ai.blockSize = 512;
    ai.outSize = 256;
    ai.hmacStrength = 192;
    ai.padLength = 64;
    ai.prototype._update = function(e, r) {
      for (var o = this.W, f = 0;f < 16; f++)
        o[f] = e[r + f];
      for (;f < o.length; f++)
        o[f] = hR(bR(o[f - 2]), o[f - 7], vR(o[f - 15]), o[f - 16]);
      var p = this.h[0], m = this.h[1], y = this.h[2], M = this.h[3], x = this.h[4], S = this.h[5], E = this.h[6], B = this.h[7];
      for (sR(this.k.length === o.length), f = 0;f < o.length; f++) {
        var q = uR(B, pR(x), lR(x, S, E), this.k[f], o[f]), L = Or(cR(p), dR(p, m, y));
        B = E, E = S, S = x, x = Or(M, q), M = y, y = m, m = p, p = Or(q, L);
      }
      this.h[0] = Or(this.h[0], p), this.h[1] = Or(this.h[1], m), this.h[2] = Or(this.h[2], y), this.h[3] = Or(this.h[3], M), this.h[4] = Or(this.h[4], x), this.h[5] = Or(this.h[5], S), this.h[6] = Or(this.h[6], E), this.h[7] = Or(this.h[7], B);
    };
    ai.prototype._digest = function(e) {
      return e === "hex" ? Lf.toHex32(this.h, "big") : Lf.split32(this.h, "big");
    };
  });
  F2 = T((Lk, O2) => {
    var Ul = Cr(), C2 = Fl();
    function Bi() {
      if (!(this instanceof Bi))
        return new Bi;
      C2.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
    }
    Ul.inherits(Bi, C2);
    O2.exports = Bi;
    Bi.blockSize = 512;
    Bi.outSize = 224;
    Bi.hmacStrength = 192;
    Bi.padLength = 64;
    Bi.prototype._digest = function(e) {
      return e === "hex" ? Ul.toHex32(this.h.slice(0, 7), "big") : Ul.split32(this.h.slice(0, 7), "big");
    };
  });
  Wl = T((Nk, W2) => {
    var ir = Cr(), gR = Tf(), yR = ar(), oi = ir.rotr64_hi, si = ir.rotr64_lo, U2 = ir.shr64_hi, z2 = ir.shr64_lo, Ji = ir.sum64, zl = ir.sum64_hi, Hl = ir.sum64_lo, wR = ir.sum64_4_hi, MR = ir.sum64_4_lo, _R = ir.sum64_5_hi, xR = ir.sum64_5_lo, H2 = gR.BlockHash, SR = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    function Fr() {
      if (!(this instanceof Fr))
        return new Fr;
      H2.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = SR, this.W = new Array(160);
    }
    ir.inherits(Fr, H2);
    W2.exports = Fr;
    Fr.blockSize = 1024;
    Fr.outSize = 512;
    Fr.hmacStrength = 192;
    Fr.padLength = 128;
    Fr.prototype._prepareBlock = function(e, r) {
      for (var o = this.W, f = 0;f < 32; f++)
        o[f] = e[r + f];
      for (;f < o.length; f += 2) {
        var p = DR(o[f - 4], o[f - 3]), m = PR(o[f - 4], o[f - 3]), y = o[f - 14], M = o[f - 13], x = LR(o[f - 30], o[f - 29]), S = NR(o[f - 30], o[f - 29]), E = o[f - 32], B = o[f - 31];
        o[f] = wR(p, m, y, M, x, S, E, B), o[f + 1] = MR(p, m, y, M, x, S, E, B);
      }
    };
    Fr.prototype._update = function(e, r) {
      this._prepareBlock(e, r);
      var o = this.W, f = this.h[0], p = this.h[1], m = this.h[2], y = this.h[3], M = this.h[4], x = this.h[5], S = this.h[6], E = this.h[7], B = this.h[8], q = this.h[9], L = this.h[10], ge = this.h[11], _e = this.h[12], N = this.h[13], we = this.h[14], ye = this.h[15];
      yR(this.k.length === o.length);
      for (var xe = 0;xe < o.length; xe += 2) {
        var Re = we, Ee = ye, Ae = TR(B, q), P = kR(B, q), Se = ER(B, q, L, ge, _e, N), v = AR(B, q, L, ge, _e, N), i = this.k[xe], a = this.k[xe + 1], h = o[xe], s = o[xe + 1], u = _R(Re, Ee, Ae, P, Se, v, i, a, h, s), c = xR(Re, Ee, Ae, P, Se, v, i, a, h, s);
        Re = qR(f, p), Ee = IR(f, p), Ae = RR(f, p, m, y, M, x), P = BR(f, p, m, y, M, x);
        var b = zl(Re, Ee, Ae, P), l = Hl(Re, Ee, Ae, P);
        we = _e, ye = N, _e = L, N = ge, L = B, ge = q, B = zl(S, E, u, c), q = Hl(E, E, u, c), S = M, E = x, M = m, x = y, m = f, y = p, f = zl(u, c, b, l), p = Hl(u, c, b, l);
      }
      Ji(this.h, 0, f, p), Ji(this.h, 2, m, y), Ji(this.h, 4, M, x), Ji(this.h, 6, S, E), Ji(this.h, 8, B, q), Ji(this.h, 10, L, ge), Ji(this.h, 12, _e, N), Ji(this.h, 14, we, ye);
    };
    Fr.prototype._digest = function(e) {
      return e === "hex" ? ir.toHex32(this.h, "big") : ir.split32(this.h, "big");
    };
    function ER(t, e, r, o, f) {
      var p = t & r ^ ~t & f;
      return p < 0 && (p += 4294967296), p;
    }
    function AR(t, e, r, o, f, p) {
      var m = e & o ^ ~e & p;
      return m < 0 && (m += 4294967296), m;
    }
    function RR(t, e, r, o, f) {
      var p = t & r ^ t & f ^ r & f;
      return p < 0 && (p += 4294967296), p;
    }
    function BR(t, e, r, o, f, p) {
      var m = e & o ^ e & p ^ o & p;
      return m < 0 && (m += 4294967296), m;
    }
    function qR(t, e) {
      var r = oi(t, e, 28), o = oi(e, t, 2), f = oi(e, t, 7), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
    function IR(t, e) {
      var r = si(t, e, 28), o = si(e, t, 2), f = si(e, t, 7), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
    function TR(t, e) {
      var r = oi(t, e, 14), o = oi(t, e, 18), f = oi(e, t, 9), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
    function kR(t, e) {
      var r = si(t, e, 14), o = si(t, e, 18), f = si(e, t, 9), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
    function LR(t, e) {
      var r = oi(t, e, 1), o = oi(t, e, 8), f = U2(t, e, 7), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
    function NR(t, e) {
      var r = si(t, e, 1), o = si(t, e, 8), f = z2(t, e, 7), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
    function DR(t, e) {
      var r = oi(t, e, 19), o = oi(e, t, 29), f = U2(t, e, 6), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
    function PR(t, e) {
      var r = si(t, e, 19), o = si(e, t, 29), f = z2(t, e, 6), p = r ^ o ^ f;
      return p < 0 && (p += 4294967296), p;
    }
  });
  Z2 = T((Dk, j2) => {
    var Kl = Cr(), K2 = Wl();
    function qi() {
      if (!(this instanceof qi))
        return new qi;
      K2.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
    }
    Kl.inherits(qi, K2);
    j2.exports = qi;
    qi.blockSize = 1024;
    qi.outSize = 384;
    qi.hmacStrength = 192;
    qi.padLength = 128;
    qi.prototype._digest = function(e) {
      return e === "hex" ? Kl.toHex32(this.h.slice(0, 12), "big") : Kl.split32(this.h.slice(0, 12), "big");
    };
  });
  V2 = T((Df) => {
    Df.sha1 = N2();
    Df.sha224 = F2();
    Df.sha256 = Fl();
    Df.sha384 = Z2();
    Df.sha512 = Wl();
  });
  Q2 = T((J2) => {
    var On = Cr(), CR = Tf(), Qs = On.rotl32, $2 = On.sum32, Ua = On.sum32_3, G2 = On.sum32_4, X2 = CR.BlockHash;
    function hi() {
      if (!(this instanceof hi))
        return new hi;
      X2.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
    }
    On.inherits(hi, X2);
    J2.ripemd160 = hi;
    hi.blockSize = 512;
    hi.outSize = 160;
    hi.hmacStrength = 192;
    hi.padLength = 64;
    hi.prototype._update = function(e, r) {
      for (var o = this.h[0], f = this.h[1], p = this.h[2], m = this.h[3], y = this.h[4], M = o, x = f, S = p, E = m, B = y, q = 0;q < 80; q++) {
        var L = $2(Qs(G2(o, Y2(q, f, p, m), e[UR[q] + r], OR(q)), HR[q]), y);
        o = y, y = m, m = Qs(p, 10), p = f, f = L, L = $2(Qs(G2(M, Y2(79 - q, x, S, E), e[zR[q] + r], FR(q)), WR[q]), B), M = B, B = E, E = Qs(S, 10), S = x, x = L;
      }
      L = Ua(this.h[1], p, E), this.h[1] = Ua(this.h[2], m, B), this.h[2] = Ua(this.h[3], y, M), this.h[3] = Ua(this.h[4], o, x), this.h[4] = Ua(this.h[0], f, S), this.h[0] = L;
    };
    hi.prototype._digest = function(e) {
      return e === "hex" ? On.toHex32(this.h, "little") : On.split32(this.h, "little");
    };
    function Y2(t, e, r, o) {
      return t <= 15 ? e ^ r ^ o : t <= 31 ? e & r | ~e & o : t <= 47 ? (e | ~r) ^ o : t <= 63 ? e & o | r & ~o : e ^ (r | ~o);
    }
    function OR(t) {
      return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
    }
    function FR(t) {
      return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
    }
    var UR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], zR = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], HR = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], WR = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
  });
  ty = T((Ok, ey) => {
    var KR = Cr(), jR = ar();
    function Pf(t, e, r) {
      if (!(this instanceof Pf))
        return new Pf(t, e, r);
      this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(KR.toArray(e, r));
    }
    ey.exports = Pf;
    Pf.prototype._init = function(e) {
      e.length > this.blockSize && (e = new this.Hash().update(e).digest()), jR(e.length <= this.blockSize);
      for (var r = e.length;r < this.blockSize; r++)
        e.push(0);
      for (r = 0;r < e.length; r++)
        e[r] ^= 54;
      for (this.inner = new this.Hash().update(e), r = 0;r < e.length; r++)
        e[r] ^= 106;
      this.outer = new this.Hash().update(e);
    };
    Pf.prototype.update = function(e, r) {
      return this.inner.update(e, r), this;
    };
    Pf.prototype.digest = function(e) {
      return this.outer.update(this.inner.digest()), this.outer.digest(e);
    };
  });
  e0 = T((ry) => {
    var Kt = ry;
    Kt.utils = Cr();
    Kt.common = Tf();
    Kt.sha = V2();
    Kt.ripemd = Q2();
    Kt.hmac = ty();
    Kt.sha1 = Kt.sha.sha1;
    Kt.sha256 = Kt.sha.sha256;
    Kt.sha224 = Kt.sha.sha224;
    Kt.sha384 = Kt.sha.sha384;
    Kt.sha512 = Kt.sha.sha512;
    Kt.ripemd160 = Kt.ripemd.ripemd160;
  });
  ny = T((Uk, iy) => {
    iy.exports = { doubles: { step: 4, points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]] }, naf: { wnd: 7, points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]] } };
  });
  t0 = T((oy) => {
    var Zl = oy, Qi = e0(), jl = Pl(), ZR = or(), fy = ZR.assert;
    function ay(t) {
      t.type === "short" ? this.curve = new jl.short(t) : t.type === "edwards" ? this.curve = new jl.edwards(t) : this.curve = new jl.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, fy(this.g.validate(), "Invalid curve"), fy(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    Zl.PresetCurve = ay;
    function en(t, e) {
      Object.defineProperty(Zl, t, { configurable: true, enumerable: true, get: function() {
        var r = new ay(e);
        return Object.defineProperty(Zl, t, { configurable: true, enumerable: true, value: r }), r;
      } });
    }
    en("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: Qi.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] });
    en("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: Qi.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] });
    en("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: Qi.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] });
    en("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: Qi.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] });
    en("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: Qi.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] });
    en("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: Qi.sha256, gRed: false, g: ["9"] });
    en("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: Qi.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
    var Vl;
    try {
      Vl = ny();
    } catch {
      Vl = undefined;
    }
    en("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: Qi.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", Vl] });
  });
  uy = T((Hk, hy) => {
    var VR = e0(), Fn = Nl(), sy = ar();
    function tn(t) {
      if (!(this instanceof tn))
        return new tn(t);
      this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
      var e = Fn.toArray(t.entropy, t.entropyEnc || "hex"), r = Fn.toArray(t.nonce, t.nonceEnc || "hex"), o = Fn.toArray(t.pers, t.persEnc || "hex");
      sy(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, o);
    }
    hy.exports = tn;
    tn.prototype._init = function(e, r, o) {
      var f = e.concat(r).concat(o);
      this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
      for (var p = 0;p < this.V.length; p++)
        this.K[p] = 0, this.V[p] = 1;
      this._update(f), this._reseed = 1, this.reseedInterval = 281474976710656;
    };
    tn.prototype._hmac = function() {
      return new VR.hmac(this.hash, this.K);
    };
    tn.prototype._update = function(e) {
      var r = this._hmac().update(this.V).update([0]);
      e && (r = r.update(e)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
    };
    tn.prototype.reseed = function(e, r, o, f) {
      typeof r != "string" && (f = o, o = r, r = null), e = Fn.toArray(e, r), o = Fn.toArray(o, f), sy(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(o || [])), this._reseed = 1;
    };
    tn.prototype.generate = function(e, r, o, f) {
      if (this._reseed > this.reseedInterval)
        throw new Error("Reseed is required");
      typeof r != "string" && (f = o, o = r, r = null), o && (o = Fn.toArray(o, f || "hex"), this._update(o));
      for (var p = [];p.length < e; )
        this.V = this._hmac().update(this.V).digest(), p = p.concat(this.V);
      var m = p.slice(0, e);
      return this._update(o), this._reseed++, Fn.encode(m, r);
    };
  });
  dy = T((Wk, ly) => {
    var $R = ri(), GR = or(), $l = GR.assert;
    function Gt(t, e) {
      this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
    }
    ly.exports = Gt;
    Gt.fromPublic = function(e, r, o) {
      return r instanceof Gt ? r : new Gt(e, { pub: r, pubEnc: o });
    };
    Gt.fromPrivate = function(e, r, o) {
      return r instanceof Gt ? r : new Gt(e, { priv: r, privEnc: o });
    };
    Gt.prototype.validate = function() {
      var e = this.getPublic();
      return e.isInfinity() ? { result: false, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
    };
    Gt.prototype.getPublic = function(e, r) {
      return typeof e == "string" && (r = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, e) : this.pub;
    };
    Gt.prototype.getPrivate = function(e) {
      return e === "hex" ? this.priv.toString(16, 2) : this.priv;
    };
    Gt.prototype._importPrivate = function(e, r) {
      this.priv = new $R(e, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
    };
    Gt.prototype._importPublic = function(e, r) {
      if (e.x || e.y) {
        this.ec.curve.type === "mont" ? $l(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && $l(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
        return;
      }
      this.pub = this.ec.curve.decodePoint(e, r);
    };
    Gt.prototype.derive = function(e) {
      return e.validate() || $l(e.validate(), "public point not validated"), e.mul(this.priv).getX();
    };
    Gt.prototype.sign = function(e, r, o) {
      return this.ec.sign(e, this, r, o);
    };
    Gt.prototype.verify = function(e, r) {
      return this.ec.verify(e, r, this);
    };
    Gt.prototype.inspect = function() {
      return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
    };
  });
  vy = T((Kk, py) => {
    var r0 = ri(), Xl = or(), YR = Xl.assert;
    function i0(t, e) {
      if (t instanceof i0)
        return t;
      this._importDER(t, e) || (YR(t.r && t.s, "Signature without r or s"), this.r = new r0(t.r, 16), this.s = new r0(t.s, 16), t.recoveryParam === undefined ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
    }
    py.exports = i0;
    function XR() {
      this.place = 0;
    }
    function Gl(t, e) {
      var r = t[e.place++];
      if (!(r & 128))
        return r;
      var o = r & 15;
      if (o === 0 || o > 4)
        return false;
      for (var f = 0, p = 0, m = e.place;p < o; p++, m++)
        f <<= 8, f |= t[m], f >>>= 0;
      return f <= 127 ? false : (e.place = m, f);
    }
    function cy(t) {
      for (var e = 0, r = t.length - 1;!t[e] && !(t[e + 1] & 128) && e < r; )
        e++;
      return e === 0 ? t : t.slice(e);
    }
    i0.prototype._importDER = function(e, r) {
      e = Xl.toArray(e, r);
      var o = new XR;
      if (e[o.place++] !== 48)
        return false;
      var f = Gl(e, o);
      if (f === false || f + o.place !== e.length || e[o.place++] !== 2)
        return false;
      var p = Gl(e, o);
      if (p === false)
        return false;
      var m = e.slice(o.place, p + o.place);
      if (o.place += p, e[o.place++] !== 2)
        return false;
      var y = Gl(e, o);
      if (y === false || e.length !== y + o.place)
        return false;
      var M = e.slice(o.place, y + o.place);
      if (m[0] === 0)
        if (m[1] & 128)
          m = m.slice(1);
        else
          return false;
      if (M[0] === 0)
        if (M[1] & 128)
          M = M.slice(1);
        else
          return false;
      return this.r = new r0(m), this.s = new r0(M), this.recoveryParam = null, true;
    };
    function Yl(t, e) {
      if (e < 128) {
        t.push(e);
        return;
      }
      var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
      for (t.push(r | 128);--r; )
        t.push(e >>> (r << 3) & 255);
      t.push(e);
    }
    i0.prototype.toDER = function(e) {
      var r = this.r.toArray(), o = this.s.toArray();
      for (r[0] & 128 && (r = [0].concat(r)), o[0] & 128 && (o = [0].concat(o)), r = cy(r), o = cy(o);!o[0] && !(o[1] & 128); )
        o = o.slice(1);
      var f = [2];
      Yl(f, r.length), f = f.concat(r), f.push(2), Yl(f, o.length);
      var p = f.concat(o), m = [48];
      return Yl(m, p.length), m = m.concat(p), Xl.encode(m, e);
    };
  });
  yy = T((jk, gy) => {
    var Un = ri(), by = uy(), JR = or(), Jl = t0(), QR = As(), my = JR.assert, Ql = dy(), n0 = vy();
    function Sr(t) {
      if (!(this instanceof Sr))
        return new Sr(t);
      typeof t == "string" && (my(Object.prototype.hasOwnProperty.call(Jl, t), "Unknown curve " + t), t = Jl[t]), t instanceof Jl.PresetCurve && (t = { curve: t }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
    }
    gy.exports = Sr;
    Sr.prototype.keyPair = function(e) {
      return new Ql(this, e);
    };
    Sr.prototype.keyFromPrivate = function(e, r) {
      return Ql.fromPrivate(this, e, r);
    };
    Sr.prototype.keyFromPublic = function(e, r) {
      return Ql.fromPublic(this, e, r);
    };
    Sr.prototype.genKeyPair = function(e) {
      e || (e = {});
      for (var r = new by({ hash: this.hash, pers: e.pers, persEnc: e.persEnc || "utf8", entropy: e.entropy || QR(this.hash.hmacStrength), entropyEnc: e.entropy && e.entropyEnc || "utf8", nonce: this.n.toArray() }), o = this.n.byteLength(), f = this.n.sub(new Un(2));; ) {
        var p = new Un(r.generate(o));
        if (!(p.cmp(f) > 0))
          return p.iaddn(1), this.keyFromPrivate(p);
      }
    };
    Sr.prototype._truncateToN = function(e, r) {
      var o = e.byteLength() * 8 - this.n.bitLength();
      return o > 0 && (e = e.ushrn(o)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
    };
    Sr.prototype.sign = function(e, r, o, f) {
      typeof o == "object" && (f = o, o = null), f || (f = {}), r = this.keyFromPrivate(r, o), e = this._truncateToN(new Un(e, 16));
      for (var p = this.n.byteLength(), m = r.getPrivate().toArray("be", p), y = e.toArray("be", p), M = new by({ hash: this.hash, entropy: m, nonce: y, pers: f.pers, persEnc: f.persEnc || "utf8" }), x = this.n.sub(new Un(1)), S = 0;; S++) {
        var E = f.k ? f.k(S) : new Un(M.generate(this.n.byteLength()));
        if (E = this._truncateToN(E, true), !(E.cmpn(1) <= 0 || E.cmp(x) >= 0)) {
          var B = this.g.mul(E);
          if (!B.isInfinity()) {
            var q = B.getX(), L = q.umod(this.n);
            if (L.cmpn(0) !== 0) {
              var ge = E.invm(this.n).mul(L.mul(r.getPrivate()).iadd(e));
              if (ge = ge.umod(this.n), ge.cmpn(0) !== 0) {
                var _e = (B.getY().isOdd() ? 1 : 0) | (q.cmp(L) !== 0 ? 2 : 0);
                return f.canonical && ge.cmp(this.nh) > 0 && (ge = this.n.sub(ge), _e ^= 1), new n0({ r: L, s: ge, recoveryParam: _e });
              }
            }
          }
        }
      }
    };
    Sr.prototype.verify = function(e, r, o, f) {
      e = this._truncateToN(new Un(e, 16)), o = this.keyFromPublic(o, f), r = new n0(r, "hex");
      var { r: p, s: m } = r;
      if (p.cmpn(1) < 0 || p.cmp(this.n) >= 0 || m.cmpn(1) < 0 || m.cmp(this.n) >= 0)
        return false;
      var y = m.invm(this.n), M = y.mul(e).umod(this.n), x = y.mul(p).umod(this.n), S;
      return this.curve._maxwellTrick ? (S = this.g.jmulAdd(M, o.getPublic(), x), S.isInfinity() ? false : S.eqXToP(p)) : (S = this.g.mulAdd(M, o.getPublic(), x), S.isInfinity() ? false : S.getX().umod(this.n).cmp(p) === 0);
    };
    Sr.prototype.recoverPubKey = function(t, e, r, o) {
      my((3 & r) === r, "The recovery param is more than two bits"), e = new n0(e, o);
      var f = this.n, p = new Un(t), m = e.r, y = e.s, M = r & 1, x = r >> 1;
      if (m.cmp(this.curve.p.umod(this.curve.n)) >= 0 && x)
        throw new Error("Unable to find sencond key candinate");
      x ? m = this.curve.pointFromX(m.add(this.curve.n), M) : m = this.curve.pointFromX(m, M);
      var S = e.r.invm(f), E = f.sub(p).mul(S).umod(f), B = y.mul(S).umod(f);
      return this.g.mulAdd(E, m, B);
    };
    Sr.prototype.getKeyRecoveryParam = function(t, e, r, o) {
      if (e = new n0(e, o), e.recoveryParam !== null)
        return e.recoveryParam;
      for (var f = 0;f < 4; f++) {
        var p;
        try {
          p = this.recoverPubKey(t, e, f);
        } catch {
          continue;
        }
        if (p.eq(r))
          return f;
      }
      throw new Error("Unable to find valid recovery factor");
    };
  });
  xy = T((Zk, _y) => {
    var za = or(), My = za.assert, wy = za.parseBytes, Cf = za.cachedProperty;
    function Ft(t, e) {
      this.eddsa = t, this._secret = wy(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = wy(e.pub);
    }
    Ft.fromPublic = function(e, r) {
      return r instanceof Ft ? r : new Ft(e, { pub: r });
    };
    Ft.fromSecret = function(e, r) {
      return r instanceof Ft ? r : new Ft(e, { secret: r });
    };
    Ft.prototype.secret = function() {
      return this._secret;
    };
    Cf(Ft, "pubBytes", function() {
      return this.eddsa.encodePoint(this.pub());
    });
    Cf(Ft, "pub", function() {
      return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
    });
    Cf(Ft, "privBytes", function() {
      var e = this.eddsa, r = this.hash(), o = e.encodingLength - 1, f = r.slice(0, e.encodingLength);
      return f[0] &= 248, f[o] &= 127, f[o] |= 64, f;
    });
    Cf(Ft, "priv", function() {
      return this.eddsa.decodeInt(this.privBytes());
    });
    Cf(Ft, "hash", function() {
      return this.eddsa.hash().update(this.secret()).digest();
    });
    Cf(Ft, "messagePrefix", function() {
      return this.hash().slice(this.eddsa.encodingLength);
    });
    Ft.prototype.sign = function(e) {
      return My(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
    };
    Ft.prototype.verify = function(e, r) {
      return this.eddsa.verify(e, r, this);
    };
    Ft.prototype.getSecret = function(e) {
      return My(this._secret, "KeyPair is public only"), za.encode(this.secret(), e);
    };
    Ft.prototype.getPublic = function(e) {
      return za.encode(this.pubBytes(), e);
    };
    _y.exports = Ft;
  });
  Ey = T((Vk, Sy) => {
    var eB = ri(), f0 = or(), tB = f0.assert, a0 = f0.cachedProperty, rB = f0.parseBytes;
    function zn(t, e) {
      this.eddsa = t, typeof e != "object" && (e = rB(e)), Array.isArray(e) && (e = { R: e.slice(0, t.encodingLength), S: e.slice(t.encodingLength) }), tB(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof eB && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded;
    }
    a0(zn, "S", function() {
      return this.eddsa.decodeInt(this.Sencoded());
    });
    a0(zn, "R", function() {
      return this.eddsa.decodePoint(this.Rencoded());
    });
    a0(zn, "Rencoded", function() {
      return this.eddsa.encodePoint(this.R());
    });
    a0(zn, "Sencoded", function() {
      return this.eddsa.encodeInt(this.S());
    });
    zn.prototype.toBytes = function() {
      return this.Rencoded().concat(this.Sencoded());
    };
    zn.prototype.toHex = function() {
      return f0.encode(this.toBytes(), "hex").toUpperCase();
    };
    Sy.exports = zn;
  });
  Iy = T(($k, qy) => {
    var iB = e0(), nB = t0(), Of = or(), fB = Of.assert, Ry = Of.parseBytes, By = xy(), Ay = Ey();
    function nr(t) {
      if (fB(t === "ed25519", "only tested with ed25519 so far"), !(this instanceof nr))
        return new nr(t);
      t = nB[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = iB.sha512;
    }
    qy.exports = nr;
    nr.prototype.sign = function(e, r) {
      e = Ry(e);
      var o = this.keyFromSecret(r), f = this.hashInt(o.messagePrefix(), e), p = this.g.mul(f), m = this.encodePoint(p), y = this.hashInt(m, o.pubBytes(), e).mul(o.priv()), M = f.add(y).umod(this.curve.n);
      return this.makeSignature({ R: p, S: M, Rencoded: m });
    };
    nr.prototype.verify = function(e, r, o) {
      e = Ry(e), r = this.makeSignature(r);
      var f = this.keyFromPublic(o), p = this.hashInt(r.Rencoded(), f.pubBytes(), e), m = this.g.mul(r.S()), y = r.R().add(f.pub().mul(p));
      return y.eq(m);
    };
    nr.prototype.hashInt = function() {
      for (var e = this.hash(), r = 0;r < arguments.length; r++)
        e.update(arguments[r]);
      return Of.intFromLE(e.digest()).umod(this.curve.n);
    };
    nr.prototype.keyFromPublic = function(e) {
      return By.fromPublic(this, e);
    };
    nr.prototype.keyFromSecret = function(e) {
      return By.fromSecret(this, e);
    };
    nr.prototype.makeSignature = function(e) {
      return e instanceof Ay ? e : new Ay(this, e);
    };
    nr.prototype.encodePoint = function(e) {
      var r = e.getY().toArray("le", this.encodingLength);
      return r[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, r;
    };
    nr.prototype.decodePoint = function(e) {
      e = Of.parseBytes(e);
      var r = e.length - 1, o = e.slice(0, r).concat(e[r] & -129), f = (e[r] & 128) !== 0, p = Of.intFromLE(o);
      return this.curve.pointFromY(p, f);
    };
    nr.prototype.encodeInt = function(e) {
      return e.toArray("le", this.encodingLength);
    };
    nr.prototype.decodeInt = function(e) {
      return Of.intFromLE(e);
    };
    nr.prototype.isPoint = function(e) {
      return e instanceof this.pointClass;
    };
  });
  o0 = T((Ty) => {
    var Hn = Ty;
    Hn.version = s2().version;
    Hn.utils = or();
    Hn.rand = As();
    Hn.curve = Pl();
    Hn.curves = t0();
    Hn.ec = yy();
    Hn.eddsa = Iy();
  });
  td = T((ky, ed) => {
    (function(t, e) {
      function r(v, i) {
        if (!v)
          throw new Error(i || "Assertion failed");
      }
      function o(v, i) {
        v.super_ = i;
        var a = function() {
        };
        a.prototype = i.prototype, v.prototype = new a, v.prototype.constructor = v;
      }
      function f(v, i, a) {
        if (f.isBN(v))
          return v;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((i === "le" || i === "be") && (a = i, i = 10), this._init(v || 0, i || 10, a || "be"));
      }
      typeof t == "object" ? t.exports = f : e.BN = f, f.BN = f, f.wordSize = 26;
      var p;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? p = window.Buffer : p = ji().Buffer;
      } catch {
      }
      f.isBN = function(i) {
        return i instanceof f ? true : i !== null && typeof i == "object" && i.constructor.wordSize === f.wordSize && Array.isArray(i.words);
      }, f.max = function(i, a) {
        return i.cmp(a) > 0 ? i : a;
      }, f.min = function(i, a) {
        return i.cmp(a) < 0 ? i : a;
      }, f.prototype._init = function(i, a, h) {
        if (typeof i == "number")
          return this._initNumber(i, a, h);
        if (typeof i == "object")
          return this._initArray(i, a, h);
        a === "hex" && (a = 16), r(a === (a | 0) && a >= 2 && a <= 36), i = i.toString().replace(/\s+/g, "");
        var s = 0;
        i[0] === "-" && (s++, this.negative = 1), s < i.length && (a === 16 ? this._parseHex(i, s, h) : (this._parseBase(i, a, s), h === "le" && this._initArray(this.toArray(), a, h)));
      }, f.prototype._initNumber = function(i, a, h) {
        i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [i & 67108863, i / 67108864 & 67108863], this.length = 2) : (r(i < 9007199254740992), this.words = [i & 67108863, i / 67108864 & 67108863, 1], this.length = 3), h === "le" && this._initArray(this.toArray(), a, h);
      }, f.prototype._initArray = function(i, a, h) {
        if (r(typeof i.length == "number"), i.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u, c, b = 0;
        if (h === "be")
          for (s = i.length - 1, u = 0;s >= 0; s -= 3)
            c = i[s] | i[s - 1] << 8 | i[s - 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        else if (h === "le")
          for (s = 0, u = 0;s < i.length; s += 3)
            c = i[s] | i[s + 1] << 8 | i[s + 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        return this.strip();
      };
      function m(v, i) {
        var a = v.charCodeAt(i);
        return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
      }
      function y(v, i, a) {
        var h = m(v, a);
        return a - 1 >= i && (h |= m(v, a - 1) << 4), h;
      }
      f.prototype._parseHex = function(i, a, h) {
        this.length = Math.ceil((i.length - a) / 6), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u = 0, c = 0, b;
        if (h === "be")
          for (s = i.length - 1;s >= a; s -= 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        else {
          var l = i.length - a;
          for (s = l % 2 === 0 ? a + 1 : a;s < i.length; s += 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        }
        this.strip();
      };
      function M(v, i, a, h) {
        for (var s = 0, u = Math.min(v.length, a), c = i;c < u; c++) {
          var b = v.charCodeAt(c) - 48;
          s *= h, b >= 49 ? s += b - 49 + 10 : b >= 17 ? s += b - 17 + 10 : s += b;
        }
        return s;
      }
      f.prototype._parseBase = function(i, a, h) {
        this.words = [0], this.length = 1;
        for (var s = 0, u = 1;u <= 67108863; u *= a)
          s++;
        s--, u = u / a | 0;
        for (var c = i.length - h, b = c % s, l = Math.min(c, c - b) + h, n = 0, d = h;d < l; d += s)
          n = M(i, d, d + s, a), this.imuln(u), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        if (b !== 0) {
          var w = 1;
          for (n = M(i, d, i.length, a), d = 0;d < b; d++)
            w *= a;
          this.imuln(w), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        }
        this.strip();
      }, f.prototype.copy = function(i) {
        i.words = new Array(this.length);
        for (var a = 0;a < this.length; a++)
          i.words[a] = this.words[a];
        i.length = this.length, i.negative = this.negative, i.red = this.red;
      }, f.prototype.clone = function() {
        var i = new f(null);
        return this.copy(i), i;
      }, f.prototype._expand = function(i) {
        for (;this.length < i; )
          this.words[this.length++] = 0;
        return this;
      }, f.prototype.strip = function() {
        for (;this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, f.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, f.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      f.prototype.toString = function(i, a) {
        i = i || 10, a = a | 0 || 1;
        var h;
        if (i === 16 || i === "hex") {
          h = "";
          for (var s = 0, u = 0, c = 0;c < this.length; c++) {
            var b = this.words[c], l = ((b << s | u) & 16777215).toString(16);
            u = b >>> 24 - s & 16777215, u !== 0 || c !== this.length - 1 ? h = x[6 - l.length] + l + h : h = l + h, s += 2, s >= 26 && (s -= 26, c--);
          }
          for (u !== 0 && (h = u.toString(16) + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        if (i === (i | 0) && i >= 2 && i <= 36) {
          var n = S[i], d = E[i];
          h = "";
          var w = this.clone();
          for (w.negative = 0;!w.isZero(); ) {
            var g = w.modn(d).toString(i);
            w = w.idivn(d), w.isZero() ? h = g + h : h = x[n - g.length] + g + h;
          }
          for (this.isZero() && (h = "0" + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        r(false, "Base should be between 2 and 36");
      }, f.prototype.toNumber = function() {
        var i = this.words[0];
        return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
      }, f.prototype.toJSON = function() {
        return this.toString(16);
      }, f.prototype.toBuffer = function(i, a) {
        return r(typeof p < "u"), this.toArrayLike(p, i, a);
      }, f.prototype.toArray = function(i, a) {
        return this.toArrayLike(Array, i, a);
      }, f.prototype.toArrayLike = function(i, a, h) {
        var s = this.byteLength(), u = h || Math.max(1, s);
        r(s <= u, "byte array longer than desired length"), r(u > 0, "Requested array length <= 0"), this.strip();
        var c = a === "le", b = new i(u), l, n, d = this.clone();
        if (c) {
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[n] = l;
          for (;n < u; n++)
            b[n] = 0;
        } else {
          for (n = 0;n < u - s; n++)
            b[n] = 0;
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[u - n - 1] = l;
        }
        return b;
      }, Math.clz32 ? f.prototype._countBits = function(i) {
        return 32 - Math.clz32(i);
      } : f.prototype._countBits = function(i) {
        var a = i, h = 0;
        return a >= 4096 && (h += 13, a >>>= 13), a >= 64 && (h += 7, a >>>= 7), a >= 8 && (h += 4, a >>>= 4), a >= 2 && (h += 2, a >>>= 2), h + a;
      }, f.prototype._zeroBits = function(i) {
        if (i === 0)
          return 26;
        var a = i, h = 0;
        return (a & 8191) === 0 && (h += 13, a >>>= 13), (a & 127) === 0 && (h += 7, a >>>= 7), (a & 15) === 0 && (h += 4, a >>>= 4), (a & 3) === 0 && (h += 2, a >>>= 2), (a & 1) === 0 && h++, h;
      }, f.prototype.bitLength = function() {
        var i = this.words[this.length - 1], a = this._countBits(i);
        return (this.length - 1) * 26 + a;
      };
      function B(v) {
        for (var i = new Array(v.bitLength()), a = 0;a < i.length; a++) {
          var h = a / 26 | 0, s = a % 26;
          i[a] = (v.words[h] & 1 << s) >>> s;
        }
        return i;
      }
      f.prototype.zeroBits = function() {
        if (this.isZero())
          return 0;
        for (var i = 0, a = 0;a < this.length; a++) {
          var h = this._zeroBits(this.words[a]);
          if (i += h, h !== 26)
            break;
        }
        return i;
      }, f.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, f.prototype.toTwos = function(i) {
        return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
      }, f.prototype.fromTwos = function(i) {
        return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
      }, f.prototype.isNeg = function() {
        return this.negative !== 0;
      }, f.prototype.neg = function() {
        return this.clone().ineg();
      }, f.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, f.prototype.iuor = function(i) {
        for (;this.length < i.length; )
          this.words[this.length++] = 0;
        for (var a = 0;a < i.length; a++)
          this.words[a] = this.words[a] | i.words[a];
        return this.strip();
      }, f.prototype.ior = function(i) {
        return r((this.negative | i.negative) === 0), this.iuor(i);
      }, f.prototype.or = function(i) {
        return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
      }, f.prototype.uor = function(i) {
        return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
      }, f.prototype.iuand = function(i) {
        var a;
        this.length > i.length ? a = i : a = this;
        for (var h = 0;h < a.length; h++)
          this.words[h] = this.words[h] & i.words[h];
        return this.length = a.length, this.strip();
      }, f.prototype.iand = function(i) {
        return r((this.negative | i.negative) === 0), this.iuand(i);
      }, f.prototype.and = function(i) {
        return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
      }, f.prototype.uand = function(i) {
        return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
      }, f.prototype.iuxor = function(i) {
        var a, h;
        this.length > i.length ? (a = this, h = i) : (a = i, h = this);
        for (var s = 0;s < h.length; s++)
          this.words[s] = a.words[s] ^ h.words[s];
        if (this !== a)
          for (;s < a.length; s++)
            this.words[s] = a.words[s];
        return this.length = a.length, this.strip();
      }, f.prototype.ixor = function(i) {
        return r((this.negative | i.negative) === 0), this.iuxor(i);
      }, f.prototype.xor = function(i) {
        return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
      }, f.prototype.uxor = function(i) {
        return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
      }, f.prototype.inotn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = Math.ceil(i / 26) | 0, h = i % 26;
        this._expand(a), h > 0 && a--;
        for (var s = 0;s < a; s++)
          this.words[s] = ~this.words[s] & 67108863;
        return h > 0 && (this.words[s] = ~this.words[s] & 67108863 >> 26 - h), this.strip();
      }, f.prototype.notn = function(i) {
        return this.clone().inotn(i);
      }, f.prototype.setn = function(i, a) {
        r(typeof i == "number" && i >= 0);
        var h = i / 26 | 0, s = i % 26;
        return this._expand(h + 1), a ? this.words[h] = this.words[h] | 1 << s : this.words[h] = this.words[h] & ~(1 << s), this.strip();
      }, f.prototype.iadd = function(i) {
        var a;
        if (this.negative !== 0 && i.negative === 0)
          return this.negative = 0, a = this.isub(i), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && i.negative !== 0)
          return i.negative = 0, a = this.isub(i), i.negative = 1, a._normSign();
        var h, s;
        this.length > i.length ? (h = this, s = i) : (h = i, s = this);
        for (var u = 0, c = 0;c < s.length; c++)
          a = (h.words[c] | 0) + (s.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        for (;u !== 0 && c < h.length; c++)
          a = (h.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        if (this.length = h.length, u !== 0)
          this.words[this.length] = u, this.length++;
        else if (h !== this)
          for (;c < h.length; c++)
            this.words[c] = h.words[c];
        return this;
      }, f.prototype.add = function(i) {
        var a;
        return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, a = this.sub(i), i.negative ^= 1, a) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = i.sub(this), this.negative = 1, a) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
      }, f.prototype.isub = function(i) {
        if (i.negative !== 0) {
          i.negative = 0;
          var a = this.iadd(i);
          return i.negative = 1, a._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
        var h = this.cmp(i);
        if (h === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var s, u;
        h > 0 ? (s = this, u = i) : (s = i, u = this);
        for (var c = 0, b = 0;b < u.length; b++)
          a = (s.words[b] | 0) - (u.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        for (;c !== 0 && b < s.length; b++)
          a = (s.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        if (c === 0 && b < s.length && s !== this)
          for (;b < s.length; b++)
            this.words[b] = s.words[b];
        return this.length = Math.max(this.length, b), s !== this && (this.negative = 1), this.strip();
      }, f.prototype.sub = function(i) {
        return this.clone().isub(i);
      };
      function q(v, i, a) {
        a.negative = i.negative ^ v.negative;
        var h = v.length + i.length | 0;
        a.length = h, h = h - 1 | 0;
        var s = v.words[0] | 0, u = i.words[0] | 0, c = s * u, b = c & 67108863, l = c / 67108864 | 0;
        a.words[0] = b;
        for (var n = 1;n < h; n++) {
          for (var d = l >>> 26, w = l & 67108863, g = Math.min(n, i.length - 1), _ = Math.max(0, n - v.length + 1);_ <= g; _++) {
            var A = n - _ | 0;
            s = v.words[A] | 0, u = i.words[_] | 0, c = s * u + w, d += c / 67108864 | 0, w = c & 67108863;
          }
          a.words[n] = w | 0, l = d | 0;
        }
        return l !== 0 ? a.words[n] = l | 0 : a.length--, a.strip();
      }
      var L = function(i, a, h) {
        var s = i.words, u = a.words, c = h.words, b = 0, l, n, d, w = s[0] | 0, g = w & 8191, _ = w >>> 13, A = s[1] | 0, R = A & 8191, I = A >>> 13, Me = s[2] | 0, k = Me & 8191, D = Me >>> 13, nt = s[3] | 0, C = nt & 8191, O = nt >>> 13, vt = s[4] | 0, F = vt & 8191, U = vt >>> 13, bt = s[5] | 0, z = bt & 8191, H = bt >>> 13, mt = s[6] | 0, W = mt & 8191, K = mt >>> 13, gt = s[7] | 0, j = gt & 8191, Z = gt >>> 13, yt = s[8] | 0, V = yt & 8191, $ = yt >>> 13, wt = s[9] | 0, G = wt & 8191, Y = wt >>> 13, Mt = u[0] | 0, X = Mt & 8191, J = Mt >>> 13, _t = u[1] | 0, Q = _t & 8191, ee = _t >>> 13, xt = u[2] | 0, te = xt & 8191, re = xt >>> 13, St = u[3] | 0, ie = St & 8191, ne = St >>> 13, Et = u[4] | 0, fe = Et & 8191, ae = Et >>> 13, At = u[5] | 0, oe = At & 8191, se = At >>> 13, Rt = u[6] | 0, he = Rt & 8191, ue = Rt >>> 13, Bt = u[7] | 0, le = Bt & 8191, de = Bt >>> 13, qt = u[8] | 0, ce = qt & 8191, pe = qt >>> 13, It = u[9] | 0, ve = It & 8191, be = It >>> 13;
        h.negative = i.negative ^ a.negative, h.length = 19, l = Math.imul(g, X), n = Math.imul(g, J), n = n + Math.imul(_, X) | 0, d = Math.imul(_, J);
        var ft = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, l = Math.imul(R, X), n = Math.imul(R, J), n = n + Math.imul(I, X) | 0, d = Math.imul(I, J), l = l + Math.imul(g, Q) | 0, n = n + Math.imul(g, ee) | 0, n = n + Math.imul(_, Q) | 0, d = d + Math.imul(_, ee) | 0;
        var Be = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, l = Math.imul(k, X), n = Math.imul(k, J), n = n + Math.imul(D, X) | 0, d = Math.imul(D, J), l = l + Math.imul(R, Q) | 0, n = n + Math.imul(R, ee) | 0, n = n + Math.imul(I, Q) | 0, d = d + Math.imul(I, ee) | 0, l = l + Math.imul(g, te) | 0, n = n + Math.imul(g, re) | 0, n = n + Math.imul(_, te) | 0, d = d + Math.imul(_, re) | 0;
        var qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, l = Math.imul(C, X), n = Math.imul(C, J), n = n + Math.imul(O, X) | 0, d = Math.imul(O, J), l = l + Math.imul(k, Q) | 0, n = n + Math.imul(k, ee) | 0, n = n + Math.imul(D, Q) | 0, d = d + Math.imul(D, ee) | 0, l = l + Math.imul(R, te) | 0, n = n + Math.imul(R, re) | 0, n = n + Math.imul(I, te) | 0, d = d + Math.imul(I, re) | 0, l = l + Math.imul(g, ie) | 0, n = n + Math.imul(g, ne) | 0, n = n + Math.imul(_, ie) | 0, d = d + Math.imul(_, ne) | 0;
        var ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, l = Math.imul(F, X), n = Math.imul(F, J), n = n + Math.imul(U, X) | 0, d = Math.imul(U, J), l = l + Math.imul(C, Q) | 0, n = n + Math.imul(C, ee) | 0, n = n + Math.imul(O, Q) | 0, d = d + Math.imul(O, ee) | 0, l = l + Math.imul(k, te) | 0, n = n + Math.imul(k, re) | 0, n = n + Math.imul(D, te) | 0, d = d + Math.imul(D, re) | 0, l = l + Math.imul(R, ie) | 0, n = n + Math.imul(R, ne) | 0, n = n + Math.imul(I, ie) | 0, d = d + Math.imul(I, ne) | 0, l = l + Math.imul(g, fe) | 0, n = n + Math.imul(g, ae) | 0, n = n + Math.imul(_, fe) | 0, d = d + Math.imul(_, ae) | 0;
        var He = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, l = Math.imul(z, X), n = Math.imul(z, J), n = n + Math.imul(H, X) | 0, d = Math.imul(H, J), l = l + Math.imul(F, Q) | 0, n = n + Math.imul(F, ee) | 0, n = n + Math.imul(U, Q) | 0, d = d + Math.imul(U, ee) | 0, l = l + Math.imul(C, te) | 0, n = n + Math.imul(C, re) | 0, n = n + Math.imul(O, te) | 0, d = d + Math.imul(O, re) | 0, l = l + Math.imul(k, ie) | 0, n = n + Math.imul(k, ne) | 0, n = n + Math.imul(D, ie) | 0, d = d + Math.imul(D, ne) | 0, l = l + Math.imul(R, fe) | 0, n = n + Math.imul(R, ae) | 0, n = n + Math.imul(I, fe) | 0, d = d + Math.imul(I, ae) | 0, l = l + Math.imul(g, oe) | 0, n = n + Math.imul(g, se) | 0, n = n + Math.imul(_, oe) | 0, d = d + Math.imul(_, se) | 0;
        var We = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, l = Math.imul(W, X), n = Math.imul(W, J), n = n + Math.imul(K, X) | 0, d = Math.imul(K, J), l = l + Math.imul(z, Q) | 0, n = n + Math.imul(z, ee) | 0, n = n + Math.imul(H, Q) | 0, d = d + Math.imul(H, ee) | 0, l = l + Math.imul(F, te) | 0, n = n + Math.imul(F, re) | 0, n = n + Math.imul(U, te) | 0, d = d + Math.imul(U, re) | 0, l = l + Math.imul(C, ie) | 0, n = n + Math.imul(C, ne) | 0, n = n + Math.imul(O, ie) | 0, d = d + Math.imul(O, ne) | 0, l = l + Math.imul(k, fe) | 0, n = n + Math.imul(k, ae) | 0, n = n + Math.imul(D, fe) | 0, d = d + Math.imul(D, ae) | 0, l = l + Math.imul(R, oe) | 0, n = n + Math.imul(R, se) | 0, n = n + Math.imul(I, oe) | 0, d = d + Math.imul(I, se) | 0, l = l + Math.imul(g, he) | 0, n = n + Math.imul(g, ue) | 0, n = n + Math.imul(_, he) | 0, d = d + Math.imul(_, ue) | 0;
        var Ke = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, l = Math.imul(j, X), n = Math.imul(j, J), n = n + Math.imul(Z, X) | 0, d = Math.imul(Z, J), l = l + Math.imul(W, Q) | 0, n = n + Math.imul(W, ee) | 0, n = n + Math.imul(K, Q) | 0, d = d + Math.imul(K, ee) | 0, l = l + Math.imul(z, te) | 0, n = n + Math.imul(z, re) | 0, n = n + Math.imul(H, te) | 0, d = d + Math.imul(H, re) | 0, l = l + Math.imul(F, ie) | 0, n = n + Math.imul(F, ne) | 0, n = n + Math.imul(U, ie) | 0, d = d + Math.imul(U, ne) | 0, l = l + Math.imul(C, fe) | 0, n = n + Math.imul(C, ae) | 0, n = n + Math.imul(O, fe) | 0, d = d + Math.imul(O, ae) | 0, l = l + Math.imul(k, oe) | 0, n = n + Math.imul(k, se) | 0, n = n + Math.imul(D, oe) | 0, d = d + Math.imul(D, se) | 0, l = l + Math.imul(R, he) | 0, n = n + Math.imul(R, ue) | 0, n = n + Math.imul(I, he) | 0, d = d + Math.imul(I, ue) | 0, l = l + Math.imul(g, le) | 0, n = n + Math.imul(g, de) | 0, n = n + Math.imul(_, le) | 0, d = d + Math.imul(_, de) | 0;
        var je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, l = Math.imul(V, X), n = Math.imul(V, J), n = n + Math.imul($, X) | 0, d = Math.imul($, J), l = l + Math.imul(j, Q) | 0, n = n + Math.imul(j, ee) | 0, n = n + Math.imul(Z, Q) | 0, d = d + Math.imul(Z, ee) | 0, l = l + Math.imul(W, te) | 0, n = n + Math.imul(W, re) | 0, n = n + Math.imul(K, te) | 0, d = d + Math.imul(K, re) | 0, l = l + Math.imul(z, ie) | 0, n = n + Math.imul(z, ne) | 0, n = n + Math.imul(H, ie) | 0, d = d + Math.imul(H, ne) | 0, l = l + Math.imul(F, fe) | 0, n = n + Math.imul(F, ae) | 0, n = n + Math.imul(U, fe) | 0, d = d + Math.imul(U, ae) | 0, l = l + Math.imul(C, oe) | 0, n = n + Math.imul(C, se) | 0, n = n + Math.imul(O, oe) | 0, d = d + Math.imul(O, se) | 0, l = l + Math.imul(k, he) | 0, n = n + Math.imul(k, ue) | 0, n = n + Math.imul(D, he) | 0, d = d + Math.imul(D, ue) | 0, l = l + Math.imul(R, le) | 0, n = n + Math.imul(R, de) | 0, n = n + Math.imul(I, le) | 0, d = d + Math.imul(I, de) | 0, l = l + Math.imul(g, ce) | 0, n = n + Math.imul(g, pe) | 0, n = n + Math.imul(_, ce) | 0, d = d + Math.imul(_, pe) | 0;
        var Ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, X), n = Math.imul(G, J), n = n + Math.imul(Y, X) | 0, d = Math.imul(Y, J), l = l + Math.imul(V, Q) | 0, n = n + Math.imul(V, ee) | 0, n = n + Math.imul($, Q) | 0, d = d + Math.imul($, ee) | 0, l = l + Math.imul(j, te) | 0, n = n + Math.imul(j, re) | 0, n = n + Math.imul(Z, te) | 0, d = d + Math.imul(Z, re) | 0, l = l + Math.imul(W, ie) | 0, n = n + Math.imul(W, ne) | 0, n = n + Math.imul(K, ie) | 0, d = d + Math.imul(K, ne) | 0, l = l + Math.imul(z, fe) | 0, n = n + Math.imul(z, ae) | 0, n = n + Math.imul(H, fe) | 0, d = d + Math.imul(H, ae) | 0, l = l + Math.imul(F, oe) | 0, n = n + Math.imul(F, se) | 0, n = n + Math.imul(U, oe) | 0, d = d + Math.imul(U, se) | 0, l = l + Math.imul(C, he) | 0, n = n + Math.imul(C, ue) | 0, n = n + Math.imul(O, he) | 0, d = d + Math.imul(O, ue) | 0, l = l + Math.imul(k, le) | 0, n = n + Math.imul(k, de) | 0, n = n + Math.imul(D, le) | 0, d = d + Math.imul(D, de) | 0, l = l + Math.imul(R, ce) | 0, n = n + Math.imul(R, pe) | 0, n = n + Math.imul(I, ce) | 0, d = d + Math.imul(I, pe) | 0, l = l + Math.imul(g, ve) | 0, n = n + Math.imul(g, be) | 0, n = n + Math.imul(_, ve) | 0, d = d + Math.imul(_, be) | 0;
        var Ve = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, l = Math.imul(G, Q), n = Math.imul(G, ee), n = n + Math.imul(Y, Q) | 0, d = Math.imul(Y, ee), l = l + Math.imul(V, te) | 0, n = n + Math.imul(V, re) | 0, n = n + Math.imul($, te) | 0, d = d + Math.imul($, re) | 0, l = l + Math.imul(j, ie) | 0, n = n + Math.imul(j, ne) | 0, n = n + Math.imul(Z, ie) | 0, d = d + Math.imul(Z, ne) | 0, l = l + Math.imul(W, fe) | 0, n = n + Math.imul(W, ae) | 0, n = n + Math.imul(K, fe) | 0, d = d + Math.imul(K, ae) | 0, l = l + Math.imul(z, oe) | 0, n = n + Math.imul(z, se) | 0, n = n + Math.imul(H, oe) | 0, d = d + Math.imul(H, se) | 0, l = l + Math.imul(F, he) | 0, n = n + Math.imul(F, ue) | 0, n = n + Math.imul(U, he) | 0, d = d + Math.imul(U, ue) | 0, l = l + Math.imul(C, le) | 0, n = n + Math.imul(C, de) | 0, n = n + Math.imul(O, le) | 0, d = d + Math.imul(O, de) | 0, l = l + Math.imul(k, ce) | 0, n = n + Math.imul(k, pe) | 0, n = n + Math.imul(D, ce) | 0, d = d + Math.imul(D, pe) | 0, l = l + Math.imul(R, ve) | 0, n = n + Math.imul(R, be) | 0, n = n + Math.imul(I, ve) | 0, d = d + Math.imul(I, be) | 0;
        var $e = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, l = Math.imul(G, te), n = Math.imul(G, re), n = n + Math.imul(Y, te) | 0, d = Math.imul(Y, re), l = l + Math.imul(V, ie) | 0, n = n + Math.imul(V, ne) | 0, n = n + Math.imul($, ie) | 0, d = d + Math.imul($, ne) | 0, l = l + Math.imul(j, fe) | 0, n = n + Math.imul(j, ae) | 0, n = n + Math.imul(Z, fe) | 0, d = d + Math.imul(Z, ae) | 0, l = l + Math.imul(W, oe) | 0, n = n + Math.imul(W, se) | 0, n = n + Math.imul(K, oe) | 0, d = d + Math.imul(K, se) | 0, l = l + Math.imul(z, he) | 0, n = n + Math.imul(z, ue) | 0, n = n + Math.imul(H, he) | 0, d = d + Math.imul(H, ue) | 0, l = l + Math.imul(F, le) | 0, n = n + Math.imul(F, de) | 0, n = n + Math.imul(U, le) | 0, d = d + Math.imul(U, de) | 0, l = l + Math.imul(C, ce) | 0, n = n + Math.imul(C, pe) | 0, n = n + Math.imul(O, ce) | 0, d = d + Math.imul(O, pe) | 0, l = l + Math.imul(k, ve) | 0, n = n + Math.imul(k, be) | 0, n = n + Math.imul(D, ve) | 0, d = d + Math.imul(D, be) | 0;
        var Ge = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, l = Math.imul(G, ie), n = Math.imul(G, ne), n = n + Math.imul(Y, ie) | 0, d = Math.imul(Y, ne), l = l + Math.imul(V, fe) | 0, n = n + Math.imul(V, ae) | 0, n = n + Math.imul($, fe) | 0, d = d + Math.imul($, ae) | 0, l = l + Math.imul(j, oe) | 0, n = n + Math.imul(j, se) | 0, n = n + Math.imul(Z, oe) | 0, d = d + Math.imul(Z, se) | 0, l = l + Math.imul(W, he) | 0, n = n + Math.imul(W, ue) | 0, n = n + Math.imul(K, he) | 0, d = d + Math.imul(K, ue) | 0, l = l + Math.imul(z, le) | 0, n = n + Math.imul(z, de) | 0, n = n + Math.imul(H, le) | 0, d = d + Math.imul(H, de) | 0, l = l + Math.imul(F, ce) | 0, n = n + Math.imul(F, pe) | 0, n = n + Math.imul(U, ce) | 0, d = d + Math.imul(U, pe) | 0, l = l + Math.imul(C, ve) | 0, n = n + Math.imul(C, be) | 0, n = n + Math.imul(O, ve) | 0, d = d + Math.imul(O, be) | 0;
        var Ye = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(G, fe), n = Math.imul(G, ae), n = n + Math.imul(Y, fe) | 0, d = Math.imul(Y, ae), l = l + Math.imul(V, oe) | 0, n = n + Math.imul(V, se) | 0, n = n + Math.imul($, oe) | 0, d = d + Math.imul($, se) | 0, l = l + Math.imul(j, he) | 0, n = n + Math.imul(j, ue) | 0, n = n + Math.imul(Z, he) | 0, d = d + Math.imul(Z, ue) | 0, l = l + Math.imul(W, le) | 0, n = n + Math.imul(W, de) | 0, n = n + Math.imul(K, le) | 0, d = d + Math.imul(K, de) | 0, l = l + Math.imul(z, ce) | 0, n = n + Math.imul(z, pe) | 0, n = n + Math.imul(H, ce) | 0, d = d + Math.imul(H, pe) | 0, l = l + Math.imul(F, ve) | 0, n = n + Math.imul(F, be) | 0, n = n + Math.imul(U, ve) | 0, d = d + Math.imul(U, be) | 0;
        var Xe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, l = Math.imul(G, oe), n = Math.imul(G, se), n = n + Math.imul(Y, oe) | 0, d = Math.imul(Y, se), l = l + Math.imul(V, he) | 0, n = n + Math.imul(V, ue) | 0, n = n + Math.imul($, he) | 0, d = d + Math.imul($, ue) | 0, l = l + Math.imul(j, le) | 0, n = n + Math.imul(j, de) | 0, n = n + Math.imul(Z, le) | 0, d = d + Math.imul(Z, de) | 0, l = l + Math.imul(W, ce) | 0, n = n + Math.imul(W, pe) | 0, n = n + Math.imul(K, ce) | 0, d = d + Math.imul(K, pe) | 0, l = l + Math.imul(z, ve) | 0, n = n + Math.imul(z, be) | 0, n = n + Math.imul(H, ve) | 0, d = d + Math.imul(H, be) | 0;
        var Je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, l = Math.imul(G, he), n = Math.imul(G, ue), n = n + Math.imul(Y, he) | 0, d = Math.imul(Y, ue), l = l + Math.imul(V, le) | 0, n = n + Math.imul(V, de) | 0, n = n + Math.imul($, le) | 0, d = d + Math.imul($, de) | 0, l = l + Math.imul(j, ce) | 0, n = n + Math.imul(j, pe) | 0, n = n + Math.imul(Z, ce) | 0, d = d + Math.imul(Z, pe) | 0, l = l + Math.imul(W, ve) | 0, n = n + Math.imul(W, be) | 0, n = n + Math.imul(K, ve) | 0, d = d + Math.imul(K, be) | 0;
        var Qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, l = Math.imul(G, le), n = Math.imul(G, de), n = n + Math.imul(Y, le) | 0, d = Math.imul(Y, de), l = l + Math.imul(V, ce) | 0, n = n + Math.imul(V, pe) | 0, n = n + Math.imul($, ce) | 0, d = d + Math.imul($, pe) | 0, l = l + Math.imul(j, ve) | 0, n = n + Math.imul(j, be) | 0, n = n + Math.imul(Z, ve) | 0, d = d + Math.imul(Z, be) | 0;
        var et = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(G, ce), n = Math.imul(G, pe), n = n + Math.imul(Y, ce) | 0, d = Math.imul(Y, pe), l = l + Math.imul(V, ve) | 0, n = n + Math.imul(V, be) | 0, n = n + Math.imul($, ve) | 0, d = d + Math.imul($, be) | 0;
        var tt = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, l = Math.imul(G, ve), n = Math.imul(G, be), n = n + Math.imul(Y, ve) | 0, d = Math.imul(Y, be);
        var rt = (b + l | 0) + ((n & 8191) << 13) | 0;
        return b = (d + (n >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, c[0] = ft, c[1] = Be, c[2] = qe, c[3] = ze, c[4] = He, c[5] = We, c[6] = Ke, c[7] = je, c[8] = Ze, c[9] = Ve, c[10] = $e, c[11] = Ge, c[12] = Ye, c[13] = Xe, c[14] = Je, c[15] = Qe, c[16] = et, c[17] = tt, c[18] = rt, b !== 0 && (c[19] = b, h.length++), h;
      };
      Math.imul || (L = q);
      function ge(v, i, a) {
        a.negative = i.negative ^ v.negative, a.length = v.length + i.length;
        for (var h = 0, s = 0, u = 0;u < a.length - 1; u++) {
          var c = s;
          s = 0;
          for (var b = h & 67108863, l = Math.min(u, i.length - 1), n = Math.max(0, u - v.length + 1);n <= l; n++) {
            var d = u - n, w = v.words[d] | 0, g = i.words[n] | 0, _ = w * g, A = _ & 67108863;
            c = c + (_ / 67108864 | 0) | 0, A = A + b | 0, b = A & 67108863, c = c + (A >>> 26) | 0, s += c >>> 26, c &= 67108863;
          }
          a.words[u] = b, h = c, c = s;
        }
        return h !== 0 ? a.words[u] = h : a.length--, a.strip();
      }
      function _e(v, i, a) {
        var h = new N;
        return h.mulp(v, i, a);
      }
      f.prototype.mulTo = function(i, a) {
        var h, s = this.length + i.length;
        return this.length === 10 && i.length === 10 ? h = L(this, i, a) : s < 63 ? h = q(this, i, a) : s < 1024 ? h = ge(this, i, a) : h = _e(this, i, a), h;
      };
      function N(v, i) {
        this.x = v, this.y = i;
      }
      N.prototype.makeRBT = function(i) {
        for (var a = new Array(i), h = f.prototype._countBits(i) - 1, s = 0;s < i; s++)
          a[s] = this.revBin(s, h, i);
        return a;
      }, N.prototype.revBin = function(i, a, h) {
        if (i === 0 || i === h - 1)
          return i;
        for (var s = 0, u = 0;u < a; u++)
          s |= (i & 1) << a - u - 1, i >>= 1;
        return s;
      }, N.prototype.permute = function(i, a, h, s, u, c) {
        for (var b = 0;b < c; b++)
          s[b] = a[i[b]], u[b] = h[i[b]];
      }, N.prototype.transform = function(i, a, h, s, u, c) {
        this.permute(c, i, a, h, s, u);
        for (var b = 1;b < u; b <<= 1)
          for (var l = b << 1, n = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), w = 0;w < u; w += l)
            for (var g = n, _ = d, A = 0;A < b; A++) {
              var R = h[w + A], I = s[w + A], Me = h[w + A + b], k = s[w + A + b], D = g * Me - _ * k;
              k = g * k + _ * Me, Me = D, h[w + A] = R + Me, s[w + A] = I + k, h[w + A + b] = R - Me, s[w + A + b] = I - k, A !== l && (D = n * g - d * _, _ = n * _ + d * g, g = D);
            }
      }, N.prototype.guessLen13b = function(i, a) {
        var h = Math.max(a, i) | 1, s = h & 1, u = 0;
        for (h = h / 2 | 0;h; h = h >>> 1)
          u++;
        return 1 << u + 1 + s;
      }, N.prototype.conjugate = function(i, a, h) {
        if (!(h <= 1))
          for (var s = 0;s < h / 2; s++) {
            var u = i[s];
            i[s] = i[h - s - 1], i[h - s - 1] = u, u = a[s], a[s] = -a[h - s - 1], a[h - s - 1] = -u;
          }
      }, N.prototype.normalize13b = function(i, a) {
        for (var h = 0, s = 0;s < a / 2; s++) {
          var u = Math.round(i[2 * s + 1] / a) * 8192 + Math.round(i[2 * s] / a) + h;
          i[s] = u & 67108863, u < 67108864 ? h = 0 : h = u / 67108864 | 0;
        }
        return i;
      }, N.prototype.convert13b = function(i, a, h, s) {
        for (var u = 0, c = 0;c < a; c++)
          u = u + (i[c] | 0), h[2 * c] = u & 8191, u = u >>> 13, h[2 * c + 1] = u & 8191, u = u >>> 13;
        for (c = 2 * a;c < s; ++c)
          h[c] = 0;
        r(u === 0), r((u & -8192) === 0);
      }, N.prototype.stub = function(i) {
        for (var a = new Array(i), h = 0;h < i; h++)
          a[h] = 0;
        return a;
      }, N.prototype.mulp = function(i, a, h) {
        var s = 2 * this.guessLen13b(i.length, a.length), u = this.makeRBT(s), c = this.stub(s), b = new Array(s), l = new Array(s), n = new Array(s), d = new Array(s), w = new Array(s), g = new Array(s), _ = h.words;
        _.length = s, this.convert13b(i.words, i.length, b, s), this.convert13b(a.words, a.length, d, s), this.transform(b, c, l, n, s, u), this.transform(d, c, w, g, s, u);
        for (var A = 0;A < s; A++) {
          var R = l[A] * w[A] - n[A] * g[A];
          n[A] = l[A] * g[A] + n[A] * w[A], l[A] = R;
        }
        return this.conjugate(l, n, s), this.transform(l, n, _, c, s, u), this.conjugate(_, c, s), this.normalize13b(_, s), h.negative = i.negative ^ a.negative, h.length = i.length + a.length, h.strip();
      }, f.prototype.mul = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), this.mulTo(i, a);
      }, f.prototype.mulf = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), _e(this, i, a);
      }, f.prototype.imul = function(i) {
        return this.clone().mulTo(i, this);
      }, f.prototype.imuln = function(i) {
        r(typeof i == "number"), r(i < 67108864);
        for (var a = 0, h = 0;h < this.length; h++) {
          var s = (this.words[h] | 0) * i, u = (s & 67108863) + (a & 67108863);
          a >>= 26, a += s / 67108864 | 0, a += u >>> 26, this.words[h] = u & 67108863;
        }
        return a !== 0 && (this.words[h] = a, this.length++), this;
      }, f.prototype.muln = function(i) {
        return this.clone().imuln(i);
      }, f.prototype.sqr = function() {
        return this.mul(this);
      }, f.prototype.isqr = function() {
        return this.imul(this.clone());
      }, f.prototype.pow = function(i) {
        var a = B(i);
        if (a.length === 0)
          return new f(1);
        for (var h = this, s = 0;s < a.length && a[s] === 0; s++, h = h.sqr())
          ;
        if (++s < a.length)
          for (var u = h.sqr();s < a.length; s++, u = u.sqr())
            a[s] !== 0 && (h = h.mul(u));
        return h;
      }, f.prototype.iushln = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 67108863 >>> 26 - a << 26 - a, u;
        if (a !== 0) {
          var c = 0;
          for (u = 0;u < this.length; u++) {
            var b = this.words[u] & s, l = (this.words[u] | 0) - b << a;
            this.words[u] = l | c, c = b >>> 26 - a;
          }
          c && (this.words[u] = c, this.length++);
        }
        if (h !== 0) {
          for (u = this.length - 1;u >= 0; u--)
            this.words[u + h] = this.words[u];
          for (u = 0;u < h; u++)
            this.words[u] = 0;
          this.length += h;
        }
        return this.strip();
      }, f.prototype.ishln = function(i) {
        return r(this.negative === 0), this.iushln(i);
      }, f.prototype.iushrn = function(i, a, h) {
        r(typeof i == "number" && i >= 0);
        var s;
        a ? s = (a - a % 26) / 26 : s = 0;
        var u = i % 26, c = Math.min((i - u) / 26, this.length), b = 67108863 ^ 67108863 >>> u << u, l = h;
        if (s -= c, s = Math.max(0, s), l) {
          for (var n = 0;n < c; n++)
            l.words[n] = this.words[n];
          l.length = c;
        }
        if (c !== 0)
          if (this.length > c)
            for (this.length -= c, n = 0;n < this.length; n++)
              this.words[n] = this.words[n + c];
          else
            this.words[0] = 0, this.length = 1;
        var d = 0;
        for (n = this.length - 1;n >= 0 && (d !== 0 || n >= s); n--) {
          var w = this.words[n] | 0;
          this.words[n] = d << 26 - u | w >>> u, d = w & b;
        }
        return l && d !== 0 && (l.words[l.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, f.prototype.ishrn = function(i, a, h) {
        return r(this.negative === 0), this.iushrn(i, a, h);
      }, f.prototype.shln = function(i) {
        return this.clone().ishln(i);
      }, f.prototype.ushln = function(i) {
        return this.clone().iushln(i);
      }, f.prototype.shrn = function(i) {
        return this.clone().ishrn(i);
      }, f.prototype.ushrn = function(i) {
        return this.clone().iushrn(i);
      }, f.prototype.testn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return false;
        var u = this.words[h];
        return !!(u & s);
      }, f.prototype.imaskn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26;
        if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h)
          return this;
        if (a !== 0 && h++, this.length = Math.min(h, this.length), a !== 0) {
          var s = 67108863 ^ 67108863 >>> a << a;
          this.words[this.length - 1] &= s;
        }
        return this.strip();
      }, f.prototype.maskn = function(i) {
        return this.clone().imaskn(i);
      }, f.prototype.iaddn = function(i) {
        return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
      }, f.prototype._iaddn = function(i) {
        this.words[0] += i;
        for (var a = 0;a < this.length && this.words[a] >= 67108864; a++)
          this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
        return this.length = Math.max(this.length, a + 1), this;
      }, f.prototype.isubn = function(i) {
        if (r(typeof i == "number"), r(i < 67108864), i < 0)
          return this.iaddn(-i);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(i), this.negative = 1, this;
        if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var a = 0;a < this.length && this.words[a] < 0; a++)
            this.words[a] += 67108864, this.words[a + 1] -= 1;
        return this.strip();
      }, f.prototype.addn = function(i) {
        return this.clone().iaddn(i);
      }, f.prototype.subn = function(i) {
        return this.clone().isubn(i);
      }, f.prototype.iabs = function() {
        return this.negative = 0, this;
      }, f.prototype.abs = function() {
        return this.clone().iabs();
      }, f.prototype._ishlnsubmul = function(i, a, h) {
        var s = i.length + h, u;
        this._expand(s);
        var c, b = 0;
        for (u = 0;u < i.length; u++) {
          c = (this.words[u + h] | 0) + b;
          var l = (i.words[u] | 0) * a;
          c -= l & 67108863, b = (c >> 26) - (l / 67108864 | 0), this.words[u + h] = c & 67108863;
        }
        for (;u < this.length - h; u++)
          c = (this.words[u + h] | 0) + b, b = c >> 26, this.words[u + h] = c & 67108863;
        if (b === 0)
          return this.strip();
        for (r(b === -1), b = 0, u = 0;u < this.length; u++)
          c = -(this.words[u] | 0) + b, b = c >> 26, this.words[u] = c & 67108863;
        return this.negative = 1, this.strip();
      }, f.prototype._wordDiv = function(i, a) {
        var h = this.length - i.length, s = this.clone(), u = i, c = u.words[u.length - 1] | 0, b = this._countBits(c);
        h = 26 - b, h !== 0 && (u = u.ushln(h), s.iushln(h), c = u.words[u.length - 1] | 0);
        var l = s.length - u.length, n;
        if (a !== "mod") {
          n = new f(null), n.length = l + 1, n.words = new Array(n.length);
          for (var d = 0;d < n.length; d++)
            n.words[d] = 0;
        }
        var w = s.clone()._ishlnsubmul(u, 1, l);
        w.negative === 0 && (s = w, n && (n.words[l] = 1));
        for (var g = l - 1;g >= 0; g--) {
          var _ = (s.words[u.length + g] | 0) * 67108864 + (s.words[u.length + g - 1] | 0);
          for (_ = Math.min(_ / c | 0, 67108863), s._ishlnsubmul(u, _, g);s.negative !== 0; )
            _--, s.negative = 0, s._ishlnsubmul(u, 1, g), s.isZero() || (s.negative ^= 1);
          n && (n.words[g] = _);
        }
        return n && n.strip(), s.strip(), a !== "div" && h !== 0 && s.iushrn(h), { div: n || null, mod: s };
      }, f.prototype.divmod = function(i, a, h) {
        if (r(!i.isZero()), this.isZero())
          return { div: new f(0), mod: new f(0) };
        var s, u, c;
        return this.negative !== 0 && i.negative === 0 ? (c = this.neg().divmod(i, a), a !== "mod" && (s = c.div.neg()), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.iadd(i)), { div: s, mod: u }) : this.negative === 0 && i.negative !== 0 ? (c = this.divmod(i.neg(), a), a !== "mod" && (s = c.div.neg()), { div: s, mod: c.mod }) : (this.negative & i.negative) !== 0 ? (c = this.neg().divmod(i.neg(), a), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.isub(i)), { div: c.div, mod: u }) : i.length > this.length || this.cmp(i) < 0 ? { div: new f(0), mod: this } : i.length === 1 ? a === "div" ? { div: this.divn(i.words[0]), mod: null } : a === "mod" ? { div: null, mod: new f(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new f(this.modn(i.words[0])) } : this._wordDiv(i, a);
      }, f.prototype.div = function(i) {
        return this.divmod(i, "div", false).div;
      }, f.prototype.mod = function(i) {
        return this.divmod(i, "mod", false).mod;
      }, f.prototype.umod = function(i) {
        return this.divmod(i, "mod", true).mod;
      }, f.prototype.divRound = function(i) {
        var a = this.divmod(i);
        if (a.mod.isZero())
          return a.div;
        var h = a.div.negative !== 0 ? a.mod.isub(i) : a.mod, s = i.ushrn(1), u = i.andln(1), c = h.cmp(s);
        return c < 0 || u === 1 && c === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
      }, f.prototype.modn = function(i) {
        r(i <= 67108863);
        for (var a = (1 << 26) % i, h = 0, s = this.length - 1;s >= 0; s--)
          h = (a * h + (this.words[s] | 0)) % i;
        return h;
      }, f.prototype.idivn = function(i) {
        r(i <= 67108863);
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = (this.words[h] | 0) + a * 67108864;
          this.words[h] = s / i | 0, a = s % i;
        }
        return this.strip();
      }, f.prototype.divn = function(i) {
        return this.clone().idivn(i);
      }, f.prototype.egcd = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = new f(0), b = new f(1), l = 0;a.isEven() && h.isEven(); )
          a.iushrn(1), h.iushrn(1), ++l;
        for (var n = h.clone(), d = a.clone();!a.isZero(); ) {
          for (var w = 0, g = 1;(a.words[0] & g) === 0 && w < 26; ++w, g <<= 1)
            ;
          if (w > 0)
            for (a.iushrn(w);w-- > 0; )
              (s.isOdd() || u.isOdd()) && (s.iadd(n), u.isub(d)), s.iushrn(1), u.iushrn(1);
          for (var _ = 0, A = 1;(h.words[0] & A) === 0 && _ < 26; ++_, A <<= 1)
            ;
          if (_ > 0)
            for (h.iushrn(_);_-- > 0; )
              (c.isOdd() || b.isOdd()) && (c.iadd(n), b.isub(d)), c.iushrn(1), b.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(c), u.isub(b)) : (h.isub(a), c.isub(s), b.isub(u));
        }
        return { a: c, b, gcd: h.iushln(l) };
      }, f.prototype._invmp = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = h.clone();a.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var b = 0, l = 1;(a.words[0] & l) === 0 && b < 26; ++b, l <<= 1)
            ;
          if (b > 0)
            for (a.iushrn(b);b-- > 0; )
              s.isOdd() && s.iadd(c), s.iushrn(1);
          for (var n = 0, d = 1;(h.words[0] & d) === 0 && n < 26; ++n, d <<= 1)
            ;
          if (n > 0)
            for (h.iushrn(n);n-- > 0; )
              u.isOdd() && u.iadd(c), u.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(u)) : (h.isub(a), u.isub(s));
        }
        var w;
        return a.cmpn(1) === 0 ? w = s : w = u, w.cmpn(0) < 0 && w.iadd(i), w;
      }, f.prototype.gcd = function(i) {
        if (this.isZero())
          return i.abs();
        if (i.isZero())
          return this.abs();
        var a = this.clone(), h = i.clone();
        a.negative = 0, h.negative = 0;
        for (var s = 0;a.isEven() && h.isEven(); s++)
          a.iushrn(1), h.iushrn(1);
        do {
          for (;a.isEven(); )
            a.iushrn(1);
          for (;h.isEven(); )
            h.iushrn(1);
          var u = a.cmp(h);
          if (u < 0) {
            var c = a;
            a = h, h = c;
          } else if (u === 0 || h.cmpn(1) === 0)
            break;
          a.isub(h);
        } while (true);
        return h.iushln(s);
      }, f.prototype.invm = function(i) {
        return this.egcd(i).a.umod(i);
      }, f.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, f.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, f.prototype.andln = function(i) {
        return this.words[0] & i;
      }, f.prototype.bincn = function(i) {
        r(typeof i == "number");
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return this._expand(h + 1), this.words[h] |= s, this;
        for (var u = s, c = h;u !== 0 && c < this.length; c++) {
          var b = this.words[c] | 0;
          b += u, u = b >>> 26, b &= 67108863, this.words[c] = b;
        }
        return u !== 0 && (this.words[c] = u, this.length++), this;
      }, f.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, f.prototype.cmpn = function(i) {
        var a = i < 0;
        if (this.negative !== 0 && !a)
          return -1;
        if (this.negative === 0 && a)
          return 1;
        this.strip();
        var h;
        if (this.length > 1)
          h = 1;
        else {
          a && (i = -i), r(i <= 67108863, "Number is too big");
          var s = this.words[0] | 0;
          h = s === i ? 0 : s < i ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }, f.prototype.cmp = function(i) {
        if (this.negative !== 0 && i.negative === 0)
          return -1;
        if (this.negative === 0 && i.negative !== 0)
          return 1;
        var a = this.ucmp(i);
        return this.negative !== 0 ? -a | 0 : a;
      }, f.prototype.ucmp = function(i) {
        if (this.length > i.length)
          return 1;
        if (this.length < i.length)
          return -1;
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = this.words[h] | 0, u = i.words[h] | 0;
          if (s !== u) {
            s < u ? a = -1 : s > u && (a = 1);
            break;
          }
        }
        return a;
      }, f.prototype.gtn = function(i) {
        return this.cmpn(i) === 1;
      }, f.prototype.gt = function(i) {
        return this.cmp(i) === 1;
      }, f.prototype.gten = function(i) {
        return this.cmpn(i) >= 0;
      }, f.prototype.gte = function(i) {
        return this.cmp(i) >= 0;
      }, f.prototype.ltn = function(i) {
        return this.cmpn(i) === -1;
      }, f.prototype.lt = function(i) {
        return this.cmp(i) === -1;
      }, f.prototype.lten = function(i) {
        return this.cmpn(i) <= 0;
      }, f.prototype.lte = function(i) {
        return this.cmp(i) <= 0;
      }, f.prototype.eqn = function(i) {
        return this.cmpn(i) === 0;
      }, f.prototype.eq = function(i) {
        return this.cmp(i) === 0;
      }, f.red = function(i) {
        return new P(i);
      }, f.prototype.toRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
      }, f.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, f.prototype._forceRed = function(i) {
        return this.red = i, this;
      }, f.prototype.forceRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
      }, f.prototype.redAdd = function(i) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
      }, f.prototype.redIAdd = function(i) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
      }, f.prototype.redSub = function(i) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
      }, f.prototype.redISub = function(i) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
      }, f.prototype.redShl = function(i) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
      }, f.prototype.redMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
      }, f.prototype.redIMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
      }, f.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, f.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, f.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, f.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, f.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, f.prototype.redPow = function(i) {
        return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
      };
      var we = { k256: null, p224: null, p192: null, p25519: null };
      function ye(v, i) {
        this.name = v, this.p = new f(i, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      ye.prototype._tmp = function() {
        var i = new f(null);
        return i.words = new Array(Math.ceil(this.n / 13)), i;
      }, ye.prototype.ireduce = function(i) {
        var a = i, h;
        do
          this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), h = a.bitLength();
        while (h > this.n);
        var s = h < this.n ? -1 : a.ucmp(this.p);
        return s === 0 ? (a.words[0] = 0, a.length = 1) : s > 0 ? a.isub(this.p) : a.strip !== undefined ? a.strip() : a._strip(), a;
      }, ye.prototype.split = function(i, a) {
        i.iushrn(this.n, 0, a);
      }, ye.prototype.imulK = function(i) {
        return i.imul(this.k);
      };
      function xe() {
        ye.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      o(xe, ye), xe.prototype.split = function(i, a) {
        for (var h = 4194303, s = Math.min(i.length, 9), u = 0;u < s; u++)
          a.words[u] = i.words[u];
        if (a.length = s, i.length <= 9) {
          i.words[0] = 0, i.length = 1;
          return;
        }
        var c = i.words[9];
        for (a.words[a.length++] = c & h, u = 10;u < i.length; u++) {
          var b = i.words[u] | 0;
          i.words[u - 10] = (b & h) << 4 | c >>> 22, c = b;
        }
        c >>>= 22, i.words[u - 10] = c, c === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
      }, xe.prototype.imulK = function(i) {
        i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = i.words[h] | 0;
          a += s * 977, i.words[h] = a & 67108863, a = s * 64 + (a / 67108864 | 0);
        }
        return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
      };
      function Re() {
        ye.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      o(Re, ye);
      function Ee() {
        ye.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      o(Ee, ye);
      function Ae() {
        ye.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      o(Ae, ye), Ae.prototype.imulK = function(i) {
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = (i.words[h] | 0) * 19 + a, u = s & 67108863;
          s >>>= 26, i.words[h] = u, a = s;
        }
        return a !== 0 && (i.words[i.length++] = a), i;
      }, f._prime = function(i) {
        if (we[i])
          return we[i];
        var a;
        if (i === "k256")
          a = new xe;
        else if (i === "p224")
          a = new Re;
        else if (i === "p192")
          a = new Ee;
        else if (i === "p25519")
          a = new Ae;
        else
          throw new Error("Unknown prime " + i);
        return we[i] = a, a;
      };
      function P(v) {
        if (typeof v == "string") {
          var i = f._prime(v);
          this.m = i.p, this.prime = i;
        } else
          r(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
      }
      P.prototype._verify1 = function(i) {
        r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
      }, P.prototype._verify2 = function(i, a) {
        r((i.negative | a.negative) === 0, "red works only with positives"), r(i.red && i.red === a.red, "red works only with red numbers");
      }, P.prototype.imod = function(i) {
        return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
      }, P.prototype.neg = function(i) {
        return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
      }, P.prototype.add = function(i, a) {
        this._verify2(i, a);
        var h = i.add(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }, P.prototype.iadd = function(i, a) {
        this._verify2(i, a);
        var h = i.iadd(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }, P.prototype.sub = function(i, a) {
        this._verify2(i, a);
        var h = i.sub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }, P.prototype.isub = function(i, a) {
        this._verify2(i, a);
        var h = i.isub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }, P.prototype.shl = function(i, a) {
        return this._verify1(i), this.imod(i.ushln(a));
      }, P.prototype.imul = function(i, a) {
        return this._verify2(i, a), this.imod(i.imul(a));
      }, P.prototype.mul = function(i, a) {
        return this._verify2(i, a), this.imod(i.mul(a));
      }, P.prototype.isqr = function(i) {
        return this.imul(i, i.clone());
      }, P.prototype.sqr = function(i) {
        return this.mul(i, i);
      }, P.prototype.sqrt = function(i) {
        if (i.isZero())
          return i.clone();
        var a = this.m.andln(3);
        if (r(a % 2 === 1), a === 3) {
          var h = this.m.add(new f(1)).iushrn(2);
          return this.pow(i, h);
        }
        for (var s = this.m.subn(1), u = 0;!s.isZero() && s.andln(1) === 0; )
          u++, s.iushrn(1);
        r(!s.isZero());
        var c = new f(1).toRed(this), b = c.redNeg(), l = this.m.subn(1).iushrn(1), n = this.m.bitLength();
        for (n = new f(2 * n * n).toRed(this);this.pow(n, l).cmp(b) !== 0; )
          n.redIAdd(b);
        for (var d = this.pow(n, s), w = this.pow(i, s.addn(1).iushrn(1)), g = this.pow(i, s), _ = u;g.cmp(c) !== 0; ) {
          for (var A = g, R = 0;A.cmp(c) !== 0; R++)
            A = A.redSqr();
          r(R < _);
          var I = this.pow(d, new f(1).iushln(_ - R - 1));
          w = w.redMul(I), d = I.redSqr(), g = g.redMul(d), _ = R;
        }
        return w;
      }, P.prototype.invm = function(i) {
        var a = i._invmp(this.m);
        return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
      }, P.prototype.pow = function(i, a) {
        if (a.isZero())
          return new f(1).toRed(this);
        if (a.cmpn(1) === 0)
          return i.clone();
        var h = 4, s = new Array(1 << h);
        s[0] = new f(1).toRed(this), s[1] = i;
        for (var u = 2;u < s.length; u++)
          s[u] = this.mul(s[u - 1], i);
        var c = s[0], b = 0, l = 0, n = a.bitLength() % 26;
        for (n === 0 && (n = 26), u = a.length - 1;u >= 0; u--) {
          for (var d = a.words[u], w = n - 1;w >= 0; w--) {
            var g = d >> w & 1;
            if (c !== s[0] && (c = this.sqr(c)), g === 0 && b === 0) {
              l = 0;
              continue;
            }
            b <<= 1, b |= g, l++, !(l !== h && (u !== 0 || w !== 0)) && (c = this.mul(c, s[b]), l = 0, b = 0);
          }
          n = 26;
        }
        return c;
      }, P.prototype.convertTo = function(i) {
        var a = i.umod(this.m);
        return a === i ? a.clone() : a;
      }, P.prototype.convertFrom = function(i) {
        var a = i.clone();
        return a.red = null, a;
      }, f.mont = function(i) {
        return new Se(i);
      };
      function Se(v) {
        P.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      o(Se, P), Se.prototype.convertTo = function(i) {
        return this.imod(i.ushln(this.shift));
      }, Se.prototype.convertFrom = function(i) {
        var a = this.imod(i.mul(this.rinv));
        return a.red = null, a;
      }, Se.prototype.imul = function(i, a) {
        if (i.isZero() || a.isZero())
          return i.words[0] = 0, i.length = 1, i;
        var h = i.imul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.mul = function(i, a) {
        if (i.isZero() || a.isZero())
          return new f(0)._forceRed(this);
        var h = i.mul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.invm = function(i) {
        var a = this.imod(i._invmp(this.m).mul(this.r2));
        return a._forceRed(this);
      };
    })(typeof ed > "u" || ed, ky);
  });
  h0 = T((Yk, Ly) => {
    var s0 = Ut(), Ff = s0.Buffer, Er = {}, Ar;
    for (Ar in s0)
      !s0.hasOwnProperty(Ar) || Ar === "SlowBuffer" || Ar === "Buffer" || (Er[Ar] = s0[Ar]);
    var Uf = Er.Buffer = {};
    for (Ar in Ff)
      !Ff.hasOwnProperty(Ar) || Ar === "allocUnsafe" || Ar === "allocUnsafeSlow" || (Uf[Ar] = Ff[Ar]);
    Er.Buffer.prototype = Ff.prototype;
    (!Uf.from || Uf.from === Uint8Array.from) && (Uf.from = function(t, e, r) {
      if (typeof t == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
      if (t && typeof t.length > "u")
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
      return Ff(t, e, r);
    });
    Uf.alloc || (Uf.alloc = function(t, e, r) {
      if (typeof t != "number")
        throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
      if (t < 0 || t >= 2 * (1 << 30))
        throw new RangeError('The value "' + t + '" is invalid for option "size"');
      var o = Ff(t);
      return !e || e.length === 0 ? o.fill(0) : typeof r == "string" ? o.fill(e, r) : o.fill(e), o;
    });
    if (!Er.kStringMaxLength)
      try {
        Er.kStringMaxLength = process.binding("buffer").kStringMaxLength;
      } catch {
      }
    Er.constants || (Er.constants = { MAX_LENGTH: Er.kMaxLength }, Er.kStringMaxLength && (Er.constants.MAX_STRING_LENGTH = Er.kStringMaxLength));
    Ly.exports = Er;
  });
  u0 = T((Ny) => {
    var aB = Ie();
    function Rr(t) {
      this._reporterState = { obj: null, path: [], options: t || {}, errors: [] };
    }
    Ny.Reporter = Rr;
    Rr.prototype.isError = function(e) {
      return e instanceof zf;
    };
    Rr.prototype.save = function() {
      let e = this._reporterState;
      return { obj: e.obj, pathLen: e.path.length };
    };
    Rr.prototype.restore = function(e) {
      let r = this._reporterState;
      r.obj = e.obj, r.path = r.path.slice(0, e.pathLen);
    };
    Rr.prototype.enterKey = function(e) {
      return this._reporterState.path.push(e);
    };
    Rr.prototype.exitKey = function(e) {
      let r = this._reporterState;
      r.path = r.path.slice(0, e - 1);
    };
    Rr.prototype.leaveKey = function(e, r, o) {
      let f = this._reporterState;
      this.exitKey(e), f.obj !== null && (f.obj[r] = o);
    };
    Rr.prototype.path = function() {
      return this._reporterState.path.join("/");
    };
    Rr.prototype.enterObject = function() {
      let e = this._reporterState, r = e.obj;
      return e.obj = {}, r;
    };
    Rr.prototype.leaveObject = function(e) {
      let r = this._reporterState, o = r.obj;
      return r.obj = e, o;
    };
    Rr.prototype.error = function(e) {
      let r, o = this._reporterState, f = e instanceof zf;
      if (f ? r = e : r = new zf(o.path.map(function(p) {
        return "[" + JSON.stringify(p) + "]";
      }).join(""), e.message || e, e.stack), !o.options.partial)
        throw r;
      return f || o.errors.push(r), r;
    };
    Rr.prototype.wrapResult = function(e) {
      let r = this._reporterState;
      return r.options.partial ? { result: this.isError(e) ? null : e, errors: r.errors } : e;
    };
    function zf(t, e) {
      this.path = t, this.rethrow(e);
    }
    aB(zf, Error);
    zf.prototype.rethrow = function(e) {
      if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, zf), !this.stack)
        try {
          throw new Error(this.message);
        } catch (r) {
          this.stack = r.stack;
        }
      return this;
    };
  });
  Kf = T((rd) => {
    var oB = Ie(), l0 = u0().Reporter, Hf = h0().Buffer;
    function Br(t, e) {
      if (l0.call(this, e), !Hf.isBuffer(t)) {
        this.error("Input not Buffer");
        return;
      }
      this.base = t, this.offset = 0, this.length = t.length;
    }
    oB(Br, l0);
    rd.DecoderBuffer = Br;
    Br.isDecoderBuffer = function(e) {
      return e instanceof Br ? true : typeof e == "object" && Hf.isBuffer(e.base) && e.constructor.name === "DecoderBuffer" && typeof e.offset == "number" && typeof e.length == "number" && typeof e.save == "function" && typeof e.restore == "function" && typeof e.isEmpty == "function" && typeof e.readUInt8 == "function" && typeof e.skip == "function" && typeof e.raw == "function";
    };
    Br.prototype.save = function() {
      return { offset: this.offset, reporter: l0.prototype.save.call(this) };
    };
    Br.prototype.restore = function(e) {
      let r = new Br(this.base);
      return r.offset = e.offset, r.length = this.offset, this.offset = e.offset, l0.prototype.restore.call(this, e.reporter), r;
    };
    Br.prototype.isEmpty = function() {
      return this.offset === this.length;
    };
    Br.prototype.readUInt8 = function(e) {
      return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, true) : this.error(e || "DecoderBuffer overrun");
    };
    Br.prototype.skip = function(e, r) {
      if (!(this.offset + e <= this.length))
        return this.error(r || "DecoderBuffer overrun");
      let o = new Br(this.base);
      return o._reporterState = this._reporterState, o.offset = this.offset, o.length = this.offset + e, this.offset += e, o;
    };
    Br.prototype.raw = function(e) {
      return this.base.slice(e ? e.offset : this.offset, this.length);
    };
    function Wf(t, e) {
      if (Array.isArray(t))
        this.length = 0, this.value = t.map(function(r) {
          return Wf.isEncoderBuffer(r) || (r = new Wf(r, e)), this.length += r.length, r;
        }, this);
      else if (typeof t == "number") {
        if (!(0 <= t && t <= 255))
          return e.error("non-byte EncoderBuffer value");
        this.value = t, this.length = 1;
      } else if (typeof t == "string")
        this.value = t, this.length = Hf.byteLength(t);
      else if (Hf.isBuffer(t))
        this.value = t, this.length = t.length;
      else
        return e.error("Unsupported type: " + typeof t);
    }
    rd.EncoderBuffer = Wf;
    Wf.isEncoderBuffer = function(e) {
      return e instanceof Wf ? true : typeof e == "object" && e.constructor.name === "EncoderBuffer" && typeof e.length == "number" && typeof e.join == "function";
    };
    Wf.prototype.join = function(e, r) {
      return e || (e = Hf.alloc(this.length)), r || (r = 0), this.length === 0 || (Array.isArray(this.value) ? this.value.forEach(function(o) {
        o.join(e, r), r += o.length;
      }) : (typeof this.value == "number" ? e[r] = this.value : typeof this.value == "string" ? e.write(this.value, r) : Hf.isBuffer(this.value) && this.value.copy(e, r), r += this.length)), e;
    };
  });
  d0 = T((Qk, Py) => {
    var sB = u0().Reporter, hB = Kf().EncoderBuffer, uB = Kf().DecoderBuffer, Qt = ar(), Dy = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"], lB = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(Dy), dB = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];
    function Ue(t, e, r) {
      let o = {};
      this._baseState = o, o.name = r, o.enc = t, o.parent = e || null, o.children = null, o.tag = null, o.args = null, o.reverseArgs = null, o.choice = null, o.optional = false, o.any = false, o.obj = false, o.use = null, o.useDecoder = null, o.key = null, o.default = null, o.explicit = null, o.implicit = null, o.contains = null, o.parent || (o.children = [], this._wrap());
    }
    Py.exports = Ue;
    var cB = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    Ue.prototype.clone = function() {
      let e = this._baseState, r = {};
      cB.forEach(function(f) {
        r[f] = e[f];
      });
      let o = new this.constructor(r.parent);
      return o._baseState = r, o;
    };
    Ue.prototype._wrap = function() {
      let e = this._baseState;
      lB.forEach(function(r) {
        this[r] = function() {
          let f = new this.constructor(this);
          return e.children.push(f), f[r].apply(f, arguments);
        };
      }, this);
    };
    Ue.prototype._init = function(e) {
      let r = this._baseState;
      Qt(r.parent === null), e.call(this), r.children = r.children.filter(function(o) {
        return o._baseState.parent === this;
      }, this), Qt.equal(r.children.length, 1, "Root node can have only one child");
    };
    Ue.prototype._useArgs = function(e) {
      let r = this._baseState, o = e.filter(function(f) {
        return f instanceof this.constructor;
      }, this);
      e = e.filter(function(f) {
        return !(f instanceof this.constructor);
      }, this), o.length !== 0 && (Qt(r.children === null), r.children = o, o.forEach(function(f) {
        f._baseState.parent = this;
      }, this)), e.length !== 0 && (Qt(r.args === null), r.args = e, r.reverseArgs = e.map(function(f) {
        if (typeof f != "object" || f.constructor !== Object)
          return f;
        let p = {};
        return Object.keys(f).forEach(function(m) {
          m == (m | 0) && (m |= 0);
          let y = f[m];
          p[y] = m;
        }), p;
      }));
    };
    dB.forEach(function(t) {
      Ue.prototype[t] = function() {
        let r = this._baseState;
        throw new Error(t + " not implemented for encoding: " + r.enc);
      };
    });
    Dy.forEach(function(t) {
      Ue.prototype[t] = function() {
        let r = this._baseState, o = Array.prototype.slice.call(arguments);
        return Qt(r.tag === null), r.tag = t, this._useArgs(o), this;
      };
    });
    Ue.prototype.use = function(e) {
      Qt(e);
      let r = this._baseState;
      return Qt(r.use === null), r.use = e, this;
    };
    Ue.prototype.optional = function() {
      let e = this._baseState;
      return e.optional = true, this;
    };
    Ue.prototype.def = function(e) {
      let r = this._baseState;
      return Qt(r.default === null), r.default = e, r.optional = true, this;
    };
    Ue.prototype.explicit = function(e) {
      let r = this._baseState;
      return Qt(r.explicit === null && r.implicit === null), r.explicit = e, this;
    };
    Ue.prototype.implicit = function(e) {
      let r = this._baseState;
      return Qt(r.explicit === null && r.implicit === null), r.implicit = e, this;
    };
    Ue.prototype.obj = function() {
      let e = this._baseState, r = Array.prototype.slice.call(arguments);
      return e.obj = true, r.length !== 0 && this._useArgs(r), this;
    };
    Ue.prototype.key = function(e) {
      let r = this._baseState;
      return Qt(r.key === null), r.key = e, this;
    };
    Ue.prototype.any = function() {
      let e = this._baseState;
      return e.any = true, this;
    };
    Ue.prototype.choice = function(e) {
      let r = this._baseState;
      return Qt(r.choice === null), r.choice = e, this._useArgs(Object.keys(e).map(function(o) {
        return e[o];
      })), this;
    };
    Ue.prototype.contains = function(e) {
      let r = this._baseState;
      return Qt(r.use === null), r.contains = e, this;
    };
    Ue.prototype._decode = function(e, r) {
      let o = this._baseState;
      if (o.parent === null)
        return e.wrapResult(o.children[0]._decode(e, r));
      let f = o.default, p = true, m = null;
      if (o.key !== null && (m = e.enterKey(o.key)), o.optional) {
        let M = null;
        if (o.explicit !== null ? M = o.explicit : o.implicit !== null ? M = o.implicit : o.tag !== null && (M = o.tag), M === null && !o.any) {
          let x = e.save();
          try {
            o.choice === null ? this._decodeGeneric(o.tag, e, r) : this._decodeChoice(e, r), p = true;
          } catch {
            p = false;
          }
          e.restore(x);
        } else if (p = this._peekTag(e, M, o.any), e.isError(p))
          return p;
      }
      let y;
      if (o.obj && p && (y = e.enterObject()), p) {
        if (o.explicit !== null) {
          let x = this._decodeTag(e, o.explicit);
          if (e.isError(x))
            return x;
          e = x;
        }
        let M = e.offset;
        if (o.use === null && o.choice === null) {
          let x;
          o.any && (x = e.save());
          let S = this._decodeTag(e, o.implicit !== null ? o.implicit : o.tag, o.any);
          if (e.isError(S))
            return S;
          o.any ? f = e.raw(x) : e = S;
        }
        if (r && r.track && o.tag !== null && r.track(e.path(), M, e.length, "tagged"), r && r.track && o.tag !== null && r.track(e.path(), e.offset, e.length, "content"), o.any || (o.choice === null ? f = this._decodeGeneric(o.tag, e, r) : f = this._decodeChoice(e, r)), e.isError(f))
          return f;
        if (!o.any && o.choice === null && o.children !== null && o.children.forEach(function(S) {
          S._decode(e, r);
        }), o.contains && (o.tag === "octstr" || o.tag === "bitstr")) {
          let x = new uB(f);
          f = this._getUse(o.contains, e._reporterState.obj)._decode(x, r);
        }
      }
      return o.obj && p && (f = e.leaveObject(y)), o.key !== null && (f !== null || p === true) ? e.leaveKey(m, o.key, f) : m !== null && e.exitKey(m), f;
    };
    Ue.prototype._decodeGeneric = function(e, r, o) {
      let f = this._baseState;
      return e === "seq" || e === "set" ? null : e === "seqof" || e === "setof" ? this._decodeList(r, e, f.args[0], o) : /str$/.test(e) ? this._decodeStr(r, e, o) : e === "objid" && f.args ? this._decodeObjid(r, f.args[0], f.args[1], o) : e === "objid" ? this._decodeObjid(r, null, null, o) : e === "gentime" || e === "utctime" ? this._decodeTime(r, e, o) : e === "null_" ? this._decodeNull(r, o) : e === "bool" ? this._decodeBool(r, o) : e === "objDesc" ? this._decodeStr(r, e, o) : e === "int" || e === "enum" ? this._decodeInt(r, f.args && f.args[0], o) : f.use !== null ? this._getUse(f.use, r._reporterState.obj)._decode(r, o) : r.error("unknown tag: " + e);
    };
    Ue.prototype._getUse = function(e, r) {
      let o = this._baseState;
      return o.useDecoder = this._use(e, r), Qt(o.useDecoder._baseState.parent === null), o.useDecoder = o.useDecoder._baseState.children[0], o.implicit !== o.useDecoder._baseState.implicit && (o.useDecoder = o.useDecoder.clone(), o.useDecoder._baseState.implicit = o.implicit), o.useDecoder;
    };
    Ue.prototype._decodeChoice = function(e, r) {
      let o = this._baseState, f = null, p = false;
      return Object.keys(o.choice).some(function(m) {
        let y = e.save(), M = o.choice[m];
        try {
          let x = M._decode(e, r);
          if (e.isError(x))
            return false;
          f = { type: m, value: x }, p = true;
        } catch {
          return e.restore(y), false;
        }
        return true;
      }, this), p ? f : e.error("Choice not matched");
    };
    Ue.prototype._createEncoderBuffer = function(e) {
      return new hB(e, this.reporter);
    };
    Ue.prototype._encode = function(e, r, o) {
      let f = this._baseState;
      if (f.default !== null && f.default === e)
        return;
      let p = this._encodeValue(e, r, o);
      if (p !== undefined && !this._skipDefault(p, r, o))
        return p;
    };
    Ue.prototype._encodeValue = function(e, r, o) {
      let f = this._baseState;
      if (f.parent === null)
        return f.children[0]._encode(e, r || new sB);
      let p = null;
      if (this.reporter = r, f.optional && e === undefined)
        if (f.default !== null)
          e = f.default;
        else
          return;
      let m = null, y = false;
      if (f.any)
        p = this._createEncoderBuffer(e);
      else if (f.choice)
        p = this._encodeChoice(e, r);
      else if (f.contains)
        m = this._getUse(f.contains, o)._encode(e, r), y = true;
      else if (f.children)
        m = f.children.map(function(M) {
          if (M._baseState.tag === "null_")
            return M._encode(null, r, e);
          if (M._baseState.key === null)
            return r.error("Child should have a key");
          let x = r.enterKey(M._baseState.key);
          if (typeof e != "object")
            return r.error("Child expected, but input is not object");
          let S = M._encode(e[M._baseState.key], r, e);
          return r.leaveKey(x), S;
        }, this).filter(function(M) {
          return M;
        }), m = this._createEncoderBuffer(m);
      else if (f.tag === "seqof" || f.tag === "setof") {
        if (!(f.args && f.args.length === 1))
          return r.error("Too many args for : " + f.tag);
        if (!Array.isArray(e))
          return r.error("seqof/setof, but data is not Array");
        let M = this.clone();
        M._baseState.implicit = null, m = this._createEncoderBuffer(e.map(function(x) {
          let S = this._baseState;
          return this._getUse(S.args[0], e)._encode(x, r);
        }, M));
      } else
        f.use !== null ? p = this._getUse(f.use, o)._encode(e, r) : (m = this._encodePrimitive(f.tag, e), y = true);
      if (!f.any && f.choice === null) {
        let M = f.implicit !== null ? f.implicit : f.tag, x = f.implicit === null ? "universal" : "context";
        M === null ? f.use === null && r.error("Tag could be omitted only for .use()") : f.use === null && (p = this._encodeComposite(M, y, x, m));
      }
      return f.explicit !== null && (p = this._encodeComposite(f.explicit, false, "context", p)), p;
    };
    Ue.prototype._encodeChoice = function(e, r) {
      let o = this._baseState, f = o.choice[e.type];
      return f || Qt(false, e.type + " not found in " + JSON.stringify(Object.keys(o.choice))), f._encode(e.value, r);
    };
    Ue.prototype._encodePrimitive = function(e, r) {
      let o = this._baseState;
      if (/str$/.test(e))
        return this._encodeStr(r, e);
      if (e === "objid" && o.args)
        return this._encodeObjid(r, o.reverseArgs[0], o.args[1]);
      if (e === "objid")
        return this._encodeObjid(r, null, null);
      if (e === "gentime" || e === "utctime")
        return this._encodeTime(r, e);
      if (e === "null_")
        return this._encodeNull();
      if (e === "int" || e === "enum")
        return this._encodeInt(r, o.args && o.reverseArgs[0]);
      if (e === "bool")
        return this._encodeBool(r);
      if (e === "objDesc")
        return this._encodeStr(r, e);
      throw new Error("Unsupported tag: " + e);
    };
    Ue.prototype._isNumstr = function(e) {
      return /^[0-9 ]*$/.test(e);
    };
    Ue.prototype._isPrintstr = function(e) {
      return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e);
    };
  });
  c0 = T((Wn) => {
    function Cy(t) {
      let e = {};
      return Object.keys(t).forEach(function(r) {
        (r | 0) == r && (r = r | 0);
        let o = t[r];
        e[o] = r;
      }), e;
    }
    Wn.tagClass = { 0: "universal", 1: "application", 2: "context", 3: "private" };
    Wn.tagClassByName = Cy(Wn.tagClass);
    Wn.tag = { 0: "end", 1: "bool", 2: "int", 3: "bitstr", 4: "octstr", 5: "null_", 6: "objid", 7: "objDesc", 8: "external", 9: "real", 10: "enum", 11: "embed", 12: "utf8str", 13: "relativeOid", 16: "seq", 17: "set", 18: "numstr", 19: "printstr", 20: "t61str", 21: "videostr", 22: "ia5str", 23: "utctime", 24: "gentime", 25: "graphstr", 26: "iso646str", 27: "genstr", 28: "unistr", 29: "charstr", 30: "bmpstr" };
    Wn.tagByName = Cy(Wn.tag);
  });
  nd = T((tL, Uy) => {
    var pB = Ie(), Ii = h0().Buffer, Oy = d0(), id = c0();
    function Fy(t) {
      this.enc = "der", this.name = t.name, this.entity = t, this.tree = new Ur, this.tree._init(t.body);
    }
    Uy.exports = Fy;
    Fy.prototype.encode = function(e, r) {
      return this.tree._encode(e, r).join();
    };
    function Ur(t) {
      Oy.call(this, "der", t);
    }
    pB(Ur, Oy);
    Ur.prototype._encodeComposite = function(e, r, o, f) {
      let p = vB(e, r, o, this.reporter);
      if (f.length < 128) {
        let M = Ii.alloc(2);
        return M[0] = p, M[1] = f.length, this._createEncoderBuffer([M, f]);
      }
      let m = 1;
      for (let M = f.length;M >= 256; M >>= 8)
        m++;
      let y = Ii.alloc(1 + 1 + m);
      y[0] = p, y[1] = 128 | m;
      for (let M = 1 + m, x = f.length;x > 0; M--, x >>= 8)
        y[M] = x & 255;
      return this._createEncoderBuffer([y, f]);
    };
    Ur.prototype._encodeStr = function(e, r) {
      if (r === "bitstr")
        return this._createEncoderBuffer([e.unused | 0, e.data]);
      if (r === "bmpstr") {
        let o = Ii.alloc(e.length * 2);
        for (let f = 0;f < e.length; f++)
          o.writeUInt16BE(e.charCodeAt(f), f * 2);
        return this._createEncoderBuffer(o);
      } else
        return r === "numstr" ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : r === "printstr" ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(r) ? this._createEncoderBuffer(e) : r === "objDesc" ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + r + " unsupported");
    };
    Ur.prototype._encodeObjid = function(e, r, o) {
      if (typeof e == "string") {
        if (!r)
          return this.reporter.error("string objid given, but no values map found");
        if (!r.hasOwnProperty(e))
          return this.reporter.error("objid not found in values map");
        e = r[e].split(/[\s.]+/g);
        for (let y = 0;y < e.length; y++)
          e[y] |= 0;
      } else if (Array.isArray(e)) {
        e = e.slice();
        for (let y = 0;y < e.length; y++)
          e[y] |= 0;
      }
      if (!Array.isArray(e))
        return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
      if (!o) {
        if (e[1] >= 40)
          return this.reporter.error("Second objid identifier OOB");
        e.splice(0, 2, e[0] * 40 + e[1]);
      }
      let f = 0;
      for (let y = 0;y < e.length; y++) {
        let M = e[y];
        for (f++;M >= 128; M >>= 7)
          f++;
      }
      let p = Ii.alloc(f), m = p.length - 1;
      for (let y = e.length - 1;y >= 0; y--) {
        let M = e[y];
        for (p[m--] = M & 127;(M >>= 7) > 0; )
          p[m--] = 128 | M & 127;
      }
      return this._createEncoderBuffer(p);
    };
    function qr(t) {
      return t < 10 ? "0" + t : t;
    }
    Ur.prototype._encodeTime = function(e, r) {
      let o, f = new Date(e);
      return r === "gentime" ? o = [qr(f.getUTCFullYear()), qr(f.getUTCMonth() + 1), qr(f.getUTCDate()), qr(f.getUTCHours()), qr(f.getUTCMinutes()), qr(f.getUTCSeconds()), "Z"].join("") : r === "utctime" ? o = [qr(f.getUTCFullYear() % 100), qr(f.getUTCMonth() + 1), qr(f.getUTCDate()), qr(f.getUTCHours()), qr(f.getUTCMinutes()), qr(f.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + r + " time is not supported yet"), this._encodeStr(o, "octstr");
    };
    Ur.prototype._encodeNull = function() {
      return this._createEncoderBuffer("");
    };
    Ur.prototype._encodeInt = function(e, r) {
      if (typeof e == "string") {
        if (!r)
          return this.reporter.error("String int or enum given, but no values map");
        if (!r.hasOwnProperty(e))
          return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
        e = r[e];
      }
      if (typeof e != "number" && !Ii.isBuffer(e)) {
        let p = e.toArray();
        !e.sign && p[0] & 128 && p.unshift(0), e = Ii.from(p);
      }
      if (Ii.isBuffer(e)) {
        let p = e.length;
        e.length === 0 && p++;
        let m = Ii.alloc(p);
        return e.copy(m), e.length === 0 && (m[0] = 0), this._createEncoderBuffer(m);
      }
      if (e < 128)
        return this._createEncoderBuffer(e);
      if (e < 256)
        return this._createEncoderBuffer([0, e]);
      let o = 1;
      for (let p = e;p >= 256; p >>= 8)
        o++;
      let f = new Array(o);
      for (let p = f.length - 1;p >= 0; p--)
        f[p] = e & 255, e >>= 8;
      return f[0] & 128 && f.unshift(0), this._createEncoderBuffer(Ii.from(f));
    };
    Ur.prototype._encodeBool = function(e) {
      return this._createEncoderBuffer(e ? 255 : 0);
    };
    Ur.prototype._use = function(e, r) {
      return typeof e == "function" && (e = e(r)), e._getEncoder("der").tree;
    };
    Ur.prototype._skipDefault = function(e, r, o) {
      let f = this._baseState, p;
      if (f.default === null)
        return false;
      let m = e.join();
      if (f.defaultBuffer === undefined && (f.defaultBuffer = this._encodeValue(f.default, r, o).join()), m.length !== f.defaultBuffer.length)
        return false;
      for (p = 0;p < m.length; p++)
        if (m[p] !== f.defaultBuffer[p])
          return false;
      return true;
    };
    function vB(t, e, r, o) {
      let f;
      if (t === "seqof" ? t = "seq" : t === "setof" && (t = "set"), id.tagByName.hasOwnProperty(t))
        f = id.tagByName[t];
      else if (typeof t == "number" && (t | 0) === t)
        f = t;
      else
        return o.error("Unknown tag: " + t);
      return f >= 31 ? o.error("Multi-octet tag encoding unsupported") : (e || (f |= 32), f |= id.tagClassByName[r || "universal"] << 6, f);
    }
  });
  Hy = T((rL, zy) => {
    var bB = Ie(), fd = nd();
    function ad(t) {
      fd.call(this, t), this.enc = "pem";
    }
    bB(ad, fd);
    zy.exports = ad;
    ad.prototype.encode = function(e, r) {
      let f = fd.prototype.encode.call(this, e).toString("base64"), p = ["-----BEGIN " + r.label + "-----"];
      for (let m = 0;m < f.length; m += 64)
        p.push(f.slice(m, m + 64));
      return p.push("-----END " + r.label + "-----"), p.join(`
`);
    };
  });
  od = T((Ky) => {
    var Wy = Ky;
    Wy.der = nd();
    Wy.pem = Hy();
  });
  hd = T((nL, Yy) => {
    var mB = Ie(), gB = td(), jy = Kf().DecoderBuffer, Vy = d0(), Zy = c0();
    function $y(t) {
      this.enc = "der", this.name = t.name, this.entity = t, this.tree = new sr, this.tree._init(t.body);
    }
    Yy.exports = $y;
    $y.prototype.decode = function(e, r) {
      return jy.isDecoderBuffer(e) || (e = new jy(e, r)), this.tree._decode(e, r);
    };
    function sr(t) {
      Vy.call(this, "der", t);
    }
    mB(sr, Vy);
    sr.prototype._peekTag = function(e, r, o) {
      if (e.isEmpty())
        return false;
      let f = e.save(), p = sd(e, 'Failed to peek tag: "' + r + '"');
      return e.isError(p) ? p : (e.restore(f), p.tag === r || p.tagStr === r || p.tagStr + "of" === r || o);
    };
    sr.prototype._decodeTag = function(e, r, o) {
      let f = sd(e, 'Failed to decode tag of "' + r + '"');
      if (e.isError(f))
        return f;
      let p = Gy(e, f.primitive, 'Failed to get length of "' + r + '"');
      if (e.isError(p))
        return p;
      if (!o && f.tag !== r && f.tagStr !== r && f.tagStr + "of" !== r)
        return e.error('Failed to match tag: "' + r + '"');
      if (f.primitive || p !== null)
        return e.skip(p, 'Failed to match body of: "' + r + '"');
      let m = e.save(), y = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
      return e.isError(y) ? y : (p = e.offset - m.offset, e.restore(m), e.skip(p, 'Failed to match body of: "' + r + '"'));
    };
    sr.prototype._skipUntilEnd = function(e, r) {
      for (;; ) {
        let o = sd(e, r);
        if (e.isError(o))
          return o;
        let f = Gy(e, o.primitive, r);
        if (e.isError(f))
          return f;
        let p;
        if (o.primitive || f !== null ? p = e.skip(f) : p = this._skipUntilEnd(e, r), e.isError(p))
          return p;
        if (o.tagStr === "end")
          break;
      }
    };
    sr.prototype._decodeList = function(e, r, o, f) {
      let p = [];
      for (;!e.isEmpty(); ) {
        let m = this._peekTag(e, "end");
        if (e.isError(m))
          return m;
        let y = o.decode(e, "der", f);
        if (e.isError(y) && m)
          break;
        p.push(y);
      }
      return p;
    };
    sr.prototype._decodeStr = function(e, r) {
      if (r === "bitstr") {
        let o = e.readUInt8();
        return e.isError(o) ? o : { unused: o, data: e.raw() };
      } else if (r === "bmpstr") {
        let o = e.raw();
        if (o.length % 2 === 1)
          return e.error("Decoding of string type: bmpstr length mismatch");
        let f = "";
        for (let p = 0;p < o.length / 2; p++)
          f += String.fromCharCode(o.readUInt16BE(p * 2));
        return f;
      } else if (r === "numstr") {
        let o = e.raw().toString("ascii");
        return this._isNumstr(o) ? o : e.error("Decoding of string type: numstr unsupported characters");
      } else {
        if (r === "octstr")
          return e.raw();
        if (r === "objDesc")
          return e.raw();
        if (r === "printstr") {
          let o = e.raw().toString("ascii");
          return this._isPrintstr(o) ? o : e.error("Decoding of string type: printstr unsupported characters");
        } else
          return /str$/.test(r) ? e.raw().toString() : e.error("Decoding of string type: " + r + " unsupported");
      }
    };
    sr.prototype._decodeObjid = function(e, r, o) {
      let f, p = [], m = 0, y = 0;
      for (;!e.isEmpty(); )
        y = e.readUInt8(), m <<= 7, m |= y & 127, (y & 128) === 0 && (p.push(m), m = 0);
      y & 128 && p.push(m);
      let M = p[0] / 40 | 0, x = p[0] % 40;
      if (o ? f = p : f = [M, x].concat(p.slice(1)), r) {
        let S = r[f.join(" ")];
        S === undefined && (S = r[f.join(".")]), S !== undefined && (f = S);
      }
      return f;
    };
    sr.prototype._decodeTime = function(e, r) {
      let o = e.raw().toString(), f, p, m, y, M, x;
      if (r === "gentime")
        f = o.slice(0, 4) | 0, p = o.slice(4, 6) | 0, m = o.slice(6, 8) | 0, y = o.slice(8, 10) | 0, M = o.slice(10, 12) | 0, x = o.slice(12, 14) | 0;
      else if (r === "utctime")
        f = o.slice(0, 2) | 0, p = o.slice(2, 4) | 0, m = o.slice(4, 6) | 0, y = o.slice(6, 8) | 0, M = o.slice(8, 10) | 0, x = o.slice(10, 12) | 0, f < 70 ? f = 2000 + f : f = 1900 + f;
      else
        return e.error("Decoding " + r + " time is not supported yet");
      return Date.UTC(f, p - 1, m, y, M, x, 0);
    };
    sr.prototype._decodeNull = function() {
      return null;
    };
    sr.prototype._decodeBool = function(e) {
      let r = e.readUInt8();
      return e.isError(r) ? r : r !== 0;
    };
    sr.prototype._decodeInt = function(e, r) {
      let o = e.raw(), f = new gB(o);
      return r && (f = r[f.toString(10)] || f), f;
    };
    sr.prototype._use = function(e, r) {
      return typeof e == "function" && (e = e(r)), e._getDecoder("der").tree;
    };
    function sd(t, e) {
      let r = t.readUInt8(e);
      if (t.isError(r))
        return r;
      let o = Zy.tagClass[r >> 6], f = (r & 32) === 0;
      if ((r & 31) === 31) {
        let m = r;
        for (r = 0;(m & 128) === 128; ) {
          if (m = t.readUInt8(e), t.isError(m))
            return m;
          r <<= 7, r |= m & 127;
        }
      } else
        r &= 31;
      let p = Zy.tag[r];
      return { cls: o, primitive: f, tag: r, tagStr: p };
    }
    function Gy(t, e, r) {
      let o = t.readUInt8(r);
      if (t.isError(o))
        return o;
      if (!e && o === 128)
        return null;
      if ((o & 128) === 0)
        return o;
      let f = o & 127;
      if (f > 4)
        return t.error("length octect is too long");
      o = 0;
      for (let p = 0;p < f; p++) {
        o <<= 8;
        let m = t.readUInt8(r);
        if (t.isError(m))
          return m;
        o |= m;
      }
      return o;
    }
  });
  Jy = T((fL, Xy) => {
    var yB = Ie(), wB = h0().Buffer, ud = hd();
    function ld(t) {
      ud.call(this, t), this.enc = "pem";
    }
    yB(ld, ud);
    Xy.exports = ld;
    ld.prototype.decode = function(e, r) {
      let o = e.toString().split(/[\r\n]+/g), f = r.label.toUpperCase(), p = /^-----(BEGIN|END) ([^-]+)-----$/, m = -1, y = -1;
      for (let S = 0;S < o.length; S++) {
        let E = o[S].match(p);
        if (E !== null && E[2] === f)
          if (m === -1) {
            if (E[1] !== "BEGIN")
              break;
            m = S;
          } else {
            if (E[1] !== "END")
              break;
            y = S;
            break;
          }
      }
      if (m === -1 || y === -1)
        throw new Error("PEM section not found for: " + f);
      let M = o.slice(m + 1, y).join("");
      M.replace(/[^a-z0-9+/=]+/gi, "");
      let x = wB.from(M, "base64");
      return ud.prototype.decode.call(this, x, r);
    };
  });
  dd = T((e3) => {
    var Qy = e3;
    Qy.der = hd();
    Qy.pem = Jy();
  });
  r3 = T((t3) => {
    var MB = od(), _B = dd(), xB = Ie(), SB = t3;
    SB.define = function(e, r) {
      return new jf(e, r);
    };
    function jf(t, e) {
      this.name = t, this.body = e, this.decoders = {}, this.encoders = {};
    }
    jf.prototype._createNamed = function(e) {
      let r = this.name;
      function o(f) {
        this._initNamed(f, r);
      }
      return xB(o, e), o.prototype._initNamed = function(p, m) {
        e.call(this, p, m);
      }, new o(this);
    };
    jf.prototype._getDecoder = function(e) {
      return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(_B[e])), this.decoders[e];
    };
    jf.prototype.decode = function(e, r, o) {
      return this._getDecoder(r).decode(e, o);
    };
    jf.prototype._getEncoder = function(e) {
      return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(MB[e])), this.encoders[e];
    };
    jf.prototype.encode = function(e, r, o) {
      return this._getEncoder(r).encode(e, o);
    };
  });
  n3 = T((i3) => {
    var p0 = i3;
    p0.Reporter = u0().Reporter;
    p0.DecoderBuffer = Kf().DecoderBuffer;
    p0.EncoderBuffer = Kf().EncoderBuffer;
    p0.Node = d0();
  });
  o3 = T((a3) => {
    var f3 = a3;
    f3._reverse = function(e) {
      let r = {};
      return Object.keys(e).forEach(function(o) {
        (o | 0) == o && (o = o | 0);
        let f = e[o];
        r[f] = o;
      }), r;
    };
    f3.der = c0();
  });
  cd = T((s3) => {
    var Zf = s3;
    Zf.bignum = td();
    Zf.define = r3().define;
    Zf.base = n3();
    Zf.constants = o3();
    Zf.decoders = dd();
    Zf.encoders = od();
  });
  d3 = T((lL, l3) => {
    var zr = cd(), h3 = zr.define("Time", function() {
      this.choice({ utcTime: this.utctime(), generalTime: this.gentime() });
    }), EB = zr.define("AttributeTypeValue", function() {
      this.seq().obj(this.key("type").objid(), this.key("value").any());
    }), pd = zr.define("AlgorithmIdentifier", function() {
      this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional());
    }), AB = zr.define("SubjectPublicKeyInfo", function() {
      this.seq().obj(this.key("algorithm").use(pd), this.key("subjectPublicKey").bitstr());
    }), RB = zr.define("RelativeDistinguishedName", function() {
      this.setof(EB);
    }), BB = zr.define("RDNSequence", function() {
      this.seqof(RB);
    }), u3 = zr.define("Name", function() {
      this.choice({ rdnSequence: this.use(BB) });
    }), qB = zr.define("Validity", function() {
      this.seq().obj(this.key("notBefore").use(h3), this.key("notAfter").use(h3));
    }), IB = zr.define("Extension", function() {
      this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(false), this.key("extnValue").octstr());
    }), TB = zr.define("TBSCertificate", function() {
      this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(pd), this.key("issuer").use(u3), this.key("validity").use(qB), this.key("subject").use(u3), this.key("subjectPublicKeyInfo").use(AB), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(IB).optional());
    }), kB = zr.define("X509Certificate", function() {
      this.seq().obj(this.key("tbsCertificate").use(TB), this.key("signatureAlgorithm").use(pd), this.key("signatureValue").bitstr());
    });
    l3.exports = kB;
  });
  p3 = T((Wr) => {
    var Hr = cd();
    Wr.certificate = d3();
    var LB = Hr.define("RSAPrivateKey", function() {
      this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int());
    });
    Wr.RSAPrivateKey = LB;
    var NB = Hr.define("RSAPublicKey", function() {
      this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
    });
    Wr.RSAPublicKey = NB;
    var DB = Hr.define("SubjectPublicKeyInfo", function() {
      this.seq().obj(this.key("algorithm").use(c3), this.key("subjectPublicKey").bitstr());
    });
    Wr.PublicKey = DB;
    var c3 = Hr.define("AlgorithmIdentifier", function() {
      this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional());
    }), PB = Hr.define("PrivateKeyInfo", function() {
      this.seq().obj(this.key("version").int(), this.key("algorithm").use(c3), this.key("subjectPrivateKey").octstr());
    });
    Wr.PrivateKey = PB;
    var CB = Hr.define("EncryptedPrivateKeyInfo", function() {
      this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr());
    });
    Wr.EncryptedPrivateKey = CB;
    var OB = Hr.define("DSAPrivateKey", function() {
      this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int());
    });
    Wr.DSAPrivateKey = OB;
    Wr.DSAparam = Hr.define("DSAparam", function() {
      this.int();
    });
    var FB = Hr.define("ECPrivateKey", function() {
      this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(UB), this.key("publicKey").optional().explicit(1).bitstr());
    });
    Wr.ECPrivateKey = FB;
    var UB = Hr.define("ECParameters", function() {
      this.choice({ namedCurve: this.objid() });
    });
    Wr.signature = Hr.define("signature", function() {
      this.seq().obj(this.key("r").int(), this.key("s").int());
    });
  });
  v3 = T((cL, zB) => {
    zB.exports = { "2.16.840.1.101.3.4.1.1": "aes-128-ecb", "2.16.840.1.101.3.4.1.2": "aes-128-cbc", "2.16.840.1.101.3.4.1.3": "aes-128-ofb", "2.16.840.1.101.3.4.1.4": "aes-128-cfb", "2.16.840.1.101.3.4.1.21": "aes-192-ecb", "2.16.840.1.101.3.4.1.22": "aes-192-cbc", "2.16.840.1.101.3.4.1.23": "aes-192-ofb", "2.16.840.1.101.3.4.1.24": "aes-192-cfb", "2.16.840.1.101.3.4.1.41": "aes-256-ecb", "2.16.840.1.101.3.4.1.42": "aes-256-cbc", "2.16.840.1.101.3.4.1.43": "aes-256-ofb", "2.16.840.1.101.3.4.1.44": "aes-256-cfb" };
  });
  m3 = T((pL, b3) => {
    var HB = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m, WB = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m, KB = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m, jB = Ba(), ZB = Es(), v0 = Te().Buffer;
    b3.exports = function(t, e) {
      var r = t.toString(), o = r.match(HB), f;
      if (o) {
        var m = "aes" + o[1], y = v0.from(o[2], "hex"), M = v0.from(o[3].replace(/[\r\n]/g, ""), "base64"), x = jB(e, y.slice(0, 8), parseInt(o[1], 10)).key, S = [], E = ZB.createDecipheriv(m, x, y);
        S.push(E.update(M)), S.push(E.final()), f = v0.concat(S);
      } else {
        var p = r.match(KB);
        f = v0.from(p[2].replace(/[\r\n]/g, ""), "base64");
      }
      var B = r.match(WB)[1];
      return { tag: B, data: f };
    };
  });
  Ha = T((vL, y3) => {
    var fr = p3(), VB = v3(), $B = m3(), GB = Es(), YB = Iu(), vd = Te().Buffer;
    y3.exports = g3;
    function g3(t) {
      var e;
      typeof t == "object" && !vd.isBuffer(t) && (e = t.passphrase, t = t.key), typeof t == "string" && (t = vd.from(t));
      var r = $B(t, e), o = r.tag, f = r.data, p, m;
      switch (o) {
        case "CERTIFICATE":
          m = fr.certificate.decode(f, "der").tbsCertificate.subjectPublicKeyInfo;
        case "PUBLIC KEY":
          switch (m || (m = fr.PublicKey.decode(f, "der")), p = m.algorithm.algorithm.join("."), p) {
            case "1.2.840.113549.1.1.1":
              return fr.RSAPublicKey.decode(m.subjectPublicKey.data, "der");
            case "1.2.840.10045.2.1":
              return m.subjectPrivateKey = m.subjectPublicKey, { type: "ec", data: m };
            case "1.2.840.10040.4.1":
              return m.algorithm.params.pub_key = fr.DSAparam.decode(m.subjectPublicKey.data, "der"), { type: "dsa", data: m.algorithm.params };
            default:
              throw new Error("unknown key id " + p);
          }
        case "ENCRYPTED PRIVATE KEY":
          f = fr.EncryptedPrivateKey.decode(f, "der"), f = XB(f, e);
        case "PRIVATE KEY":
          switch (m = fr.PrivateKey.decode(f, "der"), p = m.algorithm.algorithm.join("."), p) {
            case "1.2.840.113549.1.1.1":
              return fr.RSAPrivateKey.decode(m.subjectPrivateKey, "der");
            case "1.2.840.10045.2.1":
              return { curve: m.algorithm.curve, privateKey: fr.ECPrivateKey.decode(m.subjectPrivateKey, "der").privateKey };
            case "1.2.840.10040.4.1":
              return m.algorithm.params.priv_key = fr.DSAparam.decode(m.subjectPrivateKey, "der"), { type: "dsa", params: m.algorithm.params };
            default:
              throw new Error("unknown key id " + p);
          }
        case "RSA PUBLIC KEY":
          return fr.RSAPublicKey.decode(f, "der");
        case "RSA PRIVATE KEY":
          return fr.RSAPrivateKey.decode(f, "der");
        case "DSA PRIVATE KEY":
          return { type: "dsa", params: fr.DSAPrivateKey.decode(f, "der") };
        case "EC PRIVATE KEY":
          return f = fr.ECPrivateKey.decode(f, "der"), { curve: f.parameters.value, privateKey: f.privateKey };
        default:
          throw new Error("unknown key type " + o);
      }
    }
    g3.signature = fr.signature;
    function XB(t, e) {
      var r = t.algorithm.decrypt.kde.kdeparams.salt, o = parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(), 10), f = VB[t.algorithm.decrypt.cipher.algo.join(".")], p = t.algorithm.decrypt.cipher.iv, m = t.subjectPrivateKey, y = parseInt(f.split("-")[1], 10) / 8, M = YB.pbkdf2Sync(e, r, o, y, "sha1"), x = GB.createDecipheriv(f, M, p), S = [];
      return S.push(x.update(m)), S.push(x.final()), vd.concat(S);
    }
  });
  bd = T((bL, JB) => {
    JB.exports = { "1.3.132.0.10": "secp256k1", "1.3.132.0.33": "p224", "1.2.840.10045.3.1.1": "p192", "1.2.840.10045.3.1.7": "p256", "1.3.132.0.34": "p384", "1.3.132.0.35": "p521" };
  });
  _3 = T((mL, m0) => {
    var Yt = Te().Buffer, Kn = wu(), QB = Ks(), eq = o0().ec, b0 = Ws(), tq = Ha(), rq = bd();
    function iq(t, e, r, o, f) {
      var p = tq(e);
      if (p.curve) {
        if (o !== "ecdsa" && o !== "ecdsa/rsa")
          throw new Error("wrong private key type");
        return nq(t, p);
      } else if (p.type === "dsa") {
        if (o !== "dsa")
          throw new Error("wrong private key type");
        return fq(t, p, r);
      } else if (o !== "rsa" && o !== "ecdsa/rsa")
        throw new Error("wrong private key type");
      t = Yt.concat([f, t]);
      for (var m = p.modulus.byteLength(), y = [0, 1];t.length + y.length + 1 < m; )
        y.push(255);
      y.push(0);
      for (var M = -1;++M < t.length; )
        y.push(t[M]);
      var x = QB(y, p);
      return x;
    }
    function nq(t, e) {
      var r = rq[e.curve.join(".")];
      if (!r)
        throw new Error("unknown curve " + e.curve.join("."));
      var o = new eq(r), f = o.keyFromPrivate(e.privateKey), p = f.sign(t);
      return Yt.from(p.toDER());
    }
    function fq(t, e, r) {
      for (var o = e.params.priv_key, f = e.params.p, p = e.params.q, m = e.params.g, y = new b0(0), M, x = md(t, p).mod(p), S = false, E = w3(o, p, t, r);S === false; )
        M = M3(p, E, r), y = sq(m, M, f, p), S = M.invm(p).imul(x.add(o.mul(y))).mod(p), S.cmpn(0) === 0 && (S = false, y = new b0(0));
      return aq(y, S);
    }
    function aq(t, e) {
      t = t.toArray(), e = e.toArray(), t[0] & 128 && (t = [0].concat(t)), e[0] & 128 && (e = [0].concat(e));
      var r = t.length + e.length + 4, o = [48, r, 2, t.length];
      return o = o.concat(t, [2, e.length], e), Yt.from(o);
    }
    function w3(t, e, r, o) {
      if (t = Yt.from(t.toArray()), t.length < e.byteLength()) {
        var f = Yt.alloc(e.byteLength() - t.length);
        t = Yt.concat([f, t]);
      }
      var p = r.length, m = oq(r, e), y = Yt.alloc(p);
      y.fill(1);
      var M = Yt.alloc(p);
      return M = Kn(o, M).update(y).update(Yt.from([0])).update(t).update(m).digest(), y = Kn(o, M).update(y).digest(), M = Kn(o, M).update(y).update(Yt.from([1])).update(t).update(m).digest(), y = Kn(o, M).update(y).digest(), { k: M, v: y };
    }
    function md(t, e) {
      var r = new b0(t), o = (t.length << 3) - e.bitLength();
      return o > 0 && r.ishrn(o), r;
    }
    function oq(t, e) {
      t = md(t, e), t = t.mod(e);
      var r = Yt.from(t.toArray());
      if (r.length < e.byteLength()) {
        var o = Yt.alloc(e.byteLength() - r.length);
        r = Yt.concat([o, r]);
      }
      return r;
    }
    function M3(t, e, r) {
      var o, f;
      do {
        for (o = Yt.alloc(0);o.length * 8 < t.bitLength(); )
          e.v = Kn(r, e.k).update(e.v).digest(), o = Yt.concat([o, e.v]);
        f = md(o, t), e.k = Kn(r, e.k).update(e.v).update(Yt.from([0])).digest(), e.v = Kn(r, e.k).update(e.v).digest();
      } while (f.cmp(t) !== -1);
      return f;
    }
    function sq(t, e, r, o) {
      return t.toRed(b0.mont(r)).redPow(e).fromRed().mod(o);
    }
    m0.exports = iq;
    m0.exports.getKey = w3;
    m0.exports.makeKey = M3;
  });
  A3 = T((gL, E3) => {
    var gd = Te().Buffer, Wa = Ws(), hq = o0().ec, S3 = Ha(), uq = bd();
    function lq(t, e, r, o, f) {
      var p = S3(r);
      if (p.type === "ec") {
        if (o !== "ecdsa" && o !== "ecdsa/rsa")
          throw new Error("wrong public key type");
        return dq(t, e, p);
      } else if (p.type === "dsa") {
        if (o !== "dsa")
          throw new Error("wrong public key type");
        return cq(t, e, p);
      } else if (o !== "rsa" && o !== "ecdsa/rsa")
        throw new Error("wrong public key type");
      e = gd.concat([f, e]);
      for (var m = p.modulus.byteLength(), y = [1], M = 0;e.length + y.length + 2 < m; )
        y.push(255), M++;
      y.push(0);
      for (var x = -1;++x < e.length; )
        y.push(e[x]);
      y = gd.from(y);
      var S = Wa.mont(p.modulus);
      t = new Wa(t).toRed(S), t = t.redPow(new Wa(p.publicExponent)), t = gd.from(t.fromRed().toArray());
      var E = M < 8 ? 1 : 0;
      for (m = Math.min(t.length, y.length), t.length !== y.length && (E = 1), x = -1;++x < m; )
        E |= t[x] ^ y[x];
      return E === 0;
    }
    function dq(t, e, r) {
      var o = uq[r.data.algorithm.curve.join(".")];
      if (!o)
        throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
      var f = new hq(o), p = r.data.subjectPrivateKey.data;
      return f.verify(e, t, p);
    }
    function cq(t, e, r) {
      var o = r.data.p, f = r.data.q, p = r.data.g, m = r.data.pub_key, y = S3.signature.decode(t, "der"), M = y.s, x = y.r;
      x3(M, f), x3(x, f);
      var S = Wa.mont(o), E = M.invm(f), B = p.toRed(S).redPow(new Wa(e).mul(E).mod(f)).fromRed().mul(m.toRed(S).redPow(x.mul(E).mod(f)).fromRed()).mod(o).mod(f);
      return B.cmp(x) === 0;
    }
    function x3(t, e) {
      if (t.cmpn(0) <= 0)
        throw new Error("invalid sig");
      if (t.cmp(e) >= e)
        throw new Error("invalid sig");
    }
    E3.exports = lq;
  });
  k3 = T((yL, T3) => {
    var g0 = Te().Buffer, q3 = bf(), y0 = i2(), I3 = Ie(), pq = _3(), vq = A3(), jn = Mu();
    Object.keys(jn).forEach(function(t) {
      jn[t].id = g0.from(jn[t].id, "hex"), jn[t.toLowerCase()] = jn[t];
    });
    function Ka(t) {
      y0.Writable.call(this);
      var e = jn[t];
      if (!e)
        throw new Error("Unknown message digest");
      this._hashType = e.hash, this._hash = q3(e.hash), this._tag = e.id, this._signType = e.sign;
    }
    I3(Ka, y0.Writable);
    Ka.prototype._write = function(e, r, o) {
      this._hash.update(e), o();
    };
    Ka.prototype.update = function(e, r) {
      return typeof e == "string" && (e = g0.from(e, r)), this._hash.update(e), this;
    };
    Ka.prototype.sign = function(e, r) {
      this.end();
      var o = this._hash.digest(), f = pq(o, e, this._hashType, this._signType, this._tag);
      return r ? f.toString(r) : f;
    };
    function ja(t) {
      y0.Writable.call(this);
      var e = jn[t];
      if (!e)
        throw new Error("Unknown message digest");
      this._hash = q3(e.hash), this._tag = e.id, this._signType = e.sign;
    }
    I3(ja, y0.Writable);
    ja.prototype._write = function(e, r, o) {
      this._hash.update(e), o();
    };
    ja.prototype.update = function(e, r) {
      return typeof e == "string" && (e = g0.from(e, r)), this._hash.update(e), this;
    };
    ja.prototype.verify = function(e, r, o) {
      typeof r == "string" && (r = g0.from(r, o)), this.end();
      var f = this._hash.digest();
      return vq(r, f, e, this._signType, this._tag);
    };
    function R3(t) {
      return new Ka(t);
    }
    function B3(t) {
      return new ja(t);
    }
    T3.exports = { Sign: R3, Verify: B3, createSign: R3, createVerify: B3 };
  });
  N3 = T((L3, yd) => {
    (function(t, e) {
      function r(v, i) {
        if (!v)
          throw new Error(i || "Assertion failed");
      }
      function o(v, i) {
        v.super_ = i;
        var a = function() {
        };
        a.prototype = i.prototype, v.prototype = new a, v.prototype.constructor = v;
      }
      function f(v, i, a) {
        if (f.isBN(v))
          return v;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((i === "le" || i === "be") && (a = i, i = 10), this._init(v || 0, i || 10, a || "be"));
      }
      typeof t == "object" ? t.exports = f : e.BN = f, f.BN = f, f.wordSize = 26;
      var p;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? p = window.Buffer : p = ji().Buffer;
      } catch {
      }
      f.isBN = function(i) {
        return i instanceof f ? true : i !== null && typeof i == "object" && i.constructor.wordSize === f.wordSize && Array.isArray(i.words);
      }, f.max = function(i, a) {
        return i.cmp(a) > 0 ? i : a;
      }, f.min = function(i, a) {
        return i.cmp(a) < 0 ? i : a;
      }, f.prototype._init = function(i, a, h) {
        if (typeof i == "number")
          return this._initNumber(i, a, h);
        if (typeof i == "object")
          return this._initArray(i, a, h);
        a === "hex" && (a = 16), r(a === (a | 0) && a >= 2 && a <= 36), i = i.toString().replace(/\s+/g, "");
        var s = 0;
        i[0] === "-" && (s++, this.negative = 1), s < i.length && (a === 16 ? this._parseHex(i, s, h) : (this._parseBase(i, a, s), h === "le" && this._initArray(this.toArray(), a, h)));
      }, f.prototype._initNumber = function(i, a, h) {
        i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [i & 67108863, i / 67108864 & 67108863], this.length = 2) : (r(i < 9007199254740992), this.words = [i & 67108863, i / 67108864 & 67108863, 1], this.length = 3), h === "le" && this._initArray(this.toArray(), a, h);
      }, f.prototype._initArray = function(i, a, h) {
        if (r(typeof i.length == "number"), i.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u, c, b = 0;
        if (h === "be")
          for (s = i.length - 1, u = 0;s >= 0; s -= 3)
            c = i[s] | i[s - 1] << 8 | i[s - 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        else if (h === "le")
          for (s = 0, u = 0;s < i.length; s += 3)
            c = i[s] | i[s + 1] << 8 | i[s + 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        return this.strip();
      };
      function m(v, i) {
        var a = v.charCodeAt(i);
        return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
      }
      function y(v, i, a) {
        var h = m(v, a);
        return a - 1 >= i && (h |= m(v, a - 1) << 4), h;
      }
      f.prototype._parseHex = function(i, a, h) {
        this.length = Math.ceil((i.length - a) / 6), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u = 0, c = 0, b;
        if (h === "be")
          for (s = i.length - 1;s >= a; s -= 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        else {
          var l = i.length - a;
          for (s = l % 2 === 0 ? a + 1 : a;s < i.length; s += 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        }
        this.strip();
      };
      function M(v, i, a, h) {
        for (var s = 0, u = Math.min(v.length, a), c = i;c < u; c++) {
          var b = v.charCodeAt(c) - 48;
          s *= h, b >= 49 ? s += b - 49 + 10 : b >= 17 ? s += b - 17 + 10 : s += b;
        }
        return s;
      }
      f.prototype._parseBase = function(i, a, h) {
        this.words = [0], this.length = 1;
        for (var s = 0, u = 1;u <= 67108863; u *= a)
          s++;
        s--, u = u / a | 0;
        for (var c = i.length - h, b = c % s, l = Math.min(c, c - b) + h, n = 0, d = h;d < l; d += s)
          n = M(i, d, d + s, a), this.imuln(u), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        if (b !== 0) {
          var w = 1;
          for (n = M(i, d, i.length, a), d = 0;d < b; d++)
            w *= a;
          this.imuln(w), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        }
        this.strip();
      }, f.prototype.copy = function(i) {
        i.words = new Array(this.length);
        for (var a = 0;a < this.length; a++)
          i.words[a] = this.words[a];
        i.length = this.length, i.negative = this.negative, i.red = this.red;
      }, f.prototype.clone = function() {
        var i = new f(null);
        return this.copy(i), i;
      }, f.prototype._expand = function(i) {
        for (;this.length < i; )
          this.words[this.length++] = 0;
        return this;
      }, f.prototype.strip = function() {
        for (;this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, f.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, f.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      f.prototype.toString = function(i, a) {
        i = i || 10, a = a | 0 || 1;
        var h;
        if (i === 16 || i === "hex") {
          h = "";
          for (var s = 0, u = 0, c = 0;c < this.length; c++) {
            var b = this.words[c], l = ((b << s | u) & 16777215).toString(16);
            u = b >>> 24 - s & 16777215, u !== 0 || c !== this.length - 1 ? h = x[6 - l.length] + l + h : h = l + h, s += 2, s >= 26 && (s -= 26, c--);
          }
          for (u !== 0 && (h = u.toString(16) + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        if (i === (i | 0) && i >= 2 && i <= 36) {
          var n = S[i], d = E[i];
          h = "";
          var w = this.clone();
          for (w.negative = 0;!w.isZero(); ) {
            var g = w.modn(d).toString(i);
            w = w.idivn(d), w.isZero() ? h = g + h : h = x[n - g.length] + g + h;
          }
          for (this.isZero() && (h = "0" + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        r(false, "Base should be between 2 and 36");
      }, f.prototype.toNumber = function() {
        var i = this.words[0];
        return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
      }, f.prototype.toJSON = function() {
        return this.toString(16);
      }, f.prototype.toBuffer = function(i, a) {
        return r(typeof p < "u"), this.toArrayLike(p, i, a);
      }, f.prototype.toArray = function(i, a) {
        return this.toArrayLike(Array, i, a);
      }, f.prototype.toArrayLike = function(i, a, h) {
        var s = this.byteLength(), u = h || Math.max(1, s);
        r(s <= u, "byte array longer than desired length"), r(u > 0, "Requested array length <= 0"), this.strip();
        var c = a === "le", b = new i(u), l, n, d = this.clone();
        if (c) {
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[n] = l;
          for (;n < u; n++)
            b[n] = 0;
        } else {
          for (n = 0;n < u - s; n++)
            b[n] = 0;
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[u - n - 1] = l;
        }
        return b;
      }, Math.clz32 ? f.prototype._countBits = function(i) {
        return 32 - Math.clz32(i);
      } : f.prototype._countBits = function(i) {
        var a = i, h = 0;
        return a >= 4096 && (h += 13, a >>>= 13), a >= 64 && (h += 7, a >>>= 7), a >= 8 && (h += 4, a >>>= 4), a >= 2 && (h += 2, a >>>= 2), h + a;
      }, f.prototype._zeroBits = function(i) {
        if (i === 0)
          return 26;
        var a = i, h = 0;
        return (a & 8191) === 0 && (h += 13, a >>>= 13), (a & 127) === 0 && (h += 7, a >>>= 7), (a & 15) === 0 && (h += 4, a >>>= 4), (a & 3) === 0 && (h += 2, a >>>= 2), (a & 1) === 0 && h++, h;
      }, f.prototype.bitLength = function() {
        var i = this.words[this.length - 1], a = this._countBits(i);
        return (this.length - 1) * 26 + a;
      };
      function B(v) {
        for (var i = new Array(v.bitLength()), a = 0;a < i.length; a++) {
          var h = a / 26 | 0, s = a % 26;
          i[a] = (v.words[h] & 1 << s) >>> s;
        }
        return i;
      }
      f.prototype.zeroBits = function() {
        if (this.isZero())
          return 0;
        for (var i = 0, a = 0;a < this.length; a++) {
          var h = this._zeroBits(this.words[a]);
          if (i += h, h !== 26)
            break;
        }
        return i;
      }, f.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, f.prototype.toTwos = function(i) {
        return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
      }, f.prototype.fromTwos = function(i) {
        return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
      }, f.prototype.isNeg = function() {
        return this.negative !== 0;
      }, f.prototype.neg = function() {
        return this.clone().ineg();
      }, f.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, f.prototype.iuor = function(i) {
        for (;this.length < i.length; )
          this.words[this.length++] = 0;
        for (var a = 0;a < i.length; a++)
          this.words[a] = this.words[a] | i.words[a];
        return this.strip();
      }, f.prototype.ior = function(i) {
        return r((this.negative | i.negative) === 0), this.iuor(i);
      }, f.prototype.or = function(i) {
        return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
      }, f.prototype.uor = function(i) {
        return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
      }, f.prototype.iuand = function(i) {
        var a;
        this.length > i.length ? a = i : a = this;
        for (var h = 0;h < a.length; h++)
          this.words[h] = this.words[h] & i.words[h];
        return this.length = a.length, this.strip();
      }, f.prototype.iand = function(i) {
        return r((this.negative | i.negative) === 0), this.iuand(i);
      }, f.prototype.and = function(i) {
        return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
      }, f.prototype.uand = function(i) {
        return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
      }, f.prototype.iuxor = function(i) {
        var a, h;
        this.length > i.length ? (a = this, h = i) : (a = i, h = this);
        for (var s = 0;s < h.length; s++)
          this.words[s] = a.words[s] ^ h.words[s];
        if (this !== a)
          for (;s < a.length; s++)
            this.words[s] = a.words[s];
        return this.length = a.length, this.strip();
      }, f.prototype.ixor = function(i) {
        return r((this.negative | i.negative) === 0), this.iuxor(i);
      }, f.prototype.xor = function(i) {
        return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
      }, f.prototype.uxor = function(i) {
        return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
      }, f.prototype.inotn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = Math.ceil(i / 26) | 0, h = i % 26;
        this._expand(a), h > 0 && a--;
        for (var s = 0;s < a; s++)
          this.words[s] = ~this.words[s] & 67108863;
        return h > 0 && (this.words[s] = ~this.words[s] & 67108863 >> 26 - h), this.strip();
      }, f.prototype.notn = function(i) {
        return this.clone().inotn(i);
      }, f.prototype.setn = function(i, a) {
        r(typeof i == "number" && i >= 0);
        var h = i / 26 | 0, s = i % 26;
        return this._expand(h + 1), a ? this.words[h] = this.words[h] | 1 << s : this.words[h] = this.words[h] & ~(1 << s), this.strip();
      }, f.prototype.iadd = function(i) {
        var a;
        if (this.negative !== 0 && i.negative === 0)
          return this.negative = 0, a = this.isub(i), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && i.negative !== 0)
          return i.negative = 0, a = this.isub(i), i.negative = 1, a._normSign();
        var h, s;
        this.length > i.length ? (h = this, s = i) : (h = i, s = this);
        for (var u = 0, c = 0;c < s.length; c++)
          a = (h.words[c] | 0) + (s.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        for (;u !== 0 && c < h.length; c++)
          a = (h.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        if (this.length = h.length, u !== 0)
          this.words[this.length] = u, this.length++;
        else if (h !== this)
          for (;c < h.length; c++)
            this.words[c] = h.words[c];
        return this;
      }, f.prototype.add = function(i) {
        var a;
        return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, a = this.sub(i), i.negative ^= 1, a) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = i.sub(this), this.negative = 1, a) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
      }, f.prototype.isub = function(i) {
        if (i.negative !== 0) {
          i.negative = 0;
          var a = this.iadd(i);
          return i.negative = 1, a._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
        var h = this.cmp(i);
        if (h === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var s, u;
        h > 0 ? (s = this, u = i) : (s = i, u = this);
        for (var c = 0, b = 0;b < u.length; b++)
          a = (s.words[b] | 0) - (u.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        for (;c !== 0 && b < s.length; b++)
          a = (s.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        if (c === 0 && b < s.length && s !== this)
          for (;b < s.length; b++)
            this.words[b] = s.words[b];
        return this.length = Math.max(this.length, b), s !== this && (this.negative = 1), this.strip();
      }, f.prototype.sub = function(i) {
        return this.clone().isub(i);
      };
      function q(v, i, a) {
        a.negative = i.negative ^ v.negative;
        var h = v.length + i.length | 0;
        a.length = h, h = h - 1 | 0;
        var s = v.words[0] | 0, u = i.words[0] | 0, c = s * u, b = c & 67108863, l = c / 67108864 | 0;
        a.words[0] = b;
        for (var n = 1;n < h; n++) {
          for (var d = l >>> 26, w = l & 67108863, g = Math.min(n, i.length - 1), _ = Math.max(0, n - v.length + 1);_ <= g; _++) {
            var A = n - _ | 0;
            s = v.words[A] | 0, u = i.words[_] | 0, c = s * u + w, d += c / 67108864 | 0, w = c & 67108863;
          }
          a.words[n] = w | 0, l = d | 0;
        }
        return l !== 0 ? a.words[n] = l | 0 : a.length--, a.strip();
      }
      var L = function(i, a, h) {
        var s = i.words, u = a.words, c = h.words, b = 0, l, n, d, w = s[0] | 0, g = w & 8191, _ = w >>> 13, A = s[1] | 0, R = A & 8191, I = A >>> 13, Me = s[2] | 0, k = Me & 8191, D = Me >>> 13, nt = s[3] | 0, C = nt & 8191, O = nt >>> 13, vt = s[4] | 0, F = vt & 8191, U = vt >>> 13, bt = s[5] | 0, z = bt & 8191, H = bt >>> 13, mt = s[6] | 0, W = mt & 8191, K = mt >>> 13, gt = s[7] | 0, j = gt & 8191, Z = gt >>> 13, yt = s[8] | 0, V = yt & 8191, $ = yt >>> 13, wt = s[9] | 0, G = wt & 8191, Y = wt >>> 13, Mt = u[0] | 0, X = Mt & 8191, J = Mt >>> 13, _t = u[1] | 0, Q = _t & 8191, ee = _t >>> 13, xt = u[2] | 0, te = xt & 8191, re = xt >>> 13, St = u[3] | 0, ie = St & 8191, ne = St >>> 13, Et = u[4] | 0, fe = Et & 8191, ae = Et >>> 13, At = u[5] | 0, oe = At & 8191, se = At >>> 13, Rt = u[6] | 0, he = Rt & 8191, ue = Rt >>> 13, Bt = u[7] | 0, le = Bt & 8191, de = Bt >>> 13, qt = u[8] | 0, ce = qt & 8191, pe = qt >>> 13, It = u[9] | 0, ve = It & 8191, be = It >>> 13;
        h.negative = i.negative ^ a.negative, h.length = 19, l = Math.imul(g, X), n = Math.imul(g, J), n = n + Math.imul(_, X) | 0, d = Math.imul(_, J);
        var ft = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, l = Math.imul(R, X), n = Math.imul(R, J), n = n + Math.imul(I, X) | 0, d = Math.imul(I, J), l = l + Math.imul(g, Q) | 0, n = n + Math.imul(g, ee) | 0, n = n + Math.imul(_, Q) | 0, d = d + Math.imul(_, ee) | 0;
        var Be = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, l = Math.imul(k, X), n = Math.imul(k, J), n = n + Math.imul(D, X) | 0, d = Math.imul(D, J), l = l + Math.imul(R, Q) | 0, n = n + Math.imul(R, ee) | 0, n = n + Math.imul(I, Q) | 0, d = d + Math.imul(I, ee) | 0, l = l + Math.imul(g, te) | 0, n = n + Math.imul(g, re) | 0, n = n + Math.imul(_, te) | 0, d = d + Math.imul(_, re) | 0;
        var qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, l = Math.imul(C, X), n = Math.imul(C, J), n = n + Math.imul(O, X) | 0, d = Math.imul(O, J), l = l + Math.imul(k, Q) | 0, n = n + Math.imul(k, ee) | 0, n = n + Math.imul(D, Q) | 0, d = d + Math.imul(D, ee) | 0, l = l + Math.imul(R, te) | 0, n = n + Math.imul(R, re) | 0, n = n + Math.imul(I, te) | 0, d = d + Math.imul(I, re) | 0, l = l + Math.imul(g, ie) | 0, n = n + Math.imul(g, ne) | 0, n = n + Math.imul(_, ie) | 0, d = d + Math.imul(_, ne) | 0;
        var ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, l = Math.imul(F, X), n = Math.imul(F, J), n = n + Math.imul(U, X) | 0, d = Math.imul(U, J), l = l + Math.imul(C, Q) | 0, n = n + Math.imul(C, ee) | 0, n = n + Math.imul(O, Q) | 0, d = d + Math.imul(O, ee) | 0, l = l + Math.imul(k, te) | 0, n = n + Math.imul(k, re) | 0, n = n + Math.imul(D, te) | 0, d = d + Math.imul(D, re) | 0, l = l + Math.imul(R, ie) | 0, n = n + Math.imul(R, ne) | 0, n = n + Math.imul(I, ie) | 0, d = d + Math.imul(I, ne) | 0, l = l + Math.imul(g, fe) | 0, n = n + Math.imul(g, ae) | 0, n = n + Math.imul(_, fe) | 0, d = d + Math.imul(_, ae) | 0;
        var He = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, l = Math.imul(z, X), n = Math.imul(z, J), n = n + Math.imul(H, X) | 0, d = Math.imul(H, J), l = l + Math.imul(F, Q) | 0, n = n + Math.imul(F, ee) | 0, n = n + Math.imul(U, Q) | 0, d = d + Math.imul(U, ee) | 0, l = l + Math.imul(C, te) | 0, n = n + Math.imul(C, re) | 0, n = n + Math.imul(O, te) | 0, d = d + Math.imul(O, re) | 0, l = l + Math.imul(k, ie) | 0, n = n + Math.imul(k, ne) | 0, n = n + Math.imul(D, ie) | 0, d = d + Math.imul(D, ne) | 0, l = l + Math.imul(R, fe) | 0, n = n + Math.imul(R, ae) | 0, n = n + Math.imul(I, fe) | 0, d = d + Math.imul(I, ae) | 0, l = l + Math.imul(g, oe) | 0, n = n + Math.imul(g, se) | 0, n = n + Math.imul(_, oe) | 0, d = d + Math.imul(_, se) | 0;
        var We = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, l = Math.imul(W, X), n = Math.imul(W, J), n = n + Math.imul(K, X) | 0, d = Math.imul(K, J), l = l + Math.imul(z, Q) | 0, n = n + Math.imul(z, ee) | 0, n = n + Math.imul(H, Q) | 0, d = d + Math.imul(H, ee) | 0, l = l + Math.imul(F, te) | 0, n = n + Math.imul(F, re) | 0, n = n + Math.imul(U, te) | 0, d = d + Math.imul(U, re) | 0, l = l + Math.imul(C, ie) | 0, n = n + Math.imul(C, ne) | 0, n = n + Math.imul(O, ie) | 0, d = d + Math.imul(O, ne) | 0, l = l + Math.imul(k, fe) | 0, n = n + Math.imul(k, ae) | 0, n = n + Math.imul(D, fe) | 0, d = d + Math.imul(D, ae) | 0, l = l + Math.imul(R, oe) | 0, n = n + Math.imul(R, se) | 0, n = n + Math.imul(I, oe) | 0, d = d + Math.imul(I, se) | 0, l = l + Math.imul(g, he) | 0, n = n + Math.imul(g, ue) | 0, n = n + Math.imul(_, he) | 0, d = d + Math.imul(_, ue) | 0;
        var Ke = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, l = Math.imul(j, X), n = Math.imul(j, J), n = n + Math.imul(Z, X) | 0, d = Math.imul(Z, J), l = l + Math.imul(W, Q) | 0, n = n + Math.imul(W, ee) | 0, n = n + Math.imul(K, Q) | 0, d = d + Math.imul(K, ee) | 0, l = l + Math.imul(z, te) | 0, n = n + Math.imul(z, re) | 0, n = n + Math.imul(H, te) | 0, d = d + Math.imul(H, re) | 0, l = l + Math.imul(F, ie) | 0, n = n + Math.imul(F, ne) | 0, n = n + Math.imul(U, ie) | 0, d = d + Math.imul(U, ne) | 0, l = l + Math.imul(C, fe) | 0, n = n + Math.imul(C, ae) | 0, n = n + Math.imul(O, fe) | 0, d = d + Math.imul(O, ae) | 0, l = l + Math.imul(k, oe) | 0, n = n + Math.imul(k, se) | 0, n = n + Math.imul(D, oe) | 0, d = d + Math.imul(D, se) | 0, l = l + Math.imul(R, he) | 0, n = n + Math.imul(R, ue) | 0, n = n + Math.imul(I, he) | 0, d = d + Math.imul(I, ue) | 0, l = l + Math.imul(g, le) | 0, n = n + Math.imul(g, de) | 0, n = n + Math.imul(_, le) | 0, d = d + Math.imul(_, de) | 0;
        var je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, l = Math.imul(V, X), n = Math.imul(V, J), n = n + Math.imul($, X) | 0, d = Math.imul($, J), l = l + Math.imul(j, Q) | 0, n = n + Math.imul(j, ee) | 0, n = n + Math.imul(Z, Q) | 0, d = d + Math.imul(Z, ee) | 0, l = l + Math.imul(W, te) | 0, n = n + Math.imul(W, re) | 0, n = n + Math.imul(K, te) | 0, d = d + Math.imul(K, re) | 0, l = l + Math.imul(z, ie) | 0, n = n + Math.imul(z, ne) | 0, n = n + Math.imul(H, ie) | 0, d = d + Math.imul(H, ne) | 0, l = l + Math.imul(F, fe) | 0, n = n + Math.imul(F, ae) | 0, n = n + Math.imul(U, fe) | 0, d = d + Math.imul(U, ae) | 0, l = l + Math.imul(C, oe) | 0, n = n + Math.imul(C, se) | 0, n = n + Math.imul(O, oe) | 0, d = d + Math.imul(O, se) | 0, l = l + Math.imul(k, he) | 0, n = n + Math.imul(k, ue) | 0, n = n + Math.imul(D, he) | 0, d = d + Math.imul(D, ue) | 0, l = l + Math.imul(R, le) | 0, n = n + Math.imul(R, de) | 0, n = n + Math.imul(I, le) | 0, d = d + Math.imul(I, de) | 0, l = l + Math.imul(g, ce) | 0, n = n + Math.imul(g, pe) | 0, n = n + Math.imul(_, ce) | 0, d = d + Math.imul(_, pe) | 0;
        var Ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, X), n = Math.imul(G, J), n = n + Math.imul(Y, X) | 0, d = Math.imul(Y, J), l = l + Math.imul(V, Q) | 0, n = n + Math.imul(V, ee) | 0, n = n + Math.imul($, Q) | 0, d = d + Math.imul($, ee) | 0, l = l + Math.imul(j, te) | 0, n = n + Math.imul(j, re) | 0, n = n + Math.imul(Z, te) | 0, d = d + Math.imul(Z, re) | 0, l = l + Math.imul(W, ie) | 0, n = n + Math.imul(W, ne) | 0, n = n + Math.imul(K, ie) | 0, d = d + Math.imul(K, ne) | 0, l = l + Math.imul(z, fe) | 0, n = n + Math.imul(z, ae) | 0, n = n + Math.imul(H, fe) | 0, d = d + Math.imul(H, ae) | 0, l = l + Math.imul(F, oe) | 0, n = n + Math.imul(F, se) | 0, n = n + Math.imul(U, oe) | 0, d = d + Math.imul(U, se) | 0, l = l + Math.imul(C, he) | 0, n = n + Math.imul(C, ue) | 0, n = n + Math.imul(O, he) | 0, d = d + Math.imul(O, ue) | 0, l = l + Math.imul(k, le) | 0, n = n + Math.imul(k, de) | 0, n = n + Math.imul(D, le) | 0, d = d + Math.imul(D, de) | 0, l = l + Math.imul(R, ce) | 0, n = n + Math.imul(R, pe) | 0, n = n + Math.imul(I, ce) | 0, d = d + Math.imul(I, pe) | 0, l = l + Math.imul(g, ve) | 0, n = n + Math.imul(g, be) | 0, n = n + Math.imul(_, ve) | 0, d = d + Math.imul(_, be) | 0;
        var Ve = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, l = Math.imul(G, Q), n = Math.imul(G, ee), n = n + Math.imul(Y, Q) | 0, d = Math.imul(Y, ee), l = l + Math.imul(V, te) | 0, n = n + Math.imul(V, re) | 0, n = n + Math.imul($, te) | 0, d = d + Math.imul($, re) | 0, l = l + Math.imul(j, ie) | 0, n = n + Math.imul(j, ne) | 0, n = n + Math.imul(Z, ie) | 0, d = d + Math.imul(Z, ne) | 0, l = l + Math.imul(W, fe) | 0, n = n + Math.imul(W, ae) | 0, n = n + Math.imul(K, fe) | 0, d = d + Math.imul(K, ae) | 0, l = l + Math.imul(z, oe) | 0, n = n + Math.imul(z, se) | 0, n = n + Math.imul(H, oe) | 0, d = d + Math.imul(H, se) | 0, l = l + Math.imul(F, he) | 0, n = n + Math.imul(F, ue) | 0, n = n + Math.imul(U, he) | 0, d = d + Math.imul(U, ue) | 0, l = l + Math.imul(C, le) | 0, n = n + Math.imul(C, de) | 0, n = n + Math.imul(O, le) | 0, d = d + Math.imul(O, de) | 0, l = l + Math.imul(k, ce) | 0, n = n + Math.imul(k, pe) | 0, n = n + Math.imul(D, ce) | 0, d = d + Math.imul(D, pe) | 0, l = l + Math.imul(R, ve) | 0, n = n + Math.imul(R, be) | 0, n = n + Math.imul(I, ve) | 0, d = d + Math.imul(I, be) | 0;
        var $e = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, l = Math.imul(G, te), n = Math.imul(G, re), n = n + Math.imul(Y, te) | 0, d = Math.imul(Y, re), l = l + Math.imul(V, ie) | 0, n = n + Math.imul(V, ne) | 0, n = n + Math.imul($, ie) | 0, d = d + Math.imul($, ne) | 0, l = l + Math.imul(j, fe) | 0, n = n + Math.imul(j, ae) | 0, n = n + Math.imul(Z, fe) | 0, d = d + Math.imul(Z, ae) | 0, l = l + Math.imul(W, oe) | 0, n = n + Math.imul(W, se) | 0, n = n + Math.imul(K, oe) | 0, d = d + Math.imul(K, se) | 0, l = l + Math.imul(z, he) | 0, n = n + Math.imul(z, ue) | 0, n = n + Math.imul(H, he) | 0, d = d + Math.imul(H, ue) | 0, l = l + Math.imul(F, le) | 0, n = n + Math.imul(F, de) | 0, n = n + Math.imul(U, le) | 0, d = d + Math.imul(U, de) | 0, l = l + Math.imul(C, ce) | 0, n = n + Math.imul(C, pe) | 0, n = n + Math.imul(O, ce) | 0, d = d + Math.imul(O, pe) | 0, l = l + Math.imul(k, ve) | 0, n = n + Math.imul(k, be) | 0, n = n + Math.imul(D, ve) | 0, d = d + Math.imul(D, be) | 0;
        var Ge = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, l = Math.imul(G, ie), n = Math.imul(G, ne), n = n + Math.imul(Y, ie) | 0, d = Math.imul(Y, ne), l = l + Math.imul(V, fe) | 0, n = n + Math.imul(V, ae) | 0, n = n + Math.imul($, fe) | 0, d = d + Math.imul($, ae) | 0, l = l + Math.imul(j, oe) | 0, n = n + Math.imul(j, se) | 0, n = n + Math.imul(Z, oe) | 0, d = d + Math.imul(Z, se) | 0, l = l + Math.imul(W, he) | 0, n = n + Math.imul(W, ue) | 0, n = n + Math.imul(K, he) | 0, d = d + Math.imul(K, ue) | 0, l = l + Math.imul(z, le) | 0, n = n + Math.imul(z, de) | 0, n = n + Math.imul(H, le) | 0, d = d + Math.imul(H, de) | 0, l = l + Math.imul(F, ce) | 0, n = n + Math.imul(F, pe) | 0, n = n + Math.imul(U, ce) | 0, d = d + Math.imul(U, pe) | 0, l = l + Math.imul(C, ve) | 0, n = n + Math.imul(C, be) | 0, n = n + Math.imul(O, ve) | 0, d = d + Math.imul(O, be) | 0;
        var Ye = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(G, fe), n = Math.imul(G, ae), n = n + Math.imul(Y, fe) | 0, d = Math.imul(Y, ae), l = l + Math.imul(V, oe) | 0, n = n + Math.imul(V, se) | 0, n = n + Math.imul($, oe) | 0, d = d + Math.imul($, se) | 0, l = l + Math.imul(j, he) | 0, n = n + Math.imul(j, ue) | 0, n = n + Math.imul(Z, he) | 0, d = d + Math.imul(Z, ue) | 0, l = l + Math.imul(W, le) | 0, n = n + Math.imul(W, de) | 0, n = n + Math.imul(K, le) | 0, d = d + Math.imul(K, de) | 0, l = l + Math.imul(z, ce) | 0, n = n + Math.imul(z, pe) | 0, n = n + Math.imul(H, ce) | 0, d = d + Math.imul(H, pe) | 0, l = l + Math.imul(F, ve) | 0, n = n + Math.imul(F, be) | 0, n = n + Math.imul(U, ve) | 0, d = d + Math.imul(U, be) | 0;
        var Xe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, l = Math.imul(G, oe), n = Math.imul(G, se), n = n + Math.imul(Y, oe) | 0, d = Math.imul(Y, se), l = l + Math.imul(V, he) | 0, n = n + Math.imul(V, ue) | 0, n = n + Math.imul($, he) | 0, d = d + Math.imul($, ue) | 0, l = l + Math.imul(j, le) | 0, n = n + Math.imul(j, de) | 0, n = n + Math.imul(Z, le) | 0, d = d + Math.imul(Z, de) | 0, l = l + Math.imul(W, ce) | 0, n = n + Math.imul(W, pe) | 0, n = n + Math.imul(K, ce) | 0, d = d + Math.imul(K, pe) | 0, l = l + Math.imul(z, ve) | 0, n = n + Math.imul(z, be) | 0, n = n + Math.imul(H, ve) | 0, d = d + Math.imul(H, be) | 0;
        var Je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, l = Math.imul(G, he), n = Math.imul(G, ue), n = n + Math.imul(Y, he) | 0, d = Math.imul(Y, ue), l = l + Math.imul(V, le) | 0, n = n + Math.imul(V, de) | 0, n = n + Math.imul($, le) | 0, d = d + Math.imul($, de) | 0, l = l + Math.imul(j, ce) | 0, n = n + Math.imul(j, pe) | 0, n = n + Math.imul(Z, ce) | 0, d = d + Math.imul(Z, pe) | 0, l = l + Math.imul(W, ve) | 0, n = n + Math.imul(W, be) | 0, n = n + Math.imul(K, ve) | 0, d = d + Math.imul(K, be) | 0;
        var Qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, l = Math.imul(G, le), n = Math.imul(G, de), n = n + Math.imul(Y, le) | 0, d = Math.imul(Y, de), l = l + Math.imul(V, ce) | 0, n = n + Math.imul(V, pe) | 0, n = n + Math.imul($, ce) | 0, d = d + Math.imul($, pe) | 0, l = l + Math.imul(j, ve) | 0, n = n + Math.imul(j, be) | 0, n = n + Math.imul(Z, ve) | 0, d = d + Math.imul(Z, be) | 0;
        var et = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(G, ce), n = Math.imul(G, pe), n = n + Math.imul(Y, ce) | 0, d = Math.imul(Y, pe), l = l + Math.imul(V, ve) | 0, n = n + Math.imul(V, be) | 0, n = n + Math.imul($, ve) | 0, d = d + Math.imul($, be) | 0;
        var tt = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, l = Math.imul(G, ve), n = Math.imul(G, be), n = n + Math.imul(Y, ve) | 0, d = Math.imul(Y, be);
        var rt = (b + l | 0) + ((n & 8191) << 13) | 0;
        return b = (d + (n >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, c[0] = ft, c[1] = Be, c[2] = qe, c[3] = ze, c[4] = He, c[5] = We, c[6] = Ke, c[7] = je, c[8] = Ze, c[9] = Ve, c[10] = $e, c[11] = Ge, c[12] = Ye, c[13] = Xe, c[14] = Je, c[15] = Qe, c[16] = et, c[17] = tt, c[18] = rt, b !== 0 && (c[19] = b, h.length++), h;
      };
      Math.imul || (L = q);
      function ge(v, i, a) {
        a.negative = i.negative ^ v.negative, a.length = v.length + i.length;
        for (var h = 0, s = 0, u = 0;u < a.length - 1; u++) {
          var c = s;
          s = 0;
          for (var b = h & 67108863, l = Math.min(u, i.length - 1), n = Math.max(0, u - v.length + 1);n <= l; n++) {
            var d = u - n, w = v.words[d] | 0, g = i.words[n] | 0, _ = w * g, A = _ & 67108863;
            c = c + (_ / 67108864 | 0) | 0, A = A + b | 0, b = A & 67108863, c = c + (A >>> 26) | 0, s += c >>> 26, c &= 67108863;
          }
          a.words[u] = b, h = c, c = s;
        }
        return h !== 0 ? a.words[u] = h : a.length--, a.strip();
      }
      function _e(v, i, a) {
        var h = new N;
        return h.mulp(v, i, a);
      }
      f.prototype.mulTo = function(i, a) {
        var h, s = this.length + i.length;
        return this.length === 10 && i.length === 10 ? h = L(this, i, a) : s < 63 ? h = q(this, i, a) : s < 1024 ? h = ge(this, i, a) : h = _e(this, i, a), h;
      };
      function N(v, i) {
        this.x = v, this.y = i;
      }
      N.prototype.makeRBT = function(i) {
        for (var a = new Array(i), h = f.prototype._countBits(i) - 1, s = 0;s < i; s++)
          a[s] = this.revBin(s, h, i);
        return a;
      }, N.prototype.revBin = function(i, a, h) {
        if (i === 0 || i === h - 1)
          return i;
        for (var s = 0, u = 0;u < a; u++)
          s |= (i & 1) << a - u - 1, i >>= 1;
        return s;
      }, N.prototype.permute = function(i, a, h, s, u, c) {
        for (var b = 0;b < c; b++)
          s[b] = a[i[b]], u[b] = h[i[b]];
      }, N.prototype.transform = function(i, a, h, s, u, c) {
        this.permute(c, i, a, h, s, u);
        for (var b = 1;b < u; b <<= 1)
          for (var l = b << 1, n = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), w = 0;w < u; w += l)
            for (var g = n, _ = d, A = 0;A < b; A++) {
              var R = h[w + A], I = s[w + A], Me = h[w + A + b], k = s[w + A + b], D = g * Me - _ * k;
              k = g * k + _ * Me, Me = D, h[w + A] = R + Me, s[w + A] = I + k, h[w + A + b] = R - Me, s[w + A + b] = I - k, A !== l && (D = n * g - d * _, _ = n * _ + d * g, g = D);
            }
      }, N.prototype.guessLen13b = function(i, a) {
        var h = Math.max(a, i) | 1, s = h & 1, u = 0;
        for (h = h / 2 | 0;h; h = h >>> 1)
          u++;
        return 1 << u + 1 + s;
      }, N.prototype.conjugate = function(i, a, h) {
        if (!(h <= 1))
          for (var s = 0;s < h / 2; s++) {
            var u = i[s];
            i[s] = i[h - s - 1], i[h - s - 1] = u, u = a[s], a[s] = -a[h - s - 1], a[h - s - 1] = -u;
          }
      }, N.prototype.normalize13b = function(i, a) {
        for (var h = 0, s = 0;s < a / 2; s++) {
          var u = Math.round(i[2 * s + 1] / a) * 8192 + Math.round(i[2 * s] / a) + h;
          i[s] = u & 67108863, u < 67108864 ? h = 0 : h = u / 67108864 | 0;
        }
        return i;
      }, N.prototype.convert13b = function(i, a, h, s) {
        for (var u = 0, c = 0;c < a; c++)
          u = u + (i[c] | 0), h[2 * c] = u & 8191, u = u >>> 13, h[2 * c + 1] = u & 8191, u = u >>> 13;
        for (c = 2 * a;c < s; ++c)
          h[c] = 0;
        r(u === 0), r((u & -8192) === 0);
      }, N.prototype.stub = function(i) {
        for (var a = new Array(i), h = 0;h < i; h++)
          a[h] = 0;
        return a;
      }, N.prototype.mulp = function(i, a, h) {
        var s = 2 * this.guessLen13b(i.length, a.length), u = this.makeRBT(s), c = this.stub(s), b = new Array(s), l = new Array(s), n = new Array(s), d = new Array(s), w = new Array(s), g = new Array(s), _ = h.words;
        _.length = s, this.convert13b(i.words, i.length, b, s), this.convert13b(a.words, a.length, d, s), this.transform(b, c, l, n, s, u), this.transform(d, c, w, g, s, u);
        for (var A = 0;A < s; A++) {
          var R = l[A] * w[A] - n[A] * g[A];
          n[A] = l[A] * g[A] + n[A] * w[A], l[A] = R;
        }
        return this.conjugate(l, n, s), this.transform(l, n, _, c, s, u), this.conjugate(_, c, s), this.normalize13b(_, s), h.negative = i.negative ^ a.negative, h.length = i.length + a.length, h.strip();
      }, f.prototype.mul = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), this.mulTo(i, a);
      }, f.prototype.mulf = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), _e(this, i, a);
      }, f.prototype.imul = function(i) {
        return this.clone().mulTo(i, this);
      }, f.prototype.imuln = function(i) {
        r(typeof i == "number"), r(i < 67108864);
        for (var a = 0, h = 0;h < this.length; h++) {
          var s = (this.words[h] | 0) * i, u = (s & 67108863) + (a & 67108863);
          a >>= 26, a += s / 67108864 | 0, a += u >>> 26, this.words[h] = u & 67108863;
        }
        return a !== 0 && (this.words[h] = a, this.length++), this;
      }, f.prototype.muln = function(i) {
        return this.clone().imuln(i);
      }, f.prototype.sqr = function() {
        return this.mul(this);
      }, f.prototype.isqr = function() {
        return this.imul(this.clone());
      }, f.prototype.pow = function(i) {
        var a = B(i);
        if (a.length === 0)
          return new f(1);
        for (var h = this, s = 0;s < a.length && a[s] === 0; s++, h = h.sqr())
          ;
        if (++s < a.length)
          for (var u = h.sqr();s < a.length; s++, u = u.sqr())
            a[s] !== 0 && (h = h.mul(u));
        return h;
      }, f.prototype.iushln = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 67108863 >>> 26 - a << 26 - a, u;
        if (a !== 0) {
          var c = 0;
          for (u = 0;u < this.length; u++) {
            var b = this.words[u] & s, l = (this.words[u] | 0) - b << a;
            this.words[u] = l | c, c = b >>> 26 - a;
          }
          c && (this.words[u] = c, this.length++);
        }
        if (h !== 0) {
          for (u = this.length - 1;u >= 0; u--)
            this.words[u + h] = this.words[u];
          for (u = 0;u < h; u++)
            this.words[u] = 0;
          this.length += h;
        }
        return this.strip();
      }, f.prototype.ishln = function(i) {
        return r(this.negative === 0), this.iushln(i);
      }, f.prototype.iushrn = function(i, a, h) {
        r(typeof i == "number" && i >= 0);
        var s;
        a ? s = (a - a % 26) / 26 : s = 0;
        var u = i % 26, c = Math.min((i - u) / 26, this.length), b = 67108863 ^ 67108863 >>> u << u, l = h;
        if (s -= c, s = Math.max(0, s), l) {
          for (var n = 0;n < c; n++)
            l.words[n] = this.words[n];
          l.length = c;
        }
        if (c !== 0)
          if (this.length > c)
            for (this.length -= c, n = 0;n < this.length; n++)
              this.words[n] = this.words[n + c];
          else
            this.words[0] = 0, this.length = 1;
        var d = 0;
        for (n = this.length - 1;n >= 0 && (d !== 0 || n >= s); n--) {
          var w = this.words[n] | 0;
          this.words[n] = d << 26 - u | w >>> u, d = w & b;
        }
        return l && d !== 0 && (l.words[l.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, f.prototype.ishrn = function(i, a, h) {
        return r(this.negative === 0), this.iushrn(i, a, h);
      }, f.prototype.shln = function(i) {
        return this.clone().ishln(i);
      }, f.prototype.ushln = function(i) {
        return this.clone().iushln(i);
      }, f.prototype.shrn = function(i) {
        return this.clone().ishrn(i);
      }, f.prototype.ushrn = function(i) {
        return this.clone().iushrn(i);
      }, f.prototype.testn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return false;
        var u = this.words[h];
        return !!(u & s);
      }, f.prototype.imaskn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26;
        if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h)
          return this;
        if (a !== 0 && h++, this.length = Math.min(h, this.length), a !== 0) {
          var s = 67108863 ^ 67108863 >>> a << a;
          this.words[this.length - 1] &= s;
        }
        return this.strip();
      }, f.prototype.maskn = function(i) {
        return this.clone().imaskn(i);
      }, f.prototype.iaddn = function(i) {
        return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
      }, f.prototype._iaddn = function(i) {
        this.words[0] += i;
        for (var a = 0;a < this.length && this.words[a] >= 67108864; a++)
          this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
        return this.length = Math.max(this.length, a + 1), this;
      }, f.prototype.isubn = function(i) {
        if (r(typeof i == "number"), r(i < 67108864), i < 0)
          return this.iaddn(-i);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(i), this.negative = 1, this;
        if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var a = 0;a < this.length && this.words[a] < 0; a++)
            this.words[a] += 67108864, this.words[a + 1] -= 1;
        return this.strip();
      }, f.prototype.addn = function(i) {
        return this.clone().iaddn(i);
      }, f.prototype.subn = function(i) {
        return this.clone().isubn(i);
      }, f.prototype.iabs = function() {
        return this.negative = 0, this;
      }, f.prototype.abs = function() {
        return this.clone().iabs();
      }, f.prototype._ishlnsubmul = function(i, a, h) {
        var s = i.length + h, u;
        this._expand(s);
        var c, b = 0;
        for (u = 0;u < i.length; u++) {
          c = (this.words[u + h] | 0) + b;
          var l = (i.words[u] | 0) * a;
          c -= l & 67108863, b = (c >> 26) - (l / 67108864 | 0), this.words[u + h] = c & 67108863;
        }
        for (;u < this.length - h; u++)
          c = (this.words[u + h] | 0) + b, b = c >> 26, this.words[u + h] = c & 67108863;
        if (b === 0)
          return this.strip();
        for (r(b === -1), b = 0, u = 0;u < this.length; u++)
          c = -(this.words[u] | 0) + b, b = c >> 26, this.words[u] = c & 67108863;
        return this.negative = 1, this.strip();
      }, f.prototype._wordDiv = function(i, a) {
        var h = this.length - i.length, s = this.clone(), u = i, c = u.words[u.length - 1] | 0, b = this._countBits(c);
        h = 26 - b, h !== 0 && (u = u.ushln(h), s.iushln(h), c = u.words[u.length - 1] | 0);
        var l = s.length - u.length, n;
        if (a !== "mod") {
          n = new f(null), n.length = l + 1, n.words = new Array(n.length);
          for (var d = 0;d < n.length; d++)
            n.words[d] = 0;
        }
        var w = s.clone()._ishlnsubmul(u, 1, l);
        w.negative === 0 && (s = w, n && (n.words[l] = 1));
        for (var g = l - 1;g >= 0; g--) {
          var _ = (s.words[u.length + g] | 0) * 67108864 + (s.words[u.length + g - 1] | 0);
          for (_ = Math.min(_ / c | 0, 67108863), s._ishlnsubmul(u, _, g);s.negative !== 0; )
            _--, s.negative = 0, s._ishlnsubmul(u, 1, g), s.isZero() || (s.negative ^= 1);
          n && (n.words[g] = _);
        }
        return n && n.strip(), s.strip(), a !== "div" && h !== 0 && s.iushrn(h), { div: n || null, mod: s };
      }, f.prototype.divmod = function(i, a, h) {
        if (r(!i.isZero()), this.isZero())
          return { div: new f(0), mod: new f(0) };
        var s, u, c;
        return this.negative !== 0 && i.negative === 0 ? (c = this.neg().divmod(i, a), a !== "mod" && (s = c.div.neg()), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.iadd(i)), { div: s, mod: u }) : this.negative === 0 && i.negative !== 0 ? (c = this.divmod(i.neg(), a), a !== "mod" && (s = c.div.neg()), { div: s, mod: c.mod }) : (this.negative & i.negative) !== 0 ? (c = this.neg().divmod(i.neg(), a), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.isub(i)), { div: c.div, mod: u }) : i.length > this.length || this.cmp(i) < 0 ? { div: new f(0), mod: this } : i.length === 1 ? a === "div" ? { div: this.divn(i.words[0]), mod: null } : a === "mod" ? { div: null, mod: new f(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new f(this.modn(i.words[0])) } : this._wordDiv(i, a);
      }, f.prototype.div = function(i) {
        return this.divmod(i, "div", false).div;
      }, f.prototype.mod = function(i) {
        return this.divmod(i, "mod", false).mod;
      }, f.prototype.umod = function(i) {
        return this.divmod(i, "mod", true).mod;
      }, f.prototype.divRound = function(i) {
        var a = this.divmod(i);
        if (a.mod.isZero())
          return a.div;
        var h = a.div.negative !== 0 ? a.mod.isub(i) : a.mod, s = i.ushrn(1), u = i.andln(1), c = h.cmp(s);
        return c < 0 || u === 1 && c === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
      }, f.prototype.modn = function(i) {
        r(i <= 67108863);
        for (var a = (1 << 26) % i, h = 0, s = this.length - 1;s >= 0; s--)
          h = (a * h + (this.words[s] | 0)) % i;
        return h;
      }, f.prototype.idivn = function(i) {
        r(i <= 67108863);
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = (this.words[h] | 0) + a * 67108864;
          this.words[h] = s / i | 0, a = s % i;
        }
        return this.strip();
      }, f.prototype.divn = function(i) {
        return this.clone().idivn(i);
      }, f.prototype.egcd = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = new f(0), b = new f(1), l = 0;a.isEven() && h.isEven(); )
          a.iushrn(1), h.iushrn(1), ++l;
        for (var n = h.clone(), d = a.clone();!a.isZero(); ) {
          for (var w = 0, g = 1;(a.words[0] & g) === 0 && w < 26; ++w, g <<= 1)
            ;
          if (w > 0)
            for (a.iushrn(w);w-- > 0; )
              (s.isOdd() || u.isOdd()) && (s.iadd(n), u.isub(d)), s.iushrn(1), u.iushrn(1);
          for (var _ = 0, A = 1;(h.words[0] & A) === 0 && _ < 26; ++_, A <<= 1)
            ;
          if (_ > 0)
            for (h.iushrn(_);_-- > 0; )
              (c.isOdd() || b.isOdd()) && (c.iadd(n), b.isub(d)), c.iushrn(1), b.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(c), u.isub(b)) : (h.isub(a), c.isub(s), b.isub(u));
        }
        return { a: c, b, gcd: h.iushln(l) };
      }, f.prototype._invmp = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = h.clone();a.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var b = 0, l = 1;(a.words[0] & l) === 0 && b < 26; ++b, l <<= 1)
            ;
          if (b > 0)
            for (a.iushrn(b);b-- > 0; )
              s.isOdd() && s.iadd(c), s.iushrn(1);
          for (var n = 0, d = 1;(h.words[0] & d) === 0 && n < 26; ++n, d <<= 1)
            ;
          if (n > 0)
            for (h.iushrn(n);n-- > 0; )
              u.isOdd() && u.iadd(c), u.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(u)) : (h.isub(a), u.isub(s));
        }
        var w;
        return a.cmpn(1) === 0 ? w = s : w = u, w.cmpn(0) < 0 && w.iadd(i), w;
      }, f.prototype.gcd = function(i) {
        if (this.isZero())
          return i.abs();
        if (i.isZero())
          return this.abs();
        var a = this.clone(), h = i.clone();
        a.negative = 0, h.negative = 0;
        for (var s = 0;a.isEven() && h.isEven(); s++)
          a.iushrn(1), h.iushrn(1);
        do {
          for (;a.isEven(); )
            a.iushrn(1);
          for (;h.isEven(); )
            h.iushrn(1);
          var u = a.cmp(h);
          if (u < 0) {
            var c = a;
            a = h, h = c;
          } else if (u === 0 || h.cmpn(1) === 0)
            break;
          a.isub(h);
        } while (true);
        return h.iushln(s);
      }, f.prototype.invm = function(i) {
        return this.egcd(i).a.umod(i);
      }, f.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, f.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, f.prototype.andln = function(i) {
        return this.words[0] & i;
      }, f.prototype.bincn = function(i) {
        r(typeof i == "number");
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return this._expand(h + 1), this.words[h] |= s, this;
        for (var u = s, c = h;u !== 0 && c < this.length; c++) {
          var b = this.words[c] | 0;
          b += u, u = b >>> 26, b &= 67108863, this.words[c] = b;
        }
        return u !== 0 && (this.words[c] = u, this.length++), this;
      }, f.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, f.prototype.cmpn = function(i) {
        var a = i < 0;
        if (this.negative !== 0 && !a)
          return -1;
        if (this.negative === 0 && a)
          return 1;
        this.strip();
        var h;
        if (this.length > 1)
          h = 1;
        else {
          a && (i = -i), r(i <= 67108863, "Number is too big");
          var s = this.words[0] | 0;
          h = s === i ? 0 : s < i ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }, f.prototype.cmp = function(i) {
        if (this.negative !== 0 && i.negative === 0)
          return -1;
        if (this.negative === 0 && i.negative !== 0)
          return 1;
        var a = this.ucmp(i);
        return this.negative !== 0 ? -a | 0 : a;
      }, f.prototype.ucmp = function(i) {
        if (this.length > i.length)
          return 1;
        if (this.length < i.length)
          return -1;
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = this.words[h] | 0, u = i.words[h] | 0;
          if (s !== u) {
            s < u ? a = -1 : s > u && (a = 1);
            break;
          }
        }
        return a;
      }, f.prototype.gtn = function(i) {
        return this.cmpn(i) === 1;
      }, f.prototype.gt = function(i) {
        return this.cmp(i) === 1;
      }, f.prototype.gten = function(i) {
        return this.cmpn(i) >= 0;
      }, f.prototype.gte = function(i) {
        return this.cmp(i) >= 0;
      }, f.prototype.ltn = function(i) {
        return this.cmpn(i) === -1;
      }, f.prototype.lt = function(i) {
        return this.cmp(i) === -1;
      }, f.prototype.lten = function(i) {
        return this.cmpn(i) <= 0;
      }, f.prototype.lte = function(i) {
        return this.cmp(i) <= 0;
      }, f.prototype.eqn = function(i) {
        return this.cmpn(i) === 0;
      }, f.prototype.eq = function(i) {
        return this.cmp(i) === 0;
      }, f.red = function(i) {
        return new P(i);
      }, f.prototype.toRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
      }, f.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, f.prototype._forceRed = function(i) {
        return this.red = i, this;
      }, f.prototype.forceRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
      }, f.prototype.redAdd = function(i) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
      }, f.prototype.redIAdd = function(i) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
      }, f.prototype.redSub = function(i) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
      }, f.prototype.redISub = function(i) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
      }, f.prototype.redShl = function(i) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
      }, f.prototype.redMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
      }, f.prototype.redIMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
      }, f.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, f.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, f.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, f.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, f.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, f.prototype.redPow = function(i) {
        return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
      };
      var we = { k256: null, p224: null, p192: null, p25519: null };
      function ye(v, i) {
        this.name = v, this.p = new f(i, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      ye.prototype._tmp = function() {
        var i = new f(null);
        return i.words = new Array(Math.ceil(this.n / 13)), i;
      }, ye.prototype.ireduce = function(i) {
        var a = i, h;
        do
          this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), h = a.bitLength();
        while (h > this.n);
        var s = h < this.n ? -1 : a.ucmp(this.p);
        return s === 0 ? (a.words[0] = 0, a.length = 1) : s > 0 ? a.isub(this.p) : a.strip !== undefined ? a.strip() : a._strip(), a;
      }, ye.prototype.split = function(i, a) {
        i.iushrn(this.n, 0, a);
      }, ye.prototype.imulK = function(i) {
        return i.imul(this.k);
      };
      function xe() {
        ye.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      o(xe, ye), xe.prototype.split = function(i, a) {
        for (var h = 4194303, s = Math.min(i.length, 9), u = 0;u < s; u++)
          a.words[u] = i.words[u];
        if (a.length = s, i.length <= 9) {
          i.words[0] = 0, i.length = 1;
          return;
        }
        var c = i.words[9];
        for (a.words[a.length++] = c & h, u = 10;u < i.length; u++) {
          var b = i.words[u] | 0;
          i.words[u - 10] = (b & h) << 4 | c >>> 22, c = b;
        }
        c >>>= 22, i.words[u - 10] = c, c === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
      }, xe.prototype.imulK = function(i) {
        i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = i.words[h] | 0;
          a += s * 977, i.words[h] = a & 67108863, a = s * 64 + (a / 67108864 | 0);
        }
        return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
      };
      function Re() {
        ye.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      o(Re, ye);
      function Ee() {
        ye.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      o(Ee, ye);
      function Ae() {
        ye.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      o(Ae, ye), Ae.prototype.imulK = function(i) {
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = (i.words[h] | 0) * 19 + a, u = s & 67108863;
          s >>>= 26, i.words[h] = u, a = s;
        }
        return a !== 0 && (i.words[i.length++] = a), i;
      }, f._prime = function(i) {
        if (we[i])
          return we[i];
        var a;
        if (i === "k256")
          a = new xe;
        else if (i === "p224")
          a = new Re;
        else if (i === "p192")
          a = new Ee;
        else if (i === "p25519")
          a = new Ae;
        else
          throw new Error("Unknown prime " + i);
        return we[i] = a, a;
      };
      function P(v) {
        if (typeof v == "string") {
          var i = f._prime(v);
          this.m = i.p, this.prime = i;
        } else
          r(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
      }
      P.prototype._verify1 = function(i) {
        r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
      }, P.prototype._verify2 = function(i, a) {
        r((i.negative | a.negative) === 0, "red works only with positives"), r(i.red && i.red === a.red, "red works only with red numbers");
      }, P.prototype.imod = function(i) {
        return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
      }, P.prototype.neg = function(i) {
        return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
      }, P.prototype.add = function(i, a) {
        this._verify2(i, a);
        var h = i.add(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }, P.prototype.iadd = function(i, a) {
        this._verify2(i, a);
        var h = i.iadd(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }, P.prototype.sub = function(i, a) {
        this._verify2(i, a);
        var h = i.sub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }, P.prototype.isub = function(i, a) {
        this._verify2(i, a);
        var h = i.isub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }, P.prototype.shl = function(i, a) {
        return this._verify1(i), this.imod(i.ushln(a));
      }, P.prototype.imul = function(i, a) {
        return this._verify2(i, a), this.imod(i.imul(a));
      }, P.prototype.mul = function(i, a) {
        return this._verify2(i, a), this.imod(i.mul(a));
      }, P.prototype.isqr = function(i) {
        return this.imul(i, i.clone());
      }, P.prototype.sqr = function(i) {
        return this.mul(i, i);
      }, P.prototype.sqrt = function(i) {
        if (i.isZero())
          return i.clone();
        var a = this.m.andln(3);
        if (r(a % 2 === 1), a === 3) {
          var h = this.m.add(new f(1)).iushrn(2);
          return this.pow(i, h);
        }
        for (var s = this.m.subn(1), u = 0;!s.isZero() && s.andln(1) === 0; )
          u++, s.iushrn(1);
        r(!s.isZero());
        var c = new f(1).toRed(this), b = c.redNeg(), l = this.m.subn(1).iushrn(1), n = this.m.bitLength();
        for (n = new f(2 * n * n).toRed(this);this.pow(n, l).cmp(b) !== 0; )
          n.redIAdd(b);
        for (var d = this.pow(n, s), w = this.pow(i, s.addn(1).iushrn(1)), g = this.pow(i, s), _ = u;g.cmp(c) !== 0; ) {
          for (var A = g, R = 0;A.cmp(c) !== 0; R++)
            A = A.redSqr();
          r(R < _);
          var I = this.pow(d, new f(1).iushln(_ - R - 1));
          w = w.redMul(I), d = I.redSqr(), g = g.redMul(d), _ = R;
        }
        return w;
      }, P.prototype.invm = function(i) {
        var a = i._invmp(this.m);
        return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
      }, P.prototype.pow = function(i, a) {
        if (a.isZero())
          return new f(1).toRed(this);
        if (a.cmpn(1) === 0)
          return i.clone();
        var h = 4, s = new Array(1 << h);
        s[0] = new f(1).toRed(this), s[1] = i;
        for (var u = 2;u < s.length; u++)
          s[u] = this.mul(s[u - 1], i);
        var c = s[0], b = 0, l = 0, n = a.bitLength() % 26;
        for (n === 0 && (n = 26), u = a.length - 1;u >= 0; u--) {
          for (var d = a.words[u], w = n - 1;w >= 0; w--) {
            var g = d >> w & 1;
            if (c !== s[0] && (c = this.sqr(c)), g === 0 && b === 0) {
              l = 0;
              continue;
            }
            b <<= 1, b |= g, l++, !(l !== h && (u !== 0 || w !== 0)) && (c = this.mul(c, s[b]), l = 0, b = 0);
          }
          n = 26;
        }
        return c;
      }, P.prototype.convertTo = function(i) {
        var a = i.umod(this.m);
        return a === i ? a.clone() : a;
      }, P.prototype.convertFrom = function(i) {
        var a = i.clone();
        return a.red = null, a;
      }, f.mont = function(i) {
        return new Se(i);
      };
      function Se(v) {
        P.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      o(Se, P), Se.prototype.convertTo = function(i) {
        return this.imod(i.ushln(this.shift));
      }, Se.prototype.convertFrom = function(i) {
        var a = this.imod(i.mul(this.rinv));
        return a.red = null, a;
      }, Se.prototype.imul = function(i, a) {
        if (i.isZero() || a.isZero())
          return i.words[0] = 0, i.length = 1, i;
        var h = i.imul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.mul = function(i, a) {
        if (i.isZero() || a.isZero())
          return new f(0)._forceRed(this);
        var h = i.mul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.invm = function(i) {
        var a = this.imod(i._invmp(this.m).mul(this.r2));
        return a._forceRed(this);
      };
    })(typeof yd > "u" || yd, L3);
  });
  P3 = T((wL, D3) => {
    var bq = o0(), mq = N3();
    D3.exports = function(e) {
      return new Zn(e);
    };
    var hr = { secp256k1: { name: "secp256k1", byteLength: 32 }, secp224r1: { name: "p224", byteLength: 28 }, prime256v1: { name: "p256", byteLength: 32 }, prime192v1: { name: "p192", byteLength: 24 }, ed25519: { name: "ed25519", byteLength: 32 }, secp384r1: { name: "p384", byteLength: 48 }, secp521r1: { name: "p521", byteLength: 66 } };
    hr.p224 = hr.secp224r1;
    hr.p256 = hr.secp256r1 = hr.prime256v1;
    hr.p192 = hr.secp192r1 = hr.prime192v1;
    hr.p384 = hr.secp384r1;
    hr.p521 = hr.secp521r1;
    function Zn(t) {
      this.curveType = hr[t], this.curveType || (this.curveType = { name: t }), this.curve = new bq.ec(this.curveType.name), this.keys = undefined;
    }
    Zn.prototype.generateKeys = function(t, e) {
      return this.keys = this.curve.genKeyPair(), this.getPublicKey(t, e);
    };
    Zn.prototype.computeSecret = function(t, e, r) {
      e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e));
      var o = this.curve.keyFromPublic(t).getPublic(), f = o.mul(this.keys.getPrivate()).getX();
      return wd(f, r, this.curveType.byteLength);
    };
    Zn.prototype.getPublicKey = function(t, e) {
      var r = this.keys.getPublic(e === "compressed", true);
      return e === "hybrid" && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6), wd(r, t);
    };
    Zn.prototype.getPrivateKey = function(t) {
      return wd(this.keys.getPrivate(), t);
    };
    Zn.prototype.setPublicKey = function(t, e) {
      return e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e)), this.keys._importPublic(t), this;
    };
    Zn.prototype.setPrivateKey = function(t, e) {
      e = e || "utf8", Buffer.isBuffer(t) || (t = new Buffer(t, e));
      var r = new mq(t);
      return r = r.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(r), this;
    };
    function wd(t, e, r) {
      Array.isArray(t) || (t = t.toArray());
      var o = new Buffer(t);
      if (r && o.length < r) {
        var f = new Buffer(r - o.length);
        f.fill(0), o = Buffer.concat([f, o]);
      }
      return e ? o.toString(e) : o;
    }
  });
  _d = T((ML, C3) => {
    var gq = bf(), Md = Te().Buffer;
    C3.exports = function(t, e) {
      for (var r = Md.alloc(0), o = 0, f;r.length < e; )
        f = yq(o++), r = Md.concat([r, gq("sha1").update(t).update(f).digest()]);
      return r.slice(0, e);
    };
    function yq(t) {
      var e = Md.allocUnsafe(4);
      return e.writeUInt32BE(t, 0), e;
    }
  });
  xd = T((_L, O3) => {
    O3.exports = function(e, r) {
      for (var o = e.length, f = -1;++f < o; )
        e[f] ^= r[f];
      return e;
    };
  });
  w0 = T((F3, Sd) => {
    (function(t, e) {
      function r(v, i) {
        if (!v)
          throw new Error(i || "Assertion failed");
      }
      function o(v, i) {
        v.super_ = i;
        var a = function() {
        };
        a.prototype = i.prototype, v.prototype = new a, v.prototype.constructor = v;
      }
      function f(v, i, a) {
        if (f.isBN(v))
          return v;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((i === "le" || i === "be") && (a = i, i = 10), this._init(v || 0, i || 10, a || "be"));
      }
      typeof t == "object" ? t.exports = f : e.BN = f, f.BN = f, f.wordSize = 26;
      var p;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? p = window.Buffer : p = ji().Buffer;
      } catch {
      }
      f.isBN = function(i) {
        return i instanceof f ? true : i !== null && typeof i == "object" && i.constructor.wordSize === f.wordSize && Array.isArray(i.words);
      }, f.max = function(i, a) {
        return i.cmp(a) > 0 ? i : a;
      }, f.min = function(i, a) {
        return i.cmp(a) < 0 ? i : a;
      }, f.prototype._init = function(i, a, h) {
        if (typeof i == "number")
          return this._initNumber(i, a, h);
        if (typeof i == "object")
          return this._initArray(i, a, h);
        a === "hex" && (a = 16), r(a === (a | 0) && a >= 2 && a <= 36), i = i.toString().replace(/\s+/g, "");
        var s = 0;
        i[0] === "-" && (s++, this.negative = 1), s < i.length && (a === 16 ? this._parseHex(i, s, h) : (this._parseBase(i, a, s), h === "le" && this._initArray(this.toArray(), a, h)));
      }, f.prototype._initNumber = function(i, a, h) {
        i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [i & 67108863, i / 67108864 & 67108863], this.length = 2) : (r(i < 9007199254740992), this.words = [i & 67108863, i / 67108864 & 67108863, 1], this.length = 3), h === "le" && this._initArray(this.toArray(), a, h);
      }, f.prototype._initArray = function(i, a, h) {
        if (r(typeof i.length == "number"), i.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u, c, b = 0;
        if (h === "be")
          for (s = i.length - 1, u = 0;s >= 0; s -= 3)
            c = i[s] | i[s - 1] << 8 | i[s - 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        else if (h === "le")
          for (s = 0, u = 0;s < i.length; s += 3)
            c = i[s] | i[s + 1] << 8 | i[s + 2] << 16, this.words[u] |= c << b & 67108863, this.words[u + 1] = c >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, u++);
        return this.strip();
      };
      function m(v, i) {
        var a = v.charCodeAt(i);
        return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15;
      }
      function y(v, i, a) {
        var h = m(v, a);
        return a - 1 >= i && (h |= m(v, a - 1) << 4), h;
      }
      f.prototype._parseHex = function(i, a, h) {
        this.length = Math.ceil((i.length - a) / 6), this.words = new Array(this.length);
        for (var s = 0;s < this.length; s++)
          this.words[s] = 0;
        var u = 0, c = 0, b;
        if (h === "be")
          for (s = i.length - 1;s >= a; s -= 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        else {
          var l = i.length - a;
          for (s = l % 2 === 0 ? a + 1 : a;s < i.length; s += 2)
            b = y(i, a, s) << u, this.words[c] |= b & 67108863, u >= 18 ? (u -= 18, c += 1, this.words[c] |= b >>> 26) : u += 8;
        }
        this.strip();
      };
      function M(v, i, a, h) {
        for (var s = 0, u = Math.min(v.length, a), c = i;c < u; c++) {
          var b = v.charCodeAt(c) - 48;
          s *= h, b >= 49 ? s += b - 49 + 10 : b >= 17 ? s += b - 17 + 10 : s += b;
        }
        return s;
      }
      f.prototype._parseBase = function(i, a, h) {
        this.words = [0], this.length = 1;
        for (var s = 0, u = 1;u <= 67108863; u *= a)
          s++;
        s--, u = u / a | 0;
        for (var c = i.length - h, b = c % s, l = Math.min(c, c - b) + h, n = 0, d = h;d < l; d += s)
          n = M(i, d, d + s, a), this.imuln(u), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        if (b !== 0) {
          var w = 1;
          for (n = M(i, d, i.length, a), d = 0;d < b; d++)
            w *= a;
          this.imuln(w), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
        }
        this.strip();
      }, f.prototype.copy = function(i) {
        i.words = new Array(this.length);
        for (var a = 0;a < this.length; a++)
          i.words[a] = this.words[a];
        i.length = this.length, i.negative = this.negative, i.red = this.red;
      }, f.prototype.clone = function() {
        var i = new f(null);
        return this.copy(i), i;
      }, f.prototype._expand = function(i) {
        for (;this.length < i; )
          this.words[this.length++] = 0;
        return this;
      }, f.prototype.strip = function() {
        for (;this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, f.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, f.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      f.prototype.toString = function(i, a) {
        i = i || 10, a = a | 0 || 1;
        var h;
        if (i === 16 || i === "hex") {
          h = "";
          for (var s = 0, u = 0, c = 0;c < this.length; c++) {
            var b = this.words[c], l = ((b << s | u) & 16777215).toString(16);
            u = b >>> 24 - s & 16777215, u !== 0 || c !== this.length - 1 ? h = x[6 - l.length] + l + h : h = l + h, s += 2, s >= 26 && (s -= 26, c--);
          }
          for (u !== 0 && (h = u.toString(16) + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        if (i === (i | 0) && i >= 2 && i <= 36) {
          var n = S[i], d = E[i];
          h = "";
          var w = this.clone();
          for (w.negative = 0;!w.isZero(); ) {
            var g = w.modn(d).toString(i);
            w = w.idivn(d), w.isZero() ? h = g + h : h = x[n - g.length] + g + h;
          }
          for (this.isZero() && (h = "0" + h);h.length % a !== 0; )
            h = "0" + h;
          return this.negative !== 0 && (h = "-" + h), h;
        }
        r(false, "Base should be between 2 and 36");
      }, f.prototype.toNumber = function() {
        var i = this.words[0];
        return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
      }, f.prototype.toJSON = function() {
        return this.toString(16);
      }, f.prototype.toBuffer = function(i, a) {
        return r(typeof p < "u"), this.toArrayLike(p, i, a);
      }, f.prototype.toArray = function(i, a) {
        return this.toArrayLike(Array, i, a);
      }, f.prototype.toArrayLike = function(i, a, h) {
        var s = this.byteLength(), u = h || Math.max(1, s);
        r(s <= u, "byte array longer than desired length"), r(u > 0, "Requested array length <= 0"), this.strip();
        var c = a === "le", b = new i(u), l, n, d = this.clone();
        if (c) {
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[n] = l;
          for (;n < u; n++)
            b[n] = 0;
        } else {
          for (n = 0;n < u - s; n++)
            b[n] = 0;
          for (n = 0;!d.isZero(); n++)
            l = d.andln(255), d.iushrn(8), b[u - n - 1] = l;
        }
        return b;
      }, Math.clz32 ? f.prototype._countBits = function(i) {
        return 32 - Math.clz32(i);
      } : f.prototype._countBits = function(i) {
        var a = i, h = 0;
        return a >= 4096 && (h += 13, a >>>= 13), a >= 64 && (h += 7, a >>>= 7), a >= 8 && (h += 4, a >>>= 4), a >= 2 && (h += 2, a >>>= 2), h + a;
      }, f.prototype._zeroBits = function(i) {
        if (i === 0)
          return 26;
        var a = i, h = 0;
        return (a & 8191) === 0 && (h += 13, a >>>= 13), (a & 127) === 0 && (h += 7, a >>>= 7), (a & 15) === 0 && (h += 4, a >>>= 4), (a & 3) === 0 && (h += 2, a >>>= 2), (a & 1) === 0 && h++, h;
      }, f.prototype.bitLength = function() {
        var i = this.words[this.length - 1], a = this._countBits(i);
        return (this.length - 1) * 26 + a;
      };
      function B(v) {
        for (var i = new Array(v.bitLength()), a = 0;a < i.length; a++) {
          var h = a / 26 | 0, s = a % 26;
          i[a] = (v.words[h] & 1 << s) >>> s;
        }
        return i;
      }
      f.prototype.zeroBits = function() {
        if (this.isZero())
          return 0;
        for (var i = 0, a = 0;a < this.length; a++) {
          var h = this._zeroBits(this.words[a]);
          if (i += h, h !== 26)
            break;
        }
        return i;
      }, f.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, f.prototype.toTwos = function(i) {
        return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
      }, f.prototype.fromTwos = function(i) {
        return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
      }, f.prototype.isNeg = function() {
        return this.negative !== 0;
      }, f.prototype.neg = function() {
        return this.clone().ineg();
      }, f.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, f.prototype.iuor = function(i) {
        for (;this.length < i.length; )
          this.words[this.length++] = 0;
        for (var a = 0;a < i.length; a++)
          this.words[a] = this.words[a] | i.words[a];
        return this.strip();
      }, f.prototype.ior = function(i) {
        return r((this.negative | i.negative) === 0), this.iuor(i);
      }, f.prototype.or = function(i) {
        return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
      }, f.prototype.uor = function(i) {
        return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
      }, f.prototype.iuand = function(i) {
        var a;
        this.length > i.length ? a = i : a = this;
        for (var h = 0;h < a.length; h++)
          this.words[h] = this.words[h] & i.words[h];
        return this.length = a.length, this.strip();
      }, f.prototype.iand = function(i) {
        return r((this.negative | i.negative) === 0), this.iuand(i);
      }, f.prototype.and = function(i) {
        return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
      }, f.prototype.uand = function(i) {
        return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
      }, f.prototype.iuxor = function(i) {
        var a, h;
        this.length > i.length ? (a = this, h = i) : (a = i, h = this);
        for (var s = 0;s < h.length; s++)
          this.words[s] = a.words[s] ^ h.words[s];
        if (this !== a)
          for (;s < a.length; s++)
            this.words[s] = a.words[s];
        return this.length = a.length, this.strip();
      }, f.prototype.ixor = function(i) {
        return r((this.negative | i.negative) === 0), this.iuxor(i);
      }, f.prototype.xor = function(i) {
        return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
      }, f.prototype.uxor = function(i) {
        return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
      }, f.prototype.inotn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = Math.ceil(i / 26) | 0, h = i % 26;
        this._expand(a), h > 0 && a--;
        for (var s = 0;s < a; s++)
          this.words[s] = ~this.words[s] & 67108863;
        return h > 0 && (this.words[s] = ~this.words[s] & 67108863 >> 26 - h), this.strip();
      }, f.prototype.notn = function(i) {
        return this.clone().inotn(i);
      }, f.prototype.setn = function(i, a) {
        r(typeof i == "number" && i >= 0);
        var h = i / 26 | 0, s = i % 26;
        return this._expand(h + 1), a ? this.words[h] = this.words[h] | 1 << s : this.words[h] = this.words[h] & ~(1 << s), this.strip();
      }, f.prototype.iadd = function(i) {
        var a;
        if (this.negative !== 0 && i.negative === 0)
          return this.negative = 0, a = this.isub(i), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && i.negative !== 0)
          return i.negative = 0, a = this.isub(i), i.negative = 1, a._normSign();
        var h, s;
        this.length > i.length ? (h = this, s = i) : (h = i, s = this);
        for (var u = 0, c = 0;c < s.length; c++)
          a = (h.words[c] | 0) + (s.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        for (;u !== 0 && c < h.length; c++)
          a = (h.words[c] | 0) + u, this.words[c] = a & 67108863, u = a >>> 26;
        if (this.length = h.length, u !== 0)
          this.words[this.length] = u, this.length++;
        else if (h !== this)
          for (;c < h.length; c++)
            this.words[c] = h.words[c];
        return this;
      }, f.prototype.add = function(i) {
        var a;
        return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, a = this.sub(i), i.negative ^= 1, a) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = i.sub(this), this.negative = 1, a) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
      }, f.prototype.isub = function(i) {
        if (i.negative !== 0) {
          i.negative = 0;
          var a = this.iadd(i);
          return i.negative = 1, a._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
        var h = this.cmp(i);
        if (h === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var s, u;
        h > 0 ? (s = this, u = i) : (s = i, u = this);
        for (var c = 0, b = 0;b < u.length; b++)
          a = (s.words[b] | 0) - (u.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        for (;c !== 0 && b < s.length; b++)
          a = (s.words[b] | 0) + c, c = a >> 26, this.words[b] = a & 67108863;
        if (c === 0 && b < s.length && s !== this)
          for (;b < s.length; b++)
            this.words[b] = s.words[b];
        return this.length = Math.max(this.length, b), s !== this && (this.negative = 1), this.strip();
      }, f.prototype.sub = function(i) {
        return this.clone().isub(i);
      };
      function q(v, i, a) {
        a.negative = i.negative ^ v.negative;
        var h = v.length + i.length | 0;
        a.length = h, h = h - 1 | 0;
        var s = v.words[0] | 0, u = i.words[0] | 0, c = s * u, b = c & 67108863, l = c / 67108864 | 0;
        a.words[0] = b;
        for (var n = 1;n < h; n++) {
          for (var d = l >>> 26, w = l & 67108863, g = Math.min(n, i.length - 1), _ = Math.max(0, n - v.length + 1);_ <= g; _++) {
            var A = n - _ | 0;
            s = v.words[A] | 0, u = i.words[_] | 0, c = s * u + w, d += c / 67108864 | 0, w = c & 67108863;
          }
          a.words[n] = w | 0, l = d | 0;
        }
        return l !== 0 ? a.words[n] = l | 0 : a.length--, a.strip();
      }
      var L = function(i, a, h) {
        var s = i.words, u = a.words, c = h.words, b = 0, l, n, d, w = s[0] | 0, g = w & 8191, _ = w >>> 13, A = s[1] | 0, R = A & 8191, I = A >>> 13, Me = s[2] | 0, k = Me & 8191, D = Me >>> 13, nt = s[3] | 0, C = nt & 8191, O = nt >>> 13, vt = s[4] | 0, F = vt & 8191, U = vt >>> 13, bt = s[5] | 0, z = bt & 8191, H = bt >>> 13, mt = s[6] | 0, W = mt & 8191, K = mt >>> 13, gt = s[7] | 0, j = gt & 8191, Z = gt >>> 13, yt = s[8] | 0, V = yt & 8191, $ = yt >>> 13, wt = s[9] | 0, G = wt & 8191, Y = wt >>> 13, Mt = u[0] | 0, X = Mt & 8191, J = Mt >>> 13, _t = u[1] | 0, Q = _t & 8191, ee = _t >>> 13, xt = u[2] | 0, te = xt & 8191, re = xt >>> 13, St = u[3] | 0, ie = St & 8191, ne = St >>> 13, Et = u[4] | 0, fe = Et & 8191, ae = Et >>> 13, At = u[5] | 0, oe = At & 8191, se = At >>> 13, Rt = u[6] | 0, he = Rt & 8191, ue = Rt >>> 13, Bt = u[7] | 0, le = Bt & 8191, de = Bt >>> 13, qt = u[8] | 0, ce = qt & 8191, pe = qt >>> 13, It = u[9] | 0, ve = It & 8191, be = It >>> 13;
        h.negative = i.negative ^ a.negative, h.length = 19, l = Math.imul(g, X), n = Math.imul(g, J), n = n + Math.imul(_, X) | 0, d = Math.imul(_, J);
        var ft = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, l = Math.imul(R, X), n = Math.imul(R, J), n = n + Math.imul(I, X) | 0, d = Math.imul(I, J), l = l + Math.imul(g, Q) | 0, n = n + Math.imul(g, ee) | 0, n = n + Math.imul(_, Q) | 0, d = d + Math.imul(_, ee) | 0;
        var Be = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, l = Math.imul(k, X), n = Math.imul(k, J), n = n + Math.imul(D, X) | 0, d = Math.imul(D, J), l = l + Math.imul(R, Q) | 0, n = n + Math.imul(R, ee) | 0, n = n + Math.imul(I, Q) | 0, d = d + Math.imul(I, ee) | 0, l = l + Math.imul(g, te) | 0, n = n + Math.imul(g, re) | 0, n = n + Math.imul(_, te) | 0, d = d + Math.imul(_, re) | 0;
        var qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, l = Math.imul(C, X), n = Math.imul(C, J), n = n + Math.imul(O, X) | 0, d = Math.imul(O, J), l = l + Math.imul(k, Q) | 0, n = n + Math.imul(k, ee) | 0, n = n + Math.imul(D, Q) | 0, d = d + Math.imul(D, ee) | 0, l = l + Math.imul(R, te) | 0, n = n + Math.imul(R, re) | 0, n = n + Math.imul(I, te) | 0, d = d + Math.imul(I, re) | 0, l = l + Math.imul(g, ie) | 0, n = n + Math.imul(g, ne) | 0, n = n + Math.imul(_, ie) | 0, d = d + Math.imul(_, ne) | 0;
        var ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, l = Math.imul(F, X), n = Math.imul(F, J), n = n + Math.imul(U, X) | 0, d = Math.imul(U, J), l = l + Math.imul(C, Q) | 0, n = n + Math.imul(C, ee) | 0, n = n + Math.imul(O, Q) | 0, d = d + Math.imul(O, ee) | 0, l = l + Math.imul(k, te) | 0, n = n + Math.imul(k, re) | 0, n = n + Math.imul(D, te) | 0, d = d + Math.imul(D, re) | 0, l = l + Math.imul(R, ie) | 0, n = n + Math.imul(R, ne) | 0, n = n + Math.imul(I, ie) | 0, d = d + Math.imul(I, ne) | 0, l = l + Math.imul(g, fe) | 0, n = n + Math.imul(g, ae) | 0, n = n + Math.imul(_, fe) | 0, d = d + Math.imul(_, ae) | 0;
        var He = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, l = Math.imul(z, X), n = Math.imul(z, J), n = n + Math.imul(H, X) | 0, d = Math.imul(H, J), l = l + Math.imul(F, Q) | 0, n = n + Math.imul(F, ee) | 0, n = n + Math.imul(U, Q) | 0, d = d + Math.imul(U, ee) | 0, l = l + Math.imul(C, te) | 0, n = n + Math.imul(C, re) | 0, n = n + Math.imul(O, te) | 0, d = d + Math.imul(O, re) | 0, l = l + Math.imul(k, ie) | 0, n = n + Math.imul(k, ne) | 0, n = n + Math.imul(D, ie) | 0, d = d + Math.imul(D, ne) | 0, l = l + Math.imul(R, fe) | 0, n = n + Math.imul(R, ae) | 0, n = n + Math.imul(I, fe) | 0, d = d + Math.imul(I, ae) | 0, l = l + Math.imul(g, oe) | 0, n = n + Math.imul(g, se) | 0, n = n + Math.imul(_, oe) | 0, d = d + Math.imul(_, se) | 0;
        var We = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, l = Math.imul(W, X), n = Math.imul(W, J), n = n + Math.imul(K, X) | 0, d = Math.imul(K, J), l = l + Math.imul(z, Q) | 0, n = n + Math.imul(z, ee) | 0, n = n + Math.imul(H, Q) | 0, d = d + Math.imul(H, ee) | 0, l = l + Math.imul(F, te) | 0, n = n + Math.imul(F, re) | 0, n = n + Math.imul(U, te) | 0, d = d + Math.imul(U, re) | 0, l = l + Math.imul(C, ie) | 0, n = n + Math.imul(C, ne) | 0, n = n + Math.imul(O, ie) | 0, d = d + Math.imul(O, ne) | 0, l = l + Math.imul(k, fe) | 0, n = n + Math.imul(k, ae) | 0, n = n + Math.imul(D, fe) | 0, d = d + Math.imul(D, ae) | 0, l = l + Math.imul(R, oe) | 0, n = n + Math.imul(R, se) | 0, n = n + Math.imul(I, oe) | 0, d = d + Math.imul(I, se) | 0, l = l + Math.imul(g, he) | 0, n = n + Math.imul(g, ue) | 0, n = n + Math.imul(_, he) | 0, d = d + Math.imul(_, ue) | 0;
        var Ke = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, l = Math.imul(j, X), n = Math.imul(j, J), n = n + Math.imul(Z, X) | 0, d = Math.imul(Z, J), l = l + Math.imul(W, Q) | 0, n = n + Math.imul(W, ee) | 0, n = n + Math.imul(K, Q) | 0, d = d + Math.imul(K, ee) | 0, l = l + Math.imul(z, te) | 0, n = n + Math.imul(z, re) | 0, n = n + Math.imul(H, te) | 0, d = d + Math.imul(H, re) | 0, l = l + Math.imul(F, ie) | 0, n = n + Math.imul(F, ne) | 0, n = n + Math.imul(U, ie) | 0, d = d + Math.imul(U, ne) | 0, l = l + Math.imul(C, fe) | 0, n = n + Math.imul(C, ae) | 0, n = n + Math.imul(O, fe) | 0, d = d + Math.imul(O, ae) | 0, l = l + Math.imul(k, oe) | 0, n = n + Math.imul(k, se) | 0, n = n + Math.imul(D, oe) | 0, d = d + Math.imul(D, se) | 0, l = l + Math.imul(R, he) | 0, n = n + Math.imul(R, ue) | 0, n = n + Math.imul(I, he) | 0, d = d + Math.imul(I, ue) | 0, l = l + Math.imul(g, le) | 0, n = n + Math.imul(g, de) | 0, n = n + Math.imul(_, le) | 0, d = d + Math.imul(_, de) | 0;
        var je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (je >>> 26) | 0, je &= 67108863, l = Math.imul(V, X), n = Math.imul(V, J), n = n + Math.imul($, X) | 0, d = Math.imul($, J), l = l + Math.imul(j, Q) | 0, n = n + Math.imul(j, ee) | 0, n = n + Math.imul(Z, Q) | 0, d = d + Math.imul(Z, ee) | 0, l = l + Math.imul(W, te) | 0, n = n + Math.imul(W, re) | 0, n = n + Math.imul(K, te) | 0, d = d + Math.imul(K, re) | 0, l = l + Math.imul(z, ie) | 0, n = n + Math.imul(z, ne) | 0, n = n + Math.imul(H, ie) | 0, d = d + Math.imul(H, ne) | 0, l = l + Math.imul(F, fe) | 0, n = n + Math.imul(F, ae) | 0, n = n + Math.imul(U, fe) | 0, d = d + Math.imul(U, ae) | 0, l = l + Math.imul(C, oe) | 0, n = n + Math.imul(C, se) | 0, n = n + Math.imul(O, oe) | 0, d = d + Math.imul(O, se) | 0, l = l + Math.imul(k, he) | 0, n = n + Math.imul(k, ue) | 0, n = n + Math.imul(D, he) | 0, d = d + Math.imul(D, ue) | 0, l = l + Math.imul(R, le) | 0, n = n + Math.imul(R, de) | 0, n = n + Math.imul(I, le) | 0, d = d + Math.imul(I, de) | 0, l = l + Math.imul(g, ce) | 0, n = n + Math.imul(g, pe) | 0, n = n + Math.imul(_, ce) | 0, d = d + Math.imul(_, pe) | 0;
        var Ze = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, l = Math.imul(G, X), n = Math.imul(G, J), n = n + Math.imul(Y, X) | 0, d = Math.imul(Y, J), l = l + Math.imul(V, Q) | 0, n = n + Math.imul(V, ee) | 0, n = n + Math.imul($, Q) | 0, d = d + Math.imul($, ee) | 0, l = l + Math.imul(j, te) | 0, n = n + Math.imul(j, re) | 0, n = n + Math.imul(Z, te) | 0, d = d + Math.imul(Z, re) | 0, l = l + Math.imul(W, ie) | 0, n = n + Math.imul(W, ne) | 0, n = n + Math.imul(K, ie) | 0, d = d + Math.imul(K, ne) | 0, l = l + Math.imul(z, fe) | 0, n = n + Math.imul(z, ae) | 0, n = n + Math.imul(H, fe) | 0, d = d + Math.imul(H, ae) | 0, l = l + Math.imul(F, oe) | 0, n = n + Math.imul(F, se) | 0, n = n + Math.imul(U, oe) | 0, d = d + Math.imul(U, se) | 0, l = l + Math.imul(C, he) | 0, n = n + Math.imul(C, ue) | 0, n = n + Math.imul(O, he) | 0, d = d + Math.imul(O, ue) | 0, l = l + Math.imul(k, le) | 0, n = n + Math.imul(k, de) | 0, n = n + Math.imul(D, le) | 0, d = d + Math.imul(D, de) | 0, l = l + Math.imul(R, ce) | 0, n = n + Math.imul(R, pe) | 0, n = n + Math.imul(I, ce) | 0, d = d + Math.imul(I, pe) | 0, l = l + Math.imul(g, ve) | 0, n = n + Math.imul(g, be) | 0, n = n + Math.imul(_, ve) | 0, d = d + Math.imul(_, be) | 0;
        var Ve = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, l = Math.imul(G, Q), n = Math.imul(G, ee), n = n + Math.imul(Y, Q) | 0, d = Math.imul(Y, ee), l = l + Math.imul(V, te) | 0, n = n + Math.imul(V, re) | 0, n = n + Math.imul($, te) | 0, d = d + Math.imul($, re) | 0, l = l + Math.imul(j, ie) | 0, n = n + Math.imul(j, ne) | 0, n = n + Math.imul(Z, ie) | 0, d = d + Math.imul(Z, ne) | 0, l = l + Math.imul(W, fe) | 0, n = n + Math.imul(W, ae) | 0, n = n + Math.imul(K, fe) | 0, d = d + Math.imul(K, ae) | 0, l = l + Math.imul(z, oe) | 0, n = n + Math.imul(z, se) | 0, n = n + Math.imul(H, oe) | 0, d = d + Math.imul(H, se) | 0, l = l + Math.imul(F, he) | 0, n = n + Math.imul(F, ue) | 0, n = n + Math.imul(U, he) | 0, d = d + Math.imul(U, ue) | 0, l = l + Math.imul(C, le) | 0, n = n + Math.imul(C, de) | 0, n = n + Math.imul(O, le) | 0, d = d + Math.imul(O, de) | 0, l = l + Math.imul(k, ce) | 0, n = n + Math.imul(k, pe) | 0, n = n + Math.imul(D, ce) | 0, d = d + Math.imul(D, pe) | 0, l = l + Math.imul(R, ve) | 0, n = n + Math.imul(R, be) | 0, n = n + Math.imul(I, ve) | 0, d = d + Math.imul(I, be) | 0;
        var $e = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, l = Math.imul(G, te), n = Math.imul(G, re), n = n + Math.imul(Y, te) | 0, d = Math.imul(Y, re), l = l + Math.imul(V, ie) | 0, n = n + Math.imul(V, ne) | 0, n = n + Math.imul($, ie) | 0, d = d + Math.imul($, ne) | 0, l = l + Math.imul(j, fe) | 0, n = n + Math.imul(j, ae) | 0, n = n + Math.imul(Z, fe) | 0, d = d + Math.imul(Z, ae) | 0, l = l + Math.imul(W, oe) | 0, n = n + Math.imul(W, se) | 0, n = n + Math.imul(K, oe) | 0, d = d + Math.imul(K, se) | 0, l = l + Math.imul(z, he) | 0, n = n + Math.imul(z, ue) | 0, n = n + Math.imul(H, he) | 0, d = d + Math.imul(H, ue) | 0, l = l + Math.imul(F, le) | 0, n = n + Math.imul(F, de) | 0, n = n + Math.imul(U, le) | 0, d = d + Math.imul(U, de) | 0, l = l + Math.imul(C, ce) | 0, n = n + Math.imul(C, pe) | 0, n = n + Math.imul(O, ce) | 0, d = d + Math.imul(O, pe) | 0, l = l + Math.imul(k, ve) | 0, n = n + Math.imul(k, be) | 0, n = n + Math.imul(D, ve) | 0, d = d + Math.imul(D, be) | 0;
        var Ge = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, l = Math.imul(G, ie), n = Math.imul(G, ne), n = n + Math.imul(Y, ie) | 0, d = Math.imul(Y, ne), l = l + Math.imul(V, fe) | 0, n = n + Math.imul(V, ae) | 0, n = n + Math.imul($, fe) | 0, d = d + Math.imul($, ae) | 0, l = l + Math.imul(j, oe) | 0, n = n + Math.imul(j, se) | 0, n = n + Math.imul(Z, oe) | 0, d = d + Math.imul(Z, se) | 0, l = l + Math.imul(W, he) | 0, n = n + Math.imul(W, ue) | 0, n = n + Math.imul(K, he) | 0, d = d + Math.imul(K, ue) | 0, l = l + Math.imul(z, le) | 0, n = n + Math.imul(z, de) | 0, n = n + Math.imul(H, le) | 0, d = d + Math.imul(H, de) | 0, l = l + Math.imul(F, ce) | 0, n = n + Math.imul(F, pe) | 0, n = n + Math.imul(U, ce) | 0, d = d + Math.imul(U, pe) | 0, l = l + Math.imul(C, ve) | 0, n = n + Math.imul(C, be) | 0, n = n + Math.imul(O, ve) | 0, d = d + Math.imul(O, be) | 0;
        var Ye = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, l = Math.imul(G, fe), n = Math.imul(G, ae), n = n + Math.imul(Y, fe) | 0, d = Math.imul(Y, ae), l = l + Math.imul(V, oe) | 0, n = n + Math.imul(V, se) | 0, n = n + Math.imul($, oe) | 0, d = d + Math.imul($, se) | 0, l = l + Math.imul(j, he) | 0, n = n + Math.imul(j, ue) | 0, n = n + Math.imul(Z, he) | 0, d = d + Math.imul(Z, ue) | 0, l = l + Math.imul(W, le) | 0, n = n + Math.imul(W, de) | 0, n = n + Math.imul(K, le) | 0, d = d + Math.imul(K, de) | 0, l = l + Math.imul(z, ce) | 0, n = n + Math.imul(z, pe) | 0, n = n + Math.imul(H, ce) | 0, d = d + Math.imul(H, pe) | 0, l = l + Math.imul(F, ve) | 0, n = n + Math.imul(F, be) | 0, n = n + Math.imul(U, ve) | 0, d = d + Math.imul(U, be) | 0;
        var Xe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, l = Math.imul(G, oe), n = Math.imul(G, se), n = n + Math.imul(Y, oe) | 0, d = Math.imul(Y, se), l = l + Math.imul(V, he) | 0, n = n + Math.imul(V, ue) | 0, n = n + Math.imul($, he) | 0, d = d + Math.imul($, ue) | 0, l = l + Math.imul(j, le) | 0, n = n + Math.imul(j, de) | 0, n = n + Math.imul(Z, le) | 0, d = d + Math.imul(Z, de) | 0, l = l + Math.imul(W, ce) | 0, n = n + Math.imul(W, pe) | 0, n = n + Math.imul(K, ce) | 0, d = d + Math.imul(K, pe) | 0, l = l + Math.imul(z, ve) | 0, n = n + Math.imul(z, be) | 0, n = n + Math.imul(H, ve) | 0, d = d + Math.imul(H, be) | 0;
        var Je = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, l = Math.imul(G, he), n = Math.imul(G, ue), n = n + Math.imul(Y, he) | 0, d = Math.imul(Y, ue), l = l + Math.imul(V, le) | 0, n = n + Math.imul(V, de) | 0, n = n + Math.imul($, le) | 0, d = d + Math.imul($, de) | 0, l = l + Math.imul(j, ce) | 0, n = n + Math.imul(j, pe) | 0, n = n + Math.imul(Z, ce) | 0, d = d + Math.imul(Z, pe) | 0, l = l + Math.imul(W, ve) | 0, n = n + Math.imul(W, be) | 0, n = n + Math.imul(K, ve) | 0, d = d + Math.imul(K, be) | 0;
        var Qe = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, l = Math.imul(G, le), n = Math.imul(G, de), n = n + Math.imul(Y, le) | 0, d = Math.imul(Y, de), l = l + Math.imul(V, ce) | 0, n = n + Math.imul(V, pe) | 0, n = n + Math.imul($, ce) | 0, d = d + Math.imul($, pe) | 0, l = l + Math.imul(j, ve) | 0, n = n + Math.imul(j, be) | 0, n = n + Math.imul(Z, ve) | 0, d = d + Math.imul(Z, be) | 0;
        var et = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, l = Math.imul(G, ce), n = Math.imul(G, pe), n = n + Math.imul(Y, ce) | 0, d = Math.imul(Y, pe), l = l + Math.imul(V, ve) | 0, n = n + Math.imul(V, be) | 0, n = n + Math.imul($, ve) | 0, d = d + Math.imul($, be) | 0;
        var tt = (b + l | 0) + ((n & 8191) << 13) | 0;
        b = (d + (n >>> 13) | 0) + (tt >>> 26) | 0, tt &= 67108863, l = Math.imul(G, ve), n = Math.imul(G, be), n = n + Math.imul(Y, ve) | 0, d = Math.imul(Y, be);
        var rt = (b + l | 0) + ((n & 8191) << 13) | 0;
        return b = (d + (n >>> 13) | 0) + (rt >>> 26) | 0, rt &= 67108863, c[0] = ft, c[1] = Be, c[2] = qe, c[3] = ze, c[4] = He, c[5] = We, c[6] = Ke, c[7] = je, c[8] = Ze, c[9] = Ve, c[10] = $e, c[11] = Ge, c[12] = Ye, c[13] = Xe, c[14] = Je, c[15] = Qe, c[16] = et, c[17] = tt, c[18] = rt, b !== 0 && (c[19] = b, h.length++), h;
      };
      Math.imul || (L = q);
      function ge(v, i, a) {
        a.negative = i.negative ^ v.negative, a.length = v.length + i.length;
        for (var h = 0, s = 0, u = 0;u < a.length - 1; u++) {
          var c = s;
          s = 0;
          for (var b = h & 67108863, l = Math.min(u, i.length - 1), n = Math.max(0, u - v.length + 1);n <= l; n++) {
            var d = u - n, w = v.words[d] | 0, g = i.words[n] | 0, _ = w * g, A = _ & 67108863;
            c = c + (_ / 67108864 | 0) | 0, A = A + b | 0, b = A & 67108863, c = c + (A >>> 26) | 0, s += c >>> 26, c &= 67108863;
          }
          a.words[u] = b, h = c, c = s;
        }
        return h !== 0 ? a.words[u] = h : a.length--, a.strip();
      }
      function _e(v, i, a) {
        var h = new N;
        return h.mulp(v, i, a);
      }
      f.prototype.mulTo = function(i, a) {
        var h, s = this.length + i.length;
        return this.length === 10 && i.length === 10 ? h = L(this, i, a) : s < 63 ? h = q(this, i, a) : s < 1024 ? h = ge(this, i, a) : h = _e(this, i, a), h;
      };
      function N(v, i) {
        this.x = v, this.y = i;
      }
      N.prototype.makeRBT = function(i) {
        for (var a = new Array(i), h = f.prototype._countBits(i) - 1, s = 0;s < i; s++)
          a[s] = this.revBin(s, h, i);
        return a;
      }, N.prototype.revBin = function(i, a, h) {
        if (i === 0 || i === h - 1)
          return i;
        for (var s = 0, u = 0;u < a; u++)
          s |= (i & 1) << a - u - 1, i >>= 1;
        return s;
      }, N.prototype.permute = function(i, a, h, s, u, c) {
        for (var b = 0;b < c; b++)
          s[b] = a[i[b]], u[b] = h[i[b]];
      }, N.prototype.transform = function(i, a, h, s, u, c) {
        this.permute(c, i, a, h, s, u);
        for (var b = 1;b < u; b <<= 1)
          for (var l = b << 1, n = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), w = 0;w < u; w += l)
            for (var g = n, _ = d, A = 0;A < b; A++) {
              var R = h[w + A], I = s[w + A], Me = h[w + A + b], k = s[w + A + b], D = g * Me - _ * k;
              k = g * k + _ * Me, Me = D, h[w + A] = R + Me, s[w + A] = I + k, h[w + A + b] = R - Me, s[w + A + b] = I - k, A !== l && (D = n * g - d * _, _ = n * _ + d * g, g = D);
            }
      }, N.prototype.guessLen13b = function(i, a) {
        var h = Math.max(a, i) | 1, s = h & 1, u = 0;
        for (h = h / 2 | 0;h; h = h >>> 1)
          u++;
        return 1 << u + 1 + s;
      }, N.prototype.conjugate = function(i, a, h) {
        if (!(h <= 1))
          for (var s = 0;s < h / 2; s++) {
            var u = i[s];
            i[s] = i[h - s - 1], i[h - s - 1] = u, u = a[s], a[s] = -a[h - s - 1], a[h - s - 1] = -u;
          }
      }, N.prototype.normalize13b = function(i, a) {
        for (var h = 0, s = 0;s < a / 2; s++) {
          var u = Math.round(i[2 * s + 1] / a) * 8192 + Math.round(i[2 * s] / a) + h;
          i[s] = u & 67108863, u < 67108864 ? h = 0 : h = u / 67108864 | 0;
        }
        return i;
      }, N.prototype.convert13b = function(i, a, h, s) {
        for (var u = 0, c = 0;c < a; c++)
          u = u + (i[c] | 0), h[2 * c] = u & 8191, u = u >>> 13, h[2 * c + 1] = u & 8191, u = u >>> 13;
        for (c = 2 * a;c < s; ++c)
          h[c] = 0;
        r(u === 0), r((u & -8192) === 0);
      }, N.prototype.stub = function(i) {
        for (var a = new Array(i), h = 0;h < i; h++)
          a[h] = 0;
        return a;
      }, N.prototype.mulp = function(i, a, h) {
        var s = 2 * this.guessLen13b(i.length, a.length), u = this.makeRBT(s), c = this.stub(s), b = new Array(s), l = new Array(s), n = new Array(s), d = new Array(s), w = new Array(s), g = new Array(s), _ = h.words;
        _.length = s, this.convert13b(i.words, i.length, b, s), this.convert13b(a.words, a.length, d, s), this.transform(b, c, l, n, s, u), this.transform(d, c, w, g, s, u);
        for (var A = 0;A < s; A++) {
          var R = l[A] * w[A] - n[A] * g[A];
          n[A] = l[A] * g[A] + n[A] * w[A], l[A] = R;
        }
        return this.conjugate(l, n, s), this.transform(l, n, _, c, s, u), this.conjugate(_, c, s), this.normalize13b(_, s), h.negative = i.negative ^ a.negative, h.length = i.length + a.length, h.strip();
      }, f.prototype.mul = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), this.mulTo(i, a);
      }, f.prototype.mulf = function(i) {
        var a = new f(null);
        return a.words = new Array(this.length + i.length), _e(this, i, a);
      }, f.prototype.imul = function(i) {
        return this.clone().mulTo(i, this);
      }, f.prototype.imuln = function(i) {
        r(typeof i == "number"), r(i < 67108864);
        for (var a = 0, h = 0;h < this.length; h++) {
          var s = (this.words[h] | 0) * i, u = (s & 67108863) + (a & 67108863);
          a >>= 26, a += s / 67108864 | 0, a += u >>> 26, this.words[h] = u & 67108863;
        }
        return a !== 0 && (this.words[h] = a, this.length++), this;
      }, f.prototype.muln = function(i) {
        return this.clone().imuln(i);
      }, f.prototype.sqr = function() {
        return this.mul(this);
      }, f.prototype.isqr = function() {
        return this.imul(this.clone());
      }, f.prototype.pow = function(i) {
        var a = B(i);
        if (a.length === 0)
          return new f(1);
        for (var h = this, s = 0;s < a.length && a[s] === 0; s++, h = h.sqr())
          ;
        if (++s < a.length)
          for (var u = h.sqr();s < a.length; s++, u = u.sqr())
            a[s] !== 0 && (h = h.mul(u));
        return h;
      }, f.prototype.iushln = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 67108863 >>> 26 - a << 26 - a, u;
        if (a !== 0) {
          var c = 0;
          for (u = 0;u < this.length; u++) {
            var b = this.words[u] & s, l = (this.words[u] | 0) - b << a;
            this.words[u] = l | c, c = b >>> 26 - a;
          }
          c && (this.words[u] = c, this.length++);
        }
        if (h !== 0) {
          for (u = this.length - 1;u >= 0; u--)
            this.words[u + h] = this.words[u];
          for (u = 0;u < h; u++)
            this.words[u] = 0;
          this.length += h;
        }
        return this.strip();
      }, f.prototype.ishln = function(i) {
        return r(this.negative === 0), this.iushln(i);
      }, f.prototype.iushrn = function(i, a, h) {
        r(typeof i == "number" && i >= 0);
        var s;
        a ? s = (a - a % 26) / 26 : s = 0;
        var u = i % 26, c = Math.min((i - u) / 26, this.length), b = 67108863 ^ 67108863 >>> u << u, l = h;
        if (s -= c, s = Math.max(0, s), l) {
          for (var n = 0;n < c; n++)
            l.words[n] = this.words[n];
          l.length = c;
        }
        if (c !== 0)
          if (this.length > c)
            for (this.length -= c, n = 0;n < this.length; n++)
              this.words[n] = this.words[n + c];
          else
            this.words[0] = 0, this.length = 1;
        var d = 0;
        for (n = this.length - 1;n >= 0 && (d !== 0 || n >= s); n--) {
          var w = this.words[n] | 0;
          this.words[n] = d << 26 - u | w >>> u, d = w & b;
        }
        return l && d !== 0 && (l.words[l.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
      }, f.prototype.ishrn = function(i, a, h) {
        return r(this.negative === 0), this.iushrn(i, a, h);
      }, f.prototype.shln = function(i) {
        return this.clone().ishln(i);
      }, f.prototype.ushln = function(i) {
        return this.clone().iushln(i);
      }, f.prototype.shrn = function(i) {
        return this.clone().ishrn(i);
      }, f.prototype.ushrn = function(i) {
        return this.clone().iushrn(i);
      }, f.prototype.testn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return false;
        var u = this.words[h];
        return !!(u & s);
      }, f.prototype.imaskn = function(i) {
        r(typeof i == "number" && i >= 0);
        var a = i % 26, h = (i - a) / 26;
        if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h)
          return this;
        if (a !== 0 && h++, this.length = Math.min(h, this.length), a !== 0) {
          var s = 67108863 ^ 67108863 >>> a << a;
          this.words[this.length - 1] &= s;
        }
        return this.strip();
      }, f.prototype.maskn = function(i) {
        return this.clone().imaskn(i);
      }, f.prototype.iaddn = function(i) {
        return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
      }, f.prototype._iaddn = function(i) {
        this.words[0] += i;
        for (var a = 0;a < this.length && this.words[a] >= 67108864; a++)
          this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
        return this.length = Math.max(this.length, a + 1), this;
      }, f.prototype.isubn = function(i) {
        if (r(typeof i == "number"), r(i < 67108864), i < 0)
          return this.iaddn(-i);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(i), this.negative = 1, this;
        if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var a = 0;a < this.length && this.words[a] < 0; a++)
            this.words[a] += 67108864, this.words[a + 1] -= 1;
        return this.strip();
      }, f.prototype.addn = function(i) {
        return this.clone().iaddn(i);
      }, f.prototype.subn = function(i) {
        return this.clone().isubn(i);
      }, f.prototype.iabs = function() {
        return this.negative = 0, this;
      }, f.prototype.abs = function() {
        return this.clone().iabs();
      }, f.prototype._ishlnsubmul = function(i, a, h) {
        var s = i.length + h, u;
        this._expand(s);
        var c, b = 0;
        for (u = 0;u < i.length; u++) {
          c = (this.words[u + h] | 0) + b;
          var l = (i.words[u] | 0) * a;
          c -= l & 67108863, b = (c >> 26) - (l / 67108864 | 0), this.words[u + h] = c & 67108863;
        }
        for (;u < this.length - h; u++)
          c = (this.words[u + h] | 0) + b, b = c >> 26, this.words[u + h] = c & 67108863;
        if (b === 0)
          return this.strip();
        for (r(b === -1), b = 0, u = 0;u < this.length; u++)
          c = -(this.words[u] | 0) + b, b = c >> 26, this.words[u] = c & 67108863;
        return this.negative = 1, this.strip();
      }, f.prototype._wordDiv = function(i, a) {
        var h = this.length - i.length, s = this.clone(), u = i, c = u.words[u.length - 1] | 0, b = this._countBits(c);
        h = 26 - b, h !== 0 && (u = u.ushln(h), s.iushln(h), c = u.words[u.length - 1] | 0);
        var l = s.length - u.length, n;
        if (a !== "mod") {
          n = new f(null), n.length = l + 1, n.words = new Array(n.length);
          for (var d = 0;d < n.length; d++)
            n.words[d] = 0;
        }
        var w = s.clone()._ishlnsubmul(u, 1, l);
        w.negative === 0 && (s = w, n && (n.words[l] = 1));
        for (var g = l - 1;g >= 0; g--) {
          var _ = (s.words[u.length + g] | 0) * 67108864 + (s.words[u.length + g - 1] | 0);
          for (_ = Math.min(_ / c | 0, 67108863), s._ishlnsubmul(u, _, g);s.negative !== 0; )
            _--, s.negative = 0, s._ishlnsubmul(u, 1, g), s.isZero() || (s.negative ^= 1);
          n && (n.words[g] = _);
        }
        return n && n.strip(), s.strip(), a !== "div" && h !== 0 && s.iushrn(h), { div: n || null, mod: s };
      }, f.prototype.divmod = function(i, a, h) {
        if (r(!i.isZero()), this.isZero())
          return { div: new f(0), mod: new f(0) };
        var s, u, c;
        return this.negative !== 0 && i.negative === 0 ? (c = this.neg().divmod(i, a), a !== "mod" && (s = c.div.neg()), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.iadd(i)), { div: s, mod: u }) : this.negative === 0 && i.negative !== 0 ? (c = this.divmod(i.neg(), a), a !== "mod" && (s = c.div.neg()), { div: s, mod: c.mod }) : (this.negative & i.negative) !== 0 ? (c = this.neg().divmod(i.neg(), a), a !== "div" && (u = c.mod.neg(), h && u.negative !== 0 && u.isub(i)), { div: c.div, mod: u }) : i.length > this.length || this.cmp(i) < 0 ? { div: new f(0), mod: this } : i.length === 1 ? a === "div" ? { div: this.divn(i.words[0]), mod: null } : a === "mod" ? { div: null, mod: new f(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new f(this.modn(i.words[0])) } : this._wordDiv(i, a);
      }, f.prototype.div = function(i) {
        return this.divmod(i, "div", false).div;
      }, f.prototype.mod = function(i) {
        return this.divmod(i, "mod", false).mod;
      }, f.prototype.umod = function(i) {
        return this.divmod(i, "mod", true).mod;
      }, f.prototype.divRound = function(i) {
        var a = this.divmod(i);
        if (a.mod.isZero())
          return a.div;
        var h = a.div.negative !== 0 ? a.mod.isub(i) : a.mod, s = i.ushrn(1), u = i.andln(1), c = h.cmp(s);
        return c < 0 || u === 1 && c === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
      }, f.prototype.modn = function(i) {
        r(i <= 67108863);
        for (var a = (1 << 26) % i, h = 0, s = this.length - 1;s >= 0; s--)
          h = (a * h + (this.words[s] | 0)) % i;
        return h;
      }, f.prototype.idivn = function(i) {
        r(i <= 67108863);
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = (this.words[h] | 0) + a * 67108864;
          this.words[h] = s / i | 0, a = s % i;
        }
        return this.strip();
      }, f.prototype.divn = function(i) {
        return this.clone().idivn(i);
      }, f.prototype.egcd = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = new f(0), b = new f(1), l = 0;a.isEven() && h.isEven(); )
          a.iushrn(1), h.iushrn(1), ++l;
        for (var n = h.clone(), d = a.clone();!a.isZero(); ) {
          for (var w = 0, g = 1;(a.words[0] & g) === 0 && w < 26; ++w, g <<= 1)
            ;
          if (w > 0)
            for (a.iushrn(w);w-- > 0; )
              (s.isOdd() || u.isOdd()) && (s.iadd(n), u.isub(d)), s.iushrn(1), u.iushrn(1);
          for (var _ = 0, A = 1;(h.words[0] & A) === 0 && _ < 26; ++_, A <<= 1)
            ;
          if (_ > 0)
            for (h.iushrn(_);_-- > 0; )
              (c.isOdd() || b.isOdd()) && (c.iadd(n), b.isub(d)), c.iushrn(1), b.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(c), u.isub(b)) : (h.isub(a), c.isub(s), b.isub(u));
        }
        return { a: c, b, gcd: h.iushln(l) };
      }, f.prototype._invmp = function(i) {
        r(i.negative === 0), r(!i.isZero());
        var a = this, h = i.clone();
        a.negative !== 0 ? a = a.umod(i) : a = a.clone();
        for (var s = new f(1), u = new f(0), c = h.clone();a.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var b = 0, l = 1;(a.words[0] & l) === 0 && b < 26; ++b, l <<= 1)
            ;
          if (b > 0)
            for (a.iushrn(b);b-- > 0; )
              s.isOdd() && s.iadd(c), s.iushrn(1);
          for (var n = 0, d = 1;(h.words[0] & d) === 0 && n < 26; ++n, d <<= 1)
            ;
          if (n > 0)
            for (h.iushrn(n);n-- > 0; )
              u.isOdd() && u.iadd(c), u.iushrn(1);
          a.cmp(h) >= 0 ? (a.isub(h), s.isub(u)) : (h.isub(a), u.isub(s));
        }
        var w;
        return a.cmpn(1) === 0 ? w = s : w = u, w.cmpn(0) < 0 && w.iadd(i), w;
      }, f.prototype.gcd = function(i) {
        if (this.isZero())
          return i.abs();
        if (i.isZero())
          return this.abs();
        var a = this.clone(), h = i.clone();
        a.negative = 0, h.negative = 0;
        for (var s = 0;a.isEven() && h.isEven(); s++)
          a.iushrn(1), h.iushrn(1);
        do {
          for (;a.isEven(); )
            a.iushrn(1);
          for (;h.isEven(); )
            h.iushrn(1);
          var u = a.cmp(h);
          if (u < 0) {
            var c = a;
            a = h, h = c;
          } else if (u === 0 || h.cmpn(1) === 0)
            break;
          a.isub(h);
        } while (true);
        return h.iushln(s);
      }, f.prototype.invm = function(i) {
        return this.egcd(i).a.umod(i);
      }, f.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, f.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, f.prototype.andln = function(i) {
        return this.words[0] & i;
      }, f.prototype.bincn = function(i) {
        r(typeof i == "number");
        var a = i % 26, h = (i - a) / 26, s = 1 << a;
        if (this.length <= h)
          return this._expand(h + 1), this.words[h] |= s, this;
        for (var u = s, c = h;u !== 0 && c < this.length; c++) {
          var b = this.words[c] | 0;
          b += u, u = b >>> 26, b &= 67108863, this.words[c] = b;
        }
        return u !== 0 && (this.words[c] = u, this.length++), this;
      }, f.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, f.prototype.cmpn = function(i) {
        var a = i < 0;
        if (this.negative !== 0 && !a)
          return -1;
        if (this.negative === 0 && a)
          return 1;
        this.strip();
        var h;
        if (this.length > 1)
          h = 1;
        else {
          a && (i = -i), r(i <= 67108863, "Number is too big");
          var s = this.words[0] | 0;
          h = s === i ? 0 : s < i ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }, f.prototype.cmp = function(i) {
        if (this.negative !== 0 && i.negative === 0)
          return -1;
        if (this.negative === 0 && i.negative !== 0)
          return 1;
        var a = this.ucmp(i);
        return this.negative !== 0 ? -a | 0 : a;
      }, f.prototype.ucmp = function(i) {
        if (this.length > i.length)
          return 1;
        if (this.length < i.length)
          return -1;
        for (var a = 0, h = this.length - 1;h >= 0; h--) {
          var s = this.words[h] | 0, u = i.words[h] | 0;
          if (s !== u) {
            s < u ? a = -1 : s > u && (a = 1);
            break;
          }
        }
        return a;
      }, f.prototype.gtn = function(i) {
        return this.cmpn(i) === 1;
      }, f.prototype.gt = function(i) {
        return this.cmp(i) === 1;
      }, f.prototype.gten = function(i) {
        return this.cmpn(i) >= 0;
      }, f.prototype.gte = function(i) {
        return this.cmp(i) >= 0;
      }, f.prototype.ltn = function(i) {
        return this.cmpn(i) === -1;
      }, f.prototype.lt = function(i) {
        return this.cmp(i) === -1;
      }, f.prototype.lten = function(i) {
        return this.cmpn(i) <= 0;
      }, f.prototype.lte = function(i) {
        return this.cmp(i) <= 0;
      }, f.prototype.eqn = function(i) {
        return this.cmpn(i) === 0;
      }, f.prototype.eq = function(i) {
        return this.cmp(i) === 0;
      }, f.red = function(i) {
        return new P(i);
      }, f.prototype.toRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
      }, f.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, f.prototype._forceRed = function(i) {
        return this.red = i, this;
      }, f.prototype.forceRed = function(i) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
      }, f.prototype.redAdd = function(i) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
      }, f.prototype.redIAdd = function(i) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
      }, f.prototype.redSub = function(i) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
      }, f.prototype.redISub = function(i) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
      }, f.prototype.redShl = function(i) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
      }, f.prototype.redMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
      }, f.prototype.redIMul = function(i) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
      }, f.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, f.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, f.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, f.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, f.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, f.prototype.redPow = function(i) {
        return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
      };
      var we = { k256: null, p224: null, p192: null, p25519: null };
      function ye(v, i) {
        this.name = v, this.p = new f(i, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      ye.prototype._tmp = function() {
        var i = new f(null);
        return i.words = new Array(Math.ceil(this.n / 13)), i;
      }, ye.prototype.ireduce = function(i) {
        var a = i, h;
        do
          this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), h = a.bitLength();
        while (h > this.n);
        var s = h < this.n ? -1 : a.ucmp(this.p);
        return s === 0 ? (a.words[0] = 0, a.length = 1) : s > 0 ? a.isub(this.p) : a.strip !== undefined ? a.strip() : a._strip(), a;
      }, ye.prototype.split = function(i, a) {
        i.iushrn(this.n, 0, a);
      }, ye.prototype.imulK = function(i) {
        return i.imul(this.k);
      };
      function xe() {
        ye.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      o(xe, ye), xe.prototype.split = function(i, a) {
        for (var h = 4194303, s = Math.min(i.length, 9), u = 0;u < s; u++)
          a.words[u] = i.words[u];
        if (a.length = s, i.length <= 9) {
          i.words[0] = 0, i.length = 1;
          return;
        }
        var c = i.words[9];
        for (a.words[a.length++] = c & h, u = 10;u < i.length; u++) {
          var b = i.words[u] | 0;
          i.words[u - 10] = (b & h) << 4 | c >>> 22, c = b;
        }
        c >>>= 22, i.words[u - 10] = c, c === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
      }, xe.prototype.imulK = function(i) {
        i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = i.words[h] | 0;
          a += s * 977, i.words[h] = a & 67108863, a = s * 64 + (a / 67108864 | 0);
        }
        return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
      };
      function Re() {
        ye.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      o(Re, ye);
      function Ee() {
        ye.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      o(Ee, ye);
      function Ae() {
        ye.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      o(Ae, ye), Ae.prototype.imulK = function(i) {
        for (var a = 0, h = 0;h < i.length; h++) {
          var s = (i.words[h] | 0) * 19 + a, u = s & 67108863;
          s >>>= 26, i.words[h] = u, a = s;
        }
        return a !== 0 && (i.words[i.length++] = a), i;
      }, f._prime = function(i) {
        if (we[i])
          return we[i];
        var a;
        if (i === "k256")
          a = new xe;
        else if (i === "p224")
          a = new Re;
        else if (i === "p192")
          a = new Ee;
        else if (i === "p25519")
          a = new Ae;
        else
          throw new Error("Unknown prime " + i);
        return we[i] = a, a;
      };
      function P(v) {
        if (typeof v == "string") {
          var i = f._prime(v);
          this.m = i.p, this.prime = i;
        } else
          r(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
      }
      P.prototype._verify1 = function(i) {
        r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
      }, P.prototype._verify2 = function(i, a) {
        r((i.negative | a.negative) === 0, "red works only with positives"), r(i.red && i.red === a.red, "red works only with red numbers");
      }, P.prototype.imod = function(i) {
        return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
      }, P.prototype.neg = function(i) {
        return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
      }, P.prototype.add = function(i, a) {
        this._verify2(i, a);
        var h = i.add(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }, P.prototype.iadd = function(i, a) {
        this._verify2(i, a);
        var h = i.iadd(a);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }, P.prototype.sub = function(i, a) {
        this._verify2(i, a);
        var h = i.sub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }, P.prototype.isub = function(i, a) {
        this._verify2(i, a);
        var h = i.isub(a);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }, P.prototype.shl = function(i, a) {
        return this._verify1(i), this.imod(i.ushln(a));
      }, P.prototype.imul = function(i, a) {
        return this._verify2(i, a), this.imod(i.imul(a));
      }, P.prototype.mul = function(i, a) {
        return this._verify2(i, a), this.imod(i.mul(a));
      }, P.prototype.isqr = function(i) {
        return this.imul(i, i.clone());
      }, P.prototype.sqr = function(i) {
        return this.mul(i, i);
      }, P.prototype.sqrt = function(i) {
        if (i.isZero())
          return i.clone();
        var a = this.m.andln(3);
        if (r(a % 2 === 1), a === 3) {
          var h = this.m.add(new f(1)).iushrn(2);
          return this.pow(i, h);
        }
        for (var s = this.m.subn(1), u = 0;!s.isZero() && s.andln(1) === 0; )
          u++, s.iushrn(1);
        r(!s.isZero());
        var c = new f(1).toRed(this), b = c.redNeg(), l = this.m.subn(1).iushrn(1), n = this.m.bitLength();
        for (n = new f(2 * n * n).toRed(this);this.pow(n, l).cmp(b) !== 0; )
          n.redIAdd(b);
        for (var d = this.pow(n, s), w = this.pow(i, s.addn(1).iushrn(1)), g = this.pow(i, s), _ = u;g.cmp(c) !== 0; ) {
          for (var A = g, R = 0;A.cmp(c) !== 0; R++)
            A = A.redSqr();
          r(R < _);
          var I = this.pow(d, new f(1).iushln(_ - R - 1));
          w = w.redMul(I), d = I.redSqr(), g = g.redMul(d), _ = R;
        }
        return w;
      }, P.prototype.invm = function(i) {
        var a = i._invmp(this.m);
        return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
      }, P.prototype.pow = function(i, a) {
        if (a.isZero())
          return new f(1).toRed(this);
        if (a.cmpn(1) === 0)
          return i.clone();
        var h = 4, s = new Array(1 << h);
        s[0] = new f(1).toRed(this), s[1] = i;
        for (var u = 2;u < s.length; u++)
          s[u] = this.mul(s[u - 1], i);
        var c = s[0], b = 0, l = 0, n = a.bitLength() % 26;
        for (n === 0 && (n = 26), u = a.length - 1;u >= 0; u--) {
          for (var d = a.words[u], w = n - 1;w >= 0; w--) {
            var g = d >> w & 1;
            if (c !== s[0] && (c = this.sqr(c)), g === 0 && b === 0) {
              l = 0;
              continue;
            }
            b <<= 1, b |= g, l++, !(l !== h && (u !== 0 || w !== 0)) && (c = this.mul(c, s[b]), l = 0, b = 0);
          }
          n = 26;
        }
        return c;
      }, P.prototype.convertTo = function(i) {
        var a = i.umod(this.m);
        return a === i ? a.clone() : a;
      }, P.prototype.convertFrom = function(i) {
        var a = i.clone();
        return a.red = null, a;
      }, f.mont = function(i) {
        return new Se(i);
      };
      function Se(v) {
        P.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      o(Se, P), Se.prototype.convertTo = function(i) {
        return this.imod(i.ushln(this.shift));
      }, Se.prototype.convertFrom = function(i) {
        var a = this.imod(i.mul(this.rinv));
        return a.red = null, a;
      }, Se.prototype.imul = function(i, a) {
        if (i.isZero() || a.isZero())
          return i.words[0] = 0, i.length = 1, i;
        var h = i.imul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.mul = function(i, a) {
        if (i.isZero() || a.isZero())
          return new f(0)._forceRed(this);
        var h = i.mul(a), s = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = h.isub(s).iushrn(this.shift), c = u;
        return u.cmp(this.m) >= 0 ? c = u.isub(this.m) : u.cmpn(0) < 0 && (c = u.iadd(this.m)), c._forceRed(this);
      }, Se.prototype.invm = function(i) {
        var a = this.imod(i._invmp(this.m).mul(this.r2));
        return a._forceRed(this);
      };
    })(typeof Sd > "u" || Sd, F3);
  });
  Ed = T((xL, z3) => {
    var U3 = w0(), wq = Te().Buffer;
    function Mq(t, e) {
      return wq.from(t.toRed(U3.mont(e.modulus)).redPow(new U3(e.publicExponent)).fromRed().toArray());
    }
    z3.exports = Mq;
  });
  j3 = T((SL, K3) => {
    var _q = Ha(), Ad = on(), xq = bf(), H3 = _d(), W3 = xd(), Rd = w0(), Sq = Ed(), Eq = Ks(), Kr = Te().Buffer;
    K3.exports = function(e, r, o) {
      var f;
      e.padding ? f = e.padding : o ? f = 1 : f = 4;
      var p = _q(e), m;
      if (f === 4)
        m = Aq(p, r);
      else if (f === 1)
        m = Rq(p, r, o);
      else if (f === 3) {
        if (m = new Rd(r), m.cmp(p.modulus) >= 0)
          throw new Error("data too long for modulus");
      } else
        throw new Error("unknown padding");
      return o ? Eq(m, p) : Sq(m, p);
    };
    function Aq(t, e) {
      var r = t.modulus.byteLength(), o = e.length, f = xq("sha1").update(Kr.alloc(0)).digest(), p = f.length, m = 2 * p;
      if (o > r - m - 2)
        throw new Error("message too long");
      var y = Kr.alloc(r - o - m - 2), M = r - p - 1, x = Ad(p), S = W3(Kr.concat([f, y, Kr.alloc(1, 1), e], M), H3(x, M)), E = W3(x, H3(S, p));
      return new Rd(Kr.concat([Kr.alloc(1), E, S], r));
    }
    function Rq(t, e, r) {
      var o = e.length, f = t.modulus.byteLength();
      if (o > f - 11)
        throw new Error("message too long");
      var p;
      return r ? p = Kr.alloc(f - o - 3, 255) : p = Bq(f - o - 3), new Rd(Kr.concat([Kr.from([0, r ? 1 : 2]), p, Kr.alloc(1), e], f));
    }
    function Bq(t) {
      for (var e = Kr.allocUnsafe(t), r = 0, o = Ad(t * 2), f = 0, p;r < t; )
        f === o.length && (o = Ad(t * 2), f = 0), p = o[f++], p && (e[r++] = p);
      return e;
    }
  });
  Y3 = T((EL, G3) => {
    var qq = Ha(), Z3 = _d(), V3 = xd(), $3 = w0(), Iq = Ks(), Tq = bf(), kq = Ed(), Za = Te().Buffer;
    G3.exports = function(e, r, o) {
      var f;
      e.padding ? f = e.padding : o ? f = 1 : f = 4;
      var p = qq(e), m = p.modulus.byteLength();
      if (r.length > m || new $3(r).cmp(p.modulus) >= 0)
        throw new Error("decryption error");
      var y;
      o ? y = kq(new $3(r), p) : y = Iq(r, p);
      var M = Za.alloc(m - y.length);
      if (y = Za.concat([M, y], m), f === 4)
        return Lq(p, y);
      if (f === 1)
        return Nq(p, y, o);
      if (f === 3)
        return y;
      throw new Error("unknown padding");
    };
    function Lq(t, e) {
      var r = t.modulus.byteLength(), o = Tq("sha1").update(Za.alloc(0)).digest(), f = o.length;
      if (e[0] !== 0)
        throw new Error("decryption error");
      var p = e.slice(1, f + 1), m = e.slice(f + 1), y = V3(p, Z3(m, f)), M = V3(m, Z3(y, r - f - 1));
      if (Dq(o, M.slice(0, f)))
        throw new Error("decryption error");
      for (var x = f;M[x] === 0; )
        x++;
      if (M[x++] !== 1)
        throw new Error("decryption error");
      return M.slice(x);
    }
    function Nq(t, e, r) {
      for (var o = e.slice(0, 2), f = 2, p = 0;e[f++] !== 0; )
        if (f >= e.length) {
          p++;
          break;
        }
      var m = e.slice(2, f - 1);
      if ((o.toString("hex") !== "0002" && !r || o.toString("hex") !== "0001" && r) && p++, m.length < 8 && p++, p)
        throw new Error("decryption error");
      return e.slice(f);
    }
    function Dq(t, e) {
      t = Za.from(t), e = Za.from(e);
      var r = 0, o = t.length;
      t.length !== e.length && (r++, o = Math.min(t.length, e.length));
      for (var f = -1;++f < o; )
        r += t[f] ^ e[f];
      return r;
    }
  });
  X3 = T((Vn) => {
    Vn.publicEncrypt = j3();
    Vn.privateDecrypt = Y3();
    Vn.privateEncrypt = function(e, r) {
      return Vn.publicEncrypt(e, r, true);
    };
    Vn.publicDecrypt = function(e, r) {
      return Vn.privateDecrypt(e, r, true);
    };
  });
  ow = T((Va) => {
    function J3() {
      throw new Error(`secure random number generation not supported by this browser
use chrome, FireFox or Internet Explorer 11`);
    }
    var ew = Te(), Q3 = on(), tw = ew.Buffer, rw = ew.kMaxLength, Bd = global.crypto || global.msCrypto, iw = Math.pow(2, 32) - 1;
    function nw(t, e) {
      if (typeof t != "number" || t !== t)
        throw new TypeError("offset must be a number");
      if (t > iw || t < 0)
        throw new TypeError("offset must be a uint32");
      if (t > rw || t > e)
        throw new RangeError("offset out of range");
    }
    function fw(t, e, r) {
      if (typeof t != "number" || t !== t)
        throw new TypeError("size must be a number");
      if (t > iw || t < 0)
        throw new TypeError("size must be a uint32");
      if (t + e > r || t > rw)
        throw new RangeError("buffer too small");
    }
    Bd && Bd.getRandomValues ? (Va.randomFill = Pq, Va.randomFillSync = Cq) : (Va.randomFill = J3, Va.randomFillSync = J3);
    function Pq(t, e, r, o) {
      if (!tw.isBuffer(t) && !(t instanceof global.Uint8Array))
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
      if (typeof e == "function")
        o = e, e = 0, r = t.length;
      else if (typeof r == "function")
        o = r, r = t.length - e;
      else if (typeof o != "function")
        throw new TypeError('"cb" argument must be a function');
      return nw(e, t.length), fw(r, e, t.length), aw(t, e, r, o);
    }
    function aw(t, e, r, o) {
      if (true) {
        var f = t.buffer, p = new Uint8Array(f, e, r);
        if (Bd.getRandomValues(p), o) {
          process.nextTick(function() {
            o(null, t);
          });
          return;
        }
        return t;
      }
      if (o) {
        Q3(r, function(y, M) {
          if (y)
            return o(y);
          M.copy(t, e), o(null, t);
        });
        return;
      }
      var m = Q3(r);
      return m.copy(t, e), t;
    }
    function Cq(t, e, r) {
      if (typeof e > "u" && (e = 0), !tw.isBuffer(t) && !(t instanceof global.Uint8Array))
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
      return nw(e, t.length), r === undefined && (r = t.length - e), fw(r, e, t.length), aw(t, e, r);
    }
  });
  qd = T((ke) => {
    ke.randomBytes = ke.rng = ke.pseudoRandomBytes = ke.prng = on();
    ke.createHash = ke.Hash = bf();
    ke.createHmac = ke.Hmac = wu();
    var Oq = Eb(), Fq = Object.keys(Oq), Uq = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Fq);
    ke.getHashes = function() {
      return Uq;
    };
    var sw = Iu();
    ke.pbkdf2 = sw.pbkdf2;
    ke.pbkdf2Sync = sw.pbkdf2Sync;
    var ui = Vm();
    ke.Cipher = ui.Cipher;
    ke.createCipher = ui.createCipher;
    ke.Cipheriv = ui.Cipheriv;
    ke.createCipheriv = ui.createCipheriv;
    ke.Decipher = ui.Decipher;
    ke.createDecipher = ui.createDecipher;
    ke.Decipheriv = ui.Decipheriv;
    ke.createDecipheriv = ui.createDecipheriv;
    ke.getCiphers = ui.getCiphers;
    ke.listCiphers = ui.listCiphers;
    var $a = hg();
    ke.DiffieHellmanGroup = $a.DiffieHellmanGroup;
    ke.createDiffieHellmanGroup = $a.createDiffieHellmanGroup;
    ke.getDiffieHellman = $a.getDiffieHellman;
    ke.createDiffieHellman = $a.createDiffieHellman;
    ke.DiffieHellman = $a.DiffieHellman;
    var M0 = k3();
    ke.createSign = M0.createSign;
    ke.Sign = M0.Sign;
    ke.createVerify = M0.createVerify;
    ke.Verify = M0.Verify;
    ke.createECDH = P3();
    var _0 = X3();
    ke.publicEncrypt = _0.publicEncrypt;
    ke.privateEncrypt = _0.privateEncrypt;
    ke.publicDecrypt = _0.publicDecrypt;
    ke.privateDecrypt = _0.privateDecrypt;
    var hw = ow();
    ke.randomFill = hw.randomFill;
    ke.randomFillSync = hw.randomFillSync;
    ke.createCredentials = function() {
      throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join(`
`));
    };
    ke.constants = { DH_CHECK_P_NOT_SAFE_PRIME: 2, DH_CHECK_P_NOT_PRIME: 1, DH_UNABLE_TO_CHECK_GENERATOR: 4, DH_NOT_SUITABLE_GENERATOR: 8, NPN_ENABLED: 1, ALPN_ENABLED: 1, RSA_PKCS1_PADDING: 1, RSA_SSLV23_PADDING: 2, RSA_NO_PADDING: 3, RSA_PKCS1_OAEP_PADDING: 4, RSA_X931_PADDING: 5, RSA_PKCS1_PSS_PADDING: 6, POINT_CONVERSION_COMPRESSED: 2, POINT_CONVERSION_UNCOMPRESSED: 4, POINT_CONVERSION_HYBRID: 6 };
  });
  Xt = {};
  Ja(Xt, { DEFAULT_ENCODING: () => Ga, default: () => Wq, getCurves: () => dw, getRandomValues: () => uw, randomUUID: () => lw, scrypt: () => Td, scryptSync: () => Id, timingSafeEqual: () => x0, webcrypto: () => cw });
  ot(Xt, rn(qd()));
  zq = rn(qd());
  Hq = ["p192", "p224", "p256", "p384", "p521", "curve25519", "ed25519", "secp256k1", "secp224r1", "prime256v1", "prime192v1", "ed25519", "secp384r1", "secp521r1"];
  x0 = "timingSafeEqual" in crypto ? (t, e) => {
    let { byteLength: r } = t, { byteLength: o } = e;
    if (typeof r != "number" || typeof o != "number")
      throw new TypeError("Input must be an array buffer view");
    if (r !== o)
      throw new RangeError("Input buffers must have the same length");
    return crypto.timingSafeEqual(t, e);
  } : undefined;
  Id = "scryptSync" in crypto ? (t, e, r, o) => {
    let f = crypto.scryptSync(t, e, r, o);
    return Ga !== "buffer" ? new Buffer(f).toString(Ga) : new Buffer(f);
  } : undefined;
  Td = "scryptSync" in crypto ? function(t, e, r, o, f) {
    if (typeof o == "function" && (f = o, o = undefined), typeof f != "function") {
      var p = new TypeError("callback must be a function");
      throw p.code = "ERR_INVALID_CALLBACK", p;
    }
    try {
      let m = crypto.scryptSync(t, e, r, o);
      process.nextTick(f, null, Ga !== "buffer" ? new Buffer(m).toString(Ga) : new Buffer(m));
    } catch (m) {
      throw m;
    }
  } : undefined;
  x0 && (Object.defineProperty(x0, "name", { value: "::bunternal::" }), Object.defineProperty(Td, "name", { value: "::bunternal::" }), Object.defineProperty(Id, "name", { value: "::bunternal::" }));
  cw = crypto;
  Wq = { ...zq, getRandomValues: uw, randomUUID: lw, timingSafeEqual: x0, scryptSync: Id, scrypt: Td, webcrypto: cw, getCurves: dw };
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// ../../node_modules/crypto-js/core.js
var require_core = __commonJS((exports, module) => {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory();
    } else if (typeof define === "function" && define.amd) {
      define([], factory);
    } else {
      root.CryptoJS = factory();
    }
  })(exports, function() {
    var CryptoJS = CryptoJS || function(Math2, undefined2) {
      var crypto2;
      if (typeof window !== "undefined" && window.crypto) {
        crypto2 = window.crypto;
      }
      if (typeof self !== "undefined" && self.crypto) {
        crypto2 = self.crypto;
      }
      if (typeof globalThis !== "undefined" && globalThis.crypto) {
        crypto2 = globalThis.crypto;
      }
      if (!crypto2 && typeof window !== "undefined" && window.msCrypto) {
        crypto2 = window.msCrypto;
      }
      if (!crypto2 && typeof global !== "undefined" && global.crypto) {
        crypto2 = global.crypto;
      }
      if (!crypto2 && true) {
        try {
          crypto2 = (init_crypto(), __toCommonJS(exports_crypto));
        } catch (err) {
        }
      }
      var cryptoSecureRandomInt = function() {
        if (crypto2) {
          if (typeof crypto2.getRandomValues === "function") {
            try {
              return crypto2.getRandomValues(new Uint32Array(1))[0];
            } catch (err) {
            }
          }
          if (typeof crypto2.randomBytes === "function") {
            try {
              return crypto2.randomBytes(4).readInt32LE();
            } catch (err) {
            }
          }
        }
        throw new Error("Native crypto module could not be used to get secure random number.");
      };
      var create = Object.create || function() {
        function F() {
        }
        return function(obj) {
          var subtype;
          F.prototype = obj;
          subtype = new F;
          F.prototype = null;
          return subtype;
        };
      }();
      var C = {};
      var C_lib = C.lib = {};
      var Base = C_lib.Base = function() {
        return {
          extend: function(overrides) {
            var subtype = create(this);
            if (overrides) {
              subtype.mixIn(overrides);
            }
            if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
              subtype.init = function() {
                subtype.$super.init.apply(this, arguments);
              };
            }
            subtype.init.prototype = subtype;
            subtype.$super = this;
            return subtype;
          },
          create: function() {
            var instance = this.extend();
            instance.init.apply(instance, arguments);
            return instance;
          },
          init: function() {
          },
          mixIn: function(properties) {
            for (var propertyName in properties) {
              if (properties.hasOwnProperty(propertyName)) {
                this[propertyName] = properties[propertyName];
              }
            }
            if (properties.hasOwnProperty("toString")) {
              this.toString = properties.toString;
            }
          },
          clone: function() {
            return this.init.prototype.extend(this);
          }
        };
      }();
      var WordArray = C_lib.WordArray = Base.extend({
        init: function(words, sigBytes) {
          words = this.words = words || [];
          if (sigBytes != undefined2) {
            this.sigBytes = sigBytes;
          } else {
            this.sigBytes = words.length * 4;
          }
        },
        toString: function(encoder) {
          return (encoder || Hex).stringify(this);
        },
        concat: function(wordArray) {
          var thisWords = this.words;
          var thatWords = wordArray.words;
          var thisSigBytes = this.sigBytes;
          var thatSigBytes = wordArray.sigBytes;
          this.clamp();
          if (thisSigBytes % 4) {
            for (var i = 0;i < thatSigBytes; i++) {
              var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
            }
          } else {
            for (var j = 0;j < thatSigBytes; j += 4) {
              thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
            }
          }
          this.sigBytes += thatSigBytes;
          return this;
        },
        clamp: function() {
          var words = this.words;
          var sigBytes = this.sigBytes;
          words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
          words.length = Math2.ceil(sigBytes / 4);
        },
        clone: function() {
          var clone = Base.clone.call(this);
          clone.words = this.words.slice(0);
          return clone;
        },
        random: function(nBytes) {
          var words = [];
          for (var i = 0;i < nBytes; i += 4) {
            words.push(cryptoSecureRandomInt());
          }
          return new WordArray.init(words, nBytes);
        }
      });
      var C_enc = C.enc = {};
      var Hex = C_enc.Hex = {
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var hexChars = [];
          for (var i = 0;i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 15).toString(16));
          }
          return hexChars.join("");
        },
        parse: function(hexStr) {
          var hexStrLength = hexStr.length;
          var words = [];
          for (var i = 0;i < hexStrLength; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
          }
          return new WordArray.init(words, hexStrLength / 2);
        }
      };
      var Latin1 = C_enc.Latin1 = {
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var latin1Chars = [];
          for (var i = 0;i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            latin1Chars.push(String.fromCharCode(bite));
          }
          return latin1Chars.join("");
        },
        parse: function(latin1Str) {
          var latin1StrLength = latin1Str.length;
          var words = [];
          for (var i = 0;i < latin1StrLength; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
          }
          return new WordArray.init(words, latin1StrLength);
        }
      };
      var Utf8 = C_enc.Utf8 = {
        stringify: function(wordArray) {
          try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
          } catch (e) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        parse: function(utf8Str) {
          return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
      };
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        reset: function() {
          this._data = new WordArray.init;
          this._nDataBytes = 0;
        },
        _append: function(data) {
          if (typeof data == "string") {
            data = Utf8.parse(data);
          }
          this._data.concat(data);
          this._nDataBytes += data.sigBytes;
        },
        _process: function(doFlush) {
          var processedWords;
          var data = this._data;
          var dataWords = data.words;
          var dataSigBytes = data.sigBytes;
          var blockSize = this.blockSize;
          var blockSizeBytes = blockSize * 4;
          var nBlocksReady = dataSigBytes / blockSizeBytes;
          if (doFlush) {
            nBlocksReady = Math2.ceil(nBlocksReady);
          } else {
            nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
          }
          var nWordsReady = nBlocksReady * blockSize;
          var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
          if (nWordsReady) {
            for (var offset = 0;offset < nWordsReady; offset += blockSize) {
              this._doProcessBlock(dataWords, offset);
            }
            processedWords = dataWords.splice(0, nWordsReady);
            data.sigBytes -= nBytesReady;
          }
          return new WordArray.init(processedWords, nBytesReady);
        },
        clone: function() {
          var clone = Base.clone.call(this);
          clone._data = this._data.clone();
          return clone;
        },
        _minBufferSize: 0
      });
      var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
        cfg: Base.extend(),
        init: function(cfg) {
          this.cfg = this.cfg.extend(cfg);
          this.reset();
        },
        reset: function() {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        update: function(messageUpdate) {
          this._append(messageUpdate);
          this._process();
          return this;
        },
        finalize: function(messageUpdate) {
          if (messageUpdate) {
            this._append(messageUpdate);
          }
          var hash = this._doFinalize();
          return hash;
        },
        blockSize: 512 / 32,
        _createHelper: function(hasher) {
          return function(message, cfg) {
            return new hasher.init(cfg).finalize(message);
          };
        },
        _createHmacHelper: function(hasher) {
          return function(message, key) {
            return new C_algo.HMAC.init(hasher, key).finalize(message);
          };
        }
      });
      var C_algo = C.algo = {};
      return C;
    }(Math);
    return CryptoJS;
  });
});

// ../../node_modules/crypto-js/sha256.js
var require_sha256 = __commonJS((exports, module) => {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require_core());
    } else if (typeof define === "function" && define.amd) {
      define(["./core"], factory);
    } else {
      factory(root.CryptoJS);
    }
  })(exports, function(CryptoJS) {
    (function(Math2) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var H = [];
      var K = [];
      (function() {
        function isPrime(n2) {
          var sqrtN = Math2.sqrt(n2);
          for (var factor = 2;factor <= sqrtN; factor++) {
            if (!(n2 % factor)) {
              return false;
            }
          }
          return true;
        }
        function getFractionalBits(n2) {
          return (n2 - (n2 | 0)) * 4294967296 | 0;
        }
        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
          if (isPrime(n)) {
            if (nPrime < 8) {
              H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
            }
            K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
            nPrime++;
          }
          n++;
        }
      })();
      var W = [];
      var SHA256 = C_algo.SHA256 = Hasher.extend({
        _doReset: function() {
          this._hash = new WordArray.init(H.slice(0));
        },
        _doProcessBlock: function(M, offset) {
          var H2 = this._hash.words;
          var a = H2[0];
          var b = H2[1];
          var c = H2[2];
          var d = H2[3];
          var e = H2[4];
          var f = H2[5];
          var g = H2[6];
          var h = H2[7];
          for (var i = 0;i < 64; i++) {
            if (i < 16) {
              W[i] = M[offset + i] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
              var gamma1x = W[i - 2];
              var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
              W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }
            var ch = e & f ^ ~e & g;
            var maj = a & b ^ a & c ^ b & c;
            var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
            var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
            var t1 = h + sigma1 + ch + K[i] + W[i];
            var t22 = sigma0 + maj;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t22 | 0;
          }
          H2[0] = H2[0] + a | 0;
          H2[1] = H2[1] + b | 0;
          H2[2] = H2[2] + c | 0;
          H2[3] = H2[3] + d | 0;
          H2[4] = H2[4] + e | 0;
          H2[5] = H2[5] + f | 0;
          H2[6] = H2[6] + g | 0;
          H2[7] = H2[7] + h | 0;
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          data.sigBytes = dataWords.length * 4;
          this._process();
          return this._hash;
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      C.SHA256 = Hasher._createHelper(SHA256);
      C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);
    return CryptoJS.SHA256;
  });
});

// ../../node_modules/crypto-js/hmac.js
var require_hmac = __commonJS((exports, module) => {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require_core());
    } else if (typeof define === "function" && define.amd) {
      define(["./core"], factory);
    } else {
      factory(root.CryptoJS);
    }
  })(exports, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var C_enc = C.enc;
      var Utf8 = C_enc.Utf8;
      var C_algo = C.algo;
      var HMAC = C_algo.HMAC = Base.extend({
        init: function(hasher, key) {
          hasher = this._hasher = new hasher.init;
          if (typeof key == "string") {
            key = Utf8.parse(key);
          }
          var hasherBlockSize = hasher.blockSize;
          var hasherBlockSizeBytes = hasherBlockSize * 4;
          if (key.sigBytes > hasherBlockSizeBytes) {
            key = hasher.finalize(key);
          }
          key.clamp();
          var oKey = this._oKey = key.clone();
          var iKey = this._iKey = key.clone();
          var oKeyWords = oKey.words;
          var iKeyWords = iKey.words;
          for (var i = 0;i < hasherBlockSize; i++) {
            oKeyWords[i] ^= 1549556828;
            iKeyWords[i] ^= 909522486;
          }
          oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
          this.reset();
        },
        reset: function() {
          var hasher = this._hasher;
          hasher.reset();
          hasher.update(this._iKey);
        },
        update: function(messageUpdate) {
          this._hasher.update(messageUpdate);
          return this;
        },
        finalize: function(messageUpdate) {
          var hasher = this._hasher;
          var innerHash = hasher.finalize(messageUpdate);
          hasher.reset();
          var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
          return hmac;
        }
      });
    })();
  });
});

// ../../node_modules/crypto-js/hmac-sha256.js
var require_hmac_sha256 = __commonJS((exports, module) => {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require_core(), require_sha256(), require_hmac());
    } else if (typeof define === "function" && define.amd) {
      define(["./core", "./sha256", "./hmac"], factory);
    } else {
      factory(root.CryptoJS);
    }
  })(exports, function(CryptoJS) {
    return CryptoJS.HmacSHA256;
  });
});

// ../../node_modules/crypto-js/enc-base64.js
var require_enc_base64 = __commonJS((exports, module) => {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require_core());
    } else if (typeof define === "function" && define.amd) {
      define(["./core"], factory);
    } else {
      factory(root.CryptoJS);
    }
  })(exports, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;
      var Base64 = C_enc.Base64 = {
        stringify: function(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var map = this._map;
          wordArray.clamp();
          var base64Chars = [];
          for (var i = 0;i < sigBytes; i += 3) {
            var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
            var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
            var triplet = byte1 << 16 | byte2 << 8 | byte3;
            for (var j = 0;j < 4 && i + j * 0.75 < sigBytes; j++) {
              base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            while (base64Chars.length % 4) {
              base64Chars.push(paddingChar);
            }
          }
          return base64Chars.join("");
        },
        parse: function(base64Str) {
          var base64StrLength = base64Str.length;
          var map = this._map;
          var reverseMap = this._reverseMap;
          if (!reverseMap) {
            reverseMap = this._reverseMap = [];
            for (var j = 0;j < map.length; j++) {
              reverseMap[map.charCodeAt(j)] = j;
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            var paddingIndex = base64Str.indexOf(paddingChar);
            if (paddingIndex !== -1) {
              base64StrLength = paddingIndex;
            }
          }
          return parseLoop(base64Str, base64StrLength, reverseMap);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
      function parseLoop(base64Str, base64StrLength, reverseMap) {
        var words = [];
        var nBytes = 0;
        for (var i = 0;i < base64StrLength; i++) {
          if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
            nBytes++;
          }
        }
        return WordArray.create(words, nBytes);
      }
    })();
    return CryptoJS.enc.Base64;
  });
});

// src/sparkai.js
var import_hmac_sha256 = __toESM(require_hmac_sha256(), 1);
var import_enc_base64 = __toESM(require_enc_base64(), 1);
function askSpark(messages) {
  const appid = localStorage.getItem("sparkai.appid") || SPARKAI_APP_ID;
  return new Promise((resolve) => {
    const ws2 = new WebSocket(getWebSocketUrl());
    ws2.onopen = () => {
      ws2.send(JSON.stringify({
        header: {
          app_id: appid,
          uid: appid
        },
        parameter: {
          chat: {
            domain: SPARKAI_DOMAIN,
            temperature: SPARKAI_TEMPERATURE,
            max_tokens: SPARKAI_MAX_TOKENS,
            top_k: SPARKAI_TOP_K
          }
        },
        payload: {
          message: {
            text: JSON.stringify(messages)
          }
        }
      }));
    };
    let message = "";
    ws2.onerror = (e) => resolve(message);
    ws2.onmessage = async (e) => {
      if (!runtime.running)
        return;
      const data = JSON.parse(e.data);
      if (data.header.code !== 0)
        return resolve(message);
      message += data.payload.choices.text.map((text) => text.content).join("");
      if (data.header.status === 2) {
        ws2.close();
        resolve(message.trim());
      }
    };
  });
}
function provideAskSparkFunctionJs() {
  const appid = localStorage.getItem(`sparkai.appid`) || SPARKAI_APP_ID;
  return this.provideFunction_("sparkai_ask", [
    `const ${this.FUNCTION_NAME_PLACEHOLDER_} = (messages) => new Promise((resolve) => {`,
    `  const ws = new WebSocket("${getWebSocketUrl()}"); `,
    "  ws.onopen = () => {",
    "    ws.send(JSON.stringify({",
    "      header: {",
    `          app_id: '${appid}', `,
    `          uid: '${appid}', `,
    "        },",
    "        parameter: {",
    "          chat: {",
    `            domain: '${SPARKAI_DOMAIN}', `,
    `            temperature: ${SPARKAI_TEMPERATURE},`,
    `            max_tokens: ${SPARKAI_MAX_TOKENS},`,
    `            top_k: ${SPARKAI_TOP_K},`,
    "          },",
    "        },",
    "        payload: {",
    "          message: { text: messages },",
    "        },",
    "    }));",
    "  };",
    `  let message = '';`,
    `  ws.onerror = (e) => resolve(message); `,
    "  ws.onmessage = async (e) => {",
    "    if (!runtime.running) return;",
    "    const data = JSON.parse(e.data);",
    `    if (data.header.code !== 0) return resolve(message);`,
    `    message += data.payload.choices.text.map((text) => text.content).join(''); `,
    "    if (data.header.status === 2) {",
    "      ws.close();",
    "      resolve(message.trim());",
    "    }",
    "  };",
    "});"
  ]);
}
var SPARKAI_HOST = "spark-api.xf-yun.com";
var SPARKAI_PATHNAME = "/v1.1/chat";
var SPARKAI_APP_ID = "db45f79e";
var SPARKAI_API_SECRET = "MWFiNjVmNDA4YjNhODFkZGE0MGQ1YWRj";
var SPARKAI_API_KEY = "6a3dfe79b9e9ec588ca65bf3b9d9c847";
var SPARKAI_DOMAIN = "general";
var SPARKAI_TEMPERATURE = 0.4;
var SPARKAI_MAX_TOKENS = 200;
var SPARKAI_TOP_K = 3;
var getWebSocketUrl = () => {
  const date = new Date().toGMTString();
  const apisecret = localStorage.getItem("sparkai.apisecret") || SPARKAI_API_SECRET;
  const apikey = localStorage.getItem("sparkai.apikey") || SPARKAI_API_KEY;
  const signatureRaw = `host: ${SPARKAI_HOST}\ndate: ${date}\nGET ${SPARKAI_PATHNAME} HTTP/1.1`;
  const signature = import_enc_base64.default.stringify(import_hmac_sha256.default(signatureRaw, apisecret));
  const authorizationRaw = `api_key="${apikey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = btoa(authorizationRaw);
  return `wss://${SPARKAI_HOST}${SPARKAI_PATHNAME}?authorization=${authorization}&date=${date}&host=${SPARKAI_HOST}`;
};
export {
  provideAskSparkFunctionJs,
  askSpark
};
