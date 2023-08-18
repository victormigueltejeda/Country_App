import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubcripcion?: Subscription;

  /*@Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }*/

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubcripcion = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubcripcion?.unsubscribe();
  }

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  onkeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
