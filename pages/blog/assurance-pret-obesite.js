import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogObesite() {
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
          Assurance prêt obésité
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
            "Trouver une assurance avec risque de santé aggravé liée au poids"
          }
          h6={"Comparatif en assurance prêt : un outil indispensable"}
          description={
            <p className="paragrapheGlobal-v3">
              La détermination du coût d’une assurance emprunteur dépend de
              critères personnalisés très précis...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-obesite.jpg"}
          alt={""}
        >
          <h5 className="h5Global">L’assurance prêt obésité</h5>
          <p className="paragrapheGlobal">
            La détermination du coût d’une assurance emprunteur dépend de
            critères personnalisés très précis. Certaines catégories
            d’emprunteurs ont du mal à s’assurer, car elles sont sujettes à des
            problèmes de santé qui ne rassurent pas toujours les assureurs.
            Trouver une assurance prêt obésité peut ainsi être difficile sans
            l’aide d’un courtier spécialisé.
          </p>
          <p className="paragrapheGlobal">
            La convention AERAS ou s’Assurer et Emprunter avec un Risque Aggravé
            de Santé vise à favoriser les personnes ayant des difficultés à
            trouver une assurance. Les personnes en surcharge pondérale font
            partie des cas présentant des « risques aggravés de santé ». De ce
            fait, ils peuvent accéder à une assurance prêt obésité mais les
            conditions proposées risquent de ne pas être assez avantageuses.
          </p>
          <h5 className="h5Global">
            La détermination du surpoids assurance prêt{" "}
          </h5>
          <p className="paragrapheGlobal">
            L’évaluation du risque en cas de surpoids dépend de l’Indice de
            Masse Corporelle (IMC). Ce critère va servir de base pour fixer les
            tarifs de la garantie emprunteur. En effet, le rapport taille- poids
            élevé informe sur une éventuelle présence de pathologies latentes ou
            à venir. Une personne obèse peut ou pourra être diabétique,
            hypertendu ou cardiaque ou victime d’apnée du sommeil.
          </p>
          <p className="paragrapheGlobal">
            Chaque compagnie définit son seuil surpoids assurance prêt. Si l’IMC
            est au-delà de la limite fixée, le médecin-expert de l’assureur
            appliquera une surprime d’assurance selon les normes de la grille
            tarifaire de la compagnie.
          </p>
          <p className="paragrapheGlobal">
            La même situation concerne les personnes anorexiques dont l’IMC est
            inférieur à la normale. Pour trouver une tarification intéressante
            pour une personne souffrant d’obésité ou d’autres risques aggravés
            de santé, le mieux est de se faire accompagner par un courtier en
            produits d’assurance. Il saura trouver l’offre d’assurance prêt
            obese idéale.
          </p>
          
        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogObesite;
