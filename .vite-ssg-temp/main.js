"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueI18n = require("vue-i18n");
var viteSsg = require("vite-ssg");
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var head = require("@vueuse/head");
var en = {
  "language": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["EN"]);
  },
  "index": {
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Front-end developer"]);
    },
    "sub": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["I like to code pretty things from scratch and bring them to life"]);
    }
  },
  "about": {
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hi I'm Killian. Nice to meet you."]);
    },
    "primary": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["I have been learning programming on my own for 5 years now."]);
    },
    "second": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["I started with Wordpress, then HTML and CSS, then Javascript and finally Vue JS. Not to mention tools, CSS frameworks and libraries."]);
    },
    "third": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["I have done several small freelance projects and my goal is to be independent by working on larger projects."]);
    },
    "fourth": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Finally, I also plan to start developing Android applications."]);
    }
  },
  "skills": {
    "primary": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tools"]);
    },
    "second": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Front-end"]);
    },
    "third": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Others"]);
    }
  },
  "footer": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Handcrafted by me - Design, integration and development."]);
  }
};
var __glob_1_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": en
});
var fr = {
  "language": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["FR"]);
  },
  "index": {
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["D\xE9veloppeur Front-end"]);
    },
    "sub": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["J'aime coder de jolie choses \xE0 partir de z\xE9ro et leur donner vie"]);
    }
  },
  "about": {
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Salut je suis Killian. Ravi de vous rencontrer."]);
    },
    "primary": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["J'apprend la programmation seul en autodidacte depuis 5 ans maintenant."]);
    },
    "second": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["J'ai commenc\xE9 par Wordpress, puis HTML et CSS, ensuite Javascript et enfin Vue JS. Sans compter les outils, les frameworks CSS et les librairies."]);
    },
    "third": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["J'ai r\xE9alis\xE9 plusieurs petits projet en freelance et mon objectif est de pouvoir \xEAtre ind\xE9pendant en travaillant sur de plus gros projet."]);
    },
    "fourth": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enfin je compte me lancer aussi dans le d\xE9veloppement d\u2019applications Android."]);
    }
  },
  "skills": {
    "primary": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Outils"]);
    },
    "second": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Front-end"]);
    },
    "third": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Autres"]);
    }
  },
  "footer": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Fabriqu\xE9 \xE0 la main par moi - Design, int\xE9gration et d\xE9veloppement."]);
  }
};
var __glob_1_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": fr
});
const messages = Object.fromEntries(Object.entries({ "../../locales/en.yml": __glob_1_0, "../../locales/fr.yml": __glob_1_1 }).map(([key, value]) => {
  const yaml = key.endsWith(".yaml");
  return [key.slice(14, yaml ? -5 : -4), value.default];
}));
const install = ({ app }) => {
  const i18n = vueI18n.createI18n({
    legacy: false,
    locale: "fr",
    messages
  });
  app.use(i18n);
};
var __glob_7_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install
});
var _sfc_main$5 = vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    opacity: { type: Number, required: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "overlay",
        style: { backgroundColor: `#000000${props.opacity}` }
      }, _attrs))} data-v-1955cfaa></div>`);
    };
  }
});
var Overlay_vue_vue_type_style_index_0_scoped_true_lang = ".overlay[data-v-1955cfaa] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}";
_sfc_main$5.__scopeId = "data-v-1955cfaa";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Overlay.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$n = /* @__PURE__ */ vue.createVNode("path", {
  d: "M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z",
  "fill-rule": "evenodd",
  fill: "currentColor"
}, null, -1);
function render$n(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$n, [
    _hoisted_2$n
  ]);
}
var __vite_components_1$1 = { name: "carbon-logo-github", render: render$n };
const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$m = /* @__PURE__ */ vue.createVNode("path", {
  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z",
  fill: "currentColor"
}, null, -1);
function render$m(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$m, [
    _hoisted_2$m
  ]);
}
var __vite_components_2 = { name: "ant-design-twitter-circle-filled", render: render$m };
const _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$l = /* @__PURE__ */ vue.createVNode("path", {
  d: "M15.448 7.021c2.443 0 4.745 1.083 6.432 2.776v.005c0-.813.547-1.428 1.303-1.428h.192c1.193 0 1.432 1.125 1.432 1.48l.005 12.635c-.083.828.855 1.256 1.376.724c2.025-2.083 4.452-10.719-1.261-15.719c-5.328-4.667-12.479-3.896-16.281-1.276c-4.041 2.792-6.624 8.959-4.115 14.755c2.74 6.319 10.573 8.204 15.235 6.324c2.36-.953 3.448 2.233.995 3.276c-3.697 1.577-14 1.416-18.812-6.917C-1.302 18.027-1.13 8.125 7.496 2.995C14.089-.932 22.788.156 28.032 5.631c5.48 5.729 5.163 16.448-.187 20.615c-2.423 1.895-6.021.052-5.995-2.709l-.027-.9c-1.687 1.671-3.932 2.651-6.375 2.651c-4.833 0-9.088-4.256-9.088-9.084c0-4.88 4.255-9.181 9.088-9.181zm6.079 8.834c-.183-3.537-2.808-5.667-5.98-5.667h-.12c-3.656 0-5.687 2.88-5.687 6.145c0 3.661 2.453 5.973 5.672 5.973c3.593 0 5.952-2.629 6.124-5.739z",
  fill: "currentColor"
}, null, -1);
function render$l(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$l, [
    _hoisted_2$l
  ]);
}
var __vite_components_3 = { name: "cib-mail-ru", render: render$l };
const _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$k = /* @__PURE__ */ vue.createVNode("path", {
  d: "M5.25 2.75l-.563.531l-1.406 1.406l-.531.563l.406.656l2.094 3.5l.281.5H8.47l4 3.969c-3.574 3.59-8.121 8.152-8.281 8.313c-1.567 1.566-1.57 4.132.03 5.625c1.563 1.542 4.11 1.582 5.595 0l.03-.032L16 21.594l6.188 6.218l.093.063c1.57 1.48 4.067 1.5 5.532-.063v-.03h.03c1.532-1.567 1.548-4.114-.03-5.595l-.032-.03l-5.218-5.188c3.511-.328 6.261-3.293 6.312-6.875h.031c.004-.02 0-.043 0-.063V10c.098-1.156-.152-2.262-.75-3.219L27.47 5.72l-4.657 4.656l-1.406-1.469l4.75-4.75l-1.375-.562A7.03 7.03 0 0 0 22 3c-3.844 0-7 3.156-7 7c0 .418.09.781.156 1.156c-.437.438-.765.797-1.281 1.313L9.906 8.5V5.531l-.5-.281l-3.5-2.094zM22 5c.14 0 .238.082.375.094l-3.781 3.781l.687.719l2.813 2.906l.687.719L26.75 9.25c.02.23.184.398.156.656V10c0 2.754-2.246 5-5 5c-.367 0-.812-.086-1.312-.188l-.532-.093l-.375.375l-11.28 11.312h-.032v.032c-.71.777-1.953.796-2.781-.032v-.031h-.032c-.777-.71-.796-1.953.032-2.781c.379-.38 7.718-7.782 11.312-11.375l.407-.406l-.157-.563A6.113 6.113 0 0 1 17 10c0-2.754 2.246-5 5-5zm-16.438.25l2.344 1.438v1l-.218.218h-1L5.25 5.563zm14.625 12.156l6.22 6.188v.031h.03c.778.71.797 1.953-.03 2.781h-.032v.032c-.71.777-1.953.796-2.781-.032l-6.188-6.218z",
  fill: "currentColor"
}, null, -1);
function render$k(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$k, [
    _hoisted_2$k
  ]);
}
var __vite_components_4 = { name: "la-tools", render: render$k };
const _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$j = /* @__PURE__ */ vue.createVNode("path", {
  d: "M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3c2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4l-186.8-186.8l59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7c35.3 0 68.4 13.7 93.4 38.7c24.9 24.9 38.7 58.1 38.7 93.4c0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3L410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3c51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4l186.8 186.8l-59.4 59.4z",
  fill: "currentColor"
}, null, -1);
function render$j(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$j, [
    _hoisted_2$j
  ]);
}
var __vite_components_5 = { name: "ant-design-api-outlined", render: render$j };
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$i = /* @__PURE__ */ vue.createVNode("g", { fill: "none" }, [
  /* @__PURE__ */ vue.createVNode("g", { "clip-path": "url(#IconifyId-17aed1f8362-43c51a-1)" }, [
    /* @__PURE__ */ vue.createVNode("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.415 0C5.968 0 4 2.053 4 4.568c0 1.529.728 2.887 1.847 3.716A4.613 4.613 0 0 0 4 12c0 1.53.728 2.887 1.847 3.716A4.613 4.613 0 0 0 4 19.432C4 21.947 5.968 24 8.415 24c2.446 0 4.415-2.053 4.415-4.568V15.57a4.307 4.307 0 0 0 2.755.999C18.032 16.568 20 14.515 20 12c0-1.53-.727-2.887-1.847-3.716A4.613 4.613 0 0 0 20 4.568C20 2.053 18.032 0 15.585 0h-7.17zM5.659 4.568c0-1.591 1.242-2.865 2.756-2.865h2.755v5.73H8.415c-1.514 0-2.756-1.275-2.756-2.865zm9.926 2.864H12.83v-5.73h2.755c1.515 0 2.756 1.275 2.756 2.866c0 1.59-1.241 2.864-2.756 2.864zM5.66 12c0-1.59 1.242-2.865 2.756-2.865h2.755v5.73H8.415C6.9 14.865 5.659 13.59 5.659 12zm7.17 0c0-1.59 1.242-2.865 2.756-2.865c1.515 0 2.756 1.274 2.756 2.865c0 1.59-1.241 2.865-2.756 2.865c-1.514 0-2.755-1.274-2.755-2.865zm-7.17 7.432c0-1.59 1.242-2.864 2.756-2.864h2.755v2.864c0 1.591-1.24 2.865-2.755 2.865c-1.514 0-2.756-1.274-2.756-2.865z",
      fill: "currentColor"
    })
  ]),
  /* @__PURE__ */ vue.createVNode("defs", null, [
    /* @__PURE__ */ vue.createVNode("clipPath", { id: "IconifyId-17aed1f8362-43c51a-1" }, [
      /* @__PURE__ */ vue.createVNode("path", {
        fill: "#fff",
        d: "M0 0h24v24H0z"
      })
    ])
  ])
], -1);
function render$i(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$i, [
    _hoisted_2$i
  ]);
}
var __vite_components_6 = { name: "akar-icons-figma-fill", render: render$i };
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 15 15"
};
const _hoisted_2$h = /* @__PURE__ */ vue.createVNode("g", { fill: "none" }, [
  /* @__PURE__ */ vue.createVNode("path", {
    d: "M2.5 11.5l9-8l1 9l-5 2l-5-3zm0 0l5-9l2 3m-7 6l1-11l3 3",
    stroke: "currentColor",
    "stroke-linejoin": "round"
  })
], -1);
function render$h(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$h, [
    _hoisted_2$h
  ]);
}
var __vite_components_7 = { name: "teenyicons-firebase-outline", render: render$h };
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$g = /* @__PURE__ */ vue.createVNode("path", {
  d: "M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166a1.536 1.536 0 0 1-2.174 0a1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271l-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822",
  fill: "currentColor"
}, null, -1);
function render$g(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$g, [
    _hoisted_2$g
  ]);
}
var __vite_components_8 = { name: "bx-bxl-git", render: render$g };
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$f = /* @__PURE__ */ vue.createVNode("path", {
  d: "M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-1 2H5v14h14V5zm-2 2v10h-2.5V9.5H12V17H7V7h10z",
  fill: "currentColor"
}, null, -1);
function render$f(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$f, [
    _hoisted_2$f
  ]);
}
var __vite_components_9 = { name: "ri-npmjs-line", render: render$f };
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$e = /* @__PURE__ */ vue.createVNode("path", {
  d: "M0 .401v31.198h32V.401zm1.333 1.333h29.333v28.531H1.333zm6.401 5.974c0-.089.188-.156.297-.156a76.42 76.42 0 0 1 3.438-.068c3.698 0 5.135 2.026 5.135 4.62c0 3.391-2.458 4.844-5.469 4.844c-.51 0-.682-.026-1.036-.026v5.125c0 .109-.042.156-.151.156H7.885c-.109 0-.151-.042-.151-.151zm2.365 7.084c.307.021.552.021 1.083.021c1.557 0 3.026-.552 3.026-2.661c0-1.693-1.052-2.552-2.833-2.552c-.526 0-1.031.021-1.276.042zm11.479-1.589c-1.057 0-1.411.531-1.411.969c0 .484.24.813 1.651 1.542c2.089 1.016 2.75 1.979 2.75 3.411c0 2.13-1.63 3.276-3.828 3.276c-1.167 0-2.161-.245-2.734-.573c-.083-.042-.104-.109-.104-.219v-1.958c0-.13.063-.177.151-.109a4.9 4.9 0 0 0 2.682.792c1.057 0 1.495-.438 1.495-1.036c0-.484-.307-.901-1.646-1.604c-1.896-.906-2.688-1.828-2.688-3.37c0-1.719 1.344-3.146 3.672-3.146c1.146 0 1.953.177 2.396.37c.109.068.13.177.13.266v1.828c0 .109-.068.177-.198.13c-.594-.349-1.469-.573-2.323-.573z",
  fill: "currentColor"
}, null, -1);
function render$e(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$e, [
    _hoisted_2$e
  ]);
}
var __vite_components_10 = { name: "cib-adobe-photoshop", render: render$e };
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 510 512"
};
const _hoisted_2$d = /* @__PURE__ */ vue.createVNode("path", {
  d: "M493.89 58.275L355.178 83.558L379.282 0L186.79 37.718l-2.999 50.64L15.145 58.214C3.53 57.538-3.238 65.879 1.558 77.46l244.056 427.983c5.253 8.575 17.347 8.91 22.65 0L507.575 77.419c5.4-9.676-2.874-21.018-13.685-19.144zm-237 435.435L17.87 74.556l164.993 29.491l-7.778 131.365l67.632-15.608l-18.858 92.344l51.374-15.608l-25.495 123.397c-1.27 8.069 9.241 12.362 14.44.812l150.22-299.792l-74.135 14.308l10.086-34.962l140.91-25.684L256.89 493.71z",
  fill: "currentColor"
}, null, -1);
function render$d(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$d, [
    _hoisted_2$d
  ]);
}
var __vite_components_11 = { name: "file-icons-vite", render: render$d };
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 640 512"
};
const _hoisted_2$c = /* @__PURE__ */ vue.createVNode("path", {
  d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",
  fill: "currentColor"
}, null, -1);
function render$c(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$c, [
    _hoisted_2$c
  ]);
}
var __vite_components_12 = { name: "fa-solid-laptop-code", render: render$c };
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$b = /* @__PURE__ */ vue.createVNode("path", {
  d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6l-245.2-69.6l-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3l22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7l-6.5-73.2h-91l11.3 144.7l188.6 52h1.7v-.4l187.7-51.7l1.7-16.3l21.2-242.2l3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5l4.8-47.2L742 249H511z",
  fill: "currentColor"
}, null, -1);
function render$b(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$b, [
    _hoisted_2$b
  ]);
}
var __vite_components_13 = { name: "ant-design-html5-outlined", render: render$b };
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$a = /* @__PURE__ */ vue.createVNode("path", {
  d: "M7.952 8h6.986l-.177 2h-4.77a1 1 0 0 0 0 2h4.593l-.264 2.977l-2.329.528l-2.328-.529l-.096-1.064a1 1 0 1 0-1.992.177l.16 1.79a1.001 1.001 0 0 0 .775.887l3.26.74a1.019 1.019 0 0 0 .443 0l3.26-.74a1.001 1.001 0 0 0 .775-.888l.432-4.868l.002-.01l-.001-.004l.346-3.908A1.001 1.001 0 0 0 16.031 6H7.952a1 1 0 0 0 0 2zm12.702-5.674A1.002 1.002 0 0 0 19.916 2H4.066a1 1 0 0 0-.996 1.09l1.444 16.194a.999.999 0 0 0 .727.874l6.473 1.805a.99.99 0 0 0 .537 0l6.49-1.812a.999.999 0 0 0 .728-.874l1.443-16.188a1.002 1.002 0 0 0-.258-.763zM17.538 18.41l-5.556 1.551l-5.538-1.545L5.16 4h13.664z",
  fill: "currentColor"
}, null, -1);
function render$a(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$a, [
    _hoisted_2$a
  ]);
}
var __vite_components_14 = { name: "uil-html3-alt", render: render$a };
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 15 15"
};
const _hoisted_2$9 = /* @__PURE__ */ vue.createVNode("g", { fill: "none" }, [
  /* @__PURE__ */ vue.createVNode("path", {
    d: "M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5V.5z",
    stroke: "currentColor"
  })
], -1);
function render$9(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$9, [
    _hoisted_2$9
  ]);
}
var __vite_components_15 = { name: "teenyicons-javascript-outline", render: render$9 };
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$8 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M12.823 15.122c-.517 0-.816.491-.816 1.146c0 .661.311 1.126.82 1.126c.517 0 .812-.49.812-1.146c0-.604-.291-1.126-.816-1.126z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8.022 16.704c0 .961-.461 1.296-1.2 1.296c-.176 0-.406-.029-.557-.08l.086-.615c.104.035.239.06.391.06c.319 0 .52-.145.52-.67v-2.122h.761v2.131zm1.459 1.291c-.385 0-.766-.1-.955-.205l.155-.631c.204.105.521.211.846.211c.35 0 .534-.146.534-.365c0-.211-.159-.331-.564-.476c-.562-.195-.927-.506-.927-.996c0-.576.481-1.017 1.277-1.017c.38 0 .659.08.861.171l-.172.615c-.135-.065-.375-.16-.705-.16s-.491.15-.491.325c0 .215.19.311.627.476c.596.22.876.53.876 1.006c.001.566-.436 1.046-1.362 1.046zm3.306.005c-1.001 0-1.586-.755-1.586-1.716c0-1.012.646-1.768 1.642-1.768c1.035 0 1.601.776 1.601 1.707C14.443 17.33 13.773 18 12.787 18zm4.947-.055h-.802l-.721-1.302a12.64 12.64 0 0 1-.585-1.19l-.016.005c.021.445.031.921.031 1.472v1.016h-.701v-3.373h.891l.701 1.236c.2.354.4.775.552 1.155h.014c-.05-.445-.065-.9-.065-1.406v-.985h.702v3.372zM14 9h-1V4l5 5h-4z",
  fill: "currentColor"
}, null, -1);
function render$8(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$8, [
    _hoisted_2$8,
    _hoisted_3$2
  ]);
}
var __vite_components_16 = { name: "bx-bxs-file-json", render: render$8 };
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
};
const _hoisted_2$7 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M357.333 402c-16.933-1.555-38.666-4.833-59.67-27.772v47.19c38.587 25.082 104.951 20.478 128.087-9.668c13.75-17.917 19.417-41.917 9.237-69.099C411 294.333 354 291.333 337.424 260.822c-18.313-49.418 57.212-58.347 93.498-25.054v-44.36c-15.46-9.985-40.044-11.058-57.29-10.126c-45.511 2.457-76.094 28.901-75.638 68.293c-1.96 54.987 60.83 69.145 92.359 94.592c21.413 18.17 19.88 62.235-33.02 57.833zm-179.691 31.514V220.025h-68.778v-35.303h175.655v35.303h-68.921v213.489h-37.956zM480 32v448H32V32h448zm32-32H0v512h512V0z",
  fill: "currentColor"
}, null, -1);
function render$7(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$7, [
    _hoisted_2$7
  ]);
}
var __vite_components_17 = { name: "file-icons-typescript", render: render$7 };
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$6 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M24.306 4.019H19.5L16 9.556l-3-5.537H2L16 28L30 4.019zm-18.825 2h3.363L16 18.406l7.15-12.387h3.363L16.001 24.031z",
  fill: "currentColor"
}, null, -1);
function render$6(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$6, [
    _hoisted_2$6
  ]);
}
var __vite_components_18 = { name: "cib-vue-js", render: render$6 };
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$5 = /* @__PURE__ */ vue.createVNode("circle", {
  cx: "8",
  cy: "16",
  r: "2",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ vue.createVNode("circle", {
  cx: "16",
  cy: "16",
  r: "2",
  fill: "currentColor"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ vue.createVNode("circle", {
  cx: "24",
  cy: "16",
  r: "2",
  fill: "currentColor"
}, null, -1);
function render$5(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$5, [
    _hoisted_2$5,
    _hoisted_3$1,
    _hoisted_4
  ]);
}
var __vite_components_19 = { name: "carbon-overflow-menu-horizontal", render: render$5 };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$4 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M22.579 11.36c.151.077.291.181.405.307l3.131-1.396l-2.921-2.896l-.657 3.943zm-6.5-2.631c.156.229.249.489.281.765l4.661 1.975c.14-.109.301-.188.473-.235l.765-4.735L19.42 3.52l-3.343 5.135zm15.91 7.318l-4.995-4.995l-3.401 1.391l8.355 3.552s.073.052.041.052zm-.833.813l-8.02-3.428a1.39 1.39 0 0 1-.933.541l-.859 5.277c.255.26.401.609.401.973l4.843 1.016l4.443-4.412v-.083zm-10.625-4.527l-4.353-1.855a1.593 1.593 0 0 1-1.391.724h-.265l-3.609 5.568l9.635-4.172v.011a1.674 1.674 0 0 1 0-.224c.005-.016 0-.036-.016-.052zm5.292 9.746l-4.26-.881a1.4 1.4 0 0 1-.615.459l-1.016 6.297l5.917-5.865s-.011.032-.027.032zm-5.959-.434a1.393 1.393 0 0 1-.823-.948l-7.932-1.629l-.115.183l7.199 10.411l.432-.427l1.224-7.563s.041.031.015.016zm-8.588-3.536l7.839 1.615a1.39 1.39 0 0 1 1.099-.697l.849-5.188l-.183-.156l-9.744 4.177c.052.077.099.161.14.249zm-3.287 1.307l-.167-.165l-3.38 1.389l1.64 1.631l1.865-2.896zm2.23.532a1.895 1.895 0 0 1-.749.167c-.209 0-.407-.032-.605-.099l-2.057 2.995l9.021 8.937l1.588-1.579zm-1.266-3.521c.135-.015.276-.015.416 0c.152-.02.308-.02.459 0l3.645-5.667a1.588 1.588 0 0 1-.443-1.099a1.478 1.478 0 0 1 0-.364L8.603 7.25L5.04 10.718zm.402-9.87l4.317 1.839a1.64 1.64 0 0 1 1.115-.38c.177.005.353.031.525.083l3.371-5.26L15.896.052L9.355 6.473s-.011.068 0 .084zM7.74 17.443c.088-.161.197-.312.323-.448L4.37 11.484L.001 15.729zm-.349.932L.708 16.979l2.937 2.98l3.704-1.573z",
  fill: "currentColor"
}, null, -1);
function render$4(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$4, [
    _hoisted_2$4
  ]);
}
var __vite_components_20 = { name: "cib-netlify", render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512"
};
const _hoisted_2$3 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07l-28.63-56.53l-25.9 79.46l26.3 45h50.7l36.68-111.27l35 111.27z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M48.79 286.09h31.65a93.39 93.39 0 0 0 25.62-3.21l8.18-25.19l22.88-70.39a55.75 55.75 0 0 0-6-7.82Q113.54 160 79.59 160H0v192h48.79zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92zm286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160L512 352h-53.53l-12.4-34.39z",
  fill: "currentColor"
}, null, -1);
function render$3(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$3, [
    _hoisted_2$3,
    _hoisted_3
  ]);
}
var __vite_components_21 = { name: "ion-logo-pwa", render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M28.625 9.099A14.354 14.354 0 0 1 30.38 16c0 5.307-2.87 9.943-7.146 12.432l4.391-12.703c.823-2.052 1.094-3.693 1.094-5.151c0-.542-.036-1.042-.094-1.479zm-10.641.141c.865-.042 1.641-.141 1.641-.141c.776-.099.688-1.24-.089-1.198c0 0-2.339.177-3.839.177c-1.417 0-3.802-.198-3.802-.198c-.776-.042-.88 1.141-.099 1.182c0 0 .719.078 1.5.12l2.24 6.135l-3.161 9.443L7.141 9.197c.865-.036 1.646-.13 1.646-.13c.776-.099.688-1.24-.089-1.198c0 0-2.328.187-3.833.187c-.266 0-.583-.01-.917-.021C6.547 4.196 10.979 1.618 16 1.618c3.745 0 7.151 1.427 9.714 3.776c-.063 0-.12-.01-.188-.01c-1.411 0-2.417 1.229-2.417 2.552c0 1.188.688 2.193 1.417 3.375c.547.958 1.182 2.193 1.182 3.969c0 1.219-.469 2.656-1.094 4.641l-1.432 4.776l-5.198-15.479zM16 30.38c-1.411 0-2.776-.203-4.063-.583l4.313-12.542l4.422 12.115c.031.073.068.135.104.198a14.349 14.349 0 0 1-4.776.813zM1.615 16c0-2.083.448-4.068 1.245-5.854l6.859 18.802C4.927 26.615 1.615 21.693 1.615 16zM16 0C7.182 0 0 7.182 0 16s7.182 16 16 16s16-7.182 16-16S24.818 0 16 0z",
  fill: "currentColor"
}, null, -1);
function render$2(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$2, [
    _hoisted_2$2
  ]);
}
var __vite_components_22 = { name: "cib-wordpress", render: render$2 };
const width$1 = vue.ref(0);
const handleResize = () => {
  width$1.value = window.innerWidth;
  return width$1.value;
};
const device = vue.ref("");
const width = vue.ref(0);
const height = vue.ref(0);
const recoverDevice = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
  if (width.value < 600)
    device.value = "mobile";
  else if (width.value >= 600 && height.value > width.value)
    device.value = "tablet";
  else
    device.value = "desktop";
  return device.value;
};
var _sfc_main$4 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = vueI18n.useI18n();
    vue.onMounted(() => {
      window.addEventListener("resize", handleResize);
      window.addEventListener("resize", recoverDevice);
    });
    vue.onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", recoverDevice);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Overlay = _sfc_main$5;
      const _component_carbon_logo_github = __vite_components_1$1;
      const _component_ant_design_twitter_circle_filled = __vite_components_2;
      const _component_cib_mail_ru = __vite_components_3;
      const _component_la_tools = __vite_components_4;
      const _component_ant_design_api_outlined = __vite_components_5;
      const _component_akar_icons_figma_fill = __vite_components_6;
      const _component_teenyicons_firebase_outline = __vite_components_7;
      const _component_bx_bxl_git = __vite_components_8;
      const _component_ri_npmjs_line = __vite_components_9;
      const _component_cib_adobe_photoshop = __vite_components_10;
      const _component_file_icons_vite = __vite_components_11;
      const _component_fa_solid_laptop_code = __vite_components_12;
      const _component_ant_design_html5_outlined = __vite_components_13;
      const _component_uil_html3_alt = __vite_components_14;
      const _component_teenyicons_javascript_outline = __vite_components_15;
      const _component_bx_bxs_file_json = __vite_components_16;
      const _component_file_icons_typescript = __vite_components_17;
      const _component_cib_vue_js = __vite_components_18;
      const _component_carbon_overflow_menu_horizontal = __vite_components_19;
      const _component_cib_netlify = __vite_components_20;
      const _component_ion_logo_pwa = __vite_components_21;
      const _component_cib_wordpress = __vite_components_22;
      _push(`<!--[--><section class="${serverRenderer.ssrRenderClass([vue.unref(recoverDevice)(), "primary"])}">`);
      _push(serverRenderer.ssrRenderComponent(_component_Overlay, {
        opacity: 50,
        style: { "z-index": "2" }
      }, null, _parent));
      _push(`<div class="${serverRenderer.ssrRenderClass([vue.unref(recoverDevice)(), "primary-container"])}" pos="relative" text="center" style="${serverRenderer.ssrRenderStyle({ "z-index": "10" })}"><h1 text="uppercase size-28px md:size-38px xl:size-44px" m="b-2 xl:b-3">${serverRenderer.ssrInterpolate(vue.unref(t)("index.title"))}</h1><p text="size-16px md:size-18px" m="b-5 xl:b-10">${serverRenderer.ssrInterpolate(vue.unref(t)("index.sub"))}</p><div><a href="https://github.com/TheveninKillian">`);
      _push(serverRenderer.ssrRenderComponent(_component_carbon_logo_github, null, null, _parent));
      _push(`</a><a href="https://twitter.com/Killian_Thvn">`);
      _push(serverRenderer.ssrRenderComponent(_component_ant_design_twitter_circle_filled, { m: "x-5" }, null, _parent));
      _push(`</a><a href="mailto:thevenin.killian@gmail.com">`);
      _push(serverRenderer.ssrRenderComponent(_component_cib_mail_ru, null, null, _parent));
      _push(`</a></div></div></section><section class="about" text="center" p="t-50px b-100px"><h2>${serverRenderer.ssrInterpolate(vue.unref(t)("about.title"))}</h2><div m="t-30px" text="left md:center"><p>${serverRenderer.ssrInterpolate(vue.unref(t)("about.primary"))}</p><p m="t-2 lg:t-3">${serverRenderer.ssrInterpolate(vue.unref(t)("about.second"))}</p><p m="t-2 lg:t-3">${serverRenderer.ssrInterpolate(vue.unref(t)("about.third"))}</p><p m="t-2 lg:t-3">${serverRenderer.ssrInterpolate(vue.unref(t)("about.fourth"))}</p></div></section><section class="skills" pos="relative"><div class="skills-container" pos="absolute -top-50px" display="lg:flex"><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_la_tools, null, null, _parent));
      _push(`<h3>${serverRenderer.ssrInterpolate(vue.unref(t)("skills.primary"))}</h3><ul><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_ant_design_api_outlined, null, null, _parent));
      _push(` API</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_akar_icons_figma_fill, null, null, _parent));
      _push(` Figma</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_teenyicons_firebase_outline, null, null, _parent));
      _push(` Firebase</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_bx_bxl_git, null, null, _parent));
      _push(` Git / Github</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_ri_npmjs_line, null, null, _parent));
      _push(` NPM</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_cib_adobe_photoshop, null, null, _parent));
      _push(` Photoshop</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_file_icons_vite, null, null, _parent));
      _push(` Vite JS</li></ul></div><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_fa_solid_laptop_code, null, null, _parent));
      _push(`<h3>${serverRenderer.ssrInterpolate(vue.unref(t)("skills.second"))}</h3><ul><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_ant_design_html5_outlined, null, null, _parent));
      _push(` HTML</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_uil_html3_alt, null, null, _parent));
      _push(` CSS / SASS</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_teenyicons_javascript_outline, null, null, _parent));
      _push(` Javascript</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_bx_bxs_file_json, null, null, _parent));
      _push(` JSON</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_file_icons_typescript, null, null, _parent));
      _push(` Typescript</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_cib_vue_js, null, null, _parent));
      _push(` Vue</li></ul></div><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_carbon_overflow_menu_horizontal, null, null, _parent));
      _push(`<h3>${serverRenderer.ssrInterpolate(vue.unref(t)("skills.third"))}</h3><ul><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_cib_netlify, null, null, _parent));
      _push(` Netlify</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_ion_logo_pwa, null, null, _parent));
      _push(` PWA</li><li>`);
      _push(serverRenderer.ssrRenderComponent(_component_cib_wordpress, null, null, _parent));
      _push(` Wordpress</li></ul></div></div></section><!--]-->`);
    };
  }
});
var index_vue_vue_type_style_index_0_lang = '.primary {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: calc(100vh - 50px);\n  background-image: url("__VITE_ASSET__5d952a9c__");\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: calc(100vh - 50px);\n  overflow: hidden;\n  z-index: 1;\n  transition: background-size 0.3s;\n}\n.primary.tablet {\n  align-items: flex-start;\n  background-size: 60vh;\n}\n@media (min-width: 1280px) {\n  .primary.desktop {\n    align-items: center;\n    justify-content: flex-start;\n    height: calc(100vh - 75px);\n    background-position: 120% 50%;\n    background-size: calc(100vh - 100px);\n  }\n}\n@media (min-width: 1440px) {\n  .primary.desktop {\n    background-position: 105% 50%;\n  }\n}\n@media (min-width: 1600px) {\n  .primary.desktop {\n    background-position: right;\n  }\n}\n.primary .overlay {\n  height: calc(100vh - 75px);\n}\n.primary-container {\n  bottom: calc(50vh / 3);\n}\n.primary-container.tablet {\n  bottom: inherit;\n  top: 15vh;\n}\n@media (min-width: 1280px) {\n  .primary-container.desktop {\n    bottom: inherit;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 250px;\n    width: 50%;\n    border-right: 1px solid white;\n  }\n}\n@media (min-width: 1440px) {\n  .primary-container.desktop {\n    height: 350px;\n  }\n}\n.primary svg {\n  width: 35px;\n  height: 35px;\n  transition: 0.4s;\n}\n.primary svg:hover {\n  color: #7510f7;\n}\n.about {\n  background-color: #7510f7;\n}\n.about p {\n  line-height: 18px;\n}\n.skills {\n  height: calc(929px - 50px);\n}\n@media (min-width: 768px) {\n  .skills {\n    height: calc(989px - 50px);\n  }\n}\n@media (min-width: 1024px) {\n  .skills {\n    height: calc(384px - 50px);\n  }\n}\n@media (min-width: 1280px) {\n  .skills {\n    height: calc(409px - 50px);\n  }\n}\n.skills-container {\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 20px);\n  max-width: 1200px;\n  background-color: #1a1a1a;\n  border-top: 1px solid rgba(255, 255, 255, 0.5);\n  border-left: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.5);\n}\n@media (min-width: 768px) {\n  .skills-container {\n    width: calc(100% - 50px);\n  }\n}\n@media (min-width: 1280px) {\n  .skills-container {\n    width: calc(100% - 100px);\n  }\n}\n.skills-container div {\n  padding: 40px;\n  text-align: center;\n}\n@media (min-width: 1024px) {\n  .skills-container div {\n    width: calc(100% / 3);\n  }\n}\n.skills-container div svg {\n  width: 30px;\n  height: 30px;\n}\n@media (min-width: 1024px) {\n  .skills-container div svg {\n    width: 40px;\n    height: 40px;\n  }\n}\n.skills-container div:nth-child(1), .skills-container div:nth-child(2) {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n@media (min-width: 1024px) {\n  .skills-container div:nth-child(1), .skills-container div:nth-child(2) {\n    border-bottom: none;\n    border-right: 1px solid rgba(255, 255, 255, 0.5);\n  }\n}\n.skills-container h3 {\n  margin: 20px 0;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.skills-container ul li svg {\n  position: relative;\n  top: 3px;\n  width: 16px;\n  height: 16px;\n}\n@media (min-width: 768px) {\n  .skills-container ul li svg {\n    width: 18px;\n    height: 18px;\n  }\n}\n@media (min-width: 1280px) {\n  .skills-container ul li svg {\n    width: 20px;\n    height: 20px;\n  }\n}';
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const routes$1 = [{ "name": "index", "path": "/", "component": _sfc_main$4, "props": true }, { "name": "about", "path": "/about", "component": () => Promise.resolve().then(function() {
  return about;
}), "props": true }];
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24z",
  fill: "currentColor"
}, null, -1);
function render$1(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1$1, [
    _hoisted_2$1
  ]);
}
var __vite_components_0 = { name: "mdi-translate", render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("g", { fill: "none" }, [
  /* @__PURE__ */ vue.createVNode("path", {
    d: "M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z",
    fill: "currentColor"
  })
], -1);
function render(_ctx, _cache) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}
var __vite_components_1 = { name: "ci-hamburger", render };
var _sfc_main$3 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const activeNav = vue.ref(false);
    vue.onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    vue.onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Overlay = _sfc_main$5;
      const _component_ci_hamburger = __vite_components_1;
      _push(`<!--[-->`);
      if (activeNav.value) {
        _push(serverRenderer.ssrRenderComponent(_component_Overlay, vue.mergeProps({
          opacity: 90,
          style: { "z-index": "20", "height": "100vh" }
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(handleResize)() < 1024) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "icon-nav",
          cursor: "pointer",
          m: "r-2"
        }, _attrs))} data-v-5f4f2ab9>`);
        _push(serverRenderer.ssrRenderComponent(_component_ci_hamburger, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(handleResize)() < 1024) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: ["nav-mobile", { active: activeNav.value }],
          pos: "fixed",
          h: "full",
          z: "50"
        }, _attrs))} data-v-5f4f2ab9><ul text="center" data-v-5f4f2ab9><li data-v-5f4f2ab9>Portfolio</li><div h="1px" w="1/2" m="auto" bg="light-500 opacity-50" data-v-5f4f2ab9></div><li data-v-5f4f2ab9>Contact</li></ul></nav>`);
      } else {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "nav-desktop" }, _attrs))} data-v-5f4f2ab9><ul display="flex" data-v-5f4f2ab9><li data-v-5f4f2ab9>Portfolio</li><li data-v-5f4f2ab9>Contact</li></ul></nav>`);
      }
      _push(`<!--]-->`);
    };
  }
});
var Nav_vue_vue_type_style_index_0_scoped_true_lang = ".icon-nav[data-v-5f4f2ab9] {\n  width: 24px;\n  height: 24px;\n}\n@media (min-width: 768px) {\n  .icon-nav[data-v-5f4f2ab9] {\n    width: 26px;\n    height: 26px;\n  }\n}\n.icon-nav svg[data-v-5f4f2ab9] {\n  width: 100%;\n  height: 100%;\n}\n.nav-mobile[data-v-5f4f2ab9] {\n  top: 0;\n  right: -70%;\n  width: 70%;\n  background-color: #1a1a1a;\n  transition: right 0.3s ease;\n}\n.nav-mobile.active[data-v-5f4f2ab9] {\n  right: 0;\n}\n@media (min-width: 768px) {\n  .nav-mobile[data-v-5f4f2ab9] {\n    width: 40%;\n  }\n}\n.nav-mobile li[data-v-5f4f2ab9] {\n  margin: 0;\n  height: 70px;\n  line-height: 70px;\n  font-size: 20px;\n}\n.nav-desktop li[data-v-5f4f2ab9] {\n  margin-right: 10px;\n}\n.nav-desktop li[data-v-5f4f2ab9]:nth-child(1), .nav-desktop li[data-v-5f4f2ab9]:nth-child(2) {\n  margin-right: 15px;\n}\nli[data-v-5f4f2ab9] {\n  cursor: pointer;\n}";
_sfc_main$3.__scopeId = "data-v-5f4f2ab9";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Nav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var _sfc_main$2 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { t, availableLocales, locale } = vueI18n.useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_mdi_translate = __vite_components_0;
      const _component_Nav = _sfc_main$3;
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<!--[--><header display="flex" pos="relative" align="items-center" h="50px xl:75px" p="t-10px"><div w="w-1/2"><p text="uppercase" m="l-2 lg:l-10px">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Killian Thevenin `);
          } else {
            return [
              vue.createTextVNode(" Killian Thevenin ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div display="flex" justify="end" w="w-1/2" text="right"><div class="translation" m="r-15px lg:r-30px" cursor="pointer">`);
      _push(serverRenderer.ssrRenderComponent(_component_mdi_translate, null, null, _parent));
      _push(`${serverRenderer.ssrInterpolate(vue.unref(t)("language"))}</div><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_Nav, null, null, _parent));
      _push(`</div></div><div class="header-border" pos="absolute bottom-0 left-50%" h="2px" bg="light-500"></div></header>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`<footer><p>${serverRenderer.ssrInterpolate(vue.unref(t)("footer"))}</p></footer><!--]-->`);
    };
  }
});
var default_vue_vue_type_style_index_0_lang = ".translation {\n  color: #fbf337;\n}\n.translation svg {\n  width: 15px;\n  height: 15px;\n  margin-right: 2px;\n}\n@media (min-width: 768px) {\n  .translation svg {\n    width: 17px;\n    height: 17px;\n  }\n}\n@media (min-width: 1280px) {\n  .translation svg {\n    width: 18px;\n    height: 18px;\n  }\n}\n.header-border {\n  width: calc(100% - 20px);\n}\n@media (min-width: 768px) {\n  .header-border {\n    width: calc(100% - 50px);\n  }\n}\n@media (min-width: 1280px) {\n  .header-border {\n    width: calc(100% - 100px);\n  }\n}\nfooter {\n  padding: 25px 0;\n  background-color: #1a1a1a;\n  border-top: 1px solid rgba(255, 255, 255, 0.5);\n}\nfooter p {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 14px;\n  text-align: center;\n}";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/default.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const layouts = {
  "default": _sfc_main$2
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [route]
    };
  });
}
var _sfc_main$1 = vue.defineComponent({
  name: "App",
  setup(props) {
    head.useHead({
      title: "Killian Thevenin",
      meta: [
        { name: "description", content: "Opinionated Vite Starter Template" }
      ]
    });
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_view = vue.resolveComponent("router-view");
  _push(serverRenderer.ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
_sfc_main$1.ssrRender = _sfc_ssrRender;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var windi = `/* windicss layer base */
*, ::before, ::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
* {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
}
:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
:-moz-focusring {
  outline: 1px dotted ButtonText;
}
:-moz-ui-invalid {
  box-shadow: none;
}
::moz-focus-inner {
  border-style: none;
  padding: 0;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
a {
  color: inherit;
  text-decoration: inherit;
}
body {
  margin: 0;
  font-family: inherit;
  line-height: inherit;
}
html {
  -webkit-text-size-adjust: 100%;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  line-height: 1.5;
}
h1, h2, h3 {
  font-size: inherit;
  font-weight: inherit;
}
p, h1, h2, h3 {
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* windicss layer components */

/* windicss layer utilities */
[bg~="light-500"] {
  --tw-bg-opacity: 1;
  background-color: rgba(242, 242, 242, var(--tw-bg-opacity));
}
[bg~="opacity-50"] {
  --tw-bg-opacity: 0.5;
}
[cursor~="pointer"] {
  cursor: pointer;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
[display~="flex"] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.hidden {
  display: none;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
[align~="items-center"] {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
[justify~="end"] {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
[h~="full"] {
  height: 100%;
}
[h~="1px"] {
  height: 1px;
}
[h~="50px"] {
  height: 50px;
}
[h~="2px"] {
  height: 2px;
}
[text~="size-28px"] {
  font-size: 28px;
  line-height: 1;
}
[text~="size-16px"] {
  font-size: 16px;
  line-height: 1;
}
.m-auto {
  margin: auto;
}
[m~="auto"] {
  margin: auto;
}
[m~="x-5"] {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
[m~="r-2"] {
  margin-right: 0.5rem;
}
[m~="l-2"] {
  margin-left: 0.5rem;
}
[m~="r-15px"] {
  margin-right: 15px;
}
[m~="b-2"] {
  margin-bottom: 0.5rem;
}
[m~="b-5"] {
  margin-bottom: 1.25rem;
}
[m~="t-30px"] {
  margin-top: 30px;
}
[m~="t-2"] {
  margin-top: 0.5rem;
}
.opacity-50 {
  opacity: 0.5;
}
[opacity~="90"] {
  opacity: 0.9;
}
[opacity~="50"] {
  opacity: 0.5;
}
[p~="t-10px"] {
  padding-top: 10px;
}
[p~="t-50px"] {
  padding-top: 50px;
}
[p~="b-100px"] {
  padding-bottom: 100px;
}
.fixed {
  position: fixed;
}
[pos~="fixed"] {
  position: fixed;
}
.absolute {
  position: absolute;
}
[pos~="absolute"] {
  position: absolute;
}
.relative {
  position: relative;
}
[pos~="relative"] {
  position: relative;
}
.bottom-0 {
  bottom: 0px;
}
.-top-50px {
  top: -50px;
}
[pos~="bottom-0"] {
  bottom: 0px;
}
[pos~="-top-50px"] {
  top: -50px;
}
.resize {
  resize: both;
}
.text-left {
  text-align: left;
}
[text~="left"] {
  text-align: left;
}
[text~="center"] {
  text-align: center;
}
[text~="right"] {
  text-align: right;
}
.uppercase {
  text-transform: uppercase;
}
[text~="uppercase"] {
  text-transform: uppercase;
}
.w-1\\/2 {
  width: 50%;
}
[w~="1/2"] {
  width: 50%;
}
[w~="w-1/2"] {
  width: 50%;
}
[z~="50"] {
  z-index: 50;
}
@media (min-width: 768px) {
  [text~="md:size-38px"] {
    font-size: 38px;
    line-height: 1;
  }
  [text~="md:size-18px"] {
    font-size: 18px;
    line-height: 1;
  }
  [text~="md:center"] {
    text-align: center;
  }
}
@media (min-width: 1024px) {
  .lg\\:flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  [display~="lg:flex"] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  [m~="lg:l-10px"] {
    margin-left: 10px;
  }
  [m~="lg:r-30px"] {
    margin-right: 30px;
  }
  [m~="lg:t-3"] {
    margin-top: 0.75rem;
  }
}
@media (min-width: 1280px) {
  [h~="xl:75px"] {
    height: 75px;
  }
  [text~="xl:size-44px"] {
    font-size: 44px;
    line-height: 1;
  }
  [m~="xl:b-3"] {
    margin-bottom: 0.75rem;
  }
  [m~="xl:b-10"] {
    margin-bottom: 2.5rem;
  }
}`;
var style = '@font-face {\n  font-family: "ginesosoft-conboouploadedfile";\n  src: url("__VITE_ASSET__3a847f3e__") format("woff2"), url("__VITE_ASSET__1738f2d7__") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "ginesosoft-conliguploadedfile";\n  src: url("__VITE_ASSET__1d760dd8__") format("woff2"), url("__VITE_ASSET__4805ba57__") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "ginesosoft-condemuploadedfile";\n  src: url("__VITE_ASSET__9255ec5d__") format("woff2"), url("__VITE_ASSET__ca1de29c__") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\nhtml, body, #app {\n  min-height: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #000000;\n}\n#app {\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #fff;\n}\nheader, section, footer {\n  padding-left: 10px;\n  padding-right: 10px;\n  font-family: "ginesosoft-conboouploadedfile";\n}\nh1, h2, header p {\n  font-family: "ginesosoft-condemuploadedfile";\n}\nh1 {\n  color: #7510f7;\n}\n@media screen and (min-width: 375px) {\n  #app {\n    font-size: 16px;\n  }\n  h2, header p {\n    font-size: 20px;\n  }\n}\n@media screen and (min-width: 768px) {\n  #app {\n    font-size: 18px;\n  }\n  header, section {\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n  h2, header p {\n    font-size: 22px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  #app {\n    font-size: 20px;\n  }\n  header, section {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  h2, header p {\n    font-size: 32px;\n  }\n}';
const routes = setupLayouts(routes$1);
const createApp = viteSsg.ViteSSG(_sfc_main$1, { routes }, (ctx) => {
  Object.values({ "./modules/i18n.ts": __glob_7_0 }).map((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
var _sfc_main = vue.defineComponent({
  setup(__props) {
    head.useHead({
      title: "Vite-key | about"
    });
    return () => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createApp = createApp;
