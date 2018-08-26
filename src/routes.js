import React from "react";
//import MediaCard from "../components/MediaCard";
import PersistentDrawer from "../components/PersistentDrawer";

export default class Routes {

  apply(routeHandler) {

    const routes = [
      {
        path: "/",
        exact: true,
        component: () => <h1>Hello, World!</h1>,
      },
      {
        path: "/diego",
        exact: true,
        component: () => <div><PersistentDrawer/></div>,
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
