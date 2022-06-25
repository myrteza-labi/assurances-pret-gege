"use strict";
exports.id = 83;
exports.ids = [83];
exports.modules = {

/***/ 9271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Article(props) {
    let { 0: arrayOfClasses , 1: setArrayOfClasses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        "faqHidden",
        "faqHidden",
        "faqHidden",
        "faqHidden", 
    ]);
    function handleClick(number) {
        let unNouveauTableau = arrayOfClasses.map((item)=>{
            return item;
        });
        if (unNouveauTableau[number] == "faqVisible") {
            unNouveauTableau[number] = "faqHidden";
        } else {
            unNouveauTableau[number] = "faqVisible";
        }
        setArrayOfClasses(unNouveauTableau);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Article",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "h5Global",
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "blogImageContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: props.href,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "blogImage",
                        src: props.src,
                        alt: props.alt
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mascotteArticleTheme",
                children: props.theme
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                id: "chomage",
                className: "h6Global",
                children: props.h6
            }),
            props.description,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "enSavoirPlusCtn-v2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: props.href,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            href: props.href,
                            className: "enSavoirPlus",
                            children: "Lire l'article"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "material-symbols-outlined orange-arrow",
                        children: "trending_flat"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article); /* 


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


/***/ }),

/***/ 7083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9271);


function MascotteBox(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "MascotteBox",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mascotteImg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mascotteMainContent ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_article__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        title: "Assurance s\xe9nior comp\xe9titive en ligne",
                        h6: "Cr\xe9dit s\xe9nior : quid de l&#39;assurance de pr\xeat ?",
                        description: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "paragrapheGlobal-v3",
                            children: "Pass\xe9 la soixantaine, trouver un cr\xe9dit pour financer son projet immobilier est relativement difficile..."
                        }),
                        theme: "G\xc9N\xc9RALIT\xc9S",
                        q: "En savoir plus",
                        src: "/assurance-pret-blog-senior.jpg",
                        alt: "assurance pret senior",
                        href: "/blog/assurance/assurance-pret-senior"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "enSavoirPlusCtn",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/blog",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    href: "/blog",
                                    className: "enSavoirPlus",
                                    children: "Voir toute l'actualit\xe9"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "material-symbols-outlined orange-arrow",
                                children: "trending_flat"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MascotteBox); /*


<Faq
        q1={
          "Quand et comment remplir sa déclaration fiscale avec le dispositif pinel ?"
        }
        a1={
          "En ce qui concerne le calendrier fiscal 2022,\
          votre déclaration en dispositif Pinel doit être\
                  remplie l'année qui suit la livraison du bien\
                   immobilier. Si vous réalisez un achat en VEFA\
                    ou dans le cadre d&#39;une réhabilitation d&#39;un\
                     logement ancien, vous devez attendre la fin\
                      des travaux. Cette déclaration en loi Pinel\
                       devra être reformulée tous les ans."
        }
        q2={"Le Pinel dans l&#39;ancien"}
        a2={
          "Bien que ne s&#39;appliquant habituellement qu&#39;aux logements\
                 neufs, la formule de loi Pinel en réhabilité vous donne\
                  la possibilité de profiter des mêmes avantages fiscaux\
                   que la loi Pinel initiale. Vous devrez simplement justifier\
                    de travaux entraînant une remise en état du logement\
                     pour accéder à la loi Pinel dans l&#39;ancien."
        }
        q3={"La loi Pinel et les autres lois de défiscalisation immobilière"}
        a3={
          "La loi Pinel n&#39;est pas la seule loi permettant de réduire ses impôts\
                 avec un investissement immobilier. Il existe également :"
        }
        q4={"Les évolutions de la loi Pinel"}
        a4={
          "Quels changements par rapport à la loi Pinel 2020 ? Aucun si ce n&#39;est que\
                 le dispositif a été maintenu en 2022, avec le projet d&#39;expérimenter ce dispositif\
                  en Bretagne via le « Pinel Breton. D&#39;autre part, le Pinel sera prolongé jusqu'à \
                  la fin de l'année 2022. D&#39;ici 2024, il sera reconduit avec certains taux dégressifs.\
                   Ensuite, c&#39;est la loi Wargon qui va prendre le relai."
        }
      />

*/ 


/***/ })

};
;