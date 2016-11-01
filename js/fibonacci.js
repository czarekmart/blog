var fib = (function () {
    var pp = 0;
    var p = 1;
    var index = 0;
    return {
        next: function () {
            var result;
            switch (index++) {
            case 0:
                return 0;
            case 1:
                return 1;
            default:
                result = pp + p;
                pp = p;
                p = result;
                return result;
            }
        },
        reset: function () {
            pp = 0;
            p = 1;
            index = 0;
        }
    }
})();
