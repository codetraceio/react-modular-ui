import { updateTooltip } from "../services/tooltipService";

window.addEventListener("DOMContentLoaded", () => {
  const elements = window.document.querySelectorAll(".c-tooltip-wrapper");
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = elements[i] as HTMLDivElement;
    element.addEventListener("mouseover", (event: MouseEvent) => {
      const wrapperElement: HTMLDivElement = event.currentTarget as HTMLDivElement;
      const portalKey: string = wrapperElement.getAttribute("data-portal-key");
      const portalElement: HTMLElement = window.document.querySelector(`[data-portal=${portalKey}]`) as HTMLElement;
      const tooltipElement: HTMLElement = portalElement.firstElementChild as HTMLElement;
      portalElement.style.display = "block";
      updateTooltip(wrapperElement, tooltipElement);
    });
    element.addEventListener("mouseout", (event) => {
      const currentTarget: HTMLDivElement = event.currentTarget as HTMLDivElement;
      const portalKey: string = currentTarget.getAttribute("data-portal-key");
      const portal: HTMLElement = window.document.querySelector(`[data-portal=${portalKey}]`) as HTMLElement;
      portal.style.display = "none";
    });
  }
});
