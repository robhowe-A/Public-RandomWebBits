"strict mode";
//--Copyright (c) 2023-2026 Robert A. Howell
import headerFooter from "./components/global/headerFooter";
//import pageComponents from "./pageComponents";
import classComponents from "./classComponents";
import RwbPerf from "./models/scriptPerf";
import colorScheme from "./components/global/colorScheme";
import RwbError from "./models/rwbErrorBus";

const mainPerf = new RwbPerf("main");

// entry point
/**
 * TypeScript entry point. This script initializes page components and models.
 * Start is the entry point.
 */
const RWB = {
  main: () => {
    // Add header and footer components
    headerFooter.headerWidget.init();
    headerFooter.footerWidget.init();

    //Check browser color scheme preference
    colorScheme.setColorTheme(false, 0);

    let page: string = window.location.pathname;

    // Initialize element components
    classComponents.init(page);

    if (RwbError.checkSelectedElement("Loading", ".loading", false, true)){
      let divider = document.querySelector(".loading")
      divider.classList.remove("loading");
    }
    let loadingComp: HTMLElement | null;
    loadingComp = RwbError.checkSelectedElement("LoadingComp", "body aside:first-of-type", false, true)
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
      const dialog = element.insertAdjacentElement("beforeend", document.createElement("dialog")) as HTMLDialogElement;

      const dialogInner = `
        <p>This website uses browser cookies for anonymous traffic information capture.</p>
        <form method="dialog">
          <button>Accept</button>
          <button>Close</button>
        </form>
      `;
      dialog.innerHTML = dialogInner;
      //Assign dialog button functions
      let btnAccept = dialog.children[1].children[0] as HTMLButtonElement;
      let btnClose = dialog.children[1].children[1] as HTMLButtonElement;

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
