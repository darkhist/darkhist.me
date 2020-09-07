import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

import getSlugs from '../../util/getSlugs';

const BlogPost = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  const { title, date } = frontmatter;

  return (
    <article>
      <h1>{title}</h1>
      <small>{date}</small>
      <div>
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
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
  const blogSlugs = ((context) => {
    return getSlugs(context);
  })(require.context('../../posts', true, /\.md$/));

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
