import { Injectable } from '@angular/core';
import { RequestsService } from '../../../../core/services/requests.service';
import { Observable } from 'rxjs';

import { ApiResponseModel } from '../../../../core/models/api-response.interface';
import { User } from '../_models/user.interface';

@Injectable({ providedIn: 'root' })
export class PostRegisterUserService {

    constructor(private requestsService: RequestsService) {}
    
    postRegisterUser(user: User): Observable<ApiResponseModel<User>>{
        const url = `user`;
        const body = user;
        return this.requestsService.executePost({ url, body });
    }
}