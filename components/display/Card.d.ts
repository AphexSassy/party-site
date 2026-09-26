import * as React from 'react';
/**
 * Square panel framed by dashed crop lines that overshoot the corners.
 * @startingPoint section="Display" subtitle="Crop-line panels" viewport="700x300"
 */
export interface CardProps{
  variant?:'paper'|'bone'|'crimson'|'ink';
  /** Small red code top-right, e.g. "15.NOVEMBER.01" */
  code?:string;
  title?:string;
  /** Dashed crop lines (default true) */
  crop?:boolean;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function Card(props:CardProps):JSX.Element;