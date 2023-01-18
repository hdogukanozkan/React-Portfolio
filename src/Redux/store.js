import { configureStore } from "@reduxjs/toolkit";
import siteSettings from "./siteSettings";

export const store = configureStore({
  reducer: {
    siteSettings,
  },
});
