// // import { Bander } from " ./bander";
// import { registry } from "@web/core/registry";


// const effectRegistry = registry.category("effects");


// function bander(env, params = {}) {
//     let message = params.message;
//     if (message instanceof jQuery) {
//         console.log(
//             "Providing a jQuery element to an effect is deprecated. Note that all event handlers will be lost."
//         );
//         message = message.html();
//     } else if (message instanceof Element) {
//         console.log(
//             "Providing an HTML element to an effect is deprecated. Note that all event handlers will be lost."
//         );
//         message = message.outerHTML;
//     } else if (!message) {
//         message = env._t("Well Done!");
//     }
//     if (env.services.user.showEffect) {
//         const props = {
//             imgUrl: params.img_url || "/rick_morty/static/img/VE.svg",
//             fadeout: params.fadeout || "medium",
//             message,
//             Component: params.Component,
//             props: params.props,
//         };
//         return { Component: Bander, props };
//     }
//     env.services.notification.add(message);
// }
// effectRegistry.add("bander", bander);