window.onload = function() {
    $.getJSON('CourseData.json', function(data) {
        var DevCourses = $(data).filter((i, n) => n.Category === "Developement");
        $.each(DevCourses, function(i, f) {
            $(createCards(this)).appendTo("#dev-card-list");
        });

        var DesignCourses = $(data).filter((i, n) => n.Category === "Design");
        $.each(DesignCourses, function(i, f) {
            $(createCards(this)).appendTo("#design-card-list");
        });

        var MarketingCourses = $(data).filter((i, n) => n.Category === "Marketing");
        $.each(MarketingCourses, function(i, f) {
            $(createCards(this)).appendTo("#marketing-card-list");
        });

        var BusinessCourses = $(data).filter((i, n) => n.Category === "Business");
        $.each(BusinessCourses, function(i, f) {
            $(createCards(this)).appendTo("#business-card-list");
        });

        var MusicCourses = $(data).filter((i, n) => n.Category === "Music");
        $.each(MusicCourses, function(i, f) {
            $(createCards(this)).appendTo("#music-card-list");
        });
    });
}

function createCards(obj) {
    var card =
    '<article class="card">' +
        '<div class="course-info">' +
            '<header class="card-header">' +
                '<img src="images/' + obj["Image"] + '.jpeg"' + 'alt="course image">' +
            '</header>' +
            '<div class="course-name">' +
                '<p>' + obj["Name"] + '</p>' +
            '</div>' +
            '<div class="provider-name">' +
                '<div class="provider-name-prefix">Instructor</div>' + 
                obj["Course provider"] +
            '</div>' +
            '<div class="course-stats">' +
                '<div class="stat">' +
                    '<div>' + '<div class="stat-rating">' + obj["Rating"] + '&nbsp' + '<img src="images/star.png"></div></div>' +
                    '<div class="stat-desc">Average Rating</div>' +
                '</div>' +
                '<div class="stat">' +
                    '<div>' + obj["Enrollment"] +'</div>' +
                    '<div class="stat-desc">Students Enrolled</div>' +
                '</div>' +
                '<div class="stat">' +
                    '<div>' + '&#x20B9;&nbsp' + obj["Price"] + '</div>' +
                    '<div class="disc"><s>' + '&#x20B9;&nbsp' + obj["Discount"].slice(13,17) + '</s></div>' +
                    '<div class="stat-desc">Price</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="course-desc hidden">' +
            '<p class="desc-show">' + obj["Description"] + '</p>' +
            '<div>' +
                '<button onclick="btnclick(this)" class="button">Enroll Now</button>' +
            '</div>' +
        '</div>' +
    '</article>';
    return card;
}

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".course-heading");
  
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
  
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("fadeInUp");
            $(tag).next().addClass("fadeInUp");
        } else {
            $(tag).removeClass("fadeInUp");
            $(tag).next().removeClass("fadeInUp");
        }
    }
});

function btnclick(obj) {
    obj.innerHTML = "Enrolled !";
}