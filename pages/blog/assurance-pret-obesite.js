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
          title1={"Assurance et obésité"}
          text1={" : ce qu'il faut savoir"}
          href1={"#obesite-intro"}
          title2={"Surpoids ou surcoût"}
          text2={" : qu'en est-il reélement"}
          href2={"#obesite-surcout"}
        />
      
      <FullArticle
          title={
            "Trouver une assurance avec risque de santé aggravé liée au poids"
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-obesite.jpg"}
          alt={""}
        >
          <h5 id="obesite-intro" className="h5Global">L’assurance prêt obésité</h5>
          <p className="paragrapheGlobal">
            La détermination du coût d’une assurance emprunteur dépend de
            critères personnalisés très précis. Certaines catégories
            d’emprunteurs ont du mal à s’assurer, car elles sont sujettes à des
            problèmes de santé qui ne rassurent pas toujours les assureurs.
            Trouver une assurance prêt obésité peut ainsi être difficile sans
            l’aide d’un courtier spécialisé.
          </p>
          <p id="obesite-surcout" className="paragrapheGlobal">
            La convention AERAS ou s’Assurer et Emprunter avec un Risque Aggravé
            de Santé vise à favoriser les personnes ayant des difficultés à
            trouver une assurance. Les personnes en surcharge pondérale font
            partie des cas présentant des « risques aggravés de santé ». De ce
            fait, ils peuvent accéder à une assurance prêt obésité mais les
            conditions proposées risquent de ne pas être assez avantageuses.
          </p>
          <h5 className="h5Global">
            Le surpoid : un facteur déterminant{" "}
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
