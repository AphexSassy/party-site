import React from 'react';
export function Polaroid({src,alt='',caption,scrawl,mono=false,tilt=0,width=220,style}){
  const [h,setH]=React.useState(false);
  return <figure onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{margin:0,width,position:'relative',transform:'rotate('+(h?0:tilt)+'deg)',transition:'transform var(--dur-base) var(--ease-snap)',...style}}>
    <div style={{position:'relative',aspectRatio:'214/294',overflow:'hidden',background:'var(--ink)',boxShadow:'0 0 0 1px var(--line-ember)'}}>
      <img src={src} alt={alt} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',filter:mono&&!h?'var(--filter-mono)':'var(--filter-flash)',transform:h?'scale(1.08)':'none',transition:'transform var(--dur-slow) var(--ease-out), filter var(--dur-fast)'}}/>
      <img src={src} alt="" aria-hidden="true" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',mixBlendMode:'screen',opacity:h?.75:0,transform:'translate(7px,-2px) scale(1.08)',filter:'var(--filter-duotone-red)',transition:'opacity var(--dur-fast) var(--ease-glitch)',animation:h?'y2k-shake 1.2s linear infinite':'none'}}/>
      <span style={{position:'absolute',inset:0,background:'var(--pattern-scanline)',opacity:.45,pointerEvents:'none'}}></span>
      {scrawl&&<span style={{position:'absolute',left:8,bottom:4,font:'400 42px/1 var(--font-impact)',color:'var(--blood-600)',textShadow:'2px 2px 0 var(--paper)'}}>{scrawl}</span>}
    </div>
    {caption&&<figcaption style={{display:'flex',justifyContent:'space-between',marginTop:6,font:'var(--text-micro)',color:'var(--smoke-500)',textTransform:'uppercase'}}><span>{caption}</span><span style={{color:'var(--blood-600)'}}>▲</span></figcaption>}
  </figure>;
}