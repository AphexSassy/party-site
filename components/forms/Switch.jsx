import React from 'react';
export function Switch({label,checked,defaultChecked,onChange,dark=false}){
  const [c,setC]=React.useState(!!defaultChecked);const on=checked??c;
  const col=dark?'var(--bone-200)':'var(--ink)';
  return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:'pointer',color:dark?'var(--bone-100)':'var(--ink)',font:'400 15px var(--font-impact)',textTransform:'uppercase'}}>
    <input type="checkbox" role="switch" checked={on} onChange={e=>{setC(e.target.checked);onChange&&onChange(e.target.checked)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span style={{width:48,height:22,border:'2px solid '+(on?'var(--blood-600)':col),background:on?'var(--blood-600)':'transparent',position:'relative',transition:'background var(--dur-base)'}}>
      <span style={{position:'absolute',top:2,left:on?28:2,width:14,height:14,background:on?'var(--paper)':col,transition:'left var(--dur-base) var(--ease-snap)'}}></span>
    </span>{label}
  </label>;
}