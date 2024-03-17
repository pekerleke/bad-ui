'use client'

import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "rsuite";
import { Skeleton } from "@/components/skeleton/Skeleton";

import styles from "./keyless.module.scss";

const Keyless = () => {
    const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [textValue, setTextValue] = useState("");
    const [keyIndex, setKeyIndex] = useState(0);

    const timerId = useRef(null);

    const handlePrevioustKey = () => {
        if (keyIndex > 0) setKeyIndex(prev => prev - 1);
    }

    const handleNextKey = () => {
        if (keyIndex < keys.length - 1) setKeyIndex(prev => prev + 1);
    }

    const handleSubmit = () => {
        setTextValue(prev => prev + keys[keyIndex]);
        setKeyIndex(0);

        // TODO: countdown
        // while (keyIndex !== 0) {
        //     setTimeout(() => {
        //         setKeyIndex(prev => prev - 1);
        //     }, 500);
        // }
    }

    const handleReset = () => {
        setKeyIndex(0);
        setTextValue("");
    }

    const startCounter = (func: () => void) => {
        if (timerId.current === null) {
            (timerId as any).current = setInterval(() => {
                func();
            }, 100);
        }
    };

    const stopCounter = () => {
        if (timerId.current !== null) {
            clearInterval(timerId.current);
            timerId.current = null;
        }
    };

    const handleNextCounter = () => {
        startCounter(() => setKeyIndex(prev => prev < keys.length - 1 ? prev + 1 : prev))
    }

    const handlePreviousCounter = () => {
        startCounter(() => setKeyIndex(prev => prev > 0 ? prev - 1 : prev))
    }

    return (
        <div>
            <main className={styles.container}>
                <div style={{ width: 300 }}>

                    <Skeleton>
                        <div>
                            <label htmlFor="">Name</label> <br />
                            <div className={styles.input}>{textValue || "Enter your name"}</div>
                            <div className={styles.actionContainer}>
                                <div
                                    onMouseDown={handlePreviousCounter}
                                    onMouseUp={stopCounter}
                                    onMouseLeave={stopCounter}
                                    onTouchStart={handlePreviousCounter}
                                    onTouchEnd={stopCounter}
                                    className={classNames(styles.action, styles.left)}
                                    onClick={handlePrevioustKey}
                                >
                                    <FaChevronLeft />
                                </div>

                                <div className={styles.display}>{keys[keyIndex]}</div>

                                <div
                                    onMouseDown={handleNextCounter}
                                    onMouseUp={stopCounter}
                                    onMouseLeave={stopCounter}
                                    onTouchStart={handleNextCounter}
                                    onTouchEnd={stopCounter}
                                    className={classNames(styles.action, styles.rigth)}
                                    onClick={handleNextKey}
                                >
                                    <FaChevronRight />
                                </div>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Button appearance="primary" onClick={handleSubmit}>Enter key</Button>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        </div>
                    </Skeleton>
                </div>
            </main>
        </div>
    );
}


export default Keyless;