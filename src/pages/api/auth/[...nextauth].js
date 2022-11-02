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
            throw new Error(error.message);
          })
      },
    }),
  ],
  callbacks: {
    async signIn(res) {
      if (res?.user?.err) {
        if (res?.user?.err?.message === "NotFound:") {
          console.log("error", " user not found")
        }
        else console.log("error", res?.user?.err?.message)
        return false;
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
  // use env variable in production
  secret: "looselipssinkships",
});
