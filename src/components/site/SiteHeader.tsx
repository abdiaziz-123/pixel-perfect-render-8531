import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/ncco-logo.png.asset.json';
import { navigation } from '@/lib/ncco-content';
export function SiteHeader(){const [open,setOpen]=useState(false);return <header className="relative z-30 bg-background">
 <div className="bg-primary text-on-primary"><div className="site-container flex min-h-9 items-center justify-between gap-4 py-2 text-[11px]"><span>Connecting People. Advancing Cancer Care. Saving Lives.</span><a className="hidden items-center gap-2 sm:flex" href="mailto:info@northerncancercare.org"><Mail size={12}/>info@northerncancercare.org</a></div></div>
 <div className="site-container flex h-24 items-center justify-between gap-5"><Link to="/" aria-label="NCCO home" onClick={()=>setOpen(false)} className="flex shrink-0 items-center gap-3"><span className="flex h-[76px] w-[76px] items-center justify-center rounded bg-primary p-1"><img src={logo.url} alt="Northern Cancer Care Organization original logo" width={457} height={457} className="h-full w-full object-contain"/></span><span className="text-[11px] font-bold uppercase leading-[1.5]">Northern<br/>Cancer Care<br/><span className="font-normal">Organization</span></span></Link>
 <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">{navigation.map(n=><Link key={n.to} to={n.to} className="nav-link" activeProps={{className:'nav-link text-rose'}}>{n.label}</Link>)}</nav>
 <div className="flex items-center gap-3"><Button asChild className="hidden h-11 px-5 text-xs sm:inline-flex"><Link to="/patient-navigation">Find support <ArrowUpRight/></Link></Button><Button variant="ghost" size="icon" className="xl:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div></div>
 {open&&<nav aria-label="Mobile navigation" className="site-container border-t pb-5 xl:hidden">{[...navigation,{label:'Find support',to:'/patient-navigation' as const},{label:'Contact',to:'/contact' as const}].map(n=><Link key={n.to} to={n.to} onClick={()=>setOpen(false)} className="block border-b py-4 text-sm">{n.label}</Link>)}</nav>}
 </header>}
