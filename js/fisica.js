class BuscarAnexo {
    constructor() {
        this.inversiones = [
            { A: '1', B: 'PI - 2151618: Sitio Arqueológico de Kuelap (Amazonas)', C: '06/03/2022', D: '18/03/2022', E: '06/04/2022', F: '06/05/2022', G: '24/05/2022', H: '19/07/2022', I: '19/07/2022', J: 'NO APLICA', K: '27/09/2022', L: '11/10/2022', M: '14/10/2022', N: '04/11/2022', O: '22/11/2022', P: '06/12/2022', Q: '15/11/2026', },
            { A: '2', B: 'IOARR - 2430936: Huaca Caudivilla', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: 'NO APLICA', K: '06/04/2022', L: '08/04/2022', M: '13/04/2022', N: '29/06/2022', O: '15/07/2022', P: '29/07/2022', Q: '27/10/2022', },
            { A: '3', B: 'PI - 2131495: Lugar de la Memoria (LUM)', C: '30/03/2022', D: '13/04/2022', E: '02/05/2022', F: '01/06/2022', G: '17/06/2022', H: '12/08/2022', I: '04/11/2022', J: 'NO APLICA', K: '11/11/2022', L: '20/12/2022', M: '23/12/2022', N: '10/02/2023', O: '28/02/2023', P: '14/03/2023', Q: '10/09/2023', },
            { A: '4', B: 'PI - 2251549: Museo Nacional del Perú (MUNA)', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: 'NO APLICA', K: '10/01/2022', L: '12/01/2022', M: '17/01/2022', N: '21/03/2022', O: '06/04/2022', P: '13/04/2022', Q: '18/12/2024', },
            { A: '5', B: 'PI - 2446487: Ceviche', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: 'NO APLICA', K: 'NO APLICA', L: '01/04/2022', M: '06/04/2022', N: '25/05/2022', O: '10/06/2022', P: '24/06/2022', Q: '19/07/2023', },
            { A: '6', B: 'PI - 2469016: Balcón de Huaura', C: '02/03/2022', D: '16/03/2022', E: '04/04/2022', F: '11/04/2022', G: '27/04/2022', H: '18/05/2022', I: '03/08/2022', J: 'NO APLICA', K: '03/08/2022', L: '17/08/2022', M: '22/08/2022', N: '10/10/2022', O: '26/10/2022', P: '09/11/2022', Q: '02/02/2024', },
            { A: '7', B: 'PI - 2233917: Archivo General de la Nación (AGN)', C: '03/01/2022', D: '10/01/2022', E: '13/01/2022', F: '10/02/2022', G: '28/02/2022', H: '07/03/2022', I: '28/03/2022', J: 'NO APLICA', K: '04/04/2022', L: '16/05/2022', M: '03/06/2022', N: '15/07/2022', O: '02/08/2022', P: '16/08/2022', Q: '04/09/2024', },
            { A: '8', B: 'PI - 2413312: Necrópolis de Ancón', C: '30/03/2022', D: '13/04/2022', E: '02/05/2022', F: '01/06/2022', G: '17/06/2022', H: '12/08/2022', I: '04/11/2022', J: 'NO APLICA', K: '27/01/2023', L: '21/04/2023', M: '26/04/2023', N: '10/05/2023', O: '26/05/2023', P: '09/06/2023', Q: '27/08/2025', },
            { A: '9', B: 'IOARR - 2497501: Mateo Salao (Lima)', C: '06/04/2022', D: '20/04/2022', E: '04/05/2022', F: '18/05/2022', G: '25/05/2022', H: '08/06/2022', I: '22/06/2022', J: 'NO APLICA', K: '13/04/2022', L: '15/04/2022', M: '20/04/2022', N: '08/06/2022', O: '24/06/2022', P: '08/07/2022', Q: '05/12/2022', },
            { A: '10', B: 'PI - 2505984: Gran Biblioteca Pública (Lima)', C: '30/03/2022', D: '13/04/2022', E: '15/06/2022', F: '22/06/2022', G: '04/07/2022', H: '25/07/2022', I: '26/12/2022', J: 'NO APLICA', K: '02/01/2023', L: '04/01/2023', M: '09/01/2023', N: '27/02/2023', O: '03/03/2023', P: '17/03/2023', Q: '01/03/2026', },
            { A: '11', B: 'PI - 2506071: Casa Hacienda Punchauca (Lima)', C: '13/04/2022', D: '27/04/2022', E: '29/06/2022', F: '06/07/2022', G: '18/07/2022', H: '08/08/2022', I: '12/12/2022', J: 'NO APLICA', K: '19/12/2022', L: '21/12/2022', M: '26/12/2022', N: '13/02/2023', O: '01/03/2023', P: '15/03/2023', Q: '09/03/2024', },
            { A: '12', B: 'PI - 2506435: Hotel Comercio (Lima)', C: '31/03/2022', D: '14/04/2022', E: '16/06/2022', F: '23/06/2022', G: '05/07/2022', H: '26/07/2022', I: '13/12/2022', J: 'NO APLICA', K: '21/02/2023', L: '23/02/2023', M: '28/02/2023', N: '18/04/2023', O: '04/05/2023', P: '18/05/2023', Q: '08/11/2024', },
            { A: '13', B: 'PI - 2508807: I.C. (Nasca y Palpa)', C: '20/04/2022', D: '04/05/2022', E: '06/07/2022', F: '13/07/2022', G: '25/07/2022', H: '15/08/2022', I: '19/12/2022', J: 'NO APLICA', K: '26/12/2022', L: '28/12/2022', M: '02/01/2023', N: '20/02/2023', O: '08/03/2023', P: '22/03/2023', Q: '06/03/2026', },
            { A: '14', B: 'PI - 2508852: Digitalización del AGN', C: '11/05/2022', D: '25/05/2022', E: '27/07/2022', F: '03/08/2022', G: '15/08/2022', H: '05/09/2022', I: '26/12/2022', J: 'NO APLICA', K: '02/01/2023', L: '04/01/2023', M: '09/01/2023', N: '27/02/2023', O: '15/03/2023', P: '29/03/2023', Q: '13/03/2026', },
            { A: '15', B: 'PI - 2497434: Parque Bicentenario - Ancash', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: '16/08/2022', H: '06/09/2022', I: '10/01/2023', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '20/01/2025', },
            { A: '16', B: 'PI - 2499858: Parque Bicentenario - Piura', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '26/01/2024', },
            { A: '17', B: 'PI - 2499997: Parque Bicentenario - Ayacucho', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '20/01/2025', },
            { A: '18', B: 'PI - 2498610: Parque Bicentenario - Ucayali', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '20/01/2025', },
            { A: '19', B: 'PI - 2499914: Parque Bicentenario - Arequipa', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '26/03/2024', },
            { A: '20', B: 'PI - 2498188: Parque Bicentenario - Lambayeque', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '28/10/2023', },
            { A: '21', B: 'PI - 2498659: Parque Bicentenario - Loreto', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '20/01/2025', },
            { A: '22', B: 'PI - 2498268: Parque Bicentenario - Huanuco', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '20/01/2025', },
            { A: '23', B: 'PI - 2498369: Parque Bicentenario - Apurimac', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '17/10/2025', },
            { A: '24', B: 'PI - 2499921: Parque Bicentenario - Tumbes', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '26/01/2024', },
            { A: '25', B: 'PI - 2499859: Parque Bicentenario - Ica', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '26/01/2024', },
            { A: '26', B: 'PI - 2499288: Parque Bicentenario - Tacna', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '26/01/2024', },
            { A: '27', B: 'PI - 2498138: Parque Bicentenario - Callao', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '29/08/2023', },
            { A: '28', B: 'PI - 2498147: Parque Bicentenario - La Libertad', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '29/08/2023', },
            { A: '29', B: 'PI - 2498275: Parque Bicentenario - Huancavelica', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '17/10/2025', },
            { A: '30', B: 'PI - 2497468: Parque Bicentenario - Huacho (Lima)', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '29/08/2023', },
            { A: '31', B: 'PI - 2497656: Parque Bicentenario - Moquegua', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '29/08/2023', },
            { A: '32', B: 'PI - 2498259: Parque Bicentenario - Pasco', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '17/10/2025', },
            { A: '33', B: 'PI - 2498370: Parque Bicentenario - Madre De Dios', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '30/07/2022', K: '30/09/2022', L: '04/10/2022', M: '07/10/2022', N: '25/11/2022', O: '13/12/2022', P: '31/01/2023', Q: '20/01/2025', },
            { A: '34', B: 'PI - 2505980: Parque Lineal Pachacamaq', C: '20/04/2022', D: '18/05/2022', E: '06/06/2022', F: '18/07/2022', G: '03/08/2022', H: '28/09/2022', I: '21/12/2022', J: 'NO APLICA', K: '01/03/2023', L: '03/03/2023', M: '08/03/2023', N: '26/04/2023', O: '12/05/2023', P: '30/06/2023', Q: '14/06/2026', },
            { A: '35', B: 'PI - 2509544: IPELI (Lima, Cusco  y Loreto)', C: '30/04/2022', D: '13/05/2022', E: '01/06/2022', F: '13/07/2022', G: '29/07/2022', H: '19/08/2022', I: '23/12/2022', J: 'NO APLICA', K: '03/03/2023', L: '07/03/2023', M: '10/03/2023', N: '28/04/2023', O: '16/05/2023', P: '04/07/2023', Q: '04/07/2023', },
            { A: '36', B: 'PI - 2523322: Interpr. Cultural - Teatro Municipal De Piura (Piura)', C: '30/04/2022', D: '13/05/2022', E: '01/06/2022', F: '13/07/2022', G: '29/07/2022', H: '19/08/2022', I: '23/12/2022', J: 'NO APLICA', K: '03/03/2023', L: '07/03/2023', M: '10/03/2023', N: '28/04/2023', O: '16/05/2023', P: '04/07/2023', Q: '04/07/2023', },

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
            fila.insertCell(7).innerHTML = inversion.H;
            fila.insertCell(8).innerHTML = inversion.I;
            fila.insertCell(9).innerHTML = inversion.J;
            fila.insertCell(10).innerHTML = inversion.K;
            fila.insertCell(11).innerHTML = inversion.L;
            fila.insertCell(12).innerHTML = inversion.M;
            fila.insertCell(13).innerHTML = inversion.N;
            fila.insertCell(14).innerHTML = inversion.O;
            fila.insertCell(15).innerHTML = inversion.P;
            fila.insertCell(16).innerHTML = inversion.Q;



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