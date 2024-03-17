import { useState } from "react";
import styles from "./dateGuesser.module.scss";
import 'rsuite/dist/rsuite.min.css';
import { endOfDay, startOfDay } from "date-fns";
import dayjs from "dayjs";
import { Button } from "rsuite";


//TODO: fix metadata and layout config

export default function InputKeyboardLess() {

    const [minDate, setMinDate] = useState('1950-02-12T01:57:45.271Z');
    const [endDate, setEndDate] = useState('2023-02-12T01:57:45.271Z');
    const [attempsCount, setAttempsCount] = useState(0);
    const [birthdate, setBirthdate] = useState<string>();
    const [checkDate, setCheckDate] = useState<string>();

    const generateRandomDOB = (minDate: any, maxDate: any) => {
        const random = getRandomDate(new Date(minDate), new Date(maxDate));
        setAttempsCount(prev => prev + 1);
        setCheckDate(random.toISOString());
    }

    function getRandomDate(from: Date, to: Date) {
        const fromTime = endOfDay(from).getTime();
        const toTime = startOfDay(to).getTime();
        return startOfDay(new Date(fromTime + Math.random() * (toTime - fromTime)));
    }

    return (
        <div>
            <a href="/bad-ui">Home</a>
            <main className={styles.container}>
                <div style={{ width: 300 }}>
                    Birthdate
                    <div className={styles.input} onClick={() => generateRandomDOB(minDate, endDate)}>{birthdate ? dayjs(birthdate).format('DD/MM/YYYY') : "Enter your birthdate"}</div>

                    {
                        checkDate && !birthdate && (
                            <div>
                                Is this your birthdate? <i>{dayjs(checkDate).format('DD MMM YYYY')}</i>
                                <br /><br />
                                <div style={{display: "flex", gap: 20}}>

                                    <b onClick={() => setBirthdate(checkDate)}>Yes</b>
                                    <b onClick={() => { setEndDate(checkDate); generateRandomDOB(minDate, checkDate) }}>{"No, it's earlier"}</b>
                                    <b onClick={() => { setMinDate(checkDate); generateRandomDOB(checkDate, endDate) }}>{"No, it's later"}</b>


                                    {/* <Button onClick={() => setBirthdate(checkDate)} appearance="default">Yes</Button>

                                    <Button onClick={() => { setEndDate(checkDate); generateRandomDOB(minDate, checkDate) }} appearance="default">No, its earlier</Button>

                                    <Button onClick={() => { setMinDate(checkDate); generateRandomDOB(checkDate, endDate) }} appearance="default">No, its later</Button> */}
                                </div>
                                <hr />
                                count of guess attempts: {attempsCount}
                            </div>
                        )
                    }

                </div>
            </main>
        </div>
    );
}