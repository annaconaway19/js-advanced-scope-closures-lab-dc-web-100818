function produceDrivingRange(blockRange) {
  return function (block1, block2) {
    let difference = parseInt(block1) - parseInt(block2);
    let range = Math.abs(difference);
      if (range > blockRange) {
        return `${Math.abs(range - blockRange)} blocks out of range`;
      } else if (range < blockRange) {
        return `within range by ${Math.abs(blockRange - range)}`;
    };
  }
}


function produceTipCalculator(num) {
  return function (percent) {
    return num * percent
  }
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
