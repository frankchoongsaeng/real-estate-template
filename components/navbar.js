import { useEffect, useRef } from "react"

const NavBar = () => {
  const navbar = useRef();
  useEffect(() => {
    
  }, [])

  return (
    <div ref={navbar} onClick={() => console.log(window.scrollY)} className="w-full z-50 top-0 fixed bg mb-16 bg-transparent">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center">
        <h1 className="bg-gray-800 transform rotate-3  cursor-default text-5xl text-blue-300 px-4">Logo</h1>
        <div className="flex items-center space-x-8 px-2">
          <a href="/" className="link-with-hover-effect text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2">Home</a>
          <a href="/" className="link-with-hover-effect text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2">Products</a>
          <a href="/" className="link-with-hover-effect text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2">About Us</a>
          <a href="/" className="link-with-hover-effect text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;