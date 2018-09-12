class Sorter {
  constructor() {
    this.arr= [];
  }

  add(element) {
   this.arr.push(element)
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
   return this.arr.length
  }

  toArray() {
    return this.arr
  }

  sort(indices) {
    let arrToComp = [];
    indices.sort();
    for(let i = 0;i<indices.length;i++){
        let temp = indices[i];
        arrToComp[i] = this.at(temp);
    }
     if (this.compareFunction === undefined){
            arrToComp.sort(function(a,b){
  return a > b ? 1: -1;
    });}
            else
        arrToComp.sort(this.compareFunction);
   // alert(arrToComp[0])
    for(let i =0;i<indices.length;i++){
        this.arr[indices[i]]=arrToComp[i];
       // alert(this.arr[0]);
    }
    
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;