import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" Home flex flex-col items-center justify-between">
      <section className="section1">
        <Image src={"/Mindfully Brand Logo.png"} width={340} height={70} alt="mindfully" tabIndex={0} />
        <p className="text-5xl font-bold text-left mt-10 mb-5" tabIndex={0}>
          Talk to a mental health
          <br />
          counselor who cares, who will
          <br />
          help you live your best life.
        </p>
        <span className="text-2xl font-normal leading-9 tracking-normal text-left" tabIndex={0}  >
          Our high-quality therapy, customized treatment, and comprehensive
          <br />
          solutions will help you grow and thrive.
        </span>
        <br />
        <div className="mt-10">
          <Link className="Find text-xl font-bold leading-7 tracking-normal text-left" href={"/"}>Find Your Therapist</Link>
          <br />
          <br />
          <Link className="namSection1 text-lg font-bold leading-7 tracking-normal text-left" href={"/"}><i />888-830-0347</Link>
        </div>
      </section>
      <section className="section2 w-full flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold tracking-normal text-center mt-40" tabIndex={0}>How can we help?</h2>
        <p className="text-2xl font-normal leading-9 tracking-normal text-center" tabIndex={0}>Our team of expert mental health counselors will help you heal, grow
          <br />
          and flourish. We customize the treatment program to fit your needs.</p>
        <div className="items mt-20">
          <div className="item flex items-center">
            <Image src={"/Image.png"} width={376} height={250} tabIndex={0} alt="A photo of two people having a conversation, one wearing a light green sweater and gesturing with their hands, the other wearing a striped shirt and holding a notebook" />
            <div className="right-side ml-10" tabIndex={0}>
              <h3 className="text-4xl font-bold tracking-normal text-left mb-2">Individual Counseling Therapy</h3>
              <p className="text-2xl font-normal leading-9 tracking-normal text-left">Our mental health counselors have a range of
                <br />
                specializations. Get matched with the therapist who best
                <br />
                meets your needs.</p>
            </div>
          </div>
          <div className="item flex items-center mt-20">
            <Image src={"/Image (1).png"} width={376} height={250} tabIndex={0} alt="A photo of a couple sitting on a light pink couch in front of a counselor, wearing light colored clothing" />
            <div className="right-side ml-10" tabIndex={0}>
              <h3 className="text-4xl font-bold tracking-normal text-left mb-2">Couples Therapy</h3>
              <p className="text-2xl font-normal leading-9 tracking-normal text-left">Our expert counselors may help you get your relationship
                <br />
                with your loved one back on solid footing.
              </p>
            </div>
          </div>
          <div className="item flex items-center mt-20">
            <Image src={"/Image (2).png"} width={376} height={250} tabIndex={0} alt="Two men in a room, one sitting on a brown couch, and the other standing, wearing a black jacket and gesturing with their hands." />
            <div className="right-side ml-10" tabIndex={0}>
              <h3 className="text-4xl font-bold tracking-normal text-left mb-2">Specialized Care</h3>
              <p className="text-2xl font-normal leading-9 tracking-normal text-left">Our experts will direct you to more specialized care if you
                <br />
                need it. Trust us to find a customized solution to help you
                <br />
                succeed.</p>
            </div>
          </div>
        </div>
        <Link className="text-xl font-bold leading-7 tracking-normal text-left find2 mt-20" href={"/"}>Find Your Care</Link>
        <Link className="text-xl font-bold leading-7 tracking-normal text-left nam2 mt-2 mb-40" href={"/"}>888-830-0347</Link>
      </section>
      <section className="section3 flex flex-col justify-center items-center">
        <span className="text-lg font-bold leading-7 tracking-normal text-left mt-40 mb-2" tabIndex={0}>TESTIMONIALS</span>
        <h2 className="text-4xl font-bold tracking-normal text-center" tabIndex={0}>Real stories from real people</h2>
        <div className="items mt-12">
          <div className="item">
            <p className="text-2xl italic font-normal leading-9 tracking-normal text-left" tabIndex={0}>
              My teletherapy counselor has been a game-changer in my life. Her support and expertise have empowered me to overcome obstacles I never thought possible. I'm grateful for the transformative impact she's had on my well-being!
            </p>
            <small className="text-lg font-bold leading-7 tracking-normal text-left mt-4" tabIndex={0}>He/Him, aged 42</small>
          </div>
          <div className="item ">
            <p className="text-2xl italic font-normal leading-9 tracking-normal text-left" tabIndex={0}>
              I’ve been in therapy for a year and it helps me deal with my anxiety. I wish I started sooner!
            </p>
            <small className="text-lg font-bold leading-7 tracking-normal text-left mt-4" tabIndex={0}>She/Her, aged 28</small>
          </div>
          <div className="item ">
            <p className="text-2xl italic font-normal leading-9 tracking-normal text-left" tabIndex={0}>
              Therapy has changed my life. My counselor is incredible. She understands me, gives me practical tools, and helps me navigate my traumas and fears.
            </p>
            <small className="text-lg font-bold leading-7 tracking-normal text-left mt-4" tabIndex={0}>She/Her, aged 19</small>
          </div>
        </div>
        <Link className="text-xl font-bold leading-7 tracking-normal text-left find2 mt-20 mb-40" href={"/"}>View All Stories</Link>
      </section>
      <section className="section4">
        <div className="content flex justify-center items-center">
          <Image src={"/Rectangle 118.png"} width={315} height={412} tabIndex={0} alt="Woman wearing an orange blouse with a buttoned neckline, standing in a green garden with trees and bushes, with black shoulder-length hair" />
          <div className="right-side ml-32">
            <h2 className="text-5xl font-bold text-left" tabIndex={0}>Are You Ready To
              <br />
              Schedule Your Session?
            </h2>
            <p className="text-2xl font-normal leading-9 tracking-normal text-left mt-5 mb-8" tabIndex={0}>Invest in yourself. You're worth it.</p>
            <Link className="text-xl font-bold leading-7 tracking-normal text-left find2" href={"/"}>Schedule Now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}