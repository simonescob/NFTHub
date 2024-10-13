import logo from '../assets/logo-nfthub.svg'
import walletIcon from "../assets/Link-3.svg"

function Navbar() {

  const navItems = [
    {
      name: 'home',
      url: '',
    },
    {
      name: 'Collections',
      url: '',
    },
    {
      name: 'choose',
      url: '',
    },
    {
      name: 'About',
      url: '',
    },
    {
      name: 'Roadmap',
      url: '',
    },
    {
      name: 'Blog',
      url: '',
    },
  ];

  const navIcons = [
    walletIcon,
    walletIcon,
    walletIcon,
    walletIcon,
  ];

  return (
    <nav className="py-5 flex justify-between items-center">
      <img src={logo.src} alt="" />
      <div className="flex space-x-5 px-2 list-none">
        {navItems.map(item =>
          <li><a className='capitalize' href="">{item.name}</a></li>
          )}
      </div>
      <div className="flex space-x-4">
        {navIcons.map(icon =>
          <img className='cursor-pointer' src={icon.src} alt="" />  
        )}
      </div>
    </nav>
  )
}

export default Navbar;