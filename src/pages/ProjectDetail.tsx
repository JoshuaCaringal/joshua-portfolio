import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ArrowLeft, ChevronLeft, ChevronRight, Expand} from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';
import {projects} from '../data/projects';
import {TechBadge} from '../components/common/TechBadge';
import {ImageViewer} from '../components/project/ImageViewer';
import {Container} from '../components/common/Container';

export default function ProjectDetail() {
  const {slug} = useParams();
  const project = projects.find(item => item.slug === slug);
  const [active, setActive] = useState(0);
  const [viewer, setViewer] = useState<number | null>(null);

  useEffect(() => {
    document.title = project ? `${project.title} | Joshua Caringal` : 'Project | Joshua Caringal';
    scrollTo(0, 0);
    return () => { document.title = 'Joshua Caringal | Software Developer'; };
  }, [project]);

  if (!project) return <main className="notfound"><h1>Project not found.</h1><Link to="/">Return home</Link></main>;
  const previous = () => setActive(current => (current - 1 + project.images.length) % project.images.length);
  const next = () => setActive(current => (current + 1) % project.images.length);

  return <main className="case"><Container>
    <Link to="/#projects" className="back"><ArrowLeft size={15}/> BACK TO WORK</Link>
    <header className="case-header"><div><small>CASE STUDY / 01</small><h1>{project.title}</h1></div><p>{project.overview}</p></header>
    <div className="case-cover"><div className="browser-bar"><span/><span/><span/><small>PUP RAGAY BRANCH / DASHBOARD</small></div><img src={project.cover} alt="Automated Expense Tracking dashboard overview"/></div>

    <div className="case-grid">
      <section><small>01 / CONTEXT</small><h2>Clearer budget operations.</h2><p>{project.problem}</p></section>
      <section><small>02 / APPROACH</small><h2>A connected workflow.</h2><p>{project.solution}</p></section>
    </div>

    <section className="case-features"><div><small>CORE CAPABILITIES</small><h2>Designed around the work.</h2></div><div className="feature-list">{project.features.map((feature, index) => <div key={feature}><span>{String(index + 1).padStart(2, '0')}</span><h3>{feature}</h3></div>)}</div></section>

    <section className="gallery-section" aria-label="Project screenshot gallery">
      <div className="gallery-heading"><div><small>SCREENSHOT GALLERY</small><h2>Inside the system.</h2></div><p>Explore all {project.images.length} real system screens. Select a thumbnail or use the controls to move through the gallery.</p></div>
      <div className="active-shot">
        <AnimatePresence mode="wait"><motion.button key={project.images[active]} onClick={() => setViewer(active)} initial={{opacity: 0, x: 16}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -16}} transition={{duration: .22}} aria-label={`Expand screenshot ${active + 1}`}><img src={project.images[active]} alt={`Automated Expense Tracking system screenshot ${active + 1} of ${project.images.length}`}/><span><Expand size={16}/> EXPAND IMAGE</span></motion.button></AnimatePresence>
      </div>
      <div className="gallery-controls"><div><button onClick={previous} aria-label="Previous screenshot"><ChevronLeft/></button><button onClick={next} aria-label="Next screenshot"><ChevronRight/></button></div><strong>{String(active + 1).padStart(2, '0')} <span>/ {String(project.images.length).padStart(2, '0')}</span></strong></div>
      <div className="thumb-strip">{project.images.map((image, index) => <button key={image} className={active === index ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show screenshot ${index + 1}`} aria-current={active === index ? 'true' : undefined}><img src={image} alt="" loading="lazy"/><span>{String(index + 1).padStart(2, '0')}</span></button>)}</div>
      <div className="category-row"><small>PROJECT CATEGORIES</small>{project.tools.map(tool => <TechBadge key={tool}>{tool}</TechBadge>)}</div>
    </section>
  </Container>{viewer !== null && <ImageViewer images={project.images} index={viewer} setIndex={setViewer} onClose={() => setViewer(null)}/>}</main>;
}
