(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"strict mode";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ps_Ip = exports.ps_At = exports.ps_Pwa = void 0;
//--Copyright (c) 2023-2025 Robert A. Howell
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9nbG9iYWwvcGhvdG9Td2lwZS50cyIsInNyYy9ndWlkZXNDb21wb25lbnRzLnRzIiwic3JjL2pzL3Bob3Rvc3dpcGUvcGhvdG9zd2lwZS1saWdodGJveC5lc20uanMiLCJzcmMvanMvcGhvdG9zd2lwZS9waG90b3N3aXBlLmVzbS5qcyIsInNyYy9tb2RlbHMvc2NyaXB0UGVyZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLGFBQWEsQ0FBQzs7Ozs7OztBQUNkLDRDQUE0QztBQUM1QyxnSEFBZ0Y7QUFDaEYsOEZBQStEO0FBRS9ELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksb0NBQWtCLENBQUM7UUFDdEMsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLGdCQUFnQixFQUFFLE1BQU07UUFDeEIsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLDJCQUFVO0tBQ3ZCLENBQUMsQ0FBQztJQUNILE1BQU0sT0FBTyxHQUFHO1FBQ2QsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLGdCQUFnQixFQUFFLE1BQU07UUFDeEIsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLDJCQUFVO0tBQ3ZCLENBQUM7SUFDRixNQUFNLEdBQUcsR0FBRztRQUNWLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4QixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsMkJBQVU7S0FDdkIsQ0FBQztJQUNGLE1BQU0sVUFBVSxHQUFHO1FBQ2pCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4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T0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLHVCQUF1QixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRyxDQUFDOztBQTlCSCwwQkErQkMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInN0cmljdCBtb2RlXCI7XHJcbi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBQaG90b1N3aXBlTGlnaHRib3ggZnJvbSBcIi4uLy4uL2pzL3Bob3Rvc3dpcGUvcGhvdG9zd2lwZS1saWdodGJveC5lc20uanNcIjtcclxuaW1wb3J0IFBob3RvU3dpcGUgZnJvbSBcIi4uLy4uL2pzL3Bob3Rvc3dpcGUvcGhvdG9zd2lwZS5lc20uanNcIjtcclxuXHJcbmNvbnN0IHBob3RvU3dpcGVfQXBwVGFiID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh7XHJcbiAgICBnYWxsZXJ5OiBcIiNkZXZUb29scy1HYWxsZXJ5XCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNkZXZUb29scy1QaWN0dXJlXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjRWxlbWVudHNUYWJcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxDb25zb2xlID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjQ29uc29sZVRhYlwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbFNvdXJjZXMgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNTb3VyY2VzVGFiXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsTmV0d29yayA9IHtcclxuICAgIGdhbGxlcnk6IFwiI05ldHdvcmtUYWJcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxQZXJmb3JtYW5jZSA9IHtcclxuICAgIGdhbGxlcnk6IFwiI1BlcmZvcm1hbmNlVGFiXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsTWVtb3J5ID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjTWVtb3J5VGFiXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsU2VjdXJpdHkgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNTZWN1cml0eVRhYlwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbExpZ2h0aG91c2UgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNMaWdodGhvdXNlVGFiXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsQ1NTT3ZlcnZpZXcgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNDU1NPdmVydmlld1RhYlwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbENsZWFyQ29va2llcyA9IHtcclxuICAgIGdhbGxlcnk6IFwiI0NsZWFyQ29va2llc1wiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbEh0bWxSZXNwb25zZXMgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNIdG1sUmVzcG9uc2VzXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH07XHJcbiAgY29uc3QgYWxsQ2hhdEdQVCA9IHtcclxuICAgIGdhbGxlcnk6IFwiI2NoYXRHUFRcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBhbGxQYWludDNEID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjcGFpbnQzRFwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgaW1hZ2VDbGlja0FjdGlvbjogXCJ6b29tXCIsXHJcbiAgICB0YXBBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGFsbEJvaW5jID0ge1xyXG4gICAgZ2FsbGVyeTogXCIjQk9JTkNcIixcclxuICAgIGNoaWxkcmVuOiBcIi5wc3dwLWdhbGxlcnlfX2l0ZW1cIixcclxuICAgIGltYWdlQ2xpY2tBY3Rpb246IFwiem9vbVwiLFxyXG4gICAgdGFwQWN0aW9uOiBcInpvb21cIixcclxuICAgIHBzd3BNb2R1bGU6IFBob3RvU3dpcGUsXHJcbiAgfTtcclxuICBjb25zdCBwaWNib3ggPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KG9wdGlvbnMpO1xyXG4gIGNvbnN0IHBhZ2UgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbCk7XHJcbiAgY29uc3QgcGFnZUNvbnNvbGUgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbENvbnNvbGUpO1xyXG4gIGNvbnN0IHBhZ2VTb3VyY2VzID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxTb3VyY2VzKTtcclxuICBjb25zdCBwYWdlTmV0d29yayA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsTmV0d29yayk7XHJcbiAgY29uc3QgcGFnZVBlcmZvcm1hbmNlID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxQZXJmb3JtYW5jZSk7XHJcbiAgY29uc3QgcGFnZU1lbW9yeSA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsTWVtb3J5KTtcclxuICBjb25zdCBwYWdlU2VjdXJpdHkgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbFNlY3VyaXR5KTtcclxuICBjb25zdCBwYWdlTGlnaHRob3VzZSA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsTGlnaHRob3VzZSk7XHJcbiAgY29uc3QgcGFnZUNTU092ZXJ2aWV3ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxDU1NPdmVydmlldyk7XHJcbiAgY29uc3QgcGFnZUNsZWFyQ29va2llcyA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsQ2xlYXJDb29raWVzKTtcclxuICBjb25zdCBwYWdlSHRtbFJlc3BvbnNlcyA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goYWxsSHRtbFJlc3BvbnNlcyk7XHJcbiAgY29uc3QgcGFnZUNoYXRHUFQgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbENoYXRHUFQpO1xyXG4gIGNvbnN0IHBhZ2VQYWludDNEID0gbmV3IFBob3RvU3dpcGVMaWdodGJveChhbGxQYWludDNEKTtcclxuICBjb25zdCBwYWdlQm9pbmMgPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KGFsbEJvaW5jKTtcclxuXHJcbiAgbGlnaHRib3guaW5pdCgpO1xyXG4gIHBpY2JveC5pbml0KCk7XHJcbiAgcGFnZS5pbml0KCk7XHJcbiAgcGFnZUNvbnNvbGUuaW5pdCgpO1xyXG4gIHBhZ2VTb3VyY2VzLmluaXQoKTtcclxuICBwYWdlTmV0d29yay5pbml0KCk7XHJcbiAgcGFnZVBlcmZvcm1hbmNlLmluaXQoKTtcclxuICBwYWdlTWVtb3J5LmluaXQoKTtcclxuICBwYWdlU2VjdXJpdHkuaW5pdCgpO1xyXG4gIHBhZ2VMaWdodGhvdXNlLmluaXQoKTtcclxuICBwYWdlQ1NTT3ZlcnZpZXcuaW5pdCgpO1xyXG4gIHBhZ2VDbGVhckNvb2tpZXMuaW5pdCgpO1xyXG4gIHBhZ2VIdG1sUmVzcG9uc2VzLmluaXQoKTtcclxuICBwYWdlQ2hhdEdQVC5pbml0KCk7XHJcbiAgcGFnZVBhaW50M0QuaW5pdCgpO1xyXG4gIHBhZ2VCb2luYy5pbml0KCk7XHJcbn07XHJcblxyXG5jb25zdCBwaG90b1N3aXBlX1B3YSA9ICgpID0+IHtcclxuICBjb25zdCBsaWdodGJveCA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goe1xyXG4gICAgZ2FsbGVyeTogXCIjSW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBjaGlsZHJlbjogXCIucHN3cC1nYWxsZXJ5X19pdGVtXCIsXHJcbiAgICBpbWFnZUNsaWNrQWN0aW9uOiBcInpvb21cIixcclxuICAgIHRhcEFjdGlvbjogXCJ6b29tXCIsXHJcbiAgICBwc3dwTW9kdWxlOiBQaG90b1N3aXBlLFxyXG4gIH0pO1xyXG4gIGxpZ2h0Ym94LmluaXQoKTtcclxufTtcclxuXHJcbmNvbnN0IHBob3RvU3dpcGVfSW5zcGN0UGdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBnYWxsZXJ5OiBcIiNpbnNwZWN0UGFnZXMtR2FsbGVyeVwiLFxyXG4gICAgY2hpbGRyZW46IFwiLnBzd3AtZ2FsbGVyeV9faXRlbVwiLFxyXG4gICAgcHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcclxuICB9O1xyXG4gIGNvbnN0IGxpZ2h0Ym94MiA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3gob3B0aW9ucyk7XHJcbiAgbGlnaHRib3gyLmluaXQoKTtcclxufTtcclxuZXhwb3J0IHsgcGhvdG9Td2lwZV9Qd2EgYXMgcHNfUHdhLCBwaG90b1N3aXBlX0FwcFRhYiBhcyBwc19BdCwgcGhvdG9Td2lwZV9JbnNwY3RQZ3MgYXMgcHNfSXAgfTtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IHsgcHNfUHdhIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nbG9iYWwvcGhvdG9Td2lwZVwiO1xyXG5pbXBvcnQgUndiUGVyZiBmcm9tIFwiLi9tb2RlbHMvc2NyaXB0UGVyZlwiO1xyXG5cclxuY29uc3QgZ3VpZGVDb21wb25lbnRzID0ge1xyXG4gIGNoZWNrUGFnZTogKHBhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3dpdGNoIChwYWdlKSB7XHJcbiAgICAgICAgY2FzZSBcIi9ndWlkZXMvaHR0cHMuaHRtbFwiOlxyXG4gICAgICAgICAgcHNfUHdhKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgcGFnZSBjb21wb25lbnQ6ICR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtYWluOiAoKSA9PiB7XHJcbiAgICBsZXQgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IHBhZ2VQZXJmID0gbmV3IFJ3YlBlcmYoXCJHdWlkZWNvbXBvbmVudHNcIik7IC8vbWVhc3VyZSBwZXJmb3JtYW5jZVxyXG5cclxuICAgIGd1aWRlQ29tcG9uZW50cy5jaGVja1BhZ2UocGFnZSk7XHJcblxyXG4gICAgcGFnZVBlcmYuZW5kKCk7IC8vZW5kIHBlcmZvcm1hbmNlIG1lYXN1cmVcclxuICB9LFxyXG4gIGxvYWQ6ICgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBndWlkZUNvbXBvbmVudHMubWFpbik7XHJcbiAgfSxcclxufTtcclxuXHJcbmd1aWRlQ29tcG9uZW50cy5sb2FkKCk7XHJcbiIsIi8qIVxyXG4gICogUGhvdG9Td2lwZSBMaWdodGJveCA1LjMuNiAtIGh0dHBzOi8vcGhvdG9zd2lwZS5jb21cclxuICAqIChjKSAyMDIzIERteXRybyBTZW1lbm92XHJcbiAgKi9cclxuLypcclxuQXR0cmlidXRpb246IFJvYmVydCBBIEhvd2VsbCwgTWFyY2ggMjAyM1xyXG5PcmlnaW5hbCBBdXRob3I6IERteXRybyBTZW1lbm92LCBodHRwczovL3Bob3Rvc3dpcGUuY29tXHJcblNvdXJjZSBkaXN0cmlidXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9kaW1zZW1lbm92L1Bob3RvU3dpcGVcclxuKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcH0gVFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXHJcbiAqIEBwYXJhbSB7VH0gdGFnTmFtZVxyXG4gKiBAcGFyYW0ge05vZGV9IFthcHBlbmRUb0VsXVxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjbGFzc05hbWUsIHRhZ05hbWUsIGFwcGVuZFRvRWwpIHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIH1cclxuICBpZiAoYXBwZW5kVG9FbCkge1xyXG4gICAgYXBwZW5kVG9FbC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0cmFuc2Zvcm0gc3RyaW5nXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV1cclxuICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZV1cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIHRvVHJhbnNmb3JtU3RyaW5nKHgsIHksIHNjYWxlKSB7XHJcbiAgbGV0IHByb3BWYWx1ZSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsJHt5IHx8IDB9cHgsMClgO1xyXG5cclxuICBpZiAoc2NhbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcHJvcFZhbHVlICs9IGAgc2NhbGUzZCgke3NjYWxlfSwke3NjYWxlfSwxKWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcFZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwbHkgd2lkdGggYW5kIGhlaWdodCBDU1MgcHJvcGVydGllcyB0byBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSB3XHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBoXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRXaWR0aEhlaWdodChlbCwgdywgaCkge1xyXG4gIGVsLnN0eWxlLndpZHRoID0gKHR5cGVvZiB3ID09PSAnbnVtYmVyJykgPyBgJHt3fXB4YCA6IHc7XHJcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gKHR5cGVvZiBoID09PSAnbnVtYmVyJykgPyBgJHtofXB4YCA6IGg7XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7TE9BRF9TVEFURVtrZXlvZiBMT0FEX1NUQVRFXX0gTG9hZFN0YXRlICovXHJcbi8qKiBAdHlwZSB7eyBJRExFOiAnaWRsZSc7IExPQURJTkc6ICdsb2FkaW5nJzsgTE9BREVEOiAnbG9hZGVkJzsgRVJST1I6ICdlcnJvcicgfX0gKi9cclxuY29uc3QgTE9BRF9TVEFURSA9IHtcclxuICBJRExFOiAnaWRsZScsXHJcbiAgTE9BRElORzogJ2xvYWRpbmcnLFxyXG4gIExPQURFRDogJ2xvYWRlZCcsXHJcbiAgRVJST1I6ICdlcnJvcicsXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGNsaWNrIG9yIGtleWRvd24gZXZlbnQgd2FzIGRpc3BhdGNoZWRcclxuICogd2l0aCBhIHNwZWNpYWwga2V5IG9yIHZpYSBtb3VzZSB3aGVlbC5cclxuICpcclxuICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudH0gZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIHNwZWNpYWxLZXlVc2VkKGUpIHtcclxuICByZXR1cm4gKCdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPT09IDEpIHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGBnYWxsZXJ5YCBvciBgY2hpbGRyZW5gIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuRWxlbWVudFByb3ZpZGVyfSBbb3B0aW9uXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2xlZ2FjeVNlbGVjdG9yXVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgRG9jdW1lbnR9IFtwYXJlbnRdXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50W11cclxuICovXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRzRnJvbU9wdGlvbihvcHRpb24sIGxlZ2FjeVNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudCkge1xyXG4gIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX0gKi9cclxuICBsZXQgZWxlbWVudHMgPSBbXTtcclxuXHJcbiAgaWYgKG9wdGlvbiBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnRzID0gW29wdGlvbl07XHJcbiAgfSBlbHNlIGlmIChvcHRpb24gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KG9wdGlvbikpIHtcclxuICAgIGVsZW1lbnRzID0gQXJyYXkuZnJvbShvcHRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IHR5cGVvZiBvcHRpb24gPT09ICdzdHJpbmcnID8gb3B0aW9uIDogbGVnYWN5U2VsZWN0b3I7XHJcbiAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgZWxlbWVudHMgPSBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudHM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB2YXJpYWJsZSBpcyBQaG90b1N3aXBlIGNsYXNzXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSBmblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzUHN3cENsYXNzKGZuKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgJiYgZm4ucHJvdG90eXBlXHJcbiAgICAmJiBmbi5wcm90b3R5cGUuZ29UbztcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGJyb3dzZXIgaXMgU2FmYXJpXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTYWZhcmkoKSB7XHJcbiAgcmV0dXJuICEhKG5hdmlnYXRvci52ZW5kb3IgJiYgbmF2aWdhdG9yLnZlbmRvci5tYXRjaCgvYXBwbGUvaSkpO1xyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vbGlnaHRib3gvbGlnaHRib3guanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlTGlnaHRib3ggKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuRGF0YVNvdXJjZX0gRGF0YVNvdXJjZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vdWkvdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL2NvbnRlbnQuanMnKS5kZWZhdWx0fSBDb250ZW50RGVmYXVsdCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvem9vbS1sZXZlbC5qcycpLmRlZmF1bHR9IFpvb21MZXZlbCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvZ2V0LXRodW1iLWJvdW5kcy5qcycpLkJvdW5kc30gQm91bmRzICovXHJcblxyXG4vKipcclxuICogQWxsb3cgYWRkaW5nIGFuIGFyYml0cmFyeSBwcm9wcyB0byB0aGUgQ29udGVudFxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2N1c3RvbS1jb250ZW50LyN1c2luZy13ZWJwLWltYWdlLWZvcm1hdFxyXG4gKiBAdHlwZWRlZiB7Q29udGVudERlZmF1bHQgJiBSZWNvcmQ8c3RyaW5nLCBhbnk+fSBDb250ZW50XHJcbiAqL1xyXG4vKiogQHR5cGVkZWYge3sgeD86IG51bWJlcjsgeT86IG51bWJlciB9fSBQb2ludCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBob3RvU3dpcGVFdmVudHNNYXAgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vYWRkaW5nLXVpLWVsZW1lbnRzL1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSB1aVJlZ2lzdGVyXHJcbiAqIEBwcm9wIHt7IGRhdGE6IFVJRWxlbWVudERhdGEgfX0gdWlFbGVtZW50Q3JlYXRlXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNpbml0aWFsaXphdGlvbi1ldmVudHNcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmVmb3JlT3BlblxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBmaXJzdFVwZGF0ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsTGF5b3V0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNoYW5nZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBhZnRlckluaXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmluZEV2ZW50c1xyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jb3BlbmluZy1vci1jbG9zaW5nLXRyYW5zaXRpb24tZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IG9wZW5pbmdBbmltYXRpb25TdGFydFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBvcGVuaW5nQW5pbWF0aW9uRW5kXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNsb3NpbmdBbmltYXRpb25TdGFydFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zaW5nQW5pbWF0aW9uRW5kXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNjbG9zaW5nLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBkZXN0cm95XHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNwb2ludGVyLWFuZC1nZXN0dXJlLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gcG9pbnRlckRvd25cclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHBvaW50ZXJNb3ZlXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBwb2ludGVyVXBcclxuICogQHByb3Age3sgYmdPcGFjaXR5OiBudW1iZXIgfX0gcGluY2hDbG9zZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcGFuWTogbnVtYmVyIH19IHZlcnRpY2FsRHJhZyBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI3NsaWRlLWNvbnRlbnQtZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEluaXRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgaXNMYXp5OiBib29sZWFuIH19IGNvbnRlbnRMb2FkIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBpc0xhenk6IGJvb2xlYW4gfX0gY29udGVudExvYWRJbWFnZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgc2xpZGU6IFNsaWRlOyBpc0Vycm9yPzogYm9vbGVhbiB9fSBsb2FkQ29tcGxldGVcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgc2xpZGU6IFNsaWRlIH19IGxvYWRFcnJvclxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9fSBjb250ZW50UmVzaXplIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgc2xpZGU6IFNsaWRlIH19IGltYWdlU2l6ZUNoYW5nZVxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRMYXp5TG9hZCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QXBwZW5kIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRBY3RpdmF0ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50RGVhY3RpdmF0ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50UmVtb3ZlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnREZXN0cm95IGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKlxyXG4gKlxyXG4gKiB1bmRvY3VtZW50ZWRcclxuICpcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gaW1hZ2VDbGlja0FjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gYmdDbGlja0FjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gdGFwQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBkb3VibGVUYXBBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IEtleWJvYXJkRXZlbnQgfX0ga2V5ZG93biBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgeDogbnVtYmVyOyBkcmFnZ2luZzogYm9vbGVhbiB9fSBtb3ZlTWFpblNjcm9sbFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gZmlyc3Rab29tUGFuXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB8IHVuZGVmaW5lZCwgZGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyIH19IGdldHRpbmdEYXRhXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGJlZm9yZVJlc2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSByZXNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gdmlld3BvcnRTaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHVwZGF0ZVNjcm9sbE9mZnNldFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVJbml0XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhZnRlclNldENvbnRlbnRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlTG9hZFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gYXBwZW5kSGVhdnkgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhcHBlbmRIZWF2eUNvbnRlbnRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlQWN0aXZhdGVcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlRGVhY3RpdmF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVEZXN0cm95XHJcbiAqIEBwcm9wIHt7IGRlc3Rab29tTGV2ZWw6IG51bWJlciwgY2VudGVyUG9pbnQ6IFBvaW50IHwgdW5kZWZpbmVkLCB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciB8IGZhbHNlIHwgdW5kZWZpbmVkIH19IGJlZm9yZVpvb21Ub1xyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gem9vbVBhblVwZGF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gaW5pdGlhbFpvb21QYW5cclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGNhbGNTbGlkZVNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gcmVzb2x1dGlvbkNoYW5nZWRcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogV2hlZWxFdmVudCB9fSB3aGVlbCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QXBwZW5kSW1hZ2UgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGluZGV4OiBudW1iZXI7IGl0ZW1EYXRhOiBTbGlkZURhdGEgfX0gbGF6eUxvYWRTbGlkZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3VuZGVmaW5lZH0gbGF6eUxvYWRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGNhbGNCb3VuZHNcclxuICogQHByb3Age3sgem9vbUxldmVsczogWm9vbUxldmVsLCBzbGlkZURhdGE6IFNsaWRlRGF0YSB9fSB6b29tTGV2ZWxzVXBkYXRlXHJcbiAqXHJcbiAqXHJcbiAqIGxlZ2FjeVxyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tSW5cclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21PdXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21JbkVuZFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbU91dEVuZFxyXG4gKiBAcHJvcCB7eyBkYXRhU291cmNlOiBEYXRhU291cmNlIHwgdW5kZWZpbmVkLCBudW1JdGVtczogbnVtYmVyIH19IG51bUl0ZW1zXHJcbiAqIEBwcm9wIHt7IGl0ZW1EYXRhOiBTbGlkZURhdGE7IGluZGV4OiBudW1iZXIgfX0gaXRlbURhdGFcclxuICogQHByb3Age3sgaW5kZXg6IG51bWJlciwgaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5zdGFuY2U6IFBob3RvU3dpcGUgfX0gdGh1bWJCb3VuZHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUGhvdG9Td2lwZUZpbHRlcnNNYXAgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzL1xyXG4gKlxyXG4gKiBAcHJvcCB7KG51bUl0ZW1zOiBudW1iZXIsIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UgfCB1bmRlZmluZWQpID0+IG51bWJlcn0gbnVtSXRlbXNcclxuICogTW9kaWZ5IHRoZSB0b3RhbCBhbW91bnQgb2Ygc2xpZGVzLiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI251bWl0ZW1zXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlcikgPT4gU2xpZGVEYXRhfSBpdGVtRGF0YVxyXG4gKiBNb2RpZnkgc2xpZGUgaXRlbSBkYXRhLiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2l0ZW1kYXRhXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXRlbURhdGE6IFNsaWRlRGF0YSwgZWxlbWVudDogSFRNTEVsZW1lbnQsIGxpbmtFbDogSFRNTEFuY2hvckVsZW1lbnQpID0+IFNsaWRlRGF0YX0gZG9tSXRlbURhdGFcclxuICogTW9kaWZ5IGl0ZW0gZGF0YSB3aGVuIGl0J3MgcGFyc2VkIGZyb20gRE9NIGVsZW1lbnQuIEV4YW1wbGUgb24gRGF0YSBzb3VyY2VzIHBhZ2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jZG9taXRlbWRhdGFcclxuICpcclxuICogQHByb3AgeyhjbGlja2VkSW5kZXg6IG51bWJlciwgZTogTW91c2VFdmVudCwgaW5zdGFuY2U6IFBob3RvU3dpcGVMaWdodGJveCkgPT4gbnVtYmVyfSBjbGlja2VkSW5kZXhcclxuICogTW9kaWZ5IGNsaWNrZWQgZ2FsbGVyeSBpdGVtIGluZGV4LlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2NsaWNrZWRpbmRleFxyXG4gKlxyXG4gKiBAcHJvcCB7KHBsYWNlaG9sZGVyU3JjOiBzdHJpbmcgfCBmYWxzZSwgY29udGVudDogQ29udGVudCkgPT4gc3RyaW5nIHwgZmFsc2V9IHBsYWNlaG9sZGVyU3JjXHJcbiAqIE1vZGlmeSBwbGFjZWhvbGRlciBpbWFnZSBzb3VyY2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jcGxhY2Vob2xkZXJzcmNcclxuICpcclxuICogQHByb3Ageyhpc0NvbnRlbnRMb2FkaW5nOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSBpc0NvbnRlbnRMb2FkaW5nXHJcbiAqIE1vZGlmeSBpZiB0aGUgY29udGVudCBpcyBjdXJyZW50bHkgbG9hZGluZy5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpc2NvbnRlbnRsb2FkaW5nXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNDb250ZW50Wm9vbWFibGU6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzQ29udGVudFpvb21hYmxlXHJcbiAqIE1vZGlmeSBpZiB0aGUgY29udGVudCBjYW4gYmUgem9vbWVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lzY29udGVudHpvb21hYmxlXHJcbiAqXHJcbiAqIEBwcm9wIHsodXNlQ29udGVudFBsYWNlaG9sZGVyOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSB1c2VDb250ZW50UGxhY2Vob2xkZXJcclxuICogTW9kaWZ5IGlmIHRoZSBwbGFjZWhvbGRlciBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGNvbnRlbnQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdXNlY29udGVudHBsYWNlaG9sZGVyXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNLZWVwaW5nUGxhY2Vob2xkZXI6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzS2VlcGluZ1BsYWNlaG9sZGVyXHJcbiAqIE1vZGlmeSBpZiB0aGUgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIGtlcHQgYWZ0ZXIgdGhlIGNvbnRlbnQgaXMgbG9hZGVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lza2VlcGluZ3BsYWNlaG9sZGVyXHJcbiAqXHJcbiAqXHJcbiAqIEBwcm9wIHsoY29udGVudEVycm9yRWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbnRlbnQ6IENvbnRlbnQpID0+IEhUTUxFbGVtZW50fSBjb250ZW50RXJyb3JFbGVtZW50XHJcbiAqIE1vZGlmeSBhbiBlbGVtZW50IHdoZW4gdGhlIGNvbnRlbnQgaGFzIGVycm9yIHN0YXRlIChmb3IgZXhhbXBsZSwgaWYgaW1hZ2UgY2Fubm90IGJlIGxvYWRlZCkuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jY29udGVudGVycm9yZWxlbWVudFxyXG4gKlxyXG4gKiBAcHJvcCB7KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhOiBVSUVsZW1lbnREYXRhKSA9PiBIVE1MRWxlbWVudH0gdWlFbGVtZW50XHJcbiAqIE1vZGlmeSBhIFVJIGVsZW1lbnQgdGhhdCdzIGJlaW5nIGNyZWF0ZWQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdWllbGVtZW50XHJcbiAqXHJcbiAqIEBwcm9wIHsodGh1bWJuYWlsOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IEhUTUxFbGVtZW50fSB0aHVtYkVsXHJcbiAqIE1vZGlmeSB0aGUgdGh1Ym1uYWlsIGVsZW1lbnQgZnJvbSB3aGljaCBvcGVuaW5nIHpvb20gYW5pbWF0aW9uIHN0YXJ0cyBvciBlbmRzLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3RodW1iZWxcclxuICpcclxuICogQHByb3Ageyh0aHVtYkJvdW5kczogQm91bmRzIHwgdW5kZWZpbmVkLCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBCb3VuZHN9IHRodW1iQm91bmRzXHJcbiAqIE1vZGlmeSB0aGUgdGh1Ym1uYWlsIGJvdW5kcyBmcm9tIHdoaWNoIG9wZW5pbmcgem9vbSBhbmltYXRpb24gc3RhcnRzIG9yIGVuZHMuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdGh1bWJib3VuZHNcclxuICpcclxuICogQHByb3AgeyhzcmNzZXRTaXplc1dpZHRoOiBudW1iZXIsIGNvbnRlbnQ6IENvbnRlbnQpID0+IG51bWJlcn0gc3Jjc2V0U2l6ZXNXaWR0aFxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHt7IGZuOiBQaG90b1N3aXBlRmlsdGVyc01hcFtUXSwgcHJpb3JpdHk6IG51bWJlciB9fSBGaWx0ZXJcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdIGV4dGVuZHMgdW5kZWZpbmVkID8gUGhvdG9Td2lwZUV2ZW50PFQ+IDogUGhvdG9Td2lwZUV2ZW50PFQ+ICYgUGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gQXVnbWVudGVkRXZlbnRcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHsoZXZlbnQ6IEF1Z21lbnRlZEV2ZW50PFQ+KSA9PiB2b2lkfSBFdmVudENhbGxiYWNrXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgUGhvdG9Td2lwZSBldmVudCBvYmplY3RcclxuICpcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqL1xyXG5jbGFzcyBQaG90b1N3aXBlRXZlbnQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7VH0gdHlwZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gW2RldGFpbHNdXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodHlwZSwgZGV0YWlscykge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xyXG4gICAgaWYgKGRldGFpbHMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZXRhaWxzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCkge1xyXG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQaG90b1N3aXBlIGJhc2UgY2xhc3MgdGhhdCBjYW4gbGlzdGVuIGFuZCBkaXNwYXRjaCBmb3IgZXZlbnRzLlxyXG4gKiBTaGFyZWQgYnkgUGhvdG9Td2lwZSBDb3JlIGFuZCBQaG90b1N3aXBlIExpZ2h0Ym94LCBleHRlbmRlZCBieSBiYXNlLmpzXHJcbiAqL1xyXG5jbGFzcyBFdmVudGFibGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7eyBbVCBpbiBrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwXT86ICgoZXZlbnQ6IEF1Z21lbnRlZEV2ZW50PFQ+KSA9PiB2b2lkKVtdIH19XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge3sgW1QgaW4ga2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXBdPzogRmlsdGVyPFQ+W10gfX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZmlsdGVycyA9IHt9O1xyXG5cclxuICAgIC8qKiBAdHlwZSB7UGhvdG9Td2lwZSB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMucHN3cCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKiogQHR5cGUge1Bob3RvU3dpcGVPcHRpb25zIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5vcHRpb25zID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF19IGZuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByaW9yaXR5XHJcbiAgICovXHJcbiAgYWRkRmlsdGVyKG5hbWUsIGZuLCBwcmlvcml0eSA9IDEwMCkge1xyXG4gICAgaWYgKCF0aGlzLl9maWx0ZXJzW25hbWVdKSB7XHJcbiAgICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5wdXNoKHsgZm4sIHByaW9yaXR5IH0pO1xyXG4gICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8uc29ydCgoZjEsIGYyKSA9PiBmMS5wcmlvcml0eSAtIGYyLnByaW9yaXR5KTtcclxuXHJcbiAgICB0aGlzLnBzd3A/LmFkZEZpbHRlcihuYW1lLCBmbiwgcHJpb3JpdHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF19IGZuXHJcbiAgICovXHJcbiAgcmVtb3ZlRmlsdGVyKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyc1tuYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0gPSB0aGlzLl9maWx0ZXJzW25hbWVdLmZpbHRlcihmaWx0ZXIgPT4gKGZpbHRlci5mbiAhPT0gZm4pKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHRoaXMucHN3cC5yZW1vdmVGaWx0ZXIobmFtZSwgZm4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGFyYW1ldGVyczxQaG90b1N3aXBlRmlsdGVyc01hcFtUXT59IGFyZ3NcclxuICAgKiBAcmV0dXJucyB7UGFyYW1ldGVyczxQaG90b1N3aXBlRmlsdGVyc01hcFtUXT5bMF19XHJcbiAgICovXHJcbiAgYXBwbHlGaWx0ZXJzKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIGFyZ3NbMF0gPSBmaWx0ZXIuZm4uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcmdzWzBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrPFQ+fSBmblxyXG4gICAqL1xyXG4gIG9uKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXT8ucHVzaChmbik7XHJcblxyXG4gICAgLy8gV2hlbiBiaW5kaW5nIGV2ZW50cyB0byBsaWdodGJveCxcclxuICAgIC8vIGFsc28gYmluZCBldmVudHMgdG8gUGhvdG9Td2lwZSBDb3JlLFxyXG4gICAgLy8gaWYgaXQncyBvcGVuLlxyXG4gICAgdGhpcy5wc3dwPy5vbihuYW1lLCBmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2s8VD59IGZuXHJcbiAgICovXHJcbiAgb2ZmKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdLmZpbHRlcihsaXN0ZW5lciA9PiAoZm4gIT09IGxpc3RlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wc3dwPy5vZmYobmFtZSwgZm4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdfSBbZGV0YWlsc11cclxuICAgKiBAcmV0dXJucyB7QXVnbWVudGVkRXZlbnQ8VD59XHJcbiAgICovXHJcbiAgZGlzcGF0Y2gobmFtZSwgZGV0YWlscykge1xyXG4gICAgaWYgKHRoaXMucHN3cCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wc3dwLmRpc3BhdGNoKG5hbWUsIGRldGFpbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gLyoqIEB0eXBlIHtBdWdtZW50ZWRFdmVudDxUPn0gKi8gKG5ldyBQaG90b1N3aXBlRXZlbnQobmFtZSwgZGV0YWlscykpO1xyXG5cclxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXT8uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGFjZWhvbGRlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBmYWxzZX0gaW1hZ2VTcmNcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbWFnZVNyYywgY29udGFpbmVyKSB7XHJcbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXJcclxuICAgIC8vIChzdHJldGNoZWQgdGh1bWJuYWlsIG9yIHNpbXBsZSBkaXYgYmVoaW5kIHRoZSBtYWluIGltYWdlKVxyXG4gICAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQgfCBudWxsfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgJ3Bzd3BfX2ltZyBwc3dwX19pbWctLXBsYWNlaG9sZGVyJyxcclxuICAgICAgaW1hZ2VTcmMgPyAnaW1nJyA6ICdkaXYnLFxyXG4gICAgICBjb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltZ0VsID0gLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqLyAodGhpcy5lbGVtZW50KTtcclxuICAgICAgaW1nRWwuZGVjb2RpbmcgPSAnYXN5bmMnO1xyXG4gICAgICBpbWdFbC5hbHQgPSAnJztcclxuICAgICAgaW1nRWwuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICAgIGltZ0VsLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnSU1HJykge1xyXG4gICAgICAvLyBVc2UgdHJhbnNmb3JtIHNjYWxlKCkgdG8gbW9kaWZ5IGltZyBwbGFjZWhvbGRlciBzaXplXHJcbiAgICAgIC8vIChpbnN0ZWFkIG9mIGNoYW5naW5nIHdpZHRoL2hlaWdodCBkaXJlY3RseSkuXHJcbiAgICAgIC8vIFRoaXMgaGVscHMgd2l0aCBwZXJmb3JtYW5jZSwgc3BlY2lmaWNhbGx5IGluIGlPUzE1IFNhZmFyaS5cclxuICAgICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCAyNTAsICdhdXRvJyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMCAwJztcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRvVHJhbnNmb3JtU3RyaW5nKDAsIDAsIHdpZHRoIC8gMjUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdpZHRoSGVpZ2h0KHRoaXMuZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudD8ucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2Jhc2UuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlQmFzZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vdXRpbC91dGlsLmpzJykuTG9hZFN0YXRlfSBMb2FkU3RhdGUgKi9cclxuXHJcbmNsYXNzIENvbnRlbnQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBTbGlkZSBkYXRhXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggaW5zdGFuY2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBpdGVtRGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7UGxhY2Vob2xkZXIgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZSB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuc2xpZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoID0gMDtcclxuICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VIZWlnaHQgPSAwO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBOdW1iZXIodGhpcy5kYXRhLncpIHx8IE51bWJlcih0aGlzLmRhdGEud2lkdGgpIHx8IDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IE51bWJlcih0aGlzLmRhdGEuaCkgfHwgTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpIHx8IDA7XHJcblxyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhc1NsaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGVjb2RpbmcgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7TG9hZFN0YXRlfSAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuSURMRTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnR5cGUpIHtcclxuICAgICAgdGhpcy50eXBlID0gdGhpcy5kYXRhLnR5cGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5zcmMpIHtcclxuICAgICAgdGhpcy50eXBlID0gJ2ltYWdlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHlwZSA9ICdodG1sJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50SW5pdCcsIHsgY29udGVudDogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgIXRoaXMua2VlcFBsYWNlaG9sZGVyKCkpIHtcclxuICAgICAgLy8gV2l0aCBkZWxheSwgYXMgaW1hZ2UgbWlnaHQgYmUgbG9hZGVkLCBidXQgbm90IHJlbmRlcmVkXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0xhenlcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZWxvYWRdXHJcbiAgICovXHJcbiAgbG9hZChpc0xhenksIHJlbG9hZCkge1xyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy51c2VQbGFjZWhvbGRlcigpKSB7XHJcbiAgICAgIGlmICghdGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyU3JjID0gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICAgICAncGxhY2Vob2xkZXJTcmMnLFxyXG4gICAgICAgICAgLy8gdXNlICBpbWFnZS1iYXNlZCBwbGFjZWhvbGRlciBvbmx5IGZvciB0aGUgZmlyc3Qgc2xpZGUsXHJcbiAgICAgICAgICAvLyBhcyByZW5kZXJpbmcgKGV2ZW4gc21hbGwgc3RyZXRjaGVkIHRodW1ibmFpbCkgaXMgYW4gZXhwZW5zaXZlIG9wZXJhdGlvblxyXG4gICAgICAgICAgKHRoaXMuZGF0YS5tc3JjICYmIHRoaXMuc2xpZGUuaXNGaXJzdFNsaWRlKSA/IHRoaXMuZGF0YS5tc3JjIDogZmFsc2UsXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gbmV3IFBsYWNlaG9sZGVyKFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXJTcmMsXHJcbiAgICAgICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lclxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJFbCA9IHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudDtcclxuICAgICAgICAvLyBBZGQgcGxhY2Vob2xkZXIgdG8gRE9NIGlmIGl0IHdhcyBhbHJlYWR5IGNyZWF0ZWRcclxuICAgICAgICBpZiAocGxhY2Vob2xkZXJFbCAmJiAhcGxhY2Vob2xkZXJFbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5wcmVwZW5kKHBsYWNlaG9sZGVyRWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXJlbG9hZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRMb2FkJywgeyBjb250ZW50OiB0aGlzLCBpc0xhenkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19pbWcnLCAnaW1nJyk7XHJcbiAgICAgIC8vIFN0YXJ0IGxvYWRpbmcgb25seSBhZnRlciB3aWR0aCBpcyBkZWZpbmVkLCBhcyBzaXplcyBtaWdodCBkZXBlbmQgb24gaXQuXHJcbiAgICAgIC8vIER1ZSB0byBTYWZhcmkgZmVhdHVyZSwgd2UgbXVzdCBkZWZpbmUgc2l6ZXMgYmVmb3JlIHNyY3NldC5cclxuICAgICAgaWYgKHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKGlzTGF6eSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2NvbnRlbnQnLCAnZGl2Jyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmRhdGEuaHRtbCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVsb2FkICYmIHRoaXMuc2xpZGUpIHtcclxuICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYXp5XHJcbiAgICovXHJcbiAgbG9hZEltYWdlKGlzTGF6eSkge1xyXG4gICAgaWYgKCF0aGlzLmlzSW1hZ2VDb250ZW50KClcclxuICAgICAgfHwgIXRoaXMuZWxlbWVudFxyXG4gICAgICB8fCB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50TG9hZEltYWdlJywgeyBjb250ZW50OiB0aGlzLCBpc0xhenkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gLyoqIEB0eXBlIEhUTUxJbWFnZUVsZW1lbnQgKi8gKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTcmNzZXRTaXplcygpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEuc3Jjc2V0KSB7XHJcbiAgICAgIGltYWdlRWxlbWVudC5zcmNzZXQgPSB0aGlzLmRhdGEuc3Jjc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlRWxlbWVudC5zcmMgPSB0aGlzLmRhdGEuc3JjID8/ICcnO1xyXG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuZGF0YS5hbHQgPz8gJyc7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuTE9BRElORztcclxuXHJcbiAgICBpZiAoaW1hZ2VFbGVtZW50LmNvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGltYWdlRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaW1hZ2VFbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ24gc2xpZGUgdG8gY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gc2xpZGVcclxuICAgKi9cclxuICBzZXRTbGlkZShzbGlkZSkge1xyXG4gICAgdGhpcy5zbGlkZSA9IHNsaWRlO1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IHRydWU7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gc2xpZGUucHN3cDtcclxuXHJcbiAgICAvLyBEbXl0cm8gU2VtZW5vdjogZG8gd2UgbmVlZCB0byB1bnNldCBzbGlkZT9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgbG9hZCBzdWNjZXNzIGhhbmRsZXJcclxuICAgKi9cclxuICBvbkxvYWRlZCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLkxPQURFRDtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnbG9hZENvbXBsZXRlJywgeyBzbGlkZTogdGhpcy5zbGlkZSwgY29udGVudDogdGhpcyB9KTtcclxuXHJcbiAgICAgIC8vIGlmIGNvbnRlbnQgaXMgcmVsb2FkZWRcclxuICAgICAgaWYgKHRoaXMuc2xpZGUuaXNBY3RpdmVcclxuICAgICAgICAmJiB0aGlzLnNsaWRlLmhlYXZ5QXBwZW5kZWRcclxuICAgICAgICAmJiAhdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZCgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGUudXBkYXRlQ29udGVudFNpemUodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURFRCB8fCB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250ZW50IGxvYWQgZXJyb3IgaGFuZGxlclxyXG4gICAqL1xyXG4gIG9uRXJyb3IoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5FUlJPUjtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkQ29tcGxldGUnLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBpc0Vycm9yOiB0cnVlLCBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkRXJyb3InLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59IElmIHRoZSBjb250ZW50IGlzIGN1cnJlbnRseSBsb2FkaW5nXHJcbiAgICovXHJcbiAgaXNMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNDb250ZW50TG9hZGluZycsXHJcbiAgICAgIHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuTE9BRElORyxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgY29udGVudCBpcyBpbiBlcnJvciBzdGF0ZVxyXG4gICAqL1xyXG4gIGlzRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiB0aGUgY29udGVudCBpcyBpbWFnZVxyXG4gICAqL1xyXG4gIGlzSW1hZ2VDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2ltYWdlJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBjb250ZW50IHNpemVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLnNldERpc3BsYXllZFNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goXHJcbiAgICAgICdjb250ZW50UmVzaXplJyxcclxuICAgICAgeyBjb250ZW50OiB0aGlzLCB3aWR0aCwgaGVpZ2h0IH0pLmRlZmF1bHRQcmV2ZW50ZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmICF0aGlzLmlzRXJyb3IoKSkge1xyXG4gICAgICBjb25zdCBpc0luaXRpYWxTaXplVXBkYXRlID0gKCF0aGlzLmRpc3BsYXllZEltYWdlV2lkdGggJiYgd2lkdGgpO1xyXG5cclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VIZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoaXNJbml0aWFsU2l6ZVVwZGF0ZSkge1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNyY3NldFNpemVzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaChcclxuICAgICAgICAgICdpbWFnZVNpemVDaGFuZ2UnLFxyXG4gICAgICAgICAgeyBzbGlkZTogdGhpcy5zbGlkZSwgd2lkdGgsIGhlaWdodCwgY29udGVudDogdGhpcyB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIHRoZSBjb250ZW50IGNhbiBiZSB6b29tZWRcclxuICAgKi9cclxuICBpc1pvb21hYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNDb250ZW50Wm9vbWFibGUnLFxyXG4gICAgICB0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgKHRoaXMuc3RhdGUgIT09IExPQURfU1RBVEUuRVJST1IpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGltYWdlIHNyY3NldCBzaXplcyBhdHRyaWJ1dGUgYmFzZWQgb24gd2lkdGggYW5kIGhlaWdodFxyXG4gICAqL1xyXG4gIHVwZGF0ZVNyY3NldFNpemVzKCkge1xyXG4gICAgLy8gSGFuZGxlIHNyY3NldCBzaXplcyBhdHRyaWJ1dGUuXHJcbiAgICAvL1xyXG4gICAgLy8gTmV2ZXIgbG93ZXIgcXVhbGl0eSwgaWYgaXQgd2FzIGluY3JlYXNlZCBwcmV2aW91c2x5LlxyXG4gICAgLy8gQ2hyb21lIGRvZXMgdGhpcyBhdXRvbWF0aWNhbGx5LCBGaXJlZm94IGFuZCBTYWZhcmkgZG8gbm90LFxyXG4gICAgLy8gc28gd2Ugc3RvcmUgbGFyZ2VzdCB1c2VkIHNpemUgaW4gZGF0YXNldC5cclxuICAgIGlmICghdGhpcy5pc0ltYWdlQ29udGVudCgpIHx8ICF0aGlzLmVsZW1lbnQgfHwgIXRoaXMuZGF0YS5zcmNzZXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gLyoqIEB0eXBlIEhUTUxJbWFnZUVsZW1lbnQgKi8gKHRoaXMuZWxlbWVudCk7XHJcbiAgICBjb25zdCBzaXplc1dpZHRoID0gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdzcmNzZXRTaXplc1dpZHRoJyxcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWltYWdlLmRhdGFzZXQubGFyZ2VzdFVzZWRTaXplXHJcbiAgICAgIHx8IHNpemVzV2lkdGggPiBwYXJzZUludChpbWFnZS5kYXRhc2V0Lmxhcmdlc3RVc2VkU2l6ZSwgMTApXHJcbiAgICApIHtcclxuICAgICAgaW1hZ2Uuc2l6ZXMgPSBzaXplc1dpZHRoICsgJ3B4JztcclxuICAgICAgaW1hZ2UuZGF0YXNldC5sYXJnZXN0VXNlZFNpemUgPSBTdHJpbmcoc2l6ZXNXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgY29udGVudCBzaG91bGQgdXNlIGEgcGxhY2Vob2xkZXIgKGZyb20gbXNyYyBieSBkZWZhdWx0KVxyXG4gICAqL1xyXG4gIHVzZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAndXNlQ29udGVudFBsYWNlaG9sZGVyJyxcclxuICAgICAgdGhpcy5pc0ltYWdlQ29udGVudCgpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlbG9hZCBjb250ZW50IHdpdGggbGF6eS1sb2FkaW5nIHBhcmFtXHJcbiAgICovXHJcbiAgbGF6eUxvYWQoKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudExhenlMb2FkJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZCh0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiBwbGFjZWhvbGRlciBzaG91bGQgYmUga2VwdCBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxyXG4gICAqL1xyXG4gIGtlZXBQbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ2lzS2VlcGluZ1BsYWNlaG9sZGVyJyxcclxuICAgICAgdGhpcy5pc0xvYWRpbmcoKSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zbGlkZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudERlc3Ryb3knLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmIHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQub25sb2FkID0gbnVsbDtcclxuICAgICAgdGhpcy5lbGVtZW50Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcclxuICAgKi9cclxuICBkaXNwbGF5RXJyb3IoKSB7XHJcbiAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICBsZXQgZXJyb3JNc2dFbCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2Vycm9yLW1zZycsICdkaXYnKTtcclxuICAgICAgZXJyb3JNc2dFbC5pbm5lclRleHQgPSB0aGlzLmluc3RhbmNlLm9wdGlvbnM/LmVycm9yTXNnID8/ICcnO1xyXG4gICAgICBlcnJvck1zZ0VsID0gLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi8gKHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAgICdjb250ZW50RXJyb3JFbGVtZW50JyxcclxuICAgICAgICBlcnJvck1zZ0VsLFxyXG4gICAgICAgIHRoaXNcclxuICAgICAgKSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2NvbnRlbnQgcHN3cF9fZXJyb3ItbXNnLWNvbnRhaW5lcicsICdkaXYnKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVycm9yTXNnRWwpO1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgYXBwZW5kKCkge1xyXG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCB8fCAhdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheUVycm9yKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFwcGVuZCcsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBwb3J0c0RlY29kZSA9ICgnZGVjb2RlJyBpbiB0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkpIHtcclxuICAgICAgLy8gVXNlIGRlY29kZSgpIG9uIG5lYXJieSBzbGlkZXNcclxuICAgICAgLy9cclxuICAgICAgLy8gTmVhcmJ5IHNsaWRlIGltYWdlcyBhcmUgaW4gRE9NIGFuZCBub3QgaGlkZGVuIHZpYSBkaXNwbGF5Om5vbmUuXHJcbiAgICAgIC8vIEhvd2V2ZXIsIHRoZXkgYXJlIHBsYWNlZCBvZmZzY3JlZW4gKHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlKS5cclxuICAgICAgLy9cclxuICAgICAgLy8gU29tZSBicm93c2VycyBkbyBub3QgY29tcG9zaXRlIHRoZSBpbWFnZSB1bnRpbCBpdCdzIGFjdHVhbGx5IHZpc2libGUsXHJcbiAgICAgIC8vIHVzaW5nIGRlY29kZSgpIGhlbHBzLlxyXG4gICAgICAvL1xyXG4gICAgICAvLyBZb3UgbWlnaHQgYXNrIFwid2h5IGRvbnQgeW91IGp1c3QgZGVjb2RlKCkgYW5kIHRoZW4gYXBwZW5kIGFsbCBpbWFnZXNcIixcclxuICAgICAgLy8gdGhhdCdzIGJlY2F1c2UgSSB3YW50IHRvIHNob3cgaW1hZ2UgYmVmb3JlIGl0J3MgZnVsbHkgbG9hZGVkLFxyXG4gICAgICAvLyBhcyBicm93c2VyIGNhbiByZW5kZXIgcGFydHMgb2YgaW1hZ2Ugd2hpbGUgaXQgaXMgbG9hZGluZy5cclxuICAgICAgLy8gV2UgZG8gbm90IGRvIHRoaXMgaW4gU2FmYXJpIGR1ZSB0byBwYXJ0aWFsIGxvYWRpbmcgYnVnLlxyXG4gICAgICBpZiAoc3VwcG9ydHNEZWNvZGUgJiYgdGhpcy5zbGlkZSAmJiAoIXRoaXMuc2xpZGUuaXNBY3RpdmUgfHwgaXNTYWZhcmkoKSkpIHtcclxuICAgICAgICB0aGlzLmlzRGVjb2RpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIHB1cnBvc2VmdWxseSB1c2luZyBmaW5hbGx5IGluc3RlYWQgb2YgdGhlbixcclxuICAgICAgICAvLyBhcyBpZiBzcmNzZXQgc2l6ZXMgY2hhbmdlcyBkeW5hbWljYWxseSAtIGl0IG1heSBjYXVzZSBkZWNvZGUgZXJyb3JcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnR9ICovXHJcbiAgICAgICAgKHRoaXMuZWxlbWVudCkuZGVjb2RlKCkuY2F0Y2goKCkgPT4geyB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNEZWNvZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kSW1hZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aXZhdGUgdGhlIHNsaWRlLFxyXG4gICAqIGFjdGl2ZSBzbGlkZSBpcyBnZW5lcmFsbHkgdGhlIGN1cnJlbnQgb25lLFxyXG4gICAqIG1lYW5pbmcgdGhlIHVzZXIgY2FuIHNlZSBpdC5cclxuICAgKi9cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50QWN0aXZhdGUnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZFxyXG4gICAgICB8fCAhdGhpcy5zbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiB0aGlzLmlzRGVjb2RpbmcgJiYgIWlzU2FmYXJpKCkpIHtcclxuICAgICAgLy8gYWRkIGltYWdlIHRvIHNsaWRlIHdoZW4gaXQgYmVjb21lcyBhY3RpdmUsXHJcbiAgICAgIC8vIGV2ZW4gaWYgaXQncyBub3QgZmluaXNoZWQgZGVjb2RpbmdcclxuICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRXJyb3IoKSkge1xyXG4gICAgICB0aGlzLmxvYWQoZmFsc2UsIHRydWUpOyAvLyB0cnkgdG8gcmVsb2FkXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVhY3RpdmF0ZSB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50RGVhY3RpdmF0ZScsIHsgY29udGVudDogdGhpcyB9KTtcclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBjb250ZW50IGZyb20gRE9NXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRSZW1vdmUnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCB0aGUgaW1hZ2UgY29udGVudCB0byBzbGlkZSBjb250YWluZXJcclxuICAgKi9cclxuICBhcHBlbmRJbWFnZSgpIHtcclxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFwcGVuZEltYWdlJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVuc3VyZSB0aGF0IGVsZW1lbnQgZXhpc3RzIGFuZCBpcyBub3QgYWxyZWFkeSBhcHBlbmRlZFxyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy5lbGVtZW50ICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURFRCB8fCB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2Jhc2UuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlQmFzZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IG9wdGlvbnNcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gcHN3cFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFNpemUob3B0aW9ucywgcHN3cCkge1xyXG4gIGlmIChvcHRpb25zLmdldFZpZXdwb3J0U2l6ZUZuKSB7XHJcbiAgICBjb25zdCBuZXdWaWV3cG9ydFNpemUgPSBvcHRpb25zLmdldFZpZXdwb3J0U2l6ZUZuKG9wdGlvbnMsIHBzd3ApO1xyXG4gICAgaWYgKG5ld1ZpZXdwb3J0U2l6ZSkge1xyXG4gICAgICByZXR1cm4gbmV3Vmlld3BvcnRTaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuXHJcbiAgICAvLyBEbXl0cm8gU2VtZW5vdjogaGVpZ2h0IG9uIG1vYmlsZSBpcyB2ZXJ5IGluY29zaXN0ZW50IGR1ZSB0byB0b29sYmFyXHJcbiAgICAvLyBmaW5kIGEgd2F5IHRvIGltcHJvdmUgdGhpc1xyXG4gICAgLy9cclxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSBkb2Vzbid0IHNlZW0gdG8gd29yayB3ZWxsXHJcbiAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIHBhZGRpbmcgb3B0aW9uLlxyXG4gKiBTdXBwb3J0ZWQgZm9ybWF0czpcclxuICpcclxuICogLy8gT2JqZWN0XHJcbiAqIHBhZGRpbmc6IHtcclxuICogIHRvcDogMCxcclxuICogIGJvdHRvbTogMCxcclxuICogIGxlZnQ6IDAsXHJcbiAqICByaWdodDogMFxyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBvYmplY3RcclxuICogcGFkZGluZ0ZuOiAodmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpID0+IHtcclxuICogIHJldHVybiB7XHJcbiAqICAgIHRvcDogMCxcclxuICogICAgYm90dG9tOiAwLFxyXG4gKiAgICBsZWZ0OiAwLFxyXG4gKiAgICByaWdodDogMFxyXG4gKiAgfTtcclxuICogfVxyXG4gKlxyXG4gKiAvLyBMZWdhY3kgdmFyaWFudFxyXG4gKiBwYWRkaW5nTGVmdDogMCxcclxuICogcGFkZGluZ1JpZ2h0OiAwLFxyXG4gKiBwYWRkaW5nVG9wOiAwLFxyXG4gKiBwYWRkaW5nQm90dG9tOiAwLFxyXG4gKlxyXG4gKiBAcGFyYW0geydsZWZ0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAncmlnaHQnfSBwcm9wXHJcbiAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IG9wdGlvbnMgUGhvdG9Td2lwZSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHZpZXdwb3J0U2l6ZSBQaG90b1N3aXBlIHZpZXdwb3J0IHNpemUsIGZvciBleGFtcGxlOiB7IHg6ODAwLCB5OjYwMCB9XHJcbiAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBEYXRhIGFib3V0IHRoZSBzbGlkZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggU2xpZGUgaW5kZXhcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlUGFkZGluZ09wdGlvbihwcm9wLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gIGxldCBwYWRkaW5nVmFsdWUgPSAwO1xyXG5cclxuICBpZiAob3B0aW9ucy5wYWRkaW5nRm4pIHtcclxuICAgIHBhZGRpbmdWYWx1ZSA9IG9wdGlvbnMucGFkZGluZ0ZuKHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVtwcm9wXTtcclxuICB9IGVsc2UgaWYgKG9wdGlvbnMucGFkZGluZykge1xyXG4gICAgcGFkZGluZ1ZhbHVlID0gb3B0aW9ucy5wYWRkaW5nW3Byb3BdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBsZWdhY3lQcm9wTmFtZSA9ICdwYWRkaW5nJyArIHByb3BbMF0udG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBpZiAob3B0aW9uc1tsZWdhY3lQcm9wTmFtZV0pIHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICBwYWRkaW5nVmFsdWUgPSBvcHRpb25zW2xlZ2FjeVByb3BOYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBOdW1iZXIocGFkZGluZ1ZhbHVlKSB8fCAwO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1BvaW50fSB2aWV3cG9ydFNpemVcclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQYW5BcmVhU2l6ZShvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB2aWV3cG9ydFNpemUueFxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbignbGVmdCcsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigncmlnaHQnLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCksXHJcbiAgICB5OiB2aWV3cG9ydFNpemUueVxyXG4gICAgICAtIHBhcnNlUGFkZGluZ09wdGlvbigndG9wJywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpXHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdib3R0b20nLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleClcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBNQVhfSU1BR0VfV0lEVEggPSA0MDAwO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKiogQHR5cGVkZWYgeydmaXQnIHwgJ2ZpbGwnIHwgbnVtYmVyIHwgKCh6b29tTGV2ZWxPYmplY3Q6IFpvb21MZXZlbCkgPT4gbnVtYmVyKX0gWm9vbUxldmVsT3B0aW9uICovXHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB6b29tIGxldmVscyBmb3Igc3BlY2lmaWMgc2xpZGUuXHJcbiAqIERlcGVuZHMgb24gdmlld3BvcnQgc2l6ZSBhbmQgaW1hZ2Ugc2l6ZS5cclxuICovXHJcbmNsYXNzIFpvb21MZXZlbCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9ucyBQaG90b1N3aXBlIG9wdGlvbnNcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgU2xpZGUgZGF0YVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gW3Bzd3BdIFBob3RvU3dpcGUgaW5zdGFuY2UsIGNhbiBiZSB1bmRlZmluZWQgaWYgbm90IGluaXRpYWxpemVkIHlldFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGl0ZW1EYXRhLCBpbmRleCwgcHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLml0ZW1EYXRhID0gaXRlbURhdGE7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAvKiogQHR5cGUgeyBQb2ludCB8IG51bGwgfSAqL1xyXG4gICAgdGhpcy5wYW5BcmVhU2l6ZSA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUgeyBQb2ludCB8IG51bGwgfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50U2l6ZSA9IG51bGw7XHJcbiAgICB0aGlzLmZpdCA9IDE7XHJcbiAgICB0aGlzLmZpbGwgPSAxO1xyXG4gICAgdGhpcy52RmlsbCA9IDE7XHJcbiAgICB0aGlzLmluaXRpYWwgPSAxO1xyXG4gICAgdGhpcy5zZWNvbmRhcnkgPSAxO1xyXG4gICAgdGhpcy5tYXggPSAxO1xyXG4gICAgdGhpcy5taW4gPSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIGluaXRpYWwsIHNlY29uZGFyeSBhbmQgbWF4aW11bSB6b29tIGxldmVsIGZvciB0aGUgc3BlY2lmaWVkIHNsaWRlLlxyXG4gICAqXHJcbiAgICogSXQgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIGVpdGhlciBpbWFnZSBvciB2aWV3cG9ydCBzaXplIGNoYW5nZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4SGVpZ2h0XHJcbiAgICogQHBhcmFtIHtQb2ludH0gcGFuQXJlYVNpemVcclxuICAgKi9cclxuICB1cGRhdGUobWF4V2lkdGgsIG1heEhlaWdodCwgcGFuQXJlYVNpemUpIHtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICBjb25zdCBlbGVtZW50U2l6ZSA9IHsgeDogbWF4V2lkdGgsIHk6IG1heEhlaWdodCB9O1xyXG4gICAgdGhpcy5lbGVtZW50U2l6ZSA9IGVsZW1lbnRTaXplO1xyXG4gICAgdGhpcy5wYW5BcmVhU2l6ZSA9IHBhbkFyZWFTaXplO1xyXG5cclxuICAgIGNvbnN0IGhSYXRpbyA9IHBhbkFyZWFTaXplLnggLyBlbGVtZW50U2l6ZS54O1xyXG4gICAgY29uc3QgdlJhdGlvID0gcGFuQXJlYVNpemUueSAvIGVsZW1lbnRTaXplLnk7XHJcblxyXG4gICAgdGhpcy5maXQgPSBNYXRoLm1pbigxLCBoUmF0aW8gPCB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW8pO1xyXG4gICAgdGhpcy5maWxsID0gTWF0aC5taW4oMSwgaFJhdGlvID4gdlJhdGlvID8gaFJhdGlvIDogdlJhdGlvKTtcclxuXHJcbiAgICAvLyB6b29tLnZGaWxsIGRlZmluZXMgem9vbSBsZXZlbCBvZiB0aGUgaW1hZ2VcclxuICAgIC8vIHdoZW4gaXQgaGFzIDEwMCUgb2Ygdmlld3BvcnQgdmVydGljYWwgc3BhY2UgKGhlaWdodClcclxuICAgIHRoaXMudkZpbGwgPSBNYXRoLm1pbigxLCB2UmF0aW8pO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuX2dldEluaXRpYWwoKTtcclxuICAgIHRoaXMuc2Vjb25kYXJ5ID0gdGhpcy5fZ2V0U2Vjb25kYXJ5KCk7XHJcbiAgICB0aGlzLm1heCA9IE1hdGgubWF4KFxyXG4gICAgICB0aGlzLmluaXRpYWwsXHJcbiAgICAgIHRoaXMuc2Vjb25kYXJ5LFxyXG4gICAgICB0aGlzLl9nZXRNYXgoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm1pbiA9IE1hdGgubWluKFxyXG4gICAgICB0aGlzLmZpdCxcclxuICAgICAgdGhpcy5pbml0aWFsLFxyXG4gICAgICB0aGlzLnNlY29uZGFyeVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnem9vbUxldmVsc1VwZGF0ZScsIHsgem9vbUxldmVsczogdGhpcywgc2xpZGVEYXRhOiB0aGlzLml0ZW1EYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIHVzZXItZGVmaW5lZCB6b29tIG9wdGlvbi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsnaW5pdGlhbCcgfCAnc2Vjb25kYXJ5JyB8ICdtYXgnfSBvcHRpb25QcmVmaXggWm9vbSBsZXZlbCBvcHRpb24gcHJlZml4IChpbml0aWFsLCBzZWNvbmRhcnksIG1heClcclxuICAgKiBAcmV0dXJucyB7IG51bWJlciB8IHVuZGVmaW5lZCB9XHJcbiAgICovXHJcbiAgX3BhcnNlWm9vbUxldmVsT3B0aW9uKG9wdGlvblByZWZpeCkge1xyXG4gICAgY29uc3Qgb3B0aW9uTmFtZSA9IC8qKiBAdHlwZSB7J2luaXRpYWxab29tTGV2ZWwnIHwgJ3NlY29uZGFyeVpvb21MZXZlbCcgfCAnbWF4Wm9vbUxldmVsJ30gKi8gKFxyXG4gICAgICBvcHRpb25QcmVmaXggKyAnWm9vbUxldmVsJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gdGhpcy5vcHRpb25zW29wdGlvbk5hbWVdO1xyXG5cclxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvblZhbHVlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gJ2ZpbGwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvblZhbHVlID09PSAnZml0Jykge1xyXG4gICAgICByZXR1cm4gdGhpcy5maXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlcihvcHRpb25WYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgem9vbSBsZXZlbCB0byB3aGljaCBpbWFnZSB3aWxsIGJlIHpvb21lZCBhZnRlciBkb3VibGUtdGFwIGdlc3R1cmUsXHJcbiAgICogb3Igd2hlbiB1c2VyIGNsaWNrcyBvbiB6b29tIGljb24sXHJcbiAgICogb3IgbW91c2UtY2xpY2sgb24gaW1hZ2UgaXRzZWxmLlxyXG4gICAqIElmIHlvdSByZXR1cm4gMSBpbWFnZSB3aWxsIGJlIHpvb21lZCB0byBpdHMgb3JpZ2luYWwgc2l6ZS5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRTZWNvbmRhcnkoKSB7XHJcbiAgICBsZXQgY3Vyclpvb21MZXZlbCA9IHRoaXMuX3BhcnNlWm9vbUxldmVsT3B0aW9uKCdzZWNvbmRhcnknKTtcclxuXHJcbiAgICBpZiAoY3Vyclpvb21MZXZlbCkge1xyXG4gICAgICByZXR1cm4gY3Vyclpvb21MZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzeCBvZiBcImZpdFwiIHN0YXRlLCBidXQgbm90IGxhcmdlciB0aGFuIG9yaWdpbmFsXHJcbiAgICBjdXJyWm9vbUxldmVsID0gTWF0aC5taW4oMSwgdGhpcy5maXQgKiAzKTtcclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50U2l6ZSAmJiBjdXJyWm9vbUxldmVsICogdGhpcy5lbGVtZW50U2l6ZS54ID4gTUFYX0lNQUdFX1dJRFRIKSB7XHJcbiAgICAgIGN1cnJab29tTGV2ZWwgPSBNQVhfSU1BR0VfV0lEVEggLyB0aGlzLmVsZW1lbnRTaXplLng7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJab29tTGV2ZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaW5pdGlhbCBpbWFnZSB6b29tIGxldmVsLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldEluaXRpYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyc2Vab29tTGV2ZWxPcHRpb24oJ2luaXRpYWwnKSB8fCB0aGlzLmZpdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1heGltdW0gem9vbSBsZXZlbCB3aGVuIHVzZXIgem9vbXNcclxuICAgKiB2aWEgem9vbS9waW5jaCBnZXN0dXJlLFxyXG4gICAqIHZpYSBjbWQvY3RybC13aGVlbCBvciB2aWEgdHJhY2twYWQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0TWF4KCkge1xyXG4gICAgLy8gbWF4IHpvb20gbGV2ZWwgaXMgeDQgZnJvbSBcImZpdCBzdGF0ZVwiLFxyXG4gICAgLy8gdXNlZCBmb3Igem9vbSBnZXN0dXJlIGFuZCBjdHJsL3RyYWNrcGFkIHpvb21cclxuICAgIHJldHVybiB0aGlzLl9wYXJzZVpvb21MZXZlbE9wdGlvbignbWF4JykgfHwgTWF0aC5tYXgoMSwgdGhpcy5maXQgKiA0KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYXp5LWxvYWQgYW4gaW1hZ2VcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJvdGggYnkgTGlnaHRib3ggYW5kIFBob3RvU3dpcGUgY29yZSxcclxuICogdGh1cyBpdCBjYW4gYmUgY2FsbGVkIGJlZm9yZSBkaWFsb2cgaXMgb3BlbmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgRGF0YSBhYm91dCB0aGUgc2xpZGVcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggaW5zdGFuY2VcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEByZXR1cm5zIHtDb250ZW50fSBJbWFnZSB0aGF0IGlzIGJlaW5nIGRlY29kZWQgb3IgZmFsc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBsYXp5TG9hZERhdGEoaXRlbURhdGEsIGluc3RhbmNlLCBpbmRleCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBpbnN0YW5jZS5jcmVhdGVDb250ZW50RnJvbURhdGEoaXRlbURhdGEsIGluZGV4KTtcclxuICAvKiogQHR5cGUge1pvb21MZXZlbCB8IHVuZGVmaW5lZH0gKi9cclxuICBsZXQgem9vbUxldmVsO1xyXG5cclxuICBjb25zdCB7IG9wdGlvbnMgfSA9IGluc3RhbmNlO1xyXG5cclxuICAvLyBXZSBuZWVkIHRvIGtub3cgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2UgdG8gcHJlbG9hZCBpdCxcclxuICAvLyBhcyBpdCBtaWdodCB1c2Ugc3Jjc2V0LCBhbmQgd2UgbmVlZCB0byBkZWZpbmUgc2l6ZXNcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgem9vbUxldmVsID0gbmV3IFpvb21MZXZlbChvcHRpb25zLCBpdGVtRGF0YSwgLTEpO1xyXG5cclxuICAgIGxldCB2aWV3cG9ydFNpemU7XHJcbiAgICBpZiAoaW5zdGFuY2UucHN3cCkge1xyXG4gICAgICB2aWV3cG9ydFNpemUgPSBpbnN0YW5jZS5wc3dwLnZpZXdwb3J0U2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZXdwb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZShvcHRpb25zLCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFuQXJlYVNpemUgPSBnZXRQYW5BcmVhU2l6ZShvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCk7XHJcbiAgICB6b29tTGV2ZWwudXBkYXRlKGNvbnRlbnQud2lkdGgsIGNvbnRlbnQuaGVpZ2h0LCBwYW5BcmVhU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50LmxhenlMb2FkKCk7XHJcblxyXG4gIGlmICh6b29tTGV2ZWwpIHtcclxuICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkU2l6ZShcclxuICAgICAgTWF0aC5jZWlsKGNvbnRlbnQud2lkdGggKiB6b29tTGV2ZWwuaW5pdGlhbCksXHJcbiAgICAgIE1hdGguY2VpbChjb250ZW50LmhlaWdodCAqIHpvb21MZXZlbC5pbml0aWFsKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIExhenktbG9hZHMgc3BlY2lmaWMgc2xpZGUuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBib3RoIGJ5IExpZ2h0Ym94IGFuZCBQaG90b1N3aXBlIGNvcmUsXHJcbiAqIHRodXMgaXQgY2FuIGJlIGNhbGxlZCBiZWZvcmUgZGlhbG9nIGlzIG9wZW5lZC5cclxuICpcclxuICogQnkgZGVmYXVsdCwgaXQgbG9hZHMgaW1hZ2UgYmFzZWQgb24gdmlld3BvcnQgc2l6ZSBhbmQgaW5pdGlhbCB6b29tIGxldmVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggU2xpZGUgaW5kZXhcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggZXZlbnRhYmxlIGluc3RhbmNlXHJcbiAqIEByZXR1cm5zIHtDb250ZW50IHwgdW5kZWZpbmVkfVxyXG4gKi9cclxuZnVuY3Rpb24gbGF6eUxvYWRTbGlkZShpbmRleCwgaW5zdGFuY2UpIHtcclxuICBjb25zdCBpdGVtRGF0YSA9IGluc3RhbmNlLmdldEl0ZW1EYXRhKGluZGV4KTtcclxuXHJcbiAgaWYgKGluc3RhbmNlLmRpc3BhdGNoKCdsYXp5TG9hZFNsaWRlJywgeyBpbmRleCwgaXRlbURhdGEgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KTtcclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9waG90b3N3aXBlLmpzXCIpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9zbGlkZS9zbGlkZS5qc1wiKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgYmFzZSBjbGFzcyB0aGF0IGNhbiByZXRyaWV2ZSBkYXRhIGFib3V0IGV2ZXJ5IHNsaWRlLlxyXG4gKiBTaGFyZWQgYnkgUGhvdG9Td2lwZSBDb3JlIGFuZCBQaG90b1N3aXBlIExpZ2h0Ym94XHJcbiAqL1xyXG5jbGFzcyBQaG90b1N3aXBlQmFzZSBleHRlbmRzIEV2ZW50YWJsZSB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHRvdGFsIG51bWJlciBvZiBzbGlkZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0TnVtSXRlbXMoKSB7XHJcbiAgICBsZXQgbnVtSXRlbXMgPSAwO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMub3B0aW9ucz8uZGF0YVNvdXJjZTtcclxuXHJcbiAgICBpZiAoZGF0YVNvdXJjZSAmJiAnbGVuZ3RoJyBpbiBkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIG1heSBiZSBhbiBhcnJheSBvciBqdXN0IG9iamVjdCB3aXRoIGxlbmd0aCBwcm9wZXJ0eVxyXG4gICAgICBudW1JdGVtcyA9IGRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlICYmICdnYWxsZXJ5JyBpbiBkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIHF1ZXJ5IERPTSBlbGVtZW50c1xyXG4gICAgICBpZiAoIWRhdGFTb3VyY2UuaXRlbXMpIHtcclxuICAgICAgICBkYXRhU291cmNlLml0ZW1zID0gdGhpcy5fZ2V0R2FsbGVyeURPTUVsZW1lbnRzKGRhdGFTb3VyY2UuZ2FsbGVyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhU291cmNlLml0ZW1zKSB7XHJcbiAgICAgICAgbnVtSXRlbXMgPSBkYXRhU291cmNlLml0ZW1zLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGxlZ2FjeSBldmVudCwgYmVmb3JlIGZpbHRlcnMgd2VyZSBpbnRyb2R1Y2VkXHJcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZGlzcGF0Y2goJ251bUl0ZW1zJywge1xyXG4gICAgICBkYXRhU291cmNlLFxyXG4gICAgICBudW1JdGVtc1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBseUZpbHRlcnMoJ251bUl0ZW1zJywgZXZlbnQubnVtSXRlbXMsIGRhdGFTb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IHNsaWRlRGF0YVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50fVxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbnRlbnRGcm9tRGF0YShzbGlkZURhdGEsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gbmV3IENvbnRlbnQoc2xpZGVEYXRhLCB0aGlzLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaXRlbSBkYXRhIGJ5IGluZGV4LlxyXG4gICAqXHJcbiAgICogXCJpdGVtIGRhdGFcIiBzaG91bGQgY29udGFpbiBub3JtYWxpemVkIGluZm9ybWF0aW9uIHRoYXQgUGhvdG9Td2lwZSBuZWVkcyB0byBnZW5lcmF0ZSBhIHNsaWRlLlxyXG4gICAqIEZvciBleGFtcGxlLCBpdCBtYXkgY29udGFpbiBwcm9wZXJ0aWVzIGxpa2VcclxuICAgKiBgc3JjYCwgYHNyY3NldGAsIGB3YCwgYGhgLCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gZ2VuZXJhdGUgYSBzbGlkZSB3aXRoIGltYWdlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge1NsaWRlRGF0YX1cclxuICAgKi9cclxuICBnZXRJdGVtRGF0YShpbmRleCkge1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMub3B0aW9ucz8uZGF0YVNvdXJjZTtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGVEYXRhIHwgSFRNTEVsZW1lbnR9ICovXHJcbiAgICBsZXQgZGF0YVNvdXJjZUl0ZW0gPSB7fTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFTb3VyY2UpKSB7XHJcbiAgICAgIC8vIERhdGFzb3VyY2UgaXMgYW4gYXJyYXkgb2YgZWxlbWVudHNcclxuICAgICAgZGF0YVNvdXJjZUl0ZW0gPSBkYXRhU291cmNlW2luZGV4XTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZSAmJiAnZ2FsbGVyeScgaW4gZGF0YVNvdXJjZSkge1xyXG4gICAgICAvLyBkYXRhU291cmNlIGhhcyBnYWxsZXJ5IHByb3BlcnR5LFxyXG4gICAgICAvLyB0aHVzIGl0IHdhcyBjcmVhdGVkIGJ5IExpZ2h0Ym94LCBiYXNlZCBvblxyXG4gICAgICAvLyBnYWxsZXJ5IGFuZCBjaGlsZHJlbiBvcHRpb25zXHJcblxyXG4gICAgICAvLyBxdWVyeSBET00gZWxlbWVudHNcclxuICAgICAgaWYgKCFkYXRhU291cmNlLml0ZW1zKSB7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5pdGVtcyA9IHRoaXMuX2dldEdhbGxlcnlET01FbGVtZW50cyhkYXRhU291cmNlLmdhbGxlcnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhU291cmNlSXRlbSA9IGRhdGFTb3VyY2UuaXRlbXNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtRGF0YSA9IGRhdGFTb3VyY2VJdGVtO1xyXG5cclxuICAgIGlmIChpdGVtRGF0YSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgaXRlbURhdGEgPSB0aGlzLl9kb21FbGVtZW50VG9JdGVtRGF0YShpdGVtRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzcGF0Y2hpbmcgdGhlIGl0ZW1EYXRhIGV2ZW50LFxyXG4gICAgLy8gaXQncyBhIGxlZ2FjeSB2ZXJpb24gYmVmb3JlIGZpbHRlcnMgd2VyZSBpbnRyb2R1Y2VkXHJcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZGlzcGF0Y2goJ2l0ZW1EYXRhJywge1xyXG4gICAgICBpdGVtRGF0YTogaXRlbURhdGEgfHwge30sXHJcbiAgICAgIGluZGV4XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5hcHBseUZpbHRlcnMoJ2l0ZW1EYXRhJywgZXZlbnQuaXRlbURhdGEsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhcnJheSBvZiBnYWxsZXJ5IERPTSBlbGVtZW50cyxcclxuICAgKiBiYXNlZCBvbiBjaGlsZFNlbGVjdG9yIGFuZCBnYWxsZXJ5IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBnYWxsZXJ5RWxlbWVudFxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfVxyXG4gICAqL1xyXG4gIF9nZXRHYWxsZXJ5RE9NRWxlbWVudHMoZ2FsbGVyeUVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnM/LmNoaWxkcmVuIHx8IHRoaXMub3B0aW9ucz8uY2hpbGRTZWxlY3Rvcikge1xyXG4gICAgICByZXR1cm4gZ2V0RWxlbWVudHNGcm9tT3B0aW9uKFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbixcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRTZWxlY3RvcixcclxuICAgICAgICBnYWxsZXJ5RWxlbWVudFxyXG4gICAgICApIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbZ2FsbGVyeUVsZW1lbnRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgRE9NIGVsZW1lbnQgdG8gaXRlbSBkYXRhIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgRE9NIGVsZW1lbnRcclxuICAgKiBAcmV0dXJucyB7U2xpZGVEYXRhfVxyXG4gICAqL1xyXG4gIF9kb21FbGVtZW50VG9JdGVtRGF0YShlbGVtZW50KSB7XHJcbiAgICAvKiogQHR5cGUge1NsaWRlRGF0YX0gKi9cclxuICAgIGNvbnN0IGl0ZW1EYXRhID0ge1xyXG4gICAgICBlbGVtZW50XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmtFbCA9IC8qKiBAdHlwZSB7SFRNTEFuY2hvckVsZW1lbnR9ICovIChcclxuICAgICAgZWxlbWVudC50YWdOYW1lID09PSAnQSdcclxuICAgICAgICA/IGVsZW1lbnRcclxuICAgICAgICA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChsaW5rRWwpIHtcclxuICAgICAgLy8gc3JjIGNvbWVzIGZyb20gZGF0YS1wc3dwLXNyYyBhdHRyaWJ1dGUsXHJcbiAgICAgIC8vIGlmIGl0J3MgZW1wdHkgbGluayBocmVmIGlzIHVzZWRcclxuICAgICAgaXRlbURhdGEuc3JjID0gbGlua0VsLmRhdGFzZXQucHN3cFNyYyB8fCBsaW5rRWwuaHJlZjtcclxuXHJcbiAgICAgIGlmIChsaW5rRWwuZGF0YXNldC5wc3dwU3Jjc2V0KSB7XHJcbiAgICAgICAgaXRlbURhdGEuc3Jjc2V0ID0gbGlua0VsLmRhdGFzZXQucHN3cFNyY3NldDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXRlbURhdGEud2lkdGggPSBsaW5rRWwuZGF0YXNldC5wc3dwV2lkdGggPyBwYXJzZUludChsaW5rRWwuZGF0YXNldC5wc3dwV2lkdGgsIDEwKSA6IDA7XHJcbiAgICAgIGl0ZW1EYXRhLmhlaWdodCA9IGxpbmtFbC5kYXRhc2V0LnBzd3BIZWlnaHQgPyBwYXJzZUludChsaW5rRWwuZGF0YXNldC5wc3dwSGVpZ2h0LCAxMCkgOiAwO1xyXG5cclxuICAgICAgLy8gc3VwcG9ydCBsZWdhY3kgdyAmIGggcHJvcGVydGllc1xyXG4gICAgICBpdGVtRGF0YS53ID0gaXRlbURhdGEud2lkdGg7XHJcbiAgICAgIGl0ZW1EYXRhLmggPSBpdGVtRGF0YS5oZWlnaHQ7XHJcblxyXG4gICAgICBpZiAobGlua0VsLmRhdGFzZXQucHN3cFR5cGUpIHtcclxuICAgICAgICBpdGVtRGF0YS50eXBlID0gbGlua0VsLmRhdGFzZXQucHN3cFR5cGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRodW1ibmFpbEVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuXHJcbiAgICAgIGlmICh0aHVtYm5haWxFbCkge1xyXG4gICAgICAgIC8vIG1zcmMgaXMgVVJMIHRvIHBsYWNlaG9sZGVyIGltYWdlIHRoYXQncyBkaXNwbGF5ZWQgYmVmb3JlIGxhcmdlIGltYWdlIGlzIGxvYWRlZFxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgaXQncyBkaXNwbGF5ZWQgb25seSBmb3IgdGhlIGZpcnN0IHNsaWRlXHJcbiAgICAgICAgaXRlbURhdGEubXNyYyA9IHRodW1ibmFpbEVsLmN1cnJlbnRTcmMgfHwgdGh1bWJuYWlsRWwuc3JjO1xyXG4gICAgICAgIGl0ZW1EYXRhLmFsdCA9IHRodW1ibmFpbEVsLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsaW5rRWwuZGF0YXNldC5wc3dwQ3JvcHBlZCB8fCBsaW5rRWwuZGF0YXNldC5jcm9wcGVkKSB7XHJcbiAgICAgICAgaXRlbURhdGEudGh1bWJDcm9wcGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmFwcGx5RmlsdGVycygnZG9tSXRlbURhdGEnLCBpdGVtRGF0YSwgZWxlbWVudCwgbGlua0VsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExhenktbG9hZCBieSBzbGlkZSBkYXRhXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgRGF0YSBhYm91dCB0aGUgc2xpZGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7Q29udGVudH0gSW1hZ2UgdGhhdCBpcyBiZWluZyBkZWNvZGVkIG9yIGZhbHNlLlxyXG4gICAqL1xyXG4gIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgaW5kZXgpIHtcclxuICAgIHJldHVybiBsYXp5TG9hZERhdGEoaXRlbURhdGEsIHRoaXMsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi90eXBlcy5qcycpLlR5cGU8VD59IFR5cGU8VD5cclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5EYXRhU291cmNlfSBEYXRhU291cmNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9jb250ZW50LmpzJykuZGVmYXVsdH0gQ29udGVudCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9ldmVudGFibGUuanMnKS5QaG90b1N3aXBlRXZlbnRzTWFwfSBQaG90b1N3aXBlRXZlbnRzTWFwICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2V2ZW50YWJsZS5qcycpLlBob3RvU3dpcGVGaWx0ZXJzTWFwfSBQaG90b1N3aXBlRmlsdGVyc01hcCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvZXZlbnRhYmxlLmpzJykuRXZlbnRDYWxsYmFjazxUPn0gRXZlbnRDYWxsYmFjazxUPlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBQaG90b1N3aXBlIExpZ2h0Ym94XHJcbiAqXHJcbiAqIC0gSWYgdXNlciBoYXMgdW5zdXBwb3J0ZWQgYnJvd3NlciBpdCBmYWxscyBiYWNrIHRvIGRlZmF1bHQgYnJvd3NlciBhY3Rpb24gKGp1c3Qgb3BlbnMgVVJMKVxyXG4gKiAtIEJpbmRzIGNsaWNrIGV2ZW50IHRvIGxpbmtzIHRoYXQgc2hvdWxkIG9wZW4gUGhvdG9Td2lwZVxyXG4gKiAtIHBhcnNlcyBET00gc3RyY3R1cmUgZm9yIFBob3RvU3dpcGUgKHJldHJpZXZlcyBsYXJnZSBpbWFnZSBVUkxzIGFuZCBzaXplcylcclxuICogLSBJbml0aWFsaXplcyBQaG90b1N3aXBlXHJcbiAqXHJcbiAqXHJcbiAqIExvYWRlciBvcHRpb25zIHVzZSB0aGUgc2FtZSBvYmplY3QgYXMgUGhvdG9Td2lwZSwgYW5kIHN1cHBvcnRzIHN1Y2ggb3B0aW9uczpcclxuICpcclxuICogZ2FsbGVyeSAtIEVsZW1lbnQgfCBFbGVtZW50W10gfCBOb2RlTGlzdCB8IHN0cmluZyBzZWxlY3RvciBmb3IgdGhlIGdhbGxlcnkgZWxlbWVudFxyXG4gKiBjaGlsZHJlbiAtIEVsZW1lbnQgfCBFbGVtZW50W10gfCBOb2RlTGlzdCB8IHN0cmluZyBzZWxlY3RvciBmb3IgdGhlIGdhbGxlcnkgY2hpbGRyZW5cclxuICpcclxuICovXHJcbmNsYXNzIFBob3RvU3dpcGVMaWdodGJveCBleHRlbmRzIFBob3RvU3dpcGVCYXNlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBbb3B0aW9uc11cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLyoqIEB0eXBlIHtQaG90b1N3aXBlT3B0aW9uc30gKi9cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICB0aGlzLl91aWQgPSAwO1xyXG4gICAgdGhpcy5zaG91bGRPcGVuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7Q29udGVudCB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fcHJlbG9hZGVkQ29udGVudCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLm9uVGh1bWJuYWlsc0NsaWNrID0gdGhpcy5vblRodW1ibmFpbHNDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBsaWdodGJveCwgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuXHJcbiAgICogSXQncyBub3QgaW5jbHVkZWQgaW4gdGhlIG1haW4gY29uc3RydWN0b3IsIHNvIHlvdSBtYXkgYmluZCBldmVudHMgYmVmb3JlIGl0LlxyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICAvLyBCaW5kIGNsaWNrIGV2ZW50cyB0byBlYWNoIGdhbGxlcnlcclxuICAgIGdldEVsZW1lbnRzRnJvbU9wdGlvbih0aGlzLm9wdGlvbnMuZ2FsbGVyeSwgdGhpcy5vcHRpb25zLmdhbGxlcnlTZWxlY3RvcilcclxuICAgICAgLmZvckVhY2goKGdhbGxlcnlFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZ2FsbGVyeUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVGh1bWJuYWlsc0NsaWNrLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBlXHJcbiAgICovXHJcbiAgb25UaHVtYm5haWxzQ2xpY2soZSkge1xyXG4gICAgLy8gRXhpdCBhbmQgYWxsb3cgZGVmYXVsdCBicm93c2VyIGFjdGlvbiBpZjpcclxuICAgIGlmIChzcGVjaWFsS2V5VXNlZChlKSAvLyAuLi4gaWYgY2xpY2tlZCB3aXRoIGEgc3BlY2lhbCBrZXkgKGN0cmwvY21kLi4uKVxyXG4gICAgICB8fCB3aW5kb3cucHN3cCAvLyAuLi4gaWYgUGhvdG9Td2lwZSBpcyBhbHJlYWR5IG9wZW5cclxuICAgICAgfHwgd2luZG93Lm5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7IC8vIC4uLiBpZiBvZmZsaW5lXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBib3RoIGNsaWVudFggYW5kIGNsaWVudFkgYXJlIDAgb3Igbm90IGRlZmluZWQsXHJcbiAgICAvLyB0aGUgZXZlbnQgaXMgbGlrZWx5IHRyaWdnZXJlZCBieSBrZXlib2FyZCxcclxuICAgIC8vIHNvIHdlIGRvIG5vdCBwYXNzIHRoZSBpbml0aWFsUG9pbnRcclxuICAgIC8vXHJcbiAgICAvLyBOb3RlIHRoYXQgc29tZSBzY3JlZW4gcmVhZGVycyBlbXVsYXRlIHRoZSBtb3VzZSBwb3NpdGlvbixcclxuICAgIC8vIHNvIGl0J3Mgbm90IHRoZSBpZGVhbCB3YXkgdG8gZGV0ZWN0IHRoZW0uXHJcbiAgICAvL1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludCB8IG51bGx9ICovXHJcbiAgICBsZXQgaW5pdGlhbFBvaW50ID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG5cclxuICAgIGlmICghaW5pdGlhbFBvaW50LnggJiYgIWluaXRpYWxQb2ludC55KSB7XHJcbiAgICAgIGluaXRpYWxQb2ludCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsaWNrZWRJbmRleCA9IHRoaXMuZ2V0Q2xpY2tlZEluZGV4KGUpO1xyXG4gICAgY2xpY2tlZEluZGV4ID0gdGhpcy5hcHBseUZpbHRlcnMoJ2NsaWNrZWRJbmRleCcsIGNsaWNrZWRJbmRleCwgZSwgdGhpcyk7XHJcbiAgICAvKiogQHR5cGUge0RhdGFTb3VyY2V9ICovXHJcbiAgICBjb25zdCBkYXRhU291cmNlID0ge1xyXG4gICAgICBnYWxsZXJ5OiAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY2xpY2tlZEluZGV4ID49IDApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmxvYWRBbmRPcGVuKGNsaWNrZWRJbmRleCwgZGF0YVNvdXJjZSwgaW5pdGlhbFBvaW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpbmRleCBvZiBnYWxsZXJ5IGl0ZW0gdGhhdCB3YXMgY2xpY2tlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZSBjbGljayBldmVudFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0Q2xpY2tlZEluZGV4KGUpIHtcclxuICAgIC8vIGxlZ2FjeSBvcHRpb25cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0Q2xpY2tlZEluZGV4Rm4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXRDbGlja2VkSW5kZXhGbi5jYWxsKHRoaXMsIGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrZWRUYXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZS50YXJnZXQpO1xyXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRzRnJvbU9wdGlvbihcclxuICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY2hpbGRTZWxlY3RvcixcclxuICAgICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsaWNrZWRDaGlsZEluZGV4ID0gY2hpbGRFbGVtZW50cy5maW5kSW5kZXgoXHJcbiAgICAgIGNoaWxkID0+IGNoaWxkID09PSBjbGlja2VkVGFyZ2V0IHx8IGNoaWxkLmNvbnRhaW5zKGNsaWNrZWRUYXJnZXQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChjbGlja2VkQ2hpbGRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGNsaWNrZWRDaGlsZEluZGV4O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW4gfHwgdGhpcy5vcHRpb25zLmNoaWxkU2VsZWN0b3IpIHtcclxuICAgICAgLy8gY2xpY2sgd2Fzbid0IG9uIGEgY2hpbGQgZWxlbWVudFxyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlcmUgaXMgb25seSBvbmUgaXRlbSAod2hpY2ggaXMgdGhlIGdhbGxlcnkpXHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgYW5kIG9wZW4gUGhvdG9Td2lwZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHBhcmFtIHtEYXRhU291cmNlfSBkYXRhU291cmNlXHJcbiAgICogQHBhcmFtIHtQb2ludCB8IG51bGx9IFtpbml0aWFsUG9pbnRdXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgbG9hZEFuZE9wZW4oaW5kZXgsIGRhdGFTb3VyY2UsIGluaXRpYWxQb2ludCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGdhbGxlcnkgaXMgYWxyZWFkeSBvcGVuXHJcbiAgICBpZiAod2luZG93LnBzd3ApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCBpbml0aWFsIGluZGV4XHJcbiAgICB0aGlzLm9wdGlvbnMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAvLyBkZWZpbmUgb3B0aW9ucyBmb3IgUGhvdG9Td2lwZSBjb25zdHJ1Y3RvclxyXG4gICAgdGhpcy5vcHRpb25zLmluaXRpYWxQb2ludGVyUG9zID0gaW5pdGlhbFBvaW50O1xyXG5cclxuICAgIHRoaXMuc2hvdWxkT3BlbiA9IHRydWU7XHJcbiAgICB0aGlzLnByZWxvYWQoaW5kZXgsIGRhdGFTb3VyY2UpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIHRoZSBtYWluIG1vZHVsZSBhbmQgdGhlIHNsaWRlIGNvbnRlbnQgYnkgaW5kZXhcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEBwYXJhbSB7RGF0YVNvdXJjZX0gW2RhdGFTb3VyY2VdXHJcbiAgICovXHJcbiAgcHJlbG9hZChpbmRleCwgZGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzO1xyXG5cclxuICAgIGlmIChkYXRhU291cmNlKSB7XHJcbiAgICAgIG9wdGlvbnMuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBtYWluIG1vZHVsZVxyXG4gICAgLyoqIEB0eXBlIHtQcm9taXNlPFR5cGU8UGhvdG9Td2lwZT4+W119ICovXHJcbiAgICBjb25zdCBwcm9taXNlQXJyYXkgPSBbXTtcclxuXHJcbiAgICBjb25zdCBwc3dwTW9kdWxlVHlwZSA9IHR5cGVvZiBvcHRpb25zLnBzd3BNb2R1bGU7XHJcbiAgICBpZiAoaXNQc3dwQ2xhc3Mob3B0aW9ucy5wc3dwTW9kdWxlKSkge1xyXG4gICAgICBwcm9taXNlQXJyYXkucHVzaChQcm9taXNlLnJlc29sdmUoLyoqIEB0eXBlIHtUeXBlPFBob3RvU3dpcGU+fSAqLyhvcHRpb25zLnBzd3BNb2R1bGUpKSk7XHJcbiAgICB9IGVsc2UgaWYgKHBzd3BNb2R1bGVUeXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Bzd3BNb2R1bGUgYXMgc3RyaW5nIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnKTtcclxuICAgIH0gZWxzZSBpZiAocHN3cE1vZHVsZVR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcHJvbWlzZUFycmF5LnB1c2goLyoqIEB0eXBlIHsoKSA9PiBQcm9taXNlPFR5cGU8UGhvdG9Td2lwZT4+fSAqLyhvcHRpb25zLnBzd3BNb2R1bGUpKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwc3dwTW9kdWxlIGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjdXN0b20tZGVmaW5lZCBwcm9taXNlLCBpZiBhbnlcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vcGVuUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAvLyBhbGxvdyBkZXZlbG9wZXJzIHRvIHBlcmZvcm0gc29tZSB0YXNrIGJlZm9yZSBvcGVuaW5nXHJcbiAgICAgIHByb21pc2VBcnJheS5wdXNoKG9wdGlvbnMub3BlblByb21pc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMucHJlbG9hZEZpcnN0U2xpZGUgIT09IGZhbHNlICYmIGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5fcHJlbG9hZGVkQ29udGVudCA9IGxhenlMb2FkU2xpZGUoaW5kZXgsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdhaXQgdGlsbCBhbGwgcHJvbWlzZXMgcmVzb2x2ZSBhbmQgb3BlbiBQaG90b1N3aXBlXHJcbiAgICBjb25zdCB1aWQgPSArK3RoaXMuX3VpZDtcclxuICAgIFByb21pc2UuYWxsKHByb21pc2VBcnJheSkudGhlbigoaXRlcmFibGVNb2R1bGVzKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNob3VsZE9wZW4pIHtcclxuICAgICAgICBjb25zdCBtYWluTW9kdWxlID0gaXRlcmFibGVNb2R1bGVzWzBdO1xyXG4gICAgICAgIHRoaXMuX29wZW5QaG90b3N3aXBlKG1haW5Nb2R1bGUsIHVpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1R5cGU8UGhvdG9Td2lwZT4gfCB7IGRlZmF1bHQ6IFR5cGU8UGhvdG9Td2lwZT4gfX0gbW9kdWxlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVpZFxyXG4gICAqL1xyXG4gIF9vcGVuUGhvdG9zd2lwZShtb2R1bGUsIHVpZCkge1xyXG4gICAgLy8gQ2FuY2VsIG9wZW5pbmcgaWYgVUlEIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb25lXHJcbiAgICAvLyAoaWYgdXNlciBjbGlja2VkIG9uIGFub3RoZXIgZ2FsbGVyeSBpdGVtIGJlZm9yZSBjdXJyZW50IHdhcyBsb2FkZWQpLlxyXG4gICAgLy9cclxuICAgIC8vIE9yIGlmIHNob3VsZE9wZW4gZmxhZyBpcyBzZXQgdG8gZmFsc2VcclxuICAgIC8vIChkZXZlbG9wZXIgbWF5IG1vZGlmeSBpdCB2aWEgcHVibGljIEFQSSlcclxuICAgIGlmICh1aWQgIT09IHRoaXMuX3VpZCAmJiB0aGlzLnNob3VsZE9wZW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdWxkT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFBob3RvU3dpcGUgaXMgYWxyZWFkeSBvcGVuXHJcbiAgICBpZiAod2luZG93LnBzd3ApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFzcyBkYXRhIHRvIFBob3RvU3dpcGUgYW5kIG9wZW4gaW5pdFxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtQaG90b1N3aXBlfVxyXG4gICAgICovXHJcbiAgICBjb25zdCBwc3dwID0gdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCdcclxuICAgICAgPyBuZXcgbW9kdWxlLmRlZmF1bHQodGhpcy5vcHRpb25zKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIDogbmV3IG1vZHVsZSh0aGlzLm9wdGlvbnMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcblxyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIHdpbmRvdy5wc3dwID0gcHN3cDtcclxuXHJcbiAgICAvLyBtYXAgbGlzdGVuZXJzIGZyb20gTGlnaHRib3ggdG8gUGhvdG9Td2lwZSBDb3JlXHJcbiAgICAvKiogQHR5cGUgeyhrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwKVtdfSAqL1xyXG4gICAgKE9iamVjdC5rZXlzKHRoaXMuX2xpc3RlbmVycykpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdPy5mb3JFYWNoKChmbikgPT4ge1xyXG4gICAgICAgIHBzd3Aub24obmFtZSwgLyoqIEB0eXBlIHtFdmVudENhbGxiYWNrPHR5cGVvZiBuYW1lPn0gKi8oZm4pKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzYW1lIHdpdGggZmlsdGVyc1xyXG4gICAgLyoqIEB0eXBlIHsoa2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXApW119ICovXHJcbiAgICAoT2JqZWN0LmtleXModGhpcy5fZmlsdGVycykpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8uZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgcHN3cC5hZGRGaWx0ZXIobmFtZSwgZmlsdGVyLmZuLCBmaWx0ZXIucHJpb3JpdHkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLl9wcmVsb2FkZWRDb250ZW50KSB7XHJcbiAgICAgIHBzd3AuY29udGVudExvYWRlci5hZGRUb0NhY2hlKHRoaXMuX3ByZWxvYWRlZENvbnRlbnQpO1xyXG4gICAgICB0aGlzLl9wcmVsb2FkZWRDb250ZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3Aub24oJ2Rlc3Ryb3knLCAoKSA9PiB7XHJcbiAgICAgIC8vIGNsZWFuIHVwIHB1YmxpYyB2YXJpYWJsZXNcclxuICAgICAgdGhpcy5wc3dwID0gdW5kZWZpbmVkO1xyXG4gICAgICBkZWxldGUgd2luZG93LnBzd3A7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwc3dwLmluaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuYmluZHMgYWxsIGV2ZW50cywgY2xvc2VzIFBob3RvU3dpcGUgaWYgaXQncyBvcGVuLlxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBzd3A/LmRlc3Ryb3koKTtcclxuXHJcbiAgICB0aGlzLnNob3VsZE9wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG5cclxuICAgIGdldEVsZW1lbnRzRnJvbU9wdGlvbih0aGlzLm9wdGlvbnMuZ2FsbGVyeSwgdGhpcy5vcHRpb25zLmdhbGxlcnlTZWxlY3RvcilcclxuICAgICAgLmZvckVhY2goKGdhbGxlcnlFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZ2FsbGVyeUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVGh1bWJuYWlsc0NsaWNrLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGhvdG9Td2lwZUxpZ2h0Ym94IGFzIGRlZmF1bHQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGhvdG9zd2lwZS1saWdodGJveC5lc20uanMubWFwXHJcbiIsIi8qIVxyXG4gICogUGhvdG9Td2lwZSA1LjMuNiAtIGh0dHBzOi8vcGhvdG9zd2lwZS5jb21cclxuICAqIChjKSAyMDIzIERteXRybyBTZW1lbm92XHJcbiAgKi9cclxuLypcclxuQXR0cmlidXRpb246IFJvYmVydCBBIEhvd2VsbCwgTWFyY2ggMjAyM1xyXG5PcmlnaW5hbCBBdXRob3I6IERteXRybyBTZW1lbm92LCBodHRwczovL3Bob3Rvc3dpcGUuY29tXHJcblNvdXJjZSBkaXN0cmlidXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9kaW1zZW1lbm92L1Bob3RvU3dpcGVcclxuKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcH0gVFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXHJcbiAqIEBwYXJhbSB7VH0gdGFnTmFtZVxyXG4gKiBAcGFyYW0ge05vZGV9IFthcHBlbmRUb0VsXVxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjbGFzc05hbWUsIHRhZ05hbWUsIGFwcGVuZFRvRWwpIHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIH1cclxuICBpZiAoYXBwZW5kVG9FbCkge1xyXG4gICAgYXBwZW5kVG9FbC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAyXHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGVxdWFsaXplUG9pbnRzKHAxLCBwMikge1xyXG4gIHAxLnggPSBwMi54O1xyXG4gIHAxLnkgPSBwMi55O1xyXG4gIGlmIChwMi5pZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwMS5pZCA9IHAyLmlkO1xyXG4gIH1cclxuICByZXR1cm4gcDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1BvaW50fSBwXHJcbiAqL1xyXG5mdW5jdGlvbiByb3VuZFBvaW50KHApIHtcclxuICBwLnggPSBNYXRoLnJvdW5kKHAueCk7XHJcbiAgcC55ID0gTWF0aC5yb3VuZChwLnkpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAyXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXREaXN0YW5jZUJldHdlZW4ocDEsIHAyKSB7XHJcbiAgY29uc3QgeCA9IE1hdGguYWJzKHAxLnggLSBwMi54KTtcclxuICBjb25zdCB5ID0gTWF0aC5hYnMocDEueSAtIHAyLnkpO1xyXG4gIHJldHVybiBNYXRoLnNxcnQoKHggKiB4KSArICh5ICogeSkpO1xyXG59XHJcblxyXG4vKipcclxuICogV2hldGhlciBYIGFuZCBZIHBvc2l0aW9ucyBvZiBwb2ludHMgYXJlIGVxdWFsXHJcbiAqXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAxXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHAyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gcG9pbnRzRXF1YWwocDEsIHAyKSB7XHJcbiAgcmV0dXJuIHAxLnggPT09IHAyLnggJiYgcDEueSA9PT0gcDIueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBmbG9hdCByZXN1bHQgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggdmFsdWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXAodmFsLCBtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdHJhbnNmb3JtIHN0cmluZ1xyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geFxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3ldXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGVdXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiB0b1RyYW5zZm9ybVN0cmluZyh4LCB5LCBzY2FsZSkge1xyXG4gIGxldCBwcm9wVmFsdWUgPSBgdHJhbnNsYXRlM2QoJHt4fXB4LCR7eSB8fCAwfXB4LDApYDtcclxuXHJcbiAgaWYgKHNjYWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHByb3BWYWx1ZSArPSBgIHNjYWxlM2QoJHtzY2FsZX0sJHtzY2FsZX0sMSlgO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb3BWYWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGx5IHRyYW5zZm9ybTp0cmFuc2xhdGUoeCwgeSkgc2NhbGUoc2NhbGUpIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IFt5XVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlXVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsLCB4LCB5LCBzY2FsZSkge1xyXG4gIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRvVHJhbnNmb3JtU3RyaW5nKHgsIHksIHNjYWxlKTtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENTU0Vhc2luZyA9ICdjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSknO1xyXG5cclxuLyoqXHJcbiAqIEFwcGx5IENTUyB0cmFuc2l0aW9uIHRvIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wXSBDU1MgcHJvcGVydHkgdG8gYW5pbWF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uXSBpbiBtc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2Vhc2VdIENTUyBlYXNpbmcgZnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25TdHlsZShlbCwgcHJvcCwgZHVyYXRpb24sIGVhc2UpIHtcclxuICAvLyBpbk91dDogJ2N1YmljLWJlemllciguNCwgMCwgLjIyLCAxKScsIC8vIGZvciBcInRvZ2dsZSBzdGF0ZVwiIHRyYW5zaXRpb25zXHJcbiAgLy8gb3V0OiAnY3ViaWMtYmV6aWVyKDAsIDAsIC4yMiwgMSknLCAvLyBmb3IgXCJzaG93XCIgdHJhbnNpdGlvbnNcclxuICAvLyBpbjogJ2N1YmljLWJlemllciguNCwgMCwgMSwgMSknLy8gZm9yIFwiaGlkZVwiIHRyYW5zaXRpb25zXHJcbiAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IHByb3BcclxuICAgID8gYCR7cHJvcH0gJHtkdXJhdGlvbn1tcyAke2Vhc2UgfHwgZGVmYXVsdENTU0Vhc2luZ31gXHJcbiAgICA6ICdub25lJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGx5IHdpZHRoIGFuZCBoZWlnaHQgQ1NTIHByb3BlcnRpZXMgdG8gZWxlbWVudFxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gd1xyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gaFxyXG4gKi9cclxuZnVuY3Rpb24gc2V0V2lkdGhIZWlnaHQoZWwsIHcsIGgpIHtcclxuICBlbC5zdHlsZS53aWR0aCA9ICh0eXBlb2YgdyA9PT0gJ251bWJlcicpID8gYCR7d31weGAgOiB3O1xyXG4gIGVsLnN0eWxlLmhlaWdodCA9ICh0eXBlb2YgaCA9PT0gJ251bWJlcicpID8gYCR7aH1weGAgOiBoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25TdHlsZShlbCkge1xyXG4gIHNldFRyYW5zaXRpb25TdHlsZShlbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltZ1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50IHwgdm9pZD59XHJcbiAqL1xyXG5mdW5jdGlvbiBkZWNvZGVJbWFnZShpbWcpIHtcclxuICBpZiAoJ2RlY29kZScgaW4gaW1nKSB7XHJcbiAgICByZXR1cm4gaW1nLmRlY29kZSgpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaW1nLmNvbXBsZXRlKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGltZyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcclxuICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge0xPQURfU1RBVEVba2V5b2YgTE9BRF9TVEFURV19IExvYWRTdGF0ZSAqL1xyXG4vKiogQHR5cGUge3sgSURMRTogJ2lkbGUnOyBMT0FESU5HOiAnbG9hZGluZyc7IExPQURFRDogJ2xvYWRlZCc7IEVSUk9SOiAnZXJyb3InIH19ICovXHJcbmNvbnN0IExPQURfU1RBVEUgPSB7XHJcbiAgSURMRTogJ2lkbGUnLFxyXG4gIExPQURJTkc6ICdsb2FkaW5nJyxcclxuICBMT0FERUQ6ICdsb2FkZWQnLFxyXG4gIEVSUk9SOiAnZXJyb3InLFxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBjbGljayBvciBrZXlkb3duIGV2ZW50IHdhcyBkaXNwYXRjaGVkXHJcbiAqIHdpdGggYSBzcGVjaWFsIGtleSBvciB2aWEgbW91c2Ugd2hlZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7TW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnR9IGVcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBzcGVjaWFsS2V5VXNlZChlKSB7XHJcbiAgcmV0dXJuICgnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uID09PSAxKSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBgZ2FsbGVyeWAgb3IgYGNoaWxkcmVuYCBvcHRpb25zLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLkVsZW1lbnRQcm92aWRlcn0gW29wdGlvbl1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtsZWdhY3lTZWxlY3Rvcl1cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IERvY3VtZW50fSBbcGFyZW50XVxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudFtdXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFbGVtZW50c0Zyb21PcHRpb24ob3B0aW9uLCBsZWdhY3lTZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQpIHtcclxuICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXHJcbiAgbGV0IGVsZW1lbnRzID0gW107XHJcblxyXG4gIGlmIChvcHRpb24gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICBlbGVtZW50cyA9IFtvcHRpb25dO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9uIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShvcHRpb24pKSB7XHJcbiAgICBlbGVtZW50cyA9IEFycmF5LmZyb20ob3B0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyA/IG9wdGlvbiA6IGxlZ2FjeVNlbGVjdG9yO1xyXG4gICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYnJvd3NlciBpcyBTYWZhcmlcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcclxuICByZXR1cm4gISEobmF2aWdhdG9yLnZlbmRvciAmJiBuYXZpZ2F0b3IudmVuZG9yLm1hdGNoKC9hcHBsZS9pKSk7XHJcbn1cclxuXHJcbi8vIERldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnRcclxubGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG50cnkge1xyXG4gIC8qIEB0cy1pZ25vcmUgKi9cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XHJcbiAgICBnZXQ6ICgpID0+IHtcclxuICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KSk7XHJcbn0gY2F0Y2ggKGUpIHsgfVxyXG4vKiBlc2xpbnQtZW5hYmxlICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUG9vbEl0ZW1cclxuICogQHByb3Age0hUTUxFbGVtZW50IHwgV2luZG93IHwgRG9jdW1lbnQgfCB1bmRlZmluZWQgfCBudWxsfSB0YXJnZXRcclxuICogQHByb3Age3N0cmluZ30gdHlwZVxyXG4gKiBAcHJvcCB7RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdH0gbGlzdGVuZXJcclxuICogQHByb3Age2Jvb2xlYW59IFtwYXNzaXZlXVxyXG4gKi9cclxuXHJcbmNsYXNzIERPTUV2ZW50cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtQb29sSXRlbVtdfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fcG9vbCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ3RhcmdldCddfSB0YXJnZXRcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0eXBlJ119IHR5cGUgQ2FuIGJlIG11bHRpcGxlLCBzZXBhcmF0ZWQgYnkgc3BhY2UuXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsnbGlzdGVuZXInXX0gbGlzdGVuZXJcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWydwYXNzaXZlJ119IFtwYXNzaXZlXVxyXG4gICAqL1xyXG4gIGFkZCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlKSB7XHJcbiAgICB0aGlzLl90b2dnbGVMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0YXJnZXQnXX0gdGFyZ2V0XHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsndHlwZSddfSB0eXBlXHJcbiAgICogQHBhcmFtIHtQb29sSXRlbVsnbGlzdGVuZXInXX0gbGlzdGVuZXJcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWydwYXNzaXZlJ119IFtwYXNzaXZlXVxyXG4gICAqL1xyXG4gIHJlbW92ZSh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlKSB7XHJcbiAgICB0aGlzLl90b2dnbGVMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwYXNzaXZlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGJvdW5kIGV2ZW50c1xyXG4gICAqL1xyXG4gIHJlbW92ZUFsbCgpIHtcclxuICAgIHRoaXMuX3Bvb2wuZm9yRWFjaCgocG9vbEl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5fdG9nZ2xlTGlzdGVuZXIoXHJcbiAgICAgICAgcG9vbEl0ZW0udGFyZ2V0LFxyXG4gICAgICAgIHBvb2xJdGVtLnR5cGUsXHJcbiAgICAgICAgcG9vbEl0ZW0ubGlzdGVuZXIsXHJcbiAgICAgICAgcG9vbEl0ZW0ucGFzc2l2ZSxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcG9vbCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBvciByZW1vdmVzIGV2ZW50XHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ3RhcmdldCddfSB0YXJnZXRcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWyd0eXBlJ119IHR5cGVcclxuICAgKiBAcGFyYW0ge1Bvb2xJdGVtWydsaXN0ZW5lciddfSBsaXN0ZW5lclxyXG4gICAqIEBwYXJhbSB7UG9vbEl0ZW1bJ3Bhc3NpdmUnXX0gW3Bhc3NpdmVdXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbdW5iaW5kXSBXaGV0aGVyIHRoZSBldmVudCBzaG91bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBQb29sXSBXaGV0aGVyIGV2ZW50cyBwb29sIHNob3VsZCBiZSBza2lwcGVkXHJcbiAgICovXHJcbiAgX3RvZ2dsZUxpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHBhc3NpdmUsIHVuYmluZCwgc2tpcFBvb2wpIHtcclxuICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXRob2ROYW1lID0gdW5iaW5kID8gJ3JlbW92ZUV2ZW50TGlzdGVuZXInIDogJ2FkZEV2ZW50TGlzdGVuZXInO1xyXG4gICAgY29uc3QgdHlwZXMgPSB0eXBlLnNwbGl0KCcgJyk7XHJcbiAgICB0eXBlcy5mb3JFYWNoKChlVHlwZSkgPT4ge1xyXG4gICAgICBpZiAoZVR5cGUpIHtcclxuICAgICAgICAvLyBFdmVudHMgcG9vbCBpcyB1c2VkIHRvIGVhc2lseSB1bmJpbmQgYWxsIGV2ZW50cyB3aGVuIFBob3RvU3dpcGUgaXMgY2xvc2VkLFxyXG4gICAgICAgIC8vIHNvIGRldmVsb3BlciBkb2Vzbid0IG5lZWQgdG8gZG8gdGhpcyBtYW51YWxseVxyXG4gICAgICAgIGlmICghc2tpcFBvb2wpIHtcclxuICAgICAgICAgIGlmICh1bmJpbmQpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGhlIGV2ZW50cyBwb29sXHJcbiAgICAgICAgICAgIHRoaXMuX3Bvb2wgPSB0aGlzLl9wb29sLmZpbHRlcigocG9vbEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gcG9vbEl0ZW0udHlwZSAhPT0gZVR5cGVcclxuICAgICAgICAgICAgICAgIHx8IHBvb2xJdGVtLmxpc3RlbmVyICE9PSBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgfHwgcG9vbEl0ZW0udGFyZ2V0ICE9PSB0YXJnZXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRvIHRoZSBldmVudHMgcG9vbFxyXG4gICAgICAgICAgICB0aGlzLl9wb29sLnB1c2goe1xyXG4gICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgICB0eXBlOiBlVHlwZSxcclxuICAgICAgICAgICAgICBsaXN0ZW5lcixcclxuICAgICAgICAgICAgICBwYXNzaXZlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbW9zdCBQaG90b1N3aXBlIGV2ZW50cyBjYWxsIHByZXZlbnREZWZhdWx0LFxyXG4gICAgICAgIC8vIGFuZCB3ZSBkbyBub3QgbmVlZCBicm93c2VyIHRvIHNjcm9sbCB0aGUgcGFnZVxyXG4gICAgICAgIGNvbnN0IGV2ZW50T3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogKHBhc3NpdmUgfHwgZmFsc2UpIH0gOiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGFyZ2V0W21ldGhvZE5hbWVdKFxyXG4gICAgICAgICAgZVR5cGUsXHJcbiAgICAgICAgICBsaXN0ZW5lcixcclxuICAgICAgICAgIGV2ZW50T3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2NvcmUvYmFzZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGVCYXNlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVCYXNlfSBwc3dwXHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFZpZXdwb3J0U2l6ZShvcHRpb25zLCBwc3dwKSB7XHJcbiAgaWYgKG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4pIHtcclxuICAgIGNvbnN0IG5ld1ZpZXdwb3J0U2l6ZSA9IG9wdGlvbnMuZ2V0Vmlld3BvcnRTaXplRm4ob3B0aW9ucywgcHN3cCk7XHJcbiAgICBpZiAobmV3Vmlld3BvcnRTaXplKSB7XHJcbiAgICAgIHJldHVybiBuZXdWaWV3cG9ydFNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG5cclxuICAgIC8vIERteXRybyBTZW1lbm92OiBoZWlnaHQgb24gbW9iaWxlIGlzIHZlcnkgaW5jb3Npc3RlbnQgZHVlIHRvIHRvb2xiYXJcclxuICAgIC8vIGZpbmQgYSB3YXkgdG8gaW1wcm92ZSB0aGlzXHJcbiAgICAvL1xyXG4gICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIHdlbGxcclxuICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgcGFkZGluZyBvcHRpb24uXHJcbiAqIFN1cHBvcnRlZCBmb3JtYXRzOlxyXG4gKlxyXG4gKiAvLyBPYmplY3RcclxuICogcGFkZGluZzoge1xyXG4gKiAgdG9wOiAwLFxyXG4gKiAgYm90dG9tOiAwLFxyXG4gKiAgbGVmdDogMCxcclxuICogIHJpZ2h0OiAwXHJcbiAqIH1cclxuICpcclxuICogLy8gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG9iamVjdFxyXG4gKiBwYWRkaW5nRm46ICh2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCkgPT4ge1xyXG4gKiAgcmV0dXJuIHtcclxuICogICAgdG9wOiAwLFxyXG4gKiAgICBib3R0b206IDAsXHJcbiAqICAgIGxlZnQ6IDAsXHJcbiAqICAgIHJpZ2h0OiAwXHJcbiAqICB9O1xyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIExlZ2FjeSB2YXJpYW50XHJcbiAqIHBhZGRpbmdMZWZ0OiAwLFxyXG4gKiBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAqIHBhZGRpbmdUb3A6IDAsXHJcbiAqIHBhZGRpbmdCb3R0b206IDAsXHJcbiAqXHJcbiAqIEBwYXJhbSB7J2xlZnQnIHwgJ3RvcCcgfCAnYm90dG9tJyB8ICdyaWdodCd9IHByb3BcclxuICogQHBhcmFtIHtQaG90b1N3aXBlT3B0aW9uc30gb3B0aW9ucyBQaG90b1N3aXBlIG9wdGlvbnNcclxuICogQHBhcmFtIHtQb2ludH0gdmlld3BvcnRTaXplIFBob3RvU3dpcGUgdmlld3BvcnQgc2l6ZSwgZm9yIGV4YW1wbGU6IHsgeDo4MDAsIHk6NjAwIH1cclxuICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIERhdGEgYWJvdXQgdGhlIHNsaWRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBTbGlkZSBpbmRleFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2VQYWRkaW5nT3B0aW9uKHByb3AsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgbGV0IHBhZGRpbmdWYWx1ZSA9IDA7XHJcblxyXG4gIGlmIChvcHRpb25zLnBhZGRpbmdGbikge1xyXG4gICAgcGFkZGluZ1ZhbHVlID0gb3B0aW9ucy5wYWRkaW5nRm4odmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpW3Byb3BdO1xyXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XHJcbiAgICBwYWRkaW5nVmFsdWUgPSBvcHRpb25zLnBhZGRpbmdbcHJvcF07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGxlZ2FjeVByb3BOYW1lID0gJ3BhZGRpbmcnICsgcHJvcFswXS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGlmIChvcHRpb25zW2xlZ2FjeVByb3BOYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHBhZGRpbmdWYWx1ZSA9IG9wdGlvbnNbbGVnYWN5UHJvcE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE51bWJlcihwYWRkaW5nVmFsdWUpIHx8IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7UG9pbnR9IHZpZXdwb3J0U2l6ZVxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGFcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEByZXR1cm5zIHtQb2ludH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhbkFyZWFTaXplKG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IHZpZXdwb3J0U2l6ZS54XHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdsZWZ0Jywgb3B0aW9ucywgdmlld3BvcnRTaXplLCBpdGVtRGF0YSwgaW5kZXgpXHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCdyaWdodCcsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KSxcclxuICAgIHk6IHZpZXdwb3J0U2l6ZS55XHJcbiAgICAgIC0gcGFyc2VQYWRkaW5nT3B0aW9uKCd0b3AnLCBvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleClcclxuICAgICAgLSBwYXJzZVBhZGRpbmdPcHRpb24oJ2JvdHRvbScsIG9wdGlvbnMsIHZpZXdwb3J0U2l6ZSwgaXRlbURhdGEsIGluZGV4KVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtSZWNvcmQ8QXhpcywgbnVtYmVyPn0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHsneCcgfCAneSd9IEF4aXMgKi9cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIG1pbmltdW0sIG1heGltdW0gYW5kIGluaXRpYWwgKGNlbnRlcikgYm91bmRzIG9mIGEgc2xpZGVcclxuICovXHJcbmNsYXNzIFBhbkJvdW5kcyB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gc2xpZGVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihzbGlkZSkge1xyXG4gICAgdGhpcy5zbGlkZSA9IHNsaWRlO1xyXG4gICAgdGhpcy5jdXJyWm9vbUxldmVsID0gMTtcclxuICAgIHRoaXMuY2VudGVyID0gLyoqIEB0eXBlIHtQb2ludH0gKi8geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLm1heCA9IC8qKiBAdHlwZSB7UG9pbnR9ICovIHsgeDogMCwgeTogMCB9O1xyXG4gICAgdGhpcy5taW4gPSAvKiogQHR5cGUge1BvaW50fSAqLyB7IHg6IDAsIHk6IDAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9nZXRJdGVtQm91bmRzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3Vyclpvb21MZXZlbFxyXG4gICAqL1xyXG4gIHVwZGF0ZShjdXJyWm9vbUxldmVsKSB7XHJcbiAgICB0aGlzLmN1cnJab29tTGV2ZWwgPSBjdXJyWm9vbUxldmVsO1xyXG5cclxuICAgIGlmICghdGhpcy5zbGlkZS53aWR0aCkge1xyXG4gICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl91cGRhdGVBeGlzKCd4Jyk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUF4aXMoJ3knKTtcclxuICAgICAgdGhpcy5zbGlkZS5wc3dwLmRpc3BhdGNoKCdjYWxjQm91bmRzJywgeyBzbGlkZTogdGhpcy5zbGlkZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9jYWxjdWxhdGVJdGVtQm91bmRzRm9yQXhpc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBeGlzfSBheGlzXHJcbiAgICovXHJcbiAgX3VwZGF0ZUF4aXMoYXhpcykge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzLnNsaWRlO1xyXG4gICAgY29uc3QgZWxTaXplID0gdGhpcy5zbGlkZVtheGlzID09PSAneCcgPyAnd2lkdGgnIDogJ2hlaWdodCddICogdGhpcy5jdXJyWm9vbUxldmVsO1xyXG4gICAgY29uc3QgcGFkZGluZ1Byb3AgPSBheGlzID09PSAneCcgPyAnbGVmdCcgOiAndG9wJztcclxuICAgIGNvbnN0IHBhZGRpbmcgPSBwYXJzZVBhZGRpbmdPcHRpb24oXHJcbiAgICAgIHBhZGRpbmdQcm9wLFxyXG4gICAgICBwc3dwLm9wdGlvbnMsXHJcbiAgICAgIHBzd3Audmlld3BvcnRTaXplLFxyXG4gICAgICB0aGlzLnNsaWRlLmRhdGEsXHJcbiAgICAgIHRoaXMuc2xpZGUuaW5kZXhcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGFuQXJlYVNpemUgPSB0aGlzLnNsaWRlLnBhbkFyZWFTaXplW2F4aXNdO1xyXG5cclxuICAgIC8vIERlZmF1bHQgcG9zaXRpb24gb2YgZWxlbWVudC5cclxuICAgIC8vIEJ5IGRlZmF1bHQsIGl0IGlzIGNlbnRlciBvZiB2aWV3cG9ydDpcclxuICAgIHRoaXMuY2VudGVyW2F4aXNdID0gTWF0aC5yb3VuZCgocGFuQXJlYVNpemUgLSBlbFNpemUpIC8gMikgKyBwYWRkaW5nO1xyXG5cclxuICAgIC8vIG1heGltdW0gcGFuIHBvc2l0aW9uXHJcbiAgICB0aGlzLm1heFtheGlzXSA9IChlbFNpemUgPiBwYW5BcmVhU2l6ZSlcclxuICAgICAgPyBNYXRoLnJvdW5kKHBhbkFyZWFTaXplIC0gZWxTaXplKSArIHBhZGRpbmdcclxuICAgICAgOiB0aGlzLmNlbnRlcltheGlzXTtcclxuXHJcbiAgICAvLyBtaW5pbXVtIHBhbiBwb3NpdGlvblxyXG4gICAgdGhpcy5taW5bYXhpc10gPSAoZWxTaXplID4gcGFuQXJlYVNpemUpXHJcbiAgICAgID8gcGFkZGluZ1xyXG4gICAgICA6IHRoaXMuY2VudGVyW2F4aXNdO1xyXG4gIH1cclxuXHJcbiAgLy8gX2dldFplcm9Cb3VuZHNcclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuY2VudGVyLnggPSAwO1xyXG4gICAgdGhpcy5jZW50ZXIueSA9IDA7XHJcbiAgICB0aGlzLm1heC54ID0gMDtcclxuICAgIHRoaXMubWF4LnkgPSAwO1xyXG4gICAgdGhpcy5taW4ueCA9IDA7XHJcbiAgICB0aGlzLm1pbi55ID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcnJlY3QgcGFuIHBvc2l0aW9uIGlmIGl0J3MgYmV5b25kIHRoZSBib3VuZHNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXhpc30gYXhpcyB4IG9yIHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFuT2Zmc2V0XHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBjb3JyZWN0UGFuKGF4aXMsIHBhbk9mZnNldCkgeyAvLyBjaGVja1BhbkJvdW5kc1xyXG4gICAgcmV0dXJuIGNsYW1wKHBhbk9mZnNldCwgdGhpcy5tYXhbYXhpc10sIHRoaXMubWluW2F4aXNdKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IE1BWF9JTUFHRV9XSURUSCA9IDQwMDA7XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5QaG90b1N3aXBlT3B0aW9uc30gUGhvdG9Td2lwZU9wdGlvbnMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7J2ZpdCcgfCAnZmlsbCcgfCBudW1iZXIgfCAoKHpvb21MZXZlbE9iamVjdDogWm9vbUxldmVsKSA9PiBudW1iZXIpfSBab29tTGV2ZWxPcHRpb24gKi9cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHpvb20gbGV2ZWxzIGZvciBzcGVjaWZpYyBzbGlkZS5cclxuICogRGVwZW5kcyBvbiB2aWV3cG9ydCBzaXplIGFuZCBpbWFnZSBzaXplLlxyXG4gKi9cclxuY2xhc3MgWm9vbUxldmVsIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBvcHRpb25zIFBob3RvU3dpcGUgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBTbGlkZSBkYXRhXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFNsaWRlIGluZGV4XHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBbcHN3cF0gUGhvdG9Td2lwZSBpbnN0YW5jZSwgY2FuIGJlIHVuZGVmaW5lZCBpZiBub3QgaW5pdGlhbGl6ZWQgeWV0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgaXRlbURhdGEsIGluZGV4LCBwc3dwKSB7XHJcbiAgICB0aGlzLnBzd3AgPSBwc3dwO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuaXRlbURhdGEgPSBpdGVtRGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIC8qKiBAdHlwZSB7IFBvaW50IHwgbnVsbCB9ICovXHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7IFBvaW50IHwgbnVsbCB9ICovXHJcbiAgICB0aGlzLmVsZW1lbnRTaXplID0gbnVsbDtcclxuICAgIHRoaXMuZml0ID0gMTtcclxuICAgIHRoaXMuZmlsbCA9IDE7XHJcbiAgICB0aGlzLnZGaWxsID0gMTtcclxuICAgIHRoaXMuaW5pdGlhbCA9IDE7XHJcbiAgICB0aGlzLnNlY29uZGFyeSA9IDE7XHJcbiAgICB0aGlzLm1heCA9IDE7XHJcbiAgICB0aGlzLm1pbiA9IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgaW5pdGlhbCwgc2Vjb25kYXJ5IGFuZCBtYXhpbXVtIHpvb20gbGV2ZWwgZm9yIHRoZSBzcGVjaWZpZWQgc2xpZGUuXHJcbiAgICpcclxuICAgKiBJdCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gZWl0aGVyIGltYWdlIG9yIHZpZXdwb3J0IHNpemUgY2hhbmdlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhIZWlnaHRcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwYW5BcmVhU2l6ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZShtYXhXaWR0aCwgbWF4SGVpZ2h0LCBwYW5BcmVhU2l6ZSkge1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIGNvbnN0IGVsZW1lbnRTaXplID0geyB4OiBtYXhXaWR0aCwgeTogbWF4SGVpZ2h0IH07XHJcbiAgICB0aGlzLmVsZW1lbnRTaXplID0gZWxlbWVudFNpemU7XHJcbiAgICB0aGlzLnBhbkFyZWFTaXplID0gcGFuQXJlYVNpemU7XHJcblxyXG4gICAgY29uc3QgaFJhdGlvID0gcGFuQXJlYVNpemUueCAvIGVsZW1lbnRTaXplLng7XHJcbiAgICBjb25zdCB2UmF0aW8gPSBwYW5BcmVhU2l6ZS55IC8gZWxlbWVudFNpemUueTtcclxuXHJcbiAgICB0aGlzLmZpdCA9IE1hdGgubWluKDEsIGhSYXRpbyA8IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbyk7XHJcbiAgICB0aGlzLmZpbGwgPSBNYXRoLm1pbigxLCBoUmF0aW8gPiB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW8pO1xyXG5cclxuICAgIC8vIHpvb20udkZpbGwgZGVmaW5lcyB6b29tIGxldmVsIG9mIHRoZSBpbWFnZVxyXG4gICAgLy8gd2hlbiBpdCBoYXMgMTAwJSBvZiB2aWV3cG9ydCB2ZXJ0aWNhbCBzcGFjZSAoaGVpZ2h0KVxyXG4gICAgdGhpcy52RmlsbCA9IE1hdGgubWluKDEsIHZSYXRpbyk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsID0gdGhpcy5fZ2V0SW5pdGlhbCgpO1xyXG4gICAgdGhpcy5zZWNvbmRhcnkgPSB0aGlzLl9nZXRTZWNvbmRhcnkoKTtcclxuICAgIHRoaXMubWF4ID0gTWF0aC5tYXgoXHJcbiAgICAgIHRoaXMuaW5pdGlhbCxcclxuICAgICAgdGhpcy5zZWNvbmRhcnksXHJcbiAgICAgIHRoaXMuX2dldE1heCgpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubWluID0gTWF0aC5taW4oXHJcbiAgICAgIHRoaXMuZml0LFxyXG4gICAgICB0aGlzLmluaXRpYWwsXHJcbiAgICAgIHRoaXMuc2Vjb25kYXJ5XHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnBzd3ApIHtcclxuICAgICAgdGhpcy5wc3dwLmRpc3BhdGNoKCd6b29tTGV2ZWxzVXBkYXRlJywgeyB6b29tTGV2ZWxzOiB0aGlzLCBzbGlkZURhdGE6IHRoaXMuaXRlbURhdGEgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgdXNlci1kZWZpbmVkIHpvb20gb3B0aW9uLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0geydpbml0aWFsJyB8ICdzZWNvbmRhcnknIHwgJ21heCd9IG9wdGlvblByZWZpeCBab29tIGxldmVsIG9wdGlvbiBwcmVmaXggKGluaXRpYWwsIHNlY29uZGFyeSwgbWF4KVxyXG4gICAqIEByZXR1cm5zIHsgbnVtYmVyIHwgdW5kZWZpbmVkIH1cclxuICAgKi9cclxuICBfcGFyc2Vab29tTGV2ZWxPcHRpb24ob3B0aW9uUHJlZml4KSB7XHJcbiAgICBjb25zdCBvcHRpb25OYW1lID0gLyoqIEB0eXBlIHsnaW5pdGlhbFpvb21MZXZlbCcgfCAnc2Vjb25kYXJ5Wm9vbUxldmVsJyB8ICdtYXhab29tTGV2ZWwnfSAqLyAoXHJcbiAgICAgIG9wdGlvblByZWZpeCArICdab29tTGV2ZWwnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb3B0aW9uVmFsdWUgPSB0aGlzLm9wdGlvbnNbb3B0aW9uTmFtZV07XHJcblxyXG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gb3B0aW9uVmFsdWUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvblZhbHVlID09PSAnZmlsbCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uVmFsdWUgPT09ICdmaXQnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTnVtYmVyKG9wdGlvblZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB6b29tIGxldmVsIHRvIHdoaWNoIGltYWdlIHdpbGwgYmUgem9vbWVkIGFmdGVyIGRvdWJsZS10YXAgZ2VzdHVyZSxcclxuICAgKiBvciB3aGVuIHVzZXIgY2xpY2tzIG9uIHpvb20gaWNvbixcclxuICAgKiBvciBtb3VzZS1jbGljayBvbiBpbWFnZSBpdHNlbGYuXHJcbiAgICogSWYgeW91IHJldHVybiAxIGltYWdlIHdpbGwgYmUgem9vbWVkIHRvIGl0cyBvcmlnaW5hbCBzaXplLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2dldFNlY29uZGFyeSgpIHtcclxuICAgIGxldCBjdXJyWm9vbUxldmVsID0gdGhpcy5fcGFyc2Vab29tTGV2ZWxPcHRpb24oJ3NlY29uZGFyeScpO1xyXG5cclxuICAgIGlmIChjdXJyWm9vbUxldmVsKSB7XHJcbiAgICAgIHJldHVybiBjdXJyWm9vbUxldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDN4IG9mIFwiZml0XCIgc3RhdGUsIGJ1dCBub3QgbGFyZ2VyIHRoYW4gb3JpZ2luYWxcclxuICAgIGN1cnJab29tTGV2ZWwgPSBNYXRoLm1pbigxLCB0aGlzLmZpdCAqIDMpO1xyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnRTaXplICYmIGN1cnJab29tTGV2ZWwgKiB0aGlzLmVsZW1lbnRTaXplLnggPiBNQVhfSU1BR0VfV0lEVEgpIHtcclxuICAgICAgY3Vyclpvb21MZXZlbCA9IE1BWF9JTUFHRV9XSURUSCAvIHRoaXMuZWxlbWVudFNpemUueDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3Vyclpvb21MZXZlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBpbml0aWFsIGltYWdlIHpvb20gbGV2ZWwuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0SW5pdGlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJzZVpvb21MZXZlbE9wdGlvbignaW5pdGlhbCcpIHx8IHRoaXMuZml0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSB6b29tIGxldmVsIHdoZW4gdXNlciB6b29tc1xyXG4gICAqIHZpYSB6b29tL3BpbmNoIGdlc3R1cmUsXHJcbiAgICogdmlhIGNtZC9jdHJsLXdoZWVsIG9yIHZpYSB0cmFja3BhZC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRNYXgoKSB7XHJcbiAgICAvLyBtYXggem9vbSBsZXZlbCBpcyB4NCBmcm9tIFwiZml0IHN0YXRlXCIsXHJcbiAgICAvLyB1c2VkIGZvciB6b29tIGdlc3R1cmUgYW5kIGN0cmwvdHJhY2twYWQgem9vbVxyXG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlWm9vbUxldmVsT3B0aW9uKCdtYXgnKSB8fCBNYXRoLm1heCgxLCB0aGlzLmZpdCAqIDQpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG4vKipcclxuICogUmVuZGVycyBhbmQgYWxsb3dzIHRvIGNvbnRyb2wgYSBzaW5nbGUgc2xpZGVcclxuICovXHJcbmNsYXNzIFNsaWRlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1NsaWRlRGF0YX0gZGF0YVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGluZGV4LCBwc3dwKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSAoaW5kZXggPT09IHBzd3AuY3VyckluZGV4KTtcclxuICAgIHRoaXMuY3VycmVudFJlc29sdXRpb24gPSAwO1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMucGFuQXJlYVNpemUgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnBhbiA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIHRoaXMuaXNGaXJzdFNsaWRlID0gKHRoaXMuaXNBY3RpdmUgJiYgIXBzd3Aub3BlbmVyLmlzT3Blbik7XHJcblxyXG4gICAgdGhpcy56b29tTGV2ZWxzID0gbmV3IFpvb21MZXZlbChwc3dwLm9wdGlvbnMsIGRhdGEsIGluZGV4LCBwc3dwKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ2dldHRpbmdEYXRhJywge1xyXG4gICAgICBzbGlkZTogdGhpcyxcclxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICBpbmRleFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5wc3dwLmNvbnRlbnRMb2FkZXIuZ2V0Q29udGVudEJ5U2xpZGUodGhpcyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX3pvb20td3JhcCcsICdkaXYnKTtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqL1xyXG4gICAgdGhpcy5ob2xkZXJFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmN1cnJab29tTGV2ZWwgPSAxO1xyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5jb250ZW50LndpZHRoO1xyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuY29udGVudC5oZWlnaHQ7XHJcbiAgICB0aGlzLmhlYXZ5QXBwZW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYm91bmRzID0gbmV3IFBhbkJvdW5kcyh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnByZXZEaXNwbGF5ZWRXaWR0aCA9IC0xO1xyXG4gICAgdGhpcy5wcmV2RGlzcGxheWVkSGVpZ2h0ID0gLTE7XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdzbGlkZUluaXQnLCB7IHNsaWRlOiB0aGlzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhpcyBzbGlkZSBpcyBhY3RpdmUvY3VycmVudC92aXNpYmxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQWN0aXZlXHJcbiAgICovXHJcbiAgc2V0SXNBY3RpdmUoaXNBY3RpdmUpIHtcclxuICAgIGlmIChpc0FjdGl2ZSAmJiAhdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBzbGlkZSBqdXN0IGJlY2FtZSBhY3RpdmVcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG4gICAgfSBlbHNlIGlmICghaXNBY3RpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBzbGlkZSBqdXN0IGJlY2FtZSBub24tYWN0aXZlXHJcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kcyBzbGlkZSBjb250ZW50IHRvIERPTVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaG9sZGVyRWxlbWVudFxyXG4gICAqL1xyXG4gIGFwcGVuZChob2xkZXJFbGVtZW50KSB7XHJcbiAgICB0aGlzLmhvbGRlckVsZW1lbnQgPSBob2xkZXJFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICcwIDAnO1xyXG5cclxuICAgIC8vIFNsaWRlIGFwcGVuZGVkIHRvIERPTVxyXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xyXG5cclxuICAgIHRoaXMubG9hZCgpO1xyXG4gICAgdGhpcy51cGRhdGVDb250ZW50U2l6ZSgpO1xyXG4gICAgdGhpcy5hcHBlbmRIZWF2eSgpO1xyXG5cclxuICAgIHRoaXMuaG9sZGVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy56b29tQW5kUGFuVG9Jbml0aWFsKCk7XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdmaXJzdFpvb21QYW4nLCB7IHNsaWRlOiB0aGlzIH0pO1xyXG5cclxuICAgIHRoaXMuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnYWZ0ZXJTZXRDb250ZW50JywgeyBzbGlkZTogdGhpcyB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgdGhpcy5jb250ZW50LmxvYWQoZmFsc2UpO1xyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdzbGlkZUxvYWQnLCB7IHNsaWRlOiB0aGlzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kIFwiaGVhdnlcIiBET00gZWxlbWVudHNcclxuICAgKlxyXG4gICAqIFRoaXMgbWF5IGRlcGVuZCBvbiBhIHR5cGUgb2Ygc2xpZGUsXHJcbiAgICogYnV0IGdlbmVyYWxseSB0aGVzZSBhcmUgbGFyZ2UgaW1hZ2VzLlxyXG4gICAqL1xyXG4gIGFwcGVuZEhlYXZ5KCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgYXBwZW5kSGVhdnlOZWFyYnkgPSB0cnVlOyAvLyBEbXl0cm8gU2VtZW5vdlxyXG5cclxuICAgIC8vIEF2b2lkIGFwcGVuZGluZyBoZWF2eSBlbGVtZW50cyBkdXJpbmcgYW5pbWF0aW9uc1xyXG4gICAgaWYgKHRoaXMuaGVhdnlBcHBlbmRlZFxyXG4gICAgICB8fCAhcHN3cC5vcGVuZXIuaXNPcGVuXHJcbiAgICAgIHx8IHBzd3AubWFpblNjcm9sbC5pc1NoaWZ0ZWQoKVxyXG4gICAgICB8fCAoIXRoaXMuaXNBY3RpdmUgJiYgIWFwcGVuZEhlYXZ5TmVhcmJ5KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5kaXNwYXRjaCgnYXBwZW5kSGVhdnknLCB7IHNsaWRlOiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGVhdnlBcHBlbmRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jb250ZW50LmFwcGVuZCgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnYXBwZW5kSGVhdnlDb250ZW50JywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXJlZCB3aGVuIHRoaXMgc2xpZGUgaXMgYWN0aXZlIChzZWxlY3RlZCkuXHJcbiAgICpcclxuICAgKiBJZiBpdCdzIHBhcnQgb2Ygb3BlbmluZy9jbG9zaW5nIHRyYW5zaXRpb24gLVxyXG4gICAqIGFjdGl2YXRlKCkgd2lsbCB0cmlnZ2VyIGFmdGVyIHRoZSB0cmFuc2l0aW9uIGlzIGVuZGVkLlxyXG4gICAqL1xyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmFwcGVuZEhlYXZ5KCk7XHJcbiAgICB0aGlzLmNvbnRlbnQuYWN0aXZhdGUoKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVBY3RpdmF0ZScsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGlzIHNsaWRlIGJlY29tZXMgaW5hY3RpdmUuXHJcbiAgICpcclxuICAgKiBTbGlkZSBjYW4gYmVjb21lIGluYWN0aXZlIG9ubHkgYWZ0ZXIgaXQgd2FzIGFjdGl2ZS5cclxuICAgKi9cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb250ZW50LmRlYWN0aXZhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyWm9vbUxldmVsICE9PSB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbCkge1xyXG4gICAgICAvLyBhbGxvdyBmaWx0ZXJpbmdcclxuICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXQgem9vbSBsZXZlbFxyXG4gICAgdGhpcy5jdXJyZW50UmVzb2x1dGlvbiA9IDA7XHJcbiAgICB0aGlzLnpvb21BbmRQYW5Ub0luaXRpYWwoKTtcclxuICAgIHRoaXMuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgdGhpcy51cGRhdGVDb250ZW50U2l6ZSgpO1xyXG5cclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVEZWFjdGl2YXRlJywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzbGlkZSBzaG91bGQgZGVzdHJveSBpdHNlbGYsIGl0IHdpbGwgbmV2ZXIgYmUgdXNlZCBhZ2Fpbi5cclxuICAgKiAodW5iaW5kIGFsbCBldmVudHMgYW5kIGRlc3Ryb3kgaW50ZXJuYWwgY29tcG9uZW50cylcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb250ZW50Lmhhc1NsaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaCgnc2xpZGVEZXN0cm95JywgeyBzbGlkZTogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJab29tTGV2ZWwgPT09IHRoaXMuem9vbUxldmVscy5pbml0aWFsIHx8ICF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgIC8vIEtlZXAgaW5pdGlhbCB6b29tIGxldmVsIGlmIGl0IHdhcyBiZWZvcmUgdGhlIHJlc2l6ZSxcclxuICAgICAgLy8gYXMgd2VsbCBhcyB3aGVuIHRoaXMgc2xpZGUgaXMgbm90IGFjdGl2ZVxyXG5cclxuICAgICAgLy8gUmVzZXQgcG9zaXRpb24gYW5kIHNjYWxlIHRvIG9yaWdpbmFsIHN0YXRlXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRSZXNvbHV0aW9uID0gMDtcclxuICAgICAgdGhpcy56b29tQW5kUGFuVG9Jbml0aWFsKCk7XHJcbiAgICAgIHRoaXMuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnRTaXplKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyByZWFkanVzdCBwYW4gcG9zaXRpb24gaWYgaXQncyBiZXlvbmQgdGhlIGJvdW5kc1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcclxuICAgICAgdGhpcy5ib3VuZHMudXBkYXRlKHRoaXMuY3Vyclpvb21MZXZlbCk7XHJcbiAgICAgIHRoaXMucGFuVG8odGhpcy5wYW4ueCwgdGhpcy5wYW4ueSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgc2l6ZSB0byBjdXJyZW50IHNsaWRlIGNvbnRlbnQsXHJcbiAgICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcmVzb2x1dGlvbiBhbmQgc2NhbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gaWYgc2l6ZSBzaG91bGQgYmUgdXBkYXRlZCBldmVuIGlmIGRpbWVuc2lvbnMgd2VyZW4ndCBjaGFuZ2VkXHJcbiAgICovXHJcbiAgdXBkYXRlQ29udGVudFNpemUoZm9yY2UpIHtcclxuICAgIC8vIFVzZSBpbml0aWFsIHpvb20gbGV2ZWxcclxuICAgIC8vIGlmIHJlc29sdXRpb24gaXMgbm90IGRlZmluZWQgKHVzZXIgZGlkbid0IHpvb20geWV0KVxyXG4gICAgY29uc3Qgc2NhbGVNdWx0aXBsaWVyID0gdGhpcy5jdXJyZW50UmVzb2x1dGlvbiB8fCB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuXHJcbiAgICBpZiAoIXNjYWxlTXVsdGlwbGllcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLnJvdW5kKHRoaXMud2lkdGggKiBzY2FsZU11bHRpcGxpZXIpIHx8IHRoaXMucHN3cC52aWV3cG9ydFNpemUueDtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgucm91bmQodGhpcy5oZWlnaHQgKiBzY2FsZU11bHRpcGxpZXIpIHx8IHRoaXMucHN3cC52aWV3cG9ydFNpemUueTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2l6ZUNoYW5nZWQod2lkdGgsIGhlaWdodCkgJiYgIWZvcmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudC5zZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNpemVDaGFuZ2VkKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICh3aWR0aCAhPT0gdGhpcy5wcmV2RGlzcGxheWVkV2lkdGhcclxuICAgICAgfHwgaGVpZ2h0ICE9PSB0aGlzLnByZXZEaXNwbGF5ZWRIZWlnaHQpIHtcclxuICAgICAgdGhpcy5wcmV2RGlzcGxheWVkV2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5wcmV2RGlzcGxheWVkSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQHJldHVybnMge0hUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXHJcbiAgZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5wbGFjZWhvbGRlcj8uZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFpvb20gY3VycmVudCBzbGlkZSBpbWFnZSB0by4uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3Rab29tTGV2ZWwgRGVzdGluYXRpb24gem9vbSBsZXZlbC5cclxuICAgKiBAcGFyYW0ge1BvaW50fSBbY2VudGVyUG9pbnRdXHJcbiAgICogVHJhbnNmb3JtIG9yaWdpbiBjZW50ZXIgcG9pbnQsIG9yIGZhbHNlIGlmIHZpZXdwb3J0IGNlbnRlciBzaG91bGQgYmUgdXNlZC5cclxuICAgKiBAcGFyYW0ge251bWJlciB8IGZhbHNlfSBbdHJhbnNpdGlvbkR1cmF0aW9uXSBUcmFuc2l0aW9uIGR1cmF0aW9uLCBtYXkgYmUgc2V0IHRvIDAuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlQm91bmRzXSBNaW5pbXVtIGFuZCBtYXhpbXVtIHpvb20gbGV2ZWxzIHdpbGwgYmUgaWdub3JlZC5cclxuICAgKi9cclxuICB6b29tVG8oZGVzdFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIHRyYW5zaXRpb25EdXJhdGlvbiwgaWdub3JlQm91bmRzKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICBpZiAoIXRoaXMuaXNab29tYWJsZSgpXHJcbiAgICAgIHx8IHBzd3AubWFpblNjcm9sbC5pc1NoaWZ0ZWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaCgnYmVmb3JlWm9vbVRvJywge1xyXG4gICAgICBkZXN0Wm9vbUxldmVsLCBjZW50ZXJQb2ludCwgdHJhbnNpdGlvbkR1cmF0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdG9wIGFsbCBwYW4gYW5kIHpvb20gdHJhbnNpdGlvbnNcclxuICAgIHBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsUGFuKCk7XHJcblxyXG4gICAgLy8gaWYgKCFjZW50ZXJQb2ludCkge1xyXG4gICAgLy8gICBjZW50ZXJQb2ludCA9IHBzd3AuZ2V0Vmlld3BvcnRDZW50ZXJQb2ludCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHByZXZab29tTGV2ZWwgPSB0aGlzLmN1cnJab29tTGV2ZWw7XHJcblxyXG4gICAgaWYgKCFpZ25vcmVCb3VuZHMpIHtcclxuICAgICAgZGVzdFpvb21MZXZlbCA9IGNsYW1wKGRlc3Rab29tTGV2ZWwsIHRoaXMuem9vbUxldmVscy5taW4sIHRoaXMuem9vbUxldmVscy5tYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLnBzd3Aub3B0aW9ucy56b29tQW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy5zZXRab29tTGV2ZWwoZGVzdFpvb21MZXZlbCk7XHJcbiAgICB0aGlzLnBhbi54ID0gdGhpcy5jYWxjdWxhdGVab29tVG9QYW5PZmZzZXQoJ3gnLCBjZW50ZXJQb2ludCwgcHJldlpvb21MZXZlbCk7XHJcbiAgICB0aGlzLnBhbi55ID0gdGhpcy5jYWxjdWxhdGVab29tVG9QYW5PZmZzZXQoJ3knLCBjZW50ZXJQb2ludCwgcHJldlpvb21MZXZlbCk7XHJcbiAgICByb3VuZFBvaW50KHRoaXMucGFuKTtcclxuXHJcbiAgICBjb25zdCBmaW5pc2hUcmFuc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zZXRSZXNvbHV0aW9uKGRlc3Rab29tTGV2ZWwpO1xyXG4gICAgICB0aGlzLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0cmFuc2l0aW9uRHVyYXRpb24pIHtcclxuICAgICAgZmluaXNoVHJhbnNpdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHN3cC5hbmltYXRpb25zLnN0YXJ0VHJhbnNpdGlvbih7XHJcbiAgICAgICAgaXNQYW46IHRydWUsXHJcbiAgICAgICAgbmFtZTogJ3pvb21UbycsXHJcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnRhaW5lcixcclxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuZ2V0Q3VycmVudFRyYW5zZm9ybSgpLFxyXG4gICAgICAgIG9uQ29tcGxldGU6IGZpbmlzaFRyYW5zaXRpb24sXHJcbiAgICAgICAgZHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvbixcclxuICAgICAgICBlYXNpbmc6IHBzd3Aub3B0aW9ucy5lYXNpbmdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BvaW50fSBbY2VudGVyUG9pbnRdXHJcbiAgICovXHJcbiAgdG9nZ2xlWm9vbShjZW50ZXJQb2ludCkge1xyXG4gICAgdGhpcy56b29tVG8oXHJcbiAgICAgIHRoaXMuY3Vyclpvb21MZXZlbCA9PT0gdGhpcy56b29tTGV2ZWxzLmluaXRpYWxcclxuICAgICAgICA/IHRoaXMuem9vbUxldmVscy5zZWNvbmRhcnkgOiB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbCxcclxuICAgICAgY2VudGVyUG9pbnQsXHJcbiAgICAgIHRoaXMucHN3cC5vcHRpb25zLnpvb21BbmltYXRpb25EdXJhdGlvblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgem9vbSBsZXZlbCBwcm9wZXJ0eSBhbmQgcmVjYWxjdWxhdGVzIG5ldyBwYW4gYm91bmRzLFxyXG4gICAqIHVubGlrZSB6b29tVG8gaXQgZG9lcyBub3QgYXBwbHkgdHJhbnNmb3JtICh1c2UgYXBwbHlDdXJyZW50Wm9vbVBhbilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyWm9vbUxldmVsXHJcbiAgICovXHJcbiAgc2V0Wm9vbUxldmVsKGN1cnJab29tTGV2ZWwpIHtcclxuICAgIHRoaXMuY3Vyclpvb21MZXZlbCA9IGN1cnJab29tTGV2ZWw7XHJcbiAgICB0aGlzLmJvdW5kcy51cGRhdGUodGhpcy5jdXJyWm9vbUxldmVsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBwYW4gcG9zaXRpb24gYWZ0ZXIgem9vbSBhdCBhIGdpdmVuIGBwb2ludGAuXHJcbiAgICpcclxuICAgKiBBbHdheXMgY2FsbCBzZXRab29tTGV2ZWwobmV3Wm9vbUxldmVsKSBiZWZvcmVoYW5kIHRvIHJlY2FsY3VsYXRlXHJcbiAgICogcGFuIGJvdW5kcyBhY2NvcmRpbmcgdG8gdGhlIG5ldyB6b29tIGxldmVsLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsneCcgfCAneSd9IGF4aXNcclxuICAgKiBAcGFyYW0ge1BvaW50fSBbcG9pbnRdXHJcbiAgICogcG9pbnQgYmFzZWQgb24gd2hpY2ggem9vbSBpcyBwZXJmb3JtZWQsIHVzdWFsbHkgcmVmZXJzIHRvIHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uLFxyXG4gICAqIGlmIGZhbHNlIC0gdmlld3BvcnQgY2VudGVyIHdpbGwgYmUgdXNlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3ByZXZab29tTGV2ZWxdIFpvb20gbGV2ZWwgYmVmb3JlIG5ldyB6b29tIHdhcyBhcHBsaWVkLlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgY2FsY3VsYXRlWm9vbVRvUGFuT2Zmc2V0KGF4aXMsIHBvaW50LCBwcmV2Wm9vbUxldmVsKSB7XHJcbiAgICBjb25zdCB0b3RhbFBhbkRpc3RhbmNlID0gdGhpcy5ib3VuZHMubWF4W2F4aXNdIC0gdGhpcy5ib3VuZHMubWluW2F4aXNdO1xyXG4gICAgaWYgKHRvdGFsUGFuRGlzdGFuY2UgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm91bmRzLmNlbnRlcltheGlzXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBvaW50KSB7XHJcbiAgICAgIHBvaW50ID0gdGhpcy5wc3dwLmdldFZpZXdwb3J0Q2VudGVyUG9pbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXByZXZab29tTGV2ZWwpIHtcclxuICAgICAgcHJldlpvb21MZXZlbCA9IHRoaXMuem9vbUxldmVscy5pbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmN1cnJab29tTGV2ZWwgLyBwcmV2Wm9vbUxldmVsO1xyXG4gICAgcmV0dXJuIHRoaXMuYm91bmRzLmNvcnJlY3RQYW4oXHJcbiAgICAgIGF4aXMsXHJcbiAgICAgICh0aGlzLnBhbltheGlzXSAtIHBvaW50W2F4aXNdKSAqIHpvb21GYWN0b3IgKyBwb2ludFtheGlzXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHBhbiBhbmQga2VlcCBpdCB3aXRoaW4gYm91bmRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhblhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFuWVxyXG4gICAqL1xyXG4gIHBhblRvKHBhblgsIHBhblkpIHtcclxuICAgIHRoaXMucGFuLnggPSB0aGlzLmJvdW5kcy5jb3JyZWN0UGFuKCd4JywgcGFuWCk7XHJcbiAgICB0aGlzLnBhbi55ID0gdGhpcy5ib3VuZHMuY29ycmVjdFBhbigneScsIHBhblkpO1xyXG4gICAgdGhpcy5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGUgc2xpZGUgaW4gdGhlIGN1cnJlbnQgc3RhdGUgY2FuIGJlIHBhbm5lZCBieSB0aGUgdXNlclxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzUGFubmFibGUoKSB7XHJcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLndpZHRoKSAmJiAodGhpcy5jdXJyWm9vbUxldmVsID4gdGhpcy56b29tTGV2ZWxzLmZpdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGUgc2xpZGUgY2FuIGJlIHpvb21lZFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzWm9vbWFibGUoKSB7XHJcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLndpZHRoKSAmJiB0aGlzLmNvbnRlbnQuaXNab29tYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgdHJhbnNmb3JtIGFuZCBzY2FsZSBiYXNlZCBvblxyXG4gICAqIHRoZSBjdXJyZW50IHBhbiBwb3NpdGlvbiAodGhpcy5wYW4pIGFuZCB6b29tIGxldmVsICh0aGlzLmN1cnJab29tTGV2ZWwpXHJcbiAgICovXHJcbiAgYXBwbHlDdXJyZW50Wm9vbVBhbigpIHtcclxuICAgIHRoaXMuX2FwcGx5Wm9vbVRyYW5zZm9ybSh0aGlzLnBhbi54LCB0aGlzLnBhbi55LCB0aGlzLmN1cnJab29tTGV2ZWwpO1xyXG4gICAgaWYgKHRoaXMgPT09IHRoaXMucHN3cC5jdXJyU2xpZGUpIHtcclxuICAgICAgdGhpcy5wc3dwLmRpc3BhdGNoKCd6b29tUGFuVXBkYXRlJywgeyBzbGlkZTogdGhpcyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHpvb21BbmRQYW5Ub0luaXRpYWwoKSB7XHJcbiAgICB0aGlzLmN1cnJab29tTGV2ZWwgPSB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbDtcclxuXHJcbiAgICAvLyBwYW4gYWNjb3JkaW5nIHRvIHRoZSB6b29tIGxldmVsXHJcbiAgICB0aGlzLmJvdW5kcy51cGRhdGUodGhpcy5jdXJyWm9vbUxldmVsKTtcclxuICAgIGVxdWFsaXplUG9pbnRzKHRoaXMucGFuLCB0aGlzLmJvdW5kcy5jZW50ZXIpO1xyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdpbml0aWFsWm9vbVBhbicsIHsgc2xpZGU6IHRoaXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdHJhbnNsYXRlIGFuZCBzY2FsZSBiYXNlZCBvbiBjdXJyZW50IHJlc29sdXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gem9vbVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2FwcGx5Wm9vbVRyYW5zZm9ybSh4LCB5LCB6b29tKSB7XHJcbiAgICB6b29tIC89IHRoaXMuY3VycmVudFJlc29sdXRpb24gfHwgdGhpcy56b29tTGV2ZWxzLmluaXRpYWw7XHJcbiAgICBzZXRUcmFuc2Zvcm0odGhpcy5jb250YWluZXIsIHgsIHksIHpvb20pO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlU2l6ZSgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuXHJcbiAgICBlcXVhbGl6ZVBvaW50cyhcclxuICAgICAgdGhpcy5wYW5BcmVhU2l6ZSxcclxuICAgICAgZ2V0UGFuQXJlYVNpemUocHN3cC5vcHRpb25zLCBwc3dwLnZpZXdwb3J0U2l6ZSwgdGhpcy5kYXRhLCB0aGlzLmluZGV4KVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnpvb21MZXZlbHMudXBkYXRlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnBhbkFyZWFTaXplKTtcclxuXHJcbiAgICBwc3dwLmRpc3BhdGNoKCdjYWxjU2xpZGVTaXplJywge1xyXG4gICAgICBzbGlkZTogdGhpc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQHJldHVybnMge3N0cmluZ30gKi9cclxuICBnZXRDdXJyZW50VHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmN1cnJab29tTGV2ZWwgLyAodGhpcy5jdXJyZW50UmVzb2x1dGlvbiB8fCB0aGlzLnpvb21MZXZlbHMuaW5pdGlhbCk7XHJcbiAgICByZXR1cm4gdG9UcmFuc2Zvcm1TdHJpbmcodGhpcy5wYW4ueCwgdGhpcy5wYW4ueSwgc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHJlc29sdXRpb24gYW5kIHJlLXJlbmRlciB0aGUgaW1hZ2UuXHJcbiAgICpcclxuICAgKiBGb3IgZXhhbXBsZSwgaWYgdGhlIHJlYWwgaW1hZ2Ugc2l6ZSBpcyAyMDAweDE1MDAsXHJcbiAgICogYW5kIHJlc29sdXRpb24gaXMgMC41IC0gaXQgd2lsbCBiZSByZW5kZXJlZCBhcyAxMDAweDc1MC5cclxuICAgKlxyXG4gICAqIEltYWdlIHdpdGggem9vbSBsZXZlbCAyIGFuZCByZXNvbHV0aW9uIDAuNSBpc1xyXG4gICAqIHRoZSBzYW1lIGFzIGltYWdlIHdpdGggem9vbSBsZXZlbCAxIGFuZCByZXNvbHV0aW9uIDEuXHJcbiAgICpcclxuICAgKiBVc2VkIHRvIG9wdGltaXplIGFuaW1hdGlvbnMgYW5kIG1ha2VcclxuICAgKiBzdXJlIHRoYXQgYnJvd3NlciByZW5kZXJzIGltYWdlIGluIHRoZSBoaWdoZXN0IHF1YWxpdHkuXHJcbiAgICogQWxzbyB1c2VkIGJ5IHJlc3BvbnNpdmUgaW1hZ2VzIHRvIGxvYWQgdGhlIGNvcnJlY3Qgb25lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1Jlc29sdXRpb25cclxuICAgKi9cclxuICBfc2V0UmVzb2x1dGlvbihuZXdSZXNvbHV0aW9uKSB7XHJcbiAgICBpZiAobmV3UmVzb2x1dGlvbiA9PT0gdGhpcy5jdXJyZW50UmVzb2x1dGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50UmVzb2x1dGlvbiA9IG5ld1Jlc29sdXRpb247XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnRTaXplKCk7XHJcblxyXG4gICAgdGhpcy5wc3dwLmRpc3BhdGNoKCdyZXNvbHV0aW9uQ2hhbmdlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5Qb2ludH0gUG9pbnQgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZ2VzdHVyZXMuanMnKS5kZWZhdWx0fSBHZXN0dXJlcyAqL1xyXG5cclxuY29uc3QgUEFOX0VORF9GUklDVElPTiA9IDAuMzU7XHJcbmNvbnN0IFZFUlRJQ0FMX0RSQUdfRlJJQ1RJT04gPSAwLjY7XHJcblxyXG4vLyAxIGNvcnJlc3BvbmRzIHRvIHRoZSB0aGlyZCBvZiB2aWV3cG9ydCBoZWlnaHRcclxuY29uc3QgTUlOX1JBVElPX1RPX0NMT1NFID0gMC40O1xyXG5cclxuLy8gTWluaW11bSBzcGVlZCByZXF1aXJlZCB0byBuYXZpZ2F0ZVxyXG4vLyB0byBuZXh0IG9yIHByZXZpb3VzIHNsaWRlXHJcbmNvbnN0IE1JTl9ORVhUX1NMSURFX1NQRUVEID0gMC41O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbml0aWFsVmVsb2NpdHlcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlY2VsZXJhdGlvblJhdGVcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHByb2plY3QoaW5pdGlhbFZlbG9jaXR5LCBkZWNlbGVyYXRpb25SYXRlKSB7XHJcbiAgcmV0dXJuIGluaXRpYWxWZWxvY2l0eSAqIGRlY2VsZXJhdGlvblJhdGUgLyAoMSAtIGRlY2VsZXJhdGlvblJhdGUpO1xyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBzaW5nbGUgcG9pbnRlciBkcmFnZ2luZ1xyXG4gKi9cclxuY2xhc3MgRHJhZ0hhbmRsZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7R2VzdHVyZXN9IGdlc3R1cmVzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZ2VzdHVyZXMpIHtcclxuICAgIHRoaXMuZ2VzdHVyZXMgPSBnZXN0dXJlcztcclxuICAgIHRoaXMucHN3cCA9IGdlc3R1cmVzLnBzd3A7XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5zdGFydFBhbiA9IHsgeDogMCwgeTogMCB9O1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5wc3dwLmN1cnJTbGlkZSkge1xyXG4gICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnN0YXJ0UGFuLCB0aGlzLnBzd3AuY3VyclNsaWRlLnBhbik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoKSB7XHJcbiAgICBjb25zdCB7IHAxLCBwcmV2UDEsIGRyYWdBeGlzIH0gPSB0aGlzLmdlc3R1cmVzO1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHRoaXMucHN3cDtcclxuXHJcbiAgICBpZiAoZHJhZ0F4aXMgPT09ICd5J1xyXG4gICAgICAmJiB0aGlzLnBzd3Aub3B0aW9ucy5jbG9zZU9uVmVydGljYWxEcmFnXHJcbiAgICAgICYmIChjdXJyU2xpZGUgJiYgY3VyclNsaWRlLmN1cnJab29tTGV2ZWwgPD0gY3VyclNsaWRlLnpvb21MZXZlbHMuZml0KVxyXG4gICAgICAmJiAhdGhpcy5nZXN0dXJlcy5pc011bHRpdG91Y2gpIHtcclxuICAgICAgLy8gSGFuZGxlIHZlcnRpY2FsIGRyYWcgdG8gY2xvc2VcclxuICAgICAgY29uc3QgcGFuWSA9IGN1cnJTbGlkZS5wYW4ueSArIChwMS55IC0gcHJldlAxLnkpO1xyXG4gICAgICBpZiAoIXRoaXMucHN3cC5kaXNwYXRjaCgndmVydGljYWxEcmFnJywgeyBwYW5ZIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgICB0aGlzLl9zZXRQYW5XaXRoRnJpY3Rpb24oJ3knLCBwYW5ZLCBWRVJUSUNBTF9EUkFHX0ZSSUNUSU9OKTtcclxuICAgICAgICBjb25zdCBiZ09wYWNpdHkgPSAxIC0gTWF0aC5hYnModGhpcy5fZ2V0VmVydGljYWxEcmFnUmF0aW8oY3VyclNsaWRlLnBhbi55KSk7XHJcbiAgICAgICAgdGhpcy5wc3dwLmFwcGx5QmdPcGFjaXR5KGJnT3BhY2l0eSk7XHJcbiAgICAgICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWFpblNjcm9sbENoYW5nZWQgPSB0aGlzLl9wYW5Pck1vdmVNYWluU2Nyb2xsKCd4Jyk7XHJcbiAgICAgIGlmICghbWFpblNjcm9sbENoYW5nZWQpIHtcclxuICAgICAgICB0aGlzLl9wYW5Pck1vdmVNYWluU2Nyb2xsKCd5Jyk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyU2xpZGUpIHtcclxuICAgICAgICAgIHJvdW5kUG9pbnQoY3VyclNsaWRlLnBhbik7XHJcbiAgICAgICAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kKCkge1xyXG4gICAgY29uc3QgeyB2ZWxvY2l0eSB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgbWFpblNjcm9sbCwgY3VyclNsaWRlIH0gPSB0aGlzLnBzd3A7XHJcbiAgICBsZXQgaW5kZXhEaWZmID0gMDtcclxuXHJcbiAgICB0aGlzLnBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsKCk7XHJcblxyXG4gICAgLy8gSGFuZGxlIG1haW4gc2Nyb2xsIGlmIGl0J3Mgc2hpZnRlZFxyXG4gICAgaWYgKG1haW5TY3JvbGwuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgLy8gUG9zaXRpb24gb2YgdGhlIG1haW4gc2Nyb2xsIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydFxyXG4gICAgICBjb25zdCBtYWluU2Nyb2xsU2hpZnREaWZmID0gbWFpblNjcm9sbC54IC0gbWFpblNjcm9sbC5nZXRDdXJyU2xpZGVYKCk7XHJcblxyXG4gICAgICAvLyBSYXRpbyBiZXR3ZWVuIDAgYW5kIDE6XHJcbiAgICAgIC8vIDAgLSBzbGlkZSBpcyBub3QgdmlzaWJsZSBhdCBhbGwsXHJcbiAgICAgIC8vIDAuNSAtIGhhbGYgb2YgdGhlIHNsaWRlIGlzIHZpc2libGVcclxuICAgICAgLy8gMSAtIHNsaWRlIGlzIGZ1bGx5IHZpc2libGVcclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlVmlzaWJpbGl0eVJhdGlvID0gKG1haW5TY3JvbGxTaGlmdERpZmYgLyB0aGlzLnBzd3Audmlld3BvcnRTaXplLngpO1xyXG5cclxuICAgICAgLy8gR28gbmV4dCBzbGlkZS5cclxuICAgICAgLy9cclxuICAgICAgLy8gLSBpZiB2ZWxvY2l0eSBhbmQgaXRzIGRpcmVjdGlvbiBpcyBtYXRjaGVkLFxyXG4gICAgICAvLyAgIGFuZCB3ZSBzZWUgYXQgbGVhc3QgdGlueSBwYXJ0IG9mIHRoZSBuZXh0IHNsaWRlXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIC0gb3IgaWYgd2Ugc2VlIGxlc3MgdGhhbiA1MCUgb2YgdGhlIGN1cnJlbnQgc2xpZGVcclxuICAgICAgLy8gICBhbmQgdmVsb2NpdHkgaXMgY2xvc2UgdG8gMFxyXG4gICAgICAvL1xyXG4gICAgICBpZiAoKHZlbG9jaXR5LnggPCAtTUlOX05FWFRfU0xJREVfU1BFRUQgJiYgY3VycmVudFNsaWRlVmlzaWJpbGl0eVJhdGlvIDwgMClcclxuICAgICAgICB8fCAodmVsb2NpdHkueCA8IDAuMSAmJiBjdXJyZW50U2xpZGVWaXNpYmlsaXR5UmF0aW8gPCAtMC41KSkge1xyXG4gICAgICAgIC8vIEdvIHRvIG5leHQgc2xpZGVcclxuICAgICAgICBpbmRleERpZmYgPSAxO1xyXG4gICAgICAgIHZlbG9jaXR5LnggPSBNYXRoLm1pbih2ZWxvY2l0eS54LCAwKTtcclxuICAgICAgfSBlbHNlIGlmICgodmVsb2NpdHkueCA+IE1JTl9ORVhUX1NMSURFX1NQRUVEICYmIGN1cnJlbnRTbGlkZVZpc2liaWxpdHlSYXRpbyA+IDApXHJcbiAgICAgICAgfHwgKHZlbG9jaXR5LnggPiAtMC4xICYmIGN1cnJlbnRTbGlkZVZpc2liaWxpdHlSYXRpbyA+IDAuNSkpIHtcclxuICAgICAgICAvLyBHbyB0byBwcmV2IHNsaWRlXHJcbiAgICAgICAgaW5kZXhEaWZmID0gLTE7XHJcbiAgICAgICAgdmVsb2NpdHkueCA9IE1hdGgubWF4KHZlbG9jaXR5LngsIDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYWluU2Nyb2xsLm1vdmVJbmRleEJ5KGluZGV4RGlmZiwgdHJ1ZSwgdmVsb2NpdHkueCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzdG9yZSB6b29tIGxldmVsXHJcbiAgICBpZiAoKGN1cnJTbGlkZSAmJiBjdXJyU2xpZGUuY3Vyclpvb21MZXZlbCA+IGN1cnJTbGlkZS56b29tTGV2ZWxzLm1heClcclxuICAgICAgfHwgdGhpcy5nZXN0dXJlcy5pc011bHRpdG91Y2gpIHtcclxuICAgICAgdGhpcy5nZXN0dXJlcy56b29tTGV2ZWxzLmNvcnJlY3Rab29tUGFuKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gd2UgcnVuIHR3byBhbmltYXRpb25zIGluc3RlYWQgb2Ygb25lLFxyXG4gICAgICAvLyBhcyBlYWNoIGF4aXMgaGFzIG93biBwYW4gYm91bmRhcmllcyBhbmQgdGh1cyBkaWZmZXJlbnQgc3ByaW5nIGZ1bmN0aW9uXHJcbiAgICAgIC8vIChjb3JyZWN0Wm9vbVBhbiBkb2VzIG5vdCBoYXZlIHRoaXMgZnVuY3Rpb25hbGl0eSxcclxuICAgICAgLy8gIGl0IGFuaW1hdGVzIGFsbCBwcm9wZXJ0aWVzIHdpdGggc2luZ2xlIHRpbWluZyBmdW5jdGlvbilcclxuICAgICAgdGhpcy5fZmluaXNoUGFuR2VzdHVyZUZvckF4aXMoJ3gnKTtcclxuICAgICAgdGhpcy5fZmluaXNoUGFuR2VzdHVyZUZvckF4aXMoJ3knKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsneCcgfCAneSd9IGF4aXNcclxuICAgKi9cclxuICBfZmluaXNoUGFuR2VzdHVyZUZvckF4aXMoYXhpcykge1xyXG4gICAgY29uc3QgeyB2ZWxvY2l0eSB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSB0aGlzLnBzd3A7XHJcblxyXG4gICAgaWYgKCFjdXJyU2xpZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcGFuLCBib3VuZHMgfSA9IGN1cnJTbGlkZTtcclxuICAgIGNvbnN0IHBhblBvcyA9IHBhbltheGlzXTtcclxuICAgIGNvbnN0IHJlc3RvcmVCZ09wYWNpdHkgPSAodGhpcy5wc3dwLmJnT3BhY2l0eSA8IDEgJiYgYXhpcyA9PT0gJ3knKTtcclxuXHJcbiAgICAvLyAwLjk5NSBtZWFucyAtIHNjcm9sbCB2aWV3IGxvc2VzIDAuNSUgb2YgaXRzIHZlbG9jaXR5IHBlciBtaWxsaXNlY29uZFxyXG4gICAgLy8gSW5jcmVhc2luZyB0aGlzIG51bWJlciB3aWxsIHJlZHVjZSB0cmF2ZWwgZGlzdGFuY2VcclxuICAgIGNvbnN0IGRlY2VsZXJhdGlvblJhdGUgPSAwLjk5NTsgLy8gMC45OVxyXG5cclxuICAgIC8vIFBhbiBwb3NpdGlvbiBpZiB0aGVyZSBpcyBubyBib3VuZHNcclxuICAgIGNvbnN0IHByb2plY3RlZFBvc2l0aW9uID0gcGFuUG9zICsgcHJvamVjdCh2ZWxvY2l0eVtheGlzXSwgZGVjZWxlcmF0aW9uUmF0ZSk7XHJcblxyXG4gICAgaWYgKHJlc3RvcmVCZ09wYWNpdHkpIHtcclxuICAgICAgY29uc3QgdkRyYWdSYXRpbyA9IHRoaXMuX2dldFZlcnRpY2FsRHJhZ1JhdGlvKHBhblBvcyk7XHJcbiAgICAgIGNvbnN0IHByb2plY3RlZFZEcmFnUmF0aW8gPSB0aGlzLl9nZXRWZXJ0aWNhbERyYWdSYXRpbyhwcm9qZWN0ZWRQb3NpdGlvbik7XHJcblxyXG4gICAgICAvLyBJZiB3ZSBhcmUgYWJvdmUgYW5kIG1vdmluZyB1cHdhcmRzLFxyXG4gICAgICAvLyBvciBpZiB3ZSBhcmUgYmVsb3cgYW5kIG1vdmluZyBkb3dud2FyZHNcclxuICAgICAgaWYgKCh2RHJhZ1JhdGlvIDwgMCAmJiBwcm9qZWN0ZWRWRHJhZ1JhdGlvIDwgLU1JTl9SQVRJT19UT19DTE9TRSlcclxuICAgICAgICB8fCAodkRyYWdSYXRpbyA+IDAgJiYgcHJvamVjdGVkVkRyYWdSYXRpbyA+IE1JTl9SQVRJT19UT19DTE9TRSkpIHtcclxuICAgICAgICB0aGlzLnBzd3AuY2xvc2UoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQYW4gcG9zaXRpb24gd2l0aCBjb3JyZWN0ZWQgYm91bmRzXHJcbiAgICBjb25zdCBjb3JyZWN0ZWRQYW5Qb3NpdGlvbiA9IGJvdW5kcy5jb3JyZWN0UGFuKGF4aXMsIHByb2plY3RlZFBvc2l0aW9uKTtcclxuXHJcbiAgICAvLyBFeGl0IGlmIHBhbiBwb3NpdGlvbiBzaG91bGQgbm90IGJlIGNoYW5nZWRcclxuICAgIC8vIG9yIGlmIHNwZWVkIGl0IHRvbyBsb3dcclxuICAgIGlmIChwYW5Qb3MgPT09IGNvcnJlY3RlZFBhblBvc2l0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVyc2hvb3QgaWYgdGhlIGZpbmFsIHBvc2l0aW9uIGlzIG91dCBvZiBwYW4gYm91bmRzXHJcbiAgICBjb25zdCBkYW1waW5nUmF0aW8gPSAoY29ycmVjdGVkUGFuUG9zaXRpb24gPT09IHByb2plY3RlZFBvc2l0aW9uKSA/IDEgOiAwLjgyO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxCZ09wYWNpdHkgPSB0aGlzLnBzd3AuYmdPcGFjaXR5O1xyXG4gICAgY29uc3QgdG90YWxQYW5EaXN0ID0gY29ycmVjdGVkUGFuUG9zaXRpb24gLSBwYW5Qb3M7XHJcblxyXG4gICAgdGhpcy5wc3dwLmFuaW1hdGlvbnMuc3RhcnRTcHJpbmcoe1xyXG4gICAgICBuYW1lOiAncGFuR2VzdHVyZScgKyBheGlzLFxyXG4gICAgICBpc1BhbjogdHJ1ZSxcclxuICAgICAgc3RhcnQ6IHBhblBvcyxcclxuICAgICAgZW5kOiBjb3JyZWN0ZWRQYW5Qb3NpdGlvbixcclxuICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5W2F4aXNdLFxyXG4gICAgICBkYW1waW5nUmF0aW8sXHJcbiAgICAgIG9uVXBkYXRlOiAocG9zKSA9PiB7XHJcbiAgICAgICAgLy8gQW5pbWF0ZSBvcGFjaXR5IG9mIGJhY2tncm91bmQgcmVsYXRpdmUgdG8gWSBwYW4gcG9zaXRpb24gb2YgYW4gaW1hZ2VcclxuICAgICAgICBpZiAocmVzdG9yZUJnT3BhY2l0eSAmJiB0aGlzLnBzd3AuYmdPcGFjaXR5IDwgMSkge1xyXG4gICAgICAgICAgLy8gMCAtIHN0YXJ0IG9mIGFuaW1hdGlvbiwgMSAtIGVuZCBvZiBhbmltYXRpb25cclxuICAgICAgICAgIGNvbnN0IGFuaW1hdGlvblByb2dyZXNzUmF0aW8gPSAxIC0gKGNvcnJlY3RlZFBhblBvc2l0aW9uIC0gcG9zKSAvIHRvdGFsUGFuRGlzdDtcclxuXHJcbiAgICAgICAgICAvLyBXZSBjbGFtcCBvcGFjaXR5IHRvIGtlZXAgaXQgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgICAgICAgLy8gQXMgcHJvZ3Jlc3MgcmF0aW8gY2FuIGJlIGxhcmdlciB0aGFuIDEgZHVlIHRvIG92ZXJzaG9vdCxcclxuICAgICAgICAgIC8vIGFuZCB3ZSBkbyBub3Qgd2FudCB0byBib3VuY2Ugb3BhY2l0eS5cclxuICAgICAgICAgIHRoaXMucHN3cC5hcHBseUJnT3BhY2l0eShjbGFtcChcclxuICAgICAgICAgICAgaW5pdGlhbEJnT3BhY2l0eSArICgxIC0gaW5pdGlhbEJnT3BhY2l0eSkgKiBhbmltYXRpb25Qcm9ncmVzc1JhdGlvLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhbltheGlzXSA9IE1hdGguZmxvb3IocG9zKTtcclxuICAgICAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgcG9zaXRpb24gb2YgdGhlIG1haW4gc2Nyb2xsLFxyXG4gICAqIG9yL2FuZCB1cGRhdGUgcGFuIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHNsaWRlLlxyXG4gICAqXHJcbiAgICogU2hvdWxkIHJldHVybiB0cnVlIGlmIGl0IGNoYW5nZXMgKG9yIGNhbiBjaGFuZ2UpIG1haW4gc2Nyb2xsLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0geyd4JyB8ICd5J30gYXhpc1xyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIF9wYW5Pck1vdmVNYWluU2Nyb2xsKGF4aXMpIHtcclxuICAgIGNvbnN0IHsgcDEsIGRyYWdBeGlzLCBwcmV2UDEsIGlzTXVsdGl0b3VjaCB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlLCBtYWluU2Nyb2xsIH0gPSB0aGlzLnBzd3A7XHJcbiAgICBjb25zdCBkZWx0YSA9IChwMVtheGlzXSAtIHByZXZQMVtheGlzXSk7XHJcbiAgICBjb25zdCBuZXdNYWluU2Nyb2xsWCA9IG1haW5TY3JvbGwueCArIGRlbHRhO1xyXG5cclxuICAgIGlmICghZGVsdGEgfHwgIWN1cnJTbGlkZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWx3YXlzIG1vdmUgbWFpbiBzY3JvbGwgaWYgaW1hZ2UgY2FuIG5vdCBiZSBwYW5uZWRcclxuICAgIGlmIChheGlzID09PSAneCcgJiYgIWN1cnJTbGlkZS5pc1Bhbm5hYmxlKCkgJiYgIWlzTXVsdGl0b3VjaCkge1xyXG4gICAgICBtYWluU2Nyb2xsLm1vdmVUbyhuZXdNYWluU2Nyb2xsWCwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlOyAvLyBjaGFuZ2VkIG1haW4gc2Nyb2xsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBib3VuZHMgfSA9IGN1cnJTbGlkZTtcclxuICAgIGNvbnN0IG5ld1BhbiA9IGN1cnJTbGlkZS5wYW5bYXhpc10gKyBkZWx0YTtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwLm9wdGlvbnMuYWxsb3dQYW5Ub05leHRcclxuICAgICAgJiYgZHJhZ0F4aXMgPT09ICd4J1xyXG4gICAgICAmJiBheGlzID09PSAneCdcclxuICAgICAgJiYgIWlzTXVsdGl0b3VjaCkge1xyXG4gICAgICBjb25zdCBjdXJyU2xpZGVNYWluU2Nyb2xsWCA9IG1haW5TY3JvbGwuZ2V0Q3VyclNsaWRlWCgpO1xyXG5cclxuICAgICAgLy8gUG9zaXRpb24gb2YgdGhlIG1haW4gc2Nyb2xsIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydFxyXG4gICAgICBjb25zdCBtYWluU2Nyb2xsU2hpZnREaWZmID0gbWFpblNjcm9sbC54IC0gY3VyclNsaWRlTWFpblNjcm9sbFg7XHJcblxyXG4gICAgICBjb25zdCBpc0xlZnRUb1JpZ2h0ID0gZGVsdGEgPiAwO1xyXG4gICAgICBjb25zdCBpc1JpZ2h0VG9MZWZ0ID0gIWlzTGVmdFRvUmlnaHQ7XHJcblxyXG4gICAgICBpZiAobmV3UGFuID4gYm91bmRzLm1pbltheGlzXSAmJiBpc0xlZnRUb1JpZ2h0KSB7XHJcbiAgICAgICAgLy8gUGFubmluZyBmcm9tIGxlZnQgdG8gcmlnaHQsIGJleW9uZCB0aGUgbGVmdCBlZGdlXHJcblxyXG4gICAgICAgIC8vIFdldGhlciB0aGUgaW1hZ2Ugd2FzIGF0IG1pbmltdW0gcGFuIHBvc2l0aW9uIChvciBsZXNzKVxyXG4gICAgICAgIC8vIHdoZW4gdGhpcyBkcmFnIGdlc3R1cmUgc3RhcnRlZC5cclxuICAgICAgICAvLyBNaW5pbXVtIHBhbiBwb3NpdGlvbiByZWZlcnMgdG8gdGhlIGxlZnQgZWRnZSBvZiB0aGUgaW1hZ2UuXHJcbiAgICAgICAgY29uc3Qgd2FzQXRNaW5QYW5Qb3NpdGlvbiA9IChib3VuZHMubWluW2F4aXNdIDw9IHRoaXMuc3RhcnRQYW5bYXhpc10pO1xyXG5cclxuICAgICAgICBpZiAod2FzQXRNaW5QYW5Qb3NpdGlvbikge1xyXG4gICAgICAgICAgbWFpblNjcm9sbC5tb3ZlVG8obmV3TWFpblNjcm9sbFgsIHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICAgICAgLy9jdXJyU2xpZGUucGFuW2F4aXNdID0gbmV3UGFuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChuZXdQYW4gPCBib3VuZHMubWF4W2F4aXNdICYmIGlzUmlnaHRUb0xlZnQpIHtcclxuICAgICAgICAvLyBQYW5pbmcgZnJvbSByaWdodCB0byBsZWZ0LCBiZXlvbmQgdGhlIHJpZ2h0IGVkZ2VcclxuXHJcbiAgICAgICAgLy8gTWF4aW11bSBwYW4gcG9zaXRpb24gcmVmZXJzIHRvIHRoZSByaWdodCBlZGdlIG9mIHRoZSBpbWFnZS5cclxuICAgICAgICBjb25zdCB3YXNBdE1heFBhblBvc2l0aW9uID0gKHRoaXMuc3RhcnRQYW5bYXhpc10gPD0gYm91bmRzLm1heFtheGlzXSk7XHJcblxyXG4gICAgICAgIGlmICh3YXNBdE1heFBhblBvc2l0aW9uKSB7XHJcbiAgICAgICAgICBtYWluU2Nyb2xsLm1vdmVUbyhuZXdNYWluU2Nyb2xsWCwgdHJ1ZSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fc2V0UGFuV2l0aEZyaWN0aW9uKGF4aXMsIG5ld1Bhbik7XHJcbiAgICAgICAgICAvL2N1cnJTbGlkZS5wYW5bYXhpc10gPSBuZXdQYW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIG1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWRcclxuICAgICAgICBpZiAobWFpblNjcm9sbFNoaWZ0RGlmZiAhPT0gMCkge1xyXG4gICAgICAgICAgLy8gSWYgbWFpbiBzY3JvbGwgaXMgc2hpZnRlZCByaWdodFxyXG4gICAgICAgICAgaWYgKG1haW5TY3JvbGxTaGlmdERpZmYgPiAwIC8qJiYgaXNSaWdodFRvTGVmdCovKSB7XHJcbiAgICAgICAgICAgIG1haW5TY3JvbGwubW92ZVRvKE1hdGgubWF4KG5ld01haW5TY3JvbGxYLCBjdXJyU2xpZGVNYWluU2Nyb2xsWCksIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAobWFpblNjcm9sbFNoaWZ0RGlmZiA8IDAgLyomJiBpc0xlZnRUb1JpZ2h0Ki8pIHtcclxuICAgICAgICAgICAgLy8gTWFpbiBzY3JvbGwgaXMgc2hpZnRlZCBsZWZ0IChQb3NpdGlvbiBpcyBsZXNzIHRoYW4gMCBjb21wYXJpbmcgdG8gdGhlIHZpZXdwb3J0IDApXHJcbiAgICAgICAgICAgIG1haW5TY3JvbGwubW92ZVRvKE1hdGgubWluKG5ld01haW5TY3JvbGxYLCBjdXJyU2xpZGVNYWluU2Nyb2xsWCksIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gV2UgYXJlIHdpdGhpbiBwYW4gYm91bmRzLCBzbyBqdXN0IHBhblxyXG4gICAgICAgICAgdGhpcy5fc2V0UGFuV2l0aEZyaWN0aW9uKGF4aXMsIG5ld1Bhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XHJcbiAgICAgICAgLy8gRG8gbm90IHBhbiB2ZXJ0aWNhbGx5IGlmIG1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWQgb1xyXG4gICAgICAgIGlmICghbWFpblNjcm9sbC5pc1NoaWZ0ZWQoKSAmJiBib3VuZHMubWluLnkgIT09IGJvdW5kcy5tYXgueSkge1xyXG4gICAgICAgICAgdGhpcy5fc2V0UGFuV2l0aEZyaWN0aW9uKGF4aXMsIG5ld1Bhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBuZXdQYW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgd2UgbW92ZSBhYm92ZSAtIHRoZSByYXRpbyBpcyBuZWdhdGl2ZVxyXG4gIC8vIElmIHdlIG1vdmUgYmVsb3cgdGhlIHJhdGlvIGlzIHBvc2l0aXZlXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbGF0aW9uIGJldHdlZW4gcGFuIFkgcG9zaXRpb24gYW5kIHRoaXJkIG9mIHZpZXdwb3J0IGhlaWdodC5cclxuICAgKlxyXG4gICAqIFdoZW4gd2UgYXJlIGF0IGluaXRpYWwgcG9zaXRpb24gKGNlbnRlciBib3VuZHMpIC0gdGhlIHJhdGlvIGlzIDAsXHJcbiAgICogaWYgcG9zaXRpb24gaXMgc2hpZnRlZCB1cHdhcmRzIC0gdGhlIHJhdGlvIGlzIG5lZ2F0aXZlLFxyXG4gICAqIGlmIHBvc2l0aW9uIGlzIHNoaWZ0ZWQgZG93bndhcmRzIC0gdGhlIHJhdGlvIGlzIHBvc2l0aXZlLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFuWSBUaGUgY3VycmVudCBwYW4gWSBwb3NpdGlvbi5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIF9nZXRWZXJ0aWNhbERyYWdSYXRpbyhwYW5ZKSB7XHJcbiAgICByZXR1cm4gKHBhblkgLSAodGhpcy5wc3dwLmN1cnJTbGlkZT8uYm91bmRzLmNlbnRlci55ID8/IDApKSAvICh0aGlzLnBzd3Audmlld3BvcnRTaXplLnkgLyAzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBwYW4gcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgc2xpZGUuXHJcbiAgICogQXBwbHkgZnJpY3Rpb24gaWYgdGhlIHBvc2l0aW9uIGlzIGJleW9uZCB0aGUgcGFuIGJvdW5kcyxcclxuICAgKiBvciBpZiBjdXN0b20gZnJpY3Rpb24gaXMgZGVmaW5lZC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsneCcgfCAneSd9IGF4aXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcG90ZW50aWFsUGFuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjdXN0b21GcmljdGlvbl0gKDAuMSAtIDEpXHJcbiAgICovXHJcbiAgX3NldFBhbldpdGhGcmljdGlvbihheGlzLCBwb3RlbnRpYWxQYW4sIGN1c3RvbUZyaWN0aW9uKSB7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gdGhpcy5wc3dwO1xyXG5cclxuICAgIGlmICghY3VyclNsaWRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHBhbiwgYm91bmRzIH0gPSBjdXJyU2xpZGU7XHJcbiAgICBjb25zdCBjb3JyZWN0ZWRQYW4gPSBib3VuZHMuY29ycmVjdFBhbihheGlzLCBwb3RlbnRpYWxQYW4pO1xyXG4gICAgLy8gSWYgd2UgYXJlIG91dCBvZiBwYW4gYm91bmRzXHJcbiAgICBpZiAoY29ycmVjdGVkUGFuICE9PSBwb3RlbnRpYWxQYW4gfHwgY3VzdG9tRnJpY3Rpb24pIHtcclxuICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLnJvdW5kKHBvdGVudGlhbFBhbiAtIHBhbltheGlzXSk7XHJcbiAgICAgIHBhbltheGlzXSArPSBkZWx0YSAqIChjdXN0b21GcmljdGlvbiB8fCBQQU5fRU5EX0ZSSUNUSU9OKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhbltheGlzXSA9IHBvdGVudGlhbFBhbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2dlc3R1cmVzLmpzJykuZGVmYXVsdH0gR2VzdHVyZXMgKi9cclxuXHJcbmNvbnN0IFVQUEVSX1pPT01fRlJJQ1RJT04gPSAwLjA1O1xyXG5jb25zdCBMT1dFUl9aT09NX0ZSSUNUSU9OID0gMC4xNTtcclxuXHJcblxyXG4vKipcclxuICogR2V0IGNlbnRlciBwb2ludCBiZXR3ZWVuIHR3byBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHtQb2ludH0gcFxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMVxyXG4gKiBAcGFyYW0ge1BvaW50fSBwMlxyXG4gKiBAcmV0dXJucyB7UG9pbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRab29tUG9pbnRzQ2VudGVyKHAsIHAxLCBwMikge1xyXG4gIHAueCA9IChwMS54ICsgcDIueCkgLyAyO1xyXG4gIHAueSA9IChwMS55ICsgcDIueSkgLyAyO1xyXG4gIHJldHVybiBwO1xyXG59XHJcblxyXG5jbGFzcyBab29tSGFuZGxlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtHZXN0dXJlc30gZ2VzdHVyZXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihnZXN0dXJlcykge1xyXG4gICAgdGhpcy5nZXN0dXJlcyA9IGdlc3R1cmVzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9zdGFydFBhbiA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9zdGFydFpvb21Qb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLl96b29tUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fd2FzT3ZlckZpdFpvb21MZXZlbCA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9zdGFydFpvb21MZXZlbCA9IDE7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSB0aGlzLmdlc3R1cmVzLnBzd3A7XHJcbiAgICBpZiAoY3VyclNsaWRlKSB7XHJcbiAgICAgIHRoaXMuX3N0YXJ0Wm9vbUxldmVsID0gY3VyclNsaWRlLmN1cnJab29tTGV2ZWw7XHJcbiAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuX3N0YXJ0UGFuLCBjdXJyU2xpZGUucGFuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdlc3R1cmVzLnBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsUGFuKCk7XHJcbiAgICB0aGlzLl93YXNPdmVyRml0Wm9vbUxldmVsID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoKSB7XHJcbiAgICBjb25zdCB7IHAxLCBzdGFydFAxLCBwMiwgc3RhcnRQMiwgcHN3cCB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSBwc3dwO1xyXG5cclxuICAgIGlmICghY3VyclNsaWRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtaW5ab29tTGV2ZWwgPSBjdXJyU2xpZGUuem9vbUxldmVscy5taW47XHJcbiAgICBjb25zdCBtYXhab29tTGV2ZWwgPSBjdXJyU2xpZGUuem9vbUxldmVscy5tYXg7XHJcblxyXG4gICAgaWYgKCFjdXJyU2xpZGUuaXNab29tYWJsZSgpIHx8IHBzd3AubWFpblNjcm9sbC5pc1NoaWZ0ZWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Wm9vbVBvaW50c0NlbnRlcih0aGlzLl9zdGFydFpvb21Qb2ludCwgc3RhcnRQMSwgc3RhcnRQMik7XHJcbiAgICBnZXRab29tUG9pbnRzQ2VudGVyKHRoaXMuX3pvb21Qb2ludCwgcDEsIHAyKTtcclxuXHJcbiAgICBsZXQgY3Vyclpvb21MZXZlbCA9ICgxIC8gZ2V0RGlzdGFuY2VCZXR3ZWVuKHN0YXJ0UDEsIHN0YXJ0UDIpKVxyXG4gICAgICAqIGdldERpc3RhbmNlQmV0d2VlbihwMSwgcDIpXHJcbiAgICAgICogdGhpcy5fc3RhcnRab29tTGV2ZWw7XHJcblxyXG4gICAgLy8gc2xpZ2h0bHkgb3ZlciB0aGUgem9vbS5maXRcclxuICAgIGlmIChjdXJyWm9vbUxldmVsID4gY3VyclNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCArIChjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsIC8gMTUpKSB7XHJcbiAgICAgIHRoaXMuX3dhc092ZXJGaXRab29tTGV2ZWwgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyWm9vbUxldmVsIDwgbWluWm9vbUxldmVsKSB7XHJcbiAgICAgIGlmIChwc3dwLm9wdGlvbnMucGluY2hUb0Nsb3NlXHJcbiAgICAgICAgJiYgIXRoaXMuX3dhc092ZXJGaXRab29tTGV2ZWxcclxuICAgICAgICAmJiB0aGlzLl9zdGFydFpvb21MZXZlbCA8PSBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsKSB7XHJcbiAgICAgICAgLy8gZmFkZSBvdXQgYmFja2dyb3VuZCBpZiB6b29taW5nIG91dFxyXG4gICAgICAgIGNvbnN0IGJnT3BhY2l0eSA9IDEgLSAoKG1pblpvb21MZXZlbCAtIGN1cnJab29tTGV2ZWwpIC8gKG1pblpvb21MZXZlbCAvIDEuMikpO1xyXG4gICAgICAgIGlmICghcHN3cC5kaXNwYXRjaCgncGluY2hDbG9zZScsIHsgYmdPcGFjaXR5IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgICAgIHBzd3AuYXBwbHlCZ09wYWNpdHkoYmdPcGFjaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQXBwbHkgdGhlIGZyaWN0aW9uIGlmIHpvb20gbGV2ZWwgaXMgYmVsb3cgdGhlIG1pblxyXG4gICAgICAgIGN1cnJab29tTGV2ZWwgPSBtaW5ab29tTGV2ZWwgLSAobWluWm9vbUxldmVsIC0gY3Vyclpvb21MZXZlbCkgKiBMT1dFUl9aT09NX0ZSSUNUSU9OO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJab29tTGV2ZWwgPiBtYXhab29tTGV2ZWwpIHtcclxuICAgICAgLy8gQXBwbHkgdGhlIGZyaWN0aW9uIGlmIHpvb20gbGV2ZWwgaXMgYWJvdmUgdGhlIG1heFxyXG4gICAgICBjdXJyWm9vbUxldmVsID0gbWF4Wm9vbUxldmVsICsgKGN1cnJab29tTGV2ZWwgLSBtYXhab29tTGV2ZWwpICogVVBQRVJfWk9PTV9GUklDVElPTjtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyU2xpZGUucGFuLnggPSB0aGlzLl9jYWxjdWxhdGVQYW5Gb3Jab29tTGV2ZWwoJ3gnLCBjdXJyWm9vbUxldmVsKTtcclxuICAgIGN1cnJTbGlkZS5wYW4ueSA9IHRoaXMuX2NhbGN1bGF0ZVBhbkZvclpvb21MZXZlbCgneScsIGN1cnJab29tTGV2ZWwpO1xyXG5cclxuICAgIGN1cnJTbGlkZS5zZXRab29tTGV2ZWwoY3Vyclpvb21MZXZlbCk7XHJcbiAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gIH1cclxuXHJcbiAgZW5kKCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzLmdlc3R1cmVzO1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHBzd3A7XHJcbiAgICBpZiAoKCFjdXJyU2xpZGUgfHwgY3VyclNsaWRlLmN1cnJab29tTGV2ZWwgPCBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsKVxyXG4gICAgICAmJiAhdGhpcy5fd2FzT3ZlckZpdFpvb21MZXZlbFxyXG4gICAgICAmJiBwc3dwLm9wdGlvbnMucGluY2hUb0Nsb3NlKSB7XHJcbiAgICAgIHBzd3AuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29ycmVjdFpvb21QYW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsneCcgfCAneSd9IGF4aXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3Vyclpvb21MZXZlbFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgX2NhbGN1bGF0ZVBhbkZvclpvb21MZXZlbChheGlzLCBjdXJyWm9vbUxldmVsKSB7XHJcbiAgICBjb25zdCB6b29tRmFjdG9yID0gY3Vyclpvb21MZXZlbCAvIHRoaXMuX3N0YXJ0Wm9vbUxldmVsO1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb21Qb2ludFtheGlzXVxyXG4gICAgICAtICgodGhpcy5fc3RhcnRab29tUG9pbnRbYXhpc10gLSB0aGlzLl9zdGFydFBhbltheGlzXSkgKiB6b29tRmFjdG9yKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcnJlY3QgY3Vyclpvb21MZXZlbCBhbmQgcGFuIGlmIHRoZXkgYXJlXHJcbiAgICogYmV5b25kIG1pbmltdW0gb3IgbWF4aW11bSB2YWx1ZXMuXHJcbiAgICogV2l0aCBhbmltYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVHZXN0dXJlXVxyXG4gICAqIFdldGhlciBnZXN0dXJlIGNvb3JkaW5hdGVzIHNob3VsZCBiZSBpZ25vcmVkIHdoZW4gY2FsY3VsYXRpbmcgZGVzdGluYXRpb24gcGFuIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIGNvcnJlY3Rab29tUGFuKGlnbm9yZUdlc3R1cmUpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcy5nZXN0dXJlcztcclxuICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSBwc3dwO1xyXG5cclxuICAgIGlmICghY3VyclNsaWRlPy5pc1pvb21hYmxlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl96b29tUG9pbnQueCA9PT0gMCkge1xyXG4gICAgICBpZ25vcmVHZXN0dXJlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2Wm9vbUxldmVsID0gY3VyclNsaWRlLmN1cnJab29tTGV2ZWw7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICBsZXQgZGVzdGluYXRpb25ab29tTGV2ZWw7XHJcbiAgICBsZXQgY3Vyclpvb21MZXZlbE5lZWRzQ2hhbmdlID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAocHJldlpvb21MZXZlbCA8IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWwpIHtcclxuICAgICAgZGVzdGluYXRpb25ab29tTGV2ZWwgPSBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsO1xyXG4gICAgICAvLyB6b29tIHRvIG1pblxyXG4gICAgfSBlbHNlIGlmIChwcmV2Wm9vbUxldmVsID4gY3VyclNsaWRlLnpvb21MZXZlbHMubWF4KSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uWm9vbUxldmVsID0gY3VyclNsaWRlLnpvb21MZXZlbHMubWF4O1xyXG4gICAgICAvLyB6b29tIHRvIG1heFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3Vyclpvb21MZXZlbE5lZWRzQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgIGRlc3RpbmF0aW9uWm9vbUxldmVsID0gcHJldlpvb21MZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsQmdPcGFjaXR5ID0gcHN3cC5iZ09wYWNpdHk7XHJcbiAgICBjb25zdCByZXN0b3JlQmdPcGFjaXR5ID0gcHN3cC5iZ09wYWNpdHkgPCAxO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxQYW4gPSBlcXVhbGl6ZVBvaW50cyh7IHg6IDAsIHk6IDAgfSwgY3VyclNsaWRlLnBhbik7XHJcbiAgICBsZXQgZGVzdGluYXRpb25QYW4gPSBlcXVhbGl6ZVBvaW50cyh7IHg6IDAsIHk6IDAgfSwgaW5pdGlhbFBhbik7XHJcblxyXG4gICAgaWYgKGlnbm9yZUdlc3R1cmUpIHtcclxuICAgICAgdGhpcy5fem9vbVBvaW50LnggPSAwO1xyXG4gICAgICB0aGlzLl96b29tUG9pbnQueSA9IDA7XHJcbiAgICAgIHRoaXMuX3N0YXJ0Wm9vbVBvaW50LnggPSAwO1xyXG4gICAgICB0aGlzLl9zdGFydFpvb21Qb2ludC55ID0gMDtcclxuICAgICAgdGhpcy5fc3RhcnRab29tTGV2ZWwgPSBwcmV2Wm9vbUxldmVsO1xyXG4gICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9zdGFydFBhbiwgaW5pdGlhbFBhbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSkge1xyXG4gICAgICBkZXN0aW5hdGlvblBhbiA9IHtcclxuICAgICAgICB4OiB0aGlzLl9jYWxjdWxhdGVQYW5Gb3Jab29tTGV2ZWwoJ3gnLCBkZXN0aW5hdGlvblpvb21MZXZlbCksXHJcbiAgICAgICAgeTogdGhpcy5fY2FsY3VsYXRlUGFuRm9yWm9vbUxldmVsKCd5JywgZGVzdGluYXRpb25ab29tTGV2ZWwpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHpvb20gbGV2ZWwsIHNvIHBhbiBib3VuZHMgYXJlIHVwZGF0ZWQgYWNjb3JkaW5nIHRvIGl0XHJcbiAgICBjdXJyU2xpZGUuc2V0Wm9vbUxldmVsKGRlc3RpbmF0aW9uWm9vbUxldmVsKTtcclxuXHJcbiAgICBkZXN0aW5hdGlvblBhbiA9IHtcclxuICAgICAgeDogY3VyclNsaWRlLmJvdW5kcy5jb3JyZWN0UGFuKCd4JywgZGVzdGluYXRpb25QYW4ueCksXHJcbiAgICAgIHk6IGN1cnJTbGlkZS5ib3VuZHMuY29ycmVjdFBhbigneScsIGRlc3RpbmF0aW9uUGFuLnkpXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHJldHVybiB6b29tIGxldmVsIGFuZCBpdHMgYm91bmRzIHRvIGluaXRpYWxcclxuICAgIGN1cnJTbGlkZS5zZXRab29tTGV2ZWwocHJldlpvb21MZXZlbCk7XHJcblxyXG4gICAgY29uc3QgcGFuTmVlZHNDaGFuZ2UgPSAhcG9pbnRzRXF1YWwoZGVzdGluYXRpb25QYW4sIGluaXRpYWxQYW4pO1xyXG5cclxuICAgIGlmICghcGFuTmVlZHNDaGFuZ2UgJiYgIWN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSAmJiAhcmVzdG9yZUJnT3BhY2l0eSkge1xyXG4gICAgICAvLyB1cGRhdGUgcmVzb2x1dGlvbiBhZnRlciBnZXN0dXJlXHJcbiAgICAgIGN1cnJTbGlkZS5fc2V0UmVzb2x1dGlvbihkZXN0aW5hdGlvblpvb21MZXZlbCk7XHJcbiAgICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcblxyXG4gICAgICAvLyBub3RoaW5nIHRvIGFuaW1hdGVcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsUGFuKCk7XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0YXJ0U3ByaW5nKHtcclxuICAgICAgaXNQYW46IHRydWUsXHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBlbmQ6IDEwMDAsXHJcbiAgICAgIHZlbG9jaXR5OiAwLFxyXG4gICAgICBkYW1waW5nUmF0aW86IDEsXHJcbiAgICAgIG5hdHVyYWxGcmVxdWVuY3k6IDQwLFxyXG4gICAgICBvblVwZGF0ZTogKG5vdykgPT4ge1xyXG4gICAgICAgIG5vdyAvPSAxMDAwOyAvLyAwIC0gc3RhcnQsIDEgLSBlbmRcclxuXHJcbiAgICAgICAgaWYgKHBhbk5lZWRzQ2hhbmdlIHx8IGN1cnJab29tTGV2ZWxOZWVkc0NoYW5nZSkge1xyXG4gICAgICAgICAgaWYgKHBhbk5lZWRzQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIGN1cnJTbGlkZS5wYW4ueCA9IGluaXRpYWxQYW4ueCArIChkZXN0aW5hdGlvblBhbi54IC0gaW5pdGlhbFBhbi54KSAqIG5vdztcclxuICAgICAgICAgICAgY3VyclNsaWRlLnBhbi55ID0gaW5pdGlhbFBhbi55ICsgKGRlc3RpbmF0aW9uUGFuLnkgLSBpbml0aWFsUGFuLnkpICogbm93O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjdXJyWm9vbUxldmVsTmVlZHNDaGFuZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Wm9vbUxldmVsID0gcHJldlpvb21MZXZlbFxyXG4gICAgICAgICAgICAgICsgKGRlc3RpbmF0aW9uWm9vbUxldmVsIC0gcHJldlpvb21MZXZlbCkgKiBub3c7XHJcbiAgICAgICAgICAgIGN1cnJTbGlkZS5zZXRab29tTGV2ZWwobmV3Wm9vbUxldmVsKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjdXJyU2xpZGUuYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSBiYWNrZ3JvdW5kIG9wYWNpdHlcclxuICAgICAgICBpZiAocmVzdG9yZUJnT3BhY2l0eSAmJiBwc3dwLmJnT3BhY2l0eSA8IDEpIHtcclxuICAgICAgICAgIC8vIFdlIGNsYW1wIG9wYWNpdHkgdG8ga2VlcCBpdCBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAgICAgICAvLyBBcyBwcm9ncmVzcyByYXRpbyBjYW4gYmUgbGFyZ2VyIHRoYW4gMSBkdWUgdG8gb3ZlcnNob290LFxyXG4gICAgICAgICAgLy8gYW5kIHdlIGRvIG5vdCB3YW50IHRvIGJvdW5jZSBvcGFjaXR5LlxyXG4gICAgICAgICAgcHN3cC5hcHBseUJnT3BhY2l0eShjbGFtcChcclxuICAgICAgICAgICAgaW5pdGlhbEJnT3BhY2l0eSArICgxIC0gaW5pdGlhbEJnT3BhY2l0eSkgKiBub3csIDAsIDFcclxuICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIC8vIHVwZGF0ZSByZXNvbHV0aW9uIGFmdGVyIHRyYW5zaXRpb24gZW5kc1xyXG4gICAgICAgIGN1cnJTbGlkZS5fc2V0UmVzb2x1dGlvbihkZXN0aW5hdGlvblpvb21MZXZlbCk7XHJcbiAgICAgICAgY3VyclNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFQsIFBcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vdHlwZXMuanMnKS5BZGRQb3N0Zml4PFQsIFA+fSBBZGRQb3N0Zml4PFQsIFA+XHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZ2VzdHVyZXMuanMnKS5kZWZhdWx0fSBHZXN0dXJlcyAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLlBvaW50fSBQb2ludCAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHsnaW1hZ2VDbGljaycgfCAnYmdDbGljaycgfCAndGFwJyB8ICdkb3VibGVUYXAnfSBBY3Rpb25zICovXHJcblxyXG4vKipcclxuICogV2hldGhlciB0aGUgdGFwIHdhcyBwZXJmb3JtZWQgb24gdGhlIG1haW4gc2xpZGVcclxuICogKHJhdGhlciB0aGFuIGNvbnRyb2xzIG9yIGNhcHRpb24pLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZXZlbnRcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBkaWRUYXBPbk1haW5Db250ZW50KGV2ZW50KSB7XHJcbiAgcmV0dXJuICEhKC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5wc3dwX19jb250YWluZXInKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUYXAsIGRvdWJsZS10YXAgaGFuZGxlci5cclxuICovXHJcbmNsYXNzIFRhcEhhbmRsZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7R2VzdHVyZXN9IGdlc3R1cmVzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZ2VzdHVyZXMpIHtcclxuICAgIHRoaXMuZ2VzdHVyZXMgPSBnZXN0dXJlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UG9pbnR9IHBvaW50XHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IG9yaWdpbmFsRXZlbnRcclxuICAgKi9cclxuICBjbGljayhwb2ludCwgb3JpZ2luYWxFdmVudCkge1xyXG4gICAgY29uc3QgdGFyZ2V0Q2xhc3NMaXN0ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKG9yaWdpbmFsRXZlbnQudGFyZ2V0KS5jbGFzc0xpc3Q7XHJcbiAgICBjb25zdCBpc0ltYWdlQ2xpY2sgPSB0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoJ3Bzd3BfX2ltZycpO1xyXG4gICAgY29uc3QgaXNCYWNrZ3JvdW5kQ2xpY2sgPSB0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoJ3Bzd3BfX2l0ZW0nKVxyXG4gICAgICB8fCB0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoJ3Bzd3BfX3pvb20td3JhcCcpO1xyXG5cclxuICAgIGlmIChpc0ltYWdlQ2xpY2spIHtcclxuICAgICAgdGhpcy5fZG9DbGlja09yVGFwQWN0aW9uKCdpbWFnZUNsaWNrJywgcG9pbnQsIG9yaWdpbmFsRXZlbnQpO1xyXG4gICAgfSBlbHNlIGlmIChpc0JhY2tncm91bmRDbGljaykge1xyXG4gICAgICB0aGlzLl9kb0NsaWNrT3JUYXBBY3Rpb24oJ2JnQ2xpY2snLCBwb2ludCwgb3JpZ2luYWxFdmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwb2ludFxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBvcmlnaW5hbEV2ZW50XHJcbiAgICovXHJcbiAgdGFwKHBvaW50LCBvcmlnaW5hbEV2ZW50KSB7XHJcbiAgICBpZiAoZGlkVGFwT25NYWluQ29udGVudChvcmlnaW5hbEV2ZW50KSkge1xyXG4gICAgICB0aGlzLl9kb0NsaWNrT3JUYXBBY3Rpb24oJ3RhcCcsIHBvaW50LCBvcmlnaW5hbEV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UG9pbnR9IHBvaW50XHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IG9yaWdpbmFsRXZlbnRcclxuICAgKi9cclxuICBkb3VibGVUYXAocG9pbnQsIG9yaWdpbmFsRXZlbnQpIHtcclxuICAgIGlmIChkaWRUYXBPbk1haW5Db250ZW50KG9yaWdpbmFsRXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuX2RvQ2xpY2tPclRhcEFjdGlvbignZG91YmxlVGFwJywgcG9pbnQsIG9yaWdpbmFsRXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0FjdGlvbnN9IGFjdGlvbk5hbWVcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwb2ludFxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBvcmlnaW5hbEV2ZW50XHJcbiAgICovXHJcbiAgX2RvQ2xpY2tPclRhcEFjdGlvbihhY3Rpb25OYW1lLCBwb2ludCwgb3JpZ2luYWxFdmVudCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzLmdlc3R1cmVzO1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUgfSA9IHBzd3A7XHJcbiAgICBjb25zdCBhY3Rpb25GdWxsTmFtZSA9IC8qKiBAdHlwZSB7QWRkUG9zdGZpeDxBY3Rpb25zLCAnQWN0aW9uJz59ICovIChhY3Rpb25OYW1lICsgJ0FjdGlvbicpO1xyXG4gICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBwc3dwLm9wdGlvbnNbYWN0aW9uRnVsbE5hbWVdO1xyXG5cclxuICAgIGlmIChwc3dwLmRpc3BhdGNoKGFjdGlvbkZ1bGxOYW1lLCB7IHBvaW50LCBvcmlnaW5hbEV2ZW50IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgb3B0aW9uVmFsdWUuY2FsbChwc3dwLCBwb2ludCwgb3JpZ2luYWxFdmVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKG9wdGlvblZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcclxuICAgICAgY2FzZSAnbmV4dCc6XHJcbiAgICAgICAgcHN3cFtvcHRpb25WYWx1ZV0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnem9vbSc6XHJcbiAgICAgICAgY3VyclNsaWRlPy50b2dnbGVab29tKHBvaW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnem9vbS1vci1jbG9zZSc6XHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBjbGljayB6b29tcyBjdXJyZW50IGltYWdlLFxyXG4gICAgICAgIC8vIGlmIGl0IGNhbiBub3QgYmUgem9vbWVkIC0gZ2FsbGVyeSB3aWxsIGJlIGNsb3NlZFxyXG4gICAgICAgIGlmIChjdXJyU2xpZGU/LmlzWm9vbWFibGUoKVxyXG4gICAgICAgICAgJiYgY3VyclNsaWRlLnpvb21MZXZlbHMuc2Vjb25kYXJ5ICE9PSBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsKSB7XHJcbiAgICAgICAgICBjdXJyU2xpZGUudG9nZ2xlWm9vbShwb2ludCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwc3dwLm9wdGlvbnMuY2xpY2tUb0Nsb3NlTm9uWm9vbWFibGUpIHtcclxuICAgICAgICAgIHBzd3AuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvZ2dsZS1jb250cm9scyc6XHJcbiAgICAgICAgdGhpcy5nZXN0dXJlcy5wc3dwLmVsZW1lbnQ/LmNsYXNzTGlzdC50b2dnbGUoJ3Bzd3AtLXVpLXZpc2libGUnKTtcclxuICAgICAgICAvLyBpZiAoX2NvbnRyb2xzVmlzaWJsZSkge1xyXG4gICAgICAgIC8vICAgX3VpLmhpZGVDb250cm9scygpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICBfdWkuc2hvd0NvbnRyb2xzKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUG9pbnR9IFBvaW50ICovXHJcblxyXG4vLyBIb3cgZmFyIHNob3VsZCB1c2VyIHNob3VsZCBkcmFnXHJcbi8vIHVudGlsIHdlIGNhbiBkZXRlcm1pbmUgdGhhdCB0aGUgZ2VzdHVyZSBpcyBzd2lwZSBhbmQgaXRzIGRpcmVjdGlvblxyXG5jb25zdCBBWElTX1NXSVBFX0hZU1RFUklTSVMgPSAxMDtcclxuLy9jb25zdCBQQU5fRU5EX0ZSSUNUSU9OID0gMC4zNTtcclxuXHJcbmNvbnN0IERPVUJMRV9UQVBfREVMQVkgPSAzMDA7IC8vIG1zXHJcbmNvbnN0IE1JTl9UQVBfRElTVEFOQ0UgPSAyNTsgLy8gcHhcclxuXHJcbi8qKlxyXG4gKiBHZXN0dXJlcyBjbGFzcyBiaW5kIHRvdWNoLCBwb2ludGVyIG9yIG1vdXNlIGV2ZW50c1xyXG4gKiBhbmQgZW1pdHMgZHJhZyB0byBkcmFnLWhhbmRsZXIgYW5kIHpvb20gZXZlbnRzIHpvb20taGFuZGxlci5cclxuICpcclxuICogRHJhZyBhbmQgem9vbSBldmVudHMgYXJlIGVtaXRlZCBpbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXHJcbiAqIGFuZCBvbmx5IHdoZW4gb25lIG9mIHBvaW50ZXJzIHdhcyBhY3R1YWxseSBjaGFuZ2VkLlxyXG4gKi9cclxuY2xhc3MgR2VzdHVyZXMge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcblxyXG4gICAgLyoqIEB0eXBlIHsneCcgfCAneScgfCBudWxsfSAqL1xyXG4gICAgdGhpcy5kcmFnQXhpcyA9IG51bGw7XHJcblxyXG4gICAgLy8gcG9pbnQgb2JqZWN0cyBhcmUgZGVmaW5lZCBvbmNlIGFuZCByZXVzZWRcclxuICAgIC8vIFBob3RvU3dpcGUga2VlcHMgdHJhY2sgb25seSBvZiB0d28gcG9pbnRlcnMsIG90aGVycyBhcmUgaWdub3JlZFxyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMucDEgPSB7IHg6IDAsIHk6IDAgfTsgLy8gdGhlIGZpcnN0IHByZXNzZWQgcG9pbnRlclxyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMucDIgPSB7IHg6IDAsIHk6IDAgfTsgLy8gdGhlIHNlY29uZCBwcmVzc2VkIHBvaW50ZXJcclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9ICovXHJcbiAgICB0aGlzLnByZXZQMSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH0gKi9cclxuICAgIHRoaXMucHJldlAyID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5zdGFydFAxID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy5zdGFydFAyID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAvKiogQHR5cGUge1BvaW50fSAqL1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIC8qKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9sYXN0U3RhcnRQMSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgLyoqIEB0eXBlIHtQb2ludH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2ludGVydmFsUDEgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fbnVtQWN0aXZlUG9pbnRzID0gMDtcclxuICAgIC8qKiBAdHlwZSB7UG9pbnRbXX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX29uZ29pbmdQb2ludGVycyA9IFtdO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl90b3VjaEV2ZW50RW5hYmxlZCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fcG9pbnRlckV2ZW50RW5hYmxlZCA9ICEhKHdpbmRvdy5Qb2ludGVyRXZlbnQpO1xyXG4gICAgdGhpcy5zdXBwb3J0c1RvdWNoID0gdGhpcy5fdG91Y2hFdmVudEVuYWJsZWRcclxuICAgICAgfHwgKHRoaXMuX3BvaW50ZXJFdmVudEVuYWJsZWQgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSk7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cyA9IDA7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX2ludGVydmFsVGltZSA9IDA7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3ZlbG9jaXR5Q2FsY3VsYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc011bHRpdG91Y2ggPSBmYWxzZTtcclxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1pvb21pbmcgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyIHwgbnVsbH0gKi9cclxuICAgIHRoaXMucmFmID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7Tm9kZUpTLlRpbWVvdXQgfCBudWxsfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fdGFwVGltZXIgPSBudWxsO1xyXG5cclxuICAgIGlmICghdGhpcy5zdXBwb3J0c1RvdWNoKSB7XHJcbiAgICAgIC8vIGRpc2FibGUgcGFuIHRvIG5leHQgc2xpZGUgZm9yIG5vbi10b3VjaCBkZXZpY2VzXHJcbiAgICAgIHBzd3Aub3B0aW9ucy5hbGxvd1BhblRvTmV4dCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHJhZyA9IG5ldyBEcmFnSGFuZGxlcih0aGlzKTtcclxuICAgIHRoaXMuem9vbUxldmVscyA9IG5ldyBab29tSGFuZGxlcih0aGlzKTtcclxuICAgIHRoaXMudGFwSGFuZGxlciA9IG5ldyBUYXBIYW5kbGVyKHRoaXMpO1xyXG5cclxuICAgIHBzd3Aub24oJ2JpbmRFdmVudHMnLCAoKSA9PiB7XHJcbiAgICAgIHBzd3AuZXZlbnRzLmFkZChcclxuICAgICAgICBwc3dwLnNjcm9sbFdyYXAsXHJcbiAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqLyh0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50RW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoJ3BvaW50ZXInLCAnZG93bicsICd1cCcsICdjYW5jZWwnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl90b3VjaEV2ZW50RW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoJ3RvdWNoJywgJ3N0YXJ0JywgJ2VuZCcsICdjYW5jZWwnKTtcclxuXHJcbiAgICAgICAgLy8gSW4gcHJldmlvdXMgdmVyc2lvbnMgd2UgYWxzbyBib3VuZCBtb3VzZSBldmVudCBoZXJlLFxyXG4gICAgICAgIC8vIGluIGNhc2UgZGV2aWNlIHN1cHBvcnRzIGJvdGggdG91Y2ggYW5kIG1vdXNlIGV2ZW50cyxcclxuICAgICAgICAvLyBidXQgbmV3ZXIgdmVyc2lvbnMgb2YgYnJvd3NlcnMgbm93IHN1cHBvcnQgUG9pbnRlckV2ZW50LlxyXG5cclxuICAgICAgICAvLyBvbiBpT1MxMCBpZiB5b3UgYmluZCB0b3VjaG1vdmUvZW5kIGFmdGVyIHRvdWNoc3RhcnQsXHJcbiAgICAgICAgLy8gYW5kIHlvdSBkb24ndCBwcmV2ZW50RGVmYXVsdCB0b3VjaHN0YXJ0ICh3aGljaCBQaG90b1N3aXBlIGRvZXMpLFxyXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0IHdpbGwgaGF2ZSBubyBlZmZlY3Qgb24gdG91Y2htb3ZlIGFuZCB0b3VjaGVuZC5cclxuICAgICAgICAvLyBVbmxlc3MgeW91IGJpbmQgaXQgcHJldmlvdXNseS5cclxuICAgICAgICBpZiAocHN3cC5zY3JvbGxXcmFwKSB7XHJcbiAgICAgICAgICBwc3dwLnNjcm9sbFdyYXAub250b3VjaG1vdmUgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgICBwc3dwLnNjcm9sbFdyYXAub250b3VjaGVuZCA9ICgpID0+IHsgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYmluZEV2ZW50cygnbW91c2UnLCAnZG93bicsICd1cCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHsnbW91c2UnIHwgJ3RvdWNoJyB8ICdwb2ludGVyJ30gcHJlZlxyXG4gICAqIEBwYXJhbSB7J2Rvd24nIHwgJ3N0YXJ0J30gZG93blxyXG4gICAqIEBwYXJhbSB7J3VwJyB8ICdlbmQnfSB1cFxyXG4gICAqIEBwYXJhbSB7J2NhbmNlbCd9IFtjYW5jZWxdXHJcbiAgICovXHJcbiAgX2JpbmRFdmVudHMocHJlZiwgZG93biwgdXAsIGNhbmNlbCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgeyBldmVudHMgfSA9IHBzd3A7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsRXZlbnQgPSBjYW5jZWwgPyBwcmVmICsgY2FuY2VsIDogJyc7XHJcblxyXG4gICAgZXZlbnRzLmFkZChcclxuICAgICAgcHN3cC5zY3JvbGxXcmFwLFxyXG4gICAgICBwcmVmICsgZG93bixcclxuICAgICAgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpXHJcbiAgICApO1xyXG4gICAgZXZlbnRzLmFkZCh3aW5kb3csIHByZWYgKyAnbW92ZScsIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovKHRoaXMub25Qb2ludGVyTW92ZS5iaW5kKHRoaXMpKSk7XHJcbiAgICBldmVudHMuYWRkKHdpbmRvdywgcHJlZiArIHVwLCAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqLyh0aGlzLm9uUG9pbnRlclVwLmJpbmQodGhpcykpKTtcclxuICAgIGlmIChjYW5jZWxFdmVudCkge1xyXG4gICAgICBldmVudHMuYWRkKFxyXG4gICAgICAgIHBzd3Auc2Nyb2xsV3JhcCxcclxuICAgICAgICBjYW5jZWxFdmVudCxcclxuICAgICAgICAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqLyh0aGlzLm9uUG9pbnRlclVwLmJpbmQodGhpcykpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZVxyXG4gICAqL1xyXG4gIG9uUG9pbnRlckRvd24oZSkge1xyXG4gICAgLy8gV2UgZG8gbm90IGNhbGwgcHJldmVudERlZmF1bHQgZm9yIHRvdWNoIGV2ZW50c1xyXG4gICAgLy8gdG8gYWxsb3cgYnJvd3NlciB0byBzaG93IG5hdGl2ZSBkaWFsb2cgb24gbG9uZ3ByZXNzXHJcbiAgICAvLyAodGhlIG9uZSB0aGF0IGFsbG93cyB0byBzYXZlIGltYWdlIG9yIG9wZW4gaXQgaW4gbmV3IHRhYikuXHJcbiAgICAvL1xyXG4gICAgLy8gRGVza3RvcCBTYWZhcmkgYWxsb3dzIHRvIGRyYWcgaW1hZ2VzIHdoZW4gcHJldmVudERlZmF1bHQgaXNuJ3QgY2FsbGVkIG9uIG1vdXNlZG93bixcclxuICAgIC8vIGV2ZW4gdGhvdWdoIHByZXZlbnREZWZhdWx0IElTIGNhbGxlZCBvbiBtb3VzZW1vdmUuIFRoYXQncyB3aHkgd2UgcHJldmVudERlZmF1bHQgbW91c2Vkb3duLlxyXG4gICAgY29uc3QgaXNNb3VzZVBvaW50ZXIgPSBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUucG9pbnRlclR5cGUgPT09ICdtb3VzZSc7XHJcblxyXG4gICAgLy8gQWxsb3cgZHJhZ2dpbmcgb25seSB2aWEgbGVmdCBtb3VzZSBidXR0b24uXHJcbiAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2V2ZW50c19wcm9wZXJ0aWVzLmh0bWxcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ldmVudC5idXR0b25cclxuICAgIGlmIChpc01vdXNlUG9pbnRlciAmJiBlLmJ1dHRvbiA+IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuXHJcbiAgICAvLyBpZiBQaG90b1N3aXBlIGlzIG9wZW5pbmcgb3IgY2xvc2luZ1xyXG4gICAgaWYgKCFwc3dwLm9wZW5lci5pc09wZW4pIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBzd3AuZGlzcGF0Y2goJ3BvaW50ZXJEb3duJywgeyBvcmlnaW5hbEV2ZW50OiBlIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc01vdXNlUG9pbnRlcikge1xyXG4gICAgICBwc3dwLm1vdXNlRGV0ZWN0ZWQoKTtcclxuXHJcbiAgICAgIC8vIHByZXZlbnREZWZhdWx0IG1vdXNlIGV2ZW50IHRvIHByZXZlbnRcclxuICAgICAgLy8gYnJvd3NlciBpbWFnZSBkcmFnIGZlYXR1cmVcclxuICAgICAgdGhpcy5fcHJldmVudFBvaW50ZXJFdmVudEJlaGF2aW91cihlKTtcclxuICAgIH1cclxuXHJcbiAgICBwc3dwLmFuaW1hdGlvbnMuc3RvcEFsbCgpO1xyXG5cclxuICAgIHRoaXMuX3VwZGF0ZVBvaW50cyhlLCAnZG93bicpO1xyXG5cclxuICAgIGlmICh0aGlzLl9udW1BY3RpdmVQb2ludHMgPT09IDEpIHtcclxuICAgICAgdGhpcy5kcmFnQXhpcyA9IG51bGw7XHJcbiAgICAgIC8vIHdlIG5lZWQgdG8gc3RvcmUgaW5pdGlhbCBwb2ludCB0byBkZXRlcm1pbmUgdGhlIG1haW4gYXhpcyxcclxuICAgICAgLy8gZHJhZyBpcyBhY3RpdmF0ZWQgb25seSBhZnRlciB0aGUgYXhpcyBpcyBkZXRlcm1pbmVkXHJcbiAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuc3RhcnRQMSwgdGhpcy5wMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA+IDEpIHtcclxuICAgICAgLy8gVGFwIG9yIGRvdWJsZSB0YXAgc2hvdWxkIG5vdCB0cmlnZ2VyIGlmIG1vcmUgdGhhbiBvbmUgcG9pbnRlclxyXG4gICAgICB0aGlzLl9jbGVhclRhcFRpbWVyKCk7XHJcbiAgICAgIHRoaXMuaXNNdWx0aXRvdWNoID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNNdWx0aXRvdWNoID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZVxyXG4gICAqL1xyXG4gIG9uUG9pbnRlck1vdmUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBhbHdheXMgcHJldmVudERlZmF1bHQgbW92ZSBldmVudFxyXG5cclxuICAgIGlmICghdGhpcy5fbnVtQWN0aXZlUG9pbnRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl91cGRhdGVQb2ludHMoZSwgJ21vdmUnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wc3dwLmRpc3BhdGNoKCdwb2ludGVyTW92ZScsIHsgb3JpZ2luYWxFdmVudDogZSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID09PSAxICYmICF0aGlzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgaWYgKCF0aGlzLmRyYWdBeGlzKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlRHJhZ0RpcmVjdGlvbigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEcmFnIGF4aXMgd2FzIGRldGVjdGVkLCBlbWl0IGRyYWcuc3RhcnRcclxuICAgICAgaWYgKHRoaXMuZHJhZ0F4aXMgJiYgIXRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzWm9vbWluZykge1xyXG4gICAgICAgICAgdGhpcy5pc1pvb21pbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuem9vbUxldmVscy5lbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUYXBUaW1lcigpOyAvLyBUYXAgY2FuIG5vdCB0cmlnZ2VyIGFmdGVyIGRyYWdcclxuXHJcbiAgICAgICAgLy8gQWRqdXN0IHN0YXJ0aW5nIHBvaW50XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhcnRQb2ludHMoKTtcclxuICAgICAgICB0aGlzLl9pbnRlcnZhbFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIC8vdGhpcy5fc3RhcnRUaW1lID0gdGhpcy5faW50ZXJ2YWxUaW1lO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5Q2FsY3VsYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuX2ludGVydmFsUDEsIHRoaXMucDEpO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICB0aGlzLmRyYWcuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmFmU3RvcExvb3AoKTtcclxuICAgICAgICB0aGlzLl9yYWZSZW5kZXJMb29wKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID4gMSAmJiAhdGhpcy5pc1pvb21pbmcpIHtcclxuICAgICAgdGhpcy5fZmluaXNoRHJhZygpO1xyXG5cclxuICAgICAgdGhpcy5pc1pvb21pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgLy8gQWRqdXN0IHN0YXJ0aW5nIHBvaW50c1xyXG4gICAgICB0aGlzLl91cGRhdGVTdGFydFBvaW50cygpO1xyXG5cclxuICAgICAgdGhpcy56b29tTGV2ZWxzLnN0YXJ0KCk7XHJcblxyXG4gICAgICB0aGlzLl9yYWZTdG9wTG9vcCgpO1xyXG4gICAgICB0aGlzLl9yYWZSZW5kZXJMb29wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9maW5pc2hEcmFnKCkge1xyXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIFRyeSB0byBjYWxjdWxhdGUgdmVsb2NpdHksXHJcbiAgICAgIC8vIGlmIGl0IHdhc24ndCBjYWxjdWxhdGVkIHlldCBpbiBkcmFnLmNoYW5nZVxyXG4gICAgICBpZiAoIXRoaXMuX3ZlbG9jaXR5Q2FsY3VsYXRlZCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZlbG9jaXR5KHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRyYWcuZW5kKCk7XHJcbiAgICAgIHRoaXMuZHJhZ0F4aXMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGVcclxuICAgKi9cclxuICBvblBvaW50ZXJVcChlKSB7XHJcbiAgICBpZiAoIXRoaXMuX251bUFjdGl2ZVBvaW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlUG9pbnRzKGUsICd1cCcpO1xyXG5cclxuICAgIGlmICh0aGlzLnBzd3AuZGlzcGF0Y2goJ3BvaW50ZXJVcCcsIHsgb3JpZ2luYWxFdmVudDogZSB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX3JhZlN0b3BMb29wKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZmluaXNoRHJhZygpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzWm9vbWluZyAmJiAhdGhpcy5pc011bHRpdG91Y2gpIHtcclxuICAgICAgICAvL3RoaXMuem9vbUxldmVscy5jb3JyZWN0Wm9vbVBhbigpO1xyXG4gICAgICAgIHRoaXMuX2ZpbmlzaFRhcChlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9udW1BY3RpdmVQb2ludHMgPCAyICYmIHRoaXMuaXNab29taW5nKSB7XHJcbiAgICAgIHRoaXMuaXNab29taW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuem9vbUxldmVscy5lbmQoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9udW1BY3RpdmVQb2ludHMgPT09IDEpIHtcclxuICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIDEgcG9pbnQgbGVmdCwgd2UgbmVlZCB0byByZWluaXRpYXRlIGRyYWdcclxuICAgICAgICB0aGlzLmRyYWdBeGlzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl91cGRhdGVTdGFydFBvaW50cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9yYWZSZW5kZXJMb29wKCkge1xyXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZyB8fCB0aGlzLmlzWm9vbWluZykge1xyXG4gICAgICB0aGlzLl91cGRhdGVWZWxvY2l0eSgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHBvaW50ZXIgbW92ZWQgc2luY2UgdGhlIGxhc3QgdXBkYXRlXHJcbiAgICAgICAgaWYgKCFwb2ludHNFcXVhbCh0aGlzLnAxLCB0aGlzLnByZXZQMSkpIHtcclxuICAgICAgICAgIHRoaXMuZHJhZy5jaGFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSAvKiBpZiAodGhpcy5pc1pvb21pbmcpICovIHtcclxuICAgICAgICBpZiAoIXBvaW50c0VxdWFsKHRoaXMucDEsIHRoaXMucHJldlAxKVxyXG4gICAgICAgICAgfHwgIXBvaW50c0VxdWFsKHRoaXMucDIsIHRoaXMucHJldlAyKSkge1xyXG4gICAgICAgICAgdGhpcy56b29tTGV2ZWxzLmNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlUHJldlBvaW50cygpO1xyXG4gICAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yYWZSZW5kZXJMb29wLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHZlbG9jaXR5IGF0IDUwbXMgaW50ZXJ2YWxcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXHJcbiAgICovXHJcbiAgX3VwZGF0ZVZlbG9jaXR5KGZvcmNlKSB7XHJcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGltZSAtIHRoaXMuX2ludGVydmFsVGltZTtcclxuXHJcbiAgICBpZiAoZHVyYXRpb24gPCA1MCAmJiAhZm9yY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLl9nZXRWZWxvY2l0eSgneCcsIGR1cmF0aW9uKTtcclxuICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMuX2dldFZlbG9jaXR5KCd5JywgZHVyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuX2ludGVydmFsVGltZSA9IHRpbWU7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9pbnRlcnZhbFAxLCB0aGlzLnAxKTtcclxuICAgIHRoaXMuX3ZlbG9jaXR5Q2FsY3VsYXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlXHJcbiAgICovXHJcbiAgX2ZpbmlzaFRhcChlKSB7XHJcbiAgICBjb25zdCB7IG1haW5TY3JvbGwgfSA9IHRoaXMucHN3cDtcclxuXHJcbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0YXAgZXZlbnRzIGlmIG1haW4gc2Nyb2xsIGlzIHNoaWZ0ZWRcclxuICAgIGlmIChtYWluU2Nyb2xsLmlzU2hpZnRlZCgpKSB7XHJcbiAgICAgIC8vIHJlc3RvcmUgbWFpbiBzY3JvbGwgcG9zaXRpb25cclxuICAgICAgLy8gKHVzdWFsbHkgaGFwcGVucyBpZiBzdG9wcGVkIGluIHRoZSBtaWRkbGUgb2YgYW5pbWF0aW9uKVxyXG4gICAgICBtYWluU2Nyb2xsLm1vdmVJbmRleEJ5KDAsIHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGFwIGZvciB0b3VjaGNhbmNlbCBvciBwb2ludGVyY2FuY2VsXHJcbiAgICBpZiAoZS50eXBlLmluZGV4T2YoJ2NhbmNlbCcpID4gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJpZ2dlciBjbGljayBpbnN0ZWFkIG9mIHRhcCBmb3IgbW91c2UgZXZlbnRzXHJcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2V1cCcgfHwgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xyXG4gICAgICB0aGlzLnRhcEhhbmRsZXIuY2xpY2sodGhpcy5zdGFydFAxLCBlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc2FibGUgZGVsYXkgaWYgdGhlcmUgaXMgbm8gZG91YmxlVGFwQWN0aW9uXHJcbiAgICBjb25zdCB0YXBEZWxheSA9IHRoaXMucHN3cC5vcHRpb25zLmRvdWJsZVRhcEFjdGlvbiA/IERPVUJMRV9UQVBfREVMQVkgOiAwO1xyXG5cclxuICAgIC8vIElmIHRhcFRpbWVyIGlzIGRlZmluZWQgLSB3ZSB0YXBwZWQgcmVjZW50bHksXHJcbiAgICAvLyBjaGVjayBpZiB0aGUgY3VycmVudCB0YXAgaXMgY2xvc2UgdG8gdGhlIHByZXZpb3VzIG9uZSxcclxuICAgIC8vIGlmIHllcyAtIHRyaWdnZXIgZG91YmxlIHRhcFxyXG4gICAgaWYgKHRoaXMuX3RhcFRpbWVyKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyVGFwVGltZXIoKTtcclxuICAgICAgLy8gQ2hlY2sgaWYgdHdvIHRhcHMgd2VyZSBtb3JlIG9yIGxlc3Mgb24gdGhlIHNhbWUgcGxhY2VcclxuICAgICAgaWYgKGdldERpc3RhbmNlQmV0d2Vlbih0aGlzLl9sYXN0U3RhcnRQMSwgdGhpcy5zdGFydFAxKSA8IE1JTl9UQVBfRElTVEFOQ0UpIHtcclxuICAgICAgICB0aGlzLnRhcEhhbmRsZXIuZG91YmxlVGFwKHRoaXMuc3RhcnRQMSwgZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuX2xhc3RTdGFydFAxLCB0aGlzLnN0YXJ0UDEpO1xyXG4gICAgICB0aGlzLl90YXBUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFwSGFuZGxlci50YXAodGhpcy5zdGFydFAxLCBlKTtcclxuICAgICAgICB0aGlzLl9jbGVhclRhcFRpbWVyKCk7XHJcbiAgICAgIH0sIHRhcERlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NsZWFyVGFwVGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy5fdGFwVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RhcFRpbWVyKTtcclxuICAgICAgdGhpcy5fdGFwVGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHZlbG9jaXR5IGZvciBheGlzXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7J3gnIHwgJ3knfSBheGlzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBfZ2V0VmVsb2NpdHkoYXhpcywgZHVyYXRpb24pIHtcclxuICAgIC8vIGRpc3BsYWNlbWVudCBpcyBsaWtlIGRpc3RhbmNlLCBidXQgY2FuIGJlIG5lZ2F0aXZlLlxyXG4gICAgY29uc3QgZGlzcGxhY2VtZW50ID0gdGhpcy5wMVtheGlzXSAtIHRoaXMuX2ludGVydmFsUDFbYXhpc107XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKGRpc3BsYWNlbWVudCkgPiAxICYmIGR1cmF0aW9uID4gNSkge1xyXG4gICAgICByZXR1cm4gZGlzcGxhY2VtZW50IC8gZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9yYWZTdG9wTG9vcCgpIHtcclxuICAgIGlmICh0aGlzLnJhZikge1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZik7XHJcbiAgICAgIHRoaXMucmFmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGVcclxuICAgKi9cclxuICBfcHJldmVudFBvaW50ZXJFdmVudEJlaGF2aW91cihlKSB7XHJcbiAgICAvLyBEbXl0cm8gU2VtZW5vdiBmaW5kIGEgd2F5IHRvIGRpc2FibGUgZS5wcmV2ZW50RGVmYXVsdCBvbiBzb21lIGVsZW1lbnRzXHJcbiAgICAvLyAgICAgIHZpYSBldmVudCBvciBzb21lIGNsYXNzIG9yIHNvbWV0aGluZ1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIGFuZCBub3JtYWxpemVzIHBvaW50cyBmcm9tIHRoZSB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlciBldmVudC5cclxuICAgKiBVcGRhdGVzIHAxIGFuZCBwMi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnQgfCBUb3VjaEV2ZW50fSBlXHJcbiAgICogQHBhcmFtIHsndXAnIHwgJ2Rvd24nIHwgJ21vdmUnfSBwb2ludGVyVHlwZSBOb3JtYWxpemVkIHBvaW50ZXIgdHlwZVxyXG4gICAqL1xyXG4gIF91cGRhdGVQb2ludHMoZSwgcG9pbnRlclR5cGUpIHtcclxuICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnRFbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IHBvaW50ZXJFdmVudCA9IC8qKiBAdHlwZSB7UG9pbnRlckV2ZW50fSAqLyAoZSk7XHJcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjdXJyZW50IHBvaW50ZXIgaW4gb25nb2luZyBwb2ludGVycyBieSBpdHMgSURcclxuICAgICAgY29uc3QgcG9pbnRlckluZGV4ID0gdGhpcy5fb25nb2luZ1BvaW50ZXJzLmZpbmRJbmRleCgob25nb2luZ1BvaW50ZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gb25nb2luZ1BvaW50ZXIuaWQgPT09IHBvaW50ZXJFdmVudC5wb2ludGVySWQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHBvaW50ZXJUeXBlID09PSAndXAnICYmIHBvaW50ZXJJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgLy8gcmVsZWFzZSB0aGUgcG9pbnRlciAtIHJlbW92ZSBpdCBmcm9tIG9uZ29pbmdcclxuICAgICAgICB0aGlzLl9vbmdvaW5nUG9pbnRlcnMuc3BsaWNlKHBvaW50ZXJJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9pbnRlclR5cGUgPT09ICdkb3duJyAmJiBwb2ludGVySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgLy8gYWRkIG5ldyBwb2ludGVyXHJcbiAgICAgICAgdGhpcy5fb25nb2luZ1BvaW50ZXJzLnB1c2godGhpcy5fY29udmVydEV2ZW50UG9zVG9Qb2ludChwb2ludGVyRXZlbnQsIHsgeDogMCwgeTogMCB9KSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9pbnRlckluZGV4ID4gLTEpIHtcclxuICAgICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcG9pbnRlclxyXG4gICAgICAgIHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQocG9pbnRlckV2ZW50LCB0aGlzLl9vbmdvaW5nUG9pbnRlcnNbcG9pbnRlckluZGV4XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cyA9IHRoaXMuX29uZ29pbmdQb2ludGVycy5sZW5ndGg7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgcG9pbnRzIHRoYXQgUGhvdG9Td2lwZSB1c2VzXHJcbiAgICAgIC8vIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBhbmQgc2NhbGVcclxuICAgICAgaWYgKHRoaXMuX251bUFjdGl2ZVBvaW50cyA+IDApIHtcclxuICAgICAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnAxLCB0aGlzLl9vbmdvaW5nUG9pbnRlcnNbMF0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fbnVtQWN0aXZlUG9pbnRzID4gMSkge1xyXG4gICAgICAgIGVxdWFsaXplUG9pbnRzKHRoaXMucDIsIHRoaXMuX29uZ29pbmdQb2ludGVyc1sxXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRvdWNoRXZlbnQgPSAvKiogQHR5cGUge1RvdWNoRXZlbnR9ICovIChlKTtcclxuXHJcbiAgICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cyA9IDA7XHJcbiAgICAgIGlmICh0b3VjaEV2ZW50LnR5cGUuaW5kZXhPZigndG91Y2gnKSA+IC0xKSB7XHJcbiAgICAgICAgLy8gVG91Y2ggRXZlbnRcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVG91Y2hFdmVudFxyXG4gICAgICAgIGlmICh0b3VjaEV2ZW50LnRvdWNoZXMgJiYgdG91Y2hFdmVudC50b3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQodG91Y2hFdmVudC50b3VjaGVzWzBdLCB0aGlzLnAxKTtcclxuICAgICAgICAgIHRoaXMuX251bUFjdGl2ZVBvaW50cysrO1xyXG4gICAgICAgICAgaWYgKHRvdWNoRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnZlcnRFdmVudFBvc1RvUG9pbnQodG91Y2hFdmVudC50b3VjaGVzWzFdLCB0aGlzLnAyKTtcclxuICAgICAgICAgICAgdGhpcy5fbnVtQWN0aXZlUG9pbnRzKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE1vdXNlIEV2ZW50XHJcbiAgICAgICAgdGhpcy5fY29udmVydEV2ZW50UG9zVG9Qb2ludCgvKiogQHR5cGUge1BvaW50ZXJFdmVudH0gKi8oZSksIHRoaXMucDEpO1xyXG4gICAgICAgIGlmIChwb2ludGVyVHlwZSA9PT0gJ3VwJykge1xyXG4gICAgICAgICAgLy8gY2xlYXIgYWxsIHBvaW50cyBvbiBtb3VzZXVwXHJcbiAgICAgICAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9udW1BY3RpdmVQb2ludHMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiB1cGRhdGUgcG9pbnRzIHRoYXQgd2VyZSB1c2VkIGR1cmluZyBwcmV2aW91cyByQUYgdGlja1xyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZVByZXZQb2ludHMoKSB7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnByZXZQMSwgdGhpcy5wMSk7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLnByZXZQMiwgdGhpcy5wMik7XHJcbiAgfVxyXG5cclxuICAvKiogdXBkYXRlIHBvaW50cyBhdCB0aGUgc3RhcnQgb2YgZ2VzdHVyZVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZVN0YXJ0UG9pbnRzKCkge1xyXG4gICAgZXF1YWxpemVQb2ludHModGhpcy5zdGFydFAxLCB0aGlzLnAxKTtcclxuICAgIGVxdWFsaXplUG9pbnRzKHRoaXMuc3RhcnRQMiwgdGhpcy5wMik7XHJcbiAgICB0aGlzLl91cGRhdGVQcmV2UG9pbnRzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfY2FsY3VsYXRlRHJhZ0RpcmVjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnBzd3AubWFpblNjcm9sbC5pc1NoaWZ0ZWQoKSkge1xyXG4gICAgICAvLyBpZiBtYWluIHNjcm9sbCBwb3NpdGlvbiBpcyBzaGlmdGVkIOKAkyBkaXJlY3Rpb24gaXMgYWx3YXlzIGhvcml6b250YWxcclxuICAgICAgdGhpcy5kcmFnQXhpcyA9ICd4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNhbGN1bGF0ZSBkZWx0YSBvZiB0aGUgbGFzdCB0b3VjaG1vdmUgdGlja1xyXG4gICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnModGhpcy5wMS54IC0gdGhpcy5zdGFydFAxLngpIC0gTWF0aC5hYnModGhpcy5wMS55IC0gdGhpcy5zdGFydFAxLnkpO1xyXG5cclxuICAgICAgaWYgKGRpZmYgIT09IDApIHtcclxuICAgICAgICAvLyBjaGVjayBpZiBwb2ludGVyIHdhcyBzaGlmdGVkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgY29uc3QgYXhpc1RvQ2hlY2sgPSBkaWZmID4gMCA/ICd4JyA6ICd5JztcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMucDFbYXhpc1RvQ2hlY2tdIC0gdGhpcy5zdGFydFAxW2F4aXNUb0NoZWNrXSkgPj0gQVhJU19TV0lQRV9IWVNURVJJU0lTKSB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdBeGlzID0gYXhpc1RvQ2hlY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyB0b3VjaCwgcG9pbnRlciBvciBtb3VzZSBldmVudFxyXG4gICAqIHRvIFBob3RvU3dpcGUgcG9pbnQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7VG91Y2ggfCBQb2ludGVyRXZlbnR9IGVcclxuICAgKiBAcGFyYW0ge1BvaW50fSBwXHJcbiAgICogQHJldHVybnMge1BvaW50fVxyXG4gICAqL1xyXG4gIF9jb252ZXJ0RXZlbnRQb3NUb1BvaW50KGUsIHApIHtcclxuICAgIHAueCA9IGUucGFnZVggLSB0aGlzLnBzd3Aub2Zmc2V0Lng7XHJcbiAgICBwLnkgPSBlLnBhZ2VZIC0gdGhpcy5wc3dwLm9mZnNldC55O1xyXG5cclxuICAgIGlmICgncG9pbnRlcklkJyBpbiBlKSB7XHJcbiAgICAgIHAuaWQgPSBlLnBvaW50ZXJJZDtcclxuICAgIH0gZWxzZSBpZiAoZS5pZGVudGlmaWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcC5pZCA9IGUuaWRlbnRpZmllcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGVcclxuICAgKi9cclxuICBfb25DbGljayhlKSB7XHJcbiAgICAvLyBEbyBub3QgYWxsb3cgY2xpY2sgZXZlbnQgdG8gcGFzcyB0aHJvdWdoIGFmdGVyIGRyYWdcclxuICAgIGlmICh0aGlzLnBzd3AubWFpblNjcm9sbC5pc1NoaWZ0ZWQoKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS9zbGlkZS5qcycpLmRlZmF1bHR9IFNsaWRlICovXHJcblxyXG4vKiogQHR5cGVkZWYge3sgZWw6IEhUTUxEaXZFbGVtZW50OyBzbGlkZT86IFNsaWRlIH19IEl0ZW1Ib2xkZXIgKi9cclxuXHJcbmNvbnN0IE1BSU5fU0NST0xMX0VORF9GUklDVElPTiA9IDAuMzU7XHJcblxyXG5cclxuLy8gY29uc3QgTUlOX1NXSVBFX1RSQU5TSVRJT05fRFVSQVRJT04gPSAyNTA7XHJcbi8vIGNvbnN0IE1BWF9TV0lQRV9UUkFCU0lUSU9OX0RVUkFUSU9OID0gNTAwO1xyXG4vLyBjb25zdCBERUZBVUxUX1NXSVBFX1RSQU5TSVRJT05fRFVSQVRJT04gPSAzMzM7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBtb3ZlbWVudCBvZiB0aGUgbWFpbiBzY3JvbGxpbmcgY29udGFpbmVyXHJcbiAqIChmb3IgZXhhbXBsZSwgaXQgcmVwb3NpdGlvbnMgd2hlbiB1c2VyIHN3aXBlcyBsZWZ0IG9yIHJpZ2h0KS5cclxuICpcclxuICogQWxzbyBzdG9yZXMgaXRzIHN0YXRlLlxyXG4gKi9cclxuY2xhc3MgTWFpblNjcm9sbCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnNsaWRlV2lkdGggPSAwO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9jdXJyUG9zaXRpb25JbmRleCA9IDA7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3ByZXZQb3NpdGlvbkluZGV4ID0gMDtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleCA9IC0xO1xyXG5cclxuICAgIC8qKiBAdHlwZSB7SXRlbUhvbGRlcltdfSAqL1xyXG4gICAgdGhpcy5pdGVtSG9sZGVycyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUG9zaXRpb24gdGhlIHNjcm9sbGVyIGFuZCBzbGlkZSBjb250YWluZXJzXHJcbiAgICogYWNjb3JkaW5nIHRvIHZpZXdwb3J0IHNpemUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNpemVTbGlkZXNdIFdoZXRoZXIgc2xpZGVzIGNvbnRlbnQgc2hvdWxkIHJlc2l6ZWRcclxuICAgKi9cclxuICByZXNpemUocmVzaXplU2xpZGVzKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBuZXdTbGlkZVdpZHRoID0gTWF0aC5yb3VuZChcclxuICAgICAgcHN3cC52aWV3cG9ydFNpemUueCArIHBzd3Audmlld3BvcnRTaXplLnggKiBwc3dwLm9wdGlvbnMuc3BhY2luZ1xyXG4gICAgKTtcclxuICAgIC8vIE1vYmlsZSBicm93c2VycyBtaWdodCB0cmlnZ2VyIGEgcmVzaXplIGV2ZW50IGR1cmluZyBhIGdlc3R1cmUuXHJcbiAgICAvLyAoZHVlIHRvIHRvb2xiYXIgYXBwZWFyaW5nIG9yIGhpZGluZykuXHJcbiAgICAvLyBBdm9pZCByZS1hZGp1c3RpbmcgbWFpbiBzY3JvbGwgcG9zaXRpb24gaWYgd2lkdGggd2Fzbid0IGNoYW5nZWRcclxuICAgIGNvbnN0IHNsaWRlV2lkdGhDaGFuZ2VkID0gKG5ld1NsaWRlV2lkdGggIT09IHRoaXMuc2xpZGVXaWR0aCk7XHJcblxyXG4gICAgaWYgKHNsaWRlV2lkdGhDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVXaWR0aCA9IG5ld1NsaWRlV2lkdGg7XHJcbiAgICAgIHRoaXMubW92ZVRvKHRoaXMuZ2V0Q3VyclNsaWRlWCgpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLml0ZW1Ib2xkZXJzLmZvckVhY2goKGl0ZW1Ib2xkZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChzbGlkZVdpZHRoQ2hhbmdlZCkge1xyXG4gICAgICAgIHNldFRyYW5zZm9ybShpdGVtSG9sZGVyLmVsLCAoaW5kZXggKyB0aGlzLl9jb250YWluZXJTaGlmdEluZGV4KVxyXG4gICAgICAgICAgKiB0aGlzLnNsaWRlV2lkdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVzaXplU2xpZGVzICYmIGl0ZW1Ib2xkZXIuc2xpZGUpIHtcclxuICAgICAgICBpdGVtSG9sZGVyLnNsaWRlLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IFggcG9zaXRpb24gb2YgdGhlIG1haW4gc2Nyb2xsZXIgdG8gemVyb1xyXG4gICAqL1xyXG4gIHJlc2V0UG9zaXRpb24oKSB7XHJcbiAgICAvLyBQb3NpdGlvbiBvbiB0aGUgbWFpbiBzY3JvbGxlciAob2Zmc2V0KVxyXG4gICAgLy8gaXQgaXMgaW5kZXBlbmRlbnQgZnJvbSBzbGlkZSBpbmRleFxyXG4gICAgdGhpcy5fY3VyclBvc2l0aW9uSW5kZXggPSAwO1xyXG4gICAgdGhpcy5fcHJldlBvc2l0aW9uSW5kZXggPSAwO1xyXG5cclxuICAgIC8vIFRoaXMgd2lsbCBmb3JjZSByZWNhbGN1bGF0aW9uIG9mIHNpemUgb24gbmV4dCByZXNpemUoKVxyXG4gICAgdGhpcy5zbGlkZVdpZHRoID0gMDtcclxuXHJcbiAgICAvLyBfY29udGFpbmVyU2hpZnRJbmRleCp2aWV3cG9ydFNpemUgd2lsbCBnaXZlIHlvdSBhbW91bnQgb2YgdHJhbnNmb3JtIG9mIHRoZSBjdXJyZW50IHNsaWRlXHJcbiAgICB0aGlzLl9jb250YWluZXJTaGlmdEluZGV4ID0gLTE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYW5kIGFwcGVuZCBhcnJheSBvZiB0aHJlZSBpdGVtc1xyXG4gICAqIHRoYXQgaG9sZCBkYXRhIGFib3V0IHNsaWRlcyBpbiBET01cclxuICAgKi9cclxuICBhcHBlbmRIb2xkZXJzKCkge1xyXG4gICAgdGhpcy5pdGVtSG9sZGVycyA9IFtdO1xyXG5cclxuICAgIC8vIGFwcGVuZCBvdXIgdGhyZWUgc2xpZGUgaG9sZGVycyAtXHJcbiAgICAvLyBwcmV2aW91cywgY3VycmVudCwgYW5kIG5leHRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudCgncHN3cF9faXRlbScsICdkaXYnLCB0aGlzLnBzd3AuY29udGFpbmVyKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1yb2xlZGVzY3JpcHRpb24nLCAnc2xpZGUnKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAvLyBoaWRlIG5lYXJieSBpdGVtIGhvbGRlcnMgdW50aWwgaW5pdGlhbCB6b29tIGFuaW1hdGlvbiBmaW5pc2hlcyAodG8gYXZvaWQgZXh0cmEgUGFpbnRzKVxyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gKGkgPT09IDEpID8gJ2Jsb2NrJyA6ICdub25lJztcclxuXHJcbiAgICAgIHRoaXMuaXRlbUhvbGRlcnMucHVzaCh7XHJcbiAgICAgICAgZWwsXHJcbiAgICAgICAgLy9pbmRleDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBtYWluIHNjcm9sbCBjYW4gYmUgaG9yaXpvbnRhbGx5IHN3aXBlZCB0byB0aGUgbmV4dCBvciBwcmV2aW91cyBzbGlkZS5cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBjYW5CZVN3aXBlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBzd3AuZ2V0TnVtSXRlbXMoKSA+IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIG1haW4gc2Nyb2xsIGJ5IFggYW1vdW50IG9mIHNsaWRlcy5cclxuICAgKiBGb3IgZXhhbXBsZTpcclxuICAgKiAgIGAtMWAgd2lsbCBtb3ZlIHRvIHRoZSBwcmV2aW91cyBzbGlkZSxcclxuICAgKiAgICBgMGAgd2lsbCByZXNldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHNsaWRlLFxyXG4gICAqICAgIGAzYCB3aWxsIG1vdmUgdGhyZWUgc2xpZGVzIGZvcndhcmRcclxuICAgKlxyXG4gICAqIElmIGxvb3Agb3B0aW9uIGlzIGVuYWJsZWQgLSBpbmRleCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgbG9vcGVkIHRvbyxcclxuICAgKiAoZm9yIGV4YW1wbGUgYC0xYCB3aWxsIG1vdmUgdG8gdGhlIGxhc3Qgc2xpZGUgb2YgdGhlIGdhbGxlcnkpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpZmZcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRlXVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHlYXVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIGluZGV4IHdhcyBjaGFuZ2VkIG9yIG5vdFxyXG4gICAqL1xyXG4gIG1vdmVJbmRleEJ5KGRpZmYsIGFuaW1hdGUsIHZlbG9jaXR5WCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgbGV0IG5ld0luZGV4ID0gcHN3cC5wb3RlbnRpYWxJbmRleCArIGRpZmY7XHJcbiAgICBjb25zdCBudW1TbGlkZXMgPSBwc3dwLmdldE51bUl0ZW1zKCk7XHJcblxyXG4gICAgaWYgKHBzd3AuY2FuTG9vcCgpKSB7XHJcbiAgICAgIG5ld0luZGV4ID0gcHN3cC5nZXRMb29wZWRJbmRleChuZXdJbmRleCk7XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGRpZmYgKyBudW1TbGlkZXMpICUgbnVtU2xpZGVzO1xyXG4gICAgICBpZiAoZGlzdGFuY2UgPD0gbnVtU2xpZGVzIC8gMikge1xyXG4gICAgICAgIC8vIGdvIGZvcndhcmRcclxuICAgICAgICBkaWZmID0gZGlzdGFuY2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZ28gYmFja3dhcmRzXHJcbiAgICAgICAgZGlmZiA9IGRpc3RhbmNlIC0gbnVtU2xpZGVzO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobmV3SW5kZXggPCAwKSB7XHJcbiAgICAgICAgbmV3SW5kZXggPSAwO1xyXG4gICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID49IG51bVNsaWRlcykge1xyXG4gICAgICAgIG5ld0luZGV4ID0gbnVtU2xpZGVzIC0gMTtcclxuICAgICAgfVxyXG4gICAgICBkaWZmID0gbmV3SW5kZXggLSBwc3dwLnBvdGVudGlhbEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHBzd3AucG90ZW50aWFsSW5kZXggPSBuZXdJbmRleDtcclxuICAgIHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4IC09IGRpZmY7XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0b3BNYWluU2Nyb2xsKCk7XHJcblxyXG4gICAgY29uc3QgZGVzdGluYXRpb25YID0gdGhpcy5nZXRDdXJyU2xpZGVYKCk7XHJcbiAgICBpZiAoIWFuaW1hdGUpIHtcclxuICAgICAgdGhpcy5tb3ZlVG8oZGVzdGluYXRpb25YKTtcclxuICAgICAgdGhpcy51cGRhdGVDdXJySXRlbSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHN3cC5hbmltYXRpb25zLnN0YXJ0U3ByaW5nKHtcclxuICAgICAgICBpc01haW5TY3JvbGw6IHRydWUsXHJcbiAgICAgICAgc3RhcnQ6IHRoaXMueCxcclxuICAgICAgICBlbmQ6IGRlc3RpbmF0aW9uWCxcclxuICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHlYIHx8IDAsXHJcbiAgICAgICAgbmF0dXJhbEZyZXF1ZW5jeTogMzAsXHJcbiAgICAgICAgZGFtcGluZ1JhdGlvOiAxLCAvLzAuNyxcclxuICAgICAgICBvblVwZGF0ZTogKHgpID0+IHtcclxuICAgICAgICAgIHRoaXMubW92ZVRvKHgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJySXRlbSgpO1xyXG4gICAgICAgICAgcHN3cC5hcHBlbmRIZWF2eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgY3VyckRpZmYgPSBwc3dwLnBvdGVudGlhbEluZGV4IC0gcHN3cC5jdXJySW5kZXg7XHJcbiAgICAgIGlmIChwc3dwLmNhbkxvb3AoKSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJEaXN0YW5jZSA9IChjdXJyRGlmZiArIG51bVNsaWRlcykgJSBudW1TbGlkZXM7XHJcbiAgICAgICAgaWYgKGN1cnJEaXN0YW5jZSA8PSBudW1TbGlkZXMgLyAyKSB7XHJcbiAgICAgICAgICAvLyBnbyBmb3J3YXJkXHJcbiAgICAgICAgICBjdXJyRGlmZiA9IGN1cnJEaXN0YW5jZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZ28gYmFja3dhcmRzXHJcbiAgICAgICAgICBjdXJyRGlmZiA9IGN1cnJEaXN0YW5jZSAtIG51bVNsaWRlcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvcmNlLWFwcGVuZCBuZXcgc2xpZGVzIGR1cmluZyB0cmFuc2l0aW9uXHJcbiAgICAgIC8vIGlmIGRpZmZlcmVuY2UgYmV0d2VlbiBzbGlkZXMgaXMgbW9yZSB0aGFuIDFcclxuICAgICAgaWYgKE1hdGguYWJzKGN1cnJEaWZmKSA+IDEpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJJdGVtKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQm9vbGVhbihkaWZmKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFggcG9zaXRpb24gb2YgdGhlIG1haW4gc2Nyb2xsIGZvciB0aGUgY3VycmVudCBzbGlkZVxyXG4gICAqIChpZ25vcmVzIHBvc2l0aW9uIGR1cmluZyBkcmFnZ2luZylcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldEN1cnJTbGlkZVgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zbGlkZVdpZHRoICogdGhpcy5fY3VyclBvc2l0aW9uSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHNjcm9sbCBwb3NpdGlvbiBpcyBzaGlmdGVkLlxyXG4gICAqIEZvciBleGFtcGxlLCBpdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZSBzY3JvbGwgaXMgYmVpbmcgZHJhZ2dlZCBvciBhbmltYXRlZC5cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1NoaWZ0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy54ICE9PSB0aGlzLmdldEN1cnJTbGlkZVgoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzbGlkZXMgWCBwb3NpdGlvbnMgYW5kIHNldCB0aGVpciBjb250ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlQ3Vyckl0ZW0oKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBwb3NpdGlvbkRpZmZlcmVuY2UgPSB0aGlzLl9wcmV2UG9zaXRpb25JbmRleCAtIHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4O1xyXG5cclxuICAgIGlmICghcG9zaXRpb25EaWZmZXJlbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9wcmV2UG9zaXRpb25JbmRleCA9IHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4O1xyXG5cclxuICAgIHBzd3AuY3VyckluZGV4ID0gcHN3cC5wb3RlbnRpYWxJbmRleDtcclxuXHJcbiAgICBsZXQgZGlmZkFicyA9IE1hdGguYWJzKHBvc2l0aW9uRGlmZmVyZW5jZSk7XHJcbiAgICAvKiogQHR5cGUge0l0ZW1Ib2xkZXIgfCB1bmRlZmluZWR9ICovXHJcbiAgICBsZXQgdGVtcEhvbGRlcjtcclxuXHJcbiAgICBpZiAoZGlmZkFicyA+PSAzKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lclNoaWZ0SW5kZXggKz0gcG9zaXRpb25EaWZmZXJlbmNlICsgKHBvc2l0aW9uRGlmZmVyZW5jZSA+IDAgPyAtMyA6IDMpO1xyXG4gICAgICBkaWZmQWJzID0gMztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZBYnM7IGkrKykge1xyXG4gICAgICBpZiAocG9zaXRpb25EaWZmZXJlbmNlID4gMCkge1xyXG4gICAgICAgIHRlbXBIb2xkZXIgPSB0aGlzLml0ZW1Ib2xkZXJzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKHRlbXBIb2xkZXIpIHtcclxuICAgICAgICAgIHRoaXMuaXRlbUhvbGRlcnNbMl0gPSB0ZW1wSG9sZGVyOyAvLyBtb3ZlIGZpcnN0IHRvIGxhc3RcclxuXHJcbiAgICAgICAgICB0aGlzLl9jb250YWluZXJTaGlmdEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgc2V0VHJhbnNmb3JtKHRlbXBIb2xkZXIuZWwsICh0aGlzLl9jb250YWluZXJTaGlmdEluZGV4ICsgMikgKiB0aGlzLnNsaWRlV2lkdGgpO1xyXG5cclxuICAgICAgICAgIHBzd3Auc2V0Q29udGVudCh0ZW1wSG9sZGVyLCAocHN3cC5jdXJySW5kZXggLSBkaWZmQWJzKSArIGkgKyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGVtcEhvbGRlciA9IHRoaXMuaXRlbUhvbGRlcnMucG9wKCk7XHJcbiAgICAgICAgaWYgKHRlbXBIb2xkZXIpIHtcclxuICAgICAgICAgIHRoaXMuaXRlbUhvbGRlcnMudW5zaGlmdCh0ZW1wSG9sZGVyKTsgLy8gbW92ZSBsYXN0IHRvIGZpcnN0XHJcblxyXG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyU2hpZnRJbmRleC0tO1xyXG5cclxuICAgICAgICAgIHNldFRyYW5zZm9ybSh0ZW1wSG9sZGVyLmVsLCB0aGlzLl9jb250YWluZXJTaGlmdEluZGV4ICogdGhpcy5zbGlkZVdpZHRoKTtcclxuXHJcbiAgICAgICAgICBwc3dwLnNldENvbnRlbnQodGVtcEhvbGRlciwgKHBzd3AuY3VyckluZGV4ICsgZGlmZkFicykgLSBpIC0gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgdHJhbnNmcm9tIGV2ZXJ5IDUwaXNoIG5hdmlnYXRpb25zIGluIG9uZSBkaXJlY3Rpb24uXHJcbiAgICAvL1xyXG4gICAgLy8gT3RoZXJ3aXNlIHRyYW5zZm9ybSB3aWxsIGtlZXAgZ3Jvd2luZyBpbmRlZmluaXRlbHksXHJcbiAgICAvLyB3aGljaCBtaWdodCBjYXVzZSBpc3N1ZXMgYXMgYnJvd3NlcnMgaGF2ZSBhIG1heGltdW0gdHJhbnNmb3JtIGxpbWl0LlxyXG4gICAgLy8gSSB3YXNuJ3QgYWJsZSB0byByZWFjaCBpdCwgYnV0IGp1c3QgdG8gYmUgc2FmZS5cclxuICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBjYXVzZSBub3RpY2FibGUgbGFnLlxyXG4gICAgaWYgKE1hdGguYWJzKHRoaXMuX2NvbnRhaW5lclNoaWZ0SW5kZXgpID4gNTAgJiYgIXRoaXMuaXNTaGlmdGVkKCkpIHtcclxuICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFuIHRyYW5zaXRpb24gbWlnaHQgYmUgcnVubmluZyAoYW5kIGNvbnNudGFudGx5IHVwZGF0aW5nIHBhbiBwb3NpdGlvbilcclxuICAgIHBzd3AuYW5pbWF0aW9ucy5zdG9wQWxsUGFuKCk7XHJcblxyXG4gICAgdGhpcy5pdGVtSG9sZGVycy5mb3JFYWNoKChpdGVtSG9sZGVyLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtSG9sZGVyLnNsaWRlKSB7XHJcbiAgICAgICAgLy8gU2xpZGUgaW4gdGhlIDJuZCBob2xkZXIgaXMgYWx3YXlzIGFjdGl2ZVxyXG4gICAgICAgIGl0ZW1Ib2xkZXIuc2xpZGUuc2V0SXNBY3RpdmUoaSA9PT0gMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBzd3AuY3VyclNsaWRlID0gdGhpcy5pdGVtSG9sZGVyc1sxXT8uc2xpZGU7XHJcbiAgICBwc3dwLmNvbnRlbnRMb2FkZXIudXBkYXRlTGF6eShwb3NpdGlvbkRpZmZlcmVuY2UpO1xyXG5cclxuICAgIGlmIChwc3dwLmN1cnJTbGlkZSkge1xyXG4gICAgICBwc3dwLmN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaCgnY2hhbmdlJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIHRoZSBYIHBvc2l0aW9uIG9mIHRoZSBtYWluIHNjcm9sbCBjb250YWluZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbZHJhZ2dpbmddXHJcbiAgICovXHJcbiAgbW92ZVRvKHgsIGRyYWdnaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMucHN3cC5jYW5Mb29wKCkgJiYgZHJhZ2dpbmcpIHtcclxuICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cclxuICAgICAgbGV0IG5ld1NsaWRlSW5kZXhPZmZzZXQgPSAoKHRoaXMuc2xpZGVXaWR0aCAqIHRoaXMuX2N1cnJQb3NpdGlvbkluZGV4KSAtIHgpIC8gdGhpcy5zbGlkZVdpZHRoO1xyXG4gICAgICBuZXdTbGlkZUluZGV4T2Zmc2V0ICs9IHRoaXMucHN3cC5jdXJySW5kZXg7XHJcbiAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5yb3VuZCh4IC0gdGhpcy54KTtcclxuXHJcbiAgICAgIGlmICgobmV3U2xpZGVJbmRleE9mZnNldCA8IDAgJiYgZGVsdGEgPiAwKVxyXG4gICAgICAgIHx8IChuZXdTbGlkZUluZGV4T2Zmc2V0ID49IHRoaXMucHN3cC5nZXROdW1JdGVtcygpIC0gMSAmJiBkZWx0YSA8IDApKSB7XHJcbiAgICAgICAgeCA9IHRoaXMueCArIChkZWx0YSAqIE1BSU5fU0NST0xMX0VORF9GUklDVElPTik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG5cclxuICAgIGlmICh0aGlzLnBzd3AuY29udGFpbmVyKSB7XHJcbiAgICAgIHNldFRyYW5zZm9ybSh0aGlzLnBzd3AuY29udGFpbmVyLCB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goJ21vdmVNYWluU2Nyb2xsJywgeyB4LCBkcmFnZ2luZzogZHJhZ2dpbmcgPz8gZmFsc2UgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdHlwZXMuanMnKS5NZXRob2RzPFQ+fSBNZXRob2RzPFQ+XHJcbiAqL1xyXG5cclxuY29uc3QgS2V5Ym9hcmRLZXlDb2Rlc01hcCA9IHtcclxuICBFc2NhcGU6IDI3LFxyXG4gIHo6IDkwLFxyXG4gIEFycm93TGVmdDogMzcsXHJcbiAgQXJyb3dVcDogMzgsXHJcbiAgQXJyb3dSaWdodDogMzksXHJcbiAgQXJyb3dEb3duOiA0MCxcclxuICBUYWI6IDksXHJcbn07XHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBLZXlib2FyZEtleUNvZGVzTWFwfSBUXHJcbiAqIEBwYXJhbSB7VH0ga2V5XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNLZXlTdXBwb3J0ZWRcclxuICogQHJldHVybnMge1QgfCBudW1iZXIgfCB1bmRlZmluZWR9XHJcbiAqL1xyXG5jb25zdCBnZXRLZXlib2FyZEV2ZW50S2V5ID0gKGtleSwgaXNLZXlTdXBwb3J0ZWQpID0+IHtcclxuICByZXR1cm4gaXNLZXlTdXBwb3J0ZWQgPyBrZXkgOiBLZXlib2FyZEtleUNvZGVzTWFwW2tleV07XHJcbn07XHJcblxyXG4vKipcclxuICogLSBNYW5hZ2VzIGtleWJvYXJkIHNob3J0Y3V0cy5cclxuICogLSBIZWxwcyB0cmFwIGZvY3VzIHdpdGhpbiBwaG90b3N3aXBlLlxyXG4gKi9cclxuY2xhc3MgS2V5Ym9hcmQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3dhc0ZvY3VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwc3dwLm9uKCdiaW5kRXZlbnRzJywgKCkgPT4ge1xyXG4gICAgICAvLyBEaWFsb2cgd2FzIGxpa2VseSBvcGVuZWQgYnkga2V5Ym9hcmQgaWYgaW5pdGlhbCBwb2ludCBpcyBub3QgZGVmaW5lZFxyXG4gICAgICBpZiAoIXBzd3Aub3B0aW9ucy5pbml0aWFsUG9pbnRlclBvcykge1xyXG4gICAgICAgIC8vIGZvY3VzIGNhdXNlcyBsYXlvdXQsXHJcbiAgICAgICAgLy8gd2hpY2ggY2F1c2VzIGxhZyBkdXJpbmcgdGhlIGFuaW1hdGlvbixcclxuICAgICAgICAvLyB0aGF0J3Mgd2h5IHdlIGRlbGF5IGl0IHVudGlsIHRoZSBvcGVuZXIgdHJhbnNpdGlvbiBlbmRzXHJcbiAgICAgICAgdGhpcy5fZm9jdXNSb290KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBzd3AuZXZlbnRzLmFkZChkb2N1bWVudCwgJ2ZvY3VzaW4nLCAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqLyh0aGlzLl9vbkZvY3VzSW4uYmluZCh0aGlzKSkpO1xyXG4gICAgICBwc3dwLmV2ZW50cy5hZGQoZG9jdW1lbnQsICdrZXlkb3duJywgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi8odGhpcy5fb25LZXlEb3duLmJpbmQodGhpcykpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxhc3RBY3RpdmVFbGVtZW50ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgcHN3cC5vbignZGVzdHJveScsICgpID0+IHtcclxuICAgICAgaWYgKHBzd3Aub3B0aW9ucy5yZXR1cm5Gb2N1c1xyXG4gICAgICAgICYmIGxhc3RBY3RpdmVFbGVtZW50XHJcbiAgICAgICAgJiYgdGhpcy5fd2FzRm9jdXNlZCkge1xyXG4gICAgICAgIGxhc3RBY3RpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2ZvY3VzUm9vdCgpIHtcclxuICAgIGlmICghdGhpcy5fd2FzRm9jdXNlZCAmJiB0aGlzLnBzd3AuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLnBzd3AuZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB0aGlzLl93YXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBlXHJcbiAgICovXHJcbiAgX29uS2V5RG93bihlKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHBzd3AuZGlzcGF0Y2goJ2tleWRvd24nLCB7IG9yaWdpbmFsRXZlbnQ6IGUgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNwZWNpYWxLZXlVc2VkKGUpKSB7XHJcbiAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHNwZWNpYWwga2V5IHByZXNzZWRcclxuICAgICAgLy8gdG8gcHJldmVudCBmcm9tIG92ZXJyaWRpbmcgZGVmYXVsdCBicm93c2VyIGFjdGlvbnNcclxuICAgICAgLy8gZm9yIGV4YW1wbGUsIGluIENocm9tZSBvbiBNYWMgY21kK2Fycm93LWxlZnQgcmV0dXJucyB0byBwcmV2aW91cyBwYWdlXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQHR5cGUge01ldGhvZHM8UGhvdG9Td2lwZT4gfCB1bmRlZmluZWR9ICovXHJcbiAgICBsZXQga2V5ZG93bkFjdGlvbjtcclxuICAgIC8qKiBAdHlwZSB7J3gnIHwgJ3knIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgbGV0IGF4aXM7XHJcbiAgICBsZXQgaXNGb3J3YXJkID0gZmFsc2U7XHJcbiAgICBjb25zdCBpc0tleVN1cHBvcnRlZCA9ICdrZXknIGluIGU7XHJcblxyXG4gICAgc3dpdGNoIChpc0tleVN1cHBvcnRlZCA/IGUua2V5IDogZS5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgZ2V0S2V5Ym9hcmRFdmVudEtleSgnRXNjYXBlJywgaXNLZXlTdXBwb3J0ZWQpOlxyXG4gICAgICAgIGlmIChwc3dwLm9wdGlvbnMuZXNjS2V5KSB7XHJcbiAgICAgICAgICBrZXlkb3duQWN0aW9uID0gJ2Nsb3NlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgZ2V0S2V5Ym9hcmRFdmVudEtleSgneicsIGlzS2V5U3VwcG9ydGVkKTpcclxuICAgICAgICBrZXlkb3duQWN0aW9uID0gJ3RvZ2dsZVpvb20nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdldEtleWJvYXJkRXZlbnRLZXkoJ0Fycm93TGVmdCcsIGlzS2V5U3VwcG9ydGVkKTpcclxuICAgICAgICBheGlzID0gJ3gnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdldEtleWJvYXJkRXZlbnRLZXkoJ0Fycm93VXAnLCBpc0tleVN1cHBvcnRlZCk6XHJcbiAgICAgICAgYXhpcyA9ICd5JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnZXRLZXlib2FyZEV2ZW50S2V5KCdBcnJvd1JpZ2h0JywgaXNLZXlTdXBwb3J0ZWQpOlxyXG4gICAgICAgIGF4aXMgPSAneCc7XHJcbiAgICAgICAgaXNGb3J3YXJkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBnZXRLZXlib2FyZEV2ZW50S2V5KCdBcnJvd0Rvd24nLCBpc0tleVN1cHBvcnRlZCk6XHJcbiAgICAgICAgaXNGb3J3YXJkID0gdHJ1ZTtcclxuICAgICAgICBheGlzID0gJ3knO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGdldEtleWJvYXJkRXZlbnRLZXkoJ1RhYicsIGlzS2V5U3VwcG9ydGVkKTpcclxuICAgICAgICB0aGlzLl9mb2N1c1Jvb3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBsZWZ0L3JpZ2h0L3RvcC9ib3R0b20ga2V5XHJcbiAgICBpZiAoYXhpcykge1xyXG4gICAgICAvLyBwcmV2ZW50IHBhZ2Ugc2Nyb2xsXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgY3VyclNsaWRlIH0gPSBwc3dwO1xyXG5cclxuICAgICAgaWYgKHBzd3Aub3B0aW9ucy5hcnJvd0tleXNcclxuICAgICAgICAmJiBheGlzID09PSAneCdcclxuICAgICAgICAmJiBwc3dwLmdldE51bUl0ZW1zKCkgPiAxKSB7XHJcbiAgICAgICAga2V5ZG93bkFjdGlvbiA9IGlzRm9yd2FyZCA/ICduZXh0JyA6ICdwcmV2JztcclxuICAgICAgfSBlbHNlIGlmIChjdXJyU2xpZGUgJiYgY3VyclNsaWRlLmN1cnJab29tTGV2ZWwgPiBjdXJyU2xpZGUuem9vbUxldmVscy5maXQpIHtcclxuICAgICAgICAvLyB1cC9kb3duIGFycm93IGtleXMgcGFuIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgLy8gbGVmdC9yaWdodCBhcnJvdyBrZXlzIHBhbiBob3Jpem9udGFsbHkuXHJcbiAgICAgICAgLy8gVW5sZXNzIHRoZXJlIGlzIG9ubHkgb25lIGltYWdlLFxyXG4gICAgICAgIC8vIG9yIGFycm93S2V5cyBvcHRpb24gaXMgZGlzYWJsZWRcclxuICAgICAgICBjdXJyU2xpZGUucGFuW2F4aXNdICs9IGlzRm9yd2FyZCA/IC04MCA6IDgwO1xyXG4gICAgICAgIGN1cnJTbGlkZS5wYW5UbyhjdXJyU2xpZGUucGFuLngsIGN1cnJTbGlkZS5wYW4ueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoa2V5ZG93bkFjdGlvbikge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcHN3cFtrZXlkb3duQWN0aW9uXSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhcCBmb2N1cyBpbnNpZGUgcGhvdG9zd2lwZVxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGVcclxuICAgKi9cclxuICBfb25Gb2N1c0luKGUpIHtcclxuICAgIGNvbnN0IHsgdGVtcGxhdGUgfSA9IHRoaXMucHN3cDtcclxuICAgIGlmICh0ZW1wbGF0ZVxyXG4gICAgICAmJiBkb2N1bWVudCAhPT0gZS50YXJnZXRcclxuICAgICAgJiYgdGVtcGxhdGUgIT09IGUudGFyZ2V0XHJcbiAgICAgICYmICF0ZW1wbGF0ZS5jb250YWlucygvKiogQHR5cGUge05vZGV9ICovKGUudGFyZ2V0KSkpIHtcclxuICAgICAgLy8gZm9jdXMgcm9vdCBlbGVtZW50XHJcbiAgICAgIHRlbXBsYXRlLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0VBU0lORyA9ICdjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSknO1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vYW5pbWF0aW9ucy5qcycpLlNoYXJlZEFuaW1hdGlvblByb3BzfSBTaGFyZWRBbmltYXRpb25Qcm9wcyAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtPYmplY3R9IERlZmF1bHRDc3NBbmltYXRpb25Qcm9wc1xyXG4gKlxyXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcHJvcCB7bnVtYmVyfSBbZHVyYXRpb25dXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtlYXNpbmddXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFt0cmFuc2Zvcm1dXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtvcGFjaXR5XVxyXG4gKiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtTaGFyZWRBbmltYXRpb25Qcm9wcyAmIERlZmF1bHRDc3NBbmltYXRpb25Qcm9wc30gQ3NzQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbi8qKlxyXG4gKiBSdW5zIENTUyB0cmFuc2l0aW9uLlxyXG4gKi9cclxuY2xhc3MgQ1NTQW5pbWF0aW9uIHtcclxuICAvKipcclxuICAgKiBvbkNvbXBsZXRlIGNhbiBiZSB1bnByZWRpY3RhYmxlLCBiZSBjYXJlZnVsIGFib3V0IGN1cnJlbnQgc3RhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Q3NzQW5pbWF0aW9uUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICBvbkNvbXBsZXRlLFxyXG4gICAgICB0cmFuc2Zvcm0sXHJcbiAgICAgIG9uRmluaXNoID0gKCkgPT4geyB9LFxyXG4gICAgICBkdXJhdGlvbiA9IDMzMyxcclxuICAgICAgZWFzaW5nID0gREVGQVVMVF9FQVNJTkcsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgdGhpcy5vbkZpbmlzaCA9IG9uRmluaXNoO1xyXG5cclxuICAgIC8vIHN1cHBvcnQgb25seSB0cmFuc2Zvcm0gYW5kIG9wYWNpdHlcclxuICAgIGNvbnN0IHByb3AgPSB0cmFuc2Zvcm0gPyAndHJhbnNmb3JtJyA6ICdvcGFjaXR5JztcclxuICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW3Byb3BdID8/ICcnO1xyXG5cclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX29uVHJhbnNpdGlvbkVuZCA9IHRoaXMuX29uVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIC8vIFVzaW5nIHRpbWVvdXQgaGFjayB0byBtYWtlIHN1cmUgdGhhdCBhbmltYXRpb25cclxuICAgIC8vIHN0YXJ0cyBldmVuIGlmIHRoZSBhbmltYXRlZCBwcm9wZXJ0eSB3YXMgY2hhbmdlZCByZWNlbnRseSxcclxuICAgIC8vIG90aGVyd2lzZSB0cmFuc2l0aW9uZW5kIG1pZ2h0IG5vdCBmaXJlIG9yIHRyYW5zaXRpb24gd29uJ3Qgc3RhcnQuXHJcbiAgICAvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXRyYW5zaXRpb25zLyNzdGFydGluZ1xyXG4gICAgLy9cclxuICAgIC8vIMKvXFxfKOODhClfL8KvXHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX2hlbHBlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0VHJhbnNpdGlvblN0eWxlKHRhcmdldCwgcHJvcCwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgICAgIHRoaXMuX2hlbHBlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuX29uVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xyXG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uY2FuY2VsJywgdGhpcy5fb25UcmFuc2l0aW9uRW5kLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIFNhZmFyaSBvY2Nhc2lvbmFsbHkgZG9lcyBub3QgZW1pdCB0cmFuc2l0aW9uZW5kIGV2ZW50XHJcbiAgICAgICAgLy8gaWYgZWxlbWVudCBwcm9wZXJ0eSB3YXMgbW9kaWZpZWQgZHVyaW5nIHRoZSB0cmFuc2l0aW9uLFxyXG4gICAgICAgIC8vIHdoaWNoIG1heSBiZSBjYXVzZWQgYnkgcmVzaXplIG9yIHRoaXJkIHBhcnR5IGNvbXBvbmVudCxcclxuICAgICAgICAvLyB1c2luZyB0aW1lb3V0IGFzIGEgc2FmZXR5IGZhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5faGVscGVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fZmluYWxpemVBbmltYXRpb24oKTtcclxuICAgICAgICB9LCBkdXJhdGlvbiArIDUwMCk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlW3Byb3BdID0gcHJvcFZhbHVlO1xyXG4gICAgICB9LCAzMCk7IC8vIERvIG5vdCByZWR1Y2UgdGhpcyBudW1iZXJcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb25FdmVudH0gZVxyXG4gICAqL1xyXG4gIF9vblRyYW5zaXRpb25FbmQoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLl90YXJnZXQpIHtcclxuICAgICAgdGhpcy5fZmluYWxpemVBbmltYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2ZpbmFsaXplQW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLl9maW5pc2hlZCkge1xyXG4gICAgICB0aGlzLl9maW5pc2hlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgaWYgKHRoaXMuX29uQ29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLl9vbkNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERlc3Ryb3kgaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgb25GaW5pc2hcclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuX2hlbHBlclRpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hlbHBlclRpbWVvdXQpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVHJhbnNpdGlvblN0eWxlKHRoaXMuX3RhcmdldCk7XHJcbiAgICB0aGlzLl90YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuX29uVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xyXG4gICAgdGhpcy5fdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25jYW5jZWwnLCB0aGlzLl9vblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAgIGlmICghdGhpcy5fZmluaXNoZWQpIHtcclxuICAgICAgdGhpcy5fZmluYWxpemVBbmltYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfTkFUVVJBTF9GUkVRVUVOQ1kgPSAxMjtcclxuY29uc3QgREVGQVVMVF9EQU1QSU5HX1JBVElPID0gMC43NTtcclxuXHJcbi8qKlxyXG4gKiBTcHJpbmcgZWFzaW5nIGhlbHBlclxyXG4gKi9cclxuY2xhc3MgU3ByaW5nRWFzZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbml0aWFsVmVsb2NpdHkgSW5pdGlhbCB2ZWxvY2l0eSwgcHggcGVyIG1zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYW1waW5nUmF0aW9dXHJcbiAgICogRGV0ZXJtaW5lcyBob3cgYm91bmN5IGFuaW1hdGlvbiB3aWxsIGJlLlxyXG4gICAqIEZyb20gMCB0byAxLCAwIC0gYWx3YXlzIG92ZXJzaG9vdCwgMSAtIGRvIG5vdCBvdmVyc2hvb3QuXHJcbiAgICogXCJvdmVyc2hvb3RcIiByZWZlcnMgdG8gcGFydCBvZiBhbmltYXRpb24gdGhhdFxyXG4gICAqIGdvZXMgYmV5b25kIHRoZSBmaW5hbCB2YWx1ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbmF0dXJhbEZyZXF1ZW5jeV1cclxuICAgKiBEZXRlcm1pbmVzIGhvdyBmYXN0IGFuaW1hdGlvbiB3aWxsIHNsb3cgZG93bi5cclxuICAgKiBUaGUgaGlnaGVyIHZhbHVlIC0gdGhlIHN0aWZmZXIgdGhlIHRyYW5zaXRpb24gd2lsbCBiZSxcclxuICAgKiBhbmQgdGhlIGZhc3RlciBpdCB3aWxsIHNsb3cgZG93bi5cclxuICAgKiBSZWNvbW1lbmRlZCB2YWx1ZSBmcm9tIDEwIHRvIDUwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZlbG9jaXR5LCBkYW1waW5nUmF0aW8sIG5hdHVyYWxGcmVxdWVuY3kpIHtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBpbml0aWFsVmVsb2NpdHkgKiAxMDAwOyAvLyBjb252ZXJ0IHRvIFwicGl4ZWxzIHBlciBzZWNvbmRcIlxyXG5cclxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RhbXBpbmdfcmF0aW9cclxuICAgIHRoaXMuX2RhbXBpbmdSYXRpbyA9IGRhbXBpbmdSYXRpbyB8fCBERUZBVUxUX0RBTVBJTkdfUkFUSU87XHJcblxyXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTmF0dXJhbF9mcmVxdWVuY3lcclxuICAgIHRoaXMuX25hdHVyYWxGcmVxdWVuY3kgPSBuYXR1cmFsRnJlcXVlbmN5IHx8IERFRkFVTFRfTkFUVVJBTF9GUkVRVUVOQ1k7XHJcblxyXG4gICAgdGhpcy5fZGFtcGVkRnJlcXVlbmN5ID0gdGhpcy5fbmF0dXJhbEZyZXF1ZW5jeTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGFtcGluZ1JhdGlvIDwgMSkge1xyXG4gICAgICB0aGlzLl9kYW1wZWRGcmVxdWVuY3kgKj0gTWF0aC5zcXJ0KDEgLSB0aGlzLl9kYW1waW5nUmF0aW8gKiB0aGlzLl9kYW1waW5nUmF0aW8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhUG9zaXRpb24gRGlmZmVyZW5jZSBiZXR3ZWVuIGN1cnJlbnQgYW5kIGVuZCBwb3NpdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhVGltZSBGcmFtZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IERpc3BsYWNlbWVudCwgcmVsYXRpdmUgdG8gdGhlIGVuZCBwb3NpdGlvbi5cclxuICAgKi9cclxuICBlYXNlRnJhbWUoZGVsdGFQb3NpdGlvbiwgZGVsdGFUaW1lKSB7XHJcbiAgICAvLyBJbnNwaXJlZCBieSBBcHBsZSBXZWJraXQgYW5kIEFuZHJvaWQgc3ByaW5nIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uXHJcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Pc2NpbGxhdGlvblxyXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGFtcGluZ19yYXRpb1xyXG4gICAgLy8gd2UgaWdub3JlIG1hc3MgKGFzc3VtZSB0aGF0IGl0J3MgMWtnKVxyXG5cclxuICAgIGxldCBkaXNwbGFjZW1lbnQgPSAwO1xyXG4gICAgbGV0IGNvZWZmO1xyXG5cclxuICAgIGRlbHRhVGltZSAvPSAxMDAwO1xyXG5cclxuICAgIGNvbnN0IG5hdHVyYWxEdW1waW5nUG93ID0gTWF0aC5FICoqICgtdGhpcy5fZGFtcGluZ1JhdGlvICogdGhpcy5fbmF0dXJhbEZyZXF1ZW5jeSAqIGRlbHRhVGltZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RhbXBpbmdSYXRpbyA9PT0gMSkge1xyXG4gICAgICBjb2VmZiA9IHRoaXMudmVsb2NpdHkgKyB0aGlzLl9uYXR1cmFsRnJlcXVlbmN5ICogZGVsdGFQb3NpdGlvbjtcclxuXHJcbiAgICAgIGRpc3BsYWNlbWVudCA9IChkZWx0YVBvc2l0aW9uICsgY29lZmYgKiBkZWx0YVRpbWUpICogbmF0dXJhbER1bXBpbmdQb3c7XHJcblxyXG4gICAgICB0aGlzLnZlbG9jaXR5ID0gZGlzcGxhY2VtZW50XHJcbiAgICAgICAgKiAoLXRoaXMuX25hdHVyYWxGcmVxdWVuY3kpICsgY29lZmZcclxuICAgICAgICAqIG5hdHVyYWxEdW1waW5nUG93O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9kYW1waW5nUmF0aW8gPCAxKSB7XHJcbiAgICAgIGNvZWZmID0gKDEgLyB0aGlzLl9kYW1wZWRGcmVxdWVuY3kpXHJcbiAgICAgICAgKiAodGhpcy5fZGFtcGluZ1JhdGlvICogdGhpcy5fbmF0dXJhbEZyZXF1ZW5jeSAqIGRlbHRhUG9zaXRpb24gKyB0aGlzLnZlbG9jaXR5KTtcclxuXHJcbiAgICAgIGNvbnN0IGR1bXBlZEZDb3MgPSBNYXRoLmNvcyh0aGlzLl9kYW1wZWRGcmVxdWVuY3kgKiBkZWx0YVRpbWUpO1xyXG4gICAgICBjb25zdCBkdW1wZWRGU2luID0gTWF0aC5zaW4odGhpcy5fZGFtcGVkRnJlcXVlbmN5ICogZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgIGRpc3BsYWNlbWVudCA9IG5hdHVyYWxEdW1waW5nUG93XHJcbiAgICAgICAgKiAoZGVsdGFQb3NpdGlvbiAqIGR1bXBlZEZDb3MgKyBjb2VmZiAqIGR1bXBlZEZTaW4pO1xyXG5cclxuICAgICAgdGhpcy52ZWxvY2l0eSA9IGRpc3BsYWNlbWVudFxyXG4gICAgICAgICogKC10aGlzLl9uYXR1cmFsRnJlcXVlbmN5KVxyXG4gICAgICAgICogdGhpcy5fZGFtcGluZ1JhdGlvXHJcbiAgICAgICAgKyBuYXR1cmFsRHVtcGluZ1Bvd1xyXG4gICAgICAgICogKC10aGlzLl9kYW1wZWRGcmVxdWVuY3kgKiBkZWx0YVBvc2l0aW9uICogZHVtcGVkRlNpblxyXG4gICAgICAgICAgKyB0aGlzLl9kYW1wZWRGcmVxdWVuY3kgKiBjb2VmZiAqIGR1bXBlZEZDb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJkYW1wZWQgKD4xKSBkYW1waW5nIHJhdGlvIGlzIG5vdCBzdXBwb3J0ZWRcclxuXHJcbiAgICByZXR1cm4gZGlzcGxhY2VtZW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vYW5pbWF0aW9ucy5qcycpLlNoYXJlZEFuaW1hdGlvblByb3BzfSBTaGFyZWRBbmltYXRpb25Qcm9wcyAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERlZmF1bHRTcHJpbmdBbmltYXRpb25Qcm9wc1xyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyfSBzdGFydFxyXG4gKiBAcHJvcCB7bnVtYmVyfSBlbmRcclxuICogQHByb3Age251bWJlcn0gdmVsb2NpdHlcclxuICogQHByb3Age251bWJlcn0gW2RhbXBpbmdSYXRpb11cclxuICogQHByb3Age251bWJlcn0gW25hdHVyYWxGcmVxdWVuY3ldXHJcbiAqIEBwcm9wIHsoZW5kOiBudW1iZXIpID0+IHZvaWR9IG9uVXBkYXRlXHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtTaGFyZWRBbmltYXRpb25Qcm9wcyAmIERlZmF1bHRTcHJpbmdBbmltYXRpb25Qcm9wc30gU3ByaW5nQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbmNsYXNzIFNwcmluZ0FuaW1hdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTcHJpbmdBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgdGhpcy5fcmFmID0gMDtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHN0YXJ0LFxyXG4gICAgICBlbmQsXHJcbiAgICAgIHZlbG9jaXR5LFxyXG4gICAgICBvblVwZGF0ZSxcclxuICAgICAgb25Db21wbGV0ZSxcclxuICAgICAgb25GaW5pc2ggPSAoKSA9PiB7IH0sXHJcbiAgICAgIGRhbXBpbmdSYXRpbyxcclxuICAgICAgbmF0dXJhbEZyZXF1ZW5jeVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHRoaXMub25GaW5pc2ggPSBvbkZpbmlzaDtcclxuXHJcbiAgICBjb25zdCBlYXNlciA9IG5ldyBTcHJpbmdFYXNlcih2ZWxvY2l0eSwgZGFtcGluZ1JhdGlvLCBuYXR1cmFsRnJlcXVlbmN5KTtcclxuICAgIGxldCBwcmV2VGltZSA9IERhdGUubm93KCk7XHJcbiAgICBsZXQgZGVsdGFQb3NpdGlvbiA9IHN0YXJ0IC0gZW5kO1xyXG5cclxuICAgIGNvbnN0IGFuaW1hdGlvbkxvb3AgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9yYWYpIHtcclxuICAgICAgICBkZWx0YVBvc2l0aW9uID0gZWFzZXIuZWFzZUZyYW1lKGRlbHRhUG9zaXRpb24sIERhdGUubm93KCkgLSBwcmV2VGltZSk7XHJcblxyXG4gICAgICAgIC8vIFN0b3AgdGhlIGFuaW1hdGlvbiBpZiB2ZWxvY2l0eSBpcyBsb3cgYW5kIHBvc2l0aW9uIGlzIGNsb3NlIHRvIGVuZFxyXG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YVBvc2l0aW9uKSA8IDEgJiYgTWF0aC5hYnMoZWFzZXIudmVsb2NpdHkpIDwgNTApIHtcclxuICAgICAgICAgIC8vIEZpbmFsaXplIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgIG9uVXBkYXRlKGVuZCk7XHJcbiAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByZXZUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgIG9uVXBkYXRlKGRlbHRhUG9zaXRpb24gKyBlbmQpO1xyXG4gICAgICAgICAgdGhpcy5fcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XHJcbiAgfVxyXG5cclxuICAvLyBEZXN0cm95IGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IG9uRmluaXNoXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9yYWYgPj0gMCkge1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9yYWYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmFmID0gMDtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Nzcy1hbmltYXRpb24uanMnKS5Dc3NBbmltYXRpb25Qcm9wc30gQ3NzQW5pbWF0aW9uUHJvcHMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc3ByaW5nLWFuaW1hdGlvbi5qcycpLlNwcmluZ0FuaW1hdGlvblByb3BzfSBTcHJpbmdBbmltYXRpb25Qcm9wcyAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtPYmplY3R9IFNoYXJlZEFuaW1hdGlvblByb3BzXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtuYW1lXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2lzUGFuXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2lzTWFpblNjcm9sbF1cclxuICogQHByb3Age1ZvaWRGdW5jdGlvbn0gW29uQ29tcGxldGVdXHJcbiAqIEBwcm9wIHtWb2lkRnVuY3Rpb259IFtvbkZpbmlzaF1cclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge1NwcmluZ0FuaW1hdGlvbiB8IENTU0FuaW1hdGlvbn0gQW5pbWF0aW9uICovXHJcbi8qKiBAdHlwZWRlZiB7U3ByaW5nQW5pbWF0aW9uUHJvcHMgfCBDc3NBbmltYXRpb25Qcm9wc30gQW5pbWF0aW9uUHJvcHMgKi9cclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGFuaW1hdGlvbnNcclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEB0eXBlIHtBbmltYXRpb25bXX0gKi9cclxuICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTcHJpbmdBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBzdGFydFNwcmluZyhwcm9wcykge1xyXG4gICAgdGhpcy5fc3RhcnQocHJvcHMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDc3NBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBzdGFydFRyYW5zaXRpb24ocHJvcHMpIHtcclxuICAgIHRoaXMuX3N0YXJ0KHByb3BzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtBbmltYXRpb25Qcm9wc30gcHJvcHNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1NwcmluZ11cclxuICAgKiBAcmV0dXJucyB7QW5pbWF0aW9ufVxyXG4gICAqL1xyXG4gIF9zdGFydChwcm9wcywgaXNTcHJpbmcpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGlzU3ByaW5nXHJcbiAgICAgID8gbmV3IFNwcmluZ0FuaW1hdGlvbigvKiogQHR5cGUgU3ByaW5nQW5pbWF0aW9uUHJvcHMgKi8ocHJvcHMpKVxyXG4gICAgICA6IG5ldyBDU1NBbmltYXRpb24oLyoqIEB0eXBlIENzc0FuaW1hdGlvblByb3BzICovKHByb3BzKSk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVBbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcclxuICAgIGFuaW1hdGlvbi5vbkZpbmlzaCA9ICgpID0+IHRoaXMuc3RvcChhbmltYXRpb24pO1xyXG5cclxuICAgIHJldHVybiBhbmltYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0FuaW1hdGlvbn0gYW5pbWF0aW9uXHJcbiAgICovXHJcbiAgc3RvcChhbmltYXRpb24pIHtcclxuICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5pbmRleE9mKGFuaW1hdGlvbik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BBbGwoKSB7IC8vIF9zdG9wQWxsQW5pbWF0aW9uc1xyXG4gICAgdGhpcy5hY3RpdmVBbmltYXRpb25zLmZvckVhY2goKGFuaW1hdGlvbikgPT4ge1xyXG4gICAgICBhbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgYWxsIHBhbiBvciB6b29tIHRyYW5zaXRpb25zXHJcbiAgICovXHJcbiAgc3RvcEFsbFBhbigpIHtcclxuICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucyA9IHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5maWx0ZXIoKGFuaW1hdGlvbikgPT4ge1xyXG4gICAgICBpZiAoYW5pbWF0aW9uLnByb3BzLmlzUGFuKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdG9wTWFpblNjcm9sbCgpIHtcclxuICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucyA9IHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5maWx0ZXIoKGFuaW1hdGlvbikgPT4ge1xyXG4gICAgICBpZiAoYW5pbWF0aW9uLnByb3BzLmlzTWFpblNjcm9sbCkge1xyXG4gICAgICAgIGFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIG1haW4gc2Nyb2xsIHRyYW5zaXRpb24gaXMgcnVubmluZ1xyXG4gICAqL1xyXG4gIC8vIGlzTWFpblNjcm9sbFJ1bm5pbmcoKSB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5hY3RpdmVBbmltYXRpb25zLnNvbWUoKGFuaW1hdGlvbikgPT4ge1xyXG4gIC8vICAgICByZXR1cm4gYW5pbWF0aW9uLnByb3BzLmlzTWFpblNjcm9sbDtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIGFueSBwYW4gb3Igem9vbSB0cmFuc2l0aW9uIGlzIHJ1bm5pbmdcclxuICAgKi9cclxuICBpc1BhblJ1bm5pbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVBbmltYXRpb25zLnNvbWUoKGFuaW1hdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4gYW5pbWF0aW9uLnByb3BzLmlzUGFuO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgc2Nyb2xsIHdoZWVsLlxyXG4gKiBDYW4gcGFuIGFuZCB6b29tIGN1cnJlbnQgc2xpZGUgaW1hZ2UuXHJcbiAqL1xyXG5jbGFzcyBTY3JvbGxXaGVlbCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIHBzd3AuZXZlbnRzLmFkZChwc3dwLmVsZW1lbnQsICd3aGVlbCcsIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovKHRoaXMuX29uV2hlZWwuYmluZCh0aGlzKSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge1doZWVsRXZlbnR9IGVcclxuICAgKi9cclxuICBfb25XaGVlbChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7IGN1cnJTbGlkZSB9ID0gdGhpcy5wc3dwO1xyXG4gICAgbGV0IHsgZGVsdGFYLCBkZWx0YVkgfSA9IGU7XHJcblxyXG4gICAgaWYgKCFjdXJyU2xpZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBzd3AuZGlzcGF0Y2goJ3doZWVsJywgeyBvcmlnaW5hbEV2ZW50OiBlIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN0cmxLZXkgfHwgdGhpcy5wc3dwLm9wdGlvbnMud2hlZWxUb1pvb20pIHtcclxuICAgICAgLy8gem9vbVxyXG4gICAgICBpZiAoY3VyclNsaWRlLmlzWm9vbWFibGUoKSkge1xyXG4gICAgICAgIGxldCB6b29tRmFjdG9yID0gLWRlbHRhWTtcclxuICAgICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEgLyogRE9NX0RFTFRBX0xJTkUgKi8pIHtcclxuICAgICAgICAgIHpvb21GYWN0b3IgKj0gMC4wNTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgem9vbUZhY3RvciAqPSBlLmRlbHRhTW9kZSA/IDEgOiAwLjAwMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgem9vbUZhY3RvciA9IDIgKiogem9vbUZhY3RvcjtcclxuXHJcbiAgICAgICAgY29uc3QgZGVzdFpvb21MZXZlbCA9IGN1cnJTbGlkZS5jdXJyWm9vbUxldmVsICogem9vbUZhY3RvcjtcclxuICAgICAgICBjdXJyU2xpZGUuem9vbVRvKGRlc3Rab29tTGV2ZWwsIHtcclxuICAgICAgICAgIHg6IGUuY2xpZW50WCxcclxuICAgICAgICAgIHk6IGUuY2xpZW50WVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBwYW5cclxuICAgICAgaWYgKGN1cnJTbGlkZS5pc1Bhbm5hYmxlKCkpIHtcclxuICAgICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEgLyogRE9NX0RFTFRBX0xJTkUgKi8pIHtcclxuICAgICAgICAgIC8vIDE4IC0gYXZlcmFnZSBsaW5lIGhlaWdodFxyXG4gICAgICAgICAgZGVsdGFYICo9IDE4O1xyXG4gICAgICAgICAgZGVsdGFZICo9IDE4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VyclNsaWRlLnBhblRvKFxyXG4gICAgICAgICAgY3VyclNsaWRlLnBhbi54IC0gZGVsdGFYLFxyXG4gICAgICAgICAgY3VyclNsaWRlLnBhbi55IC0gZGVsdGFZXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vdHlwZXMuanMnKS5NZXRob2RzPFQ+fSBNZXRob2RzPFQ+XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVJRWxlbWVudE1hcmt1cFByb3BzXHJcbiAqIEBwcm9wIHtib29sZWFufSBbaXNDdXN0b21TVkddXHJcbiAqIEBwcm9wIHtzdHJpbmd9IGlubmVyXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtvdXRsaW5lSURdXHJcbiAqIEBwcm9wIHtudW1iZXIgfCBzdHJpbmd9IFtzaXplXVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBVSUVsZW1lbnREYXRhXHJcbiAqIEBwcm9wIHtEZWZhdWx0VUlFbGVtZW50cyB8IHN0cmluZ30gW25hbWVdXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtjbGFzc05hbWVdXHJcbiAqIEBwcm9wIHtVSUVsZW1lbnRNYXJrdXB9IFtodG1sXVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW2lzQnV0dG9uXVxyXG4gKiBAcHJvcCB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBbdGFnTmFtZV1cclxuICogQHByb3Age3N0cmluZ30gW3RpdGxlXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbYXJpYUxhYmVsXVxyXG4gKiBAcHJvcCB7KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwc3dwOiBQaG90b1N3aXBlKSA9PiB2b2lkfSBbb25Jbml0XVxyXG4gKiBAcHJvcCB7TWV0aG9kczxQaG90b1N3aXBlPiB8ICgoZTogTW91c2VFdmVudCwgZWxlbWVudDogSFRNTEVsZW1lbnQsIHBzd3A6IFBob3RvU3dpcGUpID0+IHZvaWQpfSBbb25DbGlja11cclxuICogQHByb3AgeydiYXInIHwgJ3dyYXBwZXInIHwgJ3Jvb3QnfSBbYXBwZW5kVG9dXHJcbiAqIEBwcm9wIHtudW1iZXJ9IFtvcmRlcl1cclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYgeydhcnJvd1ByZXYnIHwgJ2Fycm93TmV4dCcgfCAnY2xvc2UnIHwgJ3pvb20nIHwgJ2NvdW50ZXInfSBEZWZhdWx0VUlFbGVtZW50cyAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHtzdHJpbmcgfCBVSUVsZW1lbnRNYXJrdXBQcm9wc30gVUlFbGVtZW50TWFya3VwICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtVSUVsZW1lbnRNYXJrdXB9IFtodG1sRGF0YV1cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRIVE1MKGh0bWxEYXRhKSB7XHJcbiAgaWYgKHR5cGVvZiBodG1sRGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIEFsbG93IGRldmVsb3BlcnMgdG8gcHJvdmlkZSBmdWxsIHN2ZyxcclxuICAgIC8vIEZvciBleGFtcGxlOlxyXG4gICAgLy8gPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJwc3dwX19pY25cIj5cclxuICAgIC8vICAgPHBhdGggZD1cIi4uLlwiIC8+XHJcbiAgICAvLyAgIDxjaXJjbGUgLi4uIC8+XHJcbiAgICAvLyA8L3N2Zz5cclxuICAgIC8vIENhbiBhbHNvIGJlIGFueSBIVE1MIHN0cmluZy5cclxuICAgIHJldHVybiBodG1sRGF0YTtcclxuICB9XHJcblxyXG4gIGlmICghaHRtbERhdGEgfHwgIWh0bWxEYXRhLmlzQ3VzdG9tU1ZHKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdmdEYXRhID0gaHRtbERhdGE7XHJcbiAgbGV0IG91dCA9ICc8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwicHN3cF9faWNuXCIgdmlld0JveD1cIjAgMCAlZCAlZFwiIHdpZHRoPVwiJWRcIiBoZWlnaHQ9XCIlZFwiPic7XHJcbiAgLy8gcmVwbGFjZSBhbGwgJWQgd2l0aCBzaXplXHJcbiAgb3V0ID0gb3V0LnNwbGl0KCclZCcpLmpvaW4oLyoqIEB0eXBlIHtzdHJpbmd9ICovKHN2Z0RhdGEuc2l6ZSB8fCAzMikpO1xyXG5cclxuICAvLyBJY29ucyBtYXkgY29udGFpbiBvdXRsaW5lL3NoYWRvdyxcclxuICAvLyB0byBtYWtlIGl0IHdlIFwiY2xvbmVcIiBiYXNlIGljb24gc2hhcGUgYW5kIGFkZCBib3JkZXIgdG8gaXQuXHJcbiAgLy8gSWNvbiBpdHNlbGYgYW5kIGJvcmRlciBhcmUgc3R5bGVkIHZpYSBDU1MuXHJcbiAgLy9cclxuICAvLyBQcm9wZXJ0eSBzaGFkb3dJRCBkZWZpbmVzIElEIG9mIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgY2xvbmVkLlxyXG4gIGlmIChzdmdEYXRhLm91dGxpbmVJRCkge1xyXG4gICAgb3V0ICs9ICc8dXNlIGNsYXNzPVwicHN3cF9faWNuLXNoYWRvd1wiIHhsaW5rOmhyZWY9XCIjJyArIHN2Z0RhdGEub3V0bGluZUlEICsgJ1wiLz4nO1xyXG4gIH1cclxuXHJcbiAgb3V0ICs9IHN2Z0RhdGEuaW5uZXI7XHJcblxyXG4gIG91dCArPSAnPC9zdmc+JztcclxuXHJcbiAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuY2xhc3MgVUlFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGV9IHBzd3BcclxuICAgKiBAcGFyYW0ge1VJRWxlbWVudERhdGF9IGRhdGFcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwc3dwLCBkYXRhKSB7XHJcbiAgICBjb25zdCBuYW1lID0gZGF0YS5uYW1lIHx8IGRhdGEuY2xhc3NOYW1lO1xyXG4gICAgbGV0IGVsZW1lbnRIVE1MID0gZGF0YS5odG1sO1xyXG5cclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3VwIG9ubHkgYnkgYGRhdGEubmFtZWAgbWF5YmU/XHJcbiAgICBpZiAocHN3cC5vcHRpb25zW25hbWVdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBleGl0IGlmIGVsZW1lbnQgaXMgZGlzYWJsZWQgZnJvbSBvcHRpb25zXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGxvdyB0byBvdmVycmlkZSBTVkcgaWNvbnMgZnJvbSBvcHRpb25zXHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2t1cCBvbmx5IGJ5IGBkYXRhLm5hbWVgIG1heWJlP1xyXG4gICAgaWYgKHR5cGVvZiBwc3dwLm9wdGlvbnNbbmFtZSArICdTVkcnXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gYXJyb3dQcmV2U1ZHXHJcbiAgICAgIC8vIGFycm93TmV4dFNWR1xyXG4gICAgICAvLyBjbG9zZVNWR1xyXG4gICAgICAvLyB6b29tU1ZHXHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3VwIG9ubHkgYnkgYGRhdGEubmFtZWAgbWF5YmU/XHJcbiAgICAgIGVsZW1lbnRIVE1MID0gcHN3cC5vcHRpb25zW25hbWUgKyAnU1ZHJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaCgndWlFbGVtZW50Q3JlYXRlJywgeyBkYXRhIH0pO1xyXG5cclxuICAgIGxldCBjbGFzc05hbWUgPSAnJztcclxuICAgIGlmIChkYXRhLmlzQnV0dG9uKSB7XHJcbiAgICAgIGNsYXNzTmFtZSArPSAncHN3cF9fYnV0dG9uICc7XHJcbiAgICAgIGNsYXNzTmFtZSArPSAoZGF0YS5jbGFzc05hbWUgfHwgYHBzd3BfX2J1dHRvbi0tJHtkYXRhLm5hbWV9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGFzc05hbWUgKz0gKGRhdGEuY2xhc3NOYW1lIHx8IGBwc3dwX18ke2RhdGEubmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGFnTmFtZSA9IGRhdGEuaXNCdXR0b24gPyAoZGF0YS50YWdOYW1lIHx8ICdidXR0b24nKSA6IChkYXRhLnRhZ05hbWUgfHwgJ2RpdicpO1xyXG4gICAgdGFnTmFtZSA9IC8qKiBAdHlwZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSAqLyAodGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXHJcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChjbGFzc05hbWUsIHRhZ05hbWUpO1xyXG5cclxuICAgIGlmIChkYXRhLmlzQnV0dG9uKSB7XHJcbiAgICAgIGlmICh0YWdOYW1lID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovIChlbGVtZW50KS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB7IHRpdGxlIH0gPSBkYXRhO1xyXG4gICAgICBjb25zdCB7IGFyaWFMYWJlbCB9ID0gZGF0YTtcclxuXHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbG9va3VwIG9ubHkgYnkgYGRhdGEubmFtZWAgbWF5YmU/XHJcbiAgICAgIGlmICh0eXBlb2YgcHN3cC5vcHRpb25zW25hbWUgKyAnVGl0bGUnXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGxvb2t1cCBvbmx5IGJ5IGBkYXRhLm5hbWVgIG1heWJlP1xyXG4gICAgICAgIHRpdGxlID0gcHN3cC5vcHRpb25zW25hbWUgKyAnVGl0bGUnXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgZWxlbWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhcmlhVGV4dCA9IGFyaWFMYWJlbCB8fCB0aXRsZTtcclxuICAgICAgaWYgKGFyaWFUZXh0KSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBhcmlhVGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGFkZEVsZW1lbnRIVE1MKGVsZW1lbnRIVE1MKTtcclxuXHJcbiAgICBpZiAoZGF0YS5vbkluaXQpIHtcclxuICAgICAgZGF0YS5vbkluaXQoZWxlbWVudCwgcHN3cCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEub25DbGljaykge1xyXG4gICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5vbkNsaWNrID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgcHN3cFtkYXRhLm9uQ2xpY2tdKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICBkYXRhLm9uQ2xpY2soZSwgZWxlbWVudCwgcHN3cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvcCBiYXIgaXMgZGVmYXVsdCBwb3NpdGlvblxyXG4gICAgY29uc3QgYXBwZW5kVG8gPSBkYXRhLmFwcGVuZFRvIHx8ICdiYXInO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IHVuZGVmaW5lZH0gcm9vdCBlbGVtZW50IGJ5IGRlZmF1bHQgKi9cclxuICAgIGxldCBjb250YWluZXIgPSBwc3dwLmVsZW1lbnQ7XHJcbiAgICBpZiAoYXBwZW5kVG8gPT09ICdiYXInKSB7XHJcbiAgICAgIGlmICghcHN3cC50b3BCYXIpIHtcclxuICAgICAgICBwc3dwLnRvcEJhciA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX3RvcC1iYXIgcHN3cF9faGlkZS1vbi1jbG9zZScsICdkaXYnLCBwc3dwLnNjcm9sbFdyYXApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRhaW5lciA9IHBzd3AudG9wQmFyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZWxlbWVudCBvdXRzaWRlIG9mIHRvcCBiYXIgZ2V0cyBhIHNlY29uZGFyeSBjbGFzc1xyXG4gICAgICAvLyB0aGF0IG1ha2VzIGVsZW1lbnQgZmFkZSBvdXQgb24gY2xvc2VcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwc3dwX19oaWRlLW9uLWNsb3NlJyk7XHJcblxyXG4gICAgICBpZiAoYXBwZW5kVG8gPT09ICd3cmFwcGVyJykge1xyXG4gICAgICAgIGNvbnRhaW5lciA9IHBzd3Auc2Nyb2xsV3JhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQocHN3cC5hcHBseUZpbHRlcnMoJ3VpRWxlbWVudCcsIGVsZW1lbnQsIGRhdGEpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgQmFja3dhcmQgYW5kIGZvcndhcmQgYXJyb3cgYnV0dG9uc1xyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTmV4dEJ1dHRvbl1cclxuICovXHJcbmZ1bmN0aW9uIGluaXRBcnJvd0J1dHRvbihlbGVtZW50LCBwc3dwLCBpc05leHRCdXR0b24pIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Bzd3BfX2J1dHRvbi0tYXJyb3cnKTtcclxuICAvLyBEbXl0cm8gU2VtZW5vdjogdGhpcyBzaG91bGQgcG9pbnQgdG8gYSB1bmlxdWUgaWQgZm9yIHRoaXMgaW5zdGFuY2VcclxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsICdwc3dwX19pdGVtcycpO1xyXG4gIHBzd3Aub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgIGlmICghcHN3cC5vcHRpb25zLmxvb3ApIHtcclxuICAgICAgaWYgKGlzTmV4dEJ1dHRvbikge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovXHJcbiAgICAgICAgKGVsZW1lbnQpLmRpc2FibGVkID0gIShwc3dwLmN1cnJJbmRleCA8IHBzd3AuZ2V0TnVtSXRlbXMoKSAtIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovXHJcbiAgICAgICAgKGVsZW1lbnQpLmRpc2FibGVkID0gIShwc3dwLmN1cnJJbmRleCA+IDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7VUlFbGVtZW50RGF0YX0gKi9cclxuY29uc3QgYXJyb3dQcmV2ID0ge1xyXG4gIG5hbWU6ICdhcnJvd1ByZXYnLFxyXG4gIGNsYXNzTmFtZTogJ3Bzd3BfX2J1dHRvbi0tYXJyb3ctLXByZXYnLFxyXG4gIHRpdGxlOiAnUHJldmlvdXMnLFxyXG4gIG9yZGVyOiAxMCxcclxuICBpc0J1dHRvbjogdHJ1ZSxcclxuICBhcHBlbmRUbzogJ3dyYXBwZXInLFxyXG4gIGh0bWw6IHtcclxuICAgIGlzQ3VzdG9tU1ZHOiB0cnVlLFxyXG4gICAgc2l6ZTogNjAsXHJcbiAgICBpbm5lcjogJzxwYXRoIGQ9XCJNMjkgNDNsLTMgMy0xNi0xNiAxNi0xNiAzIDMtMTMgMTMgMTMgMTN6XCIgaWQ9XCJwc3dwX19pY24tYXJyb3dcIi8+JyxcclxuICAgIG91dGxpbmVJRDogJ3Bzd3BfX2ljbi1hcnJvdydcclxuICB9LFxyXG4gIG9uQ2xpY2s6ICdwcmV2JyxcclxuICBvbkluaXQ6IGluaXRBcnJvd0J1dHRvblxyXG59O1xyXG5cclxuLyoqIEB0eXBlIHtVSUVsZW1lbnREYXRhfSAqL1xyXG5jb25zdCBhcnJvd05leHQgPSB7XHJcbiAgbmFtZTogJ2Fycm93TmV4dCcsXHJcbiAgY2xhc3NOYW1lOiAncHN3cF9fYnV0dG9uLS1hcnJvdy0tbmV4dCcsXHJcbiAgdGl0bGU6ICdOZXh0JyxcclxuICBvcmRlcjogMTEsXHJcbiAgaXNCdXR0b246IHRydWUsXHJcbiAgYXBwZW5kVG86ICd3cmFwcGVyJyxcclxuICBodG1sOiB7XHJcbiAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgIHNpemU6IDYwLFxyXG4gICAgaW5uZXI6ICc8dXNlIHhsaW5rOmhyZWY9XCIjcHN3cF9faWNuLWFycm93XCIvPicsXHJcbiAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tYXJyb3cnXHJcbiAgfSxcclxuICBvbkNsaWNrOiAnbmV4dCcsXHJcbiAgb25Jbml0OiAoZWwsIHBzd3ApID0+IHtcclxuICAgIGluaXRBcnJvd0J1dHRvbihlbCwgcHN3cCwgdHJ1ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuY29uc3QgY2xvc2VCdXR0b24gPSB7XHJcbiAgbmFtZTogJ2Nsb3NlJyxcclxuICB0aXRsZTogJ0Nsb3NlJyxcclxuICBvcmRlcjogMjAsXHJcbiAgaXNCdXR0b246IHRydWUsXHJcbiAgaHRtbDoge1xyXG4gICAgaXNDdXN0b21TVkc6IHRydWUsXHJcbiAgICBpbm5lcjogJzxwYXRoIGQ9XCJNMjQgMTBsLTItMi02IDYtNi02LTIgMiA2IDYtNiA2IDIgMiA2LTYgNiA2IDItMi02LTZ6XCIgaWQ9XCJwc3dwX19pY24tY2xvc2VcIi8+JyxcclxuICAgIG91dGxpbmVJRDogJ3Bzd3BfX2ljbi1jbG9zZSdcclxuICB9LFxyXG4gIG9uQ2xpY2s6ICdjbG9zZSdcclxufTtcclxuXHJcbi8qKiBAdHlwZSB7aW1wb3J0KCcuL3VpLWVsZW1lbnQuanMnKS5VSUVsZW1lbnREYXRhfSBVSUVsZW1lbnREYXRhICovXHJcbmNvbnN0IHpvb21CdXR0b24gPSB7XHJcbiAgbmFtZTogJ3pvb20nLFxyXG4gIHRpdGxlOiAnWm9vbScsXHJcbiAgb3JkZXI6IDEwLFxyXG4gIGlzQnV0dG9uOiB0cnVlLFxyXG4gIGh0bWw6IHtcclxuICAgIGlzQ3VzdG9tU1ZHOiB0cnVlLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgIGlubmVyOiAnPHBhdGggZD1cIk0xNy40MjYgMTkuOTI2YTYgNiAwIDEgMSAxLjUtMS41TDIzIDIyLjUgMjEuNSAyNGwtNC4wNzQtNC4wNzR6XCIgaWQ9XCJwc3dwX19pY24tem9vbVwiLz4nXHJcbiAgICAgICsgJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInBzd3BfX3pvb20taWNuLWJhci1oXCIgZD1cIk0xMSAxNnYtMmg2djJ6XCIvPidcclxuICAgICAgKyAnPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwicHN3cF9fem9vbS1pY24tYmFyLXZcIiBkPVwiTTEzIDEyaDJ2NmgtMnpcIi8+JyxcclxuICAgIG91dGxpbmVJRDogJ3Bzd3BfX2ljbi16b29tJ1xyXG4gIH0sXHJcbiAgb25DbGljazogJ3RvZ2dsZVpvb20nXHJcbn07XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgnLi91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG5jb25zdCBsb2FkaW5nSW5kaWNhdG9yID0ge1xyXG4gIG5hbWU6ICdwcmVsb2FkZXInLFxyXG4gIGFwcGVuZFRvOiAnYmFyJyxcclxuICBvcmRlcjogNyxcclxuICBodG1sOiB7XHJcbiAgICBpc0N1c3RvbVNWRzogdHJ1ZSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICBpbm5lcjogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMS4yIDE2YTUuMiA1LjIgMCAxIDEtNS4yLTUuMlY4YTggOCAwIDEgMCA4IDhoLTIuOFpcIiBpZD1cInBzd3BfX2ljbi1sb2FkaW5nXCIvPicsXHJcbiAgICBvdXRsaW5lSUQ6ICdwc3dwX19pY24tbG9hZGluZydcclxuICB9LFxyXG4gIG9uSW5pdDogKGluZGljYXRvckVsZW1lbnQsIHBzd3ApID0+IHtcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gKi9cclxuICAgIGxldCBpc1Zpc2libGU7XHJcbiAgICAvKiogQHR5cGUge05vZGVKUy5UaW1lb3V0IHwgbnVsbH0gKi9cclxuICAgIGxldCBkZWxheVRpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhZGRcclxuICAgICAqL1xyXG4gICAgY29uc3QgdG9nZ2xlSW5kaWNhdG9yQ2xhc3MgPSAoY2xhc3NOYW1lLCBhZGQpID0+IHtcclxuICAgICAgaW5kaWNhdG9yRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwX19wcmVsb2FkZXItLScgKyBjbGFzc05hbWUsIGFkZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2aXNpYmxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHNldEluZGljYXRvclZpc2liaWxpdHkgPSAodmlzaWJsZSkgPT4ge1xyXG4gICAgICBpZiAoaXNWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgaXNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0b2dnbGVJbmRpY2F0b3JDbGFzcygnYWN0aXZlJywgdmlzaWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgaWYgKCFwc3dwLmN1cnJTbGlkZT8uY29udGVudC5pc0xvYWRpbmcoKSkge1xyXG4gICAgICAgIHNldEluZGljYXRvclZpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgICAgIGlmIChkZWxheVRpbWVvdXQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVvdXQpO1xyXG4gICAgICAgICAgZGVsYXlUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWRlbGF5VGltZW91dCkge1xyXG4gICAgICAgIC8vIGRpc3BsYXkgbG9hZGluZyBpbmRpY2F0b3Igd2l0aCBkZWxheVxyXG4gICAgICAgIGRlbGF5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SW5kaWNhdG9yVmlzaWJpbGl0eShCb29sZWFuKHBzd3AuY3VyclNsaWRlPy5jb250ZW50LmlzTG9hZGluZygpKSk7XHJcbiAgICAgICAgICBkZWxheVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH0sIHBzd3Aub3B0aW9ucy5wcmVsb2FkZXJEZWxheSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHN3cC5vbignY2hhbmdlJywgdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSk7XHJcblxyXG4gICAgcHN3cC5vbignbG9hZENvbXBsZXRlJywgKGUpID0+IHtcclxuICAgICAgaWYgKHBzd3AuY3VyclNsaWRlID09PSBlLnNsaWRlKSB7XHJcbiAgICAgICAgdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBleHBvc2UgdGhlIG1ldGhvZFxyXG4gICAgaWYgKHBzd3AudWkpIHtcclxuICAgICAgcHN3cC51aS51cGRhdGVQcmVsb2FkZXJWaXNpYmlsaXR5ID0gdXBkYXRlUHJlbG9hZGVyVmlzaWJpbGl0eTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgnLi91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG5jb25zdCBjb3VudGVySW5kaWNhdG9yID0ge1xyXG4gIG5hbWU6ICdjb3VudGVyJyxcclxuICBvcmRlcjogNSxcclxuICBvbkluaXQ6IChjb3VudGVyRWxlbWVudCwgcHN3cCkgPT4ge1xyXG4gICAgcHN3cC5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBjb3VudGVyRWxlbWVudC5pbm5lclRleHQgPSAocHN3cC5jdXJySW5kZXggKyAxKVxyXG4gICAgICAgICsgcHN3cC5vcHRpb25zLmluZGV4SW5kaWNhdG9yU2VwXHJcbiAgICAgICAgKyBwc3dwLmdldE51bUl0ZW1zKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vcGhvdG9zd2lwZS5qcycpLmRlZmF1bHR9IFBob3RvU3dpcGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuXHJcbi8qKlxyXG4gKiBTZXQgc3BlY2lhbCBjbGFzcyBvbiBlbGVtZW50IHdoZW4gaW1hZ2UgaXMgem9vbWVkLlxyXG4gKlxyXG4gKiBCeSBkZWZhdWx0LCBpdCBpcyB1c2VkIHRvIGFkanVzdFxyXG4gKiB6b29tIGljb24gYW5kIHpvb20gY3Vyc29yIHZpYSBDU1MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNab29tZWRJblxyXG4gKi9cclxuZnVuY3Rpb24gc2V0Wm9vbWVkSW4oZWwsIGlzWm9vbWVkSW4pIHtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwLS16b29tZWQtaW4nLCBpc1pvb21lZEluKTtcclxufVxyXG5cclxuY2xhc3MgVUkge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLmlzUmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtVSUVsZW1lbnREYXRhW119ICovXHJcbiAgICB0aGlzLnVpRWxlbWVudHNEYXRhID0gW107XHJcbiAgICAvKiogQHR5cGUgeyhVSUVsZW1lbnQgfCBVSUVsZW1lbnREYXRhKVtdfSAqL1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHsoKSA9PiB2b2lkfSAqL1xyXG4gICAgdGhpcy51cGRhdGVQcmVsb2FkZXJWaXNpYmlsaXR5ID0gKCkgPT4geyB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2xhc3RVcGRhdGVkWm9vbUxldmVsID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIHRoaXMuaXNSZWdpc3RlcmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnVpRWxlbWVudHNEYXRhID0gW1xyXG4gICAgICBjbG9zZUJ1dHRvbixcclxuICAgICAgYXJyb3dQcmV2LFxyXG4gICAgICBhcnJvd05leHQsXHJcbiAgICAgIHpvb21CdXR0b24sXHJcbiAgICAgIGxvYWRpbmdJbmRpY2F0b3IsXHJcbiAgICAgIGNvdW50ZXJJbmRpY2F0b3JcclxuICAgIF07XHJcblxyXG4gICAgcHN3cC5kaXNwYXRjaCgndWlSZWdpc3RlcicpO1xyXG5cclxuICAgIC8vIHNvcnQgYnkgb3JkZXJcclxuICAgIHRoaXMudWlFbGVtZW50c0RhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAvLyBkZWZhdWx0IG9yZGVyIGlzIDBcclxuICAgICAgcmV0dXJuIChhLm9yZGVyIHx8IDApIC0gKGIub3JkZXIgfHwgMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcblxyXG4gICAgdGhpcy5pc1JlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgdGhpcy51aUVsZW1lbnRzRGF0YS5mb3JFYWNoKCh1aUVsZW1lbnREYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJFbGVtZW50KHVpRWxlbWVudERhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHN3cC5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBwc3dwLmVsZW1lbnQ/LmNsYXNzTGlzdC50b2dnbGUoJ3Bzd3AtLW9uZS1zbGlkZScsIHBzd3AuZ2V0TnVtSXRlbXMoKSA9PT0gMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwc3dwLm9uKCd6b29tUGFuVXBkYXRlJywgKCkgPT4gdGhpcy5fb25ab29tUGFuVXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtVSUVsZW1lbnREYXRhfSBlbGVtZW50RGF0YVxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50RGF0YSkge1xyXG4gICAgaWYgKHRoaXMuaXNSZWdpc3RlcmVkKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMucHVzaChcclxuICAgICAgICBuZXcgVUlFbGVtZW50KHRoaXMucHN3cCwgZWxlbWVudERhdGEpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVpRWxlbWVudHNEYXRhLnB1c2goZWxlbWVudERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZWQgZWFjaCB0aW1lIHpvb20gb3IgcGFuIHBvc2l0aW9uIGlzIGNoYW5nZWQuXHJcbiAgICogVXBkYXRlIGNsYXNzZXMgdGhhdCBjb250cm9sIHZpc2liaWxpdHkgb2Ygem9vbSBidXR0b24gYW5kIGN1cnNvciBpY29uLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfb25ab29tUGFuVXBkYXRlKCkge1xyXG4gICAgY29uc3QgeyB0ZW1wbGF0ZSwgY3VyclNsaWRlLCBvcHRpb25zIH0gPSB0aGlzLnBzd3A7XHJcblxyXG4gICAgaWYgKHRoaXMucHN3cC5vcGVuZXIuaXNDbG9zaW5nIHx8ICF0ZW1wbGF0ZSB8fCAhY3VyclNsaWRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeyBjdXJyWm9vbUxldmVsIH0gPSBjdXJyU2xpZGU7XHJcblxyXG4gICAgLy8gaWYgbm90IG9wZW4geWV0IC0gY2hlY2sgYWdhaW5zdCBpbml0aWFsIHpvb20gbGV2ZWxcclxuICAgIGlmICghdGhpcy5wc3dwLm9wZW5lci5pc09wZW4pIHtcclxuICAgICAgY3Vyclpvb21MZXZlbCA9IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJab29tTGV2ZWwgPT09IHRoaXMuX2xhc3RVcGRhdGVkWm9vbUxldmVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xhc3RVcGRhdGVkWm9vbUxldmVsID0gY3Vyclpvb21MZXZlbDtcclxuXHJcbiAgICBjb25zdCBjdXJyWm9vbUxldmVsRGlmZiA9IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWwgLSBjdXJyU2xpZGUuem9vbUxldmVscy5zZWNvbmRhcnk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBhbmQgc2Vjb25kYXJ5IHpvb20gbGV2ZWxzIGFyZSBhbG1vc3QgZXF1YWxcclxuICAgIGlmIChNYXRoLmFicyhjdXJyWm9vbUxldmVsRGlmZikgPCAwLjAxIHx8ICFjdXJyU2xpZGUuaXNab29tYWJsZSgpKSB7XHJcbiAgICAgIC8vIGRpc2FibGUgem9vbVxyXG4gICAgICBzZXRab29tZWRJbih0ZW1wbGF0ZSwgZmFsc2UpO1xyXG4gICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdwc3dwLS16b29tLWFsbG93ZWQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3Bzd3AtLXpvb20tYWxsb3dlZCcpO1xyXG5cclxuICAgIGNvbnN0IHBvdGVudGlhbFpvb21MZXZlbCA9IGN1cnJab29tTGV2ZWwgPT09IGN1cnJTbGlkZS56b29tTGV2ZWxzLmluaXRpYWxcclxuICAgICAgPyBjdXJyU2xpZGUuem9vbUxldmVscy5zZWNvbmRhcnkgOiBjdXJyU2xpZGUuem9vbUxldmVscy5pbml0aWFsO1xyXG5cclxuICAgIHNldFpvb21lZEluKHRlbXBsYXRlLCBwb3RlbnRpYWxab29tTGV2ZWwgPD0gY3Vyclpvb21MZXZlbCk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuaW1hZ2VDbGlja0FjdGlvbiA9PT0gJ3pvb20nXHJcbiAgICAgIHx8IG9wdGlvbnMuaW1hZ2VDbGlja0FjdGlvbiA9PT0gJ3pvb20tb3ItY2xvc2UnKSB7XHJcbiAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3Bzd3AtLWNsaWNrLXRvLXpvb20nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG4vKiogQHR5cGVkZWYge3sgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaW5uZXJSZWN0PzogeyB3OiBudW1iZXI7IGg6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB9fSBCb3VuZHMgKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcmV0dXJucyBCb3VuZHNcclxuICovXHJcbmZ1bmN0aW9uIGdldEJvdW5kc0J5RWxlbWVudChlbCkge1xyXG4gIGNvbnN0IHRodW1iQXJlYVJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICByZXR1cm4ge1xyXG4gICAgeDogdGh1bWJBcmVhUmVjdC5sZWZ0LFxyXG4gICAgeTogdGh1bWJBcmVhUmVjdC50b3AsXHJcbiAgICB3OiB0aHVtYkFyZWFSZWN0LndpZHRoXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbWFnZVdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbWFnZUhlaWdodFxyXG4gKiBAcmV0dXJucyBCb3VuZHNcclxuICovXHJcbmZ1bmN0aW9uIGdldENyb3BwZWRCb3VuZHNCeUVsZW1lbnQoZWwsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0KSB7XHJcbiAgY29uc3QgdGh1bWJBcmVhUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAvLyBmaWxsIGltYWdlIGludG8gdGhlIGFyZWFcclxuICAvLyAoZG8gdGhleSBzYW1lIGFzIG9iamVjdC1maXQ6Y292ZXIgZG9lcyB0byByZXRyaWV2ZSBjb29yZGluYXRlcylcclxuICBjb25zdCBoUmF0aW8gPSB0aHVtYkFyZWFSZWN0LndpZHRoIC8gaW1hZ2VXaWR0aDtcclxuICBjb25zdCB2UmF0aW8gPSB0aHVtYkFyZWFSZWN0LmhlaWdodCAvIGltYWdlSGVpZ2h0O1xyXG4gIGNvbnN0IGZpbGxab29tTGV2ZWwgPSBoUmF0aW8gPiB2UmF0aW8gPyBoUmF0aW8gOiB2UmF0aW87XHJcblxyXG4gIGNvbnN0IG9mZnNldFggPSAodGh1bWJBcmVhUmVjdC53aWR0aCAtIGltYWdlV2lkdGggKiBmaWxsWm9vbUxldmVsKSAvIDI7XHJcbiAgY29uc3Qgb2Zmc2V0WSA9ICh0aHVtYkFyZWFSZWN0LmhlaWdodCAtIGltYWdlSGVpZ2h0ICogZmlsbFpvb21MZXZlbCkgLyAyO1xyXG5cclxuICAvKipcclxuICAgKiBDb29yZGluYXRlcyBvZiB0aGUgaW1hZ2UsXHJcbiAgICogYXMgaWYgaXQgd2FzIG5vdCBjcm9wcGVkLFxyXG4gICAqIGhlaWdodCBpcyBjYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHlcclxuICAgKlxyXG4gICAqIEB0eXBlIHtCb3VuZHN9XHJcbiAgICovXHJcbiAgY29uc3QgYm91bmRzID0ge1xyXG4gICAgeDogdGh1bWJBcmVhUmVjdC5sZWZ0ICsgb2Zmc2V0WCxcclxuICAgIHk6IHRodW1iQXJlYVJlY3QudG9wICsgb2Zmc2V0WSxcclxuICAgIHc6IGltYWdlV2lkdGggKiBmaWxsWm9vbUxldmVsXHJcbiAgfTtcclxuXHJcbiAgLy8gQ29vcmRpbmF0ZXMgb2YgaW5uZXIgY3JvcCBhcmVhXHJcbiAgLy8gcmVsYXRpdmUgdG8gdGhlIGltYWdlXHJcbiAgYm91bmRzLmlubmVyUmVjdCA9IHtcclxuICAgIHc6IHRodW1iQXJlYVJlY3Qud2lkdGgsXHJcbiAgICBoOiB0aHVtYkFyZWFSZWN0LmhlaWdodCxcclxuICAgIHg6IG9mZnNldFgsXHJcbiAgICB5OiBvZmZzZXRZXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGJvdW5kcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkaW1lbnNpb25zIG9mIHRodW1ibmFpbCBpbWFnZVxyXG4gKiAoY2xpY2sgb24gd2hpY2ggb3BlbnMgcGhvdG9zd2lwZSBvciBjbG9zZXMgcGhvdG9zd2lwZSB0bylcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YVxyXG4gKiBAcGFyYW0ge1Bob3RvU3dpcGV9IGluc3RhbmNlIFBob3RvU3dpcGUgaW5zdGFuY2VcclxuICogQHJldHVybnMge0JvdW5kcyB8IHVuZGVmaW5lZH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFRodW1iQm91bmRzKGluZGV4LCBpdGVtRGF0YSwgaW5zdGFuY2UpIHtcclxuICAvLyBsZWdhY3kgZXZlbnQsIGJlZm9yZSBmaWx0ZXJzIHdlcmUgaW50cm9kdWNlZFxyXG4gIGNvbnN0IGV2ZW50ID0gaW5zdGFuY2UuZGlzcGF0Y2goJ3RodW1iQm91bmRzJywge1xyXG4gICAgaW5kZXgsXHJcbiAgICBpdGVtRGF0YSxcclxuICAgIGluc3RhbmNlXHJcbiAgfSk7XHJcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gIGlmIChldmVudC50aHVtYkJvdW5kcykge1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcmV0dXJuIGV2ZW50LnRodW1iQm91bmRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbGVtZW50IH0gPSBpdGVtRGF0YTtcclxuICAvKiogQHR5cGUge0JvdW5kcyB8IHVuZGVmaW5lZH0gKi9cclxuICBsZXQgdGh1bWJCb3VuZHM7XHJcbiAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXHJcbiAgbGV0IHRodW1ibmFpbDtcclxuXHJcbiAgaWYgKGVsZW1lbnQgJiYgaW5zdGFuY2Uub3B0aW9ucy50aHVtYlNlbGVjdG9yICE9PSBmYWxzZSkge1xyXG4gICAgY29uc3QgdGh1bWJTZWxlY3RvciA9IGluc3RhbmNlLm9wdGlvbnMudGh1bWJTZWxlY3RvciB8fCAnaW1nJztcclxuICAgIHRodW1ibmFpbCA9IGVsZW1lbnQubWF0Y2hlcyh0aHVtYlNlbGVjdG9yKVxyXG4gICAgICA/IGVsZW1lbnQgOiAvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi8gKGVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aHVtYlNlbGVjdG9yKSk7XHJcbiAgfVxyXG5cclxuICB0aHVtYm5haWwgPSBpbnN0YW5jZS5hcHBseUZpbHRlcnMoJ3RodW1iRWwnLCB0aHVtYm5haWwsIGl0ZW1EYXRhLCBpbmRleCk7XHJcblxyXG4gIGlmICh0aHVtYm5haWwpIHtcclxuICAgIGlmICghaXRlbURhdGEudGh1bWJDcm9wcGVkKSB7XHJcbiAgICAgIHRodW1iQm91bmRzID0gZ2V0Qm91bmRzQnlFbGVtZW50KHRodW1ibmFpbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHVtYkJvdW5kcyA9IGdldENyb3BwZWRCb3VuZHNCeUVsZW1lbnQoXHJcbiAgICAgICAgdGh1bWJuYWlsLFxyXG4gICAgICAgIGl0ZW1EYXRhLndpZHRoIHx8IGl0ZW1EYXRhLncgfHwgMCxcclxuICAgICAgICBpdGVtRGF0YS5oZWlnaHQgfHwgaXRlbURhdGEuaCB8fCAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKCd0aHVtYkJvdW5kcycsIHRodW1iQm91bmRzLCBpdGVtRGF0YSwgaW5kZXgpO1xyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vbGlnaHRib3gvbGlnaHRib3guanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlTGlnaHRib3ggKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuUGhvdG9Td2lwZU9wdGlvbnN9IFBob3RvU3dpcGVPcHRpb25zICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9waG90b3N3aXBlLmpzJykuRGF0YVNvdXJjZX0gRGF0YVNvdXJjZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vdWkvdWktZWxlbWVudC5qcycpLlVJRWxlbWVudERhdGF9IFVJRWxlbWVudERhdGEgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NsaWRlL2NvbnRlbnQuanMnKS5kZWZhdWx0fSBDb250ZW50RGVmYXVsdCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvem9vbS1sZXZlbC5qcycpLmRlZmF1bHR9IFpvb21MZXZlbCAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2xpZGUvZ2V0LXRodW1iLWJvdW5kcy5qcycpLkJvdW5kc30gQm91bmRzICovXHJcblxyXG4vKipcclxuICogQWxsb3cgYWRkaW5nIGFuIGFyYml0cmFyeSBwcm9wcyB0byB0aGUgQ29udGVudFxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2N1c3RvbS1jb250ZW50LyN1c2luZy13ZWJwLWltYWdlLWZvcm1hdFxyXG4gKiBAdHlwZWRlZiB7Q29udGVudERlZmF1bHQgJiBSZWNvcmQ8c3RyaW5nLCBhbnk+fSBDb250ZW50XHJcbiAqL1xyXG4vKiogQHR5cGVkZWYge3sgeD86IG51bWJlcjsgeT86IG51bWJlciB9fSBQb2ludCAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBob3RvU3dpcGVFdmVudHNNYXAgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vYWRkaW5nLXVpLWVsZW1lbnRzL1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSB1aVJlZ2lzdGVyXHJcbiAqIEBwcm9wIHt7IGRhdGE6IFVJRWxlbWVudERhdGEgfX0gdWlFbGVtZW50Q3JlYXRlXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNpbml0aWFsaXphdGlvbi1ldmVudHNcclxuICpcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmVmb3JlT3BlblxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBmaXJzdFVwZGF0ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsTGF5b3V0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNoYW5nZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBhZnRlckluaXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gYmluZEV2ZW50c1xyXG4gKlxyXG4gKlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2V2ZW50cy8jb3BlbmluZy1vci1jbG9zaW5nLXRyYW5zaXRpb24tZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IG9wZW5pbmdBbmltYXRpb25TdGFydFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBvcGVuaW5nQW5pbWF0aW9uRW5kXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGNsb3NpbmdBbmltYXRpb25TdGFydFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zaW5nQW5pbWF0aW9uRW5kXHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNjbG9zaW5nLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBjbG9zZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBkZXN0cm95XHJcbiAqXHJcbiAqXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZXZlbnRzLyNwb2ludGVyLWFuZC1nZXN0dXJlLWV2ZW50c1xyXG4gKlxyXG4gKiBAcHJvcCB7eyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gcG9pbnRlckRvd25cclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IH19IHBvaW50ZXJNb3ZlXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBwb2ludGVyVXBcclxuICogQHByb3Age3sgYmdPcGFjaXR5OiBudW1iZXIgfX0gcGluY2hDbG9zZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcGFuWTogbnVtYmVyIH19IHZlcnRpY2FsRHJhZyBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICpcclxuICpcclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9ldmVudHMvI3NsaWRlLWNvbnRlbnQtZXZlbnRzXHJcbiAqXHJcbiAqIEBwcm9wIHt7IGNvbnRlbnQ6IENvbnRlbnQgfX0gY29udGVudEluaXRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgaXNMYXp5OiBib29sZWFuIH19IGNvbnRlbnRMb2FkIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyBpc0xhenk6IGJvb2xlYW4gfX0gY29udGVudExvYWRJbWFnZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgc2xpZGU6IFNsaWRlOyBpc0Vycm9yPzogYm9vbGVhbiB9fSBsb2FkQ29tcGxldGVcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudDsgc2xpZGU6IFNsaWRlIH19IGxvYWRFcnJvclxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9fSBjb250ZW50UmVzaXplIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50OyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgc2xpZGU6IFNsaWRlIH19IGltYWdlU2l6ZUNoYW5nZVxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRMYXp5TG9hZCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QXBwZW5kIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnRBY3RpdmF0ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50RGVhY3RpdmF0ZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50UmVtb3ZlIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBjb250ZW50OiBDb250ZW50IH19IGNvbnRlbnREZXN0cm95IGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKlxyXG4gKlxyXG4gKiB1bmRvY3VtZW50ZWRcclxuICpcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gaW1hZ2VDbGlja0FjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gYmdDbGlja0FjdGlvbiBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgcG9pbnQ6IFBvaW50OyBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfX0gdGFwQWN0aW9uIGNhbiBiZSBkZWZhdWx0IHByZXZlbnRlZFxyXG4gKiBAcHJvcCB7eyBwb2ludDogUG9pbnQ7IG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB9fSBkb3VibGVUYXBBY3Rpb24gY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqXHJcbiAqIEBwcm9wIHt7IG9yaWdpbmFsRXZlbnQ6IEtleWJvYXJkRXZlbnQgfX0ga2V5ZG93biBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgeDogbnVtYmVyOyBkcmFnZ2luZzogYm9vbGVhbiB9fSBtb3ZlTWFpblNjcm9sbFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gZmlyc3Rab29tUGFuXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB8IHVuZGVmaW5lZCwgZGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyIH19IGdldHRpbmdEYXRhXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGJlZm9yZVJlc2l6ZVxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSByZXNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gdmlld3BvcnRTaXplXHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IHVwZGF0ZVNjcm9sbE9mZnNldFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVJbml0XHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhZnRlclNldENvbnRlbnRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlTG9hZFxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gYXBwZW5kSGVhdnkgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IHNsaWRlOiBTbGlkZSB9fSBhcHBlbmRIZWF2eUNvbnRlbnRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlQWN0aXZhdGVcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IHNsaWRlRGVhY3RpdmF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gc2xpZGVEZXN0cm95XHJcbiAqIEBwcm9wIHt7IGRlc3Rab29tTGV2ZWw6IG51bWJlciwgY2VudGVyUG9pbnQ6IFBvaW50IHwgdW5kZWZpbmVkLCB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciB8IGZhbHNlIHwgdW5kZWZpbmVkIH19IGJlZm9yZVpvb21Ub1xyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gem9vbVBhblVwZGF0ZVxyXG4gKiBAcHJvcCB7eyBzbGlkZTogU2xpZGUgfX0gaW5pdGlhbFpvb21QYW5cclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGNhbGNTbGlkZVNpemVcclxuICogQHByb3Age3VuZGVmaW5lZH0gcmVzb2x1dGlvbkNoYW5nZWRcclxuICogQHByb3Age3sgb3JpZ2luYWxFdmVudDogV2hlZWxFdmVudCB9fSB3aGVlbCBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3sgY29udGVudDogQ29udGVudCB9fSBjb250ZW50QXBwZW5kSW1hZ2UgY2FuIGJlIGRlZmF1bHQgcHJldmVudGVkXHJcbiAqIEBwcm9wIHt7IGluZGV4OiBudW1iZXI7IGl0ZW1EYXRhOiBTbGlkZURhdGEgfX0gbGF6eUxvYWRTbGlkZSBjYW4gYmUgZGVmYXVsdCBwcmV2ZW50ZWRcclxuICogQHByb3Age3VuZGVmaW5lZH0gbGF6eUxvYWRcclxuICogQHByb3Age3sgc2xpZGU6IFNsaWRlIH19IGNhbGNCb3VuZHNcclxuICogQHByb3Age3sgem9vbUxldmVsczogWm9vbUxldmVsLCBzbGlkZURhdGE6IFNsaWRlRGF0YSB9fSB6b29tTGV2ZWxzVXBkYXRlXHJcbiAqXHJcbiAqXHJcbiAqIGxlZ2FjeVxyXG4gKlxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0XHJcbiAqIEBwcm9wIHt1bmRlZmluZWR9IGluaXRpYWxab29tSW5cclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21PdXRcclxuICogQHByb3Age3VuZGVmaW5lZH0gaW5pdGlhbFpvb21JbkVuZFxyXG4gKiBAcHJvcCB7dW5kZWZpbmVkfSBpbml0aWFsWm9vbU91dEVuZFxyXG4gKiBAcHJvcCB7eyBkYXRhU291cmNlOiBEYXRhU291cmNlIHwgdW5kZWZpbmVkLCBudW1JdGVtczogbnVtYmVyIH19IG51bUl0ZW1zXHJcbiAqIEBwcm9wIHt7IGl0ZW1EYXRhOiBTbGlkZURhdGE7IGluZGV4OiBudW1iZXIgfX0gaXRlbURhdGFcclxuICogQHByb3Age3sgaW5kZXg6IG51bWJlciwgaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5zdGFuY2U6IFBob3RvU3dpcGUgfX0gdGh1bWJCb3VuZHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUGhvdG9Td2lwZUZpbHRlcnNNYXAgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzL1xyXG4gKlxyXG4gKiBAcHJvcCB7KG51bUl0ZW1zOiBudW1iZXIsIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UgfCB1bmRlZmluZWQpID0+IG51bWJlcn0gbnVtSXRlbXNcclxuICogTW9kaWZ5IHRoZSB0b3RhbCBhbW91bnQgb2Ygc2xpZGVzLiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI251bWl0ZW1zXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXRlbURhdGE6IFNsaWRlRGF0YSwgaW5kZXg6IG51bWJlcikgPT4gU2xpZGVEYXRhfSBpdGVtRGF0YVxyXG4gKiBNb2RpZnkgc2xpZGUgaXRlbSBkYXRhLiBFeGFtcGxlIG9uIERhdGEgc291cmNlcyBwYWdlLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2l0ZW1kYXRhXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXRlbURhdGE6IFNsaWRlRGF0YSwgZWxlbWVudDogSFRNTEVsZW1lbnQsIGxpbmtFbDogSFRNTEFuY2hvckVsZW1lbnQpID0+IFNsaWRlRGF0YX0gZG9tSXRlbURhdGFcclxuICogTW9kaWZ5IGl0ZW0gZGF0YSB3aGVuIGl0J3MgcGFyc2VkIGZyb20gRE9NIGVsZW1lbnQuIEV4YW1wbGUgb24gRGF0YSBzb3VyY2VzIHBhZ2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jZG9taXRlbWRhdGFcclxuICpcclxuICogQHByb3AgeyhjbGlja2VkSW5kZXg6IG51bWJlciwgZTogTW91c2VFdmVudCwgaW5zdGFuY2U6IFBob3RvU3dpcGVMaWdodGJveCkgPT4gbnVtYmVyfSBjbGlja2VkSW5kZXhcclxuICogTW9kaWZ5IGNsaWNrZWQgZ2FsbGVyeSBpdGVtIGluZGV4LlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2NsaWNrZWRpbmRleFxyXG4gKlxyXG4gKiBAcHJvcCB7KHBsYWNlaG9sZGVyU3JjOiBzdHJpbmcgfCBmYWxzZSwgY29udGVudDogQ29udGVudCkgPT4gc3RyaW5nIHwgZmFsc2V9IHBsYWNlaG9sZGVyU3JjXHJcbiAqIE1vZGlmeSBwbGFjZWhvbGRlciBpbWFnZSBzb3VyY2UuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jcGxhY2Vob2xkZXJzcmNcclxuICpcclxuICogQHByb3Ageyhpc0NvbnRlbnRMb2FkaW5nOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSBpc0NvbnRlbnRMb2FkaW5nXHJcbiAqIE1vZGlmeSBpZiB0aGUgY29udGVudCBpcyBjdXJyZW50bHkgbG9hZGluZy5cclxuICogaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9maWx0ZXJzLyNpc2NvbnRlbnRsb2FkaW5nXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNDb250ZW50Wm9vbWFibGU6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzQ29udGVudFpvb21hYmxlXHJcbiAqIE1vZGlmeSBpZiB0aGUgY29udGVudCBjYW4gYmUgem9vbWVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lzY29udGVudHpvb21hYmxlXHJcbiAqXHJcbiAqIEBwcm9wIHsodXNlQ29udGVudFBsYWNlaG9sZGVyOiBib29sZWFuLCBjb250ZW50OiBDb250ZW50KSA9PiBib29sZWFufSB1c2VDb250ZW50UGxhY2Vob2xkZXJcclxuICogTW9kaWZ5IGlmIHRoZSBwbGFjZWhvbGRlciBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGNvbnRlbnQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdXNlY29udGVudHBsYWNlaG9sZGVyXHJcbiAqXHJcbiAqIEBwcm9wIHsoaXNLZWVwaW5nUGxhY2Vob2xkZXI6IGJvb2xlYW4sIGNvbnRlbnQ6IENvbnRlbnQpID0+IGJvb2xlYW59IGlzS2VlcGluZ1BsYWNlaG9sZGVyXHJcbiAqIE1vZGlmeSBpZiB0aGUgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIGtlcHQgYWZ0ZXIgdGhlIGNvbnRlbnQgaXMgbG9hZGVkLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI2lza2VlcGluZ3BsYWNlaG9sZGVyXHJcbiAqXHJcbiAqXHJcbiAqIEBwcm9wIHsoY29udGVudEVycm9yRWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbnRlbnQ6IENvbnRlbnQpID0+IEhUTUxFbGVtZW50fSBjb250ZW50RXJyb3JFbGVtZW50XHJcbiAqIE1vZGlmeSBhbiBlbGVtZW50IHdoZW4gdGhlIGNvbnRlbnQgaGFzIGVycm9yIHN0YXRlIChmb3IgZXhhbXBsZSwgaWYgaW1hZ2UgY2Fubm90IGJlIGxvYWRlZCkuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jY29udGVudGVycm9yZWxlbWVudFxyXG4gKlxyXG4gKiBAcHJvcCB7KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhOiBVSUVsZW1lbnREYXRhKSA9PiBIVE1MRWxlbWVudH0gdWlFbGVtZW50XHJcbiAqIE1vZGlmeSBhIFVJIGVsZW1lbnQgdGhhdCdzIGJlaW5nIGNyZWF0ZWQuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdWllbGVtZW50XHJcbiAqXHJcbiAqIEBwcm9wIHsodGh1bWJuYWlsOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IEhUTUxFbGVtZW50fSB0aHVtYkVsXHJcbiAqIE1vZGlmeSB0aGUgdGh1Ym1uYWlsIGVsZW1lbnQgZnJvbSB3aGljaCBvcGVuaW5nIHpvb20gYW5pbWF0aW9uIHN0YXJ0cyBvciBlbmRzLlxyXG4gKiBodHRwczovL3Bob3Rvc3dpcGUuY29tL2ZpbHRlcnMvI3RodW1iZWxcclxuICpcclxuICogQHByb3Ageyh0aHVtYkJvdW5kczogQm91bmRzIHwgdW5kZWZpbmVkLCBpdGVtRGF0YTogU2xpZGVEYXRhLCBpbmRleDogbnVtYmVyKSA9PiBCb3VuZHN9IHRodW1iQm91bmRzXHJcbiAqIE1vZGlmeSB0aGUgdGh1Ym1uYWlsIGJvdW5kcyBmcm9tIHdoaWNoIG9wZW5pbmcgem9vbSBhbmltYXRpb24gc3RhcnRzIG9yIGVuZHMuXHJcbiAqIGh0dHBzOi8vcGhvdG9zd2lwZS5jb20vZmlsdGVycy8jdGh1bWJib3VuZHNcclxuICpcclxuICogQHByb3AgeyhzcmNzZXRTaXplc1dpZHRoOiBudW1iZXIsIGNvbnRlbnQ6IENvbnRlbnQpID0+IG51bWJlcn0gc3Jjc2V0U2l6ZXNXaWR0aFxyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVGaWx0ZXJzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHt7IGZuOiBQaG90b1N3aXBlRmlsdGVyc01hcFtUXSwgcHJpb3JpdHk6IG51bWJlciB9fSBGaWx0ZXJcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdIGV4dGVuZHMgdW5kZWZpbmVkID8gUGhvdG9Td2lwZUV2ZW50PFQ+IDogUGhvdG9Td2lwZUV2ZW50PFQ+ICYgUGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gQXVnbWVudGVkRXZlbnRcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqIEB0eXBlZGVmIHsoZXZlbnQ6IEF1Z21lbnRlZEV2ZW50PFQ+KSA9PiB2b2lkfSBFdmVudENhbGxiYWNrXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgUGhvdG9Td2lwZSBldmVudCBvYmplY3RcclxuICpcclxuICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAqL1xyXG5jbGFzcyBQaG90b1N3aXBlRXZlbnQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7VH0gdHlwZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUV2ZW50c01hcFtUXX0gW2RldGFpbHNdXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodHlwZSwgZGV0YWlscykge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xyXG4gICAgaWYgKGRldGFpbHMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZXRhaWxzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCkge1xyXG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQaG90b1N3aXBlIGJhc2UgY2xhc3MgdGhhdCBjYW4gbGlzdGVuIGFuZCBkaXNwYXRjaCBmb3IgZXZlbnRzLlxyXG4gKiBTaGFyZWQgYnkgUGhvdG9Td2lwZSBDb3JlIGFuZCBQaG90b1N3aXBlIExpZ2h0Ym94LCBleHRlbmRlZCBieSBiYXNlLmpzXHJcbiAqL1xyXG5jbGFzcyBFdmVudGFibGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7eyBbVCBpbiBrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwXT86ICgoZXZlbnQ6IEF1Z21lbnRlZEV2ZW50PFQ+KSA9PiB2b2lkKVtdIH19XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge3sgW1QgaW4ga2V5b2YgUGhvdG9Td2lwZUZpbHRlcnNNYXBdPzogRmlsdGVyPFQ+W10gfX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZmlsdGVycyA9IHt9O1xyXG5cclxuICAgIC8qKiBAdHlwZSB7UGhvdG9Td2lwZSB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMucHN3cCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKiogQHR5cGUge1Bob3RvU3dpcGVPcHRpb25zIHwgdW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5vcHRpb25zID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF19IGZuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByaW9yaXR5XHJcbiAgICovXHJcbiAgYWRkRmlsdGVyKG5hbWUsIGZuLCBwcmlvcml0eSA9IDEwMCkge1xyXG4gICAgaWYgKCF0aGlzLl9maWx0ZXJzW25hbWVdKSB7XHJcbiAgICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9maWx0ZXJzW25hbWVdPy5wdXNoKHsgZm4sIHByaW9yaXR5IH0pO1xyXG4gICAgdGhpcy5fZmlsdGVyc1tuYW1lXT8uc29ydCgoZjEsIGYyKSA9PiBmMS5wcmlvcml0eSAtIGYyLnByaW9yaXR5KTtcclxuXHJcbiAgICB0aGlzLnBzd3A/LmFkZEZpbHRlcihuYW1lLCBmbiwgcHJpb3JpdHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZUZpbHRlcnNNYXBbVF19IGZuXHJcbiAgICovXHJcbiAgcmVtb3ZlRmlsdGVyKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAodGhpcy5fZmlsdGVyc1tuYW1lXSkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0gPSB0aGlzLl9maWx0ZXJzW25hbWVdLmZpbHRlcihmaWx0ZXIgPT4gKGZpbHRlci5mbiAhPT0gZm4pKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wc3dwKSB7XHJcbiAgICAgIHRoaXMucHN3cC5yZW1vdmVGaWx0ZXIobmFtZSwgZm4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRmlsdGVyc01hcH0gVFxyXG4gICAqIEBwYXJhbSB7VH0gbmFtZVxyXG4gICAqIEBwYXJhbSB7UGFyYW1ldGVyczxQaG90b1N3aXBlRmlsdGVyc01hcFtUXT59IGFyZ3NcclxuICAgKiBAcmV0dXJucyB7UGFyYW1ldGVyczxQaG90b1N3aXBlRmlsdGVyc01hcFtUXT5bMF19XHJcbiAgICovXHJcbiAgYXBwbHlGaWx0ZXJzKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgIHRoaXMuX2ZpbHRlcnNbbmFtZV0/LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgIGFyZ3NbMF0gPSBmaWx0ZXIuZm4uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcmdzWzBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrPFQ+fSBmblxyXG4gICAqL1xyXG4gIG9uKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xyXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXT8ucHVzaChmbik7XHJcblxyXG4gICAgLy8gV2hlbiBiaW5kaW5nIGV2ZW50cyB0byBsaWdodGJveCxcclxuICAgIC8vIGFsc28gYmluZCBldmVudHMgdG8gUGhvdG9Td2lwZSBDb3JlLFxyXG4gICAgLy8gaWYgaXQncyBvcGVuLlxyXG4gICAgdGhpcy5wc3dwPy5vbihuYW1lLCBmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge2tleW9mIFBob3RvU3dpcGVFdmVudHNNYXB9IFRcclxuICAgKiBAcGFyYW0ge1R9IG5hbWVcclxuICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2s8VD59IGZuXHJcbiAgICovXHJcbiAgb2ZmKG5hbWUsIGZuKSB7XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdLmZpbHRlcihsaXN0ZW5lciA9PiAoZm4gIT09IGxpc3RlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wc3dwPy5vZmYobmFtZSwgZm4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHRlbXBsYXRlIHtrZXlvZiBQaG90b1N3aXBlRXZlbnRzTWFwfSBUXHJcbiAgICogQHBhcmFtIHtUfSBuYW1lXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlRXZlbnRzTWFwW1RdfSBbZGV0YWlsc11cclxuICAgKiBAcmV0dXJucyB7QXVnbWVudGVkRXZlbnQ8VD59XHJcbiAgICovXHJcbiAgZGlzcGF0Y2gobmFtZSwgZGV0YWlscykge1xyXG4gICAgaWYgKHRoaXMucHN3cCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wc3dwLmRpc3BhdGNoKG5hbWUsIGRldGFpbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gLyoqIEB0eXBlIHtBdWdtZW50ZWRFdmVudDxUPn0gKi8gKG5ldyBQaG90b1N3aXBlRXZlbnQobmFtZSwgZGV0YWlscykpO1xyXG5cclxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXT8uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcclxuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGFjZWhvbGRlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBmYWxzZX0gaW1hZ2VTcmNcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbWFnZVNyYywgY29udGFpbmVyKSB7XHJcbiAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXJcclxuICAgIC8vIChzdHJldGNoZWQgdGh1bWJuYWlsIG9yIHNpbXBsZSBkaXYgYmVoaW5kIHRoZSBtYWluIGltYWdlKVxyXG4gICAgLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQgfCBudWxsfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgJ3Bzd3BfX2ltZyBwc3dwX19pbWctLXBsYWNlaG9sZGVyJyxcclxuICAgICAgaW1hZ2VTcmMgPyAnaW1nJyA6ICdkaXYnLFxyXG4gICAgICBjb250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltZ0VsID0gLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqLyAodGhpcy5lbGVtZW50KTtcclxuICAgICAgaW1nRWwuZGVjb2RpbmcgPSAnYXN5bmMnO1xyXG4gICAgICBpbWdFbC5hbHQgPSAnJztcclxuICAgICAgaW1nRWwuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICAgIGltZ0VsLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0RGlzcGxheWVkU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnSU1HJykge1xyXG4gICAgICAvLyBVc2UgdHJhbnNmb3JtIHNjYWxlKCkgdG8gbW9kaWZ5IGltZyBwbGFjZWhvbGRlciBzaXplXHJcbiAgICAgIC8vIChpbnN0ZWFkIG9mIGNoYW5naW5nIHdpZHRoL2hlaWdodCBkaXJlY3RseSkuXHJcbiAgICAgIC8vIFRoaXMgaGVscHMgd2l0aCBwZXJmb3JtYW5jZSwgc3BlY2lmaWNhbGx5IGluIGlPUzE1IFNhZmFyaS5cclxuICAgICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCAyNTAsICdhdXRvJyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMCAwJztcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRvVHJhbnNmb3JtU3RyaW5nKDAsIDAsIHdpZHRoIC8gMjUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdpZHRoSGVpZ2h0KHRoaXMuZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudD8ucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5kZWZhdWx0fSBTbGlkZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9jb3JlL2Jhc2UuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlQmFzZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vdXRpbC91dGlsLmpzJykuTG9hZFN0YXRlfSBMb2FkU3RhdGUgKi9cclxuXHJcbmNsYXNzIENvbnRlbnQge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBpdGVtRGF0YSBTbGlkZSBkYXRhXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggaW5zdGFuY2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBpdGVtRGF0YTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7UGxhY2Vob2xkZXIgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZSB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuc2xpZGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoID0gMDtcclxuICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VIZWlnaHQgPSAwO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBOdW1iZXIodGhpcy5kYXRhLncpIHx8IE51bWJlcih0aGlzLmRhdGEud2lkdGgpIHx8IDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IE51bWJlcih0aGlzLmRhdGEuaCkgfHwgTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpIHx8IDA7XHJcblxyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhc1NsaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGVjb2RpbmcgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7TG9hZFN0YXRlfSAqL1xyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuSURMRTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnR5cGUpIHtcclxuICAgICAgdGhpcy50eXBlID0gdGhpcy5kYXRhLnR5cGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5zcmMpIHtcclxuICAgICAgdGhpcy50eXBlID0gJ2ltYWdlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHlwZSA9ICdodG1sJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50SW5pdCcsIHsgY29udGVudDogdGhpcyB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgIXRoaXMua2VlcFBsYWNlaG9sZGVyKCkpIHtcclxuICAgICAgLy8gV2l0aCBkZWxheSwgYXMgaW1hZ2UgbWlnaHQgYmUgbG9hZGVkLCBidXQgbm90IHJlbmRlcmVkXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0xhenlcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZWxvYWRdXHJcbiAgICovXHJcbiAgbG9hZChpc0xhenksIHJlbG9hZCkge1xyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy51c2VQbGFjZWhvbGRlcigpKSB7XHJcbiAgICAgIGlmICghdGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyU3JjID0gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICAgICAncGxhY2Vob2xkZXJTcmMnLFxyXG4gICAgICAgICAgLy8gdXNlICBpbWFnZS1iYXNlZCBwbGFjZWhvbGRlciBvbmx5IGZvciB0aGUgZmlyc3Qgc2xpZGUsXHJcbiAgICAgICAgICAvLyBhcyByZW5kZXJpbmcgKGV2ZW4gc21hbGwgc3RyZXRjaGVkIHRodW1ibmFpbCkgaXMgYW4gZXhwZW5zaXZlIG9wZXJhdGlvblxyXG4gICAgICAgICAgKHRoaXMuZGF0YS5tc3JjICYmIHRoaXMuc2xpZGUuaXNGaXJzdFNsaWRlKSA/IHRoaXMuZGF0YS5tc3JjIDogZmFsc2UsXHJcbiAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gbmV3IFBsYWNlaG9sZGVyKFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXJTcmMsXHJcbiAgICAgICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lclxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJFbCA9IHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudDtcclxuICAgICAgICAvLyBBZGQgcGxhY2Vob2xkZXIgdG8gRE9NIGlmIGl0IHdhcyBhbHJlYWR5IGNyZWF0ZWRcclxuICAgICAgICBpZiAocGxhY2Vob2xkZXJFbCAmJiAhcGxhY2Vob2xkZXJFbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5wcmVwZW5kKHBsYWNlaG9sZGVyRWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXJlbG9hZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRMb2FkJywgeyBjb250ZW50OiB0aGlzLCBpc0xhenkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19pbWcnLCAnaW1nJyk7XHJcbiAgICAgIC8vIFN0YXJ0IGxvYWRpbmcgb25seSBhZnRlciB3aWR0aCBpcyBkZWZpbmVkLCBhcyBzaXplcyBtaWdodCBkZXBlbmQgb24gaXQuXHJcbiAgICAgIC8vIER1ZSB0byBTYWZhcmkgZmVhdHVyZSwgd2UgbXVzdCBkZWZpbmUgc2l6ZXMgYmVmb3JlIHNyY3NldC5cclxuICAgICAgaWYgKHRoaXMuZGlzcGxheWVkSW1hZ2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKGlzTGF6eSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2NvbnRlbnQnLCAnZGl2Jyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmRhdGEuaHRtbCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVsb2FkICYmIHRoaXMuc2xpZGUpIHtcclxuICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWxvYWQgaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYXp5XHJcbiAgICovXHJcbiAgbG9hZEltYWdlKGlzTGF6eSkge1xyXG4gICAgaWYgKCF0aGlzLmlzSW1hZ2VDb250ZW50KClcclxuICAgICAgfHwgIXRoaXMuZWxlbWVudFxyXG4gICAgICB8fCB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50TG9hZEltYWdlJywgeyBjb250ZW50OiB0aGlzLCBpc0xhenkgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gLyoqIEB0eXBlIEhUTUxJbWFnZUVsZW1lbnQgKi8gKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTcmNzZXRTaXplcygpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEuc3Jjc2V0KSB7XHJcbiAgICAgIGltYWdlRWxlbWVudC5zcmNzZXQgPSB0aGlzLmRhdGEuc3Jjc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlRWxlbWVudC5zcmMgPSB0aGlzLmRhdGEuc3JjID8/ICcnO1xyXG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuZGF0YS5hbHQgPz8gJyc7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IExPQURfU1RBVEUuTE9BRElORztcclxuXHJcbiAgICBpZiAoaW1hZ2VFbGVtZW50LmNvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGltYWdlRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRlZCgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaW1hZ2VFbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ24gc2xpZGUgdG8gY29udGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTbGlkZX0gc2xpZGVcclxuICAgKi9cclxuICBzZXRTbGlkZShzbGlkZSkge1xyXG4gICAgdGhpcy5zbGlkZSA9IHNsaWRlO1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IHRydWU7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gc2xpZGUucHN3cDtcclxuXHJcbiAgICAvLyBEbXl0cm8gU2VtZW5vdjogZG8gd2UgbmVlZCB0byB1bnNldCBzbGlkZT9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgbG9hZCBzdWNjZXNzIGhhbmRsZXJcclxuICAgKi9cclxuICBvbkxvYWRlZCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBMT0FEX1NUQVRFLkxPQURFRDtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZSAmJiB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnbG9hZENvbXBsZXRlJywgeyBzbGlkZTogdGhpcy5zbGlkZSwgY29udGVudDogdGhpcyB9KTtcclxuXHJcbiAgICAgIC8vIGlmIGNvbnRlbnQgaXMgcmVsb2FkZWRcclxuICAgICAgaWYgKHRoaXMuc2xpZGUuaXNBY3RpdmVcclxuICAgICAgICAmJiB0aGlzLnNsaWRlLmhlYXZ5QXBwZW5kZWRcclxuICAgICAgICAmJiAhdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZCgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGUudXBkYXRlQ29udGVudFNpemUodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURFRCB8fCB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250ZW50IGxvYWQgZXJyb3IgaGFuZGxlclxyXG4gICAqL1xyXG4gIG9uRXJyb3IoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gTE9BRF9TVEFURS5FUlJPUjtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkQ29tcGxldGUnLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBpc0Vycm9yOiB0cnVlLCBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdsb2FkRXJyb3InLCB7IHNsaWRlOiB0aGlzLnNsaWRlLCBjb250ZW50OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59IElmIHRoZSBjb250ZW50IGlzIGN1cnJlbnRseSBsb2FkaW5nXHJcbiAgICovXHJcbiAgaXNMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNDb250ZW50TG9hZGluZycsXHJcbiAgICAgIHRoaXMuc3RhdGUgPT09IExPQURfU1RBVEUuTE9BRElORyxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgY29udGVudCBpcyBpbiBlcnJvciBzdGF0ZVxyXG4gICAqL1xyXG4gIGlzRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gTE9BRF9TVEFURS5FUlJPUjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiB0aGUgY29udGVudCBpcyBpbWFnZVxyXG4gICAqL1xyXG4gIGlzSW1hZ2VDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2ltYWdlJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBjb250ZW50IHNpemVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXREaXNwbGF5ZWRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLnNldERpc3BsYXllZFNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goXHJcbiAgICAgICdjb250ZW50UmVzaXplJyxcclxuICAgICAgeyBjb250ZW50OiB0aGlzLCB3aWR0aCwgaGVpZ2h0IH0pLmRlZmF1bHRQcmV2ZW50ZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2lkdGhIZWlnaHQodGhpcy5lbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmICF0aGlzLmlzRXJyb3IoKSkge1xyXG4gICAgICBjb25zdCBpc0luaXRpYWxTaXplVXBkYXRlID0gKCF0aGlzLmRpc3BsYXllZEltYWdlV2lkdGggJiYgd2lkdGgpO1xyXG5cclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuZGlzcGxheWVkSW1hZ2VIZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoaXNJbml0aWFsU2l6ZVVwZGF0ZSkge1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNyY3NldFNpemVzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNwYXRjaChcclxuICAgICAgICAgICdpbWFnZVNpemVDaGFuZ2UnLFxyXG4gICAgICAgICAgeyBzbGlkZTogdGhpcy5zbGlkZSwgd2lkdGgsIGhlaWdodCwgY29udGVudDogdGhpcyB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IElmIHRoZSBjb250ZW50IGNhbiBiZSB6b29tZWRcclxuICAgKi9cclxuICBpc1pvb21hYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAnaXNDb250ZW50Wm9vbWFibGUnLFxyXG4gICAgICB0aGlzLmlzSW1hZ2VDb250ZW50KCkgJiYgKHRoaXMuc3RhdGUgIT09IExPQURfU1RBVEUuRVJST1IpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGltYWdlIHNyY3NldCBzaXplcyBhdHRyaWJ1dGUgYmFzZWQgb24gd2lkdGggYW5kIGhlaWdodFxyXG4gICAqL1xyXG4gIHVwZGF0ZVNyY3NldFNpemVzKCkge1xyXG4gICAgLy8gSGFuZGxlIHNyY3NldCBzaXplcyBhdHRyaWJ1dGUuXHJcbiAgICAvL1xyXG4gICAgLy8gTmV2ZXIgbG93ZXIgcXVhbGl0eSwgaWYgaXQgd2FzIGluY3JlYXNlZCBwcmV2aW91c2x5LlxyXG4gICAgLy8gQ2hyb21lIGRvZXMgdGhpcyBhdXRvbWF0aWNhbGx5LCBGaXJlZm94IGFuZCBTYWZhcmkgZG8gbm90LFxyXG4gICAgLy8gc28gd2Ugc3RvcmUgbGFyZ2VzdCB1c2VkIHNpemUgaW4gZGF0YXNldC5cclxuICAgIGlmICghdGhpcy5pc0ltYWdlQ29udGVudCgpIHx8ICF0aGlzLmVsZW1lbnQgfHwgIXRoaXMuZGF0YS5zcmNzZXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gLyoqIEB0eXBlIEhUTUxJbWFnZUVsZW1lbnQgKi8gKHRoaXMuZWxlbWVudCk7XHJcbiAgICBjb25zdCBzaXplc1dpZHRoID0gdGhpcy5pbnN0YW5jZS5hcHBseUZpbHRlcnMoXHJcbiAgICAgICdzcmNzZXRTaXplc1dpZHRoJyxcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRJbWFnZVdpZHRoLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWltYWdlLmRhdGFzZXQubGFyZ2VzdFVzZWRTaXplXHJcbiAgICAgIHx8IHNpemVzV2lkdGggPiBwYXJzZUludChpbWFnZS5kYXRhc2V0Lmxhcmdlc3RVc2VkU2l6ZSwgMTApXHJcbiAgICApIHtcclxuICAgICAgaW1hZ2Uuc2l6ZXMgPSBzaXplc1dpZHRoICsgJ3B4JztcclxuICAgICAgaW1hZ2UuZGF0YXNldC5sYXJnZXN0VXNlZFNpemUgPSBTdHJpbmcoc2l6ZXNXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgY29udGVudCBzaG91bGQgdXNlIGEgcGxhY2Vob2xkZXIgKGZyb20gbXNyYyBieSBkZWZhdWx0KVxyXG4gICAqL1xyXG4gIHVzZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAndXNlQ29udGVudFBsYWNlaG9sZGVyJyxcclxuICAgICAgdGhpcy5pc0ltYWdlQ29udGVudCgpLFxyXG4gICAgICB0aGlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlbG9hZCBjb250ZW50IHdpdGggbGF6eS1sb2FkaW5nIHBhcmFtXHJcbiAgICovXHJcbiAgbGF6eUxvYWQoKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudExhenlMb2FkJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9hZCh0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJZiBwbGFjZWhvbGRlciBzaG91bGQgYmUga2VwdCBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxyXG4gICAqL1xyXG4gIGtlZXBQbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmFwcGx5RmlsdGVycyhcclxuICAgICAgJ2lzS2VlcGluZ1BsYWNlaG9sZGVyJyxcclxuICAgICAgdGhpcy5pc0xvYWRpbmcoKSxcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgdGhlIGNvbnRlbnRcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5oYXNTbGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zbGlkZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudERlc3Ryb3knLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc0ltYWdlQ29udGVudCgpICYmIHRoaXMuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQub25sb2FkID0gbnVsbDtcclxuICAgICAgdGhpcy5lbGVtZW50Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcclxuICAgKi9cclxuICBkaXNwbGF5RXJyb3IoKSB7XHJcbiAgICBpZiAodGhpcy5zbGlkZSkge1xyXG4gICAgICBsZXQgZXJyb3JNc2dFbCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2Vycm9yLW1zZycsICdkaXYnKTtcclxuICAgICAgZXJyb3JNc2dFbC5pbm5lclRleHQgPSB0aGlzLmluc3RhbmNlLm9wdGlvbnM/LmVycm9yTXNnID8/ICcnO1xyXG4gICAgICBlcnJvck1zZ0VsID0gLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi8gKHRoaXMuaW5zdGFuY2UuYXBwbHlGaWx0ZXJzKFxyXG4gICAgICAgICdjb250ZW50RXJyb3JFbGVtZW50JyxcclxuICAgICAgICBlcnJvck1zZ0VsLFxyXG4gICAgICAgIHRoaXNcclxuICAgICAgKSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX2NvbnRlbnQgcHN3cF9fZXJyb3ItbXNnLWNvbnRhaW5lcicsICdkaXYnKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVycm9yTXNnRWwpO1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGhpcy5zbGlkZS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5zbGlkZS51cGRhdGVDb250ZW50U2l6ZSh0cnVlKTtcclxuICAgICAgdGhpcy5yZW1vdmVQbGFjZWhvbGRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgYXBwZW5kKCkge1xyXG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCB8fCAhdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheUVycm9yKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFwcGVuZCcsIHsgY29udGVudDogdGhpcyB9KS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBwb3J0c0RlY29kZSA9ICgnZGVjb2RlJyBpbiB0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzSW1hZ2VDb250ZW50KCkpIHtcclxuICAgICAgLy8gVXNlIGRlY29kZSgpIG9uIG5lYXJieSBzbGlkZXNcclxuICAgICAgLy9cclxuICAgICAgLy8gTmVhcmJ5IHNsaWRlIGltYWdlcyBhcmUgaW4gRE9NIGFuZCBub3QgaGlkZGVuIHZpYSBkaXNwbGF5Om5vbmUuXHJcbiAgICAgIC8vIEhvd2V2ZXIsIHRoZXkgYXJlIHBsYWNlZCBvZmZzY3JlZW4gKHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlKS5cclxuICAgICAgLy9cclxuICAgICAgLy8gU29tZSBicm93c2VycyBkbyBub3QgY29tcG9zaXRlIHRoZSBpbWFnZSB1bnRpbCBpdCdzIGFjdHVhbGx5IHZpc2libGUsXHJcbiAgICAgIC8vIHVzaW5nIGRlY29kZSgpIGhlbHBzLlxyXG4gICAgICAvL1xyXG4gICAgICAvLyBZb3UgbWlnaHQgYXNrIFwid2h5IGRvbnQgeW91IGp1c3QgZGVjb2RlKCkgYW5kIHRoZW4gYXBwZW5kIGFsbCBpbWFnZXNcIixcclxuICAgICAgLy8gdGhhdCdzIGJlY2F1c2UgSSB3YW50IHRvIHNob3cgaW1hZ2UgYmVmb3JlIGl0J3MgZnVsbHkgbG9hZGVkLFxyXG4gICAgICAvLyBhcyBicm93c2VyIGNhbiByZW5kZXIgcGFydHMgb2YgaW1hZ2Ugd2hpbGUgaXQgaXMgbG9hZGluZy5cclxuICAgICAgLy8gV2UgZG8gbm90IGRvIHRoaXMgaW4gU2FmYXJpIGR1ZSB0byBwYXJ0aWFsIGxvYWRpbmcgYnVnLlxyXG4gICAgICBpZiAoc3VwcG9ydHNEZWNvZGUgJiYgdGhpcy5zbGlkZSAmJiAoIXRoaXMuc2xpZGUuaXNBY3RpdmUgfHwgaXNTYWZhcmkoKSkpIHtcclxuICAgICAgICB0aGlzLmlzRGVjb2RpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIHB1cnBvc2VmdWxseSB1c2luZyBmaW5hbGx5IGluc3RlYWQgb2YgdGhlbixcclxuICAgICAgICAvLyBhcyBpZiBzcmNzZXQgc2l6ZXMgY2hhbmdlcyBkeW5hbWljYWxseSAtIGl0IG1heSBjYXVzZSBkZWNvZGUgZXJyb3JcclxuICAgICAgICAvKiogQHR5cGUge0hUTUxJbWFnZUVsZW1lbnR9ICovXHJcbiAgICAgICAgKHRoaXMuZWxlbWVudCkuZGVjb2RlKCkuY2F0Y2goKCkgPT4geyB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNEZWNvZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kSW1hZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aXZhdGUgdGhlIHNsaWRlLFxyXG4gICAqIGFjdGl2ZSBzbGlkZSBpcyBnZW5lcmFsbHkgdGhlIGN1cnJlbnQgb25lLFxyXG4gICAqIG1lYW5pbmcgdGhlIHVzZXIgY2FuIHNlZSBpdC5cclxuICAgKi9cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50QWN0aXZhdGUnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZFxyXG4gICAgICB8fCAhdGhpcy5zbGlkZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbWFnZUNvbnRlbnQoKSAmJiB0aGlzLmlzRGVjb2RpbmcgJiYgIWlzU2FmYXJpKCkpIHtcclxuICAgICAgLy8gYWRkIGltYWdlIHRvIHNsaWRlIHdoZW4gaXQgYmVjb21lcyBhY3RpdmUsXHJcbiAgICAgIC8vIGV2ZW4gaWYgaXQncyBub3QgZmluaXNoZWQgZGVjb2RpbmdcclxuICAgICAgdGhpcy5hcHBlbmRJbWFnZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRXJyb3IoKSkge1xyXG4gICAgICB0aGlzLmxvYWQoZmFsc2UsIHRydWUpOyAvLyB0cnkgdG8gcmVsb2FkXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVhY3RpdmF0ZSB0aGUgY29udGVudFxyXG4gICAqL1xyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLmRpc3BhdGNoKCdjb250ZW50RGVhY3RpdmF0ZScsIHsgY29udGVudDogdGhpcyB9KTtcclxuICAgIGlmICh0aGlzLnNsaWRlICYmIHRoaXMuc2xpZGUuaG9sZGVyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNsaWRlLmhvbGRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBjb250ZW50IGZyb20gRE9NXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5pc0F0dGFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlzcGF0Y2goJ2NvbnRlbnRSZW1vdmUnLCB7IGNvbnRlbnQ6IHRoaXMgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZCB0aGUgaW1hZ2UgY29udGVudCB0byBzbGlkZSBjb250YWluZXJcclxuICAgKi9cclxuICBhcHBlbmRJbWFnZSgpIHtcclxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXNwYXRjaCgnY29udGVudEFwcGVuZEltYWdlJywgeyBjb250ZW50OiB0aGlzIH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVuc3VyZSB0aGF0IGVsZW1lbnQgZXhpc3RzIGFuZCBpcyBub3QgYWxyZWFkeSBhcHBlbmRlZFxyXG4gICAgaWYgKHRoaXMuc2xpZGUgJiYgdGhpcy5lbGVtZW50ICYmICF0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLnNsaWRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkxPQURFRCB8fCB0aGlzLnN0YXRlID09PSBMT0FEX1NUQVRFLkVSUk9SKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvbnRlbnQuanMnKS5kZWZhdWx0fSBDb250ZW50ICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlLmpzJykuZGVmYXVsdH0gU2xpZGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2xpZGUuanMnKS5TbGlkZURhdGF9IFNsaWRlRGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vY29yZS9iYXNlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZUJhc2UgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3Bob3Rvc3dpcGUuanMnKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcblxyXG5jb25zdCBNSU5fU0xJREVTX1RPX0NBQ0hFID0gNTtcclxuXHJcbi8qKlxyXG4gKiBMYXp5LWxvYWQgYW4gaW1hZ2VcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJvdGggYnkgTGlnaHRib3ggYW5kIFBob3RvU3dpcGUgY29yZSxcclxuICogdGh1cyBpdCBjYW4gYmUgY2FsbGVkIGJlZm9yZSBkaWFsb2cgaXMgb3BlbmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NsaWRlRGF0YX0gaXRlbURhdGEgRGF0YSBhYm91dCB0aGUgc2xpZGVcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggaW5zdGFuY2VcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEByZXR1cm5zIHtDb250ZW50fSBJbWFnZSB0aGF0IGlzIGJlaW5nIGRlY29kZWQgb3IgZmFsc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBsYXp5TG9hZERhdGEoaXRlbURhdGEsIGluc3RhbmNlLCBpbmRleCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBpbnN0YW5jZS5jcmVhdGVDb250ZW50RnJvbURhdGEoaXRlbURhdGEsIGluZGV4KTtcclxuICAvKiogQHR5cGUge1pvb21MZXZlbCB8IHVuZGVmaW5lZH0gKi9cclxuICBsZXQgem9vbUxldmVsO1xyXG5cclxuICBjb25zdCB7IG9wdGlvbnMgfSA9IGluc3RhbmNlO1xyXG5cclxuICAvLyBXZSBuZWVkIHRvIGtub3cgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2UgdG8gcHJlbG9hZCBpdCxcclxuICAvLyBhcyBpdCBtaWdodCB1c2Ugc3Jjc2V0LCBhbmQgd2UgbmVlZCB0byBkZWZpbmUgc2l6ZXNcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgem9vbUxldmVsID0gbmV3IFpvb21MZXZlbChvcHRpb25zLCBpdGVtRGF0YSwgLTEpO1xyXG5cclxuICAgIGxldCB2aWV3cG9ydFNpemU7XHJcbiAgICBpZiAoaW5zdGFuY2UucHN3cCkge1xyXG4gICAgICB2aWV3cG9ydFNpemUgPSBpbnN0YW5jZS5wc3dwLnZpZXdwb3J0U2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZXdwb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZShvcHRpb25zLCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFuQXJlYVNpemUgPSBnZXRQYW5BcmVhU2l6ZShvcHRpb25zLCB2aWV3cG9ydFNpemUsIGl0ZW1EYXRhLCBpbmRleCk7XHJcbiAgICB6b29tTGV2ZWwudXBkYXRlKGNvbnRlbnQud2lkdGgsIGNvbnRlbnQuaGVpZ2h0LCBwYW5BcmVhU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50LmxhenlMb2FkKCk7XHJcblxyXG4gIGlmICh6b29tTGV2ZWwpIHtcclxuICAgIGNvbnRlbnQuc2V0RGlzcGxheWVkU2l6ZShcclxuICAgICAgTWF0aC5jZWlsKGNvbnRlbnQud2lkdGggKiB6b29tTGV2ZWwuaW5pdGlhbCksXHJcbiAgICAgIE1hdGguY2VpbChjb250ZW50LmhlaWdodCAqIHpvb21MZXZlbC5pbml0aWFsKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIExhenktbG9hZHMgc3BlY2lmaWMgc2xpZGUuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBib3RoIGJ5IExpZ2h0Ym94IGFuZCBQaG90b1N3aXBlIGNvcmUsXHJcbiAqIHRodXMgaXQgY2FuIGJlIGNhbGxlZCBiZWZvcmUgZGlhbG9nIGlzIG9wZW5lZC5cclxuICpcclxuICogQnkgZGVmYXVsdCwgaXQgbG9hZHMgaW1hZ2UgYmFzZWQgb24gdmlld3BvcnQgc2l6ZSBhbmQgaW5pdGlhbCB6b29tIGxldmVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggU2xpZGUgaW5kZXhcclxuICogQHBhcmFtIHtQaG90b1N3aXBlQmFzZX0gaW5zdGFuY2UgUGhvdG9Td2lwZSBvciBQaG90b1N3aXBlTGlnaHRib3ggZXZlbnRhYmxlIGluc3RhbmNlXHJcbiAqIEByZXR1cm5zIHtDb250ZW50IHwgdW5kZWZpbmVkfVxyXG4gKi9cclxuZnVuY3Rpb24gbGF6eUxvYWRTbGlkZShpbmRleCwgaW5zdGFuY2UpIHtcclxuICBjb25zdCBpdGVtRGF0YSA9IGluc3RhbmNlLmdldEl0ZW1EYXRhKGluZGV4KTtcclxuXHJcbiAgaWYgKGluc3RhbmNlLmRpc3BhdGNoKCdsYXp5TG9hZFNsaWRlJywgeyBpbmRleCwgaXRlbURhdGEgfSkuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxhenlMb2FkRGF0YShpdGVtRGF0YSwgaW5zdGFuY2UsIGluZGV4KTtcclxufVxyXG5cclxuY2xhc3MgQ29udGVudExvYWRlciB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQaG90b1N3aXBlfSBwc3dwXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHN3cCkge1xyXG4gICAgdGhpcy5wc3dwID0gcHN3cDtcclxuICAgIC8vIFRvdGFsIGFtb3VudCBvZiBjYWNoZWQgaW1hZ2VzXHJcbiAgICB0aGlzLmxpbWl0ID0gTWF0aC5tYXgoXHJcbiAgICAgIHBzd3Aub3B0aW9ucy5wcmVsb2FkWzBdICsgcHN3cC5vcHRpb25zLnByZWxvYWRbMV0gKyAxLFxyXG4gICAgICBNSU5fU0xJREVTX1RPX0NBQ0hFXHJcbiAgICApO1xyXG4gICAgLyoqIEB0eXBlIHtDb250ZW50W119ICovXHJcbiAgICB0aGlzLl9jYWNoZWRJdGVtcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGF6eSBsb2FkIG5lYXJieSBzbGlkZXMgYmFzZWQgb24gYHByZWxvYWRgIG9wdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGlmZl0gRGlmZmVyZW5jZSBiZXR3ZWVuIHNsaWRlIGluZGV4ZXMgdGhhdCB3YXMgY2hhbmdlZCByZWNlbnRseSwgb3IgMC5cclxuICAgKi9cclxuICB1cGRhdGVMYXp5KGRpZmYpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAocHN3cC5kaXNwYXRjaCgnbGF6eUxvYWQnKS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHByZWxvYWQgfSA9IHBzd3Aub3B0aW9ucztcclxuICAgIGNvbnN0IGlzRm9yd2FyZCA9IGRpZmYgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAoZGlmZiA+PSAwKTtcclxuICAgIGxldCBpO1xyXG5cclxuICAgIC8vIHByZWxvYWRbMV0gLSBudW0gaXRlbXMgdG8gcHJlbG9hZCBpbiBmb3J3YXJkIGRpcmVjdGlvblxyXG4gICAgZm9yIChpID0gMDsgaSA8PSBwcmVsb2FkWzFdOyBpKyspIHtcclxuICAgICAgdGhpcy5sb2FkU2xpZGVCeUluZGV4KHBzd3AuY3VyckluZGV4ICsgKGlzRm9yd2FyZCA/IGkgOiAoLWkpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJlbG9hZFswXSAtIG51bSBpdGVtcyB0byBwcmVsb2FkIGluIGJhY2t3YXJkIGRpcmVjdGlvblxyXG4gICAgZm9yIChpID0gMTsgaSA8PSBwcmVsb2FkWzBdOyBpKyspIHtcclxuICAgICAgdGhpcy5sb2FkU2xpZGVCeUluZGV4KHBzd3AuY3VyckluZGV4ICsgKGlzRm9yd2FyZCA/ICgtaSkgOiBpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdGlhbEluZGV4XHJcbiAgICovXHJcbiAgbG9hZFNsaWRlQnlJbmRleChpbml0aWFsSW5kZXgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wc3dwLmdldExvb3BlZEluZGV4KGluaXRpYWxJbmRleCk7XHJcbiAgICAvLyB0cnkgdG8gZ2V0IGNhY2hlZCBjb250ZW50XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudEJ5SW5kZXgoaW5kZXgpO1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIC8vIG5vIGNhY2hlZCBjb250ZW50LCBzbyB0cnkgdG8gbG9hZCBmcm9tIHNjcmF0Y2g6XHJcbiAgICAgIGNvbnRlbnQgPSBsYXp5TG9hZFNsaWRlKGluZGV4LCB0aGlzLnBzd3ApO1xyXG4gICAgICAvLyBpZiBjb250ZW50IGNhbiBiZSBsb2FkZWQsIGFkZCBpdCB0byBjYWNoZTpcclxuICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLmFkZFRvQ2FjaGUoY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGV9IHNsaWRlXHJcbiAgICogQHJldHVybnMge0NvbnRlbnR9XHJcbiAgICovXHJcbiAgZ2V0Q29udGVudEJ5U2xpZGUoc2xpZGUpIHtcclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50QnlJbmRleChzbGlkZS5pbmRleCk7XHJcbiAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgLy8gY3JlYXRlIGNvbnRlbnQgaWYgbm90IGZvdW5kIGluIGNhY2hlXHJcbiAgICAgIGNvbnRlbnQgPSB0aGlzLnBzd3AuY3JlYXRlQ29udGVudEZyb21EYXRhKHNsaWRlLmRhdGEsIHNsaWRlLmluZGV4KTtcclxuICAgICAgdGhpcy5hZGRUb0NhY2hlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFzc2lnbiBzbGlkZSB0byBjb250ZW50XHJcbiAgICBjb250ZW50LnNldFNsaWRlKHNsaWRlKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q29udGVudH0gY29udGVudFxyXG4gICAqL1xyXG4gIGFkZFRvQ2FjaGUoY29udGVudCkge1xyXG4gICAgLy8gbW92ZSB0byB0aGUgZW5kIG9mIGFycmF5XHJcbiAgICB0aGlzLnJlbW92ZUJ5SW5kZXgoY29udGVudC5pbmRleCk7XHJcbiAgICB0aGlzLl9jYWNoZWRJdGVtcy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jYWNoZWRJdGVtcy5sZW5ndGggPiB0aGlzLmxpbWl0KSB7XHJcbiAgICAgIC8vIERlc3Ryb3kgdGhlIGZpcnN0IGNvbnRlbnQgdGhhdCdzIG5vdCBhdHRhY2hlZFxyXG4gICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5fY2FjaGVkSXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICFpdGVtLmlzQXR0YWNoZWQgJiYgIWl0ZW0uaGFzU2xpZGU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoaW5kZXhUb1JlbW92ZSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCByZW1vdmVkSXRlbSA9IHRoaXMuX2NhY2hlZEl0ZW1zLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKVswXTtcclxuICAgICAgICByZW1vdmVkSXRlbS5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYW4gaW1hZ2UgZnJvbSBjYWNoZSwgZG9lcyBub3QgZGVzdHJveSgpIGl0LCBqdXN0IHJlbW92ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKi9cclxuICByZW1vdmVCeUluZGV4KGluZGV4KSB7XHJcbiAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5fY2FjaGVkSXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pbmRleCA9PT0gaW5kZXgpO1xyXG4gICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuX2NhY2hlZEl0ZW1zLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtDb250ZW50IHwgdW5kZWZpbmVkfVxyXG4gICAqL1xyXG4gIGdldENvbnRlbnRCeUluZGV4KGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkSXRlbXMuZmluZChjb250ZW50ID0+IGNvbnRlbnQuaW5kZXggPT09IGluZGV4KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9jYWNoZWRJdGVtcy5mb3JFYWNoKGNvbnRlbnQgPT4gY29udGVudC5kZXN0cm95KCkpO1xyXG4gICAgdGhpcy5fY2FjaGVkSXRlbXMgPSBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vcGhvdG9zd2lwZS5qc1wiKS5kZWZhdWx0fSBQaG90b1N3aXBlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vc2xpZGUvc2xpZGUuanNcIikuU2xpZGVEYXRhfSBTbGlkZURhdGEgKi9cclxuXHJcbi8qKlxyXG4gKiBQaG90b1N3aXBlIGJhc2UgY2xhc3MgdGhhdCBjYW4gcmV0cmlldmUgZGF0YSBhYm91dCBldmVyeSBzbGlkZS5cclxuICogU2hhcmVkIGJ5IFBob3RvU3dpcGUgQ29yZSBhbmQgUGhvdG9Td2lwZSBMaWdodGJveFxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZUJhc2UgZXh0ZW5kcyBFdmVudGFibGUge1xyXG4gIC8qKlxyXG4gICAqIEdldCB0b3RhbCBudW1iZXIgb2Ygc2xpZGVzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldE51bUl0ZW1zKCkge1xyXG4gICAgbGV0IG51bUl0ZW1zID0gMDtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLm9wdGlvbnM/LmRhdGFTb3VyY2U7XHJcblxyXG4gICAgaWYgKGRhdGFTb3VyY2UgJiYgJ2xlbmd0aCcgaW4gZGF0YVNvdXJjZSkge1xyXG4gICAgICAvLyBtYXkgYmUgYW4gYXJyYXkgb3IganVzdCBvYmplY3Qgd2l0aCBsZW5ndGggcHJvcGVydHlcclxuICAgICAgbnVtSXRlbXMgPSBkYXRhU291cmNlLmxlbmd0aDtcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZSAmJiAnZ2FsbGVyeScgaW4gZGF0YVNvdXJjZSkge1xyXG4gICAgICAvLyBxdWVyeSBET00gZWxlbWVudHNcclxuICAgICAgaWYgKCFkYXRhU291cmNlLml0ZW1zKSB7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5pdGVtcyA9IHRoaXMuX2dldEdhbGxlcnlET01FbGVtZW50cyhkYXRhU291cmNlLmdhbGxlcnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZGF0YVNvdXJjZS5pdGVtcykge1xyXG4gICAgICAgIG51bUl0ZW1zID0gZGF0YVNvdXJjZS5pdGVtcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBsZWdhY3kgZXZlbnQsIGJlZm9yZSBmaWx0ZXJzIHdlcmUgaW50cm9kdWNlZFxyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmRpc3BhdGNoKCdudW1JdGVtcycsIHtcclxuICAgICAgZGF0YVNvdXJjZSxcclxuICAgICAgbnVtSXRlbXNcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJzKCdudW1JdGVtcycsIGV2ZW50Lm51bUl0ZW1zLCBkYXRhU291cmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U2xpZGVEYXRhfSBzbGlkZURhdGFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJucyB7Q29udGVudH1cclxuICAgKi9cclxuICBjcmVhdGVDb250ZW50RnJvbURhdGEoc2xpZGVEYXRhLCBpbmRleCkge1xyXG4gICAgcmV0dXJuIG5ldyBDb250ZW50KHNsaWRlRGF0YSwgdGhpcywgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGl0ZW0gZGF0YSBieSBpbmRleC5cclxuICAgKlxyXG4gICAqIFwiaXRlbSBkYXRhXCIgc2hvdWxkIGNvbnRhaW4gbm9ybWFsaXplZCBpbmZvcm1hdGlvbiB0aGF0IFBob3RvU3dpcGUgbmVlZHMgdG8gZ2VuZXJhdGUgYSBzbGlkZS5cclxuICAgKiBGb3IgZXhhbXBsZSwgaXQgbWF5IGNvbnRhaW4gcHJvcGVydGllcyBsaWtlXHJcbiAgICogYHNyY2AsIGBzcmNzZXRgLCBgd2AsIGBoYCwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGdlbmVyYXRlIGEgc2xpZGUgd2l0aCBpbWFnZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAqIEByZXR1cm5zIHtTbGlkZURhdGF9XHJcbiAgICovXHJcbiAgZ2V0SXRlbURhdGEoaW5kZXgpIHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLm9wdGlvbnM/LmRhdGFTb3VyY2U7XHJcbiAgICAvKiogQHR5cGUge1NsaWRlRGF0YSB8IEhUTUxFbGVtZW50fSAqL1xyXG4gICAgbGV0IGRhdGFTb3VyY2VJdGVtID0ge307XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhU291cmNlKSkge1xyXG4gICAgICAvLyBEYXRhc291cmNlIGlzIGFuIGFycmF5IG9mIGVsZW1lbnRzXHJcbiAgICAgIGRhdGFTb3VyY2VJdGVtID0gZGF0YVNvdXJjZVtpbmRleF07XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UgJiYgJ2dhbGxlcnknIGluIGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gZGF0YVNvdXJjZSBoYXMgZ2FsbGVyeSBwcm9wZXJ0eSxcclxuICAgICAgLy8gdGh1cyBpdCB3YXMgY3JlYXRlZCBieSBMaWdodGJveCwgYmFzZWQgb25cclxuICAgICAgLy8gZ2FsbGVyeSBhbmQgY2hpbGRyZW4gb3B0aW9uc1xyXG5cclxuICAgICAgLy8gcXVlcnkgRE9NIGVsZW1lbnRzXHJcbiAgICAgIGlmICghZGF0YVNvdXJjZS5pdGVtcykge1xyXG4gICAgICAgIGRhdGFTb3VyY2UuaXRlbXMgPSB0aGlzLl9nZXRHYWxsZXJ5RE9NRWxlbWVudHMoZGF0YVNvdXJjZS5nYWxsZXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YVNvdXJjZUl0ZW0gPSBkYXRhU291cmNlLml0ZW1zW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbURhdGEgPSBkYXRhU291cmNlSXRlbTtcclxuXHJcbiAgICBpZiAoaXRlbURhdGEgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgIGl0ZW1EYXRhID0gdGhpcy5fZG9tRWxlbWVudFRvSXRlbURhdGEoaXRlbURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc3BhdGNoaW5nIHRoZSBpdGVtRGF0YSBldmVudCxcclxuICAgIC8vIGl0J3MgYSBsZWdhY3kgdmVyaW9uIGJlZm9yZSBmaWx0ZXJzIHdlcmUgaW50cm9kdWNlZFxyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmRpc3BhdGNoKCdpdGVtRGF0YScsIHtcclxuICAgICAgaXRlbURhdGE6IGl0ZW1EYXRhIHx8IHt9LFxyXG4gICAgICBpbmRleFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXJzKCdpdGVtRGF0YScsIGV2ZW50Lml0ZW1EYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYXJyYXkgb2YgZ2FsbGVyeSBET00gZWxlbWVudHMsXHJcbiAgICogYmFzZWQgb24gY2hpbGRTZWxlY3RvciBhbmQgZ2FsbGVyeSBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZ2FsbGVyeUVsZW1lbnRcclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX1cclxuICAgKi9cclxuICBfZ2V0R2FsbGVyeURPTUVsZW1lbnRzKGdhbGxlcnlFbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zPy5jaGlsZHJlbiB8fCB0aGlzLm9wdGlvbnM/LmNoaWxkU2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGdldEVsZW1lbnRzRnJvbU9wdGlvbihcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4sXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkU2VsZWN0b3IsXHJcbiAgICAgICAgZ2FsbGVyeUVsZW1lbnRcclxuICAgICAgKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW2dhbGxlcnlFbGVtZW50XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIERPTSBlbGVtZW50IHRvIGl0ZW0gZGF0YSBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IERPTSBlbGVtZW50XHJcbiAgICogQHJldHVybnMge1NsaWRlRGF0YX1cclxuICAgKi9cclxuICBfZG9tRWxlbWVudFRvSXRlbURhdGEoZWxlbWVudCkge1xyXG4gICAgLyoqIEB0eXBlIHtTbGlkZURhdGF9ICovXHJcbiAgICBjb25zdCBpdGVtRGF0YSA9IHtcclxuICAgICAgZWxlbWVudFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaW5rRWwgPSAvKiogQHR5cGUge0hUTUxBbmNob3JFbGVtZW50fSAqLyAoXHJcbiAgICAgIGVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnXHJcbiAgICAgICAgPyBlbGVtZW50XHJcbiAgICAgICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobGlua0VsKSB7XHJcbiAgICAgIC8vIHNyYyBjb21lcyBmcm9tIGRhdGEtcHN3cC1zcmMgYXR0cmlidXRlLFxyXG4gICAgICAvLyBpZiBpdCdzIGVtcHR5IGxpbmsgaHJlZiBpcyB1c2VkXHJcbiAgICAgIGl0ZW1EYXRhLnNyYyA9IGxpbmtFbC5kYXRhc2V0LnBzd3BTcmMgfHwgbGlua0VsLmhyZWY7XHJcblxyXG4gICAgICBpZiAobGlua0VsLmRhdGFzZXQucHN3cFNyY3NldCkge1xyXG4gICAgICAgIGl0ZW1EYXRhLnNyY3NldCA9IGxpbmtFbC5kYXRhc2V0LnBzd3BTcmNzZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGl0ZW1EYXRhLndpZHRoID0gbGlua0VsLmRhdGFzZXQucHN3cFdpZHRoID8gcGFyc2VJbnQobGlua0VsLmRhdGFzZXQucHN3cFdpZHRoLCAxMCkgOiAwO1xyXG4gICAgICBpdGVtRGF0YS5oZWlnaHQgPSBsaW5rRWwuZGF0YXNldC5wc3dwSGVpZ2h0ID8gcGFyc2VJbnQobGlua0VsLmRhdGFzZXQucHN3cEhlaWdodCwgMTApIDogMDtcclxuXHJcbiAgICAgIC8vIHN1cHBvcnQgbGVnYWN5IHcgJiBoIHByb3BlcnRpZXNcclxuICAgICAgaXRlbURhdGEudyA9IGl0ZW1EYXRhLndpZHRoO1xyXG4gICAgICBpdGVtRGF0YS5oID0gaXRlbURhdGEuaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGxpbmtFbC5kYXRhc2V0LnBzd3BUeXBlKSB7XHJcbiAgICAgICAgaXRlbURhdGEudHlwZSA9IGxpbmtFbC5kYXRhc2V0LnBzd3BUeXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0aHVtYm5haWxFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblxyXG4gICAgICBpZiAodGh1bWJuYWlsRWwpIHtcclxuICAgICAgICAvLyBtc3JjIGlzIFVSTCB0byBwbGFjZWhvbGRlciBpbWFnZSB0aGF0J3MgZGlzcGxheWVkIGJlZm9yZSBsYXJnZSBpbWFnZSBpcyBsb2FkZWRcclxuICAgICAgICAvLyBieSBkZWZhdWx0IGl0J3MgZGlzcGxheWVkIG9ubHkgZm9yIHRoZSBmaXJzdCBzbGlkZVxyXG4gICAgICAgIGl0ZW1EYXRhLm1zcmMgPSB0aHVtYm5haWxFbC5jdXJyZW50U3JjIHx8IHRodW1ibmFpbEVsLnNyYztcclxuICAgICAgICBpdGVtRGF0YS5hbHQgPSB0aHVtYm5haWxFbC5nZXRBdHRyaWJ1dGUoJ2FsdCcpID8/ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGlua0VsLmRhdGFzZXQucHN3cENyb3BwZWQgfHwgbGlua0VsLmRhdGFzZXQuY3JvcHBlZCkge1xyXG4gICAgICAgIGl0ZW1EYXRhLnRodW1iQ3JvcHBlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hcHBseUZpbHRlcnMoJ2RvbUl0ZW1EYXRhJywgaXRlbURhdGEsIGVsZW1lbnQsIGxpbmtFbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMYXp5LWxvYWQgYnkgc2xpZGUgZGF0YVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTbGlkZURhdGF9IGl0ZW1EYXRhIERhdGEgYWJvdXQgdGhlIHNsaWRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge0NvbnRlbnR9IEltYWdlIHRoYXQgaXMgYmVpbmcgZGVjb2RlZCBvciBmYWxzZS5cclxuICAgKi9cclxuICBsYXp5TG9hZERhdGEoaXRlbURhdGEsIGluZGV4KSB7XHJcbiAgICByZXR1cm4gbGF6eUxvYWREYXRhKGl0ZW1EYXRhLCB0aGlzLCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9waG90b3N3aXBlLmpzJykuZGVmYXVsdH0gUGhvdG9Td2lwZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS9nZXQtdGh1bWItYm91bmRzLmpzJykuQm91bmRzfSBCb3VuZHMgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdXRpbC9hbmltYXRpb25zLmpzJykuQW5pbWF0aW9uUHJvcHN9IEFuaW1hdGlvblByb3BzICovXHJcblxyXG4vLyBzb21lIGJyb3dzZXJzIGRvIG5vdCBwYWludFxyXG4vLyBlbGVtZW50cyB3aGljaCBvcGFjaXR5IGlzIHNldCB0byAwLFxyXG4vLyBzaW5jZSB3ZSBuZWVkIHRvIHByZS1yZW5kZXIgZWxlbWVudHMgZm9yIHRoZSBhbmltYXRpb24gLVxyXG4vLyB3ZSBzZXQgaXQgdG8gdGhlIG1pbmltdW0gYW1vdW50XHJcbmNvbnN0IE1JTl9PUEFDSVRZID0gMC4wMDM7XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBvcGVuaW5nIGFuZCBjbG9zaW5nIHRyYW5zaXRpb25zIG9mIHRoZSBQaG90b1N3aXBlLlxyXG4gKlxyXG4gKiBJdCBjYW4gcGVyZm9ybSB6b29tLCBmYWRlIG9yIG5vIHRyYW5zaXRpb24uXHJcbiAqL1xyXG5jbGFzcyBPcGVuZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZX0gcHN3cFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBzd3ApIHtcclxuICAgIHRoaXMucHN3cCA9IHBzd3A7XHJcbiAgICB0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtudW1iZXIgfCBmYWxzZSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZHVyYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAvKiogQHByaXZhdGUgKi9cclxuICAgIHRoaXMuX3VzZUFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9jcm9wcGVkWm9vbSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcml2YXRlICovXHJcbiAgICB0aGlzLl9hbmltYXRlUm9vdE9wYWNpdHkgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy5fYW5pbWF0ZUJnT3BhY2l0eSA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUgeyBIVE1MRGl2RWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkIH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkIH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fb3BhY2l0eUVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkIH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5fY3JvcENvbnRhaW5lcjEgPSB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAdHlwZSB7IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCB9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2Nyb3BDb250YWluZXIyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtCb3VuZHMgfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3RodW1iQm91bmRzID0gdW5kZWZpbmVkO1xyXG5cclxuXHJcbiAgICB0aGlzLl9wcmVwYXJlT3BlbiA9IHRoaXMuX3ByZXBhcmVPcGVuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgLy8gT3ZlcnJpZGUgaW5pdGlhbCB6b29tIGFuZCBwYW4gcG9zaXRpb25cclxuICAgIHBzd3Aub24oJ2ZpcnN0Wm9vbVBhbicsIHRoaXMuX3ByZXBhcmVPcGVuKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wcmVwYXJlT3BlbigpO1xyXG4gICAgdGhpcy5fc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNDbG9zZWQgfHwgdGhpcy5pc0Nsb3NpbmcgfHwgdGhpcy5pc09wZW5pbmcpIHtcclxuICAgICAgLy8gaWYgd2UgY2xvc2UgZHVyaW5nIG9wZW5pbmcgYW5pbWF0aW9uXHJcbiAgICAgIC8vIGZvciBub3cgZG8gbm90aGluZyxcclxuICAgICAgLy8gYnJvd3NlcnMgYXJlbid0IGdvb2QgYXQgY2hhbmdpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgQ1NTIHRyYW5zaXRpb25cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5wc3dwLmN1cnJTbGlkZTtcclxuXHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDbG9zaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2R1cmF0aW9uID0gdGhpcy5wc3dwLm9wdGlvbnMuaGlkZUFuaW1hdGlvbkR1cmF0aW9uO1xyXG5cclxuICAgIGlmIChzbGlkZSAmJiBzbGlkZS5jdXJyWm9vbUxldmVsICogc2xpZGUud2lkdGggPj0gdGhpcy5wc3dwLm9wdGlvbnMubWF4V2lkdGhUb0FuaW1hdGUpIHtcclxuICAgICAgdGhpcy5fZHVyYXRpb24gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2FwcGx5U3RhcnRQcm9wcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3N0YXJ0KCk7XHJcbiAgICB9LCB0aGlzLl9jcm9wcGVkWm9vbSA/IDMwIDogMCk7XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfcHJlcGFyZU9wZW4oKSB7XHJcbiAgICB0aGlzLnBzd3Aub2ZmKCdmaXJzdFpvb21QYW4nLCB0aGlzLl9wcmVwYXJlT3Blbik7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuaW5nKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5wc3dwLmN1cnJTbGlkZTtcclxuICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9kdXJhdGlvbiA9IHRoaXMucHN3cC5vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbjtcclxuICAgICAgaWYgKHNsaWRlICYmIHNsaWRlLnpvb21MZXZlbHMuaW5pdGlhbCAqIHNsaWRlLndpZHRoID49IHRoaXMucHN3cC5vcHRpb25zLm1heFdpZHRoVG9BbmltYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2FwcGx5U3RhcnRQcm9wcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2FwcGx5U3RhcnRQcm9wcygpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5wc3dwLmN1cnJTbGlkZTtcclxuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gcHN3cDtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zaG93SGlkZUFuaW1hdGlvblR5cGUgPT09ICdmYWRlJykge1xyXG4gICAgICBvcHRpb25zLnNob3dIaWRlT3BhY2l0eSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3RodW1iQm91bmRzID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNob3dIaWRlQW5pbWF0aW9uVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIG9wdGlvbnMuc2hvd0hpZGVPcGFjaXR5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2R1cmF0aW9uID0gMDtcclxuICAgICAgdGhpcy5fdGh1bWJCb3VuZHMgPSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuaW5nICYmIHBzd3AuX2luaXRpYWxUaHVtYkJvdW5kcykge1xyXG4gICAgICAvLyBVc2UgaW5pdGlhbCBib3VuZHMgaWYgZGVmaW5lZFxyXG4gICAgICB0aGlzLl90aHVtYkJvdW5kcyA9IHBzd3AuX2luaXRpYWxUaHVtYkJvdW5kcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RodW1iQm91bmRzID0gdGhpcy5wc3dwLmdldFRodW1iQm91bmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBzbGlkZT8uZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCk7XHJcblxyXG4gICAgcHN3cC5hbmltYXRpb25zLnN0b3BBbGwoKTtcclxuXHJcbiAgICAvLyBEaXNjYXJkIGFuaW1hdGlvbnMgd2hlbiBkdXJhdGlvbiBpcyBsZXNzIHRoYW4gNTBtc1xyXG4gICAgdGhpcy5fdXNlQW5pbWF0aW9uID0gQm9vbGVhbih0aGlzLl9kdXJhdGlvbiAmJiB0aGlzLl9kdXJhdGlvbiA+IDUwKTtcclxuICAgIHRoaXMuX2FuaW1hdGVab29tID0gQm9vbGVhbih0aGlzLl90aHVtYkJvdW5kcylcclxuICAgICAgJiYgc2xpZGU/LmNvbnRlbnQudXNlUGxhY2Vob2xkZXIoKVxyXG4gICAgICAmJiAoIXRoaXMuaXNDbG9zaW5nIHx8ICFwc3dwLm1haW5TY3JvbGwuaXNTaGlmdGVkKCkpO1xyXG4gICAgaWYgKCF0aGlzLl9hbmltYXRlWm9vbSkge1xyXG4gICAgICB0aGlzLl9hbmltYXRlUm9vdE9wYWNpdHkgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNPcGVuaW5nICYmIHNsaWRlKSB7XHJcbiAgICAgICAgc2xpZGUuem9vbUFuZFBhblRvSW5pdGlhbCgpO1xyXG4gICAgICAgIHNsaWRlLmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID0gb3B0aW9ucy5zaG93SGlkZU9wYWNpdHkgPz8gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9hbmltYXRlQmdPcGFjaXR5ID0gIXRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSAmJiB0aGlzLnBzd3Aub3B0aW9ucy5iZ09wYWNpdHkgPiBNSU5fT1BBQ0lUWTtcclxuICAgIHRoaXMuX29wYWNpdHlFbGVtZW50ID0gdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID8gcHN3cC5lbGVtZW50IDogcHN3cC5iZztcclxuXHJcbiAgICBpZiAoIXRoaXMuX3VzZUFuaW1hdGlvbikge1xyXG4gICAgICB0aGlzLl9kdXJhdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVab29tID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVCZ09wYWNpdHkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuaXNPcGVuaW5nKSB7XHJcbiAgICAgICAgaWYgKHBzd3AuZWxlbWVudCkge1xyXG4gICAgICAgICAgcHN3cC5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBTdHJpbmcoTUlOX09QQUNJVFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwc3dwLmFwcGx5QmdPcGFjaXR5KDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fYW5pbWF0ZVpvb20gJiYgdGhpcy5fdGh1bWJCb3VuZHMgJiYgdGhpcy5fdGh1bWJCb3VuZHMuaW5uZXJSZWN0KSB7XHJcbiAgICAgIC8vIFByb3BlcnRpZXMgYXJlIHVzZWQgd2hlbiBhbmltYXRpb24gZnJvbSBjcm9wcGVkIHRodW1ibmFpbFxyXG4gICAgICB0aGlzLl9jcm9wcGVkWm9vbSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2Nyb3BDb250YWluZXIxID0gdGhpcy5wc3dwLmNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5fY3JvcENvbnRhaW5lcjIgPSB0aGlzLnBzd3AuY3VyclNsaWRlPy5ob2xkZXJFbGVtZW50O1xyXG5cclxuICAgICAgaWYgKHBzd3AuY29udGFpbmVyKSB7XHJcbiAgICAgICAgcHN3cC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICBwc3dwLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBzd3Audmlld3BvcnRTaXplLnggKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jcm9wcGVkWm9vbSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzT3BlbmluZykge1xyXG4gICAgICAvLyBBcHBseSBzdHlsZXMgYmVmb3JlIG9wZW5pbmcgdHJhbnNpdGlvblxyXG4gICAgICBpZiAodGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5KSB7XHJcbiAgICAgICAgaWYgKHBzd3AuZWxlbWVudCkge1xyXG4gICAgICAgICAgcHN3cC5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBTdHJpbmcoTUlOX09QQUNJVFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwc3dwLmFwcGx5QmdPcGFjaXR5KDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRlQmdPcGFjaXR5ICYmIHBzd3AuYmcpIHtcclxuICAgICAgICAgIHBzd3AuYmcuc3R5bGUub3BhY2l0eSA9IFN0cmluZyhNSU5fT1BBQ0lUWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwc3dwLmVsZW1lbnQpIHtcclxuICAgICAgICAgIHBzd3AuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2FuaW1hdGVab29tKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Q2xvc2VkU3RhdGVab29tUGFuKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAvLyB0ZWxsIGJyb3dzZXIgdGhhdCB3ZSBwbGFuIHRvIGFuaW1hdGUgdGhlIHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XHJcblxyXG4gICAgICAgICAgLy8gaGlkZSBwbGFjZWhvbGRlciB0byBhbGxvdyBoaWRpbmcgb2ZcclxuICAgICAgICAgIC8vIGVsZW1lbnRzIHRoYXQgb3ZlcmxhcCBpdCAoc3VjaCBhcyBpY29ucyBvdmVyIHRoZSB0aHVtYm5haWwpXHJcbiAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS5vcGFjaXR5ID0gU3RyaW5nKE1JTl9PUEFDSVRZKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Nsb3NpbmcpIHtcclxuICAgICAgLy8gaGlkZSBuZWFyYnkgc2xpZGVzIHRvIG1ha2Ugc3VyZSB0aGF0XHJcbiAgICAgIC8vIHRoZXkgYXJlIG5vdCBwYWludGVkIGR1cmluZyB0aGUgdHJhbnNpdGlvblxyXG4gICAgICBpZiAocHN3cC5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzWzBdKSB7XHJcbiAgICAgICAgcHN3cC5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzWzBdLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBzd3AubWFpblNjcm9sbC5pdGVtSG9sZGVyc1syXSkge1xyXG4gICAgICAgIHBzd3AubWFpblNjcm9sbC5pdGVtSG9sZGVyc1syXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fY3JvcHBlZFpvb20pIHtcclxuICAgICAgICBpZiAocHN3cC5tYWluU2Nyb2xsLnggIT09IDApIHtcclxuICAgICAgICAgIC8vIHNoaWZ0IHRoZSBtYWluIHNjcm9sbGVyIHRvIHplcm8gcG9zaXRpb25cclxuICAgICAgICAgIHBzd3AubWFpblNjcm9sbC5yZXNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICBwc3dwLm1haW5TY3JvbGwucmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfc3RhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5pc09wZW5pbmdcclxuICAgICAgJiYgdGhpcy5fdXNlQW5pbWF0aW9uXHJcbiAgICAgICYmIHRoaXMuX3BsYWNlaG9sZGVyXHJcbiAgICAgICYmIHRoaXMuX3BsYWNlaG9sZGVyLnRhZ05hbWUgPT09ICdJTUcnKSB7XHJcbiAgICAgIC8vIFRvIGVuc3VyZSBzbW9vdGggYW5pbWF0aW9uXHJcbiAgICAgIC8vIHdlIHdhaXQgdGlsbCB0aGUgY3VycmVudCBzbGlkZSBpbWFnZSBwbGFjZWhvbGRlciBpcyBkZWNvZGVkLFxyXG4gICAgICAvLyBidXQgbm8gbG9uZ2VyIHRoYW4gMjUwbXMsXHJcbiAgICAgIC8vIGFuZCBubyBzaG9ydGVyIHRoYW4gNTBtc1xyXG4gICAgICAvLyAoanVzdCB1c2luZyByZXF1ZXN0YW5pbWF0aW9uZnJhbWUgaXMgbm90IGVub3VnaCBpbiBGaXJlZm94LFxyXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24pXHJcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgbGV0IGRlY29kZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNEZWxheWluZyA9IHRydWU7XHJcbiAgICAgICAgZGVjb2RlSW1hZ2UoLyoqIEB0eXBlIHtIVE1MSW1hZ2VFbGVtZW50fSAqLyh0aGlzLl9wbGFjZWhvbGRlcikpLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgZGVjb2RlZCA9IHRydWU7XHJcbiAgICAgICAgICBpZiAoIWlzRGVsYXlpbmcpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlzRGVsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChkZWNvZGVkKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMjUwKTtcclxuICAgICAgfSkuZmluYWxseSgoKSA9PiB0aGlzLl9pbml0aWF0ZSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2luaXRpYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfaW5pdGlhdGUoKSB7XHJcbiAgICB0aGlzLnBzd3AuZWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoJy0tcHN3cC10cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5fZHVyYXRpb24gKyAnbXMnKTtcclxuXHJcbiAgICB0aGlzLnBzd3AuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuaXNPcGVuaW5nID8gJ29wZW5pbmdBbmltYXRpb25TdGFydCcgOiAnY2xvc2luZ0FuaW1hdGlvblN0YXJ0J1xyXG4gICAgKTtcclxuXHJcbiAgICAvLyBsZWdhY3kgZXZlbnRcclxuICAgIHRoaXMucHN3cC5kaXNwYXRjaChcclxuICAgICAgLyoqIEB0eXBlIHsnaW5pdGlhbFpvb21JbicgfCAnaW5pdGlhbFpvb21PdXQnfSAqL1xyXG4gICAgICAoJ2luaXRpYWxab29tJyArICh0aGlzLmlzT3BlbmluZyA/ICdJbicgOiAnT3V0JykpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucHN3cC5lbGVtZW50Py5jbGFzc0xpc3QudG9nZ2xlKCdwc3dwLS11aS12aXNpYmxlJywgdGhpcy5pc09wZW5pbmcpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzT3BlbmluZykge1xyXG4gICAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAvLyB1bmhpZGUgdGhlIHBsYWNlaG9sZGVyXHJcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9hbmltYXRlVG9PcGVuU3RhdGUoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Nsb3NpbmcpIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVRvQ2xvc2VkU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3VzZUFuaW1hdGlvbikge1xyXG4gICAgICB0aGlzLl9vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQHByaXZhdGUgKi9cclxuICBfb25BbmltYXRpb25Db21wbGV0ZSgpIHtcclxuICAgIGNvbnN0IHsgcHN3cCB9ID0gdGhpcztcclxuICAgIHRoaXMuaXNPcGVuID0gdGhpcy5pc09wZW5pbmc7XHJcbiAgICB0aGlzLmlzQ2xvc2VkID0gdGhpcy5pc0Nsb3Npbmc7XHJcbiAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Nsb3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwc3dwLmRpc3BhdGNoKFxyXG4gICAgICB0aGlzLmlzT3BlbiA/ICdvcGVuaW5nQW5pbWF0aW9uRW5kJyA6ICdjbG9zaW5nQW5pbWF0aW9uRW5kJ1xyXG4gICAgKTtcclxuXHJcbiAgICAvLyBsZWdhY3kgZXZlbnRcclxuICAgIHBzd3AuZGlzcGF0Y2goXHJcbiAgICAgIC8qKiBAdHlwZSB7J2luaXRpYWxab29tSW5FbmQnIHwgJ2luaXRpYWxab29tT3V0RW5kJ30gKi9cclxuICAgICAgKCdpbml0aWFsWm9vbScgKyAodGhpcy5pc09wZW4gPyAnSW5FbmQnIDogJ091dEVuZCcpKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Nsb3NlZCkge1xyXG4gICAgICBwc3dwLmRlc3Ryb3koKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgaWYgKHRoaXMuX2FuaW1hdGVab29tICYmIHBzd3AuY29udGFpbmVyKSB7XHJcbiAgICAgICAgcHN3cC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgcHN3cC5jb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgIH1cclxuICAgICAgcHN3cC5jdXJyU2xpZGU/LmFwcGx5Q3VycmVudFpvb21QYW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAcHJpdmF0ZSAqL1xyXG4gIF9hbmltYXRlVG9PcGVuU3RhdGUoKSB7XHJcbiAgICBjb25zdCB7IHBzd3AgfSA9IHRoaXM7XHJcbiAgICBpZiAodGhpcy5fYW5pbWF0ZVpvb20pIHtcclxuICAgICAgaWYgKHRoaXMuX2Nyb3BwZWRab29tICYmIHRoaXMuX2Nyb3BDb250YWluZXIxICYmIHRoaXMuX2Nyb3BDb250YWluZXIyKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVRvKHRoaXMuX2Nyb3BDb250YWluZXIxLCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKScpO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGVUbyh0aGlzLl9jcm9wQ29udGFpbmVyMiwgJ3RyYW5zZm9ybScsICdub25lJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwc3dwLmN1cnJTbGlkZSkge1xyXG4gICAgICAgIHBzd3AuY3VyclNsaWRlLnpvb21BbmRQYW5Ub0luaXRpYWwoKTtcclxuICAgICAgICB0aGlzLl9hbmltYXRlVG8oXHJcbiAgICAgICAgICBwc3dwLmN1cnJTbGlkZS5jb250YWluZXIsXHJcbiAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgIHBzd3AuY3VyclNsaWRlLmdldEN1cnJlbnRUcmFuc2Zvcm0oKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fYW5pbWF0ZUJnT3BhY2l0eSAmJiBwc3dwLmJnKSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGVUbyhwc3dwLmJnLCAnb3BhY2l0eScsIFN0cmluZyhwc3dwLm9wdGlvbnMuYmdPcGFjaXR5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVSb290T3BhY2l0eSAmJiBwc3dwLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVRvKHBzd3AuZWxlbWVudCwgJ29wYWNpdHknLCAnMScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBwcml2YXRlICovXHJcbiAgX2FuaW1hdGVUb0Nsb3NlZFN0YXRlKCkge1xyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aGlzLl9hbmltYXRlWm9vbSkge1xyXG4gICAgICB0aGlzLl9zZXRDbG9zZWRTdGF0ZVpvb21QYW4odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZG8gbm90IGFuaW1hdGUgb3BhY2l0eSBpZiBpdCdzIGFscmVhZHkgYXQgMFxyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGVCZ09wYWNpdHkgJiYgcHN3cC5iZ09wYWNpdHkgPiAwLjAxICYmIHBzd3AuYmcpIHtcclxuICAgICAgdGhpcy5fYW5pbWF0ZVRvKHBzd3AuYmcsICdvcGFjaXR5JywgJzAnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fYW5pbWF0ZVJvb3RPcGFjaXR5ICYmIHBzd3AuZWxlbWVudCkge1xyXG4gICAgICB0aGlzLl9hbmltYXRlVG8ocHN3cC5lbGVtZW50LCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FuaW1hdGVdXHJcbiAgICovXHJcbiAgX3NldENsb3NlZFN0YXRlWm9vbVBhbihhbmltYXRlKSB7XHJcbiAgICBpZiAoIXRoaXMuX3RodW1iQm91bmRzKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyBwc3dwIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgeyBpbm5lclJlY3QgfSA9IHRoaXMuX3RodW1iQm91bmRzO1xyXG4gICAgY29uc3QgeyBjdXJyU2xpZGUsIHZpZXdwb3J0U2l6ZSB9ID0gcHN3cDtcclxuXHJcbiAgICBpZiAodGhpcy5fY3JvcHBlZFpvb20gJiYgaW5uZXJSZWN0ICYmIHRoaXMuX2Nyb3BDb250YWluZXIxICYmIHRoaXMuX2Nyb3BDb250YWluZXIyKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lck9uZVBhblggPSAtdmlld3BvcnRTaXplLnggKyAodGhpcy5fdGh1bWJCb3VuZHMueCAtIGlubmVyUmVjdC54KSArIGlubmVyUmVjdC53O1xyXG4gICAgICBjb25zdCBjb250YWluZXJPbmVQYW5ZID0gLXZpZXdwb3J0U2l6ZS55ICsgKHRoaXMuX3RodW1iQm91bmRzLnkgLSBpbm5lclJlY3QueSkgKyBpbm5lclJlY3QuaDtcclxuICAgICAgY29uc3QgY29udGFpbmVyVHdvUGFuWCA9IHZpZXdwb3J0U2l6ZS54IC0gaW5uZXJSZWN0Lnc7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclR3b1BhblkgPSB2aWV3cG9ydFNpemUueSAtIGlubmVyUmVjdC5oO1xyXG5cclxuXHJcbiAgICAgIGlmIChhbmltYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVRvKFxyXG4gICAgICAgICAgdGhpcy5fY3JvcENvbnRhaW5lcjEsXHJcbiAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgIHRvVHJhbnNmb3JtU3RyaW5nKGNvbnRhaW5lck9uZVBhblgsIGNvbnRhaW5lck9uZVBhblkpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVRvKFxyXG4gICAgICAgICAgdGhpcy5fY3JvcENvbnRhaW5lcjIsXHJcbiAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgIHRvVHJhbnNmb3JtU3RyaW5nKGNvbnRhaW5lclR3b1BhblgsIGNvbnRhaW5lclR3b1BhblkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUcmFuc2Zvcm0odGhpcy5fY3JvcENvbnRhaW5lcjEsIGNvbnRhaW5lck9uZVBhblgsIGNvbnRhaW5lck9uZVBhblkpO1xyXG4gICAgICAgIHNldFRyYW5zZm9ybSh0aGlzLl9jcm9wQ29udGFpbmVyMiwgY29udGFpbmVyVHdvUGFuWCwgY29udGFpbmVyVHdvUGFuWSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VyclNsaWRlKSB7XHJcbiAgICAgIGVxdWFsaXplUG9pbnRzKGN1cnJTbGlkZS5wYW4sIGlubmVyUmVjdCB8fCB0aGlzLl90aHVtYkJvdW5kcyk7XHJcbiAgICAgIGN1cnJTbGlkZS5jdXJyWm9vbUxldmVsID0gdGhpcy5fdGh1bWJCb3VuZHMudyAvIGN1cnJTbGlkZS53aWR0aDtcclxuICAgICAgaWYgKGFuaW1hdGUpIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlVG8oY3VyclNsaWRlLmNvbnRhaW5lciwgJ3RyYW5zZm9ybScsIGN1cnJTbGlkZS5nZXRDdXJyZW50VHJhbnNmb3JtKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJTbGlkZS5hcHBseUN1cnJlbnRab29tUGFuKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAgICogQHBhcmFtIHsndHJhbnNmb3JtJyB8ICdvcGFjaXR5J30gcHJvcFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wVmFsdWVcclxuICAgKi9cclxuICBfYW5pbWF0ZVRvKHRhcmdldCwgcHJvcCwgcHJvcFZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuX2R1cmF0aW9uKSB7XHJcbiAgICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IHByb3BWYWx1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYW5pbWF0aW9ucyB9ID0gdGhpcy5wc3dwO1xyXG4gICAgLyoqIEB0eXBlIHtBbmltYXRpb25Qcm9wc30gKi9cclxuICAgIGNvbnN0IGFuaW1Qcm9wcyA9IHtcclxuICAgICAgZHVyYXRpb246IHRoaXMuX2R1cmF0aW9uLFxyXG4gICAgICBlYXNpbmc6IHRoaXMucHN3cC5vcHRpb25zLmVhc2luZyxcclxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIGlmICghYW5pbWF0aW9ucy5hY3RpdmVBbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5fb25BbmltYXRpb25Db21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgfTtcclxuICAgIGFuaW1Qcm9wc1twcm9wXSA9IHByb3BWYWx1ZTtcclxuICAgIGFuaW1hdGlvbnMuc3RhcnRUcmFuc2l0aW9uKGFuaW1Qcm9wcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi90eXBlcy5qcycpLlR5cGU8VD59IFR5cGU8VD5cclxuICovXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zbGlkZS9zbGlkZS5qcycpLlNsaWRlRGF0YX0gU2xpZGVEYXRhICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlL3pvb20tbGV2ZWwuanMnKS5ab29tTGV2ZWxPcHRpb259IFpvb21MZXZlbE9wdGlvbiAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi91aS91aS1lbGVtZW50LmpzJykuVUlFbGVtZW50RGF0YX0gVUlFbGVtZW50RGF0YSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9tYWluLXNjcm9sbC5qcycpLkl0ZW1Ib2xkZXJ9IEl0ZW1Ib2xkZXIgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS9ldmVudGFibGUuanMnKS5QaG90b1N3aXBlRXZlbnRzTWFwfSBQaG90b1N3aXBlRXZlbnRzTWFwICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvZXZlbnRhYmxlLmpzJykuUGhvdG9Td2lwZUZpbHRlcnNNYXB9IFBob3RvU3dpcGVGaWx0ZXJzTWFwICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NsaWRlL2dldC10aHVtYi1ib3VuZHMnKS5Cb3VuZHN9IEJvdW5kcyAqL1xyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL2V2ZW50YWJsZS5qcycpLkV2ZW50Q2FsbGJhY2s8VD59IEV2ZW50Q2FsbGJhY2s8VD5cclxuICovXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvZXZlbnRhYmxlLmpzJykuQXVnbWVudGVkRXZlbnQ8VD59IEF1Z21lbnRlZEV2ZW50PFQ+XHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlZGVmIHt7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpZD86IHN0cmluZyB8IG51bWJlciB9fSBQb2ludCAqL1xyXG4vKiogQHR5cGVkZWYge3sgdG9wOiBudW1iZXI7IGJvdHRvbTogbnVtYmVyOyBsZWZ0OiBudW1iZXI7IHJpZ2h0OiBudW1iZXIgfX0gUGFkZGluZyAqL1xyXG4vKiogQHR5cGVkZWYge1NsaWRlRGF0YVtdfSBEYXRhU291cmNlQXJyYXkgKi9cclxuLyoqIEB0eXBlZGVmIHt7IGdhbGxlcnk6IEhUTUxFbGVtZW50OyBpdGVtcz86IEhUTUxFbGVtZW50W10gfX0gRGF0YVNvdXJjZU9iamVjdCAqL1xyXG4vKiogQHR5cGVkZWYge0RhdGFTb3VyY2VBcnJheSB8IERhdGFTb3VyY2VPYmplY3R9IERhdGFTb3VyY2UgKi9cclxuLyoqIEB0eXBlZGVmIHsocG9pbnQ6IFBvaW50LCBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHZvaWR9IEFjdGlvbkZuICovXHJcbi8qKiBAdHlwZWRlZiB7J2Nsb3NlJyB8ICduZXh0JyB8ICd6b29tJyB8ICd6b29tLW9yLWNsb3NlJyB8ICd0b2dnbGUtY29udHJvbHMnfSBBY3Rpb25UeXBlICovXHJcbi8qKiBAdHlwZWRlZiB7VHlwZTxQaG90b1N3aXBlPiB8IHsgZGVmYXVsdDogVHlwZTxQaG90b1N3aXBlPiB9fSBQaG90b1N3aXBlTW9kdWxlICovXHJcbi8qKiBAdHlwZWRlZiB7UGhvdG9Td2lwZU1vZHVsZSB8IFByb21pc2U8UGhvdG9Td2lwZU1vZHVsZT4gfCAoKCkgPT4gUHJvbWlzZTxQaG90b1N3aXBlTW9kdWxlPil9IFBob3RvU3dpcGVNb2R1bGVPcHRpb24gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7c3RyaW5nIHwgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudFtdIHwgSFRNTEVsZW1lbnR9IEVsZW1lbnRQcm92aWRlclxyXG4gKi9cclxuXHJcbi8qKiBAdHlwZWRlZiB7UGFydGlhbDxQcmVwYXJlZFBob3RvU3dpcGVPcHRpb25zPn0gUGhvdG9Td2lwZU9wdGlvbnMgaHR0cHM6Ly9waG90b3N3aXBlLmNvbS9vcHRpb25zLyAqL1xyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gUHJlcGFyZWRQaG90b1N3aXBlT3B0aW9uc1xyXG4gKlxyXG4gKiBAcHJvcCB7RGF0YVNvdXJjZX0gW2RhdGFTb3VyY2VdXHJcbiAqIFBhc3MgYW4gYXJyYXkgb2YgYW55IGl0ZW1zIHZpYSBkYXRhU291cmNlIG9wdGlvbi4gSXRzIGxlbmd0aCB3aWxsIGRldGVybWluZSBhbW91bnQgb2Ygc2xpZGVzXHJcbiAqICh3aGljaCBtYXkgYmUgbW9kaWZpZWQgZnVydGhlciBmcm9tIG51bUl0ZW1zIGV2ZW50KS5cclxuICpcclxuICogRWFjaCBpdGVtIHNob3VsZCBjb250YWluIGRhdGEgdGhhdCB5b3UgbmVlZCB0byBnZW5lcmF0ZSBzbGlkZVxyXG4gKiAoZm9yIGltYWdlIHNsaWRlIGl0IHdvdWxkIGJlIHNyYyAoaW1hZ2UgVVJMKSwgd2lkdGggKGltYWdlIHdpZHRoKSwgaGVpZ2h0LCBzcmNzZXQsIGFsdCkuXHJcbiAqXHJcbiAqIElmIHRoZXNlIHByb3BlcnRpZXMgYXJlIG5vdCBwcmVzZW50IGluIHlvdXIgaW5pdGlhbCBhcnJheSwgeW91IG1heSBcInByZS1wYXJzZVwiIGVhY2ggaXRlbSBmcm9tIGl0ZW1EYXRhIGZpbHRlci5cclxuICpcclxuICogQHByb3Age251bWJlcn0gYmdPcGFjaXR5XHJcbiAqIEJhY2tncm91bmQgYmFja2Ryb3Agb3BhY2l0eSwgYWx3YXlzIGRlZmluZSBpdCB2aWEgdGhpcyBvcHRpb24gYW5kIG5vdCB2aWEgQ1NTIHJnYmEgY29sb3IuXHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXJ9IHNwYWNpbmdcclxuICogU3BhY2luZyBiZXR3ZWVuIHNsaWRlcy4gRGVmaW5lZCBhcyByYXRpbyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQgd2lkdGggKDAuMSA9IDEwJSBvZiB2aWV3cG9ydCkuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBhbGxvd1BhblRvTmV4dFxyXG4gKiBBbGxvdyBzd2lwZSBuYXZpZ2F0aW9uIHRvIHRoZSBuZXh0IHNsaWRlIHdoZW4gdGhlIGN1cnJlbnQgc2xpZGUgaXMgem9vbWVkLiBEb2VzIG5vdCBhcHBseSB0byBtb3VzZSBldmVudHMuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBsb29wXHJcbiAqIElmIHNldCB0byB0cnVlIHlvdSdsbCBiZSBhYmxlIHRvIHN3aXBlIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0IGltYWdlLlxyXG4gKiBPcHRpb24gaXMgYWx3YXlzIGZhbHNlIHdoZW4gdGhlcmUgYXJlIGxlc3MgdGhhbiAzIHNsaWRlcy5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IFt3aGVlbFRvWm9vbV1cclxuICogQnkgZGVmYXVsdCBQaG90b1N3aXBlIHpvb21zIGltYWdlIHdpdGggY3RybC13aGVlbCwgaWYgeW91IGVuYWJsZSB0aGlzIG9wdGlvbiAtIGltYWdlIHdpbGwgem9vbSBqdXN0IHZpYSB3aGVlbC5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IHBpbmNoVG9DbG9zZVxyXG4gKiBQaW5jaCB0b3VjaCBnZXN0dXJlIHRvIGNsb3NlIHRoZSBnYWxsZXJ5LlxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2xvc2VPblZlcnRpY2FsRHJhZ1xyXG4gKiBWZXJ0aWNhbCBkcmFnIGdlc3R1cmUgdG8gY2xvc2UgdGhlIFBob3RvU3dpcGUuXHJcbiAqXHJcbiAqIEBwcm9wIHtQYWRkaW5nfSBbcGFkZGluZ11cclxuICogU2xpZGUgYXJlYSBwYWRkaW5nIChpbiBwaXhlbHMpLlxyXG4gKlxyXG4gKiBAcHJvcCB7KHZpZXdwb3J0U2l6ZTogUG9pbnQsIGl0ZW1EYXRhOiBTbGlkZURhdGEsIGluZGV4OiBudW1iZXIpID0+IFBhZGRpbmd9IFtwYWRkaW5nRm5dXHJcbiAqIFRoZSBvcHRpb24gaXMgY2hlY2tlZCBmcmVxdWVudGx5LCBzbyBtYWtlIHN1cmUgaXQncyBwZXJmb3JtYW50LiBPdmVycmlkZXMgcGFkZGluZyBvcHRpb24gaWYgZGVmaW5lZC4gRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIEBwcm9wIHtudW1iZXIgfCBmYWxzZX0gaGlkZUFuaW1hdGlvbkR1cmF0aW9uXHJcbiAqIFRyYW5zaXRpb24gZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLCBjYW4gYmUgMC5cclxuICpcclxuICogQHByb3Age251bWJlciB8IGZhbHNlfSBzaG93QW5pbWF0aW9uRHVyYXRpb25cclxuICogVHJhbnNpdGlvbiBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMsIGNhbiBiZSAwLlxyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyIHwgZmFsc2V9IHpvb21BbmltYXRpb25EdXJhdGlvblxyXG4gKiBUcmFuc2l0aW9uIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcywgY2FuIGJlIDAuXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IGVhc2luZ1xyXG4gKiBTdHJpbmcsICdjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSknLiBDU1MgZWFzaW5nIGZ1bmN0aW9uIGZvciBvcGVuL2Nsb3NlL3pvb20gdHJhbnNpdGlvbnMuXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBlc2NLZXlcclxuICogRXNjIGtleSB0byBjbG9zZS5cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IGFycm93S2V5c1xyXG4gKiBMZWZ0L3JpZ2h0IGFycm93IGtleXMgZm9yIG5hdmlnYXRpb24uXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSByZXR1cm5Gb2N1c1xyXG4gKiBSZXN0b3JlIGZvY3VzIHRoZSBsYXN0IGFjdGl2ZSBlbGVtZW50IGFmdGVyIFBob3RvU3dpcGUgaXMgY2xvc2VkLlxyXG4gKlxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2xpY2tUb0Nsb3NlTm9uWm9vbWFibGVcclxuICogSWYgaW1hZ2UgaXMgbm90IHpvb21hYmxlIChmb3IgZXhhbXBsZSwgc21hbGxlciB0aGFuIHZpZXdwb3J0KSBpdCBjYW4gYmUgY2xvc2VkIGJ5IGNsaWNraW5nIG9uIGl0LlxyXG4gKlxyXG4gKiBAcHJvcCB7QWN0aW9uVHlwZSB8IEFjdGlvbkZuIHwgZmFsc2V9IGltYWdlQ2xpY2tBY3Rpb25cclxuICogUmVmZXIgdG8gY2xpY2sgYW5kIHRhcCBhY3Rpb25zIHBhZ2UuXHJcbiAqXHJcbiAqIEBwcm9wIHtBY3Rpb25UeXBlIHwgQWN0aW9uRm4gfCBmYWxzZX0gYmdDbGlja0FjdGlvblxyXG4gKiBSZWZlciB0byBjbGljayBhbmQgdGFwIGFjdGlvbnMgcGFnZS5cclxuICpcclxuICogQHByb3Age0FjdGlvblR5cGUgfCBBY3Rpb25GbiB8IGZhbHNlfSB0YXBBY3Rpb25cclxuICogUmVmZXIgdG8gY2xpY2sgYW5kIHRhcCBhY3Rpb25zIHBhZ2UuXHJcbiAqXHJcbiAqIEBwcm9wIHtBY3Rpb25UeXBlIHwgQWN0aW9uRm4gfCBmYWxzZX0gZG91YmxlVGFwQWN0aW9uXHJcbiAqIFJlZmVyIHRvIGNsaWNrIGFuZCB0YXAgYWN0aW9ucyBwYWdlLlxyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyfSBwcmVsb2FkZXJEZWxheVxyXG4gKiBEZWxheSBiZWZvcmUgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGwgYmUgZGlzcGxheWVkLFxyXG4gKiBpZiBpbWFnZSBpcyBsb2FkZWQgZHVyaW5nIGl0IC0gdGhlIGluZGljYXRvciB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQgYXQgYWxsLiBDYW4gYmUgemVyby5cclxuICpcclxuICogQHByb3Age3N0cmluZ30gaW5kZXhJbmRpY2F0b3JTZXBcclxuICogVXNlZCBmb3Igc2xpZGUgY291bnQgaW5kaWNhdG9yIChcIjEgb2YgMTAgXCIpLlxyXG4gKlxyXG4gKiBAcHJvcCB7KG9wdGlvbnM6IFBob3RvU3dpcGVPcHRpb25zLCBwc3dwOiBQaG90b1N3aXBlQmFzZSkgPT4gUG9pbnR9IFtnZXRWaWV3cG9ydFNpemVGbl1cclxuICogQSBmdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gc2xpZGUgdmlld3BvcnQgd2lkdGggYW5kIGhlaWdodCwgaW4gZm9ybWF0IHt4OiAxMDAsIHk6IDEwMH0uXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IGVycm9yTXNnXHJcbiAqIE1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZSBpbWFnZSB3YXNuJ3QgYWJsZSB0byBsb2FkLiBJZiB5b3UgbmVlZCB0byBkaXNwbGF5IEhUTUwgLSB1c2UgY29udGVudEVycm9yRWxlbWVudCBmaWx0ZXIuXHJcbiAqXHJcbiAqIEBwcm9wIHtbbnVtYmVyLCBudW1iZXJdfSBwcmVsb2FkXHJcbiAqIExhenkgbG9hZGluZyBvZiBuZWFyYnkgc2xpZGVzIGJhc2VkIG9uIGRpcmVjdGlvbiBvZiBtb3ZlbWVudC4gU2hvdWxkIGJlIGFuIGFycmF5IHdpdGggdHdvIGludGVnZXJzLFxyXG4gKiBmaXJzdCBvbmUgLSBudW1iZXIgb2YgaXRlbXMgdG8gcHJlbG9hZCBiZWZvcmUgdGhlIGN1cnJlbnQgaW1hZ2UsIHNlY29uZCBvbmUgLSBhZnRlciB0aGUgY3VycmVudCBpbWFnZS5cclxuICogVHdvIG5lYXJieSBpbWFnZXMgYXJlIGFsd2F5cyBsb2FkZWQuXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFttYWluQ2xhc3NdXHJcbiAqIENsYXNzIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgcm9vdCBlbGVtZW50IG9mIFBob3RvU3dpcGUsIG1heSBjb250YWluIG11bHRpcGxlIHNlcGFyYXRlZCBieSBzcGFjZS5cclxuICogRXhhbXBsZSBvbiBTdHlsaW5nIHBhZ2UuXHJcbiAqXHJcbiAqIEBwcm9wIHtIVE1MRWxlbWVudH0gW2FwcGVuZFRvRWxdXHJcbiAqIEVsZW1lbnQgdG8gd2hpY2ggUGhvdG9Td2lwZSBkaWFsb2cgd2lsbCBiZSBhcHBlbmRlZCB3aGVuIGl0IG9wZW5zLlxyXG4gKlxyXG4gKiBAcHJvcCB7bnVtYmVyfSBtYXhXaWR0aFRvQW5pbWF0ZVxyXG4gKiBNYXhpbXVtIHdpZHRoIG9mIGltYWdlIHRvIGFuaW1hdGUsIGlmIGluaXRpYWwgcmVuZGVyZWQgaW1hZ2Ugd2lkdGhcclxuICogaXMgbGFyZ2VyIHRoYW4gdGhpcyB2YWx1ZSAtIHRoZSBvcGVuaW5nL2Nsb3NpbmcgdHJhbnNpdGlvbiB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzYWJsZWQuXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtjbG9zZVRpdGxlXVxyXG4gKiBUcmFuc2xhdGluZ1xyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbem9vbVRpdGxlXVxyXG4gKiBUcmFuc2xhdGluZ1xyXG4gKlxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbYXJyb3dQcmV2VGl0bGVdXHJcbiAqIFRyYW5zbGF0aW5nXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthcnJvd05leHRUaXRsZV1cclxuICogVHJhbnNsYXRpbmdcclxuICpcclxuICogQHByb3Ageyd6b29tJyB8ICdmYWRlJyB8ICdub25lJ30gW3Nob3dIaWRlQW5pbWF0aW9uVHlwZV1cclxuICogVG8gYWRqdXN0IG9wZW5pbmcgb3IgY2xvc2luZyB0cmFuc2l0aW9uIHR5cGUgdXNlIGxpZ2h0Ym94IG9wdGlvbiBgc2hvd0hpZGVBbmltYXRpb25UeXBlYCAoYFN0cmluZ2ApLlxyXG4gKiBJdCBzdXBwb3J0cyB0aHJlZSB2YWx1ZXMgLSBgem9vbWAgKGRlZmF1bHQpLCBgZmFkZWAgKGRlZmF1bHQgaWYgdGhlcmUgaXMgbm8gdGh1bWJuYWlsKSBhbmQgYG5vbmVgLlxyXG4gKlxyXG4gKiBBbmltYXRpb25zIGFyZSBhdXRvbWF0aWNhbGx5IGRpc2FibGVkIGlmIHVzZXIgYChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpYC5cclxuICpcclxuICogQHByb3Age251bWJlcn0gaW5kZXhcclxuICogRGVmaW5lcyBzdGFydCBzbGlkZSBpbmRleC5cclxuICpcclxuICogQHByb3AgeyhlOiBNb3VzZUV2ZW50KSA9PiBudW1iZXJ9IFtnZXRDbGlja2VkSW5kZXhGbl1cclxuICpcclxuICogQHByb3Age2Jvb2xlYW59IFthcnJvd1ByZXZdXHJcbiAqIEBwcm9wIHtib29sZWFufSBbYXJyb3dOZXh0XVxyXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW3pvb21dXHJcbiAqIEBwcm9wIHtib29sZWFufSBbY2xvc2VdXHJcbiAqIEBwcm9wIHtib29sZWFufSBbY291bnRlcl1cclxuICpcclxuICogQHByb3Age3N0cmluZ30gW2Fycm93UHJldlNWR11cclxuICogQHByb3Age3N0cmluZ30gW2Fycm93TmV4dFNWR11cclxuICogQHByb3Age3N0cmluZ30gW3pvb21TVkddXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtjbG9zZVNWR11cclxuICogQHByb3Age3N0cmluZ30gW2NvdW50ZXJTVkddXHJcbiAqXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFthcnJvd1ByZXZUaXRsZV1cclxuICogQHByb3Age3N0cmluZ30gW2Fycm93TmV4dFRpdGxlXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbem9vbVRpdGxlXVxyXG4gKiBAcHJvcCB7c3RyaW5nfSBbY2xvc2VUaXRsZV1cclxuICogQHByb3Age3N0cmluZ30gW2NvdW50ZXJUaXRsZV1cclxuICpcclxuICogQHByb3Age1pvb21MZXZlbE9wdGlvbn0gW2luaXRpYWxab29tTGV2ZWxdXHJcbiAqIEBwcm9wIHtab29tTGV2ZWxPcHRpb259IFtzZWNvbmRhcnlab29tTGV2ZWxdXHJcbiAqIEBwcm9wIHtab29tTGV2ZWxPcHRpb259IFttYXhab29tTGV2ZWxdXHJcbiAqXHJcbiAqIEBwcm9wIHtib29sZWFufSBbbW91c2VNb3ZlUGFuXVxyXG4gKiBAcHJvcCB7UG9pbnQgfCBudWxsfSBbaW5pdGlhbFBvaW50ZXJQb3NdXHJcbiAqIEBwcm9wIHtib29sZWFufSBbc2hvd0hpZGVPcGFjaXR5XVxyXG4gKlxyXG4gKiBAcHJvcCB7UGhvdG9Td2lwZU1vZHVsZU9wdGlvbn0gW3Bzd3BNb2R1bGVdXHJcbiAqIEBwcm9wIHsoKSA9PiBQcm9taXNlPGFueT59IFtvcGVuUHJvbWlzZV1cclxuICogQHByb3Age2Jvb2xlYW59IFtwcmVsb2FkRmlyc3RTbGlkZV1cclxuICogQHByb3Age0VsZW1lbnRQcm92aWRlcn0gW2dhbGxlcnldXHJcbiAqIEBwcm9wIHtzdHJpbmd9IFtnYWxsZXJ5U2VsZWN0b3JdXHJcbiAqIEBwcm9wIHtFbGVtZW50UHJvdmlkZXJ9IFtjaGlsZHJlbl1cclxuICogQHByb3Age3N0cmluZ30gW2NoaWxkU2VsZWN0b3JdXHJcbiAqIEBwcm9wIHtzdHJpbmcgfCBmYWxzZX0gW3RodW1iU2VsZWN0b3JdXHJcbiAqL1xyXG5cclxuLyoqIEB0eXBlIHtQcmVwYXJlZFBob3RvU3dpcGVPcHRpb25zfSAqL1xyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICBhbGxvd1BhblRvTmV4dDogdHJ1ZSxcclxuICBzcGFjaW5nOiAwLjEsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBwaW5jaFRvQ2xvc2U6IHRydWUsXHJcbiAgY2xvc2VPblZlcnRpY2FsRHJhZzogdHJ1ZSxcclxuICBoaWRlQW5pbWF0aW9uRHVyYXRpb246IDMzMyxcclxuICBzaG93QW5pbWF0aW9uRHVyYXRpb246IDMzMyxcclxuICB6b29tQW5pbWF0aW9uRHVyYXRpb246IDMzMyxcclxuICBlc2NLZXk6IHRydWUsXHJcbiAgYXJyb3dLZXlzOiB0cnVlLFxyXG4gIHJldHVybkZvY3VzOiB0cnVlLFxyXG4gIG1heFdpZHRoVG9BbmltYXRlOiA0MDAwLFxyXG4gIGNsaWNrVG9DbG9zZU5vblpvb21hYmxlOiB0cnVlLFxyXG4gIGltYWdlQ2xpY2tBY3Rpb246ICd6b29tLW9yLWNsb3NlJyxcclxuICBiZ0NsaWNrQWN0aW9uOiAnY2xvc2UnLFxyXG4gIHRhcEFjdGlvbjogJ3RvZ2dsZS1jb250cm9scycsXHJcbiAgZG91YmxlVGFwQWN0aW9uOiAnem9vbScsXHJcbiAgaW5kZXhJbmRpY2F0b3JTZXA6ICcgLyAnLFxyXG4gIHByZWxvYWRlckRlbGF5OiAyMDAwLFxyXG4gIGJnT3BhY2l0eTogMC44LFxyXG5cclxuICBpbmRleDogMCxcclxuICBlcnJvck1zZzogJ1RoZSBpbWFnZSBjYW5ub3QgYmUgbG9hZGVkJyxcclxuICBwcmVsb2FkOiBbMSwgMl0sXHJcbiAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBob3RvU3dpcGUgQ29yZVxyXG4gKi9cclxuY2xhc3MgUGhvdG9Td2lwZSBleHRlbmRzIFBob3RvU3dpcGVCYXNlIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1Bob3RvU3dpcGVPcHRpb25zfSBbb3B0aW9uc11cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX3ByZXBhcmVPcHRpb25zKG9wdGlvbnMgfHwge30pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogb2Zmc2V0IG9mIHZpZXdwb3J0IHJlbGF0aXZlIHRvIGRvY3VtZW50XHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICovXHJcbiAgICB0aGlzLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1BvaW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fcHJldlZpZXdwb3J0U2l6ZSA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2l6ZSBvZiBzY3JvbGxhYmxlIFBob3RvU3dpcGUgdmlld3BvcnRcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMudmlld3BvcnRTaXplID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBiYWNrZ3JvdW5kIChiYWNrZHJvcCkgb3BhY2l0eVxyXG4gICAgICovXHJcbiAgICB0aGlzLmJnT3BhY2l0eSA9IDE7XHJcbiAgICB0aGlzLmN1cnJJbmRleCA9IDA7XHJcbiAgICB0aGlzLnBvdGVudGlhbEluZGV4ID0gMDtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGVzdHJveWluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNNb3VzZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtTbGlkZURhdGF9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2luaXRpYWxJdGVtRGF0YSA9IHt9O1xyXG4gICAgLyoqIEB0eXBlIHtCb3VuZHMgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLl9pbml0aWFsVGh1bWJCb3VuZHMgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMudG9wQmFyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLnRlbXBsYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuY29udGFpbmVyID0gdW5kZWZpbmVkO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IHVuZGVmaW5lZH0gKi9cclxuICAgIHRoaXMuc2Nyb2xsV3JhcCA9IHVuZGVmaW5lZDtcclxuICAgIC8qKiBAdHlwZSB7U2xpZGUgfCB1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmN1cnJTbGlkZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBET01FdmVudHMoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IG5ldyBBbmltYXRpb25zKCk7XHJcbiAgICB0aGlzLm1haW5TY3JvbGwgPSBuZXcgTWFpblNjcm9sbCh0aGlzKTtcclxuICAgIHRoaXMuZ2VzdHVyZXMgPSBuZXcgR2VzdHVyZXModGhpcyk7XHJcbiAgICB0aGlzLm9wZW5lciA9IG5ldyBPcGVuZXIodGhpcyk7XHJcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKHRoaXMpO1xyXG4gICAgdGhpcy5jb250ZW50TG9hZGVyID0gbmV3IENvbnRlbnRMb2FkZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiogQHJldHVybnMge2Jvb2xlYW59ICovXHJcbiAgaW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLmlzRGVzdHJveWluZykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5kaXNwYXRjaCgnaW5pdCcpOyAvLyBsZWdhY3lcclxuICAgIHRoaXMuZGlzcGF0Y2goJ2JlZm9yZU9wZW4nKTtcclxuXHJcbiAgICB0aGlzLl9jcmVhdGVNYWluU3RydWN0dXJlKCk7XHJcblxyXG4gICAgLy8gYWRkIGNsYXNzZXMgdG8gdGhlIHJvb3QgZWxlbWVudCBvZiBQaG90b1N3aXBlXHJcbiAgICBsZXQgcm9vdENsYXNzZXMgPSAncHN3cC0tb3Blbic7XHJcbiAgICBpZiAodGhpcy5nZXN0dXJlcy5zdXBwb3J0c1RvdWNoKSB7XHJcbiAgICAgIHJvb3RDbGFzc2VzICs9ICcgcHN3cC0tdG91Y2gnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tYWluQ2xhc3MpIHtcclxuICAgICAgcm9vdENsYXNzZXMgKz0gJyAnICsgdGhpcy5vcHRpb25zLm1haW5DbGFzcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyByb290Q2xhc3NlcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJJbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleCB8fCAwO1xyXG4gICAgdGhpcy5wb3RlbnRpYWxJbmRleCA9IHRoaXMuY3VyckluZGV4O1xyXG4gICAgdGhpcy5kaXNwYXRjaCgnZmlyc3RVcGRhdGUnKTsgLy8gc3RhcnRpbmcgaW5kZXggY2FuIGJlIG1vZGlmaWVkIGhlcmVcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIHNjcm9sbCB3aGVlbCBoYW5kbGVyIHRvIGJsb2NrIHRoZSBzY3JvbGxcclxuICAgIHRoaXMuc2Nyb2xsV2hlZWwgPSBuZXcgU2Nyb2xsV2hlZWwodGhpcyk7XHJcblxyXG4gICAgLy8gc2FuaXRpemUgaW5kZXhcclxuICAgIGlmIChOdW1iZXIuaXNOYU4odGhpcy5jdXJySW5kZXgpXHJcbiAgICAgIHx8IHRoaXMuY3VyckluZGV4IDwgMFxyXG4gICAgICB8fCB0aGlzLmN1cnJJbmRleCA+PSB0aGlzLmdldE51bUl0ZW1zKCkpIHtcclxuICAgICAgdGhpcy5jdXJySW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5nZXN0dXJlcy5zdXBwb3J0c1RvdWNoKSB7XHJcbiAgICAgIC8vIGVuYWJsZSBtb3VzZSBmZWF0dXJlcyBpZiBubyB0b3VjaCBzdXBwb3J0IGRldGVjdGVkXHJcbiAgICAgIHRoaXMubW91c2VEZXRlY3RlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhdXNlcyBmb3JjZWQgc3luY2hyb25vdXMgbGF5b3V0XHJcbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuXHJcbiAgICB0aGlzLm9mZnNldC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxJdGVtRGF0YSA9IHRoaXMuZ2V0SXRlbURhdGEodGhpcy5jdXJySW5kZXgpO1xyXG4gICAgdGhpcy5kaXNwYXRjaCgnZ2V0dGluZ0RhdGEnLCB7XHJcbiAgICAgIGluZGV4OiB0aGlzLmN1cnJJbmRleCxcclxuICAgICAgZGF0YTogdGhpcy5faW5pdGlhbEl0ZW1EYXRhLFxyXG4gICAgICBzbGlkZTogdW5kZWZpbmVkXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAqTGF5b3V0KiAtIGNhbGN1bGF0ZSBzaXplIGFuZCBwb3NpdGlvbiBvZiBlbGVtZW50cyBoZXJlXHJcbiAgICB0aGlzLl9pbml0aWFsVGh1bWJCb3VuZHMgPSB0aGlzLmdldFRodW1iQm91bmRzKCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoKCdpbml0aWFsTGF5b3V0Jyk7XHJcblxyXG4gICAgdGhpcy5vbignb3BlbmluZ0FuaW1hdGlvbkVuZCcsICgpID0+IHtcclxuICAgICAgY29uc3QgeyBpdGVtSG9sZGVycyB9ID0gdGhpcy5tYWluU2Nyb2xsO1xyXG5cclxuICAgICAgLy8gQWRkIGNvbnRlbnQgdG8gdGhlIHByZXZpb3VzIGFuZCBuZXh0IHNsaWRlXHJcbiAgICAgIGlmIChpdGVtSG9sZGVyc1swXSkge1xyXG4gICAgICAgIGl0ZW1Ib2xkZXJzWzBdLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChpdGVtSG9sZGVyc1swXSwgdGhpcy5jdXJySW5kZXggLSAxKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbUhvbGRlcnNbMl0pIHtcclxuICAgICAgICBpdGVtSG9sZGVyc1syXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLnNldENvbnRlbnQoaXRlbUhvbGRlcnNbMl0sIHRoaXMuY3VyckluZGV4ICsgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXBwZW5kSGVhdnkoKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGVudExvYWRlci51cGRhdGVMYXp5KCk7XHJcblxyXG4gICAgICB0aGlzLmV2ZW50cy5hZGQod2luZG93LCAncmVzaXplJywgdGhpcy5faGFuZGxlUGFnZVJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5ldmVudHMuYWRkKHdpbmRvdywgJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZVBhZ2VTY3JvbGxPZmZzZXQuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2goJ2JpbmRFdmVudHMnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNldCBjb250ZW50IGZvciBjZW50ZXIgc2xpZGUgKGZpcnN0IHRpbWUpXHJcbiAgICBpZiAodGhpcy5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzWzFdKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLm1haW5TY3JvbGwuaXRlbUhvbGRlcnNbMV0sIHRoaXMuY3VyckluZGV4KTtcclxuICAgIH1cclxuICAgIHRoaXMuZGlzcGF0Y2goJ2NoYW5nZScpO1xyXG5cclxuICAgIHRoaXMub3BlbmVyLm9wZW4oKTtcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdhZnRlckluaXQnKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBsb29wZWQgc2xpZGUgaW5kZXhcclxuICAgKiAoZm9yIGV4YW1wbGUsIC0xIHdpbGwgcmV0dXJuIHRoZSBsYXN0IHNsaWRlKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXRMb29wZWRJbmRleChpbmRleCkge1xyXG4gICAgY29uc3QgbnVtU2xpZGVzID0gdGhpcy5nZXROdW1JdGVtcygpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMubG9vcCkge1xyXG4gICAgICBpZiAoaW5kZXggPiBudW1TbGlkZXMgLSAxKSB7XHJcbiAgICAgICAgaW5kZXggLT0gbnVtU2xpZGVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgaW5kZXggKz0gbnVtU2xpZGVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsYW1wKGluZGV4LCAwLCBudW1TbGlkZXMgLSAxKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZEhlYXZ5KCkge1xyXG4gICAgdGhpcy5tYWluU2Nyb2xsLml0ZW1Ib2xkZXJzLmZvckVhY2goKGl0ZW1Ib2xkZXIpID0+IHtcclxuICAgICAgaXRlbUhvbGRlci5zbGlkZT8uYXBwZW5kSGVhdnkoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlIHRoZSBzbGlkZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBOZXcgaW5kZXhcclxuICAgKi9cclxuICBnb1RvKGluZGV4KSB7XHJcbiAgICB0aGlzLm1haW5TY3JvbGwubW92ZUluZGV4QnkoXHJcbiAgICAgIHRoaXMuZ2V0TG9vcGVkSW5kZXgoaW5kZXgpIC0gdGhpcy5wb3RlbnRpYWxJbmRleFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdvIHRvIHRoZSBuZXh0IHNsaWRlLlxyXG4gICAqL1xyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLmdvVG8odGhpcy5wb3RlbnRpYWxJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR28gdG8gdGhlIHByZXZpb3VzIHNsaWRlLlxyXG4gICAqL1xyXG4gIHByZXYoKSB7XHJcbiAgICB0aGlzLmdvVG8odGhpcy5wb3RlbnRpYWxJbmRleCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHNlZSBzbGlkZS9zbGlkZS5qcyB6b29tVG9cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UGFyYW1ldGVyczxTbGlkZVsnem9vbVRvJ10+fSBhcmdzXHJcbiAgICovXHJcbiAgem9vbVRvKC4uLmFyZ3MpIHtcclxuICAgIHRoaXMuY3VyclNsaWRlPy56b29tVG8oLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc2VlIHNsaWRlL3NsaWRlLmpzIHRvZ2dsZVpvb21cclxuICAgKi9cclxuICB0b2dnbGVab29tKCkge1xyXG4gICAgdGhpcy5jdXJyU2xpZGU/LnRvZ2dsZVpvb20oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlIHRoZSBnYWxsZXJ5LlxyXG4gICAqIEFmdGVyIGNsb3NpbmcgdHJhbnNpdGlvbiBlbmRzIC0gZGVzdHJveSBpdFxyXG4gICAqL1xyXG4gIGNsb3NlKCkge1xyXG4gICAgaWYgKCF0aGlzLm9wZW5lci5pc09wZW4gfHwgdGhpcy5pc0Rlc3Ryb3lpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNEZXN0cm95aW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoKCdjbG9zZScpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRzLnJlbW92ZUFsbCgpO1xyXG4gICAgdGhpcy5vcGVuZXIuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lzIHRoZSBnYWxsZXJ5OlxyXG4gICAqIC0gaW5zdGFudGx5IGNsb3NlcyB0aGUgZ2FsbGVyeVxyXG4gICAqIC0gdW5iaW5kcyBldmVudHMsXHJcbiAgICogLSBjbGVhbnMgaW50ZXJ2YWxzIGFuZCB0aW1lb3V0c1xyXG4gICAqIC0gcmVtb3ZlcyBlbGVtZW50cyBmcm9tIERPTVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNEZXN0cm95aW5nKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5zaG93SGlkZUFuaW1hdGlvblR5cGUgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2goJ2Rlc3Ryb3knKTtcclxuXHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGxXcmFwKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsV3JhcC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2Nyb2xsV3JhcC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQ/LnJlbW92ZSgpO1xyXG5cclxuICAgIHRoaXMubWFpblNjcm9sbC5pdGVtSG9sZGVycy5mb3JFYWNoKChpdGVtSG9sZGVyKSA9PiB7XHJcbiAgICAgIGl0ZW1Ib2xkZXIuc2xpZGU/LmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGVudExvYWRlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmV2ZW50cy5yZW1vdmVBbGwoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2gvcmVsb2FkIGNvbnRlbnQgb2YgYSBzbGlkZSBieSBpdHMgaW5kZXhcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzbGlkZUluZGV4XHJcbiAgICovXHJcbiAgcmVmcmVzaFNsaWRlQ29udGVudChzbGlkZUluZGV4KSB7XHJcbiAgICB0aGlzLmNvbnRlbnRMb2FkZXIucmVtb3ZlQnlJbmRleChzbGlkZUluZGV4KTtcclxuICAgIHRoaXMubWFpblNjcm9sbC5pdGVtSG9sZGVycy5mb3JFYWNoKChpdGVtSG9sZGVyLCBpKSA9PiB7XHJcbiAgICAgIGxldCBwb3RlbnRpYWxIb2xkZXJJbmRleCA9ICh0aGlzLmN1cnJTbGlkZT8uaW5kZXggPz8gMCkgLSAxICsgaTtcclxuICAgICAgaWYgKHRoaXMuY2FuTG9vcCgpKSB7XHJcbiAgICAgICAgcG90ZW50aWFsSG9sZGVySW5kZXggPSB0aGlzLmdldExvb3BlZEluZGV4KHBvdGVudGlhbEhvbGRlckluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG90ZW50aWFsSG9sZGVySW5kZXggPT09IHNsaWRlSW5kZXgpIHtcclxuICAgICAgICAvLyBzZXQgdGhlIG5ldyBzbGlkZSBjb250ZW50XHJcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KGl0ZW1Ib2xkZXIsIHNsaWRlSW5kZXgsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBhY3RpdmF0ZSB0aGUgbmV3IHNsaWRlIGlmIGl0J3MgY3VycmVudFxyXG4gICAgICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJTbGlkZSA9IGl0ZW1Ib2xkZXIuc2xpZGU7XHJcbiAgICAgICAgICBpdGVtSG9sZGVyLnNsaWRlPy5zZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2goJ2NoYW5nZScpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBzbGlkZSBjb250ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0l0ZW1Ib2xkZXJ9IGhvbGRlciBtYWluU2Nyb2xsLml0ZW1Ib2xkZXJzIGFycmF5IGl0ZW1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggU2xpZGUgaW5kZXhcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gSWYgY29udGVudCBzaG91bGQgYmUgc2V0IGV2ZW4gaWYgaW5kZXggd2Fzbid0IGNoYW5nZWRcclxuICAgKi9cclxuICBzZXRDb250ZW50KGhvbGRlciwgaW5kZXgsIGZvcmNlKSB7XHJcbiAgICBpZiAodGhpcy5jYW5Mb29wKCkpIHtcclxuICAgICAgaW5kZXggPSB0aGlzLmdldExvb3BlZEluZGV4KGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaG9sZGVyLnNsaWRlKSB7XHJcbiAgICAgIGlmIChob2xkZXIuc2xpZGUuaW5kZXggPT09IGluZGV4ICYmICFmb3JjZSkge1xyXG4gICAgICAgIC8vIGV4aXQgaWYgaG9sZGVyIGFscmVhZHkgY29udGFpbnMgdGhpcyBzbGlkZVxyXG4gICAgICAgIC8vIHRoaXMgY291bGQgYmUgY29tbW9uIHdoZW4ganVzdCB0aHJlZSBzbGlkZXMgYXJlIHVzZWRcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGRlc3Ryb3kgcHJldmlvdXMgc2xpZGVcclxuICAgICAgaG9sZGVyLnNsaWRlLmRlc3Ryb3koKTtcclxuICAgICAgaG9sZGVyLnNsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV4aXQgaWYgbm8gbG9vcCBhbmQgaW5kZXggaXMgb3V0IG9mIGJvdW5kc1xyXG4gICAgaWYgKCF0aGlzLmNhbkxvb3AoKSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuZ2V0TnVtSXRlbXMoKSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW1EYXRhID0gdGhpcy5nZXRJdGVtRGF0YShpbmRleCk7XHJcbiAgICBob2xkZXIuc2xpZGUgPSBuZXcgU2xpZGUoaXRlbURhdGEsIGluZGV4LCB0aGlzKTtcclxuXHJcbiAgICAvLyBzZXQgY3VycmVudCBzbGlkZVxyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJJbmRleCkge1xyXG4gICAgICB0aGlzLmN1cnJTbGlkZSA9IGhvbGRlci5zbGlkZTtcclxuICAgIH1cclxuXHJcbiAgICBob2xkZXIuc2xpZGUuYXBwZW5kKGhvbGRlci5lbCk7XHJcbiAgfVxyXG5cclxuICAvKiogQHJldHVybnMge1BvaW50fSAqL1xyXG4gIGdldFZpZXdwb3J0Q2VudGVyUG9pbnQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiB0aGlzLnZpZXdwb3J0U2l6ZS54IC8gMixcclxuICAgICAgeTogdGhpcy52aWV3cG9ydFNpemUueSAvIDJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2l6ZSBvZiBhbGwgZWxlbWVudHMuXHJcbiAgICogRXhlY3V0ZWQgb24gaW5pdCBhbmQgb24gcGFnZSByZXNpemUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gVXBkYXRlIHNpemUgZXZlbiBpZiBzaXplIG9mIHZpZXdwb3J0IHdhcyBub3QgY2hhbmdlZC5cclxuICAgKi9cclxuICB1cGRhdGVTaXplKGZvcmNlKSB7XHJcbiAgICAvLyBsZXQgaXRlbTtcclxuICAgIC8vIGxldCBpdGVtSW5kZXg7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNEZXN0cm95aW5nKSB7XHJcbiAgICAgIC8vIGV4aXQgaWYgUGhvdG9Td2lwZSBpcyBjbG9zZWQgb3IgY2xvc2luZ1xyXG4gICAgICAvLyAodG8gYXZvaWQgZXJyb3JzLCBhcyByZXNpemUgZXZlbnQgbWlnaHQgYmUgZGVsYXllZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc3QgbmV3V2lkdGggPSB0aGlzLnNjcm9sbFdyYXAuY2xpZW50V2lkdGg7XHJcbiAgICAvL2NvbnN0IG5ld0hlaWdodCA9IHRoaXMuc2Nyb2xsV3JhcC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgbmV3Vmlld3BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKHRoaXMub3B0aW9ucywgdGhpcyk7XHJcblxyXG4gICAgaWYgKCFmb3JjZSAmJiBwb2ludHNFcXVhbChuZXdWaWV3cG9ydFNpemUsIHRoaXMuX3ByZXZWaWV3cG9ydFNpemUpKSB7XHJcbiAgICAgIC8vIEV4aXQgaWYgZGltZW5zaW9ucyB3ZXJlIG5vdCBjaGFuZ2VkXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMuX3ByZXZWaWV3cG9ydFNpemUueCA9IG5ld1dpZHRoO1xyXG4gICAgLy90aGlzLl9wcmV2Vmlld3BvcnRTaXplLnkgPSBuZXdIZWlnaHQ7XHJcbiAgICBlcXVhbGl6ZVBvaW50cyh0aGlzLl9wcmV2Vmlld3BvcnRTaXplLCBuZXdWaWV3cG9ydFNpemUpO1xyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2goJ2JlZm9yZVJlc2l6ZScpO1xyXG5cclxuICAgIGVxdWFsaXplUG9pbnRzKHRoaXMudmlld3BvcnRTaXplLCB0aGlzLl9wcmV2Vmlld3BvcnRTaXplKTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0KCk7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaCgndmlld3BvcnRTaXplJyk7XHJcblxyXG4gICAgLy8gUmVzaXplIHNsaWRlcyBvbmx5IGFmdGVyIG9wZW5lciBhbmltYXRpb24gaXMgZmluaXNoZWRcclxuICAgIC8vIGFuZCBkb24ndCByZS1jYWxjdWxhdGUgc2l6ZSBvbiBpbml0YWwgc2l6ZSB1cGRhdGVcclxuICAgIHRoaXMubWFpblNjcm9sbC5yZXNpemUodGhpcy5vcGVuZXIuaXNPcGVuKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaGFzTW91c2UgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhhbnktaG92ZXI6IGhvdmVyKScpLm1hdGNoZXMpIHtcclxuICAgICAgdGhpcy5tb3VzZURldGVjdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaCgncmVzaXplJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3BhY2l0eVxyXG4gICAqL1xyXG4gIGFwcGx5QmdPcGFjaXR5KG9wYWNpdHkpIHtcclxuICAgIHRoaXMuYmdPcGFjaXR5ID0gTWF0aC5tYXgob3BhY2l0eSwgMCk7XHJcbiAgICBpZiAodGhpcy5iZykge1xyXG4gICAgICB0aGlzLmJnLnN0eWxlLm9wYWNpdHkgPSBTdHJpbmcodGhpcy5iZ09wYWNpdHkgKiB0aGlzLm9wdGlvbnMuYmdPcGFjaXR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgbW91c2UgaXMgZGV0ZWN0ZWRcclxuICAgKi9cclxuICBtb3VzZURldGVjdGVkKCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc01vdXNlKSB7XHJcbiAgICAgIHRoaXMuaGFzTW91c2UgPSB0cnVlO1xyXG4gICAgICB0aGlzLmVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ3Bzd3AtLWhhc19tb3VzZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSByZXNpemUgZXZlbnQgaGFuZGxlclxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfaGFuZGxlUGFnZVJlc2l6ZSgpIHtcclxuICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgIC8vIEluIGlPUyB3ZWJ2aWV3LCBpZiBlbGVtZW50IHNpemUgZGVwZW5kcyBvbiBkb2N1bWVudCBzaXplLFxyXG4gICAgLy8gaXQnbGwgYmUgbWVhc3VyZWQgaW5jb3JyZWN0bHkgaW4gcmVzaXplIGV2ZW50XHJcbiAgICAvL1xyXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3MDU5NVxyXG4gICAgLy8gaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9vbnJlc2l6ZS1ldmVudC1icm9rZW4taW4tbW9iaWxlLXNhZmFyaS1kODQ2OTAyN2JmNGRcclxuICAgIGlmICgvaVBob25lfGlQYWR8aVBvZC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSBzY3JvbGwgb2Zmc2V0IGlzIHVzZWRcclxuICAgKiB0byBnZXQgY29ycmVjdCBjb29yZGluYXRlc1xyXG4gICAqIHJlbGF0aXZlIHRvIFBob3RvU3dpcGUgdmlld3BvcnQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0KCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGxPZmZzZXQoMCwgd2luZG93LnBhZ2VZT2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRTY3JvbGxPZmZzZXQoeCwgeSkge1xyXG4gICAgdGhpcy5vZmZzZXQueCA9IHg7XHJcbiAgICB0aGlzLm9mZnNldC55ID0geTtcclxuICAgIHRoaXMuZGlzcGF0Y2goJ3VwZGF0ZVNjcm9sbE9mZnNldCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIG1haW4gSFRNTCBzdHJ1Y3R1cmUgb2YgUGhvdG9Td2lwZSxcclxuICAgKiBhbmQgYWRkIGl0IHRvIERPTVxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfY3JlYXRlTWFpblN0cnVjdHVyZSgpIHtcclxuICAgIC8vIHJvb3QgRE9NIGVsZW1lbnQgb2YgUGhvdG9Td2lwZSAoLnBzd3ApXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdwc3dwJywgJ2RpdicpO1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XHJcblxyXG4gICAgLy8gdGVtcGxhdGUgaXMgbGVnYWN5IHByb3BcclxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmVsZW1lbnQ7XHJcblxyXG4gICAgLy8gQmFja2dyb3VuZCBpcyBhZGRlZCBhcyBhIHNlcGFyYXRlIGVsZW1lbnQsXHJcbiAgICAvLyBhcyBhbmltYXRpbmcgb3BhY2l0eSBpcyBmYXN0ZXIgdGhhbiBhbmltYXRpbmcgcmdiYSgpXHJcbiAgICB0aGlzLmJnID0gY3JlYXRlRWxlbWVudCgncHN3cF9fYmcnLCAnZGl2JywgdGhpcy5lbGVtZW50KTtcclxuICAgIHRoaXMuc2Nyb2xsV3JhcCA9IGNyZWF0ZUVsZW1lbnQoJ3Bzd3BfX3Njcm9sbC13cmFwJywgJ3NlY3Rpb24nLCB0aGlzLmVsZW1lbnQpO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdwc3dwX19jb250YWluZXInLCAnZGl2JywgdGhpcy5zY3JvbGxXcmFwKTtcclxuXHJcbiAgICAvLyBhcmlhIHBhdHRlcm46IGNhcm91c2VsXHJcbiAgICB0aGlzLnNjcm9sbFdyYXAuc2V0QXR0cmlidXRlKCdhcmlhLXJvbGVkZXNjcmlwdGlvbicsICdjYXJvdXNlbCcpO1xyXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAnb2ZmJyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bzd3BfX2l0ZW1zJyk7XHJcblxyXG4gICAgdGhpcy5tYWluU2Nyb2xsLmFwcGVuZEhvbGRlcnMoKTtcclxuXHJcbiAgICB0aGlzLnVpID0gbmV3IFVJKHRoaXMpO1xyXG4gICAgdGhpcy51aS5pbml0KCk7XHJcblxyXG4gICAgLy8gYXBwZW5kIHRvIERPTVxyXG4gICAgKHRoaXMub3B0aW9ucy5hcHBlbmRUb0VsIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHBvc2l0aW9uIGFuZCBkaW1lbnNpb25zIG9mIHNtYWxsIHRodW1ibmFpbFxyXG4gICAqICAge3g6LHk6LHc6fVxyXG4gICAqXHJcbiAgICogSGVpZ2h0IGlzIG9wdGlvbmFsIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBsYXJnZSBpbWFnZSlcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtCb3VuZHMgfCB1bmRlZmluZWR9XHJcbiAgICovXHJcbiAgZ2V0VGh1bWJCb3VuZHMoKSB7XHJcbiAgICByZXR1cm4gZ2V0VGh1bWJCb3VuZHMoXHJcbiAgICAgIHRoaXMuY3VyckluZGV4LFxyXG4gICAgICB0aGlzLmN1cnJTbGlkZSA/IHRoaXMuY3VyclNsaWRlLmRhdGEgOiB0aGlzLl9pbml0aWFsSXRlbURhdGEsXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGUgUGhvdG9Td2lwZSBjYW4gaGF2ZSBjb250aW51b3VzIGxvb3BcclxuICAgKiBAcmV0dXJucyBCb29sZWFuXHJcbiAgICovXHJcbiAgY2FuTG9vcCgpIHtcclxuICAgIHJldHVybiAodGhpcy5vcHRpb25zLmxvb3AgJiYgdGhpcy5nZXROdW1JdGVtcygpID4gMik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7UGhvdG9Td2lwZU9wdGlvbnN9IG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJlcGFyZWRQaG90b1N3aXBlT3B0aW9uc31cclxuICAgKi9cclxuICBfcHJlcGFyZU9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbiksICh1cGRhdGU6IHNsb3cpJykubWF0Y2hlcykge1xyXG4gICAgICBvcHRpb25zLnNob3dIaWRlQW5pbWF0aW9uVHlwZSA9ICdub25lJztcclxuICAgICAgb3B0aW9ucy56b29tQW5pbWF0aW9uRHVyYXRpb24gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAdHlwZSB7UHJlcGFyZWRQaG90b1N3aXBlT3B0aW9uc30gKi9cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxyXG4gICAgICAuLi5vcHRpb25zXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGhvdG9Td2lwZSBhcyBkZWZhdWx0IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBob3Rvc3dpcGUuZXNtLmpzLm1hcFxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW50ZXJmYWNlIFNjcmlwdFJ1bnRpbWUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGFydE1hcms6IFBlcmZvcm1hbmNlTWFyaztcclxuICBlbmRNYXJrOiBQZXJmb3JtYW5jZU1hcms7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gcmVjb3JkIHBlcmZvcm1hbmNlIHN0YXJ0IGFuZCBlbmQgbWFya3MuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ3YlBlcmYge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHNjcmlwdFJ1bnRpbWVNYXJrczogU2NyaXB0UnVudGltZSA9IHtcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICBzdGFydE1hcms6IG51bGwsXHJcbiAgICBlbmRNYXJrOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKiBJbnN0YW50aWF0aW5nIGEgU2NyaXB0UGVyZiByZWNvcmRzIHRoZSBwZXJmb3JtYW5jZSBzdGFydCBtYXJrLiAqL1xyXG4gIGNvbnN0cnVjdG9yKHNjcmlwdE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZSA9IHNjcmlwdE5hbWU7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5zdGFydE1hcmsgPSBwZXJmb3JtYW5jZS5tYXJrKGAke3RoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWV9LXN0YXJ0YCk7XHJcbiAgICBSd2JQZXJmLmNvdW50Kys7XHJcbiAgfVxyXG5cclxuICAvKiogQ2FsbCBlbmQoKSB0byBzZXQgdGhlIGVuZCB0aW1lIHN0YW1wLiAqL1xyXG4gIHB1YmxpYyBlbmQoKSB7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrID0gcGVyZm9ybWFuY2UubWFyayhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfS1lbmRgKTtcclxuICAgIHRoaXMubWVhc3VyZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgY29uc29sZSBvdXRwdXQgb2YgdGhpcyBvYmplY3QncyBwZXJmb3JtYW5jZSBtZWFzdXJlbWVudC4gKi9cclxuICBwcml2YXRlIG1lYXN1cmUoKSB7XHJcbiAgICBsZXQgbWVhc3VyZSA9IHBlcmZvcm1hbmNlLm1lYXN1cmUoXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWUsXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLnN0YXJ0TWFyay5uYW1lLFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrLm5hbWVcclxuICAgICk7XHJcbiAgICByZXR1cm4gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfSBleGVjdXRpb24gdGltZSBpczogJHttZWFzdXJlLmR1cmF0aW9ufWApO1xyXG4gIH1cclxufVxyXG4iXX0=
