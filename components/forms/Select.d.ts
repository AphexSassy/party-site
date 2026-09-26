import * as React from 'react';
/** Native select with a solid red ▼ cap. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  label?:string;
  options:(string|{value:string;label:string})[];
  dark?:boolean;
}
export declare function Select(props:SelectProps):JSX.Element;