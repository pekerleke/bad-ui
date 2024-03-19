'use client'

import { useState } from "react";
import { FaRandom } from "react-icons/fa";
import { DemoContainer } from "@/components/demo-container/DemoContainer";

import countries from "./country-codes.json";

import styles from "./randomPhonePicker.module.scss";

const RandomPhonePicker = () => {
    const [value, setValue] = useState<string>();
    const [flag, setFlag] = useState<string>();

    const getRandomNumber = (length: number) => {
        const digits = '0123456789';

        let number = "";
        for (let i = 0; i < length; i++) {
            number += digits[Math.floor(Math.random() * digits.length)];
        }

        return number;
    }

    const getRandomPhoneNumber = () => {
        const countryData = countries[Math.floor(Math.random() * countries.length)];
        let phoneNumber = `+${countryData.code} ${getRandomNumber(3)}-${getRandomNumber(4)}`;

        setValue(phoneNumber);
        setFlag(countryData.isoCode)
    }

    return (

        <DemoContainer>
            <div>
                <label htmlFor="">Phone</label> <br />
                <div className={styles.inputContainer}>
                    <div className={styles.input}>
                        {
                            Boolean(flag) && <img src={`https://flagsapi.com/${flag}/flat/32.png`} alt="" />
                        }
                        {value || "Enter your phone"}
                    </div>
                    <div className={styles.randomButton} onClick={getRandomPhoneNumber}><FaRandom /></div>
                </div>
            </div>
        </DemoContainer >
    );
}


export default RandomPhonePicker;