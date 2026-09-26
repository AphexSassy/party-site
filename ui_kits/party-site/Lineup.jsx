function SetRow({i,t,a,g,liked,onLike}){const {Tag,Badge,IconButton,Tooltip}=window.Y2KPartyDesignSystem_2620e7;const [h,setH]=React.useState(false);
return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'flex',alignItems:'center',gap:20,flexWrap:'wrap',padding:'16px 14px',borderTop:'1px solid var(--line-ember)',background:h?'var(--blood-600)':'transparent',transform:h?'translateX(14px) skewX(-4deg)':'none',transition:'transform var(--dur-base) var(--ease-snap), background var(--dur-fast) steps(2)'}}>
<span style={{font:'400 58px/.9 var(--font-impact)',color:h?'var(--paper)':'var(--blood-600)',minWidth:70,animation:h?'y2k-glitch 160ms steps(2) infinite':'none'}}>{String(i+1).padStart(2,'0')}</span>
<span style={{font:'400 13px var(--font-mono)',color:'var(--bone-200)',minWidth:50}}>{t}</span>
<span style={{flex:1,font:'900 44px/.9 var(--font-display)',letterSpacing:'-.05em',color:'var(--bone-100)'}}>{a}</span>
<Tag dark>{g}</Tag>{i===0&&<Badge tone="white" blink>Opening</Badge>}
<Tooltip label={liked?'Saved':'Save set'}><IconButton label="Save" glyph={liked?'◆':'＋'} tone="white" onClick={onLike}/></Tooltip></div>;}
function LineupScreen({go}){const {Tabs,Button,ShardBurst,GlitchText}=window.Y2KPartyDesignSystem_2620e7;
const nights={'Fri 8/27':[['22:00','Dopedupafterschool','Club'],['23:30','Soldouttosociety','Bass'],['01:00','Abortedsouls','Techno']],'Sat 8/28':[['22:00','DJ Kool.Aid','Club'],['23:30','Pinkshard','Bass'],['01:00','Epyt b2b CDT','Jersey'],['02:30','Southbound83','Techno']]};
const [n,setN]=React.useState('Sat 8/28');const [liked,setLiked]=React.useState({});
return <main style={{position:'relative',overflow:'hidden',background:'var(--crimson-950)',minHeight:760,padding:'40px var(--gutter-page) 60px'}}>
<div style={{position:'absolute',right:-120,top:-60,width:'72%',height:'120%'}}><ShardBurst palette="crimson" seed={n==='Fri 8/27'?5:44} density={110} originX={70} originY={30} spread={220} rotate={160} background={false}/></div>
<div style={{position:'relative'}}>
<GlitchText as="h1" speed={2.8} style={{margin:'0 0 4px',font:'400 150px/1 var(--font-tall)',letterSpacing:'.3em',color:'var(--bone-100)'}}>LINEUP</GlitchText>
<div style={{font:'var(--text-micro)',color:'var(--blood-600)',letterSpacing:'.1em',marginBottom:24}}>2342 AS OF JUNE 24, 2000 | {nights[n].length} SETS</div>
<Tabs tabs={Object.keys(nights)} value={n} onChange={setN}/>
<div key={n} style={{display:'flex',flexDirection:'column',marginTop:26,maxWidth:900,animation:'y2k-tv-on 380ms var(--ease-out) both'}}>
{nights[n].map(([t,a,g],i)=><SetRow key={a} i={i} t={t} a={a} g={g} liked={liked[a]} onLike={()=>setLiked({...liked,[a]:!liked[a]})}/>)}
</div>
<div style={{marginTop:28}}><Button variant="flash" arrow onClick={()=>go('rsvp')}>Rsvp for {n}</Button></div></div>
</main>;}
window.LineupScreen=LineupScreen;