
import { CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SelectorComponent } from './selector.component';
import { By } from '@angular/platform-browser';
import { MatSelectModule, MatOptionModule, MatOption, MatSelect } from '@angular/material';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;
  let matSelect: MatSelect;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      imports: [
        MatSelectModule,
        MatOptionModule,
        MatMenuModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    component.selectData = [
      {value: 'Alt1', viewValue: 'Alternative 1'},
      {value: 'Alt2', viewValue: 'Alternative 2'},
      {value: 'Alt3', viewValue: 'Alternative 3'},
    ];
    component.selected = 'Alt2';
    component.placeholder = 'PlaceholderTest';
    component.label = 'LabelTest';
    component.choiceDisabled = 'Alt3';
    matSelect = fixture.debugElement.query(By.css('mat-select')).context;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have same amount of options as defined in selectData', () => {
    const options: MatOption[] = matSelect.options.toArray();
    expect(options.length).toBe(component.selectData.length);
  });

  it('Selected should be same as sent in value', () => {
    expect(matSelect.value).toEqual('Alt2');
  });

  it('Placeholder should be same as sent in value', () => {
    expect(matSelect.placeholder).toContain('PlaceholderTest');
  });

  it('Label should be same as sent in value', () => {
    expect(getElementByCss('.hal-selector-label').nativeElement.textContent).toContain('LabelTest');
  });

  it('Option should be disabled if sent in as disabled', () => {
    const options: MatOption[] = matSelect.options.toArray();
    const option = options.find(opt => opt.value === 'Alt3');
    if (option) {
      expect(option.disabled).toBeTruthy();
    }
  });

  describe('If select is disabled', () => {
    beforeEach(() => {
      component.disabled = true;
      fixture.detectChanges();
    });

    it('mat-select should be disabled', () => {
      expect(matSelect.disabled).toEqual(true);
    });
  });

  describe('If noLable is true', () => {
    beforeEach(() => {
      component.noLabel = true;
      fixture.detectChanges();
    });

    it('hal-selector-label should not exist', () => {
      expect(getElementByCss('.hal-selector-label')).toBeFalsy();
    });
  });

  it('When new selected onSelectedChange should be called', () => {
    const spy = spyOn(component, 'onSelectedChange');
    const selectElement: HTMLElement = getElement('mat-select .mat-select-trigger');
    selectElement.click();
    fixture.detectChanges();

    const options = document.querySelectorAll('mat-option');
    (options.item(0) as HTMLElement).click();
    fixture.detectChanges();

    expect(matSelect.value).toEqual('Alt1');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  function getElementByCss(className: string) {
    return fixture.debugElement.query(By.css(className));
  }
  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
