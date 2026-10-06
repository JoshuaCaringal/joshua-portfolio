import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {X} from 'lucide-react';
import {CertificateImage} from './CertificateImage';

export function Certificate() {
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
  return <div className="certificate-entry">
    <button ref={triggerRef} className="certificate-trigger" onClick={() => setOpen(true)} aria-label="View NC II certificate">
      <CertificateImage/>
      <span>NC II · COMPUTER SYSTEMS SERVICING <b>VIEW CERTIFICATE ↗</b></span>
    </button>
    {open && createPortal(<div className="certificate-lightbox" role="dialog" aria-modal="true" aria-label="NC II certificate" onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
      <button ref={closeRef} className="certificate-close" onClick={() => setOpen(false)} aria-label="Close certificate"><X/></button>
      <div className="certificate-expanded"><CertificateImage/></div>
    </div>, document.body)}
  </div>;
}
