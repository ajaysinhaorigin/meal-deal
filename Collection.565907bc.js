function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire5ca6;t.register("1sFoU",(function(o,n){var a;a=o.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),e(o.exports,"default",(()=>i));var s=t("ayMG0"),l=t("aphAM"),r=t("kO6rG");var i=()=>{const{link:e}=(0,l.useParams)();return(0,r.default)(e),(0,s.jsx)("div",{children:"Collection"})}})),t.register("kO6rG",(function(o,n){e(o.exports,"default",(()=>i));var a=t("ayMG0"),s=t("jHTLJ"),l=t("j1yZI"),r=t("acw62");var i=({link:e})=>{const t=(0,s.useDispatch)();(0,r.useEffect)((()=>{t((0,l.setLoading)()),o()}),[e]);const o=async()=>{try{const t=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3752011&lng=76.782122&collection=${e}&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING`),o=await t.json();0===o?.statusCode&&console.log(o)}catch(e){console.log(e)}};return(0,a.jsx)("div",{children:"useFetchCollections"})}}));
//# sourceMappingURL=Collection.565907bc.js.map
