/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'mk-workspace-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnChanges {
  @Input() ruleForm!: any;
  @Input() deleteYn!: boolean;
  @Output() addRow: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteRow: EventEmitter<number> = new EventEmitter<number>();
  ruleArray!: FormArray;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ruleForm']?.currentValue) {
      this.ruleArray = this.ruleForm.get('rules') as FormArray;
    }
  }
 /**
   * Used for adding a new gorup condition to the rule
   */
  addGroup(): void {
    this.addRow.emit(0);
  }
 /**
   * Used for adding a new condition 
   */
  addCondition(): void {
    this.addRow.emit(1);
  }
 /**
   * Used for remove a condition 
   */
  removeRow(): void {
    this.deleteRow.emit();
  }
}
