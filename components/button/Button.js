import styles from "./styles";

export default function Button({
  title,
  onClick = () => {},
  type = "button",
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      className={styles}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
