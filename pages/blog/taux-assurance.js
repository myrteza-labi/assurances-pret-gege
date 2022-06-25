import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogTaux() {
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
          Taux assurance crédit
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
          title={"Comment définir le taux assurance crédit ?"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-taux.jpg"}
          alt={""}
        >
          <h3 className="h5Global">Quid du taux assurance crédit ?</h3>
          <p className="paragrapheGlobal">
            Un crédit immobilier doit toujours être assorti d&#39;une assurance de
            prêt. Depuis qu&#39;il est possible de procéder à une délégation
            d&#39;assurance, l&#39;emprunteur est de plus en plus attentif aux taux
            appliqués. Une comparaison du taux assurance crédit permet, en
            effet, de faire le meilleur choix et de bénéficier d&#39;une offre
            avantageuse.
          </p>
          <p className="paragrapheGlobal">
            Le taux d&#39;assurance prêt représente le coût annuel de la garantie
            que la compagnie accepte de fournir en cas d&#39;invalidité ou de décès.
            La méthode de calcul classique des garanties emprunteurs se base sur
            le taux d&#39;assurance correspondant au montant initial du prêt
            immobilier. En toute logique, plus la somme empruntée est élevée et
            plus l&#39;assurance de prêt sera onéreuse.
          </p>
          <p className="paragrapheGlobal">
            Le taux de l&#39;assurance est également évalué suivant l&#39;âge et l&#39;état
            de santé de l&#39;assuré. Il peut prendre en compte la profession et le
            capital restant dû chaque année.
            <br />
            - Simulation du taux
            <br />
            - Comparatif en ligne
            <br />
            - Evaluer les garanties
            <br />
          </p>
          <h3 className="h5Global">Calcul du taux d&#39;assurance emprunteur </h3>
          <p className="paragrapheGlobal">
            Le taux assurance credit détermine le prix à l&#39;année de l&#39;assurance
            de crédit. Selon votre situation, l&#39;assureur peut ajouter des
            surprimes s&#39;il y a des risques aggravés. Un taux de 0.4 % signifie
            que le coût annuel de votre assurance pour un crédit de 100 000 €
            sur 20 ans serait de 400 €. Une simulation aurait permis de trouver
            un taux de 0.2 % pour un client non-fumeur âgé de 30 ans, ce qui
            aurait réduit de moitié le coût de la police. D&#39;où l&#39;intérêt de
            faire appel à l&#39;aide d&#39;un courtier spécialisé en assurance.
          </p>
        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogTaux;
