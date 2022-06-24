import SimpleTextBox from "../../components/SimpleTextBox";
import SimpleInfoBox from "../../components/SimpleInfoBox";
import Link from "next/link";

function Chomage() {
  return (
    <div className="Comparatif">
      <div className="firstSection firstSectionComparatif">
        <h1 className="h1Global">Protegez-vous en cas de perte d'emploi </h1>
        <h3 className="h3Global">
          Garantissez-vous un prêt serein et réduisez vos dépenses en quelques
          clics
        </h3>

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstChomage"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h2 className="h2Global">Comparatif assurance prêt chômage</h2>
        <p className="paragrapheGlobal">
          L’obtention d’un crédit permet de concrétiser notre projet, s’acheter
          une maison, ouvrir une boutique, partir en voyage ou encore tout autre
          rêve pouvant embellir notre vie. Mais en vous accordant un prêt, votre
          banquier compte bien récupérer son argent plus les intérêts et ce,
          quoi qu’il puisse vous arriver.
        </p>
        <p className="paragrapheGlobal">
          Votre crédit pouvant vous engager sur une longue durée de
          remboursement, vous n’êtes malheureusement pas à l’abri de perdre
          votre emploi en cours de credit.
        </p>
        <p className="paragrapheGlobal">
          L’assurance chomage pret, qui est la garantie perte d’emploi d’une
          assurance de prêt, peut vous être d’une grande utilité pour bien
          améliorer votre protection durant toute votre période de remboursement
          et rassurer votre banquier.
        </p>
        <h6 className="h6Global"> L' assurance perte d'emploi, c'est quoi ?</h6>

        <SimpleTextBox>
          La garantie chômage ou perte d’emploi permet de garantir le
          remboursement du crédit de l’assuré. En effet, en cas de licenciement
          de celui-ci, l’assureur rembourse intégralement ou partiellement les
          mensualités de son prêt à la banque. Bien qu’elle ne soit pas une
          garantie de base d’une assurance de prêt, certaines banques peuvent
          cependant l’exiger pour accorder un crédit.
        </SimpleTextBox>
        <h4 className="h4Global">
          Qui peut souscrire une assurance chômage ?{" "}
        </h4>
        <p className="paragrapheGlobal">
          Pour pouvoir adhérer à une assurance chomage pret, il est tout d’abord
          nécessaire de souscrire les garanties de base d’une garantie de prêt,
          qui sont les garanties décès-invalidité.
        </p>
        <p className="paragrapheGlobal">
          Ensuite, vous devez exercer votre emploi en contrat à durée
          indéterminée (CDI) en justifiant d’une certaine ancienneté dans
          l’entreprise qui vous emploie (de 6 à 12 mois).
        </p>
        <SimpleTextBox>
          En cas de chômage, vous devez également être en droit de bénéficier
          des allocations des Assedic. Enfin, il est question d’une limite d’âge
          de souscription qui, le plus souvent, est de 55 ans. Une personne qui
          est en période d’essai ou qui a reçu un préavis de licenciement ne
          peut souscrire l’assurance.
        </SimpleTextBox>
        <h6 className="h6Global">
          {" "}
          Quand bénéficie-t-on de l’assurance chômage ?
        </h6>

        <p className="paragrapheGlobal">
          La souscription de l’assurance est systématiquement suivie par une
          période durant laquelle aucune prise en charge du remboursement par
          l’assureur n’est possible.
        </p>

        <p className="paragrapheGlobal">
          Il s’agit du « délai de carence ». Cette période de non effectivité de
          l’assurance peut varier de 6 à 12 mois. Une fois que ce délai de
          carence a pris fin, l’assuré peut bénéficier de la couverture offerte
          par la garantie perte d’emploi.
        </p>
        <p className="paragrapheGlobal">
          Mais en cas de perte d’emploi, l’indemnisation ne peut se faire
          immédiatement car il est nécessaire d’attendre la fin du « délai de
          franchise » : période de 3 à 6 mois qui débute à compter de la
          perception des allocations Assedic.
        </p>
        <h4 className="h4Global">
          Quand prend fin un contrat d’assurance perte d’emploi ?
        </h4>
        <p className="paragrapheGlobal">
          Un contrat assurance chomage pret se renouvelle tous les ans par
          tacite reconduction. Il peut s’arrêter si le remboursement du pret
          auquel il est lié a pris fin ou encore si l’assuré a atteint un âge ne
          lui permettant plus de bénéficier de cette couverture.
        </p>

        <SimpleInfoBox>
          en terme d'indemnités journalières toutes les banques ne se valent
          pas. Certaines assurent à des pourcentage plus élevé et plus longtemps
          au même prix que leur concurrentes. C'est pourquoi il est
          indispensable de comparer les offres entre elle.
        </SimpleInfoBox>
        <p className="paragrapheGlobal">
          En résumé, pour avoir une{" "}
          <Link href="/">
            <a className="linkInText"> assurance de prêt </a>
          </Link>{" "}
          qui vous protège en cas de perte d'emploi il vous faut rajouter cette
          clause si elle n'yest pas dans votre contrat.
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
