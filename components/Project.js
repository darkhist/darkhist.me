import PropTypes from 'prop-types';
import { GitHub } from 'react-feather';

import styles from '../styles/project.module.css';

const Project = ({ title, description, href, ghref, date, src, alt }) => (
  <div className={styles.row}>
    <div className={styles.imgWrapper}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
    <div className={styles.content}>
      <a href={href} className={styles.title} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <p>{description}</p>
      <div className={styles.misc}>
        <span className={styles.date}>{date}</span>
        {ghref && (
          <a
            href={ghref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View this project on Github"
          >
            <GitHub />
          </a>
        )}
      </div>
    </div>
  </div>
);

Project.defaultProps = {
  href: null,
  ghref: null
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
  ghref: PropTypes.string,
  date: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Project;
