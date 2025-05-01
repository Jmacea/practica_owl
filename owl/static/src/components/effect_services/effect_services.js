// /** @odoo-module **/

// import { registry } from "@web/core/registry";
// import { Layout } from "@web/search/layout";
// import { getDefaultConfig } from "@web/views/view";
// import { Component, useSubEnv } from "@odoo/owl";



// export class EffectServices extends Component {
//     setup() {
//         useSubEnv({
//             config: {
//                 ...getDefaultConfig(),
//                 ...this.env.config,
//             },
//         });
        

//     }

//     getEffect(){
//         this.effectServices.add({
//             type: "rainbow_man",
//             message: "El servicio esta funcionando correctamente",

//         })
//     }
// }

// EffectServices.template = "owl.EffectServices";
// EffectServices.components = { Layout };

// registry.category("actions").add("owl.EffectServices", EffectServices);