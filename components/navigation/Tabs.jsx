import React from 'react';
export function Tabs({tabs=[],value,defaultValue,onChange}){
  const [v,setV]=React.useState(defaultValue??(tabs[0]&&(tabs[0].value??tabs[0])));const cur=value??v;
  return <div role="tablist" style={{display:'flex',gap:6,flexWrap:'wrap'}}>
    {tabs.map(t=>{const val=t.value??t;const lab=t.label??t;const on=val===cur;
      return <button key={val} role="tab" aria-selected={on} onClick={()=>{setV(val);onChange&&onChange(val)}}
        style={{position:'relative',background:on?'var(--oxblood-800)':'var(--rust-700)',color:'var(--paper)',border:'none',padding:'7px 16px 6px',cursor:'pointer',clipPath:'polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%)',font:'400 15px/1 var(--font-impact)',textTransform:'uppercase',letterSpacing:'.04em',marginBottom:8,transform:on?'translateY(-2px)':'none',transition:'transform var(--dur-fast) var(--ease-snap)'}}>
        {lab}</button>;})}
  </div>;
}