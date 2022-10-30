function showLinks() {
    var main = document.getElementById('top-right');
    var x = document.getElementById('top-right-links');
    var y = document.getElementById('top-right-skills');
    var z = document.getElementById('top-right-about');
    var title = document.getElementById('top-left');
    if (x.style.display == 'block') {
        main.style.display = 'none';
        x.style.display = 'none';
        title.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {  
        main.style.display = 'block';
        x.style.display = 'block';
        title.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'none';
    }
}

function showSkills() {
    var main = document.getElementById('top-right');
    var x = document.getElementById('top-right-links');
    var y = document.getElementById('top-right-skills');
    var z = document.getElementById('top-right-about');
    var title = document.getElementById('top-left');
    if (y.style.display == 'block') {
        main.style.display = 'none';
        x.style.display = 'none';
        title.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {   
        main.style.display = 'block';
        x.style.display = 'none';
        title.style.display = 'none';
        y.style.display = 'block';
        z.style.display = 'none';
    }
}

function showAbout() {
    var main = document.getElementById('top-right');
    var x = document.getElementById('top-right-links');
    var y = document.getElementById('top-right-skills');
    var z = document.getElementById('top-right-about');
    var title = document.getElementById('top-left');
    if (z.style.display == 'block') {
        main.style.display = 'none';
        x.style.display = 'none';
        title.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        main.style.display = 'block';
        x.style.display = 'none';
        title.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'block';
    }
}