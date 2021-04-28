import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
dbArray:any=[];
  constructor() { }


  isAuthenticated(){
    if (localStorage.getItem('isAuthenticated')==="true") {

      return true;
  } else {
      return false;
  }
  }

  login(user,password){
      this.dbArray = this.getDb();
      let flag=false;
      for(let i=0;i<this.dbArray.length; i++){
        if(this.dbArray[i].userid===user && this.dbArray[i].password===password){
          localStorage.setItem('isAuthenticated', 'true');
          flag= true;
        }
      }
      return flag;
  }


  logout(){
    localStorage.setItem('isAuthenticated', 'false');
  }

  setDb(arr){
    localStorage.setItem('userDb', JSON.stringify(arr));
  }

  getDb(){
   return JSON.parse(localStorage.getItem('userDb'));
  }
}
