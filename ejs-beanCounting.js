// Eloquent JavaScript
// Bean Counting Exercise

/*
function countBs(string){
  var instances = 0;
  for (var counter = 0; counter < string.length; counter++)
    if (string.charAt(counter) == "B")
      instances++;
    return instances;  
};
*/

function countChar(string, j){
  var instances = 0;
  for (var counter = 0; counter < string.length; counter++)
    if (string.charAt(counter) == j)
      instances++;
    return instances;  
};

function countBs(string){
  return countChar(string, "B");
};