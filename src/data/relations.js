const categories = [
  { id: "LAYER1", slug: "Cadenas de Capa 1", description: "Blockchains independientes que actúan como capa base para aplicaciones y contratos inteligentes." },
  { id: "LAYER2", slug: "Soluciones de Capa 2", description: "Proyectos diseñados para mejorar la escalabilidad y el rendimiento de blockchains de capa 1." },
  { id: "DEFI", slug: "Finanzas Descentralizadas (DeFi)", description: "Protocolos que ofrecen servicios financieros descentralizados como préstamos y exchanges." },
  { id: "NFT_GAMING", slug: "NFTs y Gaming", description: "Tokens relacionados con juegos blockchain y activos digitales no fungibles (NFTs)." },
  { id: "PAYMENTS", slug: "Pagos y Transferencias", description: "Tokens diseñados para facilitar pagos rápidos y transferencias entre usuarios." },
  { id: "STABLECOINS", slug: "Stablecoins", description: "Criptomonedas cuyo valor está vinculado a una moneda fiduciaria u otro activo estable." },
  { id: "ORACLES", slug: "Oráculos", description: "Proyectos que conectan contratos inteligentes con datos del mundo real." },
  { id: "PRIVACY", slug: "Privacidad", description: "Criptomonedas diseñadas para mejorar la privacidad y anonimización de las transacciones." },
  { id: "EXCHANGES", slug: "Tokens de Exchanges", description: "Tokens utilizados en plataformas de intercambio para tarifas reducidas, gobernanza y otros beneficios." },
  { id: "UTILITY", slug: "Utilitarios", description: "Proyectos que ofrecen casos de uso únicos y soporte técnico dentro del ecosistema blockchain." }
];

const relations = {
  LAYER1: {
    children: [
      "ADA", "ALGO", "APT", "ARB", "ATOM", "AVAX", "BCH", "CORE", "CRO", 
      "DOT", "EOS", "ETC", "ETH", "FLOW", "HBAR", "KLAY", "MATIC", "NEAR", 
      "NEO", "SOL", "STX", "TON", "TRX", "XLM", "XTZ", "SUI", "MNT", "XRP"
    ]
  },
  LAYER2: {
    children: ["ARB", "OP", "MNT"]
  },
  DEFI: {
    children: [
      "AAVE", "LDO", "LINK", "MKR", "RUNE", "UNI", "STETH", "INJ", "QNT", 
      "PYTH", "FET", "GRT", "FTM", "RAY"
    ]
  },
  NFT_GAMING: {
    children: [
      "APE", "AXS", "GALA", "MANA", "SAND", "IMX", "RNDR", "CHZ", "THETA"
    ]
  },
  PAYMENTS: {
    children: [
      "BTC", "DOGE", "LTC", "SHIB", "FLOKI", "XMR", "ZEC", "VET", "XRP"
    ]
  },
  STABLECOINS: {
    children: ["USDC", "USDT", "DAI", "WBTC", "WETH"]
  },
  ORACLES: {
    children: ["LINK", "PYTH", "GRT"]
  },
  PRIVACY: {
    children: ["XMR", "ZEC"]
  },
  EXCHANGES: {
    children: [
      "BGB", "BNB", "CNX", "KCS", "LEO", "OKB"
    ]
  },
  UTILITY: {
    children: [
      "FET", "FIL", "HNT", "KAS", "TIA", "SEI", "PEPE", "AR", "ENS"
    ]
  }
};

export { categories, relations };
