import Gallery from "~/pages/Gallery";
import Home from "~/pages/Home";
import AboutUs from "~/pages/AboutUs";
import Prices from "~/pages/Prices";
import Services from "~/pages/Services";
import Blog from "~/pages/Blog";
import Shop from "~/pages/Shop";
import FAQ from "~/pages/FAQ";
import Contacts from "~/pages/Contacts";
import RoutesConfig from "~/config/routes";

const publicRoutes = [
  { path: RoutesConfig.home, component: Home, tag: "Home" },
  { path: RoutesConfig.aboutUs, component: AboutUs, tag: "About Us" },
  { path: RoutesConfig.services, component: Services, tag: "Services" },
  { path: RoutesConfig.prices, component: Prices, tag: "Prices" },
  { path: RoutesConfig.gallery, component: Gallery, tag: "Gallery" },
  { path: RoutesConfig.blog, component: Blog, tag: "Blog" },
  { path: RoutesConfig.shop, component: Shop, tag: "Shop" },
  { path: RoutesConfig.faq, component: FAQ, tag: "FAQ" },
  { path: RoutesConfig.contacts, component: Contacts, tag: "Contacts" },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
