var t = function(t, e) {
    var n = (t = t || require("./node/self.js")).window,
        i = t.document,
        r = new function() {
            var t = /^(statics|enumerable|beans|preserve)$/,
                n = [],
                i = n.slice,
                r = Object.create,
                s = Object.getOwnPropertyDescriptor,
                a = Object.defineProperty,
                o = n.forEach || function(t, e) {
                    for (var n = 0, i = this.length; n < i; n++) t.call(e, this[n], n, this)
                },
                h = function(t, e) {
                    for (var n in this) this.hasOwnProperty(n) && t.call(e, this[n], n, this)
                },
                u = Object.assign || function(t) {
                    for (var e = 1, n = arguments.length; e < n; e++) {
                        var i = arguments[e];
                        for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
                    }
                    return t
                },
                l = function(t, e, n) {
                    if (t) {
                        var i = s(t, "length");
                        (i && "number" == typeof i.value ? o : h).call(t, e, n = n || t)
                    }
                    return n
                };

            function c(e, n, i, r, o) {
                var h = {};

                function u(t, u) {
                    "string" == typeof(u = u || (u = s(n, t)) && (u.get ? u : u.value)) && "#" === u[0] && (u = e[u.substring(1)] || u);
                    var l, c = "function" == typeof u,
                        d = u,
                        _ = o || c && !u.base ? u && u.get ? t in e : e[t] : null;
                    o && _ || (c && _ && (u.base = _), c && !1 !== r && (l = t.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (h[l[3].toLowerCase() + l[4]] = l[2]), d && !c && d.get && "function" == typeof d.get && f.isPlainObject(d) || (d = {
                        value: d,
                        writable: !0
                    }), (s(e, t) || {
                        configurable: !0
                    }).configurable && (d.configurable = !0, d.enumerable = null != i ? i : !l), a(e, t, d))
                }
                if (n) {
                    for (var l in n) n.hasOwnProperty(l) && !t.test(l) && u(l);
                    for (var l in h) {
                        var c = h[l],
                            d = e["set" + c],
                            _ = e["get" + c] || d && e["is" + c];
                        !_ || !0 !== r && 0 !== _.length || u(l, {
                            get: _,
                            set: d
                        })
                    }
                }
                return e
            }

            function f() {
                for (var t = 0, e = arguments.length; t < e; t++) {
                    var n = arguments[t];
                    n && u(this, n)
                }
                return this
            }
            return c(f, {
                inject: function(t) {
                    if (t) {
                        var e = !0 === t.statics ? t : t.statics,
                            n = t.beans,
                            i = t.preserve;
                        e !== t && c(this.prototype, t, t.enumerable, n, i), c(this, e, null, n, i)
                    }
                    for (var r = 1, s = arguments.length; r < s; r++) this.inject(arguments[r]);
                    return this
                },
                extend: function() {
                    for (var t, e, n, i = this, s = 0, o = arguments.length; s < o && (!t || !e); s++) n = arguments[s], t = t || n.initialize, e = e || n.prototype;
                    return e = (t = t || function() {
                        i.apply(this, arguments)
                    }).prototype = e || r(this.prototype), a(e, "constructor", {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }), c(t, this), arguments.length && this.inject.apply(t, arguments), t.base = i, t
                }
            }).inject({
                enumerable: !1,
                initialize: f,
                set: f,
                inject: function() {
                    for (var t = 0, e = arguments.length; t < e; t++) {
                        var n = arguments[t];
                        n && c(this, n, n.enumerable, n.beans, n.preserve)
                    }
                    return this
                },
                extend: function() {
                    var t = r(this);
                    return t.inject.apply(t, arguments)
                },
                each: function(t, e) {
                    return l(this, t, e)
                },
                clone: function() {
                    return new this.constructor(this)
                },
                statics: {
                    set: u,
                    each: l,
                    create: r,
                    define: a,
                    describe: s,
                    clone: function(t) {
                        return u(new t.constructor, t)
                    },
                    isPlainObject: function(t) {
                        var e = null != t && t.constructor;
                        return e && (e === Object || e === f || "Object" === e.name)
                    },
                    pick: function(t, n) {
                        return t !== e ? t : n
                    },
                    slice: function(t, e, n) {
                        return i.call(t, e, n)
                    }
                }
            })
        };
    "undefined" != typeof module && (module.exports = r), r.inject({
        enumerable: !1,
        toString: function() {
            return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + r.each(this, (function(t, e) {
                if (!/^_/.test(e)) {
                    var n = typeof t;
                    this.push(e + ": " + ("number" === n ? u.instance.number(t) : "string" === n ? "'" + t + "'" : t))
                }
            }), []).join(", ") + " }"
        },
        getClassName: function() {
            return this._class || ""
        },
        importJSON: function(t) {
            return r.importJSON(t, this)
        },
        exportJSON: function(t) {
            return r.exportJSON(this, t)
        },
        toJSON: function() {
            return r.serialize(this)
        },
        set: function(t, e) {
            return t && r.filter(this, t, e, this._prioritize), this
        }
    }, {
        beans: !1,
        statics: {
            exports: {},
            extend: function t() {
                var e = t.base.apply(this, arguments),
                    n = e.prototype._class;
                return n && !r.exports[n] && (r.exports[n] = e), e
            },
            equals: function(t, e) {
                if (t === e) return !0;
                if (t && t.equals) return t.equals(e);
                if (e && e.equals) return e.equals(t);
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    if (Array.isArray(t) && Array.isArray(e)) {
                        if ((n = t.length) !== e.length) return !1;
                        for (; n--;)
                            if (!r.equals(t[n], e[n])) return !1
                    } else {
                        var n, i = Object.keys(t);
                        if ((n = i.length) !== Object.keys(e).length) return !1;
                        for (; n--;) {
                            var s = i[n];
                            if (!e.hasOwnProperty(s) || !r.equals(t[s], e[s])) return !1
                        }
                    }
                    return !0
                }
                return !1
            },
            read: function(t, n, i, s) {
                if (this === r) {
                    var a = this.peek(t, n);
                    return t.__index++, a
                }
                var o = this.prototype,
                    h = o._readIndex,
                    u = n || h && t.__index || 0,
                    l = t.length,
                    c = t[u];
                if (s = s || l - u, c instanceof this || i && i.readNull && null == c && s <= 1) return h && (t.__index = u + 1), c && i && i.clone ? c.clone() : c;
                if (c = r.create(o), h && (c.__read = !0), c = c.initialize.apply(c, u > 0 || u + s < l ? r.slice(t, u, u + s) : t) || c, h) {
                    t.__index = u + c.__read;
                    var f = c.__filtered;
                    f && (t.__filtered = f, c.__filtered = e), c.__read = e
                }
                return c
            },
            peek: function(t, e) {
                return t[t.__index = e || t.__index || 0]
            },
            remain: function(t) {
                return t.length - (t.__index || 0)
            },
            readList: function(t, e, n, i) {
                for (var r, s = [], a = e || 0, o = i ? a + i : t.length, h = a; h < o; h++) s.push(Array.isArray(r = t[h]) ? this.read(r, 0, n) : this.read(t, h, n, 1));
                return s
            },
            readNamed: function(t, n, i, s, a) {
                var o = this.getNamed(t, n),
                    h = o !== e;
                if (h) {
                    var u = t.__filtered;
                    if (!u) {
                        var l = this.getSource(t);
                        (u = t.__filtered = r.create(l)).__unfiltered = l
                    }
                    u[n] = e
                }
                return this.read(h ? [o] : t, i, s, a)
            },
            readSupported: function(t, n) {
                var i = this.getSource(t),
                    r = this,
                    s = !1;
                return i && Object.keys(i).forEach((function(i) {
                    if (i in n) {
                        var a = r.readNamed(t, i);
                        a !== e && (n[i] = a), s = !0
                    }
                })), s
            },
            getSource: function(t) {
                var n = t.__source;
                if (n === e) {
                    var i = 1 === t.length && t[0];
                    n = t.__source = i && r.isPlainObject(i) ? i : null
                }
                return n
            },
            getNamed: function(t, e) {
                var n = this.getSource(t);
                if (n) return e ? n[e] : t.__filtered || n
            },
            hasNamed: function(t, e) {
                return !!this.getNamed(t, e)
            },
            filter: function(t, n, i, r) {
                var s;

                function a(r) {
                    if (!(i && r in i || s && r in s)) {
                        var a = n[r];
                        a !== e && (t[r] = a)
                    }
                }
                if (r) {
                    for (var o, h = {}, u = 0, l = r.length; u < l; u++)(o = r[u]) in n && (a(o), h[o] = !0);
                    s = h
                }
                return Object.keys(n.__unfiltered || n).forEach(a), t
            },
            isPlainValue: function(t, e) {
                return r.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t
            },
            serialize: function(t, e, n, i) {
                e = e || {};
                var s, a = !i;
                if (a && (e.formatter = new u(e.precision), i = {
                        length: 0,
                        definitions: {},
                        references: {},
                        add: function(t, e) {
                            var n = "#" + t._id,
                                i = this.references[n];
                            if (!i) {
                                this.length++;
                                var r = e.call(t),
                                    s = t._class;
                                s && r[0] !== s && r.unshift(s), this.definitions[n] = r, i = this.references[n] = [n]
                            }
                            return i
                        }
                    }), t && t._serialize) {
                    s = t._serialize(e, i);
                    var o = t._class;
                    !o || t._compactSerialize || !a && n || s[0] === o || s.unshift(o)
                } else if (Array.isArray(t)) {
                    s = [];
                    for (var h = 0, l = t.length; h < l; h++) s[h] = r.serialize(t[h], e, n, i)
                } else if (r.isPlainObject(t)) {
                    s = {};
                    var c = Object.keys(t);
                    for (h = 0, l = c.length; h < l; h++) {
                        var f = c[h];
                        s[f] = r.serialize(t[f], e, n, i)
                    }
                } else s = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                return a && i.length > 0 ? [
                    ["dictionary", i.definitions], s
                ] : s
            },
            deserialize: function(t, e, n, i, s) {
                var a = t,
                    o = !n,
                    h = o && t && t.length && "dictionary" === t[0][0];
                if (n = n || {}, Array.isArray(t)) {
                    var u = t[0],
                        l = "dictionary" === u;
                    if (1 == t.length && /^#/.test(u)) return n.dictionary[u];
                    a = [];
                    for (var c = (u = r.exports[u]) ? 1 : 0, f = t.length; c < f; c++) a.push(r.deserialize(t[c], e, n, l, h));
                    if (u) {
                        var d = a;
                        a = e ? e(u, d, o || s) : new u(d)
                    }
                } else if (r.isPlainObject(t))
                    for (var _ in a = {}, i && (n.dictionary = a), t) a[_] = r.deserialize(t[_], e, n);
                return h ? a[1] : a
            },
            exportJSON: function(t, e) {
                var n = r.serialize(t, e);
                return e && 0 == e.asString ? n : JSON.stringify(n)
            },
            importJSON: function(t, e) {
                return r.deserialize("string" == typeof t ? JSON.parse(t) : t, (function(t, n, i) {
                    var s = i && e && e.constructor === t,
                        a = s ? e : r.create(t.prototype);
                    if (1 === n.length && a instanceof x && (s || !(a instanceof C))) {
                        var o = n[0];
                        r.isPlainObject(o) && (o.insert = !1, s && (n = n.concat([{
                            insert: !0
                        }])))
                    }
                    return (s ? a.set : t).apply(a, n), s && (e = null), a
                }))
            },
            push: function(t, e) {
                var n = e.length;
                if (n < 4096) t.push.apply(t, e);
                else {
                    var i = t.length;
                    t.length += n;
                    for (var r = 0; r < n; r++) t[i + r] = e[r]
                }
                return t
            },
            splice: function(t, n, i, s) {
                var a = n && n.length,
                    o = i === e;
                (i = o ? t.length : i) > t.length && (i = t.length);
                for (var h = 0; h < a; h++) n[h]._index = i + h;
                if (o) return r.push(t, n), [];
                var u = [i, s];
                n && r.push(u, n);
                for (var l = t.splice.apply(t, u), c = (h = 0, l.length); h < c; h++) l[h]._index = e;
                for (h = i + a, c = t.length; h < c; h++) t[h]._index = h;
                return l
            },
            capitalize: function(t) {
                return t.replace(/\b[a-z]/g, (function(t) {
                    return t.toUpperCase()
                }))
            },
            camelize: function(t) {
                return t.replace(/-(.)/g, (function(t, e) {
                    return e.toUpperCase()
                }))
            },
            hyphenate: function(t) {
                return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }
        }
    });
    var s = {
            on: function(t, e) {
                if ("string" != typeof t) r.each(t, (function(t, e) {
                    this.on(e, t)
                }), this);
                else {
                    var n = this._eventTypes,
                        i = n && n[t],
                        s = this._callbacks = this._callbacks || {}; - 1 === (s = s[t] = s[t] || []).indexOf(e) && (s.push(e), i && i.install && 1 === s.length && i.install.call(this, t))
                }
                return this
            },
            off: function(t, e) {
                if ("string" == typeof t) {
                    var n, i = this._eventTypes,
                        s = i && i[t],
                        a = this._callbacks && this._callbacks[t];
                    return a && (!e || -1 !== (n = a.indexOf(e)) && 1 === a.length ? (s && s.uninstall && s.uninstall.call(this, t), delete this._callbacks[t]) : -1 !== n && a.splice(n, 1)), this
                }
                r.each(t, (function(t, e) {
                    this.off(e, t)
                }), this)
            },
            once: function(t, e) {
                return this.on(t, (function n() {
                    e.apply(this, arguments), this.off(t, n)
                }))
            },
            emit: function(t, e) {
                var n = this._callbacks && this._callbacks[t];
                if (!n) return !1;
                var i = r.slice(arguments, 1),
                    s = e && e.target && !e.currentTarget;
                n = n.slice(), s && (e.currentTarget = this);
                for (var a = 0, o = n.length; a < o; a++)
                    if (0 == n[a].apply(this, i)) {
                        e && e.stop && e.stop();
                        break
                    } return s && delete e.currentTarget, !0
            },
            responds: function(t) {
                return !(!this._callbacks || !this._callbacks[t])
            },
            attach: "#on",
            detach: "#off",
            fire: "#emit",
            _installEvents: function(t) {
                var e = this._eventTypes,
                    n = this._callbacks,
                    i = t ? "install" : "uninstall";
                if (e)
                    for (var r in n)
                        if (n[r].length > 0) {
                            var s = e[r],
                                a = s && s[i];
                            a && a.call(this, r)
                        }
            },
            statics: {
                inject: function t(e) {
                    var n = e._events;
                    if (n) {
                        var i = {};
                        r.each(n, (function(t, n) {
                            var s = "string" == typeof t,
                                a = s ? t : n,
                                o = r.capitalize(a),
                                h = a.substring(2).toLowerCase();
                            i[h] = s ? {} : t, a = "_" + a, e["get" + o] = function() {
                                return this[a]
                            }, e["set" + o] = function(t) {
                                var e = this[a];
                                e && this.off(h, e), t && this.on(h, t), this[a] = t
                            }
                        })), e._eventTypes = i
                    }
                    return t.base.apply(this, arguments)
                }
            }
        },
        a = r.extend({
            _class: "PaperScope",
            initialize: function e() {
                st = this, this.settings = new r({
                    applyMatrix: !0,
                    insertItems: !0,
                    handleSize: 4,
                    hitTolerance: 0
                }), this.project = null, this.projects = [], this.tools = [], this._id = e._id++, e._scopes[this._id] = this;
                var n = e.prototype;
                if (!this.support) {
                    var i = et.getContext(1, 1) || {};
                    n.support = {
                        nativeDash: "setLineDash" in i || "mozDash" in i,
                        nativeBlendModes: nt.nativeModes
                    }, et.release(i)
                }
                if (!this.agent) {
                    var s = t.navigator.userAgent.toLowerCase(),
                        a = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(s) || [])[0],
                        o = "darwin" === a ? "mac" : a,
                        h = n.agent = n.browser = {
                            platform: o
                        };
                    o && (h[o] = !0), s.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, (function(t, e, n, i, r) {
                        if (!h.chrome) {
                            var s = "opera" === e ? i : /^(node|trident)$/.test(e) ? r : n;
                            h.version = s, h.versionNumber = parseFloat(s), e = {
                                trident: "msie",
                                jsdom: "node"
                            } [e] || e, h.name = e, h[e] = !0
                        }
                    })), h.chrome && delete h.webkit, h.atom && delete h.chrome
                }
            },
            version: "0.12.15",
            getView: function() {
                var t = this.project;
                return t && t._view
            },
            getPaper: function() {
                return this
            },
            execute: function(t, e) {},
            install: function(t) {
                var e = this;
                for (var n in r.each(["project", "view", "tool"], (function(n) {
                        r.define(t, n, {
                            configurable: !0,
                            get: function() {
                                return e[n]
                            }
                        })
                    })), this) !/^_/.test(n) && this[n] && (t[n] = this[n])
            },
            setup: function(t) {
                return st = this, this.project = new w(t), this
            },
            createCanvas: function(t, e) {
                return et.getCanvas(t, e)
            },
            activate: function() {
                st = this
            },
            clear: function() {
                for (var t = this.projects, e = this.tools, n = t.length - 1; n >= 0; n--) t[n].remove();
                for (n = e.length - 1; n >= 0; n--) e[n].remove()
            },
            remove: function() {
                this.clear(), delete a._scopes[this._id]
            },
            statics: new function() {
                function t(t) {
                    return t += "Attribute",
                        function(e, n) {
                            return e[t](n) || e[t]("data-paper-" + n)
                        }
                }
                return {
                    _scopes: {},
                    _id: 0,
                    get: function(t) {
                        return this._scopes[t] || null
                    },
                    getAttribute: t("get"),
                    hasAttribute: t("has")
                }
            }
        }),
        o = r.extend(s, {
            initialize: function(t) {
                this._scope = st, this._index = this._scope[this._list].push(this) - 1, !t && this._scope[this._reference] || this.activate()
            },
            activate: function() {
                if (!this._scope) return !1;
                var t = this._scope[this._reference];
                return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0
            },
            isActive: function() {
                return this._scope[this._reference] === this
            },
            remove: function() {
                return null != this._index && (r.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0)
            },
            getView: function() {
                return this._scope.getView()
            }
        }),
        h = {
            findItemBoundsCollisions: function(t, e, n) {
                function i(t) {
                    for (var e = new Array(t.length), n = 0; n < t.length; n++) {
                        var i = t[n].getBounds();
                        e[n] = [i.left, i.top, i.right, i.bottom]
                    }
                    return e
                }
                var r = i(t),
                    s = e && e !== t ? i(e) : r;
                return this.findBoundsCollisions(r, s, n || 0)
            },
            findCurveBoundsCollisions: function(t, e, n, i) {
                function r(t) {
                    for (var e = Math.min, n = Math.max, i = new Array(t.length), r = 0; r < t.length; r++) {
                        var s = t[r];
                        i[r] = [e(s[0], s[2], s[4], s[6]), e(s[1], s[3], s[5], s[7]), n(s[0], s[2], s[4], s[6]), n(s[1], s[3], s[5], s[7])]
                    }
                    return i
                }
                var s = r(t),
                    a = e && e !== t ? r(e) : s;
                if (i) {
                    for (var o = this.findBoundsCollisions(s, a, n || 0, !1, !0), h = this.findBoundsCollisions(s, a, n || 0, !0, !0), u = [], l = 0, c = o.length; l < c; l++) u[l] = {
                        hor: o[l],
                        ver: h[l]
                    };
                    return u
                }
                return this.findBoundsCollisions(s, a, n || 0)
            },
            findBoundsCollisions: function(t, e, n, i, r) {
                var s = !e || t === e,
                    a = s ? t : t.concat(e),
                    o = t.length,
                    h = a.length;

                function u(t, e, n) {
                    for (var i = 0, r = t.length; i < r;) {
                        var s = r + i >>> 1;
                        a[t[s]][e] < n ? i = s + 1 : r = s
                    }
                    return i - 1
                }
                for (var l = i ? 1 : 0, c = l + 2, f = i ? 0 : 1, d = f + 2, _ = new Array(h), g = 0; g < h; g++) _[g] = g;
                _.sort((function(t, e) {
                    return a[t][l] - a[e][l]
                }));
                var v = [],
                    p = new Array(o);
                for (g = 0; g < h; g++) {
                    var m = _[g],
                        y = a[m],
                        w = s ? m : m - o,
                        x = m < o,
                        b = s || !x,
                        C = x ? [] : null;
                    if (v.length) {
                        var S = u(v, c, y[l] - n) + 1;
                        if (v.splice(0, S), s && r) {
                            C = C.concat(v);
                            for (var P = 0; P < v.length; P++) {
                                p[T = v[P]].push(w)
                            }
                        } else {
                            var I = y[d],
                                M = y[f];
                            for (P = 0; P < v.length; P++) {
                                var T = v[P],
                                    O = a[T],
                                    k = T < o,
                                    z = s || T >= o;
                                (r || (x && z || b && k) && I >= O[f] - n && M <= O[d] + n) && (x && z && C.push(s ? T : T - o), b && k && p[T].push(w))
                            }
                        }
                    }
                    if (x && (t === e && C.push(m), p[m] = C), v.length) {
                        var A = u(v, c, y[c]);
                        v.splice(A + 1, 0, m)
                    } else v.push(m)
                }
                for (g = 0; g < p.length; g++) {
                    var L = p[g];
                    L && L.sort((function(t, e) {
                        return t - e
                    }))
                }
                return p
            }
        },
        u = r.extend({
            initialize: function(t) {
                this.precision = r.pick(t, 5), this.multiplier = Math.pow(10, this.precision)
            },
            number: function(t) {
                return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t
            },
            pair: function(t, e, n) {
                return this.number(t) + (n || ",") + this.number(e)
            },
            point: function(t, e) {
                return this.number(t.x) + (e || ",") + this.number(t.y)
            },
            size: function(t, e) {
                return this.number(t.width) + (e || ",") + this.number(t.height)
            },
            rectangle: function(t, e) {
                return this.point(t, e) + (e || ",") + this.size(t, e)
            }
        });
    u.instance = new u;
    var l = new function() {
            var t = [
                    [.5773502691896257],
                    [0, .7745966692414834],
                    [.33998104358485626, .8611363115940526],
                    [0, .5384693101056831, .906179845938664],
                    [.2386191860831969, .6612093864662645, .932469514203152],
                    [0, .4058451513773972, .7415311855993945, .9491079123427585],
                    [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                    [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                    [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                    [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                    [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                    [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                    [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                    [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                    [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                ],
                e = [
                    [1],
                    [.8888888888888888, .5555555555555556],
                    [.6521451548625461, .34785484513745385],
                    [.5688888888888889, .47862867049936647, .23692688505618908],
                    [.46791393457269104, .3607615730481386, .17132449237917036],
                    [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                    [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                    [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                    [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                    [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                    [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                    [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                    [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                    [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                    [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                ],
                n = Math.abs,
                i = Math.sqrt,
                r = Math.pow,
                s = Math.log2 || function(t) {
                    return Math.log(t) * Math.LOG2E
                },
                a = 1e-12,
                o = 112e-18;

            function h(t, e, n) {
                return t < e ? e : t > n ? n : t
            }

            function u(t, e, i) {
                function r(t) {
                    var e = 134217729 * t,
                        n = t - e + e;
                    return [n, t - n]
                }
                var s = e * e - t * i,
                    a = e * e + t * i;
                if (3 * n(s) < a) {
                    var o = r(t),
                        h = r(e),
                        u = r(i),
                        l = e * e,
                        c = t * i;
                    s = l - c + (h[0] * h[0] - l + 2 * h[0] * h[1] + h[1] * h[1] - (o[0] * u[0] - c + o[0] * u[1] + o[1] * u[0] + o[1] * u[1]))
                }
                return s
            }

            function c() {
                var t = Math.max.apply(Math, arguments);
                return t && (t < 1e-8 || t > 1e8) ? r(2, -Math.round(s(t))) : 0
            }
            return {
                EPSILON: a,
                MACHINE_EPSILON: o,
                CURVETIME_EPSILON: 1e-8,
                GEOMETRIC_EPSILON: 1e-7,
                TRIGONOMETRIC_EPSILON: 1e-8,
                KAPPA: 4 * (i(2) - 1) / 3,
                isZero: function(t) {
                    return t >= -1e-12 && t <= a
                },
                isMachineZero: function(t) {
                    return t >= -112e-18 && t <= o
                },
                clamp: h,
                integrate: function(n, i, r, s) {
                    for (var a = t[s - 2], o = e[s - 2], h = .5 * (r - i), u = h + i, l = 0, c = s + 1 >> 1, f = 1 & s ? o[l++] * n(u) : 0; l < c;) {
                        var d = h * a[l];
                        f += o[l++] * (n(u + d) + n(u - d))
                    }
                    return h * f
                },
                findRoot: function(t, e, i, r, s, a, o) {
                    for (var u = 0; u < a; u++) {
                        var l = t(i),
                            c = l / e(i),
                            f = i - c;
                        if (n(c) < o) {
                            i = f;
                            break
                        }
                        l > 0 ? (s = i, i = f <= r ? .5 * (r + s) : f) : (r = i, i = f >= s ? .5 * (r + s) : f)
                    }
                    return h(i, r, s)
                },
                solveQuadratic: function(t, e, r, s, l, f) {
                    var d, _ = Infinity;
                    if (n(t) < a) {
                        if (n(e) < a) return n(r) < a ? -1 : 0;
                        d = -r / e
                    } else {
                        var g = u(t, e *= -.5, r);
                        if (g && n(g) < o) {
                            var v = c(n(t), n(e), n(r));
                            v && (g = u(t *= v, e *= v, r *= v))
                        }
                        if (g >= -112e-18) {
                            var p = g < 0 ? 0 : i(g),
                                m = e + (e < 0 ? -p : p);
                            0 === m ? _ = -(d = r / t) : (d = m / t, _ = r / m)
                        }
                    }
                    var y = 0,
                        w = null == l,
                        x = l - a,
                        b = f + a;
                    return isFinite(d) && (w || d > x && d < b) && (s[y++] = w ? d : h(d, l, f)), _ !== d && isFinite(_) && (w || _ > x && _ < b) && (s[y++] = w ? _ : h(_, l, f)), y
                },
                solveCubic: function(t, e, s, u, f, d, _) {
                    var g, v, p, m, y, w = c(n(t), n(e), n(s), n(u));

                    function x(n) {
                        var i = t * (g = n);
                        m = (i + (v = i + e)) * g + (p = v * g + s), y = p * g + u
                    }
                    if (w && (t *= w, e *= w, s *= w, u *= w), n(t) < a) t = e, v = s, p = u, g = Infinity;
                    else if (n(u) < a) v = e, p = s, g = 0;
                    else {
                        x(-e / t / 3);
                        var b = y / t,
                            C = r(n(b), 1 / 3),
                            S = b < 0 ? -1 : 1,
                            P = -m / t,
                            I = P > 0 ? 1.324717957244746 * Math.max(C, i(P)) : C,
                            M = g - S * I;
                        if (M !== g) {
                            do {
                                x(M), M = 0 === m ? g : g - y / m / (1 + o)
                            } while (S * M > S * g);
                            n(t) * g * g > n(u / g) && (v = ((p = -u / g) - s) / g)
                        }
                    }
                    var T = l.solveQuadratic(t, v, p, f, d, _),
                        O = null == d;
                    return isFinite(g) && (0 === T || T > 0 && g !== f[0] && g !== f[1]) && (O || g > d - a && g < _ + a) && (f[T++] = O ? g : h(g, d, _)), T
                }
            }
        },
        c = {
            _id: 1,
            _pools: {},
            get: function(t) {
                if (t) {
                    var e = this._pools[t];
                    return e || (e = this._pools[t] = {
                        _id: 1
                    }), e._id++
                }
                return this._id++
            }
        },
        f = r.extend({
            _class: "Point",
            _readIndex: !0,
            initialize: function(t, e) {
                var n = typeof t,
                    i = this.__read,
                    r = 0;
                if ("number" === n) {
                    var s = "number" == typeof e;
                    this._set(t, s ? e : t), i && (r = s ? 2 : 1)
                } else if ("undefined" === n || null === t) this._set(0, 0), i && (r = null === t ? 1 : 0);
                else {
                    var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                    r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "x" in a ? this._set(a.x || 0, a.y || 0) : "width" in a ? this._set(a.width || 0, a.height || 0) : "angle" in a ? (this._set(a.length || 0, 0), this.setAngle(a.angle || 0)) : (this._set(0, 0), r = 0)
                }
                return i && (this.__read = r), this
            },
            set: "#initialize",
            _set: function(t, e) {
                return this.x = t, this.y = e, this
            },
            equals: function(t) {
                return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1
            },
            clone: function() {
                return new f(this.x, this.y)
            },
            toString: function() {
                var t = u.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y)]
            },
            getLength: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            setLength: function(t) {
                if (this.isZero()) {
                    var e = this._angle || 0;
                    this._set(Math.cos(e) * t, Math.sin(e) * t)
                } else {
                    var n = t / this.getLength();
                    l.isZero(n) && this.getAngle(), this._set(this.x * n, this.y * n)
                }
            },
            getAngle: function() {
                return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
            },
            setAngle: function(t) {
                this.setAngleInRadians.call(this, t * Math.PI / 180)
            },
            getAngleInDegrees: "#getAngle",
            setAngleInDegrees: "#setAngle",
            getAngleInRadians: function() {
                if (arguments.length) {
                    var t = f.read(arguments),
                        e = this.getLength() * t.getLength();
                    if (l.isZero(e)) return NaN;
                    var n = this.dot(t) / e;
                    return Math.acos(n < -1 ? -1 : n > 1 ? 1 : n)
                }
                return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
            },
            setAngleInRadians: function(t) {
                if (this._angle = t, !this.isZero()) {
                    var e = this.getLength();
                    this._set(Math.cos(t) * e, Math.sin(t) * e)
                }
            },
            getQuadrant: function() {
                return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3
            }
        }, {
            beans: !1,
            getDirectedAngle: function() {
                var t = f.read(arguments);
                return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
            },
            getDistance: function() {
                var t = arguments,
                    e = f.read(t),
                    n = e.x - this.x,
                    i = e.y - this.y,
                    s = n * n + i * i,
                    a = r.read(t);
                return a ? s : Math.sqrt(s)
            },
            normalize: function(t) {
                t === e && (t = 1);
                var n = this.getLength(),
                    i = 0 !== n ? t / n : 0,
                    r = new f(this.x * i, this.y * i);
                return i >= 0 && (r._angle = this._angle), r
            },
            rotate: function(t, e) {
                if (0 === t) return this.clone();
                t = t * Math.PI / 180;
                var n = e ? this.subtract(e) : this,
                    i = Math.sin(t),
                    r = Math.cos(t);
                return n = new f(n.x * r - n.y * i, n.x * i + n.y * r), e ? n.add(e) : n
            },
            transform: function(t) {
                return t ? t._transformPoint(this) : this
            },
            add: function() {
                var t = f.read(arguments);
                return new f(this.x + t.x, this.y + t.y)
            },
            subtract: function() {
                var t = f.read(arguments);
                return new f(this.x - t.x, this.y - t.y)
            },
            multiply: function() {
                var t = f.read(arguments);
                return new f(this.x * t.x, this.y * t.y)
            },
            divide: function() {
                var t = f.read(arguments);
                return new f(this.x / t.x, this.y / t.y)
            },
            modulo: function() {
                var t = f.read(arguments);
                return new f(this.x % t.x, this.y % t.y)
            },
            negate: function() {
                return new f(-this.x, -this.y)
            },
            isInside: function() {
                return v.read(arguments).contains(this)
            },
            isClose: function() {
                var t = arguments,
                    e = f.read(t),
                    n = r.read(t);
                return this.getDistance(e) <= n
            },
            isCollinear: function() {
                var t = f.read(arguments);
                return f.isCollinear(this.x, this.y, t.x, t.y)
            },
            isColinear: "#isCollinear",
            isOrthogonal: function() {
                var t = f.read(arguments);
                return f.isOrthogonal(this.x, this.y, t.x, t.y)
            },
            isZero: function() {
                var t = l.isZero;
                return t(this.x) && t(this.y)
            },
            isNaN: function() {
                return isNaN(this.x) || isNaN(this.y)
            },
            isInQuadrant: function(t) {
                return this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 && this.y * (t > 2 ? -1 : 1) >= 0
            },
            dot: function() {
                var t = f.read(arguments);
                return this.x * t.x + this.y * t.y
            },
            cross: function() {
                var t = f.read(arguments);
                return this.x * t.y - this.y * t.x
            },
            project: function() {
                var t = f.read(arguments),
                    e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                return new f(t.x * e, t.y * e)
            },
            statics: {
                min: function() {
                    var t = arguments,
                        e = f.read(t),
                        n = f.read(t);
                    return new f(Math.min(e.x, n.x), Math.min(e.y, n.y))
                },
                max: function() {
                    var t = arguments,
                        e = f.read(t),
                        n = f.read(t);
                    return new f(Math.max(e.x, n.x), Math.max(e.y, n.y))
                },
                random: function() {
                    return new f(Math.random(), Math.random())
                },
                isCollinear: function(t, e, n, i) {
                    return Math.abs(t * i - e * n) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                },
                isOrthogonal: function(t, e, n, i) {
                    return Math.abs(t * n + e * i) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                }
            }
        }, r.each(["round", "ceil", "floor", "abs"], (function(t) {
            var e = Math[t];
            this[t] = function() {
                return new f(e(this.x), e(this.y))
            }
        }), {})),
        d = f.extend({
            initialize: function(t, e, n, i) {
                this._x = t, this._y = e, this._owner = n, this._setter = i
            },
            _set: function(t, e, n) {
                return this._x = t, this._y = e, n || this._owner[this._setter](this), this
            },
            getX: function() {
                return this._x
            },
            setX: function(t) {
                this._x = t, this._owner[this._setter](this)
            },
            getY: function() {
                return this._y
            },
            setY: function(t) {
                this._y = t, this._owner[this._setter](this)
            },
            isSelected: function() {
                return !!(this._owner._selection & this._getSelection())
            },
            setSelected: function(t) {
                this._owner._changeSelection(this._getSelection(), t)
            },
            _getSelection: function() {
                return "setPosition" === this._setter ? 4 : 0
            }
        }),
        _ = r.extend({
            _class: "Size",
            _readIndex: !0,
            initialize: function(t, e) {
                var n = typeof t,
                    i = this.__read,
                    r = 0;
                if ("number" === n) {
                    var s = "number" == typeof e;
                    this._set(t, s ? e : t), i && (r = s ? 2 : 1)
                } else if ("undefined" === n || null === t) this._set(0, 0), i && (r = null === t ? 1 : 0);
                else {
                    var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                    r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "width" in a ? this._set(a.width || 0, a.height || 0) : "x" in a ? this._set(a.x || 0, a.y || 0) : (this._set(0, 0), r = 0)
                }
                return i && (this.__read = r), this
            },
            set: "#initialize",
            _set: function(t, e) {
                return this.width = t, this.height = e, this
            },
            equals: function(t) {
                return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1
            },
            clone: function() {
                return new _(this.width, this.height)
            },
            toString: function() {
                var t = u.instance;
                return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.width), e.number(this.height)]
            },
            add: function() {
                var t = _.read(arguments);
                return new _(this.width + t.width, this.height + t.height)
            },
            subtract: function() {
                var t = _.read(arguments);
                return new _(this.width - t.width, this.height - t.height)
            },
            multiply: function() {
                var t = _.read(arguments);
                return new _(this.width * t.width, this.height * t.height)
            },
            divide: function() {
                var t = _.read(arguments);
                return new _(this.width / t.width, this.height / t.height)
            },
            modulo: function() {
                var t = _.read(arguments);
                return new _(this.width % t.width, this.height % t.height)
            },
            negate: function() {
                return new _(-this.width, -this.height)
            },
            isZero: function() {
                var t = l.isZero;
                return t(this.width) && t(this.height)
            },
            isNaN: function() {
                return isNaN(this.width) || isNaN(this.height)
            },
            statics: {
                min: function(t, e) {
                    return new _(Math.min(t.width, e.width), Math.min(t.height, e.height))
                },
                max: function(t, e) {
                    return new _(Math.max(t.width, e.width), Math.max(t.height, e.height))
                },
                random: function() {
                    return new _(Math.random(), Math.random())
                }
            }
        }, r.each(["round", "ceil", "floor", "abs"], (function(t) {
            var e = Math[t];
            this[t] = function() {
                return new _(e(this.width), e(this.height))
            }
        }), {})),
        g = _.extend({
            initialize: function(t, e, n, i) {
                this._width = t, this._height = e, this._owner = n, this._setter = i
            },
            _set: function(t, e, n) {
                return this._width = t, this._height = e, n || this._owner[this._setter](this), this
            },
            getWidth: function() {
                return this._width
            },
            setWidth: function(t) {
                this._width = t, this._owner[this._setter](this)
            },
            getHeight: function() {
                return this._height
            },
            setHeight: function(t) {
                this._height = t, this._owner[this._setter](this)
            }
        }),
        v = r.extend({
            _class: "Rectangle",
            _readIndex: !0,
            beans: !0,
            initialize: function(t, n, i, s) {
                var a, o = arguments,
                    h = typeof t;
                if ("number" === h ? (this._set(t, n, i, s), a = 4) : "undefined" === h || null === t ? (this._set(0, 0, 0, 0), a = null === t ? 1 : 0) : 1 === o.length && (Array.isArray(t) ? (this._set.apply(this, t), a = 1) : t.x !== e || t.width !== e ? (this._set(t.x || 0, t.y || 0, t.width || 0, t.height || 0), a = 1) : t.from === e && t.to === e && (this._set(0, 0, 0, 0), r.readSupported(o, this) && (a = 1))), a === e) {
                    var u, l, c = f.readNamed(o, "from"),
                        d = r.peek(o),
                        g = c.x,
                        v = c.y;
                    if (d && d.x !== e || r.hasNamed(o, "to")) {
                        var p = f.readNamed(o, "to");
                        u = p.x - g, l = p.y - v, u < 0 && (g = p.x, u = -u), l < 0 && (v = p.y, l = -l)
                    } else {
                        var m = _.read(o);
                        u = m.width, l = m.height
                    }
                    this._set(g, v, u, l), a = o.__index
                }
                var y = o.__filtered;
                return y && (this.__filtered = y), this.__read && (this.__read = a), this
            },
            set: "#initialize",
            _set: function(t, e, n, i) {
                return this.x = t, this.y = e, this.width = n, this.height = i, this
            },
            clone: function() {
                return new v(this.x, this.y, this.width, this.height)
            },
            equals: function(t) {
                var e = r.isPlainValue(t) ? v.read(arguments) : t;
                return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1
            },
            toString: function() {
                var t = u.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)]
            },
            getPoint: function(t) {
                return new(t ? f : d)(this.x, this.y, this, "setPoint")
            },
            setPoint: function() {
                var t = f.read(arguments);
                this.x = t.x, this.y = t.y
            },
            getSize: function(t) {
                return new(t ? _ : g)(this.width, this.height, this, "setSize")
            },
            _fw: 1,
            _fh: 1,
            setSize: function() {
                var t = _.read(arguments),
                    e = this._sx,
                    n = this._sy,
                    i = t.width,
                    r = t.height;
                e && (this.x += (this.width - i) * e), n && (this.y += (this.height - r) * n), this.width = i, this.height = r, this._fw = this._fh = 1
            },
            getLeft: function() {
                return this.x
            },
            setLeft: function(t) {
                if (!this._fw) {
                    var e = t - this.x;
                    this.width -= .5 === this._sx ? 2 * e : e
                }
                this.x = t, this._sx = this._fw = 0
            },
            getTop: function() {
                return this.y
            },
            setTop: function(t) {
                if (!this._fh) {
                    var e = t - this.y;
                    this.height -= .5 === this._sy ? 2 * e : e
                }
                this.y = t, this._sy = this._fh = 0
            },
            getRight: function() {
                return this.x + this.width
            },
            setRight: function(t) {
                if (!this._fw) {
                    var e = t - this.x;
                    this.width = .5 === this._sx ? 2 * e : e
                }
                this.x = t - this.width, this._sx = 1, this._fw = 0
            },
            getBottom: function() {
                return this.y + this.height
            },
            setBottom: function(t) {
                if (!this._fh) {
                    var e = t - this.y;
                    this.height = .5 === this._sy ? 2 * e : e
                }
                this.y = t - this.height, this._sy = 1, this._fh = 0
            },
            getCenterX: function() {
                return this.x + this.width / 2
            },
            setCenterX: function(t) {
                this._fw || .5 === this._sx ? this.x = t - this.width / 2 : (this._sx && (this.x += 2 * (t - this.x) * this._sx), this.width = 2 * (t - this.x)), this._sx = .5, this._fw = 0
            },
            getCenterY: function() {
                return this.y + this.height / 2
            },
            setCenterY: function(t) {
                this._fh || .5 === this._sy ? this.y = t - this.height / 2 : (this._sy && (this.y += 2 * (t - this.y) * this._sy), this.height = 2 * (t - this.y)), this._sy = .5, this._fh = 0
            },
            getCenter: function(t) {
                return new(t ? f : d)(this.getCenterX(), this.getCenterY(), this, "setCenter")
            },
            setCenter: function() {
                var t = f.read(arguments);
                return this.setCenterX(t.x), this.setCenterY(t.y), this
            },
            getArea: function() {
                return this.width * this.height
            },
            isEmpty: function() {
                return 0 === this.width || 0 === this.height
            },
            contains: function(t) {
                return t && t.width !== e || 4 === (Array.isArray(t) ? t : arguments).length ? this._containsRectangle(v.read(arguments)) : this._containsPoint(f.read(arguments))
            },
            _containsPoint: function(t) {
                var e = t.x,
                    n = t.y;
                return e >= this.x && n >= this.y && e <= this.x + this.width && n <= this.y + this.height
            },
            _containsRectangle: function(t) {
                var e = t.x,
                    n = t.y;
                return e >= this.x && n >= this.y && e + t.width <= this.x + this.width && n + t.height <= this.y + this.height
            },
            intersects: function() {
                var t = v.read(arguments),
                    e = r.read(arguments) || 0;
                return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e
            },
            intersect: function() {
                var t = v.read(arguments),
                    e = Math.max(this.x, t.x),
                    n = Math.max(this.y, t.y),
                    i = Math.min(this.x + this.width, t.x + t.width),
                    r = Math.min(this.y + this.height, t.y + t.height);
                return new v(e, n, i - e, r - n)
            },
            unite: function() {
                var t = v.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x + t.width),
                    r = Math.max(this.y + this.height, t.y + t.height);
                return new v(e, n, i - e, r - n)
            },
            include: function() {
                var t = f.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x),
                    r = Math.max(this.y + this.height, t.y);
                return new v(e, n, i - e, r - n)
            },
            expand: function() {
                var t = _.read(arguments),
                    e = t.width,
                    n = t.height;
                return new v(this.x - e / 2, this.y - n / 2, this.width + e, this.height + n)
            },
            scale: function(t, n) {
                return this.expand(this.width * t - this.width, this.height * (n === e ? t : n) - this.height)
            }
        }, r.each([
            ["Top", "Left"],
            ["Top", "Right"],
            ["Bottom", "Left"],
            ["Bottom", "Right"],
            ["Left", "Center"],
            ["Top", "Center"],
            ["Right", "Center"],
            ["Bottom", "Center"]
        ], (function(t, e) {
            var n = t.join(""),
                i = /^[RL]/.test(n);
            e >= 4 && (t[1] += i ? "Y" : "X");
            var r = t[i ? 0 : 1],
                s = t[i ? 1 : 0],
                a = "get" + r,
                o = "get" + s,
                h = "set" + r,
                u = "set" + s,
                l = "set" + n;
            this["get" + n] = function(t) {
                return new(t ? f : d)(this[a](), this[o](), this, l)
            }, this[l] = function() {
                var t = f.read(arguments);
                this[h](t.x), this[u](t.y)
            }
        }), {
            beans: !0
        })),
        p = v.extend({
            initialize: function(t, e, n, i, r, s) {
                this._set(t, e, n, i, !0), this._owner = r, this._setter = s
            },
            _set: function(t, e, n, i, r) {
                return this._x = t, this._y = e, this._width = n, this._height = i, r || this._owner[this._setter](this), this
            }
        }, new function() {
            var t = v.prototype;
            return r.each(["x", "y", "width", "height"], (function(t) {
                var e = r.capitalize(t),
                    n = "_" + t;
                this["get" + e] = function() {
                    return this[n]
                }, this["set" + e] = function(t) {
                    this[n] = t, this._dontNotify || this._owner[this._setter](this)
                }
            }), r.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], (function(e) {
                var n = "set" + e;
                this[n] = function() {
                    this._dontNotify = !0, t[n].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this)
                }
            }), {
                isSelected: function() {
                    return !!(2 & this._owner._selection)
                },
                setSelected: function(t) {
                    var e = this._owner;
                    e._changeSelection && e._changeSelection(2, t)
                }
            }))
        }),
        m = r.extend({
            _class: "Matrix",
            initialize: function t(e, n) {
                var i = arguments,
                    r = i.length,
                    s = !0;
                if (r >= 6 ? this._set.apply(this, i) : 1 === r || 2 === r ? e instanceof t ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, n) : Array.isArray(e) ? this._set.apply(this, n ? e.concat([n]) : e) : s = !1 : r ? s = !1 : this.reset(), !s) throw new Error("Unsupported matrix parameters");
                return this
            },
            set: "#initialize",
            _set: function(t, e, n, i, r, s, a) {
                return this._a = t, this._b = e, this._c = n, this._d = i, this._tx = r, this._ty = s, a || this._changed(), this
            },
            _serialize: function(t, e) {
                return r.serialize(this.getValues(), t, !0, e)
            },
            _changed: function() {
                var t = this._owner;
                t && (t._applyMatrix ? t.transform(null, !0) : t._changed(25))
            },
            clone: function() {
                return new m(this._a, this._b, this._c, this._d, this._tx, this._ty)
            },
            equals: function(t) {
                return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty
            },
            toString: function() {
                var t = u.instance;
                return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
            },
            reset: function(t) {
                return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this
            },
            apply: function(t, e) {
                var n = this._owner;
                return !!n && (n.transform(null, r.pick(t, !0), e), this.isIdentity())
            },
            translate: function() {
                var t = f.read(arguments),
                    e = t.x,
                    n = t.y;
                return this._tx += e * this._a + n * this._c, this._ty += e * this._b + n * this._d, this._changed(), this
            },
            scale: function() {
                var t = arguments,
                    e = f.read(t),
                    n = f.read(t, 0, {
                        readNull: !0
                    });
                return n && this.translate(n), this._a *= e.x, this._b *= e.x, this._c *= e.y, this._d *= e.y, n && this.translate(n.negate()), this._changed(), this
            },
            rotate: function(t) {
                t *= Math.PI / 180;
                var e = f.read(arguments, 1),
                    n = e.x,
                    i = e.y,
                    r = Math.cos(t),
                    s = Math.sin(t),
                    a = n - n * r + i * s,
                    o = i - n * s - i * r,
                    h = this._a,
                    u = this._b,
                    l = this._c,
                    c = this._d;
                return this._a = r * h + s * l, this._b = r * u + s * c, this._c = -s * h + r * l, this._d = -s * u + r * c, this._tx += a * h + o * l, this._ty += a * u + o * c, this._changed(), this
            },
            shear: function() {
                var t = arguments,
                    e = f.read(t),
                    n = f.read(t, 0, {
                        readNull: !0
                    });
                n && this.translate(n);
                var i = this._a,
                    r = this._b;
                return this._a += e.y * this._c, this._b += e.y * this._d, this._c += e.x * i, this._d += e.x * r, n && this.translate(n.negate()), this._changed(), this
            },
            skew: function() {
                var t = arguments,
                    e = f.read(t),
                    n = f.read(t, 0, {
                        readNull: !0
                    }),
                    i = Math.PI / 180,
                    r = new f(Math.tan(e.x * i), Math.tan(e.y * i));
                return this.shear(r, n)
            },
            append: function(t, e) {
                if (t) {
                    var n = this._a,
                        i = this._b,
                        r = this._c,
                        s = this._d,
                        a = t._a,
                        o = t._c,
                        h = t._b,
                        u = t._d,
                        l = t._tx,
                        c = t._ty;
                    this._a = a * n + h * r, this._c = o * n + u * r, this._b = a * i + h * s, this._d = o * i + u * s, this._tx += l * n + c * r, this._ty += l * i + c * s, e || this._changed()
                }
                return this
            },
            prepend: function(t, e) {
                if (t) {
                    var n = this._a,
                        i = this._b,
                        r = this._c,
                        s = this._d,
                        a = this._tx,
                        o = this._ty,
                        h = t._a,
                        u = t._c,
                        l = t._b,
                        c = t._d,
                        f = t._tx,
                        d = t._ty;
                    this._a = h * n + u * i, this._c = h * r + u * s, this._b = l * n + c * i, this._d = l * r + c * s, this._tx = h * a + u * o + f, this._ty = l * a + c * o + d, e || this._changed()
                }
                return this
            },
            appended: function(t) {
                return this.clone().append(t)
            },
            prepended: function(t) {
                return this.clone().prepend(t)
            },
            invert: function() {
                var t = this._a,
                    e = this._b,
                    n = this._c,
                    i = this._d,
                    r = this._tx,
                    s = this._ty,
                    a = t * i - e * n,
                    o = null;
                return a && !isNaN(a) && isFinite(r) && isFinite(s) && (this._a = i / a, this._b = -e / a, this._c = -n / a, this._d = t / a, this._tx = (n * s - i * r) / a, this._ty = (e * r - t * s) / a, o = this), o
            },
            inverted: function() {
                return this.clone().invert()
            },
            concatenate: "#append",
            preConcatenate: "#prepend",
            chain: "#appended",
            _shiftless: function() {
                return new m(this._a, this._b, this._c, this._d, 0, 0)
            },
            _orNullIfIdentity: function() {
                return this.isIdentity() ? null : this
            },
            isIdentity: function() {
                return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty
            },
            isInvertible: function() {
                var t = this._a * this._d - this._c * this._b;
                return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
            },
            isSingular: function() {
                return !this.isInvertible()
            },
            transform: function(t, e, n) {
                return arguments.length < 3 ? this._transformPoint(f.read(arguments)) : this._transformCoordinates(t, e, n)
            },
            _transformPoint: function(t, e, n) {
                var i = t.x,
                    r = t.y;
                return e || (e = new f), e._set(i * this._a + r * this._c + this._tx, i * this._b + r * this._d + this._ty, n)
            },
            _transformCoordinates: function(t, e, n) {
                for (var i = 0, r = 2 * n; i < r; i += 2) {
                    var s = t[i],
                        a = t[i + 1];
                    e[i] = s * this._a + a * this._c + this._tx, e[i + 1] = s * this._b + a * this._d + this._ty
                }
                return e
            },
            _transformCorners: function(t) {
                var e = t.x,
                    n = t.y,
                    i = e + t.width,
                    r = n + t.height,
                    s = [e, n, i, n, i, r, e, r];
                return this._transformCoordinates(s, s, 4)
            },
            _transformBounds: function(t, e, n) {
                for (var i = this._transformCorners(t), r = i.slice(0, 2), s = r.slice(), a = 2; a < 8; a++) {
                    var o = i[a],
                        h = 1 & a;
                    o < r[h] ? r[h] = o : o > s[h] && (s[h] = o)
                }
                return e || (e = new v), e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
            },
            inverseTransform: function() {
                return this._inverseTransform(f.read(arguments))
            },
            _inverseTransform: function(t, e, n) {
                var i = this._a,
                    r = this._b,
                    s = this._c,
                    a = this._d,
                    o = this._tx,
                    h = this._ty,
                    u = i * a - r * s,
                    l = null;
                if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                    var c = t.x - this._tx,
                        d = t.y - this._ty;
                    e || (e = new f), l = e._set((c * a - d * s) / u, (d * i - c * r) / u, n)
                }
                return l
            },
            decompose: function() {
                var t, e, n, i = this._a,
                    r = this._b,
                    s = this._c,
                    a = this._d,
                    o = i * a - r * s,
                    h = Math.sqrt,
                    u = Math.atan2,
                    l = 180 / Math.PI;
                if (0 !== i || 0 !== r) {
                    var c = h(i * i + r * r);
                    t = Math.acos(i / c) * (r > 0 ? 1 : -1), e = [c, o / c], n = [u(i * s + r * a, c * c), 0]
                } else if (0 !== s || 0 !== a) {
                    var d = h(s * s + a * a);
                    t = Math.asin(s / d) * (a > 0 ? 1 : -1), e = [o / d, d], n = [0, u(i * s + r * a, d * d)]
                } else t = 0, n = e = [0, 0];
                return {
                    translation: this.getTranslation(),
                    rotation: t * l,
                    scaling: new f(e),
                    skewing: new f(n[0] * l, n[1] * l)
                }
            },
            getValues: function() {
                return [this._a, this._b, this._c, this._d, this._tx, this._ty]
            },
            getTranslation: function() {
                return new f(this._tx, this._ty)
            },
            getScaling: function() {
                return this.decompose().scaling
            },
            getRotation: function() {
                return this.decompose().rotation
            },
            applyToContext: function(t) {
                this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty)
            }
        }, r.each(["a", "b", "c", "d", "tx", "ty"], (function(t) {
            var e = r.capitalize(t),
                n = "_" + t;
            this["get" + e] = function() {
                return this[n]
            }, this["set" + e] = function(t) {
                this[n] = t, this._changed()
            }
        }), {})),
        y = r.extend({
            _class: "Line",
            initialize: function(t, e, n, i, r) {
                var s = !1;
                arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = n, this._vy = i, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = n), s || (this._vx -= this._px, this._vy -= this._py)
            },
            getPoint: function() {
                return new f(this._px, this._py)
            },
            getVector: function() {
                return new f(this._vx, this._vy)
            },
            getLength: function() {
                return this.getVector().getLength()
            },
            intersect: function(t, e) {
                return y.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e)
            },
            getSide: function(t, e) {
                return y.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e)
            },
            getDistance: function(t) {
                return Math.abs(this.getSignedDistance(t))
            },
            getSignedDistance: function(t) {
                return y.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0)
            },
            isCollinear: function(t) {
                return f.isCollinear(this._vx, this._vy, t._vx, t._vy)
            },
            isOrthogonal: function(t) {
                return f.isOrthogonal(this._vx, this._vy, t._vx, t._vy)
            },
            statics: {
                intersect: function(t, e, n, i, r, s, a, o, h, u) {
                    h || (n -= t, i -= e, a -= r, o -= s);
                    var c = n * o - i * a;
                    if (!l.isMachineZero(c)) {
                        var d = t - r,
                            _ = e - s,
                            g = (a * _ - o * d) / c,
                            v = (n * _ - i * d) / c,
                            p = -1e-12,
                            m = 1 + 1e-12;
                        if (u || p < g && g < m && p < v && v < m) return u || (g = g <= 0 ? 0 : g >= 1 ? 1 : g), new f(t + g * n, e + g * i)
                    }
                },
                getSide: function(t, e, n, i, r, s, a, o) {
                    a || (n -= t, i -= e);
                    var h = r - t,
                        u = h * i - (s - e) * n;
                    return !o && l.isMachineZero(u) && (u = (h * n + h * n) / (n * n + i * i)) >= 0 && u <= 1 && (u = 0), u < 0 ? -1 : u > 0 ? 1 : 0
                },
                getSignedDistance: function(t, e, n, i, r, s, a) {
                    return a || (n -= t, i -= e), 0 === n ? i > 0 ? r - t : t - r : 0 === i ? n < 0 ? s - e : e - s : ((r - t) * i - (s - e) * n) / (i > n ? i * Math.sqrt(1 + n * n / (i * i)) : n * Math.sqrt(1 + i * i / (n * n)))
                },
                getDistance: function(t, e, n, i, r, s, a) {
                    return Math.abs(y.getSignedDistance(t, e, n, i, r, s, a))
                }
            }
        }),
        w = o.extend({
            _class: "Project",
            _list: "projects",
            _reference: "project",
            _compactSerialize: !0,
            initialize: function(t) {
                o.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new H(null, null, this), this._view = W.create(this, t || et.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0
            },
            _serialize: function(t, e) {
                return r.serialize(this._children, t, !0, e)
            },
            _changed: function(t, e) {
                if (1 & t) {
                    var n = this._view;
                    n && (n._needsUpdate = !0, !n._requested && n._autoUpdate && n.requestUpdate())
                }
                var i = this._changes;
                if (i && e) {
                    var r = this._changesById,
                        s = e._id,
                        a = r[s];
                    a ? a.flags |= t : i.push(r[s] = {
                        item: e,
                        flags: t
                    })
                }
            },
            clear: function() {
                for (var t = this._children, e = t.length - 1; e >= 0; e--) t[e].remove()
            },
            isEmpty: function() {
                return !this._children.length
            },
            remove: function t() {
                return !!t.base.call(this) && (this._view && this._view.remove(), !0)
            },
            getView: function() {
                return this._view
            },
            getCurrentStyle: function() {
                return this._currentStyle
            },
            setCurrentStyle: function(t) {
                this._currentStyle.set(t)
            },
            getIndex: function() {
                return this._index
            },
            getOptions: function() {
                return this._scope.settings
            },
            getLayers: function() {
                return this._children
            },
            getActiveLayer: function() {
                return this._activeLayer || new C({
                    project: this,
                    insert: !0
                })
            },
            getSymbolDefinitions: function() {
                var t = [],
                    e = {};
                return this.getItems({
                    class: I,
                    match: function(n) {
                        var i = n._definition,
                            r = i._id;
                        return e[r] || (e[r] = !0, t.push(i)), !1
                    }
                }), t
            },
            getSymbols: "getSymbolDefinitions",
            getSelectedItems: function() {
                var t = this._selectionItems,
                    e = [];
                for (var n in t) {
                    var i = t[n],
                        r = i._selection;
                    1 & r && i.isInserted() ? e.push(i) : r || this._updateSelection(i)
                }
                return e
            },
            _updateSelection: function(t) {
                var e = t._id,
                    n = this._selectionItems;
                t._selection ? n[e] !== t && (this._selectionCount++, n[e] = t) : n[e] === t && (this._selectionCount--, delete n[e])
            },
            selectAll: function() {
                for (var t = this._children, e = 0, n = t.length; e < n; e++) t[e].setFullySelected(!0)
            },
            deselectAll: function() {
                var t = this._selectionItems;
                for (var e in t) t[e].setFullySelected(!1)
            },
            addLayer: function(t) {
                return this.insertLayer(e, t)
            },
            insertLayer: function(t, e) {
                if (e instanceof C) {
                    e._remove(!1, !0), r.splice(this._children, [e], t, 0), e._setProject(this, !0);
                    var n = e._name;
                    n && e.setName(n), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)
                } else e = null;
                return e
            },
            _insertItem: function(t, n, i) {
                return n = this.insertLayer(t, n) || (this._activeLayer || this._insertItem(e, new C(x.NO_INSERT), !0)).insertChild(t, n), i && n.activate && n.activate(), n
            },
            getItems: function(t) {
                return x._getItems(this, t)
            },
            getItem: function(t) {
                return x._getItems(this, t, null, null, !0)[0] || null
            },
            importJSON: function(t) {
                this.activate();
                var e = this._activeLayer;
                return r.importJSON(t, e && e.isEmpty() && e)
            },
            removeOn: function(t) {
                var e = this._removeSets;
                if (e) {
                    "mouseup" === t && (e.mousedrag = null);
                    var n = e[t];
                    if (n) {
                        for (var i in n) {
                            var r = n[i];
                            for (var s in e) {
                                var a = e[s];
                                a && a != n && delete a[r._id]
                            }
                            r.remove()
                        }
                        e[t] = null
                    }
                }
            },
            draw: function(t, e, n) {
                this._updateVersion++, t.save(), e.applyToContext(t);
                for (var i = this._children, s = new r({
                        offset: new f(0, 0),
                        pixelRatio: n,
                        viewMatrix: e.isIdentity() ? null : e,
                        matrices: [new m],
                        updateMatrix: !0
                    }), a = 0, o = i.length; a < o; a++) i[a].draw(t, s);
                if (t.restore(), this._selectionCount > 0) {
                    t.save(), t.strokeWidth = 1;
                    var h = this._selectionItems,
                        u = this._scope.settings.handleSize,
                        l = this._updateVersion;
                    for (var c in h) h[c]._drawSelection(t, e, u, h, l);
                    t.restore()
                }
            }
        }),
        x = r.extend(s, {
            statics: {
                extend: function t(e) {
                    return e._serializeFields && (e._serializeFields = r.set({}, this.prototype._serializeFields, e._serializeFields)), t.base.apply(this, arguments)
                },
                NO_INSERT: {
                    insert: !1
                }
            },
            _class: "Item",
            _name: null,
            _applyMatrix: !0,
            _canApplyMatrix: !0,
            _canScaleStroke: !1,
            _pivot: null,
            _visible: !0,
            _blendMode: "normal",
            _opacity: 1,
            _locked: !1,
            _guide: !1,
            _clipMask: !1,
            _selection: 0,
            _selectBounds: !0,
            _selectChildren: !1,
            _serializeFields: {
                name: null,
                applyMatrix: null,
                matrix: new m,
                pivot: null,
                visible: !0,
                blendMode: "normal",
                opacity: 1,
                locked: !1,
                guide: !1,
                clipMask: !1,
                selected: !1,
                data: {}
            },
            _prioritize: ["applyMatrix"]
        }, new function() {
            var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"];
            return r.each(t, (function(t) {
                this._events[t] = {
                    install: function(t) {
                        this.getView()._countItemEvent(t, 1)
                    },
                    uninstall: function(t) {
                        this.getView()._countItemEvent(t, -1)
                    }
                }
            }), {
                _events: {
                    onFrame: {
                        install: function() {
                            this.getView()._animateItem(this, !0)
                        },
                        uninstall: function() {
                            this.getView()._animateItem(this, !1)
                        }
                    },
                    onLoad: {},
                    onError: {}
                },
                statics: {
                    _itemHandlers: t
                }
            })
        }, {
            initialize: function() {},
            _initialize: function(t, n) {
                var i = t && r.isPlainObject(t),
                    s = i && !0 === t.internal,
                    a = this._matrix = new m,
                    o = i && t.project || st.project,
                    h = st.settings;
                return this._id = s ? null : c.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && h.applyMatrix, n && a.translate(n), a._owner = this, this._style = new H(o._currentStyle, this, o), s || i && 0 == t.insert || !h.insertItems && (!i || !0 !== t.insert) ? this._setProject(o) : (i && t.parent || o)._insertItem(e, this, !0), i && t !== x.NO_INSERT && this.set(t, {
                    internal: !0,
                    insert: !0,
                    project: !0,
                    parent: !0
                }), i
            },
            _serialize: function(t, e) {
                var n = {},
                    i = this;

                function s(s) {
                    for (var a in s) {
                        var o = i[a];
                        r.equals(o, "leading" === a ? 1.2 * s.fontSize : s[a]) || (n[a] = r.serialize(o, t, "data" !== a, e))
                    }
                }
                return s(this._serializeFields), this instanceof b || s(this._style._defaults), [this._class, n]
            },
            _changed: function(t) {
                var n = this._symbol,
                    i = this._parent || n,
                    r = this._project;
                8 & t && (this._bounds = this._position = this._decomposed = e), 16 & t && (this._globalMatrix = e), i && 72 & t && x._clearBoundsCache(i), 2 & t && x._clearBoundsCache(this), r && r._changed(t, this), n && n._changed(t)
            },
            getId: function() {
                return this._id
            },
            getName: function() {
                return this._name
            },
            setName: function(t) {
                if (this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported.");
                var n = this._getOwner();
                if (t && n) {
                    var i = n._children,
                        r = n._namedChildren;
                    (r[t] = r[t] || []).push(this), t in i || (i[t] = this)
                }
                this._name = t || e, this._changed(256)
            },
            getStyle: function() {
                return this._style
            },
            setStyle: function(t) {
                this.getStyle().set(t)
            }
        }, r.each(["locked", "visible", "blendMode", "opacity", "guide"], (function(t) {
            var e = r.capitalize(t),
                n = "_" + t,
                i = {
                    locked: 256,
                    visible: 265
                };
            this["get" + e] = function() {
                return this[n]
            }, this["set" + e] = function(e) {
                e != this[n] && (this[n] = e, this._changed(i[t] || 257))
            }
        }), {}), {
            beans: !0,
            getSelection: function() {
                return this._selection
            },
            setSelection: function(t) {
                if (t !== this._selection) {
                    this._selection = t;
                    var e = this._project;
                    e && (e._updateSelection(this), this._changed(257))
                }
            },
            _changeSelection: function(t, e) {
                var n = this._selection;
                this.setSelection(e ? n | t : n & ~t)
            },
            isSelected: function() {
                if (this._selectChildren)
                    for (var t = this._children, e = 0, n = t.length; e < n; e++)
                        if (t[e].isSelected()) return !0;
                return !!(1 & this._selection)
            },
            setSelected: function(t) {
                if (this._selectChildren)
                    for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setSelected(t);
                this._changeSelection(1, t)
            },
            isFullySelected: function() {
                var t = this._children,
                    e = !!(1 & this._selection);
                if (t && e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (!t[n].isFullySelected()) return !1;
                    return !0
                }
                return e
            },
            setFullySelected: function(t) {
                var e = this._children;
                if (e)
                    for (var n = 0, i = e.length; n < i; n++) e[n].setFullySelected(t);
                this._changeSelection(1, t)
            },
            isClipMask: function() {
                return this._clipMask
            },
            setClipMask: function(t) {
                this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(257), this._parent && this._parent._changed(2048))
            },
            getData: function() {
                return this._data || (this._data = {}), this._data
            },
            setData: function(t) {
                this._data = t
            },
            getPosition: function(t) {
                var e = t ? f : d,
                    n = this._position || (this._position = this._getPositionFromBounds());
                return new e(n.x, n.y, this, "setPosition")
            },
            setPosition: function() {
                this.translate(f.read(arguments).subtract(this.getPosition(!0)))
            },
            _getPositionFromBounds: function(t) {
                return this._pivot ? this._matrix._transformPoint(this._pivot) : (t || this.getBounds()).getCenter(!0)
            },
            getPivot: function() {
                var t = this._pivot;
                return t ? new d(t.x, t.y, this, "setPivot") : null
            },
            setPivot: function() {
                this._pivot = f.read(arguments, 0, {
                    clone: !0,
                    readNull: !0
                }), this._position = e
            }
        }, r.each({
            getStrokeBounds: {
                stroke: !0
            },
            getHandleBounds: {
                handle: !0
            },
            getInternalBounds: {
                internal: !0
            }
        }, (function(t, e) {
            this[e] = function(e) {
                return this.getBounds(e, t)
            }
        }), {
            beans: !0,
            getBounds: function(t, e) {
                var n = e || t instanceof m,
                    i = r.set({}, n ? e : t, this._boundsOptions);
                i.stroke && !this.getStrokeScaling() || (i.cacheItem = this);
                var s = this._getCachedBounds(n && t, i).rect;
                return arguments.length ? s : new p(s.x, s.y, s.width, s.height, this, "setBounds")
            },
            setBounds: function() {
                var t = v.read(arguments),
                    e = this.getBounds(),
                    n = this._matrix,
                    i = new m,
                    r = t.getCenter();
                i.translate(r), t.width == e.width && t.height == e.height || (n.isInvertible() || (n.set(n._backup || (new m).translate(n.getTranslation())), e = this.getBounds()), i.scale(0 !== e.width ? t.width / e.width : 0, 0 !== e.height ? t.height / e.height : 0)), r = e.getCenter(), i.translate(-r.x, -r.y), this.transform(i)
            },
            _getBounds: function(t, e) {
                var n = this._children;
                return n && n.length ? (x._updateBoundsCache(this, e.cacheItem), x._getBounds(n, t, e)) : new v
            },
            _getBoundsCacheKey: function(t, e) {
                return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join("")
            },
            _getCachedBounds: function(t, e, n) {
                t = t && t._orNullIfIdentity();
                var i = e.internal && !n,
                    r = e.cacheItem,
                    s = i ? null : this._matrix._orNullIfIdentity(),
                    a = r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, i),
                    o = this._bounds;
                if (x._updateBoundsCache(this._parent || this._symbol, r), a && o && a in o) return {
                    rect: (f = o[a]).rect.clone(),
                    nonscaling: f.nonscaling
                };
                var h = this._getBounds(t || s, e),
                    u = h.rect || h,
                    l = this._style,
                    c = h.nonscaling || l.hasStroke() && !l.getStrokeScaling();
                if (a) {
                    o || (this._bounds = o = {});
                    var f = o[a] = {
                        rect: u.clone(),
                        nonscaling: c,
                        internal: i
                    }
                }
                return {
                    rect: u,
                    nonscaling: c
                }
            },
            _getStrokeMatrix: function(t, e) {
                var n = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item,
                    i = n ? n.getViewMatrix().invert() : t;
                return i && i._shiftless()
            },
            statics: {
                _updateBoundsCache: function(t, e) {
                    if (t && e) {
                        var n = e._id,
                            i = t._boundsCache = t._boundsCache || {
                                ids: {},
                                list: []
                            };
                        i.ids[n] || (i.list.push(e), i.ids[n] = e)
                    }
                },
                _clearBoundsCache: function(t) {
                    var n = t._boundsCache;
                    if (n) {
                        t._bounds = t._position = t._boundsCache = e;
                        for (var i = 0, r = n.list, s = r.length; i < s; i++) {
                            var a = r[i];
                            a !== t && (a._bounds = a._position = e, a._boundsCache && x._clearBoundsCache(a))
                        }
                    }
                },
                _getBounds: function(t, e, n) {
                    var i = Infinity,
                        r = -i,
                        s = i,
                        a = r,
                        o = !1;
                    n = n || {};
                    for (var h = 0, u = t.length; h < u; h++) {
                        var l = t[h];
                        if (l._visible && !l.isEmpty(!0)) {
                            var c = l._getCachedBounds(e && e.appended(l._matrix), n, !0),
                                f = c.rect;
                            i = Math.min(f.x, i), s = Math.min(f.y, s), r = Math.max(f.x + f.width, r), a = Math.max(f.y + f.height, a), c.nonscaling && (o = !0)
                        }
                    }
                    return {
                        rect: isFinite(i) ? new v(i, s, r - i, a - s) : new v,
                        nonscaling: o
                    }
                }
            }
        }), {
            beans: !0,
            _decompose: function() {
                return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose())
            },
            getRotation: function() {
                var t = this._decompose();
                return t ? t.rotation : 0
            },
            setRotation: function(t) {
                var e = this.getRotation();
                if (null != e && null != t) {
                    var n = this._decomposed;
                    this.rotate(t - e), n && (n.rotation = t, this._decomposed = n)
                }
            },
            getScaling: function() {
                var t = this._decompose(),
                    e = t && t.scaling;
                return new d(e ? e.x : 1, e ? e.y : 1, this, "setScaling")
            },
            setScaling: function() {
                var t = this.getScaling(),
                    e = f.read(arguments, 0, {
                        clone: !0,
                        readNull: !0
                    });
                if (t && e && !t.equals(e)) {
                    var n = this.getRotation(),
                        i = this._decomposed,
                        r = new m,
                        s = l.isZero;
                    if (s(t.x) || s(t.y)) r.translate(i.translation), n && r.rotate(n), r.scale(e.x, e.y), this._matrix.set(r);
                    else {
                        var a = this.getPosition(!0);
                        r.translate(a), n && r.rotate(n), r.scale(e.x / t.x, e.y / t.y), n && r.rotate(-n), r.translate(a.negate()), this.transform(r)
                    }
                    i && (i.scaling = e, this._decomposed = i)
                }
            },
            getMatrix: function() {
                return this._matrix
            },
            setMatrix: function() {
                var t = this._matrix;
                t.set.apply(t, arguments)
            },
            getGlobalMatrix: function(t) {
                var e = this._globalMatrix;
                if (e)
                    for (var n = this._parent, i = []; n;) {
                        if (!n._globalMatrix) {
                            e = null;
                            for (var r = 0, s = i.length; r < s; r++) i[r]._globalMatrix = null;
                            break
                        }
                        i.push(n), n = n._parent
                    }
                e || (e = this._globalMatrix = this._matrix.clone(), (n = this._parent) && e.prepend(n.getGlobalMatrix(!0)));
                return t ? e : e.clone()
            },
            getViewMatrix: function() {
                return this.getGlobalMatrix().prepend(this.getView()._matrix)
            },
            getApplyMatrix: function() {
                return this._applyMatrix
            },
            setApplyMatrix: function(t) {
                (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
            },
            getTransformContent: "#getApplyMatrix",
            setTransformContent: "#setApplyMatrix"
        }, {
            getProject: function() {
                return this._project
            },
            _setProject: function(t, e) {
                if (this._project !== t) {
                    this._project && this._installEvents(!1), this._project = t;
                    for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._setProject(t);
                    e = !0
                }
                e && this._installEvents(!0)
            },
            getView: function() {
                return this._project._view
            },
            _installEvents: function t(e) {
                t.base.call(this, e);
                for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._installEvents(e)
            },
            getLayer: function() {
                for (var t = this; t = t._parent;)
                    if (t instanceof C) return t;
                return null
            },
            getParent: function() {
                return this._parent
            },
            setParent: function(t) {
                return t.addChild(this)
            },
            _getOwner: "#getParent",
            getChildren: function() {
                return this._children
            },
            setChildren: function(t) {
                this.removeChildren(), this.addChildren(t)
            },
            getFirstChild: function() {
                return this._children && this._children[0] || null
            },
            getLastChild: function() {
                return this._children && this._children[this._children.length - 1] || null
            },
            getNextSibling: function() {
                var t = this._getOwner();
                return t && t._children[this._index + 1] || null
            },
            getPreviousSibling: function() {
                var t = this._getOwner();
                return t && t._children[this._index - 1] || null
            },
            getIndex: function() {
                return this._index
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1
            },
            _equals: function(t) {
                return r.equals(this._children, t._children)
            },
            clone: function(t) {
                var n = new this.constructor(x.NO_INSERT),
                    i = this._children,
                    s = r.pick(t ? t.insert : e, t === e || !0 === t),
                    a = r.pick(t ? t.deep : e, !0);
                i && n.copyAttributes(this), i && !a || n.copyContent(this), i || n.copyAttributes(this), s && n.insertAbove(this);
                var o = this._name,
                    h = this._parent;
                if (o && h) {
                    i = h._children;
                    for (var u = o, l = 1; i[o];) o = u + " " + l++;
                    o !== u && n.setName(o)
                }
                return n
            },
            copyContent: function(t) {
                for (var e = t._children, n = 0, i = e && e.length; n < i; n++) this.addChild(e[n].clone(!1), !0)
            },
            copyAttributes: function(t, e) {
                this.setStyle(t._style);
                for (var n = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], i = 0, s = n.length; i < s; i++) {
                    var a = n[i];
                    t.hasOwnProperty(a) && (this[a] = t[a])
                }
                e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
                var o = t._data,
                    h = t._name;
                this._data = o ? r.clone(o) : null, h && this.setName(h)
            },
            rasterize: function(t, n) {
                var i, s, a;
                r.isPlainObject(t) ? (i = t.resolution, s = t.insert, a = t.raster) : (i = t, s = n), a ? a.matrix.reset(!0) : a = new P(x.NO_INSERT);
                var o = this.getStrokeBounds(),
                    h = (i || this.getView().getResolution()) / 72,
                    u = o.getTopLeft().floor(),
                    l = o.getBottomRight().ceil(),
                    c = new _(l.subtract(u)),
                    f = c.multiply(h);
                if (a.setSize(f, !0), !f.isZero()) {
                    var d = a.getContext(!0),
                        g = (new m).scale(h).translate(u.negate());
                    d.save(), g.applyToContext(d), this.draw(d, new r({
                        matrices: [g]
                    })), d.restore()
                }
                return a.transform((new m).translate(u.add(c.divide(2))).scale(1 / h)), (s === e || s) && a.insertAbove(this), a
            },
            contains: function() {
                var t = this._matrix;
                return t.isInvertible() && !!this._contains(t._inverseTransform(f.read(arguments)))
            },
            _contains: function(t) {
                var e = this._children;
                if (e) {
                    for (var n = e.length - 1; n >= 0; n--)
                        if (e[n].contains(t)) return !0;
                    return !1
                }
                return t.isInside(this.getInternalBounds())
            },
            isInside: function() {
                return v.read(arguments).contains(this.getBounds())
            },
            _asPathItem: function() {
                return new N.Rectangle({
                    rectangle: this.getInternalBounds(),
                    matrix: this._matrix,
                    insert: !1
                })
            },
            intersects: function(t, e) {
                return t instanceof x && this._asPathItem().getIntersections(t._asPathItem(), null, e, !0).length > 0
            }
        }, new function() {
            function t() {
                var t = arguments;
                return this._hitTest(f.read(t), T.getOptions(t))
            }

            function e() {
                var t = arguments,
                    e = f.read(t),
                    n = T.getOptions(t),
                    i = [];
                return this._hitTest(e, new r({
                    all: i
                }, n)), i
            }

            function n(t, e, n, i) {
                var r = this._children;
                if (r)
                    for (var s = r.length - 1; s >= 0; s--) {
                        var a = r[s],
                            o = a !== i && a._hitTest(t, e, n);
                        if (o && !e.all) return o
                    }
                return null
            }
            return w.inject({
                hitTest: t,
                hitTestAll: e,
                _hitTest: n
            }), {
                hitTest: t,
                hitTestAll: e,
                _hitTestChildren: n
            }
        }, {
            _hitTest: function(t, e, n) {
                if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null;
                var i = this._matrix,
                    s = n ? n.appended(i) : this.getGlobalMatrix().prepend(this.getView()._matrix),
                    a = Math.max(e.tolerance, 1e-12),
                    o = e._tolerancePadding = new _(N._getStrokePadding(a, i._shiftless().invert()));
                if (!(t = i._inverseTransform(t)) || !this._children && !this.getBounds({
                        internal: !0,
                        stroke: !0,
                        handle: !0
                    }).expand(o.multiply(2))._containsPoint(t)) return null;
                var h, u, l = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== r.hyphenate(this._class) || e.class && !(this instanceof e.class)),
                    c = e.match,
                    f = this;

                function d(t) {
                    return t && c && !c(t) && (t = null), t && e.all && e.all.push(t), t
                }

                function g(e, n) {
                    var i = n ? h["get" + n]() : f.getPosition();
                    if (t.subtract(i).divide(o).length <= 1) return new T(e, f, {
                        name: n ? r.hyphenate(n) : e,
                        point: i
                    })
                }
                var v = e.position,
                    p = e.center,
                    m = e.bounds;
                if (l && this._parent && (v || p || m)) {
                    if ((p || m) && (h = this.getInternalBounds()), !(u = v && g("position") || p && g("center", "Center")) && m)
                        for (var y = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], w = 0; w < 8 && !u; w++) u = g("bounds", y[w]);
                    u = d(u)
                }
                return u || (u = this._hitTestChildren(t, e, s) || l && d(this._hitTestSelf(t, e, s, this.getStrokeScaling() ? null : s._shiftless().invert())) || null), u && u.point && (u.point = i.transform(u.point)), u
            },
            _hitTestSelf: function(t, e) {
                if (e.fill && this.hasFill() && this._contains(t)) return new T("fill", this)
            },
            matches: function(t, e) {
                var n = typeof t;
                if ("object" === n) {
                    for (var i in t)
                        if (t.hasOwnProperty(i) && !this.matches(i, t[i])) return !1;
                    return !0
                }
                if ("function" === n) return t(this);
                if ("match" === t) return e(this);
                var s = /^(empty|editable)$/.test(t) ? this["is" + r.capitalize(t)]() : "type" === t ? r.hyphenate(this._class) : this[t];
                if ("class" === t) {
                    if ("function" == typeof e) return this instanceof e;
                    s = this._class
                }
                if ("function" == typeof e) return !!e(s);
                if (e) {
                    if (e.test) return e.test(s);
                    if (r.isPlainObject(e)) return function t(e, n) {
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var s = e[i],
                                    a = n[i];
                                if (r.isPlainObject(s) && r.isPlainObject(a)) {
                                    if (!t(s, a)) return !1
                                } else if (!r.equals(s, a)) return !1
                            } return !0
                    }(e, s)
                }
                return r.equals(s, e)
            },
            getItems: function(t) {
                return x._getItems(this, t, this._matrix)
            },
            getItem: function(t) {
                return x._getItems(this, t, this._matrix, null, !0)[0] || null
            },
            statics: {
                _getItems: function t(e, n, i, s, a) {
                    if (!s) {
                        var o = "object" == typeof n && n,
                            h = o && o.overlapping,
                            u = o && o.inside,
                            l = (w = h || u) && v.read([w]);
                        s = {
                            items: [],
                            recursive: o && !1 !== o.recursive,
                            inside: !!u,
                            overlapping: !!h,
                            rect: l,
                            path: h && new N.Rectangle({
                                rectangle: l,
                                insert: !1
                            })
                        }, o && (n = r.filter({}, n, {
                            recursive: !0,
                            inside: !0,
                            overlapping: !0
                        }))
                    }
                    var c = e._children,
                        f = s.items;
                    i = (l = s.rect) && (i || new m);
                    for (var d = 0, _ = c && c.length; d < _; d++) {
                        var g = c[d],
                            p = i && i.appended(g._matrix),
                            y = !0;
                        if (l) {
                            var w = g.getBounds(p);
                            if (!l.intersects(w)) continue;
                            l.contains(w) || s.overlapping && (w.contains(l) || s.path.intersects(g, p)) || (y = !1)
                        }
                        if (y && g.matches(n) && (f.push(g), a)) break;
                        if (!1 !== s.recursive && t(g, n, p, s, a), a && f.length > 0) break
                    }
                    return f
                }
            }
        }, {
            importJSON: function(t) {
                var e = r.importJSON(t, this);
                return e !== this ? this.addChild(e) : e
            },
            addChild: function(t) {
                return this.insertChild(e, t)
            },
            insertChild: function(t, e) {
                var n = e ? this.insertChildren(t, [e]) : null;
                return n && n[0]
            },
            addChildren: function(t) {
                return this.insertChildren(this._children.length, t)
            },
            insertChildren: function(t, e) {
                var n = this._children;
                if (n && e && e.length > 0) {
                    for (var i = {}, s = (e = r.slice(e)).length - 1; s >= 0; s--) {
                        var a = (l = e[s]) && l._id;
                        !l || i[a] ? e.splice(s, 1) : (l._remove(!1, !0), i[a] = !0)
                    }
                    r.splice(n, e, t, 0);
                    for (var o = this._project, h = o._changes, u = (s = 0, e.length); s < u; s++) {
                        var l, c = (l = e[s])._name;
                        l._parent = this, l._setProject(o, !0), c && l.setName(c), h && l._changed(5)
                    }
                    this._changed(11)
                } else e = null;
                return e
            },
            _insertItem: "#insertChild",
            _insertAt: function(t, e) {
                var n = t && t._getOwner(),
                    i = t !== this && n ? this : null;
                return i && (i._remove(!1, !0), n._insertItem(t._index + e, i)), i
            },
            insertAbove: function(t) {
                return this._insertAt(t, 1)
            },
            insertBelow: function(t) {
                return this._insertAt(t, 0)
            },
            sendToBack: function() {
                var t = this._getOwner();
                return t ? t._insertItem(0, this) : null
            },
            bringToFront: function() {
                var t = this._getOwner();
                return t ? t._insertItem(e, this) : null
            },
            appendTop: "#addChild",
            appendBottom: function(t) {
                return this.insertChild(0, t)
            },
            moveAbove: "#insertAbove",
            moveBelow: "#insertBelow",
            addTo: function(t) {
                return t._insertItem(e, this)
            },
            copyTo: function(t) {
                return this.clone(!1).addTo(t)
            },
            reduce: function(t) {
                var e = this._children;
                if (e && 1 === e.length) {
                    var n = e[0].reduce(t);
                    return this._parent ? (n.insertAbove(this), this.remove()) : n.remove(), n
                }
                return this
            },
            _removeNamed: function() {
                var t = this._getOwner();
                if (t) {
                    var e = t._children,
                        n = t._namedChildren,
                        i = this._name,
                        r = n[i],
                        s = r ? r.indexOf(this) : -1; - 1 !== s && (e[i] == this && delete e[i], r.splice(s, 1), r.length ? e[i] = r[0] : delete n[i])
                }
            },
            _remove: function(t, e) {
                var n = this._getOwner(),
                    i = this._project,
                    s = this._index;
                return this._style && this._style._dispose(), !!n && (this._name && this._removeNamed(), null != s && (i._activeLayer === this && (i._activeLayer = this.getNextSibling() || this.getPreviousSibling()), r.splice(n._children, null, s, 1)), this._installEvents(!1), t && i._changes && this._changed(5), e && n._changed(11, this), this._parent = null, !0)
            },
            remove: function() {
                return this._remove(!0, !0)
            },
            replaceWith: function(t) {
                var e = t && t.insertBelow(this);
                return e && this.remove(), e
            },
            removeChildren: function(t, e) {
                if (!this._children) return null;
                t = t || 0, e = r.pick(e, this._children.length);
                for (var n = r.splice(this._children, null, t, e - t), i = n.length - 1; i >= 0; i--) n[i]._remove(!0, !1);
                return n.length > 0 && this._changed(11), n
            },
            clear: "#removeChildren",
            reverseChildren: function() {
                if (this._children) {
                    this._children.reverse();
                    for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._index = t;
                    this._changed(11)
                }
            },
            isEmpty: function(t) {
                var e = this._children,
                    n = e ? e.length : 0;
                if (t) {
                    for (var i = 0; i < n; i++)
                        if (!e[i].isEmpty(t)) return !1;
                    return !0
                }
                return !n
            },
            isEditable: function() {
                for (var t = this; t;) {
                    if (!t._visible || t._locked) return !1;
                    t = t._parent
                }
                return !0
            },
            hasFill: function() {
                return this.getStyle().hasFill()
            },
            hasStroke: function() {
                return this.getStyle().hasStroke()
            },
            hasShadow: function() {
                return this.getStyle().hasShadow()
            },
            _getOrder: function(t) {
                function e(t) {
                    var e = [];
                    do {
                        e.unshift(t)
                    } while (t = t._parent);
                    return e
                }
                for (var n = e(this), i = e(t), r = 0, s = Math.min(n.length, i.length); r < s; r++)
                    if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                return 0
            },
            hasChildren: function() {
                return this._children && this._children.length > 0
            },
            isInserted: function() {
                return !!this._parent && this._parent.isInserted()
            },
            isAbove: function(t) {
                return -1 === this._getOrder(t)
            },
            isBelow: function(t) {
                return 1 === this._getOrder(t)
            },
            isParent: function(t) {
                return this._parent === t
            },
            isChild: function(t) {
                return t && t._parent === this
            },
            isDescendant: function(t) {
                for (var e = this; e = e._parent;)
                    if (e === t) return !0;
                return !1
            },
            isAncestor: function(t) {
                return !!t && t.isDescendant(this)
            },
            isSibling: function(t) {
                return this._parent === t._parent
            },
            isGroupedWith: function(t) {
                for (var e = this._parent; e;) {
                    if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                    e = e._parent
                }
                return !1
            }
        }, r.each(["rotate", "scale", "shear", "skew"], (function(t) {
            var e = "rotate" === t;
            this[t] = function() {
                var n = arguments,
                    i = (e ? r : f).read(n),
                    s = f.read(n, 0, {
                        readNull: !0
                    });
                return this.transform((new m)[t](i, s || this.getPosition(!0)))
            }
        }), {
            translate: function() {
                var t = new m;
                return this.transform(t.translate.apply(t, arguments))
            },
            transform: function(t, e, n) {
                var i = this._matrix,
                    r = t && !t.isIdentity(),
                    s = n && this._canApplyMatrix || this._applyMatrix && (r || !i.isIdentity() || e && this._children);
                if (!r && !s) return this;
                if (r) {
                    !t.isInvertible() && i.isInvertible() && (i._backup = i.getValues()), i.prepend(t, !0);
                    var a = this._style,
                        o = a.getFillColor(!0),
                        h = a.getStrokeColor(!0);
                    o && o.transform(t), h && h.transform(t)
                }
                if (s && (s = this._transformContent(i, e, n))) {
                    var u = this._pivot;
                    u && i._transformPoint(u, u, !0), i.reset(!0), n && this._canApplyMatrix && (this._applyMatrix = !0)
                }
                var l = this._bounds,
                    c = this._position;
                (r || s) && this._changed(25);
                var f = r && l && t.decompose();
                if (f && f.skewing.isZero() && f.rotation % 90 == 0) {
                    for (var d in l) {
                        var _ = l[d];
                        if (_.nonscaling) delete l[d];
                        else if (s || !_.internal) {
                            var g = _.rect;
                            t._transformBounds(g, g)
                        }
                    }
                    this._bounds = l;
                    var v = l[this._getBoundsCacheKey(this._boundsOptions || {})];
                    v && (this._position = this._getPositionFromBounds(v.rect))
                } else r && c && this._pivot && (this._position = t._transformPoint(c, c));
                return this
            },
            _transformContent: function(t, e, n) {
                var i = this._children;
                if (i) {
                    for (var r = 0, s = i.length; r < s; r++) i[r].transform(t, e, n);
                    return !0
                }
            },
            globalToLocal: function() {
                return this.getGlobalMatrix(!0)._inverseTransform(f.read(arguments))
            },
            localToGlobal: function() {
                return this.getGlobalMatrix(!0)._transformPoint(f.read(arguments))
            },
            parentToLocal: function() {
                return this._matrix._inverseTransform(f.read(arguments))
            },
            localToParent: function() {
                return this._matrix._transformPoint(f.read(arguments))
            },
            fitBounds: function(t, e) {
                t = v.read(arguments);
                var n = this.getBounds(),
                    i = n.height / n.width,
                    r = t.height / t.width,
                    s = (e ? i > r : i < r) ? t.width / n.width : t.height / n.height,
                    a = new v(new f, new _(n.width * s, n.height * s));
                a.setCenter(t.getCenter()), this.setBounds(a)
            }
        }), {
            _setStyles: function(t, e, n) {
                var i = this._style,
                    r = this._matrix;
                if (i.hasFill() && (t.fillStyle = i.getFillColor().toCanvasStyle(t, r)), i.hasStroke()) {
                    t.strokeStyle = i.getStrokeColor().toCanvasStyle(t, r), t.lineWidth = i.getStrokeWidth();
                    var s = i.getStrokeJoin(),
                        a = i.getStrokeCap(),
                        o = i.getMiterLimit();
                    if (s && (t.lineJoin = s), a && (t.lineCap = a), o && (t.miterLimit = o), st.support.nativeDash) {
                        var h = i.getDashArray(),
                            u = i.getDashOffset();
                        h && h.length && ("setLineDash" in t ? (t.setLineDash(h), t.lineDashOffset = u) : (t.mozDash = h, t.mozDashOffset = u))
                    }
                }
                if (i.hasShadow()) {
                    var l = e.pixelRatio || 1,
                        c = n._shiftless().prepend((new m).scale(l, l)),
                        d = c.transform(new f(i.getShadowBlur(), 0)),
                        _ = c.transform(this.getShadowOffset());
                    t.shadowColor = i.getShadowColor().toCanvasStyle(t), t.shadowBlur = d.getLength(), t.shadowOffsetX = _.x, t.shadowOffsetY = _.y
                }
            },
            draw: function(t, e, n) {
                this._updateVersion = this._project._updateVersion;
                if (this._visible && 0 !== this._opacity) {
                    var i = e.matrices,
                        r = e.viewMatrix,
                        s = this._matrix,
                        a = i[i.length - 1].appended(s);
                    if (a.isInvertible()) {
                        r = r ? r.appended(a) : a, i.push(a), e.updateMatrix && (this._globalMatrix = a);
                        var o, h, u, c = this._blendMode,
                            f = l.clamp(this._opacity, 0, 1),
                            d = "normal" === c,
                            _ = nt.nativeModes[c],
                            g = d && 1 === f || e.dontStart || e.clip || (_ || d && f < 1) && this._canComposite(),
                            v = e.pixelRatio || 1;
                        if (!g) {
                            var p = this.getStrokeBounds(r);
                            if (!p.width || !p.height) return void i.pop();
                            u = e.offset, h = e.offset = p.getTopLeft().floor(), o = t, t = et.getContext(p.getSize().ceil().add(1).multiply(v)), 1 !== v && t.scale(v, v)
                        }
                        t.save();
                        var m = n ? n.appended(s) : this._canScaleStroke && !this.getStrokeScaling(!0) && r,
                            y = !g && e.clipItem,
                            w = !m || y;
                        if (g ? (t.globalAlpha = f, _ && (t.globalCompositeOperation = c)) : w && t.translate(-h.x, -h.y), w && (g ? s : r).applyToContext(t), y && e.clipItem.draw(t, e.extend({
                                clip: !0
                            })), m) {
                            t.setTransform(v, 0, 0, v, 0, 0);
                            var x = e.offset;
                            x && t.translate(-x.x, -x.y)
                        }
                        this._draw(t, e, r, m), t.restore(), i.pop(), e.clip && !e.dontFinish && t.clip(this.getFillRule()), g || (nt.process(c, t, o, f, h.subtract(u).multiply(v)), et.release(t), e.offset = u)
                    }
                }
            },
            _isUpdated: function(t) {
                var e = this._parent;
                if (e instanceof B) return e._isUpdated(t);
                var n = this._updateVersion === t;
                return !n && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, n = !0), n
            },
            _drawSelection: function(t, e, n, i, r) {
                var s = this._selection,
                    a = 1 & s,
                    o = 2 & s || a && this._selectBounds,
                    h = 4 & s;
                if (this._drawSelected || (a = !1), (a || o || h) && this._isUpdated(r)) {
                    var u, l = this.getSelectedColor(!0) || (u = this.getLayer()) && u.getSelectedColor(!0),
                        c = e.appended(this.getGlobalMatrix(!0)),
                        f = n / 2;
                    if (t.strokeStyle = t.fillStyle = l ? l.toCanvasStyle(t) : "#009dec", a && this._drawSelected(t, c, i), h) {
                        var d = this.getPosition(!0),
                            _ = this._parent,
                            g = _ ? _.localToGlobal(d) : d,
                            v = g.x,
                            p = g.y;
                        t.beginPath(), t.arc(v, p, f, 0, 2 * Math.PI, !0), t.stroke();
                        for (var m = [
                                [0, -1],
                                [1, 0],
                                [0, 1],
                                [-1, 0]
                            ], y = f, w = n + 1, x = 0; x < 4; x++) {
                            var b = m[x],
                                C = b[0],
                                S = b[1];
                            t.moveTo(v + C * y, p + S * y), t.lineTo(v + C * w, p + S * w), t.stroke()
                        }
                    }
                    if (o) {
                        var P = c._transformCorners(this.getInternalBounds());
                        t.beginPath();
                        for (x = 0; x < 8; x++) t[x ? "lineTo" : "moveTo"](P[x], P[++x]);
                        t.closePath(), t.stroke();
                        for (x = 0; x < 8; x++) t.fillRect(P[x] - f, P[++x] - f, n, n)
                    }
                }
            },
            _canComposite: function() {
                return !1
            }
        }, r.each(["down", "drag", "up", "move"], (function(t) {
            this["removeOn" + r.capitalize(t)] = function() {
                var e = {};
                return e[t] = !0, this.removeOn(e)
            }
        }), {
            removeOn: function(t) {
                for (var e in t)
                    if (t[e]) {
                        var n = "mouse" + e,
                            i = this._project,
                            r = i._removeSets = i._removeSets || {};
                        r[n] = r[n] || {}, r[n][this._id] = this
                    } return this
            }
        }), {
            tween: function(t, e, n) {
                n || (n = e, e = t, t = null, n || (n = e, e = null));
                var i = n && n.easing,
                    r = n && n.start,
                    s = null != n && ("number" == typeof n ? n : n.duration),
                    a = new Y(this, t, e, s, i, r);
                return s && this.on("frame", (function t(e) {
                    a._handleFrame(1e3 * e.time), a.running || this.off("frame", t)
                })), a
            },
            tweenTo: function(t, e) {
                return this.tween(null, t, e)
            },
            tweenFrom: function(t, e) {
                return this.tween(t, null, e)
            }
        }),
        b = x.extend({
            _class: "Group",
            _selectBounds: !1,
            _selectChildren: !0,
            _serializeFields: {
                children: []
            },
            initialize: function(t) {
                this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments)
            },
            _changed: function t(n) {
                t.base.call(this, n), 2050 & n && (this._clipItem = e)
            },
            _getClipItem: function() {
                var t = this._clipItem;
                if (t === e) {
                    t = null;
                    for (var n = this._children, i = 0, r = n.length; i < r; i++)
                        if (n[i]._clipMask) {
                            t = n[i];
                            break
                        } this._clipItem = t
                }
                return t
            },
            isClipped: function() {
                return !!this._getClipItem()
            },
            setClipped: function(t) {
                var e = this.getFirstChild();
                e && e.setClipMask(t)
            },
            _getBounds: function t(e, n) {
                var i = this._getClipItem();
                return i ? i._getCachedBounds(i._matrix.prepended(e), r.set({}, n, {
                    stroke: !1
                })) : t.base.call(this, e, n)
            },
            _hitTestChildren: function t(e, n, i) {
                var r = this._getClipItem();
                return (!r || r.contains(e)) && t.base.call(this, e, n, i, r)
            },
            _draw: function(t, e) {
                var n = e.clip,
                    i = !n && this._getClipItem();
                e = e.extend({
                    clipItem: i,
                    clip: !1
                }), n ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : i && i.draw(t, e.extend({
                    clip: !0
                }));
                for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                    var o = r[s];
                    o !== i && o.draw(t, e)
                }
            }
        }),
        C = b.extend({
            _class: "Layer",
            initialize: function() {
                b.apply(this, arguments)
            },
            _getOwner: function() {
                return this._parent || null != this._index && this._project
            },
            isInserted: function t() {
                return this._parent ? t.base.call(this) : null != this._index
            },
            activate: function() {
                this._project._activeLayer = this
            },
            _hitTestSelf: function() {}
        }),
        S = x.extend({
            _class: "Shape",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _canScaleStroke: !0,
            _serializeFields: {
                type: null,
                size: null,
                radius: null
            },
            initialize: function(t, e) {
                this._initialize(t, e)
            },
            _equals: function(t) {
                return this._type === t._type && this._size.equals(t._size) && r.equals(this._radius, t._radius)
            },
            copyContent: function(t) {
                this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius)
            },
            getType: function() {
                return this._type
            },
            setType: function(t) {
                this._type = t
            },
            getShape: "#getType",
            setShape: "#setType",
            getSize: function() {
                var t = this._size;
                return new g(t.width, t.height, this, "setSize")
            },
            setSize: function() {
                var t = _.read(arguments);
                if (this._size) {
                    if (!this._size.equals(t)) {
                        var e = this._type,
                            n = t.width,
                            i = t.height;
                        "rectangle" === e ? this._radius.set(_.min(this._radius, t.divide(2).abs())) : "circle" === e ? (n = i = (n + i) / 2, this._radius = n / 2) : "ellipse" === e && this._radius._set(n / 2, i / 2), this._size._set(n, i), this._changed(9)
                    }
                } else this._size = t.clone()
            },
            getRadius: function() {
                var t = this._radius;
                return "circle" === this._type ? t : new g(t.width, t.height, this, "setRadius")
            },
            setRadius: function(t) {
                var e = this._type;
                if ("circle" === e) {
                    if (t === this._radius) return;
                    var n = 2 * t;
                    this._radius = t, this._size._set(n, n)
                } else if (t = _.read(arguments), this._radius) {
                    if (this._radius.equals(t)) return;
                    if (this._radius.set(t), "rectangle" === e) {
                        n = _.max(this._size, t.multiply(2));
                        this._size.set(n)
                    } else "ellipse" === e && this._size._set(2 * t.width, 2 * t.height)
                } else this._radius = t.clone();
                this._changed(9)
            },
            isEmpty: function() {
                return !1
            },
            toPath: function(t) {
                var n = new(N[r.capitalize(this._type)])({
                    center: new f,
                    size: this._size,
                    radius: this._radius,
                    insert: !1
                });
                return n.copyAttributes(this), st.settings.applyMatrix && n.setApplyMatrix(!0), (t === e || t) && n.insertAbove(this), n
            },
            toShape: "#clone",
            _asPathItem: function() {
                return this.toPath(!1)
            },
            _draw: function(t, e, n, i) {
                var r = this._style,
                    s = r.hasFill(),
                    a = r.hasStroke(),
                    o = e.dontFinish || e.clip,
                    h = !i;
                if (s || a || o) {
                    var u = this._type,
                        l = this._radius,
                        c = "circle" === u;
                    if (e.dontStart || t.beginPath(), h && c) t.arc(0, 0, l, 0, 2 * Math.PI, !0);
                    else {
                        var f = c ? l : l.width,
                            d = c ? l : l.height,
                            _ = this._size,
                            g = _.width,
                            v = _.height;
                        if (h && "rectangle" === u && 0 === f && 0 === d) t.rect(-g / 2, -v / 2, g, v);
                        else {
                            var p = g / 2,
                                m = v / 2,
                                y = .44771525016920644,
                                w = f * y,
                                x = d * y,
                                b = [-p, -m + d, -p, -m + x, -p + w, -m, -p + f, -m, p - f, -m, p - w, -m, p, -m + x, p, -m + d, p, m - d, p, m - x, p - w, m, p - f, m, -p + f, m, -p + w, m, -p, m - x, -p, m - d];
                            i && i.transform(b, b, 32), t.moveTo(b[0], b[1]), t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]), p !== f && t.lineTo(b[8], b[9]), t.bezierCurveTo(b[10], b[11], b[12], b[13], b[14], b[15]), m !== d && t.lineTo(b[16], b[17]), t.bezierCurveTo(b[18], b[19], b[20], b[21], b[22], b[23]), p !== f && t.lineTo(b[24], b[25]), t.bezierCurveTo(b[26], b[27], b[28], b[29], b[30], b[31])
                        }
                    }
                    t.closePath()
                }
                o || !s && !a || (this._setStyles(t, e, n), s && (t.fill(r.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), a && t.stroke())
            },
            _canComposite: function() {
                return !(this.hasFill() && this.hasStroke())
            },
            _getBounds: function(t, e) {
                var n = new v(this._size).setCenter(0, 0),
                    i = this._style,
                    r = e.stroke && i.hasStroke() && i.getStrokeWidth();
                return t && (n = t._transformBounds(n)), r ? n.expand(N._getStrokePadding(r, this._getStrokeMatrix(t, e))) : n
            }
        }, new function() {
            function t(t, e, n) {
                var i = t._radius;
                if (!i.isZero())
                    for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                        var a = new f(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1),
                            o = a.multiply(r),
                            h = o.subtract(a.multiply(i));
                        if (new v(n ? o.add(a.multiply(n)) : o, h).contains(e)) return {
                            point: h,
                            quadrant: s
                        }
                    }
            }

            function e(t, e, n, i) {
                var r = t.divide(e);
                return (!i || r.isInQuadrant(i)) && r.subtract(r.normalize()).multiply(e).divide(n).length <= 1
            }
            return {
                _contains: function e(n) {
                    if ("rectangle" === this._type) {
                        var i = t(this, n);
                        return i ? n.subtract(i.point).divide(this._radius).getLength() <= 1 : e.base.call(this, n)
                    }
                    return n.divide(this.size).getLength() <= .5
                },
                _hitTestSelf: function n(i, r, s, a) {
                    var o = !1,
                        h = this._style,
                        u = r.stroke && h.hasStroke(),
                        l = r.fill && h.hasFill();
                    if (u || l) {
                        var c = this._type,
                            f = this._radius,
                            d = u ? h.getStrokeWidth() / 2 : 0,
                            _ = r._tolerancePadding.add(N._getStrokePadding(d, !h.getStrokeScaling() && a));
                        if ("rectangle" === c) {
                            var g = _.multiply(2),
                                p = t(this, i, g);
                            if (p) o = e(i.subtract(p.point), f, _, p.quadrant);
                            else {
                                var m = new v(this._size).setCenter(0, 0),
                                    y = m.expand(g),
                                    w = m.expand(g.negate());
                                o = y._containsPoint(i) && !w._containsPoint(i)
                            }
                        } else o = e(i, f, _)
                    }
                    return o ? new T(u ? "stroke" : "fill", this) : n.base.apply(this, arguments)
                }
            }
        }, {
            statics: new function() {
                function t(t, e, n, i, s) {
                    var a = r.create(S.prototype);
                    return a._type = t, a._size = n, a._radius = i, a._initialize(r.getNamed(s), e), a
                }
                return {
                    Circle: function() {
                        var e = arguments,
                            n = f.readNamed(e, "center"),
                            i = r.readNamed(e, "radius");
                        return t("circle", n, new _(2 * i), i, e)
                    },
                    Rectangle: function() {
                        var e = arguments,
                            n = v.readNamed(e, "rectangle"),
                            i = _.min(_.readNamed(e, "radius"), n.getSize(!0).divide(2));
                        return t("rectangle", n.getCenter(!0), n.getSize(!0), i, e)
                    },
                    Ellipse: function() {
                        var e = arguments,
                            n = S._readEllipse(e),
                            i = n.radius;
                        return t("ellipse", n.center, i.multiply(2), i, e)
                    },
                    _readEllipse: function(t) {
                        var e, n;
                        if (r.hasNamed(t, "radius")) e = f.readNamed(t, "center"), n = _.readNamed(t, "radius");
                        else {
                            var i = v.readNamed(t, "rectangle");
                            e = i.getCenter(!0), n = i.getSize(!0).divide(2)
                        }
                        return {
                            center: e,
                            radius: n
                        }
                    }
                }
            }
        }),
        P = x.extend({
            _class: "Raster",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: {
                stroke: !1,
                handle: !1
            },
            _serializeFields: {
                crossOrigin: null,
                source: null
            },
            _prioritize: ["crossOrigin"],
            _smoothing: "low",
            beans: !0,
            initialize: function(t, n) {
                if (!this._initialize(t, n !== e && f.read(arguments))) {
                    var r, s = typeof t,
                        a = "string" === s ? i.getElementById(t) : "object" === s ? t : null;
                    if (a && a !== x.NO_INSERT)
                        if (a.getContext || null != a.naturalHeight) r = a;
                        else if (a) {
                        var o = _.read(arguments);
                        o.isZero() || (r = et.getCanvas(o))
                    }
                    r ? this.setImage(r) : this.setSource(t)
                }
                this._size || (this._size = new _, this._loaded = !1)
            },
            _equals: function(t) {
                return this.getSource() === t.getSource()
            },
            copyContent: function(t) {
                var e = t._image,
                    n = t._canvas;
                if (e) this._setImage(e);
                else if (n) {
                    var i = et.getCanvas(t._size);
                    i.getContext("2d").drawImage(n, 0, 0), this._setImage(i)
                }
                this._crossOrigin = t._crossOrigin
            },
            getSize: function() {
                var t = this._size;
                return new g(t ? t.width : 0, t ? t.height : 0, this, "setSize")
            },
            setSize: function(t, e) {
                var n = _.read(arguments);
                if (n.equals(this._size)) e && this.clear();
                else if (n.width > 0 && n.height > 0) {
                    var i = !e && this.getElement();
                    this._setImage(et.getCanvas(n)), i && this.getContext(!0).drawImage(i, 0, 0, n.width, n.height)
                } else this._canvas && et.release(this._canvas), this._size = n.clone()
            },
            getWidth: function() {
                return this._size ? this._size.width : 0
            },
            setWidth: function(t) {
                this.setSize(t, this.getHeight())
            },
            getHeight: function() {
                return this._size ? this._size.height : 0
            },
            setHeight: function(t) {
                this.setSize(this.getWidth(), t)
            },
            getLoaded: function() {
                return this._loaded
            },
            isEmpty: function() {
                var t = this._size;
                return !t || 0 === t.width && 0 === t.height
            },
            getResolution: function() {
                var t = this._matrix,
                    e = new f(0, 0).transform(t),
                    n = new f(1, 0).transform(t).subtract(e),
                    i = new f(0, 1).transform(t).subtract(e);
                return new _(72 / n.getLength(), 72 / i.getLength())
            },
            getPpi: "#getResolution",
            getImage: function() {
                return this._image
            },
            setImage: function(t) {
                var e = this;

                function n(t) {
                    var n = e.getView(),
                        i = t && t.type || "load";
                    n && e.responds(i) && (st = n._scope, e.emit(i, new $(t)))
                }
                this._setImage(t), this._loaded ? setTimeout(n, 0) : t && U.add(t, {
                    load: function(i) {
                        e._setImage(t), n(i)
                    },
                    error: n
                })
            },
            _setImage: function(t) {
                this._canvas && et.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new _(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(1033)
            },
            getCanvas: function() {
                if (!this._canvas) {
                    var t = et.getContext(this._size);
                    try {
                        this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas
                    } catch (e) {
                        et.release(t)
                    }
                }
                return this._canvas
            },
            setCanvas: "#setImage",
            getContext: function(t) {
                return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(1025)), this._context
            },
            setContext: function(t) {
                this._context = t
            },
            getSource: function() {
                var t = this._image;
                return t && t.src || this.toDataURL()
            },
            setSource: function(e) {
                var n = new t.Image,
                    i = this._crossOrigin;
                i && (n.crossOrigin = i), e && (n.src = e), this.setImage(n)
            },
            getCrossOrigin: function() {
                var t = this._image;
                return t && t.crossOrigin || this._crossOrigin || ""
            },
            setCrossOrigin: function(t) {
                this._crossOrigin = t;
                var e = this._image;
                e && (e.crossOrigin = t)
            },
            getSmoothing: function() {
                return this._smoothing
            },
            setSmoothing: function(t) {
                this._smoothing = "string" == typeof t ? t : t ? "low" : "off", this._changed(257)
            },
            getElement: function() {
                return this._canvas || this._loaded && this._image
            }
        }, {
            beans: !1,
            getSubCanvas: function() {
                var t = v.read(arguments),
                    e = et.getContext(t.getSize());
                return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
            },
            getSubRaster: function() {
                var t = v.read(arguments),
                    e = new P(x.NO_INSERT);
                return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e
            },
            toDataURL: function() {
                var t = this._image,
                    e = t && t.src;
                if (/^data:/.test(e)) return e;
                var n = this.getCanvas();
                return n ? n.toDataURL.apply(n, arguments) : null
            },
            drawImage: function(t) {
                var e = f.read(arguments, 1);
                this.getContext(!0).drawImage(t, e.x, e.y)
            },
            getAverageColor: function(t) {
                var e, n;
                if (t ? t instanceof L ? (n = t, e = t.getBounds()) : "object" == typeof t && ("width" in t ? e = new v(t) : "x" in t && (e = new v(t.x - .5, t.y - .5, 1, 1))) : e = this.getBounds(), !e) return null;
                var i = Math.min(e.width, 32),
                    s = Math.min(e.height, 32),
                    a = P._sampleContext;
                a ? a.clearRect(0, 0, 33, 33) : a = P._sampleContext = et.getContext(new _(32)), a.save();
                var o = (new m).scale(i / e.width, s / e.height).translate(-e.x, -e.y);
                o.applyToContext(a), n && n.draw(a, new r({
                    clip: !0,
                    matrices: [o]
                })), this._matrix.applyToContext(a);
                var h = this.getElement(),
                    u = this._size;
                h && a.drawImage(h, -u.width / 2, -u.height / 2), a.restore();
                for (var l = a.getImageData(.5, .5, Math.ceil(i), Math.ceil(s)).data, c = [0, 0, 0], f = 0, d = 0, g = l.length; d < g; d += 4) {
                    var p = l[d + 3];
                    f += p, p /= 255, c[0] += l[d] * p, c[1] += l[d + 1] * p, c[2] += l[d + 2] * p
                }
                for (d = 0; d < 3; d++) c[d] /= f;
                return f ? R.read(c) : null
            },
            getPixel: function() {
                var t = f.read(arguments),
                    e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                return new R("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
            },
            setPixel: function() {
                var t = arguments,
                    e = f.read(t),
                    n = R.read(t),
                    i = n._convert("rgb"),
                    r = n._alpha,
                    s = this.getContext(!0),
                    a = s.createImageData(1, 1),
                    o = a.data;
                o[0] = 255 * i[0], o[1] = 255 * i[1], o[2] = 255 * i[2], o[3] = null != r ? 255 * r : 255, s.putImageData(a, e.x, e.y)
            },
            clear: function() {
                var t = this._size;
                this.getContext(!0).clearRect(0, 0, t.width + 1, t.height + 1)
            },
            createImageData: function() {
                var t = _.read(arguments);
                return this.getContext().createImageData(t.width, t.height)
            },
            getImageData: function() {
                var t = v.read(arguments);
                return t.isEmpty() && (t = new v(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
            },
            setImageData: function(t) {
                var e = f.read(arguments, 1);
                this.getContext(!0).putImageData(t, e.x, e.y)
            },
            _getBounds: function(t, e) {
                var n = new v(this._size).setCenter(0, 0);
                return t ? t._transformBounds(n) : n
            },
            _hitTestSelf: function(t) {
                if (this._contains(t)) {
                    var e = this;
                    return new T("pixel", e, {
                        offset: t.add(e._size.divide(2)).round(),
                        color: {
                            get: function() {
                                return e.getPixel(this.offset)
                            }
                        }
                    })
                }
            },
            _draw: function(t, e, n) {
                var i = this.getElement();
                if (i && i.width > 0 && i.height > 0) {
                    t.globalAlpha = l.clamp(this._opacity, 0, 1), this._setStyles(t, e, n);
                    var r = this._smoothing,
                        s = "off" === r;
                    Z.setPrefixed(t, s ? "imageSmoothingEnabled" : "imageSmoothingQuality", !s && r), t.drawImage(i, -this._size.width / 2, -this._size.height / 2)
                }
            },
            _canComposite: function() {
                return !0
            }
        }),
        I = x.extend({
            _class: "SymbolItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: {
                stroke: !0
            },
            _serializeFields: {
                symbol: null
            },
            initialize: function(t, n) {
                this._initialize(t, n !== e && f.read(arguments, 1)) || this.setDefinition(t instanceof M ? t : new M(t))
            },
            _equals: function(t) {
                return this._definition === t._definition
            },
            copyContent: function(t) {
                this.setDefinition(t._definition)
            },
            getDefinition: function() {
                return this._definition
            },
            setDefinition: function(t) {
                this._definition = t, this._changed(9)
            },
            getSymbol: "#getDefinition",
            setSymbol: "#setDefinition",
            isEmpty: function() {
                return this._definition._item.isEmpty()
            },
            _getBounds: function(t, e) {
                var n = this._definition._item;
                return n._getCachedBounds(n._matrix.prepended(t), e)
            },
            _hitTestSelf: function(t, e, n) {
                var i = e.extend({
                        all: !1
                    }),
                    r = this._definition._item._hitTest(t, i, n);
                return r && (r.item = this), r
            },
            _draw: function(t, e) {
                this._definition._item.draw(t, e)
            }
        }),
        M = r.extend({
            _class: "SymbolDefinition",
            initialize: function(t, e) {
                this._id = c.get(), this.project = st.project, t && this.setItem(t, e)
            },
            _serialize: function(t, e) {
                return e.add(this, (function() {
                    return r.serialize([this._class, this._item], t, !1, e)
                }))
            },
            _changed: function(t) {
                8 & t && x._clearBoundsCache(this), 1 & t && this.project._changed(t)
            },
            getItem: function() {
                return this._item
            },
            setItem: function(t, e) {
                t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new f), t._symbol = this, this._changed(9)
            },
            getDefinition: "#getItem",
            setDefinition: "#setItem",
            place: function(t) {
                return new I(this, t)
            },
            clone: function() {
                return new M(this._item.clone(!1))
            },
            equals: function(t) {
                return t === this || t && this._item.equals(t._item) || !1
            }
        }),
        T = r.extend({
            _class: "HitResult",
            initialize: function(t, e, n) {
                this.type = t, this.item = e, n && this.inject(n)
            },
            statics: {
                getOptions: function(t) {
                    var e = t && r.read(t);
                    return new r({
                        type: null,
                        tolerance: st.settings.hitTolerance,
                        fill: !e,
                        stroke: !e,
                        segments: !e,
                        handles: !1,
                        ends: !1,
                        position: !1,
                        center: !1,
                        bounds: !1,
                        guides: !1,
                        selected: !1
                    }, e)
                }
            }
        }),
        O = r.extend({
            _class: "Segment",
            beans: !0,
            _selection: 0,
            initialize: function(t, n, i, r, s, a) {
                var o, h, u, l, c = arguments.length;
                c > 0 && (null == t || "object" == typeof t ? 1 === c && t && "point" in t ? (o = t.point, h = t.handleIn, u = t.handleOut, l = t.selection) : (o = t, h = n, u = i, l = r) : (o = [t, n], h = i !== e ? [i, r] : null, u = s !== e ? [s, a] : null)), new k(o, this, "_point"), new k(h, this, "_handleIn"), new k(u, this, "_handleOut"), l && this.setSelection(l)
            },
            _serialize: function(t, e) {
                var n = this._point,
                    i = this._selection,
                    s = i || this.hasHandles() ? [n, this._handleIn, this._handleOut] : n;
                return i && s.push(i), r.serialize(s, t, !0, e)
            },
            _changed: function(t) {
                var e = this._path;
                if (e) {
                    var n, i = e._curves,
                        r = this._index;
                    i && (t && t !== this._point && t !== this._handleIn || !(n = r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) || n._changed(), t && t !== this._point && t !== this._handleOut || !(n = i[r]) || n._changed()), e._changed(41)
                }
            },
            getPoint: function() {
                return this._point
            },
            setPoint: function() {
                this._point.set(f.read(arguments))
            },
            getHandleIn: function() {
                return this._handleIn
            },
            setHandleIn: function() {
                this._handleIn.set(f.read(arguments))
            },
            getHandleOut: function() {
                return this._handleOut
            },
            setHandleOut: function() {
                this._handleOut.set(f.read(arguments))
            },
            hasHandles: function() {
                return !this._handleIn.isZero() || !this._handleOut.isZero()
            },
            isSmooth: function() {
                var t = this._handleIn,
                    e = this._handleOut;
                return !t.isZero() && !e.isZero() && t.isCollinear(e)
            },
            clearHandles: function() {
                this._handleIn._set(0, 0), this._handleOut._set(0, 0)
            },
            getSelection: function() {
                return this._selection
            },
            setSelection: function(t) {
                var e = this._selection,
                    n = this._path;
                this._selection = t = t || 0, n && t !== e && (n._updateSelection(this, e, t), n._changed(257))
            },
            _changeSelection: function(t, e) {
                var n = this._selection;
                this.setSelection(e ? n | t : n & ~t)
            },
            isSelected: function() {
                return !!(7 & this._selection)
            },
            setSelected: function(t) {
                this._changeSelection(7, t)
            },
            getIndex: function() {
                return this._index !== e ? this._index : null
            },
            getPath: function() {
                return this._path || null
            },
            getCurve: function() {
                var t = this._path,
                    e = this._index;
                return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
            },
            getLocation: function() {
                var t = this.getCurve();
                return t ? new A(t, this === t._segment1 ? 0 : 1) : null
            },
            getNext: function() {
                var t = this._path && this._path._segments;
                return t && (t[this._index + 1] || this._path._closed && t[0]) || null
            },
            smooth: function(t, n, i) {
                var r = t || {},
                    s = r.type,
                    a = r.factor,
                    o = this.getPrevious(),
                    h = this.getNext(),
                    u = (o || this)._point,
                    l = this._point,
                    c = (h || this)._point,
                    d = u.getDistance(l),
                    _ = l.getDistance(c);
                if (s && "catmull-rom" !== s) {
                    if ("geometric" !== s) throw new Error("Smoothing method '" + s + "' not supported.");
                    if (o && h) {
                        var g = u.subtract(c),
                            v = a === e ? .4 : a,
                            p = v * d / (d + _);
                        n || this.setHandleIn(g.multiply(p)), i || this.setHandleOut(g.multiply(p - v))
                    }
                } else {
                    var m = a === e ? .5 : a,
                        y = Math.pow(d, m),
                        w = y * y,
                        x = Math.pow(_, m),
                        b = x * x;
                    if (!n && o) {
                        var C = 2 * b + 3 * x * y + w,
                            S = 3 * x * (x + y);
                        this.setHandleIn(0 !== S ? new f((b * u._x + C * l._x - w * c._x) / S - l._x, (b * u._y + C * l._y - w * c._y) / S - l._y) : new f)
                    }
                    if (!i && h) {
                        C = 2 * w + 3 * y * x + b, S = 3 * y * (y + x);
                        this.setHandleOut(0 !== S ? new f((w * c._x + C * l._x - b * u._x) / S - l._x, (w * c._y + C * l._y - b * u._y) / S - l._y) : new f)
                    }
                }
            },
            getPrevious: function() {
                var t = this._path && this._path._segments;
                return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            isFirst: function() {
                return !this._index
            },
            isLast: function() {
                var t = this._path;
                return t && this._index === t._segments.length - 1 || !1
            },
            reverse: function() {
                var t = this._handleIn,
                    e = this._handleOut,
                    n = t.clone();
                t.set(e), e.set(n)
            },
            reversed: function() {
                return new O(this._point, this._handleOut, this._handleIn)
            },
            remove: function() {
                return !!this._path && !!this._path.removeSegment(this._index)
            },
            clone: function() {
                return new O(this._point, this._handleIn, this._handleOut)
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1
            },
            toString: function() {
                var t = ["point: " + this._point];
                return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
            },
            transform: function(t) {
                this._transformCoordinates(t, new Array(6), !0), this._changed()
            },
            interpolate: function(t, e, n) {
                var i = 1 - n,
                    r = n,
                    s = t._point,
                    a = e._point,
                    o = t._handleIn,
                    h = e._handleIn,
                    u = e._handleOut,
                    l = t._handleOut;
                this._point._set(i * s._x + r * a._x, i * s._y + r * a._y, !0), this._handleIn._set(i * o._x + r * h._x, i * o._y + r * h._y, !0), this._handleOut._set(i * l._x + r * u._x, i * l._y + r * u._y, !0), this._changed()
            },
            _transformCoordinates: function(t, e, n) {
                var i = this._point,
                    r = n && this._handleIn.isZero() ? null : this._handleIn,
                    s = n && this._handleOut.isZero() ? null : this._handleOut,
                    a = i._x,
                    o = i._y,
                    h = 2;
                return e[0] = a, e[1] = o, r && (e[h++] = r._x + a, e[h++] = r._y + o), s && (e[h++] = s._x + a, e[h++] = s._y + o), t && (t._transformCoordinates(e, e, h / 2), a = e[0], o = e[1], n ? (i._x = a, i._y = o, h = 2, r && (r._x = e[h++] - a, r._y = e[h++] - o), s && (s._x = e[h++] - a, s._y = e[h++] - o)) : (r || (e[h++] = a, e[h++] = o), s || (e[h++] = a, e[h++] = o))), e
            }
        }),
        k = f.extend({
            initialize: function(t, n, i) {
                var r, s, a;
                if (t)
                    if ((r = t[0]) !== e) s = t[1];
                    else {
                        var o = t;
                        (r = o.x) === e && (r = (o = f.read(arguments)).x), s = o.y, a = o.selected
                    }
                else r = s = 0;
                this._x = r, this._y = s, this._owner = n, n[i] = this, a && this.setSelected(!0)
            },
            _set: function(t, e) {
                return this._x = t, this._y = e, this._owner._changed(this), this
            },
            getX: function() {
                return this._x
            },
            setX: function(t) {
                this._x = t, this._owner._changed(this)
            },
            getY: function() {
                return this._y
            },
            setY: function(t) {
                this._y = t, this._owner._changed(this)
            },
            isZero: function() {
                var t = l.isZero;
                return t(this._x) && t(this._y)
            },
            isSelected: function() {
                return !!(this._owner._selection & this._getSelection())
            },
            setSelected: function(t) {
                this._owner._changeSelection(this._getSelection(), t)
            },
            _getSelection: function() {
                var t = this._owner;
                return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0
            }
        }),
        z = r.extend({
            _class: "Curve",
            beans: !0,
            initialize: function(t, e, n, i, r, s, a, o) {
                var h, u, l, c, f, d, _ = arguments.length;
                3 === _ ? (this._path = t, h = e, u = n) : _ ? 1 === _ ? "segment1" in t ? (h = new O(t.segment1), u = new O(t.segment2)) : "point1" in t ? (l = t.point1, f = t.handle1, d = t.handle2, c = t.point2) : Array.isArray(t) && (l = [t[0], t[1]], c = [t[6], t[7]], f = [t[2] - t[0], t[3] - t[1]], d = [t[4] - t[6], t[5] - t[7]]) : 2 === _ ? (h = new O(t), u = new O(e)) : 4 === _ ? (l = t, f = e, d = n, c = i) : 8 === _ && (l = [t, e], c = [a, o], f = [n - t, i - e], d = [r - a, s - o]) : (h = new O, u = new O), this._segment1 = h || new O(l, null, f), this._segment2 = u || new O(c, d, null)
            },
            _serialize: function(t, e) {
                return r.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e)
            },
            _changed: function() {
                this._length = this._bounds = e
            },
            clone: function() {
                return new z(this._segment1, this._segment2)
            },
            toString: function() {
                var t = ["point1: " + this._segment1._point];
                return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
            },
            classify: function() {
                return z.classify(this.getValues())
            },
            remove: function() {
                var t = !1;
                if (this._path) {
                    var e = this._segment2,
                        n = e._handleOut;
                    (t = e.remove()) && this._segment1._handleOut.set(n)
                }
                return t
            },
            getPoint1: function() {
                return this._segment1._point
            },
            setPoint1: function() {
                this._segment1._point.set(f.read(arguments))
            },
            getPoint2: function() {
                return this._segment2._point
            },
            setPoint2: function() {
                this._segment2._point.set(f.read(arguments))
            },
            getHandle1: function() {
                return this._segment1._handleOut
            },
            setHandle1: function() {
                this._segment1._handleOut.set(f.read(arguments))
            },
            getHandle2: function() {
                return this._segment2._handleIn
            },
            setHandle2: function() {
                this._segment2._handleIn.set(f.read(arguments))
            },
            getSegment1: function() {
                return this._segment1
            },
            getSegment2: function() {
                return this._segment2
            },
            getPath: function() {
                return this._path
            },
            getIndex: function() {
                return this._segment1._index
            },
            getNext: function() {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
            },
            getPrevious: function() {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            isFirst: function() {
                return !this._segment1._index
            },
            isLast: function() {
                var t = this._path;
                return t && this._segment1._index === t._curves.length - 1 || !1
            },
            isSelected: function() {
                return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected()
            },
            setSelected: function(t) {
                this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t)
            },
            getValues: function(t) {
                return z.getValues(this._segment1, this._segment2, t)
            },
            getPoints: function() {
                for (var t = this.getValues(), e = [], n = 0; n < 8; n += 2) e.push(new f(t[n], t[n + 1]));
                return e
            }
        }, {
            getLength: function() {
                return null == this._length && (this._length = z.getLength(this.getValues(), 0, 1)), this._length
            },
            getArea: function() {
                return z.getArea(this.getValues())
            },
            getLine: function() {
                return new y(this._segment1._point, this._segment2._point)
            },
            getPart: function(t, e) {
                return new z(z.getPart(this.getValues(), t, e))
            },
            getPartLength: function(t, e) {
                return z.getLength(this.getValues(), t, e)
            },
            divideAt: function(t) {
                return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t))
            },
            divideAtTime: function(t, e) {
                var n = null;
                if (t >= 1e-8 && t <= .99999999) {
                    var i = z.subdivide(this.getValues(), t),
                        r = i[0],
                        s = i[1],
                        a = e || this.hasHandles(),
                        o = this._segment1,
                        h = this._segment2,
                        u = this._path;
                    a && (o._handleOut._set(r[2] - r[0], r[3] - r[1]), h._handleIn._set(s[4] - s[6], s[5] - s[7]));
                    var l = r[6],
                        c = r[7],
                        d = new O(new f(l, c), a && new f(r[4] - l, r[5] - c), a && new f(s[2] - l, s[3] - c));
                    u ? (u.insert(o._index + 1, d), n = this.getNext()) : (this._segment2 = d, this._changed(), n = new z(d, h))
                }
                return n
            },
            splitAt: function(t) {
                var e = this._path;
                return e ? e.splitAt(t) : null
            },
            splitAtTime: function(t) {
                return this.splitAt(this.getLocationAtTime(t))
            },
            divide: function(t, n) {
                return this.divideAtTime(t === e ? .5 : n ? t : this.getTimeAt(t))
            },
            split: function(t, n) {
                return this.splitAtTime(t === e ? .5 : n ? t : this.getTimeAt(t))
            },
            reversed: function() {
                return new z(this._segment2.reversed(), this._segment1.reversed())
            },
            clearHandles: function() {
                this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0)
            },
            statics: {
                getValues: function(t, e, n, i) {
                    var r = t._point,
                        s = t._handleOut,
                        a = e._handleIn,
                        o = e._point,
                        h = r.x,
                        u = r.y,
                        l = o.x,
                        c = o.y,
                        f = i ? [h, u, h, u, l, c, l, c] : [h, u, h + s._x, u + s._y, l + a._x, c + a._y, l, c];
                    return n && n._transformCoordinates(f, f, 4), f
                },
                subdivide: function(t, n) {
                    var i = t[0],
                        r = t[1],
                        s = t[2],
                        a = t[3],
                        o = t[4],
                        h = t[5],
                        u = t[6],
                        l = t[7];
                    n === e && (n = .5);
                    var c = 1 - n,
                        f = c * i + n * s,
                        d = c * r + n * a,
                        _ = c * s + n * o,
                        g = c * a + n * h,
                        v = c * o + n * u,
                        p = c * h + n * l,
                        m = c * f + n * _,
                        y = c * d + n * g,
                        w = c * _ + n * v,
                        x = c * g + n * p,
                        b = c * m + n * w,
                        C = c * y + n * x;
                    return [
                        [i, r, f, d, m, y, b, C],
                        [b, C, w, x, v, p, u, l]
                    ]
                },
                getMonoCurves: function(t, e) {
                    var n = [],
                        i = e ? 0 : 1,
                        r = t[i + 0],
                        s = t[i + 2],
                        a = t[i + 4],
                        o = t[i + 6];
                    if (r >= s == s >= a && s >= a == a >= o || z.isStraight(t)) n.push(t);
                    else {
                        var h = 3 * (s - a) - r + o,
                            u = 2 * (r + a) - 4 * s,
                            c = s - r,
                            f = [],
                            d = l.solveQuadratic(h, u, c, f, 1e-8, .99999999);
                        if (d) {
                            f.sort();
                            var _ = f[0],
                                g = z.subdivide(t, _);
                            n.push(g[0]), d > 1 && (_ = (f[1] - _) / (1 - _), g = z.subdivide(g[1], _), n.push(g[0])), n.push(g[1])
                        } else n.push(t)
                    }
                    return n
                },
                solveCubic: function(t, e, n, i, r, s) {
                    var a = t[e],
                        o = t[e + 2],
                        h = t[e + 4],
                        u = t[e + 6],
                        c = 0;
                    if (!(a < n && u < n && o < n && h < n || a > n && u > n && o > n && h > n)) {
                        var f = 3 * (o - a),
                            d = 3 * (h - o) - f,
                            _ = u - a - f - d;
                        c = l.solveCubic(_, d, f, a - n, i, r, s)
                    }
                    return c
                },
                getTimeOf: function(t, e) {
                    var n = new f(t[0], t[1]),
                        i = new f(t[6], t[7]),
                        r = 1e-7;
                    if (null === (e.isClose(n, 1e-12) ? 0 : e.isClose(i, 1e-12) ? 1 : null))
                        for (var s = [e.x, e.y], a = [], o = 0; o < 2; o++)
                            for (var h = z.solveCubic(t, o, s[o], a, 0, 1), u = 0; u < h; u++) {
                                var l = a[u];
                                if (e.isClose(z.getPoint(t, l), r)) return l
                            }
                    return e.isClose(n, r) ? 0 : e.isClose(i, r) ? 1 : null
                },
                getNearestTime: function(t, e) {
                    if (z.isStraight(t)) {
                        var n = t[0],
                            i = t[1],
                            r = t[6] - n,
                            s = t[7] - i,
                            a = r * r + s * s;
                        if (0 === a) return 0;
                        var o = ((e.x - n) * r + (e.y - i) * s) / a;
                        return o < 1e-12 ? 0 : o > .999999999999 ? 1 : z.getTimeOf(t, new f(n + o * r, i + o * s))
                    }
                    var h = Infinity,
                        u = 0;

                    function l(n) {
                        if (n >= 0 && n <= 1) {
                            var i = e.getDistance(z.getPoint(t, n), !0);
                            if (i < h) return h = i, u = n, !0
                        }
                    }
                    for (var c = 0; c <= 100; c++) l(c / 100);
                    for (var d = .005; d > 1e-8;) l(u - d) || l(u + d) || (d /= 2);
                    return u
                },
                getPart: function(t, e, n) {
                    var i = e > n;
                    if (i) {
                        var r = e;
                        e = n, n = r
                    }
                    return e > 0 && (t = z.subdivide(t, e)[1]), n < 1 && (t = z.subdivide(t, (n - e) / (1 - e))[0]), i ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                },
                isFlatEnough: function(t, e) {
                    var n = t[0],
                        i = t[1],
                        r = t[2],
                        s = t[3],
                        a = t[4],
                        o = t[5],
                        h = t[6],
                        u = t[7],
                        l = 3 * r - 2 * n - h,
                        c = 3 * s - 2 * i - u,
                        f = 3 * a - 2 * h - n,
                        d = 3 * o - 2 * u - i;
                    return Math.max(l * l, f * f) + Math.max(c * c, d * d) <= 16 * e * e
                },
                getArea: function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = t[3],
                        s = t[4],
                        a = t[5],
                        o = t[6],
                        h = t[7];
                    return 3 * ((h - n) * (i + s) - (o - e) * (r + a) + r * (e - s) - i * (n - a) + h * (s + e / 3) - o * (a + n / 3)) / 20
                },
                getBounds: function(t) {
                    for (var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0; r < 2; r++) z._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, n, i);
                    return new v(e[0], e[1], n[0] - e[0], n[1] - e[1])
                },
                _addBounds: function(t, e, n, i, r, s, a, o, h) {
                    function u(t, e) {
                        var n = t - e,
                            i = t + e;
                        n < a[r] && (a[r] = n), i > o[r] && (o[r] = i)
                    }
                    s /= 2;
                    var c = a[r] + s,
                        f = o[r] - s;
                    if (t < c || e < c || n < c || i < c || t > f || e > f || n > f || i > f)
                        if (e < t != e < i && n < t != n < i) u(t, 0), u(i, 0);
                        else {
                            var d = 3 * (e - n) - t + i,
                                _ = 2 * (t + n) - 4 * e,
                                g = e - t,
                                v = l.solveQuadratic(d, _, g, h);
                            u(i, 0);
                            for (var p = 0; p < v; p++) {
                                var m = h[p],
                                    y = 1 - m;
                                1e-8 <= m && m <= .99999999 && u(y * y * y * t + 3 * y * y * m * e + 3 * y * m * m * n + m * m * m * i, s)
                            }
                        }
                }
            }
        }, r.each(["getBounds", "getStrokeBounds", "getHandleBounds"], (function(t) {
            this[t] = function() {
                this._bounds || (this._bounds = {});
                var e = this._bounds[t];
                return e || (e = this._bounds[t] = N[t]([this._segment1, this._segment2], !1, this._path)), e.clone()
            }
        }), {}), r.each({
            isStraight: function(t, e, n, i) {
                if (e.isZero() && n.isZero()) return !0;
                var r = i.subtract(t);
                if (r.isZero()) return !1;
                if (r.isCollinear(e) && r.isCollinear(n)) {
                    var s = new y(t, i);
                    if (s.getDistance(t.add(e)) < 1e-7 && s.getDistance(i.add(n)) < 1e-7) {
                        var a = r.dot(r),
                            o = r.dot(e) / a,
                            h = r.dot(n) / a;
                        return o >= 0 && o <= 1 && h <= 0 && h >= -1
                    }
                }
                return !1
            },
            isLinear: function(t, e, n, i) {
                var r = i.subtract(t).divide(3);
                return e.equals(r) && n.negate().equals(r)
            }
        }, (function(t, e) {
            this[e] = function(e) {
                var n = this._segment1,
                    i = this._segment2;
                return t(n._point, n._handleOut, i._handleIn, i._point, e)
            }, this.statics[e] = function(e, n) {
                var i = e[0],
                    r = e[1],
                    s = e[6],
                    a = e[7];
                return t(new f(i, r), new f(e[2] - i, e[3] - r), new f(e[4] - s, e[5] - a), new f(s, a), n)
            }
        }), {
            statics: {},
            hasHandles: function() {
                return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero()
            },
            hasLength: function(t) {
                return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0)
            },
            isCollinear: function(t) {
                return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine())
            },
            isHorizontal: function() {
                return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-8
            },
            isVertical: function() {
                return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-8
            }
        }), {
            beans: !1,
            getLocationAt: function(t, e) {
                return this.getLocationAtTime(e ? t : this.getTimeAt(t))
            },
            getLocationAtTime: function(t) {
                return null != t && t >= 0 && t <= 1 ? new A(this, t) : null
            },
            getTimeAt: function(t, e) {
                return z.getTimeAt(this.getValues(), t, e)
            },
            getParameterAt: "#getTimeAt",
            getTimesWithTangent: function() {
                var t = f.read(arguments);
                return t.isZero() ? [] : z.getTimesWithTangent(this.getValues(), t)
            },
            getOffsetAtTime: function(t) {
                return this.getPartLength(0, t)
            },
            getLocationOf: function() {
                return this.getLocationAtTime(this.getTimeOf(f.read(arguments)))
            },
            getOffsetOf: function() {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getTimeOf: function() {
                return z.getTimeOf(this.getValues(), f.read(arguments))
            },
            getParameterOf: "#getTimeOf",
            getNearestLocation: function() {
                var t = f.read(arguments),
                    e = this.getValues(),
                    n = z.getNearestTime(e, t),
                    i = z.getPoint(e, n);
                return new A(this, n, i, null, t.getDistance(i))
            },
            getNearestPoint: function() {
                var t = this.getNearestLocation.apply(this, arguments);
                return t ? t.getPoint() : t
            }
        }, new function() {
            var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"];
            return r.each(t, (function(t) {
                this[t + "At"] = function(e, n) {
                    var i = this.getValues();
                    return z[t](i, n ? e : z.getTimeAt(i, e))
                }, this[t + "AtTime"] = function(e) {
                    return z[t](this.getValues(), e)
                }
            }), {
                statics: {
                    _evaluateMethods: t
                }
            })
        }, new function() {
            function t(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    a = t[5],
                    o = t[6],
                    h = t[7],
                    u = 9 * (i - s) + 3 * (o - e),
                    l = 6 * (e + s) - 12 * i,
                    c = 3 * (i - e),
                    f = 9 * (r - a) + 3 * (h - n),
                    d = 6 * (n + a) - 12 * r,
                    _ = 3 * (r - n);
                return function(t) {
                    var e = (u * t + l) * t + c,
                        n = (f * t + d) * t + _;
                    return Math.sqrt(e * e + n * n)
                }
            }

            function n(t, e) {
                return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t))))
            }

            function i(t, e, n, i) {
                if (null == e || e < 0 || e > 1) return null;
                var r = t[0],
                    s = t[1],
                    a = t[2],
                    o = t[3],
                    h = t[4],
                    u = t[5],
                    c = t[6],
                    d = t[7],
                    _ = l.isZero;
                _(a - r) && _(o - s) && (a = r, o = s), _(h - c) && _(u - d) && (h = c, u = d);
                var g, v, p = 3 * (a - r),
                    m = 3 * (h - a) - p,
                    y = c - r - p - m,
                    w = 3 * (o - s),
                    x = 3 * (u - o) - w,
                    b = d - s - w - x;
                if (0 === n) g = 0 === e ? r : 1 === e ? c : ((y * e + m) * e + p) * e + r, v = 0 === e ? s : 1 === e ? d : ((b * e + x) * e + w) * e + s;
                else {
                    var C = 1e-8,
                        S = 1 - C;
                    if (e < C ? (g = p, v = w) : e > S ? (g = 3 * (c - h), v = 3 * (d - u)) : (g = (3 * y * e + 2 * m) * e + p, v = (3 * b * e + 2 * x) * e + w), i) {
                        0 === g && 0 === v && (e < C || e > S) && (g = h - a, v = u - o);
                        var P = Math.sqrt(g * g + v * v);
                        P && (g /= P, v /= P)
                    }
                    if (3 === n) {
                        h = 6 * y * e + 2 * m, u = 6 * b * e + 2 * x;
                        var I = Math.pow(g * g + v * v, 1.5);
                        g = 0 !== I ? (g * u - v * h) / I : 0, v = 0
                    }
                }
                return 2 === n ? new f(v, -g) : new f(g, v)
            }
            return {
                statics: {
                    classify: function(t) {
                        var n = t[0],
                            i = t[1],
                            r = t[2],
                            s = t[3],
                            a = t[4],
                            o = t[5],
                            h = t[6],
                            u = t[7],
                            c = r * (i - u) + s * (h - n) + n * u - i * h,
                            f = 3 * (a * (s - i) + o * (n - r) + r * i - s * n),
                            d = f - c,
                            _ = d - c + (n * (u - o) + i * (a - h) + h * o - u * a),
                            g = Math.sqrt(_ * _ + d * d + f * f),
                            v = 0 !== g ? 1 / g : 0,
                            p = l.isZero,
                            m = "serpentine";

                        function y(t, n, i) {
                            var r = n !== e,
                                s = r && n > 0 && n < 1,
                                a = r && i > 0 && i < 1;
                            return !r || (s || a) && ("loop" !== t || s && a) || (t = "arch", s = a = !1), {
                                type: t,
                                roots: s || a ? s && a ? n < i ? [n, i] : [i, n] : [s ? n : i] : null
                            }
                        }
                        if (d *= v, f *= v, p(_ *= v)) return p(d) ? y(p(f) ? "line" : "quadratic") : y(m, f / (3 * d));
                        var w = 3 * d * d - 4 * _ * f;
                        if (p(w)) return y("cusp", d / (2 * _));
                        var x = w > 0 ? Math.sqrt(w / 3) : Math.sqrt(-w),
                            b = 2 * _;
                        return y(w > 0 ? m : "loop", (d + x) / b, (d - x) / b)
                    },
                    getLength: function(i, r, s, a) {
                        if (r === e && (r = 0), s === e && (s = 1), z.isStraight(i)) {
                            var o = i;
                            s < 1 && (o = z.subdivide(o, s)[0], r /= s), r > 0 && (o = z.subdivide(o, r)[1]);
                            var h = o[6] - o[0],
                                u = o[7] - o[1];
                            return Math.sqrt(h * h + u * u)
                        }
                        return l.integrate(a || t(i), r, s, n(r, s))
                    },
                    getTimeAt: function(i, r, s) {
                        if (s === e && (s = r < 0 ? 1 : 0), 0 === r) return s;
                        var a = Math.abs,
                            o = r > 0,
                            h = o ? s : 0,
                            u = o ? 1 : s,
                            c = t(i),
                            f = z.getLength(i, h, u, c),
                            d = a(r) - f;
                        if (a(d) < 1e-12) return o ? u : h;
                        if (d > 1e-12) return null;
                        var _ = r / f,
                            g = 0;
                        return l.findRoot((function(t) {
                            return g += l.integrate(c, s, t, n(s, t)), s = t, g - r
                        }), c, s + _, h, u, 32, 1e-12)
                    },
                    getPoint: function(t, e) {
                        return i(t, e, 0, !1)
                    },
                    getTangent: function(t, e) {
                        return i(t, e, 1, !0)
                    },
                    getWeightedTangent: function(t, e) {
                        return i(t, e, 1, !1)
                    },
                    getNormal: function(t, e) {
                        return i(t, e, 2, !0)
                    },
                    getWeightedNormal: function(t, e) {
                        return i(t, e, 2, !1)
                    },
                    getCurvature: function(t, e) {
                        return i(t, e, 3, !1).x
                    },
                    getPeaks: function(t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2],
                            r = t[3],
                            s = t[4],
                            a = t[5],
                            o = 3 * i - e - 3 * s + t[6],
                            h = 3 * e - 6 * i + 3 * s,
                            u = -3 * e + 3 * i,
                            c = 3 * r - n - 3 * a + t[7],
                            f = 3 * n - 6 * r + 3 * a,
                            d = -3 * n + 3 * r,
                            _ = [];
                        return l.solveCubic(9 * (o * o + c * c), 9 * (o * h + f * c), 2 * (h * h + f * f) + 3 * (u * o + d * c), u * h + f * d, _, 1e-8, .99999999), _.sort()
                    }
                }
            }
        }, new function() {
            function t(t, e, n, i, r, s, a) {
                var o = !a && n.getPrevious() === r,
                    h = !a && n !== r && n.getNext() === r,
                    u = 1e-8,
                    l = 1 - u;
                if (null !== i && i >= (o ? u : 0) && i <= (h ? l : 1) && null !== s && s >= (h ? u : 0) && s <= (o ? l : 1)) {
                    var c = new A(n, i, null, a),
                        f = new A(r, s, null, a);
                    c._intersection = f, f._intersection = c, e && !e(c) || A.insert(t, c, !0)
                }
            }

            function e(i, r, s, a, o, h, u, l, c, f, d, _, g) {
                if (++c >= 4096 || ++l >= 40) return c;
                var v, p, m = r[0],
                    w = r[1],
                    x = r[6],
                    b = r[7],
                    C = y.getSignedDistance,
                    S = C(m, w, x, b, r[2], r[3]),
                    P = C(m, w, x, b, r[4], r[5]),
                    I = S * P > 0 ? 3 / 4 : 4 / 9,
                    M = I * Math.min(0, S, P),
                    T = I * Math.max(0, S, P),
                    O = C(m, w, x, b, i[0], i[1]),
                    k = C(m, w, x, b, i[2], i[3]),
                    A = C(m, w, x, b, i[4], i[5]),
                    L = C(m, w, x, b, i[6], i[7]),
                    N = function(t, e, n, i) {
                        var r, s = [0, t],
                            a = [1 / 3, e],
                            o = [2 / 3, n],
                            h = [1, i],
                            u = e - (2 * t + i) / 3,
                            l = n - (t + 2 * i) / 3;
                        if (u * l < 0) r = [
                            [s, a, h],
                            [s, o, h]
                        ];
                        else {
                            var c = u / l;
                            r = [c >= 2 ? [s, a, h] : c <= .5 ? [s, o, h] : [s, a, o, h],
                                [s, h]
                            ]
                        }
                        return (u || l) < 0 ? r.reverse() : r
                    }(O, k, A, L),
                    B = N[0],
                    E = N[1];
                if (0 === S && 0 === P && 0 === O && 0 === k && 0 === A && 0 === L || null == (v = n(B, E, M, T)) || null == (p = n(B.reverse(), E.reverse(), M, T))) return c;
                var j = f + (d - f) * v,
                    D = f + (d - f) * p;
                if (Math.max(g - _, D - j) < 1e-9) {
                    var F = (j + D) / 2,
                        R = (_ + g) / 2;
                    t(o, h, u ? a : s, u ? R : F, u ? s : a, u ? F : R)
                } else {
                    i = z.getPart(i, v, p);
                    var q = g - _;
                    if (p - v > .8)
                        if (D - j > q) {
                            F = (j + D) / 2;
                            c = e(r, (V = z.subdivide(i, .5))[0], a, s, o, h, !u, l, c, _, g, j, F), c = e(r, V[1], a, s, o, h, !u, l, c, _, g, F, D)
                        } else {
                            var V;
                            R = (_ + g) / 2;
                            c = e((V = z.subdivide(r, .5))[0], i, a, s, o, h, !u, l, c, _, R, j, D), c = e(V[1], i, a, s, o, h, !u, l, c, R, g, j, D)
                        }
                    else c = 0 === q || q >= 1e-9 ? e(r, i, a, s, o, h, !u, l, c, _, g, j, D) : e(i, r, s, a, o, h, u, l, c, j, D, _, g)
                }
                return c
            }

            function n(t, e, n, r) {
                return t[0][1] < n ? i(t, !0, n) : e[0][1] > r ? i(e, !1, r) : t[0][0]
            }

            function i(t, e, n) {
                for (var i = t[0][0], r = t[0][1], s = 1, a = t.length; s < a; s++) {
                    var o = t[s][0],
                        h = t[s][1];
                    if (e ? h >= n : h <= n) return h === n ? o : i + (n - r) * (o - i) / (h - r);
                    i = o, r = h
                }
                return null
            }

            function r(t, e, n, i, r) {
                var s = l.isZero;
                if (s(i) && s(r)) {
                    var a = z.getTimeOf(t, new f(e, n));
                    return null === a ? [] : [a]
                }
                for (var o = Math.atan2(-r, i), h = Math.sin(o), u = Math.cos(o), c = [], d = [], _ = 0; _ < 8; _ += 2) {
                    var g = t[_] - e,
                        v = t[_ + 1] - n;
                    c.push(g * u - v * h, g * h + v * u)
                }
                return z.solveCubic(c, 1, 0, d, 0, 1), d
            }

            function s(e, n, i, s, a, o, h) {
                for (var u = n[0], l = n[1], c = r(e, u, l, n[6] - u, n[7] - l), f = 0, d = c.length; f < d; f++) {
                    var _ = c[f],
                        g = z.getPoint(e, _),
                        v = z.getTimeOf(n, g);
                    null !== v && t(a, o, h ? s : i, h ? v : _, h ? i : s, h ? _ : v)
                }
            }

            function a(e, n, i, r, s, a) {
                var o = y.intersect(e[0], e[1], e[6], e[7], n[0], n[1], n[6], n[7]);
                o && t(s, a, i, z.getTimeOf(e, o), r, z.getTimeOf(n, o))
            }

            function o(n, i, r, o, h, u) {
                var l = 1e-12,
                    d = Math.min,
                    _ = Math.max;
                if (_(n[0], n[2], n[4], n[6]) + l > d(i[0], i[2], i[4], i[6]) && d(n[0], n[2], n[4], n[6]) - l < _(i[0], i[2], i[4], i[6]) && _(n[1], n[3], n[5], n[7]) + l > d(i[1], i[3], i[5], i[7]) && d(n[1], n[3], n[5], n[7]) - l < _(i[1], i[3], i[5], i[7])) {
                    var g = c(n, i);
                    if (g)
                        for (var v = 0; v < 2; v++) {
                            var p = g[v];
                            t(h, u, r, p[0], o, p[1], !0)
                        } else {
                            var m = z.isStraight(n),
                                y = z.isStraight(i),
                                w = m && y,
                                x = m && !y,
                                b = h.length;
                            if ((w ? a : m || y ? s : e)(x ? i : n, x ? n : i, x ? o : r, x ? r : o, h, u, x, 0, 0, 0, 1, 0, 1), !w || h.length === b)
                                for (v = 0; v < 4; v++) {
                                    var C = v >> 1,
                                        S = 1 & v,
                                        P = 6 * C,
                                        I = 6 * S,
                                        M = new f(n[P], n[P + 1]),
                                        T = new f(i[I], i[I + 1]);
                                    M.isClose(T, l) && t(h, u, r, C, o, S)
                                }
                        }
                }
                return h
            }

            function u(e, n, i, r) {
                var s = z.classify(e);
                if ("loop" === s.type) {
                    var a = s.roots;
                    t(i, r, n, a[0], n, a[1])
                }
                return i
            }

            function c(t, e) {
                function n(t) {
                    var e = t[6] - t[0],
                        n = t[7] - t[1];
                    return e * e + n * n
                }
                var i = Math.abs,
                    r = y.getDistance,
                    s = 1e-7,
                    a = z.isStraight(t),
                    o = z.isStraight(e),
                    h = a && o,
                    u = n(t) < n(e),
                    l = u ? e : t,
                    c = u ? t : e,
                    d = l[0],
                    _ = l[1],
                    g = l[6] - d,
                    v = l[7] - _;
                if (r(d, _, g, v, c[0], c[1], !0) < s && r(d, _, g, v, c[6], c[7], !0) < s) !h && r(d, _, g, v, l[2], l[3], !0) < s && r(d, _, g, v, l[4], l[5], !0) < s && r(d, _, g, v, c[2], c[3], !0) < s && r(d, _, g, v, c[4], c[5], !0) < s && (a = o = h = !0);
                else if (h) return null;
                if (a ^ o) return null;
                for (var p = [t, e], m = [], w = 0; w < 4 && m.length < 2; w++) {
                    var x = 1 & w,
                        b = 1 ^ x,
                        C = w >> 1,
                        S = z.getTimeOf(p[x], new f(p[b][C ? 6 : 0], p[b][C ? 7 : 1]));
                    if (null != S) {
                        var P = x ? [C, S] : [S, C];
                        (!m.length || i(P[0] - m[0][0]) > 1e-8 && i(P[1] - m[0][1]) > 1e-8) && m.push(P)
                    }
                    if (w > 2 && !m.length) break
                }
                if (2 !== m.length) m = null;
                else if (!h) {
                    var I = z.getPart(t, m[0][0], m[1][0]),
                        M = z.getPart(e, m[0][1], m[1][1]);
                    (i(M[2] - I[2]) > s || i(M[3] - I[3]) > s || i(M[4] - I[4]) > s || i(M[5] - I[5]) > s) && (m = null)
                }
                return m
            }
            return {
                getIntersections: function(t) {
                    var e = this.getValues(),
                        n = t && t !== this && t.getValues();
                    return n ? o(e, n, this, t, []) : u(e, this, [])
                },
                statics: {
                    getOverlaps: c,
                    getIntersections: function(t, e, n, i, r, s) {
                        var a = !e;
                        a && (e = t);
                        for (var l = t.length, c = e.length, f = new Array(l), d = a ? f : new Array(c), _ = [], g = 0; g < l; g++) f[g] = t[g].getValues(i);
                        if (!a)
                            for (g = 0; g < c; g++) d[g] = e[g].getValues(r);
                        for (var v = h.findCurveBoundsCollisions(f, d, 1e-7), p = 0; p < l; p++) {
                            var m = t[p],
                                y = f[p];
                            a && u(y, m, _, n);
                            var w = v[p];
                            if (w)
                                for (var x = 0; x < w.length; x++) {
                                    if (s && _.length) return _;
                                    var b = w[x];
                                    if (!a || b > p) {
                                        var C = e[b];
                                        o(y, d[b], m, C, _, n)
                                    }
                                }
                        }
                        return _
                    },
                    getCurveLineIntersections: r,
                    getTimesWithTangent: function(t, e) {
                        var n = t[0],
                            i = t[1],
                            r = t[2],
                            s = t[3],
                            a = t[4],
                            o = t[5],
                            h = t[6],
                            u = t[7],
                            c = e.normalize(),
                            f = c.x,
                            d = c.y,
                            _ = 3 * h - 9 * a + 9 * r - 3 * n,
                            g = 3 * u - 9 * o + 9 * s - 3 * i,
                            v = 6 * a - 12 * r + 6 * n,
                            p = 6 * o - 12 * s + 6 * i,
                            m = 3 * r - 3 * n,
                            y = 3 * s - 3 * i,
                            w = 2 * _ * d - 2 * g * f,
                            x = [];
                        if (Math.abs(w) < l.CURVETIME_EPSILON) {
                            if (0 != (w = _ * p - g * v)) {
                                var b = -(_ * y - g * m) / w;
                                b >= 0 && b <= 1 && x.push(b)
                            }
                        } else {
                            var C = (v * v - 4 * _ * m) * d * d + (-2 * v * p + 4 * g * m + 4 * _ * y) * f * d + (p * p - 4 * g * y) * f * f,
                                S = v * d - p * f;
                            if (C >= 0 && 0 != w) {
                                var P = Math.sqrt(C),
                                    I = -(S + P) / w,
                                    M = (-S + P) / w;
                                I >= 0 && I <= 1 && x.push(I), M >= 0 && M <= 1 && x.push(M)
                            }
                        }
                        return x
                    }
                }
            }
        }),
        A = r.extend({
            _class: "CurveLocation",
            initialize: function(t, e, n, i, r) {
                if (e >= .99999999) {
                    var s = t.getNext();
                    s && (e = 0, t = s)
                }
                this._setCurve(t), this._time = e, this._point = n || t.getPointAtTime(e), this._overlap = i, this._distance = r, this._intersection = this._next = this._previous = null
            },
            _setPath: function(t) {
                this._path = t, this._version = t ? t._version : 0
            },
            _setCurve: function(t) {
                this._setPath(t._path), this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2
            },
            _setSegment: function(t) {
                var e = t.getCurve();
                e ? this._setCurve(e) : (this._setPath(t._path), this._segment1 = t, this._segment2 = null), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone()
            },
            getSegment: function() {
                var t = this._segment;
                if (!t) {
                    var e = this.getCurve(),
                        n = this.getTime();
                    0 === n ? t = e._segment1 : 1 === n ? t = e._segment2 : null != n && (t = e.getPartLength(0, n) < e.getPartLength(n, 1) ? e._segment1 : e._segment2), this._segment = t
                }
                return t
            },
            getCurve: function() {
                var t = this._path,
                    e = this;

                function n(t) {
                    var n = t && t.getCurve();
                    if (n && null != (e._time = n.getTimeOf(e._point))) return e._setCurve(n), n
                }
                return t && t._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null), this._curve || n(this._segment) || n(this._segment1) || n(this._segment2.getPrevious())
            },
            getPath: function() {
                var t = this.getCurve();
                return t && t._path
            },
            getIndex: function() {
                var t = this.getCurve();
                return t && t.getIndex()
            },
            getTime: function() {
                var t = this.getCurve(),
                    e = this._time;
                return t && null == e ? this._time = t.getTimeOf(this._point) : e
            },
            getParameter: "#getTime",
            getPoint: function() {
                return this._point
            },
            getOffset: function() {
                var t = this._offset;
                if (null == t) {
                    t = 0;
                    var e = this.getPath(),
                        n = this.getIndex();
                    if (e && null != n)
                        for (var i = e.getCurves(), r = 0; r < n; r++) t += i[r].getLength();
                    this._offset = t += this.getCurveOffset()
                }
                return t
            },
            getCurveOffset: function() {
                var t = this._curveOffset;
                if (null == t) {
                    var e = this.getCurve(),
                        n = this.getTime();
                    this._curveOffset = t = null != n && e && e.getPartLength(0, n)
                }
                return t
            },
            getIntersection: function() {
                return this._intersection
            },
            getDistance: function() {
                return this._distance
            },
            divide: function() {
                var t = this.getCurve(),
                    e = t && t.divideAtTime(this.getTime());
                return e && this._setSegment(e._segment1), e
            },
            split: function() {
                var t = this.getCurve(),
                    e = t._path,
                    n = t && t.splitAtTime(this.getTime());
                return n && this._setSegment(e.getLastSegment()), n
            },
            equals: function(t, e) {
                var n = this === t;
                if (!n && t instanceof A) {
                    var i = this.getCurve(),
                        r = t.getCurve(),
                        s = i._path;
                    if (s === r._path) {
                        var a = Math.abs,
                            o = a(this.getOffset() - t.getOffset()),
                            h = !e && this._intersection,
                            u = !e && t._intersection;
                        n = (o < 1e-7 || s && a(s.getLength() - o) < 1e-7) && (!h && !u || h && u && h.equals(u, !0))
                    }
                }
                return n
            },
            toString: function() {
                var t = [],
                    e = this.getPoint(),
                    n = u.instance;
                e && t.push("point: " + e);
                var i = this.getIndex();
                null != i && t.push("index: " + i);
                var r = this.getTime();
                return null != r && t.push("time: " + n.number(r)), null != this._distance && t.push("distance: " + n.number(this._distance)), "{ " + t.join(", ") + " }"
            },
            isTouching: function() {
                var t = this._intersection;
                if (t && this.getTangent().isCollinear(t.getTangent())) {
                    var e = this.getCurve(),
                        n = t.getCurve();
                    return !(e.isStraight() && n.isStraight() && e.getLine().intersect(n.getLine()))
                }
                return !1
            },
            isCrossing: function() {
                var t = this._intersection;
                if (!t) return !1;
                var e = this.getTime(),
                    n = t.getTime(),
                    i = 1e-8,
                    r = 1 - i,
                    s = e >= i && e <= r,
                    a = n >= i && n <= r;
                if (s && a) return !this.isTouching();
                var o = this.getCurve(),
                    h = o && e < i ? o.getPrevious() : o,
                    u = t.getCurve(),
                    l = u && n < i ? u.getPrevious() : u;
                if (e > r && (o = o.getNext()), n > r && (u = u.getNext()), !(h && o && l && u)) return !1;
                var c = [];

                function f(t, e) {
                    var n = t.getValues(),
                        i = z.classify(n).roots || z.getPeaks(n),
                        r = i.length,
                        s = z.getLength(n, e && r ? i[r - 1] : 0, !e && r ? i[0] : 1);
                    c.push(r ? s : s / 32)
                }

                function d(t, e, n) {
                    return e < n ? t > e && t < n : t > e || t < n
                }
                s || (f(h, !0), f(o, !1)), a || (f(l, !0), f(u, !1));
                var _ = this.getPoint(),
                    g = Math.min.apply(Math, c),
                    v = s ? o.getTangentAtTime(e) : o.getPointAt(g).subtract(_),
                    p = s ? v.negate() : h.getPointAt(-g).subtract(_),
                    m = a ? u.getTangentAtTime(n) : u.getPointAt(g).subtract(_),
                    y = a ? m.negate() : l.getPointAt(-g).subtract(_),
                    w = p.getAngle(),
                    x = v.getAngle(),
                    b = y.getAngle(),
                    C = m.getAngle();
                return !!(s ? d(w, b, C) ^ d(x, b, C) && d(w, C, b) ^ d(x, C, b) : d(b, w, x) ^ d(C, w, x) && d(b, x, w) ^ d(C, x, w))
            },
            hasOverlap: function() {
                return !!this._overlap
            }
        }, r.each(z._evaluateMethods, (function(t) {
            var e = t + "At";
            this[t] = function() {
                var t = this.getCurve(),
                    n = this.getTime();
                return null != n && t && t[e](n, !0)
            }
        }), {
            preserve: !0
        }), new function() {
            function t(t, e, n) {
                var i = t.length,
                    r = 0,
                    s = i - 1;

                function a(n, r) {
                    for (var s = n + r; s >= -1 && s <= i; s += r) {
                        var a = t[(s % i + i) % i];
                        if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break;
                        if (e.equals(a)) return a
                    }
                    return null
                }
                for (; r <= s;) {
                    var o, h = r + s >>> 1,
                        u = t[h];
                    if (n && (o = e.equals(u) ? u : a(h, -1) || a(h, 1))) return e._overlap && (o._overlap = o._intersection._overlap = !0), o;
                    var l = e.getPath(),
                        c = u.getPath();
                    (l !== c ? l._id - c._id : e.getIndex() + e.getTime() - (u.getIndex() + u.getTime())) < 0 ? s = h - 1 : r = h + 1
                }
                return t.splice(r, 0, e), e
            }
            return {
                statics: {
                    insert: t,
                    expand: function(e) {
                        for (var n = e.slice(), i = e.length - 1; i >= 0; i--) t(n, e[i]._intersection, !1);
                        return n
                    }
                }
            }
        }),
        L = x.extend({
            _class: "PathItem",
            _selectBounds: !1,
            _canScaleStroke: !0,
            beans: !0,
            initialize: function() {},
            statics: {
                create: function(t) {
                    var e, n, i;
                    if (r.isPlainObject(t) ? (n = t.segments, e = t.pathData) : Array.isArray(t) ? n = t : "string" == typeof t && (e = t), n) {
                        var s = n[0];
                        i = s && Array.isArray(s[0])
                    } else e && (i = (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
                    return new(i ? B : N)(t)
                }
            },
            _asPathItem: function() {
                return this
            },
            isClockwise: function() {
                return this.getArea() >= 0
            },
            setClockwise: function(t) {
                this.isClockwise() != (t = !!t) && this.reverse()
            },
            setPathData: function(t) {
                var e, n, i, r = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                    s = !1,
                    a = new f,
                    o = new f;

                function h(t, n) {
                    var i = +e[t];
                    return s && (i += a[n]), i
                }

                function u(t) {
                    return new f(h(t, "x"), h(t + 1, "y"))
                }
                this.clear();
                for (var l = 0, c = r && r.length; l < c; l++) {
                    var d = r[l],
                        g = d[0],
                        v = g.toLowerCase(),
                        p = (e = d.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g)) && e.length;
                    switch (s = g === v, "z" !== n || /[mz]/.test(v) || this.moveTo(a), v) {
                        case "m":
                        case "l":
                            for (var m = "m" === v, y = 0; y < p; y += 2) this[m ? "moveTo" : "lineTo"](a = u(y)), m && (o = a, m = !1);
                            i = a;
                            break;
                        case "h":
                        case "v":
                            var w = "h" === v ? "x" : "y";
                            a = a.clone();
                            for (y = 0; y < p; y++) a[w] = h(y, w), this.lineTo(a);
                            i = a;
                            break;
                        case "c":
                            for (y = 0; y < p; y += 6) this.cubicCurveTo(u(y), i = u(y + 2), a = u(y + 4));
                            break;
                        case "s":
                            for (y = 0; y < p; y += 4) this.cubicCurveTo(/[cs]/.test(n) ? a.multiply(2).subtract(i) : a, i = u(y), a = u(y + 2)), n = v;
                            break;
                        case "q":
                            for (y = 0; y < p; y += 4) this.quadraticCurveTo(i = u(y), a = u(y + 2));
                            break;
                        case "t":
                            for (y = 0; y < p; y += 2) this.quadraticCurveTo(i = /[qt]/.test(n) ? a.multiply(2).subtract(i) : a, a = u(y)), n = v;
                            break;
                        case "a":
                            for (y = 0; y < p; y += 7) this.arcTo(a = u(y + 5), new _(+e[y], +e[y + 1]), +e[y + 2], +e[y + 4], +e[y + 3]);
                            break;
                        case "z":
                            this.closePath(1e-12), a = o
                    }
                    n = v
                }
            },
            _canComposite: function() {
                return !(this.hasFill() && this.hasStroke())
            },
            _contains: function(t) {
                var e = t.isInside(this.getBounds({
                    internal: !0,
                    handle: !0
                })) ? this._getWinding(t) : {};
                return e.onPath || !!("evenodd" === this.getFillRule() ? 1 & e.windingL || 1 & e.windingR : e.winding)
            },
            getIntersections: function(t, e, n, i) {
                var r = this === t || !t,
                    s = this._matrix._orNullIfIdentity(),
                    a = r ? s : (n || t._matrix)._orNullIfIdentity();
                return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12) ? z.getIntersections(this.getCurves(), !r && t.getCurves(), e, s, a, i) : []
            },
            getCrossings: function(t) {
                return this.getIntersections(t, (function(t) {
                    return t.isCrossing()
                }))
            },
            getNearestLocation: function() {
                for (var t = f.read(arguments), e = this.getCurves(), n = Infinity, i = null, r = 0, s = e.length; r < s; r++) {
                    var a = e[r].getNearestLocation(t);
                    a._distance < n && (n = a._distance, i = a)
                }
                return i
            },
            getNearestPoint: function() {
                var t = this.getNearestLocation.apply(this, arguments);
                return t ? t.getPoint() : t
            },
            interpolate: function(t, e, n) {
                var i = !this._children,
                    r = i ? "_segments" : "_children",
                    s = t[r],
                    a = e[r],
                    o = this[r];
                if (!s || !a || s.length !== a.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
                var h = o.length,
                    u = a.length;
                if (h < u)
                    for (var l = i ? O : N, c = h; c < u; c++) this.add(new l);
                else h > u && this[i ? "removeSegments" : "removeChildren"](u, h);
                for (c = 0; c < u; c++) o[c].interpolate(s[c], a[c], n);
                i && (this.setClosed(t._closed), this._changed(9))
            },
            compare: function(t) {
                var e = !1;
                if (t) {
                    var n = this._children || [this],
                        i = t._children ? t._children.slice() : [t],
                        r = n.length,
                        s = i.length,
                        a = [],
                        o = 0;
                    e = !0;
                    for (var u = h.findItemBoundsCollisions(n, i, l.GEOMETRIC_EPSILON), c = r - 1; c >= 0 && e; c--) {
                        var f = n[c];
                        e = !1;
                        var d = u[c];
                        if (d)
                            for (var _ = d.length - 1; _ >= 0 && !e; _--) f.compare(i[d[_]]) && (a[d[_]] || (a[d[_]] = !0, o++), e = !0)
                    }
                    e = e && o === s
                }
                return e
            }
        }),
        N = L.extend({
            _class: "Path",
            _serializeFields: {
                segments: [],
                closed: !1
            },
            initialize: function(t) {
                this._closed = !1, this._segments = [], this._version = 0;
                var n = arguments,
                    i = Array.isArray(t) ? "object" == typeof t[0] ? t : n : !t || t.size !== e || t.x === e && t.point === e ? null : n;
                i && i.length > 0 ? this.setSegments(i) : (this._curves = e, this._segmentSelection = 0, i || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!i && t)
            },
            _equals: function(t) {
                return this._closed === t._closed && r.equals(this._segments, t._segments)
            },
            copyContent: function(t) {
                this.setSegments(t._segments), this._closed = t._closed
            },
            _changed: function t(n) {
                if (t.base.call(this, n), 8 & n) {
                    if (this._length = this._area = e, 32 & n) this._version++;
                    else if (this._curves)
                        for (var i = 0, r = this._curves.length; i < r; i++) this._curves[i]._changed()
                } else 64 & n && (this._bounds = e)
            },
            getStyle: function() {
                var t = this._parent;
                return (t instanceof B ? t : this)._style
            },
            getSegments: function() {
                return this._segments
            },
            setSegments: function(t) {
                var n = this.isFullySelected(),
                    i = t && t.length;
                if (this._segments.length = 0, this._segmentSelection = 0, this._curves = e, i) {
                    var r = t[i - 1];
                    "boolean" == typeof r && (this.setClosed(r), i--), this._add(O.readList(t, 0, {}, i))
                }
                n && this.setFullySelected(!0)
            },
            getFirstSegment: function() {
                return this._segments[0]
            },
            getLastSegment: function() {
                return this._segments[this._segments.length - 1]
            },
            getCurves: function() {
                var t = this._curves,
                    e = this._segments;
                if (!t) {
                    var n = this._countCurves();
                    t = this._curves = new Array(n);
                    for (var i = 0; i < n; i++) t[i] = new z(this, e[i], e[i + 1] || e[0])
                }
                return t
            },
            getFirstCurve: function() {
                return this.getCurves()[0]
            },
            getLastCurve: function() {
                var t = this.getCurves();
                return t[t.length - 1]
            },
            isClosed: function() {
                return this._closed
            },
            setClosed: function(t) {
                if (this._closed != (t = !!t)) {
                    if (this._closed = t, this._curves) {
                        var e = this._curves.length = this._countCurves();
                        t && (this._curves[e - 1] = new z(this, this._segments[e - 1], this._segments[0]))
                    }
                    this._changed(41)
                }
            }
        }, {
            beans: !0,
            getPathData: function(t, e) {
                var n, i, r, s, a, o, h, l, c = this._segments,
                    f = c.length,
                    d = new u(e),
                    _ = new Array(6),
                    g = !0,
                    v = [];

                function p(e, u) {
                    if (e._transformCoordinates(t, _), n = _[0], i = _[1], g) v.push("M" + d.pair(n, i)), g = !1;
                    else if (a = _[2], o = _[3], a === n && o === i && h === r && l === s) {
                        if (!u) {
                            var c = n - r,
                                f = i - s;
                            v.push(0 === c ? "v" + d.number(f) : 0 === f ? "h" + d.number(c) : "l" + d.pair(c, f))
                        }
                    } else v.push("c" + d.pair(h - r, l - s) + " " + d.pair(a - r, o - s) + " " + d.pair(n - r, i - s));
                    r = n, s = i, h = _[4], l = _[5]
                }
                if (!f) return "";
                for (var m = 0; m < f; m++) p(c[m]);
                return this._closed && f > 0 && (p(c[0], !0), v.push("z")), v.join("")
            },
            isEmpty: function() {
                return !this._segments.length
            },
            _transformContent: function(t) {
                for (var e = this._segments, n = new Array(6), i = 0, r = e.length; i < r; i++) e[i]._transformCoordinates(t, n, !0);
                return !0
            },
            _add: function(t, e) {
                for (var n = this._segments, i = this._curves, s = t.length, a = null == e, o = (e = a ? n.length : e, 0); o < s; o++) {
                    var h = t[o];
                    h._path && (h = t[o] = h.clone()), h._path = this, h._index = e + o, h._selection && this._updateSelection(h, 0, h._selection)
                }
                if (a) r.push(n, t);
                else {
                    n.splice.apply(n, [e, 0].concat(t));
                    o = e + s;
                    for (var u = n.length; o < u; o++) n[o]._index = o
                }
                if (i) {
                    var l = this._countCurves(),
                        c = e > 0 && e + s - 1 === l ? e - 1 : e,
                        f = c,
                        d = Math.min(c + s, l);
                    t._curves && (i.splice.apply(i, [c, 0].concat(t._curves)), f += t._curves.length);
                    for (o = f; o < d; o++) i.splice(o, 0, new z(this, null, null));
                    this._adjustCurves(c, d)
                }
                return this._changed(41), t
            },
            _adjustCurves: function(t, e) {
                for (var n, i = this._segments, r = this._curves, s = t; s < e; s++)(n = r[s])._path = this, n._segment1 = i[s], n._segment2 = i[s + 1] || i[0], n._changed();
                (n = r[this._closed && !t ? i.length - 1 : t - 1]) && (n._segment2 = i[t] || i[0], n._changed()), (n = r[e]) && (n._segment1 = i[e], n._changed())
            },
            _countCurves: function() {
                var t = this._segments.length;
                return !this._closed && t > 0 ? t - 1 : t
            },
            add: function(t) {
                var e = arguments;
                return e.length > 1 && "number" != typeof t ? this._add(O.readList(e)) : this._add([O.read(e)])[0]
            },
            insert: function(t, e) {
                var n = arguments;
                return n.length > 2 && "number" != typeof e ? this._add(O.readList(n, 1), t) : this._add([O.read(n, 1)], t)[0]
            },
            addSegment: function() {
                return this._add([O.read(arguments)])[0]
            },
            insertSegment: function(t) {
                return this._add([O.read(arguments, 1)], t)[0]
            },
            addSegments: function(t) {
                return this._add(O.readList(t))
            },
            insertSegments: function(t, e) {
                return this._add(O.readList(e), t)
            },
            removeSegment: function(t) {
                return this.removeSegments(t, t + 1)[0] || null
            },
            removeSegments: function(t, e, n) {
                t = t || 0, e = r.pick(e, this._segments.length);
                var i = this._segments,
                    s = this._curves,
                    a = i.length,
                    o = i.splice(t, e - t),
                    h = o.length;
                if (!h) return o;
                for (var u = 0; u < h; u++) {
                    var l = o[u];
                    l._selection && this._updateSelection(l, l._selection, 0), l._index = l._path = null
                }
                u = t;
                for (var c = i.length; u < c; u++) i[u]._index = u;
                if (s) {
                    var f = t > 0 && e === a + (this._closed ? 1 : 0) ? t - 1 : t;
                    for (u = (s = s.splice(f, h)).length - 1; u >= 0; u--) s[u]._path = null;
                    n && (o._curves = s.slice(1)), this._adjustCurves(f, f)
                }
                return this._changed(41), o
            },
            clear: "#removeSegments",
            hasHandles: function() {
                for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                    if (t[e].hasHandles()) return !0;
                return !1
            },
            clearHandles: function() {
                for (var t = this._segments, e = 0, n = t.length; e < n; e++) t[e].clearHandles()
            },
            getLength: function() {
                if (null == this._length) {
                    for (var t = this.getCurves(), e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
                    this._length = e
                }
                return this._length
            },
            getArea: function() {
                var t = this._area;
                if (null == t) {
                    var e = this._segments,
                        n = this._closed;
                    t = 0;
                    for (var i = 0, r = e.length; i < r; i++) {
                        var s = i + 1 === r;
                        t += z.getArea(z.getValues(e[i], e[s ? 0 : i + 1], null, s && !n))
                    }
                    this._area = t
                }
                return t
            },
            isFullySelected: function() {
                var t = this._segments.length;
                return this.isSelected() && t > 0 && this._segmentSelection === 7 * t
            },
            setFullySelected: function(t) {
                t && this._selectSegments(!0), this.setSelected(t)
            },
            setSelection: function t(e) {
                1 & e || this._selectSegments(!1), t.base.call(this, e)
            },
            _selectSegments: function(t) {
                var e = this._segments,
                    n = e.length,
                    i = t ? 7 : 0;
                this._segmentSelection = i * n;
                for (var r = 0; r < n; r++) e[r]._selection = i
            },
            _updateSelection: function(t, e, n) {
                t._selection = n, (this._segmentSelection += n - e) > 0 && this.setSelected(!0)
            },
            divideAt: function(t) {
                var e, n = this.getLocationAt(t);
                return n && (e = n.getCurve().divideAt(n.getCurveOffset())) ? e._segment1 : null
            },
            splitAt: function(t) {
                var e = this.getLocationAt(t),
                    n = e && e.index,
                    i = e && e.time;
                i > .99999999 && (n++, i = 0);
                var r = this.getCurves();
                if (n >= 0 && n < r.length) {
                    i >= 1e-8 && r[n++].divideAtTime(i);
                    var s, a = this.removeSegments(n, this._segments.length, !0);
                    return this._closed ? (this.setClosed(!1), s = this) : ((s = new N(x.NO_INSERT)).insertAbove(this), s.copyAttributes(this)), s._add(a, 0), this.addSegment(a[0]), s
                }
                return null
            },
            split: function(t, n) {
                var i, r = n === e ? t : (i = this.getCurves()[t]) && i.getLocationAtTime(n);
                return null != r ? this.splitAt(r) : null
            },
            join: function(t, e) {
                var n = e || 0;
                if (t && t !== this) {
                    var i = t._segments,
                        r = this.getLastSegment(),
                        s = t.getLastSegment();
                    if (!s) return this;
                    r && r._point.isClose(s._point, n) && t.reverse();
                    var a = t.getFirstSegment();
                    if (r && r._point.isClose(a._point, n)) r.setHandleOut(a._handleOut), this._add(i.slice(1));
                    else {
                        var o = this.getFirstSegment();
                        o && o._point.isClose(a._point, n) && t.reverse(), s = t.getLastSegment(), o && o._point.isClose(s._point, n) ? (o.setHandleIn(s._handleIn), this._add(i.slice(0, i.length - 1), 0)) : this._add(i.slice())
                    }
                    t._closed && this._add([i[0]]), t.remove()
                }
                var h = this.getFirstSegment(),
                    u = this.getLastSegment();
                return h !== u && h._point.isClose(u._point, n) && (h.setHandleIn(u._handleIn), u.remove(), this.setClosed(!0)), this
            },
            reduce: function(t) {
                for (var e = this.getCurves(), n = t && t.simplify, i = n ? 1e-7 : 0, r = e.length - 1; r >= 0; r--) {
                    var s = e[r];
                    !s.hasHandles() && (!s.hasLength(i) || n && s.isCollinear(s.getNext())) && s.remove()
                }
                return this
            },
            reverse: function() {
                this._segments.reverse();
                for (var t = 0, e = this._segments.length; t < e; t++) {
                    var n = this._segments[t],
                        i = n._handleIn;
                    n._handleIn = n._handleOut, n._handleOut = i, n._index = t
                }
                this._curves = null, this._changed(9)
            },
            flatten: function(t) {
                for (var e = new E(this, t || .25, 256, !0).parts, n = e.length, i = [], r = 0; r < n; r++) i.push(new O(e[r].curve.slice(0, 2)));
                !this._closed && n > 0 && i.push(new O(e[n - 1].curve.slice(6))), this.setSegments(i)
            },
            simplify: function(t) {
                var e = new j(this).fit(t || 2.5);
                return e && this.setSegments(e), !!e
            },
            smooth: function(t) {
                var n = this,
                    i = t || {},
                    r = i.type || "asymmetric",
                    s = this._segments,
                    a = s.length,
                    o = this._closed;

                function h(t, e) {
                    var i = t && t.index;
                    if (null != i) {
                        var r = t.path;
                        if (r && r !== n) throw new Error(t._class + " " + i + " of " + r + " is not part of " + n);
                        e && t instanceof z && i++
                    } else i = "number" == typeof t ? t : e;
                    return Math.min(i < 0 && o ? i % a : i < 0 ? i + a : i, a - 1)
                }
                var u = o && i.from === e && i.to === e,
                    l = h(i.from, 0),
                    c = h(i.to, a - 1);
                if (l > c)
                    if (o) l -= a;
                    else {
                        var f = l;
                        l = c, c = f
                    } if (/^(?:asymmetric|continuous)$/.test(r)) {
                    var d = "asymmetric" === r,
                        _ = Math.min,
                        g = c - l + 1,
                        v = g - 1,
                        p = u ? _(g, 4) : 1,
                        m = p,
                        y = p,
                        w = [];
                    if (o || (m = _(1, l), y = _(1, a - c - 1)), (v += m + y) <= 1) return;
                    for (var x = 0, b = l - m; x <= v; x++, b++) w[x] = s[(b < 0 ? b + a : b) % a]._point;
                    var C = w[0]._x + 2 * w[1]._x,
                        S = w[0]._y + 2 * w[1]._y,
                        P = 2,
                        I = v - 1,
                        M = [C],
                        T = [S],
                        O = [P],
                        k = [],
                        A = [];
                    for (x = 1; x < v; x++) {
                        var L = x < I,
                            N = L ? 4 : d ? 2 : 7,
                            B = L ? 4 : d ? 3 : 8,
                            E = L ? 2 : d ? 0 : 1,
                            j = (L || d ? 1 : 2) / P;
                        P = O[x] = N - j, C = M[x] = B * w[x]._x + E * w[x + 1]._x - j * C, S = T[x] = B * w[x]._y + E * w[x + 1]._y - j * S
                    }
                    k[I] = M[I] / O[I], A[I] = T[I] / O[I];
                    for (x = v - 2; x >= 0; x--) k[x] = (M[x] - k[x + 1]) / O[x], A[x] = (T[x] - A[x + 1]) / O[x];
                    k[v] = (3 * w[v]._x - k[I]) / 2, A[v] = (3 * w[v]._y - A[I]) / 2;
                    x = m;
                    var D = v - y;
                    for (b = l; x <= D; x++, b++) {
                        var F = s[b < 0 ? b + a : b],
                            R = F._point,
                            q = k[x] - R._x,
                            V = A[x] - R._y;
                        (u || x < D) && F.setHandleOut(q, V), (u || x > m) && F.setHandleIn(-q, -V)
                    }
                } else
                    for (x = l; x <= c; x++) s[x < 0 ? x + a : x].smooth(i, !u && x === l, !u && x === c)
            },
            toShape: function(t) {
                if (!this._closed) return null;
                var n, i, r, s, a, o, h, u = this._segments;

                function c(t, e) {
                    var n = u[t],
                        i = n.getNext(),
                        r = u[e],
                        s = r.getNext();
                    return n._handleOut.isZero() && i._handleIn.isZero() && r._handleOut.isZero() && s._handleIn.isZero() && i._point.subtract(n._point).isCollinear(s._point.subtract(r._point))
                }

                function f(t) {
                    var e = u[t],
                        n = e.getNext(),
                        i = e._handleOut,
                        r = n._handleIn,
                        s = .5522847498307936;
                    if (i.isOrthogonal(r)) {
                        var a = e._point,
                            o = n._point,
                            h = new y(a, i, !0).intersect(new y(o, r, !0), !0);
                        return h && l.isZero(i.getLength() / h.subtract(a).getLength() - s) && l.isZero(r.getLength() / h.subtract(o).getLength() - s)
                    }
                    return !1
                }

                function d(t, e) {
                    return u[t]._point.getDistance(u[e]._point)
                }
                if (!this.hasHandles() && 4 === u.length && c(0, 2) && c(1, 3) && (a = u[1], o = a.getPrevious(), h = a.getNext(), o._handleOut.isZero() && a._handleIn.isZero() && a._handleOut.isZero() && h._handleIn.isZero() && a._point.subtract(o._point).isOrthogonal(h._point.subtract(a._point))) ? (n = S.Rectangle, i = new _(d(0, 3), d(0, 1)), s = u[1]._point.add(u[2]._point).divide(2)) : 8 === u.length && f(0) && f(2) && f(4) && f(6) && c(1, 5) && c(3, 7) ? (n = S.Rectangle, r = (i = new _(d(1, 6), d(0, 3))).subtract(new _(d(0, 7), d(1, 2))).divide(2), s = u[3]._point.add(u[4]._point).divide(2)) : 4 === u.length && f(0) && f(1) && f(2) && f(3) && (l.isZero(d(0, 2) - d(1, 3)) ? (n = S.Circle, r = d(0, 2) / 2) : (n = S.Ellipse, r = new _(d(2, 0) / 2, d(3, 1) / 2)), s = u[1]._point), n) {
                    var g = this.getPosition(!0),
                        v = new n({
                            center: g,
                            size: i,
                            radius: r,
                            insert: !1
                        });
                    return v.copyAttributes(this, !0), v._matrix.prepend(this._matrix), v.rotate(s.subtract(g).getAngle() + 90), (t === e || t) && v.insertAbove(this), v
                }
                return null
            },
            toPath: "#clone",
            compare: function t(e) {
                if (!e || e instanceof B) return t.base.call(this, e);
                var n = this.getCurves(),
                    i = e.getCurves(),
                    r = n.length,
                    s = i.length;
                if (!r || !s) return r == s;
                for (var a, o, h = n[0].getValues(), u = [], l = 0, c = 0, f = 0; f < s; f++) {
                    var d = i[f].getValues();
                    if (u.push(d), v = z.getOverlaps(h, d)) {
                        a = !f && v[0][0] > 0 ? s - 1 : f, o = v[0][1];
                        break
                    }
                }
                var _, g = Math.abs;
                for (d = u[a]; h && d;) {
                    var v;
                    if (v = z.getOverlaps(h, d))
                        if (g(v[0][0] - c) < 1e-8) {
                            1 === (c = v[1][0]) && (h = ++l < r ? n[l].getValues() : null, c = 0);
                            var p = v[0][1];
                            if (g(p - o) < 1e-8) {
                                if (_ || (_ = [a, p]), 1 === (o = v[1][1]) && (++a >= s && (a = 0), d = u[a] || i[a].getValues(), o = 0), !h) return _[0] === a && _[1] === o;
                                continue
                            }
                        } break
                }
                return !1
            },
            _hitTestSelf: function(t, e, n, i) {
                var r, s, a, o, h, u, l = this,
                    c = this.getStyle(),
                    f = this._segments,
                    d = f.length,
                    _ = this._closed,
                    g = e._tolerancePadding,
                    v = g,
                    p = e.stroke && c.hasStroke(),
                    m = e.fill && c.hasFill(),
                    y = e.curves,
                    w = p ? c.getStrokeWidth() / 2 : m && e.tolerance > 0 || y ? 0 : null;

                function x(e, n) {
                    return t.subtract(e).divide(n).length <= 1
                }

                function b(t, n, i) {
                    if (!e.selected || n.isSelected()) {
                        var r = t._point;
                        if (n !== r && (n = n.add(r)), x(n, v)) return new T(i, l, {
                            segment: t,
                            point: n
                        })
                    }
                }

                function C(t, n) {
                    return (n || e.segments) && b(t, t._point, "segment") || !n && e.handles && (b(t, t._handleIn, "handle-in") || b(t, t._handleOut, "handle-out"))
                }

                function S(t) {
                    o.add(t)
                }

                function P(e) {
                    var n, h = _ || e._index > 0 && e._index < d - 1;
                    return "round" === (h ? r : s) ? x(e._point, v) : (o = new N({
                        internal: !0,
                        closed: !0
                    }), h ? e.isSmooth() || N._addBevelJoin(e, r, w, a, null, i, S, !0) : "square" === s && N._addSquareCap(e, s, w, null, i, S, !0), o.isEmpty() ? void 0 : o.contains(t) || (n = o.getNearestLocation(t)) && x(n.getPoint(), g))
                }
                if (null !== w && (w > 0 ? (r = c.getStrokeJoin(), s = c.getStrokeCap(), a = c.getMiterLimit(), v = v.add(N._getStrokePadding(w, i))) : r = s = "round"), !e.ends || e.segments || _) {
                    if (e.segments || e.handles)
                        for (var I = 0; I < d; I++)
                            if (u = C(f[I])) return u
                } else if (u = C(f[0], !0) || C(f[d - 1], !0)) return u;
                if (null !== w) {
                    if (h = this.getNearestLocation(t)) {
                        var M = h.getTime();
                        0 === M || 1 === M && d > 1 ? P(h.getSegment()) || (h = null) : x(h.getPoint(), v) || (h = null)
                    }
                    if (!h && "miter" === r && d > 1)
                        for (I = 0; I < d; I++) {
                            var O = f[I];
                            if (t.getDistance(O._point) <= a * w && P(O)) {
                                h = O.getLocation();
                                break
                            }
                        }
                }
                return !h && m && this._contains(t) || h && !p && !y ? new T("fill", this) : h ? new T(p ? "stroke" : "curve", this, {
                    location: h,
                    point: h.getPoint()
                }) : null
            }
        }, r.each(z._evaluateMethods, (function(t) {
            this[t + "At"] = function(e) {
                var n = this.getLocationAt(e);
                return n && n[t]()
            }
        }), {
            beans: !1,
            getLocationOf: function() {
                for (var t = f.read(arguments), e = this.getCurves(), n = 0, i = e.length; n < i; n++) {
                    var r = e[n].getLocationOf(t);
                    if (r) return r
                }
                return null
            },
            getOffsetOf: function() {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getLocationAt: function(t) {
                if ("number" == typeof t) {
                    for (var e = this.getCurves(), n = 0, i = 0, r = e.length; i < r; i++) {
                        var s = n,
                            a = e[i];
                        if ((n += a.getLength()) > t) return a.getLocationAt(t - s)
                    }
                    if (e.length > 0 && t <= this.getLength()) return new A(e[e.length - 1], 1)
                } else if (t && t.getPath && t.getPath() === this) return t;
                return null
            },
            getOffsetsWithTangent: function() {
                var t = f.read(arguments);
                if (t.isZero()) return [];
                for (var e = [], n = 0, i = this.getCurves(), r = 0, s = i.length; r < s; r++) {
                    for (var a = i[r], o = a.getTimesWithTangent(t), h = 0, u = o.length; h < u; h++) {
                        var l = n + a.getOffsetAtTime(o[h]);
                        e.indexOf(l) < 0 && e.push(l)
                    }
                    n += a.length
                }
                return e
            }
        }), new function() {
            function t(t, e, n) {
                var i, r, s, a, o, h, u, l, c = e._segments,
                    f = c.length,
                    d = new Array(6),
                    _ = !0;

                function g(e) {
                    if (n) e._transformCoordinates(n, d), i = d[0], r = d[1];
                    else {
                        var c = e._point;
                        i = c._x, r = c._y
                    }
                    if (_) t.moveTo(i, r), _ = !1;
                    else {
                        if (n) o = d[2], h = d[3];
                        else {
                            var f = e._handleIn;
                            o = i + f._x, h = r + f._y
                        }
                        o === i && h === r && u === s && l === a ? t.lineTo(i, r) : t.bezierCurveTo(u, l, o, h, i, r)
                    }
                    if (s = i, a = r, n) u = d[4], l = d[5];
                    else {
                        f = e._handleOut;
                        u = s + f._x, l = a + f._y
                    }
                }
                for (var v = 0; v < f; v++) g(c[v]);
                e._closed && f > 0 && g(c[0])
            }
            return {
                _draw: function(e, n, i, r) {
                    var s = n.dontStart,
                        a = n.dontFinish || n.clip,
                        o = this.getStyle(),
                        h = o.hasFill(),
                        u = o.hasStroke(),
                        l = o.getDashArray(),
                        c = !st.support.nativeDash && u && l && l.length;

                    function f(t) {
                        return l[(t % c + c) % c]
                    }
                    if (s || e.beginPath(), (h || u && !c || a) && (t(e, this, r), this._closed && e.closePath()), !a && (h || u) && (this._setStyles(e, n, i), h && (e.fill(o.getFillRule()), e.shadowColor = "rgba(0,0,0,0)"), u)) {
                        if (c) {
                            s || e.beginPath();
                            for (var d, _ = new E(this, .25, 32, !1, r), g = _.length, v = -o.getDashOffset(), p = 0; v > 0;) v -= f(p--) + f(p--);
                            for (; v < g;) d = v + f(p++), (v > 0 || d > 0) && _.drawPart(e, Math.max(v, 0), Math.max(d, 0)), v = d + f(p++)
                        }
                        e.stroke()
                    }
                },
                _drawSelected: function(e, n) {
                    e.beginPath(), t(e, this, n), e.stroke(),
                        function(t, e, n, i) {
                            if (!(i <= 0))
                                for (var r, s, a = i / 2, o = i - 2, h = a - 1, u = new Array(6), l = 0, c = e.length; l < c; l++) {
                                    var f = e[l],
                                        d = f._selection;
                                    if (f._transformCoordinates(n, u), r = u[0], s = u[1], 2 & d && g(2), 4 & d && g(4), t.fillRect(r - a, s - a, i, i), o > 0 && !(1 & d)) {
                                        var _ = t.fillStyle;
                                        t.fillStyle = "#ffffff", t.fillRect(r - h, s - h, o, o), t.fillStyle = _
                                    }
                                }

                            function g(e) {
                                var n = u[e],
                                    i = u[e + 1];
                                r == n && s == i || (t.beginPath(), t.moveTo(r, s), t.lineTo(n, i), t.stroke(), t.beginPath(), t.arc(n, i, a, 0, 2 * Math.PI, !0), t.fill())
                            }
                        }(e, this._segments, n, st.settings.handleSize)
                }
            }
        }, new function() {
            function t(t) {
                var e = t._segments;
                if (!e.length) throw new Error("Use a moveTo() command first");
                return e[e.length - 1]
            }
            return {
                moveTo: function() {
                    var t = this._segments;
                    1 === t.length && this.removeSegment(0), t.length || this._add([new O(f.read(arguments))])
                },
                moveBy: function() {
                    throw new Error("moveBy() is unsupported on Path items.")
                },
                lineTo: function() {
                    this._add([new O(f.read(arguments))])
                },
                cubicCurveTo: function() {
                    var e = arguments,
                        n = f.read(e),
                        i = f.read(e),
                        r = f.read(e),
                        s = t(this);
                    s.setHandleOut(n.subtract(s._point)), this._add([new O(r, i.subtract(r))])
                },
                quadraticCurveTo: function() {
                    var e = arguments,
                        n = f.read(e),
                        i = f.read(e),
                        r = t(this)._point;
                    this.cubicCurveTo(n.add(r.subtract(n).multiply(1 / 3)), n.add(i.subtract(n).multiply(1 / 3)), i)
                },
                curveTo: function() {
                    var e = arguments,
                        n = f.read(e),
                        i = f.read(e),
                        s = r.pick(r.read(e), .5),
                        a = 1 - s,
                        o = t(this)._point,
                        h = n.subtract(o.multiply(a * a)).subtract(i.multiply(s * s)).divide(2 * s * a);
                    if (h.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + s);
                    this.quadraticCurveTo(h, i)
                },
                arcTo: function() {
                    var e, n, i, s, a = arguments,
                        o = Math.abs,
                        h = Math.sqrt,
                        u = t(this),
                        c = u._point,
                        d = f.read(a),
                        g = r.peek(a);
                    if ("boolean" == typeof(b = r.pick(g, !0))) var v = (S = c.add(d).divide(2)).add(S.subtract(c).rotate(b ? -90 : 90));
                    else if (r.remain(a) <= 2) v = d, d = f.read(a);
                    else if (!c.equals(d)) {
                        var p = _.read(a),
                            w = l.isZero;
                        if (w(p.width) || w(p.height)) return this.lineTo(d);
                        var x = r.read(a),
                            b = !!r.read(a),
                            C = !!r.read(a),
                            S = c.add(d).divide(2),
                            P = ($ = c.subtract(S).rotate(-x)).x,
                            I = $.y,
                            M = o(p.width),
                            T = o(p.height),
                            k = M * M,
                            z = T * T,
                            A = P * P,
                            L = I * I,
                            N = h(A / k + L / z);
                        if (N > 1 && (k = (M *= N) * M, z = (T *= N) * T), o(N = (k * z - k * L - z * A) / (k * L + z * A)) < 1e-12 && (N = 0), N < 0) throw new Error("Cannot create an arc with the given arguments");
                        e = new f(M * I / T, -T * P / M).multiply((C === b ? -1 : 1) * h(N)).rotate(x).add(S), n = (i = (s = (new m).translate(e).rotate(x).scale(M, T))._inverseTransform(c)).getDirectedAngle(s._inverseTransform(d)), !b && n > 0 ? n -= 360 : b && n < 0 && (n += 360)
                    }
                    if (v) {
                        var B = new y(c.add(v).divide(2), v.subtract(c).rotate(90), !0),
                            E = new y(v.add(d).divide(2), d.subtract(v).rotate(90), !0),
                            j = new y(c, d),
                            D = j.getSide(v);
                        if (!(e = B.intersect(E, !0))) {
                            if (!D) return this.lineTo(d);
                            throw new Error("Cannot create an arc with the given arguments")
                        }
                        n = (i = c.subtract(e)).getDirectedAngle(d.subtract(e));
                        var F = j.getSide(e, !0);
                        0 === F ? n = D * o(n) : D === F && (n += n < 0 ? 360 : -360)
                    }
                    if (n) {
                        for (var R = 1e-7, q = o(n), V = q >= 360 ? 4 : Math.ceil((q - R) / 90), H = n / V, Z = H * Math.PI / 360, U = 4 / 3 * Math.sin(Z) / (1 + Math.cos(Z)), W = [], G = 0; G <= V; G++) {
                            var $ = d,
                                J = null;
                            if (G < V && (J = i.rotate(90).multiply(U), s ? ($ = s._transformPoint(i), J = s._transformPoint(i.add(J)).subtract($)) : $ = e.add(i)), G) {
                                var K = i.rotate(-90).multiply(U);
                                s && (K = s._transformPoint(i.add(K)).subtract($)), W.push(new O($, K, J))
                            } else u.setHandleOut(J);
                            i = i.rotate(H)
                        }
                        this._add(W)
                    }
                },
                lineBy: function() {
                    var e = f.read(arguments),
                        n = t(this)._point;
                    this.lineTo(n.add(e))
                },
                curveBy: function() {
                    var e = arguments,
                        n = f.read(e),
                        i = f.read(e),
                        s = r.read(e),
                        a = t(this)._point;
                    this.curveTo(a.add(n), a.add(i), s)
                },
                cubicCurveBy: function() {
                    var e = arguments,
                        n = f.read(e),
                        i = f.read(e),
                        r = f.read(e),
                        s = t(this)._point;
                    this.cubicCurveTo(s.add(n), s.add(i), s.add(r))
                },
                quadraticCurveBy: function() {
                    var e = arguments,
                        n = f.read(e),
                        i = f.read(e),
                        r = t(this)._point;
                    this.quadraticCurveTo(r.add(n), r.add(i))
                },
                arcBy: function() {
                    var e = arguments,
                        n = t(this)._point,
                        i = n.add(f.read(e)),
                        s = r.pick(r.peek(e), !0);
                    "boolean" == typeof s ? this.arcTo(i, s) : this.arcTo(i, n.add(f.read(e)))
                },
                closePath: function(t) {
                    this.setClosed(!0), this.join(this, t)
                }
            }
        }, {
            _getBounds: function(t, e) {
                var n = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds";
                return N[n](this._segments, this._closed, this, t, e)
            },
            statics: {
                getBounds: function(t, e, n, i, r, s) {
                    var a = t[0];
                    if (!a) return new v;
                    var o = new Array(6),
                        h = a._transformCoordinates(i, new Array(6)),
                        u = h.slice(0, 2),
                        l = u.slice(),
                        c = new Array(2);

                    function f(t) {
                        t._transformCoordinates(i, o);
                        for (var e = 0; e < 2; e++) z._addBounds(h[e], h[e + 4], o[e + 2], o[e], e, s ? s[e] : 0, u, l, c);
                        var n = h;
                        h = o, o = n
                    }
                    for (var d = 1, _ = t.length; d < _; d++) f(t[d]);
                    return e && f(a), new v(u[0], u[1], l[0] - u[0], l[1] - u[1])
                },
                getStrokeBounds: function(t, e, n, i, r) {
                    var s = n.getStyle(),
                        a = s.hasStroke(),
                        o = s.getStrokeWidth(),
                        h = a && n._getStrokeMatrix(i, r),
                        u = a && N._getStrokePadding(o, h),
                        l = N.getBounds(t, e, n, i, r, u);
                    if (!a) return l;
                    var c = o / 2,
                        f = s.getStrokeJoin(),
                        d = s.getStrokeCap(),
                        g = s.getMiterLimit(),
                        p = new v(new _(u));

                    function m(t) {
                        l = l.include(t)
                    }

                    function y(t) {
                        l = l.unite(p.setCenter(t._point.transform(i)))
                    }

                    function w(t, e) {
                        "round" === e || t.isSmooth() ? y(t) : N._addBevelJoin(t, e, c, g, i, h, m)
                    }

                    function x(t, e) {
                        "round" === e ? y(t) : N._addSquareCap(t, e, c, i, h, m)
                    }
                    var b = t.length - (e ? 0 : 1);
                    if (b > 0) {
                        for (var C = 1; C < b; C++) w(t[C], f);
                        e ? w(t[0], f) : (x(t[0], d), x(t[t.length - 1], d))
                    }
                    return l
                },
                _getStrokePadding: function(t, e) {
                    if (!e) return [t, t];
                    var n = new f(t, 0).transform(e),
                        i = new f(0, t).transform(e),
                        r = n.getAngleInRadians(),
                        s = n.getLength(),
                        a = i.getLength(),
                        o = Math.sin(r),
                        h = Math.cos(r),
                        u = Math.tan(r),
                        l = Math.atan2(a * u, s),
                        c = Math.atan2(a, u * s);
                    return [Math.abs(s * Math.cos(l) * h + a * Math.sin(l) * o), Math.abs(a * Math.sin(c) * h + s * Math.cos(c) * o)]
                },
                _addBevelJoin: function(t, e, n, i, r, s, a, o) {
                    var h = t.getCurve(),
                        u = h.getPrevious(),
                        l = h.getPoint1().transform(r),
                        c = u.getNormalAtTime(1).multiply(n).transform(s),
                        d = h.getNormalAtTime(0).multiply(n).transform(s),
                        _ = c.getDirectedAngle(d);
                    if ((_ < 0 || _ >= 180) && (c = c.negate(), d = d.negate()), o && a(l), a(l.add(c)), "miter" === e) {
                        var g = new y(l.add(c), new f(-c.y, c.x), !0).intersect(new y(l.add(d), new f(-d.y, d.x), !0), !0);
                        g && l.getDistance(g) <= i * n && a(g)
                    }
                    a(l.add(d))
                },
                _addSquareCap: function(t, e, n, i, r, s, a) {
                    var o = t._point.transform(i),
                        h = t.getLocation(),
                        u = h.getNormal().multiply(0 === h.getTime() ? n : -n).transform(r);
                    "square" === e && (a && (s(o.subtract(u)), s(o.add(u))), o = o.add(u.rotate(-90))), s(o.add(u)), s(o.subtract(u))
                },
                getHandleBounds: function(t, e, n, i, r) {
                    var s, a, o = n.getStyle();
                    if (r.stroke && o.hasStroke()) {
                        var h = n._getStrokeMatrix(i, r),
                            u = o.getStrokeWidth() / 2,
                            l = u;
                        "miter" === o.getStrokeJoin() && (l = u * o.getMiterLimit()), "square" === o.getStrokeCap() && (l = Math.max(l, u * Math.SQRT2)), s = N._getStrokePadding(u, h), a = N._getStrokePadding(l, h)
                    }
                    for (var c = new Array(6), f = Infinity, d = -f, _ = f, g = d, p = 0, m = t.length; p < m; p++) {
                        t[p]._transformCoordinates(i, c);
                        for (var y = 0; y < 6; y += 2) {
                            var w = y ? s : a,
                                x = w ? w[0] : 0,
                                b = w ? w[1] : 0,
                                C = c[y],
                                S = c[y + 1],
                                P = C - x,
                                I = C + x,
                                M = S - b,
                                T = S + b;
                            P < f && (f = P), I > d && (d = I), M < _ && (_ = M), T > g && (g = T)
                        }
                    }
                    return new v(f, _, d - f, g - _)
                }
            }
        });
    N.inject({
        statics: new function() {
            var t = .5522847498307936,
                e = [new O([-1, 0], [0, t], [0, -t]), new O([0, -1], [-t, 0], [t, 0]), new O([1, 0], [0, -t], [0, t]), new O([0, 1], [t, 0], [-t, 0])];

            function n(t, e, n) {
                var i = r.getNamed(n),
                    s = new N(i && 0 == i.insert && x.NO_INSERT);
                return s._add(t), s._closed = e, s.set(i, {
                    insert: !0
                })
            }

            function i(t, i, r) {
                for (var s = new Array(4), a = 0; a < 4; a++) {
                    var o = e[a];
                    s[a] = new O(o._point.multiply(i).add(t), o._handleIn.multiply(i), o._handleOut.multiply(i))
                }
                return n(s, !0, r)
            }
            return {
                Line: function() {
                    var t = arguments;
                    return n([new O(f.readNamed(t, "from")), new O(f.readNamed(t, "to"))], !1, t)
                },
                Circle: function() {
                    var t = arguments,
                        e = f.readNamed(t, "center"),
                        n = r.readNamed(t, "radius");
                    return i(e, new _(n), t)
                },
                Rectangle: function() {
                    var e, i = arguments,
                        r = v.readNamed(i, "rectangle"),
                        s = _.readNamed(i, "radius", 0, {
                            readNull: !0
                        }),
                        a = r.getBottomLeft(!0),
                        o = r.getTopLeft(!0),
                        h = r.getTopRight(!0),
                        u = r.getBottomRight(!0);
                    if (!s || s.isZero()) e = [new O(a), new O(o), new O(h), new O(u)];
                    else {
                        var l = (s = _.min(s, r.getSize(!0).divide(2))).width,
                            c = s.height,
                            f = l * t,
                            d = c * t;
                        e = [new O(a.add(l, 0), null, [-f, 0]), new O(a.subtract(0, c), [0, d]), new O(o.add(0, c), null, [0, -d]), new O(o.add(l, 0), [-f, 0], null), new O(h.subtract(l, 0), null, [f, 0]), new O(h.add(0, c), [0, -d], null), new O(u.subtract(0, c), null, [0, d]), new O(u.subtract(l, 0), [f, 0])]
                    }
                    return n(e, !0, i)
                },
                RoundRectangle: "#Rectangle",
                Ellipse: function() {
                    var t = arguments,
                        e = S._readEllipse(t);
                    return i(e.center, e.radius, t)
                },
                Oval: "#Ellipse",
                Arc: function() {
                    var t = arguments,
                        e = f.readNamed(t, "from"),
                        n = f.readNamed(t, "through"),
                        i = f.readNamed(t, "to"),
                        s = r.getNamed(t),
                        a = new N(s && 0 == s.insert && x.NO_INSERT);
                    return a.moveTo(e), a.arcTo(n, i), a.set(s)
                },
                RegularPolygon: function() {
                    for (var t = arguments, e = f.readNamed(t, "center"), i = r.readNamed(t, "sides"), s = r.readNamed(t, "radius"), a = 360 / i, o = i % 3 == 0, h = new f(0, o ? -s : s), u = o ? -1 : .5, l = new Array(i), c = 0; c < i; c++) l[c] = new O(e.add(h.rotate((c + u) * a)));
                    return n(l, !0, t)
                },
                Star: function() {
                    for (var t = arguments, e = f.readNamed(t, "center"), i = 2 * r.readNamed(t, "points"), s = r.readNamed(t, "radius1"), a = r.readNamed(t, "radius2"), o = 360 / i, h = new f(0, -1), u = new Array(i), l = 0; l < i; l++) u[l] = new O(e.add(h.rotate(o * l).multiply(l % 2 ? a : s)));
                    return n(u, !0, t)
                }
            }
        }
    });
    var B = L.extend({
        _class: "CompoundPath",
        _serializeFields: {
            children: []
        },
        beans: !0,
        initialize: function(t) {
            this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments))
        },
        insertChildren: function t(e, n) {
            var i = n,
                s = i[0];
            s && "number" == typeof s[0] && (i = [i]);
            for (var a = n.length - 1; a >= 0; a--) {
                var o = i[a];
                i !== n || o instanceof N || (i = r.slice(i)), Array.isArray(o) ? i[a] = new N({
                    segments: o,
                    insert: !1
                }) : o instanceof B && (i.splice.apply(i, [a, 1].concat(o.removeChildren())), o.remove())
            }
            return t.base.call(this, e, i)
        },
        reduce: function t(e) {
            for (var n = this._children, i = n.length - 1; i >= 0; i--) {
                var r;
                (r = n[i].reduce(e)).isEmpty() && r.remove()
            }
            return n.length ? t.base.call(this) : ((r = new N(x.NO_INSERT)).copyAttributes(this), r.insertAbove(this), this.remove(), r)
        },
        isClosed: function() {
            for (var t = this._children, e = 0, n = t.length; e < n; e++)
                if (!t[e]._closed) return !1;
            return !0
        },
        setClosed: function(t) {
            for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setClosed(t)
        },
        getFirstSegment: function() {
            var t = this.getFirstChild();
            return t && t.getFirstSegment()
        },
        getLastSegment: function() {
            var t = this.getLastChild();
            return t && t.getLastSegment()
        },
        getCurves: function() {
            for (var t = this._children, e = [], n = 0, i = t.length; n < i; n++) r.push(e, t[n].getCurves());
            return e
        },
        getFirstCurve: function() {
            var t = this.getFirstChild();
            return t && t.getFirstCurve()
        },
        getLastCurve: function() {
            var t = this.getLastChild();
            return t && t.getLastCurve()
        },
        getArea: function() {
            for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getArea();
            return e
        },
        getLength: function() {
            for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
            return e
        },
        getPathData: function(t, e) {
            for (var n = this._children, i = [], r = 0, s = n.length; r < s; r++) {
                var a = n[r],
                    o = a._matrix;
                i.push(a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e))
            }
            return i.join("")
        },
        _hitTestChildren: function t(e, n, i) {
            return t.base.call(this, e, n.class === N || "path" === n.type ? n : r.set({}, n, {
                fill: !1
            }), i)
        },
        _draw: function(t, e, n, i) {
            var r = this._children;
            if (r.length) {
                e = e.extend({
                    dontStart: !0,
                    dontFinish: !0
                }), t.beginPath();
                for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, i);
                if (!e.clip) {
                    this._setStyles(t, e, n);
                    var o = this._style;
                    o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                }
            }
        },
        _drawSelected: function(t, e, n) {
            for (var i = this._children, r = 0, s = i.length; r < s; r++) {
                var a = i[r],
                    o = a._matrix;
                n[a._id] || a._drawSelected(t, o.isIdentity() ? e : e.appended(o))
            }
        }
    }, new function() {
        function t(t, e) {
            var n = t._children;
            if (e && !n.length) throw new Error("Use a moveTo() command first");
            return n[n.length - 1]
        }
        return r.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], (function(e) {
            this[e] = function() {
                var n = t(this, !0);
                n[e].apply(n, arguments)
            }
        }), {
            moveTo: function() {
                var e = t(this),
                    n = e && e.isEmpty() ? e : new N(x.NO_INSERT);
                n !== e && this.addChild(n), n.moveTo.apply(n, arguments)
            },
            moveBy: function() {
                var e = t(this, !0),
                    n = e && e.getLastSegment(),
                    i = f.read(arguments);
                this.moveTo(n ? i.add(n._point) : i)
            },
            closePath: function(e) {
                t(this, !0).closePath(e)
            }
        })
    }, r.each(["reverse", "flatten", "simplify", "smooth"], (function(t) {
        this[t] = function(e) {
            for (var n, i = this._children, r = 0, s = i.length; r < s; r++) n = i[r][t](e) || n;
            return n
        }
    }), {}));
    L.inject(new function() {
        var t = Math.min,
            n = Math.max,
            i = Math.abs,
            s = {
                unite: {
                    1: !0,
                    2: !0
                },
                intersect: {
                    2: !0
                },
                subtract: {
                    1: !0
                },
                exclude: {
                    1: !0,
                    "-1": !0
                }
            };

        function a(t) {
            return t._children || [t]
        }

        function o(t, e) {
            var n = t.clone(!1).reduce({
                simplify: !0
            }).transform(null, !0, !0);
            if (e) {
                for (var i = a(n), r = 0, s = i.length; r < s; r++) {
                    (t = i[r])._closed || t.isEmpty() || (t.closePath(1e-12), t.getFirstSegment().setHandleIn(0, 0), t.getLastSegment().setHandleOut(0, 0))
                }
                n = n.resolveCrossings().reorient("nonzero" === n.getFillRule(), !0)
            }
            return n
        }

        function u(t, e, n, i, r) {
            var s = new B(x.NO_INSERT);
            return s.addChildren(t, !0), s = s.reduce({
                simplify: e
            }), r && 0 == r.insert || s.insertAbove(i && n.isSibling(i) && n.getIndex() < i.getIndex() ? i : n), s.copyAttributes(n, !0), s
        }

        function c(t) {
            return t.hasOverlap() || t.isCrossing()
        }

        function f(t, e, n, i) {
            if (i && (0 == i.trace || i.stroke) && /^(subtract|intersect)$/.test(n)) return d(t, e, n);
            var l = o(t, !0),
                f = e && t !== e && o(e, !0),
                _ = s[n];
            _[n] = !0, f && (_.subtract || _.exclude) ^ f.isClockwise() ^ l.isClockwise() && f.reverse();
            var g, m = p(A.expand(l.getIntersections(f, c))),
                x = a(l),
                b = f && a(f),
                C = [],
                S = [];

            function P(t) {
                for (var e = 0, n = t.length; e < n; e++) {
                    var i = t[e];
                    r.push(C, i._segments), r.push(S, i.getCurves()), i._overlapsOnly = !0
                }
            }

            function I(t) {
                for (var e = [], n = 0, i = t && t.length; n < i; n++) e.push(S[t[n]]);
                return e
            }
            if (m.length) {
                P(x), b && P(b);
                for (var M = new Array(S.length), T = 0, O = S.length; T < O; T++) M[T] = S[T].getValues();
                var k = h.findCurveBoundsCollisions(M, M, 0, !0),
                    z = {};
                for (T = 0; T < S.length; T++) {
                    var L = S[T],
                        N = L._path._id;
                    (z[N] = z[N] || {})[L.getIndex()] = {
                        hor: I(k[T].hor),
                        ver: I(k[T].ver)
                    }
                }
                for (T = 0, O = m.length; T < O; T++) y(m[T]._segment, l, f, z, _);
                for (T = 0, O = C.length; T < O; T++) {
                    var B = C[T],
                        E = B._intersection;
                    B._winding || y(B, l, f, z, _), E && E._overlap || (B._path._overlapsOnly = !1)
                }
                g = w(C, _)
            } else g = v(b ? x.concat(b) : x.slice(), (function(t) {
                return !!_[t]
            }));
            return u(g, !0, t, e, i)
        }

        function d(t, e, n) {
            var i = o(t),
                r = o(e),
                s = i.getIntersections(r, c),
                a = "subtract" === n,
                h = "divide" === n,
                l = {},
                f = [];

            function d(t) {
                if (!l[t._id] && (h || r.contains(t.getPointAt(t.getLength() / 2)) ^ a)) return f.unshift(t), l[t._id] = !0
            }
            for (var _ = s.length - 1; _ >= 0; _--) {
                var g = s[_].split();
                g && (d(g) && g.getFirstSegment().setHandleIn(0, 0), i.getLastSegment().setHandleOut(0, 0))
            }
            return d(i), u(f, !1, t, e)
        }

        function _(t, e) {
            for (var n = t; n;) {
                if (n === e) return;
                n = n._previous
            }
            for (; t._next && t._next !== e;) t = t._next;
            if (!t._next) {
                for (; e._previous;) e = e._previous;
                t._next = e, e._previous = t
            }
        }

        function g(t) {
            for (var e = t.length - 1; e >= 0; e--) t[e].clearHandles()
        }

        function v(t, e, n) {
            var s = t && t.length;
            if (s) {
                var a = r.each(t, (function(t, e) {
                        this[t._id] = {
                            container: null,
                            winding: t.isClockwise() ? 1 : -1,
                            index: e
                        }
                    }), {}),
                    o = t.slice().sort((function(t, e) {
                        return i(e.getArea()) - i(t.getArea())
                    })),
                    u = o[0],
                    c = h.findItemBoundsCollisions(o, null, l.GEOMETRIC_EPSILON);
                null == n && (n = u.isClockwise());
                for (var f = 0; f < s; f++) {
                    var d = o[f],
                        _ = a[d._id],
                        g = 0,
                        v = c[f];
                    if (v)
                        for (var p = null, m = v.length - 1; m >= 0; m--)
                            if (v[m] < f) {
                                p = p || d.getInteriorPoint();
                                var y = o[v[m]];
                                if (y.contains(p)) {
                                    var w = a[y._id];
                                    g = w.winding, _.winding += g, _.container = w.exclude ? w.container : y;
                                    break
                                }
                            } if (e(_.winding) === e(g)) _.exclude = !0, t[_.index] = null;
                    else {
                        var x = _.container;
                        d.setClockwise(x ? !x.isClockwise() : n)
                    }
                }
            }
            return t
        }

        function p(t, e, n) {
            var i, r, s, a = e && [],
                o = 1e-8,
                h = !1,
                u = n || [],
                l = n && {};

            function c(t) {
                return t._path._id + "." + t._segment1._index
            }
            for (var f = (n && n.length) - 1; f >= 0; f--) {
                (d = n[f])._path && (l[c(d)] = !0)
            }
            for (f = t.length - 1; f >= 0; f--) {
                var d, v, p = t[f],
                    m = p._time,
                    y = m,
                    w = e && !e(p);
                if ((d = p._curve) && (d !== r ? (h = !d.hasHandles() || l && l[c(d)], i = [], s = null, r = d) : s >= o && (m /= s)), w) i && i.push(p);
                else {
                    if (e && a.unshift(p), s = y, m < o) v = d._segment1;
                    else if (m > .99999999) v = d._segment2;
                    else {
                        var x = d.divideAtTime(m, !0);
                        h && u.push(d, x), v = x._segment1;
                        for (var b = i.length - 1; b >= 0; b--) {
                            var C = i[b];
                            C._time = (C._time - m) / (1 - m)
                        }
                    }
                    p._setSegment(v);
                    var S = v._intersection,
                        P = p._intersection;
                    if (S) {
                        _(S, P);
                        for (var I = S; I;) _(I._intersection, S), I = I._next
                    } else v._intersection = P
                }
            }
            return n || g(u), a || t
        }

        function m(e, r, s, a, o) {
            var h, u, l = Array.isArray(r) ? r : r[s ? "hor" : "ver"],
                c = s ? 1 : 0,
                f = 1 ^ c,
                d = [e.x, e.y],
                _ = d[c],
                g = d[f],
                v = 1e-6,
                p = _ - 1e-9,
                y = _ + 1e-9,
                w = 0,
                x = 0,
                b = 0,
                C = 0,
                S = !1,
                P = !1,
                I = 1,
                M = [];

            function T(i) {
                var u = i[f + 0],
                    l = i[f + 6];
                if (!(g < t(u, l) || g > n(u, l))) {
                    var d = i[c + 0],
                        w = i[c + 2],
                        x = i[c + 4],
                        P = i[c + 6];
                    if (u !== l) {
                        var T = g === u ? 0 : g === l || p > n(d, w, x, P) || y < t(d, w, x, P) ? 1 : z.solveCubic(i, f, g, M, 0, 1) > 0 ? M[0] : 1,
                            O = 0 === T ? d : 1 === T ? P : z.getPoint(i, T)[s ? "y" : "x"],
                            k = u > l ? 1 : -1,
                            A = h[f] > h[f + 6] ? 1 : -1,
                            L = h[c + 6];
                        return g !== u ? (O < p ? b += k : O > y ? C += k : S = !0, O > _ - v && O < _ + v && (I /= 2)) : (k !== A ? d < p ? b += k : d > y && (C += k) : d != L && (L < y && O > y ? (C += k, S = !0) : L > p && O < p && (b += k, S = !0)), I /= 4), h = i, !o && O > p && O < y && 0 === z.getTangent(i, T)[s ? "x" : "y"] && m(e, r, !s, a, !0)
                    }(d < y && P > p || P < y && d > p) && (S = !0)
                }
            }

            function O(e) {
                var i = e[f + 0],
                    r = e[f + 2],
                    a = e[f + 4],
                    o = e[f + 6];
                if (g <= n(i, r, a, o) && g >= t(i, r, a, o))
                    for (var h, u = e[c + 0], l = e[c + 2], d = e[c + 4], _ = e[c + 6], v = p > n(u, l, d, _) || y < t(u, l, d, _) ? [e] : z.getMonoCurves(e, s), m = 0, w = v.length; m < w; m++)
                        if (h = T(v[m])) return h
            }
            for (var k = 0, A = l.length; k < A; k++) {
                var L, N = l[k],
                    B = N._path,
                    E = N.getValues();
                if (!(k && l[k - 1]._path === B || (h = null, B._closed || (u = z.getValues(B.getLastCurve().getSegment2(), N.getSegment1(), null, !a))[f] !== u[f + 6] && (h = u), h))) {
                    h = E;
                    for (var j = B.getLastCurve(); j && j !== N;) {
                        var D = j.getValues();
                        if (D[f] !== D[f + 6]) {
                            h = D;
                            break
                        }
                        j = j.getPrevious()
                    }
                }
                if (L = O(E)) return L;
                if (k + 1 === A || l[k + 1]._path !== B) {
                    if (u && (L = O(u))) return L;
                    !S || b || C || (b = C = B.isClockwise(a) ^ s ? 1 : -1), w += b, x += C, b = C = 0, S && (P = !0, S = !1), u = null
                }
            }
            return w = i(w), x = i(x), {
                winding: n(w, x),
                windingL: w,
                windingR: x,
                quality: I,
                onPath: P
            }
        }

        function y(t, e, n, r, s) {
            var a = [],
                o = t,
                h = 0;
            do {
                if (y = t.getCurve()) {
                    var u = y.getLength();
                    a.push({
                        segment: t,
                        curve: y,
                        length: u
                    }), h += u
                }
                t = t.getNext()
            } while (t && !t._intersection && t !== o);
            for (var c = [.5, .25, .75], f = {
                    winding: 0,
                    quality: -1
                }, d = 0; d < c.length && f.quality < .5; d++) {
                u = h * c[d];
                for (var _ = 0, g = a.length; _ < g; _++) {
                    var v = a[_],
                        p = v.length;
                    if (u <= p) {
                        var y, w = (y = v.curve)._path,
                            x = w._parent,
                            b = x instanceof B ? x : w,
                            C = l.clamp(y.getTimeAt(u), .001, .999),
                            S = y.getPointAtTime(C),
                            P = i(y.getTangentAtTime(C).y) < Math.SQRT1_2,
                            I = null;
                        if (s.subtract && n) {
                            var M = (b === e ? n : e)._getWinding(S, P, !0);
                            if (b === e && M.winding || b === n && !M.winding) {
                                if (M.quality < 1) continue;
                                I = {
                                    winding: 0,
                                    quality: 1
                                }
                            }
                        }(I = I || m(S, r[w._id][y.getIndex()], P, !0)).quality > f.quality && (f = I);
                        break
                    }
                    u -= p
                }
            }
            for (_ = a.length - 1; _ >= 0; _--) a[_].segment._winding = f
        }

        function w(t, e) {
            var n, i = [];

            function r(t) {
                var n;
                return !(!t || t._visited || e && (!e[(n = t._winding || {}).winding] || e.unite && 2 === n.winding && n.windingL && n.windingR))
            }

            function s(t) {
                if (t)
                    for (var e = 0, i = n.length; e < i; e++)
                        if (t === n[e]) return !0;
                return !1
            }

            function a(t) {
                for (var e = t._segments, n = 0, i = e.length; n < i; n++) e[n]._visited = !0
            }

            function o(t, e) {
                var i = t._intersection,
                    a = i,
                    o = [];

                function h(i, a) {
                    for (; i && i !== a;) {
                        var h = i._segment,
                            u = h && h._path;
                        if (u) {
                            var l = h.getNext() || u.getFirstSegment(),
                                c = l._intersection;
                            h !== t && (s(h) || s(l) || l && r(h) && (r(l) || c && r(c._segment))) && o.push(h), e && n.push(h)
                        }
                        i = i._next
                    }
                }
                if (e && (n = [t]), i) {
                    for (h(i); i && i._previous;) i = i._previous;
                    h(i, a)
                }
                return o
            }
            t.sort((function(t, e) {
                var n = t._intersection,
                    i = e._intersection,
                    r = !(!n || !n._overlap),
                    s = !(!i || !i._overlap),
                    a = t._path,
                    o = e._path;
                return r ^ s ? r ? 1 : -1 : !n ^ !i ? n ? 1 : -1 : a !== o ? a._id - o._id : t._index - e._index
            }));
            for (var h = 0, u = t.length; h < u; h++) {
                var l, c, f, d = t[h],
                    _ = r(d),
                    g = null,
                    v = !1,
                    p = !0,
                    m = [];
                if (_ && d._path._overlapsOnly) {
                    var y = d._path,
                        w = d._intersection._segment._path;
                    y.compare(w) && (y.getArea() && i.push(y.clone(!1)), a(y), a(w), _ = !1)
                }
                for (; _;) {
                    var b = !g,
                        C = o(d, b),
                        S = C.shift(),
                        P = !(v = !b && (s(d) || s(S))) && S;
                    if (b && (g = new N(x.NO_INSERT), l = null), v) {
                        (d.isFirst() || d.isLast()) && (p = d._path._closed), d._visited = !0;
                        break
                    }
                    if (P && l && (m.push(l), l = null), l || (P && C.push(d), l = {
                            start: g._segments.length,
                            crossings: C,
                            visited: c = [],
                            handleIn: f
                        }), P && (d = S), !r(d)) {
                        g.removeSegments(l.start);
                        for (var I = 0, M = c.length; I < M; I++) c[I]._visited = !1;
                        c.length = 0;
                        do {
                            (d = l && l.crossings.shift()) && d._path || (d = null, (l = m.pop()) && (c = l.visited, f = l.handleIn))
                        } while (l && !r(d));
                        if (!d) break
                    }
                    var T = d.getNext();
                    g.add(new O(d._point, f, T && d._handleOut)), d._visited = !0, c.push(d), d = T || d._path.getFirstSegment(), f = T && T._handleIn
                }
                v && (p && (g.getFirstSegment().setHandleIn(f), g.setClosed(p)), 0 !== g.getArea() && i.push(g))
            }
            return i
        }
        return {
            _getWinding: function(t, e, n) {
                return m(t, this.getCurves(), e, n)
            },
            unite: function(t, e) {
                return f(this, t, "unite", e)
            },
            intersect: function(t, e) {
                return f(this, t, "intersect", e)
            },
            subtract: function(t, e) {
                return f(this, t, "subtract", e)
            },
            exclude: function(t, e) {
                return f(this, t, "exclude", e)
            },
            divide: function(t, e) {
                return e && (0 == e.trace || e.stroke) ? d(this, t, "divide") : u([this.subtract(t, e), this.intersect(t, e)], !0, this, t, e)
            },
            resolveCrossings: function() {
                var t = this._children,
                    e = t || [this];

                function n(t, e) {
                    var n = t && t._intersection;
                    return n && n._overlap && n._path === e
                }
                var i = !1,
                    s = !1,
                    a = this.getIntersections(null, (function(t) {
                        return t.hasOverlap() && (i = !0) || t.isCrossing() && (s = !0)
                    })),
                    o = i && s && [];
                if (a = A.expand(a), i)
                    for (var h = p(a, (function(t) {
                            return t.hasOverlap()
                        }), o), u = h.length - 1; u >= 0; u--) {
                        var l = h[u],
                            c = l._path,
                            f = l._segment,
                            d = f.getPrevious(),
                            _ = f.getNext();
                        n(d, c) && n(_, c) && (f.remove(), d._handleOut._set(0, 0), _._handleIn._set(0, 0), d === f || d.getCurve().hasLength() || (_._handleIn.set(d._handleIn), d.remove()))
                    }
                s && (p(a, i && function(t) {
                    var e = t.getCurve(),
                        n = t.getSegment(),
                        i = t._intersection,
                        r = i._curve,
                        s = i._segment;
                    if (e && r && e._path && r._path) return !0;
                    n && (n._intersection = null), s && (s._intersection = null)
                }, o), o && g(o), e = w(r.each(e, (function(t) {
                    r.push(this, t._segments)
                }), [])));
                var v, m = e.length;
                return m > 1 && t ? (e !== t && this.setChildren(e), v = this) : 1 !== m || t || (e[0] !== this && this.setSegments(e[0].removeSegments()), v = this), v || ((v = new B(x.NO_INSERT)).addChildren(e), (v = v.reduce()).copyAttributes(this), this.replaceWith(v)), v
            },
            reorient: function(t, n) {
                var i = this._children;
                return i && i.length ? this.setChildren(v(this.removeChildren(), (function(e) {
                    return !!(t ? e : 1 & e)
                }), n)) : n !== e && this.setClockwise(n), this
            },
            getInteriorPoint: function() {
                var e = this.getBounds().getCenter(!0);
                if (!this.contains(e)) {
                    for (var i = this.getCurves(), r = e.y, s = [], a = [], o = 0, h = i.length; o < h; o++) {
                        var u = i[o].getValues(),
                            l = u[1],
                            c = u[3],
                            f = u[5],
                            d = u[7];
                        if (r >= t(l, c, f, d) && r <= n(l, c, f, d))
                            for (var _ = z.getMonoCurves(u), g = 0, v = _.length; g < v; g++) {
                                var p = _[g],
                                    m = p[1],
                                    y = p[7];
                                if (m !== y && (r >= m && r <= y || r >= y && r <= m)) {
                                    var w = r === m ? p[0] : r === y ? p[6] : 1 === z.solveCubic(p, 1, r, a, 0, 1) ? z.getPoint(p, a[0]).x : (p[0] + p[6]) / 2;
                                    s.push(w)
                                }
                            }
                    }
                    s.length > 1 && (s.sort((function(t, e) {
                        return t - e
                    })), e.x = (s[0] + s[1]) / 2)
                }
                return e
            }
        }
    });
    var E = r.extend({
            _class: "PathFlattener",
            initialize: function(t, e, n, i, r) {
                var s, a = [],
                    o = [],
                    h = 0,
                    u = 1 / (n || 32),
                    l = t._segments,
                    c = l[0];

                function f(t, e) {
                    var n = z.getValues(t, e, r);
                    a.push(n), d(n, t._index, 0, 1)
                }

                function d(t, n, r, s) {
                    if (!(s - r > u) || i && z.isStraight(t) || z.isFlatEnough(t, e || .25)) {
                        var a = t[6] - t[0],
                            l = t[7] - t[1],
                            c = Math.sqrt(a * a + l * l);
                        c > 0 && (h += c, o.push({
                            offset: h,
                            curve: t,
                            index: n,
                            time: s
                        }))
                    } else {
                        var f = z.subdivide(t, .5),
                            _ = (r + s) / 2;
                        d(f[0], n, r, _), d(f[1], n, _, s)
                    }
                }
                for (var _ = 1, g = l.length; _ < g; _++) f(c, s = l[_]), c = s;
                t._closed && f(s || c, l[0]), this.curves = a, this.parts = o, this.length = h, this.index = 0
            },
            _get: function(t) {
                for (var e, n = this.parts, i = n.length, r = this.index; e = r, r && !(n[--r].offset < t););
                for (; e < i; e++) {
                    var s = n[e];
                    if (s.offset >= t) {
                        this.index = e;
                        var a = n[e - 1],
                            o = a && a.index === s.index ? a.time : 0,
                            h = a ? a.offset : 0;
                        return {
                            index: s.index,
                            time: o + (s.time - o) * (t - h) / (s.offset - h)
                        }
                    }
                }
                return {
                    index: n[i - 1].index,
                    time: 1
                }
            },
            drawPart: function(t, e, n) {
                for (var i = this._get(e), r = this._get(n), s = i.index, a = r.index; s <= a; s++) {
                    var o = z.getPart(this.curves[s], s === i.index ? i.time : 0, s === r.index ? r.time : 1);
                    s === i.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2))
                }
            }
        }, r.each(z._evaluateMethods, (function(t) {
            this[t + "At"] = function(e) {
                var n = this._get(e);
                return z[t](this.curves[n.index], n.time)
            }
        }), {})),
        j = r.extend({
            initialize: function(t) {
                for (var e, n = this.points = [], i = t._segments, r = t._closed, s = 0, a = i.length; s < a; s++) {
                    var o = i[s].point;
                    e && e.equals(o) || n.push(e = o.clone())
                }
                r && (n.unshift(n[n.length - 1]), n.push(n[1])), this.closed = r
            },
            fit: function(t) {
                var e = this.points,
                    n = e.length,
                    i = null;
                return n > 0 && (i = [new O(e[0])], n > 1 && (this.fitCubic(i, t, 0, n - 1, e[1].subtract(e[0]), e[n - 2].subtract(e[n - 1])), this.closed && (i.shift(), i.pop()))), i
            },
            fitCubic: function(t, e, n, i, r, s) {
                var a = this.points;
                if (i - n != 1) {
                    for (var o, h = this.chordLengthParameterize(n, i), u = Math.max(e, e * e), l = !0, c = 0; c <= 4; c++) {
                        var f = this.generateBezier(n, i, h, r, s),
                            d = this.findMaxError(n, i, f, h);
                        if (d.error < e && l) return void this.addCurve(t, f);
                        if (o = d.index, d.error >= u) break;
                        l = this.reparameterize(n, i, h, f), u = d.error
                    }
                    var _ = a[o - 1].subtract(a[o + 1]);
                    this.fitCubic(t, e, n, o, r, _), this.fitCubic(t, e, o, i, _.negate(), s)
                } else {
                    var g = a[n],
                        v = a[i],
                        p = g.getDistance(v) / 3;
                    this.addCurve(t, [g, g.add(r.normalize(p)), v.add(s.normalize(p)), v])
                }
            },
            addCurve: function(t, e) {
                t[t.length - 1].setHandleOut(e[1].subtract(e[0])), t.push(new O(e[3], e[2].subtract(e[3])))
            },
            generateBezier: function(t, e, n, i, r) {
                for (var s = 1e-12, a = Math.abs, o = this.points, h = o[t], u = o[e], l = [
                        [0, 0],
                        [0, 0]
                    ], c = [0, 0], f = 0, d = e - t + 1; f < d; f++) {
                    var _ = n[f],
                        g = 1 - _,
                        v = 3 * _ * g,
                        p = g * g * g,
                        m = v * g,
                        y = v * _,
                        w = _ * _ * _,
                        x = i.normalize(m),
                        b = r.normalize(y),
                        C = o[t + f].subtract(h.multiply(p + m)).subtract(u.multiply(y + w));
                    l[0][0] += x.dot(x), l[0][1] += x.dot(b), l[1][0] = l[0][1], l[1][1] += b.dot(b), c[0] += x.dot(C), c[1] += b.dot(C)
                }
                var S, P, I = l[0][0] * l[1][1] - l[1][0] * l[0][1];
                if (a(I) > s) {
                    var M = l[0][0] * c[1] - l[1][0] * c[0];
                    S = (c[0] * l[1][1] - c[1] * l[0][1]) / I, P = M / I
                } else {
                    var T = l[0][0] + l[0][1],
                        O = l[1][0] + l[1][1];
                    S = P = a(T) > s ? c[0] / T : a(O) > s ? c[1] / O : 0
                }
                var k, z, A = u.getDistance(h),
                    L = s * A;
                if (S < L || P < L) S = P = A / 3;
                else {
                    var N = u.subtract(h);
                    k = i.normalize(S), z = r.normalize(P), k.dot(N) - z.dot(N) > A * A && (S = P = A / 3, k = z = null)
                }
                return [h, h.add(k || i.normalize(S)), u.add(z || r.normalize(P)), u]
            },
            reparameterize: function(t, e, n, i) {
                for (var r = t; r <= e; r++) n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
                r = 1;
                for (var s = n.length; r < s; r++)
                    if (n[r] <= n[r - 1]) return !1;
                return !0
            },
            findRoot: function(t, e, n) {
                for (var i = [], r = [], s = 0; s <= 2; s++) i[s] = t[s + 1].subtract(t[s]).multiply(3);
                for (s = 0; s <= 1; s++) r[s] = i[s + 1].subtract(i[s]).multiply(2);
                var a = this.evaluate(3, t, n),
                    o = this.evaluate(2, i, n),
                    h = this.evaluate(1, r, n),
                    u = a.subtract(e),
                    c = o.dot(o) + u.dot(h);
                return l.isMachineZero(c) ? n : n - u.dot(o) / c
            },
            evaluate: function(t, e, n) {
                for (var i = e.slice(), r = 1; r <= t; r++)
                    for (var s = 0; s <= t - r; s++) i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
                return i[0]
            },
            chordLengthParameterize: function(t, e) {
                for (var n = [0], i = t + 1; i <= e; i++) n[i - t] = n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
                i = 1;
                for (var r = e - t; i <= r; i++) n[i] /= n[r];
                return n
            },
            findMaxError: function(t, e, n, i) {
                for (var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1; a < e; a++) {
                    var o = this.evaluate(3, n, i[a - t]).subtract(this.points[a]),
                        h = o.x * o.x + o.y * o.y;
                    h >= s && (s = h, r = a)
                }
                return {
                    error: s,
                    index: r
                }
            }
        }),
        D = x.extend({
            _class: "TextItem",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _serializeFields: {
                content: null
            },
            _boundsOptions: {
                stroke: !1,
                handle: !1
            },
            initialize: function(t) {
                this._content = "", this._lines = [];
                var n = t && r.isPlainObject(t) && t.x === e && t.y === e;
                this._initialize(n && t, !n && f.read(arguments))
            },
            _equals: function(t) {
                return this._content === t._content
            },
            copyContent: function(t) {
                this.setContent(t._content)
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(521)
            },
            isEmpty: function() {
                return !this._content
            },
            getCharacterStyle: "#getStyle",
            setCharacterStyle: "#setStyle",
            getParagraphStyle: "#getStyle",
            setParagraphStyle: "#setStyle"
        }),
        F = D.extend({
            _class: "PointText",
            initialize: function() {
                D.apply(this, arguments)
            },
            getPoint: function() {
                var t = this._matrix.getTranslation();
                return new d(t.x, t.y, this, "setPoint")
            },
            setPoint: function() {
                var t = f.read(arguments);
                this.translate(t.subtract(this._matrix.getTranslation()))
            },
            _draw: function(t, e, n) {
                if (this._content) {
                    this._setStyles(t, e, n);
                    var i = this._lines,
                        r = this._style,
                        s = r.hasFill(),
                        a = r.hasStroke(),
                        o = r.getLeading(),
                        h = t.shadowColor;
                    t.font = r.getFontStyle(), t.textAlign = r.getJustification();
                    for (var u = 0, l = i.length; u < l; u++) {
                        t.shadowColor = h;
                        var c = i[u];
                        s && (t.fillText(c, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), a && t.strokeText(c, 0, 0), t.translate(0, o)
                    }
                }
            },
            _getBounds: function(t, e) {
                var n = this._style,
                    i = this._lines,
                    r = i.length,
                    s = n.getJustification(),
                    a = n.getLeading(),
                    o = this.getView().getTextWidth(n.getFontStyle(), i),
                    h = 0;
                "left" !== s && (h -= o / ("center" === s ? 2 : 1));
                var u = new v(h, r ? -.75 * a : 0, o, r * a);
                return t ? t._transformBounds(u, u) : u
            }
        }),
        R = r.extend(new function() {
            var t, e = {
                    gray: ["gray"],
                    rgb: ["red", "green", "blue"],
                    hsb: ["hue", "saturation", "brightness"],
                    hsl: ["hue", "saturation", "lightness"],
                    gradient: ["gradient", "origin", "destination", "highlight"]
                },
                i = {},
                s = {
                    transparent: [0, 0, 0, 0]
                };

            function a(e) {
                var i, r = e.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i) || e.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i),
                    a = "rgb";
                if (r) {
                    var o = r[4] ? 4 : 3;
                    i = new Array(o);
                    for (var h = 0; h < o; h++) {
                        var u = r[h + 1];
                        i[h] = parseInt(1 == u.length ? u + u : u, 16) / 255
                    }
                } else if (r = e.match(/^(rgb|hsl)a?\((.*)\)$/)) {
                    a = r[1], i = r[2].trim().split(/[,\s]+/g);
                    for (var l = "hsl" === a, c = (h = 0, Math.min(i.length, 4)); h < c; h++) {
                        var f = i[h];
                        u = parseFloat(f);
                        if (l)
                            if (0 === h) {
                                var d = f.match(/([a-z]*)$/)[1];
                                u *= {
                                    turn: 360,
                                    rad: 180 / Math.PI,
                                    grad: .9
                                } [d] || 1
                            } else h < 3 && (u /= 100);
                        else h < 3 && (u /= /%$/.test(f) ? 100 : 255);
                        i[h] = u
                    }
                } else {
                    var _ = s[e];
                    if (!_)
                        if (n) {
                            t || ((t = et.getContext(1, 1)).globalCompositeOperation = "copy"), t.fillStyle = "rgba(0,0,0,0)", t.fillStyle = e, t.fillRect(0, 0, 1, 1);
                            var g = t.getImageData(0, 0, 1, 1).data;
                            _ = s[e] = [g[0] / 255, g[1] / 255, g[2] / 255]
                        } else _ = [0, 0, 0];
                    i = _.slice()
                }
                return [a, i]
            }
            var o = [
                    [0, 3, 1],
                    [2, 0, 1],
                    [1, 0, 3],
                    [1, 2, 0],
                    [3, 1, 0],
                    [0, 1, 2]
                ],
                h = {
                    "rgb-hsb": function(t, e, n) {
                        var i = Math.max(t, e, n),
                            r = i - Math.min(t, e, n);
                        return [0 === r ? 0 : 60 * (i == t ? (e - n) / r + (e < n ? 6 : 0) : i == e ? (n - t) / r + 2 : (t - e) / r + 4), 0 === i ? 0 : r / i, i]
                    },
                    "hsb-rgb": function(t, e, n) {
                        var i, r = (t = (t / 60 % 6 + 6) % 6) - (i = Math.floor(t)),
                            s = [n, n * (1 - e), n * (1 - e * r), n * (1 - e * (1 - r))];
                        return [s[(i = o[i])[0]], s[i[1]], s[i[2]]]
                    },
                    "rgb-hsl": function(t, e, n) {
                        var i = Math.max(t, e, n),
                            r = Math.min(t, e, n),
                            s = i - r,
                            a = 0 === s,
                            o = (i + r) / 2;
                        return [a ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4), a ? 0 : o < .5 ? s / (i + r) : s / (2 - i - r), o]
                    },
                    "hsl-rgb": function(t, e, n) {
                        if (0 === e) return [n, n, n];
                        for (var i = [(t = (t / 360 % 1 + 1) % 1) + 1 / 3, t, t - 1 / 3], r = n < .5 ? n * (1 + e) : n + e - n * e, s = 2 * n - r, a = [], o = 0; o < 3; o++) {
                            var h = i[o];
                            h < 0 && (h += 1), h > 1 && (h -= 1), a[o] = 6 * h < 1 ? s + 6 * (r - s) * h : 2 * h < 1 ? r : 3 * h < 2 ? s + (r - s) * (2 / 3 - h) * 6 : s
                        }
                        return a
                    },
                    "rgb-gray": function(t, e, n) {
                        return [.2989 * t + .587 * e + .114 * n]
                    },
                    "gray-rgb": function(t) {
                        return [t, t, t]
                    },
                    "gray-hsb": function(t) {
                        return [0, 0, t]
                    },
                    "gray-hsl": function(t) {
                        return [0, 0, t]
                    },
                    "gradient-rgb": function() {
                        return []
                    },
                    "rgb-gradient": function() {
                        return []
                    }
                };
            return r.each(e, (function(t, n) {
                i[n] = [], r.each(t, (function(t, s) {
                    var a = r.capitalize(t),
                        o = /^(hue|saturation)$/.test(t),
                        h = i[n][s] = "gradient" === n ? "gradient" === t ? function(t) {
                            var e = this._components[0];
                            return e !== (t = q.read(Array.isArray(t) ? t : arguments, 0, {
                                readNull: !0
                            })) && (e && e._removeOwner(this), t && t._addOwner(this)), t
                        } : function() {
                            return f.read(arguments, 0, {
                                readNull: "highlight" === t,
                                clone: !0
                            })
                        } : function(t) {
                            return null == t || isNaN(t) ? 0 : +t
                        };
                    this["get" + a] = function() {
                        return this._type === n || o && /^hs[bl]$/.test(this._type) ? this._components[s] : this._convert(n)[s]
                    }, this["set" + a] = function(t) {
                        this._type === n || o && /^hs[bl]$/.test(this._type) || (this._components = this._convert(n), this._properties = e[n], this._type = n), this._components[s] = h.call(this, t), this._changed()
                    }
                }), this)
            }), {
                _class: "Color",
                _readIndex: !0,
                initialize: function t(n) {
                    var s, o, h, u, l = arguments,
                        c = this.__read,
                        f = 0;
                    Array.isArray(n) && (n = (l = n)[0]);
                    var d = null != n && typeof n;
                    if ("string" === d && n in e && (s = n, n = l[1], Array.isArray(n) ? (o = n, h = l[2]) : (c && (f = 1), l = r.slice(l, 1), d = typeof n)), !o) {
                        if (u = "number" === d ? l : "object" === d && null != n.length ? n : null) {
                            s || (s = u.length >= 3 ? "rgb" : "gray");
                            var _ = e[s].length;
                            h = u[_], c && (f += u === arguments ? _ + (null != h ? 1 : 0) : 1), u.length > _ && (u = r.slice(u, 0, _))
                        } else if ("string" === d) {
                            var g = a(n);
                            s = g[0], 4 === (o = g[1]).length && (h = o[3], o.length--)
                        } else if ("object" === d)
                            if (n.constructor === t) {
                                if (s = n._type, o = n._components.slice(), h = n._alpha, "gradient" === s)
                                    for (var v = 1, p = o.length; v < p; v++) {
                                        var m = o[v];
                                        m && (o[v] = m.clone())
                                    }
                            } else if (n.constructor === q) s = "gradient", u = l;
                        else {
                            var y = e[s = "hue" in n ? "lightness" in n ? "hsl" : "hsb" : "gradient" in n || "stops" in n || "radial" in n ? "gradient" : "gray" in n ? "gray" : "rgb"],
                                w = i[s];
                            this._components = o = [];
                            for (v = 0, p = y.length; v < p; v++) {
                                null == (x = n[y[v]]) && !v && "gradient" === s && "stops" in n && (x = {
                                    stops: n.stops,
                                    radial: n.radial
                                }), null != (x = w[v].call(this, x)) && (o[v] = x)
                            }
                            h = n.alpha
                        }
                        c && s && (f = 1)
                    }
                    if (this._type = s || "rgb", !o) {
                        this._components = o = [];
                        for (v = 0, p = (w = i[this._type]).length; v < p; v++) {
                            var x;
                            null != (x = w[v].call(this, u && u[v])) && (o[v] = x)
                        }
                    }
                    return this._components = o, this._properties = e[this._type], this._alpha = h, c && (this.__read = f), this
                },
                set: "#initialize",
                _serialize: function(t, e) {
                    var n = this.getComponents();
                    return r.serialize(/^(gray|rgb)$/.test(this._type) ? n : [this._type].concat(n), t, !0, e)
                },
                _changed: function() {
                    this._canvasStyle = null, this._owner && (this._setter ? this._owner[this._setter](this) : this._owner._changed(129))
                },
                _convert: function(t) {
                    var e;
                    return this._type === t ? this._components.slice() : (e = h[this._type + "-" + t]) ? e.apply(this, this._components) : h["rgb-" + t].apply(this, h[this._type + "-rgb"].apply(this, this._components))
                },
                convert: function(t) {
                    return new R(t, this._convert(t), this._alpha)
                },
                getType: function() {
                    return this._type
                },
                setType: function(t) {
                    this._components = this._convert(t), this._properties = e[t], this._type = t
                },
                getComponents: function() {
                    var t = this._components.slice();
                    return null != this._alpha && t.push(this._alpha), t
                },
                getAlpha: function() {
                    return null != this._alpha ? this._alpha : 1
                },
                setAlpha: function(t) {
                    this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed()
                },
                hasAlpha: function() {
                    return null != this._alpha
                },
                equals: function(t) {
                    var e = r.isPlainValue(t, !0) ? R.read(arguments) : t;
                    return e === this || e && this._class === e._class && this._type === e._type && this.getAlpha() === e.getAlpha() && r.equals(this._components, e._components) || !1
                },
                toString: function() {
                    for (var t = this._properties, e = [], n = "gradient" === this._type, i = u.instance, r = 0, s = t.length; r < s; r++) {
                        var a = this._components[r];
                        null != a && e.push(t[r] + ": " + (n ? a : i.number(a)))
                    }
                    return null != this._alpha && e.push("alpha: " + i.number(this._alpha)), "{ " + e.join(", ") + " }"
                },
                toCSS: function(t) {
                    var e = this._convert("rgb"),
                        n = t || null == this._alpha ? 1 : this._alpha;

                    function i(t) {
                        return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t))
                    }
                    return e = [i(e[0]), i(e[1]), i(e[2])], n < 1 && e.push(n < 0 ? 0 : n), t ? "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1) : (4 == e.length ? "rgba(" : "rgb(") + e.join(",") + ")"
                },
                toCanvasStyle: function(t, e) {
                    if (this._canvasStyle) return this._canvasStyle;
                    if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                    var n, i = this._components,
                        r = i[0],
                        s = r._stops,
                        a = i[1],
                        o = i[2],
                        h = i[3],
                        u = e && e.inverted();
                    if (u && (a = u._transformPoint(a), o = u._transformPoint(o), h && (h = u._transformPoint(h))), r._radial) {
                        var l = o.getDistance(a);
                        if (h) {
                            var c = h.subtract(a);
                            c.getLength() > l && (h = a.add(c.normalize(l - .1)))
                        }
                        var f = h || a;
                        n = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, l)
                    } else n = t.createLinearGradient(a.x, a.y, o.x, o.y);
                    for (var d = 0, _ = s.length; d < _; d++) {
                        var g = s[d],
                            v = g._offset;
                        n.addColorStop(null == v ? d / (_ - 1) : v, g._color.toCanvasStyle())
                    }
                    return this._canvasStyle = n
                },
                transform: function(t) {
                    if ("gradient" === this._type) {
                        for (var e = this._components, n = 1, i = e.length; n < i; n++) {
                            var r = e[n];
                            t._transformPoint(r, r, !0)
                        }
                        this._changed()
                    }
                },
                statics: {
                    _types: e,
                    random: function() {
                        var t = Math.random;
                        return new R(t(), t(), t())
                    },
                    _setOwner: function(t, e, n) {
                        return t && (t._owner && e && t._owner !== e && (t = t.clone()), !t._owner ^ !e && (t._owner = e || null, t._setter = n || null)), t
                    }
                }
            })
        }, new function() {
            return r.each({
                add: function(t, e) {
                    return t + e
                },
                subtract: function(t, e) {
                    return t - e
                },
                multiply: function(t, e) {
                    return t * e
                },
                divide: function(t, e) {
                    return t / e
                }
            }, (function(t, e) {
                this[e] = function(e) {
                    e = R.read(arguments);
                    for (var n = this._type, i = this._components, r = e._convert(n), s = 0, a = i.length; s < a; s++) r[s] = t(i[s], r[s]);
                    return new R(n, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null)
                }
            }), {})
        }),
        q = r.extend({
            _class: "Gradient",
            initialize: function(t, e) {
                this._id = c.get(), t && r.isPlainObject(t) && (this.set(t), t = e = null), null == this._stops && this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1)
            },
            _serialize: function(t, e) {
                return e.add(this, (function() {
                    return r.serialize([this._stops, this._radial], t, !0, e)
                }))
            },
            _changed: function() {
                for (var t = 0, e = this._owners && this._owners.length; t < e; t++) this._owners[t]._changed()
            },
            _addOwner: function(t) {
                this._owners || (this._owners = []), this._owners.push(t)
            },
            _removeOwner: function(t) {
                var n = this._owners ? this._owners.indexOf(t) : -1; - 1 != n && (this._owners.splice(n, 1), this._owners.length || (this._owners = e))
            },
            clone: function() {
                for (var t = [], e = 0, n = this._stops.length; e < n; e++) t[e] = this._stops[e].clone();
                return new q(t, this._radial)
            },
            getStops: function() {
                return this._stops
            },
            setStops: function(t) {
                if (t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
                var n = this._stops;
                if (n)
                    for (var i = 0, r = n.length; i < r; i++) n[i]._owner = e;
                for (i = 0, r = (n = this._stops = V.readList(t, 0, {
                        clone: !0
                    })).length; i < r; i++) n[i]._owner = this;
                this._changed()
            },
            getRadial: function() {
                return this._radial
            },
            setRadial: function(t) {
                this._radial = t, this._changed()
            },
            equals: function(t) {
                if (t === this) return !0;
                if (t && this._class === t._class) {
                    var e = this._stops,
                        n = t._stops,
                        i = e.length;
                    if (i === n.length) {
                        for (var r = 0; r < i; r++)
                            if (!e[r].equals(n[r])) return !1;
                        return !0
                    }
                }
                return !1
            }
        }),
        V = r.extend({
            _class: "GradientStop",
            initialize: function(t, n) {
                var i = t,
                    r = n;
                "object" == typeof t && n === e && (Array.isArray(t) && "number" != typeof t[0] ? (i = t[0], r = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (i = t.color, r = t.offset || t.rampPoint || 0)), this.setColor(i), this.setOffset(r)
            },
            clone: function() {
                return new V(this._color.clone(), this._offset)
            },
            _serialize: function(t, e) {
                var n = this._color,
                    i = this._offset;
                return r.serialize(null == i ? [n] : [n, i], t, !0, e)
            },
            _changed: function() {
                this._owner && this._owner._changed(129)
            },
            getOffset: function() {
                return this._offset
            },
            setOffset: function(t) {
                this._offset = t, this._changed()
            },
            getRampPoint: "#getOffset",
            setRampPoint: "#setOffset",
            getColor: function() {
                return this._color
            },
            setColor: function() {
                R._setOwner(this._color, null), this._color = R._setOwner(R.read(arguments, 0), this, "setColor"), this._changed()
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1
            }
        }),
        H = r.extend(new function() {
            var t = {
                    fillColor: null,
                    fillRule: "nonzero",
                    strokeColor: null,
                    strokeWidth: 1,
                    strokeCap: "butt",
                    strokeJoin: "miter",
                    strokeScaling: !0,
                    miterLimit: 10,
                    dashOffset: 0,
                    dashArray: [],
                    shadowColor: null,
                    shadowBlur: 0,
                    shadowOffset: new f,
                    selectedColor: null
                },
                n = r.set({}, t, {
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    fontSize: 12,
                    leading: null,
                    justification: "left"
                }),
                i = r.set({}, n, {
                    fillColor: new R
                }),
                s = {
                    strokeWidth: 193,
                    strokeCap: 193,
                    strokeJoin: 193,
                    strokeScaling: 201,
                    miterLimit: 193,
                    fontFamily: 9,
                    fontWeight: 9,
                    fontSize: 9,
                    font: 9,
                    leading: 9,
                    justification: 9
                },
                a = {
                    beans: !0
                },
                o = {
                    _class: "Style",
                    beans: !0,
                    initialize: function(e, r, s) {
                        this._values = {}, this._owner = r, this._project = r && r._project || s || st.project, this._defaults = !r || r instanceof b ? n : r instanceof D ? i : t, e && this.set(e)
                    }
                };
            return r.each(n, (function(t, n) {
                var i = /Color$/.test(n),
                    h = "shadowOffset" === n,
                    u = r.capitalize(n),
                    l = s[n],
                    c = "set" + u,
                    d = "get" + u;
                o[c] = function(t) {
                    var e = this._owner,
                        r = e && e._children,
                        s = r && r.length > 0 && !(e instanceof B);
                    if (s)
                        for (var a = 0, o = r.length; a < o; a++) r[a]._style[c](t);
                    if (("selectedColor" === n || !s) && n in this._defaults) {
                        var h = this._values[n];
                        h !== t && (i && (h && (R._setOwner(h, null), h._canvasStyle = null), t && t.constructor === R && (t = R._setOwner(t, e, s && c))), this._values[n] = t, e && e._changed(l || 129))
                    }
                }, o[d] = function(t) {
                    var s = this._owner,
                        a = s && s._children,
                        o = a && a.length > 0 && !(s instanceof B);
                    if (o && !t)
                        for (var u = 0, l = a.length; u < l; u++) {
                            var _ = a[u]._style[d]();
                            if (u) {
                                if (!r.equals(g, _)) return e
                            } else g = _
                        } else if (n in this._defaults) {
                            var g;
                            if ((g = this._values[n]) === e)(g = this._defaults[n]) && g.clone && (g = g.clone());
                            else {
                                var v = i ? R : h ? f : null;
                                !v || g && g.constructor === v || (this._values[n] = g = v.read([g], 0, {
                                    readNull: !0,
                                    clone: !0
                                }))
                            }
                        } return g && i && (g = R._setOwner(g, s, o && c)), g
                }, a[d] = function(t) {
                    return this._style[d](t)
                }, a[c] = function(t) {
                    this._style[c](t)
                }
            })), r.each({
                Font: "FontFamily",
                WindingRule: "FillRule"
            }, (function(t, e) {
                var n = "get" + e,
                    i = "set" + e;
                o[n] = a[n] = "#get" + t, o[i] = a[i] = "#set" + t
            })), x.inject(a), o
        }, {
            set: function(t) {
                var e = t instanceof H,
                    n = e ? t._values : t;
                if (n)
                    for (var i in n)
                        if (i in this._defaults) {
                            var r = n[i];
                            this[i] = r && e && r.clone ? r.clone() : r
                        }
            },
            equals: function(t) {
                function n(t, n, i) {
                    var s = t._values,
                        a = n._values,
                        o = n._defaults;
                    for (var h in s) {
                        var u = s[h],
                            l = a[h];
                        if (!(i && h in a || r.equals(u, l === e ? o[h] : l))) return !1
                    }
                    return !0
                }
                return t === this || t && this._class === t._class && n(this, t) && n(t, this, !0) || !1
            },
            _dispose: function() {
                var t;
                (t = this.getFillColor()) && (t._canvasStyle = null), (t = this.getStrokeColor()) && (t._canvasStyle = null), (t = this.getShadowColor()) && (t._canvasStyle = null)
            },
            hasFill: function() {
                var t = this.getFillColor();
                return !!t && t.alpha > 0
            },
            hasStroke: function() {
                var t = this.getStrokeColor();
                return !!t && t.alpha > 0 && this.getStrokeWidth() > 0
            },
            hasShadow: function() {
                var t = this.getShadowColor();
                return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero())
            },
            getView: function() {
                return this._project._view
            },
            getFontStyle: function() {
                var t = this.getFontSize();
                return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
            },
            getFont: "#getFontFamily",
            setFont: "#setFontFamily",
            getLeading: function t() {
                var e = t.base.call(this),
                    n = this.getFontSize();
                return /pt|em|%|px/.test(n) && (n = this.getView().getPixelSize(n)), null != e ? e : 1.2 * n
            }
        }),
        Z = new function() {
            function t(t, e, n, i) {
                for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), a = 0; a < 6; a++) {
                    var o = r[a],
                        h = o ? o + s : e;
                    if (h in t) {
                        if (!n) return t[h];
                        t[h] = i;
                        break
                    }
                }
            }
            return {
                getStyles: function(t) {
                    var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                        n = e && e.defaultView;
                    return n && n.getComputedStyle(t, "")
                },
                getBounds: function(t, e) {
                    var n, i = t.ownerDocument,
                        r = i.body,
                        s = i.documentElement;
                    try {
                        n = t.getBoundingClientRect()
                    } catch (t) {
                        n = {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    var a = n.left - (s.clientLeft || r.clientLeft || 0),
                        o = n.top - (s.clientTop || r.clientTop || 0);
                    if (!e) {
                        var h = i.defaultView;
                        a += h.pageXOffset || s.scrollLeft || r.scrollLeft, o += h.pageYOffset || s.scrollTop || r.scrollTop
                    }
                    return new v(a, o, n.width, n.height)
                },
                getViewportBounds: function(t) {
                    var e = t.ownerDocument,
                        n = e.defaultView,
                        i = e.documentElement;
                    return new v(0, 0, n.innerWidth || i.clientWidth, n.innerHeight || i.clientHeight)
                },
                getOffset: function(t, e) {
                    return Z.getBounds(t, e).getPoint()
                },
                getSize: function(t) {
                    return Z.getBounds(t, !0).getSize()
                },
                isInvisible: function(t) {
                    return Z.getSize(t).equals(new _(0, 0))
                },
                isInView: function(t) {
                    return !Z.isInvisible(t) && Z.getViewportBounds(t).intersects(Z.getBounds(t, !0))
                },
                isInserted: function(t) {
                    return i.body.contains(t)
                },
                getPrefixed: function(e, n) {
                    return e && t(e, n)
                },
                setPrefixed: function(e, n, i) {
                    if ("object" == typeof n)
                        for (var r in n) t(e, r, !0, n[r]);
                    else t(e, n, !0, i)
                }
            }
        },
        U = {
            add: function(t, e) {
                if (t)
                    for (var n in e)
                        for (var r = e[n], s = n.split(/[\s,]+/g), a = 0, o = s.length; a < o; a++) {
                            var h = s[a],
                                u = t === i && ("touchstart" === h || "touchmove" === h) && {
                                    passive: !1
                                };
                            t.addEventListener(h, r, u)
                        }
            },
            remove: function(t, e) {
                if (t)
                    for (var n in e)
                        for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.removeEventListener(r[s], i, !1)
            },
            getPoint: function(t) {
                var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
                return new f(e.pageX || e.clientX + i.documentElement.scrollLeft, e.pageY || e.clientY + i.documentElement.scrollTop)
            },
            getTarget: function(t) {
                return t.target || t.srcElement
            },
            getRelatedTarget: function(t) {
                return t.relatedTarget || t.toElement
            },
            getOffset: function(t, e) {
                return U.getPoint(t).subtract(Z.getOffset(e || U.getTarget(t)))
            }
        };
    U.requestAnimationFrame = new function() {
        var t, e = Z.getPrefixed(n, "requestAnimationFrame"),
            i = !1,
            r = [];

        function s() {
            var t = r;
            r = [];
            for (var n = 0, a = t.length; n < a; n++) t[n]();
            (i = e && r.length) && e(s)
        }
        return function(n) {
            r.push(n), e ? i || (e(s), i = !0) : t || (t = setInterval(s, 1e3 / 60))
        }
    };
    var W = r.extend(s, {
            _class: "View",
            initialize: function t(e, r) {
                function s(t) {
                    return r[t] || parseInt(r.getAttribute(t), 10)
                }

                function o() {
                    var t = Z.getSize(r);
                    return t.isNaN() || t.isZero() ? new _(s("width"), s("height")) : t
                }
                var h;
                if (n && r) {
                    this._id = r.getAttribute("id"), null == this._id && r.setAttribute("id", this._id = "paper-view-" + t._id++), U.add(r, this._viewEvents);
                    var u = "none";
                    if (Z.setPrefixed(r.style, {
                            userDrag: u,
                            userSelect: u,
                            touchCallout: u,
                            contentZooming: u,
                            tapHighlightColor: "rgba(0,0,0,0)"
                        }), a.hasAttribute(r, "resize")) {
                        var l = this;
                        U.add(n, this._windowEvents = {
                            resize: function() {
                                l.setViewSize(o())
                            }
                        })
                    }
                    if (h = o(), a.hasAttribute(r, "stats") && "undefined" != typeof Stats) {
                        this._stats = new Stats;
                        var c = this._stats.domElement,
                            f = c.style,
                            d = Z.getOffset(r);
                        f.position = "absolute", f.left = d.x + "px", f.top = d.y + "px", i.body.appendChild(c)
                    }
                } else h = new _(r), r = null;
                this._project = e, this._scope = e._scope, this._element = r, this._pixelRatio || (this._pixelRatio = n && n.devicePixelRatio || 1), this._setElementSize(h.width, h.height), this._viewSize = h, t._views.push(this), t._viewsById[this._id] = this, (this._matrix = new m)._owner = this, t._focused || (t._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = {
                    native: {},
                    virtual: {}
                }, this._autoUpdate = !st.agent.node, this._needsUpdate = !1
            },
            remove: function() {
                if (!this._project) return !1;
                W._focused === this && (W._focused = null), W._views.splice(W._views.indexOf(this), 1), delete W._viewsById[this._id];
                var t = this._project;
                return t._view === this && (t._view = null), U.remove(this._element, this._viewEvents), U.remove(n, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0
            },
            _events: r.each(x._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), (function(t) {
                this[t] = {}
            }), {
                onFrame: {
                    install: function() {
                        this.play()
                    },
                    uninstall: function() {
                        this.pause()
                    }
                }
            }),
            _animate: !1,
            _time: 0,
            _count: 0,
            getAutoUpdate: function() {
                return this._autoUpdate
            },
            setAutoUpdate: function(t) {
                this._autoUpdate = t, t && this.requestUpdate()
            },
            update: function() {},
            draw: function() {
                this.update()
            },
            requestUpdate: function() {
                if (!this._requested) {
                    var t = this;
                    U.requestAnimationFrame((function() {
                        if (t._requested = !1, t._animate) {
                            t.requestUpdate();
                            var e = t._element;
                            Z.getPrefixed(i, "hidden") && "true" !== a.getAttribute(e, "keepalive") || !Z.isInView(e) || t._handleFrame()
                        }
                        t._autoUpdate && t.update()
                    })), this._requested = !0
                }
            },
            play: function() {
                this._animate = !0, this.requestUpdate()
            },
            pause: function() {
                this._animate = !1
            },
            _handleFrame: function() {
                st = this._scope;
                var t = Date.now() / 1e3,
                    e = this._last ? t - this._last : 0;
                this._last = t, this.emit("frame", new r({
                    delta: e,
                    time: this._time += e,
                    count: this._count++
                })), this._stats && this._stats.update()
            },
            _animateItem: function(t, e) {
                var n = this._frameItems;
                e ? (n[t._id] = {
                    item: t,
                    time: 0,
                    count: 0
                }, 1 == ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete n[t._id], 0 == --this._frameItemCount && this.off("frame", this._handleFrameItems))
            },
            _handleFrameItems: function(t) {
                for (var e in this._frameItems) {
                    var n = this._frameItems[e];
                    n.item.emit("frame", new r(t, {
                        time: n.time += t.delta,
                        count: n.count++
                    }))
                }
            },
            _changed: function() {
                this._project._changed(4097), this._bounds = this._decomposed = e
            },
            getElement: function() {
                return this._element
            },
            getPixelRatio: function() {
                return this._pixelRatio
            },
            getResolution: function() {
                return 72 * this._pixelRatio
            },
            getViewSize: function() {
                var t = this._viewSize;
                return new g(t.width, t.height, this, "setViewSize")
            },
            setViewSize: function() {
                var t = _.read(arguments),
                    e = t.subtract(this._viewSize);
                e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", {
                    size: t,
                    delta: e
                }), this._autoUpdate && this.update())
            },
            _setElementSize: function(t, e) {
                var n = this._element;
                n && (n.width !== t && (n.width = t), n.height !== e && (n.height = e))
            },
            getBounds: function() {
                return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new v(new f, this._viewSize))), this._bounds
            },
            getSize: function() {
                return this.getBounds().getSize()
            },
            isVisible: function() {
                return Z.isInView(this._element)
            },
            isInserted: function() {
                return Z.isInserted(this._element)
            },
            getPixelSize: function(t) {
                var e, n = this._element;
                if (n) {
                    var r = n.parentNode,
                        s = i.createElement("div");
                    s.style.fontSize = t, r.appendChild(s), e = parseFloat(Z.getStyles(s).fontSize), r.removeChild(s)
                } else e = parseFloat(e);
                return e
            },
            getTextWidth: function(t, e) {
                return 0
            }
        }, r.each(["rotate", "scale", "shear", "skew"], (function(t) {
            var e = "rotate" === t;
            this[t] = function() {
                var n = arguments,
                    i = (e ? r : f).read(n),
                    s = f.read(n, 0, {
                        readNull: !0
                    });
                return this.transform((new m)[t](i, s || this.getCenter(!0)))
            }
        }), {
            _decompose: function() {
                return this._decomposed || (this._decomposed = this._matrix.decompose())
            },
            translate: function() {
                var t = new m;
                return this.transform(t.translate.apply(t, arguments))
            },
            getCenter: function() {
                return this.getBounds().getCenter()
            },
            setCenter: function() {
                var t = f.read(arguments);
                this.translate(this.getCenter().subtract(t))
            },
            getZoom: function() {
                var t = this._decompose().scaling;
                return (t.x + t.y) / 2
            },
            setZoom: function(t) {
                this.transform((new m).scale(t / this.getZoom(), this.getCenter()))
            },
            getRotation: function() {
                return this._decompose().rotation
            },
            setRotation: function(t) {
                var e = this.getRotation();
                null != e && null != t && this.rotate(t - e)
            },
            getScaling: function() {
                var t = this._decompose().scaling;
                return new d(t.x, t.y, this, "setScaling")
            },
            setScaling: function() {
                var t = this.getScaling(),
                    e = f.read(arguments, 0, {
                        clone: !0,
                        readNull: !0
                    });
                t && e && this.scale(e.x / t.x, e.y / t.y)
            },
            getMatrix: function() {
                return this._matrix
            },
            setMatrix: function() {
                var t = this._matrix;
                t.set.apply(t, arguments)
            },
            transform: function(t) {
                this._matrix.append(t)
            },
            scrollBy: function() {
                this.translate(f.read(arguments).negate())
            }
        }), {
            projectToView: function() {
                return this._matrix._transformPoint(f.read(arguments))
            },
            viewToProject: function() {
                return this._matrix._inverseTransform(f.read(arguments))
            },
            getEventPoint: function(t) {
                return this.viewToProject(U.getOffset(t, this._element))
            }
        }, {
            statics: {
                _views: [],
                _viewsById: {},
                _id: 0,
                create: function(t, e) {
                    return i && "string" == typeof e && (e = i.getElementById(e)), new(n ? G : W)(t, e)
                }
            }
        }, new function() {
            if (n) {
                var t, e, r, s, a, o = !1,
                    h = !1,
                    u = n.navigator;
                u.pointerEnabled || u.msPointerEnabled ? (r = "pointerdown MSPointerDown", s = "pointermove MSPointerMove", a = "pointerup pointercancel MSPointerUp MSPointerCancel") : (r = "touchstart", s = "touchmove", a = "touchend touchcancel", "ontouchstart" in n && u.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (r += " mousedown", s += " mousemove", a += " mouseup"));
                var l = {},
                    c = {
                        mouseout: function(t) {
                            var e = W._focused,
                                n = U.getRelatedTarget(t);
                            if (e && (!n || "HTML" === n.nodeName)) {
                                var i = U.getOffset(t, e._element),
                                    r = i.x,
                                    s = Math.abs,
                                    a = s(r),
                                    o = a - (1 << 25);
                                i.x = s(o) < a ? o * (r < 0 ? -1 : 1) : r, M(e, t, e.viewToProject(i))
                            }
                        },
                        scroll: I
                    };
                l[r] = function(t) {
                    var e = W._focused = P(t);
                    o || (o = !0, e._handleMouseEvent("mousedown", t))
                }, c[s] = function(n) {
                    var i = W._focused;
                    if (!h) {
                        var r = P(n);
                        r ? i !== r && (i && M(i, n), t || (t = i), i = W._focused = e = r) : e && e === i && (t && !t.isInserted() && (t = null), i = W._focused = t, t = null, I())
                    }
                    i && M(i, n)
                }, c[r] = function() {
                    h = !0
                }, c[a] = function(t) {
                    var e = W._focused;
                    e && o && e._handleMouseEvent("mouseup", t), h = o = !1
                }, U.add(i, c), U.add(n, {
                    load: I
                });
                var f, d, _, g, v, p, m, y, w = !1,
                    x = !1,
                    b = {
                        doubleclick: "click",
                        mousedrag: "mousemove"
                    },
                    C = !1,
                    S = {
                        mousedown: {
                            mousedown: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mouseup: {
                            mouseup: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mousemove: {
                            mousedrag: 1,
                            mousemove: 1,
                            mouseenter: 1,
                            mouseleave: 1
                        }
                    };
                return {
                    _viewEvents: l,
                    _handleMouseEvent: function(t, e, n) {
                        var i = this._itemEvents,
                            r = i.native[t],
                            s = "mousemove" === t,
                            a = this._scope.tool,
                            h = this;

                        function u(t) {
                            return i.virtual[t] || h.responds(t) || a && a.responds(t)
                        }
                        s && o && u("mousedrag") && (t = "mousedrag"), n || (n = this.getEventPoint(e));
                        var l = this.getBounds().contains(n),
                            c = r && l && h._project.hitTest(n, {
                                tolerance: 0,
                                fill: !0,
                                stroke: !0
                            }),
                            b = c && c.item || null,
                            S = !1,
                            P = {};
                        if (P[t.substr(5)] = !0, r && b !== g && (g && T(g, null, "mouseleave", e, n), b && T(b, null, "mouseenter", e, n), g = b), C ^ l && (T(this, null, l ? "mouseenter" : "mouseleave", e, n), l ? this : null, S = !0), !l && !P.drag || n.equals(d) || (O(this, b, s ? t : "mousemove", e, n, d), S = !0), C = l, P.down && l || P.up && f) {
                            if (O(this, b, t, e, n, f), P.down) {
                                if (y = b === p && Date.now() - m < 300, _ = p = b, !x && b) {
                                    for (var I = b; I && !I.responds("mousedrag");) I = I._parent;
                                    I && (v = b)
                                }
                                f = n
                            } else P.up && (x || b !== _ || (m = Date.now(), O(this, b, y ? "doubleclick" : "click", e, n, f), y = !1), _ = v = null);
                            C = !1, S = !0
                        }
                        d = n, S && a && (w = a._handleMouseEvent(t, e, n, P) || w), !1 !== e.cancelable && (w && !P.move || P.down && u("mouseup")) && e.preventDefault()
                    },
                    _handleKeyEvent: function(t, e, n, i) {
                        var r, s = this._scope,
                            a = s.tool;

                        function o(a) {
                            a.responds(t) && (st = s, a.emit(t, r = r || new J(t, e, n, i)))
                        }
                        this.isVisible() && (o(this), a && a.responds(t) && o(a))
                    },
                    _countItemEvent: function(t, e) {
                        var n = this._itemEvents,
                            i = n.native,
                            r = n.virtual;
                        for (var s in S) i[s] = (i[s] || 0) + (S[s][t] || 0) * e;
                        r[t] = (r[t] || 0) + e
                    },
                    statics: {
                        updateFocus: I,
                        _resetState: function() {
                            o = h = w = C = !1, t = e = f = d = _ = g = v = p = m = y = null
                        }
                    }
                }
            }

            function P(t) {
                var e = U.getTarget(t);
                return e.getAttribute && W._viewsById[e.getAttribute("id")]
            }

            function I() {
                var t = W._focused;
                if (!t || !t.isVisible())
                    for (var n = 0, i = W._views.length; n < i; n++)
                        if ((t = W._views[n]).isVisible()) {
                            W._focused = e = t;
                            break
                        }
            }

            function M(t, e, n) {
                t._handleMouseEvent("mousemove", e, n)
            }

            function T(t, e, n, i, r, s, a) {
                var o, h = !1;

                function u(t, n) {
                    if (t.responds(n)) {
                        if (o || (o = new Q(n, i, r, e || t, s ? r.subtract(s) : null)), t.emit(n, o) && (w = !0, o.prevented && (x = !0), o.stopped)) return h = !0
                    } else {
                        var a = b[n];
                        if (a) return u(t, a)
                    }
                }
                for (; t && t !== a && !u(t, n);) t = t._parent;
                return h
            }

            function O(t, e, n, i, r, s) {
                return t._project.removeOn(n), x = w = !1, v && T(v, null, n, i, r, s) || e && e !== v && !e.isDescendant(v) && T(e, null, "mousedrag" === n ? "mousemove" : n, i, r, s, v) || T(t, v || e || t, n, i, r, s)
            }
        }),
        G = W.extend({
            _class: "CanvasView",
            initialize: function(t, e) {
                if (!(e instanceof n.HTMLCanvasElement)) {
                    var i = _.read(arguments, 1);
                    if (i.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + r.slice(arguments, 1));
                    e = et.getCanvas(i)
                }
                var s = this._context = e.getContext("2d");
                if (s.save(), this._pixelRatio = 1, !/^off|false$/.test(a.getAttribute(e, "hidpi"))) {
                    var o = n.devicePixelRatio || 1,
                        h = Z.getPrefixed(s, "backingStorePixelRatio") || 1;
                    this._pixelRatio = o / h
                }
                W.call(this, t, e), this._needsUpdate = !0
            },
            remove: function t() {
                return this._context.restore(), t.base.call(this)
            },
            _setElementSize: function t(e, n) {
                var i = this._pixelRatio;
                if (t.base.call(this, e * i, n * i), 1 !== i) {
                    var r = this._element,
                        s = this._context;
                    if (!a.hasAttribute(r, "resize")) {
                        var o = r.style;
                        o.width = e + "px", o.height = n + "px"
                    }
                    s.restore(), s.save(), s.scale(i, i)
                }
            },
            getContext: function() {
                return this._context
            },
            getPixelSize: function t(e) {
                var n, i = st.agent;
                if (i && i.firefox) n = t.base.call(this, e);
                else {
                    var r = this._context,
                        s = r.font;
                    r.font = e + " serif", n = parseFloat(r.font), r.font = s
                }
                return n
            },
            getTextWidth: function(t, e) {
                var n = this._context,
                    i = n.font,
                    r = 0;
                n.font = t;
                for (var s = 0, a = e.length; s < a; s++) r = Math.max(r, n.measureText(e[s]).width);
                return n.font = i, r
            },
            update: function() {
                if (!this._needsUpdate) return !1;
                var t = this._project,
                    e = this._context,
                    n = this._viewSize;
                return e.clearRect(0, 0, n.width + 1, n.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0
            }
        }),
        $ = r.extend({
            _class: "Event",
            initialize: function(t) {
                this.event = t, this.type = t && t.type
            },
            prevented: !1,
            stopped: !1,
            preventDefault: function() {
                this.prevented = !0, this.event.preventDefault()
            },
            stopPropagation: function() {
                this.stopped = !0, this.event.stopPropagation()
            },
            stop: function() {
                this.stopPropagation(), this.preventDefault()
            },
            getTimeStamp: function() {
                return this.event.timeStamp
            },
            getModifiers: function() {
                return K.modifiers
            }
        }),
        J = $.extend({
            _class: "KeyEvent",
            initialize: function(t, e, n, i) {
                this.type = t, this.event = e, this.key = n, this.character = i
            },
            toString: function() {
                return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }"
            }
        }),
        K = new function() {
            var t, s, a = {
                    "\t": "tab",
                    " ": "space",
                    "\b": "backspace",
                    "": "delete",
                    Spacebar: "space",
                    Del: "delete",
                    Win: "meta",
                    Esc: "escape"
                },
                o = {
                    tab: "\t",
                    space: " ",
                    enter: "\r"
                },
                h = {},
                u = {},
                l = new r({
                    shift: !1,
                    control: !1,
                    alt: !1,
                    meta: !1,
                    capsLock: !1,
                    space: !1
                }).inject({
                    option: {
                        get: function() {
                            return this.alt
                        }
                    },
                    command: {
                        get: function() {
                            var t = st && st.agent;
                            return t && t.mac ? this.meta : this.control
                        }
                    }
                });

            function c(t) {
                var n = t.key || t.keyIdentifier;
                return n = /^U\+/.test(n) ? String.fromCharCode(parseInt(n.substr(2), 16)) : /^Arrow[A-Z]/.test(n) ? n.substr(5) : "Unidentified" === n || n === e ? String.fromCharCode(t.keyCode) : n, a[n] || (n.length > 1 ? r.hyphenate(n) : n.toLowerCase())
            }

            function f(e, n, i, s) {
                var a, o = W._focused;
                if (h[n] = e, e ? u[n] = i : delete u[n], n.length > 1 && (a = r.camelize(n)) in l) {
                    l[a] = e;
                    var c = st && st.agent;
                    if ("meta" === a && c && c.mac)
                        if (e) t = {};
                        else {
                            for (var d in t) d in u && f(!1, d, t[d], s);
                            t = null
                        }
                } else e && t && (t[n] = i);
                o && o._handleKeyEvent(e ? "keydown" : "keyup", s, n, i)
            }
            return U.add(i, {
                keydown: function(t) {
                    var e = c(t),
                        n = st && st.agent;
                    e.length > 1 || n && n.chrome && (t.altKey || n.mac && t.metaKey || !n.mac && t.ctrlKey) ? f(!0, e, o[e] || (e.length > 1 ? "" : e), t) : s = e
                },
                keypress: function(t) {
                    if (s) {
                        var e = c(t),
                            n = t.charCode,
                            i = n >= 32 ? String.fromCharCode(n) : e.length > 1 ? "" : e;
                        e !== s && (e = i.toLowerCase()), f(!0, e, i, t), s = null
                    }
                },
                keyup: function(t) {
                    var e = c(t);
                    e in u && f(!1, e, u[e], t)
                }
            }), U.add(n, {
                blur: function(t) {
                    for (var e in u) f(!1, e, u[e], t)
                }
            }), {
                modifiers: l,
                isDown: function(t) {
                    return !!h[t]
                }
            }
        },
        Q = $.extend({
            _class: "MouseEvent",
            initialize: function(t, e, n, i, r) {
                this.type = t, this.event = e, this.point = n, this.target = i, this.delta = r
            },
            toString: function() {
                return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }"
            }
        }),
        X = $.extend({
            _class: "ToolEvent",
            _item: null,
            initialize: function(t, e, n) {
                this.tool = t, this.type = e, this.event = n
            },
            _choosePoint: function(t, e) {
                return t || (e ? e.clone() : null)
            },
            getPoint: function() {
                return this._choosePoint(this._point, this.tool._point)
            },
            setPoint: function(t) {
                this._point = t
            },
            getLastPoint: function() {
                return this._choosePoint(this._lastPoint, this.tool._lastPoint)
            },
            setLastPoint: function(t) {
                this._lastPoint = t
            },
            getDownPoint: function() {
                return this._choosePoint(this._downPoint, this.tool._downPoint)
            },
            setDownPoint: function(t) {
                this._downPoint = t
            },
            getMiddlePoint: function() {
                return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint
            },
            setMiddlePoint: function(t) {
                this._middlePoint = t
            },
            getDelta: function() {
                return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta
            },
            setDelta: function(t) {
                this._delta = t
            },
            getCount: function() {
                return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"]
            },
            setCount: function(t) {
                this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t
            },
            getItem: function() {
                if (!this._item) {
                    var t = this.tool._scope.project.hitTest(this.getPoint());
                    if (t) {
                        for (var e = t.item, n = e._parent;
                            /^(Group|CompoundPath)$/.test(n._class);) e = n, n = n._parent;
                        this._item = e
                    }
                }
                return this._item
            },
            setItem: function(t) {
                this._item = t
            },
            toString: function() {
                return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }"
            }
        }),
        Y = (o.extend({
            _class: "Tool",
            _list: "tools",
            _reference: "tool",
            _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"],
            initialize: function(t) {
                o.call(this), this._moveCount = -1, this._downCount = -1, this.set(t)
            },
            getMinDistance: function() {
                return this._minDistance
            },
            setMinDistance: function(t) {
                this._minDistance = t, null != t && null != this._maxDistance && t > this._maxDistance && (this._maxDistance = t)
            },
            getMaxDistance: function() {
                return this._maxDistance
            },
            setMaxDistance: function(t) {
                this._maxDistance = t, null != this._minDistance && null != t && t < this._minDistance && (this._minDistance = t)
            },
            getFixedDistance: function() {
                return this._minDistance == this._maxDistance ? this._minDistance : null
            },
            setFixedDistance: function(t) {
                this._minDistance = this._maxDistance = t
            },
            _handleMouseEvent: function(t, e, n, i) {
                st = this._scope, i.drag && !this.responds(t) && (t = "mousemove");
                var r = i.move || i.drag,
                    s = this.responds(t),
                    a = this.minDistance,
                    o = this.maxDistance,
                    h = !1,
                    u = this;

                function l(t, e) {
                    var s = n,
                        a = r ? u._point : u._downPoint || s;
                    if (r) {
                        if (u._moveCount >= 0 && s.equals(a)) return !1;
                        if (a && (null != t || null != e)) {
                            var o = s.subtract(a),
                                h = o.getLength();
                            if (h < (t || 0)) return !1;
                            e && (s = a.add(o.normalize(Math.min(h, e))))
                        }
                        u._moveCount++
                    }
                    return u._point = s, u._lastPoint = a || s, i.down && (u._moveCount = -1, u._downPoint = s, u._downCount++), !0
                }

                function c() {
                    s && (h = u.emit(t, new X(u, t, e)) || h)
                }
                if (i.down) l(), c();
                else if (i.up) l(null, o), c();
                else if (s)
                    for (; l(a, o);) c();
                return h
            }
        }), r.extend(s, {
            _class: "Tween",
            statics: {
                easings: new r({
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return t * (2 - t)
                    },
                    easeInOutQuad: function(t) {
                        return t < .5 ? 2 * t * t : 2 * (2 - t) * t - 1
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return --t * t * t + 1
                    },
                    easeInOutCubic: function(t) {
                        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return 1 - --t * t * t * t
                    },
                    easeInOutQuart: function(t) {
                        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
                    },
                    easeInQuint: function(t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return 1 + --t * t * t * t * t
                    },
                    easeInOutQuint: function(t) {
                        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
                    }
                })
            },
            initialize: function t(e, n, i, r, s, a) {
                this.object = e;
                var o = typeof s,
                    h = "function" === o;
                this.type = h ? o : "string" === o ? s : "linear", this.easing = h ? s : t.easings[this.type], this.duration = r, this.running = !1, this._then = null, this._startTime = null;
                var u = n || i;
                this._keys = u ? Object.keys(u) : [], this._parsedKeys = this._parseKeys(this._keys), this._from = u && this._getState(n), this._to = u && this._getState(i), !1 !== a && this.start()
            },
            then: function(t) {
                return this._then = t, this
            },
            start: function() {
                return this._startTime = null, this.running = !0, this
            },
            stop: function() {
                return this.running = !1, this
            },
            update: function(t) {
                if (this.running) {
                    t >= 1 && (t = 1, this.running = !1);
                    for (var e = this.easing(t), n = this._keys, i = function(n) {
                            return "function" == typeof n ? n(e, t) : n
                        }, s = 0, a = n && n.length; s < a; s++) {
                        var o = n[s],
                            h = i(this._from[o]),
                            u = i(this._to[o]),
                            l = h && u && h.__add && u.__add ? u.__subtract(h).__multiply(e).__add(h) : (u - h) * e + h;
                        this._setProperty(this._parsedKeys[o], l)
                    }
                    this.responds("update") && this.emit("update", new r({
                        progress: t,
                        factor: e
                    })), !this.running && this._then && this._then(this.object)
                }
                return this
            },
            _events: {
                onUpdate: {}
            },
            _handleFrame: function(t) {
                var e = this._startTime,
                    n = e ? (t - e) / this.duration : 0;
                e || (this._startTime = t), this.update(n)
            },
            _getState: function(t) {
                for (var e = this._keys, n = {}, i = 0, r = e.length; i < r; i++) {
                    var s, a = e[i],
                        o = this._parsedKeys[a],
                        h = this._getProperty(o);
                    if (t) {
                        var u = this._resolveValue(h, t[a]);
                        this._setProperty(o, u), s = (s = this._getProperty(o)) && s.clone ? s.clone() : s, this._setProperty(o, h)
                    } else s = h && h.clone ? h.clone() : h;
                    n[a] = s
                }
                return n
            },
            _resolveValue: function(t, e) {
                if (e) {
                    if (Array.isArray(e) && 2 === e.length) {
                        var n = e[0];
                        return n && n.match && n.match(/^[+\-\*\/]=/) ? this._calculate(t, n[0], e[1]) : e
                    }
                    if ("string" == typeof e) {
                        var i = e.match(/^[+\-*/]=(.*)/);
                        if (i) {
                            var r = JSON.parse(i[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
                            return this._calculate(t, e[0], r)
                        }
                    }
                }
                return e
            },
            _calculate: function(t, e, n) {
                return st.PaperScript.calculateBinary(t, e, n)
            },
            _parseKeys: function(t) {
                for (var e = {}, n = 0, i = t.length; n < i; n++) {
                    var r = t[n],
                        s = r.replace(/\.([^.]*)/g, "/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
                    e[r] = s.split("/")
                }
                return e
            },
            _getProperty: function(t, e) {
                for (var n = this.object, i = 0, r = t.length - (e || 0); i < r && n; i++) n = n[t[i]];
                return n
            },
            _setProperty: function(t, e) {
                var n = this._getProperty(t, 1);
                n && (n[t[t.length - 1]] = e)
            }
        })),
        tt = function(e) {
            var n = new t.XMLHttpRequest;
            return n.open((e.method || "get").toUpperCase(), e.url, r.pick(e.async, !0)), e.mimeType && n.overrideMimeType(e.mimeType), n.onload = function() {
                var t = n.status;
                0 === t || 200 === t ? e.onLoad && e.onLoad.call(n, n.responseText) : n.onerror()
            }, n.onerror = function() {
                var t = n.status,
                    i = 'Could not load "' + e.url + '" (Status: ' + t + ")";
                if (!e.onError) throw new Error(i);
                e.onError(i, t)
            }, n.send(null)
        },
        et = r.exports.CanvasProvider = {
            canvases: [],
            getCanvas: function(t, e) {
                if (!n) return null;
                var r, s = !0;
                "object" == typeof t && (e = t.height, t = t.width), this.canvases.length ? r = this.canvases.pop() : (r = i.createElement("canvas"), s = !1);
                var a = r.getContext("2d");
                if (!a) throw new Error("Canvas " + r + " is unable to provide a 2D context.");
                return r.width === t && r.height === e ? s && a.clearRect(0, 0, t + 1, e + 1) : (r.width = t, r.height = e), a.save(), r
            },
            getContext: function(t, e) {
                var n = this.getCanvas(t, e);
                return n ? n.getContext("2d") : null
            },
            release: function(t) {
                var e = t && t.canvas ? t.canvas : t;
                e && e.getContext && (e.getContext("2d").restore(), this.canvases.push(e))
            }
        },
        nt = new function() {
            var t, e, n, i, s, a, o, h, u, l, c, f = Math.min,
                d = Math.max,
                _ = Math.abs;

            function g(t, e, n) {
                return .2989 * t + .587 * e + .114 * n
            }

            function v(t, e, n, i) {
                var r = i - g(t, e, n),
                    s = (i = g(u = t + r, l = e + r, c = n + r), f(u, l, c)),
                    a = d(u, l, c);
                if (s < 0) {
                    var o = i - s;
                    u = i + (u - i) * i / o, l = i + (l - i) * i / o, c = i + (c - i) * i / o
                }
                if (a > 255) {
                    var h = 255 - i,
                        _ = a - i;
                    u = i + (u - i) * h / _, l = i + (l - i) * h / _, c = i + (c - i) * h / _
                }
            }

            function p(t, e, n) {
                return d(t, e, n) - f(t, e, n)
            }

            function m(t, e, n, i) {
                var r, s = [t, e, n],
                    a = d(t, e, n),
                    o = f(t, e, n);
                r = 0 === f(o = o === t ? 0 : o === e ? 1 : 2, a = a === t ? 0 : a === e ? 1 : 2) ? 1 === d(o, a) ? 2 : 1 : 0, s[a] > s[o] ? (s[r] = (s[r] - s[o]) * i / (s[a] - s[o]), s[a] = i) : s[r] = s[a] = 0, s[o] = 0, u = s[0], l = s[1], c = s[2]
            }
            var y = {
                    multiply: function() {
                        u = s * t / 255, l = a * e / 255, c = o * n / 255
                    },
                    screen: function() {
                        u = s + t - s * t / 255, l = a + e - a * e / 255, c = o + n - o * n / 255
                    },
                    overlay: function() {
                        u = s < 128 ? 2 * s * t / 255 : 255 - 2 * (255 - s) * (255 - t) / 255, l = a < 128 ? 2 * a * e / 255 : 255 - 2 * (255 - a) * (255 - e) / 255, c = o < 128 ? 2 * o * n / 255 : 255 - 2 * (255 - o) * (255 - n) / 255
                    },
                    "soft-light": function() {
                        var i = t * s / 255;
                        u = i + s * (255 - (255 - s) * (255 - t) / 255 - i) / 255, l = (i = e * a / 255) + a * (255 - (255 - a) * (255 - e) / 255 - i) / 255, c = (i = n * o / 255) + o * (255 - (255 - o) * (255 - n) / 255 - i) / 255
                    },
                    "hard-light": function() {
                        u = t < 128 ? 2 * t * s / 255 : 255 - 2 * (255 - t) * (255 - s) / 255, l = e < 128 ? 2 * e * a / 255 : 255 - 2 * (255 - e) * (255 - a) / 255, c = n < 128 ? 2 * n * o / 255 : 255 - 2 * (255 - n) * (255 - o) / 255
                    },
                    "color-dodge": function() {
                        u = 0 === s ? 0 : 255 === t ? 255 : f(255, 255 * s / (255 - t)), l = 0 === a ? 0 : 255 === e ? 255 : f(255, 255 * a / (255 - e)), c = 0 === o ? 0 : 255 === n ? 255 : f(255, 255 * o / (255 - n))
                    },
                    "color-burn": function() {
                        u = 255 === s ? 255 : 0 === t ? 0 : d(0, 255 - 255 * (255 - s) / t), l = 255 === a ? 255 : 0 === e ? 0 : d(0, 255 - 255 * (255 - a) / e), c = 255 === o ? 255 : 0 === n ? 0 : d(0, 255 - 255 * (255 - o) / n)
                    },
                    darken: function() {
                        u = s < t ? s : t, l = a < e ? a : e, c = o < n ? o : n
                    },
                    lighten: function() {
                        u = s > t ? s : t, l = a > e ? a : e, c = o > n ? o : n
                    },
                    difference: function() {
                        (u = s - t) < 0 && (u = -u), (l = a - e) < 0 && (l = -l), (c = o - n) < 0 && (c = -c)
                    },
                    exclusion: function() {
                        u = s + t * (255 - s - s) / 255, l = a + e * (255 - a - a) / 255, c = o + n * (255 - o - o) / 255
                    },
                    hue: function() {
                        m(t, e, n, p(s, a, o)), v(u, l, c, g(s, a, o))
                    },
                    saturation: function() {
                        m(s, a, o, p(t, e, n)), v(u, l, c, g(s, a, o))
                    },
                    luminosity: function() {
                        v(s, a, o, g(t, e, n))
                    },
                    color: function() {
                        v(t, e, n, g(s, a, o))
                    },
                    add: function() {
                        u = f(s + t, 255), l = f(a + e, 255), c = f(o + n, 255)
                    },
                    subtract: function() {
                        u = d(s - t, 0), l = d(a - e, 0), c = d(o - n, 0)
                    },
                    average: function() {
                        u = (s + t) / 2, l = (a + e) / 2, c = (o + n) / 2
                    },
                    negation: function() {
                        u = 255 - _(255 - t - s), l = 255 - _(255 - e - a), c = 255 - _(255 - n - o)
                    }
                },
                w = this.nativeModes = r.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], (function(t) {
                    this[t] = !0
                }), {}),
                x = et.getContext(1, 1);
            x && (r.each(y, (function(t, e) {
                var n = "darken" === e,
                    i = !1;
                x.save();
                try {
                    x.fillStyle = n ? "#300" : "#a00", x.fillRect(0, 0, 1, 1), x.globalCompositeOperation = e, x.globalCompositeOperation === e && (x.fillStyle = n ? "#a00" : "#300", x.fillRect(0, 0, 1, 1), i = x.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51)
                } catch (t) {}
                x.restore(), w[e] = i
            })), et.release(x)), this.process = function(r, f, d, _, g) {
                var v = f.canvas,
                    p = "normal" === r;
                if (p || w[r]) d.save(), d.setTransform(1, 0, 0, 1, 0, 0), d.globalAlpha = _, p || (d.globalCompositeOperation = r), d.drawImage(v, g.x, g.y), d.restore();
                else {
                    var m = y[r];
                    if (!m) return;
                    for (var x = d.getImageData(g.x, g.y, v.width, v.height), b = x.data, C = f.getImageData(0, 0, v.width, v.height).data, S = 0, P = b.length; S < P; S += 4) {
                        t = C[S], s = b[S], e = C[S + 1], a = b[S + 1], n = C[S + 2], o = b[S + 2], i = C[S + 3], h = b[S + 3], m();
                        var I = i * _ / 255,
                            M = 1 - I;
                        b[S] = I * u + M * s, b[S + 1] = I * l + M * a, b[S + 2] = I * c + M * o, b[S + 3] = i * _ + M * h
                    }
                    d.putImageData(x, g.x, g.y)
                }
            }
        },
        it = new function() {
            var t = "http://www.w3.org/2000/svg",
                e = "http://www.w3.org/2000/xmlns",
                n = "http://www.w3.org/1999/xlink",
                r = {
                    href: n,
                    xlink: e,
                    xmlns: e + "/",
                    "xmlns:xlink": e + "/"
                };

            function s(t, e, n) {
                for (var i in e) {
                    var s = e[i],
                        a = r[i];
                    "number" == typeof s && n && (s = n.number(s)), a ? t.setAttributeNS(a, i, s) : t.setAttribute(i, s)
                }
                return t
            }
            return {
                svg: t,
                xmlns: e,
                xlink: n,
                create: function(e, n, r) {
                    return s(i.createElementNS(t, e), n, r)
                },
                get: function(t, e) {
                    var n = r[e],
                        i = n ? t.getAttributeNS(n, e) : t.getAttribute(e);
                    return "null" === i ? null : i
                },
                set: s
            }
        },
        rt = r.each({
            fillColor: ["fill", "color"],
            fillRule: ["fill-rule", "string"],
            strokeColor: ["stroke", "color"],
            strokeWidth: ["stroke-width", "number"],
            strokeCap: ["stroke-linecap", "string"],
            strokeJoin: ["stroke-linejoin", "string"],
            strokeScaling: ["vector-effect", "lookup", {
                true: "none",
                false: "non-scaling-stroke"
            }, function(t, e) {
                return !e && (t instanceof L || t instanceof S || t instanceof D)
            }],
            miterLimit: ["stroke-miterlimit", "number"],
            dashArray: ["stroke-dasharray", "array"],
            dashOffset: ["stroke-dashoffset", "number"],
            fontFamily: ["font-family", "string"],
            fontWeight: ["font-weight", "string"],
            fontSize: ["font-size", "number"],
            justification: ["text-anchor", "lookup", {
                left: "start",
                center: "middle",
                right: "end"
            }],
            opacity: ["opacity", "number"],
            blendMode: ["mix-blend-mode", "style"]
        }, (function(t, e) {
            var n = r.capitalize(e),
                i = t[2];
            this[e] = {
                type: t[1],
                property: e,
                attribute: t[0],
                toSVG: i,
                fromSVG: i && r.each(i, (function(t, e) {
                    this[t] = e
                }), {}),
                exportFilter: t[3],
                get: "get" + n,
                set: "set" + n
            }
        }), {});
    new function() {
        var e;

        function n(t, n, i) {
            var s, a = new r,
                o = t.getTranslation();
            n && (t.isInvertible() ? (s = (t = t._shiftless())._inverseTransform(o), o = null) : s = new f, a[i ? "cx" : "x"] = s.x, a[i ? "cy" : "y"] = s.y);
            if (!t.isIdentity()) {
                var h = t.decompose();
                if (h) {
                    var u = [],
                        c = h.rotation,
                        d = h.scaling,
                        _ = h.skewing;
                    o && !o.isZero() && u.push("translate(" + e.point(o) + ")"), c && u.push("rotate(" + e.number(c) + ")"), l.isZero(d.x - 1) && l.isZero(d.y - 1) || u.push("scale(" + e.point(d) + ")"), _.x && u.push("skewX(" + e.number(_.x) + ")"), _.y && u.push("skewY(" + e.number(_.y) + ")"), a.transform = u.join(" ")
                } else a.transform = "matrix(" + t.getValues().join(",") + ")"
            }
            return a
        }

        function i(t, i) {
            for (var r = n(t._matrix), s = t._children, a = it.create("g", r, e), o = 0, h = s.length; o < h; o++) {
                var u = s[o],
                    l = p(u, i);
                if (l)
                    if (u.isClipMask()) {
                        var c = it.create("clipPath");
                        c.appendChild(l), _(u, c, "clip"), it.set(a, {
                            "clip-path": "url(#" + c.id + ")"
                        })
                    } else a.appendChild(l)
            }
            return a
        }

        function s(t) {
            var i = t._type,
                r = t._radius,
                s = n(t._matrix, !0, "rectangle" !== i);
            if ("rectangle" === i) {
                i = "rect";
                var a = t._size,
                    o = a.width,
                    h = a.height;
                s.x -= o / 2, s.y -= h / 2, s.width = o, s.height = h, r.isZero() && (r = null)
            }
            return r && ("circle" === i ? s.r = r : (s.rx = r.width, s.ry = r.height)), it.create(i, s, e)
        }
        var a, o = {
            Group: i,
            Layer: i,
            Raster: function(t, i) {
                var r = n(t._matrix, !0),
                    s = t.getSize(),
                    a = t.getImage();
                return r.x -= s.width / 2, r.y -= s.height / 2, r.width = s.width, r.height = s.height, r.href = 0 == i.embedImages && a && a.src || t.toDataURL(), it.create("image", r, e)
            },
            Path: function(t, i) {
                var r = i.matchShapes;
                if (r) {
                    var a = t.toShape(!1);
                    if (a) return s(a)
                }
                var o, h = t._segments,
                    u = h.length,
                    l = n(t._matrix);
                if (r && u >= 2 && !t.hasHandles())
                    if (u > 2) {
                        o = t._closed ? "polygon" : "polyline";
                        for (var c = [], f = 0; f < u; f++) c.push(e.point(h[f]._point));
                        l.points = c.join(" ")
                    } else {
                        o = "line";
                        var d = h[0]._point,
                            _ = h[1]._point;
                        l.set({
                            x1: d.x,
                            y1: d.y,
                            x2: _.x,
                            y2: _.y
                        })
                    }
                else o = "path", l.d = t.getPathData(null, i.precision);
                return it.create(o, l, e)
            },
            Shape: s,
            CompoundPath: function(t, i) {
                var r = n(t._matrix),
                    s = t.getPathData(null, i.precision);
                return s && (r.d = s), it.create("path", r, e)
            },
            SymbolItem: function(t, i) {
                var r = n(t._matrix, !0),
                    s = t._definition,
                    a = d(s, "symbol"),
                    o = s._item,
                    h = o.getStrokeBounds();
                return a || ((a = it.create("symbol", {
                    viewBox: e.rectangle(h)
                })).appendChild(p(o, i)), _(s, a, "symbol")), r.href = "#" + a.id, r.x += h.x, r.y += h.y, r.width = h.width, r.height = h.height, r.overflow = "visible", it.create("use", r, e)
            },
            PointText: function(t) {
                var i = it.create("text", n(t._matrix, !0), e);
                return i.textContent = t._content, i
            }
        };

        function h(t, n, i) {
            var s = {},
                a = !i && t.getParent(),
                o = [];
            return null != t._name && (s.id = t._name), r.each(rt, (function(n) {
                var i = n.get,
                    h = n.type,
                    u = t[i]();
                if (n.exportFilter ? n.exportFilter(t, u) : !a || !r.equals(a[i](), u)) {
                    if ("color" === h && null != u) {
                        var l = u.getAlpha();
                        l < 1 && (s[n.attribute + "-opacity"] = l)
                    }
                    "style" === h ? o.push(n.attribute + ": " + u) : s[n.attribute] = null == u ? "none" : "color" === h ? u.gradient ? function(t) {
                        var n = d(t, "color");
                        if (!n) {
                            var i, r = t.getGradient(),
                                s = r._radial,
                                a = t.getOrigin(),
                                o = t.getDestination();
                            if (s) {
                                i = {
                                    cx: a.x,
                                    cy: a.y,
                                    r: a.getDistance(o)
                                };
                                var h = t.getHighlight();
                                h && (i.fx = h.x, i.fy = h.y)
                            } else i = {
                                x1: a.x,
                                y1: a.y,
                                x2: o.x,
                                y2: o.y
                            };
                            i.gradientUnits = "userSpaceOnUse", n = it.create((s ? "radial" : "linear") + "Gradient", i, e);
                            for (var u = r._stops, l = 0, c = u.length; l < c; l++) {
                                var f = u[l],
                                    g = f._color,
                                    v = g.getAlpha(),
                                    p = f._offset;
                                i = {
                                    offset: null == p ? l / (c - 1) : p
                                }, g && (i["stop-color"] = g.toCSS(!0)), v < 1 && (i["stop-opacity"] = v), n.appendChild(it.create("stop", i, e))
                            }
                            _(t, n, "color")
                        }
                        return "url(#" + n.id + ")"
                    }(u) : u.toCSS(!0) : "array" === h ? u.join(",") : "lookup" === h ? n.toSVG[u] : u
                }
            })), o.length && (s.style = o.join(";")), 1 === s.opacity && delete s.opacity, t._visible || (s.visibility = "hidden"), it.set(n, s, e)
        }

        function d(t, e) {
            return a || (a = {
                ids: {},
                svgs: {}
            }), t && a.svgs[e + "-" + (t._id || t.__id || (t.__id = c.get("svg")))]
        }

        function _(t, e, n) {
            a || d();
            var i = a.ids[n] = (a.ids[n] || 0) + 1;
            e.id = n + "-" + i, a.svgs[n + "-" + (t._id || t.__id)] = e
        }

        function g(e, n) {
            var i = e,
                r = null;
            if (a) {
                for (var s in i = "svg" === e.nodeName.toLowerCase() && e, a.svgs) r || (i || (i = it.create("svg")).appendChild(e), r = i.insertBefore(it.create("defs"), i.firstChild)), r.appendChild(a.svgs[s]);
                a = null
            }
            return n.asString ? (new t.XMLSerializer).serializeToString(i) : i
        }

        function p(t, e, n) {
            var i = o[t._class],
                r = i && i(t, e);
            if (r) {
                var s = e.onExport;
                s && (r = s(t, r, e) || r);
                var a = JSON.stringify(t._data);
                a && "{}" !== a && "null" !== a && r.setAttribute("data-paper-data", a)
            }
            return r && h(t, r, n)
        }

        function y(t) {
            return t || (t = {}), e = new u(t.precision), t
        }
        x.inject({
            exportSVG: function(t) {
                return g(p(this, t = y(t), !0), t)
            }
        }), w.inject({
            exportSVG: function(t) {
                t = y(t);
                var i = this._children,
                    s = this.getView(),
                    a = r.pick(t.bounds, "view"),
                    o = t.matrix || "view" === a && s._matrix,
                    h = o && m.read([o]),
                    u = "view" === a ? new v([0, 0], s.getViewSize()) : "content" === a ? x._getBounds(i, h, {
                        stroke: !0
                    }).rect : v.read([a], 0, {
                        readNull: !0
                    }),
                    l = {
                        version: "1.1",
                        xmlns: it.svg,
                        "xmlns:xlink": it.xlink
                    };
                u && (l.width = u.width, l.height = u.height, (u.x || 0 === u.x || u.y || 0 === u.y) && (l.viewBox = e.rectangle(u)));
                var c = it.create("svg", l, e),
                    f = c;
                h && !h.isIdentity() && (f = c.appendChild(it.create("g", n(h), e)));
                for (var d = 0, _ = i.length; d < _; d++) f.appendChild(p(i[d], t, !0));
                return g(c, t)
            }
        })
    }, new function() {
        var s, a = {};

        function o(t, e, n, i, r, a) {
            var o = it.get(t, e) || a,
                h = null == o ? i ? null : n ? "" : 0 : n ? o : parseFloat(o);
            return /%\s*$/.test(o) ? h / 100 * (r ? 1 : s[/x|^width/.test(e) ? "width" : "height"]) : h
        }

        function h(t, e, n, i, r, s, a) {
            return e = o(t, e || "x", !1, i, r, s), n = o(t, n || "y", !1, i, r, a), !i || null != e && null != n ? new f(e, n) : null
        }

        function u(t, e, n, i, r) {
            return e = o(t, e || "width", !1, i, r), n = o(t, n || "height", !1, i, r), !i || null != e && null != n ? new _(e, n) : null
        }

        function l(t, e, n) {
            return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? k(t) || t : "lookup" === e ? n[t] : t
        }

        function c(t, e, n, i) {
            var r = t.childNodes,
                s = "clippath" === e,
                a = "defs" === e,
                o = new b,
                h = o._project,
                u = h._currentStyle,
                l = [];
            if (s || a || (o = O(o, t, i), h._currentStyle = o._style.clone()), i)
                for (var c = t.querySelectorAll("defs"), f = 0, d = c.length; f < d; f++) z(c[f], n, !1);
            for (f = 0, d = r.length; f < d; f++) {
                var _, g = r[f];
                1 !== g.nodeType || /^defs$/i.test(g.nodeName) || !(_ = z(g, n, !1)) || _ instanceof M || l.push(_)
            }
            return o.addChildren(l), s && (o = O(o.reduce(), t, i)), h._currentStyle = u, (s || a) && (o.remove(), o = null), o
        }

        function d(t, e) {
            for (var n = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), i = [], r = 0, s = n.length; r < s; r += 2) i.push(new f(parseFloat(n[r]), parseFloat(n[r + 1])));
            var a = new N(i);
            return "polygon" === e && a.closePath(), a
        }

        function g(t, e) {
            var n, i = (o(t, "href", !0) || "").substring(1),
                r = "radialgradient" === e;
            if (i)(n = a[i].getGradient())._radial ^ r && ((n = n.clone())._radial = r);
            else {
                for (var s = t.childNodes, u = [], l = 0, c = s.length; l < c; l++) {
                    var f = s[l];
                    1 === f.nodeType && u.push(O(new V, f))
                }
                n = new q(u, r)
            }
            var d, _, g, v = "userSpaceOnUse" !== o(t, "gradientUnits", !0);
            return r ? (_ = (d = h(t, "cx", "cy", !1, v, "50%", "50%")).add(o(t, "r", !1, !1, v, "50%"), 0), g = h(t, "fx", "fy", !0, v)) : (d = h(t, "x1", "y1", !1, v, "0%", "0%"), _ = h(t, "x2", "y2", !1, v, "100%", "0%")), O(new R(n, d, _, g), t)._scaleToBounds = v, null
        }
        var p = {
            "#document": function(t, e, n, i) {
                for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) {
                    var o = r[s];
                    if (1 === o.nodeType) return z(o, n, i)
                }
            },
            g: c,
            svg: c,
            clippath: c,
            polygon: d,
            polyline: d,
            path: function(t) {
                return L.create(t.getAttribute("d"))
            },
            lineargradient: g,
            radialgradient: g,
            image: function(t) {
                var e = new P(o(t, "href", !0));
                return e.on("load", (function() {
                    var e = u(t);
                    this.setSize(e);
                    var n = h(t).add(e.divide(2));
                    this._matrix.append((new m).translate(n))
                })), e
            },
            symbol: function(t, e, n, i) {
                return new M(c(t, e, n, i), !0)
            },
            defs: c,
            use: function(t) {
                var e = (o(t, "href", !0) || "").substring(1),
                    n = a[e],
                    i = h(t);
                return n ? n instanceof M ? n.place(i) : n.clone().translate(i) : null
            },
            circle: function(t) {
                return new S.Circle(h(t, "cx", "cy"), o(t, "r"))
            },
            ellipse: function(t) {
                return new S.Ellipse({
                    center: h(t, "cx", "cy"),
                    radius: u(t, "rx", "ry")
                })
            },
            rect: function(t) {
                return new S.Rectangle(new v(h(t), u(t)), u(t, "rx", "ry"))
            },
            line: function(t) {
                return new N.Line(h(t, "x1", "y1"), h(t, "x2", "y2"))
            },
            text: function(t) {
                var e = new F(h(t).add(h(t, "dx", "dy")));
                return e.setContent(t.textContent.trim() || ""), e
            },
            switch: c
        };

        function y(t, e, n, i) {
            if (t.transform) {
                for (var r = (i.getAttribute(n) || "").split(/\)\s*/g), s = new m, a = 0, o = r.length; a < o; a++) {
                    var h = r[a];
                    if (!h) break;
                    for (var u = h.split(/\(\s*/), l = u[0], c = u[1].split(/[\s,]+/g), f = 0, d = c.length; f < d; f++) c[f] = parseFloat(c[f]);
                    switch (l) {
                        case "matrix":
                            s.append(new m(c[0], c[1], c[2], c[3], c[4], c[5]));
                            break;
                        case "rotate":
                            s.rotate(c[0], c[1] || 0, c[2] || 0);
                            break;
                        case "translate":
                            s.translate(c[0], c[1] || 0);
                            break;
                        case "scale":
                            s.scale(c);
                            break;
                        case "skewX":
                            s.skew(c[0], 0);
                            break;
                        case "skewY":
                            s.skew(0, c[0])
                    }
                }
                t.transform(s)
            }
        }

        function C(t, e, n) {
            var i = "fill-opacity" === n ? "getFillColor" : "getStrokeColor",
                r = t[i] && t[i]();
            r && r.setAlpha(parseFloat(e))
        }
        var I = r.set(r.each(rt, (function(t) {
            this[t.attribute] = function(e, n) {
                if (e[t.set] && (e[t.set](l(n, t.type, t.fromSVG)), "color" === t.type)) {
                    var i = e[t.get]();
                    if (i && i._scaleToBounds) {
                        var r = e.getBounds();
                        i.transform((new m).translate(r.getPoint()).scale(r.getSize()))
                    }
                }
            }
        }), {}), {
            id: function(t, e) {
                a[e] = t, t.setName && t.setName(e)
            },
            "clip-path": function(t, e) {
                var n = k(e);
                if (n) {
                    if ((n = n.clone()).setClipMask(!0), !(t instanceof b)) return new b(n, t);
                    t.insertChild(0, n)
                }
            },
            gradientTransform: y,
            transform: y,
            "fill-opacity": C,
            "stroke-opacity": C,
            visibility: function(t, e) {
                t.setVisible && t.setVisible("visible" === e)
            },
            display: function(t, e) {
                t.setVisible && t.setVisible(null !== e)
            },
            "stop-color": function(t, e) {
                t.setColor && t.setColor(e)
            },
            "stop-opacity": function(t, e) {
                t._color && t._color.setAlpha(parseFloat(e))
            },
            offset: function(t, e) {
                if (t.setOffset) {
                    var n = e.match(/(.*)%$/);
                    t.setOffset(n ? n[1] / 100 : parseFloat(e))
                }
            },
            viewBox: function(t, e, n, i, r) {
                var s, a = new v(l(e, "array")),
                    o = u(i, null, null, !0);
                if (t instanceof b) {
                    var h = o ? o.divide(a.getSize()) : 1,
                        c = (new m).scale(h).translate(a.getPoint().negate());
                    s = t
                } else t instanceof M && (o && a.setSize(o), s = t._item);
                if (s) {
                    if ("visible" !== T(i, "overflow", r)) {
                        var f = new S.Rectangle(a);
                        f.setClipMask(!0), s.addChild(f)
                    }
                    c && s.transform(c)
                }
            }
        });

        function T(t, n, i) {
            var s = t.attributes[n],
                a = s && s.value;
            if (!a && t.style) {
                var o = r.camelize(n);
                (a = t.style[o]) || i.node[o] === i.parent[o] || (a = i.node[o])
            }
            return a ? "none" === a ? null : a : e
        }

        function O(t, n, i) {
            var s = n.parentNode,
                a = {
                    node: Z.getStyles(n) || {},
                    parent: !i && !/^defs$/i.test(s.tagName) && Z.getStyles(s) || {}
                };
            return r.each(I, (function(i, r) {
                var s = T(n, r, a);
                t = s !== e && i(t, s, r, n, a) || t
            })), t
        }

        function k(t) {
            var e = t && t.match(/\((?:["'#]*)([^"')]+)/),
                i = e && e[1],
                r = i && a[n ? i.replace(n.location.href.split("#")[0] + "#", "") : i];
            return r && r._scaleToBounds && ((r = r.clone())._scaleToBounds = !0), r
        }

        function z(t, e, n) {
            var o, h, l, c = t.nodeName.toLowerCase(),
                f = "#document" !== c,
                d = i.body;
            n && f && (s = st.getView().getSize(), s = u(t, null, null, !0) || s, o = it.create("svg", {
                style: "stroke-width: 1px; stroke-miterlimit: 10"
            }), h = t.parentNode, l = t.nextSibling, o.appendChild(t), d.appendChild(o));
            var _ = st.settings,
                g = _.applyMatrix,
                v = _.insertItems;
            _.applyMatrix = !1, _.insertItems = !1;
            var m = p[c],
                y = m && m(t, c, e, n) || null;
            if (_.insertItems = v, _.applyMatrix = g, y) {
                !f || y instanceof b || (y = O(y, t, n));
                var w = e.onImport,
                    x = f && t.getAttribute("data-paper-data");
                w && (y = w(t, y, e) || y), e.expandShapes && y instanceof S && (y.remove(), y = y.toPath()), x && (y._data = JSON.parse(x))
            }
            return o && (d.removeChild(o), h && (l ? h.insertBefore(t, l) : h.appendChild(t))), n && (a = {}, y && r.pick(e.applyMatrix, g) && y.matrix.apply(!0, !0)), y
        }

        function A(n, r, s) {
            if (!n) return null;
            r = "function" == typeof r ? {
                onLoad: r
            } : r || {};
            var a = st,
                o = null;

            function h(i) {
                try {
                    var h = "object" == typeof i ? i : (new t.DOMParser).parseFromString(i.trim(), "image/svg+xml");
                    if (!h.nodeName) throw h = null, new Error("Unsupported SVG source: " + n);
                    st = a, o = z(h, r, !0), r && !1 === r.insert || s._insertItem(e, o);
                    var l = r.onLoad;
                    l && l(o, i)
                } catch (t) {
                    u(t)
                }
            }

            function u(t, e) {
                var n = r.onError;
                if (!n) throw new Error(t);
                n(t, e)
            }
            if ("string" != typeof n || /^[\s\S]*</.test(n)) {
                if ("undefined" != typeof File && n instanceof File) {
                    var l = new FileReader;
                    return l.onload = function() {
                        h(l.result)
                    }, l.onerror = function() {
                        u(l.error)
                    }, l.readAsText(n)
                }
                h(n)
            } else {
                var c = i.getElementById(n);
                c ? h(c) : tt({
                    url: n,
                    async: !0,
                    onLoad: h,
                    onError: u
                })
            }
            return o
        }
        x.inject({
            importSVG: function(t, e) {
                return A(t, e, this)
            }
        }), w.inject({
            importSVG: function(t, e) {
                return this.activate(), A(t, e, this)
            }
        })
    };
    var st = new(a.inject(r.exports, {
        Base: r,
        Numerical: l,
        Key: K,
        DomEvent: U,
        DomElement: Z,
        document: i,
        window: n,
        Symbol: M,
        PlacedSymbol: I
    }));
    return st.agent.node && require("./node/extend.js")(st), "function" == typeof define && define.amd ? define("paper", st) : "object" == typeof module && module && (module.exports = st), st
}.call(this, "object" == typeof self ? self : null);
t.setup(document.createElement("canvas"));
export default t;

function e(e, n, i, r) {
    var s = e.curve === n,
        a = n.getNormalAtTime(s ? 0 : 1).multiply(r),
        o = e.point.add(a),
        h = new t.Segment(o),
        u = s ? "handleOut" : "handleIn";
    return h[u] = e[u].add(i.subtract(a).divide(2)), h
}

function n(i, r) {
    var s = new t.Curve(i.segment1.handleOut.add(i.segment1.point), new t.Point(0, 0), new t.Point(0, 0), i.segment2.handleIn.add(i.segment2.point)).getNormalAtTime(.5).multiply(r),
        a = e(i.segment1, i, s, r),
        o = e(i.segment2, i, s, r),
        h = new t.Curve(a, o);
    if (0 === h.getIntersections(h).length) {
        var u = Math.min(Math.abs(r) / 10, 1),
            l = h.getPointAtTime(.5).getDistance(i.getPointAtTime(.5));
        if (Math.abs(l - Math.abs(r)) > u) {
            var c = i.divideAtTime(.5);
            if (null != c) return n(i, r).concat(n(c, r))
        }
    }
    return [a, o]
}

function i(t, e) {
    return t.x * e.y - t.y * e.x
}

function r(e, n, r, s, a, o) {
    var h, u, l, c, f, d, _, g, v, p, m, y, w, x, b = new t.Curve(e[0], e[1]),
        C = new t.Curve(n[0], n[1]),
        S = b.getIntersections(C),
        P = e[1].point.getDistance(n[0].point);
    if (r.isSmooth()) n[0].handleOut = n[0].handleOut.project(r.handleOut), n[0].handleIn = e[1].handleIn.project(r.handleIn), n[0].point = e[1].point.add(n[0].point).divide(2), e.pop();
    else if (0 === S.length)
        if (P > .1 * Math.abs(a)) switch (s) {
            case "miter":
                var I = (_ = b.point2, g = b.point2.add(b.getTangentAtTime(1)), v = C.point1, p = C.point1.add(C.getTangentAtTime(0)), m = _.subtract(g), y = v.subtract(p), w = i(_, g), x = i(v, p), new t.Point(w * y.x - m.x * x, w * y.y - m.y * x).divide(i(m, y)));
                Math.max(I.getDistance(b.point2), I.getDistance(C.point1)) < Math.abs(a) * o && e.push(new t.Segment(I));
                break;
            case "round":
                var M = (h = e[1], u = n[0], l = r.point, c = a, f = h.point.subtract(l).add(u.point.subtract(l)).normalize(Math.abs(c)).add(l), d = new t.Path.Arc({
                    from: h.point,
                    to: u.point,
                    through: f,
                    insert: !1
                }), h.handleOut = d.firstSegment.handleOut, u.handleIn = d.lastSegment.handleIn, 3 === d.segments.length ? d.segments[1] : null);
                M && e.push(M)
        } else n[0].handleIn = e[1].handleIn, e.pop();
        else {
            var T = b.divideAt(S[0]);
            if (T) {
                I = T.segment1;
                var O = C.divideAt(C.getIntersections(b)[0]);
                I.handleOut = O ? O.segment1.handleOut : n[0].handleOut, e.pop(), n[0] = I
            } else n[0].handleIn = e[1].handleIn, e.pop()
        }
}

function s(t) {
    return 1 === t.children.length && (t = t.children[0]).remove(), t
}

function a(e, n) {
    if (void 0 === n && (n = .01), e.closed) {
        var i = Math.abs(e.area * n);
        if (e.clockwise || e.reverse(), (e = e.unite(e, {
                insert: !1
            })) instanceof t.CompoundPath && (e.children.filter((function(t) {
                return Math.abs(t.area) < i
            })).forEach((function(t) {
                return t.remove()
            })), 1 === e.children.length)) return s(e)
    }
    return e
}

function o(t, e) {
    var n = (t.segments[0].location.offset + t.segments[Math.max(1, Math.floor(t.segments.length / 2))].location.offset) / 3;
    return e.getNearestLocation(t.getPointAt(n)).offset < e.getNearestLocation(t.getPointAt(2 * n)).offset
}

function h(e, n) {
    (function(e) {
        return e instanceof t.CompoundPath ? e.children.map((function(t) {
            return t.segments
        })).flat() : e.segments
    })(e).slice().forEach((function(t) {
        n.contains(t.point) || t.remove()
    }))
}

function u(e, i, u, l) {
    var c, f;
    c = function(t, e) {
        var n = t.clone({
            insert: !1
        });
        return n.reduce({}), t.clockwise || (n.reverse(), e = -e), [n, e]
    }(e, i), f = c[0], i = c[1];
    for (var d = f.curves.slice().map((function(t) {
            return n(t, i)
        })).flat(), _ = [], g = 0; g < d.length; g += 2) _.push(d.slice(g, g + 2));
    var v = function(t, e, n, i, s) {
            for (var a = n.segments, o = t[0].slice(), h = 0; h < t.length - 1; ++h) r(t[h], t[h + 1], a[h + 1], e, i, s);
            return n.closed && (r(t[t.length - 1], o, a[0], e, i, s), t[0][0] = o[0]), t
        }(_, u, f, i, l).flat(),
        p = function(e) {
            if (e.closed) {
                var n = e.unite(e, {
                    insert: !1
                });
                if (n instanceof t.CompoundPath) return n.children.filter((function(t) {
                    return !(t.segments.length > 1 && o(t, e))
                })).forEach((function(t) {
                    return t.remove()
                })), s(n)
            }
            return e
        }(new t.Path({
            segments: v,
            insert: !1,
            closed: e.closed
        }));
    return p.reduce({}), f.closed && (f.clockwise && i < 0 || !f.clockwise && i > 0) && h(p, e), f.clockwise !== e.clockwise && p.reverse(), a(p)
}

function l(e, n, i) {
    var r = e.point.add(n.point).divide(2),
        s = n.point.subtract(e.point).rotate(-90, new t.Point(0, 0)).normalize(i),
        a = r.add(s);
    return new t.Path.Arc({
        from: e.point,
        to: n.point,
        through: a,
        insert: !1
    }).segments
}

function c(e, n, i, r, s) {
    var a = u(e, n = e.clockwise ? n : -n, i, s),
        o = u(e, -n, i, s);
    if (e.closed) return a.subtract(o, {
        insert: !1
    });
    var h = o,
        c = new Array;
    o instanceof t.CompoundPath && ((c = o.children.filter((function(t) {
        return t.closed
    }))).forEach((function(t) {
        return t.remove()
    })), h = o.children[0]), h.reverse();
    var f = function(e, n, i, r) {
        if (e instanceof t.CompoundPath) {
            var s = e.children.map((function(t) {
                return {
                    c: t,
                    a: Math.abs(t.area)
                }
            }));
            e = (s = s.sort((function(t, e) {
                return e.a - t.a
            })))[0].c
        }
        var a = e.segments.slice(),
            o = n.segments.slice();
        switch (r) {
            case "round":
                var h = l(o[o.length - 1], a[0], i),
                    u = l(a[a.length - 1], o[0], i),
                    c = new t.Path({
                        segments: h.concat(a, u, o),
                        closed: !0,
                        insert: !1
                    });
                return c.reduce({}), c;
            default:
                return new t.Path({
                    segments: a.concat(o),
                    closed: !0,
                    insert: !1
                })
        }
    }(a, h, n, r);
    if (c.length > 0)
        for (var d = 0, _ = c; d < _.length; d++) {
            var g = _[d];
            f = f.subtract(g, {
                insert: !1
            })
        }
    return f
}

function f(t) {
    return t.closed ? t.unite(t, {
        insert: !1
    }) : t
}
var d, _ = function() {
    function e() {}
    return e.offset = function(e, n, i) {
        var r = function(e, n, i, r) {
            var s = f(e),
                h = s;
            if (s instanceof t.Path) h = u(s, n, i, r);
            else {
                var l = s.children.map((function(s) {
                    if (s.segments.length > 1) {
                        o(s, e) || s.reverse();
                        var h = u(s, n, i, r);
                        return (h = a(h)).clockwise !== s.clockwise && h.reverse(), h instanceof t.CompoundPath ? (h.applyMatrix = !0, h.children) : h
                    }
                    return null
                })).flat().filter((function(t) {
                    return !!t
                }));
                h = new t.CompoundPath({
                    children: l,
                    insert: !1
                })
            }
            return h.copyAttributes(s, !1), h.remove(), h
        }(e, n, (i = i || {}).join || "miter", i.limit || 10);
        return void 0 === i.insert && (i.insert = !0), i.insert && (e.parent || t.project.activeLayer).addChild(r), r
    }, e.offsetStroke = function(e, n, i) {
        var r = function(e, n, i, r, s) {
            var a = f(e),
                o = a;
            return (o = a instanceof t.Path ? c(a, n, i, r, s) : a.children.flatMap((function(t) {
                return c(t, n, i, r, s)
            })).reduce((function(t, e) {
                return t.unite(e, {
                    insert: !1
                })
            }))).strokeWidth = 0, o.fillColor = a.strokeColor, o.shadowBlur = a.shadowBlur, o.shadowColor = a.shadowColor, o.shadowOffset = a.shadowOffset, o
        }(e, n, (i = i || {}).join || "miter", i.cap || "butt", i.limit || 10);
        return void 0 === i.insert && (i.insert = !0), i.insert && (e.parent || t.project.activeLayer).addChild(r), r
    }, e
}();
(d = t).Path.prototype.offset = function(t, e) {
    return _.offset(this, t, e)
}, d.Path.prototype.offsetStroke = function(t, e) {
    return _.offsetStroke(this, t, e)
}, d.CompoundPath.prototype.offset = function(t, e) {
    return _.offset(this, t, e)
}, d.CompoundPath.prototype.offsetStroke = function(t, e) {
    return _.offsetStroke(this, t, e)
};