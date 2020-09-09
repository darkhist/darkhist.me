import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from '../styles/404.module.css';

const NotFound = () => (
  <div className={styles.wrapper}>
    <main className={styles.main}>
      <h1 className={styles.code}> 404 </h1>
      <p className={styles.msg}>
        Not Found
        <span className={styles.sadface} role="img" aria-label="sad face">
          :~(
        </span>
      </p>
      <Link href="/">
        <motion.a className={styles.btn} whileHover={{ scale: 1.125 }}>
          Home
        </motion.a>
      </Link>
    </main>
  </div>
);

export default NotFound;
