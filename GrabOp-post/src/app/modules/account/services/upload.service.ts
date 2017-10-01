import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { mapUploadRes } from '../../../utils/map-functions';
import { VOpost_attachment } from '../../../models/vos';
import { HttpService } from './http.service';

@Injectable()
export class UploadService {

    constructor(private http: HttpService) {
    }

    upload(inputData): Observable<VOpost_attachment> {
        const fileList: FileList = inputData.target.files;
        if (fileList.length > 0) {
            const file: File = fileList[0];
            const formData: FormData = new FormData();
            formData.append('file', file, file.name);
            formData.append('upload_preset', 'images');
            // console.log(formData.get('upload_preset'));
            return this.http.post('https://api.cloudinary.com/v1_1/al3kosvh/image/upload', formData)
                .map(mapUploadRes)
                // .map(res => res)
                .catch(error => Observable.throw(error))
            // .subscribe(
            //   data => console.log('success', data),
            //   error => console.log(error)
            // );
        }
    }
}
