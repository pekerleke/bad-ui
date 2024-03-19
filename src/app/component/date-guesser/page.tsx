'use client'

import { useState } from "react";
import { endOfDay, startOfDay } from "date-fns";
import dayjs from "dayjs";
import { DemoContainer } from "@/components/demo-container/DemoContainer";

import styles from "./dateGuesser.module.scss";

export default function DateGuesser() {

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

    const getRandomDate = (from: Date, to: Date) => {
        const fromTime = endOfDay(from).getTime();
        const toTime = startOfDay(to).getTime();
        return startOfDay(new Date(fromTime + Math.random() * (toTime - fromTime)));
    }

    return (
        <DemoContainer>
            <>
                Birthdate
                <div className={styles.input} onClick={() => generateRandomDOB(minDate, endDate)}>{birthdate ? dayjs(birthdate).format('DD/MM/YYYY') : "Enter your birthdate"}</div>

                {
                    checkDate && !birthdate && (
                        <div>
                            Is this your birthdate? <i>{dayjs(checkDate).format('DD MMM YYYY')}</i>
                            <br /><br />
                            <div style={{ display: "flex", gap: 20 }}>

                                <b onClick={() => setBirthdate(checkDate)}>Yes</b>
                                <b onClick={() => { setEndDate(checkDate); generateRandomDOB(minDate, checkDate) }}>{"No, it's earlier"}</b>
                                <b onClick={() => { setMinDate(checkDate); generateRandomDOB(checkDate, endDate) }}>{"No, it's later"}</b>
                            </div>
                            <hr />
                            Count of guess attempts: {attempsCount}
                        </div>
                    )
                }
            </>
        </DemoContainer>
    );
}