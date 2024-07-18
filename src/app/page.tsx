import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="">
        <div className="relative inset-0 flex justify-between">
          <img
            src="/images/bg-1.png"
            alt="background-image"
            className="w-1/3"
          />
          <img
            src="/images/bg-2.png"
            alt="background-image"
            className="w-1/2"
          />
        </div>
        <img
          src="/images/bg-3.png"
          alt="background-image"
          className="w-1/1 relative"
        />
      </div>
      <Container className="relative z-10 min-h-screen bg-transparent font-sans antialiased mt-6 sm:mt-5">
        <div className="flex">
          <WorkOffer />
          <HomePageActions />
        </div>
      </Container>
    </main>
  );
}

function HomePageActions() {
  return <div className="sm:visible invisible">hovno</div>;
}

function WorkOffer() {
  return (
    <div className="lg:mt-10">
      <h1 className="lg:px-20 px-2 lg:py-4 py-2 bg-yellow-300 lg:text-xl text-xs rounded-t-lg lg:w-1/3 w-1/1 italic font-bold sm:w-1/3">
        V Y C H O V A T E L / K A
      </h1>
      <img src="/images/aktuality-vychovatel.jpg" className="sm:w-1/3 w-1/1" />
      <div className="bg-orande-100">
        <h2 className="px-2 lg:pt-4 py-2 bg-orange-100 lg:text-xl text-xs lg:w-1/3 w-1/1 italic font-bold sm:w-1/3">
          NÁSTUP: 1. 9. 2024, resp. 26.8.2024
        </h2>
        <p className="px-4 lg:py-4 py-2 bg-orange-100 lg:text-l text-xs lg:w-1/3 w-1/1 -pt-6 sm:w-1/3">
          Na dlouhodobý zástup za pracovní neschopnost do Dětského Domova v
          Uherském Ostrohu.
        </p>
      </div>
    </div>
  );
}
