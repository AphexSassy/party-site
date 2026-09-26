import React from 'react';
export function Dialog({open,onClose,title,children,actions,icon='▲'}){
  if(!open)return null;
  const tb={width:16,height:14,background:'var(--win-face)',boxShadow:'var(--shadow-bevel-out)',border:'none',padding:0,font:'700 9px/1 var(--font-os)',color:'var(--ink)',display:'grid',placeItems:'center',cursor:'pointer'};
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(10,7,8,.55)',display:'grid',placeItems:'center',zIndex:100,padding:20}}>
    <div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} style={{width:'min(460px,100%)',background:'var(--win-face)',boxShadow:'var(--shadow-bevel-out),8px 8px 0 var(--blood-600)',padding:3,animation:'y2k-tv-on 380ms var(--ease-out) both'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'var(--grad-win-title)',color:'var(--paper)',padding:'3px 3px 3px 6px',gap:8}}>
        <span style={{display:'flex',alignItems:'center',gap:6,font:'700 11px/1 var(--font-os)'}}><span style={{fontSize:9}}>{icon}</span>{title}</span>
        <span style={{display:'flex',gap:2}}><span style={tb}>_</span><span style={tb}>□</span><button aria-label="Close" onClick={onClose} style={{...tb,marginLeft:2}}>✕</button></span>
      </div>
      <div style={{padding:'16px 14px 10px',font:'var(--text-os)',fontSize:12,lineHeight:1.5,color:'var(--ink)'}}>{children}</div>
      {actions&&<div style={{display:'flex',justifyContent:'flex-end',gap:6,padding:'4px 10px 10px'}}>{actions}</div>}
    </div>
  </div>;
}