import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import * as Auth from "../../../modules/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      name: "Login",
      type: "credentials",
      async authorize(credentials) {
        return await Auth.login(credentials).catch((res) => {
          return res;
        })
          .catch((error) => {
            console.log(error.message)
            return (error);
          })
      },
    }),
  ],
  callbacks: {
    async signIn(res) {
      if (res?.user?.err) {
        if (res?.user?.err?.message === "NotFound:")
          throw new Error(" user not found")
        else
          throw new Error(res?.user?.err?.message)
      }

      return true;
    },
    async session({ session }) {
      session.user.isLoggedIn = true;
      return session;
    },
    async jwt({ token, user }) {
      return token;
    },
  },
  
  secret: "looselipssinkships",
});
