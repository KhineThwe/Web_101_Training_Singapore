function Maganize(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//prototype
Maganize.prototype.getTitle = function(){
    return `This title is ${this.title}`;
}

Maganize.prototype.getYears = function(){
    const year = new Date().getFullYear() - this.year;
    return `this ${this.title} is written by ${this.author} and years = ${year}`;
}

var manga = new Maganize("English","Mg Mg",2021);
console.log(manga.getTitle());

console.log(manga.getYears());