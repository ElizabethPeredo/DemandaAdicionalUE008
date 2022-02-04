class BuscarAnexo {
    constructor() {
        this.inversiones = [
            {A:'1',B:'PI - 2151618: Sitio Arqueológico de Kuelap (Amazonas)',C:15608963.21,D:15608963.21,E:0,F:0,G:0,H:0,I:0,J:0,K:612056,L:20000,M:20000,N:20000,O:20000,P:1020000,Q:1712056,},
            {A:'2',B:'IOARR - 2430936: Huaca Caudivilla',C:269018,D:269018,E:0,F:0,G:0,H:0,I:0,J:0,K:83306.4,L:0,M:97190.8,N:97190.8,O:0,P:0,Q:277688,},
            {A:'3',B:'PI - 2131495: Lugar de la Memoria (LUM)',C:30802474.44,D:30802474.44,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:40000,M:10000,N:10000,O:280000,P:10000,Q:350000,},
            {A:'4',B:'PI - 2251549: Museo Nacional del Perú (MUNA)',C:528326174.65,D:18891096.65,E:0,F:0,G:0,H:5100000,I:0,J:1700000,K:1700000,L:1700000,M:1700000,N:1700000,O:1700000,P:1700000,Q:17000000,},
            {A:'5',B:'PI - 2446487: Ceviche',C:2182743.99,D:2182743.99,E:0,F:0,G:0,H:0,I:0,J:135627.6,K:0,L:63292.88,M:63292.88,N:63292.88,O:63292.88,P:63292.88,Q:452092,},
            {A:'6',B:'PI - 2469016: Balcón de Huaura',C:4312124.69,D:4312124.69,E:0,F:0,G:0,H:0,I:42000,J:0,K:0,L:378000,M:0,N:0,O:1290000,P:3010000,Q:4720000,},
            {A:'7',B:'PI - 2233917: Archivo General de la Nación (AGN)',C:192909328.42,D:192909328.42,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:810000,M:0,N:630000,O:630000,P:630000,Q:2700000,},
            {A:'8',B:'PI - 2413312: Necrópolis de Ancón',C:3246084.85,D:3246084.85,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:31000,M:6000,N:6000,O:231000,P:6000,Q:280000,},
            {A:'9',B:'IOARR - 2497501: Mateo Salao (Lima)',C:1016585.38,D:1016585.38,E:0,F:0,G:0,H:0,I:0,J:300000,K:214975.5,L:0,M:125402.375,N:125402.375,O:125402.375,P:125402.375,Q:1016585,},
            {A:'10',B:'PI - 2505984: Gran Biblioteca Pública (Lima)',C:43696899.89,D:43696899.89,E:0,F:0,G:0,H:0,I:0,J:0,K:142000,L:10000,M:10000,N:10000,O:10000,P:1198000,Q:1380000,},
            {A:'11',B:'PI - 2506071: Casa Hacienda Punchauca (Lima)',C:12657455.65,D:12657455.65,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:58378.1,M:8000,N:8000,O:8000,P:461402.9,Q:543781,},
            {A:'12',B:'PI - 2506435: Hotel Comercio (Lima)',C:19028874.07,D:19028874.07,E:0,F:0,G:0,H:0,I:0,J:0,K:129100,L:15000,M:15000,N:15000,O:15000,P:1041900,Q:1231000,},
            {A:'13',B:'PI - 2508807: I.C. (Nasca y Palpa)',C:23033381.84,D:23033381.84,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:48706,M:0,N:0,O:0,P:438354,Q:487060,},
            {A:'14',B:'PI - 2508852: Digitalización del AGN',C:45460184.24,D:45460184.24,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:199771.6,N:7500,O:7500,P:1737944.4,Q:1952716,},
            {A:'15',B:'PI - 2497434: Parque Bicentenario - Ancash',C:13578390.27,D:13578390.27,E:0,F:0,G:0,H:0,I:0,J:0,K:1237401,L:0,M:0,N:0,O:0,P:0,Q:1237401,},
            {A:'16',B:'PI - 2499858: Parque Bicentenario - Piura',C:20882267.86,D:20882267.86,E:0,F:0,G:0,H:0,I:0,J:0,K:947702,L:0,M:0,N:0,O:0,P:0,Q:947702,},
            {A:'17',B:'PI - 2499997: Parque Bicentenario - Ayacucho',C:30006599.63,D:30006599.63,E:0,F:0,G:0,H:0,I:0,J:0,K:530439,L:0,M:0,N:0,O:0,P:0,Q:530439,},
            {A:'18',B:'PI - 2498610: Parque Bicentenario - Ucayali',C:14286800.5,D:14286800.5,E:0,F:0,G:0,H:0,I:0,J:0,K:1140582,L:0,M:0,N:0,O:0,P:0,Q:1140582,},
            {A:'19',B:'PI - 2499914: Parque Bicentenario - Arequipa',C:20297262.46,D:20297262.46,E:0,F:0,G:0,H:0,I:0,J:0,K:969509,L:0,M:0,N:0,O:0,P:0,Q:969509,},
            {A:'20',B:'PI - 2498188: Parque Bicentenario - Lambayeque',C:16932205.02,D:16932205.02,E:0,F:0,G:0,H:0,I:0,J:0,K:1008221,L:0,M:0,N:0,O:0,P:0,Q:1008221,},
            {A:'21',B:'PI - 2498659: Parque Bicentenario - Loreto',C:17299260.64,D:17299260.64,E:0,F:0,G:0,H:0,I:0,J:0,K:1237401,L:0,M:0,N:0,O:0,P:0,Q:1237401,},
            {A:'22',B:'PI - 2498268: Parque Bicentenario - Huanuco',C:14831659.4,D:14831659.4,E:0,F:0,G:0,H:0,I:0,J:0,K:1237400,L:0,M:0,N:0,O:0,P:0,Q:1237400,},
            {A:'23',B:'PI - 2498369: Parque Bicentenario - Apurimac',C:20167137.23,D:20167137.23,E:0,F:0,G:0,H:0,I:0,J:0,K:1081272,L:0,M:0,N:0,O:0,P:0,Q:1081272,},
            {A:'24',B:'PI - 2499921: Parque Bicentenario - Tumbes',C:11519369.55,D:11519369.55,E:0,F:0,G:0,H:0,I:0,J:0,K:947702,L:0,M:0,N:0,O:0,P:0,Q:947702,},
            {A:'25',B:'PI - 2499859: Parque Bicentenario - Ica',C:14105820.39,D:14105820.39,E:0,F:0,G:0,H:0,I:0,J:0,K:947702,L:0,M:0,N:0,O:0,P:0,Q:947702,},
            {A:'26',B:'PI - 2499288: Parque Bicentenario - Tacna',C:14832554.84,D:14832554.84,E:0,F:0,G:0,H:0,I:0,J:0,K:956424,L:0,M:0,N:0,O:0,P:0,Q:956424,},
            {A:'27',B:'PI - 2498138: Parque Bicentenario - Callao',C:20662539.54,D:20662539.54,E:0,F:0,G:0,H:0,I:0,J:0,K:1256814,L:0,M:0,N:0,O:0,P:0,Q:1256814,},
            {A:'28',B:'PI - 2498147: Parque Bicentenario - La Libertad',C:14754954.82,D:14754954.82,E:0,F:0,G:0,H:0,I:0,J:0,K:934080,L:0,M:0,N:0,O:0,P:0,Q:934080,},
            {A:'29',B:'PI - 2498275: Parque Bicentenario - Huancavelica',C:15941850.42,D:15941850.42,E:0,F:0,G:0,H:0,I:0,J:0,K:1179401,L:0,M:0,N:0,O:0,P:0,Q:1179401,},
            {A:'30',B:'PI - 2497468: Parque Bicentenario - Huacho (Lima)',C:15092412.77,D:15092412.77,E:0,F:0,G:0,H:0,I:0,J:0,K:934079,L:0,M:0,N:0,O:0,P:0,Q:934079,},
            {A:'31',B:'PI - 2497656: Parque Bicentenario - Moquegua',C:16332550.6,D:16332550.6,E:0,F:0,G:0,H:0,I:0,J:0,K:956424,L:0,M:0,N:0,O:0,P:0,Q:956424,},
            {A:'32',B:'PI - 2498259: Parque Bicentenario - Pasco',C:14403937.59,D:14403937.59,E:0,F:0,G:0,H:0,I:0,J:0,K:1092175,L:0,M:0,N:0,O:0,P:0,Q:1092175,},
            {A:'33',B:'PI - 2498370: Parque Bicentenario - Madre De Dios',C:13506354.16,D:13506354.16,E:0,F:0,G:0,H:0,I:0,J:0,K:1237401,L:0,M:0,N:0,O:0,P:0,Q:1237401,},
            {A:'34',B:'PI - 2505980: Parque Lineal Pachacamaq',C:24126075.8,D:24126075.8,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:125993.9,N:0,O:0,P:1133945.1,Q:1259939,},
            {A:'35',B:'PI - 2509544: IPELI (Lima, Cusco  y Loreto)',C:15949615.36,D:15949615.36,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:55708.6,M:16000,N:16000,O:16000,P:373377.4,Q:477086,},
            {A:'36',B:'PI - 2523322: Interpr. Cultural - Teatro Municipal De Piura (Piura)',C:39362400.24,D:39362400.24,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:178981.6,M:16000,N:16000,O:16000,P:1482834.4,Q:1709816,},
            {A:'37',B:'ESTUDIOS DE PREINVERSIÓN',C:0,D:0,E:0,F:0,G:0,H:323000,I:0,J:855500,K:72000,L:807500,M:646000,N:0,O:646000,P:0,Q:3350000,},
            {A:'Total',B:'',C:1321422312.41,D:811987234.41,E:0,F:0,G:0,H:5423000,I:42000,J:2991127.6,K:22785566.9,L:4216567.18,M:3058651.555,N:2724386.055,O:5058195.255,P:14432453.455,Q:60731948,},
            

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