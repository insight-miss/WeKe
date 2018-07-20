import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }
  getVideo(course: string, chapter: string, section: string): Observable<any>{
    return of(null);
  }
}
