
import db from "../../Level/index";

export const getUser = (name) => {
    return db.get(name).then((res) => {
        return (res);
    }).catch((err) => {
        return (err);
    });
}