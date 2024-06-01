function myOwn(name, age, language) {
    let hello = () => {
      return `Hello ${name}, I understand that you speak only ${language} language`;
    }
    return hello();
  }
  
 // console.log(myOwn('Miroslav', 38, 'Bulgarian'));
 module.exports = {
    myOwn
}