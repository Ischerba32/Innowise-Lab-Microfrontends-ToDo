import { Dispatch, SetStateAction } from "react";

export default interface IUseTheme {
  theme: string;
  setTheme: (value: string) => void;
}
