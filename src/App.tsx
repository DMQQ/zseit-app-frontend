import { Suspense, useState } from "react";
import { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME_PREFIX } from "./assets/constants/consts";
import useLocalStorage from "./Hooks/useLocalStorage";
import GlobalStyles from "./styles/globalStyles.d";
import Spinner from "./Components/Spinner/Spinner";
import { Dark, Light } from "./assets/constants/colors";

export default function App() {
  const { getFromLocalStorage } = useLocalStorage();
  const [theme, setTheme] = useState(getFromLocalStorage(THEME_PREFIX));
  const [loaded, setLoaded] = useState(false);

  const HideLoader = () => setLoaded(true);

  useEffect(() => {
    window.addEventListener("load", HideLoader);
    return () => window.removeEventListener("load", HideLoader);
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <ThemeProvider theme={theme === "Light" ? Light : Dark}>
        <GlobalStyles />
        <Router>
          <Switch></Switch>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}
