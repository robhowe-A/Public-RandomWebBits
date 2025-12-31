//--Copyright (c) 2023-2026 Robert A. Howell

import classComponents from "./classComponents";
import { rwbCardsWidget, webBitsSlideShow, webBitsAccordion } from "./components/webBitsCards";
import flashCardGameWidget from "./components/flashcardGameWidget";
import RwbPerf from "./models/scriptPerf";

const cardComponents = {
  checkPage: (page: string) => {
    try {
      switch (page) {
        case "/RandomWebBits/index.html":
        case "/index.html":
        case "/":
          rwbCardsWidget.init(); // cards widget initialization
          webBitsSlideShow.init();
          webBitsAccordion.init();
          break;
        case "/RandomWebBits/pages.html":
        case "/pages.html":
          rwbCardsWidget.init(); // cards widget initialization
          break;
        // Initialize flashcard components
        case "/flashcards.html":
          flashCardGameWidget.init();
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error loading page component: ${error}`);
    }
  },
  init: () => {
    let page = window.location.pathname;
    const pagePerf = new RwbPerf("Cardcomponents"); //measure performance

    cardComponents.checkPage(page);

    pagePerf.end(); //end performance measure
  },
  load: () => {},
};

window.addEventListener("DOMContentLoaded", cardComponents.init);
