import Article from "./article";


function MascotteBox(props) {
  return (
    <div className="MascotteBox">
      <div className="mascotteImg"></div>
      <div className="mascotteMainContent ">
      <Article
          title={"Assurance sénior compétitive en ligne"}
          h6={"Crédit sénior : quid de l’assurance de prêt ?"}
          description={
            <p className="paragrapheGlobal-v3">
              Passé la soixantaine, trouver un crédit pour financer son projet
              immobilier est relativement difficile...
            </p>
          }
          theme={"GÉNÉRALITÉS"}
          q={"En savoir plus"}
          src={"/assurance-pret-blog-senior.jpg"}
          alt={"assurance pret senior"}
          href={"/blog/assurance/assurance-pret-senior"}
        ></Article>
        <div className="enSavoirPlusCtn">
          <a href={"/blog"}>
            <p href={"/blog"} className="enSavoirPlus">
              Voir toute l'actualité
            </p>
          </a>
          <span className="material-symbols-outlined orange-arrow">
            trending_flat
          </span>
        </div>
       
      </div>
      
    </div>
  );
}

export default MascotteBox;


/*


<Faq
        q1={
          "Quand et comment remplir sa déclaration fiscale avec le dispositif pinel ?"
        }
        a1={
          "En ce qui concerne le calendrier fiscal 2022,\
          votre déclaration en dispositif Pinel doit être\
                  remplie l'année qui suit la livraison du bien\
                   immobilier. Si vous réalisez un achat en VEFA\
                    ou dans le cadre d’une réhabilitation d’un\
                     logement ancien, vous devez attendre la fin\
                      des travaux. Cette déclaration en loi Pinel\
                       devra être reformulée tous les ans."
        }
        q2={"Le Pinel dans l’ancien"}
        a2={
          "Bien que ne s’appliquant habituellement qu’aux logements\
                 neufs, la formule de loi Pinel en réhabilité vous donne\
                  la possibilité de profiter des mêmes avantages fiscaux\
                   que la loi Pinel initiale. Vous devrez simplement justifier\
                    de travaux entraînant une remise en état du logement\
                     pour accéder à la loi Pinel dans l’ancien."
        }
        q3={"La loi Pinel et les autres lois de défiscalisation immobilière"}
        a3={
          "La loi Pinel n’est pas la seule loi permettant de réduire ses impôts\
                 avec un investissement immobilier. Il existe également :"
        }
        q4={"Les évolutions de la loi Pinel"}
        a4={
          "Quels changements par rapport à la loi Pinel 2020 ? Aucun si ce n’est que\
                 le dispositif a été maintenu en 2022, avec le projet d’expérimenter ce dispositif\
                  en Bretagne via le « Pinel Breton. D’autre part, le Pinel sera prolongé jusqu'à \
                  la fin de l'année 2022. D’ici 2024, il sera reconduit avec certains taux dégressifs.\
                   Ensuite, c’est la loi Wargon qui va prendre le relai."
        }
      />

*/