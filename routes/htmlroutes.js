module.exports = function (app) {
    app.get('/', (req, res) => res.redirect('index.html'));
    app.get('/search', (req, res) => res.redirect('search.html'));
    // app.get('/search/character', (req, res) => res.render('character'));
    // app.get('/search/comicbook', (req, res) => res.render('comicbook'));
    // app.get('/write/review', (req, res) => res.render('writereview'));
    // app.get('/view/review', (req, res) => res.render('myreviews'));
};