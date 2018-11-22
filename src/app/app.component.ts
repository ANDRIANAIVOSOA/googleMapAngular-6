/// <reference types="@types/googlemaps" />
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public formulaire: FormGroup;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private fb: FormBuilder){}
  
  ngOnInit(){
    this.formulaire = this.fb.group({
      latitude: ["-18.9136800"],
      longitude: ["47.5361300"]
    });

    let mapProp = {
      center: new google.maps.LatLng(this.formulaire.get('latitude').value, this.formulaire.get('longitude').value),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
      this.map.setMapTypeId(mapTypeId);  
  }

  setCenter(e:any){
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.formulaire.get('latitude').value, this.formulaire.get('longitude').value));
  }

}
