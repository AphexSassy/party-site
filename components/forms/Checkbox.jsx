import React from 'react';
export function Checkbox({label,checked,defaultChecked,onChange,dark=false,disabled}){
  const [c,setC]=React.useState(!!defaultChecked);const on=checked??c;
  const col=dark?'var(--bone-200)':'var(--ink)';
  return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,color:dark?'var(--bone-100)':'var(--ink)',font:'400 15px var(--font-impact)',textTransform:'uppercase'}}>
    <input type="checkbox" checked={on} disabled={disabled} onChange={e=>{setC(e.target.checked);onChange&&onChange(e)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span style={{width:20,height:20,border:'2px solid '+(on?'var(--blood-600)':col),background:on?'var(--blood-600)':'transparent',display:'grid',placeItems:'center',color:'var(--paper)',fontSize:14,lineHeight:1,transform:on?'rotate(45deg)':'none',transition:'transform var(--dur-base) var(--ease-snap), background var(--dur-fast)'}}>{on?<span style={{transform:'rotate(-45deg)'}}>✕</span>:''}</span>{label}
  </label>;
}