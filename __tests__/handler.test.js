import { promisify } from "util";
import lambda from "../src/handler";
const handler = promisify(lambda.hello);

describe("Handler tests", function() {
  it("the handler function should work", function(done) {
    const event = {};
    const context = {};
    const callback = (ctx, data) => {
      done();
    };

    const result = handler(event, context, callback);
    result
      .then(data => {
        expect(data).toEqual({
          body:
            '{"message":"Go Serverless v1.0! Your function executed successfully!","input":{}}',
          statusCode: 200
        });
      })
      .catch(e => {
        expect(e).toBe("Failed message");
      });
    callback();
  });
});
