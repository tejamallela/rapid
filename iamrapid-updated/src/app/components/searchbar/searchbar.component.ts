import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  private searchSubject = new Subject<string>();

  constructor() {
    // Subscribe to searchSubject with debounceTime for smooth search experience
    this.searchSubject.pipe(
      debounceTime(300) // Debounce for 300ms to avoid rapid firing of events
    ).subscribe(query => {
      this.search.emit(query); // Emit the trimmed query to parent component
    });
  }

  // Method called on input change in the search input field
  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value.trim(); // Trim to remove leading and trailing whitespace
    this.searchSubject.next(query); // Send the trimmed query to the searchSubject
  }
}