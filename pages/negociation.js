import React from "react";
import BtnGo from "../components/btnGo";
import Sommaire from "../components/sommaire";
import SimpleTextBox from "../components/simpleTextBox";
import SimpleInfoBox from "../components/simpleInfoBox";
import Link from "next/link";
import MascotteBox from "../components/mascotteBox";

function Negociation() {
  return (
    <div className="garanties">
      <div className="firstSection firstSectionGaranties">
        <h1 className="h1Global">Comparez et économisez facilement </h1>
        <h2 className="h3Global">
          Un comparateur rapide et gratuit à votre service
        </h2>

        <BtnGo
          btnText={"Obtenir un devis un 10 minutes"}
          title={"Profitez de notre comparateur gratuit"}
        />

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstgaranties"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h3 id="generalite" className="h2Global">Bien gérer la négociation assurance pret</h3>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Négociation"}
          text1={" : généralité"}
          href1={"#generalite"}
          title2={"Aborder une négociation"}
          text2={" : les tratégies à adopter"}
          href2={"#aborder"}
          title3={"Résiliation"}
          text3={" : comment être sur de l'obtenir ?"}
          href3={"#resiliation"}
          title4={"Résiliation de groupe"}
          text4={" : comprendre son fonctionnement"}
          href4={"#groupe"}
          title5={"Résiliation individuelle"}
          text5={" : quand peut-elle s'appliquer ?"}
          href5={"#individuelle"}
        />{" "}
        <p id="aborder" className="paragrapheGlobal">
          Bien que vous ne pouviez échapper à la souscription d’une assurance de
          prêt pour garantir votre crédit, il vous est possible de la négocier
          grâce à la possibilité que vous avez à choisir votre assureur. En
          optant pour une autre assurance que celle de la banque, c’est à dire
          pour une délégation d’assurance, vous pouvez bénéficier de réels
          avantages.
        </p>
        <h4 className="h4Global">
          Comment bien gérer une négociation assurance pret ?
        </h4>
        <p className="paragrapheGlobal">
          Lorsque l’on parle de négociation assurance pret, on parle de bien
          choisir sa compagnie d’assurance afin de réduire son coût et/ou de
          bénéficier de meilleures garanties que celles offertes par le contrat
          d’assurance groupe des banques. Pour cela, il est utile de simuler son
          assurance en se servant d’un comparateur assurance pret en ligne.
          Cette opération de recherche en ligne vous fait gagner du temps et
          peut vous permettre d’économiser beaucoup d’argent.
        </p>
        <p id="resiliation" className="paragrapheGlobal">
          L’offre de prêt remise par votre banquier doit contenir les termes du
          contrat d’assurance groupe proposé, c’est à dire indiquer toutes les
          garanties de cette assurance, leur étendue, les exclusions, ainsi que
          le taux de l’assurance, les conditions d’indemnisation et les délais
          de carence. Grâce à ces informations, vous pouvez comparer les offres
          de différentes compagnies d’assurance et faire jouer la concurrence
          afin de trouver le contrat le moins cher qui vous correspondra le
          mieux.{" "}
        </p>
        <SimpleTextBox>
          La négociation de son assurance prêt est une partie clé de la
          souscription d'un contrat. Les garantie, les clause que l'on souhaite
          ajouter au contrat, les delais, Ont des paramètres à mettre en place
          avant la signature du contrat.
        </SimpleTextBox>
        <h4 id="groupe" className="h6Global">Ce qu'il faut savoir</h4>
        <p className="paragrapheGlobal">
          Généralement, pour vous accorder un crédit, l’organisme de prêt vous
          demande de souscrire une assurance de prêt afin de garantir votre
          emprunt. Mais il se peut, pour diverses raisons, que durant le cours
          de votre remboursement de crédit, vous souhaitiez résilier votre
          contrat. Voici comment procéder.
        </p>
        <h4 className="h4Global">Résilier une assurance de groupe</h4>
        <p className="paragrapheGlobal">
          Une assurance de prêt arrive généralement à échéance en même temps que
          le crédit qu’elle garantit. Les primes de cette assurance sont
          d’ailleurs comprises dans les mensualités du crédit. Si vous effectuez
          un remboursement anticipé de votre crédit, vous n’avez donc plus à
          payer votre assurance puisqu’elle prendra fin au même moment que
          celui-ci.
        </p>
        <p className="paragrapheGlobal">
          Dans le cas où vous n’avez pas terminé de rembourser votre prêt, vous
          ne pouvez résilier votre assurance groupe seulement si vous souhaitez
          changer pour une assurance individuelle à garanties au moins
          équivalentes à celles du contrat en cours. Cela peut vous permettre de
          payer moins cher ou encore de bénéficier d’une couverture de prêt plus
          performante et adaptée à votre situation actuelle. Pour ce faire, vous
          devez obtenir l’accord de votre banque puis lui communiquer votre «
          délégation d’assurance »{" "}
          <Link href="/blog/resiliation-assurance-pret/">
            <a className="linkInText"> assurance individuelle externe. </a>
          </Link>{" "}
          Si elle accepte, la résiliation assurance pret du contrat groupe se
          fera à sa date anniversaire de souscription et sera alors remplacée
          par votre nouvelle assurance de prêt.{" "}
        </p>
        <SimpleInfoBox>
          Selon votre contrat il n'est pas toujours légalement possible de
          résilier votre contrat. C'est pourquoi il est nécessaire est très
          important de bien vérifier les clauses avant la signature.
        </SimpleInfoBox>
        <h4 id="individuelle" className="h4Global">Résilier une assurance individuelle</h4>
        <p className="paragrapheGlobal">
          Il est plus facile de résilier une assurance individuelle qu’un
          contrat groupe. Il est cependant nécessaire de respecter certaines
          conditions. Vous êtes en droit de résilier annuellement votre contrat
          d’assurance individuelle. Pour cela, il vous faut envoyer à l’assureur
          votre demande de résiliation par lettre recommandée avec accusé de
          réception au minimum deux mois avant la date anniversaire de
          souscription. Il est bon de savoir que dans certains contrats la
          résiliation est possible durant une période limitée, généralement de 1
          mois, suivant sa souscription.
        </p>
      </div>

      <MascotteBox />

      <div className="gegeBottom garantiesGegeBottom"></div>
    </div>
  );
}

export default Negociation;
