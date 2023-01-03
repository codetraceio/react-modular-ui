import { getConfig } from "../services/configService";

export function className(blockName: string, elementName?: string) {
  const config = getConfig();
  if (elementName) {
    return `${config.prefix}${blockName}${config.separator}${elementName}`;
  }
  return `${config.prefix}${blockName}`;
}
