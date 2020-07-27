// function dynofaxAJAX() {
// event.preventDefault();
// const characterName = $("#searchedChar").val().trim();
$.ajax({
    url: './DynoFax.json',
    method: 'GET'
}).then(function (response) {
    console.log(response);
    for (let i = 0; i < response.length; i++) {
        const col = $("<div class='col-lg-3'></div>");
        const card = $("<div class='card'></div>");
        const img = $("<img src='" + response[i].image + "' id='image' class='card-image-top'>");
        const cardBody = $("<div class='card-body'>" + response[i].name + "</div>");
        card.append(img, cardBody)
        col.append(card);
        $("#display").append(col);
    }
});
// };