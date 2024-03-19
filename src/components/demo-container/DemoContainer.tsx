import React from 'react'
import { Skeleton } from '../skeleton/Skeleton';

import styles from "./demoContainer.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const DemoContainer = (props: Props) => {
    const { children } = props;

    return (
        <div className={styles.container}>
            <div className={styles.childrenContainer}>
            <Skeleton>
                {children}
            </Skeleton>
            </div>
        </div>
    )
}
