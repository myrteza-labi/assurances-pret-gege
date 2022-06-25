import SimpleTextBox from "../components/SimpleTextBox";
import SimpleInfoBox from "../components/SimpleInfoBox";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Devis() {
  function MonDevis() {
    useEffect(() => {
      (function (param1d, param2s, param3id) {
        let js = param1d.getElementsByTagName(param2s)[0];
        let dpjs = param1d.getElementsByTagName(param2s)[0];
        if (param1d.getElementById(param3id) === true) {
          return;
        }
        js = param1d.createElement(param2s);
        js.iparam3id = param3id;
        js.src = "//simulateur.ascourtage.fr/js/sdkif.js";
        dpjs.parentNode.insertBefore(js, dpjs);
      })(document, "script", "asInit");
      var _AppCfg = { version: "0.1", appId: "l-ass-pret" };
    });
  }

  return (
    <div onLoad={MonDevis()} className="Devis">
      <div id="mainDevisContainer">
        <div id="devisPretCtn">
          <div id="myTarificateur" className="myTarificateur"></div>
        </div>
      </div>

      <Link href="/contact">
        <a className="linkInText">
          {" "}
          <div className="enSavoirPlusCtn">
            <p className="enSavoirPlus">Être contacté par un conseiller </p>
            <span className="material-symbols-outlined orange-arrow">
              trending_flat
            </span>
          </div>{" "}
        </a>
      </Link>

      <div className="secondSectionGaranties">
        <h2 className="h2Global">Comparer les devis d&#39;assurance</h2>

        <SimpleTextBox>
          Si vous recherchez une assurance de prêt, un devis est le document
          primordiale avant de faire choisir votre contrat d&#39;assurance prêt et
          d&#39;y souscrire
        </SimpleTextBox>
        <h3 className="h6Global">
          Un devis d&#39;assurance prêt : mais qu&#39;est-ce que c&#39;est exactement ?
        </h3>
        <p className="paragrapheGlobal">
          Celui-ci intègre la totalité des clause de votre contrat. Les formules
          souscrites, les garanties dont vous disposerez et leurs franchises,
          les conditions d&#39;applications, et les primes si elles existe dans
          votre contrat. Ce devis vas vous permettre d&#39;éxaminer très clairement
          un contrat d&#39;assurance donnée, mais également de le comparer avec les
          autres offres disponible sur le marché.
        </p>

        <h4 className="h6Global">
          Pourquoi comparer le tarif d&#39;assurance prêt ?
        </h4>
        <p className="paragrapheGlobal">
          Cette étape vous permet premièrement de savoir combien va beaucoup TD
          votre assurance. Grâce aux informations que vous partagerai avec
          l&#39;assureur, celui-ci pourra estimer le montant de votre assurance de
          prêt, En fonction de vos besoin, et ainsi vous proposer la meilleure
          offre.
        </p>

        <SimpleInfoBox>
          La règle d&#39;or pour bien remplir notre devis en ligne : soyer honnête.
          <br />
          La véracité de vos déclaration vous protégera en cas de sinistre.
        </SimpleInfoBox>

        <h5 className="h6Global">
          Quels sont les documents à fournir pour établir un devis d&#39;assurance
          prêt personnalisée ?
        </h5>

        <p className="paragrapheGlobal">
          Avant de commencer une demande d&#39;assurance prêt en ligne,
          prémunissez-vous des documents suivant :{" "}
        </p>
        <ul className="paragrapheGlobal">
          <li>Votre carte d&#39;identité ou votre passeport</li>
          <li>Votre contrat de travail</li>
          <li>Vos 3 dernières fiches de salaires</li>
          <li>Vos relevés de compte</li>
          <li>Votre avis d&#39;omposition dela dernière année</li>
          <li>Le contrat de votre banque lié à votre prêt</li>
        </ul>
        <p className="paragrapheGlobal">
          Ces documents s&#39;avèrerons très utiles et même indispensable lors de la
          conception de votre dossier.
          <Link href="/cout">
            <a className="linkInText"> Les coût de votre assurance </a>
          </Link>
          n&#39;en seront que plus précis et vos garanties préservées.
        </p>
      </div>
      <div className="gegeBottom coutGegeBottom"></div>
    </div>
  );
}

export default Devis;
