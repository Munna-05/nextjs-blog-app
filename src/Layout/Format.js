import Header from "Components/Header"
import Footer from "Components/Footer"

export default function Format({children}){

    return (
        <>
       
        <Header/>
        <main>{children}</main>
        <Footer/>
        
        
        </>
    )
}