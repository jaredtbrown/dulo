interface CreateAppParams {
  name: string;
  rootElementId: string;
}

export interface CreateVanillaAppParams extends CreateAppParams {
  component: {
    view: Function;
    props: {
      [key: string]: any;
    }
  }
}

export interface CreateReactAppParams extends CreateAppParams {
  component: Function;
}