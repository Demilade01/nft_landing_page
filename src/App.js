import { Features, Download, SectionWrapper } from './components'
import assets from './assets'

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
    </>
  );
}

export default App;
