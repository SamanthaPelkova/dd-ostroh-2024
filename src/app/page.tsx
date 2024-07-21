import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Shape from "../components/Shape";

export default function Home() {
  return (
    <main className="relative">
      <div className="">
        <img
          src="/images/bg-1-photo.webp"
          className="border-b-2 border-customYellow border-b-4"
        />
      </div>
      <Container className="relative z-10 min-h-screen bg-transparent font-sans antialiased mt-6 sm:mt-5">
        <div className="mb-20">
          <h1 className="text-customYellow w-1/1 p-4 font-bold lg:text-4xl text-2xl lg:mt-0 -mt-6 rounded-b-full text-center border-b-2 border-customYellow border-b-4">
            A K T U A L I T Y
          </h1>
        </div>
        <div className="md:flex items-center lg:justify-between lg:mt-10 lg:mx-10 mx-0 ml-6">
          <HomePageActionWork>
            <p className="underline text-sm text-white">Právě hledáme:</p>
            <h1 className="text-center text-2xl my-4 font-bold italic text-white">
              VYCHOVATEL/KA
            </h1>
            <img
              src="/images/aktuality-vychovatel.jpg"
              className="rounded-3xl"
            />
            <h2 className="font-bold italic mt-4 text-center text-white">
              NÁSTUP: 1. 9. 2024, resp. 26.8.2024
            </h2>
            <p className="italic mt-2 text-sm text-white">
              Na dlouhodobý zástup za pracovní neschopnost do Dětského Domova v
              Uherském Ostrohu.
            </p>
            <h3 className="font-bold italic mt-4 text-white">Požadavky:</h3>
            <p className="italic mt-2 text-sm text-white">
              ~ VŠ vzdělání v oblasti speciální nebo sociální pedagogiky
            </p>
            <Button className="bg-customYellow hover:bg-customYellow mt-4">
              VŠECHNA VOLNÁ MÍSTA
            </Button>
          </HomePageActionWork>

          <HomePageAction>
            <h1 className="text-center text-2xl my-6 font-bold italic text-customYellow">
              KOUPALIŠTĚ V.N.M.
            </h1>
            <img
              src="/images/akce/akce2024/koupaliste-veseli-nad-moravou/2.jpg"
              className="rounded-3xl"
            />
            <h2 className="font-bold italic mt-4 text-center">
              14. července 2024
            </h2>
            <p className="italic mt-2 text-sm text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              voluptate, et magnam, modi ea sequi facilis omnis voluptates
              necessitatibus dolor ratione ullam minus exercitationem, fuga
              obcaecati culpa ipsum! Corporis, eum. Lorem ipsum dolor sit
            </p>

            <Button className="bg-customYellow hover:bg-customYellow mt-4">
              VIDĚT VÍCE
            </Button>
          </HomePageAction>
          <HomePageAction>
            <h1 className="text-center text-2xl my-6 font-bold italic text-customYellow">
              VÝSTAVA VEČERNÍČKU
            </h1>
            <img
              src="/images/akce/akce2024/vystava-vecernicku-krysaci-v-zamecke-galerii/1.png"
              className="rounded-3xl"
            />
            <h2 className="font-bold italic mt-4 text-center">
              20. července 2024
            </h2>
            <p className="italic mt-2 text-sm text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              voluptate, et magnam, modi ea sequi facilis omnis voluptates
              necessitatibus dolor ratione ullam minus exercitationem, fuga
              obcaecati culpa ipsum! Corporis, eum. Lorem ipsum dolor sit amet
            </p>

            <Button className="bg-customYellow hover:bg-customBlueHoverDark mt-4">
              VIDĚT VÍCE
            </Button>
          </HomePageAction>
        </div>
        <div className="flex relative mt-40">
          <a
            className="underline z-50 relative mt-96 ml-4 text-3xl italic md:ml-10"
            href="https://donio.cz/daruj-sen"
            target="_blank"
          >
            DONIO
          </a>
          <a
            className="underline z-50 relative mt-80 ml-28 text-3xl italic"
            href="https://spln-prani.webnode.cz/"
            target="_blank"
          >
            SPLŇ PŘÁNÍ
          </a>
          <Shape
            top={73}
            left={-14}
            width={500}
            height={200}
            colorClass="fill-customWhiteGreen"
          />
          <BuykidsDream />
          <div className="mt-10 md:visible invisible">
            <p className="z-50 relative text-right w-96 ml-20">
              Pomáhají jim rozvíjet fantazii, motivaci a pocit, že na jejich
              touhy a sny záleží.
            </p>
            <div className=" md:visible invisible">
              <Shape
                top={-22}
                left={60}
                width={600}
                height={300}
                colorClass="fill-customYellow"
              />
            </div>
          </div>

          <Shape
            top={60}
            left={5}
            width={500}
            height={200}
            colorClass="fill-pink-400"
          />
        </div>
      </Container>
    </main>
  );
}

function HomePageAction({ children }: any) {
  return (
    <div className="p-5 cursor-pointer border-gray-100 mb-4 lg:border-none border-2 shadow-lg shadow-customYellowHover rounded-xl md:w-1/2 mr-10 hover:shadow-customYellow hover:shadow-2xl transition-shadow">
      {children}
    </div>
  );
}

function HomePageActionWork({ children }: any) {
  return (
    <div className="p-5 cursor-pointer border-gray-100 mb-4 lg:border-none border-2 shadow-lg shadow-customYellowHover rounded-xl md:w-1/2 mr-10 hover:shadow-customYellow hover:shadow-2xl transition-shadow bg-gradient-to-tr from-blue-600 via-customWhiteGreen to-customYellow">
      {children}
    </div>
  );
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

function BuykidsDream() {
  return (
    <div className="mt-10 md:-mt-20 relative lg:-ml-96 -ml-64">
      <h1 className="text-customDarkGreen w-1/1 p-4 font-bold lg:text-4xl text-2xl lg:mt-0 -mt-2 rounded-b-full text-center">
        SPLŇTĚ DĚTEM PŘÁNÍ
      </h1>
      <p className="mt-2 text-center -mx-4">
        Přání jsou pro děti nesmírně důležitá, protože jim dávají naději a
        radost v každodenním životě. :)
      </p>
    </div>
  );
}
