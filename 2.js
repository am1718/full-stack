const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.question("Sentence with 'JavaScript': ", (s) => {
  if (s.includes("JavaScript")) {
    console.log("Length:", s.length);
    console.log("Extracted:", s.substr(s.indexOf("JavaScript"), 10));
    console.log("Replaced:", s.replace("JavaScript", "Python"));
  } else {
    console.log("Missing 'JavaScript' in input.");
  }

  rl.question("Word to check palindrome: ", (w) => {
    const c = w.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(c === [...c].reverse().join("") ? "Yes, it's a palindrome." : "No, it's not.");
    rl.close();
  });
});
