import PropTypes from 'prop-types';
import Link from 'next/link';
import { Home, Edit, Box, GitHub, Mail } from 'react-feather';

import styles from '../styles/nav.module.css';

const Nav = ({ home }) => (
  <nav className={styles.nav}>
    <ul>
      {!home && (
        <li>
          <Link href="/">
            <a aria-label="Home">
              <Home className={styles.icon} />
            </a>
          </Link>
        </li>
      )}

      <li>
        <Link href="/blog">
          <a aria-label="Blog">
            <Edit className={styles.icon} />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/projects">
          <a aria-label="Projects">
            <Box className={styles.icon} />
          </a>
        </Link>
      </li>

      <li>
        <a
          id="gh"
          href="https://github.com/darkhist"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHub className={styles.icon} />
        </a>
      </li>

      <li>
        <a href="mailto:qmsalas321@gmail.com" aria-label="Email">
          <Mail className={styles.icon} />
        </a>
      </li>
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
