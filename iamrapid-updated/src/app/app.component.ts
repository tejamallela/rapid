import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchQuery = '';
  filters: { technologies: string[], industries: string[] } = { technologies: [], industries: [] };
  isFilterPopupVisible = false;

  onSearch(query: string) {
    this.searchQuery = query;
  }

  onFilterChange(filters: { technologies: string[], industries: string[] }) {
    this.filters = filters;
  }

  toggleFilterPopup() {
    this.isFilterPopupVisible = !this.isFilterPopupVisible;
  }

  onFilterPopupClose() {
    this.isFilterPopupVisible = false;
  }
}
