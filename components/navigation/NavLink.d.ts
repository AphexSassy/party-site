import * as React from 'react';
/** Compressed all-caps nav link; red on hover/active, glitches on hover. */
export interface NavLinkProps{
  children?:React.ReactNode;href?:string;active?:boolean;
  /** Trailing red number */
  num?:string|number;
  /** Leading red prefix, e.g. "_" */
  prefix?:string;
  arrow?:string;
  tone?:'ink'|'red'|'white';
  onClick?:(e:React.MouseEvent)=>void;
}
export declare function NavLink(props:NavLinkProps):JSX.Element;