import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from '../styles/list.module.css';

const PostList = ({ posts }) =>
  posts && (
    <div>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={{ pathname: `/blog/${post.slug}` }}>
              <a>{post.frontmatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostList;
