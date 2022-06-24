import BtnGo from "../../../components/btnGo";
import Sommaire from "../../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../../components/FullArticle";

function BlogAideFinanciere() {
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
          Aides financières
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Aides financières"}
          text1={" : qui peut en bénéficier? "}
          href1={"#aide-intro"}
          title2={"Condition"}
          text2={" : suis-je éligible ?"}
          href2={"#aide-eligible"}
          title3={"Le P.A.S et les Banque"}
          text3={" : c'est quoi exactement ? "}
          href3={"#aide-pas"}

        />

        <FullArticle
          title={"L’aide à l’achat d’une résidence principale"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-aide-financiere.jpg"}
          alt={""}
        >
          <h5 id="aide-intro" className="h5Global">Pret Accession Sociale (PAS)</h5>
          <p className="paragrapheGlobal">
            Le Pret Accession Sociale (PAS) permet aux acheteurs d’une résidence
            principale qui répondent à certains critères de bénéficier d’un
            financement intéressant. Ce prêt comporte de nombreux avantages et
            notamment la possibilité de bénéficier des aides au logement, de
            frais de dossiers limités et de taux intéressants.
          </p>

          <h5 id="aide-eligible" className="h5Global">PAS / Conditions</h5>
          <h6 className="h6Global">
            Les conditions pour bénéficier du PAS sont les suivantes :
          </h6>
          <p className="paragrapheGlobal">
            Il faut tout d’abord avoir la nationalité française ou être
            titulaire d’un titre de séjour. Il faut, ensuite, avoir des revenus
            inférieurs à certains montants. Il y a un tableau avec les plafonds
            en fonction du nombre de personnes qui composent le foyer et en
            fonction de la zone géographique dans laquelle se situe le logement.
          </p>
          <p className="paragrapheGlobal">
            Enfin, pour être bénéficiaire du PAS, il faut financer son logement
            principal et y résider de façon permanente. Il peut aussi s’agit de
            celui de son conjoint ou de ses enfants ou celle de ses parents. Le
            logement devra alors être habité au minimum 8 mois par an pendant le
            remboursement du Pret Accession Sociale.
          </p>
          <h5 id="aide-pas" className="h5Global">PAS / Banque</h5>

          <p className="paragrapheGlobal">
            Ensuite, la banque étudie la demande sur les même critères que ceux
            d’une demande de prêt immobilier classique. Le PAS est accordé pour
            une durée de 5 à 30 ans et pour un montant minimum de 4500 euros. Il
            peut également financer la totalité du prix de l’acquisition
            immobilière.
          </p>
          <p className="paragrapheGlobal">
            Les établissements financiers fixent les taux du PAS mais ils ne
            doivent pas dépasser un taux maximal. Ce prêt permet de facilité
            l’acquisition de logements et la construction de nouveaux logements
            comme résidence principale.
          </p>
        </FullArticle>
      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>
    </div>
  );
}

export default BlogAideFinanciere;
