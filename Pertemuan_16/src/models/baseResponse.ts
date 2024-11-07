export class BaseResponce<T, R = any> {
  data: T | null;
  message: string;
  status: number;
  error: R;

  constructor(data: T | null, message: string, status: number, error: R) {
    this.data = data;
    this.message = message;
    this.status = status;
    this.error = error;
  }
}

let baseResponse = new BaseResponce<string>("wiwiwiw", "", 200, false);
