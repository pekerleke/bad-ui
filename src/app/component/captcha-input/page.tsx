'use client'

import { useState } from "react";
import { DemoContainer } from "@/components/demo-container/DemoContainer";
import { Button } from "rsuite";
import styles from "./captchaInput.module.scss";

const CaptchaInput = () => {
    const [value, setValue] = useState("");
    const [currentChar, setCurrentChar] = useState("");
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [captchaValue, setCaptchaValue] = useState("");
    const [captchaSolution, setCaptchaSolution] = useState("");

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setCaptchaSolution((num1 + num2).toString());
        return `¿Cuánto es ${num1} + ${num2}?`;
    }

    const handleKeyPress = (e: React.ChangeEvent<HTMLInputElement>) => {
        const char = e.target.value;
        if (char.length > 0) {
            setCurrentChar(char);
            setShowCaptcha(true);
            setCaptchaValue("");
            generateCaptcha();
        }
    }

    const verifyCaptcha = () => {
        if (captchaValue === captchaSolution) {
            setValue(value + currentChar);
            setShowCaptcha(false);
            setCurrentChar("");
        } else {
            alert("¡Captcha incorrecto! ¿Eres un robot? 🤖");
        }
    }

    return (
        <DemoContainer>
            <div>
                <label>Input con Captcha por carácter</label>
                <div className={styles.input}>
                    {value}
                    <span className={styles.cursor}>|</span>
                </div>

                {!showCaptcha ? (
                    <input
                        type="text"
                        maxLength={1}
                        className={styles.charInput}
                        onChange={handleKeyPress}
                        value=""
                        placeholder="Escribe un carácter..."
                    />
                ) : (
                    <div className={styles.captchaContainer}>
                        <div className={styles.captchaQuestion}>
                            Para escribir "{currentChar}" resuelve:
                            {generateCaptcha()}
                        </div>
                        <input
                            type="text"
                            className={styles.captchaInput}
                            value={captchaValue}
                            onChange={(e) => setCaptchaValue(e.target.value)}
                            placeholder="Respuesta..."
                        />
                        <Button onClick={verifyCaptcha}>Verificar</Button>
                    </div>
                )}
            </div>
        </DemoContainer>
    );
}

export default CaptchaInput; 