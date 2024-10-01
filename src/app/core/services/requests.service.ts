import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientParams } from '../models/http-client-params.model';
import { environment } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class RequestsService {
    constructor(private http: HttpClient) {}

    executeDelete(params: HttpClientParams, body?: any) {
        const headers = params.headers || {};
        return this.http.delete<any>(`${this.getUrl()}/${params.url}`, { body: body, headers });
    }

    executeGet(params: HttpClientParams) {
        const headers = params.headers || {};
        return this.http.get<any>(`${this.getUrl()}/${params.url}`, { responseType: params.responseType, headers });
    }

    executePost(params: HttpClientParams) {
        const headers = params.headers || {};
        return this.http.post<any>(`${this.getUrl()}/${params.url}`, params.body, { headers });
    }

    executePatch(params: HttpClientParams) {
        const headers = params.headers || {};
        return this.http.patch<any>(`${this.getUrl()}/${params.url}`, params.body, { headers });
    }

    executePut(params: HttpClientParams) {
        const headers = params.headers || {};
        return this.http.put<any>(`${this.getUrl()}/${params.url}`, params.body, { headers });
    }

    getUrl() {
        return environment.URL_API; 
    }
}
