import React from "react";
//import MediaCard from "../components/MediaCard";
import PersistentDrawer from "../components/PersistentDrawer";
import PersistentDrawerApply from "../components/PersistentDrawerApply";
import PersistentDrawerProfile from "../components/PersistentDrawerProfile";

export default class Routes {

  apply(routeHandler) {

    const routes = [
      {
        path: "/",
        exact: true,
        component: () => <div><PersistentDrawer/></div>,
      },
      {
        path: "/red",
        exact: true,
        component: () => <div><PersistentDrawerApply/></div>,
      },
      {
        path: "/apply",
        exact: true,
        component: () => <div><PersistentDrawerProfile/></div>,
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
