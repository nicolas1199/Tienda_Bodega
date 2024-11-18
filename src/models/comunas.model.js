import db from "../config/configDb.js";

export const Comunas = {
    getAll: async () => {

        const [rows] = await db.query(`select * from comuna_cl,provincia_cl,region_cl
                                        where comuna_cl.id_pr=provincia_cl.id_pr
                                        and provincia_cl.id_re=region_cl.id_re`);
        return rows;
    }
}