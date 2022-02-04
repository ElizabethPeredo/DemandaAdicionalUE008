class BuscarAnexo {
    constructor() {
        this.inversiones = [
            { A: '0', B: '2001621', C: '', D: 'Estudios de Preinversión', E: 'NO', F: 0, G: 0, H: 1000000, I: 1795000, J: '', K: '-', L: '-' },
            { A: '1', B: '2430939', C: '', D: 'Huaca Sauce', E: 'NO', F: 488832, G: 131173, H: 0, I: 316354, J: 'IOARR', K: 'EJECUCIÓN', L: '8. En liquidación o cierre' },
            { A: '2', B: '2475770', C: '', D: 'Gestión UE-0008', E: 'SI', F: 2666912, G: 1859294, H: 0, I: 101301, J: 'IOARR', K: 'EJECUCIÓN', L: '8. En liquidación o cierre' },
            { A: '3', B: '2430949', C: '', D: 'Huaca Huerta Santa Rosa', E: 'NO', F: 158136, G: 3000, H: 0, I: 155136, J: 'IOARR', K: '-', L: '8. En liquidación o cierre' },
            { A: '4', B: '2151618', C: '', D: 'Sitio Arqueológico de Kuelap (Amazonas)', E: 'NO', F: 15608963.21, G: 387870, H: 0, I: 3656540, J: 'PI', K: '-', L: '7. En ejecución física' },
            { A: '5', B: '2430924', C: '', D: 'Huaca 26 (Lima)', E: 'NO', F: 510861, G: 2500, H: 0, I: 508361, J: 'IOARR', K: '-', L: '7. En ejecución física' },
            { A: '6', B: '2430936', C: '', D: 'Huaca Caudivilla', E: 'NO', F: 269018, G: 2500, H: 0, I: 266518, J: 'IOARR', K: '-', L: '7. En ejecución física' },
            { A: '7', B: '2131495', C: '', D: 'Lugar de la Memoria (LUM)', E: 'NO', F: 30802474, G: 27401690, H: 0, I: 806156, J: 'PI', K: 'EJECUCIÓN', L: '7. En ejecución física' },
            { A: '8', B: '2230368', C: '', D: 'Sitio Arqueológico de Wari (Huamanga)', E: 'SI', F: 9758723, G: 4807329, H: 0, I: 270000, J: 'PI', K: 'EJECUCIÓN', L: '7. En ejecución física' },
            { A: '9', B: '2251549', C: '', D: 'Museo Nacional del Perú (MUNA)', E: 'SI', F: 528326175, G: 484071966, H: 30263510, I: 30263510, J: 'PI', K: 'EJECUCIÓN', L: '7. En ejecución física' },
            { A: '10', B: '2446487', C: '', D: 'Ceviche', E: 'SI', F: 2182744, G: 191801, H: 679212, I: 679212, J: 'PI', K: 'EJECUCIÓN', L: '7. En ejecución física' },
            { A: '11', B: '2456689', C: '', D: 'Batalla de Ayacucho (obelisco)', E: 'SI', F: 2665834, G: 236604, H: 533167, I: 533167, J: 'IOARR', K: 'EJECUCIÓN', L: '5. Con ET / ED aprobado' },
            { A: '12', B: '2456690', C: '', D: 'Batalla de Junín', E: 'SI', F: 2054638, G: 104760, H: 410928, I: 410928, J: 'IOARR', K: 'EJECUCIÓN', L: '5. Con ET / ED aprobado' },
            { A: '13', B: '2469016', C: '', D: 'Balcón de Huaura', E: 'SI', F: 4312125, G: 178869, H: 862425, I: 2242962, J: 'PI', K: 'EJECUCIÓN', L: '5. Con ET / ED aprobado' },
            { A: '14', B: '2233917', C: '', D: 'Archivo General de la Nación (AGN)', E: 'SI', F: 192909328, G: 2825702, H: 28935591, I: 6985610, J: 'PI', K: 'EJECUCIÓN', L: '4. Con ET / ED en elaboración' },
            { A: '15', B: '2320691', C: '', D: 'Museo Nacional de AAH (Pueblo Libre)', E: 'SI', F: 140072241, G: 6081589, H: 20892370, I: 9635481, J: 'PI', K: 'EJECUCIÓN', L: '4. Con ET / ED en elaboración' },
            { A: '16', B: '2413312', C: '', D: 'Necrópolis de Ancón', E: 'NO', F: 3246085, G: 26250, H: 0, I: 250000, J: 'PI', K: 'EJECUCIÓN', L: '3. Aprobado / Viable' },
            { A: '17', B: '2313253', C: '', D: 'Programa Centros Históricos (GyA)', E: 'NO', F: 14726251, G: 0, H: 0, I: 698000, J: 'PROG', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '18', B: '2459183', C: '41475', D: 'Centro Histórico de Rímac (Lima)', E: 'NO', F: 77620620, G: 0, H: 0, I: 1000000, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '19', B: '2459198', C: '41470', D: 'Centro Histórico de Huamanga (Ayacucho)', E: 'NO', F: 75800130, G: 0, H: 0, I: 1000000, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '20', B: '2491061', C: '', D: 'Casa Cultural Tupac Amaru (Cusco)', E: 'SI', F: 1606439, G: 0, H: 0, I: 187500, J: 'IOARR', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '21', B: '2497501', C: '', D: 'Mateo Salao (Lima)', E: 'NO', F: 1016585, G: 0, H: 0, I: 300000, J: 'IOARR', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '22', B: '2505984', C: '41282', D: 'Gran Biblioteca Pública (Lima)', E: 'SI', F: 43696900, G: 0, H: 0, I: 570473, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '23', B: '2506071', C: '41435', D: 'Casa Hacienda Punchauca (Lima)', E: 'SI', F: 12657456, G: 0, H: 0, I: 10000, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '24', B: '2506435', C: '39555', D: 'Hotel Comercio (Lima)', E: 'NO', F: 19028874, G: 0, H: 0, I: 30000, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '25', B: '2508807', C: '41466', D: 'I.C. (Nasca y Palpa)', E: 'SI', F: 23033382, G: 0, H: 0, I: 10000, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '26', B: '2508852', C: '41267', D: 'Digitalización del AGN', E: 'SI', F: 45460184, G: 0, H: 0, I: 10000, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '27', B: '2498277', C: '102699', D: 'Parque Bicentenario  - Puno', E: 'SI', F: 20523920, G: 0, H: 0, I: 1934428, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '28', B: '2498554', C: '102687', D: 'Parque Bicentenario - San Martin', E: 'SI', F: 14623238, G: 0, H: 0, I: 1377995, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '29', B: '2499924', C: '102672', D: 'Parque Bicentenario - Junin', E: 'SI', F: 17091096, G: 0, H: 0, I: 1610127, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '30', B: '2498131', C: '102661', D: 'Parque Bicentenario - Cajamarca', E: 'SI', F: 14205217, G: 0, H: 0, I: 1339307, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '31', B: '2498378', C: '102664', D: 'Parque Bicentenario - Cusco', E: 'SI', F: 21222713, G: 0, H: 0, I: 2000426, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '32', B: '2498352', C: '102649', D: 'Parque Bicentenario - Amazonas', E: 'SI', F: 15651310, G: 0, H: 0, I: 1474717, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '33', B: '2497434', C: '102652', D: 'Parque Bicentenario - Ancash', E: 'SI', F: 13578390, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '34', B: '2499858', C: '102698', D: 'Parque Bicentenario - Piura', E: 'SI', F: 20882268, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '35', B: '2499997', C: '41077', D: 'Parque Bicentenario - Ayacucho', E: 'SI', F: 30006600, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '36', B: '2498610', C: '102671', D: 'Parque Bicentenario - Ucayali', E: 'SI', F: 14286801, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '37', B: '2499914', C: '102660', D: 'Parque Bicentenario - Arequipa', E: 'SI', F: 20297262, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '38', B: '2498188', C: '102677', D: 'Parque Bicentenario - Lambayeque', E: 'SI', F: 16932205, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '39', B: '2498659', C: '102683', D: 'Parque Bicentenario - Loreto', E: 'SI', F: 17299261, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '40', B: '2498268', C: '102668', D: 'Parque Bicentenario - Huanuco', E: 'SI', F: 14831659, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '41', B: '2498369', C: '102659', D: 'Parque Bicentenario - Apurimac', E: 'SI', F: 20167137, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '42', B: '2499921', C: '102678', D: 'Parque Bicentenario - Tumbes', E: 'SI', F: 11519370, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '43', B: '2499859', C: '102669', D: 'Parque Bicentenario - Ica', E: 'SI', F: 14105820, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '44', B: '2499288', C: '102681', D: 'Parque Bicentenario - Tacna', E: 'SI', F: 14832555, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '45', B: '2498138', C: '102662', D: 'Parque Bicentenario - Callao', E: 'SI', F: 20662540, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '46', B: '2498147', C: '102676', D: 'Parque Bicentenario - La Libertad', E: 'SI', F: 14754955, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '47', B: '2498275', C: '102666', D: 'Parque Bicentenario - Huancavelica', E: 'SI', F: 15941850, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '48', B: '2497468', C: '102679', D: 'Parque Bicentenario - Huacho (Lima)', E: 'SI', F: 15092413, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '49', B: '2497656', C: '102690', D: 'Parque Bicentenario - Moquegua', E: 'SI', F: 16332551, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '50', B: '2498259', C: '102692', D: 'Parque Bicentenario - Pasco', E: 'SI', F: 14403938, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '51', B: '2498370', C: '102686', D: 'Parque Bicentenario - Madre De Dios', E: 'SI', F: 13506354, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '52', B: '2505980', C: '41479', D: 'Parque Lineal Pachacamaq', E: 'SI', F: 24126076, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '53', B: '2405534', C: '', D: 'Huaca Los Perales (Santa Anita - Lima)', E: 'NO', F: 6110323, G: 16366, H: 0, I: 0, J: 'PI', K: 'EJECUCIÓN', L: '4. Con ET / ED en elaboración' },
            { A: '54', B: '2523322', C: '102647', D: 'Interpr. Cultural - Teatro Municipal De Piura (Piura)', E: 'SI', F: 39362400, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '55', B: '2515952', C: '41275', D: 'Ballet Folclórico (San Borja - Lima)', E: 'SI', F: 3002311, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '56', B: '2515333', C: '41252', D: 'Ss Culturales (San Borja - Lima)', E: 'NO', F: 17376819, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '57', B: '2509544', C: '41269', D: 'Ss Culturales De Interpretación (Lima, Cusco Y Maynas - Loreto)', E: 'SI', F: 15949615, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '58', B: '2509274', C: '', D: 'S.I. Pueblos Indígenas U Originarios  (San Borja -Lima)', E: 'SI', F: 2205610, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '59', B: '2509233', C: '41348', D: 'Lecturas De La Independencia Y  Republica (San Borja - Lima)', E: 'NO', F: 3936382, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '60', B: '2509214', C: '41341', D: 'Ss De Información Cultural - Afroperuano  (San Borja - Lima)', E: 'SI', F: 2888203, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '61', B: '2505321', C: '39097', D: 'Ss Culturales - Independencia Nacional', E: 'NO', F: 52022807, G: 0, H: 0, I: 0, J: 'PROG', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '62', B: '2488358', C: '102654', D: 'Casa Bicentenario (Lima)', E: 'SI', F: 15823691, G: 74500, H: 0, I: 0, J: 'PI', K: 'EJECUCIÓN', L: '3. Aprobado / Viable' },
            { A: '63', B: '2388450', C: '', D: 'Huaca Mangomarca (San Juan De Lurigancho - Lima)', E: 'NO', F: 11108791, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '64', B: '2348234', C: '', D: 'C.A. Cajamarquilla (Lurigancho- Lima)', E: 'NO', F: 8513765, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '65', B: '2347950', C: '', D: 'Qhapaq Ñan (San Borja - Lima)', E: 'NO', F: 3051192, G: 0, H: 0, I: 0, J: 'PI', K: 'FORMULACIÓN Y EVALUACIÓN', L: '3. Aprobado / Viable' },
            { A: '66', B: '', C: '84245', D: 'C.H. De Barrios Altos (Lima)', E: 'NO', F: 51594019, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '2. En formulación' },
            { A: '67', B: '', C: '84239', D: ' C.H. De Trujillo (Trujillo - La Libertad)', E: 'NO', F: 27270548, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '2. En formulación' },
            { A: '68', B: '', C: '84227', D: 'Mejoramiento Del C.H. De Arequipa (Arequipa)', E: 'NO', F: 16657914, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '2. En formulación' },
            { A: '69', B: '', C: '98070', D: 'Museo Regional De Ica Adolfo Bermudez Jenkins (Ica)', E: 'NO', F: 54765000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '2. En formulación' },
            { A: '70', B: '', C: '102657', D: 'Paseo Cultural Bicentenario Rimac Rimac ( Rimac - Lima)', E: 'SI', F: 95082664, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '2. En formulación' },
            { A: '71', B: '', C: '39580', D: 'Museo Marka Huamachuco  (Huamachuco - La Libertad)', E: 'NO', F: 7000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '72', B: '', C: '39583', D: 'Museo Chan Chan ( Trujillo - La Libertad)', E: 'NO', F: 6800000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '73', B: '', C: '40422', D: 'Ss Ampliación Marginal - Monumentos Arqueológicos', E: 'NO', F: 18020000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '74', B: '', C: '40413', D: 'Interpr. Cultural - Plazas De Centros Históricos', E: 'NO', F: 62000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '75', B: '', C: '146686', D: 'Interpr. Cultural - Museo Caral Caral (Supe - Lima)', E: 'NO', F: 12000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '76', B: '', C: '146685', D: 'Interpr. Cultural - Museo Casa Garcilaso  (Cusco)', E: 'NO', F: 18000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '77', B: '', C: '39538', D: 'Interpr. Cultural - Museo De Sitio De Narihualá', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '78', B: '', C: '146684', D: 'Interpr. Cultural - Museo Tumbas Reales De Sipán  (Chiclayo - Lambayeque)', E: 'NO', F: 18000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '79', B: '', C: '146781', D: 'Ss Intepretación Cultural C.A. Aypate  (Ayabaca - Piura)', E: 'NO', F: 14000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '80', B: '', C: '39497', D: 'Ampliación Marginal Interpr. Cultural - Museo Del Conjunto Monumental Belén', E: 'NO', F: 13000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '81', B: '', C: '146891', D: 'Interpr. Cultural - Monumento Arqueológico Narihualá (Catacaos - Piura)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '82', B: '', C: '39516', D: 'Ampliación Marginal Interpr. Cultural -Museo (Apurímac)', E: 'NO', F: 6000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '83', B: '', C: '40467', D: 'Interpr. Cultural - Batalla De Huamachuco (Huamachuco - La Libertad)', E: 'NO', F: 7600000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '84', B: '', C: '39501', D: 'Interpr. Cultural - Museo Postal Y Filatélico / Casa De La Gastronomía Peruana', E: 'NO', F: 4750000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '85', B: '', C: '39503', D: 'Interpr. Cultural - Museo Arturo Jiménez Borja (Puruchuco)', E: 'NO', F: 4000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '86', B: '', C: '146925', D: 'Interpr. Cultural - (Yauli - Huancavelica)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '87', B: '', C: '42499', D: 'Tambo Inga (Puente Piedra - Lima)', E: 'NO', F: 5400000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '88', B: '', C: '146921', D: 'Interpr. Cultural - Layzón Y Huacaloma  (Cajamarca)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '89', B: '', C: '40380', D: 'Ss Intepretación Cultural - Huacoy  (Carabayllo - Lima)', E: 'NO', F: 7540000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '90', B: '', C: '146914', D: 'Interpr. Cultural - Molloko (Acora - Puno)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '91', B: '', C: '146687', D: 'Interpr. Cultural - Templo Museo "Nuestra Señora De La Asunción"', E: 'NO', F: 6000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '92', B: '', C: '44419', D: 'Interpr. Cultural - Museo De Sitio Huallamarca (San Isidro - Lima)', E: 'NO', F: 481000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '93', B: '', C: '44422', D: 'Interpr. Cultural - Kotosh (Huanuco)', E: 'NO', F: 601600, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '94', B: '', C: '39528', D: 'Interpr. Cultural - Museo De Sitio Huaca Pucllana', E: 'NO', F: 4000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '95', B: '', C: '39481', D: 'Interpr. Cultural - Museo Hipólito Unanue (Ayacucho)', E: 'NO', F: 3000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '96', B: '', C: '39539', D: 'Interpr. Cultural - Museo Departamental San Martín', E: 'NO', F: 3650000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '97', B: '', C: '146653', D: 'Interpr. Cultural - Monumento Histórico Teatro Cajamarca  (Cajamarca)', E: 'NO', F: 14000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '98', B: '', C: '40391', D: 'Centro Histórico De Cajamarca (Cajamarca)', E: 'NO', F: 12000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '99', B: '', C: '146919', D: 'Interpr. Cultural - Ruta Monte Grande (San Ignacio - Cajamarca)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '100', B: '', C: '41457', D: 'Interpr. Cultural - Museo Amazónico  (Nauta - Loreto)', E: 'SI', F: 52002824, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '101', B: '', C: '42496', D: 'Huaycán De Pariachi Vitarte (Ate - Lima)', E: 'NO', F: 5400000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '102', B: '', C: '146904', D: 'Interpr. Cultural - Pampa De Los Perros (Callao)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '103', B: '', C: '146902', D: 'Interpr. Cultural - Garagay  (San Martin De Porres - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '104', B: '', C: '146905', D: 'Interpr. Cultural - Oquendo (Callao)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '105', B: '', C: '40463', D: 'Interpr. Cultural - (San Pablo - Cajamarca)', E: 'NO', F: 7600000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '106', B: '', C: '39557', D: 'Interpr. Cultural - Aduana De Paita (Paita - Piura)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '107', B: '', C: '39531', D: 'Interpr. Cultural - Museo Wari Willka', E: 'NO', F: 5600000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '108', B: '', C: '39491', D: 'Interpr. Cultural - Museo Regional De Casma ¿Max Uhle¿', E: 'NO', F: 13000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '109', B: '', C: '39515', D: 'Interpr. Cultural - Museo Lítico De Pukara', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '110', B: '', C: '39550', D: 'Interpr. Cultural - Cuartel Santa Catalina (Lima)', E: 'NO', F: 3800000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '111', B: '', C: '39565', D: 'Interpr. Cultural - Cementerio Presbítero (Lima)', E: 'NO', F: 16500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '112', B: '', C: '40409', D: 'Centro Histórico De Piura  (Piura)', E: 'NO', F: 12000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '113', B: '', C: '40457', D: 'Interpr. Cultural - Batalla De Chorrillos (Chorrillos - Lima)', E: 'NO', F: 7600000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '114', B: '', C: '146894', D: 'Interpr. Cultural -  -  Bandurria (Huacho - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '115', B: '', C: '146922', D: 'Interpr. Cultural - Conchopata  (Ayacucho)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '116', B: '', C: '146928', D: 'Interpr. Cultural - Shillacoto (Huanuco)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '117', B: '', C: '44418', D: 'Interpr. Cultural - Museo Mirador Cerro San Cristobal (Rimac - Lima)', E: 'NO', F: 805600, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '118', B: '', C: '39511', D: 'Interpr. Cultural - Museo "Daniel Hernández Morillo"  (Huancavelica)', E: 'NO', F: 4500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '119', B: '', C: '97838', D: 'Museo Jose Mariategui (Lima)', E: 'NO', F: 29625000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '120', B: '', C: '146616', D: 'Interpr. Cultural - Apu Tambraico Y Museo Abierto  (Lircay -Huancavelica)', E: 'NO', F: 4500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '121', B: '', C: '40408', D: 'Centro Histórico De Moquegua (Moquegua)', E: 'NO', F: 12000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '122', B: '', C: '40427', D: 'Interpr. Cultural - Batalla De Miraflores (Miraflores - Lima)', E: 'NO', F: 7600000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '123', B: '', C: '40434', D: 'Interpr. Cultural - Batalla De Surquillo (Surquillo - Lima)', E: 'NO', F: 7600000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '124', B: '', C: '40405', D: 'Centro Histórico De Tacna (Tacna)', E: 'NO', F: 12000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '125', B: '', C: '39520', D: 'Interpr. Cultural - Museo Arqueológico De Ancash (Ancash)', E: 'NO', F: 5600000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '126', B: '', C: '146916', D: 'Interpr. Cultural - Chullpas De Cutimbo (Pichacani - Puno)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '127', B: '', C: '146912', D: 'Interpr. Cultural - Pukara  (Pucara - Puno)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '128', B: '', C: '146893', D: 'Interpr. Cultural - Ruta Pampas De Las Llamas  (Huaraz - Ancash)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '129', B: '', C: '39569', D: 'Interpr. Cultural - Complejo Arqueo-Astronómico Chankillo  (Casma - Ancash)', E: 'NO', F: 57654759, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '130', B: '', C: '146918', D: 'Interpr. Cultural - Curamba  (Kishuara - Apurimac)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '131', B: '', C: '146899', D: 'Interpr. Cultural - Lauri (Canta - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '132', B: '', C: '146671', D: 'Zona Monumental Vilcashuamán (Ayacucho)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '133', B: '', C: '146892', D: 'Interpr. Cultural - Monumento Manchán (Casma - Ancash)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '134', B: '', C: '44413', D: 'Museo De Sitio Wari (Pacaycasa - Ayacucho)', E: 'NO', F: 1691940, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '135', B: '', C: '39506', D: 'Interpr. Cultural - En El Museo De Sitio Las Peañas', E: 'NO', F: 4000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '136', B: '', C: '146927', D: 'Interpr. Cultural - En Yanamarca  (Acobamba - Junin)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '137', B: '', C: '39577', D: 'Interpr. Cultural - Complejo Arqueológico El Gran Pajatén  (Huicungo - San Martin)', E: 'NO', F: 15000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '138', B: '', C: '40465', D: 'Interpr. Cultural - Batalla De Alto De La Alianza (Alianza - Tacna)', E: 'NO', F: 7600000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '139', B: '', C: '146926', D: 'Interpr. Cultural - Garu  (Choras - Huanuco)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '140', B: '', C: '146897', D: 'Interpr. Cultural - Fortaleza De Paramonga (Paramonga - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '141', B: '', C: '146909', D: 'Interpr. Cultural - Paredones  (Ica)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '142', B: '', C: '146930', D: 'Interpr. Cultural - Cuevas De Lauricocha (Huanuco)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '143', B: '', C: '146908', D: 'Interpr. Cultural - La Centinela (Ica)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '144', B: '', C: '146923', D: 'Interpr. Cultural - Pachiza - Huicungo (Juanjui - San Martin)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '145', B: '', C: '146779', D: 'Interpr. Cultural - Monumental Cabeza De Vaca (Corrales - Tumbes)', E: 'NO', F: 13000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '146', B: '', C: '146920', D: 'Interpr. Cultural - Sondor  (Pacucha - Apurimac)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '147', B: '', C: '39573', D: 'Interpr. Cultural - Monumento Chavín De Huantar  (Chavin De Huantar - Ancash)', E: 'NO', F: 99464265, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '148', B: '', C: '146670', D: 'Zona Monumental Intihuatana (Vischongo - Ayacucho)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '149', B: '', C: '146900', D: 'Huacos (Hualmay - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '150', B: '', C: '146924', D: 'Interpr. Cultural - Wari  (Pacaycasa - Ayacucho)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '151', B: '', C: '146652', D: 'Casona Y Capilla Illanya  (Abancay - Apurimac)', E: 'NO', F: 13000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '152', B: '', C: '146624', D: 'Tejido De Junco - Humedales De Puerto Viejo  (San Borja - Lima)', E: 'NO', F: 4500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '153', B: '', C: '146622', D: 'Ss De Interpretacion Cultural - Paisaje Cultural Cuyocuyo (Sandia - Puno)', E: 'NO', F: 4500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '154', B: '', C: '146932', D: 'Interpr. Cultural - Pumpu  (Huayllay - Pasco)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '155', B: '', C: '146797', D: 'Zona Arqueológica Huaycán De Cieneguilla', E: 'NO', F: 3000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '156', B: '', C: '146929', D: 'Interpr. Cultural - En Tunanmarca  (Tunan Marca - Junin)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '157', B: '', C: '146823', D: 'Ss De Intepretación Cultural - Monumental Huánuco (Union - Huanuco)', E: 'NO', F: 15000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '158', B: '', C: '146619', D: 'Candelabro De Paracas  (Pisco - Ica)', E: 'NO', F: 4500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '159', B: '', C: '146913', D: 'Interpr. Cultural - Uyo (Yanque - Arequipa)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '160', B: '', C: '146792', D: 'Ss De Intepretación Cultural - Zam Incahuasi De Lunahuan  (Lunahuana - Lima)', E: 'NO', F: 13000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '161', B: '', C: '146906', D: 'Interpr. Cultural - Tambo Colorado (Ica)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '162', B: '', C: '146911', D: 'Interpr. Cultural - Toro Muerto (Uraca - Arequipa)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '163', B: '', C: '40378', D: 'Interpr. Cultural - Petroglifos De Checa  (Santa Rosa De Quives - Lima)', E: 'NO', F: 8400000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '164', B: '', C: '146895', D: 'Interpr. Cultural - Inkawasi De Lunahuaná (San Vicente De Cañete - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '165', B: '', C: '146917', D: 'Interpr. Cultural - Petroglifos De Miculla  (Tacna)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '166', B: '', C: '146910', D: 'Interpr. Cultural - Huayurí - Palpa  (Ica)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '167', B: '', C: '146898', D: 'Interpr. Cultural - Petroglifos De Checta - Canta  (Huacho - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '168', B: '', C: '146903', D: 'Interpr. Cultural - Rupac - Huaral  (Huaral - Lima)', E: 'NO', F: 8000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '169', B: '', C: '146933', D: 'Orquestas Sinfónicas Regionales', E: 'NO', F: 4000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '170', B: '', C: '146296', D: 'Bodegas Tradicionales De Pisco A Nivel Nacional', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '171', B: '', C: '41531', D: 'Ss De Intercambio Intercultural (Balsapuerto - Loreto)', E: 'NO', F: 5000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '172', B: '', C: '41538', D: 'Ss De Protección De La Riaf Piaci Isconahua  (Calleria - Ucayali)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '173', B: '', C: '41533', D: 'Ss De Protección De La Riaf Piaci Isconahua  (Calleria - Ucayali)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '174', B: '', C: '41517', D: 'Ss De Intercambio Intercultural (Pebas - Loreto)', E: 'NO', F: 5000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '175', B: '', C: '41512', D: 'Ss De Intercambio Intercultural (Calleria - Ucayali)', E: 'NO', F: 5000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '176', B: '', C: '40412', D: 'Ss Culturales - Rurak Maki Lima Del (Lima)', E: 'NO', F: 12000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '177', B: '', C: '147116', D: 'Plataforma Perú Lee', E: 'NO', F: 2500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '178', B: '', C: '41525', D: 'Ss De Intercambio Intercultural (Alto Nanay - Loreto)', E: 'NO', F: 5000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '179', B: '', C: '41544', D: 'Ss De Protección De La Riaf Piaci Yavarí Tapiche  (Yaquerana -Loreto)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '180', B: '', C: '98521', D: 'Rehabilitación De La Dirección De Cultura De Cajamarca', E: 'NO', F: 2500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '181', B: '', C: '41528', D: 'Ss De Protección De La Riaf Piaci Kugapakori, Nahua, Nanti (Sepahua - Ucayali)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '182', B: '', C: '41537', D: 'Ss De Protección De La Riaf Piaci Mashco Piro  (Purus - Ucayali)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '183', B: '', C: '41350', D: 'Prog. Conmemoración Bicentenario De La Independencia (Lima)', E: 'SI', F: 20069860, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '184', B: '', C: '41520', D: 'Ss De Intercambio Intercultural (Jeberos - Loreto)', E: 'NO', F: 5000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '185', B: '', C: '41518', D: 'Contenidos Audiovisuales - San Francisco De Borja (San Borja - Lima)', E: 'NO', F: 2500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '186', B: '', C: '102639', D: 'Pasarela - Virgen De La Candelaria  (Puno)', E: 'SI', F: 35113184, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '187', B: '', C: '147121', D: 'Incubadoras - Libro Y Lectura San Francisco De Borja (San Borja - Lima)', E: 'NO', F: 5500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '188', B: '', C: '147122', D: 'Ss Culturales - Biblioteca De La Ddc Ayacucho', E: 'NO', F: 6500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '189', B: '', C: '41515', D: 'Audiovisual Y Fonográfico - M.C. San Francisco De Borja (San Borja - Lima)', E: 'NO', F: 5570000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '190', B: '', C: '41552', D: 'Elencos Nacionales (Lima)', E: 'NO', F: 26000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '191', B: '', C: '146889', D: 'Ss Intitucionales - M.V. San Francisco De Borja (San Borja - Lima)', E: 'NO', F: 13000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '192', B: '', C: '146672', D: 'Ss Intitucionales - Dirección De Patrimonio Historico Inmueble', E: 'NO', F: 3000000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '193', B: '', C: '41511', D: 'Ss De Intercambio Intercultural (Requena - Loreto)', E: 'NO', F: 5000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '194', B: '', C: '102650', D: 'Ss Culturales - Teatro Bicentenario Arequipa (Arequipa)', E: 'SI', F: 70209204, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '195', B: '', C: '146934', D: 'Casa Cultural De Música Sinfónica Arequipa (Arequipa)', E: 'NO', F: 4000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '196', B: '', C: '41540', D: 'Protección De La Riaf Piaci (Iñapari - Madre De Dios)', E: 'NO', F: 3500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '197', B: '', C: '147120', D: 'Equipos Tecnológicos - Encuesta Nacional De Lectura', E: 'NO', F: 2500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '198', B: '', C: '147118', D: 'Mobiliarios Para Bibliotecas', E: 'NO', F: 2500000, G: 0, H: 0, I: 0, J: 'IOARR', K: 'IDEA', L: '1. En idea' },
            { A: '199', B: '', C: '41536', D: 'Intercambio Intercultural (Iñapari - Madre De Dios)', E: 'NO', F: 5000000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },
            { A: '200', B: '', C: '146629', D: 'Interpretacion Cultural - Tic (Lima)', E: 'NO', F: 4500000, G: 0, H: 0, I: 0, J: 'PI', K: 'IDEA', L: '1. En idea' },



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
            fila.insertCell(9).innerHTML = inversion.J;
            fila.insertCell(10).innerHTML = inversion.K;
            fila.insertCell(11).innerHTML = inversion.L;




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
        td = tr[i].getElementsByTagName("td")[3];
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

