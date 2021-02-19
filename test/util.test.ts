import { Demo } from '../src/utils/index';

describe("demo", () => {
  it("first", () => {
    const d = new Demo();
    d.hello()
    expect(1).toBe(1);
  });
});

