import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {projects} from '../data/projects';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';
import {TechBadge} from '../components/common/TechBadge';
import {Reveal} from '../components/animation/Reveal';

export function FeaturedProjects() {
  const project = projects[0];
  return <section id="projects" className="featured-work"><Container>
    <SectionLabel>02 / FEATURED PROJECT</SectionLabel>
    <div className="section-heading"><h2>REAL WORK.<br/>REAL SYSTEM SCREENS.</h2><p>A focused look at a working budget and expense platform developed for PUP Ragay Branch.</p></div>
    <Reveal className="featured-card">
      <Link className="featured-visual" to={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
        <div className="browser-bar"><span/><span/><span/><small>LIVE SYSTEM / DASHBOARD</small></div>
        <img src={project.cover} alt={`${project.title} dashboard`} loading="eager"/>
        <span className="image-count">01 / {String(project.images.length).padStart(2, '0')} REAL SCREENS</span>
      </Link>
      <div className="featured-copy">
        <small>01 / {project.category}</small>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tools">{project.tools.map(tool => <TechBadge key={tool}>{tool}</TechBadge>)}</div>
        <Link className="explore-link" to={`/projects/${project.slug}`}>VIEW PROJECT <ArrowUpRight size={18}/></Link>
      </div>
    </Reveal>
  </Container></section>;
}
