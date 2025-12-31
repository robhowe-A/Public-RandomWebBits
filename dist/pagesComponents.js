(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssexColorCode = exports.urlexColorCode = exports.htmlexColorCode = void 0;
const colorCode_1 = require("../../models/colorCode");
const rwbErrorBus_1 = __importDefault(require("../../models/rwbErrorBus"));
const htmlexColorCode = {
    init: () => {
        // Get component elements that will be used in widget interactivity
        const openers = document.querySelectorAll(".Tagopen");
        const closers = document.querySelectorAll(".Tagclose");
        const values = document.querySelectorAll(".TextVal");
        const attributes = document.querySelectorAll(".Attribute");
        // Add elements to array data structures, needed for the ColorCode instantiation
        const colorlessElements = new Array(openers, closers, values, attributes);
        const elementsColors = new Array("var(--clr-WhoIS_Orange)", "var(--clr-Red)", "var(--clr-DarkCyan)", "var(--clr-Green)");
        // Select reset button
        let rstElem = rwbErrorBus_1.default.checkSelectedElement("ColorCode", ".reset", true, true);
        if (rstElem == null) {
            console.warn("Check the reset button or refresh the page.");
        }
        // Instantiate a color code object with all needed elements
        new colorCode_1.ColorCodeWidget(colorlessElements, elementsColors, rstElem);
    },
};
exports.htmlexColorCode = htmlexColorCode;
const urlexColorCode = {
    init: () => {
        const protocol = document.querySelectorAll(".protocol");
        const domain = document.querySelectorAll(".domain");
        const port = document.querySelectorAll(".port");
        const folder = document.querySelectorAll(".folder");
        const file = document.querySelectorAll(".file");
        const query = document.querySelectorAll(".query");
        const key = document.querySelectorAll(".key");
        const value = document.querySelectorAll(".value");
        // Add elements to array data structures, needed for the ColorCode instantiation
        const colorlessElements = new Array(protocol, domain, port, folder, file, query, key, value);
        const elementsColors = new Array("var(--clr-WhoIS_Orange)", "var(--clr-Skyblue)", "var(--clr-DarkCyan)", "var(--clr-Green)", "var(--clr-Red)", "var(--clr-primary-600)", "var(--clr-all-primary-500)", "var(--clr-Lightcoral)");
        // Select reset button
        let rstElem = rwbErrorBus_1.default.checkSelectedElement("ColorCode", ".reset", true, true);
        if (rstElem == null) {
            console.warn("Check the reset button or refresh the page.");
        }
        // Instantiate a color code object with all needed elements
        new colorCode_1.ColorCodeWidget(colorlessElements, elementsColors, rstElem);
    },
};
exports.urlexColorCode = urlexColorCode;
const cssexColorCode = {
    /**
     * Cssex is a page widget, applying style colors to elements of different
     * types
     */
    init: () => {
        const selectors = document.querySelectorAll(".Selector");
        const attributes = document.querySelectorAll(".Attribute");
        const values = document.querySelectorAll(".Value");
        const psuedos = document.querySelectorAll(".Psuedo-class");
        // Add elements to array data structures, needed for the ColorCode instantiation
        const colorlessElements = new Array(selectors, attributes, values, psuedos);
        const elementsColors = new Array("var(--clr-Red)", "var(--clr-WhoIS_Orange)", "var(--clr-Skyblue)", "var(--clr-Green)");
        // Select reset button
        let rstElem = rwbErrorBus_1.default.checkSelectedElement("ColorCode", ".reset", true, true);
        if (rstElem == null) {
            console.warn("Check the reset button or refresh the page.");
        }
        // Instantiate a color code object with all needed elements
        new colorCode_1.ColorCodeWidget(colorlessElements, elementsColors, rstElem);
    },
};
exports.cssexColorCode = cssexColorCode;
},{"../../models/colorCode":5,"../../models/rwbErrorBus":6}],2:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
const rwbErrorBus_1 = require("../../models/rwbErrorBus");
const domainLookup = {
    init: () => {
        // Get the form elements
        let formElemID = "searchWhoIS";
        let form;
        form = document.getElementById(`${formElemID}`);
        if (form == null) {
            new rwbErrorBus_1.RwbReferenceError("ElementNotFound", `Element not found: '${formElemID}':`);
        }
        //add form functionality
        form.addEventListener("submit", e => {
            e.preventDefault();
            domainLookup.searchWHOIS();
        });
    },
    searchWHOIS: () => {
        let inputElem = document.getElementById("txtSearch");
        let outputElem = document.getElementById("WhoISsearch");
        outputElem.style.removeProperty("display");
        //build the new url string
        let value = inputElem.value;
        var URL = "https://www.whois.com/whois/" + value;
        //open the new url
        console.log(URL);
        window.open(URL, "_blank");
        //append the output element
        console.log(outputElem);
        outputElem.innerText += `\n${value}`;
    },
};
exports.default = domainLookup;
},{"../../models/rwbErrorBus":6}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = exports.render = exports.removePart = exports.ref = exports.range = exports.nothing = exports.notEqual = exports.noChange = exports.map = exports.live = exports.literal = exports.keyed = exports.join = exports.isTemplateResult = exports.isSingleExpression = exports.isServer = exports.isPrimitive = exports.isDirectiveResult = exports.isCompiledTemplateResult = exports.insertPart = exports.ifDefined = exports.html = exports.guard = exports.getDirectiveClass = exports.getCompatibleStyle = exports.getCommittedValue = exports.directive = exports.defaultConverter = exports.css = exports.createRef = exports.clearPart = exports.classMap = exports.choose = exports.cache = exports.asyncReplace = exports.asyncAppend = exports.adoptStyles = exports._$LH = exports._$LE = exports.UpdatingElement = exports.UntilDirective = exports.UnsafeHTMLDirective = exports.TemplateResultType = exports.ReactiveElement = exports.PartType = exports.LitElement = exports.Directive = exports.CSSResult = exports.AsyncReplaceDirective = exports.AsyncDirective = void 0;
exports.withStatic = exports.when = exports.until = exports.unsafeStatic = exports.unsafeSVG = exports.unsafeHTML = exports.unsafeCSS = exports.templateContent = exports.svg = exports.supportsAdoptingStyleSheets = exports.styleMap = exports.staticSvg = exports.staticHtml = exports.setCommittedValue = exports.setChildPartValue = void 0;
/*
Attribution: Robert A Howell, December 2025
Copyright (c) 2023-2026 Robert A. Howell
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window, i = t.ShadowRoot &&
    (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype, s = Symbol(), e = new WeakMap();
exports.supportsAdoptingStyleSheets = i;
class n {
    constructor(t, i, e) {
        if (((this._$cssResult$ = !0), e !== s))
            throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        (this.cssText = t), (this.t = i);
    }
    get styleSheet() {
        let t = this.i;
        const s = this.t;
        if (i && void 0 === t) {
            const i = void 0 !== s && 1 === s.length;
            i && (t = e.get(s)),
                void 0 === t && ((this.i = t = new CSSStyleSheet()).replaceSync(this.cssText), i && e.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
exports.CSSResult = n;
const o = t => new n("string" == typeof t ? t : t + "", void 0, s), r = (t, ...i) => {
    const e = 1 === t.length
        ? t[0]
        : i.reduce((i, s, e) => i +
            (t => {
                if (!0 === t._$cssResult$)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw Error("Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
            })(s) +
            t[e + 1], t[0]);
    return new n(e, t, s);
}, l = (s, e) => {
    i
        ? (s.adoptedStyleSheets = e.map(t => (t instanceof CSSStyleSheet ? t : t.styleSheet)))
        : e.forEach(i => {
            const e = document.createElement("style"), n = t.litNonce;
            void 0 !== n && e.setAttribute("nonce", n), (e.textContent = i.cssText), s.appendChild(e);
        });
}, h = i
    ? t => t
    : t => t instanceof CSSStyleSheet
        ? (t => {
            let i = "";
            for (const s of t.cssRules)
                i += s.cssText;
            return o(i);
        })(t)
        : t;
exports.unsafeCSS = o;
exports.css = r;
exports.adoptStyles = l;
exports.getCompatibleStyle = h;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var u;
const c = window, d = c.trustedTypes, a = d ? d.emptyScript : "", v = c.reactiveElementPolyfillSupport, f = {
    toAttribute(t, i) {
        switch (i) {
            case Boolean:
                t = t ? a : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute(t, i) {
        let s = t;
        switch (i) {
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                }
                catch (t) {
                    s = null;
                }
        }
        return s;
    },
}, p = (t, i) => i !== t && (i == i || t == t), y = { attribute: !0, type: String, converter: f, reflect: !1, hasChanged: p }, b = "finalized";
exports.defaultConverter = f;
exports.notEqual = p;
class m extends HTMLElement {
    constructor() {
        super(),
            (this.o = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this.l = null),
            this.u();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.v) && void 0 !== i ? i : (this.v = [])).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return (this.elementProperties.forEach((i, s) => {
            const e = this.p(s, i);
            void 0 !== e && (this.m.set(e, s), t.push(e));
        }),
            t);
    }
    static createProperty(t, i = y) {
        if ((i.state && (i.attribute = !1),
            this.finalize(),
            this.elementProperties.set(t, i),
            !i.noAccessor && !this.prototype.hasOwnProperty(t))) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get() {
                return this[i];
            },
            set(e) {
                const n = this[t];
                (this[i] = e), this.requestUpdate(t, n, s);
            },
            configurable: !0,
            enumerable: !0,
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || y;
    }
    static finalize() {
        if (this.hasOwnProperty(b))
            return !1;
        this[b] = !0;
        const t = Object.getPrototypeOf(this);
        if ((t.finalize(),
            void 0 !== t.v && (this.v = [...t.v]),
            (this.elementProperties = new Map(t.elementProperties)),
            (this.m = new Map()),
            this.hasOwnProperty("properties"))) {
            const t = this.properties, i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
            for (const s of i)
                this.createProperty(s, t[s]);
        }
        return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
    }
    static finalizeStyles(t) {
        const i = [];
        if (Array.isArray(t)) {
            const s = new Set(t.flat(1 / 0).reverse());
            for (const t of s)
                i.unshift(h(t));
        }
        else
            void 0 !== t && i.push(h(t));
        return i;
    }
    static p(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        (this._ = new Promise(t => (this.enableUpdating = t))),
            (this._$AL = new Map()),
            this.g(),
            this.requestUpdate(),
            null === (t = this.constructor.v) || void 0 === t || t.forEach(t => t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this.S) && void 0 !== i ? i : (this.S = [])).push(t),
            void 0 !== this.renderRoot &&
                this.isConnected &&
                (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this.S) || void 0 === i || i.splice(this.S.indexOf(t) >>> 0, 1);
    }
    g() {
        this.constructor.elementProperties.forEach((t, i) => {
            this.hasOwnProperty(i) && (this.o.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const i = null !== (t = this.shadowRoot) && void 0 !== t
            ? t
            : this.attachShadow(this.constructor.shadowRootOptions);
        return l(i, this.constructor.elementStyles), i;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (t = this.S) ||
                void 0 === t ||
                t.forEach(t => {
                    var i;
                    return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
                });
    }
    enableUpdating(t) { }
    disconnectedCallback() {
        var t;
        null === (t = this.S) ||
            void 0 === t ||
            t.forEach(t => {
                var i;
                return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
            });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    $(t, i, s = y) {
        var e;
        const n = this.constructor.p(t, s);
        if (void 0 !== n && !0 === s.reflect) {
            const o = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : f).toAttribute(i, s.type);
            (this.l = t), null == o ? this.removeAttribute(n) : this.setAttribute(n, o), (this.l = null);
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, n = e.m.get(t);
        if (void 0 !== n && this.l !== n) {
            const t = e.getPropertyOptions(n), o = "function" == typeof t.converter
                ? { fromAttribute: t.converter }
                : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute)
                    ? t.converter
                    : f;
            (this.l = n), (this[n] = o.fromAttribute(i, t.type)), (this.l = null);
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t &&
            (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || p)(this[t], i)
                ? (this._$AL.has(t) || this._$AL.set(t, i),
                    !0 === s.reflect && this.l !== t && (void 0 === this.C && (this.C = new Map()), this.C.set(t, s)))
                : (e = !1)),
            !this.isUpdatePending && e && (this._ = this.T());
    }
    async T() {
        this.isUpdatePending = !0;
        try {
            await this._;
        }
        catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && (await t), !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending)
            return;
        this.hasUpdated, this.o && (this.o.forEach((t, i) => (this[i] = t)), (this.o = void 0));
        let i = !1;
        const s = this._$AL;
        try {
            (i = this.shouldUpdate(s)),
                i
                    ? (this.willUpdate(s),
                        null === (t = this.S) ||
                            void 0 === t ||
                            t.forEach(t => {
                                var i;
                                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
                            }),
                        this.update(s))
                    : this.P();
        }
        catch (t) {
            throw ((i = !1), this.P(), t);
        }
        i && this._$AE(s);
    }
    willUpdate(t) { }
    _$AE(t) {
        var i;
        null === (i = this.S) ||
            void 0 === i ||
            i.forEach(t => {
                var i;
                return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
            this.updated(t);
    }
    P() {
        (this._$AL = new Map()), (this.isUpdatePending = !1);
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this.C && (this.C.forEach((t, i) => this.$(i, this[i], t)), (this.C = void 0)), this.P();
    }
    updated(t) { }
    firstUpdated(t) { }
}
exports.ReactiveElement = m;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;
(m[b] = !0),
    (m.elementProperties = new Map()),
    (m.elementStyles = []),
    (m.shadowRootOptions = { mode: "open" }),
    null == v || v({ ReactiveElement: m }),
    (null !== (u = c.reactiveElementVersions) && void 0 !== u ? u : (c.reactiveElementVersions = [])).push("1.6.3");
const w = window, _ = w.trustedTypes, $ = _ ? _.createPolicy("lit-html", { createHTML: t => t }) : void 0, S = "$lit$", T = `lit$${(Math.random() + "").slice(9)}$`, x = "?" + T, E = `<${x}>`, C = document, A = () => C.createComment(""), k = t => null === t || ("object" != typeof t && "function" != typeof t), M = Array.isArray, P = t => M(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), U = "[ \t\n\f\r]", V = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, R = /-->/g, N = />/g, O = RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), L = /'/g, j = /"/g, z = /^(?:script|style|textarea|title)$/i, H = t => (i, ...s) => ({ _$litType$: t, strings: i, values: s }), I = H(1), B = H(2), D = Symbol.for("lit-noChange"), W = Symbol.for("lit-nothing"), Z = new WeakMap(), q = C.createTreeWalker(C, 129, null, !1);
exports.html = I;
exports.svg = B;
exports.noChange = D;
exports.nothing = W;
function F(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
    return void 0 !== $ ? $.createHTML(i) : i;
}
const G = (t, i) => {
    const s = t.length - 1, e = [];
    let n, o = 2 === i ? "<svg>" : "", r = V;
    for (let i = 0; i < s; i++) {
        const s = t[i];
        let l, h, u = -1, c = 0;
        for (; c < s.length && ((r.lastIndex = c), (h = r.exec(s)), null !== h);)
            (c = r.lastIndex),
                r === V
                    ? "!--" === h[1]
                        ? (r = R)
                        : void 0 !== h[1]
                            ? (r = N)
                            : void 0 !== h[2]
                                ? (z.test(h[2]) && (n = RegExp("</" + h[2], "g")), (r = O))
                                : void 0 !== h[3] && (r = O)
                    : r === O
                        ? ">" === h[0]
                            ? ((r = null != n ? n : V), (u = -1))
                            : void 0 === h[1]
                                ? (u = -2)
                                : ((u = r.lastIndex - h[2].length), (l = h[1]), (r = void 0 === h[3] ? O : '"' === h[3] ? j : L))
                        : r === j || r === L
                            ? (r = O)
                            : r === R || r === N
                                ? (r = V)
                                : ((r = O), (n = void 0));
        const d = r === O && t[i + 1].startsWith("/>") ? " " : "";
        o +=
            r === V
                ? s + E
                : u >= 0
                    ? (e.push(l), s.slice(0, u) + S + s.slice(u) + T + d)
                    : s + T + (-2 === u ? (e.push(void 0), i) : d);
    }
    return [F(t, o + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), e];
};
class J {
    constructor({ strings: t, _$litType$: i }, s) {
        let e;
        this.parts = [];
        let n = 0, o = 0;
        const r = t.length - 1, l = this.parts, [h, u] = G(t, i);
        if (((this.el = J.createElement(h, s)), (q.currentNode = this.el.content), 2 === i)) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for (; null !== (e = q.nextNode()) && l.length < r;) {
            if (1 === e.nodeType) {
                if (e.hasAttributes()) {
                    const t = [];
                    for (const i of e.getAttributeNames())
                        if (i.endsWith(S) || i.startsWith(T)) {
                            const s = u[o++];
                            if ((t.push(i), void 0 !== s)) {
                                const t = e.getAttribute(s.toLowerCase() + S).split(T), i = /([.?@])?(.*)/.exec(s);
                                l.push({
                                    type: 1,
                                    index: n,
                                    name: i[2],
                                    strings: t,
                                    ctor: "." === i[1] ? tt : "?" === i[1] ? st : "@" === i[1] ? et : X,
                                });
                            }
                            else
                                l.push({ type: 6, index: n });
                        }
                    for (const i of t)
                        e.removeAttribute(i);
                }
                if (z.test(e.tagName)) {
                    const t = e.textContent.split(T), i = t.length - 1;
                    if (i > 0) {
                        e.textContent = _ ? _.emptyScript : "";
                        for (let s = 0; s < i; s++)
                            e.append(t[s], A()), q.nextNode(), l.push({ type: 2, index: ++n });
                        e.append(t[i], A());
                    }
                }
            }
            else if (8 === e.nodeType)
                if (e.data === x)
                    l.push({ type: 2, index: n });
                else {
                    let t = -1;
                    for (; -1 !== (t = e.data.indexOf(T, t + 1));)
                        l.push({ type: 7, index: n }), (t += T.length - 1);
                }
            n++;
        }
    }
    static createElement(t, i) {
        const s = C.createElement("template");
        return (s.innerHTML = t), s;
    }
}
function K(t, i, s = t, e) {
    var n, o, r, l;
    if (i === D)
        return i;
    let h = void 0 !== e ? (null === (n = s.A) || void 0 === n ? void 0 : n[e]) : s.k;
    const u = k(i) ? void 0 : i._$litDirective$;
    return ((null == h ? void 0 : h.constructor) !== u &&
        (null === (o = null == h ? void 0 : h._$AO) || void 0 === o || o.call(h, !1),
            void 0 === u ? (h = void 0) : ((h = new u(t)), h._$AT(t, s, e)),
            void 0 !== e ? ((null !== (r = (l = s).A) && void 0 !== r ? r : (l.A = []))[e] = h) : (s.k = h)),
        void 0 !== h && (i = K(t, h._$AS(t, i.values), h, e)),
        i);
}
class Y {
    constructor(t, i) {
        (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = i);
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    M(t) {
        var i;
        const { el: { content: s }, parts: e, } = this._$AD, n = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : C).importNode(s, !0);
        q.currentNode = n;
        let o = q.nextNode(), r = 0, l = 0, h = e[0];
        for (; void 0 !== h;) {
            if (r === h.index) {
                let i;
                2 === h.type
                    ? (i = new Q(o, o.nextSibling, this, t))
                    : 1 === h.type
                        ? (i = new h.ctor(o, h.name, h.strings, this, t))
                        : 6 === h.type && (i = new nt(o, this, t)),
                    this._$AV.push(i),
                    (h = e[++l]);
            }
            r !== (null == h ? void 0 : h.index) && ((o = q.nextNode()), r++);
        }
        return (q.currentNode = C), n;
    }
    U(t) {
        let i = 0;
        for (const s of this._$AV)
            void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), (i += s.strings.length - 2)) : s._$AI(t[i])),
                i++;
    }
}
class Q {
    constructor(t, i, s, e) {
        var n;
        (this.type = 2),
            (this._$AH = W),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = i),
            (this._$AM = s),
            (this.options = e),
            (this.N = null === (n = null == e ? void 0 : e.isConnected) || void 0 === n || n);
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i
            ? i
            : this.N;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        (t = K(this, t, i)),
            k(t)
                ? t === W || null == t || "" === t
                    ? (this._$AH !== W && this._$AR(), (this._$AH = W))
                    : t !== this._$AH && t !== D && this.R(t)
                : void 0 !== t._$litType$
                    ? this.O(t)
                    : void 0 !== t.nodeType
                        ? this.V(t)
                        : P(t)
                            ? this.j(t)
                            : this.R(t);
    }
    L(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    V(t) {
        this._$AH !== t && (this._$AR(), (this._$AH = this.L(t)));
    }
    R(t) {
        this._$AH !== W && k(this._$AH) ? (this._$AA.nextSibling.data = t) : this.V(C.createTextNode(t)),
            (this._$AH = t);
    }
    O(t) {
        var i;
        const { values: s, _$litType$: e } = t, n = "number" == typeof e
            ? this._$AC(t)
            : (void 0 === e.el && (e.el = J.createElement(F(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === n)
            this._$AH.U(s);
        else {
            const t = new Y(n, this), i = t.M(this.options);
            t.U(s), this.V(i), (this._$AH = t);
        }
    }
    _$AC(t) {
        let i = Z.get(t.strings);
        return void 0 === i && Z.set(t.strings, (i = new J(t))), i;
    }
    j(t) {
        M(this._$AH) || ((this._$AH = []), this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const n of t)
            e === i.length ? i.push((s = new Q(this.L(A()), this.L(A()), this, this.options))) : (s = i[e]),
                s._$AI(n),
                e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), (i.length = e));
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
            const i = t.nextSibling;
            t.remove(), (t = i);
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && ((this.N = t), null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class X {
    constructor(t, i, s, e, n) {
        (this.type = 1),
            (this._$AH = W),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = i),
            (this._$AM = e),
            (this.options = n),
            s.length > 2 || "" !== s[0] || "" !== s[1]
                ? ((this._$AH = Array(s.length - 1).fill(new String())), (this.strings = s))
                : (this._$AH = W);
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const n = this.strings;
        let o = !1;
        if (void 0 === n)
            (t = K(this, t, i, 0)), (o = !k(t) || (t !== this._$AH && t !== D)), o && (this._$AH = t);
        else {
            const e = t;
            let r, l;
            for (t = n[0], r = 0; r < n.length - 1; r++)
                (l = K(this, e[s + r], i, r)),
                    l === D && (l = this._$AH[r]),
                    o || (o = !k(l) || l !== this._$AH[r]),
                    l === W ? (t = W) : t !== W && (t += (null != l ? l : "") + n[r + 1]),
                    (this._$AH[r] = l);
        }
        o && !e && this.I(t);
    }
    I(t) {
        t === W
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class tt extends X {
    constructor() {
        super(...arguments), (this.type = 3);
    }
    I(t) {
        this.element[this.name] = t === W ? void 0 : t;
    }
}
const it = _ ? _.emptyScript : "";
class st extends X {
    constructor() {
        super(...arguments), (this.type = 4);
    }
    I(t) {
        t && t !== W ? this.element.setAttribute(this.name, it) : this.element.removeAttribute(this.name);
    }
}
class et extends X {
    constructor(t, i, s, e, n) {
        super(t, i, s, e, n), (this.type = 5);
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = K(this, t, i, 0)) && void 0 !== s ? s : W) === D)
            return;
        const e = this._$AH, n = (t === W && e !== W) || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, o = t !== W && (e === W || n);
        n && this.element.removeEventListener(this.name, this, e),
            o && this.element.addEventListener(this.name, this, t),
            (this._$AH = t);
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH
            ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s
                ? s
                : this.element, t)
            : this._$AH.handleEvent(t);
    }
}
class nt {
    constructor(t, i, s) {
        (this.element = t), (this.type = 6), (this._$AN = void 0), (this._$AM = i), (this.options = s);
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        K(this, t);
    }
}
const ot = { H: S, B: T, D: x, q: 1, J: G, W: Y, Z: P, F: K, G: Q, K: X, X: st, Y: et, tt, it: nt }, rt = w.litHtmlPolyfillSupport;
exports._$LH = ot;
null == rt || rt(J, Q),
    (null !== (g = w.litHtmlVersions) && void 0 !== g ? g : (w.litHtmlVersions = [])).push("2.8.0");
const lt = (t, i, s) => {
    var e, n;
    const o = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let r = o._$litPart$;
    if (void 0 === r) {
        const t = null !== (n = null == s ? void 0 : s.renderBefore) && void 0 !== n ? n : null;
        o._$litPart$ = r = new Q(i.insertBefore(A(), t), t, void 0, null != s ? s : {});
    }
    return r._$AI(t), r;
};
exports.render = lt;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var ht, ut;
const ct = m;
exports.UpdatingElement = ct;
class dt extends m {
    constructor() {
        super(...arguments), (this.renderOptions = { host: this }), (this.st = void 0);
    }
    createRenderRoot() {
        var t, i;
        const s = super.createRenderRoot();
        return ((null !== (t = (i = this.renderOptions).renderBefore) && void 0 !== t) ||
            (i.renderBefore = s.firstChild),
            s);
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
            super.update(t),
            (this.st = lt(i, this.renderRoot, this.renderOptions));
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this.st) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this.st) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return D;
    }
}
exports.LitElement = dt;
(dt.finalized = !0),
    (dt._$litElement$ = !0),
    null === (ht = globalThis.litElementHydrateSupport) ||
        void 0 === ht ||
        ht.call(globalThis, { LitElement: dt });
const at = globalThis.litElementPolyfillSupport;
null == at || at({ LitElement: dt });
const vt = {
    _$AK: (t, i, s) => {
        t._$AK(i, s);
    },
    _$AL: t => t._$AL,
};
exports._$LE = vt;
(null !== (ut = globalThis.litElementVersions) && void 0 !== ut
    ? ut
    : (globalThis.litElementVersions = [])).push("3.3.3");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = !1, { G: pt } = ot, yt = t => null === t || ("object" != typeof t && "function" != typeof t), bt = { HTML: 1, SVG: 2 }, mt = (t, i) => void 0 === i ? void 0 !== (null == t ? void 0 : t._$litType$) : (null == t ? void 0 : t._$litType$) === i, gt = t => {
    var i;
    return null != (null === (i = null == t ? void 0 : t._$litType$) || void 0 === i ? void 0 : i.h);
}, wt = t => void 0 !== (null == t ? void 0 : t._$litDirective$), _t = t => (null == t ? void 0 : t._$litDirective$), $t = t => void 0 === t.strings, St = () => document.createComment(""), Tt = (t, i, s) => {
    var e;
    const n = t._$AA.parentNode, o = void 0 === i ? t._$AB : i._$AA;
    if (void 0 === s) {
        const i = n.insertBefore(St(), o), e = n.insertBefore(St(), o);
        s = new pt(i, e, t, t.options);
    }
    else {
        const i = s._$AB.nextSibling, r = s._$AM, l = r !== t;
        if (l) {
            let i;
            null === (e = s._$AQ) || void 0 === e || e.call(s, t),
                (s._$AM = t),
                void 0 !== s._$AP && (i = t._$AU) !== r._$AU && s._$AP(i);
        }
        if (i !== o || l) {
            let t = s._$AA;
            for (; t !== i;) {
                const i = t.nextSibling;
                n.insertBefore(t, o), (t = i);
            }
        }
    }
    return s;
}, xt = (t, i, s = t) => (t._$AI(i, s), t), Et = {}, Ct = (t, i = Et) => (t._$AH = i), At = t => t._$AH, kt = t => {
    var i;
    null === (i = t._$AP) || void 0 === i || i.call(t, !1, !0);
    let s = t._$AA;
    const e = t._$AB.nextSibling;
    for (; s !== e;) {
        const t = s.nextSibling;
        s.remove(), (s = t);
    }
}, Mt = t => {
    t._$AR();
}, Pt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Ut = t => (...i) => ({ _$litDirective$: t, values: i });
exports.isServer = ft;
exports.isPrimitive = yt;
exports.TemplateResultType = bt;
exports.isTemplateResult = mt;
exports.isCompiledTemplateResult = gt;
exports.isDirectiveResult = wt;
exports.getDirectiveClass = _t;
exports.isSingleExpression = $t;
exports.insertPart = Tt;
exports.setChildPartValue = xt;
exports.setCommittedValue = Ct;
exports.getCommittedValue = At;
exports.removePart = kt;
exports.clearPart = Mt;
exports.PartType = Pt;
exports.directive = Ut;
class Vt {
    constructor(t) { }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, i, s) {
        (this.et = t), (this._$AM = i), (this.nt = s);
    }
    _$AS(t, i) {
        return this.update(t, i);
    }
    update(t, i) {
        return this.render(...i);
    }
}
exports.Directive = Vt;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Rt = (t, i) => {
    var s, e;
    const n = t._$AN;
    if (void 0 === n)
        return !1;
    for (const t of n)
        null === (e = (s = t)._$AO) || void 0 === e || e.call(s, i, !1), Rt(t, i);
    return !0;
}, Nt = t => {
    let i, s;
    do {
        if (void 0 === (i = t._$AM))
            break;
        (s = i._$AN), s.delete(t), (t = i);
    } while (0 === (null == s ? void 0 : s.size));
}, Ot = t => {
    for (let i; (i = t._$AM); t = i) {
        let s = i._$AN;
        if (void 0 === s)
            i._$AN = s = new Set();
        else if (s.has(t))
            break;
        s.add(t), zt(i);
    }
};
function Lt(t) {
    void 0 !== this._$AN ? (Nt(this), (this._$AM = t), Ot(this)) : (this._$AM = t);
}
function jt(t, i = !1, s = 0) {
    const e = this._$AH, n = this._$AN;
    if (void 0 !== n && 0 !== n.size)
        if (i)
            if (Array.isArray(e))
                for (let t = s; t < e.length; t++)
                    Rt(e[t], !1), Nt(e[t]);
            else
                null != e && (Rt(e, !1), Nt(e));
        else
            Rt(this, t);
}
const zt = t => {
    var i, s, e, n;
    2 == t.type &&
        ((null !== (i = (e = t)._$AP) && void 0 !== i) || (e._$AP = jt),
            (null !== (s = (n = t)._$AQ) && void 0 !== s) || (n._$AQ = Lt));
};
class Ht extends Vt {
    constructor() {
        super(...arguments), (this._$AN = void 0);
    }
    _$AT(t, i, s) {
        super._$AT(t, i, s), Ot(this), (this.isConnected = t._$AU);
    }
    _$AO(t, i = !0) {
        var s, e;
        t !== this.isConnected &&
            ((this.isConnected = t),
                t
                    ? null === (s = this.reconnected) || void 0 === s || s.call(this)
                    : null === (e = this.disconnected) || void 0 === e || e.call(this)),
            i && (Rt(this, t), Nt(this));
    }
    setValue(t) {
        if ($t(this.et))
            this.et._$AI(t, this);
        else {
            const i = [...this.et._$AH];
            (i[this.nt] = t), this.et._$AI(i, this, 0);
        }
    }
    disconnected() { }
    reconnected() { }
}
exports.AsyncDirective = Ht;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class It {
    constructor(t) {
        this.ot = t;
    }
    disconnect() {
        this.ot = void 0;
    }
    reconnect(t) {
        this.ot = t;
    }
    deref() {
        return this.ot;
    }
}
class Bt {
    constructor() {
        (this.rt = void 0), (this.lt = void 0);
    }
    get() {
        return this.rt;
    }
    pause() {
        var t;
        (null !== (t = this.rt) && void 0 !== t) || (this.rt = new Promise(t => (this.lt = t)));
    }
    resume() {
        var t;
        null === (t = this.lt) || void 0 === t || t.call(this), (this.rt = this.lt = void 0);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Dt extends Ht {
    constructor() {
        super(...arguments), (this.ht = new It(this)), (this.ut = new Bt());
    }
    render(t, i) {
        return D;
    }
    update(t, [i, s]) {
        if ((this.isConnected || this.disconnected(), i === this.ct))
            return;
        this.ct = i;
        let e = 0;
        const { ht: n, ut: o } = this;
        return ((async (t, i) => {
            for await (const s of t)
                if (!1 === (await i(s)))
                    return;
        })(i, async (t) => {
            for (; o.get();)
                await o.get();
            const r = n.deref();
            if (void 0 !== r) {
                if (r.ct !== i)
                    return !1;
                void 0 !== s && (t = s(t, e)), r.commitValue(t, e), e++;
            }
            return !0;
        }),
            D);
    }
    commitValue(t, i) {
        this.setValue(t);
    }
    disconnected() {
        this.ht.disconnect(), this.ut.pause();
    }
    reconnected() {
        this.ht.reconnect(this), this.ut.resume();
    }
}
exports.AsyncReplaceDirective = Dt;
const Wt = Ut(Dt), Zt = Ut(
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class extends Dt {
    constructor(t) {
        if ((super(t), 2 !== t.type))
            throw Error("asyncAppend can only be used in child expressions");
    }
    update(t, i) {
        return (this.st = t), super.update(t, i);
    }
    commitValue(t, i) {
        0 === i && Mt(this.st);
        const s = Tt(this.st);
        xt(s, t);
    }
}), qt = t => (gt(t) ? t._$litType$.h : t.strings), Ft = Ut(class extends Vt {
    constructor(t) {
        super(t), (this.dt = new WeakMap());
    }
    render(t) {
        return [t];
    }
    update(t, [i]) {
        const s = mt(this.vt) ? qt(this.vt) : null, e = mt(i) ? qt(i) : null;
        if (null !== s && (null === e || s !== e)) {
            const i = At(t).pop();
            let e = this.dt.get(s);
            if (void 0 === e) {
                const t = document.createDocumentFragment();
                (e = lt(W, t)), e.setConnected(!1), this.dt.set(s, e);
            }
            Ct(e, [i]), Tt(e, void 0, i);
        }
        if (null !== e) {
            if (null === s || s !== e) {
                const i = this.dt.get(e);
                if (void 0 !== i) {
                    const s = At(i).pop();
                    Mt(t), Tt(t, void 0, s), Ct(t, [s]);
                }
            }
            this.vt = i;
        }
        else
            this.vt = void 0;
        return this.render(i);
    }
}), Gt = (t, i, s) => {
    for (const s of i)
        if (s[0] === t)
            return (0, s[1])();
    return null == s ? void 0 : s();
}, Jt = Ut(
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class extends Vt {
    constructor(t) {
        var i;
        if ((super(t),
            1 !== t.type ||
                "class" !== t.name ||
                (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2))
            throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return (" " +
            Object.keys(t)
                .filter(i => t[i])
                .join(" ") +
            " ");
    }
    update(t, [i]) {
        var s, e;
        if (void 0 === this.ft) {
            (this.ft = new Set()),
                void 0 !== t.strings &&
                    (this.yt = new Set(t.strings
                        .join(" ")
                        .split(/\s/)
                        .filter(t => "" !== t)));
            for (const t in i)
                i[t] && !(null === (s = this.yt) || void 0 === s ? void 0 : s.has(t)) && this.ft.add(t);
            return this.render(i);
        }
        const n = t.element.classList;
        this.ft.forEach(t => {
            t in i || (n.remove(t), this.ft.delete(t));
        });
        for (const t in i) {
            const s = !!i[t];
            s === this.ft.has(t) ||
                (null === (e = this.yt) || void 0 === e ? void 0 : e.has(t)) ||
                (s ? (n.add(t), this.ft.add(t)) : (n.remove(t), this.ft.delete(t)));
        }
        return D;
    }
}), Kt = {}, Yt = Ut(class extends Vt {
    constructor() {
        super(...arguments), (this.bt = Kt);
    }
    render(t, i) {
        return i();
    }
    update(t, [i, s]) {
        if (Array.isArray(i)) {
            if (Array.isArray(this.bt) && this.bt.length === i.length && i.every((t, i) => t === this.bt[i]))
                return D;
        }
        else if (this.bt === i)
            return D;
        return (this.bt = Array.isArray(i) ? Array.from(i) : i), this.render(i, s);
    }
}), Qt = t => (null != t ? t : W);
exports.asyncReplace = Wt;
exports.asyncAppend = Zt;
exports.cache = Ft;
exports.choose = Gt;
exports.classMap = Jt;
exports.guard = Yt;
exports.ifDefined = Qt;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function* Xt(t, i) {
    const s = "function" == typeof i;
    if (void 0 !== t) {
        let e = -1;
        for (const n of t)
            e > -1 && (yield s ? i(e) : i), e++, yield n;
    }
}
exports.join = Xt;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ti = Ut(class extends Vt {
    constructor() {
        super(...arguments), (this.key = W);
    }
    render(t, i) {
        return (this.key = t), i;
    }
    update(t, [i, s]) {
        return i !== this.key && (Ct(t), (this.key = i)), s;
    }
}), ii = Ut(
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class extends Vt {
    constructor(t) {
        if ((super(t), 3 !== t.type && 1 !== t.type && 4 !== t.type))
            throw Error("The `live` directive is not allowed on child or event bindings");
        if (!$t(t))
            throw Error("`live` bindings can only contain a single expression");
    }
    render(t) {
        return t;
    }
    update(t, [i]) {
        if (i === D || i === W)
            return i;
        const s = t.element, e = t.name;
        if (3 === t.type) {
            if (i === s[e])
                return D;
        }
        else if (4 === t.type) {
            if (!!i === s.hasAttribute(e))
                return D;
        }
        else if (1 === t.type && s.getAttribute(e) === i + "")
            return D;
        return Ct(t), i;
    }
});
exports.keyed = ti;
exports.live = ii;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function* si(t, i) {
    if (void 0 !== t) {
        let s = 0;
        for (const e of t)
            yield i(e, s++);
    }
}
exports.map = si;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function* ei(t, i, s = 1) {
    const e = void 0 === i ? 0 : t;
    null != i || (i = t);
    for (let t = e; s > 0 ? t < i : i < t; t += s)
        yield t;
}
exports.range = ei;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ni = () => new oi();
exports.createRef = ni;
class oi {
}
const ri = new WeakMap(), li = Ut(class extends Ht {
    render(t) {
        return W;
    }
    update(t, [i]) {
        var s;
        const e = i !== this.ot;
        return (e && void 0 !== this.ot && this.gt(void 0),
            (e || this.wt !== this._t) &&
                ((this.ot = i),
                    (this.$t = null === (s = t.options) || void 0 === s ? void 0 : s.host),
                    this.gt((this._t = t.element))),
            W);
    }
    gt(t) {
        var i;
        if ("function" == typeof this.ot) {
            const s = null !== (i = this.$t) && void 0 !== i ? i : globalThis;
            let e = ri.get(s);
            void 0 === e && ((e = new WeakMap()), ri.set(s, e)),
                void 0 !== e.get(this.ot) && this.ot.call(this.$t, void 0),
                e.set(this.ot, t),
                void 0 !== t && this.ot.call(this.$t, t);
        }
        else
            this.ot.value = t;
    }
    get wt() {
        var t, i, s;
        return "function" == typeof this.ot
            ? null === (i = ri.get(null !== (t = this.$t) && void 0 !== t ? t : globalThis)) || void 0 === i
                ? void 0
                : i.get(this.ot)
            : null === (s = this.ot) || void 0 === s
                ? void 0
                : s.value;
    }
    disconnected() {
        this.wt === this._t && this.gt(void 0);
    }
    reconnected() {
        this.gt(this._t);
    }
}), hi = (t, i, s) => {
    const e = new Map();
    for (let n = i; n <= s; n++)
        e.set(t[n], n);
    return e;
}, ui = Ut(class extends Vt {
    constructor(t) {
        if ((super(t), 2 !== t.type))
            throw Error("repeat() can only be used in text expressions");
    }
    St(t, i, s) {
        let e;
        void 0 === s ? (s = i) : void 0 !== i && (e = i);
        const n = [], o = [];
        let r = 0;
        for (const i of t)
            (n[r] = e ? e(i, r) : r), (o[r] = s(i, r)), r++;
        return { values: o, keys: n };
    }
    render(t, i, s) {
        return this.St(t, i, s).values;
    }
    update(t, [i, s, e]) {
        var n;
        const o = At(t), { values: r, keys: l } = this.St(i, s, e);
        if (!Array.isArray(o))
            return (this.Tt = l), r;
        const h = null !== (n = this.Tt) && void 0 !== n ? n : (this.Tt = []), u = [];
        let c, d, a = 0, v = o.length - 1, f = 0, p = r.length - 1;
        for (; a <= v && f <= p;)
            if (null === o[a])
                a++;
            else if (null === o[v])
                v--;
            else if (h[a] === l[f])
                (u[f] = xt(o[a], r[f])), a++, f++;
            else if (h[v] === l[p])
                (u[p] = xt(o[v], r[p])), v--, p--;
            else if (h[a] === l[p])
                (u[p] = xt(o[a], r[p])), Tt(t, u[p + 1], o[a]), a++, p--;
            else if (h[v] === l[f])
                (u[f] = xt(o[v], r[f])), Tt(t, o[a], o[v]), v--, f++;
            else if ((void 0 === c && ((c = hi(l, f, p)), (d = hi(h, a, v))), c.has(h[a])))
                if (c.has(h[v])) {
                    const i = d.get(l[f]), s = void 0 !== i ? o[i] : null;
                    if (null === s) {
                        const i = Tt(t, o[a]);
                        xt(i, r[f]), (u[f] = i);
                    }
                    else
                        (u[f] = xt(s, r[f])), Tt(t, o[a], s), (o[i] = null);
                    f++;
                }
                else
                    kt(o[v]), v--;
            else
                kt(o[a]), a++;
        for (; f <= p;) {
            const i = Tt(t, u[p + 1]);
            xt(i, r[f]), (u[f++] = i);
        }
        for (; a <= v;) {
            const t = o[a++];
            null !== t && kt(t);
        }
        return (this.Tt = l), Ct(t, u), D;
    }
}), ci = "important", di = " !" + ci, ai = Ut(class extends Vt {
    constructor(t) {
        var i;
        if ((super(t),
            1 !== t.type ||
                "style" !== t.name ||
                (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2))
            throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((i, s) => {
            const e = t[s];
            return null == e
                ? i
                : i +
                    `${(s = s.includes("-")
                        ? s
                        : s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase())}:${e};`;
        }, "");
    }
    update(t, [i]) {
        const { style: s } = t.element;
        if (void 0 === this.xt) {
            this.xt = new Set();
            for (const t in i)
                this.xt.add(t);
            return this.render(i);
        }
        this.xt.forEach(t => {
            null == i[t] && (this.xt.delete(t), t.includes("-") ? s.removeProperty(t) : (s[t] = ""));
        });
        for (const t in i) {
            const e = i[t];
            if (null != e) {
                this.xt.add(t);
                const i = "string" == typeof e && e.endsWith(di);
                t.includes("-") || i ? s.setProperty(t, i ? e.slice(0, -11) : e, i ? ci : "") : (s[t] = e);
            }
        }
        return D;
    }
}), vi = Ut(
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class extends Vt {
    constructor(t) {
        if ((super(t), 2 !== t.type))
            throw Error("templateContent can only be used in child bindings");
    }
    render(t) {
        return this.Et === t ? D : ((this.Et = t), document.importNode(t.content, !0));
    }
});
exports.ref = li;
exports.repeat = ui;
exports.styleMap = ai;
exports.templateContent = vi;
class fi extends Vt {
    constructor(t) {
        if ((super(t), (this.vt = W), 2 !== t.type))
            throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(t) {
        if (t === W || null == t)
            return (this.Ct = void 0), (this.vt = t);
        if (t === D)
            return t;
        if ("string" != typeof t)
            throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (t === this.vt)
            return this.Ct;
        this.vt = t;
        const i = [t];
        return (i.raw = i), (this.Ct = { _$litType$: this.constructor.resultType, strings: i, values: [] });
    }
}
exports.UnsafeHTMLDirective = fi;
(fi.directiveName = "unsafeHTML"), (fi.resultType = 1);
const pi = Ut(fi);
exports.unsafeHTML = pi;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class yi extends fi {
}
(yi.directiveName = "unsafeSVG"), (yi.resultType = 2);
const bi = Ut(yi), mi = t => !yt(t) && "function" == typeof t.then, gi = 1073741823;
exports.unsafeSVG = bi;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class wi extends Ht {
    constructor() {
        super(...arguments), (this.At = gi), (this.kt = []), (this.ht = new It(this)), (this.ut = new Bt());
    }
    render(...t) {
        var i;
        return null !== (i = t.find(t => !mi(t))) && void 0 !== i ? i : D;
    }
    update(t, i) {
        const s = this.kt;
        let e = s.length;
        this.kt = i;
        const n = this.ht, o = this.ut;
        this.isConnected || this.disconnected();
        for (let t = 0; t < i.length && !(t > this.At); t++) {
            const r = i[t];
            if (!mi(r))
                return (this.At = t), r;
            (t < e && r === s[t]) ||
                ((this.At = gi),
                    (e = 0),
                    Promise.resolve(r).then(async (t) => {
                        for (; o.get();)
                            await o.get();
                        const i = n.deref();
                        if (void 0 !== i) {
                            const s = i.kt.indexOf(r);
                            s > -1 && s < i.At && ((i.At = s), i.setValue(t));
                        }
                    }));
        }
        return D;
    }
    disconnected() {
        this.ht.disconnect(), this.ut.pause();
    }
    reconnected() {
        this.ht.reconnect(this), this.ut.resume();
    }
}
exports.UntilDirective = wi;
const _i = Ut(wi);
exports.until = _i;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $i(t, i, s) {
    return t ? i() : null == s ? void 0 : s();
}
exports.when = $i;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Si = Symbol.for(""), Ti = t => {
    if ((null == t ? void 0 : t.r) === Si)
        return null == t ? void 0 : t._$litStatic$;
}, xi = t => ({ _$litStatic$: t, r: Si }), Ei = (t, ...i) => ({
    _$litStatic$: i.reduce((i, s, e) => i +
        (t => {
            if (void 0 !== t._$litStatic$)
                return t._$litStatic$;
            throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`);
        })(s) +
        t[e + 1], t[0]),
    r: Si,
}), Ci = new Map(), Ai = t => (i, ...s) => {
    const e = s.length;
    let n, o;
    const r = [], l = [];
    let h, u = 0, c = !1;
    for (; u < e;) {
        for (h = i[u]; u < e && void 0 !== ((o = s[u]), (n = Ti(o)));)
            (h += n + i[++u]), (c = !0);
        u !== e && l.push(o), r.push(h), u++;
    }
    if ((u === e && r.push(i[e]), c)) {
        const t = r.join("$$lit$$");
        void 0 === (i = Ci.get(t)) && ((r.raw = r), Ci.set(t, (i = r))), (s = l);
    }
    return t(i, ...s);
}, ki = Ai(I), Mi = Ai(B);
exports.unsafeStatic = xi;
exports.literal = Ei;
exports.withStatic = Ai;
exports.staticHtml = ki;
exports.staticSvg = Mi;

},{}],4:[function(require,module,exports){
"strict mode";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2026 Robert A. Howell
const lit_all_min_js_1 = require("../js/lit-all.min.js");
class AcronymsElem extends lit_all_min_js_1.LitElement {
    title = {};
    id = {};
    acronyms = [];
    // Define scoped styles right with your component, in plain CSS
    static styles = (0, lit_all_min_js_1.css) `
    .acronymList {
      display: block;
      width: fit-content;
      border: 0.5mm solid var(--clr-blue);
      box-shadow: 0.7px 0px 1.4px rgba(0, 0, 0, 0.303), 1.7px 0px 4.7px rgba(0, 0, 0, 0.447),
        -7px 0px 11px rgba(0, 0, 0, 0.75);
      border-radius: 15px;
      padding: 0 1em 1em 1em;
      margin: 2em;
      background-color: var(--clr-primary-400);
      color: var(--clr-all-primary-900);
    }
    .acronymList:hover {
      background-color: var(--clr-primary-500);
    }
    .acronymList ul {
      line-height: 1em;
      font-family: Ariel, sans-serif;
      padding: 0;
    }
    .acronymList li {
      list-style-type: none;
    }
    .acronymList h3 {
      color: var(--clr-primary-500);
      margin-bottom: 0.5em;
      font-size: 1.2em;
    }
    .acronymList ul {
      text-align: left;
      margin: 0;
    }
    @media only screen and (min-width: 320px) {
      .acronymList ul {
        padding: 0em 1em;
      }
    }
    @media only screen and (min-width: 501px) {
      .acronymList ul {
        font-size: 20px;
      }
      .acronymList h3 {
        color: var(--clr-all-primary-900);
        font-size: 1.4em;
      }
    }
  `;
    constructor() {
        super();
        const PageAcronyms = [
            {
                page: "/pages/wifi.html",
                htmlTitle: "wifi",
                acronyms: [
                    "SSID",
                    "802.11a",
                    "802.11b",
                    "802.11g",
                    "802.11n",
                    "802.11ac",
                    "802.11ax",
                    "WLAN",
                    "IPv4",
                    "IPv6",
                    "MAC",
                    "AP",
                ],
            },
            {
                page: "/pages/networkspeed.html",
                htmlTitle: "networkspeed",
                acronyms: ["Ping", "NIC", "BPS", "MBPS", "GBPS", "Bit", "Byte", "ISP"],
            },
            {
                page: "/pages/markup.html",
                htmlTitle: "markup",
                acronyms: ["body", "head", "div", "href", "lang", "ul", "ol"],
            },
            {
                page: "/pages/ipaddress.html",
                htmlTitle: "ipaddress",
                acronyms: [
                    "IPV4",
                    "IPV6",
                    "TCP/IP",
                    "OSI",
                    "DHCP",
                    "DNS",
                    "Subnet Mask",
                    "CIDR",
                    "LAN",
                    "NAT",
                    "MAC",
                ],
            },
            {
                page: "/guides/https.html",
                htmlTitle: "https",
                acronyms: [
                    "KMS",
                    "PKI",
                    "RSA",
                    "SSL",
                    "TLS",
                    "SHA",
                    "AES",
                    "EFS",
                    "TPM",
                    "BitLocker",
                    "Encrypt",
                    "Decrypt",
                    "Signature",
                    "Elliptic Curve",
                ],
            },
            {
                page: "/pages/htmlresponses.html",
                htmlTitle: "htmlresponses",
                acronyms: [
                    "HTTP",
                    "HTTPS",
                    "TCP",
                    "UDP",
                    "DOM",
                    "Asset",
                    "Frame",
                    "Auth",
                    "Transport",
                    "Response",
                    "Verb",
                ],
            },
            {
                page: "/pages/domainlookup.html",
                htmlTitle: "domainlookup",
                acronyms: [
                    "DNS",
                    "DNSSEC",
                    "DDNS",
                    "FQDN",
                    "NetBIOS",
                    "Nameserver",
                    "OU",
                    "Top-level",
                    '"A" record',
                    "CNAME",
                ],
            },
            {
                page: "/pages/drives.html",
                htmlTitle: "drives",
                acronyms: [
                    "CSOM",
                    "SSOM",
                    "PS",
                    "NS (namespace)",
                    "Tree",
                    "Objects",
                    "Registry",
                    "Variables",
                    "TCP/IP",
                    "TLS",
                    "Cyphertext",
                    "CN",
                    "EKU",
                ],
            },
            {
                page: "/pages/dns.html",
                htmlTitle: "dns",
                acronyms: ["DDNS", "DNSSEC", '"A" record', "CAA", "NS (name server)", '"MX" record', "QPS"],
            },
            {
                page: "/pages/dom.html",
                htmlTitle: "dom",
                acronyms: [
                    "DOM",
                    "CSS",
                    "HTML",
                    "asset",
                    "property",
                    "attribute",
                    "variable",
                    "reference",
                    "function",
                    "root",
                ],
            },
            {
                page: "/pages/svg.html",
                htmlTitle: "svg",
                acronyms: ["XML", "XHTML", "RDF", "ISO", "DCMES", "CC License"],
            },
            {
                page: "/pages/javascript.html",
                htmlTitle: "javascript",
                acronyms: ["Defer", "Synchronous", "ES", "GUI", "JSON", "AJAX", "IIFE", "IDE", "DOM"],
            },
            {
                page: "/pages/http.html",
                htmlTitle: "javascript",
                acronyms: ["HTTP", "TCP", "UDP", "DNS", "TLS", "IP", "HTML", "CSS", "JS", "API"],
            },
            {
                page: "/pages/latency.html",
                htmlTitle: "javascript",
                acronyms: ["CMS", "TCP", "TLS", "IP", "PS (packet switching)", "DNS"],
            },
        ];
        const currentPage = PageAcronyms.filter(page => page.page === window.location.pathname);
        // Declare reactive properties
        this.title = "Common Acronyms";
        this.id = currentPage[0].htmlTitle;
        this.acronyms = currentPage[0].acronyms;
    }
    buildList() { }
    // Render the UI as a function of component state
    render() {
        let listitems = [];
        for (const acronyms of this.acronyms) {
            listitems.push((0, lit_all_min_js_1.html) `<li>${acronyms}</li>`);
        }
        return (0, lit_all_min_js_1.html) ` <aside class="acronymList">
      <h3>${this.title}:</h3>
      <ul id="acr-${this.id}">
        ${listitems}
      </ul>
    </aside>`;
    }
}
exports.default = AcronymsElem;
},{"../js/lit-all.min.js":3}],5:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCodeWidget = void 0;
class ColorCodeWidget {
    elems;
    color;
    resetbtn;
    constructor(colorlesselements, colors, resetbtn) {
        this.elems = colorlesselements;
        this.color = colors;
        this.resetbtn = resetbtn;
        this.resetbtn.style.setProperty("z-index", "1");
        for (let i = 0; i < this.elems.length; i++) {
            this.cssExampleHighlighting(this.elems[i], this.color[i]);
            this.cssExampleHighlightReset(this.elems[i]);
        }
    }
    /**
     * Function to color the example area's elements using css
     * @param elemslist - Node list of HTMLElelements. I.E. using query.SelectorAll()
     * @param color - String of CSS color value
     */
    cssExampleHighlighting(elemslist, color) {
        elemslist.forEach(elem => {
            elem.addEventListener("mouseover", event => {
                event.preventDefault();
                elemslist.forEach(elem => {
                    elem.style.color = color;
                });
            });
            elem.addEventListener("click", event => {
                event.preventDefault();
                elemslist.forEach(elem => {
                    elem.style.color = "initial";
                });
            });
        });
    }
    //function to reset the css code properties color to original
    cssExampleHighlightReset(elemslist) {
        this.resetbtn.addEventListener("click", () => {
            console.log("Reset button clicked.");
            elemslist.forEach(elem => {
                elem.style.color = "initial";
            });
        });
    }
}
exports.ColorCodeWidget = ColorCodeWidget;
},{}],6:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
exports.RwbInvalidValueError = exports.RwbDomException = exports.RwbSyntaxError = exports.RwbReferenceError = void 0;
/** Create this object to record reference errors. */
class RwbError {
    /**Counts the number of objects instantiated */
    static count = 0;
    constructor() {
        RwbError.count++;
    }
    /**
     * Check an element is null using querySelector()
     *
     *       try {
     *           elem = document.querySelector(query);
     *       }
     *       catch {
     *           //function exception handling
     *       }
     *
     * @param componentName - A name for the component in use.
     * @param cssQuery - A css string.
     * @param logMessage - Choose to log a message to console.
     * @param supressException - Choose to supress the exception log.
     * @returns HTMLElement from querySelector()
     */
    static checkSelectedElement(componentName, cssQuery, logMessage, supressException) {
        let elem;
        let logErrMssg = true; //Log message option default
        if (!logMessage)
            logErrMssg = logMessage;
        let supressExcpt = false; //Supress message option default
        if (supressException)
            supressExcpt = true;
        let query = `${cssQuery}`;
        // Add dictionary widget if an element with that class is on a page
        try {
            elem = document.querySelector(query);
        }
        catch {
            Object.create(new RwbReferenceError("GetElement", `Could not get element: '${query}'`));
        }
        if (elem == null) {
            if (logErrMssg)
                console.warn(`%cNo element found with query: ${query}.`, "color: orange;");
            if (!supressExcpt)
                Object.create(new RwbReferenceError(`${componentName}NullReference`, `Element not found`));
            return null;
        }
        return elem;
    }
    /**
     * Find if local storage is null. Optional choose to also check if local storage string is empty.
     *
     * @param componentName - A name for the component in use.
     * @param key - The key's name you're checking for.
     * @param checkEmptyString - Optional parameter to check for empty key-value.
     * @param logMessage - Choose to log a message to console.
     * @returns Boolean true or false
     */
    static checkLocalStorageEqualNull(componentName, key, checkEmptyString, logMessage) {
        let logMssg = true;
        if (!logMessage)
            logMssg = logMessage;
        if (localStorage.getItem(`${key}`) == null) {
            if (logMssg)
                console.info(`%cNo local storage for ${componentName}.`, "color:purple;");
            return true;
        }
        if (checkEmptyString)
            return RwbError.checkLocalStorageNullorEmpty(componentName, key, logMssg);
    }
    /**
     * Find if local storage is null or empty.
     * @param componentName - A name for the component in use.
     * @param key - The key's name you're checking for.
     * @param logMessage - Choose to log a message to console.
     * @returns Boolean true or false
     */
    static checkLocalStorageNullorEmpty(componentName, key, logMessage) {
        let logMssg = true;
        if (!logMessage)
            logMssg = logMessage;
        let test;
        try {
            test = localStorage.getItem(`${key}`);
        }
        catch {
            throw new Error(`Could not get local storage key: ${key}`);
        }
        if (test == null) {
            if (logMssg)
                console.warn(`%cLocal storage key not found: ${key}.`, "color: yellow;font-weight:bold;");
            Object.create(new RwbReferenceError(`${componentName}ReferenceException`, `Key not found`));
            return true;
        }
        if (test == "" || test == "[]") {
            if (logMssg)
                console.warn(`%cLocal storage value is empty for key: ${key}`, "color: yellow;font-weight:bold;");
            Object.create(new RwbReferenceError(`${componentName}ReferenceException`, `Value is empty`));
            return true;
        }
        return false;
    }
}
exports.default = RwbError;
/** Create this object to store reference error data. */
class RwbReferenceError extends ReferenceError {
    /**Counts the number of objects instantiated */
    static count = 0;
    name;
    message;
    page;
    refError;
    constructor(name, message) {
        super();
        this.name = name;
        this.message = message;
        this.page = window.location.pathname;
        let err = new ReferenceError(this.message);
        this.refError = err;
        console.error(`%c<RWB>%cExecution experienced a reference error:\n%o\n%c</RWB>`, "color:red;font-weight:bold;", "color:red;", this.refError, "color:red;font-weight:bold;");
        RwbReferenceError.count++;
    }
}
exports.RwbReferenceError = RwbReferenceError;
/** Create this object to store syntax error data. */
class RwbSyntaxError extends SyntaxError {
    /**Counts the number of objects instantiated */
    static count = 0;
    name;
    message;
    page;
    syntaxError;
    constructor(name, message) {
        super();
        this.name = name;
        this.message = message;
        this.page = window.location.pathname;
        let err = new SyntaxError(this.message);
        this.syntaxError = err;
        console.error(`%c<RWB>%cExecution experienced a syntax error:\n%o\n%c</RWB>`, "color:red;font-weight:bold;", "color:red;", this.syntaxError, "color:red;font-weight:bold;");
        RwbSyntaxError.count++;
    }
}
exports.RwbSyntaxError = RwbSyntaxError;
class RwbDomException extends DOMException {
    /**Counts the number of objects instantiated */
    static count = 0;
    name;
    message;
    stack;
    page;
    domError;
    constructor(name, message, error) {
        super();
        this.name = name;
        this.message = message;
        this.stack = error;
        this.page = window.location.pathname;
        let err = new DOMException(this.message);
        this.domError = err;
        console.error(`%c<RWB>%cExecution experienced a DOM error:\n%o\n%c</RWB>`, "color:red;font-weight:bold;", "color:red;", this.stack, "color:red;font-weight:bold;");
        RwbDomException.count++;
    }
}
exports.RwbDomException = RwbDomException;
class RwbInvalidValueError extends RangeError {
    /**Counts the number of objects instantiated */
    static count = 0;
    name;
    message;
    page;
    syntaxError;
    constructor(name, message) {
        super();
        this.name = name;
        this.message = message;
        this.page = window.location.pathname;
        let err = new RangeError(this.message);
        this.syntaxError = err;
        console.error(`%c<RWB>%cValue out of range exception:\n%o\n%c</RWB>`, "color:red;font-weight:bold;", "color:red;", this.syntaxError, "color:red;font-weight:bold;");
        RwbSyntaxError.count++;
    }
}
exports.RwbInvalidValueError = RwbInvalidValueError;
},{}],7:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
/** Create this object to record performance start and end marks. */
class RwbPerf {
    /**Counts the number of objects instantiated */
    static count = 0;
    scriptRuntimeMarks = {
        name: null,
        startMark: null,
        endMark: null,
    };
    /** Instantiating a ScriptPerf records the performance start mark. */
    constructor(scriptName) {
        this.scriptRuntimeMarks.name = scriptName;
        this.scriptRuntimeMarks.startMark = performance.mark(`${this.scriptRuntimeMarks.name}-start`);
        RwbPerf.count++;
    }
    /** Call end() to set the end time stamp. */
    end() {
        this.scriptRuntimeMarks.endMark = performance.mark(`${this.scriptRuntimeMarks.name}-end`);
        this.measure();
    }
    /** A console output of this object's performance measurement. */
    measure() {
        let measure = performance.measure(this.scriptRuntimeMarks.name, this.scriptRuntimeMarks.startMark.name, this.scriptRuntimeMarks.endMark.name);
        return console.debug(`${this.scriptRuntimeMarks.name} execution time is: ${measure.duration}`);
    }
}
exports.default = RwbPerf;
},{}],8:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const acronyms_element_1 = __importDefault(require("./models/acronyms-element"));
const colorCode_1 = require("./components/page/colorCode");
const scriptPerf_1 = __importDefault(require("./models/scriptPerf"));
const domainLookup_1 = __importDefault(require("./components/page/domainLookup"));
const pageComponents = {
    checkPage: (page) => {
        try {
            switch (page) {
                // Initialize htmlexColorCode components
                case "/pages/html.html":
                    colorCode_1.htmlexColorCode.init();
                    break;
                // Initialize domain name lookup
                case "/pages/domainlookup.html":
                    domainLookup_1.default.init();
                    break;
            }
        }
        catch (error) {
            console.error(`Error loading page component: ${error}`);
        }
    },
    init: () => {
        let page = window.location.pathname;
        const pagePerf = new scriptPerf_1.default("Pagecomponents"); //measure performance
        customElements.define("acronyms-list", acronyms_element_1.default);
        pageComponents.checkPage(page);
        pagePerf.end(); //end performance measure
    },
    load: () => {
        //TODO: Loading screen logic
    },
};
window.addEventListener("DOMContentLoaded", pageComponents.init);
},{"./components/page/colorCode":1,"./components/page/domainLookup":2,"./models/acronyms-element":4,"./models/scriptPerf":7}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9wYWdlL2NvbG9yQ29kZS50cyIsInNyYy9jb21wb25lbnRzL3BhZ2UvZG9tYWluTG9va3VwLnRzIiwic3JjL2pzL2xpdC1hbGwubWluLmpzIiwic3JjL21vZGVscy9hY3Jvbnltcy1lbGVtZW50LnRzIiwic3JjL21vZGVscy9jb2xvckNvZGUudHMiLCJzcmMvbW9kZWxzL3J3YkVycm9yQnVzLnRzIiwic3JjL21vZGVscy9zY3JpcHRQZXJmLnRzIiwic3JjL3BhZ2VzQ29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSw0Q0FBNEM7Ozs7OztBQUU1QyxzREFBeUQ7QUFDekQsMkVBQWdEO0FBRWhELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDVCxtRUFBbUU7UUFDbkUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBNEIsQ0FBQztRQUNqRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUE0QixDQUFDO1FBQ2xGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQTRCLENBQUM7UUFDaEYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBNEIsQ0FBQztRQUV0RixnRkFBZ0Y7UUFDaEYsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxRSxNQUFNLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FDOUIseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsa0JBQWtCLENBQ25CLENBQUM7UUFFRixzQkFBc0I7UUFDdEIsSUFBSSxPQUFPLEdBQUcscUJBQVEsQ0FB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QUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3hDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENB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SUFBSSxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUNELElBQUksQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDO1FBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNULENBQUMsRUFBRSxDQUFDO1FBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxDQUFDO1FBQ04sS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUk7WUFDaEcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUN4QixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBQ0QsWUFBWSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQztRQUNOLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUks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SUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25HLENBQUMsRUFDRCxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQzdELEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFDbEQsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFDOUIsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQ3JDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDZixJQUFJLENBQUMsQ0FBQztJQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN6QixDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVB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LENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRixDQUNGLEVBQ0QsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQzlDLEVBQUUsR0FBRyxFQUFFLENBQ0wsS0FBTSxTQUFRLEVBQUU7SUFDZCxZQUFZLENBQUM7UUFDWCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDeEMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FB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Q0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRixDQUNGLEVBQ0QsRUFBRSxHQUFHLEVBQUUsRUFDUCxFQUFFLEdBQUcsRUFBRSxDQUNMLEtBQU0sU0FBUSxFQUFFO0lBQ2Q7UUFDRSxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMs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QUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDNUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbkIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JB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RyxFQUFFLENBQUM7SUFDVCxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBSTtRQUNkLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ3RDO0lBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDMUU7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDLEVBQ0gsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDVixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBb0VMLDBCQUFZO0FBdEJaLHFCQUFPO0FBeUJQLHdCQUFVO0FBWlYsd0JBQVU7QUFDVix1QkFBUztBQWFqQix1Q0FBdUM7O0FDMW1EdkMsYUFBYSxDQUFDOzs7QUFDZCw0Q0FBNEM7QUFDNUMseURBQTZEO0FBRTdELE1BQXFCLFlBQWEsU0FBUSwyQkFBVTtJQUNsRCxLQUFLLEdBQVEsRUFBRSxDQUFDO0lBQ2hCLEVBQUUsR0FBUSxFQUFFLENBQUM7SUFDYixRQUFRLEdBQVEsRUFBRSxDQUFDO0lBQ25CLCtEQUErRDtJQUMvRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUEsb0JBQUcsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQ2xCLENBQUM7SUFFRjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsTUFBTSxZQUFZLEdBQUc7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDUixNQUFNO29CQUNOLFNBQVM7b0JBQ1QsU0FBUztvQkFDVCxTQUFTO29CQUNULFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixVQUFVO29CQUNWLE1BQU07b0JBQ04sTUFBTTtvQkFDTixNQUFNO29CQUNOLEtBQUs7b0JBQ0wsSUFBSTtpQkFDTDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDBCQUEwQjtnQkFDaEMsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7YUFDdkU7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQzlEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLFFBQVEsRUFBRTtvQkFDUixNQUFNO29CQUNOLE1BQU07b0JBQ04sUUFBUTtvQkFDUixLQUFLO29CQUNMLE1BQU07b0JBQ04sS0FBSztvQkFDTCxhQUFhO29CQUNiLE1BQU07b0JBQ04sS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7aUJBQ047YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsV0FBVztvQkFDWCxTQUFTO29CQUNULFNBQVM7b0JBQ1QsV0FBVztvQkFDWCxnQkFBZ0I7aUJBQ2pCO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxTQUFTLEVBQUUsZUFBZTtnQkFDMUIsUUFBUSxFQUFFO29CQUNSLE1BQU07b0JBQ04sT0FBTztvQkFDUCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxPQUFPO29CQUNQLE9BQU87b0JBQ1AsTUFBTTtvQkFDTixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsTUFBTTtpQkFDUDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDBCQUEwQjtnQkFDaEMsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFFBQVEsRUFBRTtvQkFDUixLQUFLO29CQUNMLFFBQVE7b0JBQ1IsTUFBTTtvQkFDTixNQUFNO29CQUNOLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixJQUFJO29CQUNKLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixPQUFPO2lCQUNSO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsUUFBUSxFQUFFO29CQUNSLE1BQU07b0JBQ04sTUFBTTtvQkFDTixJQUFJO29CQUNKLGdCQUFnQjtvQkFDaEIsTUFBTTtvQkFDTixTQUFTO29CQUNULFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxRQUFRO29CQUNSLEtBQUs7b0JBQ0wsWUFBWTtvQkFDWixJQUFJO29CQUNKLEtBQUs7aUJBQ047YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQzthQUM1RjtZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixRQUFRLEVBQUU7b0JBQ1IsS0FBSztvQkFDTCxLQUFLO29CQUNMLE1BQU07b0JBQ04sT0FBTztvQkFDUCxVQUFVO29CQUNWLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsTUFBTTtpQkFDUDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQ2hFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2FBQ3RGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUNqRjtZQUNEO2dCQUNFLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDO2FBQ3RFO1NBQ0YsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEYsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDL0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsU0FBUyxLQUFJLENBQUM7SUFFZCxpREFBaUQ7SUFDakQsTUFBTTtRQUNKLElBQUksU0FBUyxHQUFVLEVBQUUsQ0FBQztRQUMxQixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFBLHFCQUFJLEVBQUEsT0FBTyxRQUFRLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxJQUFBLHFCQUFJLEVBQUE7WUFDSCxJQUFJLENBQUMsS0FBSztvQkFDRixJQUFJLENBQUMsRUFBRTtVQUNqQixTQUFTOzthQUVOLENBQUM7SUFDWixDQUFDOztBQS9PSCwrQkFnUEM7OztBQ3BQRCw0Q0FBNEM7OztBQUU1QyxNQUFhLGVBQWU7SUFDbEIsS0FBSyxDQUE0QjtJQUNqQyxLQUFLLENBQVc7SUFDaEIsUUFBUSxDQUFvQjtJQUNwQyxZQUFZLGlCQUE0QyxFQUFFLE1BQWdCLEVBQUUsUUFBMkI7UUFDckcsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssc0JBQXNCLENBQUMsU0FBa0MsRUFBRSxLQUFhO1FBQzlFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDekMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZEQUE2RDtJQUNyRCx3QkFBd0IsQ0FBQyxTQUFrQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBL0NELDBDQStDQzs7O0FDakRELDRDQUE0Qzs7O0FBRTVDLHFEQUFxRDtBQUNyRCxNQUFxQixRQUFRO0lBQzNCLCtDQUErQztJQUN4QyxNQUFNLENBQUMsS0FBSyxHQUFXLENBQUMsQ0FBQztJQUVoQztRQUNFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0ksTUFBTSxDQUFDLG9CQUFvQixDQUNoQyxhQUFxQixFQUNyQixRQUFnQixFQUNoQixVQUFvQixFQUNwQixnQkFBMEI7UUFFMUIsSUFBSSxJQUF3QixDQUFDO1FBQzdCLElBQUksVUFBVSxHQUFZLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUM1RCxJQUFJLENBQUMsVUFBVTtZQUFFLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDekMsSUFBSSxZQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsZ0NBQWdDO1FBQ25FLElBQUksZ0JBQWdCO1lBQUUsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBVyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBRWxDLG1FQUFtRTtRQUNuRSxJQUFJO1lBQ0YsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7UUFBQyxNQUFNO1lBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFlBQVksRUFBRSwyQkFBMkIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksVUFBVTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxLQUFLLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxZQUFZO2dCQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLGFBQWEsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM3RixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsMEJBQTBCLENBQ3RDLGFBQXFCLEVBQ3JCLEdBQVcsRUFDWCxnQkFBMEIsRUFDMUIsVUFBb0I7UUFFcEIsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUN0QyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUMxQyxJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsYUFBYSxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDdkYsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksZ0JBQWdCO1lBQUUsT0FBTyxRQUFRLENBQUMsNEJBQTRCLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLDRCQUE0QixDQUFDLGFBQXFCLEVBQUUsR0FBVyxFQUFFLFVBQW9CO1FBQ2pHLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDdEMsSUFBSSxJQUFtQixDQUFDO1FBRXhCLElBQUk7WUFDRixJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdkM7UUFBQyxNQUFNO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxHQUFHLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztZQUN2RyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQWlCLENBQUMsR0FBRyxhQUFhLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDNUYsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksT0FBTztnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxHQUFHLEVBQUUsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ3BHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLGFBQWEsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzdGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O0FBekdILDJCQTBHQztBQUVELHdEQUF3RDtBQUN4RCxNQUFhLGlCQUFrQixTQUFRLGNBQWM7SUFDbkQsK0NBQStDO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBUztJQUNiLE9BQU8sQ0FBUztJQUNoQixJQUFJLENBQVM7SUFDWixRQUFRLENBQWlCO0lBRWpDLFlBQVksSUFBWSxFQUFFLE9BQWU7UUFDdkMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixPQUFPLENBQUMsS0FBSyxDQUNYLGlFQUFpRSxFQUNqRSw2QkFBNkIsRUFDN0IsWUFBWSxFQUNaLElBQUksQ0FBQyxRQUFRLEVBQ2IsNkJBQTZCLENBQzlCLENBQUM7UUFDRixpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOztBQXZCSCw4Q0F3QkM7QUFFRCxxREFBcUQ7QUFDckQsTUFBYSxjQUFlLFNBQVEsV0FBVztJQUM3QywrQ0FBK0M7SUFDeEMsTUFBTSxDQUFDLEtBQUssR0FBVyxDQUFDLENBQUM7SUFDekIsSUFBSSxDQUFTO0lBQ2IsT0FBTyxDQUFTO0lBQ2hCLElBQUksQ0FBUztJQUNaLFdBQVcsQ0FBYztJQUVqQyxZQUFZLElBQVksRUFBRSxPQUFlO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FDWCw4REFBOEQsRUFDOUQsNkJBQTZCLEVBQzdCLFlBQVksRUFDWixJQUFJLENBQUMsV0FBVyxFQUNoQiw2QkFBNkIsQ0FDOUIsQ0FBQztRQUNGLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztBQXZCSCx3Q0F3QkM7QUFFRCxNQUFhLGVBQWdCLFNBQVEsWUFBWTtJQUMvQywrQ0FBK0M7SUFDeEMsTUFBTSxDQUFDLEtBQUssR0FBVyxDQUFDLENBQUM7SUFDekIsSUFBSSxDQUFTO0lBQ2IsT0FBTyxDQUFTO0lBQ2hCLEtBQUssQ0FBTTtJQUNYLElBQUksQ0FBUztJQUNaLFFBQVEsQ0FBZTtJQUUvQixZQUFZLElBQVksRUFBRSxPQUFlLEVBQUUsS0FBVTtRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQ1gsMkRBQTJELEVBQzNELDZCQUE2QixFQUM3QixZQUFZLEVBQ1osSUFBSSxDQUFDLEtBQUssRUFDViw2QkFBNkIsQ0FDOUIsQ0FBQztRQUNGLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDOztBQXpCSCwwQ0EwQkM7QUFFRCxNQUFhLG9CQUFxQixTQUFRLFVBQVU7SUFDbEQsK0NBQStDO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBUztJQUNiLE9BQU8sQ0FBUztJQUNoQixJQUFJLENBQVM7SUFDWixXQUFXLENBQWE7SUFFaEMsWUFBWSxJQUFZLEVBQUUsT0FBZTtRQUN2QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQ1gsc0RBQXNELEVBQ3RELDZCQUE2QixFQUM3QixZQUFZLEVBQ1osSUFBSSxDQUFDLFdBQVcsRUFDaEIsNkJBQTZCLENBQzlCLENBQUM7UUFDRixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7QUF2Qkgsb0RBd0JDOzs7QUN6TkQsNENBQTRDOztBQVE1QyxvRUFBb0U7QUFDcEUsTUFBcUIsT0FBTztJQUMxQiwrQ0FBK0M7SUFDeEMsTUFBTSxDQUFDLEtBQUssR0FBVyxDQUFDLENBQUM7SUFDeEIsa0JBQWtCLEdBQWtCO1FBQzFDLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLElBQUk7UUFDZixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFFRixxRUFBcUU7SUFDckUsWUFBWSxVQUFrQjtRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUM5RixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDRDQUE0QztJQUNyQyxHQUFHO1FBQ1IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpRUFBaUU7SUFDekQsT0FBTztRQUNiLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDckMsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLHVCQUF1QixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRyxDQUFDOztBQTlCSCwwQkErQkM7OztBQ3hDRCw0Q0FBNEM7Ozs7O0FBRTVDLGlGQUFxRDtBQUNyRCwyREFBOEQ7QUFDOUQscUVBQTBDO0FBQzFDLGtGQUEwRDtBQUUxRCxNQUFNLGNBQWMsR0FBRztJQUNyQixTQUFTLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUMxQixJQUFJO1lBQ0YsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osd0NBQXdDO2dCQUN4QyxLQUFLLGtCQUFrQjtvQkFDckIsMkJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUixnQ0FBZ0M7Z0JBQ2hDLEtBQUssMEJBQTBCO29CQUM3QixzQkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2FBQ1Q7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFDRCxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDcEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxvQkFBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFFckUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsMEJBQVksQ0FBQyxDQUFDO1FBQ3JELGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUJBQXlCO0lBQzNDLENBQUM7SUFDRCxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ1QsNEJBQTRCO0lBQzlCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5pbXBvcnQgeyBDb2xvckNvZGVXaWRnZXQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbG9yQ29kZVwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uLy4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuY29uc3QgaHRtbGV4Q29sb3JDb2RlID0ge1xyXG4gIGluaXQ6ICgpID0+IHtcclxuICAgIC8vIEdldCBjb21wb25lbnQgZWxlbWVudHMgdGhhdCB3aWxsIGJlIHVzZWQgaW4gd2lkZ2V0IGludGVyYWN0aXZpdHlcclxuICAgIGNvbnN0IG9wZW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlRhZ29wZW5cIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICBjb25zdCBjbG9zZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5UYWdjbG9zZVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuVGV4dFZhbFwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLkF0dHJpYnV0ZVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICAvLyBBZGQgZWxlbWVudHMgdG8gYXJyYXkgZGF0YSBzdHJ1Y3R1cmVzLCBuZWVkZWQgZm9yIHRoZSBDb2xvckNvZGUgaW5zdGFudGlhdGlvblxyXG4gICAgY29uc3QgY29sb3JsZXNzRWxlbWVudHMgPSBuZXcgQXJyYXkob3BlbmVycywgY2xvc2VycywgdmFsdWVzLCBhdHRyaWJ1dGVzKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzQ29sb3JzID0gbmV3IEFycmF5KFxyXG4gICAgICBcInZhcigtLWNsci1XaG9JU19PcmFuZ2UpXCIsXHJcbiAgICAgIFwidmFyKC0tY2xyLVJlZClcIixcclxuICAgICAgXCJ2YXIoLS1jbHItRGFya0N5YW4pXCIsXHJcbiAgICAgIFwidmFyKC0tY2xyLUdyZWVuKVwiXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNlbGVjdCByZXNldCBidXR0b25cclxuICAgIGxldCByc3RFbGVtID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJDb2xvckNvZGVcIiwgXCIucmVzZXRcIiwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICBpZiAocnN0RWxlbSA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkNoZWNrIHRoZSByZXNldCBidXR0b24gb3IgcmVmcmVzaCB0aGUgcGFnZS5cIik7XHJcbiAgICB9XHJcbiAgICAvLyBJbnN0YW50aWF0ZSBhIGNvbG9yIGNvZGUgb2JqZWN0IHdpdGggYWxsIG5lZWRlZCBlbGVtZW50c1xyXG4gICAgbmV3IENvbG9yQ29kZVdpZGdldChjb2xvcmxlc3NFbGVtZW50cywgZWxlbWVudHNDb2xvcnMsIHJzdEVsZW0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB1cmxleENvbG9yQ29kZSA9IHtcclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvdG9jb2xcIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICBjb25zdCBkb21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvbWFpblwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIGNvbnN0IHBvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcnRcIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICBjb25zdCBmb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvbGRlclwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbGVcIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlcnlcIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmtleVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52YWx1ZVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICAvLyBBZGQgZWxlbWVudHMgdG8gYXJyYXkgZGF0YSBzdHJ1Y3R1cmVzLCBuZWVkZWQgZm9yIHRoZSBDb2xvckNvZGUgaW5zdGFudGlhdGlvblxyXG4gICAgY29uc3QgY29sb3JsZXNzRWxlbWVudHMgPSBuZXcgQXJyYXkocHJvdG9jb2wsIGRvbWFpbiwgcG9ydCwgZm9sZGVyLCBmaWxlLCBxdWVyeSwga2V5LCB2YWx1ZSk7XHJcbiAgICBjb25zdCBlbGVtZW50c0NvbG9ycyA9IG5ldyBBcnJheShcclxuICAgICAgXCJ2YXIoLS1jbHItV2hvSVNfT3JhbmdlKVwiLFxyXG4gICAgICBcInZhcigtLWNsci1Ta3libHVlKVwiLFxyXG4gICAgICBcInZhcigtLWNsci1EYXJrQ3lhbilcIixcclxuICAgICAgXCJ2YXIoLS1jbHItR3JlZW4pXCIsXHJcbiAgICAgIFwidmFyKC0tY2xyLVJlZClcIixcclxuICAgICAgXCJ2YXIoLS1jbHItcHJpbWFyeS02MDApXCIsXHJcbiAgICAgIFwidmFyKC0tY2xyLWFsbC1wcmltYXJ5LTUwMClcIixcclxuICAgICAgXCJ2YXIoLS1jbHItTGlnaHRjb3JhbClcIlxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZWxlY3QgcmVzZXQgYnV0dG9uXHJcbiAgICBsZXQgcnN0RWxlbSA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiQ29sb3JDb2RlXCIsIFwiLnJlc2V0XCIsIHRydWUsIHRydWUpO1xyXG4gICAgaWYgKHJzdEVsZW0gPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJDaGVjayB0aGUgcmVzZXQgYnV0dG9uIG9yIHJlZnJlc2ggdGhlIHBhZ2UuXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gSW5zdGFudGlhdGUgYSBjb2xvciBjb2RlIG9iamVjdCB3aXRoIGFsbCBuZWVkZWQgZWxlbWVudHNcclxuICAgIG5ldyBDb2xvckNvZGVXaWRnZXQoY29sb3JsZXNzRWxlbWVudHMsIGVsZW1lbnRzQ29sb3JzLCByc3RFbGVtIGFzIEhUTUxCdXR0b25FbGVtZW50KTtcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY3NzZXhDb2xvckNvZGUgPSB7XHJcbiAgLyoqXHJcbiAgICogQ3NzZXggaXMgYSBwYWdlIHdpZGdldCwgYXBwbHlpbmcgc3R5bGUgY29sb3JzIHRvIGVsZW1lbnRzIG9mIGRpZmZlcmVudFxyXG4gICAqIHR5cGVzXHJcbiAgICovXHJcbiAgaW5pdDogKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5TZWxlY3RvclwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLkF0dHJpYnV0ZVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuVmFsdWVcIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcbiAgICBjb25zdCBwc3VlZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5Qc3VlZG8tY2xhc3NcIikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgLy8gQWRkIGVsZW1lbnRzIHRvIGFycmF5IGRhdGEgc3RydWN0dXJlcywgbmVlZGVkIGZvciB0aGUgQ29sb3JDb2RlIGluc3RhbnRpYXRpb25cclxuICAgIGNvbnN0IGNvbG9ybGVzc0VsZW1lbnRzID0gbmV3IEFycmF5KHNlbGVjdG9ycywgYXR0cmlidXRlcywgdmFsdWVzLCBwc3VlZG9zKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzQ29sb3JzID0gbmV3IEFycmF5KFxyXG4gICAgICBcInZhcigtLWNsci1SZWQpXCIsXHJcbiAgICAgIFwidmFyKC0tY2xyLVdob0lTX09yYW5nZSlcIixcclxuICAgICAgXCJ2YXIoLS1jbHItU2t5Ymx1ZSlcIixcclxuICAgICAgXCJ2YXIoLS1jbHItR3JlZW4pXCJcclxuICAgICk7XHJcblxyXG4gICAgLy8gU2VsZWN0IHJlc2V0IGJ1dHRvblxyXG4gICAgbGV0IHJzdEVsZW0gPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIkNvbG9yQ29kZVwiLCBcIi5yZXNldFwiLCB0cnVlLCB0cnVlKTtcclxuICAgIGlmIChyc3RFbGVtID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiQ2hlY2sgdGhlIHJlc2V0IGJ1dHRvbiBvciByZWZyZXNoIHRoZSBwYWdlLlwiKTtcclxuICAgIH1cclxuICAgIC8vIEluc3RhbnRpYXRlIGEgY29sb3IgY29kZSBvYmplY3Qgd2l0aCBhbGwgbmVlZGVkIGVsZW1lbnRzXHJcbiAgICBuZXcgQ29sb3JDb2RlV2lkZ2V0KGNvbG9ybGVzc0VsZW1lbnRzLCBlbGVtZW50c0NvbG9ycywgcnN0RWxlbSBhcyBIVE1MQnV0dG9uRWxlbWVudCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGh0bWxleENvbG9yQ29kZSwgdXJsZXhDb2xvckNvZGUsIGNzc2V4Q29sb3JDb2RlIH07XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5pbXBvcnQgeyBSd2JSZWZlcmVuY2VFcnJvciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbmNvbnN0IGRvbWFpbkxvb2t1cCA9IHtcclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICAvLyBHZXQgdGhlIGZvcm0gZWxlbWVudHNcclxuICAgIGxldCBmb3JtRWxlbUlEID0gXCJzZWFyY2hXaG9JU1wiO1xyXG4gICAgbGV0IGZvcm06IEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbiAgICBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Zm9ybUVsZW1JRH1gKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICBpZiAoZm9ybSA9PSBudWxsKSB7XHJcbiAgICAgIG5ldyBSd2JSZWZlcmVuY2VFcnJvcihcIkVsZW1lbnROb3RGb3VuZFwiLCBgRWxlbWVudCBub3QgZm91bmQ6ICcke2Zvcm1FbGVtSUR9JzpgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZCBmb3JtIGZ1bmN0aW9uYWxpdHlcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb21haW5Mb29rdXAuc2VhcmNoV0hPSVMoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2VhcmNoV0hPSVM6ICgpID0+IHtcclxuICAgIGxldCBpbnB1dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFNlYXJjaFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IG91dHB1dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIldob0lTc2VhcmNoXCIpIGFzIEhUTUxPdXRwdXRFbGVtZW50O1xyXG4gICAgb3V0cHV0RWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgLy9idWlsZCB0aGUgbmV3IHVybCBzdHJpbmdcclxuICAgIGxldCB2YWx1ZSA9IGlucHV0RWxlbS52YWx1ZTtcclxuICAgIHZhciBVUkwgPSBcImh0dHBzOi8vd3d3Lndob2lzLmNvbS93aG9pcy9cIiArIHZhbHVlO1xyXG5cclxuICAgIC8vb3BlbiB0aGUgbmV3IHVybFxyXG4gICAgY29uc29sZS5sb2coVVJMKTtcclxuICAgIHdpbmRvdy5vcGVuKFVSTCwgXCJfYmxhbmtcIik7XHJcblxyXG4gICAgLy9hcHBlbmQgdGhlIG91dHB1dCBlbGVtZW50XHJcbiAgICBjb25zb2xlLmxvZyhvdXRwdXRFbGVtKTtcclxuICAgIG91dHB1dEVsZW0uaW5uZXJUZXh0ICs9IGBcXG4ke3ZhbHVlfWA7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbWFpbkxvb2t1cDtcclxuIiwiLypcclxuQXR0cmlidXRpb246IFJvYmVydCBBIEhvd2VsbCwgRGVjZW1iZXIgMjAyNVxyXG5Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcbiovXHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovXHJcbmNvbnN0IHQgPSB3aW5kb3csXHJcbiAgaSA9XHJcbiAgICB0LlNoYWRvd1Jvb3QgJiZcclxuICAgICh2b2lkIDAgPT09IHQuU2hhZHlDU1MgfHwgdC5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpICYmXHJcbiAgICBcImFkb3B0ZWRTdHlsZVNoZWV0c1wiIGluIERvY3VtZW50LnByb3RvdHlwZSAmJlxyXG4gICAgXCJyZXBsYWNlXCIgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUsXHJcbiAgcyA9IFN5bWJvbCgpLFxyXG4gIGUgPSBuZXcgV2Vha01hcCgpO1xyXG5jbGFzcyBuIHtcclxuICBjb25zdHJ1Y3Rvcih0LCBpLCBlKSB7XHJcbiAgICBpZiAoKCh0aGlzLl8kY3NzUmVzdWx0JCA9ICEwKSwgZSAhPT0gcykpXHJcbiAgICAgIHRocm93IEVycm9yKFwiQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC5cIik7XHJcbiAgICAodGhpcy5jc3NUZXh0ID0gdCksICh0aGlzLnQgPSBpKTtcclxuICB9XHJcbiAgZ2V0IHN0eWxlU2hlZXQoKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMuaTtcclxuICAgIGNvbnN0IHMgPSB0aGlzLnQ7XHJcbiAgICBpZiAoaSAmJiB2b2lkIDAgPT09IHQpIHtcclxuICAgICAgY29uc3QgaSA9IHZvaWQgMCAhPT0gcyAmJiAxID09PSBzLmxlbmd0aDtcclxuICAgICAgaSAmJiAodCA9IGUuZ2V0KHMpKSxcclxuICAgICAgICB2b2lkIDAgPT09IHQgJiYgKCh0aGlzLmkgPSB0ID0gbmV3IENTU1N0eWxlU2hlZXQoKSkucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KSwgaSAmJiBlLnNldChzLCB0KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxuICB9XHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xyXG4gIH1cclxufVxyXG5jb25zdCBvID0gdCA9PiBuZXcgbihcInN0cmluZ1wiID09IHR5cGVvZiB0ID8gdCA6IHQgKyBcIlwiLCB2b2lkIDAsIHMpLFxyXG4gIHIgPSAodCwgLi4uaSkgPT4ge1xyXG4gICAgY29uc3QgZSA9XHJcbiAgICAgIDEgPT09IHQubGVuZ3RoXHJcbiAgICAgICAgPyB0WzBdXHJcbiAgICAgICAgOiBpLnJlZHVjZShcclxuICAgICAgICAgICAgKGksIHMsIGUpID0+XHJcbiAgICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgICAgKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEwID09PSB0Ll8kY3NzUmVzdWx0JCkgcmV0dXJuIHQuY3NzVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmIChcIm51bWJlclwiID09IHR5cGVvZiB0KSByZXR1cm4gdDtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICBcIlZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgdCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuIFVzZSAndW5zYWZlQ1NTJyB0byBwYXNzIG5vbi1saXRlcmFsIHZhbHVlcywgYnV0IHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KShzKSArXHJcbiAgICAgICAgICAgICAgdFtlICsgMV0sXHJcbiAgICAgICAgICAgIHRbMF1cclxuICAgICAgICAgICk7XHJcbiAgICByZXR1cm4gbmV3IG4oZSwgdCwgcyk7XHJcbiAgfSxcclxuICBsID0gKHMsIGUpID0+IHtcclxuICAgIGlcclxuICAgICAgPyAocy5hZG9wdGVkU3R5bGVTaGVldHMgPSBlLm1hcCh0ID0+ICh0IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHQgOiB0LnN0eWxlU2hlZXQpKSlcclxuICAgICAgOiBlLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLFxyXG4gICAgICAgICAgICBuID0gdC5saXROb25jZTtcclxuICAgICAgICAgIHZvaWQgMCAhPT0gbiAmJiBlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG4pLCAoZS50ZXh0Q29udGVudCA9IGkuY3NzVGV4dCksIHMuYXBwZW5kQ2hpbGQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgfSxcclxuICBoID0gaVxyXG4gICAgPyB0ID0+IHRcclxuICAgIDogdCA9PlxyXG4gICAgICAgIHQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0XHJcbiAgICAgICAgICA/ICh0ID0+IHtcclxuICAgICAgICAgICAgICBsZXQgaSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHQuY3NzUnVsZXMpIGkgKz0gcy5jc3NUZXh0O1xyXG4gICAgICAgICAgICAgIHJldHVybiBvKGkpO1xyXG4gICAgICAgICAgICB9KSh0KVxyXG4gICAgICAgICAgOiB0O1xyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAqLyB2YXIgdTtcclxuY29uc3QgYyA9IHdpbmRvdyxcclxuICBkID0gYy50cnVzdGVkVHlwZXMsXHJcbiAgYSA9IGQgPyBkLmVtcHR5U2NyaXB0IDogXCJcIixcclxuICB2ID0gYy5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQsXHJcbiAgZiA9IHtcclxuICAgIHRvQXR0cmlidXRlKHQsIGkpIHtcclxuICAgICAgc3dpdGNoIChpKSB7XHJcbiAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgdCA9IHQgPyBhIDogbnVsbDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgIGNhc2UgQXJyYXk6XHJcbiAgICAgICAgICB0ID0gbnVsbCA9PSB0ID8gdCA6IEpTT04uc3RyaW5naWZ5KHQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0O1xyXG4gICAgfSxcclxuICAgIGZyb21BdHRyaWJ1dGUodCwgaSkge1xyXG4gICAgICBsZXQgcyA9IHQ7XHJcbiAgICAgIHN3aXRjaCAoaSkge1xyXG4gICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgIHMgPSBudWxsICE9PSB0O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBOdW1iZXI6XHJcbiAgICAgICAgICBzID0gbnVsbCA9PT0gdCA/IG51bGwgOiBOdW1iZXIodCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIE9iamVjdDpcclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcyA9IEpTT04ucGFyc2UodCk7XHJcbiAgICAgICAgICB9IGNhdGNoICh0KSB7XHJcbiAgICAgICAgICAgIHMgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHAgPSAodCwgaSkgPT4gaSAhPT0gdCAmJiAoaSA9PSBpIHx8IHQgPT0gdCksXHJcbiAgeSA9IHsgYXR0cmlidXRlOiAhMCwgdHlwZTogU3RyaW5nLCBjb252ZXJ0ZXI6IGYsIHJlZmxlY3Q6ICExLCBoYXNDaGFuZ2VkOiBwIH0sXHJcbiAgYiA9IFwiZmluYWxpemVkXCI7XHJcbmNsYXNzIG0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpLFxyXG4gICAgICAodGhpcy5vID0gbmV3IE1hcCgpKSxcclxuICAgICAgKHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gITEpLFxyXG4gICAgICAodGhpcy5oYXNVcGRhdGVkID0gITEpLFxyXG4gICAgICAodGhpcy5sID0gbnVsbCksXHJcbiAgICAgIHRoaXMudSgpO1xyXG4gIH1cclxuICBzdGF0aWMgYWRkSW5pdGlhbGl6ZXIodCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICB0aGlzLmZpbmFsaXplKCksIChudWxsICE9PSAoaSA9IHRoaXMudikgJiYgdm9pZCAwICE9PSBpID8gaSA6ICh0aGlzLnYgPSBbXSkpLnB1c2godCk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgdGhpcy5maW5hbGl6ZSgpO1xyXG4gICAgY29uc3QgdCA9IFtdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChpLCBzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZSA9IHRoaXMucChzLCBpKTtcclxuICAgICAgICB2b2lkIDAgIT09IGUgJiYgKHRoaXMubS5zZXQoZSwgcyksIHQucHVzaChlKSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0XHJcbiAgICApO1xyXG4gIH1cclxuICBzdGF0aWMgY3JlYXRlUHJvcGVydHkodCwgaSA9IHkpIHtcclxuICAgIGlmIChcclxuICAgICAgKGkuc3RhdGUgJiYgKGkuYXR0cmlidXRlID0gITEpLFxyXG4gICAgICB0aGlzLmZpbmFsaXplKCksXHJcbiAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KHQsIGkpLFxyXG4gICAgICAhaS5ub0FjY2Vzc29yICYmICF0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSh0KSlcclxuICAgICkge1xyXG4gICAgICBjb25zdCBzID0gXCJzeW1ib2xcIiA9PSB0eXBlb2YgdCA/IFN5bWJvbCgpIDogXCJfX1wiICsgdCxcclxuICAgICAgICBlID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IodCwgcywgaSk7XHJcbiAgICAgIHZvaWQgMCAhPT0gZSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIHQsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQsIGksIHMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tpXTtcclxuICAgICAgfSxcclxuICAgICAgc2V0KGUpIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpc1t0XTtcclxuICAgICAgICAodGhpc1tpXSA9IGUpLCB0aGlzLnJlcXVlc3RVcGRhdGUodCwgbiwgcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXHJcbiAgICAgIGVudW1lcmFibGU6ICEwLFxyXG4gICAgfTtcclxuICB9XHJcbiAgc3RhdGljIGdldFByb3BlcnR5T3B0aW9ucyh0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQodCkgfHwgeTtcclxuICB9XHJcbiAgc3RhdGljIGZpbmFsaXplKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoYikpIHJldHVybiAhMTtcclxuICAgIHRoaXNbYl0gPSAhMDtcclxuICAgIGNvbnN0IHQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XHJcbiAgICBpZiAoXHJcbiAgICAgICh0LmZpbmFsaXplKCksXHJcbiAgICAgIHZvaWQgMCAhPT0gdC52ICYmICh0aGlzLnYgPSBbLi4udC52XSksXHJcbiAgICAgICh0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcCh0LmVsZW1lbnRQcm9wZXJ0aWVzKSksXHJcbiAgICAgICh0aGlzLm0gPSBuZXcgTWFwKCkpLFxyXG4gICAgICB0aGlzLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSlcclxuICAgICkge1xyXG4gICAgICBjb25zdCB0ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgIGkgPSBbLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCksIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCldO1xyXG4gICAgICBmb3IgKGNvbnN0IHMgb2YgaSkgdGhpcy5jcmVhdGVQcm9wZXJ0eShzLCB0W3NdKTtcclxuICAgIH1cclxuICAgIHJldHVybiAodGhpcy5lbGVtZW50U3R5bGVzID0gdGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcykpLCAhMDtcclxuICB9XHJcbiAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHQpIHtcclxuICAgIGNvbnN0IGkgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XHJcbiAgICAgIGNvbnN0IHMgPSBuZXcgU2V0KHQuZmxhdCgxIC8gMCkucmV2ZXJzZSgpKTtcclxuICAgICAgZm9yIChjb25zdCB0IG9mIHMpIGkudW5zaGlmdChoKHQpKTtcclxuICAgIH0gZWxzZSB2b2lkIDAgIT09IHQgJiYgaS5wdXNoKGgodCkpO1xyXG4gICAgcmV0dXJuIGk7XHJcbiAgfVxyXG4gIHN0YXRpYyBwKHQsIGkpIHtcclxuICAgIGNvbnN0IHMgPSBpLmF0dHJpYnV0ZTtcclxuICAgIHJldHVybiAhMSA9PT0gcyA/IHZvaWQgMCA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHMgPyBzIDogXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCA/IHQudG9Mb3dlckNhc2UoKSA6IHZvaWQgMDtcclxuICB9XHJcbiAgdSgpIHtcclxuICAgIHZhciB0O1xyXG4gICAgKHRoaXMuXyA9IG5ldyBQcm9taXNlKHQgPT4gKHRoaXMuZW5hYmxlVXBkYXRpbmcgPSB0KSkpLFxyXG4gICAgICAodGhpcy5fJEFMID0gbmV3IE1hcCgpKSxcclxuICAgICAgdGhpcy5nKCksXHJcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpLFxyXG4gICAgICBudWxsID09PSAodCA9IHRoaXMuY29uc3RydWN0b3IudikgfHwgdm9pZCAwID09PSB0IHx8IHQuZm9yRWFjaCh0ID0+IHQodGhpcykpO1xyXG4gIH1cclxuICBhZGRDb250cm9sbGVyKHQpIHtcclxuICAgIHZhciBpLCBzO1xyXG4gICAgKG51bGwgIT09IChpID0gdGhpcy5TKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogKHRoaXMuUyA9IFtdKSkucHVzaCh0KSxcclxuICAgICAgdm9pZCAwICE9PSB0aGlzLnJlbmRlclJvb3QgJiZcclxuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkICYmXHJcbiAgICAgICAgKG51bGwgPT09IChzID0gdC5ob3N0Q29ubmVjdGVkKSB8fCB2b2lkIDAgPT09IHMgfHwgcy5jYWxsKHQpKTtcclxuICB9XHJcbiAgcmVtb3ZlQ29udHJvbGxlcih0KSB7XHJcbiAgICB2YXIgaTtcclxuICAgIG51bGwgPT09IChpID0gdGhpcy5TKSB8fCB2b2lkIDAgPT09IGkgfHwgaS5zcGxpY2UodGhpcy5TLmluZGV4T2YodCkgPj4+IDAsIDEpO1xyXG4gIH1cclxuICBnKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCh0LCBpKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoaSkgJiYgKHRoaXMuby5zZXQoaSwgdGhpc1tpXSksIGRlbGV0ZSB0aGlzW2ldKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjcmVhdGVSZW5kZXJSb290KCkge1xyXG4gICAgdmFyIHQ7XHJcbiAgICBjb25zdCBpID1cclxuICAgICAgbnVsbCAhPT0gKHQgPSB0aGlzLnNoYWRvd1Jvb3QpICYmIHZvaWQgMCAhPT0gdFxyXG4gICAgICAgID8gdFxyXG4gICAgICAgIDogdGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7XHJcbiAgICByZXR1cm4gbChpLCB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpLCBpO1xyXG4gIH1cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHZhciB0O1xyXG4gICAgdm9pZCAwID09PSB0aGlzLnJlbmRlclJvb3QgJiYgKHRoaXMucmVuZGVyUm9vdCA9IHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpKSxcclxuICAgICAgdGhpcy5lbmFibGVVcGRhdGluZyghMCksXHJcbiAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5TKSB8fFxyXG4gICAgICAgIHZvaWQgMCA9PT0gdCB8fFxyXG4gICAgICAgIHQuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgcmV0dXJuIG51bGwgPT09IChpID0gdC5ob3N0Q29ubmVjdGVkKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwodCk7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG4gIGVuYWJsZVVwZGF0aW5nKHQpIHt9XHJcbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB2YXIgdDtcclxuICAgIG51bGwgPT09ICh0ID0gdGhpcy5TKSB8fFxyXG4gICAgICB2b2lkIDAgPT09IHQgfHxcclxuICAgICAgdC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHJldHVybiBudWxsID09PSAoaSA9IHQuaG9zdERpc2Nvbm5lY3RlZCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5jYWxsKHQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsIGksIHMpIHtcclxuICAgIHRoaXMuXyRBSyh0LCBzKTtcclxuICB9XHJcbiAgJCh0LCBpLCBzID0geSkge1xyXG4gICAgdmFyIGU7XHJcbiAgICBjb25zdCBuID0gdGhpcy5jb25zdHJ1Y3Rvci5wKHQsIHMpO1xyXG4gICAgaWYgKHZvaWQgMCAhPT0gbiAmJiAhMCA9PT0gcy5yZWZsZWN0KSB7XHJcbiAgICAgIGNvbnN0IG8gPSAoXHJcbiAgICAgICAgdm9pZCAwICE9PSAobnVsbCA9PT0gKGUgPSBzLmNvbnZlcnRlcikgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50b0F0dHJpYnV0ZSkgPyBzLmNvbnZlcnRlciA6IGZcclxuICAgICAgKS50b0F0dHJpYnV0ZShpLCBzLnR5cGUpO1xyXG4gICAgICAodGhpcy5sID0gdCksIG51bGwgPT0gbyA/IHRoaXMucmVtb3ZlQXR0cmlidXRlKG4pIDogdGhpcy5zZXRBdHRyaWJ1dGUobiwgbyksICh0aGlzLmwgPSBudWxsKTtcclxuICAgIH1cclxuICB9XHJcbiAgXyRBSyh0LCBpKSB7XHJcbiAgICB2YXIgcztcclxuICAgIGNvbnN0IGUgPSB0aGlzLmNvbnN0cnVjdG9yLFxyXG4gICAgICBuID0gZS5tLmdldCh0KTtcclxuICAgIGlmICh2b2lkIDAgIT09IG4gJiYgdGhpcy5sICE9PSBuKSB7XHJcbiAgICAgIGNvbnN0IHQgPSBlLmdldFByb3BlcnR5T3B0aW9ucyhuKSxcclxuICAgICAgICBvID1cclxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5jb252ZXJ0ZXJcclxuICAgICAgICAgICAgPyB7IGZyb21BdHRyaWJ1dGU6IHQuY29udmVydGVyIH1cclxuICAgICAgICAgICAgOiB2b2lkIDAgIT09IChudWxsID09PSAocyA9IHQuY29udmVydGVyKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmZyb21BdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgID8gdC5jb252ZXJ0ZXJcclxuICAgICAgICAgICAgOiBmO1xyXG4gICAgICAodGhpcy5sID0gbiksICh0aGlzW25dID0gby5mcm9tQXR0cmlidXRlKGksIHQudHlwZSkpLCAodGhpcy5sID0gbnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3RVcGRhdGUodCwgaSwgcykge1xyXG4gICAgbGV0IGUgPSAhMDtcclxuICAgIHZvaWQgMCAhPT0gdCAmJlxyXG4gICAgICAoKChzID0gcyB8fCB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyh0KSkuaGFzQ2hhbmdlZCB8fCBwKSh0aGlzW3RdLCBpKVxyXG4gICAgICAgID8gKHRoaXMuXyRBTC5oYXModCkgfHwgdGhpcy5fJEFMLnNldCh0LCBpKSxcclxuICAgICAgICAgICEwID09PSBzLnJlZmxlY3QgJiYgdGhpcy5sICE9PSB0ICYmICh2b2lkIDAgPT09IHRoaXMuQyAmJiAodGhpcy5DID0gbmV3IE1hcCgpKSwgdGhpcy5DLnNldCh0LCBzKSkpXHJcbiAgICAgICAgOiAoZSA9ICExKSksXHJcbiAgICAgICF0aGlzLmlzVXBkYXRlUGVuZGluZyAmJiBlICYmICh0aGlzLl8gPSB0aGlzLlQoKSk7XHJcbiAgfVxyXG4gIGFzeW5jIFQoKSB7XHJcbiAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9ICEwO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5fO1xyXG4gICAgfSBjYXRjaCAodCkge1xyXG4gICAgICBQcm9taXNlLnJlamVjdCh0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHQgPSB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XHJcbiAgICByZXR1cm4gbnVsbCAhPSB0ICYmIChhd2FpdCB0KSwgIXRoaXMuaXNVcGRhdGVQZW5kaW5nO1xyXG4gIH1cclxuICBzY2hlZHVsZVVwZGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcclxuICB9XHJcbiAgcGVyZm9ybVVwZGF0ZSgpIHtcclxuICAgIHZhciB0O1xyXG4gICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykgcmV0dXJuO1xyXG4gICAgdGhpcy5oYXNVcGRhdGVkLCB0aGlzLm8gJiYgKHRoaXMuby5mb3JFYWNoKCh0LCBpKSA9PiAodGhpc1tpXSA9IHQpKSwgKHRoaXMubyA9IHZvaWQgMCkpO1xyXG4gICAgbGV0IGkgPSAhMTtcclxuICAgIGNvbnN0IHMgPSB0aGlzLl8kQUw7XHJcbiAgICB0cnkge1xyXG4gICAgICAoaSA9IHRoaXMuc2hvdWxkVXBkYXRlKHMpKSxcclxuICAgICAgICBpXHJcbiAgICAgICAgICA/ICh0aGlzLndpbGxVcGRhdGUocyksXHJcbiAgICAgICAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5TKSB8fFxyXG4gICAgICAgICAgICAgIHZvaWQgMCA9PT0gdCB8fFxyXG4gICAgICAgICAgICAgIHQuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgPT09IChpID0gdC5ob3N0VXBkYXRlKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwodCk7XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHMpKVxyXG4gICAgICAgICAgOiB0aGlzLlAoKTtcclxuICAgIH0gY2F0Y2ggKHQpIHtcclxuICAgICAgdGhyb3cgKChpID0gITEpLCB0aGlzLlAoKSwgdCk7XHJcbiAgICB9XHJcbiAgICBpICYmIHRoaXMuXyRBRShzKTtcclxuICB9XHJcbiAgd2lsbFVwZGF0ZSh0KSB7fVxyXG4gIF8kQUUodCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICBudWxsID09PSAoaSA9IHRoaXMuUykgfHxcclxuICAgICAgdm9pZCAwID09PSBpIHx8XHJcbiAgICAgIGkuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICByZXR1cm4gbnVsbCA9PT0gKGkgPSB0Lmhvc3RVcGRhdGVkKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwodCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0aGlzLmhhc1VwZGF0ZWQgfHwgKCh0aGlzLmhhc1VwZGF0ZWQgPSAhMCksIHRoaXMuZmlyc3RVcGRhdGVkKHQpKSxcclxuICAgICAgdGhpcy51cGRhdGVkKHQpO1xyXG4gIH1cclxuICBQKCkge1xyXG4gICAgKHRoaXMuXyRBTCA9IG5ldyBNYXAoKSksICh0aGlzLmlzVXBkYXRlUGVuZGluZyA9ICExKTtcclxuICB9XHJcbiAgZ2V0IHVwZGF0ZUNvbXBsZXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcclxuICB9XHJcbiAgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fO1xyXG4gIH1cclxuICBzaG91bGRVcGRhdGUodCkge1xyXG4gICAgcmV0dXJuICEwO1xyXG4gIH1cclxuICB1cGRhdGUodCkge1xyXG4gICAgdm9pZCAwICE9PSB0aGlzLkMgJiYgKHRoaXMuQy5mb3JFYWNoKCh0LCBpKSA9PiB0aGlzLiQoaSwgdGhpc1tpXSwgdCkpLCAodGhpcy5DID0gdm9pZCAwKSksIHRoaXMuUCgpO1xyXG4gIH1cclxuICB1cGRhdGVkKHQpIHt9XHJcbiAgZmlyc3RVcGRhdGVkKHQpIHt9XHJcbn1cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxyXG4gKi9cclxudmFyIGc7XHJcbihtW2JdID0gITApLFxyXG4gIChtLmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpKSxcclxuICAobS5lbGVtZW50U3R5bGVzID0gW10pLFxyXG4gIChtLnNoYWRvd1Jvb3RPcHRpb25zID0geyBtb2RlOiBcIm9wZW5cIiB9KSxcclxuICBudWxsID09IHYgfHwgdih7IFJlYWN0aXZlRWxlbWVudDogbSB9KSxcclxuICAobnVsbCAhPT0gKHUgPSBjLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zKSAmJiB2b2lkIDAgIT09IHUgPyB1IDogKGMucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMgPSBbXSkpLnB1c2goXHJcbiAgICBcIjEuNi4zXCJcclxuICApO1xyXG5jb25zdCB3ID0gd2luZG93LFxyXG4gIF8gPSB3LnRydXN0ZWRUeXBlcyxcclxuICAkID0gXyA/IF8uY3JlYXRlUG9saWN5KFwibGl0LWh0bWxcIiwgeyBjcmVhdGVIVE1MOiB0ID0+IHQgfSkgOiB2b2lkIDAsXHJcbiAgUyA9IFwiJGxpdCRcIixcclxuICBUID0gYGxpdCQkeyhNYXRoLnJhbmRvbSgpICsgXCJcIikuc2xpY2UoOSl9JGAsXHJcbiAgeCA9IFwiP1wiICsgVCxcclxuICBFID0gYDwke3h9PmAsXHJcbiAgQyA9IGRvY3VtZW50LFxyXG4gIEEgPSAoKSA9PiBDLmNyZWF0ZUNvbW1lbnQoXCJcIiksXHJcbiAgayA9IHQgPT4gbnVsbCA9PT0gdCB8fCAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQpLFxyXG4gIE0gPSBBcnJheS5pc0FycmF5LFxyXG4gIFAgPSB0ID0+IE0odCkgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiAobnVsbCA9PSB0ID8gdm9pZCAwIDogdFtTeW1ib2wuaXRlcmF0b3JdKSxcclxuICBVID0gXCJbIFxcdFxcblxcZlxccl1cIixcclxuICBWID0gLzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nLFxyXG4gIFIgPSAvLS0+L2csXHJcbiAgTiA9IC8+L2csXHJcbiAgTyA9IFJlZ0V4cChgPnwke1V9KD86KFteXFxcXHNcIic+PS9dKykoJHtVfSo9JHtVfSooPzpbXiBcXHRcXG5cXGZcXHJcIidcXGA8Pj1dfChcInwnKXwpKXwkKWAsIFwiZ1wiKSxcclxuICBMID0gLycvZyxcclxuICBqID0gL1wiL2csXHJcbiAgeiA9IC9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhfHRpdGxlKSQvaSxcclxuICBIID1cclxuICAgIHQgPT5cclxuICAgIChpLCAuLi5zKSA9PiAoeyBfJGxpdFR5cGUkOiB0LCBzdHJpbmdzOiBpLCB2YWx1ZXM6IHMgfSksXHJcbiAgSSA9IEgoMSksXHJcbiAgQiA9IEgoMiksXHJcbiAgRCA9IFN5bWJvbC5mb3IoXCJsaXQtbm9DaGFuZ2VcIiksXHJcbiAgVyA9IFN5bWJvbC5mb3IoXCJsaXQtbm90aGluZ1wiKSxcclxuICBaID0gbmV3IFdlYWtNYXAoKSxcclxuICBxID0gQy5jcmVhdGVUcmVlV2Fsa2VyKEMsIDEyOSwgbnVsbCwgITEpO1xyXG5mdW5jdGlvbiBGKHQsIGkpIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkodCkgfHwgIXQuaGFzT3duUHJvcGVydHkoXCJyYXdcIikpIHRocm93IEVycm9yKFwiaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XCIpO1xyXG4gIHJldHVybiB2b2lkIDAgIT09ICQgPyAkLmNyZWF0ZUhUTUwoaSkgOiBpO1xyXG59XHJcbmNvbnN0IEcgPSAodCwgaSkgPT4ge1xyXG4gIGNvbnN0IHMgPSB0Lmxlbmd0aCAtIDEsXHJcbiAgICBlID0gW107XHJcbiAgbGV0IG4sXHJcbiAgICBvID0gMiA9PT0gaSA/IFwiPHN2Zz5cIiA6IFwiXCIsXHJcbiAgICByID0gVjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHM7IGkrKykge1xyXG4gICAgY29uc3QgcyA9IHRbaV07XHJcbiAgICBsZXQgbCxcclxuICAgICAgaCxcclxuICAgICAgdSA9IC0xLFxyXG4gICAgICBjID0gMDtcclxuICAgIGZvciAoOyBjIDwgcy5sZW5ndGggJiYgKChyLmxhc3RJbmRleCA9IGMpLCAoaCA9IHIuZXhlYyhzKSksIG51bGwgIT09IGgpOyApXHJcbiAgICAgIChjID0gci5sYXN0SW5kZXgpLFxyXG4gICAgICAgIHIgPT09IFZcclxuICAgICAgICAgID8gXCIhLS1cIiA9PT0gaFsxXVxyXG4gICAgICAgICAgICA/IChyID0gUilcclxuICAgICAgICAgICAgOiB2b2lkIDAgIT09IGhbMV1cclxuICAgICAgICAgICAgPyAociA9IE4pXHJcbiAgICAgICAgICAgIDogdm9pZCAwICE9PSBoWzJdXHJcbiAgICAgICAgICAgID8gKHoudGVzdChoWzJdKSAmJiAobiA9IFJlZ0V4cChcIjwvXCIgKyBoWzJdLCBcImdcIikpLCAociA9IE8pKVxyXG4gICAgICAgICAgICA6IHZvaWQgMCAhPT0gaFszXSAmJiAociA9IE8pXHJcbiAgICAgICAgICA6IHIgPT09IE9cclxuICAgICAgICAgID8gXCI+XCIgPT09IGhbMF1cclxuICAgICAgICAgICAgPyAoKHIgPSBudWxsICE9IG4gPyBuIDogViksICh1ID0gLTEpKVxyXG4gICAgICAgICAgICA6IHZvaWQgMCA9PT0gaFsxXVxyXG4gICAgICAgICAgICA/ICh1ID0gLTIpXHJcbiAgICAgICAgICAgIDogKCh1ID0gci5sYXN0SW5kZXggLSBoWzJdLmxlbmd0aCksIChsID0gaFsxXSksIChyID0gdm9pZCAwID09PSBoWzNdID8gTyA6ICdcIicgPT09IGhbM10gPyBqIDogTCkpXHJcbiAgICAgICAgICA6IHIgPT09IGogfHwgciA9PT0gTFxyXG4gICAgICAgICAgPyAociA9IE8pXHJcbiAgICAgICAgICA6IHIgPT09IFIgfHwgciA9PT0gTlxyXG4gICAgICAgICAgPyAociA9IFYpXHJcbiAgICAgICAgICA6ICgociA9IE8pLCAobiA9IHZvaWQgMCkpO1xyXG4gICAgY29uc3QgZCA9IHIgPT09IE8gJiYgdFtpICsgMV0uc3RhcnRzV2l0aChcIi8+XCIpID8gXCIgXCIgOiBcIlwiO1xyXG4gICAgbyArPVxyXG4gICAgICByID09PSBWXHJcbiAgICAgICAgPyBzICsgRVxyXG4gICAgICAgIDogdSA+PSAwXHJcbiAgICAgICAgPyAoZS5wdXNoKGwpLCBzLnNsaWNlKDAsIHUpICsgUyArIHMuc2xpY2UodSkgKyBUICsgZClcclxuICAgICAgICA6IHMgKyBUICsgKC0yID09PSB1ID8gKGUucHVzaCh2b2lkIDApLCBpKSA6IGQpO1xyXG4gIH1cclxuICByZXR1cm4gW0YodCwgbyArICh0W3NdIHx8IFwiPD8+XCIpICsgKDIgPT09IGkgPyBcIjwvc3ZnPlwiIDogXCJcIikpLCBlXTtcclxufTtcclxuY2xhc3MgSiB7XHJcbiAgY29uc3RydWN0b3IoeyBzdHJpbmdzOiB0LCBfJGxpdFR5cGUkOiBpIH0sIHMpIHtcclxuICAgIGxldCBlO1xyXG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xyXG4gICAgbGV0IG4gPSAwLFxyXG4gICAgICBvID0gMDtcclxuICAgIGNvbnN0IHIgPSB0Lmxlbmd0aCAtIDEsXHJcbiAgICAgIGwgPSB0aGlzLnBhcnRzLFxyXG4gICAgICBbaCwgdV0gPSBHKHQsIGkpO1xyXG4gICAgaWYgKCgodGhpcy5lbCA9IEouY3JlYXRlRWxlbWVudChoLCBzKSksIChxLmN1cnJlbnROb2RlID0gdGhpcy5lbC5jb250ZW50KSwgMiA9PT0gaSkpIHtcclxuICAgICAgY29uc3QgdCA9IHRoaXMuZWwuY29udGVudCxcclxuICAgICAgICBpID0gdC5maXJzdENoaWxkO1xyXG4gICAgICBpLnJlbW92ZSgpLCB0LmFwcGVuZCguLi5pLmNoaWxkTm9kZXMpO1xyXG4gICAgfVxyXG4gICAgZm9yICg7IG51bGwgIT09IChlID0gcS5uZXh0Tm9kZSgpKSAmJiBsLmxlbmd0aCA8IHI7ICkge1xyXG4gICAgICBpZiAoMSA9PT0gZS5ub2RlVHlwZSkge1xyXG4gICAgICAgIGlmIChlLmhhc0F0dHJpYnV0ZXMoKSkge1xyXG4gICAgICAgICAgY29uc3QgdCA9IFtdO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBpIG9mIGUuZ2V0QXR0cmlidXRlTmFtZXMoKSlcclxuICAgICAgICAgICAgaWYgKGkuZW5kc1dpdGgoUykgfHwgaS5zdGFydHNXaXRoKFQpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcyA9IHVbbysrXTtcclxuICAgICAgICAgICAgICBpZiAoKHQucHVzaChpKSwgdm9pZCAwICE9PSBzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IGUuZ2V0QXR0cmlidXRlKHMudG9Mb3dlckNhc2UoKSArIFMpLnNwbGl0KFQpLFxyXG4gICAgICAgICAgICAgICAgICBpID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhzKTtcclxuICAgICAgICAgICAgICAgIGwucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBuLFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBpWzJdLFxyXG4gICAgICAgICAgICAgICAgICBzdHJpbmdzOiB0LFxyXG4gICAgICAgICAgICAgICAgICBjdG9yOiBcIi5cIiA9PT0gaVsxXSA/IHR0IDogXCI/XCIgPT09IGlbMV0gPyBzdCA6IFwiQFwiID09PSBpWzFdID8gZXQgOiBYLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGwucHVzaCh7IHR5cGU6IDYsIGluZGV4OiBuIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdCkgZS5yZW1vdmVBdHRyaWJ1dGUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh6LnRlc3QoZS50YWdOYW1lKSkge1xyXG4gICAgICAgICAgY29uc3QgdCA9IGUudGV4dENvbnRlbnQuc3BsaXQoVCksXHJcbiAgICAgICAgICAgIGkgPSB0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgZS50ZXh0Q29udGVudCA9IF8gPyBfLmVtcHR5U2NyaXB0IDogXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBpOyBzKyspIGUuYXBwZW5kKHRbc10sIEEoKSksIHEubmV4dE5vZGUoKSwgbC5wdXNoKHsgdHlwZTogMiwgaW5kZXg6ICsrbiB9KTtcclxuICAgICAgICAgICAgZS5hcHBlbmQodFtpXSwgQSgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoOCA9PT0gZS5ub2RlVHlwZSlcclxuICAgICAgICBpZiAoZS5kYXRhID09PSB4KSBsLnB1c2goeyB0eXBlOiAyLCBpbmRleDogbiB9KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCB0ID0gLTE7XHJcbiAgICAgICAgICBmb3IgKDsgLTEgIT09ICh0ID0gZS5kYXRhLmluZGV4T2YoVCwgdCArIDEpKTsgKSBsLnB1c2goeyB0eXBlOiA3LCBpbmRleDogbiB9KSwgKHQgKz0gVC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIG4rKztcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodCwgaSkge1xyXG4gICAgY29uc3QgcyA9IEMuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG4gICAgcmV0dXJuIChzLmlubmVySFRNTCA9IHQpLCBzO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBLKHQsIGksIHMgPSB0LCBlKSB7XHJcbiAgdmFyIG4sIG8sIHIsIGw7XHJcbiAgaWYgKGkgPT09IEQpIHJldHVybiBpO1xyXG4gIGxldCBoID0gdm9pZCAwICE9PSBlID8gKG51bGwgPT09IChuID0gcy5BKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuW2VdKSA6IHMuaztcclxuICBjb25zdCB1ID0gayhpKSA/IHZvaWQgMCA6IGkuXyRsaXREaXJlY3RpdmUkO1xyXG4gIHJldHVybiAoXHJcbiAgICAobnVsbCA9PSBoID8gdm9pZCAwIDogaC5jb25zdHJ1Y3RvcikgIT09IHUgJiZcclxuICAgICAgKG51bGwgPT09IChvID0gbnVsbCA9PSBoID8gdm9pZCAwIDogaC5fJEFPKSB8fCB2b2lkIDAgPT09IG8gfHwgby5jYWxsKGgsICExKSxcclxuICAgICAgdm9pZCAwID09PSB1ID8gKGggPSB2b2lkIDApIDogKChoID0gbmV3IHUodCkpLCBoLl8kQVQodCwgcywgZSkpLFxyXG4gICAgICB2b2lkIDAgIT09IGUgPyAoKG51bGwgIT09IChyID0gKGwgPSBzKS5BKSAmJiB2b2lkIDAgIT09IHIgPyByIDogKGwuQSA9IFtdKSlbZV0gPSBoKSA6IChzLmsgPSBoKSksXHJcbiAgICB2b2lkIDAgIT09IGggJiYgKGkgPSBLKHQsIGguXyRBUyh0LCBpLnZhbHVlcyksIGgsIGUpKSxcclxuICAgIGlcclxuICApO1xyXG59XHJcbmNsYXNzIFkge1xyXG4gIGNvbnN0cnVjdG9yKHQsIGkpIHtcclxuICAgICh0aGlzLl8kQVYgPSBbXSksICh0aGlzLl8kQU4gPSB2b2lkIDApLCAodGhpcy5fJEFEID0gdCksICh0aGlzLl8kQU0gPSBpKTtcclxuICB9XHJcbiAgZ2V0IHBhcmVudE5vZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fJEFNLnBhcmVudE5vZGU7XHJcbiAgfVxyXG4gIGdldCBfJEFVKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuXyRBTS5fJEFVO1xyXG4gIH1cclxuICBNKHQpIHtcclxuICAgIHZhciBpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGVsOiB7IGNvbnRlbnQ6IHMgfSxcclxuICAgICAgICBwYXJ0czogZSxcclxuICAgICAgfSA9IHRoaXMuXyRBRCxcclxuICAgICAgbiA9IChudWxsICE9PSAoaSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuY3JlYXRpb25TY29wZSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IEMpLmltcG9ydE5vZGUocywgITApO1xyXG4gICAgcS5jdXJyZW50Tm9kZSA9IG47XHJcbiAgICBsZXQgbyA9IHEubmV4dE5vZGUoKSxcclxuICAgICAgciA9IDAsXHJcbiAgICAgIGwgPSAwLFxyXG4gICAgICBoID0gZVswXTtcclxuICAgIGZvciAoOyB2b2lkIDAgIT09IGg7ICkge1xyXG4gICAgICBpZiAociA9PT0gaC5pbmRleCkge1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIDIgPT09IGgudHlwZVxyXG4gICAgICAgICAgPyAoaSA9IG5ldyBRKG8sIG8ubmV4dFNpYmxpbmcsIHRoaXMsIHQpKVxyXG4gICAgICAgICAgOiAxID09PSBoLnR5cGVcclxuICAgICAgICAgID8gKGkgPSBuZXcgaC5jdG9yKG8sIGgubmFtZSwgaC5zdHJpbmdzLCB0aGlzLCB0KSlcclxuICAgICAgICAgIDogNiA9PT0gaC50eXBlICYmIChpID0gbmV3IG50KG8sIHRoaXMsIHQpKSxcclxuICAgICAgICAgIHRoaXMuXyRBVi5wdXNoKGkpLFxyXG4gICAgICAgICAgKGggPSBlWysrbF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHIgIT09IChudWxsID09IGggPyB2b2lkIDAgOiBoLmluZGV4KSAmJiAoKG8gPSBxLm5leHROb2RlKCkpLCByKyspO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChxLmN1cnJlbnROb2RlID0gQyksIG47XHJcbiAgfVxyXG4gIFUodCkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgZm9yIChjb25zdCBzIG9mIHRoaXMuXyRBVilcclxuICAgICAgdm9pZCAwICE9PSBzICYmICh2b2lkIDAgIT09IHMuc3RyaW5ncyA/IChzLl8kQUkodCwgcywgaSksIChpICs9IHMuc3RyaW5ncy5sZW5ndGggLSAyKSkgOiBzLl8kQUkodFtpXSkpLFxyXG4gICAgICAgIGkrKztcclxuICB9XHJcbn1cclxuY2xhc3MgUSB7XHJcbiAgY29uc3RydWN0b3IodCwgaSwgcywgZSkge1xyXG4gICAgdmFyIG47XHJcbiAgICAodGhpcy50eXBlID0gMiksXHJcbiAgICAgICh0aGlzLl8kQUggPSBXKSxcclxuICAgICAgKHRoaXMuXyRBTiA9IHZvaWQgMCksXHJcbiAgICAgICh0aGlzLl8kQUEgPSB0KSxcclxuICAgICAgKHRoaXMuXyRBQiA9IGkpLFxyXG4gICAgICAodGhpcy5fJEFNID0gcyksXHJcbiAgICAgICh0aGlzLm9wdGlvbnMgPSBlKSxcclxuICAgICAgKHRoaXMuTiA9IG51bGwgPT09IChuID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5pc0Nvbm5lY3RlZCkgfHwgdm9pZCAwID09PSBuIHx8IG4pO1xyXG4gIH1cclxuICBnZXQgXyRBVSgpIHtcclxuICAgIHZhciB0LCBpO1xyXG4gICAgcmV0dXJuIG51bGwgIT09IChpID0gbnVsbCA9PT0gKHQgPSB0aGlzLl8kQU0pIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuXyRBVSkgJiYgdm9pZCAwICE9PSBpXHJcbiAgICAgID8gaVxyXG4gICAgICA6IHRoaXMuTjtcclxuICB9XHJcbiAgZ2V0IHBhcmVudE5vZGUoKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMuXyRBQS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgaSA9IHRoaXMuXyRBTTtcclxuICAgIHJldHVybiB2b2lkIDAgIT09IGkgJiYgMTEgPT09IChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm5vZGVUeXBlKSAmJiAodCA9IGkucGFyZW50Tm9kZSksIHQ7XHJcbiAgfVxyXG4gIGdldCBzdGFydE5vZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fJEFBO1xyXG4gIH1cclxuICBnZXQgZW5kTm9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl8kQUI7XHJcbiAgfVxyXG4gIF8kQUkodCwgaSA9IHRoaXMpIHtcclxuICAgICh0ID0gSyh0aGlzLCB0LCBpKSksXHJcbiAgICAgIGsodClcclxuICAgICAgICA/IHQgPT09IFcgfHwgbnVsbCA9PSB0IHx8IFwiXCIgPT09IHRcclxuICAgICAgICAgID8gKHRoaXMuXyRBSCAhPT0gVyAmJiB0aGlzLl8kQVIoKSwgKHRoaXMuXyRBSCA9IFcpKVxyXG4gICAgICAgICAgOiB0ICE9PSB0aGlzLl8kQUggJiYgdCAhPT0gRCAmJiB0aGlzLlIodClcclxuICAgICAgICA6IHZvaWQgMCAhPT0gdC5fJGxpdFR5cGUkXHJcbiAgICAgICAgPyB0aGlzLk8odClcclxuICAgICAgICA6IHZvaWQgMCAhPT0gdC5ub2RlVHlwZVxyXG4gICAgICAgID8gdGhpcy5WKHQpXHJcbiAgICAgICAgOiBQKHQpXHJcbiAgICAgICAgPyB0aGlzLmoodClcclxuICAgICAgICA6IHRoaXMuUih0KTtcclxuICB9XHJcbiAgTCh0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5fJEFBLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsIHRoaXMuXyRBQik7XHJcbiAgfVxyXG4gIFYodCkge1xyXG4gICAgdGhpcy5fJEFIICE9PSB0ICYmICh0aGlzLl8kQVIoKSwgKHRoaXMuXyRBSCA9IHRoaXMuTCh0KSkpO1xyXG4gIH1cclxuICBSKHQpIHtcclxuICAgIHRoaXMuXyRBSCAhPT0gVyAmJiBrKHRoaXMuXyRBSCkgPyAodGhpcy5fJEFBLm5leHRTaWJsaW5nLmRhdGEgPSB0KSA6IHRoaXMuVihDLmNyZWF0ZVRleHROb2RlKHQpKSxcclxuICAgICAgKHRoaXMuXyRBSCA9IHQpO1xyXG4gIH1cclxuICBPKHQpIHtcclxuICAgIHZhciBpO1xyXG4gICAgY29uc3QgeyB2YWx1ZXM6IHMsIF8kbGl0VHlwZSQ6IGUgfSA9IHQsXHJcbiAgICAgIG4gPVxyXG4gICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGVcclxuICAgICAgICAgID8gdGhpcy5fJEFDKHQpXHJcbiAgICAgICAgICA6ICh2b2lkIDAgPT09IGUuZWwgJiYgKGUuZWwgPSBKLmNyZWF0ZUVsZW1lbnQoRihlLmgsIGUuaFswXSksIHRoaXMub3B0aW9ucykpLCBlKTtcclxuICAgIGlmICgobnVsbCA9PT0gKGkgPSB0aGlzLl8kQUgpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuXyRBRCkgPT09IG4pIHRoaXMuXyRBSC5VKHMpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHQgPSBuZXcgWShuLCB0aGlzKSxcclxuICAgICAgICBpID0gdC5NKHRoaXMub3B0aW9ucyk7XHJcbiAgICAgIHQuVShzKSwgdGhpcy5WKGkpLCAodGhpcy5fJEFIID0gdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF8kQUModCkge1xyXG4gICAgbGV0IGkgPSBaLmdldCh0LnN0cmluZ3MpO1xyXG4gICAgcmV0dXJuIHZvaWQgMCA9PT0gaSAmJiBaLnNldCh0LnN0cmluZ3MsIChpID0gbmV3IEoodCkpKSwgaTtcclxuICB9XHJcbiAgaih0KSB7XHJcbiAgICBNKHRoaXMuXyRBSCkgfHwgKCh0aGlzLl8kQUggPSBbXSksIHRoaXMuXyRBUigpKTtcclxuICAgIGNvbnN0IGkgPSB0aGlzLl8kQUg7XHJcbiAgICBsZXQgcyxcclxuICAgICAgZSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IG4gb2YgdClcclxuICAgICAgZSA9PT0gaS5sZW5ndGggPyBpLnB1c2goKHMgPSBuZXcgUSh0aGlzLkwoQSgpKSwgdGhpcy5MKEEoKSksIHRoaXMsIHRoaXMub3B0aW9ucykpKSA6IChzID0gaVtlXSksXHJcbiAgICAgICAgcy5fJEFJKG4pLFxyXG4gICAgICAgIGUrKztcclxuICAgIGUgPCBpLmxlbmd0aCAmJiAodGhpcy5fJEFSKHMgJiYgcy5fJEFCLm5leHRTaWJsaW5nLCBlKSwgKGkubGVuZ3RoID0gZSkpO1xyXG4gIH1cclxuICBfJEFSKHQgPSB0aGlzLl8kQUEubmV4dFNpYmxpbmcsIGkpIHtcclxuICAgIHZhciBzO1xyXG4gICAgZm9yIChudWxsID09PSAocyA9IHRoaXMuXyRBUCkgfHwgdm9pZCAwID09PSBzIHx8IHMuY2FsbCh0aGlzLCAhMSwgITAsIGkpOyB0ICYmIHQgIT09IHRoaXMuXyRBQjsgKSB7XHJcbiAgICAgIGNvbnN0IGkgPSB0Lm5leHRTaWJsaW5nO1xyXG4gICAgICB0LnJlbW92ZSgpLCAodCA9IGkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRDb25uZWN0ZWQodCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICB2b2lkIDAgPT09IHRoaXMuXyRBTSAmJiAoKHRoaXMuTiA9IHQpLCBudWxsID09PSAoaSA9IHRoaXMuXyRBUCkgfHwgdm9pZCAwID09PSBpIHx8IGkuY2FsbCh0aGlzLCB0KSk7XHJcbiAgfVxyXG59XHJcbmNsYXNzIFgge1xyXG4gIGNvbnN0cnVjdG9yKHQsIGksIHMsIGUsIG4pIHtcclxuICAgICh0aGlzLnR5cGUgPSAxKSxcclxuICAgICAgKHRoaXMuXyRBSCA9IFcpLFxyXG4gICAgICAodGhpcy5fJEFOID0gdm9pZCAwKSxcclxuICAgICAgKHRoaXMuZWxlbWVudCA9IHQpLFxyXG4gICAgICAodGhpcy5uYW1lID0gaSksXHJcbiAgICAgICh0aGlzLl8kQU0gPSBlKSxcclxuICAgICAgKHRoaXMub3B0aW9ucyA9IG4pLFxyXG4gICAgICBzLmxlbmd0aCA+IDIgfHwgXCJcIiAhPT0gc1swXSB8fCBcIlwiICE9PSBzWzFdXHJcbiAgICAgICAgPyAoKHRoaXMuXyRBSCA9IEFycmF5KHMubGVuZ3RoIC0gMSkuZmlsbChuZXcgU3RyaW5nKCkpKSwgKHRoaXMuc3RyaW5ncyA9IHMpKVxyXG4gICAgICAgIDogKHRoaXMuXyRBSCA9IFcpO1xyXG4gIH1cclxuICBnZXQgdGFnTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZTtcclxuICB9XHJcbiAgZ2V0IF8kQVUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fJEFNLl8kQVU7XHJcbiAgfVxyXG4gIF8kQUkodCwgaSA9IHRoaXMsIHMsIGUpIHtcclxuICAgIGNvbnN0IG4gPSB0aGlzLnN0cmluZ3M7XHJcbiAgICBsZXQgbyA9ICExO1xyXG4gICAgaWYgKHZvaWQgMCA9PT0gbilcclxuICAgICAgKHQgPSBLKHRoaXMsIHQsIGksIDApKSwgKG8gPSAhayh0KSB8fCAodCAhPT0gdGhpcy5fJEFIICYmIHQgIT09IEQpKSwgbyAmJiAodGhpcy5fJEFIID0gdCk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgZSA9IHQ7XHJcbiAgICAgIGxldCByLCBsO1xyXG4gICAgICBmb3IgKHQgPSBuWzBdLCByID0gMDsgciA8IG4ubGVuZ3RoIC0gMTsgcisrKVxyXG4gICAgICAgIChsID0gSyh0aGlzLCBlW3MgKyByXSwgaSwgcikpLFxyXG4gICAgICAgICAgbCA9PT0gRCAmJiAobCA9IHRoaXMuXyRBSFtyXSksXHJcbiAgICAgICAgICBvIHx8IChvID0gIWsobCkgfHwgbCAhPT0gdGhpcy5fJEFIW3JdKSxcclxuICAgICAgICAgIGwgPT09IFcgPyAodCA9IFcpIDogdCAhPT0gVyAmJiAodCArPSAobnVsbCAhPSBsID8gbCA6IFwiXCIpICsgbltyICsgMV0pLFxyXG4gICAgICAgICAgKHRoaXMuXyRBSFtyXSA9IGwpO1xyXG4gICAgfVxyXG4gICAgbyAmJiAhZSAmJiB0aGlzLkkodCk7XHJcbiAgfVxyXG4gIEkodCkge1xyXG4gICAgdCA9PT0gV1xyXG4gICAgICA/IHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKVxyXG4gICAgICA6IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCBudWxsICE9IHQgPyB0IDogXCJcIik7XHJcbiAgfVxyXG59XHJcbmNsYXNzIHR0IGV4dGVuZHMgWCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlciguLi5hcmd1bWVudHMpLCAodGhpcy50eXBlID0gMyk7XHJcbiAgfVxyXG4gIEkodCkge1xyXG4gICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB0ID09PSBXID8gdm9pZCAwIDogdDtcclxuICB9XHJcbn1cclxuY29uc3QgaXQgPSBfID8gXy5lbXB0eVNjcmlwdCA6IFwiXCI7XHJcbmNsYXNzIHN0IGV4dGVuZHMgWCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlciguLi5hcmd1bWVudHMpLCAodGhpcy50eXBlID0gNCk7XHJcbiAgfVxyXG4gIEkodCkge1xyXG4gICAgdCAmJiB0ICE9PSBXID8gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIGl0KSA6IHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcclxuICB9XHJcbn1cclxuY2xhc3MgZXQgZXh0ZW5kcyBYIHtcclxuICBjb25zdHJ1Y3Rvcih0LCBpLCBzLCBlLCBuKSB7XHJcbiAgICBzdXBlcih0LCBpLCBzLCBlLCBuKSwgKHRoaXMudHlwZSA9IDUpO1xyXG4gIH1cclxuICBfJEFJKHQsIGkgPSB0aGlzKSB7XHJcbiAgICB2YXIgcztcclxuICAgIGlmICgodCA9IG51bGwgIT09IChzID0gSyh0aGlzLCB0LCBpLCAwKSkgJiYgdm9pZCAwICE9PSBzID8gcyA6IFcpID09PSBEKSByZXR1cm47XHJcbiAgICBjb25zdCBlID0gdGhpcy5fJEFILFxyXG4gICAgICBuID0gKHQgPT09IFcgJiYgZSAhPT0gVykgfHwgdC5jYXB0dXJlICE9PSBlLmNhcHR1cmUgfHwgdC5vbmNlICE9PSBlLm9uY2UgfHwgdC5wYXNzaXZlICE9PSBlLnBhc3NpdmUsXHJcbiAgICAgIG8gPSB0ICE9PSBXICYmIChlID09PSBXIHx8IG4pO1xyXG4gICAgbiAmJiB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIGUpLFxyXG4gICAgICBvICYmIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgdCksXHJcbiAgICAgICh0aGlzLl8kQUggPSB0KTtcclxuICB9XHJcbiAgaGFuZGxlRXZlbnQodCkge1xyXG4gICAgdmFyIGksIHM7XHJcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMuXyRBSFxyXG4gICAgICA/IHRoaXMuXyRBSC5jYWxsKFxyXG4gICAgICAgICAgbnVsbCAhPT0gKHMgPSBudWxsID09PSAoaSA9IHRoaXMub3B0aW9ucykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5ob3N0KSAmJiB2b2lkIDAgIT09IHNcclxuICAgICAgICAgICAgPyBzXHJcbiAgICAgICAgICAgIDogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgdFxyXG4gICAgICAgIClcclxuICAgICAgOiB0aGlzLl8kQUguaGFuZGxlRXZlbnQodCk7XHJcbiAgfVxyXG59XHJcbmNsYXNzIG50IHtcclxuICBjb25zdHJ1Y3Rvcih0LCBpLCBzKSB7XHJcbiAgICAodGhpcy5lbGVtZW50ID0gdCksICh0aGlzLnR5cGUgPSA2KSwgKHRoaXMuXyRBTiA9IHZvaWQgMCksICh0aGlzLl8kQU0gPSBpKSwgKHRoaXMub3B0aW9ucyA9IHMpO1xyXG4gIH1cclxuICBnZXQgXyRBVSgpIHtcclxuICAgIHJldHVybiB0aGlzLl8kQU0uXyRBVTtcclxuICB9XHJcbiAgXyRBSSh0KSB7XHJcbiAgICBLKHRoaXMsIHQpO1xyXG4gIH1cclxufVxyXG5jb25zdCBvdCA9IHsgSDogUywgQjogVCwgRDogeCwgcTogMSwgSjogRywgVzogWSwgWjogUCwgRjogSywgRzogUSwgSzogWCwgWDogc3QsIFk6IGV0LCB0dCwgaXQ6IG50IH0sXHJcbiAgcnQgPSB3LmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7XHJcbm51bGwgPT0gcnQgfHwgcnQoSiwgUSksXHJcbiAgKG51bGwgIT09IChnID0gdy5saXRIdG1sVmVyc2lvbnMpICYmIHZvaWQgMCAhPT0gZyA/IGcgOiAody5saXRIdG1sVmVyc2lvbnMgPSBbXSkpLnB1c2goXCIyLjguMFwiKTtcclxuY29uc3QgbHQgPSAodCwgaSwgcykgPT4ge1xyXG4gIHZhciBlLCBuO1xyXG4gIGNvbnN0IG8gPSBudWxsICE9PSAoZSA9IG51bGwgPT0gcyA/IHZvaWQgMCA6IHMucmVuZGVyQmVmb3JlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogaTtcclxuICBsZXQgciA9IG8uXyRsaXRQYXJ0JDtcclxuICBpZiAodm9pZCAwID09PSByKSB7XHJcbiAgICBjb25zdCB0ID0gbnVsbCAhPT0gKG4gPSBudWxsID09IHMgPyB2b2lkIDAgOiBzLnJlbmRlckJlZm9yZSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IG51bGw7XHJcbiAgICBvLl8kbGl0UGFydCQgPSByID0gbmV3IFEoaS5pbnNlcnRCZWZvcmUoQSgpLCB0KSwgdCwgdm9pZCAwLCBudWxsICE9IHMgPyBzIDoge30pO1xyXG4gIH1cclxuICByZXR1cm4gci5fJEFJKHQpLCByO1xyXG59O1xyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAqLyB2YXIgaHQsIHV0O1xyXG5jb25zdCBjdCA9IG07XHJcbmNsYXNzIGR0IGV4dGVuZHMgbSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlciguLi5hcmd1bWVudHMpLCAodGhpcy5yZW5kZXJPcHRpb25zID0geyBob3N0OiB0aGlzIH0pLCAodGhpcy5zdCA9IHZvaWQgMCk7XHJcbiAgfVxyXG4gIGNyZWF0ZVJlbmRlclJvb3QoKSB7XHJcbiAgICB2YXIgdCwgaTtcclxuICAgIGNvbnN0IHMgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAobnVsbCAhPT0gKHQgPSAoaSA9IHRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSAmJiB2b2lkIDAgIT09IHQpIHx8XHJcbiAgICAgICAgKGkucmVuZGVyQmVmb3JlID0gcy5maXJzdENoaWxkKSxcclxuICAgICAgc1xyXG4gICAgKTtcclxuICB9XHJcbiAgdXBkYXRlKHQpIHtcclxuICAgIGNvbnN0IGkgPSB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5oYXNVcGRhdGVkIHx8ICh0aGlzLnJlbmRlck9wdGlvbnMuaXNDb25uZWN0ZWQgPSB0aGlzLmlzQ29ubmVjdGVkKSxcclxuICAgICAgc3VwZXIudXBkYXRlKHQpLFxyXG4gICAgICAodGhpcy5zdCA9IGx0KGksIHRoaXMucmVuZGVyUm9vdCwgdGhpcy5yZW5kZXJPcHRpb25zKSk7XHJcbiAgfVxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdmFyIHQ7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpLCBudWxsID09PSAodCA9IHRoaXMuc3QpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnNldENvbm5lY3RlZCghMCk7XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdmFyIHQ7XHJcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpLCBudWxsID09PSAodCA9IHRoaXMuc3QpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnNldENvbm5lY3RlZCghMSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBEO1xyXG4gIH1cclxufVxyXG4oZHQuZmluYWxpemVkID0gITApLFxyXG4gIChkdC5fJGxpdEVsZW1lbnQkID0gITApLFxyXG4gIG51bGwgPT09IChodCA9IGdsb2JhbFRoaXMubGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0KSB8fFxyXG4gICAgdm9pZCAwID09PSBodCB8fFxyXG4gICAgaHQuY2FsbChnbG9iYWxUaGlzLCB7IExpdEVsZW1lbnQ6IGR0IH0pO1xyXG5jb25zdCBhdCA9IGdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcclxubnVsbCA9PSBhdCB8fCBhdCh7IExpdEVsZW1lbnQ6IGR0IH0pO1xyXG5jb25zdCB2dCA9IHtcclxuICBfJEFLOiAodCwgaSwgcykgPT4ge1xyXG4gICAgdC5fJEFLKGksIHMpO1xyXG4gIH0sXHJcbiAgXyRBTDogdCA9PiB0Ll8kQUwsXHJcbn07XHJcbihudWxsICE9PSAodXQgPSBnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucykgJiYgdm9pZCAwICE9PSB1dFxyXG4gID8gdXRcclxuICA6IChnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucyA9IFtdKVxyXG4pLnB1c2goXCIzLjMuM1wiKTtcclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxyXG4gKi9cclxuY29uc3QgZnQgPSAhMSxcclxuICB7IEc6IHB0IH0gPSBvdCxcclxuICB5dCA9IHQgPT4gbnVsbCA9PT0gdCB8fCAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQpLFxyXG4gIGJ0ID0geyBIVE1MOiAxLCBTVkc6IDIgfSxcclxuICBtdCA9ICh0LCBpKSA9PlxyXG4gICAgdm9pZCAwID09PSBpID8gdm9pZCAwICE9PSAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5fJGxpdFR5cGUkKSA6IChudWxsID09IHQgPyB2b2lkIDAgOiB0Ll8kbGl0VHlwZSQpID09PSBpLFxyXG4gIGd0ID0gdCA9PiB7XHJcbiAgICB2YXIgaTtcclxuICAgIHJldHVybiBudWxsICE9IChudWxsID09PSAoaSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuXyRsaXRUeXBlJCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5oKTtcclxuICB9LFxyXG4gIHd0ID0gdCA9PiB2b2lkIDAgIT09IChudWxsID09IHQgPyB2b2lkIDAgOiB0Ll8kbGl0RGlyZWN0aXZlJCksXHJcbiAgX3QgPSB0ID0+IChudWxsID09IHQgPyB2b2lkIDAgOiB0Ll8kbGl0RGlyZWN0aXZlJCksXHJcbiAgJHQgPSB0ID0+IHZvaWQgMCA9PT0gdC5zdHJpbmdzLFxyXG4gIFN0ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIlwiKSxcclxuICBUdCA9ICh0LCBpLCBzKSA9PiB7XHJcbiAgICB2YXIgZTtcclxuICAgIGNvbnN0IG4gPSB0Ll8kQUEucGFyZW50Tm9kZSxcclxuICAgICAgbyA9IHZvaWQgMCA9PT0gaSA/IHQuXyRBQiA6IGkuXyRBQTtcclxuICAgIGlmICh2b2lkIDAgPT09IHMpIHtcclxuICAgICAgY29uc3QgaSA9IG4uaW5zZXJ0QmVmb3JlKFN0KCksIG8pLFxyXG4gICAgICAgIGUgPSBuLmluc2VydEJlZm9yZShTdCgpLCBvKTtcclxuICAgICAgcyA9IG5ldyBwdChpLCBlLCB0LCB0Lm9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaSA9IHMuXyRBQi5uZXh0U2libGluZyxcclxuICAgICAgICByID0gcy5fJEFNLFxyXG4gICAgICAgIGwgPSByICE9PSB0O1xyXG4gICAgICBpZiAobCkge1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIG51bGwgPT09IChlID0gcy5fJEFRKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jYWxsKHMsIHQpLFxyXG4gICAgICAgICAgKHMuXyRBTSA9IHQpLFxyXG4gICAgICAgICAgdm9pZCAwICE9PSBzLl8kQVAgJiYgKGkgPSB0Ll8kQVUpICE9PSByLl8kQVUgJiYgcy5fJEFQKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpICE9PSBvIHx8IGwpIHtcclxuICAgICAgICBsZXQgdCA9IHMuXyRBQTtcclxuICAgICAgICBmb3IgKDsgdCAhPT0gaTsgKSB7XHJcbiAgICAgICAgICBjb25zdCBpID0gdC5uZXh0U2libGluZztcclxuICAgICAgICAgIG4uaW5zZXJ0QmVmb3JlKHQsIG8pLCAodCA9IGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbiAgfSxcclxuICB4dCA9ICh0LCBpLCBzID0gdCkgPT4gKHQuXyRBSShpLCBzKSwgdCksXHJcbiAgRXQgPSB7fSxcclxuICBDdCA9ICh0LCBpID0gRXQpID0+ICh0Ll8kQUggPSBpKSxcclxuICBBdCA9IHQgPT4gdC5fJEFILFxyXG4gIGt0ID0gdCA9PiB7XHJcbiAgICB2YXIgaTtcclxuICAgIG51bGwgPT09IChpID0gdC5fJEFQKSB8fCB2b2lkIDAgPT09IGkgfHwgaS5jYWxsKHQsICExLCAhMCk7XHJcbiAgICBsZXQgcyA9IHQuXyRBQTtcclxuICAgIGNvbnN0IGUgPSB0Ll8kQUIubmV4dFNpYmxpbmc7XHJcbiAgICBmb3IgKDsgcyAhPT0gZTsgKSB7XHJcbiAgICAgIGNvbnN0IHQgPSBzLm5leHRTaWJsaW5nO1xyXG4gICAgICBzLnJlbW92ZSgpLCAocyA9IHQpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgTXQgPSB0ID0+IHtcclxuICAgIHQuXyRBUigpO1xyXG4gIH0sXHJcbiAgUHQgPSB7IEFUVFJJQlVURTogMSwgQ0hJTEQ6IDIsIFBST1BFUlRZOiAzLCBCT09MRUFOX0FUVFJJQlVURTogNCwgRVZFTlQ6IDUsIEVMRU1FTlQ6IDYgfSxcclxuICBVdCA9XHJcbiAgICB0ID0+XHJcbiAgICAoLi4uaSkgPT4gKHsgXyRsaXREaXJlY3RpdmUkOiB0LCB2YWx1ZXM6IGkgfSk7XHJcbmNsYXNzIFZ0IHtcclxuICBjb25zdHJ1Y3Rvcih0KSB7fVxyXG4gIGdldCBfJEFVKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuXyRBTS5fJEFVO1xyXG4gIH1cclxuICBfJEFUKHQsIGksIHMpIHtcclxuICAgICh0aGlzLmV0ID0gdCksICh0aGlzLl8kQU0gPSBpKSwgKHRoaXMubnQgPSBzKTtcclxuICB9XHJcbiAgXyRBUyh0LCBpKSB7XHJcbiAgICByZXR1cm4gdGhpcy51cGRhdGUodCwgaSk7XHJcbiAgfVxyXG4gIHVwZGF0ZSh0LCBpKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoLi4uaSk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovIGNvbnN0IFJ0ID0gKHQsIGkpID0+IHtcclxuICAgIHZhciBzLCBlO1xyXG4gICAgY29uc3QgbiA9IHQuXyRBTjtcclxuICAgIGlmICh2b2lkIDAgPT09IG4pIHJldHVybiAhMTtcclxuICAgIGZvciAoY29uc3QgdCBvZiBuKSBudWxsID09PSAoZSA9IChzID0gdCkuXyRBTykgfHwgdm9pZCAwID09PSBlIHx8IGUuY2FsbChzLCBpLCAhMSksIFJ0KHQsIGkpO1xyXG4gICAgcmV0dXJuICEwO1xyXG4gIH0sXHJcbiAgTnQgPSB0ID0+IHtcclxuICAgIGxldCBpLCBzO1xyXG4gICAgZG8ge1xyXG4gICAgICBpZiAodm9pZCAwID09PSAoaSA9IHQuXyRBTSkpIGJyZWFrO1xyXG4gICAgICAocyA9IGkuXyRBTiksIHMuZGVsZXRlKHQpLCAodCA9IGkpO1xyXG4gICAgfSB3aGlsZSAoMCA9PT0gKG51bGwgPT0gcyA/IHZvaWQgMCA6IHMuc2l6ZSkpO1xyXG4gIH0sXHJcbiAgT3QgPSB0ID0+IHtcclxuICAgIGZvciAobGV0IGk7IChpID0gdC5fJEFNKTsgdCA9IGkpIHtcclxuICAgICAgbGV0IHMgPSBpLl8kQU47XHJcbiAgICAgIGlmICh2b2lkIDAgPT09IHMpIGkuXyRBTiA9IHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgIGVsc2UgaWYgKHMuaGFzKHQpKSBicmVhaztcclxuICAgICAgcy5hZGQodCksIHp0KGkpO1xyXG4gICAgfVxyXG4gIH07XHJcbmZ1bmN0aW9uIEx0KHQpIHtcclxuICB2b2lkIDAgIT09IHRoaXMuXyRBTiA/IChOdCh0aGlzKSwgKHRoaXMuXyRBTSA9IHQpLCBPdCh0aGlzKSkgOiAodGhpcy5fJEFNID0gdCk7XHJcbn1cclxuZnVuY3Rpb24ganQodCwgaSA9ICExLCBzID0gMCkge1xyXG4gIGNvbnN0IGUgPSB0aGlzLl8kQUgsXHJcbiAgICBuID0gdGhpcy5fJEFOO1xyXG4gIGlmICh2b2lkIDAgIT09IG4gJiYgMCAhPT0gbi5zaXplKVxyXG4gICAgaWYgKGkpXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSBmb3IgKGxldCB0ID0gczsgdCA8IGUubGVuZ3RoOyB0KyspIFJ0KGVbdF0sICExKSwgTnQoZVt0XSk7XHJcbiAgICAgIGVsc2UgbnVsbCAhPSBlICYmIChSdChlLCAhMSksIE50KGUpKTtcclxuICAgIGVsc2UgUnQodGhpcywgdCk7XHJcbn1cclxuY29uc3QgenQgPSB0ID0+IHtcclxuICB2YXIgaSwgcywgZSwgbjtcclxuICAyID09IHQudHlwZSAmJlxyXG4gICAgKChudWxsICE9PSAoaSA9IChlID0gdCkuXyRBUCkgJiYgdm9pZCAwICE9PSBpKSB8fCAoZS5fJEFQID0ganQpLFxyXG4gICAgKG51bGwgIT09IChzID0gKG4gPSB0KS5fJEFRKSAmJiB2b2lkIDAgIT09IHMpIHx8IChuLl8kQVEgPSBMdCkpO1xyXG59O1xyXG5jbGFzcyBIdCBleHRlbmRzIFZ0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyksICh0aGlzLl8kQU4gPSB2b2lkIDApO1xyXG4gIH1cclxuICBfJEFUKHQsIGksIHMpIHtcclxuICAgIHN1cGVyLl8kQVQodCwgaSwgcyksIE90KHRoaXMpLCAodGhpcy5pc0Nvbm5lY3RlZCA9IHQuXyRBVSk7XHJcbiAgfVxyXG4gIF8kQU8odCwgaSA9ICEwKSB7XHJcbiAgICB2YXIgcywgZTtcclxuICAgIHQgIT09IHRoaXMuaXNDb25uZWN0ZWQgJiZcclxuICAgICAgKCh0aGlzLmlzQ29ubmVjdGVkID0gdCksXHJcbiAgICAgIHRcclxuICAgICAgICA/IG51bGwgPT09IChzID0gdGhpcy5yZWNvbm5lY3RlZCkgfHwgdm9pZCAwID09PSBzIHx8IHMuY2FsbCh0aGlzKVxyXG4gICAgICAgIDogbnVsbCA9PT0gKGUgPSB0aGlzLmRpc2Nvbm5lY3RlZCkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2FsbCh0aGlzKSksXHJcbiAgICAgIGkgJiYgKFJ0KHRoaXMsIHQpLCBOdCh0aGlzKSk7XHJcbiAgfVxyXG4gIHNldFZhbHVlKHQpIHtcclxuICAgIGlmICgkdCh0aGlzLmV0KSkgdGhpcy5ldC5fJEFJKHQsIHRoaXMpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGkgPSBbLi4udGhpcy5ldC5fJEFIXTtcclxuICAgICAgKGlbdGhpcy5udF0gPSB0KSwgdGhpcy5ldC5fJEFJKGksIHRoaXMsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXNjb25uZWN0ZWQoKSB7fVxyXG4gIHJlY29ubmVjdGVkKCkge31cclxufVxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAqLyBjbGFzcyBJdCB7XHJcbiAgY29uc3RydWN0b3IodCkge1xyXG4gICAgdGhpcy5vdCA9IHQ7XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICB0aGlzLm90ID0gdm9pZCAwO1xyXG4gIH1cclxuICByZWNvbm5lY3QodCkge1xyXG4gICAgdGhpcy5vdCA9IHQ7XHJcbiAgfVxyXG4gIGRlcmVmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3Q7XHJcbiAgfVxyXG59XHJcbmNsYXNzIEJ0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICh0aGlzLnJ0ID0gdm9pZCAwKSwgKHRoaXMubHQgPSB2b2lkIDApO1xyXG4gIH1cclxuICBnZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydDtcclxuICB9XHJcbiAgcGF1c2UoKSB7XHJcbiAgICB2YXIgdDtcclxuICAgIChudWxsICE9PSAodCA9IHRoaXMucnQpICYmIHZvaWQgMCAhPT0gdCkgfHwgKHRoaXMucnQgPSBuZXcgUHJvbWlzZSh0ID0+ICh0aGlzLmx0ID0gdCkpKTtcclxuICB9XHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdmFyIHQ7XHJcbiAgICBudWxsID09PSAodCA9IHRoaXMubHQpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNhbGwodGhpcyksICh0aGlzLnJ0ID0gdGhpcy5sdCA9IHZvaWQgMCk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovIGNsYXNzIER0IGV4dGVuZHMgSHQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKSwgKHRoaXMuaHQgPSBuZXcgSXQodGhpcykpLCAodGhpcy51dCA9IG5ldyBCdCgpKTtcclxuICB9XHJcbiAgcmVuZGVyKHQsIGkpIHtcclxuICAgIHJldHVybiBEO1xyXG4gIH1cclxuICB1cGRhdGUodCwgW2ksIHNdKSB7XHJcbiAgICBpZiAoKHRoaXMuaXNDb25uZWN0ZWQgfHwgdGhpcy5kaXNjb25uZWN0ZWQoKSwgaSA9PT0gdGhpcy5jdCkpIHJldHVybjtcclxuICAgIHRoaXMuY3QgPSBpO1xyXG4gICAgbGV0IGUgPSAwO1xyXG4gICAgY29uc3QgeyBodDogbiwgdXQ6IG8gfSA9IHRoaXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoYXN5bmMgKHQsIGkpID0+IHtcclxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHMgb2YgdCkgaWYgKCExID09PSAoYXdhaXQgaShzKSkpIHJldHVybjtcclxuICAgICAgfSkoaSwgYXN5bmMgdCA9PiB7XHJcbiAgICAgICAgZm9yICg7IG8uZ2V0KCk7ICkgYXdhaXQgby5nZXQoKTtcclxuICAgICAgICBjb25zdCByID0gbi5kZXJlZigpO1xyXG4gICAgICAgIGlmICh2b2lkIDAgIT09IHIpIHtcclxuICAgICAgICAgIGlmIChyLmN0ICE9PSBpKSByZXR1cm4gITE7XHJcbiAgICAgICAgICB2b2lkIDAgIT09IHMgJiYgKHQgPSBzKHQsIGUpKSwgci5jb21taXRWYWx1ZSh0LCBlKSwgZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gITA7XHJcbiAgICAgIH0pLFxyXG4gICAgICBEXHJcbiAgICApO1xyXG4gIH1cclxuICBjb21taXRWYWx1ZSh0LCBpKSB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHQpO1xyXG4gIH1cclxuICBkaXNjb25uZWN0ZWQoKSB7XHJcbiAgICB0aGlzLmh0LmRpc2Nvbm5lY3QoKSwgdGhpcy51dC5wYXVzZSgpO1xyXG4gIH1cclxuICByZWNvbm5lY3RlZCgpIHtcclxuICAgIHRoaXMuaHQucmVjb25uZWN0KHRoaXMpLCB0aGlzLnV0LnJlc3VtZSgpO1xyXG4gIH1cclxufVxyXG5jb25zdCBXdCA9IFV0KER0KSxcclxuICBadCA9IFV0KFxyXG4gICAgLyoqXHJcbiAgICAgKiBAbGljZW5zZVxyXG4gICAgICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gICAgICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxyXG4gICAgICovXHJcbiAgICBjbGFzcyBleHRlbmRzIER0IHtcclxuICAgICAgY29uc3RydWN0b3IodCkge1xyXG4gICAgICAgIGlmICgoc3VwZXIodCksIDIgIT09IHQudHlwZSkpIHRocm93IEVycm9yKFwiYXN5bmNBcHBlbmQgY2FuIG9ubHkgYmUgdXNlZCBpbiBjaGlsZCBleHByZXNzaW9uc1wiKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGUodCwgaSkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zdCA9IHQpLCBzdXBlci51cGRhdGUodCwgaSk7XHJcbiAgICAgIH1cclxuICAgICAgY29tbWl0VmFsdWUodCwgaSkge1xyXG4gICAgICAgIDAgPT09IGkgJiYgTXQodGhpcy5zdCk7XHJcbiAgICAgICAgY29uc3QgcyA9IFR0KHRoaXMuc3QpO1xyXG4gICAgICAgIHh0KHMsIHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKSxcclxuICBxdCA9IHQgPT4gKGd0KHQpID8gdC5fJGxpdFR5cGUkLmggOiB0LnN0cmluZ3MpLFxyXG4gIEZ0ID0gVXQoXHJcbiAgICBjbGFzcyBleHRlbmRzIFZ0IHtcclxuICAgICAgY29uc3RydWN0b3IodCkge1xyXG4gICAgICAgIHN1cGVyKHQpLCAodGhpcy5kdCA9IG5ldyBXZWFrTWFwKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcih0KSB7XHJcbiAgICAgICAgcmV0dXJuIFt0XTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGUodCwgW2ldKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IG10KHRoaXMudnQpID8gcXQodGhpcy52dCkgOiBudWxsLFxyXG4gICAgICAgICAgZSA9IG10KGkpID8gcXQoaSkgOiBudWxsO1xyXG4gICAgICAgIGlmIChudWxsICE9PSBzICYmIChudWxsID09PSBlIHx8IHMgIT09IGUpKSB7XHJcbiAgICAgICAgICBjb25zdCBpID0gQXQodCkucG9wKCk7XHJcbiAgICAgICAgICBsZXQgZSA9IHRoaXMuZHQuZ2V0KHMpO1xyXG4gICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICAoZSA9IGx0KFcsIHQpKSwgZS5zZXRDb25uZWN0ZWQoITEpLCB0aGlzLmR0LnNldChzLCBlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEN0KGUsIFtpXSksIFR0KGUsIHZvaWQgMCwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudWxsICE9PSBlKSB7XHJcbiAgICAgICAgICBpZiAobnVsbCA9PT0gcyB8fCBzICE9PSBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmR0LmdldChlKTtcclxuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHMgPSBBdChpKS5wb3AoKTtcclxuICAgICAgICAgICAgICBNdCh0KSwgVHQodCwgdm9pZCAwLCBzKSwgQ3QodCwgW3NdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52dCA9IGk7XHJcbiAgICAgICAgfSBlbHNlIHRoaXMudnQgPSB2b2lkIDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKSxcclxuICBHdCA9ICh0LCBpLCBzKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHMgb2YgaSkgaWYgKHNbMF0gPT09IHQpIHJldHVybiAoMCwgc1sxXSkoKTtcclxuICAgIHJldHVybiBudWxsID09IHMgPyB2b2lkIDAgOiBzKCk7XHJcbiAgfSxcclxuICBKdCA9IFV0KFxyXG4gICAgLyoqXHJcbiAgICAgKiBAbGljZW5zZVxyXG4gICAgICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xyXG4gICAgICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxyXG4gICAgICovXHJcbiAgICBjbGFzcyBleHRlbmRzIFZ0IHtcclxuICAgICAgY29uc3RydWN0b3IodCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChzdXBlcih0KSxcclxuICAgICAgICAgIDEgIT09IHQudHlwZSB8fFxyXG4gICAgICAgICAgICBcImNsYXNzXCIgIT09IHQubmFtZSB8fFxyXG4gICAgICAgICAgICAobnVsbCA9PT0gKGkgPSB0LnN0cmluZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkubGVuZ3RoKSA+IDIpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgIFwiYGNsYXNzTWFwKClgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBjbGFzc2AgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXIodCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh0KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGkgPT4gdFtpXSlcclxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpICtcclxuICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGUodCwgW2ldKSB7XHJcbiAgICAgICAgdmFyIHMsIGU7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdGhpcy5mdCkge1xyXG4gICAgICAgICAgKHRoaXMuZnQgPSBuZXcgU2V0KCkpLFxyXG4gICAgICAgICAgICB2b2lkIDAgIT09IHQuc3RyaW5ncyAmJlxyXG4gICAgICAgICAgICAgICh0aGlzLnl0ID0gbmV3IFNldChcclxuICAgICAgICAgICAgICAgIHQuc3RyaW5nc1xyXG4gICAgICAgICAgICAgICAgICAuam9pbihcIiBcIilcclxuICAgICAgICAgICAgICAgICAgLnNwbGl0KC9cXHMvKVxyXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gXCJcIiAhPT0gdClcclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgdCBpbiBpKVxyXG4gICAgICAgICAgICBpW3RdICYmICEobnVsbCA9PT0gKHMgPSB0aGlzLnl0KSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmhhcyh0KSkgJiYgdGhpcy5mdC5hZGQodCk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG4gPSB0LmVsZW1lbnQuY2xhc3NMaXN0O1xyXG4gICAgICAgIHRoaXMuZnQuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgIHQgaW4gaSB8fCAobi5yZW1vdmUodCksIHRoaXMuZnQuZGVsZXRlKHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IHQgaW4gaSkge1xyXG4gICAgICAgICAgY29uc3QgcyA9ICEhaVt0XTtcclxuICAgICAgICAgIHMgPT09IHRoaXMuZnQuaGFzKHQpIHx8XHJcbiAgICAgICAgICAgIChudWxsID09PSAoZSA9IHRoaXMueXQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaGFzKHQpKSB8fFxyXG4gICAgICAgICAgICAocyA/IChuLmFkZCh0KSwgdGhpcy5mdC5hZGQodCkpIDogKG4ucmVtb3ZlKHQpLCB0aGlzLmZ0LmRlbGV0ZSh0KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICksXHJcbiAgS3QgPSB7fSxcclxuICBZdCA9IFV0KFxyXG4gICAgY2xhc3MgZXh0ZW5kcyBWdCB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyksICh0aGlzLmJ0ID0gS3QpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcih0LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGkoKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGUodCwgW2ksIHNdKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaSkpIHtcclxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuYnQpICYmIHRoaXMuYnQubGVuZ3RoID09PSBpLmxlbmd0aCAmJiBpLmV2ZXJ5KCh0LCBpKSA9PiB0ID09PSB0aGlzLmJ0W2ldKSlcclxuICAgICAgICAgICAgcmV0dXJuIEQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJ0ID09PSBpKSByZXR1cm4gRDtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnQgPSBBcnJheS5pc0FycmF5KGkpID8gQXJyYXkuZnJvbShpKSA6IGkpLCB0aGlzLnJlbmRlcihpLCBzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICksXHJcbiAgUXQgPSB0ID0+IChudWxsICE9IHQgPyB0IDogVyk7XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovIGZ1bmN0aW9uKiBYdCh0LCBpKSB7XHJcbiAgY29uc3QgcyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaTtcclxuICBpZiAodm9pZCAwICE9PSB0KSB7XHJcbiAgICBsZXQgZSA9IC0xO1xyXG4gICAgZm9yIChjb25zdCBuIG9mIHQpIGUgPiAtMSAmJiAoeWllbGQgcyA/IGkoZSkgOiBpKSwgZSsrLCB5aWVsZCBuO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAqLyBjb25zdCB0aSA9IFV0KFxyXG4gICAgY2xhc3MgZXh0ZW5kcyBWdCB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyksICh0aGlzLmtleSA9IFcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcih0LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmtleSA9IHQpLCBpO1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZSh0LCBbaSwgc10pIHtcclxuICAgICAgICByZXR1cm4gaSAhPT0gdGhpcy5rZXkgJiYgKEN0KHQpLCAodGhpcy5rZXkgPSBpKSksIHM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApLFxyXG4gIGlpID0gVXQoXHJcbiAgICAvKipcclxuICAgICAqIEBsaWNlbnNlXHJcbiAgICAgKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAgICAgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAgICAgKi9cclxuICAgIGNsYXNzIGV4dGVuZHMgVnQge1xyXG4gICAgICBjb25zdHJ1Y3Rvcih0KSB7XHJcbiAgICAgICAgaWYgKChzdXBlcih0KSwgMyAhPT0gdC50eXBlICYmIDEgIT09IHQudHlwZSAmJiA0ICE9PSB0LnR5cGUpKVxyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXCJUaGUgYGxpdmVgIGRpcmVjdGl2ZSBpcyBub3QgYWxsb3dlZCBvbiBjaGlsZCBvciBldmVudCBiaW5kaW5nc1wiKTtcclxuICAgICAgICBpZiAoISR0KHQpKSB0aHJvdyBFcnJvcihcImBsaXZlYCBiaW5kaW5ncyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb25cIik7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyKHQpIHtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGUodCwgW2ldKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IEQgfHwgaSA9PT0gVykgcmV0dXJuIGk7XHJcbiAgICAgICAgY29uc3QgcyA9IHQuZWxlbWVudCxcclxuICAgICAgICAgIGUgPSB0Lm5hbWU7XHJcbiAgICAgICAgaWYgKDMgPT09IHQudHlwZSkge1xyXG4gICAgICAgICAgaWYgKGkgPT09IHNbZV0pIHJldHVybiBEO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoNCA9PT0gdC50eXBlKSB7XHJcbiAgICAgICAgICBpZiAoISFpID09PSBzLmhhc0F0dHJpYnV0ZShlKSkgcmV0dXJuIEQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICgxID09PSB0LnR5cGUgJiYgcy5nZXRBdHRyaWJ1dGUoZSkgPT09IGkgKyBcIlwiKSByZXR1cm4gRDtcclxuICAgICAgICByZXR1cm4gQ3QodCksIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAqL1xyXG5mdW5jdGlvbiogc2kodCwgaSkge1xyXG4gIGlmICh2b2lkIDAgIT09IHQpIHtcclxuICAgIGxldCBzID0gMDtcclxuICAgIGZvciAoY29uc3QgZSBvZiB0KSB5aWVsZCBpKGUsIHMrKyk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovIGZ1bmN0aW9uKiBlaSh0LCBpLCBzID0gMSkge1xyXG4gIGNvbnN0IGUgPSB2b2lkIDAgPT09IGkgPyAwIDogdDtcclxuICBudWxsICE9IGkgfHwgKGkgPSB0KTtcclxuICBmb3IgKGxldCB0ID0gZTsgcyA+IDAgPyB0IDwgaSA6IGkgPCB0OyB0ICs9IHMpIHlpZWxkIHQ7XHJcbn1cclxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxyXG4gKi8gY29uc3QgbmkgPSAoKSA9PiBuZXcgb2koKTtcclxuY2xhc3Mgb2kge31cclxuY29uc3QgcmkgPSBuZXcgV2Vha01hcCgpLFxyXG4gIGxpID0gVXQoXHJcbiAgICBjbGFzcyBleHRlbmRzIEh0IHtcclxuICAgICAgcmVuZGVyKHQpIHtcclxuICAgICAgICByZXR1cm4gVztcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGUodCwgW2ldKSB7XHJcbiAgICAgICAgdmFyIHM7XHJcbiAgICAgICAgY29uc3QgZSA9IGkgIT09IHRoaXMub3Q7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIGUgJiYgdm9pZCAwICE9PSB0aGlzLm90ICYmIHRoaXMuZ3Qodm9pZCAwKSxcclxuICAgICAgICAgIChlIHx8IHRoaXMud3QgIT09IHRoaXMuX3QpICYmXHJcbiAgICAgICAgICAgICgodGhpcy5vdCA9IGkpLFxyXG4gICAgICAgICAgICAodGhpcy4kdCA9IG51bGwgPT09IChzID0gdC5vcHRpb25zKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmhvc3QpLFxyXG4gICAgICAgICAgICB0aGlzLmd0KCh0aGlzLl90ID0gdC5lbGVtZW50KSkpLFxyXG4gICAgICAgICAgV1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZ3QodCkge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3QpIHtcclxuICAgICAgICAgIGNvbnN0IHMgPSBudWxsICE9PSAoaSA9IHRoaXMuJHQpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBnbG9iYWxUaGlzO1xyXG4gICAgICAgICAgbGV0IGUgPSByaS5nZXQocyk7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKChlID0gbmV3IFdlYWtNYXAoKSksIHJpLnNldChzLCBlKSksXHJcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gZS5nZXQodGhpcy5vdCkgJiYgdGhpcy5vdC5jYWxsKHRoaXMuJHQsIHZvaWQgMCksXHJcbiAgICAgICAgICAgIGUuc2V0KHRoaXMub3QsIHQpLFxyXG4gICAgICAgICAgICB2b2lkIDAgIT09IHQgJiYgdGhpcy5vdC5jYWxsKHRoaXMuJHQsIHQpO1xyXG4gICAgICAgIH0gZWxzZSB0aGlzLm90LnZhbHVlID0gdDtcclxuICAgICAgfVxyXG4gICAgICBnZXQgd3QoKSB7XHJcbiAgICAgICAgdmFyIHQsIGksIHM7XHJcbiAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vdFxyXG4gICAgICAgICAgPyBudWxsID09PSAoaSA9IHJpLmdldChudWxsICE9PSAodCA9IHRoaXMuJHQpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBnbG9iYWxUaGlzKSkgfHwgdm9pZCAwID09PSBpXHJcbiAgICAgICAgICAgID8gdm9pZCAwXHJcbiAgICAgICAgICAgIDogaS5nZXQodGhpcy5vdClcclxuICAgICAgICAgIDogbnVsbCA9PT0gKHMgPSB0aGlzLm90KSB8fCB2b2lkIDAgPT09IHNcclxuICAgICAgICAgID8gdm9pZCAwXHJcbiAgICAgICAgICA6IHMudmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgZGlzY29ubmVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMud3QgPT09IHRoaXMuX3QgJiYgdGhpcy5ndCh2b2lkIDApO1xyXG4gICAgICB9XHJcbiAgICAgIHJlY29ubmVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuZ3QodGhpcy5fdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApLFxyXG4gIGhpID0gKHQsIGksIHMpID0+IHtcclxuICAgIGNvbnN0IGUgPSBuZXcgTWFwKCk7XHJcbiAgICBmb3IgKGxldCBuID0gaTsgbiA8PSBzOyBuKyspIGUuc2V0KHRbbl0sIG4pO1xyXG4gICAgcmV0dXJuIGU7XHJcbiAgfSxcclxuICB1aSA9IFV0KFxyXG4gICAgY2xhc3MgZXh0ZW5kcyBWdCB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKHQpIHtcclxuICAgICAgICBpZiAoKHN1cGVyKHQpLCAyICE9PSB0LnR5cGUpKSB0aHJvdyBFcnJvcihcInJlcGVhdCgpIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBleHByZXNzaW9uc1wiKTtcclxuICAgICAgfVxyXG4gICAgICBTdCh0LCBpLCBzKSB7XHJcbiAgICAgICAgbGV0IGU7XHJcbiAgICAgICAgdm9pZCAwID09PSBzID8gKHMgPSBpKSA6IHZvaWQgMCAhPT0gaSAmJiAoZSA9IGkpO1xyXG4gICAgICAgIGNvbnN0IG4gPSBbXSxcclxuICAgICAgICAgIG8gPSBbXTtcclxuICAgICAgICBsZXQgciA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHQpIChuW3JdID0gZSA/IGUoaSwgcikgOiByKSwgKG9bcl0gPSBzKGksIHIpKSwgcisrO1xyXG4gICAgICAgIHJldHVybiB7IHZhbHVlczogbywga2V5czogbiB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcih0LCBpLCBzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuU3QodCwgaSwgcykudmFsdWVzO1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZSh0LCBbaSwgcywgZV0pIHtcclxuICAgICAgICB2YXIgbjtcclxuICAgICAgICBjb25zdCBvID0gQXQodCksXHJcbiAgICAgICAgICB7IHZhbHVlczogciwga2V5czogbCB9ID0gdGhpcy5TdChpLCBzLCBlKTtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobykpIHJldHVybiAodGhpcy5UdCA9IGwpLCByO1xyXG4gICAgICAgIGNvbnN0IGggPSBudWxsICE9PSAobiA9IHRoaXMuVHQpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiAodGhpcy5UdCA9IFtdKSxcclxuICAgICAgICAgIHUgPSBbXTtcclxuICAgICAgICBsZXQgYyxcclxuICAgICAgICAgIGQsXHJcbiAgICAgICAgICBhID0gMCxcclxuICAgICAgICAgIHYgPSBvLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICBmID0gMCxcclxuICAgICAgICAgIHAgPSByLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgZm9yICg7IGEgPD0gdiAmJiBmIDw9IHA7IClcclxuICAgICAgICAgIGlmIChudWxsID09PSBvW2FdKSBhKys7XHJcbiAgICAgICAgICBlbHNlIGlmIChudWxsID09PSBvW3ZdKSB2LS07XHJcbiAgICAgICAgICBlbHNlIGlmIChoW2FdID09PSBsW2ZdKSAodVtmXSA9IHh0KG9bYV0sIHJbZl0pKSwgYSsrLCBmKys7XHJcbiAgICAgICAgICBlbHNlIGlmIChoW3ZdID09PSBsW3BdKSAodVtwXSA9IHh0KG9bdl0sIHJbcF0pKSwgdi0tLCBwLS07XHJcbiAgICAgICAgICBlbHNlIGlmIChoW2FdID09PSBsW3BdKSAodVtwXSA9IHh0KG9bYV0sIHJbcF0pKSwgVHQodCwgdVtwICsgMV0sIG9bYV0pLCBhKyssIHAtLTtcclxuICAgICAgICAgIGVsc2UgaWYgKGhbdl0gPT09IGxbZl0pICh1W2ZdID0geHQob1t2XSwgcltmXSkpLCBUdCh0LCBvW2FdLCBvW3ZdKSwgdi0tLCBmKys7XHJcbiAgICAgICAgICBlbHNlIGlmICgodm9pZCAwID09PSBjICYmICgoYyA9IGhpKGwsIGYsIHApKSwgKGQgPSBoaShoLCBhLCB2KSkpLCBjLmhhcyhoW2FdKSkpXHJcbiAgICAgICAgICAgIGlmIChjLmhhcyhoW3ZdKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGkgPSBkLmdldChsW2ZdKSxcclxuICAgICAgICAgICAgICAgIHMgPSB2b2lkIDAgIT09IGkgPyBvW2ldIDogbnVsbDtcclxuICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IFR0KHQsIG9bYV0pO1xyXG4gICAgICAgICAgICAgICAgeHQoaSwgcltmXSksICh1W2ZdID0gaSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlICh1W2ZdID0geHQocywgcltmXSkpLCBUdCh0LCBvW2FdLCBzKSwgKG9baV0gPSBudWxsKTtcclxuICAgICAgICAgICAgICBmKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSBrdChvW3ZdKSwgdi0tO1xyXG4gICAgICAgICAgZWxzZSBrdChvW2FdKSwgYSsrO1xyXG4gICAgICAgIGZvciAoOyBmIDw9IHA7ICkge1xyXG4gICAgICAgICAgY29uc3QgaSA9IFR0KHQsIHVbcCArIDFdKTtcclxuICAgICAgICAgIHh0KGksIHJbZl0pLCAodVtmKytdID0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoOyBhIDw9IHY7ICkge1xyXG4gICAgICAgICAgY29uc3QgdCA9IG9bYSsrXTtcclxuICAgICAgICAgIG51bGwgIT09IHQgJiYga3QodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhpcy5UdCA9IGwpLCBDdCh0LCB1KSwgRDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICksXHJcbiAgY2kgPSBcImltcG9ydGFudFwiLFxyXG4gIGRpID0gXCIgIVwiICsgY2ksXHJcbiAgYWkgPSBVdChcclxuICAgIGNsYXNzIGV4dGVuZHMgVnQge1xyXG4gICAgICBjb25zdHJ1Y3Rvcih0KSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKHN1cGVyKHQpLFxyXG4gICAgICAgICAgMSAhPT0gdC50eXBlIHx8XHJcbiAgICAgICAgICAgIFwic3R5bGVcIiAhPT0gdC5uYW1lIHx8XHJcbiAgICAgICAgICAgIChudWxsID09PSAoaSA9IHQuc3RyaW5ncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5sZW5ndGgpID4gMilcclxuICAgICAgICApXHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgXCJUaGUgYHN0eWxlTWFwYCBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIGluIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZSBhbmQgbXVzdCBiZSB0aGUgb25seSBwYXJ0IGluIHRoZSBhdHRyaWJ1dGUuXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyKHQpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModCkucmVkdWNlKChpLCBzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlID0gdFtzXTtcclxuICAgICAgICAgIHJldHVybiBudWxsID09IGVcclxuICAgICAgICAgICAgPyBpXHJcbiAgICAgICAgICAgIDogaSArXHJcbiAgICAgICAgICAgICAgICBgJHsocyA9IHMuaW5jbHVkZXMoXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgID8gc1xyXG4gICAgICAgICAgICAgICAgICA6IHMucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgXCItJCZcIikudG9Mb3dlckNhc2UoKSl9OiR7ZX07YDtcclxuICAgICAgICB9LCBcIlwiKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGUodCwgW2ldKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHlsZTogcyB9ID0gdC5lbGVtZW50O1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHRoaXMueHQpIHtcclxuICAgICAgICAgIHRoaXMueHQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHQgaW4gaSkgdGhpcy54dC5hZGQodCk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMueHQuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgIG51bGwgPT0gaVt0XSAmJiAodGhpcy54dC5kZWxldGUodCksIHQuaW5jbHVkZXMoXCItXCIpID8gcy5yZW1vdmVQcm9wZXJ0eSh0KSA6IChzW3RdID0gXCJcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAoY29uc3QgdCBpbiBpKSB7XHJcbiAgICAgICAgICBjb25zdCBlID0gaVt0XTtcclxuICAgICAgICAgIGlmIChudWxsICE9IGUpIHtcclxuICAgICAgICAgICAgdGhpcy54dC5hZGQodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIGUuZW5kc1dpdGgoZGkpO1xyXG4gICAgICAgICAgICB0LmluY2x1ZGVzKFwiLVwiKSB8fCBpID8gcy5zZXRQcm9wZXJ0eSh0LCBpID8gZS5zbGljZSgwLCAtMTEpIDogZSwgaSA/IGNpIDogXCJcIikgOiAoc1t0XSA9IGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICksXHJcbiAgdmkgPSBVdChcclxuICAgIC8qKlxyXG4gICAgICogQGxpY2Vuc2VcclxuICAgICAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICAgICAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICAgICAqL1xyXG4gICAgY2xhc3MgZXh0ZW5kcyBWdCB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKHQpIHtcclxuICAgICAgICBpZiAoKHN1cGVyKHQpLCAyICE9PSB0LnR5cGUpKSB0aHJvdyBFcnJvcihcInRlbXBsYXRlQ29udGVudCBjYW4gb25seSBiZSB1c2VkIGluIGNoaWxkIGJpbmRpbmdzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcih0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRXQgPT09IHQgPyBEIDogKCh0aGlzLkV0ID0gdCksIGRvY3VtZW50LmltcG9ydE5vZGUodC5jb250ZW50LCAhMCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuY2xhc3MgZmkgZXh0ZW5kcyBWdCB7XHJcbiAgY29uc3RydWN0b3IodCkge1xyXG4gICAgaWYgKChzdXBlcih0KSwgKHRoaXMudnQgPSBXKSwgMiAhPT0gdC50eXBlKSlcclxuICAgICAgdGhyb3cgRXJyb3IodGhpcy5jb25zdHJ1Y3Rvci5kaXJlY3RpdmVOYW1lICsgXCIoKSBjYW4gb25seSBiZSB1c2VkIGluIGNoaWxkIGJpbmRpbmdzXCIpO1xyXG4gIH1cclxuICByZW5kZXIodCkge1xyXG4gICAgaWYgKHQgPT09IFcgfHwgbnVsbCA9PSB0KSByZXR1cm4gKHRoaXMuQ3QgPSB2b2lkIDApLCAodGhpcy52dCA9IHQpO1xyXG4gICAgaWYgKHQgPT09IEQpIHJldHVybiB0O1xyXG4gICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIHQpXHJcbiAgICAgIHRocm93IEVycm9yKHRoaXMuY29uc3RydWN0b3IuZGlyZWN0aXZlTmFtZSArIFwiKCkgY2FsbGVkIHdpdGggYSBub24tc3RyaW5nIHZhbHVlXCIpO1xyXG4gICAgaWYgKHQgPT09IHRoaXMudnQpIHJldHVybiB0aGlzLkN0O1xyXG4gICAgdGhpcy52dCA9IHQ7XHJcbiAgICBjb25zdCBpID0gW3RdO1xyXG4gICAgcmV0dXJuIChpLnJhdyA9IGkpLCAodGhpcy5DdCA9IHsgXyRsaXRUeXBlJDogdGhpcy5jb25zdHJ1Y3Rvci5yZXN1bHRUeXBlLCBzdHJpbmdzOiBpLCB2YWx1ZXM6IFtdIH0pO1xyXG4gIH1cclxufVxyXG4oZmkuZGlyZWN0aXZlTmFtZSA9IFwidW5zYWZlSFRNTFwiKSwgKGZpLnJlc3VsdFR5cGUgPSAxKTtcclxuY29uc3QgcGkgPSBVdChmaSk7XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovIGNsYXNzIHlpIGV4dGVuZHMgZmkge31cclxuKHlpLmRpcmVjdGl2ZU5hbWUgPSBcInVuc2FmZVNWR1wiKSwgKHlpLnJlc3VsdFR5cGUgPSAyKTtcclxuY29uc3QgYmkgPSBVdCh5aSksXHJcbiAgbWkgPSB0ID0+ICF5dCh0KSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQudGhlbixcclxuICBnaSA9IDEwNzM3NDE4MjM7XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovIGNsYXNzIHdpIGV4dGVuZHMgSHQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKSwgKHRoaXMuQXQgPSBnaSksICh0aGlzLmt0ID0gW10pLCAodGhpcy5odCA9IG5ldyBJdCh0aGlzKSksICh0aGlzLnV0ID0gbmV3IEJ0KCkpO1xyXG4gIH1cclxuICByZW5kZXIoLi4udCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICByZXR1cm4gbnVsbCAhPT0gKGkgPSB0LmZpbmQodCA9PiAhbWkodCkpKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogRDtcclxuICB9XHJcbiAgdXBkYXRlKHQsIGkpIHtcclxuICAgIGNvbnN0IHMgPSB0aGlzLmt0O1xyXG4gICAgbGV0IGUgPSBzLmxlbmd0aDtcclxuICAgIHRoaXMua3QgPSBpO1xyXG4gICAgY29uc3QgbiA9IHRoaXMuaHQsXHJcbiAgICAgIG8gPSB0aGlzLnV0O1xyXG4gICAgdGhpcy5pc0Nvbm5lY3RlZCB8fCB0aGlzLmRpc2Nvbm5lY3RlZCgpO1xyXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCBpLmxlbmd0aCAmJiAhKHQgPiB0aGlzLkF0KTsgdCsrKSB7XHJcbiAgICAgIGNvbnN0IHIgPSBpW3RdO1xyXG4gICAgICBpZiAoIW1pKHIpKSByZXR1cm4gKHRoaXMuQXQgPSB0KSwgcjtcclxuICAgICAgKHQgPCBlICYmIHIgPT09IHNbdF0pIHx8XHJcbiAgICAgICAgKCh0aGlzLkF0ID0gZ2kpLFxyXG4gICAgICAgIChlID0gMCksXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHIpLnRoZW4oYXN5bmMgdCA9PiB7XHJcbiAgICAgICAgICBmb3IgKDsgby5nZXQoKTsgKSBhd2FpdCBvLmdldCgpO1xyXG4gICAgICAgICAgY29uc3QgaSA9IG4uZGVyZWYoKTtcclxuICAgICAgICAgIGlmICh2b2lkIDAgIT09IGkpIHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IGkua3QuaW5kZXhPZihyKTtcclxuICAgICAgICAgICAgcyA+IC0xICYmIHMgPCBpLkF0ICYmICgoaS5BdCA9IHMpLCBpLnNldFZhbHVlKHQpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRDtcclxuICB9XHJcbiAgZGlzY29ubmVjdGVkKCkge1xyXG4gICAgdGhpcy5odC5kaXNjb25uZWN0KCksIHRoaXMudXQucGF1c2UoKTtcclxuICB9XHJcbiAgcmVjb25uZWN0ZWQoKSB7XHJcbiAgICB0aGlzLmh0LnJlY29ubmVjdCh0aGlzKSwgdGhpcy51dC5yZXN1bWUoKTtcclxuICB9XHJcbn1cclxuY29uc3QgX2kgPSBVdCh3aSk7XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcclxuICovIGZ1bmN0aW9uICRpKHQsIGksIHMpIHtcclxuICByZXR1cm4gdCA/IGkoKSA6IG51bGwgPT0gcyA/IHZvaWQgMCA6IHMoKTtcclxufVxyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAqLyBjb25zdCBTaSA9IFN5bWJvbC5mb3IoXCJcIiksXHJcbiAgVGkgPSB0ID0+IHtcclxuICAgIGlmICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5yKSA9PT0gU2kpIHJldHVybiBudWxsID09IHQgPyB2b2lkIDAgOiB0Ll8kbGl0U3RhdGljJDtcclxuICB9LFxyXG4gIHhpID0gdCA9PiAoeyBfJGxpdFN0YXRpYyQ6IHQsIHI6IFNpIH0pLFxyXG4gIEVpID0gKHQsIC4uLmkpID0+ICh7XHJcbiAgICBfJGxpdFN0YXRpYyQ6IGkucmVkdWNlKFxyXG4gICAgICAoaSwgcywgZSkgPT5cclxuICAgICAgICBpICtcclxuICAgICAgICAodCA9PiB7XHJcbiAgICAgICAgICBpZiAodm9pZCAwICE9PSB0Ll8kbGl0U3RhdGljJCkgcmV0dXJuIHQuXyRsaXRTdGF0aWMkO1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgIGBWYWx1ZSBwYXNzZWQgdG8gJ2xpdGVyYWwnIGZ1bmN0aW9uIG11c3QgYmUgYSAnbGl0ZXJhbCcgcmVzdWx0OiAke3R9LiBVc2UgJ3Vuc2FmZVN0YXRpYycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dFxcbiAgICAgICAgICAgIHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pKHMpICtcclxuICAgICAgICB0W2UgKyAxXSxcclxuICAgICAgdFswXVxyXG4gICAgKSxcclxuICAgIHI6IFNpLFxyXG4gIH0pLFxyXG4gIENpID0gbmV3IE1hcCgpLFxyXG4gIEFpID1cclxuICAgIHQgPT5cclxuICAgIChpLCAuLi5zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGUgPSBzLmxlbmd0aDtcclxuICAgICAgbGV0IG4sIG87XHJcbiAgICAgIGNvbnN0IHIgPSBbXSxcclxuICAgICAgICBsID0gW107XHJcbiAgICAgIGxldCBoLFxyXG4gICAgICAgIHUgPSAwLFxyXG4gICAgICAgIGMgPSAhMTtcclxuICAgICAgZm9yICg7IHUgPCBlOyApIHtcclxuICAgICAgICBmb3IgKGggPSBpW3VdOyB1IDwgZSAmJiB2b2lkIDAgIT09ICgobyA9IHNbdV0pLCAobiA9IFRpKG8pKSk7ICkgKGggKz0gbiArIGlbKyt1XSksIChjID0gITApO1xyXG4gICAgICAgIHUgIT09IGUgJiYgbC5wdXNoKG8pLCByLnB1c2goaCksIHUrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHUgPT09IGUgJiYgci5wdXNoKGlbZV0pLCBjKSkge1xyXG4gICAgICAgIGNvbnN0IHQgPSByLmpvaW4oXCIkJGxpdCQkXCIpO1xyXG4gICAgICAgIHZvaWQgMCA9PT0gKGkgPSBDaS5nZXQodCkpICYmICgoci5yYXcgPSByKSwgQ2kuc2V0KHQsIChpID0gcikpKSwgKHMgPSBsKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdChpLCAuLi5zKTtcclxuICAgIH0sXHJcbiAga2kgPSBBaShJKSxcclxuICBNaSA9IEFpKEIpO1xyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXHJcbiAqL1xyXG4vKndpbmRvdy5saXREaXNhYmxlQnVuZGxlV2FybmluZ3x8Y29uc29sZS53YXJuKFwiTGl0IGhhcyBiZWVuIGxvYWRlZCBmcm9tIGEgYnVuZGxlIHRoYXQgY29tYmluZXMgYWxsIGNvcmUgZmVhdHVyZXMgaW50byBhIHNpbmdsZSBmaWxlLiBUbyByZWR1Y2UgdHJhbnNmZXIgc2l6ZSBhbmQgcGFyc2luZyBjb3N0LCBjb25zaWRlciB1c2luZyB0aGUgYGxpdGAgbnBtIHBhY2thZ2UgZGlyZWN0bHkgaW4geW91ciBwcm9qZWN0LlwiKTsqLyBleHBvcnQge1xyXG4gIEh0IGFzIEFzeW5jRGlyZWN0aXZlLFxyXG4gIER0IGFzIEFzeW5jUmVwbGFjZURpcmVjdGl2ZSxcclxuICBuIGFzIENTU1Jlc3VsdCxcclxuICBWdCBhcyBEaXJlY3RpdmUsXHJcbiAgZHQgYXMgTGl0RWxlbWVudCxcclxuICBQdCBhcyBQYXJ0VHlwZSxcclxuICBtIGFzIFJlYWN0aXZlRWxlbWVudCxcclxuICBidCBhcyBUZW1wbGF0ZVJlc3VsdFR5cGUsXHJcbiAgZmkgYXMgVW5zYWZlSFRNTERpcmVjdGl2ZSxcclxuICB3aSBhcyBVbnRpbERpcmVjdGl2ZSxcclxuICBjdCBhcyBVcGRhdGluZ0VsZW1lbnQsXHJcbiAgdnQgYXMgXyRMRSxcclxuICBvdCBhcyBfJExILFxyXG4gIGwgYXMgYWRvcHRTdHlsZXMsXHJcbiAgWnQgYXMgYXN5bmNBcHBlbmQsXHJcbiAgV3QgYXMgYXN5bmNSZXBsYWNlLFxyXG4gIEZ0IGFzIGNhY2hlLFxyXG4gIEd0IGFzIGNob29zZSxcclxuICBKdCBhcyBjbGFzc01hcCxcclxuICBNdCBhcyBjbGVhclBhcnQsXHJcbiAgbmkgYXMgY3JlYXRlUmVmLFxyXG4gIHIgYXMgY3NzLFxyXG4gIGYgYXMgZGVmYXVsdENvbnZlcnRlcixcclxuICBVdCBhcyBkaXJlY3RpdmUsXHJcbiAgQXQgYXMgZ2V0Q29tbWl0dGVkVmFsdWUsXHJcbiAgaCBhcyBnZXRDb21wYXRpYmxlU3R5bGUsXHJcbiAgX3QgYXMgZ2V0RGlyZWN0aXZlQ2xhc3MsXHJcbiAgWXQgYXMgZ3VhcmQsXHJcbiAgSSBhcyBodG1sLFxyXG4gIFF0IGFzIGlmRGVmaW5lZCxcclxuICBUdCBhcyBpbnNlcnRQYXJ0LFxyXG4gIGd0IGFzIGlzQ29tcGlsZWRUZW1wbGF0ZVJlc3VsdCxcclxuICB3dCBhcyBpc0RpcmVjdGl2ZVJlc3VsdCxcclxuICB5dCBhcyBpc1ByaW1pdGl2ZSxcclxuICBmdCBhcyBpc1NlcnZlcixcclxuICAkdCBhcyBpc1NpbmdsZUV4cHJlc3Npb24sXHJcbiAgbXQgYXMgaXNUZW1wbGF0ZVJlc3VsdCxcclxuICBYdCBhcyBqb2luLFxyXG4gIHRpIGFzIGtleWVkLFxyXG4gIEVpIGFzIGxpdGVyYWwsXHJcbiAgaWkgYXMgbGl2ZSxcclxuICBzaSBhcyBtYXAsXHJcbiAgRCBhcyBub0NoYW5nZSxcclxuICBwIGFzIG5vdEVxdWFsLFxyXG4gIFcgYXMgbm90aGluZyxcclxuICBlaSBhcyByYW5nZSxcclxuICBsaSBhcyByZWYsXHJcbiAga3QgYXMgcmVtb3ZlUGFydCxcclxuICBsdCBhcyByZW5kZXIsXHJcbiAgdWkgYXMgcmVwZWF0LFxyXG4gIHh0IGFzIHNldENoaWxkUGFydFZhbHVlLFxyXG4gIEN0IGFzIHNldENvbW1pdHRlZFZhbHVlLFxyXG4gIGtpIGFzIHN0YXRpY0h0bWwsXHJcbiAgTWkgYXMgc3RhdGljU3ZnLFxyXG4gIGFpIGFzIHN0eWxlTWFwLFxyXG4gIGkgYXMgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLFxyXG4gIEIgYXMgc3ZnLFxyXG4gIHZpIGFzIHRlbXBsYXRlQ29udGVudCxcclxuICBvIGFzIHVuc2FmZUNTUyxcclxuICBwaSBhcyB1bnNhZmVIVE1MLFxyXG4gIGJpIGFzIHVuc2FmZVNWRyxcclxuICB4aSBhcyB1bnNhZmVTdGF0aWMsXHJcbiAgX2kgYXMgdW50aWwsXHJcbiAgJGkgYXMgd2hlbixcclxuICBBaSBhcyB3aXRoU3RhdGljLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtYWxsLm1pbi5qcy5tYXBcclxuIiwiXCJzdHJpY3QgbW9kZVwiO1xyXG4vLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5pbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tIFwiLi4vanMvbGl0LWFsbC5taW4uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjcm9ueW1zRWxlbSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gIHRpdGxlOiBhbnkgPSB7fTtcclxuICBpZDogYW55ID0ge307XHJcbiAgYWNyb255bXM6IGFueSA9IFtdO1xyXG4gIC8vIERlZmluZSBzY29wZWQgc3R5bGVzIHJpZ2h0IHdpdGggeW91ciBjb21wb25lbnQsIGluIHBsYWluIENTU1xyXG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXHJcbiAgICAuYWNyb255bUxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBib3JkZXI6IDAuNW1tIHNvbGlkIHZhcigtLWNsci1ibHVlKTtcclxuICAgICAgYm94LXNoYWRvdzogMC43cHggMHB4IDEuNHB4IHJnYmEoMCwgMCwgMCwgMC4zMDMpLCAxLjdweCAwcHggNC43cHggcmdiYSgwLCAwLCAwLCAwLjQ0NyksXHJcbiAgICAgICAgLTdweCAwcHggMTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xyXG4gICAgICBtYXJnaW46IDJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktNDAwKTtcclxuICAgICAgY29sb3I6IHZhcigtLWNsci1hbGwtcHJpbWFyeS05MDApO1xyXG4gICAgfVxyXG4gICAgLmFjcm9ueW1MaXN0OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktNTAwKTtcclxuICAgIH1cclxuICAgIC5hY3JvbnltTGlzdCB1bCB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmllbCwgc2Fucy1zZXJpZjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5hY3JvbnltTGlzdCBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5hY3JvbnltTGlzdCBoMyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS01MDApO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuICAgIC5hY3JvbnltTGlzdCB1bCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAgICAgLmFjcm9ueW1MaXN0IHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwZW0gMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMXB4KSB7XHJcbiAgICAgIC5hY3JvbnltTGlzdCB1bCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hY3JvbnltTGlzdCBoMyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNsci1hbGwtcHJpbWFyeS05MDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgY29uc3QgUGFnZUFjcm9ueW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZTogXCIvcGFnZXMvd2lmaS5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcIndpZmlcIixcclxuICAgICAgICBhY3JvbnltczogW1xyXG4gICAgICAgICAgXCJTU0lEXCIsXHJcbiAgICAgICAgICBcIjgwMi4xMWFcIixcclxuICAgICAgICAgIFwiODAyLjExYlwiLFxyXG4gICAgICAgICAgXCI4MDIuMTFnXCIsXHJcbiAgICAgICAgICBcIjgwMi4xMW5cIixcclxuICAgICAgICAgIFwiODAyLjExYWNcIixcclxuICAgICAgICAgIFwiODAyLjExYXhcIixcclxuICAgICAgICAgIFwiV0xBTlwiLFxyXG4gICAgICAgICAgXCJJUHY0XCIsXHJcbiAgICAgICAgICBcIklQdjZcIixcclxuICAgICAgICAgIFwiTUFDXCIsXHJcbiAgICAgICAgICBcIkFQXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2U6IFwiL3BhZ2VzL25ldHdvcmtzcGVlZC5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcIm5ldHdvcmtzcGVlZFwiLFxyXG4gICAgICAgIGFjcm9ueW1zOiBbXCJQaW5nXCIsIFwiTklDXCIsIFwiQlBTXCIsIFwiTUJQU1wiLCBcIkdCUFNcIiwgXCJCaXRcIiwgXCJCeXRlXCIsIFwiSVNQXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZTogXCIvcGFnZXMvbWFya3VwLmh0bWxcIixcclxuICAgICAgICBodG1sVGl0bGU6IFwibWFya3VwXCIsXHJcbiAgICAgICAgYWNyb255bXM6IFtcImJvZHlcIiwgXCJoZWFkXCIsIFwiZGl2XCIsIFwiaHJlZlwiLCBcImxhbmdcIiwgXCJ1bFwiLCBcIm9sXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZTogXCIvcGFnZXMvaXBhZGRyZXNzLmh0bWxcIixcclxuICAgICAgICBodG1sVGl0bGU6IFwiaXBhZGRyZXNzXCIsXHJcbiAgICAgICAgYWNyb255bXM6IFtcclxuICAgICAgICAgIFwiSVBWNFwiLFxyXG4gICAgICAgICAgXCJJUFY2XCIsXHJcbiAgICAgICAgICBcIlRDUC9JUFwiLFxyXG4gICAgICAgICAgXCJPU0lcIixcclxuICAgICAgICAgIFwiREhDUFwiLFxyXG4gICAgICAgICAgXCJETlNcIixcclxuICAgICAgICAgIFwiU3VibmV0IE1hc2tcIixcclxuICAgICAgICAgIFwiQ0lEUlwiLFxyXG4gICAgICAgICAgXCJMQU5cIixcclxuICAgICAgICAgIFwiTkFUXCIsXHJcbiAgICAgICAgICBcIk1BQ1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYWdlOiBcIi9ndWlkZXMvaHR0cHMuaHRtbFwiLFxyXG4gICAgICAgIGh0bWxUaXRsZTogXCJodHRwc1wiLFxyXG4gICAgICAgIGFjcm9ueW1zOiBbXHJcbiAgICAgICAgICBcIktNU1wiLFxyXG4gICAgICAgICAgXCJQS0lcIixcclxuICAgICAgICAgIFwiUlNBXCIsXHJcbiAgICAgICAgICBcIlNTTFwiLFxyXG4gICAgICAgICAgXCJUTFNcIixcclxuICAgICAgICAgIFwiU0hBXCIsXHJcbiAgICAgICAgICBcIkFFU1wiLFxyXG4gICAgICAgICAgXCJFRlNcIixcclxuICAgICAgICAgIFwiVFBNXCIsXHJcbiAgICAgICAgICBcIkJpdExvY2tlclwiLFxyXG4gICAgICAgICAgXCJFbmNyeXB0XCIsXHJcbiAgICAgICAgICBcIkRlY3J5cHRcIixcclxuICAgICAgICAgIFwiU2lnbmF0dXJlXCIsXHJcbiAgICAgICAgICBcIkVsbGlwdGljIEN1cnZlXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2U6IFwiL3BhZ2VzL2h0bWxyZXNwb25zZXMuaHRtbFwiLFxyXG4gICAgICAgIGh0bWxUaXRsZTogXCJodG1scmVzcG9uc2VzXCIsXHJcbiAgICAgICAgYWNyb255bXM6IFtcclxuICAgICAgICAgIFwiSFRUUFwiLFxyXG4gICAgICAgICAgXCJIVFRQU1wiLFxyXG4gICAgICAgICAgXCJUQ1BcIixcclxuICAgICAgICAgIFwiVURQXCIsXHJcbiAgICAgICAgICBcIkRPTVwiLFxyXG4gICAgICAgICAgXCJBc3NldFwiLFxyXG4gICAgICAgICAgXCJGcmFtZVwiLFxyXG4gICAgICAgICAgXCJBdXRoXCIsXHJcbiAgICAgICAgICBcIlRyYW5zcG9ydFwiLFxyXG4gICAgICAgICAgXCJSZXNwb25zZVwiLFxyXG4gICAgICAgICAgXCJWZXJiXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2U6IFwiL3BhZ2VzL2RvbWFpbmxvb2t1cC5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcImRvbWFpbmxvb2t1cFwiLFxyXG4gICAgICAgIGFjcm9ueW1zOiBbXHJcbiAgICAgICAgICBcIkROU1wiLFxyXG4gICAgICAgICAgXCJETlNTRUNcIixcclxuICAgICAgICAgIFwiREROU1wiLFxyXG4gICAgICAgICAgXCJGUUROXCIsXHJcbiAgICAgICAgICBcIk5ldEJJT1NcIixcclxuICAgICAgICAgIFwiTmFtZXNlcnZlclwiLFxyXG4gICAgICAgICAgXCJPVVwiLFxyXG4gICAgICAgICAgXCJUb3AtbGV2ZWxcIixcclxuICAgICAgICAgICdcIkFcIiByZWNvcmQnLFxyXG4gICAgICAgICAgXCJDTkFNRVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYWdlOiBcIi9wYWdlcy9kcml2ZXMuaHRtbFwiLFxyXG4gICAgICAgIGh0bWxUaXRsZTogXCJkcml2ZXNcIixcclxuICAgICAgICBhY3JvbnltczogW1xyXG4gICAgICAgICAgXCJDU09NXCIsXHJcbiAgICAgICAgICBcIlNTT01cIixcclxuICAgICAgICAgIFwiUFNcIixcclxuICAgICAgICAgIFwiTlMgKG5hbWVzcGFjZSlcIixcclxuICAgICAgICAgIFwiVHJlZVwiLFxyXG4gICAgICAgICAgXCJPYmplY3RzXCIsXHJcbiAgICAgICAgICBcIlJlZ2lzdHJ5XCIsXHJcbiAgICAgICAgICBcIlZhcmlhYmxlc1wiLFxyXG4gICAgICAgICAgXCJUQ1AvSVBcIixcclxuICAgICAgICAgIFwiVExTXCIsXHJcbiAgICAgICAgICBcIkN5cGhlcnRleHRcIixcclxuICAgICAgICAgIFwiQ05cIixcclxuICAgICAgICAgIFwiRUtVXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2U6IFwiL3BhZ2VzL2Rucy5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcImRuc1wiLFxyXG4gICAgICAgIGFjcm9ueW1zOiBbXCJERE5TXCIsIFwiRE5TU0VDXCIsICdcIkFcIiByZWNvcmQnLCBcIkNBQVwiLCBcIk5TIChuYW1lIHNlcnZlcilcIiwgJ1wiTVhcIiByZWNvcmQnLCBcIlFQU1wiXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2U6IFwiL3BhZ2VzL2RvbS5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcImRvbVwiLFxyXG4gICAgICAgIGFjcm9ueW1zOiBbXHJcbiAgICAgICAgICBcIkRPTVwiLFxyXG4gICAgICAgICAgXCJDU1NcIixcclxuICAgICAgICAgIFwiSFRNTFwiLFxyXG4gICAgICAgICAgXCJhc3NldFwiLFxyXG4gICAgICAgICAgXCJwcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgXCJhdHRyaWJ1dGVcIixcclxuICAgICAgICAgIFwidmFyaWFibGVcIixcclxuICAgICAgICAgIFwicmVmZXJlbmNlXCIsXHJcbiAgICAgICAgICBcImZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICBcInJvb3RcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZTogXCIvcGFnZXMvc3ZnLmh0bWxcIixcclxuICAgICAgICBodG1sVGl0bGU6IFwic3ZnXCIsXHJcbiAgICAgICAgYWNyb255bXM6IFtcIlhNTFwiLCBcIlhIVE1MXCIsIFwiUkRGXCIsIFwiSVNPXCIsIFwiRENNRVNcIiwgXCJDQyBMaWNlbnNlXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZTogXCIvcGFnZXMvamF2YXNjcmlwdC5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcImphdmFzY3JpcHRcIixcclxuICAgICAgICBhY3JvbnltczogW1wiRGVmZXJcIiwgXCJTeW5jaHJvbm91c1wiLCBcIkVTXCIsIFwiR1VJXCIsIFwiSlNPTlwiLCBcIkFKQVhcIiwgXCJJSUZFXCIsIFwiSURFXCIsIFwiRE9NXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZTogXCIvcGFnZXMvaHR0cC5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcImphdmFzY3JpcHRcIixcclxuICAgICAgICBhY3JvbnltczogW1wiSFRUUFwiLCBcIlRDUFwiLCBcIlVEUFwiLCBcIkROU1wiLCBcIlRMU1wiLCBcIklQXCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIkpTXCIsIFwiQVBJXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZTogXCIvcGFnZXMvbGF0ZW5jeS5odG1sXCIsXHJcbiAgICAgICAgaHRtbFRpdGxlOiBcImphdmFzY3JpcHRcIixcclxuICAgICAgICBhY3JvbnltczogW1wiQ01TXCIsIFwiVENQXCIsIFwiVExTXCIsIFwiSVBcIiwgXCJQUyAocGFja2V0IHN3aXRjaGluZylcIiwgXCJETlNcIl0sXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gUGFnZUFjcm9ueW1zLmZpbHRlcihwYWdlID0+IHBhZ2UucGFnZSA9PT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIC8vIERlY2xhcmUgcmVhY3RpdmUgcHJvcGVydGllc1xyXG4gICAgdGhpcy50aXRsZSA9IFwiQ29tbW9uIEFjcm9ueW1zXCI7XHJcbiAgICB0aGlzLmlkID0gY3VycmVudFBhZ2VbMF0uaHRtbFRpdGxlO1xyXG4gICAgdGhpcy5hY3JvbnltcyA9IGN1cnJlbnRQYWdlWzBdLmFjcm9ueW1zO1xyXG4gIH1cclxuICBidWlsZExpc3QoKSB7fVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIFVJIGFzIGEgZnVuY3Rpb24gb2YgY29tcG9uZW50IHN0YXRlXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGxpc3RpdGVtczogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgYWNyb255bXMgb2YgdGhpcy5hY3Jvbnltcykge1xyXG4gICAgICBsaXN0aXRlbXMucHVzaChodG1sYDxsaT4ke2Fjcm9ueW1zfTwvbGk+YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGh0bWxgIDxhc2lkZSBjbGFzcz1cImFjcm9ueW1MaXN0XCI+XHJcbiAgICAgIDxoMz4ke3RoaXMudGl0bGV9OjwvaDM+XHJcbiAgICAgIDx1bCBpZD1cImFjci0ke3RoaXMuaWR9XCI+XHJcbiAgICAgICAgJHtsaXN0aXRlbXN9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2FzaWRlPmA7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JDb2RlV2lkZ2V0IHtcclxuICBwcml2YXRlIGVsZW1zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PltdO1xyXG4gIHByaXZhdGUgY29sb3I6IHN0cmluZ1tdO1xyXG4gIHByaXZhdGUgcmVzZXRidG46IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKGNvbG9ybGVzc2VsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PltdLCBjb2xvcnM6IHN0cmluZ1tdLCByZXNldGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbXMgPSBjb2xvcmxlc3NlbGVtZW50cztcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcnM7XHJcbiAgICB0aGlzLnJlc2V0YnRuID0gcmVzZXRidG47XHJcbiAgICB0aGlzLnJlc2V0YnRuLnN0eWxlLnNldFByb3BlcnR5KFwiei1pbmRleFwiLCBcIjFcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY3NzRXhhbXBsZUhpZ2hsaWdodGluZyh0aGlzLmVsZW1zW2ldLCB0aGlzLmNvbG9yW2ldKTtcclxuICAgICAgdGhpcy5jc3NFeGFtcGxlSGlnaGxpZ2h0UmVzZXQodGhpcy5lbGVtc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBjb2xvciB0aGUgZXhhbXBsZSBhcmVhJ3MgZWxlbWVudHMgdXNpbmcgY3NzXHJcbiAgICogQHBhcmFtIGVsZW1zbGlzdCAtIE5vZGUgbGlzdCBvZiBIVE1MRWxlbGVtZW50cy4gSS5FLiB1c2luZyBxdWVyeS5TZWxlY3RvckFsbCgpXHJcbiAgICogQHBhcmFtIGNvbG9yIC0gU3RyaW5nIG9mIENTUyBjb2xvciB2YWx1ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgY3NzRXhhbXBsZUhpZ2hsaWdodGluZyhlbGVtc2xpc3Q6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+LCBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICBlbGVtc2xpc3QuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGVsZW1zbGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgZWxlbS5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZWxlbXNsaXN0LmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICBlbGVtLnN0eWxlLmNvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9uIHRvIHJlc2V0IHRoZSBjc3MgY29kZSBwcm9wZXJ0aWVzIGNvbG9yIHRvIG9yaWdpbmFsXHJcbiAgcHJpdmF0ZSBjc3NFeGFtcGxlSGlnaGxpZ2h0UmVzZXQoZWxlbXNsaXN0OiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pikge1xyXG4gICAgdGhpcy5yZXNldGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc2V0IGJ1dHRvbiBjbGlja2VkLlwiKTtcclxuICAgICAgZWxlbXNsaXN0LmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5jb2xvciA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuLyoqIENyZWF0ZSB0aGlzIG9iamVjdCB0byByZWNvcmQgcmVmZXJlbmNlIGVycm9ycy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUndiRXJyb3Ige1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBSd2JFcnJvci5jb3VudCsrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgYW4gZWxlbWVudCBpcyBudWxsIHVzaW5nIHF1ZXJ5U2VsZWN0b3IoKVxyXG4gICAqXHJcbiAgICogICAgICAgdHJ5IHtcclxuICAgKiAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG4gICAqICAgICAgIH1cclxuICAgKiAgICAgICBjYXRjaCB7XHJcbiAgICogICAgICAgICAgIC8vZnVuY3Rpb24gZXhjZXB0aW9uIGhhbmRsaW5nXHJcbiAgICogICAgICAgfVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBjb21wb25lbnQgaW4gdXNlLlxyXG4gICAqIEBwYXJhbSBjc3NRdWVyeSAtIEEgY3NzIHN0cmluZy5cclxuICAgKiBAcGFyYW0gbG9nTWVzc2FnZSAtIENob29zZSB0byBsb2cgYSBtZXNzYWdlIHRvIGNvbnNvbGUuXHJcbiAgICogQHBhcmFtIHN1cHJlc3NFeGNlcHRpb24gLSBDaG9vc2UgdG8gc3VwcmVzcyB0aGUgZXhjZXB0aW9uIGxvZy5cclxuICAgKiBAcmV0dXJucyBIVE1MRWxlbWVudCBmcm9tIHF1ZXJ5U2VsZWN0b3IoKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY2tTZWxlY3RlZEVsZW1lbnQoXHJcbiAgICBjb21wb25lbnROYW1lOiBzdHJpbmcsXHJcbiAgICBjc3NRdWVyeTogc3RyaW5nLFxyXG4gICAgbG9nTWVzc2FnZT86IGJvb2xlYW4sXHJcbiAgICBzdXByZXNzRXhjZXB0aW9uPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIGxldCBsb2dFcnJNc3NnOiBib29sZWFuID0gdHJ1ZTsgLy9Mb2cgbWVzc2FnZSBvcHRpb24gZGVmYXVsdFxyXG4gICAgaWYgKCFsb2dNZXNzYWdlKSBsb2dFcnJNc3NnID0gbG9nTWVzc2FnZTtcclxuICAgIGxldCBzdXByZXNzRXhjcHQ6IGJvb2xlYW4gPSBmYWxzZTsgLy9TdXByZXNzIG1lc3NhZ2Ugb3B0aW9uIGRlZmF1bHRcclxuICAgIGlmIChzdXByZXNzRXhjZXB0aW9uKSBzdXByZXNzRXhjcHQgPSB0cnVlO1xyXG4gICAgbGV0IHF1ZXJ5OiBzdHJpbmcgPSBgJHtjc3NRdWVyeX1gO1xyXG5cclxuICAgIC8vIEFkZCBkaWN0aW9uYXJ5IHdpZGdldCBpZiBhbiBlbGVtZW50IHdpdGggdGhhdCBjbGFzcyBpcyBvbiBhIHBhZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihcIkdldEVsZW1lbnRcIiwgYENvdWxkIG5vdCBnZXQgZWxlbWVudDogJyR7cXVlcnl9J2ApKTtcclxuICAgIH1cclxuICAgIGlmIChlbGVtID09IG51bGwpIHtcclxuICAgICAgaWYgKGxvZ0Vyck1zc2cpIGNvbnNvbGUud2FybihgJWNObyBlbGVtZW50IGZvdW5kIHdpdGggcXVlcnk6ICR7cXVlcnl9LmAsIFwiY29sb3I6IG9yYW5nZTtcIik7XHJcbiAgICAgIGlmICghc3VwcmVzc0V4Y3B0KVxyXG4gICAgICAgIE9iamVjdC5jcmVhdGUobmV3IFJ3YlJlZmVyZW5jZUVycm9yKGAke2NvbXBvbmVudE5hbWV9TnVsbFJlZmVyZW5jZWAsIGBFbGVtZW50IG5vdCBmb3VuZGApKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgaWYgbG9jYWwgc3RvcmFnZSBpcyBudWxsLiBPcHRpb25hbCBjaG9vc2UgdG8gYWxzbyBjaGVjayBpZiBsb2NhbCBzdG9yYWdlIHN0cmluZyBpcyBlbXB0eS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lIC0gQSBuYW1lIGZvciB0aGUgY29tcG9uZW50IGluIHVzZS5cclxuICAgKiBAcGFyYW0ga2V5IC0gVGhlIGtleSdzIG5hbWUgeW91J3JlIGNoZWNraW5nIGZvci5cclxuICAgKiBAcGFyYW0gY2hlY2tFbXB0eVN0cmluZyAtIE9wdGlvbmFsIHBhcmFtZXRlciB0byBjaGVjayBmb3IgZW1wdHkga2V5LXZhbHVlLlxyXG4gICAqIEBwYXJhbSBsb2dNZXNzYWdlIC0gQ2hvb3NlIHRvIGxvZyBhIG1lc3NhZ2UgdG8gY29uc29sZS5cclxuICAgKiBAcmV0dXJucyBCb29sZWFuIHRydWUgb3IgZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrTG9jYWxTdG9yYWdlRXF1YWxOdWxsKFxyXG4gICAgY29tcG9uZW50TmFtZTogc3RyaW5nLFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBjaGVja0VtcHR5U3RyaW5nPzogYm9vbGVhbixcclxuICAgIGxvZ01lc3NhZ2U/OiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICBsZXQgbG9nTXNzZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpZiAoIWxvZ01lc3NhZ2UpIGxvZ01zc2cgPSBsb2dNZXNzYWdlO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2tleX1gKSA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2dNc3NnKSBjb25zb2xlLmluZm8oYCVjTm8gbG9jYWwgc3RvcmFnZSBmb3IgJHtjb21wb25lbnROYW1lfS5gLCBcImNvbG9yOnB1cnBsZTtcIik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrRW1wdHlTdHJpbmcpIHJldHVybiBSd2JFcnJvci5jaGVja0xvY2FsU3RvcmFnZU51bGxvckVtcHR5KGNvbXBvbmVudE5hbWUsIGtleSwgbG9nTXNzZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGlmIGxvY2FsIHN0b3JhZ2UgaXMgbnVsbCBvciBlbXB0eS5cclxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZSAtIEEgbmFtZSBmb3IgdGhlIGNvbXBvbmVudCBpbiB1c2UuXHJcbiAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkncyBuYW1lIHlvdSdyZSBjaGVja2luZyBmb3IuXHJcbiAgICogQHBhcmFtIGxvZ01lc3NhZ2UgLSBDaG9vc2UgdG8gbG9nIGEgbWVzc2FnZSB0byBjb25zb2xlLlxyXG4gICAqIEByZXR1cm5zIEJvb2xlYW4gdHJ1ZSBvciBmYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY2tMb2NhbFN0b3JhZ2VOdWxsb3JFbXB0eShjb21wb25lbnROYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBsb2dNZXNzYWdlPzogYm9vbGVhbikge1xyXG4gICAgbGV0IGxvZ01zc2c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKCFsb2dNZXNzYWdlKSBsb2dNc3NnID0gbG9nTWVzc2FnZTtcclxuICAgIGxldCB0ZXN0OiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHRlc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YCk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZ2V0IGxvY2FsIHN0b3JhZ2Uga2V5OiAke2tleX1gKTtcclxuICAgIH1cclxuICAgIGlmICh0ZXN0ID09IG51bGwpIHtcclxuICAgICAgaWYgKGxvZ01zc2cpIGNvbnNvbGUud2FybihgJWNMb2NhbCBzdG9yYWdlIGtleSBub3QgZm91bmQ6ICR7a2V5fS5gLCBcImNvbG9yOiB5ZWxsb3c7Zm9udC13ZWlnaHQ6Ym9sZDtcIik7XHJcbiAgICAgIE9iamVjdC5jcmVhdGUobmV3IFJ3YlJlZmVyZW5jZUVycm9yKGAke2NvbXBvbmVudE5hbWV9UmVmZXJlbmNlRXhjZXB0aW9uYCwgYEtleSBub3QgZm91bmRgKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRlc3QgPT0gXCJcIiB8fCB0ZXN0ID09IFwiW11cIikge1xyXG4gICAgICBpZiAobG9nTXNzZylcclxuICAgICAgICBjb25zb2xlLndhcm4oYCVjTG9jYWwgc3RvcmFnZSB2YWx1ZSBpcyBlbXB0eSBmb3Iga2V5OiAke2tleX1gLCBcImNvbG9yOiB5ZWxsb3c7Zm9udC13ZWlnaHQ6Ym9sZDtcIik7XHJcbiAgICAgIE9iamVjdC5jcmVhdGUobmV3IFJ3YlJlZmVyZW5jZUVycm9yKGAke2NvbXBvbmVudE5hbWV9UmVmZXJlbmNlRXhjZXB0aW9uYCwgYFZhbHVlIGlzIGVtcHR5YCkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gc3RvcmUgcmVmZXJlbmNlIGVycm9yIGRhdGEuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JSZWZlcmVuY2VFcnJvciBleHRlbmRzIFJlZmVyZW5jZUVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZWZFcnJvcjogUmVmZXJlbmNlRXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBsZXQgZXJyID0gbmV3IFJlZmVyZW5jZUVycm9yKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnJlZkVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY0V4ZWN1dGlvbiBleHBlcmllbmNlZCBhIHJlZmVyZW5jZSBlcnJvcjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMucmVmRXJyb3IsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JSZWZlcmVuY2VFcnJvci5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIENyZWF0ZSB0aGlzIG9iamVjdCB0byBzdG9yZSBzeW50YXggZXJyb3IgZGF0YS4gKi9cclxuZXhwb3J0IGNsYXNzIFJ3YlN5bnRheEVycm9yIGV4dGVuZHMgU3ludGF4RXJyb3Ige1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIHN5bnRheEVycm9yOiBTeW50YXhFcnJvcjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMucGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBlcnIgPSBuZXcgU3ludGF4RXJyb3IodGhpcy5tZXNzYWdlKTtcclxuICAgIHRoaXMuc3ludGF4RXJyb3IgPSBlcnI7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBgJWM8UldCPiVjRXhlY3V0aW9uIGV4cGVyaWVuY2VkIGEgc3ludGF4IGVycm9yOlxcbiVvXFxuJWM8L1JXQj5gLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICBcImNvbG9yOnJlZDtcIixcclxuICAgICAgdGhpcy5zeW50YXhFcnJvcixcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIlxyXG4gICAgKTtcclxuICAgIFJ3YlN5bnRheEVycm9yLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUndiRG9tRXhjZXB0aW9uIGV4dGVuZHMgRE9NRXhjZXB0aW9uIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBzdGFjazogYW55O1xyXG4gIHB1YmxpYyBwYWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBkb21FcnJvcjogRE9NRXhjZXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgZXJyb3I6IGFueSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5zdGFjayA9IGVycm9yO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBET01FeGNlcHRpb24odGhpcy5tZXNzYWdlKTtcclxuICAgIHRoaXMuZG9tRXJyb3IgPSBlcnI7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBgJWM8UldCPiVjRXhlY3V0aW9uIGV4cGVyaWVuY2VkIGEgRE9NIGVycm9yOlxcbiVvXFxuJWM8L1JXQj5gLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICBcImNvbG9yOnJlZDtcIixcclxuICAgICAgdGhpcy5zdGFjayxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIlxyXG4gICAgKTtcclxuICAgIFJ3YkRvbUV4Y2VwdGlvbi5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ3YkludmFsaWRWYWx1ZUVycm9yIGV4dGVuZHMgUmFuZ2VFcnJvciB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3ludGF4RXJyb3I6IFJhbmdlRXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBsZXQgZXJyID0gbmV3IFJhbmdlRXJyb3IodGhpcy5tZXNzYWdlKTtcclxuICAgIHRoaXMuc3ludGF4RXJyb3IgPSBlcnI7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBgJWM8UldCPiVjVmFsdWUgb3V0IG9mIHJhbmdlIGV4Y2VwdGlvbjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMuc3ludGF4RXJyb3IsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JTeW50YXhFcnJvci5jb3VudCsrO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW50ZXJmYWNlIFNjcmlwdFJ1bnRpbWUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGFydE1hcms6IFBlcmZvcm1hbmNlTWFyaztcclxuICBlbmRNYXJrOiBQZXJmb3JtYW5jZU1hcms7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gcmVjb3JkIHBlcmZvcm1hbmNlIHN0YXJ0IGFuZCBlbmQgbWFya3MuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ3YlBlcmYge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHNjcmlwdFJ1bnRpbWVNYXJrczogU2NyaXB0UnVudGltZSA9IHtcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICBzdGFydE1hcms6IG51bGwsXHJcbiAgICBlbmRNYXJrOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKiBJbnN0YW50aWF0aW5nIGEgU2NyaXB0UGVyZiByZWNvcmRzIHRoZSBwZXJmb3JtYW5jZSBzdGFydCBtYXJrLiAqL1xyXG4gIGNvbnN0cnVjdG9yKHNjcmlwdE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZSA9IHNjcmlwdE5hbWU7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5zdGFydE1hcmsgPSBwZXJmb3JtYW5jZS5tYXJrKGAke3RoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWV9LXN0YXJ0YCk7XHJcbiAgICBSd2JQZXJmLmNvdW50Kys7XHJcbiAgfVxyXG5cclxuICAvKiogQ2FsbCBlbmQoKSB0byBzZXQgdGhlIGVuZCB0aW1lIHN0YW1wLiAqL1xyXG4gIHB1YmxpYyBlbmQoKSB7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrID0gcGVyZm9ybWFuY2UubWFyayhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfS1lbmRgKTtcclxuICAgIHRoaXMubWVhc3VyZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgY29uc29sZSBvdXRwdXQgb2YgdGhpcyBvYmplY3QncyBwZXJmb3JtYW5jZSBtZWFzdXJlbWVudC4gKi9cclxuICBwcml2YXRlIG1lYXN1cmUoKSB7XHJcbiAgICBsZXQgbWVhc3VyZSA9IHBlcmZvcm1hbmNlLm1lYXN1cmUoXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWUsXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLnN0YXJ0TWFyay5uYW1lLFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrLm5hbWVcclxuICAgICk7XHJcbiAgICByZXR1cm4gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfSBleGVjdXRpb24gdGltZSBpczogJHttZWFzdXJlLmR1cmF0aW9ufWApO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IEFjcm9ueW1zRWxlbSBmcm9tIFwiLi9tb2RlbHMvYWNyb255bXMtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBodG1sZXhDb2xvckNvZGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UvY29sb3JDb2RlXCI7XHJcbmltcG9ydCBSd2JQZXJmIGZyb20gXCIuL21vZGVscy9zY3JpcHRQZXJmXCI7XHJcbmltcG9ydCBkb21haW5Mb29rdXAgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlL2RvbWFpbkxvb2t1cFwiO1xyXG5cclxuY29uc3QgcGFnZUNvbXBvbmVudHMgPSB7XHJcbiAgY2hlY2tQYWdlOiAocGFnZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzd2l0Y2ggKHBhZ2UpIHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIGh0bWxleENvbG9yQ29kZSBjb21wb25lbnRzXHJcbiAgICAgICAgY2FzZSBcIi9wYWdlcy9odG1sLmh0bWxcIjpcclxuICAgICAgICAgIGh0bWxleENvbG9yQ29kZS5pbml0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBJbml0aWFsaXplIGRvbWFpbiBuYW1lIGxvb2t1cFxyXG4gICAgICAgIGNhc2UgXCIvcGFnZXMvZG9tYWlubG9va3VwLmh0bWxcIjpcclxuICAgICAgICAgIGRvbWFpbkxvb2t1cC5pbml0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9hZGluZyBwYWdlIGNvbXBvbmVudDogJHtlcnJvcn1gKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXQ6ICgpID0+IHtcclxuICAgIGxldCBwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgY29uc3QgcGFnZVBlcmYgPSBuZXcgUndiUGVyZihcIlBhZ2Vjb21wb25lbnRzXCIpOyAvL21lYXN1cmUgcGVyZm9ybWFuY2VcclxuXHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhY3Jvbnltcy1saXN0XCIsIEFjcm9ueW1zRWxlbSk7XHJcbiAgICBwYWdlQ29tcG9uZW50cy5jaGVja1BhZ2UocGFnZSk7XHJcblxyXG4gICAgcGFnZVBlcmYuZW5kKCk7IC8vZW5kIHBlcmZvcm1hbmNlIG1lYXN1cmVcclxuICB9LFxyXG4gIGxvYWQ6ICgpID0+IHtcclxuICAgIC8vVE9ETzogTG9hZGluZyBzY3JlZW4gbG9naWNcclxuICB9LFxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHBhZ2VDb21wb25lbnRzLmluaXQpO1xyXG4iXX0=
