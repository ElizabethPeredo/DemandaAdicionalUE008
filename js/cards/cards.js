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
                '<img class="card-post__img" src="' + data[i].Img + '" alt="" />' +
                '</a>' +
                '</div>' +
                '<div class="card-post__info">' +
                '<div class="card-post__tag">' +
                '<a href="">' + data[i].Tag1 + '</a>' +
                '</div>' +
                '<h2 class="card-post__title">' +
                '<a href="' + data[i].Link + '">' + data[i].Title + '</a>' +
                '</h2>' +
                '<div class="card-post__money">' +
                '<a href="' + data[i].Link + '">' + data[i].Money + '</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--END CARD-->';
        }
    })
    .catch(function (err) {
        console.log(err);
    })