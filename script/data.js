const blockchainLandscape = {
  name: "Ecosistema Blockchain",
  id: "ecosistema-blockchain",
  children: [
    {
      name: "Prueba de Trabajo (PoW)",
      id: "POW",
      children: [
        {
          name: "Bitcoin",
          id: "BTC",
          icon: "./images/BTC.png",
          description: "Bitcoin es la primera criptomoneda descentralizada, creada para permitir transacciones globales seguras sin la necesidad de intermediarios."
        },
        {
          name: "Litecoin",
          id: "LTC",
          icon: "./images/LTC.png",
          description: "Litecoin es una criptomoneda diseñada para transacciones rápidas y económicas, con un tiempo de bloque más corto que Bitcoin."
        },
        {
          name: "Monero",
          id: "XMR",
          icon: "./images/XMR.png",
          description: "Monero es una criptomoneda enfocada en la privacidad, que ofrece transacciones seguras, anónimas e imposibles de rastrear."
        },
      ],
    },
    {
      name: "Prueba de Participación (PoS)",
      id: "POS",
      children: [
        {
          name: "Ethereum 2.0",
          id: "ETH",
          icon: "./images/ETH.png",
          description: "Ethereum 2.0 es la actualización de Ethereum, mejorando su escalabilidad y sostenibilidad mediante el uso de prueba de participación."
        },
        {
          name: "Cardano",
          id: "ADA",
          icon: "./images/ADA.png",
          description: "Cardano es una blockchain de tercera generación que utiliza un enfoque basado en la investigación científica para resolver problemas clave del sector."
        },
        {
          name: "Polkadot",
          id: "DOT",
          icon: "./images/DOT.png",
          description: "Polkadot permite la interoperabilidad entre blockchains, conectándolas para compartir datos y realizar transacciones entre cadenas."
        },
        {
          name: "Tezos",
          id: "XTZ",
          icon: "./images/XTZ.png",
          description: "Tezos es una blockchain autoevolutiva que permite actualizaciones sin bifurcaciones, asegurando estabilidad y mejoras continuas."
        },
      ],
    },
    {
      name: "Stablecoins",
      id: "STABLECOINS",
      children: [
        {
          name: "Tether",
          id: "USDT",
          icon: "./images/USDT.png",
          description: "Tether es la stablecoin más utilizada, respaldada por reservas en dólares y diseñada para mantener una paridad constante con el USD."
        },
        {
          name: "USD Coin",
          id: "USDC",
          icon: "./images/USDC.png",
          description: "USD Coin es una stablecoin regulada y auditada, completamente respaldada 1:1 por dólares estadounidenses en cuentas verificadas."
        },
        {
          name: "Dai",
          id: "DAI",
          icon: "./images/DAI.png",
          description: "Dai es una stablecoin descentralizada, generada a través de contratos inteligentes en Ethereum y respaldada por criptomonedas."
        },
        {
          name: "TrueUSD",
          id: "TUSD",
          icon: "./images/TUSD.png",
          description: "TrueUSD es una stablecoin transparente y auditada, diseñada para ofrecer confianza total en su respaldo por activos reales."
        },
        {
          name: "Pax Dollar",
          id: "USDP",
          icon: "./images/USDP.png",
          description: "Pax Dollar es una stablecoin regulada y confiable, emitida por Paxos y respaldada completamente por dólares estadounidenses."
        },
      ],
    },
    {
      name: "Escalabilidad e Infraestructura",
      id: "SCALABILITY_INFRASTRUCTURE",
      children: [
        {
          name: "Solana",
          id: "SOL",
          icon: "./images/SOL.png",
          description: "Solana es una blockchain de alto rendimiento que ofrece transacciones rápidas y económicas, diseñada para aplicaciones descentralizadas escalables."
        },
        {
          name: "Avalanche",
          id: "AVAX",
          icon: "./images/AVAX.png",
          description: "Avalanche es una plataforma interoperable que permite la creación de blockchains personalizadas y aplicaciones descentralizadas con velocidad y seguridad."
        },
        {
          name: "Polygon",
          id: "MATIC",
          icon: "./images/MATIC.png",
          description: "Polygon ofrece soluciones de escalabilidad de capa 2 para Ethereum, mejorando la experiencia del usuario mediante transacciones más rápidas y económicas."
        },
        {
          name: "Algorand",
          id: "ALGO",
          icon: "./images/ALGO.png",
          description: "Algorand es una blockchain rápida, segura y sostenible, diseñada para soportar aplicaciones financieras y contratos inteligentes avanzados."
        },
        {
          name: "Cosmos",
          id: "ATOM",
          icon: "./images/ATOM.png",
          description: "Cosmos conecta blockchains independientes, creando un ecosistema interoperable para facilitar la transferencia de datos y activos entre cadenas."
        },
        {
          name: "Near Protocol",
          id: "NEAR",
          icon: "./images/NEAR.png",
          description: "Near Protocol es una blockchain amigable para desarrolladores, enfocada en la experiencia del usuario y en la creación de dApps eficientes."
        },
      ],
    },
    {
      name: "Memecoins y Comunidad",
      id: "MEMECOINS",
      children: [
        {
          name: "Dogecoin",
          id: "DOGE",
          icon: "./images/DOGE.png",
          description: "Dogecoin es una criptomoneda basada en memes, popular por su comunidad activa y su adopción como método de pago alternativo."
        },
        {
          name: "Shiba Inu",
          id: "SHIB",
          icon: "./images/SHIB.png",
          description: "Shiba Inu es una memecoin que busca competir con Dogecoin, ofreciendo un ecosistema descentralizado con múltiples tokens y utilidades."
        },
      ],
    },
    {
      name: "NFTs y Gaming",
      id: "NFTS_GAMING",
      children: [
        {
          name: "Axie Infinity",
          id: "AXS",
          icon: "./images/AXS.png",
          description: "Axie Infinity es un juego basado en blockchain donde los jugadores coleccionan, crían y luchan con criaturas digitales conocidas como Axies."
        },
        {
          name: "Decentraland",
          id: "MANA",
          icon: "./images/MANA.png",
          description: "Decentraland es una plataforma de realidad virtual donde los usuarios pueden comprar, construir y monetizar activos digitales."
        },
        {
          name: "The Sandbox",
          id: "SAND",
          icon: "./images/SAND.png",
          description: "The Sandbox es un mundo virtual descentralizado donde los usuarios pueden crear, poseer y comercializar experiencias y activos digitales."
        },
        {
          name: "Enjin Coin",
          id: "ENJ",
          icon: "./images/ENJ.png",
          description: "Enjin Coin permite a los desarrolladores integrar activos digitales respaldados por blockchain directamente en sus juegos o aplicaciones."
        },
        {
          name: "Bored Ape Yacht Club",
          id: "BAYC",
          icon: "./images/BAYC.png",
          description: "Bored Ape Yacht Club es una colección de NFTs altamente valorada que representa imágenes únicas de simios animados."
        },
        {
          name: "NBA Top Shot",
          id: "FLOW",
          icon: "./images/FLOW.png",
          description: "NBA Top Shot permite a los usuarios coleccionar momentos icónicos de la NBA en forma de NFTs oficiales en blockchain."
        },
        {
          name: "CryptoKitties",
          id: "KITTY",
          icon: "./images/KITTY.png",
          description: "CryptoKitties es uno de los primeros juegos blockchain, donde los usuarios pueden coleccionar y criar gatos digitales únicos."
        },
      ],
    },
    {
      name: "Finanzas Descentralizadas (DeFi)",
      id: "DEFI",
      children: [
        {
          name: "SushiSwap",
          id: "SUSHI",
          icon: "./images/SUSHI.png",
          description: "SushiSwap es una plataforma de intercambio descentralizado que permite el comercio y la provisión de liquidez para activos en blockchain."
        },
        {
          name: "PancakeSwap",
          id: "CAKE",
          icon: "./images/CAKE.png",
          description: "PancakeSwap es un intercambio descentralizado en Binance Smart Chain, conocido por sus bajas tarifas y alta velocidad."
        },
        {
          name: "Aave",
          id: "AAVE",
          icon: "./images/AAVE.png",
          description: "Aave es un protocolo DeFi que permite préstamos y préstamos de criptomonedas sin intermediarios mediante contratos inteligentes."
        },
        {
          name: "Yearn.finance",
          id: "YFI",
          icon: "./images/YFI.png",
          description: "Yearn.finance optimiza la inversión en DeFi al automatizar estrategias para maximizar el rendimiento de los depósitos de los usuarios."
        },
        {
          name: "Harvest Finance",
          id: "FARM",
          icon: "./images/FARM.png",
          description: "Harvest Finance es una plataforma de yield farming que automatiza la búsqueda de las mejores tasas de interés en DeFi."
        },
        {
          name: "Curve DAO Token",
          id: "CRV",
          icon: "./images/CRV.png",
          description: "Curve es un protocolo especializado en intercambios eficientes de stablecoins, diseñado para minimizar deslizamientos y costos de transacción."
        },
      ],
    },
    {
      name: "Oráculos",
      id: "ORACLES",
      children: [
        {
          name: "Chainlink",
          id: "LINK",
          icon: "./images/LINK.png",
          description: "Chainlink conecta contratos inteligentes con datos del mundo real, proporcionando una solución robusta para oráculos descentralizados."
        },
        {
          name: "Band Protocol",
          id: "BAND",
          icon: "./images/BAND.png",
          description: "Band Protocol es una plataforma de oráculos que permite la conexión entre contratos inteligentes y fuentes de datos externas."
        },
        {
          name: "API3",
          id: "API3",
          icon: "./images/API3.png",
          description: "API3 permite a las APIs tradicionales conectarse directamente con contratos inteligentes mediante soluciones de oráculos descentralizados."
        },
      ],
    },
    {
      name: "Herramientas para Desarrolladores",
      id: "DEV_TOOLS",
      children: [
        {
          name: "The Graph",
          id: "GRT",
          icon: "./images/GRT.png",
          description: "The Graph es un protocolo de indexación que permite a los desarrolladores consultar datos de blockchain de manera eficiente y rápida."
        },
        {
          name: "Gitcoin",
          id: "GTC",
          icon: "./images/GTC.png",
          description: "Gitcoin es una plataforma que conecta desarrolladores con financiación para proyectos de código abierto en el ecosistema blockchain."
        },
        {
          name: "Alchemy Pay",
          id: "ACH",
          icon: "./images/ACH.png",
          description: "Alchemy Pay es un puente híbrido que conecta sistemas de pago tradicionales con criptomonedas, facilitando transacciones fluidas."
        },
      ],
    },
    {
      name: "Organizaciones Autónomas Descentralizadas (DAO)",
      id: "DAO",
      children: [
        {
          name: "Aragon",
          id: "ANT",
          icon: "./images/ANT.png",
          description: "Aragon es una plataforma que permite a los usuarios crear y gestionar organizaciones descentralizadas, conocidas como DAOs."
        },
        {
          name: "Curve DAO Token",
          id: "CRV",
          icon: "./images/CRV.png",
          description: "Curve DAO Token gobierna el protocolo Curve, que se especializa en intercambios eficientes de stablecoins y activos DeFi."
        },
        {
          name: "DAOstack",
          id: "GEN",
          icon: "./images/GEN.png",
          description: "DAOstack es una plataforma para la creación de organizaciones descentralizadas, proporcionando herramientas de gobernanza colaborativa."
        },
      ],
    },
  ],
};
export default blockchainLandscape;