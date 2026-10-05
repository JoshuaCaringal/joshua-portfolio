import {Facebook, Linkedin, Mail, MoveUpRight} from 'lucide-react';
import {profile} from '../data/profile';
import {Container} from '../components/common/Container';
import {SectionLabel} from '../components/common/SectionLabel';
import {Reveal} from '../components/animation/Reveal';

const contacts = [
  {label: 'LinkedIn', detail: 'Professional profile', href: profile.linkedin, Icon: Linkedin, external: true},
  {label: 'Facebook', detail: 'Social profile', href: profile.facebook, Icon: Facebook, external: true},
  {label: 'Email', detail: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false},
];

export function Contact() {
  return <section id="contact" className="contact"><Container>
    <SectionLabel>05 / CONTACT</SectionLabel>
    <Reveal><h2>LET'S<br/><span>CONNECT.</span></h2></Reveal>
    <p>Have a system, web application, or workflow in mind? Get in touch through any of the channels below.</p>
    <div className="contact-links">{contacts.map(({label, detail, href, Icon, external}) =>
      <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={external ? `Visit Joshua Caringal on ${label} (opens in a new tab)` : `Email Joshua Caringal at ${profile.email}`}>
        <Icon aria-hidden="true" size={20}/><span><b>{label}</b><small>{detail}</small></span><MoveUpRight className="contact-arrow" aria-hidden="true" size={17}/>
      </a>)}
    </div>
  </Container></section>;
}
