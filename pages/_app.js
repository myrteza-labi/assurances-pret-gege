
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/globals.css'; 
import '../styles/navbar.css'; 
import '../styles/logo.css'; 
import '../styles/burgerMenu.css'; 
import '../styles/Menu.css'; 
import '../styles/Item.css'; 
import '../styles/product.css'; 
import '../styles/Infos.css'; 
import '../styles/partenaires.css'; 
import '../styles/footer.css'; 
import '../styles/btnGo.css'; 
import '../styles/sommaire.css'; 
import '../styles/simpleTextBox.css'; 
import '../styles/simpleInfoBox.css'; 
import '../styles/mascotteBox.css'; 
import '../styles/faq.css'; 
import '../styles/cout.css'; 
import '../styles/comparatif.css'; 
import '../styles/negociations.css'; 
import '../styles/pret.css'; 
import '../styles/contact.css'; 
import '../styles/SelectBox.css'; 
import '../styles/devis.css'; 
import '../styles/mentions-legales.css'; 
import '../styles/garanties.css'; 
import '../styles/immobilier.css'; 
import '../styles/chomage.css'; 
import '../styles/deces.css'; 
import '../styles/blog.css'; 
import '../styles/article.css'; 
import '../styles/senior.css'; 
import '../styles/fullArticle.css'; 
import '../styles/blog-conseil.css'; 
import '../styles/simulation-assurance-credit.css'; 
import '../styles/assurance-pret-obesite.css'; 
import '../styles/assurance-emprunt-immobilier.css'; 
import '../styles/resiliation-assurance-pret.css'; 
import '../styles/demander-devis-assurance-credit.css'; 
import '../styles/taux-assurance.css'; 
import '../styles/delegation-assurance-pret.css'; 
import '../styles/2.css'; 
import '../styles/changer-assurance-pret.css'; 


import '../styles/assurance-pret-risque-aggrave.css'; 
import '../styles/aide-achat-residence-principale.css'; 
import '../styles/comment-garantir-son-credit-immobilier.css'; 


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
    <Component {...pageProps} />
    <Footer/>
    <script id="inline-script"
        dangerouslySetInnerHTML={{
            __html: `

            if (typeof window !== "undefined") {

                 (document, "script", "asInit");
                 var _AppCfg = { version : "0.1", appId:"votreass"};

              }`,
        }}
        ></script>
    </div>
  )
}

export default MyApp
