const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>

      {type === "select" ? (
        <select name={name} value={value} onChange={onChange}>
          <option value="">Selecciona una opción</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows="4"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;