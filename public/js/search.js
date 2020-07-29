$("#searchbtn").on("click", function (event) {
    event.preventDefault();
    dynofaxAJAX();
    $(".resultsdisplay").empty();
});

function dynofaxAJAX() {
    event.preventDefault();
    const dino = $("#dinosearch").val().trim();
    $.ajax({
        url: './DynoFax.json',
        method: 'GET'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            if (dino === response[i].name) {
                const row = $("<div class='row mt-5'></div>");
                const col1 = $("<div class='col-lg-4 text-center'></div>");
                const name = $("<h1>" + response[i].name + "</h1>");
                const img = $("<img src='" + response[i].image + "' class='image rounded-circle'>");
                const tranname = $("<h3>(" + response[i].translated_name + ")</h3>");
                col1.append(name,img,tranname);
                const col2 = $("<div class='col-lg-4 text-center'></div>");
                const height = $("<h5>Height: " + response[i].height + "</h5>");
                const weight = $("<h5>Weight: " + response[i].weight + "</h5>");
                const length = $("<h5>Length: " + response[i].height + "</h5>");
                const diet = $("<h5>Diet: " + response[i].diet + "</h5>");
                const genus = $("<h5>Genus: " + response[i].genus + "</h5>");
                const location = $("<h5>Location: " + response[i].location + "</h5>");
                const period = $("<h5>Period: " + response[i].period + "</h5>");
                col2.append(period,location,genus,height,weight,length,diet);
                const col3 = $("<div class='col-lg-4 text-center'></div>");
                const prey = $("<h5>Prey: " + response[i].prey + "</h5>");
                const predator = $("<h5>Predator: " + response[i].predator + "</h5>");
                const preypic = $("<img src='" + response[i].preypic + "' class='image2 mb-3 rounded-circle'>");
                const predpic = $("<img src='" + response[i].predpic + "' class='image2 rounded-circle'>");
                col3.append(prey,preypic,predator,predpic);
                row.append(col1, col2, col3);
                $(".resultsdisplay").append(row);
            }
        }
    });
};
