import React from 'react';
export function Radio({name,options=[],value,defaultValue,onChange,dark=false,direction='row'}){
  const [v,setV]=React.useState(defaultValue);const cur=value??v;
  const col=dark?'var(--bone-200)':'var(--ink)';
  return <div role="radiogroup" style={{display:'flex',flexDirection:direction,gap:direction==='row'?20:10}}>
    {options.map(o=>{const val=o.value??o;const lab=o.label??o;const on=cur===val;
      return <label key={val} style={{display:'inline-flex',alignItems:'center',gap:8,cursor:'pointer',color:dark?'var(--bone-100)':'var(--ink)',font:'400 15px var(--font-impact)',textTransform:'uppercase'}}>
        <input type="radio" name={name} value={val} checked={on} onChange={()=>{setV(val);onChange&&onChange(val)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
        <span style={{width:18,height:18,borderRadius:'50%',border:'2px solid '+(on?'var(--blood-600)':col),display:'grid',placeItems:'center'}}><span style={{width:8,height:8,borderRadius:'50%',background:on?'var(--blood-600)':'transparent',transform:on?'scale(1)':'scale(0)',transition:'transform var(--dur-base) var(--ease-snap)'}}></span></span>{lab}
      </label>;})}
  </div>;
}