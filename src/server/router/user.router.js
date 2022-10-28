
import db from "../../../Level/index";

export const getUserRoute = (name) => {
    console.log(name)
    return db.get(name).then((res) => {
        return (res);
    }).catch((err) => {
        console.log("User Not Found");
        return (null);
    });
}