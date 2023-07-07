import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

import Header from './components/Header';
const App = () => {
  let tl = gsap.timeline();
  let wrapper = useRef(null);
  let main = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: main.current,
      smooth: true,
    });
    scroll.scrollTo(main.current);
    tl.to(wrapper.current, { y: '100vh', scale: 0.6, duration: 0 });
    tl.to(wrapper.current, { y: '30vh', duration: 1, delay: 1 });
    tl.to(wrapper.current, { y: '0vh', rotate: 360, scale: 1, duration: 0.7 });

    return () => {
      clearInterval(scroll);
    };
  });
  return (
    <div>
      <main className="bg-[#222] overflow-hidden" ref={main} data-scroll>
        <div
          className="w-[100vw] h-[120vh] bg-[#C4BDB3] relative overflow-hidden"
          ref={wrapper}
        >
          <Header />
          <section className="h-[430px] flex items-center justify-between px-12 py-10">
            <div className="h-[100%] w-[30%]">
              <div className="h-[60%] w-full overflow-hidden ">
                <img
                  className="object-cover w-full h-full hover:scale-125 transition-all"
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                  alt="hero"
                />
              </div>
              <h4 className="text-4xl font-semibold  my-2 font-canopee">
                AVRO | KO{' '}
                <span className="bg-orange-700 text-white text-xl p-1 rounded-md ml-2">
                  NEW
                </span>
              </h4>
              <p className="font-newlight text-lg text-[#393838]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores nostrum non ipsam repudiandae ullam adipisci.
                Dignissimos, earum magnam. Quae, minus?
              </p>
            </div>
            <div className="h-full w-[30%] border-l-2 border-[#5e5e5e] border-r-2 px-5 py-14 text-center">
              <h2 className="font-canopee text-7xl">All Works!</h2>
              <h3 className="font-newlight text-5xl font-extralight text-[#343333] my-2">
                A Featured selection <br /> the last work - <br />
                of the last years.
              </h3>
              <h6 className="font-newlight text-2xl font-extralight text-[#393838] my-6">
                {' '}
                <span className="font-newmedium">Tip!</span> Drag sideways to
                navigatge
              </h6>
            </div>

            <div className=" h-full w-[30%]">
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  className="object-cover w-full h-full hover:scale-125 transition-all"
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
                  alt="hero"
                />
              </div>
              <h4 className="text-4xl font-semibold  my-2 font-canopee">
                The Roger hub{' '}
                <span className="bg-orange-700 text-white text-xl p-1 rounded-md ml-2 ">
                  NEW
                </span>
              </h4>
              <p className="font-newlight text-lg text-[#393838]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores nostrum non ipsam repudiandae ullam adipisci.
                Dignissimos, earum magnam. Quae, minus?
              </p>
            </div>
          </section>
          <h1 className="text-[700px]/[600px] bg-[#1c1c19] text-[#C4BCB3] w-[96%] ml-[2%] font-canopee tracking-tighter font-thin text-center">
            MIRANDA
          </h1>
        </div>
        {/* second pag2 */}
        <div className="w-full h-[150vh] bg-[#C4BCB3] flex items-center justify-between py-20 px-10">
          <div className="h-full w-[35%] pr-10 border-r-2 border-gray-800">
            <h2 className="text-[8rem]/[0.8] text-center font-normal font-canopee">
              Interactive{' '}
              <span className="text-[12rem] font-semibold">ARTIST!</span>
            </h2>
            <img
              className="h-[50%] w-full object-cover"
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
              alt="artist"
            />
            <p className="text-4xl font-newmedium text-gray-800 mt-[20px]">
              <span className="text-6xl bg-gray-900 font-semibold p-2 text-white font-newmedium">
                A
              </span>
              s a Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Magni delectus tenetur in ad. Ipsum quibusdam fuga dolorum vitae
              dolore perferendis eveniet, voluptas quam nemo praesentium in,
              necessitatibus libero minima error!
            </p>
          </div>
          <div className="h-full w-[60%]">
            <img
              className="h-[60%] w-full object-cover font-thin"
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg"
              alt="artist second"
            />
            <h1 className="uppercase font-canopee text-[8rem]/[8rem] mt-14">
              Digital art director <br />
              Interactive designer <br />
              creative developer <br />
              based in amsterdam, Nl
            </h1>
          </div>
        </div>

        {/* page3 */}

        <div className="bg-[#C4BDB3] flex items-center justify-between">
          <h1 className="w-[70%] font-canopee text-[30rem]/[1] bg-[#1c1c19] tracking-tight text-[#dbd9d6] object-contain ml-[2%]">
            Website
          </h1>
          <img
            className="w-[25%] h-full object-cover"
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png"
            alt="certificate"
          />
        </div>
      </main>
    </div>
  );
};

export default App;
