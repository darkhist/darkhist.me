import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Edit, Box, GitHub, Instagram, Mail } from 'react-feather';

import styles from '../styles/nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <motion.li whileHover={{ scale: 1.25 }}>
        <Link href="/">
          <a aria-label="Home">
            <Home className={styles.icon} />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <Link href="/blog">
          <a aria-label="Blog">
            <Edit className={styles.icon} />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <Link href="/projects">
          <a aria-label="Projects">
            <Box className={styles.icon} />
          </a>
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <a href="https://github.com/darkhist" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHub />
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <a
          href="https://instagram.com/darkhist"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
      </motion.li>
      <motion.li whileHover={{ scale: 1.25 }}>
        <a href="mailto:qmsalas321@gmail.com" aria-label="Email">
          <Mail />
        </a>
      </motion.li>
    </ul>
  </nav>
);

export default Nav;
