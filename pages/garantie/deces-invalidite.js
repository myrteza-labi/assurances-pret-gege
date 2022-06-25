import SimpleTextBox from "../../components/SimpleTextBox";
import Link from "next/link";

function Deces() {
  return (
    <div className="Comparatif">
      <div className="firstSection firstSectionComparatif">
        <h1 className="h1Global">
          L&#39;assurance déces-invalidité vous protège ainsi que vos proche{" "}
        </h1>
        <h2 className="h3Global">
          Garantissez-vous un prêt serein et réduisez vos dépenses en quelques
          clics
        </h2>

        <div className="imgFirstContainer">
          <div className="gegeImgFirst gegeImgFirstDeces"></div>
        </div>
      </div>

      <div className="secondSectionGaranties">
        <h3 className="h2Global">Comparatif assurance prêt décès-invalidité</h3>
        <p className="paragrapheGlobal">
          Focus sur l&#39;assurance décès-invalidité, généralement liée à
          l&#39;assurance décès, la garantie invalidité permet de couvrir les
          personnes qui se retrouvent dans l&#39;incapacité d&#39;exercer temporairement
          ou définitivement leur travail faisant suite à un accident … Les
          indemnités d&#39;une assurance invalidité sont calculées en pourcentage du
          revenu de l&#39;assuré.
        </p>

        <h4 className="h6Global">
          Pourquoi souscrire une garantie décès invalidité ?
        </h4>

        <SimpleTextBox>
          Cette garantie est obligatoire et elle est exigée par l&#39;établissement
          de pret afin de débloquer les fonds, sans cette garantie il est très
          rare voire impossible de se voir accorder un pret immobilier.
        </SimpleTextBox>
        <h4 className="h4Global">
          Qui peut souscrire l&#39;assurance invalidité ?
        </h4>
        <p className="paragrapheGlobal">
          L&#39;assurance invalidité peut être souscrite par toute personne qui
          souscrit une assurance de prêt, plus particulièrement l&#39;assurance
          décès à laquelle elle est systématiquement rattachée.
        </p>
        <p className="paragrapheGlobal">
          L&#39;assurance invalidité se déclenche si vous devenez invalide durant le
          cours du remboursement de votre prêt, à la suite d&#39;un accident, et que
          vous êtes alors dans l&#39;incapacité de travailler.
        </p>
        <SimpleTextBox>
          L&#39;invalidité se définit comme étant une incapacité d&#39;une personne à
          accomplir les tâches du travail qu&#39;elle exerce habituellement. A la
          suite d&#39;une invalidité, celle-ci peut rencontrer certaines difficultés
          financières car ses revenus diminuent du fait qu&#39;elle ne travaille
          plus.
        </SimpleTextBox>

        <h4 className="h4Global">
          Quand bénéficie-t-on de l&#39;assurance invalidité ?
        </h4>
        <p className="paragrapheGlobal">
          L&#39;assurance décès-invalidité permet de compenser la baisse de revenus
          grâce à un versement d&#39;indemnités par l&#39;assureur calculées selon
          certains paramètres. L&#39;assurance invalidité se déclenche en cas
          d&#39;invalidité causée par un accident.
        </p>

        <p className="paragrapheGlobal">
          En résumé, pour avoir une{" "}
          <Link href="/">
            <a className="linkInText"> assurance de prêt </a>
          </Link>{" "}
          qui vous protège vous ainsi que votre famille en cas de décès ou
          d&#39;invalidité, il vous faut souscrire à un contrat qui dispose de cette
          garantie.
          <br />
          Nos conseiller son là pour vous proposer les meilleur offres et vous
          faire économiser sur vos dépenses tout en préservant les meilleurs
          garanties cas de décès ou
          d&#39;invalidité.
        </p>
      </div>
    </div>
  );
}

export default Deces;
