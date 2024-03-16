import { useState } from "react";
import styles from "./dateGuesser.module.scss";
import 'rsuite/dist/rsuite.min.css';


//TODO: fix metadata and layout config

export default function InputKeyboardLess() {

    const [minDate, setMinDate] = useState('1950-02-12T01:57:45.271Z');
    const [endDate, setEndDate] = useState('2023-02-12T01:57:45.271Z');
    const [attempsCount, setAttempsCount] = useState(0);
    const [birthdate, setBirthdate] = useState();
    const [checkDate, setCheckDate] = useState<string>();

    const generateRandomDOB = (minDate: any, maxDate: any) => {
        const random = getRandomDate(new Date(minDate), new Date(maxDate));
        setAttempsCount(prev => prev + 1);
        setCheckDate(random.toISOString());
    }

    function getRandomDate(from: Date, to: Date) {
        const fromTime = from.getTime();
        const toTime = to.getTime();
        return new Date(fromTime + Math.random() * (toTime - fromTime));
    }

    return (
        <div>
            <a href="/bad-ui">Home</a>
            <main className={styles.container}>
                <div style={{ width: 300 }}>
                    Birthdate
                    <div className={styles.input} onClick={() => console.log(generateRandomDOB(minDate, endDate))}>{birthdate || "Enter your birthdate"}</div>

                    {
                        checkDate && !birthdate && (
                            <div>
                                <hr />
                                Is this your birthdate? <br />
                                {checkDate}

                                <br />
                                <button onClick={() => setBirthdate(checkDate)}>yes</button>
                                <button onClick={() => { setEndDate(checkDate); generateRandomDOB(minDate, checkDate) }}>no, its earlier</button>
                                <button onClick={() => { setMinDate(checkDate); generateRandomDOB(checkDate, endDate) }}>no, its later</button>

                                <hr />

                                minDate: {minDate} <br />
                                maxDate: {endDate} <br />
                                count of guess attempts: {attempsCount}
                            </div>
                        )
                    }

                </div>
            </main>
        </div>
    );
}