import * as React from 'react';
/** Text field: L-rule slab (default) or sunken Win2000 field (variant="classic"). */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?:string;
  /** Small red reference right of label, e.g. "F.01" */
  code?:string;
  hint?:string;
  error?:string;
  /** Light text for dark grounds */
  dark?:boolean;
  variant?:'slab'|'classic';
}
export declare function Input(props:InputProps):JSX.Element;