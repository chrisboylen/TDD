const randomArray = (x) => {
  let array = [];
  let randomNum = 0;

  for (let i = 0; i < x; i++) {
    randomNum = Math.floor(Math.random() * 50 - 10);

    array.push(randomNum);
  }
  return array;
};

export default randomArray;