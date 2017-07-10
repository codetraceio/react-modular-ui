window.addEventListener('DOMContentLoaded', function () {
    window.document.querySelectorAll('.c-radio').slice().forEach(function (element) {
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            var currentName = element.getAttribute('data-name');
            window.document.querySelectorAll('.c-radio').slice().forEach(function (element) {
                if (element.getAttribute('data-name') === currentName) {
                    element.setAttribute('aria-checked', 'false');
                }
            });
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    });
});
