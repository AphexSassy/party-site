import React from 'react';
export function IndexLink({title,sub,num,href='#',onClick,dark=false}){
  const [h,setH]=React.useState(false);
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'flex',alignItems:'stretch',justifyContent:'flex-end',gap:8,textDecoration:'none'}}>
    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'center',gap:3,transform:h?'translateX(-10px)':'none',transition:'transform var(--dur-fast) var(--ease-snap)'}}>
      <span style={{font:'400 22px/1 var(--font-impact)',textTransform:'uppercase',color:h?'var(--blood-600)':dark?'var(--bone-100)':'var(--ink)'}}>{title}</span>
      {sub&&<span style={{font:'var(--text-micro)',letterSpacing:'.1em',textTransform:'uppercase',color:dark?'var(--smoke-300)':'var(--ink)'}}>{sub}</span>}
    </span>
    <span style={{font:'400 44px/.9 var(--font-impact)',color:'var(--blood-600)',minWidth:'1.1em',textAlign:'right',animation:h?'y2k-glitch var(--dur-base) var(--ease-glitch) infinite':'none'}}>{String(num).padStart(2,'0')}</span>
    <span style={{width:4,background:h?'var(--blood-600)':'var(--smoke-500)',transform:h?'scaleY(1.3)':'none',transition:'transform var(--dur-fast) var(--ease-snap)'}}></span>
  </a>;
}