import service from './request'
export default function api (url, method, data) {
  return service({
    url: url,
    method: method,
    data: data
  })
}