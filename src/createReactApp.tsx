import ReactDOM from 'react-dom';
import { createRenderFunctionName } from './createRenderFunctionName';

import { CreateReactAppParams } from "./types";

export function createReactApp(params: CreateReactAppParams): void {
  const renderFunctionName = createRenderFunctionName(params.name);
  window[renderFunctionName] = () => {
    const { component: Component } = params;
    ReactDOM.render(<Component />, document.getElementById(params.rootElementId));
  }
}