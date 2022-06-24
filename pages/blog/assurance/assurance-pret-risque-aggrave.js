import BtnGo from "../../../components/btnGo";
import Sommaire from "../../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../../components/FullArticle";

function BlogRisqueAggrave() {
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
          title={"Assurance pret risque aggravé"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-risque-aggarave.jpg"}
          alt={""}
        >
          <h5 className="h5Global">
            Changer assurance prêt : une opération facile avec le bon courtier{" "}
          </h5>
          <p className="paragrapheGlobal">
            Quand on présente un risque aggravé aux yeux des banques il est
            difficile, voir impossible d’obtenir une assurance pret. Pourtant,
            chacun devrait pouvoir assurer son prêt afin de se garantir en cas
            de problème.
          </p>
          <p className="paragrapheGlobal">
            Quand on souscrit un prêt on souhaite pouvoir l’assurer en cas de
            problème comme la perte d’emplois, la maladie, le décès ou encore
            l’invalidité.
          </p>
          <h5 className="h5Global">Qu’est ce qu’un risque aggravé ?</h5>
          <p className="paragrapheGlobal">
            Le risque aggravé c’est quand la situation de l’emprunteur présente
            un niveau de risque supérieur à la normale. Par exemple dans les cas
            suivants :
          </p>
          <p className="paragrapheGlobal">
            - État de santé dégradé
            <br />
            - Age avancé
            <br />
            - Passé d’assuré négatif
            <br />
          </p>
          <p className="paragrapheGlobal">
            Il n’y a pas de règle absolue, c’est l’assureur de votre prêt qui se
            fera son idée et qui décidera du niveau de risque dans lequel il
            vous classe. Quoi qu’il en soit, vous aurez un problème pour vous
            assurer mais il existe des solutions.
          </p>
          <h5 className="h5Global">
            Obtenir une assurance pour son prêt malgré tout
          </h5>
          <p className="paragrapheGlobal">
            Vous pouvez malgré tout obtenir une assurance pour votre prêt si
            vous présentez un risque aggravé. Nous avons des solutions
            d’assurance de prêt pour tous les niveaux de risques. Consultez nous
            afin d’obtenir une proposition d’assurance de votre prêt adaptée à
            votre situation.
          </p>
        </FullArticle>
      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>
    </div>
  );
}

export default BlogRisqueAggrave;
