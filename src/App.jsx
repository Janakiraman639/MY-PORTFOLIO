import { useEffect, useState } from "react";
import profile from "./assets/profile.jpeg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaReact,
  FaHtml5,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function PortfolioWebsite() {
  const formRef = useRef();

  const skills = [
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "SQL",
      icon: <FaDatabase />,
    },
    {
      name: "Power BI",
      icon: <FaChartBar />,
    },
    {
      name: "Excel",
      icon: <FaChartBar />,
    },
    {
      name: "React JS",
      icon: <FaReact />,
    },
    {
      name: "HTML/CSS",
      icon: <FaHtml5 />,
    },
  ];

  const roles = ["Data Analyst", "Data Scientist"];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

  useEffect(() => {

    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {

      if (!isDeleting) {

        const updated = currentRole.substring(0, text.length + 1);

        setText(updated);

        if (updated === currentRole) {

          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);

        }

      } else {

        const updated = currentRole.substring(0, text.length - 1);

        setText(updated);

        if (updated === "") {

          setIsDeleting(false);

          setRoleIndex((prev) => (prev + 1) % roles.length);

        }

      }

    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timer);

  }, [text, isDeleting, roleIndex]);
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_ogwf15i",
    "template_ynw42oo",
    formRef.current,
    "KzB0Kzs8JEwnv6Ljt"
  )
  .then(() => {
    alert("Message sent successfully!");
  })
  .catch((error) => {
  console.log("EmailJS FULL ERROR:", error);
  alert(error?.text || "Failed to send message!");
});

  e.target.reset();
};

  return (

    <div className="bg-gradient-to-b from-black via-[#050816] to-black text-white min-h-screen font-sans overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-blue-900/20">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-blue-400 text-2xl font-bold tracking-widest">
            JANAKIRAMAN
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            {["about", "education", "skills", "projects", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-blue-400 transition"
                >
                  {item.toUpperCase()}
                </a>
              )
            )}

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl text-blue-400"
            onClick={() => setMobileMenu(!mobileMenu)}
          >

            {mobileMenu ? <FaTimes /> : <FaBars />}

          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-black border-t border-blue-900/20 overflow-hidden transition-all duration-500 ${
            mobileMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >

          <div className="flex flex-col px-6 py-4 gap-4">

            {["about", "education", "skills", "projects", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenu(false)}
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  {item.toUpperCase()}
                </a>
              )
            )}

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <motion.div
  className="relative z-10 flex flex-col items-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

          {/* PROFILE IMAGE */}
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl shadow-blue-500/30 animate-pulse">

            <img
              src={profile}
              alt="Janakiraman Profile"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-black"
            />

          </div>

          <p className="text-blue-400 mt-8 text-sm tracking-widest">
            HELLO, I'M
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-2 bg-gradient-to-r from-white via-blue-300 to-cyan-400 text-transparent bg-clip-text">
            Janakiraman A
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-300 mt-6 h-12">

            {text}

            <span className="border-r-2 border-blue-400 ml-1 animate-pulse"></span>

          </h2>

          <p className="max-w-2xl text-gray-400 mt-8 text-lg leading-8">
            I build intelligent systems using AI, IoT and Data Analytics
            to solve real-world problems.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-10 flex-wrap justify-center">

            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-400 px-8 py-4 rounded-full hover:bg-blue-500 hover:text-black transition"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <motion.section
  id="about"
  className="py-28 px-6"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-blue-400 mb-12">
            About Me
          </h2>

          <div className="bg-white/5 backdrop-blur-xl border border-blue-900/20 rounded-3xl p-10 hover:border-blue-400/30 transition">

            <p className="text-gray-300 text-lg leading-9">

              I am Janakiraman, a B.Tech Artificial Intelligence and Data
              Science graduate from Vel Tech High Tech Engineering College,
              Chennai. Passionate about Data Analytics, AI, Machine
              Learning, and building intelligent systems using Python,
              SQL, Power BI, React, and modern technologies.

            </p>

          </div>

        </div>

      </motion.section>

      {/* EDUCATION */}
      <section id="education" className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-blue-400 mb-16">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-blue-900/20 rounded-3xl p-8 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition duration-500">

              <h3 className="text-3xl font-bold mb-4">
                Bachelor of Technology
              </h3>

              <p className="text-blue-400 text-lg mb-4">
                Artificial Intelligence & Data Science
              </p>

              <p className="text-gray-400 text-lg leading-8">
                Vel Tech High Tech Engineering College, Chennai
              </p>

              <div className="mt-6">

                <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-4 py-2 rounded-full">
                  CGPA : 8.05
                </span>

              </div>

            </div>

            {/* OBJECTIVE */}
            <div className="bg-white/5 backdrop-blur-xl border border-blue-900/20 rounded-3xl p-8 hover:border-pink-400 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition duration-500">

              <h3 className="text-3xl font-bold mb-4">
                Career Objective
              </h3>

              <p className="text-gray-400 text-lg leading-8">

                Passionate about AI, Data Science and Analytics.
                Seeking opportunities to contribute technical expertise
                and build innovative intelligent solutions.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-28 px-6 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <h2 className="text-5xl md:text-6xl font-bold text-blue-400 mb-20">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

            {skills.map((skill, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      delay: i * 0.15,
    }}
    viewport={{ once: true }}
  >
              

                <div className="text-6xl text-blue-400 mb-5">
                  {skill.icon}
                </div>

                <p className="text-xl font-semibold">
                  {skill.name}
                </p>

              </motion.div>
))}

           

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative py-32 px-6 overflow-hidden"
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-24">

            <h2 className="text-5xl md:text-7xl font-extrabold">

              Featured{" "}

              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Projects
              </span>

            </h2>

            <p className="text-gray-400 mt-8 text-xl">
              Real-world AI and Analytics projects
            </p>

          </div>

          {/* PROJECTS */}
          <div className="space-y-14">

            {/* PROJECT CARD 1 */}
            <div className="bg-white/5 backdrop-blur-xl border border-blue-900/20 rounded-[35px] p-10 md:p-14 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition duration-500">

              {/* TOP */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                <div>

                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    Traffic Congestion Monitoring System
                  </h3>

                  <p className="text-gray-400 text-xl mt-5 leading-9 max-w-4xl">

                    AI-powered smart traffic monitoring and congestion
                    prediction using computer vision and machine learning.

                  </p>

                </div>

                <a
                  href="https://github.com/Janakiraman639"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg font-medium border border-blue-900/20 bg-white/5 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition"
                >

                  <FaGithub className="text-2xl" />

                  View Code

                </a>

              </div>

              {/* CONTENT */}
              <div className="grid md:grid-cols-3 gap-12 mt-16">

                <div>

                  <h4 className="text-3xl font-bold mb-5">
                    Problem
                  </h4>

                  <p className="text-gray-400 text-lg leading-9">

                    Urban traffic congestion leads to delays and
                    inefficient transportation systems.

                  </p>

                </div>

                <div>

                  <h4 className="text-3xl font-bold mb-5">
                    Approach
                  </h4>

                  <p className="text-gray-400 text-lg leading-9">

                    Developed using YOLOv8 and OpenCV for
                    real-time vehicle detection and analytics.

                  </p>

                </div>

                <div>

                  <h4 className="text-3xl font-bold mb-5">
                    Outcome
                  </h4>

                  <p className="text-gray-400 text-lg leading-9">

                    Improved monitoring accuracy with AI-powered
                    congestion prediction system.

                  </p>

                </div>

              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-4 mt-14">

                {[
                  "Python",
                  "YOLOv8",
                  "OpenCV",
                  "Machine Learning",
                ].map((tech, i) => (

                  <span
                    key={i}
                    className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-5 py-2 rounded-full text-sm font-semibold"
                  >

                    {tech}

                  </span>

                ))}

              </div>

            </div>

            {/* PROJECT CARD 2 */}
            <div className="bg-white/5 backdrop-blur-xl border border-blue-900/20 rounded-[35px] p-10 md:p-14 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition duration-500">

              {/* TOP */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                <div>

                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    Data Analytics Dashboard
                  </h3>

                  <p className="text-gray-400 text-xl mt-5 leading-9 max-w-4xl">

                    Interactive business intelligence dashboard for
                    KPI tracking and analytics.

                  </p>

                </div>

                <a
                  href="https://github.com/Janakiraman639"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg font-medium border border-blue-900/20 bg-white/5 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition"
                >

                  <FaGithub className="text-2xl" />

                  View Code

                </a>

              </div>

              {/* CONTENT */}
              <div className="grid md:grid-cols-3 gap-12 mt-16">

                <div>

                  <h4 className="text-3xl font-bold mb-5">
                    Problem
                  </h4>

                  <p className="text-gray-400 text-lg leading-9">

                    Raw business data lacked proper analytics
                    visualization and KPI tracking.

                  </p>

                </div>

                <div>

                  <h4 className="text-3xl font-bold mb-5">
                    Approach
                  </h4>

                  <p className="text-gray-400 text-lg leading-9">

                    Built interactive dashboards using Power BI,
                    SQL and Excel.

                  </p>

                </div>

                <div>

                  <h4 className="text-3xl font-bold mb-5">
                    Outcome
                  </h4>

                  <p className="text-gray-400 text-lg leading-9">

                    Delivered business insights and reusable
                    analytics reporting system.

                  </p>

                </div>

              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-4 mt-14">

                {[
                  "Power BI",
                  "SQL",
                  "Excel",
                  "Pandas",
                ].map((tech, i) => (

                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-5 py-2 rounded-full text-sm font-semibold"
                  >

                    {tech}

                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold">
              Contact <span className="text-blue-400">Me</span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Let's collaborate and build something amazing.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-14">

            {/* LEFT */}
            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-3xl text-blue-400" />

                <div>

                  <p className="text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold">
                    janakiramana639@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaPhoneAlt className="text-3xl text-blue-400" />

                <div>

                  <p className="text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold">
                    +91 9361480701
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <FaLinkedin className="text-3xl text-blue-400" />

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn Profile
                </a>

              </div>

              <div className="flex items-center gap-5">

                <FaGithub className="text-3xl text-blue-400" />

                <a
                  href="https://github.com/Janakiraman639"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  GitHub Profile
                </a>

              </div>

              <div className="flex items-center gap-5">

                <FaMapMarkerAlt className="text-3xl text-blue-400" />

                <p>
                  Chennai, Tamil Nadu
                </p>

              </div>

            </div>

            {/* FORM */}
            <div className="bg-white/5 backdrop-blur-xl border border-blue-900/20 rounded-3xl p-8">

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

                <input
  name="from_name"
  type="text"
  placeholder="Your Name"
  className="w-full bg-black/40 border border-blue-900/20 rounded-xl px-5 py-4 outline-none focus:border-blue-400"
/>

               <input
  name="from_email"
  type="email"
  placeholder="Your Email"
  className="w-full bg-black/40 border border-blue-900/20 rounded-xl px-5 py-4 outline-none focus:border-blue-400"
/>

               <input
  name="subject"
  type="text"
  placeholder="Subject"
  className="w-full bg-black/40 border border-blue-900/20 rounded-xl px-5 py-4 outline-none focus:border-blue-400"
/>

                <textarea
  name="message"
  rows="5"
  placeholder="Message"
  className="w-full bg-black/40 border border-blue-900/20 rounded-xl px-5 py-4 outline-none focus:border-blue-400 resize-none"
></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-blue-900/20 text-gray-500">

        © 2026 Janakiraman A. All rights reserved.

      </footer>

    </div>

  );

}