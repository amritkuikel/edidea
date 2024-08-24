import "./App.css"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

type Subject = {
  name: string
  icon: string
  category: "stem" | "humanities"
}

type Service = {
  name: string
  icon: string
  description: string
}

type Testimonial = {
  name: string
  text: string
  avatar: string
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"all" | "stem" | "humanities">("all")
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const allSubjects: Subject[] = [
    { name: "Math", icon: "📐", category: "stem" },
    { name: "Physics", icon: "🔬", category: "stem" },
    { name: "Chemistry", icon: "⚗️", category: "stem" },
    { name: "Biology", icon: "🧬", category: "stem" },
    { name: "Literature", icon: "📚", category: "humanities" },
    { name: "History", icon: "🏛️", category: "humanities" },
    { name: "Philosophy", icon: "🤔", category: "humanities" },
    { name: "Computer Science", icon: "💻", category: "stem" },
    { name: "Economics", icon: "📊", category: "humanities" },
    { name: "Psychology", icon: "🧠", category: "humanities" },
    { name: "Art History", icon: "🎨", category: "humanities" },
    { name: "Engineering", icon: "🛠️", category: "stem" },
  ]

  const filteredSubjects = activeTab === "all" 
    ? allSubjects 
    : allSubjects.filter(subject => subject.category === activeTab)

  const testimonials: Testimonial[] = [
    { name: "Alex J.", text: "EdIdea helped me boost my GPA significantly!", avatar: "/placeholder.svg?height=100&width=100" },
    { name: "Sarah M.", text: "The tutors here are amazing. They explain complex topics so well!", avatar: "/placeholder.svg?height=100&width=100" },
    { name: "Ryan T.", text: "I went from struggling to excelling in my classes. Thank you, EdIdea!", avatar: "/placeholder.svg?height=100&width=100" },
  ]

  const services: Service[] = [
    { name: "Assignment Help", icon: "📝", description: "Get step-by-step solutions to your toughest assignments" },
    { name: "Live Tutoring", icon: "👨‍🏫", description: "Connect with expert tutors for real-time learning sessions" },
    { name: "Study Materials", icon: "📊", description: "Access a vast library of study guides and practice tests" },
    { name: "Essay Review", icon: "✍️", description: "Get feedback on your essays from experienced writers" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.a 
            href="#" 
            className={`text-3xl font-bold ${isScrolled ? 'text-purple-600' : 'text-white'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EdIdea
          </motion.a>
          <nav className="hidden md:flex space-x-6">
            {["Services", "Subjects", "Pricing", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className={`${isScrolled ? 'text-gray-600 hover:text-purple-600' : 'text-white hover:text-purple-200'} transition-colors`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden ${isScrolled ? 'text-gray-600 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg absolute top-20 inset-x-0 z-40"
          >
            <nav className="flex flex-col p-4">
              {["Services", "Subjects", "Pricing", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="py-2 text-gray-600 hover:text-purple-600 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Ace Your Assignment with Expert Help
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Get personalized tutoring and Assignment assistance from top-tier educators
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Learning Now
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredService(service.name)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p>{service.description}</p>
                  <motion.div
                    className="absolute inset-0 bg-purple-600 text-white flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === service.name ? 0.9 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg font-semibold">Learn More</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Subjects We Cover</h2>
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white rounded-full p-1 shadow-md">
                {["all", "stem", "humanities"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab as "all" | "stem" | "humanities")}
                    className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredSubjects.map((subject) => (
                <motion.div
                  key={subject.name}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <div className="text-4xl mb-2">{subject.icon}</div>
                  <h3 className="font-semibold">{subject.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <h3 className="font-semibold">{testimonial.name}</h3>
                  </div>
                  <p className="italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Grades?</h2>
            <p className="text-xl mb-8">Join thousands of students who have improved their academic performance with EdIdea</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Started Free
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EdIdea</h3>
              <p>Empowering students to achieve academic excellence</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subjects</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Mathematics</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Science</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Literature</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">History</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 EdIdea. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}