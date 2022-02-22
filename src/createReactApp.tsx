import ReactDOM from 'react-dom';

import { CreateAppParams } from "./types";

export function createReactApp(params: CreateAppParams): void {
  window[`render${params.name}`] = () => {
    const {view: View, props} = params.component;

    ReactDOM.render(<View {...props} />, document.getElementById(params.rootElementId));
  }
}