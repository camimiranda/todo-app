import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  showModal: Boolean = false;
  constructor(private modalService: NgbModal,
              private modalActive: NgbActiveModal) {}

  ngOnInit() {

  }
  openLogin() {
    if (this.showModal) {
      this.showModal = false;
    } else {
      this.showModal = true;
    }

  }


}
