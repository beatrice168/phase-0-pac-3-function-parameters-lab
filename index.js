

//function to return an Introduction phrase with the given name 
function introduction(name) {
   return `Hi, my name is ${name}.`;
}

//function to return an Intoduction phrase with the given name and language
function introductionWithLanguage ( name, language = "Ember.js") {
   return `Hi, my name is ${ name} and I am learning to program in ${ language}.`;
}


//function to return an Introduction phrase with the given name and defaulting to javascript if no language is provided
function introductionWithLanguageOptional(name, language ="JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${ language}.`;
}
 console.log(introductionWithLanguageOptional("Gracie", "Python"));