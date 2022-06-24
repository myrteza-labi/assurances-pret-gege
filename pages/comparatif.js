import SimpleTextBox from "../components/SimpleTextBox";
import SimpleInfoBox from "../components/SimpleInfoBox";
import Link from "next/link";
import MascotteBox from "../components/mascotteBox";

function Comparatif() {
  return (
    <div className="Comparatif">
      <div className="firstSection firstSectionComparatif">
        <h1 className="h1Global">Comparez et économisez sur vos factures </h1>
        <h3 className="h3Global">
          Comparez vos assurances et réduisez vos dépenses en quelques clics
        </h3>

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstCompratif"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h2 className="h2Global">Comparatif assurance pret simple et rapide</h2>
        <p className="paragrapheGlobal">
          Le taux d’une assurance de prêt varie selon le montant emprunté, les
          garanties souscrites et l’âge de l’emprunteur. Si vous êtes un jeune
          emprunteur, il peut être particulièrement intéressant pour vous
          d’opter pour une autre assurance de prêt que celle qui vous est
          proposée par votre banque. .
        </p>
        <p className="paragrapheGlobal">
          En démarchant les compagnies d’assurance, vous pouvez accéder à des
          offres au coût moins élevé tout en bénéficiant de garanties
          équivalentes ou supérieures. Afin de gagner du temps dans votre
          recherche du meilleur contrat d’assurance credit, n’hésitez pas à
          utiliser un comparatif assurance pret.
        </p>
        <h6 className="h6Global"> Jusqu'à 15 000€ d'économisé*</h6>

        <SimpleTextBox>
          En moyenne plus de 85 % des assurances externes sont moins cher que
          celle de la banque prêteuse. Selon la somme et le taux emprunter les
          économies réalisé atteignent de plusieurs dizaines de milliers
          d'euros.
        </SimpleTextBox>
        <h4 className="h4Global">
          Comparez ! Quel contrat choisir selon l’âge ?
        </h4>
        <p className="paragrapheGlobal">
          L’assurance de prêt est un élément de garantie généralement exigé par
          les banques et établissements de crédit pour accorder un prêt
          immobilier. Elle permet la prise en charge de vos mensualités par
          l’assureur en cas de décès, d’invalidité ou de perte d’emploi. Les
          banques proposent aux emprunteurs leur propre contrat d’assurance
          credit mais vous êtes cependant libre de souscrire votre assurance
          auprès de la compagnie d’assurance de votre choix.
        </p>

        <h4 className="h4Global">Le coût de votre assurance de prêt</h4>
        <p className="paragrapheGlobal">
          Le taux des cotisations d’assurance peut généralement varier de 2,5 à
          3,5 % du montant assuré. Le coût de la garantie décès-invalidité peut
          lui varier de 0,2 à 0,55 % du montant emprunté. Dans le cas où vous
          adhérez à l’assurance collective de la banque, vos mensualités seront
          composées du prix de l’assurance, d’une partie du capital emprunté et
          des intérêts. Pour tenter de réduire le coût de votre assurance prêt,
          comparez les nombreuses propositions émises par différentes compagnies
          d’assurance car le choix ne manque pas.
        </p>
        <h4 className="h4Global">Comparatif assurance pret</h4>
        <p className="paragrapheGlobal">
          Il peut s’avérer difficile de comparer plusieurs contrats d’assurances
          prêt entre eux car les termes qui y sont utilisés peuvent bien souvent
          ne pas être compris du consommateur. Voici cependant les points clés à
          vérifier lors d’un comparatif assurance pret des contrats proposés.
        </p>
        <p className="paragrapheGlobal">
          Tout contrat qui se respecte doit bien spécifier les conditions de la
          garantie décès. Vérifiez les modalités de prise en charge de la
          garantie PTIA (Perte Totale et Irréversible d’Autonomie). Ces deux
          garanties permettent à vos proches d’hériter de votre bien : en cas de
          décès ou de PTIA, c’est l’assureur qui rembourse intégralement votre
          crédit.{" "}
        </p>
        <h4 className="h4Global">Contrats en ligne gratuitement</h4>
        <p className="paragrapheGlobal">
          Ensuite, prenez connaissance des garanties d’Incapacité Temporaire de
          Travail (ITT), d’Incapacité Temporaire Partielle (ITP). Ces garanties
          permettent un remboursement de vos mensualités par l’assureur en cas
          d’arrêt de travail{" "}
        </p>
        <p className="paragrapheGlobal">
          Attention aux exclusions dans les offres assurance de pret : la
          guerre, le suicide, les maladies mentales… ne permettent aucune prise
          en charge par l’assureur. Prenez le temps de bien prendre connaissance
          des exclusions des contrats. Pour terminer, vérifiez les conditions et
          modalités d’indemnisation. Bien souvent, celles-ci sont plus
          avantageuses dans les contrats d’assurance prêt individuelles.{" "}
        </p>
        <SimpleInfoBox>
          À noter que la loi Duflot s’applique aux investissements locatifs qui
          ont été réalisés entre janvier 2013 et août 2014.
        </SimpleInfoBox>
        <p className="paragrapheGlobal">
          Pour faire simple, nous venons de le voir, la loi Pinel 2022 est un
          dispositif qui vous permet de réduire vos impôts lorsque vous
          <Link href="/blog/garantie-pret/">
            <a className="linkInText">
              {" "}
              investissez dans l’immobilier locatif{" "}
            </a>
          </Link>
          . Son objectif est notamment d’étoffer le nombre de logements neufs
          dans les grandes villes afin de combler le manque d'habitations
          disponibles.
        </p>


      </div>

      <MascotteBox />

      <div className="gegeBottom comparatifsGegeBottom"></div>
    </div>
  );
}

export default Comparatif;
