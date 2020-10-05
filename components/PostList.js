import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from '../styles/postList.module.css';

import formatDate from '../util/formatDate';

const PostList = ({ posts }) =>
  posts && (
    <div>
      <ul className={styles.list}>
        {posts
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
          .map((post) => (
            <li key={post.slug}>
              <Link href="/blog/[post]" as={`/blog/${post.slug}`}>
                <a className={styles.postTitle}>{post.frontmatter.title}</a>
              </Link>
              <p>{formatDate(post.frontmatter.date)}</p>
            </li>
          ))}
      </ul>
    </div>
  );

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostList;
