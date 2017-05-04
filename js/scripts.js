const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
console.log('hello');

    // Interpolated
console.log('Hello I am a %s string!', '🖕');
//console.log(`Hello I am a ${variable}`);

    // Styled
console.log('%c Cool text bro', 'font-size:50px; background:red; text-shadow: 20px 10px 5px blue')
    // warning!
console.warn('OH No00o0o!');
    // Error :|
console.error('Oh shit.');
    // Info
console.info('France was still executing people by guillotine when Star Wars: A New Hope hit theatres.');

    // Testing
const p =document.querySelector('p')

console.assert(p.classList.contains('ouch'), 'YA DONE FUCKED UP!');

console.assert(1 === 1, 'That is wrong!')
console.assert(1 === 2, 'That is wrong!')


    // clearing
console.clear();

    // Viewing DOM Elements
console.log(p); //shows actual element itself
console.dir(p); //let you open up and look at the class list, different properties and stuff that lives on that element

console.clear();

    // Grouping together

        //dogs.forEach(dog => {
        //    console.group(`$dog.name`)
        //    console.log(`This is ${dog.name}`);
        //    console.log(`${dog.name} is ${dog.age} years old`);
        //    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        //    console.groupEnd(`${dog.name}`);
        //
        //})

dogs.forEach(dog => {
    console.groupCollapsed(`$dog.name`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);

})

    // counting
console.count('Fuck');
console.count('Fuck');
console.count('Fuck');
console.count('Fuck');
console.count('Shit');
console.count('Shit');
console.count('Fuck');
console.count('Fuck');
console.count('Shit');
console.count('Shit');
console.count('Shit');
console.count('Shit');

    // timing
console.time('fetching data');
fetch('https://api.github.com/users/danielle93')
.then(data => data.json())
.then(data =>{
    console.timeEnd('fetching data');
    console.log(data);
});

console.table(dogs);