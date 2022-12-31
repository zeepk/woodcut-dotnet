import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";

import { ProgressBar } from "primereact/progressbar";

import {
  selectActivities,
  selectActivitiesLoading,
  getRs3Activities,
} from "features/RS3/rs3Slice";
import { ActivityList } from "features/RS3/Dashboard/ActivityList";
import { LoginButton } from "features/Common/Account/LoginButton";
import { CreateAccountButton } from "features/Common/Account/CreateAccountButton";
import "../rs3.scss";
import {
  homeContentTextPre,
  homeContentTextPost,
  activityFeedTitleText,
  rs3HomePageActivities,
  twitterUsername,
  twitterUrl,
} from "utils/constants";
import Logo from "assets/images/logo.png";

export default function NewUserLandingPage() {
  return (
    <div className="container--logged-out-user p-d-flex p-jc-between p-p-5 p-flex-wrap p-flex-md-nowrap">
      <meta http-equiv="refresh" content="3; url = https://www.woodcut.dev" />
      <div className="container--half p-pl-1 p-pl-lg-5">
        <img className="img--home-logo" src={Logo} alt="logo" />
        <div className="container--home-text p-my-2">
          <div className="text--home-content">Thanks for using Woodcut!</div>
          <br />
          <span className="text--home-content">
            {`There's a new version of Woodcut in a different spot! Redirecting you in just a moment...`}
          </span>
        </div>
      </div>
    </div>
  );
}
