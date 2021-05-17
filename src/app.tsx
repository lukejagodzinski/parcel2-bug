import loadable from "@loadable/component";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import { Loading } from "./loading";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          component={loadable(() => import("./home"), {
            fallback: <Loading />,
          })}
          exact
          path="/"
        />
        {/* The non-dynamic import works correctly */}
        {/* <Route component={Home} exact path="/" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
