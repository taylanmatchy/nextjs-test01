import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import axios from "../../../../../lib/axios";

export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-intelligent-password",
        },
      },
      async authorize(credentials, req) {
        const res = await axios.post("/auth/login", {
          username: credentials?.username,
          password: credentials?.password,
        });

        const user = res.data;

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ account });
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;

      return session;
    },
  },
};
