import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Edit, Camera, GitHub, Instagram, Mail } from 'react-feather';

import styles from '../styles/nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <motion.li whileHover={{ scale: 1.25 }}>
        <Link href="/">
          <a>
            <Home className={styles.icon} />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <Link href="/blog">
          <a>
            <Edit className={styles.icon} />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <Link href="/photo">
          <a>
            <Camera className={styles.icon} />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <a href="https://github.com/darkhist" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <a href="https://instagram.com/darkhist" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <a href="mailto:qmsalas321@gmail.com">
          <Mail />
        </a>
      </motion.li>
    </ul>
  </nav>
);

export default Nav;
