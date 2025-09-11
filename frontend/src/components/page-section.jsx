// Removed external dependencies - using standard HTML elements instead

export default function PricingSection() {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Choose Your <span className="text-orange-500">Plan</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Select the perfect subscription plan that fits your needs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Basic Plan */}
                <div className="p-8 bg-white shadow-lg rounded-2xl border border-gray-200 relative">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Plan</h3>
                        <div className="mb-4">
                            <span className="text-4xl font-bold text-gray-900">30 KWD</span>
                            <span className="text-gray-600 mt-500">/month</span>
                        </div>
                        <p className="text-gray-600">Perfect for small brands & coffee shop</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Post up to 50 videos per month</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Allocate 100 points per video</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Basic reward redemption</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Whatsup & call support support</span>
                        </li>
                    </ul>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors duration-300">
                        Get Started
                    </button>
                    <p className="text-gray-700 text-center mt-2 text-sm">Terms and conditions applied</p>
                </div>

                {/* Advanced Plan */}
                <div className="p-8 bg-white shadow-lg rounded-2xl border border-gray-200 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>

                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced Plan</h3>
                        <div className="mb-4">
                            <span className="text-4xl font-bold text-gray-900">300 KWD</span>
                            <span className="text-gray-600">/month</span>
                        </div>
                        <p className="text-gray-600">Ideal for big brands & coffee shops who want maximum earning potential</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Unlimited video post</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Allocate unlimited points per video</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Premium reward redemption</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Priority customer support (call & whatsupp)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Exclusive bonus rewards</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Early access to new features</span>
                        </li>
                    </ul>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors duration-300">
                        Start Advanced Plan
                    </button>
                     <p className="text-gray-700 text-center mt-2 text-sm">Terms and conditions applied</p>
                </div>
            </div><div className="text-center mt-12">
                <p className="text-gray-600 mb-4">All plans include a 7-day free trial. Cancel anytime.</p>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                    Compare All Features
                </button>
            </div>
        </section>
    )
}
