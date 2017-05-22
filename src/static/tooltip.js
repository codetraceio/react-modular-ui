import utils from '../utils';

window.addEventListener('DOMContentLoaded', () => {
  Array.from(window.document.querySelectorAll('.c-tooltip-wrapper')).forEach((element) => {
    element.addEventListener('mouseover', (event) => {
      const wrapperElement = event.currentTarget;
      const portalKey = wrapperElement.getAttribute('data-portal-key');
      const portalElement = window.document.querySelector(`[data-portal=${portalKey}]`);
      const tooltipElement = portalElement.firstElementChild;
      portalElement.style.display = 'block';
      utils.updateTooltip(wrapperElement, tooltipElement);
    });
    element.addEventListener('mouseout', (event) => {
      const portalKey = event.currentTarget.getAttribute('data-portal-key');
      window.document.querySelector(`[data-portal=${portalKey}]`).style.display = 'none';
    });
  });
});