import React from 'react';
export function GlitchText({children,as='span',color,glitch='var(--blood-600)',ghost='var(--ink)',speed=3.4,shake=true,style}){
  const Tag=as;const base={display:'inline-block',position:'relative',color,...style};
  const clone=(c,anim,delay)=><span aria-hidden="true" style={{position:'absolute',inset:0,color:c,animation:anim+' '+speed+'s steps(1) '+delay+'s infinite',pointerEvents:'none',whiteSpace:'inherit'}}>{children}</span>;
  return <Tag style={base}>
    <span style={{display:'inline-block',animation:shake?'y2k-shake '+speed+'s linear infinite':'none'}}>{children}</span>
    {clone(glitch,'y2k-slice-a',0)}{clone(ghost,'y2k-slice-b',.08)}
  </Tag>;
}