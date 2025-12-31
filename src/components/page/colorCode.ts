//--Copyright (c) 2023-2026 Robert A. Howell

import { ColorCodeWidget } from "../../models/colorCode";
import RwbError from "../../models/rwbErrorBus";

const htmlexColorCode = {
  init: () => {
    // Get component elements that will be used in widget interactivity
    const openers = document.querySelectorAll(".Tagopen") as NodeListOf<HTMLElement>;
    const closers = document.querySelectorAll(".Tagclose") as NodeListOf<HTMLElement>;
    const values = document.querySelectorAll(".TextVal") as NodeListOf<HTMLElement>;
    const attributes = document.querySelectorAll(".Attribute") as NodeListOf<HTMLElement>;

    // Add elements to array data structures, needed for the ColorCode instantiation
    const colorlessElements = new Array(openers, closers, values, attributes);
    const elementsColors = new Array(
      "var(--clr-WhoIS_Orange)",
      "var(--clr-Red)",
      "var(--clr-DarkCyan)",
      "var(--clr-Green)"
    );

    // Select reset button
    let rstElem = RwbError.checkSelectedElement("ColorCode", ".reset", true, true);
    if (rstElem == null) {
      console.warn("Check the reset button or refresh the page.");
    }
    // Instantiate a color code object with all needed elements
    new ColorCodeWidget(colorlessElements, elementsColors, rstElem as HTMLButtonElement);
  },
};

const urlexColorCode = {
  init: () => {
    const protocol = document.querySelectorAll(".protocol") as NodeListOf<HTMLElement>;
    const domain = document.querySelectorAll(".domain") as NodeListOf<HTMLElement>;
    const port = document.querySelectorAll(".port") as NodeListOf<HTMLElement>;
    const folder = document.querySelectorAll(".folder") as NodeListOf<HTMLElement>;
    const file = document.querySelectorAll(".file") as NodeListOf<HTMLElement>;
    const query = document.querySelectorAll(".query") as NodeListOf<HTMLElement>;
    const key = document.querySelectorAll(".key") as NodeListOf<HTMLElement>;
    const value = document.querySelectorAll(".value") as NodeListOf<HTMLElement>;

    // Add elements to array data structures, needed for the ColorCode instantiation
    const colorlessElements = new Array(protocol, domain, port, folder, file, query, key, value);
    const elementsColors = new Array(
      "var(--clr-WhoIS_Orange)",
      "var(--clr-Skyblue)",
      "var(--clr-DarkCyan)",
      "var(--clr-Green)",
      "var(--clr-Red)",
      "var(--clr-primary-600)",
      "var(--clr-all-primary-500)",
      "var(--clr-Lightcoral)"
    );

    // Select reset button
    let rstElem = RwbError.checkSelectedElement("ColorCode", ".reset", true, true);
    if (rstElem == null) {
      console.warn("Check the reset button or refresh the page.");
    }
    // Instantiate a color code object with all needed elements
    new ColorCodeWidget(colorlessElements, elementsColors, rstElem as HTMLButtonElement);
  },
};

const cssexColorCode = {
  /**
   * Cssex is a page widget, applying style colors to elements of different
   * types
   */
  init: () => {
    const selectors = document.querySelectorAll(".Selector") as NodeListOf<HTMLElement>;
    const attributes = document.querySelectorAll(".Attribute") as NodeListOf<HTMLElement>;
    const values = document.querySelectorAll(".Value") as NodeListOf<HTMLElement>;
    const psuedos = document.querySelectorAll(".Psuedo-class") as NodeListOf<HTMLElement>;

    // Add elements to array data structures, needed for the ColorCode instantiation
    const colorlessElements = new Array(selectors, attributes, values, psuedos);
    const elementsColors = new Array(
      "var(--clr-Red)",
      "var(--clr-WhoIS_Orange)",
      "var(--clr-Skyblue)",
      "var(--clr-Green)"
    );

    // Select reset button
    let rstElem = RwbError.checkSelectedElement("ColorCode", ".reset", true, true);
    if (rstElem == null) {
      console.warn("Check the reset button or refresh the page.");
    }
    // Instantiate a color code object with all needed elements
    new ColorCodeWidget(colorlessElements, elementsColors, rstElem as HTMLButtonElement);
  },
};

export { htmlexColorCode, urlexColorCode, cssexColorCode };
