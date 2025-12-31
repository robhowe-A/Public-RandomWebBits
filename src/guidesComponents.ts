//--Copyright (c) 2023-2026 Robert A. Howell

import { ps_Pwa } from "./components/global/photoSwipe";
import RwbPerf from "./models/scriptPerf";

const guideComponents = {
  checkPage: (page: string) => {
    try {
      switch (page) {
        case "/guides/https.html":
          ps_Pwa();
          break;
      }
    }
    catch (error) {
      console.error(`Error loading page component: ${error}`);
    }
  },
  main: () => {
    let page = window.location.pathname;
    const pagePerf = new RwbPerf("Guidecomponents"); //measure performance

    guideComponents.checkPage(page);

    pagePerf.end(); //end performance measure
  },
  load: () => {
    window.addEventListener("DOMContentLoaded", guideComponents.main);
  },
};

guideComponents.load();
