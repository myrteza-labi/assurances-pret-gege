import React from "react";
import BtnGo from "../components/btnGo";
import Sommaire from "../components/sommaire";
import Link from "next/link";
import MascotteBox from "../components/mascotteBox";
import Article from "../components/article";

function Blog() {
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
          title={"Assurance sénior compétitive en ligne"}
          h6={"Crédit sénior : quid de l&#39;assurance de prêt ?"}
          description={
            <p className="paragrapheGlobal-v3">
              Passé la soixantaine, trouver un crédit pour financer son projet
              immobilier est relativement difficile...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurance-pret-blog-senior.jpg"}
          alt={"assurance pret senior"}
          href={"/blog/assurance/assurance-pret-senior"}
        ></Article>

        <Article
          title={"Assurance emprunteur : infos et conseils"}
          h6={"Tout savoir sur l'assurance emprunteur"}
          description={
            <p className="paragrapheGlobal-v3">
              Les prêts bancaires sont un excellent moyen pour pouvoir s&#39;acheter
              une maison ou une voiture...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-courtier-blog.jpg"}
          alt={"courtier assurance pret"}
          href={"/blog/assurance-emprunteur-infos-conseils"}
        ></Article>

        <Article
          title={
            "Simulation assurance crédit : un outil fiable d&#39;aide à la décision"
          }
          h6={"Comparatif en assurance prêt : un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              Depuis la possibilité pour les emprunteurs de crédit immobilier de
              déléguer leur...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-simulation.jpg"}
          alt={"simulation assurance pret"}
          href={"/blog/simulation-assurance-credit"}
        ></Article>

        <Article
          title={
            "Trouver une assurance avec risque de santé aggravé liée au poids"
          }
          h6={"Comparatif en assurance prêt : un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              La détermination du coût d&#39;une assurance emprunteur dépend de
              critères personnalisés très précis...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-obesite.jpg"}
          alt={"comparateur assurance pret"}
          href={"/blog/assurance-pret-obesite/"}
        ></Article>

        <Article
          title={
            "Comment trouver une assurance emprunt immobilier avantageuse ?"
          }
          h6={"Comparatif en assurance prêt : un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              Depuis le 1er septembre 2010, l&#39;emprunteur a la possibilité de
              choisir son assurance emprunt immobilier...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-immobilier.jpg"}
          alt={"assurance pret immobilier"}
          href={"/blog/assurance-emprunt-immobilier/"}
        ></Article>

        <Article
          title={"La résiliation assurance prêt immobilier est-elle possible ?"}
          h6={"Résiliation et obligation de l'emprunteur"}
          description={
            <p className="paragrapheGlobal-v3">
              Sous peine de nullité, votre contrat d&#39;assurance de prêt
              immobilier doit contenir le taux de l&#39;assurance...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-resiliation.jpg"}
          alt={"assurance pret resilitation"}
          href={"/blog/resiliation-assurance-pret/"}
        ></Article>

        <Article
          title={"Pourquoi demander un devis assurance crédit ?"}
          h6={"Devis en assurance de prêt : Un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              Face au large panel d&#39;offres en matière d&#39;assurance de prêt, le
              mieux est de faire appel aux...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-devis.jpg"}
          alt={"assurance pret devis"}
          href={"/blog/demander-devis-assurance-credit/"}
        ></Article>

        <Article
          title={"Comment définir le taux assurance crédit ?"}
          h6={"Devis en assurance de prêt : Un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              Un crédit immobilier doit toujours être assorti d&#39;une assurance de
              prêt...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-taux.jpg"}
          alt={"taux assurance pret"}
          href={"/blog/taux-assurance/"}
        ></Article>

        <Article
          title={"Délégation assurance pret moins chère"}
          h6={"Tout s'avoir sur l'assurance prêt individuelle"}
          description={
            <p className="paragrapheGlobal-v3">
              La délégation assurance prêt consiste à choisir une offre
              d&#39;assurance de prêt moins chère...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-cout.jpg"}
          alt={"deleguation assurance pret"}
          href={"/blog/delegation-assurance-pret/"}
        ></Article>

        <Article
          title={
            "Une garantie de prêt immobilier pour investir en toute sérénité"
          }
          h6={"Investissement immobilier : que qu'ouvre l'assurance de prêt ? "}
          description={
            <p className="paragrapheGlobal-v3">
              Une garantie de prêt est indispensable pour obtenir un financement
              pour l&#39;acquisition d&#39;un bien immobilier...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-investissement.jpg"}
          alt={"assurance pret investissement"}
          href={"/blog/garantie-pret/"}
        ></Article>

        <div className="enSavoirPlusCtn-v3">
          <a href={"/blog/page/2/"}>
            <p href={"/blog/page/2/"} className="enSavoirPlus">
              Page suivante
            </p>
          </a>
        </div>
      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>
    </div>
  );
}

export default Blog;

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
