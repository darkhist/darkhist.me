import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

import Layout from '../../components/Layout';

import getSlugs from '../../util/getSlugs';

// import styles from '../../styles/post.module.css';

const BlogPost = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  const { title, date } = frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <small>{date}</small>
      <article>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>

      <div>
        <Link href="/blog">
          <a> Go Back </a>
        </Link>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ ...ctx }) => {
  const { post } = ctx.params;

  const content = await import(`../../posts/${post}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    }
  };
};

export const getStaticPaths = async () => {
  const blogSlugs = ((context) => getSlugs(context))(require.context('../../posts', true, /\.md$/));
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false
  };
};

BlogPost.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  markdownBody: PropTypes.string.isRequired
};

export default BlogPost;
