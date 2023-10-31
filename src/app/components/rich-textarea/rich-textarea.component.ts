import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CommonSnackbarServiceService } from 'src/app/_services/common-snackbar-service/common-snackbar-service.service';

@Component({
  selector: 'app-rich-textarea',
  templateUrl: './rich-textarea.component.html',
  styleUrls: ['./rich-textarea.component.scss']
})
export class RichTextareaComponent implements OnInit {
  richTextForm: any = FormGroup;
  issubmitted:boolean=false;
  htmltext: any;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '30rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  htmlContentWithoutStyles!: any;
  @ViewChild('editor') editor!: AngularEditorConfig;
  constructor(
    public snackbarService:CommonSnackbarServiceService
    ) { }

  ngOnInit(): void {
    this.richTextForm = new FormGroup({
      textValue: new FormControl('', [
        Validators.required,
       
      ]),
    });
  }

  showHTML() {
    this.htmlContentWithoutStyles =
      document.getElementById('htmlDiv')?.innerHTML;
  }
    /**
   * Used for submiting the form.
   */
    submit() {
      this.issubmitted=true;
      if (this.richTextForm.valid) {
        this.snackbarService.showSnackbar('Success message', 'success-snack');
      }
    }

}
