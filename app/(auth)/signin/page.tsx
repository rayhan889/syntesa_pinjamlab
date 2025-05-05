'use client'

import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export default function SignIn() {
  const [isAuthGoogleLoading, setIsAuthGoogleLoading] = useState(false)

  const loginWithGoogle = async () => {
    setIsAuthGoogleLoading(true)

    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.log('Sign in error', error)
    } finally {
      setIsAuthGoogleLoading(false)
    }
  }

  return (
    <section className='mx-auto w-full lg:max-w-md'>
      <div className='flex w-full flex-col space-y-4 p-2'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-medium'>Pinjam Lab.</h1>
          <span className='text-gray-400 dark:text-gray-500'>
            Manage your any laboratory needs here.
          </span>
        </div>

        <div className='flex w-full flex-col items-center gap-4'>
          <Button
            isLoading={isAuthGoogleLoading}
            variant='outline'
            className='w-full'
            onClick={loginWithGoogle}
            disabled={isAuthGoogleLoading}
          >
            {isAuthGoogleLoading ? null : <FcGoogle className='mr-1 h-4 w-4' />}
            Continue with Google
          </Button>
          <p className='mt-4 max-w-sm text-center text-xs text-gray-400 dark:text-gray-500 md:text-sm'>
            By continuing, you acknowledge that you understand and agree to the{' '}
            <u className='cursor-pointer text-gray-600 dark:text-white'>
              Terms & Conditions
            </u>{' '}
            and{' '}
            <u className='cursor-pointer text-gray-600 dark:text-white'>
              Privacy Policy
            </u>
          </p>
        </div>
      </div>
    </section>
  )
}
