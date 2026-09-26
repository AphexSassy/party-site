import * as React from 'react';
/** Right-aligned numbered menu entry: compressed title, tiny caps sub-line, huge red index, vertical bar. */
export interface IndexLinkProps{
  title:string;
  sub?:string;
  num:number|string;
  href?:string;onClick?:(e:React.MouseEvent)=>void;
  dark?:boolean;
}
export declare function IndexLink(props:IndexLinkProps):JSX.Element;