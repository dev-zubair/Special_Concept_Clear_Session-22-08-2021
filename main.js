// দুইটা string যোগ করব | এটাকে concatenate বলে 

const firstNmae = 'Zubair';
const lastName = 'Ahmed';
const fullName = 'Zubair' + ' ' + 'Ahmed';
console.log(fullName);


//event bubble
document.getElementById('child').addEventListener('click', function () {
    console.log('child clicked');
});
document.getElementById('parent').addEventListener('click', function () {
    console.log('parent clicked');
});
document.getElementById('grand-parent').addEventListener('click', function () {
    console.log('grand parent clicked');
});

const zubairAhmed = document.getElementById('key-pad')
zubairAhmed.addEventListener('click', function (zubairAhmed) {
    zubairAhmed.target.innerText = parseFloat(zubairAhmed.target.innerText) + 1;    //999 এর সাথে এক এক করে বারবে।
    console.log(event.target.innerText);
});

document.getElementById('key-pad').addEventListener('click', function (event) {
    event.target.innerText = parseFloat(event.target.innerText) + 2;    //999 এর সাথে এক এক করে বারবে।
    console.log(event.target.innerText);
});

document.getElementById('storage').addEventListener('click', function (event) {
    const value = document.getElementById('key-pad').innerText;                 //  1000 value
    event.target.innerText = parseInt(event.target.innerText) + parseInt(value); // 1000 সাথে প্রতিবার 999 যোগ হবে।
    console.log(event.target.innerText);
})