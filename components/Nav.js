import PropTypes from 'prop-types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Edit, Box, GitHub, Mail } from 'react-feather';

import styles from '../styles/nav.module.css';

const Nav = ({ home }) => (
  <nav className={styles.nav}>
    <ul>
      {!home && (
        <motion.li whileHover={{ scale: 1.25 }}>
          <Link href="/">
            <a aria-label="Home">
              <Home className={styles.icon} size={36} />
            </a>
          </Link>
        </motion.li>
      )}
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
        <a
          id="gh"
          href="https://github.com/darkhist"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHub />
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

Nav.defaultProps = {
  home: false
};

Nav.propTypes = {
  home: PropTypes.bool
};

export default Nav;
