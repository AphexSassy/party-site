import * as React from 'react';
/** Radio group; selected dot pops in red. */
export interface RadioProps{
  name:string;
  options:(string|{value:string;label:string})[];
  value?:string;defaultValue?:string;onChange?:(value:string)=>void;
  dark?:boolean;direction?:'row'|'column';
}
export declare function Radio(props:RadioProps):JSX.Element;