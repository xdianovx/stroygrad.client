import { Footer, Header } from '../components'

export default function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}
