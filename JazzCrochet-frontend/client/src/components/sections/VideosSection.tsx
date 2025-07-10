import { motion } from "framer-motion";
import { Play, ExternalLink, Clock, Users } from "lucide-react";

function VideosSection() {
  const videos = [
    {
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Chocolate Rainbow Crochet Workshop",
      description:
        "See how our therapeutic crochet program helps participants process trauma through creative expression.",
      gradient: "from-pastel-pink to-pastel-purple",
      duration: "15:32",
      views: "2.4K",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "T.A.T. Program Overview",
      description:
        "Learn about our Therapeutic Art & Thoughtfulness program and its impact on healing.",
      gradient: "from-pastel-purple to-soft-lavender",
      duration: "12:18",
      views: "1.8K",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "H.U.M.A.N.™ Framework Training",
      description:
        "Discover how healthcare providers are transforming their practice with our framework.",
      gradient: "from-soft-lavender to-pastel-pink",
      duration: "28:45",
      views: "3.2K",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Mindful Healing Practices",
      description:
        "Explore mindfulness techniques integrated into our therapeutic art programs.",
      gradient: "from-pastel-pink to-pastel-purple",
      duration: "22:10",
      views: "1.9K",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Community Healing Event",
      description:
        "Join us for a community healing event showcasing the power of collective creativity.",
      gradient: "from-pastel-purple to-soft-lavender",
      duration: "18:33",
      views: "2.7K",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Nature-Based Healing",
      description:
        "Experience the healing power of nature integrated with our therapeutic practices.",
      gradient: "from-soft-lavender to-pastel-pink",
      duration: "25:12",
      views: "2.1K",
    },
  ];

  return (
    <section
      id="videos"
      className="py-20 bg-pastel-purple relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-pastel-pink rounded-full opacity-20"
          animate={{
            y: [0, -40, 0],
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
            Healing in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our programs and testimonials in action, showcasing the
            transformative power of therapeutic art
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              {/* Enhanced Video Thumbnail */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play Button with Animation */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </motion.div>
                </motion.div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">
                  <Clock size={12} className="inline mr-1" />
                  {video.duration}
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">
                  <Users size={12} className="inline mr-1" />
                  {video.views}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-6 group-hover:text-pastel-purple transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {video.title}
                </motion.h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {video.description}
                </p>

                {/* Enhanced Action Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${video.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play
                    size={18}
                    className="mr-2 group-hover/btn:scale-110 transition-transform duration-200"
                  />
                  Watch Video
                  <ExternalLink
                    size={16}
                    className="ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"
                  />
                </motion.button>
              </div>

              {/* Floating Elements on Card */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-pastel-pink rounded-full opacity-60"
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
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-pastel-purple rounded-full opacity-60"
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
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
            View All Videos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default VideosSection;
