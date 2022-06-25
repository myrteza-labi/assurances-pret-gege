import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogDelguation() {
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
          Délégation assurance prêt
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Déléguation"}
          text1={" : comment ça fonctionne?"}
          href1={"#dele-intro"}
          title2={"Avantage de la délaguation"}
          text2={" : quel en sont les intêrets?"}
          href2={"#dele-interet"}
        />
      
      <FullArticle
          title={"Délégation assurance pret moins chère"}
          h6={"Tout s'avoir sur l'assurance prêt individuelle"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-cout.jpg"}
          alt={""}
        >
          <h3 id="dele-intro" className="h5Global">
            Profiter d&#39;une totale liberté de choisir avec la délégation
            assurance pret
          </h3>
          <p className="paragrapheGlobal">
            La délégation assurance prêt consiste à choisir une offre
            d&#39;assurance de prêt moins chère, mais tout aussi performante que
            celle proposée par l&#39;organisme de crédit. Grâce à cette alternative,
            il est possible de réaliser jusqu&#39;à 30 % à 50 % d&#39;économies sur le
            prix de l&#39;assurance et réduire dans la foulée le coût du crédit
            immobilier souscrit.
          </p>
          <p className="paragrapheGlobal">
            Depuis la mise en application de la loi Lagarde, les banques doivent
            accepter une délégation assurance emprunteur si les garanties qui y
            figurent sont équivalentes à celles qu&#39;elles exigent. Tout refus
            doit ainsi faire l&#39;objet d&#39;une justification claire.
          </p>
          <p className="paragrapheGlobal">
            Il appartient également à chaque institution d&#39;informer leurs
            clients de la possibilité de recourir à une délégation assurance
            prêt et de décliner l&#39;offre d&#39;assurance groupe qui accompagne
            initialement le crédit. L&#39;examen de l&#39;assurance emprunteur choisi ne
            doit faire l&#39;objet d&#39;aucune facturation et l&#39;acceptation ou le refus
            doit être formulé dans un délai de 10 jours.
          </p>
          <h3 id="dele-interet" className="h5Global">
            Quels sont les intérêts d&#39;une délégation assurance crédit ?
          </h3>
          <p className="paragrapheGlobal">
            Une délégation d&#39;assurance crédit permet avant tout de souscrire une
            assurance à un tarif compétitif et de bénéficier de garanties sur
            mesure. En effet, l&#39;offre de groupe de la banque est généralement
            une garantie collective qui ne prend pas forcément en compte le cas
            de chaque emprunteur. Faire jouer la concurrence et s&#39;adresser à une
            autre compagnie facilite donc la souscription d&#39;une assurance de
            prêt en totale harmonie avec ses besoins, et ce, à moindre coût.
          </p>
        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogDelguation;
