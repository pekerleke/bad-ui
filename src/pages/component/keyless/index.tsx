import { useState } from "react";
import { Button } from "rsuite";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import classNames from "classnames";

import styles from "./keyless.module.scss";
import 'rsuite/dist/rsuite.min.css';


//TODO: fix metadata and layout config

export default function InputKeyboardLess() {

    const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [textValue, setTextValue] = useState("");
    const [keyIndex, setKeyIndex] = useState(0);

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

    return (
        <div>
            <a href="/bad-ui">Home</a>
            <main className={styles.container}>
                <div style={{ width: 300 }}>
                    <label htmlFor="">Enter your name:</label> <br />
                    <div className={styles.input}>{textValue}</div>
                    <div className={styles.actionContainer}>
                        <div onTouchStart={() => console.log("touchstart")} onMouseDown={() => console.log("mousedown")} className={classNames(styles.action, styles.left)} onClick={handlePrevioustKey}><FaChevronLeft /></div>
                        <div className={styles.display}>{keys[keyIndex]}</div>
                        <div className={classNames(styles.action, styles.rigth)} onClick={handleNextKey}><FaChevronRight /></div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button appearance="primary" onClick={handleSubmit}>Enter key</Button>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                </div>
            </main>
        </div>
    );
}