"strict mode";
//--Copyright (c) 2023-2026 Robert A. Howell
import WebBit from "../models/webBit";
import AttributionLink from "../models/attributionLink";

// Create new AA (Arbitrary Article)

/**
 * "Arbitrary Articles' section card data."
 */
const arbitraryArticles = new Array(
  new WebBit(
    "Domainlookup",
    1,
    "Domain Lookup",
    "Check an available domain using WhoIS API search",
    new Date(2022, 12, 4),
    "pages/domainlookup.html",
    "library/img/whois.webp",
    "WhoIs Lookup",
    new AttributionLink(
      "domain icons",
      "Domain icons created by Freepik - Flaticon",
      "https://www.flaticon.com/free-icons/domain",
      "Flaticon",
      "Domain Lookup",
      1
    )
  ),
  new WebBit(
    "Htmlresponses",
    2,
    "HTML Frames",
    "View HTML page response status information",
    new Date(2022, 12, 11),
    "pages/htmlresponses.html",
    "library/img/HTML_Frames.webp",
    "HTML frames example",
    new AttributionLink(
      "code icons",
      "Code icons created by Freepik - Flaticon",
      "https://www.flaticon.com/free-icons/code",
      "Flaticon",
      "HTML Frames",
      2
    )
  ),
  new WebBit(
    "Webtech",
    5,
    "Wappalyzer",
    "Wappalyzer browser extension",
    new Date(2023, 11, 19),
    "pages/webtech.html",
    "library/img/wappalyzer-logo.webp",
    "Browser extension logo. A white w on a purple tile.",
    new AttributionLink(
      "Wappalyzer app",
      "Graphical logo for Wappalyzer.",
      "https://www.wappalyzer.com/logos/",
      "Wappalyzer",
      "Wappalyzer",
      5
    )
  ),
    new WebBit(
        "Jsonobject",
        6,
        "jsonObject",
        "JSON object notation",
        new Date(2023, 1, 9),
        "pages/jsonobject.html",
        "library/img/json.webp",
        "JSON logo: A grey circle with artistic spirals.",
        new AttributionLink(
            "JavaScript Object Notation",
            "Graphical logo for JSON.",
            "https://www.json.org/",
            "json.org",
            "jsonObject",
            6
        )
    )
);

/**
 * "Guide Shorts' section card data."
 */
const guideShorts = new Array(
  new WebBit(
    "Httpscert",
    4,
    "HTTPS Certificate",
    "Select to view a website's HTTPS certificate",
    new Date(2022, 12, 26),
    "guides/https.html",
    "library/img/https_cert.webp",
    "Cursor selecting HTTPS certificate",
    new AttributionLink(
      "ssl certificate icons",
      "Ssl certificate icons created by inipagistudio - Flaticon",
      "https://www.flaticon.com/free-icons/ssl-certificate",
      "Flaticon",
      "HTTPS Certificate",
      4
    )
  )
);

/**
 * "Explore section card data."
 */
const explores = new Array(
  new WebBit(
    "Nasa",
    3,
    "EXPLORE: NASA Pages",
    "Explore the NASA domain. Learn about the universe via NASA links",
    new Date(2022, 12, 18),
    "explore/nasa.html",
    "library/img/NASA.webp",
    "NASA Artemis Logo",
    new AttributionLink(
      "NASA",
      "Image source via the National Aeronautics and Space Administration",
      "https://www.nasa.gov/audience/forstudents/5-8/features/symbols-of-nasa.html",
      "NASA",
      "NASA Pages",
      3
    )
  )
);

/**
 * Multidimensional array. Rows are the different sections. Columns
 * contain each article's data belonging in that section.
 */
const WEBBITDATA = [arbitraryArticles, guideShorts, explores];
export default WEBBITDATA;
