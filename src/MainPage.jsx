import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import flash from "/src/assets/flash.jpg";
import mgm from "/src/assets/mgm.jpg";
import wedly from "/src/assets/wedly.jpg";
import eric from "/src/assets/eric.jpg";
import todolp from "/src/assets/todolp.jpg";
import pokemon from "/src/assets/pokemon.jpg";

import {
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  Video,
  CheckCircle,
  ArrowRight,
  Send,
  Gem,
  User,
  UserCheck,
  ShieldUser,
  CodeXml,
  BriefcaseBusiness,
} from "lucide-react";
import React from "react";
import Navbar from "/src/Navbar.jsx";
// import { url } from "inspector";

export default function WeddingPlannerLandingPage() {
  const [animatedSections, setAnimatedSections] = useState(new Set());

  // Refs for sections to animate
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedSections((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // Observe sections
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("");
  };

  return (
    <div>
      <Navbar />
      {/* Page Content */}
      <div className="max-h-screen w-full bg-gradient-to-r from-emerald-700 to-emerald-400  font-sans pt-16">
        <div>
          <section
            id="about"
            className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  // style={{ fontFamily: "'Great Vibes', cursive" }}
                  className="text-white text-4xl md:text-5xl font-bold leading-tight"
                >
                  Eric {""}
                  <span className="text-indigo-50">Encarnacion</span>
                </h1>
                <p
                  style={{ fontFamily: "'Cinzel', serif" }}
                  className="mt-6 text-lg text-gray-100 leading-relaxed"
                >
                  I am a passionate and dedicated web developer, ready to take
                  on new challenges and contribute to a dynamic team. Eager to
                  learn and grow, I am committed to delivering quality solutions
                  and continuously improving my skills. Let's work together to
                  build something amazing!
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new",
                        "_blank"
                      )
                    }
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="bg-amber-400 text-white px-8 py-3 rounded-full hover:bg-amber-500 transition-colors font-medium flex items-center"
                  >
                    Send Email <Send className="ml-2" size={18} />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/125u8oStK4L4O_YhCP8W1G4J_xyfB4h2U/view?usp=sharing",
                        "_blank"
                      )
                    }
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="border-2 border-yellow-500 text-white px-8 py-3 rounded-full hover:bg-teal-950 transition-colors font-medium"
                  >
                    View and Download Resume here!
                  </button>
                </div>
              </div>

              <div
                style={{
                  // backgroundImage: `url(${eric})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  height: "100%",
                }}
                className="relative flex justify-center items-end space-x-4"
              >
                <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <a
                    href="https://www.facebook.com/share/19UcMwzerY/?mibextid=LQQJ4d"
                    className="flex items-center"
                    target="_blank"
                  >
                    <Facebook className="text-green-500 mr-2" size={20} />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                </div>
                <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <a
                    href="https://www.instagram.com/e_ryc_/"
                    className="flex items-center"
                    target="_blank"
                  >
                    <Instagram className="text-green-500 mr-2" size={20} />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                </div>
                <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <a
                    href="https://www.tiktok.com/@code_to_lif3?is_from_webapp=1&sender_device=pc"
                    className="flex items-center"
                    target="_blank"
                  >
                    <Video className="text-green-500 mr-2" size={20} />

                    <span className="text-sm font-medium">Tiktok</span>
                  </a>
                </div>
                <div className="flex items-center bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <a
                    href="https://www.linkedin.com/in/eric-encarnacion-429499320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="flex items-center"
                    target="_blank"
                  >
                    <Linkedin className="text-green-500 mr-2" size={20} />

                    <span className="text-sm font-medium">Linkedin</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={skillsRef}
            style={{ backgroundColor: "#f4f6f6" }}
            className="py-16 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`text-center mb-16 fade-in-up ${
                  animatedSections.has("skills") ? "animate" : ""
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Skills and Interest
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div
                  className={`bg-white p-8 rounded-xl shadow-sm fade-in-left stagger-1 ${
                    animatedSections.has("testimonials") ? "animate" : ""
                  }`}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">Photography</span>
                    </div>
                    <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">Videography</span>
                    </div>
                    <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">
                        Content Creation
                      </span>
                    </div>
                    <div className="flex items-center bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">Cooking</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-white p-8 rounded-xl shadow-sm fade-in-right stagger-2 ${
                    animatedSections.has("testimonials") ? "animate" : ""
                  }`}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <Gem className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">Javascript</span>
                    </div>
                    <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <Gem className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">React Js</span>
                    </div>
                    <div className="flex items-center -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <Gem className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">MongoDB</span>
                    </div>
                    <div className="flex items-center bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <Gem className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium">
                        Project Management
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={experienceRef}
            // style={{ backgroundColor: "#6a7fa3" }}
            className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-400  px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`text-center mb-16 fade-in-up ${
                  animatedSections.has("experience") ? "animate" : ""
                }`}
              >
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  Trainings / Job Experience
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div
                  style={{ backgroundColor: "#2d2f25" }}
                  className={`p-8 rounded-xl fade-in-up stagger-1 ${
                    animatedSections.has("features") ? "animate" : ""
                  }`}
                >
                  <BriefcaseBusiness
                    className="text-yellow-500 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    Information Technology Associate
                  </h3>
                  <p className="text-white text-center">
                    Furukawa Automotive System Lima Philippines
                  </p>
                  <p className="text-white text-center">2023 - 2024</p>
                </div>

                <div
                  style={{ backgroundColor: "#2d2f25" }}
                  className={`p-8 rounded-xl fade-in-up stagger-2 ${
                    animatedSections.has("features") ? "animate" : ""
                  }`}
                >
                  <BriefcaseBusiness
                    className="text-yellow-500 mb-4"
                    size={32}
                  />
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    Junior Service Engineer
                  </h3>
                  <p className="text-white text-center">
                    Philippine Duplicators, Inc.
                  </p>{" "}
                  <p className="text-white text-center">
                    September 2024 - December 2024
                  </p>
                </div>

                <div
                  style={{ backgroundColor: "#2d2f25" }}
                  className={`p-8 rounded-xl fade-in-up stagger-3 ${
                    animatedSections.has("features") ? "animate" : ""
                  }`}
                >
                  <Heart className="text-yellow-500 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    Bootcamp Training
                  </h3>
                  <p className="text-white text-center">Uplift Code Camp</p>
                  <p className="text-white text-center">
                    November 2024 - May 2025
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            ref={projectsRef}
            id="projects"
            style={{ backgroundColor: "#f4f6f6" }}
            className="py-16 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`text-center mb-12 fade-in-up ${
                  animatedSections.has("projects") ? "animate" : ""
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Projects
                </h2>
              </div>

              {/* First row: 3 columns */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Project 1 */}
                <div
                  className={`border border-gray-200 rounded-xl overflow-hidden bg-white fade-in-up stagger-1 ${
                    animatedSections.has("features") ? "animate" : ""
                  }`}
                >
                  <div className="p-8 flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                      <img src={flash} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 ">
                      AI Powered Flaschcard
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Try AI Powered Flaschcard
                    </p>
                    <div className="flex justify-center space-x-4 mb-6">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/eryc-prog/p2-js-api-app",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://ai-powered-flashcard.netlify.app/",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div
                  className={`border border-gray-200 rounded-xl overflow-hidden bg-white fade-in-up stagger-1 ${
                    animatedSections.has("features") ? "animate" : ""
                  }`}
                >
                  <div className="p-8 flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                      <img src={mgm} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 ">
                      Waterworks Management System
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Try Waterworks Management System
                    </p>
                    <div className="flex justify-center space-x-4 mb-6">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/eryc-prog/p3-react-act-wws",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://waterworks-mgm-sys.netlify.app/",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
                {/* Project 3 */}
                <div
                  className={`border border-blue-100 rounded-xl overflow-hidden bg-white shadow-md relative fade-in-up stagger-3 ${
                    animatedSections.has("features") ? "animate" : ""
                  }`}
                >
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    LATEST
                  </div>
                  <div className="p-8 flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                      <img src={wedly} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 ">Wedly</h4>
                    <p className="text-gray-600 mb-6">Try Wedding Planner</p>
                    <div className="flex justify-center space-x-4 mb-6">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/youichiuehara14/WedlyApp",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://wedlyapp.onrender.com/",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second row: 2 columns */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Project 4 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white fade-in-up stagger-4">
                  <div className="p-8 flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                      <img src={todolp} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 ">
                      My Todo App
                    </h4>
                    <p className="text-gray-600 mb-6">Try My Todo App</p>
                    <div className="flex justify-center space-x-4 mb-6">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/eryc-prog/fullstack-todoapp",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://todo-app-client-d7mo.onrender.com",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
                {/* Project 5 */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white fade-in-up stagger-5">
                  <div className="p-8 flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                      <img src={pokemon} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 ">
                      Pokedex App
                    </h4>
                    <p className="text-gray-600 mb-6">Try Pokedex App</p>
                    <div className="flex justify-center space-x-4 mb-6">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/eryc-prog/fullstack-pokedex",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://client-pokedex.onrender.com",
                            "_blank"
                          )
                        }
                        className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
                      >
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 px-6 md:px-12 bg-white">
            <div
              // style={{ backgroundColor: "#FFD700" }}
              className={`max-w-8xl mx-auto bg-gradient-to-r from-emerald-700 to-emerald-400 rounded-2xl p-8 md:p-12 text-center text-whitescale-in ${
                animatedSections.has("cta") ? "animate" : ""
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Me
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 h-32 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold shadow-md flex items-center justify-center w-full"
                >
                  Send Message <ArrowRight className="ml-2" size={18} />
                </button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-4 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
              <p>© Eric Encarnacion 2025.</p>
              <p className="text-gray-400 text-sm">
                Creating solution for your modern problems
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
