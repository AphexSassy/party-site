import React from 'react';
export function Toast({children,title='ATTENTION!!',onClose,style}){
  return <div role="status" style={{display:'flex',alignItems:'flex-start',gap:12,background:'var(--paper)',color:'var(--ink)',padding:'10px 12px',boxShadow:'0 0 0 1px var(--ink),5px 5px 0 var(--blood-600)',minWidth:260,maxWidth:380,animation:'y2k-jolt 360ms var(--ease-snap)',...style}}>
    <div style={{flex:1,display:'flex',flexDirection:'column',gap:4}}>
      <span style={{font:'italic 900 13px/1 var(--font-display)',letterSpacing:'.04em',color:'var(--blood-600)',animation:'y2k-flicker 2.4s linear infinite'}}>{title}</span>
      <span style={{font:'var(--text-body)'}}>{children}</span></div>
    {onClose&&<button aria-label="Dismiss" onClick={onClose} style={{background:'transparent',border:'none',color:'var(--ink)',cursor:'pointer',font:'400 14px var(--font-impact)'}}>✕</button>}
  </div>;
}