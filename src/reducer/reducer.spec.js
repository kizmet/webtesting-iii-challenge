import { reducer, initialState } from "./reducer";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it("should handle TOGGLE_LOCKED", () => {
    expect(
      reducer(
        {
          locked: false,
          closed: false
        },
        {
          type: "TOGGLE_LOCKED"
        }
      )
    ).toEqual({
      locked: true,
      closed: false
    });
  });

it("should handle TOGGLE_CLOSED", () => {
    expect(
      reducer(
        {
          locked: false,
          closed: false
        },
        {
          type: "TOGGLE_CLOSED"
        }
      )
    ).toEqual({
      locked: false,
      closed: true
    });
  });
    
});
