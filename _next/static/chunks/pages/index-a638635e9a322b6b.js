(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        5557: function (a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return c(5821);
                },
            ]);
        },
        5821: function (a, b, c) {
            "use strict";
            c.r(b),
                c.d(b, {
                    default: function () {
                        return a5;
                    },
                });
            var d = c(5893),
                e = c(2141),
                f = c(7294),
                g = c(1799),
                h = c(9396);
            ((function (a) {
                return (0, d.jsxs)(
                    "svg",
                    (0, h.Z)((0, g.Z)({}, a), {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-star",
                        children: [(0, d.jsx)("title", { children: "Star" }), (0, d.jsx)("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })],
                    })
                );
            }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-git-branch",
                            children: [
                                (0, d.jsx)("title", { children: "Git GitFork" }),
                                (0, d.jsx)("line", { x1: "6", y1: "3", x2: "6", y2: "15" }),
                                (0, d.jsx)("circle", { cx: "18", cy: "6", r: "3" }),
                                (0, d.jsx)("circle", { cx: "6", cy: "18", r: "3" }),
                                (0, d.jsx)("path", { d: "M18 9a9 9 0 0 1-9 9" }),
                            ],
                        })
                    );
                }.propTypes = {}));
            var i = function (a) {
                var b = a.data,
                    c = b.label,
                    g = b.heading,
                    h = b.description,
                    i = b.button,
                    j = b.handleBuiltByClick;
                b.designAndBuiltBy;
                var k = (0, f.useState)({ stars: null, forks: null }),
                    l = (k[0], k[1]);
                (0, f.useEffect)(function () {
                    fetch("https://api.github.com/repos/Muneebwasikhan/portfolio")
                        .then(function (a) {
                            return a.json();
                        })
                        .then(function (a) {
                            var b = a.stargazers_count,
                                c = a.forks_count;
                            l({ stars: b, forks: c });
                        })
                        .catch(function (a) {
                            return console.error(a);
                        });
                }, []);
                var m = (0, e.YT)({ easing: "easeIn", translateX: [-50, 0] }).ref;
                return (0, d.jsxs)("div", {
                    className: "mk-contact",
                    children: [
                        (0, d.jsx)("div", { ref: m, className: "mk-contact-zebra-img", style: { backgroundImage: "url(/assets/arrow-sample.svg)" } }),
                        (0, d.jsx)("div", {
                            className: "mk-contact-box",
                            children: (0, d.jsx)("div", {
                                className: "container flex-center flex-column",
                                children: (0, d.jsxs)("div", {
                                    className: "mk-contact-box-width",
                                    children: [
                                        (0, d.jsx)("div", { className: "mk-contact-label", children: c }),
                                        (0, d.jsxs)("div", { className: "mk-contact-title", children: [g, " "] }),
                                        (0, d.jsx)("div", { className: "mk-contact-text", children: h }),
                                        (0, d.jsx)("div", { className: "mk-contact-button", children: (0, d.jsx)("button", { onClick: null == i ? void 0 : i.onClick, className: "mk-button", children: null == i ? void 0 : i.label }) }),
                                        (0, d.jsx)("div", { onClick: j, className: "mk-contact-git-section" }),
                                    ],
                                }),
                            }),
                        }),
                    ],
                });
            };
            i.propTypes = {};
            var j = i,
                k = [
                    { layer1: "#F8F6F6", layer2: "#F5D061", layer3: "#2A363B", layer4: "#CF4647" },
                    { layer1: "#222831", layer2: "#393E46", layer3: "#00ADB5", layer4: "#EEEEEE" },
                    { layer1: "#222831", layer2: "#393E46", layer3: "#EEEEEE", layer4: "#00ADB5" },
                    { layer1: "#222831", layer2: "#393E46", layer3: "#00ADB5", layer4: "#EEEEEE" },
                    { layer1: "#222831", layer2: "#393E46", layer3: "#FFD369", layer4: "#EEEEEE" },
                    { layer1: "#222831", layer2: "#EEEEEE", layer3: "#00ADB5", layer4: "#393E46" },
                    { layer1: "#222831", layer2: "#393E46", layer3: "#00ADB5", layer4: "#EEEEEE" },
                    { layer1: "#F8F8F8", layer2: "#434343", layer3: "#FAEBCD", layer4: "#F7C873" },
                    { layer1: "#F8F6F6", layer2: "#F5D061", layer3: "#2A363B", layer4: "#CF4647" },
                ],
                l = function () {
                    (0, f.useEffect)(function () {
                        window.addEventListener("scroll", c), c();
                    }, []);
                    var a = function (a) {
                            var b = document.documentElement;
                            b.style.setProperty("--themeColor1", a.layer1), b.style.setProperty("--themeColor2", a.layer2), b.style.setProperty("--themeColor3", a.layer3), b.style.setProperty("--themeColor4", a.layer4);
                            var c = document.querySelector('meta[name="theme-color"]');
                            (null == c ? void 0 : c.setAttribute) && (null == c ? void 0 : c.content) !== a.layer2 && c.setAttribute("content", a.layer2);
                        },
                        b = function () {
                            var a = window.innerHeight,
                                b = window.pageYOffset,
                                c = b + a / 2,
                                d = document.getElementsByClassName("view-element"),
                                e = 0;
                            if (!d || c < d[0].scrollHeight) return e;
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f],
                                    h = d[f + 1];
                                if (!h || (c > g.offsetTop && c < (null == h ? void 0 : h.offsetTop))) {
                                    e = f;
                                    break;
                                }
                            }
                            return e;
                        },
                        c = function () {
                            var c = b(),
                                d = k;
                            a(d[c] || d[0]);
                        };
                    return (0, d.jsx)("div", {});
                },
                m = c(6089),
                n = c.n(m),
                o = function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1024 1024",
                            className: "jsx-75b79adf8907d2b " + ((a && null != a.className && a.className) || ""),
                            children: [
                                (0, d.jsx)("title", { className: "jsx-75b79adf8907d2b", children: "MK" }),
                                (0, d.jsx)(n(), {
                                    id: "75b79adf8907d2b",
                                    children:
                                        ".mk-logo-path-0.jsx-75b79adf8907d2b{fill:none;stroke:inherit;stroke-width:10}.mk-logo-path-1.jsx-75b79adf8907d2b{paint-order:stroke fill markers;stroke:inherit;stroke-width:6;stroke-linejoin:round;fill:inherit}.mk-logo-path-2.jsx-75b79adf8907d2b{fill:none;stroke:inherit;stroke-width:50}",
                                }),
                                (0, d.jsx)("path", { id: "Shape 3", d: "", className: "jsx-75b79adf8907d2b mk-logo-path-0" }),
                                (0, d.jsx)("path", {
                                    id: "MK",
                                    "aria-label": "MK",
                                    d:
                                        "m577.8 345q3.5 103 3.5 178 0 85-3.5 159 0 2.5-2.5 2.5l-14-1q-2.5 0-2.5-2.5 3.5-74 3.5-159.5 0-67-2.5-149.5-51.5 58-103.5 94-77-34.5-163-100.5-1.5 60-1.5 118 0 104.5 5 196.5 0 2.5-2.5 2.5l-14 1q-2.5 0-2.5-2.5-5-89.5-5-192 0-63.5 2.5-146 0-2.5 2.5-2.5l16.5 1q82 65.5 159.5 102.5 51.5-37 105-100.5l16.5-1q2.5 0 2.5 2.5zm-13.2 0q3.5 103 3.5 178 0 85-3.5 159 0 2.5-2.5 2.5l-14-1q-2.5 0-2.5-2.5 3.5-74 3.5-159.5 0-67-2.5-149.5-51.5 58-103.5 94-77-34.5-163-100.5-1.5 60-1.5 118 0 104.5 5 196.5 0 2.5-2.5 2.5l-14 1q-2.5 0-2.5-2.5-5-89.5-5-192 0-63.5 2.5-146 0-2.5 2.5-2.5l16.5 1q82 65.5 159.5 102.5 51.5-37 105-100.5l16.5-1q2.5 0 2.5 2.5zm198.7-2.5q1 0 1.5 0.5 1 0.5 0.5 1.5-7.5 42-39.5 96-32 53.5-78 102 43 19.5 74 57 31 37 40.5 80.5 0.5 1-0.5 2-1 1-2 1l-14 1.5q-1.5 0-2.5-2-7-37-34.5-70-27.5-33-66.5-51.5-1 71.5-3.5 120 0 1-1 2-0.5 0.5-1.5 0.5l-14-0.5q-2.5 0-2.5-2.5 4-74.5 4-187.5 0-93-2.5-150 0-2.5 2.5-2.5l14-1q2.5 0 2.5 2.5 2.5 74 2.5 146.5v32q40.5-45.5 68.5-93 28.5-48 35-84 1-2.5 3-2.5zm-13.2 0q1 0 1.5 0.5 1 0.5 0.5 1.5-7.5 42-39.5 96-32 53.5-78 102 43 19.5 74 57 31 37 40.5 80.5 0.5 1-0.5 2-1 1-2 1l-14 1.5q-1.5 0-2.5-2-7-37-34.5-70-27.5-33-66.5-51.5-1 71.5-3.5 120 0 1-1 2-0.5 0.5-1.5 0.5l-14-0.5q-2.5 0-2.5-2.5 4-74.5 4-187.5 0-93-2.5-150 0-2.5 2.5-2.5l14-1q2.5 0 2.5 2.5 2.5 74 2.5 146.5v32q40.5-45.5 68.5-93 28.5-48 35-84 1-2.5 3-2.5z",
                                    className: "jsx-75b79adf8907d2b mk-logo-path-1",
                                }),
                                (0, d.jsx)("path", { id: "Shape 2", d: "m264.5 936.2l-247.5-424.1 247.5-424.1h495l247.5 424.1-247.5 424.1z", className: "jsx-75b79adf8907d2b mk-logo-path-2" }),
                            ],
                        })
                    );
                };
            o.propTypes = {};
            var p = o,
                q = function (a) {
                    return (0, d.jsx)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 512 512",
                            xmlSpace: "preserve",
                            children: (0, d.jsx)("g", {
                                children: (0, d.jsx)("path", {
                                    d:
                                        "M36.57,73.14h182.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57 C16.39,146.29,0,129.89,0,109.71C0,89.5,16.39,73.14,36.57,73.14z M292.57,365.71h182.86c20.21,0,36.57,16.36,36.57,36.57 c0,20.18-16.36,36.57-36.57,36.57H292.57c-20.18,0-36.57-16.39-36.57-36.57C256,382.07,272.39,365.71,292.57,365.71z M36.57,219.43 h438.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57C16.39,292.57,0,276.18,0,256 C0,235.79,16.39,219.43,36.57,219.43z",
                                }),
                            }),
                        })
                    );
                };
            q.propTypes = {};
            var r = q,
                s = c(5697),
                t = c.n(s);
            function u(a) {
                var b = a.text,
                    c = a.radius,
                    e = b.split(""),
                    f = e.length;
                return (0, d.jsx)(d.Fragment, {
                    children: e.map(function (a, b) {
                        var e;
                        return (0,
                        d.jsx)("div", { style: { height: "".concat(c, "px"), display: "flex", alignItems: "flex-end", transform: "rotate(".concat(-((2 * (e = b) - f) * ((360 / c) * 1.3)), "deg)"), transformOrigin: "6px  0px 0", position: "absolute" }, children: a }, "heading-span-".concat(b));
                    }),
                });
            }
            u.propTypes = { text: t().string.isRequired, radius: t().number };
            var v = u,
                w = c(5675),
                x = c.n(w),
                y = function (a) {
                    var b = a.menus,
                        c = a.i,
                        d = (b || []).length;
                    return (0.8 / d) * (d - c) + 0.4;
                },
                z = function (a) {
                    return 60 + 80 * a;
                },
                A = function (a) {
                    var b = a.menus,
                        c = a.handleItemSelect;
                    return (0, d.jsx)("div", {
                        style: { width: z((b || []).length), height: z((b || []).length) },
                        className: "mk-hamburger",
                        children: (0, d.jsx)("div", {
                            className: "flex-center",
                            children: (b || []).map(function (a, e) {
                                return (0, d.jsx)(
                                    "div",
                                    {
                                        className: "flex-center",
                                        children: (0, d.jsxs)("div", {
                                            style: { width: z(e + 1), height: z(e + 1), zIndex: b.length - e },
                                            onClick: function () {
                                                return c(a, e);
                                            },
                                            className: "mk-hamburger-item",
                                            children: [(0, d.jsx)("div", { className: "mk-hamburger-item-bg", style: { opacity: y({ menus: b, i: e }) } }), (0, d.jsx)(v, { radius: z(e + 1) / 2, text: a.title || "" })],
                                        }),
                                    },
                                    a.title
                                );
                            }),
                        }),
                    });
                },
                B = function (a) {
                    var b = a.data,
                        c = b.menus,
                        e = b.handleItemSelect,
                        g = b.handleIconClick,
                        h = b.rightBtn,
                        i = b.logo,
                        j = (0, f.useState)(!1),
                        k = j[0],
                        l = j[1],
                        m = function () {
                            return l(!k);
                        };
                    return (0, d.jsx)("header", {
                        className: "mk-header",
                        children: (0, d.jsxs)("div", {
                            className: "mk-header-container",
                            children: [
                                (0, d.jsx)("div", {
                                    children: (null == i ? void 0 : i.src)
                                        ? (0, d.jsx)("div", { onClick: g, className: "mk-logo-bg", children: (0, d.jsx)(x(), { width: 60, height: 60, src: i.src, alt: i.alt }) })
                                        : (0, d.jsx)(p, { onClick: g, width: 45, height: 45 }),
                                }),
                                (0, d.jsxs)("div", {
                                    className: "d-flex",
                                    children: [
                                        h && (0, d.jsx)("div", { children: (0, d.jsx)("button", { onClick: h.onClick, className: "mk-button-md mx-3 mx-lg-5", children: h.label }) }),
                                        (0, d.jsxs)("div", {
                                            className: "mk-header-menu ".concat(k && "mk-header-menu-visible"),
                                            children: [(0, d.jsx)(r, { className: "mk-hamburger-icon", onClick: m, width: 30, height: 30 }), (0, d.jsx)(A, { menus: c, handleItemSelect: e })],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
            B.propTypes = {};
            var C = B,
                D = function (a) {
                    var b = a.text,
                        c = a.textClassName,
                        e = a.lineClassName,
                        f = a.containerClassName;
                    return (0, d.jsxs)("div", {
                        "data-aos": "zoom-in-right",
                        className: "mk-views-title-container ".concat(f || ""),
                        children: [
                            (0, d.jsx)("div", { className: "mk-views-title-text ".concat(c || ""), children: void 0 === b ? "" : b }),
                            (0, d.jsx)("div", { className: "mk-views-title-line-container", children: (0, d.jsx)("div", { className: "mk-views-title-line ".concat(e || "") }) }),
                        ],
                    });
                };
            D.propTypes = {};
            var E = D,
                F = function (a) {
                    var b = a.data,
                        c = b.heading,
                        e = b.data;
                    return (0, d.jsx)("div", {
                        className: "mk-maps",
                        children: (0, d.jsx)("div", {
                            className: "container h100per-min100vh d-flex",
                            children: (0, d.jsxs)("div", {
                                className: "mk-maps-container",
                                children: [
                                    (0, d.jsx)(E, { text: c }),
                                    e.map(function (a, b) {
                                        return (0,
                                        d.jsx)("div", { "data-aos": "fade-down-right", children: (0, d.jsxs)("div", { className: "mk-box", children: [(0, d.jsxs)("div", { className: "row", children: [(0, d.jsx)("div", { "data-aos": "zoom-in-left", className: "col-3 d-flex flex-column justify-content-center px-sm-3 p-0", children: (0, d.jsx)("img", { src: a.logo, className: "mk-gsv-logo" }) }), (0, d.jsxs)("div", { className: "col-9 d-flex flex-column justify-content-center mt-2 mb-2", children: [(0, d.jsx)("div", { "data-aos": "zoom-in-right", className: "mk-box-heading", children: a.title }), (0, d.jsx)("div", { "data-aos": "zoom-in-left", className: "mk-box-subheading", children: a.description })] })] }), (0, d.jsx)("div", { "data-aos": "zoom-in-right", className: "mk-box-para", children: a.paragraph }), (0, d.jsx)("div", { "data-aos": "zoom-in-left", className: "mk-box-iframe-wrapper mk-assets-hover-filter", children: (0, d.jsx)("iframe", { width: "560", height: "315", className: "mk-box-iframe", src: a.iframe, title: a.iframeTitle, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: !0 }) })] }) }, b);
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            F.propTypes = {};
            var G = F,
                H = function (a) {
                    var b = a.parentClassName,
                        c = a.imageClassName,
                        e = a.filterClassName,
                        f = a.borderClassName,
                        g = a.showFilter,
                        h = a.showBorder,
                        i = a.src;
                    return (0, d.jsxs)("div", {
                        className: "mk-hover-image ".concat(b),
                        children: [
                            h && (0, d.jsx)("div", { className: "mk-hover-image-border ".concat(f) }),
                            g && (0, d.jsx)("div", { className: "mk-hover-image-filter ".concat(e) }),
                            (0, d.jsx)("img", { alt: i, className: "mk-hover-profile ".concat(c), src: i }),
                        ],
                    });
                };
            H.propTypes = {};
            var I = H,
                J = function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            xmlns: "http://www.w3.org/2000/svg",
                            id: "Layer_1",
                            "data-name": "Layer 1",
                            viewBox: "0 0 68 66",
                            children: [
                                (0, d.jsx)("defs", {}),
                                (0, d.jsx)("title", { children: "kubernetes_icons" }),
                                (0, d.jsx)("path", {
                                    className: "cls-1",
                                    d:
                                        "M62.94206,39.30176c-.14868-.03428-.361-.09292-.50677-.11977a14.71841,14.71841,0,0,0-1.67107-.13464,16.2992,16.2992,0,0,1-3.12656-.513,1.9597,1.9597,0,0,1-.75169-.75665l-.70378-.20486A22.64869,22.64869,0,0,0,52.55176,21.8852c.18008-.16356.52123-.46547.61746-.55427a1.3787,1.3787,0,0,1,.32711-.98712,16.31266,16.31266,0,0,1,2.59252-1.82141,14.49625,14.49625,0,0,0,1.44845-.845c.11234-.08343.266-.2156.3837-.30977a1.752,1.752,0,1,0-2.17083-2.72592c-.11894.09376-.28085.21684-.38658.30853a14.45744,14.45744,0,0,0-1.15191,1.2184,16.32712,16.32712,0,0,1-2.35008,2.12622,1.937,1.937,0,0,1-1.05732.11482l-.66331.47373a22.84364,22.84364,0,0,0-14.46885-6.99116c-.01611-.2317-.03594-.65133-.04213-.77812a1.38116,1.38116,0,0,1-.56873-.87147,16.32741,16.32741,0,0,1,.19743-3.16207,14.50184,14.50184,0,0,0,.23748-1.657c.00537-.14043-.00289-.34446-.00289-.496a1.752,1.752,0,1,0-3.48629.00165c0,.01652.00372.03221.00413.04873-.00165.14456-.00867.31968-.00413.44607a14.652,14.652,0,0,0,.2379,1.65826,16.30436,16.30436,0,0,1,.19412,3.16124,1.90033,1.90033,0,0,1-.56584.90121l-.0413.73765a22.73722,22.73722,0,0,0-3.15133.48447A22.42237,22.42237,0,0,0,17.292,18.87347q-.318-.21931-.63027-.44689a1.37655,1.37655,0,0,1-1.035-.10036,16.2653,16.2653,0,0,1-2.35008-2.12332,14.55977,14.55977,0,0,0-1.147-1.21841c-.10614-.09086-.26846-.21476-.38741-.30976a2.07752,2.07752,0,0,0-1.2151-.45845,1.67933,1.67933,0,0,0-1.389.6154,1.84744,1.84744,0,0,0,.42871,2.5698l.02685.019c.114.09334.25442.21271.36015.28994a14.56165,14.56165,0,0,0,1.44515.84586,16.25954,16.25954,0,0,1,2.5921,1.82224,1.937,1.937,0,0,1,.35066,1.00529l.558.49892a22.5562,22.5562,0,0,0-3.5565,15.72485l-.7298.21229a2.41,2.41,0,0,1-.74921.75458,16.26839,16.26839,0,0,1-3.12449.515,14.56589,14.56589,0,0,0-1.67231.13464c-.13382.02478-.31967.07187-.46547.10821l-.01528.00331-.02478.00743a1.74955,1.74955,0,1,0,.77441,3.39667l.026-.00413c.01156-.00248.02147-.00826.033-.01032.14373-.03305.32463-.06732.451-.10161a14.69936,14.69936,0,0,0,1.56368-.59929,16.32534,16.32534,0,0,1,3.039-.89418,1.933,1.933,0,0,1,1.002.354l.76-.1301A22.68377,22.68377,0,0,0,22.26389,53.90444l-.31761.76a1.72965,1.72965,0,0,1,.15571.98587,17.02778,17.02778,0,0,1-1.57773,2.83495,14.53108,14.53108,0,0,0-.93466,1.3927c-.06939.13134-.15736.33248-.22386.47a1.75037,1.75037,0,1,0,3.14762,1.49348l.00289-.00331V61.834c.06608-.1363.15984-.31514.2156-.44276a14.4168,14.4168,0,0,0,.503-1.59755,12.191,12.191,0,0,1,1.34975-3.13151,1.4167,1.4167,0,0,1,.75128-.36676l.39525-.71452a22.55783,22.55783,0,0,0,16.08541.04089c.11069.19742.3172.57492.37171.67033a1.37739,1.37739,0,0,1,.89006.54105,16.23426,16.23426,0,0,1,1.19692,2.93078,14.5697,14.5697,0,0,0,.50595,1.59755c.05658.12886.14869.30976.2156.44688a1.75119,1.75119,0,1,0,3.15133-1.48975c-.0665-.13753-.15819-.33868-.22716-.46919A14.48039,14.48039,0,0,0,46.98634,58.46a16.26143,16.26143,0,0,1-1.54552-2.76722,1.36873,1.36873,0,0,1,.13382-1.02842,5.99541,5.99541,0,0,1-.29035-.70337A22.683,22.683,0,0,0,55.3322,41.3206c.22551.03593.61828.10449.74591.13051a1.37823,1.37823,0,0,1,.97472-.36222,16.30543,16.30543,0,0,1,3.03981.89418,14.511,14.511,0,0,0,1.56452.60384c.126.033.30563.06443.45018.09623.012.00331.02272.00826.03428.01157l.02478.00372a1.74955,1.74955,0,1,0,.77565-3.39667ZM46.38,21.54735l-7.44961,5.28126-.026-.01239a1.53767,1.53767,0,0,1-2.44218-1.17214L36.454,25.64,35.93645,16.511a18.11083,18.11083,0,0,1,10.44317,5.03634ZM32.3465,31.554h2.80357L36.893,33.733l-.6249,2.71766-2.51776,1.21179-2.52519-1.21427-.62614-2.7189ZM29.709,16.83068a18.45074,18.45074,0,0,1,1.85982-.31967l-.51833,9.143-.038.01817A1.53643,1.53643,0,0,1,28.574,26.85009l-.01446.00826L21.0616,21.542A17.95264,17.95264,0,0,1,29.709,16.83068ZM18.3427,24.95888l6.84536,6.12258-.00743.03717a1.53642,1.53642,0,0,1-.60383,2.64125l-.007.02974-8.77458,2.5318a17.9473,17.9473,0,0,1,2.5475-11.36213ZM27.508,41.22354,24.0217,49.64787A18.04728,18.04728,0,0,1,16.779,40.58295l8.99677-1.52817.01529.02024a1.5097,1.5097,0,0,1,.3015-.02685A1.53642,1.53642,0,0,1,27.482,41.18968ZM37.79875,52.057a18.02283,18.02283,0,0,1-9.836-.50512l4.42466-8.001h.00744a1.53849,1.53849,0,0,1,2.70816-.00247h.033l4.43582,8.0142q-.86362.28828-1.77309.49521Zm5.71659-2.37527-3.52222-8.51024.01073-.01528a1.5385,1.5385,0,0,1,.74467-1.992,1.522,1.522,0,0,1,.58856-.15282,1.48213,1.48213,0,0,1,.35312.026l.01529-.019,9.0769,1.53395a17.97868,17.97868,0,0,1-7.267,9.12977Zm8.2203-13.39005-8.81877-2.54006-.00826-.03717a1.53849,1.53849,0,0,1-.603-2.64125l-.0033-.01776L49.10966,24.963A18.288,18.288,0,0,1,51.73521,36.2921Z",
                                }),
                            ],
                        })
                    );
                };
            J.propTypes = {};
            var K = J,
                L = function (a) {
                    var b = a.text;
                    return (0, d.jsx)("div", { "data-aos": "zoom-in-left", className: "mk-myself-paragraph", children: b });
                },
                M = function (a) {
                    var b = a.items;
                    return (0, d.jsx)("div", {
                        className: "col",
                        children: (b || []).map(function (a) {
                            return (0, d.jsx)("div", { "data-aos": "zoom-in-left", className: "mk-myself-skill", children: a }, a);
                        }),
                    });
                },
                N = function (a) {
                    var b = a.list1,
                        c = a.list2;
                    return (0, d.jsxs)("div", { className: "mk-myself-list-parent row", children: [(0, d.jsx)(M, { items: b }), (0, d.jsx)(M, { items: c })] });
                },
                O = function (a) {
                    var b = a.data,
                        c = b.heading,
                        f = b.paragraphs,
                        g = b.techList1,
                        h = b.techList2,
                        i = b.image,
                        j = (0, e.YT)({ speed: -20, easing: [1, 1.5, 0.5, 2], rotate: [0, 360] }).ref;
                    return (0, d.jsxs)("div", {
                        className: "mk-myself",
                        children: [
                            (0, d.jsx)("div", { ref: j, className: "mk-myself-settings-icon", children: (0, d.jsx)(K, {}) }),
                            (0, d.jsx)("div", {
                                className: "container",
                                children: (0, d.jsxs)("div", {
                                    "data-aos": "fade-down-left",
                                    className: "mk-myself-container",
                                    children: [
                                        (0, d.jsx)(E, { text: c }),
                                        (0, d.jsxs)("div", {
                                            className: "row justify-content-center",
                                            children: [
                                                (0, d.jsx)("div", {
                                                    className: "col-12 col-md-8",
                                                    children: (0, d.jsxs)("div", {
                                                        className: "",
                                                        children: [
                                                            (f || []).map(function (a, b) {
                                                                return (0, d.jsx)(L, { text: a }, b);
                                                            }),
                                                            (0, d.jsx)(N, { list1: g, list2: h }),
                                                        ],
                                                    }),
                                                }),
                                                (0, d.jsx)("div", {
                                                    className: "col-12 col-md-4 mt-5 mt-md-0",
                                                    children: (0, d.jsx)("div", {
                                                        "data-aos": "zoom-in-right",
                                                        className: "mk-myself-profile-wrapper d-flex justify-content-center",
                                                        children: (0, d.jsx)(I, { showFilter: !0, showBorder: !0, imageClassName: "mk-myself-profile", parentClassName: "mk-myself-profile-parent", src: i }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
            O.propTypes = {};
            var P = O,
                Q = c(603),
                R = c(5148),
                S = { tension: 1200, friction: 40 },
                T = { mass: 10, tension: 200, friction: 50 },
                U = function (a, b) {
                    return "translate3d(".concat(a, "px,").concat(b, "px,0) translate3d(-50%,-50%,0)");
                };
            function V() {
                var a = (0, Q.Z)((0, R.q_)({ pos1: [0, 0], config: S }), 2),
                    b = a[0].pos1,
                    c = a[1],
                    e = (0, Q.Z)((0, R.q_)({ pos2: b, config: T }), 1)[0].pos2,
                    g = (0, Q.Z)((0, R.q_)({ pos3: e, config: T }), 1)[0].pos3;
                return (
                    (0, f.useEffect)(function () {
                        var a = function (a) {
                            var b = a.clientX,
                                d = a.clientY;
                            c({ pos1: [b, d] });
                        };
                        return (
                            window.addEventListener("mousemove", a),
                            function () {
                                return window.removeEventListener("mousemove", a);
                            }
                        );
                    }, []),
                    (0, d.jsxs)("div", {
                        className: "mk-gooery",
                        children: [
                            (0, d.jsx)("svg", {
                                style: { position: "absolute", width: 0, height: 0 },
                                children: (0, d.jsxs)("filter", {
                                    id: "goo",
                                    children: [(0, d.jsx)("feGaussianBlur", { in: "SourceGraphic", result: "blur", stdDeviation: "30" }), (0, d.jsx)("feColorMatrix", { in: "blur", values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" })],
                                }),
                            }),
                            (0, d.jsx)("div", {
                                className: "hooks-main",
                                children: (0, d.jsxs)("div", {
                                    className: "hooks-filter",
                                    children: [
                                        (0, d.jsx)(R.q.div, { className: "b1", style: { transform: g.interpolate(U) } }),
                                        (0, d.jsx)(R.q.div, { className: "b2", style: { transform: e.interpolate(U) } }),
                                        (0, d.jsx)(R.q.div, { className: "b3", style: { transform: b.interpolate(U) } }),
                                    ],
                                }),
                            }),
                        ],
                    })
                );
            }
            var W = c(1754),
                X = function (a) {
                    var b = a.values,
                        c = void 0 === b ? ["Empty"] : b,
                        e = a.delay,
                        g = void 0 === e ? 5e3 : e,
                        h = (0, W.q)(),
                        i = h.result,
                        j = h.dencrypt;
                    return (
                        (0, f.useEffect)(function () {
                            var a = 1,
                                b = setInterval(function () {
                                    j(c[a]), (a = a === c.length - 1 ? 0 : a + 1);
                                }, g);
                            return function () {
                                return clearInterval(b);
                            };
                        }, []),
                        (0, d.jsx)(d.Fragment, { children: i || c[0] })
                    );
                };
            X.propTypes = {};
            var Y = X,
                Z = function (a) {
                    var b = a.data,
                        c = b.title1,
                        e = b.title2,
                        f = b.decrypTexts,
                        g = b.description,
                        h = b.button;
                    return (0, d.jsx)("div", {
                        className: "mk-outer",
                        children: (0, d.jsx)("div", {
                            className: "container",
                            children: (0, d.jsxs)("div", {
                                className: "mk-outer-container d-flex justify-content-between align-items-center",
                                children: [
                                    (0, d.jsxs)("div", {
                                        className: "mk-outer-text",
                                        children: [
                                            (0, d.jsx)("div", { className: "mk-outer-heading", children: c }),
                                            (0, d.jsx)("div", { className: "mk-outer-heading", children: e }),
                                            (0, d.jsx)("div", { className: "mk-outer-heading2", children: (0, d.jsx)(Y, { values: f }) }),
                                            (0, d.jsx)("div", { className: "mk-outer-description", children: g }),
                                            (0, d.jsx)("div", { className: "mk-outer-contact", children: (0, d.jsx)("button", { onClick: null == h ? void 0 : h.onClick, className: "mk-button", children: null == h ? void 0 : h.label }) }),
                                        ],
                                    }),
                                    (0, d.jsx)("div", { className: "mk-outer-gooery", children: (0, d.jsx)(V, {}) }),
                                ],
                            }),
                        }),
                    });
                };
            Z.propTypes = {};
            var $ = Z,
                _ = function (a) {
                    var b = a.children,
                        c = a.containerClassName;
                    return (0, d.jsx)("div", { className: "mk-window-screen ".concat(c), children: (0, d.jsx)("div", { children: b }) });
                };
            _.propTypes = {};
            var aa = _,
                ab = function (a) {
                    var b = a.src;
                    return (0, d.jsx)(I, { showFilter: !0, imageClassName: "mk-image", src: b });
                },
                ac = function (a) {
                    return a % 2 ? "left" : "right";
                },
                ad = function (a) {
                    var b = a.image,
                        c = a.index,
                        e = ac(c);
                    return (
                        console.log("\uD83D\uDE80 ~ file: index.js:16 ~ SingleProject ~ side:", e),
                        (0, d.jsx)("div", {
                            className: "mk-projects-single",
                            children: (0, d.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, d.jsx)("div", {
                                        className: "col-6 d-none d-lg-block",
                                        children: (0, d.jsx)("div", {
                                            className: "",
                                            children: (0, d.jsx)(aa, { containerClassName: "mk-projects-image-container mk-projects-image-container-".concat(e), children: (0, d.jsx)(ab, { src: b }) }),
                                        }),
                                    }),
                                    (0, d.jsx)("div", { className: "col-12 col-lg-6 d-flex align-items-center ".concat("right" === e ? "order-first" : ""), children: (0, d.jsx)(ae, (0, g.Z)({}, a)) }),
                                ],
                            }),
                        })
                    );
                },
                ae = function (a) {
                    var b = a.label,
                        c = a.title,
                        e = a.description,
                        f = a.techs,
                        g = a.index,
                        h = a.image,
                        i = ac(g);
                    return (0, d.jsxs)("div", {
                        "data-aos": "fade-down-".concat(i),
                        className: "mk-projects-text-side mk-projects-text-side-".concat(i),
                        children: [
                            (0, d.jsx)("div", { "data-aos": "zoom-in-".concat(i), className: "mk-projects-text-featured", children: b }),
                            (0, d.jsx)("div", { "data-aos": "zoom-in-".concat(i), className: "mk-projects-text-title", children: c }),
                            (0, d.jsxs)("div", {
                                "data-aos": "zoom-in-".concat(i),
                                className: "mk-projects-text-description text-left",
                                children: [e, (0, d.jsx)("div", { className: "mt-4 d-block d-lg-none", children: (0, d.jsx)(aa, { containerClassName: "mk-text-image-container", children: (0, d.jsx)(ab, { src: h }) }) })],
                            }),
                            (0, d.jsx)("div", {
                                "data-aos": "zoom-in-".concat(i),
                                className: "mk-projects-text-tecs",
                                children: f.map(function (a, b) {
                                    return "".concat(a, " ").concat(f.length - 1 !== b ? " | " : "");
                                }),
                            }),
                        ],
                    });
                },
                af = function (a) {
                    var b = a.data,
                        c = b.heading,
                        e = b.list;
                    return (0, d.jsx)("div", {
                        className: "mk-projects",
                        children: (0, d.jsx)("div", {
                            className: "container",
                            children: (0, d.jsxs)("div", {
                                className: "mk-projects-container",
                                children: [
                                    (0, d.jsx)(E, { text: c }),
                                    (0, d.jsx)("div", {
                                        className: "row justify-content-center",
                                        children: (e || []).map(function (a, b) {
                                            return (0, d.jsx)(ad, (0, g.Z)({ index: b }, a), b);
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            af.propTypes = {};
            var ag = af,
                ah = function (a) {
                    var b,
                        c = a.index % 2;
                    return {
                        translateX: { 0: ["-0%", "".concat(110, "%")], 1: ["0%", "-".concat(110, "%")] }[c],
                        scale: {}[c],
                        alignSelf: { 0: "self-end", 1: "self-start" }[c],
                        rotate: { 0: [0, 4], 1: [0, -4] }[c],
                        theme: { 0: "theme1", 1: "theme2" }[c],
                    };
                },
                ai = function (a) {
                    var b = a.text,
                        c = a.index,
                        i = a.client,
                        j = a.via,
                        k = (0, f.useRef)(),
                        l = (0, f.useState)(0),
                        m = l[0],
                        n = l[1],
                        o = (0, f.useState)(0),
                        p = o[0],
                        q = o[1];
                    (0, f.useEffect)(function () {
                        window.addEventListener("resize", r),
                            setTimeout(function () {
                                r();
                            }, 3e3);
                    }, []);
                    var r = function () {
                            var a = window.innerHeight,
                                b = (null == k ? void 0 : k.current).getBoundingClientRect().top + window.scrollY + 150;
                            n(b - a), q(b + a);
                        },
                        s = ah({ text: b, index: c }),
                        t = s.scale,
                        u = s.translateX,
                        v = s.alignSelf,
                        w = s.rotate,
                        x = s.theme;
                    return (0, d.jsxs)(
                        e.VS,
                        (0, h.Z)((0, g.Z)({ translateX: u, scale: t, rotate: w, easing: "easeOutBack" }, m && { startScroll: m }, p && { endScroll: p }), {
                            style: { width: "fit-content", alignSelf: v, transition: "all 1000ms cubic-bezier(0.18, 0.89, 0.32, 1.28)" },
                            children: [
                                (0, d.jsxs)("div", { ref: k, className: "mk-review-item-info mk-reviwe-color-".concat(x, "-invert"), children: [i, " via ", j] }),
                                (0, d.jsx)("div", { className: "mk-review-item mk-reviwe-color-".concat(x), children: '"'.concat(b, '"') }),
                            ],
                        })
                    );
                },
                aj = function (a) {
                    var b = a.data,
                        c = b.heading,
                        e = b.list;
                    return (0, d.jsxs)("div", {
                        className: "mk-reviews",
                        children: [
                            (0, d.jsx)("div", { className: "container", children: (0, d.jsx)("div", { className: "mk-reviews-container", children: (0, d.jsx)(E, { text: c }) }) }),
                            (0, d.jsx)("div", {
                                className: "mk-reviews-list",
                                children: (e || []).map(function (a, b) {
                                    return (0, d.jsx)(ai, { index: b, text: a.review, client: a.client, via: a.via }, b);
                                }),
                            }),
                        ],
                    });
                };
            aj.propTypes = {};
            var ak = aj,
                al = function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-github",
                            children: [
                                (0, d.jsx)("title", { children: "GitHub" }),
                                (0, d.jsx)("path", {
                                    d:
                                        "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                                }),
                            ],
                        })
                    );
                };
            al.propTypes = {};
            var am = al,
                an = function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-instagram",
                            children: [
                                (0, d.jsx)("title", { children: "Instagram" }),
                                (0, d.jsx)("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
                                (0, d.jsx)("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
                                (0, d.jsx)("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }),
                            ],
                        })
                    );
                };
            an.propTypes = {};
            var ao = an,
                ap = function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-linkedin",
                            children: [
                                (0, d.jsx)("title", { children: "LinkedIn" }),
                                (0, d.jsx)("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
                                (0, d.jsx)("rect", { x: "2", y: "9", width: "4", height: "12" }),
                                (0, d.jsx)("circle", { cx: "4", cy: "4", r: "2" }),
                            ],
                        })
                    );
                };
            ap.propTypes = {};
            var aq = ap,
                ar = function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-twitter",
                            children: [
                                (0, d.jsx)("title", { children: "Twitter" }),
                                (0, d.jsx)("path", { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }),
                            ],
                        })
                    );
                };
            ar.propTypes = {};
            var as = ar,
                at = function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "feather feather-youtube",
                            children: [
                                (0, d.jsx)("title", { children: "YouTube" }),
                                (0, d.jsx)("path", {
                                    d:
                                        "M22.54 6.42a2.78 2.78 0 0 0-1.95-2c-1.72-.47-8.59-.47-8.59-.47s-6.87 0-8.59.47a2.78 2.78 0 0 0-1.95 2 29.94 29.94 0 0 0 0 11.16 2.78 2.78 0 0 0 1.95 2c1.72.47 8.59.47 8.59.47s6.87 0 8.59-.47a2.78 2.78 0 0 0 1.95-2 29.94 29.94 0 0 0 0-11.16z",
                                }),
                                (0, d.jsx)("polygon", { points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" }),
                            ],
                        })
                    );
                };
            at.propTypes = {};
            var au = at,
                av = function (a) {
                    var b = a.items,
                        c = a.position;
                    return (0, d.jsxs)("div", {
                        className: "mk-side-elements-container mk-side-elements-".concat(c),
                        children: [
                            (b || []).map(function (a, b) {
                                return (0, d.jsx)("div", { className: "mk-side-elements-item", children: a }, b);
                            }),
                            (0, d.jsx)("div", { className: "mk-side-elements-line" }),
                        ],
                    });
                },
                aw = function (a) {
                    var b = a.data,
                        c = b.emailButton,
                        e = b.handleIconClick;
                    return (0, d.jsxs)("div", {
                        className: "mk-side-elements",
                        children: [
                            (0, d.jsx)(av, {
                                position: "left",
                                items: [
                                    (0, d.jsx)(
                                        am,
                                        {
                                            onClick: function () {
                                                return e("github");
                                            },
                                            width: 20,
                                            height: 20,
                                        },
                                        "GitHub"
                                    ),
                                    (0, d.jsx)(
                                        au,
                                        {
                                            onClick: function () {
                                                return e("youtube");
                                            },
                                            width: 20,
                                            height: 20,
                                        },
                                        "YitHub"
                                    ),
                                    (0, d.jsx)(
                                        ao,
                                        {
                                            onClick: function () {
                                                return e("instagram");
                                            },
                                            width: 20,
                                            height: 20,
                                        },
                                        "Instagram"
                                    ),
                                    (0, d.jsx)(
                                        as,
                                        {
                                            onClick: function () {
                                                return e("twitter");
                                            },
                                            width: 20,
                                            height: 20,
                                        },
                                        "Twitter"
                                    ),
                                    (0, d.jsx)(
                                        aq,
                                        {
                                            onClick: function () {
                                                return e("linkedin");
                                            },
                                            width: 20,
                                            height: 20,
                                        },
                                        "LinkedIn"
                                    ),
                                ],
                            }),
                            (0, d.jsx)(av, { position: "right", items: [(0, d.jsx)("div", { onClick: null == c ? void 0 : c.onClick, className: "mk-side-elements-text", children: null == c ? void 0 : c.label }, "website")] }),
                        ],
                    });
                };
            aw.propTypes = {};
            var ax = aw,
                ay = function (a) {
                    var b = (0, f.useState)(0),
                        c = b[0],
                        e = b[1];
                    (0, f.useEffect)(function () {
                        window.addEventListener("scroll", g), g();
                    }, []);
                    var g = function () {
                        var a,
                            b,
                            c = window.innerHeight,
                            d = null == window ? void 0 : null === (a = window.document) || void 0 === a ? void 0 : null === (b = a.documentElement) || void 0 === b ? void 0 : b.scrollHeight,
                            f = window.pageYOffset;
                        e((f / (d - c)) * 100 || 0);
                    };
                    return (0, d.jsx)("div", { className: "mk-top-scrolled", children: (0, d.jsx)("div", { className: "mk-top-scrolled-highlight", style: { transform: "translateX(".concat(-100 + c, "%)") } }) });
                };
            ay.propTypes = {};
            var az = ay,
                aA = function (a) {
                    var b = a.text;
                    return (0, d.jsx)("div", { className: "mk-works-tab-right-list-item", children: b });
                },
                aB = function (a) {
                    var b = a.list,
                        c = (0, f.useState)(0),
                        e = c[0],
                        g = c[1],
                        h = b[e];
                    return (0, d.jsx)("div", {
                        children: (0, d.jsxs)("div", {
                            className: "mk-works-tab",
                            children: [
                                (0, d.jsx)("div", { className: "mk-works-left-border", children: (0, d.jsx)("div", { style: { transform: "translateY(".concat(42 * e, "px)") }, className: "mk-works-left-border-selection" }) }),
                                (0, d.jsx)("div", {
                                    className: "mk-works-tab-left",
                                    children: (b || []).map(function (a, b) {
                                        return (0, d.jsx)(
                                            "div",
                                            {
                                                "data-aos": "zoom-in-left",
                                                children: (0, d.jsx)("div", {
                                                    onClick: function () {
                                                        return g(b);
                                                    },
                                                    className: "mk-works-tab-left-button ".concat(e === b ? "mk-works-tab-left-button-selected" : ""),
                                                    children: a.company,
                                                }),
                                            },
                                            b
                                        );
                                    }),
                                }),
                                (0, d.jsx)("div", {
                                    className: "mk-works-tab-right",
                                    children:
                                        h &&
                                        (0, d.jsxs)(d.Fragment, {
                                            children: [
                                                (0, d.jsx)("div", { "data-aos": "zoom-in-right", className: "mk-works-tab-right-title", children: "".concat(h.role, " @ ").concat(h.company) }),
                                                (0, d.jsx)("div", { "data-aos": "zoom-in-right", className: "mk-works-tab-right-duration", children: h.duration }),
                                                (0, d.jsx)("div", {
                                                    "data-aos": "zoom-in-right",
                                                    className: "mk-works-tab-right-list",
                                                    children: (h.points || []).map(function (a, b) {
                                                        return (0, d.jsx)(aA, { text: a }, b);
                                                    }),
                                                }),
                                            ],
                                        }),
                                }),
                            ],
                        }),
                    });
                },
                aC = function (a) {
                    var b = a.data,
                        c = b.heading,
                        e = b.experiences;
                    return (0, d.jsx)("div", {
                        className: "mk-works",
                        children: (0, d.jsx)("div", {
                            className: "container h100per-min100vh d-flex justify-content-center",
                            children: (0, d.jsxs)("div", { "data-aos": "fade-down-left", className: "mk-works-container", children: [(0, d.jsx)(E, { text: c }), (0, d.jsx)(aB, { list: e })] }),
                        }),
                    });
                };
            aC.propTypes = {};
            var aD = aC;
            function aE(a) {
                c.g.document.getElementById(a).scrollIntoView({ behavior: "smooth" });
            }
            function aF(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_blank";
                window.open(a, b);
            }
            var aG,
                aH = {
                    title1: "G'day, I'm",
                    title2: "Mohammed Imran ,",
                    decrypTexts: ["AI & Data Science Developer", "I'm a Deep Learning Engineer","I'm a Web Developer", "I'm a Python Developer" ],
                    description:
                        "Being an AI student, I've worked with various programming languages and completed multiple projects in areas like machine learning and deep learning. These projects have helped me gain practical skills by applying what I've learned to real-life problems, which has made me more confident in my abilities. I'm always looking to improve and learn more, and I enjoy finding new ways to use AI and programming to create useful solutions.",
                    button: {
                        label: "Contact me!",
                        onClick: function () {
                            return aF("mailto: officialmail.imrank@gmail.com?subject=Greetings");
                        },
                    },
                },
                aI = {
                    heading: "My Portfolio",
                    paragraphs: [
                        "Greetings, I'm Mohammed Imran, a passionate AI & Data Science Developer with hands-on experience in building intelligent systems and full-stack applications using modern technologies. With a deep interest in artificial intelligence and a strong academic foundation, I specialize in applying machine learning, deep learning, and data-driven techniques to solve real-world problems.",
                        "Over the years, I have developed and contributed to several innovative projects, including Smart India Hackathon entries and AI-powered platforms in healthcare, finance, and travel. My technical expertise spans across Python, JavaScript, React, and data science tools, enabling me to create scalable and efficient applications that deliver real value.",
                        "Driven by curiosity and a love for learning, I constantly explore new AI trends and technologies to stay ahead in this fast-evolving field. Beyond technical skills, I take pride in being a proactive team player who thrives in collaborative environments and adapts quickly to new challenges.",
                        "In addition to my academic and technical pursuits, I actively participate in hackathons, workshops, and coding competitions. I'm currently building my personal portfolio to showcase my journey, innovations, and impact in the field of AI.",
                        "I'm always open to exciting opportunities that allow me to apply my skills, learn continuously, and make meaningful contributions. Let's connect and collaborate to create solutions that matter.",
                    ],
                    techList1: ["Python", "C/C++", "Firebase", "Java", "Deep Learning"],
                    techList2: ["Node.js", "Express.js", "AWS", "MongoDB", "React JS"],
                    image: "/assets/profile1.jpg",
                },
                aJ = {
                  heading: "My Work Experiences",
                  experiences: [
                    {
                      company: "Smart India Hackathon (SIH)",
                      role: "AI & Data Science Developer",
                      duration: "Remote | 2023 - Present",
                      points: [
                        "Contributed to projects like Dynamic Route Rationalization and Reboot Medical Helper under SIH.",
                        "Built AI-driven applications for smart city, healthcare, and tourism sectors using ML and data science.",
                        "Collaborated with multi-disciplinary teams on national-level innovation problems.",
                      ],
                    },
                    {
                      company: "Independent Developer",
                      role: "AI/ML & Full Stack Project Builder",
                      duration: "Freelance | 2022 - Present",
                      points: [
                        "Created end-to-end solutions using Python, JavaScript, HTML/CSS, and React.",
                        "Developed intelligent systems including AI Personal Assistant, Stock Market Prediction, and Chatbots.",
                        "Integrated data pipelines, APIs, and UI for smooth deployment of web and desktop apps.",
                      ],
                    },
                    {
                      company: "Hackathons & Academic R&D",
                      role: "AI & Web Developer",
                      duration: "Onsite/Remote | 2021 - Present",
                      points: [
                        "Awarded 3rd prize at Paavai Engineering Paper Presentation on AI.",
                        "Active contributor to workshops and 24hr coding hackathons across Tamil Nadu.",
                        "Earned certifications from IBM, GUVI, and HackerRank in software, AI, and data visualization.",
                      ],
                    },
                  ],
                },
                aK = {
                  heading: "Things I've Worked on, Some of Them",
                  list: [
                    {
                      image: "/assets/projects/ai_assistant.png",
                      label: "Featured Project",
                      title: "AI Personal Assistant",
                      description:
                        "A voice-based smart assistant developed using Python and NLP. Performs automation tasks, provides information, and interacts with users naturally.",
                      techs: ["Python", "Speech Recognition", "NLP", "AI"],
                    },
                    {
                      image: "/assets/projects/stock_prediction.png",
                      label: "Featured Project",
                      title: "Stock Market Prediction",
                      description:
                        "Predicts future stock prices using ML models trained on historical data. Includes visual insights and real-time analysis tools.",
                      techs: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
                    },
                    {
                      image: "/assets/projects/bus_tracker.png",
                      label: "Featured Project",
                      title: "CCET Bus Tracking System",
                      description:
                        "Real-time bus tracking web app using GPS and Firebase, allowing students to monitor live bus locations.",
                      techs: ["JavaScript", "Firebase", "HTML/CSS", "GPS"],
                    },
                    {
                      image: "/assets/projects/price_compare.png",
                      label: "Featured Project",
                      title: "Price Comparison System",
                      description:
                        "Web scraper for comparing prices across major e-commerce platforms. Helps users find the best deals in real time.",
                      techs: ["Python", "BeautifulSoup", "Selenium", "Web Scraping"],
                    },
                    {
                      image: "/assets/projects/medical_helper.png",
                      label: "Featured Project",
                      title: "Reboot Medical Helper",
                      description:
                        "AI-powered assistant for patients to schedule appointments, receive reminders, and manage health records. Built for SIH 2024.",
                      techs: ["Flask", "AI", "Healthcare", "Python"],
                    },
                    {
                      image: "/assets/projects/ecommerce_platform.png",
                      label: "Featured Project",
                      title: "E-commerce Platform",
                      description:
                        "Responsive e-commerce site with user authentication, cart system, and product filters built using React.",
                      techs: ["React JS", "HTML", "CSS", "REST API"],
                    },
                  ],
                },
                aL = {
  heading: "Some Projects",
  list: [
    {
      client: "Smart India Hackathon",
      via: "National Innovation Program",
      review: "Developed AI-based solutions like Dynamic Route Rationalization and Reboot Medical Helper, addressing real-world challenges using ML and data science.",
    },
    {
      client: "AI Personal Assistant",
      via: "Independent Project",
      review: "Built a smart assistant with voice command, automation, and NLP features using Python. Used for task scheduling, information retrieval, and user interaction.",
    },
    {
      client: "Stock Market Prediction",
      via: "Self-Research",
      review: "Created a stock prediction model using machine learning techniques like regression and time-series forecasting to analyze market trends.",
    },
    {
      client: "CCET Bus Tracker",
      via: "Academic Project",
      review: "Designed and deployed a real-time GPS-based bus tracking web app for campus commuters using JavaScript, Firebase, and Google Maps API.",
    },
    {
      client: "Price Comparison Tool",
      via: "Freelance Development",
      review: "Python-based web scraping system that compared prices from various online retailers to assist users in smart shopping.",
    },
    {
      client: "E-commerce Platform",
      via: "Frontend & Backend Practice",
      review: "Developed a full-featured e-commerce website with product filtering, cart system, and user authentication using React and REST APIs.",
    },
    {
      client: "Chatbot",
      via: "AI/NLP Implementation",
      review: "Built a conversational agent using Python and NLP that answers user queries and simulates intelligent dialogue.",
    },
    {
      client: "Face Recognition System",
      via: "Deep Learning Research",
      review: "Implemented facial recognition using OpenCV and deep neural networks for attendance and security purposes.",
    },
  ],
},
                aM = {
                    heading: "IMRAN",
                    data: [
                        {
                            logo: "/assets/youtube.png",
                            title: "Mr IMRAN - Youtube",
                            description: "",
                            paragraph:
                                "\n      fill this para!\n    ",
                            iframe: "https://www.youtube.com/",
                            iframeTitle: "YouTube video player",
                        },
                    ],
                },
                aN = {
                    label: "Get in touch",
                    heading: "Get in Touch",
                    description: "I’m currently open to freelance, internships, and collaboration on exciting projects — especially those in AI, full stack, or real-world innovation. Whether it's a proposal, opportunity, or just a hello — I’d love to hear from you.",
                    button: {
                        label: "Say Hello",
                        onClick: function () {
                            return aF("mailto: officialmail.imrank@gmail.com?subject=Greetings");
                        },
                    },
                    designAndBuiltBy: "Designed & Built By Mohammed Imran   ",
                    handleBuiltByClick: function () {
                        return aF("https://github.com/imranofficial1");
                    },
                },
                aO = {
                    menus: [
                        { title: "Home", id: "home" },
                        { title: "My Self", id: "my-self" },
                        { title: "Experience", id: "experience" },
                        { title: "My Work", id: "my-work" },
                        { title: "Projects", id: "reviews" },
                        { title: "Certifications", id: "certifications" },
                        { title: "My YouTube", id: "contributions" },
                        { title: "Contact", id: "contact" },
                    ],
                    rightBtn: {
                        label: "Curriculum Vitae | Resume",
                        onClick: function () {
                            return aF("assets/cv.pdf");
                        },
                    },
                    logo: { src: "/assets/photo-logo.png", alt: "mohammedimran" },
                    handleIconClick: function () {
                        return aE("home");
                    },
                    handleItemSelect: function (a) {
                        return aE(a.id);
                    },
                },
                aP = {
                    emailButton: {
                        label: " officialmail.imrank@gmail.com",
                        onClick: function () {
                            return aF("mailto: officialmail.imrank@gmail.com?subject=Greetings");
                        },
                    },
                    handleIconClick: function (a) {
                        aF(
                            {
                                github: "https://github.com/imranofficial1",
                                instagram: "https://www.instagram.com/theimran._.official?igsh=dWphYWVvYmtyc3px",
                                twitter: "Check out Mohammed Imran (@mdimranofficil1): https://x.com/mdimranofficil1?t=ZxURR9d6KhUHmnNtQ_rD8A&s=08",
                                linkedin: "https://www.linkedin.com/in/k-mohammed-imran-83441733a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                youtube: "https://www.youtube.com",
                            }[a]
                        );
                    },
                },
                aQ = c(5152),
                aR = c.n(aQ),
                aS = aR()(
                    function () {
                        return c.e(588).then(c.t.bind(c, 4588, 23));
                    },
                    {
                        loadableGenerated: {
                            webpack: function () {
                                return [4588];
                            },
                        },
                        ssr: !1,
                    }
                ),
                aT = function () {
                    var a = function (a) {
                            e(a.clientX), i(a.clientY);
                        },
                        b = (0, f.useState)(0),
                        c = b[0],
                        e = b[1],
                        g = (0, f.useState)(0),
                        h = g[0],
                        i = g[1];
                    return (
                        (0, f.useEffect)(function () {
                            window.addEventListener("mousemove", a);
                        }, []),
                        (0, d.jsxs)("div", {
                            children: [
                                (0, d.jsxs)("div", {
                                    style: { top: h, left: c },
                                    className: "mk-cursor-line-box",
                                    children: [(0, d.jsx)("div", { className: "mk-cursor-line-right-1" }), (0, d.jsx)("div", { className: "mk-cursor-line-bottom-1" })],
                                }),
                                (0, d.jsx)(aS, {
                                    innerSize: 4,
                                    outerSize: 28,
                                    outerAlpha: 0,
                                    innerScale: 4,
                                    outerScale: 0,
                                    clickables: ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", "svg", ".link"],
                                    outerStyle: { border: "1px solid var(--themeColor4)" },
                                    innerStyle: { backgroundColor: "var(--themeColor4)" },
                                }),
                            ],
                        })
                    );
                };
            ((function (a) {
                return (0, d.jsxs)(
                    "svg",
                    (0, h.Z)((0, g.Z)({}, a), {
                        version: "1.2",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1000 1000",
                        width: "1000",
                        height: "1000",
                        children: [
                            (0, d.jsx)("title", { children: "A" }),
                            (0, d.jsx)("g", {
                                id: "Folder 1",
                                fill: "inherit",
                                children: (0, d.jsx)("path", {
                                    id: "Shape 8",
                                    fillRule: "evenodd",
                                    className: "s0",
                                    d:
                                        "m558 619l1-19 1-16v-9l1-6 2-6 10-10 4-2h5l4 4 3 16-1 27-3 66-3 83-37 148 8-115v-12l2-27 8-25 3-12 7-52 5-44h-11l-2 4-1 9zm22-18.6c0.2 0-0.3-5.2-0.6-6.2-1.6-5.1 0.6-11.3-5.8-13.2-2.7-0.9-5.6 2.1-6.3 4.7-1.4 5.5-0.6 9.5-1.3 15.3 0 0 13.7-0.5 14-0.6z",
                                }),
                            }),
                            (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                        ],
                    })
                );
            }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "B" }),
                                (0, d.jsx)("g", {
                                    id: "Folder 1",
                                    fill: "inherit",
                                    children: (0, d.jsx)("path", {
                                        id: "Shape 15",
                                        fillRule: "evenodd",
                                        className: "s0",
                                        d:
                                            "m644 153l-6-5-12-12.3 17 0.3 7.8-4.4 10.7-4.9c0 0 19.7 1 24.8 8 8.3 11.8-3.3 19.3-3.3 19.3 0 0 22.9-6.7 39.8 18 20.7 30.2-36.5 44.2-36.5 44.2 0 0-40.4 4.4-77.8 2.3-71.5-4-113.3-5-113.3-5l27.8-1.5 14-2 32-2 33.3-1.5 46.5-3.8c-0.1 0 54-1.7 38.7-22.2-17.9-24.1-41 6.5-41 6.5zm13-2.5c0.3 7.3 15.3 11.1 16.1-1.1 0.5-8.2-1.1-10-8-10.2-8.7-0.1-8.4 1-8.1 11.3z",
                                    }),
                                }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "E1" }),
                                (0, d.jsx)("g", {
                                    id: "Folder 1",
                                    fill: "inherit",
                                    children: (0, d.jsx)("path", {
                                        id: "Shape 13",
                                        className: "s0",
                                        d: "m593.6 144.4l8.4 8.6c0 0-10.1 0.5-15.1 8.4-3.1 4.8-2.9 10.6-2.9 10.6l16.4 5.2-16.4 2.8 4 6 10-1h7l-1 9-13 2h-11l-6-6-5-8 1-14 3-11 6.2-8.9 7.8-3.1 5-0.5z",
                                    }),
                                }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "E2" }),
                                (0, d.jsx)("g", {
                                    id: "Folder 1",
                                    fill: "inherit",
                                    children: (0, d.jsx)("path", {
                                        id: "Shape 14",
                                        className: "s0",
                                        d: "m635.4 155.2l-11.4 1.8-11 9 24.6-0.8-16.6 9.8 21.4 0.2c-1.8 4.6-7.2 10.4-8.4 10.8-1.8 0.6-9.7 1.3-12.6 1.2-7-0.3-18.1-4.9-19-15.8-2.6-32.4 23.2-25.4 23.2-25.4z",
                                    }),
                                }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "H" }),
                                (0, d.jsx)("g", { id: "Folder 1", fill: "inherit", children: (0, d.jsx)("path", { id: "Shape 7", className: "s0", d: "m521 579l10-10 1 19 5 1 1-11 15-22-1 63v9l-11-8-4-16-1-5-7-1 2 11-10-4z" }) }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "K1" }),
                                (0, d.jsx)("g", { id: "Folder 1", fill: "inherit", children: (0, d.jsx)("path", { id: "Shape 4", className: "s0", d: "m527 307l48-62-8 50-3 22-7 31-35 184-14 80v67 34l-12-40 5-115z" }) }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "K2" }),
                                (0, d.jsx)("g", { id: "Folder 1", fill: "inherit", children: (0, d.jsx)("path", { id: "Shape 5", className: "s0", d: "m633 384l182-108-297 294-182 199-54 49 85-106 111-129 86-96z" }) }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "K3" }),
                                (0, d.jsx)("g", { id: "Folder 1", fill: "inherit", children: (0, d.jsx)("path", { id: "Shape 6", className: "s0", d: "m185 338l188 67 105 148 35 50 249 210 52 113-348-338-147-125-123-102z" }) }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "M" }),
                                (0, d.jsx)("g", {
                                    id: "Folder 1",
                                    fill: "inherit",
                                    children: (0, d.jsx)("path", { id: "Shape 2", className: "s0", d: "m416 429l-56-117 33-110 36 81v-79l56-67 35 558-52 196-22-117 51-103-34-401-12 111-56-94z" }),
                                }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "N" }),
                                (0, d.jsx)("g", { id: "Folder 1", fill: "inherit", children: (0, d.jsx)("path", { id: "Shape 12", className: "s0", d: "m536 194l-4-46 16-15 3 26 3 19 5-45-6-23-5-13 22-24 1 62-6 41-2 16-1 5-18-24v16z" }) }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "N2" }),
                                (0, d.jsx)("g", {
                                    id: "Folder 1",
                                    fill: "inherit",
                                    children: (0, d.jsx)("path", { id: "Shape 10", className: "s0", d: "m595 580l18-10 12 38 6-37 3-22 13-52 18-59 26 65-15 15-11 16-10 21-27 77-20-37 2 24-3 12h-10z" }),
                                }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}),
                (function (a) {
                    return (0, d.jsxs)(
                        "svg",
                        (0, h.Z)((0, g.Z)({}, a), {
                            version: "1.2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1000 1000",
                            width: "1000",
                            height: "1000",
                            children: [
                                (0, d.jsx)("title", { children: "U" }),
                                (0, d.jsx)("g", {
                                    id: "Folder 1",
                                    fill: "inherit",
                                    children: (0, d.jsx)("path", {
                                        id: "Shape 11",
                                        className: "s0",
                                        d:
                                            "m494 161.9c1.5-13.3 5.1-14.7 5.1-14.7l6.2-4.3-2.3 16.1 3 19 2 10 6-3-4-27c0 0 2-7.8 4.6-9.8 3.9-2.8 8.4-3.2 8.4-3.2l3 17 3 27c0 0-1.3 15.4-17.9 14.9-11.1-0.4-15.1-12.9-15.1-12.9 0 0-3-20.6-2-29.1z",
                                    }),
                                }),
                                (0, d.jsx)("path", { id: "Layer 2", fill: "none", className: "s1", d: "m0 0h1000v1000h-1000z" }),
                            ],
                        })
                    );
                }.propTypes = {}));
            var aU = c(1351);
            function aV(a) {
                var a = null !== a ? a : (0, aU.Z)(TypeError("Cannot destructure undefined")),
                    b = (0, f.useRef)(),
                    c = (0, f.useState)(!1),
                    e = c[0],
                    g = c[1];
                (0, f.useEffect)(function () {
                    window.addEventListener("scroll", i), i();
                }, []);
                var h = function () {
                        var a,
                            c = null == b ? void 0 : null === (a = b.current) || void 0 === a ? void 0 : a.getBoundingClientRect();
                        return (null == c ? void 0 : c.top) < window.innerHeight / 2;
                    },
                    i = function () {
                        g(h());
                    };
                return (0, d.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, ref: b, className: "mk-muneeb-khan ".concat(e ? "mk-muneeb-khan-visible" : ""), children: (0, d.jsx)(aW, {}) });
            }
            var aW = function (a) {
                return (0, d.jsxs)(
                    "svg",
                    (0, h.Z)((0, g.Z)({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 100 100" }, a), {
                        style: { height: 300, width: 300 },
                        children: [
                            (0, d.jsx)("circle", {
                                cx: 50,
                                cy: 50,
                                r: 47,
                                fill: "none",
                                stroke: "#808080",
                                strokeDasharray: "14.2472,14.2472",
                                strokeMiterlimit: 15,
                                strokeWidth: 6,
                                children: (0, d.jsx)("animateTransform", { attributeName: "transform", attributeType: "XML", dur: "5s", from: "0 50 50", repeatCount: "indefinite", to: "360 50 50", type: "rotate" }),
                            }),
                            (0, d.jsx)("circle", {
                                cx: 50,
                                cy: 50,
                                r: 39,
                                fill: "none",
                                stroke: "#808080",
                                strokeDasharray: "10,10",
                                strokeMiterlimit: 10,
                                children: (0, d.jsx)("animateTransform", { attributeName: "transform", attributeType: "XML", dur: "5s", from: "0 50 50", repeatCount: "indefinite", to: "-360 50 50", type: "rotate" }),
                            }),
                            (0, d.jsxs)("g", {
                                fill: "#808080",
                                children: [
                                    (0, d.jsx)("path", {
                                        d: "M30 35h5v30h-5z",
                                        children: (0, d.jsx)("animateTransform", { attributeName: "transform", begin: 0.1, dur: "1s", repeatCount: "indefinite", type: "translate", values: "0 5 ; 0 -5; 0 5" }),
                                    }),
                                    (0, d.jsx)("path", {
                                        d: "M40 35h5v30h-5z",
                                        children: (0, d.jsx)("animateTransform", { attributeName: "transform", begin: 0.2, dur: "1s", repeatCount: "indefinite", type: "translate", values: "0 5 ; 0 -5; 0 5" }),
                                    }),
                                    (0, d.jsx)("path", {
                                        d: "M50 35h5v30h-5z",
                                        children: (0, d.jsx)("animateTransform", { attributeName: "transform", begin: 0.3, dur: "1s", repeatCount: "indefinite", type: "translate", values: "0 5 ; 0 -5; 0 5" }),
                                    }),
                                    (0, d.jsx)("path", {
                                        d: "M60 35h5v30h-5z",
                                        children: (0, d.jsx)("animateTransform", { attributeName: "transform", begin: 0.4, dur: "1s", repeatCount: "indefinite", type: "translate", values: "0 5 ; 0 -5; 0 5" }),
                                    }),
                                    (0, d.jsx)("path", {
                                        d: "M70 35h5v30h-5z",
                                        children: (0, d.jsx)("animateTransform", { attributeName: "transform", begin: 0.5, dur: "1s", repeatCount: "indefinite", type: "translate", values: "0 5 ; 0 -5; 0 5" }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
            (aV.displayName = "LoadingComp"),
                (function () {
                    var a = (0, f.useState)(!0),
                        b = a[0],
                        c = a[1];
                    return (
                        (0, f.useEffect)(function () {
                            setTimeout(function () {
                                document.documentElement.style.setProperty("--scrollBarWidth", "8px"), c(!1);
                            }, 1500);
                        }, []),
                        (0, d.jsxs)("div", {
                            className: "mk-pre-loader ".concat(b ? "mk-pre-loader-enabled" : "mk-pre-loader-disabled"),
                            children: [(0, d.jsx)("div", { className: "mk-pre-loader-boarder" }), (0, d.jsx)("div", { className: "mk-pre-loader-container", children: (0, d.jsx)(aV, {}) })],
                        })
                    );
                }.propTypes = {});
            var aX = function (a) {
                return (0, d.jsxs)(
                    "svg",
                    (0, h.Z)((0, g.Z)({}, a), {
                        xmlns: "http://www.w3.org/2000/svg",
                        role: "img",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-external-link",
                        children: [
                            (0, d.jsx)("title", { children: "External Link" }),
                            (0, d.jsx)("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                            (0, d.jsx)("polyline", { points: "15 3 21 3 21 9" }),
                            (0, d.jsx)("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
                        ],
                    })
                );
            };
            aX.propTypes = {};
            var aY = aX,
                aZ = function (a) {
                    var b = a.logo,
                        c = a.title,
                        e = a.link,
                        f = a.date,
                        g = a.platform,
                        h = a.handleIconClick;
                    return (0, d.jsxs)("div", {
                        className: "mk-item-body p-4",
                        children: [
                            (0, d.jsxs)("div", {
                                className: "mk-item-head",
                                children: [
                                    (0, d.jsx)("div", { style: { backgroundImage: "url(".concat(b, ")") }, className: "mk-item-logo" }),
                                    (0, d.jsx)("div", {
                                        className: "mk-item-share",
                                        children:
                                            e &&
                                            (0, d.jsx)(
                                                aY,
                                                {
                                                    onClick: function () {
                                                        return h(e);
                                                    },
                                                    width: 22,
                                                    height: 22,
                                                },
                                                "share"
                                            ),
                                    }),
                                ],
                            }),
                            (0, d.jsxs)("div", { className: "flex-1", children: [(0, d.jsx)("div", { className: "mk-item-title", children: c }), (0, d.jsx)("div", { className: "mk-item-platform", children: g })] }),
                            (0, d.jsx)("div", { className: "mk-item-date", children: f }),
                        ],
                    });
                },
                a$ = function (a) {
                    var b = a.list,
                        c = a.handleIconClick;
                    return (0, d.jsx)("div", {
                        className: "row",
                        children: (b || []).map(function (a, b) {
                            return (0,
                            d.jsx)("div", { "data-aos": a.aos, className: "mk-certifications-item m-0 p-1\n            col-12 col-lg-".concat(4 * a.size), children: (0, d.jsx)(aZ, (0, h.Z)((0, g.Z)({}, a), { handleIconClick: c })) }, b);
                        }),
                    });
                },
                a_ = function (a) {
                    var b = a.data,
                        c = b.heading,
                        e = b.list,
                        f = b.handleIconClick;
                    return (0, d.jsx)("div", {
                        className: "mk-certifications",
                        children: (0, d.jsxs)("div", {
                            className: "container p-3",
                            children: [
                                (0, d.jsx)("div", { className: "mk-certifications-top-background" }),
                                (0, d.jsxs)("div", { className: "mk-certifications-container", children: [(0, d.jsx)(E, { text: c }), (0, d.jsx)("div", { children: (0, d.jsx)(a$, { list: e, handleIconClick: f }) })] }),
                            ],
                        }),
                    });
                };
            a_.propTypes = {};
            var a0 = a_,
                a1 = {
  heading: "Licenses & Certifications",
  list: [
    {
      size: 1,
      title: "Frontend Technologies",
      platform: "IBM",
      link: "https://courses.ibmcep.cognitiveclass.ai/certificates/27b27ee97b3a4befb95ba8708b8ba3b1",
      date: "Issued 2023 · No Expiration Date",
      logo: "/assets/ibm.png",
      aos: "zoom-out-left",
    },
    // {
    //   size: 1,
    //   title: "Full Stack Web Development (MERN Stack)",
    //   platform: "Skillhac",
    //   link: "https://www.skillhac.com/certificate/fullstack-mern",
    //   date: "Issued 2024 · No Expiration Date",
    //   logo: "/assets/skillhac.png",
    //   aos: "zoom-out-right",
    // },
    {
      size: 1,
      title: "Problem Solving (Intermediate)",
      platform: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/c98203e8ba05",
      date: "Issued 2023 · No Expiration Date",
      logo: "/assets/hackerrank.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Python (Basic)",
      platform: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/c825278ed64c",
      date: "Issued 2023 · No Expiration Date",
      logo: "/assets/hackerrank.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "Data Visualization using Python and R",
      platform: "Chettinad College",
      link: "https://chettinadcollege.edu/dv-python-r",
      date: "Issued 2023 · No Expiration Date",
      logo: "/assets/chettinad.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "AWS DeepRacer Workshop",
      platform: "KGiSL Institute",
      link: "https://kgisl.com/certificate/aws-deepracer",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/aws.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "NM-AU-TNcpl Certificate",
      platform: "GUVI",
      link: "https://www.guvi.in/certificate/nm-au-tncpl",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/guvi.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "R Programming Workshop",
      platform: "Chettinad College",
      link: "https://chettinadcollege.edu/r-programming",
      date: "Issued 2023 · No Expiration Date",
      logo: "/assets/chettinad.png",
      aos: "zoom-out-right",
    },
        {
      size: 1,
      title: "AMD AI Challenge Workshop",
      platform: "AMD India",
      link: "#",
      date: "Issued 2023 · No Expiration Date",
      logo: "/assets/amd.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "Professional Career Guidance",
      platform: "Skillhac",
      link: "#",
      date: "Issued 2023 · No Expiration Date",
      logo: "/assets/skillhac.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "NM-AU-TNcpl Certificate",
      platform: "GUVI",
      link: "#",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/guvi.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "Nextwave CCBP 4.0 Academy",
      platform: "Nextwave",
      link: "#",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/nextwave.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Paper Presentation (3rd Prize)",
      platform: "Paavai Engineering College",
      link: "#",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/paavai.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "Project Presentation",
      platform: "Paavai Engineering College",
      link: "#",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/paavai.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "24hr Hackathon",
      platform: "KPR Engineering College",
      link: "#",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/kpr.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "AI Workshop & Project Presentation",
      platform: "KPR Engineering College",
      link: "#",
      date: "Issued 2024 · No Expiration Date",
      logo: "/assets/kpr.png",
      aos: "zoom-out-left",
    }
  ],
  handleIconClick: aF,
},
                a2 = c(1519),
                a3 = c(5755),
                a4 = function (a) {
                    var b = a.children,
                        c = a.id;
                    return (0, d.jsx)("div", { id: c, className: "view-element", children: b });
                };
            function a5() {
                return (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(aT, {}),
                        (0, d.jsxs)(e.Xu, {
                            children: [
                                (0, d.jsx)(az, {}),
                                (0, d.jsx)(l, {}),
                                (0, d.jsx)(C, { data: aO }),
                                (0, d.jsx)(ax, { data: aP }),
                                (0, d.jsx)(a4, { id: "home", children: (0, d.jsx)($, { data: aH }) }),
                                (0, d.jsx)(a4, { id: "my-self", children: (0, d.jsx)(P, { data: aI }) }),
                                (0, d.jsx)(a4, { id: "experience", children: (0, d.jsx)(aD, { data: aJ }) }),
                                (0, d.jsx)(a4, { id: "my-work", children: (0, d.jsx)(ag, { data: aK }) }),
                                (0, d.jsx)(a4, { id: "reviews", children: (0, d.jsx)(ak, { data: aL }) }),
                                (0, d.jsx)(a4, { id: "certifications", children: (0, d.jsx)(a0, { data: a1 }) }),
                                (0, d.jsx)(a4, { id: "contributions", children: (0, d.jsx)(G, { data: aM }) }),
                                (0, d.jsx)(a4, { id: "contact", children: (0, d.jsx)(j, { data: aN }) }),
                                (0, d.jsx)(a2.c, {}),
                                (0, d.jsx)(a3.c, {}),
                            ],
                        }),
                    ],
                });
            }
        },
    },
    function (a) {
        a.O(0, [265, 774, 888, 179], function () {
            var b;
            return a((a.s = 5557));
        }),
            (_N_E = a.O());
    },
]);
