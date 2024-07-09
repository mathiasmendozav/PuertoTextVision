// Navbar Component

const Navbar = () => {
    return (
        <nav className="bg-blue-900 text-white py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
                <img src="logo.png" alt="Logo" className="h-8 mr-2" />
                <span className="font-semibold text-lg">PuertoTextVision</span>
            </div>
            <button className="bg-white text-blue-900 py-2 px-4 rounded shadow-md">Generar Text</button>
        </nav>
    )
}

export default Navbar;