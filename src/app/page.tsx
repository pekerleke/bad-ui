import styles from "./app.module.scss"

export default function Home() {
    return (
        <main className={styles.container}>
            <a href="/bad-ui/component/keyless">Keyless input</a>
            <a href="/bad-ui/component/date-guesser">Date guesser</a>
        </main>
    );
}
