window.addEventListener('DOMContentLoaded', function () {
    Array.from(window.document.querySelectorAll('.c-radio')).forEach(function (element) {
        element.addEventListener('click', function (event) {
            var checked = event.currentTarget.getAttribute('aria-checked');
            var currentName = element.getAttribute('data-name');
            Array.from(window.document.querySelectorAll('.c-radio')).forEach(function (element) {
                if (element.getAttribute('data-name') === currentName) {
                    element.setAttribute('aria-checked', 'false');
                }
            });
            event.currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    });
});
