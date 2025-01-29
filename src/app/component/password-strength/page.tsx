'use client'

import { useState } from "react";
import { DemoContainer } from "@/components/demo-container/DemoContainer";
import styles from "./passwordStrength.module.scss";

const PasswordStrength = () => {
    const [password, setPassword] = useState("");

    const getStrengthMessage = (value: string) => {
        if (!value) return "Enter a password 🤔";
        if (value.length < 3) return "My grandma can hack this! 👵";
        if (value.length < 6) return "Even my cat could guess it 🐱";
        if (value.length < 8) return "A baby could crack this 👶";
        if (value.length < 10) return "Getting better, but still meh 🫤";
        if (value.length < 12) return "Not bad, not great 🤷";
        if (value.length < 14) return "Now we're cooking! 🍳";
        if (value.length < 16) return "Password game strong! 💪";
        return "Fort Knox level security! 🏰";
    }

    return (
        <DemoContainer>
            <div>
                <label>Password</label>
                <input 
                    type="password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.strengthMessage}>
                    {getStrengthMessage(password)}
                </div>
            </div>
        </DemoContainer>
    );
}

export default PasswordStrength; 