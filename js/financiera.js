class BuscarAnexo {
    constructor() {
        this.inversiones = [
            { A: '1', B: 'IOARR - 2430939: Huaca Sauce', C: 488832, D: 41305, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 },
            { A: '2', B: 'IOARR - 2475770: Gestión UE-0008', C: 2666912, D: 706317, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 },
            { A: '3', B: 'IOARR - 2430949: Huaca Huerta Santa Rosa', C: 158136, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 },
            { A: '1', B: 'PI - 2151618: Sitio Arqueológico de Kuelap (Amazonas)', C: 15608963, D: 13708286, E: 0, F: 0, G: 196000, H: 1356000, I: 51000, J: 2338375, K: 51000, L: 1118442, M: 1118442, N: 1118442, O: 1118442, P: 1118442, Q: 9584584 },
            { A: '2', B: 'IOARR - 2430924: Huaca 26 (Lima)', C: 510861, D: 331220, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 99366, L: 0, M: 115927, N: 115927, O: 0, P: 0, Q: 331220 },
            { A: '3', B: 'IOARR - 2430936: Huaca Caudivilla', C: 269018, D: 266518, E: 0, F: 0, G: 0, H: 0, I: 79955, J: 0, K: 186563, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 266518 },
            { A: '4', B: 'PI - 2131495: Lugar de la Memoria (LUM)', C: 30802474, D: 3400784, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 133333, L: 33333, M: 33333, N: 933333, O: 33333, P: 33333, Q: 1200000 },
            { A: '5', B: 'PI - 2230368: Sitio Arqueológico de Wari (Huamanga)', C: 9758723, D: 4717518, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 },
            { A: '6', B: 'PI - 2251549: Museo Nacional del Perú (MUNA)', C: 528326175, D: 32104150, E: 0, F: 0, G: 0, H: 5345774, I: 170774, J: 1895774, K: 1895774, L: 1895774, M: 1895774, N: 1895774, O: 1895774, P: 1895774, Q: 18786967 },
            { A: '7', B: 'PI - 2446487: Ceviche', C: 2182744, D: 1842943, E: 0, F: 0, G: 0, H: 165000, I: 0, J: 55000, K: 55000, L: 55000, M: 55000, N: 55000, O: 55000, P: 55000, Q: 550000 },
            { A: '8', B: 'IOARR - 2456689: Batalla de Ayacucho (obelisco)', C: 2665834, D: 2365996, E: 0, F: 0, G: 0, H: 638433, I: 0, J: 212811, K: 212811, L: 212811, M: 212811, N: 212811, O: 212811, P: 212811, Q: 2128110 },
            { A: '9', B: 'IOARR - 2456690: Batalla de Junín', C: 2054638, D: 1729233, E: 0, F: 0, G: 0, H: 447404, I: 0, J: 149135, K: 149135, L: 149135, M: 149135, N: 149135, O: 149135, P: 149135, Q: 1491346 },
            { A: '10', B: 'PI - 2469016: Balcón de Huaura', C: 4312125, D: 3725383, E: 0, F: 0, G: 21000, H: 21000, I: 21000, J: 21000, K: 21000, L: 977805, M: 21000, N: 765181, O: 765181, P: 765181, Q: 3399349 },
            { A: '11', B: 'PI - 2233917: Archivo General de la Nación (AGN)', C: 192909328, D: 183187988, E: 0, F: 0, G: 1090000, H: 1090000, I: 1090000, J: 9790000, K: 1090000, L: 5150000, M: 5150000, N: 5150000, O: 5150000, P: 5150000, Q: 39900000 },
            { A: '12', B: 'PI - 2320691: Museo Nacional de AAH (Pueblo Libre)', C: 140072241, D: 124574446, E: 0, F: 0, G: 0, H: 0, I: 0, J: 21555514, K: 385714, L: 10264954, M: 10264954, N: 10264954, O: 10264954, P: 10264954, Q: 73266000 },
            { A: '13', B: 'PI - 2413312: Necrópolis de Ancón', C: 3246085, D: 3199835, E: 0, F: 0, G: 0, H: 26250, I: 226250, J: 1250, K: 287004, L: 1250, M: 167940, N: 167940, O: 167940, P: 167940, Q: 1213764 },
            { A: '14', B: 'PROG - 2313253: Programa Centros Históricos (GyA)', C: 14726251, D: 14436251, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 },
            { A: '15', B: 'PI - 2459183: Centro Histórico de Rímac (Lima)', C: 77620620, D: 77620620, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 },
            { A: '16', B: 'PI - 2459198: Centro Histórico de Huamanga (Ayacucho)', C: 75800130, D: 75800130, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 },
            { A: '17', B: 'IOARR - 2491061: Casa Cultural Tupac Amaru (Cusco)', C: 1606439, D: 1606439, E: 0, F: 0, G: 0, H: 0, I: 18750, J: 0, K: 168750, L: 0, M: 0, N: 240000, O: 0, P: 560000, Q: 987500 },
            { A: '18', B: 'IOARR - 2497501: Mateo Salao (Lima)', C: 1016585, D: 1016585, E: 0, F: 0, G: 0, H: 0, I: 30000, J: 0, K: 270000, L: 0, M: 0, N: 111000, O: 0, P: 259000, Q: 670000 },
            { A: '19', B: 'PI - 2505984: Gran Biblioteca Pública (Lima)', C: 43696900, D: 43676900, E: 0, F: 59124, G: 59124, H: 59124, I: 59124, J: 2839953, K: 59124, L: 1356844, M: 1356844, N: 1356844, O: 1356844, P: 1356844, Q: 9919793 },
            { A: '20', B: 'PI - 2506071: Casa Hacienda Punchauca (Lima)', C: 12657456, D: 12647456, E: 0, F: 0, G: 0, H: 0, I: 62397, J: 425422, K: 17019, L: 17019, M: 856853, N: 17019, O: 996826, P: 996826, Q: 3389381 },
            { A: '21', B: 'PI - 2506435: Hotel Comercio (Lima)', C: 19028874, D: 18998874, E: 0, F: 0, G: 0, H: 0, I: 119502, J: 925520, K: 18750, L: 18750, M: 1091525, N: 18750, O: 1270321, P: 1270321, Q: 4733439 },
            { A: '22', B: 'PI - 2508807: I.C. (Nasca y Palpa)', C: 23033382, D: 23023382, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 48706, M: 0, N: 438354, O: 0, P: 0, Q: 487060 },
            { A: '23', B: 'PI - 2508852: Digitalización del AGN', C: 45460184, D: 45450184, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 237724, L: 45453, M: 45453, N: 1775897, O: 45453, P: 45453, Q: 2195432 },
            { A: '24', B: 'PI - 2498277: Parque Bicentenario  - Puno', C: 20523920, D: 18589492, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 15966775, N: 0, O: 0, P: 0, Q: 15966775 },
            { A: '25', B: 'PI - 2498554: Parque Bicentenario - San Martin', C: 14623238, D: 13245243, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 11864507, N: 0, O: 0, P: 0, Q: 11864507 },
            { A: '26', B: 'PI - 2499924: Parque Bicentenario - Junin', C: 17091096, D: 15480969, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 13034073, N: 0, O: 0, P: 0, Q: 13034073 },
            { A: '27', B: 'PI - 2498131: Parque Bicentenario - Cajamarca', C: 14205217, D: 12865910, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 12649944, N: 0, O: 0, P: 0, Q: 12649944 },
            { A: '28', B: 'PI - 2498378: Parque Bicentenario - Cusco', C: 21222713, D: 19222287, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 12361388, N: 0, O: 0, P: 0, Q: 12361388 },
            { A: '29', B: 'PI - 2498352: Parque Bicentenario - Amazonas', C: 15651310, D: 14176593, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 12788322, N: 0, O: 0, P: 0, Q: 12788322 },
            { A: '30', B: 'PI - 2497434: Parque Bicentenario - Ancash', C: 13578390, D: 13578390, E: 0, F: 0, G: 0, H: 0, I: 0, J: 817579, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 817579 },
            { A: '31', B: 'PI - 2499858: Parque Bicentenario - Piura', C: 20882268, D: 20882268, E: 0, F: 0, G: 0, H: 0, I: 0, J: 568477, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 568477 },
            { A: '32', B: 'PI - 2499997: Parque Bicentenario - Ayacucho', C: 30006600, D: 30006600, E: 0, F: 0, G: 0, H: 0, I: 0, J: 301830, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 301830 },
            { A: '33', B: 'PI - 2498610: Parque Bicentenario - Ucayali', C: 14286801, D: 14286801, E: 0, F: 0, G: 0, H: 0, I: 0, J: 817579, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 817579 },
            { A: '34', B: 'PI - 2499914: Parque Bicentenario - Arequipa', C: 20297262, D: 20297262, E: 0, F: 0, G: 0, H: 0, I: 0, J: 582706, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 582706 },
            { A: '35', B: 'PI - 2498188: Parque Bicentenario - Lambayeque', C: 16932205, D: 16932205, E: 0, F: 0, G: 0, H: 0, I: 0, J: 663283, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 663283 },
            { A: '36', B: 'PI - 2498659: Parque Bicentenario - Loreto', C: 17299261, D: 17299261, E: 0, F: 0, G: 0, H: 0, I: 0, J: 662360, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 662360 },
            { A: '37', B: 'PI - 2498268: Parque Bicentenario - Huanuco', C: 14831659, D: 14831659, E: 0, F: 0, G: 0, H: 0, I: 0, J: 662358, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 662358 },
            { A: '38', B: 'PI - 2498369: Parque Bicentenario - Apurimac', C: 20167137, D: 20167137, E: 0, F: 0, G: 0, H: 0, I: 0, J: 560977, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 560977 },
            { A: '39', B: 'PI - 2499921: Parque Bicentenario - Tumbes', C: 11519370, D: 11519370, E: 0, F: 0, G: 0, H: 0, I: 0, J: 474242, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 474242 },
            { A: '40', B: 'PI - 2499859: Parque Bicentenario - Ica', C: 14105820, D: 14105820, E: 0, F: 0, G: 0, H: 0, I: 0, J: 474242, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 474242 },
            { A: '41', B: 'PI - 2499288: Parque Bicentenario - Tacna', C: 14832555, D: 14832555, E: 0, F: 0, G: 0, H: 0, I: 0, J: 479906, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 479906 },
            { A: '42', B: 'PI - 2498138: Parque Bicentenario - Callao', C: 20662540, D: 20662540, E: 0, F: 0, G: 0, H: 0, I: 0, J: 674965, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 674965 },
            { A: '43', B: 'PI - 2498147: Parque Bicentenario - La Libertad', C: 14754955, D: 14754955, E: 0, F: 0, G: 0, H: 0, I: 0, J: 465397, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 465397 },
            { A: '44', B: 'PI - 2498275: Parque Bicentenario - Huancavelica', C: 15941850, D: 15941850, E: 0, F: 0, G: 0, H: 0, I: 0, J: 624697, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 624697 },
            { A: '45', B: 'PI - 2497468: Parque Bicentenario - Huacho (Lima)', C: 15092413, D: 15092413, E: 0, F: 0, G: 0, H: 0, I: 0, J: 465396, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 465396 },
            { A: '46', B: 'PI - 2497656: Parque Bicentenario - Moquegua', C: 16332551, D: 16332551, E: 0, F: 0, G: 0, H: 0, I: 0, J: 479907, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 479907 },
            { A: '47', B: 'PI - 2498259: Parque Bicentenario - Pasco', C: 14403938, D: 14403938, E: 0, F: 0, G: 0, H: 0, I: 0, J: 568057, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 568057 },
            { A: '48', B: 'PI - 2498370: Parque Bicentenario - Madre De Dios', C: 13506354, D: 13506354, E: 0, F: 0, G: 0, H: 0, I: 0, J: 662360, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 662360 },
            { A: '49', B: 'PI - 2505980: Parque Lineal Pachacamaq', C: 24126076, D: 24126076, E: 0, F: 0, G: 0, H: 0, I: 0, J: 125994, K: 0, L: 1133945, M: 0, N: 0, O: 0, P: 0, Q: 1259939 },
            { A: '50', B: 'ESTUDIOS DE PREINVERSIÓN', C: 0, D: 0, E: 0, F: 0, G: 0, H: 323000, I: 0, J: 855500, K: 72000, L: 807500, M: 646000, N: 0, O: 646000, P: 0, Q: 3350000 },
            { A: 'Total', B: '', C: 1697557409, D: 1127319241, E: 0, F: 59124, G: 1366124, H: 9471985, I: 1928753, J: 52197566, K: 5410067, L: 23286721, M: 101846000, N: 24786362, O: 24128014, P: 24301014, Q: 268781729 }

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
            fila.insertCell(2).innerHTML = inversion.C.toLocaleString('ENG');
            fila.insertCell(3).innerHTML = inversion.D.toLocaleString('ENG');
            fila.insertCell(4).innerHTML = inversion.E.toLocaleString('ENG');
            fila.insertCell(5).innerHTML = inversion.F.toLocaleString('ENG');
            fila.insertCell(6).innerHTML = inversion.G.toLocaleString('ENG');
            fila.insertCell(7).innerHTML = inversion.H.toLocaleString('ENG');
            fila.insertCell(8).innerHTML = inversion.I.toLocaleString('ENG');
            fila.insertCell(9).innerHTML = inversion.J.toLocaleString('ENG');
            fila.insertCell(10).innerHTML = inversion.K.toLocaleString('ENG');
            fila.insertCell(11).innerHTML = inversion.L.toLocaleString('ENG');
            fila.insertCell(12).innerHTML = inversion.M.toLocaleString('ENG');
            fila.insertCell(13).innerHTML = inversion.N.toLocaleString('ENG');
            fila.insertCell(14).innerHTML = inversion.O.toLocaleString('ENG');
            fila.insertCell(15).innerHTML = inversion.P.toLocaleString('ENG');
            fila.insertCell(16).innerHTML = inversion.Q.toLocaleString('ENG');
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