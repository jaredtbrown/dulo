interface CreateAppParams {
  name: string;
  rootElementId: string;
}

export interface CreateVanillaAppParams extends CreateAppParams {
  component: (props?: {
    [key: string]: any
  }) => HTMLElement
}

export interface CreateReactAppParams extends CreateAppParams {
  component: Function;
}