import SuperTest from "supertest";
import Chai from "chai";

const expect = Chai.expect;
const requester = SuperTest("http://localhost:8080");

let randomPrice = Math.random() * 1000;

console.log(randomPrice);

describe("Products Testing", () => {
  describe("GETS", () => {
    it("the base request should return 200", async () => {
      let response = await requester.get("/api/products");
      expect(response.status).to.be.equals(200);
    });
    it("should return an array of products", async () => {
      let response = await requester.get("/api/products");
      const { _body } = response;
      expect(_body).to.be.an("array");
    });
  });
  describe("PUTS", () => {
    it("modify product price by Id", async () => {
      let product = {
        price: randomPrice,
        stock: "4",
      };
      const response = await requester
        .put("/api/products/637b6a6d909be982a42b673c")
        .send(product);
      const { _body } = response;
      expect(_body.status.modifiedCount).to.be.equal(1);
    });
  });
});

describe("User Testing", () => {
  describe("GETS", () => {
    it("Return 200", async () => {
      let response = await requester.get("/api/users");
      const { _body } = response;
      expect(response.status).to.be.equals(200);
    });
  });
});

describe("Session Testing", () => {
  describe("POST", () => {
    it("login test with an existing user", async () => {
      let user = {
        email: "chicacoder@correo.com",
        password: "123",
      };
      let response = await requester.post("/api/sessions/login").send(user);
      expect(response.status).to.be.equals(200);
    });
  });
  describe("POST", () => {
    it("login test with an non existing user", async () => {
      let user = {
        email: "noexisto@correo.com",
        password: "123",
      };
      let response = await requester.post("/api/sessions/login").send(user);
      expect(response.status).to.be.not.equal(200);
    });
  });
  describe("POST", () => {
    it("register a new user", async () => {
      let user = {
        email: "noexisto@correo.com",
        password: "123",
      };
      let response = await requester.post("/api/sessions/login").send(user);
      expect(response.status).to.be.not.equal(200);
    });
  });
});
