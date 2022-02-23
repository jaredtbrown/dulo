import { createRenderFunctionName } from "./createRenderFunctionName";
import { CreateAppParams } from "./types";

export function createApp(params: CreateAppParams): void {
  const renderFunctionName = createRenderFunctionName(params.name);
  window[renderFunctionName] = () => {
    const {view, props} = params.component;
    const element = document.getElementById(params.rootElementId);
    const app = view(props);
    element.appendChild(app);
  }
}