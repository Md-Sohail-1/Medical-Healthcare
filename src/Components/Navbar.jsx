import { useState }  from 'react'
import Logo from './Logo'
import { ListFilter } from 'lucide-react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false)
  
  return (
    <>
    <nav className="backdrop-blur-xl mix-blend-lighten bg-black w-screen z-50 fixed top-0 left-0" >
      <div className='max-w-360 mx-auto flex h-16 items-center justify-between px-5 md:px-15'>
      <Logo />
      <ul className="gap-6 hidden md:flex text-base-text mix-blend-none" >
        <li><a href="#about" aria-label="go to About section link">About</a></li>
        <li><a href="#services" aria-label="go to Our-Medical-Services section link">Services</a></li>
        <li><a href="#ourTeam" aria-label="go to Our-Team section link">Our Team</a></li>
        <li><a href="#contactUs" aria-label="go to Contact-us section link">Contact Us</a></li>
      </ul>
      <button aria-label="toggle navigation" className="md:hidden text-base-text" onClick={()=> setShowNavigation(!showNavigation)} >{showNavigation ? <X />: <ListFilter />}</button>
      <button aria-label="book an Appointment" className="cursor-pointer hidden md:block bg-base-text active:outline-base-text active:outline-1 active:bg-base-text/80 hover:bg-base-text/90 text-base px-4 py-2 rounded-md text-sm" >Make Appointment</button>
      </div>
    </nav>
      <ul className={`${showNavigation ? 'translate-x-0' : 'hidden -translate-x-full'} 
        flex transition duration-400 ease-in h-screen top-16 px-5 bg-base-text py-5 left-0 flex-col
        fixed text-base gap-2 w-2/3 max-w-[300px] shadow-[1px_0px_1px_rgba(1,1,1,0.3)]
        *:py-2  *:rounded-md *:text-black/90 *:hover:text-base
        `} >
        <li><a href="#home" aria-label="go to Home section link">Home</a></li>
        <li><a href="#about" aria-label="go to About section link">About</a></li>
        <li><a href="#services" aria-label="go to Our-Medical-Services section link">Services</a></li>
        <li><a href="#ourTeam" aria-label="go to Our-Team section link">Our Team</a></li>
        <li><a href="#contactUs" aria-label="go to Contact-us section link">Contact Us</a></li>
        <li><button aria-label="book an Appointment" className="bg-base/80 w-full active:outline-base/80 active:outline-1 active:bg-base/80 focus:bg-base text-base-text px-4 py-3 rounded-md text-sm" >Make Appointment</button></li>
      </ul>
      
    </>
  )
}

export default Navbar