var lineDrawing = anime({
    targets: '#hudz path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 50 },
    direction: 'alternate',
    loop: false
  });