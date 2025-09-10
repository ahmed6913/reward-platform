
import lpuiImage from '../assets/lpui.png'

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section - Full Screen */}
            <div className="min-h-screen bg-white flex items-center justify-center px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Your trusted {' '}
                        <span className="text-orange-500">reward platform</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        RP offers solutions across alternative rewards—gift cards, cashback, loyalty points and
                        experiences—delivering deep expertise
                    </p>

                    {/* Watch - Earn - Redeem */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Watch - Earn - Redeem
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
                            Start earning today
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-gray-400 transition-colors flex items-center gap-2">
                            View our story
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section - Separate Full Section */}
            <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-2">
                <div className="max-w-4xl mx-auto text-center">
                    <img
                        src={lpuiImage}
                        alt="Landing Page UI"
                        className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl object-cover h-auto"
                    />
                </div>
            </section>

            {/* How it Works */}








             {/* Subcription */}






              {/* Footer */}




















        </div>
    )
}

export default LandingPage
