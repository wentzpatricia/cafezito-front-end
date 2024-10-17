export interface ApiResponseModel<Type> {
    success: boolean;
    statusCode: number;
    messages: string;
    result: Type;
  }