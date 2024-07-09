// Navbar Component
import logo from '../../public/logo.jpg'
import { BsRobot } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="bg-[#001540] text-white py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-12 mr-2" />
                <span className="font-semibold text-xl">PuertoTextVision</span>
            </div>
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded shadow-md"><BsRobot /> Generar Texto</button>
        </nav>
    )
}

export default Navbar;
