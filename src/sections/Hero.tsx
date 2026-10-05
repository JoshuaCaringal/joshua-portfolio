import {motion} from 'framer-motion';
import {Container} from '../components/common/Container';
import {Button} from '../components/common/Button';
import {profile} from '../data/profile';
import profileImage from '../Profile.png';

const enter = {hidden: {opacity: 0, y: 22}, show: {opacity: 1, y: 0}};

export function Hero() {
  return <section className="hero" id="top">
    <Container className="hero-grid">
      <motion.div className="hero-copy" initial="hidden" animate="show" transition={{staggerChildren: .09, delayChildren: .08}}>
        <motion.div className="eyebrow" variants={enter}><i/> SOFTWARE DEVELOPER · PHILIPPINES</motion.div>
        <motion.h1 variants={enter}>Joshua<br/><span>Caringal.</span></motion.h1>
        <motion.h2 variants={enter}>I build useful systems for real work.</motion.h2>
        <motion.p variants={enter}>Practical digital products, automated workflows, dashboards, and internal tools that turn repetitive processes into organized operations.</motion.p>
        <motion.div className="actions" variants={enter}><Button href="#projects">EXPLORE MY WORK</Button><a className="text-link" href={profile.github}>GITHUB <span>↗</span></a></motion.div>
        <motion.div className="techline" variants={enter}>SYSTEMS <span>/</span> AUTOMATION <span>/</span> WEB</motion.div>
      </motion.div>
      <motion.figure className="portrait-frame" initial={{opacity: 0, x: 30, clipPath: 'inset(0 0 100% 0)'}} animate={{opacity: 1, x: 0, clipPath: 'inset(0 0 0% 0)'}} transition={{duration: .75, delay: .25, ease: [0.22, 1, 0.36, 1]}}>
        <div className="portrait-index">JC / 01</div>
        <img src={profileImage} alt="Joshua Caringal in graduation attire"/>
        <figcaption><span>AVAILABLE FOR OPPORTUNITIES</span><b>Developer &amp; systems builder</b></figcaption>
      </motion.figure>
    </Container>
    <a className="scroll-hint" href="#about">SCROLL TO EXPLORE <i/></a>
  </section>;
}
