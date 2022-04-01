/**
 * Handles the lifecycle of `superagent` requests.
 * Call `unmount` to interrupt the requests in flight.
 */
export default class Requests {
  requests = [];

  add(request) {
    this.requests.push(request);
    request.on('end', () => {
      this.requests = this.requests.filter(r => r !== request);
    });
  }

  unmount() {
    for (const request of this.requests) {
      request.abort();
    }
    this.requests = [];
  }
}
