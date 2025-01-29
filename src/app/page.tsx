import Link from "next/link";
import styles from "./app.module.scss"

export default function Home() {
    return (
        <main className={styles.container}>
            <Link href="/component/keyless">Keyless input</Link>
            <Link href="/component/date-guesser">Date guesser</Link>
            <Link href="/component/random-phone-picker">World phone picker</Link>
            <Link href="/component/gender-picker">Gender picker</Link>
            <Link href="/component/password-strength">Password strength</Link>
            <Link href="/component/color-picker">Color picker</Link>
            <Link href="/component/captcha-input">Captcha Input</Link>
            <Link href="/component/shake-input">Shake Input</Link>
        </main>
    );
}