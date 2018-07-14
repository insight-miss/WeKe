import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../domain/answer';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  getExamAnswer(id: number): Observable <Answer> {
    const heroesUrl = environment.baseUrl + 'answer/' + id;
    return this.http.get<Answer>(heroesUrl)
      .pipe();
  }
}
