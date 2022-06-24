import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogGaranties() {
  return (
    <div className="garanties">
      <div className="firstSection firstSectionGaranties">
        <h1 className="h1Global">
          Restez informé de l'actualite et économisez sur votre assurance prêt
        </h1>

        <Link href="/devis">
          <a>
            <BtnGo
              btnText={"Obtenir un devis en 10 minutes"}
              title={"Effectuer un devis gratuit et rapides"}
            />
          </a>
        </Link>

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstgaranties"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h2 id="generalite" className="h2Global">
          Blog : Assurance sénior
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Assurance sénior"}
          text1={" : comment la trouver"}
          href1={"#senior"}
          title2={"Assurance emprunteur"}
          text2={" : infos et conseils"}
          href2={"#assurancepret"}
          title3={"Garanties décès"}
          text3={" : quand est-elle éxigée"}
          href3={"#deces"}
          title4={"Garanties invalidité long terme"}
          text4={" : de quoi protège t-elle"}
          href4={"#perteAutonomie"}
          title5={"Garanties invalidité court terme"}
          text5={" : Utiles au quotidien"}
          href5={"#invalidite"}
          title6={"Garanties chômage"}
          text6={" : Une protection indispensable et obligatoire"}
          href6={"#chomage"}
          title7={""}
          text7={""}
          href7={"#test"}
        />
      
      <FullArticle
          title={
            "Une garantie de prêt immobilier pour investir en toute sérénité"
          }
          h6={"Investissement immobilier : que qu'ouvre l'assurance de prêt ? "}
          description={
            <p className="paragrapheGlobal-v3">
              Une garantie de prêt est indispensable pour obtenir un financement
              pour l’acquisition d’un bien immobilier...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-investissement.jpg"}
          alt={""}
        >
          <h5 className="h5Global">
            Profiter d’une totale liberté de choisir avec la délégation
            assurance pret
          </h5>
          <p className="paragrapheGlobal">
            Une garantie de prêt est indispensable pour obtenir un financement
            pour l’acquisition d’un bien immobilier. Après avoir étudié le
            dossier de demande de prêt, la banque fera une offre préalable à
            l’emprunteur dont la validité est de 30 jours.
          </p>
          <p className="paragrapheGlobal">
            Pendant ce délai, l’emprunteur a la possibilité de rechercher
            ailleurs une garantie de crédit moins chère, mais offrant les mêmes
            couvertures que celle proposée par la banque.
          </p>
          <h5 className="h5Global">
            L’incapacité de travail en garantie de prêt{" "}
          </h5>
          <p className="paragrapheGlobal">
            Si vous êtes en situation d’incapacité de travail, l’assureur
            procédera au remboursement de votre prêt. Toutefois, une clause du
            contrat fixe la quotité assurée ainsi que la franchise qui peut être
            de 30, 60 ou 90 jours selon les cas. Les remboursements couvrent
            normalement 100 % du montant du versement mensuel.
          </p>
          <p className="paragrapheGlobal">
            Dès la signature du contrat, l’assuré doit bien vérifier ce
            pourcentage de garantie ainsi que le concept d’« incapacité de
            travail » évoqué dans la garantie de pret, afin de ne pas se laisser
            surprendre en cas de sinistre.{" "}
          </p>
          <h5 className="h5Global">L’invalidité dans une garantie prêt</h5>
          <p className="paragrapheGlobal">
            La prise en charge de la compagnie d’assurance sera en fonction du
            taux d’invalidité prédéfini dans le contrat. Dans la pratique :
          </p>
          <p className="paragrapheGlobal">
            - <br />
            un taux d’invalidité supérieur à 66 % ouvre droit à un remboursement
            intégral de l’échéance
            <br />
            - <br />
            entre 33 % et 66 %, le remboursement se fera en fonction d’un
            coefficient de proportionnalité.
            <br />
            - <br />
            pour une invalidité en dessous de 33 %, aucune couverture ne sera
            activée.
            <br />
          </p>
          <p className="paragrapheGlobal">
            En principe, la garantie de prêt en cas de chômage est optionnelle,
            à charge donc pour l’emprunteur de choisir celle qui lui permettra
            de faire le maximum d’économies.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogGaranties;
