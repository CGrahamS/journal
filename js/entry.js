function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.words = function() {
  var wordArray = this.body.split(" ");
  return wordArray.length;
};

Entry.prototype.vowels = function() {
  var vowels = this.body.match(/[aeiouAEIOU]/g);
  return vowels.length;
};

Entry.prototype.consonants = function() {
  var consonants = this.body.match(/[^aeiouAEIOU\s\d\W\_]/g);
  return consonants.length;
};

exports.entryModule = Entry;
