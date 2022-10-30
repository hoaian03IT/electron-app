import Home from "~/pages/Home";
import Information from "~/pages/Information";
import Services from "~/pages/Services";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/info", component: Information },
  { path: "/services", component: Services },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
