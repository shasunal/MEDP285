// Define the inputs for this form as global variables.
let nameInput;
let fontSelect;
let foodRadio;
let xPosition = 25; // Initial horizontal position of the text
let speed = 2; // Speed of the text movement

function setup() {
  createCanvas(420, 400);

  // Assign an input box to nameInput.
  nameInput = createInput();
  nameInput.position(25, 115);

  // Assign radio buttons to foodRadio.
  foodRadio = createRadio();
  foodRadio.position(25, 215);

  // List the radio options for foodRadio, along
  // with the background color associated with each selection.
  foodRadio.option('#32a86b', 'Green');
  foodRadio.option('#5132a8', 'Purple');
  foodRadio.option('#e099af', 'Pink');

  // Assign a select dropdown to fontSelect.
  fontSelect = createSelect();
  fontSelect.position(25, 300);

  // List out the dropdown options for fontSelect.
  fontSelect.option('Sans-serif');
  fontSelect.option('Serif');
  fontSelect.option('Cursive');

  // If the fontSelect selection is changed, call the
  // fontChanged function.
  fontSelect.changed(fontChanged);
}

function draw() {
  describe(
    'A form with "Welcome to p5.js!" for a header, a text input with the label "What is your name?", and a set of radio buttons with the label "What is your favorite food?", with the options of "Cranberries," "Almonds," or "Gouda." The text submitted through the input appears next to its label. The radio button selection changes the canvas background color. The select element changes the form font.'
  );

  // Set the background color to the current foodRadio value.
  let backgroundColor = foodRadio.value();
  background(backgroundColor);

  // Create the header for the form.
  textSize(45);

  // Move the header text side to side
  text('Fill out this form!', xPosition, 50);
  xPosition += speed;

  // Reverse direction if the text hits the canvas edges
  if (xPosition > width - 300 || xPosition < 0) {
    speed *= -1;
  }

  // Create the text inputs that will update with the
  // new user inputs.
  textSize(20);
  text(`What is your birthdate? ${nameInput.value()}`, 25, 100);
  text('What is your favorite color?', 25, 200);
}

function fontChanged() {
  // When the fontSelect value is changed,
  // update the canvas's font selection to the
  // new value.
  let fontSelection = fontSelect.value();
  textFont(fontSelection);
}
