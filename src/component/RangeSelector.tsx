import * as React from "react";

export interface ISliderProps {
  title: string;
  disable: boolean;
  min: number;
  max: number;
  callback: (value: number) => void;
}

export default function Slider(props: ISliderProps) {
  const [value, setValue] = React.useState(props.min);
  const onChangeHandler = (t: any) => {
    props.callback(t.target.value);
    setValue(t.target.value);
  };

  return (
    <div className="mx-4">
      <label
        htmlFor="customRange1"
        className="mb-2 inline-block text-orange-700 aria-disabled:text-gray-600"
        aria-disabled={props.disable}
      >
        {`${props.title} [${value}]`}
      </label>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg disabled:bg-gray-600 bg-orange-600"
        id="customRange1"
        min={props.min}
        max={props.max}
        disabled={props.disable}
        defaultValue={props.min}
        onChange={onChangeHandler}
      />
    </div>
  );
}
