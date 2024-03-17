import styles from './skeleton.module.scss';

export const Skeleton = ({ children }: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <div className={styles.container}>
      <div className={styles.skeleton}>
        <div className={styles.title}></div>
        <div className={styles.content}></div>
      </div>

      <div>
        {children}
      </div>

      <div className={styles.skeleton}>
        <div className={styles.title}></div>
        <div className={styles.content}></div>
      </div>
    </div>
  )
}
