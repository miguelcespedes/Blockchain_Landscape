import blockchainLandscape from "./data.js";

const BlockchainUI = (() => {
  /**
   * Inicializa la aplicación: renderiza la jerarquía y configura el sistema Masonry y el modal.
   */
  const init = () => {
    const hierarchy = blockchainLandscape;
    const masonryContainer = document.querySelector("#masonry-container");

    // Renderizar la jerarquía
    renderHierarchy(hierarchy, masonryContainer);

    // Inicializar Masonry
    initializeMasonry(masonryContainer);

    // Configurar el modal
    setupModal();
  };

  /**
   * Renderiza toda la jerarquía de bloques y tokens
   */
  const renderHierarchy = (node, parentElement) => {
    if (!node.level) {
      node.children.forEach((child, index) =>
        renderHierarchy({ ...child, level: 1, index }, parentElement)
      );
    } else if (node.level === 1) {
      renderSection(node, parentElement);
    } else if (node.level === 2 && node.children?.length) {
      renderBlock(node, parentElement);
    } else {
      renderToken(node, parentElement);
    }
  };

  /**
   * Renderiza una sección principal
   */
  const renderSection = (section, parentElement) => {
    const sectionContainer = document.createElement("div");
    sectionContainer.className = "section-container";

    // Asigna color dinámicamente usando un array de 100 colores
    const colors = [
      "#ff5722", "#2196f3", "#4caf50", "#9c27b0", "#fbc02d", "#00bcd4", "#e91e63", "#ff9800", "#795548", "#673ab7",
      "#03a9f4", "#8bc34a", "#ffeb3b", "#cddc39", "#009688", "#3f51b5", "#ff5252", "#d500f9", "#69f0ae", "#ff4081",
      "#ffd740", "#00e676", "#1e88e5", "#f06292", "#4db6ac", "#ba68c8", "#ffab40", "#78909c", "#f44336", "#64b5f6",
      "#aed581", "#fff176", "#90a4ae", "#607d8b", "#ff6e40", "#00acc1", "#1de9b6", "#ffd54f", "#7e57c2", "#ec407a",
      "#5c6bc0", "#00bfa5", "#ff7043", "#26a69a", "#8e24aa", "#d4e157", "#c2185b", "#ff9100", "#3949ab", "#43a047",
      "#00c853", "#6d4c41", "#29b6f6", "#ffa726", "#7cb342", "#ff8a80", "#d81b60", "#cddc39", "#3e2723", "#212121",
      "#424242", "#e65100", "#ff1744", "#c62828", "#ad1457", "#6a1b9a", "#4527a0", "#283593", "#1565c0", "#0277bd",
      "#00838f", "#00695c", "#2e7d32", "#558b2f", "#9e9d24", "#f57f17", "#ff6f00", "#bf360c", "#e64a19", "#5d4037",
      "#455a64", "#37474f", "#78909c", "#546e7a", "#e91e63", "#d500f9", "#76ff03", "#fbc02d", "#f57f17", "#880e4f",
      "#4a148c", "#311b92", "#1a237e", "#0d47a1", "#01579b", "#006064", "#004d40", "#1b5e20", "#33691e", "#827717"
    ];

    sectionContainer.style.backgroundColor = colors[section.index % colors.length];

    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = section.name;

    const contentBlock = document.createElement("div");
    contentBlock.className = "block-content-level-2";

    sectionContainer.append(sectionTitle, contentBlock);
    parentElement.appendChild(sectionContainer);

    section.children.forEach((child) => renderHierarchy({ ...child, level: 2 }, contentBlock));
  };

  /**
   * Renderiza un bloque secundario
   */
  const renderBlock = (block, parentElement) => {
    const blockContainer = document.createElement("div");
    blockContainer.className = "block";

    const blockTitle = document.createElement("div");
    blockTitle.className = "block-title";
    blockTitle.textContent = block.name;

    const contentBlock = document.createElement("div");
    contentBlock.className = "block-content-level-2";

    blockContainer.append(blockTitle, contentBlock);
    parentElement.appendChild(blockContainer);

    block.children.forEach((child) => renderHierarchy({ ...child, level: 3 }, contentBlock));
  };

  /**
   * Renderiza un token final
   */
  const renderToken = (token, parentElement) => {
    const listContainer =
      parentElement.querySelector(".token-list") ||
      parentElement.appendChild(document.createElement("ul"));
    listContainer.className = "token-list";

    const tokenItem = document.createElement("li");
    tokenItem.className = "token-list-item";
    tokenItem.innerHTML = `
      <img src="${token.icon}" alt="${token.name} icon" width="16" height="16" style="margin-right: 8px;">
      ${token.name}
    `;
    tokenItem.addEventListener("click", () => openModal(token));
    listContainer.appendChild(tokenItem);
  };

  /**
   * Configura el modal de información
   */
  const setupModal = () => {
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <img id="modal-icon" src="" alt="Token Icon" width="50" height="50">
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <div id="tradingview-widget" class="tradingview-widget"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-button").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  };

  /**
   * Abre el modal con la información de un token
   */
  const openModal = ({ icon, name, description, ticker }) => {
    const modal = document.getElementById("modal");
    document.getElementById("modal-icon").src = icon;
    document.getElementById("modal-title").textContent = name;
    document.getElementById("modal-description").textContent =
      description || "No hay descripción disponible.";

    // Cargar el widget de TradingView
    const widgetContainer = document.getElementById("tradingview-widget");
    widgetContainer.innerHTML = ""; // Limpiar cualquier widget existente
    new TradingView.widget({
      container_id: "tradingview-widget",
      autosize: true,
      symbol: ticker || "BTCUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "es",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      studies: [],
    });

    modal.style.display = "block";
  };

  /**
   * Cierra el modal
   */
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  /**
   * Inicializa Masonry
   */
  const initializeMasonry = (container) => {
    new Masonry(container, {
      itemSelector: ".section-container",
      columnWidth: ".section-container",
      percentPosition: true,
      gutter: 15,
    });
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => BlockchainUI.init());

export default BlockchainUI;
