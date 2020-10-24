import "./styles.scss";
import styles from "./styles.module.scss";

import { $, injectElements } from "./utils";

const catalogSelector =
  "body > div.container.page-box.book-page > div > div.col-md-3.side";
const catalogSvg = `<svg t="1603542089489" class="icon" viewBox="0 0 1487 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="789" width="200" height="200"><path d="M609.435171 206.577007c-169.767586 0-339.535172 0-509.302758 0-51.088937 0-93.610164-37.126743-99.321971-86.311745-6.346452-55.531453 25.068485-102.812519 77.10939-114.553455 6.981097-1.586613 14.596839-1.903936 21.895259-1.903936 340.169817 0 680.022312 0 1020.192129 0 56.800744 0 98.687326 43.155872 99.004648 101.543229 0 58.070034-41.886582 101.543229-98.687326 101.543229C949.922311 206.894329 779.837402 206.577007 609.435171 206.577007z" p-id="790"></path><path d="M608.16588 612.749923c-169.132941 0-338.583204 0-507.716145 0-52.040905 0-94.879455-38.078711-99.639293-87.581035-5.394484-56.483421 26.337775-102.495197 78.37868-113.601487 6.663774-1.26929 13.644871-1.586613 20.308646-1.586613 340.169817 0 680.022312 0 1020.192129 0 57.118066 0 99.004648 43.155872 99.004648 101.225906 0 59.022002-41.886582 101.860552-99.956616 101.860552C948.65302 613.067245 778.568112 612.749923 608.16588 612.749923z" p-id="791"></path><path d="M610.069816 816.153703c169.767586 0 339.535172 0 509.302758 0 52.040905 0 94.879455 38.078711 99.639293 87.581035 5.394484 56.483421-26.337775 102.495197-78.37868 113.601487-6.663774 1.26929-13.644871 1.586613-20.308646 1.586613-340.169817 0-680.022312 0-1020.192129 0-57.118066 0-99.004648-43.155872-99.004648-101.225906 0-59.022002 41.886582-101.860552 99.956616-101.860552C270.534644 816.153703 440.30223 816.153703 610.069816 816.153703z" p-id="792"></path><path d="M1382.750324 104.08181m-104.08181 0a32.8 32.8 0 1 0 208.163619 0 32.8 32.8 0 1 0-208.163619 0Z" p-id="793"></path><path d="M1382.750324 511.841339m-104.08181 0a32.8 32.8 0 1 0 208.163619 0 32.8 32.8 0 1 0-208.163619 0Z" p-id="794"></path><path d="M1382.750324 919.91819m-104.08181 0a32.8 32.8 0 1 0 208.163619 0 32.8 32.8 0 1 0-208.163619 0Z" p-id="795"></path></svg>`;

const floatCatalogElement = $(catalogSelector).cloneNode(true);
floatCatalogElement.className = styles.list;
floatCatalogElement.hidden = true;

const floatCatalogButton = document.createElement("div");
floatCatalogButton.classList.add(styles.btn);
floatCatalogButton.innerHTML = catalogSvg;

floatCatalogButton.addEventListener("click", () => {
  floatCatalogElement.hidden = !floatCatalogElement.hidden;
});

document.addEventListener("click", (e) => {
  if (!floatCatalogContainer.contains(e.target)) {
    floatCatalogElement.hidden = true;
  }
});

const floatCatalogContainer = document.createElement("div");
floatCatalogContainer.className = styles.catalog;
floatCatalogContainer.append(floatCatalogButton, floatCatalogElement);

injectElements([floatCatalogContainer]);
