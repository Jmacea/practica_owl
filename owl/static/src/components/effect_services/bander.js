// /** @odoo-module **/

// import { browser } from "@web/core/browser/browser";

// import { Component, useEffect, useExternalListener, useState } from "@odoo/owl";

// export class Bander extends Component {
//     setup() {
//         useExternalListener(document.body, "click", this.closeBander);
//         this.state = useState({ isFading: false });
//         this.delay = Bander.rainbowFadeouts[this.props.fadeout];
//         if (this.delay) {
//             useEffect(
//                 () => {
//                     const timeout = browser.setTimeout(() => {
//                         this.state.isFading = true;
//                     }, this.delay);
//                     return () => browser.clearTimeout(timeout);
//                 },
//                 () => []
//             );
//         }
//     }

//     onAnimationEnd(ev) {
//         if (this.delay && ev.animationName === "reward-fading-reverse") {
//             ev.stopPropagation();
//             this.closeBander();
//         }
//     }

//     closeBander() {
//         this.props.close();
//     }
// }

// Bander.template = "owl.Bander";
// Bander.rainbowFadeouts = { slow: 4500, medium: 3500, fast: 2000, no: false };
