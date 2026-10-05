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
    <div className="section-heading"><h2>REAL WORK.<br/>REAL SYSTEM SCREENS.</h2><p>Working platforms and automations designed around practical, everyday operations.</p></div>
    <div className="featured-list">{projects.map((project, index) => <Reveal className="featured-card" key={project.slug}>
      <Link className={`featured-visual${project.cover ? '' : ' awaiting-assets'}`} to={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
        <div className="browser-bar"><span/><span/><span/><small>PROJECT / {project.category}</small></div>
        {project.cover ? <img src={project.cover} alt={`${project.title} overview`} loading={index === 0 ? 'eager' : 'lazy'}/> : <p>WORKFLOW GALLERY<br/>COMING SOON</p>}
        <span className="image-count">{String(project.images.length).padStart(2, '0')} REAL SCREENS</span>
      </Link>
      <div className="featured-copy"><small>{String(index + 1).padStart(2, '0')} / {project.category}</small><h3>{project.title}</h3><p>{project.description}</p>
        <div className="project-tools">{project.tools.map(tool => <TechBadge key={tool}>{tool}</TechBadge>)}</div>
        <Link className="explore-link" to={`/projects/${project.slug}`}>VIEW PROJECT <ArrowUpRight size={18}/></Link>
      </div>
    </Reveal>)}</div>
  </Container></section>;
}
