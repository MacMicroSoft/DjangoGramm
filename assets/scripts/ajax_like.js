$(document).ready(function () {
    $(document).on('click', '.like-button', function () {
        var post_id = $(this).data("post-id");

        // Get CSRF token from the cookie
        var csrf_token = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, "$1");

        $.ajax({
            type: "POST",
            url: "/post_like/" + post_id + "/",
            data: {
                csrfmiddlewaretoken: csrf_token
            },
            dataType: "json",
            success: function (data) {
                // Update the like count and button appearance based on the response
                $("#like-count-" + post_id).text(data.count);
                if (data.liked) {
                    $(".like-button[data-post-id='" + post_id + "']").addClass("liked");
                } else {
                    $(".like-button[data-post-id='" + post_id + "']").removeClass("liked");
                }
            },
            error: function (error) {
                console.log("Error:", error);
            }
        });
    });
});
