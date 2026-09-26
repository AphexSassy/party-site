import React from 'react';
export function IconButton({label,glyph='↘',tone='red',size=40,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  const col=tone==='white'?'var(--paper)':tone==='ink'?'var(--ink)':'var(--blood-600)';
  const fill=tone==='white'?'var(--ink)':'var(--paper)';
  return <button aria-label={label} title={label} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:size,height:size,display:'grid',placeItems:'center',borderRadius:0,cursor:'pointer',border:'2px solid '+col,
      background:h?col:'transparent',color:h?fill:col,fontFamily:'var(--font-impact)',fontSize:size*.5,lineHeight:1,
      transform:h?'rotate(-8deg)':'none',transition:'background var(--dur-fast), color var(--dur-fast), transform var(--dur-fast) var(--ease-snap)',...style}} {...rest}>{glyph}</button>;
}