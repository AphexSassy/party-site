import * as React from 'react';
/**
 * Chrome-and-black CRT set with antennas, channel dial and speaker grille. Screen cycles channels with static bursts; click screen or dial to switch.
 * @startingPoint section="Art" subtitle="Retro CRT with channel flips" viewport="700x420"
 */
export interface RetroTVChannel{
  /** Wordmark shown on the red screen, e.g. "your>party" */
  text?:string;
  /** Image shown red-duotoned on the screen */
  src?:string;
}
export interface RetroTVProps{
  channels?:RetroTVChannel[];
  /** Auto channel-flip ms; 0 = manual only */
  interval?:number;
  /** Overall width px (height scales) */
  width?:number;
  style?:React.CSSProperties;
}
export declare function RetroTV(props:RetroTVProps):JSX.Element;