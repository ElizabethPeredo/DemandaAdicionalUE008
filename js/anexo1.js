class BuscarAnexo {
    constructor() {
        this.inversiones = [
            {A:'1',B:'PI - 2151618: Sitio Arqueológico de Kuelap (Amazonas)',C:'NO',D:15608963,E:2076395,F:0,G:13532568,H:0,I:1712056,J:1712056,K:'ET/DE y Ejecución física',},
{A:'2',B:'IOARR - 2430936: Huaca Caudivilla',C:'NO',D:269018,E:2500,F:0,G:266518,H:0,I:277688,J:277688,K:'Ejecución física',},
{A:'3',B:'PI - 2131495: Lugar de la Memoria (LUM)',C:'NO',D:30802474,E:27401690,F:0,G:3400784,H:0,I:350000,J:350000,K:'ET/DE',},
{A:'4',B:'PI - 2251549: Museo Nacional del Perú (MUNA)',C:'SI',D:528326175,E:496117895,F:13317183,G:18891097,H:13317183,I:17000000,J:30317183,K:'Ejecución física',},
{A:'5',B:'PI - 2446487: Ceviche',C:'SI',D:2182744,E:332268,F:150000,G:1700476,H:150000,I:452092,J:602092,K:'Ejecución física',},
{A:'6',B:'PI - 2469016: Balcón de Huaura',C:'SI',D:4312125,E:459575,F:0,G:3852550,H:0,I:4720000,J:4720000,K:'ET/DE y Ejecución física',},
{A:'7',B:'PI - 2233917: Archivo General de la Nación (AGN)',C:'SI',D:192909328,E:6499920,F:1567471,G:184841937,H:1567471,I:2700000,J:4267471,K:'Ejecución física',},
{A:'8',B:'PI - 2413312: Necrópolis de Ancón',C:'NO',D:3246085,E:46250,F:0,G:3199835,H:0,I:280000,J:280000,K:'ET/DE',},
{A:'9',B:'IOARR - 2497501: Mateo Salao (Lima)',C:'NO',D:1016585,E:0,F:0,G:1016585,H:0,I:1016585,J:1016585,K:'ET/DE y Ejecución física',},
{A:'10',B:'PI - 2505984: Gran Biblioteca Pública (Lima)',C:'SI',D:43696900,E:20000,F:0,G:43676900,H:0,I:1380000,J:1380000,K:'ET/DE',},
{A:'11',B:'PI - 2506071: Casa Hacienda Punchauca (Lima)',C:'SI',D:12657456,E:10000,F:0,G:12647456,H:0,I:543781,J:543781,K:'ET/DE',},
{A:'12',B:'PI - 2506435: Hotel Comercio (Lima)',C:'NO',D:19028874,E:30000,F:0,G:18998874,H:0,I:1231000,J:1231000,K:'ET/DE',},
{A:'13',B:'PI - 2508807: I.C. (Nasca y Palpa)',C:'SI',D:23033382,E:10000,F:0,G:23023382,H:0,I:487060,J:487060,K:'ET/DE',},
{A:'14',B:'PI - 2508852: Digitalización del AGN',C:'SI',D:45460184,E:0,F:0,G:45460184,H:0,I:1952716,J:1952716,K:'ET/DE',},
{A:'15',B:'PI - 2497434: Parque Bicentenario - Ancash',C:'SI',D:13578390,E:0,F:0,G:13578390,H:0,I:1237401,J:1237401,K:'CAR',},
{A:'16',B:'PI - 2499858: Parque Bicentenario - Piura',C:'SI',D:20882268,E:0,F:0,G:20882268,H:0,I:947702,J:947702,K:'CAR',},
{A:'17',B:'PI - 2499997: Parque Bicentenario - Ayacucho',C:'SI',D:30006600,E:0,F:0,G:30006600,H:0,I:530439,J:530439,K:'CAR',},
{A:'18',B:'PI - 2498610: Parque Bicentenario - Ucayali',C:'SI',D:14286801,E:0,F:0,G:14286801,H:0,I:1140582,J:1140582,K:'CAR',},
{A:'19',B:'PI - 2499914: Parque Bicentenario - Arequipa',C:'SI',D:20297262,E:0,F:0,G:20297262,H:0,I:969509,J:969509,K:'CAR',},
{A:'20',B:'PI - 2498188: Parque Bicentenario - Lambayeque',C:'SI',D:16932205,E:0,F:0,G:16932205,H:0,I:1008221,J:1008221,K:'CAR',},
{A:'21',B:'PI - 2498659: Parque Bicentenario - Loreto',C:'SI',D:17299261,E:0,F:0,G:17299261,H:0,I:1237401,J:1237401,K:'CAR',},
{A:'22',B:'PI - 2498268: Parque Bicentenario - Huanuco',C:'SI',D:14831659,E:0,F:0,G:14831659,H:0,I:1237400,J:1237400,K:'CAR',},
{A:'23',B:'PI - 2498369: Parque Bicentenario - Apurimac',C:'SI',D:20167137,E:0,F:0,G:20167137,H:0,I:1081272,J:1081272,K:'CAR',},
{A:'24',B:'PI - 2499921: Parque Bicentenario - Tumbes',C:'SI',D:11519370,E:0,F:0,G:11519370,H:0,I:947702,J:947702,K:'CAR',},
{A:'25',B:'PI - 2499859: Parque Bicentenario - Ica',C:'SI',D:14105820,E:0,F:0,G:14105820,H:0,I:947702,J:947702,K:'CAR',},
{A:'26',B:'PI - 2499288: Parque Bicentenario - Tacna',C:'SI',D:14832555,E:0,F:0,G:14832555,H:0,I:956424,J:956424,K:'CAR',},
{A:'27',B:'PI - 2498138: Parque Bicentenario - Callao',C:'SI',D:20662540,E:0,F:0,G:20662540,H:0,I:1256814,J:1256814,K:'CAR',},
{A:'28',B:'PI - 2498147: Parque Bicentenario - La Libertad',C:'SI',D:14754955,E:0,F:0,G:14754955,H:0,I:934080,J:934080,K:'CAR',},
{A:'29',B:'PI - 2498275: Parque Bicentenario - Huancavelica',C:'SI',D:15941850,E:0,F:0,G:15941850,H:0,I:1179401,J:1179401,K:'CAR',},
{A:'30',B:'PI - 2497468: Parque Bicentenario - Huacho (Lima)',C:'SI',D:15092413,E:0,F:0,G:15092413,H:0,I:934079,J:934079,K:'CAR',},
{A:'31',B:'PI - 2497656: Parque Bicentenario - Moquegua',C:'SI',D:16332551,E:0,F:0,G:16332551,H:0,I:956424,J:956424,K:'CAR',},
{A:'32',B:'PI - 2498259: Parque Bicentenario - Pasco',C:'SI',D:14403938,E:0,F:0,G:14403938,H:0,I:1092175,J:1092175,K:'CAR',},
{A:'33',B:'PI - 2498370: Parque Bicentenario - Madre De Dios',C:'SI',D:13506354,E:0,F:0,G:13506354,H:0,I:1237401,J:1237401,K:'CAR',},
{A:'34',B:'PI - 2505980: Parque Lineal Pachacamaq',C:'SI',D:24126076,E:0,F:0,G:24126076,H:0,I:1259939,J:1259939,K:'ET/DE',},
{A:'35',B:'PI - 2509544: IPELI (Lima, Cusco  y Loreto)',C:'SI',D:15949615,E:0,F:0,G:15949615,H:0,I:477086,J:477086,K:'ET/DE',},
{A:'36',B:'PI - 2523322: Interpr. Cultural - Teatro Municipal De Piura (Piura)',C:'SI',D:39362400,E:0,F:0,G:39362400,H:0,I:1709816,J:1709816,K:'ET/DE',},
{A:'37',B:'ESTUDIOS DE PREINVERSIÓN',C:'',D:0,E:0,F:0,G:0,H:0,I:3350000,J:3350000,K:'-',},
{A:'TOTAL',B:'',C:'',D:1321422312.4,E:533006493,F:15034654,G:773381165.4,H:15034654,I:60731948,J:75766602,K:' - ',},

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
      fila.insertCell(3).innerHTML = inversion.D.toLocaleString('ENG');
      fila.insertCell(4).innerHTML = inversion.E.toLocaleString('ENG');
      fila.insertCell(5).innerHTML = inversion.F.toLocaleString('ENG');
      fila.insertCell(6).innerHTML = inversion.G.toLocaleString('ENG');
      fila.insertCell(7).innerHTML = inversion.H.toLocaleString('ENG');
      fila.insertCell(8).innerHTML = inversion.I.toLocaleString('ENG');
      fila.insertCell(9).innerHTML = inversion.J.toLocaleString('ENG');
      fila.insertCell(10).innerHTML = inversion.K;
              
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