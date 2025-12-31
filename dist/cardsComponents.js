(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
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
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webBitsSlideShow = exports.webBitsAccordion = exports.rwbCardsWidget = void 0;
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
//--Copyright (c) 2023-2026 Robert A. Howell
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
//--Copyright (c) 2023-2026 Robert A. Howell
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
//--Copyright (c) 2023-2026 Robert A. Howell
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
//--Copyright (c) 2023-2026 Robert A. Howell
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
//--Copyright (c) 2023-2026 Robert A. Howell
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
//--Copyright (c) 2023-2026 Robert A. Howell
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
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
"use strict";
//--Copyright (c) 2023-2026 Robert A. Howell
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2FyZHNDb21wb25lbnRzLnRzIiwic3JjL2NvbXBvbmVudHMvZmxhc2hjYXJkR2FtZVdpZGdldC50cyIsInNyYy9jb21wb25lbnRzL3dlYkJpdHNDYXJkcy50cyIsInNyYy9kYXRhL2RhdGEudHMiLCJzcmMvZGF0YS9wb3J0TnVtcy50cyIsInNyYy9tb2RlbHMvYXR0cmlidXRpb25MaW5rLnRzIiwic3JjL21vZGVscy9jYXJkc1NsaWRlU2hvdy50cyIsInNyYy9tb2RlbHMvZmxhc2hjYXJkQ2FyZEVsZW1zLnRzIiwic3JjL21vZGVscy9yYW5kb21XZWJCaXRzLnRzIiwic3JjL21vZGVscy9yd2JDYXJkLnRzIiwic3JjL21vZGVscy9yd2JFcnJvckJ1cy50cyIsInNyYy9tb2RlbHMvcndiTGluay50cyIsInNyYy9tb2RlbHMvc2NyaXB0UGVyZi50cyIsInNyYy9tb2RlbHMvd2ViQml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLDRDQUE0Qzs7Ozs7QUFHNUMsNERBQStGO0FBQy9GLDJGQUFtRTtBQUNuRSxxRUFBMEM7QUFFMUMsTUFBTSxjQUFjLEdBQUc7SUFDckIsU0FBUyxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDMUIsSUFBSTtZQUNGLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssMkJBQTJCLENBQUM7Z0JBQ2pDLEtBQUssYUFBYSxDQUFDO2dCQUNuQixLQUFLLEdBQUc7b0JBQ04sNkJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtvQkFDckQsK0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLCtCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QixNQUFNO2dCQUNSLEtBQUssMkJBQTJCLENBQUM7Z0JBQ2pDLEtBQUssYUFBYTtvQkFDaEIsNkJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLDhCQUE4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LENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQzVEO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzlCLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMs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IihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IGNsYXNzQ29tcG9uZW50cyBmcm9tIFwiLi9jbGFzc0NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcndiQ2FyZHNXaWRnZXQsIHdlYkJpdHNTbGlkZVNob3csIHdlYkJpdHNBY2NvcmRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3dlYkJpdHNDYXJkc1wiO1xyXG5pbXBvcnQgZmxhc2hDYXJkR2FtZVdpZGdldCBmcm9tIFwiLi9jb21wb25lbnRzL2ZsYXNoY2FyZEdhbWVXaWRnZXRcIjtcclxuaW1wb3J0IFJ3YlBlcmYgZnJvbSBcIi4vbW9kZWxzL3NjcmlwdFBlcmZcIjtcclxuXHJcbmNvbnN0IGNhcmRDb21wb25lbnRzID0ge1xyXG4gIGNoZWNrUGFnZTogKHBhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3dpdGNoIChwYWdlKSB7XHJcbiAgICAgICAgY2FzZSBcIi9SYW5kb21XZWJCaXRzL2luZGV4Lmh0bWxcIjpcclxuICAgICAgICBjYXNlIFwiL2luZGV4Lmh0bWxcIjpcclxuICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgcndiQ2FyZHNXaWRnZXQuaW5pdCgpOyAvLyBjYXJkcyB3aWRnZXQgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgIHdlYkJpdHNTbGlkZVNob3cuaW5pdCgpO1xyXG4gICAgICAgICAgd2ViQml0c0FjY29yZGlvbi5pbml0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiL1JhbmRvbVdlYkJpdHMvcGFnZXMuaHRtbFwiOlxyXG4gICAgICAgIGNhc2UgXCIvcGFnZXMuaHRtbFwiOlxyXG4gICAgICAgICAgcndiQ2FyZHNXaWRnZXQuaW5pdCgpOyAvLyBjYXJkcyB3aWRnZXQgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgZmxhc2hjYXJkIGNvbXBvbmVudHNcclxuICAgICAgICBjYXNlIFwiL2ZsYXNoY2FyZHMuaHRtbFwiOlxyXG4gICAgICAgICAgZmxhc2hDYXJkR2FtZVdpZGdldC5pbml0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgcGFnZSBjb21wb25lbnQ6ICR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBsZXQgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IHBhZ2VQZXJmID0gbmV3IFJ3YlBlcmYoXCJDYXJkY29tcG9uZW50c1wiKTsgLy9tZWFzdXJlIHBlcmZvcm1hbmNlXHJcblxyXG4gICAgY2FyZENvbXBvbmVudHMuY2hlY2tQYWdlKHBhZ2UpO1xyXG5cclxuICAgIHBhZ2VQZXJmLmVuZCgpOyAvL2VuZCBwZXJmb3JtYW5jZSBtZWFzdXJlXHJcbiAgfSxcclxuICBsb2FkOiAoKSA9PiB7fSxcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjYXJkQ29tcG9uZW50cy5pbml0KTtcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCB7IEZsYXNoY2FyZENhcmRFbGVtcyB9IGZyb20gXCIuLi9tb2RlbHMvZmxhc2hjYXJkQ2FyZEVsZW1zXCI7XHJcbmltcG9ydCBwb3J0RGVmaW5pdGlvbnMgZnJvbSBcIi4uL2RhdGEvcG9ydE51bXNcIjtcclxuaW1wb3J0IFJ3YkVycm9yIGZyb20gXCIuLi9tb2RlbHMvcndiRXJyb3JCdXNcIjtcclxuXHJcbmNvbnN0IGZsYXNoQ2FyZEdhbWVXaWRnZXQgPSB7XHJcbiAgaW5pdDogKCkgPT4ge1xyXG4gICAgLy8gRXN0YWJsaXNoIHdoaWNoIHBvcnQgbnVtYmVycyB0byB0ZXN0IGFuZCB0aGUgZGVmaW5pdGlvblxyXG4gICAgLy8gVE9ETzogZnVuY3Rpb25zIGZsYXNoY2FyZHNcclxuICAgIGNvbnN0IG1ldGhvZERlZmluaXRpb25zID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oW1xyXG4gICAgICBbXCJjaGFyQXQoKVwiLCBcIlJldHVybnMgYSBuZXcgc3RyaW5nIG9mIHRoZSBjaGFyYWN0ZXIgYXQgYSBnaXZlbiBpbmRleC5cIl0sXHJcbiAgICBdKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgZmxhc2hjYXJkIGVsZW1lbnRzXHJcbiAgICBsZXQgbWFpbkZsYXNoQ2FyZERpdnMgPSBuZXcgRmxhc2hjYXJkQ2FyZEVsZW1zKHBvcnREZWZpbml0aW9ucyk7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBnYW1lJ3MgdGl0bGUgZWxlbWVudFxyXG4gICAgbGV0IG1haW5GbGFzaENhcmRQYWdlO1xyXG4gICAgbGV0IG1haW5GbGFzaENhcmRQYWdlRGl2O1xyXG4gICAgbWFpbkZsYXNoQ2FyZFBhZ2UgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcIk1haW5GbGFzaENhcmRcIiwgXCIjbWFpbkZsYXNoQ2FyZEdhbWVcIiwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICBtYWluRmxhc2hDYXJkUGFnZURpdiA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiTWFpbkZsYXNoQ2FyZHNcIiwgXCIjbWFpbkZsYXNoQ2FyZHNcIiwgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZ2FtZVRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGdhbWVUaXRsZUVsZW0uaW5uZXJUZXh0ID0gXCJDb21wdXRpbmcgUG9ydCBOdW1iZXJzXCI7XHJcbiAgICBtYWluRmxhc2hDYXJkUGFnZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGdhbWVUaXRsZUVsZW0pO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgZmxhc2hjYXJkcyB0byB3aWRnZXRcclxuICAgIGZvciAobGV0IGVsZW0gb2YgbWFpbkZsYXNoQ2FyZERpdnMubV9mbGFzaGNhcmRzQXJyKSB7XHJcbiAgICAgIG1haW5GbGFzaENhcmRQYWdlRGl2LmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmbGFzaENhcmRHYW1lV2lkZ2V0O1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IFdFQkJJVERBVEEgZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5pbXBvcnQgUmFuZG9tV2ViQml0cyBmcm9tIFwiLi4vbW9kZWxzL3JhbmRvbVdlYkJpdHNcIjtcclxuaW1wb3J0IENhcmRzU2xpZGVTaG93IGZyb20gXCIuLi9tb2RlbHMvY2FyZHNTbGlkZVNob3dcIjtcclxuaW1wb3J0IFdlYkJpdCBmcm9tIFwiLi4vbW9kZWxzL3dlYkJpdFwiO1xyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4uL21vZGVscy9yd2JFcnJvckJ1c1wiO1xyXG5cclxuY2xhc3MgQWNjb3JkaW9uIHtcclxuICBwdWJsaWMgYWNjb3JkaW9uRWxlbWVudHMgPSBuZXcgTWFwPEhUTUxEaXZFbGVtZW50LCBib29sZWFuPigpO1xyXG4gIGNvbnN0cnVjdG9yKGFjY29yZGlvbk5vZGVzOiBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50Pikge1xyXG4gICAgZm9yIChsZXQgY2FyZCBvZiBhY2NvcmRpb25Ob2Rlcykge1xyXG4gICAgICB0aGlzLmFjY29yZGlvbkVsZW1lbnRzLnNldChjYXJkLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FyZCB3aWRnZXQgdG8gaW5pdGlhbGl6ZSBhcnRpY2xlIGRhdGEgaW50byBIVE1MIGNhcmQgZWxlbWVudHMuIFRoaXMgd2lkZ2V0XHJcbiAqIGNyZWF0ZXMgbXVsdGlwbGUgc2VjdGlvbnMgb2YgY2FyZHMgdG8gYWRkIHRvIGEgcGFnZS5cclxuICovXHJcbmNvbnN0IHJ3YkNhcmRzV2lkZ2V0ID0ge1xyXG4gIGFkZENhcmRTZWN0aW9uQ2xhc3M6IChjYXJkczogSFRNTERpdkVsZW1lbnRbXSB8IEhUTUxEaXZFbGVtZW50LCBjbHM6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2FyZHMpKSB7XHJcbiAgICAgIC8vIGNhcmRzIGlzIGFuIGFycmF5IG9mIGNhcmRzOyBhcHBlbmQgY2xhc3MgdG8gYWxsIGNhcmRzXHJcbiAgICAgIGZvciAobGV0IGNhcmQgb2YgY2FyZHMpIHtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoYCR7Y2xzfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2FyZHMpKSB7XHJcbiAgICAgIC8vIGNhcmRzIGlzIGFuIGVsZW1lbnQ7IGFwcGVuZCBjbGFzcyB0byB0aGUgZWxlbWVudFxyXG4gICAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKGAke2Nsc31gKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGJ1aWxkUmFuZG9tV2ViQml0czogKHBhZ2U/OiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBhcmJpdHJhcnlBcnRpY2xlczogUmFuZG9tV2ViQml0cztcclxuICAgIGxldCBndWlkZVNob3J0czogUmFuZG9tV2ViQml0cztcclxuICAgIGxldCBleHBsb3JldGhlV2ViOiBSYW5kb21XZWJCaXRzO1xyXG5cclxuICAgIHN3aXRjaCAocGFnZSkge1xyXG4gICAgICBjYXNlIFwiSG9tZVwiOlxyXG4gICAgICAgIGVudW0gQ2FyZENvbnRhaW5lclR5cGUge1xyXG4gICAgICAgICAgU2xpZGVzaG93ID0gXCJzbGlkZXNob3dcIixcclxuICAgICAgICAgIEFjY29yZGlvbiA9IFwiYWNjb3JkaW9uXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNwbGl0IHRoZSBjYXJkcyBhcnJheXMgaW50byB0aGVpciByZXNwZWN0aXZlIGNhdGVnb3J5XHJcbiAgICAgICAgYXJiaXRyYXJ5QXJ0aWNsZXMgPSBuZXcgUmFuZG9tV2ViQml0cyhcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRDYXJkQ29udGFpbmluZ1NlY3Rpb24oXHJcbiAgICAgICAgICAgIFwiQXJiaXRyYXJ5IEFydGljbGVzOlwiLFxyXG4gICAgICAgICAgICBcIkFyYml0cmFyeUFydGljbGVzXCIsXHJcbiAgICAgICAgICAgIENhcmRDb250YWluZXJUeXBlLlNsaWRlc2hvd1xyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRSd2JDYXJkcyhXRUJCSVREQVRBLnNoaWZ0KCkgYXMgV2ViQml0W10pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ3VpZGVTaG9ydHMgPSBuZXcgUmFuZG9tV2ViQml0cyhcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRDYXJkQ29udGFpbmluZ1NlY3Rpb24oXHJcbiAgICAgICAgICAgIFwiR3VpZGUgU2hvcnRzOlwiLFxyXG4gICAgICAgICAgICBcIkd1aWRlU2hvcnRzXCIsXHJcbiAgICAgICAgICAgIENhcmRDb250YWluZXJUeXBlLkFjY29yZGlvblxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRSd2JDYXJkcyhXRUJCSVREQVRBLnNoaWZ0KCkgYXMgV2ViQml0W10pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZXhwbG9yZXRoZVdlYiA9IG5ldyBSYW5kb21XZWJCaXRzKFxyXG4gICAgICAgICAgUmFuZG9tV2ViQml0cy5idWlsZENhcmRDb250YWluaW5nU2VjdGlvbihcIkV4cGxvcmUgdGhlIFdlYjpcIiwgXCJFeHBsb3JldGhlV2ViXCIpLFxyXG4gICAgICAgICAgUmFuZG9tV2ViQml0cy5idWlsZFJ3YkNhcmRzKFdFQkJJVERBVEEuc2hpZnQoKSBhcyBXZWJCaXRbXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIFNwbGl0IHRoZSBjYXJkcyBhcnJheXMgaW50byB0aGVpciByZXNwZWN0aXZlIGNhdGVnb3J5XHJcbiAgICAgICAgYXJiaXRyYXJ5QXJ0aWNsZXMgPSBuZXcgUmFuZG9tV2ViQml0cyhcclxuICAgICAgICAgIFJhbmRvbVdlYkJpdHMuYnVpbGRDYXJkQ29udGFpbmluZ1NlY3Rpb24oXCJBcmJpdHJhcnkgQXJ0aWNsZXM6XCIsIFwiQXJiaXRyYXJ5QXJ0aWNsZXNcIiksXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkUndiQ2FyZHMoV0VCQklUREFUQS5zaGlmdCgpIGFzIFdlYkJpdFtdKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGd1aWRlU2hvcnRzID0gbmV3IFJhbmRvbVdlYkJpdHMoXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkQ2FyZENvbnRhaW5pbmdTZWN0aW9uKFwiR3VpZGUgU2hvcnRzOlwiLCBcIkd1aWRlU2hvcnRzXCIpLFxyXG4gICAgICAgICAgUmFuZG9tV2ViQml0cy5idWlsZFJ3YkNhcmRzKFdFQkJJVERBVEEuc2hpZnQoKSBhcyBXZWJCaXRbXSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBleHBsb3JldGhlV2ViID0gbmV3IFJhbmRvbVdlYkJpdHMoXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkQ2FyZENvbnRhaW5pbmdTZWN0aW9uKFwiRXhwbG9yZSB0aGUgV2ViOlwiLCBcIkV4cGxvcmV0aGVXZWJcIiksXHJcbiAgICAgICAgICBSYW5kb21XZWJCaXRzLmJ1aWxkUndiQ2FyZHMoV0VCQklUREFUQS5zaGlmdCgpIGFzIFdlYkJpdFtdKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIE11bHRpcGxlIGNhdGVnb3JpZXMgb2YgY2FyZCBkYXRhIGV4aXN0LiBUaGlzIGFycmF5IGhvbGRzIHRoZSBtYXJrdXAgbmVlZGVkXHJcbiAgICAgKiB0byBjcmVhdGUgY2F0ZWdvcnkgc2VjdGlvbnMgZGl2aXNpb25zIHdoZW4gcGxhY2VkIG9uIGEgcGFnZS5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY2FyZHNTZWN0aW9uczogSFRNTERpdkVsZW1lbnRbXSA9IFtcclxuICAgICAgYXJiaXRyYXJ5QXJ0aWNsZXMuY2FyZHNTZWN0aW9uLFxyXG4gICAgICBndWlkZVNob3J0cy5jYXJkc1NlY3Rpb24sXHJcbiAgICAgIGV4cGxvcmV0aGVXZWIuY2FyZHNTZWN0aW9uLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgY2FyZCBkYXRhICsgYXR0cmlidXRpb24gbGluayBkYXRhXHJcbiAgICAvLyBXRUJCSVREQVRBIGJyb2tlbiBpbnRvIDMgYXJyYXlzOiBQYWdlcyAob3IgYXJ0aWNsZXMpLCBHdWlkZXMsIGFuZCBFeHBsb3Jlc1xyXG4gICAgLyoqVGhpcyBhcnJheSBob2xkcyB0aGUgbWFya3VwIG9mIGNhcmQgZWxlbWVudHMuIEVhY2ggaW5kZXggc3RvcmVzIHRoZSBjYXJkcycgZGF0YVxyXG4gICAgICogZm9yIG9uZSBjYXRlZ29yeSBvZiBhcnRpY2xlcy4gKi9cclxuICAgIGNvbnN0IGNhcmRzRGF0YTogYW55ID0gW2FyYml0cmFyeUFydGljbGVzLmNhcmRzRGF0YSwgZ3VpZGVTaG9ydHMuY2FyZHNEYXRhLCBleHBsb3JldGhlV2ViLmNhcmRzRGF0YV07XHJcbiAgICBjb25zdCBSV0IgPSBbY2FyZHNTZWN0aW9ucywgY2FyZHNEYXRhXTtcclxuXHJcbiAgICByZXR1cm4gUldCO1xyXG4gIH0sXHJcbiAgLyoqIENhcmRzIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uLiBUaGlzIGZ1bmN0aW9uIGJyZWFrcyBkb3duIHRoZSBkYXRhIHN0cnVjdHVyZSBpblxyXG4gICAqIG9yZGVyIHRvIGZvcm11bGF0ZSB0aGUgYXJ0aWNsZSBkZXRhaWxzIGludG8gb25lIGNhcmQgZm9yIGVhY2ggYXJ0aWNsZSBkYXRhLlxyXG4gICAqXHJcbiAgICogQXJ0aWNsZXMgaGF2ZSBkaWZmZXJlbnQgY2F0ZWdvcmllcywgc28gZWFjaCBjYXRlZ29yeSBtdXN0IGJlIHJlc3BlY3RlZC5cclxuICAgKiAqL1xyXG4gIGluaXQ6ICgpID0+IHtcclxuICAgIGxldCBSV0JTZWN0aW9uQ2FyZHM6IGFueTtcclxuICAgIC8vIFJvdXRlcyAtPiBBZGQgd2lkZ2V0IGFuZCBmb3JtYXQgcGFnZXNcclxuICAgIC8vIEluZGV4IChIb21lKSBwYWdlIHNob3J0ZW5zIGVhY2ggc2VjdGlvbnMnIGNhcmQgY291bnQgYW5kIHJhbmRvbWl6ZXNcclxuICAgIGlmIChcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2luZGV4Lmh0bWxcIiB8fFxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvXCIgfHxcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1JhbmRvbVdlYkJpdHMvaW5kZXguaHRtbFwiIHx8XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9SYW5kb21XZWJCaXRzL1wiIHx8XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9kaXN0L2luZGV4Lmh0bWxcIlxyXG4gICAgKSB7XHJcbiAgICAgIC8vQnVpbGQgUldCIFNlY3Rpb25zICsgY2FyZCBzbGlkZXNob3csIGFjY29yZGlhblxyXG4gICAgICBSV0JTZWN0aW9uQ2FyZHMgPSByd2JDYXJkc1dpZGdldC5idWlsZFJhbmRvbVdlYkJpdHMoXCJIb21lXCIpO1xyXG5cclxuICAgICAgLy8gQXBwbHkgY2xhc3NlcyB0byBjYXJkcyByZWxldmFudCBvZiB0aGUgY29udGFpbmVyIHR5cGVcclxuICAgICAgcndiQ2FyZHNXaWRnZXQuYWRkQ2FyZFNlY3Rpb25DbGFzcyhSV0JTZWN0aW9uQ2FyZHNbMV1bMF0sIFwic2xpZGVcIik7XHJcbiAgICAgIHJ3YkNhcmRzV2lkZ2V0LmFkZENhcmRTZWN0aW9uQ2xhc3MoUldCU2VjdGlvbkNhcmRzWzFdWzFdLCBcImFjY29yZGlvbnNsaWRlXCIpO1xyXG5cclxuICAgICAgLy9SYW5kb21pemUgdGhlIGNhcmRzIGluIHRoZSBzbGlkZXNob3cgc2VjdGlvblxyXG4gICAgICByd2JDYXJkc1dpZGdldC5yYW5kb21pemVXZWJCaXRzKFJXQlNlY3Rpb25DYXJkc1sxXSk7XHJcblxyXG4gICAgICAvL0FkZCBpbnRyb2R1Y3Rpb24gc2VjdGlvbiBhbmQgYXBwZW5kIHRvIG1haW5cclxuICAgICAgbGV0IG1haW46IEhUTUxFbGVtZW50O1xyXG4gICAgICBtYWluID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXCJNYWluXCIsIFwibWFpblwiLCB0cnVlLCB0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIFJXQlNlY3Rpb25DYXJkc1swXS51bnNoaWZ0KFJhbmRvbVdlYkJpdHMuYnVpbGRSd2JJbnRyb2R1Y3Rpb24oKSk7XHJcbiAgICAgIG1haW4ucHJlcGVuZChSV0JTZWN0aW9uQ2FyZHNbMF0uc2hpZnQoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL0J1aWxkIFJXQiBTZWN0aW9ucyArIGNhcmRzIGFzIGRlZmF1bHRcclxuICAgICAgUldCU2VjdGlvbkNhcmRzID0gcndiQ2FyZHNXaWRnZXQuYnVpbGRSYW5kb21XZWJCaXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBjYXJkcyB0byB0aGUgcGFnZSBieSBjb21iaW5pbmcgcndiWzFdICh0aGUgY2FyZHMpIHRvIHJ3YlswXSAodGhlIHNlY3Rpb24gZWxlbWVudHMpXHJcbiAgICAvLyBPdXRlciBsb29wOiBpdGVyYXRlIGVhY2ggY2F0ZWdvcnksIHJlc3BlY3RpdmVseTogUGFnZXMsIEd1aWRlcywgRXhwbG9yZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUldCU2VjdGlvbkNhcmRzWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChSV0JTZWN0aW9uQ2FyZHNbMF1baV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gSW5uZXIgbG9vcDogaXRlcmF0ZSB0aHJvdWdoIHRoZSBjYXRlZ29yeSBkYXRhXHJcbiAgICAgICAgLy8gRnJvbSB0aGUgY2FyZHMgc3RhY2ssIGFwcGVuZCBlYWNoIHRvIHNlY3Rpb25cclxuICAgICAgICBSV0JTZWN0aW9uQ2FyZHNbMV0uc2hpZnQoKS5mb3JFYWNoKChhcnRpY2xlOiBhbnkpID0+IHtcclxuICAgICAgICAgIFJXQlNlY3Rpb25DYXJkc1swXVtpXS5hcHBlbmQoYXJ0aWNsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlRoZXJlJ3MgYW4gZXJyb3IgaW4gdGhlIGRhdGEuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByYW5kb21pemVXZWJCaXRzKGNhcmRzQXJ0aWNsZXM6IGFueSkge1xyXG4gICAgLyoqIFJhbmRvbWl6ZSB0aGUgb3JkZXIgb2YgY2FyZHMuICovXHJcbiAgICBjb25zdCBnZXRNdWx0aXBsZVJhbmRvbSA9IChhcnI6IGFueSwgbnVtOiBudW1iZXIpID0+IHtcclxuICAgICAgLy8gcmFuZG9taXplIHRoZSBhcnJheVxyXG4gICAgICBjb25zdCBzaHVmZmxlZCA9IFsuLi5hcnJdLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgICByZXR1cm4gc2h1ZmZsZWQuc2xpY2UoMCwgbnVtKTsgLy8gcmV0dXJuIHRoZSByZXF1ZXN0ZWQgbnVtYmVyIG9mIGVsZW1lbnRzXHJcbiAgICB9O1xyXG4gICAgY2FyZHNBcnRpY2xlc1swXSA9IGdldE11bHRpcGxlUmFuZG9tKGNhcmRzQXJ0aWNsZXNbMF0sIGNhcmRzQXJ0aWNsZXNbMF0ubGVuZ3RoKTsgLy9yYW5kb21pemUgYWxsIHBhZ2VzXHJcbiAgICBjYXJkc0FydGljbGVzWzFdID0gZ2V0TXVsdGlwbGVSYW5kb20oY2FyZHNBcnRpY2xlc1sxXSwgOCk7IC8vcmFuZG9tbHkgc2VsZWN0IDMgZ3VpZGVzXHJcbiAgfSxcclxufTtcclxuXHJcbi8qKkEgY2FyZCBhY2NvcmRpb24gd2lkZ2V0ICovXHJcbmNvbnN0IHdlYkJpdHNBY2NvcmRpb24gPSB7XHJcbiAgYWRkQ2FyZEFjY29yZGlvblN0eWxlczogKGNhcmRBY2NvcmRpb246IEFjY29yZGlvbiwgc2NyZWVuU2l6ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjYXJkQWNjb3JkaW9uLmFjY29yZGlvbkVsZW1lbnRzLmZvckVhY2goKGlzT3BlbiwgY2FyZCkgPT4ge1xyXG4gICAgICBjYXJkLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZmxleERpcmVjdGlvblwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC13aWR0aFwiLCBcIjkwMHB4XCIpO1xyXG4gICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwibWFyZ2luXCIsIFwiMFwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjEwMHB4XCIpO1xyXG4gICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgIC8vaGlkZSB0aGUgJ0ZsYXRpY29uJyBsaW5rc1xyXG5cclxuICAgICAgZm9yIChsZXQgaW5uZXIgb2YgY2FyZC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgbGV0IGlubmVyZWxlbSA9IDxIVE1MRWxlbWVudD5pbm5lcjtcclxuICAgICAgICBpbm5lcmVsZW0uc3R5bGUud2lkdGggPSBcIjUwJVwiO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY2FyZCBib2R5IGF0dHIgc3R5bGVcclxuICAgICAgbGV0IGF0dHJsaW5rID0gY2FyZC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbM10gYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICAgIGF0dHJsaW5rLnN0eWxlLnRvcCA9IFwiNTVweFwiO1xyXG4gICAgICBhdHRybGluay5zdHlsZS5yaWdodCA9IFwiMTAwJVwiO1xyXG5cclxuICAgICAgaWYgKHNjcmVlblNpemUgPT0gXCJTTUFMTFwiKSB7XHJcbiAgICAgICAgLy9jYXJkIGltYWdlIHN0eWxlXHJcbiAgICAgICAgbGV0IGltYWdlID0gY2FyZC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtaGVpZ2h0XCIsIFwiMjAwcHhcIik7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtd2lkdGhcIiwgXCIyMDBweFwiKTtcclxuXHJcbiAgICAgICAgLy9jYXJkIGltYWdlIHNtYWxsIHN0eWxlXHJcbiAgICAgICAgbGV0IGltYWdlU21hbGwgPSBjYXJkLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICBpbWFnZVNtYWxsLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWhlaWdodFwiLCBcIjEwMHB4XCIpO1xyXG4gICAgICAgIGltYWdlU21hbGwuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXgtd2lkdGhcIiwgXCIxMDBweFwiKTtcclxuXHJcbiAgICAgICAgLy9jYXJkIGJhY2sgcGFyYSBzdHlsZVxyXG4gICAgICAgIGxldCBpbWFnZVBhcmEgPSBjYXJkLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMl0gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICBpbWFnZVBhcmEuc3R5bGUuc2V0UHJvcGVydHkoXCJtYXJnaW5cIiwgXCIwXCIpO1xyXG4gICAgICAgIGltYWdlUGFyYS5zdHlsZS5zZXRQcm9wZXJ0eShcImZvbnQtc2l6ZVwiLCBcIjE2cHhcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNjcmVlblNpemUgPT0gXCJNRURJVU1cIikge1xyXG4gICAgICAgIC8vY2FyZCBpbWFnZSBzdHlsZVxyXG4gICAgICAgIGxldCBpbWFnZSA9IGNhcmQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIGltYWdlLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LWhlaWdodFwiLCBcIjI3NXB4XCIpO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LXdpZHRoXCIsIFwiMjc1cHhcIik7XHJcblxyXG4gICAgICAgIC8vY2FyZCBpbWFnZSBzbWFsbCBzdHlsZVxyXG4gICAgICAgIGxldCBpbWFnZVNtYWxsID0gY2FyZC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgaW1hZ2VTbWFsbC5zdHlsZS5zZXRQcm9wZXJ0eShcIm1heC1oZWlnaHRcIiwgXCIxMDBweFwiKTtcclxuICAgICAgICBpbWFnZVNtYWxsLnN0eWxlLnNldFByb3BlcnR5KFwibWF4LXdpZHRoXCIsIFwiMTAwcHhcIik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBhZ2VsaW5rID0gY2FyZC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMl0gYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcblxyXG4gICAgICAvL2FkZCBjbGljayBldmVudFxyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gYXR0cmxpbmsgfHwgZS50YXJnZXQgPT0gcGFnZWxpbmspIHJldHVybjtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIFwiMTAwcHhcIik7XHJcbiAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjI3NXB4XCIpO1xyXG4gICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzT3BlbiA/IGNsb3NlKCkgOiBvcGVuKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2FkZCBmb2N1cyBldmVudFxyXG4gICAgICBsZXQgc2l0ZWxpbmsgPSBjYXJkLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1syXSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgICAgc2l0ZWxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBvcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBcIjI3NXB4XCIpO1xyXG4gICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9wZW4oKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNpdGVsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIFwiMTAwcHhcIik7XHJcbiAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2FkZCB1bmZvY3VzIGV2ZW50XHJcbiAgICAgIGF0dHJsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIFwiMTAwcHhcIik7XHJcbiAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2FkZCB1bmZvY3VzIGV2ZW50XHJcbiAgICAgIGF0dHJsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgb3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgXCIyNzVweFwiKTtcclxuICAgICAgICAgIGlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvcGVuKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBsZXQgYWNjb3JkaW9uQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGFjY29yZGlvbkNvbnRhaW5lciA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgICBcIkNhcmRBY2NvcmRpb25cIixcclxuICAgICAgXCIuY2FyZGFjY29yZGlvblwiLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGlmIChhY2NvcmRpb25Db250YWluZXIgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgYWNjb3JkaW9uQ29udGFpbmVyLnN0eWxlLm1heFdpZHRoID0gXCI3NWVtXCI7XHJcblxyXG4gICAgLy9jcmVhdGUgYWNjb3JkaW9uIGNhcmQgbWFwIHN0YXRlXHJcbiAgICBjb25zdCBjYXJkYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuY2FyZGFjY29yZGlvbiAuYWNjb3JkaW9uc2xpZGVcIlxyXG4gICAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBsZXQgYWNjb3JkaW9uID0gT2JqZWN0LmNyZWF0ZShuZXcgQWNjb3JkaW9uKGNhcmRhY2NvcmRpb24pKTtcclxuXHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgIHdlYkJpdHNBY2NvcmRpb24uYWRkQ2FyZEFjY29yZGlvblN0eWxlcyhhY2NvcmRpb24sIFwiU01BTExcIik7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzY5cHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgd2ViQml0c0FjY29yZGlvbi5hZGRDYXJkQWNjb3JkaW9uU3R5bGVzKGFjY29yZGlvbiwgXCJNRURJVU1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweClcIikubWF0Y2hlcykge1xyXG4gICAgICAgIHdlYkJpdHNBY2NvcmRpb24uYWRkQ2FyZEFjY29yZGlvblN0eWxlcyhhY2NvcmRpb24sIFwiU01BTExcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzY5cHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICB3ZWJCaXRzQWNjb3JkaW9uLmFkZENhcmRBY2NvcmRpb25TdHlsZXMoYWNjb3JkaW9uLCBcIk1FRElVTVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA1MDBweClcIikubWF0Y2hlcykge1xyXG4gICAgICAgIHdlYkJpdHNBY2NvcmRpb24ucmVtb3ZlQ2FyZEFjY29yaW9uU3R5bGVzKGFjY29yZGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlQ2FyZEFjY29yaW9uU3R5bGVzOiAoY2FyZGFjY29yZGlvbjogQWNjb3JkaW9uKSA9PiB7XHJcbiAgICBjYXJkYWNjb3JkaW9uLmFjY29yZGlvbkVsZW1lbnRzLmZvckVhY2goKGlzT3BlbiwgY2FyZCkgPT4ge1xyXG4gICAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiZmxleERpcmVjdGlvblwiLCBcImNvbHVtblwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1heC13aWR0aFwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpblwiKTtcclxuICAgICAgY2FyZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICBjYXJkLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG5cclxuICAgICAgLy9jYXJkIGJvZHkgYXR0ciBzdHlsZVxyXG4gICAgICBsZXQgYXR0cmxpbmsgPSBjYXJkLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1szXSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgICAgYXR0cmxpbmsuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0b3BcIik7XHJcbiAgICAgIGF0dHJsaW5rLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicmlnaHRcIik7XHJcbiAgICAgIGF0dHJsaW5rLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG5cclxuICAgICAgLy9jYXJkIGltYWdlIHN0eWxlXHJcbiAgICAgIGxldCBpbWFnZSA9IGNhcmQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICBpbWFnZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1heC1oZWlnaHRcIik7XHJcbiAgICAgIGltYWdlLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWF4LXdpZHRoXCIpO1xyXG5cclxuICAgICAgLy9jYXJkIGltYWdlIHNtYWxsIHN0eWxlXHJcbiAgICAgIGxldCBpbWFnZVNtYWxsID0gY2FyZC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgIGltYWdlU21hbGwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJtYXgtaGVpZ2h0XCIpO1xyXG4gICAgICBpbWFnZVNtYWxsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibWF4LXdpZHRoXCIpO1xyXG5cclxuICAgICAgLy9jYXJkIGJhY2sgcGFyYSBzdHlsZVxyXG4gICAgICBsZXQgaW1hZ2VQYXJhID0gY2FyZC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzJdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgIGltYWdlUGFyYS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpblwiKTtcclxuICAgICAgaW1hZ2VQYXJhLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW5uZXIgb2YgY2FyZC5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgbGV0IGlubmVyZWxlbSA9IDxIVE1MRWxlbWVudD5pbm5lcjtcclxuICAgICAgICBpbm5lcmVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ3aWR0aFwiKTtcclxuICAgICAgICBpbm5lcmVsZW0ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XHJcbiAgICAgIH1cclxuICAgICAgY2FyZC5yZXBsYWNlV2l0aChjYXJkLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuLyoqQSBjYXJkIHNsaWRlc2hvdyB3aWRnZXQgKi9cclxuY29uc3Qgd2ViQml0c1NsaWRlU2hvdyA9IHtcclxuICBpbml0OiAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL3BhZ2VzLmh0bWxcIikgcmV0dXJuO1xyXG4gICAgaWYgKFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwid2ViQml0c1NsaWRlU2hvd1wiLCBcIi5jYXJkc2xpZGVzaG93XCIsIHRydWUsIGZhbHNlKSA9PSBudWxsKSByZXR1cm47XHJcbiAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRzbGlkZXNob3cgLnNsaWRlXCIpIGFzIE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG4gICAgaWYgKGNhcmRzID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgYXJlIG5vIGNhcmRzIG9uIHRoZSBwYWdlLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHNtYWxsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA4MTlweClcIik7XHJcbiAgICB2YXIgdGFibGV0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA4MjBweCkgYW5kIChtYXgtd2lkdGg6IDEwOTBweClcIik7XHJcblxyXG4gICAgLy9JbXBsZW1lbnQgc2xpZGVzaG93IGZvciBzZWN0aW9uIGFydGljbGVzXHJcbiAgICBsZXQgc2xpZGVzaG93OiBDYXJkc1NsaWRlU2hvdztcclxuICAgIGxldCBzbGlkZXNob3dtZWQ6IENhcmRzU2xpZGVTaG93O1xyXG4gICAgbGV0IHNsaWRlc2hvd2xhcmdlOiBDYXJkc1NsaWRlU2hvdztcclxuICAgIGxldCBjdXJyZW50c2xpZGVzaG93OiBDYXJkc1NsaWRlU2hvdztcclxuXHJcbiAgICAvL0Jhc2VkIG9uIHRoZSBtYXRjaGVkIG1lZGlhIHNpemUsIGNyZWF0ZSBhIHNtYWxsLCBtZWRpdW0sIG9yIGxhcmdlIHNsaWRlc2hvd1xyXG4gICAgaWYgKHNtYWxsLm1hdGNoZXMpIHtcclxuICAgICAgc2xpZGVzaG93ID0gbmV3IENhcmRzU2xpZGVTaG93KGNhcmRzLCAxLCBcIlNNQUxMXCIpO1xyXG4gICAgICBjdXJyZW50c2xpZGVzaG93ID0gc2xpZGVzaG93O1xyXG4gICAgfSBlbHNlIGlmICh0YWJsZXQubWF0Y2hlcykge1xyXG4gICAgICBzbGlkZXNob3dtZWQgPSBuZXcgQ2FyZHNTbGlkZVNob3coY2FyZHMsIDIsIFwiTUVESVVNXCIpO1xyXG4gICAgICBjdXJyZW50c2xpZGVzaG93ID0gc2xpZGVzaG93bWVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2xpZGVzaG93bGFyZ2UgPSBuZXcgQ2FyZHNTbGlkZVNob3coY2FyZHMsIDMsIFwiTEFSR0VcIik7XHJcbiAgICAgIGN1cnJlbnRzbGlkZXNob3cgPSBzbGlkZXNob3dsYXJnZTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBzbGlkZXNob3dzbWFsbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIGxldCBzbGlkZXNob3dtZWRpdW06IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICBsZXQgc2xpZGVzaG93bGFyZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICBzbGlkZXNob3dzbWFsbCA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgICAgIFwiQ2FyZFNsaWRlU2hvd1wiLFxyXG4gICAgICAgIFwiLnNsaWRlc2NvbnRhaW5lci5TTUFMTFwiLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgc2xpZGVzaG93bWVkaXVtID0gUndiRXJyb3IuY2hlY2tTZWxlY3RlZEVsZW1lbnQoXHJcbiAgICAgICAgXCJDYXJkU2xpZGVTaG93XCIsXHJcbiAgICAgICAgXCIuc2xpZGVzY29udGFpbmVyLk1FRElVTVwiLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgc2xpZGVzaG93bGFyZ2UgPSBSd2JFcnJvci5jaGVja1NlbGVjdGVkRWxlbWVudChcclxuICAgICAgICBcIkNhcmRTbGlkZVNob3dcIixcclxuICAgICAgICBcIi5zbGlkZXNjb250YWluZXIuTEFSR0VcIixcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA4MTlweClcIikubWF0Y2hlcykge1xyXG4gICAgICAgIGlmIChzbGlkZXNob3dtZWRpdW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgc2xpZGVzaG93bWVkaXVtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgUmVtb3ZlZCBtZWQgc2xpZGVzaG93ICR7c2xpZGVzaG93bWVkaXVtfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2xpZGVzaG93bGFyZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgc2xpZGVzaG93bGFyZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGBSZW1vdmVkIGxhcmdlIHNsaWRlc2hvdyAke3NsaWRlc2hvd2xhcmdlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93LnNzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cuYXJyb3dzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cgPSBuZXcgQ2FyZHNTbGlkZVNob3coY2FyZHMsIDEsIFwiU01BTExcIik7XHJcbiAgICAgICAgY3VycmVudHNsaWRlc2hvdy5vblJlc2l6ZVNob3dTdGFydGluZ0VsZW1zKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogODIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDkwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICBpZiAoc2xpZGVzaG93c21hbGwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgc2xpZGVzaG93c21hbGwucmVtb3ZlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGBSZW1vdmVkIHNtYWxsIHNsaWRlc2hvdyAke3NsaWRlc2hvd3NtYWxsfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2xpZGVzaG93bGFyZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgc2xpZGVzaG93bGFyZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGBSZW1vdmVkIGxhcmdlIHNsaWRlc2hvdyAke3NsaWRlc2hvd2xhcmdlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93LnNzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cuYXJyb3dzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cgPSBuZXcgQ2FyZHNTbGlkZVNob3coY2FyZHMsIDIsIFwiTUVESVVNXCIpO1xyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cub25SZXNpemVTaG93U3RhcnRpbmdFbGVtcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEwOTFweClcIikubWF0Y2hlcykge1xyXG4gICAgICAgIGlmIChzbGlkZXNob3dzbWFsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBzbGlkZXNob3dzbWFsbC5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFJlbW92ZWQgc21hbGwgZWxlbWVudCAke3NsaWRlc2hvd3NtYWxsfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2xpZGVzaG93bWVkaXVtICE9IG51bGwpIHtcclxuICAgICAgICAgIHNsaWRlc2hvd21lZGl1bS5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFJlbW92ZWQgbWVkaXVtIGVsZW1lbnQgJHtzbGlkZXNob3dtZWRpdW19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRzbGlkZXNob3cuc3NDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgY3VycmVudHNsaWRlc2hvdy5hcnJvd3NDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgY3VycmVudHNsaWRlc2hvdyA9IG5ldyBDYXJkc1NsaWRlU2hvdyhjYXJkcywgMywgXCJMQVJHRVwiKTtcclxuICAgICAgICBjdXJyZW50c2xpZGVzaG93Lm9uUmVzaXplU2hvd1N0YXJ0aW5nRWxlbXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHJ3YkNhcmRzV2lkZ2V0LCB3ZWJCaXRzQWNjb3JkaW9uLCB3ZWJCaXRzU2xpZGVTaG93IH07XHJcbiIsIlwic3RyaWN0IG1vZGVcIjtcclxuLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuaW1wb3J0IFdlYkJpdCBmcm9tIFwiLi4vbW9kZWxzL3dlYkJpdFwiO1xyXG5pbXBvcnQgQXR0cmlidXRpb25MaW5rIGZyb20gXCIuLi9tb2RlbHMvYXR0cmlidXRpb25MaW5rXCI7XHJcblxyXG4vLyBDcmVhdGUgbmV3IEFBIChBcmJpdHJhcnkgQXJ0aWNsZSlcclxuXHJcbi8qKlxyXG4gKiBcIkFyYml0cmFyeSBBcnRpY2xlcycgc2VjdGlvbiBjYXJkIGRhdGEuXCJcclxuICovXHJcbmNvbnN0IGFyYml0cmFyeUFydGljbGVzID0gbmV3IEFycmF5KFxyXG4gIG5ldyBXZWJCaXQoXHJcbiAgICBcIkRvbWFpbmxvb2t1cFwiLFxyXG4gICAgMSxcclxuICAgIFwiRG9tYWluIExvb2t1cFwiLFxyXG4gICAgXCJDaGVjayBhbiBhdmFpbGFibGUgZG9tYWluIHVzaW5nIFdob0lTIEFQSSBzZWFyY2hcIixcclxuICAgIG5ldyBEYXRlKDIwMjIsIDEyLCA0KSxcclxuICAgIFwicGFnZXMvZG9tYWlubG9va3VwLmh0bWxcIixcclxuICAgIFwibGlicmFyeS9pbWcvd2hvaXMud2VicFwiLFxyXG4gICAgXCJXaG9JcyBMb29rdXBcIixcclxuICAgIG5ldyBBdHRyaWJ1dGlvbkxpbmsoXHJcbiAgICAgIFwiZG9tYWluIGljb25zXCIsXHJcbiAgICAgIFwiRG9tYWluIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvZG9tYWluXCIsXHJcbiAgICAgIFwiRmxhdGljb25cIixcclxuICAgICAgXCJEb21haW4gTG9va3VwXCIsXHJcbiAgICAgIDFcclxuICAgIClcclxuICApLFxyXG4gIG5ldyBXZWJCaXQoXHJcbiAgICBcIkh0bWxyZXNwb25zZXNcIixcclxuICAgIDIsXHJcbiAgICBcIkhUTUwgRnJhbWVzXCIsXHJcbiAgICBcIlZpZXcgSFRNTCBwYWdlIHJlc3BvbnNlIHN0YXR1cyBpbmZvcm1hdGlvblwiLFxyXG4gICAgbmV3IERhdGUoMjAyMiwgMTIsIDExKSxcclxuICAgIFwicGFnZXMvaHRtbHJlc3BvbnNlcy5odG1sXCIsXHJcbiAgICBcImxpYnJhcnkvaW1nL0hUTUxfRnJhbWVzLndlYnBcIixcclxuICAgIFwiSFRNTCBmcmFtZXMgZXhhbXBsZVwiLFxyXG4gICAgbmV3IEF0dHJpYnV0aW9uTGluayhcclxuICAgICAgXCJjb2RlIGljb25zXCIsXHJcbiAgICAgIFwiQ29kZSBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvblwiLFxyXG4gICAgICBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2NvZGVcIixcclxuICAgICAgXCJGbGF0aWNvblwiLFxyXG4gICAgICBcIkhUTUwgRnJhbWVzXCIsXHJcbiAgICAgIDJcclxuICAgIClcclxuICApLFxyXG4gIG5ldyBXZWJCaXQoXHJcbiAgICBcIldlYnRlY2hcIixcclxuICAgIDUsXHJcbiAgICBcIldhcHBhbHl6ZXJcIixcclxuICAgIFwiV2FwcGFseXplciBicm93c2VyIGV4dGVuc2lvblwiLFxyXG4gICAgbmV3IERhdGUoMjAyMywgMTEsIDE5KSxcclxuICAgIFwicGFnZXMvd2VidGVjaC5odG1sXCIsXHJcbiAgICBcImxpYnJhcnkvaW1nL3dhcHBhbHl6ZXItbG9nby53ZWJwXCIsXHJcbiAgICBcIkJyb3dzZXIgZXh0ZW5zaW9uIGxvZ28uIEEgd2hpdGUgdyBvbiBhIHB1cnBsZSB0aWxlLlwiLFxyXG4gICAgbmV3IEF0dHJpYnV0aW9uTGluayhcclxuICAgICAgXCJXYXBwYWx5emVyIGFwcFwiLFxyXG4gICAgICBcIkdyYXBoaWNhbCBsb2dvIGZvciBXYXBwYWx5emVyLlwiLFxyXG4gICAgICBcImh0dHBzOi8vd3d3LndhcHBhbHl6ZXIuY29tL2xvZ29zL1wiLFxyXG4gICAgICBcIldhcHBhbHl6ZXJcIixcclxuICAgICAgXCJXYXBwYWx5emVyXCIsXHJcbiAgICAgIDVcclxuICAgIClcclxuICApLFxyXG4gICAgbmV3IFdlYkJpdChcclxuICAgICAgICBcIkpzb25vYmplY3RcIixcclxuICAgICAgICA2LFxyXG4gICAgICAgIFwianNvbk9iamVjdFwiLFxyXG4gICAgICAgIFwiSlNPTiBvYmplY3Qgbm90YXRpb25cIixcclxuICAgICAgICBuZXcgRGF0ZSgyMDIzLCAxLCA5KSxcclxuICAgICAgICBcInBhZ2VzL2pzb25vYmplY3QuaHRtbFwiLFxyXG4gICAgICAgIFwibGlicmFyeS9pbWcvanNvbi53ZWJwXCIsXHJcbiAgICAgICAgXCJKU09OIGxvZ286IEEgZ3JleSBjaXJjbGUgd2l0aCBhcnRpc3RpYyBzcGlyYWxzLlwiLFxyXG4gICAgICAgIG5ldyBBdHRyaWJ1dGlvbkxpbmsoXHJcbiAgICAgICAgICAgIFwiSmF2YVNjcmlwdCBPYmplY3QgTm90YXRpb25cIixcclxuICAgICAgICAgICAgXCJHcmFwaGljYWwgbG9nbyBmb3IgSlNPTi5cIixcclxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5qc29uLm9yZy9cIixcclxuICAgICAgICAgICAgXCJqc29uLm9yZ1wiLFxyXG4gICAgICAgICAgICBcImpzb25PYmplY3RcIixcclxuICAgICAgICAgICAgNlxyXG4gICAgICAgIClcclxuICAgIClcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBcIkd1aWRlIFNob3J0cycgc2VjdGlvbiBjYXJkIGRhdGEuXCJcclxuICovXHJcbmNvbnN0IGd1aWRlU2hvcnRzID0gbmV3IEFycmF5KFxyXG4gIG5ldyBXZWJCaXQoXHJcbiAgICBcIkh0dHBzY2VydFwiLFxyXG4gICAgNCxcclxuICAgIFwiSFRUUFMgQ2VydGlmaWNhdGVcIixcclxuICAgIFwiU2VsZWN0IHRvIHZpZXcgYSB3ZWJzaXRlJ3MgSFRUUFMgY2VydGlmaWNhdGVcIixcclxuICAgIG5ldyBEYXRlKDIwMjIsIDEyLCAyNiksXHJcbiAgICBcImd1aWRlcy9odHRwcy5odG1sXCIsXHJcbiAgICBcImxpYnJhcnkvaW1nL2h0dHBzX2NlcnQud2VicFwiLFxyXG4gICAgXCJDdXJzb3Igc2VsZWN0aW5nIEhUVFBTIGNlcnRpZmljYXRlXCIsXHJcbiAgICBuZXcgQXR0cmlidXRpb25MaW5rKFxyXG4gICAgICBcInNzbCBjZXJ0aWZpY2F0ZSBpY29uc1wiLFxyXG4gICAgICBcIlNzbCBjZXJ0aWZpY2F0ZSBpY29ucyBjcmVhdGVkIGJ5IGluaXBhZ2lzdHVkaW8gLSBGbGF0aWNvblwiLFxyXG4gICAgICBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3NzbC1jZXJ0aWZpY2F0ZVwiLFxyXG4gICAgICBcIkZsYXRpY29uXCIsXHJcbiAgICAgIFwiSFRUUFMgQ2VydGlmaWNhdGVcIixcclxuICAgICAgNFxyXG4gICAgKVxyXG4gIClcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBcIkV4cGxvcmUgc2VjdGlvbiBjYXJkIGRhdGEuXCJcclxuICovXHJcbmNvbnN0IGV4cGxvcmVzID0gbmV3IEFycmF5KFxyXG4gIG5ldyBXZWJCaXQoXHJcbiAgICBcIk5hc2FcIixcclxuICAgIDMsXHJcbiAgICBcIkVYUExPUkU6IE5BU0EgUGFnZXNcIixcclxuICAgIFwiRXhwbG9yZSB0aGUgTkFTQSBkb21haW4uIExlYXJuIGFib3V0IHRoZSB1bml2ZXJzZSB2aWEgTkFTQSBsaW5rc1wiLFxyXG4gICAgbmV3IERhdGUoMjAyMiwgMTIsIDE4KSxcclxuICAgIFwiZXhwbG9yZS9uYXNhLmh0bWxcIixcclxuICAgIFwibGlicmFyeS9pbWcvTkFTQS53ZWJwXCIsXHJcbiAgICBcIk5BU0EgQXJ0ZW1pcyBMb2dvXCIsXHJcbiAgICBuZXcgQXR0cmlidXRpb25MaW5rKFxyXG4gICAgICBcIk5BU0FcIixcclxuICAgICAgXCJJbWFnZSBzb3VyY2UgdmlhIHRoZSBOYXRpb25hbCBBZXJvbmF1dGljcyBhbmQgU3BhY2UgQWRtaW5pc3RyYXRpb25cIixcclxuICAgICAgXCJodHRwczovL3d3dy5uYXNhLmdvdi9hdWRpZW5jZS9mb3JzdHVkZW50cy81LTgvZmVhdHVyZXMvc3ltYm9scy1vZi1uYXNhLmh0bWxcIixcclxuICAgICAgXCJOQVNBXCIsXHJcbiAgICAgIFwiTkFTQSBQYWdlc1wiLFxyXG4gICAgICAzXHJcbiAgICApXHJcbiAgKVxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIE11bHRpZGltZW5zaW9uYWwgYXJyYXkuIFJvd3MgYXJlIHRoZSBkaWZmZXJlbnQgc2VjdGlvbnMuIENvbHVtbnNcclxuICogY29udGFpbiBlYWNoIGFydGljbGUncyBkYXRhIGJlbG9uZ2luZyBpbiB0aGF0IHNlY3Rpb24uXHJcbiAqL1xyXG5jb25zdCBXRUJCSVREQVRBID0gW2FyYml0cmFyeUFydGljbGVzLCBndWlkZVNob3J0cywgZXhwbG9yZXNdO1xyXG5leHBvcnQgZGVmYXVsdCBXRUJCSVREQVRBO1xyXG4iLCJcInN0cmljdCBtb2RlXCI7XHJcbi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcbmNvbnN0IHBvcnREZWZpbml0aW9ucyA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KFtcclxuICBbMjAsIFwiRlRQLWRhdGFcIl0sXHJcbiAgWzIxLCBcIkZUUFwiXSxcclxuICBbMjIsIFwiU2VjdXJlIFNTSCAgL1RDUFwiXSxcclxuICBbMjMsIFwiVGVsbmV0ICh1bnNlY3VyZSlcIl0sXHJcbiAgWzI1LCBcIlNNVFAgLSA0NjUgZm9yIGVuY3J5cHRlZC5cIl0sXHJcbiAgWzM3LCBcInRpbWVzZXJ2ZXIgL1RDUC9VRFBcIl0sXHJcbiAgWzQ5LCBcIlRBQ0FDUytcIl0sXHJcbiAgWzUzLCBcIkROUyAgL1VEUC9UQ1BcIl0sXHJcbiAgWzY3LCBcIkRIQ1BcIl0sXHJcbiAgWzY4LCBcIkRIQ1BcIl0sXHJcbiAgWzgwLCBcIkhUVFAgIC9UQ1BcIl0sXHJcbiAgWzg4LCBcIktlcmJlcm9zLXNlYyAgL1RDUC9VRFBcIl0sXHJcbiAgWzExMCwgXCJQT1AgLSA5OTUgZm9yIGVuY3J5cHRlZC5cIl0sXHJcbiAgWzEzNSwgXCJSUENcIl0sXHJcbiAgWzEzNywgXCJORVRCSU9TXCJdLFxyXG4gIFsxMzgsIFwiTkVUQklPU1wiXSxcclxuICBbMTM5LCBcIk5FVEJJT1NcIl0sXHJcbiAgWzE0MywgXCJJTUFQIC0gOTkzIGZvciBlbmNyeXB0ZWRcIl0sXHJcbiAgWzE2MSwgXCJTTk1QICBNYW5hZ2VyXCJdLFxyXG4gIFsxNjIsIFwiU05NUCAgQWdlbnRcIl0sXHJcbiAgWzM4OSwgXCJMREFQIC0gNjM2IGZvciBzZWN1cmVcIl0sXHJcbiAgWzQ0MywgXCJIVFRQUyAgL1RDUFwiXSxcclxuICBbNDQ1LCBcIlNNQiAgL1RDUFwiXSxcclxuICBbNDY1LCBcIlNNVFAgYnkgVExTXCJdLFxyXG4gIFs1MTQsIFwiU1lTTE9HICAvVURQXCJdLFxyXG4gIFs1ODcsIFwiU01UUFMgU1RBUlRUTFNcIl0sXHJcbiAgWzYzNiwgXCJMREFQIFNTTFwiXSxcclxuICBbOTkwLCBcIkZUUFNcIl0sXHJcbiAgWzk5MywgXCJJTUFQIFRMU1wiXSxcclxuICBbOTk1LCBcIlBPUCBUTFNcIl0sXHJcbiAgWzE4MTIsIFwiUkFESVVTICAvVENQL1VEUFwiXSxcclxuICBbMTgxMywgXCJSQURJVVMgIC9UQ1AvVURQXCJdLFxyXG4gIC8vIFszMzA5LCBcIlNRTCAgL1RDUC9VRFBcIl0sXHJcbiAgWzMyNjksIFwiTWljcm9zb2Z0IEdsb2JhbCBDYXRhbG9nXCJdLFxyXG4gIFszMzg5LCBcIlJEUFwiXSxcclxuXSk7XHJcbmV4cG9ydCBkZWZhdWx0IHBvcnREZWZpbml0aW9ucztcclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbmltcG9ydCBSd2JMaW5rIGZyb20gXCIuL3J3YkxpbmtcIjtcclxuXHJcbi8qKlxyXG4gKiBVc2VkIGZvciBpbWFnZSBBdHRyaWJ1dGlvblxyXG4gKi9cclxuY2xhc3MgQXR0cmlidXRpb25MaW5rIGV4dGVuZHMgUndiTGluayB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIC8qKk5hbWUgb2YgdGhlIG93bmVyICovXHJcbiAgcHVibGljIGF0dHJpYnV0ZWRPd25lcjogc3RyaW5nO1xyXG4gIC8qKldlYkJpdHMgYXJ0aWNsZSBkYXRhIElEICovXHJcbiAgcHVibGljIGFydGljbGVJZDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKkxpbmsgdGl0bGUgKi9cclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICAvKipMaW5rIGlubmVyIHRleHQgKi9cclxuICAgIGlubmVyVGV4dDogc3RyaW5nLFxyXG4gICAgLyoqIGxpbmsgaHJlZiAqL1xyXG4gICAgaFJlZmVyZW5jZTogc3RyaW5nLFxyXG4gICAgLyoqTmFtZSBvZiB0aGUgb3duZXIgKi9cclxuICAgIGF0dHJpYnV0ZWRPd25lcjogc3RyaW5nLFxyXG4gICAgLyoqV2ViQml0cyBwYWdlICovXHJcbiAgICBwYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgLyoqV2ViQml0cyBhcnRpY2xlIGRhdGEgSUQgKi9cclxuICAgIGFydGljbGVJZDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBzdXBlcih0aXRsZSwgaW5uZXJUZXh0LCBwYWdlTmFtZSwgaFJlZmVyZW5jZSk7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZWRPd25lciA9IGF0dHJpYnV0ZWRPd25lcjtcclxuICAgIHRoaXMuYXJ0aWNsZUlkID0gYXJ0aWNsZUlkO1xyXG4gICAgQXR0cmlidXRpb25MaW5rLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbkxpbms7XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5pbXBvcnQgUndiRXJyb3IgZnJvbSBcIi4vcndiRXJyb3JCdXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRzU2xpZGVTaG93IHtcclxuICBwdWJsaWMgc3NDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHB1YmxpYyBhcnJvd3NDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHB1YmxpYyBwcmV2QnRuOiBIVE1MRWxlbWVudDtcclxuICBwdWJsaWMgbmV4dEJ0bjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYXJkczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgcHJpdmF0ZSBjYXJkU2hvd1F1YW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjYXJkSW5keFN0YXJ0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY2FyZENvdW50ZXI6IG51bWJlciA9IDE7XHJcbiAgcHJpdmF0ZSBjYXJkc0luZHhFbmQ6IG51bWJlcjtcclxuICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBtYXhUdXJuQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIHNsaWRlU2hvd0NvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzbGlkZXNob3dcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBudW1iZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHdpbmRvd1NpemU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoY2FyZHM6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+LCBxdWFudGl0eVNob3c6IG51bWJlciwgd2luZG93U2l6ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNhcmRzID0gY2FyZHM7XHJcbiAgICB0aGlzLmNhcmRTaG93UXVhbnQgPSBxdWFudGl0eVNob3c7XHJcbiAgICB0aGlzLmNhcmRzSW5keEVuZCA9IHRoaXMuY2FyZFNob3dRdWFudCAtIDE7XHJcbiAgICB0aGlzLm1heFR1cm5Db3VudCA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gdGhpcy5jYXJkU2hvd1F1YW50O1xyXG4gICAgdGhpcy53aW5kb3dTaXplID0gd2luZG93U2l6ZTtcclxuXHJcbiAgICB0aGlzLmhpZGVPdmVyZmxvd0VsZW1lbnRzKCk7XHJcbiAgICB0aGlzLm9uSW5pdFNldHVwQ2FyZFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnNzQ29udGFpbmVyID0gdGhpcy5uZXdDb250YWluZXJNYXJrdXAoKTtcclxuICAgIHRoaXMuYXJyb3dzQ29udGFpbmVyID0gdGhpcy5uZXdBcnJvd3NNYXJrdXAoKTtcclxuICAgIHRoaXMubmV3TnVtYmVyRWxlbWVudCgpO1xyXG4gICAgdGhpcy5hZGRCdG5FdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zaG93SGlkZVNsaWRlU2hvd0J1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXh0U2xpZGUoKSB7XHJcbiAgICBpZiAodGhpcy50dXJuID09IHRoaXMubWF4VHVybkNvdW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpbmRvd1NpemUgPT0gXCJMQVJHRVwiKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL0hpZGUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcblxyXG4gICAgICAvL01vdmUgbWlkZGxlIGVsZW1lbnQgdG8gbGVmdFxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMzY1cHgpXCI7XHJcblxyXG4gICAgICAvL01vdmUgcmlnaHQgdG8gdGhlIG1pZGRsZVxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCArIDJdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwcHgpXCI7XHJcblxyXG4gICAgICAvL0Rpc3BsYXkgdGhlIG5leHQgZWxlbWVudCBmb3Igc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ6LWluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvcGFjaXR5XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xyXG5cclxuICAgICAgLy9Nb3ZlIGluIG5ldyBlbGVtZW50XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMzY1cHgpXCI7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIk1FRElVTVwiKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL0hpZGUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcblxyXG4gICAgICAvL01vdmUgdGhlIHJpZ2h0IGVsZW1lbnQgdG8gbGVmdFxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMTgyLjVweClcIjtcclxuXHJcbiAgICAgIC8vRGlzcGxheSB0aGUgbmV4dCBlbGVtZW50IGZvciBzbGlkZXNob3dcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInotaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgICAvL01vdmUgaW4gbmV3IGVsZW1lbnRcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxODIuNXB4KVwiO1xyXG4gICAgICBpZiAodGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpbmRvd1NpemUgPT0gXCJTTUFMTFwiKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL0hpZGUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnRdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcblxyXG4gICAgICAvL01vdmUgZWxlbWVudCB0byBsZWZ0XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTE4Mi41cHgpXCI7XHJcblxyXG4gICAgICAvL01vdmUgZWxlbWVudCB0byBjZW50ZXJcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgKyAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMHB4KVwiO1xyXG5cclxuICAgICAgLy9EaXNwbGF5IHRoZSBuZXh0IGVsZW1lbnQgZm9yIHNsaWRlc2hvd1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiei1pbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMl0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDJdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxODIuNXB4KVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAyXS5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0luY3JlbWVudCBpbmRleCBjb3VudGVyXHJcbiAgICB0aGlzLmNhcmRJbmR4U3RhcnQrKztcclxuICAgIHRoaXMuY2FyZHNJbmR4RW5kKys7XHJcbiAgICB0aGlzLnR1cm4rKztcclxuICAgIHRoaXMuY2FyZENvdW50ZXIrKztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmV2U2xpZGUoKSB7XHJcbiAgICBpZiAodGhpcy50dXJuID09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIkxBUkdFXCIpIHtcclxuICAgICAgLy9IaWRlIHRoZSBsYXN0IGVsZW1lbnQgaW4gc2xpZGVzaG93XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgaWYgKHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy9Nb3ZlIG1pZGRsZSBlbGVtZW50IHRvIHRvIHRoZSByaWdodFxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgzNjVweClcIjtcclxuXHJcbiAgICAgIC8vTW92ZSBsZWZ0IGVsZW1lbnQgdG8gdGhlIHJpZ2h0XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMHB4KVwiO1xyXG5cclxuICAgICAgLy9EaXNwbGF5IHRoZSBuZXh0IGVsZW1lbnQgZm9yIHNsaWRlc2hvd1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgICAvL01vdmUgaW4gbmV3IGVsZW1lbnRcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTM2NXB4KVwiO1xyXG4gICAgICBpZiAodGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIk1FRElVTVwiKSB7XHJcbiAgICAgIC8vSGlkZSB0aGUgbGFzdCBlbGVtZW50IGluIHNsaWRlc2hvd1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kXS5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kXS5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmRdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kICsgMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vTW92ZSBsZWZ0IGVsZW1lbnQgdG8gdGhlIHJpZ2h0XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0XS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTgyLjVweClcIjtcclxuXHJcbiAgICAgIC8vRGlzcGxheSB0aGUgbmV4dCBlbGVtZW50IGZvciBzbGlkZXNob3dcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xyXG5cclxuICAgICAgLy9Nb3ZlIGluIG5ldyBlbGVtZW50XHJcbiAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0xODIuNXB4KVwiO1xyXG4gICAgICBpZiAodGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIlNNQUxMXCIpIHtcclxuICAgICAgLy9IaWRlIHRoZSBmaXJzdCBlbGVtZW50IGluIHNsaWRlc2hvd1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uc3R5bGUub3BhY2l0eSA9IFwiMCVcIjtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZF0uc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZHNJbmR4RW5kXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICBpZiAodGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRzSW5keEVuZCArIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkc0luZHhFbmQgKyAxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL01vdmUgZWxlbWVudCB0byByaWdodFxyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDE4Mi41cHgpXCI7XHJcblxyXG4gICAgICAvL01vdmUgZWxlbWVudCB0byBjZW50ZXJcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMHB4KVwiO1xyXG5cclxuICAgICAgLy9EaXNwbGF5IHRoZSBuZXh0IGVsZW1lbnQgZm9yIHNsaWRlc2hvd1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xyXG4gICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDFdLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAxXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcblxyXG4gICAgICBpZiAodGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRzW3RoaXMuY2FyZEluZHhTdGFydCAtIDJdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1t0aGlzLmNhcmRJbmR4U3RhcnQgLSAyXS5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbdGhpcy5jYXJkSW5keFN0YXJ0IC0gMl0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vSW5jcmVtZW50IGluZGV4IGNvdW50ZXJcclxuICAgIHRoaXMuY2FyZEluZHhTdGFydC0tO1xyXG4gICAgdGhpcy5jYXJkc0luZHhFbmQtLTtcclxuICAgIHRoaXMudHVybi0tO1xyXG4gICAgdGhpcy5jYXJkQ291bnRlci0tO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEJ0bkV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgLy9FdmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBuZXh0IGFuZCBwcmV2aW91cyBidXR0b25zXHJcbiAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMubmV4dFNsaWRlKCk7XHJcbiAgICAgIHRoaXMuc2hvd0hpZGVTbGlkZVNob3dCdXR0b25zKCk7XHJcbiAgICAgIHRoaXMubnVtYmVyQXJyb3dUZXh0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5wcmV2U2xpZGUoKTtcclxuICAgICAgdGhpcy5zaG93SGlkZVNsaWRlU2hvd0J1dHRvbnMoKTtcclxuICAgICAgdGhpcy5udW1iZXJBcnJvd1RleHQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzaG93SGlkZVNsaWRlU2hvd0J1dHRvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5jYXJkSW5keFN0YXJ0ID09IDApIHtcclxuICAgICAgdGhpcy5wcmV2QnRuLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XHJcbiAgICAgIHRoaXMucHJldkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYXJkc0luZHhFbmQgPT0gdGhpcy5jYXJkcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMubmV4dEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIwJVwiO1xyXG4gICAgICB0aGlzLm5leHRCdG4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2QnRuLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3BhY2l0eVwiKTtcclxuICAgIHRoaXMubmV4dEJ0bi5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICB0aGlzLnByZXZCdG4ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgICB0aGlzLm5leHRCdG4ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbnVtYmVyQXJyb3dUZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIlNNQUxMXCIpIHtcclxuICAgICAgdGhpcy5udW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGAke3RoaXMuY2FyZENvdW50ZXIudG9TdHJpbmcoKX0gb2YgJHt0aGlzLmNhcmRzLmxlbmd0aC50b1N0cmluZygpfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm51bWJlckVsZW1lbnQuaW5uZXJUZXh0ID0gYFske3RoaXMuY2FyZENvdW50ZXIudG9TdHJpbmcoKX0uLiR7KFxyXG4gICAgICAgIHRoaXMuY2FyZENvdW50ZXIgK1xyXG4gICAgICAgIHRoaXMuY2FyZFNob3dRdWFudCAtXHJcbiAgICAgICAgMVxyXG4gICAgICApLnRvU3RyaW5nKCl9XSBvZiAke3RoaXMuY2FyZHMubGVuZ3RoLnRvU3RyaW5nKCl9YDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWJsaWMgb25SZXNpemVTaG93U3RhcnRpbmdFbGVtcygpIHtcclxuICAgIC8vc2NyZWVuIGhhcyByZWZyZXNoZWQuIGNvdW50ZXIgaXMgcmVzZXQgdG8gc3RhcnQuIGNhcmQgZWxlbWVudHMgbWF5IGJlXHJcbiAgICAvL2hpZGRlbiBmcm9tIHRoZSBkaXNwbGF5LCBkZXBlbmRpbmcgb24gd2hlbiB0aGUgcmVmcmVzaCBvY2N1cnJlZCwgc29cclxuICAgIC8vcmVzZXQgdGhlIHN0YXJ0aW5nIGVsZW1lbnRzIHRvIHZpc2libGVcclxuICAgIC8vU2hvdyBvdmVyZmxvdyBlbGVtZW50c1xyXG4gICAgaWYgKHRoaXMuY2FyZEluZHhTdGFydCA8IHRoaXMuY2FyZFNob3dRdWFudCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmNhcmRzSW5keEVuZDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc1tpXS5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIxXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93U2l6ZSA9PSBcIlNNQUxMXCIpIHtcclxuICAgICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDBweClcIjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiTEFSR0VcIikge1xyXG4gICAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwcHgpXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiei1pbmRleFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZU92ZXJmbG93RWxlbWVudHMoKSB7XHJcbiAgICAvL0hpZGUgb3ZlcmZsb3cgZWxlbWVudHNcclxuICAgIGlmICh0aGlzLmNhcmRJbmR4U3RhcnQgPCB0aGlzLmNhcmRTaG93UXVhbnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuY2FyZHMubGVuZ3RoIC0gMTsgaSA+IHRoaXMuY2FyZHNJbmR4RW5kOyBpLS0pIHtcclxuICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbaV0uc3R5bGUub3BhY2l0eSA9IFwiMCVcIjtcclxuICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBpZiAodGhpcy53aW5kb3dTaXplID09IFwiU01BTExcIikge1xyXG4gICAgICAgICAgdGhpcy5jYXJkc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMHB4KVwiO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLndpbmRvd1NpemUgPT0gXCJNRURJVU1cIikge1xyXG4gICAgICAgICAgdGhpcy5jYXJkc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTgyLjVweClcIjtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhcmRzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgzNjVweClcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jYXJkc1swXS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV3Q29udGFpbmVyTWFya3VwKCkge1xyXG4gICAgY29uc3QgbmV3Q29udGFpbmVyU3R5bGVzID0gKCkgPT4ge1xyXG4gICAgICAvL0NvbnRhaW5lciBzdHlsZXNcclxuICAgICAgc2xpZGVTaG93U2xpZGVzLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNjb250YWluZXJcIik7XHJcbiAgICAgIHNsaWRlU2hvd1NsaWRlcy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICBzbGlkZVNob3dTbGlkZXMuc3R5bGUuaGVpZ2h0ID0gXCIzMmVtXCI7XHJcbiAgICAgIHNsaWRlU2hvd1NsaWRlcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIHNsaWRlU2hvd1NsaWRlcy5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIH07XHJcblxyXG4gICAgLy9CdWlsZCB0aGUgbWFya3VwIG5lZWRlZCBmb3IgdGhlIHNsaWRlc2hvd1xyXG4gICAgLy9BZGQgY2FyZHMgdG8gY29udGFpbmVyXHJcbiAgICBsZXQgc2xpZGVTaG93U2xpZGVzID0gdGhpcy5zbGlkZVNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICBmb3IgKGxldCBjYXJkIG9mIHRoaXMuY2FyZHMpIHtcclxuICAgICAgbGV0IHRlbXAgPSBjYXJkO1xyXG4gICAgICBzbGlkZVNob3dTbGlkZXMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRlbXApO1xyXG4gICAgICBuZXdDb250YWluZXJTdHlsZXMoKTtcclxuICAgIH1cclxuICAgIHNsaWRlU2hvd1NsaWRlcy5jbGFzc0xpc3QuYWRkKGAke3RoaXMud2luZG93U2l6ZX1gKTtcclxuICAgIHJldHVybiBzbGlkZVNob3dTbGlkZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5ld0Fycm93c01hcmt1cCgpIHtcclxuICAgIC8vQWRkIGxlZnQgYW5kIHJpZ2h0IGJ1dHRvbnNcclxuICAgIGxldCBzbGlkZXNob3didG5zID0gdGhpcy5zbGlkZVNob3dDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcblxyXG4gICAgLy9MZWZ0IHNsaWRlc2hvdyBidG5cclxuICAgIGxldCBwcmV2aW91c3NsaWRlc2hvd2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcmV2aW91c3NsaWRlc2hvd2J0bi5jbGFzc0xpc3QuYWRkKFwic2xpZGVzaG93UHJldlwiKTtcclxuICAgIHByZXZpb3Vzc2xpZGVzaG93YnRuLmlubmVyVGV4dCA9IFwi4p2uXCI7XHJcbiAgICBzbGlkZXNob3didG5zLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBwcmV2aW91c3NsaWRlc2hvd2J0bik7XHJcblxyXG4gICAgLy9VcGRhdGUgc2xpZGVzaG93IG9iamVjdFxyXG4gICAgdGhpcy5wcmV2QnRuID0gcHJldmlvdXNzbGlkZXNob3didG47XHJcblxyXG4gICAgLy9SaWdodCBzbGlkZXNob3cgYnRuXHJcbiAgICBsZXQgbmV4dHNsaWRlc2hvd2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBuZXh0c2xpZGVzaG93YnRuLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXNob3dOZXh0XCIpO1xyXG4gICAgbmV4dHNsaWRlc2hvd2J0bi5pbm5lclRleHQgPSBcIuKdr1wiO1xyXG4gICAgc2xpZGVzaG93YnRucy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgbmV4dHNsaWRlc2hvd2J0bik7XHJcbiAgICBzbGlkZXNob3didG5zLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcbiAgICAvL1VwZGF0ZSBzbGlkZXNob3cgb2JqZWN0XHJcbiAgICB0aGlzLm5leHRCdG4gPSBuZXh0c2xpZGVzaG93YnRuO1xyXG5cclxuICAgIHJldHVybiBzbGlkZXNob3didG5zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuZXdOdW1iZXJFbGVtZW50KCkge1xyXG4gICAgLy9OdW1iZXIgZWxlbWVudFxyXG4gICAgdGhpcy5udW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICB0aGlzLm51bWJlckFycm93VGV4dCgpO1xyXG4gICAgdGhpcy5uZXh0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHRoaXMubnVtYmVyRWxlbWVudCk7XHJcbiAgICB0aGlzLm51bWJlckVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcbiAgICB0aGlzLm51bWJlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgdGhpcy5udW1iZXJFbGVtZW50LnN0eWxlLmFsaWduQ29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICB0aGlzLm51bWJlckVsZW1lbnQuc3R5bGUubWFyZ2luSW5saW5lID0gXCIxLjVyZW1cIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Jbml0U2V0dXBDYXJkUG9zaXRpb24oKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMud2luZG93U2l6ZSkge1xyXG4gICAgICBjYXNlIFwiU01BTExcIjpcclxuICAgICAgICAvL3NtYWxsIHdpbmRvdyBzaXplIGxvZ2ljXHJcbiAgICAgICAgdGhpcy5jYXJkc1sxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTgyLjVweClcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1sxXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIk1FRElVTVwiOlxyXG4gICAgICAgIC8vbWVkaXVtIHdpbmRvdyBzaXplIGxvZ2ljXHJcbiAgICAgICAgdGhpcy5jYXJkc1swXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTE4Mi41cHgpXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1sxXS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzFdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxODIuNXB4KVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzJdLnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkc1syXS5jaGlsZHJlblsxXS5jaGlsZHJlblszXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkxBUkdFXCI6XHJcbiAgICAgICAgLy9sYXJnZSB3aW5kb3cgc2l6ZSBsb2dpY1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zNjVweClcIjtcclxuICAgICAgICB0aGlzLmNhcmRzWzFdLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbMl0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1syXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMzY1cHgpXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkc1szXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbM10uc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZHNbM10uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRzWzNdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTY3JlZW4gc2l6ZSBwcm9wZXJ0eSBub3Qgc2V0IG9uIHNsaWRlc2hvdy5cIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG4vKiogVGhpcyBvYmplY3QgY3JlYXRlcyBhbiBhcnJheSBvZiBkaXYgZWxlbWVudHMgZnJvbSBwb3J0IG51bWJlciBpbmZvcm1hdGlvbiovXHJcbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmRDYXJkRWxlbXMge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIHdpZGdldCBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgd2lkZ2V0Y291bnQ6IG51bWJlciA9IDA7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyB3aXRoaW4gdGhlIHdpZGdldCBpbnN0YW50aWF0ZWQgW2ZsYXNoY2FyZHNdICovXHJcbiAgcHVibGljIHN0YXRpYyB0b3RhbGZsYXNoY2FyZHM6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG1fZmxhc2hjYXJkc0FycjogSFRNTExJRWxlbWVudFtdID0gW107XHJcbiAgcHVibGljIGZsYXNoY2FyZHNjb3VudDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIG1fcG9ydEluZm9NYXA6IE1hcDxhbnksIHN0cmluZz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvcnRudW1iZXJzTWFwOiBNYXA8YW55LCBzdHJpbmc+KSB7XHJcbiAgICB0aGlzLm1fcG9ydEluZm9NYXAgPSBwb3J0bnVtYmVyc01hcDtcclxuICAgIGNvbnN0IG1hcEl0ZXIgPSB0aGlzLm1fcG9ydEluZm9NYXAua2V5cygpO1xyXG4gICAgRmxhc2hjYXJkQ2FyZEVsZW1zLndpZGdldGNvdW50Kys7XHJcblxyXG4gICAgdGhpcy5tX3BvcnRJbmZvTWFwLmZvckVhY2gocG9ydCA9PiB7XHJcbiAgICAgIC8vIENyZWF0ZSBsaXN0IGVsZW1lbnRcclxuICAgICAgbGV0IGZsYXNoY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgLy9UT0RPOiBsZXQgZmxhc2hjYXJkID0gbmV3IEdyb3dpbmdDYXJkRWxlbWVudCgpO1xyXG4gICAgICAvL1VuYWJsZSB0byBpbnN0YW50aWF0ZSBsaSBlbGVtZW50IGFzIGdyb3dpbmcgY2FyZCBkdWUgdG8gRE9NIHVuYXZhbGFibGUgLS0+IHJlcXVpcmVzIHNoYWRvd0RPTSBtYW5pcHVsYXRlXHJcblxyXG4gICAgICAvLyBQb3B1bGF0ZSBlbGVtZW50IGZvciBwYWdlIHVzZVxyXG4gICAgICBjb25zdCBpbm5lciA9IGZsYXNoY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgY29uc3QgZmxpcGZyb250ID0gaW5uZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgIGNvbnN0IGZsaXBiYWNrID0gaW5uZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgIGxldCBnYW1lQ2FyZFNwYW4gPSBmbGlwZnJvbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIikpO1xyXG4gICAgICBsZXQgZ2FtZUNhcmRCYWNrU3BhbiA9IGZsaXBiYWNrLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpKTtcclxuICAgICAgZmxhc2hjYXJkLmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmRcIiwgXCJnYW1lQ2FyZFwiKTtcclxuICAgICAgaW5uZXIuY2xhc3NMaXN0LmFkZChcImlubmVyXCIsIFwidmVydGljYWxcIik7XHJcbiAgICAgIGZsaXBmcm9udC5jbGFzc0xpc3QuYWRkKFwiY2FyZEZyb250XCIpO1xyXG4gICAgICBmbGlwYmFjay5jbGFzc0xpc3QuYWRkKFwiY2FyZEJhY2tcIiwgXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgZ2FtZUNhcmRTcGFuLmlubmVyVGV4dCA9IGBQb3J0IyAke21hcEl0ZXIubmV4dCgpLnZhbHVlfWA7XHJcbiAgICAgIGdhbWVDYXJkQmFja1NwYW4uaW5uZXJUZXh0ID0gYCR7cG9ydH1gO1xyXG5cclxuICAgICAgdGhpcy5mbGFzaGNhcmRzY291bnQrKztcclxuICAgICAgRmxhc2hjYXJkQ2FyZEVsZW1zLnRvdGFsZmxhc2hjYXJkcysrO1xyXG5cclxuICAgICAgLy8gQWRkIGRpdiB0byBmbGFzaGNhcmQgaW5zdGFuY2VcclxuICAgICAgdGhpcy5tX2ZsYXNoY2FyZHNBcnIucHVzaChmbGFzaGNhcmQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5pbXBvcnQgV2ViQml0IGZyb20gXCIuL3dlYkJpdFwiO1xyXG5pbXBvcnQgUldCQ2FyZCBmcm9tIFwiLi9yd2JDYXJkXCI7XHJcbmltcG9ydCBSd2JFcnJvciwgeyBSd2JSZWZlcmVuY2VFcnJvciB9IGZyb20gXCIuL3J3YkVycm9yQnVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21XZWJCaXRzIHtcclxuICBwdWJsaWMgY2FyZHNTZWN0aW9uOiBIVE1MRGl2RWxlbWVudDtcclxuICBwdWJsaWMgY2FyZHNEYXRhOiBIVE1MRGl2RWxlbWVudFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYXJkc1NlY3Rpb246IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkLCBjYXJkc0RhdGE6IGFueSkge1xyXG4gICAgaWYgKHR5cGVvZiBjYXJkc1NlY3Rpb24gPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcmRzU2VjdGlvbiA9IGNhcmRzU2VjdGlvbjtcclxuICAgIHRoaXMuY2FyZHNEYXRhID0gY2FyZHNEYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyZWF0ZSBzZWN0aW9ucyB0byBhcHBlbmQgdG8gbWFpblxyXG4gICAqXHJcbiAgICogICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FyZHNcIj5cclxuICAgKiAgICAgICAgICAgIDxoMj5BcmJpdHJhcnkgQXJ0aWNsZXM6PC9oMj5cclxuICAgKiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX2NvbHVtbnNcIj5cclxuICAgKiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAqICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2VjdGlvblRpdGxlIC0gaGVhZGluZyBzZWN0aW9uJ3MgdGl0bGUuXHJcbiAgICogQHBhcmFtIHNlY3Rpb25IZWFkaW5nSWQgLSBzZWN0aW9uIGhlYWRpbmcncyBpZCBhdHRyaWJ1dGUuXHJcbiAgICogQHBhcmFtIGNvbnRhaW5lclR5cGUgLSBzbGlkZXNob3csIGFjY29yZGlvbiwgb3IgZGVmYXVsdC5cclxuICAgKiBAcmV0dXJucyBIVE1MRGl2RWxlbWVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYnVpbGRDYXJkQ29udGFpbmluZ1NlY3Rpb24oXHJcbiAgICBzZWN0aW9uVGl0bGU6IHN0cmluZyxcclxuICAgIHNlY3Rpb25IZWFkaW5nSWQ6IHN0cmluZyxcclxuICAgIGNvbnRhaW5lclR5cGU/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGxldCBwYWdlTWFpbjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwYWdlTWFpbiA9IFJ3YkVycm9yLmNoZWNrU2VsZWN0ZWRFbGVtZW50KFwiTWFpblJXQlwiLCBcIm1haW5cIiwgdHJ1ZSwgdHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAocGFnZU1haW4gPT0gbnVsbCB8fCBwYWdlTWFpbi5ub2RlTmFtZSAhPT0gXCJNQUlOXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBsZXQgc2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRpbmcpO1xyXG4gICAgY2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpO1xyXG4gICAgcGFnZU1haW4uYXBwZW5kKGNhcmRTZWN0aW9uKTtcclxuXHJcbiAgICAvLyBBZGQgZGF0YSBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXNcclxuICAgIHN3aXRjaCAoY29udGFpbmVyVHlwZSkge1xyXG4gICAgICBjYXNlIFwic2xpZGVzaG93XCI6XHJcbiAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRfY29sdW1uc1wiLCBcImNhcmRzbGlkZXNob3dcIiwgXCJncmlkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiYWNjb3JkaW9uXCI6XHJcbiAgICAgICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRfY29sdW1uc1wiLCBcImNhcmRhY2NvcmRpb25cIiwgXCJncmlkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkX2NvbHVtbnNcIiwgXCJncmlkXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNhcmRzXCIpO1xyXG4gICAgc2VjdGlvbkhlYWRpbmcuaW5uZXJUZXh0ID0gYCR7c2VjdGlvblRpdGxlfWA7XHJcbiAgICBzZWN0aW9uSGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzZWN0aW9uSGVhZGluZ0lkKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZHNDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKiogVGhpcyBmdW5jdGlvbiBtYXBzIGNhcmQgZGF0YSB0byBIVE1MIGVsZW1lbnRzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2FyZHNEYXRhXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGJ1aWxkUndiQ2FyZHMoY2FyZHNEYXRhOiBXZWJCaXRbXSkge1xyXG4gICAgaWYgKGNhcmRzRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgIG5ldyBSd2JSZWZlcmVuY2VFcnJvcihcImVtcHR5QXJyYXlcIiwgXCJjYXJkcyBkYXRhIGFycmF5IG1heSBiZSBudWxsXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBJdGVyYXRlIGVhY2ggY2FyZCBpbiB0aGUgYXJyYXkuIEJ1aWxkIHRoZSBjYXJkIGVsZW1lbnRzIGFuZCBhZGQgdGhlIGRhdGFcclxuICAgIHJldHVybiBjYXJkc0RhdGEubWFwKChhcnRpY2xlOiBXZWJCaXQpID0+IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobmV3IFJXQkNhcmQoYXJ0aWNsZSkpLmNhcmQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYnVpbGRSd2JJbnRyb2R1Y3Rpb24oKSB7XHJcbiAgICBsZXQgaW50cm9kdWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBsZXQgVGl0bGUgPSBpbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpKTtcclxuICAgIGxldCBoMiA9IGludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIikpO1xyXG4gICAgbGV0IHBhcmExID0gaW50cm9kdWN0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpKTtcclxuICAgIGxldCBwYXJhMiA9IGludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSk7XHJcbiAgICBUaXRsZS5jbGFzc0xpc3QuYWRkKFwiVGl0bGVcIik7XHJcbiAgICBUaXRsZS5pbm5lclRleHQgPSBcIkhvbWUgfCBBcmJpdHJhcnkgV2ViIEJpdHNcIjtcclxuICAgIGgyLmlubmVyVGV4dCA9IFwiTmV3IHRvIHRoZSBXZWI/XCI7XHJcbiAgICBwYXJhMS5pbm5lclRleHQgPVxyXG4gICAgICBcIklmIHlvdSBhcmUgbmV3IHRvIHdlYiBkZXZlbG9wbWVudCwgdGhlcmUgYXJlIGlubnVtZXJvdXMgZW51bWVyYXRpb25zIG9mIHN0dWZmIGFuZCB0aGluZ3MgdGhlIFdvcmxkIFdpZGUgV2ViIG9mZmVycyB0aGF0IHlvdSBkb24ndCBrbm93LlwiO1xyXG4gICAgcGFyYTIuaW5uZXJUZXh0ID0gXCJZb3UgbWF5IHdhbnQgdG8gc3RhcnQgYnkgY2xhaW1pbmcgYSBzdGFrZSB0byBhIGRvbWFpbiBuYW1lLlwiO1xyXG5cclxuICAgIHJldHVybiBpbnRyb2R1Y3Rpb247XHJcbiAgfVxyXG59XHJcbiIsIi8vLS1Db3B5cmlnaHQgKGMpIDIwMjMtMjAyNiBSb2JlcnQgQS4gSG93ZWxsXHJcblxyXG5pbXBvcnQgQXR0cmlidXRpb25MaW5rIGZyb20gXCIuL2F0dHJpYnV0aW9uTGlua1wiO1xyXG5pbXBvcnQgV2ViQml0IGZyb20gXCIuL3dlYkJpdFwiO1xyXG5pbXBvcnQgeyBSd2JDYXJkRWxlbWVudHMgfSBmcm9tIFwiLi93aWRnZXRNYXJrdXBFbGVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUldCQ2FyZCB7XHJcbiAgLyoqXHJcbiAgICogQ2FyZCBlbGVtZW50cyB0byBkaXNwbGF5IGFuIGljb24gcGljdHVyZSBhbmQgY2FyZCBib2R5LiBBbiBpbWFnZSwgdGhlIGltYWdlIHRvcCwgdGhlIGNhcmQgYm9keS5cclxuICAgKi9cclxuICBwdWJsaWMgY2FyZDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByd2JDYXJkRWxlbWVudHM6IFJ3YkNhcmRFbGVtZW50cztcclxuICBwcml2YXRlIGFydGljbGU6IFdlYkJpdDtcclxuXHJcbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogV2ViQml0KSB7XHJcbiAgICB0aGlzLmFydGljbGUgPSBhcnRpY2xlO1xyXG4gICAgdGhpcy5jYXJkID0gdGhpcy5idWlsZFJ3YkNhcmRNYXJrdXAoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBNYXAgV2ViQml0IGRhdGEgdG8gYSBjYXJkIGVhY2hcclxuICAgKlxyXG4gICAqICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICogICAgICAgICAgIDxkaXY+XHJcbiAgICogICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIGFydGljbGU9XCJcIj5cclxuICAgKiAgICAgICAgICAgPC9kaXY+XHJcbiAgICogICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkQm9keVwiPlxyXG4gICAqICAgICAgICAgICAgICAgPGgzPjwvaDM+XHJcbiAgICogICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICogICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PC9hPlxyXG4gICAqICAgICAgICAgICA8L2Rpdj5cclxuICAgKiAgICAgICA8L2Rpdj5cclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkUndiQ2FyZE1hcmt1cCgpIHtcclxuICAgIGxldCB3ZWJCaXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMucndiQ2FyZEVsZW1lbnRzID0ge1xyXG4gICAgICBjYXJkSW1nOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxyXG4gICAgICBjYXJkSW1nVG9wOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICBjYXJkQm9keTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgIH07XHJcbiAgICBsZXQgY2FyZEJvZHlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgbGV0IGNhcmRCb2R5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IGNhcmRCb2R5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEltZ1RvcC5hcHBlbmRDaGlsZCh0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nKTtcclxuICAgIHRoaXMucndiQ2FyZEVsZW1lbnRzLmNhcmRCb2R5LmFwcGVuZENoaWxkKGNhcmRCb2R5SGVhZGluZyk7XHJcbiAgICB0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkQm9keS5hcHBlbmRDaGlsZChjYXJkQm9keVBhcmEpO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkuYXBwZW5kQ2hpbGQoY2FyZEJvZHlMaW5rKTtcclxuXHJcbiAgICAvLyBBZGQgY2FyZCBkYXRhIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnR5IHZhbHVlc1xyXG4gICAgd2ViQml0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgIHdlYkJpdENhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGhpcy5hcnRpY2xlLmlkfWApO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkuY2xhc3NMaXN0LmFkZChcImNhcmRCb2R5XCIpO1xyXG4gICAgdGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5hcnRpY2xlLmNhcmRJbWFnZSk7XHJcbiAgICB0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCB0aGlzLmFydGljbGUuY2FyZEltYWdlQWx0KTtcclxuICAgIHRoaXMucndiQ2FyZEVsZW1lbnRzLmNhcmRJbWcuc2V0QXR0cmlidXRlKFwiQXJ0aWNsZVwiLCB0aGlzLmFydGljbGUuYXJ0aWNsZU51bWJlci50b1N0cmluZygpKTtcclxuICAgIGNhcmRCb2R5TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMuYXJ0aWNsZS5hcnRpY2xlTGluayk7XHJcbiAgICBjYXJkQm9keUhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5hcnRpY2xlLm5hbWU7XHJcbiAgICBjYXJkQm9keVBhcmEudGV4dENvbnRlbnQgPSB0aGlzLmFydGljbGUuZGVzY3JpcHRpb247XHJcbiAgICBjYXJkQm9keUxpbmsudGV4dENvbnRlbnQgPSBcIkdvIHRvIFBhZ2VcIjtcclxuXHJcbiAgICAvLyBJbWFnZSBhdHRyaWJ1dGlvbiBtYXkgYmUgbmVlZGVkIGZvciB0aGUgaW1hZ2UgdXNlZFxyXG4gICAgLy8gQXR0cmlidXRpb24gZGF0YSBpcyBpbXBvcnRlZCBhcyAnYXR0cmxpbmtzJyBzaWduYXR1cmUgcGFyYW1ldGVyXHJcbiAgICBpZiAodGhpcy5hcnRpY2xlLmxpbmtBdHRyaWJ1dGlvbikge1xyXG4gICAgICB0aGlzLmJ1aWxkUndiQ2FyZEF0dHJpYnV0aW9uUGFuZWwodGhpcy5yd2JDYXJkRWxlbWVudHMsIHRoaXMuYXJ0aWNsZS5saW5rQXR0cmlidXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBjYXJkIGlzIFdlYkJpdFxyXG4gICAgLy8gQWRkIHRoZSBtYXJrdXAgdG8gdGhlIGNvbnRhaW5pbmcgZWxlbWVudFxyXG4gICAgd2ViQml0Q2FyZC5hcHBlbmRDaGlsZCh0aGlzLnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nVG9wKTtcclxuICAgIHdlYkJpdENhcmQuYXBwZW5kQ2hpbGQodGhpcy5yd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkpO1xyXG5cclxuICAgIHJldHVybiB3ZWJCaXRDYXJkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGltYWdlIGF0dHJpYnV0aW9uLCB0aGUgaW1hZ2UgaWQgYW5kIGFydGljbGUgaWQgd2lsbCBtYXRjaCxcclxuICAgKiBvdGhlcndpc2UgdGhlIGRhdGEgaXNuJ3QgZW50ZXJlZCwgY2F1c2luZyBhIG1pc3NcclxuICAgKlxyXG4gICAqICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmRcIj48IS0tY2FyZCBpbWFnZSBwYW5lbC0tPlxyXG4gICAqICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxyXG4gICAqICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZEZyb250XCI+XHJcbiAgICogICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIGFydGljbGU9XCJcIj5cclxuICAgKiAgICAgICAgICAgPC9kaXY+XHJcbiAgICogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRCYWNrXCI+XHJcbiAgICogICAgICAgICAgICAgICAgICAgIDxoMz48L2gzPlxyXG4gICAqICAgICAgICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICogICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgYXJ0aWNsZT1cIlwiIGNsYXNzPVwiaW1nU21hbGwgaW1nUFRSXCI+XHJcbiAgICogICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICogICAgICAgICAgIDwvZGl2PlxyXG4gICAqICAgICAgIDwvZGl2PjwhLS1lbmQgY2FyZCBpbWFnZSBwYW5lbC0tPlxyXG4gICAqIEBwYXJhbSByd2JDYXJkRWxlbWVudHMgQ2FyZCBlbGVtZW50cyB0byBkaXNwbGF5IGFuIGljb24gcGljdHVyZSBhbmQgY2FyZCBib2R5LiBBbiBpbWFnZSwgdGhlIGltYWdlIHRvcCwgdGhlIGNhcmQgYm9keS5cclxuICAgKiBAcGFyYW0gbGluayBBdHRyaWJ1dGlvbiBsaW5rXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBidWlsZFJ3YkNhcmRBdHRyaWJ1dGlvblBhbmVsKHJ3YkNhcmRFbGVtZW50czogUndiQ2FyZEVsZW1lbnRzLCBsaW5rOiBBdHRyaWJ1dGlvbkxpbmspIHtcclxuICAgIGlmIChyd2JDYXJkRWxlbWVudHMuY2FyZEltZy5nZXRBdHRyaWJ1dGUoXCJBcnRpY2xlXCIpID09PSBsaW5rLmFydGljbGVJZC50b1N0cmluZygpKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBpbWFnZSBiYWNrIHBhbmVsIGVsZW1lbnRzIGFuZCBhZGQgdGhlIGRhdGFcclxuICAgICAgLy8gUmVkZWZpbmUgY2FyZCBpbWFnZSBwYW5lbCBhcyBhIGZsaXAgcGFuZWxcclxuICAgICAgY29uc3QgQ0FSRElOTkVSID0gcndiQ2FyZEVsZW1lbnRzLmNhcmRJbWdUb3AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgIGNvbnN0IENBUkRGUk9OVCA9IENBUkRJTk5FUi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgQ0FSREZST05ULmFwcGVuZENoaWxkKHJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nKTsgLy8gbW92ZSBpbWFnZSB3aXRoaW4gY2FyZCBmcm9udCBkaXZpc29yXHJcbiAgICAgIGxldCBzbWFsbEltZyA9IDxIVE1MSW1hZ2VFbGVtZW50PnJ3YkNhcmRFbGVtZW50cy5jYXJkSW1nLmNsb25lTm9kZShmYWxzZSk7XHJcbiAgICAgIGNvbnN0IENBUkRCQUNLID0gQ0FSRElOTkVSLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICBjb25zdCBCQUNLSEVBRElORyA9IENBUkRCQUNLLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKSk7XHJcbiAgICAgIENBUkRCQUNLLmFwcGVuZENoaWxkKHNtYWxsSW1nKTtcclxuICAgICAgY29uc3QgQkFDS1BBUkEgPSBDQVJEQkFDSy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSk7XHJcbiAgICAgIGNvbnN0IEFUVFJJQlVURUxJTksgPSByd2JDYXJkRWxlbWVudHMuY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpOyAvL2FwcGVuZCB0byBmcm9udCBwYW5lbFxyXG5cclxuICAgICAgLy8gQWRkIGZsaXAtcGFuZWwgZGF0YSBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXNcclxuICAgICAgcndiQ2FyZEVsZW1lbnRzLmNhcmRJbWdUb3AuY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZFwiKTtcclxuICAgICAgQ0FSRElOTkVSLmNsYXNzTGlzdC5hZGQoXCJpbm5lclwiKTtcclxuICAgICAgQ0FSREZST05ULmNsYXNzTGlzdC5hZGQoXCJjYXJkRnJvbnRcIik7XHJcbiAgICAgIHNtYWxsSW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdTbWFsbFwiLCBcImltZ1BUUlwiKTtcclxuICAgICAgQ0FSREJBQ0suY2xhc3NMaXN0LmFkZChcImNhcmRCYWNrXCIpO1xyXG4gICAgICBBVFRSSUJVVEVMSU5LLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGVcIik7XHJcbiAgICAgIEJBQ0tIRUFESU5HLnRleHRDb250ZW50ID0gbGluay5hdHRyaWJ1dGVkT3duZXI7XHJcbiAgICAgIEJBQ0tQQVJBLnRleHRDb250ZW50ID0gbGluay5pbm5lclRleHQ7XHJcbiAgICAgIEFUVFJJQlVURUxJTksuaHJlZiA9IGxpbmsuaFJlZmVyZW5jZTtcclxuICAgICAgQVRUUklCVVRFTElOSy50aXRsZSA9IGxpbmsudGl0bGU7XHJcbiAgICAgIEFUVFJJQlVURUxJTksudGV4dENvbnRlbnQgPSBsaW5rLmF0dHJpYnV0ZWRPd25lcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gcmVjb3JkIHJlZmVyZW5jZSBlcnJvcnMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ3YkVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgUndiRXJyb3IuY291bnQrKztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGFuIGVsZW1lbnQgaXMgbnVsbCB1c2luZyBxdWVyeVNlbGVjdG9yKClcclxuICAgKlxyXG4gICAqICAgICAgIHRyeSB7XHJcbiAgICogICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuICAgKiAgICAgICB9XHJcbiAgICogICAgICAgY2F0Y2gge1xyXG4gICAqICAgICAgICAgICAvL2Z1bmN0aW9uIGV4Y2VwdGlvbiBoYW5kbGluZ1xyXG4gICAqICAgICAgIH1cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lIC0gQSBuYW1lIGZvciB0aGUgY29tcG9uZW50IGluIHVzZS5cclxuICAgKiBAcGFyYW0gY3NzUXVlcnkgLSBBIGNzcyBzdHJpbmcuXHJcbiAgICogQHBhcmFtIGxvZ01lc3NhZ2UgLSBDaG9vc2UgdG8gbG9nIGEgbWVzc2FnZSB0byBjb25zb2xlLlxyXG4gICAqIEBwYXJhbSBzdXByZXNzRXhjZXB0aW9uIC0gQ2hvb3NlIHRvIHN1cHJlc3MgdGhlIGV4Y2VwdGlvbiBsb2cuXHJcbiAgICogQHJldHVybnMgSFRNTEVsZW1lbnQgZnJvbSBxdWVyeVNlbGVjdG9yKClcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrU2VsZWN0ZWRFbGVtZW50KFxyXG4gICAgY29tcG9uZW50TmFtZTogc3RyaW5nLFxyXG4gICAgY3NzUXVlcnk6IHN0cmluZyxcclxuICAgIGxvZ01lc3NhZ2U/OiBib29sZWFuLFxyXG4gICAgc3VwcmVzc0V4Y2VwdGlvbj86IGJvb2xlYW5cclxuICApIHtcclxuICAgIGxldCBlbGVtOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICBsZXQgbG9nRXJyTXNzZzogYm9vbGVhbiA9IHRydWU7IC8vTG9nIG1lc3NhZ2Ugb3B0aW9uIGRlZmF1bHRcclxuICAgIGlmICghbG9nTWVzc2FnZSkgbG9nRXJyTXNzZyA9IGxvZ01lc3NhZ2U7XHJcbiAgICBsZXQgc3VwcmVzc0V4Y3B0OiBib29sZWFuID0gZmFsc2U7IC8vU3VwcmVzcyBtZXNzYWdlIG9wdGlvbiBkZWZhdWx0XHJcbiAgICBpZiAoc3VwcmVzc0V4Y2VwdGlvbikgc3VwcmVzc0V4Y3B0ID0gdHJ1ZTtcclxuICAgIGxldCBxdWVyeTogc3RyaW5nID0gYCR7Y3NzUXVlcnl9YDtcclxuXHJcbiAgICAvLyBBZGQgZGljdGlvbmFyeSB3aWRnZXQgaWYgYW4gZWxlbWVudCB3aXRoIHRoYXQgY2xhc3MgaXMgb24gYSBwYWdlXHJcbiAgICB0cnkge1xyXG4gICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgT2JqZWN0LmNyZWF0ZShuZXcgUndiUmVmZXJlbmNlRXJyb3IoXCJHZXRFbGVtZW50XCIsIGBDb3VsZCBub3QgZ2V0IGVsZW1lbnQ6ICcke3F1ZXJ5fSdgKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbSA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2dFcnJNc3NnKSBjb25zb2xlLndhcm4oYCVjTm8gZWxlbWVudCBmb3VuZCB3aXRoIHF1ZXJ5OiAke3F1ZXJ5fS5gLCBcImNvbG9yOiBvcmFuZ2U7XCIpO1xyXG4gICAgICBpZiAoIXN1cHJlc3NFeGNwdClcclxuICAgICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfU51bGxSZWZlcmVuY2VgLCBgRWxlbWVudCBub3QgZm91bmRgKSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGlmIGxvY2FsIHN0b3JhZ2UgaXMgbnVsbC4gT3B0aW9uYWwgY2hvb3NlIHRvIGFsc28gY2hlY2sgaWYgbG9jYWwgc3RvcmFnZSBzdHJpbmcgaXMgZW1wdHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZSAtIEEgbmFtZSBmb3IgdGhlIGNvbXBvbmVudCBpbiB1c2UuXHJcbiAgICogQHBhcmFtIGtleSAtIFRoZSBrZXkncyBuYW1lIHlvdSdyZSBjaGVja2luZyBmb3IuXHJcbiAgICogQHBhcmFtIGNoZWNrRW1wdHlTdHJpbmcgLSBPcHRpb25hbCBwYXJhbWV0ZXIgdG8gY2hlY2sgZm9yIGVtcHR5IGtleS12YWx1ZS5cclxuICAgKiBAcGFyYW0gbG9nTWVzc2FnZSAtIENob29zZSB0byBsb2cgYSBtZXNzYWdlIHRvIGNvbnNvbGUuXHJcbiAgICogQHJldHVybnMgQm9vbGVhbiB0cnVlIG9yIGZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja0xvY2FsU3RvcmFnZUVxdWFsTnVsbChcclxuICAgIGNvbXBvbmVudE5hbWU6IHN0cmluZyxcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgY2hlY2tFbXB0eVN0cmluZz86IGJvb2xlYW4sXHJcbiAgICBsb2dNZXNzYWdlPzogYm9vbGVhblxyXG4gICkge1xyXG4gICAgbGV0IGxvZ01zc2c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKCFsb2dNZXNzYWdlKSBsb2dNc3NnID0gbG9nTWVzc2FnZTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YCkgPT0gbnVsbCkge1xyXG4gICAgICBpZiAobG9nTXNzZykgY29uc29sZS5pbmZvKGAlY05vIGxvY2FsIHN0b3JhZ2UgZm9yICR7Y29tcG9uZW50TmFtZX0uYCwgXCJjb2xvcjpwdXJwbGU7XCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjaGVja0VtcHR5U3RyaW5nKSByZXR1cm4gUndiRXJyb3IuY2hlY2tMb2NhbFN0b3JhZ2VOdWxsb3JFbXB0eShjb21wb25lbnROYW1lLCBrZXksIGxvZ01zc2cpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBpZiBsb2NhbCBzdG9yYWdlIGlzIG51bGwgb3IgZW1wdHkuXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBjb21wb25lbnQgaW4gdXNlLlxyXG4gICAqIEBwYXJhbSBrZXkgLSBUaGUga2V5J3MgbmFtZSB5b3UncmUgY2hlY2tpbmcgZm9yLlxyXG4gICAqIEBwYXJhbSBsb2dNZXNzYWdlIC0gQ2hvb3NlIHRvIGxvZyBhIG1lc3NhZ2UgdG8gY29uc29sZS5cclxuICAgKiBAcmV0dXJucyBCb29sZWFuIHRydWUgb3IgZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrTG9jYWxTdG9yYWdlTnVsbG9yRW1wdHkoY29tcG9uZW50TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgbG9nTWVzc2FnZT86IGJvb2xlYW4pIHtcclxuICAgIGxldCBsb2dNc3NnOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmICghbG9nTWVzc2FnZSkgbG9nTXNzZyA9IGxvZ01lc3NhZ2U7XHJcbiAgICBsZXQgdGVzdDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB0ZXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7a2V5fWApO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGdldCBsb2NhbCBzdG9yYWdlIGtleTogJHtrZXl9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGVzdCA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2dNc3NnKSBjb25zb2xlLndhcm4oYCVjTG9jYWwgc3RvcmFnZSBrZXkgbm90IGZvdW5kOiAke2tleX0uYCwgXCJjb2xvcjogeWVsbG93O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIpO1xyXG4gICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfVJlZmVyZW5jZUV4Y2VwdGlvbmAsIGBLZXkgbm90IGZvdW5kYCkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0ZXN0ID09IFwiXCIgfHwgdGVzdCA9PSBcIltdXCIpIHtcclxuICAgICAgaWYgKGxvZ01zc2cpXHJcbiAgICAgICAgY29uc29sZS53YXJuKGAlY0xvY2FsIHN0b3JhZ2UgdmFsdWUgaXMgZW1wdHkgZm9yIGtleTogJHtrZXl9YCwgXCJjb2xvcjogeWVsbG93O2ZvbnQtd2VpZ2h0OmJvbGQ7XCIpO1xyXG4gICAgICBPYmplY3QuY3JlYXRlKG5ldyBSd2JSZWZlcmVuY2VFcnJvcihgJHtjb21wb25lbnROYW1lfVJlZmVyZW5jZUV4Y2VwdGlvbmAsIGBWYWx1ZSBpcyBlbXB0eWApKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQ3JlYXRlIHRoaXMgb2JqZWN0IHRvIHN0b3JlIHJlZmVyZW5jZSBlcnJvciBkYXRhLiAqL1xyXG5leHBvcnQgY2xhc3MgUndiUmVmZXJlbmNlRXJyb3IgZXh0ZW5kcyBSZWZlcmVuY2VFcnJvciB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVmRXJyb3I6IFJlZmVyZW5jZUVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBSZWZlcmVuY2VFcnJvcih0aGlzLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy5yZWZFcnJvciA9IGVycjtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIGAlYzxSV0I+JWNFeGVjdXRpb24gZXhwZXJpZW5jZWQgYSByZWZlcmVuY2UgZXJyb3I6XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnJlZkVycm9yLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiUmVmZXJlbmNlRXJyb3IuY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gc3RvcmUgc3ludGF4IGVycm9yIGRhdGEuICovXHJcbmV4cG9ydCBjbGFzcyBSd2JTeW50YXhFcnJvciBleHRlbmRzIFN5bnRheEVycm9yIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYWdlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzeW50YXhFcnJvcjogU3ludGF4RXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLnBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBsZXQgZXJyID0gbmV3IFN5bnRheEVycm9yKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnN5bnRheEVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY0V4ZWN1dGlvbiBleHBlcmllbmNlZCBhIHN5bnRheCBlcnJvcjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMuc3ludGF4RXJyb3IsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JTeW50YXhFcnJvci5jb3VudCsrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ3YkRvbUV4Y2VwdGlvbiBleHRlbmRzIERPTUV4Y2VwdGlvbiB7XHJcbiAgLyoqQ291bnRzIHRoZSBudW1iZXIgb2Ygb2JqZWN0cyBpbnN0YW50aWF0ZWQgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICBwdWJsaWMgc3RhY2s6IGFueTtcclxuICBwdWJsaWMgcGFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZG9tRXJyb3I6IERPTUV4Y2VwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGVycm9yOiBhbnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuc3RhY2sgPSBlcnJvcjtcclxuICAgIHRoaXMucGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBlcnIgPSBuZXcgRE9NRXhjZXB0aW9uKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLmRvbUVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY0V4ZWN1dGlvbiBleHBlcmllbmNlZCBhIERPTSBlcnJvcjpcXG4lb1xcbiVjPC9SV0I+YCxcclxuICAgICAgXCJjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZDtcIixcclxuICAgICAgXCJjb2xvcjpyZWQ7XCIsXHJcbiAgICAgIHRoaXMuc3RhY2ssXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCJcclxuICAgICk7XHJcbiAgICBSd2JEb21FeGNlcHRpb24uY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSd2JJbnZhbGlkVmFsdWVFcnJvciBleHRlbmRzIFJhbmdlRXJyb3Ige1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIHN5bnRheEVycm9yOiBSYW5nZUVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5wYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgbGV0IGVyciA9IG5ldyBSYW5nZUVycm9yKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnN5bnRheEVycm9yID0gZXJyO1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYCVjPFJXQj4lY1ZhbHVlIG91dCBvZiByYW5nZSBleGNlcHRpb246XFxuJW9cXG4lYzwvUldCPmAsXHJcbiAgICAgIFwiY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7XCIsXHJcbiAgICAgIFwiY29sb3I6cmVkO1wiLFxyXG4gICAgICB0aGlzLnN5bnRheEVycm9yLFxyXG4gICAgICBcImNvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO1wiXHJcbiAgICApO1xyXG4gICAgUndiU3ludGF4RXJyb3IuY291bnQrKztcclxuICB9XHJcbn1cclxuIiwiLy8tLUNvcHlyaWdodCAoYykgMjAyMy0yMDI2IFJvYmVydCBBLiBIb3dlbGxcclxuXHJcbi8qKlxyXG4gKiBIVE1MIGxpbmsgZWxlbWVudCBkYXRhLiBVc2VkIHdpdGggYW5jaG9yIHRhZ3MuXHJcbiAqL1xyXG5jbGFzcyBSd2JMaW5rIHtcclxuICAvKipDb3VudHMgdGhlIG51bWJlciBvZiBvYmplY3RzIGluc3RhbnRpYXRlZCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgLyoqSFRNTCB0aXRsZSBhdHRyaWJ1dGUgKi9cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAvKipJbm5lciB0ZXh0IHN0cmluZyAqL1xyXG4gIHB1YmxpYyBpbm5lclRleHQ6IHN0cmluZztcclxuICAvKipUaGUgcGFnZSB0aGUgbGluayBpcyBhc3NvY2lhdGVkIHRvICovXHJcbiAgcHVibGljIHBhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgLyoqSFRNTCBocmVmIGF0dHJpYnV0ZSAqL1xyXG4gIHB1YmxpYyBoUmVmZXJlbmNlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGlubmVyVGV4dDogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nLCBoUmVmZXJlbmNlOiBzdHJpbmcpIHtcclxuICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLFxyXG4gICAgICAodGhpcy5pbm5lclRleHQgPSBpbm5lclRleHQpLFxyXG4gICAgICAodGhpcy5wYWdlTmFtZSA9IHBhZ2VOYW1lKSxcclxuICAgICAgKHRoaXMuaFJlZmVyZW5jZSA9IGhSZWZlcmVuY2UpLFxyXG4gICAgICBSd2JMaW5rLmNvdW50Kys7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSd2JMaW5rO1xyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW50ZXJmYWNlIFNjcmlwdFJ1bnRpbWUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGFydE1hcms6IFBlcmZvcm1hbmNlTWFyaztcclxuICBlbmRNYXJrOiBQZXJmb3JtYW5jZU1hcms7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhpcyBvYmplY3QgdG8gcmVjb3JkIHBlcmZvcm1hbmNlIHN0YXJ0IGFuZCBlbmQgbWFya3MuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ3YlBlcmYge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHNjcmlwdFJ1bnRpbWVNYXJrczogU2NyaXB0UnVudGltZSA9IHtcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICBzdGFydE1hcms6IG51bGwsXHJcbiAgICBlbmRNYXJrOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIC8qKiBJbnN0YW50aWF0aW5nIGEgU2NyaXB0UGVyZiByZWNvcmRzIHRoZSBwZXJmb3JtYW5jZSBzdGFydCBtYXJrLiAqL1xyXG4gIGNvbnN0cnVjdG9yKHNjcmlwdE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zY3JpcHRSdW50aW1lTWFya3MubmFtZSA9IHNjcmlwdE5hbWU7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5zdGFydE1hcmsgPSBwZXJmb3JtYW5jZS5tYXJrKGAke3RoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWV9LXN0YXJ0YCk7XHJcbiAgICBSd2JQZXJmLmNvdW50Kys7XHJcbiAgfVxyXG5cclxuICAvKiogQ2FsbCBlbmQoKSB0byBzZXQgdGhlIGVuZCB0aW1lIHN0YW1wLiAqL1xyXG4gIHB1YmxpYyBlbmQoKSB7XHJcbiAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrID0gcGVyZm9ybWFuY2UubWFyayhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfS1lbmRgKTtcclxuICAgIHRoaXMubWVhc3VyZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgY29uc29sZSBvdXRwdXQgb2YgdGhpcyBvYmplY3QncyBwZXJmb3JtYW5jZSBtZWFzdXJlbWVudC4gKi9cclxuICBwcml2YXRlIG1lYXN1cmUoKSB7XHJcbiAgICBsZXQgbWVhc3VyZSA9IHBlcmZvcm1hbmNlLm1lYXN1cmUoXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLm5hbWUsXHJcbiAgICAgIHRoaXMuc2NyaXB0UnVudGltZU1hcmtzLnN0YXJ0TWFyay5uYW1lLFxyXG4gICAgICB0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5lbmRNYXJrLm5hbWVcclxuICAgICk7XHJcbiAgICByZXR1cm4gY29uc29sZS5kZWJ1ZyhgJHt0aGlzLnNjcmlwdFJ1bnRpbWVNYXJrcy5uYW1lfSBleGVjdXRpb24gdGltZSBpczogJHttZWFzdXJlLmR1cmF0aW9ufWApO1xyXG4gIH1cclxufVxyXG4iLCIvLy0tQ29weXJpZ2h0IChjKSAyMDIzLTIwMjYgUm9iZXJ0IEEuIEhvd2VsbFxyXG5cclxuaW1wb3J0IEF0dHJpYnV0aW9uTGluayBmcm9tIFwiLi9hdHRyaWJ1dGlvbkxpbmtcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIHRoZSBkYXRhIGZvciAnV2ViQml0JyBhcnRpY2xlIGNhcmRzLiBLZXkgaW5mb3JtYXRpb25cclxuICogb2YgdGhlIGFydGljbGUncyBjb250ZW50cyBhcmUgY29udGFpbmVkOiBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0YSBjcmVhdGVkLFxyXG4gKiBldGMuXHJcbiAqL1xyXG5jbGFzcyBXZWJCaXQge1xyXG4gIC8qKkNvdW50cyB0aGUgbnVtYmVyIG9mIG9iamVjdHMgaW5zdGFudGlhdGVkICovXHJcbiAgcHVibGljIHN0YXRpYyBjb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICBwdWJsaWMgYXJ0aWNsZU51bWJlcjogbnVtYmVyO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHVibGljIGRhdGVDcmVhdGVkOiBEYXRlO1xyXG4gIHB1YmxpYyBhcnRpY2xlTGluazogc3RyaW5nO1xyXG4gIHB1YmxpYyBjYXJkSW1hZ2U6IHN0cmluZztcclxuICBwdWJsaWMgY2FyZEltYWdlQWx0OiBzdHJpbmc7XHJcbiAgcHVibGljIGxpbmtBdHRyaWJ1dGlvbjogQXR0cmlidXRpb25MaW5rIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBhcnRpY2xlTnVtYmVyOiBudW1iZXIsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgZGF0ZUNyZWF0ZWQ6IERhdGUsXHJcbiAgICBhcnRpY2xlTGluazogc3RyaW5nLFxyXG4gICAgY2FyZEltYWdlOiBzdHJpbmcsXHJcbiAgICBjYXJkSW1hZ2VBbHQ6IHN0cmluZyxcclxuICAgIGxpbmtBdHRyaWJ1dGlvbj86IEF0dHJpYnV0aW9uTGlua1xyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYXJ0aWNsZU51bWJlciA9IGFydGljbGVOdW1iZXI7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRhdGVDcmVhdGVkID0gZGF0ZUNyZWF0ZWQ7XHJcbiAgICB0aGlzLmFydGljbGVMaW5rID0gYXJ0aWNsZUxpbms7XHJcbiAgICB0aGlzLmNhcmRJbWFnZSA9IGNhcmRJbWFnZTtcclxuICAgIHRoaXMuY2FyZEltYWdlQWx0ID0gY2FyZEltYWdlQWx0O1xyXG4gICAgdGhpcy5saW5rQXR0cmlidXRpb24gPSBsaW5rQXR0cmlidXRpb247XHJcbiAgICBXZWJCaXQuY291bnQrKztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYkJpdDtcclxuIl19
