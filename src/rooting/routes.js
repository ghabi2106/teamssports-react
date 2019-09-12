import Players from '../components/players/Players';
import Login from '../components/account/login/Login';
import UserService from '../services/user.service';

var defaultPath = UserService.isAuthentificated() ? Players : Login;
var isDefaultPathPublic = UserService.isAuthentificated() ? false : true;

const routes = [
  {
    path: "/",
    component: defaultPath,
    isPublic: isDefaultPathPublic,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    isPublic: true,
    exact: true
  },
  {
    path: "/players",
    component: Players,
    isPublic: true,
    exact: true
  }
];

export default routes;