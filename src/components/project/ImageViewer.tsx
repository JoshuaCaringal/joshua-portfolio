import {motion} from 'framer-motion';
import {X, ChevronLeft, ChevronRight} from 'lucide-react';
import type {ReactNode} from 'react';
import {useEffect, useRef} from 'react';

export function ImageViewer({images, index, setIndex, onClose, renderImage}: {images: string[]; index: number; setIndex: (n: number) => void; onClose: () => void; renderImage?: (image: string, index: number) => ReactNode}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setIndex((index + 1) % images.length);
      if (event.key === 'ArrowLeft') setIndex((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = 'hidden';
    addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', onKey); };
  }, [index, images.length, onClose, setIndex]);

  return <motion.div className="viewer" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} role="dialog" aria-modal="true" aria-label="Expanded project screenshot" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="viewer-top"><span>{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span><button ref={closeRef} onClick={onClose} aria-label="Close image viewer"><X/></button></div>
    <button className="viewer-prev" onClick={() => setIndex((index - 1 + images.length) % images.length)} aria-label="Previous screenshot"><ChevronLeft/></button>
    {renderImage ? renderImage(images[index], index) : <motion.img key={images[index]} src={images[index]} alt={`Expanded system screenshot ${index + 1}`} initial={{opacity: 0, scale: .97}} animate={{opacity: 1, scale: 1}} transition={{duration: .2}}/>}
    <button className="viewer-next" onClick={() => setIndex((index + 1) % images.length)} aria-label="Next screenshot"><ChevronRight/></button>
  </motion.div>;
}
