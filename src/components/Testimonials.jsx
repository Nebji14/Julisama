"use client";

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
      {/* Le conteneur div a "overflow-hidden" et "pb-12".
        Il coupe la ligne droite de l'ombre vers le haut, mais laisse l'ombre vers le bas visible !
      */}
      <div className="absolute -top-px left-0 w-full z-20 overflow-hidden pb-12 leading-none">
        <svg
          className={`relative block w-[102%] -left-[1%] h-[40px] md:h-[80px] rotate-180 drop-shadow-[0_8px_15px_rgba(0,0,0,0.08)] ${design?.topDivider || "text-[#ffffff]"}`}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.5,187.38,97.71,232.88,85.73,277.53,70.62,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              className={`inline-flex items-center justify-center transition-colors duration-300 ${design?.btnPrimary || "bg-[#8c5233] text-[#faf7f3] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#303030]"}`}
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
