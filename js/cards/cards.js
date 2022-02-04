    
    fetch("./js/cards/datos.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            document.getElementById("cards").innerHTML +=
                '<!--CARD-->' +
                '<div class="card-post">' +
                '<div class="card-post__top">' +
                '<a>' +
                '<img class="card-post__img" src="' + data[i].A + '" alt="" />' +
                '</a>' +
                '</div>' +
                '<div class="card-post__info">' +
                '<div class="card-post__tag">' +
                '<a href="">' + data[i].B + '</a>' +
                '</div>' +
                '<h2 class="card-post__title">' +
                '<a href="' + data[i].C + '">' + data[i].D + '</a>' +
                '</h2>' +
                '<div class="card-post__money">' +
                '<a href="' + data[i].C + '">' + data[i].E + '</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--END CARD-->';
        }
    })
    .catch(function (err) {
        console.log(err);
    })