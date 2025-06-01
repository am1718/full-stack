let student = {
  name: "Akash",
  grade: 85,
  subjects: ["Math", "English", "Science"],
  
  displayInfo: function() {
    console.log("All student details:");
    for (let key in this) {
      if (typeof this[key] !== "function") {
        console.log(key + ":", this[key]);
      }
    }
  }
};

student.displayInfo();
