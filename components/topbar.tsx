'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import ToggleMode from '@/components/toggle-mode'

const Topbar = () => {
  return (
    <nav className='fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950'>
      <div className='mx-5 flex w-full items-center justify-between'>
        <Link href='/' className={buttonVariants({ variant: 'link' })}>
          <h1 className='font-bold'>🖥️ Pinjam Lab.</h1>
        </Link>

        <div className='flex items-center gap-3'>
          <ToggleMode />
          <Link href='/signin' className={buttonVariants({ variant: 'ghost' })}>
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
