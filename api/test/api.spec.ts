import request from "supertest";

import app from "../src/app";

describe("GET /api/items", () => {
  let token = ""

  beforeAll(function(done) {
    request(app)
      .post('/api/auth')
      .send({ name: "Maria", lastname: "Giraldo" })
      .end(function(err, res) {
        token = res.body.token; 
        done();
      });
  });
  
  it("should return 401 error when call without token", () => {
    return request(app).get("/api/items").expect(401);
  });

  it("should return 400 error when call without query param", () => {
    return request(app).get("/api/items").set('Authorization', 'Bearer ' + token).expect(400);
  });

  it("should return 200 ok", () => {
    return request(app).get("/api/items?q=query").set('Authorization', 'Bearer ' + token).expect(200);
  });
});
