//--Copyright (c) 2023-2026 Robert A. Howell

/** Create this object to record reference errors. */
export default class RwbError {
  /**Counts the number of objects instantiated */
  public static count: number = 0;

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
  public static checkSelectedElement(
    componentName: string,
    cssQuery: string,
    logMessage?: boolean,
    supressException?: boolean
  ) {
    let elem: HTMLElement | null;
    let logErrMssg: boolean = true; //Log message option default
    if (!logMessage) logErrMssg = logMessage;
    let supressExcpt: boolean = false; //Supress message option default
    if (supressException) supressExcpt = true;
    let query: string = `${cssQuery}`;

    // Add dictionary widget if an element with that class is on a page
    try {
      elem = document.querySelector(query);
    } catch {
      Object.create(new RwbReferenceError("GetElement", `Could not get element: '${query}'`));
    }
    if (elem == null) {
      if (logErrMssg) console.warn(`%cNo element found with query: ${query}.`, "color: orange;");
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
  public static checkLocalStorageEqualNull(
    componentName: string,
    key: string,
    checkEmptyString?: boolean,
    logMessage?: boolean
  ) {
    let logMssg: boolean = true;
    if (!logMessage) logMssg = logMessage;
    if (localStorage.getItem(`${key}`) == null) {
      if (logMssg) console.info(`%cNo local storage for ${componentName}.`, "color:purple;");
      return true;
    }
    if (checkEmptyString) return RwbError.checkLocalStorageNullorEmpty(componentName, key, logMssg);
  }

  /**
   * Find if local storage is null or empty.
   * @param componentName - A name for the component in use.
   * @param key - The key's name you're checking for.
   * @param logMessage - Choose to log a message to console.
   * @returns Boolean true or false
   */
  public static checkLocalStorageNullorEmpty(componentName: string, key: string, logMessage?: boolean) {
    let logMssg: boolean = true;
    if (!logMessage) logMssg = logMessage;
    let test: string | null;

    try {
      test = localStorage.getItem(`${key}`);
    } catch {
      throw new Error(`Could not get local storage key: ${key}`);
    }
    if (test == null) {
      if (logMssg) console.warn(`%cLocal storage key not found: ${key}.`, "color: yellow;font-weight:bold;");
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

/** Create this object to store reference error data. */
export class RwbReferenceError extends ReferenceError {
  /**Counts the number of objects instantiated */
  public static count: number = 0;
  public name: string;
  public message: string;
  public page: string;
  private refError: ReferenceError;

  constructor(name: string, message: string) {
    super();
    this.name = name;
    this.message = message;
    this.page = window.location.pathname;
    let err = new ReferenceError(this.message);
    this.refError = err;
    console.error(
      `%c<RWB>%cExecution experienced a reference error:\n%o\n%c</RWB>`,
      "color:red;font-weight:bold;",
      "color:red;",
      this.refError,
      "color:red;font-weight:bold;"
    );
    RwbReferenceError.count++;
  }
}

/** Create this object to store syntax error data. */
export class RwbSyntaxError extends SyntaxError {
  /**Counts the number of objects instantiated */
  public static count: number = 0;
  public name: string;
  public message: string;
  public page: string;
  private syntaxError: SyntaxError;

  constructor(name: string, message: string) {
    super();
    this.name = name;
    this.message = message;
    this.page = window.location.pathname;
    let err = new SyntaxError(this.message);
    this.syntaxError = err;
    console.error(
      `%c<RWB>%cExecution experienced a syntax error:\n%o\n%c</RWB>`,
      "color:red;font-weight:bold;",
      "color:red;",
      this.syntaxError,
      "color:red;font-weight:bold;"
    );
    RwbSyntaxError.count++;
  }
}

export class RwbDomException extends DOMException {
  /**Counts the number of objects instantiated */
  public static count: number = 0;
  public name: string;
  public message: string;
  public stack: any;
  public page: string;
  private domError: DOMException;

  constructor(name: string, message: string, error: any) {
    super();
    this.name = name;
    this.message = message;
    this.stack = error;
    this.page = window.location.pathname;
    let err = new DOMException(this.message);
    this.domError = err;
    console.error(
      `%c<RWB>%cExecution experienced a DOM error:\n%o\n%c</RWB>`,
      "color:red;font-weight:bold;",
      "color:red;",
      this.stack,
      "color:red;font-weight:bold;"
    );
    RwbDomException.count++;
  }
}

export class RwbInvalidValueError extends RangeError {
  /**Counts the number of objects instantiated */
  public static count: number = 0;
  public name: string;
  public message: string;
  public page: string;
  private syntaxError: RangeError;

  constructor(name: string, message: string) {
    super();
    this.name = name;
    this.message = message;
    this.page = window.location.pathname;
    let err = new RangeError(this.message);
    this.syntaxError = err;
    console.error(
      `%c<RWB>%cValue out of range exception:\n%o\n%c</RWB>`,
      "color:red;font-weight:bold;",
      "color:red;",
      this.syntaxError,
      "color:red;font-weight:bold;"
    );
    RwbSyntaxError.count++;
  }
}
