import { categories, relations } from './relations';

// Importar dinámicamente todos los tokens
let tokens = {};
try {
  const requireTokens = require.context('./tokens', false, /\.js$/);
  tokens = requireTokens.keys().reduce((acc, file) => {
    const token = requireTokens(file).default;
    if (token && token.id) {
      acc[token.id] = token; // Agrega el token al diccionario por su ID
    }
    return acc;
  }, {});
} catch (error) {
  console.error("Error al cargar los tokens:", error.message);
}

// Función para obtener un campo específico del array `fields`
const getField = (fields, key) => {
  const field = fields.find((f) => f.key === key);
  return field ? field.value : null;
};

// Generar datos categorizados
const data = {
  slug: "Blockchain Landscape",
  id: "blockchain-landscape",
  children: [
    ...categories
      .map((category) => {
        const relation = relations[category.id];
        if (!relation) {
          console.info(`No se encontró una relación para la categoría "${category.slug}" (ID: "${category.id}").`);
          return null;
        }
        const relatedTokens = relation.children.map((tokenId) => tokens[tokenId]).filter(Boolean);
        if (relatedTokens.length === 0) {
          console.info(`La categoría "${category.slug}" (ID: "${category.id}") está vacía y no será mostrada.`);
          return null;
        }
        return {
          id: category.id, // ID de la categoría
          slug: category.slug, // Título de la categoría
          children: relatedTokens.map((token) => ({
            id: token.id,
            slug: token.slug,
            description: getField(token.fields, "description") || "",
            icon: getField(token.fields, "icon"),
            fields: token.fields, // Mantener todos los campos dinámicos
          })),
        };
      })
      .filter(Boolean), // Eliminar categorías vacías
    (() => {
      const otherTokens = Object.values(tokens).filter(
        (token) => !Object.values(relations).some((rel) => rel.children.includes(token.id))
      );
      if (otherTokens.length === 0) {
        console.info(`La categoría "Otros" está vacía y no será mostrada.`);
        return null;
      }
      return {
        id: "OTHERS",
        slug: "Otros",
        children: otherTokens.map((token) => ({
          id: token.id,
          slug: token.slug,
          description: getField(token.fields, "description") || "",
          icon: getField(token.fields, "icon"),
          fields: token.fields, // Mantener todos los campos dinámicos
        })),
      };
    })(),
  ].filter(Boolean), // Eliminar nodos nulos
};

// Manejar relaciones huérfanas
Object.keys(relations).forEach((relationId) => {
  if (!categories.some((category) => category.id === relationId)) {
    console.info(`La relación con ID "${relationId}" no coincide con ninguna categoría.`);
  }
});

export default data;
