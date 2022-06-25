import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogChangerAssurance() {
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
          Changer d&#39; assurance prêt
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Assurance prêt"}
          text1={" : peut on la changer ? "}
          href1={"#change-itnro"}
          title2={"Procédure à suivre"}
          text2={" : quelles sont les démarches à éfféctuer?"}
          href2={"#change-demarche"}

        />
      
      <FullArticle
          title={"Changer d&#39;assurance crédit en cours de remboursement"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-changer.jpg"}
          alt={""}
        >
          <h3 id="change-itnro"className="h5Global">
            Changer assurance prêt : une opération facile avec le bon courtier{" "}
          </h3>
          <p className="paragrapheGlobal">
            Dans le cadre d&#39;un prêt immobilier, vous avez dû souscrire une
            assurance de prêt. Cependant, il se peut qu&#39;en cours de réalisation
            du contrat, vous trouviez une offre plus intéressante ou que votre
            police ne vous convienne plus. Il s&#39;avère donc préférable de changer
            assurance prêt.
          </p>

          <p className="paragrapheGlobal">
            À l&#39;instar de tous les contrats, l&#39;assurance prêt est un accord
            auquel l&#39;assuré peut mettre fin à sa date anniversaire sauf
            stipulation contraire. Si vous avez choisi une nouvelle garantie
            emprunteur, pensez à résilier la précédente police en respectant un
            préavis de trois mois. Les termes de la nouvelle police doivent être
            acceptés par la banque. Dans la pratique, l&#39;établissement bancaire
            vérifie si les conditions de garantie sont équivalentes aux siennes.
          </p>
          <h3 id="change-demarche" className="h5Global">
            La procédure à suivre pour changer assurance prêt
          </h3>
          <p className="paragrapheGlobal">
            Pour changer assurance prêt, l&#39;assuré doit au préalable trouver une
            nouvelle assurance et en fournir la délégation à sa banque. Il faut
            envoyer une lettre de résiliation et fournir une attestation de
            levée de clause bénéficiaire afin que le contrat initial cesse de
            prendre effet. La résiliation de certaines polices ne peut
            s&#39;effectuer qu&#39;au 1er janvier, donc veillez à bien vérifier la date
            d&#39;échéance de votre contrat avant de changer assurance crédit.
          </p>
          <p className="paragrapheGlobal">
            Il faut également savoir que grâce à la loi Hamon, l&#39;emprunteur va
            pouvoir disposer d&#39;un an pour changer d&#39;assurance emprunteur et
            migrer vers une offre moins chère.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogChangerAssurance;
