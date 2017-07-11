window.addEventListener('DOMContentLoaded', function () {
    var elements = window.document.querySelectorAll('.c-toggle');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    }
});
