import React from "react";
//import MediaCard from "../components/MediaCard";
import PersistentDrawer from "../components/PersistentDrawer";
import PersistentDrawerApply from "../components/PersistentDrawerApply";
import PersistentDrawerProfile from "../components/PersistentDrawerProfile";
import SimpleAppBar from "../components/SimpleAppBar";
import PersistentDrawerMe from "../components/PersistentDrawerMe";

export default class Routes {

  apply(routeHandler) {

    const routes = [
      {
        path: "/home",
        exact: true,
        component: () => <div><PersistentDrawer/></div>,
      },
      {
        path: "/",
        exact: true,
        component: () => <div><SimpleAppBar/></div>,
      },
      {
        path: "/me",
        exact: true,
        component: () => <div><PersistentDrawerMe/></div>,
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
