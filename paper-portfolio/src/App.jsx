import React from 'react';
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <main>
        <div className="w-[100vw] h-[100vh] bg-[#C4BDB3] relative">
          <Header />
          <section className="h-[430px] bg-red-300 flex items-center justify-between px-12 py-10">
            <div className="bg-blue-600 h-[100%] w-[30%]">
              <div className="h-[60%] w-full overflow-hidden ">
                <img
                  className="object-cover w-full h-full hover:scale-125 transition-all"
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                  alt="hero"
                />
              </div>
              <h4>
                AVRO | KO <span>NEW</span>
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores nostrum non ipsam repudiandae ullam adipisci.
                Dignissimos, earum magnam. Quae, minus?
              </p>
            </div>
            <div className="bg-blue-600 h-full w-[25%]">
              <h2>All Works!</h2>
              <h3>
                A Featured selection <br /> the last work - <br />
                of the last years.
              </h3>
              <h6>Tip! Drag sideways to navigatge</h6>
            </div>

            <div className="bg-blue-600 h-full w-[30%]">
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  className="object-cover w-full h-full hover:scale-125 transition-all"
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
                  alt="hero"
                />
              </div>
              <h4>
                The Roger hub <span>NEW</span>
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores nostrum non ipsam repudiandae ullam adipisci.
                Dignissimos, earum magnam. Quae, minus?
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
