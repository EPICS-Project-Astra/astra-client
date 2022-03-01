import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './LeftSidebar.module.scss';
import { SidebarData } from './Data';

const SideBarLink = ({ to, children }) => {
	const location = useLocation();
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		if (location.pathname === to) {
			setSelected(true);
		}
		return () => {
			setSelected(false);
		};
	}, [location.pathname, to]);

	return (
		<Link
			to={to}
			className={`${classes.link} ${selected && classes.selected}`}
		>
			<div
				className={classes.vl}
				style={{
					visibility: selected ? 'visible' : 'hidden'
				}}
			/>
			{children}
		</Link>
	);
};

const LeftSidebar = () => {
	return (
		<div>
			<div className={classes.body}>
				{SidebarData.map((item) => (
					<div className={classes.module}>
						<div className={classes.heading}>{item.heading}</div>
						{item.links.map((link, index) => (
							<SideBarLink
								key={index}
								to={link.to}
								className={classes.link}
							>
								<div className={classes.icon}>{link.icon}</div>
								<span className={classes.linkText}>
									{link.text}
								</span>
							</SideBarLink>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default LeftSidebar;
