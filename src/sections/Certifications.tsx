import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Expand, X} from 'lucide-react';
import certificate from '../NC.png';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';

export function Certifications(){
  const [open,setOpen]=useState(false);
  return <section id="certifications" className="certifications"><Container>
    <SectionLabel>CERTIFICATIONS</SectionLabel>
    <div className="section-heading"><h2>PROVEN<br/>FOUNDATIONS.</h2><p>Practical training in installing, maintaining, and troubleshooting computer systems and networks.</p></div>
    <motion.button className="certificate-card" onClick={()=>setOpen(true)} whileHover={{y:-5}} aria-label="View Computer Systems Servicing NC II certificate">
      <img src={certificate} alt="Computer Systems Servicing NC II certificate" loading="lazy"/>
      <div><small>TESDA CERTIFICATION</small><h3>Computer Systems Servicing NC II</h3><p>TESDA NC II Holder</p><span><Expand size={16}/> VIEW CERTIFICATE</span></div>
    </motion.button>
    <AnimatePresence>{open&&<motion.div className="certificate-viewer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="dialog" aria-modal="true" aria-label="Computer Systems Servicing NC II certificate" onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}><motion.img src={certificate} alt="Computer Systems Servicing NC II certificate enlarged" initial={{scale:.96,y:16}} animate={{scale:1,y:0}}/><button onClick={()=>setOpen(false)} aria-label="Close certificate"><X/></button></motion.div>}</AnimatePresence>
  </Container></section>;
}
