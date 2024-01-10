import * as React from "react";

export interface IButtonComponentProps {
  title: string;
  disable: boolean;
  callback: () => void;
}

export default function ButtonComponent(props: IButtonComponentProps) {
  return (
    <button
      className=" m-2 text-xl disabled:bg-gray-300 enabled:hover:text-amber-100 enabled:text-amber-900 mx-10 p-2 enabled:bg-gradient-to-r from-orange-700 bg-amber-500 drop-shadow-xl rounded-lg enabled:hover:scale-105 enabled:hover:bg-gradient-to-l transition-all duration-100"
      onClick={props.callback}
      disabled={props.disable}
    >
      {props.title}
    </button>
  );
}
