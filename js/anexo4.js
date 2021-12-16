class BuscarAnexo {
    constructor() {
        this.inversiones = [
            {CUI:'2151618',Inversión:'Sitio Arqueológico de Kuelap (Amazonas)',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:9584584,Costo_por_componente:1450000,Enero:0,Febrero:1450000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2151618',Inversión:'Sitio Arqueológico de Kuelap (Amazonas)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:0,Costo_por_componente:7624584,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:7624584,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2151618',Inversión:'Sitio Arqueológico de Kuelap (Amazonas)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:510000,Enero:0,Febrero:0,Marzo:51000,Abril:51000,Mayo:51000,Junio:51000,Julio:51000,Agosto:51000,Septiembre:51000,Octubre:51000,Noviembre:51000,Diciembre:51000},
{CUI:'2430924',Inversión:'Huaca 26 (Lima)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:331220,Costo_por_componente:331220,Enero:0,Febrero:0,Marzo:0,Abril:331220,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2430936',Inversión:'Huaca Caudivilla',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:266518,Costo_por_componente:266518,Enero:0,Febrero:266518,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2131495',Inversión:'Lugar de la Memoria (LUM)',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:1200000,Costo_por_componente:1000000,Enero:0,Febrero:0,Marzo:0,Abril:1000000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2131495',Inversión:'Lugar de la Memoria (LUM)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:200000,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:33333,Agosto:33333,Septiembre:33333,Octubre:33333,Noviembre:33333,Diciembre:33333},
{CUI:'2251549',Inversión:'Museo Nacional del Perú (MUNA)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:18786967,Costo_por_componente:17250000,Enero:17250000,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2251549',Inversión:'Museo Nacional del Perú (MUNA)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:1536967,Enero:0,Febrero:0,Marzo:0,Abril:170774,Mayo:170774,Junio:170774,Julio:170774,Agosto:170774,Septiembre:170774,Octubre:170774,Noviembre:170774,Diciembre:170774},
{CUI:'2446487',Inversión:'Ceviche',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:550000,Costo_por_componente:550000,Enero:550000,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2456689',Inversión:'Batalla de Ayacucho (obelisco)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:2128110,Costo_por_componente:2128110,Enero:0,Febrero:2128110,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2456690',Inversión:'Batalla de Junín',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:1491346,Costo_por_componente:1491346,Enero:0,Febrero:1491346,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2469016',Inversión:'Balcón de Huaura',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:3399349,Costo_por_componente:3189349,Enero:3189349,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2469016',Inversión:'Balcón de Huaura',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:210000,Enero:0,Febrero:0,Marzo:21000,Abril:21000,Mayo:21000,Junio:21000,Julio:21000,Agosto:21000,Septiembre:21000,Octubre:21000,Noviembre:21000,Diciembre:21000},
{CUI:'2233917',Inversión:'Archivo General de la Nación (AGN)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:39900000,Costo_por_componente:20000000,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:20000000,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2233917',Inversión:'Archivo General de la Nación (AGN)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:2000000,Enero:0,Febrero:0,Marzo:200000,Abril:200000,Mayo:200000,Junio:200000,Julio:200000,Agosto:200000,Septiembre:200000,Octubre:200000,Noviembre:200000,Diciembre:200000},
{CUI:'2233917',Inversión:'Archivo General de la Nación (AGN)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:8900000,Enero:0,Febrero:0,Marzo:890000,Abril:890000,Mayo:890000,Junio:890000,Julio:890000,Agosto:890000,Septiembre:890000,Octubre:890000,Noviembre:890000,Diciembre:890000},
{CUI:'2233917',Inversión:'Archivo General de la Nación (AGN)',Detalle:'COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS',Clasificador:'2.6.2.2.4.5',Costo_Anual:0,Costo_por_componente:9000000,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:9000000,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2320691',Inversión:'Museo Nacional de AAH (Pueblo Libre)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:73266000,Costo_por_componente:52500000,Enero:0,Febrero:0,Marzo:0,Abril:52500000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2320691',Inversión:'Museo Nacional de AAH (Pueblo Libre)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:2700000,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:385714,Julio:385714,Agosto:385714,Septiembre:385714,Octubre:385714,Noviembre:385714,Diciembre:385714},
{CUI:'2320691',Inversión:'Museo Nacional de AAH (Pueblo Libre)',Detalle:'COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS',Clasificador:'2.6.2.3.7.5',Costo_Anual:0,Costo_por_componente:4166000,Enero:0,Febrero:0,Marzo:0,Abril:4166000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2320691',Inversión:'Museo Nacional de AAH (Pueblo Libre)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.2.4.2',Costo_Anual:0,Costo_por_componente:13900000,Enero:0,Febrero:0,Marzo:0,Abril:13900000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2413312',Inversión:'Necrópolis de Ancón',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:1213764,Costo_por_componente:250000,Enero:0,Febrero:250000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2413312',Inversión:'Necrópolis de Ancón',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:0,Costo_por_componente:952514,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:952514,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2413312',Inversión:'Necrópolis de Ancón',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:11250,Enero:0,Febrero:0,Marzo:0,Abril:1250,Mayo:1250,Junio:1250,Julio:1250,Agosto:1250,Septiembre:1250,Octubre:1250,Noviembre:1250,Diciembre:1250},
{CUI:'2491061',Inversión:'Casa Cultural Tupac Amaru (Cusco)',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:987500,Costo_por_componente:187500,Enero:0,Febrero:187500,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2491061',Inversión:'Casa Cultural Tupac Amaru (Cusco)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:0,Costo_por_componente:800000,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:800000,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2497501',Inversión:'Mateo Salao (Lima)',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:670000,Costo_por_componente:300000,Enero:0,Febrero:300000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2497501',Inversión:'Mateo Salao (Lima)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:0,Costo_por_componente:370000,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:370000,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2505984',Inversión:'Gran Biblioteca Pública (Lima)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:9919793,Costo_por_componente:9269430,Enero:0,Febrero:0,Marzo:0,Abril:9269430,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2505984',Inversión:'Gran Biblioteca Pública (Lima)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:650363,Enero:0,Febrero:59124,Marzo:59124,Abril:59124,Mayo:59124,Junio:59124,Julio:59124,Agosto:59124,Septiembre:59124,Octubre:59124,Noviembre:59124,Diciembre:59124},
{CUI:'2506071',Inversión:'Casa Hacienda Punchauca (Lima)',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:3389381,Costo_por_componente:453781,Enero:0,Febrero:453781,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2506071',Inversión:'Casa Hacienda Punchauca (Lima)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:0,Costo_por_componente:2799448,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:2799448,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2506071',Inversión:'Casa Hacienda Punchauca (Lima)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:136152,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:17019,Junio:17019,Julio:17019,Agosto:17019,Septiembre:17019,Octubre:17019,Noviembre:17019,Diciembre:17019},
{CUI:'2506435',Inversión:'Hotel Comercio (Lima)',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:4733439,Costo_por_componente:1007522,Enero:0,Febrero:0,Marzo:1007522,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2506435',Inversión:'Hotel Comercio (Lima)',Detalle:'COSTO DE CONSTRUCCION POR CONTRATA',Clasificador:'2.6.2.3.7.2',Costo_Anual:0,Costo_por_componente:3575917,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:3575917,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2506435',Inversión:'Hotel Comercio (Lima)',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:150000,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:18750,Junio:18750,Julio:18750,Agosto:18750,Septiembre:18750,Octubre:18750,Noviembre:18750,Diciembre:18750},
{CUI:'2508807',Inversión:'I.C. (Nasca y Palpa)',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:487060,Costo_por_componente:487060,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:487060,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2508852',Inversión:'Digitalización del AGN',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:2195432,Costo_por_componente:1922716,Enero:0,Febrero:0,Marzo:1922716,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2508852',Inversión:'Digitalización del AGN',Detalle:'GASTO POR LA CONTRATACION DE SERVICIOS',Clasificador:'2.6.8.1.4.3',Costo_Anual:0,Costo_por_componente:272716,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:45453,Agosto:45453,Septiembre:45453,Octubre:45453,Noviembre:45453,Diciembre:45453},
{CUI:'6 - PB',Inversión:'Parques Bicentenario (6)',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:78665009,Costo_por_componente:78665009,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:78665009,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498277',Inversión:'Parque Bicentenario  - Puno',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:15966775,Costo_por_componente:15966775,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:15966775,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498554',Inversión:'Parque Bicentenario - San Martin',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:11864507,Costo_por_componente:11864507,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:11864507,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2499924',Inversión:'Parque Bicentenario - Junin',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:13034073,Costo_por_componente:13034073,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:13034073,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498131',Inversión:'Parque Bicentenario - Cajamarca',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:12649944,Costo_por_componente:12649944,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:12649944,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498378',Inversión:'Parque Bicentenario - Cusco',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:12361388,Costo_por_componente:12361388,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:12361388,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498352',Inversión:'Parque Bicentenario - Amazonas',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:12788322,Costo_por_componente:12788322,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:12788322,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'19 - PB',Inversión:'Parques Bicentenario (19)',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:11006318,Costo_por_componente:11006318,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:11006318,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2497434',Inversión:'Parque Bicentenario - Ancash',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:817579,Costo_por_componente:817579,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:817579,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2499858',Inversión:'Parque Bicentenario - Piura',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:568477,Costo_por_componente:568477,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:568477,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2499997',Inversión:'Parque Bicentenario - Ayacucho',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:301830,Costo_por_componente:301830,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:301830,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498610',Inversión:'Parque Bicentenario - Ucayali',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:817579,Costo_por_componente:817579,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:817579,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2499914',Inversión:'Parque Bicentenario - Arequipa',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:582706,Costo_por_componente:582706,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:582706,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498188',Inversión:'Parque Bicentenario - Lambayeque',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:663283,Costo_por_componente:663283,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:663283,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498659',Inversión:'Parque Bicentenario - Loreto',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:662360,Costo_por_componente:662360,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:662360,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498268',Inversión:'Parque Bicentenario - Huanuco',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:662358,Costo_por_componente:662358,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:662358,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498369',Inversión:'Parque Bicentenario - Apurimac',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:560977,Costo_por_componente:560977,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:560977,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2499921',Inversión:'Parque Bicentenario - Tumbes',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:474242,Costo_por_componente:474242,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:474242,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2499859',Inversión:'Parque Bicentenario - Ica',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:474242,Costo_por_componente:474242,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:474242,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2499288',Inversión:'Parque Bicentenario - Tacna',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:479906,Costo_por_componente:479906,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:479906,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498138',Inversión:'Parque Bicentenario - Callao',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:674965,Costo_por_componente:674965,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:674965,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498147',Inversión:'Parque Bicentenario - La Libertad',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:465397,Costo_por_componente:465397,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:465397,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498275',Inversión:'Parque Bicentenario - Huancavelica',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:624697,Costo_por_componente:624697,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:624697,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2497468',Inversión:'Parque Bicentenario - Huacho (Lima)',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:465396,Costo_por_componente:465396,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:465396,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2497656',Inversión:'Parque Bicentenario - Moquegua',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:479907,Costo_por_componente:479907,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:479907,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498259',Inversión:'Parque Bicentenario - Pasco',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:568057,Costo_por_componente:568057,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:568057,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2498370',Inversión:'Parque Bicentenario - Madre De Dios',Detalle:'A OTROS ORGANISMOS INTERNACIONALES',Clasificador:'2.4.2.2.1.9.9',Costo_Anual:662360,Costo_por_componente:662360,Enero:0,Febrero:0,Marzo:0,Abril:0,Mayo:662360,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'2505980',Inversión:'Parque Lineal Pachacamaq',Detalle:'ELABORACION DE EXPEDIENTES TECNICOS',Clasificador:'2.6.8.1.3.1',Costo_Anual:1259939,Costo_por_componente:1259939,Enero:0,Febrero:0,Marzo:1259939,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'41457',Inversión:'Interpr. Cultural - Museo Amazónico  (Nauta - Loreto)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:330000,Costo_por_componente:330000,Enero:0,Febrero:330000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'39569',Inversión:'Interpr. Cultural - Complejo Arqueo-Astronómico Chankillo  (Casma - Ancash)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:330000,Costo_por_componente:330000,Enero:0,Febrero:330000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'39573',Inversión:'Interpr. Cultural - Monumento Chavín De Huantar  (Chavin De Huantar - Ancash)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:325000,Costo_por_componente:325000,Enero:0,Febrero:325000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'40405',Inversión:'Centro Histórico De Tacna (Tacna)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:325000,Costo_por_componente:325000,Enero:0,Febrero:325000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'40409',Inversión:'Centro Histórico De Piura  (Piura)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:320000,Costo_por_componente:320000,Enero:0,Febrero:320000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'40391',Inversión:'Centro Histórico De Cajamarca (Cajamarca)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:320000,Costo_por_componente:320000,Enero:0,Febrero:320000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'40408',Inversión:'Centro Histórico De Moquegua (Moquegua)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:320000,Costo_por_componente:320000,Enero:0,Febrero:320000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'39481',Inversión:'Interpr. Cultural - Museo Hipólito Unanue (Ayacucho)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:320000,Costo_por_componente:320000,Enero:0,Febrero:320000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'41350',Inversión:'Prog. Conmemoración Bicentenario De La Independencia (Lima)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:320000,Costo_por_componente:320000,Enero:0,Febrero:320000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'42499',Inversión:'Tambo Inga (Puente Piedra - Lima)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:320000,Costo_por_componente:320000,Enero:0,Febrero:320000,Marzo:0,Abril:0,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'39538',Inversión:'Interpr. Cultural - Museo De Sitio De Narihualá',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:20000,Costo_por_componente:20000,Enero:0,Febrero:0,Marzo:0,Abril:20000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'44418',Inversión:'Interpr. Cultural - Museo Mirador Cerro San Cristobal (Rimac - Lima)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:20000,Costo_por_componente:20000,Enero:0,Febrero:0,Marzo:0,Abril:20000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'39528',Inversión:'Interpr. Cultural - Museo De Sitio Huaca Pucllana',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:20000,Costo_por_componente:20000,Enero:0,Febrero:0,Marzo:0,Abril:20000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'39539',Inversión:'Interpr. Cultural - Museo Departamental San Martín',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:20000,Costo_por_componente:20000,Enero:0,Febrero:0,Marzo:0,Abril:20000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'39503',Inversión:'Interpr. Cultural - Museo Arturo Jiménez Borja (Puruchuco)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:20000,Costo_por_componente:20000,Enero:0,Febrero:0,Marzo:0,Abril:20000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'44413',Inversión:'Museo De Sitio Wari (Pacaycasa - Ayacucho)',Detalle:'ESTUDIO DE PREINVERSION',Clasificador:'2.6.8.1.2.1',Costo_Anual:20000,Costo_por_componente:20000,Enero:0,Febrero:0,Marzo:0,Abril:20000,Mayo:0,Junio:0,Julio:0,Agosto:0,Septiembre:0,Octubre:0,Noviembre:0,Diciembre:0},
{CUI:'TOTAL',Inversión:'',Detalle:'',Clasificador:'',Costo_Anual:268781729,Costo_por_componente:268781729,Enero:20989349,Febrero:9816379,Marzo:5411301,Abril:82679798,Mayo:50499393,Junio:1814631,Julio:8268782,Agosto:81728426,Septiembre:1893417,Octubre:1893417,Noviembre:1893417,Diciembre:1893417},


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
            fila.insertCell(0).innerHTML = inversion.CUI;
            fila.insertCell(1).innerHTML = inversion.Inversión;
            fila.insertCell(2).innerHTML = inversion.Detalle;
            fila.insertCell(3).innerHTML = inversion.Clasificador;
            fila.insertCell(4).innerHTML = inversion.Costo_Anual.toLocaleString('ENG');
            fila.insertCell(5).innerHTML = inversion.Costo_por_componente.toLocaleString('ENG');
            fila.insertCell(6).innerHTML = inversion.Enero.toLocaleString('ENG');
            fila.insertCell(7).innerHTML = inversion.Febrero.toLocaleString('ENG');
            fila.insertCell(8).innerHTML = inversion.Marzo.toLocaleString('ENG');
            fila.insertCell(9).innerHTML = inversion.Abril.toLocaleString('ENG');
            fila.insertCell(10).innerHTML = inversion.Mayo.toLocaleString('ENG');
            fila.insertCell(11).innerHTML = inversion.Junio.toLocaleString('ENG');
            fila.insertCell(12).innerHTML = inversion.Julio.toLocaleString('ENG');
            fila.insertCell(13).innerHTML = inversion.Agosto.toLocaleString('ENG');
            fila.insertCell(14).innerHTML = inversion.Septiembre.toLocaleString('ENG');
            fila.insertCell(15).innerHTML = inversion.Octubre.toLocaleString('ENG');
            fila.insertCell(16).innerHTML = inversion.Noviembre.toLocaleString('ENG');
            fila.insertCell(17).innerHTML = inversion.Diciembre.toLocaleString('ENG');
              
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