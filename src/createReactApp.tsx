import ReactDOM from 'react-dom';
import { createRenderFunctionName } from './createRenderFunctionName';

import { CreateAppParams } from "./types";

export function createReactApp(params: CreateAppParams): void {
  const renderFunctionName = createRenderFunctionName(params.name);
  window[renderFunctionName] = () => {
    const {view: View, props} = params.component;

    ReactDOM.render(<View {...props} />, document.getElementById(params.rootElementId));
  }
}