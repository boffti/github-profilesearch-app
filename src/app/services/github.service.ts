import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id='59f3aba9895b30261c14';
    private client_secret = 'e02aa51e138fcfbcec79de944e64e9457f06941a';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'boffti';
    }

getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
}

getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
}

updateUser(username:string) {
    this.username = username;
}

}