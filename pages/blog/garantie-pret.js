import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

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
          Assurance prêt garanties
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Garanties"}
          text1={" : les-quelles sont indispensable? "}
          href1={"#garanties-introduction"}
          title2={"Incapacite de travail"}
          text2={" : une garantie primordiale"}
          href2={"#garantie-incapacite"}
          title3={"Invaladité"}
          text3={" : ce qu'elle couvre"}
          href3={"#garantie-invalidite"}
        />
      
      <FullArticle
          title={
            "Une garantie de prêt immobilier pour investir en toute sérénité"
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-blog-investissement.jpg"}
          alt={""}
        >
          <h3 id="garanties-introduction" className="h5Global">
            Profiter d&#39;une totale liberté de choisir avec la délégation
            assurance pret
          </h3>
          <p className="paragrapheGlobal">
            Une garantie de prêt est indispensable pour obtenir un financement
            pour l&#39;acquisition d&#39;un bien immobilier. Après avoir étudié le
            dossier de demande de prêt, la banque fera une offre préalable à
            l&#39;emprunteur dont la validité est de 30 jours.
          </p>
          <p id="garantie-incapacite" className="paragrapheGlobal">
            Pendant ce délai, l&#39;emprunteur a la possibilité de rechercher
            ailleurs une garantie de crédit moins chère, mais offrant les mêmes
            couvertures que celle proposée par la banque.
          </p>
          <h3 className="h5Global">
            L&#39;incapacité de travail en garantie de prêt{" "}
          </h3>
          <p className="paragrapheGlobal">
            Si vous êtes en situation d&#39;incapacité de travail, l&#39;assureur
            procédera au remboursement de votre prêt. Toutefois, une clause du
            contrat fixe la quotité assurée ainsi que la franchise qui peut être
            de 30, 60 ou 90 jours selon les cas. Les remboursements couvrent
            normalement 100 % du montant du versement mensuel.
          </p>
          <p id="garantie-invalidite" className="paragrapheGlobal">
            Dès la signature du contrat, l&#39;assuré doit bien vérifier ce
            pourcentage de garantie ainsi que le concept d&#39;« incapacité de
            travail » évoqué dans la garantie de pret, afin de ne pas se laisser
            surprendre en cas de sinistre.{" "}
          </p>
          <h3 className="h5Global">L&#39;invalidité dans une garantie prêt</h3>
          <p className="paragrapheGlobal">
            La prise en charge de la compagnie d&#39;assurance sera en fonction du
            taux d&#39;invalidité prédéfini dans le contrat. Dans la pratique :
          </p>
          <p className="paragrapheGlobal">
            - <br />
            un taux d&#39;invalidité supérieur à 66 % ouvre droit à un remboursement
            intégral de l&#39;échéance
            <br />
            - <br />
            entre 33 % et 66 %, le remboursement se fera en fonction d&#39;un
            coefficient de proportionnalité.
            <br />
            - <br />
            pour une invalidité en dessous de 33 %, aucune couverture ne sera
            activée.
            <br />
          </p>
          <p className="paragrapheGlobal">
            En principe, la garantie de prêt en cas de chômage est optionnelle,
            à charge donc pour l&#39;emprunteur de choisir celle qui lui permettra
            de faire le maximum d&#39;économies.
          </p>

        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogGaranties;
