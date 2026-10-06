import certificate from '../../NC.png';

/** Percentages follow the uncropped source image, so both views scale identically. */
export function CertificateImage() {
  return <div className="certificate-image">
    <img src={certificate} alt="Joshua C. Caringal's National Certificate II in Computer Systems Servicing" draggable={false}/>
    <span className="signature-privacy signature-director" aria-hidden="true"/>
    <span className="signature-privacy signature-holder" aria-hidden="true"/>
  </div>;
}
