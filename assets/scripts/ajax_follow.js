$(document).ready(function(){
    $("#follow-form .follow-button").click(function(event){
        event.preventDefault(); // Prevent default button behavior
        var form = $(this).closest('form');
        var action = $(this).data('action');
        var url = form.attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function(response){
                if (action === "follow") {
                    form.find('.follow-button').removeClass('btn-primary').addClass('btn-secondary').text('Unfollow').data('action', 'unfollow');
                } else {
                    form.find('.follow-button').removeClass('btn-secondary').addClass('btn-primary').text('Follow').data('action', 'follow');
                }
            },
            error: function(xhr, errmsg, err){
                console.log(xhr.status + ": " + xhr.responseText); // Log error to console
            }
        });
    });
});

function openModal(imgSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
