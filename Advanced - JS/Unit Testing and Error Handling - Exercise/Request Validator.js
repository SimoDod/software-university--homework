function reqValidator(obj) {
  let methods = ["GET", "POST", "DELETE", "CONNECT"];
  let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let specialChars = [`<`, `>`, `\\`, `&`, `'`, `"`];

  let uriRegExp = /[\w\.]+/gm;

  if (!methods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!obj.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (obj.uri.length < 1) {
    throw new Error("Invalid request header: Invalid URI");
  } else {
    let validationCheck = uriRegExp.exec(obj.uri);
    if (validationCheck[0] !== validationCheck.input) {
      throw new Error("Invalid request header: Invalid URI");
    }
  }

  if (!versions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  } else {
    for (const ch of obj.message) {
      if (specialChars.includes(ch)) {
        throw new Error("Invalid request header: Invalid Message");
      }
    }
  }
  console.log(obj);
  return obj;
}

reqValidator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
});
