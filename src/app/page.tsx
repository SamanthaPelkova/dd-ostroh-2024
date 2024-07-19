import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="">
        <img src="/images/bg-1-photo.webp" className="" />

        <img
          src="/images/bg-3.png"
          alt="background-image"
          className="invisible sm:visible lg:-mt-2 md:-mt-20 "
        />
        <img
          src="/images/bg-4.png"
          alt="background-image"
          className="visible sm:invisible sm:mt-2 -mt-20"
        />
      </div>
      <Container className="relative z-10 min-h-screen bg-transparent font-sans antialiased mt-6 sm:mt-5">
        <div className="flex">
          <div className="lg:-mt-80 md:-mt-64 sm:-mt-64">
            <WorkOffer />
          </div>
          <img
            src="/images/bg-5.png"
            className="w-1/2 h-80 -mt-80 invisible sm:visible"
          />
        </div>
      </Container>
    </main>
  );
}

function HomePageActions() {
  return <div className=""></div>;
}

function WorkOffer() {
  return (
    <div className="">
      <h1 className="lg:px-10 px-2 lg:py-6 py-4 bg-yellow-300 lg:text-xl text-xs rounded-t-lg lg:w-1/2 w-1/1 italic sm:w-1/2">
        V Y C H O V A T E L / K A
      </h1>
      <img src="/images/aktuality-vychovatel.jpg" className="sm:w-1/2 w-1/1" />
      <div className="bg-orande-100">
        <h2 className="px-2 lg:pt-4 py-2 bg-orange-100 lg:text-xl text-xs lg:w-1/2 sm:w-1/2 w-1/1 italic font-bold">
          NÁSTUP: 1. 9. 2024, resp. 26.8.2024
        </h2>
        <p className="px-4 lg:-mt-4 -mt-2 lg:py-4 py-2 bg-orange-100 lg:text-l text-xs lg:w-1/2 w-1/1 -pt-6 sm:w-1/2">
          Na dlouhodobý zástup za pracovní neschopnost do Dětského Domova v
          Uherském Ostrohu.
        </p>
        <h3 className="px-4 lg:-mt-2 -mt-0 bg-orange-100 lg:text-xl text-sm lg:w-1/2 w-1/1 -pt-6 sm:w-1/2 font-bold">
          Požadavky:
        </h3>
        <p className="px-4 bg-orange-100 lg:text-l text-xs lg:w-1/2 w-1/1 -pt-6 sm:w-1/2 italic pb-20 rounded-b-lg">
          ~ VŠ vzdělání v oblasti speciální nebo sociální pedagogiky
        </p>
        <div className="-mt-14 lg:ml-28 xs:ml-20 sm:ml-6 ml-20 flex ">
          <p></p>
          <Button className="lg:w-1/1 w-64 bg-customBlue">
            VŠECHNA VOLNÁ MÍSTA
          </Button>
        </div>
      </div>
    </div>
  );
}
