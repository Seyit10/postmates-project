import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const {logout} = useAuth0();
    return(
        <>
            <Link to="/user-profile" className="flex bg-white items-center font-bold hover:text-color1">
                Kullanıcı Profili
            </Link>
            <Link to="/manage-restaurant" className="flex bg-white items-center font-bold hover:text-color1">
                Restoranı Yönet
            </Link>
            <Button onClick={()=>logout()} className="flex items-center px-3 font-bold hover:bg-gray-500"> 
                Çıkış Yap
            </Button>
        </>
    )
}

export default MobileNavLinks;