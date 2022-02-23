import { camelCase } from "lodash";

export const createRenderFunctionName = (name: string) => {
  const formattedName = camelCase(name);
  return `render${formattedName.charAt(0).toUpperCase()}${formattedName.slice(1)}`;  
}