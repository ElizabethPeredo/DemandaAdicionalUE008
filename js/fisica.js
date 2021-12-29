class BuscarAnexo {
    constructor() {
        this.inversiones = [
            { A: '1', B: 'PI - 2151618: Sitio Arqueológico de Kuelap (Amazonas)', C: '03-01-2022', D: '17-01-2022', E: '03-02-2022', F: '17-02-2022', G: '07-03-2022', H: '28-03-2022', I: '25-04-2022', J: '02-05-2022', K: '04-05-2022', L: '09-05-2022', M: '30-05-2022', N: '15-06-2022', O: '29-06-2022', P: '08-06-2026' },
            { A: '2', B: 'IOARR - 2430924: Huaca 26 (Lima)', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '20-04-2022', K: '22-04-2022', L: '27-04-2022', M: '15-06-2022', N: '01-07-2022', O: '15-07-2022', P: '13-10-2022' },
            { A: '3', B: 'IOARR - 2430936: Huaca Caudivilla', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '07-02-2022', K: '09-02-2022', L: '14-02-2022', M: '04-04-2022', N: '20-04-2022', O: '04-05-2022', P: '03-07-2022' },
            { A: '4', B: 'PI - 2131495: Lugar de la Memoria (LUM)', C: '28-03-2022', D: '11-04-2022', E: '28-04-2022', F: '09-06-2022', G: '27-06-2022', H: '18-07-2022', I: '03-10-2022', J: '10-10-2022', K: '12-10-2022', L: '17-10-2022', M: '05-12-2022', N: '21-12-2022', O: '04-01-2023', P: '03-07-2023' },
            { A: '5', B: 'PI - 2230368: Sitio Arqueológico de Wari (Huamanga)', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '11-01-2022', K: '13-01-2022', L: '18-01-2022', M: '08-03-2022', N: '24-03-2022', O: '07-04-2022', P: '01-02-2023' },
            { A: '6', B: 'PI - 2251549: Museo Nacional del Perú (MUNA)', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '10-01-2022', K: '12-01-2022', L: '17-01-2022', M: '07-03-2022', N: '23-03-2022', O: '06-04-2022', P: '11-12-2024' },
            { A: '7', B: 'PI - 2446487: Ceviche', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '10-01-2022', K: '12-01-2022', L: '17-01-2022', M: '07-03-2022', N: '23-03-2022', O: '06-04-2022', P: '01-05-2023' },
            { A: '8', B: 'IOARR - 2456689: Batalla de Ayacucho (obelisco)', C: '03-01-2022', D: '10-01-2022', E: '17-01-2022', F: '24-01-2022', G: '26-01-2022', H: '02-02-2022', I: '09-03-2022', J: '30-01-2022', K: '01-02-2022', L: '04-02-2022', M: '25-03-2022', N: '31-03-2022', O: '14-04-2022', P: '08-02-2023' },
            { A: '9', B: 'IOARR - 2456690: Batalla de Junín', C: '05-01-2022', D: '12-01-2022', E: '19-01-2022', F: '26-01-2022', G: '28-01-2022', H: '04-02-2022', I: '11-03-2022', J: '25-01-2022', K: '27-01-2022', L: '01-02-2022', M: '22-03-2022', N: '28-03-2022', O: '11-04-2022', P: '05-07-2023' },
            { A: '10', B: 'PI - 2469016: Balcón de Huaura', C: '04-01-2022', D: '18-01-2022', E: '04-02-2022', F: '11-02-2022', G: '01-03-2022', H: '22-03-2022', I: '24-05-2022', J: '24-01-2022', K: '26-01-2022', L: '31-01-2022', M: '30-05-2022', N: '27-07-2022', O: '10-08-2022', P: '03-11-2023' },
            { A: '11', B: 'PI - 2233917: Archivo General de la Nación (AGN)', C: '14-01-2022', D: '21-01-2022', E: '02-02-2022', F: '16-02-2022', G: '04-03-2022', H: '25-03-2022', I: '22-04-2022', J: '29-04-2022', K: '03-05-2022', L: '06-05-2022', M: '27-05-2022', N: '14-06-2022', O: '28-06-2022', P: '17-07-2024' },
            { A: '12', B: 'PI - 2320691: Museo Nacional de AAH (Pueblo Libre)', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '15-04-2022', K: '19-04-2022', L: '22-04-2022', M: '27-05-2022', N: '14-06-2022', O: '28-06-2022', P: '23-06-2023' },
            { A: '13', B: 'PI - 2413312: Necrópolis de Ancón', C: '18-01-2022', D: '01-02-2022', E: '18-02-2022', F: '18-03-2022', G: '05-04-2022', H: '26-04-2022', I: '10-05-2022', J: '17-05-2022', K: '19-05-2022', L: '24-05-2022', M: '07-06-2022', N: '23-06-2022', O: '07-07-2022', P: '24-09-2024' },
            { A: '14', B: 'PROG - 2313253: Programa Centros Históricos (GyA)', C: '03-01-2022', D: '17-01-2022', E: '24-01-2022', F: '14-02-2022', G: '16-02-2022', H: '09-03-2022', I: '11-05-2022', J: '18-05-2022', K: '20-05-2022', L: '25-05-2022', M: '08-06-2022', N: '24-06-2022', O: '08-07-2022', P: '03-02-2023' },
            { A: '15', B: 'PI - 2459183: Centro Histórico de Rímac (Lima)', C: '03-01-2022', D: '17-01-2022', E: '24-01-2022', F: '14-02-2022', G: '16-02-2022', H: '09-03-2022', I: '11-05-2022', J: '18-05-2022', K: '20-05-2022', L: '25-05-2022', M: '08-06-2022', N: '24-06-2022', O: '08-07-2022', P: '05-12-2022' },
            { A: '16', B: 'PI - 2459198: Centro Histórico de Huamanga (Ayacucho)', C: '05-01-2022', D: '19-01-2022', E: '26-01-2022', F: '16-02-2022', G: '18-02-2022', H: '11-03-2022', I: '13-05-2022', J: '20-05-2022', K: '24-05-2022', L: '27-05-2022', M: '10-06-2022', N: '28-06-2022', O: '12-07-2022', P: '09-12-2022' },
            { A: '17', B: 'IOARR - 2491061: Casa Cultural Tupac Amaru (Cusco)', C: '17-01-2022', D: '31-01-2022', E: '17-02-2022', F: '31-03-2022', G: '18-04-2022', H: '09-05-2022', I: '25-07-2022', J: '01-08-2022', K: '03-08-2022', L: '08-08-2022', M: '26-09-2022', N: '12-10-2022', O: '26-10-2022', P: '24-04-2023' },
            { A: '18', B: 'IOARR - 2497501: Mateo Salao (Lima)', C: '19-01-2022', D: '02-02-2022', E: '21-02-2022', F: '04-04-2022', G: '20-04-2022', H: '11-05-2022', I: '27-07-2022', J: '03-08-2022', K: '05-08-2022', L: '10-08-2022', M: '28-09-2022', N: '14-10-2022', O: '28-10-2022', P: '23-10-2023' },
            { A: '19', B: 'PI - 2505984: Gran Biblioteca Pública (Lima)', C: '13-01-2022', D: '20-01-2022', E: '27-01-2022', F: '03-02-2022', G: '07-02-2022', H: '14-02-2022', I: '21-03-2022', J: '28-03-2022', K: '30-03-2022', L: '04-04-2022', M: '23-05-2022', N: '27-05-2022', O: '10-06-2022', P: '25-05-2025' },
            { A: '20', B: 'PI - 2506071: Casa Hacienda Punchauca (Lima)', C: '21-01-2022', D: '04-02-2022', E: '23-02-2022', F: '06-04-2022', G: '22-04-2022', H: '13-05-2022', I: '17-06-2022', J: '24-06-2022', K: '28-06-2022', L: '01-07-2022', M: '19-08-2022', N: '06-09-2022', O: '20-09-2022', P: '15-09-2023' },
            { A: '21', B: 'PI - 2506435: Hotel Comercio (Lima)', C: '01-02-2022', D: '15-02-2022', E: '04-03-2022', F: '15-04-2022', G: '03-05-2022', H: '24-05-2022', I: '28-06-2022', J: '05-07-2022', K: '07-07-2022', L: '12-07-2022', M: '30-08-2022', N: '15-09-2022', O: '29-09-2022', P: '22-03-2024' },
            { A: '22', B: 'PI - 2508807: I.C. (Nasca y Palpa)', C: '12-04-2022', D: '26-04-2022', E: '13-05-2022', F: '24-06-2022', G: '12-07-2022', H: '02-08-2022', I: '18-10-2022', J: '25-10-2022', K: '27-10-2022', L: '01-11-2022', M: '20-12-2022', N: '05-01-2023', O: '19-01-2023', P: '03-01-2026' },
            { A: '23', B: 'PI - 2508852: Digitalización del AGN', C: '04-02-2022', D: '18-02-2022', E: '23-03-2022', F: '25-05-2022', G: '10-06-2022', H: '08-07-2022', I: '21-10-2022', J: '28-10-2022', K: '01-11-2022', L: '04-11-2022', M: '23-12-2022', N: '10-01-2023', O: '24-01-2023', P: '08-01-2026' },
            { A: '24', B: 'PI - 2498277: Parque Bicentenario  - Puno', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '09-06-2022', K: 'NO APLICA', L: '14-06-2022', M: '02-08-2022', N: '18-08-2022', O: '01-09-2022', P: '18-05-2025' },
            { A: '25', B: 'PI - 2498554: Parque Bicentenario - San Martin', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '09-06-2022', K: 'NO APLICA', L: '14-06-2022', M: '02-08-2022', N: '18-08-2022', O: '01-09-2022', P: '21-08-2024' },
            { A: '26', B: 'PI - 2499924: Parque Bicentenario - Junin', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '09-06-2022', K: 'NO APLICA', L: '14-06-2022', M: '02-08-2022', N: '18-08-2022', O: '01-09-2022', P: '18-05-2025' },
            { A: '27', B: 'PI - 2498131: Parque Bicentenario - Cajamarca', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '09-06-2022', K: 'NO APLICA', L: '14-06-2022', M: '02-08-2022', N: '18-08-2022', O: '01-09-2022', P: '29-05-2023' },
            { A: '28', B: 'PI - 2498378: Parque Bicentenario - Cusco', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '09-06-2022', K: 'NO APLICA', L: '14-06-2022', M: '02-08-2022', N: '18-08-2022', O: '01-09-2022', P: '18-05-2025' },
            { A: '29', B: 'PI - 2498352: Parque Bicentenario - Amazonas', C: 'NO APLICA', D: 'NO APLICA', E: 'NO APLICA', F: 'NO APLICA', G: 'NO APLICA', H: 'NO APLICA', I: 'NO APLICA', J: '09-06-2022', K: 'NO APLICA', L: '14-06-2022', M: '02-08-2022', N: '18-08-2022', O: '01-09-2022', P: '21-08-2024' },
            { A: '30', B: 'PI - 2497434: Parque Bicentenario - Ancash', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '25-12-2024' },
            { A: '31', B: 'PI - 2499858: Parque Bicentenario - Piura', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '31-12-2023' },
            { A: '32', B: 'PI - 2499997: Parque Bicentenario - Ayacucho', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '25-12-2024' },
            { A: '33', B: 'PI - 2498610: Parque Bicentenario - Ucayali', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '25-12-2024' },
            { A: '34', B: 'PI - 2499914: Parque Bicentenario - Arequipa', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '29-02-2024' },
            { A: '35', B: 'PI - 2498188: Parque Bicentenario - Lambayeque', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '02-10-2023' },
            { A: '36', B: 'PI - 2498659: Parque Bicentenario - Loreto', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '25-12-2024' },
            { A: '37', B: 'PI - 2498268: Parque Bicentenario - Huanuco', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '25-12-2024' },
            { A: '38', B: 'PI - 2498369: Parque Bicentenario - Apurimac', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '21-09-2025' },
            { A: '39', B: 'PI - 2499921: Parque Bicentenario - Tumbes', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '31-12-2023' },
            { A: '40', B: 'PI - 2499859: Parque Bicentenario - Ica', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '31-12-2023' },
            { A: '41', B: 'PI - 2499288: Parque Bicentenario - Tacna', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '31-12-2023' },
            { A: '42', B: 'PI - 2498138: Parque Bicentenario - Callao', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '03-08-2023' },
            { A: '43', B: 'PI - 2498147: Parque Bicentenario - La Libertad', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '03-08-2023' },
            { A: '44', B: 'PI - 2498275: Parque Bicentenario - Huancavelica', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '21-09-2025' },
            { A: '45', B: 'PI - 2497468: Parque Bicentenario - Huacho (Lima)', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '03-08-2023' },
            { A: '46', B: 'PI - 2497656: Parque Bicentenario - Moquegua', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '03-08-2023' },
            { A: '47', B: 'PI - 2498259: Parque Bicentenario - Pasco', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '21-09-2025' },
            { A: '48', B: 'PI - 2498370: Parque Bicentenario - Madre De Dios', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '25-12-2024' },
            { A: '49', B: 'PI - 2505980: Parque Lineal Pachacamaq', C: '08-03-2022', D: 'NO APLICA', E: '25-03-2022', F: '06-05-2022', G: '24-05-2022', H: '14-06-2022', I: '30-08-2022', J: '06-09-2022', K: '08-09-2022', L: '13-09-2022', M: '01-11-2022', N: '17-11-2022', O: '05-01-2023', P: '20-12-2025' },

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