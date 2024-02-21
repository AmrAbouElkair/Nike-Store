import {
  Footer,
  Hero,
  NavBar,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from "./components";

function App() {
  return (
    <>
      <main className="relative dark:bg-black overflow-hidden">
        <NavBar />
        <section id="home" className="wide:padding-r xl:padding-l padding-b">
          <Hero />
        </section>
        <section id="products" className="padding">
          <PopularProducts />
        </section>
        <section id="about-us" className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section id="about-us" className="padding">
          <SpecialOffer />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
