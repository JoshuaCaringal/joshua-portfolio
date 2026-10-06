import {profile} from '../../data/profile';

export const Footer = () => <footer>
  <span>{profile.name}</span>
  <small>© {new Date().getFullYear()} / BUILT WITH REACT + TYPESCRIPT</small>
  <div className="footer-links">
    <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
    <a href={profile.facebook} target="_blank" rel="noreferrer">FACEBOOK ↗</a>
    <a href={`mailto:${profile.email}`}>EMAIL</a>
    <a href="#top">BACK TO TOP ↑</a>
  </div>
</footer>;
