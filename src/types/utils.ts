export interface IIndexable {
  [index: string]: any;
}

export interface ITypedIndexable<T> {
  [index: string]: T;
}
