import { createRenderFunctionName } from "./createRenderFunctionName";
import { CreateAppParams } from "./types";

export function createApp(params: CreateAppParams): void {
  const renderFunctionName = createRenderFunctionName(params.name);
  window[renderFunctionName] = (rootElementId: string, props?: { [key: string]: any }) => {
    const { component } = params;
    const element = document.getElementById(rootElementId);
    const app = component(props);
    element.appendChild(app);
  }
}