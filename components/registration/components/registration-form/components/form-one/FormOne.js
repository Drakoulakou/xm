import Input from "@/components/input/Input";
import styles from "./styles";

export default function FormOne({ methods }) {
  return (
    <div className={styles}>
      <div className="step">
        <p>Step 1</p>
        <progress min="0" max="100" value="50" />
        <Input
          label="Full Name:"
          placeholder="Full Name"
          type="text"
          methods={methods}
          name="fullName"
        />
      </div>
      <div className="step">
        <p>Step 2</p>
        <progress min="0" max="100" value="0" />
        <Input
          label="Date of Birth:"
          type="date"
          methods={methods}
          name="dateOfBirth"
        />
      </div>
    </div>
  );
}
