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
    href: 'https://hellotyche.com',
    ghref: 'https://github.com/darkhist/tyche',
    date: '2020 [WIP]',
    src: '/img/city.png',
    alt: 'A busy city with a four-way highway interchage and buildings'
  },
  {
    title: 'Bookworm',
    description: `
    I created Bookworm as a way to find new stuff to read and
    learn more about test-driven development with Jest and Enzyme
    `,
    href: 'https://bookworm.netlify.app/',
    ghref: 'https://github.com/darkhist/bookworm',
    date: '2019',
    src: '/img/book.png',
    alt: 'Open book, a latte with flower art, and a pair of glasses'
  },
  {
    title: 'Stomping Grounds Cafe',
    description: `
    My favorite coffee shop in Ames didn't have a website, so I made them one`,
    href: 'https://sgcafe.netlify.app/',
    ghref: 'https://github.com/darkhist/stomping-grounds',
    date: '2018',
    src: '/img/sg.png',
    alt: 'Two coffees, a notebook, and a newspaper on a table'
  },
  {
    title: 'Open Source: Firefox Developer Tools',
    description: `I used CSS to improve icon accessibility in the DevTools debugger tab
    and squashed a few documentation issues`,
    href: 'https://github.com/darkhist/debugger.html',
    ghref: 'https://github.com/darkhist/debugger.html',
    date: '2018',
    src: '/img/darkhist.png',
    alt: 'Quinn Salas at the San Francisco Museum of Modern Art'
  },
  {
    title: 'Art Installation: Revival Magazine Issue 12 Twitter Bot',
    description: `I wrote a script to find tweets with the hashtag #RevivalNo12,
    streamed them to my Terminal, and projected them so people could share their
    thoughts
    `,
    date: '2017',
    src: '/img/revival.png',
    alt: 'A girl standing against a pink wall holding a magazine'
  }
];

const Projects = () => (
  <Layout>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Selected Works</h1>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.title} className={styles.projectTitle}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default Projects;
