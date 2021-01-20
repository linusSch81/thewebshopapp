import ".Mobilenavigation.css"
import Logotype from "../../../shared/images/logo.png"
export const Mobilenavigation = () => {
	return (
		<nav className="mobile-navigation-wrapper">
			<strong>Mobile nav</strong>
			<ul>
				<li><img src={Logotype} alt="" className="navigation-logo" /></li>
				<li>item 2</li>
				<li>item 3</li>
			</ul>
		</nav>
	)
}
