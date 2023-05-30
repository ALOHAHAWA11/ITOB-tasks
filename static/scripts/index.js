function sendRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5000/send_request")
    xhr.onload = () => {
        console.log(xhr.responseText)
    }
    xhr.send()
}