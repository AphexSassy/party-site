import * as React from 'react';
/** Bauhaus-archive style nav: lowercase geometric labels over square grayscale thumbnails on solid orange. */
export interface ThumbNavItem{label:string;src:string;href?:string;onClick?:(e:React.MouseEvent)=>void;}
export interface ThumbNavProps{
  items:ThumbNavItem[];
  /** Thumbnail edge in px */
  size?:number;
  /** Dark grey strip above the orange block */
  strip?:boolean;
  style?:React.CSSProperties;
}
export declare function ThumbNav(props:ThumbNavProps):JSX.Element;