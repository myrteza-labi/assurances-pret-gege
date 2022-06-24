import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogDevis() {
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
          Devis assurance prêt
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
          title={"Pourquoi demander un devis assurance crédit ?"}
          h6={"Devis en assurance de prêt : Un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              Face au large panel d’offres en matière d’assurance de prêt, le
              mieux est de faire appel aux...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-devis.jpg"}
          alt={""}
        >
          <h5 className="h5Global">Combien coûte une assurance de prêt ?</h5>
          <p className="paragrapheGlobal">
            Face au large panel d’offres en matière d’assurance de prêt, le
            mieux est de faire appel aux services d’un professionnel afin
            d’obtenir plusieurs devis assurance crédit.
          </p>
          <p className="paragrapheGlobal">
            Le coût peut varier en fonction des compagnies et de la durée de la
            couverture. Dans un devis assurance prêt immobilier, le coût de la
            garantie est évalué généralement soit : <br />
            - Proportionnellement au montant total à assurer
            <br />
            - En fonction d’un taux annuel ou mensuel
            <br />
            - En € par mois pour 1000 € ou 10 000 €<br />
          </p>
          <p className="paragrapheGlobal">
            Le montant qui va servir de base pour le calcul va être le capital
            restant dû. Dans certains cas, ce sera le capital emprunté. Une
            telle variété de pratiques implique que le futur assuré fasse preuve
            de vigilance et se base sur des critères similaires afin de mieux
            comparer différents produits.
          </p>
          <h5 className="h5Global">
            Quels éléments prendre en compte dans un devis assurance credit ?{" "}
          </h5>
          <p className="paragrapheGlobal">
            Dans un devis assurance credit, le seul élément de comparaison
            fiable est le Taux Effectif Global. Connue normalement dès l’offre
            de contrat, sa valeur oscille entre 0.20 % et 0.65 % selon que la
            formule est plus économique ou plus coûteuse.
          </p>
          <p className="paragrapheGlobal">
            Votre profil santé entre en ligne de compte pour la détermination de
            ce taux. Si le questionnaire médical révèle un risque sanitaire,
            l’assureur peut soit refuser votre demande soit appliquer des
            surprimes.
          </p>
          <p className="paragrapheGlobal">
            À ce titre, les établissements de crédit doivent mentionner le coût
            total de la garantie emprunteur et le montant des échéances
            d’assurance pour vous aider à choisir parmi les différents devis
            assurance credit qui vous sont proposés.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogDevis;
