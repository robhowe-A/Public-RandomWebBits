//--Copyright (c) 2023-2026 Robert A. Howell

import { RwbSyntaxError } from "./rwbErrorBus";

/** An RwbParseJson parses json and stores the parsed string with the result. */
export class RwbParseJson {
  /**Counts the number of objects instantiated */
  public static count: number = 0;
  public returnObj: object;
  public passed: boolean;
  private parseStr: string;

  /**Create this object to store parse results and parsed
   * JSON object.
   */
  constructor(parseStr: string) {
    RwbParseJson.count++;
    this.parseStr = parseStr;
    this.passed = this.parseJson();
  }

  private parseJson() {
    try {
      this.returnObj = JSON.parse(this.parseStr);
    } catch (e) {
      this.returnObj = null;
      new RwbSyntaxError("ParseError", e.message);
      return false;
    }
    return true;
  }
}

/** An RwbParseJson tests whether an object can be stringified into a valid
 * json string. */
export class RwbStringifyJson {
  /**Counts the number of objects instantiated */
  public static count: number = 0;
  public returnStr: string;
  public passed: boolean;
  private json: any;
  /**Create this object to store parse results and parsed
   * JSON object.
   */
  constructor(json: any) {
    RwbStringifyJson.count++;
    this.json = json;
    this.passed = this.stringifyJson();
  }

  private stringifyJson() {
    try {
      this.returnStr = JSON.stringify(this.json);
    } catch (e) {
      this.returnStr = null;
      new RwbSyntaxError("StringifyError", e.message);
      return false;
    }
    return true;
  }
}
