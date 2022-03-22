const baseUrl = "https://6231790a05f5f4d40d7b0eaf.mockapi.io/"


export function url() {
  return baseUrl;
}


export function booksGet(url) {
    return fetch(baseUrl + url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        
      },
    });
  }
  export function OneBookGet(url) {
    return fetch(baseUrl + url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
  }
  export function booksAdd(body,url) {
    console.log(body)
    console.log(url)
    return fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        ...body
      }),
    });
  }


  export function booksDelete(id,url) {
    return fetch(baseUrl + url + "/"+id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  }



  export function booksUpdate(body,url) {
    console.log(body)
    console.log(url)
    return fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        ...body
      }),
    });
  }