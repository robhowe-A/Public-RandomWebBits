//--Copyright (c) 2023-2026 Robert A. Howell

import { localStorageWord } from "./localStorageCaches";

/**
 * Interface used for DictionarySearch Elements functionality.
 */
export interface DictionarySearchElements {
  searchWord: HTMLInputElement;
  wordSearch: HTMLButtonElement;
  dictionaryElem: HTMLElement;
  errorElem: HTMLSpanElement;
  previousWordBtn: HTMLButtonElement;
  previousWordsContainer: HTMLDivElement;
  refreshBtn: HTMLButtonElement;
}

export interface DictionarySearchPreviousWordKeyElements {
  word: localStorageWord;
  cacheWordHeadingElem: HTMLButtonElement;
  wordHeadingElemContainer: HTMLDivElement;
  deleteCacheWordHeadingElem: HTMLButtonElement;
}

/**
 * Interface used for To-Do List elements functionality.
 */
export interface ToDoListElements {
  toDoTable: HTMLTableElement;
  toDoTableBody: HTMLElement;
  addButton: HTMLElement;
  addItemToEnter: HTMLInputElement;
}

/**
 * Interface used for RWB Card elements functionality.
 */
export interface RwbCardElements {
  cardImg: HTMLImageElement;
  cardImgTop: HTMLDivElement;
  cardBody: HTMLDivElement;
}
