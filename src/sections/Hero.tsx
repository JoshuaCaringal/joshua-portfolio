import {motion, useMotionValue, useSpring} from 'framer-motion';
import type {MouseEvent} from 'react';
import {Container} from '../components/common/Container';
import {Button} from '../components/common/Button';
import {profile} from '../data/profile';
import profileImage from '../Profile.png';

const ease = [0.22, 1, 0.36, 1] as const;
export function Hero() {
  const px = useMotionValue(0), py = useMotionValue(0);
  const x = useSpring(px, {stiffness: 90, damping: 20}), y = useSpring(py, {stiffness: 90, damping: 20});
  const track = (event: MouseEvent<HTMLElement>) => { if (matchMedia('(pointer:fine)').matches) { px.set((event.clientX / innerWidth - .5) * 12); py.set((event.clientY / innerHeight - .5) * 12); } };
  return <section className="hero" id="top" onMouseMove={track}>
    <Container className="hero-grid">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.25}}><i/> AVAILABLE FOR SELECT PROJECTS <span>PH / REMOTE</span></motion.div>
        <h1 aria-label="Joshua Caringal"><span className="line"><motion.b initial={{y:'110%'}} animate={{y:0}} transition={{duration:.75,delay:.22,ease}}>JOSHUA</motion.b></span><span className="line red"><motion.b initial={{y:'110%'}} animate={{y:0}} transition={{duration:.75,delay:.33,ease}}>CARINGAL.</motion.b></span></h1>
        <motion.div className="hero-rule" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.8,delay:.65,ease}}/>
        <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.63}}>Software developer building useful systems for real work.</motion.h2>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.72}}>I design practical digital products, automated workflows, dashboards, and interfaces that turn repetitive processes into organized operations.</motion.p>
        <motion.div className="actions" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.1,delayChildren:.78}}}}>{[<Button href="#projects">EXPLORE MY WORK</Button>,<a className="text-link" href={profile.github}>GITHUB <span>↗</span></a>].map((item,index)=><motion.div key={index} variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0}}}>{item}</motion.div>)}</motion.div>
      </div>
      <motion.div className="portrait-wrap" initial={{opacity:0,x:70,scale:.92}} animate={{opacity:1,x:0,scale:1}} transition={{duration:.85,delay:.35,ease}} style={{x,y}}>
        <div className="outline-word" aria-hidden="true">DEVELOPER</div><i className="corner top"/><i className="corner bottom"/>
        <figure><img src={profileImage} alt="Joshua Caringal in graduation attire"/><figcaption><span>SOFTWARE DEVELOPER</span><b>BUILD / CODE / CREATE</b></figcaption></figure>
      </motion.div>
    </Container><div className="hero-foot"><span>SCROLL TO EXPLORE</span><i/><b>01 — 07</b></div>
  </section>;
}
