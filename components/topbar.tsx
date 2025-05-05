'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import getInitials from '@/helpers/getInitials'

import { buttonVariants } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ToggleMode from '@/components/toggle-mode'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import SignOutButton from '@/components/sign-out-button'

const Topbar = () => {
  const { data: session } = useSession()

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950'>
      <div className='mx-5 flex w-full items-center justify-between'>
        <Link href='/' className={buttonVariants({ variant: 'link' })}>
          <h1 className='font-bold'>🖥️ Pinjam Lab.</h1>
        </Link>

        <div className='flex items-center gap-3'>
          <ToggleMode />
          {!session?.user ? (
            <Link
              href='/signin'
              className={buttonVariants({ variant: 'ghost' })}
            >
              <span>Sign In</span>
            </Link>
          ) : (
            <div className='flex items-center gap-3'>
              <Link
                href='/dashboard'
                className={`${buttonVariants({ variant: 'ghost' })}`}
              >
                <span>Dashboard</span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className='h-8 w-8 cursor-pointer'>
                    <AvatarImage src={session.user.image!} />
                    <AvatarFallback>
                      {getInitials(session.user.name!)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <SignOutButton className='px-2 py-1.5 font-normal' />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Topbar
