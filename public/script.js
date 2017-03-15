$.ajax({
    url: "https://freegeoip.net/json/",
    contentType: "application/javascript; charset=utf-8",
    dataType: "jsonp",
    success: function(data) {
        var ipaddress = data.ip;
    
        // Get browser language
        var language = window.navigator.language;
        
        // Get software
        var software = window.navigator.appVersion;
        var regExp = /\(([^)]+)\)/;
        software = regExp.exec(software)[1];
        
        // Add data to obj
        var obj = {
            'ipaddress': ipaddress,
            'language': language,
            'software': software
        };
        
        // Write obj to document
        $('body').html(JSON.stringify(obj));
    },
    error: function (xhr, textStatus, errorThrown) {
        $("body").html(xhr.responseText);
    }
});