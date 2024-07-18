import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="underline 2">
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
        <div className="flex justify-between">
          <p></p>
          <img
            src="/images/bg-3.png"
            alt="background-image"
            className="w-1/6 "
          />
        </div>
      </div>
      <Container className="relative z-10 min-h-screen bg-transparent font-sans antialiased mt-6 sm:mt-5">
        <div>
          <HomePageActions />
        </div>
      </Container>
    </main>
  );
}

function HomePageActions() {
  return <div className=""></div>;
}
