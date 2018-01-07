window.addEventListener("DOMContentLoaded", () => {
  const elements = window.document.querySelectorAll(".c-checkbox");
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = elements[i] as HTMLDivElement;
    element.addEventListener("click", (event: MouseEvent) => {
      const currentTarget: HTMLDivElement = event.currentTarget as HTMLDivElement;
      const checked = currentTarget.getAttribute("aria-checked");
      currentTarget.setAttribute("aria-checked", checked === "true" ? "false" : "true");
    });
  }
});
