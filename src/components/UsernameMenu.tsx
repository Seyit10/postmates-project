import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from './ui/separator'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const { user , logout } = useAuth0();
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-color1 gap-2">
                    <CircleUserRound className="text-color1" />
                    {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>

                <DropdownMenuItem>
                    <Link to="/manage-restaurant" className="font-bold hover:text-color1"> 
                        Restoranı Yönet
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-color1"> 
                        Kullanıcı Profili
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button onClick={()=> logout()} className="flex flex-1 font-bold bg-color1">
                        Çıkış Yap
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;