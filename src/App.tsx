import { useState, lazy } from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { USER_PREFIX } from "./assets/constants/consts";
import useLocalStorage from "./Hooks/useLocalStorage";
import Spinner from "./Components/Spinner/Spinner";
import * as CONST from "./assets/constants/routes";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "./redux/User/user";
import Auth from "./Pages/Auth/Auth";
import Article from "Pages/Article/Article";
import Sidebar from "Modules/Sidebar/Sidebar";
import NotFound from "Pages/404/NotFound";
import ProtectedRoute from "Modules/ProtectedRoute/ProtectedRoute";
import { motion } from "framer-motion";
import { RootState } from "redux/store";
import AppProviders from "providers/AppProviders";

const Dashboard = lazy(() => import("Pages/Dashboard/Dashboard"));

export default function App() {
  const { getFromLocalStorage } = useLocalStorage();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state: RootState) => state.modals);

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
    <AppProviders>
      {!loaded ? (
        <Spinner />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Header />
          <Sidebar sidebar={sidebar} />
          <Switch>
            <Route exact path={CONST.HOME} component={Home} />
            <Route exact path={CONST.LOGIN} component={Auth} />
            <ProtectedRoute
              exact
              path={CONST.ADMIN_PANEL}
              component={Dashboard}
            />
            <Route exact path={CONST.ARTICLE} component={Article} />
            <Route path={CONST.NOTFOUND} component={NotFound} />
          </Switch>
        </motion.div>
      )}
    </AppProviders>
  );
}
