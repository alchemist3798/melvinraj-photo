import Navbar from '@/components/Navbar'

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Navbar light />

      {children}
    </>
  )
}