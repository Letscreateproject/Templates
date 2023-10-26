/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteria, RuleOutputObj } from '../../rule-op-obj.js';
import { MatDialog } from '@angular/material/dialog';
import { CommonSnackbarServiceService } from 'src/app/_services/common-snackbar-service/common-snackbar-service.service';

@Component({
  selector: 'mk-workspace-rule-container',
  templateUrl: './rule-container.component.html',
  styleUrls: ['./rule-container.component.scss'],
})
export class RuleContainerComponent implements OnInit {
  @Output() saveRule = new EventEmitter<any>();
  @Input() isAddRule!: boolean;
  @Input() categoryList: any[] = [];
  @Input() wizardSteps: any[] = [];
  @Input() ruleJson: any;
  @Input() lookupList: any[] = [];
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  isSubmitted: boolean = false;
  ruleForm!: FormGroup;
  ruleObject: any = {};
  ruleArray!: FormArray;
  queryCondition = 'AND';
  operatorList: any[] = [
    { key: 'EQUALS', value: 'EQUALS', type: ['STRING', 'NUMBER'] },
    { key: 'NOT_EQUALS', value: 'NOT EQUALS', type: ['STRING', 'NUMBER'] },
    { key: 'GREATER_THAN', value: 'GREATER THAN', type: ['NUMBER'] },
    { key: 'LESS_THAN', value: 'LESS THAN', type: ['NUMBER'] },
    { key: 'STARTS_WITH', value: 'STARTS WITH', type: ['STRING'] },
    { key: 'CONTAINS', value: 'CONTAINS', type: ['STRING'] },
    { key: 'NOT_CONTAINS', value: 'DOES NOT CONTAIN', type: ['STRING'] },
    {
      key: 'GREATER_THAN_EQUAL',
      value: 'GREATER THAN OR EQUAL',
      type: ['NUMBER'],
    },
    { key: 'LESS_THAN_EQUAL', value: 'LESS THAN OR EQUAL', type: ['NUMBER'] },
    { key: 'DATE_GT', value: 'DATE GREATER THAN', type: ['DATE'] },
    { key: 'DATE_LT', value: 'DATE LESS THAN', type: ['DATE'] },
    { key: 'DATE_EQUAL', value: 'DATE EQUAL', type: ['DATE'] },
    // { key: 'MVEL', value: 'MVEL', type: ['STRING'] },
  ];

  criteriaObj: Criteria = {
    criteria: {
      logicalOperators: [''],
      expressionObjects: [
        {
          fieldName: '',
          operator: '',
          fieldValue: '',
          fieldType: '',
          fieldDataTypeUI: 'TEXT',
          fieldLookupCodeUI: '',
        },
      ],
    },
  };

  opObj: RuleOutputObj = {
    ruleName: '',
    ruleDescription: '',
    ruleJson: {
      logicalOperators: [''],
      expressionObjects: [
        {
          fieldName: '',
          operator: '',
          fieldValue: '',
          fieldType: 'STRING',
          fieldDataTypeUI: 'TEXT',
          fieldLookupCodeUI: '',
        },
      ],
      conditions: [this.criteriaObj],
    },
  };
  wizardStepsObj: any = { nodeTrueCond: '', nodeFalseCond: '' };

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    public snackbarService: CommonSnackbarServiceService
  ) {}
  ngOnInit(): void {
    this.ruleForm = this.createGroup();
    this.ruleArray = this.ruleForm.get('rules') as FormArray;
  }
  addRow(type: any): void {
    if (type === 0) {
      this.addGroup();
    } else {
      this.addCondition();
    }
  }

  private addCondition(): void {
    this.ruleArray.push(this.createRules());
    if (this.ruleArray.controls.length === 2) {
      this.ruleForm.patchValue({
        condition: this.queryCondition,
      });
    }
  }

  private addGroup(): void {
    this.ruleArray.push(this.createGroup());
    if (this.ruleArray.controls.length === 2) {
      this.ruleForm.patchValue({
        condition: this.queryCondition,
      });
    }
  }

  removeRow(i: number): void {
    this.ruleArray.removeAt(i);
    if (this.ruleArray.controls.length === 1) {
      this.queryCondition = this.ruleForm.value.condition;
      this.ruleForm.patchValue({
        condition: '',
      });
    }
  }
  private setRuleResponseBaseObj(): FormGroup {
    return this.formBuilder.group({
      logicalOperators: [],
      expressionObjects: [],
      groupName: 'Test',
      parentGroupName: '',
      parnetId: '1',
      ruleId: '1',
      conditions: [],
    });
  }
  createConditions(): FormGroup {
    return this.formBuilder.group({
      criteria: this.setRuleResponseBaseObj(),
    });
  }

  private createRules(): FormGroup {
    return this.formBuilder.group({
      fieldName: ['', Validators.required],
      operator: ['', Validators.required],
      fieldValue: ['', Validators.required],
      fieldType: ['STRING'],
      fieldDataTypeUI: ['TEXT'],
      fieldLookupCodeUI: [''],
    });
  }

  private createGroup(): FormGroup {
    return this.formBuilder.group({
      condition: 'AND',
      rules: this.formBuilder.array([this.createRules()]),
    });
  }
  onGenerateRule() {
    this.isSubmitted = true;
    if (this.ruleForm.valid) {
      this.isSubmitted = false;
      const sampleJson = this.ruleForm.getRawValue();

      console.log(sampleJson);
      this.ruleForm.reset();
      this.snackbarService.showSnackbar('Success message', 'success-snack');
    }
  }
  show() {
    let dialogRef = this.dialog.open(this.callAPIDialog);
  }
}
