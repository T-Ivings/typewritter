const sentence = "hello there from lighthouse labs \n";
let n = 50;
const typewritter = (sentence) => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, n += 50)
  }
}

typewritter(sentence);