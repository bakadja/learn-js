const xhr = new XMLHttpRequest();
const url = './health.json';


/*
*'GET': Specifies the HTTP method used for the request (in this case, a GET request).
*URL: Represents the URL from where you will fetch the data.
*True: Indicates if the request is asynchronous (true) or synchronous (false). In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.
*/

xhr.open('GET', url, true);

// Response type specification
xhr.responseType = 'json';

// Handling the 'onload' event
xhr.onload = () => {
    //  retrieve the articles array from the JSON response.
    const articles = xhr.response.articles;

    const articlesDiv = document.getElementById('articles');

    // Iterating through articles and constructing HTML
    articles.forEach((article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        const title = document.createElement('h2');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        const waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        const waysList = document.createElement('ul');
        article.ways_to_achieve.forEach((way) => {
            const listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        const benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        const benefitsList = document.createElement('ul');
        article.benefits.forEach((benefit) => {
            const listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}

//Sending the request
xhr.send();