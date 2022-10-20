const assert = require("assert");
const expect = require("chai").expect;
const request = require("supertest");
const notes = require("../routes/notes");

const testData = [
  {
    title: "Public Service Announcement",
    text: "Tom DeLonge is back in blink-182.",
    id: "184927",
  },
  {
    title: "Urgent information for the youth",
    text: "School is out forever",
    id: "182182",
  },
];

describe("notes", function () {
  describe("GET /", () => {
    it("should return an OK status", function (done) {
      return request(notes)
        .get("/")
        .then(function (response) {
          assert.equal(response.status, 200)
          done();
        })

    });

    it("should return and render test data", function (done) {
        return request(notes)
        .get("/")
        .then(function(response){
            expect(response.text).to.contain(testData)
            done();
        })
    });
 });



});
