import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getOrg(org: string): Observable<{ name: string }> {
        return this.makeRequest<{ name: string }>(`orgs/${org}`);
    }

    getReposForOrg(org: string) {
        return this.makeRequest(`orgs/${org}/repos`);
    }

    getRepoForOrg(org: string, repo: string) {
        return this.makeRequest(`repos/${org}/${repo}`);
    }

    private makeRequest<T>(path: string) {
        let url = `https://api.github.com/${path}`;
        return this.httpClient.get<T>(url, { params: { 'per_page': '100' } });
    }
}
