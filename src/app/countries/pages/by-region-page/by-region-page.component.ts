import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  constructor(private countryService: CountriesService) {}

  public country: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectRegion?: Region;

  ngOnInit(): void {
    this.country = this.countryService.cacheStore.byRegion.countries;
    this.selectRegion = this.countryService.cacheStore.byRegion.region;
  }
  searchByRegion(region: Region): void {
    this.selectRegion = region;

    this.countryService.searchRegion(region).subscribe((region) => {
      this.country = region;
    });
  }
}
