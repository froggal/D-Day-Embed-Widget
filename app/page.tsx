import styles from "./page.module.css";

export default function Home() {
    const dDay = 0
    const setYear = 0
    const setMonth = 0
    const setDay = 0
    const eventName = 0
  return (
    <div className={styles.container}>
        <h1>D-{dDay}</h1>
        <h2>{setYear}/{setMonth}/{setDay}</h2>
        <h2>{eventName}</h2>
    </div>
  );
}
