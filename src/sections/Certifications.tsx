import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Expand, X} from 'lucide-react';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';
import certificate from '../NC.png';

export function Certifications() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    addEventListener('keydown', close);
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', close); };
  }, [open]);
  return <section id="certifications" className="certification-section"><Container>
    <SectionLabel>04 / CERTIFICATION</SectionLabel>
    <div className="section-heading"><h2>TRAINED FOR<br/>THE WORK.</h2><p>A recognized foundation in installing, maintaining, and troubleshooting computer systems and networks.</p></div>
    <motion.article className="certificate-card" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}}>
      <button className="certificate-preview" onClick={() => setOpen(true)} aria-label="View Computer Systems Servicing NC II certificate">
        <img src={certificate} alt="Computer Systems Servicing NC II certificate"/><span><Expand size={16}/> VIEW CERTIFICATE</span>
      </button>
      <div><small>TESDA CERTIFICATION</small><h3>Computer Systems Servicing NC II</h3><p>TESDA NC II Holder</p><button className="certificate-open" onClick={() => setOpen(true)}>VIEW LARGER <Expand size={15}/></button></div>
    </motion.article>
  </Container><AnimatePresence>{open && <motion.div className="certificate-lightbox" role="dialog" aria-modal="true" aria-label="Computer Systems Servicing NC II certificate" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setOpen(false)}><button aria-label="Close certificate" onClick={() => setOpen(false)}><X/></button><motion.img src={certificate} alt="Computer Systems Servicing NC II certificate enlarged" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.96}} transition={{duration:.25}} onClick={event => event.stopPropagation()}/></motion.div>}</AnimatePresence></section>;
}
