import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogResiliation() {
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
          Résiliation assurance prêt
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Résiliation"}
          text1={" : introduction"}
          href1={"#resilitation-introduction"}
          title2={"Comment résilier"}
          text2={" : infos et conseils"}
          href2={"#resilitation-comment"}
          title3={"Loi Hamon"}
          text3={" : comment vous protège-elle?"}
          href3={"#resiliation-hamon"}
        />
      
      <FullArticle
          title={"La résiliation assurance prêt immobilier est-elle possible ?"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-resiliation.jpg"}
          alt={""}
        >
          <h5 id="resilitation-introduction" className="h5Global">
            À quel moment demander la résiliation assurance prêt ?
          </h5>
          <p className="paragrapheGlobal">
            Sous peine de nullité, votre contrat d’assurance de prêt immobilier
            doit contenir le taux de l’assurance, le questionnaire de santé et
            les modalités de résiliation assurance prêt. Il est, en effet,
            possible de résilier un contrat en cours, mais il faut bien du
            courage pour y arriver.
          </p>
          <p id="resilitation-comment" className="paragrapheGlobal">
            L’assuré a la possibilité de demander la résiliation assurance
            emprunteur soit :
            <br />
            - Au terme du contrat : le remboursement total entraîne une
            résiliation automatique.
            <br />- En cours de réalisation du contrat : la résiliation est
            possible, mais à condition que la banque soit d’accord et que le
            motif est stipulé dans le contrat.
          </p>

          <h5 className="h5Global">
            Comment faire aboutir une résiliation assurance crédit ?{" "}
          </h5>
          <p id="resiliation-hamon" className="paragrapheGlobal">
            Quand le prêt est remboursé dans son intégralité, c’est l’assureur
            qui vous préviendra de la fin du contrat. Dans le cas d’un
            remboursement anticipé, vous devez en fournir la preuve à votre
            compagnie d’assurance. Le document émanant de la banque doit
            comporter le numéro de dossier, les coordonnées de l’emprunteur et
            de la banque et la date à laquelle l’emprunt a été résilié. Pour une
            résiliation assurance prêt pendant le contrat, l’emprunteur doit
            respecter certaines règles. En principe, le contrat peut être
            résilié par lettre recommandée avec accusé de réception à sa date
            anniversaire en tenant compte du délai de préavis requis. Il
            convient d’être attentif dès le départ, à toutes les conditions
            stipulées dans le contrat d’assurance en ce qui concerne les motifs
            possibles de résiliation du contrat.
          </p>
          <h5  className="h5Global">
            La loi Hamon : un délai d’un an pour résilier une assurance de prêt{" "}
          </h5>
          <p className="paragrapheGlobal">
            La loi Hamon autorise les emprunteurs à recourir à la résiliation
            assurance emprunteur dans un délai d’un an s’ils trouvent une offre
            plus avantageuse. Cette possibilité leur permet de se concentrer
            totalement sur le choix du crédit immobilier dans un premier temps,
            et de changer par la suite de garantie emprunteur si celle qui a été
            souscrite n’est pas satisfaisante.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogResiliation;
