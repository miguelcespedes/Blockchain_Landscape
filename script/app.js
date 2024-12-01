import blockchainLandscape from "./data.js";

/**
 * Módulo BlockchainUI
 * Gestiona la interfaz de usuario del ecosistema blockchain.
 */
const BlockchainUI = (() => {
  const init = (hierarchy, container) => {
    const renderHierarchy = (node, parentElement) => {
      if (!node.level) {
        node.children.forEach((child) => renderHierarchy({ ...child, level: 1 }, parentElement));
      } else if (node.level === 1) {
        renderSection(node, parentElement);
      } else if (node.level === 2 && node.children?.length) {
        renderBlock(node, parentElement);
      } else {
        renderToken(node, parentElement);
      }
    };

    const renderSection = (section, parentElement) => {
      const sectionContainer = document.createElement("div");
      sectionContainer.className = "section-container";
      sectionContainer.setAttribute("data-size", determinePanelSize(section));

      const sectionTitle = document.createElement("h2");
      sectionTitle.className = "section-title";
      sectionTitle.textContent = section.name;

      const contentBlock = document.createElement("div");
      contentBlock.className = "block-content-level-2";

      sectionContainer.append(sectionTitle, contentBlock);
      parentElement.appendChild(sectionContainer);

      section.children.forEach((child) => renderHierarchy({ ...child, level: 2 }, contentBlock));
    };

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

    const initializeMasonry = (container) => {
      new Masonry(container, {
        itemSelector: ".section-container",
        columnWidth: ".section-container",
        percentPosition: true,
        gutter: 15,
      });
    };

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
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector(".close-button").addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    };

    const openModal = ({ icon, name, description }) => {
      const modal = document.getElementById("modal");
      document.getElementById("modal-icon").src = icon;
      document.getElementById("modal-title").textContent = name;
      document.getElementById("modal-description").textContent =
        description || "No hay descripción disponible.";
      modal.style.display = "block";
    };

    const closeModal = () => {
      document.getElementById("modal").style.display = "none";
    };

    const determinePanelSize = ({ children = [] }) =>
      children.length > 10 ? "large" : children.length > 5 ? "medium" : "small";

    renderHierarchy(hierarchy, container);
    initializeMasonry(container);
    setupModal();
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  const masonryContainer = document.querySelector("#masonry-container");
  BlockchainUI.init(blockchainLandscape, masonryContainer);
});
