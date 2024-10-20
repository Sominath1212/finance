import CaImage from './assets/ca.png'
import Calculators from './components/Calculators'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className=" min-h-screen border border-red w-[100vw]  flex items-center justify-between">
        <div className="container mx-auto px-6 py-6 flex md:flex-col flex-col-reverse justify-between  lg:flex-row items-center ">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-12 mt-10 relative lg:mb-0">
            <h1 className=" text-3xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Plan Your Financial Future
            </h1>
            <p className="text-gray-600 mb-6">
              Invest smartly and grow your wealth. Our investment platform helps you make informed decisions for your financial security.
            </p>
            <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Right Section (Image) */}
          <div className=" flex  justify-end">
            <img
              src={CaImage}
              alt="Investment"
              className="sm:h-80 h-44 mix-blend-multiply md:h-[80vh] relative right-0 "
            />
          </div>
        </div>
        <div className='h-[2px] bg-black relative bottom-0'>{ }</div>
      </div>
      <Calculators />
      <Footer />
    </>
  )
}

export default App
