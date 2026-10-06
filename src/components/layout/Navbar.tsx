import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useLocation} from 'react-router-dom';
import {profile} from '../../data/profile';

const links = ['top', 'about', 'projects', 'skills', 'contact'];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const close = () => setOpen(false);
  useEffect(close, [location.pathname, location.hash]);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 850px)');
    const onResize = () => { if (!media.matches) setOpen(false); };
    media.addEventListener('change', onResize);
    return () => media.removeEventListener('change', onResize);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {
        const items = [toggleRef.current, ...Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter((item): item is HTMLButtonElement | HTMLAnchorElement => !!item);
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      toggleRef.current?.focus();
    };
  }, [open]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), {rootMargin: '-35% 0px -55%'});
    links.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [location.pathname]);
  const navigationLinks = links.map((link, index) => <a key={link} className={active === link ? 'active' : ''} aria-current={active === link ? 'location' : undefined} href={`/#${link}`} onClick={close}><span>0{index + 1}</span>{link === 'top' ? 'home' : link}</a>);
  return <>
    <motion.header className="navbar" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: .55, delay: .1}}>
      <a href="/" className="logo" onClick={close}><b>JC</b><span>{profile.name}</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigationLinks}</nav>
      <a className="nav-cta" href="/#contact">LET'S TALK <span>↗</span></a>
      <button ref={toggleRef} className={`menu${open ? ' is-open' : ''}`} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}><span/><span/><span/></button>
    </motion.header>
    {createPortal(<div className={`mobile-navigation${open ? ' is-open' : ''}`} inert={!open} aria-hidden={!open}>
      <div className="menu-backdrop" onClick={close}/>
      <nav ref={panelRef} id="mobile-navigation" className="mobile-panel" aria-label="Mobile navigation">{navigationLinks}</nav>
    </div>, document.body)}
  </>;
}
