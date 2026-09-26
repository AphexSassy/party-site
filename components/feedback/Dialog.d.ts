import * as React from 'react';
/** Win2000-style modal window: red gradient title bar, bevelled grey body, red offset; switches on like a CRT. */
export interface DialogProps{
  open:boolean;onClose:()=>void;title:string;
  children?:React.ReactNode;
  /** Right-aligned buttons — use Button variant="classic" */
  actions?:React.ReactNode;
  /** Title-bar glyph */
  icon?:string;
}
export declare function Dialog(props:DialogProps):JSX.Element|null;