import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  cities:any=[
    {
      image:"/../assets/images/gallery1.jpg",
      info:"Humayun's Tomb, New Delhi, India"
    },
    {
      image:"/../assets/images/gallery2.jpg",
      info:"Maidan, New Market Area, Kolkata"
    },
    {
      image:"/../assets/images/gallery3.jpg",
      info:"Hawa Mahal Road,Pink City, Jaipur, Rajasthan"
    },
    {
      image:"/../assets/images/gallery4.jpg",
      info:"Backwaters in Alleppey, Kerala,"
    },
    {
      image:"/../assets/images/gallery5.jpg",
      info:"Indian, jodhpur, India"
    },
    {
      image:"/../assets/images/gallery6.jpg",
      info:"Agra, Uttar Pradesh, India-Taj Mahal"
    },
    {
      image:"/../assets/images/gallery7.jpg",
      info:"Kolkata, India. Sunset in the City of Joy"
    },
    {
      image:"/../assets/images/gallery8.jpg",
      info:"Varanasi, Uttar Pradesh, India"
    },
    {
      image:"/../assets/images/gallery9.jpg",
      info:"Athirappilly Water Falls, Pariyaram, Kerala"
    },
    {
      image:"/../assets/images/gallery10.jpg",
      info:"Varanasi, Uttar Pradesh, India"
    },
    {
      image:"/../assets/images/gallery11.jpg",
      info:"Varanasi, Uttar Pradesh, India"
    },
    {
      image:"/../assets/images/gallery12.jpg",
      info:"Indian, jodhpur, India"
    },
    {
      image:"/../assets/images/gallery1.jpg",
      info:"Humayun's Tomb, New Delhi, India"
    },
    {
      image:"/../assets/images/gallery2.jpg",
      info:"Maidan, New Market Area, Kolkata"
    },
    {
      image:"/../assets/images/gallery3.jpg",
      info:"Hawa Mahal Road,Pink City, Jaipur, Rajasthan"
    },
    {
      image:"/../assets/images/gallery4.jpg",
      info:"Backwaters in Alleppey, Kerala,"
    },
    {
      image:"/../assets/images/gallery9.jpg",
      info:"Athirappilly Water Falls, Pariyaram, Kerala"
    },
    {
      image:"/../assets/images/gallery10.jpg",
      info:"Varanasi, Uttar Pradesh, India"
    },
    {
      image:"/../assets/images/gallery11.jpg",
      info:"Varanasi, Uttar Pradesh, India"
    },
    {
      image:"/../assets/images/gallery12.jpg",
      info:"Indian, jodhpur, India"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
