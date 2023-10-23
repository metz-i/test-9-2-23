document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
      command: "generate",
      quota,
    });
  });
  
  // When the worker sends a message back to the main thread,
  // update the output box with a message for the user, including the number of
  // primes that were generated, taken from the message data.
  worker.addEventListener("message", (message) => {
    document.querySelector(
      "#output",
    ).textContent = `Finished generating ${message.data} primes!`;
  });
  
  document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value =
      'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
  });