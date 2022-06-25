import React from "react";
import BtnGo from "../../../components/btnGo";
import Sommaire from "../../../components/sommaire";
import Link from "next/link";
import MascotteBox from "../../../components/mascotteBox";
import Article from "../../../components/article";

function Blog2() {
  return (
    <div className="garanties">
      <div className="firstSection firstSectionGaranties">
        <h1 className="h1Global">
          Restez informé de l&#39;actualite et économisez sur votre assurance prêt
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
          Notre blog
        </h2>

        <Article
          title={"Changer d&#39;assurance crédit en cours de remboursement"}
          h6={"Changer d'assurance : quand est-ce possible"}
          description={
            <p className="paragrapheGlobal-v3">
              Dans le cadre d&#39;un prêt immobilier, vous avez dû souscrire une
              assurance de prêt...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-changer.jpg"}
          alt={"changer assurance credit"}
          href={"/blog/changer-assurance-pret/"}
        ></Article>

        <Article
          title={"Assurance pret risque aggravé"}
          h6={"Profiles à risques : ce que vous devez faut savoir"}
          description={
            <p className="paragrapheGlobal-v3">
              Quand on présente un risque aggravé aux yeux des banques il est
              difficile voir...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-risque-aggarave.jpg"}
          alt={"Assurance pret risque aggrave"}
          href={"/blog/assurance/assurance-pret-risque-aggrave/"}
        ></Article>

        <Article
          title={"L&#39;aide à l&#39;achat d&#39;une résidence principale"}
          h6={"Tout savoir sur les aides disponibles"}
          description={
            <p className="paragrapheGlobal-v3">
              Le Pret Accession Sociale permet aux acheteurs d&#39;une résidence
              principale qui répondent...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-aide-financiere.jpg"}
          alt={"aide financiere assurance pret"}
          href={"/blog/pret/aide-achat-residence-principale/"}
        ></Article>

        <Article
          title={"Comment garantir son crédit immobilier ?"}
          h6={"Les garanties à privilégier pour votre prêt"}
          description={
            <p className="paragrapheGlobal-v3">
              Ensuite, la banque étudie la demande sur les même critères que
              ceux d&#39;une...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-garanties.jpg"}
          alt={"garanties assurance pret"}
          href={"/blog/assurance/comment-garantir-son-credit-immobilier/"}
        ></Article>

        <div className="enSavoirPlusCtn-v3">
          <a href={"/blog"}>
            <p href={"/blog"} className="enSavoirPlus">
              Page précedente
            </p>
          </a>
        </div>
      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>
    </div>
  );
}

export default Blog2;

/*


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


       A METTRE A LA FIN POUR AVOIR UNE MASCOTTE EN BAS DE PAGE 
      <div className="gegeBottom garantiesGegeBottom"></div>

*/
