let queueToBank = ["Sofia", "David", "Juan"];

const addToQueue = (name) => {
  queueToBank.push(name);
};

const insertQueue = (name1, name2) => {
    let nameIndex = queueToBank.indexOf(name1)+1
  queueToBank.splice(nameIndex, 0, name2);
};

const decreaseQueue = () => {
  queueToBank.shift();
};

addToQueue("Sara");
addToQueue("Augustin");
decreaseQueue();
insertQueue("David","Renata");
addToQueue("Elena");

console.log(queueToBank);
