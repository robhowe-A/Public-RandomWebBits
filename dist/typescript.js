(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2024-2025 Robert A. Howell
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
            footerPara.textContent = `\u00A9 2022-2025 Random Web Bits. All Rights Reserved.`;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customElements = void 0;
//--Copyright (c) 2024-2025 Robert A. Howell
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2024-2025 Robert A. Howell
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionarySearch = void 0;
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RwbStringifyJson = exports.RwbParseJson = void 0;
//--Copyright (c) 2023-2025 Robert A. Howell
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
//--Copyright (c) 2023-2025 Robert A. Howell
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
},{}],20:[function(require,module,exports){
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xhc3NDb21wb25lbnRzLnRzIiwic3JjL2NvbXBvbmVudHMvZ2xvYmFsLzQwNC50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC9jb2xvclNjaGVtZS50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC9kaWN0aW9uYXJ5V2lkZ2V0LnRzIiwic3JjL2NvbXBvbmVudHMvZ2xvYmFsL2hlYWRlckZvb3Rlci50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC9wcmVmZXJlbmNlcy50cyIsInNyYy9jb21wb25lbnRzL2dsb2JhbC90b0Rvc1dpZGdldC50cyIsInNyYy9kYXRhL25hdkl0ZW1zLnRzIiwic3JjL21haW4udHMiLCJzcmMvbW9kZWxzL2FiYnJEZXNjcmlwdGlvbi50cyIsInNyYy9tb2RlbHMvYXBpLnRzIiwic3JjL21vZGVscy9jbGllbnQudHMiLCJzcmMvbW9kZWxzL2NvdW50ZXIudHMiLCJzcmMvbW9kZWxzL2RpY3Rpb25hcnlTZWFyY2gudHMiLCJzcmMvbW9kZWxzL2RpY3Rpb25hcnlTZWFyY2hNYXJrdXAudHMiLCJzcmMvbW9kZWxzL3J3YkVycm9yQnVzLnRzIiwic3JjL21vZGVscy9yd2JKc29uQ29udmVydGVyLnRzIiwic3JjL21vZGVscy9yd2JMaW5rLnRzIiwic3JjL21vZGVscy9zY3JpcHRQZXJmLnRzIiwic3JjL21vZGVscy90b0RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQSw0Q0FBNEM7QUFDNUMscUVBQTBDO0FBQzFDLHVFQUE0QztBQUM1Qyw0RkFBb0U7QUFDcEUsa0ZBQTBEO0FBQzFELG1FQUF3RDtBQUN4RCwrRUFBZ0Q7QUFFaEQsTUFBTSxlQUFlLEdBQUc7SUFDdEI7OztPQUdHO0lBQ0gsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUNwQixNQUFNLGNBQWMsR0FBRyxJQUFJLG9CQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxD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QUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7UUFDM0MsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWpCLHlCQUF5QjtRQUN6QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsMEJBQTBCLE1BQU0sQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLEVBQ25GLGdDQUFnQyxFQUNoQyxlQUFlLENBQ2hCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBOVpILDRCQStaQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBSd2JQZXJmIGZyb20gXCIuL21vZGVscy9zY3JpcHRQZXJmXCI7XHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuaW1wb3J0IGRpY3Rpb25hcnlXaWRnZXQgZnJvbSBcIi4vY29tcG9uZW50cy9nbG9iYWwvZGljdGlvbmFyeVdpZGdldFwiO1xyXG5pbXBvcnQgdG9Eb3NXaWRnZXQgZnJvbSBcIi4vY29tcG9uZW50cy9nbG9iYWwvdG9Eb3NXaWRnZXRcIjtcclxuaW1wb3J0IG5vdEZvdW5kNDA0V2lkZ2V0IGZyb20gXCIuL2NvbXBvbmVudHMvZ2xvYmFsLzQwNFwiO1xyXG5pbXBvcnQgQWJick9wZW4gZnJvbSBcIi4vbW9kZWxzL2FiYnJEZXNjcmlwdGlvblwiO1xyXG5cclxuY29uc3QgY2xhc3NDb21wb25lbnRzID0ge1xyXG4gIC8qKlxyXG4gICAqIEF0dHJpYnV0ZSB0YWdzIG9uIG1vYmlsZSBkbyBub3QgaGF2ZSBob3ZlciBvcHRpb24uIFRoaXMgZnVuY3Rpb24gYWRkcyBhIGNsaWNrXHJcbiAgICogIGFiaWxpdHkgdG8gZGVmaW5lIGFuIGFiYnIgdGFnLCB0aGFuIHJlbHkgb24gdGhlIHRpdGxlIGF0dHJpYnV0ZS5cclxuICAgKi9cclxuICBhYmJyRGVmaW5pdGlvbnM6ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZWFiYnJwZXJmID0gbmV3IFJ3YlBlcmYoXCJNb2JpbGVhYmJycGVyZlwiKTsgLy9zdGFydCBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcblxyXG4gICAgLyoqR2l2ZSBhbGwgYWJiciBlbGVtZW50cyBvcHRpb24gdG8gY2xpY2sgdG8gcmV2ZWFsIHRoZSBleHBhbmRlZCBkZXNjcmlwdGlvbi4gKi9cclxuICAgIGNvbnN0IGFsbGFiYnJldmlhdGlvbmVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFiYnJcIik7XHJcblxyXG4gICAgaWYgKGFsbGFiYnJldmlhdGlvbmVsZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgYWJiciBvZiBhbGxhYmJyZXZpYXRpb25lbGVtcykge1xyXG4gICAgICAgIGxldCBhYmJyZXYgPSBuZXcgQWJick9wZW4oYWJicik7XHJcbiAgICAgICAgYWJicmV2LnJldmVhbEFiYnJEZXNjcmlwdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipDaGVjayBmb3IgNDA0IGNsYXNzIGNvbXBvbmVudCAqL1xyXG4gICAgY2xhc3NDb21wb25lbnRzLmZvdXJvaGZvdXIoKTtcclxuXHJcbiAgICBtb2JpbGVhYmJycGVyZi5lbmQoKTsgLy9lbmQgcGVyZm9ybWFuY2UgbWVhc3VyZVxyXG4gIH0sXHJcbiAgZm91cm9oZm91cjogKCkgPT4ge1xyXG4gICAgaWYgKFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiUGFnZUNvbXBvbmVudHNcIiwgXCIjRm91ci1PaC1Gb3VyXCIsIGZhbHNlLCB0cnVlKSAhPT0gbnVsbCkge1xyXG4gICAgICBub3RGb3VuZDQwNFdpZGdldC5pbml0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0OiAocGFnZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc3BlcmYgPSBuZXcgUndiUGVyZihcIkNsYXNzY29tcG9uZW50c1wiKTsgLy9iZWdpbiBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcblxyXG4gICAgLy8gQWRkIERpY3Rpb25hcnkgV2lkZ2V0IGlmIGFuIGVsZW1lbnQgd2l0aCB0aGF0IGNsYXNzIGlzIG9uIGEgcGFnZVxyXG4gICAgaWYgKHBhZ2UgPT0gXCIvcGFnZXMvZGljdGlvbmFyeXdvcmQuaHRtbFwiIHx8IHBhZ2UgPT0gXCIvaW5kZXguaHRtbFwiIHx8IHBhZ2UgPT0gXCIvXCIgfHwgcGFnZSA9PSBcIlwiKSB7XHJcbiAgICAgIGRpY3Rpb25hcnlXaWRnZXQuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBUb0RvcyB3aWRnZXQgaWYgYW4gZWxlbWVudCB3aXRoIHRoYXQgY2xhc3MgaXMgb24gYSBwYWdlXHJcbiAgICBpZiAocGFnZSA9PSBcIi9wYWdlcy90b2Rvcy5odG1sXCIgfHwgcGFnZSA9PSBcIi9pbmRleC5odG1sXCIgfHwgcGFnZSA9PSBcIi9cIiB8fCBwYWdlID09IFwiXCIpIHtcclxuICAgICAgdG9Eb3NXaWRnZXQuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhYmJyIGRlZmluaXRpb25zXHJcbiAgICBjbGFzc0NvbXBvbmVudHMuYWJickRlZmluaXRpb25zKCk7XHJcblxyXG4gICAgY2xhc3NwZXJmLmVuZCgpOyAvL2VuZCBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3NDb21wb25lbnRzO1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NsaWVudFwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uLy4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuY29uc3Qgbm90Rm91bmQ0MDRXaWRnZXQgPSB7XHJcbiAgaW5pdDogKCkgPT4ge1xyXG4gICAgbGV0IGNsaWVudDQwNCA9IG5ldyBjbGllbnQoKTtcclxuICAgIGxldCBjbGllbnRSZWZmZXJJbmZvOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBsZXQgY2xpZW50UnR0SW5mbzogSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgbGV0IGNsaWVudFBsYXRmb3JtSW5mbzogSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY2xpZW50UmVmZmVySW5mbyA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgICBcIkZvdXJPaEZvdXJcIixcclxuICAgICAgXCIjY2xpZW50cmVmZXJyZXJcIixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjbGllbnRSdHRJbmZvID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJGb3VyT2hGb3VyXCIsIFwiI2NsaWVudHJ0dFwiLCB0cnVlLCB0cnVlKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjbGllbnRQbGF0Zm9ybUluZm8gPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgICAgXCJGb3VyT2hGb3VyXCIsXHJcbiAgICAgIFwiI2NsaWVudHBsYXRcIixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgLy9GaWxsIGluZm9ybWF0aW9uIHNlY2lvblxyXG4gICAgY2xpZW50UmVmZmVySW5mby50ZXh0Q29udGVudCA9IGNsaWVudDQwNC5vbGRVUkwgPyBjbGllbnQ0MDQub2xkVVJMIDogd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBjbGllbnRSdHRJbmZvLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgIGNsaWVudDQwNC5jb25uZWN0aW9udHlwZSA/IGNsaWVudDQwNC5jb25uZWN0aW9udHlwZSA6IFwiTm8gY29ubmVjdGlvbiB0eXBlIGZvdW5kLlwiXHJcbiAgICB9YDtcclxuICAgIGNsaWVudFJ0dEluZm8udGV4dENvbnRlbnQgKz0gYCwgcnR0IG9mICR7XHJcbiAgICAgIGNsaWVudDQwNC5jb25uZWN0aW9ucnR0ID8gY2xpZW50NDA0LmNvbm5lY3Rpb25ydHQgOiBcIk5vIHJ0dCBmb3VuZC5cIlxyXG4gICAgfWA7XHJcbiAgICBjbGllbnRQbGF0Zm9ybUluZm8udGV4dENvbnRlbnQgPSBjbGllbnQ0MDQuYnJvd3NlcnBsYXRmb3JtXHJcbiAgICAgID8gY2xpZW50NDA0LmJyb3dzZXJwbGF0Zm9ybVxyXG4gICAgICA6IFwiTm8gcGxhdGZvcm0gaW5mb3JtYXRpb24gZm91bmQuXCI7XHJcbiAgICBjbGllbnRQbGF0Zm9ybUluZm8udGV4dENvbnRlbnQgKz0gYCwgJHtcclxuICAgICAgY2xpZW50NDA0LnVzZXJhZ2VudCA/IGNsaWVudDQwNC51c2VyYWdlbnQgOiBcIk5vIHVzZXIgYWdlbnQgaW5mby5cIlxyXG4gICAgfWA7XHJcblxyXG4gICAgLy9Qcm92aWRlIGEgbGluayB0byBnbyBiYWNrIHdoZXJlIHlvdSBjYW1lIGZyb21cclxuICAgIGxldCBnb0JhY2tMaW5rOiBIVE1MTGlua0VsZW1lbnQ7XHJcbiAgICBnb0JhY2tMaW5rID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJGb3VyT2hGb3VyXCIsIFwiI29sZFVSTFwiLCB0cnVlLCB0cnVlKSBhcyBIVE1MTGlua0VsZW1lbnQ7XHJcbiAgICBpZiAoY2xpZW50NDA0Lm9sZFVSTC5pbmNsdWRlcyhcIjQwNC5odG1sXCIpKSB7XHJcbiAgICAgIGNsaWVudDQwNC5vbGRVUkwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgfVxyXG4gICAgbGV0IGdvQmFja0hyZWYgPSBjbGllbnQ0MDQub2xkVVJMID8gY2xpZW50NDA0Lm9sZFVSTCA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICBnb0JhY2tMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCR7Z29CYWNrSHJlZn1gKTtcclxuICAgIGdvQmFja0xpbmsuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgZ29CYWNrSHJlZik7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdEZvdW5kNDA0V2lkZ2V0O1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDI0LTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uLy4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuY29uc3QgY29sb3JTY2hlbWUgPSB7XHJcbiAgY2hlY2tUb2dnbGVCdG5TdGF0ZTogKCkgPT4ge1xyXG4gICAgbGV0IHRoZW1lQ2FjaGVVc2VyUHJlZjtcclxuICAgIGxldCB0aGVtZUNhY2hlQnJvd3NlclByZWY7XHJcbiAgICBpZiAoIVJ3YkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlRXF1YWxOdWxsKFwiQ29sb3JTY2hlbWVcIiwgXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiKSl7XHJcbiAgICAgIHRoZW1lQ2FjaGVVc2VyUHJlZiA9IGNvbG9yU2NoZW1lLmdldFVzZXJQcmVmZXJlbmNlKCk7XHJcbiAgICAgIHRoZW1lQ2FjaGVCcm93c2VyUHJlZiA9IGNvbG9yU2NoZW1lLmdldEJyb3dzZXJQcmVmZXJlbmNlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhlbWVDYWNoZVVzZXJQcmVmID0gY29sb3JTY2hlbWUuZ2V0U3lzdGVtUHJlZmVyZW5jZSgpO1xyXG4gICAgICB0aGVtZUNhY2hlQnJvd3NlclByZWYgPSB0aGVtZUNhY2hlVXNlclByZWY7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DaGFuZ2UgdGhlIHRvZ2dsZSBidXR0b24gdG8gbWF0Y2ggdGhlIGRpc3BsYXllZCB0aGVtZVxyXG4gICAgbGV0IHRoZW1lVG9nZ2xlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGVtZVRvZ2dsZVwiKTtcclxuICAgIGxldCB0aGVtZVRvZ2dsZUJ0biA9IHRoZW1lVG9nZ2xlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJkaXYudG9nZ2xlXCIpO1xyXG4gICAgbGV0IHRoZW1lVG9nZ2xlTGFiZWwgPSB0aGVtZVRvZ2dsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwicFwiKTtcclxuICAgIGxldCB0aGVtZVRvZ2dsZUlucHV0RWxlbXMgPSB0aGVtZVRvZ2dsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcbiAgICBsZXQgdGhlbWVUb2dnbGVJbnB1dERhcmsgPSB0aGVtZVRvZ2dsZUlucHV0RWxlbXNbMF07XHJcbiAgICBsZXQgdGhlbWVUb2dnbGVJbnB1dExpZ2h0ID0gdGhlbWVUb2dnbGVJbnB1dEVsZW1zWzFdO1xyXG4gICAgXHJcbiAgICBpZiAodGhlbWVDYWNoZVVzZXJQcmVmID09IFwiZGFya1wiKSB7XHJcbiAgICAgIC8vSW5pdGlhbCBzdGF0ZSBpcyBsaWdodCBtb2RlLiBUb2dnbGUgY2hlY2tlZCBhbmQgYWRkICdlbmFibGVkJyBjbGFzc1xyXG4gICAgICB0aGVtZVRvZ2dsZUlucHV0RGFyay50b2dnbGVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUlucHV0TGlnaHQucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgdGhlbWVUb2dnbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVuYWJsZWRcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJEYXJrXCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiTGlnaHRcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlTGFiZWwuaW5uZXJUZXh0ID0gXCJEYXJrXCI7XHJcblxyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHRoZW1lQ2FjaGVVc2VyUHJlZiA9PSBcImxpZ2h0XCIpIHtcclxuICAgICAgLy9Jbml0aWFsIHN0YXRlIGlzIGRhcmsgbW9kZS4gUmVtb3ZlIGNoZWNrZWQgYW5kIHJlbW92ZSAnZW5hYmxlZCcgY2xhc3NcclxuICAgICAgdGhlbWVUb2dnbGVJbnB1dERhcmsucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcclxuICAgICAgdGhlbWVUb2dnbGVJbnB1dExpZ2h0LnRvZ2dsZUF0dHJpYnV0ZShcImNoZWNrZWRcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbmFibGVkXCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKFwiTGlnaHRcIik7XHJcbiAgICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJEYXJrXCIpO1xyXG4gICAgICB0aGVtZVRvZ2dsZUxhYmVsLmlubmVyVGV4dCA9IFwiTGlnaHRcIjtcclxuXHJcbiAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoZW1lVG9nZ2xlSW5wdXREYXJrLnJlbW92ZUF0dHJpYnV0ZShcImNoZWNrZWRcIik7XHJcbiAgICB0aGVtZVRvZ2dsZUlucHV0TGlnaHQucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKTtcclxuICAgIHRoZW1lVG9nZ2xlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGVkXCIpO1xyXG4gICAgdGhlbWVUb2dnbGVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIkRhcmtcIik7XHJcbiAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiTGlnaHRcIik7XHJcblxyXG4gICAgaWYgKHRoZW1lQ2FjaGVVc2VyUHJlZiA9PSBcImJyb3dzZXJcIiAmJiB0aGVtZUNhY2hlQnJvd3NlclByZWYgPT0gXCJkYXJrXCIpe1xyXG4gICAgICB0aGVtZVRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKFwiRGFya1wiKTtcclxuICAgICAgdGhlbWVUb2dnbGVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIkxpZ2h0XCIpO1xyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgIHRoZW1lVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJMaWdodFwiKTtcclxuICAgICAgdGhlbWVUb2dnbGVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIkRhcmtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlbWVUb2dnbGVMYWJlbC5pbm5lclRleHQgPSBcIkJyb3dzZXJcIjtcclxuICAgIHJldHVybiAwO1xyXG4gIH0sXHJcblxyXG4gIGdldFN5c3RlbVByZWZlcmVuY2U6ICgpID0+IHtcclxuICAgIC8vQ2hlY2sgdGhlIGJyb3dzZXIgc3lzdGVtIHByZWZlcmVuY2UgYnkgbWF0Y2hpbmcgYSBtZWRpYSBxdWVyeVxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIikubWF0Y2hlcykge1xyXG4gICAgICByZXR1cm4gXCJsaWdodFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgIHJldHVybiBcImRhcmtcIjtcclxuICAgIH1cclxuICB9LFxyXG4gIGdldEJyb3dzZXJQcmVmZXJlbmNlOiAoKSA9PiB7XHJcbiAgICAvL0dldCB0aGUgc3RvcmVkIHN5c3RlbSBwcmVmZXJlbmNlIGZyb20gbG9jYWwgY2FjaGVcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3Itc2NoZW1lLXByZWZlcmVuY2VcIikpW1wiYnJvd3NlclByZWZlcmVuY2VcIl07XHJcbiAgfSxcclxuICBnZXRVc2VyUHJlZmVyZW5jZTogKCkgPT4ge1xyXG4gICAgLy9HZXQgdGhlIHN0b3JlZCB1c2VyIHByZWZlcmVuY2UgZnJvbSBsb2NhbCBjYWNoZVxyXG4gICAgbGV0IHVzZXJQcmVmZXJlbmNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yLXNjaGVtZS1wcmVmZXJlbmNlXCIpKVtcInVzZXJQcmVmZXJlbmNlXCJdO1xyXG4gICAgaWYgKHVzZXJQcmVmZXJlbmNlID09IFwibm9uZVwiKSB7XHJcbiAgICAgIHJldHVybiBjb2xvclNjaGVtZS5nZXRCcm93c2VyUHJlZmVyZW5jZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHVzZXJQcmVmZXJlbmNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGVtZSBwcmVmZXJlbmNlIG9wdGlvbnMgaW4gdGhlIGhlYWRlci4gVGhlIHN5c3RlbSBwcmVmZXJlbmNlIGFuZFxyXG4gICAqIHVzZXIgcHJlZmVyZW5jZSBhcmUgc3RvcmVkIGluIGxvY2FsIGNhY2hlLiBJZiBhIHVzZXIgcHJlZmVyZW5jZSBoYXMgbm90IGJlZW4gY2hvc2VuLCB0aGUgc3lzdGVtXHJcbiAgICogcHJlZmVyZW5jZSB0YWtlcyBwcmVjZWRlbmNlLlxyXG4gICAqL1xyXG4gIHNldENvbG9yVGhlbWU6ICh1c2VyUmVxdWVzdENoYW5nZTogYm9vbGVhbiwgdXNlclByZWZlcmVuY2U6IG51bWJlcikgPT4ge1xyXG4gICAgLy9PdXRwdXQgdGhlIGN1cnJlbnQgdGhlbWUgcHJlZmVyZW5jZSBkZXRlY3Rpb25cclxuICAgIGNvbnN0IGxvZ1VzZXJQcmVmZXJlbmNlID0gKG5ld1ByZWZlcmVuY2U6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKGBVc2VyIHByZWZlcmVuY2UgY2hhbmdlZCB0byAke25ld1ByZWZlcmVuY2V9IHRoZW1lIGNvbG9ycy5gKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9PdXRwdXQgYSB0aGVtZSBwcmVmZXJlbmNlIGNoYW5nZSBsb2dcclxuICAgIGNvbnN0IGxvZ1N5c3RlbVByZWZlcmVuY2VDaGFuZ2UgPSAobmV3UHJlZmVyZW5jZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBCcm93c2VyIHRoZW1lIGNvbG9ycyBwcmVmZXJlbmNlIGNoYW5nZWQuYCk7XHJcbiAgICB9O1xyXG4gICAgLyoqU3RvcmUgYnJvd3NlciBjb2xvciBzY2hlbWUgcHJlZmVyZW5jZSBpbiBhIG1hcCAqL1xyXG4gICAgbGV0IGNvbG9yU2NoZW1lUHJlZmVyZW5jZXMgPSBuZXcgTWFwKFtcclxuICAgICAgW1wiYnJvd3NlclByZWZlcmVuY2VcIiwgXCJub25lXCJdLFxyXG4gICAgICBbXCJ1c2VyUHJlZmVyZW5jZVwiLCBcIm5vbmVcIl0sXHJcbiAgICBdKTtcclxuXHJcbiAgICAvKipTZXQgdGhlIHNpdGUgdXAgZm9yIGNvbG9yIHRoZW1lIGNoYW5nZXMgKi9cclxuICAgIGNvbnN0IGluaXQgPSAoY2hhbmdlQnJvd3NlclByZWZlcmVuY2U6IGJvb2xlYW4sIHVzZXJQcmVmZXJlbmNlOiBudW1iZXIpID0+IHtcclxuICAgICAgbGV0IHByZWZlcmVuY2VUb1NldFRvID0gY29sb3JTY2hlbWUuZ2V0U3lzdGVtUHJlZmVyZW5jZSgpO1xyXG4gICAgICBpZiAoY29sb3JTY2hlbWVQcmVmZXJlbmNlcy5nZXQoXCJicm93c2VyUHJlZmVyZW5jZVwiKSA9PSBcIm5vbmVcIikge1xyXG4gICAgICAgIC8vR2V0IHRoZSBjdXJyZW50IGJyb3dzZXIgcHJlZmVyZW5jZVxyXG4gICAgICAgIGNvbG9yU2NoZW1lUHJlZmVyZW5jZXMuc2V0KFwiYnJvd3NlclByZWZlcmVuY2VcIiwgY29sb3JTY2hlbWUuZ2V0U3lzdGVtUHJlZmVyZW5jZSgpKTtcclxuICAgICAgICBwcmVmZXJlbmNlVG9TZXRUbyA9IGNvbG9yU2NoZW1lUHJlZmVyZW5jZXMuZ2V0KFwiYnJvd3NlclByZWZlcmVuY2VcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vSWYgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIHByZXZpb3VzIGNoYW5nZVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIVJ3YkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlRXF1YWxOdWxsKFwiQ29sb3JTY2hlbWVcIiwgXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiKSAmJlxyXG4gICAgICAgICFjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZSAmJlxyXG4gICAgICAgIGNvbG9yU2NoZW1lUHJlZmVyZW5jZXMuZ2V0KFwidXNlclByZWZlcmVuY2VcIikgIT0gXCJub25lXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcHJlZmVyZW5jZVRvU2V0VG8gPSBjb2xvclNjaGVtZS5nZXRVc2VyUHJlZmVyZW5jZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0lmIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBjaGFuZ2VcclxuICAgICAgaWYgKHVzZXJQcmVmZXJlbmNlID09IDIpe1xyXG4gICAgICAgIHByZWZlcmVuY2VUb1NldFRvID0gXCJsaWdodFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyUHJlZmVyZW5jZSA9PSAxKSB7XHJcbiAgICAgICAgcHJlZmVyZW5jZVRvU2V0VG8gPSBcImRhcmtcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodXNlclByZWZlcmVuY2UgPT0gMCAmJiAhY2hhbmdlQnJvd3NlclByZWZlcmVuY2UpXHJcbiAgICAgICAgcHJlZmVyZW5jZVRvU2V0VG8gPSBcImJyb3dzZXJcIjtcclxuXHJcbiAgICAgIC8vQWRkIHVzZXIncyBwcmVmZXJlbmNlIG9wdGlvbiB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIGNvbG9yU2NoZW1lLnNldExvY2FsU3RvcmFnZShcclxuICAgICAgICBwcmVmZXJlbmNlVG9TZXRUbyxcclxuICAgICAgICBjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZSxcclxuICAgICAgICB1c2VyUHJlZmVyZW5jZSxcclxuICAgICAgICBjb2xvclNjaGVtZVByZWZlcmVuY2VzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvL0xvZyB0aGUgY3VycmVudCBhY3Rpb25cclxuICAgICAgaWYgKHVzZXJQcmVmZXJlbmNlID49IDAgJiYgIWNoYW5nZUJyb3dzZXJQcmVmZXJlbmNlKSB7XHJcbiAgICAgICAgbG9nVXNlclByZWZlcmVuY2UocHJlZmVyZW5jZVRvU2V0VG8pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGFuZ2VCcm93c2VyUHJlZmVyZW5jZSkge1xyXG4gICAgICAgIGxvZ1N5c3RlbVByZWZlcmVuY2VDaGFuZ2UocHJlZmVyZW5jZVRvU2V0VG8pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChSd2JFcnJvci5jaGVja0xvY2FsU3RvcmFnZUVxdWFsTnVsbChcIkNvbG9yU2NoZW1lXCIsIFwiY29sb3Itc2NoZW1lLXByZWZlcmVuY2VcIikpIHtcclxuICAgICAgdXNlclByZWZlcmVuY2UgPSAtMTtcclxuICAgICAgaW5pdChmYWxzZSwgdXNlclByZWZlcmVuY2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXJQcmVmZXJlbmNlID49IDAgJiYgdXNlclJlcXVlc3RDaGFuZ2UpIHtcclxuICAgICAgaW5pdChmYWxzZSwgdXNlclByZWZlcmVuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yU2NoZW1lLnNldERvbUVsZW1lbnRzKGNvbG9yU2NoZW1lLmdldFVzZXJQcmVmZXJlbmNlKCkpO1xyXG4gICAgY29sb3JTY2hlbWUuY2hlY2tUb2dnbGVCdG5TdGF0ZSgpO1xyXG5cclxuICAgIC8qKkNoZWNrIGZvciBjb2xvciBzY2hlbWUgcHJlZmVyZW5jZSBjaGFuZ2UgKi9cclxuICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChSd2JFcnJvci5jaGVja0xvY2FsU3RvcmFnZU51bGxvckVtcHR5KFwiQ29sb3JTY2hlbWVcIiwgXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiLCB0cnVlKSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY29sb3Itc2NoZW1lLXByZWZlcmVuY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIFwiTG9jYWwgc3RvcmFnZSBrZXkgaGFzIGJlZW4gcmVtb3ZlZC4gUmVmcmVzaCB0aGUgcGFnZSB0byBnZW5lcmF0ZSBhIG5ldyBrZXktdmFsdWUgcGFpci5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vQ2hhbmdlIHRoZSBicm93c2VyIHByZWZlcmVuY2VzXHJcbiAgICAgIGluaXQodHJ1ZSwgMCk7XHJcbiAgICAgIGNvbG9yU2NoZW1lLnNldERvbUVsZW1lbnRzKGNvbG9yU2NoZW1lLmdldFVzZXJQcmVmZXJlbmNlKCkpO1xyXG4gICAgICBjb2xvclNjaGVtZS5jaGVja1RvZ2dsZUJ0blN0YXRlKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNldERvbUVsZW1lbnRzOiAocHJlZmVyZW5jZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAocHJlZmVyZW5jZSA9PSBcImJyb3dzZXJcIil7XHJcbiAgICAgIHByZWZlcmVuY2UgPSBjb2xvclNjaGVtZS5nZXRTeXN0ZW1QcmVmZXJlbmNlKCk7XHJcbiAgICB9XHJcbiAgICAvL1NldCB0aGUgYm9keSBsaWdodC9kYXJrIG1vZGUgY2xhc3NcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShgJHtjb2xvclNjaGVtZS50b2dnbGVUaGVtZShwcmVmZXJlbmNlKX1Nb2RlYCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYCR7cHJlZmVyZW5jZX1Nb2RlYCk7XHJcbiAgfSxcclxuICBzZXRMb2NhbFN0b3JhZ2U6IChcclxuICAgIC8vU3RvcmUgdGhlbWUgcHJlZmVyZW5jZXMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgbmV3UHJlZmVyZW5jZTogc3RyaW5nLFxyXG4gICAgY2hhbmdlQnJvd3NlclByZWZlcmVuY2U6IGJvb2xlYW4sXHJcbiAgICB1c2VyUHJlZmVyZW5jZTogbnVtYmVyLFxyXG4gICAgY29sb3JTY2hlbWVQcmVmZXJlbmNlczogTWFwPFN0cmluZywgc3RyaW5nPlxyXG4gICkgPT4ge1xyXG4gICAgaWYgKHVzZXJQcmVmZXJlbmNlID09IDAgJiYgY2hhbmdlQnJvd3NlclByZWZlcmVuY2UgPT0gZmFsc2Upe1xyXG4gICAgICBjb2xvclNjaGVtZS5zZXRMb2NhbFN0b3JhZ2VVc2VyQ2hhbmdlKG5ld1ByZWZlcmVuY2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlQnJvd3NlclByZWZlcmVuY2UpIHtcclxuICAgICAgY29sb3JTY2hlbWUuc2V0TG9jYWxTdG9yYWdlQnJvd3NlckNoYW5nZShuZXdQcmVmZXJlbmNlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXJQcmVmZXJlbmNlID4gMCkge1xyXG4gICAgICBjb2xvclNjaGVtZS5zZXRMb2NhbFN0b3JhZ2VVc2VyQ2hhbmdlKG5ld1ByZWZlcmVuY2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIFwiY29sb3Itc2NoZW1lLXByZWZlcmVuY2VcIixcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmZyb21FbnRyaWVzKGNvbG9yU2NoZW1lUHJlZmVyZW5jZXMpKVxyXG4gICAgKTtcclxuICB9LFxyXG4gIHNldExvY2FsU3RvcmFnZUJyb3dzZXJDaGFuZ2U6IChuZXdQcmVmZXJlbmNlOiBzdHJpbmcpID0+IHtcclxuICAgIC8vVGhpcyBmdW5jdGlvbiBjaGFuZ2VzIHRoZSBicm93c2VyIHByZWZlcmVuY2VcclxuICAgIGxldCBjdXJyZW50Q29sb3JTY2hlbWVQcmVmZXJlbmNlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiKSk7XHJcbiAgICBjdXJyZW50Q29sb3JTY2hlbWVQcmVmZXJlbmNlcy5icm93c2VyUHJlZmVyZW5jZSA9IGAke25ld1ByZWZlcmVuY2V9YDtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3Itc2NoZW1lLXByZWZlcmVuY2VcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudENvbG9yU2NoZW1lUHJlZmVyZW5jZXMpKTtcclxuICB9LFxyXG4gIHNldExvY2FsU3RvcmFnZVVzZXJDaGFuZ2U6IChuZXdQcmVmZXJlbmNlOiBzdHJpbmcpID0+IHtcclxuICAgIC8vVGhpcyBmdW5jdGlvbiBjaGFuZ2VzIHRoZSB1c2VyIHByZWZlcmVuY2VcclxuICAgIGxldCBjdXJyZW50Q29sb3JTY2hlbWVQcmVmZXJlbmNlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvci1zY2hlbWUtcHJlZmVyZW5jZVwiKSk7XHJcbiAgICBjdXJyZW50Q29sb3JTY2hlbWVQcmVmZXJlbmNlcy51c2VyUHJlZmVyZW5jZSA9IGAke25ld1ByZWZlcmVuY2V9YDtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3Itc2NoZW1lLXByZWZlcmVuY2VcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudENvbG9yU2NoZW1lUHJlZmVyZW5jZXMpKTtcclxuICB9LFxyXG4gIHRvZ2dsZVRoZW1lOiAodGhlbWU6IHN0cmluZykgPT4ge1xyXG5cclxuICAgIC8vRnVuY3Rpb24gdG8gdG9nZ2xlIGxpZ2h0LCBkYXJrIHN0cmluZ1xyXG4gICAgaWYgKHRoZW1lID09IFwibGlnaHRcIikge1xyXG4gICAgICByZXR1cm4gXCJkYXJrXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJsaWdodFwiO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvclNjaGVtZTtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IHsgRGljdGlvbmFyeVNlYXJjaCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGljdGlvbmFyeVNlYXJjaFwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uLy4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBjb250YWluaW5nIHRoZSBkaWN0aW9uYXJ5IHdpZGdldCdzIGNyZWF0aW9uLlxyXG4gKi9cclxuY29uc3QgZGljdGlvbmFyeVdpZGdldCA9IHtcclxuICAvKipcclxuICAgKiBUaGlzIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uIGNyZWF0ZXMgYSBkaWN0aW9uYXJ5IHNlYXJjaCB3aWRnZXQgYnkgY2FsbGluZyB0aGVcclxuICAgKiAgY29uc3RydWN0b3IuXHJcbiAgICogQHBhcmFtIGVsZW0gLSBFbGVtZW50IGNvbnRhaW5pbmcgJ2RpY3Rpb25hcnlXaWRnZXQnIGNsYXNzXHJcbiAgICovXHJcbiAgaW5pdDogKCkgPT4ge1xyXG4gICAgbGV0IGRpY3Rpb25hcnlXaWRnZXRTdGFydGluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZGljdGlvbmFyeVdpZGdldFN0YXJ0aW5nRWxlbWVudCA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiRGljdGlvbmFyeVdpZGdldFwiLCBcIi5kaWN0aW9uYXJ5V2lkZ2V0XCIsIHRydWUsIHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKGRpY3Rpb25hcnlXaWRnZXRTdGFydGluZ0VsZW1lbnQgPT0gbnVsbCl7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBmaW5kIGNvbnRhaW5lciBlbGVtZW50IGZvciBkaWN0aW9uYXJ5IHdpZGdldCBwbGFjZW1lbnQuIFNraXBwaW5nIGl0cyBjcmVhdGlvbi5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaWN0aW9uYXJ5U2VhcmNoIGNvbnN0cnVjdG9yXHJcbiAgICBPYmplY3QuY3JlYXRlKG5ldyBEaWN0aW9uYXJ5U2VhcmNoKGRpY3Rpb25hcnlXaWRnZXRTdGFydGluZ0VsZW1lbnQpKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGljdGlvbmFyeVdpZGdldDtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IE5BVklURU1TIGZyb20gXCIuLi8uLi9kYXRhL25hdkl0ZW1zXCI7XHJcbmltcG9ydCBSd2JFcnJvciwgeyBSd2JEb21FeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3J3YkVycm9yQnVzXCI7XHJcbmltcG9ydCBSd2JQZXJmIGZyb20gXCIuLi8uLi9tb2RlbHMvc2NyaXB0UGVyZlwiO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50cyB9IGZyb20gXCIuL3ByZWZlcmVuY2VzXCI7XHJcblxyXG4vKipcclxuICogV2lkZ2V0IHRvIGFkZCBzaXRlIGhlYWRlciBhbmQgZm9vdGVyLiBJbnN0YW50aWF0ZWQgaW4gJ01haW4nIHNjcmlwdC5cclxuICovXHJcbmNvbnN0IGhlYWRlckZvb3RlciA9IHtcclxuICBoZWFkZXJXaWRnZXQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGhlYWRlciB3aXRoIHNpdGUgbG9nbyBhcHBlbmRlZC5cclxuICAgICAqIEBwYXJhbSBtYWluIEhUTUwgJ21haW4nIGVsZW1lbnRcclxuICAgICAqIEByZXR1cm5zIFBvcHVsYXRlZCBoZWFkZXIgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBidWlsZEhlYWRlcjogKCkgPT4ge1xyXG4gICAgICAvKipcclxuICAgICAgICogQmFzaWMgSFRNTCBoZWFkZXIgZWxlbWVudCBjb250YWluaW5nIGxvZ28gKEgxKVxyXG4gICAgICAgKi9cclxuICAgICAgY29uc3Qgc2l0ZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICAgIGNvbnN0IHNpdGVIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzaXRlSGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3aWR0aC1tYXgtY2VudGVyXCIpO1xyXG4gICAgICBjb25zdCBIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMVwiKTtcclxuICAgICAgSDEudGV4dENvbnRlbnQgPSBcIjxSYW5kb20gV2ViIEJpdHM+XCI7XHJcbiAgICAgIEgxLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUmFuZG9tV2ViQml0c1wiKTtcclxuICAgICAgc2l0ZUhlYWRlckNvbnRhaW5lci5hcHBlbmQoSDEpO1xyXG4gICAgICBzaXRlSGVhZGVyLmFwcGVuZChzaXRlSGVhZGVyQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIHJldHVybiBzaXRlSGVhZGVyO1xyXG4gICAgfSxcclxuICAgIGJ1aWxkTmF2aWdhdGlvbjogKCkgPT4ge1xyXG4gICAgICAvLyBCdWlsZCB0aGUgaGVhZGVyIG5hdmlnYXRpb24gYmFzZWQgb24gbmF2aWdhdGlvbiBkYXRhXHJcbiAgICAgIC8vIENyZWF0ZSBuYXZpZ2F0aW9uIGVsZW1lbnRzXHJcbiAgICAgIGNvbnN0IGhlYWRlck5hdkZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IGhlYWRlck5hdiA9IGhlYWRlck5hdkZyYWdcclxuICAgICAgICAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKSlcclxuICAgICAgICAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpKTtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCBuYXYgZGF0YSB0byBuYXYgZWxlbWVudHNcclxuICAgICAgTkFWSVRFTVMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkxpc3RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjb25zdCBuYXZMaXN0TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBuYXZMaXN0SXRlbXMucHJlcGVuZChuYXZMaXN0TGlua3MpO1xyXG4gICAgICAgIGhlYWRlck5hdi5hcHBlbmQobmF2TGlzdEl0ZW1zKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIG5hdmlnYXRpb24gYXR0cmlidXRlcyBhbmQgcHJvcGVydHkgdmFsdWVzXHJcbiAgICAgICAgbmF2TGlzdExpbmtzLnRleHRDb250ZW50ID0gYCR7aXRlbS5pbm5lclRleHR9YDtcclxuICAgICAgICAvLyBFbnZpcm9ubWVudCBsaW5rcyBlZGl0LCByZXF1aXJpbmcgZGlmZmVyZW50IGxpbmsgcmVsYXRpdmVzIHRvIG9wZXJhdGVcclxuICAgICAgICAvLyBHaXRodWIgcGFnZXMgb3BlcmF0ZXMgZnJvbSByZXBvc2l0b3J5LCBub3QgJy8nXHJcbiAgICAgICAgLy9pZiAod2luZG93LmxvY2F0aW9uLmhvc3QgPT0gJ3JvYmhvd2UtYS5naXRodWIuaW8nKSB7XHJcbiAgICAgICAgLy9saW5rIGRhdGEgZWRpdCBmb3IgZGV2IGVudmlyb25tZW50XHJcbiAgICAgICAgLy9uYXZMaXN0TGlua3Muc2V0QXR0cmlidXRlKCdocmVmJywgYC9SYW5kb21XZWJCaXRzLyR7aXRlbS5oUmVmZXJlbmNlfWApO1xyXG4gICAgICAgIC8vfSBlbHNlIHtcclxuICAgICAgICAvL2xpbmsgZGF0YSBpbiBvdGhlciBlbnZpcm9ubWVudHNcclxuICAgICAgICBuYXZMaXN0TGlua3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgLyR7aXRlbS5oUmVmZXJlbmNlfWApO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIG5hdkxpc3RMaW5rcy5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBpdGVtLnRpdGxlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gaGVhZGVyTmF2RnJhZztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFNpdGUgaGVhZGVyIGNvbnRhaW5pbmcgbmF2aWdhdGlvbiBsaW5rcyBhbmQgc2l0ZSBsb2dvLlxyXG4gICAgICovXHJcbiAgICBpbml0OiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhlYWRlcnBlcmYgPSBuZXcgUndiUGVyZihcIkhlYWRlclwiKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBIVE1MICdtYWluJyBlbGVtZW50XHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgcGFnZU1haW46IEhUTUxFbGVtZW50O1xyXG4gICAgICBwYWdlTWFpbiA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiSGVhZGVyRm9vdGVyXCIsIFwibWFpblwiLCB0cnVlLCB0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKHBhZ2VNYWluID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJNYWluIGVsZW1lbnQgbm90IGZvdW5kLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqIEhlYWRlciBlbGVtZW50IGNvbnRhaW5lciAqL1xyXG4gICAgICBsZXQgc2l0ZUhlYWRlcjogRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgICAvLyBBZGQgaGVhZGVyIGVsZW1lbnQgdG8gdGhlIHBhZ2VcclxuICAgICAgaWYgKHBhZ2VNYWluICE9IG51bGwpIHtcclxuICAgICAgICAvLyAnTWFpbicgZWxlbWVudCBleGlzdHMsIGFkZCB0aGUgaGVhZGVyIHRvIGl0XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHNpdGVIZWFkZXIgPSBwYWdlTWFpbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmViZWdpblwiLCBoZWFkZXJGb290ZXIuaGVhZGVyV2lkZ2V0LmJ1aWxkSGVhZGVyKCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIG5ldyBSd2JEb21FeGNlcHRpb24oXCJEb21FeGNlcHRpb25cIiwgXCJDaGVjayBzaXRlIGhlYWRlciBlbGVtZW50LiBFbmNvdW50ZXJlZCBlcnJvcjpcIiwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICdNYWluJyBlbGVtZW50IGRvZXMgbm90IGV4aXN0LCBhZGQgdGhlIGhlYWRlciB0byB0aGUgYm9keVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzaXRlSGVhZGVyID0gZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXHJcbiAgICAgICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxyXG4gICAgICAgICAgICBoZWFkZXJGb290ZXIuaGVhZGVyV2lkZ2V0LmJ1aWxkSGVhZGVyKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgbmV3IFJ3YkRvbUV4Y2VwdGlvbihcIkRvbUV4Y2VwdGlvblwiLCBcIkNoZWNrIHNpdGUgaGVhZGVyIGlzIG5vdCBudWxsLiBFbmNvdW50ZXJlZCBlcnJvcjpcIiwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0FwcGVuZCBuYXZpZ2F0aW9uIGl0ZW1zIHRvIGhlYWRlclxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNpdGVIZWFkZXIuY2hpbGROb2Rlc1swXS5hcHBlbmRDaGlsZChoZWFkZXJGb290ZXIuaGVhZGVyV2lkZ2V0LmJ1aWxkTmF2aWdhdGlvbigpKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIG5ldyBSd2JEb21FeGNlcHRpb24oXCJEb21FeGNlcHRpb25cIiwgXCJDYW5ub3QgcHJlcGVuZCBuYXZpZ2F0aW9uIGl0ZW1zLiBFbmNvdW50ZXJlZCBlcnJvcjpcIiwgZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vUHJlZmVyZW5lY2VzIE1lbnUgYWRkaXRpb25cclxuICAgICAgbGV0IHNldHRpbmdzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkZXRhaWxzXCIpO1xyXG4gICAgICBzZXR0aW5nc01lbnUuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBcIjEycmVtXCIpO1xyXG4gICAgICBzZXR0aW5nc01lbnUuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXJnaW4tbGVmdFwiLCBcImF1dG9cIik7XHJcbiAgICAgIHNldHRpbmdzTWVudS5zdHlsZS5zZXRQcm9wZXJ0eShcIm1hcmdpbi10b3BcIiwgXCIyZW1cIik7XHJcbiAgICAgIHNldHRpbmdzTWVudS5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yXCIsIFwidmFyKC0tY2xyLWFsbC1mb250LWxpZ2h0KVwiKTtcclxuICAgICAgbGV0IHNldHRpbmdzTWVudVN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3VtbWFyeVwiKTtcclxuICAgICAgc2V0dGluZ3NNZW51U3VtbWFyeS5pbm5lclRleHQgPSBcIlByZWZlcmVuY2VzXCI7XHJcbiAgICAgIHNldHRpbmdzTWVudVN1bW1hcnkuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWFsaWduXCIsIFwicmlnaHRcIik7XHJcblxyXG4gICAgICBzZXR0aW5nc01lbnUuYXBwZW5kQ2hpbGQoc2V0dGluZ3NNZW51U3VtbWFyeSk7XHJcblxyXG4gICAgICBsZXQgcGlsbENvbnRhaW5lciA9IGN1c3RvbUVsZW1lbnRzLnBpbGxCdG5NYXJrdXAoKTtcclxuICAgICAgcGlsbENvbnRhaW5lci5pZCA9IFwidGhlbWVUb2dnbGVcIjtcclxuICAgICAgc2V0dGluZ3NNZW51LmFwcGVuZENoaWxkKHBpbGxDb250YWluZXIpO1xyXG5cclxuICAgICAgc2l0ZUhlYWRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgc2V0dGluZ3NNZW51KTtcclxuICAgICAgXHJcbiAgICAgIGN1c3RvbUVsZW1lbnRzLnBpbGxCdG5Ub2dnbGVBY3Rpb24oXCIjdGhlbWVUb2dnbGVcIik7XHJcblxyXG4gICAgICBoZWFkZXJwZXJmLmVuZCgpO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBmb290ZXJXaWRnZXQ6IHtcclxuICAgIGJ1aWxkRm9vdGVyOiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpdGVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgICBjb25zdCBzaXRlRm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgZm9vdGVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBmb290ZXJQYXJhLnRleHRDb250ZW50ID0gYFxcdTAwQTkgMjAyMi0yMDI1IFJhbmRvbSBXZWIgQml0cy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5gO1xyXG5cclxuICAgICAgc2l0ZUZvb3RlckNvbnRhaW5lci5hcHBlbmQoZm9vdGVyUGFyYSk7XHJcbiAgICAgIHNpdGVGb290ZXIuYXBwZW5kKHNpdGVGb290ZXJDb250YWluZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHNpdGVGb290ZXI7XHJcbiAgICB9LFxyXG4gICAgYnVpbGRGYXZpY29uQXR0cmlidXRpb246IChmb290ZXI6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgIC8vIEZhdmljb24gYXR0cmlidXRpb24gc2VjdGlvbiArIGxpbmsgdG8gc291cmNlXHJcbiAgICAgIGNvbnN0IGZvb3Rlckljb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGNvbnN0IGZvb3Rlckljb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGZvb3Rlckljb25MaW5rLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiSWNvbkhvbWU6ICM0NTAyNjc1NVwiKTtcclxuICAgICAgZm9vdGVySWNvbkxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgICBmb290ZXJJY29uTGluay5ocmVmID1cclxuICAgICAgICBcImh0dHBzOi8vd3d3LnZlY3RvcnN0b2NrLmNvbS9yb3lhbHR5LWZyZWUtdmVjdG9yL21haW50ZW5hbmNlLWljb24tZm9yLWdyYXBoaWMtYW5kLXdlYi1kZXNpZ24tdmVjdG9yLTQ1MDI2NzU1XCI7XHJcbiAgICAgIGZvb3Rlckljb25MaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICAgIGZvb3Rlckljb25MaW5rLnJlbCA9IFwibm9vcGVuZXJcIjtcclxuICAgICAgZm9vdGVySWNvbkxpbmsudGl0bGUgPSBcIk1haW50ZW5hbmNlIGljb24gZm9yIGdyYXBoaWMgYW5kIHdlYiBkZXNpZ24gVmVjdG9yIEltYWdlXCI7XHJcbiAgICAgIGZvb3Rlckljb25MaW5rLnRleHRDb250ZW50ID0gXCJWZWN0b3JTdG9jay5jb21cIjtcclxuICAgICAgZm9vdGVySWNvblBhcmEudGV4dENvbnRlbnQgPSBgRmF2aWNvbiBkZXNpZ25lZCBieSBJY29uSG9tZSBhdCBgO1xyXG5cclxuICAgICAgLy8gQXBwZW5kIGF0dHJpYnV0aW9uIHRvIGZvb3RlciBwYXJhXHJcbiAgICAgIGZvb3Rlckljb25QYXJhLmFwcGVuZENoaWxkKGZvb3Rlckljb25MaW5rKTtcclxuICAgICAgZm9vdGVyLmNoaWxkTm9kZXNbMF0uYXBwZW5kQ2hpbGQoZm9vdGVySWNvblBhcmEpO1xyXG5cclxuICAgICAgcmV0dXJuIGZvb3Rlckljb25QYXJhO1xyXG4gICAgfSxcclxuICAgIGJ1aWxkRGV2ZWxvcGVyQXR0cmlidXRpb246IChmb290ZXI6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRldmF0dHJpYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGRldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBkZXYudGV4dENvbnRlbnQgPSBcIkRldmVsb3BlZCBieSBSb2JlcnQgSG93ZWxsXCI7XHJcblxyXG4gICAgICBkZXZhdHRyaWIuYXBwZW5kKGRldik7XHJcbiAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkZXZhdHRyaWIpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuICAgIGluaXQ6ICgpID0+IHtcclxuICAgICAgY29uc3QgZm9vdGVycGVyZiA9IG5ldyBSd2JQZXJmKFwiRm9vdGVyXCIpO1xyXG5cclxuICAgICAgLy8gQWRkIGZvb3RlciBlbGVtZW50IHRvIHRoZSBwYWdlIGVuZFxyXG4gICAgICBsZXQgZm9vdGVyOiBIVE1MRWxlbWVudCA9IGhlYWRlckZvb3Rlci5mb290ZXJXaWRnZXQuYnVpbGRGb290ZXIoKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9vdGVyKTtcclxuICAgICAgZm9vdGVyLmNoaWxkTm9kZXNbMF0uYXBwZW5kQ2hpbGQoaGVhZGVyRm9vdGVyLmZvb3RlcldpZGdldC5idWlsZEZhdmljb25BdHRyaWJ1dGlvbihmb290ZXIpKTtcclxuICAgICAgaGVhZGVyRm9vdGVyLmZvb3RlcldpZGdldC5idWlsZERldmVsb3BlckF0dHJpYnV0aW9uKGZvb3Rlcik7XHJcblxyXG4gICAgICBmb290ZXJwZXJmLmVuZCgpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyRm9vdGVyO1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDI0LTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5pbXBvcnQgY29sb3JTY2hlbWUgZnJvbSBcIi4vY29sb3JTY2hlbWVcIjtcclxuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291bnRlclwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uLy4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuY29uc3QgY3VzdG9tRWxlbWVudHNfUHJlZmVyZW5jZXMgPSB7XHJcbiAgcGlsbEJ0bk1hcmt1cDogKCkgPT4ge1xyXG4gICAgLy9QaWxsIHRvZ2dsZVxyXG4gICAgbGV0IHRoZW1lVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgdGhlbWVUb2dnbGUuaW5uZXJUZXh0ID0gXCJUaGVtZTogXCI7XHJcbiAgICB0aGVtZVRvZ2dsZS5zdHlsZS5zZXRQcm9wZXJ0eShcIm1hcmdpbi1yaWdodFwiLCBcIi41cmVtXCIpO1xyXG4gICAgbGV0IHRoZW1lVG9nZ2xlTGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBsZXQgdGhlbWVUb2dnbGVEYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGhlbWVUb2dnbGVMaWdodC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICB0aGVtZVRvZ2dsZUxpZ2h0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZGFya1wiKTtcclxuICAgIHRoZW1lVG9nZ2xlRGFyay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICB0aGVtZVRvZ2dsZURhcmsuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsaWdodFwiKTtcclxuICAgIHRoZW1lVG9nZ2xlTGlnaHQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIHRoZW1lVG9nZ2xlRGFyay5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgdGhlbWVUb2dnbGUuYXBwZW5kQ2hpbGQodGhlbWVUb2dnbGVMaWdodCk7XHJcbiAgICAvLyB0aGVtZVRvZ2dsZS5hcHBlbmRDaGlsZCh0aGVtZVRvZ2dsZURhcmspO1xyXG5cclxuICAgIC8vVG9nZ2xlIEJ1dHRvblxyXG4gICAgbGV0IHBpbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGlsbENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xyXG4gICAgcGlsbENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcImZsZXgtd3JhcFwiLCBcIm5vd3JhcFwiKTtcclxuICAgIHBpbGxDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCJqdXN0aWZ5LWNvbnRlbnRcIiwgXCJjZW50ZXJcIik7XHJcbiAgICBwaWxsQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiYWxpZ24taXRlbXNcIiwgXCJjZW50ZXJcIik7XHJcbiAgICBwaWxsQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIFwiMi41cmVtXCIpO1xyXG4gICAgbGV0IHBpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGlsbC5zdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIFwiNThweFwiKTtcclxuICAgIHBpbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCIyMnB4XCIpO1xyXG4gICAgcGlsbC5zdHlsZS5zZXRQcm9wZXJ0eShcImJvcmRlci1yYWRpdXNcIiwgXCI1MHB4XCIpO1xyXG4gICAgcGlsbC5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XHJcbiAgICBwaWxsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcclxuICAgIGxldCBwaWxsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBpbGxCdG4uc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBcIjE4cHhcIik7XHJcbiAgICBwaWxsQnRuLnN0eWxlLnNldFByb3BlcnR5KFwiYXNwZWN0LXJhdGlvXCIsIFwiMS8xXCIpO1xyXG4gICAgcGlsbEJ0bi5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XHJcbiAgICBwaWxsQnRuLnN0eWxlLnNldFByb3BlcnR5KFwidG9wXCIsIFwiMnB4XCIpO1xyXG4gICAgcGlsbEJ0bi5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIiwgXCIycHhcIik7XHJcbiAgICBwaWxsQnRuLnN0eWxlLnNldFByb3BlcnR5KFwiYm9yZGVyLXJhZGl1c1wiLCBcIjUwcHhcIik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcGlsbC5hcHBlbmRDaGlsZChwaWxsQnRuKTtcclxuICAgIHBpbGwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRoZW1lVG9nZ2xlRGFyayk7XHJcblxyXG4gICAgLy9UZXh0IGxhYmVsXHJcbiAgICBsZXQgY2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjaG9pY2UuaW5uZXJUZXh0ID0gXCJCcm93c2VyXCI7XHJcbiAgICBjaG9pY2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXJnaW4tbGVmdFwiLCBcIi41cmVtXCIpO1xyXG4gICAgY2hvaWNlLnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCI4Y2hcIik7XHJcbiAgICBcclxuICAgIHBpbGxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlbWVUb2dnbGUpO1xyXG4gICAgcGlsbENvbnRhaW5lci5hcHBlbmRDaGlsZChwaWxsKTtcclxuICAgIHBpbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hvaWNlKTtcclxuXHJcbiAgICByZXR1cm4gcGlsbENvbnRhaW5lcjtcclxuICB9LFxyXG4gIHBpbGxCdG5Ub2dnbGVBY3Rpb246IChwaWxsUXVlcnk6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHBpbGxRdWVyeSA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIk51bGwgcXVlcnkuIFVzZSBhIGRpZmZlcmVudCBxdWVyeSBzdHJpbmcuXCIpO1xyXG4gICAgfVxyXG4gICAgLy9TZWxlY3QgdGhlIGVsZW1lbnRcclxuICAgIGxldCBwaWxsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGlsbFF1ZXJ5fWApO1xyXG4gICAgaWYgKHBpbGxFbGVtID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiUGlsbCBidG4gbm90IGZvdW5kIGJ5IHRoaXMgcXVlcnkuIFRyeSBhIGRpZmZlcmVudCBxdWVyeSBzdHJpbmcuXCIpO1xyXG4gICAgfVxyXG4gICAgLy9Bc3NpZ24gdmFyaWFibGVzIHRvIGVsZW1lbnQncyBjaGlsZHJlblxyXG4gICAgbGV0IHBpbGxUb2dnbGUgPSBwaWxsRWxlbS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpbGxTd2l0Y2ggPSBwaWxsVG9nZ2xlLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcblxyXG4gICAgLy9Ub2dnbGUgYnV0dG9uIHN0eWxlXHJcbiAgICBwaWxsVG9nZ2xlLnN0eWxlLnNldFByb3BlcnR5KFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgIHBpbGxUb2dnbGUuY2xhc3NMaXN0LmFkZChcInRvZ2dsZVwiKTtcclxuICAgIHBpbGxTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFN0YXRlID0gY29sb3JTY2hlbWUuY2hlY2tUb2dnbGVCdG5TdGF0ZSgpO1xyXG5cclxuICAgIC8vSW5pdGlhbCBzdGF0ZSBpcyBicm93c2VyLCBuZXh0IHN0YXRlIG1heSB2YXJ5XHJcbiAgICBsZXQgaW5pdGlhbDogQ291bnRlciA9IE9iamVjdC5jcmVhdGUobmV3IENvdW50ZXIoLTEpKTtcclxuXHJcbiAgICBsZXQgcGlsbFRvZ2dsZUZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgIC8vYWRkIGV2ZW50IHRvZ2dsZSBwb3NpdGlvbiBjb3VudGVyXHJcbiAgICAgIGlmIChpbml0aWFsU3RhdGUgPT0gMCAmJiBpbml0aWFsLmNvdW50ID09IC0xKVxyXG4gICAgICAgIGluaXRpYWwuY291bnQgPSAxO1xyXG4gICAgICBpZiAoaW5pdGlhbFN0YXRlID09IDEgJiYgaW5pdGlhbC5jb3VudCA9PSAtMSlcclxuICAgICAgICBpbml0aWFsLmNvdW50ID0gMjtcclxuICAgICAgaWYgKGluaXRpYWxTdGF0ZSA9PSAyICYmIGluaXRpYWwuY291bnQgPT0gLTEpXHJcbiAgICAgICAgaW5pdGlhbC5jb3VudCA9IDA7XHJcbiAgICAgIFxyXG4gICAgICAvL0NsaWNrIG9uY2UsIHN5c3RlbVxyXG4gICAgICAvL0NsaWNrIHR3aWNlLCBsaWdodFxyXG4gICAgICAvL0NsaWNrIHRocmVlLCBkYXJrXHJcbiAgICAgIC8vdXNlclByZWZlcmVuY2UgY2hhbmdlcyBtZWFucyB0aGUgdXNlciBoYXMgY2xpY2tlZCB0aGUgdGhlbWUgdG9nZ2xlIGJ1dHRvblxyXG4gICAgICBsZXQgdXNlclByZWZlcmVuY2U7XHJcblxyXG4gICAgICBzd2l0Y2goaW5pdGlhbC5jb3VudCl7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdXNlclByZWZlcmVuY2UgPSAwO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdXNlclByZWZlcmVuY2UgPSAxO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdXNlclByZWZlcmVuY2UgPSAyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0NoYW5nZSB0aGUgdGhlbWVcclxuICAgICAgY29sb3JTY2hlbWUuc2V0Q29sb3JUaGVtZSh0cnVlLCB1c2VyUHJlZmVyZW5jZSk7XHJcblxyXG4gICAgICBpbml0aWFsLmNvdW50Kys7XHJcblxyXG4gICAgICBpZiAoaW5pdGlhbC5jb3VudCA9PSAzKXtcclxuICAgICAgICBpbml0aWFsLmNvdW50ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vVG9nZ2xlIGJ1dHRvbiBldmVudCBsaXN0ZW5lclxyXG4gICAgcGlsbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGlsbFRvZ2dsZUZ1bmMoKTtcclxuICAgIH0pO1xyXG4gICAgLy9Ub2dnbGUgYnV0dG9uIG1vdXNlIGxpc3RlbmVyXHJcbiAgICBwaWxsVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBlID0+IHtcclxuICAgICAgaWYgKGUua2V5ICE9PSBcIkVudGVyXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBpbGxUb2dnbGVGdW5jKCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgY3VzdG9tRWxlbWVudHNfUHJlZmVyZW5jZXMgYXMgY3VzdG9tRWxlbWVudHMgfTtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3RvRG9cIjtcclxuaW1wb3J0IFJ3YkVycm9yIGZyb20gXCIuLi8uLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgY29udGFpbmluZyB0aGUgVG8tRG8gTGlzdCB3aWRnZXQncyBjcmVhdGlvbi5cclxuICovXHJcbmNvbnN0IHRvRG9zV2lkZ2V0ID0ge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIFRvLURvIExpc3Qgd2lkZ2V0LlxyXG4gICAqIEBwYXJhbSBlbGVtIC0gRWxlbWVudCBjb250YWluaW5nICdUb0RvTGlzdCcgY2xhc3NcclxuICAgKi9cclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBsZXQgdG9Eb3NFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHRvRG9zRWxlbWVudCA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiVG9Eb0xpc3RcIiwgXCIuVG9Eb0xpc3RcIiwgdHJ1ZSwgdHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodG9Eb3NFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGZpbmQgY29udGFpbmVyIGVsZW1lbnQgZm9yIHRvZG8gbGlzdCB3aWRnZXQgcGxhY2VtZW50LiBTa2lwcGluZyBpdHMgY3JlYXRpb24uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9Ub0RvTGlzdCBvYmplY3RcclxuICAgIGNvbnN0IHRvRG9XaWRnZXQgPSBuZXcgVG9Eb0xpc3QoKTtcclxuXHJcbiAgICAvL0NyZWF0ZXMgd2lkZ2V0IG1hcmt1cCBhbmQgcG9wdWxhdGVzIFRvLURvIHRhc2tzIGNvbnRhaW5lZCBpbiBMb2NhbCBTdG9yYWdlXHJcbiAgICB0b0RvV2lkZ2V0LmNyZWF0ZVRvRG9MaXN0V2lkZ2V0KHRvRG9zRWxlbWVudCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRG9zV2lkZ2V0O1xyXG4iLCJcInN0cmljdCBtb2RlXCI7XHJcbi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBSd2JMaW5rIGZyb20gXCIuLi9tb2RlbHMvcndiTGlua1wiO1xyXG5cclxuLyoqXHJcbiAqIEhlYWRlciBuYXZpZ2F0aW9uIGxpbmsgZGF0YVxyXG4gKi9cclxuY29uc3QgaG9tZU5hdkxpbmsgPSBuZXcgUndiTGluayhcIkluZGV4XCIsIFwiSG9tZVwiLCBcIkhvbWVcIiwgXCJpbmRleC5odG1sXCIpO1xyXG5cclxuY29uc3QgcGFnZXNOYXZMaW5rID0gbmV3IFJ3YkxpbmsoXCJQYWdlc1wiLCBcIlBhZ2VzXCIsIFwiUGFnZXNcIiwgXCJwYWdlcy5odG1sXCIpO1xyXG5cclxuY29uc3QgZ2FtZU5hdkxpbmsgPSBuZXcgUndiTGluayhcIkdhbWVcIiwgXCJGbGFzaENhcmRzXCIsIFwiR2FtZVwiLCBcImZsYXNoY2FyZHMuaHRtbFwiKTtcclxuXHJcbi8qKiBOYXZpZ2F0aW9uIGxpbmtzICovXHJcbmNvbnN0IE5BVklURU1TID0gW2hvbWVOYXZMaW5rLCBwYWdlc05hdkxpbmssIGdhbWVOYXZMaW5rXTtcclxuZXhwb3J0IGRlZmF1bHQgTkFWSVRFTVM7XHJcbiIsIlwic3RyaWN0IG1vZGVcIjtcclxuLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IGhlYWRlckZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2dsb2JhbC9oZWFkZXJGb290ZXJcIjtcclxuLy9pbXBvcnQgcGFnZUNvbXBvbmVudHMgZnJvbSBcIi4vcGFnZUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGNsYXNzQ29tcG9uZW50cyBmcm9tIFwiLi9jbGFzc0NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJ3YlBlcmYgZnJvbSBcIi4vbW9kZWxzL3NjcmlwdFBlcmZcIjtcclxuaW1wb3J0IGNvbG9yU2NoZW1lIGZyb20gXCIuL2NvbXBvbmVudHMvZ2xvYmFsL2NvbG9yU2NoZW1lXCI7XHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbmNvbnN0IG1haW5QZXJmID0gbmV3IFJ3YlBlcmYoXCJtYWluXCIpO1xyXG5cclxuLy8gZW50cnkgcG9pbnRcclxuLyoqXHJcbiAqIFR5cGVTY3JpcHQgZW50cnkgcG9pbnQuIFRoaXMgc2NyaXB0IGluaXRpYWxpemVzIHBhZ2UgY29tcG9uZW50cyBhbmQgbW9kZWxzLlxyXG4gKiBTdGFydCBpcyB0aGUgZW50cnkgcG9pbnQuXHJcbiAqL1xyXG5jb25zdCBSV0IgPSB7XHJcbiAgbWFpbjogKCkgPT4ge1xyXG4gICAgLy8gQWRkIGhlYWRlciBhbmQgZm9vdGVyIGNvbXBvbmVudHNcclxuICAgIGhlYWRlckZvb3Rlci5oZWFkZXJXaWRnZXQuaW5pdCgpO1xyXG4gICAgaGVhZGVyRm9vdGVyLmZvb3RlcldpZGdldC5pbml0KCk7XHJcblxyXG4gICAgLy9DaGVjayBicm93c2VyIGNvbG9yIHNjaGVtZSBwcmVmZXJlbmNlXHJcbiAgICBjb2xvclNjaGVtZS5zZXRDb2xvclRoZW1lKGZhbHNlLCAwKTtcclxuXHJcbiAgICBsZXQgcGFnZTogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgZWxlbWVudCBjb21wb25lbnRzXHJcbiAgICBjbGFzc0NvbXBvbmVudHMuaW5pdChwYWdlKTtcclxuXHJcbiAgICBpZiAoUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJMb2FkaW5nXCIsIFwiLmxvYWRpbmdcIiwgZmFsc2UsIHRydWUpKXtcclxuICAgICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIilcclxuICAgICAgZGl2aWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcclxuICAgIH1cclxuICAgIGxldCBsb2FkaW5nQ29tcDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbG9hZGluZ0NvbXAgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIkxvYWRpbmdDb21wXCIsIFwiYm9keSBhc2lkZTpmaXJzdC1vZi10eXBlXCIsIGZhbHNlLCB0cnVlKVxyXG4gICAgbG9hZGluZ0NvbXAuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XHJcbiAgICBsb2FkaW5nQ29tcC5yZW1vdmUoKTtcclxuXHJcbiAgICBtYWluUGVyZi5lbmQoKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgcGFnZSB3aWRnZXRzIGFuZCBhcHBsaWNhdGlvbiBmdW5jdGlvbnMuXHJcbiAgICovXHJcbiAgc3RhcnQ6ICgpID0+IHtcclxuICAgIC8vQ2hlY2sgdXNlciBhY2NlcHRhbmNlXHJcbiAgICBjb25zdCB1c2VyQ29va2llc0FjY2VwdGFuY2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZXNPcHRpb25cIik7XHJcblxyXG4gICAgaWYgKCF1c2VyQ29va2llc0FjY2VwdGFuY2UpIHtcclxuICAgICAgLy9DcmVhdGUgZGlhbG9nIG1hcmt1cFxyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XHJcbiAgICAgIGNvbnN0IGRpYWxvZyA9IGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIikpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgZGlhbG9nSW5uZXIgPSBgXHJcbiAgICAgICAgPHA+VGhpcyB3ZWJzaXRlIHVzZXMgYnJvd3NlciBjb29raWVzIGZvciBhbm9ueW1vdXMgdHJhZmZpYyBpbmZvcm1hdGlvbiBjYXB0dXJlLjwvcD5cclxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJkaWFsb2dcIj5cclxuICAgICAgICAgIDxidXR0b24+QWNjZXB0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICBgO1xyXG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gZGlhbG9nSW5uZXI7XHJcbiAgICAgIC8vQXNzaWduIGRpYWxvZyBidXR0b24gZnVuY3Rpb25zXHJcbiAgICAgIGxldCBidG5BY2NlcHQgPSBkaWFsb2cuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGxldCBidG5DbG9zZSA9IGRpYWxvZy5jaGlsZHJlblsxXS5jaGlsZHJlblsxXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICAgIC8vU2V0IGRpYWxvZyBhdHRyaWJ1dGVzXHJcbiAgICAgIGRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvb2tpZXNPcHRpb25Gb3JtXCIpO1xyXG4gICAgICBkaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCBcIlwiKTtcclxuICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcclxuICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJmaXhlZFwiKTtcclxuICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCI0MDBweFwiKTtcclxuICAgICAgYnRuQWNjZXB0LnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCJtYXgtY29udGVudFwiKTtcclxuICAgICAgYnRuQ2xvc2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBcIm1pbi1jb250ZW50XCIpO1xyXG5cclxuICAgICAgYnRuQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWVzT3B0aW9uXCIsIFwiQWNjZXB0ZWRcIik7XHJcbiAgICAgICAgZGlhbG9nLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpYWxvZy5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFdmVudCBmaXJlZCBiZWZvcmUgYXNzZXRzIGFyZSByZW5kZXJlZCB0byB0aGUgcGFnZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFJXQi5tYWluKTtcclxuXHJcbiAgfSxcclxufTtcclxuUldCLnN0YXJ0KCk7XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYmJyT3BlbiB7XHJcbiAgcHVibGljIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYWJickVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVzY3JpcHRpb246IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoYWJickVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5hYmJyRWxlbWVudCA9IGFiYnJFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldmVhbEFiYnJEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMuYWJickVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGFiYnJUaXRsZUF0dHJWYWw6IHN0cmluZyA9IHRoaXMuYWJickVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgaWYgKGUudGFyZ2V0ID09IHRoaXMuYWJickVsZW1lbnQpIHtcclxuICAgICAgICAvL2NyZWF0ZSB0aGUgc3BhbiBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuYWJickVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIikpO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCl9KCR7YWJiclRpdGxlQXR0clZhbH0pJHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxyXG4gICAgICAgICAgMTYwXHJcbiAgICAgICAgKX1gO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG4vKipcclxuICogYXBpR2V0IGlzIGZvciBmZXRjaCByZXF1ZXN0cy4gVXNlIGFuIGFwaUdldCBvYmplY3QgdG8gbWFuaXB1bGF0ZSB0aGUgZmV0Y2hcclxuICogIHJlcXVlc3QgaW50byBlaXRoZXI6XHJcbiAqXHJcbiAqIDEuIHJldHVybmluZyBkYXRhXHJcbiAqXHJcbiAqIC0tb3IgLS1cclxuICpcclxuICogMi4gc3RvcmluZyB0aGUgcmVxdWVzdCBpbiB0aGUgYnJvd3NlciBjYWNoZSB0byByZXRyaWV2ZSBsYXRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGFwaUdldCB7XHJcbiAgcHVibGljIGVycm9yRWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBnZXRVcmw6IFVSTDtcclxuICBwcml2YXRlIHNlbmRUb0Jyb3dzZXJDYWNoZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYnJvd3NlckNhY2hlTmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGNvbnN0cnVjdG9yIGdhdGhlcnMgYWxsIHRoZSBuZWVkZWQgaW5mb3JtYXRpb24gZm9yIGZldGNoIGFuZC9vciBicm93c2VyXHJcbiAgICogIHN0b3JhZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZ2V0VXJsIC0gdGhlIChmdWxsKSB1cmwgb2YgZGF0YSByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSBzZW5kVG9Ccm93c2VyQ2FjaGUgIC0gQm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmluZyBmZXRjaCBjYWNoaW5nLlxyXG4gICAqIEBwYXJhbSBicm93c2VyQ2FjaGVOYW1lIC0gSWYgc3RvcmluZyB0aGUgcmVxdWVzdCBpbiBicm93c2VyIGNhY2hlLCB0aGlzIHN0cmluZyBwcm92aWRlcyB0aGUgbmFtZSBmb3Igc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gZXJyb3JFbGVtIC0gU2hvdWxkIHRoZSBmZXRjaCByZXF1ZXN0IGZhaWwsIHJldHVybiBlcnJvciBzdGF0dXMgdG8gdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZ2V0VXJsOiBVUkwsXHJcbiAgICBzZW5kVG9Ccm93c2VyQ2FjaGU6IGJvb2xlYW4sXHJcbiAgICBlcnJvckVsZW06IEhUTUxFbGVtZW50LFxyXG4gICAgYnJvd3NlckNhY2hlTmFtZTogc3RyaW5nIHwgbnVsbFxyXG4gICkge1xyXG4gICAgdGhpcy5nZXRVcmwgPSBnZXRVcmw7XHJcbiAgICB0aGlzLnNlbmRUb0Jyb3dzZXJDYWNoZSA9IHNlbmRUb0Jyb3dzZXJDYWNoZTtcclxuICAgIHRoaXMuYnJvd3NlckNhY2hlTmFtZSA9IGJyb3dzZXJDYWNoZU5hbWU7XHJcbiAgICB0aGlzLmVycm9yRWxlbSA9IGVycm9yRWxlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdGhpcy5zZW5kVG9Ccm93c2VyQ2FjaGVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0U2VuZFRvQnJvd3NlckNhY2hlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB0aGlzLmdldFVybFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRHZXRVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRVcmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbGlwIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlIGJvb2xlYW4gdmFsdWUgZnJvbSB0aGUgY3VycmVudCB2YWx1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0U2VuZFRvQnJvd3NlckNhY2hlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBmZXRjaCByZXF1ZXN0IGNhbiB0YWtlIFVSTCBvciBzdHJpbmcgcGFyYW1ldGVyLiBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGFwaUdldFxyXG4gICAqICBvYmplY3QgZm9yIGEgVVJMIGZldGNoIGJ5IGNyZWF0aW5nIGEgVVJMIGZyb20gdGhlIHN0cmluZywgb3IgcGFzc2luZyB0aGUgVVJMLlxyXG4gICAqIEBwYXJhbSB1cmwgLSB0aGUgKGZ1bGwpIHVybCBvZiBkYXRhIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHNldEdldFVybCh1cmw6IFVSTCB8IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhpcy5nZXRVcmwgPSBuZXcgVVJMKHVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldFVybCA9IHVybDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcHVibGljIGZ1bmN0aW9uIGNyZWF0aW5nIGEgZGF0YSBwcm9taXNlIG9iamVjdCBmb3IgdGhlIGNhbGxlZCBmZXRjaCBmdW5jdGlvbi4gSWZcclxuICAgKiAgdGhlIHJlcXVlc3QgbmVlZHMgYWRkZWQgdG8gYnJvd3NlciBzdG9yYWdlLCB0aGUgZmV0Y2ggaXMgbWFkZSBhbmQgc2VudCB0b1xyXG4gICAqICBzdG9yYWdlLiBBIGNsb25lZCBjb3B5IG9mIHRoZSBmZXRjaGVkIGRhdGEgaXMgcmV0dXJuZWQgYW5kIHRoZSBvcmlnaW5hbCByZXF1ZXN0IGlzXHJcbiAgICogIHNlbnQgdG8gdGhlIGNhY2hlLiBXaXRob3V0IHNlbmRpbmcgdG8gYnJvd3NlciBjYWNoZSwgdGhlIGZldGNoIGlzIHJlcXVlc3RlZCBhbmRcclxuICAgKiByZXR1cm5lZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBnZXRVcmwgLSB0aGUgKGZ1bGwpIHVybCBvZiBkYXRhIHJlcXVlc3QuXHJcbiAgICogQHJldHVybnMgZGF0YUNhY2hlUHJvbWlzZTogUHJvbWlzZTx1bmtub3duPlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBhcGlHZXQoZ2V0VXJsOiBVUkwpIHtcclxuICAgIC8vQ2hlY2sgaWYgdGhlIHJlcXVlc3QgaXMgZm9yIGNhY2hlIHN0b3JhZ2VcclxuICAgIGlmICh0aGlzLnNlbmRUb0Jyb3dzZXJDYWNoZSkge1xyXG4gICAgICAvL1RoZSByZXR1cm5lZCBkYXRhIGlzIHBhY2thZ2VzIGFzIGEgUHJvbWlzZSBvYmplY3RcclxuICAgICAgbGV0IGRhdGFDYWNoZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKFwiY2FjaGVzXCIgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAvL09wZW4gY2FjaGUgYW5kIGNoZWNrIGZvciByZXF1ZXN0IGV4aXN0aW5nIGluIENhY2hlIFN0b3JhZ2VcclxuICAgICAgICAgIHdpbmRvdy5jYWNoZXNcclxuICAgICAgICAgICAgLm9wZW4odGhpcy5icm93c2VyQ2FjaGVOYW1lKVxyXG4gICAgICAgICAgICAudGhlbihjYWNoZSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FjaGVzLm1hdGNoKGdldFVybCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vTm8gbWF0Y2hlcyBmb3IgdGhpcyByZXF1ZXN0IGluIFN0b3JhZ2UgQ2FjaGUsIHNvIGZldGNoIHRoZSByZXF1ZXN0IG5vcm1hbGx5XHJcbiAgICAgICAgICAgICAgICAgIC8vVXBvbiBzdWNjZXNzLCBhIGNsb25lZCBjb3B5IHdpbGwgbmVlZCB0byBiZSByZXR1cm5lZC5cclxuICAgICAgICAgICAgICAgICAgZmV0Y2goZ2V0VXJsKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Db3B5IHRoZSByZXNwb25zZSBzaW5jZSBpdCBjYW4gb25seSBiZSByZWFkIG9uY2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xvbmVkUmVzcCA9IHJlc3VsdC5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0FkZCB0aGUgcmVzdWx0IHRvIHRoZSBjYWNoZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9uZWRSZXNwLnN0YXR1cyAhPSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1dChnZXRVcmwsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2xvbmVkUmVzcC5qc29uKCkudGhlbih0ZXh0ID0+IHRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvL0NhY2hlIGhpdCBzdWNjZXNzLCByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcclxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuanNvbigpLnRoZW4odGV4dCA9PiB0ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAvL0Nhbm5vdCBvcGVuIFN0b3JhZ2UgQ2FjaGVcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAlY1Byb2JsZW0gb3BlbmluZyBDYWNoZSBTdG9yYWdlLiBOYW1lOiAke3RoaXMuYnJvd3NlckNhY2hlTmFtZX1gLCBcImNvbG9yOiBncmV5XCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VuZFRvQnJvd3NlckNhY2hlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgLy9UaGUgcHJvbWlzZSBoYXMgcmVzb2x2ZWQgLS0+IHJldHVybiB0aGUgcHJvbWlzZSBkYXRhXHJcbiAgICAgIGRhdGFDYWNoZVByb21pc2UudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhQ2FjaGVQcm9taXNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGRhdGFDYWNoZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoRGF0YShnZXRVcmwpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRhdGFDYWNoZVByb21pc2UudGhlbihkYXRhID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhQ2FjaGVQcm9taXNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHJlcXVlc3RlZCByZXNwb25zZSBpcyBvZiB2YWxpZCBzdGF0dXMgJ09LJyBhbmQgJzIwMCdcclxuICAgKiBAcGFyYW0gcmVzIC0gdGhlIGZldGNoZWQgcmVzcG9uc2UuXHJcbiAgICogQHJldHVybnMgLSByZXR1cm5zIHJlcy5qc29uKCkgb24gc3VjY2VzcyBvciByZXR1cm5zIHJlc3BvbnNlIG9uIGZhaWx1cmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhcGlSZXNwb25zZUVycm9yQ2hlY2socmVzOiBSZXNwb25zZSkge1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgIHRoaXMuZXJyb3JFbGVtLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgdGhpcy5lcnJvckVsZW0uaW5uZXJUZXh0ID0gXCI0MDQgZmV0Y2ggZXJyb3IhXCI7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcy5vayB8fCByZXMuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLm9rICsgXCI6IFwiICsgcmVzLnN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZmV0Y2ggcmVxdWVzdCwgcmV0dXJuaW5nIGEgZmV0Y2ggcHJvbWlzZS5cclxuICAgKiBAcGFyYW0gZ2V0VXJsIC0gdGhlIChmdWxsKSB1cmwgb2YgZGF0YSByZXF1ZXN0LlxyXG4gICAqIEByZXR1cm5zIGRhdGEudGV4dCgpIG9yIGRhdGEgYmFzZWQgb24gdGhlIGluc3RhbmNlIHJldHVybmVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmV0Y2hEYXRhKGdldFVybDogVVJMKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goZ2V0VXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB0aGlzLmFwaVJlc3BvbnNlRXJyb3JDaGVjayhyZXNwb25zZSkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhLnRleHQoKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhlKTtcclxuICAgICAgICB0aGlzLmVycm9yRWxlbS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgdGhpcy5lcnJvckVsZW0uaW5uZXJUZXh0ID0gYCR7ZS5tZXNzYWdlfWA7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuZXhwb3J0IGNsYXNzIGNsaWVudCB7XHJcbiAgcHVibGljIG9sZFVSTCA9IGRvY3VtZW50LnJlZmVycmVyO1xyXG4gIHB1YmxpYyBicm93c2VycGxhdGZvcm06IHN0cmluZztcclxuICBwdWJsaWMgdXNlcmFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcHVibGljIGNvbm5lY3Rpb250eXBlO1xyXG4gIHB1YmxpYyBjb25uZWN0aW9ucnR0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYnJvd3NlcnBsYXRmb3JtID0gdGhpcy5zZXRicm93c2VycGxhdGZvcm0oKTtcclxuICAgIHRoaXMuY29ubmVjdGlvbnR5cGUgPSB0aGlzLnNldGNvbm5lY3Rpb250eXBlKCk7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb25ydHQgPSB0aGlzLnNldGNvbm5lY3Rpb25ydHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0YnJvd3NlcnBsYXRmb3JtKCkge1xyXG4gICAgaWYgKFwidXNlckFnZW50RGF0YVwiIGluIHdpbmRvdy5uYXZpZ2F0b3IpIHtcclxuICAgICAgLy91c2VyQWdlbnREYXRhIGlzIE5hdmlnYXRvclVBRGF0YSB0eXBlLCBub3QgZm91bmQgaW4gVHlwZVNjcmlwdC5cclxuICAgICAgLy9Lbm93biB0byBFZGdlIGJyb3dzZXI6IE9iamVjdC5nZXRQcm90b3R5cGVPZih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudERhdGEpXHJcbiAgICAgIGxldCB1c2VyQWdlbnREYXRhOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgYXMgb2JqZWN0O1xyXG4gICAgICBsZXQgcGxhdGZvcm1kYXRhOiBzdHJpbmcgPSA8c3RyaW5nPnVzZXJBZ2VudERhdGEucGxhdGZvcm07XHJcbiAgICAgIHJldHVybiBwbGF0Zm9ybWRhdGE7XHJcbiAgICB9IGVsc2UgdGhpcy5icm93c2VycGxhdGZvcm0gPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRjb25uZWN0aW9udHlwZSgpIHtcclxuICAgIGlmIChcImNvbm5lY3Rpb25cIiBpbiB3aW5kb3cubmF2aWdhdG9yKSB7XHJcbiAgICAgIC8vY29ubmVjdGlvbiBpcyBOZXR3b3JrSW5mb3JtYXRpb24gdHlwZSwgbm90IGZvdW5kIGluIFR5cGVTY3JpcHQuXHJcbiAgICAgIC8vS25vd24gdG8gRWRnZSBicm93c2VyOiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yod2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uKVxyXG4gICAgICBsZXQgY29ubmVjdGlvbjogYW55ID0gd2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uIGFzIG9iamVjdDtcclxuICAgICAgbGV0IGVmZmVjdGl2ZXR5cGU6IHN0cmluZyA9IDxzdHJpbmc+Y29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlO1xyXG4gICAgICByZXR1cm4gZWZmZWN0aXZldHlwZTtcclxuICAgIH0gZWxzZSB0aGlzLmNvbm5lY3Rpb250eXBlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Y29ubmVjdGlvbnJ0dCgpIHtcclxuICAgIGlmIChcImNvbm5lY3Rpb25cIiBpbiB3aW5kb3cubmF2aWdhdG9yKSB7XHJcbiAgICAgIGxldCBjb25uZWN0aW9uOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yLmNvbm5lY3Rpb24gYXMgb2JqZWN0O1xyXG4gICAgICBsZXQgcnR0OiBzdHJpbmcgPSA8c3RyaW5nPmNvbm5lY3Rpb24ucnR0O1xyXG4gICAgICByZXR1cm4gcnR0O1xyXG4gICAgfSBlbHNlIHRoaXMuY29ubmVjdGlvbnJ0dCA9IFwiXCI7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjQtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5leHBvcnQgY2xhc3MgQ291bnRlciB7XHJcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbD86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBpbml0aWFsO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCB7IGFwaUdldCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBEaWN0aW9uYXJ5U2VhcmNoRWxlbWVudHMsIERpY3Rpb25hcnlTZWFyY2hQcmV2aW91c1dvcmRLZXlFbGVtZW50cyB9IGZyb20gXCIuL3dpZGdldE1hcmt1cEVsZW1lbnRzXCI7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVdvcmQgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VDYWNoZXNcIjtcclxuaW1wb3J0IERpY3Rpb25hcnlTZWFyY2hNYXJrdXAgZnJvbSBcIi4vZGljdGlvbmFyeVNlYXJjaE1hcmt1cFwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4vcndiRXJyb3JCdXNcIjtcclxuaW1wb3J0IHsgUndiUGFyc2VKc29uIH0gZnJvbSBcIi4vcndiSnNvbkNvbnZlcnRlclwiO1xyXG5pbXBvcnQgeyBSd2JTdHJpbmdpZnlKc29uIH0gZnJvbSBcIi4vcndiSnNvbkNvbnZlcnRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEEgRGljdGlvbmFyeVNlYXJjaCBpcyBhIHNldCBvZiBtYXJrdXAgY3JlYXRpb24gYW5kIGZ1bmN0aW9ucyB3aGljaCBhbGxvdyBhIHVzZXJcclxuICogIHRvIGxvb2sgdXAgYSB3b3JkIGxpa2UgYSBEaWN0aW9uYXJ5LiBXaGVuIGNhbGxlZCwgdGhlIHVzZXIncyBpbnB1dCBpcyB2YWxpZGF0ZWRcclxuICogIGFzIGFuIGFjY2VwdGFibGUgd29yZCBvciBpdCBkZWNsaW5lcyB0aGUgcmVxdWVzdCwgdGhlbiBzaG93aW5nIHRoZSB1c2VyIGlmIHRoZSB3b3JkXHJcbiAqICBpcyBhY2NlcHRhYmxlLlxyXG4gKlxyXG4gKiBDcmVhdGluZyBhIGRpY3Rpb25hcnkgc2VhcmNoIHdpZGdldCByZXF1aXJlcyBwYXNzaW5nIGEgcmVmZXJlbmNlIGVsZW1lbnQgKGZvciBhXHJcbiAqIGtub3duIHBsYWNlbWVudCBsb2NhdGlvbikgdGhhdCBjb250YWlucyB0aGUgJ2RpY3Rpb25hcnlXaWRnZXQnIGNsYXNzLlxyXG4gKlxyXG4gKiAgIG5ldyBEaWN0aW9uYXJ5U2VhcmNoKGVsZW0pO1xyXG4gKlxyXG4gKiBBbGwgdGhlIG5lZWRlZCBlbGVtZW50cyBhbmQgZnVuY3Rpb25hbGl0eSBhcmUgYWRkZWQgdG8gdGhlIHBhZ2UuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeVNlYXJjaCBleHRlbmRzIERpY3Rpb25hcnlTZWFyY2hNYXJrdXAge1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIHN0YXRpYyB3b3JkU3RvcmFnZTogbG9jYWxTdG9yYWdlV29yZFtdO1xyXG4gIHByaXZhdGUgc3RhdGljIENhY2hlU3RvcmFnZU5hbWVvZldvcmRSZXF1ZXN0OiBzdHJpbmcgPSBcIlJXQl93b3JkX2ZldGNoXCI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVxdWVzdFVybDogc3RyaW5nID0gXCJodHRwczovL2FwaS5kaWN0aW9uYXJ5YXBpLmRldi9hcGkvdjIvZW50cmllcy9lbi9cIjtcclxuICBwcml2YXRlIHByZXZpb3VzV29yZHNCdG5Jc0NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB3b3JkVVJMOiBVUkw7XHJcbiAgcHJpdmF0ZSB3b3JkRGF0YTogb2JqZWN0O1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGNvbnN0cnVjdG9yIGNyZWF0ZXMgYWxsIHRoZSBmdW5jdGlvbmFsaXR5IGFuZCBtYXJrdXAgbmVlZGVkIGZvciB0aGVcclxuICAgKiAgRGljdGlvbmFyeSBTZWFyY2ggd2lkZ2V0IGludGVyZmFjZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcGxhY2Ugd2lkZ2V0IG1hcmt1cC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtOiBFbGVtZW50KSB7XHJcbiAgICAvL0ludm9rZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLlxyXG4gICAgc3VwZXIoZWxlbSk7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hFbGVtZW50cyA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIC8vSW5pdGlhbGl6ZSB0aGUgZGljdGlvbmFyeSB3aWRnZXQgd2l0aCBjbGljayBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuYWRkV2lkZ2V0RXZlbnRzKCk7XHJcbiAgICAvL1N0b3JlIHdvcmRzIGNhY2hlIGRhdGEgd2l0aCBpbml0aWFsaXphdGlvbi5cclxuICAgIERpY3Rpb25hcnlTZWFyY2gud29yZFN0b3JhZ2UgPSBEaWN0aW9uYXJ5U2VhcmNoLmdldExvY2FsU3RvcmFnZVdvcmRDYWNoZXMoKTtcclxuICAgIERpY3Rpb25hcnlTZWFyY2guY291bnQrKztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIExvY2FsIFN0b3JhZ2Ugd29yZHMgcHJldmlvdXNseSBzdG9yZWQgd2l0aCB0aGUgRGljdGlvbmFyeSBTZWFyY2ggV2lkZ2V0LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgRGljdGlvbmFyeVNlYXJjaC53b3JkU3RvcmFnZSAtIHRoZXNlIGFyZSB0aGUgd29yZHMgc3RvcmVkIHByZXZpb3VzbHkgaW4gdGhlXHJcbiAgICogIGJyb3dzZXIgY2FjaGUuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2VXb3JkQ2FjaGVzKCkge1xyXG4gICAgLy9Mb2NhbCBTdG9yYWdlICd3b3JkLWNhY2hlcycgaXRlbXMgZGF0YSBhc3NpZ25tZW50XHJcbiAgICAvL2NhY2hlIHJlc3BvbnNlIGxpbmtzIGFuZCBjYWNoZSBuYW1lIGFyZSBwcmV2aW91c2x5IHN0b3JlZCBpbiBMb2NhbCBTdG9yYWdlXHJcbiAgICBsZXQgc3RvcmFnZVN0cjogc3RyaW5nO1xyXG4gICAgaWYgKFJ3YkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlRXF1YWxOdWxsKFwiRGljdGlvbmFyeVNlYXJjaFwiLCBcIndvcmQtY2FjaGVzXCIsIHRydWUsIHRydWUpKSB7XHJcbiAgICAgIC8vVGhlIExvY2FsIFN0b3JhZ2UgaXMgbnVsbCBvciBlbXB0eS0tPiBDb25maXJtIGhlcmUgdGhlIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhbnkgQ2FjaGUgU3RvcmFnZSBpdGVtcyBpbiBlcnJvclxyXG4gICAgICBpZiAoXCJjYWNoZXNcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgICBpZiAod2luZG93LmNhY2hlcy5oYXMoRGljdGlvbmFyeVNlYXJjaC5DYWNoZVN0b3JhZ2VOYW1lb2ZXb3JkUmVxdWVzdCkpIHtcclxuICAgICAgICAgIHdpbmRvdy5jYWNoZXMuZGVsZXRlKERpY3Rpb25hcnlTZWFyY2guQ2FjaGVTdG9yYWdlTmFtZW9mV29yZFJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIndvcmQtY2FjaGVzXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcmFnZVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid29yZC1jYWNoZXNcIik7XHJcbiAgICAvL2NoZWNrIHRoZSB3b3JkLWNhY2hlIHZhbHVlIGZvciBjb3JyZWN0IGpzb24gcGFyc2luZ1xyXG4gICAgbGV0IHBhcnNldGVzdCA9IE9iamVjdC5jcmVhdGUobmV3IFJ3YlBhcnNlSnNvbihzdG9yYWdlU3RyKSk7XHJcbiAgICBpZiAoIXBhcnNldGVzdC5wYXNzZWQpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ3b3JkLWNhY2hlc1wiKTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY0RlbGV0ZWQgc3RvcmFnZSBrZXk6IHdvcmQtY2FjaGVzYCxcclxuICAgICAgICBcImNvbG9yOm9yYW5nZTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICAgIFwiY29sb3I6b3JhbmdlO2ZvbnQtc2l6ZToxNnB4O1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZ2V0TG9jYWxTdG9yYWdlV29yZENhY2hlcygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2V0ZXN0LnJldHVybk9iajtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgdG8gcmV0dXJuIHRoZSBwcmV2aW91c2x5IHNlYXJjaGVkIHdvcmQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB0aGlzLndvcmRVUkxcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0V29yZFVSTCgpIHtcclxuICAgIHJldHVybiB0aGlzLndvcmRVUkw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsIHRvIHJldHVybiB0aGUgZmV0Y2hlZCB3b3JkIGRhdGEuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB0aGlzLndvcmREYXRhXHJcbiAgICovXHJcbiAgcHVibGljIGdldFdvcmREYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud29yZERhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGNsaWNrIGFuZCBrZXlwcmVzcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHdpZGdldC4gSW5wdXQgZXZlbnQgbGlzdGVuZXJzICdjbGljaydcclxuICAgKiAgYW5kICdrZXlwcmVzcycgYXdhaXQgZm9yIGEgc2VhcmNoIGNhbGwuIEFsc28sIHNob3VsZCBhIHVzZXIgd2FudCB0byBzZWFyY2ggYVxyXG4gICAqICBwcmV2aW91c2x5IHNlYXJjaGVkIHdvcmQsIHRoZSB3aWRnZXQgYWRhcHRzIG1hcmt1cCBmb3IgdGhhdCByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkV2lkZ2V0RXZlbnRzKCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRWxlbWVudHMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQSBzZWFyY2ggZWxlbWVudCBpcyB1bmRlZmluZWQgZnJvbSBzZWFyY2hXb3JkIHwgd29yZFNlYXJjaFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGljdGlvbmFyeS1idG5zXCIpO1xyXG4gICAgY29uc3QgaGlkZVByZXZpb3VzUGFuZWwgPSAoKSA9PiB7XHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHRoaXMucHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL0FkZCBmb3JtIGlucHV0IGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgLy9VcG9uIGlucHV0IGVudHJ5LCBmaXJlIEFQSSBmZXRjaFxyXG4gICAgdGhpcy5zZWFyY2hFbGVtZW50cy53b3JkU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMud29yZFNlYXJjaCh0aGlzLnNlYXJjaEVsZW1lbnRzLCBmYWxzZSwgbnVsbCk7XHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkKSBoaWRlUHJldmlvdXNQYW5lbCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlYXJjaEVsZW1lbnRzLnNlYXJjaFdvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gXCJFbnRlclwiKSByZXR1cm47XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMud29yZFNlYXJjaCh0aGlzLnNlYXJjaEVsZW1lbnRzLCBmYWxzZSwgbnVsbCk7XHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkKSBoaWRlUHJldmlvdXNQYW5lbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9cIlByZXZpb3VzIHdvcmQgc2VhcmNoZXNcIiBidXR0b24gZmV0Y2hlcyBsb2NhbGx5IHN0b3JlZCB3b3Jkc1xyXG4gICAgLy9DbGlja2luZyB0aGUgYnV0dG9uIGRpc3BsYXlzIGVhY2ggd29yZCBpbiBhIGxpc3Qgd2l0aGluIHRoZSB3aWRnZXRcclxuICAgIHRoaXMuc2VhcmNoRWxlbWVudHMucHJldmlvdXNXb3JkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY2hlY2tjcmVhdGVQcmV2aW91c1dvcmRCdXR0b25zKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1wiUmVmcmVzaFwiIGJ1dHRvbiByZWxvYWRzIHRoZSBwYWdlXHJcbiAgICB0aGlzLnNlYXJjaEVsZW1lbnRzLnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tjcmVhdGVQcmV2aW91c1dvcmRCdXR0b25zKCkge1xyXG4gICAgY29uc3QgcGxhY2VtZW50bG9jYXRpb25ob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZpb3VzV29yZHNcIik7XHJcbiAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gdGhpcy5zZWFyY2hFbGVtZW50cy5wcmV2aW91c1dvcmRzQ29udGFpbmVyO1xyXG5cclxuICAgIC8vQ2hlY2sgdGhlIHBsYWNlbWVudCBsb2NhdG9yIGFuZCB3b3JkIGNhY2hlcyBmb3IgdW5kZWZpbmVkXHJcbiAgICBpZiAocGxhY2VtZW50bG9jYXRpb25ob2xkZXIgPT0gbnVsbCB8fCBEaWN0aW9uYXJ5U2VhcmNoLndvcmRTdG9yYWdlID09IG51bGwpIHtcclxuICAgICAgaWYgKCF0aGlzLnByZXZpb3VzV29yZHNCdG5Jc0NyZWF0ZWQpIHtcclxuICAgICAgICBjb25zdCBub1dvcmRzSGVhZGluZ0VsZW0gPSBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgICAgbm9Xb3Jkc0hlYWRpbmdFbGVtLmNsYXNzTGlzdC5hZGQoXCJkaWN0aW9uYXJ5LWJ0blwiLCBcImVycm9yLW5vdGZvdW5kXCIpO1xyXG4gICAgICAgIG5vV29yZHNIZWFkaW5nRWxlbS50ZXh0Q29udGVudCA9IFwiUHJldmlvdXMgd29yZHMgbm90IGZvdW5kLiBUaGUgY2FjaGUgaXMgZW1wdHkuXCI7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1dvcmRzQnRuSXNDcmVhdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkKSB7XHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHRoaXMucHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQpIHtcclxuICAgICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgdGhpcy5wcmV2aW91c1dvcmRzQnRuV2FzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c1dvcmRzQnRuSXNDcmVhdGVkKSB7XHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jcmVhdGVQcmV2aW91c1dvcmRCdXR0b25zKHRoaXMucHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQsIGJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVByZXZpb3VzV29yZEJ1dHRvbnMocHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQ6IGFueSwgYnV0dG9uQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgaWYgKHByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkKSB7XHJcbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHRoaXMucHJldmlvdXNXb3Jkc0J0bldhc0NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHByZXZpb3Vzd29yZGJ1dHRvbnM6IERpY3Rpb25hcnlTZWFyY2hQcmV2aW91c1dvcmRLZXlFbGVtZW50c1tdID1cclxuICAgICAgdGhpcy5jcmVhdGVQcmV2aW91c1dvcmRTZWFyY2hlc0VsZW1lbnRzKERpY3Rpb25hcnlTZWFyY2gud29yZFN0b3JhZ2UsIGJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgICBmb3IgKGxldCBidG4gb2YgcHJldmlvdXN3b3JkYnV0dG9ucykge1xyXG4gICAgICB0aGlzLnByZXZpb3VzV29yZHNCdG5XYXNDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wcmV2aW91c1dvcmRzQnRuSXNDcmVhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIGZvciBuZXcgYnV0dG9uLlxyXG4gICAgICAvL3RoaXMgaXMgdGhlIGNhY2hlZCB3b3JkIGJ1dHRlbi4gd2hlbiBpdCdzIGNsaWNrZWQsIGZpcmUgYSB3b3JkIHNlYXJjaFxyXG4gICAgICBidG4uY2FjaGVXb3JkSGVhZGluZ0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLndvcmRTZWFyY2godGhpcy5zZWFyY2hFbGVtZW50cywgdHJ1ZSwgYnRuLndvcmQpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9NT0JJTEVcclxuICAgICAgLy93aGVuIGhvdmVyZWQsIGRpc3BsYXkgdGhlIGRlbGV0ZSBidXR0b24gb3B0aW9uXHJcbiAgICAgIGJ0bi53b3JkSGVhZGluZ0VsZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGJ0bi5kZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAvL3doZW4gbm90IGhvdmVyZWQsIGhpZGUgdGhlIGRlbGV0ZSBidXR0b24gb3B0aW9uXHJcbiAgICAgICAgYnRuLndvcmRIZWFkaW5nRWxlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnRuLmRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtLnN0eWxlLm9wYWNpdHkgPSBcIjUwJTtcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL3doZW4gaG92ZXJlZCwgZGlzcGxheSB0aGUgZGVsZXRlIGJ1dHRvbiBvcHRpb25cclxuICAgICAgYnRuLndvcmRIZWFkaW5nRWxlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgYnRuLmRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIC8vd2hlbiBub3QgaG92ZXJlZCwgaGlkZSB0aGUgZGVsZXRlIGJ1dHRvbiBvcHRpb25cclxuICAgICAgICBidG4ud29yZEhlYWRpbmdFbGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGJ0bi5kZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy93aGVuIGZvY3VzIChzdWNoIGFzIHVzaW5nIGtleWJvYXJkIG9ubHkpLCBkaXNwbGF5IHRoZSBkZWxldGUgYnV0dG9uXHJcbiAgICAgIGJ0bi5jYWNoZVdvcmRIZWFkaW5nRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL3doZW4gbm90IGZvY3VzZWQsIGhpZGUgdGhlIGRlbGV0ZSBidXR0b24gb3B0aW9uXHJcbiAgICAgIGJ0bi5kZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGJ0bi5jYWNoZVdvcmRIZWFkaW5nRWxlbSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4uZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIGZvciBkZWxldGUgYnV0dG9uXHJcbiAgICAgIGJ0bi5kZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJ0bi53b3JkSGVhZGluZ0VsZW1Db250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVEaWN0aW9uYXJ5VGVybWZyb21Mb2NhbFN0b3JhZ2UoYnRuLmNhY2hlV29yZEhlYWRpbmdFbGVtLnRleHRDb250ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSB3b3JkIHRvIHRoZSBicm93c2VyJ3MgTG9jYWwgU3RvcmFnZSBjb250YWluaW5nIHdvcmQgZGF0YSwgVVJMLCBhbmQgY2FjaGluZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBsb2NhbHN0b3JhZ2V2YWx1ZSAtIFRoaXMgaW50ZXJmYWNlIHN0b3JlcyBpbmZvcm1hdGlvbiB3aGVyZSBzZW5kaW5nIHRvIExvY2FsIFN0b3JhZ2UuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGREaWN0aW9uYXJ5VGVybXRvTG9jYWxTdG9yYWdlKGxvY2Fsc3RvcmFnZXZhbHVlOiBsb2NhbFN0b3JhZ2VXb3JkKSB7XHJcbiAgICAvL0xvZyB0aGUgd29yZCBjYWNoZSBjcmVhdGlvblxyXG4gICAgY29uc3QgYWRkZWR3b3JkY2FjaGUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAlYzxSV0I+JWNBZGRlZCB3b3JkIGNhY2hlOiAke2xvY2Fsc3RvcmFnZXZhbHVlLndvcmR9YCxcclxuICAgICAgICBcImNvbG9yOmN5YW47Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgICBcImNvbG9yOmN5YW47XCJcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICAvL1RoZSAnbG9jYWxzdG9yYWdldmFsdWUnIG5lZWRzIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UgY2FjaGVcclxuICAgIC8vTG9jYWwgc3RvcmFnZSBtYXkgYmUgZW1wdHkgb3IgYWxyZWFkeSBoYXZpbmcgdGhlIHdhbnRlZCBzZWFyY2hlZCB3b3JkXHJcbiAgICAvL0NoZWNrIHN0b3JhZ2UgaXMgbm90IG51bGwuIElmIGl0IGlzLCBhZGQgdGhlIHdvcmQuXHJcbiAgICBpZiAoRGljdGlvbmFyeVNlYXJjaC53b3JkU3RvcmFnZSA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChSd2JFcnJvci5jaGVja0xvY2FsU3RvcmFnZUVxdWFsTnVsbChcIkRpY3Rpb25hcnlTZWFyY2hcIiwgXCJ3b3JkLWNhY2hlc1wiLCBmYWxzZSwgZmFsc2UpKSB7XHJcbiAgICAgICAgLy9BZGQgdGhlIHN0b3JhZ2Ugd29yZCB0byBhbiBhcnJheVxyXG4gICAgICAgIGxldCB3b3JkU3RvcmU6IGxvY2FsU3RvcmFnZVdvcmRbXSA9IFtdO1xyXG4gICAgICAgIHdvcmRTdG9yZS5wdXNoKGxvY2Fsc3RvcmFnZXZhbHVlKTtcclxuICAgICAgICBsZXQganNvbnN0cjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgLy9DYWxsIFJXQlN0cmluZ2lmeUpTT04gdG8gc3RyaW5naWZ5IHRoZSBvYmplY3RcclxuICAgICAgICBsZXQgc3RyaW5naWZ5dGVzdHNpbmdsZXdvcmQgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JTdHJpbmdpZnlKc29uKHdvcmRTdG9yZSkpO1xyXG4gICAgICAgIGlmICghc3RyaW5naWZ5dGVzdHNpbmdsZXdvcmQucGFzc2VkKSB7XHJcbiAgICAgICAgICAvL3N0cmluZ2lmeSBvYmplY3QgZGlkIG5vdCB3b3JrLCBzbyByZXR1cm5cclxuICAgICAgICAgIC8vTE9HTEVBRlxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqc29uc3RyID0gc3RyaW5naWZ5dGVzdHNpbmdsZXdvcmQucmV0dXJuU3RyO1xyXG5cclxuICAgICAgICAvLyBMb2NhbCBzdG9yYWdlIGlzIGVtcHR5ID0+IGFkZCB0aGUgd29yZFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid29yZC1jYWNoZXNcIiwganNvbnN0cik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgJWM8UldCPiVjQ3JlYXRlZCBzdG9yYWdlIGtleTogd29yZC1jYWNoZXNgLFxyXG4gICAgICAgICAgXCJjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgICBcImNvbG9yOmN5YW47Zm9udC1zaXplOjE2cHg7XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGFkZGVkd29yZGNhY2hlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vTE9HTEVBRlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL0xvY2FsIHN0b3JhZ2UgaXMgbm90IGVtcHR5LiBIZXJlLCB3ZSBuZWVkIHRvIGFkZCB0aGUgd29yZCB0byB0aGUgZXhpc3Rpbmcgd29yZCBjYWNoZS5cclxuICAgIGxldCBhbGxjYWNoZTogbG9jYWxTdG9yYWdlV29yZFtdID0gRGljdGlvbmFyeVNlYXJjaC53b3JkU3RvcmFnZTtcclxuICAgIGxldCBqc29uc3RyOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIC8vTWF0Y2ggdGhlIGN1cnJlbnQgVVJMIGZvciBjYWNoZSBtYW5hZ2VtZW50XHJcbiAgICBmb3IgKGxldCBjYWNoZSBvZiBhbGxjYWNoZSkge1xyXG4gICAgICBpZiAoY2FjaGUud29yZFVSTCA9PSBsb2NhbHN0b3JhZ2V2YWx1ZS53b3JkVVJMKSB7XHJcbiAgICAgICAgLy9Xb3JkIGlzIGFscmVhZHkgaW4gTG9jYWwgU3RvcmFnZVxyXG4gICAgICAgIC8vTm8gbmVlZCB0byBhZGQgaXQgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgLy9MT0dMRUFGXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL0FkZCB3b3JkIHRvIGV4aXN0aW5nICd3b3JkLWNhY2hlcycgaW4gTG9jYWwgU3RvcmFnZVxyXG4gICAgYWxsY2FjaGUucHVzaChsb2NhbHN0b3JhZ2V2YWx1ZSk7XHJcblxyXG4gICAgLy9DYWxsIFJXQlN0cmluZ2lmeUpTT04gdG8gc3RyaW5naWZ5IHRoZSBvYmplY3RcclxuICAgIGxldCBzdHJpbmdpZnl0ZXN0ZG91Ymxld29yZCA9IE9iamVjdC5jcmVhdGUobmV3IFJ3YlN0cmluZ2lmeUpzb24oYWxsY2FjaGUpKTtcclxuICAgIGlmICghc3RyaW5naWZ5dGVzdGRvdWJsZXdvcmQucGFzc2VkKSB7XHJcbiAgICAgIC8vc3RyaW5naWZ5IG9iamVjdCBkaWQgbm90IHdvcmssIHNvIHJldHVyblxyXG4gICAgICAvL0xPR0xFQUZcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAganNvbnN0ciA9IHN0cmluZ2lmeXRlc3Rkb3VibGV3b3JkLnJldHVyblN0cjtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndvcmQtY2FjaGVzXCIsIGpzb25zdHIpO1xyXG4gICAgYWRkZWR3b3JkY2FjaGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIHByZXZpb3VzIHdvcmQgZGF0YSBmcm9tIGJyb3dzZXIncyBMb2NhbCBTdG9yYWdlIC0tPiBLZXkvVmFsdWVcclxuICAgKiBkYXRhIHJlZmVyZW5jaW5nIHdvcmRzIHN0b3JlZCBpbiBsb2NhbCBjYWNoZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBsb2NhbHN0b3JhZ2V3b3JkIC0gc3RyaW5nIGZyb20gXCJQcmV2aW91cyBXb3JkIFNlYXJjaGVzXCIgYnV0dG9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW1vdmVEaWN0aW9uYXJ5VGVybWZyb21Mb2NhbFN0b3JhZ2UobG9jYWxzdG9yYWdld29yZDogc3RyaW5nKSB7XHJcbiAgICAvL1JlbW92ZSB0aGUgY2FjaGUgaXRlbSB0byBMb2NhbCBTdG9yYWdlLCBDYWNoZSBTdG9yYWdlXHJcbiAgICAvL0NoZWNrIGxvY2FsIHN0b3JhZ2UgaXMgbm90IG51bGwgb3IgZW1wdHlcclxuICAgIGlmIChEaWN0aW9uYXJ5U2VhcmNoLndvcmRTdG9yYWdlID09IG51bGwpIHtcclxuICAgICAgLy9MT0dMRUFGXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vR2V0IHRoZSB3b3JkcyBhcnJheSBmcm9tIExvY2FsIFN0b3JhZ2VcclxuICAgIC8vUldCRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VOdWxsb3JFbXB0eShcIkRpY3Rpb25hcnlXaWRnZXRcIiwgXCJ3b3JkLWNhY2hlc1wiKTsgLy9sb2cgd2hldGhlciBmZXRjaGVkIHdvcmQgY2FjaGUgaXMgbnVsbCBvciBlbXB0eS5cclxuICAgIGxldCBhbGxjYWNoZTogbG9jYWxTdG9yYWdlV29yZFtdID0gRGljdGlvbmFyeVNlYXJjaC53b3JkU3RvcmFnZTtcclxuXHJcbiAgICAvL1JlbW92ZSB0aGUgd29yZCBmcm9tIENhY2hlIFN0b3JhZ2UgYW5kIExvY2FsIFN0b3JhZ2Ugd29yZCBhcnJheVxyXG4gICAgZm9yIChsZXQgd29yZENhY2hlIG9mIGFsbGNhY2hlKSB7XHJcbiAgICAgIGlmICh3b3JkQ2FjaGUud29yZCA9PSBsb2NhbHN0b3JhZ2V3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVSZXF1ZXN0ZnJvbUNhY2hlU3RvcmFnZSh3b3JkQ2FjaGUud29yZFVSTCk7XHJcbiAgICAgICAgYWxsY2FjaGUuc3BsaWNlKGFsbGNhY2hlLmluZGV4T2Yod29yZENhY2hlKSwgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgJWM8UldCPiVjRGVsZXRlZCB3b3JkIGNhY2hlOiAke2xvY2Fsc3RvcmFnZXdvcmR9YCxcclxuICAgICAgICAgIFwiY29sb3I6ZGFya2N5YW47Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgICAgIFwiY29sb3I6ZGFya2N5YW47XCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWxsY2FjaGUubGVuZ3RoID09IDApIHtcclxuICAgICAgLy9UaGUgcmVtb3ZlZCB3b3JkIHdhcyB0aGUgbGFzdCB3b3JkIGluIHRoZSBhcnJheSwgc28gcmVtb3ZlIHRoZSBjb250YWluZXJcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ3b3JkLWNhY2hlc1wiKTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY0RlbGV0ZWQgc3RvcmFnZSBrZXk6IHdvcmQtY2FjaGVzYCxcclxuICAgICAgICBcImNvbG9yOmRhcmtjeWFuO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpkYXJrY3lhbjtmb250LXNpemU6MTZweDtcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL0NhbGwgUldCU3RyaW5naWZ5SlNPTiB0byBzdHJpbmdpZnkgdGhlIG9iamVjdFxyXG4gICAgbGV0IHdvcmRjYWNoZXNzdHJmeXRlc3QgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JTdHJpbmdpZnlKc29uKGFsbGNhY2hlKSk7XHJcbiAgICBpZiAoIXdvcmRjYWNoZXNzdHJmeXRlc3QucGFzc2VkKSB7XHJcbiAgICAgIC8vTE9HTEVBRlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9SZXR1cm4gcmVtYWluaW5nIHdvcmRzIHRvIExvY2FsIFN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid29yZC1jYWNoZXNcIiwgd29yZGNhY2hlc3N0cmZ5dGVzdC5yZXR1cm5TdHIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgZmV0Y2ggcmVxdWVzdCBmcm9tIENhY2hlIFN0b3JhZ2UuIFV0aWxpemVzXHJcbiAgICogRGljdGlvbmFyeVNlYXJjaC5DYWNoZVN0b3JhZ2VOYW1lb2ZXb3JkUmVxdWVzdCBmb3IgY2FjaGUgbmFtZS5cclxuICAgKiBAcGFyYW0gcmVtb3ZlVVJMXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW1vdmVSZXF1ZXN0ZnJvbUNhY2hlU3RvcmFnZShyZW1vdmVVUkw6IFVSTCkge1xyXG4gICAgd2luZG93LmNhY2hlcy5vcGVuKERpY3Rpb25hcnlTZWFyY2guQ2FjaGVTdG9yYWdlTmFtZW9mV29yZFJlcXVlc3QpLnRoZW4oY2FjaGUgPT4ge1xyXG4gICAgICBjYWNoZXMubWF0Y2gocmVtb3ZlVVJMKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2JsZW0gbWF0Y2hpbmcgdGhlIHJlc3VsdC4gUmVzdWx0OiBcIiwgcmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGNhY2hlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmVzb2x2ZShyZXN1bHQpKTtcclxuICAgICAgICAgIGNhY2hlUHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY2FjaGUuZGVsZXRlKHJlbW92ZVVSTCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGR5bmFtaWNhbGx5IHJlY2FsbHMgYSB3b3JkIGRlZmluaXRpb24gcmVxdWVzdCBhbmQgaW5zdGFudGlhdGVzIGFwaUdFVCgpLiBUaGVcclxuICAgKiByZXR1cm5lZCBwcm9taXNlIGFsc28gZHltYW5pY2FsbHkgYW5zd2VycyB0aGUgd2lkZ2V0IG1hcmt1cC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB3b3JkIC0gVGhlIHdvcmQgc2VhcmNoZWQgZnJvbSB3aWRnZXQgaW5wdXQuXHJcbiAgICogQHBhcmFtIHdvcmRVcmwgLSBUaGUgZmV0Y2ggcmVxdWVzdCBVUkwuXHJcbiAgICogQHBhcmFtIHNlYXJjaEVsZW1zIC0gV2lkZ2V0IEVsZW1lbnRzIC0tIGtleSB3aWRnZXQgZnVuY3Rpb24gZWxlbWVudHMuXHJcbiAgICogQHBhcmFtIHNlbmRUb0NhY2hlIC0gPyBTZW5kIGZldGNoIHJlcXVlc3QgdG8gQ2FjaGUgU3RvcmFnZSA6IEZldGNoIHdpdGhvdXQgc3RvcmluZyB0aGUgcmVxdWVzdC5cclxuICAgKiBAcGFyYW0gY2FjaGVOYW1lIC0gSWYgc2VuZGluZyBmZXRjaCByZXF1ZXN0cyB0byBjYWNoZSwgcHJvdmlkZSBhIG5hbWUgdG8gc3RvcmUgaXQgdW5kZXIuXHJcbiAgICogQHJldHVybnMgLSB3b3JkRGF0YTogUHJvbWlzZTx1bmtub3duPlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmV0Y2hEaWN0aW9uYXJ5VGVybShcclxuICAgIHdvcmQ6IHN0cmluZyxcclxuICAgIHdvcmRVcmw6IFVSTCxcclxuICAgIHNlYXJjaEVsZW1zOiBEaWN0aW9uYXJ5U2VhcmNoRWxlbWVudHMsXHJcbiAgICBzZW5kVG9DYWNoZTogYm9vbGVhbixcclxuICAgIGNhY2hlTmFtZTogc3RyaW5nIHwgbnVsbFxyXG4gICkge1xyXG4gICAgLy9BIGZ1bmN0aW9uIGNhbGwgcGFyYW1ldGVyIG9wdGlvbiBpcyB0byBzdG9yZSB0aGUgd29yZCByZXF1ZXN0IGluIGJyb3dzZXIncyBDYWNoZSBTdG9yYWdlXHJcbiAgICAvL1N0cnVjdHVyZSB0aGUgd29yZCBkYXRhIHZpYSAnbG9jYWxzdG9yYWdld29yZHZhbHVlJyBpbnRlcmZhY2UgdXNlZCB0aHJvdWdob3V0IGZldGNoaW5nXHJcbiAgICBsZXQgd29yZGNhY2hlOiBsb2NhbFN0b3JhZ2VXb3JkID0ge1xyXG4gICAgICBpbkNhY2hlOiBzZW5kVG9DYWNoZSxcclxuICAgICAgd29yZDogd29yZCxcclxuICAgICAgd29yZFVSTDogd29yZFVybCxcclxuICAgICAgY2FjaGVOYW1lOiBzZW5kVG9DYWNoZSA/IGNhY2hlTmFtZSA6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vQXN5bmNocm9ub3VzIGZldGNoIHJlcWV1c3QgYW5kIGR5bmFtaWMgbWFya3VwIGNyZWF0aW9uIGZyb20gdGhlIGRhdGEncyByZXR1cm5cclxuICAgIGNvbnN0IHdvcmRGZXRjaFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vQ2FsbCBhcGlHRVQoKSBvYmplY3QgY29uc3RydWN0b3JcclxuICAgICAgY29uc3Qgd29yZEZldGNoID0gbmV3IGFwaUdldChcclxuICAgICAgICB3b3JkY2FjaGUud29yZFVSTCxcclxuICAgICAgICB3b3JkY2FjaGUuaW5DYWNoZSxcclxuICAgICAgICBzZWFyY2hFbGVtcy5lcnJvckVsZW0sXHJcbiAgICAgICAgd29yZGNhY2hlLmNhY2hlTmFtZVxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbm9EZWZpbml0aW9uczogYm9vbGVhbjtcclxuXHJcbiAgICAgIC8vRmV0Y2ggcmVxdWVzdCBtZXRob2QgY2FsbC4gUmV0dXJuZWQgZGF0YSBtYXkgYmUgdGhlIHdvcmQgZGVmaW5pdGlvblxyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHdvcmRGZXRjaC5hcGlHZXQod29yZEZldGNoLmdldEdldFVybCgpKTtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAvL0lmIHRoZSByZXR1cm5lZCBkYXRhIGlzIGEgc3RyaW5nLCBpdCBpcyB0aGUgd29yZCBkZWZpbml0aW9uIGRhdGEuXHJcbiAgICAgICAgbm9EZWZpbml0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwYXJzZXRlc3QgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JQYXJzZUpzb24oZGF0YSkpO1xyXG4gICAgICAgIGlmICghcGFyc2V0ZXN0LnBhc3NlZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0gcGFyc2V0ZXN0LnJldHVybk9iajtcclxuICAgICAgfVxyXG4gICAgICBsZXQgd29yZERhdGE6IGFueSA9IGRhdGE7XHJcbiAgICAgIC8vSWYgdGhlIHJldHVybmVkIGRhdGEgaXMgYW4gb2JqZWN0LCBjb25maXJtIGl0IGlzICdubyBkZWZpbml0aW9uJyBzZXJ2ZXIgZGF0YVxyXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmIChPYmplY3QuaGFzT3duKHdvcmREYXRhLCBcInRpdGxlXCIpKSB7XHJcbiAgICAgICAgICAvL05vIGRlZmluaXRpb25zIHdlcmUgZm91bmQgd2hlbiBkYXRhIGlzIGFuIG9iamVjdCB3aXRoIGEgdGl0bGUgcHJvcGVydHlcclxuICAgICAgICAgIC8vd29yZERhdGEudGl0bGUgPT0gXCJObyBEZWZpbml0aW9ucyBGb3VuZFwiXHJcbiAgICAgICAgICBub0RlZmluaXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgIGlmICh3b3JkRGF0YS50aXRsZSA9PSBcIk5vIERlZmluaXRpb25zIEZvdW5kXCIgJiYgd29yZGNhY2hlLmluQ2FjaGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvL1RoZSBkYXRhIHN0cmVhbSBoZXJlIGlzIHdpdGhvdXQgd29yZCBkYXRhLiBUaGlzIGZ1bmN0aW9uIGF3YWl0cyB0aGUgYXBpIGZldGNoJ3MgZGF0YVxyXG4gICAgICAgICAgICAvL3RvIGNvbXBsZXRlIHN0b3JhZ2UvcHJvbWlzZSByZXR1cm5zLiBJdCB3YWl0cyA1IHNlY29uZHMgZm9yIHRoZSBicm93c2VyIHRvIGNvbXBsZXRlIGl0cyBzdG9yZSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgLy90aGVuIHJlbW92ZXMgdGhlIHVud2FudGVkIGNhY2hlIHJlcXVlc3QuXHJcbiAgICAgICAgICAgIC8vVE9ETzpCVUdSRVNFQVJDSD0+RHVyaW5nIHRoZSA1IHRpbWVvdXQsIGlmIHRoZSBwYWdlIHJlZnJlc2hlcyBhICdiYWQgd29yZCcgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIGNhY2hlXHJcbiAgICAgICAgICAgIC8vVGhpcyAnYmFkIHdvcmQnIGNhbiBiZSByZW1vdmVkIGJ5IGRlbGV0aW5nIGFsbCBwcmV2aW91cyB3b3JkcyB2aWEgVUkgYW5kIHJlZnJlc2hpbmcgdGhlIHBhZ2UuIFRoaXMgd2lsbFxyXG4gICAgICAgICAgICAvLyBmaXJlIGdldExvY2FsU3RvcmFnZVdvcmRDYWNoZXMoKSB0byBjbGVhciBhbnkgbWlzbWF0Y2hlZCB3b3JkZGF0YTwtLT5jYWNoZWRyZXF1ZXN0cy5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9GdW5jdGlvbiBhd2FpdGluZyByZXF1ZXN0J3MgQ2FjaGUgU3RvcmFnZSBjYWNoaW5nXHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUmVxdWVzdGZyb21DYWNoZVN0b3JhZ2Uod29yZEZldGNoLmdldEdldFVybCgpKTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlbW92ZSBmcm9tIENhY2hlIFN0b3JhZ2UuIE5hbWU6IFwiLCB3b3JkRmV0Y2guZ2V0R2V0VXJsKCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhID09IHVuZGVmaW5lZCB8fCBub0RlZmluaXRpb25zKSB7XHJcbiAgICAgICAgLy9Hb29kIGRhdGEtLT4gcmV0dXJuIGRhdGEgZm9yIG1hcmt1cCByZW5kZXJcclxuICAgICAgICAvLydCYWQgZGF0YScgZHVlIHRvIFwiTm8gZGVmaW5pdGlvbnMgZm91bmRcIiwgaW52YWxpZCB3b3JkLCBiYWQgbmV0d29yayBjb25uZWN0aW9uXHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAvL09ubGluZSwgcHJvYmxlbSB3aXRoIGZldGNoXHJcbiAgICAgICAgICAvL09mZmxpbmUgcmVxdWVzdFxyXG4gICAgICAgICAgc2VhcmNoRWxlbXMuZXJyb3JFbGVtLmlubmVyVGV4dCArPSBcIiwgY2hlY2sgbmV0d29yayBjb25uZWN0aW9uLlwiO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9EZWZpbml0aW9ucykge1xyXG4gICAgICAgICAgLy9TZXJ2ZXIgcmV0dXJuZWQgbm8gZGVmaW5pdGlvbnMgZGF0YVxyXG4gICAgICAgICAgaWYgKHdvcmREYXRhLnRpdGxlID09IFwiTm8gRGVmaW5pdGlvbnMgRm91bmRcIilcclxuICAgICAgICAgICAgc2VhcmNoRWxlbXMuZXJyb3JFbGVtLmlubmVyVGV4dCA9IFwiTm8gRGVmaW5pdGlvbnMgRm91bmRcIjtcclxuICAgICAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS5jbGFzc0xpc3QuYWRkKFwiZXJyb3Itbm90Zm91bmRcIik7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWRkRGljdGlvbmFyeVRlcm10b0xvY2FsU3RvcmFnZSh3b3JkY2FjaGUpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICBsZXQgd29yZERhdGEgPSB3b3JkRmV0Y2hSZXF1ZXN0KCk7XHJcbiAgICByZXR1cm4gd29yZERhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VyIGlucHV0IHZhbGlkYXRpb24gZnVuY3Rpb24gdGVzdHMgdGhlIGlucHV0IHN0cmluZyBhZ2FpbnN0IGEgdmFsaWQgUmVndWxhciBFeHByZXNzaW9uLlxyXG4gICAqXHJcbiAgICogICAgUmVnRXhwKFwiXltBLVphLXpdezEsNDV9JFwiKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGludHh0IC0gU3RyaW5nIHZhbHVlIHJlY2VpdmVkIGZyb20gdXNlciBmaWVsZCBpbnB1dC5cclxuICAgKiBAcmV0dXJucyBBY2NlcHRhYmxlIHVzZXIgaW5wdXQ6IHRydWUgb3IgZmFsc2UuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB3b3JkVmFsaWRhdGlvbihpbnR4dDogc3RyaW5nKSB7XHJcbiAgICBsZXQgdHJpbW1lZCA9IGludHh0LnRyaW0oKTtcclxuICAgIGxldCBsZXR0ZXJzUkUgPSBuZXcgUmVnRXhwKFwiXltBLVphLXpdezEsNDV9JFwiKTtcclxuICAgIGlmIChsZXR0ZXJzUkUudGVzdCh0cmltbWVkKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vd29yZCBpcyBub3QgYW4gYWNjZXB0YWJsZSB3b3JkLmApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjYWxsRmV0Y2hEaWN0aW9uYXJ5VGVybSBhd2FpdHMgYSBwcm9taXNlLCBmZXRjaGluZyBhIGRpY3Rpb25hcnkgdGVybS4gVGhlIGRhdGFcclxuICAgKiBpbmdyZXNzIGNhbGxzIG1hcmt1cCBjcmVhdGlvbiBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzZWFyY2hFbGVtcyAtIFdpZGdldCBFbGVtZW50cyAtLSBrZXkgd2lkZ2V0IGZ1bmN0aW9uIGVsZW1lbnRzLlxyXG4gICAqIEBwYXJhbSB3b3JkIC0gVGhlIHdvcmQgdG8gYmUgZmV0Y2hlZC5cclxuICAgKiBAcGFyYW0gd29yZFVSTCAtIEEgVVJMIGNvbXBvc2luZyB0aGUgZnVsbCB1cmwgb2YgdGhlIGZldGNoIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjYWxsRmV0Y2hEaWN0aW9uYXJ5VGVybShzZWFyY2hFbGVtczogRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzLCB3b3JkOiBzdHJpbmcsIHdvcmRVUkw6IFVSTCkge1xyXG4gICAgLy8gV2hlbiB0aGUgd29yZCBkYXRhIHJlc29sdmVzLCBjYWxsIG1hcmt1cCBmdW5jdGlvbnNcclxuICAgIGxldCB3b3JkRGF0YVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgcmVzb2x2ZShcclxuICAgICAgICB0aGlzLmZldGNoRGljdGlvbmFyeVRlcm0oXHJcbiAgICAgICAgICB3b3JkLFxyXG4gICAgICAgICAgd29yZFVSTCxcclxuICAgICAgICAgIHNlYXJjaEVsZW1zLFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgIERpY3Rpb25hcnlTZWFyY2guQ2FjaGVTdG9yYWdlTmFtZW9mV29yZFJlcXVlc3RcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHdvcmREYXRhUHJvbWlzZS50aGVuKChkYXRhOiBvYmplY3QpID0+IHtcclxuICAgICAgdGhpcy53b3JkRGF0YSA9IGRhdGE7XHJcbiAgICAgIHRoaXMuY3JlYXRlRGljdGlvbmFyeVRlcm1XaXRoTWFya3VwKGRhdGEsIHNlYXJjaEVsZW1zKTtcclxuICAgICAgaWYgKGRhdGEgPT0gdW5kZWZpbmVkIHx8IE9iamVjdC5oYXNPd24oZGF0YSwgXCJ0aXRsZVwiKSkgcmV0dXJuO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWM8UldCPiVjUmV0cmlldmVkIHdvcmQ6ICR7d29yZH1gLCBcImNvbG9yOmdvbGQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIiwgXCJjb2xvcjpnb2xkO1wiKTtcclxuICAgICAgLy8gUmVtb3ZlIHVubmVlZGVkIGNsYXNzZXMgaWYgYXBwbGllZCBwcmV2aW91c2x5XHJcbiAgICAgIHNlYXJjaEVsZW1zLnNlYXJjaFdvcmQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XHJcbiAgICAgIHNlYXJjaEVsZW1zLnNlYXJjaFdvcmQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWQtbm90Zm91bmRcIik7XHJcbiAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3Itbm90Zm91bmRcIik7XHJcbiAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHdvcmRTZWFyY2goKSBiZWdpbnMgYSB3b3JkIHNlYXJjaCByZXF1ZXN0LiBUaGUgdXNlciBpbnB1dCBsaXN0ZW5lciBjaG9vc2VzXHJcbiAgICogd2hldGhlciB0aGUgZmV0Y2ggaXMgY2FsbGVkIGZyb20gY2FjaGUgb3IgaXMgbmV3LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNlYXJjaEVsZW1zIC0gV2lkZ2V0IEVsZW1lbnRzIC0tIGtleSB3aWRnZXQgZnVuY3Rpb24gZWxlbWVudHMuXHJcbiAgICogQHBhcmFtIGlzRnJvbVByZXZpb3VzV29yZHMgLSBUcnVlIGlmIHRoZSB1c2VyIHJlcXVlc3RlZCBhIHNlYXJjaCBmcm9tIGEgcHJldmlvdXMgd29yZCwgdG8gY2FsbCBkYXRhIGZyb20gQnJvd3NlciBDYWNoZS5cclxuICAgKiBAcGFyYW0gY2FjaGVkV29yZCAtIElmIHRoZSB1c2VyIGNhbGxlZCBmb3IgYSBwcmV2aW91cyB3b3JkLCBjYWNoZWRXb3JkIGlzIHdpdGhpbiB0aGUgTG9jYWwgU3RvcmFnZS5cclxuICAgKi9cclxuICBwcml2YXRlIHdvcmRTZWFyY2goXHJcbiAgICBzZWFyY2hFbGVtczogRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzLFxyXG4gICAgaXNGcm9tUHJldmlvdXNXb3JkczogYm9vbGVhbixcclxuICAgIGNhY2hlZFdvcmQ6IGxvY2FsU3RvcmFnZVdvcmQgfCBudWxsXHJcbiAgKSB7XHJcbiAgICBpZiAoaXNGcm9tUHJldmlvdXNXb3Jkcykge1xyXG4gICAgICB0aGlzLmNhbGxGZXRjaERpY3Rpb25hcnlUZXJtKHNlYXJjaEVsZW1zLCBjYWNoZWRXb3JkLndvcmQsIGNhY2hlZFdvcmQud29yZFVSTCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBUYWtlIHVzZXIgaW5wdXQgYW5kIGZpbHRlciB0byBhbiBhY2NlcHRlZCBzdHJpbmdcclxuICAgICAgbGV0IGFjY2VwdGVkSW5wdXRXb3JkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMud29yZFZhbGlkYXRpb24oc2VhcmNoRWxlbXMuc2VhcmNoV29yZC52YWx1ZSlcclxuICAgICAgICA/IChhY2NlcHRlZElucHV0V29yZCA9IHRydWUpXHJcbiAgICAgICAgOiAoYWNjZXB0ZWRJbnB1dFdvcmQgPSBmYWxzZSk7XHJcbiAgICAgIGlmIChhY2NlcHRlZElucHV0V29yZCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIFVSTCBvZiB0aGUgYWNjZXB0ZWQgd29yZCBmb3IgdXNlIGluIHRoZSBmZXRjaCBjYWxsXHJcbiAgICAgICAgdGhpcy53b3JkVVJMID0gbmV3IFVSTChzZWFyY2hFbGVtcy5zZWFyY2hXb3JkLnZhbHVlLnRvU3RyaW5nKCksIERpY3Rpb25hcnlTZWFyY2gucmVxdWVzdFVybCk7XHJcbiAgICAgICAgdGhpcy5jYWxsRmV0Y2hEaWN0aW9uYXJ5VGVybShzZWFyY2hFbGVtcywgc2VhcmNoRWxlbXMuc2VhcmNoV29yZC52YWx1ZSwgdGhpcy53b3JkVVJMKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWFyY2hFbGVtcy5zZWFyY2hXb3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkLW5vdGZvdW5kXCIpO1xyXG4gICAgICAgIHNlYXJjaEVsZW1zLnNlYXJjaFdvcmQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XHJcbiAgICAgICAgc2VhcmNoRWxlbXMuZXJyb3JFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvci1ub3Rmb3VuZFwiKTtcclxuICAgICAgICBzZWFyY2hFbGVtcy5lcnJvckVsZW0uY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgIHNlYXJjaEVsZW1zLmVycm9yRWxlbS50ZXh0Q29udGVudCA9IFwiSW52YWxpZCB3b3JkIVwiO1xyXG4gICAgICAgIHNlYXJjaEVsZW1zLnNlYXJjaFdvcmQuY2xhc3NMaXN0LmFkZChcImludmFsaWQtbm90Zm91bmRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlYXJjaEVsZW1zLnNlYXJjaFdvcmQudmFsdWUgPSBcIlwiOyAvLyByZXNldCBpbnB1dCBzdHJpbmdcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IHsgbG9jYWxTdG9yYWdlV29yZCB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUNhY2hlc1wiO1xyXG5pbXBvcnQgeyBEaWN0aW9uYXJ5U2VhcmNoRWxlbWVudHMsIERpY3Rpb25hcnlTZWFyY2hQcmV2aW91c1dvcmRLZXlFbGVtZW50cyB9IGZyb20gXCIuL3dpZGdldE1hcmt1cEVsZW1lbnRzXCI7XHJcblxyXG4vKipcclxuICogQSBEaWN0aW9uYXJ5U2VhcmNoV2lkZ2V0IGlzIG1hZGUgdG8gY3JlYXRlIHRoZSBtYXJrdXAgbmVlZGVkIGZvciB0aGVcclxuICogIERpY3Rpb25hcnkgU2VhcmNoLiBFbGVtZW50cyBhcmUgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIHBhZ2UgdG8gdGhlIGNsYXNzXHJcbiAqICAnZGljdGlvbmFyeVdpZGdldCdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpY3Rpb25hcnlTZWFyY2hNYXJrdXAge1xyXG4gIHB1YmxpYyBzZWFyY2hFbGVtZW50czogRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtOiBFbGVtZW50KSB7XHJcbiAgICAvL2luc2VydCB0aGUgd2lkZ2V0IGFmdGVyIHRoZSBwYXNzZWQgaW4gXCJlbGVtXCJcclxuICAgIGlmIChlbGVtID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWNUaGVyZSBpcyBubyBcImRpY3Rpb25hcnlXaWRnZXRcIiBjbGFzcyBvbiB0aGlzIHBhZ2UuYCwgXCJjb2xvcjogb3JhbmdlO1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImRpY3Rpb25hcnlXaWRnZXRcIikpIHtcclxuICAgICAgY29uc29sZS5sb2coYEFkZCBcImRpY3Rpb25hcnlXaWRnZXRcIiBjbGFzcyB0byAke2VsZW0ubm9kZU5hbWV9IG5vZGUuYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY3JlYXRlRGljdGlvbmFyeVdpZGdldE1hcmt1cChlbGVtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW1hcnkgd2lkZ2V0IG1hcmt1cCBzdHJ1Y3R1cmluZyB0aGUgd2lkZ2V0IGVsZW1lbnRzIGFuZCBzZWFyY2ggaW5wdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCBiZWZvcmUgdGhlIHdpZGdldC5cclxuICAgKiBAcmV0dXJucyBzZWFyY2hFbGVtZW50czogRGljdGlvbmFyeVNlYXJjaEVsZW1lbnRzIC0tPiBpbnRlcmZhY2Ugb2ZcclxuICAgKiAgaW1wb3J0YW50IEhUTUwgZWxlbWVudHMgdXNlZCB0aHJvdWdoIHdpZGdldCBmdW5jdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgY3JlYXRlRGljdGlvbmFyeVdpZGdldE1hcmt1cChlbGVtOiBFbGVtZW50KSB7XHJcbiAgICBjb25zdCBkaWN0aW9uYXJ5ID0gZWxlbS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKSk7XHJcbiAgICBpZiAoZGljdGlvbmFyeSA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGRldGVybWluZWQgZGljdGlvbmFyeSBlbGVtZW50IGlzIG51bGwuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBDcmVhdGUgd2lkZ2V0IGVsZW1lbnRzXHJcbiAgICBjb25zdCBhcnRIID0gZGljdGlvbmFyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIikpO1xyXG4gICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRpY3Rpb25hcnkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIikpO1xyXG4gICAgY29uc3QgcHJldmlvdXNXb3JkcyA9IGRpY3Rpb25hcnkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGVsZW1lbnRzIHVzZWQgaW4gbGF0ZXIgZnVuY3Rpb25zXHJcbiAgICBsZXQgc2VhcmNoRWxlbWVudHM6IERpY3Rpb25hcnlTZWFyY2hFbGVtZW50cyA9IHtcclxuICAgICAgc2VhcmNoV29yZDogc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLFxyXG4gICAgICB3b3JkU2VhcmNoOiBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpLFxyXG4gICAgICBkaWN0aW9uYXJ5RWxlbTogPEhUTUxFbGVtZW50PmRpY3Rpb25hcnksXHJcbiAgICAgIGVycm9yRWxlbTogc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSksXHJcbiAgICAgIHByZXZpb3VzV29yZEJ0bjogcHJldmlvdXNXb3Jkcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpKSxcclxuICAgICAgcHJldmlvdXNXb3Jkc0NvbnRhaW5lcjogZGljdGlvbmFyeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxcclxuICAgICAgcmVmcmVzaEJ0bjogcHJldmlvdXNXb3Jkcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpKSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnR5IHZhbHVlc1xyXG4gICAgY29uc3QgZm9udEF3ZXNvbWVTZWFyY2hJY29uID0gc2VhcmNoRWxlbWVudHMud29yZFNlYXJjaC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKSk7XHJcbiAgICBmb250QXdlc29tZVNlYXJjaEljb24uY2xhc3NMaXN0LmFkZChcImZhXCIpO1xyXG4gICAgZm9udEF3ZXNvbWVTZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zZWFyY2hcIik7XHJcbiAgICBwcmV2aW91c1dvcmRzLmNsYXNzTGlzdC5hZGQoXCJwcmV2aW91c1dvcmRzXCIpO1xyXG4gICAgc2VhcmNoRWxlbWVudHMuc2VhcmNoV29yZC5jbGFzc0xpc3QuYWRkKFwibW9ub3NwYWNlXCIpO1xyXG4gICAgc2VhcmNoRWxlbWVudHMucHJldmlvdXNXb3JkQnRuLmNsYXNzTGlzdC5hZGQoXCJkaWN0aW9uYXJ5LWJ0blwiKTtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnJlZnJlc2hCdG4uY2xhc3NMaXN0LmFkZChcImRpY3Rpb25hcnktYnRuXCIpO1xyXG4gICAgc2VhcmNoRWxlbWVudHMucHJldmlvdXNXb3JkQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5yZWZyZXNoQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5zZWFyY2hXb3JkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzZWFyY2hcIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5zZWFyY2hXb3JkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoLi4uXCIpO1xyXG4gICAgc2VhcmNoRWxlbWVudHMuc2VhcmNoV29yZC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiSW5wdXRcIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy53b3JkU2VhcmNoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy53b3JkU2VhcmNoLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJTZWFyY2hcIik7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5zZWFyY2hXb3JkLmlkID0gXCJzZWFyY2gtd29yZFwiO1xyXG4gICAgc2VhcmNoRWxlbWVudHMud29yZFNlYXJjaC5pZCA9IFwid29yZC1zZWFyY2hcIjtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnByZXZpb3VzV29yZEJ0bi5pbm5lclRleHQgPSBcIlByZXZpb3VzIFdvcmQgU2VhcmNoZXNcIjtcclxuICAgIHNlYXJjaEVsZW1lbnRzLnJlZnJlc2hCdG4uaW5uZXJUZXh0ID0gXCJSZWZyZXNoXCI7XHJcbiAgICBzZWFyY2hFbGVtZW50cy5wcmV2aW91c1dvcmRzQ29udGFpbmVyLmlkID0gXCJkaWN0aW9uYXJ5LWJ0bnNcIjtcclxuICAgIGRpY3Rpb25hcnkuaWQgPSBcImRpY3Rpb25hcnlcIjtcclxuICAgIHNlYXJjaEZvcm0uaWQgPSBcImRpY3Rpb25hcnktc2VhcmNoXCI7XHJcbiAgICBzZWFyY2hGb3JtLmFjdGlvbiA9IFwiaW5kZXguaHRtbFwiO1xyXG4gICAgYXJ0SC50ZXh0Q29udGVudCA9IFwiRGljdGlvbmFyeSBUZXJtOlwiO1xyXG5cclxuICAgIHRoaXMuc2VhcmNoRWxlbWVudHMgPSBzZWFyY2hFbGVtZW50cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgdGhlIG1hcmt1cCB0byBob3VzZSByZXR1cm5lZCB3b3JkcyBmcm9tIERpY3Rpb25hcnlTZWFyY2guIFRoZSBtYXJrdXBcclxuICAgKiAgaXMgY3JlYXRlZCBiYXNlZCBvbiBBUEkgZWdyZXNzLiBXb3JkcyBhbmQgdGhlaXIgZGVmaW5pdGlvbnMgdmFyeS4gVGhlIG1hcmt1cCBpc1xyXG4gICAqICBhZGFwdGl2ZSB0byByZXR1cm5lZCB3b3JkIGRhdGEgc3RydWN0dXJlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB3b3JkRGF0YSAtIFRoaXMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCBvZiB3b3JkIHR5cGVzLCBkZWZpbml0aW9ucywgYW5kIGV4YW1wbGVzLlxyXG4gICAqIEBwYXJhbSBzZWFyY2hFbGVtcyAtIFdpZGdldCBFbGVtZW50cyAtLSBrZXkgd2lkZ2V0IGZ1bmN0aW9uIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVEaWN0aW9uYXJ5VGVybVdpdGhNYXJrdXAod29yZERhdGE6IGFueSwgc2VhcmNoRWxlbXM6IERpY3Rpb25hcnlTZWFyY2hFbGVtZW50cykge1xyXG4gICAgaWYgKHdvcmREYXRhID09IG51bGwgfHwgISh3b3JkRGF0YSBpbnN0YW5jZW9mIE9iamVjdCkgfHwgT2JqZWN0Lmhhc093bih3b3JkRGF0YSwgXCJ0aXRsZVwiKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIiVjVGhlcmUgaXMgbm8gZGVmaW5pdGlvbiBmb3IgdGhpcyB3b3JkLlwiLCBcImNvbG9yOmRhcmtncmVlbjtcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgd29yZCBkZWZpbml0aW9uIHRvIHRoZSBkaWN0aW9uYXJ5IHdpZGdldFxyXG4gICAgY29uc3QgZGVmaW5pdGlvbkRlc2NyaXB0aW9uQ29udGFpbmVyID0gc2VhcmNoRWxlbXMuZGljdGlvbmFyeUVsZW0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICk7XHJcbiAgICBjb25zdCBkZWZpbml0aW9uRGVzY3JpcHRpb24gPSBkZWZpbml0aW9uRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICBkZWZpbml0aW9uRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTsgLy8gd29yZCBkZWZpbml0aW9uIHNlcGFyYXRvclxyXG4gICAgZGVmaW5pdGlvbkRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZWZpbml0aW9uRGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgLy8gVGhlIHdvcmQgZGF0YSByZXByZXNlbnRzIGNvbXBsZXggSlNPTiBvYmplY3RcclxuICAgIC8vIFJlY3Vyc2UgdGhlIHdvcmQgZGF0YSBvYmplY3QsIGFkZGluZyBlbGVtZW50cyBmcm9tIHRoZSB2YXJpb3VzIGxldmVsc1xyXG4gICAgd29yZERhdGEubWFwKCh3b3JkOiBhbnkpID0+IHtcclxuICAgICAgZGVmaW5pdGlvbkRlc2NyaXB0aW9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcIndvcmRcIiwgd29yZC53b3JkKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIlRoZSB3b3JkIGlzOiBcIix3b3JkKVxyXG4gICAgICBjb25zdCB3b3JkVGl0bGUgPSBkZWZpbml0aW9uRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpKTtcclxuICAgICAgd29yZFRpdGxlLnRleHRDb250ZW50ID0gd29yZC53b3JkO1xyXG4gICAgICAvL0FkZCB0aGUgd29yZCBhbmQgZXhhbXBsZXMgdG8gcGFnZVxyXG4gICAgICB3b3JkLm1lYW5pbmdzLm1hcCgod29yZFR5cGU6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXb3JkVHlwZSBhcmU6IFwiLCB3b3JkVHlwZSlcclxuICAgICAgICBjb25zdCB3b3JkVHlwZUggPSBkZWZpbml0aW9uRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpKTtcclxuICAgICAgICBjb25zdCB3b3JkVHlwZUxpc3QgPSBkZWZpbml0aW9uRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpKTtcclxuICAgICAgICB3b3JkVHlwZUgudGV4dENvbnRlbnQgPSB3b3JkVHlwZS5wYXJ0T2ZTcGVlY2g7XHJcbiAgICAgICAgd29yZFR5cGUuZGVmaW5pdGlvbnMubWFwKChkZWY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRlZmluaXRpb24gaXM6IFwiLCBkZWYpO1xyXG4gICAgICAgICAgbGV0IHdvcmRUeXBlRGVmSXRlbSA9IHdvcmRUeXBlTGlzdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xyXG4gICAgICAgICAgbGV0IGRlZmluaXRpb25QID0gd29yZFR5cGVEZWZJdGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpKTtcclxuICAgICAgICAgIGRlZmluaXRpb25QLnRleHRDb250ZW50ID0gZGVmLmRlZmluaXRpb247XHJcbiAgICAgICAgICBkZWZpbml0aW9uUC5jbGFzc0xpc3QuYWRkKFwid29yZERlZmluaXRpb25cIik7XHJcblxyXG4gICAgICAgICAgY29uc3QgYWRkQWRqYWNlbnRFbGVtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGVmaW5pdGlvbnMgaXM6IFwiLCBkZWYpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQID0gZGVmaW5pdGlvblAuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpKTtcclxuICAgICAgICAgICAgaWYgKG5ld1AgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1BpID0gbmV3UC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKSk7XHJcbiAgICAgICAgICAgICAgbmV3UGkudGV4dENvbnRlbnQgPSBkZWYuZXhhbXBsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZpbml0aW9uUC5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICAvL2NoZWNrIGlmIGtleSBcImV4YW1wbGVcIiBpcyBpbiBkZWZpbml0aW9uLiBJZiBpdCBpcywgYWRkIHRoZSBleGFtcGxlIHRvIGxpc3RcclxuICAgICAgICAgIFwiZXhhbXBsZVwiIGluIGRlZiA/IGFkZEFkamFjZW50RWxlbSgpIDogdHJ1ZSA9PSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY3JlYXRlIGNsZWFyIGJ1dHRvblxyXG4gICAgY29uc3QgZGVsZXRlV29yZFRlcm1IZWFkaW5nRWxlbSA9IGRlZmluaXRpb25EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgKTtcclxuICAgIGRlbGV0ZVdvcmRUZXJtSGVhZGluZ0VsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIndvcmQtY2xlYXJcIik7XHJcbiAgICBkZWxldGVXb3JkVGVybUhlYWRpbmdFbGVtLmNsYXNzTGlzdC5hZGQoXCJkaWN0aW9uYXJ5LXdvcmQtYnRuLWNsZWFyXCIpO1xyXG4gICAgZGVsZXRlV29yZFRlcm1IZWFkaW5nRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIC8vd2hlbiBjbGVhciBidXR0b24gaXMgaG92ZXJlZCwgZGlzcGxheSBpdFxyXG4gICAgZGVmaW5pdGlvbkRlc2NyaXB0aW9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBkZWxldGVXb3JkVGVybUhlYWRpbmdFbGVtLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIjtcclxuICAgICAgLy93aGVuIGNsZWFyIGJ1dHRvbiBpcyBub3QgaG92ZXJlZCwgaGlkZSBpdFxyXG4gICAgICBkZWZpbml0aW9uRGVzY3JpcHRpb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICBkZWxldGVXb3JkVGVybUhlYWRpbmdFbGVtLnN0eWxlLm9wYWNpdHkgPSBcIjUwJVwiO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vd2hlbiBjbGVhciBidXR0b24gaXMgY2xpY2tlZCwgY2xlYXIgdGhlIGVsZW1lbnRzXHJcbiAgICBkZWxldGVXb3JkVGVybUhlYWRpbmdFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRlZmluaXRpb25EZXNjcmlwdGlvbkNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY1JlbW92ZWQgd29yZDogJHtkZWZpbml0aW9uRGVzY3JpcHRpb25Db250YWluZXIuZ2V0QXR0cmlidXRlKFwid29yZFwiKX1gLFxyXG4gICAgICAgIFwiY29sb3I6Z29sZGVucm9kO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpnb2xkZW5yb2Q7XCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYWRkIGNsZWFyIGJ1dHRvbiB0byB3aWRnZXRcclxuICAgIGRlZmluaXRpb25EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWZpbml0aW9uRGVzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZVByZXZpb3VzV29yZFNlYXJjaGVzRWxlbWVudHMoXHJcbiAgICB3b3Jkc3RvcmFnZTogbG9jYWxTdG9yYWdlV29yZFtdLFxyXG4gICAgYnV0dG9uQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxyXG4gICkge1xyXG4gICAgbGV0IGJ1dHRvbnNhcnI6IERpY3Rpb25hcnlTZWFyY2hQcmV2aW91c1dvcmRLZXlFbGVtZW50c1tdID0gW107XHJcblxyXG4gICAgLy9CZWNhdXNlIHRoZSBsb2NhdG9yIGFuZCB0aGUgTG9jYWwgU3RvcmFnZSB2YWx1ZXMgYXJlIHZpYWJsZSwgY3JlYXRlIHRoZSBtYXJrdXBcclxuICAgIC8vbmVlZGVkIHRvIGRpc3BsYXkgdGhvc2Ugd29yZHMuIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHdpZGdldCBmdW5jdGlvbmFsaXR5LlxyXG4gICAgZm9yIChsZXQgd29yZENhY2hlIG9mIHdvcmRzdG9yYWdlKSB7XHJcbiAgICAgIGNvbnN0IHdvcmRIZWFkaW5nRWxlbUNvbnRhaW5lciA9IGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgY29uc3QgY2FjaGVXb3JkSGVhZGluZ0VsZW0gPSB3b3JkSGVhZGluZ0VsZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSk7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUNhY2hlV29yZEhlYWRpbmdFbGVtID0gd29yZEhlYWRpbmdFbGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgKTtcclxuICAgICAgZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvbi1jbGVhclwiKTtcclxuICAgICAgZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0uY2xhc3NMaXN0LmFkZChcImRpY3Rpb25hcnktd29yZC1idG4tY2xlYXJcIik7XHJcbiAgICAgIGNhY2hlV29yZEhlYWRpbmdFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgIGNhY2hlV29yZEhlYWRpbmdFbGVtLmNsYXNzTGlzdC5hZGQoXCJkaWN0aW9uYXJ5LWJ0blwiLCBcImRpY3Rpb25hcnktd29yZC1idG5cIik7XHJcbiAgICAgIGNhY2hlV29yZEhlYWRpbmdFbGVtLnRleHRDb250ZW50ID0gd29yZENhY2hlLndvcmQ7XHJcblxyXG4gICAgICBsZXQgcHJldmlvdXN3b3JkYnRuOiBEaWN0aW9uYXJ5U2VhcmNoUHJldmlvdXNXb3JkS2V5RWxlbWVudHMgPSB7XHJcbiAgICAgICAgd29yZDogd29yZENhY2hlLFxyXG4gICAgICAgIGNhY2hlV29yZEhlYWRpbmdFbGVtOiBjYWNoZVdvcmRIZWFkaW5nRWxlbSxcclxuICAgICAgICB3b3JkSGVhZGluZ0VsZW1Db250YWluZXI6IHdvcmRIZWFkaW5nRWxlbUNvbnRhaW5lcixcclxuICAgICAgICBkZWxldGVDYWNoZVdvcmRIZWFkaW5nRWxlbTogZGVsZXRlQ2FjaGVXb3JkSGVhZGluZ0VsZW0sXHJcbiAgICAgIH07XHJcbiAgICAgIGJ1dHRvbnNhcnIucHVzaChwcmV2aW91c3dvcmRidG4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1dHRvbnNhcnI7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHJlY29yZCByZWZlcmVuY2UgZXJyb3JzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSd2JFcnJvciB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFJ3YkVycm9yLmNvdW50Kys7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBhbiBlbGVtZW50IGlzIG51bGwgdXNpbmcgcXVlcnlTZWxlY3RvcigpXHJcbiAgICpcclxuICAgKiAgICAgICB0cnkge1xyXG4gICAqICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbiAgICogICAgICAgfVxyXG4gICAqICAgICAgIGNhdGNoIHtcclxuICAgKiAgICAgICAgICAgLy9mdW5jdGlvbiBleGNlcHRpb24gaGFuZGxpbmdcclxuICAgKiAgICAgICB9XHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZSAtIEEgbmFtZSBmb3IgdGhlIGNvbXBvbmVudCBpbiB1c2UuXHJcbiAgICogQHBhcmFtIGNzc1F1ZXJ5IC0gQSBjc3Mgc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBsb2dNZXNzYWdlIC0gQ2hvb3NlIHRvIGxvZyBhIG1lc3NhZ2UgdG8gY29uc29sZS5cclxuICAgKiBAcGFyYW0gc3VwcmVzc0V4Y2VwdGlvbiAtIENob29zZSB0byBzdXByZXNzIHRoZSBleGNlcHRpb24gbG9nLlxyXG4gICAqIEByZXR1cm5zIEhUTUxFbGVtZW50IGZyb20gcXVlcnlTZWxlY3RvcigpXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgIGNvbXBvbmVudE5hbWU6IHN0cmluZyxcclxuICAgIGNzc1F1ZXJ5OiBzdHJpbmcsXHJcbiAgICBsb2dNZXNzYWdlPzogYm9vbGVhbixcclxuICAgIHN1cHJlc3NFeGNlcHRpb24/OiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICBsZXQgZWxlbTogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbGV0IGxvZ0Vyck1zc2c6IGJvb2xlYW4gPSB0cnVlOyAvL0xvZyBtZXNzYWdlIG9wdGlvbiBkZWZhdWx0XHJcbiAgICBpZiAoIWxvZ01lc3NhZ2UpIGxvZ0Vyck1zc2cgPSBsb2dNZXNzYWdlO1xyXG4gICAgbGV0IHN1cHJlc3NFeGNwdDogYm9vbGVhbiA9IGZhbHNlOyAvL1N1cHJlc3MgbWVzc2FnZSBvcHRpb24gZGVmYXVsdFxyXG4gICAgaWYgKHN1cHJlc3NFeGNlcHRpb24pIHN1cHJlc3NFeGNwdCA9IHRydWU7XHJcbiAgICBsZXQgcXVlcnk6IHN0cmluZyA9IGAke2Nzc1F1ZXJ5fWA7XHJcblxyXG4gICAgLy8gQWRkIGRpY3Rpb25hcnkgd2lkZ2V0IGlmIGFuIGVsZW1lbnQgd2l0aCB0aGF0IGNsYXNzIGlzIG9uIGEgcGFnZVxyXG4gICAgdHJ5IHtcclxuICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIE9iamVjdC5jcmVhdGUobmV3IFJ3YlJlZmVyZW5jZUVycm9yKFwiR2V0RWxlbWVudFwiLCBgQ291bGQgbm90IGdldCBlbGVtZW50OiAnJHtxdWVyeX0nYCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW0gPT0gbnVsbCkge1xyXG4gICAgICBpZiAobG9nRXJyTXNzZykgY29uc29sZS53YXJuKGAlY05vIGVsZW1lbnQgZm91bmQgd2l0aCBxdWVyeTogJHtxdWVyeX0uYCwgXCJjb2xvcjogb3JhbmdlO1wiKTtcclxuICAgICAgaWYgKCFzdXByZXNzRXhjcHQpXHJcbiAgICAgICAgT2JqZWN0LmNyZWF0ZShuZXcgUndiUmVmZXJlbmNlRXJyb3IoYCR7Y29tcG9uZW50TmFtZX1OdWxsUmVmZXJlbmNlYCwgYEVsZW1lbnQgbm90IGZvdW5kYCkpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBpZiBsb2NhbCBzdG9yYWdlIGlzIG51bGwuIE9wdGlvbmFsIGNob29zZSB0byBhbHNvIGNoZWNrIGlmIGxvY2FsIHN0b3JhZ2Ugc3RyaW5nIGlzIGVtcHR5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBjb21wb25lbnQgaW4gdXNlLlxyXG4gICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5J3MgbmFtZSB5b3UncmUgY2hlY2tpbmcgZm9yLlxyXG4gICAqIEBwYXJhbSBjaGVja0VtcHR5U3RyaW5nIC0gT3B0aW9uYWwgcGFyYW1ldGVyIHRvIGNoZWNrIGZvciBlbXB0eSBrZXktdmFsdWUuXHJcbiAgICogQHBhcmFtIGxvZ01lc3NhZ2UgLSBDaG9vc2UgdG8gbG9nIGEgbWVzc2FnZSB0byBjb25zb2xlLlxyXG4gICAqIEByZXR1cm5zIEJvb2xlYW4gdHJ1ZSBvciBmYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY2tMb2NhbFN0b3JhZ2VFcXVhbE51bGwoXHJcbiAgICBjb21wb25lbnROYW1lOiBzdHJpbmcsXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIGNoZWNrRW1wdHlTdHJpbmc/OiBib29sZWFuLFxyXG4gICAgbG9nTWVzc2FnZT86IGJvb2xlYW5cclxuICApIHtcclxuICAgIGxldCBsb2dNc3NnOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmICghbG9nTWVzc2FnZSkgbG9nTXNzZyA9IGxvZ01lc3NhZ2U7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7a2V5fWApID09IG51bGwpIHtcclxuICAgICAgaWYgKGxvZ01zc2cpIGNvbnNvbGUuaW5mbyhgJWNObyBsb2NhbCBzdG9yYWdlIGZvciAke2NvbXBvbmVudE5hbWV9LmAsIFwiY29sb3I6cHVycGxlO1wiKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlY2tFbXB0eVN0cmluZykgcmV0dXJuIFJ3YkVycm9yLmNoZWNrTG9jYWxTdG9yYWdlTnVsbG9yRW1wdHkoY29tcG9uZW50TmFtZSwga2V5LCBsb2dNc3NnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgaWYgbG9jYWwgc3RvcmFnZSBpcyBudWxsIG9yIGVtcHR5LlxyXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lIC0gQSBuYW1lIGZvciB0aGUgY29tcG9uZW50IGluIHVzZS5cclxuICAgKiBAcGFyYW0ga2V5IC0gVGhlIGtleSdzIG5hbWUgeW91J3JlIGNoZWNraW5nIGZvci5cclxuICAgKiBAcGFyYW0gbG9nTWVzc2FnZSAtIENob29zZSB0byBsb2cgYSBtZXNzYWdlIHRvIGNvbnNvbGUuXHJcbiAgICogQHJldHVybnMgQm9vbGVhbiB0cnVlIG9yIGZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja0xvY2FsU3RvcmFnZU51bGxvckVtcHR5KGNvbXBvbmVudE5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIGxvZ01lc3NhZ2U/OiBib29sZWFuKSB7XHJcbiAgICBsZXQgbG9nTXNzZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpZiAoIWxvZ01lc3NhZ2UpIGxvZ01zc2cgPSBsb2dNZXNzYWdlO1xyXG4gICAgbGV0IHRlc3Q6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdGVzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2tleX1gKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBnZXQgbG9jYWwgc3RvcmFnZSBrZXk6ICR7a2V5fWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRlc3QgPT0gbnVsbCkge1xyXG4gICAgICBpZiAobG9nTXNzZykgY29uc29sZS53YXJuKGAlY0xvY2FsIHN0b3JhZ2Uga2V5IG5vdCBmb3VuZDogJHtrZXl9LmAsIFwiY29sb3I6IHllbGxvdztmb250LXdlaWdodDpib2xkO1wiKTtcclxuICAgICAgT2JqZWN0LmNyZWF0ZShuZXcgUndiUmVmZXJlbmNlRXJyb3IoYCR7Y29tcG9uZW50TmFtZX1SZWZlcmVuY2VFeGNlcHRpb25gLCBgS2V5IG5vdCBmb3VuZGApKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGVzdCA9PSBcIlwiIHx8IHRlc3QgPT0gXCJbXVwiKSB7XHJcbiAgICAgIGlmIChsb2dNc3NnKVxyXG4gICAgICAgIGNvbnNvbGUud2FybihgJWNMb2NhbCBzdG9yYWdlIHZhbHVlIGlzIGVtcHR5IGZvciBrZXk6ICR7a2V5fWAsIFwiY29sb3I6IHllbGxvdztmb250LXdlaWdodDpib2xkO1wiKTtcclxuICAgICAgT2JqZWN0LmNyZWF0ZShuZXcgUndiUmVmZXJlbmNlRXJyb3IoYCR7Y29tcG9uZW50TmFtZX1SZWZlcmVuY2VFeGNlcHRpb25gLCBgVmFsdWUgaXMgZW1wdHlgKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIENyZWF0ZSB0aGlzIG9iamVjdCB0byBzdG9yZSByZWZlcmVuY2UgZXJyb3IgZGF0YS4gKi9cclxuZXhwb3J0IGNsYXNzIFJ3YlJlZmVyZW5jZUVycm9yIGV4dGVuZHMgUmVmZXJlbmNlRXJyb3Ige1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIHJlZkVycm9yOiBSZWZlcmVuY2VFcnJvcjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMucGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBlcnIgPSBuZXcgUmVmZXJlbmNlRXJyb3IodGhpcy5tZXNzYWdlKTtcclxuICAgIHRoaXMucmVmRXJyb3IgPSBlcnI7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBgJWM8UldCPiVjRXhlY3V0aW9uIGV4cGVyaWVuY2VkIGEgcmVmZXJlbmNlIGVycm9yOlxcbiVvXFxuJWM8L1JXQj5gLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICBcImNvbG9yOnJlZDtcIixcclxuICAgICAgdGhpcy5yZWZFcnJvcixcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIlxyXG4gICAgKTtcclxuICAgIFJ3YlJlZmVyZW5jZUVycm9yLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHN0b3JlIHN5bnRheCBlcnJvciBkYXRhLiAqL1xyXG5leHBvcnQgY2xhc3MgUndiU3ludGF4RXJyb3IgZXh0ZW5kcyBTeW50YXhFcnJvciB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3ludGF4RXJyb3I6IFN5bnRheEVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBTeW50YXhFcnJvcih0aGlzLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5zeW50YXhFcnJvciA9IGVycjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIGAlYzxSV0I+JWNFeGVjdXRpb24gZXhwZXJpZW5jZWQgYSBzeW50YXggZXJyb3I6XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnN5bnRheEVycm9yLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiU3ludGF4RXJyb3IuY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSd2JEb21FeGNlcHRpb24gZXh0ZW5kcyBET01FeGNlcHRpb24ge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHN0YWNrOiBhbnk7XHJcbiAgcHVibGljIHBhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIGRvbUVycm9yOiBET01FeGNlcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBlcnJvcjogYW55KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLnN0YWNrID0gZXJyb3I7XHJcbiAgICB0aGlzLnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBsZXQgZXJyID0gbmV3IERPTUV4Y2VwdGlvbih0aGlzLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5kb21FcnJvciA9IGVycjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIGAlYzxSV0I+JWNFeGVjdXRpb24gZXhwZXJpZW5jZWQgYSBET00gZXJyb3I6XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnN0YWNrLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiRG9tRXhjZXB0aW9uLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUndiSW52YWxpZFZhbHVlRXJyb3IgZXh0ZW5kcyBSYW5nZUVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzeW50YXhFcnJvcjogUmFuZ2VFcnJvcjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMucGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBlcnIgPSBuZXcgUmFuZ2VFcnJvcih0aGlzLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5zeW50YXhFcnJvciA9IGVycjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIGAlYzxSV0I+JWNWYWx1ZSBvdXQgb2YgcmFuZ2UgZXhjZXB0aW9uOlxcbiVvXFxuJWM8L1JXQj5gLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiLFxyXG4gICAgICBcImNvbG9yOnJlZDtcIixcclxuICAgICAgdGhpcy5zeW50YXhFcnJvcixcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIlxyXG4gICAgKTtcclxuICAgIFJ3YlN5bnRheEVycm9yLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCB7IFJ3YlN5bnRheEVycm9yIH0gZnJvbSBcIi4vcndiRXJyb3JCdXNcIjtcclxuXHJcbi8qKiBBbiBSd2JQYXJzZUpzb24gcGFyc2VzIGpzb24gYW5kIHN0b3JlcyB0aGUgcGFyc2VkIHN0cmluZyB3aXRoIHRoZSByZXN1bHQuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JQYXJzZUpzb24ge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgcmV0dXJuT2JqOiBvYmplY3Q7XHJcbiAgcHVibGljIHBhc3NlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIHBhcnNlU3RyOiBzdHJpbmc7XHJcblxyXG4gIC8qKkNyZWF0ZSB0aGlzIG9iamVjdCB0byBzdG9yZSBwYXJzZSByZXN1bHRzIGFuZCBwYXJzZWRcclxuICAgKiBKU09OIG9iamVjdC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJzZVN0cjogc3RyaW5nKSB7XHJcbiAgICBSd2JQYXJzZUpzb24uY291bnQrKztcclxuICAgIHRoaXMucGFyc2VTdHIgPSBwYXJzZVN0cjtcclxuICAgIHRoaXMucGFzc2VkID0gdGhpcy5wYXJzZUpzb24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFyc2VKc29uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5yZXR1cm5PYmogPSBKU09OLnBhcnNlKHRoaXMucGFyc2VTdHIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLnJldHVybk9iaiA9IG51bGw7XHJcbiAgICAgIG5ldyBSd2JTeW50YXhFcnJvcihcIlBhcnNlRXJyb3JcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQW4gUndiUGFyc2VKc29uIHRlc3RzIHdoZXRoZXIgYW4gb2JqZWN0IGNhbiBiZSBzdHJpbmdpZmllZCBpbnRvIGEgdmFsaWRcclxuICoganNvbiBzdHJpbmcuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JTdHJpbmdpZnlKc29uIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIHJldHVyblN0cjogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYXNzZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBqc29uOiBhbnk7XHJcbiAgLyoqQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHN0b3JlIHBhcnNlIHJlc3VsdHMgYW5kIHBhcnNlZFxyXG4gICAqIEpTT04gb2JqZWN0LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xyXG4gICAgUndiU3RyaW5naWZ5SnNvbi5jb3VudCsrO1xyXG4gICAgdGhpcy5qc29uID0ganNvbjtcclxuICAgIHRoaXMucGFzc2VkID0gdGhpcy5zdHJpbmdpZnlKc29uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0cmluZ2lmeUpzb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJldHVyblN0ciA9IEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMucmV0dXJuU3RyID0gbnVsbDtcclxuICAgICAgbmV3IFJ3YlN5bnRheEVycm9yKFwiU3RyaW5naWZ5RXJyb3JcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG4vKipcclxuICogSFRNTCBsaW5rIGVsZW1lbnQgZGF0YS4gVXNlZCB3aXRoIGFuY2hvciB0YWdzLlxyXG4gKi9cclxuY2xhc3MgUndiTGluayB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIC8qKkhUTUwgdGl0bGUgYXR0cmlidXRlICovXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqSW5uZXIgdGV4dCBzdHJpbmcgKi9cclxuICBwdWJsaWMgaW5uZXJUZXh0OiBzdHJpbmc7XHJcbiAgLyoqVGhlIHBhZ2UgdGhlIGxpbmsgaXMgYXNzb2NpYXRlZCB0byAqL1xyXG4gIHB1YmxpYyBwYWdlTmFtZTogc3RyaW5nO1xyXG4gIC8qKkhUTUwgaHJlZiBhdHRyaWJ1dGUgKi9cclxuICBwdWJsaWMgaFJlZmVyZW5jZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBpbm5lclRleHQ6IHN0cmluZywgcGFnZU5hbWU6IHN0cmluZywgaFJlZmVyZW5jZTogc3RyaW5nKSB7XHJcbiAgICAodGhpcy50aXRsZSA9IHRpdGxlKSxcclxuICAgICAgKHRoaXMuaW5uZXJUZXh0ID0gaW5uZXJUZXh0KSxcclxuICAgICAgKHRoaXMucGFnZU5hbWUgPSBwYWdlTmFtZSksXHJcbiAgICAgICh0aGlzLmhSZWZlcmVuY2UgPSBoUmVmZXJlbmNlKSxcclxuICAgICAgUndiTGluay5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUndiTGluaztcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmludGVyZmFjZSBTY3JpcHRSdW50aW1lIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhcnRNYXJrOiBQZXJmb3JtYW5jZU1hcms7XHJcbiAgZW5kTWFyazogUGVyZm9ybWFuY2VNYXJrO1xyXG59XHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHJlY29yZCBwZXJmb3JtYW5jZSBzdGFydCBhbmQgZW5kIG1hcmtzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSd2JQZXJmIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBzY3JpcHRSdW50aW1lTWFya3M6IFNjcmlwdFJ1bnRpbWUgPSB7XHJcbiAgICBuYW1lOiBudWxsLFxyXG4gICAgc3RhcnRNYXJrOiBudWxsLFxyXG4gICAgZW5kTWFyazogbnVsbCxcclxuICB9O1xyXG5cclxuICAvKiogSW5zdGFudGlhdGluZyBhIFNjcmlwdFBlcmYgcmVjb3JkcyB0aGUgcGVyZm9ybWFuY2Ugc3RhcnQgbWFyay4gKi9cclxuICBjb25zdHJ1Y3RvcihzY3JpcHROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWUgPSBzY3JpcHROYW1lO1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3Muc3RhcnRNYXJrID0gcGVyZm9ybWFuY2UubWFyayhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfS1zdGFydGApO1xyXG4gICAgUndiUGVyZi5jb3VudCsrO1xyXG4gIH1cclxuXHJcbiAgLyoqIENhbGwgZW5kKCkgdG8gc2V0IHRoZSBlbmQgdGltZSBzdGFtcC4gKi9cclxuICBwdWJsaWMgZW5kKCkge1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MuZW5kTWFyayA9IHBlcmZvcm1hbmNlLm1hcmsoYCR7dGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZX0tZW5kYCk7XHJcbiAgICB0aGlzLm1lYXN1cmUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBBIGNvbnNvbGUgb3V0cHV0IG9mIHRoaXMgb2JqZWN0J3MgcGVyZm9ybWFuY2UgbWVhc3VyZW1lbnQuICovXHJcbiAgcHJpdmF0ZSBtZWFzdXJlKCkge1xyXG4gICAgbGV0IG1lYXN1cmUgPSBwZXJmb3JtYW5jZS5tZWFzdXJlKFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lLFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5zdGFydE1hcmsubmFtZSxcclxuICAgICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MuZW5kTWFyay5uYW1lXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuZGVidWcoYCR7dGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZX0gZXhlY3V0aW9uIHRpbWUgaXM6ICR7bWVhc3VyZS5kdXJhdGlvbn1gKTtcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IHsgVG9Eb0xpc3RFbGVtZW50cyB9IGZyb20gXCIuL3dpZGdldE1hcmt1cEVsZW1lbnRzXCI7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVRvRG9DYWNoZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUNhY2hlc1wiO1xyXG5pbXBvcnQgeyBSd2JQYXJzZUpzb24sIFJ3YlN0cmluZ2lmeUpzb24gfSBmcm9tIFwiLi9yd2JKc29uQ29udmVydGVyXCI7XHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi9yd2JFcnJvckJ1c1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgVG9Eb0xpc3QgaXMgYW4gSFRNTCB3aWRnZXQgdG8gc3RvcmUgVG8tRG9zIGluIHRoZSBicm93c2VyLiBJbnN0YW50aWF0ZSB0aGVcclxuICogIFRvRG9MaXN0IGNvbnN0cnVjdG9yIHRvIGNyZWF0ZSB3aWRnZXQgbWFya3VwIGFuZCBmdW5jdGlvbmFsaXR5LiBUby1Eb3MgYXJlXHJcbiAqICBzdG9yZWQgaW4gdGhlIGJyb3dzZXIncyBMb2NhbCBTdG9yYWdlIGFuZCByZWFkIGFuZCByZW5kZXJlZCB3aGVuIHRoZSBwYWdlIGxvYWRzLlxyXG4gKlxyXG4gKiBUbyBjcmVhdGUgYSBUb0RvTGlzdCwgYW4gZWxlbWVudCBvbiB0aGUgcGFnZSBtdXN0IGhhdmUgJy5Ub0RvTGlzdCcgY2xhc3MuIENhbGwgdGhlXHJcbiAqICBjbGFzcyBjb25zdHJ1Y3RvciwgcGFzc2luZyBpbiB0aGF0IGVsZW1lbnQgdG8gY3JlYXRlIHRoZSB3aWRnZXQuXHJcbiAqXHJcbiAqICAgICAgIGNvbnN0IHRvRG9XaWRnZXQgPSBuZXcgVG9Eb0xpc3QoKTtcclxuICogICAgICAgdG9Eb1dpZGdldC5jcmVhdGVUb0RvTGlzdFdpZGdldCh0b0Rvc0VsZW1lbnQpO1xyXG4gKlxyXG4gKiBUaGVuLCB0aGUgd2lkZ2V0IGlzIGNyZWF0ZWQgYW5kIFRvLURvcyBhcmUgcmV0cmlldmVkIGZyb20gc3RvcmFnZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUb0RvTGlzdCB7XHJcbiAgLyoqVG90YWwgbnVtYmVyIG9mIFRvRE9zKi9cclxuICBwdWJsaWMgc3RhdGljIHRvRG9zOiBudW1iZXIgPSAwO1xyXG4gIC8qKldpZGdldCBlbGVtZW50cyB1c2VkIHRvIHBvcHVsYXRlIHRvZG9zICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgdG9Eb0VsZW1lbnRzOiBUb0RvTGlzdEVsZW1lbnRzO1xyXG4gIHByaXZhdGUgc3RhdGljIHRvRG9JblN0b3JhZ2U6IGxvY2FsU3RvcmFnZVRvRG9DYWNoZVtdO1xyXG4gIC8qKlRvZG8gSFRNTCBlbGVtZW50cyAqL1xyXG4gIHByaXZhdGUgbGlzdEVsZW1lbnRzOiBUb0RvTGlzdEVsZW1lbnRzO1xyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBUby1EbyBsaXN0IHdpZGdldCdzIGVsZW1lbnRzLlxyXG4gICAqXHJcbiAgICogICAgICBUb0RvTGlzdC5Ub0RvRWxlbWVudHNcclxuICAgKiBAcGFyYW0gdG9Eb0VsZW1lbnRzIFdpZGdldCBFbGVtZW50cyAtLSBrZXkgd2lkZ2V0IGZ1bmN0aW9uIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc2V0VG9Eb0xpc3RFbGVtZW50cyh0b0RvRWxlbWVudHM6IFRvRG9MaXN0RWxlbWVudHMpIHtcclxuICAgIFRvRG9MaXN0LnRvRG9FbGVtZW50cyA9IHRvRG9FbGVtZW50cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJhbmRvbSBXZWIgQml0cyB1c2VzIG11bHRpcGxlIGxvY2F0aW9ucyB0byBhcHBseSB0aGUgVG8tRG8gTGlzdCB3aWRnZXQuIENyZWF0ZVxyXG4gICAqICB0aGUgbGlzdCBtYXJrdXAsIHBhc3NpbmcgaW4gYSByZWZlcmVuY2UgZWxlbWVudCBmb3IgcGxhY2VtZW50IG9mIHRoZSB3aWRnZXQuXHJcbiAgICogQHBhcmFtIGVsZW0gLSB3aWRnZXQgaXMgcGxhY2VkIGFmdGVyIHRoaXMgcmVmZXJlbmNlIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZVRvRG9MaXN0V2lkZ2V0KGVsZW06IEVsZW1lbnQpIHtcclxuICAgIC8vSW5zZXJ0IHRoZSB3aWRnZXQgYWZ0ZXIgdGhlIHBhc3NlZCBpbiBcImVsZW1cIlxyXG4gICAgLy9EZXBlbmRlbnQgb24gdGhlIHBhZ2UsIHRvZG8gd2lkZ2V0IG1heSBoYXZlIHByZS1leGlzdGluZyBtYXJrdXAgaW4gcGxhY2VcclxuICAgIC8vU3dpdGNoIGFnYWluc3QgdGhlIGN1cnJlbnQgcGFnZSB0byBkZXRlcm1pbmUgbWFya3VwIG5lZWRlZFxyXG4gICAgaWYgKGVsZW0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY1RoZXJlIGlzIG5vIFwiVG9Eb0xpc3RcIiBjbGFzcyBvbiB0aGlzIHBhZ2UuYCwgXCJjb2xvcjpvcmFuZ2U7XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiVG9Eb0xpc3RcIikpIHtcclxuICAgICAgY29uc29sZS5sb2coYEFkZCBcIlRvRG9MaXN0XCIgY2xhc3MgdG8gJHtlbGVtLm5vZGVOYW1lfSBub2RlLmApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkge1xyXG4gICAgICBjYXNlIFwiL1JhbmRvbVdlYkJpdHMvXCI6XHJcbiAgICAgIGNhc2UgXCIvUmFuZG9tV2ViQml0cy9pbmRleC5odG1sXCI6XHJcbiAgICAgIGNhc2UgXCIvaW5kZXguaHRtbFwiOlxyXG4gICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICBjYXNlIFwiL2Rpc3QvaW5kZXguaHRtbFwiOlxyXG4gICAgICAgIC8vTWFya3VwIGRvZXMgbm90IGV4aXN0IG9uIHRoZSBwYWdlXHJcbiAgICAgICAgLy9DcmVhdGUgdGFibGUgZWxlbWVudHMgbmVlZGVkIGZvciB0aGUgdG9kbyBsaXN0XHJcbiAgICAgICAgY29uc3QgVE9ET0xJU1RTRUNUSU9OID0gZWxlbS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKSk7XHJcbiAgICAgICAgY29uc3QgSEVBREVSID0gVE9ET0xJU1RTRUNUSU9OLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKSk7XHJcbiAgICAgICAgY29uc3QgRElWID0gVE9ET0xJU1RTRUNUSU9OLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIGNvbnN0IFRBQkxFID0gRElWLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSk7XHJcbiAgICAgICAgY29uc3QgVEhFQUQgPSBUQUJMRS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIikpO1xyXG4gICAgICAgIGNvbnN0IFRSMSA9IFRIRUFELmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XHJcbiAgICAgICAgY29uc3QgVEhMRUZUID0gVFIxLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKSk7XHJcbiAgICAgICAgY29uc3QgVEhNSURETEUgPSBUUjEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpKTtcclxuICAgICAgICBjb25zdCBUQk9EWSA9IFRBQkxFLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk7XHJcbiAgICAgICAgY29uc3QgVEZPT1QgPSBUQUJMRS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGZvb3RcIikpO1xyXG4gICAgICAgIGNvbnN0IFRSMyA9IFRGT09ULmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XHJcbiAgICAgICAgY29uc3QgVEQzTEVGVCA9IFRSMy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpO1xyXG4gICAgICAgIGNvbnN0IFREM0lOID0gVEQzTEVGVC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgIGNvbnN0IFREM01JRERMRSA9IFRSMy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpO1xyXG4gICAgICAgIGNvbnN0IElOUFVUID0gVEQzTUlERExFLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSk7XHJcblxyXG4gICAgICAgIC8vQWRkIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnR5IHZhbHVlc1xyXG4gICAgICAgIFRBQkxFLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Zm9vdFwiKSk7XHJcbiAgICAgICAgVEQzSU4uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkFkZFwiKTtcclxuICAgICAgICBURDNJTi5zZXRBdHRyaWJ1dGUoXCJWYWx1ZVwiLCBcIkFkZFwiKTtcclxuICAgICAgICBJTlBVVC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaXRlbUlOUFVUXCIpO1xyXG4gICAgICAgIElOUFVULnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIElOUFVULnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJJbnB1dFwiKTtcclxuICAgICAgICBJTlBVVC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9JbnB1dFwiKTtcclxuICAgICAgICBJTlBVVC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyB0by1kbyBpdGVtXCIpO1xyXG4gICAgICAgIEhFQURFUi50ZXh0Q29udGVudCA9IFwiVG8tRG86XCI7XHJcbiAgICAgICAgVE9ET0xJU1RTRUNUSU9OLmlkID0gXCJUb0RPXCI7XHJcbiAgICAgICAgVEhMRUZULnRleHRDb250ZW50ID0gXCJDb21wbGV0ZT9cIjtcclxuICAgICAgICBUSE1JRERMRS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgICAgICBUQk9EWS5pZCA9IFwiVG9Eb0l0ZW1zXCI7XHJcbiAgICAgICAgVEQzSU4uaWQgPSBcIkFkZEJ1dHRvblwiO1xyXG4gICAgICAgIFREM0lOLnR5cGUgPSBcImJ1dHRvblwiO1xyXG5cclxuICAgICAgICAvL0NyZWF0ZSBhIHNhbXBsZSB0byBkbyBpdGVtIChpdCBpcyBub3Qgc3RvcmVkIGluIGNhY2hlKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlU2FtcGxlVG9fRG8oVEJPRFkpO1xyXG5cclxuICAgICAgICAvL1dpdGggdGhlIGVsZW1lbnRzIGNyZWF0ZWQsIHNldCB0aGUgY2xhc3MgbGlzdCBlbGVtZW50c1xyXG4gICAgICAgIHRoaXMuZ2V0VG9Eb0xpc3RFbGVtZW50cygpO1xyXG4gICAgICAgIFRvRG9MaXN0LnNldFRvRG9MaXN0RWxlbWVudHModGhpcy5saXN0RWxlbWVudHMpO1xyXG5cclxuICAgICAgICB0aGlzLnBvcHVsYXRlVG9Eb0xpc3QoKTtcclxuICAgICAgICB0aGlzLmFkZFRvRG9FdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIi9SYW5kb21XZWJCaXRzL3BhZ2VzL3RvZG9zLmh0bWxcIjpcclxuICAgICAgY2FzZSBcIi9wYWdlcy90b2Rvcy5odG1sXCI6XHJcbiAgICAgICAgLy9NYXJrdXAgZXhpc3RzIG9uIHRoZSBwYWdlIGFscmVhZHlcclxuICAgICAgICAvL1dpdGggdGhlIGVsZW1lbnRzIGNyZWF0ZWQsIHNldCB0aGUgY2xhc3MgbGlzdCBlbGVtZW50c1xyXG4gICAgICAgIHRoaXMuZ2V0VG9Eb0xpc3RFbGVtZW50cygpO1xyXG4gICAgICAgIFRvRG9MaXN0LnNldFRvRG9MaXN0RWxlbWVudHModGhpcy5saXN0RWxlbWVudHMpO1xyXG5cclxuICAgICAgICAvL0NyZWF0ZSBhIHNhbXBsZSB0byBkbyBpdGVtIGR1ZSB0byBjYWNoZSBlbXB0eVxyXG4gICAgICAgIGNvbnN0IEhUQk9EWSA9IFRvRG9MaXN0LnRvRG9FbGVtZW50cy50b0RvVGFibGVCb2R5O1xyXG4gICAgICAgIGlmIChIVEJPRFkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVTYW1wbGVUb19EbyhIVEJPRFkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVRvRG9MaXN0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0RvRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbGVtZW50IGlzIG5vdCB2YWxpZC4gUGxlYXNlIGVuc3VyZSBhIHZhbGlkIGVsZW1lbnQgZm9yIFRvRG8gbGlzdCB3aWRnZXQgdG8gZm9sbG93LlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBmb3IgVG8tRG8gaXRlbXMgZnJvbSBMb2NhbCBTdG9yYWdlLlxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW4gdHJ1ZSBvciBmYWxzZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGdldFRvRG9JblN0b3JhZ2UoY2hlY2tFbXB0eVZhbHVlU3RyaW5nOiBib29sZWFuLCBsb2dNZXNzYWdlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoUndiRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VFcXVhbE51bGwoXCJUb0RvTGlzdFwiLCBcIlRvRG9zXCIsIGNoZWNrRW1wdHlWYWx1ZVN0cmluZywgbG9nTWVzc2FnZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBhcnNlU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb0Rvc1wiKTtcclxuICAgIGxldCBwYXJzZVRlc3QgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JQYXJzZUpzb24ocGFyc2VTdHIpKTtcclxuICAgIGlmICghcGFyc2VUZXN0LnBhc3NlZCkge1xyXG4gICAgICAvL3BhcnNlZCBKU09OIGlzIG1hbGZvcm1lZFxyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRvRG9zXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgJWM8UldCPiVjRGVsZXRlZCBzdG9yYWdlIGtleTogVG9Eb3NgLFxyXG4gICAgICAgIFwiY29sb3I6b3JhbmdlO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpvcmFuZ2U7Zm9udC1zaXplOjE2cHg7XCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9Eb0luU3RvcmFnZSA9IHBhcnNlVGVzdC5yZXR1cm5PYmo7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdhdGhlciBuZWNlc3NhcnkgZWxlbWVudHMgZnJvbSB0aGUgY3JlYXRlZCB3aWRnZXQuXHJcbiAgICogQHJldHVybnMgVG9Eb0VsZW1lbnRzOiBUb0RvTGlzdEVsZW1lbnRzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRUb0RvTGlzdEVsZW1lbnRzKCkge1xyXG4gICAgLy9HYXRoZXIgbmVjZXNzYXJ5IGVsZW1lbnRzIGZyb20gdGhlIGNyZWF0ZWQgd2lkZ2V0XHJcbiAgICAvL0VhY2ggd2lkZ2V0IGxvY2F0aW9uJ3MgZWxlbWVudHMgbWF5IHZhcnksIHNvIGEgY2FsbCBvZiBnZXRUb0RvTGlzdEVsZW1lbnRzKClcclxuICAgIC8vbG9jYXRlcyB0aGUgcGFnZSdzIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBUb0RvRWxlbWVudHMgaW50ZXJmYWNlLlxyXG4gICAgbGV0IHRvRG9UYWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIGxldCB0b0RvVGFibGVCb2R5OiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcclxuICAgIGxldCBhZGRCdXR0b246IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgYWRkSXRlbVRvRW50ZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgdG9Eb1RhYmxlID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJUb0RvTGlzdFwiLCBcIiNUb0RPIHRhYmxlXCIsIHRydWUsIGZhbHNlKSBhcyBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgdG9Eb1RhYmxlQm9keSA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgICBcIlRvRG9MaXN0XCIsXHJcbiAgICAgIFwiI1RvRG9JdGVtc1wiLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKSBhcyBIVE1MVGFibGVTZWN0aW9uRWxlbWVudDtcclxuICAgIGFkZEJ1dHRvbiA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiVG9Eb0xpc3RcIiwgXCIjQWRkQnV0dG9uXCIsIHRydWUsIGZhbHNlKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgYWRkSXRlbVRvRW50ZXIgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgICAgXCJUb0RvTGlzdFwiLFxyXG4gICAgICAnaW5wdXRbbmFtZT1cIml0ZW1JTlBVVFwiXScsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRvRG9UYWJsZSA9PSBudWxsIHx8IHRvRG9UYWJsZUJvZHkgPT0gbnVsbCB8fCBhZGRCdXR0b24gPT0gbnVsbCB8fCBhZGRJdGVtVG9FbnRlciA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkFuIGVsZW1lbnQgaXMgbWlzc2luZy4gVGhlIHRvZG8gbGlzdCB3aWRnZXQgbWF5IG5vdCBmdW5jdGlvbiBhcyBleHBlY3RlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRvRG9FbGVtZW50czogVG9Eb0xpc3RFbGVtZW50cyA9IHtcclxuICAgICAgdG9Eb1RhYmxlOiB0b0RvVGFibGUsXHJcbiAgICAgIHRvRG9UYWJsZUJvZHk6IHRvRG9UYWJsZUJvZHksXHJcbiAgICAgIGFkZEJ1dHRvbjogYWRkQnV0dG9uLFxyXG4gICAgICBhZGRJdGVtVG9FbnRlcjogYWRkSXRlbVRvRW50ZXIsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saXN0RWxlbWVudHMgPSB0b0RvRWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgVG8tRG8gdG8gTG9jYWwgU3RvcmFnZS5cclxuICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gLSBUaGUgVUkgZm9ybSBpbnB1dCBkZXNjcmlwdGlvbi5cclxuICAgKi9cclxuICBwcml2YXRlIGFkZFRvRG9Ub1N0b3JhZ2UoZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgLy9BZGQgdGhlIFRvRG9zIGFycmF5IHRvIGxvY2FsIGNhY2hlLlxyXG4gICAgLy9UaGUgJ2xvY2Fsc3RvcmFnZXRvZG9jYWNoZScgaW50ZXJmYWNlIHN0cnVjdHVyZXMgdGhlIGRhdGEgZm9yIGxhdGVyIHJldHJpZXZhbC5cclxuICAgIGxldCB0b0RvOiBsb2NhbFN0b3JhZ2VUb0RvQ2FjaGUgPSB7XHJcbiAgICAgIGluQ2FjaGU6IGZhbHNlLFxyXG4gICAgICB0b0RvSXRlbTogZGVzY3JpcHRpb24sXHJcbiAgICB9O1xyXG4gICAgbGV0IHRvRG9zOiBhbnkgPSBbXTsgLy9Ub0RvIGFycmF5XHJcbiAgICBsZXQgc3RyZ2Z5O1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ2lmeVRvRG8gPSAodG9Eb1N0cjogYW55KSA9PiB7XHJcbiAgICAgIC8vQ2FsbCBSV0JTdHJpbmdpZnlKU09OIHRvIHN0cmluZ2lmeSB0aGUgb2JqZWN0XHJcbiAgICAgIGxldCB0b0Rvc1N0cmdmeVRlc3QgPSBPYmplY3QuY3JlYXRlKG5ldyBSd2JTdHJpbmdpZnlKc29uKHRvRG9TdHIpKTtcclxuICAgICAgaWYgKCF0b0Rvc1N0cmdmeVRlc3QucGFzc2VkKSB7XHJcbiAgICAgICAgLy9MT0dMRUFGXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b0Rvc1N0cmdmeVRlc3QucmV0dXJuU3RyO1xyXG4gICAgfTtcclxuICAgIC8vRmlyc3QsIHJlYWQgY3VycmVudCBMb2NhbCBTdG9yYWdlIFRvRG9zXHJcbiAgICBsZXQgdG9Eb3NTdG9yYWdlQ2FjaGUgPSBUb0RvTGlzdC5nZXRUb0RvSW5TdG9yYWdlKGZhbHNlLCBmYWxzZSk7XHJcbiAgICBpZiAodG9Eb3NTdG9yYWdlQ2FjaGUpIHtcclxuICAgICAgdG9Eb3MgPSBUb0RvTGlzdC50b0RvSW5TdG9yYWdlO1xyXG4gICAgICB0b0Rvcy5wdXNoKHRvRG8pO1xyXG4gICAgICAvL0NhbGwgUldCU3RyaW5naWZ5SlNPTiB0byBzdHJpbmdpZnkgdGhlIG9iamVjdFxyXG4gICAgICBzdHJnZnkgPSBzdHJpbmdpZnlUb0RvKHRvRG9zKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUb0Rvc1wiLCBzdHJnZnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9Eb3MucHVzaCh0b0RvKTtcclxuICAgICAgLy9DYWxsIFJXQlN0cmluZ2lmeUpTT04gdG8gc3RyaW5naWZ5IHRoZSBvYmplY3RcclxuICAgICAgc3RyZ2Z5ID0gc3RyaW5naWZ5VG9Ebyh0b0Rvcyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9Eb3NcIiwgc3RyZ2Z5KTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY0NyZWF0ZWQgdG8tZG8gY2FjaGUga2V5OiBUb0Rvc2AsXHJcbiAgICAgICAgXCJjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxNnB4O1wiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgJWM8UldCPiVjQWRkZWQgdG8tZG8gY2FjaGU6ICR7ZGVzY3JpcHRpb259YCwgXCJjb2xvcjpjeWFuO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsIFwiY29sb3I6Y3lhbjtcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgVG8tRG8gaXRlbSBmcm9tIExvY2FsIFN0b3JhZ2UuIFRoZSByZXF1ZXN0ZWQgVG8tRG8gdG8gcmVtb3ZlIGlzXHJcbiAgICogIHB1bGxlZCBpbmRpdmlkdWFsbHkgZnJvbSB0aGUga2V5LXZhbHVlIHBhaXIgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSBpdGVtIC0gdGhlIFRvLURvIGl0ZW0gcmVxdWVzdGVkIHRvIHJlbW92ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlVG9Eb0Zyb21TdG9yYWdlKGl0ZW06IHN0cmluZykge1xyXG4gICAgVG9Eb0xpc3QudG9Eb0luU3RvcmFnZSA9IFRvRG9MaXN0LnRvRG9JblN0b3JhZ2UuZmlsdGVyKHRvRG8gPT4gdG9Eby50b0RvSXRlbSAhPT0gaXRlbSk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYCVjPFJXQj4lY0RlbGV0ZWQgdG9kbyBjYWNoZTogJHtpdGVtfWAsXHJcbiAgICAgIFwiY29sb3I6ZGFya2N5YW47Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpkYXJrY3lhbjtcIlxyXG4gICAgKTtcclxuICAgIGxldCB0b0RvSW5TdG9yYWdlU3RyZ2Z5VGVzdCA9IE9iamVjdC5jcmVhdGUobmV3IFJ3YlN0cmluZ2lmeUpzb24oVG9Eb0xpc3QudG9Eb0luU3RvcmFnZSkpO1xyXG4gICAgaWYgKCF0b0RvSW5TdG9yYWdlU3RyZ2Z5VGVzdC5wYXNzZWQpIHtcclxuICAgICAgLy9MT0dMRUFGXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBqc29uU3RyID0gdG9Eb0luU3RvcmFnZVN0cmdmeVRlc3QucmV0dXJuU3RyO1xyXG4gICAgaWYgKGpzb25TdHIgPT0gXCJcIiB8fCBqc29uU3RyID09IFwiW11cIikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlRvRG9zXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgJWM8UldCPiVjRGVsZXRlZCBzdG9yYWdlIGtleTogVG9Eb3NgLFxyXG4gICAgICAgIFwiY29sb3I6ZGFya2N5YW47Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgICBcImNvbG9yOmRhcmtjeWFuO2ZvbnQtc2l6ZToxNnB4O1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9Eb3NcIiwganNvblN0cik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIG5lY2Vzc2FyeSBtYXJrdXAgdG8gYWRkIGEgcm93IHRvIHRoZSBUby1EbyB0YWJsZS5cclxuICAgKiAgQSByb3cgY29uc2lzdHMgb2YgdGhyZWUgY29sdW1uczogYSBjb21wbGV0ZSB0aWNrLWJveCwgYSBkZXNjcmlwdGlvbiwgYW5kIGEgZGVsZXRlIGJ1dHRvbi5cclxuICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gLSBVc2VyIGZvcm0gaW5wdXQgdG8gYWRkIGFzIGEgZGVzY3JpcHRpb24uXHJcbiAgICogQHBhcmFtIGZpcnN0UGFpbnQgLSBCb29sZWFuIHZhbHVlIHVzZWQgYnkgYWRkaW5nIGxpc3Qgc3RvcmFnZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkVG9Eb1JvdyhkZXNjcmlwdGlvbjogc3RyaW5nLCBmaXJzdFBhaW50OiBib29sZWFuKSB7XHJcbiAgICAvL0NyZWF0ZSBhIHRhYmxlIHJvdyB3aXRoIGNoZWNrYm94IGFuZCBkZWxldGUgb3B0aW9uc1xyXG4gICAgY29uc3QgVEFCTEVCT0RZSVRFTSA9IFRvRG9MaXN0LnRvRG9FbGVtZW50cy50b0RvVGFibGVCb2R5O1xyXG4gICAgY29uc3QgVEFCTEVGUkFHID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgTkVXUk9XID0gVEFCTEVGUkFHLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7IC8vQWRkIHJvd1xyXG4gICAgY29uc3QgRklSU1RDT0wgPSBORVdST1cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKTsgLy9UYWJsZSBmaXJzdCBkYXRhXHJcbiAgICBjb25zdCBDSEVDS0JPWCA9IEZJUlNUQ09MLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSk7IC8vQWRkIGNoZWNrYm94XHJcbiAgICBjb25zdCBORVdJVEVNID0gTkVXUk9XLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSk7IC8vVGFibGUgc2Vjb25kIGRhdGFcclxuICAgIGNvbnN0IFNFQ09ORENPTCA9IE5FV1JPVy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpOyAvL1RhYmxlIHRoaXJkIGRhdGFcclxuICAgIGNvbnN0IERFTEJPWCA9IFNFQ09ORENPTC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpOyAvL0FkZCBkZWxldGVib3hcclxuXHJcbiAgICAvL0FkZCBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXNcclxuICAgIENIRUNLQk9YLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIENIRUNLQk9YLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDaGVja2JveFwiKTtcclxuICAgIENIRUNLQk9YLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJEZWxldGVcIik7XHJcbiAgICBORVdJVEVNLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJudW1cIixcclxuICAgICAgVG9Eb0xpc3QudG9Eb3NcclxuICAgICAgICA/ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNUb0RPIHRkW251bV1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiAoKE51bWJlcihlbGVtPy5nZXRBdHRyaWJ1dGUoXCJudW1cIikpIHx8IC0xMDAwKSArIFRvRG9MaXN0LnRvRG9zKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgfSkoKVxyXG4gICAgICAgIDogKDEpLnRvU3RyaW5nKClcclxuICAgICk7XHJcbiAgICBORVdJVEVNLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247IC8vUG9wdWxhdGUgc2Vjb25kIGNvbFxyXG4gICAgVG9Eb0xpc3QudG9Eb3MrKzsgLy9OdW1iZXIgb2YgSXRlbXNcclxuICAgIERFTEJPWC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xyXG4gICAgREVMQk9YLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRGVsZXRlXCIpO1xyXG5cclxuICAgIGlmIChmaXJzdFBhaW50KSB7XHJcbiAgICAgIC8vQWRkIHRvIGxpc3Qgc3RvcmFnZVxyXG4gICAgICB0aGlzLmFkZFRvRG9Ub1N0b3JhZ2UoZGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQWRkIHRoZSByb3cgdG8gdGhlIFRvRG9zIHRhYmxlXHJcbiAgICBUQUJMRUJPRFlJVEVNLmFwcGVuZENoaWxkKFRBQkxFRlJBRyk7XHJcbiAgICBjb25zb2xlLmxvZyhgJWM8UldCPiVjQ3JlYXRlZCB0by1kbyB0YWJsZSByb3dgLCBcImNvbG9yOmdvbGQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIiwgXCJjb2xvcjpnb2xkO1wiKTtcclxuXHJcbiAgICAvL0FkZCBhbiBldmVudCBsaXN0ZW5lciBmb3Igd2hlbiAnZGVsZXRlJyBpcyBjbGlja2VkXHJcbiAgICBERUxCT1guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5kZWxldGVCdXR0b24oREVMQk9YKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gY2FsbGVkIHRvIGNyZWF0ZSB0aGUgVG8tRG8gaXRlbSByb3dzIGZyb20gVG8tRG9zIHN0b3JlZCBpbiB0aGUgYnJvd3NlciBMb2NhbCBTdG9yYWdlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcG9wdWxhdGVUb0RvTGlzdCgpIHtcclxuICAgIGlmIChUb0RvTGlzdC5nZXRUb0RvSW5TdG9yYWdlKHRydWUsIGZhbHNlKSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRvRG9MaXN0LnRvRG9JblN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFkZFRvRG9Sb3coVG9Eb0xpc3QudG9Eb0luU3RvcmFnZVtpXS50b0RvSXRlbSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYnV0dG9uIGZ1bmN0aW9uYWxpdHkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGRUb0RvRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBBRERCVVRUT04gPSBUb0RvTGlzdC50b0RvRWxlbWVudHMuYWRkQnV0dG9uO1xyXG4gICAgY29uc3QgQURESVRFTUVOVEVSID0gVG9Eb0xpc3QudG9Eb0VsZW1lbnRzLmFkZEl0ZW1Ub0VudGVyO1xyXG4gICAgaWYgKEFEREJVVFRPTiA9PSBudWxsICYmIEFERElURU1FTlRFUiA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgd2FzIG5vdCBmb3VuZCBvciBpcyBudWxsXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqQWRkIGlucHV0IHRleHQgdG8gdGhlIHRvZG8gbGlzdCBmcm9tIGNsaWNraW5nIHRoZSBhZGQgYnV0dG9uKi9cclxuICAgIEFEREJVVFRPTi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZFRvRG9Sb3coQURESVRFTUVOVEVSLnZhbHVlLCB0cnVlKTtcclxuICAgICAgQURESVRFTUVOVEVSLnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG4gICAgLyoqQWRkIGlucHV0IHRleHQgdG8gdGhlIHRvZG8gbGlzdCB3aGVuIHVzaW5nIGtleSBlbnRlciovXHJcbiAgICBBRERJVEVNRU5URVIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT0gXCJOdW1wYWRFbnRlclwiIHx8IGUuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuICAgICAgICB0aGlzLmFkZFRvRG9Sb3coQURESVRFTUVOVEVSLnZhbHVlLCB0cnVlKTtcclxuICAgICAgICBBRERJVEVNRU5URVIudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZ1bmN0aW9uIGRldGVybWluaW5nIHRoZSBkZWxldGUgYnV0dG9uLiBJdGVtcyBhcmUgZGVsZXRlZCB3aGVuIHB1c2hlZCwgYnV0IGFyZVxyXG4gICAqICBub3QgcmVtb3ZlZCBmcm9tIHN0b3JhZ2Ugd2l0aG91dCAnQ29tcGxldGU/JyBjaGVja2Vib3ggY2hlY2tlZC5cclxuICAgKiBAcGFyYW0gYm94IGlucHV0IGVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGRlbGV0ZUJ1dHRvbihib3g6IEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgYm94LnBhcmVudE5vZGUgPT0gbnVsbCB8fFxyXG4gICAgICBib3gucGFyZW50Tm9kZS5wcmV2aW91c1NpYmxpbmcgPT0gbnVsbCB8fFxyXG4gICAgICBib3gucGFyZW50Tm9kZS5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nID09IG51bGxcclxuICAgICkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGEgdGFibGUgZWxlbWVudC5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByb3dDaGtCeCA9IDxIVE1MRWxlbWVudD5ib3gucGFyZW50Tm9kZS5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgLyoqIElucHV0IGVsZW1lbnQgKi9cclxuICAgIGNvbnN0IHJvd0Noa0J4SU4gPSA8SFRNTElucHV0RWxlbWVudD5yb3dDaGtCeC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgY29uc3QgdG9Eb1RhYmxlOiBIVE1MVGFibGVFbGVtZW50ID0gVG9Eb0xpc3QudG9Eb0VsZW1lbnRzLnRvRG9UYWJsZTtcclxuICAgIGNvbnN0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gPEhUTUxUYWJsZVJvd0VsZW1lbnQ+Ym94LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGxldCBpID0gdHIucm93SW5kZXg7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGJveC5wYXJlbnROb2RlLnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGlmIChyb3dDaGtCeElOLmNoZWNrZWQpIHtcclxuICAgICAgLy9yZW1vdmUgcm93IHNpbmNlIGNvbXBsZXRlZFxyXG4gICAgICB0b0RvVGFibGUuZGVsZXRlUm93KGkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgJWM8UldCPiVjRGVsZXRlZCB0b2RvIHJvdzogJHtib3gucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50fWAsXHJcbiAgICAgICAgXCJjb2xvcjpnb2xkZW5yb2Q7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgICBcImNvbG9yOmdvbGRlbnJvZDtcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAodmFsdWUgIT0gXCJBZGQgYSBUb0RPIEl0ZW0uXCIpIHtcclxuICAgICAgICBUb0RvTGlzdC50b0Rvcy0tO1xyXG5cclxuICAgICAgICAvL2RlbGV0ZSBhc3NvY2lhdGVkIHN0b3JhZ2UgaXRlbVxyXG4gICAgICAgIHRoaXMucmVtb3ZlVG9Eb0Zyb21TdG9yYWdlKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9Eb1RhYmxlLmRlbGV0ZVJvdyhpKTtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCVjPFJXQj4lY1JlbW92ZWQgdG9kbyByb3c6ICR7Ym94LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudH1gLFxyXG4gICAgICAgIFwiY29sb3I6Z29sZGVucm9kO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpnb2xkZW5yb2Q7XCJcclxuICAgICAgKTtcclxuICAgICAgVG9Eb0xpc3QudG9Eb3MtLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIHNlZWQgdGhlIFRvLURvIExpc3Qgd2hlbiB0aGVyZSBhcmUgbm8gTG9jYWwgU3RvcmFnZSBpdGVtc1xyXG4gICAqICB3aGljaCB3b3VsZCBwb3B1bGF0ZSB0aGUgbGlzdC4gVGhlIHNhbXBsZSByZW1haW5zIG9uIHBhZ2UgYnV0IGlzIG5ldmVyIHN0b3JlZCBpbiB0aGUgYnJvd3Nlci5cclxuICAgKiBAcGFyYW0gdEJvZHkgdGFibGUgYm9keSBlbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVTYW1wbGVUb19Ebyh0Qm9keTogRWxlbWVudCkge1xyXG4gICAgaWYgKFRvRG9MaXN0LmdldFRvRG9JblN0b3JhZ2UoZmFsc2UsIHRydWUpKSByZXR1cm47XHJcbiAgICAvL0NyZWF0ZSBhIHNhbXBsZSBlbnRyeSBpbiB0aGUgVG9EbyB0YWJsZSBhcyBhIHBsYWNlaG9sZGVyXHJcbiAgICBjb25zdCBUUjIgPSB0Qm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xyXG4gICAgY29uc3QgVEQyTEVGVCA9IFRSMi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpO1xyXG4gICAgY29uc3QgVEQySU4gPSBURDJMRUZULmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSk7XHJcbiAgICBjb25zdCBURDJNSURETEUgPSBUUjIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKTtcclxuICAgIGNvbnN0IFREMlJJR0hUID0gVFIyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSk7XHJcbiAgICBjb25zdCBURDJERUwgPSBURDJSSUdIVC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpO1xyXG5cclxuICAgIC8vQWRkIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnR5IHZhbHVlc1xyXG4gICAgVEQySU4uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNoZWNrYm94XCIpO1xyXG4gICAgVEQyTUlERExFLnNldEF0dHJpYnV0ZShcIm51bVwiLCBgJHsxfWApO1xyXG4gICAgVEQySU4uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkRlbGV0ZVwiKTtcclxuICAgIFREMkRFTC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XHJcbiAgICBURDJERUwuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJEZWxldGVcIik7XHJcbiAgICBURDJJTi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgVEQyTUlERExFLnRleHRDb250ZW50ID0gXCJBZGQgYSBUb0RPIEl0ZW0uXCI7XHJcbiAgICBUb0RvTGlzdC50b0RvcysrO1xyXG5cclxuICAgIC8vXCJEZWxldGVcIiBldmVudCBsaXN0ZW5lclxyXG4gICAgVEQyREVMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVsZXRlQnV0dG9uKFREMkRFTCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAlYzxSV0I+JWNSZW1vdmVkIHRvZG86ICR7VEQyREVMLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudH1gLFxyXG4gICAgICAgIFwiY29sb3I6cHVycGxlO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgICAgXCJjb2xvcjpwdXJwbGU7XCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
