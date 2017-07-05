import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async } from '@angular/core/testing';
import { StatisticsComponent } from './statistics.component'
import { TranslationService } from "app/services/index"

describe('Statistics', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatisticsComponent
      ],
      providers: [TranslationService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the statistics', async(() => {
    const fixture = TestBed.createComponent(StatisticsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
