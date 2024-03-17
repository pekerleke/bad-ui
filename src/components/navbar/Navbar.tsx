import React from 'react'

import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="/bad-ui" className={styles.logo}>💫 Bad UI</a>
    </div>
  )
}
