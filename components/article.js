import { useState } from "react";

function Article(props) {
  let [arrayOfClasses, setArrayOfClasses] = useState([
    "faqHidden",
    "faqHidden",
    "faqHidden",
    "faqHidden",
  ]);

  function handleClick(number) {
    let unNouveauTableau = arrayOfClasses.map((item) => {
      return item;
    });

    if (unNouveauTableau[number] == "faqVisible") {
      unNouveauTableau[number] = "faqHidden";
    } else {
      unNouveauTableau[number] = "faqVisible";
    }
    setArrayOfClasses(unNouveauTableau);
  }

  return (
    <div className="Article">
      <p className="h5Global">{props.title}</p>
      <div className="blogImageContainer">
        <a href={props.href}>
          <img className="blogImage" src={props.src} alt={props.alt} />
        </a>
      </div>
      <p className="mascotteArticleTheme">{props.theme}</p>

      <p id="chomage" className="h6Global">
        {props.h6}
      </p>
      {props.description}

      <div className="enSavoirPlusCtn-v2">
        <a href={props.href}>
          <p href={props.href} className="enSavoirPlus">Lire l&#39;article</p>

        </a>
        <span className="material-symbols-outlined orange-arrow">
            trending_flat
          </span>
      </div>
    </div>
  );
}

export default Article;

/* 


<div className="enSavoirPlusCtn">
          <p className="enSavoirPlus">Voir toutes les actualités loi pinel </p>
          <span className="material-symbols-outlined orange-arrow">
            trending_flat
          </span>
        </div>



v answerDisplayClass[number] = "faqVisible ";

            const NewArray = answerDisplayClass.map(); 
    
            setAnswerDisplayClass(NewArray);
            console.log(answerDisplayClass[0]);  
            
            
            
            
            
            LE COMPOSANT ARTICLE DE BASE CE DESSOUS 



            <div className="Article">
      <h5 className="h5Global">{props.title}</h5>
      <div className="blogImageContainer">
        <img className="blogImage" src={props.src} alt={props.alt} />
      </div>
      <p className="mascotteArticleTheme">{props.theme}</p>

      <h6 id="chomage" className="h6Global">
          {props.h6}
        </h6>
      {props.description}
      {props.displayedText}
      <div className="faqOnQuestionBox">
        <div
          onClick={() => {
            handleClick(0);
          }}
          className="faqResponseContainer"
        >
          <p className="faqQuestion">{props.q}</p>
          <span className="material-symbols-outlined faqArrowIcon">
            {props.q == undefined ? " " : "expand_more"}
          </span>
        </div>
        <div className={"faqAnswerContainer " + arrayOfClasses[0]}>
          {props.children}
        </div>
      </div>
    </div>
            
            
            
            
            
            
            
            
            
            */
