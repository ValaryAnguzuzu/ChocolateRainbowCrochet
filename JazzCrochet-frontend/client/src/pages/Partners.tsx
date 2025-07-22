const partners = [
  {
    name: "SISTAMoms LLC",
    website: "https://www.yvonneliving.net/",
    image: "/src/assets/SISTAMoms.png",
    testimonial:
      "Yvonne Monique Livingston is a mother of six, grandmother of four, and the founder of Yvonne Monique Livingston LLC, SISTAMoms Global LLC, and Talk To Me And See Inc. 501(c)(3). She is a visionary leader, motivational speaker, cultural strategist, and mental wealth advocate who has built her life’s work around economic empowerment, healing, and the power of lived experience. She co-created the BEACON model alongside Dr. Liza Suárez, Dr. Wendy Chu, and Viviana Patino—an anchoring framework rooted in Ubuntu, Sankofa, and the teachings of her grandmother Ethel Pearl Buchanan. Her work transforms trauma into tools of advocacy, organizing, and entrepreneurship. From Chicago to global communities, Yvonne trains professionals, partners with institutions, and creates sacred spaces for storytelling, intergenerational healing, and legacy building. She leads with truth, builds with purpose, and heals through community.",
  },
  {
    name: "Amanda Ashley Armour LLC",
    website: "https://mindfulmakers.com",
    image: "/src/assets/partner1.jpeg",
    testimonial:
      "Amanda Ashley Armour is a creative visionary, cultural healer, and co-founder of SISTAMoms Global LLC. As the founder and CEO of “Heyyamanduh,” she channels art into action—using performance, design, and community storytelling to inspire healing and collective agency. Rooted in her own lived experience, Amanda’s work bridges generations through color, rhythm, and truth-telling. Whether guiding young people through healing-centered art workshops or building safe spaces for Black and Brown women to express themselves, she honors beauty as resistance and creativity as survival. Amanda leads with boldness, builds through connection, and amplifies the voices of those too often silenced. Her practice is one of advocacy, joy, and unapologetic presence.",
  },
  {
    name: "Black Math Disciple LLC",
    website: "https://mindfulmakers.com",
    image: "/src/assets/partner2.png",
    testimonial:
      "LaMarco Vincent Bell is a brilliant mind reshaping how we understand numbers, power, and liberation. As the founder of Black Math Disciple LLC, he merges rigorous mathematics with cultural reclamation—making data, financial literacy, and economic strategy accessible to Black and marginalized communities. His teaching moves beyond the classroom, planting seeds of ownership, legacy, and systemic awareness. LaMarco’s work breaks cycles of financial trauma by centering historical truths, community knowledge, and the urgent need for economic empowerment. Through mentorship, curriculum design, and public engagement, he equips others to not only solve problems—but to rewrite equations that have never served us. LaMarco teaches with fire, builds with clarity, and empowers through numbers.",
  },

  {
    name: "From Out of My Parents Closet LLC",
    website: "https://artforall.org",
    image: "/src/assets/partner3.png",
    testimonial:
      "Desshana Buchanan is a fearless storyteller and entrepreneur who transforms truth into movement. As the founder of From Out of My Parents Closet, she creates bold platforms for self-expression, advocacy, and healing—especially for LGBTQ+ youth navigating family, faith, and identity. Desshana’s work blends personal narrative with policy change, using her voice to disrupt silence and ignite transformation. Whether speaking to youth in schools, organizing mutual aid, or building healing-centered businesses, she shows how lived experience can be both compass and catalyst. Desshana advocates with vulnerability, builds with courage, and lives out the belief that every story—especially the hard ones—has the power to heal a community.",
  },
];

function Partners() {
  return (
    <section className="py-20 bg-warm-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Check out my Partners!
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden min-h-[400px]"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${partner.image})` }}
              />
              <div className="flex-1 flex flex-col p-6 justify-between">
                <p className="text-gray-700 mb-4 text-center italic">
                  "{partner.testimonial}"
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-600 font-bold underline hover:text-blue-800 transition-colors duration-200 mt-auto"
                >
                  {partner.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
