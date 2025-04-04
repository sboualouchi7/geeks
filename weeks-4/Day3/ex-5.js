class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  //1
  
 // this is the correct
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

