/*
 jQWidgets v4.5.1 (2017-April)
 Copyright (c) 2011-2017 jQWidgets.
 License: http://jqwidgets.com/license/
 */
!function ($) {
    "use strict";
    $.jqx.jqxWidget("jqxBarGauge", "", {}), $.extend($.jqx._jqxBarGauge.prototype, {
        defineInstance: function () {
            var a = {
                animationDuration: 300,
                backgroundColor: "#e0e0e0",
                barSpacing: 4,
                baseValue: null,
                colorScheme: "scheme01",
                customColorScheme: null,
                endAngle: -45,
                disabled: !1,
                formatFunction: null,
                geometry: {startAngle: 225, endAngle: -45},
                height: 400,
                labels: null,
                min: 0,
                max: 100,
                rendered: null,
                relativeInnerRadius: .3,
                startAngle: 225,
                title: null,
                tooltip: null,
                values: [],
                width: 400,
                useGradient: !0,
                _intervalArray: [],
                _drawnValues: [],
                _drawnSlices: [],
                _titleTemplate: {
                    text: "",
                    font: {
                        color: "#232323",
                        family: "'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                        opacity: 1,
                        size: 28,
                        weight: 100
                    },
                    horizontalAlignment: "center",
                    verticalAlignment: "top",
                    placeholderSize: null,
                    margin: {bottom: 0, left: 0, right: 0, top: 0},
                    subtitle: {
                        text: "",
                        font: {
                            color: "#232323",
                            family: "'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                            opacity: 1,
                            size: 16,
                            weight: 100
                        }
                    }
                },
                _labelTemplate: {
                    connectorColor: null,
                    connectorWidth: 1,
                    formatFunction: function (a) {
                        return a
                    },
                    font: {
                        color: null,
                        family: "'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana",
                        size: 16,
                        weight: 400
                    },
                    indent: 20,
                    precision: 2,
                    visible: !0
                },
                _tooltipTemplate: {
                    classname: "", formatFunction: function (a) {
                        return a
                    }, visible: !1, precision: 0
                },
                _colorSchemes: [{
                    name: "scheme01",
                    colors: ["#307DD7", "#AA4643", "#89A54E", "#71588F", "#4198AF"]
                }, {
                    name: "scheme02",
                    colors: ["#7FD13B", "#EA157A", "#FEB80A", "#00ADDC", "#738AC8"]
                }, {
                    name: "scheme03",
                    colors: ["#E8601A", "#FF9639", "#F5BD6A", "#599994", "#115D6E"]
                }, {
                    name: "scheme04",
                    colors: ["#D02841", "#FF7C41", "#FFC051", "#5B5F4D", "#364651"]
                }, {
                    name: "scheme05",
                    colors: ["#25A0DA", "#309B46", "#8EBC00", "#FF7515", "#FFAE00"]
                }, {
                    name: "scheme06",
                    colors: ["#0A3A4A", "#196674", "#33A6B2", "#9AC836", "#D0E64B"]
                }, {
                    name: "scheme07",
                    colors: ["#CC6B32", "#FFAB48", "#FFE7AD", "#A7C9AE", "#888A63"]
                }, {
                    name: "scheme08",
                    colors: ["#3F3943", "#01A2A6", "#29D9C2", "#BDF271", "#FFFFA6"]
                }, {
                    name: "scheme09",
                    colors: ["#1B2B32", "#37646F", "#A3ABAF", "#E1E7E8", "#B22E2F"]
                }, {
                    name: "scheme10",
                    colors: ["#5A4B53", "#9C3C58", "#DE2B5B", "#D86A41", "#D2A825"]
                }, {
                    name: "scheme11",
                    colors: ["#993144", "#FFA257", "#CCA56A", "#ADA072", "#949681"]
                }, {
                    name: "scheme12",
                    colors: ["#105B63", "#EEEAC5", "#FFD34E", "#DB9E36", "#BD4932"]
                }, {
                    name: "scheme13",
                    colors: ["#BBEBBC", "#F0EE94", "#F5C465", "#FA7642", "#FF1E54"]
                }, {
                    name: "scheme14",
                    colors: ["#60573E", "#F2EEAC", "#BFA575", "#A63841", "#BFB8A3"]
                }, {
                    name: "scheme15",
                    colors: ["#444546", "#FFBB6E", "#F28D00", "#D94F00", "#7F203B"]
                }, {
                    name: "scheme16",
                    colors: ["#583C39", "#674E49", "#948658", "#F0E99A", "#564E49"]
                }, {
                    name: "scheme17",
                    colors: ["#142D58", "#447F6E", "#E1B65B", "#C8782A", "#9E3E17"]
                }, {
                    name: "scheme18",
                    colors: ["#4D2B1F", "#635D61", "#7992A2", "#97BFD5", "#BFDCF5"]
                }, {
                    name: "scheme19",
                    colors: ["#844341", "#D5CC92", "#BBA146", "#897B26", "#55591C"]
                }, {
                    name: "scheme20",
                    colors: ["#56626B", "#6C9380", "#C0CA55", "#F07C6C", "#AD5472"]
                }, {
                    name: "scheme21",
                    colors: ["#96003A", "#FF7347", "#FFBC7B", "#FF4154", "#642223"]
                }, {
                    name: "scheme22",
                    colors: ["#5D7359", "#E0D697", "#D6AA5C", "#8C5430", "#661C0E"]
                }, {
                    name: "scheme23",
                    colors: ["#16193B", "#35478C", "#4E7AC7", "#7FB2F0", "#ADD5F7"]
                }, {
                    name: "scheme24",
                    colors: ["#7B1A25", "#BF5322", "#9DA860", "#CEA457", "#B67818"]
                }, {
                    name: "scheme25",
                    colors: ["#0081DA", "#3AAFFF", "#99C900", "#FFEB3D", "#309B46"]
                }, {
                    name: "scheme26",
                    colors: ["#0069A5", "#0098EE", "#7BD2F6", "#FFB800", "#FF6800"]
                }, {name: "scheme27", colors: ["#FF6800", "#A0A700", "#FF8D00", "#678900", "#0069A5"]}],
                _colors: ["#307DD7", "#AA4643", "#89A54E", "#71588F", "#4198AF"],
                _colorNames: {
                    aliceblue: "#f0f8ff",
                    antiquewhite: "#faebd7",
                    aqua: "#00ffff",
                    aquamarine: "#7fffd4",
                    azure: "#f0ffff",
                    beige: "#f5f5dc",
                    bisque: "#ffe4c4",
                    black: "#000000",
                    blanchedalmond: "#ffebcd",
                    blue: "#0000ff",
                    blueviolet: "#8a2be2",
                    brown: "#a52a2a",
                    burlywood: "#deb887",
                    cadetblue: "#5f9ea0",
                    chartreuse: "#7fff00",
                    chocolate: "#d2691e",
                    coral: "#ff7f50",
                    cornflowerblue: "#6495ed",
                    cornsilk: "#fff8dc",
                    crimson: "#dc143c",
                    cyan: "#00ffff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkgray: "#a9a9a9",
                    darkgreen: "#006400",
                    darkkhaki: "#bdb76b",
                    darkmagenta: "#8b008b",
                    darkolivegreen: "#556b2f",
                    darkorange: "#ff8c00",
                    darkorchid: "#9932cc",
                    darkred: "#8b0000",
                    darksalmon: "#e9967a",
                    darkseagreen: "#8fbc8f",
                    darkslateblue: "#483d8b",
                    darkslategray: "#2f4f4f",
                    darkturquoise: "#00ced1",
                    darkviolet: "#9400d3",
                    deeppink: "#ff1493",
                    deepskyblue: "#00bfff",
                    dimgray: "#696969",
                    dodgerblue: "#1e90ff",
                    firebrick: "#b22222",
                    floralwhite: "#fffaf0",
                    forestgreen: "#228b22",
                    fuchsia: "#ff00ff",
                    gainsboro: "#dcdcdc",
                    ghostwhite: "#f8f8ff",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gray: "#808080",
                    green: "#008000",
                    greenyellow: "#adff2f",
                    honeydew: "#f0fff0",
                    hotpink: "#ff69b4",
                    "indianred ": "#cd5c5c",
                    indigo: "#4b0082",
                    ivory: "#fffff0",
                    khaki: "#f0e68c",
                    lavender: "#e6e6fa",
                    lavenderblush: "#fff0f5",
                    lawngreen: "#7cfc00",
                    lemonchiffon: "#fffacd",
                    lightblue: "#add8e6",
                    lightcoral: "#f08080",
                    lightcyan: "#e0ffff",
                    lightgoldenrodyellow: "#fafad2",
                    lightgrey: "#d3d3d3",
                    lightgreen: "#90ee90",
                    lightpink: "#ffb6c1",
                    lightsalmon: "#ffa07a",
                    lightseagreen: "#20b2aa",
                    lightskyblue: "#87cefa",
                    lightslategray: "#778899",
                    lightsteelblue: "#b0c4de",
                    lightyellow: "#ffffe0",
                    lime: "#00ff00",
                    limegreen: "#32cd32",
                    linen: "#faf0e6",
                    magenta: "#ff00ff",
                    maroon: "#800000",
                    mediumaquamarine: "#66cdaa",
                    mediumblue: "#0000cd",
                    mediumorchid: "#ba55d3",
                    mediumpurple: "#9370d8",
                    mediumseagreen: "#3cb371",
                    mediumslateblue: "#7b68ee",
                    mediumspringgreen: "#00fa9a",
                    mediumturquoise: "#48d1cc",
                    mediumvioletred: "#c71585",
                    midnightblue: "#191970",
                    mintcream: "#f5fffa",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    oldlace: "#fdf5e6",
                    olive: "#808000",
                    olivedrab: "#6b8e23",
                    orange: "#ffa500",
                    orangered: "#ff4500",
                    orchid: "#da70d6",
                    palegoldenrod: "#eee8aa",
                    palegreen: "#98fb98",
                    paleturquoise: "#afeeee",
                    palevioletred: "#d87093",
                    papayawhip: "#ffefd5",
                    peachpuff: "#ffdab9",
                    peru: "#cd853f",
                    pink: "#ffc0cb",
                    plum: "#dda0dd",
                    powderblue: "#b0e0e6",
                    purple: "#800080",
                    red: "#ff0000",
                    rosybrown: "#bc8f8f",
                    royalblue: "#4169e1",
                    saddlebrown: "#8b4513",
                    salmon: "#fa8072",
                    sandybrown: "#f4a460",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    sienna: "#a0522d",
                    silver: "#c0c0c0",
                    skyblue: "#87ceeb",
                    slateblue: "#6a5acd",
                    slategray: "#708090",
                    snow: "#fffafa",
                    springgreen: "#00ff7f",
                    steelblue: "#4682b4",
                    tan: "#d2b48c",
                    teal: "#008080",
                    thistle: "#d8bfd8",
                    tomato: "#ff6347",
                    turquoise: "#40e0d0",
                    violet: "#ee82ee",
                    wheat: "#f5deb3",
                    white: "#ffffff",
                    whitesmoke: "#f5f5f5",
                    yellow: "#ffff00",
                    yellowgreen: "#9acd32"
                },
                _dimensions: {},
                _ie: $.jqx.browser.msie,
                _oldIEbrowser: $.jqx.browser.msie && $.jqx.browser.version <= 8,
                _ie8: $.jqx.browser.msie && 8 == $.jqx.browser.version,
                _ie7: $.jqx.browser.msie && $.jqx.browser.version < 8,
                _centerX: null,
                _centerY: null,
                _coordinatePlane: null,
                _geometry: {startAngle: -45, baseAngle: -45, fix: 0, endAngle: 225},
                _userValues: [],
                _valuesToDegrees: [],
                _oldValues: [],
                _oldValuesToDegrees: [],
                _temporaryValuesToDegrees: [],
                _temporaryValues: [],
                _temporaryOldAngle: [],
                _valuesLength: 0,
                _oldValuesLength: 0,
                _alignmentIE: null,
                _title: {},
                _backgroundColor: "#e0e0e0",
                _label: {},
                _tooltip: {},
                _renderedValues: 0,
                _barWidth: 35,
                _barStartAt: 30,
                _barGaugeSlices: [],
                _barGaugeBackgroundSlices: [],
                _barGaugeSlicesStrokeWidth: 0,
                _barGaugeLabelLines: [],
                _barGaugeLabelText: [],
                _barGaugeTitle: null,
                _barGaugeSubTitle: null,
                _barGaugeTooltip: $("<div></div>"),
                _measuredText: $("<div class='jqx-bar-gauge-measure-text'></div>"),
                _measuredTextId: "",
                renderer: null,
                _barGaugeRadius: null,
                _barGaugeFigureRadius: null,
                _labelPositioningRadius: null,
                _placeholderSize: 50,
                _rendering: !1,
                _titleLines: 0,
                _subTitleLines: 0,
                _initialized: !1,
                _events: ["initialized", "valueChanged", "tooltipOpen", "tooltipClose", "drawStart", "drawEnd"]
            };
            return this === $.jqx._jqxBarGauge.prototype ? a : ($.extend(!0, this, a), a)
        }, createInstance: function () {
            var a = this;
            a._createBarGauge()
        }, _createBarGauge: function () {
            var a = this;
            a._getLiquidDimensions(), a._addIEPolyfills(), a._barGaugeTooltip.css({display: "none"}), $(a.host).empty(), a._attachCustomColors(), a.geometry.startAngle = a.startAngle, a.geometry.endAngle = a.endAngle, a._validateGeometry(), a._validateTitle(), a._validateLabel(), a._validateValues(), a._validateTooltip(), a._validateAnimationDuration(), a._transformValuesToAngles(), a._getColorScheme(), 0 === a.animationDuration || a._ie8 || a._ie7 ? a._drawStaticBarGauge() : a._drawDynamicBarGauge(), a._raiseEvent("4"), a._createTooltip(), a._addCSS(), a._ie && (a._removeBarGaugeTitle(), a._removeBarGaugeSubTitle(), a._drawBarGaugeTitle()), a._addEventHandlers()
        }, _initRenderer: function (a) {
            if (!$.jqx.createRenderer)throw"jqxBarGauge: Please include a reference to jqxdraw.js";
            return $.jqx.createRenderer(this, a)
        }, _validateValues: function () {
            var a, b, c = this;
            0 === c._userValues.length && (c._userValues = c.values.slice()), 0 === c._oldValues.length && (c._oldValues = c.values.slice()), c._valuesLength = c.values.length;
            for (var d = 0; d < c._valuesLength; d++)c.values[d] = parseFloat(c.values[d]), c.values[d] < c.startValue || isNaN(c.values[d]) ? c.values[d] = c.startValue : c.values[d] > c.max && (c.values[d] = c.max), c._drawnValues[d] = !1, c._drawnSlices[d] = !1;
            c.baseValue <= c.startValue || null === c.baseValue ? c.baseValue = c.min : c.baseValue > c.max && (c.baseValue = c.max), c.relativeInnerRadius >= 1 ? c.relativeInnerRadius = .99 : c.relativeInnerRadius < 0 && (c.relativeInnerRadius = 0), c._calculateBarGaugeRadius(), a = c._valuesLength || 1, b = c._barGaugeRadius * (1 - c.relativeInnerRadius) / a - .01, c.barSpacing > b && (c.barSpacing = b), c._backgroundColor = c._validateColor(c.backgroundColor, c._backgroundColor)
        }, _attachCustomColors: function () {
            var a = this, b = a._colorSchemes.length, c = !1;
            if (null !== a.customColorScheme && null !== a.customColorScheme.colors && null !== a.customColorScheme.name) {
                for (var d = 0; d < b; d++)a.customColorScheme.name === a._colorSchemes[d].name && (a._colorSchemes[d].colors = a.customColorScheme.colors.slice(), c = !0);
                c || a._colorSchemes.push(a.customColorScheme)
            }
        }, _getLiquidDimensions: function () {
            var a = this;
            $.isEmptyObject(a._dimensions) && (a._dimensions.width = a.width, a._dimensions.height = a.height), "string" == typeof a._dimensions.width && a._dimensions.width.indexOf("%") !== -1 && (a.width = parseInt(a._dimensions.width, 10) / 100 * $("#" + a.element.id).parent().width()), "string" == typeof a._dimensions.height && a._dimensions.height.indexOf("%") !== -1 && (a.height = parseInt(a._dimensions.height, 10) / 100 * $("#" + a.element.id).parent().height())
        }, _getLongestValue: function () {
            for (var a = this, b = a.values.length, c = "", d = 0, e = 0; e < b; e++)a.values[e].toString().length > d && (c = a.values[e], d = c.toString().length);
            return c = a._calculatePrecision(a._label.precision, c), void 0 !== a._label.formatFunction && null !== a._label.formatFunction && "function" == typeof a._label.formatFunction && (c = a._label.formatFunction(c)), c = c.toUpperCase()
        }, _validateGeometry: function () {
            var a = this, b = parseFloat(a.geometry.startAngle), c = parseFloat(a.geometry.endAngle);
            Math.abs(b) >= 360 && (b %= 360), b < 0 && (b = 360 + b), Math.abs(c) >= 360 && (c %= 360), c < 0 && (c = 360 + c), a.geometry.startAngle = b, a.geometry.endAngle = c
        }, _validateColor: function (a, b) {
            var c, d = this;
            return c = void 0 === a || null === a ? b : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) ? a : /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(a) ? "#" + a : "undefined" != typeof d._colorNames[a.toLowerCase()] ? d._colorNames[a.toLowerCase()] : "transparent"
        }, _validateTooltip: function () {
            var a = this;
            void 0 === a.tooltip || null === a.tooltip || "object" != typeof a.tooltip ? a._tooltip = a._tooltipTemplate : (a._tooltip.visible = a.tooltip.visible !== !1 && (a.tooltip.visible || a._tooltipTemplate.visible), a._tooltip.classname = a.tooltip.classname || a._tooltipTemplate.classname, "function" == typeof a.tooltip.formatFunction ? a._tooltip.formatFunction = a.tooltip.formatFunction : a._tooltip.formatFunction = a._tooltipTemplate.formatFunction, null === a.tooltip.precision || void 0 === a.tooltip.precision ? a._tooltip.precision = a._tooltipTemplate.precision : parseInt(a.tooltip.precision, 10) <= 0 ? a._tooltip.precision = 0 : a._tooltip.precision = parseInt(a.tooltip.precision, 10))
        }, _validateTitle: function () {
            var a = this;
            if (a._title = a._titleTemplate, a._measuredTextId = a.element.id + "measuredText", "string" == typeof a.title ? a._title.text = a.title : "number" == typeof a.title ? a._title.text = String(a.title) : "object" == typeof a.title && void 0 !== a.title && null !== a.title && (a._title.text = a.title.text || a._titleTemplate.text, a._title.horizontalAlignment = a.title.horizontalAlignment || a._titleTemplate.horizontalAlignment, a._title.verticalAlignment = a.title.verticalAlignment || a._titleTemplate.verticalAlignment), void 0 === a.title || null === a.title || void 0 === a.title.font || null === a.title.font ? a._title.font = a._titleTemplate.font : (a._title.font.family = a.title.font.family || a._titleTemplate.font.family, a._title.font.opacity = a.title.font.opacity || a._titleTemplate.font.opacity, a._title.font.size = a.title.font.size || a._titleTemplate.font.size, a._title.font.weight = a.title.font.weight || a._titleTemplate.font.weight, (a._ie7 || a._ie8) && a._title.font.weight > 100 && (a._title.font.weight = "bold"), a._title.font.color = a._validateColor(a.title.font.color, a._titleTemplate.font.color)), void 0 === a.title || null === a.title || void 0 === a.title.margin || null === a.title.margin) a._title.margin = a._titleTemplate.margin; else if ("object" != typeof a.title.margin) {
                var b = parseInt(a.title.margin, 10);
                a._title.margin.top = b, a._title.margin.right = b, a._title.margin.bottom = b, a._title.margin.left = b
            } else a._title.margin.top = 0 === a.title.margin.top ? 0 : a.title.margin.top || a._titleTemplate.margin.top, a._title.margin.right = 0 === a.title.margin.right ? 0 : a.title.margin.right || a._titleTemplate.margin.right, a._title.margin.bottom = 0 === a.title.margin.bottom ? 0 : a.title.margin.bottom || a._titleTemplate.margin.bottom, a._title.margin.left = 0 === a.title.margin.left ? 0 : a.title.margin.left || a._titleTemplate.margin.left;
            void 0 === a.title || null === a.title || void 0 === a.title.subtitle || null === a.title.subtitle ? (a._title.subtitle.text = a._titleTemplate.subtitle.text, a._title.subtitle.font = a._titleTemplate.subtitle.font) : "object" != typeof a.title.subtitle ? (a._title.subtitle.text = String(a.title.subtitle), a._title.subtitle.font = a._titleTemplate.subtitle.font) : "undefined" == typeof a.title.subtitle.font || null === a.title.subtitle.font ? (a._title.subtitle.text = String(a.title.subtitle.text), a._title.subtitle.font = a._titleTemplate.subtitle.font) : (a._title.subtitle.text = String(a.title.subtitle.text), a._title.subtitle.font.color = a.title.subtitle.font.color || a._titleTemplate.subtitle.font.color, a._title.subtitle.font.family = a.title.subtitle.font.family || a._titleTemplate.subtitle.font.family, a._title.subtitle.font.opacity = a.title.subtitle.font.opacity || a._titleTemplate.subtitle.font.opacity, a._title.subtitle.font.size = a.title.subtitle.font.size || a._titleTemplate.subtitle.font.size, a._title.subtitle.font.weight = a.title.subtitle.font.weight || a._titleTemplate.subtitle.font.weight, (a._ie7 || a._ie8) && a._title.subtitle.font.weight > 100 && (a._title.subtitle.font.weight = "bold"));
            var c;
            "" === a._title.text ? c = 0 : "" === a._title.subtitle.text || void 0 === a._title.subtitle.text || null === a._title.subtitle.text ? (a._titleLines = null !== a._title.text.match(/<br>/g) ? a._title.text.match(/<br>/g).length + 1 : 1, c = a._title.font.size * a._titleLines + a._title.margin.top + a._title.margin.bottom) : (a._titleLines = null !== a._title.text.match(/<br>/g) ? a._title.text.match(/<br>/g).length + 1 : 1, a._subTitleLines = null !== a._title.subtitle.text.match(/<br>/g) ? a._title.text.match(/<br>/g).length + 1 : 1, c = a._title.font.size * a._titleLines + a._title.subtitle.font.size * a._subTitleLines + a._title.margin.top + a._title.margin.bottom), void 0 === a.title || null === a.title || null === a.title.placeholderSize || void 0 === a.title.placeholderSize ? a._title.placeholderSize = c || .05 * a.height : a._title.placeholderSize = a.title.placeholderSize
        }, _validateLabel: function () {
            var a = this;
            null === a.labels || void 0 === a.labels || "object" != typeof a.labels ? a._label = a._labelTemplate : (a._label.connectorColor = a._validateColor(a.labels.connectorColor, a._labelTemplate.connectorColor), a._label.connectorWidth = a.labels.connectorWidth || a._labelTemplate.connectorWidth, a._label.formatFunction = a.labels.formatFunction || a._labelTemplate.formatFunction, void 0 === a.labels.precision || null === a.labels.precision || "number" != typeof a.labels.precision ? a._label.precision = a._labelTemplate.precision : a._label.precision = a.labels.precision, a._label.precision > 15 ? a._label.precision = 15 : a._label.precision < 0 && (a._label.precision = 0), void 0 === a.labels.visible || null === a.labels.visible ? a._label.visible = a._labelTemplate.visible : a.labels.visible === !1 ? a._label.visible = !1 : a._label.visible = !0, "number" != typeof a.labels.indent && "string" != typeof a.labels.indent || a.labels.indent <= 0 ? a._label.indent = 0 : "number" != typeof a.labels.indent && "string" != typeof a.labels.indent || a.labels.indent <= 0 ? a._label.indent = 0 : a._label.indent = a.labels.indent, null === a.labels.font || void 0 === a.labels.font || "object" != typeof a.labels.font ? a._label.font = a._labelTemplate.font : (a._label.font = {}, a._label.font.color = a._validateColor(a.labels.font.color, a._labelTemplate.font.color), a._label.font.family = a.labels.font.family || a._labelTemplate.font.family, a._label.font.size = a.labels.font.size || a._labelTemplate.font.size, a._label.font.weight = a.labels.font.weight || a._labelTemplate.font.weight, (a._ie7 || a._ie8) && a._label.font.weight > 100 && (a._label.font.weight = "bold")))
        }, _validateAnimationDuration: function () {
            var a = this, b = parseInt(a.animationDuration, 10), c = b > 0 ? b : 0;
            a._oldIEbrowser ? a.animationDuration = 0 : a.animationDuration = c
        }, _transformValuesToAngles: function () {
            var a, b, c, d, e = this;
            e._placeholderSize = e._title.placeholderSize || e._placeholderSize, e.geometry.endAngle < e.geometry.startAngle ? (e._geometry.startAngle = parseFloat(e.geometry.endAngle) % 360, e._geometry.endAngle = parseFloat(e.geometry.startAngle) % 360) : (e._geometry.startAngle = parseFloat(e.geometry.endAngle) % 360 - 360, e._geometry.endAngle = parseFloat(e.geometry.startAngle) % 360), a = e._geometry.endAngle - e._geometry.startAngle, a > 360 && (e._geometry.startAngle = e._geometry.startAngle + (a - 360)), void 0 !== e.baseValue && null !== e.baseValue && e.baseValue >= e.min && e.baseValue <= e.max && (e._geometry.baseAngle = (e.baseValue - e.min) * (e._geometry.endAngle - e._geometry.startAngle) / (e.max - e.min) + e._geometry.startAngle, e._geometry.fix = e.geometry.startAngle + e.geometry.endAngle - 180), b = e._getLongestValue(), c = e._measureText(b, e._label.font.size, e._label.font.family, e._label.font.weight), d = e._barGaugeRadius - 1.2 * e._label.indent - 1.2 * c.height, d + c.width + 1.2 * e._label.indent > e.width / 2 && (d = e._barGaugeRadius - 1.2 * e._label.indent - c.width), e._label.visible === !1 && (d = e._barGaugeRadius), d *= .98, d < 0 && (d = 0), e._barGaugeFigureRadius = d, e._barWidth = d * (1 - e.relativeInnerRadius) / e._valuesLength - e.barSpacing, e._barStartAt = d * e.relativeInnerRadius, e._labelPositioningRadius = e._barStartAt + e._valuesLength * (e._barWidth + e.barSpacing) - e.barSpacing + e._label.indent;
            for (var f = 0; f < e._valuesLength; f++)e._valuesToDegrees[f] = (e.values[f] - e.min) / (e.max - e.min) * (e._geometry.endAngle - e._geometry.startAngle) + e._geometry.startAngle;
            $(e.host).width(e.width), $(e.host).height(e.height), e._initialized || (e._initRenderer(e.host), e._initialized = !0)
        }, _measureRadius: function () {
            var a = this, b = a._getLongestValue(), c = a._measureText(b, a._label.font.size, a._label.font.family, a._label.font.weight), d = a._barGaugeRadius - 1.2 * a._label.indent - 1.2 * c.height;
            d + c.width + 1.2 * a._label.indent > a.width / 2 && (d = a._barGaugeRadius - 1.2 * a._label.indent - c.width), a._label.visible === !1 && (d = a._barGaugeRadius), d *= .98, d < 0 && (d = 0), a._barWidth = d * (1 - a.relativeInnerRadius) / a._valuesLength - a.barSpacing, a._barStartAt = d * a.relativeInnerRadius, a._labelPositioningRadius = a._barStartAt + a._valuesLength * (a._barWidth + a.barSpacing) - a.barSpacing + a._label.indent
        }, _drawEmptyBarGauge: function () {
            var a, b, c = this, d = c._barStartAt, e = d + c._barWidth;
            a = "" === c._title.text ? c._barGaugeRadius : c._barGaugeFigureRadius, d = c.relativeInnerRadius * a, e = a, c._barGaugeBackgroundSlices[0] = c.renderer.pieslice(c._centerX, c._centerY, d, e, c._geometry.startAngle, c._geometry.endAngle, 0, {
                fill: c._backgroundColor,
                stroke: c._backgroundColor,
                "stroke-width": c._barGaugeSlicesStrokeWidth
            }), b = c.element.id + "BackgroundSlice0", c.renderer.attr(c._barGaugeBackgroundSlices[0], {id: b}), c.renderer.attr(c._barGaugeBackgroundSlices[0], {class: "jqx-bar-gauge-background-slice"}), c._rendered(), c._oldValuesLength = 0, c._oldValues.length = 0
        }, _drawBarGaugeLayout: function () {
            var a, b = this, c = b._barStartAt, d = c + b._barWidth;
            if (b._barGaugeSlicesStrokeWidth = 0, b._centerX = b.width / 2, "" === b._title.text ? b._centerY = b.height / 2 : "top" === b._title.verticalAlignment ? b._centerY = (b.height + b._title.placeholderSize) / 2 : b._centerY = (b.height - b._title.placeholderSize) / 2, b._valuesLength > 0)for (var e = 0; e < b._valuesLength; e++)b._barGaugeBackgroundSlices[e] = b.renderer.pieslice(b._centerX, b._centerY, c, d, b._geometry.startAngle, b._geometry.endAngle, 0, {
                fill: b._backgroundColor,
                stroke: b._backgroundColor,
                "stroke-width": b._barGaugeSlicesStrokeWidth
            }), a = b.element.id + "BackgroundSlice" + e, b.renderer.attr(b._barGaugeBackgroundSlices[e], {id: a}), b.renderer.attr(b._barGaugeBackgroundSlices[e], {class: "jqx-bar-gauge-background-slice"}), c = d + b.barSpacing, d = c + b._barWidth; else b._drawEmptyBarGauge()
        }, _drawBarGaugeElementsWithBase: function () {
            var a, b, c, d = this, e = 180 - d._geometry.baseAngle + d._geometry.fix;
            d._renderedValues = 0, b = d._barStartAt, c = b + d._barWidth;
            for (var f = [], g = 0; g < d._valuesLength; g++) {
                f[g] = d.baseValue;
                var h = d._colors[g];
                if (d.formatFunction && (h = d.formatFunction(d.values[g], g, h)), d._ie7 || d._ie8) {
                    var i = d._valuesToDegrees[g];
                    e = 180 - i + d._geometry.fix, d._valuesToDegrees[g] > d._geometry.baseAngle ? d._barGaugeSlices[g] = d.renderer.pieslice(d._centerX, d._centerY, b, c, 180 - d._geometry.baseAngle + d._geometry.fix, e, 0, {
                            fill: h,
                            stroke: h,
                            "stroke-width": d._barGaugeSlicesStrokeWidth
                        }) : d._barGaugeSlices[g] = d.renderer.pieslice(d._centerX, d._centerY, b, c, e, 180 - d._geometry.baseAngle + d._geometry.fix, 0, {
                            fill: h,
                            stroke: h,
                            "stroke-width": d._barGaugeSlicesStrokeWidth
                        }), a = d.element.id + "Slice" + g, d.renderer.attr(d._barGaugeSlices[g], {id: a}), d.renderer.attr(d._barGaugeSlices[g], {class: "jqx-bar-gauge-slice"}), d._drawnSlices[g] = !0, d._label.visible === !0 && (d._drawLabelsLine(b, e, g), d._drawLabelsText(e, g)), d._rendered()
                } else {
                    if (d.useGradient) {
                        var j = [[0, 1.4], [100, 1]];
                        h = d.renderer._toLinearGradient(h, !0, j)
                    }
                    d._barGaugeSlices[g] = d.renderer.pieslice(d._centerX, d._centerY, b, c, e + .01, e, 0, {
                        fill: h,
                        stroke: h,
                        "stroke-width": d._barGaugeSlicesStrokeWidth
                    }), a = d.element.id + "Slice" + g, d.renderer.attr(d._barGaugeSlices[g], {id: a}), d.renderer.attr(d._barGaugeSlices[g], {class: "jqx-bar-gauge-slice"}), d._drawnSlices[g] = !0
                }
                d.renderer.attr(d._barGaugeSlices[g], {id: d.element.id + "Slice" + g}), d.renderer.attr(d._barGaugeSlices[g], {class: "jqx-bar-gauge-slice"}), b = c + d.barSpacing, c = b + d._barWidth
            }
            d._oldValues = f, d._temporaryValues = f.slice(0), d._oldValuesToDegrees.length = 0;
            for (var g = 0; g < d.values.length; g++)d._oldValuesToDegrees[g] = d._geometry.baseAngle, d._temporaryValuesToDegrees[g] = d._geometry.baseAngle;
            d._rendering = !0, d._redrawWithNewValuesArray(d.values, d._oldValues)
        }, _drawBarGaugeElementWithBase: function (gaugeLayerStart, change, amount, changeContition, valueIndex) {
            function calculateNewPieSlicePath() {
                newPieSlicePath = amount === -1 ? $.jqx.commonRenderer.pieSlicePath(that._centerX, that._centerY, gaugeLayerStart, gaugeLayerEnd, change, 180 - that._geometry.baseAngle + that._geometry.fix, 0) : $.jqx.commonRenderer.pieSlicePath(that._centerX, that._centerY, gaugeLayerStart, gaugeLayerEnd, 180 - that._geometry.baseAngle + that._geometry.fix, change, 0)
            }

            var that = this, newPieSlicePath, angleStepPercent, angleDiff, valueStep, animation = that._calculateAnimationInterval(valueIndex, !1), gaugeLayerEnd = gaugeLayerStart + that._barWidth, updatedItem = that._barGaugeSlices[valueIndex], updatedAngle = that._valuesToDegrees[valueIndex];
            0 === that.animationDuration && (change = 180 - updatedAngle + that._geometry.fix), angleDiff = Math.abs(that._geometry.baseAngle - updatedAngle), 0 === angleDiff && (angleDiff = .01), angleStepPercent = Math.abs(amount / animation.smoothCoef / angleDiff), valueStep = angleStepPercent * Math.abs(that.baseValue - that.values[valueIndex]), isNaN(that._temporaryValues[valueIndex]) && (that._temporaryValues[valueIndex] = that.values[valueIndex]), isNaN(that._temporaryValuesToDegrees[valueIndex]) && (that._temporaryValuesToDegrees[valueIndex] = that._valuesToDegrees[valueIndex]), that._intervalArray[valueIndex] = setInterval(function () {
                calculateNewPieSlicePath(), eval(changeContition) && !that.disabled ? (that.renderer.attr(updatedItem, {d: newPieSlicePath}), change += amount / animation.smoothCoef, that._temporaryValuesToDegrees[valueIndex] = (180 - change + that._geometry.fix) % 360, that._temporaryValues[valueIndex] = that._temporaryValues[valueIndex] + amount * valueStep) : (change = 180 - updatedAngle + that._geometry.fix, that._temporaryValuesToDegrees[valueIndex] = updatedAngle % 360, that._temporaryValues[valueIndex] = that.values[valueIndex], calculateNewPieSlicePath(), that.renderer.attr(updatedItem, {d: newPieSlicePath}), clearInterval(that._intervalArray[valueIndex]), that._renderedValues++, that._renderedValues === that.values.length && that._rendered())
            }, animation.interval / animation.smoothCoef)
        }, _drawStaticBarGaugeElementsWithBase: function () {
            var a, b, c, d, e, f = this;
            a = f._barStartAt, b = a + f._barWidth;
            for (var g = 0; g < f._valuesLength; g++) {
                d = f._valuesToDegrees[g] || f._geometry.baseAngle, f._oldValues[g] = f.values[g] || f.baseValue, c = 180 - d + f._geometry.fix;
                var h = f._colors[g];
                if (f.useGradient) {
                    var i = [[0, 1.4], [100, 1]];
                    h = f.renderer._toLinearGradient(h, !0, i)
                }
                f._valuesToDegrees[g] < f._geometry.baseAngle ? f._barGaugeSlices[g] = f.renderer.pieslice(f._centerX, f._centerY, a, b, 180 - f._geometry.baseAngle + f._geometry.fix, c, 0, {
                        fill: h,
                        stroke: h,
                        "stroke-width": f._barGaugeSlicesStrokeWidth
                    }) : f._barGaugeSlices[g] = f.renderer.pieslice(f._centerX, f._centerY, a, b, c, 180 - f._geometry.baseAngle + f._geometry.fix, 0, {
                        fill: h,
                        stroke: h,
                        "stroke-width": f._barGaugeSlicesStrokeWidth
                    }), e = f.element.id + "Slice" + g, f.renderer.attr(f._barGaugeSlices[g], {id: e}), f.renderer.attr(f._barGaugeSlices[g], {class: "jqx-bar-gauge-slice"}), f._drawnSlices[g] = !0, a = b + f.barSpacing, b = a + f._barWidth
            }
            f._removeLabels(), f._addLabels()
        }, _addLabels: function (a, b, c) {
            var d, e, f, g = this, h = g._barStartAt, i = h + g._barWidth;
            for (a || (a = g._valuesToDegrees), f = 0; f < g._valuesLength; f++)e = f, void 0 == c || f === c ? (d = 180 - a[e] + g._geometry.fix, g._label.visible === !0 && g.disabled === !1 && (g._drawLabelsLine(h, d, e), b && void 0 !== b[e] ? g._drawLabelsText(d, e, b[e]) : g._drawLabelsText(d, e)), h = i + g.barSpacing, i = h + g._barWidth) : (h = i + g.barSpacing, i = h + g._barWidth)
        }, _removeLabels: function (a) {
            for (var b = this, c = 0; c < b._barGaugeLabelText.length; c++)void 0 != a && c != a || ($(b._barGaugeLabelLines[c]).remove(), $(b._barGaugeLabelText[c]).remove(), b._barGaugeLabelLines[c] = null, b._barGaugeLabelText[c] = null)
        }, _removeBarGaugeSlices: function () {
            var a = this;
            a._removeBarGaugeBackgroundSlices(), a._removeBarGaugeForegroundSlices()
        }, _removeBarGaugeBackgroundSlices: function () {
            for (var a = this, b = Math.max(a._valuesLength, a._oldValuesLength), c = 0; c < b; c++)a._oldIEbrowser && $(a._barGaugeBackgroundSlices[c]).remove(), a._barGaugeBackgroundSlices[c] = null, a._drawnSlices[c] = !1;
            $("#" + a.element.id + " .jqx-bar-gauge-background-slice").remove()
        }, _removeBarGaugeForegroundSlices: function () {
            for (var a = this, b = Math.max(a._valuesLength, a._oldValuesLength), c = 0; c < b; c++)a._drawnSlices[c] === !0 && (a._oldIEbrowser && $(a._barGaugeSlices[c]).remove(), a._barGaugeSlices[c] = null, a._drawnSlices[c] = !1);
            $("#" + a.element.id + " .jqx-bar-gauge-slice").remove()
        }, _removeBarGaugeTitle: function () {
            var a = this;
            a._oldIEbrowser && a._barGaugeTitle && $(a._barGaugeTitle).remove(), $("#" + a.element.id + " .jqx-bar-gauge-title").remove()
        }, _removeBarGaugeSubTitle: function () {
            var a = this;
            a._oldIEbrowser && a._barGaugeSubTitle && $(a._barGaugeSubTitle).remove(), $("#" + a.element.id + " .jqx-bar-gauge-subtitle").remove()
        }, _renderElements: function () {
            var a, b, c, d, e = this;
            180 - e._geometry.baseAngle + e._geometry.fix;
            a = e._barStartAt, b = a + e._barWidth, e._rendering = !0, e._renderedValues = 0, e._renderingValues = 0;
            var f = !1;
            if (!e.disabled)for (a = e._barStartAt, b = a + e._barWidth, d = 0; d < e._valuesLength; d++)e.values[d] >= e.baseValue ? e.values[d] > e._oldValues[d] ? (c = "(oldAngle < newAngle)", e._renderElement(a, b, 1, c, d, !0), f = !0) : e.values[d] < e._oldValues[d] && (c = "(oldAngle > newAngle)", e._renderElement(a, b, -1, c, d, !1), f = !0) : e.values[d] > e._oldValues[d] ? (c = "(oldAngle < newAngle)", e._renderElement(a, b, 1, c, d, !0), f = !0) : e.values[d] < e._oldValues[d] && (c = "(oldAngle > newAngle)", e._renderElement(a, b, -1, c, d, !1), f = !0), a = b + e.barSpacing, b = a + e._barWidth;
            f || e._rendered()
        }, clearIntervals: function () {
            for (var a = this, b = a._intervalArray.length, c = 0; c < b; c++)clearInterval(a._intervalArray[c]);
            a._intervalArray.length = 0
        }, _renderElement: function (a, b, c, d, e, f) {
            function g() {
                var d = k, e = 180 - i._geometry.baseAngle + i._geometry.fix;
                1 === c ? f && (j = i._geometry.baseAngle < o ? $.jqx.commonRenderer.pieSlicePath(i._centerX, i._centerY, a, b, d, e, 0) : $.jqx.commonRenderer.pieSlicePath(i._centerX, i._centerY, a, b, e, d, 0)) : f || (j = i._geometry.baseAngle < o ? $.jqx.commonRenderer.pieSlicePath(i._centerX, i._centerY, a, b, d, e, 0) : $.jqx.commonRenderer.pieSlicePath(i._centerX, i._centerY, a, b, e, d, 0))
            }

            function h(c, d) {
                j = c <= d ? $.jqx.commonRenderer.pieSlicePath(i._centerX, i._centerY, a, b, c - 1e-4, d, 0) : $.jqx.commonRenderer.pieSlicePath(i._centerX, i._centerY, a, b, d, c, 0)
            }

            var i = this;
            i._renderingValues++;
            var j, k, l = i._oldValues[e], m = i.values[e], n = i._valuesToDegrees[e], o = i._oldValuesToDegrees[e], p = i._barGaugeSlices[e], q = i._calculateAnimationInterval(e, !0), r = Math.abs(n - o), s = Math.abs(c / q.smoothCoef / r), t = s * Math.abs(m - l), u = q.interval / q.smoothCoef;
            isNaN(i._temporaryValues[e]) && (i._temporaryValues[e] = l), isNaN(i._temporaryValuesToDegrees[e]) && (i._temporaryValuesToDegrees[e] = (180 - o + i._geometry.fix) % 360), isNaN(i._temporaryOldAngle[e]) && (i._temporaryOldAngle[e] = o);
            var v = function () {
                var a = (i.values[e], i._valuesToDegrees[e]);
                k = 180 - o + i._geometry.fix, g();
                var b = !1;
                f && o < a && (b = !0), !f && o > a && (b = !0);
                var d = function () {
                    i._removeLabels(e);
                    for (var a = [], b = 0; b < i._valuesToDegrees.length; b++)void 0 != i._temporaryOldAngle[b] ? a[b] = i._temporaryOldAngle[b] : a[b] = i._valuesToDegrees[b];
                    i._addLabels(a, i._temporaryValues, e)
                };
                if (b && i.disabled === !1 && 0 != i.animationDuration) {
                    if (d(), i.renderer.attr(p, {d: j}), i.formatFunction) {
                        var l = i._colors[e];
                        l = i.formatFunction(i.values[e], e, l), i.renderer.attr(p, {fill: l, stroke: l})
                    }
                    return o += c / q.smoothCoef, i._temporaryOldAngle[e] = o, i._temporaryValuesToDegrees[e] = (180 - o + i._geometry.fix) % 360, i._temporaryValues[e] = i._temporaryValues[e] + c * t, !1
                }
                if (o = a, k = 180 - a + i._geometry.fix, i._temporaryOldAngle[e] = a, i._temporaryValuesToDegrees[e] = a % 360, i._temporaryValues[e] = i.values[e], d(), h(k, 180 - i._geometry.baseAngle + i._geometry.fix), i.renderer.attr(p, {d: j}), i.formatFunction) {
                    var l = i._colors[e];
                    l = i.formatFunction(i.values[e], e, l), i.renderer.attr(p, {fill: l, stroke: l})
                }
                return clearInterval(i._intervalArray[e]), i._renderedValues++, i._renderedValues === i._renderingValues && i._rendered(), !0
            };
            if (0 == i.animationDuration) v(); else {
                var w = function () {
                    clearInterval(i._intervalArray[e]);
                    var a = v();
                    if (i._rendering && !a) {
                        var b = i._oldValues[e], d = i.values[e], f = i._valuesToDegrees[e], g = i._oldValuesToDegrees[e], h = (i._barGaugeSlices[e], i._calculateAnimationInterval(e, !0)), j = Math.abs(f - g), k = Math.abs(c / h.smoothCoef / j), l = (k * Math.abs(d - b), h.interval / h.smoothCoef);
                        i._intervalArray[e] = setInterval(w, l)
                    }
                };
                i._intervalArray[e] || (i._intervalArray[e] = setInterval(w, u))
            }
        }, _calculateAnimationInterval: function (a, b) {
            var c = this, d = {}, e = c.animationDuration, f = e / 1e3, g = 0;
            return b ? c._oldValues[a] - c.values[a] !== 0 && (g = 1e3 / Math.abs((c._oldValues[a] - c.values[a]) / (c.max - c.min) * (c._geometry.endAngle - c._geometry.startAngle))) : c.baseValue - c.values[a] !== 0 && (g = 1e3 / Math.abs((c.baseValue - c.values[a]) / (c.max - c.min) * (c._geometry.endAngle - c._geometry.startAngle))), d.smoothCoef = f || 1, d.interval = g * f, d
        }, _calculateLabelOffset: function (a, b, c) {
            var d, e, f = {};
            return e = a >= 270 ? -(270 - a) / 180 : a <= 90 ? (90 + a) / 180 : (270 - a) / 180, d = a <= 180 ? a / 180 : (360 - a) / 180, f.y = e * b, f.x = d * c, f
        }, _drawCoordinatePlane: function () {
            var a, b, c = this;
            "top" === c._title.verticalAlignment ? (a = c._title.placeholderSize, b = c.height) : (a = 0, b = c.height - c._title.placeholderSize), null !== c._coordinatePlane && $("#" + c.element.id + " .jqx-bar-gauge-coordinate-plane").remove(), c._coordinatePlane = {}, c._coordinatePlane.x = c.renderer.line(0, c._centerY, c.width, c._centerY, {
                fill: "gray",
                stroke: "gray",
                "stroke-width": 1,
                "stroke-opacity": .1
            }), c._coordinatePlane.y = c.renderer.line(c._centerX, a, c._centerX, b, {
                fill: "gray",
                stroke: "gray",
                "stroke-width": 1,
                "stroke-opacity": .1
            }), c.renderer.attr(c._coordinatePlane.x, {class: "jqx-bar-gauge-coordinate-plane"}), c.renderer.attr(c._coordinatePlane.y, {class: "jqx-bar-gauge-coordinate-plane"})
        }, _getColorScheme: function () {
            var a, b, c = this, d = c._colorSchemes.length, e = c.values.length || 1, f = Math.floor(e / c._colorSchemes[0].colors.length), g = 0;
            for (b = 0; b < d; b++)c.colorScheme === c._colorSchemes[b].name && (g = b);
            if (c._colors = c._colorSchemes[g].colors, f > 0)for (b = 0; b < f; b++)a = (g + b + 1) % d, c._colors = c._colors.concat(c._colorSchemes[a].colors)
        }, _drawLabelsLine: function (a, b, c) {
            var d, e, f, g, h, i, j, k, l = this;
            b < 0 ? b = 360 + b : b > 360 && (b %= 360), h = (360 - b) * Math.PI / 180, i = a + l._barWidth + (l._valuesLength - c - 1) * (l._barWidth + l.barSpacing) + l._label.indent, d = l._centerX + a * Math.cos(h), e = l._centerY + a * Math.sin(h), f = l._centerX + i * Math.cos(h), g = l._centerY + i * Math.sin(h), j = l._label.connectorColor || l._colors[c], l.formatFunction && (j = l.formatFunction(l.values[c], c, j)), (l._ie7 || l._ie8) && (d = parseInt(d, 10), e = parseInt(e, 10), f = parseInt(f, 10), g = parseInt(g, 10)), l._label.visible === !0 && l.disabled === !1 && (l._barGaugeLabelLines[c] = l.renderer.line(d, e, f, g, {
                fill: j,
                stroke: j,
                "stroke-width": l._label.connectorWidth
            })), k = l.element.id + "LabelLine" + c, l.renderer.attr(l._barGaugeLabelLines[c], {id: k}), l.renderer.attr(l._barGaugeLabelLines[c], {class: "jqx-bar-gauge-label-line"})
        }, _drawLabelsText: function (a, b, c) {
            var d, e, f, g, h, i, j = this, k = j._label.font.color || j._colors[b];
            j.formatFunction && (k = j.formatFunction(j.values[b], b, k));
            var l = j._calculatePrecision(j._label.precision, j.values[b]);
            void 0 !== c && (l = new Number(c).toFixed(j._label.precision), l = j._calculatePrecision(j._label.precision, l)), void 0 !== j._label.formatFunction && null !== j._label.formatFunction && "function" == typeof j._label.formatFunction && (l = j._label.formatFunction(l, b)), j._cachedMeasurements || (j._cachedMeasurements = []), j._cachedMeasurements[l.length] ? d = j._cachedMeasurements[l.length] : (d = j._measureText(l, j._label.font.size, j._label.font.family, j._label.font.weight), j._cachedMeasurements[l.length] = d), a < 0 ? a = 360 + a : a > 360 && (a %= 360), e = (360 - a) * Math.PI / 180, f = j._centerX + (j._labelPositioningRadius + .3 * d.height) * Math.cos(e), g = j._centerY + (j._labelPositioningRadius + .3 * d.height) * Math.sin(e), h = j._calculateLabelOffset(a, d.height, d.width), j._label.visible === !0 && j.disabled === !1 && (j._barGaugeLabelText[b] = j.renderer.text(l, f - h.x, g - h.y, void 0, void 0, 0, {
                class: "jqx-bargauge-label",
                fill: k,
                "font-size": j._label.font.size + "px",
                "font-family": j._label.font.family,
                "font-weight": j._label.font.weight
            }, !1, "left", "top", "lefttop")), i = j.element.id + "Label" + b, j.renderer.attr(j._barGaugeLabelText[b], {id: i}), j.renderer.attr(j._barGaugeLabelText[b], {class: "jqx-bar-gauge-label-text"}), (j._ie7 || j._ie8) && $("#" + i + " .jqx-bargauge-label").css({
                color: k,
                "white-space": "nowrap",
                "font-size": j._label.font.size + "px",
                "font-family": j._label.font.family,
                "font-weight": j._label.font.weight
            })
        }, _calculatePrecision: function (a, b) {
            var c;
            return c = a + Math.abs(b).toString().split(".")[0].length, c = c > 15 ? 15 : c, b = parseFloat(b).toPrecision(c)
        }, _createTooltip: function () {
            var a = this, b = a.element.id + "tooltip";
            a._barGaugeTooltip.attr("id", b), $(a._barGaugeTooltip).addClass(a.toThemeProperty("jqx-bar-gauge-tooltip")), a._tooltip.classname.length > 0 && $(a._barGaugeTooltip).addClass(a.toThemeProperty(a._tooltip.classname)), $(document.body).append(a._barGaugeTooltip), a._tooltip.visible === !0 && a.disabled === !1 && a._valuesLength > 0 && a._addTooltipHandlers()
        }, _refreshTooltipHandlers: function () {
            var a = this;
            a._tooltip.visible === !0 && a.disabled === !1 && (a._removeTooltipHandlers(), a._addTooltipHandlers())
        }, _addTooltipHandlers: function () {
            var a, b, c = this;
            c.addHandler($("#" + c.element.id + " .jqx-bar-gauge-slice"), "mouseenter", function () {
                c._tooltip.visible === !0 && c._valuesLength > 0 && (a = c.renderer.getAttr(this, "id").substr(c.element.id.length + 5), b = c._calculatePrecision(c._tooltip.precision, c.values[a]), c._barGaugeTooltip.css({
                    display: "block",
                    color: c._colors[a],
                    "border-color": c._colors[a]
                }), void 0 !== c._tooltip.formatFunction && null !== c._tooltip.formatFunction && "function" == typeof c._tooltip.formatFunction && (b = c._tooltip.formatFunction(b, parseInt(a))), c._barGaugeTooltip.html(b), c._raiseEvent("2", {layer: a}))
            }), c.addHandler($("#" + c.element.id + " .jqx-bar-gauge-slice"), "mouseleave", function () {
                c._barGaugeTooltip.css({display: "none"}), c._raiseEvent("3", {layer: a})
            }), c.addHandler($("#" + c.element.id + " .jqx-bar-gauge-slice"), "mouseup", function () {
                c._barGaugeTooltip.css({display: "none"})
            }), $("#" + c.element.id + " .jqx-bar-gauge-slice").length > 0 && c.addHandler($("#" + c.element.id + " .jqx-bar-gauge-slice"), "mousemove", function () {
                c._tooltip.visible === !0 && c._valuesLength > 0 && (a = c.renderer.getAttr(this, "id").substr(c.element.id.length + 5), b = c._calculatePrecision(c._tooltip.precision, c.values[a]), c._barGaugeTooltip.css({
                    display: "block",
                    color: c._colors[a],
                    "border-color": c._colors[a]
                }), void 0 !== c._tooltip.formatFunction && null !== c._tooltip.formatFunction && "function" == typeof c._tooltip.formatFunction && (b = c._tooltip.formatFunction(b, parseInt(a))), c._barGaugeTooltip.html(b))
            }), c.addHandler($(c.host), "mousemove", function (a) {
                c._barGaugeTooltip.css({top: a.pageY - 10 + "px", left: a.pageX + 15 + "px"})
            })
        }, _removeTooltipHandlers: function () {
            var a = this;
            a._barGaugeSlices.length > 0 && (a.removeHandler($(a._barGaugeSlices), "mouseenter"), a.removeHandler($(a._barGaugeSlices), "mouseleave"), a.removeHandler($(a._barGaugeSlices), "mouseup"), a.removeHandler($(a._barGaugeSlices), "mousemove"), a.removeHandler($("#" + a.element.id + " .jqx-bar-gauge-slice"), "mouseenter mouseleave mouseup mousemove")), a.removeHandler($(a.host), "mousemove")
        }, _drawBarGaugeTitle: function () {
            var a = this;
            a._alignmentIE = a._alignmentIE || a._title.horizontalAlignment;
            var b, c, d, e, f, g, h, i, j, k = 0, l = 0;
            if ((a._ie7 || a._ie8) && (a._title.horizontalAlignment = "left"), a._titleLines > 1) {
                for (b = a._title.text.split("<br>"), j = 0; j < a._titleLines; j++)for (d = a._measureText(b[j] + "_", a._title.font.size, a._title.font.family, a._title.font.weight), g = b[j]; d.width > a.width;)g = g.slice(0, -1), b[j] = g + "...", d = a._measureText(b[j] + "_", a._title.font.size, a._title.font.family, a._title.font.weight);
                a._title.text = b.join("<br>")
            } else for (d = a._measureText(a._title.text + "_", a._title.font.size, a._title.font.family, a._title.font.weight), g = a._title.text; d.width > a.width;)g = g.slice(0, -1), a._title.text = g + "...", d = a._measureText(a._title.text + "_", a._title.font.size, a._title.font.family, a._title.font.weight);
            if ("bottom" === a._title.verticalAlignment && (l = a.height - a._title.placeholderSize), null !== a.title && void 0 !== a.title && "" !== a._title.text) {
                if (a._barGaugeTitle = a.renderer.text(a._title.text, a._title.margin.left, l + a._title.margin.top, a.width - a._title.margin.right, 0, void 0, {
                        fill: a._title.font.color,
                        "fill-opacity": a._title.font.opacity,
                        "font-size": a._title.font.size,
                        "font-family": a._title.font.family,
                        "font-weight": a._title.font.weight
                    }, !1, a._title.horizontalAlignment, a._title.verticalAlignment, "centertop"), i = a.element.id + "Title", a.renderer.attr(a._barGaugeTitle, {id: i}), a.renderer.attr(a._barGaugeTitle, {class: "jqx-bar-gauge-title"}), a._ie7 || a._ie8) {
                    $("#" + i + " textbox").css({
                        width: a.width + "px !important",
                        "padding-left": "10px",
                        position: "relative"
                    });
                    var m = 0;
                    d.width < a.width && ("center" === a._alignmentIE ? m = (a.width - d.width) / 2 : "right" === a._alignmentIE && (m = a.width - d.width)), $("#" + i + " span").css({
                        color: a._title.font.color,
                        "margin-left": m + "px",
                        "white-space": "nowrap",
                        "text-align": "center",
                        "font-size": a._title.font.size + "px",
                        "font-family": a._title.font.family,
                        "font-weight": a._title.font.weight
                    }), k++
                }
                if ("" !== a._title.subtitle.text && void 0 !== a._title.subtitle.text) {
                    if (a._subTitleLines > 1) {
                        for (c = a._title.subtitle.text.split("<br>"), j = 0; j < a._subTitleLines; j++)for (e = a._measureText(c[j] + "_", a._title.subtitle.font.size, a._title.subtitle.font.family, a._title.subtitle.font.weight), f = c[j]; e.width > a.width;)f = f.slice(0, -1), c[j] = f + "...", e = a._measureText(c[j] + "_", a._title.subtitle.font.size, a._title.subtitle.font.family, a._title.subtitle.font.weight);
                        a._title.subtitle.text = c.join("<br>")
                    } else for (e = a._measureText(a._title.subtitle.text + "_", a._title.subtitle.font.size, a._title.subtitle.font.family, a._title.subtitle.font.weight), f = a._title.subtitle.text; e.width > a.width;)f = f.slice(0, -1), a._title.subtitle.text = f + "...", e = a._measureText(a._title.subtitle.text + "_", a._title.subtitle.font.size, a._title.subtitle.font.family, a._title.subtitle.font.weight);
                    if (a._barGaugeSubTitle = a.renderer.text(a._title.subtitle.text, a._title.margin.left, l + a._title.font.size * a._titleLines + a._title.margin.top, a.width - a._title.margin.right, 0, void 0, {
                            fill: a._title.subtitle.font.color,
                            "fill-opacity": a._title.subtitle.font.opacity,
                            "font-size": a._title.subtitle.font.size,
                            "font-family": a._title.subtitle.font.family,
                            "font-weight": a._title.subtitle.font.weight,
                            "margin-top": a._title.margin.top
                        }, !1, a._title.horizontalAlignment, a._title.verticalAlignment, "centertop"), h = a.element.id + "SubTitle", a.renderer.attr(a._barGaugeSubTitle, {id: h}), a.renderer.attr(a._barGaugeSubTitle, {class: "jqx-bar-gauge-subtitle"}), a._ie7 || a._ie8) {
                        var n = 0;
                        e.width < a.width && ("center" === a._alignmentIE ? n = (a.width - e.width) / 2 : "right" === a._alignmentIE && (n = a.width - e.width)), $("#" + h + " textbox").css({
                            width: a.width + "px !important",
                            left: n + "px !important",
                            position: "relative"
                        }), $("#" + h + " span").css({
                            width: "100%",
                            color: a._title.subtitle.font.color,
                            "margin-left": n + "px",
                            "white-space": "nowrap",
                            "text-align": "center",
                            "font-size": a._title.subtitle.font.size + "px",
                            "font-family": a._title.subtitle.font.family,
                            "font-weight": a._title.subtitle.font.weight
                        })
                    }
                }
            }
        }, _measureText: function (a, b, c, d) {
            var e = this, f = {};
            return $("#" + e._measuredTextId).length || (e._measuredText.attr("id", e._measuredTextId), $(e.host).append(e._measuredText), e._measuredText.css({
                "z-index": -999999,
                "white-space": "nowrap",
                "font-size": b + "px",
                "font-family": c,
                "font-weight": d
            })), e._measuredText[0].style.fontSize != b + "px" && (e._measuredText[0].style.fontSize = b + "px"), e._measuredText[0].style.fontFamily != c + "px" && (e._measuredText[0].style.fontFamily = c), e._measuredText[0].style.fontWeight != d && (e._measuredText[0].style.fontWeight = d + "px"), e._measuredText.text(a), f.width = e._measuredText[0].offsetWidth, f.height = e._measuredText[0].offsetHeight, f
        }, _calculateBarGaugeRadius: function () {
            var a = this;
            a.width > a.height - a._title.placeholderSize ? a._barGaugeRadius = (a.height - a._title.placeholderSize) / 2 : a._barGaugeRadius = a.width / 2
        }, _addCSS: function () {
            var a = this;
            $(a.host).addClass(a.toThemeProperty("jqx-widget")), $(a.host).addClass(a.toThemeProperty("jqx-bar-gauge")), $(a.host).addClass(a.toThemeProperty("jqx-widget-content")), a.disabled && $(a.host).addClass(a.toThemeProperty("jqx-fill-state-disabled"))
        }, _rendered: function () {
            var a = this;
            a._rendering === !0 && (null !== a.rendered && "function" == typeof a.rendered && a.rendered(), a._rendering = !1, a.clearIntervals(), a._temporaryOldAngle.length = 0, a._temporaryValuesToDegrees.length = 0, a._temporaryValues.length = 0, a._raiseEvent("0"), a._raiseEvent("5"))
        }, _render: function () {
            var a = this;
            a._removeAllGraphicElements(), a.values.length > 0 ? 0 === a.animationDuration || a._ie8 || a._ie7 ? a._drawStaticBarGauge() : a._drawDynamicBarGauge() : (a._getLiquidDimensions(), a.host.width(a.width), a.host.height(a.height), a._validateValues(), a._transformValuesToAngles(), a._drawStaticBarGauge())
        }, render: function () {
            var a = this;
            a.clearIntervals(), a._getLiquidDimensions(), a.host.width(a.width), a.host.height(a.height), a._validateValues(), a._transformValuesToAngles(), a._getColorScheme(), a._rendering !== !0 ? a._render() : (a._staticRefresh(), a._render())
        }, refresh: function (a) {
            var b = this;
            a !== !0 && b.render()
        }, _removeAllGraphicElements: function () {
            var a = this;
            a._removeLabels(), a._removeBarGaugeSlices(), a._removeBarGaugeTitle(), a._removeBarGaugeSubTitle()
        }, _drawStaticBarGauge: function () {
            var a = this;
            a._rendering = !0, a._drawBarGaugeTitle(), a._drawBarGaugeLayout(), a.disabled ? a._rendered() : (a._getLiquidDimensions(), a.host.width(a.width), a.host.height(a.height), a._validateValues(), a._measureRadius(), a._drawStaticBarGaugeElementsWithBase(), a._rendered())
        }, _drawDynamicBarGauge: function () {
            var a = this;
            a._drawBarGaugeTitle(), a._drawBarGaugeLayout(), a.disabled ? a._rendered() : a._drawBarGaugeElementsWithBase()
        }, val: function (a) {
            var b = this;
            return null !== a && void 0 !== a && "object" == typeof a && Object.keys(a).length > 0 ? (b._raiseEvent("4", "api"), a.length != b.values.length ? (b.values = a, b.render()) : b._redrawWithNewValuesArray(a, b.values)) : null !== a && void 0 !== a && "object" == typeof a && 0 === a.length && (b._raiseEvent("4"), b._removeLabels(), b._removeBarGaugeSlices(), b._transformValuesToAngles(), b._drawEmptyBarGauge(), b._removeLabels(), b.values.length = 0, b._refreshTooltipHandlers()), b.values
        }, _redrawWithNewValuesArray: function (a, b) {
            var c, d, e = this;
            if (e._rendering === !1) e._userValues = a.slice(), b ? e._oldValues = b.slice() : e._oldValues = e.values.slice(), e._oldValuesToDegrees = e._valuesToDegrees.slice(), e._oldValuesLength = e._valuesLength, Object.keys(a).length > 1 ? e.values = a.slice() : null === a[0] || void 0 === a[0] ? e.values = [] : (e.values = [], e.values[0] = parseFloat(a)), e._lastChange = new Date; else if (e._rendering === !0) {
                for (e._userValues = a.slice(), e._oldValues.length = 0, e._oldValuesToDegrees.length = 0, d = 0; d < e.values.length; d++)e._oldValues[d] = void 0 != e._temporaryValues[d] ? e._temporaryValues[d] : e.values[d], e._oldValuesToDegrees[d] = void 0 != e._temporaryValuesToDegrees[d] ? e._temporaryValuesToDegrees[d] : e._valuesToDegrees[d];
                e._oldValuesLength = e.values.length, a.length > 1 ? e.values = a.slice() : null === a[0] || void 0 === a[0] ? e.values = [] : (e.values = [], e.values[0] = parseFloat(a))
            } else if (null === a || void 0 === a) e.values = []; else {
                if ("string" != typeof a && "number" != typeof a)return e.values;
                e.values = [], e.values[0] = parseFloat(a)
            }
            if (e._valuesLength = e.values.length, e._getColorScheme(), e._valuesLength > e._oldValuesLength)for (var f = e._oldValuesLength; f < e._valuesLength; f++)e._oldValuesToDegrees[f] = e._geometry.baseAngle, e._oldValues[f] = e.baseValue;
            for (d = 0; d < e._valuesLength; d++) {
                e.values[d] < e.min ? e.values[d] = e.min : e.values[d] > e.max && (e.values[d] = e.max);
                var g = e.values[d];
                0 == g && (g = .03), c = (g - e.min) / (e.max - e.min) * (e._geometry.endAngle - e._geometry.startAngle) + e._geometry.startAngle, e._valuesToDegrees[d] = c % 360
            }
            e._renderElements(), e._refreshTooltipHandlers(), e._raiseEvent("1")
        }, _staticRefresh: function () {
            var a = this, b = a.animationDuration;
            "string" == typeof a.width && a.width.indexOf("%") !== -1 && (a._dimensions.width = a.width), "string" == typeof a.height && a.height.indexOf("%") !== -1 && (a._dimensions.height = a.height), a._getLiquidDimensions(), a.host.width(a.width), a.host.height(a.height), $("#" + a.element.id + " .chartContainer").width(a.width), $("#" + a.element.id + " .chartContainer").height(a.height), a._removeBarGaugeTitle(), a._removeBarGaugeSubTitle(), a._validateGeometry(), a._validateTitle(), a._validateLabel(), a._validateValues(), a._validateTooltip(), a._measureRadius(), a.animationDuration = 0, a._render(), a.animationDuration = b
        }, propertyChangedHandler: function (a, b, c, d) {
            var e, f, g = a;
            if (g._cachedMeasurements = [], void 0 !== a.isInitialized && null !== a.isInitialized && a.isInitialized !== !1 && (g.ie7 || !a.batchUpdate || !a.batchUpdate.width || !a.batchUpdate.height || 2 !== Object.keys(a.batchUpdate).length) && (d !== c || "colorScheme" === b || "tooltip" === b))switch (e = g.animationDuration, g._titleTemplate = g._title, g._labelTemplate = g._label, g._tooltipTemplate = g._tooltip, b) {
                case"width":
                case"height":
                    g._staticRefresh();
                    break;
                case"values":
                    g.values = c, g.val(d);
                    break;
                case"animationDuration":
                    break;
                case"disabled":
                    g.disabled ? $(g.host).addClass(g.toThemeProperty("jqx-fill-state-disabled")) : $(g.host).removeClass(g.toThemeProperty("jqx-fill-state-disabled")), g._render();
                    break;
                case"geometry":
                case"min":
                case"baseValue":
                case"max":
                case"barSpacing":
                case"startAngle":
                case"endAngle":
                case"relativeInnerRadius":
                    g.geometry.startAngle = g.startAngle, g.geometry.endAngle = g.endAngle, g.values = g._userValues.slice(), g._validateValues(), g._transformValuesToAngles(), g._render();
                    break;
                case"tooltip":
                    g._validateTooltip();
                    break;
                case"rendered":
                    break;
                case"backgroundColor":
                    if (g._backgroundColor = g._validateColor(g.backgroundColor, g._backgroundColor), g._ie7 || g._ie8)for (f = 0; f < g._valuesLength; f++)g.renderer.attr(g._barGaugeBackgroundSlices[f], {
                        fillcolor: g._backgroundColor,
                        strokecolor: g._backgroundColor,
                        "stroke-width": g._barGaugeSlicesStrokeWidth
                    }); else $("#" + g.element.id + " .jqx-bar-gauge-background-slice").attr({
                        fill: g._backgroundColor,
                        stroke: g._backgroundColor,
                        "stroke-width": g._barGaugeSlicesStrokeWidth
                    });
                    break;
                case"customColorScheme":
                    g._attachCustomColors();
                    break;
                case"colorScheme":
                    var h, i;
                    for (g._getColorScheme(), f = 0; f < g._valuesLength; f++) {
                        h = g._label.connectorColor || g._colors[f], i = g._label.font.color || g._colors[f];
                        var j = g._colors[f];
                        if (g.useGradient) {
                            var k = [[0, 1.4], [100, 1]];
                            j = g.renderer._toLinearGradient(j, !0, k)
                        }
                        if (g.renderer.attr(g._barGaugeSlices[f], {fill: j}), g.renderer.attr(g._barGaugeLabelLines[f], {
                                fill: h,
                                stroke: h
                            }), g.renderer.attr(g._barGaugeLabelText[f], {fill: i}), g._ie7 || g._ie8) {
                            g.renderer.attr(g._barGaugeSlices[f], {
                                fillcolor: g._colors[f],
                                strokecolor: g._colors[f],
                                "stroke-width": g._barGaugeSlicesStrokeWidth
                            }), g.renderer.attr(g._barGaugeLabelLines[f], {fillcolor: h, strokecolor: h});
                            var l = g.element.id + "Label" + f;
                            $("#" + l + " .jqx-bargauge-label").css({color: i})
                        }
                    }
                    break;
                default:
                    g._staticRefresh()
            }
        }, _compareArrays: function (a, b) {
            var c = a.length, d = b.length;
            if (c !== d)return !1;
            for (var e = 0; e < c; e++)if (a[e] !== b[e])return !1;
            return !0
        }, _addIEPolyfills: function () {
            Object.keys || (Object.keys = function () {
                var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"), c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], d = c.length;
                return function (e) {
                    if ("object" != typeof e && ("function" != typeof e || null === e))throw new TypeError("Object.keys called on non-object");
                    var f, g, h = [];
                    for (f in e)a.call(e, f) && h.push(f);
                    if (b)for (g = 0; g < d; g++)a.call(e, c[g]) && h.push(c[g]);
                    return h
                }
            }())
        }, destroy: function () {
            var a = this;
            $("#" + a._measuredTextId).remove(), a.renderer.clear(), a.renderer = null, a._removeEventHandlers(), a._removeTooltipHandlers(), a.host.children().remove(), a.host.removeData(), a.host.removeClass(), a.host.remove(), a.host = null, a.element = null, delete a.element, delete a.host
        }, _addEventHandlers: function () {
            var a = this;
            a.addHandler($(a.host), "drawStart", function () {
            }), a.addHandler($(a.host), "drawEnd", function () {
                a._refreshTooltipHandlers()
            }), a.addHandler($(window), "resize.jqxBarGauge" + a.host[0].id, function () {
                var b = !1;
                a._dimensions.width && a._dimensions.width.toString().indexOf("%") >= 0 && (b = !0), a._dimensions.height && a._dimensions.height.toString().indexOf("%") >= 0 && (b = !0), b && a._staticRefresh()
            })
        }, _removeEventHandlers: function () {
            var a = this;
            a.removeHandler($(a.host), "drawStart"), a.removeHandler($(a.host), "drawEnd"), a.removeHandler($(window), "resize.jqxBarGauge" + a.host[0].id)
        }, _refreshEventHandlers: function () {
            var a = this;
            a._removeEventHandlers(), a._addEventHandlers()
        }, _raiseEvent: function (a, b) {
            var c = this, d = $.Event(c._events[a]);
            return d.args = b, c.host.trigger(d)
        }, _getEvent: function (a) {
            var b = this;
            return b._isTouchDevice ? b._touchEvents[a] : a
        }
    })
}(jqxBaseFramework);

