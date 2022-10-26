import Navbar from './Navbar'

function Layout({children}){
    return <div>
        <header>
            <Navbar />

        </header>
        <main className="">{children}</main>
    </div>
}

export default Layout