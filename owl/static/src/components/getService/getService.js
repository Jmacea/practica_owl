/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";
import { Component, useSubEnv, useState } from "@odoo/owl";

export class GetService extends Component {
    setup() {
        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            },
        });
        this.getService = useService("rick_morty.getService");
        this.state = useState({ character : [] });
    }
    async getService() {
        this.state.character = this.getService;
    }
}

GetService.template = "rick_morty.get_service";
GetService.components = { Layout };

registry.category("actions").add("rick_morty.get_service", GetService);