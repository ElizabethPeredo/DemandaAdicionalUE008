class BuscarAnexo {
    constructor() {
        this.inversiones = [
            {A:'1',B:'PI - 2151618: Sitio Arqueológico de Kuelap (Amazonas)',C:15608963,D:15608963,E:0,F:0,G:71206,H:544850,I:12000,J:12000,K:12000,L:12000,M:12000,N:12000,O:12000,P:12000,Q:712056}, 
{A:'2',B:'IOARR - 2430936: Huaca Caudivilla',C:269018,D:269018,E:0,F:0,G:0,H:0,I:0,J:87930,K:11559,L:178199,M:0,N:0,O:0,P:0,Q:277688}, 
{A:'3',B:'PI - 2131495: Lugar de la Memoria (LUM)',C:30802474,D:30802474,E:0,F:0,G:0,H:0,I:36250,J:6250,K:6250,L:276250,M:6250,N:6250,O:6250,P:6250,Q:350000}, 
{A:'4',B:'PI - 2251549: Museo Nacional del Perú (MUNA)',C:528326175,D:19121418,E:5636090,F:0,G:1315088,H:1315088,I:1315088,J:1315088,K:1315088,L:1315088,M:1315088,N:1315088,O:1315088,P:1315088,Q:18786967}, 
{A:'5',B:'PI - 2446487: Ceviche',C:2182744,D:2182744,E:0,F:0,G:135628,H:0,I:39558,J:39558,K:39558,L:39558,M:39558,N:39558,O:39558,P:39558,Q:452092}, 
{A:'6',B:'PI - 2469016: Balcón de Huaura',C:4312125,D:4312125,E:0,F:0,G:0,H:0,I:42000,J:0,K:378000,L:0,M:0,N:0,O:0,P:0,Q:420000}, 
{A:'7',B:'PI - 2233917: Archivo General de la Nación (AGN)',C:192909328,D:192909328,E:0,F:0,G:0,H:0,I:810000,J:0,K:315000,L:315000,M:315000,N:315000,O:315000,P:315000,Q:2700000}, 
{A:'8',B:'PI - 2413312: Necrópolis de Ancón',C:3246085,D:3246085,E:0,F:0,G:0,H:28333,I:228333,J:3333,K:3333,L:3333,M:3333,N:3333,O:3333,P:3333,Q:280000}, 
{A:'9',B:'IOARR - 2491061: Casa Cultural Tupac Amaru (Cusco)',C:1606439,D:1606439,E:0,F:0,G:0,H:0,I:18750,J:0,K:168750,L:0,M:0,N:0,O:0,P:0,Q:187500}, 
{A:'10',B:'IOARR - 2497501: Mateo Salao (Lima)',C:1016585,D:1016585,E:0,F:0,G:0,H:0,I:30000,J:0,K:270000,L:0,M:0,N:0,O:0,P:0,Q:300000}, 
{A:'11',B:'PI - 2505984: Gran Biblioteca Pública (Lima)',C:43696900,D:43696900,E:0,F:150182,G:1286182,H:8182,I:8182,J:8182,K:8182,L:8182,M:8182,N:8182,O:8182,P:8182,Q:1510000}, 
{A:'12',B:'PI - 2506071: Casa Hacienda Punchauca (Lima)',C:12657456,D:12657456,E:0,F:0,G:0,H:0,I:81628,J:644653,K:11250,L:11250,M:11250,N:11250,O:11250,P:11250,Q:793781}, 
{A:'13',B:'PI - 2506435: Hotel Comercio (Lima)',C:19028874,D:19028874,E:0,F:0,G:0,H:0,I:125350,J:1038150,K:11250,L:11250,M:11250,N:11250,O:11250,P:11250,Q:1231000}, 
{A:'14',B:'PI - 2508807: I.C. (Nasca y Palpa)',C:23033382,D:23033382,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:48706,M:0,N:438354,O:0,P:0,Q:487060}, 
{A:'15',B:'PI - 2508852: Digitalización del AGN',C:45460184,D:45460184,E:0,F:0,G:0,H:0,I:0,J:0,K:237724,L:45453,M:45453,N:1775897,O:45453,P:45453,Q:2195432}, 
{A:'16',B:'PI - 2497434: Parque Bicentenario - Ancash',C:13578390,D:13578390,E:0,F:0,G:0,H:0,I:0,J:81758,K:0,L:735821,M:0,N:0,O:0,P:0,Q:817579}, 
{A:'17',B:'PI - 2499858: Parque Bicentenario - Piura',C:20882268,D:20882268,E:0,F:0,G:0,H:0,I:0,J:56848,K:0,L:511629,M:0,N:0,O:0,P:0,Q:568477}, 
{A:'18',B:'PI - 2499997: Parque Bicentenario - Ayacucho',C:30006600,D:30006600,E:0,F:0,G:0,H:0,I:0,J:30183,K:0,L:271647,M:0,N:0,O:0,P:0,Q:301830}, 
{A:'19',B:'PI - 2498610: Parque Bicentenario - Ucayali',C:14286801,D:14286801,E:0,F:0,G:0,H:0,I:0,J:81758,K:0,L:735821,M:0,N:0,O:0,P:0,Q:817579}, 
{A:'20',B:'PI - 2499914: Parque Bicentenario - Arequipa',C:20297262,D:20297262,E:0,F:0,G:0,H:0,I:0,J:58271,K:0,L:524435,M:0,N:0,O:0,P:0,Q:582706}, 
{A:'21',B:'PI - 2498188: Parque Bicentenario - Lambayeque',C:16932205,D:16932205,E:0,F:0,G:0,H:0,I:0,J:66328,K:0,L:596955,M:0,N:0,O:0,P:0,Q:663283}, 
{A:'22',B:'PI - 2498659: Parque Bicentenario - Loreto',C:17299261,D:17299261,E:0,F:0,G:0,H:0,I:0,J:66236,K:0,L:596124,M:0,N:0,O:0,P:0,Q:662360}, 
{A:'23',B:'PI - 2498268: Parque Bicentenario - Huanuco',C:14831659,D:14831659,E:0,F:0,G:0,H:0,I:0,J:66236,K:0,L:596122,M:0,N:0,O:0,P:0,Q:662358}, 
{A:'24',B:'PI - 2498369: Parque Bicentenario - Apurimac',C:20167137,D:20167137,E:0,F:0,G:0,H:0,I:0,J:56098,K:0,L:504879,M:0,N:0,O:0,P:0,Q:560977}, 
{A:'25',B:'PI - 2499921: Parque Bicentenario - Tumbes',C:11519370,D:11519370,E:0,F:0,G:0,H:0,I:0,J:47424,K:0,L:426818,M:0,N:0,O:0,P:0,Q:474242}, 
{A:'26',B:'PI - 2499859: Parque Bicentenario - Ica',C:14105820,D:14105820,E:0,F:0,G:0,H:0,I:0,J:47424,K:0,L:426818,M:0,N:0,O:0,P:0,Q:474242}, 
{A:'27',B:'PI - 2499288: Parque Bicentenario - Tacna',C:14832555,D:14832555,E:0,F:0,G:0,H:0,I:0,J:47991,K:0,L:431915,M:0,N:0,O:0,P:0,Q:479906}, 
{A:'28',B:'PI - 2498138: Parque Bicentenario - Callao',C:20662540,D:20662540,E:0,F:0,G:0,H:0,I:0,J:67497,K:0,L:607469,M:0,N:0,O:0,P:0,Q:674965}, 
{A:'29',B:'PI - 2498147: Parque Bicentenario - La Libertad',C:14754955,D:14754955,E:0,F:0,G:0,H:0,I:0,J:46540,K:0,L:418857,M:0,N:0,O:0,P:0,Q:465397}, 
{A:'30',B:'PI - 2498275: Parque Bicentenario - Huancavelica',C:15941850,D:15941850,E:0,F:0,G:0,H:0,I:0,J:62470,K:0,L:562227,M:0,N:0,O:0,P:0,Q:624697}, 
{A:'31',B:'PI - 2497468: Parque Bicentenario - Huacho (Lima)',C:15092413,D:15092413,E:0,F:0,G:0,H:0,I:0,J:46540,K:0,L:418856,M:0,N:0,O:0,P:0,Q:465396}, 
{A:'32',B:'PI - 2497656: Parque Bicentenario - Moquegua',C:16332551,D:16332551,E:0,F:0,G:0,H:0,I:0,J:47991,K:0,L:431916,M:0,N:0,O:0,P:0,Q:479907}, 
{A:'33',B:'PI - 2498259: Parque Bicentenario - Pasco',C:14403938,D:14403938,E:0,F:0,G:0,H:0,I:0,J:56806,K:0,L:511251,M:0,N:0,O:0,P:0,Q:568057}, 
{A:'34',B:'PI - 2498370: Parque Bicentenario - Madre De Dios',C:13506354,D:13506354,E:0,F:0,G:0,H:0,I:0,J:66236,K:0,L:596124,M:0,N:0,O:0,P:0,Q:662360}, 
{A:'35',B:'PI - 2505980: Parque Lineal Pachacamaq',C:24126076,D:24126076,E:0,F:0,G:0,H:0,I:0,J:125994,K:0,L:1133945,M:0,N:0,O:0,P:0,Q:1259939}, 
{A:'36',B:'PI - 2509544: Ss Culturales De Interpretación (Lima, Cusco Y Maynas - Loreto)',C:15949615,D:15949615,E:0,F:0,G:0,H:0,I:0,J:57851,K:18143,L:375520,M:18143,N:18143,O:18143,P:18143,Q:524086}, 
{A:'37',B:'PI - 2523322: Interpr. Cultural - Teatro Municipal De Piura (Piura)',C:39362400,D:39362400,E:0,F:0,G:0,H:0,I:0,J:185534,K:22552,L:1489386,M:22552,N:22552,O:22552,P:22552,Q:1787680}, 
{A:'38',B:'ESTUDIOS DE PREINVERSIÓN',C:0,D:0,E:0,F:0,G:0,H:323000,I:0,J:855500,K:72000,L:807500,M:646000,N:0,O:646000,P:0,Q:3350000}, 
{A:'Total',B:'',C:1323028751,D:813823994,E:5636090,F:150182,G:2808103,H:2219453,I:2747139,J:5480655,K:2900639,L:15976307,M:2454058,N:3976857,O:2454058,P:1808058,Q:48611599} 


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