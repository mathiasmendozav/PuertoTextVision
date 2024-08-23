////////////////////
// Navbar Component
////////////////////
import logo from '../../public/logo.jpg';
import { BsRobot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#001540] border-b-[3px] border-gray-300 text-white py-4 px-6 max-md:px-3 flex items-center justify-between sticky top-[-1px] z-50">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-12 max-md:h-10 mr-2" />
                <span className="font-semibold text-xl max-md:text-base">PuertoTextVision</span>
            </div>
            <Link to={'/'} onClick={() => {
                if (window.location.pathname === '/') { window.location.reload(); }
            }}>
                <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded shadow-md max-md:px-2.5 max-md:text-sm">
                    <BsRobot /> Generar Texto
                </button>
            </Link>
        </nav>
    )
}

export default Navbar;
