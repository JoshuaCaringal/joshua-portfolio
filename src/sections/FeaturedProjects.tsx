import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {projects} from '../data/projects';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';
import {TechBadge} from '../components/common/TechBadge';
import {Reveal} from '../components/animation/Reveal';

export function FeaturedProjects() { return <section id="projects" className="featured-work"><Container><SectionLabel>PROJECTS</SectionLabel><div className="section-heading"><h2>PROJECTS BUILT<br/>FOR REAL WORK.</h2><p>Web applications and automations presented with screenshots from the working projects.</p></div><div className="projects-grid">{projects.map((project,index)=><Reveal className="project-card" key={project.slug}><Link className="project-visual" to={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>{project.cover ? <img src={project.cover} alt={`${project.title} interface`} loading={index<2?'eager':'lazy'}/> : <div className="media-unavailable">Project screenshots are not included in this checkout.</div>}<span>{String(project.images.length).padStart(2,'0')} SCREENS</span></Link><div className="project-copy"><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p><div className="project-tools">{project.tools.map(tool=><TechBadge key={tool}>{tool}</TechBadge>)}</div><Link to={`/projects/${project.slug}`}>VIEW PROJECT <ArrowUpRight size={18}/></Link></div></Reveal>)}</div></Container></section>; }
