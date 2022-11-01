
import {db} from "../../Level/index.js";

export const getUser = (name) => {
    console.log("//////////", res)
    return db?.get(name).then((res) => {

        return (res);
    }).catch((err) => {
        console.log("///ee//////", err)
        return (err);
    });
}