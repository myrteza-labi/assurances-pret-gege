import BtnGo from "../../../components/btnGo";
import Sommaire from "../../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../../components/FullArticle";

function BlogGaranties() {
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
          Garantie assurance prêt
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Assurance prêt"}
          text1={" : c'est quoi exactement"}
          href1={"#garanties-intro"}
          title2={"Loi Lagarde"}
          text2={" : que garantie t-elle?"}
          href2={"#garanties-lagarde"}
          title3={"Comment payer moins ?"}
          text3={" : faite jouer la concurence"}
          href3={"#garanties-concurence"}
        />

        <FullArticle
          title={"Comment garantir son crédit immobilier ?"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-garanties.jpg"}
          alt={""}
        >
          <h3 id="garanties-intro" className="h5Global">Qu&#39;est-ce qu&#39;une assurance prêt ?</h3>
          <p className="paragrapheGlobal">
            De nombreux établissements bancaires n&#39;accordent pas de crédits
            immobiliers si le candidat à l&#39;emprunt ne souscrit pas d&#39;assurance
            emprunteur. Voici ce que vous devez savoir pour garantir son crédit.
          </p>
          <p id="garanties-lagarde" className="paragrapheGlobal">
            Lorsque l&#39;on souscrit un crédit immobilier, on s&#39;engage sur une
            longue durée de remboursement, et les risques de ne pas être en
            mesure de payer ses mensualités de crédit immobilier sont nombreux.
            De ce fait, les banques demandent le plus souvent aux emprunteurs de
            souscrire une assurance de prêt. Celle-ci permet de couvrir les
            mensualités du crédit en cas incapacité de travail ou de décès à la
            suite d&#39;un accident ou d&#39;une maladie.
          </p>
          <h3 className="h5Global">
            Garantir son crédit en profitant de la Loi Lagarde en délégation
            d&#39;assurance
          </h3>

          <p className="paragrapheGlobal">
            Auparavant, seules les banques prêteuses proposaient une assurance
            de prêt. Aujourd&#39;hui, avec la loi Lagarde, il est possible de
            souscrire cette assurance de prêt auprès de la compagnie d&#39;assurance
            de votre choix. Il s&#39;agit alors d&#39;une « délégation d&#39;assurance ».
          </p>
          <p id="garanties-concurence" className="paragrapheGlobal">
            L&#39;établissement prêteur est légalement dans l&#39;obligation d&#39;accepter
            une délégation d&#39;assurance dès lors que les garanties du contrat
            externalisé sont au moins équivalentes à celles du contrat
            d&#39;assurance pret qu&#39;il propose initialement à l&#39;emprunteur. La loi
            Lagarde donne aussi la possibilité aux emprunteurs de changer
            d&#39;assurance prêt en cours de remboursement du crédit immobilier.
          </p>
          <h3 className="h5Global">
            Faites jouer la concurrence entre les assureurs
          </h3>

          <p className="paragrapheGlobal">
            Comparez les différentes offres d&#39;assurance prêt à l&#39;aide d&#39;un
            comparateur assurances pret pas chères.
          </p>

        </FullArticle>
      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>
    </div>
  );
}

export default BlogGaranties;
