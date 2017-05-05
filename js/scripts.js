    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '100px';
      p.textContent ='🖕';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I are %s string!', '🖕🏻');

    // Styled
    // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    // warning!
    console.warn('OH NOoOOoOOoOo!!!');

    // Error :|
    console.error('Well shit.');

    // Info
    console.info('If you consistently fart for 6 years & 9 months, enough gas is produced to create the energy of an atomic bomb!');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'Wrong answer dumbduck!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting

    console.count('Shit');
    console.count('Shit');
    console.count('Shit');
    console.count('Fuck');
    console.count('Fuck');
    console.count('Fuck');
    console.count('Shit');
    console.count('Fuck');
    console.count('Shit');
    console.count('Fuck');
    console.count('Shit');
    console.count('Shit');
    console.count('Shit');

    

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/danielle93')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);