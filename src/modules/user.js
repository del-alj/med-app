
import { database } from "../../Level/index.js";

export async function login(credentials) {

    const dbusers = await database();

    return dbusers.get(credentials?.username)
        .then((res) => {
            if (!res) throw new Error(404);
            if (res.password !== credentials.password) { throw new Error("Informations de connexion invalides"); }
            if (res.isActive === false) throw new Error("Ce compte a été bloqué.");
            return { status: 200, name: res.name, username: res.username };
        })
        .catch((err) => {
            return { err };
        });
}