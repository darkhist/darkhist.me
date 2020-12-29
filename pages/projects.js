import Layout from '../components/Layout';
import Project from '../components/Project';

import styles from '../styles/projects.module.css';

const projects = [
  {
    title: 'Tyche',
    description: `
    Tyche, named after the Greek goddess of fortune, was designed to inspire creators
    by displaying randomly generated media from the Archillect archive
    `,
    href: 'https://hellotyche.com'
  },
  {
    title: 'Bookworm',
    description: `
    I created Bookworm as a way to find new stuff to read and
    learn more about test-driven development with Jest and Enzyme
    `,
    href: 'https://bookworm.netlify.app/'
  },
  {
    title: 'Stomping Grounds Cafe',
    description: `
    My favorite coffee shop in Ames didn't have a website, so I made them one`,
    href: 'https://sgcafe.netlify.app/'
  },
  {
    title: 'Open Source: Firefox Developer Tools',
    description: `I used CSS to improve icon accessibility in the DevTools debugger tab
    and squashed a few documentation issues`,
    href: 'https://github.com/darkhist/debugger.html'
  },
  {
    title: 'Art Installation: Revival Magazine Issue 12 Twitter Bot',
    description: `I wrote a script to find tweets with the hashtag #RevivalNo12,
    streamed them to my Terminal, and projected them so people could share their
    thoughts
    `
  }
];

const Projects = () => (
  <Layout>
    <div className={styles.wrapper}>
      <h1 className={styles.selectedWorks}>Selected Works</h1>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.title}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Projects;
