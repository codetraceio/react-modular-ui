import settingService from "../services/settingService";

export function className(name: string) {
  return `${settingService.getPrefix()}${name}`;
}
