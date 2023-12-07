import { test, expect } from "bun:test";

test("Get /hello", async() => {
    const res = await fetch("http://localhost:3000/hello?name=jeremiasbots")
    const text = await res.text()
    expect(text).toBe("Hello world!")
})