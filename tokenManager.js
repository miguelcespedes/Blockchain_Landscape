const fs = require('fs');
const path = require('path');
const axios = require('axios');

const TOKENS_DIR = path.join(__dirname, 'src', 'data', 'tokens');
const IMAGES_DIR = path.join(__dirname, 'public', 'images');

/**
 * Genera el contenido del archivo del token.
 */
const generateTokenTemplate = (id, slug, fields) => {
  return `const ${id} = {
  id: "${id}",
  slug: "${slug}",
  fields: ${JSON.stringify(fields, null, 2)},
};
export default ${id};`;
};

/**
 * Crea el archivo de un token.
 */
const createTokenFile = (token) => {
  try {
    const filePath = path.join(TOKENS_DIR, `${token.id}.js`);
    const content = generateTokenTemplate(token.id, token.slug, token.fields);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Token creado exitosamente: ${filePath}`);
  } catch (error) {
    console.error(`Error al crear el token ${token.id}:`, error.message);
  }
};

/**
 * Verifica si una imagen existe en el directorio público.
 */
const imageExists = (symbol) => {
  const lowercaseSymbol = symbol.toLowerCase(); // Convertir a minúsculas
  const filePath = path.join(IMAGES_DIR, `${lowercaseSymbol}.svg`);
  return fs.existsSync(filePath);
};

/**
 * Procesa los datos de la API y genera tokens solo si la imagen existe.
 */
const fetchAndGenerateTokens = async (filterSymbols = null) => {
  console.log("Obteniendo datos de Coinlore API...");
  try {
    const response = await axios.get('https://api.coinlore.net/api/tickers/');
    const allTokens = response.data.data;

    const tokensToProcess = filterSymbols
      ? allTokens.filter((token) => filterSymbols.includes(token.symbol))
      : allTokens;

    if (tokensToProcess.length === 0) {
      console.error("No se encontraron tokens para los símbolos proporcionados.");
      return;
    }

    if (!fs.existsSync(TOKENS_DIR)) {
      fs.mkdirSync(TOKENS_DIR, { recursive: true });
      console.log(`Directorio creado: ${TOKENS_DIR}`);
    }

    for (const token of tokensToProcess) {
      if (!imageExists(token.symbol)) {
        console.warn(`Imagen no encontrada para ${token.symbol}, se omitirá la creación del token.`);
        continue;
      }

      const fields = [
        { key: "name", value: token.name },
        { key: "description", value: `${token.name} (${token.symbol}) tiene un precio de $${token.price_usd} y una capitalización de mercado de $${token.market_cap_usd}.` },
        { key: "icon", value: `./images/${token.symbol.toLowerCase()}.svg` },
        { key: "price_usd", value: token.price_usd },
        { key: "market_cap_usd", value: token.market_cap_usd },
        { key: "volume24", value: token.volume24 },
        { key: "percent_change_24h", value: token.percent_change_24h },
        { key: "percent_change_1h", value: token.percent_change_1h },
        { key: "percent_change_7d", value: token.percent_change_7d },
      ];

      createTokenFile({ id: token.symbol, slug: token.name, fields });
    }

    console.log("¡Tokens generados exitosamente para los símbolos con imágenes existentes!");
  } catch (error) {
    console.error("Error al obtener datos de la API de Coinlore:", error.message);
  }
};

// Leer argumentos desde la línea de comandos
const args = process.argv.slice(2);
const filterSymbols = args.length > 0 ? args : null;

// Ejecutar generación de tokens
fetchAndGenerateTokens(filterSymbols);
