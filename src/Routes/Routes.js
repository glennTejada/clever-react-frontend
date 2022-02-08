import Login from "../Pages/Auth/Login/Login";
import Registration from "../Pages/Auth/Registration/Registration";
import ResetPass from "../Pages/Auth/ResetPass/ResetPass";
import Home from "../Pages/Home/Home";

const openRoute = [
  { path: "/login", component: Login },
  { path: "/registration", component: Registration },
  { path: "/recovery-pass", component: ResetPass },
];
const PrivetRoute = [
  { path: "/", component: Home },
  // { path: "/", component: Hero },
];
export { openRoute, PrivetRoute };
