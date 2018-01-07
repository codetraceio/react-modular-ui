window.addEventListener("DOMContentLoaded", () => {
  const elements = window.document.querySelectorAll(".c-radio");
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = elements[i] as HTMLDivElement;
    element.addEventListener("click", (event: MouseEvent) => {
      const currentTarget = event.currentTarget as HTMLDivElement;
      const checked = currentTarget.getAttribute("aria-checked");
      const currentName = element.getAttribute("data-name");

      for (let j = 0; j < elements.length; j++) {
        const elementToUnCheck: HTMLDivElement = elements[j] as HTMLDivElement;
        if (elementToUnCheck.getAttribute("data-name") === currentName) {
          elementToUnCheck.setAttribute("aria-checked", "false");
        }
      }
      currentTarget.setAttribute("aria-checked", checked === "true" ? "false" : "true");
    });
  }
});
