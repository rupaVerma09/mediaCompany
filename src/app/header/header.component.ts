import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closeResult = '';
  mail:any='drgr';
  pass:any='sdgsdf';
  x="";
  isAuthenticated;
  myForm: any;
  
  constructor(
    private modalService: NgbModal,
    private auth: AuthServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
        ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      mail: '',
      pass: '',
    });
    this.checkAuthentication();    
  }

  openSongList(x,content){

    // this.selectedMovie = movie;
    // document.getElementById('#myModal').modal('show');
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
   if(this.auth.login(this.myForm.controls.mail.value,this.myForm.controls.pass.value)){
     this.toastr.success('successfully login');
   } 
   else{
     this.toastr.error('Invalid Credential')
   }
    this.checkAuthentication();
    // close modal
}

onLogout(){
  this.auth.logout();
  this.checkAuthentication();
  this.router.navigate(['/home']);
}

checkAuthentication(){
  this.isAuthenticated = this.auth.isAuthenticated();
}
}
