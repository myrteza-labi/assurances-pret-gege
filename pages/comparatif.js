import SimpleTextBox from "../components/SimpleTextBox";
import SimpleInfoBox from "../components/SimpleInfoBox";
import Link from "next/link";
import MascotteBox from "../components/mascotteBox";

function Comparatif() {
  return (
    <div className="Comparatif">
      <div className="firstSection firstSectionComparatif">
        <h1 className="h1Global">Comparez et économisez sur vos factures </h1>
        <h2 className="h3Global">
          Comparez vos assurances et réduisez vos dépenses en quelques clics
        </h2>

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstCompratif"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h3 className="h2Global">Comparatif assurance pret simple et rapide</h3>
        <p className="paragrapheGlobal">
          Le taux d&#39;une assurance de prêt varie selon le montant emprunté, les
          garanties souscrites et l&#39;âge de l&#39;emprunteur. Si vous êtes un jeune
          emprunteur, il peut être particulièrement intéressant pour vous
          d&#39;opter pour une autre assurance de prêt que celle qui vous est
          proposée par votre banque. .
        </p>
        <p className="paragrapheGlobal">
          En démarchant les compagnies d&#39;assurance, vous pouvez accéder à des
          offres au coût moins élevé tout en bénéficiant de garanties
          équivalentes ou supérieures. Afin de gagner du temps dans votre
          recherche du meilleur contrat d&#39;assurance credit, n&#39;hésitez pas à
          utiliser un comparatif assurance pret.
        </p>
        <h4 className="h6Global"> Jusqu&#39;à 15 000€ d&#39;économisé*</h4>

        <SimpleTextBox>
          En moyenne plus de 85 % des assurances externes sont moins cher que
          celle de la banque prêteuse. Selon la somme et le taux emprunter les
          économies réalisé atteignent de plusieurs dizaines de milliers
          d&#39;euros.
        </SimpleTextBox>
        <h4 className="h4Global">
          Comparez ! Quel contrat choisir selon l&#39;âge ?
        </h4>
        <p className="paragrapheGlobal">
          L&#39;assurance de prêt est un élément de garantie généralement exigé par
          les banques et établissements de crédit pour accorder un prêt
          immobilier. Elle permet la prise en charge de vos mensualités par
          l&#39;assureur en cas de décès, d&#39;invalidité ou de perte d&#39;emploi. Les
          banques proposent aux emprunteurs leur propre contrat d&#39;assurance
          credit mais vous êtes cependant libre de souscrire votre assurance
          auprès de la compagnie d&#39;assurance de votre choix.
        </p>

        <h4 className="h4Global">Le coût de votre assurance de prêt</h4>
        <p className="paragrapheGlobal">
          Le taux des cotisations d&#39;assurance peut généralement varier de 2,5 à
          3,5 % du montant assuré. Le coût de la garantie décès-invalidité peut
          lui varier de 0,2 à 0,55 % du montant emprunté. Dans le cas où vous
          adhérez à l&#39;assurance collective de la banque, vos mensualités seront
          composées du prix de l&#39;assurance, d&#39;une partie du capital emprunté et
          des intérêts. Pour tenter de réduire le coût de votre assurance prêt,
          comparez les nombreuses propositions émises par différentes compagnies
          d&#39;assurance car le choix ne manque pas.
        </p>
        <h4 className="h4Global">Comparatif assurance pret</h4>
        <p className="paragrapheGlobal">
          Il peut s&#39;avérer difficile de comparer plusieurs contrats d&#39;assurances
          prêt entre eux car les termes qui y sont utilisés peuvent bien souvent
          ne pas être compris du consommateur. Voici cependant les points clés à
          vérifier lors d&#39;un comparatif assurance pret des contrats proposés.
        </p>
        <p className="paragrapheGlobal">
          Tout contrat qui se respecte doit bien spécifier les conditions de la
          garantie décès. Vérifiez les modalités de prise en charge de la
          garantie PTIA (Perte Totale et Irréversible d&#39;Autonomie). Ces deux
          garanties permettent à vos proches d&#39;hériter de votre bien : en cas de
          décès ou de PTIA, c&#39;est l&#39;assureur qui rembourse intégralement votre
          crédit.{" "}
        </p>
        <h4 className="h4Global">Contrats en ligne gratuitement</h4>
        <p className="paragrapheGlobal">
          Ensuite, prenez connaissance des garanties d&#39;Incapacité Temporaire de
          Travail (ITT), d&#39;Incapacité Temporaire Partielle (ITP). Ces garanties
          permettent un remboursement de vos mensualités par l&#39;assureur en cas
          d&#39;arrêt de travail{" "}
        </p>
        <p className="paragrapheGlobal">
          Attention aux exclusions dans les offres assurance de pret : la
          guerre, le suicide, les maladies mentales… ne permettent aucune prise
          en charge par l&#39;assureur. Prenez le temps de bien prendre connaissance
          des exclusions des contrats. Pour terminer, vérifiez les conditions et
          modalités d&#39;indemnisation. Bien souvent, celles-ci sont plus
          avantageuses dans les contrats d&#39;assurance prêt individuelles.{" "}
        </p>
        <SimpleInfoBox>
          À noter que la loi Duflot s&#39;applique aux investissements locatifs qui
          ont été réalisés entre janvier 2013 et août 2014.
        </SimpleInfoBox>
        <p className="paragrapheGlobal">
          Pour faire simple, nous venons de le voir, la loi Pinel 2022 est un
          dispositif qui vous permet de réduire vos impôts lorsque vous
          <Link href="/blog/garantie-pret/">
            <a className="linkInText">
              {" "}
              investissez dans l&#39;immobilier locatif{" "}
            </a>
          </Link>
          . Son objectif est notamment d&#39;étoffer le nombre de logements neufs
          dans les grandes villes afin de combler le manque d&#39;habitations
          disponibles.
        </p>


      </div>

      <MascotteBox />

      <div className="gegeBottom comparatifsGegeBottom"></div>
    </div>
  );
}

export default Comparatif;
