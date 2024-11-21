import figureHero from "../../assets/figure-hero.png"
import item1 from "../../assets/Item.png"
import item2 from "../../assets/Item-1.png"
import item3 from "../../assets/Item-2.png"
import ButtonCTA from "../Components/ButtonCTA"
import { MiniArrowIcon } from "../utils/icons"
import bgHeader from "../../assets/bg-header.png";


function Header() {
  const listImages = [item1, item2, item3];
  return (
    <div className="lg:h-[85vh] pb-20 lg:pb-0 flex flex-wrap lg:flex-nowrap flex-column lg:flex-row justify-center lg:justify-start items-center lg:space-x-8">
      <div className="absolute top-0 left-0 z-[-10] h-screen">
        <img src={bgHeader.src} alt="" />
      </div>
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-left">High quality <br className="hidden lg:block" /> NFT Collection</h1>
        <p className="text-[#7B7583] text-center lg:text-left">A 890 piece custom Nfthub's collection is <br /> joining the NFT space on Opensea.</p>
        <div className="flex justify-center lg:justify-start">
          <ButtonCTA>View in OPENSEA <span className="ml-2"><MiniArrowIcon/></span></ButtonCTA>
        </div>
        <div className="flex justify-center lg:justify-start items-center space-x-3 lg:pt-6">
          <div className="flex -space-x-5">
            {listImages.map((image, index) => (
              <img key={index} src={image.src} alt="" />
            ))}
          </div>
          <div className="">
            <div className="text-xl font-bold">47k+</div>
            <div className="text-[10px] text-gray-400">Community members</div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={figureHero.src} alt="" />
      </div>
    </div>
  )
}

export default Header;