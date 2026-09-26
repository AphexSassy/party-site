import * as React from 'react';
/** Square-track toggle with snap-eased thumb. */
export interface SwitchProps{
  label?:React.ReactNode;checked?:boolean;defaultChecked?:boolean;onChange?:(checked:boolean)=>void;dark?:boolean;
}
export declare function Switch(props:SwitchProps):JSX.Element;