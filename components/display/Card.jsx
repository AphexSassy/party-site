import React from 'react';
export function Card({variant='paper',code,title,crop=true,children,style}){
  const V={paper:['var(--paper)','var(--ink)','var(--ink)'],bone:['var(--bone-200)','var(--ink)','var(--ink)'],crimson:['var(--grad-crimson-flare),var(--crimson-950)','var(--bone-100)','var(--bone-100)'],ink:['var(--ink)','var(--bone-100)','var(--bone-100)']}[variant]||[];
  const o='calc(var(--crop-overhang) * -1)';const dash='1px dashed '+V[2];
  return <div style={{position:'relative',padding:'16px 18px',background:V[0],color:V[1],...style}}>
    {crop&&<><span style={{position:'absolute',left:o,right:o,top:0,borderTop:dash,opacity:.6}}></span><span style={{position:'absolute',left:o,right:o,bottom:0,borderTop:dash,opacity:.6}}></span><span style={{position:'absolute',top:o,bottom:o,left:0,borderLeft:dash,opacity:.6}}></span><span style={{position:'absolute',top:o,bottom:o,right:0,borderLeft:dash,opacity:.6}}></span></>}
    {(code||title)&&<div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:12,marginBottom:10}}>
      {title&&<span style={{font:'var(--text-label)',fontSize:13,textTransform:'uppercase'}}>{title}</span>}
      {code&&<span style={{font:'var(--text-micro)',color:'var(--blood-600)',textTransform:'uppercase'}}>{code}</span>}</div>}
    {children}
  </div>;
}