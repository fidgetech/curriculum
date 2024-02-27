window.onUsersnapLoad = function(api) {
  api.init({
    custom: {
      course: window.location.pathname.split('/')[1]
    }
  });
}
var script = document.createElement('script');
script.defer = 1;
script.src = 'https://widget.usersnap.com/global/load/bfabd51e-64e5-4f0f-99d0-e88a059f7611?onload=onUsersnapLoad';
document.getElementsByTagName('head')[0].appendChild(script);
