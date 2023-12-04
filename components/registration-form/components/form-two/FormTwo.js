import Input from "@/components/input/Input";
import styles from "./styles";

export default function FormOne() {
  return (
    <section className={styles}>
      <div className="step">
        <p>Step 1</p>
        <progress min="0" max="100" value="50" />
        <Input label="Email:" placeholder="email@email.com" type="email" />
      </div>
      <div className="step">
        <p>Step 2</p>
        <progress min="0" max="100" value="0" />
        <Input label="Password:" type="password" />
      </div>
    </section>
  );
}
