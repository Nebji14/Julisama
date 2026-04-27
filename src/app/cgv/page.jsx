import Link from "next/link";

const CGV = () => {
  return (
    <main className="min-h-screen bg-[#faf7f3] py-32 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full relative z-10 pb-16">
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
            Conditions Générales <br />
            <span className="text-[#a2623d] font-light italic text-2xl md:text-4xl">
              de Vente
            </span>
          </h1>

          <div className="space-y-10 font-sans font-medium text-sm md:text-base leading-relaxed text-[#303030]/80">
            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Préambule
              </h2>
              <p className="mb-4">
                Les conditions générales de vente sont à lire attentivement.
                Elles constituent les éléments du contrat de prestation des
                services proposés par JULISAMA.
              </p>
              <p className="mb-4">
                La commande ne sera prise en compte que lorsque vous aurez
                accepté ces conditions générales de vente. Tout Client de
                JULISAMA reconnaît avoir pris connaissance de ce document avant
                d&apos;avoir signé un devis avec la mention &laquo; bon pour
                accord &raquo;, et avoir la capacité de contracter avec
                JULISAMA.
              </p>
              <p>
                Toute signature d&apos;un devis vaut acceptation expresse et
                sans réserve des présentes conditions.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 1 - Désignation
              </h2>
              <p>
                Isabelle ROUSSEL exerçant sous la dénomination
                &quot;JULISAMA&quot;
                <br />
                49A rue du Bois 62151 BURBURE
                <br />
                SIRET : 93331626700014
                <br />
                Tél : 07 56 80 57 44
                <br />
                contact@julisama.fr
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 2 - Champ d&apos;application
              </h2>
              <p className="mb-4">
                JULISAMA, désigné par Isabelle Roussel, Décoratrice
                d&apos;intérieur, est une entreprise proposant des conseils en
                aménagement et décoration d&apos;intérieur, et accompagne ses
                clients, particuliers comme professionnels, dans leur projet
                d&apos;aménagement et/ou de transformation d&apos;un ou
                plusieurs espaces.
              </p>
              <p className="mb-4">
                Les présentes Conditions Générales de Vente (CGV)
                s&apos;appliquent, sans restriction ni réserve, à tout achat des
                services proposés par Isabelle Roussel (&laquo; le Prestataire
                &raquo;) aux consommateurs et aux clients professionnels ou non
                professionnels (&laquo; le Client &raquo;).
              </p>
              <p>
                La validation de la commande de Services par le Client vaut
                acceptation sans restriction ni réserve des présentes CGV et est
                formalisée par la mention &laquo; Bon pour Accord &raquo; sur le
                devis.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 3 - Devis et Droit de Rétractation
              </h2>
              <p className="mb-4">
                Un devis est signé par le Client qui verse un acompte d&apos;un
                montant de 50% du prix global de celle-ci. La vente de Services
                ne sera considérée comme définitive qu&apos;après le paiement de
                l&apos;acompte.
              </p>
              <p className="mb-4">
                <strong>Droit de rétractation :</strong> Conformément à
                l&apos;article L221-18 du Code de la consommation, le Client
                agissant en tant que consommateur dispose d&apos;un délai de 14
                jours calendaires à compter de la signature du devis pour
                exercer son droit de rétractation. L&apos;exercice de ce droit
                se fait par l&apos;envoi d&apos;une lettre recommandée avec
                accusé de réception.
              </p>
              <p>
                <strong>Exécution immédiate :</strong> Si le Client souhaite que
                la prestation débute avant la fin de ce délai de 14 jours, il
                doit en faire la demande expresse par écrit. Dans ce cas, il
                renonce expressément à son droit de rétractation pour la
                prestation débutée ou pleinement exécutée avant la fin du délai.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 4 & 5 - Tarifs et Conditions de paiement
              </h2>
              <p className="mb-4">
                Les prix sont exprimés en Euros Hors Taxes. &laquo; TVA non
                applicable, article 293 B du CGI &raquo;. Le prix est majoré des
                frais de déplacements, le cas échéant.
              </p>
              <p className="mb-4">
                Un acompte correspondant à 50% du prix total est exigé lors de
                la signature. Le solde du prix est payable au comptant, au jour
                de la fourniture desdits Services. (Pour les prestations
                &quot;SOS Déco&quot;, &quot;Flash Déco&quot; et &quot;Mini Book
                Inspiration&quot;, le paiement de la totalité intervient à la
                signature du devis).
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Virement bancaire.</li>
                <li>
                  Chèque bancaire (émis par une banque domiciliée en France
                  métropolitaine).
                </li>
                <li>
                  PayPal (paiement comptant ou en plusieurs fois, sous
                  conditions).
                </li>
              </ul>
              <p>
                Tout retard de paiement entraînera l&apos;application de
                pénalités calculées au taux légal en vigueur, ainsi qu&apos;une
                indemnité forfaitaire de 40 € pour frais de recouvrement
                (applicable uniquement aux Clients professionnels).
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 6 - Fourniture de Services
              </h2>
              <p className="mb-4">
                Les caractéristiques définitives, le contenu exact des livrables
                et les délais spécifiques de réalisation sont ceux figurant
                expressément sur le devis accepté par le Client. Pour toutes les
                prestations, aucun des documents fournis par le Prestataire et
                notamment les plans dessinés, ne peuvent servir de plan
                d&apos;exécution pour la réalisation de l&apos;ouvrage.
              </p>
              <p>
                Le Client est réputé être le maître de l&apos;ouvrage. Les
                documents remis (comptes-rendus, plans, calepinages) ont pour
                objet de guider le Client et les artisans intervenants, mais ne
                se substituent pas aux documents fournis par des professionnels
                du bâtiment habilités.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 7 - Responsabilité et Garantie
              </h2>
              <p className="mb-4">
                Le Prestataire déclare être assuré au titre de sa responsabilité
                civile professionnelle auprès de la société ALLIANZ sous la
                référence : 64177230.
              </p>
              <p className="mb-4">
                Le Prestataire s&apos;engage à conseiller et à fournir au Client
                des recommandations. Le Client reconnaît que les couleurs
                visualisées sur des écrans ou reproduites sur des documents
                imprimés peuvent varier avec celles appliquées. Le Client est
                seul responsable du choix final des couleurs et des peintures.
              </p>
              <p>
                Le Prestataire ne saurait être tenu responsable de
                l&apos;exécution, de la qualité, des délais ou du coût des
                travaux réalisés par des tiers (artisans, entreprises, maîtres
                d&apos;œuvre) intervenant à la suite de ses recommandations.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 8 - Propriété Intellectuelle
              </h2>
              <p className="mb-4">
                Le Prestataire reste propriétaire de tous les droits de
                propriété intellectuelle sur les études, dessins, modèles,
                réalisés en vue de la fourniture des Services au Client. Le
                Client s&apos;interdit toute reproduction ou exploitation sans
                l&apos;autorisation expresse du Prestataire.
              </p>
              <p>
                Sauf refus du Client exprimé sur le devis, le Client autorise le
                Prestataire à utiliser et publier anonymement sous tous supports
                de communication les projets réalisés ou non (planches, dossier,
                photos).
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 16 - Litiges et Médiation
              </h2>
              <p className="mb-4">
                Conformément aux articles L.616-1 et R.616-1 du code de la
                consommation, notre société a mis en place un dispositif de
                médiation de la consommation. L&apos;entité de médiation retenue
                est :{" "}
                <strong>
                  MEDIATION CONSOMMATION DÉVELOPPEMENT / MED CONSO DEV
                </strong>
                .
              </p>
              <p>
                En cas de litige, vous pouvez déposer votre réclamation sur son
                site :{" "}
                <a
                  href="https://www.medconsodev.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#42726b] hover:underline"
                >
                  https://www.medconsodev.eu
                </a>{" "}
                ou par voie postale en écrivant à :
              </p>
              <p className="mt-2 text-sm italic">
                MÉDIATION CONSOMMATION DÉVELOPPEMENT/MED CONSO DEV
                <br />
                Centre d&apos;Affaires Stéphanois SAS
                <br />
                IMMEUBLE L&apos;HORIZON - ESPLANADE DE FRANCE
                <br />
                3, RUE J. CONSTANT MILLERET - 42000 SAINT-ETIENNE
              </p>
            </section>

            <section>
              <h2 className="font-sans text-[#a2623d] font-bold text-[13px] uppercase tracking-widest mb-4">
                Article 17 - Acceptation du Client
              </h2>
              <p>
                Le fait pour le Client de commander un Service emporte adhésion
                et acceptation pleine et entière des présentes Conditions
                Générales de Vente et obligation au paiement des Services
                commandés, ce qui est expressément reconnu par le Client, qui
                renonce, notamment, à se prévaloir de tout document
                contradictoire, qui serait inopposable au Prestataire.
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

export default CGV;
