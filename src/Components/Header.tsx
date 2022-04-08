import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

type Props = { linksArr: string[] };

const Header = (props: Props) => {
	const linksArr = props.linksArr;
	const [isBodyActive, setIsBodyActive] = useState(false);
	const toggleMenu = () => setIsBodyActive(!isBodyActive);
	const scrollToSection = (link: string) => {
		document.getElementById(link)?.scrollIntoView();
		toggleMenu();
	};

	return (
		<>
			<div id="mobile-menu-open" className="shadow-large" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<nav className={isBodyActive ? "active" : ""}>
				<div id="mobile-menu-close" onClick={toggleMenu}>
					<span>
						<FontAwesomeIcon icon={faTimes} />
					</span>
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
			</nav>
		</>
	);
};

export default Header;
