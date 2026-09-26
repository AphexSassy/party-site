import React from 'react';
export function ThumbNav({items=[],size=80,strip=true,style}){
  const [h,setH]=React.useState(-1);
  return <nav style={{background:'var(--orange-500)',...style}}>
    {strip&&<div style={{height:30,background:'var(--grey-800)'}}></div>}
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:10,padding:'38px 20px 60px'}}>
      {items.map((it,i)=>{const on=h===i;return <a key={it.label} href={it.href||'#'} onClick={it.onClick} onMouseEnter={()=>setH(i)} onMouseLeave={()=>setH(-1)}
        style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,width:size,textDecoration:'none',transform:on?'translateY(-8px)':'none',transition:'transform var(--dur-base) var(--ease-snap)'}}>
        <span style={{font:'var(--text-geo)',color:on?'var(--ink)':'var(--paper)',whiteSpace:'nowrap',textTransform:'lowercase'}}>{it.label}</span>
        <span style={{position:'relative',width:size,height:size,overflow:'hidden',background:'var(--bone-200)',boxShadow:on?'5px 5px 0 var(--ink)':'none',transition:'box-shadow var(--dur-fast)'}}>
          <img src={it.src} alt="" style={{width:'100%',height:'100%',objectFit:'cover',filter:on?'var(--filter-flash)':'var(--filter-mono)',transform:on?'scale(1.15)':'none',transition:'transform var(--dur-slow) var(--ease-out)'}}/>
        </span></a>;})}
    </div>
  </nav>;
}