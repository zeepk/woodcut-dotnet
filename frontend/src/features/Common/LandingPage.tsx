import React from "react";
import { useAppSelector } from "../../app/hooks";

import { selectAuthIsLoggedIn, selectAuthLoading } from "../Common/commonSlice";
import NewUserLandingPage from "features/RS3/Dashboard/NewUserLandingPage";
import OsrsNewUserLandingPage from "features/OSRS/Dashboard/OsrsNewUserLandingPage";
import ExistingUserLandingPage from "features/RS3/Dashboard/ExistingUserLandingPage";
import LoadingIcon from "features/Common/LoadingIcon";
import "features/Common/common.scss";

export function LandingPage() {
  return <NewUserLandingPage />;
}
