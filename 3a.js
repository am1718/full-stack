let student = {
  name: "Akash",
  grade: 85,
  subjects: ["Math", "English", "Science"],
  
  displayInfo: function() {
    console.log("Student Name:", this.name);
    console.log("Grade:", this.grade);
    console.log("Subjects:", this.subjects.join(", "));
  }
};
student.displayInfo();