import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {Maximize2, X} from 'lucide-react';
import certificate from '../NC.png';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';

function CertificateImage() {
  return <div className="certificate-image">
    <img src={certificate} alt="TESDA National Certificate II in Computer Systems Servicing awarded to Joshua C. Caringal; signatures covered for privacy"/>
    <span className="signature-cover signature-holder" aria-hidden="true"/>
    <span className="signature-cover signature-director" aria-hidden="true"/>
  </div>;
}

export function Certifications() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') { event.preventDefault(); closeRef.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      triggerRef.current?.focus();
    };
  }, [open]);
  return <section id="certifications" className="soft"><Container>
    <SectionLabel>04 / CERTIFICATIONS</SectionLabel>
    <div className="section-heading"><h2>A VERIFIED<br/>FOUNDATION.</h2><p>Formal technical training supporting hands-on work in computer systems and IT operations.</p></div>
    <article className="certificate-card">
      <div className="certificate-copy"><small>TESDA NATIONAL CERTIFICATE II</small><h3>Computer Systems Servicing NC II</h3><p>TESDA NC II Holder</p><button ref={triggerRef} className="certificate-trigger" onClick={() => setOpen(true)}><Maximize2 size={18}/> VIEW CERTIFICATE</button></div>
      <div className="certificate-preview"><CertificateImage/></div>
    </article>
    {open && createPortal(<div className="certificate-dialog" role="dialog" aria-modal="true" aria-label="TESDA NC II certificate" onMouseDown={event => { if (event.target === event.currentTarget) setOpen(false); }}>
      <button ref={closeRef} className="certificate-close" aria-label="Close certificate" onClick={() => setOpen(false)}><X/></button>
      <CertificateImage/>
    </div>, document.body)}
  </Container></section>;
}
