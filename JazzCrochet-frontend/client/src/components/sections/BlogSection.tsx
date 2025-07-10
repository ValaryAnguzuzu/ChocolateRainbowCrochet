import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  Calendar,
  User,
  ExternalLink,
  Sparkles,
} from "lucide-react";

function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const blogPosts = [
    {
      id: 1,
      title: "The Power of H.U.M.A.N.™ Framework in Healthcare",
      excerpt:
        "Discover how centering humanity and accountability transforms patient care and creates healing environments that honor every individual's dignity and voice.",
      content:
        "In my work as a lived experience advocate, I've witnessed firsthand how traditional healthcare systems often fail to see the whole person. The H.U.M.A.N.™ framework emerged from my own journey through medical trauma and systemic neglect...",
      author: "Jasmine Peña",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Healthcare Ethics",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      likes: 247,
      comments: 23,
      featured: true,
      gradient: "from-pastel-pink to-pastel-purple",
    },
    {
      id: 2,
      title: "Chocolate Rainbow Crochet: Healing Through Creative Expression",
      excerpt:
        "How therapeutic art programs provide safe spaces for trauma processing while creating something beautiful and meaningful.",
      content:
        "When I first picked up a crochet hook during my own healing journey, I had no idea it would become a cornerstone of my therapeutic practice. The rhythmic motion, the tactile experience, the transformation of yarn into something beautiful...",
      author: "Jasmine Peña",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Therapeutic Art",
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      likes: 189,
      comments: 15,
      featured: false,
      gradient: "from-pastel-purple to-soft-lavender",
    },
    {
      id: 3,
      title: "Building Bridges: From Trauma to Transformation",
      excerpt:
        "My personal journey from experiencing medical trauma to becoming an advocate for systemic change and healing facilitation.",
      content:
        "I've lived through the very systems I now help transform. From medical trauma to systemic neglect, my experiences have become the foundation for my advocacy work. But transformation isn't just about surviving—it's about thriving...",
      author: "Jasmine Peña",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Personal Journey",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      likes: 312,
      comments: 28,
      featured: true,
      gradient: "from-soft-lavender to-pastel-pink",
    },
    {
      id: 4,
      title: "T.A.T. Program: Integrating Mindfulness with Art Therapy",
      excerpt:
        "Exploring how Therapeutic Art & Thoughtfulness combines mindfulness techniques with creative expression for holistic healing.",
      content:
        "The T.A.T. program represents the intersection of mindfulness practice and therapeutic art. It's not just about creating—it's about creating with intention, awareness, and purpose. Every brushstroke, every stitch...",
      author: "Jasmine Peña",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Mindfulness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      likes: 156,
      comments: 12,
      featured: false,
      gradient: "from-pastel-pink to-pastel-purple",
    },
    {
      id: 5,
      title: "Advocacy in Action: Transforming Healthcare Systems",
      excerpt:
        "How lived experience advocacy creates meaningful change in healthcare policies and practices.",
      content:
        "Advocacy isn't just about speaking up—it's about speaking truth to power with the authority that comes from lived experience. When I train healthcare providers, I'm not just sharing knowledge...",
      author: "Jasmine Peña",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Advocacy",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      likes: 203,
      comments: 19,
      featured: false,
      gradient: "from-pastel-purple to-soft-lavender",
    },
    {
      id: 6,
      title: "Community Healing: The Power of Collective Creativity",
      excerpt:
        "How group art therapy sessions create healing communities and foster connection among trauma survivors.",
      content:
        "There's something profoundly healing about creating alongside others who understand your journey. In our community healing sessions, we don't just make art—we build connections...",
      author: "Jasmine Peña",
      date: "December 3, 2024",
      readTime: "5 min read",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      likes: 178,
      comments: 14,
      featured: false,
      gradient: "from-soft-lavender to-pastel-pink",
    },
  ];

  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  const handleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="blog"
      className="py-20 bg-pastel-purple relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-pastel-pink rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-pastel-purple rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
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
            Insights & Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my journey, insights, and the transformative power of
            healing through advocacy and art
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              {/* Featured Badge */}
              {post.featured && (
                <motion.div
                  className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Sparkles size={12} className="mr-1" />
                  Featured
                </motion.div>
              )}

              {/* Blog Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span
                    className={
                      [
                        "Healthcare Ethics",
                        "Therapeutic Art",
                        "Personal Journey",
                        "Mindfulness",
                        "Advocacy",
                        "Community",
                      ].includes(post.category)
                        ? "bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-xl hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 px-2 py-1 rounded-lg text-xs font-medium"
                        : "bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-lg text-xs font-medium"
                    }
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-6 group-hover:text-pastel-purple transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {post.title}
                </motion.h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Social Interactions */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-200 ${
                        likedPosts.has(post.id)
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart
                        size={16}
                        className={
                          likedPosts.has(post.id) ? "fill-current" : ""
                        }
                      />
                      <span className="text-sm font-medium">
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </motion.button>

                    <motion.button
                      className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={16} />
                      <span className="text-sm font-medium">
                        {post.comments}
                      </span>
                    </motion.button>

                    <motion.button
                      className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share2 size={16} />
                      <span className="text-sm font-medium">Share</span>
                    </motion.button>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${post.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group/btn`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read More
                  <ExternalLink
                    size={16}
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200"
                  />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          className="flex items-center justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={prevPage}
            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="text-pastel-purple" size={24} />
          </motion.button>

          {/* Page Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? "bg-pastel-purple scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-pastel-pink"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextPage}
            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-pastel-purple" size={24} />
          </motion.button>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
