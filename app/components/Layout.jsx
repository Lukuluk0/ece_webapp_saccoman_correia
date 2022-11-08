import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}){
    return <div>
            <Navbar />
        <main className="">{children}</main>
        <Footer/>
    </div>
}

export default Layout