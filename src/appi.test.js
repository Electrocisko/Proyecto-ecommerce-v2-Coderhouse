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
    it("modify product by Id", async () => {
      let product = {
        price: randomPrice,
        stock: "4",
      };
      const response = await requester.put("/api/products/637b6a6d909be982a42b673c").send(product)
      const { _body } = response
      expect(_body.status.modifiedCount).to.be.equal(1)
    });
  });
});

describe('UserTesting', () => {
    describe('GETS', () => {
        it('Return 200', async () => {
            let response = await requester.get('/api/users')
            const { _body} = response
            expect(response.status).to.be.equals(200);
        })
    })
})


describe('SessionTesting', () => {
    describe('GETS', () => {
        it('Return 200', async () => {
            let response = await requester.get('/api/users')
            const { _body} = response
            expect(response.status).to.be.equals(200);
        })
    })
})



