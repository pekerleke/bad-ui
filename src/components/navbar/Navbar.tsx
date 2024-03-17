'use client'

import React from 'react'
import Link from 'next/link';

import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>💫 Bad UI</Link>
    </div>
  )
}
