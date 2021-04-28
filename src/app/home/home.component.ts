import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardDetails:any=[
   
    {
      image:"/../assets/images/card2.jpg",
      name:"David John",
      title:"Chief Executive Officer(CEO)"
    },
     {
      image:"/../assets/images/card1.jpg",
      name:"Maria Garcia",
      title:"Chief Financial Officer(CFO)"
    },
    {
      image:"/../assets/images/card3.jpg",
      name:"Sarah Hernandez",
      title:"Chief Business Officer(CBO)"
    }, 
    {
      image:"/../assets/images/card4.jpg",
      name:"Samuel Brown",
      title:"Chief Technology Officer(CTO)"
    },
    {
      image:"/../assets/images/card5.jpg",
      name:"James Johnson",
      title:"Chief Audit Executive(CAE)"
    },
    {
      image:"/../assets/images/card6.jpg",
      name:"George Wilson",
      title:"Chief Mrketing Officer(CMO)"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
