import React from 'react';
export function Input({label,code,hint,error,dark=false,variant='slab',style,...rest}){
  const [f,setF]=React.useState(false);
  if(variant==='classic')return <label style={{display:'inline-flex',flexDirection:'column',gap:4,...style}}>
    {label&&<span style={{font:'var(--text-os)',color:dark?'var(--bone-100)':'var(--ink)'}}>{label}</span>}
    <input {...rest} style={{background:'var(--paper)',color:'var(--ink)',border:'none',borderRadius:0,padding:'4px 6px',font:'var(--text-os)',fontSize:12,boxShadow:'var(--shadow-bevel-in)',outline:'none',minWidth:120}}/></label>;
  const fg=dark?'var(--bone-100)':'var(--ink)';
  const line=error?'var(--blood-600)':f?'var(--orange-500)':dark?'var(--bone-200)':'var(--ink)';
  return <label style={{display:'flex',flexDirection:'column',gap:5,color:fg,...style}}>
    {label&&<span style={{display:'flex',justifyContent:'space-between',font:'var(--text-label)',textTransform:'uppercase',color:dark?'var(--bone-100)':'var(--ink)'}}><span>{label}</span>{code&&<span style={{font:'var(--text-micro)',color:'var(--blood-600)'}}>{code}</span>}</span>}
    <input onFocus={()=>setF(true)} onBlur={()=>setF(false)} {...rest}
      style={{background:dark?'rgba(10,7,8,.55)':'var(--paper)',color:fg,border:'none',borderBottom:'2px solid '+line,borderLeft:'4px solid '+line,borderRadius:0,padding:'10px 12px',font:'500 16px var(--font-display)',outline:'none',boxShadow:f?'var(--shadow-glow-blood)':'none',transition:'box-shadow var(--dur-base)'}}/>
    {(error||hint)&&<span style={{font:'var(--text-micro)',color:error?'var(--blood-600)':dark?'var(--smoke-300)':'var(--smoke-500)',textTransform:'uppercase',animation:error?'y2k-glitch var(--dur-base) var(--ease-glitch) 2':'none'}}>{error?'! '+error:hint}</span>}
  </label>;
}