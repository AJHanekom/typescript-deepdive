// https://basarat.gitbooks.io/typescript/content/docs/template-strings.html

// Syntactically these are strings that use backticks ( i.e. ` )
// instead of single (') or double (") quotes.

// The motivation of Template Strings is three fold:
//  String Interpolation
//  Multiline Strings
//  Tagged Templates

// String Interpolation
// Previously
var sentence = "Amazing things";
var html = "<div>" + sentence + "</div>";

// Now
var html = `Hello there ${sentence}`;
console.log(`${20 + 20}`);

// Multiline Strings
var multilineIsEasyWithBackticks = `
I 
Am 
Sam
`;
console.log(multilineIsEasyWithBackticks);

// Tagged Templates
var context = "this < character";
var html = htmlEscape`<div>Breaking news -> ${context} is no more</div>`;

function htmlEscape(literals: TemplateStringsArray, ...placeholders: string[]) {
  let result: "";
  // interleave
  for (let i = 0; i < placeholders.length; i++) {
    result += literals[i];
    result += placeholders[i]
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  result += literals[literals.length - 1];
  return result;
}

console.log(html);
