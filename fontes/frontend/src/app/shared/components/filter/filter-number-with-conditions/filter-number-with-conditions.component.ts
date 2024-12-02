import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { ItemBase } from 'app/shared/models/item-base.module';
import { CalculatorComponent } from '../../../components/calculator/calculator.component';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

interface NumberFiltersOptions {
  value: string
}

@Component({
  selector: 'filter-number-with-conditions',
  templateUrl: './filter-number-with-conditions.component.html',
  styleUrls: ['./filter-number-with-conditions.component.scss']
})
export class FilterNumberWithConditionsComponent implements OnInit, OnDestroy {
  @Input() variables: ItemBase[];
  @Output() newNumberEvent = new EventEmitter<{ parameter: string, value: number | { start: number, end: number } }>();
  /**
   * Subject responsável por remover os observadores que estão rodando na pagina no momento do componente ser deletado.
   */
  private ngUnsubscribe = new Subject();

  constructor(private translocoService: TranslocoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.selectedNumberFiltersOption.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe((newParameter: string) => {
      this.verifyConditionToSendValues(newParameter, this.searchableNumber.value);
    });

    this.searchableNumber.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe((newValue: number) => {
      this.verifyConditionToSendValues(this.selectedNumberFiltersOption.value, newValue);
    });

    this.searchableFinalNumber.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe((newFinalNumber: number) => {
      if (this.selectedNumberFiltersOption.value == "between") {
        this.verifyConditionToSendValues(this.selectedNumberFiltersOption.value, { start: this.searchableInitialNumber.value, end: newFinalNumber });
      }
    });
    this.searchableInitialNumber.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe((newInitialNumber: number) => {
      if (this.selectedNumberFiltersOption.value == "between") {
        this.verifyConditionToSendValues(this.selectedNumberFiltersOption.value, { start: newInitialNumber, end: this.searchableFinalNumber.value });
      }
    });
  }

  verifyConditionToSendValues(parameter: string, value: number | { start: number, end: number }) {
    if (value != null) {
      this.newNumberEvent.emit({ parameter: parameter, value: value });
    }
  }

  searchableInitialNumber: FormControl<number> = new FormControl<number>(0);
  searchableFinalNumber: FormControl<number> = new FormControl<number>(0);

  searchableNumber: FormControl<number> = new FormControl<number>(0);

  numberFiltersOptions: NumberFiltersOptions[] = [
    { value: "equal" },
    { value: "different" },
    { value: "biggerThan" },
    { value: "biggerOrEqualThan" },
    { value: "smallerThan" },
    { value: "smallerOrEqualThan" },
    { value: "between" }
  ]

  selectedNumberFiltersOption = new FormControl<string>(this.numberFiltersOptions[0][0]);

  calculatorIsEnabled: boolean = false;

  number: number;

  showCalculator() {
    this.calculatorIsEnabled = !this.calculatorIsEnabled;
  }

  openCalculator(range: "initial" | "final") {
    const dialogCalculatorRef = this.dialog.open(CalculatorComponent,
      {
        data: { display: "0" }
      });

    dialogCalculatorRef.afterClosed().pipe(takeUntil(this.ngUnsubscribe)).subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == null) return;
      // this.number=this.number;


      if (range == "initial") {
        this.searchableInitialNumber.setValue(result);
      } else if (range == "final") {
        this.searchableFinalNumber.setValue(result);
      } else {
        this.searchableNumber.setValue(result);
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
