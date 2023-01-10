(function solve() {
    
    String.prototype.ensureStart = function(str) {
        if(!this.startsWith(str)) {
            return str + this;
        }
        return this;
    }

    String.prototype.ensureEnd = function(str) {
        if(!this.endsWith(str)) {
            return this + str;
        }
        return this;
    }
    
    String.prototype.isEmpty = function() {
        if(this.length === 0) {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function(num) {
        
        if (this.length <= num) return this.toString();
            
        
        if (num < 4) return '.'.repeat(num);
            
        let word = this.split(' ');
        while ((word.join(' ') + '...').length > num) {
            if (word.length > 1) {
                word.pop();
            } else {
                word[0] = word[0].slice(0, num - 3)
            }
        }
        return word.join(' ').trim() + '...';
    }

    String.format = function(string, ...input) {
        input.forEach((x, i) => string = string.replace(`{${i}}`.toString(), x));
        return string;
    }
    
})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
//console.log(str);
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog'); 

