type selectProps = {
  label: string;
  options: any[];
  getValue: any;
};

export default function SMSelect(props: selectProps) {
  let { label, options, getValue } = props;

  let selectChange = (val: string) => {
    getValue(val);
  };

  return (
    <>
      <div>
        <p>{label}</p>
        <select onChange={(e) => selectChange(e.target.value)}>
          {options &&
            Array.isArray(options) &&
            options.map((x, i) => (
              <option key={i} value={x.value}>
                {x.displayName}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}
