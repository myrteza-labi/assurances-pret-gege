import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogSimulation() {
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
         Simulation assurance crédit
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
            "Simulation assurance crédit : un outil fiable d’aide à la décision"
          }
          h6={"Comparatif en assurance prêt : un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              Depuis la possibilité pour les emprunteurs de crédit immobilier de
              déléguer leur assurance de prêt...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-simulation.jpg"}
          alt={""}
        >
          <h5 className="h5Global">
            L’intérêt d’une simulation assurance credit{" "}
          </h5>
          <p className="paragrapheGlobal">
            Depuis la possibilité pour les emprunteurs de crédit immobilier de
            déléguer leur assurance de prêt, de nombreuses plateformes
            spécialisées proposent aux internautes de procéder à une simulation
            assurance crédit.
          </p>
          <p className="paragrapheGlobal">
            Vous êtes en quête d’une assurance emprunteur efficace pour couvrir
            votre crédit immobilier et acquérir enfin la maison de vos rêves ?
            Profitez des outils de simulation assurance emprunteur en ligne afin
            d’estimer le coût de votre police et trouver les meilleures offres.
          </p>
          <p className="paragrapheGlobal">
            Pour procéder à une simulation assurance prêt, il suffit de
            compléter un formulaire de demande de devis en ligne. Ce document
            recense les données essentielles vous concernant. En quelques clics,
            votre dossier sera transmis à toutes les compagnies partenaires de
            la plateforme et vous recevrez une solution sur mesure sous deux
            jours.
          </p>
          <h5 className="h5Global">
            Quelles sont les données à fournir pour votre calcul assurance prêt
            ?{" "}
          </h5>
          <p className="paragrapheGlobal">
            Afin de recevoir une proposition proche de vos réels besoins, il
            convient de compléter avec la plus grande précision possible les
            champs obligatoires du formulaire proposé en ligne. Cette précaution
            vous permet de ne pas biaiser votre simulation assurance credit.
          </p>
          <p className="paragrapheGlobal">
            Il faudrait donner des indications sur le projet et les détails du
            financement à assurer tels le type, le montant, la durée et le taux
            du prêt. Il est également utile de préciser si vous avez déjà
            d’autres prêts à votre actif. Des informations sur l’identité, la
            profession exacte et l’âge peuvent également être demandées. Les
            conditions de travail, le caractère fumeur ou non, la pratique
            d’activités sportives à risques sont autant de facteurs ayant une
            incidence sur le calcul assurance prêt.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogSimulation;
