/* eslint-disable @typescript-eslint/no-explicit-any */
// This file extends jQuery's type definitions to include the 'turn' method

/// <reference types="jquery" />

declare global {
  interface JQuery {
    turn(options: any): JQuery;
  }
}

export {};