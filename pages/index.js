import Head from 'next/head';
import NavBar from '../components/navbar';
import Hero from "../components/hero";
import Container from "../components/container";
import FeaturedListings from '../components/featured-listings';
import TopStories from "../components/top-stories";
import CustomCarousel from "../components/custom-carousel";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <Container>
        <FeaturedListings />
        <TopStories />
        {/* *************** TESTIMONIES ******************* */}
        <div className="my-32 pt-5 space-y-6 border-t-2">
          <h1 className="text-2xl">Featured Listings</h1>
          <CustomCarousel />
        </div>
      </Container>

    </div>
  )
}
