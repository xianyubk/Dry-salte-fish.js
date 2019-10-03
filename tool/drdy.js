let els = {};
let codes_before;
let codes_after;

window.onload = function () {
    els.input = document.querySelector('#input');
    els.output = document.querySelector('#output');
    els.button = document.querySelector('#dry-button');

    els.button.onclick = function () {
        codes_before = els.input.value;
        codes_after = dry(codes_before);
        els.output.value = codes_after;
    }
}