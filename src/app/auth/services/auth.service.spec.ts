import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MaterialModule } from "src/app/shared/material/material.module";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
