
 function bottleSong(b) {
    if (b>2) {
        document.write (`${b} bottles of beer on the wall! ${b} bottles of beer. 
                        Take one down, pass it around. ${b-1} bottles of beer on the wall! `);
        b--;
        bottleSong(b);
    } else if (b<2){
        document.write (`${b} bottle of beer on the wall! ${b} bottle of beer. 
                        Take one down, pass it around. ${b-1} bottles of beer on the wall!`);
    } else {
        document.write (`${b} bottles of beer on the wall! ${b} bottles of beer! 
                        Take one down, pass it around. ${b-1} bottle of beer on the wall!`);
        b--;
        bottleSong(b);
    }
}
bottleSong(99);