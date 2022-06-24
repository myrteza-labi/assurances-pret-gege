import BtnGo from "../../components/btnGo";
import Sommaire from "../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../components/FullArticle";

function BlogConseil() {
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
          Conseil en assurance prêt
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Trouver la meilleur assurance"}
          text1={" : les conseils de nos experts"}
          href1={"#conseil-expert"}
          title2={"Assurance emprunteur"}
          text2={" : tout ce qu'il faut savoir"}
          href2={"#conseil-emprunteur"}
        />
      
      <FullArticle
          title={"Assurance emprunteur : infos et conseils"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurances-pret-courtier-blog.jpg"}
          alt={""}
        >
          <h5 id="conseil-expert" className="h5Global">Infos concernant l’assurance emprunteur </h5>
          <p className="paragrapheGlobal">
            Les prêts bancaires sont un excellent moyen pour pouvoir s’acheter
            une maison ou une voiture dans l’immédiat ou pour financer des
            projets professionnels. Mais pour éviter les éventuels risques et
            problèmes concernant le remboursement, il est préférable de
            souscrire un contrat.
          </p>
          <p className="paragrapheGlobal">
            L’assurance emprunteur désigne une forme d’assurance qui permet de
            souscrire à un crédit en toute tranquillité. Son but principal est
            de couvrir l’emprunteur dans le cas ou celui-ci est incapable de
            rembourser son emprunt suite à une incapacité de travail ou en cas
            de mort soudaine ou de graves problèmes de santé.
          </p>
          <p id="conseil-emprunteur" className="paragrapheGlobal">
            Il dure généralement tout au long du crédit. Tous les mois, l’assuré
            verse des petites mensualités à son assureur qui serviront ensuite à
            rembourser le prêt contracté auprès de la banque en cas de problèmes
            de santé grave, de chômage ou de décès de l’emprunteur.
          </p>
          <h5 className="h5Global">
            Conseils pour bénéficier d’une bonne assurance emprunteur{" "}
          </h5>
          <p className="paragrapheGlobal">
            Pour profiter de la meilleure assurance emprunteur, il est
            préférable de souscrire le contrat d’assurance auprès d’un assureur
            fiable et de qualité. Il est également conseillé d’opter pour le
            taux d’assurance de pret le plus bas, sans oublier de prendre les
            garanties nécessaires, car il faut veiller à ce que l’assurance
            couvre 100 % du prêt. Le mieux est d’analyser les offres en fonction
            de la situation et opter pour un contrat présentant les meilleures
            options et rapport qualité-prix.
          </p>
          <p className="paragrapheGlobal">
            Il est également possible de consulter un comparateur de garantie
            pour emprunteur ou de demander un devis auprès des compagnies
            d’assurance, telles que la compagnie AXA, pour pouvoir trouver
            l’assurance la mieux adaptée à ses besoins.
          </p>
        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default BlogConseil;
