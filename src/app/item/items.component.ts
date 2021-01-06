import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import {LoginPayload, SuccessResponse} from "../services/login.interface";9
import {Router} from "@angular/router";
import { Toasty } from 'nativescript-toasty';
import {
    getString,
    setString,
} from "@nativescript/core/application-settings";
@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    providers:[LoginService]
})
export class ItemsComponent implements OnInit {
    mEmail="";
    mPassword="";
    message  = "";
     _resp : SuccessResponse;
     mData = { email: 'iluvsnake+10@gmail.com', password: 'One12345' }
     payload: LoginPayload={ email: 'iluvsnake+10@gmail.com', password: 'One12345' } ;
    headers: string[];

    constructor(private myPostService: LoginService,private router: Router) { }

    ngOnInit(): void {
this.mEmail='iluvsnake+10@gmail.com'
this.mPassword='One12345'
    }

    onLoginButtonTap(){
        this.makePostRequest();
    }

    private makePostRequest() {
       // console.log("=========="+this.mData.to)
        this.myPostService
            .postData(this.payload)

            .subscribe((res) => {



                this._resp = { ... res.body };
                console.log("===success===")


      const keys = res.headers.keys();
      const setcookie = res.headers.get('Set-Cookie');
      setString("setcookie", setcookie);

     // console.log('Set-Cookie=============='+ setcookie);
      this.headers = keys.map(key =>
        `${key}: ${res.headers.get(key)}`);
     //   console.log("headers======="+JSON.stringify(this.headers))

this.router.navigate(["dashboard"]);

            },
            err=>{
                console.log("res======="+JSON.stringify(err))


            });
    }

    private readCookie(response: any){
        try {
           // const cookie = response.headers.get("Set-Cookie");
            console.log("res header======="+JSON.stringify(response.headers.get("Set-Cookie")))

          //  response.wasSuccess(cookie.slice(0, cookie.indexOf(";")).toString());
        } catch (error) {
            response.failed("ERROR");
        }
    }
}
