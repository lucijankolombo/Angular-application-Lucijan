import { Component, OnInit } from '@angular/core';
import { Klijenti } from '../Model/Klijenti-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-klijenti',
  templateUrl: './klijenti.component.html',
  styleUrls: ['./klijenti.component.css']
})
export class KlijentiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("In OnInit.");
  }

  klijenti: Klijenti = {
    sifraKlijenta: null,
    imeKlijenta: null, 
    prezimeKlijenta: null,
    nazivKupljenogAutomobila: null,
    kontaktBroj: null
  }

  pretraziTablicu(): void {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  delete(i){
    this.submitted.splice(i,1);
  }

  submitted: any[] = [];

  ubaciKlijenta(): void {
      this.submitted.push(this.klijenti);
      this.klijenti = {
        sifraKlijenta: null,
        imeKlijenta: null, 
        prezimeKlijenta: null,
        nazivKupljenogAutomobila: null,
        kontaktBroj: null
      };
  }

  

}
