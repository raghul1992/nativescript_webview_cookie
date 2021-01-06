import {HttpClientModule,HttpClient,HttpHeaders,  HttpErrorResponse,HttpResponse} from '@angular/common/http'
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { throwError } from "rxjs/internal/observable/throwError";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/operators";
import {LoginPayload, SuccessResponse} from "../services/login.interface"
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class LoginService {


    private httpOptions = {
        headers: new HttpHeaders({

          accept: 'application/json',
          observe: 'response' as 'body',
        }).append('Content-Type', 'application/Json'),
      };


      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error("An error occurred:", error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` + `body was: ${error.error}`
          );
        }
        // return an observable with a user-facing error message
        return throwError(error.error); // change to error and USE CODE
      }



  constructor(private http: HttpClient, private cookieService: CookieService) {}


  postData(data: LoginPayload): Observable<HttpResponse<SuccessResponse>> {



    // const options = {
    //     headers: _headers,
    //     observe: "response" as 'body'
    // };

    let serverUrl = "https://api.myaccount.uat.test.athome.domgen.com/v1/identity/signin";

    const withCredentials = { withCredentials: true };
    const mergedHttpOptions = { ...withCredentials, ...this.httpOptions };

    return this.http.post<any>(serverUrl,  data , {observe: 'response'});

    //const allCookies: {} = this.cookieService.getAll();




    // .pipe(
    //   map((response: any) => response),
    //   catchError(this.handleError)
    // );




}



}
