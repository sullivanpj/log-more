/**
 * A default dictionary type that can be indexed via a string
 */
export interface IIndexable {
  [index: string]: any;
}

/**
 * A default dictionary type that can be indexed via a string and containing specific values
 */
export interface ITypedIndexable<T> {
  [index: string]: T;
}
