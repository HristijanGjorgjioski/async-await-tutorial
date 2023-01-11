function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2+4);
    }, 2000);
  });
}

async function asyncCall() {
    console.log('started calling');
    const result = await resolveAfter2Seconds();
    console.log(result, '<== result')
}

asyncCall();

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

const getData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonResponse = await result.json();
    console.log(jsonResponse)
}
getData()

function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");

  const slow = await resolveAfter2Seconds();
  console.log(slow);

  const fast = await resolveAfter1Second();
  console.log(fast);
}

sequentialStart();
