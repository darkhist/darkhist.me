import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

import Layout from '../../components/Layout';

import styles from '../../styles/post.module.css';

import getSlugs from '../../util/getSlugs';
import formatDate from '../../util/formatDate';

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter
    wrapLines
    lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    language={language}
    style={dracula}
  >
    {value}
  </SyntaxHighlighter>
);

CodeBlock.defaultProps = {
  language: '',
  value: ''
};

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
};

const BlogPost = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  const { title, date } = frontmatter;

  return (
    <Layout>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{formatDate(date)}</p>
      <article className={styles.content}>
        <ReactMarkdown escapeHtml={false} source={markdownBody} renderers={{ code: CodeBlock }} />
      </article>
      <div className={styles.back}>
        <Link href="/blog">Go back</Link>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { post } }) => {
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
