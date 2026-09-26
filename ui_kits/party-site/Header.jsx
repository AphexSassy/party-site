function SiteHeader({page,go}){const {NavLink}=window.Y2KPartyDesignSystem_2620e7;
const links=[['home','Home'],['lineup','Lineup'],['gallery','Gallery'],['rsvp','Rsvp']];
return <header style={{position:'sticky',top:0,zIndex:40}}>
<div style={{height:26,background:'var(--grey-800)',display:'flex',alignItems:'center',justifyContent:'flex-end',gap:24,padding:'0 var(--gutter-page)',font:'var(--text-micro)',letterSpacing:'var(--tr-micro)',color:'var(--bone-200)'}}><span>UPDATED: 08.28.00</span><span style={{color:'var(--orange-500)'}}>[ NEW URL: YOURPARTY.NET ]</span></div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:20,flexWrap:'wrap',background:'var(--paper)',padding:'10px var(--gutter-page)',borderBottom:'3px solid var(--blood-600)'}}>
<a href="#" onClick={e=>{e.preventDefault();go('home')}} style={{font:'400 30px/1 var(--font-geo)',letterSpacing:'-.02em',color:'var(--ink)',textDecoration:'none'}}>your<span style={{color:'var(--blood-600)'}}>&gt;</span>party</a>
<nav style={{display:'flex',gap:22,flexWrap:'wrap'}}>{links.map(([k,l],i)=><NavLink key={k} prefix="_" active={page===k} num={i+1} onClick={e=>{e.preventDefault();go(k)}}>{l}</NavLink>)}</nav>
</div></header>;}
window.SiteHeader=SiteHeader;