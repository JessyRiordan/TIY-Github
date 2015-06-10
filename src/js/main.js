$.getJSON('/../api/github/users/octocat/octocat.json')
    .then(function(octocat) {
        console.log(octocat);

        $avatar = $('img#avatar');
        $avatar.attr('src', octocat.avatar_url);

        $login = $('#login');
        $login.text(octocat.login);
    });
