const { doesNotMatch } = require("assert");
const assert = require("assert");
const expect = require("chai").expect
const request = require("supertest");
const notes = require("../routes/notes")


const testData = [
    {
        "title": "Public Service Announcement",
        "text": "Tom DeLonge is back in blink-182.",
        "id": "184927"
    },
    {
        "title": "Pertinent information for the youth",
        "text": "School is out forever",
        "id": "182182"
    }
]

describe("notes", function() {
    
    describe("GET /", () => {
        it("should return an OK status", function() {
           return request(notes) 
           .get("/")
           .then(function(response){
                assert.equal(response.status, 200)
            
           })
        
        
           
    });

});

it("", () => {

});

it("", () => {

});

});