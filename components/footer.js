import Link from "next/link";

function Footer() {
  return (
    <div className="Footer">
      <ul className="footer-ul">
        <Link href="/">
          <li className="footer-li">Accueil</li>
        </Link>
        <Link href="/garanties">
          <li className="footer-li">Garanties</li>
        </Link>
        <Link href="/cout">
          <li className="footer-li">Coûts</li>
        </Link>
        <Link href="/comparatif">
          <li className="footer-li">Comparatifs</li>
        </Link>
        <Link href="/negociation">
          <li className="footer-li">Négociations</li>
        </Link>
        <Link href="/prets">
          <li className="footer-li">Prêts</li>
        </Link>
        <Link href="/contact">
          <li className="footer-li">Contact</li>
        </Link>
        <Link href="/mentions">
          <li className="footer-li">Mentions légales</li>
        </Link>
      </ul>
      <div className="footer-link-container">
        <div className="footer-link-group">
        <Link href="/selection">
          <li className="footer-link">Selection immobilière</li>
        </Link>
        <Link href="/garantie/deces-invalidite">
          <li className="footer-link">Décès invalidité</li>
        </Link>
        <Link href="/garantie/chomage">
          <li className="footer-link">Chômage</li>
        </Link>
        <Link href="/blog">
          <li className="footer-link">Blog</li>
        </Link>
        <Link href="/blog/assurance-emprunt-immobilier">
          <li className="footer-link">Assurance emprunt immobilier</li>
        </Link>
        <Link href="/blog/resiliation-assurance-pret">
          <li className="footer-link">Résiliation assurance prêt</li>
        </Link>
        <Link href="/blog/assurance/assurance-pret-risque-aggrave">
          <li className="footer-link">Assurance prêt risque aggravé</li>
        </Link>
        <Link href="/blog/assurance/assurance-pret-senior">
          <li className="footer-link">Assurance prêt sénior</li>
        </Link>
        <Link href="/blog/assurance/comment-garantir-son-credit-immobilier">
          <li className="footer-link">Garantir son crédit</li>
        </Link>
        <Link href="/blog/demander-devis-assurance-credit">
          <li className="footer-link">Devis assurance crédit</li>
        </Link>
        <Link href="/blog/assurance-pret-obesite">
          <li className="footer-link">Assurance prêt obésité</li>
        </Link>
        <Link href="/blog/assurance-emprunteur-infos-conseils">
          <li className="footer-link">Conseil en assurance</li>
        </Link>
        <Link href="/blog/garantie-pret">
          <li className="footer-link">Garantie prêt</li>
        </Link>
        <Link href="/blog/simulation-assurance-credit">
          <li className="footer-link">Simulation d'assurance prêt</li>
        </Link>
        <Link href="/blog/pret/aide-achat-residence-principale">
          <li className="footer-link">Aide financière</li>
        </Link>
        <Link href="/blog/delegation-assurance-pret">
          <li className="footer-link">Déléguation d'assurance</li>
        </Link>
        <Link href="/blog/changer-assurance-pret">
          <li className="footer-link">Changer d'assurance prêt</li>
        </Link>
        </div>
      </div>
      
      <div className="social-media-container">
        <div className="social-icon">
          <img
            src="/icon-facebook.png"
            alt="facebook"
            className="social-image"
          />
        </div>

        <div className="social-icon">
          <img src="/icon-twitter.png" alt="twitter" className="social-image" />
        </div>

        <div className="social-icon">
          <img
            src="/icon-linkedin.png"
            alt="linkedin"
            className="social-image"
          />
        </div>

        <div className="social-icon">
          <img src="/icon-youtube.png" alt="youtube" className="social-image" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
