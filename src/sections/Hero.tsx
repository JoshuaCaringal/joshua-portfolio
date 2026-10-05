import {motion, useMotionValue, useSpring} from 'framer-motion';
import type {MouseEvent} from 'react';
import {Container} from '../components/common/Container';
import {Button} from '../components/common/Button';
import {profile} from '../data/profile';
import profileImage from '../Profile.png';

const ease = [0.22, 1, 0.36, 1] as const;
const roles = ['System Administrator', 'Junior Web Developer', 'AI Automation Designer'];
export function Hero() {
  const px = useMotionValue(0), py = useMotionValue(0);
  const x = useSpring(px, {stiffness: 90, damping: 22}), y = useSpring(py, {stiffness: 90, damping: 22});
  const track = (event: MouseEvent<HTMLElement>) => { if (matchMedia('(pointer:fine)').matches) { px.set((event.clientX / innerWidth - .5) * 8); py.set((event.clientY / innerHeight - .5) * 8); } };
  return <section className="hero" id="top" onMouseMove={track}>
    <Container className="hero-grid">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.18}}><i/> HI, I'M <span>PH / REMOTE</span></motion.div>
        <h1 aria-label="Joshua Caringal"><span className="line"><motion.b initial={{y:'110%'}} animate={{y:0}} transition={{duration:.7,delay:.2,ease}}>JOSHUA</motion.b></span><span className="line red"><motion.b initial={{y:'110%'}} animate={{y:0}} transition={{duration:.7,delay:.3,ease}}>CARINGAL</motion.b></span></h1>
        <motion.div className="hero-rule" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.75,delay:.58,ease}}/>
        <motion.div className="role-list" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.08,delayChildren:.55}}}}>{roles.map((role,index)=><motion.div key={role} variants={{hidden:{opacity:0,x:-12},show:{opacity:1,x:0}}}><span>0{index+1}</span>{role}</motion.div>)}</motion.div>
        <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.78}}>I build practical systems, web applications, and automation workflows that simplify repetitive processes and improve everyday operations.</motion.p>
        <motion.div className="actions" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.88}}><Button href="#projects">VIEW PROJECT</Button><a className="text-link" href={profile.github}>GITHUB <span>↗</span></a></motion.div>
      </div>
      <motion.div className="portrait-wrap" initial={{opacity:0,x:45,y:16,scale:.94}} animate={{opacity:1,x:0,y:0,scale:1}} transition={{duration:.8,delay:.32,ease}} style={{x,y}}>
        <div className="outline-word" aria-hidden="true">DEVELOPER</div><i className="corner top"/><i className="corner bottom"/>
        <figure><img src={profileImage} alt="Joshua Caringal"/><figcaption><span>PROFILE / 2026</span><b>SYSTEMS · WEB · AUTOMATION</b></figcaption></figure>
      </motion.div>
    </Container><div className="hero-foot"><span>SCROLL TO EXPLORE</span><i/><b>PROFILE / 01</b></div>
  </section>;
}
