import { Home, Edit, Camera, GitHub, Instagram, Mail } from 'react-feather';
import styles from '../styles/nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Home />
      </li>
      <li>
        <Edit />
      </li>
      <li>
        <Camera />
      </li>
      <li>
        <GitHub />
      </li>
      <li>
        <Instagram />
      </li>
      <li>
        <Mail />
      </li>
    </ul>
  </nav>
);

export default Nav;
