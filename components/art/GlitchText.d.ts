import * as React from 'react';
/** Text that periodically tears into offset red/ink horizontal slices and skews — a Flash-era glitch burst. */
export interface GlitchTextProps{
  children:React.ReactNode;
  /** Element to render, e.g. "h1" */
  as?:keyof JSX.IntrinsicElements;
  color?:string;
  /** Slice colors */
  glitch?:string;ghost?:string;
  /** Seconds per cycle; burst occupies the last ~15% */
  speed?:number;
  /** Skew-shake the base text during the burst */
  shake?:boolean;
  style?:React.CSSProperties;
}
export declare function GlitchText(props:GlitchTextProps):JSX.Element;