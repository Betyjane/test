import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'test';
  public listadetitulos:any = []

  constructor(private RestService:RestService)
  {

  }

  ngOnInit(): void {
    this.cargaData()
  }

  public cargaData(){
    this.RestService.get('https://api.github.com/search/repositories?q=php+language:php')
    .subscribe(respuesta =>{
      console.log(respuesta);
      //this.listadetitulos = respuesta; 
    }
      )
  }
}
