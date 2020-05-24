import { Component, OnInit } from '@angular/core';
import { Zaposlenici } from '../Prostori/Model/Zaposlenici-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-zaposlenici',
  templateUrl: './zaposlenici.component.html',
  styleUrls: ['./zaposlenici.component.css']
})
export class ZaposleniciComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("In OnInit.");
  }

  zaposlenici: Zaposlenici = {
    sifraZaposlenika: null,
    imeZaposlenika: null,
    prezimeZaposlenika: null,
    nivoIskustva: null,
    godineRada: null
  };

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

  ubaciZaposlenika(): void {
    this.submitted.push(this.zaposlenici);
    this.zaposlenici = {
      sifraZaposlenika: null,
      imeZaposlenika: null,
      prezimeZaposlenika: null,
      nivoIskustva: null,
      godineRada: null
    };
}

sortirajPoGodinamaRada() : void {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
     switching = false;
     rows = table.rows;
     for (i = 1; i < (rows.length - 1); i++) {
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[4];
    y = rows[i + 1].getElementsByTagName("TD")[4];
    if (Number(x.innerHTML) < Number(y.innerHTML)) {
    shouldSwitch = true;
    break;
}
}
if (shouldSwitch) {
rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
switching = true;
}
}
}


}
