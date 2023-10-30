export async function timer(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
