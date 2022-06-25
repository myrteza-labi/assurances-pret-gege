import BtnGo from "../components/btnGo";
import SimpleTextBox from "../components/SimpleTextBox";
import SimpleInfoBox from "../components/SimpleInfoBox";
import Link from "next/link";

function Cout() {
  return (
    <div className="Cout">
      <div className="headerCout ">
        <div className="headerCoutImageContainer">
          <div className="ImageEuro"></div>
          <div className="ImageCout"></div>
          <div className="ImageEclat"></div>
        </div>
      </div>
      <div className="firstSectionCout">
        <h1 className="h1GlobalNew">Calcul du coût assurance prêt gratuit</h1>
        <div className="paragrapheCheckedContainer">
          <span className="material-symbols-outlined iconCheck">done</span>
          <p className="paragrapheChecked">
            Comparez gratuitement et rapidement des devis d&#39;assurance prêt
          </p>
        </div>
      </div>
      <Link href="/devis">
        <a>
          <BtnGo btnText={"Obtenir un devis précis"} />
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <div className="enSavoirPlusCtn">
            <p className="enSavoirPlus">Étre contacté par un conseiller </p>
            <span className="material-symbols-outlined orange-arrow">
              trending_flat
            </span>
          </div>
        </a>
      </Link>

      <div className="secondSectionGaranties">
        <h2 className="h4Global">Coût assurance pret des garanties</h2>

        <p className="paragrapheGlobal">
          Défiscalisation, investissement locatif, réduction d&#39;impôts variable
          en fonction de la durée... vous êtes perdu dans le champs lexical de
          la loi Pinel ? En réalité, c&#39;est assez simple. Il s&#39;agit d&#39;investir
          dans l&#39;immobilier, d&#39;acheter pour louer plus précisément. Dans quel
          but ? Faire baisser ses impôts. Ce n&#39;est toujours pas plus clair ? Pas
          de problème, suivez le guide pour tout connaître sur la loi Pinel !
        </p>
        <h3 className="h4Global">Comment sont calculés les coûts?</h3>
        <SimpleTextBox>
          Les coût sont calculés selon le montant du prêt à assurer, la durée de
          celui-ci ainsi que votre profile. Selon les banques, d&#39;autres facteurs
          peuvent être pris en compte.
        </SimpleTextBox>

        <h3 className="h4Global">Coût assurance pret des garanties</h3>

        <p className="paragrapheGlobal">
          Une assurance de prêt est constituée de garanties de base et de
          garanties optionnelles. Comme les garanties décès-invalidité, la
          garantie de Perte Totale et Irréversible d&#39;Autonomie PTIA est une
          garantie de base qui permet le remboursement du capital restant dû de
          votre crédit par l&#39;assureur. Les garanties optionnelles d&#39;une
          assurance de prêt sont l&#39;Incapacité Temporaire Totale ITT,
          l&#39;Invalidité Permanente Totale IP et l&#39;Invalidité Permanente partielle
          IPP.
        </p>

        <h3 className="h5Global">Comment sont calculées les cotisations ? </h3>
        <SimpleTextBox>
          Il existe deux modes de calcul : <br />
          - calcul sur la base du capital emprunté
          <br />- calcul sur le capital restant dû
        </SimpleTextBox>
        <h3 className="h6Global">
          Calcul du coût assurance pret sur la base du capital emprunté
        </h3>
        <p className="paragrapheGlobal">
          Les primes mensuelles sont fixes pendant toute la durée de
          remboursement de votre crédit. Et le pourcentage des cotisations
          varient entre 0,15% et 0,55% du montant du crédit. Ce type de calcul
          est généralement utilisé pour l&#39;assurance groupe collective.
        </p>

        <h3 className="h6Global">
          Calcul du coût assurance pret sur le capital restant dû
        </h3>
        <p className="paragrapheGlobal">
          Les cotisations mensuelles diminuent peu à peu en proportion du
          montant de votre capital restant dû. Ces cotisations sont calculées
          mensuellement selon un pourcentage du capital restant dû. Ce type de
          calcul est avantageux sur le long terme, mais si vous ne pensez pas
          conserver le crédit ce n&#39;est pas forcément la meilleure solution.{" "}
        </p>

        <SimpleInfoBox>
          À noter que des plafonds liés au taux d&#39;intéréts sont fixés par l&#39;état
          pour empecher certaine banque d&#39;attribuer des prêt à coût trop
          important.
        </SimpleInfoBox>

        <h4 className="h4Global">Quel type d&#39;assurance choisir ?</h4>

        <p className="paragrapheGlobal">
          Il vous est possible de souscrire soit l&#39;assurance collective de votre
          banque soit {" "} 
          <Link href="/blog/assurance-emprunt-immobilier/">
            <a className="linkInText">
               une assurance individuelle de l&#39;assureur de votre choix.
            </a>
          </Link>
          {" "}Le taux de cotisation d&#39;une assurance individuelle est évalué selon
          votre âge, état de santé, profession… Ainsi, un jeune en bonne santé
          avec un emploi stable bénéficie d&#39;un taux de cotisation amoindri et
          donc d&#39;une assurance de prêt moins chère que pour d&#39;autres profils.
          L&#39;assurance collective proposée par la banque prêteuse présente un
          taux de cotisation unique sans tenir compte des facteurs individuels
          de l&#39;emprunteur. Selon votre profil, vous avez donc tout intérêt à
          opter plutôt pour une assurance individuelle afin de payer moins cher.
        </p>
      </div>
      <div className="gegeBottom coutGegeBottom"></div>
    </div>
  );
}

export default Cout;
