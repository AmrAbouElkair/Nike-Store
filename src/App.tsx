import {
  CustomerReviews,
  Footer,
  Hero,
  NavBar,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./components";

function App() {
  return (
    <>
      <main className="relative overflow-hidden dark:bg-black">
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
        <section className="padding bg-pale-blue dark:bg-black">
          <CustomerReviews />
        </section>
        <section id="contact-us" className="padding-x w-full py-16 sm:py-32">
          <Subscribe />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
