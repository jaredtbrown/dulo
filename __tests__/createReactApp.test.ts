import { createReactApp } from "../src"

describe('test', () => {
  test('thing', () => {
    createReactApp({
      name: 'test',
      rootElementId: 'app',
      component: {
        view: () => null,
        props: {
          hello: 'world'
        }
      }
    });
    expect(window['app']).not.toBe(undefined)
  })
})