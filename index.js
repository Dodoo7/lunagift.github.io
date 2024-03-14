document.getElementById('topBtn').addEventListener('click', function() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('topContent').style.display = 'flex';
    document.getElementById('bottomContent').style.display = 'none';
    document.getElementById('bottom_label').style.display = 'none';
    var titleContainers = document.getElementsByClassName('title__container');
    for (var i = 0; i < titleContainers.length; i++) {
        titleContainers[i].style.display = 'none';
    }
});

document.getElementById('bottomBtn').addEventListener('click', function() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('bottomContent').style.display = 'flex';
    document.getElementById('topContent').style.display = 'none';
    document.getElementById('bottom_label').style.display = 'none';
    var titleContainers = document.getElementsByClassName('title__container');
    for (var i = 0; i < titleContainers.length; i++) {
        titleContainers[i].style.display = 'none';
    }
});

document.querySelectorAll('.backBtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.content').forEach(function(content) {
            content.style.animation = 'slideUp 0.5s ease';
            setTimeout(function() {
                content.style.display = 'none';
                content.style.animation = 'none';
            }, 0);
        });
        document.getElementById('buttons').style.display = 'flex';
        document.getElementById('bottom_label').style.display = 'flex';
        var titleContainers = document.getElementsByClassName('title__container');
        for (var i = 0; i < titleContainers.length; i++) {
            titleContainers[i].style.display = 'flex';
        }
    });
});
