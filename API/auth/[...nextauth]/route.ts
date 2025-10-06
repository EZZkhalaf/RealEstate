import NextAuth, {
  DefaultSession,
  NextAuthOptions,
  Account,
  JWT,
  Session,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/**
 * Module augmentation for custom session & JWT types
 */
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     accessToken?: string;
//   }
// }

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

/**
 * Auth options
 */
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // Add accessToken to the JWT
    async jwt({ token, account }: { token: JWT; account?: Account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // Add accessToken to the session
    async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

/**
 * Next.js App Router requires separate GET and POST exports
 */
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
