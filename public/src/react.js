const reactContentRoot = document.getElementById("root-main")

async function getRepos(){
    const url = "http://api.github.com"
    const response = await fetch(url)
    const result = await response.json();

    console.log(result);
}

ReactDOM.render(<getRepos />, reactContentRoot);