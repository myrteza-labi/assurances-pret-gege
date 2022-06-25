import SimpleTextBox from "../../components/SimpleTextBox";
import SimpleInfoBox from "../../components/SimpleInfoBox";
import Link from "next/link";

function Chomage() {
  return (
    <div className="Comparatif">
      <div className="firstSection firstSectionComparatif">
        <h1 className="h1Global">Protegez-vous en cas de perte d&#39;emploi </h1>
        <h2 className="h3Global">
          Garantissez-vous un prêt serein et réduisez vos dépenses en quelques
          clics
        </h2>

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstChomage"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h3 className="h2Global">Comparatif assurance prêt chômage</h3>
        <p className="paragrapheGlobal">
          L&#39;obtention d&#39;un crédit permet de concrétiser notre projet, s&#39;acheter
          une maison, ouvrir une boutique, partir en voyage ou encore tout autre
          rêve pouvant embellir notre vie. Mais en vous accordant un prêt, votre
          banquier compte bien récupérer son argent plus les intérêts et ce,
          quoi qu&#39;il puisse vous arriver.
        </p>
        <p className="paragrapheGlobal">
          Votre crédit pouvant vous engager sur une longue durée de
          remboursement, vous n&#39;êtes malheureusement pas à l&#39;abri de perdre
          votre emploi en cours de credit.
        </p>
        <p className="paragrapheGlobal">
          L&#39;assurance chomage pret, qui est la garantie perte d&#39;emploi d&#39;une
          assurance de prêt, peut vous être d&#39;une grande utilité pour bien
          améliorer votre protection durant toute votre période de remboursement
          et rassurer votre banquier.
        </p>
        <h4 className="h6Global"> L&#39; assurance perte d&#39;emploi, c&#39;est quoi ?</h4>

        <SimpleTextBox>
          La garantie chômage ou perte d&#39;emploi permet de garantir le
          remboursement du crédit de l&#39;assuré. En effet, en cas de licenciement
          de celui-ci, l&#39;assureur rembourse intégralement ou partiellement les
          mensualités de son prêt à la banque. Bien qu&#39;elle ne soit pas une
          garantie de base d&#39;une assurance de prêt, certaines banques peuvent
          cependant l&#39;exiger pour accorder un crédit.
        </SimpleTextBox>
        <h4 className="h4Global">
          Qui peut souscrire une assurance chômage ?{" "}
        </h4>
        <p className="paragrapheGlobal">
          Pour pouvoir adhérer à une assurance chomage pret, il est tout d&#39;abord
          nécessaire de souscrire les garanties de base d&#39;une garantie de prêt,
          qui sont les garanties décès-invalidité.
        </p>
        <p className="paragrapheGlobal">
          Ensuite, vous devez exercer votre emploi en contrat à durée
          indéterminée (CDI) en justifiant d&#39;une certaine ancienneté dans
          l&#39;entreprise qui vous emploie (de 6 à 12 mois).
        </p>
        <SimpleTextBox>
          En cas de chômage, vous devez également être en droit de bénéficier
          des allocations des Assedic. Enfin, il est question d&#39;une limite d&#39;âge
          de souscription qui, le plus souvent, est de 55 ans. Une personne qui
          est en période d&#39;essai ou qui a reçu un préavis de licenciement ne
          peut souscrire l&#39;assurance.
        </SimpleTextBox>
        <h5 className="h6Global">
          {" "}
          Quand bénéficie-t-on de l&#39;assurance chômage ?
        </h5>

        <p className="paragrapheGlobal">
          La souscription de l&#39;assurance est systématiquement suivie par une
          période durant laquelle aucune prise en charge du remboursement par
          l&#39;assureur n&#39;est possible.
        </p>

        <p className="paragrapheGlobal">
          Il s&#39;agit du « délai de carence ». Cette période de non effectivité de
          l&#39;assurance peut varier de 6 à 12 mois. Une fois que ce délai de
          carence a pris fin, l&#39;assuré peut bénéficier de la couverture offerte
          par la garantie perte d&#39;emploi.
        </p>
        <p className="paragrapheGlobal">
          Mais en cas de perte d&#39;emploi, l&#39;indemnisation ne peut se faire
          immédiatement car il est nécessaire d&#39;attendre la fin du « délai de
          franchise » : période de 3 à 6 mois qui débute à compter de la
          perception des allocations Assedic.
        </p>
        <h5 className="h4Global">
          Quand prend fin un contrat d&#39;assurance perte d&#39;emploi ?
        </h5>
        <p className="paragrapheGlobal">
          Un contrat assurance chomage pret se renouvelle tous les ans par
          tacite reconduction. Il peut s&#39;arrêter si le remboursement du pret
          auquel il est lié a pris fin ou encore si l&#39;assuré a atteint un âge ne
          lui permettant plus de bénéficier de cette couverture.
        </p>

        <SimpleInfoBox>
          en terme d&#39;indemnités journalières toutes les banques ne se valent
          pas. Certaines assurent à des pourcentage plus élevé et plus longtemps
          au même prix que leur concurrentes. C&#39;est pourquoi il est
          indispensable de comparer les offres entre elle.
        </SimpleInfoBox>
        <p className="paragrapheGlobal">
          En résumé, pour avoir une{" "}
          <Link href="/">
            <a className="linkInText"> assurance de prêt </a>
          </Link>{" "}
          qui vous protège en cas de perte d&#39;emploi il vous faut rajouter cette
          clause si elle n&#39;yest pas dans votre contrat.
          <br />
          Nos conseiller son là pour vous proposer les meilleur offres et vous
          faire économiser sur vos dépenses tout en préservant les meilleurs
          garanties.
        </p>
      </div>
    </div>
  );
}

export default Chomage;
