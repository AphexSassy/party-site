import * as React from 'react';
/** White notice with flickering red "ATTENTION!!" header and red offset; jolts in. */
export interface ToastProps{
  children?:React.ReactNode;
  title?:string;
  onClose?:()=>void;
  style?:React.CSSProperties;
}
export declare function Toast(props:ToastProps):JSX.Element;