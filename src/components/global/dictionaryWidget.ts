//--Copyright (c) 2023-2026 Robert A. Howell

import { DictionarySearch } from "../../models/dictionarySearch";
import RwbError from "../../models/rwbErrorBus";

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
    let dictionaryWidgetStartingElement: HTMLElement;
    dictionaryWidgetStartingElement = RwbError.checkSelectedElement("DictionaryWidget", ".dictionaryWidget", true, true) as HTMLElement;
    if (dictionaryWidgetStartingElement == null){
      console.warn("Cannot find container element for dictionary widget placement. Skipping its creation.");
      return;
    }

    // DictionarySearch constructor
    Object.create(new DictionarySearch(dictionaryWidgetStartingElement));
  },
};

export default dictionaryWidget;
