import Head from 'next/head';
import NavBar from '../components/navbar';
import Hero from "../components/hero";
import Container from "../components/container";
import FeaturedListings from '../components/featured-listings';
import TopStories from "../components/top-stories";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Home() {
  return (
    <div>
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
          {/* <div className="carousel w-full">
            <div  className="carousel-wrapper whitespace-nowrap space-x-4">
              <div className="max-w-5xl w-full h-96 bg-blue-500 inline-block" >

              </div>
              <div className="max-w-5xl w-full h-96 bg-blue-500 inline-block" >

              </div>
              <div className="max-w-5xl w-full h-96 bg-blue-500 inline-block" >

              </div>
            </div>
          </div> */}
          <Carousel
            renderThumbs={[]}
            renderArrowNext={}
          >
            <div className="max-w-5xl w-full h-96 bg-blue-500 inline-block" >

            </div>
            <div className="max-w-5xl w-full h-96 bg-blue-500 inline-block" >

            </div>
            <div className="max-w-5xl w-full h-96 bg-blue-500 inline-block" >

            </div>
          </Carousel>
        </div>
      </Container>

    </div>
  )
}
