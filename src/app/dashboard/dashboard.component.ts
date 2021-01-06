import { Component, OnInit } from '@angular/core';
import { WebView, LoadEventData } from "@nativescript/core/ui/web-view";
import { WebViewUtils } from "nativescript-webview-utils";
import {
    getString,
    setString,
} from "@nativescript/core/application-settings";
@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  webViewSrc = "https://api.myaccount.uat.test.athome.domgentest.cloud/v1/plans";
  //webViewSrc = "https://www.myaccount.uat.test.athome.domgen.com/my-plans";

    onLoadStarted(args: LoadEventData) {
        const webView = args.object as WebView;

        const headers: Map<string, string> = new Map();
        const setcookie = getString("setcookie");
      console.log('Set-Cookie=============='+ setcookie);

    headers.set("Set-Cookie", setcookie);
   // headers.set("X-Custom-Header", "Set at " + new Date().toTimeString());
    WebViewUtils.addHeaders(webView, headers);
        if (!args.error) {
            console.log("Load Start");
            console.log(`EventName: ${args.eventName}`);
            console.log(`NavigationType: ${args.navigationType}`);
            console.log(`Url: ${args.url}`);
        } else {
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
        }
    }

    onLoadFinished(args: LoadEventData) {
        const webView = args.object as WebView;

        if (!args.error) {
            console.log("Load Finished");
            console.log(`EventName: ${args.eventName}`);
            console.log(`NavigationType: ${args.navigationType}`);
            console.log(`Url: ${args.url}`);
        } else {
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
        }
    }
}
