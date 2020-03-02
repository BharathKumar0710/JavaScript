const btn = document.getElementById("btn");

function startUp() {
  console.log("Starting Process");
  setTimeout(() => {
    console.log("Process Ends");
  }, 4000);
}

btn.addEventListener("click", startUp);
