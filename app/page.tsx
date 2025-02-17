import Footer from "@/components/Footer";
import Intro from "../components/Intro";
export default function Home() {
  return (
    <>
      <section className=" pt-40">
        <div className="container max-w-3xl">
          <Intro />
        </div>
        <Footer />
      </section>
    </>
  );
}
