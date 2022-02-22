export interface CreateAppParams {
  name: string;
  rootElementId: string;
  component: {
    view: Function;
    props: {
      [key: string]: any;
    }
  }
}