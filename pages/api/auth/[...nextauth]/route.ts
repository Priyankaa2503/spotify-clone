import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import db from "@/lib/db";
import UserModel from "@/models/User";

// sign in
export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                await db();
                const user = await UserModel.findOne({ email });
                if (!user) throw Error("email/passwword mismatch!");
                const passwordMatch = await user.comparePassword(password);
                if (!passwordMatch) throw Error("email/passwword mismatch!");
                return {
                    name: user.name,
                    email: user.email,
                    id: user._id.toString(),
                };
            },
        }),
    ],
    callbacks: {
        jwt(params: any) {
            if (params.user?.name) {
                params.token.name = params.user.name;
                params.token.id = params.user.id;
            }
            return params.token;
        },
        session({ session, token }) {
            if (session.user) {
                (session.user as { id: string }).id = token.id as string;
                (session.user as { name: string }).name = token.name as string;
            }
            return session;
        },
    },
};

const authHandler = NextAuth(authOptions);

export const { GET, POST } = authHandler; // Add a comma after 'authOptions' in the export statement
