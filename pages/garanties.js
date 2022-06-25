import React from "react";
import BtnGo from "../components/btnGo";
import Sommaire from "../components/sommaire";
import SimpleTextBox from "../components/simpleTextBox";
import SimpleInfoBox from "../components/simpleInfoBox";
import Link from "next/link";
import MascotteBox from "../components/mascotteBox";

function Garanties() {
  return (
    <div className="garanties">
      <div className="firstSection firstSectionGaranties">
        <h1 className="h1Global">Comparez et économisez sur vos factures </h1>
        <h2 className="h3Global">
          Assurances prêt, immobilier, comment réduire ses dépenses avec Assuréa
          ?
        </h2>

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
        <h3 id="generalite" className="h2Global">Les garanties assurance pret d&#39;un contrat</h3>

        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Garanties"}
          text1={" : généralité"}
          href1={"#generalite"}
          title2={"Assurance prêt"}
          text2={" : c'est quoi exactement"}
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
        />

        <h4 className="h4Global">
          Les garanties contenues dans un contrat d&#39;assurance prêt
        </h4>
        <p id="assurancepret" className="paragrapheGlobal">
          Pour faire simple, nous venons de le voir, la loi Pinel 2022 est un
          dispositif qui vous permet de réduire vos impôts lorsque vous
          investissez dans l&#39;immobilier locatif. Son objectif est notamment
          d&#39;étoffer le nombre de logements neufs dans les grandes villes afin de
          combler le manque d&#39;habitations disponibles.
        </p>
        <h5  className="h5Global">L&#39;assurance de prêt : c&#39;est quoi ?</h5>
        <p className="paragrapheGlobal">
          Une assurance de prêt constitue un moyen de prémunir les banques et
          organismes de crédit contre les risques d&#39;incapacité de remboursement
          de l&#39;emprunteur à la suite d&#39;un décès, d&#39;une invalidité, d&#39;une
          incapacité de travail ou d&#39;un licenciement.
        </p>
        <p className="paragrapheGlobal">
          Également appelée assurance emprunteur, assurance credit ou assurance
          décès-invalidité, l&#39;assurance de prêt est un élément de garantie
          auquel il faut généralement adhérer pour se voir accorder un prêt
          immobilier, bien que cela ne soit pas une obligation légale.
        </p>

        <p className="paragrapheGlobal">
          Selon les lois Murcef et Lagarde, chacun est libre de souscrire son
          assurance prêt auprès de l&#39;assureur de son choix. Les banques ne
          peuvent en effet refuser une « délégation d&#39;assurance » assurance
          externe dès lors que les garanties assurance pret du contrat sont au
          moins équivalentes à celles du contrat d&#39;assurance collectif qu&#39;elles
          proposent. Ceci permet donc aux emprunteurs de comparer les offres
          pour trouver une assurance pret individuelle dont le coût est moins
          élevé et d&#39;économiser ainsi sur le coût global de leur crédit.
        </p>
        <h5 className="h5Global">Le contenu d&#39;un contrat assurance prêt</h5>
        <p id="deces" className="paragrapheGlobal">
          Un contrat d&#39;assurance de prêt contient systématiquement les
          conditions générales de l&#39;assurance et peut également contenir des
          conditions particulières. Ces éléments doivent être clairs et précis,
          et doivent permettre au souscripteur de bien comprendre les termes du
          contrat : étendue des garanties assurance pret, exclusions,
          franchises, délai de carence… Aussi, le contrat doit clairement
          stipuler le montant des primes d&#39;assurance sur une durée déterminée.
        </p>
        <h5 className="h5Global">Les garanties assurance pret</h5>

        <p className="paragrapheGlobal">
          La garantie décès est une garantie de base systématiquement exigée par
          les prêteurs. Si l&#39;emprunteur venait à décéder durant la période de
          remboursement de son crédit, l&#39;assureur rembourserait alors
          intégralement le prêt. Il est cependant important de tenir compte des
          « exclusions » du contrat car elles ne permettent pas une prise en
          charge par l&#39;assureur en cas de décès.
        </p>

        <h6 id="perteAutonomie" className="h6Global">
          Garantie Perte Totale et irréversible d&#39;autonomie:
        </h6>

        <p id="invalidite" className="paragrapheGlobal">
          La garantie d&#39;invalidité est une garantie venant compléter la garantie
          décès. Pour de nombreux assureurs, cette garantie porte le nom de
          PTIA.
        </p>

        <h6  id="chomage" className="h6Global">Garantie Incapacité, Invalidité :</h6>
        <p  className="paragrapheGlobal">
          En cas d&#39;arrêt de travail temporaire ou définitif de l&#39;assuré, les
          garanties ITT ou IPT peuvent être particulièrement utiles.
        </p>

        <h6  className="h6Global">Garantie chômage :</h6>
        <p className="paragrapheGlobal">
          Enfin, la garantie optionnelle de perte d&#39;emploi peut être souscrite
          par l&#39;emprunteur afin qu&#39;il soit couvert en cas de licenciement.
        </p>

        <h5 className="h4Global">Qu&#39;est ce que la loi Pinel</h5>
        <SimpleTextBox>
          La loi Pinel est un accord gagnant-gagnant : en faisant appel au
          financement des épargnants, l&#39;État accorde à ces derniers de payer
          moins d&#39;impôts.
        </SimpleTextBox>
        <p className="paragrapheGlobal">
          Pour faire simple, nous venons de le voir, la loi Pinel 2022 est un
          dispositif qui vous permet de réduire vos impôts lorsque vous
          investissez dans l&#39;immobilier locatif. Son objectif est notamment
          d&#39;étoffer le nombre de logements neufs dans les grandes villes afin de
          combler le manque d&#39;habitations disponibles.
        </p>
        <h5 className="h5Global">
          Les objectifs et enjeux du text de loi Pinel
        </h5>
        <h6 className="h6Global">Qui a créé la loi Pinel ?</h6>

        <p className="paragrapheGlobal">
          C&#39;est Sylvia Pinel, ancienne ministre du Logement du gouvernement de
          Manuel Valls sous François Hollande, qui est à l&#39;origine de ce texte
          de loi. Il est entré en vigueur pour faire face à une pénurie de
          logements neufs mais aussi intermédiaires et sociaux, constatée à
          l&#39;époque. Il soutient donc la construction de logements à travers
          l&#39;Hexagone.
        </p>

        <p className="paragrapheGlobal">
          La loi Pinel a remplacé la loi Duflot, en allongeant notamment les
          durées d&#39;engagement déjà instaurées. Différence considérable qui a
          permis à ce nouveau dispositif de perdurer au-delà de la nomination
          d&#39;un nouveau président sous un nouveau gouvernement.
        </p>

        <SimpleInfoBox>
          À noter que l&#39;assurance de prêt n&#39;est juridiquemebt pas obligatoire.
          Néanmoins dans les fait, très peu de banque, voir aucune, ne vous
          accordera de prêt sans celle-ci.
        </SimpleInfoBox>

        <h6 className="h6Global">Depuis quand existe la loi Pinel ?</h6>

        <p className="paragrapheGlobal">
          C&#39;est Sylvia Pinel, ancienne ministre du Logement du gouvernement de
          Manuel Valls sous François Hollande, qui est à l&#39;origine de ce texte
          de loi. Il est entré en vigueur pour faire face à une
          <Link href="/blog/garantie-pret/">
            <a className="linkInText"> grâce à un investissement locatif </a>
          </Link>
          pénurie de logements neufs mais aussi intermédiaires et sociaux,
          constatée à l&#39;époque. Il soutient donc la construction de logements à
          travers l&#39;Hexagone.
        </p>
      </div>

      <MascotteBox />

      <div className="gegeBottom garantiesGegeBottom"></div>
    </div>
  );
}

export default Garanties;

/*









*/
