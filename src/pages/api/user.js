
import { getUserRoute } from "../../modules/user.js"
import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export const login = async (req, res) => {
    
    console.log("-------------", req)
    const name = values?.username;
    return await getUserRoute(name).then((res) => {
        if (res?.password === values?.password && res?.isActive) {
            const jwt = sign(res, "0e900be1-0ac5-4e6a-bf4b-38f8b21a189b", { expiresIn: '1h' });
            res.json({ authToken: jwt });
        } else if (res?.password === values?.password && !res?.isActive)
            res.json({ message: 'Unauthorized access : user Bloked' });
        else
            res.json({ message: 'Unauthorized access: bad password' });
    }).catch((err) => {
        console.log(err)
        res.json({ message: 'Unauthorized access: user does not exist' });
    });
};
