import {useState} from 'react';
import {X, Expand} from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';
import certificate from '../NC.png';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';

export function Certifications() {
  const [open, setOpen] = useState(false);
  return <section id="certifications" className="certifications"><Container>
    <SectionLabel>CERTIFICATIONS</SectionLabel>
    <div className="section-heading"><h2>TRAINING THAT<br/>SUPPORTS THE WORK.</h2><p>A verified technical qualification in computer systems servicing.</p></div>
    <article className="certificate-card"><button onClick={() => setOpen(true)} aria-label="View Computer Systems Servicing NC II certificate"><img src={certificate} alt="Computer Systems Servicing NC II certificate issued to Joshua Caringal" loading="lazy"/><span><Expand size={16}/> VIEW CERTIFICATE</span></button><div><small>TESDA CERTIFICATION</small><h3>Computer Systems Servicing NC II</h3><p>TESDA NC II Holder</p></div></article>
    <AnimatePresence>{open && <motion.div className="certificate-viewer" role="dialog" aria-modal="true" aria-label="Computer Systems Servicing NC II certificate" tabIndex={-1} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onKeyDown={e => e.key === 'Escape' && setOpen(false)} onClick={e => e.target === e.currentTarget && setOpen(false)} ref={node => node?.focus()}><motion.img src={certificate} alt="Computer Systems Servicing NC II certificate issued to Joshua Caringal" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}}/><button onClick={() => setOpen(false)} aria-label="Close certificate"><X/></button></motion.div>}</AnimatePresence>
  </Container></section>;
}
