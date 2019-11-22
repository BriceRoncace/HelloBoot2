function objectLiteralExample() {

  const color = 'red'
  const point = {
    x: 5,
    y: 10,
    color,
    toString() {
      return `X=${this.x}, Y=${this.y}, color='${this.color}'`;
    },
    sayHello() {
      return `Hello from ${this.toString()}`;
    },
    ['prop_' + 42]: 42
  }
  
  console.log('The point is ' + point)
  console.log('Saying Hello: ' + point.sayHello());
  console.log('The dynamic property is ' + point.prop_42)
}

export {objectLiteralExample};