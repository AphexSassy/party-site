import * as React from 'react';
/** Bracketed tiny bold caps label, e.g. "[ NEW URL: YOURPARTY.NET ]". */
export interface BadgeProps{
  children?:React.ReactNode;
  tone?:'red'|'ink'|'white'|'orange';
  /** Blinking square for live states */
  blink?:boolean;
  style?:React.CSSProperties;
}
export declare function Badge(props:BadgeProps):JSX.Element;