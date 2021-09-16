import { ReplaceImages } from "helpers/ReplaceImages";

const testImages = [{ name: "3131acv99jvc9jva0", original_name: "index.png" }];
const text = `
# test 

@ test 

@test

![alt](index.png)
`;

const Valid = `
# test 

@ test 

@test

![alt](http://localhost:8000/posts/images/name=3131acv99jvc9jva0)
`;

test("inserts file's name into string", () => {
  expect(ReplaceImages(text, testImages)).toStrictEqual(Valid);
});
