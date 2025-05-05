import NextAuth, { type NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'

export const authConfig = {
  providers: [Google],
  pages: {
    signIn: '/signin'
  }
} satisfies NextAuthConfig

export const { handlers, auth, signOut } = NextAuth(authConfig)
