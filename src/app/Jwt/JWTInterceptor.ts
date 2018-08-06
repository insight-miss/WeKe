import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    if (token == null ) {
      console.log('我丢');
      const clonedRequest = req.clone();
      return next.handle(clonedRequest);
    }
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', token)
    });
    console.log("new header:"+req.headers.get('Authorization'));
    return next.handle(clonedRequest);
  }
}
