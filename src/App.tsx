import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyButton } from "./components/test-button";
import { Redirect, Route } from "react-router-dom";
import { route, startUrl, urls } from "./routing";
import { LoginPage } from "./pages/login";
import { useTitle } from "./hooks/general-hooks";
import { Dashboard } from "./pages/dashboard";

function App() {
  useTitle("Admin-Dashboard");
    return (
        <div className="App">
            <Route exact path="/">
                <Redirect to={startUrl()} />
            </Route>
            <Route exact path={route(urls.login)} component={LoginPage} />
            <Route exact path={route(urls.dashboard)} component={Dashboard} />
        </div>
    );
}

export default App;