"use client";
import React from 'react';
import { Sidebar, Menu, SubMenu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PaymentIcon from '@mui/icons-material/Payment';
import GavelIcon from '@mui/icons-material/Gavel';
import SettingsIcon from '@mui/icons-material/Settings';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LockIcon from '@mui/icons-material/Lock';
import WalletIcon from '@mui/icons-material/Wallet';
import SmsIcon from '@mui/icons-material/Sms';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Toolbar from "@mui/material/Toolbar";
import insure from "../../public/image/group.png";
import Image from "next/image";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
const SideBarComponent = () => {
	const sidebarItems = [
		{
			label: 'General',
			items: [
				{ icon: <AddHomeIcon className="text-black text-4xl mx-4" />, text: 'Home', link: '/dashboard' },
				{ icon: <HowToRegIcon className="text-black text-4xl mx-4" />, text: 'Check-In', link: '/VisitorCheckInForm' },
				{ icon: <AssignmentTurnedInIcon className="text-black text-4xl mx-4" />, text: 'Appointments', link: '/Applycover' },
				{ icon: <PaymentIcon className="text-black text-4xl mx-4" />, text: 'Check-Out', link: '/makepayment' },
				{ icon: <SmsIcon className="text-black text-4xl mx-4" />, text: 'Reports', link: '/sendsmscomponent' }
			]
		},
		{
			label: 'Advanced Features',
			items: [
				{ icon: <SettingsIcon className="text-black text-4xl mx-4" />, text: 'System Setup', link: '/Userregistration' },
				{ icon: <HelpOutlineRoundedIcon className="text-black text-4xl mx-4" />, text: 'Help and Support', link: '/setup' },
				{ icon: <LockIcon className="text-black text-4xl mx-4" />, text: 'Log out', link: '/' }
			]
		}
	];

	return (
		<>
			<div className='h-auto flex-col fixed w-1/5 bg-green-600'>
				<Toolbar className="flex bg-white w-auto">
					<Image
						width={30}
						height={20}
						src={insure}
						alt="pic"
						className='pr-2'
					/>
					<h6 className="hidden text-green-600  font-semibold xs:hidden sm:hidden md:block lg:block">Visitors Management</h6>

				</Toolbar>
				<Sidebar rootStyles={{
					[`.${sidebarClasses.container}`]: {
						backgroundColor: "transparent",
						height: '100vh',
					},
					breakPoint: "sm",
					collapsed: true,
					closeOnClick: true,
					toggled: true,
					border: 0,
					width: "auto",
				}} >
					<Menu>
						{sidebarItems.map((section, index) => (
							<SubMenu label={section.label} key={index}>

								{section.items.map((item, itemIndex) => (
									<MenuItem key={itemIndex} href={item.link} className='bg-green-600 text-black'>
										{item.link ? (
											<>{item.icon} {item.text}

											</>
										) : (
											<>{item.icon} {item.text}

											</>
										)}
									</MenuItem>
								))}

							</SubMenu>
						))}
					</Menu>
				</Sidebar>

			</div>
		</>
	);
};

export default SideBarComponent;
