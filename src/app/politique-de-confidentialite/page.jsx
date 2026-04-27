import Link from "next/link";

const PolitiqueConfidentialite = () => {
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
            Politique de Confidentialité <br />
            <span className="text-[#a2623d] font-light italic text-2xl md:text-4xl">
              Julisama
            </span>
          </h1>

          <div className="space-y-12">
            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                1. Introduction
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Chez JULISAMA, la protection de vos données personnelles est une
                priorité. Nous nous engageons à collecter uniquement les
                informations nécessaires au bon déroulement de nos prestations
                de conseil en décoration et à les utiliser de manière
                responsable, sécurisée et transparente.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                2. Données Collectées
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                Nous collectons les informations que vous nous fournissez
                directement via :
              </p>
              <ul className="space-y-3 font-sans text-sm md:text-base text-[#303030]/80">
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>Les formulaires de contact sur le site.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Les demandes de devis et échanges par e-mail ou téléphone.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Les informations nécessaires à la facturation (nom, prénom,
                    adresse postale, e-mail, numéro de téléphone).
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Les informations de paiement (gérées par des prestataires
                    sécurisés comme PayPal - vos coordonnées bancaires ne sont
                    jamais stockées par JULISAMA).
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                3. Finalités de la Collecte
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="space-y-3 font-sans text-sm md:text-base text-[#303030]/80">
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>Répondre à vos demandes de renseignements.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Établir vos devis et réaliser vos prestations de décoration
                    (SOS Déco, Immersion Déco, etc.).
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Gérer la facturation et la comptabilité de l&apos;entreprise.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Améliorer l&apos;expérience utilisateur sur notre site internet.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                4. Base Légale du Traitement
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                Conformément au RGPD, le traitement de vos données repose sur :
              </p>
              <ul className="space-y-3 font-sans text-sm md:text-base text-[#303030]/80">
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Votre consentement : pour les formulaires de contact ou les
                    cookies.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    L&apos;exécution d&apos;un contrat pour la réalisation des prestations
                    de services commandées.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Le respect d&apos;obligations légales : notamment pour la
                    conservation des factures.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                5. Partage des Données
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80 mb-4">
                JULISAMA ne vend aucune donnée personnelle. Vos informations ne
                sont partagées que dans les cas suivants :
              </p>
              <ul className="space-y-3 font-sans text-sm md:text-base text-[#303030]/80">
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Nécessité pour la prestation (ex : transmission de vos
                    coordonnées à un artisan partenaire, uniquement avec votre
                    accord préalable).
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#42726b] mt-1">•</span>
                  <span>
                    Traitement technique (hébergeur du site, outils de paiement
                    sécurisés).
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                6. Durée de Conservation
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Les données sont conservées uniquement le temps nécessaire à la
                réalisation de la mission ou selon les obligations légales (ex :
                10 ans pour les pièces comptables).
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                7. Vos Droits
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition
                et de suppression de vos données personnelles. Pour exercer ces
                droits, il vous suffit d&apos;envoyer un e-mail à :{" "}
                <a
                  href="mailto:contact@julisama.fr"
                  className="text-[#42726b] font-bold hover:underline"
                >
                  contact@julisama.fr
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                8. Sécurité
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Vos données sont stockées sur des serveurs sécurisés. Aucune
                donnée de paiement (numéro de carte bancaire) n&apos;est collectée ou
                stockée directement par JULISAMA.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                9. Cookies
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                Le site utilise des cookies pour analyser l&apos;audience et
                améliorer votre navigation. Vous pouvez les accepter ou les
                refuser via la bannière dédiée lors de votre arrivée sur le
                site.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[11px] uppercase tracking-widest mb-4">
                10. Modifications
              </h2>
              <p className="font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
                JULISAMA se réserve le droit de modifier cette politique de
                confidentialité à tout moment. Toute mise à jour sera publiée
                sur cette page.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-[#303030]/10 text-center">
            <p className="font-sans font-bold text-xs text-[#303030]/50 uppercase tracking-widest">
              Dernière mise à jour : 23/04/2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PolitiqueConfidentialite;
