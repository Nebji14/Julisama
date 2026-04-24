"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Gestion du site")
          .items([
            S.listItem()
              .title("Position 1 (Haut Gauche)")
              .id("pos1")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-1")
                  .title("Position 1"),
              ),
            S.listItem()
              .title("Position 2 (Bas Gauche)")
              .id("pos2")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-2")
                  .title("Position 2"),
              ),
            S.listItem()
              .title("Position 3 (Haut Droite)")
              .id("pos3")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-3")
                  .title("Position 3"),
              ),
            S.listItem()
              .title("Position 4 (Bas Droite)")
              .id("pos4")
              .child(
                S.document()
                  .schemaType("portfolio")
                  .documentId("portfolio-4")
                  .title("Position 4"),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schema.types,
  },
});
