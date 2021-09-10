import { Suspense, useState } from "react";
import { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { USER_PREFIX } from "./assets/constants/consts";
import useLocalStorage from "./Hooks/useLocalStorage";
import GlobalStyles from "./styles/globalStyles.d";
import Spinner from "./Components/Spinner/Spinner";
import { Dark } from "./assets/constants/colors";
import {
  ADMIN_PANEL,
  ARTICLE,
  HOME,
  LANDING,
  LOGIN,
  NOTFOUND,
} from "./assets/constants/routes";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "./redux/User/user";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "Pages/Dashboard/Dashboard";
import Article from "Pages/Article/Article";
import Sidebar from "Modules/Sidebar/Sidebar";
import NotFound from "Pages/404/NotFound";
import Landing from "Pages/Landing/Landing";
import ProtectedRoute from "Modules/ProtectedRoute/ProtectedRoute";

export default function App() {
  const { getFromLocalStorage } = useLocalStorage();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sidebar = useSelector((state: any) => state.modals.sidebar);

  const HideLoader = () => setLoaded(true);

  useEffect(() => {
    window.addEventListener("load", HideLoader);
    return () => window.removeEventListener("load", HideLoader);
  }, []);

  useEffect(() => {
    const user = getFromLocalStorage(USER_PREFIX);
    if (user !== null) {
      dispatch(UserActions.save(user));
    }
  }, [loaded, dispatch, getFromLocalStorage]);

  return (
    <Suspense fallback={<Spinner />}>
      <ThemeProvider theme={Dark}>
        <GlobalStyles />
        <Router>
          <Header />
          <Sidebar sidebar={sidebar} />
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={LOGIN} component={Auth} />
            <ProtectedRoute exact path={ADMIN_PANEL} component={Dashboard} />
            <Route exact path={ARTICLE} component={Article} />
            <Route exact path={LANDING} component={Landing} />
            <Route path={NOTFOUND} component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}
