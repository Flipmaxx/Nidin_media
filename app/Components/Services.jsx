"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaYoutube,
  FaEye,
  FaUserPlus,
  FaClock,
  FaBrush,
  FaLaptopCode,
  FaFilm,
} from "react-icons/fa";

const services = [
  {
    title: "Brand Identity & Logo Design",
    desc: "Create cohesive, memorable brand identities that make you stand out.",
    icon: <FaBrush size={40} />,
    img: "/services/brand.jpg",
  },
  {
    title: "Web UI/UX Design",
    desc: "Design intuitive, conversion-driven websites your customers will love.",
    icon: <FaLaptopCode size={40} />,
    img: "/services/uiux.jpg",
  },
  {
    title: "Video Editing & Logo Animation",
    desc: "Bring your brand to life with engaging visuals and animations.",
    icon: <FaFilm size={40} />,
    img: "/services/video.jpg",
  },
  {
    title: "YouTube Video Promotion Plan",
    desc: "Boost your video reach with strategic YouTube promotions.",
    icon: <FaYoutube size={40} />,
    img: "/services/youtube-promo.jpg",
  },
  {
    title: "YouTube Channel Subscription Plan",
    desc: "Grow your channel subscribers organically with tailored campaigns.",
    icon: <FaUserPlus size={40} />,
    img: "/services/subscription.jpg",
  },
  {
    title: "YouTube Views & Revenue Plans",
    desc: "Increase your video views and generate more revenue effectively.",
    icon: <FaEye size={40} />,
    img: "/services/views.jpg",
  },
  {
    title: "YouTube Watch Hours Plan",
    desc: "Achieve monetization goals faster with targeted watch hour growth.",
    icon: <FaClock size={40} />,
    img: "/services/watchhours.jpg",
  },
];

// Different animation variants for cards
const cardAnimations = [
  { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
  { initial: { opacity: 0, rotate: -10 }, animate: { opacity: 1, rotate: 0 } },
  { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } },
];

export default function ServicesPage() {
  return (
    <section className="bg-black text-white min-h-screen py-20 relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-center text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Services we provide
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const anim = cardAnimations[index % cardAnimations.length];
            return (
              <motion.div
                key={index}
                className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                initial={anim.initial}
                animate={anim.animate}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                </div>

                {/* Moving gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="relative p-6 z-10">
                  <motion.div
                    className="text-green-400 mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
