// Load jQuery from NPM
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const H = 360;
const L = 100;

function mouseMove(e) {
  const h = e.pageX % H;
  const l = e.pageY % L;

  // change color of background
  $('body').css('background-color', `hsl(${h}, 100%, ${l}%)`);
}

$('html').on('mousemove', mouseMove);
