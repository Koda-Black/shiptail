class Config {
  get_input(type, field) {
    if (type === "POST") {
      type = "POST";
    }
    if (type === "GET") {
      type = "GET";
    }

    return JSON.parse(new URLSearchParams(window.location.search).get(field));
  }

  check_request(request) {
    if (window.location.href.includes(request)) {
      return true;
    }
    return false;
  }

  create_response_object(status, status_code, message, data = null) {
    const response = {
      status: status,
      status_code: status_code,
      message: message,
    };
    if (data !== null) {
      response.data = data;
    }

    return JSON.stringify(response);
  }
}

const config = new Config();
