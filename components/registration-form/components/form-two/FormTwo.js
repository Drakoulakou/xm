import Input from "@/components/input/Input";
import styles from "./styles";

export default function FormTwo({ methods }) {
  return (
    <div className={styles}>
      <div className="step">
        <p>Step 1</p>
        <progress min="0" max="100" value="50" />
        <Input
          label="Email:"
          placeholder="email@email.com"
          type="email"
          methods={methods}
          name="email"
        />
      </div>
      <div className="step">
        <p>Step 2</p>
        <progress min="0" max="100" value="0" />
        <Input
          label="Password:"
          type="password"
          methods={methods}
          name="password"
        />
      </div>
    </div>
  );
}
