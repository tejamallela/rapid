import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filterpopup.component.html',
  styleUrls: ['./filterpopup.component.scss']
})
export class FilterPopupComponent {
  @Output() filterChange = new EventEmitter<{ technologies: string[], industries: string[] }>();
  @Output() close = new EventEmitter<void>();

  technologyFilters = ['FDM', 'SLA', 'SLS', 'MJF', 'Polyjet', 'DMLS', 'SLM', 'Vacuum Casting', 'CNC'];
  industryFilters = ['Automative', 'Aerospace', 'Consumer electronics', 'Robotics and Automation', 'Medical and Dental', 'Hobbyists', 'Architectural', 'Jewellery'];

  selectedTechnologyFilters: Set<string> = new Set();
  selectedIndustryFilters: Set<string> = new Set();

  isVisible = true;
  isTechnologyCollapsed = true;
  isIndustryCollapsed = true;

  toggleCollapse(section: 'technology' | 'industry') {
    if (section === 'technology') {
      this.isTechnologyCollapsed = !this.isTechnologyCollapsed;
    } else {
      this.isIndustryCollapsed = !this.isIndustryCollapsed;
    }
  }

  onTechnologyChange(filter: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedTechnologyFilters.add(filter);
    } else {
      this.selectedTechnologyFilters.delete(filter);
    }
  }

  onIndustryChange(filter: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedIndustryFilters.add(filter);
    } else {
      this.selectedIndustryFilters.delete(filter);
    }
  }

  applyFilters() {
    this.filterChange.emit({
      technologies: Array.from(this.selectedTechnologyFilters),
      industries: Array.from(this.selectedIndustryFilters)
    });
  }

  resetFilters() {
    this.selectedTechnologyFilters.clear();
    this.selectedIndustryFilters.clear();
    this.filterChange.emit({ technologies: [], industries: [] });
  }

  closePopup() {
    this.isVisible = false;
    this.close.emit();
  }
}
