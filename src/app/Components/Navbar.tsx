import logo from '../../assets/logo-nfthub.svg'
import walletIcon from "../../assets/Link-3.svg"
import twitterIcon from "../../assets/twitter.svg"
import discordIcon from "../../assets/discord.svg"
import instagramIcon from "../../assets/instagram.svg"
import menuMobileIcon from "../../assets/menu-mobile.svg"

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
    twitterIcon,
    discordIcon,
    instagramIcon,
    walletIcon,
  ];

  return (
    <nav className="py-5 flex justify-between items-center px-3 lg:px-0">
      <img className='w-[100px] lg:w-[148px]' src={logo.src} alt="" />
      <div className="hidden lg:flex space-x-5 px-2 list-none">
        {navItems.map((item, index) =>
          <li key={index}><a className='capitalize font-semibold' href="">{item.name}</a></li>
        )}
      </div>
      <div className="flex space-x-4">
        {navIcons.map((icon, index) =>
          <img key={index} className={`cursor-pointer ${index === 0 && 'hidden lg:block'}`} src={icon.src} alt="" />  
        )}
        <img className="pl-2" src={menuMobileIcon.src} alt="" />
      </div>
    </nav>
  )
}

export default Navbar;