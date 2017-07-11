window.addEventListener('DOMContentLoaded', function () {
    var elements = window.document.querySelectorAll('.c-radio');
    var _loop_1 = function (i) {
        var element = elements[i];
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            var currentName = element.getAttribute('data-name');
            for (var j = 0; j < elements.length; j++) {
                var elementToUnCheck = elements[j];
                if (elementToUnCheck.getAttribute('data-name') === currentName) {
                    elementToUnCheck.setAttribute('aria-checked', 'false');
                }
            }
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    };
    for (var i = 0; i < elements.length; i++) {
        _loop_1(i);
    }
});
