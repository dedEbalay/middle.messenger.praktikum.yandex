export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };

  type optionType = {
    headers: object,
    method: string,
    data: any,
    timeout: number
  }
  
  function queryStringify(data: any) {
    if (typeof data !== 'object') {
      throw new Error('Data must be object');
    }
  
    const keys: string[] = Object.keys(data);
    return keys.reduce((result, key, index):string => {
      return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
  }
  
export default class HTTPTransport {
    get = (url: string, options: optionType) => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    post = (url: string, options: optionType) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url: string, options: optionType) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url: string, options: optionType) => { 
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url: string, options: optionType, timeout = 5000) => {
        const {headers, method, data} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
            reject('No method');
            return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(
                method, 
                isGet && !!data
                ? `${url}${queryStringify(data)}`
                : url,
            );

            Object.keys(headers).forEach((key:any) => {
                xhr.setRequestHeader(key, headers[key as keyof object]);
            });

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };}