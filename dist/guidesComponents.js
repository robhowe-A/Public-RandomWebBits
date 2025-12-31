(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"strict mode";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ps_Ip = exports.ps_At = exports.ps_Pwa = void 0;
//--Copyright (c) 2023-2026 Robert A. Howell
const photoswipe_lightbox_esm_js_1 = __importDefault(require("../../js/photoswipe/photoswipe-lightbox.esm.js"));
const photoswipe_esm_js_1 = __importDefault(require("../../js/photoswipe/photoswipe.esm.js"));
const photoSwipe_AppTab = () => {
    const lightbox = new photoswipe_lightbox_esm_js_1.default({
        gallery: "#devTools-Gallery",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    });
    const options = {
        gallery: "#devTools-Picture",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const all = {
        gallery: "#ElementsTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allConsole = {
        gallery: "#ConsoleTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allSources = {
        gallery: "#SourcesTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allNetwork = {
        gallery: "#NetworkTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allPerformance = {
        gallery: "#PerformanceTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allMemory = {
        gallery: "#MemoryTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allSecurity = {
        gallery: "#SecurityTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allLighthouse = {
        gallery: "#LighthouseTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allCSSOverview = {
        gallery: "#CSSOverviewTab",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allClearCookies = {
        gallery: "#ClearCookies",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allHtmlResponses = {
        gallery: "#HtmlResponses",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allChatGPT = {
        gallery: "#chatGPT",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allPaint3D = {
        gallery: "#paint3D",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const allBoinc = {
        gallery: "#BOINC",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const picbox = new photoswipe_lightbox_esm_js_1.default(options);
    const page = new photoswipe_lightbox_esm_js_1.default(all);
    const pageConsole = new photoswipe_lightbox_esm_js_1.default(allConsole);
    const pageSources = new photoswipe_lightbox_esm_js_1.default(allSources);
    const pageNetwork = new photoswipe_lightbox_esm_js_1.default(allNetwork);
    const pagePerformance = new photoswipe_lightbox_esm_js_1.default(allPerformance);
    const pageMemory = new photoswipe_lightbox_esm_js_1.default(allMemory);
    const pageSecurity = new photoswipe_lightbox_esm_js_1.default(allSecurity);
    const pageLighthouse = new photoswipe_lightbox_esm_js_1.default(allLighthouse);
    const pageCSSOverview = new photoswipe_lightbox_esm_js_1.default(allCSSOverview);
    const pageClearCookies = new photoswipe_lightbox_esm_js_1.default(allClearCookies);
    const pageHtmlResponses = new photoswipe_lightbox_esm_js_1.default(allHtmlResponses);
    const pageChatGPT = new photoswipe_lightbox_esm_js_1.default(allChatGPT);
    const pagePaint3D = new photoswipe_lightbox_esm_js_1.default(allPaint3D);
    const pageBoinc = new photoswipe_lightbox_esm_js_1.default(allBoinc);
    lightbox.init();
    picbox.init();
    page.init();
    pageConsole.init();
    pageSources.init();
    pageNetwork.init();
    pagePerformance.init();
    pageMemory.init();
    pageSecurity.init();
    pageLighthouse.init();
    pageCSSOverview.init();
    pageClearCookies.init();
    pageHtmlResponses.init();
    pageChatGPT.init();
    pagePaint3D.init();
    pageBoinc.init();
};
exports.ps_At = photoSwipe_AppTab;
const photoSwipe_Pwa = () => {
    const lightbox = new photoswipe_lightbox_esm_js_1.default({
        gallery: "#Instructions",
        children: ".pswp-gallery__item",
        imageClickAction: "zoom",
        tapAction: "zoom",
        pswpModule: photoswipe_esm_js_1.default,
    });
    lightbox.init();
};
exports.ps_Pwa = photoSwipe_Pwa;
const photoSwipe_InspctPgs = () => {
    const options = {
        gallery: "#inspectPages-Gallery",
        children: ".pswp-gallery__item",
        pswpModule: photoswipe_esm_js_1.default,
    };
    const lightbox2 = new photoswipe_lightbox_esm_js_1.default(options);
    lightbox2.init();
};
exports.ps_Ip = photoSwipe_InspctPgs;
},{"../../js/photoswipe/photoswipe-lightbox.esm.js":3,"../../js/photoswipe/photoswipe.esm.js":4}],2:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const photoSwipe_1 = require("./components/global/photoSwipe");
const scriptPerf_1 = __importDefault(require("./models/scriptPerf"));
const guideComponents = {
    checkPage: (page) => {
        try {
            switch (page) {
                case "/guides/https.html":
                    (0, photoSwipe_1.ps_Pwa)();
                    break;
            }
        }
        catch (error) {
            console.error(`Error loading page component: ${error}`);
        }
    },
    main: () => {
        let page = window.location.pathname;
        const pagePerf = new scriptPerf_1.default("Guidecomponents"); //measure performance
        guideComponents.checkPage(page);
        pagePerf.end(); //end performance measure
    },
    load: () => {
        window.addEventListener("DOMContentLoaded", guideComponents.main);
    },
};
guideComponents.load();
},{"./components/global/photoSwipe":1,"./models/scriptPerf":5}],3:[function(require,module,exports){
"use strict";
/*!
  * PhotoSwipe Lightbox 5.3.6 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */
/*
Attribution: Robert A Howell, March 2023
Original Author: Dmytro Semenov, https://photoswipe.com
Source distribution: https://github.com/dimsemenov/PhotoSwipe
Copyright (c) 2023-2026 Robert A. Howell
*/
/** @typedef {import('../photoswipe.js').Point} Point */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {string} className
 * @param {T} tagName
 * @param {Node} [appendToEl]
 * @returns {HTMLElementTagNameMap[T]}
 */
function createElement(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
        el.className = className;
    }
    if (appendToEl) {
        appendToEl.appendChild(el);
    }
    return el;
}
/**
 * Get transform string
 *
 * @param {number} x
 * @param {number} [y]
 * @param {number} [scale]
 * @returns {string}
 */
function toTransformString(x, y, scale) {
    let propValue = `translate3d(${x}px,${y || 0}px,0)`;
    if (scale !== undefined) {
        propValue += ` scale3d(${scale},${scale},1)`;
    }
    return propValue;
}
/**
 * Apply width and height CSS properties to element
 *
 * @param {HTMLElement} el
 * @param {string | number} w
 * @param {string | number} h
 */
function setWidthHeight(el, w, h) {
    el.style.width = (typeof w === 'number') ? `${w}px` : w;
    el.style.height = (typeof h === 'number') ? `${h}px` : h;
}
/** @typedef {LOAD_STATE[keyof LOAD_STATE]} LoadState */
/** @type {{ IDLE: 'idle'; LOADING: 'loading'; LOADED: 'loaded'; ERROR: 'error' }} */
const LOAD_STATE = {
    IDLE: 'idle',
    LOADING: 'loading',
    LOADED: 'loaded',
    ERROR: 'error',
};
/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {MouseEvent | KeyboardEvent} e
 * @returns {boolean}
 */
function specialKeyUsed(e) {
    return ('button' in e && e.button === 1) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
}
/**
 * Parse `gallery` or `children` options.
 *
 * @param {import('../photoswipe.js').ElementProvider} [option]
 * @param {string} [legacySelector]
 * @param {HTMLElement | Document} [parent]
 * @returns HTMLElement[]
 */
function getElementsFromOption(option, legacySelector, parent = document) {
    /** @type {HTMLElement[]} */
    let elements = [];
    if (option instanceof Element) {
        elements = [option];
    }
    else if (option instanceof NodeList || Array.isArray(option)) {
        elements = Array.from(option);
    }
    else {
        const selector = typeof option === 'string' ? option : legacySelector;
        if (selector) {
            elements = Array.from(parent.querySelectorAll(selector));
        }
    }
    return elements;
}
/**
 * Check if variable is PhotoSwipe class
 *
 * @param {any} fn
 * @returns {boolean}
 */
function isPswpClass(fn) {
    return typeof fn === 'function'
        && fn.prototype
        && fn.prototype.goTo;
}
/**
 * Check if browser is Safari
 *
 * @returns {boolean}
 */
function isSafari() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../slide/content.js').default} ContentDefault */
/** @typedef {import('../slide/slide.js').default} Slide */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */
/** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */
/**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */
/** @typedef {{ x?: number; y?: number }} Point */
/**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide | undefined, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point | undefined, transitionDuration: number | false | undefined }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource | undefined, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */
/**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource | undefined) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement | null | undefined, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thubmnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds | undefined, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thubmnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 */
/**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter
 */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback
 */
/**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */
class PhotoSwipeEvent {
    /**
     * @param {T} type
     * @param {PhotoSwipeEventsMap[T]} [details]
     */
    constructor(type, details) {
        this.type = type;
        this.defaultPrevented = false;
        if (details) {
            Object.assign(this, details);
        }
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
}
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */
class Eventable {
    constructor() {
        /**
         * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
         */
        this._listeners = {};
        /**
         * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
         */
        this._filters = {};
        /** @type {PhotoSwipe | undefined} */
        this.pswp = undefined;
        /** @type {PhotoSwipeOptions | undefined} */
        this.options = undefined;
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     * @param {number} priority
     */
    addFilter(name, fn, priority = 100) {
        if (!this._filters[name]) {
            this._filters[name] = [];
        }
        this._filters[name]?.push({ fn, priority });
        this._filters[name]?.sort((f1, f2) => f1.priority - f2.priority);
        this.pswp?.addFilter(name, fn, priority);
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     */
    removeFilter(name, fn) {
        if (this._filters[name]) {
            // @ts-expect-error
            this._filters[name] = this._filters[name].filter(filter => (filter.fn !== fn));
        }
        if (this.pswp) {
            this.pswp.removeFilter(name, fn);
        }
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
     * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
     */
    applyFilters(name, ...args) {
        this._filters[name]?.forEach((filter) => {
            // @ts-expect-error
            args[0] = filter.fn.apply(this, args);
        });
        return args[0];
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    on(name, fn) {
        if (!this._listeners[name]) {
            this._listeners[name] = [];
        }
        this._listeners[name]?.push(fn);
        // When binding events to lightbox,
        // also bind events to PhotoSwipe Core,
        // if it's open.
        this.pswp?.on(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    off(name, fn) {
        if (this._listeners[name]) {
            // @ts-expect-error
            this._listeners[name] = this._listeners[name].filter(listener => (fn !== listener));
        }
        this.pswp?.off(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {PhotoSwipeEventsMap[T]} [details]
     * @returns {AugmentedEvent<T>}
     */
    dispatch(name, details) {
        if (this.pswp) {
            return this.pswp.dispatch(name, details);
        }
        const event = /** @type {AugmentedEvent<T>} */ (new PhotoSwipeEvent(name, details));
        this._listeners[name]?.forEach((listener) => {
            listener.call(this, event);
        });
        return event;
    }
}
class Placeholder {
    /**
     * @param {string | false} imageSrc
     * @param {HTMLElement} container
     */
    constructor(imageSrc, container) {
        // Create placeholder
        // (stretched thumbnail or simple div behind the main image)
        /** @type {HTMLImageElement | HTMLDivElement | null} */
        this.element = createElement('pswp__img pswp__img--placeholder', imageSrc ? 'img' : 'div', container);
        if (imageSrc) {
            const imgEl = /** @type {HTMLImageElement} */ (this.element);
            imgEl.decoding = 'async';
            imgEl.alt = '';
            imgEl.src = imageSrc;
            imgEl.setAttribute('role', 'presentation');
        }
        this.element.setAttribute('aria-hidden', 'true');
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width, height) {
        if (!this.element) {
            return;
        }
        if (this.element.tagName === 'IMG') {
            // Use transform scale() to modify img placeholder size
            // (instead of changing width/height directly).
            // This helps with performance, specifically in iOS15 Safari.
            setWidthHeight(this.element, 250, 'auto');
            this.element.style.transformOrigin = '0 0';
            this.element.style.transform = toTransformString(0, 0, width / 250);
        }
        else {
            setWidthHeight(this.element, width, height);
        }
    }
    destroy() {
        if (this.element?.parentNode) {
            this.element.remove();
        }
        this.element = null;
    }
}
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../util/util.js').LoadState} LoadState */
class Content {
    /**
     * @param {SlideData} itemData Slide data
     * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
     * @param {number} index
     */
    constructor(itemData, instance, index) {
        this.instance = instance;
        this.data = itemData;
        this.index = index;
        /** @type {HTMLImageElement | HTMLDivElement | undefined} */
        this.element = undefined;
        /** @type {Placeholder | undefined} */
        this.placeholder = undefined;
        /** @type {Slide | undefined} */
        this.slide = undefined;
        this.displayedImageWidth = 0;
        this.displayedImageHeight = 0;
        this.width = Number(this.data.w) || Number(this.data.width) || 0;
        this.height = Number(this.data.h) || Number(this.data.height) || 0;
        this.isAttached = false;
        this.hasSlide = false;
        this.isDecoding = false;
        /** @type {LoadState} */
        this.state = LOAD_STATE.IDLE;
        if (this.data.type) {
            this.type = this.data.type;
        }
        else if (this.data.src) {
            this.type = 'image';
        }
        else {
            this.type = 'html';
        }
        this.instance.dispatch('contentInit', { content: this });
    }
    removePlaceholder() {
        if (this.placeholder && !this.keepPlaceholder()) {
            // With delay, as image might be loaded, but not rendered
            setTimeout(() => {
                if (this.placeholder) {
                    this.placeholder.destroy();
                    this.placeholder = undefined;
                }
            }, 1000);
        }
    }
    /**
     * Preload content
     *
     * @param {boolean} isLazy
     * @param {boolean} [reload]
     */
    load(isLazy, reload) {
        if (this.slide && this.usePlaceholder()) {
            if (!this.placeholder) {
                const placeholderSrc = this.instance.applyFilters('placeholderSrc', 
                // use  image-based placeholder only for the first slide,
                // as rendering (even small stretched thumbnail) is an expensive operation
                (this.data.msrc && this.slide.isFirstSlide) ? this.data.msrc : false, this);
                this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
            }
            else {
                const placeholderEl = this.placeholder.element;
                // Add placeholder to DOM if it was already created
                if (placeholderEl && !placeholderEl.parentElement) {
                    this.slide.container.prepend(placeholderEl);
                }
            }
        }
        if (this.element && !reload) {
            return;
        }
        if (this.instance.dispatch('contentLoad', { content: this, isLazy }).defaultPrevented) {
            return;
        }
        if (this.isImageContent()) {
            this.element = createElement('pswp__img', 'img');
            // Start loading only after width is defined, as sizes might depend on it.
            // Due to Safari feature, we must define sizes before srcset.
            if (this.displayedImageWidth) {
                this.loadImage(isLazy);
            }
        }
        else {
            this.element = createElement('pswp__content', 'div');
            this.element.innerHTML = this.data.html || '';
        }
        if (reload && this.slide) {
            this.slide.updateContentSize(true);
        }
    }
    /**
     * Preload image
     *
     * @param {boolean} isLazy
     */
    loadImage(isLazy) {
        if (!this.isImageContent()
            || !this.element
            || this.instance.dispatch('contentLoadImage', { content: this, isLazy }).defaultPrevented) {
            return;
        }
        const imageElement = /** @type HTMLImageElement */ (this.element);
        this.updateSrcsetSizes();
        if (this.data.srcset) {
            imageElement.srcset = this.data.srcset;
        }
        imageElement.src = this.data.src ?? '';
        imageElement.alt = this.data.alt ?? '';
        this.state = LOAD_STATE.LOADING;
        if (imageElement.complete) {
            this.onLoaded();
        }
        else {
            imageElement.onload = () => {
                this.onLoaded();
            };
            imageElement.onerror = () => {
                this.onError();
            };
        }
    }
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */
    setSlide(slide) {
        this.slide = slide;
        this.hasSlide = true;
        this.instance = slide.pswp;
        // Dmytro Semenov: do we need to unset slide?
    }
    /**
     * Content load success handler
     */
    onLoaded() {
        this.state = LOAD_STATE.LOADED;
        if (this.slide && this.element) {
            this.instance.dispatch('loadComplete', { slide: this.slide, content: this });
            // if content is reloaded
            if (this.slide.isActive
                && this.slide.heavyAppended
                && !this.element.parentNode) {
                this.append();
                this.slide.updateContentSize(true);
            }
            if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
                this.removePlaceholder();
            }
        }
    }
    /**
     * Content load error handler
     */
    onError() {
        this.state = LOAD_STATE.ERROR;
        if (this.slide) {
            this.displayError();
            this.instance.dispatch('loadComplete', { slide: this.slide, isError: true, content: this });
            this.instance.dispatch('loadError', { slide: this.slide, content: this });
        }
    }
    /**
     * @returns {Boolean} If the content is currently loading
     */
    isLoading() {
        return this.instance.applyFilters('isContentLoading', this.state === LOAD_STATE.LOADING, this);
    }
    /**
     * @returns {Boolean} If the content is in error state
     */
    isError() {
        return this.state === LOAD_STATE.ERROR;
    }
    /**
     * @returns {boolean} If the content is image
     */
    isImageContent() {
        return this.type === 'image';
    }
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */
    setDisplayedSize(width, height) {
        if (!this.element) {
            return;
        }
        if (this.placeholder) {
            this.placeholder.setDisplayedSize(width, height);
        }
        if (this.instance.dispatch('contentResize', { content: this, width, height }).defaultPrevented) {
            return;
        }
        setWidthHeight(this.element, width, height);
        if (this.isImageContent() && !this.isError()) {
            const isInitialSizeUpdate = (!this.displayedImageWidth && width);
            this.displayedImageWidth = width;
            this.displayedImageHeight = height;
            if (isInitialSizeUpdate) {
                this.loadImage(false);
            }
            else {
                this.updateSrcsetSizes();
            }
            if (this.slide) {
                this.instance.dispatch('imageSizeChange', { slide: this.slide, width, height, content: this });
            }
        }
    }
    /**
     * @returns {boolean} If the content can be zoomed
     */
    isZoomable() {
        return this.instance.applyFilters('isContentZoomable', this.isImageContent() && (this.state !== LOAD_STATE.ERROR), this);
    }
    /**
     * Update image srcset sizes attribute based on width and height
     */
    updateSrcsetSizes() {
        // Handle srcset sizes attribute.
        //
        // Never lower quality, if it was increased previously.
        // Chrome does this automatically, Firefox and Safari do not,
        // so we store largest used size in dataset.
        if (!this.isImageContent() || !this.element || !this.data.srcset) {
            return;
        }
        const image = /** @type HTMLImageElement */ (this.element);
        const sizesWidth = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
        if (!image.dataset.largestUsedSize
            || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
            image.sizes = sizesWidth + 'px';
            image.dataset.largestUsedSize = String(sizesWidth);
        }
    }
    /**
     * @returns {boolean} If content should use a placeholder (from msrc by default)
     */
    usePlaceholder() {
        return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
    }
    /**
     * Preload content with lazy-loading param
     */
    lazyLoad() {
        if (this.instance.dispatch('contentLazyLoad', { content: this }).defaultPrevented) {
            return;
        }
        this.load(true);
    }
    /**
     * @returns {boolean} If placeholder should be kept after content is loaded
     */
    keepPlaceholder() {
        return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
    }
    /**
     * Destroy the content
     */
    destroy() {
        this.hasSlide = false;
        this.slide = undefined;
        if (this.instance.dispatch('contentDestroy', { content: this }).defaultPrevented) {
            return;
        }
        this.remove();
        if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = undefined;
        }
        if (this.isImageContent() && this.element) {
            this.element.onload = null;
            this.element.onerror = null;
            this.element = undefined;
        }
    }
    /**
     * Display error message
     */
    displayError() {
        if (this.slide) {
            let errorMsgEl = createElement('pswp__error-msg', 'div');
            errorMsgEl.innerText = this.instance.options?.errorMsg ?? '';
            errorMsgEl = /** @type {HTMLDivElement} */ (this.instance.applyFilters('contentErrorElement', errorMsgEl, this));
            this.element = createElement('pswp__content pswp__error-msg-container', 'div');
            this.element.appendChild(errorMsgEl);
            this.slide.container.innerText = '';
            this.slide.container.appendChild(this.element);
            this.slide.updateContentSize(true);
            this.removePlaceholder();
        }
    }
    /**
     * Append the content
     */
    append() {
        if (this.isAttached || !this.element) {
            return;
        }
        this.isAttached = true;
        if (this.state === LOAD_STATE.ERROR) {
            this.displayError();
            return;
        }
        if (this.instance.dispatch('contentAppend', { content: this }).defaultPrevented) {
            return;
        }
        const supportsDecode = ('decode' in this.element);
        if (this.isImageContent()) {
            // Use decode() on nearby slides
            //
            // Nearby slide images are in DOM and not hidden via display:none.
            // However, they are placed offscreen (to the left and right side).
            //
            // Some browsers do not composite the image until it's actually visible,
            // using decode() helps.
            //
            // You might ask "why dont you just decode() and then append all images",
            // that's because I want to show image before it's fully loaded,
            // as browser can render parts of image while it is loading.
            // We do not do this in Safari due to partial loading bug.
            if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
                this.isDecoding = true;
                // purposefully using finally instead of then,
                // as if srcset sizes changes dynamically - it may cause decode error
                /** @type {HTMLImageElement} */
                (this.element).decode().catch(() => { }).finally(() => {
                    this.isDecoding = false;
                    this.appendImage();
                });
            }
            else {
                this.appendImage();
            }
        }
        else if (this.slide && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
        }
    }
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */
    activate() {
        if (this.instance.dispatch('contentActivate', { content: this }).defaultPrevented
            || !this.slide) {
            return;
        }
        if (this.isImageContent() && this.isDecoding && !isSafari()) {
            // add image to slide when it becomes active,
            // even if it's not finished decoding
            this.appendImage();
        }
        else if (this.isError()) {
            this.load(false, true); // try to reload
        }
        if (this.slide.holderElement) {
            this.slide.holderElement.setAttribute('aria-hidden', 'false');
        }
    }
    /**
     * Deactivate the content
     */
    deactivate() {
        this.instance.dispatch('contentDeactivate', { content: this });
        if (this.slide && this.slide.holderElement) {
            this.slide.holderElement.setAttribute('aria-hidden', 'true');
        }
    }
    /**
     * Remove the content from DOM
     */
    remove() {
        this.isAttached = false;
        if (this.instance.dispatch('contentRemove', { content: this }).defaultPrevented) {
            return;
        }
        if (this.element && this.element.parentNode) {
            this.element.remove();
        }
        if (this.placeholder && this.placeholder.element) {
            this.placeholder.element.remove();
        }
    }
    /**
     * Append the image content to slide container
     */
    appendImage() {
        if (!this.isAttached) {
            return;
        }
        if (this.instance.dispatch('contentAppendImage', { content: this }).defaultPrevented) {
            return;
        }
        // ensure that element exists and is not already appended
        if (this.slide && this.element && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
        }
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
            this.removePlaceholder();
        }
    }
}
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/**
 * @param {PhotoSwipeOptions} options
 * @param {PhotoSwipeBase} pswp
 * @returns {Point}
 */
function getViewportSize(options, pswp) {
    if (options.getViewportSizeFn) {
        const newViewportSize = options.getViewportSizeFn(options, pswp);
        if (newViewportSize) {
            return newViewportSize;
        }
    }
    return {
        x: document.documentElement.clientWidth,
        // Dmytro Semenov: height on mobile is very incosistent due to toolbar
        // find a way to improve this
        //
        // document.documentElement.clientHeight - doesn't seem to work well
        y: window.innerHeight
    };
}
/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {'left' | 'top' | 'bottom' | 'right'} prop
 * @param {PhotoSwipeOptions} options PhotoSwipe options
 * @param {Point} viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {SlideData} itemData Data about the slide
 * @param {number} index Slide index
 * @returns {number}
 */
function parsePaddingOption(prop, options, viewportSize, itemData, index) {
    let paddingValue = 0;
    if (options.paddingFn) {
        paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    }
    else if (options.padding) {
        paddingValue = options.padding[prop];
    }
    else {
        const legacyPropName = 'padding' + prop[0].toUpperCase() + prop.slice(1);
        // @ts-expect-error
        if (options[legacyPropName]) {
            // @ts-expect-error
            paddingValue = options[legacyPropName];
        }
    }
    return Number(paddingValue) || 0;
}
/**
 * @param {PhotoSwipeOptions} options
 * @param {Point} viewportSize
 * @param {SlideData} itemData
 * @param {number} index
 * @returns {Point}
 */
function getPanAreaSize(options, viewportSize, itemData, index) {
    return {
        x: viewportSize.x
            - parsePaddingOption('left', options, viewportSize, itemData, index)
            - parsePaddingOption('right', options, viewportSize, itemData, index),
        y: viewportSize.y
            - parsePaddingOption('top', options, viewportSize, itemData, index)
            - parsePaddingOption('bottom', options, viewportSize, itemData, index)
    };
}
const MAX_IMAGE_WIDTH = 4000;
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */
/**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */
class ZoomLevel {
    /**
     * @param {PhotoSwipeOptions} options PhotoSwipe options
     * @param {SlideData} itemData Slide data
     * @param {number} index Slide index
     * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
     */
    constructor(options, itemData, index, pswp) {
        this.pswp = pswp;
        this.options = options;
        this.itemData = itemData;
        this.index = index;
        /** @type { Point | null } */
        this.panAreaSize = null;
        /** @type { Point | null } */
        this.elementSize = null;
        this.fit = 1;
        this.fill = 1;
        this.vFill = 1;
        this.initial = 1;
        this.secondary = 1;
        this.max = 1;
        this.min = 1;
    }
    /**
     * Calculate initial, secondary and maximum zoom level for the specified slide.
     *
     * It should be called when either image or viewport size changes.
     *
     * @param {number} maxWidth
     * @param {number} maxHeight
     * @param {Point} panAreaSize
     */
    update(maxWidth, maxHeight, panAreaSize) {
        /** @type {Point} */
        const elementSize = { x: maxWidth, y: maxHeight };
        this.elementSize = elementSize;
        this.panAreaSize = panAreaSize;
        const hRatio = panAreaSize.x / elementSize.x;
        const vRatio = panAreaSize.y / elementSize.y;
        this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
        this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
        // zoom.vFill defines zoom level of the image
        // when it has 100% of viewport vertical space (height)
        this.vFill = Math.min(1, vRatio);
        this.initial = this._getInitial();
        this.secondary = this._getSecondary();
        this.max = Math.max(this.initial, this.secondary, this._getMax());
        this.min = Math.min(this.fit, this.initial, this.secondary);
        if (this.pswp) {
            this.pswp.dispatch('zoomLevelsUpdate', { zoomLevels: this, slideData: this.itemData });
        }
    }
    /**
     * Parses user-defined zoom option.
     *
     * @private
     * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
     * @returns { number | undefined }
     */
    _parseZoomLevelOption(optionPrefix) {
        const optionName = /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */ (optionPrefix + 'ZoomLevel');
        const optionValue = this.options[optionName];
        if (!optionValue) {
            return;
        }
        if (typeof optionValue === 'function') {
            return optionValue(this);
        }
        if (optionValue === 'fill') {
            return this.fill;
        }
        if (optionValue === 'fit') {
            return this.fit;
        }
        return Number(optionValue);
    }
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @private
     * @return {number}
     */
    _getSecondary() {
        let currZoomLevel = this._parseZoomLevelOption('secondary');
        if (currZoomLevel) {
            return currZoomLevel;
        }
        // 3x of "fit" state, but not larger than original
        currZoomLevel = Math.min(1, this.fit * 3);
        if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
            currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
        }
        return currZoomLevel;
    }
    /**
     * Get initial image zoom level.
     *
     * @private
     * @return {number}
     */
    _getInitial() {
        return this._parseZoomLevelOption('initial') || this.fit;
    }
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @private
     * @return {number}
     */
    _getMax() {
        // max zoom level is x4 from "fit state",
        // used for zoom gesture and ctrl/trackpad zoom
        return this._parseZoomLevelOption('max') || Math.max(1, this.fit * 4);
    }
}
/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {SlideData} itemData Data about the slide
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
 * @param {number} index
 * @returns {Content} Image that is being decoded or false.
 */
function lazyLoadData(itemData, instance, index) {
    const content = instance.createContentFromData(itemData, index);
    /** @type {ZoomLevel | undefined} */
    let zoomLevel;
    const { options } = instance;
    // We need to know dimensions of the image to preload it,
    // as it might use srcset, and we need to define sizes
    if (options) {
        zoomLevel = new ZoomLevel(options, itemData, -1);
        let viewportSize;
        if (instance.pswp) {
            viewportSize = instance.pswp.viewportSize;
        }
        else {
            viewportSize = getViewportSize(options, instance);
        }
        const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
        zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
        content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
}
/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default, it loads image based on viewport size and initial zoom level.
 *
 * @param {number} index Slide index
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 * @returns {Content | undefined}
 */
function lazyLoadSlide(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch('lazyLoadSlide', { index, itemData }).defaultPrevented) {
        return;
    }
    return lazyLoadData(itemData, instance, index);
}
/** @typedef {import("../photoswipe.js").default} PhotoSwipe */
/** @typedef {import("../slide/slide.js").SlideData} SlideData */
/**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */
class PhotoSwipeBase extends Eventable {
    /**
     * Get total number of slides
     *
     * @returns {number}
     */
    getNumItems() {
        let numItems = 0;
        const dataSource = this.options?.dataSource;
        if (dataSource && 'length' in dataSource) {
            // may be an array or just object with length property
            numItems = dataSource.length;
        }
        else if (dataSource && 'gallery' in dataSource) {
            // query DOM elements
            if (!dataSource.items) {
                dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            if (dataSource.items) {
                numItems = dataSource.items.length;
            }
        }
        // legacy event, before filters were introduced
        const event = this.dispatch('numItems', {
            dataSource,
            numItems
        });
        return this.applyFilters('numItems', event.numItems, dataSource);
    }
    /**
     * @param {SlideData} slideData
     * @param {number} index
     * @returns {Content}
     */
    createContentFromData(slideData, index) {
        return new Content(slideData, this, index);
    }
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {number} index
     * @returns {SlideData}
     */
    getItemData(index) {
        const dataSource = this.options?.dataSource;
        /** @type {SlideData | HTMLElement} */
        let dataSourceItem = {};
        if (Array.isArray(dataSource)) {
            // Datasource is an array of elements
            dataSourceItem = dataSource[index];
        }
        else if (dataSource && 'gallery' in dataSource) {
            // dataSource has gallery property,
            // thus it was created by Lightbox, based on
            // gallery and children options
            // query DOM elements
            if (!dataSource.items) {
                dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            dataSourceItem = dataSource.items[index];
        }
        let itemData = dataSourceItem;
        if (itemData instanceof Element) {
            itemData = this._domElementToItemData(itemData);
        }
        // Dispatching the itemData event,
        // it's a legacy verion before filters were introduced
        const event = this.dispatch('itemData', {
            itemData: itemData || {},
            index
        });
        return this.applyFilters('itemData', event.itemData, index);
    }
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {HTMLElement} galleryElement
     * @returns {HTMLElement[]}
     */
    _getGalleryDOMElements(galleryElement) {
        if (this.options?.children || this.options?.childSelector) {
            return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
        }
        return [galleryElement];
    }
    /**
     * Converts DOM element to item data object.
     *
     * @param {HTMLElement} element DOM element
     * @returns {SlideData}
     */
    _domElementToItemData(element) {
        /** @type {SlideData} */
        const itemData = {
            element
        };
        const linkEl = /** @type {HTMLAnchorElement} */ (element.tagName === 'A'
            ? element
            : element.querySelector('a'));
        if (linkEl) {
            // src comes from data-pswp-src attribute,
            // if it's empty link href is used
            itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
            if (linkEl.dataset.pswpSrcset) {
                itemData.srcset = linkEl.dataset.pswpSrcset;
            }
            itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
            itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
            // support legacy w & h properties
            itemData.w = itemData.width;
            itemData.h = itemData.height;
            if (linkEl.dataset.pswpType) {
                itemData.type = linkEl.dataset.pswpType;
            }
            const thumbnailEl = element.querySelector('img');
            if (thumbnailEl) {
                // msrc is URL to placeholder image that's displayed before large image is loaded
                // by default it's displayed only for the first slide
                itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
                itemData.alt = thumbnailEl.getAttribute('alt') ?? '';
            }
            if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
                itemData.thumbCropped = true;
            }
        }
        return this.applyFilters('domItemData', itemData, element, linkEl);
    }
    /**
     * Lazy-load by slide data
     *
     * @param {SlideData} itemData Data about the slide
     * @param {number} index
     * @returns {Content} Image that is being decoded or false.
     */
    lazyLoadData(itemData, index) {
        return lazyLoadData(itemData, this, index);
    }
}
/**
 * @template T
 * @typedef {import('../types.js').Type<T>} Type<T>
 */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('../slide/content.js').default} Content */
/** @typedef {import('../core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */
/** @typedef {import('../core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */
/**
 * @template T
 * @typedef {import('../core/eventable.js').EventCallback<T>} EventCallback<T>
 */
/**
 * PhotoSwipe Lightbox
 *
 * - If user has unsupported browser it falls back to default browser action (just opens URL)
 * - Binds click event to links that should open PhotoSwipe
 * - parses DOM strcture for PhotoSwipe (retrieves large image URLs and sizes)
 * - Initializes PhotoSwipe
 *
 *
 * Loader options use the same object as PhotoSwipe, and supports such options:
 *
 * gallery - Element | Element[] | NodeList | string selector for the gallery element
 * children - Element | Element[] | NodeList | string selector for the gallery children
 *
 */
class PhotoSwipeLightbox extends PhotoSwipeBase {
    /**
     * @param {PhotoSwipeOptions} [options]
     */
    constructor(options) {
        super();
        /** @type {PhotoSwipeOptions} */
        this.options = options || {};
        this._uid = 0;
        this.shouldOpen = false;
        /**
         * @private
         * @type {Content | undefined}
         */
        this._preloadedContent = undefined;
        this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
    }
    /**
     * Initialize lightbox, should be called only once.
     * It's not included in the main constructor, so you may bind events before it.
     */
    init() {
        // Bind click events to each gallery
        getElementsFromOption(this.options.gallery, this.options.gallerySelector)
            .forEach((galleryElement) => {
            galleryElement.addEventListener('click', this.onThumbnailsClick, false);
        });
    }
    /**
     * @param {MouseEvent} e
     */
    onThumbnailsClick(e) {
        // Exit and allow default browser action if:
        if (specialKeyUsed(e) // ... if clicked with a special key (ctrl/cmd...)
            || window.pswp // ... if PhotoSwipe is already open
            || window.navigator.onLine === false) { // ... if offline
            return;
        }
        // If both clientX and clientY are 0 or not defined,
        // the event is likely triggered by keyboard,
        // so we do not pass the initialPoint
        //
        // Note that some screen readers emulate the mouse position,
        // so it's not the ideal way to detect them.
        //
        /** @type {Point | null} */
        let initialPoint = { x: e.clientX, y: e.clientY };
        if (!initialPoint.x && !initialPoint.y) {
            initialPoint = null;
        }
        let clickedIndex = this.getClickedIndex(e);
        clickedIndex = this.applyFilters('clickedIndex', clickedIndex, e, this);
        /** @type {DataSource} */
        const dataSource = {
            gallery: /** @type {HTMLElement} */ (e.currentTarget)
        };
        if (clickedIndex >= 0) {
            e.preventDefault();
            this.loadAndOpen(clickedIndex, dataSource, initialPoint);
        }
    }
    /**
     * Get index of gallery item that was clicked.
     *
     * @param {MouseEvent} e click event
     * @returns {number}
     */
    getClickedIndex(e) {
        // legacy option
        if (this.options.getClickedIndexFn) {
            return this.options.getClickedIndexFn.call(this, e);
        }
        const clickedTarget = /** @type {HTMLElement} */ (e.target);
        const childElements = getElementsFromOption(this.options.children, this.options.childSelector, 
        /** @type {HTMLElement} */ (e.currentTarget));
        const clickedChildIndex = childElements.findIndex(child => child === clickedTarget || child.contains(clickedTarget));
        if (clickedChildIndex !== -1) {
            return clickedChildIndex;
        }
        else if (this.options.children || this.options.childSelector) {
            // click wasn't on a child element
            return -1;
        }
        // There is only one item (which is the gallery)
        return 0;
    }
    /**
     * Load and open PhotoSwipe
     *
     * @param {number} index
     * @param {DataSource} dataSource
     * @param {Point | null} [initialPoint]
     * @returns {boolean}
     */
    loadAndOpen(index, dataSource, initialPoint) {
        // Check if the gallery is already open
        if (window.pswp) {
            return false;
        }
        // set initial index
        this.options.index = index;
        // define options for PhotoSwipe constructor
        this.options.initialPointerPos = initialPoint;
        this.shouldOpen = true;
        this.preload(index, dataSource);
        return true;
    }
    /**
     * Load the main module and the slide content by index
     *
     * @param {number} index
     * @param {DataSource} [dataSource]
     */
    preload(index, dataSource) {
        const { options } = this;
        if (dataSource) {
            options.dataSource = dataSource;
        }
        // Add the main module
        /** @type {Promise<Type<PhotoSwipe>>[]} */
        const promiseArray = [];
        const pswpModuleType = typeof options.pswpModule;
        if (isPswpClass(options.pswpModule)) {
            promiseArray.push(Promise.resolve(/** @type {Type<PhotoSwipe>} */ (options.pswpModule)));
        }
        else if (pswpModuleType === 'string') {
            throw new Error('pswpModule as string is no longer supported');
        }
        else if (pswpModuleType === 'function') {
            promiseArray.push(/** @type {() => Promise<Type<PhotoSwipe>>} */ (options.pswpModule)());
        }
        else {
            throw new Error('pswpModule is not valid');
        }
        // Add custom-defined promise, if any
        if (typeof options.openPromise === 'function') {
            // allow developers to perform some task before opening
            promiseArray.push(options.openPromise());
        }
        if (options.preloadFirstSlide !== false && index >= 0) {
            this._preloadedContent = lazyLoadSlide(index, this);
        }
        // Wait till all promises resolve and open PhotoSwipe
        const uid = ++this._uid;
        Promise.all(promiseArray).then((iterableModules) => {
            if (this.shouldOpen) {
                const mainModule = iterableModules[0];
                this._openPhotoswipe(mainModule, uid);
            }
        });
    }
    /**
     * @private
     * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
     * @param {number} uid
     */
    _openPhotoswipe(module, uid) {
        // Cancel opening if UID doesn't match the current one
        // (if user clicked on another gallery item before current was loaded).
        //
        // Or if shouldOpen flag is set to false
        // (developer may modify it via public API)
        if (uid !== this._uid && this.shouldOpen) {
            return;
        }
        this.shouldOpen = false;
        // PhotoSwipe is already open
        if (window.pswp) {
            return;
        }
        /**
         * Pass data to PhotoSwipe and open init
         *
         * @type {PhotoSwipe}
         */
        const pswp = typeof module === 'object'
            ? new module.default(this.options) // eslint-disable-line
            : new module(this.options); // eslint-disable-line
        this.pswp = pswp;
        window.pswp = pswp;
        // map listeners from Lightbox to PhotoSwipe Core
        /** @type {(keyof PhotoSwipeEventsMap)[]} */
        (Object.keys(this._listeners)).forEach((name) => {
            this._listeners[name]?.forEach((fn) => {
                pswp.on(name, /** @type {EventCallback<typeof name>} */ (fn));
            });
        });
        // same with filters
        /** @type {(keyof PhotoSwipeFiltersMap)[]} */
        (Object.keys(this._filters)).forEach((name) => {
            this._filters[name]?.forEach((filter) => {
                pswp.addFilter(name, filter.fn, filter.priority);
            });
        });
        if (this._preloadedContent) {
            pswp.contentLoader.addToCache(this._preloadedContent);
            this._preloadedContent = undefined;
        }
        pswp.on('destroy', () => {
            // clean up public variables
            this.pswp = undefined;
            delete window.pswp;
        });
        pswp.init();
    }
    /**
     * Unbinds all events, closes PhotoSwipe if it's open.
     */
    destroy() {
        this.pswp?.destroy();
        this.shouldOpen = false;
        this._listeners = {};
        getElementsFromOption(this.options.gallery, this.options.gallerySelector)
            .forEach((galleryElement) => {
            galleryElement.removeEventListener('click', this.onThumbnailsClick, false);
        });
    }
}
exports.default = PhotoSwipeLightbox;

},{}],4:[function(require,module,exports){
"use strict";
/*!
  * PhotoSwipe 5.3.6 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */
/*
Attribution: Robert A Howell, March 2023
Original Author: Dmytro Semenov, https://photoswipe.com
Source distribution: https://github.com/dimsemenov/PhotoSwipe
Copyright (c) 2023-2026 Robert A. Howell
*/
/** @typedef {import('../photoswipe.js').Point} Point */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {string} className
 * @param {T} tagName
 * @param {Node} [appendToEl]
 * @returns {HTMLElementTagNameMap[T]}
 */
function createElement(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
        el.className = className;
    }
    if (appendToEl) {
        appendToEl.appendChild(el);
    }
    return el;
}
/**
 * @param {Point} p1
 * @param {Point} p2
 * @returns {Point}
 */
function equalizePoints(p1, p2) {
    p1.x = p2.x;
    p1.y = p2.y;
    if (p2.id !== undefined) {
        p1.id = p2.id;
    }
    return p1;
}
/**
 * @param {Point} p
 */
function roundPoint(p) {
    p.x = Math.round(p.x);
    p.y = Math.round(p.y);
}
/**
 * Returns distance between two points.
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {number}
 */
function getDistanceBetween(p1, p2) {
    const x = Math.abs(p1.x - p2.x);
    const y = Math.abs(p1.y - p2.y);
    return Math.sqrt((x * x) + (y * y));
}
/**
 * Whether X and Y positions of points are equal
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {boolean}
 */
function pointsEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
/**
 * The float result between the min and max values.
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
/**
 * Get transform string
 *
 * @param {number} x
 * @param {number} [y]
 * @param {number} [scale]
 * @returns {string}
 */
function toTransformString(x, y, scale) {
    let propValue = `translate3d(${x}px,${y || 0}px,0)`;
    if (scale !== undefined) {
        propValue += ` scale3d(${scale},${scale},1)`;
    }
    return propValue;
}
/**
 * Apply transform:translate(x, y) scale(scale) to element
 *
 * @param {HTMLElement} el
 * @param {number} x
 * @param {number} [y]
 * @param {number} [scale]
 */
function setTransform(el, x, y, scale) {
    el.style.transform = toTransformString(x, y, scale);
}
const defaultCSSEasing = 'cubic-bezier(.4,0,.22,1)';
/**
 * Apply CSS transition to element
 *
 * @param {HTMLElement} el
 * @param {string} [prop] CSS property to animate
 * @param {number} [duration] in ms
 * @param {string} [ease] CSS easing function
 */
function setTransitionStyle(el, prop, duration, ease) {
    // inOut: 'cubic-bezier(.4, 0, .22, 1)', // for "toggle state" transitions
    // out: 'cubic-bezier(0, 0, .22, 1)', // for "show" transitions
    // in: 'cubic-bezier(.4, 0, 1, 1)'// for "hide" transitions
    el.style.transition = prop
        ? `${prop} ${duration}ms ${ease || defaultCSSEasing}`
        : 'none';
}
/**
 * Apply width and height CSS properties to element
 *
 * @param {HTMLElement} el
 * @param {string | number} w
 * @param {string | number} h
 */
function setWidthHeight(el, w, h) {
    el.style.width = (typeof w === 'number') ? `${w}px` : w;
    el.style.height = (typeof h === 'number') ? `${h}px` : h;
}
/**
 * @param {HTMLElement} el
 */
function removeTransitionStyle(el) {
    setTransitionStyle(el);
}
/**
 * @param {HTMLImageElement} img
 * @returns {Promise<HTMLImageElement | void>}
 */
function decodeImage(img) {
    if ('decode' in img) {
        return img.decode().catch(() => { });
    }
    if (img.complete) {
        return Promise.resolve(img);
    }
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}
/** @typedef {LOAD_STATE[keyof LOAD_STATE]} LoadState */
/** @type {{ IDLE: 'idle'; LOADING: 'loading'; LOADED: 'loaded'; ERROR: 'error' }} */
const LOAD_STATE = {
    IDLE: 'idle',
    LOADING: 'loading',
    LOADED: 'loaded',
    ERROR: 'error',
};
/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {MouseEvent | KeyboardEvent} e
 * @returns {boolean}
 */
function specialKeyUsed(e) {
    return ('button' in e && e.button === 1) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
}
/**
 * Parse `gallery` or `children` options.
 *
 * @param {import('../photoswipe.js').ElementProvider} [option]
 * @param {string} [legacySelector]
 * @param {HTMLElement | Document} [parent]
 * @returns HTMLElement[]
 */
function getElementsFromOption(option, legacySelector, parent = document) {
    /** @type {HTMLElement[]} */
    let elements = [];
    if (option instanceof Element) {
        elements = [option];
    }
    else if (option instanceof NodeList || Array.isArray(option)) {
        elements = Array.from(option);
    }
    else {
        const selector = typeof option === 'string' ? option : legacySelector;
        if (selector) {
            elements = Array.from(parent.querySelectorAll(selector));
        }
    }
    return elements;
}
/**
 * Check if browser is Safari
 *
 * @returns {boolean}
 */
function isSafari() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
// Detect passive event listener support
let supportsPassive = false;
/* eslint-disable */
try {
    /* @ts-ignore */
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => {
            supportsPassive = true;
        }
    }));
}
catch (e) { }
/* eslint-enable */
/**
 * @typedef {Object} PoolItem
 * @prop {HTMLElement | Window | Document | undefined | null} target
 * @prop {string} type
 * @prop {EventListenerOrEventListenerObject} listener
 * @prop {boolean} [passive]
 */
class DOMEvents {
    constructor() {
        /**
         * @type {PoolItem[]}
         * @private
         */
        this._pool = [];
    }
    /**
     * Adds event listeners
     *
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type Can be multiple, separated by space.
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     */
    add(target, type, listener, passive) {
        this._toggleListener(target, type, listener, passive);
    }
    /**
     * Removes event listeners
     *
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     */
    remove(target, type, listener, passive) {
        this._toggleListener(target, type, listener, passive, true);
    }
    /**
     * Removes all bound events
     */
    removeAll() {
        this._pool.forEach((poolItem) => {
            this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
        });
        this._pool = [];
    }
    /**
     * Adds or removes event
     *
     * @private
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     * @param {boolean} [unbind] Whether the event should be added or removed
     * @param {boolean} [skipPool] Whether events pool should be skipped
     */
    _toggleListener(target, type, listener, passive, unbind, skipPool) {
        if (!target) {
            return;
        }
        const methodName = unbind ? 'removeEventListener' : 'addEventListener';
        const types = type.split(' ');
        types.forEach((eType) => {
            if (eType) {
                // Events pool is used to easily unbind all events when PhotoSwipe is closed,
                // so developer doesn't need to do this manually
                if (!skipPool) {
                    if (unbind) {
                        // Remove from the events pool
                        this._pool = this._pool.filter((poolItem) => {
                            return poolItem.type !== eType
                                || poolItem.listener !== listener
                                || poolItem.target !== target;
                        });
                    }
                    else {
                        // Add to the events pool
                        this._pool.push({
                            target,
                            type: eType,
                            listener,
                            passive
                        });
                    }
                }
                // most PhotoSwipe events call preventDefault,
                // and we do not need browser to scroll the page
                const eventOptions = supportsPassive ? { passive: (passive || false) } : false;
                target[methodName](eType, listener, eventOptions);
            }
        });
    }
}
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/**
 * @param {PhotoSwipeOptions} options
 * @param {PhotoSwipeBase} pswp
 * @returns {Point}
 */
function getViewportSize(options, pswp) {
    if (options.getViewportSizeFn) {
        const newViewportSize = options.getViewportSizeFn(options, pswp);
        if (newViewportSize) {
            return newViewportSize;
        }
    }
    return {
        x: document.documentElement.clientWidth,
        // Dmytro Semenov: height on mobile is very incosistent due to toolbar
        // find a way to improve this
        //
        // document.documentElement.clientHeight - doesn't seem to work well
        y: window.innerHeight
    };
}
/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {'left' | 'top' | 'bottom' | 'right'} prop
 * @param {PhotoSwipeOptions} options PhotoSwipe options
 * @param {Point} viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {SlideData} itemData Data about the slide
 * @param {number} index Slide index
 * @returns {number}
 */
function parsePaddingOption(prop, options, viewportSize, itemData, index) {
    let paddingValue = 0;
    if (options.paddingFn) {
        paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    }
    else if (options.padding) {
        paddingValue = options.padding[prop];
    }
    else {
        const legacyPropName = 'padding' + prop[0].toUpperCase() + prop.slice(1);
        // @ts-expect-error
        if (options[legacyPropName]) {
            // @ts-expect-error
            paddingValue = options[legacyPropName];
        }
    }
    return Number(paddingValue) || 0;
}
/**
 * @param {PhotoSwipeOptions} options
 * @param {Point} viewportSize
 * @param {SlideData} itemData
 * @param {number} index
 * @returns {Point}
 */
function getPanAreaSize(options, viewportSize, itemData, index) {
    return {
        x: viewportSize.x
            - parsePaddingOption('left', options, viewportSize, itemData, index)
            - parsePaddingOption('right', options, viewportSize, itemData, index),
        y: viewportSize.y
            - parsePaddingOption('top', options, viewportSize, itemData, index)
            - parsePaddingOption('bottom', options, viewportSize, itemData, index)
    };
}
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {Record<Axis, number>} Point */
/** @typedef {'x' | 'y'} Axis */
/**
 * Calculates minimum, maximum and initial (center) bounds of a slide
 */
class PanBounds {
    /**
     * @param {Slide} slide
     */
    constructor(slide) {
        this.slide = slide;
        this.currZoomLevel = 1;
        this.center = /** @type {Point} */ { x: 0, y: 0 };
        this.max = /** @type {Point} */ { x: 0, y: 0 };
        this.min = /** @type {Point} */ { x: 0, y: 0 };
    }
    /**
     * _getItemBounds
     *
     * @param {number} currZoomLevel
     */
    update(currZoomLevel) {
        this.currZoomLevel = currZoomLevel;
        if (!this.slide.width) {
            this.reset();
        }
        else {
            this._updateAxis('x');
            this._updateAxis('y');
            this.slide.pswp.dispatch('calcBounds', { slide: this.slide });
        }
    }
    /**
     * _calculateItemBoundsForAxis
     *
     * @param {Axis} axis
     */
    _updateAxis(axis) {
        const { pswp } = this.slide;
        const elSize = this.slide[axis === 'x' ? 'width' : 'height'] * this.currZoomLevel;
        const paddingProp = axis === 'x' ? 'left' : 'top';
        const padding = parsePaddingOption(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
        const panAreaSize = this.slide.panAreaSize[axis];
        // Default position of element.
        // By default, it is center of viewport:
        this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;
        // maximum pan position
        this.max[axis] = (elSize > panAreaSize)
            ? Math.round(panAreaSize - elSize) + padding
            : this.center[axis];
        // minimum pan position
        this.min[axis] = (elSize > panAreaSize)
            ? padding
            : this.center[axis];
    }
    // _getZeroBounds
    reset() {
        this.center.x = 0;
        this.center.y = 0;
        this.max.x = 0;
        this.max.y = 0;
        this.min.x = 0;
        this.min.y = 0;
    }
    /**
     * Correct pan position if it's beyond the bounds
     *
     * @param {Axis} axis x or y
     * @param {number} panOffset
     * @returns {number}
     */
    correctPan(axis, panOffset) {
        return clamp(panOffset, this.max[axis], this.min[axis]);
    }
}
const MAX_IMAGE_WIDTH = 4000;
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {'fit' | 'fill' | number | ((zoomLevelObject: ZoomLevel) => number)} ZoomLevelOption */
/**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */
class ZoomLevel {
    /**
     * @param {PhotoSwipeOptions} options PhotoSwipe options
     * @param {SlideData} itemData Slide data
     * @param {number} index Slide index
     * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
     */
    constructor(options, itemData, index, pswp) {
        this.pswp = pswp;
        this.options = options;
        this.itemData = itemData;
        this.index = index;
        /** @type { Point | null } */
        this.panAreaSize = null;
        /** @type { Point | null } */
        this.elementSize = null;
        this.fit = 1;
        this.fill = 1;
        this.vFill = 1;
        this.initial = 1;
        this.secondary = 1;
        this.max = 1;
        this.min = 1;
    }
    /**
     * Calculate initial, secondary and maximum zoom level for the specified slide.
     *
     * It should be called when either image or viewport size changes.
     *
     * @param {number} maxWidth
     * @param {number} maxHeight
     * @param {Point} panAreaSize
     */
    update(maxWidth, maxHeight, panAreaSize) {
        /** @type {Point} */
        const elementSize = { x: maxWidth, y: maxHeight };
        this.elementSize = elementSize;
        this.panAreaSize = panAreaSize;
        const hRatio = panAreaSize.x / elementSize.x;
        const vRatio = panAreaSize.y / elementSize.y;
        this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
        this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
        // zoom.vFill defines zoom level of the image
        // when it has 100% of viewport vertical space (height)
        this.vFill = Math.min(1, vRatio);
        this.initial = this._getInitial();
        this.secondary = this._getSecondary();
        this.max = Math.max(this.initial, this.secondary, this._getMax());
        this.min = Math.min(this.fit, this.initial, this.secondary);
        if (this.pswp) {
            this.pswp.dispatch('zoomLevelsUpdate', { zoomLevels: this, slideData: this.itemData });
        }
    }
    /**
     * Parses user-defined zoom option.
     *
     * @private
     * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
     * @returns { number | undefined }
     */
    _parseZoomLevelOption(optionPrefix) {
        const optionName = /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */ (optionPrefix + 'ZoomLevel');
        const optionValue = this.options[optionName];
        if (!optionValue) {
            return;
        }
        if (typeof optionValue === 'function') {
            return optionValue(this);
        }
        if (optionValue === 'fill') {
            return this.fill;
        }
        if (optionValue === 'fit') {
            return this.fit;
        }
        return Number(optionValue);
    }
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @private
     * @return {number}
     */
    _getSecondary() {
        let currZoomLevel = this._parseZoomLevelOption('secondary');
        if (currZoomLevel) {
            return currZoomLevel;
        }
        // 3x of "fit" state, but not larger than original
        currZoomLevel = Math.min(1, this.fit * 3);
        if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
            currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
        }
        return currZoomLevel;
    }
    /**
     * Get initial image zoom level.
     *
     * @private
     * @return {number}
     */
    _getInitial() {
        return this._parseZoomLevelOption('initial') || this.fit;
    }
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @private
     * @return {number}
     */
    _getMax() {
        // max zoom level is x4 from "fit state",
        // used for zoom gesture and ctrl/trackpad zoom
        return this._parseZoomLevelOption('max') || Math.max(1, this.fit * 4);
    }
}
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 * Renders and allows to control a single slide
 */
class Slide {
    /**
     * @param {SlideData} data
     * @param {number} index
     * @param {PhotoSwipe} pswp
     */
    constructor(data, index, pswp) {
        this.data = data;
        this.index = index;
        this.pswp = pswp;
        this.isActive = (index === pswp.currIndex);
        this.currentResolution = 0;
        /** @type {Point} */
        this.panAreaSize = { x: 0, y: 0 };
        /** @type {Point} */
        this.pan = { x: 0, y: 0 };
        this.isFirstSlide = (this.isActive && !pswp.opener.isOpen);
        this.zoomLevels = new ZoomLevel(pswp.options, data, index, pswp);
        this.pswp.dispatch('gettingData', {
            slide: this,
            data: this.data,
            index
        });
        this.content = this.pswp.contentLoader.getContentBySlide(this);
        this.container = createElement('pswp__zoom-wrap', 'div');
        /** @type {HTMLElement | null} */
        this.holderElement = null;
        this.currZoomLevel = 1;
        /** @type {number} */
        this.width = this.content.width;
        /** @type {number} */
        this.height = this.content.height;
        this.heavyAppended = false;
        this.bounds = new PanBounds(this);
        this.prevDisplayedWidth = -1;
        this.prevDisplayedHeight = -1;
        this.pswp.dispatch('slideInit', { slide: this });
    }
    /**
     * If this slide is active/current/visible
     *
     * @param {boolean} isActive
     */
    setIsActive(isActive) {
        if (isActive && !this.isActive) {
            // slide just became active
            this.activate();
        }
        else if (!isActive && this.isActive) {
            // slide just became non-active
            this.deactivate();
        }
    }
    /**
     * Appends slide content to DOM
     *
     * @param {HTMLElement} holderElement
     */
    append(holderElement) {
        this.holderElement = holderElement;
        this.container.style.transformOrigin = '0 0';
        // Slide appended to DOM
        if (!this.data) {
            return;
        }
        this.calculateSize();
        this.load();
        this.updateContentSize();
        this.appendHeavy();
        this.holderElement.appendChild(this.container);
        this.zoomAndPanToInitial();
        this.pswp.dispatch('firstZoomPan', { slide: this });
        this.applyCurrentZoomPan();
        this.pswp.dispatch('afterSetContent', { slide: this });
        if (this.isActive) {
            this.activate();
        }
    }
    load() {
        this.content.load(false);
        this.pswp.dispatch('slideLoad', { slide: this });
    }
    /**
     * Append "heavy" DOM elements
     *
     * This may depend on a type of slide,
     * but generally these are large images.
     */
    appendHeavy() {
        const { pswp } = this;
        const appendHeavyNearby = true; // Dmytro Semenov
        // Avoid appending heavy elements during animations
        if (this.heavyAppended
            || !pswp.opener.isOpen
            || pswp.mainScroll.isShifted()
            || (!this.isActive && !appendHeavyNearby)) {
            return;
        }
        if (this.pswp.dispatch('appendHeavy', { slide: this }).defaultPrevented) {
            return;
        }
        this.heavyAppended = true;
        this.content.append();
        this.pswp.dispatch('appendHeavyContent', { slide: this });
    }
    /**
     * Triggered when this slide is active (selected).
     *
     * If it's part of opening/closing transition -
     * activate() will trigger after the transition is ended.
     */
    activate() {
        this.isActive = true;
        this.appendHeavy();
        this.content.activate();
        this.pswp.dispatch('slideActivate', { slide: this });
    }
    /**
     * Triggered when this slide becomes inactive.
     *
     * Slide can become inactive only after it was active.
     */
    deactivate() {
        this.isActive = false;
        this.content.deactivate();
        if (this.currZoomLevel !== this.zoomLevels.initial) {
            // allow filtering
            this.calculateSize();
        }
        // reset zoom level
        this.currentResolution = 0;
        this.zoomAndPanToInitial();
        this.applyCurrentZoomPan();
        this.updateContentSize();
        this.pswp.dispatch('slideDeactivate', { slide: this });
    }
    /**
     * The slide should destroy itself, it will never be used again.
     * (unbind all events and destroy internal components)
     */
    destroy() {
        this.content.hasSlide = false;
        this.content.remove();
        this.container.remove();
        this.pswp.dispatch('slideDestroy', { slide: this });
    }
    resize() {
        if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
            // Keep initial zoom level if it was before the resize,
            // as well as when this slide is not active
            // Reset position and scale to original state
            this.calculateSize();
            this.currentResolution = 0;
            this.zoomAndPanToInitial();
            this.applyCurrentZoomPan();
            this.updateContentSize();
        }
        else {
            // readjust pan position if it's beyond the bounds
            this.calculateSize();
            this.bounds.update(this.currZoomLevel);
            this.panTo(this.pan.x, this.pan.y);
        }
    }
    /**
     * Apply size to current slide content,
     * based on the current resolution and scale.
     *
     * @param {boolean} [force] if size should be updated even if dimensions weren't changed
     */
    updateContentSize(force) {
        // Use initial zoom level
        // if resolution is not defined (user didn't zoom yet)
        const scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
        if (!scaleMultiplier) {
            return;
        }
        const width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
        const height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
        if (!this.sizeChanged(width, height) && !force) {
            return;
        }
        this.content.setDisplayedSize(width, height);
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    sizeChanged(width, height) {
        if (width !== this.prevDisplayedWidth
            || height !== this.prevDisplayedHeight) {
            this.prevDisplayedWidth = width;
            this.prevDisplayedHeight = height;
            return true;
        }
        return false;
    }
    /** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */
    getPlaceholderElement() {
        return this.content.placeholder?.element;
    }
    /**
     * Zoom current slide image to...
     *
     * @param {number} destZoomLevel Destination zoom level.
     * @param {Point} [centerPoint]
     * Transform origin center point, or false if viewport center should be used.
     * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
     * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
     */
    zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
        const { pswp } = this;
        if (!this.isZoomable()
            || pswp.mainScroll.isShifted()) {
            return;
        }
        pswp.dispatch('beforeZoomTo', {
            destZoomLevel, centerPoint, transitionDuration
        });
        // stop all pan and zoom transitions
        pswp.animations.stopAllPan();
        // if (!centerPoint) {
        //   centerPoint = pswp.getViewportCenterPoint();
        // }
        const prevZoomLevel = this.currZoomLevel;
        if (!ignoreBounds) {
            destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
        }
        // if (transitionDuration === undefined) {
        //   transitionDuration = this.pswp.options.zoomAnimationDuration;
        // }
        this.setZoomLevel(destZoomLevel);
        this.pan.x = this.calculateZoomToPanOffset('x', centerPoint, prevZoomLevel);
        this.pan.y = this.calculateZoomToPanOffset('y', centerPoint, prevZoomLevel);
        roundPoint(this.pan);
        const finishTransition = () => {
            this._setResolution(destZoomLevel);
            this.applyCurrentZoomPan();
        };
        if (!transitionDuration) {
            finishTransition();
        }
        else {
            pswp.animations.startTransition({
                isPan: true,
                name: 'zoomTo',
                target: this.container,
                transform: this.getCurrentTransform(),
                onComplete: finishTransition,
                duration: transitionDuration,
                easing: pswp.options.easing
            });
        }
    }
    /**
     * @param {Point} [centerPoint]
     */
    toggleZoom(centerPoint) {
        this.zoomTo(this.currZoomLevel === this.zoomLevels.initial
            ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
    }
    /**
     * Updates zoom level property and recalculates new pan bounds,
     * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
     *
     * @param {number} currZoomLevel
     */
    setZoomLevel(currZoomLevel) {
        this.currZoomLevel = currZoomLevel;
        this.bounds.update(this.currZoomLevel);
    }
    /**
     * Get pan position after zoom at a given `point`.
     *
     * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
     * pan bounds according to the new zoom level.
     *
     * @param {'x' | 'y'} axis
     * @param {Point} [point]
     * point based on which zoom is performed, usually refers to the current mouse position,
     * if false - viewport center will be used.
     * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
     * @returns {number}
     */
    calculateZoomToPanOffset(axis, point, prevZoomLevel) {
        const totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
        if (totalPanDistance === 0) {
            return this.bounds.center[axis];
        }
        if (!point) {
            point = this.pswp.getViewportCenterPoint();
        }
        if (!prevZoomLevel) {
            prevZoomLevel = this.zoomLevels.initial;
        }
        const zoomFactor = this.currZoomLevel / prevZoomLevel;
        return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
    }
    /**
     * Apply pan and keep it within bounds.
     *
     * @param {number} panX
     * @param {number} panY
     */
    panTo(panX, panY) {
        this.pan.x = this.bounds.correctPan('x', panX);
        this.pan.y = this.bounds.correctPan('y', panY);
        this.applyCurrentZoomPan();
    }
    /**
     * If the slide in the current state can be panned by the user
     * @returns {boolean}
     */
    isPannable() {
        return Boolean(this.width) && (this.currZoomLevel > this.zoomLevels.fit);
    }
    /**
     * If the slide can be zoomed
     * @returns {boolean}
     */
    isZoomable() {
        return Boolean(this.width) && this.content.isZoomable();
    }
    /**
     * Apply transform and scale based on
     * the current pan position (this.pan) and zoom level (this.currZoomLevel)
     */
    applyCurrentZoomPan() {
        this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
        if (this === this.pswp.currSlide) {
            this.pswp.dispatch('zoomPanUpdate', { slide: this });
        }
    }
    zoomAndPanToInitial() {
        this.currZoomLevel = this.zoomLevels.initial;
        // pan according to the zoom level
        this.bounds.update(this.currZoomLevel);
        equalizePoints(this.pan, this.bounds.center);
        this.pswp.dispatch('initialZoomPan', { slide: this });
    }
    /**
     * Set translate and scale based on current resolution
     *
     * @param {number} x
     * @param {number} y
     * @param {number} zoom
     * @private
     */
    _applyZoomTransform(x, y, zoom) {
        zoom /= this.currentResolution || this.zoomLevels.initial;
        setTransform(this.container, x, y, zoom);
    }
    calculateSize() {
        const { pswp } = this;
        equalizePoints(this.panAreaSize, getPanAreaSize(pswp.options, pswp.viewportSize, this.data, this.index));
        this.zoomLevels.update(this.width, this.height, this.panAreaSize);
        pswp.dispatch('calcSlideSize', {
            slide: this
        });
    }
    /** @returns {string} */
    getCurrentTransform() {
        const scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
        return toTransformString(this.pan.x, this.pan.y, scale);
    }
    /**
     * Set resolution and re-render the image.
     *
     * For example, if the real image size is 2000x1500,
     * and resolution is 0.5 - it will be rendered as 1000x750.
     *
     * Image with zoom level 2 and resolution 0.5 is
     * the same as image with zoom level 1 and resolution 1.
     *
     * Used to optimize animations and make
     * sure that browser renders image in the highest quality.
     * Also used by responsive images to load the correct one.
     *
     * @param {number} newResolution
     */
    _setResolution(newResolution) {
        if (newResolution === this.currentResolution) {
            return;
        }
        this.currentResolution = newResolution;
        this.updateContentSize();
        this.pswp.dispatch('resolutionChanged');
    }
}
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('./gestures.js').default} Gestures */
const PAN_END_FRICTION = 0.35;
const VERTICAL_DRAG_FRICTION = 0.6;
// 1 corresponds to the third of viewport height
const MIN_RATIO_TO_CLOSE = 0.4;
// Minimum speed required to navigate
// to next or previous slide
const MIN_NEXT_SLIDE_SPEED = 0.5;
/**
 * @param {number} initialVelocity
 * @param {number} decelerationRate
 * @returns {number}
 */
function project(initialVelocity, decelerationRate) {
    return initialVelocity * decelerationRate / (1 - decelerationRate);
}
/**
 * Handles single pointer dragging
 */
class DragHandler {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures) {
        this.gestures = gestures;
        this.pswp = gestures.pswp;
        /** @type {Point} */
        this.startPan = { x: 0, y: 0 };
    }
    start() {
        if (this.pswp.currSlide) {
            equalizePoints(this.startPan, this.pswp.currSlide.pan);
        }
        this.pswp.animations.stopAll();
    }
    change() {
        const { p1, prevP1, dragAxis } = this.gestures;
        const { currSlide } = this.pswp;
        if (dragAxis === 'y'
            && this.pswp.options.closeOnVerticalDrag
            && (currSlide && currSlide.currZoomLevel <= currSlide.zoomLevels.fit)
            && !this.gestures.isMultitouch) {
            // Handle vertical drag to close
            const panY = currSlide.pan.y + (p1.y - prevP1.y);
            if (!this.pswp.dispatch('verticalDrag', { panY }).defaultPrevented) {
                this._setPanWithFriction('y', panY, VERTICAL_DRAG_FRICTION);
                const bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
                this.pswp.applyBgOpacity(bgOpacity);
                currSlide.applyCurrentZoomPan();
            }
        }
        else {
            const mainScrollChanged = this._panOrMoveMainScroll('x');
            if (!mainScrollChanged) {
                this._panOrMoveMainScroll('y');
                if (currSlide) {
                    roundPoint(currSlide.pan);
                    currSlide.applyCurrentZoomPan();
                }
            }
        }
    }
    end() {
        const { velocity } = this.gestures;
        const { mainScroll, currSlide } = this.pswp;
        let indexDiff = 0;
        this.pswp.animations.stopAll();
        // Handle main scroll if it's shifted
        if (mainScroll.isShifted()) {
            // Position of the main scroll relative to the viewport
            const mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();
            // Ratio between 0 and 1:
            // 0 - slide is not visible at all,
            // 0.5 - half of the slide is visible
            // 1 - slide is fully visible
            const currentSlideVisibilityRatio = (mainScrollShiftDiff / this.pswp.viewportSize.x);
            // Go next slide.
            //
            // - if velocity and its direction is matched,
            //   and we see at least tiny part of the next slide
            //
            // - or if we see less than 50% of the current slide
            //   and velocity is close to 0
            //
            if ((velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0)
                || (velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5)) {
                // Go to next slide
                indexDiff = 1;
                velocity.x = Math.min(velocity.x, 0);
            }
            else if ((velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0)
                || (velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5)) {
                // Go to prev slide
                indexDiff = -1;
                velocity.x = Math.max(velocity.x, 0);
            }
            mainScroll.moveIndexBy(indexDiff, true, velocity.x);
        }
        // Restore zoom level
        if ((currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.max)
            || this.gestures.isMultitouch) {
            this.gestures.zoomLevels.correctZoomPan(true);
        }
        else {
            // we run two animations instead of one,
            // as each axis has own pan boundaries and thus different spring function
            // (correctZoomPan does not have this functionality,
            //  it animates all properties with single timing function)
            this._finishPanGestureForAxis('x');
            this._finishPanGestureForAxis('y');
        }
    }
    /**
     * @private
     * @param {'x' | 'y'} axis
     */
    _finishPanGestureForAxis(axis) {
        const { velocity } = this.gestures;
        const { currSlide } = this.pswp;
        if (!currSlide) {
            return;
        }
        const { pan, bounds } = currSlide;
        const panPos = pan[axis];
        const restoreBgOpacity = (this.pswp.bgOpacity < 1 && axis === 'y');
        // 0.995 means - scroll view loses 0.5% of its velocity per millisecond
        // Increasing this number will reduce travel distance
        const decelerationRate = 0.995; // 0.99
        // Pan position if there is no bounds
        const projectedPosition = panPos + project(velocity[axis], decelerationRate);
        if (restoreBgOpacity) {
            const vDragRatio = this._getVerticalDragRatio(panPos);
            const projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);
            // If we are above and moving upwards,
            // or if we are below and moving downwards
            if ((vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE)
                || (vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE)) {
                this.pswp.close();
                return;
            }
        }
        // Pan position with corrected bounds
        const correctedPanPosition = bounds.correctPan(axis, projectedPosition);
        // Exit if pan position should not be changed
        // or if speed it too low
        if (panPos === correctedPanPosition) {
            return;
        }
        // Overshoot if the final position is out of pan bounds
        const dampingRatio = (correctedPanPosition === projectedPosition) ? 1 : 0.82;
        const initialBgOpacity = this.pswp.bgOpacity;
        const totalPanDist = correctedPanPosition - panPos;
        this.pswp.animations.startSpring({
            name: 'panGesture' + axis,
            isPan: true,
            start: panPos,
            end: correctedPanPosition,
            velocity: velocity[axis],
            dampingRatio,
            onUpdate: (pos) => {
                // Animate opacity of background relative to Y pan position of an image
                if (restoreBgOpacity && this.pswp.bgOpacity < 1) {
                    // 0 - start of animation, 1 - end of animation
                    const animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;
                    // We clamp opacity to keep it between 0 and 1.
                    // As progress ratio can be larger than 1 due to overshoot,
                    // and we do not want to bounce opacity.
                    this.pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
                }
                pan[axis] = Math.floor(pos);
                currSlide.applyCurrentZoomPan();
            },
        });
    }
    /**
     * Update position of the main scroll,
     * or/and update pan position of the current slide.
     *
     * Should return true if it changes (or can change) main scroll.
     *
     * @private
     * @param {'x' | 'y'} axis
     * @returns {boolean}
     */
    _panOrMoveMainScroll(axis) {
        const { p1, dragAxis, prevP1, isMultitouch } = this.gestures;
        const { currSlide, mainScroll } = this.pswp;
        const delta = (p1[axis] - prevP1[axis]);
        const newMainScrollX = mainScroll.x + delta;
        if (!delta || !currSlide) {
            return false;
        }
        // Always move main scroll if image can not be panned
        if (axis === 'x' && !currSlide.isPannable() && !isMultitouch) {
            mainScroll.moveTo(newMainScrollX, true);
            return true; // changed main scroll
        }
        const { bounds } = currSlide;
        const newPan = currSlide.pan[axis] + delta;
        if (this.pswp.options.allowPanToNext
            && dragAxis === 'x'
            && axis === 'x'
            && !isMultitouch) {
            const currSlideMainScrollX = mainScroll.getCurrSlideX();
            // Position of the main scroll relative to the viewport
            const mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
            const isLeftToRight = delta > 0;
            const isRightToLeft = !isLeftToRight;
            if (newPan > bounds.min[axis] && isLeftToRight) {
                // Panning from left to right, beyond the left edge
                // Wether the image was at minimum pan position (or less)
                // when this drag gesture started.
                // Minimum pan position refers to the left edge of the image.
                const wasAtMinPanPosition = (bounds.min[axis] <= this.startPan[axis]);
                if (wasAtMinPanPosition) {
                    mainScroll.moveTo(newMainScrollX, true);
                    return true;
                }
                else {
                    this._setPanWithFriction(axis, newPan);
                    //currSlide.pan[axis] = newPan;
                }
            }
            else if (newPan < bounds.max[axis] && isRightToLeft) {
                // Paning from right to left, beyond the right edge
                // Maximum pan position refers to the right edge of the image.
                const wasAtMaxPanPosition = (this.startPan[axis] <= bounds.max[axis]);
                if (wasAtMaxPanPosition) {
                    mainScroll.moveTo(newMainScrollX, true);
                    return true;
                }
                else {
                    this._setPanWithFriction(axis, newPan);
                    //currSlide.pan[axis] = newPan;
                }
            }
            else {
                // If main scroll is shifted
                if (mainScrollShiftDiff !== 0) {
                    // If main scroll is shifted right
                    if (mainScrollShiftDiff > 0 /*&& isRightToLeft*/) {
                        mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
                        return true;
                    }
                    else if (mainScrollShiftDiff < 0 /*&& isLeftToRight*/) {
                        // Main scroll is shifted left (Position is less than 0 comparing to the viewport 0)
                        mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
                        return true;
                    }
                }
                else {
                    // We are within pan bounds, so just pan
                    this._setPanWithFriction(axis, newPan);
                }
            }
        }
        else {
            if (axis === 'y') {
                // Do not pan vertically if main scroll is shifted o
                if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
                    this._setPanWithFriction(axis, newPan);
                }
            }
            else {
                this._setPanWithFriction(axis, newPan);
            }
        }
        return false;
    }
    // If we move above - the ratio is negative
    // If we move below the ratio is positive
    /**
     * Relation between pan Y position and third of viewport height.
     *
     * When we are at initial position (center bounds) - the ratio is 0,
     * if position is shifted upwards - the ratio is negative,
     * if position is shifted downwards - the ratio is positive.
     *
     * @private
     * @param {number} panY The current pan Y position.
     * @returns {number}
     */
    _getVerticalDragRatio(panY) {
        return (panY - (this.pswp.currSlide?.bounds.center.y ?? 0)) / (this.pswp.viewportSize.y / 3);
    }
    /**
     * Set pan position of the current slide.
     * Apply friction if the position is beyond the pan bounds,
     * or if custom friction is defined.
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} potentialPan
     * @param {number} [customFriction] (0.1 - 1)
     */
    _setPanWithFriction(axis, potentialPan, customFriction) {
        const { currSlide } = this.pswp;
        if (!currSlide) {
            return;
        }
        const { pan, bounds } = currSlide;
        const correctedPan = bounds.correctPan(axis, potentialPan);
        // If we are out of pan bounds
        if (correctedPan !== potentialPan || customFriction) {
            const delta = Math.round(potentialPan - pan[axis]);
            pan[axis] += delta * (customFriction || PAN_END_FRICTION);
        }
        else {
            pan[axis] = potentialPan;
        }
    }
}
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {import('./gestures.js').default} Gestures */
const UPPER_ZOOM_FRICTION = 0.05;
const LOWER_ZOOM_FRICTION = 0.15;
/**
 * Get center point between two points
 *
 * @param {Point} p
 * @param {Point} p1
 * @param {Point} p2
 * @returns {Point}
 */
function getZoomPointsCenter(p, p1, p2) {
    p.x = (p1.x + p2.x) / 2;
    p.y = (p1.y + p2.y) / 2;
    return p;
}
class ZoomHandler {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures) {
        this.gestures = gestures;
        /**
         * @private
         * @type {Point}
         */
        this._startPan = { x: 0, y: 0 };
        /**
         * @private
         * @type {Point}
         */
        this._startZoomPoint = { x: 0, y: 0 };
        /**
         * @private
         * @type {Point}
         */
        this._zoomPoint = { x: 0, y: 0 };
        /** @private */
        this._wasOverFitZoomLevel = false;
        /** @private */
        this._startZoomLevel = 1;
    }
    start() {
        const { currSlide } = this.gestures.pswp;
        if (currSlide) {
            this._startZoomLevel = currSlide.currZoomLevel;
            equalizePoints(this._startPan, currSlide.pan);
        }
        this.gestures.pswp.animations.stopAllPan();
        this._wasOverFitZoomLevel = false;
    }
    change() {
        const { p1, startP1, p2, startP2, pswp } = this.gestures;
        const { currSlide } = pswp;
        if (!currSlide) {
            return;
        }
        const minZoomLevel = currSlide.zoomLevels.min;
        const maxZoomLevel = currSlide.zoomLevels.max;
        if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
            return;
        }
        getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
        getZoomPointsCenter(this._zoomPoint, p1, p2);
        let currZoomLevel = (1 / getDistanceBetween(startP1, startP2))
            * getDistanceBetween(p1, p2)
            * this._startZoomLevel;
        // slightly over the zoom.fit
        if (currZoomLevel > currSlide.zoomLevels.initial + (currSlide.zoomLevels.initial / 15)) {
            this._wasOverFitZoomLevel = true;
        }
        if (currZoomLevel < minZoomLevel) {
            if (pswp.options.pinchToClose
                && !this._wasOverFitZoomLevel
                && this._startZoomLevel <= currSlide.zoomLevels.initial) {
                // fade out background if zooming out
                const bgOpacity = 1 - ((minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2));
                if (!pswp.dispatch('pinchClose', { bgOpacity }).defaultPrevented) {
                    pswp.applyBgOpacity(bgOpacity);
                }
            }
            else {
                // Apply the friction if zoom level is below the min
                currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
            }
        }
        else if (currZoomLevel > maxZoomLevel) {
            // Apply the friction if zoom level is above the max
            currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
        }
        currSlide.pan.x = this._calculatePanForZoomLevel('x', currZoomLevel);
        currSlide.pan.y = this._calculatePanForZoomLevel('y', currZoomLevel);
        currSlide.setZoomLevel(currZoomLevel);
        currSlide.applyCurrentZoomPan();
    }
    end() {
        const { pswp } = this.gestures;
        const { currSlide } = pswp;
        if ((!currSlide || currSlide.currZoomLevel < currSlide.zoomLevels.initial)
            && !this._wasOverFitZoomLevel
            && pswp.options.pinchToClose) {
            pswp.close();
        }
        else {
            this.correctZoomPan();
        }
    }
    /**
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} currZoomLevel
     * @returns {number}
     */
    _calculatePanForZoomLevel(axis, currZoomLevel) {
        const zoomFactor = currZoomLevel / this._startZoomLevel;
        return this._zoomPoint[axis]
            - ((this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor);
    }
    /**
     * Correct currZoomLevel and pan if they are
     * beyond minimum or maximum values.
     * With animation.
     *
     * @param {boolean} [ignoreGesture]
     * Wether gesture coordinates should be ignored when calculating destination pan position.
     */
    correctZoomPan(ignoreGesture) {
        const { pswp } = this.gestures;
        const { currSlide } = pswp;
        if (!currSlide?.isZoomable()) {
            return;
        }
        if (this._zoomPoint.x === 0) {
            ignoreGesture = true;
        }
        const prevZoomLevel = currSlide.currZoomLevel;
        /** @type {number} */
        let destinationZoomLevel;
        let currZoomLevelNeedsChange = true;
        if (prevZoomLevel < currSlide.zoomLevels.initial) {
            destinationZoomLevel = currSlide.zoomLevels.initial;
            // zoom to min
        }
        else if (prevZoomLevel > currSlide.zoomLevels.max) {
            destinationZoomLevel = currSlide.zoomLevels.max;
            // zoom to max
        }
        else {
            currZoomLevelNeedsChange = false;
            destinationZoomLevel = prevZoomLevel;
        }
        const initialBgOpacity = pswp.bgOpacity;
        const restoreBgOpacity = pswp.bgOpacity < 1;
        const initialPan = equalizePoints({ x: 0, y: 0 }, currSlide.pan);
        let destinationPan = equalizePoints({ x: 0, y: 0 }, initialPan);
        if (ignoreGesture) {
            this._zoomPoint.x = 0;
            this._zoomPoint.y = 0;
            this._startZoomPoint.x = 0;
            this._startZoomPoint.y = 0;
            this._startZoomLevel = prevZoomLevel;
            equalizePoints(this._startPan, initialPan);
        }
        if (currZoomLevelNeedsChange) {
            destinationPan = {
                x: this._calculatePanForZoomLevel('x', destinationZoomLevel),
                y: this._calculatePanForZoomLevel('y', destinationZoomLevel)
            };
        }
        // set zoom level, so pan bounds are updated according to it
        currSlide.setZoomLevel(destinationZoomLevel);
        destinationPan = {
            x: currSlide.bounds.correctPan('x', destinationPan.x),
            y: currSlide.bounds.correctPan('y', destinationPan.y)
        };
        // return zoom level and its bounds to initial
        currSlide.setZoomLevel(prevZoomLevel);
        const panNeedsChange = !pointsEqual(destinationPan, initialPan);
        if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
            // update resolution after gesture
            currSlide._setResolution(destinationZoomLevel);
            currSlide.applyCurrentZoomPan();
            // nothing to animate
            return;
        }
        pswp.animations.stopAllPan();
        pswp.animations.startSpring({
            isPan: true,
            start: 0,
            end: 1000,
            velocity: 0,
            dampingRatio: 1,
            naturalFrequency: 40,
            onUpdate: (now) => {
                now /= 1000; // 0 - start, 1 - end
                if (panNeedsChange || currZoomLevelNeedsChange) {
                    if (panNeedsChange) {
                        currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now;
                        currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now;
                    }
                    if (currZoomLevelNeedsChange) {
                        const newZoomLevel = prevZoomLevel
                            + (destinationZoomLevel - prevZoomLevel) * now;
                        currSlide.setZoomLevel(newZoomLevel);
                    }
                    currSlide.applyCurrentZoomPan();
                }
                // Restore background opacity
                if (restoreBgOpacity && pswp.bgOpacity < 1) {
                    // We clamp opacity to keep it between 0 and 1.
                    // As progress ratio can be larger than 1 due to overshoot,
                    // and we do not want to bounce opacity.
                    pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now, 0, 1));
                }
            },
            onComplete: () => {
                // update resolution after transition ends
                currSlide._setResolution(destinationZoomLevel);
                currSlide.applyCurrentZoomPan();
            }
        });
    }
}
/**
 * @template T, P
 * @typedef {import('../types.js').AddPostfix<T, P>} AddPostfix<T, P>
 */
/** @typedef {import('./gestures.js').default} Gestures */
/** @typedef {import('../photoswipe.js').Point} Point */
/** @typedef {'imageClick' | 'bgClick' | 'tap' | 'doubleTap'} Actions */
/**
 * Whether the tap was performed on the main slide
 * (rather than controls or caption).
 *
 * @param {PointerEvent} event
 * @returns {boolean}
 */
function didTapOnMainContent(event) {
    return !!( /** @type {HTMLElement} */(event.target).closest('.pswp__container'));
}
/**
 * Tap, double-tap handler.
 */
class TapHandler {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures) {
        this.gestures = gestures;
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    click(point, originalEvent) {
        const targetClassList = /** @type {HTMLElement} */ (originalEvent.target).classList;
        const isImageClick = targetClassList.contains('pswp__img');
        const isBackgroundClick = targetClassList.contains('pswp__item')
            || targetClassList.contains('pswp__zoom-wrap');
        if (isImageClick) {
            this._doClickOrTapAction('imageClick', point, originalEvent);
        }
        else if (isBackgroundClick) {
            this._doClickOrTapAction('bgClick', point, originalEvent);
        }
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    tap(point, originalEvent) {
        if (didTapOnMainContent(originalEvent)) {
            this._doClickOrTapAction('tap', point, originalEvent);
        }
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    doubleTap(point, originalEvent) {
        if (didTapOnMainContent(originalEvent)) {
            this._doClickOrTapAction('doubleTap', point, originalEvent);
        }
    }
    /**
     * @private
     * @param {Actions} actionName
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    _doClickOrTapAction(actionName, point, originalEvent) {
        const { pswp } = this.gestures;
        const { currSlide } = pswp;
        const actionFullName = /** @type {AddPostfix<Actions, 'Action'>} */ (actionName + 'Action');
        const optionValue = pswp.options[actionFullName];
        if (pswp.dispatch(actionFullName, { point, originalEvent }).defaultPrevented) {
            return;
        }
        if (typeof optionValue === 'function') {
            optionValue.call(pswp, point, originalEvent);
            return;
        }
        switch (optionValue) {
            case 'close':
            case 'next':
                pswp[optionValue]();
                break;
            case 'zoom':
                currSlide?.toggleZoom(point);
                break;
            case 'zoom-or-close':
                // by default click zooms current image,
                // if it can not be zoomed - gallery will be closed
                if (currSlide?.isZoomable()
                    && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
                    currSlide.toggleZoom(point);
                }
                else if (pswp.options.clickToCloseNonZoomable) {
                    pswp.close();
                }
                break;
            case 'toggle-controls':
                this.gestures.pswp.element?.classList.toggle('pswp--ui-visible');
                // if (_controlsVisible) {
                //   _ui.hideControls();
                // } else {
                //   _ui.showControls();
                // }
                break;
        }
    }
}
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').Point} Point */
// How far should user should drag
// until we can determine that the gesture is swipe and its direction
const AXIS_SWIPE_HYSTERISIS = 10;
//const PAN_END_FRICTION = 0.35;
const DOUBLE_TAP_DELAY = 300; // ms
const MIN_TAP_DISTANCE = 25; // px
/**
 * Gestures class bind touch, pointer or mouse events
 * and emits drag to drag-handler and zoom events zoom-handler.
 *
 * Drag and zoom events are emited in requestAnimationFrame,
 * and only when one of pointers was actually changed.
 */
class Gestures {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
        this.pswp = pswp;
        /** @type {'x' | 'y' | null} */
        this.dragAxis = null;
        // point objects are defined once and reused
        // PhotoSwipe keeps track only of two pointers, others are ignored
        /** @type {Point} */
        this.p1 = { x: 0, y: 0 }; // the first pressed pointer
        /** @type {Point} */
        this.p2 = { x: 0, y: 0 }; // the second pressed pointer
        /** @type {Point} */
        this.prevP1 = { x: 0, y: 0 };
        /** @type {Point} */
        this.prevP2 = { x: 0, y: 0 };
        /** @type {Point} */
        this.startP1 = { x: 0, y: 0 };
        /** @type {Point} */
        this.startP2 = { x: 0, y: 0 };
        /** @type {Point} */
        this.velocity = { x: 0, y: 0 };
        /** @type {Point}
         * @private
         */
        this._lastStartP1 = { x: 0, y: 0 };
        /** @type {Point}
         * @private
         */
        this._intervalP1 = { x: 0, y: 0 };
        /** @private */
        this._numActivePoints = 0;
        /** @type {Point[]}
         * @private
         */
        this._ongoingPointers = [];
        /** @private */
        this._touchEventEnabled = 'ontouchstart' in window;
        /** @private */
        this._pointerEventEnabled = !!(window.PointerEvent);
        this.supportsTouch = this._touchEventEnabled
            || (this._pointerEventEnabled && navigator.maxTouchPoints > 1);
        /** @private */
        this._numActivePoints = 0;
        /** @private */
        this._intervalTime = 0;
        /** @private */
        this._velocityCalculated = false;
        this.isMultitouch = false;
        this.isDragging = false;
        this.isZooming = false;
        /** @type {number | null} */
        this.raf = null;
        /** @type {NodeJS.Timeout | null}
         * @private
         */
        this._tapTimer = null;
        if (!this.supportsTouch) {
            // disable pan to next slide for non-touch devices
            pswp.options.allowPanToNext = false;
        }
        this.drag = new DragHandler(this);
        this.zoomLevels = new ZoomHandler(this);
        this.tapHandler = new TapHandler(this);
        pswp.on('bindEvents', () => {
            pswp.events.add(pswp.scrollWrap, 'click', 
            /** @type EventListener */ (this._onClick.bind(this)));
            if (this._pointerEventEnabled) {
                this._bindEvents('pointer', 'down', 'up', 'cancel');
            }
            else if (this._touchEventEnabled) {
                this._bindEvents('touch', 'start', 'end', 'cancel');
                // In previous versions we also bound mouse event here,
                // in case device supports both touch and mouse events,
                // but newer versions of browsers now support PointerEvent.
                // on iOS10 if you bind touchmove/end after touchstart,
                // and you don't preventDefault touchstart (which PhotoSwipe does),
                // preventDefault will have no effect on touchmove and touchend.
                // Unless you bind it previously.
                if (pswp.scrollWrap) {
                    pswp.scrollWrap.ontouchmove = () => { };
                    pswp.scrollWrap.ontouchend = () => { };
                }
            }
            else {
                this._bindEvents('mouse', 'down', 'up');
            }
        });
    }
    /**
     * @private
     * @param {'mouse' | 'touch' | 'pointer'} pref
     * @param {'down' | 'start'} down
     * @param {'up' | 'end'} up
     * @param {'cancel'} [cancel]
     */
    _bindEvents(pref, down, up, cancel) {
        const { pswp } = this;
        const { events } = pswp;
        const cancelEvent = cancel ? pref + cancel : '';
        events.add(pswp.scrollWrap, pref + down, 
        /** @type EventListener */ (this.onPointerDown.bind(this)));
        events.add(window, pref + 'move', /** @type EventListener */ (this.onPointerMove.bind(this)));
        events.add(window, pref + up, /** @type EventListener */ (this.onPointerUp.bind(this)));
        if (cancelEvent) {
            events.add(pswp.scrollWrap, cancelEvent, 
            /** @type EventListener */ (this.onPointerUp.bind(this)));
        }
    }
    /**
     * @param {PointerEvent} e
     */
    onPointerDown(e) {
        // We do not call preventDefault for touch events
        // to allow browser to show native dialog on longpress
        // (the one that allows to save image or open it in new tab).
        //
        // Desktop Safari allows to drag images when preventDefault isn't called on mousedown,
        // even though preventDefault IS called on mousemove. That's why we preventDefault mousedown.
        const isMousePointer = e.type === 'mousedown' || e.pointerType === 'mouse';
        // Allow dragging only via left mouse button.
        // http://www.quirksmode.org/js/events_properties.html
        // https://developer.mozilla.org/en-US/docs/Web/API/event.button
        if (isMousePointer && e.button > 0) {
            return;
        }
        const { pswp } = this;
        // if PhotoSwipe is opening or closing
        if (!pswp.opener.isOpen) {
            e.preventDefault();
            return;
        }
        if (pswp.dispatch('pointerDown', { originalEvent: e }).defaultPrevented) {
            return;
        }
        if (isMousePointer) {
            pswp.mouseDetected();
            // preventDefault mouse event to prevent
            // browser image drag feature
            this._preventPointerEventBehaviour(e);
        }
        pswp.animations.stopAll();
        this._updatePoints(e, 'down');
        if (this._numActivePoints === 1) {
            this.dragAxis = null;
            // we need to store initial point to determine the main axis,
            // drag is activated only after the axis is determined
            equalizePoints(this.startP1, this.p1);
        }
        if (this._numActivePoints > 1) {
            // Tap or double tap should not trigger if more than one pointer
            this._clearTapTimer();
            this.isMultitouch = true;
        }
        else {
            this.isMultitouch = false;
        }
    }
    /**
     * @param {PointerEvent} e
     */
    onPointerMove(e) {
        e.preventDefault(); // always preventDefault move event
        if (!this._numActivePoints) {
            return;
        }
        this._updatePoints(e, 'move');
        if (this.pswp.dispatch('pointerMove', { originalEvent: e }).defaultPrevented) {
            return;
        }
        if (this._numActivePoints === 1 && !this.isDragging) {
            if (!this.dragAxis) {
                this._calculateDragDirection();
            }
            // Drag axis was detected, emit drag.start
            if (this.dragAxis && !this.isDragging) {
                if (this.isZooming) {
                    this.isZooming = false;
                    this.zoomLevels.end();
                }
                this.isDragging = true;
                this._clearTapTimer(); // Tap can not trigger after drag
                // Adjust starting point
                this._updateStartPoints();
                this._intervalTime = Date.now();
                //this._startTime = this._intervalTime;
                this._velocityCalculated = false;
                equalizePoints(this._intervalP1, this.p1);
                this.velocity.x = 0;
                this.velocity.y = 0;
                this.drag.start();
                this._rafStopLoop();
                this._rafRenderLoop();
            }
        }
        else if (this._numActivePoints > 1 && !this.isZooming) {
            this._finishDrag();
            this.isZooming = true;
            // Adjust starting points
            this._updateStartPoints();
            this.zoomLevels.start();
            this._rafStopLoop();
            this._rafRenderLoop();
        }
    }
    /**
     * @private
     */
    _finishDrag() {
        if (this.isDragging) {
            this.isDragging = false;
            // Try to calculate velocity,
            // if it wasn't calculated yet in drag.change
            if (!this._velocityCalculated) {
                this._updateVelocity(true);
            }
            this.drag.end();
            this.dragAxis = null;
        }
    }
    /**
     * @param {PointerEvent} e
     */
    onPointerUp(e) {
        if (!this._numActivePoints) {
            return;
        }
        this._updatePoints(e, 'up');
        if (this.pswp.dispatch('pointerUp', { originalEvent: e }).defaultPrevented) {
            return;
        }
        if (this._numActivePoints === 0) {
            this._rafStopLoop();
            if (this.isDragging) {
                this._finishDrag();
            }
            else if (!this.isZooming && !this.isMultitouch) {
                //this.zoomLevels.correctZoomPan();
                this._finishTap(e);
            }
        }
        if (this._numActivePoints < 2 && this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
            if (this._numActivePoints === 1) {
                // Since we have 1 point left, we need to reinitiate drag
                this.dragAxis = null;
                this._updateStartPoints();
            }
        }
    }
    /**
     * @private
     */
    _rafRenderLoop() {
        if (this.isDragging || this.isZooming) {
            this._updateVelocity();
            if (this.isDragging) {
                // make sure that pointer moved since the last update
                if (!pointsEqual(this.p1, this.prevP1)) {
                    this.drag.change();
                }
            }
            else /* if (this.isZooming) */ {
                if (!pointsEqual(this.p1, this.prevP1)
                    || !pointsEqual(this.p2, this.prevP2)) {
                    this.zoomLevels.change();
                }
            }
            this._updatePrevPoints();
            this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
        }
    }
    /**
     * Update velocity at 50ms interval
     *
     * @private
     * @param {boolean} [force]
     */
    _updateVelocity(force) {
        const time = Date.now();
        const duration = time - this._intervalTime;
        if (duration < 50 && !force) {
            return;
        }
        this.velocity.x = this._getVelocity('x', duration);
        this.velocity.y = this._getVelocity('y', duration);
        this._intervalTime = time;
        equalizePoints(this._intervalP1, this.p1);
        this._velocityCalculated = true;
    }
    /**
     * @private
     * @param {PointerEvent} e
     */
    _finishTap(e) {
        const { mainScroll } = this.pswp;
        // Do not trigger tap events if main scroll is shifted
        if (mainScroll.isShifted()) {
            // restore main scroll position
            // (usually happens if stopped in the middle of animation)
            mainScroll.moveIndexBy(0, true);
            return;
        }
        // Do not trigger tap for touchcancel or pointercancel
        if (e.type.indexOf('cancel') > 0) {
            return;
        }
        // Trigger click instead of tap for mouse events
        if (e.type === 'mouseup' || e.pointerType === 'mouse') {
            this.tapHandler.click(this.startP1, e);
            return;
        }
        // Disable delay if there is no doubleTapAction
        const tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;
        // If tapTimer is defined - we tapped recently,
        // check if the current tap is close to the previous one,
        // if yes - trigger double tap
        if (this._tapTimer) {
            this._clearTapTimer();
            // Check if two taps were more or less on the same place
            if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
                this.tapHandler.doubleTap(this.startP1, e);
            }
        }
        else {
            equalizePoints(this._lastStartP1, this.startP1);
            this._tapTimer = setTimeout(() => {
                this.tapHandler.tap(this.startP1, e);
                this._clearTapTimer();
            }, tapDelay);
        }
    }
    /**
     * @private
     */
    _clearTapTimer() {
        if (this._tapTimer) {
            clearTimeout(this._tapTimer);
            this._tapTimer = null;
        }
    }
    /**
     * Get velocity for axis
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} duration
     * @returns {number}
     */
    _getVelocity(axis, duration) {
        // displacement is like distance, but can be negative.
        const displacement = this.p1[axis] - this._intervalP1[axis];
        if (Math.abs(displacement) > 1 && duration > 5) {
            return displacement / duration;
        }
        return 0;
    }
    /**
     * @private
     */
    _rafStopLoop() {
        if (this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
        }
    }
    /**
     * @private
     * @param {PointerEvent} e
     */
    _preventPointerEventBehaviour(e) {
        // Dmytro Semenov find a way to disable e.preventDefault on some elements
        //      via event or some class or something
        e.preventDefault();
    }
    /**
     * Parses and normalizes points from the touch, mouse or pointer event.
     * Updates p1 and p2.
     *
     * @private
     * @param {PointerEvent | TouchEvent} e
     * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
     */
    _updatePoints(e, pointerType) {
        if (this._pointerEventEnabled) {
            const pointerEvent = /** @type {PointerEvent} */ (e);
            // Try to find the current pointer in ongoing pointers by its ID
            const pointerIndex = this._ongoingPointers.findIndex((ongoingPointer) => {
                return ongoingPointer.id === pointerEvent.pointerId;
            });
            if (pointerType === 'up' && pointerIndex > -1) {
                // release the pointer - remove it from ongoing
                this._ongoingPointers.splice(pointerIndex, 1);
            }
            else if (pointerType === 'down' && pointerIndex === -1) {
                // add new pointer
                this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, { x: 0, y: 0 }));
            }
            else if (pointerIndex > -1) {
                // update existing pointer
                this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
            }
            this._numActivePoints = this._ongoingPointers.length;
            // update points that PhotoSwipe uses
            // to calculate position and scale
            if (this._numActivePoints > 0) {
                equalizePoints(this.p1, this._ongoingPointers[0]);
            }
            if (this._numActivePoints > 1) {
                equalizePoints(this.p2, this._ongoingPointers[1]);
            }
        }
        else {
            const touchEvent = /** @type {TouchEvent} */ (e);
            this._numActivePoints = 0;
            if (touchEvent.type.indexOf('touch') > -1) {
                // Touch Event
                // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
                if (touchEvent.touches && touchEvent.touches.length > 0) {
                    this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
                    this._numActivePoints++;
                    if (touchEvent.touches.length > 1) {
                        this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
                        this._numActivePoints++;
                    }
                }
            }
            else {
                // Mouse Event
                this._convertEventPosToPoint(/** @type {PointerEvent} */ (e), this.p1);
                if (pointerType === 'up') {
                    // clear all points on mouseup
                    this._numActivePoints = 0;
                }
                else {
                    this._numActivePoints++;
                }
            }
        }
    }
    /** update points that were used during previous rAF tick
     * @private
     */
    _updatePrevPoints() {
        equalizePoints(this.prevP1, this.p1);
        equalizePoints(this.prevP2, this.p2);
    }
    /** update points at the start of gesture
     * @private
     */
    _updateStartPoints() {
        equalizePoints(this.startP1, this.p1);
        equalizePoints(this.startP2, this.p2);
        this._updatePrevPoints();
    }
    /** @private */
    _calculateDragDirection() {
        if (this.pswp.mainScroll.isShifted()) {
            // if main scroll position is shifted – direction is always horizontal
            this.dragAxis = 'x';
        }
        else {
            // calculate delta of the last touchmove tick
            const diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
            if (diff !== 0) {
                // check if pointer was shifted horizontally or vertically
                const axisToCheck = diff > 0 ? 'x' : 'y';
                if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
                    this.dragAxis = axisToCheck;
                }
            }
        }
    }
    /**
     * Converts touch, pointer or mouse event
     * to PhotoSwipe point.
     *
     * @private
     * @param {Touch | PointerEvent} e
     * @param {Point} p
     * @returns {Point}
     */
    _convertEventPosToPoint(e, p) {
        p.x = e.pageX - this.pswp.offset.x;
        p.y = e.pageY - this.pswp.offset.y;
        if ('pointerId' in e) {
            p.id = e.pointerId;
        }
        else if (e.identifier !== undefined) {
            p.id = e.identifier;
        }
        return p;
    }
    /**
     * @private
     * @param {PointerEvent} e
     */
    _onClick(e) {
        // Do not allow click event to pass through after drag
        if (this.pswp.mainScroll.isShifted()) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./slide/slide.js').default} Slide */
/** @typedef {{ el: HTMLDivElement; slide?: Slide }} ItemHolder */
const MAIN_SCROLL_END_FRICTION = 0.35;
// const MIN_SWIPE_TRANSITION_DURATION = 250;
// const MAX_SWIPE_TRABSITION_DURATION = 500;
// const DEFAULT_SWIPE_TRANSITION_DURATION = 333;
/**
 * Handles movement of the main scrolling container
 * (for example, it repositions when user swipes left or right).
 *
 * Also stores its state.
 */
class MainScroll {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
        this.pswp = pswp;
        this.x = 0;
        this.slideWidth = 0;
        /** @private */
        this._currPositionIndex = 0;
        /** @private */
        this._prevPositionIndex = 0;
        /** @private */
        this._containerShiftIndex = -1;
        /** @type {ItemHolder[]} */
        this.itemHolders = [];
    }
    /**
     * Position the scroller and slide containers
     * according to viewport size.
     *
     * @param {boolean} [resizeSlides] Whether slides content should resized
     */
    resize(resizeSlides) {
        const { pswp } = this;
        const newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
        // Mobile browsers might trigger a resize event during a gesture.
        // (due to toolbar appearing or hiding).
        // Avoid re-adjusting main scroll position if width wasn't changed
        const slideWidthChanged = (newSlideWidth !== this.slideWidth);
        if (slideWidthChanged) {
            this.slideWidth = newSlideWidth;
            this.moveTo(this.getCurrSlideX());
        }
        this.itemHolders.forEach((itemHolder, index) => {
            if (slideWidthChanged) {
                setTransform(itemHolder.el, (index + this._containerShiftIndex)
                    * this.slideWidth);
            }
            if (resizeSlides && itemHolder.slide) {
                itemHolder.slide.resize();
            }
        });
    }
    /**
     * Reset X position of the main scroller to zero
     */
    resetPosition() {
        // Position on the main scroller (offset)
        // it is independent from slide index
        this._currPositionIndex = 0;
        this._prevPositionIndex = 0;
        // This will force recalculation of size on next resize()
        this.slideWidth = 0;
        // _containerShiftIndex*viewportSize will give you amount of transform of the current slide
        this._containerShiftIndex = -1;
    }
    /**
     * Create and append array of three items
     * that hold data about slides in DOM
     */
    appendHolders() {
        this.itemHolders = [];
        // append our three slide holders -
        // previous, current, and next
        for (let i = 0; i < 3; i++) {
            const el = createElement('pswp__item', 'div', this.pswp.container);
            el.setAttribute('role', 'group');
            el.setAttribute('aria-roledescription', 'slide');
            el.setAttribute('aria-hidden', 'true');
            // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
            el.style.display = (i === 1) ? 'block' : 'none';
            this.itemHolders.push({
                el,
                //index: -1
            });
        }
    }
    /**
     * Whether the main scroll can be horizontally swiped to the next or previous slide.
     * @returns {boolean}
     */
    canBeSwiped() {
        return this.pswp.getNumItems() > 1;
    }
    /**
     * Move main scroll by X amount of slides.
     * For example:
     *   `-1` will move to the previous slide,
     *    `0` will reset the scroll position of the current slide,
     *    `3` will move three slides forward
     *
     * If loop option is enabled - index will be automatically looped too,
     * (for example `-1` will move to the last slide of the gallery).
     *
     * @param {number} diff
     * @param {boolean} [animate]
     * @param {number} [velocityX]
     * @returns {boolean} whether index was changed or not
     */
    moveIndexBy(diff, animate, velocityX) {
        const { pswp } = this;
        let newIndex = pswp.potentialIndex + diff;
        const numSlides = pswp.getNumItems();
        if (pswp.canLoop()) {
            newIndex = pswp.getLoopedIndex(newIndex);
            const distance = (diff + numSlides) % numSlides;
            if (distance <= numSlides / 2) {
                // go forward
                diff = distance;
            }
            else {
                // go backwards
                diff = distance - numSlides;
            }
        }
        else {
            if (newIndex < 0) {
                newIndex = 0;
            }
            else if (newIndex >= numSlides) {
                newIndex = numSlides - 1;
            }
            diff = newIndex - pswp.potentialIndex;
        }
        pswp.potentialIndex = newIndex;
        this._currPositionIndex -= diff;
        pswp.animations.stopMainScroll();
        const destinationX = this.getCurrSlideX();
        if (!animate) {
            this.moveTo(destinationX);
            this.updateCurrItem();
        }
        else {
            pswp.animations.startSpring({
                isMainScroll: true,
                start: this.x,
                end: destinationX,
                velocity: velocityX || 0,
                naturalFrequency: 30,
                dampingRatio: 1,
                onUpdate: (x) => {
                    this.moveTo(x);
                },
                onComplete: () => {
                    this.updateCurrItem();
                    pswp.appendHeavy();
                }
            });
            let currDiff = pswp.potentialIndex - pswp.currIndex;
            if (pswp.canLoop()) {
                const currDistance = (currDiff + numSlides) % numSlides;
                if (currDistance <= numSlides / 2) {
                    // go forward
                    currDiff = currDistance;
                }
                else {
                    // go backwards
                    currDiff = currDistance - numSlides;
                }
            }
            // Force-append new slides during transition
            // if difference between slides is more than 1
            if (Math.abs(currDiff) > 1) {
                this.updateCurrItem();
            }
        }
        return Boolean(diff);
    }
    /**
     * X position of the main scroll for the current slide
     * (ignores position during dragging)
     * @returns {number}
     */
    getCurrSlideX() {
        return this.slideWidth * this._currPositionIndex;
    }
    /**
     * Whether scroll position is shifted.
     * For example, it will return true if the scroll is being dragged or animated.
     * @returns {boolean}
     */
    isShifted() {
        return this.x !== this.getCurrSlideX();
    }
    /**
     * Update slides X positions and set their content
     */
    updateCurrItem() {
        const { pswp } = this;
        const positionDifference = this._prevPositionIndex - this._currPositionIndex;
        if (!positionDifference) {
            return;
        }
        this._prevPositionIndex = this._currPositionIndex;
        pswp.currIndex = pswp.potentialIndex;
        let diffAbs = Math.abs(positionDifference);
        /** @type {ItemHolder | undefined} */
        let tempHolder;
        if (diffAbs >= 3) {
            this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
            diffAbs = 3;
        }
        for (let i = 0; i < diffAbs; i++) {
            if (positionDifference > 0) {
                tempHolder = this.itemHolders.shift();
                if (tempHolder) {
                    this.itemHolders[2] = tempHolder; // move first to last
                    this._containerShiftIndex++;
                    setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
                    pswp.setContent(tempHolder, (pswp.currIndex - diffAbs) + i + 2);
                }
            }
            else {
                tempHolder = this.itemHolders.pop();
                if (tempHolder) {
                    this.itemHolders.unshift(tempHolder); // move last to first
                    this._containerShiftIndex--;
                    setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
                    pswp.setContent(tempHolder, (pswp.currIndex + diffAbs) - i - 2);
                }
            }
        }
        // Reset transfrom every 50ish navigations in one direction.
        //
        // Otherwise transform will keep growing indefinitely,
        // which might cause issues as browsers have a maximum transform limit.
        // I wasn't able to reach it, but just to be safe.
        // This should not cause noticable lag.
        if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
            this.resetPosition();
            this.resize();
        }
        // Pan transition might be running (and consntantly updating pan position)
        pswp.animations.stopAllPan();
        this.itemHolders.forEach((itemHolder, i) => {
            if (itemHolder.slide) {
                // Slide in the 2nd holder is always active
                itemHolder.slide.setIsActive(i === 1);
            }
        });
        pswp.currSlide = this.itemHolders[1]?.slide;
        pswp.contentLoader.updateLazy(positionDifference);
        if (pswp.currSlide) {
            pswp.currSlide.applyCurrentZoomPan();
        }
        pswp.dispatch('change');
    }
    /**
     * Move the X position of the main scroll container
     *
     * @param {number} x
     * @param {boolean} [dragging]
     */
    moveTo(x, dragging) {
        if (!this.pswp.canLoop() && dragging) {
            // Apply friction
            let newSlideIndexOffset = ((this.slideWidth * this._currPositionIndex) - x) / this.slideWidth;
            newSlideIndexOffset += this.pswp.currIndex;
            const delta = Math.round(x - this.x);
            if ((newSlideIndexOffset < 0 && delta > 0)
                || (newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0)) {
                x = this.x + (delta * MAIN_SCROLL_END_FRICTION);
            }
        }
        this.x = x;
        if (this.pswp.container) {
            setTransform(this.pswp.container, x);
        }
        this.pswp.dispatch('moveMainScroll', { x, dragging: dragging ?? false });
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * @template T
 * @typedef {import('./types.js').Methods<T>} Methods<T>
 */
const KeyboardKeyCodesMap = {
    Escape: 27,
    z: 90,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
    Tab: 9,
};
/**
 * @template {keyof KeyboardKeyCodesMap} T
 * @param {T} key
 * @param {boolean} isKeySupported
 * @returns {T | number | undefined}
 */
const getKeyboardEventKey = (key, isKeySupported) => {
    return isKeySupported ? key : KeyboardKeyCodesMap[key];
};
/**
 * - Manages keyboard shortcuts.
 * - Helps trap focus within photoswipe.
 */
class Keyboard {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
        this.pswp = pswp;
        /** @private */
        this._wasFocused = false;
        pswp.on('bindEvents', () => {
            // Dialog was likely opened by keyboard if initial point is not defined
            if (!pswp.options.initialPointerPos) {
                // focus causes layout,
                // which causes lag during the animation,
                // that's why we delay it until the opener transition ends
                this._focusRoot();
            }
            pswp.events.add(document, 'focusin', /** @type EventListener */ (this._onFocusIn.bind(this)));
            pswp.events.add(document, 'keydown', /** @type EventListener */ (this._onKeyDown.bind(this)));
        });
        const lastActiveElement = /** @type {HTMLElement} */ (document.activeElement);
        pswp.on('destroy', () => {
            if (pswp.options.returnFocus
                && lastActiveElement
                && this._wasFocused) {
                lastActiveElement.focus();
            }
        });
    }
    /** @private */
    _focusRoot() {
        if (!this._wasFocused && this.pswp.element) {
            this.pswp.element.focus();
            this._wasFocused = true;
        }
    }
    /**
     * @private
     * @param {KeyboardEvent} e
     */
    _onKeyDown(e) {
        const { pswp } = this;
        if (pswp.dispatch('keydown', { originalEvent: e }).defaultPrevented) {
            return;
        }
        if (specialKeyUsed(e)) {
            // don't do anything if special key pressed
            // to prevent from overriding default browser actions
            // for example, in Chrome on Mac cmd+arrow-left returns to previous page
            return;
        }
        /** @type {Methods<PhotoSwipe> | undefined} */
        let keydownAction;
        /** @type {'x' | 'y' | undefined} */
        let axis;
        let isForward = false;
        const isKeySupported = 'key' in e;
        switch (isKeySupported ? e.key : e.keyCode) {
            case getKeyboardEventKey('Escape', isKeySupported):
                if (pswp.options.escKey) {
                    keydownAction = 'close';
                }
                break;
            case getKeyboardEventKey('z', isKeySupported):
                keydownAction = 'toggleZoom';
                break;
            case getKeyboardEventKey('ArrowLeft', isKeySupported):
                axis = 'x';
                break;
            case getKeyboardEventKey('ArrowUp', isKeySupported):
                axis = 'y';
                break;
            case getKeyboardEventKey('ArrowRight', isKeySupported):
                axis = 'x';
                isForward = true;
                break;
            case getKeyboardEventKey('ArrowDown', isKeySupported):
                isForward = true;
                axis = 'y';
                break;
            case getKeyboardEventKey('Tab', isKeySupported):
                this._focusRoot();
                break;
        }
        // if left/right/top/bottom key
        if (axis) {
            // prevent page scroll
            e.preventDefault();
            const { currSlide } = pswp;
            if (pswp.options.arrowKeys
                && axis === 'x'
                && pswp.getNumItems() > 1) {
                keydownAction = isForward ? 'next' : 'prev';
            }
            else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
                // up/down arrow keys pan the image vertically
                // left/right arrow keys pan horizontally.
                // Unless there is only one image,
                // or arrowKeys option is disabled
                currSlide.pan[axis] += isForward ? -80 : 80;
                currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
            }
        }
        if (keydownAction) {
            e.preventDefault();
            // @ts-ignore
            pswp[keydownAction]();
        }
    }
    /**
     * Trap focus inside photoswipe
     *
     * @private
     * @param {FocusEvent} e
     */
    _onFocusIn(e) {
        const { template } = this.pswp;
        if (template
            && document !== e.target
            && template !== e.target
            && !template.contains(/** @type {Node} */ (e.target))) {
            // focus root element
            template.focus();
        }
    }
}
const DEFAULT_EASING = 'cubic-bezier(.4,0,.22,1)';
/** @typedef {import('./animations.js').SharedAnimationProps} SharedAnimationProps */
/** @typedef {Object} DefaultCssAnimationProps
 *
 * @prop {HTMLElement} target
 * @prop {number} [duration]
 * @prop {string} [easing]
 * @prop {string} [transform]
 * @prop {string} [opacity]
 * */
/** @typedef {SharedAnimationProps & DefaultCssAnimationProps} CssAnimationProps */
/**
 * Runs CSS transition.
 */
class CSSAnimation {
    /**
     * onComplete can be unpredictable, be careful about current state
     *
     * @param {CssAnimationProps} props
     */
    constructor(props) {
        this.props = props;
        const { target, onComplete, transform, onFinish = () => { }, duration = 333, easing = DEFAULT_EASING, } = props;
        this.onFinish = onFinish;
        // support only transform and opacity
        const prop = transform ? 'transform' : 'opacity';
        const propValue = props[prop] ?? '';
        /** @private */
        this._target = target;
        /** @private */
        this._onComplete = onComplete;
        /** @private */
        this._finished = false;
        /** @private */
        this._onTransitionEnd = this._onTransitionEnd.bind(this);
        // Using timeout hack to make sure that animation
        // starts even if the animated property was changed recently,
        // otherwise transitionend might not fire or transition won't start.
        // https://drafts.csswg.org/css-transitions/#starting
        //
        // ¯\_(ツ)_/¯
        /** @private */
        this._helperTimeout = setTimeout(() => {
            setTransitionStyle(target, prop, duration, easing);
            this._helperTimeout = setTimeout(() => {
                target.addEventListener('transitionend', this._onTransitionEnd, false);
                target.addEventListener('transitioncancel', this._onTransitionEnd, false);
                // Safari occasionally does not emit transitionend event
                // if element property was modified during the transition,
                // which may be caused by resize or third party component,
                // using timeout as a safety fallback
                this._helperTimeout = setTimeout(() => {
                    this._finalizeAnimation();
                }, duration + 500);
                target.style[prop] = propValue;
            }, 30); // Do not reduce this number
        }, 0);
    }
    /**
     * @private
     * @param {TransitionEvent} e
     */
    _onTransitionEnd(e) {
        if (e.target === this._target) {
            this._finalizeAnimation();
        }
    }
    /**
     * @private
     */
    _finalizeAnimation() {
        if (!this._finished) {
            this._finished = true;
            this.onFinish();
            if (this._onComplete) {
                this._onComplete();
            }
        }
    }
    // Destroy is called automatically onFinish
    destroy() {
        if (this._helperTimeout) {
            clearTimeout(this._helperTimeout);
        }
        removeTransitionStyle(this._target);
        this._target.removeEventListener('transitionend', this._onTransitionEnd, false);
        this._target.removeEventListener('transitioncancel', this._onTransitionEnd, false);
        if (!this._finished) {
            this._finalizeAnimation();
        }
    }
}
const DEFAULT_NATURAL_FREQUENCY = 12;
const DEFAULT_DAMPING_RATIO = 0.75;
/**
 * Spring easing helper
 */
class SpringEaser {
    /**
     * @param {number} initialVelocity Initial velocity, px per ms.
     *
     * @param {number} [dampingRatio]
     * Determines how bouncy animation will be.
     * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
     * "overshoot" refers to part of animation that
     * goes beyond the final value.
     *
     * @param {number} [naturalFrequency]
     * Determines how fast animation will slow down.
     * The higher value - the stiffer the transition will be,
     * and the faster it will slow down.
     * Recommended value from 10 to 50
     */
    constructor(initialVelocity, dampingRatio, naturalFrequency) {
        this.velocity = initialVelocity * 1000; // convert to "pixels per second"
        // https://en.wikipedia.org/wiki/Damping_ratio
        this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;
        // https://en.wikipedia.org/wiki/Natural_frequency
        this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
        this._dampedFrequency = this._naturalFrequency;
        if (this._dampingRatio < 1) {
            this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
        }
    }
    /**
     * @param {number} deltaPosition Difference between current and end position of the animation
     * @param {number} deltaTime Frame duration in milliseconds
     *
     * @returns {number} Displacement, relative to the end position.
     */
    easeFrame(deltaPosition, deltaTime) {
        // Inspired by Apple Webkit and Android spring function implementation
        // https://en.wikipedia.org/wiki/Oscillation
        // https://en.wikipedia.org/wiki/Damping_ratio
        // we ignore mass (assume that it's 1kg)
        let displacement = 0;
        let coeff;
        deltaTime /= 1000;
        const naturalDumpingPow = Math.E ** (-this._dampingRatio * this._naturalFrequency * deltaTime);
        if (this._dampingRatio === 1) {
            coeff = this.velocity + this._naturalFrequency * deltaPosition;
            displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
            this.velocity = displacement
                * (-this._naturalFrequency) + coeff
                * naturalDumpingPow;
        }
        else if (this._dampingRatio < 1) {
            coeff = (1 / this._dampedFrequency)
                * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
            const dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
            const dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
            displacement = naturalDumpingPow
                * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
            this.velocity = displacement
                * (-this._naturalFrequency)
                * this._dampingRatio
                + naturalDumpingPow
                    * (-this._dampedFrequency * deltaPosition * dumpedFSin
                        + this._dampedFrequency * coeff * dumpedFCos);
        }
        // Overdamped (>1) damping ratio is not supported
        return displacement;
    }
}
/** @typedef {import('./animations.js').SharedAnimationProps} SharedAnimationProps */
/**
 * @typedef {Object} DefaultSpringAnimationProps
 *
 * @prop {number} start
 * @prop {number} end
 * @prop {number} velocity
 * @prop {number} [dampingRatio]
 * @prop {number} [naturalFrequency]
 * @prop {(end: number) => void} onUpdate
 */
/** @typedef {SharedAnimationProps & DefaultSpringAnimationProps} SpringAnimationProps */
class SpringAnimation {
    /**
     * @param {SpringAnimationProps} props
     */
    constructor(props) {
        this.props = props;
        this._raf = 0;
        const { start, end, velocity, onUpdate, onComplete, onFinish = () => { }, dampingRatio, naturalFrequency } = props;
        this.onFinish = onFinish;
        const easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
        let prevTime = Date.now();
        let deltaPosition = start - end;
        const animationLoop = () => {
            if (this._raf) {
                deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);
                // Stop the animation if velocity is low and position is close to end
                if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
                    // Finalize the animation
                    onUpdate(end);
                    if (onComplete) {
                        onComplete();
                    }
                    this.onFinish();
                }
                else {
                    prevTime = Date.now();
                    onUpdate(deltaPosition + end);
                    this._raf = requestAnimationFrame(animationLoop);
                }
            }
        };
        this._raf = requestAnimationFrame(animationLoop);
    }
    // Destroy is called automatically onFinish
    destroy() {
        if (this._raf >= 0) {
            cancelAnimationFrame(this._raf);
        }
        this._raf = 0;
    }
}
/** @typedef {import('./css-animation.js').CssAnimationProps} CssAnimationProps */
/** @typedef {import('./spring-animation.js').SpringAnimationProps} SpringAnimationProps */
/** @typedef {Object} SharedAnimationProps
 * @prop {string} [name]
 * @prop {boolean} [isPan]
 * @prop {boolean} [isMainScroll]
 * @prop {VoidFunction} [onComplete]
 * @prop {VoidFunction} [onFinish]
 */
/** @typedef {SpringAnimation | CSSAnimation} Animation */
/** @typedef {SpringAnimationProps | CssAnimationProps} AnimationProps */
/**
 * Manages animations
 */
class Animations {
    constructor() {
        /** @type {Animation[]} */
        this.activeAnimations = [];
    }
    /**
     * @param {SpringAnimationProps} props
     */
    startSpring(props) {
        this._start(props, true);
    }
    /**
     * @param {CssAnimationProps} props
     */
    startTransition(props) {
        this._start(props);
    }
    /**
     * @private
     * @param {AnimationProps} props
     * @param {boolean} [isSpring]
     * @returns {Animation}
     */
    _start(props, isSpring) {
        const animation = isSpring
            ? new SpringAnimation(/** @type SpringAnimationProps */ (props))
            : new CSSAnimation(/** @type CssAnimationProps */ (props));
        this.activeAnimations.push(animation);
        animation.onFinish = () => this.stop(animation);
        return animation;
    }
    /**
     * @param {Animation} animation
     */
    stop(animation) {
        animation.destroy();
        const index = this.activeAnimations.indexOf(animation);
        if (index > -1) {
            this.activeAnimations.splice(index, 1);
        }
    }
    stopAll() {
        this.activeAnimations.forEach((animation) => {
            animation.destroy();
        });
        this.activeAnimations = [];
    }
    /**
     * Stop all pan or zoom transitions
     */
    stopAllPan() {
        this.activeAnimations = this.activeAnimations.filter((animation) => {
            if (animation.props.isPan) {
                animation.destroy();
                return false;
            }
            return true;
        });
    }
    stopMainScroll() {
        this.activeAnimations = this.activeAnimations.filter((animation) => {
            if (animation.props.isMainScroll) {
                animation.destroy();
                return false;
            }
            return true;
        });
    }
    /**
     * Returns true if main scroll transition is running
     */
    // isMainScrollRunning() {
    //   return this.activeAnimations.some((animation) => {
    //     return animation.props.isMainScroll;
    //   });
    // }
    /**
     * Returns true if any pan or zoom transition is running
     */
    isPanRunning() {
        return this.activeAnimations.some((animation) => {
            return animation.props.isPan;
        });
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/**
 * Handles scroll wheel.
 * Can pan and zoom current slide image.
 */
class ScrollWheel {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
        this.pswp = pswp;
        pswp.events.add(pswp.element, 'wheel', /** @type EventListener */ (this._onWheel.bind(this)));
    }
    /**
     * @private
     * @param {WheelEvent} e
     */
    _onWheel(e) {
        e.preventDefault();
        const { currSlide } = this.pswp;
        let { deltaX, deltaY } = e;
        if (!currSlide) {
            return;
        }
        if (this.pswp.dispatch('wheel', { originalEvent: e }).defaultPrevented) {
            return;
        }
        if (e.ctrlKey || this.pswp.options.wheelToZoom) {
            // zoom
            if (currSlide.isZoomable()) {
                let zoomFactor = -deltaY;
                if (e.deltaMode === 1 /* DOM_DELTA_LINE */) {
                    zoomFactor *= 0.05;
                }
                else {
                    zoomFactor *= e.deltaMode ? 1 : 0.002;
                }
                zoomFactor = 2 ** zoomFactor;
                const destZoomLevel = currSlide.currZoomLevel * zoomFactor;
                currSlide.zoomTo(destZoomLevel, {
                    x: e.clientX,
                    y: e.clientY
                });
            }
        }
        else {
            // pan
            if (currSlide.isPannable()) {
                if (e.deltaMode === 1 /* DOM_DELTA_LINE */) {
                    // 18 - average line height
                    deltaX *= 18;
                    deltaY *= 18;
                }
                currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
            }
        }
    }
}
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 * @template T
 * @typedef {import('../types.js').Methods<T>} Methods<T>
 */
/**
 * @typedef {Object} UIElementMarkupProps
 * @prop {boolean} [isCustomSVG]
 * @prop {string} inner
 * @prop {string} [outlineID]
 * @prop {number | string} [size]
 */
/**
 * @typedef {Object} UIElementData
 * @prop {DefaultUIElements | string} [name]
 * @prop {string} [className]
 * @prop {UIElementMarkup} [html]
 * @prop {boolean} [isButton]
 * @prop {keyof HTMLElementTagNameMap} [tagName]
 * @prop {string} [title]
 * @prop {string} [ariaLabel]
 * @prop {(element: HTMLElement, pswp: PhotoSwipe) => void} [onInit]
 * @prop {Methods<PhotoSwipe> | ((e: MouseEvent, element: HTMLElement, pswp: PhotoSwipe) => void)} [onClick]
 * @prop {'bar' | 'wrapper' | 'root'} [appendTo]
 * @prop {number} [order]
 */
/** @typedef {'arrowPrev' | 'arrowNext' | 'close' | 'zoom' | 'counter'} DefaultUIElements */
/** @typedef {string | UIElementMarkupProps} UIElementMarkup */
/**
 * @param {UIElementMarkup} [htmlData]
 * @returns {string}
 */
function addElementHTML(htmlData) {
    if (typeof htmlData === 'string') {
        // Allow developers to provide full svg,
        // For example:
        // <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" class="pswp__icn">
        //   <path d="..." />
        //   <circle ... />
        // </svg>
        // Can also be any HTML string.
        return htmlData;
    }
    if (!htmlData || !htmlData.isCustomSVG) {
        return '';
    }
    const svgData = htmlData;
    let out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
    // replace all %d with size
    out = out.split('%d').join(/** @type {string} */ (svgData.size || 32));
    // Icons may contain outline/shadow,
    // to make it we "clone" base icon shape and add border to it.
    // Icon itself and border are styled via CSS.
    //
    // Property shadowID defines ID of element that should be cloned.
    if (svgData.outlineID) {
        out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
    }
    out += svgData.inner;
    out += '</svg>';
    return out;
}
class UIElement {
    /**
     * @param {PhotoSwipe} pswp
     * @param {UIElementData} data
     */
    constructor(pswp, data) {
        const name = data.name || data.className;
        let elementHTML = data.html;
        // @ts-expect-error lookup only by `data.name` maybe?
        if (pswp.options[name] === false) {
            // exit if element is disabled from options
            return;
        }
        // Allow to override SVG icons from options
        // @ts-expect-error lookup only by `data.name` maybe?
        if (typeof pswp.options[name + 'SVG'] === 'string') {
            // arrowPrevSVG
            // arrowNextSVG
            // closeSVG
            // zoomSVG
            // @ts-expect-error lookup only by `data.name` maybe?
            elementHTML = pswp.options[name + 'SVG'];
        }
        pswp.dispatch('uiElementCreate', { data });
        let className = '';
        if (data.isButton) {
            className += 'pswp__button ';
            className += (data.className || `pswp__button--${data.name}`);
        }
        else {
            className += (data.className || `pswp__${data.name}`);
        }
        let tagName = data.isButton ? (data.tagName || 'button') : (data.tagName || 'div');
        tagName = /** @type {keyof HTMLElementTagNameMap} */ (tagName.toLowerCase());
        /** @type {HTMLElement} */
        const element = createElement(className, tagName);
        if (data.isButton) {
            if (tagName === 'button') {
                /** @type {HTMLButtonElement} */ (element).type = 'button';
            }
            let { title } = data;
            const { ariaLabel } = data;
            // @ts-expect-error lookup only by `data.name` maybe?
            if (typeof pswp.options[name + 'Title'] === 'string') {
                // @ts-expect-error lookup only by `data.name` maybe?
                title = pswp.options[name + 'Title'];
            }
            if (title) {
                element.title = title;
            }
            const ariaText = ariaLabel || title;
            if (ariaText) {
                element.setAttribute('aria-label', ariaText);
            }
        }
        element.innerHTML = addElementHTML(elementHTML);
        if (data.onInit) {
            data.onInit(element, pswp);
        }
        if (data.onClick) {
            element.onclick = (e) => {
                if (typeof data.onClick === 'string') {
                    // @ts-ignore
                    pswp[data.onClick]();
                }
                else if (typeof data.onClick === 'function') {
                    data.onClick(e, element, pswp);
                }
            };
        }
        // Top bar is default position
        const appendTo = data.appendTo || 'bar';
        /** @type {HTMLElement | undefined} root element by default */
        let container = pswp.element;
        if (appendTo === 'bar') {
            if (!pswp.topBar) {
                pswp.topBar = createElement('pswp__top-bar pswp__hide-on-close', 'div', pswp.scrollWrap);
            }
            container = pswp.topBar;
        }
        else {
            // element outside of top bar gets a secondary class
            // that makes element fade out on close
            element.classList.add('pswp__hide-on-close');
            if (appendTo === 'wrapper') {
                container = pswp.scrollWrap;
            }
        }
        container?.appendChild(pswp.applyFilters('uiElement', element, data));
    }
}
/*
  Backward and forward arrow buttons
 */
/** @typedef {import('./ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/**
 *
 * @param {HTMLElement} element
 * @param {PhotoSwipe} pswp
 * @param {boolean} [isNextButton]
 */
function initArrowButton(element, pswp, isNextButton) {
    element.classList.add('pswp__button--arrow');
    // Dmytro Semenov: this should point to a unique id for this instance
    element.setAttribute('aria-controls', 'pswp__items');
    pswp.on('change', () => {
        if (!pswp.options.loop) {
            if (isNextButton) {
                /** @type {HTMLButtonElement} */
                (element).disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
            }
            else {
                /** @type {HTMLButtonElement} */
                (element).disabled = !(pswp.currIndex > 0);
            }
        }
    });
}
/** @type {UIElementData} */
const arrowPrev = {
    name: 'arrowPrev',
    className: 'pswp__button--arrow--prev',
    title: 'Previous',
    order: 10,
    isButton: true,
    appendTo: 'wrapper',
    html: {
        isCustomSVG: true,
        size: 60,
        inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
        outlineID: 'pswp__icn-arrow'
    },
    onClick: 'prev',
    onInit: initArrowButton
};
/** @type {UIElementData} */
const arrowNext = {
    name: 'arrowNext',
    className: 'pswp__button--arrow--next',
    title: 'Next',
    order: 11,
    isButton: true,
    appendTo: 'wrapper',
    html: {
        isCustomSVG: true,
        size: 60,
        inner: '<use xlink:href="#pswp__icn-arrow"/>',
        outlineID: 'pswp__icn-arrow'
    },
    onClick: 'next',
    onInit: (el, pswp) => {
        initArrowButton(el, pswp, true);
    }
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */
const closeButton = {
    name: 'close',
    title: 'Close',
    order: 20,
    isButton: true,
    html: {
        isCustomSVG: true,
        inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
        outlineID: 'pswp__icn-close'
    },
    onClick: 'close'
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */
const zoomButton = {
    name: 'zoom',
    title: 'Zoom',
    order: 10,
    isButton: true,
    html: {
        isCustomSVG: true,
        // eslint-disable-next-line max-len
        inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/>'
            + '<path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/>'
            + '<path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
        outlineID: 'pswp__icn-zoom'
    },
    onClick: 'toggleZoom'
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */
const loadingIndicator = {
    name: 'preloader',
    appendTo: 'bar',
    order: 7,
    html: {
        isCustomSVG: true,
        // eslint-disable-next-line max-len
        inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
        outlineID: 'pswp__icn-loading'
    },
    onInit: (indicatorElement, pswp) => {
        /** @type {boolean | undefined} */
        let isVisible;
        /** @type {NodeJS.Timeout | null} */
        let delayTimeout = null;
        /**
         * @param {string} className
         * @param {boolean} add
         */
        const toggleIndicatorClass = (className, add) => {
            indicatorElement.classList.toggle('pswp__preloader--' + className, add);
        };
        /**
         * @param {boolean} visible
         */
        const setIndicatorVisibility = (visible) => {
            if (isVisible !== visible) {
                isVisible = visible;
                toggleIndicatorClass('active', visible);
            }
        };
        const updatePreloaderVisibility = () => {
            if (!pswp.currSlide?.content.isLoading()) {
                setIndicatorVisibility(false);
                if (delayTimeout) {
                    clearTimeout(delayTimeout);
                    delayTimeout = null;
                }
                return;
            }
            if (!delayTimeout) {
                // display loading indicator with delay
                delayTimeout = setTimeout(() => {
                    setIndicatorVisibility(Boolean(pswp.currSlide?.content.isLoading()));
                    delayTimeout = null;
                }, pswp.options.preloaderDelay);
            }
        };
        pswp.on('change', updatePreloaderVisibility);
        pswp.on('loadComplete', (e) => {
            if (pswp.currSlide === e.slide) {
                updatePreloaderVisibility();
            }
        });
        // expose the method
        if (pswp.ui) {
            pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
        }
    }
};
/** @type {import('./ui-element.js').UIElementData} UIElementData */
const counterIndicator = {
    name: 'counter',
    order: 5,
    onInit: (counterElement, pswp) => {
        pswp.on('change', () => {
            counterElement.innerText = (pswp.currIndex + 1)
                + pswp.options.indexIndicatorSep
                + pswp.getNumItems();
        });
    }
};
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./ui-element.js').UIElementData} UIElementData */
/**
 * Set special class on element when image is zoomed.
 *
 * By default, it is used to adjust
 * zoom icon and zoom cursor via CSS.
 *
 * @param {HTMLElement} el
 * @param {boolean} isZoomedIn
 */
function setZoomedIn(el, isZoomedIn) {
    el.classList.toggle('pswp--zoomed-in', isZoomedIn);
}
class UI {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
        this.pswp = pswp;
        this.isRegistered = false;
        /** @type {UIElementData[]} */
        this.uiElementsData = [];
        /** @type {(UIElement | UIElementData)[]} */
        this.items = [];
        /** @type {() => void} */
        this.updatePreloaderVisibility = () => { };
        /**
         * @private
         * @type {number | undefined}
         */
        this._lastUpdatedZoomLevel = undefined;
    }
    init() {
        const { pswp } = this;
        this.isRegistered = false;
        this.uiElementsData = [
            closeButton,
            arrowPrev,
            arrowNext,
            zoomButton,
            loadingIndicator,
            counterIndicator
        ];
        pswp.dispatch('uiRegister');
        // sort by order
        this.uiElementsData.sort((a, b) => {
            // default order is 0
            return (a.order || 0) - (b.order || 0);
        });
        this.items = [];
        this.isRegistered = true;
        this.uiElementsData.forEach((uiElementData) => {
            this.registerElement(uiElementData);
        });
        pswp.on('change', () => {
            pswp.element?.classList.toggle('pswp--one-slide', pswp.getNumItems() === 1);
        });
        pswp.on('zoomPanUpdate', () => this._onZoomPanUpdate());
    }
    /**
     * @param {UIElementData} elementData
     */
    registerElement(elementData) {
        if (this.isRegistered) {
            this.items.push(new UIElement(this.pswp, elementData));
        }
        else {
            this.uiElementsData.push(elementData);
        }
    }
    /**
     * Fired each time zoom or pan position is changed.
     * Update classes that control visibility of zoom button and cursor icon.
     *
     * @private
     */
    _onZoomPanUpdate() {
        const { template, currSlide, options } = this.pswp;
        if (this.pswp.opener.isClosing || !template || !currSlide) {
            return;
        }
        let { currZoomLevel } = currSlide;
        // if not open yet - check against initial zoom level
        if (!this.pswp.opener.isOpen) {
            currZoomLevel = currSlide.zoomLevels.initial;
        }
        if (currZoomLevel === this._lastUpdatedZoomLevel) {
            return;
        }
        this._lastUpdatedZoomLevel = currZoomLevel;
        const currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;
        // Initial and secondary zoom levels are almost equal
        if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
            // disable zoom
            setZoomedIn(template, false);
            template.classList.remove('pswp--zoom-allowed');
            return;
        }
        template.classList.add('pswp--zoom-allowed');
        const potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial
            ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
        setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
        if (options.imageClickAction === 'zoom'
            || options.imageClickAction === 'zoom-or-close') {
            template.classList.add('pswp--click-to-zoom');
        }
    }
}
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {{ x: number; y: number; w: number; innerRect?: { w: number; h: number; x: number; y: number } }} Bounds */
/**
 * @param {HTMLElement} el
 * @returns Bounds
 */
function getBoundsByElement(el) {
    const thumbAreaRect = el.getBoundingClientRect();
    return {
        x: thumbAreaRect.left,
        y: thumbAreaRect.top,
        w: thumbAreaRect.width
    };
}
/**
 * @param {HTMLElement} el
 * @param {number} imageWidth
 * @param {number} imageHeight
 * @returns Bounds
 */
function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
    const thumbAreaRect = el.getBoundingClientRect();
    // fill image into the area
    // (do they same as object-fit:cover does to retrieve coordinates)
    const hRatio = thumbAreaRect.width / imageWidth;
    const vRatio = thumbAreaRect.height / imageHeight;
    const fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
    const offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
    const offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
    /**
     * Coordinates of the image,
     * as if it was not cropped,
     * height is calculated automatically
     *
     * @type {Bounds}
     */
    const bounds = {
        x: thumbAreaRect.left + offsetX,
        y: thumbAreaRect.top + offsetY,
        w: imageWidth * fillZoomLevel
    };
    // Coordinates of inner crop area
    // relative to the image
    bounds.innerRect = {
        w: thumbAreaRect.width,
        h: thumbAreaRect.height,
        x: offsetX,
        y: offsetY
    };
    return bounds;
}
/**
 * Get dimensions of thumbnail image
 * (click on which opens photoswipe or closes photoswipe to)
 *
 * @param {number} index
 * @param {SlideData} itemData
 * @param {PhotoSwipe} instance PhotoSwipe instance
 * @returns {Bounds | undefined}
 */
function getThumbBounds(index, itemData, instance) {
    // legacy event, before filters were introduced
    const event = instance.dispatch('thumbBounds', {
        index,
        itemData,
        instance
    });
    // @ts-expect-error
    if (event.thumbBounds) {
        // @ts-expect-error
        return event.thumbBounds;
    }
    const { element } = itemData;
    /** @type {Bounds | undefined} */
    let thumbBounds;
    /** @type {HTMLElement | null | undefined} */
    let thumbnail;
    if (element && instance.options.thumbSelector !== false) {
        const thumbSelector = instance.options.thumbSelector || 'img';
        thumbnail = element.matches(thumbSelector)
            ? element : /** @type {HTMLElement | null} */ (element.querySelector(thumbSelector));
    }
    thumbnail = instance.applyFilters('thumbEl', thumbnail, itemData, index);
    if (thumbnail) {
        if (!itemData.thumbCropped) {
            thumbBounds = getBoundsByElement(thumbnail);
        }
        else {
            thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w || 0, itemData.height || itemData.h || 0);
        }
    }
    return instance.applyFilters('thumbBounds', thumbBounds, itemData, index);
}
/** @typedef {import('../lightbox/lightbox.js').default} PhotoSwipeLightbox */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
/** @typedef {import('../photoswipe.js').PhotoSwipeOptions} PhotoSwipeOptions */
/** @typedef {import('../photoswipe.js').DataSource} DataSource */
/** @typedef {import('../ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('../slide/content.js').default} ContentDefault */
/** @typedef {import('../slide/slide.js').default} Slide */
/** @typedef {import('../slide/slide.js').SlideData} SlideData */
/** @typedef {import('../slide/zoom-level.js').default} ZoomLevel */
/** @typedef {import('../slide/get-thumb-bounds.js').Bounds} Bounds */
/**
 * Allow adding an arbitrary props to the Content
 * https://photoswipe.com/custom-content/#using-webp-image-format
 * @typedef {ContentDefault & Record<string, any>} Content
 */
/** @typedef {{ x?: number; y?: number }} Point */
/**
 * @typedef {Object} PhotoSwipeEventsMap https://photoswipe.com/events/
 *
 *
 * https://photoswipe.com/adding-ui-elements/
 *
 * @prop {undefined} uiRegister
 * @prop {{ data: UIElementData }} uiElementCreate
 *
 *
 * https://photoswipe.com/events/#initialization-events
 *
 * @prop {undefined} beforeOpen
 * @prop {undefined} firstUpdate
 * @prop {undefined} initialLayout
 * @prop {undefined} change
 * @prop {undefined} afterInit
 * @prop {undefined} bindEvents
 *
 *
 * https://photoswipe.com/events/#opening-or-closing-transition-events
 *
 * @prop {undefined} openingAnimationStart
 * @prop {undefined} openingAnimationEnd
 * @prop {undefined} closingAnimationStart
 * @prop {undefined} closingAnimationEnd
 *
 *
 * https://photoswipe.com/events/#closing-events
 *
 * @prop {undefined} close
 * @prop {undefined} destroy
 *
 *
 * https://photoswipe.com/events/#pointer-and-gesture-events
 *
 * @prop {{ originalEvent: PointerEvent }} pointerDown
 * @prop {{ originalEvent: PointerEvent }} pointerMove
 * @prop {{ originalEvent: PointerEvent }} pointerUp
 * @prop {{ bgOpacity: number }} pinchClose can be default prevented
 * @prop {{ panY: number }} verticalDrag can be default prevented
 *
 *
 * https://photoswipe.com/events/#slide-content-events
 *
 * @prop {{ content: Content }} contentInit
 * @prop {{ content: Content; isLazy: boolean }} contentLoad can be default prevented
 * @prop {{ content: Content; isLazy: boolean }} contentLoadImage can be default prevented
 * @prop {{ content: Content; slide: Slide; isError?: boolean }} loadComplete
 * @prop {{ content: Content; slide: Slide }} loadError
 * @prop {{ content: Content; width: number; height: number }} contentResize can be default prevented
 * @prop {{ content: Content; width: number; height: number; slide: Slide }} imageSizeChange
 * @prop {{ content: Content }} contentLazyLoad can be default prevented
 * @prop {{ content: Content }} contentAppend can be default prevented
 * @prop {{ content: Content }} contentActivate can be default prevented
 * @prop {{ content: Content }} contentDeactivate can be default prevented
 * @prop {{ content: Content }} contentRemove can be default prevented
 * @prop {{ content: Content }} contentDestroy can be default prevented
 *
 *
 * undocumented
 *
 * @prop {{ point: Point; originalEvent: PointerEvent }} imageClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} bgClickAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} tapAction can be default prevented
 * @prop {{ point: Point; originalEvent: PointerEvent }} doubleTapAction can be default prevented
 *
 * @prop {{ originalEvent: KeyboardEvent }} keydown can be default prevented
 * @prop {{ x: number; dragging: boolean }} moveMainScroll
 * @prop {{ slide: Slide }} firstZoomPan
 * @prop {{ slide: Slide | undefined, data: SlideData, index: number }} gettingData
 * @prop {undefined} beforeResize
 * @prop {undefined} resize
 * @prop {undefined} viewportSize
 * @prop {undefined} updateScrollOffset
 * @prop {{ slide: Slide }} slideInit
 * @prop {{ slide: Slide }} afterSetContent
 * @prop {{ slide: Slide }} slideLoad
 * @prop {{ slide: Slide }} appendHeavy can be default prevented
 * @prop {{ slide: Slide }} appendHeavyContent
 * @prop {{ slide: Slide }} slideActivate
 * @prop {{ slide: Slide }} slideDeactivate
 * @prop {{ slide: Slide }} slideDestroy
 * @prop {{ destZoomLevel: number, centerPoint: Point | undefined, transitionDuration: number | false | undefined }} beforeZoomTo
 * @prop {{ slide: Slide }} zoomPanUpdate
 * @prop {{ slide: Slide }} initialZoomPan
 * @prop {{ slide: Slide }} calcSlideSize
 * @prop {undefined} resolutionChanged
 * @prop {{ originalEvent: WheelEvent }} wheel can be default prevented
 * @prop {{ content: Content }} contentAppendImage can be default prevented
 * @prop {{ index: number; itemData: SlideData }} lazyLoadSlide can be default prevented
 * @prop {undefined} lazyLoad
 * @prop {{ slide: Slide }} calcBounds
 * @prop {{ zoomLevels: ZoomLevel, slideData: SlideData }} zoomLevelsUpdate
 *
 *
 * legacy
 *
 * @prop {undefined} init
 * @prop {undefined} initialZoomIn
 * @prop {undefined} initialZoomOut
 * @prop {undefined} initialZoomInEnd
 * @prop {undefined} initialZoomOutEnd
 * @prop {{ dataSource: DataSource | undefined, numItems: number }} numItems
 * @prop {{ itemData: SlideData; index: number }} itemData
 * @prop {{ index: number, itemData: SlideData, instance: PhotoSwipe }} thumbBounds
 */
/**
 * @typedef {Object} PhotoSwipeFiltersMap https://photoswipe.com/filters/
 *
 * @prop {(numItems: number, dataSource: DataSource | undefined) => number} numItems
 * Modify the total amount of slides. Example on Data sources page.
 * https://photoswipe.com/filters/#numitems
 *
 * @prop {(itemData: SlideData, index: number) => SlideData} itemData
 * Modify slide item data. Example on Data sources page.
 * https://photoswipe.com/filters/#itemdata
 *
 * @prop {(itemData: SlideData, element: HTMLElement, linkEl: HTMLAnchorElement) => SlideData} domItemData
 * Modify item data when it's parsed from DOM element. Example on Data sources page.
 * https://photoswipe.com/filters/#domitemdata
 *
 * @prop {(clickedIndex: number, e: MouseEvent, instance: PhotoSwipeLightbox) => number} clickedIndex
 * Modify clicked gallery item index.
 * https://photoswipe.com/filters/#clickedindex
 *
 * @prop {(placeholderSrc: string | false, content: Content) => string | false} placeholderSrc
 * Modify placeholder image source.
 * https://photoswipe.com/filters/#placeholdersrc
 *
 * @prop {(isContentLoading: boolean, content: Content) => boolean} isContentLoading
 * Modify if the content is currently loading.
 * https://photoswipe.com/filters/#iscontentloading
 *
 * @prop {(isContentZoomable: boolean, content: Content) => boolean} isContentZoomable
 * Modify if the content can be zoomed.
 * https://photoswipe.com/filters/#iscontentzoomable
 *
 * @prop {(useContentPlaceholder: boolean, content: Content) => boolean} useContentPlaceholder
 * Modify if the placeholder should be used for the content.
 * https://photoswipe.com/filters/#usecontentplaceholder
 *
 * @prop {(isKeepingPlaceholder: boolean, content: Content) => boolean} isKeepingPlaceholder
 * Modify if the placeholder should be kept after the content is loaded.
 * https://photoswipe.com/filters/#iskeepingplaceholder
 *
 *
 * @prop {(contentErrorElement: HTMLElement, content: Content) => HTMLElement} contentErrorElement
 * Modify an element when the content has error state (for example, if image cannot be loaded).
 * https://photoswipe.com/filters/#contenterrorelement
 *
 * @prop {(element: HTMLElement, data: UIElementData) => HTMLElement} uiElement
 * Modify a UI element that's being created.
 * https://photoswipe.com/filters/#uielement
 *
 * @prop {(thumbnail: HTMLElement | null | undefined, itemData: SlideData, index: number) => HTMLElement} thumbEl
 * Modify the thubmnail element from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbel
 *
 * @prop {(thumbBounds: Bounds | undefined, itemData: SlideData, index: number) => Bounds} thumbBounds
 * Modify the thubmnail bounds from which opening zoom animation starts or ends.
 * https://photoswipe.com/filters/#thumbbounds
 *
 * @prop {(srcsetSizesWidth: number, content: Content) => number} srcsetSizesWidth
 *
 */
/**
 * @template {keyof PhotoSwipeFiltersMap} T
 * @typedef {{ fn: PhotoSwipeFiltersMap[T], priority: number }} Filter
 */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {PhotoSwipeEventsMap[T] extends undefined ? PhotoSwipeEvent<T> : PhotoSwipeEvent<T> & PhotoSwipeEventsMap[T]} AugmentedEvent
 */
/**
 * @template {keyof PhotoSwipeEventsMap} T
 * @typedef {(event: AugmentedEvent<T>) => void} EventCallback
 */
/**
 * Base PhotoSwipe event object
 *
 * @template {keyof PhotoSwipeEventsMap} T
 */
class PhotoSwipeEvent {
    /**
     * @param {T} type
     * @param {PhotoSwipeEventsMap[T]} [details]
     */
    constructor(type, details) {
        this.type = type;
        this.defaultPrevented = false;
        if (details) {
            Object.assign(this, details);
        }
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
}
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */
class Eventable {
    constructor() {
        /**
         * @type {{ [T in keyof PhotoSwipeEventsMap]?: ((event: AugmentedEvent<T>) => void)[] }}
         */
        this._listeners = {};
        /**
         * @type {{ [T in keyof PhotoSwipeFiltersMap]?: Filter<T>[] }}
         */
        this._filters = {};
        /** @type {PhotoSwipe | undefined} */
        this.pswp = undefined;
        /** @type {PhotoSwipeOptions | undefined} */
        this.options = undefined;
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     * @param {number} priority
     */
    addFilter(name, fn, priority = 100) {
        if (!this._filters[name]) {
            this._filters[name] = [];
        }
        this._filters[name]?.push({ fn, priority });
        this._filters[name]?.sort((f1, f2) => f1.priority - f2.priority);
        this.pswp?.addFilter(name, fn, priority);
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     */
    removeFilter(name, fn) {
        if (this._filters[name]) {
            // @ts-expect-error
            this._filters[name] = this._filters[name].filter(filter => (filter.fn !== fn));
        }
        if (this.pswp) {
            this.pswp.removeFilter(name, fn);
        }
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
     * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
     */
    applyFilters(name, ...args) {
        this._filters[name]?.forEach((filter) => {
            // @ts-expect-error
            args[0] = filter.fn.apply(this, args);
        });
        return args[0];
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    on(name, fn) {
        if (!this._listeners[name]) {
            this._listeners[name] = [];
        }
        this._listeners[name]?.push(fn);
        // When binding events to lightbox,
        // also bind events to PhotoSwipe Core,
        // if it's open.
        this.pswp?.on(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    off(name, fn) {
        if (this._listeners[name]) {
            // @ts-expect-error
            this._listeners[name] = this._listeners[name].filter(listener => (fn !== listener));
        }
        this.pswp?.off(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {PhotoSwipeEventsMap[T]} [details]
     * @returns {AugmentedEvent<T>}
     */
    dispatch(name, details) {
        if (this.pswp) {
            return this.pswp.dispatch(name, details);
        }
        const event = /** @type {AugmentedEvent<T>} */ (new PhotoSwipeEvent(name, details));
        this._listeners[name]?.forEach((listener) => {
            listener.call(this, event);
        });
        return event;
    }
}
class Placeholder {
    /**
     * @param {string | false} imageSrc
     * @param {HTMLElement} container
     */
    constructor(imageSrc, container) {
        // Create placeholder
        // (stretched thumbnail or simple div behind the main image)
        /** @type {HTMLImageElement | HTMLDivElement | null} */
        this.element = createElement('pswp__img pswp__img--placeholder', imageSrc ? 'img' : 'div', container);
        if (imageSrc) {
            const imgEl = /** @type {HTMLImageElement} */ (this.element);
            imgEl.decoding = 'async';
            imgEl.alt = '';
            imgEl.src = imageSrc;
            imgEl.setAttribute('role', 'presentation');
        }
        this.element.setAttribute('aria-hidden', 'true');
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width, height) {
        if (!this.element) {
            return;
        }
        if (this.element.tagName === 'IMG') {
            // Use transform scale() to modify img placeholder size
            // (instead of changing width/height directly).
            // This helps with performance, specifically in iOS15 Safari.
            setWidthHeight(this.element, 250, 'auto');
            this.element.style.transformOrigin = '0 0';
            this.element.style.transform = toTransformString(0, 0, width / 250);
        }
        else {
            setWidthHeight(this.element, width, height);
        }
    }
    destroy() {
        if (this.element?.parentNode) {
            this.element.remove();
        }
        this.element = null;
    }
}
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../util/util.js').LoadState} LoadState */
class Content {
    /**
     * @param {SlideData} itemData Slide data
     * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
     * @param {number} index
     */
    constructor(itemData, instance, index) {
        this.instance = instance;
        this.data = itemData;
        this.index = index;
        /** @type {HTMLImageElement | HTMLDivElement | undefined} */
        this.element = undefined;
        /** @type {Placeholder | undefined} */
        this.placeholder = undefined;
        /** @type {Slide | undefined} */
        this.slide = undefined;
        this.displayedImageWidth = 0;
        this.displayedImageHeight = 0;
        this.width = Number(this.data.w) || Number(this.data.width) || 0;
        this.height = Number(this.data.h) || Number(this.data.height) || 0;
        this.isAttached = false;
        this.hasSlide = false;
        this.isDecoding = false;
        /** @type {LoadState} */
        this.state = LOAD_STATE.IDLE;
        if (this.data.type) {
            this.type = this.data.type;
        }
        else if (this.data.src) {
            this.type = 'image';
        }
        else {
            this.type = 'html';
        }
        this.instance.dispatch('contentInit', { content: this });
    }
    removePlaceholder() {
        if (this.placeholder && !this.keepPlaceholder()) {
            // With delay, as image might be loaded, but not rendered
            setTimeout(() => {
                if (this.placeholder) {
                    this.placeholder.destroy();
                    this.placeholder = undefined;
                }
            }, 1000);
        }
    }
    /**
     * Preload content
     *
     * @param {boolean} isLazy
     * @param {boolean} [reload]
     */
    load(isLazy, reload) {
        if (this.slide && this.usePlaceholder()) {
            if (!this.placeholder) {
                const placeholderSrc = this.instance.applyFilters('placeholderSrc', 
                // use  image-based placeholder only for the first slide,
                // as rendering (even small stretched thumbnail) is an expensive operation
                (this.data.msrc && this.slide.isFirstSlide) ? this.data.msrc : false, this);
                this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
            }
            else {
                const placeholderEl = this.placeholder.element;
                // Add placeholder to DOM if it was already created
                if (placeholderEl && !placeholderEl.parentElement) {
                    this.slide.container.prepend(placeholderEl);
                }
            }
        }
        if (this.element && !reload) {
            return;
        }
        if (this.instance.dispatch('contentLoad', { content: this, isLazy }).defaultPrevented) {
            return;
        }
        if (this.isImageContent()) {
            this.element = createElement('pswp__img', 'img');
            // Start loading only after width is defined, as sizes might depend on it.
            // Due to Safari feature, we must define sizes before srcset.
            if (this.displayedImageWidth) {
                this.loadImage(isLazy);
            }
        }
        else {
            this.element = createElement('pswp__content', 'div');
            this.element.innerHTML = this.data.html || '';
        }
        if (reload && this.slide) {
            this.slide.updateContentSize(true);
        }
    }
    /**
     * Preload image
     *
     * @param {boolean} isLazy
     */
    loadImage(isLazy) {
        if (!this.isImageContent()
            || !this.element
            || this.instance.dispatch('contentLoadImage', { content: this, isLazy }).defaultPrevented) {
            return;
        }
        const imageElement = /** @type HTMLImageElement */ (this.element);
        this.updateSrcsetSizes();
        if (this.data.srcset) {
            imageElement.srcset = this.data.srcset;
        }
        imageElement.src = this.data.src ?? '';
        imageElement.alt = this.data.alt ?? '';
        this.state = LOAD_STATE.LOADING;
        if (imageElement.complete) {
            this.onLoaded();
        }
        else {
            imageElement.onload = () => {
                this.onLoaded();
            };
            imageElement.onerror = () => {
                this.onError();
            };
        }
    }
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */
    setSlide(slide) {
        this.slide = slide;
        this.hasSlide = true;
        this.instance = slide.pswp;
        // Dmytro Semenov: do we need to unset slide?
    }
    /**
     * Content load success handler
     */
    onLoaded() {
        this.state = LOAD_STATE.LOADED;
        if (this.slide && this.element) {
            this.instance.dispatch('loadComplete', { slide: this.slide, content: this });
            // if content is reloaded
            if (this.slide.isActive
                && this.slide.heavyAppended
                && !this.element.parentNode) {
                this.append();
                this.slide.updateContentSize(true);
            }
            if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
                this.removePlaceholder();
            }
        }
    }
    /**
     * Content load error handler
     */
    onError() {
        this.state = LOAD_STATE.ERROR;
        if (this.slide) {
            this.displayError();
            this.instance.dispatch('loadComplete', { slide: this.slide, isError: true, content: this });
            this.instance.dispatch('loadError', { slide: this.slide, content: this });
        }
    }
    /**
     * @returns {Boolean} If the content is currently loading
     */
    isLoading() {
        return this.instance.applyFilters('isContentLoading', this.state === LOAD_STATE.LOADING, this);
    }
    /**
     * @returns {Boolean} If the content is in error state
     */
    isError() {
        return this.state === LOAD_STATE.ERROR;
    }
    /**
     * @returns {boolean} If the content is image
     */
    isImageContent() {
        return this.type === 'image';
    }
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */
    setDisplayedSize(width, height) {
        if (!this.element) {
            return;
        }
        if (this.placeholder) {
            this.placeholder.setDisplayedSize(width, height);
        }
        if (this.instance.dispatch('contentResize', { content: this, width, height }).defaultPrevented) {
            return;
        }
        setWidthHeight(this.element, width, height);
        if (this.isImageContent() && !this.isError()) {
            const isInitialSizeUpdate = (!this.displayedImageWidth && width);
            this.displayedImageWidth = width;
            this.displayedImageHeight = height;
            if (isInitialSizeUpdate) {
                this.loadImage(false);
            }
            else {
                this.updateSrcsetSizes();
            }
            if (this.slide) {
                this.instance.dispatch('imageSizeChange', { slide: this.slide, width, height, content: this });
            }
        }
    }
    /**
     * @returns {boolean} If the content can be zoomed
     */
    isZoomable() {
        return this.instance.applyFilters('isContentZoomable', this.isImageContent() && (this.state !== LOAD_STATE.ERROR), this);
    }
    /**
     * Update image srcset sizes attribute based on width and height
     */
    updateSrcsetSizes() {
        // Handle srcset sizes attribute.
        //
        // Never lower quality, if it was increased previously.
        // Chrome does this automatically, Firefox and Safari do not,
        // so we store largest used size in dataset.
        if (!this.isImageContent() || !this.element || !this.data.srcset) {
            return;
        }
        const image = /** @type HTMLImageElement */ (this.element);
        const sizesWidth = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
        if (!image.dataset.largestUsedSize
            || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
            image.sizes = sizesWidth + 'px';
            image.dataset.largestUsedSize = String(sizesWidth);
        }
    }
    /**
     * @returns {boolean} If content should use a placeholder (from msrc by default)
     */
    usePlaceholder() {
        return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
    }
    /**
     * Preload content with lazy-loading param
     */
    lazyLoad() {
        if (this.instance.dispatch('contentLazyLoad', { content: this }).defaultPrevented) {
            return;
        }
        this.load(true);
    }
    /**
     * @returns {boolean} If placeholder should be kept after content is loaded
     */
    keepPlaceholder() {
        return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
    }
    /**
     * Destroy the content
     */
    destroy() {
        this.hasSlide = false;
        this.slide = undefined;
        if (this.instance.dispatch('contentDestroy', { content: this }).defaultPrevented) {
            return;
        }
        this.remove();
        if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = undefined;
        }
        if (this.isImageContent() && this.element) {
            this.element.onload = null;
            this.element.onerror = null;
            this.element = undefined;
        }
    }
    /**
     * Display error message
     */
    displayError() {
        if (this.slide) {
            let errorMsgEl = createElement('pswp__error-msg', 'div');
            errorMsgEl.innerText = this.instance.options?.errorMsg ?? '';
            errorMsgEl = /** @type {HTMLDivElement} */ (this.instance.applyFilters('contentErrorElement', errorMsgEl, this));
            this.element = createElement('pswp__content pswp__error-msg-container', 'div');
            this.element.appendChild(errorMsgEl);
            this.slide.container.innerText = '';
            this.slide.container.appendChild(this.element);
            this.slide.updateContentSize(true);
            this.removePlaceholder();
        }
    }
    /**
     * Append the content
     */
    append() {
        if (this.isAttached || !this.element) {
            return;
        }
        this.isAttached = true;
        if (this.state === LOAD_STATE.ERROR) {
            this.displayError();
            return;
        }
        if (this.instance.dispatch('contentAppend', { content: this }).defaultPrevented) {
            return;
        }
        const supportsDecode = ('decode' in this.element);
        if (this.isImageContent()) {
            // Use decode() on nearby slides
            //
            // Nearby slide images are in DOM and not hidden via display:none.
            // However, they are placed offscreen (to the left and right side).
            //
            // Some browsers do not composite the image until it's actually visible,
            // using decode() helps.
            //
            // You might ask "why dont you just decode() and then append all images",
            // that's because I want to show image before it's fully loaded,
            // as browser can render parts of image while it is loading.
            // We do not do this in Safari due to partial loading bug.
            if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
                this.isDecoding = true;
                // purposefully using finally instead of then,
                // as if srcset sizes changes dynamically - it may cause decode error
                /** @type {HTMLImageElement} */
                (this.element).decode().catch(() => { }).finally(() => {
                    this.isDecoding = false;
                    this.appendImage();
                });
            }
            else {
                this.appendImage();
            }
        }
        else if (this.slide && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
        }
    }
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */
    activate() {
        if (this.instance.dispatch('contentActivate', { content: this }).defaultPrevented
            || !this.slide) {
            return;
        }
        if (this.isImageContent() && this.isDecoding && !isSafari()) {
            // add image to slide when it becomes active,
            // even if it's not finished decoding
            this.appendImage();
        }
        else if (this.isError()) {
            this.load(false, true); // try to reload
        }
        if (this.slide.holderElement) {
            this.slide.holderElement.setAttribute('aria-hidden', 'false');
        }
    }
    /**
     * Deactivate the content
     */
    deactivate() {
        this.instance.dispatch('contentDeactivate', { content: this });
        if (this.slide && this.slide.holderElement) {
            this.slide.holderElement.setAttribute('aria-hidden', 'true');
        }
    }
    /**
     * Remove the content from DOM
     */
    remove() {
        this.isAttached = false;
        if (this.instance.dispatch('contentRemove', { content: this }).defaultPrevented) {
            return;
        }
        if (this.element && this.element.parentNode) {
            this.element.remove();
        }
        if (this.placeholder && this.placeholder.element) {
            this.placeholder.element.remove();
        }
    }
    /**
     * Append the image content to slide container
     */
    appendImage() {
        if (!this.isAttached) {
            return;
        }
        if (this.instance.dispatch('contentAppendImage', { content: this }).defaultPrevented) {
            return;
        }
        // ensure that element exists and is not already appended
        if (this.slide && this.element && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
        }
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
            this.removePlaceholder();
        }
    }
}
/** @typedef {import('./content.js').default} Content */
/** @typedef {import('./slide.js').default} Slide */
/** @typedef {import('./slide.js').SlideData} SlideData */
/** @typedef {import('../core/base.js').default} PhotoSwipeBase */
/** @typedef {import('../photoswipe.js').default} PhotoSwipe */
const MIN_SLIDES_TO_CACHE = 5;
/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {SlideData} itemData Data about the slide
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
 * @param {number} index
 * @returns {Content} Image that is being decoded or false.
 */
function lazyLoadData(itemData, instance, index) {
    const content = instance.createContentFromData(itemData, index);
    /** @type {ZoomLevel | undefined} */
    let zoomLevel;
    const { options } = instance;
    // We need to know dimensions of the image to preload it,
    // as it might use srcset, and we need to define sizes
    if (options) {
        zoomLevel = new ZoomLevel(options, itemData, -1);
        let viewportSize;
        if (instance.pswp) {
            viewportSize = instance.pswp.viewportSize;
        }
        else {
            viewportSize = getViewportSize(options, instance);
        }
        const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
        zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
        content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
}
/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default, it loads image based on viewport size and initial zoom level.
 *
 * @param {number} index Slide index
 * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 * @returns {Content | undefined}
 */
function lazyLoadSlide(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch('lazyLoadSlide', { index, itemData }).defaultPrevented) {
        return;
    }
    return lazyLoadData(itemData, instance, index);
}
class ContentLoader {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
        this.pswp = pswp;
        // Total amount of cached images
        this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
        /** @type {Content[]} */
        this._cachedItems = [];
    }
    /**
     * Lazy load nearby slides based on `preload` option.
     *
     * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
     */
    updateLazy(diff) {
        const { pswp } = this;
        if (pswp.dispatch('lazyLoad').defaultPrevented) {
            return;
        }
        const { preload } = pswp.options;
        const isForward = diff === undefined ? true : (diff >= 0);
        let i;
        // preload[1] - num items to preload in forward direction
        for (i = 0; i <= preload[1]; i++) {
            this.loadSlideByIndex(pswp.currIndex + (isForward ? i : (-i)));
        }
        // preload[0] - num items to preload in backward direction
        for (i = 1; i <= preload[0]; i++) {
            this.loadSlideByIndex(pswp.currIndex + (isForward ? (-i) : i));
        }
    }
    /**
     * @param {number} initialIndex
     */
    loadSlideByIndex(initialIndex) {
        const index = this.pswp.getLoopedIndex(initialIndex);
        // try to get cached content
        let content = this.getContentByIndex(index);
        if (!content) {
            // no cached content, so try to load from scratch:
            content = lazyLoadSlide(index, this.pswp);
            // if content can be loaded, add it to cache:
            if (content) {
                this.addToCache(content);
            }
        }
    }
    /**
     * @param {Slide} slide
     * @returns {Content}
     */
    getContentBySlide(slide) {
        let content = this.getContentByIndex(slide.index);
        if (!content) {
            // create content if not found in cache
            content = this.pswp.createContentFromData(slide.data, slide.index);
            this.addToCache(content);
        }
        // assign slide to content
        content.setSlide(slide);
        return content;
    }
    /**
     * @param {Content} content
     */
    addToCache(content) {
        // move to the end of array
        this.removeByIndex(content.index);
        this._cachedItems.push(content);
        if (this._cachedItems.length > this.limit) {
            // Destroy the first content that's not attached
            const indexToRemove = this._cachedItems.findIndex((item) => {
                return !item.isAttached && !item.hasSlide;
            });
            if (indexToRemove !== -1) {
                const removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
                removedItem.destroy();
            }
        }
    }
    /**
     * Removes an image from cache, does not destroy() it, just removes.
     *
     * @param {number} index
     */
    removeByIndex(index) {
        const indexToRemove = this._cachedItems.findIndex(item => item.index === index);
        if (indexToRemove !== -1) {
            this._cachedItems.splice(indexToRemove, 1);
        }
    }
    /**
     * @param {number} index
     * @returns {Content | undefined}
     */
    getContentByIndex(index) {
        return this._cachedItems.find(content => content.index === index);
    }
    destroy() {
        this._cachedItems.forEach(content => content.destroy());
        this._cachedItems = [];
    }
}
/** @typedef {import("../photoswipe.js").default} PhotoSwipe */
/** @typedef {import("../slide/slide.js").SlideData} SlideData */
/**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */
class PhotoSwipeBase extends Eventable {
    /**
     * Get total number of slides
     *
     * @returns {number}
     */
    getNumItems() {
        let numItems = 0;
        const dataSource = this.options?.dataSource;
        if (dataSource && 'length' in dataSource) {
            // may be an array or just object with length property
            numItems = dataSource.length;
        }
        else if (dataSource && 'gallery' in dataSource) {
            // query DOM elements
            if (!dataSource.items) {
                dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            if (dataSource.items) {
                numItems = dataSource.items.length;
            }
        }
        // legacy event, before filters were introduced
        const event = this.dispatch('numItems', {
            dataSource,
            numItems
        });
        return this.applyFilters('numItems', event.numItems, dataSource);
    }
    /**
     * @param {SlideData} slideData
     * @param {number} index
     * @returns {Content}
     */
    createContentFromData(slideData, index) {
        return new Content(slideData, this, index);
    }
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {number} index
     * @returns {SlideData}
     */
    getItemData(index) {
        const dataSource = this.options?.dataSource;
        /** @type {SlideData | HTMLElement} */
        let dataSourceItem = {};
        if (Array.isArray(dataSource)) {
            // Datasource is an array of elements
            dataSourceItem = dataSource[index];
        }
        else if (dataSource && 'gallery' in dataSource) {
            // dataSource has gallery property,
            // thus it was created by Lightbox, based on
            // gallery and children options
            // query DOM elements
            if (!dataSource.items) {
                dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            dataSourceItem = dataSource.items[index];
        }
        let itemData = dataSourceItem;
        if (itemData instanceof Element) {
            itemData = this._domElementToItemData(itemData);
        }
        // Dispatching the itemData event,
        // it's a legacy verion before filters were introduced
        const event = this.dispatch('itemData', {
            itemData: itemData || {},
            index
        });
        return this.applyFilters('itemData', event.itemData, index);
    }
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {HTMLElement} galleryElement
     * @returns {HTMLElement[]}
     */
    _getGalleryDOMElements(galleryElement) {
        if (this.options?.children || this.options?.childSelector) {
            return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
        }
        return [galleryElement];
    }
    /**
     * Converts DOM element to item data object.
     *
     * @param {HTMLElement} element DOM element
     * @returns {SlideData}
     */
    _domElementToItemData(element) {
        /** @type {SlideData} */
        const itemData = {
            element
        };
        const linkEl = /** @type {HTMLAnchorElement} */ (element.tagName === 'A'
            ? element
            : element.querySelector('a'));
        if (linkEl) {
            // src comes from data-pswp-src attribute,
            // if it's empty link href is used
            itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
            if (linkEl.dataset.pswpSrcset) {
                itemData.srcset = linkEl.dataset.pswpSrcset;
            }
            itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
            itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
            // support legacy w & h properties
            itemData.w = itemData.width;
            itemData.h = itemData.height;
            if (linkEl.dataset.pswpType) {
                itemData.type = linkEl.dataset.pswpType;
            }
            const thumbnailEl = element.querySelector('img');
            if (thumbnailEl) {
                // msrc is URL to placeholder image that's displayed before large image is loaded
                // by default it's displayed only for the first slide
                itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
                itemData.alt = thumbnailEl.getAttribute('alt') ?? '';
            }
            if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
                itemData.thumbCropped = true;
            }
        }
        return this.applyFilters('domItemData', itemData, element, linkEl);
    }
    /**
     * Lazy-load by slide data
     *
     * @param {SlideData} itemData Data about the slide
     * @param {number} index
     * @returns {Content} Image that is being decoded or false.
     */
    lazyLoadData(itemData, index) {
        return lazyLoadData(itemData, this, index);
    }
}
/** @typedef {import('./photoswipe.js').default} PhotoSwipe */
/** @typedef {import('./slide/get-thumb-bounds.js').Bounds} Bounds */
/** @typedef {import('./util/animations.js').AnimationProps} AnimationProps */
// some browsers do not paint
// elements which opacity is set to 0,
// since we need to pre-render elements for the animation -
// we set it to the minimum amount
const MIN_OPACITY = 0.003;
/**
 * Manages opening and closing transitions of the PhotoSwipe.
 *
 * It can perform zoom, fade or no transition.
 */
class Opener {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
        this.pswp = pswp;
        this.isClosed = true;
        this.isOpen = false;
        this.isClosing = false;
        this.isOpening = false;
        /**
         * @private
         * @type {number | false | undefined}
         */
        this._duration = undefined;
        /** @private */
        this._useAnimation = false;
        /** @private */
        this._croppedZoom = false;
        /** @private */
        this._animateRootOpacity = false;
        /** @private */
        this._animateBgOpacity = false;
        /**
         * @private
         * @type { HTMLDivElement | HTMLImageElement | null | undefined }
         */
        this._placeholder = undefined;
        /**
         * @private
         * @type { HTMLDivElement | undefined }
         */
        this._opacityElement = undefined;
        /**
         * @private
         * @type { HTMLDivElement | undefined }
         */
        this._cropContainer1 = undefined;
        /**
         * @private
         * @type { HTMLElement | null | undefined }
         */
        this._cropContainer2 = undefined;
        /**
         * @private
         * @type {Bounds | undefined}
         */
        this._thumbBounds = undefined;
        this._prepareOpen = this._prepareOpen.bind(this);
        // Override initial zoom and pan position
        pswp.on('firstZoomPan', this._prepareOpen);
    }
    open() {
        this._prepareOpen();
        this._start();
    }
    close() {
        if (this.isClosed || this.isClosing || this.isOpening) {
            // if we close during opening animation
            // for now do nothing,
            // browsers aren't good at changing the direction of the CSS transition
            return;
        }
        const slide = this.pswp.currSlide;
        this.isOpen = false;
        this.isOpening = false;
        this.isClosing = true;
        this._duration = this.pswp.options.hideAnimationDuration;
        if (slide && slide.currZoomLevel * slide.width >= this.pswp.options.maxWidthToAnimate) {
            this._duration = 0;
        }
        this._applyStartProps();
        setTimeout(() => {
            this._start();
        }, this._croppedZoom ? 30 : 0);
    }
    /** @private */
    _prepareOpen() {
        this.pswp.off('firstZoomPan', this._prepareOpen);
        if (!this.isOpening) {
            const slide = this.pswp.currSlide;
            this.isOpening = true;
            this.isClosing = false;
            this._duration = this.pswp.options.showAnimationDuration;
            if (slide && slide.zoomLevels.initial * slide.width >= this.pswp.options.maxWidthToAnimate) {
                this._duration = 0;
            }
            this._applyStartProps();
        }
    }
    /** @private */
    _applyStartProps() {
        const { pswp } = this;
        const slide = this.pswp.currSlide;
        const { options } = pswp;
        if (options.showHideAnimationType === 'fade') {
            options.showHideOpacity = true;
            this._thumbBounds = undefined;
        }
        else if (options.showHideAnimationType === 'none') {
            options.showHideOpacity = false;
            this._duration = 0;
            this._thumbBounds = undefined;
        }
        else if (this.isOpening && pswp._initialThumbBounds) {
            // Use initial bounds if defined
            this._thumbBounds = pswp._initialThumbBounds;
        }
        else {
            this._thumbBounds = this.pswp.getThumbBounds();
        }
        this._placeholder = slide?.getPlaceholderElement();
        pswp.animations.stopAll();
        // Discard animations when duration is less than 50ms
        this._useAnimation = Boolean(this._duration && this._duration > 50);
        this._animateZoom = Boolean(this._thumbBounds)
            && slide?.content.usePlaceholder()
            && (!this.isClosing || !pswp.mainScroll.isShifted());
        if (!this._animateZoom) {
            this._animateRootOpacity = true;
            if (this.isOpening && slide) {
                slide.zoomAndPanToInitial();
                slide.applyCurrentZoomPan();
            }
        }
        else {
            this._animateRootOpacity = options.showHideOpacity ?? false;
        }
        this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
        this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
        if (!this._useAnimation) {
            this._duration = 0;
            this._animateZoom = false;
            this._animateBgOpacity = false;
            this._animateRootOpacity = true;
            if (this.isOpening) {
                if (pswp.element) {
                    pswp.element.style.opacity = String(MIN_OPACITY);
                }
                pswp.applyBgOpacity(1);
            }
            return;
        }
        if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
            // Properties are used when animation from cropped thumbnail
            this._croppedZoom = true;
            this._cropContainer1 = this.pswp.container;
            this._cropContainer2 = this.pswp.currSlide?.holderElement;
            if (pswp.container) {
                pswp.container.style.overflow = 'hidden';
                pswp.container.style.width = pswp.viewportSize.x + 'px';
            }
        }
        else {
            this._croppedZoom = false;
        }
        if (this.isOpening) {
            // Apply styles before opening transition
            if (this._animateRootOpacity) {
                if (pswp.element) {
                    pswp.element.style.opacity = String(MIN_OPACITY);
                }
                pswp.applyBgOpacity(1);
            }
            else {
                if (this._animateBgOpacity && pswp.bg) {
                    pswp.bg.style.opacity = String(MIN_OPACITY);
                }
                if (pswp.element) {
                    pswp.element.style.opacity = '1';
                }
            }
            if (this._animateZoom) {
                this._setClosedStateZoomPan();
                if (this._placeholder) {
                    // tell browser that we plan to animate the placeholder
                    this._placeholder.style.willChange = 'transform';
                    // hide placeholder to allow hiding of
                    // elements that overlap it (such as icons over the thumbnail)
                    this._placeholder.style.opacity = String(MIN_OPACITY);
                }
            }
        }
        else if (this.isClosing) {
            // hide nearby slides to make sure that
            // they are not painted during the transition
            if (pswp.mainScroll.itemHolders[0]) {
                pswp.mainScroll.itemHolders[0].el.style.display = 'none';
            }
            if (pswp.mainScroll.itemHolders[2]) {
                pswp.mainScroll.itemHolders[2].el.style.display = 'none';
            }
            if (this._croppedZoom) {
                if (pswp.mainScroll.x !== 0) {
                    // shift the main scroller to zero position
                    pswp.mainScroll.resetPosition();
                    pswp.mainScroll.resize();
                }
            }
        }
    }
    /** @private */
    _start() {
        if (this.isOpening
            && this._useAnimation
            && this._placeholder
            && this._placeholder.tagName === 'IMG') {
            // To ensure smooth animation
            // we wait till the current slide image placeholder is decoded,
            // but no longer than 250ms,
            // and no shorter than 50ms
            // (just using requestanimationframe is not enough in Firefox,
            // for some reason)
            new Promise((resolve) => {
                let decoded = false;
                let isDelaying = true;
                decodeImage(/** @type {HTMLImageElement} */ (this._placeholder)).finally(() => {
                    decoded = true;
                    if (!isDelaying) {
                        resolve(true);
                    }
                });
                setTimeout(() => {
                    isDelaying = false;
                    if (decoded) {
                        resolve(true);
                    }
                }, 50);
                setTimeout(resolve, 250);
            }).finally(() => this._initiate());
        }
        else {
            this._initiate();
        }
    }
    /** @private */
    _initiate() {
        this.pswp.element?.style.setProperty('--pswp-transition-duration', this._duration + 'ms');
        this.pswp.dispatch(this.isOpening ? 'openingAnimationStart' : 'closingAnimationStart');
        // legacy event
        this.pswp.dispatch(
        /** @type {'initialZoomIn' | 'initialZoomOut'} */
        ('initialZoom' + (this.isOpening ? 'In' : 'Out')));
        this.pswp.element?.classList.toggle('pswp--ui-visible', this.isOpening);
        if (this.isOpening) {
            if (this._placeholder) {
                // unhide the placeholder
                this._placeholder.style.opacity = '1';
            }
            this._animateToOpenState();
        }
        else if (this.isClosing) {
            this._animateToClosedState();
        }
        if (!this._useAnimation) {
            this._onAnimationComplete();
        }
    }
    /** @private */
    _onAnimationComplete() {
        const { pswp } = this;
        this.isOpen = this.isOpening;
        this.isClosed = this.isClosing;
        this.isOpening = false;
        this.isClosing = false;
        pswp.dispatch(this.isOpen ? 'openingAnimationEnd' : 'closingAnimationEnd');
        // legacy event
        pswp.dispatch(
        /** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
        ('initialZoom' + (this.isOpen ? 'InEnd' : 'OutEnd')));
        if (this.isClosed) {
            pswp.destroy();
        }
        else if (this.isOpen) {
            if (this._animateZoom && pswp.container) {
                pswp.container.style.overflow = 'visible';
                pswp.container.style.width = '100%';
            }
            pswp.currSlide?.applyCurrentZoomPan();
        }
    }
    /** @private */
    _animateToOpenState() {
        const { pswp } = this;
        if (this._animateZoom) {
            if (this._croppedZoom && this._cropContainer1 && this._cropContainer2) {
                this._animateTo(this._cropContainer1, 'transform', 'translate3d(0,0,0)');
                this._animateTo(this._cropContainer2, 'transform', 'none');
            }
            if (pswp.currSlide) {
                pswp.currSlide.zoomAndPanToInitial();
                this._animateTo(pswp.currSlide.container, 'transform', pswp.currSlide.getCurrentTransform());
            }
        }
        if (this._animateBgOpacity && pswp.bg) {
            this._animateTo(pswp.bg, 'opacity', String(pswp.options.bgOpacity));
        }
        if (this._animateRootOpacity && pswp.element) {
            this._animateTo(pswp.element, 'opacity', '1');
        }
    }
    /** @private */
    _animateToClosedState() {
        const { pswp } = this;
        if (this._animateZoom) {
            this._setClosedStateZoomPan(true);
        }
        // do not animate opacity if it's already at 0
        if (this._animateBgOpacity && pswp.bgOpacity > 0.01 && pswp.bg) {
            this._animateTo(pswp.bg, 'opacity', '0');
        }
        if (this._animateRootOpacity && pswp.element) {
            this._animateTo(pswp.element, 'opacity', '0');
        }
    }
    /**
     * @private
     * @param {boolean} [animate]
     */
    _setClosedStateZoomPan(animate) {
        if (!this._thumbBounds)
            return;
        const { pswp } = this;
        const { innerRect } = this._thumbBounds;
        const { currSlide, viewportSize } = pswp;
        if (this._croppedZoom && innerRect && this._cropContainer1 && this._cropContainer2) {
            const containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
            const containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
            const containerTwoPanX = viewportSize.x - innerRect.w;
            const containerTwoPanY = viewportSize.y - innerRect.h;
            if (animate) {
                this._animateTo(this._cropContainer1, 'transform', toTransformString(containerOnePanX, containerOnePanY));
                this._animateTo(this._cropContainer2, 'transform', toTransformString(containerTwoPanX, containerTwoPanY));
            }
            else {
                setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
                setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
            }
        }
        if (currSlide) {
            equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
            currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
            if (animate) {
                this._animateTo(currSlide.container, 'transform', currSlide.getCurrentTransform());
            }
            else {
                currSlide.applyCurrentZoomPan();
            }
        }
    }
    /**
     * @private
     * @param {HTMLElement} target
     * @param {'transform' | 'opacity'} prop
     * @param {string} propValue
     */
    _animateTo(target, prop, propValue) {
        if (!this._duration) {
            target.style[prop] = propValue;
            return;
        }
        const { animations } = this.pswp;
        /** @type {AnimationProps} */
        const animProps = {
            duration: this._duration,
            easing: this.pswp.options.easing,
            onComplete: () => {
                if (!animations.activeAnimations.length) {
                    this._onAnimationComplete();
                }
            },
            target,
        };
        animProps[prop] = propValue;
        animations.startTransition(animProps);
    }
}
/**
 * @template T
 * @typedef {import('./types.js').Type<T>} Type<T>
 */
/** @typedef {import('./slide/slide.js').SlideData} SlideData */
/** @typedef {import('./slide/zoom-level.js').ZoomLevelOption} ZoomLevelOption */
/** @typedef {import('./ui/ui-element.js').UIElementData} UIElementData */
/** @typedef {import('./main-scroll.js').ItemHolder} ItemHolder */
/** @typedef {import('./core/eventable.js').PhotoSwipeEventsMap} PhotoSwipeEventsMap */
/** @typedef {import('./core/eventable.js').PhotoSwipeFiltersMap} PhotoSwipeFiltersMap */
/** @typedef {import('./slide/get-thumb-bounds').Bounds} Bounds */
/**
 * @template T
 * @typedef {import('./core/eventable.js').EventCallback<T>} EventCallback<T>
 */
/**
 * @template T
 * @typedef {import('./core/eventable.js').AugmentedEvent<T>} AugmentedEvent<T>
 */
/** @typedef {{ x: number; y: number; id?: string | number }} Point */
/** @typedef {{ top: number; bottom: number; left: number; right: number }} Padding */
/** @typedef {SlideData[]} DataSourceArray */
/** @typedef {{ gallery: HTMLElement; items?: HTMLElement[] }} DataSourceObject */
/** @typedef {DataSourceArray | DataSourceObject} DataSource */
/** @typedef {(point: Point, originalEvent: PointerEvent) => void} ActionFn */
/** @typedef {'close' | 'next' | 'zoom' | 'zoom-or-close' | 'toggle-controls'} ActionType */
/** @typedef {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} PhotoSwipeModule */
/** @typedef {PhotoSwipeModule | Promise<PhotoSwipeModule> | (() => Promise<PhotoSwipeModule>)} PhotoSwipeModuleOption */
/**
 * @typedef {string | NodeListOf<HTMLElement> | HTMLElement[] | HTMLElement} ElementProvider
 */
/** @typedef {Partial<PreparedPhotoSwipeOptions>} PhotoSwipeOptions https://photoswipe.com/options/ */
/**
 * @typedef {Object} PreparedPhotoSwipeOptions
 *
 * @prop {DataSource} [dataSource]
 * Pass an array of any items via dataSource option. Its length will determine amount of slides
 * (which may be modified further from numItems event).
 *
 * Each item should contain data that you need to generate slide
 * (for image slide it would be src (image URL), width (image width), height, srcset, alt).
 *
 * If these properties are not present in your initial array, you may "pre-parse" each item from itemData filter.
 *
 * @prop {number} bgOpacity
 * Background backdrop opacity, always define it via this option and not via CSS rgba color.
 *
 * @prop {number} spacing
 * Spacing between slides. Defined as ratio relative to the viewport width (0.1 = 10% of viewport).
 *
 * @prop {boolean} allowPanToNext
 * Allow swipe navigation to the next slide when the current slide is zoomed. Does not apply to mouse events.
 *
 * @prop {boolean} loop
 * If set to true you'll be able to swipe from the last to the first image.
 * Option is always false when there are less than 3 slides.
 *
 * @prop {boolean} [wheelToZoom]
 * By default PhotoSwipe zooms image with ctrl-wheel, if you enable this option - image will zoom just via wheel.
 *
 * @prop {boolean} pinchToClose
 * Pinch touch gesture to close the gallery.
 *
 * @prop {boolean} closeOnVerticalDrag
 * Vertical drag gesture to close the PhotoSwipe.
 *
 * @prop {Padding} [padding]
 * Slide area padding (in pixels).
 *
 * @prop {(viewportSize: Point, itemData: SlideData, index: number) => Padding} [paddingFn]
 * The option is checked frequently, so make sure it's performant. Overrides padding option if defined. For example:
 *
 * @prop {number | false} hideAnimationDuration
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} showAnimationDuration
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {number | false} zoomAnimationDuration
 * Transition duration in milliseconds, can be 0.
 *
 * @prop {string} easing
 * String, 'cubic-bezier(.4,0,.22,1)'. CSS easing function for open/close/zoom transitions.
 *
 * @prop {boolean} escKey
 * Esc key to close.
 *
 * @prop {boolean} arrowKeys
 * Left/right arrow keys for navigation.
 *
 * @prop {boolean} returnFocus
 * Restore focus the last active element after PhotoSwipe is closed.
 *
 * @prop {boolean} clickToCloseNonZoomable
 * If image is not zoomable (for example, smaller than viewport) it can be closed by clicking on it.
 *
 * @prop {ActionType | ActionFn | false} imageClickAction
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} bgClickAction
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} tapAction
 * Refer to click and tap actions page.
 *
 * @prop {ActionType | ActionFn | false} doubleTapAction
 * Refer to click and tap actions page.
 *
 * @prop {number} preloaderDelay
 * Delay before the loading indicator will be displayed,
 * if image is loaded during it - the indicator will not be displayed at all. Can be zero.
 *
 * @prop {string} indexIndicatorSep
 * Used for slide count indicator ("1 of 10 ").
 *
 * @prop {(options: PhotoSwipeOptions, pswp: PhotoSwipeBase) => Point} [getViewportSizeFn]
 * A function that should return slide viewport width and height, in format {x: 100, y: 100}.
 *
 * @prop {string} errorMsg
 * Message to display when the image wasn't able to load. If you need to display HTML - use contentErrorElement filter.
 *
 * @prop {[number, number]} preload
 * Lazy loading of nearby slides based on direction of movement. Should be an array with two integers,
 * first one - number of items to preload before the current image, second one - after the current image.
 * Two nearby images are always loaded.
 *
 * @prop {string} [mainClass]
 * Class that will be added to the root element of PhotoSwipe, may contain multiple separated by space.
 * Example on Styling page.
 *
 * @prop {HTMLElement} [appendToEl]
 * Element to which PhotoSwipe dialog will be appended when it opens.
 *
 * @prop {number} maxWidthToAnimate
 * Maximum width of image to animate, if initial rendered image width
 * is larger than this value - the opening/closing transition will be automatically disabled.
 *
 * @prop {string} [closeTitle]
 * Translating
 *
 * @prop {string} [zoomTitle]
 * Translating
 *
 * @prop {string} [arrowPrevTitle]
 * Translating
 *
 * @prop {string} [arrowNextTitle]
 * Translating
 *
 * @prop {'zoom' | 'fade' | 'none'} [showHideAnimationType]
 * To adjust opening or closing transition type use lightbox option `showHideAnimationType` (`String`).
 * It supports three values - `zoom` (default), `fade` (default if there is no thumbnail) and `none`.
 *
 * Animations are automatically disabled if user `(prefers-reduced-motion: reduce)`.
 *
 * @prop {number} index
 * Defines start slide index.
 *
 * @prop {(e: MouseEvent) => number} [getClickedIndexFn]
 *
 * @prop {boolean} [arrowPrev]
 * @prop {boolean} [arrowNext]
 * @prop {boolean} [zoom]
 * @prop {boolean} [close]
 * @prop {boolean} [counter]
 *
 * @prop {string} [arrowPrevSVG]
 * @prop {string} [arrowNextSVG]
 * @prop {string} [zoomSVG]
 * @prop {string} [closeSVG]
 * @prop {string} [counterSVG]
 *
 * @prop {string} [arrowPrevTitle]
 * @prop {string} [arrowNextTitle]
 * @prop {string} [zoomTitle]
 * @prop {string} [closeTitle]
 * @prop {string} [counterTitle]
 *
 * @prop {ZoomLevelOption} [initialZoomLevel]
 * @prop {ZoomLevelOption} [secondaryZoomLevel]
 * @prop {ZoomLevelOption} [maxZoomLevel]
 *
 * @prop {boolean} [mouseMovePan]
 * @prop {Point | null} [initialPointerPos]
 * @prop {boolean} [showHideOpacity]
 *
 * @prop {PhotoSwipeModuleOption} [pswpModule]
 * @prop {() => Promise<any>} [openPromise]
 * @prop {boolean} [preloadFirstSlide]
 * @prop {ElementProvider} [gallery]
 * @prop {string} [gallerySelector]
 * @prop {ElementProvider} [children]
 * @prop {string} [childSelector]
 * @prop {string | false} [thumbSelector]
 */
/** @type {PreparedPhotoSwipeOptions} */
const defaultOptions = {
    allowPanToNext: true,
    spacing: 0.1,
    loop: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,
    hideAnimationDuration: 333,
    showAnimationDuration: 333,
    zoomAnimationDuration: 333,
    escKey: true,
    arrowKeys: true,
    returnFocus: true,
    maxWidthToAnimate: 4000,
    clickToCloseNonZoomable: true,
    imageClickAction: 'zoom-or-close',
    bgClickAction: 'close',
    tapAction: 'toggle-controls',
    doubleTapAction: 'zoom',
    indexIndicatorSep: ' / ',
    preloaderDelay: 2000,
    bgOpacity: 0.8,
    index: 0,
    errorMsg: 'The image cannot be loaded',
    preload: [1, 2],
    easing: 'cubic-bezier(.4,0,.22,1)'
};
/**
 * PhotoSwipe Core
 */
class PhotoSwipe extends PhotoSwipeBase {
    /**
     * @param {PhotoSwipeOptions} [options]
     */
    constructor(options) {
        super();
        this.options = this._prepareOptions(options || {});
        /**
         * offset of viewport relative to document
         *
         * @type {Point}
         */
        this.offset = { x: 0, y: 0 };
        /**
         * @type {Point}
         * @private
         */
        this._prevViewportSize = { x: 0, y: 0 };
        /**
         * Size of scrollable PhotoSwipe viewport
         *
         * @type {Point}
         */
        this.viewportSize = { x: 0, y: 0 };
        /**
         * background (backdrop) opacity
         */
        this.bgOpacity = 1;
        this.currIndex = 0;
        this.potentialIndex = 0;
        this.isOpen = false;
        this.isDestroying = false;
        this.hasMouse = false;
        /**
         * @private
         * @type {SlideData}
         */
        this._initialItemData = {};
        /** @type {Bounds | undefined} */
        this._initialThumbBounds = undefined;
        /** @type {HTMLDivElement | undefined} */
        this.topBar = undefined;
        /** @type {HTMLDivElement | undefined} */
        this.element = undefined;
        /** @type {HTMLDivElement | undefined} */
        this.template = undefined;
        /** @type {HTMLDivElement | undefined} */
        this.container = undefined;
        /** @type {HTMLElement | undefined} */
        this.scrollWrap = undefined;
        /** @type {Slide | undefined} */
        this.currSlide = undefined;
        this.events = new DOMEvents();
        this.animations = new Animations();
        this.mainScroll = new MainScroll(this);
        this.gestures = new Gestures(this);
        this.opener = new Opener(this);
        this.keyboard = new Keyboard(this);
        this.contentLoader = new ContentLoader(this);
    }
    /** @returns {boolean} */
    init() {
        if (this.isOpen || this.isDestroying) {
            return false;
        }
        this.isOpen = true;
        this.dispatch('init'); // legacy
        this.dispatch('beforeOpen');
        this._createMainStructure();
        // add classes to the root element of PhotoSwipe
        let rootClasses = 'pswp--open';
        if (this.gestures.supportsTouch) {
            rootClasses += ' pswp--touch';
        }
        if (this.options.mainClass) {
            rootClasses += ' ' + this.options.mainClass;
        }
        if (this.element) {
            this.element.className += ' ' + rootClasses;
        }
        this.currIndex = this.options.index || 0;
        this.potentialIndex = this.currIndex;
        this.dispatch('firstUpdate'); // starting index can be modified here
        // initialize scroll wheel handler to block the scroll
        this.scrollWheel = new ScrollWheel(this);
        // sanitize index
        if (Number.isNaN(this.currIndex)
            || this.currIndex < 0
            || this.currIndex >= this.getNumItems()) {
            this.currIndex = 0;
        }
        if (!this.gestures.supportsTouch) {
            // enable mouse features if no touch support detected
            this.mouseDetected();
        }
        // causes forced synchronous layout
        this.updateSize();
        this.offset.y = window.pageYOffset;
        this._initialItemData = this.getItemData(this.currIndex);
        this.dispatch('gettingData', {
            index: this.currIndex,
            data: this._initialItemData,
            slide: undefined
        });
        // *Layout* - calculate size and position of elements here
        this._initialThumbBounds = this.getThumbBounds();
        this.dispatch('initialLayout');
        this.on('openingAnimationEnd', () => {
            const { itemHolders } = this.mainScroll;
            // Add content to the previous and next slide
            if (itemHolders[0]) {
                itemHolders[0].el.style.display = 'block';
                this.setContent(itemHolders[0], this.currIndex - 1);
            }
            if (itemHolders[2]) {
                itemHolders[2].el.style.display = 'block';
                this.setContent(itemHolders[2], this.currIndex + 1);
            }
            this.appendHeavy();
            this.contentLoader.updateLazy();
            this.events.add(window, 'resize', this._handlePageResize.bind(this));
            this.events.add(window, 'scroll', this._updatePageScrollOffset.bind(this));
            this.dispatch('bindEvents');
        });
        // set content for center slide (first time)
        if (this.mainScroll.itemHolders[1]) {
            this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
        }
        this.dispatch('change');
        this.opener.open();
        this.dispatch('afterInit');
        return true;
    }
    /**
     * Get looped slide index
     * (for example, -1 will return the last slide)
     *
     * @param {number} index
     * @returns {number}
     */
    getLoopedIndex(index) {
        const numSlides = this.getNumItems();
        if (this.options.loop) {
            if (index > numSlides - 1) {
                index -= numSlides;
            }
            if (index < 0) {
                index += numSlides;
            }
        }
        return clamp(index, 0, numSlides - 1);
    }
    appendHeavy() {
        this.mainScroll.itemHolders.forEach((itemHolder) => {
            itemHolder.slide?.appendHeavy();
        });
    }
    /**
     * Change the slide
     * @param {number} index New index
     */
    goTo(index) {
        this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
    }
    /**
     * Go to the next slide.
     */
    next() {
        this.goTo(this.potentialIndex + 1);
    }
    /**
     * Go to the previous slide.
     */
    prev() {
        this.goTo(this.potentialIndex - 1);
    }
    /**
     * @see slide/slide.js zoomTo
     *
     * @param {Parameters<Slide['zoomTo']>} args
     */
    zoomTo(...args) {
        this.currSlide?.zoomTo(...args);
    }
    /**
     * @see slide/slide.js toggleZoom
     */
    toggleZoom() {
        this.currSlide?.toggleZoom();
    }
    /**
     * Close the gallery.
     * After closing transition ends - destroy it
     */
    close() {
        if (!this.opener.isOpen || this.isDestroying) {
            return;
        }
        this.isDestroying = true;
        this.dispatch('close');
        this.events.removeAll();
        this.opener.close();
    }
    /**
     * Destroys the gallery:
     * - instantly closes the gallery
     * - unbinds events,
     * - cleans intervals and timeouts
     * - removes elements from DOM
     */
    destroy() {
        if (!this.isDestroying) {
            this.options.showHideAnimationType = 'none';
            this.close();
            return;
        }
        this.dispatch('destroy');
        this._listeners = {};
        if (this.scrollWrap) {
            this.scrollWrap.ontouchmove = null;
            this.scrollWrap.ontouchend = null;
        }
        this.element?.remove();
        this.mainScroll.itemHolders.forEach((itemHolder) => {
            itemHolder.slide?.destroy();
        });
        this.contentLoader.destroy();
        this.events.removeAll();
    }
    /**
     * Refresh/reload content of a slide by its index
     *
     * @param {number} slideIndex
     */
    refreshSlideContent(slideIndex) {
        this.contentLoader.removeByIndex(slideIndex);
        this.mainScroll.itemHolders.forEach((itemHolder, i) => {
            let potentialHolderIndex = (this.currSlide?.index ?? 0) - 1 + i;
            if (this.canLoop()) {
                potentialHolderIndex = this.getLoopedIndex(potentialHolderIndex);
            }
            if (potentialHolderIndex === slideIndex) {
                // set the new slide content
                this.setContent(itemHolder, slideIndex, true);
                // activate the new slide if it's current
                if (i === 1) {
                    this.currSlide = itemHolder.slide;
                    itemHolder.slide?.setIsActive(true);
                }
            }
        });
        this.dispatch('change');
    }
    /**
     * Set slide content
     *
     * @param {ItemHolder} holder mainScroll.itemHolders array item
     * @param {number} index Slide index
     * @param {boolean} [force] If content should be set even if index wasn't changed
     */
    setContent(holder, index, force) {
        if (this.canLoop()) {
            index = this.getLoopedIndex(index);
        }
        if (holder.slide) {
            if (holder.slide.index === index && !force) {
                // exit if holder already contains this slide
                // this could be common when just three slides are used
                return;
            }
            // destroy previous slide
            holder.slide.destroy();
            holder.slide = undefined;
        }
        // exit if no loop and index is out of bounds
        if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) {
            return;
        }
        const itemData = this.getItemData(index);
        holder.slide = new Slide(itemData, index, this);
        // set current slide
        if (index === this.currIndex) {
            this.currSlide = holder.slide;
        }
        holder.slide.append(holder.el);
    }
    /** @returns {Point} */
    getViewportCenterPoint() {
        return {
            x: this.viewportSize.x / 2,
            y: this.viewportSize.y / 2
        };
    }
    /**
     * Update size of all elements.
     * Executed on init and on page resize.
     *
     * @param {boolean} [force] Update size even if size of viewport was not changed.
     */
    updateSize(force) {
        // let item;
        // let itemIndex;
        if (this.isDestroying) {
            // exit if PhotoSwipe is closed or closing
            // (to avoid errors, as resize event might be delayed)
            return;
        }
        //const newWidth = this.scrollWrap.clientWidth;
        //const newHeight = this.scrollWrap.clientHeight;
        const newViewportSize = getViewportSize(this.options, this);
        if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
            // Exit if dimensions were not changed
            return;
        }
        //this._prevViewportSize.x = newWidth;
        //this._prevViewportSize.y = newHeight;
        equalizePoints(this._prevViewportSize, newViewportSize);
        this.dispatch('beforeResize');
        equalizePoints(this.viewportSize, this._prevViewportSize);
        this._updatePageScrollOffset();
        this.dispatch('viewportSize');
        // Resize slides only after opener animation is finished
        // and don't re-calculate size on inital size update
        this.mainScroll.resize(this.opener.isOpen);
        if (!this.hasMouse && window.matchMedia('(any-hover: hover)').matches) {
            this.mouseDetected();
        }
        this.dispatch('resize');
    }
    /**
     * @param {number} opacity
     */
    applyBgOpacity(opacity) {
        this.bgOpacity = Math.max(opacity, 0);
        if (this.bg) {
            this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
        }
    }
    /**
     * Whether mouse is detected
     */
    mouseDetected() {
        if (!this.hasMouse) {
            this.hasMouse = true;
            this.element?.classList.add('pswp--has_mouse');
        }
    }
    /**
     * Page resize event handler
     *
     * @private
     */
    _handlePageResize() {
        this.updateSize();
        // In iOS webview, if element size depends on document size,
        // it'll be measured incorrectly in resize event
        //
        // https://bugs.webkit.org/show_bug.cgi?id=170595
        // https://hackernoon.com/onresize-event-broken-in-mobile-safari-d8469027bf4d
        if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            setTimeout(() => {
                this.updateSize();
            }, 500);
        }
    }
    /**
     * Page scroll offset is used
     * to get correct coordinates
     * relative to PhotoSwipe viewport.
     *
     * @private
     */
    _updatePageScrollOffset() {
        this.setScrollOffset(0, window.pageYOffset);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    setScrollOffset(x, y) {
        this.offset.x = x;
        this.offset.y = y;
        this.dispatch('updateScrollOffset');
    }
    /**
     * Create main HTML structure of PhotoSwipe,
     * and add it to DOM
     *
     * @private
     */
    _createMainStructure() {
        // root DOM element of PhotoSwipe (.pswp)
        this.element = createElement('pswp', 'div');
        this.element.setAttribute('tabindex', '-1');
        this.element.setAttribute('role', 'dialog');
        // template is legacy prop
        this.template = this.element;
        // Background is added as a separate element,
        // as animating opacity is faster than animating rgba()
        this.bg = createElement('pswp__bg', 'div', this.element);
        this.scrollWrap = createElement('pswp__scroll-wrap', 'section', this.element);
        this.container = createElement('pswp__container', 'div', this.scrollWrap);
        // aria pattern: carousel
        this.scrollWrap.setAttribute('aria-roledescription', 'carousel');
        this.container.setAttribute('aria-live', 'off');
        this.container.setAttribute('id', 'pswp__items');
        this.mainScroll.appendHolders();
        this.ui = new UI(this);
        this.ui.init();
        // append to DOM
        (this.options.appendToEl || document.body).appendChild(this.element);
    }
    /**
     * Get position and dimensions of small thumbnail
     *   {x:,y:,w:}
     *
     * Height is optional (calculated based on the large image)
     *
     * @returns {Bounds | undefined}
     */
    getThumbBounds() {
        return getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
    }
    /**
     * If the PhotoSwipe can have continuous loop
     * @returns Boolean
     */
    canLoop() {
        return (this.options.loop && this.getNumItems() > 2);
    }
    /**
     * @private
     * @param {PhotoSwipeOptions} options
     * @returns {PreparedPhotoSwipeOptions}
     */
    _prepareOptions(options) {
        if (window.matchMedia('(prefers-reduced-motion), (update: slow)').matches) {
            options.showHideAnimationType = 'none';
            options.zoomAnimationDuration = 0;
        }
        /** @type {PreparedPhotoSwipeOptions} */
        return {
            ...defaultOptions,
            ...options
        };
    }
}
exports.default = PhotoSwipe;

},{}],5:[function(require,module,exports){
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
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9nbG9iYWwvcGhvdG9Td2lwZS50cyIsInNyYy9ndWlkZXNDb21wb25lbnRzLnRzIiwic3JjL2pzL3Bob3Rvc3dpcGUvcGhvdG9zd2lwZS1saWdodGJveC5lc20uanMiLCJzcmMvanMvcGhvdG9zd2lwZS9waG90b3N3aXBlLmVzbS5qcyIsInNyYy9tb2RlbHMvc2NyaXB0UGVyZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLGFBQWEsQ0FBQzs7Ozs7OztBQUNkLDRDQUE0QztBQUM1QyxnSEFBZ0Y7QUFDaEYsOEZBQStEO0FBRS9ELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksb0NBQWtCLENBQUM7UUFDdEMsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLGdCQUFnQixFQUFFLE1BQU07UUFDeEIsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLDJCQUFVO0tBQ3ZCLENBQUMsQ0FBQztJQUNILE1BQU0sT0FBTyxHQUFHO1FBQ2QsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLGdCQUFnQixFQUFFLE1BQU07UUFDeEIsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLDJCQUFVO0tBQ3ZCLENBQUM7SUFDRixNQUFNLEdBQUcsR0FBRztRQUNWLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4QixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsMkJBQVU7S0FDdkIsQ0FBQztJQUNGLE1BQU0sVUFBVSxHQUFHO1FBQ2pCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4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TyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksdUJBQXVCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O0FBOUJILDBCQStCQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwic3RyaWN0IG1vZGVcIjtcclxuLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IFBob3RvU3dpcGVMaWdodGJveCBmcm9tIFwiLi4vLi4vanMvcGhvdG9zd2lwZS9waG90b3N3aXBlLWxpZ2h0Ym94LmVzbS5qc1wiO1xyXG5pbXBvcnQgUGhvdG9Td2lwZSBmcm9tIFwiLi4vLi4vanMvcGhvdG9zd2lwZS9waG90b3N3aXBlLmVzbS5qc1wiO1xyXG5cclxuY29uc3QgcGhvdG9Td2lwZV9BcHBUYWIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlnaHRib3ggPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KHtcclxuICAgIGdhbGxlcnk6IFwiI2RldlRvb2xzLUdhbGxlcnlcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfSk7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGdhbGxlcnk6IFwiI2RldlRvb2xzLVBpY3R1cmVcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGwgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNFbGVtZW50c1RhYlwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbENvbnNvbGUgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNDb25zb2xlVGFiXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsU291cmNlcyA9IHtcclxuICAgIGdhbGxlcnk6IFwiI1NvdXJjZXNUYWJcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxOZXR3b3JrID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjTmV0d29ya1RhYlwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbFBlcmZvcm1hbmNlID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjUGVyZm9ybWFuY2VUYWJcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxNZW1vcnkgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNNZW1vcnlUYWJcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxTZWN1cml0eSA9IHtcclxuICAgIGdhbGxlcnk6IFwiI1NlY3VyaXR5VGFiXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsTGlnaHRob3VzZSA9IHtcclxuICAgIGdhbGxlcnk6IFwiI0xpZ2h0aG91c2VUYWJcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxDU1NPdmVydmlldyA9IHtcclxuICAgIGdhbGxlcnk6IFwiI0NTU092ZXJ2aWV3VGFiXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsQ2xlYXJDb29raWVzID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjQ2xlYXJDb29raWVzXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsSHRtbFJlc3BvbnNlcyA9IHtcclxuICAgIGdhbGxlcnk6IFwiI0h0bWxSZXNwb25zZXNcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxDaGF0R1BUID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjY2hhdEdQVFwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbFBhaW50M0QgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNwYWludDNEXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsQm9pbmMgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNCT0lOQ1wiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IHBpY2JveCA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3gob3B0aW9ucyk7XHJcbiAgY29uc3QgcGFnZSA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsKTtcclxuICBjb25zdCBwYWdlQ29uc29sZSA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsQ29uc29sZSk7XHJcbiAgY29uc3QgcGFnZVNvdXJjZXMgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbFNvdXJjZXMpO1xyXG4gIGNvbnN0IHBhZ2VOZXR3b3JrID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxOZXR3b3JrKTtcclxuICBjb25zdCBwYWdlUGVyZm9ybWFuY2UgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbFBlcmZvcm1hbmNlKTtcclxuICBjb25zdCBwYWdlTWVtb3J5ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxNZW1vcnkpO1xyXG4gIGNvbnN0IHBhZ2VTZWN1cml0eSA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsU2VjdXJpdHkpO1xyXG4gIGNvbnN0IHBhZ2VMaWdodGhvdXNlID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxMaWdodGhvdXNlKTtcclxuICBjb25zdCBwYWdlQ1NTT3ZlcnZpZXcgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbENTU092ZXJ2aWV3KTtcclxuICBjb25zdCBwYWdlQ2xlYXJDb29raWVzID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxDbGVhckNvb2tpZXMpO1xyXG4gIGNvbnN0IHBhZ2VIdG1sUmVzcG9uc2VzID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxIdG1sUmVzcG9uc2VzKTtcclxuICBjb25zdCBwYWdlQ2hhdEdQVCA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsQ2hhdEdQVCk7XHJcbiAgY29uc3QgcGFnZVBhaW50M0QgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbFBhaW50M0QpO1xyXG4gIGNvbnN0IHBhZ2VCb2luYyA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsQm9pbmMpO1xyXG5cclxuICBsaWdodGJveC5pbml0KCk7XHJcbiAgcGljYm94LmluaXQoKTtcclxuICBwYWdlLmluaXQoKTtcclxuICBwYWdlQ29uc29sZS5pbml0KCk7XHJcbiAgcGFnZVNvdXJjZXMuaW5pdCgpO1xyXG4gIHBhZ2VOZXR3b3JrLmluaXQoKTtcclxuICBwYWdlUGVyZm9ybWFuY2UuaW5pdCgpO1xyXG4gIHBhZ2VNZW1vcnkuaW5pdCgpO1xyXG4gIHBhZ2VTZWN1cml0eS5pbml0KCk7XHJcbiAgcGFnZUxpZ2h0aG91c2UuaW5pdCgpO1xyXG4gIHBhZ2VDU1NPdmVydmlldy5pbml0KCk7XHJcbiAgcGFnZUNsZWFyQ29va2llcy5pbml0KCk7XHJcbiAgcGFnZUh0bWxSZXNwb25zZXMuaW5pdCgpO1xyXG4gIHBhZ2VDaGF0R1BULmluaXQoKTtcclxuICBwYWdlUGFpbnQzRC5pbml0KCk7XHJcbiAgcGFnZUJvaW5jLmluaXQoKTtcclxufTtcclxuXHJcbmNvbnN0IHBob3RvU3dpcGVfUHdhID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh7XHJcbiAgICBnYWxsZXJ5OiBcIiNJbnN0cnVjdGlvbnNcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfSk7XHJcbiAgbGlnaHRib3guaW5pdCgpO1xyXG59O1xyXG5cclxuY29uc3QgcGhvdG9Td2lwZV9JbnNwY3RQZ3MgPSAoKSA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGdhbGxlcnk6IFwiI2luc3BlY3RQYWdlcy1HYWxsZXJ5XCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgbGlnaHRib3gyID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChvcHRpb25zKTtcclxuICBsaWdodGJveDIuaW5pdCgpO1xyXG59O1xyXG5leHBvcnQgeyBwaG90b1N3aXBlX1B3YSBhcyBwc19Qd2EsIHBob3RvU3dpcGVfQXBwVGFiIGFzIHBzX0F0LCBwaG90b1N3aXBlX0luc3BjdFBncyBhcyBwc19JcCB9O1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IHsgcHNfUHdhIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nbG9iYWwvcGhvdG9Td2lwZVwiO1xyXG5pbXBvcnQgUndiUGVyZiBmcm9tIFwiLi9tb2RlbHMvc2NyaXB0UGVyZlwiO1xyXG5cclxuY29uc3QgZ3VpZGVDb21wb25lbnRzID0ge1xyXG4gIGNoZWNrUGFnZTogKHBhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3dpdGNoIChwYWdlKSB7XHJcbiAgICAgICAgY2FzZSBcIi9ndWlkZXMvaHR0cHMuaHRtbFwiOlxyXG4gICAgICAgICAgcHNfUHdhKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgcGFnZSBjb21wb25lbnQ6ICR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtYWluOiAoKSA9PiB7XHJcbiAgICBsZXQgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IHBhZ2VQZXJmID0gbmV3IFJ3YlBlcmYoXCJHdWlkZWNvbXBvbmVudHNcIik7IC8vbWVhc3VyZSBwZXJmb3JtYW5jZVxyXG5cclxuICAgIGd1aWRlQ29tcG9uZW50cy5jaGVja1BhZ2UocGFnZSk7XHJcblxyXG4gICAgcGFnZVBlcmYuZW5kKCk7IC8vZW5kIHBlcmZvcm1hbmNlIG1lYXN1cmVcclxuICB9LFxyXG4gIGxvYWQ6ICgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBndWlkZUNvbXBvbmVudHMubWFpbik7XHJcbiAgfSxcclxufTtcclxuXHJcbmd1aWRlQ29tcG9uZW50cy5sb2FkKCk7XHJcbiIsIi8qIVxyXG4gICogUGhvdG9Td2lwZSBMaWdodGJveCA1LjMuNiAtIGh0dHBzOi8vcGhvdG9zd2lwZS5jb21cclxuICAqIChjKSAyMDIzIERteXRybyBTZW1lbm92XHJcbiAgKi9cclxuLypcclxuQXR0cmlidXRpb246IFJvYmVydCBBIEhvd2VsbCwgTWFyY2ggMjAyM1xyXG5PcmlnaW5hbCBBdXRob3I6IERteXRybyBTZW1lbm92LCBodHRwczovL3Bob3Rvc3dpcGUuY29tXHJcblNvdXJjZSBkaXN0cmlidXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9kaW1zZW1lbm92L1Bob3RvU3dpcGVcclxuQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG4qL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBUXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcclxuICogQHBhcmFtIHtUfSB0YWdOYW1lXHJcbiAqIEBwYXJhbSB7Tm9kZX0gW2FwcGVuZFRvRWxdXHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF19XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNsYXNzTmFtZSwgdGFnTmFtZSwgYXBwZW5kVG9FbCkge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgfVxyXG4gIGlmIChhcHBlbmRUb0VsKSB7XHJcbiAgICBhcHBlbmRUb0VsLmFwcGVuZENoaWxkKGVsKTtcclxuICB9XHJcbiAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRyYW5zZm9ybSBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IFt5XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlXVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9UcmFuc2Zvcm1TdHJpbmcoeCwgeSwgc2NhbGUpIHtcclxuICBsZXQgcHJvcFZhbHVlID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwke3kgfHwgMH1weCwwKWA7XHJcblxyXG4gIGlmIChzY2FsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwcm9wVmFsdWUgKz0gYCBzY2FsZTNkKCR7c2NhbGV9LCR7c2NhbGV9LDEpYDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9wVmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBseSB3aWR0aCBhbmQgaGVpZ2h0IENTUyBwcm9wZXJ0aWVzIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHdcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGhcclxuICovXHJcbmZ1bmN0aW9uIHNldFdpZHRoSGVpZ2h0KGVsLCB3LCBoKSB7XHJcbiAgZWwuc3R5bGUud2lkdGggPSAodHlwZW9mIHcgPT09ICdudW1iZXInKSA/IGAke3d9cHhgIDogdztcclxuICBlbC5zdHlsZS5oZWlnaHQgPSAodHlwZW9mIGggPT09ICdudW1iZXInKSA/IGAke2h9cHhgIDogaDtcclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtMT0FEX1NUQVRFW2tleW9mIExPQURfU1RBVEVdfSBMb2FkU3RhdGUgKi9cclxuLyoqIEB0eXBlIHt7IElETEU6ICdpZGxlJzsgTE9BRElORzogJ2xvYWRpbmcnOyBMT0FERUQ6ICdsb2FkZWQnOyBFUlJPUjogJ2Vycm9yJyB9fSAqL1xyXG5jb25zdCBMT0FEX1NUQVRFID0ge1xyXG4gIElETEU6ICdpZGxlJyxcclxuICBMT0FESU5HOiAnbG9hZGluZycsXHJcbiAgTE9BREVEOiAnbG9hZGVkJyxcclxuICBFUlJPUjogJ2Vycm9yJyxcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgY2xpY2sgb3Iga2V5ZG93biBldmVudCB3YXMgZGlzcGF0Y2hlZFxyXG4gKiB3aXRoIGEgc3BlY2lhbCBrZXkgb3IgdmlhIG1vdXNlIHdoZWVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge01vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50fSBlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gc3BlY2lhbEtleVVzZWQoZSkge1xyXG4gIHJldHVybiAoJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA9PT0gMSkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5O1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYGdhbGxlcnlgIG9yIGBjaGlsZHJlbmAgb3B0aW9ucy5cclxuICpcclxuICogQHBhcmFtIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5FbGVtZW50UHJvdmlkZXJ9IFtvcHRpb25dXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbGVnYWN5U2VsZWN0b3JdXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBEb2N1bWVudH0gW3BhcmVudF1cclxuICogQHJldHVybnMgSFRNTEVsZW1lbnRbXVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKG9wdGlvbiwgbGVnYWN5U2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50KSB7XHJcbiAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xyXG4gIGxldCBlbGVtZW50cyA9IFtdO1xyXG5cclxuICBpZiAob3B0aW9uIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgZWxlbWVudHMgPSBbb3B0aW9uXTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkob3B0aW9uKSkge1xyXG4gICAgZWxlbWVudHMgPSBBcnJheS5mcm9tKG9wdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gdHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBsZWdhY3lTZWxlY3RvcjtcclxuICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICBlbGVtZW50cyA9IEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50cztcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHZhcmlhYmxlIGlzIFBob3RvU3dpcGUgY2xhc3NcclxuICpcclxuICogQHBhcmFtIHthbnl9IGZuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNQc3dwQ2xhc3MoZm4pIHtcclxuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXHJcbiAgICAmJiBmbi5wcm90b3R5cGVcclxuICAgICYmIGZuLnByb3RvdHlwZS5nb1RvO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYnJvd3NlciBpcyBTYWZhcmlcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcclxuICByZXR1cm4gISEobmF2aWdhdG9yLnZlbmRvciAmJiBuYXZpZ2F0b3IudmVuZG9yLm1hdGNoKC9hcHBsZS9pKSk7XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9saWdodGJveC9saWdodGJveC5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVMaWdodGJveCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5EYXRhU291cmNlfSBEYXRhU291cmNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi91aS91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvY29udGVudC5qcycpLmRlZmF1bHR9IENvbnRlbnREZWZhdWx0ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS96b29tLWxldmVsLmpzJykuZGVmYXVsdH0gWm9vbUxldmVsICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9nZXQtdGh1bWItYm91bmRzLmpzJykuQm91bmRzfSBCb3VuZHMgKi9cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyBhZGRpbmcgYW4gYXJiaXRyYXJ5IHByb3BzIHRvIHRoZSBDb250ZW50XHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vY3VzdG9tLWNvbnRlbnQvI3VzaW5nLXdlYnAtaW1hZ2UtZm9ybWF0XHJcbiAqIEB0eXBlZGVmIHtDb250ZW50RGVmYXVsdCAmIFJlY29yZDxzdHJpbmcsIGFueT59IENvbnRlbnRcclxuICovXHJcbi8qKiBAdHlwZWRlZiB7eyB4PzogbnVtYmVyOyB5PzogbnVtYmVyIH19IFBvaW50ICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUGhvdG9Td2lwZUV2ZW50c01hcCBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy9cclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9hZGRpbmctdWktZWxlbWVudHMvXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHVpUmVnaXN0ZXJcclxuICogQHByb3Age3sgZGF0YTogVUlFbGVtZW50RGF0YSB9fSB1aUVsZW1lbnRDcmVhdGVcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI2luaXRpYWxpemF0aW9uLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBiZWZvcmVPcGVuXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGZpcnN0VXBkYXRlXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxMYXlvdXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2hhbmdlXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGFmdGVySW5pdFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBiaW5kRXZlbnRzXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNvcGVuaW5nLW9yLWNsb3NpbmctdHJhbnNpdGlvbi1ldmVudHNcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gb3BlbmluZ0FuaW1hdGlvblN0YXJ0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IG9wZW5pbmdBbmltYXRpb25FbmRcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2xvc2luZ0FuaW1hdGlvblN0YXJ0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNsb3NpbmdBbmltYXRpb25FbmRcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI2Nsb3NpbmctZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNsb3NlXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGRlc3Ryb3lcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI3BvaW50ZXItYW5kLWdlc3R1cmUtZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBwb2ludGVyRG93blxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gcG9pbnRlck1vdmVcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHBvaW50ZXJVcFxyXG4gKiBAcHJvcCB7eyBiZ09wYWNpdHk6IG51bWJlciB9fSBwaW5jaENsb3NlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwYW5ZOiBudW1iZXIgfX0gdmVydGljYWxEcmFnIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jc2xpZGUtY29udGVudC1ldmVudHNcclxuICpcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50SW5pdFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBpc0xhenk6IGJvb2xlYW4gfX0gY29udGVudExvYWQgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IGlzTGF6eTogYm9vbGVhbiB9fSBjb250ZW50TG9hZEltYWdlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBzbGlkZTogU2xpZGU7IGlzRXJyb3I/OiBib29sZWFuIH19IGxvYWRDb21wbGV0ZVxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBzbGlkZTogU2xpZGUgfX0gbG9hZEVycm9yXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH19IGNvbnRlbnRSZXNpemUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBzbGlkZTogU2xpZGUgfX0gaW1hZ2VTaXplQ2hhbmdlXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudExhenlMb2FkIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRBcHBlbmQgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEFjdGl2YXRlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnREZWFjdGl2YXRlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRSZW1vdmUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudERlc3Ryb3kgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqXHJcbiAqXHJcbiAqIHVuZG9jdW1lbnRlZFxyXG4gKlxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBpbWFnZUNsaWNrQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBiZ0NsaWNrQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSB0YXBBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IGRvdWJsZVRhcEFjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICpcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogS2V5Ym9hcmRFdmVudCB9fSBrZXlkb3duIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyB4OiBudW1iZXI7IGRyYWdnaW5nOiBib29sZWFuIH19IG1vdmVNYWluU2Nyb2xsXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBmaXJzdFpvb21QYW5cclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIHwgdW5kZWZpbmVkLCBkYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIgfX0gZ2V0dGluZ0RhdGFcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmVmb3JlUmVzaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHJlc2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSB2aWV3cG9ydFNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gdXBkYXRlU2Nyb2xsT2Zmc2V0XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZUluaXRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGFmdGVyU2V0Q29udGVudFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVMb2FkXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhcHBlbmRIZWF2eSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGFwcGVuZEhlYXZ5Q29udGVudFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVBY3RpdmF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVEZWFjdGl2YXRlXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZURlc3Ryb3lcclxuICogQHByb3Age3sgZGVzdFpvb21MZXZlbDogbnVtYmVyLCBjZW50ZXJQb2ludDogUG9pbnQgfCB1bmRlZmluZWQsIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyIHwgZmFsc2UgfCB1bmRlZmluZWQgfX0gYmVmb3JlWm9vbVRvXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSB6b29tUGFuVXBkYXRlXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBpbml0aWFsWm9vbVBhblxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gY2FsY1NsaWRlU2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSByZXNvbHV0aW9uQ2hhbmdlZFxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBXaGVlbEV2ZW50IH19IHdoZWVsIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRBcHBlbmRJbWFnZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgaW5kZXg6IG51bWJlcjsgaXRlbURhdGE6IFNsaWRlRGF0YSB9fSBsYXp5TG9hZFNsaWRlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBsYXp5TG9hZFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gY2FsY0JvdW5kc1xyXG4gKiBAcHJvcCB7eyB6b29tTGV2ZWxzOiBab29tTGV2ZWwsIHNsaWRlRGF0YTogU2xpZGVEYXRhIH19IHpvb21MZXZlbHNVcGRhdGVcclxuICpcclxuICpcclxuICogbGVnYWN5XHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21JblxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbU91dFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbUluRW5kXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tT3V0RW5kXHJcbiAqIEBwcm9wIHt7IGRhdGFTb3VyY2U6IERhdGFTb3VyY2UgfCB1bmRlZmluZWQsIG51bUl0ZW1zOiBudW1iZXIgfX0gbnVtSXRlbXNcclxuICogQHByb3Age3sgaXRlbURhdGE6IFNsaWRlRGF0YTsgaW5kZXg6IG51bWJlciB9fSBpdGVtRGF0YVxyXG4gKiBAcHJvcCB7eyBpbmRleDogbnVtYmVyLCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbnN0YW5jZTogUGhvdG9Td2lwZSB9fSB0aHVtYkJvdW5kc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQaG90b1N3aXBlRmlsdGVyc01hcCBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvXHJcbiAqXHJcbiAqIEBwcm9wIHsobnVtSXRlbXM6IG51bWJlciwgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSB8IHVuZGVmaW5lZCkgPT4gbnVtYmVyfSBudW1JdGVtc1xyXG4gKiBNb2RpZnkgdGhlIHRvdGFsIGFtb3VudCBvZiBzbGlkZXMuIEV4YW1wbGUgb24gRGF0YSBzb3VyY2VzIHBhZ2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jbnVtaXRlbXNcclxuICpcclxuICogQHByb3AgeyhpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBTbGlkZURhdGF9IGl0ZW1EYXRhXHJcbiAqIE1vZGlmeSBzbGlkZSBpdGVtIGRhdGEuIEV4YW1wbGUgb24gRGF0YSBzb3VyY2VzIHBhZ2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXRlbWRhdGFcclxuICpcclxuICogQHByb3AgeyhpdGVtRGF0YTogU2xpZGVEYXRhLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgbGlua0VsOiBIVE1MQW5jaG9yRWxlbWVudCkgPT4gU2xpZGVEYXRhfSBkb21JdGVtRGF0YVxyXG4gKiBNb2RpZnkgaXRlbSBkYXRhIHdoZW4gaXQncyBwYXJzZWQgZnJvbSBET00gZWxlbWVudC4gRXhhbXBsZSBvbiBEYXRhIHNvdXJjZXMgcGFnZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNkb21pdGVtZGF0YVxyXG4gKlxyXG4gKiBAcHJvcCB7KGNsaWNrZWRJbmRleDogbnVtYmVyLCBlOiBNb3VzZUV2ZW50LCBpbnN0YW5jZTogUGhvdG9Td2lwZUxpZ2h0Ym94KSA9PiBudW1iZXJ9IGNsaWNrZWRJbmRleFxyXG4gKiBNb2RpZnkgY2xpY2tlZCBnYWxsZXJ5IGl0ZW0gaW5kZXguXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jY2xpY2tlZGluZGV4XHJcbiAqXHJcbiAqIEBwcm9wIHsocGxhY2Vob2xkZXJTcmM6IHN0cmluZyB8IGZhbHNlLCBjb250ZW50OiBDb250ZW50KSA9PiBzdHJpbmcgfCBmYWxzZX0gcGxhY2Vob2xkZXJTcmNcclxuICogTW9kaWZ5IHBsYWNlaG9sZGVyIGltYWdlIHNvdXJjZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNwbGFjZWhvbGRlcnNyY1xyXG4gKlxyXG4gKiBAcHJvcCB7KGlzQ29udGVudExvYWRpbmc6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzQ29udGVudExvYWRpbmdcclxuICogTW9kaWZ5IGlmIHRoZSBjb250ZW50IGlzIGN1cnJlbnRseSBsb2FkaW5nLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lzY29udGVudGxvYWRpbmdcclxuICpcclxuICogQHByb3Ageyhpc0NvbnRlbnRab29tYWJsZTogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gaXNDb250ZW50Wm9vbWFibGVcclxuICogTW9kaWZ5IGlmIHRoZSBjb250ZW50IGNhbiBiZSB6b29tZWQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXNjb250ZW50em9vbWFibGVcclxuICpcclxuICogQHByb3Ageyh1c2VDb250ZW50UGxhY2Vob2xkZXI6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IHVzZUNvbnRlbnRQbGFjZWhvbGRlclxyXG4gKiBNb2RpZnkgaWYgdGhlIHBsYWNlaG9sZGVyIHNob3VsZCBiZSB1c2VkIGZvciB0aGUgY29udGVudC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN1c2Vjb250ZW50cGxhY2Vob2xkZXJcclxuICpcclxuICogQHByb3Ageyhpc0tlZXBpbmdQbGFjZWhvbGRlcjogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gaXNLZWVwaW5nUGxhY2Vob2xkZXJcclxuICogTW9kaWZ5IGlmIHRoZSBwbGFjZWhvbGRlciBzaG91bGQgYmUga2VwdCBhZnRlciB0aGUgY29udGVudCBpcyBsb2FkZWQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXNrZWVwaW5ncGxhY2Vob2xkZXJcclxuICpcclxuICpcclxuICogQHByb3Ageyhjb250ZW50RXJyb3JFbGVtZW50OiBIVE1MRWxlbWVudCwgY29udGVudDogQ29udGVudCkgPT4gSFRNTEVsZW1lbnR9IGNvbnRlbnRFcnJvckVsZW1lbnRcclxuICogTW9kaWZ5IGFuIGVsZW1lbnQgd2hlbiB0aGUgY29udGVudCBoYXMgZXJyb3Igc3RhdGUgKGZvciBleGFtcGxlLCBpZiBpbWFnZSBjYW5ub3QgYmUgbG9hZGVkKS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNjb250ZW50ZXJyb3JlbGVtZW50XHJcbiAqXHJcbiAqIEBwcm9wIHsoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRhdGE6IFVJRWxlbWVudERhdGEpID0+IEhUTUxFbGVtZW50fSB1aUVsZW1lbnRcclxuICogTW9kaWZ5IGEgVUkgZWxlbWVudCB0aGF0J3MgYmVpbmcgY3JlYXRlZC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN1aWVsZW1lbnRcclxuICpcclxuICogQHByb3Ageyh0aHVtYm5haWw6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCwgaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlcikgPT4gSFRNTEVsZW1lbnR9IHRodW1iRWxcclxuICogTW9kaWZ5IHRoZSB0aHVibW5haWwgZWxlbWVudCBmcm9tIHdoaWNoIG9wZW5pbmcgem9vbSBhbmltYXRpb24gc3RhcnRzIG9yIGVuZHMuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdGh1bWJlbFxyXG4gKlxyXG4gKiBAcHJvcCB7KHRodW1iQm91bmRzOiBCb3VuZHMgfCB1bmRlZmluZWQsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IEJvdW5kc30gdGh1bWJCb3VuZHNcclxuICogTW9kaWZ5IHRoZSB0aHVibW5haWwgYm91bmRzIGZyb20gd2hpY2ggb3BlbmluZyB6b29tIGFuaW1hdGlvbiBzdGFydHMgb3IgZW5kcy5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN0aHVtYmJvdW5kc1xyXG4gKlxyXG4gKiBAcHJvcCB7KHNyY3NldFNpemVzV2lkdGg6IG51bWJlciwgY29udGVudDogQ29udGVudCkgPT4gbnVtYmVyfSBzcmNzZXRTaXplc1dpZHRoXHJcbiAqXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICogQHR5cGVkZWYge3sgZm46IFBob3RvU3dpcGVGaWx0ZXJzTWFwW1RdLCBwcmlvcml0eTogbnVtYmVyIH19IEZpbHRlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICogQHR5cGVkZWYge1Bob3RvU3dpcGVFdmVudHNNYXBbVF0gZXh0ZW5kcyB1bmRlZmluZWQgPyBQaG90b1N3aXBlRXZlbnQ8VD4gOiBQaG90b1N3aXBlRXZlbnQ8VD4gJiBQaG90b1N3aXBlRXZlbnRzTWFwW1RdfSBBdWdtZW50ZWRFdmVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICogQHR5cGVkZWYgeyhldmVudDogQXVnbWVudGVkRXZlbnQ8VD4pID0+IHZvaWR9IEV2ZW50Q2FsbGJhY2tcclxuICovXHJcblxyXG4vKipcclxuICogQmFzZSBQaG90b1N3aXBlIGV2ZW50IG9iamVjdFxyXG4gKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICovXHJcbmNsYXNzIFBob3RvU3dpcGVFdmVudCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtUfSB0eXBlXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdfSBbZGV0YWlsc11cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0eXBlLCBkZXRhaWxzKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XHJcbiAgICBpZiAoZGV0YWlscykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRldGFpbHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmVudERlZmF1bHQoKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgYmFzZSBjbGFzcyB0aGF0IGNhbiBsaXN0ZW4gYW5kIGRpc3BhdGNoIGZvciBldmVudHMuXHJcbiAqIFNoYXJlZCBieSBQaG90b1N3aXBlIENvcmUgYW5kIFBob3RvU3dpcGUgTGlnaHRib3gsIGV4dGVuZGVkIGJ5IGJhc2UuanNcclxuICovXHJcbmNsYXNzIEV2ZW50YWJsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHt7IFtUIGluIGtleW9mIFBob3RvU3dpcGVFdmVudHNNYXBdPzogKChldmVudDogQXVnbWVudGVkRXZlbnQ8VD4pID0+IHZvaWQpW10gfX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7eyBbVCBpbiBrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcF0/OiBGaWx0ZXI8VD5bXSB9fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9maWx0ZXJzID0ge307XHJcblxyXG4gICAgLyoqIEB0eXBlIHtQaG90b1N3aXBlIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5wc3dwID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7UGhvdG9Td2lwZU9wdGlvbnMgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRmlsdGVyc01hcFtUXX0gZm5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcHJpb3JpdHlcclxuICAgKi9cclxuICBhZGRGaWx0ZXIobmFtZSwgZm4sIHByaW9yaXR5ID0gMTAwKSB7XHJcbiAgICBpZiAoIXRoaXMuX2ZpbHRlcnNbbmFtZV0pIHtcclxuICAgICAgdGhpcy5fZmlsdGVyc1tuYW1lXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LnB1c2goeyBmbiwgcHJpb3JpdHkgfSk7XHJcbiAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5zb3J0KChmMSwgZjIpID0+IGYxLnByaW9yaXR5IC0gZjIucHJpb3JpdHkpO1xyXG5cclxuICAgIHRoaXMucHN3cD8uYWRkRmlsdGVyKG5hbWUsIGZuLCBwcmlvcml0eSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRmlsdGVyc01hcFtUXX0gZm5cclxuICAgKi9cclxuICByZW1vdmVGaWx0ZXIobmFtZSwgZm4pIHtcclxuICAgIGlmICh0aGlzLl9maWx0ZXJzW25hbWVdKSB7XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgdGhpcy5fZmlsdGVyc1tuYW1lXSA9IHRoaXMuX2ZpbHRlcnNbbmFtZV0uZmlsdGVyKGZpbHRlciA9PiAoZmlsdGVyLmZuICE9PSBmbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBzd3ApIHtcclxuICAgICAgdGhpcy5wc3dwLnJlbW92ZUZpbHRlcihuYW1lLCBmbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQYXJhbWV0ZXJzPFBob3RvU3dpcGVGaWx0ZXJzTWFwW1RdPn0gYXJnc1xyXG4gICAqIEByZXR1cm5zIHtQYXJhbWV0ZXJzPFBob3RvU3dpcGVGaWx0ZXJzTWFwW1RdPlswXX1cclxuICAgKi9cclxuICBhcHBseUZpbHRlcnMobmFtZSwgLi4uYXJncykge1xyXG4gICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8uZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgYXJnc1swXSA9IGZpbHRlci5mbi5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFyZ3NbMF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2s8VD59IGZuXHJcbiAgICovXHJcbiAgb24obmFtZSwgZm4pIHtcclxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdPy5wdXNoKGZuKTtcclxuXHJcbiAgICAvLyBXaGVuIGJpbmRpbmcgZXZlbnRzIHRvIGxpZ2h0Ym94LFxyXG4gICAgLy8gYWxzbyBiaW5kIGV2ZW50cyB0byBQaG90b1N3aXBlIENvcmUsXHJcbiAgICAvLyBpZiBpdCdzIG9wZW4uXHJcbiAgICB0aGlzLnBzd3A/Lm9uKG5hbWUsIGZuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFjazxUPn0gZm5cclxuICAgKi9cclxuICBvZmYobmFtZSwgZm4pIHtcclxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV0uZmlsdGVyKGxpc3RlbmVyID0+IChmbiAhPT0gbGlzdGVuZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBzd3A/Lm9mZihuYW1lLCBmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVFdmVudHNNYXBbVF19IFtkZXRhaWxzXVxyXG4gICAqIEByZXR1cm5zIHtBdWdtZW50ZWRFdmVudDxUPn1cclxuICAgKi9cclxuICBkaXNwYXRjaChuYW1lLCBkZXRhaWxzKSB7XHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBzd3AuZGlzcGF0Y2gobmFtZSwgZGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnQgPSAvKiogQHR5cGUge0F1Z21lbnRlZEV2ZW50PFQ+fSAqLyAobmV3IFBob3RvU3dpcGVFdmVudChuYW1lLCBkZXRhaWxzKSk7XHJcblxyXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdPy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYWNlaG9sZGVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IGZhbHNlfSBpbWFnZVNyY1xyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlU3JjLCBjb250YWluZXIpIHtcclxuICAgIC8vIENyZWF0ZSBwbGFjZWhvbGRlclxyXG4gICAgLy8gKHN0cmV0Y2hlZCB0aHVtYm5haWwgb3Igc2ltcGxlIGRpdiBiZWhpbmQgdGhlIG1haW4gaW1hZ2UpXHJcbiAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCB8IG51bGx9ICovXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAncHN3cF9faW1nIHBzd3BfX2ltZy0tcGxhY2Vob2xkZXInLFxyXG4gICAgICBpbWFnZVNyYyA/ICdpbWcnIDogJ2RpdicsXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoaW1hZ2VTcmMpIHtcclxuICAgICAgY29uc3QgaW1nRWwgPSAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnR9ICovICh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICBpbWdFbC5kZWNvZGluZyA9ICdhc3luYyc7XHJcbiAgICAgIGltZ0VsLmFsdCA9ICcnO1xyXG4gICAgICBpbWdFbC5zcmMgPSBpbWFnZVNyYztcclxuICAgICAgaW1nRWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09ICdJTUcnKSB7XHJcbiAgICAgIC8vIFVzZSB0cmFuc2Zvcm0gc2NhbGUoKSB0byBtb2RpZnkgaW1nIHBsYWNlaG9sZGVyIHNpemVcclxuICAgICAgLy8gKGluc3RlYWQgb2YgY2hhbmdpbmcgd2lkdGgvaGVpZ2h0IGRpcmVjdGx5KS5cclxuICAgICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcmZvcm1hbmNlLCBzcGVjaWZpY2FsbHkgaW4gaU9TMTUgU2FmYXJpLlxyXG4gICAgICBzZXRXaWR0aEhlaWdodCh0aGlzLmVsZW1lbnQsIDI1MCwgJ2F1dG8nKTtcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICcwIDAnO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdG9UcmFuc2Zvcm1TdHJpbmcoMCwgMCwgd2lkdGggLyAyNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50Py5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvYmFzZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVCYXNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi91dGlsL3V0aWwuanMnKS5Mb2FkU3RhdGV9IExvYWRTdGF0ZSAqL1xyXG5cclxuY2xhc3MgQ29udGVudCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIFNsaWRlIGRhdGFcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBpbnN0YW5jZSBQaG90b1N3aXBlIG9yIFBob3RvU3dpcGVMaWdodGJveCBpbnN0YW5jZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGl0ZW1EYXRhLCBpbnN0YW5jZSwgaW5kZXgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgIHRoaXMuZGF0YSA9IGl0ZW1EYXRhO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtQbGFjZWhvbGRlciB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHR5cGUge1NsaWRlIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5zbGlkZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXllZEltYWdlV2lkdGggPSAwO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRJbWFnZUhlaWdodCA9IDA7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IE51bWJlcih0aGlzLmRhdGEudykgfHwgTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgfHwgMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTnVtYmVyKHRoaXMuZGF0YS5oKSB8fCBOdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgfHwgMDtcclxuXHJcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzU2xpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNEZWNvZGluZyA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtMb2FkU3RhdGV9ICovXHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5JRExFO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEudHlwZSkge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLmRhdGEudHlwZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnNyYykge1xyXG4gICAgICB0aGlzLnR5cGUgPSAnaW1hZ2UnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50eXBlID0gJ2h0bWwnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRJbml0JywgeyBjb250ZW50OiB0aGlzIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5rZWVwUGxhY2Vob2xkZXIoKSkge1xyXG4gICAgICAvLyBXaXRoIGRlbGF5LCBhcyBpbWFnZSBtaWdodCBiZSBsb2FkZWQsIGJ1dCBub3QgcmVuZGVyZWRcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlbG9hZCBjb250ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTGF6eVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbG9hZF1cclxuICAgKi9cclxuICBsb2FkKGlzTGF6eSwgcmVsb2FkKSB7XHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLnVzZVBsYWNlaG9sZGVyKCkpIHtcclxuICAgICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJTcmMgPSB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgICAgICdwbGFjZWhvbGRlclNyYycsXHJcbiAgICAgICAgICAvLyB1c2UgIGltYWdlLWJhc2VkIHBsYWNlaG9sZGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBzbGlkZSxcclxuICAgICAgICAgIC8vIGFzIHJlbmRlcmluZyAoZXZlbiBzbWFsbCBzdHJldGNoZWQgdGh1bWJuYWlsKSBpcyBhbiBleHBlbnNpdmUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAodGhpcy5kYXRhLm1zcmMgJiYgdGhpcy5zbGlkZS5pc0ZpcnN0U2xpZGUpID8gdGhpcy5kYXRhLm1zcmMgOiBmYWxzZSxcclxuICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBuZXcgUGxhY2Vob2xkZXIoXHJcbiAgICAgICAgICBwbGFjZWhvbGRlclNyYyxcclxuICAgICAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlckVsID0gdGhpcy5wbGFjZWhvbGRlci5lbGVtZW50O1xyXG4gICAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciB0byBET00gaWYgaXQgd2FzIGFscmVhZHkgY3JlYXRlZFxyXG4gICAgICAgIGlmIChwbGFjZWhvbGRlckVsICYmICFwbGFjZWhvbGRlckVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLnByZXBlbmQocGxhY2Vob2xkZXJFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhcmVsb2FkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudExvYWQnLCB7IGNvbnRlbnQ6IHRoaXMsIGlzTGF6eSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2ltZycsICdpbWcnKTtcclxuICAgICAgLy8gU3RhcnQgbG9hZGluZyBvbmx5IGFmdGVyIHdpZHRoIGlzIGRlZmluZWQsIGFzIHNpemVzIG1pZ2h0IGRlcGVuZCBvbiBpdC5cclxuICAgICAgLy8gRHVlIHRvIFNhZmFyaSBmZWF0dXJlLCB3ZSBtdXN0IGRlZmluZSBzaXplcyBiZWZvcmUgc3Jjc2V0LlxyXG4gICAgICBpZiAodGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoaXNMYXp5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cF9fY29udGVudCcsICdkaXYnKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZGF0YS5odG1sIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZWxvYWQgJiYgdGhpcy5zbGlkZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLnVwZGF0ZUNvbnRlbnRTaXplKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlbG9hZCBpbWFnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0xhenlcclxuICAgKi9cclxuICBsb2FkSW1hZ2UoaXNMYXp5KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNJbWFnZUNvbnRlbnQoKVxyXG4gICAgICB8fCAhdGhpcy5lbGVtZW50XHJcbiAgICAgIHx8IHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRMb2FkSW1hZ2UnLCB7IGNvbnRlbnQ6IHRoaXMsIGlzTGF6eSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSAvKiogQHR5cGUgSFRNTEltYWdlRWxlbWVudCAqLyAodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVNyY3NldFNpemVzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS5zcmNzZXQpIHtcclxuICAgICAgaW1hZ2VFbGVtZW50LnNyY3NldCA9IHRoaXMuZGF0YS5zcmNzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuZGF0YS5zcmMgPz8gJyc7XHJcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5kYXRhLmFsdCA/PyAnJztcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5MT0FESU5HO1xyXG5cclxuICAgIGlmIChpbWFnZUVsZW1lbnQuY29tcGxldGUpIHtcclxuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1hZ2VFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9uTG9hZGVkKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpbWFnZUVsZW1lbnQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzc2lnbiBzbGlkZSB0byBjb250ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NsaWRlfSBzbGlkZVxyXG4gICAqL1xyXG4gIHNldFNsaWRlKHNsaWRlKSB7XHJcbiAgICB0aGlzLnNsaWRlID0gc2xpZGU7XHJcbiAgICB0aGlzLmhhc1NsaWRlID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBzbGlkZS5wc3dwO1xyXG5cclxuICAgIC8vIERteXRybyBTZW1lbm92OiBkbyB3ZSBuZWVkIHRvIHVuc2V0IHNsaWRlP1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGVudCBsb2FkIHN1Y2Nlc3MgaGFuZGxlclxyXG4gICAqL1xyXG4gIG9uTG9hZGVkKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuTE9BREVEO1xyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkQ29tcGxldGUnLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBjb250ZW50OiB0aGlzIH0pO1xyXG5cclxuICAgICAgLy8gaWYgY29udGVudCBpcyByZWxvYWRlZFxyXG4gICAgICBpZiAodGhpcy5zbGlkZS5pc0FjdGl2ZVxyXG4gICAgICAgICYmIHRoaXMuc2xpZGUuaGVhdnlBcHBlbmRlZFxyXG4gICAgICAgICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuTE9BREVEIHx8IHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1IpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgbG9hZCBlcnJvciBoYW5kbGVyXHJcbiAgICovXHJcbiAgb25FcnJvcigpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLkVSUk9SO1xyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheUVycm9yKCk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2xvYWRDb21wbGV0ZScsIHsgc2xpZGU6IHRoaXMuc2xpZGUsIGlzRXJyb3I6IHRydWUsIGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2xvYWRFcnJvcicsIHsgc2xpZGU6IHRoaXMuc2xpZGUsIGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgaXMgY3VycmVudGx5IGxvYWRpbmdcclxuICAgKi9cclxuICBpc0xvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdpc0NvbnRlbnRMb2FkaW5nJyxcclxuICAgICAgdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5MT0FESU5HLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59IElmIHRoZSBjb250ZW50IGlzIGluIGVycm9yIHN0YXRlXHJcbiAgICovXHJcbiAgaXNFcnJvcigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIHRoZSBjb250ZW50IGlzIGltYWdlXHJcbiAgICovXHJcbiAgaXNJbWFnZUNvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnaW1hZ2UnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGNvbnRlbnQgc2l6ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNldERpc3BsYXllZFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaChcclxuICAgICAgJ2NvbnRlbnRSZXNpemUnLFxyXG4gICAgICB7IGNvbnRlbnQ6IHRoaXMsIHdpZHRoLCBoZWlnaHQgfSkuZGVmYXVsdFByZXZlbnRlZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXaWR0aEhlaWdodCh0aGlzLmVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgIXRoaXMuaXNFcnJvcigpKSB7XHJcbiAgICAgIGNvbnN0IGlzSW5pdGlhbFNpemVVcGRhdGUgPSAoIXRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCAmJiB3aWR0aCk7XHJcblxyXG4gICAgICB0aGlzLmRpc3BsYXllZEltYWdlV2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZUhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIGlmIChpc0luaXRpYWxTaXplVXBkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3Jjc2V0U2l6ZXMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc2xpZGUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKFxyXG4gICAgICAgICAgJ2ltYWdlU2l6ZUNoYW5nZScsXHJcbiAgICAgICAgICB7IHNsaWRlOiB0aGlzLnNsaWRlLCB3aWR0aCwgaGVpZ2h0LCBjb250ZW50OiB0aGlzIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgY2FuIGJlIHpvb21lZFxyXG4gICAqL1xyXG4gIGlzWm9vbWFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdpc0NvbnRlbnRab29tYWJsZScsXHJcbiAgICAgIHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiAodGhpcy5zdGF0ZSAhPT0gTE9BRF9TVEFURS5FUlJPUiksXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgaW1hZ2Ugc3Jjc2V0IHNpemVzIGF0dHJpYnV0ZSBiYXNlZCBvbiB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgICovXHJcbiAgdXBkYXRlU3Jjc2V0U2l6ZXMoKSB7XHJcbiAgICAvLyBIYW5kbGUgc3Jjc2V0IHNpemVzIGF0dHJpYnV0ZS5cclxuICAgIC8vXHJcbiAgICAvLyBOZXZlciBsb3dlciBxdWFsaXR5LCBpZiBpdCB3YXMgaW5jcmVhc2VkIHByZXZpb3VzbHkuXHJcbiAgICAvLyBDaHJvbWUgZG9lcyB0aGlzIGF1dG9tYXRpY2FsbHksIEZpcmVmb3ggYW5kIFNhZmFyaSBkbyBub3QsXHJcbiAgICAvLyBzbyB3ZSBzdG9yZSBsYXJnZXN0IHVzZWQgc2l6ZSBpbiBkYXRhc2V0LlxyXG4gICAgaWYgKCF0aGlzLmlzSW1hZ2VDb250ZW50KCkgfHwgIXRoaXMuZWxlbWVudCB8fCAhdGhpcy5kYXRhLnNyY3NldCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSAvKiogQHR5cGUgSFRNTEltYWdlRWxlbWVudCAqLyAodGhpcy5lbGVtZW50KTtcclxuICAgIGNvbnN0IHNpemVzV2lkdGggPSB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ3NyY3NldFNpemVzV2lkdGgnLFxyXG4gICAgICB0aGlzLmRpc3BsYXllZEltYWdlV2lkdGgsXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhaW1hZ2UuZGF0YXNldC5sYXJnZXN0VXNlZFNpemVcclxuICAgICAgfHwgc2l6ZXNXaWR0aCA+IHBhcnNlSW50KGltYWdlLmRhdGFzZXQubGFyZ2VzdFVzZWRTaXplLCAxMClcclxuICAgICkge1xyXG4gICAgICBpbWFnZS5zaXplcyA9IHNpemVzV2lkdGggKyAncHgnO1xyXG4gICAgICBpbWFnZS5kYXRhc2V0Lmxhcmdlc3RVc2VkU2l6ZSA9IFN0cmluZyhzaXplc1dpZHRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiBjb250ZW50IHNob3VsZCB1c2UgYSBwbGFjZWhvbGRlciAoZnJvbSBtc3JjIGJ5IGRlZmF1bHQpXHJcbiAgICovXHJcbiAgdXNlUGxhY2Vob2xkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICd1c2VDb250ZW50UGxhY2Vob2xkZXInLFxyXG4gICAgICB0aGlzLmlzSW1hZ2VDb250ZW50KCksXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkIGNvbnRlbnQgd2l0aCBsYXp5LWxvYWRpbmcgcGFyYW1cclxuICAgKi9cclxuICBsYXp5TG9hZCgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50TGF6eUxvYWQnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIHBsYWNlaG9sZGVyIHNob3VsZCBiZSBrZXB0IGFmdGVyIGNvbnRlbnQgaXMgbG9hZGVkXHJcbiAgICovXHJcbiAga2VlcFBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNLZWVwaW5nUGxhY2Vob2xkZXInLFxyXG4gICAgICB0aGlzLmlzTG9hZGluZygpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHJveSB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmhhc1NsaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNsaWRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50RGVzdHJveScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5vbmxvYWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmVsZW1lbnQub25lcnJvciA9IG51bGw7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgZXJyb3IgbWVzc2FnZVxyXG4gICAqL1xyXG4gIGRpc3BsYXlFcnJvcigpIHtcclxuICAgIGlmICh0aGlzLnNsaWRlKSB7XHJcbiAgICAgIGxldCBlcnJvck1zZ0VsID0gY3JlYXRlRWxlbWVudCgncHN3cF9fZXJyb3ItbXNnJywgJ2RpdicpO1xyXG4gICAgICBlcnJvck1zZ0VsLmlubmVyVGV4dCA9IHRoaXMuaW5zdGFuY2Uub3B0aW9ucz8uZXJyb3JNc2cgPz8gJyc7XHJcbiAgICAgIGVycm9yTXNnRWwgPSAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqLyAodGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICAgJ2NvbnRlbnRFcnJvckVsZW1lbnQnLFxyXG4gICAgICAgIGVycm9yTXNnRWwsXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApKTtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cF9fY29udGVudCBwc3dwX19lcnJvci1tc2ctY29udGFpbmVyJywgJ2RpdicpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JNc2dFbCk7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnNsaWRlLnVwZGF0ZUNvbnRlbnRTaXplKHRydWUpO1xyXG4gICAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmQgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBhcHBlbmQoKSB7XHJcbiAgICBpZiAodGhpcy5pc0F0dGFjaGVkIHx8ICF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNBdHRhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1IpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50QXBwZW5kJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cHBvcnRzRGVjb2RlID0gKCdkZWNvZGUnIGluIHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSkge1xyXG4gICAgICAvLyBVc2UgZGVjb2RlKCkgb24gbmVhcmJ5IHNsaWRlc1xyXG4gICAgICAvL1xyXG4gICAgICAvLyBOZWFyYnkgc2xpZGUgaW1hZ2VzIGFyZSBpbiBET00gYW5kIG5vdCBoaWRkZW4gdmlhIGRpc3BsYXk6bm9uZS5cclxuICAgICAgLy8gSG93ZXZlciwgdGhleSBhcmUgcGxhY2VkIG9mZnNjcmVlbiAodG8gdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUpLlxyXG4gICAgICAvL1xyXG4gICAgICAvLyBTb21lIGJyb3dzZXJzIGRvIG5vdCBjb21wb3NpdGUgdGhlIGltYWdlIHVudGlsIGl0J3MgYWN0dWFsbHkgdmlzaWJsZSxcclxuICAgICAgLy8gdXNpbmcgZGVjb2RlKCkgaGVscHMuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIFlvdSBtaWdodCBhc2sgXCJ3aHkgZG9udCB5b3UganVzdCBkZWNvZGUoKSBhbmQgdGhlbiBhcHBlbmQgYWxsIGltYWdlc1wiLFxyXG4gICAgICAvLyB0aGF0J3MgYmVjYXVzZSBJIHdhbnQgdG8gc2hvdyBpbWFnZSBiZWZvcmUgaXQncyBmdWxseSBsb2FkZWQsXHJcbiAgICAgIC8vIGFzIGJyb3dzZXIgY2FuIHJlbmRlciBwYXJ0cyBvZiBpbWFnZSB3aGlsZSBpdCBpcyBsb2FkaW5nLlxyXG4gICAgICAvLyBXZSBkbyBub3QgZG8gdGhpcyBpbiBTYWZhcmkgZHVlIHRvIHBhcnRpYWwgbG9hZGluZyBidWcuXHJcbiAgICAgIGlmIChzdXBwb3J0c0RlY29kZSAmJiB0aGlzLnNsaWRlICYmICghdGhpcy5zbGlkZS5pc0FjdGl2ZSB8fCBpc1NhZmFyaSgpKSkge1xyXG4gICAgICAgIHRoaXMuaXNEZWNvZGluZyA9IHRydWU7XHJcbiAgICAgICAgLy8gcHVycG9zZWZ1bGx5IHVzaW5nIGZpbmFsbHkgaW5zdGVhZCBvZiB0aGVuLFxyXG4gICAgICAgIC8vIGFzIGlmIHNyY3NldCBzaXplcyBjaGFuZ2VzIGR5bmFtaWNhbGx5IC0gaXQgbWF5IGNhdXNlIGRlY29kZSBlcnJvclxyXG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudH0gKi9cclxuICAgICAgICAodGhpcy5lbGVtZW50KS5kZWNvZGUoKS5jYXRjaCgoKSA9PiB7IH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0RlY29kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmFwcGVuZEltYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGUgJiYgIXRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3RpdmF0ZSB0aGUgc2xpZGUsXHJcbiAgICogYWN0aXZlIHNsaWRlIGlzIGdlbmVyYWxseSB0aGUgY3VycmVudCBvbmUsXHJcbiAgICogbWVhbmluZyB0aGUgdXNlciBjYW4gc2VlIGl0LlxyXG4gICAqL1xyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRBY3RpdmF0ZScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkXHJcbiAgICAgIHx8ICF0aGlzLnNsaWRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmIHRoaXMuaXNEZWNvZGluZyAmJiAhaXNTYWZhcmkoKSkge1xyXG4gICAgICAvLyBhZGQgaW1hZ2UgdG8gc2xpZGUgd2hlbiBpdCBiZWNvbWVzIGFjdGl2ZSxcclxuICAgICAgLy8gZXZlbiBpZiBpdCdzIG5vdCBmaW5pc2hlZCBkZWNvZGluZ1xyXG4gICAgICB0aGlzLmFwcGVuZEltYWdlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFcnJvcigpKSB7XHJcbiAgICAgIHRoaXMubG9hZChmYWxzZSwgdHJ1ZSk7IC8vIHRyeSB0byByZWxvYWRcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWFjdGl2YXRlIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnREZWFjdGl2YXRlJywgeyBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGNvbnRlbnQgZnJvbSBET01cclxuICAgKi9cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudFJlbW92ZScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlci5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kIHRoZSBpbWFnZSBjb250ZW50IHRvIHNsaWRlIGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIGFwcGVuZEltYWdlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50QXBwZW5kSW1hZ2UnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW5zdXJlIHRoYXQgZWxlbWVudCBleGlzdHMgYW5kIGlzIG5vdCBhbHJlYWR5IGFwcGVuZGVkXHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLmVsZW1lbnQgJiYgIXRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuTE9BREVEIHx8IHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1IpIHtcclxuICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvYmFzZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVCYXNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBwc3dwXHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFZpZXdwb3J0U2l6ZShvcHRpb25zLCBwc3dwKSB7XHJcbiAgaWYgKG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4pIHtcclxuICAgIGNvbnN0IG5ld1ZpZXdwb3J0U2l6ZSA9IG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4ob3B0aW9ucywgcHN3cCk7XHJcbiAgICBpZiAobmV3Vmlld3BvcnRTaXplKSB7XHJcbiAgICAgIHJldHVybiBuZXdWaWV3cG9ydFNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG5cclxuICAgIC8vIERteXRybyBTZW1lbm92OiBoZWlnaHQgb24gbW9iaWxlIGlzIHZlcnkgaW5jb3Npc3RlbnQgZHVlIHRvIHRvb2xiYXJcclxuICAgIC8vIGZpbmQgYSB3YXkgdG8gaW1wcm92ZSB0aGlzXHJcbiAgICAvL1xyXG4gICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIHdlbGxcclxuICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgcGFkZGluZyBvcHRpb24uXHJcbiAqIFN1cHBvcnRlZCBmb3JtYXRzOlxyXG4gKlxyXG4gKiAvLyBPYmplY3RcclxuICogcGFkZGluZzoge1xyXG4gKiAgdG9wOiAwLFxyXG4gKiAgYm90dG9tOiAwLFxyXG4gKiAgbGVmdDogMCxcclxuICogIHJpZ2h0OiAwXHJcbiAqIH1cclxuICpcclxuICogLy8gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG9iamVjdFxyXG4gKiBwYWRkaW5nRm46ICh2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkgPT4ge1xyXG4gKiAgcmV0dXJuIHtcclxuICogICAgdG9wOiAwLFxyXG4gKiAgICBib3R0b206IDAsXHJcbiAqICAgIGxlZnQ6IDAsXHJcbiAqICAgIHJpZ2h0OiAwXHJcbiAqICB9O1xyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIExlZ2FjeSB2YXJpYW50XHJcbiAqIHBhZGRpbmdMZWZ0OiAwLFxyXG4gKiBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAqIHBhZGRpbmdUb3A6IDAsXHJcbiAqIHBhZGRpbmdCb3R0b206IDAsXHJcbiAqXHJcbiAqIEBwYXJhbSB7J2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJyB8ICdyaWdodCd9IHByb3BcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9ucyBQaG90b1N3aXBlIG9wdGlvbnNcclxuICogQHBhcmFtIHtQb2ludH0gdmlld3BvcnRTaXplIFBob3RvU3dpcGUgdmlld3BvcnQgc2l6ZSwgZm9yIGV4YW1wbGU6IHsgeDo4MDAsIHk6NjAwIH1cclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIERhdGEgYWJvdXQgdGhlIHNsaWRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2VQYWRkaW5nT3B0aW9uKHByb3AsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgbGV0IHBhZGRpbmdWYWx1ZSA9IDA7XHJcblxyXG4gIGlmIChvcHRpb25zLnBhZGRpbmdGbikge1xyXG4gICAgcGFkZGluZ1ZhbHVlID0gb3B0aW9ucy5wYWRkaW5nRm4odmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpW3Byb3BdO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XHJcbiAgICBwYWRkaW5nVmFsdWUgPSBvcHRpb25zLnBhZGRpbmdbcHJvcF07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGxlZ2FjeVByb3BOYW1lID0gJ3BhZGRpbmcnICsgcHJvcFswXS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGlmIChvcHRpb25zW2xlZ2FjeVByb3BOYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHBhZGRpbmdWYWx1ZSA9IG9wdGlvbnNbbGVnYWN5UHJvcE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE51bWJlcihwYWRkaW5nVmFsdWUpIHx8IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHZpZXdwb3J0U2l6ZVxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGFcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhbkFyZWFTaXplKG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IHZpZXdwb3J0U2l6ZS54XHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdsZWZ0Jywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpXHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdyaWdodCcsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSxcclxuICAgIHk6IHZpZXdwb3J0U2l6ZS55XHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCd0b3AnLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleClcclxuICAgICAgLSBwYXJzZVBhZGRpbmdPcHRpb24oJ2JvdHRvbScsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IE1BWF9JTUFHRV9XSURUSCA9IDQwMDA7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7J2ZpdCcgfCAnZmlsbCcgfCBudW1iZXIgfCAoKHpvb21MZXZlbE9iamVjdDogWm9vbUxldmVsKSA9PiBudW1iZXIpfSBab29tTGV2ZWxPcHRpb24gKi9cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHpvb20gbGV2ZWxzIGZvciBzcGVjaWZpYyBzbGlkZS5cclxuICogRGVwZW5kcyBvbiB2aWV3cG9ydCBzaXplIGFuZCBpbWFnZSBzaXplLlxyXG4gKi9cclxuY2xhc3MgWm9vbUxldmVsIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zIFBob3RvU3dpcGUgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBTbGlkZSBkYXRhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBbcHN3cF0gUGhvdG9Td2lwZSBpbnN0YW5jZSwgY2FuIGJlIHVuZGVmaW5lZCBpZiBub3QgaW5pdGlhbGl6ZWQgeWV0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgaXRlbURhdGEsIGluZGV4LCBwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuaXRlbURhdGEgPSBpdGVtRGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIC8qKiBAdHlwZSB7IFBvaW50IHwgbnVsbCB9ICovXHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7IFBvaW50IHwgbnVsbCB9ICovXHJcbiAgICB0aGlzLmVsZW1lbnRTaXplID0gbnVsbDtcclxuICAgIHRoaXMuZml0ID0gMTtcclxuICAgIHRoaXMuZmlsbCA9IDE7XHJcbiAgICB0aGlzLnZGaWxsID0gMTtcclxuICAgIHRoaXMuaW5pdGlhbCA9IDE7XHJcbiAgICB0aGlzLnNlY29uZGFyeSA9IDE7XHJcbiAgICB0aGlzLm1heCA9IDE7XHJcbiAgICB0aGlzLm1pbiA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgaW5pdGlhbCwgc2Vjb25kYXJ5IGFuZCBtYXhpbXVtIHpvb20gbGV2ZWwgZm9yIHRoZSBzcGVjaWZpZWQgc2xpZGUuXHJcbiAgICpcclxuICAgKiBJdCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gZWl0aGVyIGltYWdlIG9yIHZpZXdwb3J0IHNpemUgY2hhbmdlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhIZWlnaHRcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwYW5BcmVhU2l6ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZShtYXhXaWR0aCwgbWF4SGVpZ2h0LCBwYW5BcmVhU2l6ZSkge1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIGNvbnN0IGVsZW1lbnRTaXplID0geyB4OiBtYXhXaWR0aCwgeTogbWF4SGVpZ2h0IH07XHJcbiAgICB0aGlzLmVsZW1lbnRTaXplID0gZWxlbWVudFNpemU7XHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0gcGFuQXJlYVNpemU7XHJcblxyXG4gICAgY29uc3QgaFJhdGlvID0gcGFuQXJlYVNpemUueCAvIGVsZW1lbnRTaXplLng7XHJcbiAgICBjb25zdCB2UmF0aW8gPSBwYW5BcmVhU2l6ZS55IC8gZWxlbWVudFNpemUueTtcclxuXHJcbiAgICB0aGlzLmZpdCA9IE1hdGgubWluKDEsIGhSYXRpbyA8IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbyk7XHJcbiAgICB0aGlzLmZpbGwgPSBNYXRoLm1pbigxLCBoUmF0aW8gPiB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW8pO1xyXG5cclxuICAgIC8vIHpvb20udkZpbGwgZGVmaW5lcyB6b29tIGxldmVsIG9mIHRoZSBpbWFnZVxyXG4gICAgLy8gd2hlbiBpdCBoYXMgMTAwJSBvZiB2aWV3cG9ydCB2ZXJ0aWNhbCBzcGFjZSAoaGVpZ2h0KVxyXG4gICAgdGhpcy52RmlsbCA9IE1hdGgubWluKDEsIHZSYXRpbyk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsID0gdGhpcy5fZ2V0SW5pdGlhbCgpO1xyXG4gICAgdGhpcy5zZWNvbmRhcnkgPSB0aGlzLl9nZXRTZWNvbmRhcnkoKTtcclxuICAgIHRoaXMubWF4ID0gTWF0aC5tYXgoXHJcbiAgICAgIHRoaXMuaW5pdGlhbCxcclxuICAgICAgdGhpcy5zZWNvbmRhcnksXHJcbiAgICAgIHRoaXMuX2dldE1heCgpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubWluID0gTWF0aC5taW4oXHJcbiAgICAgIHRoaXMuZml0LFxyXG4gICAgICB0aGlzLmluaXRpYWwsXHJcbiAgICAgIHRoaXMuc2Vjb25kYXJ5XHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnBzd3ApIHtcclxuICAgICAgdGhpcy5wc3dwLmRpc3BhdGNoKCd6b29tTGV2ZWxzVXBkYXRlJywgeyB6b29tTGV2ZWxzOiB0aGlzLCBzbGlkZURhdGE6IHRoaXMuaXRlbURhdGEgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgdXNlci1kZWZpbmVkIHpvb20gb3B0aW9uLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0geydpbml0aWFsJyB8ICdzZWNvbmRhcnknIHwgJ21heCd9IG9wdGlvblByZWZpeCBab29tIGxldmVsIG9wdGlvbiBwcmVmaXggKGluaXRpYWwsIHNlY29uZGFyeSwgbWF4KVxyXG4gICAqIEByZXR1cm5zIHsgbnVtYmVyIHwgdW5kZWZpbmVkIH1cclxuICAgKi9cclxuICBfcGFyc2Vab29tTGV2ZWxPcHRpb24ob3B0aW9uUHJlZml4KSB7XHJcbiAgICBjb25zdCBvcHRpb25OYW1lID0gLyoqIEB0eXBlIHsnaW5pdGlhbFpvb21MZXZlbCcgfCAnc2Vjb25kYXJ5Wm9vbUxldmVsJyB8ICdtYXhab29tTGV2ZWwnfSAqLyAoXHJcbiAgICAgIG9wdGlvblByZWZpeCArICdab29tTGV2ZWwnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb3B0aW9uVmFsdWUgPSB0aGlzLm9wdGlvbnNbb3B0aW9uTmFtZV07XHJcblxyXG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gb3B0aW9uVmFsdWUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvblZhbHVlID09PSAnZmlsbCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uVmFsdWUgPT09ICdmaXQnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTnVtYmVyKG9wdGlvblZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB6b29tIGxldmVsIHRvIHdoaWNoIGltYWdlIHdpbGwgYmUgem9vbWVkIGFmdGVyIGRvdWJsZS10YXAgZ2VzdHVyZSxcclxuICAgKiBvciB3aGVuIHVzZXIgY2xpY2tzIG9uIHpvb20gaWNvbixcclxuICAgKiBvciBtb3VzZS1jbGljayBvbiBpbWFnZSBpdHNlbGYuXHJcbiAgICogSWYgeW91IHJldHVybiAxIGltYWdlIHdpbGwgYmUgem9vbWVkIHRvIGl0cyBvcmlnaW5hbCBzaXplLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldFNlY29uZGFyeSgpIHtcclxuICAgIGxldCBjdXJyWm9vbUxldmVsID0gdGhpcy5fcGFyc2Vab29tTGV2ZWxPcHRpb24oJ3NlY29uZGFyeScpO1xyXG5cclxuICAgIGlmIChjdXJyWm9vbUxldmVsKSB7XHJcbiAgICAgIHJldHVybiBjdXJyWm9vbUxldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDN4IG9mIFwiZml0XCIgc3RhdGUsIGJ1dCBub3QgbGFyZ2VyIHRoYW4gb3JpZ2luYWxcclxuICAgIGN1cnJab29tTGV2ZWwgPSBNYXRoLm1pbigxLCB0aGlzLmZpdCAqIDMpO1xyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnRTaXplICYmIGN1cnJab29tTGV2ZWwgKiB0aGlzLmVsZW1lbnRTaXplLnggPiBNQVhfSU1BR0VfV0lEVEgpIHtcclxuICAgICAgY3Vyclpvb21MZXZlbCA9IE1BWF9JTUFHRV9XSURUSCAvIHRoaXMuZWxlbWVudFNpemUueDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3Vyclpvb21MZXZlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpbml0aWFsIGltYWdlIHpvb20gbGV2ZWwuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0SW5pdGlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJzZVpvb21MZXZlbE9wdGlvbignaW5pdGlhbCcpIHx8IHRoaXMuZml0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSB6b29tIGxldmVsIHdoZW4gdXNlciB6b29tc1xyXG4gICAqIHZpYSB6b29tL3BpbmNoIGdlc3R1cmUsXHJcbiAgICogdmlhIGNtZC9jdHJsLXdoZWVsIG9yIHZpYSB0cmFja3BhZC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRNYXgoKSB7XHJcbiAgICAvLyBtYXggem9vbSBsZXZlbCBpcyB4NCBmcm9tIFwiZml0IHN0YXRlXCIsXHJcbiAgICAvLyB1c2VkIGZvciB6b29tIGdlc3R1cmUgYW5kIGN0cmwvdHJhY2twYWQgem9vbVxyXG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlWm9vbUxldmVsT3B0aW9uKCdtYXgnKSB8fCBNYXRoLm1heCgxLCB0aGlzLmZpdCAqIDQpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIExhenktbG9hZCBhbiBpbWFnZVxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYm90aCBieSBMaWdodGJveCBhbmQgUGhvdG9Td2lwZSBjb3JlLFxyXG4gKiB0aHVzIGl0IGNhbiBiZSBjYWxsZWQgYmVmb3JlIGRpYWxvZyBpcyBvcGVuZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBEYXRhIGFib3V0IHRoZSBzbGlkZVxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBpbnN0YW5jZSBQaG90b1N3aXBlIG9yIFBob3RvU3dpcGVMaWdodGJveCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICogQHJldHVybnMge0NvbnRlbnR9IEltYWdlIHRoYXQgaXMgYmVpbmcgZGVjb2RlZCBvciBmYWxzZS5cclxuICovXHJcbmZ1bmN0aW9uIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KSB7XHJcbiAgY29uc3QgY29udGVudCA9IGluc3RhbmNlLmNyZWF0ZUNvbnRlbnRGcm9tRGF0YShpdGVtRGF0YSwgaW5kZXgpO1xyXG4gIC8qKiBAdHlwZSB7Wm9vbUxldmVsIHwgdW5kZWZpbmVkfSAqL1xyXG4gIGxldCB6b29tTGV2ZWw7XHJcblxyXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gaW5zdGFuY2U7XHJcblxyXG4gIC8vIFdlIG5lZWQgdG8ga25vdyBkaW1lbnNpb25zIG9mIHRoZSBpbWFnZSB0byBwcmVsb2FkIGl0LFxyXG4gIC8vIGFzIGl0IG1pZ2h0IHVzZSBzcmNzZXQsIGFuZCB3ZSBuZWVkIHRvIGRlZmluZSBzaXplc1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICB6b29tTGV2ZWwgPSBuZXcgWm9vbUxldmVsKG9wdGlvbnMsIGl0ZW1EYXRhLCAtMSk7XHJcblxyXG4gICAgbGV0IHZpZXdwb3J0U2l6ZTtcclxuICAgIGlmIChpbnN0YW5jZS5wc3dwKSB7XHJcbiAgICAgIHZpZXdwb3J0U2l6ZSA9IGluc3RhbmNlLnBzd3Audmlld3BvcnRTaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlld3BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKG9wdGlvbnMsIGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYW5BcmVhU2l6ZSA9IGdldFBhbkFyZWFTaXplKG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KTtcclxuICAgIHpvb21MZXZlbC51cGRhdGUoY29udGVudC53aWR0aCwgY29udGVudC5oZWlnaHQsIHBhbkFyZWFTaXplKTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnQubGF6eUxvYWQoKTtcclxuXHJcbiAgaWYgKHpvb21MZXZlbCkge1xyXG4gICAgY29udGVudC5zZXREaXNwbGF5ZWRTaXplKFxyXG4gICAgICBNYXRoLmNlaWwoY29udGVudC53aWR0aCAqIHpvb21MZXZlbC5pbml0aWFsKSxcclxuICAgICAgTWF0aC5jZWlsKGNvbnRlbnQuaGVpZ2h0ICogem9vbUxldmVsLmluaXRpYWwpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogTGF6eS1sb2FkcyBzcGVjaWZpYyBzbGlkZS5cclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJvdGggYnkgTGlnaHRib3ggYW5kIFBob3RvU3dpcGUgY29yZSxcclxuICogdGh1cyBpdCBjYW4gYmUgY2FsbGVkIGJlZm9yZSBkaWFsb2cgaXMgb3BlbmVkLlxyXG4gKlxyXG4gKiBCeSBkZWZhdWx0LCBpdCBsb2FkcyBpbWFnZSBiYXNlZCBvbiB2aWV3cG9ydCBzaXplIGFuZCBpbml0aWFsIHpvb20gbGV2ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBpbnN0YW5jZSBQaG90b1N3aXBlIG9yIFBob3RvU3dpcGVMaWdodGJveCBldmVudGFibGUgaW5zdGFuY2VcclxuICogQHJldHVybnMge0NvbnRlbnQgfCB1bmRlZmluZWR9XHJcbiAqL1xyXG5mdW5jdGlvbiBsYXp5TG9hZFNsaWRlKGluZGV4LCBpbnN0YW5jZSkge1xyXG4gIGNvbnN0IGl0ZW1EYXRhID0gaW5zdGFuY2UuZ2V0SXRlbURhdGEoaW5kZXgpO1xyXG5cclxuICBpZiAoaW5zdGFuY2UuZGlzcGF0Y2goJ2xhenlMb2FkU2xpZGUnLCB7IGluZGV4LCBpdGVtRGF0YSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCBpbnN0YW5jZSwgaW5kZXgpO1xyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL3Bob3Rvc3dpcGUuanNcIikuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL3NsaWRlL3NsaWRlLmpzXCIpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKipcclxuICogUGhvdG9Td2lwZSBiYXNlIGNsYXNzIHRoYXQgY2FuIHJldHJpZXZlIGRhdGEgYWJvdXQgZXZlcnkgc2xpZGUuXHJcbiAqIFNoYXJlZCBieSBQaG90b1N3aXBlIENvcmUgYW5kIFBob3RvU3dpcGUgTGlnaHRib3hcclxuICovXHJcbmNsYXNzIFBob3RvU3dpcGVCYXNlIGV4dGVuZHMgRXZlbnRhYmxlIHtcclxuICAvKipcclxuICAgKiBHZXQgdG90YWwgbnVtYmVyIG9mIHNsaWRlc1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXROdW1JdGVtcygpIHtcclxuICAgIGxldCBudW1JdGVtcyA9IDA7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5vcHRpb25zPy5kYXRhU291cmNlO1xyXG5cclxuICAgIGlmIChkYXRhU291cmNlICYmICdsZW5ndGgnIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gbWF5IGJlIGFuIGFycmF5IG9yIGp1c3Qgb2JqZWN0IHdpdGggbGVuZ3RoIHByb3BlcnR5XHJcbiAgICAgIG51bUl0ZW1zID0gZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UgJiYgJ2dhbGxlcnknIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gcXVlcnkgRE9NIGVsZW1lbnRzXHJcbiAgICAgIGlmICghZGF0YVNvdXJjZS5pdGVtcykge1xyXG4gICAgICAgIGRhdGFTb3VyY2UuaXRlbXMgPSB0aGlzLl9nZXRHYWxsZXJ5RE9NRWxlbWVudHMoZGF0YVNvdXJjZS5nYWxsZXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBudW1JdGVtcyA9IGRhdGFTb3VyY2UuaXRlbXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGVnYWN5IGV2ZW50LCBiZWZvcmUgZmlsdGVycyB3ZXJlIGludHJvZHVjZWRcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kaXNwYXRjaCgnbnVtSXRlbXMnLCB7XHJcbiAgICAgIGRhdGFTb3VyY2UsXHJcbiAgICAgIG51bUl0ZW1zXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnbnVtSXRlbXMnLCBldmVudC5udW1JdGVtcywgZGF0YVNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gc2xpZGVEYXRhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge0NvbnRlbnR9XHJcbiAgICovXHJcbiAgY3JlYXRlQ29udGVudEZyb21EYXRhKHNsaWRlRGF0YSwgaW5kZXgpIHtcclxuICAgIHJldHVybiBuZXcgQ29udGVudChzbGlkZURhdGEsIHRoaXMsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpdGVtIGRhdGEgYnkgaW5kZXguXHJcbiAgICpcclxuICAgKiBcIml0ZW0gZGF0YVwiIHNob3VsZCBjb250YWluIG5vcm1hbGl6ZWQgaW5mb3JtYXRpb24gdGhhdCBQaG90b1N3aXBlIG5lZWRzIHRvIGdlbmVyYXRlIGEgc2xpZGUuXHJcbiAgICogRm9yIGV4YW1wbGUsIGl0IG1heSBjb250YWluIHByb3BlcnRpZXMgbGlrZVxyXG4gICAqIGBzcmNgLCBgc3Jjc2V0YCwgYHdgLCBgaGAsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSBhIHNsaWRlIHdpdGggaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7U2xpZGVEYXRhfVxyXG4gICAqL1xyXG4gIGdldEl0ZW1EYXRhKGluZGV4KSB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5vcHRpb25zPy5kYXRhU291cmNlO1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZURhdGEgfCBIVE1MRWxlbWVudH0gKi9cclxuICAgIGxldCBkYXRhU291cmNlSXRlbSA9IHt9O1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVNvdXJjZSkpIHtcclxuICAgICAgLy8gRGF0YXNvdXJjZSBpcyBhbiBhcnJheSBvZiBlbGVtZW50c1xyXG4gICAgICBkYXRhU291cmNlSXRlbSA9IGRhdGFTb3VyY2VbaW5kZXhdO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlICYmICdnYWxsZXJ5JyBpbiBkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIGRhdGFTb3VyY2UgaGFzIGdhbGxlcnkgcHJvcGVydHksXHJcbiAgICAgIC8vIHRodXMgaXQgd2FzIGNyZWF0ZWQgYnkgTGlnaHRib3gsIGJhc2VkIG9uXHJcbiAgICAgIC8vIGdhbGxlcnkgYW5kIGNoaWxkcmVuIG9wdGlvbnNcclxuXHJcbiAgICAgIC8vIHF1ZXJ5IERPTSBlbGVtZW50c1xyXG4gICAgICBpZiAoIWRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBkYXRhU291cmNlLml0ZW1zID0gdGhpcy5fZ2V0R2FsbGVyeURPTUVsZW1lbnRzKGRhdGFTb3VyY2UuZ2FsbGVyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRhdGFTb3VyY2VJdGVtID0gZGF0YVNvdXJjZS5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1EYXRhID0gZGF0YVNvdXJjZUl0ZW07XHJcblxyXG4gICAgaWYgKGl0ZW1EYXRhIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICBpdGVtRGF0YSA9IHRoaXMuX2RvbUVsZW1lbnRUb0l0ZW1EYXRhKGl0ZW1EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNwYXRjaGluZyB0aGUgaXRlbURhdGEgZXZlbnQsXHJcbiAgICAvLyBpdCdzIGEgbGVnYWN5IHZlcmlvbiBiZWZvcmUgZmlsdGVycyB3ZXJlIGludHJvZHVjZWRcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kaXNwYXRjaCgnaXRlbURhdGEnLCB7XHJcbiAgICAgIGl0ZW1EYXRhOiBpdGVtRGF0YSB8fCB7fSxcclxuICAgICAgaW5kZXhcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnaXRlbURhdGEnLCBldmVudC5pdGVtRGF0YSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFycmF5IG9mIGdhbGxlcnkgRE9NIGVsZW1lbnRzLFxyXG4gICAqIGJhc2VkIG9uIGNoaWxkU2VsZWN0b3IgYW5kIGdhbGxlcnkgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGdhbGxlcnlFbGVtZW50XHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50W119XHJcbiAgICovXHJcbiAgX2dldEdhbGxlcnlET01FbGVtZW50cyhnYWxsZXJ5RWxlbWVudCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucz8uY2hpbGRyZW4gfHwgdGhpcy5vcHRpb25zPy5jaGlsZFNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBnZXRFbGVtZW50c0Zyb21PcHRpb24oXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZFNlbGVjdG9yLFxyXG4gICAgICAgIGdhbGxlcnlFbGVtZW50XHJcbiAgICAgICkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtnYWxsZXJ5RWxlbWVudF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBET00gZWxlbWVudCB0byBpdGVtIGRhdGEgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBET00gZWxlbWVudFxyXG4gICAqIEByZXR1cm5zIHtTbGlkZURhdGF9XHJcbiAgICovXHJcbiAgX2RvbUVsZW1lbnRUb0l0ZW1EYXRhKGVsZW1lbnQpIHtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGVEYXRhfSAqL1xyXG4gICAgY29uc3QgaXRlbURhdGEgPSB7XHJcbiAgICAgIGVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGlua0VsID0gLyoqIEB0eXBlIHtIVE1MQW5jaG9yRWxlbWVudH0gKi8gKFxyXG4gICAgICBlbGVtZW50LnRhZ05hbWUgPT09ICdBJ1xyXG4gICAgICAgID8gZWxlbWVudFxyXG4gICAgICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJylcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGxpbmtFbCkge1xyXG4gICAgICAvLyBzcmMgY29tZXMgZnJvbSBkYXRhLXBzd3Atc3JjIGF0dHJpYnV0ZSxcclxuICAgICAgLy8gaWYgaXQncyBlbXB0eSBsaW5rIGhyZWYgaXMgdXNlZFxyXG4gICAgICBpdGVtRGF0YS5zcmMgPSBsaW5rRWwuZGF0YXNldC5wc3dwU3JjIHx8IGxpbmtFbC5ocmVmO1xyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BTcmNzZXQpIHtcclxuICAgICAgICBpdGVtRGF0YS5zcmNzZXQgPSBsaW5rRWwuZGF0YXNldC5wc3dwU3Jjc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtRGF0YS53aWR0aCA9IGxpbmtFbC5kYXRhc2V0LnBzd3BXaWR0aCA/IHBhcnNlSW50KGxpbmtFbC5kYXRhc2V0LnBzd3BXaWR0aCwgMTApIDogMDtcclxuICAgICAgaXRlbURhdGEuaGVpZ2h0ID0gbGlua0VsLmRhdGFzZXQucHN3cEhlaWdodCA/IHBhcnNlSW50KGxpbmtFbC5kYXRhc2V0LnBzd3BIZWlnaHQsIDEwKSA6IDA7XHJcblxyXG4gICAgICAvLyBzdXBwb3J0IGxlZ2FjeSB3ICYgaCBwcm9wZXJ0aWVzXHJcbiAgICAgIGl0ZW1EYXRhLncgPSBpdGVtRGF0YS53aWR0aDtcclxuICAgICAgaXRlbURhdGEuaCA9IGl0ZW1EYXRhLmhlaWdodDtcclxuXHJcbiAgICAgIGlmIChsaW5rRWwuZGF0YXNldC5wc3dwVHlwZSkge1xyXG4gICAgICAgIGl0ZW1EYXRhLnR5cGUgPSBsaW5rRWwuZGF0YXNldC5wc3dwVHlwZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGh1bWJuYWlsRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICAgICAgaWYgKHRodW1ibmFpbEVsKSB7XHJcbiAgICAgICAgLy8gbXNyYyBpcyBVUkwgdG8gcGxhY2Vob2xkZXIgaW1hZ2UgdGhhdCdzIGRpc3BsYXllZCBiZWZvcmUgbGFyZ2UgaW1hZ2UgaXMgbG9hZGVkXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBpdCdzIGRpc3BsYXllZCBvbmx5IGZvciB0aGUgZmlyc3Qgc2xpZGVcclxuICAgICAgICBpdGVtRGF0YS5tc3JjID0gdGh1bWJuYWlsRWwuY3VycmVudFNyYyB8fCB0aHVtYm5haWxFbC5zcmM7XHJcbiAgICAgICAgaXRlbURhdGEuYWx0ID0gdGh1bWJuYWlsRWwuZ2V0QXR0cmlidXRlKCdhbHQnKSA/PyAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BDcm9wcGVkIHx8IGxpbmtFbC5kYXRhc2V0LmNyb3BwZWQpIHtcclxuICAgICAgICBpdGVtRGF0YS50aHVtYkNyb3BwZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJzKCdkb21JdGVtRGF0YScsIGl0ZW1EYXRhLCBlbGVtZW50LCBsaW5rRWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF6eS1sb2FkIGJ5IHNsaWRlIGRhdGFcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBEYXRhIGFib3V0IHRoZSBzbGlkZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50fSBJbWFnZSB0aGF0IGlzIGJlaW5nIGRlY29kZWQgb3IgZmFsc2UuXHJcbiAgICovXHJcbiAgbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gICAgcmV0dXJuIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgdGhpcywgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3R5cGVzLmpzJykuVHlwZTxUPn0gVHlwZTxUPlxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBob3RvU3dpcGVPcHRpb25zfSBQaG90b1N3aXBlT3B0aW9ucyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLkRhdGFTb3VyY2V9IERhdGFTb3VyY2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL2NvbnRlbnQuanMnKS5kZWZhdWx0fSBDb250ZW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2V2ZW50YWJsZS5qcycpLlBob3RvU3dpcGVFdmVudHNNYXB9IFBob3RvU3dpcGVFdmVudHNNYXAgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvZXZlbnRhYmxlLmpzJykuUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFBob3RvU3dpcGVGaWx0ZXJzTWFwICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9ldmVudGFibGUuanMnKS5FdmVudENhbGxiYWNrPFQ+fSBFdmVudENhbGxiYWNrPFQ+XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgTGlnaHRib3hcclxuICpcclxuICogLSBJZiB1c2VyIGhhcyB1bnN1cHBvcnRlZCBicm93c2VyIGl0IGZhbGxzIGJhY2sgdG8gZGVmYXVsdCBicm93c2VyIGFjdGlvbiAoanVzdCBvcGVucyBVUkwpXHJcbiAqIC0gQmluZHMgY2xpY2sgZXZlbnQgdG8gbGlua3MgdGhhdCBzaG91bGQgb3BlbiBQaG90b1N3aXBlXHJcbiAqIC0gcGFyc2VzIERPTSBzdHJjdHVyZSBmb3IgUGhvdG9Td2lwZSAocmV0cmlldmVzIGxhcmdlIGltYWdlIFVSTHMgYW5kIHNpemVzKVxyXG4gKiAtIEluaXRpYWxpemVzIFBob3RvU3dpcGVcclxuICpcclxuICpcclxuICogTG9hZGVyIG9wdGlvbnMgdXNlIHRoZSBzYW1lIG9iamVjdCBhcyBQaG90b1N3aXBlLCBhbmQgc3VwcG9ydHMgc3VjaCBvcHRpb25zOlxyXG4gKlxyXG4gKiBnYWxsZXJ5IC0gRWxlbWVudCB8IEVsZW1lbnRbXSB8IE5vZGVMaXN0IHwgc3RyaW5nIHNlbGVjdG9yIGZvciB0aGUgZ2FsbGVyeSBlbGVtZW50XHJcbiAqIGNoaWxkcmVuIC0gRWxlbWVudCB8IEVsZW1lbnRbXSB8IE5vZGVMaXN0IHwgc3RyaW5nIHNlbGVjdG9yIGZvciB0aGUgZ2FsbGVyeSBjaGlsZHJlblxyXG4gKlxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZUxpZ2h0Ym94IGV4dGVuZHMgUGhvdG9Td2lwZUJhc2Uge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IFtvcHRpb25zXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvKiogQHR5cGUge1Bob3RvU3dpcGVPcHRpb25zfSAqL1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIHRoaXMuX3VpZCA9IDA7XHJcbiAgICB0aGlzLnNob3VsZE9wZW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtDb250ZW50IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9wcmVsb2FkZWRDb250ZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMub25UaHVtYm5haWxzQ2xpY2sgPSB0aGlzLm9uVGh1bWJuYWlsc0NsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGxpZ2h0Ym94LCBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS5cclxuICAgKiBJdCdzIG5vdCBpbmNsdWRlZCBpbiB0aGUgbWFpbiBjb25zdHJ1Y3Rvciwgc28geW91IG1heSBiaW5kIGV2ZW50cyBiZWZvcmUgaXQuXHJcbiAgICovXHJcbiAgaW5pdCgpIHtcclxuICAgIC8vIEJpbmQgY2xpY2sgZXZlbnRzIHRvIGVhY2ggZ2FsbGVyeVxyXG4gICAgZ2V0RWxlbWVudHNGcm9tT3B0aW9uKHRoaXMub3B0aW9ucy5nYWxsZXJ5LCB0aGlzLm9wdGlvbnMuZ2FsbGVyeVNlbGVjdG9yKVxyXG4gICAgICAuZm9yRWFjaCgoZ2FsbGVyeUVsZW1lbnQpID0+IHtcclxuICAgICAgICBnYWxsZXJ5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UaHVtYm5haWxzQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGVcclxuICAgKi9cclxuICBvblRodW1ibmFpbHNDbGljayhlKSB7XHJcbiAgICAvLyBFeGl0IGFuZCBhbGxvdyBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uIGlmOlxyXG4gICAgaWYgKHNwZWNpYWxLZXlVc2VkKGUpIC8vIC4uLiBpZiBjbGlja2VkIHdpdGggYSBzcGVjaWFsIGtleSAoY3RybC9jbWQuLi4pXHJcbiAgICAgIHx8IHdpbmRvdy5wc3dwIC8vIC4uLiBpZiBQaG90b1N3aXBlIGlzIGFscmVhZHkgb3BlblxyXG4gICAgICB8fCB3aW5kb3cubmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHsgLy8gLi4uIGlmIG9mZmxpbmVcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGJvdGggY2xpZW50WCBhbmQgY2xpZW50WSBhcmUgMCBvciBub3QgZGVmaW5lZCxcclxuICAgIC8vIHRoZSBldmVudCBpcyBsaWtlbHkgdHJpZ2dlcmVkIGJ5IGtleWJvYXJkLFxyXG4gICAgLy8gc28gd2UgZG8gbm90IHBhc3MgdGhlIGluaXRpYWxQb2ludFxyXG4gICAgLy9cclxuICAgIC8vIE5vdGUgdGhhdCBzb21lIHNjcmVlbiByZWFkZXJzIGVtdWxhdGUgdGhlIG1vdXNlIHBvc2l0aW9uLFxyXG4gICAgLy8gc28gaXQncyBub3QgdGhlIGlkZWFsIHdheSB0byBkZXRlY3QgdGhlbS5cclxuICAgIC8vXHJcbiAgICAvKiogQHR5cGUge1BvaW50IHwgbnVsbH0gKi9cclxuICAgIGxldCBpbml0aWFsUG9pbnQgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH07XHJcblxyXG4gICAgaWYgKCFpbml0aWFsUG9pbnQueCAmJiAhaW5pdGlhbFBvaW50LnkpIHtcclxuICAgICAgaW5pdGlhbFBvaW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xpY2tlZEluZGV4ID0gdGhpcy5nZXRDbGlja2VkSW5kZXgoZSk7XHJcbiAgICBjbGlja2VkSW5kZXggPSB0aGlzLmFwcGx5RmlsdGVycygnY2xpY2tlZEluZGV4JywgY2xpY2tlZEluZGV4LCBlLCB0aGlzKTtcclxuICAgIC8qKiBAdHlwZSB7RGF0YVNvdXJjZX0gKi9cclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB7XHJcbiAgICAgIGdhbGxlcnk6IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChlLmN1cnJlbnRUYXJnZXQpXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChjbGlja2VkSW5kZXggPj0gMCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMubG9hZEFuZE9wZW4oY2xpY2tlZEluZGV4LCBkYXRhU291cmNlLCBpbml0aWFsUG9pbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGluZGV4IG9mIGdhbGxlcnkgaXRlbSB0aGF0IHdhcyBjbGlja2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBlIGNsaWNrIGV2ZW50XHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXRDbGlja2VkSW5kZXgoZSkge1xyXG4gICAgLy8gbGVnYWN5IG9wdGlvblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXRDbGlja2VkSW5kZXhGbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldENsaWNrZWRJbmRleEZuLmNhbGwodGhpcywgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xpY2tlZFRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChlLnRhcmdldCk7XHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4sXHJcbiAgICAgIHRoaXMub3B0aW9ucy5jaGlsZFNlbGVjdG9yLFxyXG4gICAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhlLmN1cnJlbnRUYXJnZXQpXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xpY2tlZENoaWxkSW5kZXggPSBjaGlsZEVsZW1lbnRzLmZpbmRJbmRleChcclxuICAgICAgY2hpbGQgPT4gY2hpbGQgPT09IGNsaWNrZWRUYXJnZXQgfHwgY2hpbGQuY29udGFpbnMoY2xpY2tlZFRhcmdldClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGNsaWNrZWRDaGlsZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gY2xpY2tlZENoaWxkSW5kZXg7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jaGlsZHJlbiB8fCB0aGlzLm9wdGlvbnMuY2hpbGRTZWxlY3Rvcikge1xyXG4gICAgICAvLyBjbGljayB3YXNuJ3Qgb24gYSBjaGlsZCBlbGVtZW50XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGVyZSBpcyBvbmx5IG9uZSBpdGVtICh3aGljaCBpcyB0aGUgZ2FsbGVyeSlcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCBhbmQgb3BlbiBQaG90b1N3aXBlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcGFyYW0ge0RhdGFTb3VyY2V9IGRhdGFTb3VyY2VcclxuICAgKiBAcGFyYW0ge1BvaW50IHwgbnVsbH0gW2luaXRpYWxQb2ludF1cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBsb2FkQW5kT3BlbihpbmRleCwgZGF0YVNvdXJjZSwgaW5pdGlhbFBvaW50KSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZ2FsbGVyeSBpcyBhbHJlYWR5IG9wZW5cclxuICAgIGlmICh3aW5kb3cucHN3cCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IGluaXRpYWwgaW5kZXhcclxuICAgIHRoaXMub3B0aW9ucy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIC8vIGRlZmluZSBvcHRpb25zIGZvciBQaG90b1N3aXBlIGNvbnN0cnVjdG9yXHJcbiAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbFBvaW50ZXJQb3MgPSBpbml0aWFsUG9pbnQ7XHJcblxyXG4gICAgdGhpcy5zaG91bGRPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucHJlbG9hZChpbmRleCwgZGF0YVNvdXJjZSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgdGhlIG1haW4gbW9kdWxlIGFuZCB0aGUgc2xpZGUgY29udGVudCBieSBpbmRleFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHBhcmFtIHtEYXRhU291cmNlfSBbZGF0YVNvdXJjZV1cclxuICAgKi9cclxuICBwcmVsb2FkKGluZGV4LCBkYXRhU291cmNlKSB7XHJcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKGRhdGFTb3VyY2UpIHtcclxuICAgICAgb3B0aW9ucy5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgdGhlIG1haW4gbW9kdWxlXHJcbiAgICAvKiogQHR5cGUge1Byb21pc2U8VHlwZTxQaG90b1N3aXBlPj5bXX0gKi9cclxuICAgIGNvbnN0IHByb21pc2VBcnJheSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBzd3BNb2R1bGVUeXBlID0gdHlwZW9mIG9wdGlvbnMucHN3cE1vZHVsZTtcclxuICAgIGlmIChpc1Bzd3BDbGFzcyhvcHRpb25zLnBzd3BNb2R1bGUpKSB7XHJcbiAgICAgIHByb21pc2VBcnJheS5wdXNoKFByb21pc2UucmVzb2x2ZSgvKiogQHR5cGUge1R5cGU8UGhvdG9Td2lwZT59ICovKG9wdGlvbnMucHN3cE1vZHVsZSkpKTtcclxuICAgIH0gZWxzZSBpZiAocHN3cE1vZHVsZVR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHN3cE1vZHVsZSBhcyBzdHJpbmcgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCcpO1xyXG4gICAgfSBlbHNlIGlmIChwc3dwTW9kdWxlVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBwcm9taXNlQXJyYXkucHVzaCgvKiogQHR5cGUgeygpID0+IFByb21pc2U8VHlwZTxQaG90b1N3aXBlPj59ICovKG9wdGlvbnMucHN3cE1vZHVsZSkoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Bzd3BNb2R1bGUgaXMgbm90IHZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGN1c3RvbS1kZWZpbmVkIHByb21pc2UsIGlmIGFueVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9wZW5Qcm9taXNlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIC8vIGFsbG93IGRldmVsb3BlcnMgdG8gcGVyZm9ybSBzb21lIHRhc2sgYmVmb3JlIG9wZW5pbmdcclxuICAgICAgcHJvbWlzZUFycmF5LnB1c2gob3B0aW9ucy5vcGVuUHJvbWlzZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5wcmVsb2FkRmlyc3RTbGlkZSAhPT0gZmFsc2UgJiYgaW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLl9wcmVsb2FkZWRDb250ZW50ID0gbGF6eUxvYWRTbGlkZShpbmRleCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2FpdCB0aWxsIGFsbCBwcm9taXNlcyByZXNvbHZlIGFuZCBvcGVuIFBob3RvU3dpcGVcclxuICAgIGNvbnN0IHVpZCA9ICsrdGhpcy5fdWlkO1xyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZUFycmF5KS50aGVuKChpdGVyYWJsZU1vZHVsZXMpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc2hvdWxkT3Blbikge1xyXG4gICAgICAgIGNvbnN0IG1haW5Nb2R1bGUgPSBpdGVyYWJsZU1vZHVsZXNbMF07XHJcbiAgICAgICAgdGhpcy5fb3BlblBob3Rvc3dpcGUobWFpbk1vZHVsZSwgdWlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7VHlwZTxQaG90b1N3aXBlPiB8IHsgZGVmYXVsdDogVHlwZTxQaG90b1N3aXBlPiB9fSBtb2R1bGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdWlkXHJcbiAgICovXHJcbiAgX29wZW5QaG90b3N3aXBlKG1vZHVsZSwgdWlkKSB7XHJcbiAgICAvLyBDYW5jZWwgb3BlbmluZyBpZiBVSUQgZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvbmVcclxuICAgIC8vIChpZiB1c2VyIGNsaWNrZWQgb24gYW5vdGhlciBnYWxsZXJ5IGl0ZW0gYmVmb3JlIGN1cnJlbnQgd2FzIGxvYWRlZCkuXHJcbiAgICAvL1xyXG4gICAgLy8gT3IgaWYgc2hvdWxkT3BlbiBmbGFnIGlzIHNldCB0byBmYWxzZVxyXG4gICAgLy8gKGRldmVsb3BlciBtYXkgbW9kaWZ5IGl0IHZpYSBwdWJsaWMgQVBJKVxyXG4gICAgaWYgKHVpZCAhPT0gdGhpcy5fdWlkICYmIHRoaXMuc2hvdWxkT3Blbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG91bGRPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gUGhvdG9Td2lwZSBpcyBhbHJlYWR5IG9wZW5cclxuICAgIGlmICh3aW5kb3cucHN3cCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXNzIGRhdGEgdG8gUGhvdG9Td2lwZSBhbmQgb3BlbiBpbml0XHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge1Bob3RvU3dpcGV9XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHBzd3AgPSB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0J1xyXG4gICAgICA/IG5ldyBtb2R1bGUuZGVmYXVsdCh0aGlzLm9wdGlvbnMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgOiBuZXcgbW9kdWxlKHRoaXMub3B0aW9ucyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgd2luZG93LnBzd3AgPSBwc3dwO1xyXG5cclxuICAgIC8vIG1hcCBsaXN0ZW5lcnMgZnJvbSBMaWdodGJveCB0byBQaG90b1N3aXBlIENvcmVcclxuICAgIC8qKiBAdHlwZSB7KGtleW9mIFBob3RvU3dpcGVFdmVudHNNYXApW119ICovXHJcbiAgICAoT2JqZWN0LmtleXModGhpcy5fbGlzdGVuZXJzKSkuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0/LmZvckVhY2goKGZuKSA9PiB7XHJcbiAgICAgICAgcHN3cC5vbihuYW1lLCAvKiogQHR5cGUge0V2ZW50Q2FsbGJhY2s8dHlwZW9mIG5hbWU+fSAqLyhmbikpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNhbWUgd2l0aCBmaWx0ZXJzXHJcbiAgICAvKiogQHR5cGUgeyhrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcClbXX0gKi9cclxuICAgIChPYmplY3Qua2V5cyh0aGlzLl9maWx0ZXJzKSkuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBwc3dwLmFkZEZpbHRlcihuYW1lLCBmaWx0ZXIuZm4sIGZpbHRlci5wcmlvcml0eSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3ByZWxvYWRlZENvbnRlbnQpIHtcclxuICAgICAgcHN3cC5jb250ZW50TG9hZGVyLmFkZFRvQ2FjaGUodGhpcy5fcHJlbG9hZGVkQ29udGVudCk7XHJcbiAgICAgIHRoaXMuX3ByZWxvYWRlZENvbnRlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5vbignZGVzdHJveScsICgpID0+IHtcclxuICAgICAgLy8gY2xlYW4gdXAgcHVibGljIHZhcmlhYmxlc1xyXG4gICAgICB0aGlzLnBzd3AgPSB1bmRlZmluZWQ7XHJcbiAgICAgIGRlbGV0ZSB3aW5kb3cucHN3cDtcclxuICAgIH0pO1xyXG5cclxuICAgIHBzd3AuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5iaW5kcyBhbGwgZXZlbnRzLCBjbG9zZXMgUGhvdG9Td2lwZSBpZiBpdCdzIG9wZW4uXHJcbiAgICovXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucHN3cD8uZGVzdHJveSgpO1xyXG5cclxuICAgIHRoaXMuc2hvdWxkT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgZ2V0RWxlbWVudHNGcm9tT3B0aW9uKHRoaXMub3B0aW9ucy5nYWxsZXJ5LCB0aGlzLm9wdGlvbnMuZ2FsbGVyeVNlbGVjdG9yKVxyXG4gICAgICAuZm9yRWFjaCgoZ2FsbGVyeUVsZW1lbnQpID0+IHtcclxuICAgICAgICBnYWxsZXJ5RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UaHVtYm5haWxzQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQaG90b1N3aXBlTGlnaHRib3ggYXMgZGVmYXVsdCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1waG90b3N3aXBlLWxpZ2h0Ym94LmVzbS5qcy5tYXBcclxuIiwiLyohXHJcbiAgKiBQaG90b1N3aXBlIDUuMy42IC0gaHR0cHM6Ly9waG90b3N3aXBlLmNvbVxyXG4gICogKGMpIDIwMjMgRG15dHJvIFNlbWVub3ZcclxuICAqL1xyXG4vKlxyXG5BdHRyaWJ1dGlvbjogUm9iZXJ0IEEgSG93ZWxsLCBNYXJjaCAyMDIzXHJcbk9yaWdpbmFsIEF1dGhvcjogRG15dHJvIFNlbWVub3YsIGh0dHBzOi8vcGhvdG9zd2lwZS5jb21cclxuU291cmNlIGRpc3RyaWJ1dGlvbjogaHR0cHM6Ly9naXRodWIuY29tL2RpbXNlbWVub3YvUGhvdG9Td2lwZVxyXG5Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcbiovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXB9IFRcclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxyXG4gKiBAcGFyYW0ge1R9IHRhZ05hbWVcclxuICogQHBhcmFtIHtOb2RlfSBbYXBwZW5kVG9FbF1cclxuICogQHJldHVybnMge0hUTUxFbGVtZW50VGFnTmFtZU1hcFtUXX1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY2xhc3NOYW1lLCB0YWdOYW1lLCBhcHBlbmRUb0VsKSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICB9XHJcbiAgaWYgKGFwcGVuZFRvRWwpIHtcclxuICAgIGFwcGVuZFRvRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gIH1cclxuICByZXR1cm4gZWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMVxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBlcXVhbGl6ZVBvaW50cyhwMSwgcDIpIHtcclxuICBwMS54ID0gcDIueDtcclxuICBwMS55ID0gcDIueTtcclxuICBpZiAocDIuaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcDEuaWQgPSBwMi5pZDtcclxuICB9XHJcbiAgcmV0dXJuIHAxO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQb2ludH0gcFxyXG4gKi9cclxuZnVuY3Rpb24gcm91bmRQb2ludChwKSB7XHJcbiAgcC54ID0gTWF0aC5yb3VuZChwLngpO1xyXG4gIHAueSA9IE1hdGgucm91bmQocC55KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMVxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGlzdGFuY2VCZXR3ZWVuKHAxLCBwMikge1xyXG4gIGNvbnN0IHggPSBNYXRoLmFicyhwMS54IC0gcDIueCk7XHJcbiAgY29uc3QgeSA9IE1hdGguYWJzKHAxLnkgLSBwMi55KTtcclxuICByZXR1cm4gTWF0aC5zcXJ0KCh4ICogeCkgKyAoeSAqIHkpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgWCBhbmQgWSBwb3NpdGlvbnMgb2YgcG9pbnRzIGFyZSBlcXVhbFxyXG4gKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMVxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIHBvaW50c0VxdWFsKHAxLCBwMikge1xyXG4gIHJldHVybiBwMS54ID09PSBwMi54ICYmIHAxLnkgPT09IHAyLnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgZmxvYXQgcmVzdWx0IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IHZhbHVlcy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRyYW5zZm9ybSBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IFt5XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlXVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9UcmFuc2Zvcm1TdHJpbmcoeCwgeSwgc2NhbGUpIHtcclxuICBsZXQgcHJvcFZhbHVlID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwke3kgfHwgMH1weCwwKWA7XHJcblxyXG4gIGlmIChzY2FsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwcm9wVmFsdWUgKz0gYCBzY2FsZTNkKCR7c2NhbGV9LCR7c2NhbGV9LDEpYDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9wVmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBseSB0cmFuc2Zvcm06dHJhbnNsYXRlKHgsIHkpIHNjYWxlKHNjYWxlKSB0byBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV1cclxuICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZV1cclxuICovXHJcbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShlbCwgeCwgeSwgc2NhbGUpIHtcclxuICBlbC5zdHlsZS50cmFuc2Zvcm0gPSB0b1RyYW5zZm9ybVN0cmluZyh4LCB5LCBzY2FsZSk7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRDU1NFYXNpbmcgPSAnY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpJztcclxuXHJcbi8qKlxyXG4gKiBBcHBseSBDU1MgdHJhbnNpdGlvbiB0byBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcF0gQ1NTIHByb3BlcnR5IHRvIGFuaW1hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbl0gaW4gbXNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtlYXNlXSBDU1MgZWFzaW5nIGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uU3R5bGUoZWwsIHByb3AsIGR1cmF0aW9uLCBlYXNlKSB7XHJcbiAgLy8gaW5PdXQ6ICdjdWJpYy1iZXppZXIoLjQsIDAsIC4yMiwgMSknLCAvLyBmb3IgXCJ0b2dnbGUgc3RhdGVcIiB0cmFuc2l0aW9uc1xyXG4gIC8vIG91dDogJ2N1YmljLWJlemllcigwLCAwLCAuMjIsIDEpJywgLy8gZm9yIFwic2hvd1wiIHRyYW5zaXRpb25zXHJcbiAgLy8gaW46ICdjdWJpYy1iZXppZXIoLjQsIDAsIDEsIDEpJy8vIGZvciBcImhpZGVcIiB0cmFuc2l0aW9uc1xyXG4gIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9wXHJcbiAgICA/IGAke3Byb3B9ICR7ZHVyYXRpb259bXMgJHtlYXNlIHx8IGRlZmF1bHRDU1NFYXNpbmd9YFxyXG4gICAgOiAnbm9uZSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBseSB3aWR0aCBhbmQgaGVpZ2h0IENTUyBwcm9wZXJ0aWVzIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IHdcclxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGhcclxuICovXHJcbmZ1bmN0aW9uIHNldFdpZHRoSGVpZ2h0KGVsLCB3LCBoKSB7XHJcbiAgZWwuc3R5bGUud2lkdGggPSAodHlwZW9mIHcgPT09ICdudW1iZXInKSA/IGAke3d9cHhgIDogdztcclxuICBlbC5zdHlsZS5oZWlnaHQgPSAodHlwZW9mIGggPT09ICdudW1iZXInKSA/IGAke2h9cHhgIDogaDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uU3R5bGUoZWwpIHtcclxuICBzZXRUcmFuc2l0aW9uU3R5bGUoZWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWdcclxuICogQHJldHVybnMge1Byb21pc2U8SFRNTEltYWdlRWxlbWVudCB8IHZvaWQ+fVxyXG4gKi9cclxuZnVuY3Rpb24gZGVjb2RlSW1hZ2UoaW1nKSB7XHJcbiAgaWYgKCdkZWNvZGUnIGluIGltZykge1xyXG4gICAgcmV0dXJuIGltZy5kZWNvZGUoKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGltZy5jb21wbGV0ZSkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbWcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XHJcbiAgICBpbWcub25lcnJvciA9IHJlamVjdDtcclxuICB9KTtcclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtMT0FEX1NUQVRFW2tleW9mIExPQURfU1RBVEVdfSBMb2FkU3RhdGUgKi9cclxuLyoqIEB0eXBlIHt7IElETEU6ICdpZGxlJzsgTE9BRElORzogJ2xvYWRpbmcnOyBMT0FERUQ6ICdsb2FkZWQnOyBFUlJPUjogJ2Vycm9yJyB9fSAqL1xyXG5jb25zdCBMT0FEX1NUQVRFID0ge1xyXG4gIElETEU6ICdpZGxlJyxcclxuICBMT0FESU5HOiAnbG9hZGluZycsXHJcbiAgTE9BREVEOiAnbG9hZGVkJyxcclxuICBFUlJPUjogJ2Vycm9yJyxcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgY2xpY2sgb3Iga2V5ZG93biBldmVudCB3YXMgZGlzcGF0Y2hlZFxyXG4gKiB3aXRoIGEgc3BlY2lhbCBrZXkgb3IgdmlhIG1vdXNlIHdoZWVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge01vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50fSBlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gc3BlY2lhbEtleVVzZWQoZSkge1xyXG4gIHJldHVybiAoJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA9PT0gMSkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5O1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYGdhbGxlcnlgIG9yIGBjaGlsZHJlbmAgb3B0aW9ucy5cclxuICpcclxuICogQHBhcmFtIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5FbGVtZW50UHJvdmlkZXJ9IFtvcHRpb25dXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbGVnYWN5U2VsZWN0b3JdXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBEb2N1bWVudH0gW3BhcmVudF1cclxuICogQHJldHVybnMgSFRNTEVsZW1lbnRbXVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKG9wdGlvbiwgbGVnYWN5U2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50KSB7XHJcbiAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xyXG4gIGxldCBlbGVtZW50cyA9IFtdO1xyXG5cclxuICBpZiAob3B0aW9uIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgZWxlbWVudHMgPSBbb3B0aW9uXTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkob3B0aW9uKSkge1xyXG4gICAgZWxlbWVudHMgPSBBcnJheS5mcm9tKG9wdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gdHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBsZWdhY3lTZWxlY3RvcjtcclxuICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICBlbGVtZW50cyA9IEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50cztcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGJyb3dzZXIgaXMgU2FmYXJpXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTYWZhcmkoKSB7XHJcbiAgcmV0dXJuICEhKG5hdmlnYXRvci52ZW5kb3IgJiYgbmF2aWdhdG9yLnZlbmRvci5tYXRjaCgvYXBwbGUvaSkpO1xyXG59XHJcblxyXG4vLyBEZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0XHJcbmxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxudHJ5IHtcclxuICAvKiBAdHMtaWdub3JlICovXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgZ2V0OiAoKSA9PiB7XHJcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSkpO1xyXG59IGNhdGNoIChlKSB7IH1cclxuLyogZXNsaW50LWVuYWJsZSAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBvb2xJdGVtXHJcbiAqIEBwcm9wIHtIVE1MRWxlbWVudCB8IFdpbmRvdyB8IERvY3VtZW50IHwgdW5kZWZpbmVkIHwgbnVsbH0gdGFyZ2V0XHJcbiAqIEBwcm9wIHtzdHJpbmd9IHR5cGVcclxuICogQHByb3Age0V2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3R9IGxpc3RlbmVyXHJcbiAqIEBwcm9wIHtib29sZWFufSBbcGFzc2l2ZV1cclxuICovXHJcblxyXG5jbGFzcyBET01FdmVudHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UG9vbEl0ZW1bXX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3Bvb2wgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0YXJnZXQnXX0gdGFyZ2V0XHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsndHlwZSddfSB0eXBlIENhbiBiZSBtdWx0aXBsZSwgc2VwYXJhdGVkIGJ5IHNwYWNlLlxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ2xpc3RlbmVyJ119IGxpc3RlbmVyXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsncGFzc2l2ZSddfSBbcGFzc2l2ZV1cclxuICAgKi9cclxuICBhZGQodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcGFzc2l2ZSkge1xyXG4gICAgdGhpcy5fdG9nZ2xlTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcGFzc2l2ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsndGFyZ2V0J119IHRhcmdldFxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ3R5cGUnXX0gdHlwZVxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ2xpc3RlbmVyJ119IGxpc3RlbmVyXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsncGFzc2l2ZSddfSBbcGFzc2l2ZV1cclxuICAgKi9cclxuICByZW1vdmUodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcGFzc2l2ZSkge1xyXG4gICAgdGhpcy5fdG9nZ2xlTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcGFzc2l2ZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCBib3VuZCBldmVudHNcclxuICAgKi9cclxuICByZW1vdmVBbGwoKSB7XHJcbiAgICB0aGlzLl9wb29sLmZvckVhY2goKHBvb2xJdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZUxpc3RlbmVyKFxyXG4gICAgICAgIHBvb2xJdGVtLnRhcmdldCxcclxuICAgICAgICBwb29sSXRlbS50eXBlLFxyXG4gICAgICAgIHBvb2xJdGVtLmxpc3RlbmVyLFxyXG4gICAgICAgIHBvb2xJdGVtLnBhc3NpdmUsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3Bvb2wgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgb3IgcmVtb3ZlcyBldmVudFxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0YXJnZXQnXX0gdGFyZ2V0XHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsndHlwZSddfSB0eXBlXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsnbGlzdGVuZXInXX0gbGlzdGVuZXJcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWydwYXNzaXZlJ119IFtwYXNzaXZlXVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VuYmluZF0gV2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGFkZGVkIG9yIHJlbW92ZWRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUG9vbF0gV2hldGhlciBldmVudHMgcG9vbCBzaG91bGQgYmUgc2tpcHBlZFxyXG4gICAqL1xyXG4gIF90b2dnbGVMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlLCB1bmJpbmQsIHNraXBQb29sKSB7XHJcbiAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWV0aG9kTmFtZSA9IHVuYmluZCA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdhZGRFdmVudExpc3RlbmVyJztcclxuICAgIGNvbnN0IHR5cGVzID0gdHlwZS5zcGxpdCgnICcpO1xyXG4gICAgdHlwZXMuZm9yRWFjaCgoZVR5cGUpID0+IHtcclxuICAgICAgaWYgKGVUeXBlKSB7XHJcbiAgICAgICAgLy8gRXZlbnRzIHBvb2wgaXMgdXNlZCB0byBlYXNpbHkgdW5iaW5kIGFsbCBldmVudHMgd2hlbiBQaG90b1N3aXBlIGlzIGNsb3NlZCxcclxuICAgICAgICAvLyBzbyBkZXZlbG9wZXIgZG9lc24ndCBuZWVkIHRvIGRvIHRoaXMgbWFudWFsbHlcclxuICAgICAgICBpZiAoIXNraXBQb29sKSB7XHJcbiAgICAgICAgICBpZiAodW5iaW5kKSB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIHRoZSBldmVudHMgcG9vbFxyXG4gICAgICAgICAgICB0aGlzLl9wb29sID0gdGhpcy5fcG9vbC5maWx0ZXIoKHBvb2xJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBvb2xJdGVtLnR5cGUgIT09IGVUeXBlXHJcbiAgICAgICAgICAgICAgICB8fCBwb29sSXRlbS5saXN0ZW5lciAhPT0gbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIHx8IHBvb2xJdGVtLnRhcmdldCAhPT0gdGFyZ2V0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCB0byB0aGUgZXZlbnRzIHBvb2xcclxuICAgICAgICAgICAgdGhpcy5fcG9vbC5wdXNoKHtcclxuICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgdHlwZTogZVR5cGUsXHJcbiAgICAgICAgICAgICAgbGlzdGVuZXIsXHJcbiAgICAgICAgICAgICAgcGFzc2l2ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG1vc3QgUGhvdG9Td2lwZSBldmVudHMgY2FsbCBwcmV2ZW50RGVmYXVsdCxcclxuICAgICAgICAvLyBhbmQgd2UgZG8gbm90IG5lZWQgYnJvd3NlciB0byBzY3JvbGwgdGhlIHBhZ2VcclxuICAgICAgICBjb25zdCBldmVudE9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IChwYXNzaXZlIHx8IGZhbHNlKSB9IDogZmFsc2U7XHJcblxyXG4gICAgICAgIHRhcmdldFttZXRob2ROYW1lXShcclxuICAgICAgICAgIGVUeXBlLFxyXG4gICAgICAgICAgbGlzdGVuZXIsXHJcbiAgICAgICAgICBldmVudE9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2Jhc2UuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlQmFzZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IG9wdGlvbnNcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gcHN3cFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFNpemUob3B0aW9ucywgcHN3cCkge1xyXG4gIGlmIChvcHRpb25zLmdldFZpZXdwb3J0U2l6ZUZuKSB7XHJcbiAgICBjb25zdCBuZXdWaWV3cG9ydFNpemUgPSBvcHRpb25zLmdldFZpZXdwb3J0U2l6ZUZuKG9wdGlvbnMsIHBzd3ApO1xyXG4gICAgaWYgKG5ld1ZpZXdwb3J0U2l6ZSkge1xyXG4gICAgICByZXR1cm4gbmV3Vmlld3BvcnRTaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuXHJcbiAgICAvLyBEbXl0cm8gU2VtZW5vdjogaGVpZ2h0IG9uIG1vYmlsZSBpcyB2ZXJ5IGluY29zaXN0ZW50IGR1ZSB0byB0b29sYmFyXHJcbiAgICAvLyBmaW5kIGEgd2F5IHRvIGltcHJvdmUgdGhpc1xyXG4gICAgLy9cclxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSBkb2Vzbid0IHNlZW0gdG8gd29yayB3ZWxsXHJcbiAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIHBhZGRpbmcgb3B0aW9uLlxyXG4gKiBTdXBwb3J0ZWQgZm9ybWF0czpcclxuICpcclxuICogLy8gT2JqZWN0XHJcbiAqIHBhZGRpbmc6IHtcclxuICogIHRvcDogMCxcclxuICogIGJvdHRvbTogMCxcclxuICogIGxlZnQ6IDAsXHJcbiAqICByaWdodDogMFxyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBvYmplY3RcclxuICogcGFkZGluZ0ZuOiAodmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpID0+IHtcclxuICogIHJldHVybiB7XHJcbiAqICAgIHRvcDogMCxcclxuICogICAgYm90dG9tOiAwLFxyXG4gKiAgICBsZWZ0OiAwLFxyXG4gKiAgICByaWdodDogMFxyXG4gKiAgfTtcclxuICogfVxyXG4gKlxyXG4gKiAvLyBMZWdhY3kgdmFyaWFudFxyXG4gKiBwYWRkaW5nTGVmdDogMCxcclxuICogcGFkZGluZ1JpZ2h0OiAwLFxyXG4gKiBwYWRkaW5nVG9wOiAwLFxyXG4gKiBwYWRkaW5nQm90dG9tOiAwLFxyXG4gKlxyXG4gKiBAcGFyYW0geydsZWZ0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAncmlnaHQnfSBwcm9wXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IG9wdGlvbnMgUGhvdG9Td2lwZSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHZpZXdwb3J0U2l6ZSBQaG90b1N3aXBlIHZpZXdwb3J0IHNpemUsIGZvciBleGFtcGxlOiB7IHg6ODAwLCB5OjYwMCB9XHJcbiAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBEYXRhIGFib3V0IHRoZSBzbGlkZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggU2xpZGUgaW5kZXhcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlUGFkZGluZ09wdGlvbihwcm9wLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gIGxldCBwYWRkaW5nVmFsdWUgPSAwO1xyXG5cclxuICBpZiAob3B0aW9ucy5wYWRkaW5nRm4pIHtcclxuICAgIHBhZGRpbmdWYWx1ZSA9IG9wdGlvbnMucGFkZGluZ0ZuKHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVtwcm9wXTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMucGFkZGluZykge1xyXG4gICAgcGFkZGluZ1ZhbHVlID0gb3B0aW9ucy5wYWRkaW5nW3Byb3BdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBsZWdhY3lQcm9wTmFtZSA9ICdwYWRkaW5nJyArIHByb3BbMF0udG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBpZiAob3B0aW9uc1tsZWdhY3lQcm9wTmFtZV0pIHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICBwYWRkaW5nVmFsdWUgPSBvcHRpb25zW2xlZ2FjeVByb3BOYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBOdW1iZXIocGFkZGluZ1ZhbHVlKSB8fCAwO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1BvaW50fSB2aWV3cG9ydFNpemVcclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQYW5BcmVhU2l6ZShvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB2aWV3cG9ydFNpemUueFxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbignbGVmdCcsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigncmlnaHQnLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCksXHJcbiAgICB5OiB2aWV3cG9ydFNpemUueVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigndG9wJywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpXHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdib3R0b20nLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleClcclxuICB9O1xyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcbi8qKiBAdHlwZWRlZiB7UmVjb3JkPEF4aXMsIG51bWJlcj59IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7J3gnIHwgJ3knfSBBeGlzICovXHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBtaW5pbXVtLCBtYXhpbXVtIGFuZCBpbml0aWFsIChjZW50ZXIpIGJvdW5kcyBvZiBhIHNsaWRlXHJcbiAqL1xyXG5jbGFzcyBQYW5Cb3VuZHMge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGV9IHNsaWRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc2xpZGUpIHtcclxuICAgIHRoaXMuc2xpZGUgPSBzbGlkZTtcclxuICAgIHRoaXMuY3Vyclpvb21MZXZlbCA9IDE7XHJcbiAgICB0aGlzLmNlbnRlciA9IC8qKiBAdHlwZSB7UG9pbnR9ICovIHsgeDogMCwgeTogMCB9O1xyXG4gICAgdGhpcy5tYXggPSAvKiogQHR5cGUge1BvaW50fSAqLyB7IHg6IDAsIHk6IDAgfTtcclxuICAgIHRoaXMubWluID0gLyoqIEB0eXBlIHtQb2ludH0gKi8geyB4OiAwLCB5OiAwIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBfZ2V0SXRlbUJvdW5kc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJab29tTGV2ZWxcclxuICAgKi9cclxuICB1cGRhdGUoY3Vyclpvb21MZXZlbCkge1xyXG4gICAgdGhpcy5jdXJyWm9vbUxldmVsID0gY3Vyclpvb21MZXZlbDtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2xpZGUud2lkdGgpIHtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdXBkYXRlQXhpcygneCcpO1xyXG4gICAgICB0aGlzLl91cGRhdGVBeGlzKCd5Jyk7XHJcbiAgICAgIHRoaXMuc2xpZGUucHN3cC5kaXNwYXRjaCgnY2FsY0JvdW5kcycsIHsgc2xpZGU6IHRoaXMuc2xpZGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBfY2FsY3VsYXRlSXRlbUJvdW5kc0ZvckF4aXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXhpc30gYXhpc1xyXG4gICAqL1xyXG4gIF91cGRhdGVBeGlzKGF4aXMpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcy5zbGlkZTtcclxuICAgIGNvbnN0IGVsU2l6ZSA9IHRoaXMuc2xpZGVbYXhpcyA9PT0gJ3gnID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSAqIHRoaXMuY3Vyclpvb21MZXZlbDtcclxuICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gYXhpcyA9PT0gJ3gnID8gJ2xlZnQnIDogJ3RvcCc7XHJcbiAgICBjb25zdCBwYWRkaW5nID0gcGFyc2VQYWRkaW5nT3B0aW9uKFxyXG4gICAgICBwYWRkaW5nUHJvcCxcclxuICAgICAgcHN3cC5vcHRpb25zLFxyXG4gICAgICBwc3dwLnZpZXdwb3J0U2l6ZSxcclxuICAgICAgdGhpcy5zbGlkZS5kYXRhLFxyXG4gICAgICB0aGlzLnNsaWRlLmluZGV4XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBhbkFyZWFTaXplID0gdGhpcy5zbGlkZS5wYW5BcmVhU2l6ZVtheGlzXTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IHBvc2l0aW9uIG9mIGVsZW1lbnQuXHJcbiAgICAvLyBCeSBkZWZhdWx0LCBpdCBpcyBjZW50ZXIgb2Ygdmlld3BvcnQ6XHJcbiAgICB0aGlzLmNlbnRlcltheGlzXSA9IE1hdGgucm91bmQoKHBhbkFyZWFTaXplIC0gZWxTaXplKSAvIDIpICsgcGFkZGluZztcclxuXHJcbiAgICAvLyBtYXhpbXVtIHBhbiBwb3NpdGlvblxyXG4gICAgdGhpcy5tYXhbYXhpc10gPSAoZWxTaXplID4gcGFuQXJlYVNpemUpXHJcbiAgICAgID8gTWF0aC5yb3VuZChwYW5BcmVhU2l6ZSAtIGVsU2l6ZSkgKyBwYWRkaW5nXHJcbiAgICAgIDogdGhpcy5jZW50ZXJbYXhpc107XHJcblxyXG4gICAgLy8gbWluaW11bSBwYW4gcG9zaXRpb25cclxuICAgIHRoaXMubWluW2F4aXNdID0gKGVsU2l6ZSA+IHBhbkFyZWFTaXplKVxyXG4gICAgICA/IHBhZGRpbmdcclxuICAgICAgOiB0aGlzLmNlbnRlcltheGlzXTtcclxuICB9XHJcblxyXG4gIC8vIF9nZXRaZXJvQm91bmRzXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmNlbnRlci54ID0gMDtcclxuICAgIHRoaXMuY2VudGVyLnkgPSAwO1xyXG4gICAgdGhpcy5tYXgueCA9IDA7XHJcbiAgICB0aGlzLm1heC55ID0gMDtcclxuICAgIHRoaXMubWluLnggPSAwO1xyXG4gICAgdGhpcy5taW4ueSA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3JyZWN0IHBhbiBwb3NpdGlvbiBpZiBpdCdzIGJleW9uZCB0aGUgYm91bmRzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0F4aXN9IGF4aXMgeCBvciB5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhbk9mZnNldFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgY29ycmVjdFBhbihheGlzLCBwYW5PZmZzZXQpIHsgLy8gY2hlY2tQYW5Cb3VuZHNcclxuICAgIHJldHVybiBjbGFtcChwYW5PZmZzZXQsIHRoaXMubWF4W2F4aXNdLCB0aGlzLm1pbltheGlzXSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBNQVhfSU1BR0VfV0lEVEggPSA0MDAwO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKiogQHR5cGVkZWYgeydmaXQnIHwgJ2ZpbGwnIHwgbnVtYmVyIHwgKCh6b29tTGV2ZWxPYmplY3Q6IFpvb21MZXZlbCkgPT4gbnVtYmVyKX0gWm9vbUxldmVsT3B0aW9uICovXHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB6b29tIGxldmVscyBmb3Igc3BlY2lmaWMgc2xpZGUuXHJcbiAqIERlcGVuZHMgb24gdmlld3BvcnQgc2l6ZSBhbmQgaW1hZ2Ugc2l6ZS5cclxuICovXHJcbmNsYXNzIFpvb21MZXZlbCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9ucyBQaG90b1N3aXBlIG9wdGlvbnNcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgU2xpZGUgZGF0YVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gW3Bzd3BdIFBob3RvU3dpcGUgaW5zdGFuY2UsIGNhbiBiZSB1bmRlZmluZWQgaWYgbm90IGluaXRpYWxpemVkIHlldFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGl0ZW1EYXRhLCBpbmRleCwgcHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLml0ZW1EYXRhID0gaXRlbURhdGE7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAvKiogQHR5cGUgeyBQb2ludCB8IG51bGwgfSAqL1xyXG4gICAgdGhpcy5wYW5BcmVhU2l6ZSA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUgeyBQb2ludCB8IG51bGwgfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50U2l6ZSA9IG51bGw7XHJcbiAgICB0aGlzLmZpdCA9IDE7XHJcbiAgICB0aGlzLmZpbGwgPSAxO1xyXG4gICAgdGhpcy52RmlsbCA9IDE7XHJcbiAgICB0aGlzLmluaXRpYWwgPSAxO1xyXG4gICAgdGhpcy5zZWNvbmRhcnkgPSAxO1xyXG4gICAgdGhpcy5tYXggPSAxO1xyXG4gICAgdGhpcy5taW4gPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIGluaXRpYWwsIHNlY29uZGFyeSBhbmQgbWF4aW11bSB6b29tIGxldmVsIGZvciB0aGUgc3BlY2lmaWVkIHNsaWRlLlxyXG4gICAqXHJcbiAgICogSXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIGVpdGhlciBpbWFnZSBvciB2aWV3cG9ydCBzaXplIGNoYW5nZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4SGVpZ2h0XHJcbiAgICogQHBhcmFtIHtQb2ludH0gcGFuQXJlYVNpemVcclxuICAgKi9cclxuICB1cGRhdGUobWF4V2lkdGgsIG1heEhlaWdodCwgcGFuQXJlYVNpemUpIHtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICBjb25zdCBlbGVtZW50U2l6ZSA9IHsgeDogbWF4V2lkdGgsIHk6IG1heEhlaWdodCB9O1xyXG4gICAgdGhpcy5lbGVtZW50U2l6ZSA9IGVsZW1lbnRTaXplO1xyXG4gICAgdGhpcy5wYW5BcmVhU2l6ZSA9IHBhbkFyZWFTaXplO1xyXG5cclxuICAgIGNvbnN0IGhSYXRpbyA9IHBhbkFyZWFTaXplLnggLyBlbGVtZW50U2l6ZS54O1xyXG4gICAgY29uc3QgdlJhdGlvID0gcGFuQXJlYVNpemUueSAvIGVsZW1lbnRTaXplLnk7XHJcblxyXG4gICAgdGhpcy5maXQgPSBNYXRoLm1pbigxLCBoUmF0aW8gPCB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW8pO1xyXG4gICAgdGhpcy5maWxsID0gTWF0aC5taW4oMSwgaFJhdGlvID4gdlJhdGlvID8gaFJhdGlvIDogdlJhdGlvKTtcclxuXHJcbiAgICAvLyB6b29tLnZGaWxsIGRlZmluZXMgem9vbSBsZXZlbCBvZiB0aGUgaW1hZ2VcclxuICAgIC8vIHdoZW4gaXQgaGFzIDEwMCUgb2Ygdmlld3BvcnQgdmVydGljYWwgc3BhY2UgKGhlaWdodClcclxuICAgIHRoaXMudkZpbGwgPSBNYXRoLm1pbigxLCB2UmF0aW8pO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuX2dldEluaXRpYWwoKTtcclxuICAgIHRoaXMuc2Vjb25kYXJ5ID0gdGhpcy5fZ2V0U2Vjb25kYXJ5KCk7XHJcbiAgICB0aGlzLm1heCA9IE1hdGgubWF4KFxyXG4gICAgICB0aGlzLmluaXRpYWwsXHJcbiAgICAgIHRoaXMuc2Vjb25kYXJ5LFxyXG4gICAgICB0aGlzLl9nZXRNYXgoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1pbiA9IE1hdGgubWluKFxyXG4gICAgICB0aGlzLmZpdCxcclxuICAgICAgdGhpcy5pbml0aWFsLFxyXG4gICAgICB0aGlzLnNlY29uZGFyeVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnem9vbUxldmVsc1VwZGF0ZScsIHsgem9vbUxldmVsczogdGhpcywgc2xpZGVEYXRhOiB0aGlzLml0ZW1EYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIHVzZXItZGVmaW5lZCB6b29tIG9wdGlvbi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsnaW5pdGlhbCcgfCAnc2Vjb25kYXJ5JyB8ICdtYXgnfSBvcHRpb25QcmVmaXggWm9vbSBsZXZlbCBvcHRpb24gcHJlZml4IChpbml0aWFsLCBzZWNvbmRhcnksIG1heClcclxuICAgKiBAcmV0dXJucyB7IG51bWJlciB8IHVuZGVmaW5lZCB9XHJcbiAgICovXHJcbiAgX3BhcnNlWm9vbUxldmVsT3B0aW9uKG9wdGlvblByZWZpeCkge1xyXG4gICAgY29uc3Qgb3B0aW9uTmFtZSA9IC8qKiBAdHlwZSB7J2luaXRpYWxab29tTGV2ZWwnIHwgJ3NlY29uZGFyeVpvb21MZXZlbCcgfCAnbWF4Wm9vbUxldmVsJ30gKi8gKFxyXG4gICAgICBvcHRpb25QcmVmaXggKyAnWm9vbUxldmVsJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gdGhpcy5vcHRpb25zW29wdGlvbk5hbWVdO1xyXG5cclxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvblZhbHVlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gJ2ZpbGwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvblZhbHVlID09PSAnZml0Jykge1xyXG4gICAgICByZXR1cm4gdGhpcy5maXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlcihvcHRpb25WYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgem9vbSBsZXZlbCB0byB3aGljaCBpbWFnZSB3aWxsIGJlIHpvb21lZCBhZnRlciBkb3VibGUtdGFwIGdlc3R1cmUsXHJcbiAgICogb3Igd2hlbiB1c2VyIGNsaWNrcyBvbiB6b29tIGljb24sXHJcbiAgICogb3IgbW91c2UtY2xpY2sgb24gaW1hZ2UgaXRzZWxmLlxyXG4gICAqIElmIHlvdSByZXR1cm4gMSBpbWFnZSB3aWxsIGJlIHpvb21lZCB0byBpdHMgb3JpZ2luYWwgc2l6ZS5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRTZWNvbmRhcnkoKSB7XHJcbiAgICBsZXQgY3Vyclpvb21MZXZlbCA9IHRoaXMuX3BhcnNlWm9vbUxldmVsT3B0aW9uKCdzZWNvbmRhcnknKTtcclxuXHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCkge1xyXG4gICAgICByZXR1cm4gY3Vyclpvb21MZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzeCBvZiBcImZpdFwiIHN0YXRlLCBidXQgbm90IGxhcmdlciB0aGFuIG9yaWdpbmFsXHJcbiAgICBjdXJyWm9vbUxldmVsID0gTWF0aC5taW4oMSwgdGhpcy5maXQgKiAzKTtcclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50U2l6ZSAmJiBjdXJyWm9vbUxldmVsICogdGhpcy5lbGVtZW50U2l6ZS54ID4gTUFYX0lNQUdFX1dJRFRIKSB7XHJcbiAgICAgIGN1cnJab29tTGV2ZWwgPSBNQVhfSU1BR0VfV0lEVEggLyB0aGlzLmVsZW1lbnRTaXplLng7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJab29tTGV2ZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaW5pdGlhbCBpbWFnZSB6b29tIGxldmVsLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldEluaXRpYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyc2Vab29tTGV2ZWxPcHRpb24oJ2luaXRpYWwnKSB8fCB0aGlzLmZpdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1heGltdW0gem9vbSBsZXZlbCB3aGVuIHVzZXIgem9vbXNcclxuICAgKiB2aWEgem9vbS9waW5jaCBnZXN0dXJlLFxyXG4gICAqIHZpYSBjbWQvY3RybC13aGVlbCBvciB2aWEgdHJhY2twYWQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0TWF4KCkge1xyXG4gICAgLy8gbWF4IHpvb20gbGV2ZWwgaXMgeDQgZnJvbSBcImZpdCBzdGF0ZVwiLFxyXG4gICAgLy8gdXNlZCBmb3Igem9vbSBnZXN0dXJlIGFuZCBjdHJsL3RyYWNrcGFkIHpvb21cclxuICAgIHJldHVybiB0aGlzLl9wYXJzZVpvb21MZXZlbE9wdGlvbignbWF4JykgfHwgTWF0aC5tYXgoMSwgdGhpcy5maXQgKiA0KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgYW5kIGFsbG93cyB0byBjb250cm9sIGEgc2luZ2xlIHNsaWRlXHJcbiAqL1xyXG5jbGFzcyBTbGlkZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IGRhdGFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkYXRhLCBpbmRleCwgcHN3cCkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLmlzQWN0aXZlID0gKGluZGV4ID09PSBwc3dwLmN1cnJJbmRleCk7XHJcbiAgICB0aGlzLmN1cnJlbnRSZXNvbHV0aW9uID0gMDtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5wYW4gPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICB0aGlzLmlzRmlyc3RTbGlkZSA9ICh0aGlzLmlzQWN0aXZlICYmICFwc3dwLm9wZW5lci5pc09wZW4pO1xyXG5cclxuICAgIHRoaXMuem9vbUxldmVscyA9IG5ldyBab29tTGV2ZWwocHN3cC5vcHRpb25zLCBkYXRhLCBpbmRleCwgcHN3cCk7XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdnZXR0aW5nRGF0YScsIHtcclxuICAgICAgc2xpZGU6IHRoaXMsXHJcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgaW5kZXhcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMucHN3cC5jb250ZW50TG9hZGVyLmdldENvbnRlbnRCeVNsaWRlKHRoaXMpO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdwc3dwX196b29tLXdyYXAnLCAnZGl2Jyk7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi9cclxuICAgIHRoaXMuaG9sZGVyRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jdXJyWm9vbUxldmVsID0gMTtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuY29udGVudC53aWR0aDtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNvbnRlbnQuaGVpZ2h0O1xyXG4gICAgdGhpcy5oZWF2eUFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmJvdW5kcyA9IG5ldyBQYW5Cb3VuZHModGhpcyk7XHJcblxyXG4gICAgdGhpcy5wcmV2RGlzcGxheWVkV2lkdGggPSAtMTtcclxuICAgIHRoaXMucHJldkRpc3BsYXllZEhlaWdodCA9IC0xO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVJbml0JywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgc2xpZGUgaXMgYWN0aXZlL2N1cnJlbnQvdmlzaWJsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0FjdGl2ZVxyXG4gICAqL1xyXG4gIHNldElzQWN0aXZlKGlzQWN0aXZlKSB7XHJcbiAgICBpZiAoaXNBY3RpdmUgJiYgIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgLy8gc2xpZGUganVzdCBiZWNhbWUgYWN0aXZlXHJcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgIH0gZWxzZSBpZiAoIWlzQWN0aXZlICYmIHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgLy8gc2xpZGUganVzdCBiZWNhbWUgbm9uLWFjdGl2ZVxyXG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgc2xpZGUgY29udGVudCB0byBET01cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhvbGRlckVsZW1lbnRcclxuICAgKi9cclxuICBhcHBlbmQoaG9sZGVyRWxlbWVudCkge1xyXG4gICAgdGhpcy5ob2xkZXJFbGVtZW50ID0gaG9sZGVyRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMCAwJztcclxuXHJcbiAgICAvLyBTbGlkZSBhcHBlbmRlZCB0byBET01cclxuICAgIGlmICghdGhpcy5kYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcclxuXHJcbiAgICB0aGlzLmxvYWQoKTtcclxuICAgIHRoaXMudXBkYXRlQ29udGVudFNpemUoKTtcclxuICAgIHRoaXMuYXBwZW5kSGVhdnkoKTtcclxuXHJcbiAgICB0aGlzLmhvbGRlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuem9vbUFuZFBhblRvSW5pdGlhbCgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnZmlyc3Rab29tUGFuJywgeyBzbGlkZTogdGhpcyB9KTtcclxuXHJcbiAgICB0aGlzLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ2FmdGVyU2V0Q29udGVudCcsIHsgc2xpZGU6IHRoaXMgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHRoaXMuY29udGVudC5sb2FkKGZhbHNlKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVMb2FkJywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCBcImhlYXZ5XCIgRE9NIGVsZW1lbnRzXHJcbiAgICpcclxuICAgKiBUaGlzIG1heSBkZXBlbmQgb24gYSB0eXBlIG9mIHNsaWRlLFxyXG4gICAqIGJ1dCBnZW5lcmFsbHkgdGhlc2UgYXJlIGxhcmdlIGltYWdlcy5cclxuICAgKi9cclxuICBhcHBlbmRIZWF2eSgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGNvbnN0IGFwcGVuZEhlYXZ5TmVhcmJ5ID0gdHJ1ZTsgLy8gRG15dHJvIFNlbWVub3ZcclxuXHJcbiAgICAvLyBBdm9pZCBhcHBlbmRpbmcgaGVhdnkgZWxlbWVudHMgZHVyaW5nIGFuaW1hdGlvbnNcclxuICAgIGlmICh0aGlzLmhlYXZ5QXBwZW5kZWRcclxuICAgICAgfHwgIXBzd3Aub3BlbmVyLmlzT3BlblxyXG4gICAgICB8fCBwc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKClcclxuICAgICAgfHwgKCF0aGlzLmlzQWN0aXZlICYmICFhcHBlbmRIZWF2eU5lYXJieSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBzd3AuZGlzcGF0Y2goJ2FwcGVuZEhlYXZ5JywgeyBzbGlkZTogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhlYXZ5QXBwZW5kZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY29udGVudC5hcHBlbmQoKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ2FwcGVuZEhlYXZ5Q29udGVudCcsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGlzIHNsaWRlIGlzIGFjdGl2ZSAoc2VsZWN0ZWQpLlxyXG4gICAqXHJcbiAgICogSWYgaXQncyBwYXJ0IG9mIG9wZW5pbmcvY2xvc2luZyB0cmFuc2l0aW9uIC1cclxuICAgKiBhY3RpdmF0ZSgpIHdpbGwgdHJpZ2dlciBhZnRlciB0aGUgdHJhbnNpdGlvbiBpcyBlbmRlZC5cclxuICAgKi9cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5hcHBlbmRIZWF2eSgpO1xyXG4gICAgdGhpcy5jb250ZW50LmFjdGl2YXRlKCk7XHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ3NsaWRlQWN0aXZhdGUnLCB7IHNsaWRlOiB0aGlzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcmVkIHdoZW4gdGhpcyBzbGlkZSBiZWNvbWVzIGluYWN0aXZlLlxyXG4gICAqXHJcbiAgICogU2xpZGUgY2FuIGJlY29tZSBpbmFjdGl2ZSBvbmx5IGFmdGVyIGl0IHdhcyBhY3RpdmUuXHJcbiAgICovXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuY29udGVudC5kZWFjdGl2YXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3Vyclpvb21MZXZlbCAhPT0gdGhpcy56b29tTGV2ZWxzLmluaXRpYWwpIHtcclxuICAgICAgLy8gYWxsb3cgZmlsdGVyaW5nXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlc2V0IHpvb20gbGV2ZWxcclxuICAgIHRoaXMuY3VycmVudFJlc29sdXRpb24gPSAwO1xyXG4gICAgdGhpcy56b29tQW5kUGFuVG9Jbml0aWFsKCk7XHJcbiAgICB0aGlzLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgIHRoaXMudXBkYXRlQ29udGVudFNpemUoKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ3NsaWRlRGVhY3RpdmF0ZScsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2xpZGUgc2hvdWxkIGRlc3Ryb3kgaXRzZWxmLCBpdCB3aWxsIG5ldmVyIGJlIHVzZWQgYWdhaW4uXHJcbiAgICogKHVuYmluZCBhbGwgZXZlbnRzIGFuZCBkZXN0cm95IGludGVybmFsIGNvbXBvbmVudHMpXHJcbiAgICovXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuY29udGVudC5oYXNTbGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb250ZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ3NsaWRlRGVzdHJveScsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyWm9vbUxldmVsID09PSB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbCB8fCAhdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBLZWVwIGluaXRpYWwgem9vbSBsZXZlbCBpZiBpdCB3YXMgYmVmb3JlIHRoZSByZXNpemUsXHJcbiAgICAgIC8vIGFzIHdlbGwgYXMgd2hlbiB0aGlzIHNsaWRlIGlzIG5vdCBhY3RpdmVcclxuXHJcbiAgICAgIC8vIFJlc2V0IHBvc2l0aW9uIGFuZCBzY2FsZSB0byBvcmlnaW5hbCBzdGF0ZVxyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcclxuICAgICAgdGhpcy5jdXJyZW50UmVzb2x1dGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuem9vbUFuZFBhblRvSW5pdGlhbCgpO1xyXG4gICAgICB0aGlzLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgdGhpcy51cGRhdGVDb250ZW50U2l6ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gcmVhZGp1c3QgcGFuIHBvc2l0aW9uIGlmIGl0J3MgYmV5b25kIHRoZSBib3VuZHNcclxuICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XHJcbiAgICAgIHRoaXMuYm91bmRzLnVwZGF0ZSh0aGlzLmN1cnJab29tTGV2ZWwpO1xyXG4gICAgICB0aGlzLnBhblRvKHRoaXMucGFuLngsIHRoaXMucGFuLnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHNpemUgdG8gY3VycmVudCBzbGlkZSBjb250ZW50LFxyXG4gICAqIGJhc2VkIG9uIHRoZSBjdXJyZW50IHJlc29sdXRpb24gYW5kIHNjYWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIGlmIHNpemUgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlbiBpZiBkaW1lbnNpb25zIHdlcmVuJ3QgY2hhbmdlZFxyXG4gICAqL1xyXG4gIHVwZGF0ZUNvbnRlbnRTaXplKGZvcmNlKSB7XHJcbiAgICAvLyBVc2UgaW5pdGlhbCB6b29tIGxldmVsXHJcbiAgICAvLyBpZiByZXNvbHV0aW9uIGlzIG5vdCBkZWZpbmVkICh1c2VyIGRpZG4ndCB6b29tIHlldClcclxuICAgIGNvbnN0IHNjYWxlTXVsdGlwbGllciA9IHRoaXMuY3VycmVudFJlc29sdXRpb24gfHwgdGhpcy56b29tTGV2ZWxzLmluaXRpYWw7XHJcblxyXG4gICAgaWYgKCFzY2FsZU11bHRpcGxpZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5yb3VuZCh0aGlzLndpZHRoICogc2NhbGVNdWx0aXBsaWVyKSB8fCB0aGlzLnBzd3Audmlld3BvcnRTaXplLng7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0ICogc2NhbGVNdWx0aXBsaWVyKSB8fCB0aGlzLnBzd3Audmlld3BvcnRTaXplLnk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNpemVDaGFuZ2VkKHdpZHRoLCBoZWlnaHQpICYmICFmb3JjZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRlbnQuc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzaXplQ2hhbmdlZCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAod2lkdGggIT09IHRoaXMucHJldkRpc3BsYXllZFdpZHRoXHJcbiAgICAgIHx8IGhlaWdodCAhPT0gdGhpcy5wcmV2RGlzcGxheWVkSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMucHJldkRpc3BsYXllZFdpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMucHJldkRpc3BsYXllZEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm5zIHtIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xyXG4gIGdldFBsYWNlaG9sZGVyRWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQucGxhY2Vob2xkZXI/LmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBab29tIGN1cnJlbnQgc2xpZGUgaW1hZ2UgdG8uLi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0Wm9vbUxldmVsIERlc3RpbmF0aW9uIHpvb20gbGV2ZWwuXHJcbiAgICogQHBhcmFtIHtQb2ludH0gW2NlbnRlclBvaW50XVxyXG4gICAqIFRyYW5zZm9ybSBvcmlnaW4gY2VudGVyIHBvaW50LCBvciBmYWxzZSBpZiB2aWV3cG9ydCBjZW50ZXIgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXIgfCBmYWxzZX0gW3RyYW5zaXRpb25EdXJhdGlvbl0gVHJhbnNpdGlvbiBkdXJhdGlvbiwgbWF5IGJlIHNldCB0byAwLlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZUJvdW5kc10gTWluaW11bSBhbmQgbWF4aW11bSB6b29tIGxldmVscyB3aWxsIGJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgem9vbVRvKGRlc3Rab29tTGV2ZWwsIGNlbnRlclBvaW50LCB0cmFuc2l0aW9uRHVyYXRpb24sIGlnbm9yZUJvdW5kcykge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgaWYgKCF0aGlzLmlzWm9vbWFibGUoKVxyXG4gICAgICB8fCBwc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AuZGlzcGF0Y2goJ2JlZm9yZVpvb21UbycsIHtcclxuICAgICAgZGVzdFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIHRyYW5zaXRpb25EdXJhdGlvblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3RvcCBhbGwgcGFuIGFuZCB6b29tIHRyYW5zaXRpb25zXHJcbiAgICBwc3dwLmFuaW1hdGlvbnMuc3RvcEFsbFBhbigpO1xyXG5cclxuICAgIC8vIGlmICghY2VudGVyUG9pbnQpIHtcclxuICAgIC8vICAgY2VudGVyUG9pbnQgPSBwc3dwLmdldFZpZXdwb3J0Q2VudGVyUG9pbnQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBwcmV2Wm9vbUxldmVsID0gdGhpcy5jdXJyWm9vbUxldmVsO1xyXG5cclxuICAgIGlmICghaWdub3JlQm91bmRzKSB7XHJcbiAgICAgIGRlc3Rab29tTGV2ZWwgPSBjbGFtcChkZXN0Wm9vbUxldmVsLCB0aGlzLnpvb21MZXZlbHMubWluLCB0aGlzLnpvb21MZXZlbHMubWF4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAodHJhbnNpdGlvbkR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5wc3dwLm9wdGlvbnMuem9vbUFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMuc2V0Wm9vbUxldmVsKGRlc3Rab29tTGV2ZWwpO1xyXG4gICAgdGhpcy5wYW4ueCA9IHRoaXMuY2FsY3VsYXRlWm9vbVRvUGFuT2Zmc2V0KCd4JywgY2VudGVyUG9pbnQsIHByZXZab29tTGV2ZWwpO1xyXG4gICAgdGhpcy5wYW4ueSA9IHRoaXMuY2FsY3VsYXRlWm9vbVRvUGFuT2Zmc2V0KCd5JywgY2VudGVyUG9pbnQsIHByZXZab29tTGV2ZWwpO1xyXG4gICAgcm91bmRQb2ludCh0aGlzLnBhbik7XHJcblxyXG4gICAgY29uc3QgZmluaXNoVHJhbnNpdGlvbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fc2V0UmVzb2x1dGlvbihkZXN0Wm9vbUxldmVsKTtcclxuICAgICAgdGhpcy5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdHJhbnNpdGlvbkR1cmF0aW9uKSB7XHJcbiAgICAgIGZpbmlzaFRyYW5zaXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBzd3AuYW5pbWF0aW9ucy5zdGFydFRyYW5zaXRpb24oe1xyXG4gICAgICAgIGlzUGFuOiB0cnVlLFxyXG4gICAgICAgIG5hbWU6ICd6b29tVG8nLFxyXG4gICAgICAgIHRhcmdldDogdGhpcy5jb250YWluZXIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLmdldEN1cnJlbnRUcmFuc2Zvcm0oKSxcclxuICAgICAgICBvbkNvbXBsZXRlOiBmaW5pc2hUcmFuc2l0aW9uLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb24sXHJcbiAgICAgICAgZWFzaW5nOiBwc3dwLm9wdGlvbnMuZWFzaW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludH0gW2NlbnRlclBvaW50XVxyXG4gICAqL1xyXG4gIHRvZ2dsZVpvb20oY2VudGVyUG9pbnQpIHtcclxuICAgIHRoaXMuem9vbVRvKFxyXG4gICAgICB0aGlzLmN1cnJab29tTGV2ZWwgPT09IHRoaXMuem9vbUxldmVscy5pbml0aWFsXHJcbiAgICAgICAgPyB0aGlzLnpvb21MZXZlbHMuc2Vjb25kYXJ5IDogdGhpcy56b29tTGV2ZWxzLmluaXRpYWwsXHJcbiAgICAgIGNlbnRlclBvaW50LFxyXG4gICAgICB0aGlzLnBzd3Aub3B0aW9ucy56b29tQW5pbWF0aW9uRHVyYXRpb25cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHpvb20gbGV2ZWwgcHJvcGVydHkgYW5kIHJlY2FsY3VsYXRlcyBuZXcgcGFuIGJvdW5kcyxcclxuICAgKiB1bmxpa2Ugem9vbVRvIGl0IGRvZXMgbm90IGFwcGx5IHRyYW5zZm9ybSAodXNlIGFwcGx5Q3VycmVudFpvb21QYW4pXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3Vyclpvb21MZXZlbFxyXG4gICAqL1xyXG4gIHNldFpvb21MZXZlbChjdXJyWm9vbUxldmVsKSB7XHJcbiAgICB0aGlzLmN1cnJab29tTGV2ZWwgPSBjdXJyWm9vbUxldmVsO1xyXG4gICAgdGhpcy5ib3VuZHMudXBkYXRlKHRoaXMuY3Vyclpvb21MZXZlbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgcGFuIHBvc2l0aW9uIGFmdGVyIHpvb20gYXQgYSBnaXZlbiBgcG9pbnRgLlxyXG4gICAqXHJcbiAgICogQWx3YXlzIGNhbGwgc2V0Wm9vbUxldmVsKG5ld1pvb21MZXZlbCkgYmVmb3JlaGFuZCB0byByZWNhbGN1bGF0ZVxyXG4gICAqIHBhbiBib3VuZHMgYWNjb3JkaW5nIHRvIHRoZSBuZXcgem9vbSBsZXZlbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICogQHBhcmFtIHtQb2ludH0gW3BvaW50XVxyXG4gICAqIHBvaW50IGJhc2VkIG9uIHdoaWNoIHpvb20gaXMgcGVyZm9ybWVkLCB1c3VhbGx5IHJlZmVycyB0byB0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvbixcclxuICAgKiBpZiBmYWxzZSAtIHZpZXdwb3J0IGNlbnRlciB3aWxsIGJlIHVzZWQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwcmV2Wm9vbUxldmVsXSBab29tIGxldmVsIGJlZm9yZSBuZXcgem9vbSB3YXMgYXBwbGllZC5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGNhbGN1bGF0ZVpvb21Ub1Bhbk9mZnNldChheGlzLCBwb2ludCwgcHJldlpvb21MZXZlbCkge1xyXG4gICAgY29uc3QgdG90YWxQYW5EaXN0YW5jZSA9IHRoaXMuYm91bmRzLm1heFtheGlzXSAtIHRoaXMuYm91bmRzLm1pbltheGlzXTtcclxuICAgIGlmICh0b3RhbFBhbkRpc3RhbmNlID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJvdW5kcy5jZW50ZXJbYXhpc107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwb2ludCkge1xyXG4gICAgICBwb2ludCA9IHRoaXMucHN3cC5nZXRWaWV3cG9ydENlbnRlclBvaW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwcmV2Wm9vbUxldmVsKSB7XHJcbiAgICAgIHByZXZab29tTGV2ZWwgPSB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5jdXJyWm9vbUxldmVsIC8gcHJldlpvb21MZXZlbDtcclxuICAgIHJldHVybiB0aGlzLmJvdW5kcy5jb3JyZWN0UGFuKFxyXG4gICAgICBheGlzLFxyXG4gICAgICAodGhpcy5wYW5bYXhpc10gLSBwb2ludFtheGlzXSkgKiB6b29tRmFjdG9yICsgcG9pbnRbYXhpc11cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBseSBwYW4gYW5kIGtlZXAgaXQgd2l0aGluIGJvdW5kcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYW5YXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhbllcclxuICAgKi9cclxuICBwYW5UbyhwYW5YLCBwYW5ZKSB7XHJcbiAgICB0aGlzLnBhbi54ID0gdGhpcy5ib3VuZHMuY29ycmVjdFBhbigneCcsIHBhblgpO1xyXG4gICAgdGhpcy5wYW4ueSA9IHRoaXMuYm91bmRzLmNvcnJlY3RQYW4oJ3knLCBwYW5ZKTtcclxuICAgIHRoaXMuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHNsaWRlIGluIHRoZSBjdXJyZW50IHN0YXRlIGNhbiBiZSBwYW5uZWQgYnkgdGhlIHVzZXJcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1Bhbm5hYmxlKCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy53aWR0aCkgJiYgKHRoaXMuY3Vyclpvb21MZXZlbCA+IHRoaXMuem9vbUxldmVscy5maXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIHNsaWRlIGNhbiBiZSB6b29tZWRcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1pvb21hYmxlKCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy53aWR0aCkgJiYgdGhpcy5jb250ZW50LmlzWm9vbWFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRyYW5zZm9ybSBhbmQgc2NhbGUgYmFzZWQgb25cclxuICAgKiB0aGUgY3VycmVudCBwYW4gcG9zaXRpb24gKHRoaXMucGFuKSBhbmQgem9vbSBsZXZlbCAodGhpcy5jdXJyWm9vbUxldmVsKVxyXG4gICAqL1xyXG4gIGFwcGx5Q3VycmVudFpvb21QYW4oKSB7XHJcbiAgICB0aGlzLl9hcHBseVpvb21UcmFuc2Zvcm0odGhpcy5wYW4ueCwgdGhpcy5wYW4ueSwgdGhpcy5jdXJyWm9vbUxldmVsKTtcclxuICAgIGlmICh0aGlzID09PSB0aGlzLnBzd3AuY3VyclNsaWRlKSB7XHJcbiAgICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnem9vbVBhblVwZGF0ZScsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB6b29tQW5kUGFuVG9Jbml0aWFsKCkge1xyXG4gICAgdGhpcy5jdXJyWm9vbUxldmVsID0gdGhpcy56b29tTGV2ZWxzLmluaXRpYWw7XHJcblxyXG4gICAgLy8gcGFuIGFjY29yZGluZyB0byB0aGUgem9vbSBsZXZlbFxyXG4gICAgdGhpcy5ib3VuZHMudXBkYXRlKHRoaXMuY3Vyclpvb21MZXZlbCk7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnBhbiwgdGhpcy5ib3VuZHMuY2VudGVyKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnaW5pdGlhbFpvb21QYW4nLCB7IHNsaWRlOiB0aGlzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRyYW5zbGF0ZSBhbmQgc2NhbGUgYmFzZWQgb24gY3VycmVudCByZXNvbHV0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpvb21cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9hcHBseVpvb21UcmFuc2Zvcm0oeCwgeSwgem9vbSkge1xyXG4gICAgem9vbSAvPSB0aGlzLmN1cnJlbnRSZXNvbHV0aW9uIHx8IHRoaXMuem9vbUxldmVscy5pbml0aWFsO1xyXG4gICAgc2V0VHJhbnNmb3JtKHRoaXMuY29udGFpbmVyLCB4LCB5LCB6b29tKTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZVNpemUoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcblxyXG4gICAgZXF1YWxpemVQb2ludHMoXHJcbiAgICAgIHRoaXMucGFuQXJlYVNpemUsXHJcbiAgICAgIGdldFBhbkFyZWFTaXplKHBzd3Aub3B0aW9ucywgcHN3cC52aWV3cG9ydFNpemUsIHRoaXMuZGF0YSwgdGhpcy5pbmRleClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy56b29tTGV2ZWxzLnVwZGF0ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5wYW5BcmVhU2l6ZSk7XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaCgnY2FsY1NsaWRlU2l6ZScsIHtcclxuICAgICAgc2xpZGU6IHRoaXNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXHJcbiAgZ2V0Q3VycmVudFRyYW5zZm9ybSgpIHtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5jdXJyWm9vbUxldmVsIC8gKHRoaXMuY3VycmVudFJlc29sdXRpb24gfHwgdGhpcy56b29tTGV2ZWxzLmluaXRpYWwpO1xyXG4gICAgcmV0dXJuIHRvVHJhbnNmb3JtU3RyaW5nKHRoaXMucGFuLngsIHRoaXMucGFuLnksIHNjYWxlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCByZXNvbHV0aW9uIGFuZCByZS1yZW5kZXIgdGhlIGltYWdlLlxyXG4gICAqXHJcbiAgICogRm9yIGV4YW1wbGUsIGlmIHRoZSByZWFsIGltYWdlIHNpemUgaXMgMjAwMHgxNTAwLFxyXG4gICAqIGFuZCByZXNvbHV0aW9uIGlzIDAuNSAtIGl0IHdpbGwgYmUgcmVuZGVyZWQgYXMgMTAwMHg3NTAuXHJcbiAgICpcclxuICAgKiBJbWFnZSB3aXRoIHpvb20gbGV2ZWwgMiBhbmQgcmVzb2x1dGlvbiAwLjUgaXNcclxuICAgKiB0aGUgc2FtZSBhcyBpbWFnZSB3aXRoIHpvb20gbGV2ZWwgMSBhbmQgcmVzb2x1dGlvbiAxLlxyXG4gICAqXHJcbiAgICogVXNlZCB0byBvcHRpbWl6ZSBhbmltYXRpb25zIGFuZCBtYWtlXHJcbiAgICogc3VyZSB0aGF0IGJyb3dzZXIgcmVuZGVycyBpbWFnZSBpbiB0aGUgaGlnaGVzdCBxdWFsaXR5LlxyXG4gICAqIEFsc28gdXNlZCBieSByZXNwb25zaXZlIGltYWdlcyB0byBsb2FkIHRoZSBjb3JyZWN0IG9uZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdSZXNvbHV0aW9uXHJcbiAgICovXHJcbiAgX3NldFJlc29sdXRpb24obmV3UmVzb2x1dGlvbikge1xyXG4gICAgaWYgKG5ld1Jlc29sdXRpb24gPT09IHRoaXMuY3VycmVudFJlc29sdXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudFJlc29sdXRpb24gPSBuZXdSZXNvbHV0aW9uO1xyXG4gICAgdGhpcy51cGRhdGVDb250ZW50U2l6ZSgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgncmVzb2x1dGlvbkNoYW5nZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2dlc3R1cmVzLmpzJykuZGVmYXVsdH0gR2VzdHVyZXMgKi9cclxuXHJcbmNvbnN0IFBBTl9FTkRfRlJJQ1RJT04gPSAwLjM1O1xyXG5jb25zdCBWRVJUSUNBTF9EUkFHX0ZSSUNUSU9OID0gMC42O1xyXG5cclxuLy8gMSBjb3JyZXNwb25kcyB0byB0aGUgdGhpcmQgb2Ygdmlld3BvcnQgaGVpZ2h0XHJcbmNvbnN0IE1JTl9SQVRJT19UT19DTE9TRSA9IDAuNDtcclxuXHJcbi8vIE1pbmltdW0gc3BlZWQgcmVxdWlyZWQgdG8gbmF2aWdhdGVcclxuLy8gdG8gbmV4dCBvciBwcmV2aW91cyBzbGlkZVxyXG5jb25zdCBNSU5fTkVYVF9TTElERV9TUEVFRCA9IDAuNTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5pdGlhbFZlbG9jaXR5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWNlbGVyYXRpb25SYXRlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9qZWN0KGluaXRpYWxWZWxvY2l0eSwgZGVjZWxlcmF0aW9uUmF0ZSkge1xyXG4gIHJldHVybiBpbml0aWFsVmVsb2NpdHkgKiBkZWNlbGVyYXRpb25SYXRlIC8gKDEgLSBkZWNlbGVyYXRpb25SYXRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgc2luZ2xlIHBvaW50ZXIgZHJhZ2dpbmdcclxuICovXHJcbmNsYXNzIERyYWdIYW5kbGVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dlc3R1cmVzfSBnZXN0dXJlc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGdlc3R1cmVzKSB7XHJcbiAgICB0aGlzLmdlc3R1cmVzID0gZ2VzdHVyZXM7XHJcbiAgICB0aGlzLnBzd3AgPSBnZXN0dXJlcy5wc3dwO1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMuc3RhcnRQYW4gPSB7IHg6IDAsIHk6IDAgfTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMucHN3cC5jdXJyU2xpZGUpIHtcclxuICAgICAgZXF1YWxpemVQb2ludHModGhpcy5zdGFydFBhbiwgdGhpcy5wc3dwLmN1cnJTbGlkZS5wYW4pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wc3dwLmFuaW1hdGlvbnMuc3RvcEFsbCgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlKCkge1xyXG4gICAgY29uc3QgeyBwMSwgcHJldlAxLCBkcmFnQXhpcyB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSB0aGlzLnBzd3A7XHJcblxyXG4gICAgaWYgKGRyYWdBeGlzID09PSAneSdcclxuICAgICAgJiYgdGhpcy5wc3dwLm9wdGlvbnMuY2xvc2VPblZlcnRpY2FsRHJhZ1xyXG4gICAgICAmJiAoY3VyclNsaWRlICYmIGN1cnJTbGlkZS5jdXJyWm9vbUxldmVsIDw9IGN1cnJTbGlkZS56b29tTGV2ZWxzLmZpdClcclxuICAgICAgJiYgIXRoaXMuZ2VzdHVyZXMuaXNNdWx0aXRvdWNoKSB7XHJcbiAgICAgIC8vIEhhbmRsZSB2ZXJ0aWNhbCBkcmFnIHRvIGNsb3NlXHJcbiAgICAgIGNvbnN0IHBhblkgPSBjdXJyU2xpZGUucGFuLnkgKyAocDEueSAtIHByZXZQMS55KTtcclxuICAgICAgaWYgKCF0aGlzLnBzd3AuZGlzcGF0Y2goJ3ZlcnRpY2FsRHJhZycsIHsgcGFuWSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0UGFuV2l0aEZyaWN0aW9uKCd5JywgcGFuWSwgVkVSVElDQUxfRFJBR19GUklDVElPTik7XHJcbiAgICAgICAgY29uc3QgYmdPcGFjaXR5ID0gMSAtIE1hdGguYWJzKHRoaXMuX2dldFZlcnRpY2FsRHJhZ1JhdGlvKGN1cnJTbGlkZS5wYW4ueSkpO1xyXG4gICAgICAgIHRoaXMucHN3cC5hcHBseUJnT3BhY2l0eShiZ09wYWNpdHkpO1xyXG4gICAgICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1haW5TY3JvbGxDaGFuZ2VkID0gdGhpcy5fcGFuT3JNb3ZlTWFpblNjcm9sbCgneCcpO1xyXG4gICAgICBpZiAoIW1haW5TY3JvbGxDaGFuZ2VkKSB7XHJcbiAgICAgICAgdGhpcy5fcGFuT3JNb3ZlTWFpblNjcm9sbCgneScpO1xyXG5cclxuICAgICAgICBpZiAoY3VyclNsaWRlKSB7XHJcbiAgICAgICAgICByb3VuZFBvaW50KGN1cnJTbGlkZS5wYW4pO1xyXG4gICAgICAgICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZCgpIHtcclxuICAgIGNvbnN0IHsgdmVsb2NpdHkgfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IG1haW5TY3JvbGwsIGN1cnJTbGlkZSB9ID0gdGhpcy5wc3dwO1xyXG4gICAgbGV0IGluZGV4RGlmZiA9IDA7XHJcblxyXG4gICAgdGhpcy5wc3dwLmFuaW1hdGlvbnMuc3RvcEFsbCgpO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtYWluIHNjcm9sbCBpZiBpdCdzIHNoaWZ0ZWRcclxuICAgIGlmIChtYWluU2Nyb2xsLmlzU2hpZnRlZCgpKSB7XHJcbiAgICAgIC8vIFBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbCByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcclxuICAgICAgY29uc3QgbWFpblNjcm9sbFNoaWZ0RGlmZiA9IG1haW5TY3JvbGwueCAtIG1haW5TY3JvbGwuZ2V0Q3VyclNsaWRlWCgpO1xyXG5cclxuICAgICAgLy8gUmF0aW8gYmV0d2VlbiAwIGFuZCAxOlxyXG4gICAgICAvLyAwIC0gc2xpZGUgaXMgbm90IHZpc2libGUgYXQgYWxsLFxyXG4gICAgICAvLyAwLjUgLSBoYWxmIG9mIHRoZSBzbGlkZSBpcyB2aXNpYmxlXHJcbiAgICAgIC8vIDEgLSBzbGlkZSBpcyBmdWxseSB2aXNpYmxlXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZVZpc2liaWxpdHlSYXRpbyA9IChtYWluU2Nyb2xsU2hpZnREaWZmIC8gdGhpcy5wc3dwLnZpZXdwb3J0U2l6ZS54KTtcclxuXHJcbiAgICAgIC8vIEdvIG5leHQgc2xpZGUuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIC0gaWYgdmVsb2NpdHkgYW5kIGl0cyBkaXJlY3Rpb24gaXMgbWF0Y2hlZCxcclxuICAgICAgLy8gICBhbmQgd2Ugc2VlIGF0IGxlYXN0IHRpbnkgcGFydCBvZiB0aGUgbmV4dCBzbGlkZVxyXG4gICAgICAvL1xyXG4gICAgICAvLyAtIG9yIGlmIHdlIHNlZSBsZXNzIHRoYW4gNTAlIG9mIHRoZSBjdXJyZW50IHNsaWRlXHJcbiAgICAgIC8vICAgYW5kIHZlbG9jaXR5IGlzIGNsb3NlIHRvIDBcclxuICAgICAgLy9cclxuICAgICAgaWYgKCh2ZWxvY2l0eS54IDwgLU1JTl9ORVhUX1NMSURFX1NQRUVEICYmIGN1cnJlbnRTbGlkZVZpc2liaWxpdHlSYXRpbyA8IDApXHJcbiAgICAgICAgfHwgKHZlbG9jaXR5LnggPCAwLjEgJiYgY3VycmVudFNsaWRlVmlzaWJpbGl0eVJhdGlvIDwgLTAuNSkpIHtcclxuICAgICAgICAvLyBHbyB0byBuZXh0IHNsaWRlXHJcbiAgICAgICAgaW5kZXhEaWZmID0gMTtcclxuICAgICAgICB2ZWxvY2l0eS54ID0gTWF0aC5taW4odmVsb2NpdHkueCwgMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoKHZlbG9jaXR5LnggPiBNSU5fTkVYVF9TTElERV9TUEVFRCAmJiBjdXJyZW50U2xpZGVWaXNpYmlsaXR5UmF0aW8gPiAwKVxyXG4gICAgICAgIHx8ICh2ZWxvY2l0eS54ID4gLTAuMSAmJiBjdXJyZW50U2xpZGVWaXNpYmlsaXR5UmF0aW8gPiAwLjUpKSB7XHJcbiAgICAgICAgLy8gR28gdG8gcHJldiBzbGlkZVxyXG4gICAgICAgIGluZGV4RGlmZiA9IC0xO1xyXG4gICAgICAgIHZlbG9jaXR5LnggPSBNYXRoLm1heCh2ZWxvY2l0eS54LCAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWFpblNjcm9sbC5tb3ZlSW5kZXhCeShpbmRleERpZmYsIHRydWUsIHZlbG9jaXR5LngpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc3RvcmUgem9vbSBsZXZlbFxyXG4gICAgaWYgKChjdXJyU2xpZGUgJiYgY3VyclNsaWRlLmN1cnJab29tTGV2ZWwgPiBjdXJyU2xpZGUuem9vbUxldmVscy5tYXgpXHJcbiAgICAgIHx8IHRoaXMuZ2VzdHVyZXMuaXNNdWx0aXRvdWNoKSB7XHJcbiAgICAgIHRoaXMuZ2VzdHVyZXMuem9vbUxldmVscy5jb3JyZWN0Wm9vbVBhbih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHdlIHJ1biB0d28gYW5pbWF0aW9ucyBpbnN0ZWFkIG9mIG9uZSxcclxuICAgICAgLy8gYXMgZWFjaCBheGlzIGhhcyBvd24gcGFuIGJvdW5kYXJpZXMgYW5kIHRodXMgZGlmZmVyZW50IHNwcmluZyBmdW5jdGlvblxyXG4gICAgICAvLyAoY29ycmVjdFpvb21QYW4gZG9lcyBub3QgaGF2ZSB0aGlzIGZ1bmN0aW9uYWxpdHksXHJcbiAgICAgIC8vICBpdCBhbmltYXRlcyBhbGwgcHJvcGVydGllcyB3aXRoIHNpbmdsZSB0aW1pbmcgZnVuY3Rpb24pXHJcbiAgICAgIHRoaXMuX2ZpbmlzaFBhbkdlc3R1cmVGb3JBeGlzKCd4Jyk7XHJcbiAgICAgIHRoaXMuX2ZpbmlzaFBhbkdlc3R1cmVGb3JBeGlzKCd5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICovXHJcbiAgX2ZpbmlzaFBhbkdlc3R1cmVGb3JBeGlzKGF4aXMpIHtcclxuICAgIGNvbnN0IHsgdmVsb2NpdHkgfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gdGhpcy5wc3dwO1xyXG5cclxuICAgIGlmICghY3VyclNsaWRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHBhbiwgYm91bmRzIH0gPSBjdXJyU2xpZGU7XHJcbiAgICBjb25zdCBwYW5Qb3MgPSBwYW5bYXhpc107XHJcbiAgICBjb25zdCByZXN0b3JlQmdPcGFjaXR5ID0gKHRoaXMucHN3cC5iZ09wYWNpdHkgPCAxICYmIGF4aXMgPT09ICd5Jyk7XHJcblxyXG4gICAgLy8gMC45OTUgbWVhbnMgLSBzY3JvbGwgdmlldyBsb3NlcyAwLjUlIG9mIGl0cyB2ZWxvY2l0eSBwZXIgbWlsbGlzZWNvbmRcclxuICAgIC8vIEluY3JlYXNpbmcgdGhpcyBudW1iZXIgd2lsbCByZWR1Y2UgdHJhdmVsIGRpc3RhbmNlXHJcbiAgICBjb25zdCBkZWNlbGVyYXRpb25SYXRlID0gMC45OTU7IC8vIDAuOTlcclxuXHJcbiAgICAvLyBQYW4gcG9zaXRpb24gaWYgdGhlcmUgaXMgbm8gYm91bmRzXHJcbiAgICBjb25zdCBwcm9qZWN0ZWRQb3NpdGlvbiA9IHBhblBvcyArIHByb2plY3QodmVsb2NpdHlbYXhpc10sIGRlY2VsZXJhdGlvblJhdGUpO1xyXG5cclxuICAgIGlmIChyZXN0b3JlQmdPcGFjaXR5KSB7XHJcbiAgICAgIGNvbnN0IHZEcmFnUmF0aW8gPSB0aGlzLl9nZXRWZXJ0aWNhbERyYWdSYXRpbyhwYW5Qb3MpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ZWRWRHJhZ1JhdGlvID0gdGhpcy5fZ2V0VmVydGljYWxEcmFnUmF0aW8ocHJvamVjdGVkUG9zaXRpb24pO1xyXG5cclxuICAgICAgLy8gSWYgd2UgYXJlIGFib3ZlIGFuZCBtb3ZpbmcgdXB3YXJkcyxcclxuICAgICAgLy8gb3IgaWYgd2UgYXJlIGJlbG93IGFuZCBtb3ZpbmcgZG93bndhcmRzXHJcbiAgICAgIGlmICgodkRyYWdSYXRpbyA8IDAgJiYgcHJvamVjdGVkVkRyYWdSYXRpbyA8IC1NSU5fUkFUSU9fVE9fQ0xPU0UpXHJcbiAgICAgICAgfHwgKHZEcmFnUmF0aW8gPiAwICYmIHByb2plY3RlZFZEcmFnUmF0aW8gPiBNSU5fUkFUSU9fVE9fQ0xPU0UpKSB7XHJcbiAgICAgICAgdGhpcy5wc3dwLmNsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFuIHBvc2l0aW9uIHdpdGggY29ycmVjdGVkIGJvdW5kc1xyXG4gICAgY29uc3QgY29ycmVjdGVkUGFuUG9zaXRpb24gPSBib3VuZHMuY29ycmVjdFBhbihheGlzLCBwcm9qZWN0ZWRQb3NpdGlvbik7XHJcblxyXG4gICAgLy8gRXhpdCBpZiBwYW4gcG9zaXRpb24gc2hvdWxkIG5vdCBiZSBjaGFuZ2VkXHJcbiAgICAvLyBvciBpZiBzcGVlZCBpdCB0b28gbG93XHJcbiAgICBpZiAocGFuUG9zID09PSBjb3JyZWN0ZWRQYW5Qb3NpdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcnNob290IGlmIHRoZSBmaW5hbCBwb3NpdGlvbiBpcyBvdXQgb2YgcGFuIGJvdW5kc1xyXG4gICAgY29uc3QgZGFtcGluZ1JhdGlvID0gKGNvcnJlY3RlZFBhblBvc2l0aW9uID09PSBwcm9qZWN0ZWRQb3NpdGlvbikgPyAxIDogMC44MjtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsQmdPcGFjaXR5ID0gdGhpcy5wc3dwLmJnT3BhY2l0eTtcclxuICAgIGNvbnN0IHRvdGFsUGFuRGlzdCA9IGNvcnJlY3RlZFBhblBvc2l0aW9uIC0gcGFuUG9zO1xyXG5cclxuICAgIHRoaXMucHN3cC5hbmltYXRpb25zLnN0YXJ0U3ByaW5nKHtcclxuICAgICAgbmFtZTogJ3Bhbkdlc3R1cmUnICsgYXhpcyxcclxuICAgICAgaXNQYW46IHRydWUsXHJcbiAgICAgIHN0YXJ0OiBwYW5Qb3MsXHJcbiAgICAgIGVuZDogY29ycmVjdGVkUGFuUG9zaXRpb24sXHJcbiAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVtheGlzXSxcclxuICAgICAgZGFtcGluZ1JhdGlvLFxyXG4gICAgICBvblVwZGF0ZTogKHBvcykgPT4ge1xyXG4gICAgICAgIC8vIEFuaW1hdGUgb3BhY2l0eSBvZiBiYWNrZ3JvdW5kIHJlbGF0aXZlIHRvIFkgcGFuIHBvc2l0aW9uIG9mIGFuIGltYWdlXHJcbiAgICAgICAgaWYgKHJlc3RvcmVCZ09wYWNpdHkgJiYgdGhpcy5wc3dwLmJnT3BhY2l0eSA8IDEpIHtcclxuICAgICAgICAgIC8vIDAgLSBzdGFydCBvZiBhbmltYXRpb24sIDEgLSBlbmQgb2YgYW5pbWF0aW9uXHJcbiAgICAgICAgICBjb25zdCBhbmltYXRpb25Qcm9ncmVzc1JhdGlvID0gMSAtIChjb3JyZWN0ZWRQYW5Qb3NpdGlvbiAtIHBvcykgLyB0b3RhbFBhbkRpc3Q7XHJcblxyXG4gICAgICAgICAgLy8gV2UgY2xhbXAgb3BhY2l0eSB0byBrZWVwIGl0IGJldHdlZW4gMCBhbmQgMS5cclxuICAgICAgICAgIC8vIEFzIHByb2dyZXNzIHJhdGlvIGNhbiBiZSBsYXJnZXIgdGhhbiAxIGR1ZSB0byBvdmVyc2hvb3QsXHJcbiAgICAgICAgICAvLyBhbmQgd2UgZG8gbm90IHdhbnQgdG8gYm91bmNlIG9wYWNpdHkuXHJcbiAgICAgICAgICB0aGlzLnBzd3AuYXBwbHlCZ09wYWNpdHkoY2xhbXAoXHJcbiAgICAgICAgICAgIGluaXRpYWxCZ09wYWNpdHkgKyAoMSAtIGluaXRpYWxCZ09wYWNpdHkpICogYW5pbWF0aW9uUHJvZ3Jlc3NSYXRpbyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYW5bYXhpc10gPSBNYXRoLmZsb29yKHBvcyk7XHJcbiAgICAgICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbCxcclxuICAgKiBvci9hbmQgdXBkYXRlIHBhbiBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBzbGlkZS5cclxuICAgKlxyXG4gICAqIFNob3VsZCByZXR1cm4gdHJ1ZSBpZiBpdCBjaGFuZ2VzIChvciBjYW4gY2hhbmdlKSBtYWluIHNjcm9sbC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsneCcgfCAneSd9IGF4aXNcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBfcGFuT3JNb3ZlTWFpblNjcm9sbChheGlzKSB7XHJcbiAgICBjb25zdCB7IHAxLCBkcmFnQXhpcywgcHJldlAxLCBpc011bHRpdG91Y2ggfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSwgbWFpblNjcm9sbCB9ID0gdGhpcy5wc3dwO1xyXG4gICAgY29uc3QgZGVsdGEgPSAocDFbYXhpc10gLSBwcmV2UDFbYXhpc10pO1xyXG4gICAgY29uc3QgbmV3TWFpblNjcm9sbFggPSBtYWluU2Nyb2xsLnggKyBkZWx0YTtcclxuXHJcbiAgICBpZiAoIWRlbHRhIHx8ICFjdXJyU2xpZGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsd2F5cyBtb3ZlIG1haW4gc2Nyb2xsIGlmIGltYWdlIGNhbiBub3QgYmUgcGFubmVkXHJcbiAgICBpZiAoYXhpcyA9PT0gJ3gnICYmICFjdXJyU2xpZGUuaXNQYW5uYWJsZSgpICYmICFpc011bHRpdG91Y2gpIHtcclxuICAgICAgbWFpblNjcm9sbC5tb3ZlVG8obmV3TWFpblNjcm9sbFgsIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gY2hhbmdlZCBtYWluIHNjcm9sbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYm91bmRzIH0gPSBjdXJyU2xpZGU7XHJcbiAgICBjb25zdCBuZXdQYW4gPSBjdXJyU2xpZGUucGFuW2F4aXNdICsgZGVsdGE7XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5vcHRpb25zLmFsbG93UGFuVG9OZXh0XHJcbiAgICAgICYmIGRyYWdBeGlzID09PSAneCdcclxuICAgICAgJiYgYXhpcyA9PT0gJ3gnXHJcbiAgICAgICYmICFpc011bHRpdG91Y2gpIHtcclxuICAgICAgY29uc3QgY3VyclNsaWRlTWFpblNjcm9sbFggPSBtYWluU2Nyb2xsLmdldEN1cnJTbGlkZVgoKTtcclxuXHJcbiAgICAgIC8vIFBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbCByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcclxuICAgICAgY29uc3QgbWFpblNjcm9sbFNoaWZ0RGlmZiA9IG1haW5TY3JvbGwueCAtIGN1cnJTbGlkZU1haW5TY3JvbGxYO1xyXG5cclxuICAgICAgY29uc3QgaXNMZWZ0VG9SaWdodCA9IGRlbHRhID4gMDtcclxuICAgICAgY29uc3QgaXNSaWdodFRvTGVmdCA9ICFpc0xlZnRUb1JpZ2h0O1xyXG5cclxuICAgICAgaWYgKG5ld1BhbiA+IGJvdW5kcy5taW5bYXhpc10gJiYgaXNMZWZ0VG9SaWdodCkge1xyXG4gICAgICAgIC8vIFBhbm5pbmcgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBiZXlvbmQgdGhlIGxlZnQgZWRnZVxyXG5cclxuICAgICAgICAvLyBXZXRoZXIgdGhlIGltYWdlIHdhcyBhdCBtaW5pbXVtIHBhbiBwb3NpdGlvbiAob3IgbGVzcylcclxuICAgICAgICAvLyB3aGVuIHRoaXMgZHJhZyBnZXN0dXJlIHN0YXJ0ZWQuXHJcbiAgICAgICAgLy8gTWluaW11bSBwYW4gcG9zaXRpb24gcmVmZXJzIHRvIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIGltYWdlLlxyXG4gICAgICAgIGNvbnN0IHdhc0F0TWluUGFuUG9zaXRpb24gPSAoYm91bmRzLm1pbltheGlzXSA8PSB0aGlzLnN0YXJ0UGFuW2F4aXNdKTtcclxuXHJcbiAgICAgICAgaWYgKHdhc0F0TWluUGFuUG9zaXRpb24pIHtcclxuICAgICAgICAgIG1haW5TY3JvbGwubW92ZVRvKG5ld01haW5TY3JvbGxYLCB0cnVlKTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9zZXRQYW5XaXRoRnJpY3Rpb24oYXhpcywgbmV3UGFuKTtcclxuICAgICAgICAgIC8vY3VyclNsaWRlLnBhbltheGlzXSA9IG5ld1BhbjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAobmV3UGFuIDwgYm91bmRzLm1heFtheGlzXSAmJiBpc1JpZ2h0VG9MZWZ0KSB7XHJcbiAgICAgICAgLy8gUGFuaW5nIGZyb20gcmlnaHQgdG8gbGVmdCwgYmV5b25kIHRoZSByaWdodCBlZGdlXHJcblxyXG4gICAgICAgIC8vIE1heGltdW0gcGFuIHBvc2l0aW9uIHJlZmVycyB0byB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgaW1hZ2UuXHJcbiAgICAgICAgY29uc3Qgd2FzQXRNYXhQYW5Qb3NpdGlvbiA9ICh0aGlzLnN0YXJ0UGFuW2F4aXNdIDw9IGJvdW5kcy5tYXhbYXhpc10pO1xyXG5cclxuICAgICAgICBpZiAod2FzQXRNYXhQYW5Qb3NpdGlvbikge1xyXG4gICAgICAgICAgbWFpblNjcm9sbC5tb3ZlVG8obmV3TWFpblNjcm9sbFgsIHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICAgICAgLy9jdXJyU2xpZGUucGFuW2F4aXNdID0gbmV3UGFuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBtYWluIHNjcm9sbCBpcyBzaGlmdGVkXHJcbiAgICAgICAgaWYgKG1haW5TY3JvbGxTaGlmdERpZmYgIT09IDApIHtcclxuICAgICAgICAgIC8vIElmIG1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWQgcmlnaHRcclxuICAgICAgICAgIGlmIChtYWluU2Nyb2xsU2hpZnREaWZmID4gMCAvKiYmIGlzUmlnaHRUb0xlZnQqLykge1xyXG4gICAgICAgICAgICBtYWluU2Nyb2xsLm1vdmVUbyhNYXRoLm1heChuZXdNYWluU2Nyb2xsWCwgY3VyclNsaWRlTWFpblNjcm9sbFgpLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG1haW5TY3JvbGxTaGlmdERpZmYgPCAwIC8qJiYgaXNMZWZ0VG9SaWdodCovKSB7XHJcbiAgICAgICAgICAgIC8vIE1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWQgbGVmdCAoUG9zaXRpb24gaXMgbGVzcyB0aGFuIDAgY29tcGFyaW5nIHRvIHRoZSB2aWV3cG9ydCAwKVxyXG4gICAgICAgICAgICBtYWluU2Nyb2xsLm1vdmVUbyhNYXRoLm1pbihuZXdNYWluU2Nyb2xsWCwgY3VyclNsaWRlTWFpblNjcm9sbFgpLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFdlIGFyZSB3aXRoaW4gcGFuIGJvdW5kcywgc28ganVzdCBwYW5cclxuICAgICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGF4aXMgPT09ICd5Jykge1xyXG4gICAgICAgIC8vIERvIG5vdCBwYW4gdmVydGljYWxseSBpZiBtYWluIHNjcm9sbCBpcyBzaGlmdGVkIG9cclxuICAgICAgICBpZiAoIW1haW5TY3JvbGwuaXNTaGlmdGVkKCkgJiYgYm91bmRzLm1pbi55ICE9PSBib3VuZHMubWF4LnkpIHtcclxuICAgICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9zZXRQYW5XaXRoRnJpY3Rpb24oYXhpcywgbmV3UGFuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIElmIHdlIG1vdmUgYWJvdmUgLSB0aGUgcmF0aW8gaXMgbmVnYXRpdmVcclxuICAvLyBJZiB3ZSBtb3ZlIGJlbG93IHRoZSByYXRpbyBpcyBwb3NpdGl2ZVxyXG5cclxuICAvKipcclxuICAgKiBSZWxhdGlvbiBiZXR3ZWVuIHBhbiBZIHBvc2l0aW9uIGFuZCB0aGlyZCBvZiB2aWV3cG9ydCBoZWlnaHQuXHJcbiAgICpcclxuICAgKiBXaGVuIHdlIGFyZSBhdCBpbml0aWFsIHBvc2l0aW9uIChjZW50ZXIgYm91bmRzKSAtIHRoZSByYXRpbyBpcyAwLFxyXG4gICAqIGlmIHBvc2l0aW9uIGlzIHNoaWZ0ZWQgdXB3YXJkcyAtIHRoZSByYXRpbyBpcyBuZWdhdGl2ZSxcclxuICAgKiBpZiBwb3NpdGlvbiBpcyBzaGlmdGVkIGRvd253YXJkcyAtIHRoZSByYXRpbyBpcyBwb3NpdGl2ZS5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhblkgVGhlIGN1cnJlbnQgcGFuIFkgcG9zaXRpb24uXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0VmVydGljYWxEcmFnUmF0aW8ocGFuWSkge1xyXG4gICAgcmV0dXJuIChwYW5ZIC0gKHRoaXMucHN3cC5jdXJyU2xpZGU/LmJvdW5kcy5jZW50ZXIueSA/PyAwKSkgLyAodGhpcy5wc3dwLnZpZXdwb3J0U2l6ZS55IC8gMyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgcGFuIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHNsaWRlLlxyXG4gICAqIEFwcGx5IGZyaWN0aW9uIGlmIHRoZSBwb3NpdGlvbiBpcyBiZXlvbmQgdGhlIHBhbiBib3VuZHMsXHJcbiAgICogb3IgaWYgY3VzdG9tIGZyaWN0aW9uIGlzIGRlZmluZWQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvdGVudGlhbFBhblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY3VzdG9tRnJpY3Rpb25dICgwLjEgLSAxKVxyXG4gICAqL1xyXG4gIF9zZXRQYW5XaXRoRnJpY3Rpb24oYXhpcywgcG90ZW50aWFsUGFuLCBjdXN0b21GcmljdGlvbikge1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHRoaXMucHN3cDtcclxuXHJcbiAgICBpZiAoIWN1cnJTbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBwYW4sIGJvdW5kcyB9ID0gY3VyclNsaWRlO1xyXG4gICAgY29uc3QgY29ycmVjdGVkUGFuID0gYm91bmRzLmNvcnJlY3RQYW4oYXhpcywgcG90ZW50aWFsUGFuKTtcclxuICAgIC8vIElmIHdlIGFyZSBvdXQgb2YgcGFuIGJvdW5kc1xyXG4gICAgaWYgKGNvcnJlY3RlZFBhbiAhPT0gcG90ZW50aWFsUGFuIHx8IGN1c3RvbUZyaWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5yb3VuZChwb3RlbnRpYWxQYW4gLSBwYW5bYXhpc10pO1xyXG4gICAgICBwYW5bYXhpc10gKz0gZGVsdGEgKiAoY3VzdG9tRnJpY3Rpb24gfHwgUEFOX0VORF9GUklDVElPTik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYW5bYXhpc10gPSBwb3RlbnRpYWxQYW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9nZXN0dXJlcy5qcycpLmRlZmF1bHR9IEdlc3R1cmVzICovXHJcblxyXG5jb25zdCBVUFBFUl9aT09NX0ZSSUNUSU9OID0gMC4wNTtcclxuY29uc3QgTE9XRVJfWk9PTV9GUklDVElPTiA9IDAuMTU7XHJcblxyXG5cclxuLyoqXHJcbiAqIEdldCBjZW50ZXIgcG9pbnQgYmV0d2VlbiB0d28gcG9pbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHBcclxuICogQHBhcmFtIHtQb2ludH0gcDFcclxuICogQHBhcmFtIHtQb2ludH0gcDJcclxuICogQHJldHVybnMge1BvaW50fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Wm9vbVBvaW50c0NlbnRlcihwLCBwMSwgcDIpIHtcclxuICBwLnggPSAocDEueCArIHAyLngpIC8gMjtcclxuICBwLnkgPSAocDEueSArIHAyLnkpIC8gMjtcclxuICByZXR1cm4gcDtcclxufVxyXG5cclxuY2xhc3MgWm9vbUhhbmRsZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7R2VzdHVyZXN9IGdlc3R1cmVzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZ2VzdHVyZXMpIHtcclxuICAgIHRoaXMuZ2VzdHVyZXMgPSBnZXN0dXJlcztcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtQb2ludH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fc3RhcnRQYW4gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtQb2ludH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fc3RhcnRab29tUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtQb2ludH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fem9vbVBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3dhc092ZXJGaXRab29tTGV2ZWwgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fc3RhcnRab29tTGV2ZWwgPSAxO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gdGhpcy5nZXN0dXJlcy5wc3dwO1xyXG4gICAgaWYgKGN1cnJTbGlkZSkge1xyXG4gICAgICB0aGlzLl9zdGFydFpvb21MZXZlbCA9IGN1cnJTbGlkZS5jdXJyWm9vbUxldmVsO1xyXG4gICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9zdGFydFBhbiwgY3VyclNsaWRlLnBhbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXN0dXJlcy5wc3dwLmFuaW1hdGlvbnMuc3RvcEFsbFBhbigpO1xyXG4gICAgdGhpcy5fd2FzT3ZlckZpdFpvb21MZXZlbCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlKCkge1xyXG4gICAgY29uc3QgeyBwMSwgc3RhcnRQMSwgcDIsIHN0YXJ0UDIsIHBzd3AgfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gcHN3cDtcclxuXHJcbiAgICBpZiAoIWN1cnJTbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWluWm9vbUxldmVsID0gY3VyclNsaWRlLnpvb21MZXZlbHMubWluO1xyXG4gICAgY29uc3QgbWF4Wm9vbUxldmVsID0gY3VyclNsaWRlLnpvb21MZXZlbHMubWF4O1xyXG5cclxuICAgIGlmICghY3VyclNsaWRlLmlzWm9vbWFibGUoKSB8fCBwc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFpvb21Qb2ludHNDZW50ZXIodGhpcy5fc3RhcnRab29tUG9pbnQsIHN0YXJ0UDEsIHN0YXJ0UDIpO1xyXG4gICAgZ2V0Wm9vbVBvaW50c0NlbnRlcih0aGlzLl96b29tUG9pbnQsIHAxLCBwMik7XHJcblxyXG4gICAgbGV0IGN1cnJab29tTGV2ZWwgPSAoMSAvIGdldERpc3RhbmNlQmV0d2VlbihzdGFydFAxLCBzdGFydFAyKSlcclxuICAgICAgKiBnZXREaXN0YW5jZUJldHdlZW4ocDEsIHAyKVxyXG4gICAgICAqIHRoaXMuX3N0YXJ0Wm9vbUxldmVsO1xyXG5cclxuICAgIC8vIHNsaWdodGx5IG92ZXIgdGhlIHpvb20uZml0XHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCA+IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWwgKyAoY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCAvIDE1KSkge1xyXG4gICAgICB0aGlzLl93YXNPdmVyRml0Wm9vbUxldmVsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCA8IG1pblpvb21MZXZlbCkge1xyXG4gICAgICBpZiAocHN3cC5vcHRpb25zLnBpbmNoVG9DbG9zZVxyXG4gICAgICAgICYmICF0aGlzLl93YXNPdmVyRml0Wm9vbUxldmVsXHJcbiAgICAgICAgJiYgdGhpcy5fc3RhcnRab29tTGV2ZWwgPD0gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCkge1xyXG4gICAgICAgIC8vIGZhZGUgb3V0IGJhY2tncm91bmQgaWYgem9vbWluZyBvdXRcclxuICAgICAgICBjb25zdCBiZ09wYWNpdHkgPSAxIC0gKChtaW5ab29tTGV2ZWwgLSBjdXJyWm9vbUxldmVsKSAvIChtaW5ab29tTGV2ZWwgLyAxLjIpKTtcclxuICAgICAgICBpZiAoIXBzd3AuZGlzcGF0Y2goJ3BpbmNoQ2xvc2UnLCB7IGJnT3BhY2l0eSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgICAgICBwc3dwLmFwcGx5QmdPcGFjaXR5KGJnT3BhY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFwcGx5IHRoZSBmcmljdGlvbiBpZiB6b29tIGxldmVsIGlzIGJlbG93IHRoZSBtaW5cclxuICAgICAgICBjdXJyWm9vbUxldmVsID0gbWluWm9vbUxldmVsIC0gKG1pblpvb21MZXZlbCAtIGN1cnJab29tTGV2ZWwpICogTE9XRVJfWk9PTV9GUklDVElPTjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjdXJyWm9vbUxldmVsID4gbWF4Wm9vbUxldmVsKSB7XHJcbiAgICAgIC8vIEFwcGx5IHRoZSBmcmljdGlvbiBpZiB6b29tIGxldmVsIGlzIGFib3ZlIHRoZSBtYXhcclxuICAgICAgY3Vyclpvb21MZXZlbCA9IG1heFpvb21MZXZlbCArIChjdXJyWm9vbUxldmVsIC0gbWF4Wm9vbUxldmVsKSAqIFVQUEVSX1pPT01fRlJJQ1RJT047XHJcbiAgICB9XHJcblxyXG4gICAgY3VyclNsaWRlLnBhbi54ID0gdGhpcy5fY2FsY3VsYXRlUGFuRm9yWm9vbUxldmVsKCd4JywgY3Vyclpvb21MZXZlbCk7XHJcbiAgICBjdXJyU2xpZGUucGFuLnkgPSB0aGlzLl9jYWxjdWxhdGVQYW5Gb3Jab29tTGV2ZWwoJ3knLCBjdXJyWm9vbUxldmVsKTtcclxuXHJcbiAgICBjdXJyU2xpZGUuc2V0Wm9vbUxldmVsKGN1cnJab29tTGV2ZWwpO1xyXG4gICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICB9XHJcblxyXG4gIGVuZCgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSBwc3dwO1xyXG4gICAgaWYgKCghY3VyclNsaWRlIHx8IGN1cnJTbGlkZS5jdXJyWm9vbUxldmVsIDwgY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbClcclxuICAgICAgJiYgIXRoaXMuX3dhc092ZXJGaXRab29tTGV2ZWxcclxuICAgICAgJiYgcHN3cC5vcHRpb25zLnBpbmNoVG9DbG9zZSkge1xyXG4gICAgICBwc3dwLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvcnJlY3Rab29tUGFuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJab29tTGV2ZWxcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9jYWxjdWxhdGVQYW5Gb3Jab29tTGV2ZWwoYXhpcywgY3Vyclpvb21MZXZlbCkge1xyXG4gICAgY29uc3Qgem9vbUZhY3RvciA9IGN1cnJab29tTGV2ZWwgLyB0aGlzLl9zdGFydFpvb21MZXZlbDtcclxuICAgIHJldHVybiB0aGlzLl96b29tUG9pbnRbYXhpc11cclxuICAgICAgLSAoKHRoaXMuX3N0YXJ0Wm9vbVBvaW50W2F4aXNdIC0gdGhpcy5fc3RhcnRQYW5bYXhpc10pICogem9vbUZhY3Rvcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3JyZWN0IGN1cnJab29tTGV2ZWwgYW5kIHBhbiBpZiB0aGV5IGFyZVxyXG4gICAqIGJleW9uZCBtaW5pbXVtIG9yIG1heGltdW0gdmFsdWVzLlxyXG4gICAqIFdpdGggYW5pbWF0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlR2VzdHVyZV1cclxuICAgKiBXZXRoZXIgZ2VzdHVyZSBjb29yZGluYXRlcyBzaG91bGQgYmUgaWdub3JlZCB3aGVuIGNhbGN1bGF0aW5nIGRlc3RpbmF0aW9uIHBhbiBwb3NpdGlvbi5cclxuICAgKi9cclxuICBjb3JyZWN0Wm9vbVBhbihpZ25vcmVHZXN0dXJlKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXMuZ2VzdHVyZXM7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gcHN3cDtcclxuXHJcbiAgICBpZiAoIWN1cnJTbGlkZT8uaXNab29tYWJsZSgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fem9vbVBvaW50LnggPT09IDApIHtcclxuICAgICAgaWdub3JlR2VzdHVyZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJldlpvb21MZXZlbCA9IGN1cnJTbGlkZS5jdXJyWm9vbUxldmVsO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgbGV0IGRlc3RpbmF0aW9uWm9vbUxldmVsO1xyXG4gICAgbGV0IGN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSA9IHRydWU7XHJcblxyXG4gICAgaWYgKHByZXZab29tTGV2ZWwgPCBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uWm9vbUxldmVsID0gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuICAgICAgLy8gem9vbSB0byBtaW5cclxuICAgIH0gZWxzZSBpZiAocHJldlpvb21MZXZlbCA+IGN1cnJTbGlkZS56b29tTGV2ZWxzLm1heCkge1xyXG4gICAgICBkZXN0aW5hdGlvblpvb21MZXZlbCA9IGN1cnJTbGlkZS56b29tTGV2ZWxzLm1heDtcclxuICAgICAgLy8gem9vbSB0byBtYXhcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSA9IGZhbHNlO1xyXG4gICAgICBkZXN0aW5hdGlvblpvb21MZXZlbCA9IHByZXZab29tTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbEJnT3BhY2l0eSA9IHBzd3AuYmdPcGFjaXR5O1xyXG4gICAgY29uc3QgcmVzdG9yZUJnT3BhY2l0eSA9IHBzd3AuYmdPcGFjaXR5IDwgMTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsUGFuID0gZXF1YWxpemVQb2ludHMoeyB4OiAwLCB5OiAwIH0sIGN1cnJTbGlkZS5wYW4pO1xyXG4gICAgbGV0IGRlc3RpbmF0aW9uUGFuID0gZXF1YWxpemVQb2ludHMoeyB4OiAwLCB5OiAwIH0sIGluaXRpYWxQYW4pO1xyXG5cclxuICAgIGlmIChpZ25vcmVHZXN0dXJlKSB7XHJcbiAgICAgIHRoaXMuX3pvb21Qb2ludC54ID0gMDtcclxuICAgICAgdGhpcy5fem9vbVBvaW50LnkgPSAwO1xyXG4gICAgICB0aGlzLl9zdGFydFpvb21Qb2ludC54ID0gMDtcclxuICAgICAgdGhpcy5fc3RhcnRab29tUG9pbnQueSA9IDA7XHJcbiAgICAgIHRoaXMuX3N0YXJ0Wm9vbUxldmVsID0gcHJldlpvb21MZXZlbDtcclxuICAgICAgZXF1YWxpemVQb2ludHModGhpcy5fc3RhcnRQYW4sIGluaXRpYWxQYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyWm9vbUxldmVsTmVlZHNDaGFuZ2UpIHtcclxuICAgICAgZGVzdGluYXRpb25QYW4gPSB7XHJcbiAgICAgICAgeDogdGhpcy5fY2FsY3VsYXRlUGFuRm9yWm9vbUxldmVsKCd4JywgZGVzdGluYXRpb25ab29tTGV2ZWwpLFxyXG4gICAgICAgIHk6IHRoaXMuX2NhbGN1bGF0ZVBhbkZvclpvb21MZXZlbCgneScsIGRlc3RpbmF0aW9uWm9vbUxldmVsKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB6b29tIGxldmVsLCBzbyBwYW4gYm91bmRzIGFyZSB1cGRhdGVkIGFjY29yZGluZyB0byBpdFxyXG4gICAgY3VyclNsaWRlLnNldFpvb21MZXZlbChkZXN0aW5hdGlvblpvb21MZXZlbCk7XHJcblxyXG4gICAgZGVzdGluYXRpb25QYW4gPSB7XHJcbiAgICAgIHg6IGN1cnJTbGlkZS5ib3VuZHMuY29ycmVjdFBhbigneCcsIGRlc3RpbmF0aW9uUGFuLngpLFxyXG4gICAgICB5OiBjdXJyU2xpZGUuYm91bmRzLmNvcnJlY3RQYW4oJ3knLCBkZXN0aW5hdGlvblBhbi55KVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyByZXR1cm4gem9vbSBsZXZlbCBhbmQgaXRzIGJvdW5kcyB0byBpbml0aWFsXHJcbiAgICBjdXJyU2xpZGUuc2V0Wm9vbUxldmVsKHByZXZab29tTGV2ZWwpO1xyXG5cclxuICAgIGNvbnN0IHBhbk5lZWRzQ2hhbmdlID0gIXBvaW50c0VxdWFsKGRlc3RpbmF0aW9uUGFuLCBpbml0aWFsUGFuKTtcclxuXHJcbiAgICBpZiAoIXBhbk5lZWRzQ2hhbmdlICYmICFjdXJyWm9vbUxldmVsTmVlZHNDaGFuZ2UgJiYgIXJlc3RvcmVCZ09wYWNpdHkpIHtcclxuICAgICAgLy8gdXBkYXRlIHJlc29sdXRpb24gYWZ0ZXIgZ2VzdHVyZVxyXG4gICAgICBjdXJyU2xpZGUuX3NldFJlc29sdXRpb24oZGVzdGluYXRpb25ab29tTGV2ZWwpO1xyXG4gICAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG5cclxuICAgICAgLy8gbm90aGluZyB0byBhbmltYXRlXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwc3dwLmFuaW1hdGlvbnMuc3RvcEFsbFBhbigpO1xyXG5cclxuICAgIHBzd3AuYW5pbWF0aW9ucy5zdGFydFNwcmluZyh7XHJcbiAgICAgIGlzUGFuOiB0cnVlLFxyXG4gICAgICBzdGFydDogMCxcclxuICAgICAgZW5kOiAxMDAwLFxyXG4gICAgICB2ZWxvY2l0eTogMCxcclxuICAgICAgZGFtcGluZ1JhdGlvOiAxLFxyXG4gICAgICBuYXR1cmFsRnJlcXVlbmN5OiA0MCxcclxuICAgICAgb25VcGRhdGU6IChub3cpID0+IHtcclxuICAgICAgICBub3cgLz0gMTAwMDsgLy8gMCAtIHN0YXJ0LCAxIC0gZW5kXHJcblxyXG4gICAgICAgIGlmIChwYW5OZWVkc0NoYW5nZSB8fCBjdXJyWm9vbUxldmVsTmVlZHNDaGFuZ2UpIHtcclxuICAgICAgICAgIGlmIChwYW5OZWVkc0NoYW5nZSkge1xyXG4gICAgICAgICAgICBjdXJyU2xpZGUucGFuLnggPSBpbml0aWFsUGFuLnggKyAoZGVzdGluYXRpb25QYW4ueCAtIGluaXRpYWxQYW4ueCkgKiBub3c7XHJcbiAgICAgICAgICAgIGN1cnJTbGlkZS5wYW4ueSA9IGluaXRpYWxQYW4ueSArIChkZXN0aW5hdGlvblBhbi55IC0gaW5pdGlhbFBhbi55KSAqIG5vdztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY3Vyclpvb21MZXZlbE5lZWRzQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1pvb21MZXZlbCA9IHByZXZab29tTGV2ZWxcclxuICAgICAgICAgICAgICArIChkZXN0aW5hdGlvblpvb21MZXZlbCAtIHByZXZab29tTGV2ZWwpICogbm93O1xyXG4gICAgICAgICAgICBjdXJyU2xpZGUuc2V0Wm9vbUxldmVsKG5ld1pvb21MZXZlbCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgYmFja2dyb3VuZCBvcGFjaXR5XHJcbiAgICAgICAgaWYgKHJlc3RvcmVCZ09wYWNpdHkgJiYgcHN3cC5iZ09wYWNpdHkgPCAxKSB7XHJcbiAgICAgICAgICAvLyBXZSBjbGFtcCBvcGFjaXR5IHRvIGtlZXAgaXQgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgICAgICAgLy8gQXMgcHJvZ3Jlc3MgcmF0aW8gY2FuIGJlIGxhcmdlciB0aGFuIDEgZHVlIHRvIG92ZXJzaG9vdCxcclxuICAgICAgICAgIC8vIGFuZCB3ZSBkbyBub3Qgd2FudCB0byBib3VuY2Ugb3BhY2l0eS5cclxuICAgICAgICAgIHBzd3AuYXBwbHlCZ09wYWNpdHkoY2xhbXAoXHJcbiAgICAgICAgICAgIGluaXRpYWxCZ09wYWNpdHkgKyAoMSAtIGluaXRpYWxCZ09wYWNpdHkpICogbm93LCAwLCAxXHJcbiAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAvLyB1cGRhdGUgcmVzb2x1dGlvbiBhZnRlciB0cmFuc2l0aW9uIGVuZHNcclxuICAgICAgICBjdXJyU2xpZGUuX3NldFJlc29sdXRpb24oZGVzdGluYXRpb25ab29tTGV2ZWwpO1xyXG4gICAgICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBULCBQXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3R5cGVzLmpzJykuQWRkUG9zdGZpeDxULCBQPn0gQWRkUG9zdGZpeDxULCBQPlxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2dlc3R1cmVzLmpzJykuZGVmYXVsdH0gR2VzdHVyZXMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7J2ltYWdlQ2xpY2snIHwgJ2JnQ2xpY2snIHwgJ3RhcCcgfCAnZG91YmxlVGFwJ30gQWN0aW9ucyAqL1xyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdGhlIHRhcCB3YXMgcGVyZm9ybWVkIG9uIHRoZSBtYWluIHNsaWRlXHJcbiAqIChyYXRoZXIgdGhhbiBjb250cm9scyBvciBjYXB0aW9uKS5cclxuICpcclxuICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGV2ZW50XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gZGlkVGFwT25NYWluQ29udGVudChldmVudCkge1xyXG4gIHJldHVybiAhISgvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucHN3cF9fY29udGFpbmVyJykpO1xyXG59XHJcblxyXG4vKipcclxuICogVGFwLCBkb3VibGUtdGFwIGhhbmRsZXIuXHJcbiAqL1xyXG5jbGFzcyBUYXBIYW5kbGVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0dlc3R1cmVzfSBnZXN0dXJlc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGdlc3R1cmVzKSB7XHJcbiAgICB0aGlzLmdlc3R1cmVzID0gZ2VzdHVyZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwb2ludFxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBvcmlnaW5hbEV2ZW50XHJcbiAgICovXHJcbiAgY2xpY2socG9pbnQsIG9yaWdpbmFsRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldENsYXNzTGlzdCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChvcmlnaW5hbEV2ZW50LnRhcmdldCkuY2xhc3NMaXN0O1xyXG4gICAgY29uc3QgaXNJbWFnZUNsaWNrID0gdGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKCdwc3dwX19pbWcnKTtcclxuICAgIGNvbnN0IGlzQmFja2dyb3VuZENsaWNrID0gdGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKCdwc3dwX19pdGVtJylcclxuICAgICAgfHwgdGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKCdwc3dwX196b29tLXdyYXAnKTtcclxuXHJcbiAgICBpZiAoaXNJbWFnZUNsaWNrKSB7XHJcbiAgICAgIHRoaXMuX2RvQ2xpY2tPclRhcEFjdGlvbignaW1hZ2VDbGljaycsIHBvaW50LCBvcmlnaW5hbEV2ZW50KTtcclxuICAgIH0gZWxzZSBpZiAoaXNCYWNrZ3JvdW5kQ2xpY2spIHtcclxuICAgICAgdGhpcy5fZG9DbGlja09yVGFwQWN0aW9uKCdiZ0NsaWNrJywgcG9pbnQsIG9yaWdpbmFsRXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludH0gcG9pbnRcclxuICAgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gb3JpZ2luYWxFdmVudFxyXG4gICAqL1xyXG4gIHRhcChwb2ludCwgb3JpZ2luYWxFdmVudCkge1xyXG4gICAgaWYgKGRpZFRhcE9uTWFpbkNvbnRlbnQob3JpZ2luYWxFdmVudCkpIHtcclxuICAgICAgdGhpcy5fZG9DbGlja09yVGFwQWN0aW9uKCd0YXAnLCBwb2ludCwgb3JpZ2luYWxFdmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwb2ludFxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBvcmlnaW5hbEV2ZW50XHJcbiAgICovXHJcbiAgZG91YmxlVGFwKHBvaW50LCBvcmlnaW5hbEV2ZW50KSB7XHJcbiAgICBpZiAoZGlkVGFwT25NYWluQ29udGVudChvcmlnaW5hbEV2ZW50KSkge1xyXG4gICAgICB0aGlzLl9kb0NsaWNrT3JUYXBBY3Rpb24oJ2RvdWJsZVRhcCcsIHBvaW50LCBvcmlnaW5hbEV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtBY3Rpb25zfSBhY3Rpb25OYW1lXHJcbiAgICogQHBhcmFtIHtQb2ludH0gcG9pbnRcclxuICAgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gb3JpZ2luYWxFdmVudFxyXG4gICAqL1xyXG4gIF9kb0NsaWNrT3JUYXBBY3Rpb24oYWN0aW9uTmFtZSwgcG9pbnQsIG9yaWdpbmFsRXZlbnQpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSBwc3dwO1xyXG4gICAgY29uc3QgYWN0aW9uRnVsbE5hbWUgPSAvKiogQHR5cGUge0FkZFBvc3RmaXg8QWN0aW9ucywgJ0FjdGlvbic+fSAqLyAoYWN0aW9uTmFtZSArICdBY3Rpb24nKTtcclxuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gcHN3cC5vcHRpb25zW2FjdGlvbkZ1bGxOYW1lXTtcclxuXHJcbiAgICBpZiAocHN3cC5kaXNwYXRjaChhY3Rpb25GdWxsTmFtZSwgeyBwb2ludCwgb3JpZ2luYWxFdmVudCB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIG9wdGlvblZhbHVlLmNhbGwocHN3cCwgcG9pbnQsIG9yaWdpbmFsRXZlbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChvcHRpb25WYWx1ZSkge1xyXG4gICAgICBjYXNlICdjbG9zZSc6XHJcbiAgICAgIGNhc2UgJ25leHQnOlxyXG4gICAgICAgIHBzd3Bbb3B0aW9uVmFsdWVdKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3pvb20nOlxyXG4gICAgICAgIGN1cnJTbGlkZT8udG9nZ2xlWm9vbShwb2ludCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3pvb20tb3ItY2xvc2UnOlxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgY2xpY2sgem9vbXMgY3VycmVudCBpbWFnZSxcclxuICAgICAgICAvLyBpZiBpdCBjYW4gbm90IGJlIHpvb21lZCAtIGdhbGxlcnkgd2lsbCBiZSBjbG9zZWRcclxuICAgICAgICBpZiAoY3VyclNsaWRlPy5pc1pvb21hYmxlKClcclxuICAgICAgICAgICYmIGN1cnJTbGlkZS56b29tTGV2ZWxzLnNlY29uZGFyeSAhPT0gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgY3VyclNsaWRlLnRvZ2dsZVpvb20ocG9pbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHN3cC5vcHRpb25zLmNsaWNrVG9DbG9zZU5vblpvb21hYmxlKSB7XHJcbiAgICAgICAgICBwc3dwLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b2dnbGUtY29udHJvbHMnOlxyXG4gICAgICAgIHRoaXMuZ2VzdHVyZXMucHN3cC5lbGVtZW50Py5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwLS11aS12aXNpYmxlJyk7XHJcbiAgICAgICAgLy8gaWYgKF9jb250cm9sc1Zpc2libGUpIHtcclxuICAgICAgICAvLyAgIF91aS5oaWRlQ29udHJvbHMoKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgX3VpLnNob3dDb250cm9scygpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG5cclxuLy8gSG93IGZhciBzaG91bGQgdXNlciBzaG91bGQgZHJhZ1xyXG4vLyB1bnRpbCB3ZSBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGdlc3R1cmUgaXMgc3dpcGUgYW5kIGl0cyBkaXJlY3Rpb25cclxuY29uc3QgQVhJU19TV0lQRV9IWVNURVJJU0lTID0gMTA7XHJcbi8vY29uc3QgUEFOX0VORF9GUklDVElPTiA9IDAuMzU7XHJcblxyXG5jb25zdCBET1VCTEVfVEFQX0RFTEFZID0gMzAwOyAvLyBtc1xyXG5jb25zdCBNSU5fVEFQX0RJU1RBTkNFID0gMjU7IC8vIHB4XHJcblxyXG4vKipcclxuICogR2VzdHVyZXMgY2xhc3MgYmluZCB0b3VjaCwgcG9pbnRlciBvciBtb3VzZSBldmVudHNcclxuICogYW5kIGVtaXRzIGRyYWcgdG8gZHJhZy1oYW5kbGVyIGFuZCB6b29tIGV2ZW50cyB6b29tLWhhbmRsZXIuXHJcbiAqXHJcbiAqIERyYWcgYW5kIHpvb20gZXZlbnRzIGFyZSBlbWl0ZWQgaW4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxyXG4gKiBhbmQgb25seSB3aGVuIG9uZSBvZiBwb2ludGVycyB3YXMgYWN0dWFsbHkgY2hhbmdlZC5cclxuICovXHJcbmNsYXNzIEdlc3R1cmVzIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7J3gnIHwgJ3knIHwgbnVsbH0gKi9cclxuICAgIHRoaXMuZHJhZ0F4aXMgPSBudWxsO1xyXG5cclxuICAgIC8vIHBvaW50IG9iamVjdHMgYXJlIGRlZmluZWQgb25jZSBhbmQgcmV1c2VkXHJcbiAgICAvLyBQaG90b1N3aXBlIGtlZXBzIHRyYWNrIG9ubHkgb2YgdHdvIHBvaW50ZXJzLCBvdGhlcnMgYXJlIGlnbm9yZWRcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnAxID0geyB4OiAwLCB5OiAwIH07IC8vIHRoZSBmaXJzdCBwcmVzc2VkIHBvaW50ZXJcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnAyID0geyB4OiAwLCB5OiAwIH07IC8vIHRoZSBzZWNvbmQgcHJlc3NlZCBwb2ludGVyXHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5wcmV2UDEgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnByZXZQMiA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMuc3RhcnRQMSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMuc3RhcnRQMiA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICAvKiogQHR5cGUge1BvaW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fbGFzdFN0YXJ0UDEgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9pbnRlcnZhbFAxID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cyA9IDA7XHJcbiAgICAvKiogQHR5cGUge1BvaW50W119XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9vbmdvaW5nUG9pbnRlcnMgPSBbXTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fdG91Y2hFdmVudEVuYWJsZWQgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3BvaW50ZXJFdmVudEVuYWJsZWQgPSAhISh3aW5kb3cuUG9pbnRlckV2ZW50KTtcclxuICAgIHRoaXMuc3VwcG9ydHNUb3VjaCA9IHRoaXMuX3RvdWNoRXZlbnRFbmFibGVkXHJcbiAgICAgIHx8ICh0aGlzLl9wb2ludGVyRXZlbnRFbmFibGVkICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMgPSAwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9pbnRlcnZhbFRpbWUgPSAwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl92ZWxvY2l0eUNhbGN1bGF0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNNdWx0aXRvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNab29taW5nID0gZmFsc2U7XHJcbiAgICAvKiogQHR5cGUge251bWJlciB8IG51bGx9ICovXHJcbiAgICB0aGlzLnJhZiA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge05vZGVKUy5UaW1lb3V0IHwgbnVsbH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3RhcFRpbWVyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNUb3VjaCkge1xyXG4gICAgICAvLyBkaXNhYmxlIHBhbiB0byBuZXh0IHNsaWRlIGZvciBub24tdG91Y2ggZGV2aWNlc1xyXG4gICAgICBwc3dwLm9wdGlvbnMuYWxsb3dQYW5Ub05leHQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyYWcgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcyk7XHJcbiAgICB0aGlzLnpvb21MZXZlbHMgPSBuZXcgWm9vbUhhbmRsZXIodGhpcyk7XHJcbiAgICB0aGlzLnRhcEhhbmRsZXIgPSBuZXcgVGFwSGFuZGxlcih0aGlzKTtcclxuXHJcbiAgICBwc3dwLm9uKCdiaW5kRXZlbnRzJywgKCkgPT4ge1xyXG4gICAgICBwc3dwLmV2ZW50cy5hZGQoXHJcbiAgICAgICAgcHN3cC5zY3JvbGxXcmFwLFxyXG4gICAgICAgICdjbGljaycsXHJcbiAgICAgICAgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5fb25DbGljay5iaW5kKHRoaXMpKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCdwb2ludGVyJywgJ2Rvd24nLCAndXAnLCAnY2FuY2VsJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdG91Y2hFdmVudEVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCd0b3VjaCcsICdzdGFydCcsICdlbmQnLCAnY2FuY2VsJyk7XHJcblxyXG4gICAgICAgIC8vIEluIHByZXZpb3VzIHZlcnNpb25zIHdlIGFsc28gYm91bmQgbW91c2UgZXZlbnQgaGVyZSxcclxuICAgICAgICAvLyBpbiBjYXNlIGRldmljZSBzdXBwb3J0cyBib3RoIHRvdWNoIGFuZCBtb3VzZSBldmVudHMsXHJcbiAgICAgICAgLy8gYnV0IG5ld2VyIHZlcnNpb25zIG9mIGJyb3dzZXJzIG5vdyBzdXBwb3J0IFBvaW50ZXJFdmVudC5cclxuXHJcbiAgICAgICAgLy8gb24gaU9TMTAgaWYgeW91IGJpbmQgdG91Y2htb3ZlL2VuZCBhZnRlciB0b3VjaHN0YXJ0LFxyXG4gICAgICAgIC8vIGFuZCB5b3UgZG9uJ3QgcHJldmVudERlZmF1bHQgdG91Y2hzdGFydCAod2hpY2ggUGhvdG9Td2lwZSBkb2VzKSxcclxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIHRvdWNobW92ZSBhbmQgdG91Y2hlbmQuXHJcbiAgICAgICAgLy8gVW5sZXNzIHlvdSBiaW5kIGl0IHByZXZpb3VzbHkuXHJcbiAgICAgICAgaWYgKHBzd3Auc2Nyb2xsV3JhcCkge1xyXG4gICAgICAgICAgcHN3cC5zY3JvbGxXcmFwLm9udG91Y2htb3ZlID0gKCkgPT4geyB9O1xyXG4gICAgICAgICAgcHN3cC5zY3JvbGxXcmFwLm9udG91Y2hlbmQgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoJ21vdXNlJywgJ2Rvd24nLCAndXAnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J21vdXNlJyB8ICd0b3VjaCcgfCAncG9pbnRlcid9IHByZWZcclxuICAgKiBAcGFyYW0geydkb3duJyB8ICdzdGFydCd9IGRvd25cclxuICAgKiBAcGFyYW0geyd1cCcgfCAnZW5kJ30gdXBcclxuICAgKiBAcGFyYW0geydjYW5jZWwnfSBbY2FuY2VsXVxyXG4gICAqL1xyXG4gIF9iaW5kRXZlbnRzKHByZWYsIGRvd24sIHVwLCBjYW5jZWwpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGNvbnN0IHsgZXZlbnRzIH0gPSBwc3dwO1xyXG5cclxuICAgIGNvbnN0IGNhbmNlbEV2ZW50ID0gY2FuY2VsID8gcHJlZiArIGNhbmNlbCA6ICcnO1xyXG5cclxuICAgIGV2ZW50cy5hZGQoXHJcbiAgICAgIHBzd3Auc2Nyb2xsV3JhcCxcclxuICAgICAgcHJlZiArIGRvd24sXHJcbiAgICAgIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovKHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKVxyXG4gICAgKTtcclxuICAgIGV2ZW50cy5hZGQod2luZG93LCBwcmVmICsgJ21vdmUnLCAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqLyh0aGlzLm9uUG9pbnRlck1vdmUuYmluZCh0aGlzKSkpO1xyXG4gICAgZXZlbnRzLmFkZCh3aW5kb3csIHByZWYgKyB1cCwgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5vblBvaW50ZXJVcC5iaW5kKHRoaXMpKSk7XHJcbiAgICBpZiAoY2FuY2VsRXZlbnQpIHtcclxuICAgICAgZXZlbnRzLmFkZChcclxuICAgICAgICBwc3dwLnNjcm9sbFdyYXAsXHJcbiAgICAgICAgY2FuY2VsRXZlbnQsXHJcbiAgICAgICAgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5vblBvaW50ZXJVcC5iaW5kKHRoaXMpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGVcclxuICAgKi9cclxuICBvblBvaW50ZXJEb3duKGUpIHtcclxuICAgIC8vIFdlIGRvIG5vdCBjYWxsIHByZXZlbnREZWZhdWx0IGZvciB0b3VjaCBldmVudHNcclxuICAgIC8vIHRvIGFsbG93IGJyb3dzZXIgdG8gc2hvdyBuYXRpdmUgZGlhbG9nIG9uIGxvbmdwcmVzc1xyXG4gICAgLy8gKHRoZSBvbmUgdGhhdCBhbGxvd3MgdG8gc2F2ZSBpbWFnZSBvciBvcGVuIGl0IGluIG5ldyB0YWIpLlxyXG4gICAgLy9cclxuICAgIC8vIERlc2t0b3AgU2FmYXJpIGFsbG93cyB0byBkcmFnIGltYWdlcyB3aGVuIHByZXZlbnREZWZhdWx0IGlzbid0IGNhbGxlZCBvbiBtb3VzZWRvd24sXHJcbiAgICAvLyBldmVuIHRob3VnaCBwcmV2ZW50RGVmYXVsdCBJUyBjYWxsZWQgb24gbW91c2Vtb3ZlLiBUaGF0J3Mgd2h5IHdlIHByZXZlbnREZWZhdWx0IG1vdXNlZG93bi5cclxuICAgIGNvbnN0IGlzTW91c2VQb2ludGVyID0gZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnO1xyXG5cclxuICAgIC8vIEFsbG93IGRyYWdnaW5nIG9ubHkgdmlhIGxlZnQgbW91c2UgYnV0dG9uLlxyXG4gICAgLy8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9ldmVudHNfcHJvcGVydGllcy5odG1sXHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvZXZlbnQuYnV0dG9uXHJcbiAgICBpZiAoaXNNb3VzZVBvaW50ZXIgJiYgZS5idXR0b24gPiAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcblxyXG4gICAgLy8gaWYgUGhvdG9Td2lwZSBpcyBvcGVuaW5nIG9yIGNsb3NpbmdcclxuICAgIGlmICghcHN3cC5vcGVuZXIuaXNPcGVuKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwc3dwLmRpc3BhdGNoKCdwb2ludGVyRG93bicsIHsgb3JpZ2luYWxFdmVudDogZSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNNb3VzZVBvaW50ZXIpIHtcclxuICAgICAgcHN3cC5tb3VzZURldGVjdGVkKCk7XHJcblxyXG4gICAgICAvLyBwcmV2ZW50RGVmYXVsdCBtb3VzZSBldmVudCB0byBwcmV2ZW50XHJcbiAgICAgIC8vIGJyb3dzZXIgaW1hZ2UgZHJhZyBmZWF0dXJlXHJcbiAgICAgIHRoaXMuX3ByZXZlbnRQb2ludGVyRXZlbnRCZWhhdmlvdXIoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0b3BBbGwoKTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVQb2ludHMoZSwgJ2Rvd24nKTtcclxuXHJcbiAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0F4aXMgPSBudWxsO1xyXG4gICAgICAvLyB3ZSBuZWVkIHRvIHN0b3JlIGluaXRpYWwgcG9pbnQgdG8gZGV0ZXJtaW5lIHRoZSBtYWluIGF4aXMsXHJcbiAgICAgIC8vIGRyYWcgaXMgYWN0aXZhdGVkIG9ubHkgYWZ0ZXIgdGhlIGF4aXMgaXMgZGV0ZXJtaW5lZFxyXG4gICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnN0YXJ0UDEsIHRoaXMucDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9udW1BY3RpdmVQb2ludHMgPiAxKSB7XHJcbiAgICAgIC8vIFRhcCBvciBkb3VibGUgdGFwIHNob3VsZCBub3QgdHJpZ2dlciBpZiBtb3JlIHRoYW4gb25lIHBvaW50ZXJcclxuICAgICAgdGhpcy5fY2xlYXJUYXBUaW1lcigpO1xyXG4gICAgICB0aGlzLmlzTXVsdGl0b3VjaCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTXVsdGl0b3VjaCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGVcclxuICAgKi9cclxuICBvblBvaW50ZXJNb3ZlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gYWx3YXlzIHByZXZlbnREZWZhdWx0IG1vdmUgZXZlbnRcclxuXHJcbiAgICBpZiAoIXRoaXMuX251bUFjdGl2ZVBvaW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlUG9pbnRzKGUsICdtb3ZlJyk7XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5kaXNwYXRjaCgncG9pbnRlck1vdmUnLCB7IG9yaWdpbmFsRXZlbnQ6IGUgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA9PT0gMSAmJiAhdGhpcy5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIGlmICghdGhpcy5kcmFnQXhpcykge1xyXG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZURyYWdEaXJlY3Rpb24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRHJhZyBheGlzIHdhcyBkZXRlY3RlZCwgZW1pdCBkcmFnLnN0YXJ0XHJcbiAgICAgIGlmICh0aGlzLmRyYWdBeGlzICYmICF0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1pvb21pbmcpIHtcclxuICAgICAgICAgIHRoaXMuaXNab29taW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnpvb21MZXZlbHMuZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2NsZWFyVGFwVGltZXIoKTsgLy8gVGFwIGNhbiBub3QgdHJpZ2dlciBhZnRlciBkcmFnXHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBzdGFydGluZyBwb2ludFxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXJ0UG9pbnRzKCk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAvL3RoaXMuX3N0YXJ0VGltZSA9IHRoaXMuX2ludGVydmFsVGltZTtcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eUNhbGN1bGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9pbnRlcnZhbFAxLCB0aGlzLnAxKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmFnLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JhZlN0b3BMb29wKCk7XHJcbiAgICAgICAgdGhpcy5fcmFmUmVuZGVyTG9vcCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA+IDEgJiYgIXRoaXMuaXNab29taW5nKSB7XHJcbiAgICAgIHRoaXMuX2ZpbmlzaERyYWcoKTtcclxuXHJcbiAgICAgIHRoaXMuaXNab29taW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIEFkanVzdCBzdGFydGluZyBwb2ludHNcclxuICAgICAgdGhpcy5fdXBkYXRlU3RhcnRQb2ludHMoKTtcclxuXHJcbiAgICAgIHRoaXMuem9vbUxldmVscy5zdGFydCgpO1xyXG5cclxuICAgICAgdGhpcy5fcmFmU3RvcExvb3AoKTtcclxuICAgICAgdGhpcy5fcmFmUmVuZGVyTG9vcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfZmluaXNoRHJhZygpIHtcclxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBUcnkgdG8gY2FsY3VsYXRlIHZlbG9jaXR5LFxyXG4gICAgICAvLyBpZiBpdCB3YXNuJ3QgY2FsY3VsYXRlZCB5ZXQgaW4gZHJhZy5jaGFuZ2VcclxuICAgICAgaWYgKCF0aGlzLl92ZWxvY2l0eUNhbGN1bGF0ZWQpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVWZWxvY2l0eSh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kcmFnLmVuZCgpO1xyXG4gICAgICB0aGlzLmRyYWdBeGlzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgb25Qb2ludGVyVXAoZSkge1xyXG4gICAgaWYgKCF0aGlzLl9udW1BY3RpdmVQb2ludHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3VwZGF0ZVBvaW50cyhlLCAndXAnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwLmRpc3BhdGNoKCdwb2ludGVyVXAnLCB7IG9yaWdpbmFsRXZlbnQ6IGUgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9yYWZTdG9wTG9vcCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgIHRoaXMuX2ZpbmlzaERyYWcoKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1pvb21pbmcgJiYgIXRoaXMuaXNNdWx0aXRvdWNoKSB7XHJcbiAgICAgICAgLy90aGlzLnpvb21MZXZlbHMuY29ycmVjdFpvb21QYW4oKTtcclxuICAgICAgICB0aGlzLl9maW5pc2hUYXAoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzIDwgMiAmJiB0aGlzLmlzWm9vbWluZykge1xyXG4gICAgICB0aGlzLmlzWm9vbWluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnpvb21MZXZlbHMuZW5kKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID09PSAxKSB7XHJcbiAgICAgICAgLy8gU2luY2Ugd2UgaGF2ZSAxIHBvaW50IGxlZnQsIHdlIG5lZWQgdG8gcmVpbml0aWF0ZSBkcmFnXHJcbiAgICAgICAgdGhpcy5kcmFnQXhpcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhcnRQb2ludHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfcmFmUmVuZGVyTG9vcCgpIHtcclxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcgfHwgdGhpcy5pc1pvb21pbmcpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlVmVsb2NpdHkoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBwb2ludGVyIG1vdmVkIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZVxyXG4gICAgICAgIGlmICghcG9pbnRzRXF1YWwodGhpcy5wMSwgdGhpcy5wcmV2UDEpKSB7XHJcbiAgICAgICAgICB0aGlzLmRyYWcuY2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgLyogaWYgKHRoaXMuaXNab29taW5nKSAqLyB7XHJcbiAgICAgICAgaWYgKCFwb2ludHNFcXVhbCh0aGlzLnAxLCB0aGlzLnByZXZQMSlcclxuICAgICAgICAgIHx8ICFwb2ludHNFcXVhbCh0aGlzLnAyLCB0aGlzLnByZXZQMikpIHtcclxuICAgICAgICAgIHRoaXMuem9vbUxldmVscy5jaGFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZVByZXZQb2ludHMoKTtcclxuICAgICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fcmFmUmVuZGVyTG9vcC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB2ZWxvY2l0eSBhdCA1MG1zIGludGVydmFsXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxyXG4gICAqL1xyXG4gIF91cGRhdGVWZWxvY2l0eShmb3JjZSkge1xyXG4gICAgY29uc3QgdGltZSA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRpbWUgLSB0aGlzLl9pbnRlcnZhbFRpbWU7XHJcblxyXG4gICAgaWYgKGR1cmF0aW9uIDwgNTAgJiYgIWZvcmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5fZ2V0VmVsb2NpdHkoJ3gnLCBkdXJhdGlvbik7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLl9nZXRWZWxvY2l0eSgneScsIGR1cmF0aW9uKTtcclxuXHJcbiAgICB0aGlzLl9pbnRlcnZhbFRpbWUgPSB0aW1lO1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5faW50ZXJ2YWxQMSwgdGhpcy5wMSk7XHJcbiAgICB0aGlzLl92ZWxvY2l0eUNhbGN1bGF0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZVxyXG4gICAqL1xyXG4gIF9maW5pc2hUYXAoZSkge1xyXG4gICAgY29uc3QgeyBtYWluU2Nyb2xsIH0gPSB0aGlzLnBzd3A7XHJcblxyXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGFwIGV2ZW50cyBpZiBtYWluIHNjcm9sbCBpcyBzaGlmdGVkXHJcbiAgICBpZiAobWFpblNjcm9sbC5pc1NoaWZ0ZWQoKSkge1xyXG4gICAgICAvLyByZXN0b3JlIG1haW4gc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgIC8vICh1c3VhbGx5IGhhcHBlbnMgaWYgc3RvcHBlZCBpbiB0aGUgbWlkZGxlIG9mIGFuaW1hdGlvbilcclxuICAgICAgbWFpblNjcm9sbC5tb3ZlSW5kZXhCeSgwLCB0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvIG5vdCB0cmlnZ2VyIHRhcCBmb3IgdG91Y2hjYW5jZWwgb3IgcG9pbnRlcmNhbmNlbFxyXG4gICAgaWYgKGUudHlwZS5pbmRleE9mKCdjYW5jZWwnKSA+IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyaWdnZXIgY2xpY2sgaW5zdGVhZCBvZiB0YXAgZm9yIG1vdXNlIGV2ZW50c1xyXG4gICAgaWYgKGUudHlwZSA9PT0gJ21vdXNldXAnIHx8IGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHtcclxuICAgICAgdGhpcy50YXBIYW5kbGVyLmNsaWNrKHRoaXMuc3RhcnRQMSwgZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNhYmxlIGRlbGF5IGlmIHRoZXJlIGlzIG5vIGRvdWJsZVRhcEFjdGlvblxyXG4gICAgY29uc3QgdGFwRGVsYXkgPSB0aGlzLnBzd3Aub3B0aW9ucy5kb3VibGVUYXBBY3Rpb24gPyBET1VCTEVfVEFQX0RFTEFZIDogMDtcclxuXHJcbiAgICAvLyBJZiB0YXBUaW1lciBpcyBkZWZpbmVkIC0gd2UgdGFwcGVkIHJlY2VudGx5LFxyXG4gICAgLy8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgdGFwIGlzIGNsb3NlIHRvIHRoZSBwcmV2aW91cyBvbmUsXHJcbiAgICAvLyBpZiB5ZXMgLSB0cmlnZ2VyIGRvdWJsZSB0YXBcclxuICAgIGlmICh0aGlzLl90YXBUaW1lcikge1xyXG4gICAgICB0aGlzLl9jbGVhclRhcFRpbWVyKCk7XHJcbiAgICAgIC8vIENoZWNrIGlmIHR3byB0YXBzIHdlcmUgbW9yZSBvciBsZXNzIG9uIHRoZSBzYW1lIHBsYWNlXHJcbiAgICAgIGlmIChnZXREaXN0YW5jZUJldHdlZW4odGhpcy5fbGFzdFN0YXJ0UDEsIHRoaXMuc3RhcnRQMSkgPCBNSU5fVEFQX0RJU1RBTkNFKSB7XHJcbiAgICAgICAgdGhpcy50YXBIYW5kbGVyLmRvdWJsZVRhcCh0aGlzLnN0YXJ0UDEsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9sYXN0U3RhcnRQMSwgdGhpcy5zdGFydFAxKTtcclxuICAgICAgdGhpcy5fdGFwVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRhcEhhbmRsZXIudGFwKHRoaXMuc3RhcnRQMSwgZSk7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUYXBUaW1lcigpO1xyXG4gICAgICB9LCB0YXBEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9jbGVhclRhcFRpbWVyKCkge1xyXG4gICAgaWYgKHRoaXMuX3RhcFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90YXBUaW1lcik7XHJcbiAgICAgIHRoaXMuX3RhcFRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB2ZWxvY2l0eSBmb3IgYXhpc1xyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0geyd4JyB8ICd5J30gYXhpc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldFZlbG9jaXR5KGF4aXMsIGR1cmF0aW9uKSB7XHJcbiAgICAvLyBkaXNwbGFjZW1lbnQgaXMgbGlrZSBkaXN0YW5jZSwgYnV0IGNhbiBiZSBuZWdhdGl2ZS5cclxuICAgIGNvbnN0IGRpc3BsYWNlbWVudCA9IHRoaXMucDFbYXhpc10gLSB0aGlzLl9pbnRlcnZhbFAxW2F4aXNdO1xyXG5cclxuICAgIGlmIChNYXRoLmFicyhkaXNwbGFjZW1lbnQpID4gMSAmJiBkdXJhdGlvbiA+IDUpIHtcclxuICAgICAgcmV0dXJuIGRpc3BsYWNlbWVudCAvIGR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfcmFmU3RvcExvb3AoKSB7XHJcbiAgICBpZiAodGhpcy5yYWYpIHtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpO1xyXG4gICAgICB0aGlzLnJhZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgX3ByZXZlbnRQb2ludGVyRXZlbnRCZWhhdmlvdXIoZSkge1xyXG4gICAgLy8gRG15dHJvIFNlbWVub3YgZmluZCBhIHdheSB0byBkaXNhYmxlIGUucHJldmVudERlZmF1bHQgb24gc29tZSBlbGVtZW50c1xyXG4gICAgLy8gICAgICB2aWEgZXZlbnQgb3Igc29tZSBjbGFzcyBvciBzb21ldGhpbmdcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyBhbmQgbm9ybWFsaXplcyBwb2ludHMgZnJvbSB0aGUgdG91Y2gsIG1vdXNlIG9yIHBvaW50ZXIgZXZlbnQuXHJcbiAgICogVXBkYXRlcyBwMSBhbmQgcDIuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50IHwgVG91Y2hFdmVudH0gZVxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdkb3duJyB8ICdtb3ZlJ30gcG9pbnRlclR5cGUgTm9ybWFsaXplZCBwb2ludGVyIHR5cGVcclxuICAgKi9cclxuICBfdXBkYXRlUG9pbnRzKGUsIHBvaW50ZXJUeXBlKSB7XHJcbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50RW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBwb2ludGVyRXZlbnQgPSAvKiogQHR5cGUge1BvaW50ZXJFdmVudH0gKi8gKGUpO1xyXG4gICAgICAvLyBUcnkgdG8gZmluZCB0aGUgY3VycmVudCBwb2ludGVyIGluIG9uZ29pbmcgcG9pbnRlcnMgYnkgaXRzIElEXHJcbiAgICAgIGNvbnN0IHBvaW50ZXJJbmRleCA9IHRoaXMuX29uZ29pbmdQb2ludGVycy5maW5kSW5kZXgoKG9uZ29pbmdQb2ludGVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG9uZ29pbmdQb2ludGVyLmlkID09PSBwb2ludGVyRXZlbnQucG9pbnRlcklkO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChwb2ludGVyVHlwZSA9PT0gJ3VwJyAmJiBwb2ludGVySW5kZXggPiAtMSkge1xyXG4gICAgICAgIC8vIHJlbGVhc2UgdGhlIHBvaW50ZXIgLSByZW1vdmUgaXQgZnJvbSBvbmdvaW5nXHJcbiAgICAgICAgdGhpcy5fb25nb2luZ1BvaW50ZXJzLnNwbGljZShwb2ludGVySW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvaW50ZXJUeXBlID09PSAnZG93bicgJiYgcG9pbnRlckluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIC8vIGFkZCBuZXcgcG9pbnRlclxyXG4gICAgICAgIHRoaXMuX29uZ29pbmdQb2ludGVycy5wdXNoKHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQocG9pbnRlckV2ZW50LCB7IHg6IDAsIHk6IDAgfSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvaW50ZXJJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgLy8gdXBkYXRlIGV4aXN0aW5nIHBvaW50ZXJcclxuICAgICAgICB0aGlzLl9jb252ZXJ0RXZlbnRQb3NUb1BvaW50KHBvaW50ZXJFdmVudCwgdGhpcy5fb25nb2luZ1BvaW50ZXJzW3BvaW50ZXJJbmRleF0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMgPSB0aGlzLl9vbmdvaW5nUG9pbnRlcnMubGVuZ3RoO1xyXG5cclxuICAgICAgLy8gdXBkYXRlIHBvaW50cyB0aGF0IFBob3RvU3dpcGUgdXNlc1xyXG4gICAgICAvLyB0byBjYWxjdWxhdGUgcG9zaXRpb24gYW5kIHNjYWxlXHJcbiAgICAgIGlmICh0aGlzLl9udW1BY3RpdmVQb2ludHMgPiAwKSB7XHJcbiAgICAgICAgZXF1YWxpemVQb2ludHModGhpcy5wMSwgdGhpcy5fb25nb2luZ1BvaW50ZXJzWzBdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA+IDEpIHtcclxuICAgICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnAyLCB0aGlzLl9vbmdvaW5nUG9pbnRlcnNbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0b3VjaEV2ZW50ID0gLyoqIEB0eXBlIHtUb3VjaEV2ZW50fSAqLyAoZSk7XHJcblxyXG4gICAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMgPSAwO1xyXG4gICAgICBpZiAodG91Y2hFdmVudC50eXBlLmluZGV4T2YoJ3RvdWNoJykgPiAtMSkge1xyXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1RvdWNoRXZlbnRcclxuICAgICAgICBpZiAodG91Y2hFdmVudC50b3VjaGVzICYmIHRvdWNoRXZlbnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9jb252ZXJ0RXZlbnRQb3NUb1BvaW50KHRvdWNoRXZlbnQudG91Y2hlc1swXSwgdGhpcy5wMSk7XHJcbiAgICAgICAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMrKztcclxuICAgICAgICAgIGlmICh0b3VjaEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb252ZXJ0RXZlbnRQb3NUb1BvaW50KHRvdWNoRXZlbnQudG91Y2hlc1sxXSwgdGhpcy5wMik7XHJcbiAgICAgICAgICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBNb3VzZSBFdmVudFxyXG4gICAgICAgIHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQoLyoqIEB0eXBlIHtQb2ludGVyRXZlbnR9ICovKGUpLCB0aGlzLnAxKTtcclxuICAgICAgICBpZiAocG9pbnRlclR5cGUgPT09ICd1cCcpIHtcclxuICAgICAgICAgIC8vIGNsZWFyIGFsbCBwb2ludHMgb24gbW91c2V1cFxyXG4gICAgICAgICAgdGhpcy5fbnVtQWN0aXZlUG9pbnRzID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fbnVtQWN0aXZlUG9pbnRzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdXBkYXRlIHBvaW50cyB0aGF0IHdlcmUgdXNlZCBkdXJpbmcgcHJldmlvdXMgckFGIHRpY2tcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVQcmV2UG9pbnRzKCkge1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5wcmV2UDEsIHRoaXMucDEpO1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5wcmV2UDIsIHRoaXMucDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHVwZGF0ZSBwb2ludHMgYXQgdGhlIHN0YXJ0IG9mIGdlc3R1cmVcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVTdGFydFBvaW50cygpIHtcclxuICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuc3RhcnRQMSwgdGhpcy5wMSk7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnN0YXJ0UDIsIHRoaXMucDIpO1xyXG4gICAgdGhpcy5fdXBkYXRlUHJldlBvaW50cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2NhbGN1bGF0ZURyYWdEaXJlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5wc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgLy8gaWYgbWFpbiBzY3JvbGwgcG9zaXRpb24gaXMgc2hpZnRlZCDigJMgZGlyZWN0aW9uIGlzIGFsd2F5cyBob3Jpem9udGFsXHJcbiAgICAgIHRoaXMuZHJhZ0F4aXMgPSAneCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjYWxjdWxhdGUgZGVsdGEgb2YgdGhlIGxhc3QgdG91Y2htb3ZlIHRpY2tcclxuICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRoaXMucDEueCAtIHRoaXMuc3RhcnRQMS54KSAtIE1hdGguYWJzKHRoaXMucDEueSAtIHRoaXMuc3RhcnRQMS55KTtcclxuXHJcbiAgICAgIGlmIChkaWZmICE9PSAwKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgcG9pbnRlciB3YXMgc2hpZnRlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxyXG4gICAgICAgIGNvbnN0IGF4aXNUb0NoZWNrID0gZGlmZiA+IDAgPyAneCcgOiAneSc7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnAxW2F4aXNUb0NoZWNrXSAtIHRoaXMuc3RhcnRQMVtheGlzVG9DaGVja10pID49IEFYSVNfU1dJUEVfSFlTVEVSSVNJUykge1xyXG4gICAgICAgICAgdGhpcy5kcmFnQXhpcyA9IGF4aXNUb0NoZWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgdG91Y2gsIHBvaW50ZXIgb3IgbW91c2UgZXZlbnRcclxuICAgKiB0byBQaG90b1N3aXBlIHBvaW50LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1RvdWNoIHwgUG9pbnRlckV2ZW50fSBlXHJcbiAgICogQHBhcmFtIHtQb2ludH0gcFxyXG4gICAqIEByZXR1cm5zIHtQb2ludH1cclxuICAgKi9cclxuICBfY29udmVydEV2ZW50UG9zVG9Qb2ludChlLCBwKSB7XHJcbiAgICBwLnggPSBlLnBhZ2VYIC0gdGhpcy5wc3dwLm9mZnNldC54O1xyXG4gICAgcC55ID0gZS5wYWdlWSAtIHRoaXMucHN3cC5vZmZzZXQueTtcclxuXHJcbiAgICBpZiAoJ3BvaW50ZXJJZCcgaW4gZSkge1xyXG4gICAgICBwLmlkID0gZS5wb2ludGVySWQ7XHJcbiAgICB9IGVsc2UgaWYgKGUuaWRlbnRpZmllciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHAuaWQgPSBlLmlkZW50aWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgX29uQ2xpY2soZSkge1xyXG4gICAgLy8gRG8gbm90IGFsbG93IGNsaWNrIGV2ZW50IHRvIHBhc3MgdGhyb3VnaCBhZnRlciBkcmFnXHJcbiAgICBpZiAodGhpcy5wc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUvc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHt7IGVsOiBIVE1MRGl2RWxlbWVudDsgc2xpZGU/OiBTbGlkZSB9fSBJdGVtSG9sZGVyICovXHJcblxyXG5jb25zdCBNQUlOX1NDUk9MTF9FTkRfRlJJQ1RJT04gPSAwLjM1O1xyXG5cclxuXHJcbi8vIGNvbnN0IE1JTl9TV0lQRV9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMjUwO1xyXG4vLyBjb25zdCBNQVhfU1dJUEVfVFJBQlNJVElPTl9EVVJBVElPTiA9IDUwMDtcclxuLy8gY29uc3QgREVGQVVMVF9TV0lQRV9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMzMzO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgbW92ZW1lbnQgb2YgdGhlIG1haW4gc2Nyb2xsaW5nIGNvbnRhaW5lclxyXG4gKiAoZm9yIGV4YW1wbGUsIGl0IHJlcG9zaXRpb25zIHdoZW4gdXNlciBzd2lwZXMgbGVmdCBvciByaWdodCkuXHJcbiAqXHJcbiAqIEFsc28gc3RvcmVzIGl0cyBzdGF0ZS5cclxuICovXHJcbmNsYXNzIE1haW5TY3JvbGwge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy5zbGlkZVdpZHRoID0gMDtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fY3VyclBvc2l0aW9uSW5kZXggPSAwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9wcmV2UG9zaXRpb25JbmRleCA9IDA7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX2NvbnRhaW5lclNoaWZ0SW5kZXggPSAtMTtcclxuXHJcbiAgICAvKiogQHR5cGUge0l0ZW1Ib2xkZXJbXX0gKi9cclxuICAgIHRoaXMuaXRlbUhvbGRlcnMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uIHRoZSBzY3JvbGxlciBhbmQgc2xpZGUgY29udGFpbmVyc1xyXG4gICAqIGFjY29yZGluZyB0byB2aWV3cG9ydCBzaXplLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVzaXplU2xpZGVzXSBXaGV0aGVyIHNsaWRlcyBjb250ZW50IHNob3VsZCByZXNpemVkXHJcbiAgICovXHJcbiAgcmVzaXplKHJlc2l6ZVNsaWRlcykge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgbmV3U2xpZGVXaWR0aCA9IE1hdGgucm91bmQoXHJcbiAgICAgIHBzd3Audmlld3BvcnRTaXplLnggKyBwc3dwLnZpZXdwb3J0U2l6ZS54ICogcHN3cC5vcHRpb25zLnNwYWNpbmdcclxuICAgICk7XHJcbiAgICAvLyBNb2JpbGUgYnJvd3NlcnMgbWlnaHQgdHJpZ2dlciBhIHJlc2l6ZSBldmVudCBkdXJpbmcgYSBnZXN0dXJlLlxyXG4gICAgLy8gKGR1ZSB0byB0b29sYmFyIGFwcGVhcmluZyBvciBoaWRpbmcpLlxyXG4gICAgLy8gQXZvaWQgcmUtYWRqdXN0aW5nIG1haW4gc2Nyb2xsIHBvc2l0aW9uIGlmIHdpZHRoIHdhc24ndCBjaGFuZ2VkXHJcbiAgICBjb25zdCBzbGlkZVdpZHRoQ2hhbmdlZCA9IChuZXdTbGlkZVdpZHRoICE9PSB0aGlzLnNsaWRlV2lkdGgpO1xyXG5cclxuICAgIGlmIChzbGlkZVdpZHRoQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNsaWRlV2lkdGggPSBuZXdTbGlkZVdpZHRoO1xyXG4gICAgICB0aGlzLm1vdmVUbyh0aGlzLmdldEN1cnJTbGlkZVgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pdGVtSG9sZGVycy5mb3JFYWNoKChpdGVtSG9sZGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoc2xpZGVXaWR0aENoYW5nZWQpIHtcclxuICAgICAgICBzZXRUcmFuc2Zvcm0oaXRlbUhvbGRlci5lbCwgKGluZGV4ICsgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleClcclxuICAgICAgICAgICogdGhpcy5zbGlkZVdpZHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlc2l6ZVNsaWRlcyAmJiBpdGVtSG9sZGVyLnNsaWRlKSB7XHJcbiAgICAgICAgaXRlbUhvbGRlci5zbGlkZS5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBYIHBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbGVyIHRvIHplcm9cclxuICAgKi9cclxuICByZXNldFBvc2l0aW9uKCkge1xyXG4gICAgLy8gUG9zaXRpb24gb24gdGhlIG1haW4gc2Nyb2xsZXIgKG9mZnNldClcclxuICAgIC8vIGl0IGlzIGluZGVwZW5kZW50IGZyb20gc2xpZGUgaW5kZXhcclxuICAgIHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4ID0gMDtcclxuICAgIHRoaXMuX3ByZXZQb3NpdGlvbkluZGV4ID0gMDtcclxuXHJcbiAgICAvLyBUaGlzIHdpbGwgZm9yY2UgcmVjYWxjdWxhdGlvbiBvZiBzaXplIG9uIG5leHQgcmVzaXplKClcclxuICAgIHRoaXMuc2xpZGVXaWR0aCA9IDA7XHJcblxyXG4gICAgLy8gX2NvbnRhaW5lclNoaWZ0SW5kZXgqdmlld3BvcnRTaXplIHdpbGwgZ2l2ZSB5b3UgYW1vdW50IG9mIHRyYW5zZm9ybSBvZiB0aGUgY3VycmVudCBzbGlkZVxyXG4gICAgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCA9IC0xO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCBhcHBlbmQgYXJyYXkgb2YgdGhyZWUgaXRlbXNcclxuICAgKiB0aGF0IGhvbGQgZGF0YSBhYm91dCBzbGlkZXMgaW4gRE9NXHJcbiAgICovXHJcbiAgYXBwZW5kSG9sZGVycygpIHtcclxuICAgIHRoaXMuaXRlbUhvbGRlcnMgPSBbXTtcclxuXHJcbiAgICAvLyBhcHBlbmQgb3VyIHRocmVlIHNsaWRlIGhvbGRlcnMgLVxyXG4gICAgLy8gcHJldmlvdXMsIGN1cnJlbnQsIGFuZCBuZXh0XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2l0ZW0nLCAnZGl2JywgdGhpcy5wc3dwLmNvbnRhaW5lcik7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdncm91cCcpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJywgJ3NsaWRlJyk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG5cclxuICAgICAgLy8gaGlkZSBuZWFyYnkgaXRlbSBob2xkZXJzIHVudGlsIGluaXRpYWwgem9vbSBhbmltYXRpb24gZmluaXNoZXMgKHRvIGF2b2lkIGV4dHJhIFBhaW50cylcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IChpID09PSAxKSA/ICdibG9jaycgOiAnbm9uZSc7XHJcblxyXG4gICAgICB0aGlzLml0ZW1Ib2xkZXJzLnB1c2goe1xyXG4gICAgICAgIGVsLFxyXG4gICAgICAgIC8vaW5kZXg6IC0xXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgbWFpbiBzY3JvbGwgY2FuIGJlIGhvcml6b250YWxseSBzd2lwZWQgdG8gdGhlIG5leHQgb3IgcHJldmlvdXMgc2xpZGUuXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgY2FuQmVTd2lwZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wc3dwLmdldE51bUl0ZW1zKCkgPiAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSBtYWluIHNjcm9sbCBieSBYIGFtb3VudCBvZiBzbGlkZXMuXHJcbiAgICogRm9yIGV4YW1wbGU6XHJcbiAgICogICBgLTFgIHdpbGwgbW92ZSB0byB0aGUgcHJldmlvdXMgc2xpZGUsXHJcbiAgICogICAgYDBgIHdpbGwgcmVzZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBzbGlkZSxcclxuICAgKiAgICBgM2Agd2lsbCBtb3ZlIHRocmVlIHNsaWRlcyBmb3J3YXJkXHJcbiAgICpcclxuICAgKiBJZiBsb29wIG9wdGlvbiBpcyBlbmFibGVkIC0gaW5kZXggd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGxvb3BlZCB0b28sXHJcbiAgICogKGZvciBleGFtcGxlIGAtMWAgd2lsbCBtb3ZlIHRvIHRoZSBsYXN0IHNsaWRlIG9mIHRoZSBnYWxsZXJ5KS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaWZmXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbYW5pbWF0ZV1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5WF1cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBpbmRleCB3YXMgY2hhbmdlZCBvciBub3RcclxuICAgKi9cclxuICBtb3ZlSW5kZXhCeShkaWZmLCBhbmltYXRlLCB2ZWxvY2l0eVgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGxldCBuZXdJbmRleCA9IHBzd3AucG90ZW50aWFsSW5kZXggKyBkaWZmO1xyXG4gICAgY29uc3QgbnVtU2xpZGVzID0gcHN3cC5nZXROdW1JdGVtcygpO1xyXG5cclxuICAgIGlmIChwc3dwLmNhbkxvb3AoKSkge1xyXG4gICAgICBuZXdJbmRleCA9IHBzd3AuZ2V0TG9vcGVkSW5kZXgobmV3SW5kZXgpO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IChkaWZmICsgbnVtU2xpZGVzKSAlIG51bVNsaWRlcztcclxuICAgICAgaWYgKGRpc3RhbmNlIDw9IG51bVNsaWRlcyAvIDIpIHtcclxuICAgICAgICAvLyBnbyBmb3J3YXJkXHJcbiAgICAgICAgZGlmZiA9IGRpc3RhbmNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGdvIGJhY2t3YXJkc1xyXG4gICAgICAgIGRpZmYgPSBkaXN0YW5jZSAtIG51bVNsaWRlcztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xyXG4gICAgICAgIG5ld0luZGV4ID0gMDtcclxuICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA+PSBudW1TbGlkZXMpIHtcclxuICAgICAgICBuZXdJbmRleCA9IG51bVNsaWRlcyAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgZGlmZiA9IG5ld0luZGV4IC0gcHN3cC5wb3RlbnRpYWxJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwc3dwLnBvdGVudGlhbEluZGV4ID0gbmV3SW5kZXg7XHJcbiAgICB0aGlzLl9jdXJyUG9zaXRpb25JbmRleCAtPSBkaWZmO1xyXG5cclxuICAgIHBzd3AuYW5pbWF0aW9ucy5zdG9wTWFpblNjcm9sbCgpO1xyXG5cclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uWCA9IHRoaXMuZ2V0Q3VyclNsaWRlWCgpO1xyXG4gICAgaWYgKCFhbmltYXRlKSB7XHJcbiAgICAgIHRoaXMubW92ZVRvKGRlc3RpbmF0aW9uWCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ3Vyckl0ZW0oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBzd3AuYW5pbWF0aW9ucy5zdGFydFNwcmluZyh7XHJcbiAgICAgICAgaXNNYWluU2Nyb2xsOiB0cnVlLFxyXG4gICAgICAgIHN0YXJ0OiB0aGlzLngsXHJcbiAgICAgICAgZW5kOiBkZXN0aW5hdGlvblgsXHJcbiAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5WCB8fCAwLFxyXG4gICAgICAgIG5hdHVyYWxGcmVxdWVuY3k6IDMwLFxyXG4gICAgICAgIGRhbXBpbmdSYXRpbzogMSwgLy8wLjcsXHJcbiAgICAgICAgb25VcGRhdGU6ICh4KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm1vdmVUbyh4KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ3Vyckl0ZW0oKTtcclxuICAgICAgICAgIHBzd3AuYXBwZW5kSGVhdnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGN1cnJEaWZmID0gcHN3cC5wb3RlbnRpYWxJbmRleCAtIHBzd3AuY3VyckluZGV4O1xyXG4gICAgICBpZiAocHN3cC5jYW5Mb29wKCkpIHtcclxuICAgICAgICBjb25zdCBjdXJyRGlzdGFuY2UgPSAoY3VyckRpZmYgKyBudW1TbGlkZXMpICUgbnVtU2xpZGVzO1xyXG4gICAgICAgIGlmIChjdXJyRGlzdGFuY2UgPD0gbnVtU2xpZGVzIC8gMikge1xyXG4gICAgICAgICAgLy8gZ28gZm9yd2FyZFxyXG4gICAgICAgICAgY3VyckRpZmYgPSBjdXJyRGlzdGFuY2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGdvIGJhY2t3YXJkc1xyXG4gICAgICAgICAgY3VyckRpZmYgPSBjdXJyRGlzdGFuY2UgLSBudW1TbGlkZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGb3JjZS1hcHBlbmQgbmV3IHNsaWRlcyBkdXJpbmcgdHJhbnNpdGlvblxyXG4gICAgICAvLyBpZiBkaWZmZXJlbmNlIGJldHdlZW4gc2xpZGVzIGlzIG1vcmUgdGhhbiAxXHJcbiAgICAgIGlmIChNYXRoLmFicyhjdXJyRGlmZikgPiAxKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJySXRlbSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEJvb2xlYW4oZGlmZik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBYIHBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbCBmb3IgdGhlIGN1cnJlbnQgc2xpZGVcclxuICAgKiAoaWdub3JlcyBwb3NpdGlvbiBkdXJpbmcgZHJhZ2dpbmcpXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXRDdXJyU2xpZGVYKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2xpZGVXaWR0aCAqIHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciBzY3JvbGwgcG9zaXRpb24gaXMgc2hpZnRlZC5cclxuICAgKiBGb3IgZXhhbXBsZSwgaXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgc2Nyb2xsIGlzIGJlaW5nIGRyYWdnZWQgb3IgYW5pbWF0ZWQuXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNTaGlmdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMueCAhPT0gdGhpcy5nZXRDdXJyU2xpZGVYKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2xpZGVzIFggcG9zaXRpb25zIGFuZCBzZXQgdGhlaXIgY29udGVudFxyXG4gICAqL1xyXG4gIHVwZGF0ZUN1cnJJdGVtKCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgcG9zaXRpb25EaWZmZXJlbmNlID0gdGhpcy5fcHJldlBvc2l0aW9uSW5kZXggLSB0aGlzLl9jdXJyUG9zaXRpb25JbmRleDtcclxuXHJcbiAgICBpZiAoIXBvc2l0aW9uRGlmZmVyZW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcHJldlBvc2l0aW9uSW5kZXggPSB0aGlzLl9jdXJyUG9zaXRpb25JbmRleDtcclxuXHJcbiAgICBwc3dwLmN1cnJJbmRleCA9IHBzd3AucG90ZW50aWFsSW5kZXg7XHJcblxyXG4gICAgbGV0IGRpZmZBYnMgPSBNYXRoLmFicyhwb3NpdGlvbkRpZmZlcmVuY2UpO1xyXG4gICAgLyoqIEB0eXBlIHtJdGVtSG9sZGVyIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgbGV0IHRlbXBIb2xkZXI7XHJcblxyXG4gICAgaWYgKGRpZmZBYnMgPj0gMykge1xyXG4gICAgICB0aGlzLl9jb250YWluZXJTaGlmdEluZGV4ICs9IHBvc2l0aW9uRGlmZmVyZW5jZSArIChwb3NpdGlvbkRpZmZlcmVuY2UgPiAwID8gLTMgOiAzKTtcclxuICAgICAgZGlmZkFicyA9IDM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmQWJzOyBpKyspIHtcclxuICAgICAgaWYgKHBvc2l0aW9uRGlmZmVyZW5jZSA+IDApIHtcclxuICAgICAgICB0ZW1wSG9sZGVyID0gdGhpcy5pdGVtSG9sZGVycy5zaGlmdCgpO1xyXG4gICAgICAgIGlmICh0ZW1wSG9sZGVyKSB7XHJcbiAgICAgICAgICB0aGlzLml0ZW1Ib2xkZXJzWzJdID0gdGVtcEhvbGRlcjsgLy8gbW92ZSBmaXJzdCB0byBsYXN0XHJcblxyXG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCsrO1xyXG5cclxuICAgICAgICAgIHNldFRyYW5zZm9ybSh0ZW1wSG9sZGVyLmVsLCAodGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCArIDIpICogdGhpcy5zbGlkZVdpZHRoKTtcclxuXHJcbiAgICAgICAgICBwc3dwLnNldENvbnRlbnQodGVtcEhvbGRlciwgKHBzd3AuY3VyckluZGV4IC0gZGlmZkFicykgKyBpICsgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlbXBIb2xkZXIgPSB0aGlzLml0ZW1Ib2xkZXJzLnBvcCgpO1xyXG4gICAgICAgIGlmICh0ZW1wSG9sZGVyKSB7XHJcbiAgICAgICAgICB0aGlzLml0ZW1Ib2xkZXJzLnVuc2hpZnQodGVtcEhvbGRlcik7IC8vIG1vdmUgbGFzdCB0byBmaXJzdFxyXG5cclxuICAgICAgICAgIHRoaXMuX2NvbnRhaW5lclNoaWZ0SW5kZXgtLTtcclxuXHJcbiAgICAgICAgICBzZXRUcmFuc2Zvcm0odGVtcEhvbGRlci5lbCwgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCAqIHRoaXMuc2xpZGVXaWR0aCk7XHJcblxyXG4gICAgICAgICAgcHN3cC5zZXRDb250ZW50KHRlbXBIb2xkZXIsIChwc3dwLmN1cnJJbmRleCArIGRpZmZBYnMpIC0gaSAtIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IHRyYW5zZnJvbSBldmVyeSA1MGlzaCBuYXZpZ2F0aW9ucyBpbiBvbmUgZGlyZWN0aW9uLlxyXG4gICAgLy9cclxuICAgIC8vIE90aGVyd2lzZSB0cmFuc2Zvcm0gd2lsbCBrZWVwIGdyb3dpbmcgaW5kZWZpbml0ZWx5LFxyXG4gICAgLy8gd2hpY2ggbWlnaHQgY2F1c2UgaXNzdWVzIGFzIGJyb3dzZXJzIGhhdmUgYSBtYXhpbXVtIHRyYW5zZm9ybSBsaW1pdC5cclxuICAgIC8vIEkgd2Fzbid0IGFibGUgdG8gcmVhY2ggaXQsIGJ1dCBqdXN0IHRvIGJlIHNhZmUuXHJcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgY2F1c2Ugbm90aWNhYmxlIGxhZy5cclxuICAgIGlmIChNYXRoLmFicyh0aGlzLl9jb250YWluZXJTaGlmdEluZGV4KSA+IDUwICYmICF0aGlzLmlzU2hpZnRlZCgpKSB7XHJcbiAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhbiB0cmFuc2l0aW9uIG1pZ2h0IGJlIHJ1bm5pbmcgKGFuZCBjb25zbnRhbnRseSB1cGRhdGluZyBwYW4gcG9zaXRpb24pXHJcbiAgICBwc3dwLmFuaW1hdGlvbnMuc3RvcEFsbFBhbigpO1xyXG5cclxuICAgIHRoaXMuaXRlbUhvbGRlcnMuZm9yRWFjaCgoaXRlbUhvbGRlciwgaSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbUhvbGRlci5zbGlkZSkge1xyXG4gICAgICAgIC8vIFNsaWRlIGluIHRoZSAybmQgaG9sZGVyIGlzIGFsd2F5cyBhY3RpdmVcclxuICAgICAgICBpdGVtSG9sZGVyLnNsaWRlLnNldElzQWN0aXZlKGkgPT09IDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwc3dwLmN1cnJTbGlkZSA9IHRoaXMuaXRlbUhvbGRlcnNbMV0/LnNsaWRlO1xyXG4gICAgcHN3cC5jb250ZW50TG9hZGVyLnVwZGF0ZUxhenkocG9zaXRpb25EaWZmZXJlbmNlKTtcclxuXHJcbiAgICBpZiAocHN3cC5jdXJyU2xpZGUpIHtcclxuICAgICAgcHN3cC5jdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AuZGlzcGF0Y2goJ2NoYW5nZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgWCBwb3NpdGlvbiBvZiB0aGUgbWFpbiBzY3JvbGwgY29udGFpbmVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RyYWdnaW5nXVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCBkcmFnZ2luZykge1xyXG4gICAgaWYgKCF0aGlzLnBzd3AuY2FuTG9vcCgpICYmIGRyYWdnaW5nKSB7XHJcbiAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXHJcbiAgICAgIGxldCBuZXdTbGlkZUluZGV4T2Zmc2V0ID0gKCh0aGlzLnNsaWRlV2lkdGggKiB0aGlzLl9jdXJyUG9zaXRpb25JbmRleCkgLSB4KSAvIHRoaXMuc2xpZGVXaWR0aDtcclxuICAgICAgbmV3U2xpZGVJbmRleE9mZnNldCArPSB0aGlzLnBzd3AuY3VyckluZGV4O1xyXG4gICAgICBjb25zdCBkZWx0YSA9IE1hdGgucm91bmQoeCAtIHRoaXMueCk7XHJcblxyXG4gICAgICBpZiAoKG5ld1NsaWRlSW5kZXhPZmZzZXQgPCAwICYmIGRlbHRhID4gMClcclxuICAgICAgICB8fCAobmV3U2xpZGVJbmRleE9mZnNldCA+PSB0aGlzLnBzd3AuZ2V0TnVtSXRlbXMoKSAtIDEgJiYgZGVsdGEgPCAwKSkge1xyXG4gICAgICAgIHggPSB0aGlzLnggKyAoZGVsdGEgKiBNQUlOX1NDUk9MTF9FTkRfRlJJQ1RJT04pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwLmNvbnRhaW5lcikge1xyXG4gICAgICBzZXRUcmFuc2Zvcm0odGhpcy5wc3dwLmNvbnRhaW5lciwgeCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdtb3ZlTWFpblNjcm9sbCcsIHsgeCwgZHJhZ2dpbmc6IGRyYWdnaW5nID8/IGZhbHNlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3R5cGVzLmpzJykuTWV0aG9kczxUPn0gTWV0aG9kczxUPlxyXG4gKi9cclxuXHJcbmNvbnN0IEtleWJvYXJkS2V5Q29kZXNNYXAgPSB7XHJcbiAgRXNjYXBlOiAyNyxcclxuICB6OiA5MCxcclxuICBBcnJvd0xlZnQ6IDM3LFxyXG4gIEFycm93VXA6IDM4LFxyXG4gIEFycm93UmlnaHQ6IDM5LFxyXG4gIEFycm93RG93bjogNDAsXHJcbiAgVGFiOiA5LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgS2V5Ym9hcmRLZXlDb2Rlc01hcH0gVFxyXG4gKiBAcGFyYW0ge1R9IGtleVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzS2V5U3VwcG9ydGVkXHJcbiAqIEByZXR1cm5zIHtUIHwgbnVtYmVyIHwgdW5kZWZpbmVkfVxyXG4gKi9cclxuY29uc3QgZ2V0S2V5Ym9hcmRFdmVudEtleSA9IChrZXksIGlzS2V5U3VwcG9ydGVkKSA9PiB7XHJcbiAgcmV0dXJuIGlzS2V5U3VwcG9ydGVkID8ga2V5IDogS2V5Ym9hcmRLZXlDb2Rlc01hcFtrZXldO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIC0gTWFuYWdlcyBrZXlib2FyZCBzaG9ydGN1dHMuXHJcbiAqIC0gSGVscHMgdHJhcCBmb2N1cyB3aXRoaW4gcGhvdG9zd2lwZS5cclxuICovXHJcbmNsYXNzIEtleWJvYXJkIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl93YXNGb2N1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgcHN3cC5vbignYmluZEV2ZW50cycsICgpID0+IHtcclxuICAgICAgLy8gRGlhbG9nIHdhcyBsaWtlbHkgb3BlbmVkIGJ5IGtleWJvYXJkIGlmIGluaXRpYWwgcG9pbnQgaXMgbm90IGRlZmluZWRcclxuICAgICAgaWYgKCFwc3dwLm9wdGlvbnMuaW5pdGlhbFBvaW50ZXJQb3MpIHtcclxuICAgICAgICAvLyBmb2N1cyBjYXVzZXMgbGF5b3V0LFxyXG4gICAgICAgIC8vIHdoaWNoIGNhdXNlcyBsYWcgZHVyaW5nIHRoZSBhbmltYXRpb24sXHJcbiAgICAgICAgLy8gdGhhdCdzIHdoeSB3ZSBkZWxheSBpdCB1bnRpbCB0aGUgb3BlbmVyIHRyYW5zaXRpb24gZW5kc1xyXG4gICAgICAgIHRoaXMuX2ZvY3VzUm9vdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwc3dwLmV2ZW50cy5hZGQoZG9jdW1lbnQsICdmb2N1c2luJywgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5fb25Gb2N1c0luLmJpbmQodGhpcykpKTtcclxuICAgICAgcHN3cC5ldmVudHMuYWRkKGRvY3VtZW50LCAna2V5ZG93bicsIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovKHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsYXN0QWN0aXZlRWxlbWVudCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIHBzd3Aub24oJ2Rlc3Ryb3knLCAoKSA9PiB7XHJcbiAgICAgIGlmIChwc3dwLm9wdGlvbnMucmV0dXJuRm9jdXNcclxuICAgICAgICAmJiBsYXN0QWN0aXZlRWxlbWVudFxyXG4gICAgICAgICYmIHRoaXMuX3dhc0ZvY3VzZWQpIHtcclxuICAgICAgICBsYXN0QWN0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAcHJpdmF0ZSAqL1xyXG4gIF9mb2N1c1Jvb3QoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3dhc0ZvY3VzZWQgJiYgdGhpcy5wc3dwLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5wc3dwLmVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgdGhpcy5fd2FzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZVxyXG4gICAqL1xyXG4gIF9vbktleURvd24oZSkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG5cclxuICAgIGlmIChwc3dwLmRpc3BhdGNoKCdrZXlkb3duJywgeyBvcmlnaW5hbEV2ZW50OiBlIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzcGVjaWFsS2V5VXNlZChlKSkge1xyXG4gICAgICAvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBzcGVjaWFsIGtleSBwcmVzc2VkXHJcbiAgICAgIC8vIHRvIHByZXZlbnQgZnJvbSBvdmVycmlkaW5nIGRlZmF1bHQgYnJvd3NlciBhY3Rpb25zXHJcbiAgICAgIC8vIGZvciBleGFtcGxlLCBpbiBDaHJvbWUgb24gTWFjIGNtZCthcnJvdy1sZWZ0IHJldHVybnMgdG8gcHJldmlvdXMgcGFnZVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEB0eXBlIHtNZXRob2RzPFBob3RvU3dpcGU+IHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgbGV0IGtleWRvd25BY3Rpb247XHJcbiAgICAvKiogQHR5cGUgeyd4JyB8ICd5JyB8IHVuZGVmaW5lZH0gKi9cclxuICAgIGxldCBheGlzO1xyXG4gICAgbGV0IGlzRm9yd2FyZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaXNLZXlTdXBwb3J0ZWQgPSAna2V5JyBpbiBlO1xyXG5cclxuICAgIHN3aXRjaCAoaXNLZXlTdXBwb3J0ZWQgPyBlLmtleSA6IGUua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIGdldEtleWJvYXJkRXZlbnRLZXkoJ0VzY2FwZScsIGlzS2V5U3VwcG9ydGVkKTpcclxuICAgICAgICBpZiAocHN3cC5vcHRpb25zLmVzY0tleSkge1xyXG4gICAgICAgICAga2V5ZG93bkFjdGlvbiA9ICdjbG9zZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdldEtleWJvYXJkRXZlbnRLZXkoJ3onLCBpc0tleVN1cHBvcnRlZCk6XHJcbiAgICAgICAga2V5ZG93bkFjdGlvbiA9ICd0b2dnbGVab29tJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnZXRLZXlib2FyZEV2ZW50S2V5KCdBcnJvd0xlZnQnLCBpc0tleVN1cHBvcnRlZCk6XHJcbiAgICAgICAgYXhpcyA9ICd4JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnZXRLZXlib2FyZEV2ZW50S2V5KCdBcnJvd1VwJywgaXNLZXlTdXBwb3J0ZWQpOlxyXG4gICAgICAgIGF4aXMgPSAneSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2V0S2V5Ym9hcmRFdmVudEtleSgnQXJyb3dSaWdodCcsIGlzS2V5U3VwcG9ydGVkKTpcclxuICAgICAgICBheGlzID0gJ3gnO1xyXG4gICAgICAgIGlzRm9yd2FyZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2V0S2V5Ym9hcmRFdmVudEtleSgnQXJyb3dEb3duJywgaXNLZXlTdXBwb3J0ZWQpOlxyXG4gICAgICAgIGlzRm9yd2FyZCA9IHRydWU7XHJcbiAgICAgICAgYXhpcyA9ICd5JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnZXRLZXlib2FyZEV2ZW50S2V5KCdUYWInLCBpc0tleVN1cHBvcnRlZCk6XHJcbiAgICAgICAgdGhpcy5fZm9jdXNSb290KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgbGVmdC9yaWdodC90b3AvYm90dG9tIGtleVxyXG4gICAgaWYgKGF4aXMpIHtcclxuICAgICAgLy8gcHJldmVudCBwYWdlIHNjcm9sbFxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gcHN3cDtcclxuXHJcbiAgICAgIGlmIChwc3dwLm9wdGlvbnMuYXJyb3dLZXlzXHJcbiAgICAgICAgJiYgYXhpcyA9PT0gJ3gnXHJcbiAgICAgICAgJiYgcHN3cC5nZXROdW1JdGVtcygpID4gMSkge1xyXG4gICAgICAgIGtleWRvd25BY3Rpb24gPSBpc0ZvcndhcmQgPyAnbmV4dCcgOiAncHJldic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VyclNsaWRlICYmIGN1cnJTbGlkZS5jdXJyWm9vbUxldmVsID4gY3VyclNsaWRlLnpvb21MZXZlbHMuZml0KSB7XHJcbiAgICAgICAgLy8gdXAvZG93biBhcnJvdyBrZXlzIHBhbiB0aGUgaW1hZ2UgdmVydGljYWxseVxyXG4gICAgICAgIC8vIGxlZnQvcmlnaHQgYXJyb3cga2V5cyBwYW4gaG9yaXpvbnRhbGx5LlxyXG4gICAgICAgIC8vIFVubGVzcyB0aGVyZSBpcyBvbmx5IG9uZSBpbWFnZSxcclxuICAgICAgICAvLyBvciBhcnJvd0tleXMgb3B0aW9uIGlzIGRpc2FibGVkXHJcbiAgICAgICAgY3VyclNsaWRlLnBhbltheGlzXSArPSBpc0ZvcndhcmQgPyAtODAgOiA4MDtcclxuICAgICAgICBjdXJyU2xpZGUucGFuVG8oY3VyclNsaWRlLnBhbi54LCBjdXJyU2xpZGUucGFuLnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleWRvd25BY3Rpb24pIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHBzd3Bba2V5ZG93bkFjdGlvbl0oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYXAgZm9jdXMgaW5zaWRlIHBob3Rvc3dpcGVcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtGb2N1c0V2ZW50fSBlXHJcbiAgICovXHJcbiAgX29uRm9jdXNJbihlKSB7XHJcbiAgICBjb25zdCB7IHRlbXBsYXRlIH0gPSB0aGlzLnBzd3A7XHJcbiAgICBpZiAodGVtcGxhdGVcclxuICAgICAgJiYgZG9jdW1lbnQgIT09IGUudGFyZ2V0XHJcbiAgICAgICYmIHRlbXBsYXRlICE9PSBlLnRhcmdldFxyXG4gICAgICAmJiAhdGVtcGxhdGUuY29udGFpbnMoLyoqIEB0eXBlIHtOb2RlfSAqLyhlLnRhcmdldCkpKSB7XHJcbiAgICAgIC8vIGZvY3VzIHJvb3QgZWxlbWVudFxyXG4gICAgICB0ZW1wbGF0ZS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9FQVNJTkcgPSAnY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpJztcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2FuaW1hdGlvbnMuanMnKS5TaGFyZWRBbmltYXRpb25Qcm9wc30gU2hhcmVkQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7T2JqZWN0fSBEZWZhdWx0Q3NzQW5pbWF0aW9uUHJvcHNcclxuICpcclxuICogQHByb3Age0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICogQHByb3Age251bWJlcn0gW2R1cmF0aW9uXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbZWFzaW5nXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbdHJhbnNmb3JtXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbb3BhY2l0eV1cclxuICogKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7U2hhcmVkQW5pbWF0aW9uUHJvcHMgJiBEZWZhdWx0Q3NzQW5pbWF0aW9uUHJvcHN9IENzc0FuaW1hdGlvblByb3BzICovXHJcblxyXG4vKipcclxuICogUnVucyBDU1MgdHJhbnNpdGlvbi5cclxuICovXHJcbmNsYXNzIENTU0FuaW1hdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogb25Db21wbGV0ZSBjYW4gYmUgdW5wcmVkaWN0YWJsZSwgYmUgY2FyZWZ1bCBhYm91dCBjdXJyZW50IHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0Nzc0FuaW1hdGlvblByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRhcmdldCxcclxuICAgICAgb25Db21wbGV0ZSxcclxuICAgICAgdHJhbnNmb3JtLFxyXG4gICAgICBvbkZpbmlzaCA9ICgpID0+IHsgfSxcclxuICAgICAgZHVyYXRpb24gPSAzMzMsXHJcbiAgICAgIGVhc2luZyA9IERFRkFVTFRfRUFTSU5HLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHRoaXMub25GaW5pc2ggPSBvbkZpbmlzaDtcclxuXHJcbiAgICAvLyBzdXBwb3J0IG9ubHkgdHJhbnNmb3JtIGFuZCBvcGFjaXR5XHJcbiAgICBjb25zdCBwcm9wID0gdHJhbnNmb3JtID8gJ3RyYW5zZm9ybScgOiAnb3BhY2l0eSc7XHJcbiAgICBjb25zdCBwcm9wVmFsdWUgPSBwcm9wc1twcm9wXSA/PyAnJztcclxuXHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fb25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9vblRyYW5zaXRpb25FbmQgPSB0aGlzLl9vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAvLyBVc2luZyB0aW1lb3V0IGhhY2sgdG8gbWFrZSBzdXJlIHRoYXQgYW5pbWF0aW9uXHJcbiAgICAvLyBzdGFydHMgZXZlbiBpZiB0aGUgYW5pbWF0ZWQgcHJvcGVydHkgd2FzIGNoYW5nZWQgcmVjZW50bHksXHJcbiAgICAvLyBvdGhlcndpc2UgdHJhbnNpdGlvbmVuZCBtaWdodCBub3QgZmlyZSBvciB0cmFuc2l0aW9uIHdvbid0IHN0YXJ0LlxyXG4gICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy10cmFuc2l0aW9ucy8jc3RhcnRpbmdcclxuICAgIC8vXHJcbiAgICAvLyDCr1xcXyjjg4QpXy/Cr1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9oZWxwZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFRyYW5zaXRpb25TdHlsZSh0YXJnZXQsIHByb3AsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gICAgICB0aGlzLl9oZWxwZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9vblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmNhbmNlbCcsIHRoaXMuX29uVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBTYWZhcmkgb2NjYXNpb25hbGx5IGRvZXMgbm90IGVtaXQgdHJhbnNpdGlvbmVuZCBldmVudFxyXG4gICAgICAgIC8vIGlmIGVsZW1lbnQgcHJvcGVydHkgd2FzIG1vZGlmaWVkIGR1cmluZyB0aGUgdHJhbnNpdGlvbixcclxuICAgICAgICAvLyB3aGljaCBtYXkgYmUgY2F1c2VkIGJ5IHJlc2l6ZSBvciB0aGlyZCBwYXJ0eSBjb21wb25lbnQsXHJcbiAgICAgICAgLy8gdXNpbmcgdGltZW91dCBhcyBhIHNhZmV0eSBmYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2hlbHBlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2ZpbmFsaXplQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSwgZHVyYXRpb24gKyA1MDApO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IHByb3BWYWx1ZTtcclxuICAgICAgfSwgMzApOyAvLyBEbyBub3QgcmVkdWNlIHRoaXMgbnVtYmVyXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGVcclxuICAgKi9cclxuICBfb25UcmFuc2l0aW9uRW5kKGUpIHtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5fdGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuX2ZpbmFsaXplQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9maW5hbGl6ZUFuaW1hdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5fZmluaXNoZWQpIHtcclxuICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5fb25Db21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZXN0cm95IGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IG9uRmluaXNoXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9oZWxwZXJUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oZWxwZXJUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIHJlbW92ZVRyYW5zaXRpb25TdHlsZSh0aGlzLl90YXJnZXQpO1xyXG4gICAgdGhpcy5fdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9vblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAgIHRoaXMuX3RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uY2FuY2VsJywgdGhpcy5fb25UcmFuc2l0aW9uRW5kLCBmYWxzZSk7XHJcbiAgICBpZiAoIXRoaXMuX2ZpbmlzaGVkKSB7XHJcbiAgICAgIHRoaXMuX2ZpbmFsaXplQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX05BVFVSQUxfRlJFUVVFTkNZID0gMTI7XHJcbmNvbnN0IERFRkFVTFRfREFNUElOR19SQVRJTyA9IDAuNzU7XHJcblxyXG4vKipcclxuICogU3ByaW5nIGVhc2luZyBoZWxwZXJcclxuICovXHJcbmNsYXNzIFNwcmluZ0Vhc2VyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdGlhbFZlbG9jaXR5IEluaXRpYWwgdmVsb2NpdHksIHB4IHBlciBtcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGFtcGluZ1JhdGlvXVxyXG4gICAqIERldGVybWluZXMgaG93IGJvdW5jeSBhbmltYXRpb24gd2lsbCBiZS5cclxuICAgKiBGcm9tIDAgdG8gMSwgMCAtIGFsd2F5cyBvdmVyc2hvb3QsIDEgLSBkbyBub3Qgb3ZlcnNob290LlxyXG4gICAqIFwib3ZlcnNob290XCIgcmVmZXJzIHRvIHBhcnQgb2YgYW5pbWF0aW9uIHRoYXRcclxuICAgKiBnb2VzIGJleW9uZCB0aGUgZmluYWwgdmFsdWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW25hdHVyYWxGcmVxdWVuY3ldXHJcbiAgICogRGV0ZXJtaW5lcyBob3cgZmFzdCBhbmltYXRpb24gd2lsbCBzbG93IGRvd24uXHJcbiAgICogVGhlIGhpZ2hlciB2YWx1ZSAtIHRoZSBzdGlmZmVyIHRoZSB0cmFuc2l0aW9uIHdpbGwgYmUsXHJcbiAgICogYW5kIHRoZSBmYXN0ZXIgaXQgd2lsbCBzbG93IGRvd24uXHJcbiAgICogUmVjb21tZW5kZWQgdmFsdWUgZnJvbSAxMCB0byA1MFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWZWxvY2l0eSwgZGFtcGluZ1JhdGlvLCBuYXR1cmFsRnJlcXVlbmN5KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gaW5pdGlhbFZlbG9jaXR5ICogMTAwMDsgLy8gY29udmVydCB0byBcInBpeGVscyBwZXIgc2Vjb25kXCJcclxuXHJcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EYW1waW5nX3JhdGlvXHJcbiAgICB0aGlzLl9kYW1waW5nUmF0aW8gPSBkYW1waW5nUmF0aW8gfHwgREVGQVVMVF9EQU1QSU5HX1JBVElPO1xyXG5cclxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05hdHVyYWxfZnJlcXVlbmN5XHJcbiAgICB0aGlzLl9uYXR1cmFsRnJlcXVlbmN5ID0gbmF0dXJhbEZyZXF1ZW5jeSB8fCBERUZBVUxUX05BVFVSQUxfRlJFUVVFTkNZO1xyXG5cclxuICAgIHRoaXMuX2RhbXBlZEZyZXF1ZW5jeSA9IHRoaXMuX25hdHVyYWxGcmVxdWVuY3k7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RhbXBpbmdSYXRpbyA8IDEpIHtcclxuICAgICAgdGhpcy5fZGFtcGVkRnJlcXVlbmN5ICo9IE1hdGguc3FydCgxIC0gdGhpcy5fZGFtcGluZ1JhdGlvICogdGhpcy5fZGFtcGluZ1JhdGlvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVBvc2l0aW9uIERpZmZlcmVuY2UgYmV0d2VlbiBjdXJyZW50IGFuZCBlbmQgcG9zaXRpb24gb2YgdGhlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVRpbWUgRnJhbWUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBEaXNwbGFjZW1lbnQsIHJlbGF0aXZlIHRvIHRoZSBlbmQgcG9zaXRpb24uXHJcbiAgICovXHJcbiAgZWFzZUZyYW1lKGRlbHRhUG9zaXRpb24sIGRlbHRhVGltZSkge1xyXG4gICAgLy8gSW5zcGlyZWQgYnkgQXBwbGUgV2Via2l0IGFuZCBBbmRyb2lkIHNwcmluZyBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvblxyXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT3NjaWxsYXRpb25cclxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RhbXBpbmdfcmF0aW9cclxuICAgIC8vIHdlIGlnbm9yZSBtYXNzIChhc3N1bWUgdGhhdCBpdCdzIDFrZylcclxuXHJcbiAgICBsZXQgZGlzcGxhY2VtZW50ID0gMDtcclxuICAgIGxldCBjb2VmZjtcclxuXHJcbiAgICBkZWx0YVRpbWUgLz0gMTAwMDtcclxuXHJcbiAgICBjb25zdCBuYXR1cmFsRHVtcGluZ1BvdyA9IE1hdGguRSAqKiAoLXRoaXMuX2RhbXBpbmdSYXRpbyAqIHRoaXMuX25hdHVyYWxGcmVxdWVuY3kgKiBkZWx0YVRpbWUpO1xyXG5cclxuICAgIGlmICh0aGlzLl9kYW1waW5nUmF0aW8gPT09IDEpIHtcclxuICAgICAgY29lZmYgPSB0aGlzLnZlbG9jaXR5ICsgdGhpcy5fbmF0dXJhbEZyZXF1ZW5jeSAqIGRlbHRhUG9zaXRpb247XHJcblxyXG4gICAgICBkaXNwbGFjZW1lbnQgPSAoZGVsdGFQb3NpdGlvbiArIGNvZWZmICogZGVsdGFUaW1lKSAqIG5hdHVyYWxEdW1waW5nUG93O1xyXG5cclxuICAgICAgdGhpcy52ZWxvY2l0eSA9IGRpc3BsYWNlbWVudFxyXG4gICAgICAgICogKC10aGlzLl9uYXR1cmFsRnJlcXVlbmN5KSArIGNvZWZmXHJcbiAgICAgICAgKiBuYXR1cmFsRHVtcGluZ1BvdztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fZGFtcGluZ1JhdGlvIDwgMSkge1xyXG4gICAgICBjb2VmZiA9ICgxIC8gdGhpcy5fZGFtcGVkRnJlcXVlbmN5KVxyXG4gICAgICAgICogKHRoaXMuX2RhbXBpbmdSYXRpbyAqIHRoaXMuX25hdHVyYWxGcmVxdWVuY3kgKiBkZWx0YVBvc2l0aW9uICsgdGhpcy52ZWxvY2l0eSk7XHJcblxyXG4gICAgICBjb25zdCBkdW1wZWRGQ29zID0gTWF0aC5jb3ModGhpcy5fZGFtcGVkRnJlcXVlbmN5ICogZGVsdGFUaW1lKTtcclxuICAgICAgY29uc3QgZHVtcGVkRlNpbiA9IE1hdGguc2luKHRoaXMuX2RhbXBlZEZyZXF1ZW5jeSAqIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICBkaXNwbGFjZW1lbnQgPSBuYXR1cmFsRHVtcGluZ1Bvd1xyXG4gICAgICAgICogKGRlbHRhUG9zaXRpb24gKiBkdW1wZWRGQ29zICsgY29lZmYgKiBkdW1wZWRGU2luKTtcclxuXHJcbiAgICAgIHRoaXMudmVsb2NpdHkgPSBkaXNwbGFjZW1lbnRcclxuICAgICAgICAqICgtdGhpcy5fbmF0dXJhbEZyZXF1ZW5jeSlcclxuICAgICAgICAqIHRoaXMuX2RhbXBpbmdSYXRpb1xyXG4gICAgICAgICsgbmF0dXJhbER1bXBpbmdQb3dcclxuICAgICAgICAqICgtdGhpcy5fZGFtcGVkRnJlcXVlbmN5ICogZGVsdGFQb3NpdGlvbiAqIGR1bXBlZEZTaW5cclxuICAgICAgICAgICsgdGhpcy5fZGFtcGVkRnJlcXVlbmN5ICogY29lZmYgKiBkdW1wZWRGQ29zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVyZGFtcGVkICg+MSkgZGFtcGluZyByYXRpbyBpcyBub3Qgc3VwcG9ydGVkXHJcblxyXG4gICAgcmV0dXJuIGRpc3BsYWNlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2FuaW1hdGlvbnMuanMnKS5TaGFyZWRBbmltYXRpb25Qcm9wc30gU2hhcmVkQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEZWZhdWx0U3ByaW5nQW5pbWF0aW9uUHJvcHNcclxuICpcclxuICogQHByb3Age251bWJlcn0gc3RhcnRcclxuICogQHByb3Age251bWJlcn0gZW5kXHJcbiAqIEBwcm9wIHtudW1iZXJ9IHZlbG9jaXR5XHJcbiAqIEBwcm9wIHtudW1iZXJ9IFtkYW1waW5nUmF0aW9dXHJcbiAqIEBwcm9wIHtudW1iZXJ9IFtuYXR1cmFsRnJlcXVlbmN5XVxyXG4gKiBAcHJvcCB7KGVuZDogbnVtYmVyKSA9PiB2b2lkfSBvblVwZGF0ZVxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7U2hhcmVkQW5pbWF0aW9uUHJvcHMgJiBEZWZhdWx0U3ByaW5nQW5pbWF0aW9uUHJvcHN9IFNwcmluZ0FuaW1hdGlvblByb3BzICovXHJcblxyXG5jbGFzcyBTcHJpbmdBbmltYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U3ByaW5nQW5pbWF0aW9uUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuX3JhZiA9IDA7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBzdGFydCxcclxuICAgICAgZW5kLFxyXG4gICAgICB2ZWxvY2l0eSxcclxuICAgICAgb25VcGRhdGUsXHJcbiAgICAgIG9uQ29tcGxldGUsXHJcbiAgICAgIG9uRmluaXNoID0gKCkgPT4geyB9LFxyXG4gICAgICBkYW1waW5nUmF0aW8sXHJcbiAgICAgIG5hdHVyYWxGcmVxdWVuY3lcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICB0aGlzLm9uRmluaXNoID0gb25GaW5pc2g7XHJcblxyXG4gICAgY29uc3QgZWFzZXIgPSBuZXcgU3ByaW5nRWFzZXIodmVsb2NpdHksIGRhbXBpbmdSYXRpbywgbmF0dXJhbEZyZXF1ZW5jeSk7XHJcbiAgICBsZXQgcHJldlRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGRlbHRhUG9zaXRpb24gPSBzdGFydCAtIGVuZDtcclxuXHJcbiAgICBjb25zdCBhbmltYXRpb25Mb29wID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fcmFmKSB7XHJcbiAgICAgICAgZGVsdGFQb3NpdGlvbiA9IGVhc2VyLmVhc2VGcmFtZShkZWx0YVBvc2l0aW9uLCBEYXRlLm5vdygpIC0gcHJldlRpbWUpO1xyXG5cclxuICAgICAgICAvLyBTdG9wIHRoZSBhbmltYXRpb24gaWYgdmVsb2NpdHkgaXMgbG93IGFuZCBwb3NpdGlvbiBpcyBjbG9zZSB0byBlbmRcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFQb3NpdGlvbikgPCAxICYmIE1hdGguYWJzKGVhc2VyLnZlbG9jaXR5KSA8IDUwKSB7XHJcbiAgICAgICAgICAvLyBGaW5hbGl6ZSB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgICBvblVwZGF0ZShlbmQpO1xyXG4gICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcmV2VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICBvblVwZGF0ZShkZWx0YVBvc2l0aW9uICsgZW5kKTtcclxuICAgICAgICAgIHRoaXMuX3JhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVzdHJveSBpcyBjYWxsZWQgYXV0b21hdGljYWxseSBvbkZpbmlzaFxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fcmFmID49IDApIHtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fcmFmKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3JhZiA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jc3MtYW5pbWF0aW9uLmpzJykuQ3NzQW5pbWF0aW9uUHJvcHN9IENzc0FuaW1hdGlvblByb3BzICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NwcmluZy1hbmltYXRpb24uanMnKS5TcHJpbmdBbmltYXRpb25Qcm9wc30gU3ByaW5nQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7T2JqZWN0fSBTaGFyZWRBbmltYXRpb25Qcm9wc1xyXG4gKiBAcHJvcCB7c3RyaW5nfSBbbmFtZV1cclxuICogQHByb3Age2Jvb2xlYW59IFtpc1Bhbl1cclxuICogQHByb3Age2Jvb2xlYW59IFtpc01haW5TY3JvbGxdXHJcbiAqIEBwcm9wIHtWb2lkRnVuY3Rpb259IFtvbkNvbXBsZXRlXVxyXG4gKiBAcHJvcCB7Vm9pZEZ1bmN0aW9ufSBbb25GaW5pc2hdXHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtTcHJpbmdBbmltYXRpb24gfCBDU1NBbmltYXRpb259IEFuaW1hdGlvbiAqL1xyXG4vKiogQHR5cGVkZWYge1NwcmluZ0FuaW1hdGlvblByb3BzIHwgQ3NzQW5pbWF0aW9uUHJvcHN9IEFuaW1hdGlvblByb3BzICovXHJcblxyXG4vKipcclxuICogTWFuYWdlcyBhbmltYXRpb25zXHJcbiAqL1xyXG5jbGFzcyBBbmltYXRpb25zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBAdHlwZSB7QW5pbWF0aW9uW119ICovXHJcbiAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U3ByaW5nQW5pbWF0aW9uUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgc3RhcnRTcHJpbmcocHJvcHMpIHtcclxuICAgIHRoaXMuX3N0YXJ0KHByb3BzLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q3NzQW5pbWF0aW9uUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgc3RhcnRUcmFuc2l0aW9uKHByb3BzKSB7XHJcbiAgICB0aGlzLl9zdGFydChwcm9wcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7QW5pbWF0aW9uUHJvcHN9IHByb3BzXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNTcHJpbmddXHJcbiAgICogQHJldHVybnMge0FuaW1hdGlvbn1cclxuICAgKi9cclxuICBfc3RhcnQocHJvcHMsIGlzU3ByaW5nKSB7XHJcbiAgICBjb25zdCBhbmltYXRpb24gPSBpc1NwcmluZ1xyXG4gICAgICA/IG5ldyBTcHJpbmdBbmltYXRpb24oLyoqIEB0eXBlIFNwcmluZ0FuaW1hdGlvblByb3BzICovKHByb3BzKSlcclxuICAgICAgOiBuZXcgQ1NTQW5pbWF0aW9uKC8qKiBAdHlwZSBDc3NBbmltYXRpb25Qcm9wcyAqLyhwcm9wcykpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XHJcbiAgICBhbmltYXRpb24ub25GaW5pc2ggPSAoKSA9PiB0aGlzLnN0b3AoYW5pbWF0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gYW5pbWF0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtBbmltYXRpb259IGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIHN0b3AoYW5pbWF0aW9uKSB7XHJcbiAgICBhbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuaW5kZXhPZihhbmltYXRpb24pO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5hY3RpdmVBbmltYXRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wQWxsKCkgeyAvLyBfc3RvcEFsbEFuaW1hdGlvbnNcclxuICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5mb3JFYWNoKChhbmltYXRpb24pID0+IHtcclxuICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3RpdmVBbmltYXRpb25zID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIGFsbCBwYW4gb3Igem9vbSB0cmFuc2l0aW9uc1xyXG4gICAqL1xyXG4gIHN0b3BBbGxQYW4oKSB7XHJcbiAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMgPSB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuZmlsdGVyKChhbmltYXRpb24pID0+IHtcclxuICAgICAgaWYgKGFuaW1hdGlvbi5wcm9wcy5pc1Bhbikge1xyXG4gICAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RvcE1haW5TY3JvbGwoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMgPSB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuZmlsdGVyKChhbmltYXRpb24pID0+IHtcclxuICAgICAgaWYgKGFuaW1hdGlvbi5wcm9wcy5pc01haW5TY3JvbGwpIHtcclxuICAgICAgICBhbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBtYWluIHNjcm9sbCB0cmFuc2l0aW9uIGlzIHJ1bm5pbmdcclxuICAgKi9cclxuICAvLyBpc01haW5TY3JvbGxSdW5uaW5nKCkge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5zb21lKChhbmltYXRpb24pID0+IHtcclxuICAvLyAgICAgcmV0dXJuIGFuaW1hdGlvbi5wcm9wcy5pc01haW5TY3JvbGw7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbnkgcGFuIG9yIHpvb20gdHJhbnNpdGlvbiBpcyBydW5uaW5nXHJcbiAgICovXHJcbiAgaXNQYW5SdW5uaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5zb21lKChhbmltYXRpb24pID0+IHtcclxuICAgICAgcmV0dXJuIGFuaW1hdGlvbi5wcm9wcy5pc1BhbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIHNjcm9sbCB3aGVlbC5cclxuICogQ2FuIHBhbiBhbmQgem9vbSBjdXJyZW50IHNsaWRlIGltYWdlLlxyXG4gKi9cclxuY2xhc3MgU2Nyb2xsV2hlZWwge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICBwc3dwLmV2ZW50cy5hZGQocHN3cC5lbGVtZW50LCAnd2hlZWwnLCAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqLyh0aGlzLl9vbldoZWVsLmJpbmQodGhpcykpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtXaGVlbEV2ZW50fSBlXHJcbiAgICovXHJcbiAgX29uV2hlZWwoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHRoaXMucHN3cDtcclxuICAgIGxldCB7IGRlbHRhWCwgZGVsdGFZIH0gPSBlO1xyXG5cclxuICAgIGlmICghY3VyclNsaWRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wc3dwLmRpc3BhdGNoKCd3aGVlbCcsIHsgb3JpZ2luYWxFdmVudDogZSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5IHx8IHRoaXMucHN3cC5vcHRpb25zLndoZWVsVG9ab29tKSB7XHJcbiAgICAgIC8vIHpvb21cclxuICAgICAgaWYgKGN1cnJTbGlkZS5pc1pvb21hYmxlKCkpIHtcclxuICAgICAgICBsZXQgem9vbUZhY3RvciA9IC1kZWx0YVk7XHJcbiAgICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxIC8qIERPTV9ERUxUQV9MSU5FICovKSB7XHJcbiAgICAgICAgICB6b29tRmFjdG9yICo9IDAuMDU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHpvb21GYWN0b3IgKj0gZS5kZWx0YU1vZGUgPyAxIDogMC4wMDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHpvb21GYWN0b3IgPSAyICoqIHpvb21GYWN0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc3Rab29tTGV2ZWwgPSBjdXJyU2xpZGUuY3Vyclpvb21MZXZlbCAqIHpvb21GYWN0b3I7XHJcbiAgICAgICAgY3VyclNsaWRlLnpvb21UbyhkZXN0Wm9vbUxldmVsLCB7XHJcbiAgICAgICAgICB4OiBlLmNsaWVudFgsXHJcbiAgICAgICAgICB5OiBlLmNsaWVudFlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gcGFuXHJcbiAgICAgIGlmIChjdXJyU2xpZGUuaXNQYW5uYWJsZSgpKSB7XHJcbiAgICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxIC8qIERPTV9ERUxUQV9MSU5FICovKSB7XHJcbiAgICAgICAgICAvLyAxOCAtIGF2ZXJhZ2UgbGluZSBoZWlnaHRcclxuICAgICAgICAgIGRlbHRhWCAqPSAxODtcclxuICAgICAgICAgIGRlbHRhWSAqPSAxODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJTbGlkZS5wYW5UbyhcclxuICAgICAgICAgIGN1cnJTbGlkZS5wYW4ueCAtIGRlbHRhWCxcclxuICAgICAgICAgIGN1cnJTbGlkZS5wYW4ueSAtIGRlbHRhWVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3R5cGVzLmpzJykuTWV0aG9kczxUPn0gTWV0aG9kczxUPlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBVSUVsZW1lbnRNYXJrdXBQcm9wc1xyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2lzQ3VzdG9tU1ZHXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBpbm5lclxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbb3V0bGluZUlEXVxyXG4gKiBAcHJvcCB7bnVtYmVyIHwgc3RyaW5nfSBbc2l6ZV1cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gVUlFbGVtZW50RGF0YVxyXG4gKiBAcHJvcCB7RGVmYXVsdFVJRWxlbWVudHMgfCBzdHJpbmd9IFtuYW1lXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbY2xhc3NOYW1lXVxyXG4gKiBAcHJvcCB7VUlFbGVtZW50TWFya3VwfSBbaHRtbF1cclxuICogQHByb3Age2Jvb2xlYW59IFtpc0J1dHRvbl1cclxuICogQHByb3Age2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcH0gW3RhZ05hbWVdXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFt0aXRsZV1cclxuICogQHByb3Age3N0cmluZ30gW2FyaWFMYWJlbF1cclxuICogQHByb3AgeyhlbGVtZW50OiBIVE1MRWxlbWVudCwgcHN3cDogUGhvdG9Td2lwZSkgPT4gdm9pZH0gW29uSW5pdF1cclxuICogQHByb3Age01ldGhvZHM8UGhvdG9Td2lwZT4gfCAoKGU6IE1vdXNlRXZlbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwc3dwOiBQaG90b1N3aXBlKSA9PiB2b2lkKX0gW29uQ2xpY2tdXHJcbiAqIEBwcm9wIHsnYmFyJyB8ICd3cmFwcGVyJyB8ICdyb290J30gW2FwcGVuZFRvXVxyXG4gKiBAcHJvcCB7bnVtYmVyfSBbb3JkZXJdXHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHsnYXJyb3dQcmV2JyB8ICdhcnJvd05leHQnIHwgJ2Nsb3NlJyB8ICd6b29tJyB8ICdjb3VudGVyJ30gRGVmYXVsdFVJRWxlbWVudHMgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7c3RyaW5nIHwgVUlFbGVtZW50TWFya3VwUHJvcHN9IFVJRWxlbWVudE1hcmt1cCAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VUlFbGVtZW50TWFya3VwfSBbaHRtbERhdGFdXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRFbGVtZW50SFRNTChodG1sRGF0YSkge1xyXG4gIGlmICh0eXBlb2YgaHRtbERhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAvLyBBbGxvdyBkZXZlbG9wZXJzIHRvIHByb3ZpZGUgZnVsbCBzdmcsXHJcbiAgICAvLyBGb3IgZXhhbXBsZTpcclxuICAgIC8vIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwicHN3cF9faWNuXCI+XHJcbiAgICAvLyAgIDxwYXRoIGQ9XCIuLi5cIiAvPlxyXG4gICAgLy8gICA8Y2lyY2xlIC4uLiAvPlxyXG4gICAgLy8gPC9zdmc+XHJcbiAgICAvLyBDYW4gYWxzbyBiZSBhbnkgSFRNTCBzdHJpbmcuXHJcbiAgICByZXR1cm4gaHRtbERhdGE7XHJcbiAgfVxyXG5cclxuICBpZiAoIWh0bWxEYXRhIHx8ICFodG1sRGF0YS5pc0N1c3RvbVNWRykge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3ZnRGF0YSA9IGh0bWxEYXRhO1xyXG4gIGxldCBvdXQgPSAnPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInBzd3BfX2ljblwiIHZpZXdCb3g9XCIwIDAgJWQgJWRcIiB3aWR0aD1cIiVkXCIgaGVpZ2h0PVwiJWRcIj4nO1xyXG4gIC8vIHJlcGxhY2UgYWxsICVkIHdpdGggc2l6ZVxyXG4gIG91dCA9IG91dC5zcGxpdCgnJWQnKS5qb2luKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyhzdmdEYXRhLnNpemUgfHwgMzIpKTtcclxuXHJcbiAgLy8gSWNvbnMgbWF5IGNvbnRhaW4gb3V0bGluZS9zaGFkb3csXHJcbiAgLy8gdG8gbWFrZSBpdCB3ZSBcImNsb25lXCIgYmFzZSBpY29uIHNoYXBlIGFuZCBhZGQgYm9yZGVyIHRvIGl0LlxyXG4gIC8vIEljb24gaXRzZWxmIGFuZCBib3JkZXIgYXJlIHN0eWxlZCB2aWEgQ1NTLlxyXG4gIC8vXHJcbiAgLy8gUHJvcGVydHkgc2hhZG93SUQgZGVmaW5lcyBJRCBvZiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGNsb25lZC5cclxuICBpZiAoc3ZnRGF0YS5vdXRsaW5lSUQpIHtcclxuICAgIG91dCArPSAnPHVzZSBjbGFzcz1cInBzd3BfX2ljbi1zaGFkb3dcIiB4bGluazpocmVmPVwiIycgKyBzdmdEYXRhLm91dGxpbmVJRCArICdcIi8+JztcclxuICB9XHJcblxyXG4gIG91dCArPSBzdmdEYXRhLmlubmVyO1xyXG5cclxuICBvdXQgKz0gJzwvc3ZnPic7XHJcblxyXG4gIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbmNsYXNzIFVJRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAgICogQHBhcmFtIHtVSUVsZW1lbnREYXRhfSBkYXRhXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHN3cCwgZGF0YSkge1xyXG4gICAgY29uc3QgbmFtZSA9IGRhdGEubmFtZSB8fCBkYXRhLmNsYXNzTmFtZTtcclxuICAgIGxldCBlbGVtZW50SFRNTCA9IGRhdGEuaHRtbDtcclxuXHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2t1cCBvbmx5IGJ5IGBkYXRhLm5hbWVgIG1heWJlP1xyXG4gICAgaWYgKHBzd3Aub3B0aW9uc1tuYW1lXSA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gZXhpdCBpZiBlbGVtZW50IGlzIGRpc2FibGVkIGZyb20gb3B0aW9uc1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWxsb3cgdG8gb3ZlcnJpZGUgU1ZHIGljb25zIGZyb20gb3B0aW9uc1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rdXAgb25seSBieSBgZGF0YS5uYW1lYCBtYXliZT9cclxuICAgIGlmICh0eXBlb2YgcHN3cC5vcHRpb25zW25hbWUgKyAnU1ZHJ10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIC8vIGFycm93UHJldlNWR1xyXG4gICAgICAvLyBhcnJvd05leHRTVkdcclxuICAgICAgLy8gY2xvc2VTVkdcclxuICAgICAgLy8gem9vbVNWR1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2t1cCBvbmx5IGJ5IGBkYXRhLm5hbWVgIG1heWJlP1xyXG4gICAgICBlbGVtZW50SFRNTCA9IHBzd3Aub3B0aW9uc1tuYW1lICsgJ1NWRyddO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AuZGlzcGF0Y2goJ3VpRWxlbWVudENyZWF0ZScsIHsgZGF0YSB9KTtcclxuXHJcbiAgICBsZXQgY2xhc3NOYW1lID0gJyc7XHJcbiAgICBpZiAoZGF0YS5pc0J1dHRvbikge1xyXG4gICAgICBjbGFzc05hbWUgKz0gJ3Bzd3BfX2J1dHRvbiAnO1xyXG4gICAgICBjbGFzc05hbWUgKz0gKGRhdGEuY2xhc3NOYW1lIHx8IGBwc3dwX19idXR0b24tLSR7ZGF0YS5uYW1lfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xhc3NOYW1lICs9IChkYXRhLmNsYXNzTmFtZSB8fCBgcHN3cF9fJHtkYXRhLm5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRhZ05hbWUgPSBkYXRhLmlzQnV0dG9uID8gKGRhdGEudGFnTmFtZSB8fCAnYnV0dG9uJykgOiAoZGF0YS50YWdOYW1lIHx8ICdkaXYnKTtcclxuICAgIHRhZ05hbWUgPSAvKiogQHR5cGUge2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcH0gKi8gKHRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoY2xhc3NOYW1lLCB0YWdOYW1lKTtcclxuXHJcbiAgICBpZiAoZGF0YS5pc0J1dHRvbikge1xyXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqLyAoZWxlbWVudCkudHlwZSA9ICdidXR0b24nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgeyB0aXRsZSB9ID0gZGF0YTtcclxuICAgICAgY29uc3QgeyBhcmlhTGFiZWwgfSA9IGRhdGE7XHJcblxyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2t1cCBvbmx5IGJ5IGBkYXRhLm5hbWVgIG1heWJlP1xyXG4gICAgICBpZiAodHlwZW9mIHBzd3Aub3B0aW9uc1tuYW1lICsgJ1RpdGxlJ10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBsb29rdXAgb25seSBieSBgZGF0YS5uYW1lYCBtYXliZT9cclxuICAgICAgICB0aXRsZSA9IHBzd3Aub3B0aW9uc1tuYW1lICsgJ1RpdGxlJ107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgIGVsZW1lbnQudGl0bGUgPSB0aXRsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYXJpYVRleHQgPSBhcmlhTGFiZWwgfHwgdGl0bGU7XHJcbiAgICAgIGlmIChhcmlhVGV4dCkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYXJpYVRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBhZGRFbGVtZW50SFRNTChlbGVtZW50SFRNTCk7XHJcblxyXG4gICAgaWYgKGRhdGEub25Jbml0KSB7XHJcbiAgICAgIGRhdGEub25Jbml0KGVsZW1lbnQsIHBzd3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLm9uQ2xpY2spIHtcclxuICAgICAgZWxlbWVudC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEub25DbGljayA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgIHBzd3BbZGF0YS5vbkNsaWNrXSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgZGF0YS5vbkNsaWNrKGUsIGVsZW1lbnQsIHBzd3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb3AgYmFyIGlzIGRlZmF1bHQgcG9zaXRpb25cclxuICAgIGNvbnN0IGFwcGVuZFRvID0gZGF0YS5hcHBlbmRUbyB8fCAnYmFyJztcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCB1bmRlZmluZWR9IHJvb3QgZWxlbWVudCBieSBkZWZhdWx0ICovXHJcbiAgICBsZXQgY29udGFpbmVyID0gcHN3cC5lbGVtZW50O1xyXG4gICAgaWYgKGFwcGVuZFRvID09PSAnYmFyJykge1xyXG4gICAgICBpZiAoIXBzd3AudG9wQmFyKSB7XHJcbiAgICAgICAgcHN3cC50b3BCYXIgPSBjcmVhdGVFbGVtZW50KCdwc3dwX190b3AtYmFyIHBzd3BfX2hpZGUtb24tY2xvc2UnLCAnZGl2JywgcHN3cC5zY3JvbGxXcmFwKTtcclxuICAgICAgfVxyXG4gICAgICBjb250YWluZXIgPSBwc3dwLnRvcEJhcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGVsZW1lbnQgb3V0c2lkZSBvZiB0b3AgYmFyIGdldHMgYSBzZWNvbmRhcnkgY2xhc3NcclxuICAgICAgLy8gdGhhdCBtYWtlcyBlbGVtZW50IGZhZGUgb3V0IG9uIGNsb3NlXHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHN3cF9faGlkZS1vbi1jbG9zZScpO1xyXG5cclxuICAgICAgaWYgKGFwcGVuZFRvID09PSAnd3JhcHBlcicpIHtcclxuICAgICAgICBjb250YWluZXIgPSBwc3dwLnNjcm9sbFdyYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXI/LmFwcGVuZENoaWxkKHBzd3AuYXBwbHlGaWx0ZXJzKCd1aUVsZW1lbnQnLCBlbGVtZW50LCBkYXRhKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gIEJhY2t3YXJkIGFuZCBmb3J3YXJkIGFycm93IGJ1dHRvbnNcclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc05leHRCdXR0b25dXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0QXJyb3dCdXR0b24oZWxlbWVudCwgcHN3cCwgaXNOZXh0QnV0dG9uKSB7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwc3dwX19idXR0b24tLWFycm93Jyk7XHJcbiAgLy8gRG15dHJvIFNlbWVub3Y6IHRoaXMgc2hvdWxkIHBvaW50IHRvIGEgdW5pcXVlIGlkIGZvciB0aGlzIGluc3RhbmNlXHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCAncHN3cF9faXRlbXMnKTtcclxuICBwc3dwLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBpZiAoIXBzd3Aub3B0aW9ucy5sb29wKSB7XHJcbiAgICAgIGlmIChpc05leHRCdXR0b24pIHtcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL1xyXG4gICAgICAgIChlbGVtZW50KS5kaXNhYmxlZCA9ICEocHN3cC5jdXJySW5kZXggPCBwc3dwLmdldE51bUl0ZW1zKCkgLSAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL1xyXG4gICAgICAgIChlbGVtZW50KS5kaXNhYmxlZCA9ICEocHN3cC5jdXJySW5kZXggPiAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKiogQHR5cGUge1VJRWxlbWVudERhdGF9ICovXHJcbmNvbnN0IGFycm93UHJldiA9IHtcclxuICBuYW1lOiAnYXJyb3dQcmV2JyxcclxuICBjbGFzc05hbWU6ICdwc3dwX19idXR0b24tLWFycm93LS1wcmV2JyxcclxuICB0aXRsZTogJ1ByZXZpb3VzJyxcclxuICBvcmRlcjogMTAsXHJcbiAgaXNCdXR0b246IHRydWUsXHJcbiAgYXBwZW5kVG86ICd3cmFwcGVyJyxcclxuICBodG1sOiB7XHJcbiAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgIHNpemU6IDYwLFxyXG4gICAgaW5uZXI6ICc8cGF0aCBkPVwiTTI5IDQzbC0zIDMtMTYtMTYgMTYtMTYgMyAzLTEzIDEzIDEzIDEzelwiIGlkPVwicHN3cF9faWNuLWFycm93XCIvPicsXHJcbiAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tYXJyb3cnXHJcbiAgfSxcclxuICBvbkNsaWNrOiAncHJldicsXHJcbiAgb25Jbml0OiBpbml0QXJyb3dCdXR0b25cclxufTtcclxuXHJcbi8qKiBAdHlwZSB7VUlFbGVtZW50RGF0YX0gKi9cclxuY29uc3QgYXJyb3dOZXh0ID0ge1xyXG4gIG5hbWU6ICdhcnJvd05leHQnLFxyXG4gIGNsYXNzTmFtZTogJ3Bzd3BfX2J1dHRvbi0tYXJyb3ctLW5leHQnLFxyXG4gIHRpdGxlOiAnTmV4dCcsXHJcbiAgb3JkZXI6IDExLFxyXG4gIGlzQnV0dG9uOiB0cnVlLFxyXG4gIGFwcGVuZFRvOiAnd3JhcHBlcicsXHJcbiAgaHRtbDoge1xyXG4gICAgaXNDdXN0b21TVkc6IHRydWUsXHJcbiAgICBzaXplOiA2MCxcclxuICAgIGlubmVyOiAnPHVzZSB4bGluazpocmVmPVwiI3Bzd3BfX2ljbi1hcnJvd1wiLz4nLFxyXG4gICAgb3V0bGluZUlEOiAncHN3cF9faWNuLWFycm93J1xyXG4gIH0sXHJcbiAgb25DbGljazogJ25leHQnLFxyXG4gIG9uSW5pdDogKGVsLCBwc3dwKSA9PiB7XHJcbiAgICBpbml0QXJyb3dCdXR0b24oZWwsIHBzd3AsIHRydWUpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKiBAdHlwZSB7aW1wb3J0KCcuL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbmNvbnN0IGNsb3NlQnV0dG9uID0ge1xyXG4gIG5hbWU6ICdjbG9zZScsXHJcbiAgdGl0bGU6ICdDbG9zZScsXHJcbiAgb3JkZXI6IDIwLFxyXG4gIGlzQnV0dG9uOiB0cnVlLFxyXG4gIGh0bWw6IHtcclxuICAgIGlzQ3VzdG9tU1ZHOiB0cnVlLFxyXG4gICAgaW5uZXI6ICc8cGF0aCBkPVwiTTI0IDEwbC0yLTItNiA2LTYtNi0yIDIgNiA2LTYgNiAyIDIgNi02IDYgNiAyLTItNi02elwiIGlkPVwicHN3cF9faWNuLWNsb3NlXCIvPicsXHJcbiAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tY2xvc2UnXHJcbiAgfSxcclxuICBvbkNsaWNrOiAnY2xvc2UnXHJcbn07XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgnLi91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG5jb25zdCB6b29tQnV0dG9uID0ge1xyXG4gIG5hbWU6ICd6b29tJyxcclxuICB0aXRsZTogJ1pvb20nLFxyXG4gIG9yZGVyOiAxMCxcclxuICBpc0J1dHRvbjogdHJ1ZSxcclxuICBodG1sOiB7XHJcbiAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICBpbm5lcjogJzxwYXRoIGQ9XCJNMTcuNDI2IDE5LjkyNmE2IDYgMCAxIDEgMS41LTEuNUwyMyAyMi41IDIxLjUgMjRsLTQuMDc0LTQuMDc0elwiIGlkPVwicHN3cF9faWNuLXpvb21cIi8+J1xyXG4gICAgICArICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJwc3dwX196b29tLWljbi1iYXItaFwiIGQ9XCJNMTEgMTZ2LTJoNnYyelwiLz4nXHJcbiAgICAgICsgJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInBzd3BfX3pvb20taWNuLWJhci12XCIgZD1cIk0xMyAxMmgydjZoLTJ6XCIvPicsXHJcbiAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tem9vbSdcclxuICB9LFxyXG4gIG9uQ2xpY2s6ICd0b2dnbGVab29tJ1xyXG59O1xyXG5cclxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuY29uc3QgbG9hZGluZ0luZGljYXRvciA9IHtcclxuICBuYW1lOiAncHJlbG9hZGVyJyxcclxuICBhcHBlbmRUbzogJ2JhcicsXHJcbiAgb3JkZXI6IDcsXHJcbiAgaHRtbDoge1xyXG4gICAgaXNDdXN0b21TVkc6IHRydWUsXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gICAgaW5uZXI6ICc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjEuMiAxNmE1LjIgNS4yIDAgMSAxLTUuMi01LjJWOGE4IDggMCAxIDAgOCA4aC0yLjhaXCIgaWQ9XCJwc3dwX19pY24tbG9hZGluZ1wiLz4nLFxyXG4gICAgb3V0bGluZUlEOiAncHN3cF9faWNuLWxvYWRpbmcnXHJcbiAgfSxcclxuICBvbkluaXQ6IChpbmRpY2F0b3JFbGVtZW50LCBwc3dwKSA9PiB7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW4gfCB1bmRlZmluZWR9ICovXHJcbiAgICBsZXQgaXNWaXNpYmxlO1xyXG4gICAgLyoqIEB0eXBlIHtOb2RlSlMuVGltZW91dCB8IG51bGx9ICovXHJcbiAgICBsZXQgZGVsYXlUaW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRvZ2dsZUluZGljYXRvckNsYXNzID0gKGNsYXNzTmFtZSwgYWRkKSA9PiB7XHJcbiAgICAgIGluZGljYXRvckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgncHN3cF9fcHJlbG9hZGVyLS0nICsgY2xhc3NOYW1lLCBhZGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmlzaWJsZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBzZXRJbmRpY2F0b3JWaXNpYmlsaXR5ID0gKHZpc2libGUpID0+IHtcclxuICAgICAgaWYgKGlzVmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgIGlzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgdG9nZ2xlSW5kaWNhdG9yQ2xhc3MoJ2FjdGl2ZScsIHZpc2libGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVByZWxvYWRlclZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghcHN3cC5jdXJyU2xpZGU/LmNvbnRlbnQuaXNMb2FkaW5nKCkpIHtcclxuICAgICAgICBzZXRJbmRpY2F0b3JWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgICBpZiAoZGVsYXlUaW1lb3V0KSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQoZGVsYXlUaW1lb3V0KTtcclxuICAgICAgICAgIGRlbGF5VGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFkZWxheVRpbWVvdXQpIHtcclxuICAgICAgICAvLyBkaXNwbGF5IGxvYWRpbmcgaW5kaWNhdG9yIHdpdGggZGVsYXlcclxuICAgICAgICBkZWxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldEluZGljYXRvclZpc2liaWxpdHkoQm9vbGVhbihwc3dwLmN1cnJTbGlkZT8uY29udGVudC5pc0xvYWRpbmcoKSkpO1xyXG4gICAgICAgICAgZGVsYXlUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9LCBwc3dwLm9wdGlvbnMucHJlbG9hZGVyRGVsYXkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHBzd3Aub24oJ2NoYW5nZScsIHVwZGF0ZVByZWxvYWRlclZpc2liaWxpdHkpO1xyXG5cclxuICAgIHBzd3Aub24oJ2xvYWRDb21wbGV0ZScsIChlKSA9PiB7XHJcbiAgICAgIGlmIChwc3dwLmN1cnJTbGlkZSA9PT0gZS5zbGlkZSkge1xyXG4gICAgICAgIHVwZGF0ZVByZWxvYWRlclZpc2liaWxpdHkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZXhwb3NlIHRoZSBtZXRob2RcclxuICAgIGlmIChwc3dwLnVpKSB7XHJcbiAgICAgIHBzd3AudWkudXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSA9IHVwZGF0ZVByZWxvYWRlclZpc2liaWxpdHk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuY29uc3QgY291bnRlckluZGljYXRvciA9IHtcclxuICBuYW1lOiAnY291bnRlcicsXHJcbiAgb3JkZXI6IDUsXHJcbiAgb25Jbml0OiAoY291bnRlckVsZW1lbnQsIHBzd3ApID0+IHtcclxuICAgIHBzd3Aub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgY291bnRlckVsZW1lbnQuaW5uZXJUZXh0ID0gKHBzd3AuY3VyckluZGV4ICsgMSlcclxuICAgICAgICArIHBzd3Aub3B0aW9ucy5pbmRleEluZGljYXRvclNlcFxyXG4gICAgICAgICsgcHN3cC5nZXROdW1JdGVtcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcblxyXG4vKipcclxuICogU2V0IHNwZWNpYWwgY2xhc3Mgb24gZWxlbWVudCB3aGVuIGltYWdlIGlzIHpvb21lZC5cclxuICpcclxuICogQnkgZGVmYXVsdCwgaXQgaXMgdXNlZCB0byBhZGp1c3RcclxuICogem9vbSBpY29uIGFuZCB6b29tIGN1cnNvciB2aWEgQ1NTLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzWm9vbWVkSW5cclxuICovXHJcbmZ1bmN0aW9uIHNldFpvb21lZEluKGVsLCBpc1pvb21lZEluKSB7XHJcbiAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgncHN3cC0tem9vbWVkLWluJywgaXNab29tZWRJbik7XHJcbn1cclxuXHJcbmNsYXNzIFVJIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgdGhpcy5pc1JlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7VUlFbGVtZW50RGF0YVtdfSAqL1xyXG4gICAgdGhpcy51aUVsZW1lbnRzRGF0YSA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHsoVUlFbGVtZW50IHwgVUlFbGVtZW50RGF0YSlbXX0gKi9cclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIC8qKiBAdHlwZSB7KCkgPT4gdm9pZH0gKi9cclxuICAgIHRoaXMudXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSA9ICgpID0+IHsgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyIHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9sYXN0VXBkYXRlZFpvb21MZXZlbCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICB0aGlzLmlzUmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy51aUVsZW1lbnRzRGF0YSA9IFtcclxuICAgICAgY2xvc2VCdXR0b24sXHJcbiAgICAgIGFycm93UHJldixcclxuICAgICAgYXJyb3dOZXh0LFxyXG4gICAgICB6b29tQnV0dG9uLFxyXG4gICAgICBsb2FkaW5nSW5kaWNhdG9yLFxyXG4gICAgICBjb3VudGVySW5kaWNhdG9yXHJcbiAgICBdO1xyXG5cclxuICAgIHBzd3AuZGlzcGF0Y2goJ3VpUmVnaXN0ZXInKTtcclxuXHJcbiAgICAvLyBzb3J0IGJ5IG9yZGVyXHJcbiAgICB0aGlzLnVpRWxlbWVudHNEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgLy8gZGVmYXVsdCBvcmRlciBpcyAwXHJcbiAgICAgIHJldHVybiAoYS5vcmRlciB8fCAwKSAtIChiLm9yZGVyIHx8IDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuaXNSZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgIHRoaXMudWlFbGVtZW50c0RhdGEuZm9yRWFjaCgodWlFbGVtZW50RGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyRWxlbWVudCh1aUVsZW1lbnREYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBzd3Aub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgcHN3cC5lbGVtZW50Py5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwLS1vbmUtc2xpZGUnLCBwc3dwLmdldE51bUl0ZW1zKCkgPT09IDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHN3cC5vbignem9vbVBhblVwZGF0ZScsICgpID0+IHRoaXMuX29uWm9vbVBhblVwZGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7VUlFbGVtZW50RGF0YX0gZWxlbWVudERhdGFcclxuICAgKi9cclxuICByZWdpc3RlckVsZW1lbnQoZWxlbWVudERhdGEpIHtcclxuICAgIGlmICh0aGlzLmlzUmVnaXN0ZXJlZCkge1xyXG4gICAgICB0aGlzLml0ZW1zLnB1c2goXHJcbiAgICAgICAgbmV3IFVJRWxlbWVudCh0aGlzLnBzd3AsIGVsZW1lbnREYXRhKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51aUVsZW1lbnRzRGF0YS5wdXNoKGVsZW1lbnREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVkIGVhY2ggdGltZSB6b29tIG9yIHBhbiBwb3NpdGlvbiBpcyBjaGFuZ2VkLlxyXG4gICAqIFVwZGF0ZSBjbGFzc2VzIHRoYXQgY29udHJvbCB2aXNpYmlsaXR5IG9mIHpvb20gYnV0dG9uIGFuZCBjdXJzb3IgaWNvbi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX29uWm9vbVBhblVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgdGVtcGxhdGUsIGN1cnJTbGlkZSwgb3B0aW9ucyB9ID0gdGhpcy5wc3dwO1xyXG5cclxuICAgIGlmICh0aGlzLnBzd3Aub3BlbmVyLmlzQ2xvc2luZyB8fCAhdGVtcGxhdGUgfHwgIWN1cnJTbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHsgY3Vyclpvb21MZXZlbCB9ID0gY3VyclNsaWRlO1xyXG5cclxuICAgIC8vIGlmIG5vdCBvcGVuIHlldCAtIGNoZWNrIGFnYWluc3QgaW5pdGlhbCB6b29tIGxldmVsXHJcbiAgICBpZiAoIXRoaXMucHN3cC5vcGVuZXIuaXNPcGVuKSB7XHJcbiAgICAgIGN1cnJab29tTGV2ZWwgPSBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyWm9vbUxldmVsID09PSB0aGlzLl9sYXN0VXBkYXRlZFpvb21MZXZlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sYXN0VXBkYXRlZFpvb21MZXZlbCA9IGN1cnJab29tTGV2ZWw7XHJcblxyXG4gICAgY29uc3QgY3Vyclpvb21MZXZlbERpZmYgPSBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsIC0gY3VyclNsaWRlLnpvb21MZXZlbHMuc2Vjb25kYXJ5O1xyXG5cclxuICAgIC8vIEluaXRpYWwgYW5kIHNlY29uZGFyeSB6b29tIGxldmVscyBhcmUgYWxtb3N0IGVxdWFsXHJcbiAgICBpZiAoTWF0aC5hYnMoY3Vyclpvb21MZXZlbERpZmYpIDwgMC4wMSB8fCAhY3VyclNsaWRlLmlzWm9vbWFibGUoKSkge1xyXG4gICAgICAvLyBkaXNhYmxlIHpvb21cclxuICAgICAgc2V0Wm9vbWVkSW4odGVtcGxhdGUsIGZhbHNlKTtcclxuICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LnJlbW92ZSgncHN3cC0tem9vbS1hbGxvd2VkJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCdwc3dwLS16b29tLWFsbG93ZWQnKTtcclxuXHJcbiAgICBjb25zdCBwb3RlbnRpYWxab29tTGV2ZWwgPSBjdXJyWm9vbUxldmVsID09PSBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsXHJcbiAgICAgID8gY3VyclNsaWRlLnpvb21MZXZlbHMuc2Vjb25kYXJ5IDogY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuXHJcbiAgICBzZXRab29tZWRJbih0ZW1wbGF0ZSwgcG90ZW50aWFsWm9vbUxldmVsIDw9IGN1cnJab29tTGV2ZWwpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmltYWdlQ2xpY2tBY3Rpb24gPT09ICd6b29tJ1xyXG4gICAgICB8fCBvcHRpb25zLmltYWdlQ2xpY2tBY3Rpb24gPT09ICd6b29tLW9yLWNsb3NlJykge1xyXG4gICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCdwc3dwLS1jbGljay10by16b29tJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHt7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGlubmVyUmVjdD86IHsgdzogbnVtYmVyOyBoOiBudW1iZXI7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfX0gQm91bmRzICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybnMgQm91bmRzXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3VuZHNCeUVsZW1lbnQoZWwpIHtcclxuICBjb25zdCB0aHVtYkFyZWFSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IHRodW1iQXJlYVJlY3QubGVmdCxcclxuICAgIHk6IHRodW1iQXJlYVJlY3QudG9wLFxyXG4gICAgdzogdGh1bWJBcmVhUmVjdC53aWR0aFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW1hZ2VXaWR0aFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW1hZ2VIZWlnaHRcclxuICogQHJldHVybnMgQm91bmRzXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDcm9wcGVkQm91bmRzQnlFbGVtZW50KGVsLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCkge1xyXG4gIGNvbnN0IHRodW1iQXJlYVJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgLy8gZmlsbCBpbWFnZSBpbnRvIHRoZSBhcmVhXHJcbiAgLy8gKGRvIHRoZXkgc2FtZSBhcyBvYmplY3QtZml0OmNvdmVyIGRvZXMgdG8gcmV0cmlldmUgY29vcmRpbmF0ZXMpXHJcbiAgY29uc3QgaFJhdGlvID0gdGh1bWJBcmVhUmVjdC53aWR0aCAvIGltYWdlV2lkdGg7XHJcbiAgY29uc3QgdlJhdGlvID0gdGh1bWJBcmVhUmVjdC5oZWlnaHQgLyBpbWFnZUhlaWdodDtcclxuICBjb25zdCBmaWxsWm9vbUxldmVsID0gaFJhdGlvID4gdlJhdGlvID8gaFJhdGlvIDogdlJhdGlvO1xyXG5cclxuICBjb25zdCBvZmZzZXRYID0gKHRodW1iQXJlYVJlY3Qud2lkdGggLSBpbWFnZVdpZHRoICogZmlsbFpvb21MZXZlbCkgLyAyO1xyXG4gIGNvbnN0IG9mZnNldFkgPSAodGh1bWJBcmVhUmVjdC5oZWlnaHQgLSBpbWFnZUhlaWdodCAqIGZpbGxab29tTGV2ZWwpIC8gMjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlLFxyXG4gICAqIGFzIGlmIGl0IHdhcyBub3QgY3JvcHBlZCxcclxuICAgKiBoZWlnaHQgaXMgY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5XHJcbiAgICpcclxuICAgKiBAdHlwZSB7Qm91bmRzfVxyXG4gICAqL1xyXG4gIGNvbnN0IGJvdW5kcyA9IHtcclxuICAgIHg6IHRodW1iQXJlYVJlY3QubGVmdCArIG9mZnNldFgsXHJcbiAgICB5OiB0aHVtYkFyZWFSZWN0LnRvcCArIG9mZnNldFksXHJcbiAgICB3OiBpbWFnZVdpZHRoICogZmlsbFpvb21MZXZlbFxyXG4gIH07XHJcblxyXG4gIC8vIENvb3JkaW5hdGVzIG9mIGlubmVyIGNyb3AgYXJlYVxyXG4gIC8vIHJlbGF0aXZlIHRvIHRoZSBpbWFnZVxyXG4gIGJvdW5kcy5pbm5lclJlY3QgPSB7XHJcbiAgICB3OiB0aHVtYkFyZWFSZWN0LndpZHRoLFxyXG4gICAgaDogdGh1bWJBcmVhUmVjdC5oZWlnaHQsXHJcbiAgICB4OiBvZmZzZXRYLFxyXG4gICAgeTogb2Zmc2V0WVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBib3VuZHM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZGltZW5zaW9ucyBvZiB0aHVtYm5haWwgaW1hZ2VcclxuICogKGNsaWNrIG9uIHdoaWNoIG9wZW5zIHBob3Rvc3dpcGUgb3IgY2xvc2VzIHBob3Rvc3dpcGUgdG8pXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGFcclxuICogQHBhcmFtIHtQaG90b1N3aXBlfSBpbnN0YW5jZSBQaG90b1N3aXBlIGluc3RhbmNlXHJcbiAqIEByZXR1cm5zIHtCb3VuZHMgfCB1bmRlZmluZWR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUaHVtYkJvdW5kcyhpbmRleCwgaXRlbURhdGEsIGluc3RhbmNlKSB7XHJcbiAgLy8gbGVnYWN5IGV2ZW50LCBiZWZvcmUgZmlsdGVycyB3ZXJlIGludHJvZHVjZWRcclxuICBjb25zdCBldmVudCA9IGluc3RhbmNlLmRpc3BhdGNoKCd0aHVtYkJvdW5kcycsIHtcclxuICAgIGluZGV4LFxyXG4gICAgaXRlbURhdGEsXHJcbiAgICBpbnN0YW5jZVxyXG4gIH0pO1xyXG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICBpZiAoZXZlbnQudGh1bWJCb3VuZHMpIHtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHJldHVybiBldmVudC50aHVtYkJvdW5kcztcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZWxlbWVudCB9ID0gaXRlbURhdGE7XHJcbiAgLyoqIEB0eXBlIHtCb3VuZHMgfCB1bmRlZmluZWR9ICovXHJcbiAgbGV0IHRodW1iQm91bmRzO1xyXG4gIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xyXG4gIGxldCB0aHVtYm5haWw7XHJcblxyXG4gIGlmIChlbGVtZW50ICYmIGluc3RhbmNlLm9wdGlvbnMudGh1bWJTZWxlY3RvciAhPT0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHRodW1iU2VsZWN0b3IgPSBpbnN0YW5jZS5vcHRpb25zLnRodW1iU2VsZWN0b3IgfHwgJ2ltZyc7XHJcbiAgICB0aHVtYm5haWwgPSBlbGVtZW50Lm1hdGNoZXModGh1bWJTZWxlY3RvcilcclxuICAgICAgPyBlbGVtZW50IDogLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9ICovIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGh1bWJTZWxlY3RvcikpO1xyXG4gIH1cclxuXHJcbiAgdGh1bWJuYWlsID0gaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKCd0aHVtYkVsJywgdGh1bWJuYWlsLCBpdGVtRGF0YSwgaW5kZXgpO1xyXG5cclxuICBpZiAodGh1bWJuYWlsKSB7XHJcbiAgICBpZiAoIWl0ZW1EYXRhLnRodW1iQ3JvcHBlZCkge1xyXG4gICAgICB0aHVtYkJvdW5kcyA9IGdldEJvdW5kc0J5RWxlbWVudCh0aHVtYm5haWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGh1bWJCb3VuZHMgPSBnZXRDcm9wcGVkQm91bmRzQnlFbGVtZW50KFxyXG4gICAgICAgIHRodW1ibmFpbCxcclxuICAgICAgICBpdGVtRGF0YS53aWR0aCB8fCBpdGVtRGF0YS53IHx8IDAsXHJcbiAgICAgICAgaXRlbURhdGEuaGVpZ2h0IHx8IGl0ZW1EYXRhLmggfHwgMFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGluc3RhbmNlLmFwcGx5RmlsdGVycygndGh1bWJCb3VuZHMnLCB0aHVtYkJvdW5kcywgaXRlbURhdGEsIGluZGV4KTtcclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2xpZ2h0Ym94L2xpZ2h0Ym94LmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUxpZ2h0Ym94ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBob3RvU3dpcGVPcHRpb25zfSBQaG90b1N3aXBlT3B0aW9ucyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLkRhdGFTb3VyY2V9IERhdGFTb3VyY2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3VpL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9jb250ZW50LmpzJykuZGVmYXVsdH0gQ29udGVudERlZmF1bHQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3pvb20tbGV2ZWwuanMnKS5kZWZhdWx0fSBab29tTGV2ZWwgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL2dldC10aHVtYi1ib3VuZHMuanMnKS5Cb3VuZHN9IEJvdW5kcyAqL1xyXG5cclxuLyoqXHJcbiAqIEFsbG93IGFkZGluZyBhbiBhcmJpdHJhcnkgcHJvcHMgdG8gdGhlIENvbnRlbnRcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9jdXN0b20tY29udGVudC8jdXNpbmctd2VicC1pbWFnZS1mb3JtYXRcclxuICogQHR5cGVkZWYge0NvbnRlbnREZWZhdWx0ICYgUmVjb3JkPHN0cmluZywgYW55Pn0gQ29udGVudFxyXG4gKi9cclxuLyoqIEB0eXBlZGVmIHt7IHg/OiBudW1iZXI7IHk/OiBudW1iZXIgfX0gUG9pbnQgKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQaG90b1N3aXBlRXZlbnRzTWFwIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzL1xyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2FkZGluZy11aS1lbGVtZW50cy9cclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gdWlSZWdpc3RlclxyXG4gKiBAcHJvcCB7eyBkYXRhOiBVSUVsZW1lbnREYXRhIH19IHVpRWxlbWVudENyZWF0ZVxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jaW5pdGlhbGl6YXRpb24tZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGJlZm9yZU9wZW5cclxuICogQHByb3Age3VuZGVmaW5lZH0gZmlyc3RVcGRhdGVcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbExheW91dFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjaGFuZ2VcclxuICogQHByb3Age3VuZGVmaW5lZH0gYWZ0ZXJJbml0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGJpbmRFdmVudHNcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI29wZW5pbmctb3ItY2xvc2luZy10cmFuc2l0aW9uLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBvcGVuaW5nQW5pbWF0aW9uU3RhcnRcclxuICogQHByb3Age3VuZGVmaW5lZH0gb3BlbmluZ0FuaW1hdGlvbkVuZFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zaW5nQW5pbWF0aW9uU3RhcnRcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2xvc2luZ0FuaW1hdGlvbkVuZFxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jY2xvc2luZy1ldmVudHNcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gY2xvc2VcclxuICogQHByb3Age3VuZGVmaW5lZH0gZGVzdHJveVxyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jcG9pbnRlci1hbmQtZ2VzdHVyZS1ldmVudHNcclxuICpcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHBvaW50ZXJEb3duXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBwb2ludGVyTW92ZVxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gcG9pbnRlclVwXHJcbiAqIEBwcm9wIHt7IGJnT3BhY2l0eTogbnVtYmVyIH19IHBpbmNoQ2xvc2UgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBhblk6IG51bWJlciB9fSB2ZXJ0aWNhbERyYWcgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNzbGlkZS1jb250ZW50LWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRJbml0XHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IGlzTGF6eTogYm9vbGVhbiB9fSBjb250ZW50TG9hZCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgaXNMYXp5OiBib29sZWFuIH19IGNvbnRlbnRMb2FkSW1hZ2UgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHNsaWRlOiBTbGlkZTsgaXNFcnJvcj86IGJvb2xlYW4gfX0gbG9hZENvbXBsZXRlXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQ7IHNsaWRlOiBTbGlkZSB9fSBsb2FkRXJyb3JcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfX0gY29udGVudFJlc2l6ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHNsaWRlOiBTbGlkZSB9fSBpbWFnZVNpemVDaGFuZ2VcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50TGF6eUxvYWQgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEFwcGVuZCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QWN0aXZhdGUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudERlYWN0aXZhdGUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudFJlbW92ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50RGVzdHJveSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICpcclxuICpcclxuICogdW5kb2N1bWVudGVkXHJcbiAqXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IGltYWdlQ2xpY2tBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IGJnQ2xpY2tBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHBvaW50OiBQb2ludDsgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHRhcEFjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gZG91YmxlVGFwQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKlxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBLZXlib2FyZEV2ZW50IH19IGtleWRvd24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHg6IG51bWJlcjsgZHJhZ2dpbmc6IGJvb2xlYW4gfX0gbW92ZU1haW5TY3JvbGxcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGZpcnN0Wm9vbVBhblxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfCB1bmRlZmluZWQsIGRhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlciB9fSBnZXR0aW5nRGF0YVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBiZWZvcmVSZXNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gcmVzaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHZpZXdwb3J0U2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSB1cGRhdGVTY3JvbGxPZmZzZXRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlSW5pdFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gYWZ0ZXJTZXRDb250ZW50XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZUxvYWRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGFwcGVuZEhlYXZ5IGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gYXBwZW5kSGVhdnlDb250ZW50XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZUFjdGl2YXRlXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBzbGlkZURlYWN0aXZhdGVcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlRGVzdHJveVxyXG4gKiBAcHJvcCB7eyBkZXN0Wm9vbUxldmVsOiBudW1iZXIsIGNlbnRlclBvaW50OiBQb2ludCB8IHVuZGVmaW5lZCwgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgfCBmYWxzZSB8IHVuZGVmaW5lZCB9fSBiZWZvcmVab29tVG9cclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHpvb21QYW5VcGRhdGVcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGluaXRpYWxab29tUGFuXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBjYWxjU2xpZGVTaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHJlc29sdXRpb25DaGFuZ2VkXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFdoZWVsRXZlbnQgfX0gd2hlZWwgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEFwcGVuZEltYWdlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBpbmRleDogbnVtYmVyOyBpdGVtRGF0YTogU2xpZGVEYXRhIH19IGxhenlMb2FkU2xpZGUgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGxhenlMb2FkXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBjYWxjQm91bmRzXHJcbiAqIEBwcm9wIHt7IHpvb21MZXZlbHM6IFpvb21MZXZlbCwgc2xpZGVEYXRhOiBTbGlkZURhdGEgfX0gem9vbUxldmVsc1VwZGF0ZVxyXG4gKlxyXG4gKlxyXG4gKiBsZWdhY3lcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbUluXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tT3V0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tSW5FbmRcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21PdXRFbmRcclxuICogQHByb3Age3sgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSB8IHVuZGVmaW5lZCwgbnVtSXRlbXM6IG51bWJlciB9fSBudW1JdGVtc1xyXG4gKiBAcHJvcCB7eyBpdGVtRGF0YTogU2xpZGVEYXRhOyBpbmRleDogbnVtYmVyIH19IGl0ZW1EYXRhXHJcbiAqIEBwcm9wIHt7IGluZGV4OiBudW1iZXIsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluc3RhbmNlOiBQaG90b1N3aXBlIH19IHRodW1iQm91bmRzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBob3RvU3dpcGVGaWx0ZXJzTWFwIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy9cclxuICpcclxuICogQHByb3AgeyhudW1JdGVtczogbnVtYmVyLCBkYXRhU291cmNlOiBEYXRhU291cmNlIHwgdW5kZWZpbmVkKSA9PiBudW1iZXJ9IG51bUl0ZW1zXHJcbiAqIE1vZGlmeSB0aGUgdG90YWwgYW1vdW50IG9mIHNsaWRlcy4gRXhhbXBsZSBvbiBEYXRhIHNvdXJjZXMgcGFnZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNudW1pdGVtc1xyXG4gKlxyXG4gKiBAcHJvcCB7KGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IFNsaWRlRGF0YX0gaXRlbURhdGFcclxuICogTW9kaWZ5IHNsaWRlIGl0ZW0gZGF0YS4gRXhhbXBsZSBvbiBEYXRhIHNvdXJjZXMgcGFnZS5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpdGVtZGF0YVxyXG4gKlxyXG4gKiBAcHJvcCB7KGl0ZW1EYXRhOiBTbGlkZURhdGEsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBsaW5rRWw6IEhUTUxBbmNob3JFbGVtZW50KSA9PiBTbGlkZURhdGF9IGRvbUl0ZW1EYXRhXHJcbiAqIE1vZGlmeSBpdGVtIGRhdGEgd2hlbiBpdCdzIHBhcnNlZCBmcm9tIERPTSBlbGVtZW50LiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2RvbWl0ZW1kYXRhXHJcbiAqXHJcbiAqIEBwcm9wIHsoY2xpY2tlZEluZGV4OiBudW1iZXIsIGU6IE1vdXNlRXZlbnQsIGluc3RhbmNlOiBQaG90b1N3aXBlTGlnaHRib3gpID0+IG51bWJlcn0gY2xpY2tlZEluZGV4XHJcbiAqIE1vZGlmeSBjbGlja2VkIGdhbGxlcnkgaXRlbSBpbmRleC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNjbGlja2VkaW5kZXhcclxuICpcclxuICogQHByb3AgeyhwbGFjZWhvbGRlclNyYzogc3RyaW5nIHwgZmFsc2UsIGNvbnRlbnQ6IENvbnRlbnQpID0+IHN0cmluZyB8IGZhbHNlfSBwbGFjZWhvbGRlclNyY1xyXG4gKiBNb2RpZnkgcGxhY2Vob2xkZXIgaW1hZ2Ugc291cmNlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3BsYWNlaG9sZGVyc3JjXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNDb250ZW50TG9hZGluZzogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gaXNDb250ZW50TG9hZGluZ1xyXG4gKiBNb2RpZnkgaWYgdGhlIGNvbnRlbnQgaXMgY3VycmVudGx5IGxvYWRpbmcuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jaXNjb250ZW50bG9hZGluZ1xyXG4gKlxyXG4gKiBAcHJvcCB7KGlzQ29udGVudFpvb21hYmxlOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSBpc0NvbnRlbnRab29tYWJsZVxyXG4gKiBNb2RpZnkgaWYgdGhlIGNvbnRlbnQgY2FuIGJlIHpvb21lZC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpc2NvbnRlbnR6b29tYWJsZVxyXG4gKlxyXG4gKiBAcHJvcCB7KHVzZUNvbnRlbnRQbGFjZWhvbGRlcjogYm9vbGVhbiwgY29udGVudDogQ29udGVudCkgPT4gYm9vbGVhbn0gdXNlQ29udGVudFBsYWNlaG9sZGVyXHJcbiAqIE1vZGlmeSBpZiB0aGUgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBjb250ZW50LlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3VzZWNvbnRlbnRwbGFjZWhvbGRlclxyXG4gKlxyXG4gKiBAcHJvcCB7KGlzS2VlcGluZ1BsYWNlaG9sZGVyOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSBpc0tlZXBpbmdQbGFjZWhvbGRlclxyXG4gKiBNb2RpZnkgaWYgdGhlIHBsYWNlaG9sZGVyIHNob3VsZCBiZSBrZXB0IGFmdGVyIHRoZSBjb250ZW50IGlzIGxvYWRlZC5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpc2tlZXBpbmdwbGFjZWhvbGRlclxyXG4gKlxyXG4gKlxyXG4gKiBAcHJvcCB7KGNvbnRlbnRFcnJvckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb250ZW50OiBDb250ZW50KSA9PiBIVE1MRWxlbWVudH0gY29udGVudEVycm9yRWxlbWVudFxyXG4gKiBNb2RpZnkgYW4gZWxlbWVudCB3aGVuIHRoZSBjb250ZW50IGhhcyBlcnJvciBzdGF0ZSAoZm9yIGV4YW1wbGUsIGlmIGltYWdlIGNhbm5vdCBiZSBsb2FkZWQpLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2NvbnRlbnRlcnJvcmVsZW1lbnRcclxuICpcclxuICogQHByb3AgeyhlbGVtZW50OiBIVE1MRWxlbWVudCwgZGF0YTogVUlFbGVtZW50RGF0YSkgPT4gSFRNTEVsZW1lbnR9IHVpRWxlbWVudFxyXG4gKiBNb2RpZnkgYSBVSSBlbGVtZW50IHRoYXQncyBiZWluZyBjcmVhdGVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3VpZWxlbWVudFxyXG4gKlxyXG4gKiBAcHJvcCB7KHRodW1ibmFpbDogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBIVE1MRWxlbWVudH0gdGh1bWJFbFxyXG4gKiBNb2RpZnkgdGhlIHRodWJtbmFpbCBlbGVtZW50IGZyb20gd2hpY2ggb3BlbmluZyB6b29tIGFuaW1hdGlvbiBzdGFydHMgb3IgZW5kcy5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyN0aHVtYmVsXHJcbiAqXHJcbiAqIEBwcm9wIHsodGh1bWJCb3VuZHM6IEJvdW5kcyB8IHVuZGVmaW5lZCwgaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlcikgPT4gQm91bmRzfSB0aHVtYkJvdW5kc1xyXG4gKiBNb2RpZnkgdGhlIHRodWJtbmFpbCBib3VuZHMgZnJvbSB3aGljaCBvcGVuaW5nIHpvb20gYW5pbWF0aW9uIHN0YXJ0cyBvciBlbmRzLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3RodW1iYm91bmRzXHJcbiAqXHJcbiAqIEBwcm9wIHsoc3Jjc2V0U2l6ZXNXaWR0aDogbnVtYmVyLCBjb250ZW50OiBDb250ZW50KSA9PiBudW1iZXJ9IHNyY3NldFNpemVzV2lkdGhcclxuICpcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7eyBmbjogUGhvdG9Td2lwZUZpbHRlcnNNYXBbVF0sIHByaW9yaXR5OiBudW1iZXIgfX0gRmlsdGVyXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7UGhvdG9Td2lwZUV2ZW50c01hcFtUXSBleHRlbmRzIHVuZGVmaW5lZCA/IFBob3RvU3dpcGVFdmVudDxUPiA6IFBob3RvU3dpcGVFdmVudDxUPiAmIFBob3RvU3dpcGVFdmVudHNNYXBbVF19IEF1Z21lbnRlZEV2ZW50XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKiBAdHlwZWRlZiB7KGV2ZW50OiBBdWdtZW50ZWRFdmVudDxUPikgPT4gdm9pZH0gRXZlbnRDYWxsYmFja1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBCYXNlIFBob3RvU3dpcGUgZXZlbnQgb2JqZWN0XHJcbiAqXHJcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZUV2ZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1R9IHR5cGVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVFdmVudHNNYXBbVF19IFtkZXRhaWxzXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGRldGFpbHMpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcclxuICAgIGlmIChkZXRhaWxzKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGV0YWlscyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgpIHtcclxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUGhvdG9Td2lwZSBiYXNlIGNsYXNzIHRoYXQgY2FuIGxpc3RlbiBhbmQgZGlzcGF0Y2ggZm9yIGV2ZW50cy5cclxuICogU2hhcmVkIGJ5IFBob3RvU3dpcGUgQ29yZSBhbmQgUGhvdG9Td2lwZSBMaWdodGJveCwgZXh0ZW5kZWQgYnkgYmFzZS5qc1xyXG4gKi9cclxuY2xhc3MgRXZlbnRhYmxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge3sgW1QgaW4ga2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcF0/OiAoKGV2ZW50OiBBdWdtZW50ZWRFdmVudDxUPikgPT4gdm9pZClbXSB9fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHt7IFtUIGluIGtleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwXT86IEZpbHRlcjxUPltdIH19XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2ZpbHRlcnMgPSB7fTtcclxuXHJcbiAgICAvKiogQHR5cGUge1Bob3RvU3dpcGUgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnBzd3AgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtQaG90b1N3aXBlT3B0aW9ucyB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMub3B0aW9ucyA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVGaWx0ZXJzTWFwW1RdfSBmblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwcmlvcml0eVxyXG4gICAqL1xyXG4gIGFkZEZpbHRlcihuYW1lLCBmbiwgcHJpb3JpdHkgPSAxMDApIHtcclxuICAgIGlmICghdGhpcy5fZmlsdGVyc1tuYW1lXSkge1xyXG4gICAgICB0aGlzLl9maWx0ZXJzW25hbWVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8ucHVzaCh7IGZuLCBwcmlvcml0eSB9KTtcclxuICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LnNvcnQoKGYxLCBmMikgPT4gZjEucHJpb3JpdHkgLSBmMi5wcmlvcml0eSk7XHJcblxyXG4gICAgdGhpcy5wc3dwPy5hZGRGaWx0ZXIobmFtZSwgZm4sIHByaW9yaXR5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVGaWx0ZXJzTWFwW1RdfSBmblxyXG4gICAqL1xyXG4gIHJlbW92ZUZpbHRlcihuYW1lLCBmbikge1xyXG4gICAgaWYgKHRoaXMuX2ZpbHRlcnNbbmFtZV0pIHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICB0aGlzLl9maWx0ZXJzW25hbWVdID0gdGhpcy5fZmlsdGVyc1tuYW1lXS5maWx0ZXIoZmlsdGVyID0+IChmaWx0ZXIuZm4gIT09IGZuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cCkge1xyXG4gICAgICB0aGlzLnBzd3AucmVtb3ZlRmlsdGVyKG5hbWUsIGZuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge1BhcmFtZXRlcnM8UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF0+fSBhcmdzXHJcbiAgICogQHJldHVybnMge1BhcmFtZXRlcnM8UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF0+WzBdfVxyXG4gICAqL1xyXG4gIGFwcGx5RmlsdGVycyhuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICBhcmdzWzBdID0gZmlsdGVyLmZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJnc1swXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFjazxUPn0gZm5cclxuICAgKi9cclxuICBvbihuYW1lLCBmbikge1xyXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0/LnB1c2goZm4pO1xyXG5cclxuICAgIC8vIFdoZW4gYmluZGluZyBldmVudHMgdG8gbGlnaHRib3gsXHJcbiAgICAvLyBhbHNvIGJpbmQgZXZlbnRzIHRvIFBob3RvU3dpcGUgQ29yZSxcclxuICAgIC8vIGlmIGl0J3Mgb3Blbi5cclxuICAgIHRoaXMucHN3cD8ub24obmFtZSwgZm4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrPFQ+fSBmblxyXG4gICAqL1xyXG4gIG9mZihuYW1lLCBmbikge1xyXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXS5maWx0ZXIobGlzdGVuZXIgPT4gKGZuICE9PSBsaXN0ZW5lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHN3cD8ub2ZmKG5hbWUsIGZuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0ZW1wbGF0ZSB7a2V5b2YgUGhvdG9Td2lwZUV2ZW50c01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gW2RldGFpbHNdXHJcbiAgICogQHJldHVybnMge0F1Z21lbnRlZEV2ZW50PFQ+fVxyXG4gICAqL1xyXG4gIGRpc3BhdGNoKG5hbWUsIGRldGFpbHMpIHtcclxuICAgIGlmICh0aGlzLnBzd3ApIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHN3cC5kaXNwYXRjaChuYW1lLCBkZXRhaWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBldmVudCA9IC8qKiBAdHlwZSB7QXVnbWVudGVkRXZlbnQ8VD59ICovIChuZXcgUGhvdG9Td2lwZUV2ZW50KG5hbWUsIGRldGFpbHMpKTtcclxuXHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0/LmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUGxhY2Vob2xkZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgZmFsc2V9IGltYWdlU3JjXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VTcmMsIGNvbnRhaW5lcikge1xyXG4gICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyXHJcbiAgICAvLyAoc3RyZXRjaGVkIHRodW1ibmFpbCBvciBzaW1wbGUgZGl2IGJlaGluZCB0aGUgbWFpbiBpbWFnZSlcclxuICAgIC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50IHwgbnVsbH0gKi9cclxuICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICdwc3dwX19pbWcgcHN3cF9faW1nLS1wbGFjZWhvbGRlcicsXHJcbiAgICAgIGltYWdlU3JjID8gJ2ltZycgOiAnZGl2JyxcclxuICAgICAgY29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChpbWFnZVNyYykge1xyXG4gICAgICBjb25zdCBpbWdFbCA9IC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudH0gKi8gKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIGltZ0VsLmRlY29kaW5nID0gJ2FzeW5jJztcclxuICAgICAgaW1nRWwuYWx0ID0gJyc7XHJcbiAgICAgIGltZ0VsLnNyYyA9IGltYWdlU3JjO1xyXG4gICAgICBpbWdFbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNldERpc3BsYXllZFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0lNRycpIHtcclxuICAgICAgLy8gVXNlIHRyYW5zZm9ybSBzY2FsZSgpIHRvIG1vZGlmeSBpbWcgcGxhY2Vob2xkZXIgc2l6ZVxyXG4gICAgICAvLyAoaW5zdGVhZCBvZiBjaGFuZ2luZyB3aWR0aC9oZWlnaHQgZGlyZWN0bHkpLlxyXG4gICAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyZm9ybWFuY2UsIHNwZWNpZmljYWxseSBpbiBpT1MxNSBTYWZhcmkuXHJcbiAgICAgIHNldFdpZHRoSGVpZ2h0KHRoaXMuZWxlbWVudCwgMjUwLCAnYXV0bycpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJzAgMCc7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0b1RyYW5zZm9ybVN0cmluZygwLCAwLCB3aWR0aCAvIDI1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRXaWR0aEhlaWdodCh0aGlzLmVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnQ/LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9iYXNlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUJhc2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3V0aWwvdXRpbC5qcycpLkxvYWRTdGF0ZX0gTG9hZFN0YXRlICovXHJcblxyXG5jbGFzcyBDb250ZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgU2xpZGUgZGF0YVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IGluc3RhbmNlIFBob3RvU3dpcGUgb3IgUGhvdG9Td2lwZUxpZ2h0Ym94IGluc3RhbmNlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaXRlbURhdGEsIGluc3RhbmNlLCBpbmRleCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgdGhpcy5kYXRhID0gaXRlbURhdGE7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHR5cGUge1BsYWNlaG9sZGVyIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGUgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnNsaWRlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmRpc3BsYXllZEltYWdlSGVpZ2h0ID0gMDtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gTnVtYmVyKHRoaXMuZGF0YS53KSB8fCBOdW1iZXIodGhpcy5kYXRhLndpZHRoKSB8fCAwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBOdW1iZXIodGhpcy5kYXRhLmgpIHx8IE51bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSB8fCAwO1xyXG5cclxuICAgIHRoaXMuaXNBdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0RlY29kaW5nID0gZmFsc2U7XHJcbiAgICAvKiogQHR5cGUge0xvYWRTdGF0ZX0gKi9cclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLklETEU7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS50eXBlKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9IHRoaXMuZGF0YS50eXBlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuc3JjKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9ICdpbWFnZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnR5cGUgPSAnaHRtbCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEluaXQnLCB7IGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQbGFjZWhvbGRlcigpIHtcclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmICF0aGlzLmtlZXBQbGFjZWhvbGRlcigpKSB7XHJcbiAgICAgIC8vIFdpdGggZGVsYXksIGFzIGltYWdlIG1pZ2h0IGJlIGxvYWRlZCwgYnV0IG5vdCByZW5kZXJlZFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkIGNvbnRlbnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYXp5XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVsb2FkXVxyXG4gICAqL1xyXG4gIGxvYWQoaXNMYXp5LCByZWxvYWQpIHtcclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMudXNlUGxhY2Vob2xkZXIoKSkge1xyXG4gICAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlclNyYyA9IHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyU3JjJyxcclxuICAgICAgICAgIC8vIHVzZSAgaW1hZ2UtYmFzZWQgcGxhY2Vob2xkZXIgb25seSBmb3IgdGhlIGZpcnN0IHNsaWRlLFxyXG4gICAgICAgICAgLy8gYXMgcmVuZGVyaW5nIChldmVuIHNtYWxsIHN0cmV0Y2hlZCB0aHVtYm5haWwpIGlzIGFuIGV4cGVuc2l2ZSBvcGVyYXRpb25cclxuICAgICAgICAgICh0aGlzLmRhdGEubXNyYyAmJiB0aGlzLnNsaWRlLmlzRmlyc3RTbGlkZSkgPyB0aGlzLmRhdGEubXNyYyA6IGZhbHNlLFxyXG4gICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IG5ldyBQbGFjZWhvbGRlcihcclxuICAgICAgICAgIHBsYWNlaG9sZGVyU3JjLFxyXG4gICAgICAgICAgdGhpcy5zbGlkZS5jb250YWluZXJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyRWwgPSB0aGlzLnBsYWNlaG9sZGVyLmVsZW1lbnQ7XHJcbiAgICAgICAgLy8gQWRkIHBsYWNlaG9sZGVyIHRvIERPTSBpZiBpdCB3YXMgYWxyZWFkeSBjcmVhdGVkXHJcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyRWwgJiYgIXBsYWNlaG9sZGVyRWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIucHJlcGVuZChwbGFjZWhvbGRlckVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50ICYmICFyZWxvYWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50TG9hZCcsIHsgY29udGVudDogdGhpcywgaXNMYXp5IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cF9faW1nJywgJ2ltZycpO1xyXG4gICAgICAvLyBTdGFydCBsb2FkaW5nIG9ubHkgYWZ0ZXIgd2lkdGggaXMgZGVmaW5lZCwgYXMgc2l6ZXMgbWlnaHQgZGVwZW5kIG9uIGl0LlxyXG4gICAgICAvLyBEdWUgdG8gU2FmYXJpIGZlYXR1cmUsIHdlIG11c3QgZGVmaW5lIHNpemVzIGJlZm9yZSBzcmNzZXQuXHJcbiAgICAgIGlmICh0aGlzLmRpc3BsYXllZEltYWdlV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZShpc0xhenkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19jb250ZW50JywgJ2RpdicpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5kYXRhLmh0bWwgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlbG9hZCAmJiB0aGlzLnNsaWRlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGUudXBkYXRlQ29udGVudFNpemUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVsb2FkIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTGF6eVxyXG4gICAqL1xyXG4gIGxvYWRJbWFnZShpc0xhenkpIHtcclxuICAgIGlmICghdGhpcy5pc0ltYWdlQ29udGVudCgpXHJcbiAgICAgIHx8ICF0aGlzLmVsZW1lbnRcclxuICAgICAgfHwgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudExvYWRJbWFnZScsIHsgY29udGVudDogdGhpcywgaXNMYXp5IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IC8qKiBAdHlwZSBIVE1MSW1hZ2VFbGVtZW50ICovICh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3Jjc2V0U2l6ZXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnNyY3NldCkge1xyXG4gICAgICBpbWFnZUVsZW1lbnQuc3Jjc2V0ID0gdGhpcy5kYXRhLnNyY3NldDtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5kYXRhLnNyYyA/PyAnJztcclxuICAgIGltYWdlRWxlbWVudC5hbHQgPSB0aGlzLmRhdGEuYWx0ID8/ICcnO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLkxPQURJTkc7XHJcblxyXG4gICAgaWYgKGltYWdlRWxlbWVudC5jb21wbGV0ZSkge1xyXG4gICAgICB0aGlzLm9uTG9hZGVkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbWFnZUVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25Mb2FkZWQoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGltYWdlRWxlbWVudC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FcnJvcigpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXNzaWduIHNsaWRlIHRvIGNvbnRlbnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U2xpZGV9IHNsaWRlXHJcbiAgICovXHJcbiAgc2V0U2xpZGUoc2xpZGUpIHtcclxuICAgIHRoaXMuc2xpZGUgPSBzbGlkZTtcclxuICAgIHRoaXMuaGFzU2xpZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IHNsaWRlLnBzd3A7XHJcblxyXG4gICAgLy8gRG15dHJvIFNlbWVub3Y6IGRvIHdlIG5lZWQgdG8gdW5zZXQgc2xpZGU/XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250ZW50IGxvYWQgc3VjY2VzcyBoYW5kbGVyXHJcbiAgICovXHJcbiAgb25Mb2FkZWQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5MT0FERUQ7XHJcblxyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2xvYWRDb21wbGV0ZScsIHsgc2xpZGU6IHRoaXMuc2xpZGUsIGNvbnRlbnQ6IHRoaXMgfSk7XHJcblxyXG4gICAgICAvLyBpZiBjb250ZW50IGlzIHJlbG9hZGVkXHJcbiAgICAgIGlmICh0aGlzLnNsaWRlLmlzQWN0aXZlXHJcbiAgICAgICAgJiYgdGhpcy5zbGlkZS5oZWF2eUFwcGVuZGVkXHJcbiAgICAgICAgJiYgIXRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQoKTtcclxuICAgICAgICB0aGlzLnNsaWRlLnVwZGF0ZUNvbnRlbnRTaXplKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5MT0FERUQgfHwgdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGVudCBsb2FkIGVycm9yIGhhbmRsZXJcclxuICAgKi9cclxuICBvbkVycm9yKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuRVJST1I7XHJcblxyXG4gICAgaWYgKHRoaXMuc2xpZGUpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoKTtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnbG9hZENvbXBsZXRlJywgeyBzbGlkZTogdGhpcy5zbGlkZSwgaXNFcnJvcjogdHJ1ZSwgY29udGVudDogdGhpcyB9KTtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnbG9hZEVycm9yJywgeyBzbGlkZTogdGhpcy5zbGlkZSwgY29udGVudDogdGhpcyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgY29udGVudCBpcyBjdXJyZW50bHkgbG9hZGluZ1xyXG4gICAqL1xyXG4gIGlzTG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ2lzQ29udGVudExvYWRpbmcnLFxyXG4gICAgICB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURJTkcsXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgaXMgaW4gZXJyb3Igc3RhdGVcclxuICAgKi9cclxuICBpc0Vycm9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuRVJST1I7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgdGhlIGNvbnRlbnQgaXMgaW1hZ2VcclxuICAgKi9cclxuICBpc0ltYWdlQ29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdpbWFnZSc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgY29udGVudCBzaXplXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKFxyXG4gICAgICAnY29udGVudFJlc2l6ZScsXHJcbiAgICAgIHsgY29udGVudDogdGhpcywgd2lkdGgsIGhlaWdodCB9KS5kZWZhdWx0UHJldmVudGVkXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpZHRoSGVpZ2h0KHRoaXMuZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiAhdGhpcy5pc0Vycm9yKCkpIHtcclxuICAgICAgY29uc3QgaXNJbml0aWFsU2l6ZVVwZGF0ZSA9ICghdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoICYmIHdpZHRoKTtcclxuXHJcbiAgICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmRpc3BsYXllZEltYWdlSGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGlzSW5pdGlhbFNpemVVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZShmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTcmNzZXRTaXplcygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goXHJcbiAgICAgICAgICAnaW1hZ2VTaXplQ2hhbmdlJyxcclxuICAgICAgICAgIHsgc2xpZGU6IHRoaXMuc2xpZGUsIHdpZHRoLCBoZWlnaHQsIGNvbnRlbnQ6IHRoaXMgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiB0aGUgY29udGVudCBjYW4gYmUgem9vbWVkXHJcbiAgICovXHJcbiAgaXNab29tYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ2lzQ29udGVudFpvb21hYmxlJyxcclxuICAgICAgdGhpcy5pc0ltYWdlQ29udGVudCgpICYmICh0aGlzLnN0YXRlICE9PSBMT0FEX1NUQVRFLkVSUk9SKSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBpbWFnZSBzcmNzZXQgc2l6ZXMgYXR0cmlidXRlIGJhc2VkIG9uIHdpZHRoIGFuZCBoZWlnaHRcclxuICAgKi9cclxuICB1cGRhdGVTcmNzZXRTaXplcygpIHtcclxuICAgIC8vIEhhbmRsZSBzcmNzZXQgc2l6ZXMgYXR0cmlidXRlLlxyXG4gICAgLy9cclxuICAgIC8vIE5ldmVyIGxvd2VyIHF1YWxpdHksIGlmIGl0IHdhcyBpbmNyZWFzZWQgcHJldmlvdXNseS5cclxuICAgIC8vIENocm9tZSBkb2VzIHRoaXMgYXV0b21hdGljYWxseSwgRmlyZWZveCBhbmQgU2FmYXJpIGRvIG5vdCxcclxuICAgIC8vIHNvIHdlIHN0b3JlIGxhcmdlc3QgdXNlZCBzaXplIGluIGRhdGFzZXQuXHJcbiAgICBpZiAoIXRoaXMuaXNJbWFnZUNvbnRlbnQoKSB8fCAhdGhpcy5lbGVtZW50IHx8ICF0aGlzLmRhdGEuc3Jjc2V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IC8qKiBAdHlwZSBIVE1MSW1hZ2VFbGVtZW50ICovICh0aGlzLmVsZW1lbnQpO1xyXG4gICAgY29uc3Qgc2l6ZXNXaWR0aCA9IHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnc3Jjc2V0U2l6ZXNXaWR0aCcsXHJcbiAgICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFpbWFnZS5kYXRhc2V0Lmxhcmdlc3RVc2VkU2l6ZVxyXG4gICAgICB8fCBzaXplc1dpZHRoID4gcGFyc2VJbnQoaW1hZ2UuZGF0YXNldC5sYXJnZXN0VXNlZFNpemUsIDEwKVxyXG4gICAgKSB7XHJcbiAgICAgIGltYWdlLnNpemVzID0gc2l6ZXNXaWR0aCArICdweCc7XHJcbiAgICAgIGltYWdlLmRhdGFzZXQubGFyZ2VzdFVzZWRTaXplID0gU3RyaW5nKHNpemVzV2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIGNvbnRlbnQgc2hvdWxkIHVzZSBhIHBsYWNlaG9sZGVyIChmcm9tIG1zcmMgYnkgZGVmYXVsdClcclxuICAgKi9cclxuICB1c2VQbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ3VzZUNvbnRlbnRQbGFjZWhvbGRlcicsXHJcbiAgICAgIHRoaXMuaXNJbWFnZUNvbnRlbnQoKSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgY29udGVudCB3aXRoIGxhenktbG9hZGluZyBwYXJhbVxyXG4gICAqL1xyXG4gIGxhenlMb2FkKCkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRMYXp5TG9hZCcsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIGtlcHQgYWZ0ZXIgY29udGVudCBpcyBsb2FkZWRcclxuICAgKi9cclxuICBrZWVwUGxhY2Vob2xkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdpc0tlZXBpbmdQbGFjZWhvbGRlcicsXHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nKCksXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuaGFzU2xpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2xpZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnREZXN0cm95JywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlci5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm9ubG9hZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5vbmVycm9yID0gbnVsbDtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBlcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgZGlzcGxheUVycm9yKCkge1xyXG4gICAgaWYgKHRoaXMuc2xpZGUpIHtcclxuICAgICAgbGV0IGVycm9yTXNnRWwgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19lcnJvci1tc2cnLCAnZGl2Jyk7XHJcbiAgICAgIGVycm9yTXNnRWwuaW5uZXJUZXh0ID0gdGhpcy5pbnN0YW5jZS5vcHRpb25zPy5lcnJvck1zZyA/PyAnJztcclxuICAgICAgZXJyb3JNc2dFbCA9IC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovICh0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgICAnY29udGVudEVycm9yRWxlbWVudCcsXHJcbiAgICAgICAgZXJyb3JNc2dFbCxcclxuICAgICAgICB0aGlzXHJcbiAgICAgICkpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19jb250ZW50IHBzd3BfX2Vycm9yLW1zZy1jb250YWluZXInLCAnZGl2Jyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlcnJvck1zZ0VsKTtcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHRoaXMuc2xpZGUuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuc2xpZGUudXBkYXRlQ29udGVudFNpemUodHJ1ZSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGFwcGVuZCgpIHtcclxuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQgfHwgIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUikge1xyXG4gICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRBcHBlbmQnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwcG9ydHNEZWNvZGUgPSAoJ2RlY29kZScgaW4gdGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpKSB7XHJcbiAgICAgIC8vIFVzZSBkZWNvZGUoKSBvbiBuZWFyYnkgc2xpZGVzXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIE5lYXJieSBzbGlkZSBpbWFnZXMgYXJlIGluIERPTSBhbmQgbm90IGhpZGRlbiB2aWEgZGlzcGxheTpub25lLlxyXG4gICAgICAvLyBIb3dldmVyLCB0aGV5IGFyZSBwbGFjZWQgb2Zmc2NyZWVuICh0byB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZSkuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIFNvbWUgYnJvd3NlcnMgZG8gbm90IGNvbXBvc2l0ZSB0aGUgaW1hZ2UgdW50aWwgaXQncyBhY3R1YWxseSB2aXNpYmxlLFxyXG4gICAgICAvLyB1c2luZyBkZWNvZGUoKSBoZWxwcy5cclxuICAgICAgLy9cclxuICAgICAgLy8gWW91IG1pZ2h0IGFzayBcIndoeSBkb250IHlvdSBqdXN0IGRlY29kZSgpIGFuZCB0aGVuIGFwcGVuZCBhbGwgaW1hZ2VzXCIsXHJcbiAgICAgIC8vIHRoYXQncyBiZWNhdXNlIEkgd2FudCB0byBzaG93IGltYWdlIGJlZm9yZSBpdCdzIGZ1bGx5IGxvYWRlZCxcclxuICAgICAgLy8gYXMgYnJvd3NlciBjYW4gcmVuZGVyIHBhcnRzIG9mIGltYWdlIHdoaWxlIGl0IGlzIGxvYWRpbmcuXHJcbiAgICAgIC8vIFdlIGRvIG5vdCBkbyB0aGlzIGluIFNhZmFyaSBkdWUgdG8gcGFydGlhbCBsb2FkaW5nIGJ1Zy5cclxuICAgICAgaWYgKHN1cHBvcnRzRGVjb2RlICYmIHRoaXMuc2xpZGUgJiYgKCF0aGlzLnNsaWRlLmlzQWN0aXZlIHx8IGlzU2FmYXJpKCkpKSB7XHJcbiAgICAgICAgdGhpcy5pc0RlY29kaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyBwdXJwb3NlZnVsbHkgdXNpbmcgZmluYWxseSBpbnN0ZWFkIG9mIHRoZW4sXHJcbiAgICAgICAgLy8gYXMgaWYgc3Jjc2V0IHNpemVzIGNoYW5nZXMgZHluYW1pY2FsbHkgLSBpdCBtYXkgY2F1c2UgZGVjb2RlIGVycm9yXHJcbiAgICAgICAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqL1xyXG4gICAgICAgICh0aGlzLmVsZW1lbnQpLmRlY29kZSgpLmNhdGNoKCgpID0+IHsgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRGVjb2RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuYXBwZW5kSW1hZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcGVuZEltYWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZSAmJiAhdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIHRoZSBzbGlkZSxcclxuICAgKiBhY3RpdmUgc2xpZGUgaXMgZ2VuZXJhbGx5IHRoZSBjdXJyZW50IG9uZSxcclxuICAgKiBtZWFuaW5nIHRoZSB1c2VyIGNhbiBzZWUgaXQuXHJcbiAgICovXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFjdGl2YXRlJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWRcclxuICAgICAgfHwgIXRoaXMuc2xpZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgdGhpcy5pc0RlY29kaW5nICYmICFpc1NhZmFyaSgpKSB7XHJcbiAgICAgIC8vIGFkZCBpbWFnZSB0byBzbGlkZSB3aGVuIGl0IGJlY29tZXMgYWN0aXZlLFxyXG4gICAgICAvLyBldmVuIGlmIGl0J3Mgbm90IGZpbmlzaGVkIGRlY29kaW5nXHJcbiAgICAgIHRoaXMuYXBwZW5kSW1hZ2UoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Vycm9yKCkpIHtcclxuICAgICAgdGhpcy5sb2FkKGZhbHNlLCB0cnVlKTsgLy8gdHJ5IHRvIHJlbG9hZFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlYWN0aXZhdGUgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudERlYWN0aXZhdGUnLCB7IGNvbnRlbnQ6IHRoaXMgfSk7XHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zbGlkZS5ob2xkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgY29udGVudCBmcm9tIERPTVxyXG4gICAqL1xyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuaXNBdHRhY2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50UmVtb3ZlJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmIHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmQgdGhlIGltYWdlIGNvbnRlbnQgdG8gc2xpZGUgY29udGFpbmVyXHJcbiAgICovXHJcbiAgYXBwZW5kSW1hZ2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRBcHBlbmRJbWFnZScsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbnN1cmUgdGhhdCBlbGVtZW50IGV4aXN0cyBhbmQgaXMgbm90IGFscmVhZHkgYXBwZW5kZWRcclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMuZWxlbWVudCAmJiAhdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5MT0FERUQgfHwgdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUikge1xyXG4gICAgICB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb250ZW50LmpzJykuZGVmYXVsdH0gQ29udGVudCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvYmFzZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVCYXNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuY29uc3QgTUlOX1NMSURFU19UT19DQUNIRSA9IDU7XHJcblxyXG4vKipcclxuICogTGF6eS1sb2FkIGFuIGltYWdlXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBib3RoIGJ5IExpZ2h0Ym94IGFuZCBQaG90b1N3aXBlIGNvcmUsXHJcbiAqIHRodXMgaXQgY2FuIGJlIGNhbGxlZCBiZWZvcmUgZGlhbG9nIGlzIG9wZW5lZC5cclxuICpcclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIERhdGEgYWJvdXQgdGhlIHNsaWRlXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IGluc3RhbmNlIFBob3RvU3dpcGUgb3IgUGhvdG9Td2lwZUxpZ2h0Ym94IGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKiBAcmV0dXJucyB7Q29udGVudH0gSW1hZ2UgdGhhdCBpcyBiZWluZyBkZWNvZGVkIG9yIGZhbHNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCBpbnN0YW5jZSwgaW5kZXgpIHtcclxuICBjb25zdCBjb250ZW50ID0gaW5zdGFuY2UuY3JlYXRlQ29udGVudEZyb21EYXRhKGl0ZW1EYXRhLCBpbmRleCk7XHJcbiAgLyoqIEB0eXBlIHtab29tTGV2ZWwgfCB1bmRlZmluZWR9ICovXHJcbiAgbGV0IHpvb21MZXZlbDtcclxuXHJcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBpbnN0YW5jZTtcclxuXHJcbiAgLy8gV2UgbmVlZCB0byBrbm93IGRpbWVuc2lvbnMgb2YgdGhlIGltYWdlIHRvIHByZWxvYWQgaXQsXHJcbiAgLy8gYXMgaXQgbWlnaHQgdXNlIHNyY3NldCwgYW5kIHdlIG5lZWQgdG8gZGVmaW5lIHNpemVzXHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHpvb21MZXZlbCA9IG5ldyBab29tTGV2ZWwob3B0aW9ucywgaXRlbURhdGEsIC0xKTtcclxuXHJcbiAgICBsZXQgdmlld3BvcnRTaXplO1xyXG4gICAgaWYgKGluc3RhbmNlLnBzd3ApIHtcclxuICAgICAgdmlld3BvcnRTaXplID0gaW5zdGFuY2UucHN3cC52aWV3cG9ydFNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2aWV3cG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUob3B0aW9ucywgaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhbkFyZWFTaXplID0gZ2V0UGFuQXJlYVNpemUob3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpO1xyXG4gICAgem9vbUxldmVsLnVwZGF0ZShjb250ZW50LndpZHRoLCBjb250ZW50LmhlaWdodCwgcGFuQXJlYVNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29udGVudC5sYXp5TG9hZCgpO1xyXG5cclxuICBpZiAoem9vbUxldmVsKSB7XHJcbiAgICBjb250ZW50LnNldERpc3BsYXllZFNpemUoXHJcbiAgICAgIE1hdGguY2VpbChjb250ZW50LndpZHRoICogem9vbUxldmVsLmluaXRpYWwpLFxyXG4gICAgICBNYXRoLmNlaWwoY29udGVudC5oZWlnaHQgKiB6b29tTGV2ZWwuaW5pdGlhbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBMYXp5LWxvYWRzIHNwZWNpZmljIHNsaWRlLlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYm90aCBieSBMaWdodGJveCBhbmQgUGhvdG9Td2lwZSBjb3JlLFxyXG4gKiB0aHVzIGl0IGNhbiBiZSBjYWxsZWQgYmVmb3JlIGRpYWxvZyBpcyBvcGVuZWQuXHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQsIGl0IGxvYWRzIGltYWdlIGJhc2VkIG9uIHZpZXdwb3J0IHNpemUgYW5kIGluaXRpYWwgem9vbSBsZXZlbC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZUJhc2V9IGluc3RhbmNlIFBob3RvU3dpcGUgb3IgUGhvdG9Td2lwZUxpZ2h0Ym94IGV2ZW50YWJsZSBpbnN0YW5jZVxyXG4gKiBAcmV0dXJucyB7Q29udGVudCB8IHVuZGVmaW5lZH1cclxuICovXHJcbmZ1bmN0aW9uIGxhenlMb2FkU2xpZGUoaW5kZXgsIGluc3RhbmNlKSB7XHJcbiAgY29uc3QgaXRlbURhdGEgPSBpbnN0YW5jZS5nZXRJdGVtRGF0YShpbmRleCk7XHJcblxyXG4gIGlmIChpbnN0YW5jZS5kaXNwYXRjaCgnbGF6eUxvYWRTbGlkZScsIHsgaW5kZXgsIGl0ZW1EYXRhIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJldHVybiBsYXp5TG9hZERhdGEoaXRlbURhdGEsIGluc3RhbmNlLCBpbmRleCk7XHJcbn1cclxuXHJcbmNsYXNzIENvbnRlbnRMb2FkZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICAvLyBUb3RhbCBhbW91bnQgb2YgY2FjaGVkIGltYWdlc1xyXG4gICAgdGhpcy5saW1pdCA9IE1hdGgubWF4KFxyXG4gICAgICBwc3dwLm9wdGlvbnMucHJlbG9hZFswXSArIHBzd3Aub3B0aW9ucy5wcmVsb2FkWzFdICsgMSxcclxuICAgICAgTUlOX1NMSURFU19UT19DQUNIRVxyXG4gICAgKTtcclxuICAgIC8qKiBAdHlwZSB7Q29udGVudFtdfSAqL1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExhenkgbG9hZCBuZWFyYnkgc2xpZGVzIGJhc2VkIG9uIGBwcmVsb2FkYCBvcHRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RpZmZdIERpZmZlcmVuY2UgYmV0d2VlbiBzbGlkZSBpbmRleGVzIHRoYXQgd2FzIGNoYW5nZWQgcmVjZW50bHksIG9yIDAuXHJcbiAgICovXHJcbiAgdXBkYXRlTGF6eShkaWZmKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHBzd3AuZGlzcGF0Y2goJ2xhenlMb2FkJykuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBwcmVsb2FkIH0gPSBwc3dwLm9wdGlvbnM7XHJcbiAgICBjb25zdCBpc0ZvcndhcmQgPSBkaWZmID09PSB1bmRlZmluZWQgPyB0cnVlIDogKGRpZmYgPj0gMCk7XHJcbiAgICBsZXQgaTtcclxuXHJcbiAgICAvLyBwcmVsb2FkWzFdIC0gbnVtIGl0ZW1zIHRvIHByZWxvYWQgaW4gZm9yd2FyZCBkaXJlY3Rpb25cclxuICAgIGZvciAoaSA9IDA7IGkgPD0gcHJlbG9hZFsxXTsgaSsrKSB7XHJcbiAgICAgIHRoaXMubG9hZFNsaWRlQnlJbmRleChwc3dwLmN1cnJJbmRleCArIChpc0ZvcndhcmQgPyBpIDogKC1pKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByZWxvYWRbMF0gLSBudW0gaXRlbXMgdG8gcHJlbG9hZCBpbiBiYWNrd2FyZCBkaXJlY3Rpb25cclxuICAgIGZvciAoaSA9IDE7IGkgPD0gcHJlbG9hZFswXTsgaSsrKSB7XHJcbiAgICAgIHRoaXMubG9hZFNsaWRlQnlJbmRleChwc3dwLmN1cnJJbmRleCArIChpc0ZvcndhcmQgPyAoLWkpIDogaSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluaXRpYWxJbmRleFxyXG4gICAqL1xyXG4gIGxvYWRTbGlkZUJ5SW5kZXgoaW5pdGlhbEluZGV4KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHN3cC5nZXRMb29wZWRJbmRleChpbml0aWFsSW5kZXgpO1xyXG4gICAgLy8gdHJ5IHRvIGdldCBjYWNoZWQgY29udGVudFxyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnRCeUluZGV4KGluZGV4KTtcclxuICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAvLyBubyBjYWNoZWQgY29udGVudCwgc28gdHJ5IHRvIGxvYWQgZnJvbSBzY3JhdGNoOlxyXG4gICAgICBjb250ZW50ID0gbGF6eUxvYWRTbGlkZShpbmRleCwgdGhpcy5wc3dwKTtcclxuICAgICAgLy8gaWYgY29udGVudCBjYW4gYmUgbG9hZGVkLCBhZGQgaXQgdG8gY2FjaGU6XHJcbiAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NhY2hlKGNvbnRlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlfSBzbGlkZVxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50fVxyXG4gICAqL1xyXG4gIGdldENvbnRlbnRCeVNsaWRlKHNsaWRlKSB7XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudEJ5SW5kZXgoc2xpZGUuaW5kZXgpO1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjb250ZW50IGlmIG5vdCBmb3VuZCBpbiBjYWNoZVxyXG4gICAgICBjb250ZW50ID0gdGhpcy5wc3dwLmNyZWF0ZUNvbnRlbnRGcm9tRGF0YShzbGlkZS5kYXRhLCBzbGlkZS5pbmRleCk7XHJcbiAgICAgIHRoaXMuYWRkVG9DYWNoZShjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhc3NpZ24gc2xpZGUgdG8gY29udGVudFxyXG4gICAgY29udGVudC5zZXRTbGlkZShzbGlkZSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NvbnRlbnR9IGNvbnRlbnRcclxuICAgKi9cclxuICBhZGRUb0NhY2hlKGNvbnRlbnQpIHtcclxuICAgIC8vIG1vdmUgdG8gdGhlIGVuZCBvZiBhcnJheVxyXG4gICAgdGhpcy5yZW1vdmVCeUluZGV4KGNvbnRlbnQuaW5kZXgpO1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5fY2FjaGVkSXRlbXMubGVuZ3RoID4gdGhpcy5saW1pdCkge1xyXG4gICAgICAvLyBEZXN0cm95IHRoZSBmaXJzdCBjb250ZW50IHRoYXQncyBub3QgYXR0YWNoZWRcclxuICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuX2NhY2hlZEl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhaXRlbS5pc0F0dGFjaGVkICYmICFpdGVtLmhhc1NsaWRlO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZEl0ZW0gPSB0aGlzLl9jYWNoZWRJdGVtcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSlbMF07XHJcbiAgICAgICAgcmVtb3ZlZEl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFuIGltYWdlIGZyb20gY2FjaGUsIGRvZXMgbm90IGRlc3Ryb3koKSBpdCwganVzdCByZW1vdmVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICovXHJcbiAgcmVtb3ZlQnlJbmRleChpbmRleCkge1xyXG4gICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuX2NhY2hlZEl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaW5kZXggPT09IGluZGV4KTtcclxuICAgIGlmIChpbmRleFRvUmVtb3ZlICE9PSAtMSkge1xyXG4gICAgICB0aGlzLl9jYWNoZWRJdGVtcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7Q29udGVudCB8IHVuZGVmaW5lZH1cclxuICAgKi9cclxuICBnZXRDb250ZW50QnlJbmRleChpbmRleCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZEl0ZW1zLmZpbmQoY29udGVudCA9PiBjb250ZW50LmluZGV4ID09PSBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMuZm9yRWFjaChjb250ZW50ID0+IGNvbnRlbnQuZGVzdHJveSgpKTtcclxuICAgIHRoaXMuX2NhY2hlZEl0ZW1zID0gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL3Bob3Rvc3dpcGUuanNcIikuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL3NsaWRlL3NsaWRlLmpzXCIpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKipcclxuICogUGhvdG9Td2lwZSBiYXNlIGNsYXNzIHRoYXQgY2FuIHJldHJpZXZlIGRhdGEgYWJvdXQgZXZlcnkgc2xpZGUuXHJcbiAqIFNoYXJlZCBieSBQaG90b1N3aXBlIENvcmUgYW5kIFBob3RvU3dpcGUgTGlnaHRib3hcclxuICovXHJcbmNsYXNzIFBob3RvU3dpcGVCYXNlIGV4dGVuZHMgRXZlbnRhYmxlIHtcclxuICAvKipcclxuICAgKiBHZXQgdG90YWwgbnVtYmVyIG9mIHNsaWRlc1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXROdW1JdGVtcygpIHtcclxuICAgIGxldCBudW1JdGVtcyA9IDA7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5vcHRpb25zPy5kYXRhU291cmNlO1xyXG5cclxuICAgIGlmIChkYXRhU291cmNlICYmICdsZW5ndGgnIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gbWF5IGJlIGFuIGFycmF5IG9yIGp1c3Qgb2JqZWN0IHdpdGggbGVuZ3RoIHByb3BlcnR5XHJcbiAgICAgIG51bUl0ZW1zID0gZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UgJiYgJ2dhbGxlcnknIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gcXVlcnkgRE9NIGVsZW1lbnRzXHJcbiAgICAgIGlmICghZGF0YVNvdXJjZS5pdGVtcykge1xyXG4gICAgICAgIGRhdGFTb3VyY2UuaXRlbXMgPSB0aGlzLl9nZXRHYWxsZXJ5RE9NRWxlbWVudHMoZGF0YVNvdXJjZS5nYWxsZXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBudW1JdGVtcyA9IGRhdGFTb3VyY2UuaXRlbXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGVnYWN5IGV2ZW50LCBiZWZvcmUgZmlsdGVycyB3ZXJlIGludHJvZHVjZWRcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kaXNwYXRjaCgnbnVtSXRlbXMnLCB7XHJcbiAgICAgIGRhdGFTb3VyY2UsXHJcbiAgICAgIG51bUl0ZW1zXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnbnVtSXRlbXMnLCBldmVudC5udW1JdGVtcywgZGF0YVNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gc2xpZGVEYXRhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge0NvbnRlbnR9XHJcbiAgICovXHJcbiAgY3JlYXRlQ29udGVudEZyb21EYXRhKHNsaWRlRGF0YSwgaW5kZXgpIHtcclxuICAgIHJldHVybiBuZXcgQ29udGVudChzbGlkZURhdGEsIHRoaXMsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpdGVtIGRhdGEgYnkgaW5kZXguXHJcbiAgICpcclxuICAgKiBcIml0ZW0gZGF0YVwiIHNob3VsZCBjb250YWluIG5vcm1hbGl6ZWQgaW5mb3JtYXRpb24gdGhhdCBQaG90b1N3aXBlIG5lZWRzIHRvIGdlbmVyYXRlIGEgc2xpZGUuXHJcbiAgICogRm9yIGV4YW1wbGUsIGl0IG1heSBjb250YWluIHByb3BlcnRpZXMgbGlrZVxyXG4gICAqIGBzcmNgLCBgc3Jjc2V0YCwgYHdgLCBgaGAsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSBhIHNsaWRlIHdpdGggaW1hZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7U2xpZGVEYXRhfVxyXG4gICAqL1xyXG4gIGdldEl0ZW1EYXRhKGluZGV4KSB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5vcHRpb25zPy5kYXRhU291cmNlO1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZURhdGEgfCBIVE1MRWxlbWVudH0gKi9cclxuICAgIGxldCBkYXRhU291cmNlSXRlbSA9IHt9O1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVNvdXJjZSkpIHtcclxuICAgICAgLy8gRGF0YXNvdXJjZSBpcyBhbiBhcnJheSBvZiBlbGVtZW50c1xyXG4gICAgICBkYXRhU291cmNlSXRlbSA9IGRhdGFTb3VyY2VbaW5kZXhdO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlICYmICdnYWxsZXJ5JyBpbiBkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIGRhdGFTb3VyY2UgaGFzIGdhbGxlcnkgcHJvcGVydHksXHJcbiAgICAgIC8vIHRodXMgaXQgd2FzIGNyZWF0ZWQgYnkgTGlnaHRib3gsIGJhc2VkIG9uXHJcbiAgICAgIC8vIGdhbGxlcnkgYW5kIGNoaWxkcmVuIG9wdGlvbnNcclxuXHJcbiAgICAgIC8vIHF1ZXJ5IERPTSBlbGVtZW50c1xyXG4gICAgICBpZiAoIWRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBkYXRhU291cmNlLml0ZW1zID0gdGhpcy5fZ2V0R2FsbGVyeURPTUVsZW1lbnRzKGRhdGFTb3VyY2UuZ2FsbGVyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRhdGFTb3VyY2VJdGVtID0gZGF0YVNvdXJjZS5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1EYXRhID0gZGF0YVNvdXJjZUl0ZW07XHJcblxyXG4gICAgaWYgKGl0ZW1EYXRhIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICBpdGVtRGF0YSA9IHRoaXMuX2RvbUVsZW1lbnRUb0l0ZW1EYXRhKGl0ZW1EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNwYXRjaGluZyB0aGUgaXRlbURhdGEgZXZlbnQsXHJcbiAgICAvLyBpdCdzIGEgbGVnYWN5IHZlcmlvbiBiZWZvcmUgZmlsdGVycyB3ZXJlIGludHJvZHVjZWRcclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kaXNwYXRjaCgnaXRlbURhdGEnLCB7XHJcbiAgICAgIGl0ZW1EYXRhOiBpdGVtRGF0YSB8fCB7fSxcclxuICAgICAgaW5kZXhcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnaXRlbURhdGEnLCBldmVudC5pdGVtRGF0YSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFycmF5IG9mIGdhbGxlcnkgRE9NIGVsZW1lbnRzLFxyXG4gICAqIGJhc2VkIG9uIGNoaWxkU2VsZWN0b3IgYW5kIGdhbGxlcnkgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGdhbGxlcnlFbGVtZW50XHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50W119XHJcbiAgICovXHJcbiAgX2dldEdhbGxlcnlET01FbGVtZW50cyhnYWxsZXJ5RWxlbWVudCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucz8uY2hpbGRyZW4gfHwgdGhpcy5vcHRpb25zPy5jaGlsZFNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBnZXRFbGVtZW50c0Zyb21PcHRpb24oXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZFNlbGVjdG9yLFxyXG4gICAgICAgIGdhbGxlcnlFbGVtZW50XHJcbiAgICAgICkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtnYWxsZXJ5RWxlbWVudF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBET00gZWxlbWVudCB0byBpdGVtIGRhdGEgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBET00gZWxlbWVudFxyXG4gICAqIEByZXR1cm5zIHtTbGlkZURhdGF9XHJcbiAgICovXHJcbiAgX2RvbUVsZW1lbnRUb0l0ZW1EYXRhKGVsZW1lbnQpIHtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGVEYXRhfSAqL1xyXG4gICAgY29uc3QgaXRlbURhdGEgPSB7XHJcbiAgICAgIGVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGlua0VsID0gLyoqIEB0eXBlIHtIVE1MQW5jaG9yRWxlbWVudH0gKi8gKFxyXG4gICAgICBlbGVtZW50LnRhZ05hbWUgPT09ICdBJ1xyXG4gICAgICAgID8gZWxlbWVudFxyXG4gICAgICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJylcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGxpbmtFbCkge1xyXG4gICAgICAvLyBzcmMgY29tZXMgZnJvbSBkYXRhLXBzd3Atc3JjIGF0dHJpYnV0ZSxcclxuICAgICAgLy8gaWYgaXQncyBlbXB0eSBsaW5rIGhyZWYgaXMgdXNlZFxyXG4gICAgICBpdGVtRGF0YS5zcmMgPSBsaW5rRWwuZGF0YXNldC5wc3dwU3JjIHx8IGxpbmtFbC5ocmVmO1xyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BTcmNzZXQpIHtcclxuICAgICAgICBpdGVtRGF0YS5zcmNzZXQgPSBsaW5rRWwuZGF0YXNldC5wc3dwU3Jjc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtRGF0YS53aWR0aCA9IGxpbmtFbC5kYXRhc2V0LnBzd3BXaWR0aCA/IHBhcnNlSW50KGxpbmtFbC5kYXRhc2V0LnBzd3BXaWR0aCwgMTApIDogMDtcclxuICAgICAgaXRlbURhdGEuaGVpZ2h0ID0gbGlua0VsLmRhdGFzZXQucHN3cEhlaWdodCA/IHBhcnNlSW50KGxpbmtFbC5kYXRhc2V0LnBzd3BIZWlnaHQsIDEwKSA6IDA7XHJcblxyXG4gICAgICAvLyBzdXBwb3J0IGxlZ2FjeSB3ICYgaCBwcm9wZXJ0aWVzXHJcbiAgICAgIGl0ZW1EYXRhLncgPSBpdGVtRGF0YS53aWR0aDtcclxuICAgICAgaXRlbURhdGEuaCA9IGl0ZW1EYXRhLmhlaWdodDtcclxuXHJcbiAgICAgIGlmIChsaW5rRWwuZGF0YXNldC5wc3dwVHlwZSkge1xyXG4gICAgICAgIGl0ZW1EYXRhLnR5cGUgPSBsaW5rRWwuZGF0YXNldC5wc3dwVHlwZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGh1bWJuYWlsRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICAgICAgaWYgKHRodW1ibmFpbEVsKSB7XHJcbiAgICAgICAgLy8gbXNyYyBpcyBVUkwgdG8gcGxhY2Vob2xkZXIgaW1hZ2UgdGhhdCdzIGRpc3BsYXllZCBiZWZvcmUgbGFyZ2UgaW1hZ2UgaXMgbG9hZGVkXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBpdCdzIGRpc3BsYXllZCBvbmx5IGZvciB0aGUgZmlyc3Qgc2xpZGVcclxuICAgICAgICBpdGVtRGF0YS5tc3JjID0gdGh1bWJuYWlsRWwuY3VycmVudFNyYyB8fCB0aHVtYm5haWxFbC5zcmM7XHJcbiAgICAgICAgaXRlbURhdGEuYWx0ID0gdGh1bWJuYWlsRWwuZ2V0QXR0cmlidXRlKCdhbHQnKSA/PyAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BDcm9wcGVkIHx8IGxpbmtFbC5kYXRhc2V0LmNyb3BwZWQpIHtcclxuICAgICAgICBpdGVtRGF0YS50aHVtYkNyb3BwZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJzKCdkb21JdGVtRGF0YScsIGl0ZW1EYXRhLCBlbGVtZW50LCBsaW5rRWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF6eS1sb2FkIGJ5IHNsaWRlIGRhdGFcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBEYXRhIGFib3V0IHRoZSBzbGlkZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50fSBJbWFnZSB0aGF0IGlzIGJlaW5nIGRlY29kZWQgb3IgZmFsc2UuXHJcbiAgICovXHJcbiAgbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gICAgcmV0dXJuIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgdGhpcywgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUvZ2V0LXRodW1iLWJvdW5kcy5qcycpLkJvdW5kc30gQm91bmRzICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3V0aWwvYW5pbWF0aW9ucy5qcycpLkFuaW1hdGlvblByb3BzfSBBbmltYXRpb25Qcm9wcyAqL1xyXG5cclxuLy8gc29tZSBicm93c2VycyBkbyBub3QgcGFpbnRcclxuLy8gZWxlbWVudHMgd2hpY2ggb3BhY2l0eSBpcyBzZXQgdG8gMCxcclxuLy8gc2luY2Ugd2UgbmVlZCB0byBwcmUtcmVuZGVyIGVsZW1lbnRzIGZvciB0aGUgYW5pbWF0aW9uIC1cclxuLy8gd2Ugc2V0IGl0IHRvIHRoZSBtaW5pbXVtIGFtb3VudFxyXG5jb25zdCBNSU5fT1BBQ0lUWSA9IDAuMDAzO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgb3BlbmluZyBhbmQgY2xvc2luZyB0cmFuc2l0aW9ucyBvZiB0aGUgUGhvdG9Td2lwZS5cclxuICpcclxuICogSXQgY2FuIHBlcmZvcm0gem9vbSwgZmFkZSBvciBubyB0cmFuc2l0aW9uLlxyXG4gKi9cclxuY2xhc3MgT3BlbmVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyIHwgZmFsc2UgfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2R1cmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl91c2VBbmltYXRpb24gPSBmYWxzZTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fY3JvcHBlZFpvb20gPSBmYWxzZTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID0gZmFsc2U7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX2FuaW1hdGVCZ09wYWNpdHkgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHsgSFRNTERpdkVsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCB9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUgeyBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCB9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX29wYWNpdHlFbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUgeyBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCB9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2Nyb3BDb250YWluZXIxID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUgeyBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9jcm9wQ29udGFpbmVyMiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7Qm91bmRzIHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl90aHVtYkJvdW5kcyA9IHVuZGVmaW5lZDtcclxuXHJcblxyXG4gICAgdGhpcy5fcHJlcGFyZU9wZW4gPSB0aGlzLl9wcmVwYXJlT3Blbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgIC8vIE92ZXJyaWRlIGluaXRpYWwgem9vbSBhbmQgcGFuIHBvc2l0aW9uXHJcbiAgICBwc3dwLm9uKCdmaXJzdFpvb21QYW4nLCB0aGlzLl9wcmVwYXJlT3Blbik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcHJlcGFyZU9wZW4oKTtcclxuICAgIHRoaXMuX3N0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmlzQ2xvc2VkIHx8IHRoaXMuaXNDbG9zaW5nIHx8IHRoaXMuaXNPcGVuaW5nKSB7XHJcbiAgICAgIC8vIGlmIHdlIGNsb3NlIGR1cmluZyBvcGVuaW5nIGFuaW1hdGlvblxyXG4gICAgICAvLyBmb3Igbm93IGRvIG5vdGhpbmcsXHJcbiAgICAgIC8vIGJyb3dzZXJzIGFyZW4ndCBnb29kIGF0IGNoYW5naW5nIHRoZSBkaXJlY3Rpb24gb2YgdGhlIENTUyB0cmFuc2l0aW9uXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMucHN3cC5jdXJyU2xpZGU7XHJcblxyXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICB0aGlzLl9kdXJhdGlvbiA9IHRoaXMucHN3cC5vcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbjtcclxuXHJcbiAgICBpZiAoc2xpZGUgJiYgc2xpZGUuY3Vyclpvb21MZXZlbCAqIHNsaWRlLndpZHRoID49IHRoaXMucHN3cC5vcHRpb25zLm1heFdpZHRoVG9BbmltYXRlKSB7XHJcbiAgICAgIHRoaXMuX2R1cmF0aW9uID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hcHBseVN0YXJ0UHJvcHMoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zdGFydCgpO1xyXG4gICAgfSwgdGhpcy5fY3JvcHBlZFpvb20gPyAzMCA6IDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX3ByZXBhcmVPcGVuKCkge1xyXG4gICAgdGhpcy5wc3dwLm9mZignZmlyc3Rab29tUGFuJywgdGhpcy5fcHJlcGFyZU9wZW4pO1xyXG4gICAgaWYgKCF0aGlzLmlzT3BlbmluZykge1xyXG4gICAgICBjb25zdCBzbGlkZSA9IHRoaXMucHN3cC5jdXJyU2xpZGU7XHJcbiAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fZHVyYXRpb24gPSB0aGlzLnBzd3Aub3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICAgIGlmIChzbGlkZSAmJiBzbGlkZS56b29tTGV2ZWxzLmluaXRpYWwgKiBzbGlkZS53aWR0aCA+PSB0aGlzLnBzd3Aub3B0aW9ucy5tYXhXaWR0aFRvQW5pbWF0ZSkge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9hcHBseVN0YXJ0UHJvcHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAcHJpdmF0ZSAqL1xyXG4gIF9hcHBseVN0YXJ0UHJvcHMoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMucHN3cC5jdXJyU2xpZGU7XHJcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHBzd3A7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuc2hvd0hpZGVBbmltYXRpb25UeXBlID09PSAnZmFkZScpIHtcclxuICAgICAgb3B0aW9ucy5zaG93SGlkZU9wYWNpdHkgPSB0cnVlO1xyXG4gICAgICB0aGlzLl90aHVtYkJvdW5kcyA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zaG93SGlkZUFuaW1hdGlvblR5cGUgPT09ICdub25lJykge1xyXG4gICAgICBvcHRpb25zLnNob3dIaWRlT3BhY2l0eSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9kdXJhdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuX3RodW1iQm91bmRzID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzT3BlbmluZyAmJiBwc3dwLl9pbml0aWFsVGh1bWJCb3VuZHMpIHtcclxuICAgICAgLy8gVXNlIGluaXRpYWwgYm91bmRzIGlmIGRlZmluZWRcclxuICAgICAgdGhpcy5fdGh1bWJCb3VuZHMgPSBwc3dwLl9pbml0aWFsVGh1bWJCb3VuZHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90aHVtYkJvdW5kcyA9IHRoaXMucHN3cC5nZXRUaHVtYkJvdW5kcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gc2xpZGU/LmdldFBsYWNlaG9sZGVyRWxlbWVudCgpO1xyXG5cclxuICAgIHBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsKCk7XHJcblxyXG4gICAgLy8gRGlzY2FyZCBhbmltYXRpb25zIHdoZW4gZHVyYXRpb24gaXMgbGVzcyB0aGFuIDUwbXNcclxuICAgIHRoaXMuX3VzZUFuaW1hdGlvbiA9IEJvb2xlYW4odGhpcy5fZHVyYXRpb24gJiYgdGhpcy5fZHVyYXRpb24gPiA1MCk7XHJcbiAgICB0aGlzLl9hbmltYXRlWm9vbSA9IEJvb2xlYW4odGhpcy5fdGh1bWJCb3VuZHMpXHJcbiAgICAgICYmIHNsaWRlPy5jb250ZW50LnVzZVBsYWNlaG9sZGVyKClcclxuICAgICAgJiYgKCF0aGlzLmlzQ2xvc2luZyB8fCAhcHN3cC5tYWluU2Nyb2xsLmlzU2hpZnRlZCgpKTtcclxuICAgIGlmICghdGhpcy5fYW5pbWF0ZVpvb20pIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzT3BlbmluZyAmJiBzbGlkZSkge1xyXG4gICAgICAgIHNsaWRlLnpvb21BbmRQYW5Ub0luaXRpYWwoKTtcclxuICAgICAgICBzbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSA9IG9wdGlvbnMuc2hvd0hpZGVPcGFjaXR5ID8/IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYW5pbWF0ZUJnT3BhY2l0eSA9ICF0aGlzLl9hbmltYXRlUm9vdE9wYWNpdHkgJiYgdGhpcy5wc3dwLm9wdGlvbnMuYmdPcGFjaXR5ID4gTUlOX09QQUNJVFk7XHJcbiAgICB0aGlzLl9vcGFjaXR5RWxlbWVudCA9IHRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSA/IHBzd3AuZWxlbWVudCA6IHBzd3AuYmc7XHJcblxyXG4gICAgaWYgKCF0aGlzLl91c2VBbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5fZHVyYXRpb24gPSAwO1xyXG4gICAgICB0aGlzLl9hbmltYXRlWm9vbSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9hbmltYXRlQmdPcGFjaXR5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLmlzT3BlbmluZykge1xyXG4gICAgICAgIGlmIChwc3dwLmVsZW1lbnQpIHtcclxuICAgICAgICAgIHBzd3AuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gU3RyaW5nKE1JTl9PUEFDSVRZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHN3cC5hcHBseUJnT3BhY2l0eSgxKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVab29tICYmIHRoaXMuX3RodW1iQm91bmRzICYmIHRoaXMuX3RodW1iQm91bmRzLmlubmVyUmVjdCkge1xyXG4gICAgICAvLyBQcm9wZXJ0aWVzIGFyZSB1c2VkIHdoZW4gYW5pbWF0aW9uIGZyb20gY3JvcHBlZCB0aHVtYm5haWxcclxuICAgICAgdGhpcy5fY3JvcHBlZFpvb20gPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jcm9wQ29udGFpbmVyMSA9IHRoaXMucHN3cC5jb250YWluZXI7XHJcbiAgICAgIHRoaXMuX2Nyb3BDb250YWluZXIyID0gdGhpcy5wc3dwLmN1cnJTbGlkZT8uaG9sZGVyRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChwc3dwLmNvbnRhaW5lcikge1xyXG4gICAgICAgIHBzd3AuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgcHN3cC5jb250YWluZXIuc3R5bGUud2lkdGggPSBwc3dwLnZpZXdwb3J0U2l6ZS54ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY3JvcHBlZFpvb20gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc09wZW5pbmcpIHtcclxuICAgICAgLy8gQXBwbHkgc3R5bGVzIGJlZm9yZSBvcGVuaW5nIHRyYW5zaXRpb25cclxuICAgICAgaWYgKHRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSkge1xyXG4gICAgICAgIGlmIChwc3dwLmVsZW1lbnQpIHtcclxuICAgICAgICAgIHBzd3AuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gU3RyaW5nKE1JTl9PUEFDSVRZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHN3cC5hcHBseUJnT3BhY2l0eSgxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0ZUJnT3BhY2l0eSAmJiBwc3dwLmJnKSB7XHJcbiAgICAgICAgICBwc3dwLmJnLnN0eWxlLm9wYWNpdHkgPSBTdHJpbmcoTUlOX09QQUNJVFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHN3cC5lbGVtZW50KSB7XHJcbiAgICAgICAgICBwc3dwLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl9hbmltYXRlWm9vbSkge1xyXG4gICAgICAgIHRoaXMuX3NldENsb3NlZFN0YXRlWm9vbVBhbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgLy8gdGVsbCBicm93c2VyIHRoYXQgd2UgcGxhbiB0byBhbmltYXRlIHRoZSBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xyXG5cclxuICAgICAgICAgIC8vIGhpZGUgcGxhY2Vob2xkZXIgdG8gYWxsb3cgaGlkaW5nIG9mXHJcbiAgICAgICAgICAvLyBlbGVtZW50cyB0aGF0IG92ZXJsYXAgaXQgKHN1Y2ggYXMgaWNvbnMgb3ZlciB0aGUgdGh1bWJuYWlsKVxyXG4gICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUub3BhY2l0eSA9IFN0cmluZyhNSU5fT1BBQ0lUWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNDbG9zaW5nKSB7XHJcbiAgICAgIC8vIGhpZGUgbmVhcmJ5IHNsaWRlcyB0byBtYWtlIHN1cmUgdGhhdFxyXG4gICAgICAvLyB0aGV5IGFyZSBub3QgcGFpbnRlZCBkdXJpbmcgdGhlIHRyYW5zaXRpb25cclxuICAgICAgaWYgKHBzd3AubWFpblNjcm9sbC5pdGVtSG9sZGVyc1swXSkge1xyXG4gICAgICAgIHBzd3AubWFpblNjcm9sbC5pdGVtSG9sZGVyc1swXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwc3dwLm1haW5TY3JvbGwuaXRlbUhvbGRlcnNbMl0pIHtcclxuICAgICAgICBwc3dwLm1haW5TY3JvbGwuaXRlbUhvbGRlcnNbMl0uZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2Nyb3BwZWRab29tKSB7XHJcbiAgICAgICAgaWYgKHBzd3AubWFpblNjcm9sbC54ICE9PSAwKSB7XHJcbiAgICAgICAgICAvLyBzaGlmdCB0aGUgbWFpbiBzY3JvbGxlciB0byB6ZXJvIHBvc2l0aW9uXHJcbiAgICAgICAgICBwc3dwLm1haW5TY3JvbGwucmVzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgcHN3cC5tYWluU2Nyb2xsLnJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX3N0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuaW5nXHJcbiAgICAgICYmIHRoaXMuX3VzZUFuaW1hdGlvblxyXG4gICAgICAmJiB0aGlzLl9wbGFjZWhvbGRlclxyXG4gICAgICAmJiB0aGlzLl9wbGFjZWhvbGRlci50YWdOYW1lID09PSAnSU1HJykge1xyXG4gICAgICAvLyBUbyBlbnN1cmUgc21vb3RoIGFuaW1hdGlvblxyXG4gICAgICAvLyB3ZSB3YWl0IHRpbGwgdGhlIGN1cnJlbnQgc2xpZGUgaW1hZ2UgcGxhY2Vob2xkZXIgaXMgZGVjb2RlZCxcclxuICAgICAgLy8gYnV0IG5vIGxvbmdlciB0aGFuIDI1MG1zLFxyXG4gICAgICAvLyBhbmQgbm8gc2hvcnRlciB0aGFuIDUwbXNcclxuICAgICAgLy8gKGp1c3QgdXNpbmcgcmVxdWVzdGFuaW1hdGlvbmZyYW1lIGlzIG5vdCBlbm91Z2ggaW4gRmlyZWZveCxcclxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uKVxyXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGxldCBkZWNvZGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzRGVsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRlY29kZUltYWdlKC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudH0gKi8odGhpcy5fcGxhY2Vob2xkZXIpKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIGRlY29kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKCFpc0RlbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpc0RlbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoZGVjb2RlZCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDI1MCk7XHJcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4gdGhpcy5faW5pdGlhdGUoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9pbml0aWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2luaXRpYXRlKCkge1xyXG4gICAgdGhpcy5wc3dwLmVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KCctLXBzd3AtdHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMuX2R1cmF0aW9uICsgJ21zJyk7XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKFxyXG4gICAgICB0aGlzLmlzT3BlbmluZyA/ICdvcGVuaW5nQW5pbWF0aW9uU3RhcnQnIDogJ2Nsb3NpbmdBbmltYXRpb25TdGFydCdcclxuICAgICk7XHJcblxyXG4gICAgLy8gbGVnYWN5IGV2ZW50XHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goXHJcbiAgICAgIC8qKiBAdHlwZSB7J2luaXRpYWxab29tSW4nIHwgJ2luaXRpYWxab29tT3V0J30gKi9cclxuICAgICAgKCdpbml0aWFsWm9vbScgKyAodGhpcy5pc09wZW5pbmcgPyAnSW4nIDogJ091dCcpKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZWxlbWVudD8uY2xhc3NMaXN0LnRvZ2dsZSgncHN3cC0tdWktdmlzaWJsZScsIHRoaXMuaXNPcGVuaW5nKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc09wZW5pbmcpIHtcclxuICAgICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgLy8gdW5oaWRlIHRoZSBwbGFjZWhvbGRlclxyXG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fYW5pbWF0ZVRvT3BlblN0YXRlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNDbG9zaW5nKSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVUb0Nsb3NlZFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl91c2VBbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5fb25BbmltYXRpb25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX29uQW5pbWF0aW9uQ29tcGxldGUoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRoaXMuaXNPcGVuaW5nO1xyXG4gICAgdGhpcy5pc0Nsb3NlZCA9IHRoaXMuaXNDbG9zaW5nO1xyXG4gICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDbG9zaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaChcclxuICAgICAgdGhpcy5pc09wZW4gPyAnb3BlbmluZ0FuaW1hdGlvbkVuZCcgOiAnY2xvc2luZ0FuaW1hdGlvbkVuZCdcclxuICAgICk7XHJcblxyXG4gICAgLy8gbGVnYWN5IGV2ZW50XHJcbiAgICBwc3dwLmRpc3BhdGNoKFxyXG4gICAgICAvKiogQHR5cGUgeydpbml0aWFsWm9vbUluRW5kJyB8ICdpbml0aWFsWm9vbU91dEVuZCd9ICovXHJcbiAgICAgICgnaW5pdGlhbFpvb20nICsgKHRoaXMuaXNPcGVuID8gJ0luRW5kJyA6ICdPdXRFbmQnKSlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDbG9zZWQpIHtcclxuICAgICAgcHN3cC5kZXN0cm95KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIGlmICh0aGlzLl9hbmltYXRlWm9vbSAmJiBwc3dwLmNvbnRhaW5lcikge1xyXG4gICAgICAgIHBzd3AuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIHBzd3AuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICB9XHJcbiAgICAgIHBzd3AuY3VyclNsaWRlPy5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfYW5pbWF0ZVRvT3BlblN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVab29tKSB7XHJcbiAgICAgIGlmICh0aGlzLl9jcm9wcGVkWm9vbSAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMSAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGVUbyh0aGlzLl9jcm9wQ29udGFpbmVyMSwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCknKTtcclxuICAgICAgICB0aGlzLl9hbmltYXRlVG8odGhpcy5fY3JvcENvbnRhaW5lcjIsICd0cmFuc2Zvcm0nLCAnbm9uZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHN3cC5jdXJyU2xpZGUpIHtcclxuICAgICAgICBwc3dwLmN1cnJTbGlkZS56b29tQW5kUGFuVG9Jbml0aWFsKCk7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVRvKFxyXG4gICAgICAgICAgcHN3cC5jdXJyU2xpZGUuY29udGFpbmVyLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICBwc3dwLmN1cnJTbGlkZS5nZXRDdXJyZW50VHJhbnNmb3JtKClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVCZ09wYWNpdHkgJiYgcHN3cC5iZykge1xyXG4gICAgICB0aGlzLl9hbmltYXRlVG8ocHN3cC5iZywgJ29wYWNpdHknLCBTdHJpbmcocHN3cC5vcHRpb25zLmJnT3BhY2l0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9hbmltYXRlUm9vdE9wYWNpdHkgJiYgcHN3cC5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVUbyhwc3dwLmVsZW1lbnQsICdvcGFjaXR5JywgJzEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAcHJpdmF0ZSAqL1xyXG4gIF9hbmltYXRlVG9DbG9zZWRTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAodGhpcy5fYW5pbWF0ZVpvb20pIHtcclxuICAgICAgdGhpcy5fc2V0Q2xvc2VkU3RhdGVab29tUGFuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRvIG5vdCBhbmltYXRlIG9wYWNpdHkgaWYgaXQncyBhbHJlYWR5IGF0IDBcclxuICAgIGlmICh0aGlzLl9hbmltYXRlQmdPcGFjaXR5ICYmIHBzd3AuYmdPcGFjaXR5ID4gMC4wMSAmJiBwc3dwLmJnKSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVUbyhwc3dwLmJnLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSAmJiBwc3dwLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVRvKHBzd3AuZWxlbWVudCwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRlXVxyXG4gICAqL1xyXG4gIF9zZXRDbG9zZWRTdGF0ZVpvb21QYW4oYW5pbWF0ZSkge1xyXG4gICAgaWYgKCF0aGlzLl90aHVtYkJvdW5kcykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGNvbnN0IHsgaW5uZXJSZWN0IH0gPSB0aGlzLl90aHVtYkJvdW5kcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlLCB2aWV3cG9ydFNpemUgfSA9IHBzd3A7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Nyb3BwZWRab29tICYmIGlubmVyUmVjdCAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMSAmJiB0aGlzLl9jcm9wQ29udGFpbmVyMikge1xyXG4gICAgICBjb25zdCBjb250YWluZXJPbmVQYW5YID0gLXZpZXdwb3J0U2l6ZS54ICsgKHRoaXMuX3RodW1iQm91bmRzLnggLSBpbm5lclJlY3QueCkgKyBpbm5lclJlY3QudztcclxuICAgICAgY29uc3QgY29udGFpbmVyT25lUGFuWSA9IC12aWV3cG9ydFNpemUueSArICh0aGlzLl90aHVtYkJvdW5kcy55IC0gaW5uZXJSZWN0LnkpICsgaW5uZXJSZWN0Lmg7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclR3b1BhblggPSB2aWV3cG9ydFNpemUueCAtIGlubmVyUmVjdC53O1xyXG4gICAgICBjb25zdCBjb250YWluZXJUd29QYW5ZID0gdmlld3BvcnRTaXplLnkgLSBpbm5lclJlY3QuaDtcclxuXHJcblxyXG4gICAgICBpZiAoYW5pbWF0ZSkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGVUbyhcclxuICAgICAgICAgIHRoaXMuX2Nyb3BDb250YWluZXIxLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICB0b1RyYW5zZm9ybVN0cmluZyhjb250YWluZXJPbmVQYW5YLCBjb250YWluZXJPbmVQYW5ZKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FuaW1hdGVUbyhcclxuICAgICAgICAgIHRoaXMuX2Nyb3BDb250YWluZXIyLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICB0b1RyYW5zZm9ybVN0cmluZyhjb250YWluZXJUd29QYW5YLCBjb250YWluZXJUd29QYW5ZKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VHJhbnNmb3JtKHRoaXMuX2Nyb3BDb250YWluZXIxLCBjb250YWluZXJPbmVQYW5YLCBjb250YWluZXJPbmVQYW5ZKTtcclxuICAgICAgICBzZXRUcmFuc2Zvcm0odGhpcy5fY3JvcENvbnRhaW5lcjIsIGNvbnRhaW5lclR3b1BhblgsIGNvbnRhaW5lclR3b1BhblkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJTbGlkZSkge1xyXG4gICAgICBlcXVhbGl6ZVBvaW50cyhjdXJyU2xpZGUucGFuLCBpbm5lclJlY3QgfHwgdGhpcy5fdGh1bWJCb3VuZHMpO1xyXG4gICAgICBjdXJyU2xpZGUuY3Vyclpvb21MZXZlbCA9IHRoaXMuX3RodW1iQm91bmRzLncgLyBjdXJyU2xpZGUud2lkdGg7XHJcbiAgICAgIGlmIChhbmltYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVRvKGN1cnJTbGlkZS5jb250YWluZXIsICd0cmFuc2Zvcm0nLCBjdXJyU2xpZGUuZ2V0Q3VycmVudFRyYW5zZm9ybSgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gICAqIEBwYXJhbSB7J3RyYW5zZm9ybScgfCAnb3BhY2l0eSd9IHByb3BcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcFZhbHVlXHJcbiAgICovXHJcbiAgX2FuaW1hdGVUbyh0YXJnZXQsIHByb3AsIHByb3BWYWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLl9kdXJhdGlvbikge1xyXG4gICAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBwcm9wVmFsdWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGFuaW1hdGlvbnMgfSA9IHRoaXMucHN3cDtcclxuICAgIC8qKiBAdHlwZSB7QW5pbWF0aW9uUHJvcHN9ICovXHJcbiAgICBjb25zdCBhbmltUHJvcHMgPSB7XHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLl9kdXJhdGlvbixcclxuICAgICAgZWFzaW5nOiB0aGlzLnBzd3Aub3B0aW9ucy5lYXNpbmcsXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICBpZiAoIWFuaW1hdGlvbnMuYWN0aXZlQW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuX29uQW5pbWF0aW9uQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRhcmdldCxcclxuICAgIH07XHJcbiAgICBhbmltUHJvcHNbcHJvcF0gPSBwcm9wVmFsdWU7XHJcbiAgICBhbmltYXRpb25zLnN0YXJ0VHJhbnNpdGlvbihhbmltUHJvcHMpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdHlwZXMuanMnKS5UeXBlPFQ+fSBUeXBlPFQ+XHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS96b29tLWxldmVsLmpzJykuWm9vbUxldmVsT3B0aW9ufSBab29tTGV2ZWxPcHRpb24gKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdWkvdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbWFpbi1zY3JvbGwuanMnKS5JdGVtSG9sZGVyfSBJdGVtSG9sZGVyICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvZXZlbnRhYmxlLmpzJykuUGhvdG9Td2lwZUV2ZW50c01hcH0gUGhvdG9Td2lwZUV2ZW50c01hcCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL2V2ZW50YWJsZS5qcycpLlBob3RvU3dpcGVGaWx0ZXJzTWFwfSBQaG90b1N3aXBlRmlsdGVyc01hcCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS9nZXQtdGh1bWItYm91bmRzJykuQm91bmRzfSBCb3VuZHMgKi9cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS9ldmVudGFibGUuanMnKS5FdmVudENhbGxiYWNrPFQ+fSBFdmVudENhbGxiYWNrPFQ+XHJcbiAqL1xyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL2V2ZW50YWJsZS5qcycpLkF1Z21lbnRlZEV2ZW50PFQ+fSBBdWdtZW50ZWRFdmVudDxUPlxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaWQ/OiBzdHJpbmcgfCBudW1iZXIgfX0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHt7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH19IFBhZGRpbmcgKi9cclxuLyoqIEB0eXBlZGVmIHtTbGlkZURhdGFbXX0gRGF0YVNvdXJjZUFycmF5ICovXHJcbi8qKiBAdHlwZWRlZiB7eyBnYWxsZXJ5OiBIVE1MRWxlbWVudDsgaXRlbXM/OiBIVE1MRWxlbWVudFtdIH19IERhdGFTb3VyY2VPYmplY3QgKi9cclxuLyoqIEB0eXBlZGVmIHtEYXRhU291cmNlQXJyYXkgfCBEYXRhU291cmNlT2JqZWN0fSBEYXRhU291cmNlICovXHJcbi8qKiBAdHlwZWRlZiB7KHBvaW50OiBQb2ludCwgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50KSA9PiB2b2lkfSBBY3Rpb25GbiAqL1xyXG4vKiogQHR5cGVkZWYgeydjbG9zZScgfCAnbmV4dCcgfCAnem9vbScgfCAnem9vbS1vci1jbG9zZScgfCAndG9nZ2xlLWNvbnRyb2xzJ30gQWN0aW9uVHlwZSAqL1xyXG4vKiogQHR5cGVkZWYge1R5cGU8UGhvdG9Td2lwZT4gfCB7IGRlZmF1bHQ6IFR5cGU8UGhvdG9Td2lwZT4gfX0gUGhvdG9Td2lwZU1vZHVsZSAqL1xyXG4vKiogQHR5cGVkZWYge1Bob3RvU3dpcGVNb2R1bGUgfCBQcm9taXNlPFBob3RvU3dpcGVNb2R1bGU+IHwgKCgpID0+IFByb21pc2U8UGhvdG9Td2lwZU1vZHVsZT4pfSBQaG90b1N3aXBlTW9kdWxlT3B0aW9uICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3N0cmluZyB8IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnRbXSB8IEhUTUxFbGVtZW50fSBFbGVtZW50UHJvdmlkZXJcclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge1BhcnRpYWw8UHJlcGFyZWRQaG90b1N3aXBlT3B0aW9ucz59IFBob3RvU3dpcGVPcHRpb25zIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vb3B0aW9ucy8gKi9cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFByZXBhcmVkUGhvdG9Td2lwZU9wdGlvbnNcclxuICpcclxuICogQHByb3Age0RhdGFTb3VyY2V9IFtkYXRhU291cmNlXVxyXG4gKiBQYXNzIGFuIGFycmF5IG9mIGFueSBpdGVtcyB2aWEgZGF0YVNvdXJjZSBvcHRpb24uIEl0cyBsZW5ndGggd2lsbCBkZXRlcm1pbmUgYW1vdW50IG9mIHNsaWRlc1xyXG4gKiAod2hpY2ggbWF5IGJlIG1vZGlmaWVkIGZ1cnRoZXIgZnJvbSBudW1JdGVtcyBldmVudCkuXHJcbiAqXHJcbiAqIEVhY2ggaXRlbSBzaG91bGQgY29udGFpbiBkYXRhIHRoYXQgeW91IG5lZWQgdG8gZ2VuZXJhdGUgc2xpZGVcclxuICogKGZvciBpbWFnZSBzbGlkZSBpdCB3b3VsZCBiZSBzcmMgKGltYWdlIFVSTCksIHdpZHRoIChpbWFnZSB3aWR0aCksIGhlaWdodCwgc3Jjc2V0LCBhbHQpLlxyXG4gKlxyXG4gKiBJZiB0aGVzZSBwcm9wZXJ0aWVzIGFyZSBub3QgcHJlc2VudCBpbiB5b3VyIGluaXRpYWwgYXJyYXksIHlvdSBtYXkgXCJwcmUtcGFyc2VcIiBlYWNoIGl0ZW0gZnJvbSBpdGVtRGF0YSBmaWx0ZXIuXHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXJ9IGJnT3BhY2l0eVxyXG4gKiBCYWNrZ3JvdW5kIGJhY2tkcm9wIG9wYWNpdHksIGFsd2F5cyBkZWZpbmUgaXQgdmlhIHRoaXMgb3B0aW9uIGFuZCBub3QgdmlhIENTUyByZ2JhIGNvbG9yLlxyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyfSBzcGFjaW5nXHJcbiAqIFNwYWNpbmcgYmV0d2VlbiBzbGlkZXMuIERlZmluZWQgYXMgcmF0aW8gcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0IHdpZHRoICgwLjEgPSAxMCUgb2Ygdmlld3BvcnQpLlxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gYWxsb3dQYW5Ub05leHRcclxuICogQWxsb3cgc3dpcGUgbmF2aWdhdGlvbiB0byB0aGUgbmV4dCBzbGlkZSB3aGVuIHRoZSBjdXJyZW50IHNsaWRlIGlzIHpvb21lZC4gRG9lcyBub3QgYXBwbHkgdG8gbW91c2UgZXZlbnRzLlxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gbG9vcFxyXG4gKiBJZiBzZXQgdG8gdHJ1ZSB5b3UnbGwgYmUgYWJsZSB0byBzd2lwZSBmcm9tIHRoZSBsYXN0IHRvIHRoZSBmaXJzdCBpbWFnZS5cclxuICogT3B0aW9uIGlzIGFsd2F5cyBmYWxzZSB3aGVuIHRoZXJlIGFyZSBsZXNzIHRoYW4gMyBzbGlkZXMuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBbd2hlZWxUb1pvb21dXHJcbiAqIEJ5IGRlZmF1bHQgUGhvdG9Td2lwZSB6b29tcyBpbWFnZSB3aXRoIGN0cmwtd2hlZWwsIGlmIHlvdSBlbmFibGUgdGhpcyBvcHRpb24gLSBpbWFnZSB3aWxsIHpvb20ganVzdCB2aWEgd2hlZWwuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBwaW5jaFRvQ2xvc2VcclxuICogUGluY2ggdG91Y2ggZ2VzdHVyZSB0byBjbG9zZSB0aGUgZ2FsbGVyeS5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IGNsb3NlT25WZXJ0aWNhbERyYWdcclxuICogVmVydGljYWwgZHJhZyBnZXN0dXJlIHRvIGNsb3NlIHRoZSBQaG90b1N3aXBlLlxyXG4gKlxyXG4gKiBAcHJvcCB7UGFkZGluZ30gW3BhZGRpbmddXHJcbiAqIFNsaWRlIGFyZWEgcGFkZGluZyAoaW4gcGl4ZWxzKS5cclxuICpcclxuICogQHByb3Ageyh2aWV3cG9ydFNpemU6IFBvaW50LCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBQYWRkaW5nfSBbcGFkZGluZ0ZuXVxyXG4gKiBUaGUgb3B0aW9uIGlzIGNoZWNrZWQgZnJlcXVlbnRseSwgc28gbWFrZSBzdXJlIGl0J3MgcGVyZm9ybWFudC4gT3ZlcnJpZGVzIHBhZGRpbmcgb3B0aW9uIGlmIGRlZmluZWQuIEZvciBleGFtcGxlOlxyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyIHwgZmFsc2V9IGhpZGVBbmltYXRpb25EdXJhdGlvblxyXG4gKiBUcmFuc2l0aW9uIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcywgY2FuIGJlIDAuXHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXIgfCBmYWxzZX0gc2hvd0FuaW1hdGlvbkR1cmF0aW9uXHJcbiAqIFRyYW5zaXRpb24gZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLCBjYW4gYmUgMC5cclxuICpcclxuICogQHByb3Age251bWJlciB8IGZhbHNlfSB6b29tQW5pbWF0aW9uRHVyYXRpb25cclxuICogVHJhbnNpdGlvbiBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMsIGNhbiBiZSAwLlxyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBlYXNpbmdcclxuICogU3RyaW5nLCAnY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpJy4gQ1NTIGVhc2luZyBmdW5jdGlvbiBmb3Igb3Blbi9jbG9zZS96b29tIHRyYW5zaXRpb25zLlxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gZXNjS2V5XHJcbiAqIEVzYyBrZXkgdG8gY2xvc2UuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBhcnJvd0tleXNcclxuICogTGVmdC9yaWdodCBhcnJvdyBrZXlzIGZvciBuYXZpZ2F0aW9uLlxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gcmV0dXJuRm9jdXNcclxuICogUmVzdG9yZSBmb2N1cyB0aGUgbGFzdCBhY3RpdmUgZWxlbWVudCBhZnRlciBQaG90b1N3aXBlIGlzIGNsb3NlZC5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IGNsaWNrVG9DbG9zZU5vblpvb21hYmxlXHJcbiAqIElmIGltYWdlIGlzIG5vdCB6b29tYWJsZSAoZm9yIGV4YW1wbGUsIHNtYWxsZXIgdGhhbiB2aWV3cG9ydCkgaXQgY2FuIGJlIGNsb3NlZCBieSBjbGlja2luZyBvbiBpdC5cclxuICpcclxuICogQHByb3Age0FjdGlvblR5cGUgfCBBY3Rpb25GbiB8IGZhbHNlfSBpbWFnZUNsaWNrQWN0aW9uXHJcbiAqIFJlZmVyIHRvIGNsaWNrIGFuZCB0YXAgYWN0aW9ucyBwYWdlLlxyXG4gKlxyXG4gKiBAcHJvcCB7QWN0aW9uVHlwZSB8IEFjdGlvbkZuIHwgZmFsc2V9IGJnQ2xpY2tBY3Rpb25cclxuICogUmVmZXIgdG8gY2xpY2sgYW5kIHRhcCBhY3Rpb25zIHBhZ2UuXHJcbiAqXHJcbiAqIEBwcm9wIHtBY3Rpb25UeXBlIHwgQWN0aW9uRm4gfCBmYWxzZX0gdGFwQWN0aW9uXHJcbiAqIFJlZmVyIHRvIGNsaWNrIGFuZCB0YXAgYWN0aW9ucyBwYWdlLlxyXG4gKlxyXG4gKiBAcHJvcCB7QWN0aW9uVHlwZSB8IEFjdGlvbkZuIHwgZmFsc2V9IGRvdWJsZVRhcEFjdGlvblxyXG4gKiBSZWZlciB0byBjbGljayBhbmQgdGFwIGFjdGlvbnMgcGFnZS5cclxuICpcclxuICogQHByb3Age251bWJlcn0gcHJlbG9hZGVyRGVsYXlcclxuICogRGVsYXkgYmVmb3JlIHRoZSBsb2FkaW5nIGluZGljYXRvciB3aWxsIGJlIGRpc3BsYXllZCxcclxuICogaWYgaW1hZ2UgaXMgbG9hZGVkIGR1cmluZyBpdCAtIHRoZSBpbmRpY2F0b3Igd2lsbCBub3QgYmUgZGlzcGxheWVkIGF0IGFsbC4gQ2FuIGJlIHplcm8uXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IGluZGV4SW5kaWNhdG9yU2VwXHJcbiAqIFVzZWQgZm9yIHNsaWRlIGNvdW50IGluZGljYXRvciAoXCIxIG9mIDEwIFwiKS5cclxuICpcclxuICogQHByb3AgeyhvcHRpb25zOiBQaG90b1N3aXBlT3B0aW9ucywgcHN3cDogUGhvdG9Td2lwZUJhc2UpID0+IFBvaW50fSBbZ2V0Vmlld3BvcnRTaXplRm5dXHJcbiAqIEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHNsaWRlIHZpZXdwb3J0IHdpZHRoIGFuZCBoZWlnaHQsIGluIGZvcm1hdCB7eDogMTAwLCB5OiAxMDB9LlxyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBlcnJvck1zZ1xyXG4gKiBNZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW1hZ2Ugd2Fzbid0IGFibGUgdG8gbG9hZC4gSWYgeW91IG5lZWQgdG8gZGlzcGxheSBIVE1MIC0gdXNlIGNvbnRlbnRFcnJvckVsZW1lbnQgZmlsdGVyLlxyXG4gKlxyXG4gKiBAcHJvcCB7W251bWJlciwgbnVtYmVyXX0gcHJlbG9hZFxyXG4gKiBMYXp5IGxvYWRpbmcgb2YgbmVhcmJ5IHNsaWRlcyBiYXNlZCBvbiBkaXJlY3Rpb24gb2YgbW92ZW1lbnQuIFNob3VsZCBiZSBhbiBhcnJheSB3aXRoIHR3byBpbnRlZ2VycyxcclxuICogZmlyc3Qgb25lIC0gbnVtYmVyIG9mIGl0ZW1zIHRvIHByZWxvYWQgYmVmb3JlIHRoZSBjdXJyZW50IGltYWdlLCBzZWNvbmQgb25lIC0gYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2UuXHJcbiAqIFR3byBuZWFyYnkgaW1hZ2VzIGFyZSBhbHdheXMgbG9hZGVkLlxyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbbWFpbkNsYXNzXVxyXG4gKiBDbGFzcyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBvZiBQaG90b1N3aXBlLCBtYXkgY29udGFpbiBtdWx0aXBsZSBzZXBhcmF0ZWQgYnkgc3BhY2UuXHJcbiAqIEV4YW1wbGUgb24gU3R5bGluZyBwYWdlLlxyXG4gKlxyXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IFthcHBlbmRUb0VsXVxyXG4gKiBFbGVtZW50IHRvIHdoaWNoIFBob3RvU3dpcGUgZGlhbG9nIHdpbGwgYmUgYXBwZW5kZWQgd2hlbiBpdCBvcGVucy5cclxuICpcclxuICogQHByb3Age251bWJlcn0gbWF4V2lkdGhUb0FuaW1hdGVcclxuICogTWF4aW11bSB3aWR0aCBvZiBpbWFnZSB0byBhbmltYXRlLCBpZiBpbml0aWFsIHJlbmRlcmVkIGltYWdlIHdpZHRoXHJcbiAqIGlzIGxhcmdlciB0aGFuIHRoaXMgdmFsdWUgLSB0aGUgb3BlbmluZy9jbG9zaW5nIHRyYW5zaXRpb24gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc2FibGVkLlxyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbY2xvc2VUaXRsZV1cclxuICogVHJhbnNsYXRpbmdcclxuICpcclxuICogQHByb3Age3N0cmluZ30gW3pvb21UaXRsZV1cclxuICogVHJhbnNsYXRpbmdcclxuICpcclxuICogQHByb3Age3N0cmluZ30gW2Fycm93UHJldlRpdGxlXVxyXG4gKiBUcmFuc2xhdGluZ1xyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbYXJyb3dOZXh0VGl0bGVdXHJcbiAqIFRyYW5zbGF0aW5nXHJcbiAqXHJcbiAqIEBwcm9wIHsnem9vbScgfCAnZmFkZScgfCAnbm9uZSd9IFtzaG93SGlkZUFuaW1hdGlvblR5cGVdXHJcbiAqIFRvIGFkanVzdCBvcGVuaW5nIG9yIGNsb3NpbmcgdHJhbnNpdGlvbiB0eXBlIHVzZSBsaWdodGJveCBvcHRpb24gYHNob3dIaWRlQW5pbWF0aW9uVHlwZWAgKGBTdHJpbmdgKS5cclxuICogSXQgc3VwcG9ydHMgdGhyZWUgdmFsdWVzIC0gYHpvb21gIChkZWZhdWx0KSwgYGZhZGVgIChkZWZhdWx0IGlmIHRoZXJlIGlzIG5vIHRodW1ibmFpbCkgYW5kIGBub25lYC5cclxuICpcclxuICogQW5pbWF0aW9ucyBhcmUgYXV0b21hdGljYWxseSBkaXNhYmxlZCBpZiB1c2VyIGAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKWAuXHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXJ9IGluZGV4XHJcbiAqIERlZmluZXMgc3RhcnQgc2xpZGUgaW5kZXguXHJcbiAqXHJcbiAqIEBwcm9wIHsoZTogTW91c2VFdmVudCkgPT4gbnVtYmVyfSBbZ2V0Q2xpY2tlZEluZGV4Rm5dXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBbYXJyb3dQcmV2XVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2Fycm93TmV4dF1cclxuICogQHByb3Age2Jvb2xlYW59IFt6b29tXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2Nsb3NlXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2NvdW50ZXJdXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthcnJvd1ByZXZTVkddXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthcnJvd05leHRTVkddXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFt6b29tU1ZHXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbY2xvc2VTVkddXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtjb3VudGVyU1ZHXVxyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbYXJyb3dQcmV2VGl0bGVdXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthcnJvd05leHRUaXRsZV1cclxuICogQHByb3Age3N0cmluZ30gW3pvb21UaXRsZV1cclxuICogQHByb3Age3N0cmluZ30gW2Nsb3NlVGl0bGVdXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtjb3VudGVyVGl0bGVdXHJcbiAqXHJcbiAqIEBwcm9wIHtab29tTGV2ZWxPcHRpb259IFtpbml0aWFsWm9vbUxldmVsXVxyXG4gKiBAcHJvcCB7Wm9vbUxldmVsT3B0aW9ufSBbc2Vjb25kYXJ5Wm9vbUxldmVsXVxyXG4gKiBAcHJvcCB7Wm9vbUxldmVsT3B0aW9ufSBbbWF4Wm9vbUxldmVsXVxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW21vdXNlTW92ZVBhbl1cclxuICogQHByb3Age1BvaW50IHwgbnVsbH0gW2luaXRpYWxQb2ludGVyUG9zXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW3Nob3dIaWRlT3BhY2l0eV1cclxuICpcclxuICogQHByb3Age1Bob3RvU3dpcGVNb2R1bGVPcHRpb259IFtwc3dwTW9kdWxlXVxyXG4gKiBAcHJvcCB7KCkgPT4gUHJvbWlzZTxhbnk+fSBbb3BlblByb21pc2VdXHJcbiAqIEBwcm9wIHtib29sZWFufSBbcHJlbG9hZEZpcnN0U2xpZGVdXHJcbiAqIEBwcm9wIHtFbGVtZW50UHJvdmlkZXJ9IFtnYWxsZXJ5XVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbZ2FsbGVyeVNlbGVjdG9yXVxyXG4gKiBAcHJvcCB7RWxlbWVudFByb3ZpZGVyfSBbY2hpbGRyZW5dXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtjaGlsZFNlbGVjdG9yXVxyXG4gKiBAcHJvcCB7c3RyaW5nIHwgZmFsc2V9IFt0aHVtYlNlbGVjdG9yXVxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZSB7UHJlcGFyZWRQaG90b1N3aXBlT3B0aW9uc30gKi9cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgYWxsb3dQYW5Ub05leHQ6IHRydWUsXHJcbiAgc3BhY2luZzogMC4xLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGluY2hUb0Nsb3NlOiB0cnVlLFxyXG4gIGNsb3NlT25WZXJ0aWNhbERyYWc6IHRydWUsXHJcbiAgaGlkZUFuaW1hdGlvbkR1cmF0aW9uOiAzMzMsXHJcbiAgc2hvd0FuaW1hdGlvbkR1cmF0aW9uOiAzMzMsXHJcbiAgem9vbUFuaW1hdGlvbkR1cmF0aW9uOiAzMzMsXHJcbiAgZXNjS2V5OiB0cnVlLFxyXG4gIGFycm93S2V5czogdHJ1ZSxcclxuICByZXR1cm5Gb2N1czogdHJ1ZSxcclxuICBtYXhXaWR0aFRvQW5pbWF0ZTogNDAwMCxcclxuICBjbGlja1RvQ2xvc2VOb25ab29tYWJsZTogdHJ1ZSxcclxuICBpbWFnZUNsaWNrQWN0aW9uOiAnem9vbS1vci1jbG9zZScsXHJcbiAgYmdDbGlja0FjdGlvbjogJ2Nsb3NlJyxcclxuICB0YXBBY3Rpb246ICd0b2dnbGUtY29udHJvbHMnLFxyXG4gIGRvdWJsZVRhcEFjdGlvbjogJ3pvb20nLFxyXG4gIGluZGV4SW5kaWNhdG9yU2VwOiAnIC8gJyxcclxuICBwcmVsb2FkZXJEZWxheTogMjAwMCxcclxuICBiZ09wYWNpdHk6IDAuOCxcclxuXHJcbiAgaW5kZXg6IDAsXHJcbiAgZXJyb3JNc2c6ICdUaGUgaW1hZ2UgY2Fubm90IGJlIGxvYWRlZCcsXHJcbiAgcHJlbG9hZDogWzEsIDJdLFxyXG4gIGVhc2luZzogJ2N1YmljLWJlemllciguNCwwLC4yMiwxKSdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQaG90b1N3aXBlIENvcmVcclxuICovXHJcbmNsYXNzIFBob3RvU3dpcGUgZXh0ZW5kcyBQaG90b1N3aXBlQmFzZSB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gW29wdGlvbnNdXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9wcmVwYXJlT3B0aW9ucyhvcHRpb25zIHx8IHt9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIG9mZnNldCBvZiB2aWV3cG9ydCByZWxhdGl2ZSB0byBkb2N1bWVudFxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtQb2ludH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQb2ludH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3ByZXZWaWV3cG9ydFNpemUgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpemUgb2Ygc2Nyb2xsYWJsZSBQaG90b1N3aXBlIHZpZXdwb3J0XHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLnZpZXdwb3J0U2l6ZSA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogYmFja2dyb3VuZCAoYmFja2Ryb3ApIG9wYWNpdHlcclxuICAgICAqL1xyXG4gICAgdGhpcy5iZ09wYWNpdHkgPSAxO1xyXG4gICAgdGhpcy5jdXJySW5kZXggPSAwO1xyXG4gICAgdGhpcy5wb3RlbnRpYWxJbmRleCA9IDA7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3lpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzTW91c2UgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7U2xpZGVEYXRhfVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9pbml0aWFsSXRlbURhdGEgPSB7fTtcclxuICAgIC8qKiBAdHlwZSB7Qm91bmRzIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5faW5pdGlhbFRodW1iQm91bmRzID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnRvcEJhciA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnNjcm9sbFdyYXAgPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHR5cGUge1NsaWRlIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5jdXJyU2xpZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRE9NRXZlbnRzKCk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9ucygpO1xyXG4gICAgdGhpcy5tYWluU2Nyb2xsID0gbmV3IE1haW5TY3JvbGwodGhpcyk7XHJcbiAgICB0aGlzLmdlc3R1cmVzID0gbmV3IEdlc3R1cmVzKHRoaXMpO1xyXG4gICAgdGhpcy5vcGVuZXIgPSBuZXcgT3BlbmVyKHRoaXMpO1xyXG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCh0aGlzKTtcclxuICAgIHRoaXMuY29udGVudExvYWRlciA9IG5ldyBDb250ZW50TG9hZGVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5pc0Rlc3Ryb3lpbmcpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuZGlzcGF0Y2goJ2luaXQnKTsgLy8gbGVnYWN5XHJcbiAgICB0aGlzLmRpc3BhdGNoKCdiZWZvcmVPcGVuJyk7XHJcblxyXG4gICAgdGhpcy5fY3JlYXRlTWFpblN0cnVjdHVyZSgpO1xyXG5cclxuICAgIC8vIGFkZCBjbGFzc2VzIHRvIHRoZSByb290IGVsZW1lbnQgb2YgUGhvdG9Td2lwZVxyXG4gICAgbGV0IHJvb3RDbGFzc2VzID0gJ3Bzd3AtLW9wZW4nO1xyXG4gICAgaWYgKHRoaXMuZ2VzdHVyZXMuc3VwcG9ydHNUb3VjaCkge1xyXG4gICAgICByb290Q2xhc3NlcyArPSAnIHBzd3AtLXRvdWNoJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMubWFpbkNsYXNzKSB7XHJcbiAgICAgIHJvb3RDbGFzc2VzICs9ICcgJyArIHRoaXMub3B0aW9ucy5tYWluQ2xhc3M7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgcm9vdENsYXNzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJySW5kZXggPSB0aGlzLm9wdGlvbnMuaW5kZXggfHwgMDtcclxuICAgIHRoaXMucG90ZW50aWFsSW5kZXggPSB0aGlzLmN1cnJJbmRleDtcclxuICAgIHRoaXMuZGlzcGF0Y2goJ2ZpcnN0VXBkYXRlJyk7IC8vIHN0YXJ0aW5nIGluZGV4IGNhbiBiZSBtb2RpZmllZCBoZXJlXHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSBzY3JvbGwgd2hlZWwgaGFuZGxlciB0byBibG9jayB0aGUgc2Nyb2xsXHJcbiAgICB0aGlzLnNjcm9sbFdoZWVsID0gbmV3IFNjcm9sbFdoZWVsKHRoaXMpO1xyXG5cclxuICAgIC8vIHNhbml0aXplIGluZGV4XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHRoaXMuY3VyckluZGV4KVxyXG4gICAgICB8fCB0aGlzLmN1cnJJbmRleCA8IDBcclxuICAgICAgfHwgdGhpcy5jdXJySW5kZXggPj0gdGhpcy5nZXROdW1JdGVtcygpKSB7XHJcbiAgICAgIHRoaXMuY3VyckluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZ2VzdHVyZXMuc3VwcG9ydHNUb3VjaCkge1xyXG4gICAgICAvLyBlbmFibGUgbW91c2UgZmVhdHVyZXMgaWYgbm8gdG91Y2ggc3VwcG9ydCBkZXRlY3RlZFxyXG4gICAgICB0aGlzLm1vdXNlRGV0ZWN0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYXVzZXMgZm9yY2VkIHN5bmNocm9ub3VzIGxheW91dFxyXG4gICAgdGhpcy51cGRhdGVTaXplKCk7XHJcblxyXG4gICAgdGhpcy5vZmZzZXQueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsSXRlbURhdGEgPSB0aGlzLmdldEl0ZW1EYXRhKHRoaXMuY3VyckluZGV4KTtcclxuICAgIHRoaXMuZGlzcGF0Y2goJ2dldHRpbmdEYXRhJywge1xyXG4gICAgICBpbmRleDogdGhpcy5jdXJySW5kZXgsXHJcbiAgICAgIGRhdGE6IHRoaXMuX2luaXRpYWxJdGVtRGF0YSxcclxuICAgICAgc2xpZGU6IHVuZGVmaW5lZFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gKkxheW91dCogLSBjYWxjdWxhdGUgc2l6ZSBhbmQgcG9zaXRpb24gb2YgZWxlbWVudHMgaGVyZVxyXG4gICAgdGhpcy5faW5pdGlhbFRodW1iQm91bmRzID0gdGhpcy5nZXRUaHVtYkJvdW5kcygpO1xyXG4gICAgdGhpcy5kaXNwYXRjaCgnaW5pdGlhbExheW91dCcpO1xyXG5cclxuICAgIHRoaXMub24oJ29wZW5pbmdBbmltYXRpb25FbmQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaXRlbUhvbGRlcnMgfSA9IHRoaXMubWFpblNjcm9sbDtcclxuXHJcbiAgICAgIC8vIEFkZCBjb250ZW50IHRvIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBzbGlkZVxyXG4gICAgICBpZiAoaXRlbUhvbGRlcnNbMF0pIHtcclxuICAgICAgICBpdGVtSG9sZGVyc1swXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLnNldENvbnRlbnQoaXRlbUhvbGRlcnNbMF0sIHRoaXMuY3VyckluZGV4IC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1Ib2xkZXJzWzJdKSB7XHJcbiAgICAgICAgaXRlbUhvbGRlcnNbMl0uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KGl0ZW1Ib2xkZXJzWzJdLCB0aGlzLmN1cnJJbmRleCArIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEhlYXZ5KCk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRMb2FkZXIudXBkYXRlTGF6eSgpO1xyXG5cclxuICAgICAgdGhpcy5ldmVudHMuYWRkKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVBhZ2VSZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZXZlbnRzLmFkZCh3aW5kb3csICdzY3JvbGwnLCB0aGlzLl91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0LmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoKCdiaW5kRXZlbnRzJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZXQgY29udGVudCBmb3IgY2VudGVyIHNsaWRlIChmaXJzdCB0aW1lKVxyXG4gICAgaWYgKHRoaXMubWFpblNjcm9sbC5pdGVtSG9sZGVyc1sxXSkge1xyXG4gICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzWzFdLCB0aGlzLmN1cnJJbmRleCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc3BhdGNoKCdjaGFuZ2UnKTtcclxuXHJcbiAgICB0aGlzLm9wZW5lci5vcGVuKCk7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaCgnYWZ0ZXJJbml0Jyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbG9vcGVkIHNsaWRlIGluZGV4XHJcbiAgICogKGZvciBleGFtcGxlLCAtMSB3aWxsIHJldHVybiB0aGUgbGFzdCBzbGlkZSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0TG9vcGVkSW5kZXgoaW5kZXgpIHtcclxuICAgIGNvbnN0IG51bVNsaWRlcyA9IHRoaXMuZ2V0TnVtSXRlbXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmxvb3ApIHtcclxuICAgICAgaWYgKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xyXG4gICAgICAgIGluZGV4IC09IG51bVNsaWRlcztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgIGluZGV4ICs9IG51bVNsaWRlcztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbGFtcChpbmRleCwgMCwgbnVtU2xpZGVzIC0gMSk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRIZWF2eSgpIHtcclxuICAgIHRoaXMubWFpblNjcm9sbC5pdGVtSG9sZGVycy5mb3JFYWNoKChpdGVtSG9sZGVyKSA9PiB7XHJcbiAgICAgIGl0ZW1Ib2xkZXIuc2xpZGU/LmFwcGVuZEhlYXZ5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgc2xpZGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggTmV3IGluZGV4XHJcbiAgICovXHJcbiAgZ29UbyhpbmRleCkge1xyXG4gICAgdGhpcy5tYWluU2Nyb2xsLm1vdmVJbmRleEJ5KFxyXG4gICAgICB0aGlzLmdldExvb3BlZEluZGV4KGluZGV4KSAtIHRoaXMucG90ZW50aWFsSW5kZXhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHbyB0byB0aGUgbmV4dCBzbGlkZS5cclxuICAgKi9cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy5nb1RvKHRoaXMucG90ZW50aWFsSW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdvIHRvIHRoZSBwcmV2aW91cyBzbGlkZS5cclxuICAgKi9cclxuICBwcmV2KCkge1xyXG4gICAgdGhpcy5nb1RvKHRoaXMucG90ZW50aWFsSW5kZXggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzZWUgc2xpZGUvc2xpZGUuanMgem9vbVRvXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BhcmFtZXRlcnM8U2xpZGVbJ3pvb21UbyddPn0gYXJnc1xyXG4gICAqL1xyXG4gIHpvb21UbyguLi5hcmdzKSB7XHJcbiAgICB0aGlzLmN1cnJTbGlkZT8uem9vbVRvKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHNlZSBzbGlkZS9zbGlkZS5qcyB0b2dnbGVab29tXHJcbiAgICovXHJcbiAgdG9nZ2xlWm9vbSgpIHtcclxuICAgIHRoaXMuY3VyclNsaWRlPy50b2dnbGVab29tKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZSB0aGUgZ2FsbGVyeS5cclxuICAgKiBBZnRlciBjbG9zaW5nIHRyYW5zaXRpb24gZW5kcyAtIGRlc3Ryb3kgaXRcclxuICAgKi9cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICghdGhpcy5vcGVuZXIuaXNPcGVuIHx8IHRoaXMuaXNEZXN0cm95aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzRGVzdHJveWluZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaCgnY2xvc2UnKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50cy5yZW1vdmVBbGwoKTtcclxuICAgIHRoaXMub3BlbmVyLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95cyB0aGUgZ2FsbGVyeTpcclxuICAgKiAtIGluc3RhbnRseSBjbG9zZXMgdGhlIGdhbGxlcnlcclxuICAgKiAtIHVuYmluZHMgZXZlbnRzLFxyXG4gICAqIC0gY2xlYW5zIGludGVydmFscyBhbmQgdGltZW91dHNcclxuICAgKiAtIHJlbW92ZXMgZWxlbWVudHMgZnJvbSBET01cclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRGVzdHJveWluZykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuc2hvd0hpZGVBbmltYXRpb25UeXBlID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdkZXN0cm95Jyk7XHJcblxyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsV3JhcCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFdyYXAub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICB0aGlzLnNjcm9sbFdyYXAub250b3VjaGVuZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Py5yZW1vdmUoKTtcclxuXHJcbiAgICB0aGlzLm1haW5TY3JvbGwuaXRlbUhvbGRlcnMuZm9yRWFjaCgoaXRlbUhvbGRlcikgPT4ge1xyXG4gICAgICBpdGVtSG9sZGVyLnNsaWRlPy5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRlbnRMb2FkZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5ldmVudHMucmVtb3ZlQWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZyZXNoL3JlbG9hZCBjb250ZW50IG9mIGEgc2xpZGUgYnkgaXRzIGluZGV4XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2xpZGVJbmRleFxyXG4gICAqL1xyXG4gIHJlZnJlc2hTbGlkZUNvbnRlbnQoc2xpZGVJbmRleCkge1xyXG4gICAgdGhpcy5jb250ZW50TG9hZGVyLnJlbW92ZUJ5SW5kZXgoc2xpZGVJbmRleCk7XHJcbiAgICB0aGlzLm1haW5TY3JvbGwuaXRlbUhvbGRlcnMuZm9yRWFjaCgoaXRlbUhvbGRlciwgaSkgPT4ge1xyXG4gICAgICBsZXQgcG90ZW50aWFsSG9sZGVySW5kZXggPSAodGhpcy5jdXJyU2xpZGU/LmluZGV4ID8/IDApIC0gMSArIGk7XHJcbiAgICAgIGlmICh0aGlzLmNhbkxvb3AoKSkge1xyXG4gICAgICAgIHBvdGVudGlhbEhvbGRlckluZGV4ID0gdGhpcy5nZXRMb29wZWRJbmRleChwb3RlbnRpYWxIb2xkZXJJbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvdGVudGlhbEhvbGRlckluZGV4ID09PSBzbGlkZUluZGV4KSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBuZXcgc2xpZGUgY29udGVudFxyXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChpdGVtSG9sZGVyLCBzbGlkZUluZGV4LCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgdGhlIG5ldyBzbGlkZSBpZiBpdCdzIGN1cnJlbnRcclxuICAgICAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyU2xpZGUgPSBpdGVtSG9sZGVyLnNsaWRlO1xyXG4gICAgICAgICAgaXRlbUhvbGRlci5zbGlkZT8uc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdjaGFuZ2UnKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBTZXQgc2xpZGUgY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtJdGVtSG9sZGVyfSBob2xkZXIgbWFpblNjcm9sbC5pdGVtSG9sZGVycyBhcnJheSBpdGVtXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIElmIGNvbnRlbnQgc2hvdWxkIGJlIHNldCBldmVuIGlmIGluZGV4IHdhc24ndCBjaGFuZ2VkXHJcbiAgICovXHJcbiAgc2V0Q29udGVudChob2xkZXIsIGluZGV4LCBmb3JjZSkge1xyXG4gICAgaWYgKHRoaXMuY2FuTG9vcCgpKSB7XHJcbiAgICAgIGluZGV4ID0gdGhpcy5nZXRMb29wZWRJbmRleChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvbGRlci5zbGlkZSkge1xyXG4gICAgICBpZiAoaG9sZGVyLnNsaWRlLmluZGV4ID09PSBpbmRleCAmJiAhZm9yY2UpIHtcclxuICAgICAgICAvLyBleGl0IGlmIGhvbGRlciBhbHJlYWR5IGNvbnRhaW5zIHRoaXMgc2xpZGVcclxuICAgICAgICAvLyB0aGlzIGNvdWxkIGJlIGNvbW1vbiB3aGVuIGp1c3QgdGhyZWUgc2xpZGVzIGFyZSB1c2VkXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBkZXN0cm95IHByZXZpb3VzIHNsaWRlXHJcbiAgICAgIGhvbGRlci5zbGlkZS5kZXN0cm95KCk7XHJcbiAgICAgIGhvbGRlci5zbGlkZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleGl0IGlmIG5vIGxvb3AgYW5kIGluZGV4IGlzIG91dCBvZiBib3VuZHNcclxuICAgIGlmICghdGhpcy5jYW5Mb29wKCkgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmdldE51bUl0ZW1zKCkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtRGF0YSA9IHRoaXMuZ2V0SXRlbURhdGEoaW5kZXgpO1xyXG4gICAgaG9sZGVyLnNsaWRlID0gbmV3IFNsaWRlKGl0ZW1EYXRhLCBpbmRleCwgdGhpcyk7XHJcblxyXG4gICAgLy8gc2V0IGN1cnJlbnQgc2xpZGVcclxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5jdXJySW5kZXgpIHtcclxuICAgICAgdGhpcy5jdXJyU2xpZGUgPSBob2xkZXIuc2xpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaG9sZGVyLnNsaWRlLmFwcGVuZChob2xkZXIuZWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm5zIHtQb2ludH0gKi9cclxuICBnZXRWaWV3cG9ydENlbnRlclBvaW50KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogdGhpcy52aWV3cG9ydFNpemUueCAvIDIsXHJcbiAgICAgIHk6IHRoaXMudmlld3BvcnRTaXplLnkgLyAyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNpemUgb2YgYWxsIGVsZW1lbnRzLlxyXG4gICAqIEV4ZWN1dGVkIG9uIGluaXQgYW5kIG9uIHBhZ2UgcmVzaXplLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIFVwZGF0ZSBzaXplIGV2ZW4gaWYgc2l6ZSBvZiB2aWV3cG9ydCB3YXMgbm90IGNoYW5nZWQuXHJcbiAgICovXHJcbiAgdXBkYXRlU2l6ZShmb3JjZSkge1xyXG4gICAgLy8gbGV0IGl0ZW07XHJcbiAgICAvLyBsZXQgaXRlbUluZGV4O1xyXG5cclxuICAgIGlmICh0aGlzLmlzRGVzdHJveWluZykge1xyXG4gICAgICAvLyBleGl0IGlmIFBob3RvU3dpcGUgaXMgY2xvc2VkIG9yIGNsb3NpbmdcclxuICAgICAgLy8gKHRvIGF2b2lkIGVycm9ycywgYXMgcmVzaXplIGV2ZW50IG1pZ2h0IGJlIGRlbGF5ZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnN0IG5ld1dpZHRoID0gdGhpcy5zY3JvbGxXcmFwLmNsaWVudFdpZHRoO1xyXG4gICAgLy9jb25zdCBuZXdIZWlnaHQgPSB0aGlzLnNjcm9sbFdyYXAuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IG5ld1ZpZXdwb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSh0aGlzLm9wdGlvbnMsIHRoaXMpO1xyXG5cclxuICAgIGlmICghZm9yY2UgJiYgcG9pbnRzRXF1YWwobmV3Vmlld3BvcnRTaXplLCB0aGlzLl9wcmV2Vmlld3BvcnRTaXplKSkge1xyXG4gICAgICAvLyBFeGl0IGlmIGRpbWVuc2lvbnMgd2VyZSBub3QgY2hhbmdlZFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzLl9wcmV2Vmlld3BvcnRTaXplLnggPSBuZXdXaWR0aDtcclxuICAgIC8vdGhpcy5fcHJldlZpZXdwb3J0U2l6ZS55ID0gbmV3SGVpZ2h0O1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5fcHJldlZpZXdwb3J0U2l6ZSwgbmV3Vmlld3BvcnRTaXplKTtcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdiZWZvcmVSZXNpemUnKTtcclxuXHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnZpZXdwb3J0U2l6ZSwgdGhpcy5fcHJldlZpZXdwb3J0U2l6ZSk7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlUGFnZVNjcm9sbE9mZnNldCgpO1xyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2goJ3ZpZXdwb3J0U2l6ZScpO1xyXG5cclxuICAgIC8vIFJlc2l6ZSBzbGlkZXMgb25seSBhZnRlciBvcGVuZXIgYW5pbWF0aW9uIGlzIGZpbmlzaGVkXHJcbiAgICAvLyBhbmQgZG9uJ3QgcmUtY2FsY3VsYXRlIHNpemUgb24gaW5pdGFsIHNpemUgdXBkYXRlXHJcbiAgICB0aGlzLm1haW5TY3JvbGwucmVzaXplKHRoaXMub3BlbmVyLmlzT3Blbik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmhhc01vdXNlICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcoYW55LWhvdmVyOiBob3ZlciknKS5tYXRjaGVzKSB7XHJcbiAgICAgIHRoaXMubW91c2VEZXRlY3RlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2goJ3Jlc2l6ZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wYWNpdHlcclxuICAgKi9cclxuICBhcHBseUJnT3BhY2l0eShvcGFjaXR5KSB7XHJcbiAgICB0aGlzLmJnT3BhY2l0eSA9IE1hdGgubWF4KG9wYWNpdHksIDApO1xyXG4gICAgaWYgKHRoaXMuYmcpIHtcclxuICAgICAgdGhpcy5iZy5zdHlsZS5vcGFjaXR5ID0gU3RyaW5nKHRoaXMuYmdPcGFjaXR5ICogdGhpcy5vcHRpb25zLmJnT3BhY2l0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIG1vdXNlIGlzIGRldGVjdGVkXHJcbiAgICovXHJcbiAgbW91c2VEZXRlY3RlZCgpIHtcclxuICAgIGlmICghdGhpcy5oYXNNb3VzZSkge1xyXG4gICAgICB0aGlzLmhhc01vdXNlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdwc3dwLS1oYXNfbW91c2UnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhZ2UgcmVzaXplIGV2ZW50IGhhbmRsZXJcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2hhbmRsZVBhZ2VSZXNpemUoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuXHJcbiAgICAvLyBJbiBpT1Mgd2VidmlldywgaWYgZWxlbWVudCBzaXplIGRlcGVuZHMgb24gZG9jdW1lbnQgc2l6ZSxcclxuICAgIC8vIGl0J2xsIGJlIG1lYXN1cmVkIGluY29ycmVjdGx5IGluIHJlc2l6ZSBldmVudFxyXG4gICAgLy9cclxuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzA1OTVcclxuICAgIC8vIGh0dHBzOi8vaGFja2Vybm9vbi5jb20vb25yZXNpemUtZXZlbnQtYnJva2VuLWluLW1vYmlsZS1zYWZhcmktZDg0NjkwMjdiZjRkXHJcbiAgICBpZiAoL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhZ2Ugc2Nyb2xsIG9mZnNldCBpcyB1c2VkXHJcbiAgICogdG8gZ2V0IGNvcnJlY3QgY29vcmRpbmF0ZXNcclxuICAgKiByZWxhdGl2ZSB0byBQaG90b1N3aXBlIHZpZXdwb3J0LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCgpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsT2Zmc2V0KDAsIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0U2Nyb2xsT2Zmc2V0KHgsIHkpIHtcclxuICAgIHRoaXMub2Zmc2V0LnggPSB4O1xyXG4gICAgdGhpcy5vZmZzZXQueSA9IHk7XHJcbiAgICB0aGlzLmRpc3BhdGNoKCd1cGRhdGVTY3JvbGxPZmZzZXQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBtYWluIEhUTUwgc3RydWN0dXJlIG9mIFBob3RvU3dpcGUsXHJcbiAgICogYW5kIGFkZCBpdCB0byBET01cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NyZWF0ZU1haW5TdHJ1Y3R1cmUoKSB7XHJcbiAgICAvLyByb290IERPTSBlbGVtZW50IG9mIFBob3RvU3dpcGUgKC5wc3dwKVxyXG4gICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncHN3cCcsICdkaXYnKTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xyXG5cclxuICAgIC8vIHRlbXBsYXRlIGlzIGxlZ2FjeSBwcm9wXHJcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5lbGVtZW50O1xyXG5cclxuICAgIC8vIEJhY2tncm91bmQgaXMgYWRkZWQgYXMgYSBzZXBhcmF0ZSBlbGVtZW50LFxyXG4gICAgLy8gYXMgYW5pbWF0aW5nIG9wYWNpdHkgaXMgZmFzdGVyIHRoYW4gYW5pbWF0aW5nIHJnYmEoKVxyXG4gICAgdGhpcy5iZyA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2JnJywgJ2RpdicsIHRoaXMuZWxlbWVudCk7XHJcbiAgICB0aGlzLnNjcm9sbFdyYXAgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19zY3JvbGwtd3JhcCcsICdzZWN0aW9uJywgdGhpcy5lbGVtZW50KTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgncHN3cF9fY29udGFpbmVyJywgJ2RpdicsIHRoaXMuc2Nyb2xsV3JhcCk7XHJcblxyXG4gICAgLy8gYXJpYSBwYXR0ZXJuOiBjYXJvdXNlbFxyXG4gICAgdGhpcy5zY3JvbGxXcmFwLnNldEF0dHJpYnV0ZSgnYXJpYS1yb2xlZGVzY3JpcHRpb24nLCAnY2Fyb3VzZWwnKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ29mZicpO1xyXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwc3dwX19pdGVtcycpO1xyXG5cclxuICAgIHRoaXMubWFpblNjcm9sbC5hcHBlbmRIb2xkZXJzKCk7XHJcblxyXG4gICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzKTtcclxuICAgIHRoaXMudWkuaW5pdCgpO1xyXG5cclxuICAgIC8vIGFwcGVuZCB0byBET01cclxuICAgICh0aGlzLm9wdGlvbnMuYXBwZW5kVG9FbCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBwb3NpdGlvbiBhbmQgZGltZW5zaW9ucyBvZiBzbWFsbCB0aHVtYm5haWxcclxuICAgKiAgIHt4Oix5Oix3On1cclxuICAgKlxyXG4gICAqIEhlaWdodCBpcyBvcHRpb25hbCAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgbGFyZ2UgaW1hZ2UpXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Qm91bmRzIHwgdW5kZWZpbmVkfVxyXG4gICAqL1xyXG4gIGdldFRodW1iQm91bmRzKCkge1xyXG4gICAgcmV0dXJuIGdldFRodW1iQm91bmRzKFxyXG4gICAgICB0aGlzLmN1cnJJbmRleCxcclxuICAgICAgdGhpcy5jdXJyU2xpZGUgPyB0aGlzLmN1cnJTbGlkZS5kYXRhIDogdGhpcy5faW5pdGlhbEl0ZW1EYXRhLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIFBob3RvU3dpcGUgY2FuIGhhdmUgY29udGludW91cyBsb29wXHJcbiAgICogQHJldHVybnMgQm9vbGVhblxyXG4gICAqL1xyXG4gIGNhbkxvb3AoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5sb29wICYmIHRoaXMuZ2V0TnVtSXRlbXMoKSA+IDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAgICogQHJldHVybnMge1ByZXBhcmVkUGhvdG9Td2lwZU9wdGlvbnN9XHJcbiAgICovXHJcbiAgX3ByZXBhcmVPcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pLCAodXBkYXRlOiBzbG93KScpLm1hdGNoZXMpIHtcclxuICAgICAgb3B0aW9ucy5zaG93SGlkZUFuaW1hdGlvblR5cGUgPSAnbm9uZSc7XHJcbiAgICAgIG9wdGlvbnMuem9vbUFuaW1hdGlvbkR1cmF0aW9uID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQHR5cGUge1ByZXBhcmVkUGhvdG9Td2lwZU9wdGlvbnN9ICovXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBob3RvU3dpcGUgYXMgZGVmYXVsdCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1waG90b3N3aXBlLmVzbS5qcy5tYXBcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmludGVyZmFjZSBTY3JpcHRSdW50aW1lIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhcnRNYXJrOiBQZXJmb3JtYW5jZU1hcms7XHJcbiAgZW5kTWFyazogUGVyZm9ybWFuY2VNYXJrO1xyXG59XHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHJlY29yZCBwZXJmb3JtYW5jZSBzdGFydCBhbmQgZW5kIG1hcmtzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSd2JQZXJmIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY3JpcHRSdW50aW1lTWFya3M6IFNjcmlwdFJ1bnRpbWUgPSB7XHJcbiAgICBuYW1lOiBudWxsLFxyXG4gICAgc3RhcnRNYXJrOiBudWxsLFxyXG4gICAgZW5kTWFyazogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKiogSW5zdGFudGlhdGluZyBhIFNjcmlwdFBlcmYgcmVjb3JkcyB0aGUgcGVyZm9ybWFuY2Ugc3RhcnQgbWFyay4gKi9cclxuICBjb25zdHJ1Y3RvcihzY3JpcHROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWUgPSBzY3JpcHROYW1lO1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3Muc3RhcnRNYXJrID0gcGVyZm9ybWFuY2UubWFyayhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfS1zdGFydGApO1xyXG4gICAgUndiUGVyZi5jb3VudCsrO1xyXG4gIH1cclxuXHJcbiAgLyoqIENhbGwgZW5kKCkgdG8gc2V0IHRoZSBlbmQgdGltZSBzdGFtcC4gKi9cclxuICBwdWJsaWMgZW5kKCkge1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MuZW5kTWFyayA9IHBlcmZvcm1hbmNlLm1hcmsoYCR7dGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZX0tZW5kYCk7XHJcbiAgICB0aGlzLm1lYXN1cmUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBBIGNvbnNvbGUgb3V0cHV0IG9mIHRoaXMgb2JqZWN0J3MgcGVyZm9ybWFuY2UgbWVhc3VyZW1lbnQuICovXHJcbiAgcHJpdmF0ZSBtZWFzdXJlKCkge1xyXG4gICAgbGV0IG1lYXN1cmUgPSBwZXJmb3JtYW5jZS5tZWFzdXJlKFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lLFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5zdGFydE1hcmsubmFtZSxcclxuICAgICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MuZW5kTWFyay5uYW1lXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZX0gZXhlY3V0aW9uIHRpbWUgaXM6ICR7bWVhc3VyZS5kdXJhdGlvbn1gKTtcclxuICB9XHJcbn1cclxuIl19
