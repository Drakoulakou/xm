import styles from "./styles";

export default function Input({ label, placeholder, type }) {
  return (
    <section className={styles}>
      <div style={{ display: "flex", flexFlow: "column" }}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} />
      </div>
    </section>
  );
}
