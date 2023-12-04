import styles from "./styles";

export default function Button({ title, onClick }) {
  return (
    <button onClick={onClick} className={styles}>
      {title}
    </button>
  );
}
