'use client'

import { Skeleton } from "@/components/skeleton/Skeleton";
import styles from "./randomPhonePicker.module.scss";
import { useState } from "react";
import { FaRandom } from "react-icons/fa";

import countries from "./country-codes.json";

const RandomPhonePicker = () => {
    const [value, setValue] = useState<string>();
    const [flag, setFlag] = useState<string>();

    console.log(countries.length)

    const getRandomNumber = (length: number) => {

    }

    const getRandomPhoneNumber = () => {
        const digits = '0123456789';

        const countryData = countries[Math.floor(Math.random() * countries.length)];

        let phoneNumber = '+';

        phoneNumber += countryData.code + " ";

        for (let i = 0; i < 3; i++) {
            phoneNumber += digits[Math.floor(Math.random() * digits.length)];
        }

        phoneNumber += '-';

        for (let i = 0; i < 4; i++) {
            phoneNumber += digits[Math.floor(Math.random() * digits.length)];
        }

        setValue(phoneNumber);
        setFlag(countryData.isoCode)
    }

    return (
        <div>
            <main className={styles.container}>
                <div style={{ width: 300 }}>

                    <Skeleton>
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
                    </Skeleton>
                </div>
            </main>
        </div>
    );
}


export default RandomPhonePicker;