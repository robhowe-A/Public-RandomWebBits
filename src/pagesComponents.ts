//--Copyright (c) 2023-2026 Robert A. Howell

import AcronymsElem from "./models/acronyms-element";
import { htmlexColorCode } from "./components/page/colorCode";
import RwbPerf from "./models/scriptPerf";
import domainLookup from "./components/page/domainLookup";

const pageComponents = {
  checkPage: (page: string) => {
    try {
      switch (page) {
        // Initialize htmlexColorCode components
        case "/pages/html.html":
          htmlexColorCode.init();
          break;
        // Initialize domain name lookup
        case "/pages/domainlookup.html":
          domainLookup.init();
          break;
      }
    } catch (error) {
      console.error(`Error loading page component: ${error}`);
    }
  },
  init: () => {
    let page = window.location.pathname;
    const pagePerf = new RwbPerf("Pagecomponents"); //measure performance

    customElements.define("acronyms-list", AcronymsElem);
    pageComponents.checkPage(page);

    pagePerf.end(); //end performance measure
  },
  load: () => {
    //TODO: Loading screen logic
  },
};

window.addEventListener("DOMContentLoaded", pageComponents.init);
