import bcrypt from 'bcryptjs';
import dbConnect from "@/backend/config/dbConnect";
import User from "@/backend/models/users";
import IUser from "@/backend/models/users";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from 'next-auth';
import CredentailsProvider from 'next-auth/providers/credentials';


type Credentials = {
  email: string;
  password: string;
};

// type : 일반적인 타입을 구현할때 사용되며
// interface : 객체의 타입을 구현할때 사용된다.

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentailsProvider({
        // @ts-igonore
        async authorize(credentials: Credentials) {
          dbConnect();

          const { email, password } = credentials;
          const user = await User.findOne({ email }).select("+password");
          
          if (!user) {
            throw new Error("Invalid Email or Password");
          }

          const isPasswordMatched = await bcrypt.compare(password, user.password);
          //Cannot read properties of undefined (reading 'compare')

          if(!isPasswordMatched) {
            throw new Error("Invalid Email or Password");
          }

          return user;
        },
      })
    ],
    callbacks: {
      jwt: async (token, user) => {
        console.log('token=>',token);

        user && (token.user = user);
        return token;
      },
      session: async (session, token) => {
        session.user = token.user as IUser;

        console.log('session=>', session);
        return session;
      },
    secret: process.env.NEXTAUTH_SECRET
    }
  });
}

export { auth as GET, auth as POST };

