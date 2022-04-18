import ReactDOM from 'react-dom';
import { createRenderFunctionName } from './createRenderFunctionName';

import { CreateAppParams } from "./types";

export function createReactApp(params: CreateAppParams): void {
  const renderFunctionName = createRenderFunctionName(params.name);
  window[renderFunctionName] = (rootElementId: string, props?: { [key: string]: any }) => {
    const { component } = params;
    ReactDOM.render(component(props), document.getElementById(rootElementId));
  }
}