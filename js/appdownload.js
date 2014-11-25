(function (_self, $$, factory){
    factory($$);
})(window, $$, function ($$){
var template = function (data){
    var str = '',
        i =0,
        len = data.data.length,
        _d;
    var link = data.ios?
        function (build){
            return 'https://app.fangcloud.com/ios/ios-build-' + build + '/ios-build-' + build + '.plist';
        }:
        function (){
            return 'https://app.fangcloud.com/android/android-build-' + _d.build + '.apk';
        };

    str += '<h4>' + data.name + '</h4>';
    str += '<ul>';
    for(; i < len; i++){
        _d = data.data[i];
        str += '' +
            '<li class="thumb">' +
                '<div>' +
                    '<a class="download button on-right tiny" href="' + link(_d.build) + '">安装</a>' +
                    '<strong>版本:' + _d.verison + '</strong>' +
                    '<small>时间:' + _d.date + '</small>' +
                '</div>' +
            '</li>';
    }
    str += '</ul>';
    return str;
}
var options = {
    ios: {
        name: 'ios',
        url: '/ios/ios.json',
        template: function(data){
            data.ios = true;
            data.name = 'ios';
            return template(data);
        }
    },
    android: {
        name: 'android',
        url: '/android/android.json',
        template: function(data){
            data.android = true;
            data.name = 'android';
            return template(data);
        }
    }
}
var get = function(options, callback){
    /*$$.json(options.url, null, function(data){
        callback(options.template(data));
    })*/
    var data = {"data": [
        {"verison": "1.0.1.10000", "build": "10000", "date": "2014/11/18 11:00:10"},
        {"verison": "1.0.1.10001", "build": "10001", "date": "2014/11/xx 11:00:10"}
    ]};
    callback(options.template(data));
}
var show = function(options){
    var appindex = $$('#appIndex');
    var applist = $$('#appList');
    get(options, function(data){
        applist.html(data);
        applist.addClass('active');
        appindex.removeClass('active');
    })
}

if(location.href.indexOf('ios') !== -1){
    show(options.ios);
}
if(location.href.indexOf('android') !== -1){
    show(options.android);
}

$$('#appIndex .button').on('click', function(){
    var os = $$(this).attr('data-app');
    if(options[os]){
        show(options[os]);
    }
})

});