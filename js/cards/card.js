fetch("../js/cards/datos_card.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var x = 1;
        for (var i = x - 1; i < x; i++) {
            document.getElementById("card").innerHTML +=
                '<!--CARD-->' +
                '<div class="container card note">' +
                '<h1>' + 
                data[i].B + 
                '</h1>' +
                '<ul class="border-color1">' +
                '<li><b><i class="fas fa-archive"></i> Estado de inversión​: </b>' +
                data[i].K +
                '</li>' +
                '<li><b><i class="fas fa-coins"></i> Costo de Inversión​: </b>S/'+ 
                data[i].D.toLocaleString('ENG') +
                '</li>' +
                '</ul>' +
                '<h4><i class="fas fa-tv"></i> Objeto de Demanda Adicional: <small>' +
                data[i].J +
                '</small></h4>' +
                '<button>S/' + 
                data[i].H.toLocaleString('ENG') +
                '</button>' +
                '<img src="../images/'+data[i].C+'.jpg" alt="">' +
                '<ul>' +
                '<li>' + 
                data[i].M +
                '</li>' +
                '</ul>' +
                '</div>'
            '<!--END CARD-->';
        }
    })
    .catch(function (err) {
        console.log(err);
    })
