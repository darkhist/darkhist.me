import PropTypes from 'prop-types';

import styles from '../styles/project.module.css';

const Project = ({ title, description, href }) => (
  <div className={styles.wrapper}>
    <div>
      <div className={styles.content}>
        <a href={href} className={styles.title} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  </div>
);

Project.defaultProps = {
  href: null
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string
};

export default Project;
