import Image from 'next/image';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/project.module.css';

const Project = ({ title, description, href, ghref, date, src, alt }) => (
  <div className={styles.row}>
    <div className={styles.imgContainer}>
      <Image src={src} alt={alt} width={250} height={250} className={styles.img} />
    </div>
    <div className={styles.content}>
      <a href={href} className={styles.title} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <p>{description}</p>
      <div className={styles.misc}>
        <span className={styles.date}>{date}</span>
        <span>
          {ghref && (
            <a
              className={styles.gh}
              href={ghref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View this project on Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </span>
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
