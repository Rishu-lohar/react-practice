import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost:
    process.env.NODE_ENV === "development" ||
    process.env.AUTH_TRUST_HOST === "true",
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "Rishu" &&
          credentials?.password === "12345"
        ) {
          return {
            id: "1",
            name: "Rishu",
            email: "rishulohar266@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
});