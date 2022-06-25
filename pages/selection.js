import SimpleTextBox from "../components/SimpleTextBox";
import SimpleInfoBox from "../components/SimpleInfoBox";
import Link from "next/link";

function Immobilier() {
  return (
    <div className="Comparatif">
      <div className="firstSection firstSectionComparatif">
        <h1 className="h1Global">
          Comparez et économisez sur votre assurance prêt immobilier{" "}
        </h1>
        <h2 className="h3Global">
          Comparez vos assurances et réduisez vos dépenses en quelques clics
        </h2>

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstImmobilier"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h3 className="h2Global">Comparatif assurance prêt immobilier</h3>
        <p className="paragrapheGlobal">
          Dans le cadre d&#39;un crédit immobilier, l&#39;assurance de prêt est une
          garantie que les banques et organismes de crédit exigent pour couvrir
          les risques de non-remboursement en cas de décès, d&#39;invalidité,
          d&#39;incapacité de travail ou de perte d&#39;emploi de l&#39;emprunteur.
        </p>
        <p className="paragrapheGlobal">
          En cas de sinistre, elle permet en effet la prise en charge du
          remboursement total ou partiel du crédit par l&#39;assureur. La sélection
          assurance prêt immobilier est importante ; elle permet également aux
          proches de l&#39;emprunteur de ne pas hériter de sa dette et de conserver
          le bien financé si celui-ci venait à décéder.
        </p>
        <h4 className="h6Global">
          {" "}
          A qui s&#39;adresser pour souscrire une assurance ?
        </h4>

        <SimpleTextBox>
          Lors de son offre de crédit, la banque propose généralement à
          l&#39;emprunteur son propre contrat d&#39;assurance : l&#39;assurance de groupe.
          Mais ce type d&#39;assurance étant une couverture standard collective,
          elle n&#39;est pas forcément la plus avantageuse. Il vous est donc
          recommandé de vous lancer dans une comparaison et une sélection
          assurance pret des offres de différents assureurs afin de choisir
          celle qui sera la moins chère du marché et qui répondra le mieux à vos
          besoins. Pour cela, vous gagnerez du temps en vous servant d&#39;un
          comparatif assurance pret en ligne sur le site d&#39;un courtier
          spécialisé en assurances de prêt.
        </SimpleTextBox>
        <h4 className="h4Global">
          Sélection des garanties équivalentes exigées par les banques{" "}
        </h4>
        <p className="paragrapheGlobal">
          Lors de la souscription d&#39;une assurance de prêt, la garantie
          décès-invalidité est systématiquement imposée. Ensuite, selon la
          situation et les besoins de l&#39;emprunteur, la garantie optionnelle de
          perte d&#39;emploi peut être souscrite.
        </p>
        <p className="paragrapheGlobal">
          La garantie décès-invalidité couvre le prêt en cas de décès ou
          d&#39;incapacité de l&#39;assuré constaté obligatoirement par un médecin, à la
          suite d&#39;un accident ou d&#39;une maladie.
        </p>
        <SimpleTextBox>
          La garantie de perte d&#39;emploi, ou assurance chômage, couvre
          l&#39;emprunteur exerçant son emploi en Contrat à Durée Indéterminée. Pour
          y adhérer, il est nécessaire de justifier d&#39;une ancienneté minimale
          chez l&#39;employeur actuel. En cas de perte d&#39;emploi, l&#39;assurance prend
          en charge le remboursement total ou partiel des mensualités (de 18 à
          48 mois).
        </SimpleTextBox>

        <p className="paragrapheGlobal">
          La quotité est également un élément à bien prendre en compte car il
          s&#39;agit du taux de couverture pour chaque emprunteur. En cas de
          sinistre, c&#39;est selon ce pourcentage que l&#39;assureur rembourse le
          crédit à la place de l&#39;assuré.
        </p>

        <p className="paragrapheGlobal">
          Lors d&#39;un emprunt à deux, si votre conjoint décède et qu&#39;il avait une
          quotité de 50 %, alors l&#39;assureur remboursera intégralement 50 % du
          crédit et vous continuerez donc à rembourser votre part du crédit.
        </p>
        <p className="paragrapheGlobal">
          Il vous est bien sûr recommandé de choisir chacun une quotité de 100 %
          pour qu&#39;en cas de décès de l&#39;un des co-emprunteurs, l&#39;assureur
          rembourse intégralement le crédit, mais cela coûte bien sûr plus cher.
        </p>
        <h4 className="h4Global">Critères de choix d&#39;une assurance prêt</h4>
        <p className="paragrapheGlobal">
          Le coût d&#39;une assurance de prêt est calculé sur la base du montant du
          capital emprunté. Il représente un pourcentage du crédit qui varie en
          fonction de la situation professionnelle, de l&#39;âge, et de la santé de
          l&#39;emprunteur. Un jeune emprunteur qui est en bonne santé, paiera moins
          cher qu&#39;un emprunteur de plus de 50 ans malade.
        </p>
        <h4 className="h4Global">Comparatif assurance pret</h4>
        <p className="paragrapheGlobal">
          Il peut s&#39;avérer difficile de comparer plusieurs contrats d&#39;assurances
          prêt entre eux car les termes qui y sont utilisés peuvent bien souvent
          ne pas être compris du consommateur. Voici cependant les points clés à
          vérifier lors d&#39;un comparatif assurance pret des contrats proposés.
        </p>
        <h5 className="h6Global">Comparez les offres entres elles</h5>
        <p className="paragrapheGlobal">
          Pour comparer les offres entre elles, il ne vous faut pas seulement
          vous baser sur le coût des assurances mais aussi sur les garanties
          proposées et leur étendue
        </p>
        <p className="paragrapheGlobal">
          Il faut aussi tenir compte des exclusions des contrats, qui sont les
          événements ne permettant pas une prise en charge du remboursement du
          crédit par l&#39;assureur. Ne pas oublier non plus de vérifier le délai de
          carence car il fixe le début de l&#39;effectivité de l&#39;assurance du
          credit.
        </p>

        <SimpleInfoBox>
          À noter que Plus vous serez transparent et plus votre garantie d&#39;être
          couvert lors d&#39;un sinistre est préservée
        </SimpleInfoBox>
        <p className="paragrapheGlobal">
          Pour faire simple, nous venons de le voir, passer par notre
          comparateur en ligne est le moyen le plus simple et rapide d&#39;obtenir
          la meilleur offre pour votre
          <Link href="/blog/assurance-emprunt-immobilier/">
            <a className="linkInText"> assurance de prêt immobilier. </a>
          </Link>
          <br/>
          Nos conseiller son là pour vous proposer les meilleur offres et vous
          faire économiser sur vos dépenses.
        </p>
      </div>
    </div>
  );
}

export default Immobilier;
