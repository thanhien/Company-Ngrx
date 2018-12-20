import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { CompanyToAdd } from '../models/companytoadd.model';


const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpBase: string = environment.HttpBase;
    constructor(private http: HttpClient) {
    }

    getCompanies(): Observable<Company[]>{
      return this.http.get<Company[]>(this.httpBase + 'company/getlistcompany');
    }

    createCompany(company: any):Observable<any> {
      return this.http.post<Response>(this.httpBase + 'company/createcompany', company);
    }

    deleteCompany(globalID: any){
      return this.http.delete<Response>(this.httpBase + 'company/deletecompany/' + globalID);
    }

    updateCompamy(globalID: any , company: any) {
      return this.http.put<Response>(this.httpBase + 'company/updatecompany/' + globalID,company);
    }
}