import Header from "@/components/Header";
import Background from "@/components/Background";
import Footer from "@/components/Footer";


type Props = {
    children : React.ReactNode;
    showHero? : boolean;
};

const layout = ({children, showHero=false}:Props) => {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            {showHero && <Background/>}
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>
            <Footer/>
        </div>
    )
};

export default layout;