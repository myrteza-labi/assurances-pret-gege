import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogEmprunt() {
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
          Assurance prêt immobilier
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Comparateur"}
          text1={" : un outil indispensable"}
          href1={"#comparateur"}
          title2={"Loi Lagarde"}
          text2={" : votre emprunt immobilier protégé"}
          href2={"#lagarde"}
          title3={"Prêt immobilier"}
          text3={" : comment obtenir les meilleurs prix"}
          href3={"#pret"}
        />
      
      <FullArticle
          title={
            "Comment trouver une assurance emprunt immobilier avantageuse ?"
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-immobilier.jpg"}
          alt={""}
        >
          <h5 className="h5Global">Choisir son assurance emprunt immobilier</h5>
          <p className="paragrapheGlobal">
            Disposer d’un prêt immobilier assurance est une condition sine qua
            non à l’octroi d’un crédit immobilier. L’établissement bancaire
            exige une entité qui se substituera au débiteur en cas de
            défaillance de celui-ci.
          </p>
          <p id="lagarde" className="paragrapheGlobal">
            Une assurance emprunt immobilier protège la famille et les biens de
            l’emprunteur puisque en cas d’invalidité, de chômage ou de décès, la
            compagnie d’assurance procédera au remboursement du capital restant
            dû. Il faut noter que l’emprunt immobilier assurance n’est pas une
            obligation légale, mais une contrainte imposée par les organismes
            prêteurs.
          </p>
          <h5 className="h5Global">
            Emprunt immobilier assurance : la révolution Lagarde{" "}
          </h5>
          <p className="paragrapheGlobal">
            Dès la présentation de l’offre, la loi Lagarde, depuis sa réforme,
            exige que la banque vous informe sur votre droit de souscrire une
            assurance emprunt immobilier auprès de l’assureur de votre choix.
            Désormais, dès que vous aurez trouvé une offre qui propose les mêmes
            couvertures que celles de la banque, vous pouvez déléguer votre
            assurance de prêt. La loi exige une réponse sous 10 jours ainsi
            qu’une explication en cas de refus par l’établissement bancaire. Ce
            dispositif sanctionne également certains abus telles une
            modification du taux d’emprunt ou une facturation des services liés
            à la délégation de l’emprunt immobilier assurance.
          </p>
          <h5 id="pret" className="h5Global">
            Comment trouver un prêt immobilier assurance compétitive ?{" "}
          </h5>
          <p className="paragrapheGlobal">
            Pour trouver une assurance prêt immobilier moins chère, il convient
            de se baser sur des critères identiques comme le tarif, les
            garanties proposées et la solidité financière de la compagnie
            d’assurances. Afin de trouver sans peine une assurance de prêt
            adaptée à votre situation, il serait plus judicieux de faire appel
            au service d’un courtier spécialisé.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogEmprunt;
