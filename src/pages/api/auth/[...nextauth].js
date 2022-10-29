import NextAuth, { nextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize: async (credentials, req) => {
                const { username, password } = credentials;
                if (user === null) {
                    return null;
                }
                if (user.password !== creds.password) return null;
                
                return {
                    id: user.id,
                    username: user.username,
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
};


// eslint-disable-next-line new-cap
export default NextAuth(nextAuthOptions);