function runActivity() {
  function toCelsius(f) {
    let cel = ((f - 32) * 5) / 9;
    return cel;
  }

  let fah = Number(prompt("Give me a fahrenheit value."));
  console.log(fah + " fahrenheit in Celsius is " + toCelsius(fah));
}
