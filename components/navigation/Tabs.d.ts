import * as React from 'react';
/** Slanted parallelogram tab strip (years, nights). */
export interface TabsProps{
  tabs:(string|{value:string;label:string})[];
  value?:string;defaultValue?:string;onChange?:(value:string)=>void;
}
export declare function Tabs(props:TabsProps):JSX.Element;