const ul = document.createElement("ul");

const url = "https://jsonplaceholder.typicode.com/posts";

// ? asincronía:
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach((post) => {
            const li = document.createElement("li");
            li.innerText = post.title;
            ul.append(li);
        });
        document.body.append(ul);
    });

// ? async/await
const loadData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};
loadData();
console.log("linea 2");
