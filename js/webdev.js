window.onload = function() {
    $.getJSON('CourseData.json', function(data) {
        var DevCourses = $(data).filter((i, n) => n.Category === "Developement");
        $.each(DevCourses, function(i, f) {
            var courseList = 
            '<article class="card">' +
            '<div class="course-info">' +
            '<header class="card-header">' +
            '<img src="images/' + this["Image"] + '.jpeg"' + 'alt="course image">' +
            '</header>' +
            '<div class="course-name">' +
            '<p>' + this["Name"] + '</p>' +
            '</div>' +
            '<div class="provider-name">' +
            '<div class="provider-name-prefix">Instructor</div>' + 
            this["Course provider"] +
            '</div>' +
            '<div class="course-stats">' +
            '<div class="stat">' +
            '<div>' + '<div class="stat-rating">' + this["Rating"] + '&nbsp' + '<img src="images/star.png"></div></div>' +
            '<div class="stat-desc">Average Rating</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + this["Enrollment"] +'</div>' +
            '<div class="stat-desc">Students Enrolled</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + '&#x20B9;&nbsp' + this["Price"] + '</div>' +
            '<div class="disc"><s>' + '&#x20B9;&nbsp' + this["Discount"].slice(13,17) + '</s></div>' +
            '<div class="stat-desc">Price</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="course-desc hidden">' +
            '<p class="desc-show">' + this["Description"] + '</p>' +
            '<div>' +
            '<button onclick="btnclick(this)" class="button">Enroll Now</button>' +
            '</div>' +
            '</div>' +
            '</article>';
            $(courseList).appendTo("#dev-card-list");
        });

        var DesignCourses = $(data).filter((i, n) => n.Category === "Design");
        $.each(DesignCourses, function(i, f) {
            var courseList = 
            '<article class="card">' +
            '<div class="course-info">' +
            '<header class="card-header">' +
            '<img src="images/' + this["Image"] + '.jpeg"' + 'alt="course image">' +
            '</header>' +
            '<div class="course-name">' +
            '<p>' + this["Name"] + '</p>' +
            '</div>' +
            '<div class="provider-name">' +
            '<div class="provider-name-prefix">Instructor</div>' + 
            this["Course provider"] +
            '</div>' +
            '<div class="course-stats">' +
            '<div class="stat">' +
            '<div>' + '<div class="stat-rating">' + this["Rating"] + '&nbsp' + '<img src="images/star.png"></div></div>' +
            '<div class="stat-desc">Average Rating</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + this["Enrollment"] +'</div>' +
            '<div class="stat-desc">Students Enrolled</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + '&#x20B9;&nbsp' + this["Price"] + '</div>' +
            '<div class="disc"><s>' + '&#x20B9;&nbsp' + this["Discount"].slice(13,17) + '</s></div>' +
            '<div class="stat-desc">Price</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="course-desc hidden">' +
            '<p class="desc-show">' + this["Description"] + '</p>' +
            '<div>' +
            '<button onclick="btnclick(this)" class="button">Enroll Now</button>' +
            '</div>' +
            '</div>' +
            '</article>';
            $(courseList).appendTo("#design-card-list");
        });

        var MarketingCourses = $(data).filter((i, n) => n.Category === "Marketing");
        $.each(MarketingCourses, function(i, f) {
            var courseList = 
            '<article class="card card-large">' +
            '<div class="course-info">' +
            '<header class="card-header">' +
            '<img src="images/' + this["Image"] + '.jpeg"' + 'alt="course image">' +
            '</header>' +
            '<div class="course-name">' +
            '<p>' + this["Name"] + '</p>' +
            '</div>' +
            '<div class="provider-name">' +
            '<div class="provider-name-prefix">Instructor</div>' + 
            this["Course provider"] +
            '</div>' +
            '<div class="course-stats">' +
            '<div class="stat">' +
            '<div>' + '<div class="stat-rating">' + this["Rating"] + '&nbsp' + '<img src="images/star.png"></div></div>' +
            '<div class="stat-desc">Average Rating</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + this["Enrollment"] +'</div>' +
            '<div class="stat-desc">Students Enrolled</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + '&#x20B9;&nbsp' + this["Price"] + '</div>' +
            '<div class="disc"><s>' + '&#x20B9;&nbsp' + this["Discount"].slice(13,17) + '</s></div>' +
            '<div class="stat-desc">Price</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="course-desc hidden">' +
            '<p class="course-desc-small desc-show">' + this["Description"] + '</p>' +
            '<div>' +
            '<button onclick="btnclick(this)" class="button">Enroll Now</button>' +
            '</div>' +
            '</div>' +
            '</article>';
            $(courseList).appendTo("#marketing-card-list");
        });

        var BusinessCourses = $(data).filter((i, n) => n.Category === "Business");
        $.each(BusinessCourses, function(i, f) {
            var courseList = 
            '<article class="card card-large">' +
            '<div class="course-info">' +
            '<header class="card-header">' +
            '<img src="images/' + this["Image"] + '.jpeg"' + 'alt="course image">' +
            '</header>' +
            '<div class="course-name">' +
            '<p>' + this["Name"] + '</p>' +
            '</div>' +
            '<div class="provider-name">' +
            '<div class="provider-name-prefix">Instructor</div>' + 
            this["Course provider"] +
            '</div>' +
            '<div class="course-stats">' +
            '<div class="stat">' +
            '<div>' + '<div class="stat-rating">' + this["Rating"] + '&nbsp' + '<img src="images/star.png"></div></div>' +
            '<div class="stat-desc">Average Rating</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + this["Enrollment"] +'</div>' +
            '<div class="stat-desc">Students Enrolled</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + '&#x20B9;&nbsp' + this["Price"] + '</div>' +
            '<div class="disc"><s>' + '&#x20B9;&nbsp' + this["Discount"].slice(13,17) + '</s></div>' +
            '<div class="stat-desc">Price</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="course-desc hidden">' +
            '<p class="course-desc-small desc-show">' + this["Description"] + '</p>' +
            '<div>' +
            '<button onclick="btnclick(this)" class="button">Enroll Now</button>' +
            '</div>' +
            '</div>' +
            '</article>';
            $(courseList).appendTo("#business-card-list");
        });

        var MusicCourses = $(data).filter((i, n) => n.Category === "Music");
        $.each(MusicCourses, function(i, f) {
            var courseList = 
            '<article class="card">' +
            '<div class="course-info">' +
            '<header class="card-header">' +
            '<img src="images/' + this["Image"] + '.jpeg"' + 'alt="course image">' +
            '</header>' +
            '<div class="course-name">' +
            '<p>' + this["Name"] + '</p>' +
            '</div>' +
            '<div class="provider-name">' +
            '<div class="provider-name-prefix">Instructor</div>' + 
            this["Course provider"] +
            '</div>' +
            '<div class="course-stats">' +
            '<div class="stat">' +
            '<div>' + '<div class="stat-rating">' + this["Rating"] + '&nbsp' + '<img src="images/star.png"></div></div>' +
            '<div class="stat-desc">Average Rating</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + this["Enrollment"] +'</div>' +
            '<div class="stat-desc">Students Enrolled</div>' +
            '</div>' +
            '<div class="stat">' +
            '<div>' + '&#x20B9;&nbsp' + this["Price"] + '</div>' +
            '<div class="disc"><s>' + '&#x20B9;&nbsp' + this["Discount"].slice(13,17) + '</s></div>' +
            '<div class="stat-desc">Price</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="course-desc hidden">' +
            '<p class="desc-show">' + this["Description"] + '</p>' +
            '<div>' +
            '<button onclick="btnclick(this)" class="button">Enroll Now</button>' +
            '</div>' +
            '</div>' +
            '</article>';
            $(courseList).appendTo("#music-card-list");
        });
    });
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