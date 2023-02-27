function getGrade (s1, s2, s3) {
  // Code here
  let average = Math.round((s1 + s2 + s3) / 3);
  
  console.log(average);
  console.log(80 <= average <= 89);

  if (90 <= average && average <= 100) {
    return 'A';
  } else if (80 <= average && average <= 89) {
    return 'B';
  } else if (70 <= average && average <= 79) {
    return 'C';
  } else if (60 <= average && average <= 69) {
    return 'D'
  } else {
    return 'F';
  }
  
}



console.log(getGrade(95,90,93))
console.log(getGrade(82,85,87))
console.log(getGrade(84,79,85))
console.log(getGrade(66,62,68))