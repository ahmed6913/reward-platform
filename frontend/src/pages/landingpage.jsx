import arImage from '../assets/ar.png'
import PricingSection from '../components/page-section'

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
                        src={arImage}
                        alt="AR Landing Page"
                        className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl object-cover h-auto"
                    />
                </div>
            </section>

            {/* How it Works */}
            <section className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-5xl md:text-6xl text-center font-bold text-gray-900 mb-16 leading-tight">
                        How it <span className="text-orange-500">Works</span>
                    </h2>

                    {/* Rounded Container with Steps */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12">

                            {/* Step 1: Watch */}
                            <div className="text-center group">
                                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        1. Watch
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                        Watch engaging videos and content to start earning points instantly
                                    </p>
                                </div>
                            </div>

                            {/* Step 2: Earn */}
                            <div className="text-center group">
                                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        2. Earn
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                        Accumulate reward points for every video you watch and activity you complete
                                    </p>
                                </div>
                            </div>

                            {/* Step 3: Redeem */}
                            <div className="text-center group">
                                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        3. Redeem
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                        Exchange your points for amazing rewards, gift cards, and exclusive offers
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                            <button className="bg-orange-500 text-white px-10 py-4 rounded-full fontxt-lg ver:bg-orang00 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                Start Earning Now
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Trusted by Leading <span className="text-orange-500">Partners</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Join Us Today
                        </p>
                    </div>

                    {/* Partners Container */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
                        <div className="grid text-center grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">

                            

                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-12">
                            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                Become a Partner
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscription */}
            <PricingSection />

            {/* Footer */}
        </div>
    )
}

export default LandingPage