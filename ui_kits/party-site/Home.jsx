function Crop({x,y,w,h,col='var(--ink)'}){const d='1px dashed '+col;return <div style={{position:'absolute',left:x,top:y,width:w,height:h,pointerEvents:'none'}}>
<span style={{position:'absolute',left:-16,right:-16,top:0,borderTop:d}}></span><span style={{position:'absolute',left:-16,right:-16,bottom:0,borderTop:d}}></span><span style={{position:'absolute',top:-16,bottom:-16,left:0,borderLeft:d}}></span><span style={{position:'absolute',top:-16,bottom:-16,right:0,borderLeft:d}}></span></div>;}
function HomeScreen({go}){const {Button,ShardBurst,IndexLink,Tabs,Card,Badge,RetroTV,ThumbNav,GlitchText,Input,Dialog,Toast}=window.Y2KPartyDesignSystem_2620e7;const A='../../assets/';
const [night,setNight]=React.useState('Sat 8/28');const [email,setEmail]=React.useState('');const [dlg,setDlg]=React.useState(false);const [toast,setToast]=React.useState(false);
const nav=k=>e=>{e.preventDefault();go(k)};
return <main>
<section style={{position:'relative',height:720,overflow:'hidden',background:'var(--bone-200)'}}>
<div style={{position:'absolute',inset:-40}}><ShardBurst palette="ember" seed={{'Fri 8/27':19,'Sat 8/28':7,'Sun 8/29':41}[night]} density={140} originX={30} originY={42}/></div>
<div style={{position:'absolute',left:0,right:0,top:18,display:'flex',justifyContent:'center'}}><Tabs tabs={['Fri 8/27','Sat 8/28','Sun 8/29']} value={night} onChange={setNight}/></div>
<div style={{position:'absolute',left:'var(--gutter-page)',bottom:14,mixBlendMode:'multiply',pointerEvents:'none'}}><GlitchText as="h1" speed={3.1} style={{margin:0,font:'var(--text-mega)',letterSpacing:'var(--tr-mega)',color:'var(--ink)'}}>{night.split(' ')[0]}<span style={{color:'var(--blood-600)'}}>.</span><br/>Night<span style={{color:'var(--blood-600)'}}>.</span></GlitchText></div>
<div style={{position:'absolute',right:'7%',top:'34%',width:350}}><Card code={night.toUpperCase()} title="Index" style={{background:'rgba(255,255,255,.88)'}}>
<div style={{display:'flex',flexDirection:'column',gap:14,paddingTop:4}}>
<IndexLink num={1} title="Lineup" sub="Four sets - don't wonder why" onClick={nav('lineup')}/>
<IndexLink num={2} title="Gallery" sub="Flash photos, last night" onClick={nav('gallery')}/>
<IndexLink num={3} title="Get on the list" sub="Address drops at 9PM" onClick={nav('rsvp')}/></div></Card>
<div style={{marginTop:14,display:'flex',justifyContent:'flex-end'}}><Badge tone="ink">Click the art to detonate</Badge></div></div>
</section>
<section style={{position:'relative',background:'var(--grad-floor)',padding:'70px var(--gutter-page) 60px',display:'flex',gap:60,flexWrap:'wrap',alignItems:'flex-end',justifyContent:'center'}}>
<RetroTV width={480} interval={2600} channels={[{text:'your>party'},{src:A+'imagery/flash-05.png'},{src:A+'art/crimson-flare.png'},{text:'sat 8/28'},{src:A+'imagery/flash-12.png'},{src:A+'imagery/street-crowd-night.png'}]}/>
<div style={{width:340,paddingBottom:40,display:'flex',flexDirection:'column',gap:14}}>
<b style={{font:'var(--text-label)'}}>RECENT NEWS FROM YOURPARTY.NET</b>
{[['28.AUGUST.00:','_the address goes out at ',<b key="b">9PM</b>,' to everyone on the list. check your texts.'],['21.AUGUST.00:','_we found a roof that holds 400 people. ',<b key="b">no phones</b>,' up there after 2.'],['14.AUGUST.00:','_last night is up in the gallery. ',<a key="a" href="#" onClick={nav('gallery')} style={{color:'var(--blood-600)',fontWeight:700}}>click here</a>,'.']].map(([d,...t])=><div key={d} style={{font:'var(--text-body)'}}><b style={{font:'800 13px var(--font-display)'}}>{d}</b><br/>{t}</div>)}
<div style={{display:'flex',flexDirection:'column',gap:2,font:'700 11px var(--font-display)',color:'var(--blood-600)',marginTop:6}}><span style={{color:'var(--ink)'}}>ARCHIVE</span><a href="#" onClick={nav('gallery')} style={{color:'inherit',textDecoration:'none'}}>_VERSION1999</a><a href="#" onClick={nav('gallery')} style={{color:'inherit',textDecoration:'none'}}>_VERSION2000</a></div>
</div></section>
<ThumbNav items={[['lineup','imagery/flash-01.png','lineup'],['gallery','imagery/flash-04.png','gallery'],['rsvp','imagery/flash-11.png','rsvp'],['the house','imagery/street-crowd-night.png','home'],['archive 1999','art/ember-shard-burst.png','gallery'],['news','art/crimson-flare.png','home'],['door','imagery/flash-13.png','rsvp'],['afterparty','imagery/flash-19.png','lineup']].map(([l,s,k])=>({label:l,src:A+s,onClick:nav(k)}))}/>
<section style={{position:'relative',height:640,overflow:'hidden',background:'var(--paper)'}}>
<div style={{position:'absolute',left:'50%',top:0,width:1100,height:'100%',marginLeft:-550}}>
<div style={{position:'absolute',left:300,top:40,width:3,height:470,background:'var(--oxblood-800)'}}></div>
<Crop x={60} y={250} w={260} h={70}/><Crop x={240} y={110} w={140} h={60}/><Crop x={560} y={200} w={420} h={250}/><Crop x={880} y={60} w={1} h={520} col="var(--blood-600)"/>
<span style={{position:'absolute',left:70,top:268,font:'var(--text-micro)',letterSpacing:'.4em',color:'var(--blood-600)'}}>YOURPARTY.NET</span>
<span style={{position:'absolute',left:70,top:292,font:'var(--text-micro)',color:'var(--ink)'}}>YOURPARTY.NET · TYPE DESIGN · 08.28.00</span>
<div style={{position:'absolute',left:560,top:200,width:420,height:250,overflow:'hidden',background:'var(--crimson-950)'}}>
<img src={A+'art/crimson-flare.png'} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
<div style={{position:'absolute',inset:0,mixBlendMode:'screen'}}><ShardBurst palette="crimson" seed={3} density={50} originX={70} originY={40} background={false} explodeOnClick={false}/></div>
<span style={{position:'absolute',inset:0,background:'var(--pattern-scanline)'}}></span>
<span style={{position:'absolute',right:14,top:110,font:'italic 900 22px var(--font-display)',color:'var(--paper)'}}>yourparty.net</span></div>
<div style={{position:'absolute',left:1000,top:230,width:110,height:110,background:'var(--orange-500)',padding:6,boxSizing:'border-box'}}><img src={A+'imagery/flash-19.png'} alt="" style={{width:'100%',height:'100%',objectFit:'cover',filter:'var(--filter-duotone-red)'}}/></div>
<div style={{position:'absolute',left:330,top:250,zIndex:2}}><GlitchText speed={4.3} style={{font:'var(--text-slant)',fontStretch:'62%',fontSize:128,letterSpacing:'-.02em',color:'var(--ink)'}}>party<br/>dESIGN</GlitchText></div>
<div style={{position:'absolute',left:480,top:280,zIndex:3,font:'400 300px/1 var(--font-script)',color:'var(--blood-600)',transformOrigin:'40% 60%',animation:'y2k-drift 3.2s ease-in-out infinite alternate',pointerEvents:'none'}}>N</div>
<span style={{position:'absolute',left:340,top:520,font:'400 11px var(--font-web)',color:'var(--blood-600)'}}>updated: 08.28.00</span>
<span style={{position:'absolute',left:760,top:462,font:'var(--text-micro)',color:'var(--ink)'}}>[ NEW URL: YOURPARTY.NET ]</span>
<span style={{position:'absolute',left:600,top:500,font:'italic 900 15px var(--font-display)',letterSpacing:'.08em',color:'var(--blood-600)',animation:'y2k-flicker 2.2s linear infinite'}}>ATTENTION!!</span>
<div style={{position:'absolute',left:600,top:526,display:'flex',gap:6,alignItems:'center',zIndex:4}}><Input variant="classic" placeholder="your e-mail :" value={email} onChange={e=>setEmail(e.target.value)}/><Button variant="classic" onClick={()=>setDlg(true)}>join</Button><Button variant="classic" onClick={()=>{setToast(true);setTimeout(()=>setToast(false),2600)}}>drop</Button></div>
</div></section>
<Dialog open={dlg} onClose={()=>setDlg(false)} title="yourparty.net" actions={<Button variant="classic" onClick={()=>setDlg(false)}>OK</Button>}><b>{email||'you'}</b> is on the list for {night}. The address goes out at 9PM.</Dialog>
{toast&&<div style={{position:'fixed',right:20,bottom:20,zIndex:120}}><Toast onClose={()=>setToast(false)}>You've been dropped from the list.</Toast></div>}
</main>;}
window.HomeScreen=HomeScreen;