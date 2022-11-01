import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "../../../modules/user"
import { sign } from 'jsonwebtoken';
import db from "../../../../Level/index";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {

        //get user
        const name = credentials?.username;
        db.open("users");
        db?.get(name).then((res)=> {console.log("55555555555", res)}).catch((err)=>{console.log("err", err)})
        const test = await getUser(name);
        console.log("*******11******", test)
        // await getUser(name).then((res) => {
        //   console.log("*******11******", res)
        //     if (res?.password === credentials?.password && res?.isActive) {
        //         const jwt = sign(res, "0e900be1-0ac5-4e6a-bf4b-38f8b21a189b", { expiresIn: '7d' });
        //         localStorage.setItem( "authToken", jwt );
        //         return ({ authToken: jwt });
        //     } else if (res?.password === credentials?.password && !res?.isActive)
        //         throw new Error('Unauthorized access : user Bloked');
        //     else
        //     throw new Error('Unauthorized access: bad password');
        // }).catch((err) => {
        //   console.log("csrfToken")
        //     throw new Error('Unauthorized access: user does not exist');
        // });
        // return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
