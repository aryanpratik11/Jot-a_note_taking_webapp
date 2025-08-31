import { useState } from "react";

export default function Signup() {
  const [step, setStep] = useState(1); // 1: user info, 2: OTP verification
  const [name, setName] = useState("Jonas Khamwald");
  const [dob, setDob] = useState("11 December 1997");
  const [email, setEmail] = useState("jonas.kahmwald@gmail.com");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGetOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call backend API for OTP verification and signup
    console.log("Signup:", { name, dob, email, otp });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-md">
        {/* Branding */}
        <h1 className="text-3xl font-extrabold text-center mb-6">
          <span className="text-indigo-600">Jot.</span>
        </h1>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Sign up</h2>
        <p className="text-center text-gray-600 mb-6">Sign up to enjoy the feature of HD</p>

        {/* Progress indicator for mobile */}
        <div className="flex justify-center mb-6 sm:hidden">
          <div className="flex space-x-2">
            <div className={`w-3 h-3 rounded-full ${step === 1 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            <div className={`w-3 h-3 rounded-full ${step === 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={step === 1 ? handleGetOtp : handleSignup} className="space-y-4">
          {step === 1 ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="DD Month YYYY"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {isLoading ? "Sending OTP..." : "Get OTP"}
              </button>
            </>
          ) : (
            <>
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">
                  We've sent a verification code to your email
                </p>
                <p className="font-medium text-gray-900">{email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Enter verification code"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Sign up
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-indigo-600 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition"
              >
                Change email
              </button>
            </>
          )}
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}