import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import getPosts from '../util/getPosts';
import styles from '../styles/blog.module.css';

const Blog = ({ posts }) => (
  <Layout>
    <h1 className={styles.title}> Thoughts, Ideas, and Everything Else </h1>
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps = async () => {
  const posts = ((context) => {
    return getPosts(context);
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts
    }
  };
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Blog;
