// answer01(if 활용)
function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      n++;
    } else if (control[i] === "s") {
      n--;
    } else if (control[i] === "d") {
      n += 10;
    } else if (control[i] === "a") {
      n -= 10;
    }
  }

  return n;
}

// answer02(switch/case 활용)
function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case "w":
        n++;
        break;
      case "s":
        n--;
        break;
      case "d":
        n += 10;
        break;
      case "a":
        n -= 10;
        break;
    }
  }
  return n;
}
