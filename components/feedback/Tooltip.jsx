import React from 'react';
export function Tooltip({label,children,side='top'}){
  const [o,setO]=React.useState(false);
  const pos=side==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return <span onMouseEnter={()=>setO(true)} onMouseLeave={()=>setO(false)} onFocus={()=>setO(true)} onBlur={()=>setO(false)} style={{position:'relative',display:'inline-flex'}}>
    {children}
    {o&&<span role="tooltip" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,background:'#ffffe1',color:'var(--ink)',border:'1px solid var(--ink)',font:'var(--text-os)',padding:'3px 6px',whiteSpace:'nowrap',zIndex:50,pointerEvents:'none'}}>{label}</span>}
  </span>;
}