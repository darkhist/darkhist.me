import styles from '../styles/nav.module.css';

const Nav = () => (
	<nav className={styles.nav}>
		<ul>
			<li> Home </li>
			<li> Blog </li>
			<li> Photo </li>
			<li> Github </li>
			<li> Instagram </li>
			<li> Email </li>
		</ul>
	</nav>
);

export default Nav;
