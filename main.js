import inquirer from "inquirer";
let wordCounter = async () => {
    const userInput = await inquirer.prompt([{
            type: 'input',
            name: 'userPara',
            message: 'Type your essay'
        }]);
    let wordCount = userInput.userPara.split(/\s+/).length; //.split(/\s+/) breaks all the words seperated by spaces and saves them in an array)
    console.log('Total words in your para are = ' + wordCount);
    let spaceRemoval = userInput.userPara.split(" ").join(""); //.split break each element of string seperated by space into an array elements
    let display = spaceRemoval.length; //.join concetinates all the elements of an array into a string without spaces
    console.log('Total characters in your para are = ' + display);
};
wordCounter();
