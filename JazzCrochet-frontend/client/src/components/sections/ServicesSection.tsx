import { motion } from "framer-motion";
import {
  Heart,
  Palette,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function ServicesSection() {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      title: "Chocolate Rainbow Crochet",
      description:
        "A therapeutic crochet program that combines creative expression with healing. Using colorful yarns and mindful techniques to process trauma and build resilience.",
      features: [
        "Trauma-informed crochet techniques",
        "Group and individual sessions",
        "Creative expression therapy",
        "Community building",
      ],
      icon: Palette,
      gradient: "from-pastel-pink to-pastel-purple",
      color: "text-pastel-pink",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      title: "T.A.T. - Therapeutic Art & Thoughtfulness",
      description:
        "Comprehensive therapeutic art program integrating mindfulness, creativity, and healing practices for holistic wellness.",
      features: [
        "Mindfulness-based art therapy",
        "Thoughtful creative processes",
        "Healing through expression",
        "Skill-building workshops",
      ],
      icon: Heart,
      gradient: "from-pastel-purple to-soft-lavender",
      color: "text-pastel-purple",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      title: "H.U.M.A.N.™ Framework Training",
      description:
        "Professional training program for healthcare providers and organizations to implement humanity-centered care practices.",
      features: [
        "Healthcare ethics training",
        "System transformation",
        "Accountability practices",
        "Trauma-informed care",
      ],
      icon: Shield,
      gradient: "from-soft-lavender to-pastel-pink",
      color: "text-soft-lavender",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      title: "Advocacy & Mentoring",
      description:
        "One-on-one mentoring and advocacy support for individuals navigating healthcare systems and personal healing journeys.",
      features: [
        "Individual mentoring",
        "System navigation support",
        "Lived experience advocacy",
        "Empowerment coaching",
      ],
      icon: Users,
      gradient: "from-pastel-pink to-pastel-purple",
      color: "text-pastel-pink",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-warm-cream relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-pastel-pink rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-pastel-purple rounded-full opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-soft-lavender rounded-full opacity-15"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Healing Programs & Services
          </h2>
          
          <motion.div
            className="overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              animate={{ x: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Therapeutic art programs designed to restore dignity, voice, and
              possibility
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Enhanced Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              {/* Service Card */}
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
              >
                {/* Header with Image and Icon */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Service Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="text-white" size={24} />
                  </motion.div>

                  {/* Featured Badge for H.U.M.A.N.™ Framework */}
                  {service.title.includes("H.U.M.A.N.™") && (
                    <motion.div
                      className="absolute top-4 left-4 bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Sparkles size={12} className="mr-1" />
                      Featured
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className={`text-xl font-bold text-gray-800 mb-6 group-hover:${service.color} transition-colors duration-300`}
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200"
                    />
                  </motion.button>
                </div>

                {/* Floating Elements on Card */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-br from-pink-400 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
