import Header from "../components/Headers"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

export default function Mainlayout() {

return  <div

style={{
    minHeigth: "100vh"
}}
 >
    <Header />
    
    <div className= "body">
       <Menu />

    <main>
        Content goes here
    </main>
    </div>

    <Footer />
</div>
}