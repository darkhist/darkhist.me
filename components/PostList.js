import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from '../styles/list.module.css';

const PostList = ({ posts }) =>
  posts && (
    <div>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href="/blog/[post]" as={`/blog/${post.slug}`}>
              <a className={styles.postTitle}>{post.frontmatter.title}</a>
            </Link>
            <p>{post.frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostList;
