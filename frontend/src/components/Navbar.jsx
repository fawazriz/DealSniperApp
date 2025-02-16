
function Navbar() {

    return (
      <>
        <header className="bg-opacity-0">
          <div className="container mx-auto flex justify-between items-center">
  
            <div id="logo" className="text-lg font-bold text-gray-800">
                <img src="/logo.png" alt="DealSniper logo" className="h-15 p-1"/>
            </div>
            
  
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-purple-800">About</a>
                </li>
                <li>
                  <a href="#features" className="text-gray-600 hover:text-purple-800">Features</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-purple-800">Contact</a>
                </li>
                <li>
                  <a href="#signup" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 hover:text-white">Sign Up</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
  
  
      </>
    )
  }
  
  export default Navbar