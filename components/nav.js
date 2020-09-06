import Link from 'next/link';
import { Home, Edit, Camera, GitHub, Instagram, Mail } from 'react-feather';

import styles from '../styles/nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link href="/">
          <Home className={styles.icon} />
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <Edit className={styles.icon} />
        </Link>
      </li>
      <li>
        <Link href="/photo">
          <Camera className={styles.icon} />
        </Link>
      </li>
      <li>
        <a href="https://github.com/darkhist">
          <GitHub />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/darkhist">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="mailto:qmsalas321@gmail.com">
          <Mail />
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
