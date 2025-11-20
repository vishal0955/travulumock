

const ArloAI = () => {
  return (
    <div className="w-full max-w-sm mx-auto h-[718px]  bg-white rounded-t-2xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-primary border-b border-gray-200 rounded-t-2xl">
        <img
          src="/arloavtr.png"
          alt="Profile"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <h2 className="text-white text-lg font-bold leading-tight">Arlo</h2>
          <p className="text-[#DBEAFE] text-sm">The AI Navigator</p>
        </div>
      </div>
 <div className="flex flex-col justify-between relative ">
      {/* Middle Section */}
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#F25C54] to-[#FF914D] flex items-center justify-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22ZM2 12L8 15V9L2 12ZM22 12L16 9V15L22 12Z" />
          </svg>
        </div>

        <h1 className="text-primary font-bold text-xl mt-4">
          Ask Arlo, your AI Navigator
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Plan your next trip with AI assistance
        </p>
      </div>

      {/* Categories */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-wrap gap-3">
          {/* Tag */}
          <button className="flex items-center gap-2 bg-[#DBEAFE] text-[#1D4ED8] px-3 py-1.5 rounded-full text-sm">
            <svg width="16" height="16" fill="#1D4ED8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            Romantic
          </button>

          <button className="flex items-center gap-2 bg-[#DCFCE7] text-[#15803D] px-3 py-1.5 rounded-full text-sm">
            <svg width="14" height="14" fill="#15803D" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            Under ₹1 Lac
          </button>

          <button className="flex items-center gap-2 bg-[#F3E8FF] text-[#7E22CE] px-3 py-1.5 rounded-full text-sm">
            <svg width="14" height="14" fill="#7E22CE" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            Beach Escapes
          </button>

          <button className="flex items-center gap-2 bg-[#FFEDD5] text-[#C2410C] px-3 py-1.5 rounded-full text-sm">
            <svg width="14" height="14" fill="#C2410C" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            Summer Trips
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="p-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Ask me about flights, hotels, destinations..."
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none"
          />

          <button className="absolute right-1 top-1 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F25C54] to-[#FF914D]">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ArloAI;


