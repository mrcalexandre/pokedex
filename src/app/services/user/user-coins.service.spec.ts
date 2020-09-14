import { TestBed } from "@angular/core/testing";

import { UserCoinsService } from "./user-coins.service";

describe("UserCoinsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UserCoinsService = TestBed.get(UserCoinsService);
    expect(service).toBeTruthy();
  });
});
