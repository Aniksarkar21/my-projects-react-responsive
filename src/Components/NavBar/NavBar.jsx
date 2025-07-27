import { MdOutlineMenu } from "react-icons/md";
import Link from "../Link/Link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/', name: 'About' },
        { id: 3, path: '/', name: 'Services' },
        { id: 4, path: '/', name: 'Contact' },
        { id: 5, path: '/', name: 'NotFound' },
    ]


    return (
        <nav className="bg-cyan-400 p-6">
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open === true ?  <IoMdClose></IoMdClose>  :  <MdOutlineMenu></MdOutlineMenu>
                }
               
            </div>
          
            <ul className= {`md:flex duration-1000 absolute md:static bg-cyan-400 px-6 ${open? 'top-16': '-top-60'}`} >
                {
                    routes.map(route => <Link route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;