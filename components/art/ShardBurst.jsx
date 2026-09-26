import React from 'react';
const PALETTES={
ember:{bg:'var(--bone-200)',faces:['#d04a22','#c41e2a','#e08a70','#eab09c','#ffffff','#a8313a','#f4f2ef'],side:'#7a1418',line:'#c41e2a'},
paper:{bg:'var(--paper)',faces:['#c41e2a','#0a0708','#e4e4e4','#d04a22','#ffffff','#a8313a'],side:'#3d0a1c',line:'#c41e2a'},
crimson:{bg:'var(--crimson-950)',faces:['#6e1230','#3d0a1c','#c41e2a','#e4e4e4','#ffffff','#a8313a','#1c0612'],side:'#0e030a',line:'#c41e2a'},
orange:{bg:'var(--orange-500)',faces:['#ffffff','#0a0708','#c41e2a','#ffb27a','#f4f2ef'],side:'#7a2a00',line:'#ffffff'},
ink:{bg:'var(--ink)',faces:['#c41e2a','#ffffff','#d04a22','#3d0a1c','#e4e4e4'],side:'#000000',line:'#c41e2a'}};
function rng(seed){let s=seed>>>0||1;return()=>{s^=s<<13;s^=s>>>17;s^=s<<5;return((s>>>0)%100000)/100000;};}
export function ShardBurst({palette='ember',seed=7,density=60,originX=38,originY=34,spread=360,rotate=0,lines=true,slabs=true,background=true,animate=true,drift=true,interactive=true,explodeOnClick=true,width='100%',height='100%',style,className}){
  const P=PALETTES[palette]||PALETTES.ember;
  const W=1000,H=700,ox=W*originX/100,oy=H*originY/100;
  const [burst,setBurst]=React.useState(0);
  const L=[React.useRef(null),React.useRef(null),React.useRef(null)];
  React.useEffect(()=>{if(!interactive)return;let tx=0,ty=0,cx=0,cy=0,raf;
    const mv=e=>{tx=e.clientX/window.innerWidth-.5;ty=e.clientY/window.innerHeight-.5;};
    const loop=()=>{cx+=(tx-cx)*.07;cy+=(ty-cy)*.07;[.25,.6,1].forEach((d,i)=>{const g=L[i].current;if(g)g.style.transform='translate('+(cx*d*70).toFixed(2)+'px,'+(cy*d*50).toFixed(2)+'px) rotate('+(cx*d*4).toFixed(2)+'deg)';});raf=requestAnimationFrame(loop);};
    window.addEventListener('mousemove',mv);raf=requestAnimationFrame(loop);return()=>{window.removeEventListener('mousemove',mv);cancelAnimationFrame(raf);};},[interactive]);
  const r=rng(seed*9973+density);const shards=[],hair=[],planes=[];
  const a0=(rotate-spread/2)*Math.PI/180,span=spread*Math.PI/180;
  for(let i=0;i<density;i++){
    const a=a0+r()*span;const Ln=80+Math.pow(r(),1.4)*900;const w=4+r()*r()*70;
    const st=r()*40;const dx=Math.cos(a),dy=Math.sin(a),nx=-dy,ny=dx;const m=.25+r()*.5;
    const pts=[[ox+dx*st,oy+dy*st],[ox+dx*Ln*m+nx*w,oy+dy*Ln*m+ny*w],[ox+dx*Ln,oy+dy*Ln]];
    shards.push({pts,ex:nx*(3+r()*9),ey:ny*(3+r()*9),fill:P.faces[Math.floor(r()*P.faces.length)],op:.55+r()*.45,stroke:r()<.3,d:Math.round(r()*500)});
  }
  if(slabs)for(let i=0;i<Math.round(density/12);i++){
    const a=a0+r()*span;const d0=120+r()*300,d1=d0+200+r()*500;const w0=10+r()*40,w1=w0+r()*90;
    const dx=Math.cos(a),dy=Math.sin(a),nx=-dy,ny=dx;
    planes.push({p:[[ox+dx*d0+nx*w0,oy+dy*d0+ny*w0],[ox+dx*d1+nx*w1,oy+dy*d1+ny*w1],[ox+dx*d1-nx*w1*.2,oy+dy*d1-ny*w1*.2],[ox+dx*d0-nx*w0*.2,oy+dy*d0-ny*w0*.2]],fill:P.faces[Math.floor(r()*2)],ex:nx*14,ey:ny*14,d:Math.round(r()*300)});
  }
  if(lines)for(let i=0;i<Math.round(density*.6);i++){const a=a0+r()*span;const Ln=300+r()*1100;hair.push([ox+Math.cos(a)*r()*60,oy+Math.sin(a)*r()*60,ox+Math.cos(a)*Ln,oy+Math.sin(a)*Ln,r()*.7+.15,2+r()*4,r()*3]);}
  const pt=a=>a.map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' ');
  const off=(a,x,y)=>a.map(q=>[q[0]+x,q[1]+y]);
  const org={transformOrigin:ox+'px '+oy+'px',transformBox:'view-box'};
  const inA=d=>animate?{...org,animation:'y2k-shard-in var(--dur-explode) var(--ease-out) '+d+'ms both'}:undefined;
  const dr=(dur,rev)=>drift?{...org,animation:'y2k-drift '+dur+'s ease-in-out infinite alternate'+(rev?' reverse':'')}:org;
  return <svg viewBox={'0 0 '+W+' '+H} preserveAspectRatio="xMidYMid slice" width={width} height={height} className={className} onClick={explodeOnClick?()=>setBurst(b=>b+1):undefined}
    style={{display:'block',background:background?P.bg:'transparent',overflow:'hidden',cursor:explodeOnClick?'crosshair':'default',...style}} aria-hidden="true">
    <g ref={L[0]}><g style={dr(9,true)}>{hair.map((h,i)=><line key={'h'+i+'-'+burst} x1={h[0]} y1={h[1]} x2={h[2]} y2={h[3]} stroke={P.line} strokeWidth=".6" opacity={h[4]} style={animate?{animation:'y2k-flicker '+h[5].toFixed(1)+'s linear '+h[6].toFixed(1)+'s infinite'}:undefined}/>)}</g></g>
    <g ref={L[1]}><g style={dr(13)}><g key={'p'+burst}>{planes.map((s,i)=><g key={i} style={inA(s.d)}><polygon points={pt(off(s.p,s.ex,s.ey))} fill={P.side}/><polygon points={pt(s.p)} fill={s.fill}/></g>)}</g></g></g>
    <g ref={L[2]}><g style={dr(7,true)}><g key={'s'+burst}>{shards.map((s,i)=><g key={i} style={inA(s.d)}><polygon points={pt(off(s.pts,s.ex,s.ey))} fill={P.side} opacity={.55*s.op}/><polygon points={pt(s.pts)} fill={s.fill} opacity={s.op} stroke={s.stroke?P.line:'none'} strokeWidth=".7"/></g>)}</g></g></g>
  </svg>;
}