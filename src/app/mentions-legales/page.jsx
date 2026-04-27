import Link from "next/link";

const MentionsLegales = () => {
  return (
    <main className="min-h-screen bg-[#faf7f3] py-32 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full relative z-10 pb-16">
        <div className="mb-12" data-aos="fade-right">
          <Link
            href="/"
            className="font-sans text-[#42726b] font-bold text-xs tracking-[0.2em] uppercase hover:text-[#a2623d] transition-colors flex items-center gap-2"
          >
            <span>&larr;</span> Retour à l&apos;accueil
          </Link>
        </div>

        <div
          className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[2.5rem] shadow-xl border border-[#303030]/10"
          data-aos="fade-up"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-black text-[#303030] uppercase mb-12 border-b border-[#303030]/10 pb-8 leading-tight">
            Mentions Légales <br />
            <span className="text-[#a2623d] font-light italic text-2xl md:text-4xl">
              Julisama
            </span>
          </h1>

          <div className="space-y-12">
            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                1. Éditeur du site
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                Le site internet www.julisama.fr est édité par :
              </p>
              <ul className="space-y-3 font-sans text-sm md:text-base text-[#303030]/80">
                <li>
                  <span className="font-bold">Nom :</span> Isabelle ROUSSEL
                </li>
                <li>
                  <span className="font-bold">Enseigne :</span> JULISAMA
                </li>
                <li>
                  <span className="font-bold">Forme juridique :</span>{" "}
                  Entrepreneur Individuel (EI)
                </li>
                <li>
                  <span className="font-bold">Adresse du siège social :</span>{" "}
                  49A rue du Bois, 62151 BURBURE
                </li>
                <li>
                  <span className="font-bold">SIRET :</span> 933 316 267 00014
                </li>
                <li>
                  <span className="font-bold">Email :</span>{" "}
                  <a
                    href="mailto:contact@julisama.fr"
                    className="text-[#42726b] hover:underline"
                  >
                    contact@julisama.fr
                  </a>
                </li>
                <li>
                  <span className="font-bold">Téléphone :</span> 07 56 80 57 44
                </li>
                <li>
                  <span className="font-bold">
                    Directeur de la publication :
                  </span>{" "}
                  Isabelle ROUSSEL
                </li>
              </ul>
              <p className="font-sans italic text-sm mt-4 text-[#303030]/60">
                Note fiscale : TVA non applicable - article 293 B du Code
                Général des Impôts.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                2. Hébergeur du site
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                Le site est hébergé par :
              </p>
              <ul className="space-y-3 font-sans text-sm md:text-base text-[#303030]/80">
                <li>
                  <span className="font-bold">Nom de l&apos;hébergeur :</span>{" "}
                  Netlify, Inc.
                </li>
                <li>
                  <span className="font-bold">Adresse :</span> 44 Montgomery
                  Street, Suite 300, San Francisco, California 94104, USA
                </li>
                <li>
                  <span className="font-bold">Site web :</span>{" "}
                  <a
                    href="https://www.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#42726b] hover:underline"
                  >
                    www.netlify.com
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                L&apos;ensemble des éléments présents sur ce site (textes,
                images, photographies, logos, graphismes, icônes, ainsi que la
                mise en page) sont la propriété exclusive d&apos;Isabelle
                ROUSSEL / JULISAMA, sauf mention contraire.
              </p>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                Toute reproduction, représentation, modification ou utilisation,
                totale ou partielle, par quelque procédé que ce soit, est
                strictement interdite sans autorisation écrite préalable.
              </p>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Toute violation pourra entraîner des poursuites judiciaires.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                4. Données personnelles - RGPD
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) :
              </p>
              <ul className="space-y-3 font-sans text-sm md:text-base text-[#303030]/80">
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    <strong className="text-[#303030]">Collecte :</strong> Les
                    données collectées (via le formulaire de contact ou
                    inscription newsletter) sont exclusivement destinées à
                    JULISAMA pour la gestion de la relation client et des
                    commandes.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    <strong className="text-[#303030]">Consentement :</strong>{" "}
                    Vos données ne sont jamais transmises à des tiers sans votre
                    accord préalable.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    <strong className="text-[#303030]">Vos droits :</strong>{" "}
                    Vous disposez d&apos;un droit d&apos;accès, de
                    rectification, d&apos;opposition et de suppression de vos
                    données personnelles.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    <strong className="text-[#303030]">Contact :</strong> Pour
                    exercer vos droits, contactez-nous à l&apos;adresse suivante
                    :{" "}
                    <a
                      href="mailto:contact@julisama.fr"
                      className="text-[#42726b] font-bold hover:underline"
                    >
                      contact@julisama.fr
                    </a>
                    .
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                5. Cookies
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Le site peut utiliser des cookies pour améliorer votre
                expérience de navigation et mesurer l&apos;audience. Lors de
                votre première visite, une bannière vous permet d&apos;accepter
                ou de refuser l&apos;utilisation de ces cookies. Vous pouvez
                également configurer votre navigateur pour les bloquer.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                6. Responsabilité
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Les informations fournies sur le site sont à titre indicatif.
                Bien que JULISAMA mette tout en œuvre pour garantir
                l&apos;exactitude des contenus, l&apos;éditeur ne saurait être
                tenu responsable des erreurs, d&apos;une absence de
                disponibilité des informations ou des conséquences liées à
                l&apos;utilisation de ces données.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                7. Contact
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Pour toute question concernant le site ou l&apos;utilisation de
                vos données :
              </p>
              <ul className="space-y-1 mt-2 font-sans text-sm md:text-base text-[#303030]/80">
                <li>
                  <span className="font-bold">Email :</span>{" "}
                  <a
                    href="mailto:contact@julisama.fr"
                    className="text-[#42726b] hover:underline"
                  >
                    contact@julisama.fr
                  </a>
                </li>
                <li>
                  <span className="font-bold">Téléphone :</span> 07 56 80 57 44
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MentionsLegales;
