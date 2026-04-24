export const portfolioType = {
  name: "portfolio",
  title: "Réalisations",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre de la réalisation",
      type: "string",
    },
    {
      name: "category",
      title: "Catégorie (Sous-titre)",
      type: "string",
    },
    {
      name: "description",
      title: "Description du projet",
      type: "text",
      validation: (Rule) =>
        Rule.max(300).error(
          "La description ne doit pas dépasser 300 caractères.",
        ),
    },
    {
      name: "images",
      title: "Images (Glissez jusqu'à 3 images ici)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: {
        layout: "grid",
      },
      validation: (Rule) =>
        Rule.max(3).error("Vous ne pouvez pas ajouter plus de 3 images."),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "Réalisation vide",
        media: media,
      };
    },
  },
};
