import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import ExportIndex from "./sections/exportImages/ExportIndex";
import React from "react";
import ExportJobsIndex from "./sections/exportJobs/ExportJobsIndex";
import ExportVideosIndex from "./sections/exportVideos/ExportVideos";
import SettingIndex from "./sections/settings/SettingIndex";
import PricingPlanIndex from "./sections/pricingPlans/pricingPlansIndex";

/**
 * File-based routing.
 * @desc File-based routing that uses React Router under the hood.
 * To create a new route create a new .jsx file in `/pages` with a default export.
 *
 * Some examples:
 * * `/pages/index.jsx` matches `/`
 * * `/pages/blog/[id].jsx` matches `/blog/123`
 * * `/pages/[...catchAll].jsx` matches any URL not explicitly matched
 *
 * @param {object} pages value of import.meta.glob(). See https://vitejs.dev/guide/features.html#glob-import
 *
 * @return {Routes} `<Routes/>` from React Router, with a `<Route/>` for each file in `pages`
 */
export default function Routes({ pages }) {
  const routes = useRoutes(pages);
   const NotFound = routes.find(({ path }) => path === "/notFound").component;

  const routeComponents = routes.map(({ path, component: Component }, index) => (
    <React.Fragment key={index}>
      <Route path="/export-images" element={<ExportIndex />} />
      <Route path="/export-jobs" element={<ExportJobsIndex/>} />
      <Route path="/export-videos" element={<ExportVideosIndex/>} />
      <Route path="/settings" element={<SettingIndex/>} />
      <Route path="/pricing-plans" element={<PricingPlanIndex/>} />
      <Route path={path} element={<Component />} />
      <Route path="*" element={<NotFound />} />
    </React.Fragment>
  ));


 
  return (
    <ReactRouterRoutes>
      {routeComponents}
      
    </ReactRouterRoutes>
  );
}

function useRoutes(pages) {
  const routes = Object.keys(pages)
    .map((key) => {
      let path = key
        .replace("./pages", "")
        .replace(/\.(t|j)sx?$/, "")
        /**
         * Replace /index with /
         */
        .replace(/\/index$/i, "/")
        /**
         * Only lowercase the first letter. This allows the developer to use camelCase
         * dynamic paths while ensuring their standard routes are normalized to lowercase.
         */
        .replace(/\b[A-Z]/, (firstLetter) => firstLetter.toLowerCase())
        /**
         * Convert /[handle].jsx and /[...handle].jsx to /:handle.jsx for react-router-dom
         */
        .replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`);

      if (path.endsWith("/") && path !== "/") {
        path = path.substring(0, path.length - 1);
      }

      if (!pages[key].default) {
        console.warn(`${key} doesn't export a default React component`);
      }

      return {
        path,
        component: pages[key].default,
      };
    })
    .filter((route) => route.component);

  return routes;
}
