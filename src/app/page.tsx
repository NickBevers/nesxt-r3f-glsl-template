import styles from "./page.module.css";
import CanvasComponent from "@/components/canvas/Canvas";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to This template</h1>
      <p>
        Get started by editing <code className={styles.code}>pages/index.js</code>
      </p>
      <section className={styles.canvas__container}>
        <CanvasComponent />
      </section>
    </main>
  );
}
