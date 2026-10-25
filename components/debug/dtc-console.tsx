"use client";

import { useEffect } from "react";

export function DTCConsole() {
  useEffect(() => {
    console.log("hello from DTC");
  }, []);

  return null;
}