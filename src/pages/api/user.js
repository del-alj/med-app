
import { getUserRoute } from "../../server/router/user.router.js"
export const login = async (values) => {
    const name = values?.username;
    return await getUserRoute(name).then((res) => {
        if (res?.password === values?.password && res?.isActive)
            return res;
        else if (res?.password === values?.password && !res?.isActive)
            return  new Error('Unauthorized access : user Bloked');
        else
            return new Error('Unauthorized access: bad password');;
    }).catch((err) => {
        console.log(err)
        return 'Unauthorized access: user does not exist';
    });
};
