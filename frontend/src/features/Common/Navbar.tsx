import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
import { InputSwitch } from 'primereact/inputswitch';

import {
	getCurrentPlayerCount,
	getRs3Rsn,
	getFollowing,
} from 'features/Common/commonSlice';
import { NavbarItem } from './NavbarItem';
import { SidebarContent } from './SidebarContent';
import { AuthButton } from 'features/Common/Account/AuthButton';
import {
	navbarMenuItems,
	gameVersionRs3Text,
	gameVersionOsrsText,
	localStorageSearchVersion,
} from 'utils/constants';
import Logo from '../../assets/images/logo.png';
import 'features/Common/common.scss';
import { DxpTimer } from './DxpTimer';

export function Navbar() {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const [value, setValue] = useState('');
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const [searchGameVersion, setSearchGameVersion] = useState(false);

	useEffect(() => {
		dispatch(getCurrentPlayerCount());
		dispatch(getRs3Rsn());
		dispatch(getFollowing());

		const initialVersion = window.localStorage.getItem(
			localStorageSearchVersion
		);
		if (initialVersion === 'true' || initialVersion === 'false') {
			setSearchGameVersion(JSON.parse(initialVersion));
		}
	}, [dispatch]);

	const setGameVersion = (value: boolean) => {
		window.localStorage.setItem(localStorageSearchVersion, value.toString());
		setSearchGameVersion(value);
	};

	const handleSearch = (e: any) => {
		e.preventDefault();
		const gameVersion = searchGameVersion
			? gameVersionOsrsText
			: gameVersionRs3Text;
		if (value.toString().trim() !== '') {
			history.push(`/${gameVersion}/user/${value.split(' ').join('+')}`);
		}
	};

	const navbarMenuItemComponents = navbarMenuItems.map((item) => {
		return {
			template: () => <NavbarItem text={item.text} path={item.path} />,
		};
	});

	const start = (
		<div className="p-d-flex p-jc-start p-ai-center">
			<i
				className="icon--sidebar pi pi-bars p-mr-3"
				onClick={() => setSidebarVisible(true)}
			/>
			<Link to="/">
				<img className="img--logo p-ml-1" src={Logo} alt="logo" />
			</Link>
		</div>
	);

	const navbarItems = [
		...navbarMenuItemComponents,
		{
			template: () => <DxpTimer />,
			className: 'container--dxp',
		},
		{
			template: () => (
				<div className="container--game-switch p-d-flex p-flex-column p-ai-center">
					<p className="text--switch-label p-m-0">RS3 / OSRS</p>
					<InputSwitch
						className="p-mt-1"
						checked={searchGameVersion}
						onChange={(e) => setGameVersion(e.value)}
					/>
				</div>
			),
			className: 'container--search-switch',
		},
		{
			template: () => (
				<form
					className="container--search p-mr-2"
					onSubmit={(e) => handleSearch(e)}
				>
					<span className="p-input-icon-right">
						<i className="pi icon--search" />
						<InputText
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</span>
				</form>
			),
			className: 'container--search-form',
		},
		{
			template: () => <AuthButton sidebar={false} />,
			className: 'container--auth-buttons',
		},
	];

	return (
		<div>
			<Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
				<SidebarContent />
			</Sidebar>
			<Menubar className="navbar" model={navbarItems} start={start} />
		</div>
	);
}
