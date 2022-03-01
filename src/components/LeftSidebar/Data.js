import { Award, Home, User } from 'react-feather';
import { ReactComponent as Rocket } from '../../assets/icons/rocket.svg';

export const SidebarData = [
	{
		heading: 'Menu',
		links: [
			{
				to: '/dashboard',
				icon: <Home />,
				text: 'Home'
			},
			{
				to: '/ranking',
				icon: <Award />,
				text: 'Ranking'
			}
		]
	},
	{
		heading: 'Personal',
		links: [
			{
				to: '/profile',
				icon: <User />,
				text: 'Profile'
			},
			{
				to: '/astracoin',
				icon: <Rocket />,
				text: 'AstraCoin'
			}
		]
	}
];
