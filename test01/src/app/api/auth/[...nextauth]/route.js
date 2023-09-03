import NextAuth from "next-auth";

const handler = NextAuth();

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
