//--Copyright (c) 2023-2026 Robert A. Howell

import RwbPerf from "./models/scriptPerf";
import RwbError from "./models/rwbErrorBus";
import dictionaryWidget from "./components/global/dictionaryWidget";
import toDosWidget from "./components/global/toDosWidget";
import notFound404Widget from "./components/global/404";
import AbbrOpen from "./models/abbrDescription";

const classComponents = {
  /**
   * Attribute tags on mobile do not have hover option. This function adds a click
   *  ability to define an abbr tag, than rely on the title attribute.
   */
  abbrDefinitions: () => {
    const mobileabbrperf = new RwbPerf("Mobileabbrperf"); //start performance measure

    /**Give all abbr elements option to click to reveal the expanded description. */
    const allabbreviationelems = document.querySelectorAll("abbr");

    if (allabbreviationelems.length > 0) {
      for (let abbr of allabbreviationelems) {
        let abbrev = new AbbrOpen(abbr);
        abbrev.revealAbbrDescription();
      }
    }
    /**Check for 404 class component */
    classComponents.fourohfour();

    mobileabbrperf.end(); //end performance measure
  },
  fourohfour: () => {
    if (RwbError.checkSelectedElement("PageComponents", "#Four-Oh-Four", false, true) !== null) {
      notFound404Widget.init();
    }
  },
  init: (page: string) => {
    const classperf = new RwbPerf("Classcomponents"); //begin performance measure

    // Add Dictionary Widget if an element with that class is on a page
    if (page == "/pages/dictionaryword.html" || page == "/index.html" || page == "/" || page == "") {
      dictionaryWidget.init();
    }

    // Add ToDos widget if an element with that class is on a page
    if (page == "/pages/todos.html" || page == "/index.html" || page == "/" || page == "") {
      toDosWidget.init();
    }

    // Add abbr definitions
    classComponents.abbrDefinitions();

    classperf.end(); //end performance measure
  },
};
export default classComponents;
