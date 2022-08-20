import SideBar from "../components/SideBar";
import Chat from "../components/Chat";
import Head from "next/head";


const Home = () => {
  return (
    <>
    <Head>
      <title>Whatsapp</title>
    </Head>
    <div className="font-sans flex">
    <SideBar />
    <Chat />
    </div>
    </>
  );
}

export default Home