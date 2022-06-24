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
          Assurance prêt risque aggravé
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Assurance prêt risque aggravé"}
          text1={" : introduction"}
          href1={"#risque-intro"}
          title2={"Risque aggravé"}
          text2={" : c'est quoi exactement"}
          href2={"#risque-explication"}
          title3={"Assurance et risque"}
          text3={" : Obtenir le prêt conseils et astuces"}
          href3={"#risque-conseil"}

        />

        <FullArticle
          title={"Assurance pret risque aggravé"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-risque-aggarave.jpg"}
          alt={""}
        >
          <h5 id="risque-intro"className="h5Global">
            Changer assurance prêt : une opération facile avec le bon courtier{" "}
          </h5>
          <p id="risque-explication" className="paragrapheGlobal">
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
          <p id="risque-conseil" className="paragrapheGlobal">
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
