import * as React from 'react';
/**
 * Corner-cut slab button with an offset echo it presses into; or a Win2000 bevel button (variant="classic").
 * @startingPoint section="Actions" subtitle="Slab + Win2000 buttons" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /** primary = blood/ink echo; secondary = red outline; flash = white/red echo (dark grounds); orange = orange/ink; ghost = text; classic = grey Win2000 bevel, lowercase Tahoma */
  variant?:'primary'|'secondary'|'flash'|'orange'|'ghost'|'classic';
  /** Ignored for classic */
  size?:'sm'|'md'|'lg';
  arrow?:boolean;
  /** Small index number before label, e.g. 1 → "01" */
  index?:number;
  disabled?:boolean;
  children?:React.ReactNode;
}
export declare function Button(props:ButtonProps):JSX.Element;