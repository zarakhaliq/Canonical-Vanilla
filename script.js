fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
  .then(res => {
    if (res.ok) {
      console.log("SUCCESS");
      return res.json();
    } else {
      throw Error(res.statusText);
    }
  })
  .then(data => {
    //Formatting the date
    for (i = 0; i < data.length; i++) {
      var d = new Date(data[i].date);
      var year = d.getFullYear();
      var date = d.getDate();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var monthIndex = d.getMonth();
      var monthName = months[monthIndex];
      $(".card__container").append(
        `<div class="p-card--highlighted card"><p>CLOUD AND SERVER</p><hr class="u-sv1"><div class="p-card__content main"><img class="p-card__content image" src=${data[i].featured_media} alt=""/><h3 class="p-card__title title">${data[i].title.rendered}</h3><p class="p-card__content" ><em>By <span class="author">${data[i].author}</span> on ${date} ${monthName} ${year}</em></p></div><hr class="u-sv1"><p>Article</p></div>`
      );
    }
  })
  .catch(error => console.log("ERROR: ", error));
