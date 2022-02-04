class BuscarAnexo {
  constructor() {
    this.inversiones = [
      { A: 'PROGRAMACIÓN DE INVERSIONES QUE ACTUALMENTE SE ENCUENTRAN EN EL PIM 2022', B: '', C: '', D: '-', E: '-', F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '1', B: '2251549', C: 'Museo Nacional del Perú (MUNA)', D: 'MOBILIARIO', E: '2.6.3.2.1.2', F: 17000000, G: 11000000, H: 0, I: 0, J: 0, K: 3300000, L: 0, M: 1100000, N: 1100000, O: 1100000, P: 1100000, Q: 1100000, R: 1100000, S: 1100000, },
      { A: '1', B: '2251549', C: 'Museo Nacional del Perú (MUNA)', D: 'MOBILIARIO DE CULTURA Y ARTE', E: '2.6.3.2.6.2', F: 17000000, G: 6000000, H: 0, I: 0, J: 0, K: 1800000, L: 0, M: 600000, N: 600000, O: 600000, P: 600000, Q: 600000, R: 600000, S: 600000, },
      { A: '2', B: '2233917', C: 'Archivo General de la Nación (AGN)', D: 'COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS', E: '2.6.2.2.4.5', F: 2700000, G: 2700000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 810000, P: 0, Q: 630000, R: 630000, S: 630000, },
      { A: '3', B: '2446487', C: 'Ceviche', D: 'COSTO DE CONSTRUCCION POR CONTRATA', E: '2.6.2.3.7.2', F: 452092, G: 452092, H: 0, I: 0, J: 0, K: 0, L: 0, M: 135628, N: 0, O: 63293, P: 63293, Q: 63293, R: 63293, S: 63293, },
      { A: 'PROGRAMACIÓN DE NUEVAS INVERSIONES', B: '', C: '', D: '-', E: '-', F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '4', B: '2151618', C: 'Sitio Arqueológico de Kuelap (Amazonas)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 1712056, G: 592056, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 592056, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '4', B: '2151619', C: 'Sitio Arqueológico de Kuelap (Amazonas)', D: 'COSTO DE CONSTRUCCION POR CONTRATA', E: '2.6.2.3.7.2', F: 1712056, G: 1000000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 1000000, },
      { A: '4', B: '2151620', C: 'Sitio Arqueológico de Kuelap (Amazonas)', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 1712056, G: 120000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 20000, O: 20000, P: 20000, Q: 20000, R: 20000, S: 20000, },
      { A: '5', B: '2430936', C: 'Huaca Caudivilla', D: 'COSTO DE CONSTRUCCION POR CONTRATA', E: '2.6.2.3.7.2', F: 277688, G: 254570, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 76371, O: 0, P: 89100, Q: 89100, R: 0, S: 0, },
      { A: '5', B: '2430937', C: 'Huaca Caudivilla', D: 'COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS', E: '2.6.2.3.7.5', F: 277688, G: 23118, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 6935, O: 0, P: 8091, Q: 8091, R: 0, S: 0, },
      { A: '6', B: '2131495', C: 'Lugar de la Memoria (LUM)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 350000, G: 300000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 30000, P: 0, Q: 0, R: 270000, S: 0, },
      { A: '6', B: '2131496', C: 'Lugar de la Memoria (LUM)', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 350000, G: 50000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 10000, P: 10000, Q: 10000, R: 10000, S: 10000, },
      { A: '7', B: '2469016', C: 'Balcón de Huaura', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 4720000, G: 420000, H: 0, I: 0, J: 0, K: 0, L: 42000, M: 0, N: 0, O: 378000, P: 0, Q: 0, R: 0, S: 0, },
      { A: '7', B: '2469017', C: 'Balcón de Huaura', D: 'COSTO DE CONSTRUCCION POR CONTRATA', E: '2.6.2.3.7.2', F: 4720000, G: 4300000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 1290000, S: 3010000, },
      { A: '8', B: '2413312', C: 'Necrópolis de Ancón', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 280000, G: 250000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 25000, P: 0, Q: 0, R: 225000, S: 0, },
      { A: '8', B: '2413313', C: 'Necrópolis de Ancón', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 280000, G: 30000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 6000, P: 6000, Q: 6000, R: 6000, S: 6000, },
      { A: '9', B: '2497501', C: 'Mateo Salao (Lima)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 1016585, G: 300000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 300000, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '9', B: '2497502', C: 'Mateo Salao (Lima)', D: 'COSTO DE CONSTRUCCION POR CONTRATA', E: '2.6.2.3.7.2', F: 1016585, G: 716585, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 214976, O: 0, P: 125402, Q: 125402, R: 125402, S: 125402, },
      { A: '10', B: '2505984', C: 'Gran Biblioteca Pública (Lima)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 1380000, G: 1320000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 132000, O: 0, P: 0, Q: 0, R: 0, S: 1188000, },
      { A: '10', B: '2505985', C: 'Gran Biblioteca Pública (Lima)', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 1380000, G: 60000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 10000, O: 10000, P: 10000, Q: 10000, R: 10000, S: 10000, },
      { A: '11', B: '2506071', C: 'Casa Hacienda Punchauca (Lima)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 543781, G: 503781, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 50378, P: 0, Q: 0, R: 0, S: 453403, },
      { A: '11', B: '2506072', C: 'Casa Hacienda Punchauca (Lima)', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 543781, G: 40000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 8000, P: 8000, Q: 8000, R: 8000, S: 8000, },
      { A: '12', B: '2506435', C: 'Hotel Comercio (Lima)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 1231000, G: 1141000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 114100, O: 0, P: 0, Q: 0, R: 0, S: 1026900, },
      { A: '12', B: '2506436', C: 'Hotel Comercio (Lima)', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 1231000, G: 90000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 15000, O: 15000, P: 15000, Q: 15000, R: 15000, S: 15000, },
      { A: '13', B: '2508807', C: 'I.C. (Nasca y Palpa)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 487060, G: 487060, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 48706, P: 0, Q: 0, R: 0, S: 438354, },
      { A: '14', B: '2508852', C: 'Digitalización del AGN', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 1952716, G: 1922716, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 192272, Q: 0, R: 0, S: 1730444, },
      { A: '14', B: '2508853', C: 'Digitalización del AGN', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 1952716, G: 30000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 7500, Q: 7500, R: 7500, S: 7500, },
      { A: '15', B: '2505980', C: 'Parque Lineal Pachacamaq', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 1259939, G: 1259939, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 125994, Q: 0, R: 0, S: 1133945, },
      { A: '16', B: '2509544', C: 'IPELI (Lima, Cusco  y Loreto)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 477086, G: 397086, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 39709, P: 0, Q: 0, R: 0, S: 357377, },
      { A: '16', B: '2509545', C: 'IPELI (Lima, Cusco  y Loreto)', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 477086, G: 80000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 16000, P: 16000, Q: 16000, R: 16000, S: 16000, },
      { A: '17', B: '2523322', C: 'Interpr. Cultural - Teatro Municipal De Piura (Piura)', D: 'ELABORACION DE EXPEDIENTES TECNICOS', E: '2.6.8.1.3.1', F: 1709816, G: 1629816, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 162982, P: 0, Q: 0, R: 0, S: 1466834, },
      { A: '17', B: '2523323', C: 'Interpr. Cultural - Teatro Municipal De Piura (Piura)', D: 'GASTO POR LA CONTRATACION DE SERVICIOS', E: '2.6.8.1.4.3', F: 1709816, G: 80000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 16000, P: 16000, Q: 16000, R: 16000, S: 16000, },
      { A: '-', B: '19 códigos de idea registrados', C: 'Parques Bicentenario (19)', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.8', F: 19832129, G: 19832129, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 19832129, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '18', B: '2497434', C: 'Parque Bicentenario - Ancash', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1237401, G: 1237401, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1237401, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '19', B: '2499858', C: 'Parque Bicentenario - Piura', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 947702, G: 947702, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 947702, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '20', B: '2499997', C: 'Parque Bicentenario - Ayacucho', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 530439, G: 530439, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 530439, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '21', B: '2498610', C: 'Parque Bicentenario - Ucayali', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1140582, G: 1140582, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1140582, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '22', B: '2499914', C: 'Parque Bicentenario - Arequipa', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 969509, G: 969509, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 969509, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '23', B: '2498188', C: 'Parque Bicentenario - Lambayeque', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1008221, G: 1008221, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1008221, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '24', B: '2498659', C: 'Parque Bicentenario - Loreto', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1237401, G: 1237401, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1237401, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '25', B: '2498268', C: 'Parque Bicentenario - Huanuco', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1237400, G: 1237400, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1237400, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '26', B: '2498369', C: 'Parque Bicentenario - Apurimac', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1081272, G: 1081272, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1081272, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '27', B: '2499921', C: 'Parque Bicentenario - Tumbes', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 947702, G: 947702, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 947702, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '28', B: '2499859', C: 'Parque Bicentenario - Ica', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 947702, G: 947702, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 947702, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '29', B: '2499288', C: 'Parque Bicentenario - Tacna', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 956424, G: 956424, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 956424, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '30', B: '2498138', C: 'Parque Bicentenario - Callao', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1256814, G: 1256814, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1256814, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '31', B: '2498147', C: 'Parque Bicentenario - La Libertad', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 934080, G: 934080, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 934080, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '32', B: '2498275', C: 'Parque Bicentenario - Huancavelica', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1179401, G: 1179401, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1179401, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '33', B: '2497468', C: 'Parque Bicentenario - Huacho (Lima)', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 934079, G: 934079, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 934079, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '34', B: '2497656', C: 'Parque Bicentenario - Moquegua', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 956424, G: 956424, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 956424, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '35', B: '2498259', C: 'Parque Bicentenario - Pasco', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1092175, G: 1092175, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1092175, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '36', B: '2498370', C: 'Parque Bicentenario - Madre De Dios', D: 'A OTROS ORGANISMOS INTERNACIONALES', E: '2.4.2.2.1.9.9', F: 1237401, G: 1237401, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 1237401, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: 'PROGRAMACIÓN DE ESTUDIOS DE PREINVERSIÓN', B: '', C: '', D: '-', E: '-', F: 1237401, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '1', B: '41457', C: 'Interpr. Cultural - Museo Amazónico  (Nauta - Loreto)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 330000, G: 330000, H: 0, I: 0, J: 0, K: 33000, L: 0, M: 82500, N: 0, O: 82500, P: 66000, Q: 0, R: 66000, S: 0, },
      { A: '2', B: '39569', C: 'Interpr. Cultural - Complejo Arqueo-Astronómico Chankillo  (Casma - Ancash)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 330000, G: 330000, H: 0, I: 0, J: 0, K: 33000, L: 0, M: 82500, N: 0, O: 82500, P: 66000, Q: 0, R: 66000, S: 0, },
      { A: '3', B: '39573', C: 'Interpr. Cultural - Monumento Chavín De Huantar  (Chavin De Huantar - Ancash)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 325000, G: 325000, H: 0, I: 0, J: 0, K: 32500, L: 0, M: 81250, N: 0, O: 81250, P: 65000, Q: 0, R: 65000, S: 0, },
      { A: '4', B: '40405', C: 'Centro Histórico De Tacna (Tacna)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 325000, G: 325000, H: 0, I: 0, J: 0, K: 32500, L: 0, M: 81250, N: 0, O: 81250, P: 65000, Q: 0, R: 65000, S: 0, },
      { A: '5', B: '40409', C: 'Centro Histórico De Piura  (Piura)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 320000, G: 320000, H: 0, I: 0, J: 0, K: 32000, L: 0, M: 80000, N: 0, O: 80000, P: 64000, Q: 0, R: 64000, S: 0, },
      { A: '6', B: '40391', C: 'Centro Histórico De Cajamarca (Cajamarca)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 320000, G: 320000, H: 0, I: 0, J: 0, K: 32000, L: 0, M: 80000, N: 0, O: 80000, P: 64000, Q: 0, R: 64000, S: 0, },
      { A: '7', B: '40408', C: 'Centro Histórico De Moquegua (Moquegua)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 320000, G: 320000, H: 0, I: 0, J: 0, K: 32000, L: 0, M: 80000, N: 0, O: 80000, P: 64000, Q: 0, R: 64000, S: 0, },
      { A: '8', B: '39481', C: 'Interpr. Cultural - Museo Hipólito Unanue (Ayacucho)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 320000, G: 320000, H: 0, I: 0, J: 0, K: 32000, L: 0, M: 80000, N: 0, O: 80000, P: 64000, Q: 0, R: 64000, S: 0, },
      { A: '9', B: '41350', C: 'Prog. Conmemoración Bicentenario De La Independencia (Lima)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 320000, G: 320000, H: 0, I: 0, J: 0, K: 32000, L: 0, M: 80000, N: 0, O: 80000, P: 64000, Q: 0, R: 64000, S: 0, },
      { A: '10', B: '42499', C: 'Tambo Inga (Puente Piedra - Lima)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 320000, G: 320000, H: 0, I: 0, J: 0, K: 32000, L: 0, M: 80000, N: 0, O: 80000, P: 64000, Q: 0, R: 64000, S: 0, },
      { A: '11', B: '39538', C: 'Interpr. Cultural - Museo De Sitio De Narihualá', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 20000, G: 20000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 8000, N: 12000, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '12', B: '44418', C: 'Interpr. Cultural - Museo Mirador Cerro San Cristobal (Rimac - Lima)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 20000, G: 20000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 8000, N: 12000, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '13', B: '39528', C: 'Interpr. Cultural - Museo De Sitio Huaca Pucllana', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 20000, G: 20000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 8000, N: 12000, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '14', B: '39539', C: 'Interpr. Cultural - Museo Departamental San Martín', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 20000, G: 20000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 8000, N: 12000, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '15', B: '39503', C: 'Interpr. Cultural - Museo Arturo Jiménez Borja (Puruchuco)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 20000, G: 20000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 8000, N: 12000, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: '16', B: '44413', C: 'Museo De Sitio Wari (Pacaycasa - Ayacucho)', D: 'ESTUDIO DE PREINVERSION', E: '2.6.8.1.2.1', F: 20000, G: 20000, H: 0, I: 0, J: 0, K: 0, L: 0, M: 8000, N: 12000, O: 0, P: 0, Q: 0, R: 0, S: 0, },
      { A: 'TOTAL PREINVERSIÓN', B: '', C: '', D: '-', E: '-', F: 60731948, G: 60731948, H: 0, I: 0, J: 0, K: 5423000, L: 42000, M: 2991128, N: 22785567, O: 4216567, P: 3058652, Q: 2724386, R: 5058195, S: 14432453, },



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
            fila.insertCell(17).innerHTML = inversion.R.toLocaleString('ENG');
            fila.insertCell(18).innerHTML = inversion.S.toLocaleString('ENG');

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