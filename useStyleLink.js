"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyleLink = void 0;
var react_1 = require("react");
var links = typeof window === 'undefined' ? null : document.getElementsByTagName('link');
var useStyleLink = function (url, autoClear, isSameLink) {
    if (autoClear === void 0) { autoClear = false; }
    if (isSameLink === void 0) { isSameLink = function (link1, link2) { return link1 === link2; }; }
    react_1.useEffect(function () {
        // SSR
        if (!links)
            return;
        var link = document.createElement('link');
        link.href = url;
        var fullHref = link.href;
        // prevent insertion duplication
        var maybeExistedLink = Array.from(links).find(function (l) { return isSameLink(l.href, fullHref); });
        if (maybeExistedLink) {
            return function () {
                if (!autoClear)
                    return;
                document.head.removeChild(maybeExistedLink);
            };
        }
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return function () {
            if (!autoClear)
                return;
            document.head.removeChild(link);
        };
    }, [url, autoClear]);
};
exports.useStyleLink = useStyleLink;
