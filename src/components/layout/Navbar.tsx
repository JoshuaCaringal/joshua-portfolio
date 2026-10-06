import {Menu, X} from 'lucide-react';
import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {profile} from '../../data/profile';

const links = ['top', 'about', 'projects', 'skills', 'certifications', 'contact'];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState('top');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), {rootMargin: '-35% 0px -55%'});
    links.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 851px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);
  return <motion.header className="navbar" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: .55, delay: .1}}>
    <a href="/" className="logo" onClick={() => setOpen(false)}><b>JC</b><span>{profile.name}</span></a>
    <nav id="main-navigation" className={open ? 'open' : ''} aria-label="Main navigation">{links.map(link => <a key={link} className={active === link ? 'active' : ''} href={`/#${link}`} onClick={() => setOpen(false)}>{link === 'top' ? 'Home' : link[0].toUpperCase() + link.slice(1)}</a>)}</nav>
    <a className="nav-cta" href="/#contact">LET'S TALK <span>↗</span></a>
    <button ref={menuRef} type="button" className="menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? <X/> : <Menu/>}</button>
  </motion.header>;
}
