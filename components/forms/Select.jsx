import React from 'react';
export function Select({label,options=[],dark=false,style,...rest}){
  const fg=dark?'var(--bone-100)':'var(--ink)';
  return <label style={{display:'flex',flexDirection:'column',gap:5,...style}}>
    {label&&<span style={{font:'var(--text-label)',textTransform:'uppercase',color:fg}}>{label}</span>}
    <span style={{position:'relative',display:'block'}}>
      <select {...rest} style={{appearance:'none',WebkitAppearance:'none',width:'100%',background:dark?'rgba(10,7,8,.55)':'var(--paper)',color:fg,border:'2px solid '+(dark?'var(--bone-200)':'var(--ink)'),borderRadius:0,padding:'10px 44px 10px 12px',font:'400 17px var(--font-impact)',textTransform:'uppercase',cursor:'pointer',outline:'none'}}>
        {options.map(o=>typeof o==='string'?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span aria-hidden="true" style={{position:'absolute',right:0,top:0,bottom:0,width:36,display:'grid',placeItems:'center',background:'var(--blood-600)',color:'var(--paper)',pointerEvents:'none',fontSize:12}}>▼</span>
    </span>
  </label>;
}