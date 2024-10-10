import { ReactNode } from "react";

export type InputProps = {
  placeholder: String;
  type: String;
};
export type CardInputProps = {
  imgsrc: string;
  name: String;
  position: String;
};

export interface GlobalType<T> {
  id: T;
}

export interface InputLabelTypes {
  id: number;
  name: string;
  value: string | number;
}

export interface EmployeeInformationApi {
  key: string;
  label: ReactNode;
  value?: ReactNode;
  description?: string[];
}
