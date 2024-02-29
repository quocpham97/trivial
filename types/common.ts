export type ResponseAPI<T> = {
  page: number;
  next: string;
  entries: number;
  results: T[];
};
