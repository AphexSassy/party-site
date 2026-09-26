import React from 'react';
const SIZES={sm:{padding:'7px 16px 6px 12px',fontSize:14},md:{padding:'11px 26px 10px 16px',fontSize:18},lg:{padding:'15px 38px 13px 22px',fontSize:26}};
const CUT='polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))';
const VARIANTS={
primary:{bg:'var(--blood-600)',fg:'var(--paper)',echo:'var(--ink)',line:'none'},
secondary:{bg:'transparent',fg:'var(--blood-600)',echo:'transparent',line:'var(--blood-600)'},
flash:{bg:'var(--paper)',fg:'var(--ink)',echo:'var(--blood-600)',line:'none'},
orange:{bg:'var(--orange-500)',fg:'var(--paper)',echo:'var(--ink)',line:'none'},
ghost:{bg:'transparent',fg:'currentColor',echo:'transparent',line:'none'}};
function Classic({children,disabled,onClick,type,style,rest}){
  const [d,setD]=React.useState(false);
  return <button type={type} disabled={disabled} onClick={onClick} onMouseDown={()=>setD(true)} onMouseUp={()=>setD(false)} onMouseLeave={()=>setD(false)}
    style={{background:'var(--win-face)',color:disabled?'var(--win-shadow)':'var(--ink)',border:'none',borderRadius:0,padding:d?'5px 11px 3px 13px':'4px 12px',minWidth:48,font:'var(--text-os)',boxShadow:d?'var(--shadow-bevel-in)':'var(--shadow-bevel-out)',cursor:disabled?'default':'pointer',outline:'none',...style}} {...rest}>{children}</button>;
}
export function Button({variant='primary',size='md',arrow=false,index,disabled=false,children,onClick,type='button',style,...rest}){
  const [h,setH]=React.useState(false);const [d,setD]=React.useState(false);
  if(variant==='classic')return <Classic {...{children,disabled,onClick,type,style,rest}}/>;
  const v=VARIANTS[variant]||VARIANTS.primary;const act=!disabled;
  const shift=d&&act?'translate(0,0)':h&&act?'translate(-3px,-3px)':'translate(-1px,-1px)';
  const outlineHover=h&&act&&variant==='secondary';
  return <button type={type} disabled={disabled} onClick={onClick}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setD(false)}} onMouseDown={()=>setD(true)} onMouseUp={()=>setD(false)}
    style={{position:'relative',isolation:'isolate',background:'none',border:'none',padding:0,cursor:act?'pointer':'not-allowed',opacity:disabled?.35:1,color:v.fg,...style}} {...rest}>
    <span aria-hidden="true" style={{position:'absolute',inset:0,transform:'translate(5px,5px)',background:v.echo,clipPath:CUT,zIndex:-1}}></span>
    <span style={{display:'inline-flex',alignItems:'center',gap:10,...SIZES[size],background:outlineHover?'var(--blood-600)':v.bg,color:outlineHover?'var(--paper)':v.fg,
      clipPath:CUT,boxShadow:v.line==='none'?'none':'inset 0 0 0 2px '+v.line,fontFamily:'var(--font-impact)',fontWeight:400,textTransform:'uppercase',letterSpacing:'.02em',lineHeight:1,
      transform:shift,transition:'transform var(--dur-fast) var(--ease-snap)',animation:h&&act?'y2k-glitch var(--dur-base) var(--ease-glitch)':'none'}}>
      {index!=null&&<span style={{font:'var(--text-micro)',opacity:.8}}>{String(index).padStart(2,'0')}</span>}
      {children}{arrow&&<span aria-hidden="true" style={{fontSize:'.8em'}}>↘</span>}
    </span>
  </button>;
}