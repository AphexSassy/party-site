import * as React from 'react';
/** Hairline tag with clipped corner and red pip. */
export interface TagProps{
  children?:React.ReactNode;selected?:boolean;onClick?:()=>void;onRemove?:()=>void;dark?:boolean;
}
export declare function Tag(props:TagProps):JSX.Element;