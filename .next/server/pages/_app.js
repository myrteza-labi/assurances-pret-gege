"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/logo.js


function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "logoContainer logoContainerNavbar",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "logo navbarLogo",
                    src: "/assurances-pret-logo.png",
                    alt: "assurances pret logo"
                })
            })
        })
    });
}
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./components/Item.js

function Item(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: props.className,
        children: [
            props.icon,
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "itemTitle " + props.titleClass,
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "material-symbols-outlined " + props.arrowClass,
                children: "chevron_right"
            })
        ]
    });
}
/* harmony default export */ const components_Item = (Item);

;// CONCATENATED MODULE: ./components/navbar.js





function Navbar(props) {
    const stars = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-rounded devis",
        children: "magic_button"
    });
    const imgMenu = props.imgMenu;
    /* test de la navbar qui apparait en scrollant vers le haut  */ const { 0: scrollDir , 1: setScrollDir  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;
        const updateScrollDir = ()=>{
            const scrollY = window.pageYOffset;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? " navbarHidden " : " navbarDisplay ");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };
        const onScroll = ()=>{
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll);
        console.log(scrollDir);
        return ()=>window.removeEventListener("scroll", onScroll)
        ;
    }, [
        scrollDir
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "Navbar " + scrollDir,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(logo, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "desktopMenu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                className: "itemOnDesktop",
                                title: "Accueil"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/garanties",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                className: "itemOnDesktop",
                                title: "Garanties"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/cout",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                className: "itemOnDesktop",
                                title: "Co\xfbt"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/comparatif",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                className: "itemOnDesktop",
                                title: "Comparatif"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/negociation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                className: "itemOnDesktop",
                                title: "N\xe9gociation"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/pret",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                className: "itemOnDesktop",
                                title: "Pr\xeat"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                className: "itemOnDesktop",
                                title: "Contact"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/devis",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                                icon: stars,
                                className: "itemOnDesktop itemDevis",
                                titleClass: "devis",
                                title: "Devis"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: props.onClick,
                className: "material-symbols-outlined menuIcon",
                children: imgMenu
            })
        ]
    });
}
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Menu.js



function Menu(props) {
    const euro = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-outlined",
        children: "euro_symbol"
    });
    const house = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-outlined",
        children: " home "
    });
    const stars = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-rounded devis",
        children: "magic_button"
    });
    const garanties = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-outlined",
        children: "health_and_safety"
    });
    const negociations = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-outlined",
        children: "add_task"
    });
    const pret = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-outlined",
        children: "real_estate_agent"
    });
    const contact = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-outlined",
        children: "contact_support"
    });
    const comparatif = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "material-symbols-outlined",
        children: "compare_arrows"
    });
    const mobileMenu = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mobileMenu " + props.isMobile,
        style: {
            display: props.isMobile
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dropdownMenuHeader",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "menuTitle",
                    children: "Menu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        icon: house,
                        title: "Accueil"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/garanties",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        icon: garanties,
                        title: "Garanties"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/cout",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        icon: euro,
                        title: "Co\xfbt"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/comparatif",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        icon: comparatif,
                        title: "Comparatif"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/negociation",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        icon: negociations,
                        title: "N\xe9gociation"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/pret",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        icon: pret,
                        title: "Pr\xeat"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        icon: contact,
                        title: "Contact"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/devis",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: props.onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Item, {
                        className: "itemOnMobile",
                        arrowClass: "devis",
                        titleClass: "devis",
                        icon: stars,
                        title: "Devis"
                    })
                })
            })
        ]
    });
    return mobileMenu;
}
/* harmony default export */ const components_Menu = (Menu);

;// CONCATENATED MODULE: ./components/Header.js





function Header() {
    const { 0: isMobile , 1: setIsMobile  } = (0,external_react_.useState)("none");
    const { 0: buttonImg , 1: setButtonImg  } = (0,external_react_.useState)("menu");
    function handleClickBurger() {
        if (isMobile === "none") {
            setIsMobile("block");
            setButtonImg("cancel");
        } else {
            setIsMobile("none");
            setButtonImg("menu");
        }
    }
    ;
    function handleLinkClick() {
        setIsMobile("none");
        setButtonImg("menu");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                imgMenu: buttonImg,
                onClick: handleClickBurger
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Menu, {
                onClick: handleLinkClick,
                isMobile: isMobile
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/footer.js


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "Footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "footer-ul",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "Accueil"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/garanties",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "Garanties"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/cout",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "Co\xfbts"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/comparatif",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "Comparatifs"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/negociation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "N\xe9gociations"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/prets",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "Pr\xeats"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "Contact"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/mentions",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "footer-li",
                            children: "Mentions l\xe9gales"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-link-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-link-group",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "footer-ul",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/selection",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Selection immobili\xe8re"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/garantie/deces-invalidite",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "D\xe9c\xe8s invalidit\xe9"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/garantie/chomage",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Ch\xf4mage"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/assurance-emprunt-immobilier",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Assurance emprunt immobilier"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/resiliation-assurance-pret",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "R\xe9siliation assurance pr\xeat"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/assurance/assurance-pret-risque-aggrave",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Assurance pr\xeat risque aggrav\xe9"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/assurance/assurance-pret-senior",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Assurance pr\xeat s\xe9nior"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/assurance/comment-garantir-son-credit-immobilier",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Garantir son cr\xe9dit"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/demander-devis-assurance-credit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Devis assurance cr\xe9dit"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/assurance-pret-obesite",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Assurance pr\xeat ob\xe9sit\xe9"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/assurance-emprunteur-infos-conseils",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Conseil en assurance"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/garantie-pret",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Garantie pr\xeat"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/simulation-assurance-credit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Simulation d'assurance pr\xeat"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/pret/aide-achat-residence-principale",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Aide financi\xe8re"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/delegation-assurance-pret",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "D\xe9l\xe9guation d'assurance"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog/changer-assurance-pret",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "footer-link",
                                    children: "Changer d'assurance pr\xeat"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "social-media-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "social-icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/icon-facebook.png",
                            alt: "facebook",
                            className: "social-image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "social-icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/icon-twitter.png",
                            alt: "twitter",
                            className: "social-image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "social-icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/icon-linkedin.png",
                            alt: "linkedin",
                            className: "social-image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "social-icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/icon-youtube.png",
                            alt: "youtube",
                            className: "social-image"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.js

















































function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Assurances pret"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                id: "inline-script",
                dangerouslySetInnerHTML: {
                    __html: `

            if (typeof window !== "undefined") {

                 (document, "script", "asInit");
                 var _AppCfg = { version : "0.1", appId:"votreass"};

              }`
                }
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(2488)));
module.exports = __webpack_exports__;

})();