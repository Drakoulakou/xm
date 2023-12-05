import styles from "./styles";

export default function Input({
  label,
  placeholder,
  type,
  onChange,
  methods,
  name,
}) {
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className={styles} style={{ display: "flex", flexFlow: "column" }}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        // add more validators
        {...register(name, { required: true })}
      />
      {/* add error description for each validator */}
      {errors[name] && (
        <p role="alert" style={{ color: "red" }}>
          {label} is required
        </p>
      )}
    </div>
  );
}
