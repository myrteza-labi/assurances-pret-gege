"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 5515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FullArticle(props) {
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
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "blogImage",
                    src: props.src,
                    alt: props.alt
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "faqOnQuestionBox",
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullArticle); /* 


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


/***/ })

};
;