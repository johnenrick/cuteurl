export interface APIResponse<T> {
  result: T;
  error: {
    code: number;
    message: any;
  };
}