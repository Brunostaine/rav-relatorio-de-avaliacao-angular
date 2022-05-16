import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuAtivo: boolean = false;
  
  onClick(){
    this.menuAtivo = !this.menuAtivo;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

 

}
