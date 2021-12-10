import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import useQuery from "../utils/useQuery";
import { today } from "../utils/date-time";

import Dashboard from "../dashboard/Dashboard";
import Tables from "../tables/Tables";
import Seat from "../seat/Seat";
import Edit from "../reservationsFolder/Edit";
import Search from "../search/Search";
import Reservations from "../reservationsFolder/Reservations.js";
import NotFound from "./NotFound";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  const query = useQuery();
  const date = query.get("date");
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={date || today()} />
      </Route>
      <Route exact path="/reservations/new">
        <Reservations />
      </Route>
      <Route exact path="/reservations/:reservation_id/seat">
        <Seat />
      </Route>
      <Route exact path="/reservations/:reservation_id/edit">
        <Edit />
      </Route>
      <Route path="/tables/new">
        <Tables />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
