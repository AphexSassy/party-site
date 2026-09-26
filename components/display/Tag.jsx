import React from 'react';
export function Tag({children,selected=false,onClick,onRemove,dark=false}){
  const col=dark?'var(--bone-200)':'var(--ink)';
  return <span onClick={onClick} style={{display:'inline-flex',alignItems:'center',gap:6,clipPath:'polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)',boxShadow:'inset 0 0 0 1px '+(selected?'var(--blood-600)':col),background:selected?'var(--blood-600)':'transparent',color:selected?'var(--paper)':col,font:'400 13px/1 var(--font-impact)',textTransform:'uppercase',letterSpacing:'.04em',padding:'5px 12px 4px 8px',cursor:onClick?'pointer':'default',userSelect:'none'}}>
    <span style={{width:4,height:4,background:selected?'var(--paper)':'var(--blood-600)'}}></span>{children}{onRemove&&<span onClick={e=>{e.stopPropagation();onRemove()}} style={{cursor:'pointer',opacity:.8}}>✕</span>}</span>;
}