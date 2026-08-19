import Header from "../components/Header"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

export default function Mainlayout() {

return  <div

style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: 'column',

}}
 >
    <Header />
    
    <div className= "body"
    style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',

    }}
    >
       <Menu />

    <main
    style={{
        backgroundColor: 'blue',
        flex: 1,
        
    }}
    >
        Content goes here
    </main>
    </div>

    <Footer />
</div>
}