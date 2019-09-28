const portfolio = [
    {
        title: "Sweet Eats Bakery",
        img: "../img/bakery.jpg",
        description: "This is the first I built at Lamda which uses only basics of HTML and CSS",
        githubUrl: "https://github.com/mohdraz/Sweet-Eats-Bakery",
        url: "https://sweeteats-bakery.netlify.com/",
    }, 

    {
        title: "React American Footbal UI", 
        img: "../img/football.jpg",
        description: "Built Using React",
        githubUrul: "https://github.com/mohdraz/react-american-football-scoreboard",
        url: "https://dreamy-golick-81d888.netlify.com"
    },

    {
        title: "Design Using Flexbox", 
        img: "../img/mobile.jpg",
        description: "Built Using Flexbox",
        githubUrul: "https://github.com/mohdraz/UI-III-Flexbox",
        url: "https://inspiring-hawking-79897e.netlify.com/"
    },


    {
        title: "Calculator UI", 
        img: "../img/calculator.jpg",
        description: "Calculator UI using react",
        githubUrul: "https://github.com/mohdraz/lambda-calculator",
        url: "https://youthful-fermi-9aedde.netlify.com/"
    },

];

// function to create portoflio items

function createPortfolio (portfolioData) {
    // create element
    const card = document.createElement('article');
    const heading = document.createElement('h3');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const desc = document.createElement('p');
    // div for the url buttons
    const buttonContainer = document.createElement('div');
    const github = document.createElement('a');
    const url = document.createElement('a');

    // append elements
    card.appendChild(heading);
    card.appendChild(imgContainer);
    imgContainer.appendChild(img);
    card.appendChild(desc);
    card.appendChild(buttonContainer);
    buttonContainer.appendChild(github)
    buttonContainer.appendChild(url);

    // apply styles 

    heading.classList.add('heading-tertiary', 'u-big-margin-medium');
    card.classList.add('card');
    buttonContainer.classList.add('buttonContainer');

    // apply content 

    heading.textContent = portfolioData.title;
    img.src = portfolioData.img;
    desc.textContent = portfolioData.description;
    github.textContent= "Github Repo";
    github.href = portfolioData.githubUrl;
    url.textContent = "DEMO";
    url.href = portfolioData.url;


    return card;
}

const portfolioSection = document.querySelector('.portfolio__card');
console.log("por sect", portfolioSection);

portfolio.forEach( data => {
    portfolioSection.appendChild(createPortfolio(data));
})

