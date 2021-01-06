import React from "react";
import { LinksArr } from "../Data";

export default class Header extends React.Component {
	headerRef: React.RefObject<HTMLElement>;
	linksArr = LinksArr;
	constructor(props: String) {
		super(props);
		this.headerRef = React.createRef();
		this.scrollSectionIntoView = this.scrollSectionIntoView.bind(this);
		this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
	}
	render() {
		return (
			<>
				<div id="mobile-menu-open" className="shadow-large" onClick={this.toggleMobileMenu}>
					<i className="fa fa-bars" aria-hidden="true"></i>
				</div>
				<header ref={this.headerRef}>
					<div id="mobile-menu-close" onClick={this.toggleMobileMenu}>
						<span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
					</div>
					<ul id="menu" className="shadow">
						{this.linksArr.map((link, index) => {
							return (
								<li key={index}>
									<a href={"#" + link} onClick={(event) => this.scrollSectionIntoView(event, link.toString())}>
										{link}
									</a>
								</li>
							);
						})}
					</ul>
				</header>
			</>
		);
	}

	scrollSectionIntoView(event: React.MouseEvent<HTMLAnchorElement>, link: string) {
		event.preventDefault();
		document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });

		if (this.headerRef.current?.classList.contains("active")) {
			document.body.classList.remove("active");
			this.headerRef.current?.classList.remove("active");
		}
	}

	toggleMobileMenu() {
		if (this.headerRef.current?.classList.contains("active")) {
			document.body.classList.remove("active");
			this.headerRef.current?.classList.remove("active");
		} else {
			document.body.classList.add("active");
			this.headerRef.current?.classList.add("active");
		}
	}
}
