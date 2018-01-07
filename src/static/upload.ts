window.addEventListener("DOMContentLoaded", () => {
  const elements = window.document.querySelectorAll(".c-upload");
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = elements[i] as HTMLDivElement;
    element.addEventListener("dragover", (event: DragEvent) => {
      event.preventDefault();
      const currentElement: HTMLElement = event.currentTarget as HTMLElement;
      currentElement.classList.add("-active");
    }, false);

    element.addEventListener("dragleave", (event: DragEvent) => {
      event.preventDefault();
      const currentElement: HTMLElement = event.currentTarget as HTMLElement;
      currentElement.classList.remove("-active");
    }, false);

    element.addEventListener("drop", (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();
      const currentElement: HTMLElement = event.currentTarget as HTMLElement;
      currentElement.classList.remove("-active");

      const files = event.dataTransfer.files;
      const customEvent = new CustomEvent("upload", {
        detail: files,
      });

      currentElement.dispatchEvent(customEvent);

    }, false);

    element.addEventListener("click", (event: MouseEvent) => {
      const currentElement: HTMLElement = event.currentTarget as HTMLElement;
      currentElement.querySelector("input").click();
    }, false);

    const input: HTMLInputElement = element.querySelector("input") as HTMLInputElement;
    input.addEventListener("change", (event: Event) => {
      const currentElement: HTMLInputElement = event.currentTarget as HTMLInputElement;
      const files: FileList = currentElement.files;
      const customEvent: CustomEvent = new CustomEvent("upload", {
        detail: files,
      });

      currentElement.parentNode.dispatchEvent(customEvent);
    }, false);
  }
});
