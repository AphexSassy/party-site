import * as React from 'react';
/** Square checkbox; checked = red diamond with ✕. */
export interface CheckboxProps{
  label?:React.ReactNode;checked?:boolean;defaultChecked?:boolean;
  onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;dark?:boolean;disabled?:boolean;
}
export declare function Checkbox(props:CheckboxProps):JSX.Element;