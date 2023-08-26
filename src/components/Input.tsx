import { useState } from "react";

type inputProps = {
  type: string;
  placeHolder: string;
  getData?: any;
};

export default function Input(props: inputProps) {
  let { type, placeHolder, getData } = props;

  let [value, setValue] = useState("");
  let [list, setList] = useState<string[]>([]);

  let add = () => {
    list.push(value);
    setList([...list]);
    setValue("");
    getData(value);
  };

  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <button onClick={add}>Add</button>
      </div>
    </>
  );
}
