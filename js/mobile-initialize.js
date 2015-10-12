(function (_self, factory){
    var mod = factory();
    if(typeof mod.init === 'function') mod.init();
})(window, function(){
    var mod = {}

    mod.pageGrid = 12;

    mod.maxWidth = null;

    mod.setPageRem = function(){
        var html = document.documentElement;
        var pageGrid = window.pageGrid || mod.pageGrid;
        var maxWidth = window.maxWidth || mod.maxWidth;
        var width, height;
        if(html.getBoundingClientRect){
            var rect = html.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
        } else {
            width = html.clientWidth;
            height = html.clientHeight;
        }
        if(mod.maxWidth && mod.maxWidth < width){
            width = mod.maxWidth;
        }
        var rem = width / mod.pageGrid;
        html.style.fontSize = rem + 'px';
        window.rem = rem;
    }

    mod.init = function(){
        window.addEventListener('resize', function(){
            mod.setPageRem();
        }, !1);
        window.addEventListener('pageshow', function() {
            mod.setPageRem();
        }, !1);
        window.refreshRem = setPageRem;
        mod.setPageRem();
    }
})