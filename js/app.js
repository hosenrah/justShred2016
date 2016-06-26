$(function() {


    var u_id = parseInt('2235700352');
    var token = '2235700352.415da96.fe6a65d43f874f3ebbe0ada07a69c15e';

    //Set up instafeed
    var feed = new Instafeed({
        target: 'instafeed',
        get: 'user',
        userId: u_id,
        accessToken: token,
        clientId: '415da96e246842f696801e4f29fe1ed7',
        //get: 'tagged',
        //tagName: 'justshred',
        links: true,
        limit: 12,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}" target="_blank"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});