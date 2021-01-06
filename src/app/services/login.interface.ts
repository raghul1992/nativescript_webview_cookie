export interface SuccessResponse {
    successful: boolean;
    user_state: string;
  }

  export interface ErrorResponse {
    successful: boolean;
    error_message: string;
    error_type: string;
  }

  /*================================================================================
  LOGIN
================================================================================*/

export interface LoginPayload {
    email: string;
    password: string;
  }

  export interface LoginSuccessResponse extends SuccessResponse {}

  export interface LoginErrorResponse extends ErrorResponse {}
