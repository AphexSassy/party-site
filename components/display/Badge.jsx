import React from 'react';
export function Badge({children,tone='red',blink=false,style}){
  const col={red:'var(--blood-600)',ink:'var(--ink)',white:'var(--paper)',orange:'var(--orange-500)'}[tone];
  return <span style={{display:'inline-flex',alignItems:'center',gap:5,color:col,font:'var(--text-micro)',letterSpacing:'var(--tr-micro)',textTransform:'uppercase',whiteSpace:'nowrap',...style}}>
    [ {blink&&<span style={{width:6,height:6,background:'currentColor',animation:'y2k-blink 1s steps(1) infinite'}}></span>}{children} ]</span>;
}