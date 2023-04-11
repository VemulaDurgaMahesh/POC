import { TestBed, waitForAsync } from '@angular/core/testing';
import { MyAppComponent } from './gps.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app0'`, () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app0');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to app0!'
    );
  });
});
