// HACK: One top-level export or import is required for TypeScript to
// recognize this file as a module, so that ComponentCustomProperties
// is augmented instead of replaced.
// See vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
export {};

declare module 'vue' {
  interface ComponentCustomProperties {
    $iroiro: string;
  }
}
