import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

const handler =  NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      id:"credentials",
      name: "Credentials",
      async authorize(credentials) {

        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            //Chech the password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
              );

            if (isPasswordCorrect) {
              console.log(user);
              return user;
            }else{
              throw new Error("Mot de passe incorrect!");
            }

          } else {
            throw new Error("Utilisateur inexistant !");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  }
});

export {handler as GET, handler as POST};