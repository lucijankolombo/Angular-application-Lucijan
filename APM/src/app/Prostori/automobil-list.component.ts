import { Component, OnInit } from '@angular/core';
import { Automobil } from './Model/Automobil-model';
import { NgForm } from '@angular/forms';

@Component ({
    selector: 'pm-products',
    templateUrl: './automobil-list.component.html',
    styleUrls: ['./automobil-list.component.css']
})

export class AutomobilListComponent implements OnInit {

      ngOnInit(): void {
          console.log("In OnInit.");
      }

      automobil : Automobil = {
        sifraAutomobila: null,
        nazivAutomobila: null,
        snagaAutomobila: null,
        cijena: null,
        godiste: null,
        boja: null
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

      ubaciAutomobil(): void {
          this.submitted.push(this.automobil);
          this.automobil = {
            sifraAutomobila: null,
            nazivAutomobila: null,
            snagaAutomobila: null,
            cijena: null,
            godiste: null,
            boja: null
          };
      }

      sortirajPoCijeni() : void {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        while (switching) {
           switching = false;
           rows = table.rows;
           for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[3];
          y = rows[i + 1].getElementsByTagName("TD")[3];
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
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

    sortirajPoSnazi() : void {
      var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        while (switching) {
           switching = false;
           rows = table.rows;
           for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[2];
          y = rows[i + 1].getElementsByTagName("TD")[2];
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