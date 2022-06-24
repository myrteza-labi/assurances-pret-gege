import SimpleTextBox from "../components/SimpleTextBox";
import SimpleInfoBox from "../components/SimpleInfoBox";
import Sommaire from "../components/Sommaire";
import Link from "next/link";

function MentionsLegales() {
  return (
    <div className="MentionsLegales">
      <div className="secondSectionGaranties">
        <h2 className="h2Global">Mentions légales</h2>
        <Sommaire
          sommaireTitle={"Sommaire"}
          title1={"Condition Générales d'Utilisation"}
          href1={"#generale"}
          title2={"Liberté informatique"}
          href2={"#liberte"}
          title3={"Partenariat"}
          href3={"#partenariat"}

        />
        <h6 id="generale" className="h6Global">
          Conditions Générales d'Utilisation : <br />
          Article 1. Informations légales et Préambule
        </h6>
        <p className="paragrapheGlobal">
          1. Le Site assurance-prets est la propriété de la société As Du Grand
          Lyon dont le siège social est situé 89AV des Bruyères 69150
          DECINES-CHARPIEU, immatriculée au Registre du Commerce et des Sociétés
          de Lyon sous le numéro 437 767 916, société au capital social de 7
          623,00 €.
        </p>
        <p className="paragrapheGlobal">
          Formulaire de contacte :{" "}
          <Link href="/">
            <a className="linkInText"> cliquez ici </a>
          </Link>
          <br />
          Mail :{" "}
          <Link href="/">
            <a className="linkInText"> contact@ascourtage.fr </a>
          </Link>
          <br />
          Téléphone : 04 78 80 88 29
          <br />
          Numéro TVA : FR02437767916
        </p>
        <p className="paragrapheGlobal">
          AS DU GRAND LYON – 89 Avenue des Bruyères – 69150 DECINES – Tél :
          04.78.80.88.29 – Fax : 04.72.04.14.30 SARL au capital de 7 623 € – RCS
          LYON 437 767 916 Enregistré à l’ORIAS sous le numéro 07 003 448
          (www.orias.fr) en qualité de courtier en assurances (exerçant sous les
          modalités du b de l’article L.520-1 II du code des assurances) et de
          courtier en opérations de banque et en services de paiement
        </p>{" "}
        <p className="paragrapheGlobal">
          {" "}
          Nous tenons à votre disposition sur simple demande la liste de nos
          fournisseurs actifs. Service réclamations : AS DU GRAND LYON – 89
          Avenue des Bruyères – 69150 DECINES – Tél : 04.78.80.88.29 – Email :
          contact@ascourtage.fr{" "}
        </p>{" "}
        <p className="paragrapheGlobal">
          Nous nous engageons à accuser réception de votre réclamation dans un
          délai de 10 jours et à y répondre dans un délai de 2 mois. Soumis au
          contrôle de l’Autorité de Contrôle Prudentiel et de Résolution 4 Place
          de Budapest CS 92459 75436 PARIS CEDEX 09 Conformément aux articles 39
          et suivants de la loi n° 78-17 du 6 janvier 1978 modifiée en 2004
          relative à l’informatique, aux fichiers et aux libertés, toute
          personne peut obtenir communication et, le cas échéant, rectification
          ou suppression des informations la concernant, en s’adressant à : AS
          DU GRAND LYON – 89 Avenue des Bruyères – 69150 DECINES – Tél :
          04.78.80.88.29 – Email : contact@ascourtage.fr
        </p>
        <SimpleInfoBox>
          Assurance-prets.com est une marque du Cabinet As Du Grand Lyon
          courtier en assurance de pret.ﬂ
        </SimpleInfoBox>
        <h6 id="liberte"  className="h6Global">
          Assurance emprunteur Informatique et libertés
        </h6>
        <p className="paragrapheGlobal">
          Le site du courtier as du grand lyon est déclaré auprès de la
          Commission Nationale Informatique et libertés (CNIL-France) en
          application de la loi n°78-17 du 6 janvier 1978 modifiée relative à
          l’informatique, aux fichiers et aux libertés.
        </p>{" "}
        <p className="paragrapheGlobal">
          Conformément à l’article 27 de la loi Informatique et libertés du 6
          janvier 1978, As Du Grand Lyon vous informe que les données
          personnelles recueillies sur son site font l’objet de traitements
          automatisés.
        </p>
        <p className="paragrapheGlobal">
          Conformément aux articles 39 et suivants de la loi n° 78-17 du 6
          janvier 1978 modifiée en 2004 relative à l’informatique, aux fichiers
          et aux libertés, toute personne peut obtenir communication et, le cas
          échéant, rectification ou suppression des informations la concernant,
          en s’adressant à : AS DU GRAND LYON – 89 Avenue des Bruyères – 69150
          DECINES – Tél : 04.78.80.88.29 – Email : contact@ascourtage.fr{" "}
        </p>
        <p className="paragrapheGlobal">
          {" "}
          Les Données sont collectées lors de l’envoi d’un formulaire en ligne
          de demande d’informations concernant l’assurance de pret, et les
          demandes relatives à votre dossier client. Notre formulaire comprend
          des champs obligatoires requis pour le traitement le plus juste de
          votre demande.
        </p>{" "}
        <SimpleTextBox>
          Enregistré à l’ORIAS sous le numéro 07 003 448 (www.orias.fr) en
          qualité de courtier en assurances (exerçant sous les modalités du b de
          l’article L.520-1 II du code des assurances)
        </SimpleTextBox>
        <h6 id="partenariat" className="h6Global">Les partenariat</h6>
        <p className="paragrapheGlobal">
          {" "}
          Les organismes partenaires du courtier (compagnies d’assurance)
          exigent certains renseignements pour proposer le meilleur taux
          d’assurance crédit. La collecte des informations a pour but de
          répondre le plus précisément à votre demande et de fournir une offre
          adaptée à votre profil emprunteur. Société éditrice du site : CABINET
          AS DU GRAND LYON BP 206 69152 DECINES Cedex Tél : 04 78 80 88 29 – Fax
          : 04 72 04 14 30 Directeur de la publication : Alain HABBULOGLU –
          Responsable du cabinet Hébergeur du site : Netsample – 28 rue Mont
          Thabor- 75001 Paris
        </p>
      </div>
    </div>
  );
}

export default MentionsLegales;
