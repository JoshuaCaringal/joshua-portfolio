import certificate from '../../NC.png';

export function CertificateImage() {
  return <div className="certificate-image">
    <img src={certificate} alt="Computer Systems Servicing NC II TESDA certificate; handwritten signatures covered"/>
    <span className="signature-cover signature-holder" aria-hidden="true"/>
    <span className="signature-cover signature-director" aria-hidden="true"/>
  </div>;
}
