var btn = document.querySelector('#btn');
var bgid = document.querySelector('#bgid');

if(btn && bgid){
  btn.addEventListener('click',function(){
    if(bgid.classList.contains('bg')){
      bgid.classList.remove('bg');
      bgid.classList.add('bg-spawn');
    } else {
      // bgid.classList.remove('bg-spawn');
      bgid.classList.add('bg');
      bgid.classList.add('bg-spawn');
    }
  });
}
