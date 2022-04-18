import { createRenderFunctionName } from "./createRenderFunctionName";
import { CreateVanillaAppParams } from "./types";

export function createApp(params: CreateVanillaAppParams): void {
  const renderFunctionName = createRenderFunctionName(params.name);
  window[renderFunctionName] = (rootElementId: string, props?: { [key: string]: any }) => {
    const { component } = params;
    const element = document.getElementById(rootElementId);
    const app = component(props);
    element.appendChild(app);
  }
}