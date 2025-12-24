(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webBitsCards_1 = require("./components/webBitsCards");
const flashcardGameWidget_1 = __importDefault(require("./components/flashcardGameWidget"));
const scriptPerf_1 = __importDefault(require("./models/scriptPerf"));
const cardComponents = {
    checkPage: (page) => {
        try {
            switch (page) {
                case "/RandomWebBits/index.html":
                case "/index.html":
                case "/":
                    webBitsCards_1.rwbCardsWidget.init(); // cards widget initialization
                    webBitsCards_1.webBitsSlideShow.init();
                    webBitsCards_1.webBitsAccordion.init();
                    break;
                case "/RandomWebBits/pages.html":
                case "/pages.html":
                    webBitsCards_1.rwbCardsWidget.init(); // cards widget initialization
                    break;
                // Initialize flashcard components
                case "/flashcards.html":
                    flashcardGameWidget_1.default.init();
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.error(`Error loading page component: ${error}`);
        }
    },
    init: () => {
        let page = window.location.pathname;
        const pagePerf = new scriptPerf_1.default("Cardcomponents"); //measure performance
        cardComponents.checkPage(page);
        pagePerf.end(); //end performance measure
    },
    load: () => { },
};
window.addEventListener("DOMContentLoaded", cardComponents.init);
},{"./components/flashcardGameWidget":2,"./components/webBitsCards":3,"./models/scriptPerf":13}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
const flashcardCardElems_1 = require("../models/flashcardCardElems");
const portNums_1 = __importDefault(require("../data/portNums"));
const rwbErrorBus_1 = __importDefault(require("../models/rwbErrorBus"));
const flashCardGameWidget = {
    init: () => {
        // Establish which port numbers to test and the definition
        // TODO: functions flashcards
        const methodDefinitions = new Map([
            ["charAt()", "Returns a new string of the character at a given index."],
        ]);
        // Create flashcard elements
        let mainFlashCardDivs = new flashcardCardElems_1.FlashcardCardElems(portNums_1.default);
        // Add the game's title element
        let mainFlashCardPage;
        let mainFlashCardPageDiv;
        mainFlashCardPage = rwbErrorBus_1.default.checkSelectedElement("MainFlashCard", "#mainFlashCardGame", true, true);
        mainFlashCardPageDiv = rwbErrorBus_1.default.checkSelectedElement("MainFlashCards", "#mainFlashCards", true, true);
        const gameTitleElem = document.createElement("h2");
        gameTitleElem.innerText = "Computing Port Numbers";
        mainFlashCardPage.insertAdjacentElement("afterbegin", gameTitleElem);
        // Add the flashcards to widget
        for (let elem of mainFlashCardDivs.m_flashcardsArr) {
            mainFlashCardPageDiv.appendChild(elem);
        }
    },
};
exports.default = flashCardGameWidget;
},{"../data/portNums":5,"../models/flashcardCardElems":8,"../models/rwbErrorBus":11}],3:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webBitsSlideShow = exports.webBitsAccordion = exports.rwbCardsWidget = void 0;
//--Copyright (c) 2023-2025 Robert A. Howell
const data_1 = __importDefault(require("../data/data"));
const randomWebBits_1 = __importDefault(require("../models/randomWebBits"));
const cardsSlideShow_1 = __importDefault(require("../models/cardsSlideShow"));
const rwbErrorBus_1 = __importDefault(require("../models/rwbErrorBus"));
class Accordion {
    accordionElements = new Map();
    constructor(accordionNodes) {
        for (let card of accordionNodes) {
            this.accordionElements.set(card, false);
        }
    }
}
/**
 * Card widget to initialize article data into HTML card elements. This widget
 * creates multiple sections of cards to add to a page.
 */
const rwbCardsWidget = {
    addCardSectionClass: (cards, cls) => {
        if (Array.isArray(cards)) {
            // cards is an array of cards; append class to all cards
            for (let card of cards) {
                card.classList.add(`${cls}`);
            }
        }
        if (!Array.isArray(cards)) {
            // cards is an element; append class to the element
            cards.classList.add(`${cls}`);
        }
    },
    buildRandomWebBits: (page) => {
        let arbitraryArticles;
        let guideShorts;
        let exploretheWeb;
        switch (page) {
            case "Home":
                let CardContainerType;
                (function (CardContainerType) {
                    CardContainerType["Slideshow"] = "slideshow";
                    CardContainerType["Accordion"] = "accordion";
                })(CardContainerType || (CardContainerType = {}));
                // Split the cards arrays into their respective category
                arbitraryArticles = new randomWebBits_1.default(randomWebBits_1.default.buildCardContainingSection("Arbitrary Articles:", "ArbitraryArticles", CardContainerType.Slideshow), randomWebBits_1.default.buildRwbCards(data_1.default.shift()));
                guideShorts = new randomWebBits_1.default(randomWebBits_1.default.buildCardContainingSection("Guide Shorts:", "GuideShorts", CardContainerType.Accordion), randomWebBits_1.default.buildRwbCards(data_1.default.shift()));
                exploretheWeb = new randomWebBits_1.default(randomWebBits_1.default.buildCardContainingSection("Explore the Web:", "ExploretheWeb"), randomWebBits_1.default.buildRwbCards(data_1.default.shift()));
                break;
            default:
                // Split the cards arrays into their respective category
                arbitraryArticles = new randomWebBits_1.default(randomWebBits_1.default.buildCardContainingSection("Arbitrary Articles:", "ArbitraryArticles"), randomWebBits_1.default.buildRwbCards(data_1.default.shift()));
                guideShorts = new randomWebBits_1.default(randomWebBits_1.default.buildCardContainingSection("Guide Shorts:", "GuideShorts"), randomWebBits_1.default.buildRwbCards(data_1.default.shift()));
                exploretheWeb = new randomWebBits_1.default(randomWebBits_1.default.buildCardContainingSection("Explore the Web:", "ExploretheWeb"), randomWebBits_1.default.buildRwbCards(data_1.default.shift()));
                break;
        }
        /** Multiple categories of card data exist. This array holds the markup needed
         * to create category sections divisions when placed on a page.
         */
        const cardsSections = [
            arbitraryArticles.cardsSection,
            guideShorts.cardsSection,
            exploretheWeb.cardsSection,
        ];
        // Create an array of card data + attribution link data
        // WEBBITDATA broken into 3 arrays: Pages (or articles), Guides, and Explores
        /**This array holds the markup of card elements. Each index stores the cards' data
         * for one category of articles. */
        const cardsData = [arbitraryArticles.cardsData, guideShorts.cardsData, exploretheWeb.cardsData];
        const RWB = [cardsSections, cardsData];
        return RWB;
    },
    /** Cards initialization function. This function breaks down the data structure in
     * order to formulate the article details into one card for each article data.
     *
     * Articles have different categories, so each category must be respected.
     * */
    init: () => {
        let RWBSectionCards;
        // Routes -> Add widget and format pages
        // Index (Home) page shortens each sections' card count and randomizes
        if (window.location.pathname == "/index.html" ||
            window.location.pathname == "/" ||
            window.location.pathname == "/RandomWebBits/index.html" ||
            window.location.pathname == "/RandomWebBits/" ||
            window.location.pathname == "/dist/index.html") {
            //Build RWB Sections + card slideshow, accordian
            RWBSectionCards = rwbCardsWidget.buildRandomWebBits("Home");
            // Apply classes to cards relevant of the container type
            rwbCardsWidget.addCardSectionClass(RWBSectionCards[1][0], "slide");
            rwbCardsWidget.addCardSectionClass(RWBSectionCards[1][1], "accordionslide");
            //Randomize the cards in the slideshow section
            rwbCardsWidget.randomizeWebBits(RWBSectionCards[1]);
            //Add introduction section and append to main
            let main;
            main = rwbErrorBus_1.default.checkSelectedElement("Main", "main", true, true);
            RWBSectionCards[0].unshift(randomWebBits_1.default.buildRwbIntroduction());
            main.prepend(RWBSectionCards[0].shift());
        }
        else {
            //Build RWB Sections + cards as default
            RWBSectionCards = rwbCardsWidget.buildRandomWebBits();
        }
        // Add the cards to the page by combining rwb[1] (the cards) to rwb[0] (the section elements)
        // Outer loop: iterate each category, respectively: Pages, Guides, Explores
        for (let i = 0; i < RWBSectionCards[0].length; i++) {
            if (RWBSectionCards[0][i] != undefined) {
                // Inner loop: iterate through the category data
                // From the cards stack, append each to section
                RWBSectionCards[1].shift().forEach((article) => {
                    RWBSectionCards[0][i].append(article);
                });
            }
            else {
                console.debug("There's an error in the data.");
            }
        }
    },
    randomizeWebBits(cardsArticles) {
        /** Randomize the order of cards. */
        const getMultipleRandom = (arr, num) => {
            // randomize the array
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num); // return the requested number of elements
        };
        cardsArticles[0] = getMultipleRandom(cardsArticles[0], cardsArticles[0].length); //randomize all pages
        cardsArticles[1] = getMultipleRandom(cardsArticles[1], 8); //randomly select 3 guides
    },
};
exports.rwbCardsWidget = rwbCardsWidget;
/**A card accordion widget */
const webBitsAccordion = {
    addCardAccordionStyles: (cardAccordion, screenSize) => {
        cardAccordion.accordionElements.forEach((isOpen, card) => {
            card.style.removeProperty("flexDirection");
            card.style.setProperty("max-width", "900px");
            card.style.setProperty("margin", "0");
            card.style.setProperty("height", "100px");
            card.style.setProperty("overflow", "hidden");
            //hide the 'Flaticon' links
            for (let inner of card.childNodes) {
                let innerelem = inner;
                innerelem.style.width = "50%";
            }
            //card body attr style
            let attrlink = card.childNodes[1].childNodes[3];
            attrlink.style.top = "55px";
            attrlink.style.right = "100%";
            if (screenSize == "SMALL") {
                //card image style
                let image = card.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
                image.style.setProperty("max-height", "200px");
                image.style.setProperty("max-width", "200px");
                //card image small style
                let imageSmall = card.childNodes[0].childNodes[0].childNodes[1].childNodes[1];
                imageSmall.style.setProperty("max-height", "100px");
                imageSmall.style.setProperty("max-width", "100px");
                //card back para style
                let imagePara = card.childNodes[0].childNodes[0].childNodes[1].childNodes[2];
                imagePara.style.setProperty("margin", "0");
                imagePara.style.setProperty("font-size", "16px");
            }
            if (screenSize == "MEDIUM") {
                //card image style
                let image = card.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
                image.style.setProperty("max-height", "275px");
                image.style.setProperty("max-width", "275px");
                //card image small style
                let imageSmall = card.childNodes[0].childNodes[0].childNodes[1].childNodes[1];
                imageSmall.style.setProperty("max-height", "100px");
                imageSmall.style.setProperty("max-width", "100px");
            }
            let pagelink = card.childNodes[1].childNodes[2];
            //add click event
            card.addEventListener("click", e => {
                if (e.target == attrlink || e.target == pagelink)
                    return;
                e.preventDefault();
                const close = () => {
                    card.style.setProperty("height", "100px");
                    isOpen = false;
                };
                const open = () => {
                    card.style.setProperty("height", "275px");
                    isOpen = true;
                };
                isOpen ? close() : open();
            });
            //add focus event
            let sitelink = card.childNodes[1].childNodes[2];
            sitelink.addEventListener("focus", e => {
                e.preventDefault();
                const open = () => {
                    card.style.setProperty("height", "275px");
                    isOpen = true;
                };
                open();
            });
            sitelink.addEventListener("focusout", e => {
                e.preventDefault();
                const close = () => {
                    card.style.setProperty("height", "100px");
                    isOpen = false;
                };
                close();
            });
            //add unfocus event
            attrlink.addEventListener("focusout", e => {
                e.preventDefault();
                const close = () => {
                    card.style.setProperty("height", "100px");
                    isOpen = false;
                };
                close();
            });
            //add unfocus event
            attrlink.addEventListener("focus", e => {
                e.preventDefault();
                const open = () => {
                    card.style.setProperty("height", "275px");
                    isOpen = true;
                };
                open();
            });
        });
    },
    init: () => {
        let accordionContainer;
        accordionContainer = rwbErrorBus_1.default.checkSelectedElement("CardAccordion", ".cardaccordion", true, false);
        if (accordionContainer == null)
            return;
        accordionContainer.style.maxWidth = "75em";
        //create accordion card map state
        const cardaccordion = document.querySelectorAll(".cardaccordion .accordionslide");
        let accordion = Object.create(new Accordion(cardaccordion));
        if (window.matchMedia("(min-width: 501px) and (max-width: 768px)").matches) {
            webBitsAccordion.addCardAccordionStyles(accordion, "SMALL");
        }
        else if (window.matchMedia("(min-width: 769px)").matches) {
            webBitsAccordion.addCardAccordionStyles(accordion, "MEDIUM");
        }
        window.addEventListener("resize", e => {
            e.preventDefault();
            if (window.matchMedia("(min-width: 501px) and (max-width: 768px)").matches) {
                webBitsAccordion.addCardAccordionStyles(accordion, "SMALL");
            }
            if (window.matchMedia("(min-width: 769px)").matches) {
                webBitsAccordion.addCardAccordionStyles(accordion, "MEDIUM");
            }
            if (window.matchMedia("(max-width: 500px)").matches) {
                webBitsAccordion.removeCardAccorionStyles(accordion);
            }
        });
    },
    removeCardAccorionStyles: (cardaccordion) => {
        cardaccordion.accordionElements.forEach((isOpen, card) => {
            card.style.setProperty("flexDirection", "column");
            card.style.removeProperty("height");
            card.style.removeProperty("max-width");
            card.style.removeProperty("margin");
            card.style.removeProperty("overflow");
            card.removeAttribute("style");
            //card body attr style
            let attrlink = card.childNodes[1].childNodes[3];
            attrlink.style.removeProperty("top");
            attrlink.style.removeProperty("right");
            attrlink.removeAttribute("style");
            //card image style
            let image = card.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
            image.style.removeProperty("max-height");
            image.style.removeProperty("max-width");
            //card image small style
            let imageSmall = card.childNodes[0].childNodes[0].childNodes[1].childNodes[1];
            imageSmall.style.removeProperty("max-height");
            imageSmall.style.removeProperty("max-width");
            //card back para style
            let imagePara = card.childNodes[0].childNodes[0].childNodes[1].childNodes[2];
            imagePara.style.removeProperty("margin");
            imagePara.style.removeProperty("font-size");
            for (let inner of card.childNodes) {
                let innerelem = inner;
                innerelem.style.removeProperty("width");
                innerelem.removeAttribute("style");
            }
            card.replaceWith(card.cloneNode(true));
        });
    },
};
exports.webBitsAccordion = webBitsAccordion;
/**A card slideshow widget */
const webBitsSlideShow = {
    init: () => {
        if (window.location.pathname == "/pages.html")
            return;
        if (rwbErrorBus_1.default.checkSelectedElement("webBitsSlideShow", ".cardslideshow", true, false) == null)
            return;
        let cards = document.querySelectorAll(".cardslideshow .slide");
        if (cards == null) {
            console.warn("There are no cards on the page.");
            return;
        }
        var small = window.matchMedia("(max-width: 819px)");
        var tablet = window.matchMedia("(min-width: 820px) and (max-width: 1090px)");
        //Implement slideshow for section articles
        let slideshow;
        let slideshowmed;
        let slideshowlarge;
        let currentslideshow;
        //Based on the matched media size, create a small, medium, or large slideshow
        if (small.matches) {
            slideshow = new cardsSlideShow_1.default(cards, 1, "SMALL");
            currentslideshow = slideshow;
        }
        else if (tablet.matches) {
            slideshowmed = new cardsSlideShow_1.default(cards, 2, "MEDIUM");
            currentslideshow = slideshowmed;
        }
        else {
            slideshowlarge = new cardsSlideShow_1.default(cards, 3, "LARGE");
            currentslideshow = slideshowlarge;
        }
        window.addEventListener("resize", e => {
            e.preventDefault();
            let slideshowsmall;
            let slideshowmedium;
            let slideshowlarge;
            slideshowsmall = rwbErrorBus_1.default.checkSelectedElement("CardSlideShow", ".slidescontainer.SMALL", false, true);
            slideshowmedium = rwbErrorBus_1.default.checkSelectedElement("CardSlideShow", ".slidescontainer.MEDIUM", false, true);
            slideshowlarge = rwbErrorBus_1.default.checkSelectedElement("CardSlideShow", ".slidescontainer.LARGE", false, true);
            if (window.matchMedia("(max-width: 819px)").matches) {
                if (slideshowmedium != null) {
                    slideshowmedium.remove();
                    console.debug(`Removed med slideshow ${slideshowmedium}`);
                }
                if (slideshowlarge != null) {
                    slideshowlarge.remove();
                    console.debug(`Removed large slideshow ${slideshowlarge}`);
                }
                currentslideshow.ssContainer.remove();
                currentslideshow.arrowsContainer.remove();
                currentslideshow = new cardsSlideShow_1.default(cards, 1, "SMALL");
                currentslideshow.onResizeShowStartingElems();
            }
            if (window.matchMedia("(min-width: 820px) and (max-width: 1090px)").matches) {
                if (slideshowsmall != null) {
                    slideshowsmall.remove();
                    console.debug(`Removed small slideshow ${slideshowsmall}`);
                }
                if (slideshowlarge != null) {
                    slideshowlarge.remove();
                    console.debug(`Removed large slideshow ${slideshowlarge}`);
                }
                currentslideshow.ssContainer.remove();
                currentslideshow.arrowsContainer.remove();
                currentslideshow = new cardsSlideShow_1.default(cards, 2, "MEDIUM");
                currentslideshow.onResizeShowStartingElems();
            }
            if (window.matchMedia("(min-width: 1091px)").matches) {
                if (slideshowsmall != null) {
                    slideshowsmall.remove();
                    console.debug(`Removed small element ${slideshowsmall}`);
                }
                if (slideshowmedium != null) {
                    slideshowmedium.remove();
                    console.debug(`Removed medium element ${slideshowmedium}`);
                }
                currentslideshow.ssContainer.remove();
                currentslideshow.arrowsContainer.remove();
                currentslideshow = new cardsSlideShow_1.default(cards, 3, "LARGE");
                currentslideshow.onResizeShowStartingElems();
            }
        });
    },
};
exports.webBitsSlideShow = webBitsSlideShow;
},{"../data/data":4,"../models/cardsSlideShow":7,"../models/randomWebBits":9,"../models/rwbErrorBus":11}],4:[function(require,module,exports){
"strict mode";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
const webBit_1 = __importDefault(require("../models/webBit"));
const attributionLink_1 = __importDefault(require("../models/attributionLink"));
// Create new AA (Arbitrary Article)
/**
 * "Arbitrary Articles' section card data."
 */
const arbitraryArticles = new Array(new webBit_1.default("Domainlookup", 1, "Domain Lookup", "Check an available domain using WhoIS API search", new Date(2022, 12, 4), "pages/domainlookup.html", "library/img/whois.webp", "WhoIs Lookup", new attributionLink_1.default("domain icons", "Domain icons created by Freepik - Flaticon", "https://www.flaticon.com/free-icons/domain", "Flaticon", "Domain Lookup", 1)), new webBit_1.default("Htmlresponses", 2, "HTML Frames", "View HTML page response status information", new Date(2022, 12, 11), "pages/htmlresponses.html", "library/img/HTML_Frames.webp", "HTML frames example", new attributionLink_1.default("code icons", "Code icons created by Freepik - Flaticon", "https://www.flaticon.com/free-icons/code", "Flaticon", "HTML Frames", 2)), new webBit_1.default("Webtech", 5, "Wappalyzer", "Wappalyzer browser extension", new Date(2023, 11, 19), "pages/webtech.html", "library/img/wappalyzer-logo.webp", "Browser extension logo. A white w on a purple tile.", new attributionLink_1.default("Wappalyzer app", "Graphical logo for Wappalyzer.", "https://www.wappalyzer.com/logos/", "Wappalyzer", "Wappalyzer", 5)), new webBit_1.default("Jsonobject", 6, "jsonObject", "JSON object notation", new Date(2023, 1, 9), "pages/jsonobject.html", "library/img/json.webp", "JSON logo: A grey circle with artistic spirals.", new attributionLink_1.default("JavaScript Object Notation", "Graphical logo for JSON.", "https://www.json.org/", "json.org", "jsonObject", 6)));
/**
 * "Guide Shorts' section card data."
 */
const guideShorts = new Array(new webBit_1.default("Httpscert", 4, "HTTPS Certificate", "Select to view a website's HTTPS certificate", new Date(2022, 12, 26), "guides/https.html", "library/img/https_cert.webp", "Cursor selecting HTTPS certificate", new attributionLink_1.default("ssl certificate icons", "Ssl certificate icons created by inipagistudio - Flaticon", "https://www.flaticon.com/free-icons/ssl-certificate", "Flaticon", "HTTPS Certificate", 4)));
/**
 * "Explore section card data."
 */
const explores = new Array(new webBit_1.default("Nasa", 3, "EXPLORE: NASA Pages", "Explore the NASA domain. Learn about the universe via NASA links", new Date(2022, 12, 18), "explore/nasa.html", "library/img/NASA.webp", "NASA Artemis Logo", new attributionLink_1.default("NASA", "Image source via the National Aeronautics and Space Administration", "https://www.nasa.gov/audience/forstudents/5-8/features/symbols-of-nasa.html", "NASA", "NASA Pages", 3)));
/**
 * Multidimensional array. Rows are the different sections. Columns
 * contain each article's data belonging in that section.
 */
const WEBBITDATA = [arbitraryArticles, guideShorts, explores];
exports.default = WEBBITDATA;
},{"../models/attributionLink":6,"../models/webBit":14}],5:[function(require,module,exports){
"strict mode";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
const portDefinitions = new Map([
    [20, "FTP-data"],
    [21, "FTP"],
    [22, "Secure SSH  /TCP"],
    [23, "Telnet (unsecure)"],
    [25, "SMTP - 465 for encrypted."],
    [37, "timeserver /TCP/UDP"],
    [49, "TACACS+"],
    [53, "DNS  /UDP/TCP"],
    [67, "DHCP"],
    [68, "DHCP"],
    [80, "HTTP  /TCP"],
    [88, "Kerberos-sec  /TCP/UDP"],
    [110, "POP - 995 for encrypted."],
    [135, "RPC"],
    [137, "NETBIOS"],
    [138, "NETBIOS"],
    [139, "NETBIOS"],
    [143, "IMAP - 993 for encrypted"],
    [161, "SNMP  Manager"],
    [162, "SNMP  Agent"],
    [389, "LDAP - 636 for secure"],
    [443, "HTTPS  /TCP"],
    [445, "SMB  /TCP"],
    [465, "SMTP by TLS"],
    [514, "SYSLOG  /UDP"],
    [587, "SMTPS STARTTLS"],
    [636, "LDAP SSL"],
    [990, "FTPS"],
    [993, "IMAP TLS"],
    [995, "POP TLS"],
    [1812, "RADIUS  /TCP/UDP"],
    [1813, "RADIUS  /TCP/UDP"],
    // [3309, "SQL  /TCP/UDP"],
    [3269, "Microsoft Global Catalog"],
    [3389, "RDP"],
]);
exports.default = portDefinitions;
},{}],6:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//--Copyright (c) 2023-2025 Robert A. Howell
const rwbLink_1 = __importDefault(require("./rwbLink"));
/**
 * Used for image Attribution
 */
class AttributionLink extends rwbLink_1.default {
    /**Counts the number of objects instantiated */
    static count = 0;
    /**Name of the owner */
    attributedOwner;
    /**WebBits article data ID */
    articleId;
    constructor(
    /**Link title */
    title, 
    /**Link inner text */
    innerText, 
    /** link href */
    hReference, 
    /**Name of the owner */
    attributedOwner, 
    /**WebBits page */
    pageName, 
    /**WebBits article data ID */
    articleId) {
        super(title, innerText, pageName, hReference);
        this.attributedOwner = attributedOwner;
        this.articleId = articleId;
        AttributionLink.count++;
    }
}
exports.default = AttributionLink;
},{"./rwbLink":12}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardsSlideShow {
    ssContainer;
    arrowsContainer;
    prevBtn;
    nextBtn;
    cards;
    cardShowQuant;
    cardIndxStart = 0;
    cardCounter = 1;
    cardsIndxEnd;
    turn = 0;
    maxTurnCount;
    slideShowContainer = document.querySelector(".cardslideshow");
    numberElement;
    windowSize;
    constructor(cards, quantityShow, windowSize) {
        this.cards = cards;
        this.cardShowQuant = quantityShow;
        this.cardsIndxEnd = this.cardShowQuant - 1;
        this.maxTurnCount = this.cards.length - this.cardShowQuant;
        this.windowSize = windowSize;
        this.hideOverflowElements();
        this.onInitSetupCardPosition();
        this.ssContainer = this.newContainerMarkup();
        this.arrowsContainer = this.newArrowsMarkup();
        this.newNumberElement();
        this.addBtnEventListeners();
        this.showHideSlideShowButtons();
    }
    nextSlide() {
        if (this.turn == this.maxTurnCount) {
            return;
        }
        if (this.windowSize == "LARGE") {
            if (this.cards[this.cardIndxStart - 1] != undefined) {
                this.cards[this.cardIndxStart - 1].style.display = "none";
                this.cards[this.cardIndxStart - 1].children[1].children[2].removeAttribute("tabindex");
                this.cards[this.cardIndxStart - 1].children[1].children[3].removeAttribute("tabindex");
            }
            //Hide the first element in slideshow
            this.cards[this.cardIndxStart].style.opacity = "0%";
            this.cards[this.cardIndxStart].children[1].children[2].setAttribute("tabindex", "-1");
            this.cards[this.cardIndxStart].children[1].children[3].setAttribute("tabindex", "-1");
            //Move middle element to left
            this.cards[this.cardIndxStart + 1].style.transform = "translateX(-365px)";
            //Move right to the middle
            this.cards[this.cardIndxStart + 2].style.transform = "translateX(0px)";
            //Display the next element for slideshow
            this.cards[this.cardsIndxEnd + 1].children[1].children[2].removeAttribute("tabindex");
            this.cards[this.cardsIndxEnd + 1].children[1].children[3].removeAttribute("tabindex");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("z-index");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("opacity");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("display");
            //Move in new element
            this.cards[this.cardsIndxEnd + 1].style.transform = "translateX(365px)";
            if (this.cards[this.cardsIndxEnd + 2] != undefined) {
                this.cards[this.cardsIndxEnd + 2].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[this.cardsIndxEnd + 2].children[1].children[3].setAttribute("tabindex", "-1");
                this.cards[this.cardsIndxEnd + 2].style.display = "block";
                this.cards[this.cardsIndxEnd + 2].style.zIndex = "-1";
            }
        }
        if (this.windowSize == "MEDIUM") {
            if (this.cards[this.cardIndxStart - 1] != undefined) {
                this.cards[this.cardIndxStart - 1].style.display = "none";
                this.cards[this.cardIndxStart - 1].children[1].children[2].removeAttribute("tabindex");
                this.cards[this.cardIndxStart - 1].children[1].children[3].removeAttribute("tabindex");
            }
            //Hide the first element in slideshow
            this.cards[this.cardIndxStart].style.opacity = "0%";
            this.cards[this.cardIndxStart].children[1].children[2].setAttribute("tabindex", "-1");
            this.cards[this.cardIndxStart].children[1].children[3].setAttribute("tabindex", "-1");
            //Move the right element to left
            this.cards[this.cardIndxStart + 1].style.transform = "translateX(-182.5px)";
            //Display the next element for slideshow
            this.cards[this.cardsIndxEnd + 1].children[1].children[2].removeAttribute("tabindex");
            this.cards[this.cardsIndxEnd + 1].children[1].children[3].removeAttribute("tabindex");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("z-index");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("opacity");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("display");
            //Move in new element
            this.cards[this.cardsIndxEnd + 1].style.transform = "translateX(182.5px)";
            if (this.cards[this.cardsIndxEnd + 2] != undefined) {
                this.cards[this.cardsIndxEnd + 2].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[this.cardsIndxEnd + 2].children[1].children[3].setAttribute("tabindex", "-1");
                this.cards[this.cardsIndxEnd + 2].style.display = "block";
                this.cards[this.cardsIndxEnd + 2].style.zIndex = "-1";
            }
        }
        if (this.windowSize == "SMALL") {
            if (this.cards[this.cardIndxStart - 1] != undefined) {
                this.cards[this.cardIndxStart - 1].style.display = "none";
                this.cards[this.cardIndxStart - 1].children[1].children[2].removeAttribute("tabindex");
                this.cards[this.cardIndxStart - 1].children[1].children[3].removeAttribute("tabindex");
            }
            //Hide the first element in slideshow
            this.cards[this.cardIndxStart].style.opacity = "0%";
            this.cards[this.cardIndxStart].children[1].children[2].setAttribute("tabindex", "-1");
            this.cards[this.cardIndxStart].children[1].children[3].setAttribute("tabindex", "-1");
            //Move element to left
            this.cards[this.cardIndxStart].style.transform = "translateX(-182.5px)";
            //Move element to center
            this.cards[this.cardIndxStart + 1].style.transform = "translateX(0px)";
            //Display the next element for slideshow
            this.cards[this.cardsIndxEnd + 1].children[1].children[2].removeAttribute("tabindex");
            this.cards[this.cardsIndxEnd + 1].children[1].children[3].removeAttribute("tabindex");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("z-index");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("opacity");
            this.cards[this.cardsIndxEnd + 1].style.removeProperty("display");
            if (this.cards[this.cardsIndxEnd + 2] != undefined) {
                this.cards[this.cardsIndxEnd + 2].style.transform = "translateX(182.5px)";
                this.cards[this.cardsIndxEnd + 2].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[this.cardsIndxEnd + 2].children[1].children[3].setAttribute("tabindex", "-1");
                this.cards[this.cardsIndxEnd + 2].style.display = "block";
                this.cards[this.cardsIndxEnd + 2].style.zIndex = "-1";
            }
        }
        //Increment index counter
        this.cardIndxStart++;
        this.cardsIndxEnd++;
        this.turn++;
        this.cardCounter++;
    }
    prevSlide() {
        if (this.turn == 0) {
            return;
        }
        if (this.windowSize == "LARGE") {
            //Hide the last element in slideshow
            this.cards[this.cardsIndxEnd].style.opacity = "0%";
            this.cards[this.cardsIndxEnd].style.zIndex = "-1";
            this.cards[this.cardsIndxEnd].children[1].children[2].setAttribute("tabindex", "-1");
            this.cards[this.cardsIndxEnd].children[1].children[3].setAttribute("tabindex", "-1");
            if (this.cards[this.cardsIndxEnd + 1] != undefined) {
                this.cards[this.cardsIndxEnd + 1].style.display = "none";
                this.cards[this.cardsIndxEnd + 1].children[1].children[2].removeAttribute("tabindex");
                this.cards[this.cardsIndxEnd + 1].children[1].children[3].removeAttribute("tabindex");
            }
            //Move middle element to to the right
            this.cards[this.cardIndxStart + 1].style.transform = "translateX(365px)";
            //Move left element to the right
            this.cards[this.cardIndxStart].style.transform = "translateX(0px)";
            //Display the next element for slideshow
            this.cards[this.cardIndxStart - 1].children[1].children[2].removeAttribute("tabindex");
            this.cards[this.cardIndxStart - 1].children[1].children[3].removeAttribute("tabindex");
            this.cards[this.cardIndxStart - 1].style.removeProperty("opacity");
            this.cards[this.cardIndxStart - 1].style.removeProperty("display");
            //Move in new element
            this.cards[this.cardIndxStart - 1].style.transform = "translateX(-365px)";
            if (this.cards[this.cardIndxStart - 2] != undefined) {
                this.cards[this.cardIndxStart - 2].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[this.cardIndxStart - 2].children[1].children[3].setAttribute("tabindex", "-1");
                this.cards[this.cardIndxStart - 2].style.display = "block";
            }
        }
        if (this.windowSize == "MEDIUM") {
            //Hide the last element in slideshow
            this.cards[this.cardsIndxEnd].style.opacity = "0%";
            this.cards[this.cardsIndxEnd].style.zIndex = "-1";
            this.cards[this.cardsIndxEnd].children[1].children[2].setAttribute("tabindex", "-1");
            this.cards[this.cardsIndxEnd].children[1].children[3].setAttribute("tabindex", "-1");
            if (this.cards[this.cardsIndxEnd + 1] != undefined) {
                this.cards[this.cardsIndxEnd + 1].style.display = "none";
                this.cards[this.cardsIndxEnd + 1].children[1].children[2].removeAttribute("tabindex");
                this.cards[this.cardsIndxEnd + 1].children[1].children[3].removeAttribute("tabindex");
            }
            //Move left element to the right
            this.cards[this.cardIndxStart].style.transform = "translateX(182.5px)";
            //Display the next element for slideshow
            this.cards[this.cardIndxStart - 1].children[1].children[2].removeAttribute("tabindex");
            this.cards[this.cardIndxStart - 1].children[1].children[3].removeAttribute("tabindex");
            this.cards[this.cardIndxStart - 1].style.removeProperty("opacity");
            this.cards[this.cardIndxStart - 1].style.removeProperty("display");
            //Move in new element
            this.cards[this.cardIndxStart - 1].style.transform = "translateX(-182.5px)";
            if (this.cards[this.cardIndxStart - 2] != undefined) {
                this.cards[this.cardIndxStart - 2].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[this.cardIndxStart - 2].children[1].children[3].setAttribute("tabindex", "-1");
                this.cards[this.cardIndxStart - 2].style.display = "block";
            }
        }
        if (this.windowSize == "SMALL") {
            //Hide the first element in slideshow
            this.cards[this.cardIndxStart].style.opacity = "0%";
            this.cards[this.cardsIndxEnd].style.zIndex = "-1";
            this.cards[this.cardsIndxEnd].children[1].children[2].setAttribute("tabindex", "-1");
            this.cards[this.cardsIndxEnd].children[1].children[3].setAttribute("tabindex", "-1");
            if (this.cards[this.cardsIndxEnd + 1] != undefined) {
                this.cards[this.cardsIndxEnd + 1].style.display = "none";
                this.cards[this.cardsIndxEnd + 1].children[1].children[2].removeAttribute("tabindex");
                this.cards[this.cardsIndxEnd + 1].children[1].children[3].removeAttribute("tabindex");
            }
            //Move element to right
            this.cards[this.cardIndxStart].style.transform = "translateX(182.5px)";
            //Move element to center
            this.cards[this.cardIndxStart - 1].style.transform = "translateX(0px)";
            //Display the next element for slideshow
            this.cards[this.cardIndxStart - 1].children[1].children[2].removeAttribute("tabindex");
            this.cards[this.cardIndxStart - 1].children[1].children[3].removeAttribute("tabindex");
            this.cards[this.cardIndxStart - 1].style.removeProperty("opacity");
            this.cards[this.cardIndxStart - 1].style.removeProperty("display");
            if (this.cards[this.cardIndxStart - 2] != undefined) {
                this.cards[this.cardIndxStart - 2].style.display = "block";
                this.cards[this.cardIndxStart - 2].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[this.cardIndxStart - 2].children[1].children[3].setAttribute("tabindex", "-1");
            }
        }
        //Increment index counter
        this.cardIndxStart--;
        this.cardsIndxEnd--;
        this.turn--;
        this.cardCounter--;
    }
    addBtnEventListeners = () => {
        //Event listeners for the next and previous buttons
        this.nextBtn.addEventListener("click", e => {
            e.preventDefault();
            this.nextSlide();
            this.showHideSlideShowButtons();
            this.numberArrowText();
        });
        this.prevBtn.addEventListener("click", e => {
            e.preventDefault();
            this.prevSlide();
            this.showHideSlideShowButtons();
            this.numberArrowText();
        });
    };
    showHideSlideShowButtons() {
        if (this.cardIndxStart == 0) {
            this.prevBtn.style.opacity = "0%";
            this.prevBtn.setAttribute("tabindex", "-1");
            return;
        }
        if (this.cardsIndxEnd == this.cards.length - 1) {
            this.nextBtn.style.opacity = "0%";
            this.nextBtn.setAttribute("tabindex", "-1");
            return;
        }
        this.prevBtn.style.removeProperty("opacity");
        this.nextBtn.style.removeProperty("opacity");
        this.prevBtn.removeAttribute("tabindex");
        this.nextBtn.removeAttribute("tabindex");
    }
    numberArrowText = () => {
        if (this.windowSize == "SMALL") {
            this.numberElement.innerText = `${this.cardCounter.toString()} of ${this.cards.length.toString()}`;
        }
        else {
            this.numberElement.innerText = `[${this.cardCounter.toString()}..${(this.cardCounter +
                this.cardShowQuant -
                1).toString()}] of ${this.cards.length.toString()}`;
        }
    };
    onResizeShowStartingElems() {
        //screen has refreshed. counter is reset to start. card elements may be
        //hidden from the display, depending on when the refresh occurred, so
        //reset the starting elements to visible
        //Show overflow elements
        if (this.cardIndxStart < this.cardShowQuant) {
            for (let i = 0; i <= this.cardsIndxEnd; i++) {
                this.cards[i].style.setProperty("opacity", "1");
                this.cards[i].style.setProperty("display", "block");
                if (this.windowSize == "SMALL") {
                    this.cards[i].style.transform = "translateX(0px)";
                    continue;
                }
                if (this.windowSize == "LARGE") {
                    if (i == 1) {
                        this.cards[i].style.transform = "translateX(0px)";
                    }
                    this.cards[i].style.removeProperty("z-index");
                }
            }
        }
    }
    hideOverflowElements() {
        //Hide overflow elements
        if (this.cardIndxStart < this.cardShowQuant) {
            for (let i = this.cards.length - 1; i > this.cardsIndxEnd; i--) {
                this.cards[i].style.position = "absolute";
                this.cards[i].style.opacity = "0%";
                this.cards[i].style.display = "none";
                if (this.windowSize == "SMALL") {
                    this.cards[i].style.transform = "translateX(0px)";
                    continue;
                }
                if (this.windowSize == "MEDIUM") {
                    this.cards[i].style.transform = "translateX(182.5px)";
                    continue;
                }
                this.cards[i].style.transform = "translateX(365px)";
            }
        }
        this.cards[0].style.position = "absolute";
    }
    newContainerMarkup() {
        const newContainerStyles = () => {
            //Container styles
            slideShowSlides.classList.add("slidescontainer");
            slideShowSlides.style.width = "100%";
            slideShowSlides.style.height = "32em";
            slideShowSlides.style.display = "flex";
            slideShowSlides.style.position = "relative";
        };
        //Build the markup needed for the slideshow
        //Add cards to container
        let slideShowSlides = this.slideShowContainer.appendChild(document.createElement("div"));
        for (let card of this.cards) {
            let temp = card;
            slideShowSlides.insertAdjacentElement("beforeend", temp);
            newContainerStyles();
        }
        slideShowSlides.classList.add(`${this.windowSize}`);
        return slideShowSlides;
    }
    newArrowsMarkup() {
        //Add left and right buttons
        let slideshowbtns = this.slideShowContainer.appendChild(document.createElement("div"));
        //Left slideshow btn
        let previousslideshowbtn = document.createElement("button");
        previousslideshowbtn.classList.add("slideshowPrev");
        previousslideshowbtn.innerText = "❮";
        slideshowbtns.insertAdjacentElement("beforeend", previousslideshowbtn);
        //Update slideshow object
        this.prevBtn = previousslideshowbtn;
        //Right slideshow btn
        let nextslideshowbtn = document.createElement("button");
        nextslideshowbtn.classList.add("slideshowNext");
        nextslideshowbtn.innerText = "❯";
        slideshowbtns.insertAdjacentElement("beforeend", nextslideshowbtn);
        slideshowbtns.style.display = "flex";
        //Update slideshow object
        this.nextBtn = nextslideshowbtn;
        return slideshowbtns;
    }
    newNumberElement() {
        //Number element
        this.numberElement = document.createElement("div");
        this.numberArrowText();
        this.nextBtn.insertAdjacentElement("beforebegin", this.numberElement);
        this.numberElement.style.whiteSpace = "nowrap";
        this.numberElement.style.display = "grid";
        this.numberElement.style.alignContent = "center";
        this.numberElement.style.marginInline = "1.5rem";
    }
    onInitSetupCardPosition() {
        switch (this.windowSize) {
            case "SMALL":
                //small window size logic
                this.cards[1].style.transform = "translateX(182.5px)";
                this.cards[1].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[1].children[1].children[3].setAttribute("tabindex", "-1");
                break;
            case "MEDIUM":
                //medium window size logic
                this.cards[0].style.transform = "translateX(-182.5px)";
                this.cards[1].style.position = "absolute";
                this.cards[1].style.transform = "translateX(182.5px)";
                this.cards[2].style.display = "block";
                this.cards[2].style.zIndex = "-1";
                this.cards[2].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[2].children[1].children[3].setAttribute("tabindex", "-1");
                break;
            case "LARGE":
                //large window size logic
                this.cards[0].style.transform = "translateX(-365px)";
                this.cards[1].style.position = "absolute";
                this.cards[2].style.position = "absolute";
                this.cards[2].style.transform = "translateX(365px)";
                this.cards[3].style.display = "block";
                this.cards[3].style.zIndex = "-1";
                this.cards[3].children[1].children[2].setAttribute("tabindex", "-1");
                this.cards[3].children[1].children[3].setAttribute("tabindex", "-1");
                break;
            default:
                console.debug("Screen size property not set on slideshow.");
                break;
        }
    }
}
exports.default = CardsSlideShow;
},{}],8:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2025 Robert A. Howell
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashcardCardElems = void 0;
/** This object creates an array of div elements from port number information*/
class FlashcardCardElems {
    /**Counts the number of widget objects instantiated */
    static widgetcount = 0;
    /**Counts the number of objects within the widget instantiated [flashcards] */
    static totalflashcards = 0;
    m_flashcardsArr = [];
    flashcardscount = 0;
    m_portInfoMap;
    constructor(portnumbersMap) {
        this.m_portInfoMap = portnumbersMap;
        const mapIter = this.m_portInfoMap.keys();
        FlashcardCardElems.widgetcount++;
        this.m_portInfoMap.forEach(port => {
            // Create list element
            let flashcard = document.createElement("li");
            //TODO: let flashcard = new GrowingCardElement();
            //Unable to instantiate li element as growing card due to DOM unavalable --> requires shadowDOM manipulate
            // Populate element for page use
            const inner = flashcard.appendChild(document.createElement("div"));
            const flipfront = inner.appendChild(document.createElement("div"));
            const flipback = inner.appendChild(document.createElement("div"));
            let gameCardSpan = flipfront.appendChild(document.createElement("span"));
            let gameCardBackSpan = flipback.appendChild(document.createElement("span"));
            flashcard.classList.add("flip-card", "gameCard");
            inner.classList.add("inner", "vertical");
            flipfront.classList.add("cardFront");
            flipback.classList.add("cardBack", "vertical");
            gameCardSpan.innerText = `Port# ${mapIter.next().value}`;
            gameCardBackSpan.innerText = `${port}`;
            this.flashcardscount++;
            FlashcardCardElems.totalflashcards++;
            // Add div to flashcard instance
            this.m_flashcardsArr.push(flashcard);
        });
    }
}
exports.FlashcardCardElems = FlashcardCardElems;
},{}],9:[function(require,module,exports){
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
const rwbCard_1 = __importDefault(require("./rwbCard"));
const rwbErrorBus_1 = __importStar(require("./rwbErrorBus"));
class RandomWebBits {
    cardsSection;
    cardsData;
    constructor(cardsSection, cardsData) {
        if (typeof cardsSection == "undefined") {
            return;
        }
        this.cardsSection = cardsSection;
        this.cardsData = cardsData;
    }
    /** Create sections to append to main
     *
     *        <section class="cards">
     *            <h2>Arbitrary Articles:</h2>
     *            <div class="card_columns">
     *            </div>
     *        </section>
     *
     * @param sectionTitle - heading section's title.
     * @param sectionHeadingId - section heading's id attribute.
     * @param containerType - slideshow, accordion, or default.
     * @returns HTMLDivElement
     */
    static buildCardContainingSection(sectionTitle, sectionHeadingId, containerType) {
        let pageMain;
        pageMain = rwbErrorBus_1.default.checkSelectedElement("MainRWB", "main", true, true);
        if (pageMain == null || pageMain.nodeName !== "MAIN") {
            return;
        }
        const cardSection = document.createElement("section");
        let sectionHeading = document.createElement("h2");
        let cardsContainer = document.createElement("div");
        cardSection.appendChild(sectionHeading);
        cardSection.appendChild(cardsContainer);
        pageMain.append(cardSection);
        // Add data attributes and property values
        switch (containerType) {
            case "slideshow":
                cardsContainer.classList.add("card_columns", "cardslideshow", "grid");
                break;
            case "accordion":
                cardsContainer.classList.add("card_columns", "cardaccordion", "grid");
                break;
            default:
                cardsContainer.classList.add("card_columns", "grid");
                break;
        }
        cardSection.classList.add("cards");
        sectionHeading.innerText = `${sectionTitle}`;
        sectionHeading.setAttribute("id", sectionHeadingId);
        return cardsContainer;
    }
    /** This function maps card data to HTML elements
     *
     * @param cardsData
     * @returns
     */
    static buildRwbCards(cardsData) {
        if (cardsData == null) {
            new rwbErrorBus_1.RwbReferenceError("emptyArray", "cards data array may be null");
            return;
        }
        // Iterate each card in the array. Build the card elements and add the data
        return cardsData.map((article) => {
            return Object.create(new rwbCard_1.default(article)).card;
        });
    }
    static buildRwbIntroduction() {
        let introduction = document.createElement("section");
        let Title = introduction.appendChild(document.createElement("h1"));
        let h2 = introduction.appendChild(document.createElement("h2"));
        let para1 = introduction.appendChild(document.createElement("p"));
        let para2 = introduction.appendChild(document.createElement("p"));
        Title.classList.add("Title");
        Title.innerText = "Home | Arbitrary Web Bits";
        h2.innerText = "New to the Web?";
        para1.innerText =
            "If you are new to web development, there are innumerous enumerations of stuff and things the World Wide Web offers that you don't know.";
        para2.innerText = "You may want to start by claiming a stake to a domain name.";
        return introduction;
    }
}
exports.default = RandomWebBits;
},{"./rwbCard":10,"./rwbErrorBus":11}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RWBCard {
    /**
     * Card elements to display an icon picture and card body. An image, the image top, the card body.
     */
    card;
    rwbCardElements;
    article;
    constructor(article) {
        this.article = article;
        this.card = this.buildRwbCardMarkup();
    }
    /**
     *  Map WebBit data to a card each
     *
     *       <div class="card">
     *           <div>
     *               <img src="" alt="" article="">
     *           </div>
     *           <div class="cardBody">
     *               <h3></h3>
     *               <p></p>
     *               <a href=""></a>
     *           </div>
     *       </div>
     */
    buildRwbCardMarkup() {
        let webBitCard = document.createElement("div");
        this.rwbCardElements = {
            cardImg: document.createElement("img"),
            cardImgTop: document.createElement("div"),
            cardBody: document.createElement("div"),
        };
        let cardBodyHeading = document.createElement("h3");
        let cardBodyPara = document.createElement("p");
        let cardBodyLink = document.createElement("a");
        this.rwbCardElements.cardImgTop.appendChild(this.rwbCardElements.cardImg);
        this.rwbCardElements.cardBody.appendChild(cardBodyHeading);
        this.rwbCardElements.cardBody.appendChild(cardBodyPara);
        this.rwbCardElements.cardBody.appendChild(cardBodyLink);
        // Add card data attributes and property values
        webBitCard.classList.add("card");
        webBitCard.setAttribute("id", `${this.article.id}`);
        this.rwbCardElements.cardBody.classList.add("cardBody");
        this.rwbCardElements.cardImg.setAttribute("src", this.article.cardImage);
        this.rwbCardElements.cardImg.setAttribute("alt", this.article.cardImageAlt);
        this.rwbCardElements.cardImg.setAttribute("Article", this.article.articleNumber.toString());
        cardBodyLink.setAttribute("href", this.article.articleLink);
        cardBodyHeading.innerText = this.article.name;
        cardBodyPara.textContent = this.article.description;
        cardBodyLink.textContent = "Go to Page";
        // Image attribution may be needed for the image used
        // Attribution data is imported as 'attrlinks' signature parameter
        if (this.article.linkAttribution) {
            this.buildRwbCardAttributionPanel(this.rwbCardElements, this.article.linkAttribution);
        }
        // The card is WebBit
        // Add the markup to the containing element
        webBitCard.appendChild(this.rwbCardElements.cardImgTop);
        webBitCard.appendChild(this.rwbCardElements.cardBody);
        return webBitCard;
    }
    /**
     * Function to determine image attribution, the image id and article id will match,
     * otherwise the data isn't entered, causing a miss
     *
     *       <div class="flip-card"><!--card image panel-->
     *       <div class="inner">
     *           <div class="cardFront">
     *               <img src="" alt="" article="">
     *           </div>
     *                <div class="cardBack">
     *                    <h3></h3>
     *                    <p></p>
     *                    <img src="" alt="" article="" class="imgSmall imgPTR">
     *                </div>
     *           </div>
     *       </div><!--end card image panel-->
     * @param rwbCardElements Card elements to display an icon picture and card body. An image, the image top, the card body.
     * @param link Attribution link
     */
    buildRwbCardAttributionPanel(rwbCardElements, link) {
        if (rwbCardElements.cardImg.getAttribute("Article") === link.articleId.toString()) {
            // Create image back panel elements and add the data
            // Redefine card image panel as a flip panel
            const CARDINNER = rwbCardElements.cardImgTop.appendChild(document.createElement("div"));
            const CARDFRONT = CARDINNER.appendChild(document.createElement("div"));
            CARDFRONT.appendChild(rwbCardElements.cardImg); // move image within card front divisor
            let smallImg = rwbCardElements.cardImg.cloneNode(false);
            const CARDBACK = CARDINNER.appendChild(document.createElement("div"));
            const BACKHEADING = CARDBACK.appendChild(document.createElement("h3"));
            CARDBACK.appendChild(smallImg);
            const BACKPARA = CARDBACK.appendChild(document.createElement("p"));
            const ATTRIBUTELINK = rwbCardElements.cardBody.appendChild(document.createElement("a")); //append to front panel
            // Add flip-panel data attributes and property values
            rwbCardElements.cardImgTop.classList.add("flip-card");
            CARDINNER.classList.add("inner");
            CARDFRONT.classList.add("cardFront");
            smallImg.classList.add("imgSmall", "imgPTR");
            CARDBACK.classList.add("cardBack");
            ATTRIBUTELINK.classList.add("attribute");
            BACKHEADING.textContent = link.attributedOwner;
            BACKPARA.textContent = link.innerText;
            ATTRIBUTELINK.href = link.hReference;
            ATTRIBUTELINK.title = link.title;
            ATTRIBUTELINK.textContent = link.attributedOwner;
        }
    }
}
exports.default = RWBCard;
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class holds the data for 'WebBit' article cards. Key information
 * of the article's contents are contained: name, description, data created,
 * etc.
 */
class WebBit {
    /**Counts the number of objects instantiated */
    static count = 0;
    id;
    articleNumber;
    name;
    description;
    dateCreated;
    articleLink;
    cardImage;
    cardImageAlt;
    linkAttribution;
    constructor(id, articleNumber, name, description, dateCreated, articleLink, cardImage, cardImageAlt, linkAttribution) {
        this.id = id;
        this.name = name;
        this.articleNumber = articleNumber;
        this.description = description;
        this.dateCreated = dateCreated;
        this.articleLink = articleLink;
        this.cardImage = cardImage;
        this.cardImageAlt = cardImageAlt;
        this.linkAttribution = linkAttribution;
        WebBit.count++;
    }
}
exports.default = WebBit;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2FyZHNDb21wb25lbnRzLnRzIiwic3JjL2NvbXBvbmVudHMvZmxhc2hjYXJkR2FtZVdpZGdldC50cyIsInNyYy9jb21wb25lbnRzL3dlYkJpdHNDYXJkcy50cyIsInNyYy9kYXRhL2RhdGEudHMiLCJzcmMvZGF0YS9wb3J0TnVtcy50cyIsInNyYy9tb2RlbHMvYXR0cmlidXRpb25MaW5rLnRzIiwic3JjL21vZGVscy9jYXJkc1NsaWRlU2hvdy50cyIsInNyYy9tb2RlbHMvZmxhc2hjYXJkQ2FyZEVsZW1zLnRzIiwic3JjL21vZGVscy9yYW5kb21XZWJCaXRzLnRzIiwic3JjL21vZGVscy9yd2JDYXJkLnRzIiwic3JjL21vZGVscy9yd2JFcnJvckJ1cy50cyIsInNyYy9tb2RlbHMvcndiTGluay50cyIsInNyYy9tb2RlbHMvc2NyaXB0UGVyZi50cyIsInNyYy9tb2RlbHMvd2ViQml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNFQSw0REFBK0Y7QUFDL0YsMkZBQW1FO0FBQ25FLHFFQUEwQztBQUUxQyxNQUFNLGNBQWMsR0FBRztJQUNyQixTQUFTLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUMxQixJQUFJO1lBQ0YsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkIsQ0FBQztnQkFDakMsS0FBSyxhQUFhLENBQUM7Z0JBQ25CLEtBQUssR0FBRztvQkFDTiw2QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsOEJBQThCO29CQUNyRCwrQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsK0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1IsS0FBSywyQkFBMkIsQ0FBQztnQkFDakMsS0FBSyxhQUFhO29CQUNoQiw2QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsOEJBQThCO29CQUNyRCxNQUFN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SUFBSSxTQUFTLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUM1RDtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUM5QixxQ0FBcUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZ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QXVCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O0FBOUJILDBCQStCQzs7OztBQ3JDRDs7OztHQUlHO0FBQ0gsTUFBTSxNQUFNO0lBQ1YsK0NBQStDO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLEVBQUUsQ0FBUztJQUNYLGFBQWEsQ0FBUztJQUN0QixJQUFJLENBQVM7SUFDYixXQUFXLENBQVM7SUFDcEIsV0FBVyxDQUFPO0lBQ2xCLFdBQVcsQ0FBUztJQUNwQixTQUFTLENBQVM7SUFDbEIsWUFBWSxDQUFTO0lBQ3JCLGVBQWUsQ0FBOEI7SUFFcEQsWUFDRSxFQUFVLEVBQ1YsYUFBcUIsRUFDckIsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLFdBQWlCLEVBQ2pCLFdBQW1CLEVBQ25CLFNBQWlCLEVBQ2pCLFlBQW9CLEVBQ3BCLGVBQWlDO1FBRWpDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7O0FBR0gsa0JBQWUsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IGNsYXNzQ29tcG9uZW50cyBmcm9tIFwiLi9jbGFzc0NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcndiQ2FyZHNXaWRnZXQsIHdlYkJpdHNTbGlkZVNob3csIHdlYkJpdHNBY2NvcmRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3dlYkJpdHNDYXJkc1wiO1xyXG5pbXBvcnQgZmxhc2hDYXJkR2FtZVdpZGdldCBmcm9tIFwiLi9jb21wb25lbnRzL2ZsYXNoY2FyZEdhbWVXaWRnZXRcIjtcclxuaW1wb3J0IFJ3YlBlcmYgZnJvbSBcIi4vbW9kZWxzL3NjcmlwdFBlcmZcIjtcclxuXHJcbmNvbnN0IGNhcmRDb21wb25lbnRzID0ge1xyXG4gIGNoZWNrUGFnZTogKHBhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3dpdGNoIChwYWdlKSB7XHJcbiAgICAgICAgY2FzZSBcIi9SYW5kb21XZWJCaXRzL2luZGV4Lmh0bWxcIjpcclxuICAgICAgICBjYXNlIFwiL2luZGV4Lmh0bWxcIjpcclxuICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgcndiQ2FyZHNXaWRnZXQuaW5pdCgpOyAvLyBjYXJkcyB3aWRnZXQgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgIHdlYkJpdHNTbGlkZVNob3cuaW5pdCgpO1xyXG4gICAgICAgICAgd2ViQml0c0FjY29yZGlvbi5pbml0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiL1JhbmRvbVdlYkJpdHMvcGFnZXMuaHRtbFwiOlxyXG4gICAgICAgIGNhc2UgXCIvcGFnZXMuaHRtbFwiOlxyXG4gICAgICAgICAgcndiQ2FyZHNXaWRnZXQuaW5pdCgpOyAvLyBjYXJkcyB3aWRnZXQgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgZmxhc2hjYXJkIGNvbXBvbmVudHNcclxuICAgICAgICBjYXNlIFwiL2ZsYXNoY2FyZHMuaHRtbFwiOlxyXG4gICAgICAgICAgZmxhc2hDYXJkR2FtZVdpZGdldC5pbml0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgcGFnZSBjb21wb25lbnQ6ICR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBsZXQgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IHBhZ2VQZXJmID0gbmV3IFJ3YlBlcmYoXCJDYXJkY29tcG9uZW50c1wiKTsgLy9tZWFzdXJlIHBlcmZvcm1hbmNlXHJcblxyXG4gICAgY2FyZENvbXBvbmVudHMuY2hlY2tQYWdlKHBhZ2UpO1xyXG5cclxuICAgIHBhZ2VQZXJmLmVuZCgpOyAvL2VuZCBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcbiAgfSxcclxuICBsb2FkOiAoKSA9PiB7fSxcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjYXJkQ29tcG9uZW50cy5pbml0KTtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IHsgRmxhc2hjYXJkQ2FyZEVsZW1zIH0gZnJvbSBcIi4uL21vZGVscy9mbGFzaGNhcmRDYXJkRWxlbXNcIjtcclxuaW1wb3J0IHBvcnREZWZpbml0aW9ucyBmcm9tIFwiLi4vZGF0YS9wb3J0TnVtc1wiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuY29uc3QgZmxhc2hDYXJkR2FtZVdpZGdldCA9IHtcclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICAvLyBFc3RhYmxpc2ggd2hpY2ggcG9ydCBudW1iZXJzIHRvIHRlc3QgYW5kIHRoZSBkZWZpbml0aW9uXHJcbiAgICAvLyBUT0RPOiBmdW5jdGlvbnMgZmxhc2hjYXJkc1xyXG4gICAgY29uc3QgbWV0aG9kRGVmaW5pdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihbXHJcbiAgICAgIFtcImNoYXJBdCgpXCIsIFwiUmV0dXJucyBhIG5ldyBzdHJpbmcgb2YgdGhlIGNoYXJhY3RlciBhdCBhIGdpdmVuIGluZGV4LlwiXSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBmbGFzaGNhcmQgZWxlbWVudHNcclxuICAgIGxldCBtYWluRmxhc2hDYXJkRGl2cyA9IG5ldyBGbGFzaGNhcmRDYXJkRWxlbXMocG9ydERlZmluaXRpb25zKTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIGdhbWUncyB0aXRsZSBlbGVtZW50XHJcbiAgICBsZXQgbWFpbkZsYXNoQ2FyZFBhZ2U7XHJcbiAgICBsZXQgbWFpbkZsYXNoQ2FyZFBhZ2VEaXY7XHJcbiAgICBtYWluRmxhc2hDYXJkUGFnZSA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiTWFpbkZsYXNoQ2FyZFwiLCBcIiNtYWluRmxhc2hDYXJkR2FtZVwiLCB0cnVlLCB0cnVlKTtcclxuICAgIG1haW5GbGFzaENhcmRQYWdlRGl2ID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJNYWluRmxhc2hDYXJkc1wiLCBcIiNtYWluRmxhc2hDYXJkc1wiLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCBnYW1lVGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZ2FtZVRpdGxlRWxlbS5pbm5lclRleHQgPSBcIkNvbXB1dGluZyBQb3J0IE51bWJlcnNcIjtcclxuICAgIG1haW5GbGFzaENhcmRQYWdlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgZ2FtZVRpdGxlRWxlbSk7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBmbGFzaGNhcmRzIHRvIHdpZGdldFxyXG4gICAgZm9yIChsZXQgZWxlbSBvZiBtYWluRmxhc2hDYXJkRGl2cy5tX2ZsYXNoY2FyZHNBcnIpIHtcclxuICAgICAgbWFpbkZsYXNoQ2FyZFBhZ2VEaXYuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZsYXNoQ2FyZEdhbWVXaWRnZXQ7XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBXRUJCSVREQVRBIGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuaW1wb3J0IFJhbmRvbVdlYkJpdHMgZnJvbSBcIi4uL21vZGVscy9yYW5kb21XZWJCaXRzXCI7XHJcbmltcG9ydCBDYXJkc1NsaWRlU2hvdyBmcm9tIFwiLi4vbW9kZWxzL2NhcmRzU2xpZGVTaG93XCI7XHJcbmltcG9ydCBXZWJCaXQgZnJvbSBcIi4uL21vZGVscy93ZWJCaXRcIjtcclxuaW1wb3J0IFJ3YkVycm9yIGZyb20gXCIuLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbmNsYXNzIEFjY29yZGlvbiB7XHJcbiAgcHVibGljIGFjY29yZGlvbkVsZW1lbnRzID0gbmV3IE1hcDxIVE1MRGl2RWxlbWVudCwgYm9vbGVhbj4oKTtcclxuICBjb25zdHJ1Y3RvcihhY2NvcmRpb25Ob2RlczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4pIHtcclxuICAgIGZvciAobGV0IGNhcmQgb2YgYWNjb3JkaW9uTm9kZXMpIHtcclxuICAgICAgdGhpcy5hY2NvcmRpb25FbGVtZW50cy5zZXQoY2FyZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhcmQgd2lkZ2V0IHRvIGluaXRpYWxpemUgYXJ0aWNsZSBkYXRhIGludG8gSFRNTCBjYXJkIGVsZW1lbnRzLiBUaGlzIHdpZGdldFxyXG4gKiBjcmVhdGVzIG11bHRpcGxlIHNlY3Rpb25zIG9mIGNhcmRzIHRvIGFkZCB0byBhIHBhZ2UuXHJcbiAqL1xyXG5jb25zdCByd2JDYXJkc1dpZGdldCA9IHtcclxuICBhZGRDYXJkU2VjdGlvbkNsYXNzOiAoY2FyZHM6IEhUTUxEaXZFbGVtZW50W10gfCBIVE1MRGl2RWxlbWVudCwgY2xzOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNhcmRzKSkge1xyXG4gICAgICAvLyBjYXJkcyBpcyBhbiBhcnJheSBvZiBjYXJkczsgYXBwZW5kIGNsYXNzIHRvIGFsbCBjYXJkc1xyXG4gICAgICBmb3IgKGxldCBjYXJkIG9mIGNhcmRzKSB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKGAke2Nsc31gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNhcmRzKSkge1xyXG4gICAgICAvLyBjYXJkcyBpcyBhbiBlbGVtZW50OyBhcHBlbmQgY2xhc3MgdG8gdGhlIGVsZW1lbnRcclxuICAgICAgY2FyZHMuY2xhc3NMaXN0LmFkZChgJHtjbHN9YCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBidWlsZFJhbmRvbVdlYkJpdHM6IChwYWdlPzogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgYXJiaXRyYXJ5QXJ0aWNsZXM6IFJhbmRvbVdlYkJpdHM7XHJcbiAgICBsZXQgZ3VpZGVTaG9ydHM6IFJhbmRvbVdlYkJpdHM7XHJcbiAgICBsZXQgZXhwbG9yZXRoZVdlYjogUmFuZG9tV2ViQml0cztcclxuXHJcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcclxuICAgICAgY2FzZSBcIkhvbWVcIjpcclxuICAgICAgICBlbnVtIENhcmRDb250YWluZXJUeXBlIHtcclxuICAgICAgICAgIFNsaWRlc2hvdyA9IFwic2xpZGVzaG93XCIsXHJcbiAgICAgICAgICBBY2NvcmRpb24gPSBcImFjY29yZGlvblwiLFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTcGxpdCB0aGUgY2FyZHMgYXJyYXlzIGludG8gdGhlaXIgcmVzcGVjdGl2ZSBjYXRlZ29yeVxyXG4gICAgICAgIGFyYml0cmFyeUFydGljbGVzID0gbmV3IFJhbmRvbVdlYkJpdHMoXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkQ2FyZENvbnRhaW5pbmdTZWN0aW9uKFxyXG4gICAgICAgICAgICBcIkFyYml0cmFyeSBBcnRpY2xlczpcIixcclxuICAgICAgICAgICAgXCJBcmJpdHJhcnlBcnRpY2xlc1wiLFxyXG4gICAgICAgICAgICBDYXJkQ29udGFpbmVyVHlwZS5TbGlkZXNob3dcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkUndiQ2FyZHMoV0VCQklUREFUQS5zaGlmdCgpIGFzIFdlYkJpdFtdKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGd1aWRlU2hvcnRzID0gbmV3IFJhbmRvbVdlYkJpdHMoXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkQ2FyZENvbnRhaW5pbmdTZWN0aW9uKFxyXG4gICAgICAgICAgICBcIkd1aWRlIFNob3J0czpcIixcclxuICAgICAgICAgICAgXCJHdWlkZVNob3J0c1wiLFxyXG4gICAgICAgICAgICBDYXJkQ29udGFpbmVyVHlwZS5BY2NvcmRpb25cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkUndiQ2FyZHMoV0VCQklUREFUQS5zaGlmdCgpIGFzIFdlYkJpdFtdKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGV4cGxvcmV0aGVXZWIgPSBuZXcgUmFuZG9tV2ViQml0cyhcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRDYXJkQ29udGFpbmluZ1NlY3Rpb24oXCJFeHBsb3JlIHRoZSBXZWI6XCIsIFwiRXhwbG9yZXRoZVdlYlwiKSxcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRSd2JDYXJkcyhXRUJCSVREQVRBLnNoaWZ0KCkgYXMgV2ViQml0W10pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBTcGxpdCB0aGUgY2FyZHMgYXJyYXlzIGludG8gdGhlaXIgcmVzcGVjdGl2ZSBjYXRlZ29yeVxyXG4gICAgICAgIGFyYml0cmFyeUFydGljbGVzID0gbmV3IFJhbmRvbVdlYkJpdHMoXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkQ2FyZENvbnRhaW5pbmdTZWN0aW9uKFwiQXJiaXRyYXJ5IEFydGljbGVzOlwiLCBcIkFyYml0cmFyeUFydGljbGVzXCIpLFxyXG4gICAgICAgICAgUmFuZG9tV2ViQml0cy5idWlsZFJ3YkNhcmRzKFdFQkJJVERBVEEuc2hpZnQoKSBhcyBXZWJCaXRbXSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBndWlkZVNob3J0cyA9IG5ldyBSYW5kb21XZWJCaXRzKFxyXG4gICAgICAgICAgUmFuZG9tV2ViQml0cy5idWlsZENhcmRDb250YWluaW5nU2VjdGlvbihcIkd1aWRlIFNob3J0czpcIiwgXCJHdWlkZVNob3J0c1wiKSxcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRSd2JDYXJkcyhXRUJCSVREQVRBLnNoaWZ0KCkgYXMgV2ViQml0W10pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZXhwbG9yZXRoZVdlYiA9IG5ldyBSYW5kb21XZWJCaXRzKFxyXG4gICAgICAgICAgUmFuZG9tV2ViQml0cy5idWlsZENhcmRDb250YWluaW5nU2VjdGlvbihcIkV4cGxvcmUgdGhlIFdlYjpcIiwgXCJFeHBsb3JldGhlV2ViXCIpLFxyXG4gICAgICAgICAgUmFuZG9tV2ViQml0cy5idWlsZFJ3YkNhcmRzKFdFQkJJVERBVEEuc2hpZnQoKSBhcyBXZWJCaXRbXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBNdWx0aXBsZSBjYXRlZ29yaWVzIG9mIGNhcmQgZGF0YSBleGlzdC4gVGhpcyBhcnJheSBob2xkcyB0aGUgbWFya3VwIG5lZWRlZFxyXG4gICAgICogdG8gY3JlYXRlIGNhdGVnb3J5IHNlY3Rpb25zIGRpdmlzaW9ucyB3aGVuIHBsYWNlZCBvbiBhIHBhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNhcmRzU2VjdGlvbnM6IEhUTUxEaXZFbGVtZW50W10gPSBbXHJcbiAgICAgIGFyYml0cmFyeUFydGljbGVzLmNhcmRzU2VjdGlvbixcclxuICAgICAgZ3VpZGVTaG9ydHMuY2FyZHNTZWN0aW9uLFxyXG4gICAgICBleHBsb3JldGhlV2ViLmNhcmRzU2VjdGlvbixcclxuICAgIF07XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIGNhcmQgZGF0YSArIGF0dHJpYnV0aW9uIGxpbmsgZGF0YVxyXG4gICAgLy8gV0VCQklUREFUQSBicm9rZW4gaW50byAzIGFycmF5czogUGFnZXMgKG9yIGFydGljbGVzKSwgR3VpZGVzLCBhbmQgRXhwbG9yZXNcclxuICAgIC8qKlRoaXMgYXJyYXkgaG9sZHMgdGhlIG1hcmt1cCBvZiBjYXJkIGVsZW1lbnRzLiBFYWNoIGluZGV4IHN0b3JlcyB0aGUgY2FyZHMnIGRhdGFcclxuICAgICAqIGZvciBvbmUgY2F0ZWdvcnkgb2YgYXJ0aWNsZXMuICovXHJcbiAgICBjb25zdCBjYXJkc0RhdGE6IGFueSA9IFthcmJpdHJhcnlBcnRpY2xlcy5jYXJkc0RhdGEsIGd1aWRlU2hvcnRzLmNhcmRzRGF0YSwgZXhwbG9yZXRoZVdlYi5jYXJkc0RhdGFdO1xyXG4gICAgY29uc3QgUldCID0gW2NhcmRzU2VjdGlvbnMsIGNhcmRzRGF0YV07XHJcblxyXG4gICAgcmV0dXJuIFJXQjtcclxuICB9LFxyXG4gIC8qKiBDYXJkcyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gVGhpcyBmdW5jdGlvbiBicmVha3MgZG93biB0aGUgZGF0YSBzdHJ1Y3R1cmUgaW5cclxuICAgKiBvcmRlciB0byBmb3JtdWxhdGUgdGhlIGFydGljbGUgZGV0YWlscyBpbnRvIG9uZSBjYXJkIGZvciBlYWNoIGFydGljbGUgZGF0YS5cclxuICAgKlxyXG4gICAqIEFydGljbGVzIGhhdmUgZGlmZmVyZW50IGNhdGVnb3JpZXMsIHNvIGVhY2ggY2F0ZWdvcnkgbXVzdCBiZSByZXNwZWN0ZWQuXHJcbiAgICogKi9cclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBsZXQgUldCU2VjdGlvbkNhcmRzOiBhbnk7XHJcbiAgICAvLyBSb3V0ZXMgLT4gQWRkIHdpZGdldCBhbmQgZm9ybWF0IHBhZ2VzXHJcbiAgICAvLyBJbmRleCAoSG9tZSkgcGFnZSBzaG9ydGVucyBlYWNoIHNlY3Rpb25zJyBjYXJkIGNvdW50IGFuZCByYW5kb21pemVzXHJcbiAgICBpZiAoXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9pbmRleC5odG1sXCIgfHxcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1wiIHx8XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9SYW5kb21XZWJCaXRzL2luZGV4Lmh0bWxcIiB8fFxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvUmFuZG9tV2ViQml0cy9cIiB8fFxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZGlzdC9pbmRleC5odG1sXCJcclxuICAgICkge1xyXG4gICAgICAvL0J1aWxkIFJXQiBTZWN0aW9ucyArIGNhcmQgc2xpZGVzaG93LCBhY2NvcmRpYW5cclxuICAgICAgUldCU2VjdGlvbkNhcmRzID0gcndiQ2FyZHNXaWRnZXQuYnVpbGRSYW5kb21XZWJCaXRzKFwiSG9tZVwiKTtcclxuXHJcbiAgICAgIC8vIEFwcGx5IGNsYXNzZXMgdG8gY2FyZHMgcmVsZXZhbnQgb2YgdGhlIGNvbnRhaW5lciB0eXBlXHJcbiAgICAgIHJ3YkNhcmRzV2lkZ2V0LmFkZENhcmRTZWN0aW9uQ2xhc3MoUldCU2VjdGlvbkNhcmRzWzFdWzBdLCBcInNsaWRlXCIpO1xyXG4gICAgICByd2JDYXJkc1dpZGdldC5hZGRDYXJkU2VjdGlvbkNsYXNzKFJXQlNlY3Rpb25DYXJkc1sxXVsxXSwgXCJhY2NvcmRpb25zbGlkZVwiKTtcclxuXHJcbiAgICAgIC8vUmFuZG9taXplIHRoZSBjYXJkcyBpbiB0aGUgc2xpZGVzaG93IHNlY3Rpb25cclxuICAgICAgcndiQ2FyZHNXaWRnZXQucmFuZG9taXplV2ViQml0cyhSV0JTZWN0aW9uQ2FyZHNbMV0pO1xyXG5cclxuICAgICAgLy9BZGQgaW50cm9kdWN0aW9uIHNlY3Rpb24gYW5kIGFwcGVuZCB0byBtYWluXHJcbiAgICAgIGxldCBtYWluOiBIVE1MRWxlbWVudDtcclxuICAgICAgbWFpbiA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiTWFpblwiLCBcIm1haW5cIiwgdHJ1ZSwgdHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICBSV0JTZWN0aW9uQ2FyZHNbMF0udW5zaGlmdChSYW5kb21XZWJCaXRzLmJ1aWxkUndiSW50cm9kdWN0aW9uKCkpO1xyXG4gICAgICBtYWluLnByZXBlbmQoUldCU2VjdGlvbkNhcmRzWzBdLnNoaWZ0KCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9CdWlsZCBSV0IgU2VjdGlvbnMgKyBjYXJkcyBhcyBkZWZhdWx0XHJcbiAgICAgIFJXQlNlY3Rpb25DYXJkcyA9IHJ3YkNhcmRzV2lkZ2V0LmJ1aWxkUmFuZG9tV2ViQml0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB0aGUgY2FyZHMgdG8gdGhlIHBhZ2UgYnkgY29tYmluaW5nIHJ3YlsxXSAodGhlIGNhcmRzKSB0byByd2JbMF0gKHRoZSBzZWN0aW9uIGVsZW1lbnRzKVxyXG4gICAgLy8gT3V0ZXIgbG9vcDogaXRlcmF0ZSBlYWNoIGNhdGVnb3J5LCByZXNwZWN0aXZlbHk6IFBhZ2VzLCBHdWlkZXMsIEV4cGxvcmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJXQlNlY3Rpb25DYXJkc1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoUldCU2VjdGlvbkNhcmRzWzBdW2ldICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vIElubmVyIGxvb3A6IGl0ZXJhdGUgdGhyb3VnaCB0aGUgY2F0ZWdvcnkgZGF0YVxyXG4gICAgICAgIC8vIEZyb20gdGhlIGNhcmRzIHN0YWNrLCBhcHBlbmQgZWFjaCB0byBzZWN0aW9uXHJcbiAgICAgICAgUldCU2VjdGlvbkNhcmRzWzFdLnNoaWZ0KCkuZm9yRWFjaCgoYXJ0aWNsZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBSV0JTZWN0aW9uQ2FyZHNbMF1baV0uYXBwZW5kKGFydGljbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJUaGVyZSdzIGFuIGVycm9yIGluIHRoZSBkYXRhLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmFuZG9taXplV2ViQml0cyhjYXJkc0FydGljbGVzOiBhbnkpIHtcclxuICAgIC8qKiBSYW5kb21pemUgdGhlIG9yZGVyIG9mIGNhcmRzLiAqL1xyXG4gICAgY29uc3QgZ2V0TXVsdGlwbGVSYW5kb20gPSAoYXJyOiBhbnksIG51bTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIC8vIHJhbmRvbWl6ZSB0aGUgYXJyYXlcclxuICAgICAgY29uc3Qgc2h1ZmZsZWQgPSBbLi4uYXJyXS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHNodWZmbGVkLnNsaWNlKDAsIG51bSk7IC8vIHJldHVybiB0aGUgcmVxdWVzdGVkIG51bWJlciBvZiBlbGVtZW50c1xyXG4gICAgfTtcclxuICAgIGNhcmRzQXJ0aWNsZXNbMF0gPSBnZXRNdWx0aXBsZVJhbmRvbShjYXJkc0FydGljbGVzWzBdLCBjYXJkc0FydGljbGVzWzBdLmxlbmd0aCk7IC8vcmFuZG9taXplIGFsbCBwYWdlc1xyXG4gICAgY2FyZHNBcnRpY2xlc1sxXSA9IGdldE11bHRpcGxlUmFuZG9tKGNhcmRzQXJ0aWNsZXNbMV0sIDgpOyAvL3JhbmRvbWx5IHNlbGVjdCAzIGd1aWRlc1xyXG4gIH0sXHJcbn07XHJcblxyXG4vKipBIGNhcmQgYWNjb3JkaW9uIHdpZGdldCAqL1xyXG5jb25zdCB3ZWJCaXRzQWNjb3JkaW9uID0ge1xyXG4gIGFkZENhcmRBY2NvcmRpb25TdHlsZXM6IChjYXJkQWNjb3JkaW9uOiBBY2NvcmRpb24sIHNjcmVlblNpemU6IHN0cmluZykgPT4ge1xyXG4gICAgY2FyZEFjY29yZGlvbi5hY2NvcmRpb25FbGVtZW50cy5mb3JFYWNoKChpc09wZW4sIGNhcmQpID0+IHtcclxuICAgICAgY2FyZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImZsZXhEaXJlY3Rpb25cIik7XHJcbiAgICAgIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtd2lkdGhcIiwgXCI5MDBweFwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIm1hcmdpblwiLCBcIjBcIik7XHJcbiAgICAgIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCIxMDBweFwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAvL2hpZGUgdGhlICdGbGF0aWNvbicgbGlua3NcclxuXHJcbiAgICAgIGZvciAobGV0IGlubmVyIG9mIGNhcmQuY2hpbGROb2Rlcykge1xyXG4gICAgICAgIGxldCBpbm5lcmVsZW0gPSA8SFRNTEVsZW1lbnQ+aW5uZXI7XHJcbiAgICAgICAgaW5uZXJlbGVtLnN0eWxlLndpZHRoID0gXCI1MCVcIjtcclxuICAgICAgfVxyXG4gICAgICAvL2NhcmQgYm9keSBhdHRyIHN0eWxlXHJcbiAgICAgIGxldCBhdHRybGluayA9IGNhcmQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzNdIGFzIEhUTUxBbmNob3JFbGVtZW50O1xyXG4gICAgICBhdHRybGluay5zdHlsZS50b3AgPSBcIjU1cHhcIjtcclxuICAgICAgYXR0cmxpbmsuc3R5bGUucmlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbiAgICAgIGlmIChzY3JlZW5TaXplID09IFwiU01BTExcIikge1xyXG4gICAgICAgIC8vY2FyZCBpbWFnZSBzdHlsZVxyXG4gICAgICAgIGxldCBpbWFnZSA9IGNhcmQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIGltYWdlLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWhlaWdodFwiLCBcIjIwMHB4XCIpO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LXdpZHRoXCIsIFwiMjAwcHhcIik7XHJcblxyXG4gICAgICAgIC8vY2FyZCBpbWFnZSBzbWFsbCBzdHlsZVxyXG4gICAgICAgIGxldCBpbWFnZVNtYWxsID0gY2FyZC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgaW1hZ2VTbWFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1oZWlnaHRcIiwgXCIxMDBweFwiKTtcclxuICAgICAgICBpbWFnZVNtYWxsLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LXdpZHRoXCIsIFwiMTAwcHhcIik7XHJcblxyXG4gICAgICAgIC8vY2FyZCBiYWNrIHBhcmEgc3R5bGVcclxuICAgICAgICBsZXQgaW1hZ2VQYXJhID0gY2FyZC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzJdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgaW1hZ2VQYXJhLnN0eWxlLnNldFByb3BlcnR5KFwibWFyZ2luXCIsIFwiMFwiKTtcclxuICAgICAgICBpbWFnZVBhcmEuc3R5bGUuc2V0UHJvcGVydHkoXCJmb250LXNpemVcIiwgXCIxNnB4XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzY3JlZW5TaXplID09IFwiTUVESVVNXCIpIHtcclxuICAgICAgICAvL2NhcmQgaW1hZ2Ugc3R5bGVcclxuICAgICAgICBsZXQgaW1hZ2UgPSBjYXJkLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICBpbWFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1oZWlnaHRcIiwgXCIyNzVweFwiKTtcclxuICAgICAgICBpbWFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC13aWR0aFwiLCBcIjI3NXB4XCIpO1xyXG5cclxuICAgICAgICAvL2NhcmQgaW1hZ2Ugc21hbGwgc3R5bGVcclxuICAgICAgICBsZXQgaW1hZ2VTbWFsbCA9IGNhcmQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIGltYWdlU21hbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaGVpZ2h0XCIsIFwiMTAwcHhcIik7XHJcbiAgICAgICAgaW1hZ2VTbWFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC13aWR0aFwiLCBcIjEwMHB4XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwYWdlbGluayA9IGNhcmQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzJdIGFzIEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgICAgLy9hZGQgY2xpY2sgZXZlbnRcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IGF0dHJsaW5rIHx8IGUudGFyZ2V0ID09IHBhZ2VsaW5rKSByZXR1cm47XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjEwMHB4XCIpO1xyXG4gICAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCIyNzVweFwiKTtcclxuICAgICAgICAgIGlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc09wZW4gPyBjbG9zZSgpIDogb3BlbigpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9hZGQgZm9jdXMgZXZlbnRcclxuICAgICAgbGV0IHNpdGVsaW5rID0gY2FyZC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMl0gYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICAgIHNpdGVsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCIyNzVweFwiKTtcclxuICAgICAgICAgIGlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvcGVuKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzaXRlbGluay5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjEwMHB4XCIpO1xyXG4gICAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9hZGQgdW5mb2N1cyBldmVudFxyXG4gICAgICBhdHRybGluay5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjEwMHB4XCIpO1xyXG4gICAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9hZGQgdW5mb2N1cyBldmVudFxyXG4gICAgICBhdHRybGluay5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIFwiMjc1cHhcIik7XHJcbiAgICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3BlbigpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgaW5pdDogKCkgPT4ge1xyXG4gICAgbGV0IGFjY29yZGlvbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBhY2NvcmRpb25Db250YWluZXIgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgICAgXCJDYXJkQWNjb3JkaW9uXCIsXHJcbiAgICAgIFwiLmNhcmRhY2NvcmRpb25cIixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgZmFsc2VcclxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpZiAoYWNjb3JkaW9uQ29udGFpbmVyID09IG51bGwpIHJldHVybjtcclxuICAgIGFjY29yZGlvbkNvbnRhaW5lci5zdHlsZS5tYXhXaWR0aCA9IFwiNzVlbVwiO1xyXG5cclxuICAgIC8vY3JlYXRlIGFjY29yZGlvbiBjYXJkIG1hcCBzdGF0ZVxyXG4gICAgY29uc3QgY2FyZGFjY29yZGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLmNhcmRhY2NvcmRpb24gLmFjY29yZGlvbnNsaWRlXCJcclxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgbGV0IGFjY29yZGlvbiA9IE9iamVjdC5jcmVhdGUobmV3IEFjY29yZGlvbihjYXJkYWNjb3JkaW9uKSk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweClcIikubWF0Y2hlcykge1xyXG4gICAgICB3ZWJCaXRzQWNjb3JkaW9uLmFkZENhcmRBY2NvcmRpb25TdHlsZXMoYWNjb3JkaW9uLCBcIlNNQUxMXCIpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDc2OXB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgIHdlYkJpdHNBY2NvcmRpb24uYWRkQ2FyZEFjY29yZGlvblN0eWxlcyhhY2NvcmRpb24sIFwiTUVESVVNXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICB3ZWJCaXRzQWNjb3JkaW9uLmFkZENhcmRBY2NvcmRpb25TdHlsZXMoYWNjb3JkaW9uLCBcIlNNQUxMXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDc2OXB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgd2ViQml0c0FjY29yZGlvbi5hZGRDYXJkQWNjb3JkaW9uU3R5bGVzKGFjY29yZGlvbiwgXCJNRURJVU1cIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICB3ZWJCaXRzQWNjb3JkaW9uLnJlbW92ZUNhcmRBY2NvcmlvblN0eWxlcyhhY2NvcmRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHJlbW92ZUNhcmRBY2NvcmlvblN0eWxlczogKGNhcmRhY2NvcmRpb246IEFjY29yZGlvbikgPT4ge1xyXG4gICAgY2FyZGFjY29yZGlvbi5hY2NvcmRpb25FbGVtZW50cy5mb3JFYWNoKChpc09wZW4sIGNhcmQpID0+IHtcclxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcImZsZXhEaXJlY3Rpb25cIiwgXCJjb2x1bW5cIik7XHJcbiAgICAgIGNhcmQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgIGNhcmQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXgtd2lkdGhcIik7XHJcbiAgICAgIGNhcmQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW5cIik7XHJcbiAgICAgIGNhcmQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgY2FyZC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcclxuXHJcbiAgICAgIC8vY2FyZCBib2R5IGF0dHIgc3R5bGVcclxuICAgICAgbGV0IGF0dHJsaW5rID0gY2FyZC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbM10gYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICAgIGF0dHJsaW5rLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidG9wXCIpO1xyXG4gICAgICBhdHRybGluay5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInJpZ2h0XCIpO1xyXG4gICAgICBhdHRybGluay5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcclxuXHJcbiAgICAgIC8vY2FyZCBpbWFnZSBzdHlsZVxyXG4gICAgICBsZXQgaW1hZ2UgPSBjYXJkLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgaW1hZ2Uuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXgtaGVpZ2h0XCIpO1xyXG4gICAgICBpbWFnZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1heC13aWR0aFwiKTtcclxuXHJcbiAgICAgIC8vY2FyZCBpbWFnZSBzbWFsbCBzdHlsZVxyXG4gICAgICBsZXQgaW1hZ2VTbWFsbCA9IGNhcmQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICBpbWFnZVNtYWxsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWF4LWhlaWdodFwiKTtcclxuICAgICAgaW1hZ2VTbWFsbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1heC13aWR0aFwiKTtcclxuXHJcbiAgICAgIC8vY2FyZCBiYWNrIHBhcmEgc3R5bGVcclxuICAgICAgbGV0IGltYWdlUGFyYSA9IGNhcmQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1syXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICBpbWFnZVBhcmEuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXJnaW5cIik7XHJcbiAgICAgIGltYWdlUGFyYS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImZvbnQtc2l6ZVwiKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGlubmVyIG9mIGNhcmQuY2hpbGROb2Rlcykge1xyXG4gICAgICAgIGxldCBpbm5lcmVsZW0gPSA8SFRNTEVsZW1lbnQ+aW5uZXI7XHJcbiAgICAgICAgaW5uZXJlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwid2lkdGhcIik7XHJcbiAgICAgICAgaW5uZXJlbGVtLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhcmQucmVwbGFjZVdpdGgoY2FyZC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8qKkEgY2FyZCBzbGlkZXNob3cgd2lkZ2V0ICovXHJcbmNvbnN0IHdlYkJpdHNTbGlkZVNob3cgPSB7XHJcbiAgaW5pdDogKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9wYWdlcy5odG1sXCIpIHJldHVybjtcclxuICAgIGlmIChSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIndlYkJpdHNTbGlkZVNob3dcIiwgXCIuY2FyZHNsaWRlc2hvd1wiLCB0cnVlLCBmYWxzZSkgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgbGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkc2xpZGVzaG93IC5zbGlkZVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIGlmIChjYXJkcyA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZXJlIGFyZSBubyBjYXJkcyBvbiB0aGUgcGFnZS5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBzbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogODE5cHgpXCIpO1xyXG4gICAgdmFyIHRhYmxldCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogODIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDkwcHgpXCIpO1xyXG5cclxuICAgIC8vSW1wbGVtZW50IHNsaWRlc2hvdyBmb3Igc2VjdGlvbiBhcnRpY2xlc1xyXG4gICAgbGV0IHNsaWRlc2hvdzogQ2FyZHNTbGlkZVNob3c7XHJcbiAgICBsZXQgc2xpZGVzaG93bWVkOiBDYXJkc1NsaWRlU2hvdztcclxuICAgIGxldCBzbGlkZXNob3dsYXJnZTogQ2FyZHNTbGlkZVNob3c7XHJcbiAgICBsZXQgY3VycmVudHNsaWRlc2hvdzogQ2FyZHNTbGlkZVNob3c7XHJcblxyXG4gICAgLy9CYXNlZCBvbiB0aGUgbWF0Y2hlZCBtZWRpYSBzaXplLCBjcmVhdGUgYSBzbWFsbCwgbWVkaXVtLCBvciBsYXJnZSBzbGlkZXNob3dcclxuICAgIGlmIChzbWFsbC5tYXRjaGVzKSB7XHJcbiAgICAgIHNsaWRlc2hvdyA9IG5ldyBDYXJkc1NsaWRlU2hvdyhjYXJkcywgMSwgXCJTTUFMTFwiKTtcclxuICAgICAgY3VycmVudHNsaWRlc2hvdyA9IHNsaWRlc2hvdztcclxuICAgIH0gZWxzZSBpZiAodGFibGV0Lm1hdGNoZXMpIHtcclxuICAgICAgc2xpZGVzaG93bWVkID0gbmV3IENhcmRzU2xpZGVTaG93KGNhcmRzLCAyLCBcIk1FRElVTVwiKTtcclxuICAgICAgY3VycmVudHNsaWRlc2hvdyA9IHNsaWRlc2hvd21lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNsaWRlc2hvd2xhcmdlID0gbmV3IENhcmRzU2xpZGVTaG93KGNhcmRzLCAzLCBcIkxBUkdFXCIpO1xyXG4gICAgICBjdXJyZW50c2xpZGVzaG93ID0gc2xpZGVzaG93bGFyZ2U7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgc2xpZGVzaG93c21hbGw6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICBsZXQgc2xpZGVzaG93bWVkaXVtOiBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgbGV0IHNsaWRlc2hvd2xhcmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgc2xpZGVzaG93c21hbGwgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgICAgICBcIkNhcmRTbGlkZVNob3dcIixcclxuICAgICAgICBcIi5zbGlkZXNjb250YWluZXIuU01BTExcIixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIHNsaWRlc2hvd21lZGl1bSA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgICAgIFwiQ2FyZFNsaWRlU2hvd1wiLFxyXG4gICAgICAgIFwiLnNsaWRlc2NvbnRhaW5lci5NRURJVU1cIixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIHNsaWRlc2hvd2xhcmdlID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXHJcbiAgICAgICAgXCJDYXJkU2xpZGVTaG93XCIsXHJcbiAgICAgICAgXCIuc2xpZGVzY29udGFpbmVyLkxBUkdFXCIsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogODE5cHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICBpZiAoc2xpZGVzaG93bWVkaXVtICE9IG51bGwpIHtcclxuICAgICAgICAgIHNsaWRlc2hvd21lZGl1bS5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFJlbW92ZWQgbWVkIHNsaWRlc2hvdyAke3NsaWRlc2hvd21lZGl1bX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlc2hvd2xhcmdlICE9IG51bGwpIHtcclxuICAgICAgICAgIHNsaWRlc2hvd2xhcmdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgUmVtb3ZlZCBsYXJnZSBzbGlkZXNob3cgJHtzbGlkZXNob3dsYXJnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudHNsaWRlc2hvdy5zc0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93LmFycm93c0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93ID0gbmV3IENhcmRzU2xpZGVTaG93KGNhcmRzLCAxLCBcIlNNQUxMXCIpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cub25SZXNpemVTaG93U3RhcnRpbmdFbGVtcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDgyMHB4KSBhbmQgKG1heC13aWR0aDogMTA5MHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgaWYgKHNsaWRlc2hvd3NtYWxsICE9IG51bGwpIHtcclxuICAgICAgICAgIHNsaWRlc2hvd3NtYWxsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgUmVtb3ZlZCBzbWFsbCBzbGlkZXNob3cgJHtzbGlkZXNob3dzbWFsbH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlc2hvd2xhcmdlICE9IG51bGwpIHtcclxuICAgICAgICAgIHNsaWRlc2hvd2xhcmdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgUmVtb3ZlZCBsYXJnZSBzbGlkZXNob3cgJHtzbGlkZXNob3dsYXJnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudHNsaWRlc2hvdy5zc0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93LmFycm93c0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93ID0gbmV3IENhcmRzU2xpZGVTaG93KGNhcmRzLCAyLCBcIk1FRElVTVwiKTtcclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93Lm9uUmVzaXplU2hvd1N0YXJ0aW5nRWxlbXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMDkxcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICBpZiAoc2xpZGVzaG93c21hbGwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgc2xpZGVzaG93c21hbGwucmVtb3ZlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGBSZW1vdmVkIHNtYWxsIGVsZW1lbnQgJHtzbGlkZXNob3dzbWFsbH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlc2hvd21lZGl1bSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBzbGlkZXNob3dtZWRpdW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGBSZW1vdmVkIG1lZGl1bSBlbGVtZW50ICR7c2xpZGVzaG93bWVkaXVtfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93LnNzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cuYXJyb3dzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cgPSBuZXcgQ2FyZHNTbGlkZVNob3coY2FyZHMsIDMsIFwiTEFSR0VcIik7XHJcbiAgICAgICAgY3VycmVudHNsaWRlc2hvdy5vblJlc2l6ZVNob3dTdGFydGluZ0VsZW1zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyByd2JDYXJkc1dpZGdldCwgd2ViQml0c0FjY29yZGlvbiwgd2ViQml0c1NsaWRlU2hvdyB9O1xyXG4iLCJcInN0cmljdCBtb2RlXCI7XHJcbi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBXZWJCaXQgZnJvbSBcIi4uL21vZGVscy93ZWJCaXRcIjtcclxuaW1wb3J0IEF0dHJpYnV0aW9uTGluayBmcm9tIFwiLi4vbW9kZWxzL2F0dHJpYnV0aW9uTGlua1wiO1xyXG5cclxuLy8gQ3JlYXRlIG5ldyBBQSAoQXJiaXRyYXJ5IEFydGljbGUpXHJcblxyXG4vKipcclxuICogXCJBcmJpdHJhcnkgQXJ0aWNsZXMnIHNlY3Rpb24gY2FyZCBkYXRhLlwiXHJcbiAqL1xyXG5jb25zdCBhcmJpdHJhcnlBcnRpY2xlcyA9IG5ldyBBcnJheShcclxuICBuZXcgV2ViQml0KFxyXG4gICAgXCJEb21haW5sb29rdXBcIixcclxuICAgIDEsXHJcbiAgICBcIkRvbWFpbiBMb29rdXBcIixcclxuICAgIFwiQ2hlY2sgYW4gYXZhaWxhYmxlIGRvbWFpbiB1c2luZyBXaG9JUyBBUEkgc2VhcmNoXCIsXHJcbiAgICBuZXcgRGF0ZSgyMDIyLCAxMiwgNCksXHJcbiAgICBcInBhZ2VzL2RvbWFpbmxvb2t1cC5odG1sXCIsXHJcbiAgICBcImxpYnJhcnkvaW1nL3dob2lzLndlYnBcIixcclxuICAgIFwiV2hvSXMgTG9va3VwXCIsXHJcbiAgICBuZXcgQXR0cmlidXRpb25MaW5rKFxyXG4gICAgICBcImRvbWFpbiBpY29uc1wiLFxyXG4gICAgICBcIkRvbWFpbiBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvblwiLFxyXG4gICAgICBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2RvbWFpblwiLFxyXG4gICAgICBcIkZsYXRpY29uXCIsXHJcbiAgICAgIFwiRG9tYWluIExvb2t1cFwiLFxyXG4gICAgICAxXHJcbiAgICApXHJcbiAgKSxcclxuICBuZXcgV2ViQml0KFxyXG4gICAgXCJIdG1scmVzcG9uc2VzXCIsXHJcbiAgICAyLFxyXG4gICAgXCJIVE1MIEZyYW1lc1wiLFxyXG4gICAgXCJWaWV3IEhUTUwgcGFnZSByZXNwb25zZSBzdGF0dXMgaW5mb3JtYXRpb25cIixcclxuICAgIG5ldyBEYXRlKDIwMjIsIDEyLCAxMSksXHJcbiAgICBcInBhZ2VzL2h0bWxyZXNwb25zZXMuaHRtbFwiLFxyXG4gICAgXCJsaWJyYXJ5L2ltZy9IVE1MX0ZyYW1lcy53ZWJwXCIsXHJcbiAgICBcIkhUTUwgZnJhbWVzIGV4YW1wbGVcIixcclxuICAgIG5ldyBBdHRyaWJ1dGlvbkxpbmsoXHJcbiAgICAgIFwiY29kZSBpY29uc1wiLFxyXG4gICAgICBcIkNvZGUgaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb25cIixcclxuICAgICAgXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9jb2RlXCIsXHJcbiAgICAgIFwiRmxhdGljb25cIixcclxuICAgICAgXCJIVE1MIEZyYW1lc1wiLFxyXG4gICAgICAyXHJcbiAgICApXHJcbiAgKSxcclxuICBuZXcgV2ViQml0KFxyXG4gICAgXCJXZWJ0ZWNoXCIsXHJcbiAgICA1LFxyXG4gICAgXCJXYXBwYWx5emVyXCIsXHJcbiAgICBcIldhcHBhbHl6ZXIgYnJvd3NlciBleHRlbnNpb25cIixcclxuICAgIG5ldyBEYXRlKDIwMjMsIDExLCAxOSksXHJcbiAgICBcInBhZ2VzL3dlYnRlY2guaHRtbFwiLFxyXG4gICAgXCJsaWJyYXJ5L2ltZy93YXBwYWx5emVyLWxvZ28ud2VicFwiLFxyXG4gICAgXCJCcm93c2VyIGV4dGVuc2lvbiBsb2dvLiBBIHdoaXRlIHcgb24gYSBwdXJwbGUgdGlsZS5cIixcclxuICAgIG5ldyBBdHRyaWJ1dGlvbkxpbmsoXHJcbiAgICAgIFwiV2FwcGFseXplciBhcHBcIixcclxuICAgICAgXCJHcmFwaGljYWwgbG9nbyBmb3IgV2FwcGFseXplci5cIixcclxuICAgICAgXCJodHRwczovL3d3dy53YXBwYWx5emVyLmNvbS9sb2dvcy9cIixcclxuICAgICAgXCJXYXBwYWx5emVyXCIsXHJcbiAgICAgIFwiV2FwcGFseXplclwiLFxyXG4gICAgICA1XHJcbiAgICApXHJcbiAgKSxcclxuICAgIG5ldyBXZWJCaXQoXHJcbiAgICAgICAgXCJKc29ub2JqZWN0XCIsXHJcbiAgICAgICAgNixcclxuICAgICAgICBcImpzb25PYmplY3RcIixcclxuICAgICAgICBcIkpTT04gb2JqZWN0IG5vdGF0aW9uXCIsXHJcbiAgICAgICAgbmV3IERhdGUoMjAyMywgMSwgOSksXHJcbiAgICAgICAgXCJwYWdlcy9qc29ub2JqZWN0Lmh0bWxcIixcclxuICAgICAgICBcImxpYnJhcnkvaW1nL2pzb24ud2VicFwiLFxyXG4gICAgICAgIFwiSlNPTiBsb2dvOiBBIGdyZXkgY2lyY2xlIHdpdGggYXJ0aXN0aWMgc3BpcmFscy5cIixcclxuICAgICAgICBuZXcgQXR0cmlidXRpb25MaW5rKFxyXG4gICAgICAgICAgICBcIkphdmFTY3JpcHQgT2JqZWN0IE5vdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiR3JhcGhpY2FsIGxvZ28gZm9yIEpTT04uXCIsXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuanNvbi5vcmcvXCIsXHJcbiAgICAgICAgICAgIFwianNvbi5vcmdcIixcclxuICAgICAgICAgICAgXCJqc29uT2JqZWN0XCIsXHJcbiAgICAgICAgICAgIDZcclxuICAgICAgICApXHJcbiAgICApXHJcbik7XHJcblxyXG4vKipcclxuICogXCJHdWlkZSBTaG9ydHMnIHNlY3Rpb24gY2FyZCBkYXRhLlwiXHJcbiAqL1xyXG5jb25zdCBndWlkZVNob3J0cyA9IG5ldyBBcnJheShcclxuICBuZXcgV2ViQml0KFxyXG4gICAgXCJIdHRwc2NlcnRcIixcclxuICAgIDQsXHJcbiAgICBcIkhUVFBTIENlcnRpZmljYXRlXCIsXHJcbiAgICBcIlNlbGVjdCB0byB2aWV3IGEgd2Vic2l0ZSdzIEhUVFBTIGNlcnRpZmljYXRlXCIsXHJcbiAgICBuZXcgRGF0ZSgyMDIyLCAxMiwgMjYpLFxyXG4gICAgXCJndWlkZXMvaHR0cHMuaHRtbFwiLFxyXG4gICAgXCJsaWJyYXJ5L2ltZy9odHRwc19jZXJ0LndlYnBcIixcclxuICAgIFwiQ3Vyc29yIHNlbGVjdGluZyBIVFRQUyBjZXJ0aWZpY2F0ZVwiLFxyXG4gICAgbmV3IEF0dHJpYnV0aW9uTGluayhcclxuICAgICAgXCJzc2wgY2VydGlmaWNhdGUgaWNvbnNcIixcclxuICAgICAgXCJTc2wgY2VydGlmaWNhdGUgaWNvbnMgY3JlYXRlZCBieSBpbmlwYWdpc3R1ZGlvIC0gRmxhdGljb25cIixcclxuICAgICAgXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9zc2wtY2VydGlmaWNhdGVcIixcclxuICAgICAgXCJGbGF0aWNvblwiLFxyXG4gICAgICBcIkhUVFBTIENlcnRpZmljYXRlXCIsXHJcbiAgICAgIDRcclxuICAgIClcclxuICApXHJcbik7XHJcblxyXG4vKipcclxuICogXCJFeHBsb3JlIHNlY3Rpb24gY2FyZCBkYXRhLlwiXHJcbiAqL1xyXG5jb25zdCBleHBsb3JlcyA9IG5ldyBBcnJheShcclxuICBuZXcgV2ViQml0KFxyXG4gICAgXCJOYXNhXCIsXHJcbiAgICAzLFxyXG4gICAgXCJFWFBMT1JFOiBOQVNBIFBhZ2VzXCIsXHJcbiAgICBcIkV4cGxvcmUgdGhlIE5BU0EgZG9tYWluLiBMZWFybiBhYm91dCB0aGUgdW5pdmVyc2UgdmlhIE5BU0EgbGlua3NcIixcclxuICAgIG5ldyBEYXRlKDIwMjIsIDEyLCAxOCksXHJcbiAgICBcImV4cGxvcmUvbmFzYS5odG1sXCIsXHJcbiAgICBcImxpYnJhcnkvaW1nL05BU0Eud2VicFwiLFxyXG4gICAgXCJOQVNBIEFydGVtaXMgTG9nb1wiLFxyXG4gICAgbmV3IEF0dHJpYnV0aW9uTGluayhcclxuICAgICAgXCJOQVNBXCIsXHJcbiAgICAgIFwiSW1hZ2Ugc291cmNlIHZpYSB0aGUgTmF0aW9uYWwgQWVyb25hdXRpY3MgYW5kIFNwYWNlIEFkbWluaXN0cmF0aW9uXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly93d3cubmFzYS5nb3YvYXVkaWVuY2UvZm9yc3R1ZGVudHMvNS04L2ZlYXR1cmVzL3N5bWJvbHMtb2YtbmFzYS5odG1sXCIsXHJcbiAgICAgIFwiTkFTQVwiLFxyXG4gICAgICBcIk5BU0EgUGFnZXNcIixcclxuICAgICAgM1xyXG4gICAgKVxyXG4gIClcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBNdWx0aWRpbWVuc2lvbmFsIGFycmF5LiBSb3dzIGFyZSB0aGUgZGlmZmVyZW50IHNlY3Rpb25zLiBDb2x1bW5zXHJcbiAqIGNvbnRhaW4gZWFjaCBhcnRpY2xlJ3MgZGF0YSBiZWxvbmdpbmcgaW4gdGhhdCBzZWN0aW9uLlxyXG4gKi9cclxuY29uc3QgV0VCQklUREFUQSA9IFthcmJpdHJhcnlBcnRpY2xlcywgZ3VpZGVTaG9ydHMsIGV4cGxvcmVzXTtcclxuZXhwb3J0IGRlZmF1bHQgV0VCQklUREFUQTtcclxuIiwiXCJzdHJpY3QgbW9kZVwiO1xyXG4vLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5jb25zdCBwb3J0RGVmaW5pdGlvbnMgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPihbXHJcbiAgWzIwLCBcIkZUUC1kYXRhXCJdLFxyXG4gIFsyMSwgXCJGVFBcIl0sXHJcbiAgWzIyLCBcIlNlY3VyZSBTU0ggIC9UQ1BcIl0sXHJcbiAgWzIzLCBcIlRlbG5ldCAodW5zZWN1cmUpXCJdLFxyXG4gIFsyNSwgXCJTTVRQIC0gNDY1IGZvciBlbmNyeXB0ZWQuXCJdLFxyXG4gIFszNywgXCJ0aW1lc2VydmVyIC9UQ1AvVURQXCJdLFxyXG4gIFs0OSwgXCJUQUNBQ1MrXCJdLFxyXG4gIFs1MywgXCJETlMgIC9VRFAvVENQXCJdLFxyXG4gIFs2NywgXCJESENQXCJdLFxyXG4gIFs2OCwgXCJESENQXCJdLFxyXG4gIFs4MCwgXCJIVFRQICAvVENQXCJdLFxyXG4gIFs4OCwgXCJLZXJiZXJvcy1zZWMgIC9UQ1AvVURQXCJdLFxyXG4gIFsxMTAsIFwiUE9QIC0gOTk1IGZvciBlbmNyeXB0ZWQuXCJdLFxyXG4gIFsxMzUsIFwiUlBDXCJdLFxyXG4gIFsxMzcsIFwiTkVUQklPU1wiXSxcclxuICBbMTM4LCBcIk5FVEJJT1NcIl0sXHJcbiAgWzEzOSwgXCJORVRCSU9TXCJdLFxyXG4gIFsxNDMsIFwiSU1BUCAtIDk5MyBmb3IgZW5jcnlwdGVkXCJdLFxyXG4gIFsxNjEsIFwiU05NUCAgTWFuYWdlclwiXSxcclxuICBbMTYyLCBcIlNOTVAgIEFnZW50XCJdLFxyXG4gIFszODksIFwiTERBUCAtIDYzNiBmb3Igc2VjdXJlXCJdLFxyXG4gIFs0NDMsIFwiSFRUUFMgIC9UQ1BcIl0sXHJcbiAgWzQ0NSwgXCJTTUIgIC9UQ1BcIl0sXHJcbiAgWzQ2NSwgXCJTTVRQIGJ5IFRMU1wiXSxcclxuICBbNTE0LCBcIlNZU0xPRyAgL1VEUFwiXSxcclxuICBbNTg3LCBcIlNNVFBTIFNUQVJUVExTXCJdLFxyXG4gIFs2MzYsIFwiTERBUCBTU0xcIl0sXHJcbiAgWzk5MCwgXCJGVFBTXCJdLFxyXG4gIFs5OTMsIFwiSU1BUCBUTFNcIl0sXHJcbiAgWzk5NSwgXCJQT1AgVExTXCJdLFxyXG4gIFsxODEyLCBcIlJBRElVUyAgL1RDUC9VRFBcIl0sXHJcbiAgWzE4MTMsIFwiUkFESVVTICAvVENQL1VEUFwiXSxcclxuICAvLyBbMzMwOSwgXCJTUUwgIC9UQ1AvVURQXCJdLFxyXG4gIFszMjY5LCBcIk1pY3Jvc29mdCBHbG9iYWwgQ2F0YWxvZ1wiXSxcclxuICBbMzM4OSwgXCJSRFBcIl0sXHJcbl0pO1xyXG5leHBvcnQgZGVmYXVsdCBwb3J0RGVmaW5pdGlvbnM7XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBSd2JMaW5rIGZyb20gXCIuL3J3YkxpbmtcIjtcclxuXHJcbi8qKlxyXG4gKiBVc2VkIGZvciBpbWFnZSBBdHRyaWJ1dGlvblxyXG4gKi9cclxuY2xhc3MgQXR0cmlidXRpb25MaW5rIGV4dGVuZHMgUndiTGluayB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIC8qKk5hbWUgb2YgdGhlIG93bmVyICovXHJcbiAgcHVibGljIGF0dHJpYnV0ZWRPd25lcjogc3RyaW5nO1xyXG4gIC8qKldlYkJpdHMgYXJ0aWNsZSBkYXRhIElEICovXHJcbiAgcHVibGljIGFydGljbGVJZDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKkxpbmsgdGl0bGUgKi9cclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICAvKipMaW5rIGlubmVyIHRleHQgKi9cclxuICAgIGlubmVyVGV4dDogc3RyaW5nLFxyXG4gICAgLyoqIGxpbmsgaHJlZiAqL1xyXG4gICAgaFJlZmVyZW5jZTogc3RyaW5nLFxyXG4gICAgLyoqTmFtZSBvZiB0aGUgb3duZXIgKi9cclxuICAgIGF0dHJpYnV0ZWRPd25lcjogc3RyaW5nLFxyXG4gICAgLyoqV2ViQml0cyBwYWdlICovXHJcbiAgICBwYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgLyoqV2ViQml0cyBhcnRpY2xlIGRhdGEgSUQgKi9cclxuICAgIGFydGljbGVJZDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcih0aXRsZSwgaW5uZXJUZXh0LCBwYWdlTmFtZSwgaFJlZmVyZW5jZSk7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZWRPd25lciA9IGF0dHJpYnV0ZWRPd25lcjtcclxuICAgIHRoaXMuYXJ0aWNsZUlkID0gYXJ0aWNsZUlkO1xyXG4gICAgQXR0cmlidXRpb25MaW5rLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbkxpbms7XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNSBSb2JlcnQgQS4gSG93ZWxsXHJcbmltcG9ydCBSd2JFcnJvciBmcm9tIFwiLi9yd2JFcnJvckJ1c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHNTbGlkZVNob3cge1xyXG4gIHB1YmxpYyBzc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHVibGljIGFycm93c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHVibGljIHByZXZCdG46IEhUTUxFbGVtZW50O1xyXG4gIHB1YmxpYyBuZXh0QnRuOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNhcmRzOiBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuICBwcml2YXRlIGNhcmRTaG93UXVhbnQ6IG51bWJlcjtcclxuICBwcml2YXRlIGNhcmRJbmR4U3RhcnQ6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBjYXJkQ291bnRlcjogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIGNhcmRzSW5keEVuZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgdHVybjogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIG1heFR1cm5Db3VudDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2xpZGVTaG93Q29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNsaWRlc2hvd1wiKSBhcyBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIG51bWJlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgd2luZG93U2l6ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYXJkczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4sIHF1YW50aXR5U2hvdzogbnVtYmVyLCB3aW5kb3dTaXplOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2FyZHMgPSBjYXJkcztcclxuICAgIHRoaXMuY2FyZFNob3dRdWFudCA9IHF1YW50aXR5U2hvdztcclxuICAgIHRoaXMuY2FyZHNJbmR4RW5kID0gdGhpcy5jYXJkU2hvd1F1YW50IC0gMTtcclxuICAgIHRoaXMubWF4VHVybkNvdW50ID0gdGhpcy5jYXJkcy5sZW5ndGggLSB0aGlzLmNhcmRTaG93UXVhbnQ7XHJcbiAgICB0aGlzLndpbmRvd1NpemUgPSB3aW5kb3dTaXplO1xyXG5cclxuICAgIHRoaXMuaGlkZU92ZXJmbG93RWxlbWVudHMoKTtcclxuICAgIHRoaXMub25Jbml0U2V0dXBDYXJkUG9zaXRpb24oKTtcclxuICAgIHRoaXMuc3NDb250YWluZXIgPSB0aGlzLm5ld0NvbnRhaW5lck1hcmt1cCgpO1xyXG4gICAgdGhpcy5hcnJvd3NDb250YWluZXIgPSB0aGlzLm5ld0Fycm93c01hcmt1cCgpO1xyXG4gICAgdGhpcy5uZXdOdW1iZXJFbGVtZW50KCk7XHJcbiAgICB0aGlzLmFkZEJ0bkV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnNob3dIaWRlU2xpZGVTaG93QnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHRTbGlkZSgpIHtcclxuICAgIGlmICh0aGlzLnR1cm4gPT0gdGhpcy5tYXhUdXJuQ291bnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIkxBUkdFXCIpIHtcclxuICAgICAgaWYgKHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vSGlkZSB0aGUgZmlyc3QgZWxlbWVudCBpbiBzbGlkZXNob3dcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuXHJcbiAgICAgIC8vTW92ZSBtaWRkbGUgZWxlbWVudCB0byBsZWZ0XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0ICsgMV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zNjVweClcIjtcclxuXHJcbiAgICAgIC8vTW92ZSByaWdodCB0byB0aGUgbWlkZGxlXHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0ICsgMl0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDBweClcIjtcclxuXHJcbiAgICAgIC8vRGlzcGxheSB0aGUgbmV4dCBlbGVtZW50IGZvciBzbGlkZXNob3dcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInotaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgICAvL01vdmUgaW4gbmV3IGVsZW1lbnRcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgzNjVweClcIjtcclxuICAgICAgaWYgKHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0uc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiTUVESVVNXCIpIHtcclxuICAgICAgaWYgKHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vSGlkZSB0aGUgZmlyc3QgZWxlbWVudCBpbiBzbGlkZXNob3dcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuXHJcbiAgICAgIC8vTW92ZSB0aGUgcmlnaHQgZWxlbWVudCB0byBsZWZ0XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0ICsgMV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0xODIuNXB4KVwiO1xyXG5cclxuICAgICAgLy9EaXNwbGF5IHRoZSBuZXh0IGVsZW1lbnQgZm9yIHNsaWRlc2hvd1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiei1pbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcclxuXHJcbiAgICAgIC8vTW92ZSBpbiBuZXcgZWxlbWVudFxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDE4Mi41cHgpXCI7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIlNNQUxMXCIpIHtcclxuICAgICAgaWYgKHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vSGlkZSB0aGUgZmlyc3QgZWxlbWVudCBpbiBzbGlkZXNob3dcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuXHJcbiAgICAgIC8vTW92ZSBlbGVtZW50IHRvIGxlZnRcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMTgyLjVweClcIjtcclxuXHJcbiAgICAgIC8vTW92ZSBlbGVtZW50IHRvIGNlbnRlclxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwcHgpXCI7XHJcblxyXG4gICAgICAvL0Rpc3BsYXkgdGhlIG5leHQgZWxlbWVudCBmb3Igc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ6LWluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDE4Mi41cHgpXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vSW5jcmVtZW50IGluZGV4IGNvdW50ZXJcclxuICAgIHRoaXMuY2FyZEluZHhTdGFydCsrO1xyXG4gICAgdGhpcy5jYXJkc0luZHhFbmQrKztcclxuICAgIHRoaXMudHVybisrO1xyXG4gICAgdGhpcy5jYXJkQ291bnRlcisrO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXZTbGlkZSgpIHtcclxuICAgIGlmICh0aGlzLnR1cm4gPT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiTEFSR0VcIikge1xyXG4gICAgICAvL0hpZGUgdGhlIGxhc3QgZWxlbWVudCBpbiBzbGlkZXNob3dcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZF0uc3R5bGUub3BhY2l0eSA9IFwiMCVcIjtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZF0uc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICBpZiAodGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL01vdmUgbWlkZGxlIGVsZW1lbnQgdG8gdG8gdGhlIHJpZ2h0XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0ICsgMV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDM2NXB4KVwiO1xyXG5cclxuICAgICAgLy9Nb3ZlIGxlZnQgZWxlbWVudCB0byB0aGUgcmlnaHRcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwcHgpXCI7XHJcblxyXG4gICAgICAvL0Rpc3BsYXkgdGhlIG5leHQgZWxlbWVudCBmb3Igc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcclxuXHJcbiAgICAgIC8vTW92ZSBpbiBuZXcgZWxlbWVudFxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMzY1cHgpXCI7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMl0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiTUVESVVNXCIpIHtcclxuICAgICAgLy9IaWRlIHRoZSBsYXN0IGVsZW1lbnQgaW4gc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgaWYgKHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy9Nb3ZlIGxlZnQgZWxlbWVudCB0byB0aGUgcmlnaHRcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxODIuNXB4KVwiO1xyXG5cclxuICAgICAgLy9EaXNwbGF5IHRoZSBuZXh0IGVsZW1lbnQgZm9yIHNsaWRlc2hvd1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgICAvL01vdmUgaW4gbmV3IGVsZW1lbnRcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTE4Mi41cHgpXCI7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMl0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiU01BTExcIikge1xyXG4gICAgICAvL0hpZGUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kXS5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vTW92ZSBlbGVtZW50IHRvIHJpZ2h0XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTgyLjVweClcIjtcclxuXHJcbiAgICAgIC8vTW92ZSBlbGVtZW50IHRvIGNlbnRlclxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwcHgpXCI7XHJcblxyXG4gICAgICAvL0Rpc3BsYXkgdGhlIG5leHQgZWxlbWVudCBmb3Igc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9JbmNyZW1lbnQgaW5kZXggY291bnRlclxyXG4gICAgdGhpcy5jYXJkSW5keFN0YXJ0LS07XHJcbiAgICB0aGlzLmNhcmRzSW5keEVuZC0tO1xyXG4gICAgdGhpcy50dXJuLS07XHJcbiAgICB0aGlzLmNhcmRDb3VudGVyLS07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQnRuRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAvL0V2ZW50IGxpc3RlbmVycyBmb3IgdGhlIG5leHQgYW5kIHByZXZpb3VzIGJ1dHRvbnNcclxuICAgIHRoaXMubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcclxuICAgICAgdGhpcy5zaG93SGlkZVNsaWRlU2hvd0J1dHRvbnMoKTtcclxuICAgICAgdGhpcy5udW1iZXJBcnJvd1RleHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnByZXZTbGlkZSgpO1xyXG4gICAgICB0aGlzLnNob3dIaWRlU2xpZGVTaG93QnV0dG9ucygpO1xyXG4gICAgICB0aGlzLm51bWJlckFycm93VGV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHNob3dIaWRlU2xpZGVTaG93QnV0dG9ucygpIHtcclxuICAgIGlmICh0aGlzLmNhcmRJbmR4U3RhcnQgPT0gMCkge1xyXG4gICAgICB0aGlzLnByZXZCdG4uc3R5bGUub3BhY2l0eSA9IFwiMCVcIjtcclxuICAgICAgdGhpcy5wcmV2QnRuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhcmRzSW5keEVuZCA9PSB0aGlzLmNhcmRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5uZXh0QnRuLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbiAgICAgIHRoaXMubmV4dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXZCdG4uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgdGhpcy5uZXh0QnRuLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgIHRoaXMucHJldkJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgIHRoaXMubmV4dEJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBudW1iZXJBcnJvd1RleHQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiU01BTExcIikge1xyXG4gICAgICB0aGlzLm51bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7dGhpcy5jYXJkQ291bnRlci50b1N0cmluZygpfSBvZiAke3RoaXMuY2FyZHMubGVuZ3RoLnRvU3RyaW5nKCl9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRWxlbWVudC5pbm5lclRleHQgPSBgWyR7dGhpcy5jYXJkQ291bnRlci50b1N0cmluZygpfS4uJHsoXHJcbiAgICAgICAgdGhpcy5jYXJkQ291bnRlciArXHJcbiAgICAgICAgdGhpcy5jYXJkU2hvd1F1YW50IC1cclxuICAgICAgICAxXHJcbiAgICAgICkudG9TdHJpbmcoKX1dIG9mICR7dGhpcy5jYXJkcy5sZW5ndGgudG9TdHJpbmcoKX1gO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBvblJlc2l6ZVNob3dTdGFydGluZ0VsZW1zKCkge1xyXG4gICAgLy9zY3JlZW4gaGFzIHJlZnJlc2hlZC4gY291bnRlciBpcyByZXNldCB0byBzdGFydC4gY2FyZCBlbGVtZW50cyBtYXkgYmVcclxuICAgIC8vaGlkZGVuIGZyb20gdGhlIGRpc3BsYXksIGRlcGVuZGluZyBvbiB3aGVuIHRoZSByZWZyZXNoIG9jY3VycmVkLCBzb1xyXG4gICAgLy9yZXNldCB0aGUgc3RhcnRpbmcgZWxlbWVudHMgdG8gdmlzaWJsZVxyXG4gICAgLy9TaG93IG92ZXJmbG93IGVsZW1lbnRzXHJcbiAgICBpZiAodGhpcy5jYXJkSW5keFN0YXJ0IDwgdGhpcy5jYXJkU2hvd1F1YW50KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuY2FyZHNJbmR4RW5kOyBpKyspIHtcclxuICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLnNldFByb3BlcnR5KFwib3BhY2l0eVwiLCBcIjFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1tpXS5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiU01BTExcIikge1xyXG4gICAgICAgICAgdGhpcy5jYXJkc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMHB4KVwiO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLndpbmRvd1NpemUgPT0gXCJMQVJHRVwiKSB7XHJcbiAgICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDBweClcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ6LWluZGV4XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlT3ZlcmZsb3dFbGVtZW50cygpIHtcclxuICAgIC8vSGlkZSBvdmVyZmxvdyBlbGVtZW50c1xyXG4gICAgaWYgKHRoaXMuY2FyZEluZHhTdGFydCA8IHRoaXMuY2FyZFNob3dRdWFudCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5jYXJkcy5sZW5ndGggLSAxOyBpID4gdGhpcy5jYXJkc0luZHhFbmQ7IGktLSkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1tpXS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlmICh0aGlzLndpbmRvd1NpemUgPT0gXCJTTUFMTFwiKSB7XHJcbiAgICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwcHgpXCI7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIk1FRElVTVwiKSB7XHJcbiAgICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxODIuNXB4KVwiO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDM2NXB4KVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcmRzWzBdLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuZXdDb250YWluZXJNYXJrdXAoKSB7XHJcbiAgICBjb25zdCBuZXdDb250YWluZXJTdHlsZXMgPSAoKSA9PiB7XHJcbiAgICAgIC8vQ29udGFpbmVyIHN0eWxlc1xyXG4gICAgICBzbGlkZVNob3dTbGlkZXMuY2xhc3NMaXN0LmFkZChcInNsaWRlc2NvbnRhaW5lclwiKTtcclxuICAgICAgc2xpZGVTaG93U2xpZGVzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgIHNsaWRlU2hvd1NsaWRlcy5zdHlsZS5oZWlnaHQgPSBcIjMyZW1cIjtcclxuICAgICAgc2xpZGVTaG93U2xpZGVzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgc2xpZGVTaG93U2xpZGVzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL0J1aWxkIHRoZSBtYXJrdXAgbmVlZGVkIGZvciB0aGUgc2xpZGVzaG93XHJcbiAgICAvL0FkZCBjYXJkcyB0byBjb250YWluZXJcclxuICAgIGxldCBzbGlkZVNob3dTbGlkZXMgPSB0aGlzLnNsaWRlU2hvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgIGZvciAobGV0IGNhcmQgb2YgdGhpcy5jYXJkcykge1xyXG4gICAgICBsZXQgdGVtcCA9IGNhcmQ7XHJcbiAgICAgIHNsaWRlU2hvd1NsaWRlcy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGVtcCk7XHJcbiAgICAgIG5ld0NvbnRhaW5lclN0eWxlcygpO1xyXG4gICAgfVxyXG4gICAgc2xpZGVTaG93U2xpZGVzLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy53aW5kb3dTaXplfWApO1xyXG4gICAgcmV0dXJuIHNsaWRlU2hvd1NsaWRlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV3QXJyb3dzTWFya3VwKCkge1xyXG4gICAgLy9BZGQgbGVmdCBhbmQgcmlnaHQgYnV0dG9uc1xyXG4gICAgbGV0IHNsaWRlc2hvd2J0bnMgPSB0aGlzLnNsaWRlU2hvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuXHJcbiAgICAvL0xlZnQgc2xpZGVzaG93IGJ0blxyXG4gICAgbGV0IHByZXZpb3Vzc2xpZGVzaG93YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByZXZpb3Vzc2xpZGVzaG93YnRuLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNob3dQcmV2XCIpO1xyXG4gICAgcHJldmlvdXNzbGlkZXNob3didG4uaW5uZXJUZXh0ID0gXCLina5cIjtcclxuICAgIHNsaWRlc2hvd2J0bnMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHByZXZpb3Vzc2xpZGVzaG93YnRuKTtcclxuXHJcbiAgICAvL1VwZGF0ZSBzbGlkZXNob3cgb2JqZWN0XHJcbiAgICB0aGlzLnByZXZCdG4gPSBwcmV2aW91c3NsaWRlc2hvd2J0bjtcclxuXHJcbiAgICAvL1JpZ2h0IHNsaWRlc2hvdyBidG5cclxuICAgIGxldCBuZXh0c2xpZGVzaG93YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG5leHRzbGlkZXNob3didG4uY2xhc3NMaXN0LmFkZChcInNsaWRlc2hvd05leHRcIik7XHJcbiAgICBuZXh0c2xpZGVzaG93YnRuLmlubmVyVGV4dCA9IFwi4p2vXCI7XHJcbiAgICBzbGlkZXNob3didG5zLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBuZXh0c2xpZGVzaG93YnRuKTtcclxuICAgIHNsaWRlc2hvd2J0bnMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cclxuICAgIC8vVXBkYXRlIHNsaWRlc2hvdyBvYmplY3RcclxuICAgIHRoaXMubmV4dEJ0biA9IG5leHRzbGlkZXNob3didG47XHJcblxyXG4gICAgcmV0dXJuIHNsaWRlc2hvd2J0bnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5ld051bWJlckVsZW1lbnQoKSB7XHJcbiAgICAvL051bWJlciBlbGVtZW50XHJcbiAgICB0aGlzLm51bWJlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIHRoaXMubnVtYmVyQXJyb3dUZXh0KCk7XHJcbiAgICB0aGlzLm5leHRCdG4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlYmVnaW5cIiwgdGhpcy5udW1iZXJFbGVtZW50KTtcclxuICAgIHRoaXMubnVtYmVyRWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcclxuICAgIHRoaXMubnVtYmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICB0aGlzLm51bWJlckVsZW1lbnQuc3R5bGUuYWxpZ25Db250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgIHRoaXMubnVtYmVyRWxlbWVudC5zdHlsZS5tYXJnaW5JbmxpbmUgPSBcIjEuNXJlbVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkluaXRTZXR1cENhcmRQb3NpdGlvbigpIHtcclxuICAgIHN3aXRjaCAodGhpcy53aW5kb3dTaXplKSB7XHJcbiAgICAgIGNhc2UgXCJTTUFMTFwiOlxyXG4gICAgICAgIC8vc21hbGwgd2luZG93IHNpemUgbG9naWNcclxuICAgICAgICB0aGlzLmNhcmRzWzFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxODIuNXB4KVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiTUVESVVNXCI6XHJcbiAgICAgICAgLy9tZWRpdW0gd2luZG93IHNpemUgbG9naWNcclxuICAgICAgICB0aGlzLmNhcmRzWzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMTgyLjVweClcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzFdLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDE4Mi41cHgpXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1syXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMl0uc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMl0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzWzJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiTEFSR0VcIjpcclxuICAgICAgICAvL2xhcmdlIHdpbmRvdyBzaXplIGxvZ2ljXHJcbiAgICAgICAgdGhpcy5jYXJkc1swXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTM2NXB4KVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMV0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1syXS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzJdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgzNjVweClcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzNdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1szXS5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1szXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbM10uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNjcmVlbiBzaXplIHByb3BlcnR5IG5vdCBzZXQgb24gc2xpZGVzaG93LlwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbi8qKiBUaGlzIG9iamVjdCBjcmVhdGVzIGFuIGFycmF5IG9mIGRpdiBlbGVtZW50cyBmcm9tIHBvcnQgbnVtYmVyIGluZm9ybWF0aW9uKi9cclxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZENhcmRFbGVtcyB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygd2lkZ2V0IG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyB3aWRnZXRjb3VudDogbnVtYmVyID0gMDtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIHdpdGhpbiB0aGUgd2lkZ2V0IGluc3RhbnRpYXRlZCBbZmxhc2hjYXJkc10gKi9cclxuICBwdWJsaWMgc3RhdGljIHRvdGFsZmxhc2hjYXJkczogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbV9mbGFzaGNhcmRzQXJyOiBIVE1MTElFbGVtZW50W10gPSBbXTtcclxuICBwdWJsaWMgZmxhc2hjYXJkc2NvdW50OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgbV9wb3J0SW5mb01hcDogTWFwPGFueSwgc3RyaW5nPjtcclxuXHJcbiAgY29uc3RydWN0b3IocG9ydG51bWJlcnNNYXA6IE1hcDxhbnksIHN0cmluZz4pIHtcclxuICAgIHRoaXMubV9wb3J0SW5mb01hcCA9IHBvcnRudW1iZXJzTWFwO1xyXG4gICAgY29uc3QgbWFwSXRlciA9IHRoaXMubV9wb3J0SW5mb01hcC5rZXlzKCk7XHJcbiAgICBGbGFzaGNhcmRDYXJkRWxlbXMud2lkZ2V0Y291bnQrKztcclxuXHJcbiAgICB0aGlzLm1fcG9ydEluZm9NYXAuZm9yRWFjaChwb3J0ID0+IHtcclxuICAgICAgLy8gQ3JlYXRlIGxpc3QgZWxlbWVudFxyXG4gICAgICBsZXQgZmxhc2hjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAvL1RPRE86IGxldCBmbGFzaGNhcmQgPSBuZXcgR3Jvd2luZ0NhcmRFbGVtZW50KCk7XHJcbiAgICAgIC8vVW5hYmxlIHRvIGluc3RhbnRpYXRlIGxpIGVsZW1lbnQgYXMgZ3Jvd2luZyBjYXJkIGR1ZSB0byBET00gdW5hdmFsYWJsZSAtLT4gcmVxdWlyZXMgc2hhZG93RE9NIG1hbmlwdWxhdGVcclxuXHJcbiAgICAgIC8vIFBvcHVsYXRlIGVsZW1lbnQgZm9yIHBhZ2UgdXNlXHJcbiAgICAgIGNvbnN0IGlubmVyID0gZmxhc2hjYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICBjb25zdCBmbGlwZnJvbnQgPSBpbm5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgY29uc3QgZmxpcGJhY2sgPSBpbm5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgbGV0IGdhbWVDYXJkU3BhbiA9IGZsaXBmcm9udC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSk7XHJcbiAgICAgIGxldCBnYW1lQ2FyZEJhY2tTcGFuID0gZmxpcGJhY2suYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIikpO1xyXG4gICAgICBmbGFzaGNhcmQuY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZFwiLCBcImdhbWVDYXJkXCIpO1xyXG4gICAgICBpbm5lci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJcIiwgXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgZmxpcGZyb250LmNsYXNzTGlzdC5hZGQoXCJjYXJkRnJvbnRcIik7XHJcbiAgICAgIGZsaXBiYWNrLmNsYXNzTGlzdC5hZGQoXCJjYXJkQmFja1wiLCBcInZlcnRpY2FsXCIpO1xyXG4gICAgICBnYW1lQ2FyZFNwYW4uaW5uZXJUZXh0ID0gYFBvcnQjICR7bWFwSXRlci5uZXh0KCkudmFsdWV9YDtcclxuICAgICAgZ2FtZUNhcmRCYWNrU3Bhbi5pbm5lclRleHQgPSBgJHtwb3J0fWA7XHJcblxyXG4gICAgICB0aGlzLmZsYXNoY2FyZHNjb3VudCsrO1xyXG4gICAgICBGbGFzaGNhcmRDYXJkRWxlbXMudG90YWxmbGFzaGNhcmRzKys7XHJcblxyXG4gICAgICAvLyBBZGQgZGl2IHRvIGZsYXNoY2FyZCBpbnN0YW5jZVxyXG4gICAgICB0aGlzLm1fZmxhc2hjYXJkc0Fyci5wdXNoKGZsYXNoY2FyZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IFdlYkJpdCBmcm9tIFwiLi93ZWJCaXRcIjtcclxuaW1wb3J0IFJXQkNhcmQgZnJvbSBcIi4vcndiQ2FyZFwiO1xyXG5pbXBvcnQgUndiRXJyb3IsIHsgUndiUmVmZXJlbmNlRXJyb3IgfSBmcm9tIFwiLi9yd2JFcnJvckJ1c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tV2ViQml0cyB7XHJcbiAgcHVibGljIGNhcmRzU2VjdGlvbjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHVibGljIGNhcmRzRGF0YTogSFRNTERpdkVsZW1lbnRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FyZHNTZWN0aW9uOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCwgY2FyZHNEYXRhOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgY2FyZHNTZWN0aW9uID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYXJkc1NlY3Rpb24gPSBjYXJkc1NlY3Rpb247XHJcbiAgICB0aGlzLmNhcmRzRGF0YSA9IGNhcmRzRGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGUgc2VjdGlvbnMgdG8gYXBwZW5kIHRvIG1haW5cclxuICAgKlxyXG4gICAqICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhcmRzXCI+XHJcbiAgICogICAgICAgICAgICA8aDI+QXJiaXRyYXJ5IEFydGljbGVzOjwvaDI+XHJcbiAgICogICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9jb2x1bW5zXCI+XHJcbiAgICogICAgICAgICAgICA8L2Rpdj5cclxuICAgKiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNlY3Rpb25UaXRsZSAtIGhlYWRpbmcgc2VjdGlvbidzIHRpdGxlLlxyXG4gICAqIEBwYXJhbSBzZWN0aW9uSGVhZGluZ0lkIC0gc2VjdGlvbiBoZWFkaW5nJ3MgaWQgYXR0cmlidXRlLlxyXG4gICAqIEBwYXJhbSBjb250YWluZXJUeXBlIC0gc2xpZGVzaG93LCBhY2NvcmRpb24sIG9yIGRlZmF1bHQuXHJcbiAgICogQHJldHVybnMgSFRNTERpdkVsZW1lbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGJ1aWxkQ2FyZENvbnRhaW5pbmdTZWN0aW9uKFxyXG4gICAgc2VjdGlvblRpdGxlOiBzdHJpbmcsXHJcbiAgICBzZWN0aW9uSGVhZGluZ0lkOiBzdHJpbmcsXHJcbiAgICBjb250YWluZXJUeXBlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBsZXQgcGFnZU1haW46IEhUTUxFbGVtZW50O1xyXG4gICAgcGFnZU1haW4gPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIk1haW5SV0JcIiwgXCJtYWluXCIsIHRydWUsIHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHBhZ2VNYWluID09IG51bGwgfHwgcGFnZU1haW4ubm9kZU5hbWUgIT09IFwiTUFJTlwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbGV0IHNlY3Rpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkaW5nKTtcclxuICAgIGNhcmRTZWN0aW9uLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxuICAgIHBhZ2VNYWluLmFwcGVuZChjYXJkU2VjdGlvbik7XHJcblxyXG4gICAgLy8gQWRkIGRhdGEgYXR0cmlidXRlcyBhbmQgcHJvcGVydHkgdmFsdWVzXHJcbiAgICBzd2l0Y2ggKGNvbnRhaW5lclR5cGUpIHtcclxuICAgICAgY2FzZSBcInNsaWRlc2hvd1wiOlxyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkX2NvbHVtbnNcIiwgXCJjYXJkc2xpZGVzaG93XCIsIFwiZ3JpZFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImFjY29yZGlvblwiOlxyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkX2NvbHVtbnNcIiwgXCJjYXJkYWNjb3JkaW9uXCIsIFwiZ3JpZFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZF9jb2x1bW5zXCIsIFwiZ3JpZFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiKTtcclxuICAgIHNlY3Rpb25IZWFkaW5nLmlubmVyVGV4dCA9IGAke3NlY3Rpb25UaXRsZX1gO1xyXG4gICAgc2VjdGlvbkhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgc2VjdGlvbkhlYWRpbmdJZCk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRzQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoaXMgZnVuY3Rpb24gbWFwcyBjYXJkIGRhdGEgdG8gSFRNTCBlbGVtZW50c1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGNhcmRzRGF0YVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBidWlsZFJ3YkNhcmRzKGNhcmRzRGF0YTogV2ViQml0W10pIHtcclxuICAgIGlmIChjYXJkc0RhdGEgPT0gbnVsbCkge1xyXG4gICAgICBuZXcgUndiUmVmZXJlbmNlRXJyb3IoXCJlbXB0eUFycmF5XCIsIFwiY2FyZHMgZGF0YSBhcnJheSBtYXkgYmUgbnVsbFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gSXRlcmF0ZSBlYWNoIGNhcmQgaW4gdGhlIGFycmF5LiBCdWlsZCB0aGUgY2FyZCBlbGVtZW50cyBhbmQgYWRkIHRoZSBkYXRhXHJcbiAgICByZXR1cm4gY2FyZHNEYXRhLm1hcCgoYXJ0aWNsZTogV2ViQml0KSA9PiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG5ldyBSV0JDYXJkKGFydGljbGUpKS5jYXJkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJ1aWxkUndiSW50cm9kdWN0aW9uKCkge1xyXG4gICAgbGV0IGludHJvZHVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbGV0IFRpdGxlID0gaW50cm9kdWN0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSk7XHJcbiAgICBsZXQgaDIgPSBpbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpKTtcclxuICAgIGxldCBwYXJhMSA9IGludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSk7XHJcbiAgICBsZXQgcGFyYTIgPSBpbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikpO1xyXG4gICAgVGl0bGUuY2xhc3NMaXN0LmFkZChcIlRpdGxlXCIpO1xyXG4gICAgVGl0bGUuaW5uZXJUZXh0ID0gXCJIb21lIHwgQXJiaXRyYXJ5IFdlYiBCaXRzXCI7XHJcbiAgICBoMi5pbm5lclRleHQgPSBcIk5ldyB0byB0aGUgV2ViP1wiO1xyXG4gICAgcGFyYTEuaW5uZXJUZXh0ID1cclxuICAgICAgXCJJZiB5b3UgYXJlIG5ldyB0byB3ZWIgZGV2ZWxvcG1lbnQsIHRoZXJlIGFyZSBpbm51bWVyb3VzIGVudW1lcmF0aW9ucyBvZiBzdHVmZiBhbmQgdGhpbmdzIHRoZSBXb3JsZCBXaWRlIFdlYiBvZmZlcnMgdGhhdCB5b3UgZG9uJ3Qga25vdy5cIjtcclxuICAgIHBhcmEyLmlubmVyVGV4dCA9IFwiWW91IG1heSB3YW50IHRvIHN0YXJ0IGJ5IGNsYWltaW5nIGEgc3Rha2UgdG8gYSBkb21haW4gbmFtZS5cIjtcclxuXHJcbiAgICByZXR1cm4gaW50cm9kdWN0aW9uO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5pbXBvcnQgQXR0cmlidXRpb25MaW5rIGZyb20gXCIuL2F0dHJpYnV0aW9uTGlua1wiO1xyXG5pbXBvcnQgV2ViQml0IGZyb20gXCIuL3dlYkJpdFwiO1xyXG5pbXBvcnQgeyBSd2JDYXJkRWxlbWVudHMgfSBmcm9tIFwiLi93aWRnZXRNYXJrdXBFbGVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUldCQ2FyZCB7XHJcbiAgLyoqXHJcbiAgICogQ2FyZCBlbGVtZW50cyB0byBkaXNwbGF5IGFuIGljb24gcGljdHVyZSBhbmQgY2FyZCBib2R5LiBBbiBpbWFnZSwgdGhlIGltYWdlIHRvcCwgdGhlIGNhcmQgYm9keS5cclxuICAgKi9cclxuICBwdWJsaWMgY2FyZDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByd2JDYXJkRWxlbWVudHM6IFJ3YkNhcmRFbGVtZW50cztcclxuICBwcml2YXRlIGFydGljbGU6IFdlYkJpdDtcclxuXHJcbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogV2ViQml0KSB7XHJcbiAgICB0aGlzLmFydGljbGUgPSBhcnRpY2xlO1xyXG4gICAgdGhpcy5jYXJkID0gdGhpcy5idWlsZFJ3YkNhcmRNYXJrdXAoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBNYXAgV2ViQml0IGRhdGEgdG8gYSBjYXJkIGVhY2hcclxuICAgKlxyXG4gICAqICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICogICAgICAgICAgIDxkaXY+XHJcbiAgICogICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIGFydGljbGU9XCJcIj5cclxuICAgKiAgICAgICAgICAgPC9kaXY+XHJcbiAgICogICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkQm9keVwiPlxyXG4gICAqICAgICAgICAgICAgICAgPGgzPjwvaDM+XHJcbiAgICogICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICogICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PC9hPlxyXG4gICAqICAgICAgICAgICA8L2Rpdj5cclxuICAgKiAgICAgICA8L2Rpdj5cclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkUndiQ2FyZE1hcmt1cCgpIHtcclxuICAgIGxldCB3ZWJCaXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMucndiQ2FyZEVsZW1lbnRzID0ge1xyXG4gICAgICBjYXJkSW1nOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxyXG4gICAgICBjYXJkSW1nVG9wOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICBjYXJkQm9keTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgIH07XHJcbiAgICBsZXQgY2FyZEJvZHlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgbGV0IGNhcmRCb2R5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IGNhcmRCb2R5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEltZ1RvcC5hcHBlbmRDaGlsZCh0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nKTtcclxuICAgIHRoaXMucndiQ2FyZEVsZW1lbnRzLmNhcmRCb2R5LmFwcGVuZENoaWxkKGNhcmRCb2R5SGVhZGluZyk7XHJcbiAgICB0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkQm9keS5hcHBlbmRDaGlsZChjYXJkQm9keVBhcmEpO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY2FyZEJvZHlMaW5rKTtcclxuXHJcbiAgICAvLyBBZGQgY2FyZCBkYXRhIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnR5IHZhbHVlc1xyXG4gICAgd2ViQml0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgIHdlYkJpdENhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGhpcy5hcnRpY2xlLmlkfWApO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkuY2xhc3NMaXN0LmFkZChcImNhcmRCb2R5XCIpO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5hcnRpY2xlLmNhcmRJbWFnZSk7XHJcbiAgICB0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCB0aGlzLmFydGljbGUuY2FyZEltYWdlQWx0KTtcclxuICAgIHRoaXMucndiQ2FyZEVsZW1lbnRzLmNhcmRJbWcuc2V0QXR0cmlidXRlKFwiQXJ0aWNsZVwiLCB0aGlzLmFydGljbGUuYXJ0aWNsZU51bWJlci50b1N0cmluZygpKTtcclxuICAgIGNhcmRCb2R5TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMuYXJ0aWNsZS5hcnRpY2xlTGluayk7XHJcbiAgICBjYXJkQm9keUhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5hcnRpY2xlLm5hbWU7XHJcbiAgICBjYXJkQm9keVBhcmEudGV4dENvbnRlbnQgPSB0aGlzLmFydGljbGUuZGVzY3JpcHRpb247XHJcbiAgICBjYXJkQm9keUxpbmsudGV4dENvbnRlbnQgPSBcIkdvIHRvIFBhZ2VcIjtcclxuXHJcbiAgICAvLyBJbWFnZSBhdHRyaWJ1dGlvbiBtYXkgYmUgbmVlZGVkIGZvciB0aGUgaW1hZ2UgdXNlZFxyXG4gICAgLy8gQXR0cmlidXRpb24gZGF0YSBpcyBpbXBvcnRlZCBhcyAnYXR0cmxpbmtzJyBzaWduYXR1cmUgcGFyYW1ldGVyXHJcbiAgICBpZiAodGhpcy5hcnRpY2xlLmxpbmtBdHRyaWJ1dGlvbikge1xyXG4gICAgICB0aGlzLmJ1aWxkUndiQ2FyZEF0dHJpYnV0aW9uUGFuZWwodGhpcy5yd2JDYXJkRWxlbWVudHMsIHRoaXMuYXJ0aWNsZS5saW5rQXR0cmlidXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBjYXJkIGlzIFdlYkJpdFxyXG4gICAgLy8gQWRkIHRoZSBtYXJrdXAgdG8gdGhlIGNvbnRhaW5pbmcgZWxlbWVudFxyXG4gICAgd2ViQml0Q2FyZC5hcHBlbmRDaGlsZCh0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nVG9wKTtcclxuICAgIHdlYkJpdENhcmQuYXBwZW5kQ2hpbGQodGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkpO1xyXG5cclxuICAgIHJldHVybiB3ZWJCaXRDYXJkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGltYWdlIGF0dHJpYnV0aW9uLCB0aGUgaW1hZ2UgaWQgYW5kIGFydGljbGUgaWQgd2lsbCBtYXRjaCxcclxuICAgKiBvdGhlcndpc2UgdGhlIGRhdGEgaXNuJ3QgZW50ZXJlZCwgY2F1c2luZyBhIG1pc3NcclxuICAgKlxyXG4gICAqICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmRcIj48IS0tY2FyZCBpbWFnZSBwYW5lbC0tPlxyXG4gICAqICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxyXG4gICAqICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZEZyb250XCI+XHJcbiAgICogICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIGFydGljbGU9XCJcIj5cclxuICAgKiAgICAgICAgICAgPC9kaXY+XHJcbiAgICogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCYWNrXCI+XHJcbiAgICogICAgICAgICAgICAgICAgICAgIDxoMz48L2gzPlxyXG4gICAqICAgICAgICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICogICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgYXJ0aWNsZT1cIlwiIGNsYXNzPVwiaW1nU21hbGwgaW1nUFRSXCI+XHJcbiAgICogICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICogICAgICAgICAgIDwvZGl2PlxyXG4gICAqICAgICAgIDwvZGl2PjwhLS1lbmQgY2FyZCBpbWFnZSBwYW5lbC0tPlxyXG4gICAqIEBwYXJhbSByd2JDYXJkRWxlbWVudHMgQ2FyZCBlbGVtZW50cyB0byBkaXNwbGF5IGFuIGljb24gcGljdHVyZSBhbmQgY2FyZCBib2R5LiBBbiBpbWFnZSwgdGhlIGltYWdlIHRvcCwgdGhlIGNhcmQgYm9keS5cclxuICAgKiBAcGFyYW0gbGluayBBdHRyaWJ1dGlvbiBsaW5rXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBidWlsZFJ3YkNhcmRBdHRyaWJ1dGlvblBhbmVsKHJ3YkNhcmRFbGVtZW50czogUndiQ2FyZEVsZW1lbnRzLCBsaW5rOiBBdHRyaWJ1dGlvbkxpbmspIHtcclxuICAgIGlmIChyd2JDYXJkRWxlbWVudHMuY2FyZEltZy5nZXRBdHRyaWJ1dGUoXCJBcnRpY2xlXCIpID09PSBsaW5rLmFydGljbGVJZC50b1N0cmluZygpKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBpbWFnZSBiYWNrIHBhbmVsIGVsZW1lbnRzIGFuZCBhZGQgdGhlIGRhdGFcclxuICAgICAgLy8gUmVkZWZpbmUgY2FyZCBpbWFnZSBwYW5lbCBhcyBhIGZsaXAgcGFuZWxcclxuICAgICAgY29uc3QgQ0FSRElOTkVSID0gcndiQ2FyZEVsZW1lbnRzLmNhcmRJbWdUb3AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgIGNvbnN0IENBUkRGUk9OVCA9IENBUkRJTk5FUi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgQ0FSREZST05ULmFwcGVuZENoaWxkKHJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nKTsgLy8gbW92ZSBpbWFnZSB3aXRoaW4gY2FyZCBmcm9udCBkaXZpc29yXHJcbiAgICAgIGxldCBzbWFsbEltZyA9IDxIVE1MSW1hZ2VFbGVtZW50PnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nLmNsb25lTm9kZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IENBUkRCQUNLID0gQ0FSRElOTkVSLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICBjb25zdCBCQUNLSEVBRElORyA9IENBUkRCQUNLLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKSk7XHJcbiAgICAgIENBUkRCQUNLLmFwcGVuZENoaWxkKHNtYWxsSW1nKTtcclxuICAgICAgY29uc3QgQkFDS1BBUkEgPSBDQVJEQkFDSy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSk7XHJcbiAgICAgIGNvbnN0IEFUVFJJQlVURUxJTksgPSByd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpOyAvL2FwcGVuZCB0byBmcm9udCBwYW5lbFxyXG5cclxuICAgICAgLy8gQWRkIGZsaXAtcGFuZWwgZGF0YSBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXNcclxuICAgICAgcndiQ2FyZEVsZW1lbnRzLmNhcmRJbWdUb3AuY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZFwiKTtcclxuICAgICAgQ0FSRElOTkVSLmNsYXNzTGlzdC5hZGQoXCJpbm5lclwiKTtcclxuICAgICAgQ0FSREZST05ULmNsYXNzTGlzdC5hZGQoXCJjYXJkRnJvbnRcIik7XHJcbiAgICAgIHNtYWxsSW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdTbWFsbFwiLCBcImltZ1BUUlwiKTtcclxuICAgICAgQ0FSREJBQ0suY2xhc3NMaXN0LmFkZChcImNhcmRCYWNrXCIpO1xyXG4gICAgICBBVFRSSUJVVEVMSU5LLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGVcIik7XHJcbiAgICAgIEJBQ0tIRUFESU5HLnRleHRDb250ZW50ID0gbGluay5hdHRyaWJ1dGVkT3duZXI7XHJcbiAgICAgIEJBQ0tQQVJBLnRleHRDb250ZW50ID0gbGluay5pbm5lclRleHQ7XHJcbiAgICAgIEFUVFJJQlVURUxJTksuaHJlZiA9IGxpbmsuaFJlZmVyZW5jZTtcclxuICAgICAgQVRUUklCVVRFTElOSy50aXRsZSA9IGxpbmsudGl0bGU7XHJcbiAgICAgIEFUVFJJQlVURUxJTksudGV4dENvbnRlbnQgPSBsaW5rLmF0dHJpYnV0ZWRPd25lcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gcmVjb3JkIHJlZmVyZW5jZSBlcnJvcnMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ3YkVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgUndiRXJyb3IuY291bnQrKztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGFuIGVsZW1lbnQgaXMgbnVsbCB1c2luZyBxdWVyeVNlbGVjdG9yKClcclxuICAgKlxyXG4gICAqICAgICAgIHRyeSB7XHJcbiAgICogICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuICAgKiAgICAgICB9XHJcbiAgICogICAgICAgY2F0Y2gge1xyXG4gICAqICAgICAgICAgICAvL2Z1bmN0aW9uIGV4Y2VwdGlvbiBoYW5kbGluZ1xyXG4gICAqICAgICAgIH1cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lIC0gQSBuYW1lIGZvciB0aGUgY29tcG9uZW50IGluIHVzZS5cclxuICAgKiBAcGFyYW0gY3NzUXVlcnkgLSBBIGNzcyBzdHJpbmcuXHJcbiAgICogQHBhcmFtIGxvZ01lc3NhZ2UgLSBDaG9vc2UgdG8gbG9nIGEgbWVzc2FnZSB0byBjb25zb2xlLlxyXG4gICAqIEBwYXJhbSBzdXByZXNzRXhjZXB0aW9uIC0gQ2hvb3NlIHRvIHN1cHJlc3MgdGhlIGV4Y2VwdGlvbiBsb2cuXHJcbiAgICogQHJldHVybnMgSFRNTEVsZW1lbnQgZnJvbSBxdWVyeVNlbGVjdG9yKClcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgY29tcG9uZW50TmFtZTogc3RyaW5nLFxyXG4gICAgY3NzUXVlcnk6IHN0cmluZyxcclxuICAgIGxvZ01lc3NhZ2U/OiBib29sZWFuLFxyXG4gICAgc3VwcmVzc0V4Y2VwdGlvbj86IGJvb2xlYW5cclxuICApIHtcclxuICAgIGxldCBlbGVtOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBsZXQgbG9nRXJyTXNzZzogYm9vbGVhbiA9IHRydWU7IC8vTG9nIG1lc3NhZ2Ugb3B0aW9uIGRlZmF1bHRcclxuICAgIGlmICghbG9nTWVzc2FnZSkgbG9nRXJyTXNzZyA9IGxvZ01lc3NhZ2U7XHJcbiAgICBsZXQgc3VwcmVzc0V4Y3B0OiBib29sZWFuID0gZmFsc2U7IC8vU3VwcmVzcyBtZXNzYWdlIG9wdGlvbiBkZWZhdWx0XHJcbiAgICBpZiAoc3VwcmVzc0V4Y2VwdGlvbikgc3VwcmVzc0V4Y3B0ID0gdHJ1ZTtcclxuICAgIGxldCBxdWVyeTogc3RyaW5nID0gYCR7Y3NzUXVlcnl9YDtcclxuXHJcbiAgICAvLyBBZGQgZGljdGlvbmFyeSB3aWRnZXQgaWYgYW4gZWxlbWVudCB3aXRoIHRoYXQgY2xhc3MgaXMgb24gYSBwYWdlXHJcbiAgICB0cnkge1xyXG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgT2JqZWN0LmNyZWF0ZShuZXcgUndiUmVmZXJlbmNlRXJyb3IoXCJHZXRFbGVtZW50XCIsIGBDb3VsZCBub3QgZ2V0IGVsZW1lbnQ6ICcke3F1ZXJ5fSdgKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbSA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2dFcnJNc3NnKSBjb25zb2xlLndhcm4oYCVjTm8gZWxlbWVudCBmb3VuZCB3aXRoIHF1ZXJ5OiAke3F1ZXJ5fS5gLCBcImNvbG9yOiBvcmFuZ2U7XCIpO1xyXG4gICAgICBpZiAoIXN1cHJlc3NFeGNwdClcclxuICAgICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfU51bGxSZWZlcmVuY2VgLCBgRWxlbWVudCBub3QgZm91bmRgKSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGlmIGxvY2FsIHN0b3JhZ2UgaXMgbnVsbC4gT3B0aW9uYWwgY2hvb3NlIHRvIGFsc28gY2hlY2sgaWYgbG9jYWwgc3RvcmFnZSBzdHJpbmcgaXMgZW1wdHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZSAtIEEgbmFtZSBmb3IgdGhlIGNvbXBvbmVudCBpbiB1c2UuXHJcbiAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkncyBuYW1lIHlvdSdyZSBjaGVja2luZyBmb3IuXHJcbiAgICogQHBhcmFtIGNoZWNrRW1wdHlTdHJpbmcgLSBPcHRpb25hbCBwYXJhbWV0ZXIgdG8gY2hlY2sgZm9yIGVtcHR5IGtleS12YWx1ZS5cclxuICAgKiBAcGFyYW0gbG9nTWVzc2FnZSAtIENob29zZSB0byBsb2cgYSBtZXNzYWdlIHRvIGNvbnNvbGUuXHJcbiAgICogQHJldHVybnMgQm9vbGVhbiB0cnVlIG9yIGZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja0xvY2FsU3RvcmFnZUVxdWFsTnVsbChcclxuICAgIGNvbXBvbmVudE5hbWU6IHN0cmluZyxcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgY2hlY2tFbXB0eVN0cmluZz86IGJvb2xlYW4sXHJcbiAgICBsb2dNZXNzYWdlPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgbGV0IGxvZ01zc2c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKCFsb2dNZXNzYWdlKSBsb2dNc3NnID0gbG9nTWVzc2FnZTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YCkgPT0gbnVsbCkge1xyXG4gICAgICBpZiAobG9nTXNzZykgY29uc29sZS5pbmZvKGAlY05vIGxvY2FsIHN0b3JhZ2UgZm9yICR7Y29tcG9uZW50TmFtZX0uYCwgXCJjb2xvcjpwdXJwbGU7XCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjaGVja0VtcHR5U3RyaW5nKSByZXR1cm4gUndiRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VOdWxsb3JFbXB0eShjb21wb25lbnROYW1lLCBrZXksIGxvZ01zc2cpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBpZiBsb2NhbCBzdG9yYWdlIGlzIG51bGwgb3IgZW1wdHkuXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBjb21wb25lbnQgaW4gdXNlLlxyXG4gICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5J3MgbmFtZSB5b3UncmUgY2hlY2tpbmcgZm9yLlxyXG4gICAqIEBwYXJhbSBsb2dNZXNzYWdlIC0gQ2hvb3NlIHRvIGxvZyBhIG1lc3NhZ2UgdG8gY29uc29sZS5cclxuICAgKiBAcmV0dXJucyBCb29sZWFuIHRydWUgb3IgZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrTG9jYWxTdG9yYWdlTnVsbG9yRW1wdHkoY29tcG9uZW50TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgbG9nTWVzc2FnZT86IGJvb2xlYW4pIHtcclxuICAgIGxldCBsb2dNc3NnOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmICghbG9nTWVzc2FnZSkgbG9nTXNzZyA9IGxvZ01lc3NhZ2U7XHJcbiAgICBsZXQgdGVzdDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB0ZXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7a2V5fWApO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGdldCBsb2NhbCBzdG9yYWdlIGtleTogJHtrZXl9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGVzdCA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2dNc3NnKSBjb25zb2xlLndhcm4oYCVjTG9jYWwgc3RvcmFnZSBrZXkgbm90IGZvdW5kOiAke2tleX0uYCwgXCJjb2xvcjogeWVsbG93O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIpO1xyXG4gICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfVJlZmVyZW5jZUV4Y2VwdGlvbmAsIGBLZXkgbm90IGZvdW5kYCkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0ZXN0ID09IFwiXCIgfHwgdGVzdCA9PSBcIltdXCIpIHtcclxuICAgICAgaWYgKGxvZ01zc2cpXHJcbiAgICAgICAgY29uc29sZS53YXJuKGAlY0xvY2FsIHN0b3JhZ2UgdmFsdWUgaXMgZW1wdHkgZm9yIGtleTogJHtrZXl9YCwgXCJjb2xvcjogeWVsbG93O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIpO1xyXG4gICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfVJlZmVyZW5jZUV4Y2VwdGlvbmAsIGBWYWx1ZSBpcyBlbXB0eWApKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHN0b3JlIHJlZmVyZW5jZSBlcnJvciBkYXRhLiAqL1xyXG5leHBvcnQgY2xhc3MgUndiUmVmZXJlbmNlRXJyb3IgZXh0ZW5kcyBSZWZlcmVuY2VFcnJvciB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVmRXJyb3I6IFJlZmVyZW5jZUVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBSZWZlcmVuY2VFcnJvcih0aGlzLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5yZWZFcnJvciA9IGVycjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIGAlYzxSV0I+JWNFeGVjdXRpb24gZXhwZXJpZW5jZWQgYSByZWZlcmVuY2UgZXJyb3I6XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnJlZkVycm9yLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiUmVmZXJlbmNlRXJyb3IuY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gc3RvcmUgc3ludGF4IGVycm9yIGRhdGEuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JTeW50YXhFcnJvciBleHRlbmRzIFN5bnRheEVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzeW50YXhFcnJvcjogU3ludGF4RXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBsZXQgZXJyID0gbmV3IFN5bnRheEVycm9yKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnN5bnRheEVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY0V4ZWN1dGlvbiBleHBlcmllbmNlZCBhIHN5bnRheCBlcnJvcjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMuc3ludGF4RXJyb3IsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JTeW50YXhFcnJvci5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ3YkRvbUV4Y2VwdGlvbiBleHRlbmRzIERPTUV4Y2VwdGlvbiB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgc3RhY2s6IGFueTtcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZG9tRXJyb3I6IERPTUV4Y2VwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGVycm9yOiBhbnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuc3RhY2sgPSBlcnJvcjtcclxuICAgIHRoaXMucGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBlcnIgPSBuZXcgRE9NRXhjZXB0aW9uKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLmRvbUVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY0V4ZWN1dGlvbiBleHBlcmllbmNlZCBhIERPTSBlcnJvcjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMuc3RhY2ssXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JEb21FeGNlcHRpb24uY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSd2JJbnZhbGlkVmFsdWVFcnJvciBleHRlbmRzIFJhbmdlRXJyb3Ige1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIHN5bnRheEVycm9yOiBSYW5nZUVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBSYW5nZUVycm9yKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnN5bnRheEVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY1ZhbHVlIG91dCBvZiByYW5nZSBleGNlcHRpb246XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnN5bnRheEVycm9yLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiU3ludGF4RXJyb3IuY291bnQrKztcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI1IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbi8qKlxyXG4gKiBIVE1MIGxpbmsgZWxlbWVudCBkYXRhLiBVc2VkIHdpdGggYW5jaG9yIHRhZ3MuXHJcbiAqL1xyXG5jbGFzcyBSd2JMaW5rIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgLyoqSFRNTCB0aXRsZSBhdHRyaWJ1dGUgKi9cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAvKipJbm5lciB0ZXh0IHN0cmluZyAqL1xyXG4gIHB1YmxpYyBpbm5lclRleHQ6IHN0cmluZztcclxuICAvKipUaGUgcGFnZSB0aGUgbGluayBpcyBhc3NvY2lhdGVkIHRvICovXHJcbiAgcHVibGljIHBhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgLyoqSFRNTCBocmVmIGF0dHJpYnV0ZSAqL1xyXG4gIHB1YmxpYyBoUmVmZXJlbmNlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGlubmVyVGV4dDogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nLCBoUmVmZXJlbmNlOiBzdHJpbmcpIHtcclxuICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLFxyXG4gICAgICAodGhpcy5pbm5lclRleHQgPSBpbm5lclRleHQpLFxyXG4gICAgICAodGhpcy5wYWdlTmFtZSA9IHBhZ2VOYW1lKSxcclxuICAgICAgKHRoaXMuaFJlZmVyZW5jZSA9IGhSZWZlcmVuY2UpLFxyXG4gICAgICBSd2JMaW5rLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSd2JMaW5rO1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW50ZXJmYWNlIFNjcmlwdFJ1bnRpbWUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGFydE1hcms6IFBlcmZvcm1hbmNlTWFyaztcclxuICBlbmRNYXJrOiBQZXJmb3JtYW5jZU1hcms7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gcmVjb3JkIHBlcmZvcm1hbmNlIHN0YXJ0IGFuZCBlbmQgbWFya3MuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ3YlBlcmYge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHNjcmlwdFJ1bnRpbWVNYXJrczogU2NyaXB0UnVudGltZSA9IHtcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICBzdGFydE1hcms6IG51bGwsXHJcbiAgICBlbmRNYXJrOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKiBJbnN0YW50aWF0aW5nIGEgU2NyaXB0UGVyZiByZWNvcmRzIHRoZSBwZXJmb3JtYW5jZSBzdGFydCBtYXJrLiAqL1xyXG4gIGNvbnN0cnVjdG9yKHNjcmlwdE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZSA9IHNjcmlwdE5hbWU7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5zdGFydE1hcmsgPSBwZXJmb3JtYW5jZS5tYXJrKGAke3RoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWV9LXN0YXJ0YCk7XHJcbiAgICBSd2JQZXJmLmNvdW50Kys7XHJcbiAgfVxyXG5cclxuICAvKiogQ2FsbCBlbmQoKSB0byBzZXQgdGhlIGVuZCB0aW1lIHN0YW1wLiAqL1xyXG4gIHB1YmxpYyBlbmQoKSB7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrID0gcGVyZm9ybWFuY2UubWFyayhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfS1lbmRgKTtcclxuICAgIHRoaXMubWVhc3VyZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgY29uc29sZSBvdXRwdXQgb2YgdGhpcyBvYmplY3QncyBwZXJmb3JtYW5jZSBtZWFzdXJlbWVudC4gKi9cclxuICBwcml2YXRlIG1lYXN1cmUoKSB7XHJcbiAgICBsZXQgbWVhc3VyZSA9IHBlcmZvcm1hbmNlLm1lYXN1cmUoXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWUsXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLnN0YXJ0TWFyay5uYW1lLFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrLm5hbWVcclxuICAgICk7XHJcbiAgICByZXR1cm4gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfSBleGVjdXRpb24gdGltZSBpczogJHttZWFzdXJlLmR1cmF0aW9ufWApO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjUgUm9iZXJ0IEEuIEhvd2VsbFxyXG5pbXBvcnQgQXR0cmlidXRpb25MaW5rIGZyb20gXCIuL2F0dHJpYnV0aW9uTGlua1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaG9sZHMgdGhlIGRhdGEgZm9yICdXZWJCaXQnIGFydGljbGUgY2FyZHMuIEtleSBpbmZvcm1hdGlvblxyXG4gKiBvZiB0aGUgYXJ0aWNsZSdzIGNvbnRlbnRzIGFyZSBjb250YWluZWQ6IG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRhIGNyZWF0ZWQsXHJcbiAqIGV0Yy5cclxuICovXHJcbmNsYXNzIFdlYkJpdCB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gIHB1YmxpYyBhcnRpY2xlTnVtYmVyOiBudW1iZXI7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwdWJsaWMgZGF0ZUNyZWF0ZWQ6IERhdGU7XHJcbiAgcHVibGljIGFydGljbGVMaW5rOiBzdHJpbmc7XHJcbiAgcHVibGljIGNhcmRJbWFnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjYXJkSW1hZ2VBbHQ6IHN0cmluZztcclxuICBwdWJsaWMgbGlua0F0dHJpYnV0aW9uOiBBdHRyaWJ1dGlvbkxpbmsgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIGFydGljbGVOdW1iZXI6IG51bWJlcixcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICBkYXRlQ3JlYXRlZDogRGF0ZSxcclxuICAgIGFydGljbGVMaW5rOiBzdHJpbmcsXHJcbiAgICBjYXJkSW1hZ2U6IHN0cmluZyxcclxuICAgIGNhcmRJbWFnZUFsdDogc3RyaW5nLFxyXG4gICAgbGlua0F0dHJpYnV0aW9uPzogQXR0cmlidXRpb25MaW5rXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5hcnRpY2xlTnVtYmVyID0gYXJ0aWNsZU51bWJlcjtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZGF0ZUNyZWF0ZWQgPSBkYXRlQ3JlYXRlZDtcclxuICAgIHRoaXMuYXJ0aWNsZUxpbmsgPSBhcnRpY2xlTGluaztcclxuICAgIHRoaXMuY2FyZEltYWdlID0gY2FyZEltYWdlO1xyXG4gICAgdGhpcy5jYXJkSW1hZ2VBbHQgPSBjYXJkSW1hZ2VBbHQ7XHJcbiAgICB0aGlzLmxpbmtBdHRyaWJ1dGlvbiA9IGxpbmtBdHRyaWJ1dGlvbjtcclxuICAgIFdlYkJpdC5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2ViQml0O1xyXG4iXX0=
