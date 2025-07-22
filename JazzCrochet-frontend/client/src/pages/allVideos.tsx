import { useEffect } from "react";

const videos = [
  {
    src: "/src/assets/video3.mp4",
    title: "Chocolate Rainbow Crochet Workshop",
    description:
      "See how our therapeutic crochet program helps participants process trauma through creative expression.",
  },
  {
    src: "/src/assets/video6.mp4",
    title: "T.A.T. Program Overview",
    description:
      "Learn about our Therapeutic Art & Thoughtfulness program and its impact on healing.",
  },
  {
    src: "/src/assets/video10.mp4",
    title: "H.U.M.A.N.™ Framework Training",
    description:
      "Discover how healthcare providers are transforming their practice with our framework.",
  },
  {
    src: "/src/assets/video4.mp4",
    title: "Mindful Healing Practices",
    description:
      "Explore mindfulness techniques integrated into our therapeutic art programs.",
  },
  {
    src: "/src/assets/video5.mp4",
    title: "Community Healing Event",
    description:
      "Join us for a community healing event showcasing the power of collective creativity.",
  },
  {
    src: "/src/assets/video2.mp4",
    title: "Nature-Based Healing",
    description:
      "Experience the healing power of nature integrated with our therapeutic practices.",
  },

  {
    src: "/src/assets/video7.mp4",
    title: "Chocolate Rainbow Crochet Workshop",
    description:
      "See how our therapeutic crochet program helps participants process trauma through creative expression.",
  },
  {
    src: "/src/assets/video8.mp4",
    title: "T.A.T. Program Overview",
    description:
      "Learn about our Therapeutic Art & Thoughtfulness program and its impact on healing.",
  },
  {
    src: "/src/assets/video9.mp4",
    title: "H.U.M.A.N.™ Framework Training",
    description:
      "Discover how healthcare providers are transforming their practice with our framework.",
  },
  {
    src: "/src/assets/video1.mp4",
    title: "Mindful Healing Practices",
    description:
      "Explore mindfulness techniques integrated into our therapeutic art programs.",
  },
  {
    src: "/src/assets/video11.mp4",
    title: "Community Healing Event",
    description:
      "Join us for a community healing event showcasing the power of collective creativity.",
  },
  {
    src: "/src/assets/video12.mp4",
    title: "Nature-Based Healing",
    description:
      "Experience the healing power of nature integrated with our therapeutic practices.",
  },

  {
    src: "/src/assets/video13.mp4",
    title: "Chocolate Rainbow Crochet Workshop",
    description:
      "See how our therapeutic crochet program helps participants process trauma through creative expression.",
  },
  {
    src: "/src/assets/video14.mp4",
    title: "T.A.T. Program Overview",
    description:
      "Learn about our Therapeutic Art & Thoughtfulness program and its impact on healing.",
  },
  {
    src: "/src/assets/video15.mp4",
    title: "H.U.M.A.N.™ Framework Training",
    description:
      "Discover how healthcare providers are transforming their practice with our framework.",
  },
  {
    src: "/src/assets/video16.mp4",
    title: "Mindful Healing Practices",
    description:
      "Explore mindfulness techniques integrated into our therapeutic art programs.",
  },
  {
    src: "/src/assets/video17.mp4",
    title: "Community Healing Event",
    description:
      "Join us for a community healing event showcasing the power of collective creativity.",
  },
  {
    src: "/src/assets/video18.mp4",
    title: "Nature-Based Healing",
    description:
      "Experience the healing power of nature integrated with our therapeutic practices.",
  },

  {
    src: "/src/assets/video19.mp4",
    title: "Chocolate Rainbow Crochet Workshop",
    description:
      "See how our therapeutic crochet program helps participants process trauma through creative expression.",
  },
  {
    src: "/src/assets/video20.mp4",
    title: "T.A.T. Program Overview",
    description:
      "Learn about our Therapeutic Art & Thoughtfulness program and its impact on healing.",
  },
  {
    src: "/src/assets/video21.mp4",
    title: "H.U.M.A.N.™ Framework Training",
    description:
      "Discover how healthcare providers are transforming their practice with our framework.",
  },
  {
    src: "/src/assets/video22.mp4",
    title: "Mindful Healing Practices",
    description:
      "Explore mindfulness techniques integrated into our therapeutic art programs.",
  },
  {
    src: "/src/assets/video3.mp4",
    title: "Community Healing Event",
    description:
      "Join us for a community healing event showcasing the power of collective creativity.",
  },
  {
    src: "/src/assets/video24.mp4",
    title: "Nature-Based Healing",
    description:
      "Experience the healing power of nature integrated with our therapeutic practices.",
  },
];

function AllVideos() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, []);
  return (
    <section className="py-20 bg-warm-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          All Videos
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => {
            const id = video.src
              ? video.src.split("/").pop()?.replace(".mp4", "")
              : `video${idx + 1}`;
            return (
              <div
                key={idx}
                id={id}
                className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center"
              >
                <video
                  src={video.src}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                  controls
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {video.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AllVideos;
