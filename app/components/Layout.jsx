import Navbar from './Navbar'
import Footer from './Footer'
import ThemeSetter from './ThemeSetter'

function Layout({children}){
    return <div className= "flex flex-col h-screen">
       
            <Navbar />
        <main className="py-10 mb-auto">{children}</main>
            <Footer/>
    </div>
}

export default Layout