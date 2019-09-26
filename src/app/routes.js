import DashboardScreen from "./screens/dashboard";
import RegionScreen from "./screens/regions";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        // icon: "ni ni-tv-2 text-primary",
        component: DashboardScreen,
        layout: "/admin"
    },
    {
        path: "/regions",
        name: "Region",
        // icon: "ni ni-tv-2 text-primary",
        component: RegionScreen,
        layout: "/admin"
    },
];
export default routes;
