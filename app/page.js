import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-sage-100">
      <nav className="w-full max-w-7xl px-4 py-4 sm:py-6">
        <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sage-800">
          <li><a href="#" className="hover:text-teal-600 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-teal-600 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-teal-600 transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-teal-600 transition-colors">Contact</a></li>
        </ul>
      </nav>

      <section className="hero w-full bg-cover bg-center py-16 sm:py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 shadow-text">
            Connect with Your Inner Self
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 shadow-text">
            Discover balance and harmony through SoulConnect therapy
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>

      <div className="max-w-7xl w-full px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4">Welcome to SoulConnect</h2>
          <p className="text-lg sm:text-xl text-sage-700">Nurturing connections for a balanced life</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-700 mb-4">Our Mission</h2>
            <p className="text-sage-800">At SoulConnect, we're dedicated to helping you forge a deeper connection with yourself and others, fostering personal growth and healing.</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-700 mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-sage-800">
              <li>Individual Soul Exploration</li>
              <li>Relationship Harmony Sessions</li>
              <li>Group Connection Circles</li>
              <li>Mindfulness and Meditation</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-700 mb-4">Our Approach</h2>
            <p className="text-sage-800">We blend evidence-based techniques with compassionate guidance to help you reconnect with your authentic self and improve your overall well-being.</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-700 mb-4">Connect With Us</h2>
            <p className="text-sage-800">Ready to begin your journey of self-discovery? Reach out for a consultation and take the first step towards inner harmony.</p>
          </div>
        </div>
      </div>

      {/* New section for the "Get in Touch" button */}
      <section className="w-full bg-sage-200 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-6">Ready to Start Your Journey?</h2>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>

      <footer className="w-full bg-sage-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2023 SoulConnect. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}