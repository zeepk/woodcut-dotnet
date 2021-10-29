import React from 'react';
import { LoginButton } from 'features/Common/Account/LoginButton';
import { CreateAccountButton } from 'features/Common/Account/CreateAccountButton';
import 'features/RS3/rs3.scss';
import {
	osrsHomeContentTextPre,
	homeContentTextPost,
	twitterUsername,
	twitterUrl,
} from 'utils/constants';
import Logo from 'assets/images/logo.png';

export default function OsrsNewUserLandingPage() {
	return (
		<div className="container--logged-out-user p-d-flex p-jc-between p-p-5 p-flex-wrap p-flex-md-nowrap">
			<div className="container--half p-pl-1 p-pl-lg-5">
				<img className="img--home-logo" src={Logo} alt="logo" />
				<div className="container--home-text p-my-2">
					<span className="text--home-content">{osrsHomeContentTextPre}</span>
					<a className="text--home-content twitter p-mx-1" href={twitterUrl}>
						{twitterUsername}
					</a>
					<span className="text--home-content">{homeContentTextPost}</span>
				</div>
				<div className="p-d-flex container--home-buttons p-mt-4">
					<LoginButton />
					<CreateAccountButton />
				</div>
			</div>
		</div>
	);
}
