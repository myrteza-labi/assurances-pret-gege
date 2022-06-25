import BtnGo from "../../../components/btnGo";
import Sommaire from "../../../components/sommaire";
import Link from "next/link";
import FullArticle from "../../../components/FullArticle";

function Senior() {
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
          Blog : Assurance sénior
        </h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Assurance sénior"}
          text1={" : introduction"}
          href1={"#senior-intro"}
          title2={"Prêt sénior"}
          text2={" : comment s'assurer ?"}
          href2={"#senior-pret"}
          title3={"Assurance plus de 60 ans"}
          text3={" : y a t-il une limite d'age ?"}
          href3={"#senior-age"}
          title4={"Prêt retraité"}
          text4={" : comment l'obtient-on ? "}
          href4={"#senior-retraire"}
          title5={"Accord de la banque"}
          text5={" : Les étape à venir"}
          href5={"#senior-accord"}
          title6={"Profil sénior et banque"}
          text6={" : Quel sont les profils privilégiés"}
          href6={"#senior-profil"}
          title7={"Mutuelle"}
          text7={": quelles intérêt apportent-elles? "}
          href7={"#senior-mutuelle"}
        />
      
      <FullArticle
          title={"Assurance sénior compétitive en ligne"}
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurance-pret-blog-senior.jpg"}
          alt={""}
        >
          <p id="senior-intro" className="paragrapheGlobal">
            En effet, pour bon nombre de prêteurs, l&#39;âge est un critère
            rédhibitoire. Quand bien même les séniors arrivent à trouver un
            organisme qui conçoit à leur octroyer un prêt, ils doivent souvent
            s&#39;acquitter d&#39;une assurance pret senior dont le coût peut parfois
            leur revenir plus cher.
          </p>
          <h3 id="senior-pret" className="h5Global">
            Assurance pret Senior : Comment s&#39;assurer ?
          </h3>
          <p id="senior-age" className="paragrapheGlobal">
            Dans le cas où un risque aggravé de santé se présente, le sénior
            peut toujours prétendre aux protections classiques, à savoir la
            garantie décès et invalidité, mais en contrepartie, l&#39;assureur peut
            lui facturer des surprimes en plus des cotisations normales. Le taux
            de cette majoration dépend du niveau de risque que l&#39;individu
            représente. Il se peut aussi que le contrat lui offre les mêmes
            garanties qu&#39;une assurance prêt senior normale, mais avec toutefois
            des exclusions de garanties par rapport aux risques liés aux
            complications de sa maladie.
          </p>
          <h3 className="h5Global">Emprunter après 60 ans, un réel défi</h3>
          <p  className="paragrapheGlobal">
            Les personnes qui arrivent à l&#39;âge de la retraite ne sont plus
            confrontées aux problèmes relatifs aux aléas de l&#39;emploi tels que le
            chômage ou le licenciement. Ils ont aussi l&#39;assurance de toucher un
            revenu stable tous les mois. Malgré ce profil de l&#39;emprunteur idéal,
            les banques ne se bousculent pas toujours pour satisfaire les
            demandes de crédit à long terme des seniors. Ceci est dû au fait que
            les institutions financières se basent souvent sur l&#39;âge de
            l&#39;emprunteur à la fin du remboursement pour leur octroyer un prêt.
            En effet, même si les retraités ont un revenu stable ; compte tenu
            de leur âge, les établissements de crédit considèrent que le risque
            qu&#39;ils ne puissent rembourser leur dette avant l&#39;échéance reste
            important. Il devient ainsi plus difficile d&#39;obtenir un prêt à
            partir de cet âge, d&#39;autant plus qu&#39;une assurance emprunteur est
            généralement exigée et que le sénior va également rencontrer un
            certain nombre de difficultés pour s&#39;assurer.
          </p>
          <h3 id="senior-retraire" className="h5Global">Comment obtenir un prêt retraité ?</h3>
          <p className="paragrapheGlobal">
            Obtenir un crédit après 60 ans n&#39;a plus rien d&#39;utopique. Dans un
            contexte où l&#39;espérance de vie est de plus en plus élevée, les
            offres de prêt retraité foisonnent et tendent à s&#39;adapter à la
            demande. Le senior peut ainsi bénéficier des mêmes offres que la
            plupart des emprunteurs et la stabilité de son revenu est un atout
            supplémentaire qui joue en sa faveur. Le recours à un courtier
            spécialisé en assurance de crédit augmente, de surcroit, ses chances
            de souscrire un contrat adapté et plus avantageux.
          </p>
          <h3 id="senior-accord" className="h5Global">Quelles sont les étapes qui suivent l&#39;accord de la banque ?</h3>
          <p className="paragrapheGlobal">
            Une fois le crédit accordé, il reste à régler la question épineuse
            de l&#39;assurance emprunteur, un élément important pour faire aboutir
            la demande de crédit immobilier du retraité. Avant la mise en place
            du système de délégation d&#39;assurance, trouver une assurance de prêt
            adaptée aux seniors était un exercice difficile. En effet, la
            souscription aux contrats de groupe proposés par les institutions
            bancaires est généralement limitée à 60 ou 65 ans. De plus, la
            garantie décès prend fin à l&#39;âge de 70 ou 75 ans, ce qui ne sert pas
            la cause des seniors dont l&#39;espérance de vie tend de plus en plus à
            augmenter. Les personnes qui dépassent ce seuil peuvent toutefois
            continuer à être assurées par le contrat de groupe, en souscrivant à
            des contrats optionnels dont le coût est parfois très élevé, puisque
            le taux peut atteindre 3 %.
          </p>
          <p className="paragrapheGlobal">
            Grâce à l&#39;autorisation de la délégation assurance, depuis la mise en
            application de la loi Lagarde en 2010, une forte concurrence est
            apparue dans le domaine de l&#39;assurance emprunteur, ce qui permet aux
            seniors de trouver plus aisément des contrats adaptés à leur
            situation. Beaucoup d&#39;assureurs proposent désormais une couverture
            décès allant jusqu&#39;à 90 ans. Par ailleurs, pour la plupart des
            contrats individuels, la souscription est possible jusqu&#39;à 85 ans.
          </p>
          <h3 id="senior-profil" className="h5Global">Quels sont les profils sénior que privilégient les banques</h3>
          <p className="paragrapheGlobal">
            Malgré la réticence des organismes prêteurs à accorder un crédit aux
            personnes de plus de 60 ans, les retraités peuvent concrétiser leur
            projet de vie en ayant recours au prêt hypothécaire. Cette
            alternative au crédit immobilier classique permet d&#39;obtenir un
            crédit pour financier l&#39;acquisition d&#39;une résidence secondaire, tout
            en continuant à occuper son bien. En effet, lors d&#39;un prêt
            hypothécaire, le propriétaire peut toujours disposer de son bien ou
            encore le mettre en location.
          </p>
          <p className="paragrapheGlobal">
            Il existe deux types de crédit hypothécaire : le prêt viager
            hypothécaire et l&#39;emprunt hypothécaire cautionné. Dans le premier
            cas, le crédit est octroyé sous forme de rente ou de capital. Le
            bien immobilier est alors donné en garantie à la banque qui en
            contrepartie, verse au propriétaire une partie de sa valeur. Il faut
            noter que le montant de ce crédit ne peut en aucun cas dépasser 18 %
            de la valeur de la propriété pour les 65 ans et 53 % pour les 85
            ans. Lors de la souscription, une expertise est faite pour estimer
            la valeur réelle du bien. Les frais de cette expertise sont à la
            charge du banquier, cependant, l&#39;emprunteur doit encore s&#39;acquitter
            d&#39;un frais de dossier qui représente environ 4 % du montant
            emprunté. L&#39;intérêt du prêt viager hypothécaire réside dans le fait
            que le senior n&#39;a pas à rembourser sa dette de son vivant. Après son
            décès, ses héritiers ont le choix entre rembourser la banque et
            récupérer le bien ou alors laisser l&#39;institution financière le
            vendre afin de récupérer son dû. Le point faible de ce prêt réside
            dans son taux d&#39;intérêt qui peut atteindre 8,5 % par an. Pour le
            prêt cautionné, le bien est toujours déposé en garantie. Son
            propriétaire reçoit au maximum 70 % de sa valeur sous forme du prêt.
            Comme n&#39;importe quel crédit, le capital et ses intérêts sont
            remboursables tous les mois.
          </p>
          <h3 id="senior-mutuelle" className="h5Global">
            L&#39;intérêt d&#39;adhérer à une mutuelle sénior
          </h3>
          <p className="paragrapheGlobal">
            Passé le cap des 60 ans, les problèmes de santé commencent à faire
            leur apparition. C&#39;est pour cette raison qu&#39;il est indispensable de
            s&#39;inscrire à une mutuelle santé spécialement adaptée aux retraités
            afin de bénéficier, le moment voulu, de toute la protection
            nécessaire. Pour ce qui est de l&#39;assurance emprunt, l&#39;état de santé
            n&#39;est plus le principal cas de refus, notamment si le retraité
            bénéficie d&#39;une bonne couverture pour préserver son capital santé.
            En effet, les questionnaires de santé sont désormais plus simples et
            les questions ne touchent que les dix dernières années avant la
            souscription. Si, durant cette période, l&#39;emprunteur a été en bonne
            santé, il bénéficie du même niveau de garantie et des mêmes
            conditions que l&#39;emprunteur lambda.
          </p>
        </FullArticle>

      </div>
      <div className="gegeBottom garantiesGegeBottom"></div>

    </div>
  );
}

export default Senior;


/*


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


       A METTRE A LA FIN POUR AVOIR UNE MASCOTTE EN BAS DE PAGE 
      <div className="gegeBottom garantiesGegeBottom"></div>

*/