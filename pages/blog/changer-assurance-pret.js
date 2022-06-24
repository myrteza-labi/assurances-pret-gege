import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogChangerAssurance() {
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
          title={"Changer d’assurance crédit en cours de remboursement"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-changer.jpg"}
          alt={""}
        >
          <h5 className="h5Global">
            Changer assurance prêt : une opération facile avec le bon courtier{" "}
          </h5>
          <p className="paragrapheGlobal">
            Dans le cadre d’un prêt immobilier, vous avez dû souscrire une
            assurance de prêt. Cependant, il se peut qu’en cours de réalisation
            du contrat, vous trouviez une offre plus intéressante ou que votre
            police ne vous convienne plus. Il s’avère donc préférable de changer
            assurance prêt.
          </p>

          <p className="paragrapheGlobal">
            À l’instar de tous les contrats, l’assurance prêt est un accord
            auquel l’assuré peut mettre fin à sa date anniversaire sauf
            stipulation contraire. Si vous avez choisi une nouvelle garantie
            emprunteur, pensez à résilier la précédente police en respectant un
            préavis de trois mois. Les termes de la nouvelle police doivent être
            acceptés par la banque. Dans la pratique, l’établissement bancaire
            vérifie si les conditions de garantie sont équivalentes aux siennes.
          </p>
          <h5 className="h5Global">
            La procédure à suivre pour changer assurance prêt
          </h5>
          <p className="paragrapheGlobal">
            Pour changer assurance prêt, l’assuré doit au préalable trouver une
            nouvelle assurance et en fournir la délégation à sa banque. Il faut
            envoyer une lettre de résiliation et fournir une attestation de
            levée de clause bénéficiaire afin que le contrat initial cesse de
            prendre effet. La résiliation de certaines polices ne peut
            s’effectuer qu’au 1er janvier, donc veillez à bien vérifier la date
            d’échéance de votre contrat avant de changer assurance crédit.
          </p>
          <p className="paragrapheGlobal">
            Il faut également savoir que grâce à la loi Hamon, l’emprunteur va
            pouvoir disposer d’un an pour changer d’assurance emprunteur et
            migrer vers une offre moins chère.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogChangerAssurance;
