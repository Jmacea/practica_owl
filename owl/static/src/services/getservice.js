/** @odoo-module */

import { registry } from "@web/core/registry";

const API = "https://rickandmortyapi.com/api/character"


export const getService = {
    dependencies: ["http"],
    async start(env, { http }) {
        const listGet = await http.get(API);
        return listGet;
    },
};

registry.category("services").add("rick_morty.getService", getService);