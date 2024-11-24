import db from "../config/configDb.js";

export const Ingresado ={
    getUser: async ()=>{
        const [rows] = await db.query(`SELECT * FROM Ingresado ing, region_cl reg,provincia_cl pr,comuna_cl co 
                                  WHERE ing.id_co=co.id_co
                                  AND co.id_pr = pr.id_pr
                                  AND pr.id_re = reg.id_re`)
        
        
        return rows[0]
    },

    LogOut: async ()=>{
        await db.query('DELETE FROM ingresado;');
        console.log('Sesión Cerrada');
    },
    
    verif: async(mail,clave)=>{
        const [user] = await db.query(`SELECT * FROM Usuarios
                                    WHERE mail = ? 
                                    && clave = ?`,[mail,clave])
        return user;
    },
    login: async (usuario)=>{
        const { rut, str_nombre, mail, clave, rol, str_dir, id_co } = usuario;
        db.query(`INSERT INTO Ingresado
                (rut, str_nombre, mail, clave, rol, str_dir, id_co)
                VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [rut, str_nombre, mail, clave, rol, str_dir, id_co]
            )
    }
}