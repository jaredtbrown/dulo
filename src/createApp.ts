import { CreateAppParams } from "./types";

export function createApp(params: CreateAppParams): void {
  window[`render${params.name}`] = () => {
    const {view, props} = params.component;
    const element = document.getElementById(params.rootElementId);
    const app = view(props);
    element.appendChild(app);
  }
}