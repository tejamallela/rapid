import { Component, Input, OnChanges } from '@angular/core';
import { ItemDataService } from '../../service/itemdata.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemListComponent implements OnChanges {
  @Input() searchQuery = '';
  @Input() filters: string[] = [];
  filteredItems!: any[];

  constructor(private itemDataService: ItemDataService) { }

  ngOnChanges() {
    // Fetch all items initially
    let items = this.itemDataService.getItems();

    // Filter by search query if it exists
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query)
      );
    }

    // Further filter by selected filters if any exist
    if (this.filters.length > 0) {
      items = items.filter(item =>
        this.filters.every(filter => item.tags.includes(filter))
      );
    }

    this.filteredItems = items;
  }

  learnMore(url: string) {
    window.open(url, '_blank');
  }
}
