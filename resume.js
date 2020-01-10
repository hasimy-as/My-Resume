/**
 *  @Resume Hasimy's Resume
 *  @Data At myData.json
 */

const Inq = require("inquirer");
const Cha = require("chalk");
const Resume = require("./myData");

const response = Cha.bold.cyan;

const options = {
  type: "list",
  name: "ResumeOptions",
  message: "What would you like to know?",
  choices: [...Object.keys(Resume), "See you!"]
};

const showResume = () => {
  console.log("Hello! My name is Hasimy and this is my Resume :)");
  handleResume();
};

const handleResume = () => {
  Inq.prompt(options)
    .then(answer => {
      if (answer.ResumeOptions == "See ya!") {
        console.log(response("Thanks for your time!"));
        return;
      }
      const option = Resume[`${answer.ResumeOptions}`];

      if (option) {
        console.log(response(new Inq.Separator()));
        option.forEach(info => {
          console.log(response("|   => " + info));
        });
        console.log(response(new Inq.Separator()));
      }

      Inq.prompt({
        type: "list",
        name: "exitBack",
        message: "Go back or Exit?",
        choices: ["Back", "Exit"]
      }).then(choice => {
        if (choice.exitBack == "Back") {
          handleResume();
        } else {
          console.log(response("Thanks for your time!"));
          return;
        }
      });
    })
    .catch(err => console.log("Uh-oh! There's a problem here: ", err));
};

showResume();
