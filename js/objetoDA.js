class BuscarAnexo {
  constructor() {
    this.inversiones = [



    ];
    this.inversionesBK = this.inversiones;
    this.onInit();
    console.log(this.inversiones);
  }
  onInit() {
    let bodyAnexo = document.getElementById("bodyAnexo");
    while (bodyAnexo.rows.lenght > 0) {
      bodyAnexo.deleteRow(0);
    }
    this.inversiones.forEach(inversion => {
      let fila = bodyAnexo.insertRow(bodyAnexo.rows.lenght);
      fila.insertCell(0).innerHTML = inversion.A;
      fila.insertCell(1).innerHTML = inversion.B;
      fila.insertCell(2).innerHTML = inversion.C;
      fila.insertCell(3).innerHTML = inversion.D;
      fila.insertCell(4).innerHTML = inversion.E;
      fila.insertCell(5).innerHTML = inversion.F;
      fila.insertCell(6).innerHTML = inversion.G;
      fila.insertCell(7).innerHTML = inversion.H.toLocaleString('ENG');
      fila.insertCell(8).innerHTML = inversion.I.toLocaleString('ENG');


    });
  }

}

let busqueda = new BuscarAnexo();


function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("valor");
  filter = input.value.toUpperCase();
  table = document.getElementById("bodyAnexo");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
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