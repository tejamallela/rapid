import { Injectable } from '@angular/core';

interface Item {
  name: string;
  tags: string[];
  image: string;
  description: string;
  availableColors: string[];
  moreInfo: {
    pros: string;
    cons: string;
    others: string;
  };
  fullUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemDataService {
  private items: Item[] = [
    {
      name: 'PLA (Polylactic Acid)',
      tags: ['3D printing', 'FDM', 'Medical and Dental', 'Standard Plastic'],
      image: './pla.png',
      description: 'Description for PLA',
      availableColors: ['black', 'red', 'white', 'yellow'],
      moreInfo: {
        pros: 'Pros of PLA',
        cons: 'Cons of PLA',
        others: 'Other information',
      },
      fullUrl: 'https://en.wikipedia.org/wiki/Polylactic_acid'
    },
    {
      name: 'PTEG',
      tags: ['3D printing', 'SLA', 'Electronics', 'Resin'],
      image: './pteg.png',
      description: 'Description related to the item',
      availableColors: ['black', 'grey', 'white'],
      moreInfo: {
        pros: 'Pros of the items',
        cons: 'Cons of the items',
        others: 'Other additional information'
      },
      fullUrl: 'https://pubmed.ncbi.nlm.nih.gov/18622539/'
    }

  ];

  getItems() {
    return this.items;
  }

  searchItems(query: string) {
    return this.items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  filterItems(tags: string[]) {
    return this.items.filter(item => tags.every(tag => item.tags.includes(tag)));
  }
}
