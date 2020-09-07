import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from '../components/Nav';
import PostList from '../components/PostList';
import getPosts from '../util/getPosts';
import styles from '../styles/blog.module.css';

const Blog = ({ posts }) => (
  <div className={styles.container}>
    <Head>
      <title>Quinn Salas</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <header className={styles.header}>
      <Nav />
    </header>

    <main className={styles.container}>
      <h1> Welcome to my blog</h1>
      <PostList posts={posts} />
    </main>
  </div>
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
