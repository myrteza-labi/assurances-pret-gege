import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogDelguation() {
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
          title={"Délégation assurance pret moins chère"}
          h6={"Tout s'avoir sur l'assurance prêt individuelle"}
          description={
            <p className="paragrapheGlobal-v3">
              La délégation assurance prêt consiste à choisir une offre
              d’assurance de prêt moins chère...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-cout.jpg"}
          alt={""}
        >
          <h5 className="h5Global">
            Profiter d’une totale liberté de choisir avec la délégation
            assurance pret
          </h5>
          <p className="paragrapheGlobal">
            La délégation assurance prêt consiste à choisir une offre
            d’assurance de prêt moins chère, mais tout aussi performante que
            celle proposée par l’organisme de crédit. Grâce à cette alternative,
            il est possible de réaliser jusqu’à 30 % à 50 % d’économies sur le
            prix de l’assurance et réduire dans la foulée le coût du crédit
            immobilier souscrit.
          </p>
          <p className="paragrapheGlobal">
            Depuis la mise en application de la loi Lagarde, les banques doivent
            accepter une délégation assurance emprunteur si les garanties qui y
            figurent sont équivalentes à celles qu’elles exigent. Tout refus
            doit ainsi faire l’objet d’une justification claire.
          </p>
          <p className="paragrapheGlobal">
            Il appartient également à chaque institution d’informer leurs
            clients de la possibilité de recourir à une délégation assurance
            prêt et de décliner l’offre d’assurance groupe qui accompagne
            initialement le crédit. L’examen de l’assurance emprunteur choisi ne
            doit faire l’objet d’aucune facturation et l’acceptation ou le refus
            doit être formulé dans un délai de 10 jours.
          </p>
          <h5 className="h5Global">
            Quels sont les intérêts d’une délégation assurance crédit ?
          </h5>
          <p className="paragrapheGlobal">
            Une délégation d’assurance crédit permet avant tout de souscrire une
            assurance à un tarif compétitif et de bénéficier de garanties sur
            mesure. En effet, l’offre de groupe de la banque est généralement
            une garantie collective qui ne prend pas forcément en compte le cas
            de chaque emprunteur. Faire jouer la concurrence et s’adresser à une
            autre compagnie facilite donc la souscription d’une assurance de
            prêt en totale harmonie avec ses besoins, et ce, à moindre coût.
          </p>
        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogDelguation;
