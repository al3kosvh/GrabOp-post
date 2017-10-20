import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { mapUploadRes } from '../../../utils/map-functions';
import { VOpost_attachment } from '../../../models/vos';
import { HttpService } from './http.service';

@Injectable()
export class UploadService {

    constructor(private http: HttpService) {
    }

    uploadFile(file: File): Observable<VOpost_attachment> {
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append('upload_preset', 'images');
        return this.http.post('https://api.cloudinary.com/v1_1/al3kosvh/image/upload', formData)
            .map(result => mapUploadRes(result));
    }
}
