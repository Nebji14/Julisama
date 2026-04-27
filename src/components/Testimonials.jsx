"use client";

// On crée l'icône Étoile directement en SVG, zéro dépendance requise !
const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Testimonials = ({ content, design }) => {
  if (!content || !content.reviews) return null;

  return (
    <section
      id="testimonials"
      className={`relative py-32 px-6 ${design?.bgColor || "bg-[#faf7f3]"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col items-center text-center mb-20"
          data-aos="fade-up"
        >
          <h2 className={`mb-4 block ${design?.subtitle || ""}`}>
            {content.subtitle}
          </h2>
          <h3 className={`max-w-3xl block ${design?.title || ""}`}>
            {content.titleLine1} <br className="hidden md:block" />
            <i className={design?.titleHighlight}>{content.titleLine2}</i>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.reviews.map((review, idx) => (
            <div
              key={idx}
              className={`flex flex-col h-full p-8 transition-transform duration-500 hover:-translate-y-2 ${design?.cardBg || "bg-white shadow-xl rounded-3xl"}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 fill-current ${design?.starColor || "text-[#a2623d]"}`}
                  />
                ))}
              </div>

              <p
                className={`grow mb-8 ${design?.reviewText || "font-sans text-sm font-medium leading-relaxed text-[#303030]/80 italic"}`}
              >
                &quot;{review.text}&quot;
              </p>

              <div className="mt-auto flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-black text-lg ${design?.avatarBg || "bg-[#42726b]/10 text-[#42726b]"}`}
                >
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p
                    className={`block ${design?.authorName || "font-sans font-bold text-xs tracking-widest uppercase text-[#303030]"}`}
                  >
                    {review.author}
                  </p>
                  {review.project && (
                    <p
                      className={`block mt-1 ${design?.authorProject || "font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#a2623d]"}`}
                    >
                      {review.project}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {content.googleLink && (
          <div className="flex justify-center" data-aos="fade-up">
            <a
              href={content.googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center transition-colors duration-300 ${design?.btnPrimary || "bg-[#8c5233] text-[#faf7f3] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#303030]"}`}
            >
              {content.btnText || "Voir tous les avis sur Google"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
