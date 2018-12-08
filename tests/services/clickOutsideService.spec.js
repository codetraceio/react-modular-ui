import clickOutsideService from "../../src/services/clickOutsideService";

describe("clickOutsideService", () => {
  describe("should work correctly with window listener", () =>{
    it("should add window listener first time", () => {
      const addEventListener = jest.spyOn(window.document, "addEventListener");

      clickOutsideService.addListener();

      expect(addEventListener).toHaveBeenCalled();

      addEventListener.mockRestore();
    });

    it("should not add window listener second time", () => {
      const addEventListener = jest.spyOn(window.document, "addEventListener");

      clickOutsideService.addListener();

      expect(addEventListener).not.toHaveBeenCalled();

      addEventListener.mockRestore();
    });

    it("should not remove window listener first time", () => {
      const removeEventListener = jest.spyOn(window.document, "removeEventListener");

      clickOutsideService.removeListener();

      expect(removeEventListener).toHaveBeenCalled();

      removeEventListener.mockRestore();
    });

    it("should not remove window listener first time", () => {
      const removeEventListener = jest.spyOn(window.document, "removeEventListener");

      clickOutsideService.removeListener();

      expect(removeEventListener).not.toHaveBeenCalled();

      removeEventListener.mockRestore();
    });
  });

  describe("should add and remove event listeners", () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    it("should add window listener when event added first time", () => {
      const addListener = jest.spyOn(clickOutsideService, "addListener");

      clickOutsideService.on(handler1);

      expect(addListener).toHaveBeenCalled();

      addListener.mockRestore();
    });

    it("should not add window listener when event added second time", () => {
      const addListener = jest.spyOn(clickOutsideService, "addListener");

      clickOutsideService.on(handler2);

      expect(addListener).not.toHaveBeenCalled();

      addListener.mockRestore();
    });

    it("should not remove window listener when there are events in the list", () => {
      const removeListener = jest.spyOn(clickOutsideService, "removeListener");

      clickOutsideService.off(handler1);

      expect(removeListener).not.toHaveBeenCalled();

      removeListener.mockRestore();
    });

    it("should remove window listener when there is no events in the list", () => {
      const removeListener = jest.spyOn(clickOutsideService, "removeListener");

      clickOutsideService.off(handler2);

      expect(removeListener).toHaveBeenCalled();

      removeListener.mockRestore();
    });
  });
});