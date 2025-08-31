import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-screen flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                        alt="Notebook on desk" 
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-800/30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-16 lg:px-8 text-center z-10">
                    {/* Animated Logo/Title */}
                    <div className="mb-8 animate-fade-in-down">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 sm:text-6xl lg:text-7xl mb-4">
                            Jot.
                        </h1>
                        <h2 className="text-2xl font-semibold text-blue-600 sm:text-3xl lg:text-4xl">
                            Your Thoughts, Organized.
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            A modern note-taking web app that helps you capture ideas, organize thoughts, and boost your productivity.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up">
                        <Link
                            to="/login"
                            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 text-lg border border-blue-100"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* App Preview */}
                    <div className="mt-20 max-w-4xl mx-auto animate-float">
                        <div className="bg-white rounded-2xl shadow-2xl p-2 transform rotate-3">
                            <img 
                                src="https://images.unsplash.com/photo-1620676045444-5e9c5c2344b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80" 
                                alt="App interface preview" 
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Jot?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg hover:shadow-md transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                            <p className="text-gray-600">Capture your ideas instantly with our optimized interface.</p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:shadow-md transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Cloud Sync</h3>
                            <p className="text-gray-600">Access your notes from anywhere, on any device.</p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:shadow-md transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Secure</h3>
                            <p className="text-gray-600">Your data is encrypted and protected with enterprise-grade security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CSS for animations */}
            <style>
                {`
                @keyframes fadeInDown {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 1s ease-out;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                `}
            </style>
        </div>
    );
}