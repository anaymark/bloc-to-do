# Explain the difference between the request/response cycle.

* requesting to a server means typing in a URL or clicking on a link that submits a request for information to be sent back to target servers. This request can be for get, put, post, patch, delete.

* response is what occurs once the request is sent an processed by the target server and the proper response is retrieved/sent.


# List common response codes and their groupings.

* 100s-informational responses

* 200s-means the request was recieved and processed by the server successfuly

* 300s-means the request was recieved and then redirected somewhere else

* 400s-the requestor made a mistake, the most well-known code is 404: Not Found. This indicates that the requestor asked for a resource that doesn't exist.

* 500-the server made a mistake, either the server is down or code on the server threw an error. 


# Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.

* GET-used to *retrieve* a page from a server, this is the default HTTP verb that is used. 

* POST-this is used to *create* a **new** object on the server. 

* PATCH-this is used to *update* an existing object on the server.

* PUT-this is used to *replace* an existing object on the server. Should only be used when sending a complete replacement for an object.

* DELETE-this is used to *delete* an object from the server.


# Explain the difference between synchronous and asynchronous code.
> Synchronous code executes in a linear fascion and you must wait for it to finish before moving on to another task. 
>Asynchronous code you can move on to another task while the code is still executing/running. 

# Explain what a JavaScript promise is.
> A javascript promise is an eventual result of an asynchronous operation. It acts as a placeholder into which the successful result value or reason for failure will eventually materialize.

## Promise states

* Pending

* Fulfilled

* Rejected

# Explain why CORS exists and how we can work around it.
> Cross-Origin Resource Sharing is a security net for calling API endpoints under different domains(not original API domains). If all CORS were allowed theives could steal your bank information if it was open in your browser as well as download viruses and other malware. CORS are disallowed by default it modern browsers. Using proxy sites will allow to work with CORS restrictions and allow API requests without making changes to the data. 

## CORS HTTP headers (request/response)

* Access-Control-Allow-Origin: Meant to be returned by the server, and indicate the client domains allowed to access the resources
	
	* ```*```any domain is allowed
	* a domain name is explicitly defined. eg.  https://example.com

* Access-Control-Allow-Credentials: This header is only required to be present in the response if your server supports cookies authentication, and the only valid value for this case is true

* Access-Control-Allow-Headers: Provides a comma seperated list of headers the server is willing to support. 

* Access-Control-Expose-Header: Provides a list of headers that will be present in the actual responce to the call and should be made available to the client. **All other headers will be restricted**

* Origin: This header is part of the actual request that the client is making, and will contain the domain from which the APP started. 

# Create a fetch request in JavaScript.
```
let url = "https://cors-anywhere.herokuapp.com/http://www.example.com";

fetch(url)
  .then(r => {
    console.log(r);
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });
```
# It is time to build HackerNews from scratch! But you need easy access to an API for a list of all the stories currently there. A. Go to News API and click 'Get API Key' sign up for a free API key. B. Use your API key to create a fetch using this URL: https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE> C. Loop through the result data, and for each story on HackerNews, create an <li> tag that contains the contents of the story.

```
<!DOCTYPE html>
<html>
  <head>
  	<script type="text/javascript">let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=68c4d16deccc402a90476e68d272f14c";

fetch(url)
  .then(r => {
    return r.json();
  })
  .then(data => {
    let results = data.articles; // get the array of results from the data object
    let newsList = document.createElement("ul"); // create a new `<li>`
    let body = document.querySelector("body"); // attach to the `<body>` node of the DOM
    body.appendChild(newsList); // append the list to the body
    results.map(result => {
      // loop through each article object in the array of articles
      let newsItem = document.createElement("li"); // create a article item `<li>`
      newsItem.innerHTML =
        '<a href="' + result.url + '">' + result.title + "</a>"; // add the link to each li with each aricles title as the text and link as the href
      newsList.appendChild(newsItem); // append each article to the `<ul>`
    });
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });</script>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>

```