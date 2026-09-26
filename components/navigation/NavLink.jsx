import React from 'react';
export function NavLink({children,href='#',active=false,num,prefix='',arrow='',tone='ink',onClick}){
  const [h,setH]=React.useState(false);
  const col=tone==='white'?'var(--paper)':tone==='red'?'var(--blood-600)':'var(--ink)';
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'inline-flex',alignItems:'baseline',gap:4,textDecoration:'none',color:active||h?'var(--blood-600)':col,font:'400 18px/1 var(--font-impact)',textTransform:'uppercase',letterSpacing:'var(--tr-caps)',borderBottom:active?'2px solid var(--blood-600)':'2px solid transparent',paddingBottom:2,animation:h?'y2k-glitch var(--dur-base) var(--ease-glitch)':'none'}}>
    {prefix&&<span style={{color:'var(--blood-600)'}}>{prefix}</span>}{children}{num!=null&&<span style={{color:'var(--blood-600)',fontSize:'.7em'}}>{num}</span>}{arrow&&<span style={{fontSize:14,color:'var(--blood-600)'}}>{arrow}</span>}
  </a>;
}