import { Features, Download, SectionWrapper } from './components'
import assets from './assets'
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling and Owning"
        description="Store, Collect NFTs, Exchange & Earn Crypto. Join 25+ million people using ProNef MarketPlace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User interface Marketplace"
        description="Experience a buttery UI of ProNef MarketPlace. Smooth Constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverve
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screens list all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by <span className='bold'>Demilade</span></p>
      </div>
    </>
  );
}

export default App;
