import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {projects} from '../data/projects';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';
import {TechBadge} from '../components/common/TechBadge';
import {Reveal} from '../components/animation/Reveal';

export function FeaturedProjects() {
  return <section id="projects" className="featured-work"><Container>
    <SectionLabel>02 / FEATURED PROJECTS</SectionLabel>
    <div className="section-heading"><h2>REAL WORK.<br/>REAL SYSTEM SCREENS.</h2><p>Practical systems and automations designed to make everyday records, monitoring, and workflows easier to manage.</p></div>
    <div className="featured-list">{projects.map((project, index) => <Reveal className="featured-card" key={project.slug}>
      <Link className="featured-visual" to={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
        <div className="browser-bar"><span/><span/><span/><small>REAL SYSTEM / SCREENSHOT</small></div>
        <img src={project.cover} alt={`${project.title} featured screenshot`} loading={index === 0 ? 'eager' : 'lazy'}/>
        <span className="image-count">01 / {String(project.images.length).padStart(2, '0')} REAL SCREENS</span>
      </Link>
      <div className="featured-copy">
        <small>{String(index + 1).padStart(2, '0')} / {project.category}</small>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tools">{project.tools.map(tool => <TechBadge key={tool}>{tool}</TechBadge>)}</div>
        <Link className="explore-link" to={`/projects/${project.slug}`}>VIEW PROJECT <ArrowUpRight size={18}/></Link>
      </div>
    </Reveal>)}</div>
  </Container></section>;
}
