import { Injectable } from '@angular/core';
import { IUser } from "./user.model";

@Injectable()

export class AuthService{ //this services is keeping track of the currnt user
  currentUser: IUser
  loginUser (userName: string, password: string){
    this.currentUser ={
      id: 1,
      userName: userName,
      firstName: 'Arinzy',
      lastName: 'Rinzy'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string){
    this.currentUser.firstName = firstName //this will decarle our current user name that we have decarke up at currentUser
    this.currentUser.lastName = lastName
  }
}
