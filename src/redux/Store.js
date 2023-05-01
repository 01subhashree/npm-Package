import { configureStore } from "@reduxjs/toolkit";
import { packages } from "./PackageSlicer";

export const store = configureStore({
  reducer: {
    npm: packages.reducer,
  },
});
