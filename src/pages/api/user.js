
// import { getUser } from "../../modules/user.js"
// import { sign } from 'jsonwebtoken';

// export const login = async (values) => {
    
//     const name = values?.username;
//     return await getUser(name).then((res) => {
//         if (res?.password === values?.password && res?.isActive) {
//             const jwt = sign(res, "0e900be1-0ac5-4e6a-bf4b-38f8b21a189b", { expiresIn: '1h' });
//             // console.log(jwt)
//             localStorage.setItem( "authToken", jwt );
//             return ({ authToken: jwt });
//         } else if (res?.password === values?.password && !res?.isActive)
//             throw new Error({ message: 'Unauthorized access : user Bloked' });
//         else
//         throw new Error({ message: 'Unauthorized access: bad password' });
//     }).catch((err) => {
//         // console.log(err)
//         return ({ message: 'Unauthorized access: user does not exist' });
//     });
// };
