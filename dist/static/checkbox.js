window.addEventListener('DOMContentLoaded', function () {
    window.document.querySelectorAll('.c-checkbox').slice().forEach(function (element) {
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    });
});
