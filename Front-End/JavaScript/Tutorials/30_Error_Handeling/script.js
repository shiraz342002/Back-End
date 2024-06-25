setTimeout(() => {
  console.log("Hacking wifi.... Please wait...");
}, 1000);

try {
  console.log(rahul);
  // scheduling ke andar wala me try catch kaam nhi karega
  //     console.log(rahul)  // will still throw error
  setTimeout(() => {}, 100);
} catch (err) {
  console.log("Balle balle");
}

setTimeout(() => {
  console.log("Fetching username and password.... Please wait...");
}, 2000);

setTimeout(() => {
  console.log("Hacking Rahul's facebook id.... Please wait...");
}, 3000);

setTimeout(() => {
  console.log(
    "Username and password of Rahul (+919356700001) fetched.... Please wait..."
  );
}, 4000);
