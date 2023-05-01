import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/Store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import SearchAppBar from "./components/Navbar";
import Package from "./components/NpmPack";
import Favourite from "./components/FavNpm";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
  return (
    <>
      <SearchAppBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<App />} />
      <Route path="/packages" element={<Package />} />
      <Route path="/favourites" element={<Favourite />} />
    </Route>
  )
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
