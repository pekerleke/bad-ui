import Link from "next/link";
import styles from "./app.module.scss"

export default function Home() {
    return (
        <main className={styles.container}>
            <Link href="/component/keyless">Keyless input</Link>
            <Link href="/component/date-guesser">Date guesser</Link>
            <Link href="/component/random-phone-picker">World phone picker</Link>
        </main>
    );
}
