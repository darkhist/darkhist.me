import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/project.module.css';

const Project = ({ title, description, href, ghref, date }) => (
  <div className={styles.wrapper}>
    <div>
      <div className={styles.content}>
        <a href={href} className={styles.title} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <span className={styles.date}>{date}</span>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
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
  date: PropTypes.string.isRequired
};

export default Project;
