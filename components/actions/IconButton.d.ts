import * as React from 'react';
/** Square glyph button; fills and kicks on hover. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label:string;
  /** Unicode glyph: ↘ ↗ → ✕ ＋ ▲ ◆ */
  glyph?:string;
  tone?:'red'|'ink'|'white';
  size?:number;
}
export declare function IconButton(props:IconButtonProps):JSX.Element;