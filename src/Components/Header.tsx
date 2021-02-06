import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = { linksArr: String[] };

const Header: React.FC<Props> = (props: Props) => {
	const linksArr = props.linksArr;
	const [isBodyActive, setIsBodyActive] = useState(false);
	const toggleMenu = () => setIsBodyActive(!isBodyActive);
	const scrollToSection = (link: String) => {
		document.getElementById(link.toString())?.scrollIntoView();
		toggleMenu();
	};

	return (
		<>
			<div id="mobile-menu-open" className="shadow-large" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<header className={isBodyActive ? "active" : ""}>
				<div id="mobile-menu-close" onClick={toggleMenu}>
					<span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
				</div>
				<ul id="menu" className="shadow">
					{linksArr.map((link, index) => {
						return (
							<li key={index}>
								<span onClick={() => scrollToSection(link)}>{link}</span>
							</li>
						);
					})}
				</ul>
			</header>
		</>
	);
};

export default Header;
