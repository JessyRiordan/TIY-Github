$.getJSON('/../api/github/users/octocat/octocat.json')
    .then(function(octocat) {
        console.log(octocat);

        $avatar = $('img#avatar');
        $avatar.attr('src', octocat.avatar_url);

        $name = $('h1#name');
        $name.text(octocat.name);

        $login = $('small#login');
        $login.text(octocat.login);

        $company = $('li#company');
        $company.text(octocat.company);

        $location = $('li#location');
        $location.text(octocat.location);

        $email = $('li#email');
        $email.text(octocat.email);

        $blog = $('li#blog');
        $blog.text(octocat.blog);

    });
