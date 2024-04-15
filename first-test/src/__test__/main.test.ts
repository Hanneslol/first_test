import { sendMessage } from "../ts/main";

describe("testing sendmessage", () => {
    test("should be what goes in", () => {


        let result = ""
        result = sendMessage("Hello world")

        expect(result).toBe("Hello world");
    });
});
