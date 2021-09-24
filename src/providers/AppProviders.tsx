import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import Spinner from "Components/Spinner/Spinner";
import { Dark } from "assets/constants/colors";
import GlobalStyles from "styles/globalStyles.d";

interface IAppProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: IAppProps) {
  return (
    <Suspense fallback={<Spinner />}>
      <ThemeProvider theme={Dark}>
        <GlobalStyles />
        <Router>{children}</Router>
      </ThemeProvider>
    </Suspense>
  );
}
