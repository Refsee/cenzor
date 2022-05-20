import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public arrBadWords: Array<string> = ['hello'];
  public badWord = '';
  public textArea = '';
  public isInput = false;
  public isArea = false;
  public placeholderInput = 'word here...';
  public placeholderArea = 'text here...';

  addBadWords(): void {
    if (this.badWord != '') {
      this.arrBadWords.push(this.badWord);
      this.badWord = '';
      this.isInput = false;
      this.placeholderInput = 'word here...';
    } 
    else {
      this.isInput = true;
      this.placeholderInput = 'Please write a word!';
    }
  }

  reset(): void {
    this.arrBadWords = [];
    this.badWord = '';
    this.textArea = '';
    this.isInput = false;
    this.isArea = false;
    this.placeholderInput = 'word here...';
    this.placeholderArea = 'text here...';
  }

  textCenzor(): void {
    if (this.textArea != '') {
      let newSrt: string = this.textArea;
      this.arrBadWords.forEach((item) => {
        const regWord = new RegExp(`\\b${item}\\b`, 'g');
        newSrt = newSrt.replace(regWord, '*'.repeat(item.length));
      });
      this.textArea = newSrt;
      this.isArea = false;
      this.placeholderArea = 'text here...';
    } 
    else {
      this.isArea = true;
      this.placeholderArea = 'Please write a text!';
    }
  }
}
