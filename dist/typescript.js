(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scriptPerf_1 = __importDefault(require("./models/scriptPerf"));
const rwbErrorBus_1 = __importDefault(require("./models/rwbErrorBus"));
const dictionaryWidget_1 = __importDefault(require("./components/global/dictionaryWidget"));
const toDosWidget_1 = __importDefault(require("./components/global/toDosWidget"));
const _404_1 = __importDefault(require("./components/global/404"));
const abbrDescription_1 = __importDefault(require("./models/abbrDescription"));
const classComponents = {
    /**
     * Attribute tags on mobile do not have hover option. This function adds a click
     *  ability to define an abbr tag, than rely on the title attribute.
     */
    abbrDefinitions: () => {
        const mobileabbrperf = new scriptPerf_1.default("Mobileabbrperf"); //start performance measure
        /**Give all abbr elements option to click to reveal the expanded description. */
        const allabbreviationelems = document.querySelectorAll("abbr");
        if (allabbreviationelems.length > 0) {
            for (let abbr of allabbreviationelems) {
                let abbrev = new abbrDescription_1.default(abbr);
                abbrev.revealAbbrDescription();
            }
        }
        /**Check for 404 class component */
        classComponents.fourohfour();
        mobileabbrperf.end(); //end performance measure
    },
    fourohfour: () => {
        if (rwbErrorBus_1.default.checkSelectedElement("PageComponents", "#Four-Oh-Four", false, true) !== null) {
            _404_1.default.init();
        }
    },
    init: (page) => {
        const classperf = new scriptPerf_1.default("Classcomponents"); //begin performance measure
        // Add Dictionary Widget if an element with that class is on a page
        if (page == "/pages/dictionaryword.html" || page == "/index.html" || page == "/" || page == "") {
            dictionaryWidget_1.default.init();
        }
        // Add ToDos widget if an element with that class is on a page
        if (page == "/pages/todos.html" || page == "/index.html" || page == "/" || page == "") {
            toDosWidget_1.default.init();
        }
        // Add abbr definitions
        classComponents.abbrDefinitions();
        classperf.end(); //end performance measure
    },
};
exports.default = classComponents;
},{"./components/global/404":2,"./components/global/dictionaryWidget":4,"./components/global/toDosWidget":7,"./models/abbrDescription":10,"./models/rwbErrorBus":16,"./models/scriptPerf":19}],2:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../models/client");
const rwbErrorBus_1 = __importDefault(require("../../models/rwbErrorBus"));
const notFound404Widget = {
    init: () => {
        let client404 = new client_1.client();
        let clientRefferInfo;
        let clientRttInfo;
        let clientPlatformInfo;
        clientRefferInfo = rwbErrorBus_1.default.checkSelectedElement("FourOhFour", "#clientreferrer", true, true);
        clientRttInfo = rwbErrorBus_1.default.checkSelectedElement("FourOhFour", "#clientrtt", true, true);
        clientPlatformInfo = rwbErrorBus_1.default.checkSelectedElement("FourOhFour", "#clientplat", true, true);
        //Fill information secion
        clientRefferInfo.textContent = client404.oldURL ? client404.oldURL : window.location.href;
        clientRttInfo.textContent = `${client404.connectiontype ? client404.connectiontype : "No connection type found."}`;
        clientRttInfo.textContent += `, rtt of ${client404.connectionrtt ? client404.connectionrtt : "No rtt found."}`;
        clientPlatformInfo.textContent = client404.browserplatform
            ? client404.browserplatform
            : "No platform information found.";
        clientPlatformInfo.textContent += `, ${client404.useragent ? client404.useragent : "No user agent info."}`;
        //Provide a link to go back where you came from
        let goBackLink;
        goBackLink = rwbErrorBus_1.default.checkSelectedElement("FourOhFour", "#oldURL", true, true);
        if (client404.oldURL.includes("404.html")) {
            client404.oldURL = window.location.origin;
        }
        let goBackHref = client404.oldURL ? client404.oldURL : window.location.origin;
        goBackLink.setAttribute("href", `${goBackHref}`);
        goBackLink.setAttribute("title", goBackHref);
    },
};
exports.default = notFound404Widget;
},{"../../models/client":12,"../../models/rwbErrorBus":16}],3:[function(require,module,exports){
"use strict";
//--Copyright (c) 2024-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rwbErrorBus_1 = __importDefault(require("../../models/rwbErrorBus"));
const colorScheme = {
    checkToggleBtnState: () => {
        let themeCacheUserPref;
        let themeCacheBrowserPref;
        if (!rwbErrorBus_1.default.checkLocalStorageEqualNull("ColorScheme", "color-scheme-preference")) {
            themeCacheUserPref = colorScheme.getUserPreference();
            themeCacheBrowserPref = colorScheme.getBrowserPreference();
        }
        else {
            themeCacheUserPref = colorScheme.getSystemPreference();
            themeCacheBrowserPref = themeCacheUserPref;
        }
        //Change the toggle button to match the displayed theme
        let themeToggleContainer = document.querySelector("#themeToggle");
        let themeToggleBtn = themeToggleContainer.querySelector("div.toggle");
        let themeToggleLabel = themeToggleContainer.querySelector("p");
        let themeToggleInputElems = themeToggleContainer.querySelectorAll("input");
        let themeToggleInputDark = themeToggleInputElems[0];
        let themeToggleInputLight = themeToggleInputElems[1];
        if (themeCacheUserPref == "dark") {
            //Initial state is light mode. Toggle checked and add 'enabled' class
            themeToggleInputDark.toggleAttribute("checked");
            themeToggleInputLight.removeAttribute("checked");
            themeToggleContainer.classList.add("enabled");
            themeToggleBtn.classList.add("Dark");
            themeToggleBtn.classList.remove("Light");
            themeToggleLabel.innerText = "Dark";
            return 1;
        }
        if (themeCacheUserPref == "light") {
            //Initial state is dark mode. Remove checked and remove 'enabled' class
            themeToggleInputDark.removeAttribute("checked");
            themeToggleInputLight.toggleAttribute("checked");
            themeToggleContainer.classList.add("enabled");
            themeToggleBtn.classList.add("Light");
            themeToggleBtn.classList.remove("Dark");
            themeToggleLabel.innerText = "Light";
            return 2;
        }
        themeToggleInputDark.removeAttribute("checked");
        themeToggleInputLight.removeAttribute("checked");
        themeToggleContainer.classList.remove("enabled");
        themeToggleBtn.classList.remove("Dark");
        themeToggleBtn.classList.remove("Light");
        if (themeCacheUserPref == "browser" && themeCacheBrowserPref == "dark") {
            themeToggleBtn.classList.add("Dark");
            themeToggleBtn.classList.remove("Light");
        }
        else {
            themeToggleBtn.classList.add("Light");
            themeToggleBtn.classList.remove("Dark");
        }
        themeToggleLabel.innerText = "Browser";
        return 0;
    },
    getSystemPreference: () => {
        //Check the browser system preference by matching a media query
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            return "light";
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
    },
    getBrowserPreference: () => {
        //Get the stored system preference from local cache
        return JSON.parse(localStorage.getItem("color-scheme-preference"))["browserPreference"];
    },
    getUserPreference: () => {
        //Get the stored user preference from local cache
        let userPreference = JSON.parse(localStorage.getItem("color-scheme-preference"))["userPreference"];
        if (userPreference == "none") {
            return colorScheme.getBrowserPreference();
        }
        else {
            return userPreference;
        }
    },
    /**This function initializes theme preference options in the header. The system preference and
     * user preference are stored in local cache. If a user preference has not been chosen, the system
     * preference takes precedence.
     */
    setColorTheme: (userRequestChange, userPreference) => {
        //Output the current theme preference detection
        const logUserPreference = (newPreference) => {
            console.debug(`User preference changed to ${newPreference} theme colors.`);
        };
        //Output a theme preference change log
        const logSystemPreferenceChange = (newPreference) => {
            console.log(`Browser theme colors preference changed.`);
        };
        /**Store browser color scheme preference in a map */
        let colorSchemePreferences = new Map([
            ["browserPreference", "none"],
            ["userPreference", "none"],
        ]);
        /**Set the site up for color theme changes */
        const init = (changeBrowserPreference, userPreference) => {
            let preferenceToSetTo = colorScheme.getSystemPreference();
            if (colorSchemePreferences.get("browserPreference") == "none") {
                //Get the current browser preference
                colorSchemePreferences.set("browserPreference", colorScheme.getSystemPreference());
                preferenceToSetTo = colorSchemePreferences.get("browserPreference");
            }
            //If the user has requested a previous change
            if (!rwbErrorBus_1.default.checkLocalStorageEqualNull("ColorScheme", "color-scheme-preference") &&
                !changeBrowserPreference &&
                colorSchemePreferences.get("userPreference") != "none") {
                preferenceToSetTo = colorScheme.getUserPreference();
            }
            //If the user has requested a change
            if (userPreference == 2) {
                preferenceToSetTo = "light";
            }
            if (userPreference == 1) {
                preferenceToSetTo = "dark";
            }
            if (userPreference == 0 && !changeBrowserPreference)
                preferenceToSetTo = "browser";
            //Add user's preference option to local storage
            colorScheme.setLocalStorage(preferenceToSetTo, changeBrowserPreference, userPreference, colorSchemePreferences);
            //Log the current action
            if (userPreference >= 0 && !changeBrowserPreference) {
                logUserPreference(preferenceToSetTo);
            }
            if (changeBrowserPreference) {
                logSystemPreferenceChange(preferenceToSetTo);
            }
        };
        if (rwbErrorBus_1.default.checkLocalStorageEqualNull("ColorScheme", "color-scheme-preference")) {
            userPreference = -1;
            init(false, userPreference);
        }
        if (userPreference >= 0 && userRequestChange) {
            init(false, userPreference);
        }
        colorScheme.setDomElements(colorScheme.getUserPreference());
        colorScheme.checkToggleBtnState();
        /**Check for color scheme preference change */
        window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
            if (rwbErrorBus_1.default.checkLocalStorageNullorEmpty("ColorScheme", "color-scheme-preference", true)) {
                localStorage.removeItem("color-scheme-preference");
                console.error("Local storage key has been removed. Refresh the page to generate a new key-value pair.");
                return;
            }
            //Change the browser preferences
            init(true, 0);
            colorScheme.setDomElements(colorScheme.getUserPreference());
            colorScheme.checkToggleBtnState();
        });
    },
    setDomElements: (preference) => {
        if (preference == "browser") {
            preference = colorScheme.getSystemPreference();
        }
        //Set the body light/dark mode class
        document.body.classList.remove(`${colorScheme.toggleTheme(preference)}Mode`);
        document.body.classList.add(`${preference}Mode`);
    },
    setLocalStorage: (
    //Store theme preferences in local storage
    newPreference, changeBrowserPreference, userPreference, colorSchemePreferences) => {
        if (userPreference == 0 && changeBrowserPreference == false) {
            colorScheme.setLocalStorageUserChange(newPreference);
            return;
        }
        if (changeBrowserPreference) {
            colorScheme.setLocalStorageBrowserChange(newPreference);
            return;
        }
        if (userPreference > 0) {
            colorScheme.setLocalStorageUserChange(newPreference);
            return;
        }
        localStorage.setItem("color-scheme-preference", JSON.stringify(Object.fromEntries(colorSchemePreferences)));
    },
    setLocalStorageBrowserChange: (newPreference) => {
        //This function changes the browser preference
        let currentColorSchemePreferences = JSON.parse(localStorage.getItem("color-scheme-preference"));
        currentColorSchemePreferences.browserPreference = `${newPreference}`;
        localStorage.setItem("color-scheme-preference", JSON.stringify(currentColorSchemePreferences));
    },
    setLocalStorageUserChange: (newPreference) => {
        //This function changes the user preference
        let currentColorSchemePreferences = JSON.parse(localStorage.getItem("color-scheme-preference"));
        currentColorSchemePreferences.userPreference = `${newPreference}`;
        localStorage.setItem("color-scheme-preference", JSON.stringify(currentColorSchemePreferences));
    },
    toggleTheme: (theme) => {
        //Function to toggle light, dark string
        if (theme == "light") {
            return "dark";
        }
        else {
            return "light";
        }
    },
};
exports.default = colorScheme;
},{"../../models/rwbErrorBus":16}],4:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dictionarySearch_1 = require("../../models/dictionarySearch");
const rwbErrorBus_1 = __importDefault(require("../../models/rwbErrorBus"));
/**
 * Component containing the dictionary widget's creation.
 */
const dictionaryWidget = {
    /**
     * This initialization function creates a dictionary search widget by calling the
     *  constructor.
     * @param elem - Element containing 'dictionaryWidget' class
     */
    init: () => {
        let dictionaryWidgetStartingElement;
        dictionaryWidgetStartingElement = rwbErrorBus_1.default.checkSelectedElement("DictionaryWidget", ".dictionaryWidget", true, true);
        if (dictionaryWidgetStartingElement == null) {
            console.warn("Cannot find container element for dictionary widget placement. Skipping its creation.");
            return;
        }
        // DictionarySearch constructor
        Object.create(new dictionarySearch_1.DictionarySearch(dictionaryWidgetStartingElement));
    },
};
exports.default = dictionaryWidget;
},{"../../models/dictionarySearch":14,"../../models/rwbErrorBus":16}],5:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navItems_1 = __importDefault(require("../../data/navItems"));
const rwbErrorBus_1 = __importStar(require("../../models/rwbErrorBus"));
const scriptPerf_1 = __importDefault(require("../../models/scriptPerf"));
const preferences_1 = require("./preferences");
/**
 * Widget to add site header and footer. Instantiated in 'Main' script.
 */
const headerFooter = {
    headerWidget: {
        /**
         * Create header with site logo appended.
         * @param main HTML 'main' element
         * @returns Populated header element
         */
        buildHeader: () => {
            /**
             * Basic HTML header element containing logo (H1)
             */
            const siteHeader = document.createElement("header");
            const siteHeaderContainer = document.createElement("div");
            siteHeaderContainer.classList.add("width-max-center");
            const H1 = document.createElement("H1");
            H1.textContent = "<Random Web Bits>";
            H1.setAttribute("id", "RandomWebBits");
            siteHeaderContainer.append(H1);
            siteHeader.append(siteHeaderContainer);
            return siteHeader;
        },
        buildNavigation: () => {
            // Build the header navigation based on navigation data
            // Create navigation elements
            const headerNavFrag = document.createDocumentFragment();
            const headerNav = headerNavFrag
                .appendChild(document.createElement("nav"))
                .appendChild(document.createElement("ul"));
            // Append nav data to nav elements
            navItems_1.default.map(item => {
                const navListItems = document.createElement("li");
                const navListLinks = document.createElement("a");
                navListItems.prepend(navListLinks);
                headerNav.append(navListItems);
                // Add navigation attributes and property values
                navListLinks.textContent = `${item.innerText}`;
                // Environment links edit, requiring different link relatives to operate
                // Github pages operates from repository, not '/'
                //if (window.location.host == 'robhowe-a.github.io') {
                //link data edit for dev environment
                //navListLinks.setAttribute('href', `/RandomWebBits/${item.hReference}`);
                //} else {
                //link data in other environments
                navListLinks.setAttribute("href", `/${item.hReference}`);
                //}
                navListLinks.setAttribute("title", item.title);
            });
            return headerNavFrag;
        },
        /**
         * Site header containing navigation links and site logo.
         */
        init: () => {
            const headerperf = new scriptPerf_1.default("Header");
            /**
             * HTML 'main' element
             */
            let pageMain;
            pageMain = rwbErrorBus_1.default.checkSelectedElement("HeaderFooter", "main", true, true);
            if (pageMain == null) {
                console.warn("Main element not found.");
            }
            /** Header element container */
            let siteHeader;
            // Add header element to the page
            if (pageMain != null) {
                // 'Main' element exists, add the header to it
                try {
                    siteHeader = pageMain.insertAdjacentElement("beforebegin", headerFooter.headerWidget.buildHeader());
                }
                catch (e) {
                    new rwbErrorBus_1.RwbDomException("DomException", "Check site header element. Encountered error:", e);
                }
            }
            else {
                // 'Main' element does not exist, add the header to the body
                try {
                    siteHeader = document.body.insertAdjacentElement("afterbegin", headerFooter.headerWidget.buildHeader());
                }
                catch (e) {
                    new rwbErrorBus_1.RwbDomException("DomException", "Check site header is not null. Encountered error:", e);
                }
            }
            //Append navigation items to header
            try {
                siteHeader.childNodes[0].appendChild(headerFooter.headerWidget.buildNavigation());
            }
            catch (e) {
                new rwbErrorBus_1.RwbDomException("DomException", "Cannot prepend navigation items. Encountered error:", e);
            }
            //Prefereneces Menu addition
            let settingsMenu = document.createElement("details");
            settingsMenu.style.setProperty("width", "12rem");
            settingsMenu.style.setProperty("margin-left", "auto");
            settingsMenu.style.setProperty("margin-top", "2em");
            settingsMenu.style.setProperty("color", "var(--clr-all-font-light)");
            let settingsMenuSummary = document.createElement("summary");
            settingsMenuSummary.innerText = "Preferences";
            settingsMenuSummary.style.setProperty("text-align", "right");
            settingsMenu.appendChild(settingsMenuSummary);
            let pillContainer = preferences_1.customElements.pillBtnMarkup();
            pillContainer.id = "themeToggle";
            settingsMenu.appendChild(pillContainer);
            siteHeader.insertAdjacentElement("beforeend", settingsMenu);
            preferences_1.customElements.pillBtnToggleAction("#themeToggle");
            headerperf.end();
        },
    },
    footerWidget: {
        buildFooter: () => {
            const siteFooter = document.createElement("footer");
            const siteFooterContainer = document.createElement("div");
            const footerPara = document.createElement("p");
            footerPara.textContent = `\u00A9 2022-2026 Random Web Bits. All Rights Reserved.`;
            siteFooterContainer.append(footerPara);
            siteFooter.append(siteFooterContainer);
            return siteFooter;
        },
        buildFaviconAttribution: (footer) => {
            // Favicon attribution section + link to source
            const footerIconPara = document.createElement("p");
            const footerIconLink = document.createElement("a");
            footerIconLink.setAttribute("title", "IconHome: #45026755");
            footerIconLink.setAttribute("target", "_blank");
            footerIconLink.href =
                "https://www.vectorstock.com/royalty-free-vector/maintenance-icon-for-graphic-and-web-design-vector-45026755";
            footerIconLink.target = "_blank";
            footerIconLink.rel = "noopener";
            footerIconLink.title = "Maintenance icon for graphic and web design Vector Image";
            footerIconLink.textContent = "VectorStock.com";
            footerIconPara.textContent = `Favicon designed by IconHome at `;
            // Append attribution to footer para
            footerIconPara.appendChild(footerIconLink);
            footer.childNodes[0].appendChild(footerIconPara);
            return footerIconPara;
        },
        buildDeveloperAttribution: (footer) => {
            const devattrib = document.createElement("div");
            const dev = document.createElement("p");
            dev.textContent = "Developed by Robert Howell";
            devattrib.append(dev);
            footer.appendChild(devattrib);
            return;
        },
        init: () => {
            const footerperf = new scriptPerf_1.default("Footer");
            // Add footer element to the page end
            let footer = headerFooter.footerWidget.buildFooter();
            document.body.append(footer);
            footer.childNodes[0].appendChild(headerFooter.footerWidget.buildFaviconAttribution(footer));
            headerFooter.footerWidget.buildDeveloperAttribution(footer);
            footerperf.end();
        },
    },
};
exports.default = headerFooter;
},{"../../data/navItems":8,"../../models/rwbErrorBus":16,"../../models/scriptPerf":19,"./preferences":6}],6:[function(require,module,exports){
"use strict";
//--Copyright (c) 2024-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customElements = void 0;
const colorScheme_1 = __importDefault(require("./colorScheme"));
const counter_1 = require("../../models/counter");
const customElements_Preferences = {
    pillBtnMarkup: () => {
        //Pill toggle
        let themeToggle = document.createElement("label");
        themeToggle.innerText = "Theme: ";
        themeToggle.style.setProperty("margin-right", ".5rem");
        let themeToggleLight = document.createElement("input");
        let themeToggleDark = document.createElement("input");
        themeToggleLight.setAttribute("type", "radio");
        themeToggleLight.setAttribute("value", "dark");
        themeToggleDark.setAttribute("type", "radio");
        themeToggleDark.setAttribute("value", "light");
        themeToggleLight.style.setProperty("display", "none");
        themeToggleDark.style.setProperty("display", "none");
        themeToggle.appendChild(themeToggleLight);
        // themeToggle.appendChild(themeToggleDark);
        //Toggle Button
        let pillContainer = document.createElement("div");
        pillContainer.style.setProperty("display", "flex");
        pillContainer.style.setProperty("flex-wrap", "nowrap");
        pillContainer.style.setProperty("justify-content", "center");
        pillContainer.style.setProperty("align-items", "center");
        pillContainer.style.setProperty("height", "2.5rem");
        let pill = document.createElement("div");
        pill.style.setProperty("width", "58px");
        pill.style.setProperty("height", "22px");
        pill.style.setProperty("border-radius", "50px");
        pill.style.setProperty("position", "relative");
        pill.setAttribute("tabindex", "0");
        let pillBtn = document.createElement("div");
        pillBtn.style.setProperty("width", "18px");
        pillBtn.style.setProperty("aspect-ratio", "1/1");
        pillBtn.style.setProperty("position", "absolute");
        pillBtn.style.setProperty("top", "2px");
        pillBtn.style.setProperty("left", "2px");
        pillBtn.style.setProperty("border-radius", "50px");
        pill.appendChild(pillBtn);
        pill.insertAdjacentElement("beforeend", themeToggleDark);
        //Text label
        let choice = document.createElement("p");
        choice.innerText = "Browser";
        choice.style.setProperty("margin-left", ".5rem");
        choice.style.setProperty("width", "8ch");
        pillContainer.appendChild(themeToggle);
        pillContainer.appendChild(pill);
        pillContainer.appendChild(choice);
        return pillContainer;
    },
    pillBtnToggleAction: (pillQuery) => {
        if (pillQuery == null) {
            console.warn("Null query. Use a different query string.");
        }
        //Select the element
        let pillElem = document.querySelector(`${pillQuery}`);
        if (pillElem == null) {
            console.warn("Pill btn not found by this query. Try a different query string.");
        }
        //Assign variables to element's children
        let pillToggle = pillElem.querySelector("div");
        let pillSwitch = pillToggle.querySelector("div");
        //Toggle button style
        pillToggle.style.setProperty("cursor", "pointer");
        pillToggle.classList.add("toggle");
        pillSwitch.classList.add("switch");
        let initialState = colorScheme_1.default.checkToggleBtnState();
        //Initial state is browser, next state may vary
        let initial = Object.create(new counter_1.Counter(-1));
        let pillToggleFunc = () => {
            //add event toggle position counter
            if (initialState == 0 && initial.count == -1)
                initial.count = 1;
            if (initialState == 1 && initial.count == -1)
                initial.count = 2;
            if (initialState == 2 && initial.count == -1)
                initial.count = 0;
            //Click once, system
            //Click twice, light
            //Click three, dark
            //userPreference changes means the user has clicked the theme toggle button
            let userPreference;
            switch (initial.count) {
                case 0:
                    userPreference = 0;
                    break;
                case 1:
                    userPreference = 1;
                    break;
                case 2:
                    userPreference = 2;
            }
            //Change the theme
            colorScheme_1.default.setColorTheme(true, userPreference);
            initial.count++;
            if (initial.count == 3) {
                initial.count = 0;
            }
        };
        //Toggle button event listener
        pillToggle.addEventListener("click", e => {
            e.preventDefault();
            pillToggleFunc();
        });
        //Toggle button mouse listener
        pillToggle.addEventListener("keypress", e => {
            if (e.key !== "Enter")
                return;
            e.preventDefault();
            pillToggleFunc();
        });
    },
};
exports.customElements = customElements_Preferences;
},{"../../models/counter":13,"./colorScheme":3}],7:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toDo_1 = require("../../models/toDo");
const rwbErrorBus_1 = __importDefault(require("../../models/rwbErrorBus"));
/**
 * Component containing the To-Do List widget's creation.
 */
const toDosWidget = {
    /**
     * Create a To-Do List widget.
     * @param elem - Element containing 'ToDoList' class
     */
    init: () => {
        let toDosElement;
        toDosElement = rwbErrorBus_1.default.checkSelectedElement("ToDoList", ".ToDoList", true, true);
        if (toDosElement == null) {
            console.warn("Cannot find container element for todo list widget placement. Skipping its creation.");
            return;
        }
        //ToDoList object
        const toDoWidget = new toDo_1.ToDoList();
        //Creates widget markup and populates To-Do tasks contained in Local Storage
        toDoWidget.createToDoListWidget(toDosElement);
    },
};
exports.default = toDosWidget;
},{"../../models/rwbErrorBus":16,"../../models/toDo":20}],8:[function(require,module,exports){
"strict mode";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2026 Robert A. Howell
const rwbLink_1 = __importDefault(require("../models/rwbLink"));
/**
 * Header navigation link data
 */
const homeNavLink = new rwbLink_1.default("Index", "Home", "Home", "index.html");
const pagesNavLink = new rwbLink_1.default("Pages", "Pages", "Pages", "pages.html");
const gameNavLink = new rwbLink_1.default("Game", "FlashCards", "Game", "flashcards.html");
/** Navigation links */
const NAVITEMS = [homeNavLink, pagesNavLink, gameNavLink];
exports.default = NAVITEMS;
},{"../models/rwbLink":18}],9:[function(require,module,exports){
"strict mode";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2026 Robert A. Howell
const headerFooter_1 = __importDefault(require("./components/global/headerFooter"));
//import pageComponents from "./pageComponents";
const classComponents_1 = __importDefault(require("./classComponents"));
const scriptPerf_1 = __importDefault(require("./models/scriptPerf"));
const colorScheme_1 = __importDefault(require("./components/global/colorScheme"));
const rwbErrorBus_1 = __importDefault(require("./models/rwbErrorBus"));
const mainPerf = new scriptPerf_1.default("main");
// entry point
/**
 * TypeScript entry point. This script initializes page components and models.
 * Start is the entry point.
 */
const RWB = {
    main: () => {
        // Add header and footer components
        headerFooter_1.default.headerWidget.init();
        headerFooter_1.default.footerWidget.init();
        //Check browser color scheme preference
        colorScheme_1.default.setColorTheme(false, 0);
        let page = window.location.pathname;
        // Initialize element components
        classComponents_1.default.init(page);
        if (rwbErrorBus_1.default.checkSelectedElement("Loading", ".loading", false, true)) {
            let divider = document.querySelector(".loading");
            divider.classList.remove("loading");
        }
        let loadingComp;
        loadingComp = rwbErrorBus_1.default.checkSelectedElement("LoadingComp", "body aside:first-of-type", false, true);
        loadingComp.classList.add("loading");
        loadingComp.remove();
        mainPerf.end();
    },
    /**
     * Initialize page widgets and application functions.
     */
    start: () => {
        //Check user acceptance
        const userCookiesAcceptance = localStorage.getItem("cookiesOption");
        if (!userCookiesAcceptance) {
            //Create dialog markup
            const element = document.querySelector("html");
            const dialog = element.insertAdjacentElement("beforeend", document.createElement("dialog"));
            const dialogInner = `
        <p>This website uses browser cookies for anonymous traffic information capture.</p>
        <form method="dialog">
          <button>Accept</button>
          <button>Close</button>
        </form>
      `;
            dialog.innerHTML = dialogInner;
            //Assign dialog button functions
            let btnAccept = dialog.children[1].children[0];
            let btnClose = dialog.children[1].children[1];
            //Set dialog attributes
            dialog.setAttribute("id", "cookiesOptionForm");
            dialog.setAttribute("open", "");
            dialog.style.setProperty("display", "inline-block");
            dialog.style.setProperty("position", "fixed");
            dialog.style.setProperty("width", "400px");
            btnAccept.style.setProperty("width", "max-content");
            btnClose.style.setProperty("width", "min-content");
            btnAccept.addEventListener("click", () => {
                localStorage.setItem("cookiesOption", "Accepted");
                dialog.style.setProperty("display", "none");
            });
            btnClose.addEventListener("click", () => {
                dialog.style.setProperty("display", "none");
            });
        }
        // Event fired before assets are rendered to the page
        window.addEventListener("DOMContentLoaded", RWB.main);
    },
};
RWB.start();
},{"./classComponents":1,"./components/global/colorScheme":3,"./components/global/headerFooter":5,"./models/rwbErrorBus":16,"./models/scriptPerf":19}],10:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
class AbbrOpen {
    isOpen = false;
    abbrElement;
    description;
    constructor(abbrElement) {
        this.isOpen = false;
        this.abbrElement = abbrElement;
    }
    revealAbbrDescription() {
        this.abbrElement.addEventListener("click", e => {
            e.preventDefault();
            if (this.isOpen) {
                this.description.remove();
            }
            let abbrTitleAttrVal = this.abbrElement.getAttribute("title");
            if (e.target == this.abbrElement) {
                //create the span element
                this.description = this.abbrElement.appendChild(document.createElement("span"));
                this.description.textContent = `${String.fromCharCode(160)}(${abbrTitleAttrVal})${String.fromCharCode(160)}`;
                this.isOpen = true;
            }
        });
    }
}
exports.default = AbbrOpen;
},{}],11:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGet = void 0;
/**
 * apiGet is for fetch requests. Use an apiGet object to manipulate the fetch
 *  request into either:
 *
 * 1. returning data
 *
 * --or --
 *
 * 2. storing the request in the browser cache to retrieve later
 */
class apiGet {
    errorElem;
    getUrl;
    sendToBrowserCache = false;
    browserCacheName;
    /**
     * This constructor gathers all the needed information for fetch and/or browser
     *  storage.
     *
     * @param getUrl - the (full) url of data request.
     * @param sendToBrowserCache  - Boolean value determining fetch caching.
     * @param browserCacheName - If storing the request in browser cache, this string provides the name for storage.
     * @param errorElem - Should the fetch request fail, return error status to this element.
     */
    constructor(getUrl, sendToBrowserCache, errorElem, browserCacheName) {
        this.getUrl = getUrl;
        this.sendToBrowserCache = sendToBrowserCache;
        this.browserCacheName = browserCacheName;
        this.errorElem = errorElem;
    }
    /**
     *
     * @returns this.sendToBrowserCache
     */
    getSendToBrowserCache() {
        return this.sendToBrowserCache;
    }
    /**
     *
     * @returns this.getUrl
     */
    getGetUrl() {
        return this.getUrl;
    }
    /**
     * Flip this.sendToBrowserCache boolean value from the current value.
     */
    setSendToBrowserCache() {
        return this.sendToBrowserCache ? false : true;
    }
    /**
     * A fetch request can take URL or string parameter. This function sets the apiGet
     *  object for a URL fetch by creating a URL from the string, or passing the URL.
     * @param url - the (full) url of data request.
     */
    setGetUrl(url) {
        if (typeof url === "string") {
            this.getUrl = new URL(url);
        }
        else {
            this.getUrl = url;
        }
    }
    /**
     * A public function creating a data promise object for the called fetch function. If
     *  the request needs added to browser storage, the fetch is made and sent to
     *  storage. A cloned copy of the fetched data is returned and the original request is
     *  sent to the cache. Without sending to browser cache, the fetch is requested and
     * returned.
     *
     * @param getUrl - the (full) url of data request.
     * @returns dataCachePromise: Promise<unknown>
     */
    async apiGet(getUrl) {
        //Check if the request is for cache storage
        if (this.sendToBrowserCache) {
            //The returned data is packages as a Promise object
            let dataCachePromise = new Promise((resolve, reject) => {
                if ("caches" in window) {
                    //Open cache and check for request existing in Cache Storage
                    window.caches
                        .open(this.browserCacheName)
                        .then(cache => {
                        caches.match(getUrl).then(result => {
                            if (result === undefined) {
                                //No matches for this request in Storage Cache, so fetch the request normally
                                //Upon success, a cloned copy will need to be returned.
                                fetch(getUrl).then(result => {
                                    //Copy the response since it can only be read once
                                    let clonedResp = result.clone();
                                    //Add the result to the cache
                                    if (clonedResp.status != 404) {
                                        cache.put(getUrl, result);
                                    }
                                    resolve(clonedResp.json().then(text => text));
                                });
                            }
                            else {
                                //Cache hit success, return the response data
                                resolve(result.json().then(text => text));
                            }
                        });
                    })
                        .catch(e => {
                        //Cannot open Storage Cache
                        console.error(`%cProblem opening Cache Storage. Name: ${this.browserCacheName}`, "color: grey");
                        this.sendToBrowserCache = false;
                    });
                }
            });
            //The promise has resolved --> return the promise data
            dataCachePromise.then((response) => {
                return response;
            });
            return dataCachePromise;
        }
        else {
            let dataCachePromise = new Promise((resolve, reject) => {
                resolve(this.fetchData(getUrl));
            });
            dataCachePromise.then(data => {
                return data;
            });
            return dataCachePromise;
        }
    }
    /**
     * Checks whether the requested response is of valid status 'OK' and '200'
     * @param res - the fetched response.
     * @returns - returns res.json() on success or returns response on failure.
     */
    apiResponseErrorCheck(res) {
        if (res.status == 404) {
            this.errorElem.classList.add("error");
            this.errorElem.innerText = "404 fetch error!";
            return res;
        }
        if (!res.ok || res.status != 200) {
            throw new Error(res.ok + ": " + res.status);
        }
        return res.json();
    }
    /**
     * The fetch request, returning a fetch promise.
     * @param getUrl - the (full) url of data request.
     * @returns data.text() or data based on the instance returned.
     */
    fetchData(getUrl) {
        return fetch(getUrl)
            .then(response => this.apiResponseErrorCheck(response))
            .then(data => {
            if (data instanceof Response) {
                return data.text();
            }
            else
                return data;
        })
            .catch((e) => {
            console.debug(e);
            this.errorElem.classList.add("error");
            this.errorElem.innerText = `${e.message}`;
        });
    }
}
exports.apiGet = apiGet;
},{}],12:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
class client {
    oldURL = document.referrer;
    browserplatform;
    useragent = window.navigator.userAgent;
    connectiontype;
    connectionrtt;
    constructor() {
        this.browserplatform = this.setbrowserplatform();
        this.connectiontype = this.setconnectiontype();
        this.connectionrtt = this.setconnectionrtt();
    }
    setbrowserplatform() {
        if ("userAgentData" in window.navigator) {
            //userAgentData is NavigatorUAData type, not found in TypeScript.
            //Known to Edge browser: Object.getPrototypeOf(window.navigator.userAgentData)
            let userAgentData = window.navigator.userAgentData;
            let platformdata = userAgentData.platform;
            return platformdata;
        }
        else
            this.browserplatform = "";
    }
    setconnectiontype() {
        if ("connection" in window.navigator) {
            //connection is NetworkInformation type, not found in TypeScript.
            //Known to Edge browser: Object.getPrototypeOf(window.navigator.connection)
            let connection = window.navigator.connection;
            let effectivetype = connection.effectiveType;
            return effectivetype;
        }
        else
            this.connectiontype = "";
    }
    setconnectionrtt() {
        if ("connection" in window.navigator) {
            let connection = window.navigator.connection;
            let rtt = connection.rtt;
            return rtt;
        }
        else
            this.connectionrtt = "";
    }
}
exports.client = client;
},{}],13:[function(require,module,exports){
"use strict";
//--Copyright (c) 2024-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    count = 0;
    constructor(initial) {
        this.count = initial;
    }
}
exports.Counter = Counter;
},{}],14:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionarySearch = void 0;
const api_1 = require("./api");
const dictionarySearchMarkup_1 = __importDefault(require("./dictionarySearchMarkup"));
const rwbErrorBus_1 = __importDefault(require("./rwbErrorBus"));
const rwbJsonConverter_1 = require("./rwbJsonConverter");
const rwbJsonConverter_2 = require("./rwbJsonConverter");
/**
 * A DictionarySearch is a set of markup creation and functions which allow a user
 *  to look up a word like a Dictionary. When called, the user's input is validated
 *  as an acceptable word or it declines the request, then showing the user if the word
 *  is acceptable.
 *
 * Creating a dictionary search widget requires passing a reference element (for a
 * known placement location) that contains the 'dictionaryWidget' class.
 *
 *   new DictionarySearch(elem);
 *
 * All the needed elements and functionality are added to the page.
 *
 */
class DictionarySearch extends dictionarySearchMarkup_1.default {
    static count = 0;
    static wordStorage;
    static CacheStorageNameofWordRequest = "RWB_word_fetch";
    static requestUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    previousWordsBtnIsCreated = false;
    previousWordsBtnWasClicked = false;
    wordURL;
    wordData;
    /**
     * This constructor creates all the functionality and markup needed for the
     *  Dictionary Search widget interface.
     *
     * @param elem - The reference element used to place widget markup.
     */
    constructor(elem) {
        //Invoke superclass constructor.
        super(elem);
        if (this.searchElements == undefined)
            return;
        //Initialize the dictionary widget with click event listeners
        this.addWidgetEvents();
        //Store words cache data with initialization.
        DictionarySearch.wordStorage = DictionarySearch.getLocalStorageWordCaches();
        DictionarySearch.count++;
    }
    /**
     * Retrieve Local Storage words previously stored with the Dictionary Search Widget.
     *
     * @returns DictionarySearch.wordStorage - these are the words stored previously in the
     *  browser cache.
     */
    static getLocalStorageWordCaches() {
        //Local Storage 'word-caches' items data assignment
        //cache response links and cache name are previously stored in Local Storage
        let storageStr;
        if (rwbErrorBus_1.default.checkLocalStorageEqualNull("DictionarySearch", "word-caches", true, true)) {
            //The Local Storage is null or empty--> Confirm here the browser does not have any Cache Storage items in error
            if ("caches" in window) {
                if (window.caches.has(DictionarySearch.CacheStorageNameofWordRequest)) {
                    window.caches.delete(DictionarySearch.CacheStorageNameofWordRequest);
                }
                localStorage.removeItem("word-caches");
                return;
            }
        }
        storageStr = localStorage.getItem("word-caches");
        //check the word-cache value for correct json parsing
        let parsetest = Object.create(new rwbJsonConverter_1.RwbParseJson(storageStr));
        if (!parsetest.passed) {
            localStorage.removeItem("word-caches");
            console.log(`%c<RWB>%cDeleted storage key: word-caches`, "color:orange;font-size:14px;font-weight:bold;", "color:orange;font-size:16px;");
            this.getLocalStorageWordCaches();
            return;
        }
        return parsetest.returnObj;
    }
    /**
     * Call to return the previously searched word.
     *
     * @returns this.wordURL
     */
    getWordURL() {
        return this.wordURL;
    }
    /**
     * Call to return the fetched word data.
     *
     * @returns this.wordData
     */
    getWordData() {
        return this.wordData;
    }
    /**
     * Adds click and keypress event listeners to the widget. Input event listeners 'click'
     *  and 'keypress' await for a search call. Also, should a user want to search a
     *  previously searched word, the widget adapts markup for that request.
     */
    addWidgetEvents() {
        if (this.searchElements == undefined) {
            console.log("A search element is undefined from searchWord | wordSearch");
            return;
        }
        let buttonContainer = document.getElementById("dictionary-btns");
        const hidePreviousPanel = () => {
            buttonContainer.style.display = "none";
            this.previousWordsBtnWasClicked = true;
        };
        //Add form input event listeners
        //Upon input entry, fire API fetch
        this.searchElements.wordSearch.addEventListener("click", event => {
            event.preventDefault();
            this.wordSearch(this.searchElements, false, null);
            if (this.previousWordsBtnWasClicked)
                hidePreviousPanel();
        });
        this.searchElements.searchWord.addEventListener("keypress", event => {
            if (event.key !== "Enter")
                return;
            event.preventDefault();
            this.wordSearch(this.searchElements, false, null);
            if (this.previousWordsBtnWasClicked)
                hidePreviousPanel();
        });
        //"Previous word searches" button fetches locally stored words
        //Clicking the button displays each word in a list within the widget
        this.searchElements.previousWordBtn.addEventListener("click", event => {
            event.preventDefault();
            this.checkcreatePreviousWordButtons();
        });
        //"Refresh" button reloads the page
        this.searchElements.refreshBtn.addEventListener("click", event => {
            event.preventDefault();
            location.reload();
        });
    }
    checkcreatePreviousWordButtons() {
        const placementlocationholder = document.querySelector(".previousWords");
        let buttonContainer = this.searchElements.previousWordsContainer;
        //Check the placement locator and word caches for undefined
        if (placementlocationholder == null || DictionarySearch.wordStorage == null) {
            if (!this.previousWordsBtnIsCreated) {
                const noWordsHeadingElem = buttonContainer.appendChild(document.createElement("div"));
                noWordsHeadingElem.classList.add("dictionary-btn", "error-notfound");
                noWordsHeadingElem.textContent = "Previous words not found. The cache is empty.";
                this.previousWordsBtnIsCreated = true;
                this.previousWordsBtnWasClicked = true;
                return;
            }
            if (!this.previousWordsBtnWasClicked) {
                buttonContainer.style.display = "block";
                this.previousWordsBtnWasClicked = true;
                return;
            }
            buttonContainer.style.display = "none";
            this.previousWordsBtnWasClicked = false;
            return;
        }
        if (this.previousWordsBtnWasClicked) {
            buttonContainer.style.display = "none";
            this.previousWordsBtnWasClicked = false;
            return;
        }
        if (this.previousWordsBtnIsCreated) {
            buttonContainer.style.display = "block";
            this.previousWordsBtnWasClicked = true;
            return;
        }
        this.createPreviousWordButtons(this.previousWordsBtnWasClicked, buttonContainer);
    }
    createPreviousWordButtons(previousWordsBtnWasClicked, buttonContainer) {
        if (previousWordsBtnWasClicked) {
            buttonContainer.style.display = "none";
            this.previousWordsBtnWasClicked = false;
            return;
        }
        let previouswordbuttons = this.createPreviousWordSearchesElements(DictionarySearch.wordStorage, buttonContainer);
        for (let btn of previouswordbuttons) {
            this.previousWordsBtnWasClicked = true;
            this.previousWordsBtnIsCreated = true;
            //add event listener for new button.
            //this is the cached word butten. when it's clicked, fire a word search
            btn.cacheWordHeadingElem.addEventListener("click", (event) => {
                event.preventDefault();
                this.wordSearch(this.searchElements, true, btn.word);
            });
            //MOBILE
            //when hovered, display the delete button option
            btn.wordHeadingElemContainer.addEventListener("touchstart", () => {
                btn.deleteCacheWordHeadingElem.style.display = "inline-block";
                //when not hovered, hide the delete button option
                btn.wordHeadingElemContainer.addEventListener("mouseleave", (event) => {
                    if (event.target == btn.deleteCacheWordHeadingElem) {
                        return;
                    }
                    btn.deleteCacheWordHeadingElem.style.opacity = "50%;";
                });
            });
            //when hovered, display the delete button option
            btn.wordHeadingElemContainer.addEventListener("mouseover", (event) => {
                btn.deleteCacheWordHeadingElem.style.display = "inline-block";
                //when not hovered, hide the delete button option
                btn.wordHeadingElemContainer.addEventListener("mouseleave", (event) => {
                    if (event.target == btn.deleteCacheWordHeadingElem) {
                        return;
                    }
                    btn.deleteCacheWordHeadingElem.style.display = "none";
                });
            });
            //when focus (such as using keyboard only), display the delete button
            btn.cacheWordHeadingElem.addEventListener("focus", (e) => {
                e.preventDefault();
                btn.deleteCacheWordHeadingElem.style.display = "inline-block";
            });
            //when not focused, hide the delete button option
            btn.deleteCacheWordHeadingElem.addEventListener("focusout", (event) => {
                if (event.target == btn.cacheWordHeadingElem) {
                    return;
                }
                btn.deleteCacheWordHeadingElem.style.display = "none";
            });
            //add event listener for delete button
            btn.deleteCacheWordHeadingElem.addEventListener("click", (event) => {
                event.preventDefault();
                btn.wordHeadingElemContainer.remove();
                this.removeDictionaryTermfromLocalStorage(btn.cacheWordHeadingElem.textContent);
            });
        }
    }
    /**
     * Adds the word to the browser's Local Storage containing word data, URL, and caching.
     *
     * @param localstoragevalue - This interface stores information where sending to Local Storage.
     */
    addDictionaryTermtoLocalStorage(localstoragevalue) {
        //Log the word cache creation
        const addedwordcache = () => {
            console.log(`%c<RWB>%cAdded word cache: ${localstoragevalue.word}`, "color:cyan;font-weight:bold;", "color:cyan;");
        };
        //The 'localstoragevalue' needs added to local storage cache
        //Local storage may be empty or already having the wanted searched word
        //Check storage is not null. If it is, add the word.
        if (DictionarySearch.wordStorage == null) {
            if (rwbErrorBus_1.default.checkLocalStorageEqualNull("DictionarySearch", "word-caches", false, false)) {
                //Add the storage word to an array
                let wordStore = [];
                wordStore.push(localstoragevalue);
                let jsonstr = "";
                //Call RWBStringifyJSON to stringify the object
                let stringifytestsingleword = Object.create(new rwbJsonConverter_2.RwbStringifyJson(wordStore));
                if (!stringifytestsingleword.passed) {
                    //stringify object did not work, so return
                    //LOGLEAF
                    return;
                }
                jsonstr = stringifytestsingleword.returnStr;
                // Local storage is empty => add the word
                localStorage.setItem("word-caches", jsonstr);
                console.log(`%c<RWB>%cCreated storage key: word-caches`, "color:cyan;font-size:14px;font-weight:bold;", "color:cyan;font-size:16px;");
                addedwordcache();
                return;
            }
            //LOGLEAF
            return;
        }
        //Local storage is not empty. Here, we need to add the word to the existing word cache.
        let allcache = DictionarySearch.wordStorage;
        let jsonstr = "";
        //Match the current URL for cache management
        for (let cache of allcache) {
            if (cache.wordURL == localstoragevalue.wordURL) {
                //Word is already in Local Storage
                //No need to add it to the array
                //LOGLEAF
                return;
            }
        }
        //Add word to existing 'word-caches' in Local Storage
        allcache.push(localstoragevalue);
        //Call RWBStringifyJSON to stringify the object
        let stringifytestdoubleword = Object.create(new rwbJsonConverter_2.RwbStringifyJson(allcache));
        if (!stringifytestdoubleword.passed) {
            //stringify object did not work, so return
            //LOGLEAF
            return;
        }
        jsonstr = stringifytestdoubleword.returnStr;
        localStorage.setItem("word-caches", jsonstr);
        addedwordcache();
    }
    /**
     * Remove a previous word data from browser's Local Storage --> Key/Value
     * data referencing words stored in local cache.
     *
     * @param localstorageword - string from "Previous Word Searches" button
     */
    removeDictionaryTermfromLocalStorage(localstorageword) {
        //Remove the cache item to Local Storage, Cache Storage
        //Check local storage is not null or empty
        if (DictionarySearch.wordStorage == null) {
            //LOGLEAF
            return;
        }
        //Get the words array from Local Storage
        //RWBError.checkLocalStorageNullorEmpty("DictionaryWidget", "word-caches"); //log whether fetched word cache is null or empty.
        let allcache = DictionarySearch.wordStorage;
        //Remove the word from Cache Storage and Local Storage word array
        for (let wordCache of allcache) {
            if (wordCache.word == localstorageword) {
                this.removeRequestfromCacheStorage(wordCache.wordURL);
                allcache.splice(allcache.indexOf(wordCache), 1);
                console.log(`%c<RWB>%cDeleted word cache: ${localstorageword}`, "color:darkcyan;font-weight:bold;", "color:darkcyan;");
            }
        }
        if (allcache.length == 0) {
            //The removed word was the last word in the array, so remove the container
            localStorage.removeItem("word-caches");
            console.log(`%c<RWB>%cDeleted storage key: word-caches`, "color:darkcyan;font-size:14px;font-weight:bold;", "color:darkcyan;font-size:16px;");
            return;
        }
        //Call RWBStringifyJSON to stringify the object
        let wordcachesstrfytest = Object.create(new rwbJsonConverter_2.RwbStringifyJson(allcache));
        if (!wordcachesstrfytest.passed) {
            //LOGLEAF
            return;
        }
        //Return remaining words to Local Storage
        localStorage.setItem("word-caches", wordcachesstrfytest.returnStr);
    }
    /**
     * Remove a fetch request from Cache Storage. Utilizes
     * DictionarySearch.CacheStorageNameofWordRequest for cache name.
     * @param removeURL
     */
    removeRequestfromCacheStorage(removeURL) {
        window.caches.open(DictionarySearch.CacheStorageNameofWordRequest).then(cache => {
            caches.match(removeURL).then(result => {
                if (result === undefined) {
                    console.log("Problem matching the result. Result: ", result);
                }
                else {
                    let cachePromise = new Promise(resolve => resolve(result));
                    cachePromise.then(() => {
                        cache.delete(removeURL);
                    });
                }
            });
        });
    }
    /**
     * This function dynamically recalls a word definition request and instantiates apiGET(). The
     * returned promise also dymanically answers the widget markup.
     *
     * @param word - The word searched from widget input.
     * @param wordUrl - The fetch request URL.
     * @param searchElems - Widget Elements -- key widget function elements.
     * @param sendToCache - ? Send fetch request to Cache Storage : Fetch without storing the request.
     * @param cacheName - If sending fetch requests to cache, provide a name to store it under.
     * @returns - wordData: Promise<unknown>
     */
    fetchDictionaryTerm(word, wordUrl, searchElems, sendToCache, cacheName) {
        //A function call parameter option is to store the word request in browser's Cache Storage
        //Structure the word data via 'localstoragewordvalue' interface used throughout fetching
        let wordcache = {
            inCache: sendToCache,
            word: word,
            wordURL: wordUrl,
            cacheName: sendToCache ? cacheName : "",
        };
        //Asynchronous fetch reqeust and dynamic markup creation from the data's return
        const wordFetchRequest = async () => {
            //Call apiGET() object constructor
            const wordFetch = new api_1.apiGet(wordcache.wordURL, wordcache.inCache, searchElems.errorElem, wordcache.cacheName);
            let noDefinitions;
            //Fetch request method call. Returned data may be the word definition
            let data = await wordFetch.apiGet(wordFetch.getGetUrl());
            if (typeof data == "string") {
                //If the returned data is a string, it is the word definition data.
                noDefinitions = false;
                let parsetest = Object.create(new rwbJsonConverter_1.RwbParseJson(data));
                if (!parsetest.passed) {
                    return;
                }
                data = parsetest.returnObj;
            }
            let wordData = data;
            //If the returned data is an object, confirm it is 'no definition' server data
            if (typeof data == "object") {
                if (Object.hasOwn(wordData, "title")) {
                    //No definitions were found when data is an object with a title property
                    //wordData.title == "No Definitions Found"
                    noDefinitions = true;
                    if (wordData.title == "No Definitions Found" && wordcache.inCache == true) {
                        //The data stream here is without word data. This function awaits the api fetch's data
                        //to complete storage/promise returns. It waits 5 seconds for the browser to complete its store functions
                        //then removes the unwanted cache request.
                        //TODO:BUGRESEARCH=>During the 5 timeout, if the page refreshes a 'bad word' will be stored in the cache
                        //This 'bad word' can be removed by deleting all previous words via UI and refreshing the page. This will
                        // fire getLocalStorageWordCaches() to clear any mismatched worddata<-->cachedrequests.
                        setTimeout(() => {
                            //Function awaiting request's Cache Storage caching
                            try {
                                this.removeRequestfromCacheStorage(wordFetch.getGetUrl());
                            }
                            catch {
                                console.log("Could not remove from Cache Storage. Name: ", wordFetch.getGetUrl());
                            }
                        }, 5000);
                    }
                }
            }
            if (data == undefined || noDefinitions) {
                //Good data--> return data for markup render
                //'Bad data' due to "No definitions found", invalid word, bad network connection
                if (!navigator.onLine) {
                    //Online, problem with fetch
                    //Offline request
                    searchElems.errorElem.innerText += ", check network connection.";
                    return;
                }
                if (noDefinitions) {
                    //Server returned no definitions data
                    if (wordData.title == "No Definitions Found")
                        searchElems.errorElem.innerText = "No Definitions Found";
                    searchElems.errorElem.classList.add("error-notfound");
                    return data;
                }
                return;
            }
            this.addDictionaryTermtoLocalStorage(wordcache);
            return data;
        };
        let wordData = wordFetchRequest();
        return wordData;
    }
    /**
     * User input validation function tests the input string against a valid Regular Expression.
     *
     *    RegExp("^[A-Za-z]{1,45}$")
     *
     * @param intxt - String value received from user field input.
     * @returns Acceptable user input: true or false.
     */
    wordValidation(intxt) {
        let trimmed = intxt.trim();
        let lettersRE = new RegExp("^[A-Za-z]{1,45}$");
        if (lettersRE.test(trimmed)) {
            return true;
        }
        else {
            //word is not an acceptable word.`);
            return false;
        }
    }
    /**
     * callFetchDictionaryTerm awaits a promise, fetching a dictionary term. The data
     * ingress calls markup creation function.
     *
     * @param searchElems - Widget Elements -- key widget function elements.
     * @param word - The word to be fetched.
     * @param wordURL - A URL composing the full url of the fetch request.
     */
    callFetchDictionaryTerm(searchElems, word, wordURL) {
        // When the word data resolves, call markup functions
        let wordDataPromise = new Promise(resolve => {
            resolve(this.fetchDictionaryTerm(word, wordURL, searchElems, true, DictionarySearch.CacheStorageNameofWordRequest));
        });
        wordDataPromise.then((data) => {
            this.wordData = data;
            this.createDictionaryTermWithMarkup(data, searchElems);
            if (data == undefined || Object.hasOwn(data, "title"))
                return;
            console.log(`%c<RWB>%cRetrieved word: ${word}`, "color:gold;font-weight:bold;", "color:gold;");
            // Remove unneeded classes if applied previously
            searchElems.searchWord.classList.remove("invalid");
            searchElems.searchWord.classList.remove("invalid-notfound");
            searchElems.errorElem.classList.remove("error");
            searchElems.errorElem.classList.remove("error-notfound");
            searchElems.errorElem.textContent = "";
        });
    }
    /**
     * wordSearch() begins a word search request. The user input listener chooses
     * whether the fetch is called from cache or is new.
     *
     * @param searchElems - Widget Elements -- key widget function elements.
     * @param isFromPreviousWords - True if the user requested a search from a previous word, to call data from Browser Cache.
     * @param cachedWord - If the user called for a previous word, cachedWord is within the Local Storage.
     */
    wordSearch(searchElems, isFromPreviousWords, cachedWord) {
        if (isFromPreviousWords) {
            this.callFetchDictionaryTerm(searchElems, cachedWord.word, cachedWord.wordURL);
        }
        else {
            // Take user input and filter to an accepted string
            let acceptedInputWord = false;
            this.wordValidation(searchElems.searchWord.value)
                ? (acceptedInputWord = true)
                : (acceptedInputWord = false);
            if (acceptedInputWord) {
                // Create a URL of the accepted word for use in the fetch call
                this.wordURL = new URL(searchElems.searchWord.value.toString(), DictionarySearch.requestUrl);
                this.callFetchDictionaryTerm(searchElems, searchElems.searchWord.value, this.wordURL);
            }
            else {
                searchElems.searchWord.classList.remove("invalid-notfound");
                searchElems.searchWord.classList.add("invalid");
                searchElems.errorElem.classList.remove("error-notfound");
                searchElems.errorElem.classList.add("error");
                searchElems.errorElem.textContent = "Invalid word!";
                searchElems.searchWord.classList.add("invalid-notfound");
            }
        }
        searchElems.searchWord.value = ""; // reset input string
    }
}
exports.DictionarySearch = DictionarySearch;
},{"./api":11,"./dictionarySearchMarkup":15,"./rwbErrorBus":16,"./rwbJsonConverter":17}],15:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A DictionarySearchWidget is made to create the markup needed for the
 *  Dictionary Search. Elements are created and appended to the page to the class
 *  'dictionaryWidget'
 */
class DictionarySearchMarkup {
    searchElements;
    constructor(elem) {
        //insert the widget after the passed in "elem"
        if (elem == undefined) {
            console.log(`%cThere is no "dictionaryWidget" class on this page.`, "color: orange;");
            return;
        }
        if (!elem.classList.contains("dictionaryWidget")) {
            console.log(`Add "dictionaryWidget" class to ${elem.nodeName} node.`);
            return;
        }
        this.createDictionaryWidgetMarkup(elem);
    }
    /**
     * Primary widget markup structuring the widget elements and search input.
     *
     * @param elem - The reference element before the widget.
     * @returns searchElements: DictionarySearchElements --> interface of
     *  important HTML elements used through widget function.
     */
    createDictionaryWidgetMarkup(elem) {
        const dictionary = elem.insertAdjacentElement("afterend", document.createElement("section"));
        if (dictionary == null) {
            console.log("The determined dictionary element is null.");
            return;
        }
        // Create widget elements
        const artH = dictionary.appendChild(document.createElement("h3"));
        const searchForm = dictionary.appendChild(document.createElement("form"));
        const previousWords = dictionary.appendChild(document.createElement("div"));
        // Return elements used in later functions
        let searchElements = {
            searchWord: searchForm.appendChild(document.createElement("input")),
            wordSearch: searchForm.appendChild(document.createElement("button")),
            dictionaryElem: dictionary,
            errorElem: searchForm.appendChild(document.createElement("span")),
            previousWordBtn: previousWords.appendChild(document.createElement("button")),
            previousWordsContainer: dictionary.appendChild(document.createElement("div")),
            refreshBtn: previousWords.appendChild(document.createElement("button")),
        };
        // Add attributes and property values
        const fontAwesomeSearchIcon = searchElements.wordSearch.appendChild(document.createElement("i"));
        fontAwesomeSearchIcon.classList.add("fa");
        fontAwesomeSearchIcon.classList.add("fa-search");
        previousWords.classList.add("previousWords");
        searchElements.searchWord.classList.add("monospace");
        searchElements.previousWordBtn.classList.add("dictionary-btn");
        searchElements.refreshBtn.classList.add("dictionary-btn");
        searchElements.previousWordBtn.setAttribute("type", "button");
        searchElements.refreshBtn.setAttribute("type", "button");
        searchElements.searchWord.setAttribute("type", "search");
        searchElements.searchWord.setAttribute("placeholder", "Search...");
        searchElements.searchWord.setAttribute("aria-label", "Input");
        searchElements.wordSearch.setAttribute("type", "submit");
        searchElements.wordSearch.setAttribute("aria-label", "Search");
        searchElements.searchWord.id = "search-word";
        searchElements.wordSearch.id = "word-search";
        searchElements.previousWordBtn.innerText = "Previous Word Searches";
        searchElements.refreshBtn.innerText = "Refresh";
        searchElements.previousWordsContainer.id = "dictionary-btns";
        dictionary.id = "dictionary";
        searchForm.id = "dictionary-search";
        searchForm.action = "index.html";
        artH.textContent = "Dictionary Term:";
        this.searchElements = searchElements;
    }
    /**
     * Creates the markup to house returned words from DictionarySearch. The markup
     *  is created based on API egress. Words and their definitions vary. The markup is
     *  adaptive to returned word data structures.
     *
     * @param wordData - This parameter is an object of word types, definitions, and examples.
     * @param searchElems - Widget Elements -- key widget function elements.
     */
    createDictionaryTermWithMarkup(wordData, searchElems) {
        if (wordData == null || !(wordData instanceof Object) || Object.hasOwn(wordData, "title")) {
            console.log("%cThere is no definition for this word.", "color:darkgreen;");
            return;
        }
        // Add word definition to the dictionary widget
        const definitionDescriptionContainer = searchElems.dictionaryElem.appendChild(document.createElement("div"));
        const definitionDescription = definitionDescriptionContainer.appendChild(document.createElement("div"));
        definitionDescription.appendChild(document.createElement("hr")); // word definition separator
        definitionDescriptionContainer.classList.add("definitionDescription");
        // The word data represents complex JSON object
        // Recurse the word data object, adding elements from the various levels
        wordData.map((word) => {
            definitionDescriptionContainer.setAttribute("word", word.word);
            //console.log("The word is: ",word)
            const wordTitle = definitionDescription.appendChild(document.createElement("h3"));
            wordTitle.textContent = word.word;
            //Add the word and examples to page
            word.meanings.map((wordType) => {
                //console.log("WordType are: ", wordType)
                const wordTypeH = definitionDescription.appendChild(document.createElement("h4"));
                const wordTypeList = definitionDescription.appendChild(document.createElement("ul"));
                wordTypeH.textContent = wordType.partOfSpeech;
                wordType.definitions.map((def) => {
                    //console.log("Definition is: ", def);
                    let wordTypeDefItem = wordTypeList.appendChild(document.createElement("li"));
                    let definitionP = wordTypeDefItem.appendChild(document.createElement("p"));
                    definitionP.textContent = def.definition;
                    definitionP.classList.add("wordDefinition");
                    const addAdjacentElem = () => {
                        //console.log("Definitions is: ", def);
                        const newP = definitionP.insertAdjacentElement("beforeend", document.createElement("p"));
                        if (newP instanceof HTMLElement) {
                            const newPi = newP.appendChild(document.createElement("i"));
                            newPi.textContent = def.example;
                        }
                        definitionP.classList.add("example");
                    };
                    //check if key "example" is in definition. If it is, add the example to list
                    "example" in def ? addAdjacentElem() : true == true;
                });
            });
        });
        //create clear button
        const deleteWordTermHeadingElem = definitionDescriptionContainer.appendChild(document.createElement("button"));
        deleteWordTermHeadingElem.setAttribute("type", "word-clear");
        deleteWordTermHeadingElem.classList.add("dictionary-word-btn-clear");
        deleteWordTermHeadingElem.style.display = "block";
        //when clear button is hovered, display it
        definitionDescriptionContainer.addEventListener("mouseover", event => {
            deleteWordTermHeadingElem.style.opacity = "100%";
            //when clear button is not hovered, hide it
            definitionDescriptionContainer.addEventListener("mouseout", () => {
                deleteWordTermHeadingElem.style.opacity = "50%";
            });
        });
        //when clear button is clicked, clear the elements
        deleteWordTermHeadingElem.addEventListener("click", event => {
            event.preventDefault();
            definitionDescriptionContainer.remove();
            console.log(`%c<RWB>%cRemoved word: ${definitionDescriptionContainer.getAttribute("word")}`, "color:goldenrod;font-weight:bold;", "color:goldenrod;");
        });
        //add clear button to widget
        definitionDescriptionContainer.appendChild(definitionDescription);
    }
    createPreviousWordSearchesElements(wordstorage, buttonContainer) {
        let buttonsarr = [];
        //Because the locator and the Local Storage values are viable, create the markup
        //needed to display those words. Add event listeners for widget functionality.
        for (let wordCache of wordstorage) {
            const wordHeadingElemContainer = buttonContainer.appendChild(document.createElement("div"));
            const cacheWordHeadingElem = wordHeadingElemContainer.appendChild(document.createElement("button"));
            const deleteCacheWordHeadingElem = wordHeadingElemContainer.appendChild(document.createElement("button"));
            deleteCacheWordHeadingElem.setAttribute("type", "button-clear");
            deleteCacheWordHeadingElem.classList.add("dictionary-word-btn-clear");
            cacheWordHeadingElem.setAttribute("type", "button");
            cacheWordHeadingElem.classList.add("dictionary-btn", "dictionary-word-btn");
            cacheWordHeadingElem.textContent = wordCache.word;
            let previouswordbtn = {
                word: wordCache,
                cacheWordHeadingElem: cacheWordHeadingElem,
                wordHeadingElemContainer: wordHeadingElemContainer,
                deleteCacheWordHeadingElem: deleteCacheWordHeadingElem,
            };
            buttonsarr.push(previouswordbtn);
        }
        return buttonsarr;
    }
}
exports.default = DictionarySearchMarkup;
},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
exports.RwbStringifyJson = exports.RwbParseJson = void 0;
const rwbErrorBus_1 = require("./rwbErrorBus");
/** An RwbParseJson parses json and stores the parsed string with the result. */
class RwbParseJson {
    /**Counts the number of objects instantiated */
    static count = 0;
    returnObj;
    passed;
    parseStr;
    /**Create this object to store parse results and parsed
     * JSON object.
     */
    constructor(parseStr) {
        RwbParseJson.count++;
        this.parseStr = parseStr;
        this.passed = this.parseJson();
    }
    parseJson() {
        try {
            this.returnObj = JSON.parse(this.parseStr);
        }
        catch (e) {
            this.returnObj = null;
            new rwbErrorBus_1.RwbSyntaxError("ParseError", e.message);
            return false;
        }
        return true;
    }
}
exports.RwbParseJson = RwbParseJson;
/** An RwbParseJson tests whether an object can be stringified into a valid
 * json string. */
class RwbStringifyJson {
    /**Counts the number of objects instantiated */
    static count = 0;
    returnStr;
    passed;
    json;
    /**Create this object to store parse results and parsed
     * JSON object.
     */
    constructor(json) {
        RwbStringifyJson.count++;
        this.json = json;
        this.passed = this.stringifyJson();
    }
    stringifyJson() {
        try {
            this.returnStr = JSON.stringify(this.json);
        }
        catch (e) {
            this.returnStr = null;
            new rwbErrorBus_1.RwbSyntaxError("StringifyError", e.message);
            return false;
        }
        return true;
    }
}
exports.RwbStringifyJson = RwbStringifyJson;
},{"./rwbErrorBus":16}],18:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * HTML link element data. Used with anchor tags.
 */
class RwbLink {
    /**Counts the number of objects instantiated */
    static count = 0;
    /**HTML title attribute */
    title;
    /**Inner text string */
    innerText;
    /**The page the link is associated to */
    pageName;
    /**HTML href attribute */
    hReference;
    constructor(title, innerText, pageName, hReference) {
        (this.title = title),
            (this.innerText = innerText),
            (this.pageName = pageName),
            (this.hReference = hReference),
            RwbLink.count++;
    }
}
exports.default = RwbLink;
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
const rwbJsonConverter_1 = require("./rwbJsonConverter");
const rwbErrorBus_1 = __importDefault(require("./rwbErrorBus"));
/**
 * A ToDoList is an HTML widget to store To-Dos in the browser. Instantiate the
 *  ToDoList constructor to create widget markup and functionality. To-Dos are
 *  stored in the browser's Local Storage and read and rendered when the page loads.
 *
 * To create a ToDoList, an element on the page must have '.ToDoList' class. Call the
 *  class constructor, passing in that element to create the widget.
 *
 *       const toDoWidget = new ToDoList();
 *       toDoWidget.createToDoListWidget(toDosElement);
 *
 * Then, the widget is created and To-Dos are retrieved from storage.
 */
class ToDoList {
    /**Total number of ToDOs*/
    static toDos = 0;
    /**Widget elements used to populate todos */
    static toDoElements;
    static toDoInStorage;
    /**Todo HTML elements */
    listElements;
    /**
     * Sets the To-Do list widget's elements.
     *
     *      ToDoList.ToDoElements
     * @param toDoElements Widget Elements -- key widget function elements.
     */
    static setToDoListElements(toDoElements) {
        ToDoList.toDoElements = toDoElements;
    }
    /**
     * Random Web Bits uses multiple locations to apply the To-Do List widget. Create
     *  the list markup, passing in a reference element for placement of the widget.
     * @param elem - widget is placed after this reference element.
     */
    createToDoListWidget(elem) {
        //Insert the widget after the passed in "elem"
        //Dependent on the page, todo widget may have pre-existing markup in place
        //Switch against the current page to determine markup needed
        if (elem == undefined) {
            console.log(`%cThere is no "ToDoList" class on this page.`, "color:orange;");
            return;
        }
        if (!elem.classList.contains("ToDoList")) {
            console.log(`Add "ToDoList" class to ${elem.nodeName} node.`);
            return;
        }
        switch (window.location.pathname) {
            case "/RandomWebBits/":
            case "/RandomWebBits/index.html":
            case "/index.html":
            case "/":
            case "/dist/index.html":
                //Markup does not exist on the page
                //Create table elements needed for the todo list
                const TODOLISTSECTION = elem.insertAdjacentElement("afterend", document.createElement("section"));
                const HEADER = TODOLISTSECTION.appendChild(document.createElement("h3"));
                const DIV = TODOLISTSECTION.appendChild(document.createElement("div"));
                const TABLE = DIV.appendChild(document.createElement("table"));
                const THEAD = TABLE.appendChild(document.createElement("thead"));
                const TR1 = THEAD.appendChild(document.createElement("tr"));
                const THLEFT = TR1.appendChild(document.createElement("th"));
                const THMIDDLE = TR1.appendChild(document.createElement("th"));
                const TBODY = TABLE.appendChild(document.createElement("tbody"));
                const TFOOT = TABLE.appendChild(document.createElement("tfoot"));
                const TR3 = TFOOT.appendChild(document.createElement("tr"));
                const TD3LEFT = TR3.appendChild(document.createElement("td"));
                const TD3IN = TD3LEFT.appendChild(document.createElement("input"));
                const TD3MIDDLE = TR3.appendChild(document.createElement("td"));
                const INPUT = TD3MIDDLE.appendChild(document.createElement("input"));
                //Add attributes and property values
                TABLE.appendChild(document.createElement("tfoot"));
                TD3IN.setAttribute("aria-label", "Add");
                TD3IN.setAttribute("Value", "Add");
                INPUT.setAttribute("name", "itemINPUT");
                INPUT.setAttribute("type", "text");
                INPUT.setAttribute("aria-label", "Input");
                INPUT.setAttribute("id", "todoInput");
                INPUT.setAttribute("placeholder", "New to-do item");
                HEADER.textContent = "To-Do:";
                TODOLISTSECTION.id = "ToDO";
                THLEFT.textContent = "Complete?";
                THMIDDLE.textContent = "Description";
                TBODY.id = "ToDoItems";
                TD3IN.id = "AddButton";
                TD3IN.type = "button";
                //Create a sample to do item (it is not stored in cache)
                this.createSampleTo_Do(TBODY);
                //With the elements created, set the class list elements
                this.getToDoListElements();
                ToDoList.setToDoListElements(this.listElements);
                this.populateToDoList();
                this.addToDoEventListeners();
                break;
            case "/RandomWebBits/pages/todos.html":
            case "/pages/todos.html":
                //Markup exists on the page already
                //With the elements created, set the class list elements
                this.getToDoListElements();
                ToDoList.setToDoListElements(this.listElements);
                //Create a sample to do item due to cache empty
                const HTBODY = ToDoList.toDoElements.toDoTableBody;
                if (HTBODY != null) {
                    this.createSampleTo_Do(HTBODY);
                }
                this.populateToDoList();
                this.addToDoEventListeners();
                break;
            default:
                console.log("Element is not valid. Please ensure a valid element for ToDo list widget to follow.");
        }
    }
    /**
     * Checks for To-Do items from Local Storage.
     * @returns boolean true or false
     */
    static getToDoInStorage(checkEmptyValueString, logMessage) {
        if (rwbErrorBus_1.default.checkLocalStorageEqualNull("ToDoList", "ToDos", checkEmptyValueString, logMessage)) {
            return false;
        }
        let parseStr = localStorage.getItem("ToDos");
        let parseTest = Object.create(new rwbJsonConverter_1.RwbParseJson(parseStr));
        if (!parseTest.passed) {
            //parsed JSON is malformed
            localStorage.removeItem("ToDos");
            console.log(`%c<RWB>%cDeleted storage key: ToDos`, "color:orange;font-size:14px;font-weight:bold;", "color:orange;font-size:16px;");
            return false;
        }
        this.toDoInStorage = parseTest.returnObj;
        return true;
    }
    /**
     * Gather necessary elements from the created widget.
     * @returns ToDoElements: ToDoListElements
     */
    getToDoListElements() {
        //Gather necessary elements from the created widget
        //Each widget location's elements may vary, so a call of getToDoListElements()
        //locates the page's elements to populate the ToDoElements interface.
        let toDoTable;
        let toDoTableBody;
        let addButton;
        let addItemToEnter;
        toDoTable = rwbErrorBus_1.default.checkSelectedElement("ToDoList", "#ToDO table", true, false);
        toDoTableBody = rwbErrorBus_1.default.checkSelectedElement("ToDoList", "#ToDoItems", true, false);
        addButton = rwbErrorBus_1.default.checkSelectedElement("ToDoList", "#AddButton", true, false);
        addItemToEnter = rwbErrorBus_1.default.checkSelectedElement("ToDoList", 'input[name="itemINPUT"]', true, false);
        if (toDoTable == null || toDoTableBody == null || addButton == null || addItemToEnter == null) {
            console.warn("An element is missing. The todo list widget may not function as expected.");
        }
        let toDoElements = {
            toDoTable: toDoTable,
            toDoTableBody: toDoTableBody,
            addButton: addButton,
            addItemToEnter: addItemToEnter,
        };
        this.listElements = toDoElements;
    }
    /**
     * Adds a To-Do to Local Storage.
     * @param description - The UI form input description.
     */
    addToDoToStorage(description) {
        //Add the ToDos array to local cache.
        //The 'localstoragetodocache' interface structures the data for later retrieval.
        let toDo = {
            inCache: false,
            toDoItem: description,
        };
        let toDos = []; //ToDo array
        let strgfy;
        const stringifyToDo = (toDoStr) => {
            //Call RWBStringifyJSON to stringify the object
            let toDosStrgfyTest = Object.create(new rwbJsonConverter_1.RwbStringifyJson(toDoStr));
            if (!toDosStrgfyTest.passed) {
                //LOGLEAF
                return;
            }
            return toDosStrgfyTest.returnStr;
        };
        //First, read current Local Storage ToDos
        let toDosStorageCache = ToDoList.getToDoInStorage(false, false);
        if (toDosStorageCache) {
            toDos = ToDoList.toDoInStorage;
            toDos.push(toDo);
            //Call RWBStringifyJSON to stringify the object
            strgfy = stringifyToDo(toDos);
            localStorage.setItem("ToDos", strgfy);
        }
        else {
            toDos.push(toDo);
            //Call RWBStringifyJSON to stringify the object
            strgfy = stringifyToDo(toDos);
            localStorage.setItem("ToDos", strgfy);
            console.log(`%c<RWB>%cCreated to-do cache key: ToDos`, "color:cyan;font-size:14px;font-weight:bold;", "color:cyan;font-size:16px;");
        }
        console.log(`%c<RWB>%cAdded to-do cache: ${description}`, "color:cyan;font-weight:bold;", "color:cyan;");
    }
    /**
     * Removes a To-Do item from Local Storage. The requested To-Do to remove is
     *  pulled individually from the key-value pair object.
     * @param item - the To-Do item requested to remove
     */
    removeToDoFromStorage(item) {
        ToDoList.toDoInStorage = ToDoList.toDoInStorage.filter(toDo => toDo.toDoItem !== item);
        console.log(`%c<RWB>%cDeleted todo cache: ${item}`, "color:darkcyan;font-weight:bold;", "color:darkcyan;");
        let toDoInStorageStrgfyTest = Object.create(new rwbJsonConverter_1.RwbStringifyJson(ToDoList.toDoInStorage));
        if (!toDoInStorageStrgfyTest.passed) {
            //LOGLEAF
            return;
        }
        let jsonStr = toDoInStorageStrgfyTest.returnStr;
        if (jsonStr == "" || jsonStr == "[]") {
            localStorage.removeItem("ToDos");
            console.log(`%c<RWB>%cDeleted storage key: ToDos`, "color:darkcyan;font-size:14px;font-weight:bold;", "color:darkcyan;font-size:16px;");
            return;
        }
        localStorage.setItem("ToDos", jsonStr);
    }
    /**
     * This function creates the necessary markup to add a row to the To-Do table.
     *  A row consists of three columns: a complete tick-box, a description, and a delete button.
     * @param description - User form input to add as a description.
     * @param firstPaint - Boolean value used by adding list storage
     */
    addToDoRow(description, firstPaint) {
        //Create a table row with checkbox and delete options
        const TABLEBODYITEM = ToDoList.toDoElements.toDoTableBody;
        const TABLEFRAG = document.createDocumentFragment();
        const NEWROW = TABLEFRAG.appendChild(document.createElement("tr")); //Add row
        const FIRSTCOL = NEWROW.appendChild(document.createElement("td")); //Table first data
        const CHECKBOX = FIRSTCOL.appendChild(document.createElement("input")); //Add checkbox
        const NEWITEM = NEWROW.appendChild(document.createElement("td")); //Table second data
        const SECONDCOL = NEWROW.appendChild(document.createElement("td")); //Table third data
        const DELBOX = SECONDCOL.appendChild(document.createElement("input")); //Add deletebox
        //Add attributes and property values
        CHECKBOX.setAttribute("type", "checkbox");
        CHECKBOX.setAttribute("aria-label", "Checkbox");
        CHECKBOX.setAttribute("aria-label", "Delete");
        NEWITEM.setAttribute("num", ToDoList.toDos
            ? (() => {
                let elem = document.querySelector("#ToDO td[num]");
                return ((Number(elem?.getAttribute("num")) || -1000) + ToDoList.toDos).toString();
            })()
            : (1).toString());
        NEWITEM.textContent = description; //Populate second col
        ToDoList.toDos++; //Number of Items
        DELBOX.setAttribute("type", "submit");
        DELBOX.setAttribute("value", "Delete");
        if (firstPaint) {
            //Add to list storage
            this.addToDoToStorage(description);
        }
        //Add the row to the ToDos table
        TABLEBODYITEM.appendChild(TABLEFRAG);
        console.log(`%c<RWB>%cCreated to-do table row`, "color:gold;font-weight:bold;", "color:gold;");
        //Add an event listener for when 'delete' is clicked
        DELBOX.addEventListener("click", () => {
            this.deleteButton(DELBOX);
        });
    }
    /**
     * Function called to create the To-Do item rows from To-Dos stored in the browser Local Storage.
     */
    populateToDoList() {
        if (ToDoList.getToDoInStorage(true, false)) {
            for (let i = 0; i < ToDoList.toDoInStorage.length; i++) {
                this.addToDoRow(ToDoList.toDoInStorage[i].toDoItem, false);
            }
        }
    }
    /**
     * Add button functionality.
     */
    addToDoEventListeners() {
        const ADDBUTTON = ToDoList.toDoElements.addButton;
        const ADDITEMENTER = ToDoList.toDoElements.addItemToEnter;
        if (ADDBUTTON == null && ADDITEMENTER == null) {
            throw new Error("Element was not found or is null");
        }
        /**Add input text to the todo list from clicking the add button*/
        ADDBUTTON.addEventListener("click", () => {
            this.addToDoRow(ADDITEMENTER.value, true);
            ADDITEMENTER.value = "";
        });
        /**Add input text to the todo list when using key enter*/
        ADDITEMENTER.addEventListener("keydown", e => {
            if (e.code == "NumpadEnter" || e.code == "Enter") {
                this.addToDoRow(ADDITEMENTER.value, true);
                ADDITEMENTER.value = "";
            }
        });
    }
    /**
     * function determining the delete button. Items are deleted when pushed, but are
     *  not removed from storage without 'Complete?' checkebox checked.
     * @param box input element
     */
    deleteButton(box) {
        if (box.parentNode == null ||
            box.parentNode.previousSibling == null ||
            box.parentNode.previousSibling.previousSibling == null) {
            throw new Error("Missing a table element.");
        }
        const rowChkBx = box.parentNode.previousSibling.previousSibling;
        /** Input element */
        const rowChkBxIN = rowChkBx.childNodes[0];
        const toDoTable = ToDoList.toDoElements.toDoTable;
        const tr = box.parentNode.parentNode;
        let i = tr.rowIndex;
        const value = box.parentNode.previousSibling.textContent;
        if (rowChkBxIN.checked) {
            //remove row since completed
            toDoTable.deleteRow(i);
            console.log(`%c<RWB>%cDeleted todo row: ${box.parentElement.previousElementSibling.textContent}`, "color:goldenrod;font-weight:bold;", "color:goldenrod;");
            if (value != "Add a ToDO Item.") {
                ToDoList.toDos--;
                //delete associated storage item
                this.removeToDoFromStorage(value);
            }
        }
        else {
            toDoTable.deleteRow(i);
            console.log(`%c<RWB>%cRemoved todo row: ${box.parentElement.previousElementSibling.textContent}`, "color:goldenrod;font-weight:bold;", "color:goldenrod;");
            ToDoList.toDos--;
        }
    }
    /**
     * This function is called to seed the To-Do List when there are no Local Storage items
     *  which would populate the list. The sample remains on page but is never stored in the browser.
     * @param tBody table body element
     */
    createSampleTo_Do(tBody) {
        if (ToDoList.getToDoInStorage(false, true))
            return;
        //Create a sample entry in the ToDo table as a placeholder
        const TR2 = tBody.appendChild(document.createElement("tr"));
        const TD2LEFT = TR2.appendChild(document.createElement("td"));
        const TD2IN = TD2LEFT.appendChild(document.createElement("input"));
        const TD2MIDDLE = TR2.appendChild(document.createElement("td"));
        const TD2RIGHT = TR2.appendChild(document.createElement("td"));
        const TD2DEL = TD2RIGHT.appendChild(document.createElement("input"));
        //Add attributes and property values
        TD2IN.setAttribute("aria-label", "Checkbox");
        TD2MIDDLE.setAttribute("num", `${1}`);
        TD2IN.setAttribute("aria-label", "Delete");
        TD2DEL.setAttribute("type", "reset");
        TD2DEL.setAttribute("value", "Delete");
        TD2IN.type = "checkbox";
        TD2MIDDLE.textContent = "Add a ToDO Item.";
        ToDoList.toDos++;
        //"Delete" event listener
        TD2DEL.addEventListener("click", () => {
            this.deleteButton(TD2DEL);
            console.log(`%c<RWB>%cRemoved todo: ${TD2DEL.parentElement.previousElementSibling.textContent}`, "color:purple;font-weight:bold;", "color:purple;");
        });
    }
}
exports.ToDoList = ToDoList;
},{"./rwbErrorBus":16,"./rwbJsonConverter":17}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xhc3NDb21wb25lbnRzLnRzIiwic3JjL2NvbXBvbmVudHMvZ2xvYmFsLzQwNC50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC9jb2xvclNjaGVtZS50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC9kaWN0aW9uYXJ5V2lkZ2V0LnRzIiwic3JjL2NvbXBvbmVudHMvZ2xvYmFsL2hlYWRlckZvb3Rlci50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC9wcmVmZXJlbmNlcy50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC90b0Rvc1dpZGdldC50cyIsInNyYy9kYXRhL25hdkl0ZW1zLnRzIiwic3JjL21haW4udHMiLCJzcmMvbW9kZWxzL2FiYnJEZXNjcmlwdGlvbi50cyIsInNyYy9tb2RlbHMvYXBpLnRzIiwic3JjL21vZGVscy9jbGllbnQudHMiLCJzcmMvbW9kZWxzL2NvdW50ZXIudHMiLCJzcmMvbW9kZWxzL2RpY3Rpb25hcnlTZWFyY2gudHMiLCJzcmMvbW9kZWxzL2RpY3Rpb25hcnlTZWFyY2hNYXJrdXAudHMiLCJzcmMvbW9kZWxzL3J3YkVycm9yQnVzLnRzIiwic3JjL21vZGVscy9yd2JKc29uQ29udmVydGVyLnRzIiwic3JjL21vZGVscy9yd2JMaW5rLnRzIiwic3JjL21vZGVscy9zY3JpcHRQZXJmLnRzIiwic3JjL21vZGVscy90b0RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDRDQUE0Qzs7Ozs7QUFFNUMscUVBQTBDO0FBQzFDLHVFQUE0QztBQUM1Qyw0RkFBb0U7QUFDcEUsa0ZBQTBEO0FBQzFELG1FQUF3RDtBQUN4RCwrRUFBZ0Q7QUFFaEQsTUFBTSxlQUFlLEdBQUc7SUFDdEI7OztPQUdHO0lBQ0gsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUNwQixNQUFNLGNBQWMsR0FBRyxJQUFJLG9CQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxD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QUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEIsU0FBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUMzQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFakIseUJBQXlCO1FBQ3pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FDVCwwQkFBMEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsRUFDbkYsZ0NBQWdDLEVBQ2hDLGVBQWUsQ0FDaEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUE5WkgsNEJBK1pDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCBSd2JQZXJmIGZyb20gXCIuL21vZGVscy9zY3JpcHRQZXJmXCI7XHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuaW1wb3J0IGRpY3Rpb25hcnlXaWRnZXQgZnJvbSBcIi4vY29tcG9uZW50cy9nbG9iYWwvZGljdGlvbmFyeVdpZGdldFwiO1xyXG5pbXBvcnQgdG9Eb3NXaWRnZXQgZnJvbSBcIi4vY29tcG9uZW50cy9nbG9iYWwvdG9Eb3NXaWRnZXRcIjtcclxuaW1wb3J0IG5vdEZvdW5kNDA0V2lkZ2V0IGZyb20gXCIuL2NvbXBvbmVudHMvZ2xvYmFsLzQwNFwiO1xyXG5pbXBvcnQgQWJick9wZW4gZnJvbSBcIi4vbW9kZWxzL2FiYnJEZXNjcmlwdGlvblwiO1xyXG5cclxuY29uc3QgY2xhc3NDb21wb25lbnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIEF0dHJpYnV0ZSB0YWdzIG9uIG1vYmlsZSBkbyBub3QgaGF2ZSBob3ZlciBvcHRpb24uIFRoaXMgZnVuY3Rpb24gYWRkcyBhIGNsaWNrXHJcbiAgICogIGFiaWxpdHkgdG8gZGVmaW5lIGFuIGFiYnIgdGFnLCB0aGFuIHJlbHkgb24gdGhlIHRpdGxlIGF0dHJpYnV0ZS5cclxuICAgKi9cclxuICBhYmJyRGVmaW5pdGlvbnM6ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZWFiYnJwZXJmID0gbmV3IFJ3YlBlcmYoXCJNb2JpbGVhYmJycGVyZlwiKTsgLy9zdGFydCBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcblxyXG4gICAgLyoqR2l2ZSBhbGwgYWJiciBlbGVtZW50cyBvcHRpb24gdG8gY2xpY2sgdG8gcmV2ZWFsIHRoZSBleHBhbmRlZCBkZXNjcmlwdGlvbi4gKi9cclxuICAgIGNvbnN0IGFsbGFiYnJldmlhdGlvbmVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFiYnJcIik7XHJcblxyXG4gICAgaWYgKGFsbGFiYnJldmlhdGlvbmVsZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgYWJiciBvZiBhbGxhYmJyZXZpYXRpb25lbGVtcykge1xyXG4gICAgICAgIGxldCBhYmJyZXYgPSBuZXcgQWJick9wZW4oYWJicik7XHJcbiAgICAgICAgYWJicmV2LnJldmVhbEFiYnJEZXNjcmlwdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipDaGVjayBmb3IgNDA0IGNsYXNzIGNvbXBvbmVudCAqL1xyXG4gICAgY2xhc3NDb21wb25lbnRzLmZvdXJvaGZvdXIoKTtcclxuXHJcbiAgICBtb2JpbGVhYmJycGVyZi5lbmQoKTsgLy9lbmQgcGVyZm9ybWFuY2UgbWVhc3VyZVxyXG4gIH0sXHJcbiAgZm91cm9oZm91cjogKCkgPT4ge1xyXG4gICAgaWYgKFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiUGFnZUNvbXBvbmVudHNcIiwgXCIjRm91ci1PaC1Gb3VyXCIsIGZhbHNlLCB0cnVlKSAhPT0gbnVsbCkge1xyXG4gICAgICBub3RGb3VuZDQwNFdpZGdldC5pbml0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0OiAocGFnZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc3BlcmYgPSBuZXcgUndiUGVyZihcIkNsYXNzY29tcG9uZW50c1wiKTsgLy9iZWdpbiBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcblxyXG4gICAgLy8gQWRkIERpY3Rpb25hcnkgV2lkZ2V0IGlmIGFuIGVsZW1lbnQgd2l0aCB0aGF0IGNsYXNzIGlzIG9uIGEgcGFnZVxyXG4gICAgaWYgKHBhZ2UgPT0gXCIvcGFnZXMvZGljdGlvbmFyeXdvcmQuaHRtbFwiIHx8IHBhZ2UgPT0gXCIvaW5kZXguaHRtbFwiIHx8IHBhZ2UgPT0gXCIvXCIgfHwgcGFnZSA9PSBcIlwiKSB7XHJcbiAgICAgIGRpY3Rpb25hcnlXaWRnZXQuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBUb0RvcyB3aWRnZXQgaWYgYW4gZWxlbWVudCB3aXRoIHRoYXQgY2xhc3MgaXMgb24gYSBwYWdlXHJcbiAgICBpZiAocGFnZSA9PSBcIi9wYWdlcy90b2Rvcy5odG1sXCIgfHwgcGFnZSA9PSBcIi9pbmRleC5odG1sXCIgfHwgcGFnZSA9PSBcIi9cIiB8fCBwYWdlID09IFwiXCIpIHtcclxuICAgICAgdG9Eb3NXaWRnZXQuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhYmJyIGRlZmluaXRpb25zXHJcbiAgICBjbGFzc0NvbXBvbmVudHMuYWJickRlZmluaXRpb25zKCk7XHJcblxyXG4gICAgY2xhc3NwZXJmLmVuZCgpOyAvL2VuZCBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3NDb21wb25lbnRzO1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9jbGllbnRcIjtcclxuaW1wb3J0IFJ3YkVycm9yIGZyb20gXCIuLi8uLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbmNvbnN0IG5vdEZvdW5kNDA0V2lkZ2V0ID0ge1xyXG4gIGluaXQ6ICgpID0+IHtcclxuICAgIGxldCBjbGllbnQ0MDQgPSBuZXcgY2xpZW50KCk7XHJcbiAgICBsZXQgY2xpZW50UmVmZmVySW5mbzogSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgbGV0IGNsaWVudFJ0dEluZm86IEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGxldCBjbGllbnRQbGF0Zm9ybUluZm86IEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGNsaWVudFJlZmZlckluZm8gPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgICAgXCJGb3VyT2hGb3VyXCIsXHJcbiAgICAgIFwiI2NsaWVudHJlZmVycmVyXCIsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRydWVcclxuICAgICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY2xpZW50UnR0SW5mbyA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiRm91ck9oRm91clwiLCBcIiNjbGllbnRydHRcIiwgdHJ1ZSwgdHJ1ZSkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY2xpZW50UGxhdGZvcm1JbmZvID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXHJcbiAgICAgIFwiRm91ck9oRm91clwiLFxyXG4gICAgICBcIiNjbGllbnRwbGF0XCIsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRydWVcclxuICAgICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIC8vRmlsbCBpbmZvcm1hdGlvbiBzZWNpb25cclxuICAgIGNsaWVudFJlZmZlckluZm8udGV4dENvbnRlbnQgPSBjbGllbnQ0MDQub2xkVVJMID8gY2xpZW50NDA0Lm9sZFVSTCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgY2xpZW50UnR0SW5mby50ZXh0Q29udGVudCA9IGAke1xyXG4gICAgICBjbGllbnQ0MDQuY29ubmVjdGlvbnR5cGUgPyBjbGllbnQ0MDQuY29ubmVjdGlvbnR5cGUgOiBcIk5vIGNvbm5lY3Rpb24gdHlwZSBmb3VuZC5cIlxyXG4gICAgfWA7XHJcbiAgICBjbGllbnRSdHRJbmZvLnRleHRDb250ZW50ICs9IGAsIHJ0dCBvZiAke1xyXG4gICAgICBjbGllbnQ0MDQuY29ubmVjdGlvbnJ0dCA/IGNsaWVudDQwNC5jb25uZWN0aW9ucnR0IDogXCJObyBydHQgZm91bmQuXCJcclxuICAgIH1gO1xyXG4gICAgY2xpZW50UGxhdGZvcm1JbmZvLnRleHRDb250ZW50ID0gY2xpZW50NDA0LmJyb3dzZXJwbGF0Zm9ybVxyXG4gICAgICA/IGNsaWVudDQwNC5icm93c2VycGxhdGZvcm1cclxuICAgICAgOiBcIk5vIHBsYXRmb3JtIGluZm9ybWF0aW9uIGZvdW5kLlwiO1xyXG4gICAgY2xpZW50UGxhdGZvcm1JbmZvLnRleHRDb250ZW50ICs9IGAsICR7XHJcbiAgICAgIGNsaWVudDQwNC51c2VyYWdlbnQgPyBjbGllbnQ0MDQudXNlcmFnZW50IDogXCJObyB1c2VyIGFnZW50IGluZm8uXCJcclxuICAgIH1gO1xyXG5cclxuICAgIC8vUHJvdmlkZSBhIGxpbmsgdG8gZ28gYmFjayB3aGVyZSB5b3UgY2FtZSBmcm9tXHJcbiAgICBsZXQgZ29CYWNrTGluazogSFRNTExpbmtFbGVtZW50O1xyXG4gICAgZ29CYWNrTGluayA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiRm91ck9oRm91clwiLCBcIiNvbGRVUkxcIiwgdHJ1ZSwgdHJ1ZSkgYXMgSFRNTExpbmtFbGVtZW50O1xyXG4gICAgaWYgKGNsaWVudDQwNC5vbGRVUkwuaW5jbHVkZXMoXCI0MDQuaHRtbFwiKSkge1xyXG4gICAgICBjbGllbnQ0MDQub2xkVVJMID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIGxldCBnb0JhY2tIcmVmID0gY2xpZW50NDA0Lm9sZFVSTCA/IGNsaWVudDQwNC5vbGRVUkwgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgZ29CYWNrTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAke2dvQmFja0hyZWZ9YCk7XHJcbiAgICBnb0JhY2tMaW5rLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIGdvQmFja0hyZWYpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RGb3VuZDQwNFdpZGdldDtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyNC0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi4vLi4vbW9kZWxzL3J3YkVycm9yQnVzXCI7XHJcblxyXG5jb25zdCBjb2xvclNjaGVtZSA9IHtcclxuICBjaGVja1RvZ2dsZUJ0blN0YXRlOiAoKSA9PiB7XHJcbiAgICBsZXQgdGhlbWVDYWNoZVVzZXJQcmVmO1xyXG4gICAgbGV0IHRoZW1lQ2FjaGVCcm93c2VyUHJlZjtcclxuICAgIGlmICghUndiRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VFcXVhbE51bGwoXCJDb2xvclNjaGVtZVwiLCBcImNvbG9yLXNjaGVtZS1wcmVmZXJlbmNlXCIpKXtcclxuICAgICAgdGhlbWVDYWNoZVVzZXJQcmVmID0gY29sb3JTY2hlbWUuZ2V0VXNlclByZWZlcmVuY2UoKTtcclxuICAgICAgdGhlbWVDYWNoZUJyb3dzZXJQcmVmID0gY29sb3JTY2hlbWUuZ2V0QnJvd3NlclByZWZlcmVuY2UoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGVtZUNhY2hlVXNlclByZWYgPSBjb2xvclNjaGVtZS5nZXRTeXN0ZW1QcmVmZXJlbmNlKCk7XHJcbiAgICAgIHRoZW1lQ2FjaGVCcm93c2VyUHJlZiA9IHRoZW1lQ2FjaGVVc2VyUHJlZjtcclxuICAgIH1cclxuXHJcbiAgICAvL0NoYW5nZSB0aGUgdG9nZ2xlIGJ1dHRvbiB0byBtYXRjaCB0aGUgZGlzcGxheWVkIHRoZW1lXHJcbiAgICBsZXQgdGhlbWVUb2dnbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoZW1lVG9nZ2xlXCIpO1xyXG4gICAgbGV0IHRoZW1lVG9nZ2xlQnRuID0gdGhlbWVUb2dnbGVDb250YWluZXIucXVlcnlTZWxlY3RvcihcImRpdi50b2dnbGVcIik7XHJcbiAgICBsZXQgdGhlbWVUb2dnbGVMYWJlbCA9IHRoZW1lVG9nZ2xlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xyXG4gICAgbGV0IHRoZW1lVG9nZ2xlSW5wdXRFbGVtcyA9IHRoZW1lVG9nZ2xlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcclxuICAgIGxldCB0aGVtZVRvZ2dsZUlucHV0RGFyayA9IHRoZW1lVG9nZ2xlSW5wdXRFbGVtc1swXTtcclxuICAgIGxldCB0aGVtZVRvZ2dsZUlucHV0TGlnaHQgPSB0aGVtZVRvZ2dsZUlucHV0RWxlbXNbMV07XHJcbiAgICBcclxuICAgIGlmICh0aGVtZUNhY2hlVXNlclByZWYgPT0gXCJkYXJrXCIpIHtcclxuICAgICAgLy9Jbml0aWFsIHN0YXRlIGlzIGxpZ2h0IG1vZGUuIFRvZ2dsZSBjaGVja2VkIGFuZCBhZGQgJ2VuYWJsZWQnIGNsYXNzXHJcbiAgICAgIHRoZW1lVG9nZ2xlSW5wdXREYXJrLnRvZ2dsZUF0dHJpYnV0ZShcImNoZWNrZWRcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlSW5wdXRMaWdodC5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlZFwiKTtcclxuICAgICAgdGhlbWVUb2dnbGVCdG4uY2xhc3NMaXN0LmFkZChcIkRhcmtcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJMaWdodFwiKTtcclxuICAgICAgdGhlbWVUb2dnbGVMYWJlbC5pbm5lclRleHQgPSBcIkRhcmtcIjtcclxuXHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBcclxuXHJcbiAgICBpZiAodGhlbWVDYWNoZVVzZXJQcmVmID09IFwibGlnaHRcIikge1xyXG4gICAgICAvL0luaXRpYWwgc3RhdGUgaXMgZGFyayBtb2RlLiBSZW1vdmUgY2hlY2tlZCBhbmQgcmVtb3ZlICdlbmFibGVkJyBjbGFzc1xyXG4gICAgICB0aGVtZVRvZ2dsZUlucHV0RGFyay5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUlucHV0TGlnaHQudG9nZ2xlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgdGhlbWVUb2dnbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVuYWJsZWRcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJMaWdodFwiKTtcclxuICAgICAgdGhlbWVUb2dnbGVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIkRhcmtcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlTGFiZWwuaW5uZXJUZXh0ID0gXCJMaWdodFwiO1xyXG5cclxuICAgICAgcmV0dXJuIDI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlbWVUb2dnbGVJbnB1dERhcmsucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcclxuICAgIHRoZW1lVG9nZ2xlSW5wdXRMaWdodC5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgdGhlbWVUb2dnbGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZWRcIik7XHJcbiAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiRGFya1wiKTtcclxuICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJMaWdodFwiKTtcclxuXHJcbiAgICBpZiAodGhlbWVDYWNoZVVzZXJQcmVmID09IFwiYnJvd3NlclwiICYmIHRoZW1lQ2FjaGVCcm93c2VyUHJlZiA9PSBcImRhcmtcIil7XHJcbiAgICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJEYXJrXCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiTGlnaHRcIik7XHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgdGhlbWVUb2dnbGVCdG4uY2xhc3NMaXN0LmFkZChcIkxpZ2h0XCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiRGFya1wiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVtZVRvZ2dsZUxhYmVsLmlubmVyVGV4dCA9IFwiQnJvd3NlclwiO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfSxcclxuXHJcbiAgZ2V0U3lzdGVtUHJlZmVyZW5jZTogKCkgPT4ge1xyXG4gICAgLy9DaGVjayB0aGUgYnJvd3NlciBzeXN0ZW0gcHJlZmVyZW5jZSBieSBtYXRjaGluZyBhIG1lZGlhIHF1ZXJ5XHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgIHJldHVybiBcImxpZ2h0XCI7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcclxuICAgICAgcmV0dXJuIFwiZGFya1wiO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0QnJvd3NlclByZWZlcmVuY2U6ICgpID0+IHtcclxuICAgIC8vR2V0IHRoZSBzdG9yZWQgc3lzdGVtIHByZWZlcmVuY2UgZnJvbSBsb2NhbCBjYWNoZVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiKSlbXCJicm93c2VyUHJlZmVyZW5jZVwiXTtcclxuICB9LFxyXG4gIGdldFVzZXJQcmVmZXJlbmNlOiAoKSA9PiB7XHJcbiAgICAvL0dldCB0aGUgc3RvcmVkIHVzZXIgcHJlZmVyZW5jZSBmcm9tIGxvY2FsIGNhY2hlXHJcbiAgICBsZXQgdXNlclByZWZlcmVuY2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3Itc2NoZW1lLXByZWZlcmVuY2VcIikpW1widXNlclByZWZlcmVuY2VcIl07XHJcbiAgICBpZiAodXNlclByZWZlcmVuY2UgPT0gXCJub25lXCIpIHtcclxuICAgICAgcmV0dXJuIGNvbG9yU2NoZW1lLmdldEJyb3dzZXJQcmVmZXJlbmNlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdXNlclByZWZlcmVuY2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZW1lIHByZWZlcmVuY2Ugb3B0aW9ucyBpbiB0aGUgaGVhZGVyLiBUaGUgc3lzdGVtIHByZWZlcmVuY2UgYW5kXHJcbiAgICogdXNlciBwcmVmZXJlbmNlIGFyZSBzdG9yZWQgaW4gbG9jYWwgY2FjaGUuIElmIGEgdXNlciBwcmVmZXJlbmNlIGhhcyBub3QgYmVlbiBjaG9zZW4sIHRoZSBzeXN0ZW1cclxuICAgKiBwcmVmZXJlbmNlIHRha2VzIHByZWNlZGVuY2UuXHJcbiAgICovXHJcbiAgc2V0Q29sb3JUaGVtZTogKHVzZXJSZXF1ZXN0Q2hhbmdlOiBib29sZWFuLCB1c2VyUHJlZmVyZW5jZTogbnVtYmVyKSA9PiB7XHJcbiAgICAvL091dHB1dCB0aGUgY3VycmVudCB0aGVtZSBwcmVmZXJlbmNlIGRldGVjdGlvblxyXG4gICAgY29uc3QgbG9nVXNlclByZWZlcmVuY2UgPSAobmV3UHJlZmVyZW5jZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoYFVzZXIgcHJlZmVyZW5jZSBjaGFuZ2VkIHRvICR7bmV3UHJlZmVyZW5jZX0gdGhlbWUgY29sb3JzLmApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL091dHB1dCBhIHRoZW1lIHByZWZlcmVuY2UgY2hhbmdlIGxvZ1xyXG4gICAgY29uc3QgbG9nU3lzdGVtUHJlZmVyZW5jZUNoYW5nZSA9IChuZXdQcmVmZXJlbmNlOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYEJyb3dzZXIgdGhlbWUgY29sb3JzIHByZWZlcmVuY2UgY2hhbmdlZC5gKTtcclxuICAgIH07XHJcbiAgICAvKipTdG9yZSBicm93c2VyIGNvbG9yIHNjaGVtZSBwcmVmZXJlbmNlIGluIGEgbWFwICovXHJcbiAgICBsZXQgY29sb3JTY2hlbWVQcmVmZXJlbmNlcyA9IG5ldyBNYXAoW1xyXG4gICAgICBbXCJicm93c2VyUHJlZmVyZW5jZVwiLCBcIm5vbmVcIl0sXHJcbiAgICAgIFtcInVzZXJQcmVmZXJlbmNlXCIsIFwibm9uZVwiXSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8qKlNldCB0aGUgc2l0ZSB1cCBmb3IgY29sb3IgdGhlbWUgY2hhbmdlcyAqL1xyXG4gICAgY29uc3QgaW5pdCA9IChjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZTogYm9vbGVhbiwgdXNlclByZWZlcmVuY2U6IG51bWJlcikgPT4ge1xyXG4gICAgICBsZXQgcHJlZmVyZW5jZVRvU2V0VG8gPSBjb2xvclNjaGVtZS5nZXRTeXN0ZW1QcmVmZXJlbmNlKCk7XHJcbiAgICAgIGlmIChjb2xvclNjaGVtZVByZWZlcmVuY2VzLmdldChcImJyb3dzZXJQcmVmZXJlbmNlXCIpID09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgLy9HZXQgdGhlIGN1cnJlbnQgYnJvd3NlciBwcmVmZXJlbmNlXHJcbiAgICAgICAgY29sb3JTY2hlbWVQcmVmZXJlbmNlcy5zZXQoXCJicm93c2VyUHJlZmVyZW5jZVwiLCBjb2xvclNjaGVtZS5nZXRTeXN0ZW1QcmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIHByZWZlcmVuY2VUb1NldFRvID0gY29sb3JTY2hlbWVQcmVmZXJlbmNlcy5nZXQoXCJicm93c2VyUHJlZmVyZW5jZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9JZiB0aGUgdXNlciBoYXMgcmVxdWVzdGVkIGEgcHJldmlvdXMgY2hhbmdlXHJcbiAgICAgIGlmIChcclxuICAgICAgICAhUndiRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VFcXVhbE51bGwoXCJDb2xvclNjaGVtZVwiLCBcImNvbG9yLXNjaGVtZS1wcmVmZXJlbmNlXCIpICYmXHJcbiAgICAgICAgIWNoYW5nZUJyb3dzZXJQcmVmZXJlbmNlICYmXHJcbiAgICAgICAgY29sb3JTY2hlbWVQcmVmZXJlbmNlcy5nZXQoXCJ1c2VyUHJlZmVyZW5jZVwiKSAhPSBcIm5vbmVcIlxyXG4gICAgICApIHtcclxuICAgICAgICBwcmVmZXJlbmNlVG9TZXRUbyA9IGNvbG9yU2NoZW1lLmdldFVzZXJQcmVmZXJlbmNlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vSWYgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIGNoYW5nZVxyXG4gICAgICBpZiAodXNlclByZWZlcmVuY2UgPT0gMil7XHJcbiAgICAgICAgcHJlZmVyZW5jZVRvU2V0VG8gPSBcImxpZ2h0XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVzZXJQcmVmZXJlbmNlID09IDEpIHtcclxuICAgICAgICBwcmVmZXJlbmNlVG9TZXRUbyA9IFwiZGFya1wiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyUHJlZmVyZW5jZSA9PSAwICYmICFjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZSlcclxuICAgICAgICBwcmVmZXJlbmNlVG9TZXRUbyA9IFwiYnJvd3NlclwiO1xyXG5cclxuICAgICAgLy9BZGQgdXNlcidzIHByZWZlcmVuY2Ugb3B0aW9uIHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgY29sb3JTY2hlbWUuc2V0TG9jYWxTdG9yYWdlKFxyXG4gICAgICAgIHByZWZlcmVuY2VUb1NldFRvLFxyXG4gICAgICAgIGNoYW5nZUJyb3dzZXJQcmVmZXJlbmNlLFxyXG4gICAgICAgIHVzZXJQcmVmZXJlbmNlLFxyXG4gICAgICAgIGNvbG9yU2NoZW1lUHJlZmVyZW5jZXNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vTG9nIHRoZSBjdXJyZW50IGFjdGlvblxyXG4gICAgICBpZiAodXNlclByZWZlcmVuY2UgPj0gMCAmJiAhY2hhbmdlQnJvd3NlclByZWZlcmVuY2UpIHtcclxuICAgICAgICBsb2dVc2VyUHJlZmVyZW5jZShwcmVmZXJlbmNlVG9TZXRUbyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZUJyb3dzZXJQcmVmZXJlbmNlKSB7XHJcbiAgICAgICAgbG9nU3lzdGVtUHJlZmVyZW5jZUNoYW5nZShwcmVmZXJlbmNlVG9TZXRUbyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKFJ3YkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlRXF1YWxOdWxsKFwiQ29sb3JTY2hlbWVcIiwgXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiKSkge1xyXG4gICAgICB1c2VyUHJlZmVyZW5jZSA9IC0xO1xyXG4gICAgICBpbml0KGZhbHNlLCB1c2VyUHJlZmVyZW5jZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlclByZWZlcmVuY2UgPj0gMCAmJiB1c2VyUmVxdWVzdENoYW5nZSkge1xyXG4gICAgICBpbml0KGZhbHNlLCB1c2VyUHJlZmVyZW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3JTY2hlbWUuc2V0RG9tRWxlbWVudHMoY29sb3JTY2hlbWUuZ2V0VXNlclByZWZlcmVuY2UoKSk7XHJcbiAgICBjb2xvclNjaGVtZS5jaGVja1RvZ2dsZUJ0blN0YXRlKCk7XHJcblxyXG4gICAgLyoqQ2hlY2sgZm9yIGNvbG9yIHNjaGVtZSBwcmVmZXJlbmNlIGNoYW5nZSAqL1xyXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgaWYgKFJ3YkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlTnVsbG9yRW1wdHkoXCJDb2xvclNjaGVtZVwiLCBcImNvbG9yLXNjaGVtZS1wcmVmZXJlbmNlXCIsIHRydWUpKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgXCJMb2NhbCBzdG9yYWdlIGtleSBoYXMgYmVlbiByZW1vdmVkLiBSZWZyZXNoIHRoZSBwYWdlIHRvIGdlbmVyYXRlIGEgbmV3IGtleS12YWx1ZSBwYWlyLlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy9DaGFuZ2UgdGhlIGJyb3dzZXIgcHJlZmVyZW5jZXNcclxuICAgICAgaW5pdCh0cnVlLCAwKTtcclxuICAgICAgY29sb3JTY2hlbWUuc2V0RG9tRWxlbWVudHMoY29sb3JTY2hlbWUuZ2V0VXNlclByZWZlcmVuY2UoKSk7XHJcbiAgICAgIGNvbG9yU2NoZW1lLmNoZWNrVG9nZ2xlQnRuU3RhdGUoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2V0RG9tRWxlbWVudHM6IChwcmVmZXJlbmNlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChwcmVmZXJlbmNlID09IFwiYnJvd3NlclwiKXtcclxuICAgICAgcHJlZmVyZW5jZSA9IGNvbG9yU2NoZW1lLmdldFN5c3RlbVByZWZlcmVuY2UoKTtcclxuICAgIH1cclxuICAgIC8vU2V0IHRoZSBib2R5IGxpZ2h0L2RhcmsgbW9kZSBjbGFzc1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGAke2NvbG9yU2NoZW1lLnRvZ2dsZVRoZW1lKHByZWZlcmVuY2UpfU1vZGVgKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChgJHtwcmVmZXJlbmNlfU1vZGVgKTtcclxuICB9LFxyXG4gIHNldExvY2FsU3RvcmFnZTogKFxyXG4gICAgLy9TdG9yZSB0aGVtZSBwcmVmZXJlbmNlcyBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBuZXdQcmVmZXJlbmNlOiBzdHJpbmcsXHJcbiAgICBjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZTogYm9vbGVhbixcclxuICAgIHVzZXJQcmVmZXJlbmNlOiBudW1iZXIsXHJcbiAgICBjb2xvclNjaGVtZVByZWZlcmVuY2VzOiBNYXA8U3RyaW5nLCBzdHJpbmc+XHJcbiAgKSA9PiB7XHJcbiAgICBpZiAodXNlclByZWZlcmVuY2UgPT0gMCAmJiBjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZSA9PSBmYWxzZSl7XHJcbiAgICAgIGNvbG9yU2NoZW1lLnNldExvY2FsU3RvcmFnZVVzZXJDaGFuZ2UobmV3UHJlZmVyZW5jZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZSkge1xyXG4gICAgICBjb2xvclNjaGVtZS5zZXRMb2NhbFN0b3JhZ2VCcm93c2VyQ2hhbmdlKG5ld1ByZWZlcmVuY2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodXNlclByZWZlcmVuY2UgPiAwKSB7XHJcbiAgICAgIGNvbG9yU2NoZW1lLnNldExvY2FsU3RvcmFnZVVzZXJDaGFuZ2UobmV3UHJlZmVyZW5jZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShPYmplY3QuZnJvbUVudHJpZXMoY29sb3JTY2hlbWVQcmVmZXJlbmNlcykpXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc2V0TG9jYWxTdG9yYWdlQnJvd3NlckNoYW5nZTogKG5ld1ByZWZlcmVuY2U6IHN0cmluZykgPT4ge1xyXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGNoYW5nZXMgdGhlIGJyb3dzZXIgcHJlZmVyZW5jZVxyXG4gICAgbGV0IGN1cnJlbnRDb2xvclNjaGVtZVByZWZlcmVuY2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yLXNjaGVtZS1wcmVmZXJlbmNlXCIpKTtcclxuICAgIGN1cnJlbnRDb2xvclNjaGVtZVByZWZlcmVuY2VzLmJyb3dzZXJQcmVmZXJlbmNlID0gYCR7bmV3UHJlZmVyZW5jZX1gO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29sb3JTY2hlbWVQcmVmZXJlbmNlcykpO1xyXG4gIH0sXHJcbiAgc2V0TG9jYWxTdG9yYWdlVXNlckNoYW5nZTogKG5ld1ByZWZlcmVuY2U6IHN0cmluZykgPT4ge1xyXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGNoYW5nZXMgdGhlIHVzZXIgcHJlZmVyZW5jZVxyXG4gICAgbGV0IGN1cnJlbnRDb2xvclNjaGVtZVByZWZlcmVuY2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yLXNjaGVtZS1wcmVmZXJlbmNlXCIpKTtcclxuICAgIGN1cnJlbnRDb2xvclNjaGVtZVByZWZlcmVuY2VzLnVzZXJQcmVmZXJlbmNlID0gYCR7bmV3UHJlZmVyZW5jZX1gO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29sb3JTY2hlbWVQcmVmZXJlbmNlcykpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVGhlbWU6ICh0aGVtZTogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgLy9GdW5jdGlvbiB0byB0b2dnbGUgbGlnaHQsIGRhcmsgc3RyaW5nXHJcbiAgICBpZiAodGhlbWUgPT0gXCJsaWdodFwiKSB7XHJcbiAgICAgIHJldHVybiBcImRhcmtcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcImxpZ2h0XCI7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yU2NoZW1lO1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IHsgRGljdGlvbmFyeVNlYXJjaCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGljdGlvbmFyeVNlYXJjaFwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uLy4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBjb250YWluaW5nIHRoZSBkaWN0aW9uYXJ5IHdpZGdldCdzIGNyZWF0aW9uLlxyXG4gKi9cclxuY29uc3QgZGljdGlvbmFyeVdpZGdldCA9IHtcclxuICAvKipcclxuICAgKiBUaGlzIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaWN0aW9uYXJ5IHNlYXJjaCB3aWRnZXQgYnkgY2FsbGluZyB0aGVcclxuICAgKiAgY29uc3RydWN0b3IuXHJcbiAgICogQHBhcmFtIGVsZW0gLSBFbGVtZW50IGNvbnRhaW5pbmcgJ2RpY3Rpb25hcnlXaWRnZXQnIGNsYXNzXHJcbiAgICovXHJcbiAgaW5pdDogKCkgPT4ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnlXaWRnZXRTdGFydGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZGljdGlvbmFyeVdpZGdldFN0YXJ0aW5nRWxlbWVudCA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiRGljdGlvbmFyeVdpZGdldFwiLCBcIi5kaWN0aW9uYXJ5V2lkZ2V0XCIsIHRydWUsIHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKGRpY3Rpb25hcnlXaWRnZXRTdGFydGluZ0VsZW1lbnQgPT0gbnVsbCl7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBmaW5kIGNvbnRhaW5lciBlbGVtZW50IGZvciBkaWN0aW9uYXJ5IHdpZGdldCBwbGFjZW1lbnQuIFNraXBwaW5nIGl0cyBjcmVhdGlvbi5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaWN0aW9uYXJ5U2VhcmNoIGNvbnN0cnVjdG9yXHJcbiAgICBPYmplY3QuY3JlYXRlKG5ldyBEaWN0aW9uYXJ5U2VhcmNoKGRpY3Rpb25hcnlXaWRnZXRTdGFydGluZ0VsZW1lbnQpKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGljdGlvbmFyeVdpZGdldDtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCBOQVZJVEVNUyBmcm9tIFwiLi4vLi4vZGF0YS9uYXZJdGVtc1wiO1xyXG5pbXBvcnQgUndiRXJyb3IsIHsgUndiRG9tRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5pbXBvcnQgUndiUGVyZiBmcm9tIFwiLi4vLi4vbW9kZWxzL3NjcmlwdFBlcmZcIjtcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudHMgfSBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFdpZGdldCB0byBhZGQgc2l0ZSBoZWFkZXIgYW5kIGZvb3Rlci4gSW5zdGFudGlhdGVkIGluICdNYWluJyBzY3JpcHQuXHJcbiAqL1xyXG5jb25zdCBoZWFkZXJGb290ZXIgPSB7XHJcbiAgaGVhZGVyV2lkZ2V0OiB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBoZWFkZXIgd2l0aCBzaXRlIGxvZ28gYXBwZW5kZWQuXHJcbiAgICAgKiBAcGFyYW0gbWFpbiBIVE1MICdtYWluJyBlbGVtZW50XHJcbiAgICAgKiBAcmV0dXJucyBQb3B1bGF0ZWQgaGVhZGVyIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgYnVpbGRIZWFkZXI6ICgpID0+IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEJhc2ljIEhUTUwgaGVhZGVyIGVsZW1lbnQgY29udGFpbmluZyBsb2dvIChIMSlcclxuICAgICAgICovXHJcbiAgICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgICBjb25zdCBzaXRlSGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgc2l0ZUhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2lkdGgtbWF4LWNlbnRlclwiKTtcclxuICAgICAgY29uc3QgSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDFcIik7XHJcbiAgICAgIEgxLnRleHRDb250ZW50ID0gXCI8UmFuZG9tIFdlYiBCaXRzPlwiO1xyXG4gICAgICBIMS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlJhbmRvbVdlYkJpdHNcIik7XHJcbiAgICAgIHNpdGVIZWFkZXJDb250YWluZXIuYXBwZW5kKEgxKTtcclxuICAgICAgc2l0ZUhlYWRlci5hcHBlbmQoc2l0ZUhlYWRlckNvbnRhaW5lcik7XHJcblxyXG4gICAgICByZXR1cm4gc2l0ZUhlYWRlcjtcclxuICAgIH0sXHJcbiAgICBidWlsZE5hdmlnYXRpb246ICgpID0+IHtcclxuICAgICAgLy8gQnVpbGQgdGhlIGhlYWRlciBuYXZpZ2F0aW9uIGJhc2VkIG9uIG5hdmlnYXRpb24gZGF0YVxyXG4gICAgICAvLyBDcmVhdGUgbmF2aWdhdGlvbiBlbGVtZW50c1xyXG4gICAgICBjb25zdCBoZWFkZXJOYXZGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBoZWFkZXJOYXYgPSBoZWFkZXJOYXZGcmFnXHJcbiAgICAgICAgLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIikpXHJcbiAgICAgICAgLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSk7XHJcblxyXG4gICAgICAvLyBBcHBlbmQgbmF2IGRhdGEgdG8gbmF2IGVsZW1lbnRzXHJcbiAgICAgIE5BVklURU1TLm1hcChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBuYXZMaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc3QgbmF2TGlzdExpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbmF2TGlzdEl0ZW1zLnByZXBlbmQobmF2TGlzdExpbmtzKTtcclxuICAgICAgICBoZWFkZXJOYXYuYXBwZW5kKG5hdkxpc3RJdGVtcyk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBuYXZpZ2F0aW9uIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnR5IHZhbHVlc1xyXG4gICAgICAgIG5hdkxpc3RMaW5rcy50ZXh0Q29udGVudCA9IGAke2l0ZW0uaW5uZXJUZXh0fWA7XHJcbiAgICAgICAgLy8gRW52aXJvbm1lbnQgbGlua3MgZWRpdCwgcmVxdWlyaW5nIGRpZmZlcmVudCBsaW5rIHJlbGF0aXZlcyB0byBvcGVyYXRlXHJcbiAgICAgICAgLy8gR2l0aHViIHBhZ2VzIG9wZXJhdGVzIGZyb20gcmVwb3NpdG9yeSwgbm90ICcvJ1xyXG4gICAgICAgIC8vaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0ID09ICdyb2Job3dlLWEuZ2l0aHViLmlvJykge1xyXG4gICAgICAgIC8vbGluayBkYXRhIGVkaXQgZm9yIGRldiBlbnZpcm9ubWVudFxyXG4gICAgICAgIC8vbmF2TGlzdExpbmtzLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAvUmFuZG9tV2ViQml0cy8ke2l0ZW0uaFJlZmVyZW5jZX1gKTtcclxuICAgICAgICAvL30gZWxzZSB7XHJcbiAgICAgICAgLy9saW5rIGRhdGEgaW4gb3RoZXIgZW52aXJvbm1lbnRzXHJcbiAgICAgICAgbmF2TGlzdExpbmtzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYC8ke2l0ZW0uaFJlZmVyZW5jZX1gKTtcclxuICAgICAgICAvL31cclxuICAgICAgICBuYXZMaXN0TGlua3Muc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgaXRlbS50aXRsZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGhlYWRlck5hdkZyYWc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBTaXRlIGhlYWRlciBjb250YWluaW5nIG5hdmlnYXRpb24gbGlua3MgYW5kIHNpdGUgbG9nby5cclxuICAgICAqL1xyXG4gICAgaW5pdDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBoZWFkZXJwZXJmID0gbmV3IFJ3YlBlcmYoXCJIZWFkZXJcIik7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSFRNTCAnbWFpbicgZWxlbWVudFxyXG4gICAgICAgKi9cclxuICAgICAgbGV0IHBhZ2VNYWluOiBIVE1MRWxlbWVudDtcclxuICAgICAgcGFnZU1haW4gPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIkhlYWRlckZvb3RlclwiLCBcIm1haW5cIiwgdHJ1ZSwgdHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChwYWdlTWFpbiA9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiTWFpbiBlbGVtZW50IG5vdCBmb3VuZC5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKiBIZWFkZXIgZWxlbWVudCBjb250YWluZXIgKi9cclxuICAgICAgbGV0IHNpdGVIZWFkZXI6IEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICAgICAgLy8gQWRkIGhlYWRlciBlbGVtZW50IHRvIHRoZSBwYWdlXHJcbiAgICAgIGlmIChwYWdlTWFpbiAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gJ01haW4nIGVsZW1lbnQgZXhpc3RzLCBhZGQgdGhlIGhlYWRlciB0byBpdFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzaXRlSGVhZGVyID0gcGFnZU1haW4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlYmVnaW5cIiwgaGVhZGVyRm9vdGVyLmhlYWRlcldpZGdldC5idWlsZEhlYWRlcigpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBuZXcgUndiRG9tRXhjZXB0aW9uKFwiRG9tRXhjZXB0aW9uXCIsIFwiQ2hlY2sgc2l0ZSBoZWFkZXIgZWxlbWVudC4gRW5jb3VudGVyZWQgZXJyb3I6XCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAnTWFpbicgZWxlbWVudCBkb2VzIG5vdCBleGlzdCwgYWRkIHRoZSBoZWFkZXIgdG8gdGhlIGJvZHlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgc2l0ZUhlYWRlciA9IGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxyXG4gICAgICAgICAgICBcImFmdGVyYmVnaW5cIixcclxuICAgICAgICAgICAgaGVhZGVyRm9vdGVyLmhlYWRlcldpZGdldC5idWlsZEhlYWRlcigpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIG5ldyBSd2JEb21FeGNlcHRpb24oXCJEb21FeGNlcHRpb25cIiwgXCJDaGVjayBzaXRlIGhlYWRlciBpcyBub3QgbnVsbC4gRW5jb3VudGVyZWQgZXJyb3I6XCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9BcHBlbmQgbmF2aWdhdGlvbiBpdGVtcyB0byBoZWFkZXJcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzaXRlSGVhZGVyLmNoaWxkTm9kZXNbMF0uYXBwZW5kQ2hpbGQoaGVhZGVyRm9vdGVyLmhlYWRlcldpZGdldC5idWlsZE5hdmlnYXRpb24oKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBuZXcgUndiRG9tRXhjZXB0aW9uKFwiRG9tRXhjZXB0aW9uXCIsIFwiQ2Fubm90IHByZXBlbmQgbmF2aWdhdGlvbiBpdGVtcy4gRW5jb3VudGVyZWQgZXJyb3I6XCIsIGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1ByZWZlcmVuZWNlcyBNZW51IGFkZGl0aW9uXHJcbiAgICAgIGxldCBzZXR0aW5nc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGV0YWlsc1wiKTtcclxuICAgICAgc2V0dGluZ3NNZW51LnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCIxMnJlbVwiKTtcclxuICAgICAgc2V0dGluZ3NNZW51LnN0eWxlLnNldFByb3BlcnR5KFwibWFyZ2luLWxlZnRcIiwgXCJhdXRvXCIpO1xyXG4gICAgICBzZXR0aW5nc01lbnUuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXJnaW4tdG9wXCIsIFwiMmVtXCIpO1xyXG4gICAgICBzZXR0aW5nc01lbnUuc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvclwiLCBcInZhcigtLWNsci1hbGwtZm9udC1saWdodClcIik7XHJcbiAgICAgIGxldCBzZXR0aW5nc01lbnVTdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1bW1hcnlcIik7XHJcbiAgICAgIHNldHRpbmdzTWVudVN1bW1hcnkuaW5uZXJUZXh0ID0gXCJQcmVmZXJlbmNlc1wiO1xyXG4gICAgICBzZXR0aW5nc01lbnVTdW1tYXJ5LnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1hbGlnblwiLCBcInJpZ2h0XCIpO1xyXG5cclxuICAgICAgc2V0dGluZ3NNZW51LmFwcGVuZENoaWxkKHNldHRpbmdzTWVudVN1bW1hcnkpO1xyXG5cclxuICAgICAgbGV0IHBpbGxDb250YWluZXIgPSBjdXN0b21FbGVtZW50cy5waWxsQnRuTWFya3VwKCk7XHJcbiAgICAgIHBpbGxDb250YWluZXIuaWQgPSBcInRoZW1lVG9nZ2xlXCI7XHJcbiAgICAgIHNldHRpbmdzTWVudS5hcHBlbmRDaGlsZChwaWxsQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIHNpdGVIZWFkZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHNldHRpbmdzTWVudSk7XHJcbiAgICAgIFxyXG4gICAgICBjdXN0b21FbGVtZW50cy5waWxsQnRuVG9nZ2xlQWN0aW9uKFwiI3RoZW1lVG9nZ2xlXCIpO1xyXG5cclxuICAgICAgaGVhZGVycGVyZi5lbmQoKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZm9vdGVyV2lkZ2V0OiB7XHJcbiAgICBidWlsZEZvb3RlcjogKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaXRlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgICAgY29uc3Qgc2l0ZUZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGZvb3RlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgZm9vdGVyUGFyYS50ZXh0Q29udGVudCA9IGBcXHUwMEE5IDIwMjItMjAyNiBSYW5kb20gV2ViIEJpdHMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuYDtcclxuXHJcbiAgICAgIHNpdGVGb290ZXJDb250YWluZXIuYXBwZW5kKGZvb3RlclBhcmEpO1xyXG4gICAgICBzaXRlRm9vdGVyLmFwcGVuZChzaXRlRm9vdGVyQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIHJldHVybiBzaXRlRm9vdGVyO1xyXG4gICAgfSxcclxuICAgIGJ1aWxkRmF2aWNvbkF0dHJpYnV0aW9uOiAoZm9vdGVyOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAvLyBGYXZpY29uIGF0dHJpYnV0aW9uIHNlY3Rpb24gKyBsaW5rIHRvIHNvdXJjZVxyXG4gICAgICBjb25zdCBmb290ZXJJY29uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBjb25zdCBmb290ZXJJY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBmb290ZXJJY29uTGluay5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkljb25Ib21lOiAjNDUwMjY3NTVcIik7XHJcbiAgICAgIGZvb3Rlckljb25MaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgICAgZm9vdGVySWNvbkxpbmsuaHJlZiA9XHJcbiAgICAgICAgXCJodHRwczovL3d3dy52ZWN0b3JzdG9jay5jb20vcm95YWx0eS1mcmVlLXZlY3Rvci9tYWludGVuYW5jZS1pY29uLWZvci1ncmFwaGljLWFuZC13ZWItZGVzaWduLXZlY3Rvci00NTAyNjc1NVwiO1xyXG4gICAgICBmb290ZXJJY29uTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgICBmb290ZXJJY29uTGluay5yZWwgPSBcIm5vb3BlbmVyXCI7XHJcbiAgICAgIGZvb3Rlckljb25MaW5rLnRpdGxlID0gXCJNYWludGVuYW5jZSBpY29uIGZvciBncmFwaGljIGFuZCB3ZWIgZGVzaWduIFZlY3RvciBJbWFnZVwiO1xyXG4gICAgICBmb290ZXJJY29uTGluay50ZXh0Q29udGVudCA9IFwiVmVjdG9yU3RvY2suY29tXCI7XHJcbiAgICAgIGZvb3Rlckljb25QYXJhLnRleHRDb250ZW50ID0gYEZhdmljb24gZGVzaWduZWQgYnkgSWNvbkhvbWUgYXQgYDtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCBhdHRyaWJ1dGlvbiB0byBmb290ZXIgcGFyYVxyXG4gICAgICBmb290ZXJJY29uUGFyYS5hcHBlbmRDaGlsZChmb290ZXJJY29uTGluayk7XHJcbiAgICAgIGZvb3Rlci5jaGlsZE5vZGVzWzBdLmFwcGVuZENoaWxkKGZvb3Rlckljb25QYXJhKTtcclxuXHJcbiAgICAgIHJldHVybiBmb290ZXJJY29uUGFyYTtcclxuICAgIH0sXHJcbiAgICBidWlsZERldmVsb3BlckF0dHJpYnV0aW9uOiAoZm9vdGVyOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkZXZhdHRyaWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBkZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgZGV2LnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgYnkgUm9iZXJ0IEhvd2VsbFwiO1xyXG5cclxuICAgICAgZGV2YXR0cmliLmFwcGVuZChkZXYpO1xyXG4gICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGV2YXR0cmliKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH0sXHJcbiAgICBpbml0OiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZvb3RlcnBlcmYgPSBuZXcgUndiUGVyZihcIkZvb3RlclwiKTtcclxuXHJcbiAgICAgIC8vIEFkZCBmb290ZXIgZWxlbWVudCB0byB0aGUgcGFnZSBlbmRcclxuICAgICAgbGV0IGZvb3RlcjogSFRNTEVsZW1lbnQgPSBoZWFkZXJGb290ZXIuZm9vdGVyV2lkZ2V0LmJ1aWxkRm9vdGVyKCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGZvb3Rlcik7XHJcbiAgICAgIGZvb3Rlci5jaGlsZE5vZGVzWzBdLmFwcGVuZENoaWxkKGhlYWRlckZvb3Rlci5mb290ZXJXaWRnZXQuYnVpbGRGYXZpY29uQXR0cmlidXRpb24oZm9vdGVyKSk7XHJcbiAgICAgIGhlYWRlckZvb3Rlci5mb290ZXJXaWRnZXQuYnVpbGREZXZlbG9wZXJBdHRyaWJ1dGlvbihmb290ZXIpO1xyXG5cclxuICAgICAgZm9vdGVycGVyZi5lbmQoKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlckZvb3RlcjtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyNC0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCBjb2xvclNjaGVtZSBmcm9tIFwiLi9jb2xvclNjaGVtZVwiO1xyXG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3VudGVyXCI7XHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi4vLi4vbW9kZWxzL3J3YkVycm9yQnVzXCI7XHJcblxyXG5jb25zdCBjdXN0b21FbGVtZW50c19QcmVmZXJlbmNlcyA9IHtcclxuICBwaWxsQnRuTWFya3VwOiAoKSA9PiB7XHJcbiAgICAvL1BpbGwgdG9nZ2xlXHJcbiAgICBsZXQgdGhlbWVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB0aGVtZVRvZ2dsZS5pbm5lclRleHQgPSBcIlRoZW1lOiBcIjtcclxuICAgIHRoZW1lVG9nZ2xlLnN0eWxlLnNldFByb3BlcnR5KFwibWFyZ2luLXJpZ2h0XCIsIFwiLjVyZW1cIik7XHJcbiAgICBsZXQgdGhlbWVUb2dnbGVMaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGxldCB0aGVtZVRvZ2dsZURhcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0aGVtZVRvZ2dsZUxpZ2h0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgIHRoZW1lVG9nZ2xlTGlnaHQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgdGhlbWVUb2dnbGVEYXJrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgIHRoZW1lVG9nZ2xlRGFyay5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxpZ2h0XCIpO1xyXG4gICAgdGhlbWVUb2dnbGVMaWdodC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgdGhlbWVUb2dnbGVEYXJrLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB0aGVtZVRvZ2dsZS5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZUxpZ2h0KTtcclxuICAgIC8vIHRoZW1lVG9nZ2xlLmFwcGVuZENoaWxkKHRoZW1lVG9nZ2xlRGFyayk7XHJcblxyXG4gICAgLy9Ub2dnbGUgQnV0dG9uXHJcbiAgICBsZXQgcGlsbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwaWxsQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcImZsZXhcIik7XHJcbiAgICBwaWxsQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiZmxleC13cmFwXCIsIFwibm93cmFwXCIpO1xyXG4gICAgcGlsbENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcImp1c3RpZnktY29udGVudFwiLCBcImNlbnRlclwiKTtcclxuICAgIHBpbGxDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCJhbGlnbi1pdGVtc1wiLCBcImNlbnRlclwiKTtcclxuICAgIHBpbGxDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCIyLjVyZW1cIik7XHJcbiAgICBsZXQgcGlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwaWxsLnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCI1OHB4XCIpO1xyXG4gICAgcGlsbC5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjIycHhcIik7XHJcbiAgICBwaWxsLnN0eWxlLnNldFByb3BlcnR5KFwiYm9yZGVyLXJhZGl1c1wiLCBcIjUwcHhcIik7XHJcbiAgICBwaWxsLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKTtcclxuICAgIHBpbGwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xyXG4gICAgbGV0IHBpbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGlsbEJ0bi5zdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIFwiMThweFwiKTtcclxuICAgIHBpbGxCdG4uc3R5bGUuc2V0UHJvcGVydHkoXCJhc3BlY3QtcmF0aW9cIiwgXCIxLzFcIik7XHJcbiAgICBwaWxsQnRuLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcclxuICAgIHBpbGxCdG4uc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIiwgXCIycHhcIik7XHJcbiAgICBwaWxsQnRuLnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCBcIjJweFwiKTtcclxuICAgIHBpbGxCdG4uc3R5bGUuc2V0UHJvcGVydHkoXCJib3JkZXItcmFkaXVzXCIsIFwiNTBweFwiKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBwaWxsLmFwcGVuZENoaWxkKHBpbGxCdG4pO1xyXG4gICAgcGlsbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGhlbWVUb2dnbGVEYXJrKTtcclxuXHJcbiAgICAvL1RleHQgbGFiZWxcclxuICAgIGxldCBjaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNob2ljZS5pbm5lclRleHQgPSBcIkJyb3dzZXJcIjtcclxuICAgIGNob2ljZS5zdHlsZS5zZXRQcm9wZXJ0eShcIm1hcmdpbi1sZWZ0XCIsIFwiLjVyZW1cIik7XHJcbiAgICBjaG9pY2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBcIjhjaFwiKTtcclxuICAgIFxyXG4gICAgcGlsbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZSk7XHJcbiAgICBwaWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpbGwpO1xyXG4gICAgcGlsbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaG9pY2UpO1xyXG5cclxuICAgIHJldHVybiBwaWxsQ29udGFpbmVyO1xyXG4gIH0sXHJcbiAgcGlsbEJ0blRvZ2dsZUFjdGlvbjogKHBpbGxRdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAocGlsbFF1ZXJ5ID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiTnVsbCBxdWVyeS4gVXNlIGEgZGlmZmVyZW50IHF1ZXJ5IHN0cmluZy5cIik7XHJcbiAgICB9XHJcbiAgICAvL1NlbGVjdCB0aGUgZWxlbWVudFxyXG4gICAgbGV0IHBpbGxFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwaWxsUXVlcnl9YCk7XHJcbiAgICBpZiAocGlsbEVsZW0gPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJQaWxsIGJ0biBub3QgZm91bmQgYnkgdGhpcyBxdWVyeS4gVHJ5IGEgZGlmZmVyZW50IHF1ZXJ5IHN0cmluZy5cIik7XHJcbiAgICB9XHJcbiAgICAvL0Fzc2lnbiB2YXJpYWJsZXMgdG8gZWxlbWVudCdzIGNoaWxkcmVuXHJcbiAgICBsZXQgcGlsbFRvZ2dsZSA9IHBpbGxFbGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcbiAgICBsZXQgcGlsbFN3aXRjaCA9IHBpbGxUb2dnbGUucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuXHJcbiAgICAvL1RvZ2dsZSBidXR0b24gc3R5bGVcclxuICAgIHBpbGxUb2dnbGUuc3R5bGUuc2V0UHJvcGVydHkoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG4gICAgcGlsbFRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlXCIpO1xyXG4gICAgcGlsbFN3aXRjaC5jbGFzc0xpc3QuYWRkKFwic3dpdGNoXCIpO1xyXG5cclxuICAgIGxldCBpbml0aWFsU3RhdGUgPSBjb2xvclNjaGVtZS5jaGVja1RvZ2dsZUJ0blN0YXRlKCk7XHJcblxyXG4gICAgLy9Jbml0aWFsIHN0YXRlIGlzIGJyb3dzZXIsIG5leHQgc3RhdGUgbWF5IHZhcnlcclxuICAgIGxldCBpbml0aWFsOiBDb3VudGVyID0gT2JqZWN0LmNyZWF0ZShuZXcgQ291bnRlcigtMSkpO1xyXG5cclxuICAgIGxldCBwaWxsVG9nZ2xlRnVuYyA9ICgpID0+IHtcclxuICAgICAgLy9hZGQgZXZlbnQgdG9nZ2xlIHBvc2l0aW9uIGNvdW50ZXJcclxuICAgICAgaWYgKGluaXRpYWxTdGF0ZSA9PSAwICYmIGluaXRpYWwuY291bnQgPT0gLTEpXHJcbiAgICAgICAgaW5pdGlhbC5jb3VudCA9IDE7XHJcbiAgICAgIGlmIChpbml0aWFsU3RhdGUgPT0gMSAmJiBpbml0aWFsLmNvdW50ID09IC0xKVxyXG4gICAgICAgIGluaXRpYWwuY291bnQgPSAyO1xyXG4gICAgICBpZiAoaW5pdGlhbFN0YXRlID09IDIgJiYgaW5pdGlhbC5jb3VudCA9PSAtMSlcclxuICAgICAgICBpbml0aWFsLmNvdW50ID0gMDtcclxuICAgICAgXHJcbiAgICAgIC8vQ2xpY2sgb25jZSwgc3lzdGVtXHJcbiAgICAgIC8vQ2xpY2sgdHdpY2UsIGxpZ2h0XHJcbiAgICAgIC8vQ2xpY2sgdGhyZWUsIGRhcmtcclxuICAgICAgLy91c2VyUHJlZmVyZW5jZSBjaGFuZ2VzIG1lYW5zIHRoZSB1c2VyIGhhcyBjbGlja2VkIHRoZSB0aGVtZSB0b2dnbGUgYnV0dG9uXHJcbiAgICAgIGxldCB1c2VyUHJlZmVyZW5jZTtcclxuXHJcbiAgICAgIHN3aXRjaChpbml0aWFsLmNvdW50KXtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB1c2VyUHJlZmVyZW5jZSA9IDA7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB1c2VyUHJlZmVyZW5jZSA9IDE7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB1c2VyUHJlZmVyZW5jZSA9IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vQ2hhbmdlIHRoZSB0aGVtZVxyXG4gICAgICBjb2xvclNjaGVtZS5zZXRDb2xvclRoZW1lKHRydWUsIHVzZXJQcmVmZXJlbmNlKTtcclxuXHJcbiAgICAgIGluaXRpYWwuY291bnQrKztcclxuXHJcbiAgICAgIGlmIChpbml0aWFsLmNvdW50ID09IDMpe1xyXG4gICAgICAgIGluaXRpYWwuY291bnQgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9Ub2dnbGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICBwaWxsVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwaWxsVG9nZ2xlRnVuYygpO1xyXG4gICAgfSk7XHJcbiAgICAvL1RvZ2dsZSBidXR0b24gbW91c2UgbGlzdGVuZXJcclxuICAgIHBpbGxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgIT09IFwiRW50ZXJcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGlsbFRvZ2dsZUZ1bmMoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBjdXN0b21FbGVtZW50c19QcmVmZXJlbmNlcyBhcyBjdXN0b21FbGVtZW50cyB9O1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3RvRG9cIjtcclxuaW1wb3J0IFJ3YkVycm9yIGZyb20gXCIuLi8uLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgY29udGFpbmluZyB0aGUgVG8tRG8gTGlzdCB3aWRnZXQncyBjcmVhdGlvbi5cclxuICovXHJcbmNvbnN0IHRvRG9zV2lkZ2V0ID0ge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIFRvLURvIExpc3Qgd2lkZ2V0LlxyXG4gICAqIEBwYXJhbSBlbGVtIC0gRWxlbWVudCBjb250YWluaW5nICdUb0RvTGlzdCcgY2xhc3NcclxuICAgKi9cclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBsZXQgdG9Eb3NFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHRvRG9zRWxlbWVudCA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiVG9Eb0xpc3RcIiwgXCIuVG9Eb0xpc3RcIiwgdHJ1ZSwgdHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodG9Eb3NFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGZpbmQgY29udGFpbmVyIGVsZW1lbnQgZm9yIHRvZG8gbGlzdCB3aWRnZXQgcGxhY2VtZW50LiBTa2lwcGluZyBpdHMgY3JlYXRpb24uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9Ub0RvTGlzdCBvYmplY3RcclxuICAgIGNvbnN0IHRvRG9XaWRnZXQgPSBuZXcgVG9Eb0xpc3QoKTtcclxuXHJcbiAgICAvL0NyZWF0ZXMgd2lkZ2V0IG1hcmt1cCBhbmQgcG9wdWxhdGVzIFRvLURvIHRhc2tzIGNvbnRhaW5lZCBpbiBMb2NhbCBTdG9yYWdlXHJcbiAgICB0b0RvV2lkZ2V0LmNyZWF0ZVRvRG9MaXN0V2lkZ2V0KHRvRG9zRWxlbWVudCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRG9zV2lkZ2V0O1xyXG4iLCJcInN0cmljdCBtb2RlXCI7XHJcbi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBSd2JMaW5rIGZyb20gXCIuLi9tb2RlbHMvcndiTGlua1wiO1xyXG5cclxuLyoqXHJcbiAqIEhlYWRlciBuYXZpZ2F0aW9uIGxpbmsgZGF0YVxyXG4gKi9cclxuY29uc3QgaG9tZU5hdkxpbmsgPSBuZXcgUndiTGluayhcIkluZGV4XCIsIFwiSG9tZVwiLCBcIkhvbWVcIiwgXCJpbmRleC5odG1sXCIpO1xyXG5cclxuY29uc3QgcGFnZXNOYXZMaW5rID0gbmV3IFJ3YkxpbmsoXCJQYWdlc1wiLCBcIlBhZ2VzXCIsIFwiUGFnZXNcIiwgXCJwYWdlcy5odG1sXCIpO1xyXG5cclxuY29uc3QgZ2FtZU5hdkxpbmsgPSBuZXcgUndiTGluayhcIkdhbWVcIiwgXCJGbGFzaENhcmRzXCIsIFwiR2FtZVwiLCBcImZsYXNoY2FyZHMuaHRtbFwiKTtcclxuXHJcbi8qKiBOYXZpZ2F0aW9uIGxpbmtzICovXHJcbmNvbnN0IE5BVklURU1TID0gW2hvbWVOYXZMaW5rLCBwYWdlc05hdkxpbmssIGdhbWVOYXZMaW5rXTtcclxuZXhwb3J0IGRlZmF1bHQgTkFWSVRFTVM7XHJcbiIsIlwic3RyaWN0IG1vZGVcIjtcclxuLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IGhlYWRlckZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2dsb2JhbC9oZWFkZXJGb290ZXJcIjtcclxuLy9pbXBvcnQgcGFnZUNvbXBvbmVudHMgZnJvbSBcIi4vcGFnZUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGNsYXNzQ29tcG9uZW50cyBmcm9tIFwiLi9jbGFzc0NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJ3YlBlcmYgZnJvbSBcIi4vbW9kZWxzL3NjcmlwdFBlcmZcIjtcclxuaW1wb3J0IGNvbG9yU2NoZW1lIGZyb20gXCIuL2NvbXBvbmVudHMvZ2xvYmFsL2NvbG9yU2NoZW1lXCI7XHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbmNvbnN0IG1haW5QZXJmID0gbmV3IFJ3YlBlcmYoXCJtYWluXCIpO1xyXG5cclxuLy8gZW50cnkgcG9pbnRcclxuLyoqXHJcbiAqIFR5cGVTY3JpcHQgZW50cnkgcG9pbnQuIFRoaXMgc2NyaXB0IGluaXRpYWxpemVzIHBhZ2UgY29tcG9uZW50cyBhbmQgbW9kZWxzLlxyXG4gKiBTdGFydCBpcyB0aGUgZW50cnkgcG9pbnQuXHJcbiAqL1xyXG5jb25zdCBSV0IgPSB7XHJcbiAgbWFpbjogKCkgPT4ge1xyXG4gICAgLy8gQWRkIGhlYWRlciBhbmQgZm9vdGVyIGNvbXBvbmVudHNcclxuICAgIGhlYWRlckZvb3Rlci5oZWFkZXJXaWRnZXQuaW5pdCgpO1xyXG4gICAgaGVhZGVyRm9vdGVyLmZvb3RlcldpZGdldC5pbml0KCk7XHJcblxyXG4gICAgLy9DaGVjayBicm93c2VyIGNvbG9yIHNjaGVtZSBwcmVmZXJlbmNlXHJcbiAgICBjb2xvclNjaGVtZS5zZXRDb2xvclRoZW1lKGZhbHNlLCAwKTtcclxuXHJcbiAgICBsZXQgcGFnZTogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgZWxlbWVudCBjb21wb25lbnRzXHJcbiAgICBjbGFzc0NvbXBvbmVudHMuaW5pdChwYWdlKTtcclxuXHJcbiAgICBpZiAoUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJMb2FkaW5nXCIsIFwiLmxvYWRpbmdcIiwgZmFsc2UsIHRydWUpKXtcclxuICAgICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIilcclxuICAgICAgZGl2aWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcclxuICAgIH1cclxuICAgIGxldCBsb2FkaW5nQ29tcDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbG9hZGluZ0NvbXAgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIkxvYWRpbmdDb21wXCIsIFwiYm9keSBhc2lkZTpmaXJzdC1vZi10eXBlXCIsIGZhbHNlLCB0cnVlKVxyXG4gICAgbG9hZGluZ0NvbXAuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XHJcbiAgICBsb2FkaW5nQ29tcC5yZW1vdmUoKTtcclxuXHJcbiAgICBtYWluUGVyZi5lbmQoKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgcGFnZSB3aWRnZXRzIGFuZCBhcHBsaWNhdGlvbiBmdW5jdGlvbnMuXHJcbiAgICovXHJcbiAgc3RhcnQ6ICgpID0+IHtcclxuICAgIC8vQ2hlY2sgdXNlciBhY2NlcHRhbmNlXHJcbiAgICBjb25zdCB1c2VyQ29va2llc0FjY2VwdGFuY2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZXNPcHRpb25cIik7XHJcblxyXG4gICAgaWYgKCF1c2VyQ29va2llc0FjY2VwdGFuY2UpIHtcclxuICAgICAgLy9DcmVhdGUgZGlhbG9nIG1hcmt1cFxyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XHJcbiAgICAgIGNvbnN0IGRpYWxvZyA9IGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIikpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgZGlhbG9nSW5uZXIgPSBgXHJcbiAgICAgICAgPHA+VGhpcyB3ZWJzaXRlIHVzZXMgYnJvd3NlciBjb29raWVzIGZvciBhbm9ueW1vdXMgdHJhZmZpYyBpbmZvcm1hdGlvbiBjYXB0dXJlLjwvcD5cclxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJkaWFsb2dcIj5cclxuICAgICAgICAgIDxidXR0b24+QWNjZXB0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICBgO1xyXG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gZGlhbG9nSW5uZXI7XHJcbiAgICAgIC8vQXNzaWduIGRpYWxvZyBidXR0b24gZnVuY3Rpb25zXHJcbiAgICAgIGxldCBidG5BY2NlcHQgPSBkaWFsb2cuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGxldCBidG5DbG9zZSA9IGRpYWxvZy5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICAgIC8vU2V0IGRpYWxvZyBhdHRyaWJ1dGVzXHJcbiAgICAgIGRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvb2tpZXNPcHRpb25Gb3JtXCIpO1xyXG4gICAgICBkaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCBcIlwiKTtcclxuICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcclxuICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJmaXhlZFwiKTtcclxuICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCI0MDBweFwiKTtcclxuICAgICAgYnRuQWNjZXB0LnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCJtYXgtY29udGVudFwiKTtcclxuICAgICAgYnRuQ2xvc2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBcIm1pbi1jb250ZW50XCIpO1xyXG5cclxuICAgICAgYnRuQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWVzT3B0aW9uXCIsIFwiQWNjZXB0ZWRcIik7XHJcbiAgICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpYWxvZy5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFdmVudCBmaXJlZCBiZWZvcmUgYXNzZXRzIGFyZSByZW5kZXJlZCB0byB0aGUgcGFnZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFJXQi5tYWluKTtcclxuXHJcbiAgfSxcclxufTtcclxuUldCLnN0YXJ0KCk7XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYmJyT3BlbiB7XHJcbiAgcHVibGljIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYWJickVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVzY3JpcHRpb246IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoYWJickVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5hYmJyRWxlbWVudCA9IGFiYnJFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldmVhbEFiYnJEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMuYWJickVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGFiYnJUaXRsZUF0dHJWYWw6IHN0cmluZyA9IHRoaXMuYWJickVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgaWYgKGUudGFyZ2V0ID09IHRoaXMuYWJickVsZW1lbnQpIHtcclxuICAgICAgICAvL2NyZWF0ZSB0aGUgc3BhbiBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuYWJickVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIikpO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCl9KCR7YWJiclRpdGxlQXR0clZhbH0pJHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxyXG4gICAgICAgICAgMTYwXHJcbiAgICAgICAgKX1gO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG4vKipcclxuICogYXBpR2V0IGlzIGZvciBmZXRjaCByZXF1ZXN0cy4gVXNlIGFuIGFwaUdldCBvYmplY3QgdG8gbWFuaXB1bGF0ZSB0aGUgZmV0Y2hcclxuICogIHJlcXVlc3QgaW50byBlaXRoZXI6XHJcbiAqXHJcbiAqIDEuIHJldHVybmluZyBkYXRhXHJcbiAqXHJcbiAqIC0tb3IgLS1cclxuICpcclxuICogMi4gc3RvcmluZyB0aGUgcmVxdWVzdCBpbiB0aGUgYnJvd3NlciBjYWNoZSB0byByZXRyaWV2ZSBsYXRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGFwaUdldCB7XHJcbiAgcHVibGljIGVycm9yRWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBnZXRVcmw6IFVSTDtcclxuICBwcml2YXRlIHNlbmRUb0Jyb3dzZXJDYWNoZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYnJvd3NlckNhY2hlTmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGNvbnN0cnVjdG9yIGdhdGhlcnMgYWxsIHRoZSBuZWVkZWQgaW5mb3JtYXRpb24gZm9yIGZldGNoIGFuZC9vciBicm93c2VyXHJcbiAgICogIHN0b3JhZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZ2V0VXJsIC0gdGhlIChmdWxsKSB1cmwgb2YgZGF0YSByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSBzZW5kVG9Ccm93c2VyQ2FjaGUgIC0gQm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmluZyBmZXRjaCBjYWNoaW5nLlxyXG4gICAqIEBwYXJhbSBicm93c2VyQ2FjaGVOYW1lIC0gSWYgc3RvcmluZyB0aGUgcmVxdWVzdCBpbiBicm93c2VyIGNhY2hlLCB0aGlzIHN0cmluZyBwcm92aWRlcyB0aGUgbmFtZSBmb3Igc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gZXJyb3JFbGVtIC0gU2hvdWxkIHRoZSBmZXRjaCByZXF1ZXN0IGZhaWwsIHJldHVybiBlcnJvciBzdGF0dXMgdG8gdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZ2V0VXJsOiBVUkwsXHJcbiAgICBzZW5kVG9Ccm93c2VyQ2FjaGU6IGJvb2xlYW4sXHJcbiAgICBlcnJvckVsZW06IEhUTUxFbGVtZW50LFxyXG4gICAgYnJvd3NlckNhY2hlTmFtZTogc3RyaW5nIHwgbnVsbFxyXG4gICkge1xyXG4gICAgdGhpcy5nZXRVcmwgPSBnZXRVcmw7XHJcbiAgICB0aGlzLnNlbmRUb0Jyb3dzZXJDYWNoZSA9IHNlbmRUb0Jyb3dzZXJDYWNoZTtcclxuICAgIHRoaXMuYnJvd3NlckNhY2hlTmFtZSA9IGJyb3dzZXJDYWNoZU5hbWU7XHJcbiAgICB0aGlzLmVycm9yRWxlbSA9IGVycm9yRWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdGhpcy5zZW5kVG9Ccm93c2VyQ2FjaGVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VuZFRvQnJvd3NlckNhY2hlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB0aGlzLmdldFVybFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRHZXRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRVcmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbGlwIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlIGJvb2xlYW4gdmFsdWUgZnJvbSB0aGUgY3VycmVudCB2YWx1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0U2VuZFRvQnJvd3NlckNhY2hlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBmZXRjaCByZXF1ZXN0IGNhbiB0YWtlIFVSTCBvciBzdHJpbmcgcGFyYW1ldGVyLiBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGFwaUdldFxyXG4gICAqICBvYmplY3QgZm9yIGEgVVJMIGZldGNoIGJ5IGNyZWF0aW5nIGEgVVJMIGZyb20gdGhlIHN0cmluZywgb3IgcGFzc2luZyB0aGUgVVJMLlxyXG4gICAqIEBwYXJhbSB1cmwgLSB0aGUgKGZ1bGwpIHVybCBvZiBkYXRhIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHNldEdldFVybCh1cmw6IFVSTCB8IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhpcy5nZXRVcmwgPSBuZXcgVVJMKHVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldFVybCA9IHVybDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcHVibGljIGZ1bmN0aW9uIGNyZWF0aW5nIGEgZGF0YSBwcm9taXNlIG9iamVjdCBmb3IgdGhlIGNhbGxlZCBmZXRjaCBmdW5jdGlvbi4gSWZcclxuICAgKiAgdGhlIHJlcXVlc3QgbmVlZHMgYWRkZWQgdG8gYnJvd3NlciBzdG9yYWdlLCB0aGUgZmV0Y2ggaXMgbWFkZSBhbmQgc2VudCB0b1xyXG4gICAqICBzdG9yYWdlLiBBIGNsb25lZCBjb3B5IG9mIHRoZSBmZXRjaGVkIGRhdGEgaXMgcmV0dXJuZWQgYW5kIHRoZSBvcmlnaW5hbCByZXF1ZXN0IGlzXHJcbiAgICogIHNlbnQgdG8gdGhlIGNhY2hlLiBXaXRob3V0IHNlbmRpbmcgdG8gYnJvd3NlciBjYWNoZSwgdGhlIGZldGNoIGlzIHJlcXVlc3RlZCBhbmRcclxuICAgKiByZXR1cm5lZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBnZXRVcmwgLSB0aGUgKGZ1bGwpIHVybCBvZiBkYXRhIHJlcXVlc3QuXHJcbiAgICogQHJldHVybnMgZGF0YUNhY2hlUHJvbWlzZTogUHJvbWlzZTx1bmtub3duPlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBhcGlHZXQoZ2V0VXJsOiBVUkwpIHtcclxuICAgIC8vQ2hlY2sgaWYgdGhlIHJlcXVlc3QgaXMgZm9yIGNhY2hlIHN0b3JhZ2VcclxuICAgIGlmICh0aGlzLnNlbmRUb0Jyb3dzZXJDYWNoZSkge1xyXG4gICAgICAvL1RoZSByZXR1cm5lZCBkYXRhIGlzIHBhY2thZ2VzIGFzIGEgUHJvbWlzZSBvYmplY3RcclxuICAgICAgbGV0IGRhdGFDYWNoZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKFwiY2FjaGVzXCIgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAvL09wZW4gY2FjaGUgYW5kIGNoZWNrIGZvciByZXF1ZXN0IGV4aXN0aW5nIGluIENhY2hlIFN0b3JhZ2VcclxuICAgICAgICAgIHdpbmRvdy5jYWNoZXNcclxuICAgICAgICAgICAgLm9wZW4odGhpcy5icm93c2VyQ2FjaGVOYW1lKVxyXG4gICAgICAgICAgICAudGhlbihjYWNoZSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FjaGVzLm1hdGNoKGdldFVybCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vTm8gbWF0Y2hlcyBmb3IgdGhpcyByZXF1ZXN0IGluIFN0b3JhZ2UgQ2FjaGUsIHNvIGZldGNoIHRoZSByZXF1ZXN0IG5vcm1hbGx5XHJcbiAgICAgICAgICAgICAgICAgIC8vVXBvbiBzdWNjZXNzLCBhIGNsb25lZCBjb3B5IHdpbGwgbmVlZCB0byBiZSByZXR1cm5lZC5cclxuICAgICAgICAgICAgICAgICAgZmV0Y2goZ2V0VXJsKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Db3B5IHRoZSByZXNwb25zZSBzaW5jZSBpdCBjYW4gb25seSBiZSByZWFkIG9uY2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xvbmVkUmVzcCA9IHJlc3VsdC5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0FkZCB0aGUgcmVzdWx0IHRvIHRoZSBjYWNoZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9uZWRSZXNwLnN0YXR1cyAhPSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1dChnZXRVcmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2xvbmVkUmVzcC5qc29uKCkudGhlbih0ZXh0ID0+IHRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvL0NhY2hlIGhpdCBzdWNjZXNzLCByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcclxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuanNvbigpLnRoZW4odGV4dCA9PiB0ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAvL0Nhbm5vdCBvcGVuIFN0b3JhZ2UgQ2FjaGVcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAlY1Byb2JsZW0gb3BlbmluZyBDYWNoZSBTdG9yYWdlLiBOYW1lOiAke3RoaXMuYnJvd3NlckNhY2hlTmFtZX1gLCBcImNvbG9yOiBncmV5XCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgLy9UaGUgcHJvbWlzZSBoYXMgcmVzb2x2ZWQgLS0+IHJldHVybiB0aGUgcHJvbWlzZSBkYXRhXHJcbiAgICAgIGRhdGFDYWNoZVByb21pc2UudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhQ2FjaGVQcm9taXNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGRhdGFDYWNoZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoRGF0YShnZXRVcmwpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRhdGFDYWNoZVByb21pc2UudGhlbihkYXRhID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhQ2FjaGVQcm9taXNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHJlcXVlc3RlZCByZXNwb25zZSBpcyBvZiB2YWxpZCBzdGF0dXMgJ09LJyBhbmQgJzIwMCdcclxuICAgKiBAcGFyYW0gcmVzIC0gdGhlIGZldGNoZWQgcmVzcG9uc2UuXHJcbiAgICogQHJldHVybnMgLSByZXR1cm5zIHJlcy5qc29uKCkgb24gc3VjY2VzcyBvciByZXR1cm5zIHJlc3BvbnNlIG9uIGZhaWx1cmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhcGlSZXNwb25zZUVycm9yQ2hlY2socmVzOiBSZXNwb25zZSkge1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgIHRoaXMuZXJyb3JFbGVtLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgdGhpcy5lcnJvckVsZW0uaW5uZXJUZXh0ID0gXCI0MDQgZmV0Y2ggZXJyb3IhXCI7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcy5vayB8fCByZXMuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLm9rICsgXCI6IFwiICsgcmVzLnN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZmV0Y2ggcmVxdWVzdCwgcmV0dXJuaW5nIGEgZmV0Y2ggcHJvbWlzZS5cclxuICAgKiBAcGFyYW0gZ2V0VXJsIC0gdGhlIChmdWxsKSB1cmwgb2YgZGF0YSByZXF1ZXN0LlxyXG4gICAqIEByZXR1cm5zIGRhdGEudGV4dCgpIG9yIGRhdGEgYmFzZWQgb24gdGhlIGluc3RhbmNlIHJldHVybmVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmV0Y2hEYXRhKGdldFVybDogVVJMKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goZ2V0VXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB0aGlzLmFwaVJlc3BvbnNlRXJyb3JDaGVjayhyZXNwb25zZSkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhLnRleHQoKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhlKTtcclxuICAgICAgICB0aGlzLmVycm9yRWxlbS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgdGhpcy5lcnJvckVsZW0uaW5uZXJUZXh0ID0gYCR7ZS5tZXNzYWdlfWA7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuZXhwb3J0IGNsYXNzIGNsaWVudCB7XHJcbiAgcHVibGljIG9sZFVSTCA9IGRvY3VtZW50LnJlZmVycmVyO1xyXG4gIHB1YmxpYyBicm93c2VycGxhdGZvcm06IHN0cmluZztcclxuICBwdWJsaWMgdXNlcmFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcHVibGljIGNvbm5lY3Rpb250eXBlO1xyXG4gIHB1YmxpYyBjb25uZWN0aW9ucnR0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYnJvd3NlcnBsYXRmb3JtID0gdGhpcy5zZXRicm93c2VycGxhdGZvcm0oKTtcclxuICAgIHRoaXMuY29ubmVjdGlvbnR5cGUgPSB0aGlzLnNldGNvbm5lY3Rpb250eXBlKCk7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb25ydHQgPSB0aGlzLnNldGNvbm5lY3Rpb25ydHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0YnJvd3NlcnBsYXRmb3JtKCkge1xyXG4gICAgaWYgKFwidXNlckFnZW50RGF0YVwiIGluIHdpbmRvdy5uYXZpZ2F0b3IpIHtcclxuICAgICAgLy91c2VyQWdlbnREYXRhIGlzIE5hdmlnYXRvclVBRGF0YSB0eXBlLCBub3QgZm91bmQgaW4gVHlwZVNjcmlwdC5cclxuICAgICAgLy9Lbm93biB0byBFZGdlIGJyb3dzZXI6IE9iamVjdC5nZXRQcm90b3R5cGVPZih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudERhdGEpXHJcbiAgICAgIGxldCB1c2VyQWdlbnREYXRhOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgYXMgb2JqZWN0O1xyXG4gICAgICBsZXQgcGxhdGZvcm1kYXRhOiBzdHJpbmcgPSA8c3RyaW5nPnVzZXJBZ2VudERhdGEucGxhdGZvcm07XHJcbiAgICAgIHJldHVybiBwbGF0Zm9ybWRhdGE7XHJcbiAgICB9IGVsc2UgdGhpcy5icm93c2VycGxhdGZvcm0gPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRjb25uZWN0aW9udHlwZSgpIHtcclxuICAgIGlmIChcImNvbm5lY3Rpb25cIiBpbiB3aW5kb3cubmF2aWdhdG9yKSB7XHJcbiAgICAgIC8vY29ubmVjdGlvbiBpcyBOZXR3b3JrSW5mb3JtYXRpb24gdHlwZSwgbm90IGZvdW5kIGluIFR5cGVTY3JpcHQuXHJcbiAgICAgIC8vS25vd24gdG8gRWRnZSBicm93c2VyOiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yod2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uKVxyXG4gICAgICBsZXQgY29ubmVjdGlvbjogYW55ID0gd2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uIGFzIG9iamVjdDtcclxuICAgICAgbGV0IGVmZmVjdGl2ZXR5cGU6IHN0cmluZyA9IDxzdHJpbmc+Y29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlO1xyXG4gICAgICByZXR1cm4gZWZmZWN0aXZldHlwZTtcclxuICAgIH0gZWxzZSB0aGlzLmNvbm5lY3Rpb250eXBlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Y29ubmVjdGlvbnJ0dCgpIHtcclxuICAgIGlmIChcImNvbm5lY3Rpb25cIiBpbiB3aW5kb3cubmF2aWdhdG9yKSB7XHJcbiAgICAgIGxldCBjb25uZWN0aW9uOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLmNvbm5lY3Rpb24gYXMgb2JqZWN0O1xyXG4gICAgICBsZXQgcnR0OiBzdHJpbmcgPSA8c3RyaW5nPmNvbm5lY3Rpb24ucnR0O1xyXG4gICAgICByZXR1cm4gcnR0O1xyXG4gICAgfSBlbHNlIHRoaXMuY29ubmVjdGlvbnJ0dCA9IFwiXCI7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjQtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5leHBvcnQgY2xhc3MgQ291bnRlciB7XHJcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbD86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBpbml0aWFsO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5pbXBvcnQgeyBhcGlHZXQgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzLCBEaWN0aW9uYXJ5U2VhcmNoUHJldmlvdXNXb3JkS2V5RWxlbWVudHMgfSBmcm9tIFwiLi93aWRnZXRNYXJrdXBFbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VXb3JkIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlQ2FjaGVzXCI7XHJcbmltcG9ydCBEaWN0aW9uYXJ5U2VhcmNoTWFya3VwIGZyb20gXCIuL2RpY3Rpb25hcnlTZWFyY2hNYXJrdXBcIjtcclxuaW1wb3J0IFJ3YkVycm9yIGZyb20gXCIuL3J3YkVycm9yQnVzXCI7XHJcbmltcG9ydCB7IFJ3YlBhcnNlSnNvbiB9IGZyb20gXCIuL3J3Ykpzb25Db252ZXJ0ZXJcIjtcclxuaW1wb3J0IHsgUndiU3RyaW5naWZ5SnNvbiB9IGZyb20gXCIuL3J3Ykpzb25Db252ZXJ0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBIERpY3Rpb25hcnlTZWFyY2ggaXMgYSBzZXQgb2YgbWFya3VwIGNyZWF0aW9uIGFuZCBmdW5jdGlvbnMgd2hpY2ggYWxsb3cgYSB1c2VyXHJcbiAqICB0byBsb29rIHVwIGEgd29yZCBsaWtlIGEgRGljdGlvbmFyeS4gV2hlbiBjYWxsZWQsIHRoZSB1c2VyJ3MgaW5wdXQgaXMgdmFsaWRhdGVkXHJcbiAqICBhcyBhbiBhY2NlcHRhYmxlIHdvcmQgb3IgaXQgZGVjbGluZXMgdGhlIHJlcXVlc3QsIHRoZW4gc2hvd2luZyB0aGUgdXNlciBpZiB0aGUgd29yZFxyXG4gKiAgaXMgYWNjZXB0YWJsZS5cclxuICpcclxuICogQ3JlYXRpbmcgYSBkaWN0aW9uYXJ5IHNlYXJjaCB3aWRnZXQgcmVxdWlyZXMgcGFzc2luZyBhIHJlZmVyZW5jZSBlbGVtZW50IChmb3IgYVxyXG4gKiBrbm93biBwbGFjZW1lbnQgbG9jYXRpb24pIHRoYXQgY29udGFpbnMgdGhlICdkaWN0aW9uYXJ5V2lkZ2V0JyBjbGFzcy5cclxuICpcclxuICogICBuZXcgRGljdGlvbmFyeVNlYXJjaChlbGVtKTtcclxuICpcclxuICogQWxsIHRoZSBuZWVkZWQgZWxlbWVudHMgYW5kIGZ1bmN0aW9uYWxpdHkgYXJlIGFkZGVkIHRvIHRoZSBwYWdlLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnlTZWFyY2ggZXh0ZW5kcyBEaWN0aW9uYXJ5U2VhcmNoTWFya3VwIHtcclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBzdGF0aWMgd29yZFN0b3JhZ2U6IGxvY2FsU3RvcmFnZVdvcmRbXTtcclxuICBwcml2YXRlIHN0YXRpYyBDYWNoZVN0b3JhZ2VOYW1lb2ZXb3JkUmVxdWVzdDogc3RyaW5nID0gXCJSV0Jfd29yZF9mZXRjaFwiO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlcXVlc3RVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuZGljdGlvbmFyeWFwaS5kZXYvYXBpL3YyL2VudHJpZXMvZW4vXCI7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1dvcmRzQnRuSXNDcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgd29yZFVSTDogVVJMO1xyXG4gIHByaXZhdGUgd29yZERhdGE6IG9iamVjdDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBjb25zdHJ1Y3RvciBjcmVhdGVzIGFsbCB0aGUgZnVuY3Rpb25hbGl0eSBhbmQgbWFya3VwIG5lZWRlZCBmb3IgdGhlXHJcbiAgICogIERpY3Rpb25hcnkgU2VhcmNoIHdpZGdldCBpbnRlcmZhY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBsYWNlIHdpZGdldCBtYXJrdXAuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbTogRWxlbWVudCkge1xyXG4gICAgLy9JbnZva2Ugc3VwZXJjbGFzcyBjb25zdHJ1Y3Rvci5cclxuICAgIHN1cGVyKGVsZW0pO1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRWxlbWVudHMgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAvL0luaXRpYWxpemUgdGhlIGRpY3Rpb25hcnkgd2lkZ2V0IHdpdGggY2xpY2sgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLmFkZFdpZGdldEV2ZW50cygpO1xyXG4gICAgLy9TdG9yZSB3b3JkcyBjYWNoZSBkYXRhIHdpdGggaW5pdGlhbGl6YXRpb24uXHJcbiAgICBEaWN0aW9uYXJ5U2VhcmNoLndvcmRTdG9yYWdlID0gRGljdGlvbmFyeVNlYXJjaC5nZXRMb2NhbFN0b3JhZ2VXb3JkQ2FjaGVzKCk7XHJcbiAgICBEaWN0aW9uYXJ5U2VhcmNoLmNvdW50Kys7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSBMb2NhbCBTdG9yYWdlIHdvcmRzIHByZXZpb3VzbHkgc3RvcmVkIHdpdGggdGhlIERpY3Rpb25hcnkgU2VhcmNoIFdpZGdldC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIERpY3Rpb25hcnlTZWFyY2gud29yZFN0b3JhZ2UgLSB0aGVzZSBhcmUgdGhlIHdvcmRzIHN0b3JlZCBwcmV2aW91c2x5IGluIHRoZVxyXG4gICAqICBicm93c2VyIGNhY2hlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TG9jYWxTdG9yYWdlV29yZENhY2hlcygpIHtcclxuICAgIC8vTG9jYWwgU3RvcmFnZSAnd29yZC1jYWNoZXMnIGl0ZW1zIGRhdGEgYXNzaWdubWVudFxyXG4gICAgLy9jYWNoZSByZXNwb25zZSBsaW5rcyBhbmQgY2FjaGUgbmFtZSBhcmUgcHJldmlvdXNseSBzdG9yZWQgaW4gTG9jYWwgU3RvcmFnZVxyXG4gICAgbGV0IHN0b3JhZ2VTdHI6IHN0cmluZztcclxuICAgIGlmIChSd2JFcnJvci5jaGVja0xvY2FsU3RvcmFnZUVxdWFsTnVsbChcIkRpY3Rpb25hcnlTZWFyY2hcIiwgXCJ3b3JkLWNhY2hlc1wiLCB0cnVlLCB0cnVlKSkge1xyXG4gICAgICAvL1RoZSBMb2NhbCBTdG9yYWdlIGlzIG51bGwgb3IgZW1wdHktLT4gQ29uZmlybSBoZXJlIHRoZSBicm93c2VyIGRvZXMgbm90IGhhdmUgYW55IENhY2hlIFN0b3JhZ2UgaXRlbXMgaW4gZXJyb3JcclxuICAgICAgaWYgKFwiY2FjaGVzXCIgaW4gd2luZG93KSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5jYWNoZXMuaGFzKERpY3Rpb25hcnlTZWFyY2guQ2FjaGVTdG9yYWdlTmFtZW9mV29yZFJlcXVlc3QpKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY2FjaGVzLmRlbGV0ZShEaWN0aW9uYXJ5U2VhcmNoLkNhY2hlU3RvcmFnZU5hbWVvZldvcmRSZXF1ZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ3b3JkLWNhY2hlc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3JhZ2VTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndvcmQtY2FjaGVzXCIpO1xyXG4gICAgLy9jaGVjayB0aGUgd29yZC1jYWNoZSB2YWx1ZSBmb3IgY29ycmVjdCBqc29uIHBhcnNpbmdcclxuICAgIGxldCBwYXJzZXRlc3QgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JQYXJzZUpzb24oc3RvcmFnZVN0cikpO1xyXG4gICAgaWYgKCFwYXJzZXRlc3QucGFzc2VkKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid29yZC1jYWNoZXNcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAlYzxSV0I+JWNEZWxldGVkIHN0b3JhZ2Uga2V5OiB3b3JkLWNhY2hlc2AsXHJcbiAgICAgICAgXCJjb2xvcjpvcmFuZ2U7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgICBcImNvbG9yOm9yYW5nZTtmb250LXNpemU6MTZweDtcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmdldExvY2FsU3RvcmFnZVdvcmRDYWNoZXMoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNldGVzdC5yZXR1cm5PYmo7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsIHRvIHJldHVybiB0aGUgcHJldmlvdXNseSBzZWFyY2hlZCB3b3JkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdGhpcy53b3JkVVJMXHJcbiAgICovXHJcbiAgcHVibGljIGdldFdvcmRVUkwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JkVVJMO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCB0byByZXR1cm4gdGhlIGZldGNoZWQgd29yZCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdGhpcy53b3JkRGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRXb3JkRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLndvcmREYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBjbGljayBhbmQga2V5cHJlc3MgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSB3aWRnZXQuIElucHV0IGV2ZW50IGxpc3RlbmVycyAnY2xpY2snXHJcbiAgICogIGFuZCAna2V5cHJlc3MnIGF3YWl0IGZvciBhIHNlYXJjaCBjYWxsLiBBbHNvLCBzaG91bGQgYSB1c2VyIHdhbnQgdG8gc2VhcmNoIGFcclxuICAgKiAgcHJldmlvdXNseSBzZWFyY2hlZCB3b3JkLCB0aGUgd2lkZ2V0IGFkYXB0cyBtYXJrdXAgZm9yIHRoYXQgcmVxdWVzdC5cclxuICAgKi9cclxuICBwcml2YXRlIGFkZFdpZGdldEV2ZW50cygpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaEVsZW1lbnRzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkEgc2VhcmNoIGVsZW1lbnQgaXMgdW5kZWZpbmVkIGZyb20gc2VhcmNoV29yZCB8IHdvcmRTZWFyY2hcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpY3Rpb25hcnktYnRuc1wiKTtcclxuICAgIGNvbnN0IGhpZGVQcmV2aW91c1BhbmVsID0gKCkgPT4ge1xyXG4gICAgICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy9BZGQgZm9ybSBpbnB1dCBldmVudCBsaXN0ZW5lcnNcclxuICAgIC8vVXBvbiBpbnB1dCBlbnRyeSwgZmlyZSBBUEkgZmV0Y2hcclxuICAgIHRoaXMuc2VhcmNoRWxlbWVudHMud29yZFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLndvcmRTZWFyY2godGhpcy5zZWFyY2hFbGVtZW50cywgZmFsc2UsIG51bGwpO1xyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCkgaGlkZVByZXZpb3VzUGFuZWwoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWFyY2hFbGVtZW50cy5zZWFyY2hXb3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgIT09IFwiRW50ZXJcIikgcmV0dXJuO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLndvcmRTZWFyY2godGhpcy5zZWFyY2hFbGVtZW50cywgZmFsc2UsIG51bGwpO1xyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCkgaGlkZVByZXZpb3VzUGFuZWwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vXCJQcmV2aW91cyB3b3JkIHNlYXJjaGVzXCIgYnV0dG9uIGZldGNoZXMgbG9jYWxseSBzdG9yZWQgd29yZHNcclxuICAgIC8vQ2xpY2tpbmcgdGhlIGJ1dHRvbiBkaXNwbGF5cyBlYWNoIHdvcmQgaW4gYSBsaXN0IHdpdGhpbiB0aGUgd2lkZ2V0XHJcbiAgICB0aGlzLnNlYXJjaEVsZW1lbnRzLnByZXZpb3VzV29yZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmNoZWNrY3JlYXRlUHJldmlvdXNXb3JkQnV0dG9ucygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9cIlJlZnJlc2hcIiBidXR0b24gcmVsb2FkcyB0aGUgcGFnZVxyXG4gICAgdGhpcy5zZWFyY2hFbGVtZW50cy5yZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrY3JlYXRlUHJldmlvdXNXb3JkQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IHBsYWNlbWVudGxvY2F0aW9uaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2aW91c1dvcmRzXCIpO1xyXG4gICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IHRoaXMuc2VhcmNoRWxlbWVudHMucHJldmlvdXNXb3Jkc0NvbnRhaW5lcjtcclxuXHJcbiAgICAvL0NoZWNrIHRoZSBwbGFjZW1lbnQgbG9jYXRvciBhbmQgd29yZCBjYWNoZXMgZm9yIHVuZGVmaW5lZFxyXG4gICAgaWYgKHBsYWNlbWVudGxvY2F0aW9uaG9sZGVyID09IG51bGwgfHwgRGljdGlvbmFyeVNlYXJjaC53b3JkU3RvcmFnZSA9PSBudWxsKSB7XHJcbiAgICAgIGlmICghdGhpcy5wcmV2aW91c1dvcmRzQnRuSXNDcmVhdGVkKSB7XHJcbiAgICAgICAgY29uc3Qgbm9Xb3Jkc0hlYWRpbmdFbGVtID0gYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIG5vV29yZHNIZWFkaW5nRWxlbS5jbGFzc0xpc3QuYWRkKFwiZGljdGlvbmFyeS1idG5cIiwgXCJlcnJvci1ub3Rmb3VuZFwiKTtcclxuICAgICAgICBub1dvcmRzSGVhZGluZ0VsZW0udGV4dENvbnRlbnQgPSBcIlByZXZpb3VzIHdvcmRzIG5vdCBmb3VuZC4gVGhlIGNhY2hlIGlzIGVtcHR5LlwiO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNXb3Jkc0J0bklzQ3JlYXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCkge1xyXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkKSB7XHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHRoaXMucHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNXb3Jkc0J0bklzQ3JlYXRlZCkge1xyXG4gICAgICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgdGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY3JlYXRlUHJldmlvdXNXb3JkQnV0dG9ucyh0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkLCBidXR0b25Db250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcmV2aW91c1dvcmRCdXR0b25zKHByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkOiBhbnksIGJ1dHRvbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIGlmIChwcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCkge1xyXG4gICAgICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBwcmV2aW91c3dvcmRidXR0b25zOiBEaWN0aW9uYXJ5U2VhcmNoUHJldmlvdXNXb3JkS2V5RWxlbWVudHNbXSA9XHJcbiAgICAgIHRoaXMuY3JlYXRlUHJldmlvdXNXb3JkU2VhcmNoZXNFbGVtZW50cyhEaWN0aW9uYXJ5U2VhcmNoLndvcmRTdG9yYWdlLCBidXR0b25Db250YWluZXIpO1xyXG4gICAgZm9yIChsZXQgYnRuIG9mIHByZXZpb3Vzd29yZGJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucHJldmlvdXNXb3Jkc0J0bklzQ3JlYXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lciBmb3IgbmV3IGJ1dHRvbi5cclxuICAgICAgLy90aGlzIGlzIHRoZSBjYWNoZWQgd29yZCBidXR0ZW4uIHdoZW4gaXQncyBjbGlja2VkLCBmaXJlIGEgd29yZCBzZWFyY2hcclxuICAgICAgYnRuLmNhY2hlV29yZEhlYWRpbmdFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy53b3JkU2VhcmNoKHRoaXMuc2VhcmNoRWxlbWVudHMsIHRydWUsIGJ0bi53b3JkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vTU9CSUxFXHJcbiAgICAgIC8vd2hlbiBob3ZlcmVkLCBkaXNwbGF5IHRoZSBkZWxldGUgYnV0dG9uIG9wdGlvblxyXG4gICAgICBidG4ud29yZEhlYWRpbmdFbGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcclxuICAgICAgICBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgLy93aGVuIG5vdCBob3ZlcmVkLCBoaWRlIHRoZSBkZWxldGUgYnV0dG9uIG9wdGlvblxyXG4gICAgICAgIGJ0bi53b3JkSGVhZGluZ0VsZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gYnRuLmRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ0bi5kZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbS5zdHlsZS5vcGFjaXR5ID0gXCI1MCU7XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy93aGVuIGhvdmVyZWQsIGRpc3BsYXkgdGhlIGRlbGV0ZSBidXR0b24gb3B0aW9uXHJcbiAgICAgIGJ0bi53b3JkSGVhZGluZ0VsZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGJ0bi5kZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAvL3doZW4gbm90IGhvdmVyZWQsIGhpZGUgdGhlIGRlbGV0ZSBidXR0b24gb3B0aW9uXHJcbiAgICAgICAgYnRuLndvcmRIZWFkaW5nRWxlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnRuLmRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vd2hlbiBmb2N1cyAoc3VjaCBhcyB1c2luZyBrZXlib2FyZCBvbmx5KSwgZGlzcGxheSB0aGUgZGVsZXRlIGJ1dHRvblxyXG4gICAgICBidG4uY2FjaGVXb3JkSGVhZGluZ0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIChlOiBhbnkpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYnRuLmRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICB9KTtcclxuICAgICAgLy93aGVuIG5vdCBmb2N1c2VkLCBoaWRlIHRoZSBkZWxldGUgYnV0dG9uIG9wdGlvblxyXG4gICAgICBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBidG4uY2FjaGVXb3JkSGVhZGluZ0VsZW0pIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuLmRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lciBmb3IgZGVsZXRlIGJ1dHRvblxyXG4gICAgICBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBidG4ud29yZEhlYWRpbmdFbGVtQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRGljdGlvbmFyeVRlcm1mcm9tTG9jYWxTdG9yYWdlKGJ0bi5jYWNoZVdvcmRIZWFkaW5nRWxlbS50ZXh0Q29udGVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyB0aGUgd29yZCB0byB0aGUgYnJvd3NlcidzIExvY2FsIFN0b3JhZ2UgY29udGFpbmluZyB3b3JkIGRhdGEsIFVSTCwgYW5kIGNhY2hpbmcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbG9jYWxzdG9yYWdldmFsdWUgLSBUaGlzIGludGVyZmFjZSBzdG9yZXMgaW5mb3JtYXRpb24gd2hlcmUgc2VuZGluZyB0byBMb2NhbCBTdG9yYWdlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkRGljdGlvbmFyeVRlcm10b0xvY2FsU3RvcmFnZShsb2NhbHN0b3JhZ2V2YWx1ZTogbG9jYWxTdG9yYWdlV29yZCkge1xyXG4gICAgLy9Mb2cgdGhlIHdvcmQgY2FjaGUgY3JlYXRpb25cclxuICAgIGNvbnN0IGFkZGVkd29yZGNhY2hlID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgJWM8UldCPiVjQWRkZWQgd29yZCBjYWNoZTogJHtsb2NhbHN0b3JhZ2V2YWx1ZS53b3JkfWAsXHJcbiAgICAgICAgXCJjb2xvcjpjeWFuO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpjeWFuO1wiXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgLy9UaGUgJ2xvY2Fsc3RvcmFnZXZhbHVlJyBuZWVkcyBhZGRlZCB0byBsb2NhbCBzdG9yYWdlIGNhY2hlXHJcbiAgICAvL0xvY2FsIHN0b3JhZ2UgbWF5IGJlIGVtcHR5IG9yIGFscmVhZHkgaGF2aW5nIHRoZSB3YW50ZWQgc2VhcmNoZWQgd29yZFxyXG4gICAgLy9DaGVjayBzdG9yYWdlIGlzIG5vdCBudWxsLiBJZiBpdCBpcywgYWRkIHRoZSB3b3JkLlxyXG4gICAgaWYgKERpY3Rpb25hcnlTZWFyY2gud29yZFN0b3JhZ2UgPT0gbnVsbCkge1xyXG4gICAgICBpZiAoUndiRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VFcXVhbE51bGwoXCJEaWN0aW9uYXJ5U2VhcmNoXCIsIFwid29yZC1jYWNoZXNcIiwgZmFsc2UsIGZhbHNlKSkge1xyXG4gICAgICAgIC8vQWRkIHRoZSBzdG9yYWdlIHdvcmQgdG8gYW4gYXJyYXlcclxuICAgICAgICBsZXQgd29yZFN0b3JlOiBsb2NhbFN0b3JhZ2VXb3JkW10gPSBbXTtcclxuICAgICAgICB3b3JkU3RvcmUucHVzaChsb2NhbHN0b3JhZ2V2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGpzb25zdHI6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIC8vQ2FsbCBSV0JTdHJpbmdpZnlKU09OIHRvIHN0cmluZ2lmeSB0aGUgb2JqZWN0XHJcbiAgICAgICAgbGV0IHN0cmluZ2lmeXRlc3RzaW5nbGV3b3JkID0gT2JqZWN0LmNyZWF0ZShuZXcgUndiU3RyaW5naWZ5SnNvbih3b3JkU3RvcmUpKTtcclxuICAgICAgICBpZiAoIXN0cmluZ2lmeXRlc3RzaW5nbGV3b3JkLnBhc3NlZCkge1xyXG4gICAgICAgICAgLy9zdHJpbmdpZnkgb2JqZWN0IGRpZCBub3Qgd29yaywgc28gcmV0dXJuXHJcbiAgICAgICAgICAvL0xPR0xFQUZcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAganNvbnN0ciA9IHN0cmluZ2lmeXRlc3RzaW5nbGV3b3JkLnJldHVyblN0cjtcclxuXHJcbiAgICAgICAgLy8gTG9jYWwgc3RvcmFnZSBpcyBlbXB0eSA9PiBhZGQgdGhlIHdvcmRcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndvcmQtY2FjaGVzXCIsIGpzb25zdHIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgYCVjPFJXQj4lY0NyZWF0ZWQgc3RvcmFnZSBrZXk6IHdvcmQtY2FjaGVzYCxcclxuICAgICAgICAgIFwiY29sb3I6Y3lhbjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICAgICAgXCJjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxNnB4O1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhZGRlZHdvcmRjYWNoZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvL0xPR0xFQUZcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9Mb2NhbCBzdG9yYWdlIGlzIG5vdCBlbXB0eS4gSGVyZSwgd2UgbmVlZCB0byBhZGQgdGhlIHdvcmQgdG8gdGhlIGV4aXN0aW5nIHdvcmQgY2FjaGUuXHJcbiAgICBsZXQgYWxsY2FjaGU6IGxvY2FsU3RvcmFnZVdvcmRbXSA9IERpY3Rpb25hcnlTZWFyY2gud29yZFN0b3JhZ2U7XHJcbiAgICBsZXQganNvbnN0cjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAvL01hdGNoIHRoZSBjdXJyZW50IFVSTCBmb3IgY2FjaGUgbWFuYWdlbWVudFxyXG4gICAgZm9yIChsZXQgY2FjaGUgb2YgYWxsY2FjaGUpIHtcclxuICAgICAgaWYgKGNhY2hlLndvcmRVUkwgPT0gbG9jYWxzdG9yYWdldmFsdWUud29yZFVSTCkge1xyXG4gICAgICAgIC8vV29yZCBpcyBhbHJlYWR5IGluIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICAvL05vIG5lZWQgdG8gYWRkIGl0IHRvIHRoZSBhcnJheVxyXG4gICAgICAgIC8vTE9HTEVBRlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9BZGQgd29yZCB0byBleGlzdGluZyAnd29yZC1jYWNoZXMnIGluIExvY2FsIFN0b3JhZ2VcclxuICAgIGFsbGNhY2hlLnB1c2gobG9jYWxzdG9yYWdldmFsdWUpO1xyXG5cclxuICAgIC8vQ2FsbCBSV0JTdHJpbmdpZnlKU09OIHRvIHN0cmluZ2lmeSB0aGUgb2JqZWN0XHJcbiAgICBsZXQgc3RyaW5naWZ5dGVzdGRvdWJsZXdvcmQgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JTdHJpbmdpZnlKc29uKGFsbGNhY2hlKSk7XHJcbiAgICBpZiAoIXN0cmluZ2lmeXRlc3Rkb3VibGV3b3JkLnBhc3NlZCkge1xyXG4gICAgICAvL3N0cmluZ2lmeSBvYmplY3QgZGlkIG5vdCB3b3JrLCBzbyByZXR1cm5cclxuICAgICAgLy9MT0dMRUFGXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGpzb25zdHIgPSBzdHJpbmdpZnl0ZXN0ZG91Ymxld29yZC5yZXR1cm5TdHI7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3b3JkLWNhY2hlc1wiLCBqc29uc3RyKTtcclxuICAgIGFkZGVkd29yZGNhY2hlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBwcmV2aW91cyB3b3JkIGRhdGEgZnJvbSBicm93c2VyJ3MgTG9jYWwgU3RvcmFnZSAtLT4gS2V5L1ZhbHVlXHJcbiAgICogZGF0YSByZWZlcmVuY2luZyB3b3JkcyBzdG9yZWQgaW4gbG9jYWwgY2FjaGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbG9jYWxzdG9yYWdld29yZCAtIHN0cmluZyBmcm9tIFwiUHJldmlvdXMgV29yZCBTZWFyY2hlc1wiIGJ1dHRvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlRGljdGlvbmFyeVRlcm1mcm9tTG9jYWxTdG9yYWdlKGxvY2Fsc3RvcmFnZXdvcmQ6IHN0cmluZykge1xyXG4gICAgLy9SZW1vdmUgdGhlIGNhY2hlIGl0ZW0gdG8gTG9jYWwgU3RvcmFnZSwgQ2FjaGUgU3RvcmFnZVxyXG4gICAgLy9DaGVjayBsb2NhbCBzdG9yYWdlIGlzIG5vdCBudWxsIG9yIGVtcHR5XHJcbiAgICBpZiAoRGljdGlvbmFyeVNlYXJjaC53b3JkU3RvcmFnZSA9PSBudWxsKSB7XHJcbiAgICAgIC8vTE9HTEVBRlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL0dldCB0aGUgd29yZHMgYXJyYXkgZnJvbSBMb2NhbCBTdG9yYWdlXHJcbiAgICAvL1JXQkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlTnVsbG9yRW1wdHkoXCJEaWN0aW9uYXJ5V2lkZ2V0XCIsIFwid29yZC1jYWNoZXNcIik7IC8vbG9nIHdoZXRoZXIgZmV0Y2hlZCB3b3JkIGNhY2hlIGlzIG51bGwgb3IgZW1wdHkuXHJcbiAgICBsZXQgYWxsY2FjaGU6IGxvY2FsU3RvcmFnZVdvcmRbXSA9IERpY3Rpb25hcnlTZWFyY2gud29yZFN0b3JhZ2U7XHJcblxyXG4gICAgLy9SZW1vdmUgdGhlIHdvcmQgZnJvbSBDYWNoZSBTdG9yYWdlIGFuZCBMb2NhbCBTdG9yYWdlIHdvcmQgYXJyYXlcclxuICAgIGZvciAobGV0IHdvcmRDYWNoZSBvZiBhbGxjYWNoZSkge1xyXG4gICAgICBpZiAod29yZENhY2hlLndvcmQgPT0gbG9jYWxzdG9yYWdld29yZCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUmVxdWVzdGZyb21DYWNoZVN0b3JhZ2Uod29yZENhY2hlLndvcmRVUkwpO1xyXG4gICAgICAgIGFsbGNhY2hlLnNwbGljZShhbGxjYWNoZS5pbmRleE9mKHdvcmRDYWNoZSksIDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgYCVjPFJXQj4lY0RlbGV0ZWQgd29yZCBjYWNoZTogJHtsb2NhbHN0b3JhZ2V3b3JkfWAsXHJcbiAgICAgICAgICBcImNvbG9yOmRhcmtjeWFuO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgICBcImNvbG9yOmRhcmtjeWFuO1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFsbGNhY2hlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIC8vVGhlIHJlbW92ZWQgd29yZCB3YXMgdGhlIGxhc3Qgd29yZCBpbiB0aGUgYXJyYXksIHNvIHJlbW92ZSB0aGUgY29udGFpbmVyXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid29yZC1jYWNoZXNcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAlYzxSV0I+JWNEZWxldGVkIHN0b3JhZ2Uga2V5OiB3b3JkLWNhY2hlc2AsXHJcbiAgICAgICAgXCJjb2xvcjpkYXJrY3lhbjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICAgIFwiY29sb3I6ZGFya2N5YW47Zm9udC1zaXplOjE2cHg7XCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9DYWxsIFJXQlN0cmluZ2lmeUpTT04gdG8gc3RyaW5naWZ5IHRoZSBvYmplY3RcclxuICAgIGxldCB3b3JkY2FjaGVzc3RyZnl0ZXN0ID0gT2JqZWN0LmNyZWF0ZShuZXcgUndiU3RyaW5naWZ5SnNvbihhbGxjYWNoZSkpO1xyXG4gICAgaWYgKCF3b3JkY2FjaGVzc3RyZnl0ZXN0LnBhc3NlZCkge1xyXG4gICAgICAvL0xPR0xFQUZcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUmV0dXJuIHJlbWFpbmluZyB3b3JkcyB0byBMb2NhbCBTdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndvcmQtY2FjaGVzXCIsIHdvcmRjYWNoZXNzdHJmeXRlc3QucmV0dXJuU3RyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIGZldGNoIHJlcXVlc3QgZnJvbSBDYWNoZSBTdG9yYWdlLiBVdGlsaXplc1xyXG4gICAqIERpY3Rpb25hcnlTZWFyY2guQ2FjaGVTdG9yYWdlTmFtZW9mV29yZFJlcXVlc3QgZm9yIGNhY2hlIG5hbWUuXHJcbiAgICogQHBhcmFtIHJlbW92ZVVSTFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlUmVxdWVzdGZyb21DYWNoZVN0b3JhZ2UocmVtb3ZlVVJMOiBVUkwpIHtcclxuICAgIHdpbmRvdy5jYWNoZXMub3BlbihEaWN0aW9uYXJ5U2VhcmNoLkNhY2hlU3RvcmFnZU5hbWVvZldvcmRSZXF1ZXN0KS50aGVuKGNhY2hlID0+IHtcclxuICAgICAgY2FjaGVzLm1hdGNoKHJlbW92ZVVSTCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJQcm9ibGVtIG1hdGNoaW5nIHRoZSByZXN1bHQuIFJlc3VsdDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBjYWNoZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgICBjYWNoZVByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhY2hlLmRlbGV0ZShyZW1vdmVVUkwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBkeW5hbWljYWxseSByZWNhbGxzIGEgd29yZCBkZWZpbml0aW9uIHJlcXVlc3QgYW5kIGluc3RhbnRpYXRlcyBhcGlHRVQoKS4gVGhlXHJcbiAgICogcmV0dXJuZWQgcHJvbWlzZSBhbHNvIGR5bWFuaWNhbGx5IGFuc3dlcnMgdGhlIHdpZGdldCBtYXJrdXAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd29yZCAtIFRoZSB3b3JkIHNlYXJjaGVkIGZyb20gd2lkZ2V0IGlucHV0LlxyXG4gICAqIEBwYXJhbSB3b3JkVXJsIC0gVGhlIGZldGNoIHJlcXVlc3QgVVJMLlxyXG4gICAqIEBwYXJhbSBzZWFyY2hFbGVtcyAtIFdpZGdldCBFbGVtZW50cyAtLSBrZXkgd2lkZ2V0IGZ1bmN0aW9uIGVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSBzZW5kVG9DYWNoZSAtID8gU2VuZCBmZXRjaCByZXF1ZXN0IHRvIENhY2hlIFN0b3JhZ2UgOiBGZXRjaCB3aXRob3V0IHN0b3JpbmcgdGhlIHJlcXVlc3QuXHJcbiAgICogQHBhcmFtIGNhY2hlTmFtZSAtIElmIHNlbmRpbmcgZmV0Y2ggcmVxdWVzdHMgdG8gY2FjaGUsIHByb3ZpZGUgYSBuYW1lIHRvIHN0b3JlIGl0IHVuZGVyLlxyXG4gICAqIEByZXR1cm5zIC0gd29yZERhdGE6IFByb21pc2U8dW5rbm93bj5cclxuICAgKi9cclxuICBwcml2YXRlIGZldGNoRGljdGlvbmFyeVRlcm0oXHJcbiAgICB3b3JkOiBzdHJpbmcsXHJcbiAgICB3b3JkVXJsOiBVUkwsXHJcbiAgICBzZWFyY2hFbGVtczogRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzLFxyXG4gICAgc2VuZFRvQ2FjaGU6IGJvb2xlYW4sXHJcbiAgICBjYWNoZU5hbWU6IHN0cmluZyB8IG51bGxcclxuICApIHtcclxuICAgIC8vQSBmdW5jdGlvbiBjYWxsIHBhcmFtZXRlciBvcHRpb24gaXMgdG8gc3RvcmUgdGhlIHdvcmQgcmVxdWVzdCBpbiBicm93c2VyJ3MgQ2FjaGUgU3RvcmFnZVxyXG4gICAgLy9TdHJ1Y3R1cmUgdGhlIHdvcmQgZGF0YSB2aWEgJ2xvY2Fsc3RvcmFnZXdvcmR2YWx1ZScgaW50ZXJmYWNlIHVzZWQgdGhyb3VnaG91dCBmZXRjaGluZ1xyXG4gICAgbGV0IHdvcmRjYWNoZTogbG9jYWxTdG9yYWdlV29yZCA9IHtcclxuICAgICAgaW5DYWNoZTogc2VuZFRvQ2FjaGUsXHJcbiAgICAgIHdvcmQ6IHdvcmQsXHJcbiAgICAgIHdvcmRVUkw6IHdvcmRVcmwsXHJcbiAgICAgIGNhY2hlTmFtZTogc2VuZFRvQ2FjaGUgPyBjYWNoZU5hbWUgOiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL0FzeW5jaHJvbm91cyBmZXRjaCByZXFldXN0IGFuZCBkeW5hbWljIG1hcmt1cCBjcmVhdGlvbiBmcm9tIHRoZSBkYXRhJ3MgcmV0dXJuXHJcbiAgICBjb25zdCB3b3JkRmV0Y2hSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvL0NhbGwgYXBpR0VUKCkgb2JqZWN0IGNvbnN0cnVjdG9yXHJcbiAgICAgIGNvbnN0IHdvcmRGZXRjaCA9IG5ldyBhcGlHZXQoXHJcbiAgICAgICAgd29yZGNhY2hlLndvcmRVUkwsXHJcbiAgICAgICAgd29yZGNhY2hlLmluQ2FjaGUsXHJcbiAgICAgICAgc2VhcmNoRWxlbXMuZXJyb3JFbGVtLFxyXG4gICAgICAgIHdvcmRjYWNoZS5jYWNoZU5hbWVcclxuICAgICAgKTtcclxuICAgICAgbGV0IG5vRGVmaW5pdGlvbnM6IGJvb2xlYW47XHJcblxyXG4gICAgICAvL0ZldGNoIHJlcXVlc3QgbWV0aG9kIGNhbGwuIFJldHVybmVkIGRhdGEgbWF5IGJlIHRoZSB3b3JkIGRlZmluaXRpb25cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB3b3JkRmV0Y2guYXBpR2V0KHdvcmRGZXRjaC5nZXRHZXRVcmwoKSk7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgLy9JZiB0aGUgcmV0dXJuZWQgZGF0YSBpcyBhIHN0cmluZywgaXQgaXMgdGhlIHdvcmQgZGVmaW5pdGlvbiBkYXRhLlxyXG4gICAgICAgIG5vRGVmaW5pdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcGFyc2V0ZXN0ID0gT2JqZWN0LmNyZWF0ZShuZXcgUndiUGFyc2VKc29uKGRhdGEpKTtcclxuICAgICAgICBpZiAoIXBhcnNldGVzdC5wYXNzZWQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHBhcnNldGVzdC5yZXR1cm5PYmo7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHdvcmREYXRhOiBhbnkgPSBkYXRhO1xyXG4gICAgICAvL0lmIHRoZSByZXR1cm5lZCBkYXRhIGlzIGFuIG9iamVjdCwgY29uZmlybSBpdCBpcyAnbm8gZGVmaW5pdGlvbicgc2VydmVyIGRhdGFcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBpZiAoT2JqZWN0Lmhhc093bih3b3JkRGF0YSwgXCJ0aXRsZVwiKSkge1xyXG4gICAgICAgICAgLy9ObyBkZWZpbml0aW9ucyB3ZXJlIGZvdW5kIHdoZW4gZGF0YSBpcyBhbiBvYmplY3Qgd2l0aCBhIHRpdGxlIHByb3BlcnR5XHJcbiAgICAgICAgICAvL3dvcmREYXRhLnRpdGxlID09IFwiTm8gRGVmaW5pdGlvbnMgRm91bmRcIlxyXG4gICAgICAgICAgbm9EZWZpbml0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgICBpZiAod29yZERhdGEudGl0bGUgPT0gXCJObyBEZWZpbml0aW9ucyBGb3VuZFwiICYmIHdvcmRjYWNoZS5pbkNhY2hlID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy9UaGUgZGF0YSBzdHJlYW0gaGVyZSBpcyB3aXRob3V0IHdvcmQgZGF0YS4gVGhpcyBmdW5jdGlvbiBhd2FpdHMgdGhlIGFwaSBmZXRjaCdzIGRhdGFcclxuICAgICAgICAgICAgLy90byBjb21wbGV0ZSBzdG9yYWdlL3Byb21pc2UgcmV0dXJucy4gSXQgd2FpdHMgNSBzZWNvbmRzIGZvciB0aGUgYnJvd3NlciB0byBjb21wbGV0ZSBpdHMgc3RvcmUgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIC8vdGhlbiByZW1vdmVzIHRoZSB1bndhbnRlZCBjYWNoZSByZXF1ZXN0LlxyXG4gICAgICAgICAgICAvL1RPRE86QlVHUkVTRUFSQ0g9PkR1cmluZyB0aGUgNSB0aW1lb3V0LCBpZiB0aGUgcGFnZSByZWZyZXNoZXMgYSAnYmFkIHdvcmQnIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBjYWNoZVxyXG4gICAgICAgICAgICAvL1RoaXMgJ2JhZCB3b3JkJyBjYW4gYmUgcmVtb3ZlZCBieSBkZWxldGluZyBhbGwgcHJldmlvdXMgd29yZHMgdmlhIFVJIGFuZCByZWZyZXNoaW5nIHRoZSBwYWdlLiBUaGlzIHdpbGxcclxuICAgICAgICAgICAgLy8gZmlyZSBnZXRMb2NhbFN0b3JhZ2VXb3JkQ2FjaGVzKCkgdG8gY2xlYXIgYW55IG1pc21hdGNoZWQgd29yZGRhdGE8LS0+Y2FjaGVkcmVxdWVzdHMuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vRnVuY3Rpb24gYXdhaXRpbmcgcmVxdWVzdCdzIENhY2hlIFN0b3JhZ2UgY2FjaGluZ1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVJlcXVlc3Rmcm9tQ2FjaGVTdG9yYWdlKHdvcmRGZXRjaC5nZXRHZXRVcmwoKSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCByZW1vdmUgZnJvbSBDYWNoZSBTdG9yYWdlLiBOYW1lOiBcIiwgd29yZEZldGNoLmdldEdldFVybCgpKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YSA9PSB1bmRlZmluZWQgfHwgbm9EZWZpbml0aW9ucykge1xyXG4gICAgICAgIC8vR29vZCBkYXRhLS0+IHJldHVybiBkYXRhIGZvciBtYXJrdXAgcmVuZGVyXHJcbiAgICAgICAgLy8nQmFkIGRhdGEnIGR1ZSB0byBcIk5vIGRlZmluaXRpb25zIGZvdW5kXCIsIGludmFsaWQgd29yZCwgYmFkIG5ldHdvcmsgY29ubmVjdGlvblxyXG4gICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgLy9PbmxpbmUsIHByb2JsZW0gd2l0aCBmZXRjaFxyXG4gICAgICAgICAgLy9PZmZsaW5lIHJlcXVlc3RcclxuICAgICAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS5pbm5lclRleHQgKz0gXCIsIGNoZWNrIG5ldHdvcmsgY29ubmVjdGlvbi5cIjtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vRGVmaW5pdGlvbnMpIHtcclxuICAgICAgICAgIC8vU2VydmVyIHJldHVybmVkIG5vIGRlZmluaXRpb25zIGRhdGFcclxuICAgICAgICAgIGlmICh3b3JkRGF0YS50aXRsZSA9PSBcIk5vIERlZmluaXRpb25zIEZvdW5kXCIpXHJcbiAgICAgICAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS5pbm5lclRleHQgPSBcIk5vIERlZmluaXRpb25zIEZvdW5kXCI7XHJcbiAgICAgICAgICBzZWFyY2hFbGVtcy5lcnJvckVsZW0uY2xhc3NMaXN0LmFkZChcImVycm9yLW5vdGZvdW5kXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFkZERpY3Rpb25hcnlUZXJtdG9Mb2NhbFN0b3JhZ2Uod29yZGNhY2hlKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgbGV0IHdvcmREYXRhID0gd29yZEZldGNoUmVxdWVzdCgpO1xyXG4gICAgcmV0dXJuIHdvcmREYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlciBpbnB1dCB2YWxpZGF0aW9uIGZ1bmN0aW9uIHRlc3RzIHRoZSBpbnB1dCBzdHJpbmcgYWdhaW5zdCBhIHZhbGlkIFJlZ3VsYXIgRXhwcmVzc2lvbi5cclxuICAgKlxyXG4gICAqICAgIFJlZ0V4cChcIl5bQS1aYS16XXsxLDQ1fSRcIilcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpbnR4dCAtIFN0cmluZyB2YWx1ZSByZWNlaXZlZCBmcm9tIHVzZXIgZmllbGQgaW5wdXQuXHJcbiAgICogQHJldHVybnMgQWNjZXB0YWJsZSB1c2VyIGlucHV0OiB0cnVlIG9yIGZhbHNlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgd29yZFZhbGlkYXRpb24oaW50eHQ6IHN0cmluZykge1xyXG4gICAgbGV0IHRyaW1tZWQgPSBpbnR4dC50cmltKCk7XHJcbiAgICBsZXQgbGV0dGVyc1JFID0gbmV3IFJlZ0V4cChcIl5bQS1aYS16XXsxLDQ1fSRcIik7XHJcbiAgICBpZiAobGV0dGVyc1JFLnRlc3QodHJpbW1lZCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL3dvcmQgaXMgbm90IGFuIGFjY2VwdGFibGUgd29yZC5gKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2FsbEZldGNoRGljdGlvbmFyeVRlcm0gYXdhaXRzIGEgcHJvbWlzZSwgZmV0Y2hpbmcgYSBkaWN0aW9uYXJ5IHRlcm0uIFRoZSBkYXRhXHJcbiAgICogaW5ncmVzcyBjYWxscyBtYXJrdXAgY3JlYXRpb24gZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2VhcmNoRWxlbXMgLSBXaWRnZXQgRWxlbWVudHMgLS0ga2V5IHdpZGdldCBmdW5jdGlvbiBlbGVtZW50cy5cclxuICAgKiBAcGFyYW0gd29yZCAtIFRoZSB3b3JkIHRvIGJlIGZldGNoZWQuXHJcbiAgICogQHBhcmFtIHdvcmRVUkwgLSBBIFVSTCBjb21wb3NpbmcgdGhlIGZ1bGwgdXJsIG9mIHRoZSBmZXRjaCByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2FsbEZldGNoRGljdGlvbmFyeVRlcm0oc2VhcmNoRWxlbXM6IERpY3Rpb25hcnlTZWFyY2hFbGVtZW50cywgd29yZDogc3RyaW5nLCB3b3JkVVJMOiBVUkwpIHtcclxuICAgIC8vIFdoZW4gdGhlIHdvcmQgZGF0YSByZXNvbHZlcywgY2FsbCBtYXJrdXAgZnVuY3Rpb25zXHJcbiAgICBsZXQgd29yZERhdGFQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHJlc29sdmUoXHJcbiAgICAgICAgdGhpcy5mZXRjaERpY3Rpb25hcnlUZXJtKFxyXG4gICAgICAgICAgd29yZCxcclxuICAgICAgICAgIHdvcmRVUkwsXHJcbiAgICAgICAgICBzZWFyY2hFbGVtcyxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICBEaWN0aW9uYXJ5U2VhcmNoLkNhY2hlU3RvcmFnZU5hbWVvZldvcmRSZXF1ZXN0XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB3b3JkRGF0YVByb21pc2UudGhlbigoZGF0YTogb2JqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMud29yZERhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLmNyZWF0ZURpY3Rpb25hcnlUZXJtV2l0aE1hcmt1cChkYXRhLCBzZWFyY2hFbGVtcyk7XHJcbiAgICAgIGlmIChkYXRhID09IHVuZGVmaW5lZCB8fCBPYmplY3QuaGFzT3duKGRhdGEsIFwidGl0bGVcIikpIHJldHVybjtcclxuICAgICAgY29uc29sZS5sb2coYCVjPFJXQj4lY1JldHJpZXZlZCB3b3JkOiAke3dvcmR9YCwgXCJjb2xvcjpnb2xkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsIFwiY29sb3I6Z29sZDtcIik7XHJcbiAgICAgIC8vIFJlbW92ZSB1bm5lZWRlZCBjbGFzc2VzIGlmIGFwcGxpZWQgcHJldmlvdXNseVxyXG4gICAgICBzZWFyY2hFbGVtcy5zZWFyY2hXb3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xyXG4gICAgICBzZWFyY2hFbGVtcy5zZWFyY2hXb3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkLW5vdGZvdW5kXCIpO1xyXG4gICAgICBzZWFyY2hFbGVtcy5lcnJvckVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICBzZWFyY2hFbGVtcy5lcnJvckVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImVycm9yLW5vdGZvdW5kXCIpO1xyXG4gICAgICBzZWFyY2hFbGVtcy5lcnJvckVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB3b3JkU2VhcmNoKCkgYmVnaW5zIGEgd29yZCBzZWFyY2ggcmVxdWVzdC4gVGhlIHVzZXIgaW5wdXQgbGlzdGVuZXIgY2hvb3Nlc1xyXG4gICAqIHdoZXRoZXIgdGhlIGZldGNoIGlzIGNhbGxlZCBmcm9tIGNhY2hlIG9yIGlzIG5ldy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzZWFyY2hFbGVtcyAtIFdpZGdldCBFbGVtZW50cyAtLSBrZXkgd2lkZ2V0IGZ1bmN0aW9uIGVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSBpc0Zyb21QcmV2aW91c1dvcmRzIC0gVHJ1ZSBpZiB0aGUgdXNlciByZXF1ZXN0ZWQgYSBzZWFyY2ggZnJvbSBhIHByZXZpb3VzIHdvcmQsIHRvIGNhbGwgZGF0YSBmcm9tIEJyb3dzZXIgQ2FjaGUuXHJcbiAgICogQHBhcmFtIGNhY2hlZFdvcmQgLSBJZiB0aGUgdXNlciBjYWxsZWQgZm9yIGEgcHJldmlvdXMgd29yZCwgY2FjaGVkV29yZCBpcyB3aXRoaW4gdGhlIExvY2FsIFN0b3JhZ2UuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB3b3JkU2VhcmNoKFxyXG4gICAgc2VhcmNoRWxlbXM6IERpY3Rpb25hcnlTZWFyY2hFbGVtZW50cyxcclxuICAgIGlzRnJvbVByZXZpb3VzV29yZHM6IGJvb2xlYW4sXHJcbiAgICBjYWNoZWRXb3JkOiBsb2NhbFN0b3JhZ2VXb3JkIHwgbnVsbFxyXG4gICkge1xyXG4gICAgaWYgKGlzRnJvbVByZXZpb3VzV29yZHMpIHtcclxuICAgICAgdGhpcy5jYWxsRmV0Y2hEaWN0aW9uYXJ5VGVybShzZWFyY2hFbGVtcywgY2FjaGVkV29yZC53b3JkLCBjYWNoZWRXb3JkLndvcmRVUkwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVGFrZSB1c2VyIGlucHV0IGFuZCBmaWx0ZXIgdG8gYW4gYWNjZXB0ZWQgc3RyaW5nXHJcbiAgICAgIGxldCBhY2NlcHRlZElucHV0V29yZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLndvcmRWYWxpZGF0aW9uKHNlYXJjaEVsZW1zLnNlYXJjaFdvcmQudmFsdWUpXHJcbiAgICAgICAgPyAoYWNjZXB0ZWRJbnB1dFdvcmQgPSB0cnVlKVxyXG4gICAgICAgIDogKGFjY2VwdGVkSW5wdXRXb3JkID0gZmFsc2UpO1xyXG4gICAgICBpZiAoYWNjZXB0ZWRJbnB1dFdvcmQpIHtcclxuICAgICAgICAvLyBDcmVhdGUgYSBVUkwgb2YgdGhlIGFjY2VwdGVkIHdvcmQgZm9yIHVzZSBpbiB0aGUgZmV0Y2ggY2FsbFxyXG4gICAgICAgIHRoaXMud29yZFVSTCA9IG5ldyBVUkwoc2VhcmNoRWxlbXMuc2VhcmNoV29yZC52YWx1ZS50b1N0cmluZygpLCBEaWN0aW9uYXJ5U2VhcmNoLnJlcXVlc3RVcmwpO1xyXG4gICAgICAgIHRoaXMuY2FsbEZldGNoRGljdGlvbmFyeVRlcm0oc2VhcmNoRWxlbXMsIHNlYXJjaEVsZW1zLnNlYXJjaFdvcmQudmFsdWUsIHRoaXMud29yZFVSTCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VhcmNoRWxlbXMuc2VhcmNoV29yZC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZC1ub3Rmb3VuZFwiKTtcclxuICAgICAgICBzZWFyY2hFbGVtcy5zZWFyY2hXb3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3Itbm90Zm91bmRcIik7XHJcbiAgICAgICAgc2VhcmNoRWxlbXMuZXJyb3JFbGVtLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICBzZWFyY2hFbGVtcy5lcnJvckVsZW0udGV4dENvbnRlbnQgPSBcIkludmFsaWQgd29yZCFcIjtcclxuICAgICAgICBzZWFyY2hFbGVtcy5zZWFyY2hXb3JkLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLW5vdGZvdW5kXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWFyY2hFbGVtcy5zZWFyY2hXb3JkLnZhbHVlID0gXCJcIjsgLy8gcmVzZXQgaW5wdXQgc3RyaW5nXHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VXb3JkIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlQ2FjaGVzXCI7XHJcbmltcG9ydCB7IERpY3Rpb25hcnlTZWFyY2hFbGVtZW50cywgRGljdGlvbmFyeVNlYXJjaFByZXZpb3VzV29yZEtleUVsZW1lbnRzIH0gZnJvbSBcIi4vd2lkZ2V0TWFya3VwRWxlbWVudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIERpY3Rpb25hcnlTZWFyY2hXaWRnZXQgaXMgbWFkZSB0byBjcmVhdGUgdGhlIG1hcmt1cCBuZWVkZWQgZm9yIHRoZVxyXG4gKiAgRGljdGlvbmFyeSBTZWFyY2guIEVsZW1lbnRzIGFyZSBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgcGFnZSB0byB0aGUgY2xhc3NcclxuICogICdkaWN0aW9uYXJ5V2lkZ2V0J1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljdGlvbmFyeVNlYXJjaE1hcmt1cCB7XHJcbiAgcHVibGljIHNlYXJjaEVsZW1lbnRzOiBEaWN0aW9uYXJ5U2VhcmNoRWxlbWVudHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW06IEVsZW1lbnQpIHtcclxuICAgIC8vaW5zZXJ0IHRoZSB3aWRnZXQgYWZ0ZXIgdGhlIHBhc3NlZCBpbiBcImVsZW1cIlxyXG4gICAgaWYgKGVsZW0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY1RoZXJlIGlzIG5vIFwiZGljdGlvbmFyeVdpZGdldFwiIGNsYXNzIG9uIHRoaXMgcGFnZS5gLCBcImNvbG9yOiBvcmFuZ2U7XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGljdGlvbmFyeVdpZGdldFwiKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgQWRkIFwiZGljdGlvbmFyeVdpZGdldFwiIGNsYXNzIHRvICR7ZWxlbS5ub2RlTmFtZX0gbm9kZS5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jcmVhdGVEaWN0aW9uYXJ5V2lkZ2V0TWFya3VwKGVsZW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbWFyeSB3aWRnZXQgbWFya3VwIHN0cnVjdHVyaW5nIHRoZSB3aWRnZXQgZWxlbWVudHMgYW5kIHNlYXJjaCBpbnB1dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IGJlZm9yZSB0aGUgd2lkZ2V0LlxyXG4gICAqIEByZXR1cm5zIHNlYXJjaEVsZW1lbnRzOiBEaWN0aW9uYXJ5U2VhcmNoRWxlbWVudHMgLS0+IGludGVyZmFjZSBvZlxyXG4gICAqICBpbXBvcnRhbnQgSFRNTCBlbGVtZW50cyB1c2VkIHRocm91Z2ggd2lkZ2V0IGZ1bmN0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVEaWN0aW9uYXJ5V2lkZ2V0TWFya3VwKGVsZW06IEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBlbGVtLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpKTtcclxuICAgIGlmIChkaWN0aW9uYXJ5ID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaGUgZGV0ZXJtaW5lZCBkaWN0aW9uYXJ5IGVsZW1lbnQgaXMgbnVsbC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSB3aWRnZXQgZWxlbWVudHNcclxuICAgIGNvbnN0IGFydEggPSBkaWN0aW9uYXJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKSk7XHJcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gZGljdGlvbmFyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSk7XHJcbiAgICBjb25zdCBwcmV2aW91c1dvcmRzID0gZGljdGlvbmFyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gZWxlbWVudHMgdXNlZCBpbiBsYXRlciBmdW5jdGlvbnNcclxuICAgIGxldCBzZWFyY2hFbGVtZW50czogRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzID0ge1xyXG4gICAgICBzZWFyY2hXb3JkOiBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSksXHJcbiAgICAgIHdvcmRTZWFyY2g6IHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSksXHJcbiAgICAgIGRpY3Rpb25hcnlFbGVtOiA8SFRNTEVsZW1lbnQ+ZGljdGlvbmFyeSxcclxuICAgICAgZXJyb3JFbGVtOiBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpKSxcclxuICAgICAgcHJldmlvdXNXb3JkQnRuOiBwcmV2aW91c1dvcmRzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpLFxyXG4gICAgICBwcmV2aW91c1dvcmRzQ29udGFpbmVyOiBkaWN0aW9uYXJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFxyXG4gICAgICByZWZyZXNoQnRuOiBwcmV2aW91c1dvcmRzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBZGQgYXR0cmlidXRlcyBhbmQgcHJvcGVydHkgdmFsdWVzXHJcbiAgICBjb25zdCBmb250QXdlc29tZVNlYXJjaEljb24gPSBzZWFyY2hFbGVtZW50cy53b3JkU2VhcmNoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpKTtcclxuICAgIGZvbnRBd2Vzb21lU2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIik7XHJcbiAgICBmb250QXdlc29tZVNlYXJjaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNlYXJjaFwiKTtcclxuICAgIHByZXZpb3VzV29yZHMuY2xhc3NMaXN0LmFkZChcInByZXZpb3VzV29yZHNcIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5zZWFyY2hXb3JkLmNsYXNzTGlzdC5hZGQoXCJtb25vc3BhY2VcIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5wcmV2aW91c1dvcmRCdG4uY2xhc3NMaXN0LmFkZChcImRpY3Rpb25hcnktYnRuXCIpO1xyXG4gICAgc2VhcmNoRWxlbWVudHMucmVmcmVzaEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGljdGlvbmFyeS1idG5cIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5wcmV2aW91c1dvcmRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnJlZnJlc2hCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnNlYXJjaFdvcmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNlYXJjaFwiKTtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnNlYXJjaFdvcmQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2guLi5cIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5zZWFyY2hXb3JkLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJJbnB1dFwiKTtcclxuICAgIHNlYXJjaEVsZW1lbnRzLndvcmRTZWFyY2guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICAgIHNlYXJjaEVsZW1lbnRzLndvcmRTZWFyY2guc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIlNlYXJjaFwiKTtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnNlYXJjaFdvcmQuaWQgPSBcInNlYXJjaC13b3JkXCI7XHJcbiAgICBzZWFyY2hFbGVtZW50cy53b3JkU2VhcmNoLmlkID0gXCJ3b3JkLXNlYXJjaFwiO1xyXG4gICAgc2VhcmNoRWxlbWVudHMucHJldmlvdXNXb3JkQnRuLmlubmVyVGV4dCA9IFwiUHJldmlvdXMgV29yZCBTZWFyY2hlc1wiO1xyXG4gICAgc2VhcmNoRWxlbWVudHMucmVmcmVzaEJ0bi5pbm5lclRleHQgPSBcIlJlZnJlc2hcIjtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnByZXZpb3VzV29yZHNDb250YWluZXIuaWQgPSBcImRpY3Rpb25hcnktYnRuc1wiO1xyXG4gICAgZGljdGlvbmFyeS5pZCA9IFwiZGljdGlvbmFyeVwiO1xyXG4gICAgc2VhcmNoRm9ybS5pZCA9IFwiZGljdGlvbmFyeS1zZWFyY2hcIjtcclxuICAgIHNlYXJjaEZvcm0uYWN0aW9uID0gXCJpbmRleC5odG1sXCI7XHJcbiAgICBhcnRILnRleHRDb250ZW50ID0gXCJEaWN0aW9uYXJ5IFRlcm06XCI7XHJcblxyXG4gICAgdGhpcy5zZWFyY2hFbGVtZW50cyA9IHNlYXJjaEVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyB0aGUgbWFya3VwIHRvIGhvdXNlIHJldHVybmVkIHdvcmRzIGZyb20gRGljdGlvbmFyeVNlYXJjaC4gVGhlIG1hcmt1cFxyXG4gICAqICBpcyBjcmVhdGVkIGJhc2VkIG9uIEFQSSBlZ3Jlc3MuIFdvcmRzIGFuZCB0aGVpciBkZWZpbml0aW9ucyB2YXJ5LiBUaGUgbWFya3VwIGlzXHJcbiAgICogIGFkYXB0aXZlIHRvIHJldHVybmVkIHdvcmQgZGF0YSBzdHJ1Y3R1cmVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdvcmREYXRhIC0gVGhpcyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IG9mIHdvcmQgdHlwZXMsIGRlZmluaXRpb25zLCBhbmQgZXhhbXBsZXMuXHJcbiAgICogQHBhcmFtIHNlYXJjaEVsZW1zIC0gV2lkZ2V0IEVsZW1lbnRzIC0tIGtleSB3aWRnZXQgZnVuY3Rpb24gZWxlbWVudHMuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZURpY3Rpb25hcnlUZXJtV2l0aE1hcmt1cCh3b3JkRGF0YTogYW55LCBzZWFyY2hFbGVtczogRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzKSB7XHJcbiAgICBpZiAod29yZERhdGEgPT0gbnVsbCB8fCAhKHdvcmREYXRhIGluc3RhbmNlb2YgT2JqZWN0KSB8fCBPYmplY3QuaGFzT3duKHdvcmREYXRhLCBcInRpdGxlXCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiJWNUaGVyZSBpcyBubyBkZWZpbml0aW9uIGZvciB0aGlzIHdvcmQuXCIsIFwiY29sb3I6ZGFya2dyZWVuO1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB3b3JkIGRlZmluaXRpb24gdG8gdGhlIGRpY3Rpb25hcnkgd2lkZ2V0XHJcbiAgICBjb25zdCBkZWZpbml0aW9uRGVzY3JpcHRpb25Db250YWluZXIgPSBzZWFyY2hFbGVtcy5kaWN0aW9uYXJ5RWxlbS5hcHBlbmRDaGlsZChcclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlZmluaXRpb25EZXNjcmlwdGlvbiA9IGRlZmluaXRpb25EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgIGRlZmluaXRpb25EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIikpOyAvLyB3b3JkIGRlZmluaXRpb24gc2VwYXJhdG9yXHJcbiAgICBkZWZpbml0aW9uRGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlZmluaXRpb25EZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAvLyBUaGUgd29yZCBkYXRhIHJlcHJlc2VudHMgY29tcGxleCBKU09OIG9iamVjdFxyXG4gICAgLy8gUmVjdXJzZSB0aGUgd29yZCBkYXRhIG9iamVjdCwgYWRkaW5nIGVsZW1lbnRzIGZyb20gdGhlIHZhcmlvdXMgbGV2ZWxzXHJcbiAgICB3b3JkRGF0YS5tYXAoKHdvcmQ6IGFueSkgPT4ge1xyXG4gICAgICBkZWZpbml0aW9uRGVzY3JpcHRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKFwid29yZFwiLCB3b3JkLndvcmQpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiVGhlIHdvcmQgaXM6IFwiLHdvcmQpXHJcbiAgICAgIGNvbnN0IHdvcmRUaXRsZSA9IGRlZmluaXRpb25EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIikpO1xyXG4gICAgICB3b3JkVGl0bGUudGV4dENvbnRlbnQgPSB3b3JkLndvcmQ7XHJcbiAgICAgIC8vQWRkIHRoZSB3b3JkIGFuZCBleGFtcGxlcyB0byBwYWdlXHJcbiAgICAgIHdvcmQubWVhbmluZ3MubWFwKCh3b3JkVHlwZTogYW55KSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldvcmRUeXBlIGFyZTogXCIsIHdvcmRUeXBlKVxyXG4gICAgICAgIGNvbnN0IHdvcmRUeXBlSCA9IGRlZmluaXRpb25EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIikpO1xyXG4gICAgICAgIGNvbnN0IHdvcmRUeXBlTGlzdCA9IGRlZmluaXRpb25EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIikpO1xyXG4gICAgICAgIHdvcmRUeXBlSC50ZXh0Q29udGVudCA9IHdvcmRUeXBlLnBhcnRPZlNwZWVjaDtcclxuICAgICAgICB3b3JkVHlwZS5kZWZpbml0aW9ucy5tYXAoKGRlZjogYW55KSA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGVmaW5pdGlvbiBpczogXCIsIGRlZik7XHJcbiAgICAgICAgICBsZXQgd29yZFR5cGVEZWZJdGVtID0gd29yZFR5cGVMaXN0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XHJcbiAgICAgICAgICBsZXQgZGVmaW5pdGlvblAgPSB3b3JkVHlwZURlZkl0ZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikpO1xyXG4gICAgICAgICAgZGVmaW5pdGlvblAudGV4dENvbnRlbnQgPSBkZWYuZGVmaW5pdGlvbjtcclxuICAgICAgICAgIGRlZmluaXRpb25QLmNsYXNzTGlzdC5hZGQoXCJ3b3JkRGVmaW5pdGlvblwiKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBhZGRBZGphY2VudEVsZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJEZWZpbml0aW9ucyBpczogXCIsIGRlZik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1AgPSBkZWZpbml0aW9uUC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikpO1xyXG4gICAgICAgICAgICBpZiAobmV3UCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3UGkgPSBuZXdQLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpKTtcclxuICAgICAgICAgICAgICBuZXdQaS50ZXh0Q29udGVudCA9IGRlZi5leGFtcGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmluaXRpb25QLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlXCIpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIC8vY2hlY2sgaWYga2V5IFwiZXhhbXBsZVwiIGlzIGluIGRlZmluaXRpb24uIElmIGl0IGlzLCBhZGQgdGhlIGV4YW1wbGUgdG8gbGlzdFxyXG4gICAgICAgICAgXCJleGFtcGxlXCIgaW4gZGVmID8gYWRkQWRqYWNlbnRFbGVtKCkgOiB0cnVlID09IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jcmVhdGUgY2xlYXIgYnV0dG9uXHJcbiAgICBjb25zdCBkZWxldGVXb3JkVGVybUhlYWRpbmdFbGVtID0gZGVmaW5pdGlvbkRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgZGVsZXRlV29yZFRlcm1IZWFkaW5nRWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwid29yZC1jbGVhclwiKTtcclxuICAgIGRlbGV0ZVdvcmRUZXJtSGVhZGluZ0VsZW0uY2xhc3NMaXN0LmFkZChcImRpY3Rpb25hcnktd29yZC1idG4tY2xlYXJcIik7XHJcbiAgICBkZWxldGVXb3JkVGVybUhlYWRpbmdFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgLy93aGVuIGNsZWFyIGJ1dHRvbiBpcyBob3ZlcmVkLCBkaXNwbGF5IGl0XHJcbiAgICBkZWZpbml0aW9uRGVzY3JpcHRpb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBldmVudCA9PiB7XHJcbiAgICAgIGRlbGV0ZVdvcmRUZXJtSGVhZGluZ0VsZW0uc3R5bGUub3BhY2l0eSA9IFwiMTAwJVwiO1xyXG4gICAgICAvL3doZW4gY2xlYXIgYnV0dG9uIGlzIG5vdCBob3ZlcmVkLCBoaWRlIGl0XHJcbiAgICAgIGRlZmluaXRpb25EZXNjcmlwdGlvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVdvcmRUZXJtSGVhZGluZ0VsZW0uc3R5bGUub3BhY2l0eSA9IFwiNTAlXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy93aGVuIGNsZWFyIGJ1dHRvbiBpcyBjbGlja2VkLCBjbGVhciB0aGUgZWxlbWVudHNcclxuICAgIGRlbGV0ZVdvcmRUZXJtSGVhZGluZ0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZGVmaW5pdGlvbkRlc2NyaXB0aW9uQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgJWM8UldCPiVjUmVtb3ZlZCB3b3JkOiAke2RlZmluaXRpb25EZXNjcmlwdGlvbkNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJ3b3JkXCIpfWAsXHJcbiAgICAgICAgXCJjb2xvcjpnb2xkZW5yb2Q7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgICBcImNvbG9yOmdvbGRlbnJvZDtcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9hZGQgY2xlYXIgYnV0dG9uIHRvIHdpZGdldFxyXG4gICAgZGVmaW5pdGlvbkRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlZmluaXRpb25EZXNjcmlwdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlUHJldmlvdXNXb3JkU2VhcmNoZXNFbGVtZW50cyhcclxuICAgIHdvcmRzdG9yYWdlOiBsb2NhbFN0b3JhZ2VXb3JkW10sXHJcbiAgICBidXR0b25Db250YWluZXI6IEhUTUxEaXZFbGVtZW50XHJcbiAgKSB7XHJcbiAgICBsZXQgYnV0dG9uc2FycjogRGljdGlvbmFyeVNlYXJjaFByZXZpb3VzV29yZEtleUVsZW1lbnRzW10gPSBbXTtcclxuXHJcbiAgICAvL0JlY2F1c2UgdGhlIGxvY2F0b3IgYW5kIHRoZSBMb2NhbCBTdG9yYWdlIHZhbHVlcyBhcmUgdmlhYmxlLCBjcmVhdGUgdGhlIG1hcmt1cFxyXG4gICAgLy9uZWVkZWQgdG8gZGlzcGxheSB0aG9zZSB3b3Jkcy4gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3Igd2lkZ2V0IGZ1bmN0aW9uYWxpdHkuXHJcbiAgICBmb3IgKGxldCB3b3JkQ2FjaGUgb2Ygd29yZHN0b3JhZ2UpIHtcclxuICAgICAgY29uc3Qgd29yZEhlYWRpbmdFbGVtQ29udGFpbmVyID0gYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICBjb25zdCBjYWNoZVdvcmRIZWFkaW5nRWxlbSA9IHdvcmRIZWFkaW5nRWxlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpKTtcclxuICAgICAgY29uc3QgZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0gPSB3b3JkSGVhZGluZ0VsZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICApO1xyXG4gICAgICBkZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uLWNsZWFyXCIpO1xyXG4gICAgICBkZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbS5jbGFzc0xpc3QuYWRkKFwiZGljdGlvbmFyeS13b3JkLWJ0bi1jbGVhclwiKTtcclxuICAgICAgY2FjaGVXb3JkSGVhZGluZ0VsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgY2FjaGVXb3JkSGVhZGluZ0VsZW0uY2xhc3NMaXN0LmFkZChcImRpY3Rpb25hcnktYnRuXCIsIFwiZGljdGlvbmFyeS13b3JkLWJ0blwiKTtcclxuICAgICAgY2FjaGVXb3JkSGVhZGluZ0VsZW0udGV4dENvbnRlbnQgPSB3b3JkQ2FjaGUud29yZDtcclxuXHJcbiAgICAgIGxldCBwcmV2aW91c3dvcmRidG46IERpY3Rpb25hcnlTZWFyY2hQcmV2aW91c1dvcmRLZXlFbGVtZW50cyA9IHtcclxuICAgICAgICB3b3JkOiB3b3JkQ2FjaGUsXHJcbiAgICAgICAgY2FjaGVXb3JkSGVhZGluZ0VsZW06IGNhY2hlV29yZEhlYWRpbmdFbGVtLFxyXG4gICAgICAgIHdvcmRIZWFkaW5nRWxlbUNvbnRhaW5lcjogd29yZEhlYWRpbmdFbGVtQ29udGFpbmVyLFxyXG4gICAgICAgIGRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtOiBkZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbSxcclxuICAgICAgfTtcclxuICAgICAgYnV0dG9uc2Fyci5wdXNoKHByZXZpb3Vzd29yZGJ0bik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnV0dG9uc2FycjtcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gcmVjb3JkIHJlZmVyZW5jZSBlcnJvcnMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ3YkVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgUndiRXJyb3IuY291bnQrKztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGFuIGVsZW1lbnQgaXMgbnVsbCB1c2luZyBxdWVyeVNlbGVjdG9yKClcclxuICAgKlxyXG4gICAqICAgICAgIHRyeSB7XHJcbiAgICogICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuICAgKiAgICAgICB9XHJcbiAgICogICAgICAgY2F0Y2gge1xyXG4gICAqICAgICAgICAgICAvL2Z1bmN0aW9uIGV4Y2VwdGlvbiBoYW5kbGluZ1xyXG4gICAqICAgICAgIH1cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lIC0gQSBuYW1lIGZvciB0aGUgY29tcG9uZW50IGluIHVzZS5cclxuICAgKiBAcGFyYW0gY3NzUXVlcnkgLSBBIGNzcyBzdHJpbmcuXHJcbiAgICogQHBhcmFtIGxvZ01lc3NhZ2UgLSBDaG9vc2UgdG8gbG9nIGEgbWVzc2FnZSB0byBjb25zb2xlLlxyXG4gICAqIEBwYXJhbSBzdXByZXNzRXhjZXB0aW9uIC0gQ2hvb3NlIHRvIHN1cHJlc3MgdGhlIGV4Y2VwdGlvbiBsb2cuXHJcbiAgICogQHJldHVybnMgSFRNTEVsZW1lbnQgZnJvbSBxdWVyeVNlbGVjdG9yKClcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgY29tcG9uZW50TmFtZTogc3RyaW5nLFxyXG4gICAgY3NzUXVlcnk6IHN0cmluZyxcclxuICAgIGxvZ01lc3NhZ2U/OiBib29sZWFuLFxyXG4gICAgc3VwcmVzc0V4Y2VwdGlvbj86IGJvb2xlYW5cclxuICApIHtcclxuICAgIGxldCBlbGVtOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBsZXQgbG9nRXJyTXNzZzogYm9vbGVhbiA9IHRydWU7IC8vTG9nIG1lc3NhZ2Ugb3B0aW9uIGRlZmF1bHRcclxuICAgIGlmICghbG9nTWVzc2FnZSkgbG9nRXJyTXNzZyA9IGxvZ01lc3NhZ2U7XHJcbiAgICBsZXQgc3VwcmVzc0V4Y3B0OiBib29sZWFuID0gZmFsc2U7IC8vU3VwcmVzcyBtZXNzYWdlIG9wdGlvbiBkZWZhdWx0XHJcbiAgICBpZiAoc3VwcmVzc0V4Y2VwdGlvbikgc3VwcmVzc0V4Y3B0ID0gdHJ1ZTtcclxuICAgIGxldCBxdWVyeTogc3RyaW5nID0gYCR7Y3NzUXVlcnl9YDtcclxuXHJcbiAgICAvLyBBZGQgZGljdGlvbmFyeSB3aWRnZXQgaWYgYW4gZWxlbWVudCB3aXRoIHRoYXQgY2xhc3MgaXMgb24gYSBwYWdlXHJcbiAgICB0cnkge1xyXG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgT2JqZWN0LmNyZWF0ZShuZXcgUndiUmVmZXJlbmNlRXJyb3IoXCJHZXRFbGVtZW50XCIsIGBDb3VsZCBub3QgZ2V0IGVsZW1lbnQ6ICcke3F1ZXJ5fSdgKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbSA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2dFcnJNc3NnKSBjb25zb2xlLndhcm4oYCVjTm8gZWxlbWVudCBmb3VuZCB3aXRoIHF1ZXJ5OiAke3F1ZXJ5fS5gLCBcImNvbG9yOiBvcmFuZ2U7XCIpO1xyXG4gICAgICBpZiAoIXN1cHJlc3NFeGNwdClcclxuICAgICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfU51bGxSZWZlcmVuY2VgLCBgRWxlbWVudCBub3QgZm91bmRgKSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGlmIGxvY2FsIHN0b3JhZ2UgaXMgbnVsbC4gT3B0aW9uYWwgY2hvb3NlIHRvIGFsc28gY2hlY2sgaWYgbG9jYWwgc3RvcmFnZSBzdHJpbmcgaXMgZW1wdHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZSAtIEEgbmFtZSBmb3IgdGhlIGNvbXBvbmVudCBpbiB1c2UuXHJcbiAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkncyBuYW1lIHlvdSdyZSBjaGVja2luZyBmb3IuXHJcbiAgICogQHBhcmFtIGNoZWNrRW1wdHlTdHJpbmcgLSBPcHRpb25hbCBwYXJhbWV0ZXIgdG8gY2hlY2sgZm9yIGVtcHR5IGtleS12YWx1ZS5cclxuICAgKiBAcGFyYW0gbG9nTWVzc2FnZSAtIENob29zZSB0byBsb2cgYSBtZXNzYWdlIHRvIGNvbnNvbGUuXHJcbiAgICogQHJldHVybnMgQm9vbGVhbiB0cnVlIG9yIGZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja0xvY2FsU3RvcmFnZUVxdWFsTnVsbChcclxuICAgIGNvbXBvbmVudE5hbWU6IHN0cmluZyxcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgY2hlY2tFbXB0eVN0cmluZz86IGJvb2xlYW4sXHJcbiAgICBsb2dNZXNzYWdlPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgbGV0IGxvZ01zc2c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKCFsb2dNZXNzYWdlKSBsb2dNc3NnID0gbG9nTWVzc2FnZTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YCkgPT0gbnVsbCkge1xyXG4gICAgICBpZiAobG9nTXNzZykgY29uc29sZS5pbmZvKGAlY05vIGxvY2FsIHN0b3JhZ2UgZm9yICR7Y29tcG9uZW50TmFtZX0uYCwgXCJjb2xvcjpwdXJwbGU7XCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjaGVja0VtcHR5U3RyaW5nKSByZXR1cm4gUndiRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VOdWxsb3JFbXB0eShjb21wb25lbnROYW1lLCBrZXksIGxvZ01zc2cpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBpZiBsb2NhbCBzdG9yYWdlIGlzIG51bGwgb3IgZW1wdHkuXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBjb21wb25lbnQgaW4gdXNlLlxyXG4gICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5J3MgbmFtZSB5b3UncmUgY2hlY2tpbmcgZm9yLlxyXG4gICAqIEBwYXJhbSBsb2dNZXNzYWdlIC0gQ2hvb3NlIHRvIGxvZyBhIG1lc3NhZ2UgdG8gY29uc29sZS5cclxuICAgKiBAcmV0dXJucyBCb29sZWFuIHRydWUgb3IgZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrTG9jYWxTdG9yYWdlTnVsbG9yRW1wdHkoY29tcG9uZW50TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgbG9nTWVzc2FnZT86IGJvb2xlYW4pIHtcclxuICAgIGxldCBsb2dNc3NnOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmICghbG9nTWVzc2FnZSkgbG9nTXNzZyA9IGxvZ01lc3NhZ2U7XHJcbiAgICBsZXQgdGVzdDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB0ZXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7a2V5fWApO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGdldCBsb2NhbCBzdG9yYWdlIGtleTogJHtrZXl9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGVzdCA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2dNc3NnKSBjb25zb2xlLndhcm4oYCVjTG9jYWwgc3RvcmFnZSBrZXkgbm90IGZvdW5kOiAke2tleX0uYCwgXCJjb2xvcjogeWVsbG93O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIpO1xyXG4gICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfVJlZmVyZW5jZUV4Y2VwdGlvbmAsIGBLZXkgbm90IGZvdW5kYCkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0ZXN0ID09IFwiXCIgfHwgdGVzdCA9PSBcIltdXCIpIHtcclxuICAgICAgaWYgKGxvZ01zc2cpXHJcbiAgICAgICAgY29uc29sZS53YXJuKGAlY0xvY2FsIHN0b3JhZ2UgdmFsdWUgaXMgZW1wdHkgZm9yIGtleTogJHtrZXl9YCwgXCJjb2xvcjogeWVsbG93O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIpO1xyXG4gICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfVJlZmVyZW5jZUV4Y2VwdGlvbmAsIGBWYWx1ZSBpcyBlbXB0eWApKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHN0b3JlIHJlZmVyZW5jZSBlcnJvciBkYXRhLiAqL1xyXG5leHBvcnQgY2xhc3MgUndiUmVmZXJlbmNlRXJyb3IgZXh0ZW5kcyBSZWZlcmVuY2VFcnJvciB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVmRXJyb3I6IFJlZmVyZW5jZUVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBSZWZlcmVuY2VFcnJvcih0aGlzLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5yZWZFcnJvciA9IGVycjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIGAlYzxSV0I+JWNFeGVjdXRpb24gZXhwZXJpZW5jZWQgYSByZWZlcmVuY2UgZXJyb3I6XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnJlZkVycm9yLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiUmVmZXJlbmNlRXJyb3IuY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gc3RvcmUgc3ludGF4IGVycm9yIGRhdGEuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JTeW50YXhFcnJvciBleHRlbmRzIFN5bnRheEVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzeW50YXhFcnJvcjogU3ludGF4RXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBsZXQgZXJyID0gbmV3IFN5bnRheEVycm9yKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnN5bnRheEVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY0V4ZWN1dGlvbiBleHBlcmllbmNlZCBhIHN5bnRheCBlcnJvcjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMuc3ludGF4RXJyb3IsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JTeW50YXhFcnJvci5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ3YkRvbUV4Y2VwdGlvbiBleHRlbmRzIERPTUV4Y2VwdGlvbiB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgc3RhY2s6IGFueTtcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZG9tRXJyb3I6IERPTUV4Y2VwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGVycm9yOiBhbnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuc3RhY2sgPSBlcnJvcjtcclxuICAgIHRoaXMucGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBlcnIgPSBuZXcgRE9NRXhjZXB0aW9uKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLmRvbUVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY0V4ZWN1dGlvbiBleHBlcmllbmNlZCBhIERPTSBlcnJvcjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMuc3RhY2ssXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JEb21FeGNlcHRpb24uY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSd2JJbnZhbGlkVmFsdWVFcnJvciBleHRlbmRzIFJhbmdlRXJyb3Ige1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIHN5bnRheEVycm9yOiBSYW5nZUVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBSYW5nZUVycm9yKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnN5bnRheEVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY1ZhbHVlIG91dCBvZiByYW5nZSBleGNlcHRpb246XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnN5bnRheEVycm9yLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiU3ludGF4RXJyb3IuY291bnQrKztcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCB7IFJ3YlN5bnRheEVycm9yIH0gZnJvbSBcIi4vcndiRXJyb3JCdXNcIjtcclxuXHJcbi8qKiBBbiBSd2JQYXJzZUpzb24gcGFyc2VzIGpzb24gYW5kIHN0b3JlcyB0aGUgcGFyc2VkIHN0cmluZyB3aXRoIHRoZSByZXN1bHQuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JQYXJzZUpzb24ge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgcmV0dXJuT2JqOiBvYmplY3Q7XHJcbiAgcHVibGljIHBhc3NlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIHBhcnNlU3RyOiBzdHJpbmc7XHJcblxyXG4gIC8qKkNyZWF0ZSB0aGlzIG9iamVjdCB0byBzdG9yZSBwYXJzZSByZXN1bHRzIGFuZCBwYXJzZWRcclxuICAgKiBKU09OIG9iamVjdC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJzZVN0cjogc3RyaW5nKSB7XHJcbiAgICBSd2JQYXJzZUpzb24uY291bnQrKztcclxuICAgIHRoaXMucGFyc2VTdHIgPSBwYXJzZVN0cjtcclxuICAgIHRoaXMucGFzc2VkID0gdGhpcy5wYXJzZUpzb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFyc2VKc29uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5yZXR1cm5PYmogPSBKU09OLnBhcnNlKHRoaXMucGFyc2VTdHIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLnJldHVybk9iaiA9IG51bGw7XHJcbiAgICAgIG5ldyBSd2JTeW50YXhFcnJvcihcIlBhcnNlRXJyb3JcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQW4gUndiUGFyc2VKc29uIHRlc3RzIHdoZXRoZXIgYW4gb2JqZWN0IGNhbiBiZSBzdHJpbmdpZmllZCBpbnRvIGEgdmFsaWRcclxuICoganNvbiBzdHJpbmcuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JTdHJpbmdpZnlKc29uIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIHJldHVyblN0cjogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYXNzZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBqc29uOiBhbnk7XHJcbiAgLyoqQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHN0b3JlIHBhcnNlIHJlc3VsdHMgYW5kIHBhcnNlZFxyXG4gICAqIEpTT04gb2JqZWN0LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xyXG4gICAgUndiU3RyaW5naWZ5SnNvbi5jb3VudCsrO1xyXG4gICAgdGhpcy5qc29uID0ganNvbjtcclxuICAgIHRoaXMucGFzc2VkID0gdGhpcy5zdHJpbmdpZnlKc29uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0cmluZ2lmeUpzb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJldHVyblN0ciA9IEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMucmV0dXJuU3RyID0gbnVsbDtcclxuICAgICAgbmV3IFJ3YlN5bnRheEVycm9yKFwiU3RyaW5naWZ5RXJyb3JcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG4vKipcclxuICogSFRNTCBsaW5rIGVsZW1lbnQgZGF0YS4gVXNlZCB3aXRoIGFuY2hvciB0YWdzLlxyXG4gKi9cclxuY2xhc3MgUndiTGluayB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIC8qKkhUTUwgdGl0bGUgYXR0cmlidXRlICovXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqSW5uZXIgdGV4dCBzdHJpbmcgKi9cclxuICBwdWJsaWMgaW5uZXJUZXh0OiBzdHJpbmc7XHJcbiAgLyoqVGhlIHBhZ2UgdGhlIGxpbmsgaXMgYXNzb2NpYXRlZCB0byAqL1xyXG4gIHB1YmxpYyBwYWdlTmFtZTogc3RyaW5nO1xyXG4gIC8qKkhUTUwgaHJlZiBhdHRyaWJ1dGUgKi9cclxuICBwdWJsaWMgaFJlZmVyZW5jZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBpbm5lclRleHQ6IHN0cmluZywgcGFnZU5hbWU6IHN0cmluZywgaFJlZmVyZW5jZTogc3RyaW5nKSB7XHJcbiAgICAodGhpcy50aXRsZSA9IHRpdGxlKSxcclxuICAgICAgKHRoaXMuaW5uZXJUZXh0ID0gaW5uZXJUZXh0KSxcclxuICAgICAgKHRoaXMucGFnZU5hbWUgPSBwYWdlTmFtZSksXHJcbiAgICAgICh0aGlzLmhSZWZlcmVuY2UgPSBoUmVmZXJlbmNlKSxcclxuICAgICAgUndiTGluay5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUndiTGluaztcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmludGVyZmFjZSBTY3JpcHRSdW50aW1lIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhcnRNYXJrOiBQZXJmb3JtYW5jZU1hcms7XHJcbiAgZW5kTWFyazogUGVyZm9ybWFuY2VNYXJrO1xyXG59XHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHJlY29yZCBwZXJmb3JtYW5jZSBzdGFydCBhbmQgZW5kIG1hcmtzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSd2JQZXJmIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY3JpcHRSdW50aW1lTWFya3M6IFNjcmlwdFJ1bnRpbWUgPSB7XHJcbiAgICBuYW1lOiBudWxsLFxyXG4gICAgc3RhcnRNYXJrOiBudWxsLFxyXG4gICAgZW5kTWFyazogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKiogSW5zdGFudGlhdGluZyBhIFNjcmlwdFBlcmYgcmVjb3JkcyB0aGUgcGVyZm9ybWFuY2Ugc3RhcnQgbWFyay4gKi9cclxuICBjb25zdHJ1Y3RvcihzY3JpcHROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWUgPSBzY3JpcHROYW1lO1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3Muc3RhcnRNYXJrID0gcGVyZm9ybWFuY2UubWFyayhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfS1zdGFydGApO1xyXG4gICAgUndiUGVyZi5jb3VudCsrO1xyXG4gIH1cclxuXHJcbiAgLyoqIENhbGwgZW5kKCkgdG8gc2V0IHRoZSBlbmQgdGltZSBzdGFtcC4gKi9cclxuICBwdWJsaWMgZW5kKCkge1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MuZW5kTWFyayA9IHBlcmZvcm1hbmNlLm1hcmsoYCR7dGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZX0tZW5kYCk7XHJcbiAgICB0aGlzLm1lYXN1cmUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBBIGNvbnNvbGUgb3V0cHV0IG9mIHRoaXMgb2JqZWN0J3MgcGVyZm9ybWFuY2UgbWVhc3VyZW1lbnQuICovXHJcbiAgcHJpdmF0ZSBtZWFzdXJlKCkge1xyXG4gICAgbGV0IG1lYXN1cmUgPSBwZXJmb3JtYW5jZS5tZWFzdXJlKFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lLFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5zdGFydE1hcmsubmFtZSxcclxuICAgICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MuZW5kTWFyay5uYW1lXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZX0gZXhlY3V0aW9uIHRpbWUgaXM6ICR7bWVhc3VyZS5kdXJhdGlvbn1gKTtcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCB7IFRvRG9MaXN0RWxlbWVudHMgfSBmcm9tIFwiLi93aWRnZXRNYXJrdXBFbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VUb0RvQ2FjaGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VDYWNoZXNcIjtcclxuaW1wb3J0IHsgUndiUGFyc2VKc29uLCBSd2JTdHJpbmdpZnlKc29uIH0gZnJvbSBcIi4vcndiSnNvbkNvbnZlcnRlclwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4vcndiRXJyb3JCdXNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIFRvRG9MaXN0IGlzIGFuIEhUTUwgd2lkZ2V0IHRvIHN0b3JlIFRvLURvcyBpbiB0aGUgYnJvd3Nlci4gSW5zdGFudGlhdGUgdGhlXHJcbiAqICBUb0RvTGlzdCBjb25zdHJ1Y3RvciB0byBjcmVhdGUgd2lkZ2V0IG1hcmt1cCBhbmQgZnVuY3Rpb25hbGl0eS4gVG8tRG9zIGFyZVxyXG4gKiAgc3RvcmVkIGluIHRoZSBicm93c2VyJ3MgTG9jYWwgU3RvcmFnZSBhbmQgcmVhZCBhbmQgcmVuZGVyZWQgd2hlbiB0aGUgcGFnZSBsb2Fkcy5cclxuICpcclxuICogVG8gY3JlYXRlIGEgVG9Eb0xpc3QsIGFuIGVsZW1lbnQgb24gdGhlIHBhZ2UgbXVzdCBoYXZlICcuVG9Eb0xpc3QnIGNsYXNzLiBDYWxsIHRoZVxyXG4gKiAgY2xhc3MgY29uc3RydWN0b3IsIHBhc3NpbmcgaW4gdGhhdCBlbGVtZW50IHRvIGNyZWF0ZSB0aGUgd2lkZ2V0LlxyXG4gKlxyXG4gKiAgICAgICBjb25zdCB0b0RvV2lkZ2V0ID0gbmV3IFRvRG9MaXN0KCk7XHJcbiAqICAgICAgIHRvRG9XaWRnZXQuY3JlYXRlVG9Eb0xpc3RXaWRnZXQodG9Eb3NFbGVtZW50KTtcclxuICpcclxuICogVGhlbiwgdGhlIHdpZGdldCBpcyBjcmVhdGVkIGFuZCBUby1Eb3MgYXJlIHJldHJpZXZlZCBmcm9tIHN0b3JhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3Qge1xyXG4gIC8qKlRvdGFsIG51bWJlciBvZiBUb0RPcyovXHJcbiAgcHVibGljIHN0YXRpYyB0b0RvczogbnVtYmVyID0gMDtcclxuICAvKipXaWRnZXQgZWxlbWVudHMgdXNlZCB0byBwb3B1bGF0ZSB0b2RvcyAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHRvRG9FbGVtZW50czogVG9Eb0xpc3RFbGVtZW50cztcclxuICBwcml2YXRlIHN0YXRpYyB0b0RvSW5TdG9yYWdlOiBsb2NhbFN0b3JhZ2VUb0RvQ2FjaGVbXTtcclxuICAvKipUb2RvIEhUTUwgZWxlbWVudHMgKi9cclxuICBwcml2YXRlIGxpc3RFbGVtZW50czogVG9Eb0xpc3RFbGVtZW50cztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgVG8tRG8gbGlzdCB3aWRnZXQncyBlbGVtZW50cy5cclxuICAgKlxyXG4gICAqICAgICAgVG9Eb0xpc3QuVG9Eb0VsZW1lbnRzXHJcbiAgICogQHBhcmFtIHRvRG9FbGVtZW50cyBXaWRnZXQgRWxlbWVudHMgLS0ga2V5IHdpZGdldCBmdW5jdGlvbiBlbGVtZW50cy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHNldFRvRG9MaXN0RWxlbWVudHModG9Eb0VsZW1lbnRzOiBUb0RvTGlzdEVsZW1lbnRzKSB7XHJcbiAgICBUb0RvTGlzdC50b0RvRWxlbWVudHMgPSB0b0RvRWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSYW5kb20gV2ViIEJpdHMgdXNlcyBtdWx0aXBsZSBsb2NhdGlvbnMgdG8gYXBwbHkgdGhlIFRvLURvIExpc3Qgd2lkZ2V0LiBDcmVhdGVcclxuICAgKiAgdGhlIGxpc3QgbWFya3VwLCBwYXNzaW5nIGluIGEgcmVmZXJlbmNlIGVsZW1lbnQgZm9yIHBsYWNlbWVudCBvZiB0aGUgd2lkZ2V0LlxyXG4gICAqIEBwYXJhbSBlbGVtIC0gd2lkZ2V0IGlzIHBsYWNlZCBhZnRlciB0aGlzIHJlZmVyZW5jZSBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVUb0RvTGlzdFdpZGdldChlbGVtOiBFbGVtZW50KSB7XHJcbiAgICAvL0luc2VydCB0aGUgd2lkZ2V0IGFmdGVyIHRoZSBwYXNzZWQgaW4gXCJlbGVtXCJcclxuICAgIC8vRGVwZW5kZW50IG9uIHRoZSBwYWdlLCB0b2RvIHdpZGdldCBtYXkgaGF2ZSBwcmUtZXhpc3RpbmcgbWFya3VwIGluIHBsYWNlXHJcbiAgICAvL1N3aXRjaCBhZ2FpbnN0IHRoZSBjdXJyZW50IHBhZ2UgdG8gZGV0ZXJtaW5lIG1hcmt1cCBuZWVkZWRcclxuICAgIGlmIChlbGVtID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWNUaGVyZSBpcyBubyBcIlRvRG9MaXN0XCIgY2xhc3Mgb24gdGhpcyBwYWdlLmAsIFwiY29sb3I6b3JhbmdlO1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcIlRvRG9MaXN0XCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBBZGQgXCJUb0RvTGlzdFwiIGNsYXNzIHRvICR7ZWxlbS5ub2RlTmFtZX0gbm9kZS5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHtcclxuICAgICAgY2FzZSBcIi9SYW5kb21XZWJCaXRzL1wiOlxyXG4gICAgICBjYXNlIFwiL1JhbmRvbVdlYkJpdHMvaW5kZXguaHRtbFwiOlxyXG4gICAgICBjYXNlIFwiL2luZGV4Lmh0bWxcIjpcclxuICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgY2FzZSBcIi9kaXN0L2luZGV4Lmh0bWxcIjpcclxuICAgICAgICAvL01hcmt1cCBkb2VzIG5vdCBleGlzdCBvbiB0aGUgcGFnZVxyXG4gICAgICAgIC8vQ3JlYXRlIHRhYmxlIGVsZW1lbnRzIG5lZWRlZCBmb3IgdGhlIHRvZG8gbGlzdFxyXG4gICAgICAgIGNvbnN0IFRPRE9MSVNUU0VDVElPTiA9IGVsZW0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIikpO1xyXG4gICAgICAgIGNvbnN0IEhFQURFUiA9IFRPRE9MSVNUU0VDVElPTi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIikpO1xyXG4gICAgICAgIGNvbnN0IERJViA9IFRPRE9MSVNUU0VDVElPTi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICBjb25zdCBUQUJMRSA9IERJVi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIikpO1xyXG4gICAgICAgIGNvbnN0IFRIRUFEID0gVEFCTEUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpKTtcclxuICAgICAgICBjb25zdCBUUjEgPSBUSEVBRC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xyXG4gICAgICAgIGNvbnN0IFRITEVGVCA9IFRSMS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIikpO1xyXG4gICAgICAgIGNvbnN0IFRITUlERExFID0gVFIxLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKSk7XHJcbiAgICAgICAgY29uc3QgVEJPRFkgPSBUQUJMRS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpO1xyXG4gICAgICAgIGNvbnN0IFRGT09UID0gVEFCTEUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRmb290XCIpKTtcclxuICAgICAgICBjb25zdCBUUjMgPSBURk9PVC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xyXG4gICAgICAgIGNvbnN0IFREM0xFRlQgPSBUUjMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKTtcclxuICAgICAgICBjb25zdCBURDNJTiA9IFREM0xFRlQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKTtcclxuICAgICAgICBjb25zdCBURDNNSURETEUgPSBUUjMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKTtcclxuICAgICAgICBjb25zdCBJTlBVVCA9IFREM01JRERMRS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpO1xyXG5cclxuICAgICAgICAvL0FkZCBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXNcclxuICAgICAgICBUQUJMRS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGZvb3RcIikpO1xyXG4gICAgICAgIFREM0lOLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJBZGRcIik7XHJcbiAgICAgICAgVEQzSU4uc2V0QXR0cmlidXRlKFwiVmFsdWVcIiwgXCJBZGRcIik7XHJcbiAgICAgICAgSU5QVVQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIml0ZW1JTlBVVFwiKTtcclxuICAgICAgICBJTlBVVC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICBJTlBVVC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiSW5wdXRcIik7XHJcbiAgICAgICAgSU5QVVQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvSW5wdXRcIik7XHJcbiAgICAgICAgSU5QVVQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgdG8tZG8gaXRlbVwiKTtcclxuICAgICAgICBIRUFERVIudGV4dENvbnRlbnQgPSBcIlRvLURvOlwiO1xyXG4gICAgICAgIFRPRE9MSVNUU0VDVElPTi5pZCA9IFwiVG9ET1wiO1xyXG4gICAgICAgIFRITEVGVC50ZXh0Q29udGVudCA9IFwiQ29tcGxldGU/XCI7XHJcbiAgICAgICAgVEhNSURETEUudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgVEJPRFkuaWQgPSBcIlRvRG9JdGVtc1wiO1xyXG4gICAgICAgIFREM0lOLmlkID0gXCJBZGRCdXR0b25cIjtcclxuICAgICAgICBURDNJTi50eXBlID0gXCJidXR0b25cIjtcclxuXHJcbiAgICAgICAgLy9DcmVhdGUgYSBzYW1wbGUgdG8gZG8gaXRlbSAoaXQgaXMgbm90IHN0b3JlZCBpbiBjYWNoZSlcclxuICAgICAgICB0aGlzLmNyZWF0ZVNhbXBsZVRvX0RvKFRCT0RZKTtcclxuXHJcbiAgICAgICAgLy9XaXRoIHRoZSBlbGVtZW50cyBjcmVhdGVkLCBzZXQgdGhlIGNsYXNzIGxpc3QgZWxlbWVudHNcclxuICAgICAgICB0aGlzLmdldFRvRG9MaXN0RWxlbWVudHMoKTtcclxuICAgICAgICBUb0RvTGlzdC5zZXRUb0RvTGlzdEVsZW1lbnRzKHRoaXMubGlzdEVsZW1lbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVRvRG9MaXN0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0RvRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIvUmFuZG9tV2ViQml0cy9wYWdlcy90b2Rvcy5odG1sXCI6XHJcbiAgICAgIGNhc2UgXCIvcGFnZXMvdG9kb3MuaHRtbFwiOlxyXG4gICAgICAgIC8vTWFya3VwIGV4aXN0cyBvbiB0aGUgcGFnZSBhbHJlYWR5XHJcbiAgICAgICAgLy9XaXRoIHRoZSBlbGVtZW50cyBjcmVhdGVkLCBzZXQgdGhlIGNsYXNzIGxpc3QgZWxlbWVudHNcclxuICAgICAgICB0aGlzLmdldFRvRG9MaXN0RWxlbWVudHMoKTtcclxuICAgICAgICBUb0RvTGlzdC5zZXRUb0RvTGlzdEVsZW1lbnRzKHRoaXMubGlzdEVsZW1lbnRzKTtcclxuXHJcbiAgICAgICAgLy9DcmVhdGUgYSBzYW1wbGUgdG8gZG8gaXRlbSBkdWUgdG8gY2FjaGUgZW1wdHlcclxuICAgICAgICBjb25zdCBIVEJPRFkgPSBUb0RvTGlzdC50b0RvRWxlbWVudHMudG9Eb1RhYmxlQm9keTtcclxuICAgICAgICBpZiAoSFRCT0RZICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlU2FtcGxlVG9fRG8oSFRCT0RZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9wdWxhdGVUb0RvTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Eb0V2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWxlbWVudCBpcyBub3QgdmFsaWQuIFBsZWFzZSBlbnN1cmUgYSB2YWxpZCBlbGVtZW50IGZvciBUb0RvIGxpc3Qgd2lkZ2V0IHRvIGZvbGxvdy5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgZm9yIFRvLURvIGl0ZW1zIGZyb20gTG9jYWwgU3RvcmFnZS5cclxuICAgKiBAcmV0dXJucyBib29sZWFuIHRydWUgb3IgZmFsc2VcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBnZXRUb0RvSW5TdG9yYWdlKGNoZWNrRW1wdHlWYWx1ZVN0cmluZzogYm9vbGVhbiwgbG9nTWVzc2FnZTogYm9vbGVhbikge1xyXG4gICAgaWYgKFJ3YkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlRXF1YWxOdWxsKFwiVG9Eb0xpc3RcIiwgXCJUb0Rvc1wiLCBjaGVja0VtcHR5VmFsdWVTdHJpbmcsIGxvZ01lc3NhZ2UpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBwYXJzZVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9Eb3NcIik7XHJcbiAgICBsZXQgcGFyc2VUZXN0ID0gT2JqZWN0LmNyZWF0ZShuZXcgUndiUGFyc2VKc29uKHBhcnNlU3RyKSk7XHJcbiAgICBpZiAoIXBhcnNlVGVzdC5wYXNzZWQpIHtcclxuICAgICAgLy9wYXJzZWQgSlNPTiBpcyBtYWxmb3JtZWRcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUb0Rvc1wiKTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY0RlbGV0ZWQgc3RvcmFnZSBrZXk6IFRvRG9zYCxcclxuICAgICAgICBcImNvbG9yOm9yYW5nZTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICAgIFwiY29sb3I6b3JhbmdlO2ZvbnQtc2l6ZToxNnB4O1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvRG9JblN0b3JhZ2UgPSBwYXJzZVRlc3QucmV0dXJuT2JqO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHYXRoZXIgbmVjZXNzYXJ5IGVsZW1lbnRzIGZyb20gdGhlIGNyZWF0ZWQgd2lkZ2V0LlxyXG4gICAqIEByZXR1cm5zIFRvRG9FbGVtZW50czogVG9Eb0xpc3RFbGVtZW50c1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0VG9Eb0xpc3RFbGVtZW50cygpIHtcclxuICAgIC8vR2F0aGVyIG5lY2Vzc2FyeSBlbGVtZW50cyBmcm9tIHRoZSBjcmVhdGVkIHdpZGdldFxyXG4gICAgLy9FYWNoIHdpZGdldCBsb2NhdGlvbidzIGVsZW1lbnRzIG1heSB2YXJ5LCBzbyBhIGNhbGwgb2YgZ2V0VG9Eb0xpc3RFbGVtZW50cygpXHJcbiAgICAvL2xvY2F0ZXMgdGhlIHBhZ2UncyBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgVG9Eb0VsZW1lbnRzIGludGVyZmFjZS5cclxuICAgIGxldCB0b0RvVGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBsZXQgdG9Eb1RhYmxlQm9keTogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XHJcbiAgICBsZXQgYWRkQnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IGFkZEl0ZW1Ub0VudGVyOiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHRvRG9UYWJsZSA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiVG9Eb0xpc3RcIiwgXCIjVG9ETyB0YWJsZVwiLCB0cnVlLCBmYWxzZSkgYXMgSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHRvRG9UYWJsZUJvZHkgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgICAgXCJUb0RvTGlzdFwiLFxyXG4gICAgICBcIiNUb0RvSXRlbXNcIixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgZmFsc2VcclxuICAgICkgYXMgSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ7XHJcbiAgICBhZGRCdXR0b24gPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIlRvRG9MaXN0XCIsIFwiI0FkZEJ1dHRvblwiLCB0cnVlLCBmYWxzZSkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGFkZEl0ZW1Ub0VudGVyID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXHJcbiAgICAgIFwiVG9Eb0xpc3RcIixcclxuICAgICAgJ2lucHV0W25hbWU9XCJpdGVtSU5QVVRcIl0nLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGlmICh0b0RvVGFibGUgPT0gbnVsbCB8fCB0b0RvVGFibGVCb2R5ID09IG51bGwgfHwgYWRkQnV0dG9uID09IG51bGwgfHwgYWRkSXRlbVRvRW50ZXIgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJBbiBlbGVtZW50IGlzIG1pc3NpbmcuIFRoZSB0b2RvIGxpc3Qgd2lkZ2V0IG1heSBub3QgZnVuY3Rpb24gYXMgZXhwZWN0ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0b0RvRWxlbWVudHM6IFRvRG9MaXN0RWxlbWVudHMgPSB7XHJcbiAgICAgIHRvRG9UYWJsZTogdG9Eb1RhYmxlLFxyXG4gICAgICB0b0RvVGFibGVCb2R5OiB0b0RvVGFibGVCb2R5LFxyXG4gICAgICBhZGRCdXR0b246IGFkZEJ1dHRvbixcclxuICAgICAgYWRkSXRlbVRvRW50ZXI6IGFkZEl0ZW1Ub0VudGVyLFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlzdEVsZW1lbnRzID0gdG9Eb0VsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIFRvLURvIHRvIExvY2FsIFN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIGRlc2NyaXB0aW9uIC0gVGhlIFVJIGZvcm0gaW5wdXQgZGVzY3JpcHRpb24uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGRUb0RvVG9TdG9yYWdlKGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIC8vQWRkIHRoZSBUb0RvcyBhcnJheSB0byBsb2NhbCBjYWNoZS5cclxuICAgIC8vVGhlICdsb2NhbHN0b3JhZ2V0b2RvY2FjaGUnIGludGVyZmFjZSBzdHJ1Y3R1cmVzIHRoZSBkYXRhIGZvciBsYXRlciByZXRyaWV2YWwuXHJcbiAgICBsZXQgdG9EbzogbG9jYWxTdG9yYWdlVG9Eb0NhY2hlID0ge1xyXG4gICAgICBpbkNhY2hlOiBmYWxzZSxcclxuICAgICAgdG9Eb0l0ZW06IGRlc2NyaXB0aW9uLFxyXG4gICAgfTtcclxuICAgIGxldCB0b0RvczogYW55ID0gW107IC8vVG9EbyBhcnJheVxyXG4gICAgbGV0IHN0cmdmeTtcclxuXHJcbiAgICBjb25zdCBzdHJpbmdpZnlUb0RvID0gKHRvRG9TdHI6IGFueSkgPT4ge1xyXG4gICAgICAvL0NhbGwgUldCU3RyaW5naWZ5SlNPTiB0byBzdHJpbmdpZnkgdGhlIG9iamVjdFxyXG4gICAgICBsZXQgdG9Eb3NTdHJnZnlUZXN0ID0gT2JqZWN0LmNyZWF0ZShuZXcgUndiU3RyaW5naWZ5SnNvbih0b0RvU3RyKSk7XHJcbiAgICAgIGlmICghdG9Eb3NTdHJnZnlUZXN0LnBhc3NlZCkge1xyXG4gICAgICAgIC8vTE9HTEVBRlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9Eb3NTdHJnZnlUZXN0LnJldHVyblN0cjtcclxuICAgIH07XHJcbiAgICAvL0ZpcnN0LCByZWFkIGN1cnJlbnQgTG9jYWwgU3RvcmFnZSBUb0Rvc1xyXG4gICAgbGV0IHRvRG9zU3RvcmFnZUNhY2hlID0gVG9Eb0xpc3QuZ2V0VG9Eb0luU3RvcmFnZShmYWxzZSwgZmFsc2UpO1xyXG4gICAgaWYgKHRvRG9zU3RvcmFnZUNhY2hlKSB7XHJcbiAgICAgIHRvRG9zID0gVG9Eb0xpc3QudG9Eb0luU3RvcmFnZTtcclxuICAgICAgdG9Eb3MucHVzaCh0b0RvKTtcclxuICAgICAgLy9DYWxsIFJXQlN0cmluZ2lmeUpTT04gdG8gc3RyaW5naWZ5IHRoZSBvYmplY3RcclxuICAgICAgc3RyZ2Z5ID0gc3RyaW5naWZ5VG9Ebyh0b0Rvcyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9Eb3NcIiwgc3RyZ2Z5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvRG9zLnB1c2godG9Ebyk7XHJcbiAgICAgIC8vQ2FsbCBSV0JTdHJpbmdpZnlKU09OIHRvIHN0cmluZ2lmeSB0aGUgb2JqZWN0XHJcbiAgICAgIHN0cmdmeSA9IHN0cmluZ2lmeVRvRG8odG9Eb3MpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRvRG9zXCIsIHN0cmdmeSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAlYzxSV0I+JWNDcmVhdGVkIHRvLWRvIGNhY2hlIGtleTogVG9Eb3NgLFxyXG4gICAgICAgIFwiY29sb3I6Y3lhbjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICAgIFwiY29sb3I6Y3lhbjtmb250LXNpemU6MTZweDtcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYCVjPFJXQj4lY0FkZGVkIHRvLWRvIGNhY2hlOiAke2Rlc2NyaXB0aW9ufWAsIFwiY29sb3I6Y3lhbjtmb250LXdlaWdodDpib2xkO1wiLCBcImNvbG9yOmN5YW47XCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIFRvLURvIGl0ZW0gZnJvbSBMb2NhbCBTdG9yYWdlLiBUaGUgcmVxdWVzdGVkIFRvLURvIHRvIHJlbW92ZSBpc1xyXG4gICAqICBwdWxsZWQgaW5kaXZpZHVhbGx5IGZyb20gdGhlIGtleS12YWx1ZSBwYWlyIG9iamVjdC5cclxuICAgKiBAcGFyYW0gaXRlbSAtIHRoZSBUby1EbyBpdGVtIHJlcXVlc3RlZCB0byByZW1vdmVcclxuICAgKi9cclxuICBwcml2YXRlIHJlbW92ZVRvRG9Gcm9tU3RvcmFnZShpdGVtOiBzdHJpbmcpIHtcclxuICAgIFRvRG9MaXN0LnRvRG9JblN0b3JhZ2UgPSBUb0RvTGlzdC50b0RvSW5TdG9yYWdlLmZpbHRlcih0b0RvID0+IHRvRG8udG9Eb0l0ZW0gIT09IGl0ZW0pO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGAlYzxSV0I+JWNEZWxldGVkIHRvZG8gY2FjaGU6ICR7aXRlbX1gLFxyXG4gICAgICBcImNvbG9yOmRhcmtjeWFuO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6ZGFya2N5YW47XCJcclxuICAgICk7XHJcbiAgICBsZXQgdG9Eb0luU3RvcmFnZVN0cmdmeVRlc3QgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JTdHJpbmdpZnlKc29uKFRvRG9MaXN0LnRvRG9JblN0b3JhZ2UpKTtcclxuICAgIGlmICghdG9Eb0luU3RvcmFnZVN0cmdmeVRlc3QucGFzc2VkKSB7XHJcbiAgICAgIC8vTE9HTEVBRlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQganNvblN0ciA9IHRvRG9JblN0b3JhZ2VTdHJnZnlUZXN0LnJldHVyblN0cjtcclxuICAgIGlmIChqc29uU3RyID09IFwiXCIgfHwganNvblN0ciA9PSBcIltdXCIpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJUb0Rvc1wiKTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY0RlbGV0ZWQgc3RvcmFnZSBrZXk6IFRvRG9zYCxcclxuICAgICAgICBcImNvbG9yOmRhcmtjeWFuO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpkYXJrY3lhbjtmb250LXNpemU6MTZweDtcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRvRG9zXCIsIGpzb25TdHIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSBuZWNlc3NhcnkgbWFya3VwIHRvIGFkZCBhIHJvdyB0byB0aGUgVG8tRG8gdGFibGUuXHJcbiAgICogIEEgcm93IGNvbnNpc3RzIG9mIHRocmVlIGNvbHVtbnM6IGEgY29tcGxldGUgdGljay1ib3gsIGEgZGVzY3JpcHRpb24sIGFuZCBhIGRlbGV0ZSBidXR0b24uXHJcbiAgICogQHBhcmFtIGRlc2NyaXB0aW9uIC0gVXNlciBmb3JtIGlucHV0IHRvIGFkZCBhcyBhIGRlc2NyaXB0aW9uLlxyXG4gICAqIEBwYXJhbSBmaXJzdFBhaW50IC0gQm9vbGVhbiB2YWx1ZSB1c2VkIGJ5IGFkZGluZyBsaXN0IHN0b3JhZ2VcclxuICAgKi9cclxuICBwcml2YXRlIGFkZFRvRG9Sb3coZGVzY3JpcHRpb246IHN0cmluZywgZmlyc3RQYWludDogYm9vbGVhbikge1xyXG4gICAgLy9DcmVhdGUgYSB0YWJsZSByb3cgd2l0aCBjaGVja2JveCBhbmQgZGVsZXRlIG9wdGlvbnNcclxuICAgIGNvbnN0IFRBQkxFQk9EWUlURU0gPSBUb0RvTGlzdC50b0RvRWxlbWVudHMudG9Eb1RhYmxlQm9keTtcclxuICAgIGNvbnN0IFRBQkxFRlJBRyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IE5FV1JPVyA9IFRBQkxFRlJBRy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpOyAvL0FkZCByb3dcclxuICAgIGNvbnN0IEZJUlNUQ09MID0gTkVXUk9XLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSk7IC8vVGFibGUgZmlyc3QgZGF0YVxyXG4gICAgY29uc3QgQ0hFQ0tCT1ggPSBGSVJTVENPTC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpOyAvL0FkZCBjaGVja2JveFxyXG4gICAgY29uc3QgTkVXSVRFTSA9IE5FV1JPVy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpOyAvL1RhYmxlIHNlY29uZCBkYXRhXHJcbiAgICBjb25zdCBTRUNPTkRDT0wgPSBORVdST1cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKTsgLy9UYWJsZSB0aGlyZCBkYXRhXHJcbiAgICBjb25zdCBERUxCT1ggPSBTRUNPTkRDT0wuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKTsgLy9BZGQgZGVsZXRlYm94XHJcblxyXG4gICAgLy9BZGQgYXR0cmlidXRlcyBhbmQgcHJvcGVydHkgdmFsdWVzXHJcbiAgICBDSEVDS0JPWC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICBDSEVDS0JPWC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2hlY2tib3hcIik7XHJcbiAgICBDSEVDS0JPWC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiRGVsZXRlXCIpO1xyXG4gICAgTkVXSVRFTS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwibnVtXCIsXHJcbiAgICAgIFRvRG9MaXN0LnRvRG9zXHJcbiAgICAgICAgPyAoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjVG9ETyB0ZFtudW1dXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChOdW1iZXIoZWxlbT8uZ2V0QXR0cmlidXRlKFwibnVtXCIpKSB8fCAtMTAwMCkgKyBUb0RvTGlzdC50b0RvcykudG9TdHJpbmcoKTtcclxuICAgICAgICAgIH0pKClcclxuICAgICAgICA6ICgxKS50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgTkVXSVRFTS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uOyAvL1BvcHVsYXRlIHNlY29uZCBjb2xcclxuICAgIFRvRG9MaXN0LnRvRG9zKys7IC8vTnVtYmVyIG9mIEl0ZW1zXHJcbiAgICBERUxCT1guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcclxuICAgIERFTEJPWC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkRlbGV0ZVwiKTtcclxuXHJcbiAgICBpZiAoZmlyc3RQYWludCkge1xyXG4gICAgICAvL0FkZCB0byBsaXN0IHN0b3JhZ2VcclxuICAgICAgdGhpcy5hZGRUb0RvVG9TdG9yYWdlKGRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0FkZCB0aGUgcm93IHRvIHRoZSBUb0RvcyB0YWJsZVxyXG4gICAgVEFCTEVCT0RZSVRFTS5hcHBlbmRDaGlsZChUQUJMRUZSQUcpO1xyXG4gICAgY29uc29sZS5sb2coYCVjPFJXQj4lY0NyZWF0ZWQgdG8tZG8gdGFibGUgcm93YCwgXCJjb2xvcjpnb2xkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsIFwiY29sb3I6Z29sZDtcIik7XHJcblxyXG4gICAgLy9BZGQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHdoZW4gJ2RlbGV0ZScgaXMgY2xpY2tlZFxyXG4gICAgREVMQk9YLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVsZXRlQnV0dG9uKERFTEJPWCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB0byBjcmVhdGUgdGhlIFRvLURvIGl0ZW0gcm93cyBmcm9tIFRvLURvcyBzdG9yZWQgaW4gdGhlIGJyb3dzZXIgTG9jYWwgU3RvcmFnZS5cclxuICAgKi9cclxuICBwcml2YXRlIHBvcHVsYXRlVG9Eb0xpc3QoKSB7XHJcbiAgICBpZiAoVG9Eb0xpc3QuZ2V0VG9Eb0luU3RvcmFnZSh0cnVlLCBmYWxzZSkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUb0RvTGlzdC50b0RvSW5TdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb0RvUm93KFRvRG9MaXN0LnRvRG9JblN0b3JhZ2VbaV0udG9Eb0l0ZW0sIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGJ1dHRvbiBmdW5jdGlvbmFsaXR5LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkVG9Eb0V2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgQUREQlVUVE9OID0gVG9Eb0xpc3QudG9Eb0VsZW1lbnRzLmFkZEJ1dHRvbjtcclxuICAgIGNvbnN0IEFERElURU1FTlRFUiA9IFRvRG9MaXN0LnRvRG9FbGVtZW50cy5hZGRJdGVtVG9FbnRlcjtcclxuICAgIGlmIChBRERCVVRUT04gPT0gbnVsbCAmJiBBRERJVEVNRU5URVIgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IHdhcyBub3QgZm91bmQgb3IgaXMgbnVsbFwiKTtcclxuICAgIH1cclxuICAgIC8qKkFkZCBpbnB1dCB0ZXh0IHRvIHRoZSB0b2RvIGxpc3QgZnJvbSBjbGlja2luZyB0aGUgYWRkIGJ1dHRvbiovXHJcbiAgICBBRERCVVRUT04uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5hZGRUb0RvUm93KEFERElURU1FTlRFUi52YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgIEFERElURU1FTlRFUi52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuICAgIC8qKkFkZCBpbnB1dCB0ZXh0IHRvIHRoZSB0b2RvIGxpc3Qgd2hlbiB1c2luZyBrZXkgZW50ZXIqL1xyXG4gICAgQURESVRFTUVOVEVSLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5jb2RlID09IFwiTnVtcGFkRW50ZXJcIiB8fCBlLmNvZGUgPT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb0RvUm93KEFERElURU1FTlRFUi52YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgQURESVRFTUVOVEVSLnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmdW5jdGlvbiBkZXRlcm1pbmluZyB0aGUgZGVsZXRlIGJ1dHRvbi4gSXRlbXMgYXJlIGRlbGV0ZWQgd2hlbiBwdXNoZWQsIGJ1dCBhcmVcclxuICAgKiAgbm90IHJlbW92ZWQgZnJvbSBzdG9yYWdlIHdpdGhvdXQgJ0NvbXBsZXRlPycgY2hlY2tlYm94IGNoZWNrZWQuXHJcbiAgICogQHBhcmFtIGJveCBpbnB1dCBlbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkZWxldGVCdXR0b24oYm94OiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGJveC5wYXJlbnROb2RlID09IG51bGwgfHxcclxuICAgICAgYm94LnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nID09IG51bGwgfHxcclxuICAgICAgYm94LnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZyA9PSBudWxsXHJcbiAgICApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhIHRhYmxlIGVsZW1lbnQuXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm93Q2hrQnggPSA8SFRNTEVsZW1lbnQ+Ym94LnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcclxuICAgIC8qKiBJbnB1dCBlbGVtZW50ICovXHJcbiAgICBjb25zdCByb3dDaGtCeElOID0gPEhUTUxJbnB1dEVsZW1lbnQ+cm93Q2hrQnguY2hpbGROb2Rlc1swXTtcclxuICAgIGNvbnN0IHRvRG9UYWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IFRvRG9MaXN0LnRvRG9FbGVtZW50cy50b0RvVGFibGU7XHJcbiAgICBjb25zdCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IDxIVE1MVGFibGVSb3dFbGVtZW50PmJveC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICBsZXQgaSA9IHRyLnJvd0luZGV4O1xyXG4gICAgY29uc3QgdmFsdWUgPSBib3gucGFyZW50Tm9kZS5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQ7XHJcbiAgICBpZiAocm93Q2hrQnhJTi5jaGVja2VkKSB7XHJcbiAgICAgIC8vcmVtb3ZlIHJvdyBzaW5jZSBjb21wbGV0ZWRcclxuICAgICAgdG9Eb1RhYmxlLmRlbGV0ZVJvdyhpKTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY0RlbGV0ZWQgdG9kbyByb3c6ICR7Ym94LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudH1gLFxyXG4gICAgICAgIFwiY29sb3I6Z29sZGVucm9kO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpnb2xkZW5yb2Q7XCJcclxuICAgICAgKTtcclxuICAgICAgaWYgKHZhbHVlICE9IFwiQWRkIGEgVG9ETyBJdGVtLlwiKSB7XHJcbiAgICAgICAgVG9Eb0xpc3QudG9Eb3MtLTtcclxuXHJcbiAgICAgICAgLy9kZWxldGUgYXNzb2NpYXRlZCBzdG9yYWdlIGl0ZW1cclxuICAgICAgICB0aGlzLnJlbW92ZVRvRG9Gcm9tU3RvcmFnZSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvRG9UYWJsZS5kZWxldGVSb3coaSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAlYzxSV0I+JWNSZW1vdmVkIHRvZG8gcm93OiAke2JveC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnR9YCxcclxuICAgICAgICBcImNvbG9yOmdvbGRlbnJvZDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICAgIFwiY29sb3I6Z29sZGVucm9kO1wiXHJcbiAgICAgICk7XHJcbiAgICAgIFRvRG9MaXN0LnRvRG9zLS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBzZWVkIHRoZSBUby1EbyBMaXN0IHdoZW4gdGhlcmUgYXJlIG5vIExvY2FsIFN0b3JhZ2UgaXRlbXNcclxuICAgKiAgd2hpY2ggd291bGQgcG9wdWxhdGUgdGhlIGxpc3QuIFRoZSBzYW1wbGUgcmVtYWlucyBvbiBwYWdlIGJ1dCBpcyBuZXZlciBzdG9yZWQgaW4gdGhlIGJyb3dzZXIuXHJcbiAgICogQHBhcmFtIHRCb2R5IHRhYmxlIGJvZHkgZWxlbWVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlU2FtcGxlVG9fRG8odEJvZHk6IEVsZW1lbnQpIHtcclxuICAgIGlmIChUb0RvTGlzdC5nZXRUb0RvSW5TdG9yYWdlKGZhbHNlLCB0cnVlKSkgcmV0dXJuO1xyXG4gICAgLy9DcmVhdGUgYSBzYW1wbGUgZW50cnkgaW4gdGhlIFRvRG8gdGFibGUgYXMgYSBwbGFjZWhvbGRlclxyXG4gICAgY29uc3QgVFIyID0gdEJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpKTtcclxuICAgIGNvbnN0IFREMkxFRlQgPSBUUjIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKTtcclxuICAgIGNvbnN0IFREMklOID0gVEQyTEVGVC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpO1xyXG4gICAgY29uc3QgVEQyTUlERExFID0gVFIyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSk7XHJcbiAgICBjb25zdCBURDJSSUdIVCA9IFRSMi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpO1xyXG4gICAgY29uc3QgVEQyREVMID0gVEQyUklHSFQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKTtcclxuXHJcbiAgICAvL0FkZCBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXNcclxuICAgIFREMklOLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDaGVja2JveFwiKTtcclxuICAgIFREMk1JRERMRS5zZXRBdHRyaWJ1dGUoXCJudW1cIiwgYCR7MX1gKTtcclxuICAgIFREMklOLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJEZWxldGVcIik7XHJcbiAgICBURDJERUwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xyXG4gICAgVEQyREVMLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRGVsZXRlXCIpO1xyXG4gICAgVEQySU4udHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIFREMk1JRERMRS50ZXh0Q29udGVudCA9IFwiQWRkIGEgVG9ETyBJdGVtLlwiO1xyXG4gICAgVG9Eb0xpc3QudG9Eb3MrKztcclxuXHJcbiAgICAvL1wiRGVsZXRlXCIgZXZlbnQgbGlzdGVuZXJcclxuICAgIFREMkRFTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlbGV0ZUJ1dHRvbihURDJERUwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgJWM8UldCPiVjUmVtb3ZlZCB0b2RvOiAke1REMkRFTC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnR9YCxcclxuICAgICAgICBcImNvbG9yOnB1cnBsZTtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICAgIFwiY29sb3I6cHVycGxlO1wiXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
