import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { VOSettings, VOService, VOResult, VOPost, VOImage, VOCategory, VOSearch } from "../../../models/vos";

@Injectable()
export class SearchService {

    posts$: Observable<VOPost[]>;
    private postSub: Subject<VOPost[]>;
    posts: VOPost[];
    allPosts: VOPost[];

    private __posts: VOService[];
    private _currentService: VOService;
    private myServicesSubject: Subject<VOService[]>;
    myServices: Observable<VOService[]>;
    private myServiceSubject: Subject<VOService>;// = new Subject<VOService>();
    myService: Observable<VOService>;

    currentSearch: VOSearch;

    constructor(private http: Http) {
        this.postSub = new Subject<VOPost[]>();
        this.posts$ = this.postSub.asObservable();
        // this.get_AllPosts();

        console.warn('SearchService');
        // console.log('SearchService');
        this.myServicesSubject = new Subject<VOService[]>();
        this.myServices = this.myServicesSubject.asObservable();

        this.myServiceSubject = new Subject<VOService>();
        this.myService = this.myServiceSubject.asObservable();
        // this.loadServices();
    }

    searchPosts(search: VOSearch) {
        console.log('seach -> ', search);
        // if(!Array.isArray(this.allPosts)){
        //     // console.error('this.allPosts not array');
        //     this.currentSearch = search;
        //     this.get_AllPosts();
        //     return;
        // }
        this.posts = this.allPosts.filter(function (post: VOPost) {
            // title?      +         +      +
            // pattern, country, province, city
            //      +           +       +         +         +
            // partnership, exchange, donate, internship, money
            //          fixed              hourlyRate                 commission
            // fixedFrom - fixedTo, hourlyFrom - hourlyTo, commissionFrom - commissionTo
            for (var key in search) {
                switch (key) {
                    case 'pattern':
                        // if(search['pattern'] === "") break;
                        // console.log('title ', post['title'].indexOf((search['pattern'])));
                        if (post['title'].indexOf((search['pattern'])) < 0) return false;
                        break;
                    case 'country':  // if(search[key] != post[key]) return false; break;
                    case 'province':  // if(search[key] != post[key]) return false; break;
                    case 'city':
                        // if(search[key] === "") break;
                        if (search[key] !== post[key]) return false;
                        break;
                    case 'partnership':
                    case 'exchange':
                    case 'donate':
                    case 'internship':
                    case 'money':
                        if (search[key]) {
                            if (search[key] != post[key]) return false;
                        }
                        // else {
                        //     console.log('post[key]', post[key]);
                        //     if(search[key] != post[key] && post[key] != null) return false;
                        // }
                        break;
                    case 'fixedFrom':
                        if ('fixedTo' in search) {
                            if (post['fixed'] < search['fixedFrom'] || post['fixed'] > search['fixedTo']) return false;
                        } else {
                            if (post['fixed'] < search['fixedFrom']) return false;
                        }
                        break;
                    case 'fixedTo':
                        if ('fixedFrom' in search) {
                            if (post['fixed'] < search['fixedFrom'] || post['fixed'] > search['fixedTo']) return false;
                        } else {
                            if (post['fixed'] > search['fixedTo']) return false;
                        }
                        break;
                    case 'hourlyFrom':
                        if ('hourlyTo' in search) {
                            if (post['hourlyRate'] < search['hourlyFrom'] || post['hourlyRate'] > search['hourlyTo']) return false;
                        } else {
                            if (post['hourlyRate'] < search['hourlyFrom']) return false;
                        }
                        break;
                    case 'hourlyTo':
                        if ('hourlyFrom' in search) {
                            if (post['hourlyRate'] < search['hourlyFrom'] || post['hourlyRate'] > search['hourlyTo']) return false;
                        } else {
                            if (post['hourlyRate'] > search['hourlyTo']) return false;
                        }
                        break;
                    case 'commissionFrom':
                        if ('commissionTo' in search) {
                            if (post['commission'] < search['commissionFrom'] || post['commission'] > search['commissionTo']) return false;
                        } else {
                            if (post['commission'] < search['commissionFrom']) return false;
                        }
                        break;
                    case 'commissionTo':
                        if ('commissionFrom' in search) {
                            if (post['commission'] < search['commissionFrom'] || post['commission'] > search['commissionTo']) return false;
                        } else {
                            if (post['commission'] > search['commissionTo']) return false;
                        }
                        break;
                    default:
                        return true;
                }
            }
            return true;
        });
        this.postSub.next(this.posts);
        console.log('this.posts', this.posts);
    }

    // checkPost(post:VOPost, search:VOSearch){
    //     for(var key in search){
    //         if(search[key] !== post[key]) return false;
    //     }
    //     return true;
    // }

    get_AllPosts(): void {
        var url: string = VOSettings.posts;
        this.http.get(url)
            .map((res: Response) => {
                // console.log('res:Res', res.json().map(function(item){ return new VOPost(item)}));
                return res.json().map(function (item) {
                    return new VOPost(item)
                });
            })
            .catch(this.handleError)
            .subscribe((res: any) => {
                this.posts = this.allPosts = res;
                this.postSub.next(res);
                // if(this.currentSearch) this.searchPosts(this.currentSearch);
                console.log('this.posts', this.posts);
            })
    }

    // get_AllPosts():Observable<VOPost[]>{
    //     var url:string = VOSettings.posts;
    //     return this.http.get(url)
    //             .map((res:Response)=>{
    //                 // console.log('res:Res', res.json().map(function(item){ return new VOPost(item)}));
    //                 return res.json().map(function(item){ return new VOPost(item)});
    //             })
    //             .catch(this.handleError)
    // }

    getAllPosts(): Observable<any> {
        var url: string = VOSettings.posts;
        return this.http.get(url)
            .map((res: Response) => {
                return res.json().map(function (item) {
                    return new VOPost(item)
                });
            })
            .catch(this.handleError)
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            console.error(error);
        return Observable.throw(errMsg);
    }

}
