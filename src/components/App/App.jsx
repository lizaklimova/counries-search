import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "components";
// import { CountrySearch, Home, Country } from "pages";
import { routes } from "../../routes";
import { lazy } from "react";
const Home = lazy(() =>
  import("../../pages/Home" /*webpackChunkName:"home-page"*/)
);
const CountrySearch = lazy(() => import("../../pages/CountrySearch"));
const Country = lazy(() => import("../../pages/Country"));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Header />}>
        <Route index element={<Home />} />
        <Route path={routes.COUNTRY} element={<CountrySearch />} />
        <Route path={routes.COUNTRY_ID} element={<Country />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.HOME} replace />} />
    </Routes>
  );
};
