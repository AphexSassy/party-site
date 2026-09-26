import * as React from 'react';
/**
 * Flash-photo frame: red hairline, scanlines, compressed date overlay; red RGB-split shake on hover.
 * @startingPoint section="Display" subtitle="Glitch photo frames" viewport="700x380"
 */
export interface PolaroidProps{
  src:string;alt?:string;
  caption?:string;
  /** Big compressed overlay, e.g. "8/28" */
  scrawl?:string;
  /** Grayscale at rest, color on hover */
  mono?:boolean;
  tilt?:number;
  width?:number|string;
  style?:React.CSSProperties;
}
export declare function Polaroid(props:PolaroidProps):JSX.Element;