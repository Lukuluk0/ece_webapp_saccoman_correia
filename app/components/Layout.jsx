import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}){
    return <div className= "flex flex-col h-screen">
            <Navbar />
        <main className="py-11 mb-auto bg-slate-200 dark:bg-gray-900">{children}</main>
            <Footer/>
    </div>
}

export default Layout