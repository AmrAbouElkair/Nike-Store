import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import Services from "./components/Services/Services";
import SpecialOffer from "./components/Specialoffer/SpecialOffer";
import Subscribe from "./components/Subscribe/Subscribe";
import SuperQuality from "./components/SuperQuality/SuperQuality";
import NavBar from "./components/UI/Navbar/NavBar";

function App() {
  return (
    <>
      <main className="relative dark:bg-black">
        <NavBar />
        <section className="wide:padding-r xl:padding-l padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue dark:bg-black">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t bg-black pb-8 ">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
