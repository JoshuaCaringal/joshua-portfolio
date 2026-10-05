import {Menu, X} from 'lucide-react';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {profile} from '../../data/profile';

const links = ['about', 'skills', 'projects', 'process', 'contact'];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), {rootMargin: '-35% 0px -55%'});
    links.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <motion.header className="navbar" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: .55, delay: .1}}>
    <a href="/" className="logo"><b>JC</b><span>{profile.name}</span></a>
    <nav className={open ? 'open' : ''} aria-label="Main navigation">{links.map(link => <a key={link} className={active === link ? 'active' : ''} href={`/#${link}`} onClick={() => setOpen(false)}><span>0{links.indexOf(link) + 1}</span>{link}</a>)}</nav>
    <a className="nav-cta" href="/#contact">LET'S TALK <span>↗</span></a>
    <button className="menu" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </motion.header>;
}
