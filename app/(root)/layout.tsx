import Topbar from '@/components/topbar'

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Topbar />

      <section className='container mx-auto flex h-screen items-center justify-center'>
        {children}
      </section>
    </>
  )
}
