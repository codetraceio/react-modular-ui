import tooltipService from '../services/tooltipService';

window.addEventListener('DOMContentLoaded', () => {
  const elements = window.document.querySelectorAll('.c-tooltip-wrapper');
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = <HTMLDivElement>elements[i];
    element.addEventListener('mouseover', (event: MouseEvent) => {
      const wrapperElement: HTMLDivElement = <HTMLDivElement>event.currentTarget;
      const portalKey: string = wrapperElement.getAttribute('data-portal-key');
      const portalElement: HTMLElement = <HTMLElement>window.document.querySelector(`[data-portal=${portalKey}]`);
      const tooltipElement: HTMLElement = <HTMLElement>portalElement.firstElementChild;
      portalElement.style.display = 'block';
      tooltipService.updateTooltip(wrapperElement, tooltipElement);
    });
    element.addEventListener('mouseout', (event) => {
      const currentTarget: HTMLDivElement = <HTMLDivElement>event.currentTarget;
      const portalKey: string = currentTarget.getAttribute('data-portal-key');
      const portal: HTMLElement = <HTMLElement>window.document.querySelector(`[data-portal=${portalKey}]`);
      portal.style.display = 'none';
    });
  }
});