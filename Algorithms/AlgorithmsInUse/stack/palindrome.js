function Stack() {

    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.size = 0;
}

function push(element) {
    this.dataStore[this.top++] = element;
    this.size += 1;
}

function pop() {

    return this.dataStore[--this.top];
    this.size -= 1;
}

function peek() {
    return this.dataStore[this.top-1];
}

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while(s.size > 0){
        rword += s.pop();
        --s.size;
    }
    if (word == rword) {
        console.log(word + " is a palindrome.");
    }
    else {
        console.log(word + " is not a palindrome.");
    }
}
var word = "hello";
isPalindrome(word);
var word2 = "illi";
isPalindrome(word2);

